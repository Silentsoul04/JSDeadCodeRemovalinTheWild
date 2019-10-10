const types = {
    UPDATE_PERMISSIONS: 'plugins/autoplay/UPDATE_PERMISSIONS'
};

export default {
    updatePermissions(payload) {
        return {
            type: types.UPDATE_PERMISSIONS,
            payload
        };
    }
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/autoplay/actions.js