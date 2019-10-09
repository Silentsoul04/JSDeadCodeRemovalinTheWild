import { PureComponent } from 'react'
import { Tweenable } from 'shifty'
import PropTypes from 'prop-types'
import Hammer from 'react-hammerjs'
import gifProps from 'shared/prop-types/gif'
import { fitGifToSize } from 'shared/util/sizing'
import { getContainerStyle, getGifStyles, getSwipeStyles } from './carousel-utils'
import GIF from './gif'
import css from './swipe-carousel.css'

const SWIPE_THRESHOLD = 0.25

export default class GifCarousel extends PureComponent {
    static propTypes = {
        currentGif: gifProps.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        nextGif: gifProps,
        previousGif: gifProps,
        onDoubleTap: PropTypes.func,
        onProgress: PropTypes.func,
        onComplete: PropTypes.func.isRequired,
    }
    state = {
        progress: 0,
    }
    tween = null
    componentDidMount() {
        this.tween = new Tweenable()
    }
    componentWillUnmount() {
        this.tween.dispose()
    }
    componentWillUpdate(nextProps) {
        if (nextProps.currentGif !== this.props.currentGif) {
            this.setState({ progress: 0 })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const { onProgress } = this.props
        const { progress } = this.state
        if (prevState.progress !== progress) {
            onProgress && onProgress(progress)
        }
    }
    transitionTo(to) {
        const { progress } = this.state

        if (this.tween.isPlaying()) {
            this.tween.stop(false)
        }

        this.tween
            .tween({
                from: { progress },
                to: { progress: to },
                duration: 200,
                easing: 'easeOutQuart',
                step: state => this.setState(state),
            })
            .then(() => this.onTransitionEnd())
            .catch(() => {})
    }
    onTransitionEnd() {
        const { nextGif, previousGif, onComplete } = this.props
        const { progress } = this.state

        // next gif
        if (progress === -1) {
            nextGif && onComplete(nextGif, false)
        }

        // previous gif
        if (progress === 1) {
            previousGif && onComplete(previousGif, true)
        }
    }
    onPan({ deltaX, isFinal }) {
        if (isFinal) return

        const { width } = this.props
        this.setState({
            // this is clamped at 0.99 to guaruntee there will be a transition
            // transitionEnd is what triggers the callback
            progress: Math.max(-0.99, Math.min(0.99, deltaX / width)),
        })
    }
    onPanEnd() {
        const { nextGif, previousGif } = this.props
        const { progress } = this.state
        const isSwipe = Math.abs(progress) >= SWIPE_THRESHOLD
        let roundedProgress = 0

        if (isSwipe && progress < 0 && nextGif) {
            roundedProgress = -1
        }

        if (isSwipe && progress > 0 && previousGif) {
            roundedProgress = 1
        }

        this.transitionTo(roundedProgress)
    }
    onGifClick(progress) {
        this.transitionTo(progress)
    }
    render() {
        const { children, currentGif, nextGif, previousGif, width, height, onDoubleTap } = this.props
        const { progress } = this.state

        // single gif
        if (!nextGif && !previousGif) {
            const size = fitGifToSize(currentGif, width, height)
            return <GIF gif={currentGif} width={size.width} height={size.height} isAnimating={true} />
        }

        const styles = getGifStyles({
            currentGif,
            previousGif,
            nextGif,
            width,
            height,
        })
        const swipeStyles = getSwipeStyles(styles, width, progress)
        return (
            <Hammer
                direction="DIRECTION_HORIZONTAL"
                options={{ preventDefault: true }}
                onPan={data => this.onPan(data)}
                onPanEnd={() => this.onPanEnd()}
                onSwipeRight={() => this.onGifClick(-1)}
                onSwipeLeft={() => this.onGifClick(1)}
                onDoubleTap={() => onDoubleTap && onDoubleTap()}
            >
                <div className={css.container} style={getContainerStyle(styles, width, progress)}>
                    <div className={css.previous} style={swipeStyles.previous} key={previousGif ? previousGif.id : ''}>
                        {previousGif && (
                            <GIF
                                {...styles.previous}
                                gif={previousGif}
                                isAnimating={true}
                                onClick={() => this.onGifClick(1)}
                            />
                        )}
                    </div>
                    <div className={css.current} style={swipeStyles.current} key={currentGif.id}>
                        <GIF {...styles.current} gif={currentGif} isAnimating={true} />
                        {children}
                    </div>
                    <div className={css.next} style={swipeStyles.next} key={nextGif ? nextGif.id : ''}>
                        {nextGif && (
                            <GIF
                                {...styles.next}
                                gif={nextGif}
                                style={styles.next}
                                isAnimating={true}
                                onClick={() => this.onGifClick(-1)}
                            />
                        )}
                    </div>
                </div>
            </Hammer>
        )
    }
}
