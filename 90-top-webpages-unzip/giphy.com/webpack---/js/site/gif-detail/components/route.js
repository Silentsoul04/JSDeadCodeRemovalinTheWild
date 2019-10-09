import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import GifDetail from '../containers/detail'
import { last } from 'lodash'
import { Helmet } from 'react-helmet'
import getHelmetTitle from './helmet-title'

class GifDetailFromId extends React.PureComponent {
    static propTypes = {
        groupId: PropTypes.string,
    }
    state = {}
    static getDerivedStateFromProps({ location = {} }) {
        const { state = {} } = location
        const { groupId } = state
        if (groupId) {
            // only set it if it exists
            return { locationStateGroupId: groupId }
        }
        return null
    }
    componentDidMount() {
        // when we get here via a route,
        // make sure we're scrolled top
        window.scrollTo(0, 0)
    }
    componentDidUpdate({
        match: {
            params: { id: lastSlug },
        },
    }) {
        const {
            match: {
                params: { id: slug },
            },
        } = this.props
        if (slug !== lastSlug) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        const { locationStateGroupId } = this.state
        const {
            match: {
                params: { id: slug, mode = '' },
            },
            permissions,
            groupId,
            relatedGroupId,
            views,
        } = this.props
        if (!slug) {
            throw 'Unable to parse slug from pathname in gif-detail route'
        }
        const gifId = last(slug.split('-'))
        return (
            <GifDetail
                {...{
                    gifId,
                    permissions,
                    groupId: locationStateGroupId || groupId,
                    relatedGroupId,
                    views,
                    mode: mode.toLowerCase(),
                }}
            />
        )
    }
}

// Can be incorporated into other routes
class GDWithHelmet extends React.Component {
    render() {
        const {
            groupId,
            relatedGroupId,
            permissions,
            pageType,
            views,
            gif,
            search,
            pagination,
            location,
            match,
        } = this.props
        return (
            <Fragment>
                <Helmet>
                    <title>{getHelmetTitle(gif, search, pageType)}</title>
                </Helmet>
                <GifDetailFromId
                    {...{
                        gif,
                        pagination,
                        permissions,
                        groupId,
                        relatedGroupId,
                        views,
                        location,
                        match,
                    }}
                />
            </Fragment>
        )
    }
}

export default GDWithHelmet
