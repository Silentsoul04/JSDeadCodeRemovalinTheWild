import {
    combineReducers
} from 'redux'

import {
    RECEIVED_GIFS,
    REQUEST_GIFS,
    ADD_GIFS_TO_GROUP
} from './gifs'

const fetchingByUrl = (state = {}, action) => {
    if (!action.url) {
        return state
    }
    switch (action.type) {
        case REQUEST_GIFS:
            return {
                ...state,
                [action.url]: true,
            }
        case RECEIVED_GIFS:
            return {
                ...state,
                [action.url]: false,
            }
        default:
            return state
    }
}

const fetching = (state = false, action) => {
    switch (action.type) {
        case REQUEST_GIFS:
            return true
        case RECEIVED_GIFS:
            return false
        default:
            return state
    }
}

const fetchingByGroup = (state = {}, action) => {
    if (!action.groupId) {
        return state
    }
    switch (action.type) {
        case REQUEST_GIFS:
            return {
                ...state,
                [action.groupId]: true,
            }
        case RECEIVED_GIFS:
            return {
                ...state,
                [action.groupId]: false,
            }
        default:
            return state
    }
}

const nextUrlByUrl = (state = {}, action) => {
    switch (action.type) {
        case ADD_GIFS_TO_GROUP:
        case RECEIVED_GIFS:
            if (!action.url) {
                return state
            }
            return { ...state,
                [action.url]: action.nextUrl || ''
            }
        default:
            return state
    }
}

const nextUrlByGroupId = (state = {}, action) => {
    switch (action.type) {
        case ADD_GIFS_TO_GROUP:
        case RECEIVED_GIFS:
            if (!action.groupId) {
                return state
            }
            return { ...state,
                [action.groupId]: action.nextUrl || ''
            }
        default:
            return state
    }
}

const currentUrlByGroupId = (state = {}, action) => {
    switch (action.type) {
        case ADD_GIFS_TO_GROUP:
        case RECEIVED_GIFS:
        case REQUEST_GIFS:
            if (!action.groupId) {
                return state
            }
            return { ...state,
                [action.groupId]: action.url || ''
            }
        default:
            return state
    }
}

const nextUrl = (state = '', action) => {
    switch (action.type) {
        case RECEIVED_GIFS:
            return action.nextUrl || ''
        default:
            return state
    }
}

const responseIdByGroupId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_GIFS:
            if (!action.groupId) {
                return state
            }
            return { ...state,
                [action.groupId]: action.responseId || ''
            }
        default:
            return state
    }
}

const responseId = (state = '', action) => {
    switch (action.type) {
        case RECEIVED_GIFS:
            return action.responseId || ''
        default:
            return state
    }
}

export default combineReducers({
    currentUrlByGroupId,
    nextUrlByGroupId,
    nextUrl,
    fetchingByUrl,
    nextUrlByUrl,
    fetching,
    fetchingByGroup,
    responseIdByGroupId,
    responseId,
})

export const getNextUrlByUrl = (state, url) => {
    return state.nextUrlByUrl[url]
}
export const getFetchingByUrl = (state, url) => {
    return state.fetchingByUrl[url]
}
export const getFetching = (state, groupId) => {
    return groupId ? state.fetchingByGroup[groupId] : state.fetching
}
export const getNextUrl = (state, groupId) => {
    return groupId ? state.nextUrlByGroupId[groupId] : state.nextUrl
}
export const getCurrentUrlByGroupId = (state, groupId) => {
    return state.currentUrlByGroupId[groupId] || ''
}

export const getHasMore = (state, groupId) => {
    const nextUrl = getNextUrl(state, groupId)
    return nextUrl && nextUrl.length
}

export const getResponseId = (state, groupId) => {
    return groupId ? state.responseIdByGroupId[groupId] : state.responseId
}