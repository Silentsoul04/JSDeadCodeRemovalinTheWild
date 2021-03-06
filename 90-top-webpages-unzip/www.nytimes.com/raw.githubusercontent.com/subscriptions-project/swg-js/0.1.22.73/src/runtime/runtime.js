/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ActivityPorts} from '../components/activities';
import {AnalyticsEvent} from '../proto/api_messages';
import {ButtonApi} from './button-api';
import {CSS as SWG_DIALOG} from '../../build/css/components/dialog.css';
import {Callbacks} from './callbacks';
import {ContributionsFlow} from './contributions-flow';
import {DeferredAccountFlow} from './deferred-account-flow';
import {DepsDef} from './deps';
import {DialogManager} from '../components/dialog-manager';
import {Doc, resolveDoc} from '../model/doc';
import {EntitlementsManager} from './entitlements-manager';
import {ExperimentFlags} from './experiment-flags';
import {Fetcher, XhrFetcher} from './fetcher';
import {JsError} from './jserror';
import {
  LinkCompleteFlow,
  LinkbackFlow,
  LinkSaveFlow,
} from './link-accounts-flow';
import {LoginPromptApi} from './login-prompt-api';
import {LoginNotificationApi} from './login-notification-api';
import {PayClient} from './pay-client';
import {WaitForSubscriptionLookupApi} from './wait-for-subscription-lookup-api';
import {OffersApi} from './offers-api';
import {OffersFlow, SubscribeOptionFlow, AbbrvOfferFlow} from './offers-flow';
import {PageConfig} from '../model/page-config';
import {
  PageConfigResolver,
  getControlFlag,
} from '../model/page-config-resolver';
import {PayStartFlow, PayCompleteFlow} from './pay-flow';
import {Preconnect} from '../utils/preconnect';
import {Storage} from './storage';
import {
  Subscriptions,
  WindowOpenMode,
  defaultConfig,
  ProductType,
} from '../api/subscriptions';
import {debugLog} from '../utils/log';
import {injectStyleSheet, isEdgeBrowser} from '../utils/dom';
import {isArray} from '../utils/types';
import {isExperimentOn} from './experiments';
import {setExperiment} from './experiments';
import {AnalyticsService} from './analytics-service';
import {AnalyticsMode} from '../api/subscriptions';
import {Propensity} from './propensity';
import {ClientEventManager} from './client-event-manager';
import {Logger} from './logger';
import {assert} from '../utils/log';
import {isBoolean} from '../utils/types';

const RUNTIME_PROP = 'SWG';
const RUNTIME_LEGACY_PROP = 'SUBSCRIPTIONS'; // MIGRATE

/** @private {!Runtime} */
let runtimeInstance_;

/**
 * Returns runtime for testing if available. Throws if the runtime is not
 * initialized yet.
 * @visibleForTesting
 * @return {!Runtime}
 */
export function getRuntime() {
  assert(runtimeInstance_, 'not initialized yet');
  return runtimeInstance_;
}

/**
 * @param {!Window} win
 */
export function installRuntime(win) {
  if (win[RUNTIME_PROP] && !isArray(win[RUNTIME_PROP])) {
    return;
  }

  const runtime = new Runtime(win);

  const waitingArray = [].concat(win[RUNTIME_PROP], win[RUNTIME_LEGACY_PROP]);

  // Public runtime.
  const publicRuntime = createPublicRuntime(runtime);

  const dependencyInstaller = {};

  /**
   * @param {function(!Subscriptions)} callback
   */
  function pushDependency(callback) {
    if (!callback) {
      return;
    }
    runtime.whenReady().then(() => {
      callback(publicRuntime);
    });
  }
  Object.defineProperty(dependencyInstaller, 'push', {
    get: () => pushDependency,
    configurable: false,
  });
  win[RUNTIME_PROP] = dependencyInstaller;
  win[RUNTIME_LEGACY_PROP] = dependencyInstaller;
  if (waitingArray) {
    waitingArray.forEach(pushDependency);
  }
  runtimeInstance_ = runtime;
  runtime.startSubscriptionsFlowIfNeeded();
}

/**
 * @implements {Subscriptions}
 */
