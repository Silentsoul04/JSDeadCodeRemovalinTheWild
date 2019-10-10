import 'shared/trackjs'
import ReactDOM from 'react-dom'
import log from 'shared/util/log'
import './shared/global.css'
import {
    AppContainer
} from 'react-hot-loader'
import App from './components/app'

global.Giphy.createMobile = (el, ID, initData) => {
    log.debug('Page load for:' + ID)
    ReactDOM.render( <
        AppContainer warnings = {
            false
        } >
        <
        App initData = {
            initData
        }
        ID = {
            ID
        }
        /> <
        /AppContainer>,
        el,
    )
    if (module.hot) {
        module.hot.accept('./components/app', () => {
            const NextApp = require('./components/app').default
            ReactDOM.render( <
                AppContainer warnings = {
                    false
                } >
                <
                NextApp initData = {
                    initData
                }
                ID = {
                    ID
                }
                /> <
                /AppContainer>,
                el,
            )
        })
    }
    if (initData.wepback_manifest_cookie) {
        document.cookie = initData.wepback_manifest_cookie
    }
}