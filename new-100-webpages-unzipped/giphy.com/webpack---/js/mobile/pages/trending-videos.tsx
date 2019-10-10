import React from 'react'
import Header from '../containers/header'
import HeaderSubtitle from '../components/header/header-subtitle'
import SearchBar from '../containers/search-bar'
import VideoGrid from '../components/video-detail/prototype-trending'
import Page from './page'

const TrendingVideos = () => (
    <Page>
        <Header />
        <SearchBar />
        <HeaderSubtitle subtitle={'Trending Videos'} />
        <VideoGrid />
    </Page>
)

export default TrendingVideos
