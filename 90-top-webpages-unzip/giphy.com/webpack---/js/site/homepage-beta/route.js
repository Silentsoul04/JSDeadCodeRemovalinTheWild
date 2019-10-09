import { lazy } from 'react'

const Homepage = lazy(() => import(/* webpackChunkName: "homepageBeta" */ './homepage'))

const HomepageRoute = () => <Homepage />

export default HomepageRoute
