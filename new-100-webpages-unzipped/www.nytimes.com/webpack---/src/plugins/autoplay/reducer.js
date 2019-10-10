import {
    types
} from './actions';

const initialState = {
    canAutoplayUnmuted: undefined,
    canAutoplayMuted: undefined,
    canAutoplay: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_PERMISSIONS:
            {
                const {
                    payload
                } = action;
                return {
                    ...payload,
                    canAutoplay: payload.canAutoplayUnmuted || payload.canAutoplayMuted
                };
            }

        default:
            return state;
    }
};



// WEBPACK FOOTER //
// ./src/plugins/autoplay/reducer.js