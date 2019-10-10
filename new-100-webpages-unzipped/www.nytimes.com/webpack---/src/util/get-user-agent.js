import getWindow from './get-window';
import getNavigator from './get-navigator';

const getUserAgent = (win = getWindow()) => {
    const navigator = getNavigator(win);
    // eslint-disable-next-line no-useless-escape
    return navigator.userAgent.toLowerCase().replace(/\[.*\]/, '');
};

export default getUserAgent;



// WEBPACK FOOTER //
// ./src/util/get-user-agent.js