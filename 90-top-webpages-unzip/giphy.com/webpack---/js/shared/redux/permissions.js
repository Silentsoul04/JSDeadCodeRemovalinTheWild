import { simpleAction } from './redux-util'
import { isUndefined } from 'lodash'

// Action Type
export const SET_USER_PERMISSIONS = 'SET_USER_PERMISSIONS'
export const RESET_USER_PERMISSIONS = 'RESET_USER_PERMISSIONS'
// Action
export const setUserPermissions = simpleAction(SET_USER_PERMISSIONS)
export const resetUserPermissions = simpleAction(RESET_USER_PERMISSIONS)
// Selector
export const getUserPermissions = state => state
// Default Permissions
const DEFAULT = {
    channel: false,
    delete: false,
    edit: false,
    hide: false,
    rate: false,
    tag: false,
    view: false,
    feature_tags: false,
    extended_metadata: false,
    tag_counts: false,
}
// Reducer
export default (state = DEFAULT, action = {}) => {
    switch (action.type) {
        case SET_USER_PERMISSIONS:
            return action.prop
        case RESET_USER_PERMISSIONS:
            return DEFAULT
        default:
            return isUndefined(state) ? DEFAULT : state
    }
}
