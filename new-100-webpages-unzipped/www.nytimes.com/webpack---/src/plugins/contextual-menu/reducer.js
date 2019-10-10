import playerActions from '../../player/actions';

const initialState = {
    isGetVideoCanonicalActive: false,
    isGetVideoCanonicalAtCurrentTimeActive: false,
    isGetEmbedCodeActive: false,
    isGetVideoIdActive: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case playerActions.OPTIONS_READY:
            {
                return { ...state
                };
            }
        case playerActions.DATA_READY:
            {
                const {
                    url,
                    id,
                    isEmbeddedOnly
                } = action.media;
                const isGetVideoCanonicalActive = !!url && !isEmbeddedOnly;
                const isGetVideoCanonicalAtCurrentTimeActive = !!url && !isEmbeddedOnly;
                const isGetEmbedCodeActive = !!(id && !isEmbeddedOnly);
                const isGetVideoIdActive = id !== 'unknown';
                return {
                    ...state,
                    isGetVideoCanonicalActive,
                    isGetVideoCanonicalAtCurrentTimeActive,
                    isGetEmbedCodeActive,
                    isGetVideoIdActive
                };
            }
        default:
            {
                return state;
            }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/contextual-menu/reducer.js