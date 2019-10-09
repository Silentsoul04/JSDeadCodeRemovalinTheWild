import { googleAnalyticsEvent } from 'shared/util/analytics'
import log from 'shared/util/log'

export const CATEGORY = 'GIF Detail'
export const Actions = {
    shareClick: 'Share Click',
    ellipsisClick: 'Ellipsis Click',
    copyLink: 'Link Click',
    copyMedia: 'Media Click',
    copyEmbed: 'Embed Click',
    drag: 'Drag To Save',
    tag: 'Tag Click',
    rightClick: 'Image Right Click',
    relatedClick: 'Related Click',
    reactionClick: 'Reaction Click',
    reactionChange: 'Reaction Change',
    attributionClick: 'Attribution Click',
    sourceClick: 'Source Click',
    nextClick: 'Next Click',
    previousClick: 'Previous Click',
    favorite: 'Favorite',
    relatedFavorite: 'Related Favorite',
}
export const trackEvent = (action, label) => {
    // to avoid refactoring facebook, reddit, pinterest, twitter use those strings
    action = Actions[action] || action
    log.debug(`${CATEGORY} GA Event - action: ${action}, label: ${label}`)
    googleAnalyticsEvent({
        category: CATEGORY,
        action,
        label,
    })
}
