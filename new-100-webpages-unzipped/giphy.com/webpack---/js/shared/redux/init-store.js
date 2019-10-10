import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import log from '../util/log'
import {
    isArray,
    isEmpty
} from 'lodash'
import persistState from 'redux-localstorage'
import persistSessionState from 'redux-sessionstorage'
import {
    createLogger
} from 'redux-logger'
import thunk from 'redux-thunk'
import freeze from 'redux-freeze'
import {
    addReducers
} from './reducers'

// temporary util needed while we have a separate store for search bar
export const getSessionValue = prop => {
    try {
        return JSON.parse(sessionStorage.getItem('redux'))[prop]
    } catch (e) {
        return undefined
    }
}

const IS_NOT_PROD = process.env.NODE_ENV !== 'production'

const slicer = paths => state => {
    const subset = {}
    paths.forEach(path => {
        // default implementation does a falsy check on state[path],
        // which means false doesn't save hrmph
        subset[path] = state[path]
    })
    return subset
}

/**
 * Standardized creation of a store, accepts configurable arguments
 */
const giphyStore = (reducers, initialState, localStorageProps = [], sessionProps = []) => {
    if (!isArray(localStorageProps)) {
        localStorageProps = [localStorageProps]
    }
    const middleware = [thunk]
    if (log.ENABLED || IS_NOT_PROD) {
        middleware.push(createLogger({
            collapsed: true
        }))
        middleware.push(freeze)
    }
    const devTools = global.__REDUX_DEVTOOLS_EXTENSION__ ? global.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    const enhancers = [applyMiddleware(...middleware)]
    if (typeof window !== 'undefined') {
        if (!isEmpty(localStorageProps)) {
            enhancers.push(persistState(localStorageProps, {
                slicer
            }))
        }
        if (!isEmpty(sessionProps)) {
            enhancers.push(persistSessionState(sessionProps, {
                slicer
            }))
        }
    }
    return createStore(
        reducers,
        initialState,
        compose(
            ...enhancers,
            devTools,
        ),
    )
}

export default giphyStore

/**
 * Common reducers and localStorageProps are always included
 * when using getDefaultStore.
 *
 * @param {Object} extraReducers Additional reducers only used by this entry point
 * @param {Object} initialState The initial state of the store
 * @param {Array} localStorageProps state to initialize from localstorage
 * @returns {Store} A redux store
 */
export const getDefaultStore = (extraReducers = {}, initialState = {}, localStorageProps = [], sessionProps = []) =>
    giphyStore(
        addReducers(extraReducers),
        initialState, ['autoPlay', 'userGridType', ...localStorageProps], ['searchType', 'isBulkEditMode', ...sessionProps],
    )