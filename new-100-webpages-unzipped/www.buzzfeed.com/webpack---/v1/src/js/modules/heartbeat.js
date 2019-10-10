import track from './track';
import cookies from './cookies';
import urlUtil from './urlUtil';
import {
    OVERLAY_PARAM_DEBUG
} from './constants';

/* Mostly plagarized from https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API#Example */

const TEN_SECONDS = 10000;
const THIRTY_SECONDS = 30000;
const ONE_MINUTE = 60000;
const TWENTY_NINE_MINUTES = 1740000;

let config;

let SPMTrack;
let urlUtility;
let lostVisibility = false;
let firstHeartbeatInterval;
let secondHeartbeatInterval;

let hidden;
let visibilityChange;

function stopHeartbeat() {
    lostVisibility = true;
    window.clearInterval(firstHeartbeatInterval);
    window.clearInterval(secondHeartbeatInterval);
    console.log('Heartbeat stopped');
    return {
        lostVisibility,
        firstHeartbeatInterval,
        secondHeartbeatInterval
    };
}

function trackNavigation() {
    SPMTrack.navigation(window.location.href, {
        onError: stopHeartbeat,
    });
}

function trackHeartbeat() {
    SPMTrack.heartbeat(window.location.href, {
        onError: stopHeartbeat,
    });
}

function setVisibilityProperties() {
    if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
    }
    return {
        hidden,
        visibilityChange
    };
}

function createInterval(startTime, interval, expireTime) {
    const intervalId = window.setInterval(() => {
        const now = new Date().getTime();
        if (now - startTime > expireTime) {
            window.clearInterval(intervalId);
            return;
        }
        trackHeartbeat();
    }, interval);
    return intervalId;
}

function startHeartbeat() {
    if (lostVisibility) {
        lostVisibility = false;
        trackNavigation();
    }
    const startTime = new Date().getTime();
    firstHeartbeatInterval = createInterval(startTime, TEN_SECONDS, THIRTY_SECONDS);
    secondHeartbeatInterval = createInterval(startTime, ONE_MINUTE, TWENTY_NINE_MINUTES);
    return {
        lostVisibility,
        firstHeartbeatInterval,
        secondHeartbeatInterval
    };
}

function handleVisibilityChange() {
    if (document[hidden]) {
        return stopHeartbeat();
    }
    return startHeartbeat();
}

function appendHearbeatListener() {
    setVisibilityProperties();

    if (typeof document.addEventListener === 'undefined' || typeof document.hidden === 'undefined') {
        console.log('Heartbeat requires a browser that supports the Page Visibility API');
        return false;
    }

    if (cookies.isAnonymousUser()) {
        if (urlUtility.urlFragmentParams[OVERLAY_PARAM_DEBUG]) {
            console.log('Heartbeat only works for known users');
        }
        return false;
    }

    if (!config.enableHeartbeat) {
        if (urlUtility.urlFragmentParams[OVERLAY_PARAM_DEBUG]) {
            console.log('Heartbeat disabled');
        }
        return false;
    }

    document.addEventListener(visibilityChange, handleVisibilityChange, false);
    return startHeartbeat();
}

const defaultFn = (options) => {
    config = options;
    SPMTrack = track(options);
    lostVisibility = false;
    urlUtility = urlUtil();

    return {
        appendHearbeatListener,
    };
};

export default defaultFn;



// WEBPACK FOOTER //
// ./v1/src/js/modules/heartbeat.js