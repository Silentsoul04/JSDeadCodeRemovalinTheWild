import getUserAgent from './get-user-agent';

const isIphone = (userAgent = getUserAgent()) =>
    userAgent.toLowerCase().indexOf('iphone') !== -1;

export default isIphone;



// WEBPACK FOOTER //
// ./src/util/is-iphone.js