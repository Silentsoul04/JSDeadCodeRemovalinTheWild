import { combineReducers } from 'redux'
import { simpleReducer } from 'shared/redux/redux-util'
import { isEmpty } from 'lodash'

const prefix = s => `GIF_MAKER_FILTER_${[...s]}`

export const CURRENT_FILTER = prefix`CURRENT_FILTER`
export const SET_FILTERS = prefix`SET_FILTERS`

export const setCurrentFilter = currentFilter => ({ currentFilter, type: CURRENT_FILTER })
export const setFilters = filters => ({ filters, type: SET_FILTERS })

export const getCurrentFilter = ({ currentFilter }) => currentFilter
export const hasFilter = ({ currentFilter }) => !isEmpty(currentFilter) && currentFilter.label !== 'None'
export const getFilters = ({ filters }) => filters

export default combineReducers({
    currentFilter: simpleReducer(CURRENT_FILTER, {}, 'currentFilter'),
    filters: simpleReducer(SET_FILTERS, [], 'filters'),
})
