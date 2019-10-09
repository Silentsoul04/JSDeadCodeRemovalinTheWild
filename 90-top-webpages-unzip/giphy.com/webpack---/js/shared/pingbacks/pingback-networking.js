import fetch from 'isomorphic-fetch'
import cookie from 'cookie'
import getLastSearchResponseId from 'shared/util/get-last-search-id'
import _ from 'lodash'

const pingBackUrl = 'https://pingback.giphy.com/pingback?apikey=l0HlIwPWyBBUDAUgM'
// const pingBackUrl_debug = 'https://pingback.giphy.com/pingback_debug?apikey=l0HlIwPWyBBUDAUgM'
const queuedEvents = {}
const user = {}
const debouncedPingbackEvent = pingbackDebounce()

function pingbackDebounce() {
    return _.debounce(fetchPingbackRequest, 1000)
}

// for IntervalCalls and UnmountCalls
export function fetchPingbackRequest() {
    // if there are no actions lined up inside this pingbackType do nothing
    _.forEach(Object.keys(queuedEvents), pingbackTypeKeys => {
        if (Array.isArray(queuedEvents[pingbackTypeKeys])) {
            if (queuedEvents[pingbackTypeKeys].length) {
                const session = createSession(pingbackTypeKeys)
                fetch(pingBackUrl, {
                    method: 'POST',
                    body: JSON.stringify({ sessions: [session] }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                // empty this specific batch
                queuedEvents[pingbackTypeKeys] = []
            }
        } else {
            // if the nested value is an object loop over the keys otherwise take what is there
            _.forEach(Object.keys(queuedEvents[pingbackTypeKeys]), pingBackResponseIdKeys => {
                if (queuedEvents[pingbackTypeKeys][pingBackResponseIdKeys].length) {
                    const session = createSession(pingbackTypeKeys, pingBackResponseIdKeys)
                    fetch(pingBackUrl, {
                        method: 'POST',
                        body: JSON.stringify({ sessions: [session] }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    // empty this specific batch
                    queuedEvents[pingbackTypeKeys][pingBackResponseIdKeys] = []
                }
            })
        }
    })
}

function createSession(pingbackType, searchResponseId) {
    const { giphy_pbid } = cookie.parse(document.cookie)
    const pingbackSessionSchemas = {
        trending_grid: {
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(user.id || ''),
            },
            events: [
                {
                    event_type: 'GIF_TRENDING',
                    referrer: document && document.referrer ? document.referrer : null,
                    actions: queuedEvents[pingbackType][searchResponseId],
                    response_id: searchResponseId,
                },
            ],
        },
        related_grid: {
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(user.id || ''),
            },
            events: [
                {
                    event_type: 'GIF_RELATED',
                    referrer: document && document.referrer ? document.referrer : null,
                    actions: queuedEvents[pingbackType][searchResponseId],
                    response_id: searchResponseId,
                },
            ],
        },
        channel_grid: {
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(user.id || ''),
            },
            events: [
                {
                    event_type: 'GIF_CHANNEL',
                    referrer: document && document.referrer ? document.referrer : null,
                    actions: queuedEvents[pingbackType][searchResponseId],
                },
            ],
        },
        search_grid: {
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(user.id || ''),
            },
            events: [
                {
                    event_type: 'GIF_SEARCH',
                    response_id: searchResponseId,
                    previous_response_id: getLastSearchResponseId() || null,
                    referrer: document && document.referrer ? document.referrer : null,
                    actions: queuedEvents[pingbackType][searchResponseId],
                },
            ],
        },
        universal_search: {
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(user.id || ''),
            },
            events: [
                {
                    event_type: 'GIF_SEARCH',
                    response_id: searchResponseId,
                    previous_response_id: getLastSearchResponseId() || null,
                    referrer: document && document.referrer ? document.referrer : null,
                    actions: queuedEvents[pingbackType][searchResponseId],
                },
            ],
        },
        suggested_terms: {
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(user.id || ''),
            },
            events: [
                {
                    event_type: 'GIF_SEARCH',
                    response_id: searchResponseId,
                    previous_response_id: getLastSearchResponseId() || null,
                    referrer: document && document.referrer ? document.referrer : null,
                    actions: queuedEvents[pingbackType][searchResponseId],
                },
            ],
        },
        explore_grid: {
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(user.id || ''),
            },
            events: [
                {
                    event_type: 'GIF_EXPLORE',
                    response_id: searchResponseId,
                    referrer: document && document.referrer ? document.referrer : null,
                    actions: queuedEvents[pingbackType][searchResponseId],
                },
            ],
        },
        trending_carousel: {
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(user.id || ''),
            },
            events: [
                {
                    event_type: 'GIF_TRENDING',
                    response_id: searchResponseId,
                    referrer: document && document.referrer ? document.referrer : null,
                    actions: queuedEvents[pingbackType][searchResponseId],
                },
            ],
        },
    }

    return pingbackSessionSchemas[pingbackType]
}

