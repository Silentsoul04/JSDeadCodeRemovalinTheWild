import { INIT, USER_STATUS, REQUEST_FAVORITES, LOGIN_STATUS, CLEAR_QUEUED_FAVORITE } from '../actions'
import { omitBy as _omitBy } from 'lodash'
const filterAction = obj => _omitBy(obj, (val, prop) => prop === 'type' || val === undefined)

export default (
    user = {
        loggedIn: false,
        isFetching: false,
        hasChecked: false,
        hasCheckedFavorites: false,
        isArtist: false,
        id: null,
        isPartner: false,
        isStaff: false,
        userToken: false,
        permissions: {
            rate: false,
            dashboard_link: false,
            dashboard_analytics: false,
        },
    },
    action = {},
) => {
    switch (action.type) {
        case LOGIN_STATUS:
            return { ...user, ...filterAction(action) }
        case USER_STATUS:
            return { ...user, ...filterAction(action) }
        case INIT: {
            if (action.queryString.ref === 'fave') {
                const { gif } = action.data
                if (gif) {
                    return { ...user, queuedFavorite: gif.id }
                }
                return user
            }
            return user
        }
        case REQUEST_FAVORITES: {
            return { ...user, hasCheckedFavorites: true }
        }
        case CLEAR_QUEUED_FAVORITE: {
            return { ...user, queuedFavorite: undefined }
        }
        default:
            return user
    }
}

export const getUserId = state => state.id
export const getLoggedIn = state => state.loggedIn
export const getIsFetching = state => state.isFetching
export const getHasChecked = state => state.hasChecked
export const getHasCheckedFavorites = state => state.hasCheckedFavorites
export const getIsArtist = state => state.isArtist
export const getEmail = state => state.email
export const getIsPartner = state => state.isPartner
export const getIsStaff = state => state.isStaff
