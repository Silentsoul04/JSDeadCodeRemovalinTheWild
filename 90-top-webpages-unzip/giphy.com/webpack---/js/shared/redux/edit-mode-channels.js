import { simpleAction, simpleReducer } from './redux-util'

// Action Type
export const EDIT_MODE_CHANNELS = 'EDIT_MODE_CHANNELS'
// Action
export const setEditModeChannels = simpleAction(EDIT_MODE_CHANNELS)
// Selector
export const getEditModeChannels = state => state
// Reducer
export default simpleReducer(EDIT_MODE_CHANNELS, [])
