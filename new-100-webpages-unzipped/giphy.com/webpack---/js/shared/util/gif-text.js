import {
    take,
    without
} from 'lodash'
import {
    withProps
} from 'recompose'
/**
 * GIF Text - Alt Text: Generates alt text for
 * GIF images based on username and tags.
 * @param  {Object} options.user GIF user data.
 * @param  {Array} options.tags List of GIF tags.
 * @return {String}              GIF alt text.
 */
export const getAltText = ({
    user = {},
    tags = [],
    is_sticker = false,
    title = ''
}) => {
    if (title) {
        return title
    }
    const username = user.name || ''
    const filteredTags = take(without(tags, 'transparent'), username ? 4 : 5)
    return `${username} ${filteredTags.join(' ')} ${is_sticker ? 'Sticker' : 'GIF'}`
}

/**
 * GIF Text - Title: Generates a title for a
 * GIF based on tags.
 * @param  {Array} options.tags List of tags.
 * @return {String}             GIF title text
 */
export const getTitle = ({
    user = {},
    tags = [],
    is_sticker = false,
    title = ''
}) => {
    if (title) {
        return title
    }
    const t = `${user.name || without(tags, 'transparent')[0] || 'Animated'} ${is_sticker ? 'Sticker' : 'GIF'}`
    return `${t[0].toUpperCase()}${t.slice(1)}` || null
}

export const addGifTitleAsProp = withProps(props => ({ ...props,
    gifTitle: getTitle(props.gif)
}))