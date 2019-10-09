// Action Type
export const USER = 'USER'

// Action
export const setUser = user => ({ type: USER, user })
// Selector
export const getUser = state => state
export const getUserLoggedIn = ({ loggedIn }) => loggedIn

export const DEFAULTS = {
    authToken: null,
    loggedIn: false,
    isFetching: false,
    isArtist: false,
    isPartner: false,
    isStaff: false,
    permissions: null,
    userToken: null,
    avatar: null,
    displayName: null,
    channelId: null,
}

// Reducer
export default (state = DEFAULTS, action = {}) => {
    switch (action.type) {
        case USER:
            return { ...DEFAULTS, ...state, ...action.user }
        default:
            return state
    }
}
