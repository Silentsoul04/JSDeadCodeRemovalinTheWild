import { lazy } from 'react'

const DesktopTrending = lazy(() => import(/* webpackChunkName: "desktopTrending" */ './trending'))

const TrendingRoute = () => <DesktopTrending />

export default TrendingRoute
