import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import React from 'react'
import { trackPageView } from 'shared/util/analytics'
import log from 'shared/util/log'
import withRouter from 'react-router-dom/withRouter'
import { debounce } from 'core-decorators'

@withRouter
export default class Report extends React.Component {
    componentDidUpdate() {
        this.trackPageView()
    }
    @debounce(500)
    trackPageView() {
        const {
            location: { pathname },
        } = this.props
        log.info('route change, report:', pathname)
        trackPageView(pathname)
    }
    render() {
        return null
    }
}
