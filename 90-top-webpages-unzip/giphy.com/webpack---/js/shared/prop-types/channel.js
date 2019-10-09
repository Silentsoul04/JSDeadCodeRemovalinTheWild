import PropTypes from 'prop-types'
import gifProps from './gif'

const { array, string, number, bool, oneOfType, shape, object } = PropTypes

export default shape({
    id: oneOfType([string, number]),
    url: string,
    user: oneOfType([array, object]),
    slug: string,
    display_name: string,
    short_display_name: string,
    banner_image_url: string,
    avatar_image_url: string,
    featured_gif: gifProps,
    screensaver_gif: gifProps,
    description: string,
    metadata_description: string,
    website: string,
    website_url: string,
    facebook_url: string,
    twitter_url: string,
    instagram_url: string,
    pinterest_url: string,
    tumblr_url: string,
    is_private: bool,
    breadcrumbs: array,
    hasChildren: bool,
    is_event: bool,
    is_live: bool,
})
