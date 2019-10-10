import getUserAgent from './get-user-agent';

const isIpad = (userAgent = getUserAgent()) =>
    userAgent.toLowerCase().indexOf('ipad') !== -1;

export default isIpad;



// WEBPACK FOOTER //
// ./src/util/is-ipad.js