import {
    PureComponent
} from 'react'
import {
    connect
} from 'react-redux'
import {
    message
} from 'shared/redux/message'
import styled from 'styled-components'
import {
    withStorageContext
} from 'react-storage-context'
import log from 'shared/util/log'
import {
    MESSAGE_ALIGN
} from './message/flash-message'

const A = styled.a `
    text-decoration: underline;
    color: white;
    font-weight: 600;
`

const Container = styled.div `
    text-align: left;
`

@withStorageContext
@connect(
    undefined, {
        message
    },
)
class TosMessage extends PureComponent {
    hasClosed = () => {
        const {
            saveLocal
        } = this.props
        saveLocal({
            hasSeenToSMessage: true
        })
    }
    componentDidMount() {
        const {
            message,
            local
        } = this.props
        if (!local) {
            log.warn('No local storage context')
        }
        if (local && !local.hasSeenToSMessage) {
            message( <
                Container >
                Hi!We & apos; ve recently updated our < A href = "/privacy" > Privacy Policy < /A>. By continuing to use
                GIPHY, you are agreeing to these updates. <
                /Container>,
                undefined,
                undefined,
                Infinity,
                this.hasClosed,
                MESSAGE_ALIGN.BOTTOM,
            )
        }
    }
    render() {
        return null
    }
}

export default TosMessage