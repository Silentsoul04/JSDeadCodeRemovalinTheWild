import {
    uniq,
    without,
    memoize,
    indexOf as _indexOf,
    isEqual,
    forEach,
    compact
} from 'lodash'
import {
    combineReducers
} from 'redux'
import {
    createSelector
} from 'reselect'
import normalizeGif from '../util/normalize-gif'

export const REQUEST_GIFS = 'REQUEST_GIFS'
export const RECEIVED_GIFS = 'RECEIVED_GIFS'
export const ADD_GIFS_TO_GROUP = 'ADD_GIFS_TO_GROUP'
export const REMOVE_GIFS = 'REMOVE_GIFS'
export const REMOVE_GIFS_BY_URL = 'REMOVE_GIFS_BY_URL'
export const REMOVE_GIFS_BY_GROUP_ID = 'REMOVE_GIFS_BY_GROUP_ID'
export const REPLACE_GIFS_BY_GROUP = 'REPLACE_GIFS_BY_GROUP'

const emptyArr = Object.freeze([])
const TV_MIN_GIF_COUNT = 6

const removeAllGifs = (state, gifsToRemove) => {
    // remove from all objects in array
    const newState = { ...state
    }
    forEach(newState, (val, propName) => {
        newState[propName] = without(state[propName], ...gifsToRemove)
    })
    return newState
}

const byId = (state = {}, action = {}) => {
    switch (action.type) {
        case RECEIVED_GIFS:
            {
                const gifs = { ...state
                }
                action.gifs.forEach(gif => {
                    const newGif = normalizeGif(gif)
                    const existing = gifs[newGif.id]
                    // if existing and new gif are deeply equal,
                    // don't override gifs[id] with the new object
                    if (!existing || !isEqual(newGif, existing)) {
                        gifs[newGif.id] = newGif
                    }
                })
                return gifs
            }
        case REMOVE_GIFS:
            {
                const {
                    gifIds,
                    groupId
                } = action
                if (!groupId) {
                    const newState = { ...state
                    }
                    forEach(gifIds, id => delete newState[id])
                    return newState
                }
                return state
            }
        default:
            return state
    }
}

const allIds = (state = emptyArr, action) => {
    const {
        type
    } = action
    switch (type) {
        case RECEIVED_GIFS:
            {
                const {
                    gifs,
                    prepend
                } = action
                const ids = gifs.map(gif => {
                    if (gif) return gif.id
                })
                return uniq(prepend ? [...ids, ...state] : [...state, ...ids])
            }
        case REMOVE_GIFS:
            {
                const {
                    gifIds
                } = action
                return without(state, ...gifIds)
            }
        default:
            return state
    }
}

const idsByGroup = (state = {}, action) => {
    const {
        type,
        groupId
    } = action
    switch (type) {
        case RECEIVED_GIFS:
            {
                if (!groupId) {
                    return state
                }
                const {
                    gifs
                } = action
                const ids = gifs.map(gif => gif.id),
                    existing = state[groupId] || emptyArr
                if (isEqual(ids, existing)) {
                    return state
                }
                return {
                    ...state,
                    [groupId]: uniq([...existing, ...ids]),
                }
            }
        case ADD_GIFS_TO_GROUP:
            {
                if (!groupId) {
                    return state
                }
                const ids = action.gifIds,
                    existing = state[groupId] || emptyArr
                if (isEqual(ids, existing)) {
                    return state
                }
                return {
                    ...state,
                    [groupId]: uniq([...existing, ...ids]),
                }
            }
        case REMOVE_GIFS:
            return removeAllGifs(state, action.gifIds)
        case REMOVE_GIFS_BY_GROUP_ID:
            if (!groupId) {
                throw 'no group id specified in redux action removeGifsByGroupId'
            }
            return {
                ...state,
                [groupId]: without(state[groupId], ...action.gifIds),
            }
        case REPLACE_GIFS_BY_GROUP:
            if (!groupId) {
                throw 'no group id specified in redux action replaceGifsByGroup'
            }
            return {
                ...state,
                [groupId]: action.gifIds,
            }
        default:
            return state
    }
}

const idsByUrl = (state = {}, action) => {
    const {
        type
    } = action
    switch (type) {
        case RECEIVED_GIFS:
            {
                const {
                    gifs,
                    url
                } = action
                if (!url) {
                    return state
                }
                const ids = gifs.map(gif => gif.id)
                return { ...state,
                    [url]: ids
                }
            }
        case REMOVE_GIFS:
            return removeAllGifs(state, action.gifIds)

        case REMOVE_GIFS_BY_URL:
            {
                const {
                    gifIds,
                    url
                } = action
                if (!url) {
                    throw 'no url specified in redux action removeGifsByUrl'
                }
                return {
                    ...state,
                    [url]: without(state[url], ...gifIds),
                }
            }
        default:
            return state
    }
}

const countByGroupId = (state = {}, action) => {
    const {
        type
    } = action
    switch (type) {
        case RECEIVED_GIFS:
            {
                const {
                    count,
                    groupId
                } = action
                return { ...state,
                    [groupId]: count
                }
            }
        default:
            return state
    }
}

const errorByGroupId = (state = {}, action) => {
    const {
        type
    } = action
    switch (type) {
        case RECEIVED_GIFS:
            {
                const {
                    error,
                    groupId
                } = action
                return { ...state,
                    [groupId]: error
                }
            }
        default:
            return state
    }
}

