import {
    isEmpty
} from 'lodash'
import appendQuery from 'append-query'
import {
    addToGroup,
    requestGifs,
    receivedGifs,
    replaceGifsByGroup
} from './gifs'
import {
    processDefaultGifs,
    processChannelGifs
} from 'shared/util/gif-process'
import * as api from '../api'
import log from '../util/log'
import {
    trackPageView
} from '../util/analytics'
import * as selectors from './reducers'

// store the promises
const promises = {}

/**
 * Shared util for fetching from an url
 * @param {Function} dispatch
 * @param {Function} getState returns the redux state
 * @param {String} url
 * @param {String} groupId The group id the gifs will go into
 * @param {Boolean} prepend Prepend the gifs to the state instead of appending them
 * @param {Boolean} report Whether or not to report when the url is retrieved
 * @returns {Promise} The promise returns {gifs, nextUrl}
 */
async function doFetch({
    dispatch,
    getState,
    url,
    groupId,
    prepend = false,
    report = true,
    processor = processDefaultGifs,
    pingback_id,
    apiKey,
    onError,
}) {
    if (!url) {
        console.log(
            `No url specified for fetch gifs action, groupId: ${groupId}. We've either reached the end of a results set or no nextUrl was passed in.`,
        )
        return
    }

    // check if we have gifs for that url
    const idsForURL = selectors.getGifIdsByUrl(getState(), url)

    // channel processing
    if (url.indexOf('v1/channels/') > -1) {
        processor = processChannelGifs
    }

    // if we do, add them to the group
    if (!isEmpty(idsForURL)) {
        const nextUrl = selectors.getNextUrlByUrl(getState(), url)
        dispatch(addToGroup({
            groupId,
            gifIds: idsForURL,
            nextUrl,
            url
        }))
        const gifs = selectors.getGifsByUrl(getState(), url)
        return {
            gifs,
            nextUrl
        }
    }

    // we're going to fetch and this is the result
    let result
    // check if we're fetching
    if (!selectors.getFetchingByUrl(getState(), url)) {
        // set fetching flag
        dispatch(requestGifs(url, groupId))
        try {
            // create reference to promise
            log.info(`Fetching gifs: ${url}, groupId: ${groupId}`)
            promises[url] = api.gifs(url, processor, pingback_id, apiKey)
            result = await promises[url]
            delete promises[url] // clean up
            if (report) {
                trackPageView(url)
            }
        } catch (e) {
            onError && onError()
            throw `Error fetching gifs: ${url}, groupId: ${groupId} error:${e}`
        }
    } else {
        // we're fetching, so use the reference to the promise
        log.info(`Simultaneous request for ${url}`)
        // dispatch requestGifs again so current url updates for this groupId
        dispatch(requestGifs(url, groupId))
        result = await promises[url]
    }
    if (result) {
        // we have the result, update the state
        // and all the components will run their selectors
        // to get the new gifs
        const {
            gifs,
            pagination = {},
            search_id: responseId,
            count,
            error
        } = result
        const nextUrl = isEmpty(gifs) ? '' : pagination.next_url
        dispatch(
            receivedGifs({
                gifs,
                url,
                prepend,
                nextUrl,
                responseId,
                groupId,
                count,
                error,
            }),
        )

        // use the gifs from the state tree
        return {
            gifs: selectors.getGifsByUrl(getState(), url),
            nextUrl,
            count
        }
    }
}

/*
 * fetches gifs from the given URL and refreshes the groupId with gifs received
 */
async function doRefresh({
    dispatch,
    url,
    groupId,
    prepend = false,
    processor = processDefaultGifs
}) {
    if (!url) {
        throw `No url specified for fetch gifs action, groupId: ${groupId}`
    }

    // channel processing
    if (url.indexOf('v1/channels/') > -1) {
        processor = processChannelGifs
    }

    let result
    try {
        // create reference to promise
        log.info(`Fetching gifs: ${url}, groupId: ${groupId}`)
        let promise = api.gifs(url, processor)
        result = await promise
    } catch (e) {
        throw `Error fetching gifs: ${url}, groupId: ${groupId} error:${e}`
    }

    if (result) {
        // we have the result, update the state
        // and all the components will run their selectors
        // to get the new gifs
        const {
            gifs,
            search_id: responseId,
            error
        } = result
        dispatch(
            receivedGifs({
                gifs,
                url,
                prepend,
                nextUrl: url,
                responseId,
                groupId,
                error,
            }),
        )

        dispatch(
            replaceGifsByGroup({
                gifIds: gifs.map(({
                    id
                }) => id),
                groupId: groupId,
            }),
        )
    }
}

/**
 * Load gifs and pagination data
 */
export const fetchGifsFromUrl = (url, options) => (dispatch, getState) =>
    doFetch({
        dispatch,
        getState,
        url,
        ...options
    })

/**
 * Repopulates the given `groupId` with the gifs received from `url`
 */
export const refreshGifsFromUrl = (url, options) => (dispatch, getState) =>
    doRefresh({
        dispatch,
        getState,
        url,
        ...options
    })

/**
 * fetch gifs by a groupId
 * Components that don't know about their url structure or pagination
 * can invoke this with a groupId to
 */
export const fetchGifs = options => (dispatch, getState) => {
    const state = getState()
    // get the next url to load from pagination data based on the groupId
    const nextUrl = selectors.getNextUrl(state, options.groupId)
    return doFetch({
        dispatch,
        getState,
        url: nextUrl,
        ...options
    })
}

/**
 * Fetch channel gifs by a channel id
 * Load gifs and pagination data
 */
export const fetchChannelGifs = (id, options) => {
    const url = `/api/v1/channels/${id}/gifs/`
    return fetchChannelGifsFromUrl({
        url,
        ...options
    })
}

export const fetchGifById = (gifId, options) => {
    const url = appendQuery(`${api.API_URL}gifs/${gifId}`, {
        api_key: api.WEB_API_KEY
    })
    return fetchGifsFromUrl(url, options)
}

export const fetchChannelGifsFromUrl = ({
        url,
        processor = processChannelGifs,
        ...rest
    }) => dispatch =>
    dispatch(
        fetchGifsFromUrl(url, {
            processor,
            ...rest,
        }),
    )

export default fetchGifs