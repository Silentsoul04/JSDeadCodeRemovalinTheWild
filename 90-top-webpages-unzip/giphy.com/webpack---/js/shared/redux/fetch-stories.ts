import { receivedGifs } from 'shared/redux/gifs'
import { addStories, isFetchingStories, removeStoriesById, resetAllStories, setPagination } from 'shared/redux/stories'
import { StoryResult, IStory } from 'shared/types/story'
import log from 'shared/util/log'
import uuid from 'uuid/v1'
import {
    deleteStory,
    getArtistAndPartnerStories,
    getStoriesByUrl,
    getStory,
    getStoryById,
    getTrendingStories,
    getUserStories,
} from '../api'
import { getStoryFetchingByUrl, getStoryPaginationUrl } from './reducers'

export const trendingUsername = 'trending'
export const trendingQueueUsername = 'trendingqueue'
export const curationStationUsername = 'curationstation'

const USERNAME_OVERRIDES = [trendingUsername, trendingQueueUsername, curationStationUsername]

export const createCardFromGif = gif => ({
    gif,
    caption: '',
    story_gif_id: uuid(),
})

export const formatColors = ({ color, secondary_color }) => ({
    color: color.indexOf('#') > -1 ? color : `#${color}`,
    secondary_color: secondary_color.indexOf('#') > -1 ? secondary_color : `#${secondary_color}`,
})

export const formatStory = (story, ignoreGifs = false) => {
    if (!story) return
    const { gifs, publish_datetime, create_datetime, trending_publish_datetime, trending_create_datetime } = story
    const formatted = { ...story, ...formatColors(story) }
    formatted.cards = ignoreGifs ? [] : formatCards(gifs)
    formatted.gifs = null
    formatted.publish_datetime = trending_publish_datetime || publish_datetime
    formatted.create_datetime = trending_create_datetime || create_datetime
    return formatted
}

export const getGifActionFromStory = (story: IStory) => {
    if (!story) return

    const { gifs: cards, story_id: storyId } = story
    const gifs = cards.map(card => {
        return card.gif
    })
    return {
        gifs,
        groupId: storyId,
    }
}

const formatCards = (cards = []) =>
    cards.map(card => {
        // remove gif from card to avoid data redundancy
        const {
            caption,
            index,
            gif: { id: gifId },
            story_gif_id,
        } = card
        return {
            caption,
            index,
            gifId,
            story_gif_id,
        }
    })

const dispatchStories = (dispatch, stories, username, ignoreGifs = false) => {
    const { data, pagination = {} } = stories
    const isUsernameOverride = USERNAME_OVERRIDES.indexOf(username) > -1
    const storiesData = data.map(story => ({ ...story, group_name: isUsernameOverride ? username : null }))
    dispatch(setPagination(username, pagination.next_page || ''))
    if (!ignoreGifs) {
        storiesData.forEach(story => dispatch(receivedGifs(getGifActionFromStory(story) as any))) // TODO update receivedGifs to ts
    }
    dispatch(addStories(storiesData.map(story => formatStory(story, ignoreGifs))))
}

export function fetchTrendingStories(isTrendingQueue = false) {
    return async (dispatch, getState) => {
        const { user = {} } = getState()
        const stories = await getTrendingStories(user.userToken, isTrendingQueue ? 'asc' : 'desc')
        if (stories) {
            dispatchStories(dispatch, stories, isTrendingQueue ? trendingQueueUsername : trendingUsername)
        }
        return stories
    }
}

export function fetchCurationStories(since, until) {
    return async (dispatch, getState) => {
        const { user = {} } = getState()
        dispatch(resetAllStories())
        const stories = await getArtistAndPartnerStories(user.userToken, since, until)
        if (stories) {
            dispatchStories(dispatch, stories, curationStationUsername, true)
        }
        return stories
    }
}
export const getUsernameFromStories = (stories: StoryResult) => {
    if (stories) {
        const { data = [] } = stories
        const [first] = data
        if (first && first.user) {
            // username can now have a different casing, update the state
            return first.user.username
        }
    }
    throw new Error('getUsernameFromStories, no username')
}

export function fetchUserStories(
    username: string,
    showUnpublished = false,
    fetchCoverOnly = false,
    limit?: number,
    cursor?: string
) {
    return async (dispatch, getState) => {
        const { user = {} } = getState()
        const stories = await getUserStories(username, user.userToken, {
            showUnpublished,
            fetchCoverOnly,
            limit,
            cursor,
        })
        if (stories && stories.data && stories.data.length > 0) {
            // we can't really know when we're at the end since cursor and total_count don't work
            // as expected
            dispatchStories(dispatch, stories, getUsernameFromStories(stories), fetchCoverOnly)
        }
        return stories
    }
}

export function fetchMoreStories(username, ignoreGifs = false) {
    return async (dispatch, getState) => {
        const { user = {}, ...state } = getState()
        const nextPage = getStoryPaginationUrl(state, username)
        if (!nextPage) {
            log.info(`fetch-stories: We've reached the end for ${username}`)
            return
        }
        if (getStoryFetchingByUrl(state, nextPage)) {
            log.warn(`fetch-stories: Already fetching ${nextPage}`)
            return
        }
        dispatch(isFetchingStories(nextPage, true))
        const stories = await getStoriesByUrl(nextPage, user.userToken)
        if (stories) {
            dispatchStories(dispatch, stories, username, ignoreGifs)
        } else {
            dispatch(setPagination(username, ''))
        }
        dispatch(isFetchingStories(nextPage, false))
        return stories
    }
}

export function fetchStoryById(id) {
    return async (dispatch, getState) => {
        const { user = {} } = getState()
        const story = await getStoryById(id, user.userToken)
        if (story) {
            dispatch(receivedGifs(getGifActionFromStory(story.data) as any))
            dispatch(addStories([formatStory(story.data)]))
        }
        return story
    }
}

export function fetchStoryBySlug(slug, shouldFetchMoreStories = false) {
    return async (dispatch, getState) => {
        const { user = {} } = getState()
        const story = await getStory(slug, user.userToken)
        if (story) {
            dispatch(receivedGifs(getGifActionFromStory(story.data) as any))
            dispatch(addStories([formatStory(story.data)]))
            if (shouldFetchMoreStories) {
                const { user } = story.data
                if (user) {
                    dispatch(fetchUserStories(user.username))
                }
            }
        }
        return story
    }
}

export function deleteStoryById(id) {
    return (dispatch, getState) => {
        const { user = {} } = getState()
        return deleteStory(id, user.userToken)
            .then(() => {
                dispatch(removeStoriesById([id]))
            })
            .catch(() => {
                // @ts-ignore
                global.showError('There was an issue deleting your story')
            })
    }
}
