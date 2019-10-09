import appendQuery from 'append-query'
import { API_URL } from 'shared/api'

export const processChannelGifs = json => {
    const { results, next, previous, count } = json
    return {
        gifs: results,
        pagination: {
            next_url: next,
            previous_url: previous,
        },
        search_id: null,
        count: count,
    }
}

export const processDefaultGifs = json => {
    const {
        data: { gifs, pagination, search_id, count, error },
    } = json
    return { gifs, pagination, search_id, count, error }
}

export const processModerationGifs = json => {
    const { results, next, count } = json
    return { gifs: results, count: count, pagination: { next_url: next } }
}

export const processGifById = json => {
    const { data } = json
    return { gifs: [data], count: 1, pagination: { next_url: null } }
}

export const processSearchApiGifs = (json, pingback_id, url) => {
    const {
        data,
        pagination: { count, total_count, offset },
    } = json
    return {
        gifs: data,
        count: total_count,
        pagination: {
            next_url: appendQuery(url, {
                offset: offset + count,
                pingback_id,
            }),
        },
    }
}

export const processTrendingAPIGifs = (json, pingback_id, url, apiKey) => {
    const {
        data,
        pagination: { count, offset },
        meta: { response_id },
    } = json
    const next = appendQuery(`${API_URL}gifs/trending`, {
        api_key: apiKey,
        limit: 100,
        pingback_id: pingback_id,
        offset: offset + count,
    })

    return {
        gifs: data.filter(({ is_sticker }) => !is_sticker),
        count: count,
        pagination: { next_url: next },
        search_id: response_id,
    }
}

export const PROCESSOR_MAP = {
    trending: processTrendingAPIGifs,
}