function queueAction(pingbackType, searchResponseId, action, userArg = {}) {
    if (userArg && userArg.id) {
        user.id = userArg.id
    }

    // the queue doesn't exist for this pingbackType yet so create it and create the corresponding searchResponseId key
    if (!queuedEvents[pingbackType] && action) {
        queuedEvents[pingbackType] = {}
        queuedEvents[pingbackType][searchResponseId] = [action]

        // the group exists but the searchRepsonseId queue does not so create it
    } else if (!queuedEvents[pingbackType][searchResponseId] && action) {
        queuedEvents[pingbackType][searchResponseId] = [action]

        // the queue exists already so just store it into the appropriate pingbackType queue
    } else if (action) {
        queuedEvents[pingbackType][searchResponseId].push(action)
    }
}

export function explorePingBackEvent(action, searchResponseId, user, skipQueue = false) {
    queueAction('explore_grid', searchResponseId, action, user)
    skipQueue ? fetchPingbackRequest() : debouncedPingbackEvent()
}

export function suggestedTermPingBackEvent(action, searchResponseId, user, skipQueue = false) {
    queueAction('suggested_terms', searchResponseId, action, user)
    skipQueue ? fetchPingbackRequest() : debouncedPingbackEvent()
}

export function universalSearchPingBackEvent(action, searchResponseId, user, skipQueue = false) {
    queueAction('universal_search', searchResponseId, action, user)
    skipQueue ? fetchPingbackRequest() : debouncedPingbackEvent()
}

export function trendingGridPingBackEvent(action, searchResponseId, user, skipQueue = false) {
    queueAction('trending_grid', searchResponseId, action, user)
    skipQueue ? fetchPingbackRequest() : debouncedPingbackEvent()
}

export function trendingCarouselPingBackEvent(action, searchResponseId, user, skipQueue = false) {
    queueAction('trending_carousel', searchResponseId, action, user)
    skipQueue ? fetchPingbackRequest() : debouncedPingbackEvent()
}

export function searchPingBackEvent(action, searchResponseId, user, skipQueue = false) {
    queueAction('search_grid', searchResponseId, action, user)
    skipQueue ? fetchPingbackRequest() : debouncedPingbackEvent()
}

export function relatedPingBackEvent(action, searchResponseId, user, skipQueue = false) {
    queueAction('related_grid', searchResponseId, action, user)
    skipQueue ? fetchPingbackRequest() : debouncedPingbackEvent()
}

export function channelPingBackEvent(action, searchResponseId, user, skipQueue = false) {
    queueAction('channel_grid', searchResponseId, action, user)
    skipQueue ? fetchPingbackRequest() : debouncedPingbackEvent()
}

export default pingbackEvent => {
    return function() {
        const { giphy_pbid } = cookie.parse(document.cookie)
        const session = {
            session_id: '',
            user: {
                user_id: giphy_pbid,
                logged_in_user_id: String(window.USER && window.USER.id ? window.USER.id : ''),
            },
            events: [pingbackEvent],
        }
        return fetch(pingBackUrl, {
            method: 'POST',
            body: JSON.stringify({ sessions: [session] }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
