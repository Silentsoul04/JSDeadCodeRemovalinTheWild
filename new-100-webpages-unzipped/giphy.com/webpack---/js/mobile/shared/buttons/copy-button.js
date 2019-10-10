import {
    PureComponent,
    Fragment
} from 'react'
import Clipboard from 'clipboard'
import {
    googleAnalyticsEvent
} from 'shared/util/analytics'
import Button from './state-button'

const showClipboard = Clipboard.isSupported()

const MESSAGE_DELAY = 2500,
    SUCCESS_MESSAGE = 'Link Copied!',
    ERROR_MESSAGE = 'Error Copying Link'

export default class CopyButton extends PureComponent {
    static defaultProps = {
        text: '',
    }
    state = {
        message: '',
        isError: false,
    }
    messageDelay = null
    componentWillUnmount() {
        clearTimeout(this.messageDelay)
    }
    createClipboard() {
        const {
            url,
            CTA,
            label
        } = this.props
        this.clipboard = new Clipboard(this.copyButton, {
            text: () => url
        })
        this.clipboard.on('success', () => {
            this.showMessage()
            googleAnalyticsEvent({
                category: `Story`,
                action: `Story ${CTA}`,
                label,
            })
        })
        this.clipboard.on('error', () => {
            this.showMessage(true)
        })
    }
    destroyClipboard() {
        if (this.clipboard) {
            this.clipboard.destroy()
        }
    }
    showMessage(isError = false) {
        clearTimeout(this.messageDelay)
        this.setState({
            message: isError ? ERROR_MESSAGE : SUCCESS_MESSAGE,
            isError
        })
        this.messageDelay = setTimeout(() => {
            this.setState({
                message: '',
                isError: false
            })
        }, MESSAGE_DELAY)
    }
    render() {
        const {
            CTA,
            primary
        } = this.props
        const {
            message,
            isError
        } = this.state
        return ( <
            Fragment > {
                showClipboard && ( <
                    Button ref = {
                        c => (this.copyButton = c)
                    }
                    onMouseOver = {
                        () => this.createClipboard()
                    }
                    onMouseOut = {
                        () => this.destroyClipboard()
                    }
                    onClick = {
                        e => e.preventDefault()
                    }
                    primary = {
                        primary
                    }
                    success = {
                        message && !isError
                    }
                    error = {
                        message && isError
                    } >
                    {
                        message || CTA
                    } <
                    /Button>
                )
            } <
            /Fragment>
        )
    }
}