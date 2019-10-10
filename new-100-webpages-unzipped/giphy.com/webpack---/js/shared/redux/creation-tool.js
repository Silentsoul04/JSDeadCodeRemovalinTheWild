import update from 'immutability-helper'
import {
    isEqual
} from 'lodash'

export const CREATION_TOOL_UPDATE = 'CREATION_TOOL_UPDATE'
export const CREATION_TOOL_RESET = 'CREATION_TOOL_RESET'
export const CREATION_STATUS = 'CREATION_STATUS'
export const CREATION_EDIT_FILE = 'CREATION_EDIT_FILE'
export const CREATION_RESET_EDIT_FILE = 'CREATION_RESET_EDIT_FILE'
export const CREATION_HAS_EDITS = 'CREATION_HAS_EDITS'
export const CREATION_JOB_ID = 'CREATION_JOB_ID'
export const CREATION_UPLOAD_INFO = 'CREATION_UPLOAD_INFO'
export const CREATION_TOOL_CHANNEL_ID = 'CREATION_TOOL_CHANNEL_ID'
export const CREATION_TOOL_TRIM_DATA = 'CREATION_TOOL_TRIM_DATA'

export const STATUS = {
    IDLE: 'idle',
    PROCESSING: 'processing',
    WILL_UPLOAD: 'will upload',
    UPLOADING: 'uploading',
    COMPLETE: 'complete',
    ERROR: 'error',
}

export const defaults = {
    apiKey: '',
    file: {},
    editedFile: null,
    defaultTags: [],
    tags: [],
    rating: '',
    sourceUrl: '',
    termsAgreed: true,
    status: '',
    trimData: null,
    username: '',
    isPrivate: false,
    isUploading: false,
    hasEdits: false,
    currentJobId: null,
    submitUrl: '',
    channelId: null,
    dimensionsByFrame: [],
}
const updateArray = (old, update) => (!update || isEqual(old, update) ? old : update)

export default (state = defaults, action = {}) => {
    switch (action.type) {
        case CREATION_JOB_ID:
            return { ...state,
                currentJobId: action.currentJobId
            }
        case CREATION_TOOL_UPDATE:
            const {
                creationData,
                creationData: {
                    file = {},
                    defaultTags,
                    tags
                },
            } = action
            // immmutability - if none of the values have changed, we get the same instance
            return update(state, {
                $merge: {
                    ...creationData,
                    ...{
                        // more boilerplate for nested objects
                        file: update(state.file, {
                            $merge: file
                        }),
                        defaultTags: updateArray(state.defaultTags, defaultTags),
                        tags: updateArray(state.tags, tags),
                    },
                },
            })
        case CREATION_TOOL_RESET:
            return { ...state,
                ...defaults
            }
        case CREATION_STATUS:
            return { ...state,
                status: action.status || ''
            }
        case CREATION_RESET_EDIT_FILE:
            return {
                ...state,
                ...defaults,
                file: state.file,
                hasEdits: state.hasEdits,
            }
        case CREATION_EDIT_FILE:
            return { ...state,
                editedFile: action.file || null
            }
        case CREATION_HAS_EDITS:
            return { ...state,
                hasEdits: action.hasEdits
            }
        case CREATION_UPLOAD_INFO:
            return { ...state,
                submitUrl: action.submitUrl,
                apiKey: action.apiKey
            }
        case CREATION_TOOL_CHANNEL_ID:
            return { ...state,
                channelId: action.channelId
            }
        case CREATION_TOOL_TRIM_DATA:
            return { ...state,
                trimData: action.trimData
            }
        default:
            return state
    }
}

export const setCreationStatus = status => ({
    type: CREATION_STATUS,
    status
})
export const setCreationJobId = currentJobId => ({
    type: CREATION_JOB_ID,
    currentJobId
})
export const setCreationEditedFile = file => ({
    type: CREATION_EDIT_FILE,
    file
})
export const resetCreationEditFile = () => ({
    type: CREATION_RESET_EDIT_FILE
})
export const updateCreationTool = creationData => ({
    type: CREATION_TOOL_UPDATE,
    creationData
})
export const resetCreationTool = () => ({
    type: CREATION_TOOL_RESET
})
export const setCreationHasEdits = hasEdits => ({
    type: CREATION_HAS_EDITS,
    hasEdits
})
export const setCreationUploadInfo = (submitUrl, apiKey) => ({
    type: CREATION_UPLOAD_INFO,
    submitUrl,
    apiKey
})
export const setCreationChannelId = channelId => ({
    type: CREATION_TOOL_CHANNEL_ID,
    channelId
})
export const setCreationTrimData = trimData => ({
    type: CREATION_TOOL_TRIM_DATA,
    trimData
})

export const getFile = state => state.file
export const getEditedFile = state => state.editedFile
export const getStatus = state => state.status
export const getDefaultTags = state => state.defaultTags
export const getTags = state => state.tags
export const getRating = state => state.rating
export const getSourceUrl = state => state.sourceUrl
export const getAPIKey = state => state.apiKey
export const getTermsAgreed = state => state.termsAgreed
export const getUsername = state => state.username
export const getIsPrivate = state => state.isPrivate
export const getIsUploading = state => state.isUploading
export const getHasEdits = state => state.hasEdits
export const getCurrentJobId = state => state.currentJobId
export const getChannelId = state => state.channelId
export const getDimensionsByFrame = state => state.dimensionsByFrame
export const getTrimData = state => state.trimData
export const getInfoFields = ({
    tags,
    rating,
    sourceUrl,
    termsAgreed,
    username,
    channelId,
    isPrivate
}) => ({
    tags,
    rating,
    sourceUrl,
    termsAgreed,
    username,
    channelId,
    isPrivate,
})