export class Runtime {
  /**
   * @param {!Window} win
   */
  constructor(win) {
    /** @private @const {!Window} */
    this.win_ = win;

    /** @private @const {!Doc} */
    this.doc_ = resolveDoc(win);

    /** @private @const {!Promise} */
    this.ready_ = Promise.resolve();

    /** @private {?string} */
    this.productOrPublicationId_ = null;

    /** @private @const {!../api/subscriptions.Config} */
    this.config_ = {};

    /** @private {boolean} */
    this.committed_ = false;

    /** @private {?function((!ConfiguredRuntime|!Promise))} */
    this.configuredResolver_ = null;

    /** @private @const {!Promise<!ConfiguredRuntime>} */
    this.configuredPromise_ = new Promise(resolve => {
      this.configuredResolver_ = resolve;
    });

    /** @private {?PageConfigResolver} */
    this.pageConfigResolver_ = null;

    /** @private @const {!ButtonApi} */
    this.buttonApi_ = new ButtonApi(this.doc_, this.configuredPromise_);
    this.buttonApi_.init(); // Injects swg-button stylesheet.
  }

  /**
   * @return {!Promise}
   */
  whenReady() {
    return this.ready_;
  }

  /**
   * @param {boolean} commit
   * @return {!Promise<!ConfiguredRuntime>}
   * @private
   */
  configured_(commit) {
    if (!this.committed_ && commit) {
      this.committed_ = true;
      /** @type {!Promise<!PageConfig>} */
      let pageConfigPromise;
      if (this.productOrPublicationId_) {
        pageConfigPromise = Promise.resolve(
          new PageConfig(this.productOrPublicationId_, /* locked */ false)
        );
      } else {
        this.pageConfigResolver_ = new PageConfigResolver(this.doc_);
        pageConfigPromise = this.pageConfigResolver_
          .resolveConfig()
          .then(config => {
            this.pageConfigResolver_ = null;
            return config;
          });
      }
      pageConfigPromise.then(
        pageConfig => {
          this.configuredResolver_(
            new ConfiguredRuntime(
              this.doc_,
              pageConfig,
              /* opt_integr */ {configPromise: this.configuredPromise_},
              this.config_
            )
          );
          this.configuredResolver_ = null;
        },
        reason => {
          this.configuredResolver_(Promise.reject(reason));
          this.configuredResolver_ = null;
        }
      );
    } else if (commit && this.pageConfigResolver_) {
      this.pageConfigResolver_.check();
    }
    return this.configuredPromise_;
  }

  /**
   * Starts the subscription flow if it hasn't been started and the page is
   * configured to start it automatically.
   *
   * @return {?Promise}
   * @package
   */
  startSubscriptionsFlowIfNeeded() {
    const control = getControlFlag(this.win_.document);
    debugLog(control, 'mode');
    if (control == 'manual') {
      // "Skipping automatic start because control flag is set to "manual".
      return null;
    }
    return this.start();
  }

  /** @override */
  init(productOrPublicationId) {
    assert(!this.committed_, 'already configured');
    this.productOrPublicationId_ = productOrPublicationId;
  }

  /** @override */
  configure(config) {
    // Accumulate config for startup.
    Object.assign(this.config_, config);
    return this.configured_(false).then(runtime => runtime.configure(config));
  }

  /** @override */
  start() {
    return this.configured_(true).then(runtime => runtime.start());
  }

  /** @override */
  reset() {
    return this.configured_(true).then(runtime => runtime.reset());
  }

  /** @override */
  clear() {
    return this.configured_(true).then(runtime => runtime.clear());
  }

  /** @override */
  getEntitlements(opt_encryptedDocumentKey) {
    return this.configured_(true).then(runtime =>
      runtime.getEntitlements(opt_encryptedDocumentKey)
    );
  }

  /** @override */
  setOnEntitlementsResponse(callback) {
    return this.configured_(false).then(runtime =>
      runtime.setOnEntitlementsResponse(callback)
    );
  }

  /** @override */
  getOffers(opt_options) {
    return this.configured_(true).then(runtime =>
      runtime.getOffers(opt_options)
    );
  }

