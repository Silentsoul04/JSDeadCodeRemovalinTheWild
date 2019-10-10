function actions(store) {
    return {
        init() {
            const newState = store.getState();
            newState.plugins = newState.plugins || {};
            newState.plugins.endSlate = {
                isVisible: false,
                isLoaded: false
            };
            store.setState(newState);
        },

        show() {
            const newState = store.getState();
            newState.plugins.endSlate.isVisible = true;
            store.setState(newState);
        },

        hide() {
            const newState = store.getState();
            newState.plugins.endSlate.isVisible = false;
            store.setState(newState);
        },

        loaded() {
            const newState = store.getState();
            newState.plugins.endSlate.isLoaded = true;
            store.setState(newState);
        }
    };
}

export default actions;



// WEBPACK FOOTER //
// ./src/plugins/end-slate/actions.js