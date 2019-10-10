const types = {
    shouldEnableCaptions: 'plugins/captions/SHOULD_ENABLE_CAPTIONS',
    shouldDisableCaptions: 'plugins/captions/SHOULD_DISABLE_CAPTIONS',
    didEnableCaptions: 'plugins/captions/DID_ENABLE_CAPTIONS',
    didDisableCaptions: 'plugins/captions/DID_DISABLE_CAPTIONS',
    captionsAvailable: 'plugins/captions/CAPTIONS_AVAILABLE',
    textChange: 'plugins/captions/TEXT_CHANGE',
    trackLoaded: 'plugins/captions/TRACK_LOADED',
    trackUnloaded: 'plugins/captions/TRACK_UNLOADED'
};

export default {
    shouldEnableCaptions: () => ({
        type: types.shouldEnableCaptions
    }),
    shouldDisableCaptions: () => ({
        type: types.shouldDisableCaptions
    }),
    didEnableCaptions: () => ({
        type: types.didEnableCaptions
    }),
    didDisableCaptions: () => ({
        type: types.didDisableCaptions
    }),
    trackLoaded: () => ({
        type: types.trackLoaded
    }),
    trackUnloaded: () => ({
        type: types.trackUnloaded
    }),
    captionsAvailable: available => ({
        type: types.captionsAvailable,
        areCaptionsAvailable: available
    }),
    textChange: text => ({
        type: types.textChange,
        text
    })
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/captions/actions.js