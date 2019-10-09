import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { message } from 'shared/redux/message'
import { STATUS_STYLE } from 'shared/components/message/flash-message'

// TODO: remove global messages and use the redux message action
// but for now just add callbacks to the global methods
@connect(
    undefined,
    { message },
)
class GlobalMessageManager extends PureComponent {
    showSuccess = (text, redirect, timeout = 3000) => {
        const { message } = this.props
        message(text, STATUS_STYLE.SUCCESS)
        if (redirect) {
            setTimeout(() => (location.pathname = redirect), timeout)
        }
    }
    showError = text => {
        const { message } = this.props
        message(text, STATUS_STYLE.ERROR)
    }
    constructor(props) {
        super(props)
        global.showSuccess = this.showSuccess
        global.showError = this.showError
    }
    render() {
        return null
    }
}

export default GlobalMessageManager
