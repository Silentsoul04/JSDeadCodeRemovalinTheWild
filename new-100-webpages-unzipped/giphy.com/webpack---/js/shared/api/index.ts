import { GET, POST, DELETE, PATCH } from '../util/fetch-methods'
import fetch from 'isomorphic-fetch'
import appendQuery from 'append-query'
import * as urlUtil from 'url'
export const relatedUrl = (gifId, page = 1) => `/gifs/${gifId}/related/${page}`
export const gifUrl = gifId => `/gifs/${gifId}/`
export const gceUrl = '//rxjthjm1pofte.com'
export const imagingUrl = '//imaging.giphy.com'
import { ResponseError } from './errors'
import { IStory, StoryResult } from 'shared/types/story'
import { GiphyFetch, Result } from '@giphy/js-fetch-api'
const requestMap: { [key: string]: Promise<Result> } = {}

declare global {
    interface Window {
        GIPHY_API_URL: string
        SERVICE_GATEWAY_URL: string
    }
}

let {
    // https://api-qa.giphy.com/v1/
    // https://api.giphy.com/v1/
    GIPHY_API_URL = `https://api.giphy.com/v1/`,
    // https://x.giphy.com/
    // https://qa-x.giphy.com/
    SERVICE_GATEWAY_URL = `https://x.giphy.com/`,
} = window

SERVICE_GATEWAY_URL = `${SERVICE_GATEWAY_URL}v1/`

// TODO temporarily ignore the setting for GIPHY_API_URL
GIPHY_API_URL = `//api.giphy.com/v1/`

const trendingStoriesApiUrl = `${SERVICE_GATEWAY_URL}stories/trending`
export const API_URL = GIPHY_API_URL

export const MOBILE_API_KEY = `L8eXbxrbPETZxlvgXN9kIEzQ55Df04v0`
export const WEB_API_KEY = `Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`
export const FOUR_O_FOUR_API_KEY = `MRwXFtxAnaHo3EUMrSefHWmI0eYz5aGe`
export const TAGGER_API_KEY = `MviND4Ir2kESI`
const MAYBE_TRENDING_API_KEY = '3eFQvabDx69SMoOemSPiYfh9FY0nzO9x'

export const mobileFetch = new GiphyFetch(MOBILE_API_KEY)

const checkStatus = (res: Response) => {
    const { status, ok } = res
    if (status === 204) {
        return ok
    }
    if (status >= 200 && status < 300) {
        return res
    }

    return res.json().then(fieldErrors => {
        throw new ResponseError(res, fieldErrors)
    })
}

export const request = (url: string, config: any, token?) => {
    if (token) {
        const { headers } = config
        config['headers'] = { ...headers, Authorization: `Token ${token}` }
    }
    return fetch(url, config)
        .then(checkStatus)
        .then((response: Response) => response.json())
        .catch(err => console.error(err))
}
export const getResults = (...request) => {
    return fetch(...request)
        .then(checkStatus)
        .then(response => (response.json ? response.json() : response))
        .then(({ status, result, ...whatever }) => {
            if (!result) {
                // just return the whole response object
                return whatever
            }
            // some responses have a nested "result"
            return { status, ...result }
        })
}

export const getTrendingSearchTerms = () =>
    getResults(
        appendQuery(`${GIPHY_API_URL}trending/searches`, {
            api_key: WEB_API_KEY,
        }),
    )

const VIDEO_API = `${SERVICE_GATEWAY_URL}videos`
export const getVideos = (params = {}) =>
    getResults(
        appendQuery(VIDEO_API, {
            exact_tag_match: true,
            match_method: 'AND',
            api_key: WEB_API_KEY,
            ...params,
        }),
    )
export const getVideo = id =>
    getResults(
        appendQuery(`${VIDEO_API}/${id}`, {
            api_key: WEB_API_KEY,
        }),
    )

export const login = () => getResults(`/login/check`, GET)

export const instagram = (gifId, email) => fetch(`/ajax/instashare/`, POST({ gif_id: gifId, to: email }, true))

export function follow(userId) {
    return getResults(`/users/${userId}/follows`, POST())
}

export function unfollow(userId) {
    return getResults(`/users/${userId}/follows`, DELETE())
}

export function follows() {
    return getResults('/users/self/follows', GET)
}

export function getNewPermissions(gifId) {
    return getResults(`/ajax/gif/${gifId}/detail`, GET)
}

export function getGifChannels(gifIds = []) {
    return getResults(`/api/v2/channel-gifs/?gif=${gifIds.join(',')}`, GET)
}

