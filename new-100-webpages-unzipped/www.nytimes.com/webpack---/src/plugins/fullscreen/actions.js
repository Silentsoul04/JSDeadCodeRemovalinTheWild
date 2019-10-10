const types = {
    handleFullscreenChange: 'plugins/fullscreen/HANDLE_FULLSCREEN_CHANGE',
    fullscreenApiAvailability: 'plugins/fullscreen/HANDLE_FULLSCREEN_API_AVAILABILITY'
};

export default {
    handleFullscreenChange: isFullscreen => ({
        type: types.handleFullscreenChange,
        payload: {
            isFullscreen
        }
    }),
    fullscreenApiAvailability: isApiAvailable => ({
        type: types.fullscreenApiAvailability,
        payload: {
            isApiAvailable
        }
    })
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/fullscreen/actions.js