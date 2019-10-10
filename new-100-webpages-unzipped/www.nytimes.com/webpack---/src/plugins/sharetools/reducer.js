import {
    types as actionTypes
} from './actions';

const initialState = {
    isInitialized: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
};

export default reducer;



// WEBPACK FOOTER //
// ./src/plugins/sharetools/reducer.js