import { isArray, reduce } from 'lodash'
import { combineReducers } from 'redux'
import { fileSizeToMB } from 'shared/util/gif-maker-util'
import { simpleReducer } from 'shared/redux/redux-util'

const prefix = s => `SLIDESHOW_${[...s]}`
// Action Type
export const SLIDESHOW = prefix`SET_ITEMS`
export const MOVE_ITEM = prefix`MOVE_ITEM`
export const REMOVE_ITEM = prefix`REMOVE_ITEM`
export const ADD_ITEMS = prefix`ADD_ITEMS`
export const SET_START_FILE_ID = prefix`SET_START_FILE_ID`
export const SET_DURATIONS = prefix`SET_DURATIONS`
export const SET_STILL_MAX_DURATION = prefix`SET_STILL_MAX_DURATION`
export const SET_STILL_DURATION = prefix`SET_STILL_DURATION`
export const SET_READY = prefix`SET_READY`
export const SET_LETTERBOX = prefix`SET_LETTERBOX`
// Action
export const setSlideshow = files => ({ files, type: SLIDESHOW })

const move = (items, fromIndex, toIndex) => {
    var element = items[fromIndex]
    items.splice(fromIndex, 1)
    items.splice(toIndex, 0, element)
    return items
}
// Action
export const moveItem = (fromIndex, toIndex) => ({ fromIndex, toIndex, type: MOVE_ITEM })
export const removeItem = index => ({ index, type: REMOVE_ITEM })
export const addItems = item => ({ item, type: ADD_ITEMS })
export const setStartFileId = startFileId => ({ startFileId, type: SET_START_FILE_ID })
export const setDurations = durations => ({ durations, type: SET_DURATIONS })
export const setStillDuration = stillDuration => ({ stillDuration, type: SET_STILL_DURATION })
export const setStillMaxDuration = stillMaxDuration => ({ stillMaxDuration, type: SET_STILL_MAX_DURATION })
export const setReady = ready => ({ ready, type: SET_READY })
export const setLetterbox = letterbox => ({ letterbox, type: SET_LETTERBOX })

// Selector
export const getSlideshow = state => state.items
export const getStartFileId = state => state.startFileId
export const getTotalDuration = state => state.totalDuration
export const getStillDuration = state => state.stillDuration
export const getStillMaxDuration = state => Math.min(state.stillMaxDuration, state.stillMaxDuration)
export const getDurations = state => state.durations
export const getReady = state => state.ready
export const getLetterbox = state => state.letterbox
export const getTotalFileSize = state =>
    fileSizeToMB(getSlideshow(state).reduce((sum, { file = {} }) => sum + (file.size || 0), 0))
// Reducer
const items = (state = [], action = {}) => {
    switch (action.type) {
        case SLIDESHOW:
            return action.files
        case MOVE_ITEM:
            const { fromIndex, toIndex } = action
            return move([...state], fromIndex, toIndex)
        case REMOVE_ITEM:
            const { index } = action
            return [...state.slice(0, index), ...state.slice(index + 1)]
        case ADD_ITEMS:
            let { item } = action
            if (!isArray(item)) {
                item = [item]
            }
            const newIds = item.map(({ id }) => id)
            const filteredState = state.filter(({ id }) => newIds.indexOf(id) < 0)
            return [...filteredState, ...item]
        default:
            return state
    }
}

const totalDuration = (state = 0, action = {}) => {
    switch (action.type) {
        case SET_DURATIONS:
            return reduce(action.durations || {}, (result, value) => result + value, 0)
        default:
            return state
    }
}
const stillDuration = simpleReducer(SET_STILL_DURATION, 3, 'stillDuration')
const stillMaxDuration = simpleReducer(SET_STILL_MAX_DURATION, 15, 'stillMaxDuration')
const durations = simpleReducer(SET_DURATIONS, {}, 'durations')
const startFileId = simpleReducer(SET_START_FILE_ID, null, 'startFileId')
const ready = simpleReducer(SET_READY, false, 'ready')

const letterbox = (state = false, action = {}) => {
    switch (action.type) {
        case SET_LETTERBOX:
            return action.letterbox || false
        default:
            return state
    }
}
export default combineReducers({
    items,
    startFileId,
    durations,
    totalDuration,
    stillDuration,
    stillMaxDuration,
    ready,
    letterbox,
})
