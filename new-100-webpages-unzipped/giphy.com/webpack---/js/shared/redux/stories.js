import {
    combineReducers
} from 'redux'
import createCachedSelector from 're-reselect'
import {
    uniq,
    uniqBy,
    without,
    omit
} from 'lodash'
import log from 'shared/util/log'

export const ADD_STORIES = 'ADD_STORIES'
export const REMOVE_STORIES = 'REMOVE_STORIES'
export const RESET_ALL_STORIES = 'RESET_ALL_STORIES'
export const SET_STORY_WATCHED = 'SET_STORY_WATCHED'
export const PAGINATION = 'STORY_PAGINATION'
export const FETCHING = 'STORY_PAGINATION_FETCHING'
export const UPDATE_STORY = 'UPDATE_STORY'

const sortStories = (stories = [], isReverse = false) => {
    const sorted = [...stories]
    // sort stories in reverse chronological order
    sorted.sort((a, b) => {
        const diff = new Date(b.publish_datetime) - new Date(a.publish_datetime)
        // if both stories' publish datetimes are the exact same, sort by
        // creation time (as this cannot be set manually by a user)
        if (diff === 0) {
            return new Date(b.create_datetime) - new Date(a.create_datetime)
        } else {
            return diff
        }
    })

    if (isReverse) {
        sorted.reverse()
    }

    // if (watched.length) {
    //     sorted.sort((a, b) => includes(watched, a.story_id) - includes(watched, b.story_id))
    // }

    return sorted
}

const groupByDate = (stories = [], isReverse = false) => {
    const dates = {}

    stories.forEach(story => {
        const {
            publish_datetime
        } = story
        const date = new Date(publish_datetime)

        // offset hours by 5 so our day starts at 5am
        date.setHours(date.getHours() - 5)

        const label = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        if (dates[label]) {
            dates[label].push(story)
        } else {
            dates[label] = [story]
        }
    })

    const keys = Object.keys(dates) || []
    keys.forEach(key => {
        dates[key] = sortStories(dates[key], isReverse)
    })

    return dates
}

const allIds = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_STORIES:
            const ids = action.stories.map(story => story.story_id)
            return uniq([...state, ...ids])
        case REMOVE_STORIES:
            const removeIds = action.storyIds
            return without(state, removeIds)
        case RESET_ALL_STORIES:
            return []
        default:
            return state
    }
}

const byId = (state = {}, action = {}) => {
    switch (action.type) {
        case ADD_STORIES:
            const stories = { ...state
            }
            action.stories.forEach(story => (stories[story.story_id] = story))
            return stories
        case REMOVE_STORIES:
            const removeIds = action.storyIds
            return omit(state, removeIds)
        case UPDATE_STORY:
            const allStories = { ...state
            }
            const storyData = allStories[action.storyId]
            allStories[action.storyId] = { ...storyData,
                ...(action.data || {})
            }
            return allStories
        case RESET_ALL_STORIES:
            return {}
        default:
            return state
    }
}

const bySlug = (state = {}, action = {}) => {
    switch (action.type) {
        case ADD_STORIES:
            const stories = { ...state
            }
            action.stories.forEach(story => {
                stories[story.slug] = story
            })
            return stories
        case REMOVE_STORIES:
            const removeIds = action.storyIds
            const keys = Object.keys(state)
            const keep = {}
            keys.forEach(key => {
                const story = state[key]
                if (removeIds.indexOf(story.story_id) < 0) {
                    keep[story.slug] = story
                }
            })
            return keep
        case UPDATE_STORY:
            const allStories = { ...state
            }
            Object.keys(state).forEach(key => {
                const story = state[key]
                if (story.story_id === action.storyId) {
                    allStories[key] = { ...story,
                        ...(action.data || {})
                    }
                }
            })
            return allStories
        case RESET_ALL_STORIES:
            return {}
        default:
            return state
    }
}

