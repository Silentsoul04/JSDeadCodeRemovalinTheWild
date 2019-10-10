import {
    map,
    isObject,
    each,
    has,
    uniq
} from 'lodash'
import {
    parse
} from 'url'
export const BOOL_PROPS = [
    'is_anonymous',
    'is_community',
    'is_featured',
    'is_hidden',
    'is_indexable',
    'is_preserve_size',
    'is_realtime',
    'is_removed',
    'is_sticker',
]

export const USER_BOOL_PROPS = ['suppress_chrome', 'is_public']

const makeBool = obj => prop => {
    if (has(obj, prop)) {
        obj[prop] = !!obj[prop]
    }
}

export default gif => {
    const newGif = { ...gif
    }
    newGif.id = String(newGif.id)
    newGif.tags = uniq(map(newGif.tags, tag => (isObject(tag) ? tag.text : tag)))
    if (newGif.url) {
        newGif.path = parse(newGif.url).pathname
    } else {
        newGif.path = `/gifs/${newGif.id}`
    }
    each(BOOL_PROPS, makeBool(newGif))
    const user = newGif.user
    if (user) {
        const newUser = { ...user
        }
        each(USER_BOOL_PROPS, makeBool(newUser))
        newGif.user = newUser
    }
    return newGif
}