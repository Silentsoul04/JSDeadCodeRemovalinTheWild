import { googleAnalyticsEvent } from 'shared/util/analytics'
import log from 'shared/util/log'

export const CATEGORY = 'Video Player'
export const Actions = {
    hover: 'Hover',
    play: 'Play',
    pause: 'Pause',
    hdOn: 'HD Toggle',
    hdOff: 'SD Toggle',
    scrub: 'Scrubber',
    shareOn: 'Share Sheet On',
    shareOff: 'Share Sheet Off',
    soundOn: 'Sound On',
    soundOff: 'Sound Off',
    fullscreen: 'Full Screen',
    loop: 'Looped',
    ended: 'Ended',
    facebook: 'Facebook Share',
    instagram: 'Instagram Share',
    reddit: 'Reddit Share',
    pinterest: 'Pinterest Share',
    twitter: 'Twitter Share',
}
export const trackEvent = (action, label) => {
    // to avoid refactoring facebook, reddit, pinterest, twitter use those strings
    action = Actions[action] || action
    log.info(`${CATEGORY} GA Event - action: ${action}, label: ${label}`)
    googleAnalyticsEvent({
        category: CATEGORY,
        action,
        label,
    })
}
