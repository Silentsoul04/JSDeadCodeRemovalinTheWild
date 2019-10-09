// convert a url to relative
export const relativeUrl = url => `/${url.replace(/^(?:\/\/|[^\/]+)*\//, '')}`

export const removeProtocol = (url, pretty = false) => `${pretty ? '' : '//'}${url.replace(/.*?:\/\//g, '')}`

export const addProtocol = (url, type = 'http') => (url.match(/^(http|https):\/\//) ? url : `${type}://${url}`)

export const getSlug = url => {
    const trimmed = url.replace(/\/$/, '')
    const bits = trimmed.split('/')
    return bits[bits.length - 1]
}

export const getGifId = url => {
    const isFile =
        url
            .split('/')
            .pop()
            .indexOf('.') > -1
    const slashes = url.split('/')
    const gifId = isFile
        ? slashes[slashes.length - 2]
        : slashes
              .pop()
              .split('-')
              .pop()

    return gifId || ''
}

export default {
    relativeUrl,
    removeProtocol,
    addProtocol,
    getGifId,
}
