// Action Type
export const POWER_GLOVE_ACTIVE = 'POWER_GLOVE_ACTIVE'
export const TOGGLE_POWER_GLOVE = 'TOGGLE_POWER_GLOVE'
// Action
export const powerGlove = powerGlove => ({ type: POWER_GLOVE_ACTIVE, powerGlove })
export const togglePowerGlove = () => ({ type: TOGGLE_POWER_GLOVE })
// Selector
export const getPowerGlove = state => state
// Reducer in the duck
export default (state = false, action = {}) => {
    switch (action.type) {
        case TOGGLE_POWER_GLOVE:
            return !state // toggle
        case POWER_GLOVE_ACTIVE:
            return !!action.powerGlove
        default:
            return state
    }
}
