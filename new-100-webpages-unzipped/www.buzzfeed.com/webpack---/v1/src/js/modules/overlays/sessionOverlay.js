import 'isomorphic-fetch';
import cookies from '../cookies';
import urlUtil from '../urlUtil';
import uuidUtil from '../uuidUtil';
import {
    SESS_OVERLAY_PARAMS_COOKIE_NAME,
    SESSION_OVERLAY_COOKIE,
    DISMISSED_OVERLAYS_COOKIE,
    OVERLAY_PARAM_STICKY,
} from '../constants';

let stickyOverlayId;
let urlUtility;

function createOrUpdateOverlayDismissCookie(overlayId) {
    const dismissedOverlaysString = cookies.read(DISMISSED_OVERLAYS_COOKIE);
    const dismissedOverlayIds = uuidUtil.parseUuidsList(dismissedOverlaysString);
    if (dismissedOverlayIds.indexOf(overlayId) !== -1) {
        return;
    }
    if (dismissedOverlaysString) {
        cookies.create(DISMISSED_OVERLAYS_COOKIE, `${overlayId}${dismissedOverlaysString}`);
    } else {
        cookies.create(DISMISSED_OVERLAYS_COOKIE, overlayId);
    }
}

function deleteDismissCookie(overlayId) {
    const dismissedOverlaysString = cookies.read(DISMISSED_OVERLAYS_COOKIE);
    const dismissedOverlayIds = uuidUtil.parseUuidsList(dismissedOverlaysString);
    if (!dismissedOverlaysString || dismissedOverlayIds.indexOf(overlayId) === -1) {
        return;
    }
    if (dismissedOverlaysString === overlayId) {
        cookies.delete(DISMISSED_OVERLAYS_COOKIE);
    } else {
        cookies.create(DISMISSED_OVERLAYS_COOKIE, dismissedOverlaysString.replace(overlayId, ''));
    }
}

function setSticky(sessionOverlay) {
    stickyOverlayId = sessionOverlay;
    cookies.create(SESSION_OVERLAY_COOKIE, sessionOverlay);
}

function triggerStickyOverlay() {
    const urlParamSessionOverlay = urlUtility.getUrlParam(OVERLAY_PARAM_STICKY);
    if (urlParamSessionOverlay === '') {
        console.error('Empty overlay id. Please specify a valid uuid.');
        return undefined;
    }

    const cookieSessionOverlay = uuidUtil.parseUuidsList(cookies.read(SESSION_OVERLAY_COOKIE))[0];
    if (urlParamSessionOverlay && !uuidUtil.isUuid(urlParamSessionOverlay) && !cookieSessionOverlay) {
        console.error(`Invalid id: ${urlParamSessionOverlay}. Please specify a valid uuid.`);
        return undefined;
    }

    if (urlParamSessionOverlay) {
        deleteDismissCookie(urlParamSessionOverlay);
        cookies.create(SESS_OVERLAY_PARAMS_COOKIE_NAME, window.location.search);
        setSticky(urlParamSessionOverlay);
        return urlParamSessionOverlay;
    }

    const dismissedOverlayIds = uuidUtil.parseUuidsList(cookies.read(DISMISSED_OVERLAYS_COOKIE));
    if (cookieSessionOverlay && dismissedOverlayIds.indexOf(cookieSessionOverlay) === -1) {
        setSticky(cookieSessionOverlay);
        return cookieSessionOverlay;
    }
    return undefined;
}

function getStickyOverlayId() {
    return stickyOverlayId;
}

function dismiss(overlayId) {
    if (uuidUtil.isUuid(overlayId)) {
        cookies.delete(SESS_OVERLAY_PARAMS_COOKIE_NAME);
        cookies.delete(SESSION_OVERLAY_COOKIE);
        createOrUpdateOverlayDismissCookie(overlayId);
    } else {
        console.error(`Invalid id: ${overlayId}. Please specify a valid uuid.`);
    }
}

const defaultFn = () => {
    urlUtility = urlUtil();
    return {
        triggerStickyOverlay,
        getStickyOverlayId,
        dismiss,
    };
};

export default defaultFn;



// WEBPACK FOOTER //
// ./v1/src/js/modules/overlays/sessionOverlay.js