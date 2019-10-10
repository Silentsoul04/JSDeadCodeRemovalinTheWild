import trackInit from './track';
import heartbeatInit from './heartbeat';
import integrationInit from './integration';
import utilityInit from './utility';
import personalizeInit from './personalize';
import overlayInit from './overlays/overlay';
import cookies from './cookies';
import sessionOverlayInit from './overlays/sessionOverlay';

export default (envConfig) => {
    let fetchPersonalize;
    let click;
    let impression;
    let pageview;
    let appendHeartbeatListener;
    let getCurrentUser;
    let userSignUp;
    let userSignUpConfirmedOptIn;
    let addToCart;
    let purchase;
    let customEvent;
    let SPMPersonalize;
    let SPMOverlay;
    let gdprDoNotTrack;
    let cookiesDoNotTrack;
    let dismiss;

    let config = {};

    return {
        debug() {
            return { ...config
            };
        },

        init({
            userIdKey = 'hid',
            checkBlocked = false,
            isCustom = false,
            autoTrackPageview = true,
            excludeContent = false,
            useStoredTags = true,
            customerId,
            onSuccess,
            onError,
            onSignupSuccess,
            onSignupError,
        } = {}) {
            config = {
                VERSION: 'v1.0.1',
                ...envConfig,
                isCustom,
                userIdKey,
                checkBlocked,
                customerId,
                overlays: {},
                sections: {},
                requestedSections: {},
                impressions: {},
                cleanJSON: [],
                autoTrackPageview,
                excludeContent,
                useStoredTags,
                onSuccess,
                onError,
                onSignupSuccess,
                onSignupError,
            };

            if (typeof config.customerId === 'undefined') {
                throw Error('Customer ID is required.');
            }

            cookies.refreshNoCookies();
            cookies.handleGDPR();

            const SPMUtility = utilityInit(config);
            fetchPersonalize = SPMUtility.fetchPersonalize;

            const SPMTrack = trackInit(config);
            click = SPMTrack.click;
            impression = SPMTrack.impression;
            pageview = SPMTrack.pageview;
            gdprDoNotTrack = SPMTrack.gdprDoNotTrack;
            cookiesDoNotTrack = SPMTrack.cookiesDoNotTrack;

            const SPMHeartbeat = heartbeatInit(config);
            appendHeartbeatListener = SPMHeartbeat.appendHearbeatListener;

            const SPMIntegration = integrationInit(config);
            getCurrentUser = SPMIntegration.getCurrentUser;
            userSignUp = SPMIntegration.userSignUp;
            userSignUpConfirmedOptIn = SPMIntegration.userSignUpConfirmedOptIn;
            addToCart = SPMIntegration.addToCart;
            purchase = SPMIntegration.purchase;
            customEvent = SPMIntegration.customEvent;
            const SPMSessionOverlay = sessionOverlayInit();
            dismiss = SPMSessionOverlay.dismiss;


            SPMPersonalize = personalizeInit(config);
            SPMOverlay = overlayInit(config);
            cookies.updatePageviewsCookie();
            SPMOverlay.hideOverlay();

            if (!isCustom) {
                return SPMPersonalize.buildPersonalizeUrl(false)
                    .then(url => fetchPersonalize(url, window.location))
                    .then(() => {
                        if (!cookies.isDoNotTrackUser()) {
                            appendHeartbeatListener();
                        }
                    });
            }
            if (autoTrackPageview) {
                pageview(window.location.href);
            }
            return SPMOverlay.buildOverlayUrl().then(url => fetchPersonalize(url, window.location));
        },

        personalize(options) {
            cookies.handleGDPR();
            return SPMPersonalize.personalize(options);
        },

        track(event, options) {
            const eventOptions = { ...options
            };
            const {
                sectionId,
                url,
                urls,
            } = eventOptions;
            const errorMessage = `Invalid event: ${event}. Please specify a valid event.`;

            delete eventOptions.sectionId;
            delete eventOptions.url;
            delete eventOptions.urls;
            delete eventOptions.email;
            delete eventOptions.name;
            delete eventOptions.id;
            delete eventOptions.key;

            cookies.handleGDPR();

            switch (event) {
                case 'click':
                    return click(sectionId, url, eventOptions);
                case 'impression':
                    return impression(sectionId, urls, eventOptions);
                case 'pageview':
                    return pageview(url, eventOptions)
                        .then(() => {
                            if (!cookies.isDoNotTrackUser()) {
                                appendHeartbeatListener();
                            }
                        });
                case 'gdprDoNotTrack':
                    return gdprDoNotTrack(event);
                case 'cookiesDoNotTrack':
                    return cookiesDoNotTrack(options);
                default:
                    console.error(errorMessage);
                    return errorMessage;
            }
        },

        integration(event, options) {
            const eventOptions = { ...options
            };
            const {
                email,
                name,
                id,
                key = 'email',
            } = eventOptions;
            const userId = {
                id: id || email,
                key,
            };
            const errorMessage = `Invalid event: ${event}. Please specify a valid event.`;

            delete eventOptions.sectionId;
            delete eventOptions.url;
            delete eventOptions.urls;
            delete eventOptions.email;
            delete eventOptions.name;
            delete eventOptions.id;
            delete eventOptions.key;

            cookies.handleGDPR();

            switch (event) {
                case 'getCurrentUser':
                    return getCurrentUser(eventOptions);
                case 'userSignUp':
                    return userSignUp(email, eventOptions);
                case 'userSignUpConfirmedOptIn':
                    return userSignUpConfirmedOptIn(userId, eventOptions);
                case 'addToCart':
                    return addToCart(userId, eventOptions);
                case 'purchase':
                    return purchase(userId, eventOptions);
                case 'customEvent':
                    return customEvent(name, userId, eventOptions);
                default:
                    console.error(errorMessage);
                    return errorMessage;
            }
        },

        overlay(event, options) {
            const errorMessage = `Invalid event: ${event}. Please specify a valid event.`;
            const {
                overlayId,
            } = options;

            switch (event) {
                case 'dismiss':
                    return dismiss(overlayId);
                default:
                    console.error(errorMessage);
                    return errorMessage;
            }
        },
    };
};



// WEBPACK FOOTER //
// ./v1/src/js/modules/spm.js