  /** @override */
  showOffers(opt_options) {
    return this.configured_(true).then(runtime =>
      runtime.showOffers(opt_options)
    );
  }

  /** @override */
  showUpdateOffers(opt_options) {
    return this.configured_(true).then(runtime =>
      runtime.showUpdateOffers(opt_options)
    );
  }

  /** @override */
  showSubscribeOption(opt_options) {
    return this.configured_(true).then(runtime =>
      runtime.showSubscribeOption(opt_options)
    );
  }

  /** @override */
  showAbbrvOffer(opt_options) {
    return this.configured_(true).then(runtime =>
      runtime.showAbbrvOffer(opt_options)
    );
  }

  /** @override */
  showContributionOptions(opt_options) {
    return this.configured_(true).then(runtime =>
      runtime.showContributionOptions(opt_options)
    );
  }

  /** @override */
  waitForSubscriptionLookup(accountPromise) {
    return this.configured_(true).then(runtime =>
      runtime.waitForSubscriptionLookup(accountPromise)
    );
  }

  /** @override */
  setOnNativeSubscribeRequest(callback) {
    return this.configured_(false).then(runtime =>
      runtime.setOnNativeSubscribeRequest(callback)
    );
  }

  /** @override */
  setOnSubscribeResponse(callback) {
    return this.configured_(false).then(runtime =>
      runtime.setOnSubscribeResponse(callback)
    );
  }

  /** @override */
  subscribe(sku) {
    return this.configured_(true).then(runtime => runtime.subscribe(sku));
  }

  /** @override */
  updateSubscription(subscriptionRequest) {
    return this.configured_(true).then(runtime =>
      runtime.updateSubscription(subscriptionRequest)
    );
  }

  /** @override */
  setOnContributionResponse(callback) {
    return this.configured_(false).then(runtime =>
      runtime.setOnContributionResponse(callback)
    );
  }

  /** @override */
  contribute(skuOrSubscriptionRequest) {
    return this.configured_(true).then(runtime =>
      runtime.contribute(skuOrSubscriptionRequest)
    );
  }

  /** @override */
  completeDeferredAccountCreation(opt_options) {
    return this.configured_(true).then(runtime =>
      runtime.completeDeferredAccountCreation(opt_options)
    );
  }

  /** @override */
  setOnLoginRequest(callback) {
    return this.configured_(false).then(runtime =>
      runtime.setOnLoginRequest(callback)
    );
  }

  /** @override */
  setOnLinkComplete(callback) {
    return this.configured_(false).then(runtime =>
      runtime.setOnLinkComplete(callback)
    );
  }

  /** @override */
  linkAccount() {
    return this.configured_(true).then(runtime => runtime.linkAccount());
  }

  /** @override */
  setOnFlowStarted(callback) {
    return this.configured_(false).then(runtime =>
      runtime.setOnFlowStarted(callback)
    );
  }

  /** @override */
  setOnFlowCanceled(callback) {
    return this.configured_(false).then(runtime =>
      runtime.setOnFlowCanceled(callback)
    );
  }

  /** @override */
  saveSubscription(saveSubscriptionRequestCallback) {
    return this.configured_(true).then(runtime => {
      return runtime.saveSubscription(saveSubscriptionRequestCallback);
    });
  }

  /** @override */
  showLoginPrompt() {
    return this.configured_(true).then(runtime => {
      return runtime.showLoginPrompt();
    });
  }

  /** @override */
  showLoginNotification() {
    return this.configured_(true).then(runtime => {
      return runtime.showLoginNotification();
    });
  }

  /** @override */
  createButton(optionsOrCallback, opt_callback) {
    return this.buttonApi_.create(optionsOrCallback, opt_callback);
  }

  /** @override */
  attachSmartButton(button, optionsOrCallback, opt_callback) {
    return this.configured_(true).then(runtime =>
      runtime.attachSmartButton(button, optionsOrCallback, opt_callback)
    );
  }

  /** @override */
  attachButton(button, optionsOrCallback, opt_callback) {
    return this.buttonApi_.attach(button, optionsOrCallback, opt_callback);
  }

  /** @override */
  getPropensityModule() {
    return this.configured_(true).then(runtime => {
      return runtime.getPropensityModule();
    });
  }

