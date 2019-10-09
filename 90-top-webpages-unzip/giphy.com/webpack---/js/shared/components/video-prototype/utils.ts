import {
    giphyDarkGrey,
    giphyAqua,
    giphyPurple,
    giphyIndigo,
    giphyLightBlue,
    giphyRed,
    giphyPink,
} from '@giphy/js-brand'
import appendQuery from 'append-query'
import { getResults, WEB_API_KEY } from 'shared/api'
import { IVideoGif, IVideoData } from './types'

export const categories = ['Celebrities', 'News', 'TV', 'Sports', 'Music', 'Movies']

export const getCategoryColor = (category: string = '') => {
    const categoriesRaw = categories.map(cat => cat.toLowerCase())
    const colors = [giphyPurple, giphyIndigo, giphyAqua, giphyLightBlue, giphyRed, giphyPink]
    return colors[categoriesRaw.indexOf(category.toLowerCase())] || giphyDarkGrey
}

export const getCategoryFromGif = ({ tags = [] }: IVideoGif): string => {
    const prefix = 'giphyvideo'
    if (tags.length) {
        const categoriesRaw = categories.map(cat => cat.toLowerCase())
        const gifCategories = tags.filter(tag => {
            if (tag.indexOf('giphyvideo') > -1) {
                const categoryTag = tag.replace(prefix, '')
                return categoriesRaw.indexOf(categoryTag) > -1
            }
            return false
        })
        return gifCategories.length ? gifCategories[0].replace(prefix, '') : ''
    }
    return ''
}

export const trendingFetchUrl = (offset: number, category?: string): string => {
    const trendingTag = 'giphytrendingvideo'
    const params = {
        query: category ? [trendingTag, `giphyvideo${category.toLowerCase()}`].join(',') : trendingTag,
        limit: 25,
        apiKey: WEB_API_KEY,
        offset,
    }
    return appendQuery('/api/v1/search-service/search/', params, { encodeComponents: false })
}

export const fetchTrendingVideos = (offset: number, category?: string) => getResults(trendingFetchUrl(offset, category))

export const getVideoTitle = ({ user, title }: IVideoGif): string => {
    const username = user ? user.username : ''
    const videoTitle = (title || '').replace('GIF', '').trim()
    if (videoTitle && videoTitle.toLowerCase() !== username.toLowerCase()) {
        return videoTitle
    }
    return 'Untitled'
}

export const mapGifPropsToVideo = (gif: IVideoGif): IVideoData => {
    const {
        id,
        user,
        rating,
        tags,
        images: { fixed_height, source, original },
    } = gif
    return {
        id,
        user,
        rating,
        tags,
        uid: id,
        title: getVideoTitle(gif),
        description: '',
        source_url: '',
        duration: 0,
        url: `${window.location.origin}/videos/${id}`,
        media: {
            assets: [
                {
                    width: parseInt(String(source.width)),
                    height: parseInt(String(source.height)),
                    file_size: source.size,
                    bit_rate: '',
                    url: source.url.indexOf('.mp4') > -1 || source.url.indexOf('.mov') > -1 ? source.url : original.mp4,
                    is_source: false,
                    format: 'mp4',
                    duration: 0,
                    frame_rate: 29.970029830932617,
                    has_audio: true,
                },
            ],
            previews: [
                {
                    format: 'gif',
                    width: parseInt(String(fixed_height.width)),
                    height: parseInt(String(fixed_height.height)),
                    url: fixed_height.url,
                    file_size: fixed_height.size,
                },
            ],
        },
    }
}
