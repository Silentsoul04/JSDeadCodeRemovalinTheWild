const checkIsMobile = () => {
    const {
        userAgent
    } = navigator;
    if (userAgent.match(/iP(hone|od)/i) ||
        userAgent.match(/iPod/i) ||
        userAgent.match(/BlackBerry/i) ||
        (userAgent.match(/Android/i) && userAgent.match(/Mobile/i)) ||
        (userAgent.match(/Nokia|NOKIA/i) && userAgent.match(/Symbian|Windows Phone/i))) {
        return true;
    }
    return false;
};

const checkIsTablet = () => !!navigator.userAgent.match(/Tablet|iPad/i);

const isMobile = checkIsMobile();
const isTablet = checkIsTablet();
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

module.exports = {
    isMobile,
    isTablet,
    isIOS,
};



// WEBPACK FOOTER //
// ./src/assets/js/shared/is-mobile.js