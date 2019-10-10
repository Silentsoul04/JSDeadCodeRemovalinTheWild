import {
    PureComponent
} from 'react'
import {
    BrowserRouter
} from 'react-router-dom'
import {
    Provider
} from 'react-redux'
import '../shared/global.css'
import FlashMessageGlobalStyle from './flash-message'
import Root from '../components/root'
import createStore from 'shared/redux/init-store'
import reducers from '../shared/reducers'
import {
    getPreloadedState
} from '../shared/global-data-util'

class MobileApp extends PureComponent {
    componentWillMount() {
        this.store = createStore(
            reducers,
            getPreloadedState(), ['autoPlay', 'userGridType', 'miscLocalStorage'], ['searchType'],
        )
    }
    render() {
        const {
            initData
        } = this.props
        return ( <
            >
            <
            FlashMessageGlobalStyle / >
            <
            Provider store = {
                this.store
            } >
            <
            BrowserRouter >
            <
            Root store = {
                this.store
            } { ...initData
            }
            initData = {
                initData
            }
            /> <
            /BrowserRouter> <
            /Provider> <
            />
        )
    }
}

export default MobileApp