import playerActionTypes from 'src/player/actions';
import {
    types
} from './actions';

const initialState = () => ({
    isVisible: false,
    shouldDisplay: false,
    text: 'Share the link to this video',
    value: ''
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case types.hide:
        case playerActionTypes.media.DID_PLAY:
            return {
                ...state,
                shouldDisplay: false
            };
        case types.show:
            return {
                ...state,
                shouldDisplay: true,
                text: action.text,
                value: action.value
            };
        case types.updateVisibility:
            return {
                ...state,
                isVisible: action.isVisible
            };
        default:
            return state;
    }
};



// WEBPACK FOOTER //
// ./src/plugins/copy-slate/reducer.js