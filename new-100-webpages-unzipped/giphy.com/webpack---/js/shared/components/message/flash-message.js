import PropTypes from 'prop-types'
import styled, {
    css,
    ThemeProvider
} from 'styled-components'
import {
    PureComponent
} from 'react'
import {
    connect
} from 'react-redux'
import {
    giphyGreen,
    errorColor,
    giphyIndigo,
    giphyBlack,
    giphyWhite
} from 'shared/css/colors.css'
import {
    messageReset
} from 'shared/redux/message'
import {
    highestZIndex
} from 'shared/css/z-indexes.css'

export const STATUS_MESSAGES = {
    FILE_TOO_BIG: 'Uh-oh! Some files were too big.',
    INVALID_URL: 'Please enter a valid URL.',
    INVALID_FILE: 'Whoops! Some files were invalid.',
    ACCEPT_TOS: 'Please accept our Terms of Service to continue.',
    SOMETHING_WENT_WRONG: ( <
        div >
        Uh - oh.Something went wrong.Please
        try again or {
            ' '
        } <
        a href = "https://support.giphy.com"
        target = "_blank" >
        visit our Support Center <
        /a>
        . <
        /div>
    ),
}

export const STATUS_STYLE = {
    ERROR: 'error',
    SUCCESS: 'success',
}

export const MESSAGE_ALIGN = {
    TOP: 'top',
    BOTTOM: 'bottom',
}

const MessageWrapper = styled.div `
    max-height: ${props => (props.isVisible ? 100 : 0)}px;
    overflow: hidden;
    position: relative;
    z-index: ${highestZIndex};
    ${props =>
        props.theme.isDesktop &&
        css`
            height: 50px;
            position: fixed;
            right: 0;
            left: 0;
            ${props.theme.align}: 0;
            display: flex;
            justify-content: center;
        `};
    background: ${({ color }) => color};
    transition: max-height 0.5s cubic-bezier(0.77, 0, 0.175, 1);
`

const ContentWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 15px;
    height: 100%;
    ${props =>
        props.theme.isDesktop &&
        css`
            width: 1040px;
            position: relative;
        `};
`

const Text = styled.div `
    box-sizing: border-box;
    color: ${props => props.color};
    a {
        color: ${props => props.color};
        text-decoration: underline;
    }
    font-size: ${props => (props.theme.isDesktop ? 16 : 14)}px;
    font-weight: ${props => props.theme.fontWeight};
    padding-right: ${props => props.theme.closeButtonSize}px;
    text-align: center;
    width: 100%;
    line-height: 22px;
`

const MessageClose = styled.div `
    mask-image: url(/static/img/close.svg);
    background-color: ${props => props.color};
    position: absolute;
    right: 10px;
    ${props =>
        !props.theme.isDesktop &&
        css`
            top: 15px;
        `};
    width: ${props => props.theme.closeButtonSize}px;
    height: ${props => props.theme.closeButtonSize}px;
    cursor: pointer;
`

@connect(
    ({
        message: {
            text,
            status,
            delay,
            statusKey,
            closeCallback,
            align = MESSAGE_ALIGN.TOP
        }
    }) => ({
        message: text || STATUS_MESSAGES[statusKey] || '',
        status,
        delay,
        closeCallback,
        align,
    }), {
        messageReset
    },
)
/**
 * Message: Controls a global message element. This component
 * listens for a change in the "message" property on state.
 * If a message is added, this view displays it and autohides.
 *
 * @class Message
 * @param {String} message Message text to display.
 * @param {String} status Message type. (error, success, etc.)
 * @param {Number} delay Amount of time to display the message. (in milliseconds)
 * @param {Function} onReset Callback function to trigger when the message is
 * hidden. This dispatches a messageReset action which resets the current
 * message state data to the defaults. This is a necessary step to make sure the
 * message still displays if the same message text is called twice in a row.
 */
class Message extends PureComponent {
    static propTypes = {
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        status: PropTypes.string,
        delay: PropTypes.number,
        messageReset: PropTypes.func,
    }
    state = {}
    hideTimeout = null

    componentDidUpdate(prevProps) {
        const {
            delay,
            message
        } = this.props
        let newMessage = message !== prevProps.message
        if (newMessage && message) {
            this.setState({
                isVisible: true
            })
            clearTimeout(this.hideTimeout)
            clearTimeout(this.resetTimeout)
            if (delay !== Infinity) {
                this.hideTimeout = setTimeout(this.hide, delay)
            }
        }
        return newMessage
    }
    componentWillUnmount() {
        clearTimeout(this.hideTimeout)
        clearTimeout(this.resetTimeout)
    }

    /**
     * Hides the message and dispatches a reset action.
     */
    hide = () => {
        const {
            messageReset,
            closeCallback = () => {}
        } = this.props
        closeCallback()
        clearTimeout(this.hideTimeout)
        this.setState({
            isVisible: false
        })
        // wait a second for the animation
        this.resetTimeout = setTimeout(messageReset, 1000)
    }
    render() {
        const {
            message,
            status,
            isDesktop,
            align
        } = this.props
        const {
            isVisible
        } = this.state
        // The default message (only used for tos currently)
        let color = giphyIndigo
        let fontColor = giphyWhite
        let fontWeight = 'inherit'
        switch (status) {
            case STATUS_STYLE.ERROR:
                color = errorColor
                fontColor = giphyBlack
                fontWeight = 600
                break
            case STATUS_STYLE.SUCCESS:
                fontColor = giphyBlack
                color = giphyGreen
                fontWeight = 600
                break
            default:
                break
        }

        const closeButtonSize = isDesktop ? 30 : 25
        // only messages on the bottom are persistent
        const showClose = align === MESSAGE_ALIGN.BOTTOM
        return ( <
            ThemeProvider theme = {
                {
                    isDesktop,
                    align,
                    fontWeight,
                    closeButtonSize
                }
            } >
            <
            MessageWrapper color = {
                color
            }
            isVisible = {
                isVisible
            }
            message = {
                message
            } >
            <
            ContentWrapper >
            <
            Text color = {
                fontColor
            } > {
                message
            } < /Text> {
                showClose && < MessageClose color = {
                    fontColor
                }
                onClick = {
                    this.hide
                }
                />} <
                /ContentWrapper> <
                /MessageWrapper> <
                /ThemeProvider>
            )
        }
    }

    export default Message