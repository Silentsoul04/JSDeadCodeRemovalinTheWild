// Action Type
export const GIF_MAKER_ERROR = 'GIF_MAKER_ERROR'
export const GIF_MAKER_CLEAR_ERROR = 'GIF_MAKER_CLEAR_ERROR'
// Action
export const setError = (errorType, message) => ({
    type: GIF_MAKER_ERROR,
    errorType,
    message
})
export const clearError = () => ({
    type: GIF_MAKER_CLEAR_ERROR
})
// Selector
export const getError = state => state
// Reducer
export default (state = {}, action = {}) => {
    switch (action.type) {
        case GIF_MAKER_CLEAR_ERROR:
            return {}
        case GIF_MAKER_ERROR:
            const {
                errorType,
                message
            } = action
            return {
                errorType,
                message
            }
        default:
            return state
    }
}