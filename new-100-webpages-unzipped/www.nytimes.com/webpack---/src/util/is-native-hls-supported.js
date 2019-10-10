import canPlayType from './can-play-type';
import isAndroid from './is-android';
import isChrome from './is-chrome';
import isEdge from './is-edge';
import isIE11 from './is-ie11';
import getUserAgent from './get-user-agent';

// MS browsers' native HLS implementations do not support WebVTT over HLS
const supportsWebVTTOverHLS = userAgent =>
    !isIE11(userAgent) && !isEdge(userAgent);
const isAndroidChrome = userAgent =>
    isAndroid(userAgent) && isChrome(userAgent);

const isNativeHlsSupported = (userAgent = getUserAgent()) =>
    supportsWebVTTOverHLS(userAgent) &&
    !isAndroidChrome(userAgent) &&
    canPlayType('application/vnd.apple.mpegURL');

export default isNativeHlsSupported;



// WEBPACK FOOTER //
// ./src/util/is-native-hls-supported.js