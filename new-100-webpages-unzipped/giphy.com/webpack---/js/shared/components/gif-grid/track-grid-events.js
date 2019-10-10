import withProps from 'recompose/withProps'
import {
    initGoogleAnalytics,
    googleAnalyticsEvent
} from 'shared/util/analytics'

/**
 * Only rerender on the below changes
 * @param {Array} events Used to pass multiple event objects - each of which requires an
 *     event {string} (which will be used as the prop name) &
 *     gaData {object} (which sets the category, action & label of the GA event)
 */

export default events => {
    return withProps(() => {
        const newProps = {}
        events.forEach(
            ({
                gaData,
                event
            }) =>
            (newProps[event] = () => {
                trackEvent(gaData)
            }),
        )
        return newProps
    })
}

export const trackEvent = gaData => {
    initGoogleAnalytics()
    googleAnalyticsEvent(gaData)
}