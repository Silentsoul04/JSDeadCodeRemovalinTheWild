import { Component } from 'react'
import { TrackJS } from 'trackjs'

// port is defined in dev mode, no tracking there
const shouldReport = location && !location.port && Math.random() <= 0.01 // enable TrackJS for only 1% of traffic
if (shouldReport) {
    // for more configuration options, see https://docs.trackjs.com
    TrackJS.install({
        token: '00a54533935841dea5b9a1d9b7395dd3',
        // segment application for production
        // Application keys are nothing more than a filtering string. Deleting an application from your Dashboard only removes your ability to filter by that application.
        // If you recreate an application with the same key, all of the errors recorded to the key will be filterable again.
        application: location.hostname === 'giphy.com' ? 'production' : '',
        network: { error: false },
        version: window.CURRENT_VERSION,
        window: { promise: false },
        // This is supposed to work, but we're not seeing a dip in page views,
        // only errors
        // enabled: Math.random() <= 0.1
    })
}

export class ErrorBoundary extends Component {
    componentDidCatch(error, errorInfo) {
        if (errorInfo && errorInfo.componentStack) {
            // The component stack is sometimes useful in development mode
            // In production it can be somewhat obfuscated, so feel free to omit this line.
            console.log(errorInfo.componentStack)
        }
        if (shouldReport) {
            TrackJS.track(error)
        }
        this.setState({ error })
    }

    render() {
        return this.props.children
    }
}
