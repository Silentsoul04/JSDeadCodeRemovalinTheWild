import { omit } from 'lodash'
import { distanceInWordsToNow } from 'date-fns'
import { saveTrendingStory } from 'shared/api'
import { addStories } from 'shared/redux/stories'
import { receivedGifs } from 'shared/redux/gifs'
import { trendingUsername, trendingQueueUsername, getGifActionFromStory, formatStory } from 'shared/redux/fetch-stories'
import { message } from 'shared/redux/message'

export function trendStoryById(storyId, trendingDatetime) {
    return async function(dispatch, getState) {
        const { user = {} } = getState()
        try {
            const response = await saveTrendingStory(storyId, trendingDatetime, user.userToken)
            if (response && response.data) {
                const { data } = response
                const now = new Date()
                const trendDate = new Date(trendingDatetime)
                const story = {
                    ...data.story,
                    ...omit(data, 'story'),
                    is_new: true,
                    group_name: trendDate > now ? trendingQueueUsername : trendingUsername,
                }
                const formattedStory = formatStory(story)
                const trendDateLabel = distanceInWordsToNow(trendDate, { addSuffix: true }).replace(/about /gi, '')
                dispatch(receivedGifs(getGifActionFromStory(story)))
                dispatch(addStories([formattedStory]))
                dispatch(message(`This story is set to trend ${trendDateLabel}!`, 'success'))
                return Promise.resolve()
            }
        } catch (e) {
            dispatch(message('An error occurred while trending this story', 'error'))
            return Promise.reject()
        }
    }
}
