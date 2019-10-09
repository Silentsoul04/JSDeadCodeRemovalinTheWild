// Action Type
export const AUTO_PLAY = 'AUTO_PLAY'
export const TOGGLE_AUTO_PLAY = 'TOGGLE_AUTO_PLAY'
// Action
export const autoPlay = autoPlay => ({ type: AUTO_PLAY, autoPlay })
export const toggleAutoPlay = () => ({ type: TOGGLE_AUTO_PLAY })
// Selector
export const getAutoPlay = state => state
// Reducer

export default (state = true, action = {}) => {
    switch (action.type) {
        case TOGGLE_AUTO_PLAY:
            return !state
        case AUTO_PLAY:
            return !!action.autoPlay
        default:
            return state
    }
}
