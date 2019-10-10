const types = {
    mouseDown: 'plugins/controls/MOUSE_DOWN',
    wasPlaying: 'plugins/controls/WAS_PLAYING',
    heightChange: 'plugins/controls/HEIGHT_CHANGE'
};

export default {
    mouseDown: isMouseDown => ({
        type: types.mouseDown,
        isMouseDown
    }),
    wasPlaying: wasPlaying => ({
        type: types.wasPlaying,
        wasPlaying
    }),
    heightChange: height => ({
        type: types.heightChange,
        height
    })
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/controls/actions.js