const types = {
    isInside: 'plugins/viewportIntersectionObserver/IS_INSIDE',
    isOutside: 'plugins/viewportIntersectionObserver/IS_OUTSIDE'
};

export default {
    isInside: () => ({
        type: types.isInside
    }),
    isOutside: () => ({
        type: types.isOutside
    })
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/viewport-intersection-observer/actions.js