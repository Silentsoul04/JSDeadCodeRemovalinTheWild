import {
    types
} from './actions';

const initialState = {
    isFullscreen: false,
    isApiAvailable: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.handleFullscreenChange:
            return {
                ...state,
                ...action.payload
            };
        case types.fullscreenApiAvailability:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};



// WEBPACK FOOTER //
// ./src/plugins/fullscreen/reducer.js