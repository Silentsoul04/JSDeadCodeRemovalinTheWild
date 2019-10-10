import {
    simpleAction,
    simpleReducer
} from './redux-util'

// Action Type
export const GRID_TYPE = 'GRID_TYPE'
// Action
export const gridType = simpleAction(GRID_TYPE)
// Selector
export const getGridType = state => state
// Reducer
export default simpleReducer(GRID_TYPE, 'grid')