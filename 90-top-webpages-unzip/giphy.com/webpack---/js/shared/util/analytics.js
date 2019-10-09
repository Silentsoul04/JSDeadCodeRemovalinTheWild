import { giphyAnalytics } from 'shared/api'
import log from 'shared/util/log'
import normalizePageViewUrl from 'shared/util/normalize-page-view-urls'

const createQuantCastScript = () => {
    const script = document.createElement('script')
    script.id = 'quantcast'
    script.src = '//edge.quantserve.com/quant.js'
    script.async = true
    script.type = 'text/javascript'

    return script
}

const loadQuantcast = () => {
    const newScript = createQuantCastScript()
    const oldScript = document.getElementById('quantcast')

    window._qevents = [] // reset the QC events queue
    window.__qc = undefined // QC's hidden tracking variable that determines whether or not new events can be registered

    // unsetting it means we can dynamically append an infinite scroll PV
    if (oldScript) {
        oldScript.parentNode.removeChild(oldScript)
    }

    window._qevents.push({ qacct: 'p-7A3Yj5VenXEQG' })
    document.body.appendChild(newScript)
}

export function trackPageView(trackingUrl) {
    if (!trackingUrl || !window.dataLayer) return

    trackingUrl = normalizePageViewUrl(trackingUrl)
    if (trackingUrl) {
        loadQuantcast()

        log.debug(`trackPageView virtualPageURL: ${trackingUrl}`)

        // analytics
        window.dataLayer.push({
            event: 'VirtualPageview',
            virtualPageURL: trackingUrl,
            virtualPageName: trackingUrl,
        })
    }
}

export const initGoogleAnalytics = () => {
    if (window.gaCreated) return

    window.ga('create', 'UA-38174542-1', 'auto')
    window.gaCreated = true

    const { dataLayer = [] } = window
    const [firstDataLayer = {}] = dataLayer
    if (firstDataLayer.loggedInStatus === 'true') {
        window.ga('set', 'userId', firstDataLayer.userID)
    }
}

export const setGTADataLayer = ({ dimension, value }) => {
    // all subsequent page views will have our custom dimension
    const event = {
        [dimension]: value,
    }
    log.info('dataLayer.push', event)
    window.dataLayer.push(event)
}

export const googleAnalyticsEvent = ({ category, action, label }) => {
    initGoogleAnalytics()
    log.debug(`googleAnalyticsEvent category: ${category} action: ${action} label: ${label}`)
    window.ga('send', 'event', category, action, label)
}

export const giphyAnalyticsEvent = async ({ shareType, gifId }) => {
    try {
        await giphyAnalytics(shareType, gifId)
    } catch (e) {
        log.error(`Error sending giphyAnalyticsEvent ${e}`)
    }
}

export default {
    trackPageView,
    initGoogleAnalytics,
    googleAnalyticsEvent,
}