  /** @override */
  getLogger() {
    return this.configured_(true).then(runtime => runtime.getLogger());
  }
}

/**
 * @implements {DepsDef}
 * @implements {Subscriptions}
 */
export class ConfiguredRuntime {
  /**
   * @param {!Window|!Document|!Doc} winOrDoc
   * @param {!../model/page-config.PageConfig} pageConfig
   * @param {{
   *     fetcher: (!Fetcher|undefined),
   *     configPromise: (!Promise|undefined),
   *   }=} opt_integr
   * @param {!../api/subscriptions.Config=} opt_config
   */
  constructor(winOrDoc, pageConfig, opt_integr, opt_config) {
    opt_integr = opt_integr || {};
    opt_integr.configPromise = opt_integr.configPromise || Promise.resolve();

    /** @private @const {!ClientEventManager} */
    this.eventManager_ = new ClientEventManager(opt_integr.configPromise);

    /** @private @const {!Doc} */
    this.doc_ = resolveDoc(winOrDoc);

    /** @private @const {!Window} */
    this.win_ = this.doc_.getWin();

    /** @private @const {!../api/subscriptions.Config} */
    this.config_ = defaultConfig();

    if (isEdgeBrowser(this.win_)) {
      // TODO(dvoytenko, b/120607343): Find a way to remove this restriction
      // or move it to Web Activities.
      this.config_.windowOpenMode = WindowOpenMode.REDIRECT;
    }
    if (opt_config) {
      this.configure_(opt_config);
    }

    /** @private @const {!../model/page-config.PageConfig} */
    this.pageConfig_ = pageConfig;

    /** @private @const {!Promise} */
    this.documentParsed_ = this.doc_.whenReady();

    /** @private @const {!JsError} */
    this.jserror_ = new JsError(this.doc_);

    /** @private @const {!Fetcher} */
    this.fetcher_ = opt_integr.fetcher || new XhrFetcher(this.win_);

    /** @private @const {!Storage} */
    this.storage_ = new Storage(this.win_);

    /** @private @const {!DialogManager} */
    this.dialogManager_ = new DialogManager(this.doc_);

    /** @private @const {!../components/activities.ActivityPorts} */
    this.activityPorts_ = new ActivityPorts(this.win_);

    /** @private @const {!PayClient} */
    this.payClient_ = new PayClient(
      this.win_,
      this.activityPorts_,
      this.dialogManager_
    );

    /** @private @const {!Callbacks} */
    this.callbacks_ = new Callbacks();

    //NOTE: 'this' is passed in as a DepsDef.  Do not pass in 'this' before
    //analytics service and entitlements manager are constructed unless
    //you are certain they do not rely on them because they are part of that
    //definition.
    /** @private @const {!Logger} */
    this.logger_ = new Logger(this);

    /** @private @const {!AnalyticsService} */
    this.analyticsService_ = new AnalyticsService(this);

    /** @private @const {!EntitlementsManager} */
    this.entitlementsManager_ = new EntitlementsManager(
      this.win_,
      this.pageConfig_,
      this.fetcher_,
      this // See note about 'this' above
    );

    /** @private @const {!Propensity} */
    this.propensityModule_ = new Propensity(
      this.win_,
      this, // See note about 'this' above
      this.fetcher_
    );

    /** @private @const {!OffersApi} */
    this.offersApi_ = new OffersApi(this.pageConfig_, this.fetcher_);

    /** @private @const {!ButtonApi} */
    this.buttonApi_ = new ButtonApi(this.doc_, Promise.resolve(this));

    const preconnect = new Preconnect(this.win_.document);

    preconnect.prefetch('$assets$/loader.svg');
    LinkCompleteFlow.configurePending(this);
    PayCompleteFlow.configurePending(this);
    this.payClient_.preconnect(preconnect);

    injectStyleSheet(this.doc_, SWG_DIALOG);

    // Report redirect errors if any.
    this.activityPorts_.onRedirectError(error => {
      this.analyticsService_.addLabels(['redirect']);
      this.eventManager_.logSwgEvent(
        AnalyticsEvent.EVENT_PAYMENT_FAILED,
        false
      );
      this.jserror_.error('Redirect error', error);
    });
  }

