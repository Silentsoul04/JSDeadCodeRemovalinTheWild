import {
    getGifChannels,
    getNewPermissions
} from 'shared/api'
import {
    setUserPermissions
} from 'shared/redux/permissions'
import {
    setEditModeChannels
} from 'shared/redux/edit-mode-channels'
import {
    isBoolean,
    uniqWith,
    isEqual,
    filter
} from 'lodash'
import DEFAULT_CHANNEL from 'shared/util/default-channel'

// Action Types
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE'
export const UPDATE_EDIT_MODE = 'UPDATE_EDIT_MODE'
export const SET_BULK_EDIT_IDS = 'SET_BULK_EDIT_IDS'
export const UPDATE_DRAFT = 'UPDATE_DRAFT'
export const ADD_ERROR = 'ADD_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const CLEAR_SUCCESS = 'CLEAR_SUCCESS'
export const CLEAR_SUCCESS_MESSAGE = 'CLEAR_SUCCESS_MESSAGE'
export const IS_FETCHING = 'IS_FETCHING'
export const IS_SAVING_GIFS = 'IS_SAVING_GIFS'
export const UPDATE_EDIT_SAVE_PROGRESS = 'UPDATE_EDIT_SAVE_PROGRESS'

// Actions
export const toggleEditMode = isOn => ({
    type: TOGGLE_EDIT_MODE,
    isOn
})
export const updateEditMode = (updatedGif, updatedChannel) => ({
    type: UPDATE_EDIT_MODE,
    updatedGif,
    updatedChannel
})
export const updateEditModeDraft = draft => ({
    type: UPDATE_DRAFT,
    draft
})
export const addError = (error, key) => ({
    type: ADD_ERROR,
    error,
    key
})
export const clearError = () => ({
    type: CLEAR_ERROR
})
export const clearErrorMessage = id => ({
    type: CLEAR_ERROR_MESSAGE,
    id
})
export const addSuccess = (success, key) => ({
    type: ADD_SUCCESS,
    success,
    key
})
export const clearSuccess = () => ({
    type: CLEAR_SUCCESS
})
export const clearSuccessMessage = id => ({
    type: CLEAR_SUCCESS_MESSAGE,
    id
})
export const isFetching = isFetching => ({
    type: IS_FETCHING,
    isFetching
})
export const setBulkEditGifIds = gifIds => ({
    type: SET_BULK_EDIT_IDS,
    gifIds
})
export const isSavingGifs = isSaving => ({
    type: IS_SAVING_GIFS,
    isSaving
})
export const updateSaveProgress = progress => ({
    type: UPDATE_EDIT_SAVE_PROGRESS,
    progress
})

// Selector
export const getEditMode = state => state
export const getEditModeErrors = ({
    error
}) => error
export const getEditModeSuccess = ({
    success
}) => success
export const getEditGifIds = state => state.gifIds
export const getIsSaving = state => state.isSaving
export const getSaveProgress = state => state.saveProgress
export const getIsEditing = state => state.isEditing

let counter = 0
const uniqueId = () => ++counter
// Reducer in the duck
export default (
    state = {
        isFetching: false,
        isEditing: false,
        isSaving: false,
        gifIds: [],
        channel: DEFAULT_CHANNEL,
        draft: null,
        saveProgress: 0,
        error: [],
        success: [],
    },
    action = {},
) => {
    switch (action.type) {
        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                isEditing: isBoolean(action.isOn) ? action.isOn : !state.isEditing,
            }
        case UPDATE_EDIT_MODE:
            {
                const {
                    updatedGif,
                    updatedChannel
                } = action
                return {
                    ...state,
                    gifIds: updatedGif && updatedGif.id ? [updatedGif.id] : [],
                    channel: updatedChannel || null,
                }
            }
        case UPDATE_DRAFT:
            return {
                ...state,
                draft: action.draft,
            }
        case ADD_ERROR:
            return {
                ...state,
                error: [...state.error, {
                    id: uniqueId(),
                    message: action.error
                }],
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: [],
            }
        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: state.error.filter(({
                    id
                }) => id !== action.id),
            }
        case ADD_SUCCESS:
            return {
                ...state,
                success: [...state.success, {
                    id: uniqueId(),
                    message: action.success
                }],
            }
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: [],
            }

        case CLEAR_SUCCESS_MESSAGE:
            return {
                ...state,
                success: state.success.filter(({
                    id
                }) => id !== action.id),
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case SET_BULK_EDIT_IDS:
            return {
                ...state,
                gifIds: action.gifIds,
            }
        case IS_SAVING_GIFS:
            return {
                ...state,
                saveProgress: 0,
                isSaving: action.isSaving,
            }
        case UPDATE_EDIT_SAVE_PROGRESS:
            return {
                ...state,
                saveProgress: action.progress,
            }
        default:
            return state
    }
}

export const refreshGifChannels = gifs => {
    return async dispatch => {
        const gifIds = gifs.map(g => g.id)
        const {
            results: channelData
        } = await getGifChannels(gifIds)
        let channels = uniqWith(channelData.map(d => d.channel), isEqual)

        // Add flag to denote whether the channel is_common (exists on all selected GIFs)
        channels = channels.map(c => {
            return {
                ...c,
                is_common: filter(channelData, d => d.channel.id === c.id).length === gifs.length,
            }
        })
        dispatch(setEditModeChannels(channels))
    }
}

export const refreshGifPermissions = gif => {
    return async dispatch => {
        const {
            permissions
        } = await getNewPermissions(gif.id)
        dispatch(setUserPermissions(permissions))
    }
}