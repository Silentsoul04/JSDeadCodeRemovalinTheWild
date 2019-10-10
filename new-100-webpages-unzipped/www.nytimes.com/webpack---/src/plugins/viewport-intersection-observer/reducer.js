import {
    types
} from './actions';

const initialState = {
    isInsideViewport: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.isInside:
            return {
                isInsideViewport: true
            };
        case types.isOutside:
            return {
                isInsideViewport: false
            };
        default:
            return state;
    }
};

export default reducer;



// WEBPACK FOOTER //
// ./src/plugins/viewport-intersection-observer/reducer.js