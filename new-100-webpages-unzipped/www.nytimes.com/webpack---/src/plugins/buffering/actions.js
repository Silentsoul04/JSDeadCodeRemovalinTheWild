const types = {
    setInitialBuffer: 'plugins/buffering/SET_INITIAL_BUFFER'
};

export default {
    setInitialBuffer: initialBuffer => ({
        type: types.setInitialBuffer,
        initialBuffer: Boolean(initialBuffer)
    })
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/buffering/actions.js