export function deleteUser(id: number, password: string) {
    const requestInit = DELETE()
    requestInit.headers['X-Password'] = password
    return getResults(`/api/v1/users/${id}/`, requestInit as RequestInit)
}

export async function gifs(url: String, processor: Function, pingback_id: string, apiKey: string) {
    const urlToFetch = appendQuery(url, {
        is: 1,
        json: true,
        pingback_id,
        api_key: apiKey,
    })
    const res: Response = await fetch(urlToFetch, GET)
    if (res.ok) {
        let json
        try {
            json = await res.json()
        } catch (e) {
            throw `Error parsing json for ${url}`
        }
        return processor(json, pingback_id, url, apiKey)
    }
}

export const getArtistChannels = (filter = '') => getResults(appendQuery(`/api/v1/artists/`, { filter }), GET)

export function getChannelById(channelId = '') {
    return getResults(`/api/v1/channels/${channelId}/`, GET)
}

export function createChannel(channel) {
    return getResults(`/api/v1/channels/`, POST(channel, true))
}

export function moveChannel(channelId, siblingId, side) {
    return getResults(`/api/v1/channels/${channelId}/move/`, POST({ position: side, target_channel: siblingId }, true))
}

export function editChannelById(channelId, channel, isJson) {
    return getResults(`/api/v1/channels/${channelId}/`, PATCH(channel, isJson))
}

export function deleteChannelById(channelId = '') {
    return getResults(`/api/v1/channels/${channelId}/`, DELETE())
}

export function searchUsername(userName = '') {
    return getResults(`/api/v1/users/?search=${userName}`, GET)
}

export function getUserById(userId = '') {
    return getResults(`/api/v1/users/${userId}/`, GET)
}

export function editUserById(userId, user, isJson = false) {
    return getResults(`/api/v1/users/${userId}/`, PATCH(user, isJson))
}

export function createRankedTag(tag) {
    return getResults(`/api/v1/channel-ranked-tags/`, POST(tag, true))
}

export function editRankedTag(tagId, rank) {
    return getResults(`/api/v1/channel-ranked-tags/${tagId}/`, PATCH(rank, true))
}

export function deleteRankedTag(tagId) {
    return getResults(`/api/v1/channel-ranked-tags/${tagId}/`, DELETE())
}

export function createSyncableTag(tag) {
    return getResults(`/api/v1/channel-magic-tags/`, POST(tag, true))
}

export function deleteSyncableTag(tagId) {
    return getResults(`/api/v1/channel-magic-tags/${tagId}/`, DELETE())
}

export function search(term) {
    return getResults(`/ajax/tags/search/?q=${term}`, GET).then(({ objects }) => objects)
}

export function channelSearch(query) {
    return getResults(`/api/v1/channels-search/search/channel_v2?q=${query}`, GET).then(({ hits }) => hits)
}

export function channelSocialSearch(query) {
    return getResults(`/api/v1/channels-search/search/social?q=${query}`, GET).then(({ hits }) => hits)
}

export function getSuggestedSearchTerms(query) {
    return getResults(`/api/v1/tags/significant?q=${query}`)
}

export function fetchUserAnalytics(userId) {
    return getResults(`/api/v1/users/${userId}/view-count/`, GET)
}

export function fetchGifDetailViewCount(id) {
    return getResults(`/api/v1/proxy-gif/${id}/view-count/`, GET)
}

export function getGifById(gifId) {
    return getResults(appendQuery(`${GIPHY_API_URL}gifs/${gifId}`, { api_key: '3eFQvabDx69SMoOemSPiYfh9FY0nzO9x' }))
}

export function getGifsById(gifIds) {
    return getResults(
        appendQuery(`${GIPHY_API_URL}gifs`, {
            api_key: MAYBE_TRENDING_API_KEY,
            ids: Array.isArray(gifIds) ? gifIds.join(',') : gifIds,
        }),
    )
}

export function fetchTagCounts(gifId) {
    return getResults(`/ajax/gif/${gifId}/tag-counts`, GET)
}

export function fetchExtendedMetadata(gifId) {
    return getResults(`/ajax/gif/${gifId}/extended-metadata`, GET)
}

export function fetchLanguageTags(gifIds, lang) {
    return getResults(`/ajax/gif/bulk/language-tags?gif_ids=${gifIds.join(',')}&lang=${lang}`)
}

export function addLanguageTags(gifId, tags, lang) {
    const params = {
        tags: tags,
        lang: lang,
    }
    return getResults(`/ajax/gif/${gifId}/language-tags`, POST(params, true))
}

