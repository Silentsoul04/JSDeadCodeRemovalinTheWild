import { lazy } from 'react'

const AppsLanding = lazy(() => import(/* webpackChunkName: "appsLanding" */ './apps'))

const AppsLandingRoute = ({
    location: {
        state: { apps, app },
    },
}) => <AppsLanding apps={apps} currentApp={app} />

export default AppsLandingRoute
