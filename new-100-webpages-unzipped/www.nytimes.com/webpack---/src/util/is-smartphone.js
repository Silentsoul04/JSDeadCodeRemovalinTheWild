import getWindow from './get-window';
import isMobile from './is-mobile';

const MOBILE_WIDTH_BREAKPOINT = 600;

const isSmartphone = () => {
    const win = getWindow();
    const viewportWidth = win && win.innerWidth;
    if (viewportWidth <= MOBILE_WIDTH_BREAKPOINT && isMobile()) {
        return true;
    }
    return false;
};

export default isSmartphone;



// WEBPACK FOOTER //
// ./src/util/is-smartphone.js