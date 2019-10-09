import { PureComponent } from 'react'
import { withRouter } from 'react-router'
import { omit } from 'lodash'

@withRouter
/**
 * GD is global data
 * We want to take the window.GD and put it into our browser location state
 */
class GDBootstrapper extends PureComponent {
    state = {
        initData: {},
    }
    waitingForFirstLocationState = true
    componentWillMount() {
        const {
            initData = {},
            location: { pathname, search = '' },
            history: { replace },
        } = this.props
        // gifs is too big for firefox pushState, and we don't need it
        // since it goes in redux
        const initDataNoReduxStuff = omit(initData, ['gifs'])
        this.setState({ initData: initDataNoReduxStuff })
        // replace the current location with this new location that has our GD
        replace(`${pathname}${search}`, initDataNoReduxStuff)
    }

    componentWillReceiveProps(nextProps) {
        const {
            location: { state: locationState },
        } = nextProps
        const { initData } = this.state
        // the init data is in the location state
        if (locationState === initData) {
            this.waitingForFirstLocationState = false
        }
    }

    render() {
        if (this.waitingForFirstLocationState) {
            return null
        }
        return this.props.children
    }
}

export default GDBootstrapper
