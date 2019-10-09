import cookie from 'cookie'
import fetch from 'isomorphic-fetch'

export const INIT = 'INIT'
export const USER_STATUS = 'USER_STATUS'
export const SETTINGS = 'SETTINGS'
export const REQUEST_FAVORITES = 'REQUEST_FAVORITES'
export const SET_FOLLOWING = 'SET_FOLLOWING'
export const REMOVE_FOLLOWING = 'REMOVE_FOLLOWING'
export const ADD_FOLLOWING = 'ADD_FOLLOWING'

import newGifFetcher from 'shared/redux/fetch-new-gifs'
import { addToGroup, removeGifsByGroupId, receivedGifs } from 'shared/redux/gifs'
import { resetNewGifs } from 'shared/redux/new-gifs'
import routes from '../../shared/routes'
import { GET, POST } from 'shared/util/fetch-methods'
import * as reducers from './reducers'
import * as api from 'shared/api'

/**
 * Initialize the state tree with data
 * @param route {String} The initial route
 * @param queryString {Object} Query string name/value pairs
 * @param data {Object} Initial data to populate the state tree
 */
export const init = (route, queryString = {}, data = {}, cookies) => ({ type: INIT, route, queryString, data, cookies })

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

export const CATEGORY_MENU_VISIBLE = 'CATEGORY_MENU_VISIBLE'
export const categoryMenuVisible = visible => ({ type: CATEGORY_MENU_VISIBLE, visible })

export const USER_MENU_VISIBLE = 'USER_MENU_VISIBLE'
export const userMenuVisible = visible => ({ type: USER_MENU_VISIBLE, visible })

export const LOGIN_STATUS = 'LOGIN_STATUS'
export const loginStatus = (isFetching, hasChecked) => ({ type: LOGIN_STATUS, isFetching, hasChecked })

/**
 * Set user status properties
 */
export const userStatus = (
    loggedIn,
    authToken,
    id,
    username,
    channel,
    avatarURL,
    isArtist,
    isPartner,
    isStaff,
    permissions,
    email,
    userToken,
    primarySite,
    displayName,
) => ({
    type: USER_STATUS,
    loggedIn,
    authToken,
    id,
    username,
    channel,
    avatarURL,
    isArtist,
    isPartner,
    isStaff,
    permissions,
    email,
    userToken,
    primarySite,
    displayName,
})

export const CLEAR_QUEUED_FAVORITE = 'CLEAR_QUEUED_FAVORITES'
export const clearQueuedFavorite = () => ({ type: CLEAR_QUEUED_FAVORITE })

function userActionFromJSON(json = {}) {
    const user = json.user || {}
    return userStatus(
        json.logged_in,
        json.fb_access_token,
        user.id,
        user.username,
        user.channel || user.profile_url, // TODO return consistent data
        user.avatar_url,
        json.is_artist,
        json.is_partner,
        json.is_staff,
        user.permissions,
        user.email,
        user.token,
        user.primary_site,
        user.display_name,
    )
}
export function checkLogin() {
    return function(dispatch, getState) {
        const { user } = getState(),
            { loggedIn, isFetching, hasChecked } = user
        if (loggedIn || isFetching || hasChecked) {
            return Promise.resolve()
        } else {
            dispatch(loginStatus(true))
            return fetch('/login/check/', GET)
                .then(checkStatus)
                .then(parseJSON)
                .then(({ result }) => {
                    const csrftoken = cookie.parse(document.cookie).csrftoken
                    dispatch(
                        settings(undefined, {
                            csrftoken,
                        }),
                    )
                    dispatch(userActionFromJSON(result))
                    dispatch(loginStatus(false, true))
                })
        }
    }
}

export function passwordChange(data) {
    return function() {
        return (
            fetch('/password/change', POST(data))
                // status will throw an error
                // .then(checkStatus)
                .then(parseJSON)
        )
    }
}

export function passwordReset(data) {
    return function() {
        return fetch('/password/reset', POST(data))
    }
}

export function giphyLogin(data) {
    return function(dispatch, getState) {
        const { user } = getState(),
            { loggedIn, isFetching } = user
        if (loggedIn || isFetching) {
            return Promise.resolve()
        } else {
            return fetch('/login/', POST(data))
                .then(checkStatus)
                .then(parseJSON)
                .then(({ user }) => {
                    // here we get back just a user object,
                    // no logged_in or fb_access_token
                    const result = {
                        logged_in: true,
                        user: user,
                    }
                    dispatch(userActionFromJSON(result))
                })
        }
    }
}

