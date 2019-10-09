import PropTypes from 'prop-types'
import { PureComponent, lazy } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { capitalize, isNumber } from 'lodash'
import gifProps from 'shared/prop-types/gif'
import Gif from './gif'
import Embed from './embed'
import Links from './links'
import GifButtons from './sharing/buttons'
import SocialButtons from './sharing/social'
import NextPrev from './view/next-prev'
import { fitGifToSize } from 'shared/util/sizing'
import log from 'shared/util/log'
import getViewCountDisplay from 'shared/util/view-count-formatter'
import * as selectors from 'shared/redux/reducers'

const Media = lazy(() => import(/* webpackChunkName: "gifDetailMedia" */ './media'))

import css, { gifWidth as gifWidthPx, gifHeight as gifHeightPx } from './index.css'
import { fetchGifDetailViewCount } from 'shared/api/index'
import { Actions, trackEvent } from 'shared/util/gif-detail-ga-events'

const { object } = PropTypes
const gifWidth = parseInt(gifWidthPx),
    gifHeight = parseInt(gifHeightPx)

const gaEventMode = {
    embed: Actions.copyEmbed,
    media: Actions.copyMedia,
    links: Actions.copyLink,
}

const getOverlayMode = mode => {
    switch (mode) {
        case 'embed':
            return Embed
        case 'media':
            return Media
        case 'links':
            return Links
        default:
    }
}

@withRouter
@connect((state, { gifId, groupId }) => ({
    gif: selectors.getGifById(state, gifId, groupId),
    permissions: selectors.getUserPermissions(state),
    prevGif: selectors.getPrevGif(state, gifId, groupId),
    nextGif: selectors.getNextGif(state, gifId, groupId),
}))
/**
 * GIF Detail - GIF: Controls the GIF image and
 * rollover state. Also control the tile/fullscreen
 * buttons and tv popout.
 *
 * @class GifDetailGif
 */
export default class GifDetailGif extends PureComponent {
    state = { viewCount: 0 }
    static propTypes = {
        gif: gifProps.isRequired,
        prevGif: gifProps,
        nextGif: gifProps,
        user: object,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gif.id !== this.props.gif.id) {
            this.setState({ viewCount: 0 })
            this.fetchAnalytics(nextProps.gif.id)
        }
    }

    componentDidUpdate(prevProps) {
        const {
            match: {
                params: { mode },
            },
            gif: { id },
        } = this.props
        const action = gaEventMode[mode]
        if (action && mode !== prevProps.mode) {
            trackEvent(action, id)
        }
    }

    componentDidMount() {
        const {
            gif: { id },
        } = this.props
        this.fetchAnalytics(id)
    }
    onCloseOverlay() {
        const {
            gif: { path },
            history: { replace },
        } = this.props
        replace(path)
    }
    async fetchAnalytics(id) {
        try {
            const { viewCount } = await fetchGifDetailViewCount(id)
            this.setState({ viewCount })
        } catch (e) {
            log.error(e)
        }
    }
    render() {
        const {
            gif,
            nextGif,
            prevGif,
            permissions,
            match: {
                params: { mode },
            },
        } = this.props
        const { viewCount } = this.state
        const gifSize = {
            ...fitGifToSize(gif, gifWidth, gifHeight),
            left: 0,
            top: 0,
        }
        const isFullscreen = mode === 'fullscreen'
        const Overlay = getOverlayMode(mode)
        return (
            <div className={gif.is_hidden ? css.containerPrivate : css.container}>
                <div className={isFullscreen ? css.contentWrapperFullscreen : css.contentWrapper}>
                    <div className={css.content}>
                        {Overlay ? (
                            <div className={css.overlay} style={{ minHeight: gifSize.height }}>
                                <div className={css.overlayHeader}>
                                    <span>{mode === 'embed' ? 'GIPHY Embed Player' : capitalize(mode)}</span>
                                    <i className={css.closeButton} onClick={() => this.onCloseOverlay()} />
                                </div>
                                {Overlay && <Overlay gif={gif} permissions={permissions} />}
                            </div>
                        ) : (
                            <Gif
                                {...{
                                    gif,
                                    gifSize,
                                    viewCount,
                                    isHidden: mode === 'tile',
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className={css.navigation}>
                    <div className={css.header}>
                        <div className={css.pagination}>
                            <NextPrev className={css.previousButton} gif={prevGif} gaAction={Actions.previousClick} />
                            <NextPrev className={css.nextButton} gif={nextGif} gaAction={Actions.nextClick} />
                        </div>
                    </div>
                    <GifButtons gif={gif} />
                    <SocialButtons gif={gif} />
                    {isNumber(viewCount) && viewCount > 1000 && (
                        <div className={css.viewCount}>{getViewCountDisplay(viewCount)}</div>
                    )}
                </div>
            </div>
        )
    }
}