function removedGifs(state = [], action = {}) {
    switch (action.type) {
        case REMOVE_GIFS:
            return [...state, ...action.gifIds]
        default:
            return state
    }
}

export default combineReducers({
    byId,
    allIds,
    idsByUrl,
    idsByGroup,
    countByGroupId,
    errorByGroupId,
    removedGifs,
})

// memoize this so we can use strict equal comparisons
// upfront the memo cost a little more, but subsequent request are very cheap
const memoGifs = memoize(
    (ids, byId) => ids.map(id => byId[id]),
    array => {
        return array.toString()
    },
)
export const clearGetGifsMemo = () => {
    memoGifs.cache.clear()
}
/**
 * Selectors
 */
export const getGifs = (state, groupId, editMode, excludeGifIds = []) => {
    let ids = emptyArr
    if (groupId) {
        ids = state.idsByGroup[groupId] || emptyArr
    } else {
        ids = state.allIds || emptyArr
    }

    let filteredIds = ids
    if (excludeGifIds.length > 0) {
        filteredIds = ids.filter(id => excludeGifIds.indexOf(id) === -1)
    }

    return memoGifs(filteredIds, state.byId)
}

export const getGifsByUrl = (state, url) => {
    let ids = emptyArr
    if (url) {
        ids = state.idsByUrl[url] || emptyArr
    }
    return memoGifs(ids, state.byId)
}

export const getGif = (state, gifId) => {
    return gifId ? state.byId[gifId] : null
}

export const getIdsByURL = (state, url) => state.idsByUrl[url]

export const getIds = (state, groupId) => {
    if (groupId) {
        return state.idsByGroup[groupId] || emptyArr
    }
    return state.allIds || emptyArr
}

export const getGifById = (state, gifId) => {
    return state.byId[gifId]
}

export const getGifsById = (state, gifIds = []) => {
    return compact(gifIds.map(id => state.byId[id]))
}

export const indexOf = (state, gifId, groupId) => {
    const ids = getIds(state, groupId)
    return _indexOf(ids, gifId)
}

export const getNextId = (state, gifId, groupId) => {
    const ids = getIds(state, groupId)
    const index = _indexOf(ids, gifId)
    const nextIndex = index + 1
    const id = index === -1 ? undefined : ids[nextIndex]
    if (id) {
        const gif = getGifById(state, id)
        if (gif && gif.type === 'post') {
            return getNextId(state, ids[nextIndex])
        }
        return id
    }
}

export const getPrevId = (state, gifId, groupId) => {
    const ids = getIds(state, groupId)
    const index = _indexOf(ids, gifId)
    const prevIndex = index - 1
    const id = index === -1 ? undefined : ids[prevIndex]
    if (id) {
        const gif = getGifById(state, id)
        if (gif && gif.type === 'post') {
            return getPrevId(state, ids[prevIndex])
        }
        return id
    }
}

export const getNextGif = (state, gifId, groupId) => {
    return getGifById(state, getNextId(state, gifId, groupId))
}

export const getPrevGif = (state, gifId, groupId) => {
    return getGifById(state, getPrevId(state, gifId, groupId))
}

export const getGifCountByGroupId = (state, props) => state.countByGroupId[props.groupId]
export const hasEnoughGifsForTV = createSelector(
    getGifCountByGroupId,
    gifCount => gifCount > TV_MIN_GIF_COUNT,
)

export const getGifErrorByGroupId = (state, props) => state.errorByGroupId[props.groupId]
export const getRemovedGifs = ({
    removedGifs
}) => removedGifs

/**
 * Add gifs to a group
 */
export const addToGroup = ({
    gifIds,
    groupId,
    nextUrl,
    url
}) => ({
    type: ADD_GIFS_TO_GROUP,
    groupId,
    gifIds,
    nextUrl,
    url,
})

/**
 * Remove gifs to a group
 */
export const removeGifs = ({
    gifIds
}) => ({
    type: REMOVE_GIFS,
    gifIds
})
export const removeGifsByUrl = ({
    gifIds,
    url
}) => ({
    type: REMOVE_GIFS_BY_URL,
    gifIds,
    url
})
export const removeGifsByGroupId = ({
    gifIds,
    groupId
}) => ({
    type: REMOVE_GIFS_BY_GROUP_ID,
    groupId,
    gifIds
})

/**
 * Replace new gifs into group
 */
export const replaceGifsByGroup = ({
    gifIds,
    groupId
}) => ({
    type: REPLACE_GIFS_BY_GROUP,
    gifIds,
    groupId
})

/**
 * Receieved gifs will set the gifs.fetching property to false and
 * update the gifs and url data
 */
export const receivedGifs = ({
    gifs = emptyArr,
    prepend,
    url,
    groupId,
    nextUrl,
    responseId,
    count = null,
    error = null,
}) => ({
    type: RECEIVED_GIFS,
    gifs,
    url,
    groupId,
    prepend,
    nextUrl,
    responseId,
    count,
    error,
})

/**
 * Request gifs will set the gifs.fetching property to true
 */
export const requestGifs = (url, groupId) => ({
    type: REQUEST_GIFS,
    url,
    groupId
})