const types = {
    show: 'COPY_SLATE_SHOW',
    hide: 'COPY_SLATE_HIDE',
    updateVisibility: 'COPY_SLATE_DISPLAYED'
};

export default {
    hide: () => ({
        type: types.hide,
        shouldDisplay: false
    }),
    show: data => {
        const {
            text,
            value
        } = data;
        return {
            type: types.show,
            shouldDisplay: true,
            text,
            value
        };
    },
    updateVisibility: isVisible => ({
        type: types.updateVisibility,
        isVisible
    })
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/copy-slate/actions.js