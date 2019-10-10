import {
    types
} from './actions';
import {
    orderedClassSizes
} from '../../util-nyt/responsive-rules';

const initialState = {
    playerWidth: 0,
    playerHeight: 0,
    cssClass: ''
};

const getCssClassAndSize = (state, action) => {
    let cssClass;
    let size;

    // Operation rules to allow for variables as operators
    const ops = {
        lt: (a, b) => a < b,
        lte: (a, b) => a <= b,
        gte: (a, b) => a >= b
    };

    // First rule to match wins
    orderedClassSizes.some(classSize => {
        // If size don't match current player size, return early
        if (!ops[classSize.rule](action.playerWidth, classSize.size)) {
            return false;
        }

        cssClass = classSize.className;
        size = cssClass.split('-')[1];

        return true;
    });

    return {
        cssClass,
        size
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.init:
        case types.changedDimensions:
            return {
                ...state,
                ...getCssClassAndSize(state, action),
                playerWidth: action.playerWidth,
                playerHeight: action.playerHeight,
                windowWidth: action.windowWidth,
                windowHeight: action.windowHeight
            };
        default:
            return state;
    }
};

export default reducer;



// WEBPACK FOOTER //
// ./src/plugins/responsive/reducer.js