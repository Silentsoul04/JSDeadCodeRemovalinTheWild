import { lazy } from 'react'

const Homebase = lazy(() => import(/* webpackChunkName: "homebase" */ './homebase'))

const HomebaseRoute = () => <Homebase />

export default HomebaseRoute
