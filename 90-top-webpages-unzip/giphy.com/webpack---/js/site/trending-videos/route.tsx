import React, { lazy } from 'react'

const DesktopTrendingVideos = lazy(() => import(/* webpackChunkName: "desktopTrendingVideos" */ './trending-videos'))

const TrendingVideosRoute = () => <DesktopTrendingVideos />

export default TrendingVideosRoute
