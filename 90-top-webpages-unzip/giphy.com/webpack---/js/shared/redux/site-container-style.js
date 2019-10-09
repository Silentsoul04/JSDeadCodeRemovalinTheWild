// Action Type
export const SET_SITE_CONTAINER_STYLE = 'SET_SITE_CONTAINER_STYLE'
// Action
export const setSiteContainerStyle = style => ({ type: SET_SITE_CONTAINER_STYLE, style })
// Selector
export const getSiteContainerStyle = state => state
// Reducer

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SET_SITE_CONTAINER_STYLE:
            return action.style
        default:
            return state
    }
}