  /** @override */
  doc() {
    return this.doc_;
  }

  /** @override */
  win() {
    return this.win_;
  }

  /** @override */
  pageConfig() {
    return this.pageConfig_;
  }

  /** @override */
  jserror() {
    return this.jserror_;
  }

  /** @override */
  activities() {
    return this.activityPorts_;
  }

  /** @override */
  payClient() {
    return this.payClient_;
  }

  /** @override */
  dialogManager() {
    return this.dialogManager_;
  }

  /** @override */
  entitlementsManager() {
    return this.entitlementsManager_;
  }

  /** @override */
  callbacks() {
    return this.callbacks_;
  }

  /** @override */
  storage() {
    return this.storage_;
  }

  /** @override */
  analytics() {
    return this.analyticsService_;
  }

  /** @override */
  init() {
    // Implemented by the `Runtime` class.
  }

  /** @override */
  configure(config) {
    // Indirected for constructor testing.
    this.configure_(config);
  }

  /**
   * @param {!../api/subscriptions.Config} config
   * @private
   */
  configure_(config) {
    // Validate first.
    let error = '';
    for (const k in config) {
      const v = config[k];
      switch (k) {
        case 'windowOpenMode':
          if (v != WindowOpenMode.AUTO && v != WindowOpenMode.REDIRECT) {
            error = 'Unknown windowOpenMode: ' + v;
          }
          break;
        case 'experiments':
          v.forEach(experiment => setExperiment(this.win_, experiment, true));
          break;
        case 'analyticsMode':
          if (v != AnalyticsMode.DEFAULT && v != AnalyticsMode.IMPRESSIONS) {
            error = 'Unknown analytics mode: ' + v;
          }
          break;
        case 'enableSwgAnalytics':
          if (!isBoolean(v)) {
            error = 'Unknown enableSwgAnalytics value: ' + v;
          }
          break;
        case 'enablePropensity':
          if (!isBoolean(v)) {
            error = 'Unknown enablePropensity value: ' + v;
          }
          break;
        default:
          error = 'Unknown config property: ' + k;
      }
    }
    // Throw error string if it's not null
    assert(!error, error || undefined);
    // Assign.
    Object.assign(this.config_, config);
  }

  /** @override */
  config() {
    return this.config_;
  }

  /** @override */
  reset() {
    this.entitlementsManager_.reset();
    this.dialogManager_.completeAll();
  }

  /** @override */
  clear() {
    this.entitlementsManager_.clear();
    this.dialogManager_.completeAll();
  }

  /** @override */
  start() {
    // No need to run entitlements without a product or for an unlocked page.
    if (!this.pageConfig_.getProductId() || !this.pageConfig_.isLocked()) {
      return Promise.resolve();
    }
    this.getEntitlements();
  }

  /** @override */
  getEntitlements(opt_encryptedDocumentKey) {
    return this.entitlementsManager_
      .getEntitlements(opt_encryptedDocumentKey)
      .then(entitlements => entitlements.clone());
  }

  /** @override */
  setOnEntitlementsResponse(callback) {
    this.callbacks_.setOnEntitlementsResponse(callback);
  }

  /** @override */
  getOffers(opt_options) {
    return this.offersApi_.getOffers(opt_options && opt_options.productId);
  }

  /** @override */
  showOffers(opt_options) {
    return this.documentParsed_.then(() => {
      const errorMessage =
        'The showOffers() method cannot be used to update a subscription. ' +
        'Use the showUpdateOffers() method instead.';
      assert(opt_options ? !opt_options['oldSku'] : true, errorMessage);
      const flow = new OffersFlow(this, opt_options);
      return flow.start();
    });
  }

  /** @override */
  showUpdateOffers(opt_options) {
    assert(
      isExperimentOn(this.win_, ExperimentFlags.REPLACE_SUBSCRIPTION),
      'Not yet launched!'
    );
    return this.documentParsed_.then(() => {
      const errorMessage =
        'The showUpdateOffers() method cannot be used for new subscribers. ' +
        'Use the showOffers() method instead.';
      assert(opt_options ? !!opt_options['oldSku'] : false, errorMessage);
      const flow = new OffersFlow(this, opt_options);
      return flow.start();
    });
  }

