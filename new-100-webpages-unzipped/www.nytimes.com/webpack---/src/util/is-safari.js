import getUserAgent from './get-user-agent';
import isChrome from './is-chrome';

const isSafari = (userAgent = getUserAgent()) => {
    userAgent = userAgent.toLowerCase();
    return userAgent.indexOf('safari') !== -1 && !isChrome(userAgent);
};

export default isSafari;



// WEBPACK FOOTER //
// ./src/util/is-safari.js