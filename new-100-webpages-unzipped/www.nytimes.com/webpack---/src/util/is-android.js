import getUserAgent from './get-user-agent';

const isAndroid = (userAgent = getUserAgent()) =>
    userAgent.toLowerCase().indexOf('android') !== -1;

export default isAndroid;



// WEBPACK FOOTER //
// ./src/util/is-android.js