  /** @override */
  showSubscribeOption(opt_options) {
    return this.documentParsed_.then(() => {
      const flow = new SubscribeOptionFlow(this, opt_options);
      return flow.start();
    });
  }

  /** @override */
  showAbbrvOffer(opt_options) {
    return this.documentParsed_.then(() => {
      const flow = new AbbrvOfferFlow(this, opt_options);
      return flow.start();
    });
  }

  /** @override */
  showContributionOptions(opt_options) {
    assert(
      isExperimentOn(this.win_, ExperimentFlags.CONTRIBUTIONS),
      'Not yet launched!'
    );
    return this.documentParsed_.then(() => {
      const flow = new ContributionsFlow(this, opt_options);
      return flow.start();
    });
  }

  /** @override */
  waitForSubscriptionLookup(accountPromise) {
    return this.documentParsed_.then(() => {
      const wait = new WaitForSubscriptionLookupApi(this, accountPromise);
      return wait.start();
    });
  }

  /** @override */
  setOnLoginRequest(callback) {
    this.callbacks_.setOnLoginRequest(callback);
  }

  /** @override */
  setOnLinkComplete(callback) {
    this.callbacks_.setOnLinkComplete(callback);
  }

  /** @override */
  linkAccount() {
    return this.documentParsed_.then(() => {
      return new LinkbackFlow(this).start();
    });
  }

  /** @override */
  saveSubscription(saveSubscriptionRequestCallback) {
    return this.documentParsed_.then(() => {
      return new LinkSaveFlow(this, saveSubscriptionRequestCallback).start();
    });
  }

  /** @override */
  showLoginPrompt() {
    return this.documentParsed_.then(() => {
      return new LoginPromptApi(this).start();
    });
  }

  /** @override */
  showLoginNotification() {
    return this.documentParsed_.then(() => {
      return new LoginNotificationApi(this).start();
    });
  }

  /** @override */
  setOnNativeSubscribeRequest(callback) {
    this.callbacks_.setOnSubscribeRequest(callback);
  }

  /** @override */
  setOnSubscribeResponse(callback) {
    this.callbacks_.setOnSubscribeResponse(callback);
  }

  /** @override */
  subscribe(sku) {
    const errorMessage =
      'The subscribe() method can only take a sku as its parameter; ' +
      'for subscription updates please use the updateSubscription() method';
    assert(typeof sku === 'string', errorMessage);
    return this.documentParsed_.then(() => {
      return new PayStartFlow(this, sku).start();
    });
  }

  /** @override */
  updateSubscription(subscriptionRequest) {
    assert(
      isExperimentOn(this.win_, ExperimentFlags.REPLACE_SUBSCRIPTION),
      'Not yet launched!'
    );
    const errorMessage =
      'The updateSubscription() method should be used for subscription ' +
      'updates; for new subscriptions please use the subscribe() method';
    assert(
      subscriptionRequest ? subscriptionRequest['oldSku'] : false,
      errorMessage
    );
    return this.documentParsed_.then(() => {
      return new PayStartFlow(this, subscriptionRequest).start();
    });
  }

  /** @override */
  setOnContributionResponse(callback) {
    this.callbacks_.setOnContributionResponse(callback);
  }

  /** @override */
  contribute(skuOrSubscriptionRequest) {
    assert(
      isExperimentOn(this.win_, ExperimentFlags.CONTRIBUTIONS),
      'Not yet launched!'
    );

    return this.documentParsed_.then(() => {
      return new PayStartFlow(
        this,
        skuOrSubscriptionRequest,
        ProductType.UI_CONTRIBUTION
      ).start();
    });
  }

  /** @override */
  completeDeferredAccountCreation(opt_options) {
    return this.documentParsed_.then(() => {
      return new DeferredAccountFlow(this, opt_options || null).start();
    });
  }

  /** @override */
  setOnFlowStarted(callback) {
    this.callbacks_.setOnFlowStarted(callback);
  }

