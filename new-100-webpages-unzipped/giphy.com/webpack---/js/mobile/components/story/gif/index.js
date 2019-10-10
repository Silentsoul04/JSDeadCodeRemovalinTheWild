import {
    PureComponent
} from 'react'
import {
    connect
} from 'react-redux'
import {
    Gif
} from '@giphy/react-giphy-brand'
import styled, {
    css
} from 'styled-components'
import * as selectors from '../../../shared/reducers'
import {
    giphyNewBlack
} from 'shared/css/colors.css'
import {
    fitGifToSize
} from 'shared/util/sizing'
import {
    withStoryContext
} from '../context'

const HOLD_DELAY = 350

const Card = styled.div `
    background: ${giphyNewBlack};
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 0 10px;
    position: relative;
    text-align: center;
    width: 100%;

    ${props =>
        props.active &&
        css`
            z-index: 9999;
        `};
`

const GifWrapper = styled.div `
    pointer-events: none;
`

@connect(state => ({
    size: selectors.getAppSize(state),
}))
@withStoryContext
export default class StoryGif extends PureComponent {
    static defaultProps = {
        isSticker: false,
        isActive: false,
    }
    componentDidUpdate(prevProps) {
        const {
            isActive
        } = this.props
        if (isActive !== prevProps.isActive && isActive) {
            // reset loop
            const {
                hasPlayedOnce
            } = this.props
            if (hasPlayedOnce) {
                hasPlayedOnce(false)
            }
        }
    }
    holdTimeout = null
    isHeld = false
    onTapAndHold = () => {
        const {
            onHold
        } = this.props
        this.isHeld = true
        onHold && onHold()
    }
    onTouchStart = () => {
        this.isHeld = false
        this.holdTimeout = setTimeout(this.onTapAndHold, HOLD_DELAY)
    }
    onTouchEnd = () => {
        const {
            onRelease
        } = this.props
        clearTimeout(this.holdTimeout)
        if (this.isHeld) {
            onRelease && onRelease()
        }
    }
    onLoop = () => {
        const {
            hasPlayedOnce
        } = this.props
        if (hasPlayedOnce) {
            hasPlayedOnce(true)
        }
    }
    render() {
        const {
            isActive,
            gif,
            size,
            onTap,
            onEnded,
            isWaitingForMediaEnd,
            useVideo
        } = this.props
        const {
            height
        } = fitGifToSize(gif, size.width, size.height - 120, 'contain')
        const width = size.width

        return ( <
            Card active = {
                isActive
            }
            onTouchStart = {
                this.onTouchStart
            }
            onTouchEnd = {
                this.onTouchEnd
            }
            onClick = {
                onTap
            } >
            <
            GifWrapper >
            <
            Gif { ...this.props
            }
            backgroundColor = "transparent"
            autoPlay = {
                isActive
            }
            width = {
                width
            }
            height = {
                height
            }
            useVideo = {
                useVideo
            }
            rendition = "original"
            onLoop = {
                this.onLoop
            } { ...(isActive ?
                    {
                        loop: !isWaitingForMediaEnd,
                        onEnded: isWaitingForMediaEnd ? onEnded : undefined,
                    } :
                    {})
            }
            /> <
            /GifWrapper> <
            /Card>
        )
    }
}