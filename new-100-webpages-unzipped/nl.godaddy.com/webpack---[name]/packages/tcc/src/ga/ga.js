const browserHelper = require('@exp/exp-utils/helper/browser');
const authHelper = require('@exp/exp-utils/helper/auth');
const windowHelper = require('@exp/exp-utils/helper/window');
const environmentHelper = require('@exp/exp-utils/helper/environment');
const arrayHelper = require('@exp/exp-utils/helper/array');
const urlHelper = require('@exp/exp-utils/helper/url');
const object = require('@exp/exp-utils/helper/object');
const scrubber = require('@exp/exp-utils/helper/scrubber');
const configHelper = require('@tcc/shared/src/helpers/config');
const consentHelper = require('../helpers/policy');
const tealium = require('../tealium/tealium');

const logger = require('@exp/exp-utils/helper/logger');

const gaFilter = require('./filter');
const gaTracker = require('./tracker');

let _gaAccount = configHelper.get('tcc.gaAccountDev');
if (environmentHelper.isProduction()) {
    _gaAccount = configHelper.get('tcc.gaAccountProd');
} else if (environmentHelper.isTest()) {
    _gaAccount = configHelper.get('tcc.gaAccountTest');
}

const _gaUrlSrc = 'https://www.googletagmanager.com/gtag/js?id=' + _gaAccount;
const _gaDataVariable = '_analyticsDataLayer';
const _gaDataLogVariable = '_analyticsDataSendLog';

let _userId;
let _cdConfig;
let _initialViewFired;

const _dataLayer = browserHelper.getWindow()[_gaDataVariable] || [];
const _dataLayerLog = [];

let _queue = [];

// 20 hits can be sent to GA immediately.
// Hits are then refeshed at a rate of 2/second
// (See URL to documentation under _process fn)
let _gaHits = 20;

let _processInterval;

// Initialize _analyticsDataLayer
windowHelper.setWindowVar(_gaDataVariable, _dataLayer);
windowHelper.setInternalVar(_gaDataLogVariable, _dataLayerLog);

/*      GTAG HELPER METHODS     */

// Insert records into the gtag data layer
function _ga() {
    if (process.env.NODE_ENV !== 'production') {
        logger.debug('>>> Push to', _gaDataVariable, arguments);
    }
    arrayHelper.logToArray(_dataLayerLog, arguments);
    _dataLayer.push(arguments);
}

function _enqueue() {
    _queue.push(arguments);
}

function _shouldRateLimit(record) {
    // Setting properties on the tracker, such as the user id, should not rate limit
    return typeof record !== 'undefined' && record[0] !== 'set';
}

// There are 20 initial hits before rate limiting to 2/second
// https://developers.google.com/analytics/devguides/collection/gtagjs/limits-quotas#analyticsjs
function _process() {
    // If there are items in the queue AND we have hits left OR should not rate limit the next record
    if (_queue.length > 0 && (_gaHits > 0 || !_shouldRateLimit(_queue[0]))) {
        try {
            var record = _queue.shift();
            _ga.apply(null, record);

            // Do not reduce the # of hits if we're
            // just setting a value on the tracker
            if (_shouldRateLimit(record)) {
                _gaHits = _gaHits - 1;
            }
            if (_gaHits === 0) {
                // Refresh hits after 1 second
                setTimeout(() => {
                    _gaHits = _gaHits + 2;
                }, 1000);
            }
        } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
                logger.error('Error sending record to GA', error);
            }
        }
    }
}

// If the user has changed, we need to set the value in the GA tracker
function _updateUserId(asynchronous) {
    const userId = authHelper.getUserId(true);
    if (_userId !== userId) {
        _userId = userId;
        if (asynchronous) {
            // If this was triggered from an async/rate limited action,
            // we should update the user id asynchronously
            _enqueue('set', 'user_id', userId);
        } else {
            _ga('set', 'user_id', userId);
        }
    }
}

/*      INITIALIZATION METHODS       */

// Sends user config record to GA if the auth tokens have changed
function _updateAuth(asynchronous) {
    // Update auth tokens with what is currently in the browser
    authHelper.updateAuthTokens();

    // Checks if the auth token has changed and will update GA if so
    _updateUserId(asynchronous);
}

function _onLoad() {
    if (!_initialViewFired) {
        if (tealium.isTealiumLoaded()) {
            tealium.sendPageView({
                ga_client_id: gaTracker.getGaClientId()
            });
        }
        _initialViewFired = true;
    }
}

// Initial config record
function _insertConfigRecord() {
    const configObj = {
        send_page_view: false,
        anonymize_ip: true
    };

    // Define the custom variable map
    _cdConfig = gaFilter.getCustomVariableConfig();
    configObj.custom_map = _cdConfig;

    // Setting the config will not call GA directly.
    // Therefore, do not rate limit.
    _ga('config', _gaAccount, configObj);

    // Send a new user config record to GA if the auth tokens have changed
    _updateAuth(false);
}

