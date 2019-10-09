import { combineReducers } from 'redux'
import { simpleAction, simpleReducer } from 'shared/redux/redux-util'

export const defaultState = {}
const prefix = s => `SEARCH_BAR_${[...s]}`

const IS_SEARCH_VISIBLE = prefix`IS_SEARCH_VISIBLE`

export const getIsSearchVisbile = state => state.isVisible

export default combineReducers({
    isVisible: simpleReducer(IS_SEARCH_VISIBLE, true),
})

export const setIsSearchVisible = simpleAction(IS_SEARCH_VISIBLE)
