import { parse } from 'url'
import log from 'shared/util/log'

// /gifs/1234abcd/related/2
const gifDetailPagination = /\/gifs\/(\w*)\/related\/(\w*)/i
// /search/cats/2
const searchPagination = /\/search\/(\w*)\/(\w*)/i
// /api/v1/channels/4193/gifs/?is=1&json=true&page=2
const channelGifs = /\/api\/v1\/channels\/(\w*)\/gifs\//i
// /api/v1/channels/681/search/?is=1&json=true&page=2&q=happy&tagged=false
const channelSearch = /\/api\/v1\/channels\/(\w*)\/search\/\S*q=(\w+)\S*/i
// /search/giphytrending-stickers/2
const gifMakerStickerPagination = /\/search\/giphytrending-stickers\/(\w*)/i
// /search/howdy-stickers
// /search/howdy-stickers/2
const gifMakerStickerSearch = /\/search\/(\w*)-stickers(\/)*(\w*)/i

const normalizePageViewUrl = (url: string): string => {
    const { path, query } = parse(url, true)
    if (path) {
        let match = gifDetailPagination.exec(path)
        if (match) {
            const [, id, page] = match
            return `/gifs/${id}/related/page/${page}`
        }
        match = gifMakerStickerPagination.exec(path)
        if (match) {
            const [, page] = match
            return `/create/gifmaker/decorate/stickers/page/${page}`
        }
        match = gifMakerStickerSearch.exec(path)
        if (match) {
            const [, term, , page] = match
            const pageSuffix = page ? `/page/${page}` : ''
            return `/create/gifmaker/decorate/stickers/search/${term}${pageSuffix}`
        }
        match = searchPagination.exec(path)
        if (match) {
            const [, term, page] = match
            return `/search/${term}/page/${page}`
        }
        match = channelGifs.exec(path)
        if (match) {
            const [, id] = match
            const { page } = query
            // copied from analytics.js
            // if page doesn't exist we abort the reporting
            // we should pass report false to the first fetch to be explicit
            return page ? `/channels/${id}/page/${page}` : ''
        }
        match = channelSearch.exec(path)
        if (match) {
            const [, id, term] = match
            const { page } = query
            return page ? `/channel/${id}/search/${term}/page/${page}` : `/channel/${id}/search/${term}`
        }
        return path
    }
    log.warn(`Unparseable url for page view analytics: ${url}`)
    return url
}

export default normalizePageViewUrl
