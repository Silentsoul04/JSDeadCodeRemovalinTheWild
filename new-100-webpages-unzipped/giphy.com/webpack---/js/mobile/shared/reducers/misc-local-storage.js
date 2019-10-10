import {
    combineReducers
} from 'redux'
import {
    simpleAction,
    simpleReducer
} from 'shared/redux/redux-util'

export const defaultState = {}
const prefix = s => `MISC_LOCAL_STORAGE_${[...s]}`

export const HAS_SEEN_APP_PLUG = prefix `HAS_SEEN_APP_PLUG`

export const hasSeenAppPlug = simpleReducer(HAS_SEEN_APP_PLUG, false)

/**
 * It'd be nice to just put pieces of state in localStorage,
 * for example gifDetail.hasSeenAppPlug, but redux local storage
 * doesn't work that way, so instead just create a new reducer
 */
export default combineReducers({
    hasSeenAppPlug,
})

export const setHasSeenAppPlug = simpleAction(HAS_SEEN_APP_PLUG)

export const getHasSeenAppPlug = state => state.hasSeenAppPlug