import getUserAgent from './get-user-agent';

const isIe11 = (userAgent = getUserAgent()) =>
    /trident.+?rv[ :]11/i.test(userAgent);

export default isIe11;



// WEBPACK FOOTER //
// ./src/util/is-ie11.js