const requestMediaKeySystemAccess = (function() {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.requestMediaKeySystemAccess) {
        return window.navigator.requestMediaKeySystemAccess.bind(window.navigator);
    } else {
        return null;
    }
})();

export {
    requestMediaKeySystemAccess
};



// WEBPACK FOOTER //
// webpack://Hls/src/utils/mediakeys-helper.js