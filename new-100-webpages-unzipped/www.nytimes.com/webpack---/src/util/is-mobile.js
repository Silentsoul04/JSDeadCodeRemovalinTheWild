import getUserAgent from './get-user-agent';
import isIphone from './is-iphone';
import isIpad from './is-ipad';
import isAndroid from './is-android';

const isMobile = (ua = getUserAgent()) =>
    isIphone(ua) || isIpad(ua) || isAndroid(ua);

export default isMobile;



// WEBPACK FOOTER //
// ./src/util/is-mobile.js