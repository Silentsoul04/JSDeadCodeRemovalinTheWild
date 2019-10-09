import 'shared/trackjs'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const Giphy = (global.Giphy = global.Giphy || {})
Giphy.renderDesktop = (el, data) => {
    ReactDOM.render(
        <AppContainer>
            <App {...data} />
        </AppContainer>,
        el,
    )
    if (module.hot) {
        module.hot.accept('./app', () => {
            const NextApp = require('./app').default
            ReactDOM.render(
                <AppContainer>
                    <NextApp {...data} />
                </AppContainer>,
                el,
            )
        })
    }
}