export function removeLanguageTag(gifId, tag, lang) {
    return getResults(`/ajax/gif/${gifId}/language-tags?tag=${encodeURIComponent(tag)}&lang=${lang}`, DELETE())
}

export function channelGifs(channelId, maxId) {
    return getResults(`/api/v1/channels/${channelId}/gifs/?max_id=${maxId}`, GET)
}

export function trackGifShare(id, type) {
    return fetch(`/ajax/gif/${id}/analytic/${type}`, POST())
}

export function tweet(formData) {
    return getResults('/ajax/twitter_upload', POST(formData))
}

export function fetchChannel(id = '') {
    return getResults(`/ajax/channels/${id}/`, GET)
}

export function allChannelSearch(slug = '') {
    return getResults(`/api/v1/channels/?search=${slug}`, GET)
}

export function updateGif(gifId, prop, value) {
    const params = {
        gif_id: gifId,
        key: prop,
        value,
    }
    return getResults('/ajax/gif/update', POST(params, true))
}

export function toggleFavorite(gifId) {
    return getResults(`/favorites/${gifId}/`, POST())
}

export function favoriteMilestones() {
    return fetch('/api/v1/favorite-milestones/', GET)
        .then(checkStatus)
        .then(response => response.json())
}

export function giphyAnalytics(shareType, gifId) {
    return getResults(`/ajax/gif/${gifId}/analytic/${shareType}/`, POST())
}

export function updateChannelGif(gifId, channelId, isDelete) {
    const params = {
        channel: channelId,
        gif: gifId,
    }
    return getResults(`/api/v1/channel-gifs/${isDelete ? 'remove/' : ''}`, POST(params, true))
}

export const channels = () => request(`/api/v1/channels/`, GET)

export const channelChildren = id => {
    if (!id) {
        throw new Error("We cannot fetch a channel's children without its parent's id.")
    }
    return request(`/api/v1/channels/?parent=${id}`, GET)
}

export const flag = (gifId, body) => request(`/api/v1/gifs/${gifId}/moderation`, POST(body))

export const getVideoEmbedInfo = url => getResults(`${imagingUrl}/fetch/video/info?url=${encodeURIComponent(url)}`, GET)

export const trimVideoEmbed = (url, start, duration) =>
    fetch(
        appendQuery(`${imagingUrl}/imaging/trim`, {
            media_url: url,
            start,
            duration,
        }),
        GET,
    )

export const getModerationGifs = (minId, maxId) =>
    getResults(appendQuery('/api/v1/moderation/gifs/', { min_id: minId, max_id: maxId }), GET)

export const getModerationBatchAction = userId =>
    getResults(
        appendQuery(`/api/v1/moderation/gif-batch-actions/`, {
            user_id: userId,
            action: 'assigned',
        }),
        GET,
    )

export const setModerationBatchAction = (actionId, action) =>
    getResults(`/api/v1/moderation/gif-batch-actions/${actionId}/`, PATCH({ action }, true))

export const createModerationBatchAction = jobId =>
    getResults(`/api/v1/moderation/gif-batch-actions/`, POST(jobId ? { job_id: jobId } : null, !!jobId))

export const fetchModerationLeaderboard = jobId =>
    getResults(appendQuery('/api/v1/moderation/gif-batch-actions/leaderboard/', jobId ? { job_id: jobId } : null), GET)

export const searchService = params =>
    getResults(appendQuery('/api/v1/search-service/search/', params, { encodeComponents: false }), GET)

export const getStoryById = (id, token) =>
    getResults(
        appendQuery(`${SERVICE_GATEWAY_URL}stories/${id}`, {
            api_key: MAYBE_TRENDING_API_KEY,
        }),
        {
            method: 'get',
            headers: token
                ? {
                      Accept: 'application/json',
                      Authorization: `Token ${token}`,
                  }
                : {},
        },
    )
export const getStory = (slug: string, token: string) =>
    getResults(
        appendQuery(`${SERVICE_GATEWAY_URL}stories/slug/${slug}`, {
            api_key: MAYBE_TRENDING_API_KEY,
        }),
        {
            method: 'get',
            headers: token
                ? {
                      Accept: 'application/json',
                      Authorization: `Token ${token}`,
                  }
                : {},
        },
    )

export const saveStory = (story: IStory, token: string) => {
    const isUpdate = !!story.story_id
    return getResults(
        appendQuery(`${SERVICE_GATEWAY_URL}stories${isUpdate ? '/' + story.story_id : ''}`, {
            api_key: MAYBE_TRENDING_API_KEY,
        }),
        {
            method: isUpdate ? 'put' : 'post',
            body: JSON.stringify({ story }),
            headers: token
                ? {
                      Accept: 'application/json',
                      Authorization: `Token ${token}`,
                  }
                : {},
        },
    )
}

