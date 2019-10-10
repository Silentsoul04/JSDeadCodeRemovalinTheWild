import reducer from './reducer';

export default {
    name: 'featureFlags',
    enable: true,
    proto: {
        reducer() {
            return {
                featureFlags: reducer
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/feature-flags/index.js