import getUserAgent from './get-user-agent';

const isChrome = (userAgent = getUserAgent()) => {
    userAgent = userAgent.toLowerCase();
    return userAgent.indexOf('chrome') !== -1;
};

export default isChrome;



// WEBPACK FOOTER //
// ./src/util/is-chrome.js