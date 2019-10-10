import {
    PureComponent
} from 'react'
import {
    withRouter
} from 'react-router'
import PropTypes from 'prop-types'
import styled, {
    withTheme,
    css
} from 'styled-components'
import StoryPreviews from 'shared/components/story/previews'
import {
    giphyWhite
} from 'shared/css/colors.css'

const COUNTDOWN_START = 15

const Container = styled.div `
    flex-shrink: 0;
    position: relative;
    width: 100%;
`

const Label = styled.p `
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 10px;
    text-align: center;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    transition: opacity 0.5s linear;
    ${props =>
        props.stoppedCountdown &&
        css`
            opacity: 0;
        `};
`

const Count = styled.span `
    color: ${giphyWhite};
    font-weight: 900;
`
@withTheme
@withRouter
export default class MoreStories extends PureComponent {
    static propTypes = {
        stories: PropTypes.array.isRequired,
        isPaused: PropTypes.bool,
        returnRoute: PropTypes.object,
    }
    static defaultProps = {
        stories: [],
        isPaused: false,
    }
    state = {
        countdown: COUNTDOWN_START,
    }
    countTimeout = null
    componentDidMount() {
        !this.props.isPaused && this.startCount()
    }
    componentDidUpdate({
        isPaused: prevIsPaused
    }) {
        const {
            isPaused
        } = this.props
        if (prevIsPaused !== isPaused) {
            isPaused ? this.resetCount() : this.startCount()
        }
    }
    componentWillUnmount() {
        clearTimeout(this.countTimeout)
    }
    resetCount() {
        clearTimeout(this.countTimeout)
        this.setState({
            countdown: COUNTDOWN_START,
            stoppedCountdown: false
        })
    }
    startCount() {
        this.countTimeout = setTimeout(() => this.count(), 1000)
    }
    onInteraction = () => {
        this.setState({
            stoppedCountdown: true
        })
        clearTimeout(this.countTimeout)
    }
    count() {
        const {
            history: {
                push
            },
            stories,
            returnRoute,
        } = this.props
        const {
            countdown
        } = this.state
        if (countdown > 1) {
            this.setState({
                countdown: countdown - 1
            }, () => {
                this.startCount()
            })
        } else {
            const {
                slug
            } = stories[0]
            push(`/stories/${slug}`, {
                returnRoute,
            })
        }
    }
    render() {
        const {
            stories,
            theme: {
                isShort
            },
        } = this.props
        const {
            countdown,
            stoppedCountdown
        } = this.state
        return ( <
            Container >
            <
            Label stoppedCountdown = {
                stoppedCountdown
            } >
            Next story in < Count > {
                countdown
            } < /Count> <
            /Label> <
            StoryPreviews stories = {
                stories
            }
            isShort = {
                isShort
            }
            onInteraction = {
                this.onInteraction
            }
            /> <
            /Container>
        )
    }
}