const byUsername = (state = {}, action = {}) => {
    switch (action.type) {
        case ADD_STORIES:
            const stories = { ...state
            }
            action.stories.forEach(story => {
                let {
                    user,
                    group_name,
                    trending_id
                } = story
                if (!user) {
                    log.warn('stories reducer, no user for:', story)
                    user = {}
                }
                const {
                    username: storyUsername
                } = user
                const username = group_name || storyUsername
                const uniqByProp = trending_id ? 'trending_id' : 'story_id'
                if (stories[username]) {
                    stories[username] = uniqBy([...[story], ...stories[username]], story => story[uniqByProp])
                } else {
                    stories[username] = [story]
                }
            })
            return stories
        case REMOVE_STORIES:
            const removeIds = action.storyIds
            const usernames = Object.keys(state)
            const clone = {}
            usernames.forEach(username => {
                const stories = state[username]
                clone[username] = stories.filter(({
                    story_id
                }) => removeIds.indexOf(story_id) < 0)
            })
            return clone
        case RESET_ALL_STORIES:
            return {}
        case UPDATE_STORY:
            const allStories = { ...state
            }
            const allUsernames = Object.keys(allStories)
            allUsernames.forEach(username => {
                allStories[username] = allStories[username].map(story => {
                    if (story.story_id === action.storyId) {
                        return { ...story,
                            ...(action.data || {})
                        }
                    }
                    return story
                })
            })
            return allStories
        default:
            return state
    }
}

const nextPageByUsername = (state = {}, action = {}) => {
    switch (action.type) {
        case PAGINATION:
            const pagination = { ...state
            }
            const {
                username,
                nextUrl
            } = action
            pagination[username] = nextUrl
            return pagination
        default:
            return state
    }
}

const isFetchingStoriesByUrl = (state = {}, action = {}) => {
    switch (action.type) {
        case FETCHING:
            const fetching = { ...state
            }
            const {
                url,
                isFetching
            } = action
            fetching[url] = isFetching
            return fetching
        default:
            return state
    }
}

export const getStoriesByUsername = createCachedSelector(
    (state, username) => state.byUsername[username],
    (state, user, watched) => watched,
    state => {
        return sortStories(state)
    },
)((state, username, watched) => `${username}:${watched}`)

export const getAllStories = createCachedSelector(
    state => state.byId,
    (state, user, watched) => watched,
    state => sortStories(Object.values(state)),
)((state, username, watched) => `${watched}`)

export const getUserStoriesGroupedByDate = createCachedSelector(
    (state, username) => state.byUsername[username],
    (state, username, isReverse) => isReverse,
    (state, isReverse) => {
        return groupByDate(state, isReverse)
    },
)((state, username) => username)

export const getStoryBySlug = (state, slug) => state.bySlug[slug]
export const getStoryById = (state, id) => state.byId[id]

export const getUsernameBySlug = (state, slug) => {
    // get a story by slug so we can get the username
    const story = state.bySlug[slug]
    if (!story) return ''

    const user = story.user

    if (user) {
        const {
            username
        } = user
        return username
    } else {
        return ''
    }
}

export const getAllStoriesByLoadOrder = (state = []) => {
    return state.allIds.map(id => state.byId[id])
}

export const getMoreStoriesBySlug = createCachedSelector(
    (state, slug, watched) => getStoriesByUsername(state, getUsernameBySlug(state, slug), watched),
    (state, slug) => slug,
    (stories, slug) => stories.filter(story => !story.is_private && story.slug !== slug),
)((state, slug, watched) => `${slug}:${watched}`)

export const addStories = stories => ({
    type: ADD_STORIES,
    stories
})

export const setPagination = (username, nextUrl) => ({
    type: PAGINATION,
    username,
    nextUrl
})
export const getPagination = (state, username) => state.nextPageByUsername[username]
export const isFetchingStories = (url, isFetching) => ({
    type: FETCHING,
    url,
    isFetching
})
export const getIsFetchingStories = (state, url) => state.isFetchingStoriesByUrl[url]
export const removeStoriesById = storyIds => ({
    type: REMOVE_STORIES,
    storyIds
})
export const resetAllStories = () => ({
    type: RESET_ALL_STORIES
})
export const updateStoryById = (storyId, data) => ({
    type: UPDATE_STORY,
    storyId,
    data
})

export default combineReducers({
    allIds,
    byId,
    bySlug,
    byUsername,
    nextPageByUsername,
    isFetchingStoriesByUrl,
    updateStoryById,
})