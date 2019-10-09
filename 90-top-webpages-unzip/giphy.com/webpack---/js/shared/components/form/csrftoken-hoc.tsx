import React from 'react'
import cookie from 'cookie'
import { PureComponent } from 'react'
import { login } from 'shared/api'

type State = {
    csrftoken: string
}

type Props = {}
let savedToken: string
const CSRFToken = WrapedComponent => {
    return class CSRFTokenHOC extends PureComponent<Props, State> {
        state: State = { csrftoken: '' }
        async componentDidMount() {
            if (!savedToken) {
                await login()
                const csrftoken = cookie.parse(document.cookie).csrftoken
                savedToken = csrftoken
                this.setState({ csrftoken })
            } else {
                this.setState({ csrftoken: savedToken })
            }
        }
        render() {
            return <WrapedComponent {...this.props} {...this.state} />
        }
    } as any
}

export default CSRFToken
