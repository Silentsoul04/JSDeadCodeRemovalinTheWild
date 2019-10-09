import { withContext } from 'recompose'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { autobind } from 'core-decorators'
import css from './gif-detail.css'
import gifShape from 'shared/prop-types/gif'
import Lock from 'shared/components/icons/lock'
import Primary from './primary/primary'
import RelatedGrid from './related/related'
import Carousel from 'shared/components/gif-carousel'
import { trackEvent, Actions } from 'shared/util/gif-detail-ga-events'
import Overlays from './overlays'
import InfoOverlay from './info'
import { withGifDetailContextManager } from './gif-detail-context'

const { bool, func } = PropTypes

@withContext({ isOffScreen: PropTypes.bool }, ({ isOffScreen }) => ({
    isOffScreen,
}))
@withGifDetailContextManager
/**
 * The GifDetail component, rendering a single gif, its share
 * buttons, tags, and related gifs.
 * When loaded it creates sibling GifDetails, but that should be
 * managed by a parent component using state.
 */
export default class GifDetail extends PureComponent {
    static propTypes = {
        isOffScreen: bool.isRequired,
        toggleFavorite: func.isRequired,
        gif: gifShape.isRequired,
        nextGif: gifShape,
        previousGif: gifShape,
        isFavorite: bool.isRequired,
        setIsMetaVisible: func.isRequired,
        onGifChange: func.isRequired,
    }
    shouldAnimateFavorites = false
    // used only to prevent gif tap event while swiping
    isSwiping = false
    state = {
        swipeProgress: 0,
    }
    componentWillMount() {
        const {
            gif: { user, id, tags = [] },
            setIsMetaVisible,
        } = this.props
        setIsMetaVisible({ id, isVisible: !user || tags.indexOf('ad') > -1 })
    }
    componentWillUnmount() {
        clearInterval(this.doneCopyingTimout)
    }
    componentDidMount() {
        const { isOffScreen } = this.props

        if (!isOffScreen) {
            window.scrollTo(0, 0)
        }
    }
    componentDidUpdate(prevProps) {
        const { gif, isOffScreen, isFavorite } = this.props

        if (gif.id !== prevProps.gif.id || (prevProps.isOffScreen !== isOffScreen && !isOffScreen)) {
            window.scrollTo(0, 0)
        }

        if (isFavorite !== prevProps.isFavorite) {
            this.shouldAnimateFavorites = false
        }
    }
    @autobind
    onDoubleTap() {
        this.shouldAnimateFavorites = true
        const {
            gif: { id },
            toggleFavorite,
        } = this.props
        toggleFavorite(id)
    }
    @autobind
    onSwipe(gif, isPrevious) {
        const {
            onGifChange,
            gif: { id },
        } = this.props
        trackEvent(isPrevious ? Actions.previousClick : Actions.nextClick, id)
        onGifChange(gif)
    }
    render() {
        const { gif, isPrivate, isOffScreen, appWidth, appHeight, nextGif, previousGif } = this.props
        const { swipeProgress } = this.state
        const { is_sticker: isSticker, is_hidden, slug, url } = gif
        const peekGif = Math.abs(swipeProgress) ? (swipeProgress < 0 ? nextGif : previousGif) : null
        const shareRendition = 'original'
        return (
            <div>
                <div className={isSticker ? css.sticker : css.media}>
                    <Carousel
                        currentGif={gif}
                        previousGif={previousGif}
                        nextGif={nextGif}
                        width={appWidth}
                        height={appHeight - 150} // fill screen with room for header + attribution
                        onProgress={swipeProgress => this.setState({ swipeProgress })}
                        onComplete={this.onSwipe}
                        onDoubleTap={this.onDoubleTap}
                    >
                        <InfoOverlay gif={gif} rendition={shareRendition} isShareLauncher />
                    </Carousel>
                </div>
                {!isPrivate && (
                    <>
                        <GifHidden is_hidden={is_hidden} />
                        <Primary gif={gif} nextGif={peekGif} swipeProgress={swipeProgress} />
                    </>
                )}
                {!isOffScreen && <RelatedGrid {...{ gif, isPrivate }} />}
                <Overlays gif={gif} slug={slug} url={url} rendition={shareRendition} />
            </div>
        )
    }
}

const GifHidden = ({ is_hidden }) =>
    is_hidden ? (
        <div className="private-gif">
            <Lock fill="white" width={27} height={40} />
            <p className="private-description">This GIF is private and can only be seen by you.</p>
        </div>
    ) : null
