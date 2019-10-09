export const getSearchPath = (term = '', isSticker = false) =>
    `/search/${termValidation(term)}${isSticker ? '-stickers' : ''}`

export const getExplorePath = (term = '', isSticker = false) => {
    if (isSticker) {
        return getSearchPath(term, isSticker)
    }
    return `/explore/${termValidation(term)}`
}

export const getChannelSocialSearchPath = (term = '', isSticker = false, channelName) =>
    `/search/${channelName}-${termValidation(term)}${isSticker ? '-stickers' : ''}`

export const getChannelsSearchPath = (term = '', channelId, isFeaturedTag = false) =>
    `/api/v1/channels/${channelId}/search/?q=${encodeURIComponent(term)}&tagged=${isFeaturedTag}`

export const termValidation = term =>
    `${term
        .replace(/[^\w\s-@]+/g, '')
        .replace(/\s\s+/g, ' ')
        .trim()
        .replace(/ /g, '-')}`

// Compose the search title based on the count of GIFs
export const getSearchTitle = (total, contentType = 'gif', isTagView = false) => {
    if (isNaN(total)) return ``
    const fileType = contentType.toLowerCase() === 'sticker' ? 'Sticker' : 'GIF'
    const gifLabel = total === 1 ? fileType : `${fileType}s`
    return isTagView ? gifLabel : `${total} ${gifLabel} found for`
}