export const deleteStory = (storyId, token: string) =>
    getResults(
        appendQuery(`${SERVICE_GATEWAY_URL}stories/${storyId}`, {
            api_key: MAYBE_TRENDING_API_KEY,
        }),
        {
            method: 'delete',
            headers: token
                ? {
                      Accept: 'application/json',
                      Authorization: `Token ${token}`,
                  }
                : {},
        },
    )

type FetchUserStoriesOptions = { showUnpublished?: boolean; fetchCoverOnly?: boolean; limit?: number; cursor?: string }
export const getUserStories = (
    username: string,
    token: string,
    options: FetchUserStoriesOptions = { showUnpublished: false, fetchCoverOnly: false },
) => {
    if (!username) {
        console.error(`No username specified for getUserStories`)
        return
    }
    const { showUnpublished, fetchCoverOnly, limit, cursor } = options
    const qs = {
        username,
        api_key: MAYBE_TRENDING_API_KEY,
        fetch_unpublished: showUnpublished,
        limit,
        next_cursor: cursor,
    }
    if (fetchCoverOnly) {
        qs['gif_hydration_method'] = 'COVER_ONLY'
    }
    const url = appendQuery(`${SERVICE_GATEWAY_URL}stories`, qs)
    if (!requestMap[url]) {
        requestMap[url] = getResults(url, {
            method: 'get',
            headers: token
                ? {
                      Accept: 'application/json',
                      Authorization: `Token ${token}`,
                  }
                : {},
        })
    }
    return requestMap[url] as Promise<StoryResult>
}

export const getArtistAndPartnerStories = (token: string, since, until) => {
    const params = {
        limit: 50,
        api_key: MAYBE_TRENDING_API_KEY,
        since: undefined,
        until: undefined,
        ts: Date.now(),
    }

    if (since) {
        params.since = since
    }

    if (until) {
        params.until = until
    }

    return getResults(appendQuery(`${SERVICE_GATEWAY_URL}stories/partnerArtist`, params), {
        method: 'get',
        headers: token
            ? {
                  Accept: 'application/json',
                  Authorization: `Token ${token}`,
              }
            : {},
    })
}

export const getTrendingStories = (token: string, sort = 'desc') =>
    getResults(
        appendQuery(trendingStoriesApiUrl, {
            api_key: MAYBE_TRENDING_API_KEY,
            sort,
        }),
        {
            method: 'get',
            headers: token
                ? {
                      Accept: 'application/json',
                      Authorization: `Token ${token}`,
                  }
                : {},
        },
    )

export const getStoriesByUrl = (url: string, token: string) =>
    getResults(url, {
        method: 'get',
        headers: token
            ? {
                  Accept: 'application/json',
                  Authorization: `Token ${token}`,
              }
            : {},
    })

export const saveTrendingStory = (storyId, trendingDatetime, token: string) =>
    getResults(
        appendQuery(trendingStoriesApiUrl, {
            api_key: MAYBE_TRENDING_API_KEY,
        }),
        {
            method: 'post',
            body: JSON.stringify({ trending_story: { story_id: storyId, publish_datetime: trendingDatetime } }),
            headers: token
                ? {
                      Accept: 'application/json',
                      Authorization: `Token ${token}`,
                  }
                : {},
        },
    )

export const removeTrendingStory = (trendingId, token: string) =>
    getResults(
        appendQuery(`${trendingStoriesApiUrl}/${trendingId}`, {
            api_key: MAYBE_TRENDING_API_KEY,
        }),
        {
            method: 'delete',
            headers: token
                ? {
                      Accept: 'application/json',
                      Authorization: `Token ${token}`,
                  }
                : {},
        },
    )

export const emailSearchResultsCsv = searchParams => {
    return fetch(appendQuery('/api/v1/search-service/csv/', searchParams), POST())
        .then(checkStatus)
        .then(response => response.json())
}

/**
 * @param {String} pathname pathname appended to https://api.giphy.com
 * @param {Object} query query params
 * @returns {Promise}
 */
export default (pathname, query = {}) =>
    fetch(
        urlUtil.format({
            protocol: `https`,
            host: `api.giphy.com`,
            pathname,
            query: { api_key: '5nt3fDeGakBKzV6lHtRM1zmEBAs6dsIc', ...query },
        }),
    )
        .then(checkStatus)
        .then(response => response.json())
