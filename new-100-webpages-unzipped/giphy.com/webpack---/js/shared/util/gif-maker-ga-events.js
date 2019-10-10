import {
    googleAnalyticsEvent
} from 'shared/util/analytics'
import {
    getMediaType
} from './gif-maker-util'
import {
    startCase
} from 'lodash'
import log from 'shared/util/log'
import routes from 'shared/routes'
import {
    matchPath
} from 'react-router'

const getCategory = pathname => (matchPath(pathname, routes.UPLOAD) ? 'Upload' : 'GIF Maker')

export const trackEvent = (action, label) => {
    const category = getCategory(location.pathname)
    // captialize every first letter for consistency, e.g. 'Draw Options'
    // capitals still sneak through, e.g. 'Media URL' would keep URL's uppercasing
    action = startCase(action)
    label = startCase(label)
    log.info(`${category} GA Event - action: ${action}, label: ${label}`)
    googleAnalyticsEvent({
        category,
        action,
        label,
    })
}

export const trackUrls = (files, action = 'Input') =>
    files.forEach(({
        urlType
    }) => {
        if (urlType) trackEvent(action, urlType)
    })

export const trackFileList = files => files.forEach(file => trackMediaType(getMediaType(file)))

export const trackMediaType = type => {
    let label = ''

    switch (type) {
        case 'gif':
            label = 'GIF'
            break
        case 'image':
            label = 'Still'
            break
        case 'video':
            label = 'Video'
            break
    }

    trackEvent('Media Type', label)
}

export const trackDecoration = type => {
    trackEvent('Decorate Button', type)
}

export const trackDrawOption = option => {
    trackEvent('Draw Options', option)
}

export const trackStickerCategory = category => {
    trackEvent('Sticker Categories', category)
}

export const trackStickerSearch = search => {
    trackEvent('Sticker Search', search)
}

export const trackCreateOptions = option => {
    trackEvent('Create Options', option)
}

export default {
    trackEvent,
    trackMediaType,
    trackDecoration,
    trackDrawOption,
    trackStickerCategory,
    trackStickerSearch,
    trackCreateOptions,
}