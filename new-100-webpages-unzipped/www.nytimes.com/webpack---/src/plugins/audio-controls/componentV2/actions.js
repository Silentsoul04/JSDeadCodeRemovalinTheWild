function actions(store) {
    return {
        init(state = {}) {
            const newState = store.getState();
            newState.plugins = newState.plugins || {};
            newState.plugins.audioControls = state;
            store.setState(newState);
        },

        changeLayout(newLayout) {
            const newState = store.getState();
            newState.plugins.audioControls.layout = newLayout;
            store.setState(newState);
        },

        forceHover(hover) {
            const newState = store.getState();
            newState.plugins.audioControls.forceHover = Boolean(hover);
            store.setState(newState);
        }
    };
}

export default actions;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/actions.js