export function facebookLogin() {
    return function(dispatch, getState) {
        const { user } = getState(),
            { loggedIn, isFetching, authToken } = user
        if (loggedIn || isFetching) {
            return Promise.resolve()
        } else {
            return fetch('/login/facebook/token/?access_token=' + authToken, GET)
                .then(checkStatus)
                .then(parseJSON)
                .then(({ user }) => {
                    // here we get back just a user object,
                    // no logged_in or fb_access_token
                    const result = {
                        logged_in: true,
                        user: user,
                    }
                    dispatch(userActionFromJSON(result))
                })
        }
    }
}
export const APP_SIZE = 'APP_SIZE'
export const setAppSize = (width, height) => ({ type: APP_SIZE, width, height })

export const ORIENTATION = 'ORIENTATION'
export const setOrientation = isPortrait => ({ type: ORIENTATION, isPortrait })

/**
 * Toggle a favorite
 * @param {String} the id of the gif
 */
export function toggleFavorite(gifID) {
    return function(dispatch, getState) {
        const { user } = getState()
        if (!user.loggedIn) {
            location.href = `/login?next=${location.pathname}&ref=fave`
        } else {
            return (
                fetch(`/favorites/${gifID}/`, POST())
                    .then(checkStatus)
                    .then(parseJSON)
                    .then(({ result }) => result.has_favorited)
                    // dispatch add or remove which update the state
                    .then(isFavorite => {
                        const action = { gifIds: [gifID], groupId: routes.FAVORITES.path }
                        dispatch(isFavorite ? addToGroup(action) : removeGifsByGroupId(action))
                    })
            )
        }
    }
}

export const checkedFavorites = () => ({ type: REQUEST_FAVORITES })

export function getFavorites() {
    return function(dispatch, getState) {
        const { user } = getState()
        if (!user.loggedIn || user.hasCheckedFavorites) {
            return Promise.resolve()
        } else {
            dispatch(checkedFavorites())
            return (
                fetch('/favorites/', GET)
                    .then(checkStatus)
                    .then(parseJSON)
                    // dispatch add or remove which update the state
                    .then(({ data }) => {
                        const { gifs } = data
                        if (gifs) {
                            const action = { gifIds: gifs.map(gif => gif.id), groupId: routes.FAVORITES.path }
                            dispatch(addToGroup(action))
                        }
                    })
            )
        }
    }
}

/**
 * Settings
 */
export const settings = (data, cookies) => ({ type: SETTINGS, data, cookies })

export function follow(userId) {
    return function(dispatch, getState) {
        return api.follow(userId, getState().settings.csrftoken).then(result => {
            dispatch(addFollowing(result.data.to_user))
            return result
        })
    }
}

export function unfollow(userId) {
    return function(dispatch, getState) {
        return api.unfollow(userId, getState().settings.csrftoken).then(result => {
            dispatch(removeFollowing(userId))
            return result
        })
    }
}

export const setFollowing = following => ({ type: SET_FOLLOWING, following })
export const removeFollowing = userId => ({ type: REMOVE_FOLLOWING, userId })
export const addFollowing = userId => ({ type: ADD_FOLLOWING, userId })

export function follows() {
    return function(dispatch) {
        return api.follows().then(({ data }) => {
            dispatch(setFollowing(data))
        })
    }
}

export function checkForNewGifs(channelId, latestGifId) {
    return function(dispatch, getState) {
        const state = getState()
        const isPolling = reducers.getPolling(state)

        if (!latestGifId || isPolling) {
            return Promise.resolve()
        }

        return newGifFetcher(channelId, latestGifId)(dispatch)
    }
}

export function showNewGifs(groupId) {
    return function(dispatch, getState) {
        const state = getState()
        const newGifs = reducers.getNewGifs(state)
        const { pagination } = state

        if (!newGifs.length) {
            return Promise.resolve()
        }

        dispatch(
            receivedGifs({
                gifs: newGifs,
                prepend: true,
                groupId: groupId,
                nextUrl: pagination.nextUrl,
            }),
        )
        dispatch(resetNewGifs())
        return newGifs
    }
}
