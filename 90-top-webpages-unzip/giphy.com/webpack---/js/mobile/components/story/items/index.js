import { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as selectors from '../../../shared/reducers'
import { setIsShareOpen, setIsFocused, setCurrentCardIndex } from '../../../shared/reducers/story'
import Cover from '../cover'
import Gif from '../gif'
import End from '../end'
import Item from './item'

const PEEKY = 35

const Container = styled.div`
    transform-style: preserve-3d;
    transform: translateZ(-20px);
`

const Covers = styled.div`
    box-sizing: border-box;
    width: ${props => (window.innerWidth - props.minPeek * (props.fullWidth ? 0 : 2)) * (props.fullWidth ? 1 : 3)}px;
    overflow: hidden;
`
@connect(
    state => ({
        size: selectors.getAppSize(state),
        gifs: selectors.getStoryGifs(state),
        info: selectors.getStoryInfo(state),
        currentCardIndex: selectors.getStoryCurrentCardIndex(state),
        isGifFocus: selectors.getStoryIsFocused(state),
        nextStory: selectors.getNextStory(state),
        previousStory: selectors.getPreviousStory(state),
    }),
    { setIsShareOpen, setIsFocused, setCurrentCardIndex },
    null,
    { withRef: true },
)
export default class StoryItems extends PureComponent {
    static propTypes = {
        currentCardIndex: PropTypes.number.isRequired,
        isGifFocus: PropTypes.bool,
        translateX: PropTypes.number,
    }
    state = {
        animateNext: false,
        animatePrev: false,
    }
    items = {}
    componentDidUpdate({ isNext: wasNext, isPrevious: wasPrevious }) {
        const { isNext, isPrevious } = this.props

        if (wasNext && !isNext) {
            this.setState({
                animateNext: true,
                animatePrev: false,
            })
        }
        if (wasPrevious && !isPrevious) {
            this.setState({
                animatePrev: true,
                animateNext: false,
            })
        }
    }
    getItemPosition(index) {
        return this.items[index] ? this.items[index].getWrappedInstance().getPosition() : 0
    }
    onGifTap = () => {
        const { currentCardIndex, setCurrentCardIndex } = this.props
        setCurrentCardIndex(currentCardIndex + 1)
    }
    onGifHold = () => {
        this.props.setIsFocused(true)
    }
    onGifRelease = () => {
        this.props.setIsFocused(false)
    }
    onShareClick = () => {
        this.props.setIsShareOpen(true)
    }
    render() {
        const {
            gifs,
            info,
            size,
            currentCardIndex,
            isGifFocus,
            onClick,
            nextStory,
            previousStory,
            translateX,
            horizontalPanProgress,
            minPeek,
            isNext,
            isPrevious,
        } = this.props
        const { animatePrev, animateNext } = this.state
        const endIndex = gifs.length + 1
        const itemProps = {
            activeIndex: currentCardIndex,
            isGifFocus,
            onClick,
        }
        const translateY = PEEKY * horizontalPanProgress
        const translateYInverse = PEEKY - translateY
        const fullWidth = !nextStory && !previousStory

        return (
            <Container>
                <Item {...itemProps} index={0} ref={c => (this.items[0] = c)}>
                    <Covers
                        style={{ height: size.height, transform: `translateX(${fullWidth ? 0 : translateX}px)` }}
                        minPeek={minPeek}
                        fullWidth={fullWidth}
                    >
                        {!fullWidth && (
                            <Cover
                                info={previousStory}
                                translateY={translateYInverse}
                                opacity={horizontalPanProgress}
                                isActive={horizontalPanProgress > 0 && isPrevious}
                                isDragging={horizontalPanProgress !== 0}
                                minPeek={minPeek}
                                fadeIn={animatePrev}
                                key={1}
                            />
                        )}
                        <Cover
                            info={info}
                            translateY={translateY}
                            opacity={1 - horizontalPanProgress}
                            isActive
                            isDragging={horizontalPanProgress !== 0}
                            fullWidth={fullWidth}
                            minPeek={minPeek}
                            onTap={this.onGifTap}
                            key={2}
                        />
                        {!fullWidth && (
                            <Cover
                                info={nextStory}
                                translateY={translateYInverse}
                                opacity={horizontalPanProgress}
                                isActive={horizontalPanProgress > 0 && isNext}
                                isDragging={horizontalPanProgress !== 0}
                                minPeek={minPeek}
                                fadeIn={animateNext}
                                key={3}
                            />
                        )}
                    </Covers>
                </Item>
                {gifs.map((gif, i) => (
                    <Item {...itemProps} key={`gif-${i}`} index={i + 1} ref={c => (this.items[i + 1] = c)}>
                        <Gif
                            gif={gif}
                            onTap={this.onGifTap}
                            onHold={this.onGifHold}
                            onRelease={this.onGifRelease}
                            isActive={i === currentCardIndex - 1}
                        />
                    </Item>
                ))}
                <Item {...itemProps} index={endIndex} ref={c => (this.items[endIndex] = c)}>
                    <End isActive={currentCardIndex === endIndex} onShareClick={this.onShareClick} />
                </Item>
            </Container>
        )
    }
}
