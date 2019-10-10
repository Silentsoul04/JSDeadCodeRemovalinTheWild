const types = {
    SHOULD_LOAD_NEXT_VIDEO: 'plugins/playNext/SHOULD_LOAD_NEXT_VIDEO',
    DID_LOAD_NEXT_VIDEO: 'plugins/playNext/DID_LOAD_NEXT_VIDEO',
    SET_CURRENT_VIDEO_INDEX: 'plugins/playNext/SET_CURRENT_VIDEO'
};

export default {
    setCurrentVideoIndex: currentVideoIndex => {
        const {
            SET_CURRENT_VIDEO_INDEX: type
        } = types;
        return {
            type,
            currentVideoIndex
        };
    },
    shouldLoadNextVideo() {
        return {
            type: types.SHOULD_LOAD_NEXT_VIDEO
        };
    }
};

export {
    types
};



// WEBPACK FOOTER //
// ./src/plugins/play-next/actions.js