// Inject gtag script into the DOM
function _loadGA() {
    const script = browserHelper.getDocument().createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = _gaUrlSrc;
    if (_gaDataVariable) {
        script.src += '&l=' + _gaDataVariable;
    }
    (browserHelper.getDocument().getElementsByTagName('head')[0] || browserHelper.getDocument().getElementsByTagName(
        'body')[0]).appendChild(script);
}

function _setSendTo(eventData, account) {
    if (!eventData || !account) {
        return;
    }

    // Sets the send_to parameter to the GA account to prevent other google
    // platforms from consuming the event as well.
    eventData.send_to = account;
}

function _init() {
    // Set GA account in tracker module so that dependencies can
    // lookup/parse from the GA tracker object
    gaTracker.setGaAccountId(_gaAccount);

    // Initial GA record to configure the client/session/user
    _insertConfigRecord();

    // Insert <script> tag for loading GA
    _loadGA();

    // Watch/process any records pushed to the _queue
    _processInterval = setInterval(_process, 100);
}

function init() {
    if (consentHelper.hasConsent()) {
        _init();
    } else if (!consentHelper.hasConsentBeenAsked()) {
        // If the consent UI has not already collected data, we need to wait until it is present and re-evaluate
        setTimeout(init, configHelper.get('tcc.consentDelayMs'));
    }
}

/*      PUBLIC METHODS       */

function sendPageView(virtualPageName, extras) {
    // Send a new user config record to GA if the auth tokens have changed
    _updateAuth(true);

    const pathname = browserHelper.getWindow().location.pathname;
    const qs = urlHelper.getCleanQueryString();

    // identifies if querystring needs to be modified and page_path needs to be set
    let gaContentQs;
    if (qs && qs.indexOf('utm_content=') !== -1) {
        gaContentQs = urlHelper.moveUtmContent(qs);
    }

    // Do not set pagePath unless virtualPageName is provided or utm_content modified qs was found.
    // ignore modified qs if virtualPageName was provided
    let pagePath;
    if (virtualPageName) {
        pagePath = virtualPageName;
    } else if (gaContentQs) {
        pagePath = pathname + gaContentQs;
    }

    // uri will be picked up and mapped to a custom variable
    const eventObj = gaFilter.getValuesForFilterMap(object.merge(extras, {
        page_uri: pathname + qs
    }));

    // Custom Variable map should always be defined for a gtag config record
    eventObj.custom_map = gaFilter.getCustomVariableConfig();
    eventObj.page_path = scrubber.removePII(pagePath, 'virtual page path');
    eventObj.send_page_view = true;
    eventObj.anonymize_ip = true;
    eventObj.event_callback = _onLoad;

    _setSendTo(eventObj, _gaAccount);

    _enqueue('event', 'page_view', eventObj);
}

function sendPageEvent(eId, eventData, nonInteraction) {
    // Send a new user config record to GA if the auth tokens have changed
    _updateAuth(true);

    // Pass eventData in so that associated event values
    // can be parsed for GA
    const eventObj = gaFilter.getValuesForFilterMap(eventData);
    _setSendTo(eventObj, _gaAccount);

    if (nonInteraction) {
        eventObj.non_interaction = true;
    }

    _enqueue('event', eId, eventObj);
}

function sendEcommerceEvent(type, eventData) {
    // Send a new user config record to GA if the auth tokens have changed
    _updateAuth(false);

    // Pass eventData in so that associated event values can be parsed for GA
    //  * eventtype is only used for the filtermap. it is not sent to GA as "eventtype"
    const filterValues = gaFilter.getValuesForFilterMap(object.merge(eventData, {
        eventtype: type
    }));

    // Merge ecomm event items with CD values
    const eventObj = object.merge(eventData, filterValues);
    _setSendTo(eventObj, _gaAccount);

    // Only ecommerce events can push to GA without being rate limited
    _ga('event', type, eventObj);
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
    internalExports = {
        _dataLayer: _dataLayer,
        _gaAccount: _gaAccount,
        _gaDataVariable: _gaDataVariable,
        _process: _process,
        _onLoad: _onLoad,
        _setSendTo: _setSendTo,
        setInitialViewFired(hasFired) {
            _initialViewFired = hasFired;
        },
        setQueue(queue) {
            _queue = queue;
        },
        getQueue() {
            return _queue;
        },
        setHits: (hits) => {
            _gaHits = hits;
        },
        getHits: () => {
            return _gaHits;
        },
        setUserId: (userId) => {
            _userId = userId;
        },
        stopProcessing: () => {
            clearInterval(_processInterval);
        }
    };
}

module.exports = object.merge({
        sendPageView: sendPageView,
        sendPageEvent: sendPageEvent,
        sendEcommerceEvent: sendEcommerceEvent,
        init: init
    },
    internalExports
);