import PropTypes from 'prop-types'
import UserProps from './user'
import ImageProps from './gif-images'

const { string, number, bool, oneOfType, shape } = PropTypes

export default shape({
    bitly_url: string,
    create_datetime: string,
    embed_url: string,
    id: oneOfType([string, number]),
    rating: string,
    slug: string,
    tags_string: string,
    type: string,
    url: string,
    username: string,
    update_datetime: string,

    source_caption: string,
    source_content_url: string,
    source_domain: string,
    source_image_url: string,
    source_post_url: string,
    source_tld: string,

    user: UserProps,
    images: ImageProps,

    is_anonymous: oneOfType([bool, number]),
    is_community: oneOfType([bool, number]),
    is_featured: oneOfType([bool, number]),
    is_hidden: oneOfType([bool, number]),
    is_preserve_size: bool,
    is_realtime: oneOfType([bool, number]),
    is_removed: oneOfType([bool, number]),
    is_sticker: oneOfType([bool, number]),
})
