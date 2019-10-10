import {
    types
} from './actions';
import playerActionTypes from '../../player/actions';

const initialState = () => ({
    didEnableCaptions: false,
    didDisableCaptions: false,
    shouldEnableCaptions: false,
    shouldDisableCaptions: false,
    areCaptionsAvailable: false,
    areCaptionsEnabled: false,
    currentText: '',
    raiseCaptions: false,
    trackLoaded: false
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case types.captionsAvailable:
            {
                const {
                    areCaptionsAvailable
                } = action;
                return {
                    ...state,
                    areCaptionsAvailable
                };
            }
        case types.shouldEnableCaptions:
            {
                return {
                    ...state,
                    shouldEnableCaptions: true
                };
            }
        case types.shouldDisableCaptions:
            {
                return {
                    ...state,
                    shouldDisableCaptions: true
                };
            }
        case types.didEnableCaptions:
            {
                return {
                    ...state,
                    areCaptionsEnabled: true,
                    shouldEnableCaptions: false
                };
            }
        case types.didDisableCaptions:
            {
                return {
                    ...state,
                    areCaptionsEnabled: false,
                    shouldDisableCaptions: false
                };
            }
        case types.textChange:
            {
                return {
                    ...state,
                    currentText: action.text
                };
            }
        case types.trackLoaded:
            {
                return {
                    ...state,
                    trackLoaded: true
                };
            }
        case types.trackUnloaded:
            {
                return {
                    ...state,
                    trackLoaded: false
                };
            }
        case playerActionTypes.ACTIVE:
            {
                return {
                    ...state,
                    raiseCaptions: true
                };
            }
        case playerActionTypes.IDLE:
            {
                return {
                    ...state,
                    raiseCaptions: false
                };
            }
        default:
            return state;
    }
};



// WEBPACK FOOTER //
// ./src/plugins/captions/reducer.js