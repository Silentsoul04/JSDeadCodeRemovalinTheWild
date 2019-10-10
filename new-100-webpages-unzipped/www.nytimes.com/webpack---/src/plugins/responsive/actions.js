const types = {
    init: 'plugins/responsive/INIT',
    changedDimensions: 'plugins/responsive/CHANGED_DIMENSIONS'
};

export default {
    init: ({
        playerWidth,
        playerHeight,
        windowWidth,
        windowHeight
    }) => ({
        type: types.init,
        playerWidth,
        playerHeight,
        windowWidth,
        windowHeight
    }),
    changedDimensions: ({
        playerWidth,
        playerHeight,
        windowWidth,
        windowHeight
    }) => ({
        type: types.changedDimensions,
        playerWidth,
        playerHeight,
        windowWidth,
        windowHeight
    })
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/responsive/actions.js