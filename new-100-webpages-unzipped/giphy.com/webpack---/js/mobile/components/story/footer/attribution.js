import {
    PureComponent
} from 'react'
import {
    Attribution
} from '@giphy/react-giphy-brand'
import {
    connect
} from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gifProps from 'shared/prop-types/gif'
import * as selectors from '../../../shared/reducers'

const Container = styled.div `
    height: 36px;
    overflow: hidden;
    text-align: left;
    width: 100%;
`

const Wrapper = styled.div `
    position: relative;
    transition: transform ${props => (props.isAnimated ? 0.4 : 0)}s ease-in-out;

    > a {
        clear: both;
        display: block;
    }
`

const Spacer = styled.div `
    height: 36px;
    width: 100%;
`

@connect(state => ({
    gifs: selectors.getStoryGifs(state), // undefined groupId returns all gifs
    currentCardIndex: selectors.getStoryCurrentCardIndex(state) - 1,
}))
export default class FooterAttribution extends PureComponent {
    static propTypes = {
        currentCardIndex: PropTypes.number,
        gifs: PropTypes.arrayOf(gifProps),
    }
    state = {
        lastCardIndex: -1,
        lastUsername: '',
        shouldAnimate: false,
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const {
            currentCardIndex,
            gifs
        } = nextProps
        const {
            lastUsername,
            lastCardIndex
        } = prevState
        const gif = gifs[currentCardIndex]
        if (lastCardIndex !== currentCardIndex) {
            return {
                lastCardIndex: currentCardIndex,
                lastUsername: gif && gif.user ? gif.user.username : '',
                shouldAnimate: gif && gif.user ? gif.user.username !== lastUsername : true,
            }
        }

        return null
    }
    render() {
        const {
            gifs,
            currentCardIndex
        } = this.props
        const {
            shouldAnimate
        } = this.state
        const baseY = currentCardIndex * -36
        return ( <
            Container >
            <
            Wrapper isAnimated = {
                shouldAnimate
            }
            style = {
                {
                    transform: `translateY(${baseY}px)`
                }
            } > {
                gifs.map(({
                    user
                }, i) => (user ? < Attribution key = {
                        i
                    }
                    user = {
                        user
                    }
                    /> : <Spacer key={i} / > ))
            } <
            /Wrapper> <
            /Container>
        )
    }
}