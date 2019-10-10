import config from './modules/config';
import spm from './modules/spm';

const {
    debug,
    init,
    personalize,
    track,
    integration,
    overlay
} = spm(config);

export {
    debug,
    init,
    personalize,
    track,
    integration,
    overlay,
};



// WEBPACK FOOTER //
// ./v1/src/js/index.js