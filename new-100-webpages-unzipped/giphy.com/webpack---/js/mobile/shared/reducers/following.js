import {
    uniq as _uniq,
    filter as _filter
} from 'lodash'
import {
    SET_FOLLOWING,
    ADD_FOLLOWING,
    REMOVE_FOLLOWING
} from '../actions'

// Not a route reducer, it's a child of user
export default (following = [], action = {}) => {
    switch (action.type) {
        case SET_FOLLOWING:
            return _uniq([...following, ...action.following])
        case ADD_FOLLOWING:
            return _uniq([...following, action.userId])
        case REMOVE_FOLLOWING:
            return _filter(following, user => user.id !== action.userId)
        default:
            return following
    }
}