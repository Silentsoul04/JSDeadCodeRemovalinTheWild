import playerActionTypes from 'src/player/actions';
import flags from './flags';

export default (state = {}, action) => {
    switch (action.type) {
        case playerActionTypes.OPTIONS_READY:
            {
                const {
                    env
                } = action.payload;

                return Object.keys(flags).reduce((accumulator, flagKey) => {
                    accumulator[flagKey] = flags[flagKey].environments[env];
                    return accumulator;
                }, {});
            }
        default:
            return state;
    }
};



// WEBPACK FOOTER //
// ./src/plugins/feature-flags/reducer.js