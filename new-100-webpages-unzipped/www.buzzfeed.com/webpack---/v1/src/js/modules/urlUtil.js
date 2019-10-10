import cookies from './cookies';
import {
    SESS_OVERLAY_PARAMS_COOKIE_NAME,
    OVERLAY_PARAM_PREVIEW,
} from './constants';

let urlFragmentParams;
let urlQueryParams = {};
let urlQueryParamsNeedParsing = true;

function pushUserIdKeyAndUserIdValue(config, params) {
    if (typeof config.userIdKey === 'undefined' || config.userIdKey === 'hid') {
        const horizonId = cookies.read('sailthru_hid');
        if (horizonId) {
            params.push('userIdKey=hid');
            params.push(`userIdValue=${horizonId}`);
        }
    } else if (config.userIdValue) {
        params.push(`userIdKey=${config.userIdKey}`);
        params.push(`userIdValue=${config.userIdValue}`);
    }
    return params;
}

function urlHashToMap() {
    const hash = window.location.hash.substr(1);
    urlFragmentParams = hash.split('&')
        .map(el => el.split('='))
        .reduce((keyValue, splittedData) => {
            keyValue[splittedData[0]] = decodeURIComponent(splittedData[1]);
            return keyValue;
        }, {});
    return urlFragmentParams;
}

function isPreview() {
    return urlFragmentParams[OVERLAY_PARAM_PREVIEW] !== undefined;
}

function getPreviewIdFromAnchor() {
    if (isPreview()) {
        return urlFragmentParams[OVERLAY_PARAM_PREVIEW];
    }
    return undefined;
}

function pushDeviceTypeInfo(isMobile, params) {
    if (isMobile !== undefined) {
        const isMobileParamVal = isMobile ? '1' : '0';
        params.push(`isMobile=${isMobileParamVal}`);
    }
    return params;
}

function getSessionOverlayUrlQuery() {
    const sessOverlayParamsCookie = cookies.read(SESS_OVERLAY_PARAMS_COOKIE_NAME);
    if (sessOverlayParamsCookie) {
        return decodeURIComponent(sessOverlayParamsCookie);
    }
    return window.location.search;
}

function pushLandingPageParams(params) {
    const urlQuery = getSessionOverlayUrlQuery();
    if (urlQuery && urlQuery.length > 1 && urlQuery[0] === '?') {
        params.push(urlQuery.slice(1));
    }
    return params;
}

function urlVars() {
    let tokens;
    const query = window.location.search;
    const regex = /[?&]+([^=&]+)=([^&]*)[^&#]*/gi;

    while (tokens = regex.exec(query)) {
        urlQueryParams[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    urlQueryParamsNeedParsing = false;
    return urlQueryParams;
}

function getUrlParam(parameter) {
    if (urlQueryParamsNeedParsing) {
        urlVars();
    }
    let urlparameter;
    urlparameter = urlQueryParams[parameter];
    return urlparameter;
}

const defaultFn = () => {
    urlHashToMap();
    urlVars();
    return {
        pushUserIdKeyAndUserIdValue,
        urlHashToMap,
        getPreviewIdFromAnchor,
        isPreview,
        urlFragmentParams,
        pushDeviceTypeInfo,
        getUrlParam,
        pushLandingPageParams,
    };
};

export default defaultFn;



// WEBPACK FOOTER //
// ./v1/src/js/modules/urlUtil.js