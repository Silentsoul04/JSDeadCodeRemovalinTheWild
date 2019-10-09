import { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as selectors from '../../../shared/reducers'
import { setCurrentCardIndex } from '../../../shared/reducers/story'

const Container = styled.div`
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
`

const Children = styled.div`
    pointer-events: ${props => (props.active ? 'auto' : 'none')};
`

@connect(
    state => ({
        currentCardIndex: selectors.getStoryCurrentCardIndex(state),
        isGifFocus: selectors.getStoryIsFocused(state),
    }),
    { setCurrentCardIndex },
    null,
    { withRef: true },
)
export default class StoryItem extends PureComponent {
    getPosition() {
        const top = this.el.offsetTop
        const height = this.el.offsetHeight
        return top - (window.innerHeight - height) / 2
    }
    render() {
        const { children, currentCardIndex, index, isGifFocus, setCurrentCardIndex } = this.props
        const isActive = index === currentCardIndex
        const isNext = index === currentCardIndex + 1
        const isPrevious = index === currentCardIndex - 1

        const translate = isActive ? 20 : isNext || isPrevious ? 10 : 0
        const rotate = isNext ? -5 : isPrevious ? 5 : 0
        const opacity = isActive ? 1 : !isPrevious && !isNext ? 0 : 0.12

        return (
            <div ref={c => (this.el = c)}>
                <Container
                    active={isActive}
                    previous={isPrevious}
                    next={isNext}
                    style={{
                        transform: `translateZ(${translate}px) rotateX(${rotate}deg)`,
                        opacity: isGifFocus && !isActive ? 0 : opacity,
                    }}
                    onClick={() => !isActive && setCurrentCardIndex(index)}
                >
                    <Children active={isActive}>{children}</Children>
                </Container>
            </div>
        )
    }
}
