import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { PureComponent } from 'react'
import { getAltText } from 'shared/util/gif-text'

import withPropsOnChange from 'recompose/withPropsOnChange'
import setPropTypes from 'recompose/setPropTypes'
import gifProps from 'shared/prop-types/gif'
import preload, {
    cancel as cancelImagePreload,
    pause as pausePreload,
    resume as resumePreload,
} from 'shared/util/gif-preload'
import { trackEvent, Actions } from '../../util/gif-detail-ga-events'

const STILL_PRIORITY = -1, // Negative priority indexes load one at a time, still will load
    ANIMATED_PRIORITY = -2, // Then the gif will load, then related gifs
    DRAG_GIF_PRIORITY = 0, // Then drag gif will load first but other gifs will load while it loads
    PRELOAD_PAUSE_ID = 'gif-detail-image'

const { string, object, bool, element } = PropTypes

@setPropTypes({
    gif: gifProps.isRequired,
    noVideo: bool,
})
@withPropsOnChange(['gif', 'noVideo'], ({ gif, noVideo }) => ({
    alt: getAltText(gif),
    gifId: gif.id,
    noVideo: gif.is_sticker || noVideo,
}))
export default class Gif extends PureComponent {
    static propTypes = {
        stillUrl: string.isRequired,
        gifUrl: string.isRequired,
        videoUrl: string.isRequired,
        style: object,
        gifId: string.isRequired,
        preloader: element,
    }
    state = {
        hasStill: false,
        useGif: false,
    }
    loadGif() {
        preload(
            this.props.gifUrl,
            () => {
                this.setState({ useGif: true })
            },
            true,
            ANIMATED_PRIORITY,
        )
        resumePreload(PRELOAD_PAUSE_ID)
    }
    loadDragGif() {
        preload(
            this.props.gifUrl,
            () => {
                this.setState({ hasDragGif: true })
            },
            true,
            DRAG_GIF_PRIORITY,
        )
    }
    loadStill({ stillUrl, noVideo }) {
        // load the still with a higher priority than the animated, so it loads first
        preload(
            stillUrl,
            () => {
                this.setState({ hasStill: true })
                if (!noVideo) {
                    pausePreload(PRELOAD_PAUSE_ID)
                }
            },
            true,
            STILL_PRIORITY,
        )
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.gifId !== nextProps.gifId) {
            // we no longer have a still for the new gif
            this.setState({ hasStill: false })
            // cancel the still and animated if we requested it
            this.cancelImages(this.props)
            // request the new still
            this.loadStill(nextProps)
            // unpause the queue
            resumePreload(PRELOAD_PAUSE_ID)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        clearTimeout(this.trackDragTimeout)
        const { isDraggingGif } = this.state
        if (isDraggingGif && !prevState.isDraggingGif) {
            const { gifId } = this.props
            // isDraggingGif is set on mouse down, which
            // also fires for the context menu,
            // so we need a timeout
            this.trackDragTimeout = setTimeout(() => {
                const { isDraggingGif } = this.state
                if (isDraggingGif) {
                    trackEvent(Actions.drag, gifId)
                }
            }, 100)
        }
    }

    cancelImages({ gifUrl, stillUrl }) {
        // if requests were pending, we'll remove them from the queue
        cancelImagePreload(stillUrl)
        cancelImagePreload(gifUrl)
    }
    onVideoPlay() {
        this.loadDragGif()
        resumePreload(PRELOAD_PAUSE_ID)
    }
    componentWillMount() {
        resumePreload(PRELOAD_PAUSE_ID)
        // get the still right away
        this.loadStill(this.props)
    }
    componentWillUnmount() {
        this.cancelImages(this.props)
        resumePreload(PRELOAD_PAUSE_ID)
        clearTimeout(this.trackDragTimeout)
    }
    getElement() {
        const { style, alt, gifId: key, gifUrl, stillUrl, videoUrl, noVideo } = this.props
        const { useGif, hasDragGif, isDraggingGif } = this.state

        const dragGifStyle = { ...style, ...{ opacity: isDraggingGif ? 1 : 0 } }

        if (useGif) {
            // we've loaded the gif either because noVideo is true,
            // or there was an error with the video
            resumePreload(PRELOAD_PAUSE_ID)
            return <img {...{ src: gifUrl, style, alt, key }} />
        }

        if (noVideo) {
            // show the still and load the animated
            this.loadGif()
            return <img {...{ src: stillUrl, style, alt, key }} />
        }

        return (
            <div key={key}>
                <video
                    {...{ style, alt }}
                    src={videoUrl}
                    poster={stillUrl}
                    onPlay={() => this.onVideoPlay()}
                    onError={() => this.loadGif()}
                    onAbort={() => this.loadGif()}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {hasDragGif && (
                    <img
                        onMouseDown={() => this.setState({ isDraggingGif: true })}
                        onDragEnd={() => this.setState({ isDraggingGif: false })}
                        onMouseUp={() => this.setState({ isDraggingGif: false })}
                        onContextMenu={() => trackEvent(Actions.rightClick, key)}
                        {...{ src: gifUrl, alt, style: dragGifStyle }}
                    />
                )}
            </div>
        )
    }
    render() {
        const { hasStill } = this.state
        const { preloader } = this.props
        return hasStill ? this.getElement() : preloader
    }
}
