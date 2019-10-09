import React from 'react' // eslint-disable-line no-unused-vars
import Page from '../page'
import Header from 'containers/header'
import App from 'components/apps/app'
import locationState from 'shared/components/with-location-state'

const AppDetailPage = ({ app }) => (
    <Page>
        <Header />
        <App {...app} />
    </Page>
)

export default locationState([`app`])(AppDetailPage)
