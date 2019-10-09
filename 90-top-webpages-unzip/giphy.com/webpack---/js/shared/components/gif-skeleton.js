import { uniqueId } from 'lodash'

const image = {
    url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=', // 1px black square
    width: 1,
    height: 1,
}
// can't modify this, its used for when images is null
const images = [
    'fixed_width',
    'downsized',
    'fixed_height_small_still',
    'fixed_width_downsampled',
    'downsized_large',
    'original',
    'original_still',
    'fixed_height_still',
    'fixed_width_small',
    'fixed_height_downsampled',
    'looping',
    'downsized_small',
    'fixed_width_small_still',
    'downsized_medium',
    'preview',
    'fixed_height',
    'fixed_width_still',
    'fixed_height_small',
    'downsized_still',
].reduce((acc, key) => {
    acc[key] = image
    return acc
}, {})

// Add other props to gif skeleton?
export default (otherProps = {}) => ({
    bitly_url: '',
    create_datetime: '',
    embed_url: '',
    id: uniqueId(),
    images: { ...images },
    import_datetime: '',
    is_anonymous: false,
    is_community: false,
    is_featured: false,
    is_hidden: false,
    is_indexable: false,
    is_realtime: false,
    is_removed: false,
    is_sticker: false,
    rating: 'g',
    slug: '',
    tags: [],
    trending_datetime: '',
    update_datetime: '',
    username: '',
    ...otherProps,
})
