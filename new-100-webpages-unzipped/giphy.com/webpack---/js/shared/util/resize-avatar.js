const SIZES = {
    large: '200h',
    medium: '80h',
    small: '36h',
}

const replaceUrl = (url, size) => {
    const ext = url.split('.').pop()
    return url.replace(`.${ext}`, `/${size}.${ext}`)
}

export default function(avatarUrl = '', targetSize) {
    if (!targetSize) return avatarUrl

    if (targetSize <= 36) {
        return replaceUrl(avatarUrl, SIZES.small)
    }

    if (targetSize <= 80) {
        return replaceUrl(avatarUrl, SIZES.medium)
    }

    return replaceUrl(avatarUrl, SIZES.large)
}