  /** @override */
  setOnFlowCanceled(callback) {
    this.callbacks_.setOnFlowCanceled(callback);
  }

  /** @override */
  createButton(optionsOrCallback, opt_callback) {
    // This is a minor duplication to allow this code to be sync.
    return this.buttonApi_.create(optionsOrCallback, opt_callback);
  }

  /** @override */
  attachButton(button, optionsOrCallback, opt_callback) {
    // This is a minor duplication to allow this code to be sync.
    this.buttonApi_.attach(button, optionsOrCallback, opt_callback);
  }

  /** @override */
  attachSmartButton(button, optionsOrCallback, opt_callback) {
    assert(
      isExperimentOn(this.win_, ExperimentFlags.SMARTBOX),
      'Not yet launched!'
    );
    this.buttonApi_.attachSmartButton(
      this,
      button,
      optionsOrCallback,
      opt_callback
    );
  }

  /** @override */
  getPropensityModule() {
    return Promise.resolve(this.propensityModule_);
  }

  /** @override
   * @return {!ClientEventManager}
   */
  eventManager() {
    return this.eventManager_;
  }

  /** @override */
  getLogger() {
    return Promise.resolve(this.logger_);
  }
}

/**
 * @param {!Runtime} runtime
 * @return {!Subscriptions}
 */
function createPublicRuntime(runtime) {
  return /** @type {!Subscriptions} */ ({
    init: runtime.init.bind(runtime),
    configure: runtime.configure.bind(runtime),
    start: runtime.start.bind(runtime),
    reset: runtime.reset.bind(runtime),
    clear: runtime.clear.bind(runtime),
    getEntitlements: runtime.getEntitlements.bind(runtime),
    linkAccount: runtime.linkAccount.bind(runtime),
    showLoginPrompt: runtime.showLoginPrompt.bind(runtime),
    showLoginNotification: runtime.showLoginNotification.bind(runtime),
    getOffers: runtime.getOffers.bind(runtime),
    showOffers: runtime.showOffers.bind(runtime),
    showUpdateOffers: runtime.showUpdateOffers.bind(runtime),
    showAbbrvOffer: runtime.showAbbrvOffer.bind(runtime),
    showSubscribeOption: runtime.showSubscribeOption.bind(runtime),
    showContributionOptions: runtime.showContributionOptions.bind(runtime),
    waitForSubscriptionLookup: runtime.waitForSubscriptionLookup.bind(runtime),
    subscribe: runtime.subscribe.bind(runtime),
    updateSubscription: runtime.updateSubscription.bind(runtime),
    contribute: runtime.contribute.bind(runtime),
    completeDeferredAccountCreation: runtime.completeDeferredAccountCreation.bind(
      runtime
    ),
    setOnEntitlementsResponse: runtime.setOnEntitlementsResponse.bind(runtime),
    setOnLoginRequest: runtime.setOnLoginRequest.bind(runtime),
    setOnLinkComplete: runtime.setOnLinkComplete.bind(runtime),
    setOnNativeSubscribeRequest: runtime.setOnNativeSubscribeRequest.bind(
      runtime
    ),
    setOnSubscribeResponse: runtime.setOnSubscribeResponse.bind(runtime),
    setOnContributionResponse: runtime.setOnContributionResponse.bind(runtime),
    setOnFlowStarted: runtime.setOnFlowStarted.bind(runtime),
    setOnFlowCanceled: runtime.setOnFlowCanceled.bind(runtime),
    saveSubscription: runtime.saveSubscription.bind(runtime),
    createButton: runtime.createButton.bind(runtime),
    attachButton: runtime.attachButton.bind(runtime),
    attachSmartButton: runtime.attachSmartButton.bind(runtime),
    getPropensityModule: runtime.getPropensityModule.bind(runtime),
    getLogger: runtime.getLogger.bind(runtime),
  });
}

/**
 * @return {!Function}
 * @protected
 */
export function getSubscriptionsClassForTesting() {
  return Subscriptions;
}

/**
 * @return {!Function}
 * @protected
 */
export function getFetcherClassForTesting() {
  return Fetcher;
}

/** @package Visible for testing only. */
export function getDocClassForTesting() {
  return Doc;
}
