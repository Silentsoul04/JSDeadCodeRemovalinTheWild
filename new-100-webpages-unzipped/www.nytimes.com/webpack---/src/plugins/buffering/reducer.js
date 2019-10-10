import playerActions from '../../player/actions';
import {
    types
} from './actions';

const initialState = {
    initialBuffer: true
};

export default (state = initialState, action) => {
    let initialBuffer;
    switch (action.type) {
        case types.setInitialBuffer:
            {
                initialBuffer = action.initialBuffer;
                return { ...state,
                    initialBuffer
                };
            }
        case playerActions.OPTIONS_READY:
            {
                const {
                    cover,
                    autoplay
                } = action.payload;
                initialBuffer = cover && !autoplay;
                return {
                    ...state,
                    initialBuffer
                };
            }
        default:
            return state;
    }
};



// WEBPACK FOOTER //
// ./src/plugins/buffering/reducer.js