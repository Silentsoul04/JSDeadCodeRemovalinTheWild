import isMobile from './is-mobile';
import getUserAget from './get-user-agent';

const isDesktop = (userAgent = getUserAget()) => !isMobile(userAgent);

export default isDesktop;



// WEBPACK FOOTER //
// ./src/util/is-desktop.js