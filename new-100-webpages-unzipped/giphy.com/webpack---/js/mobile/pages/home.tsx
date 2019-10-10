import PromoModal from 'mobile/shared/modal/promo'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, getContext } from 'recompose'
import Banner from 'shared/components/banner'
import locationState from 'shared/components/with-location-state'
import styled from 'styled-components'
import OpenInApp, { OpenInAppContainer } from '../components/open-in-app'
import TrendingStories from '../components/trending-stories'
import HeaderInfoContext from '../components/trending-stories/day/context'
import Header from '../containers/header'
import SearchBar from '../containers/search-bar'
import Page from './page'
import * as selectors from '../shared/reducers'

const PositionManager = styled.div<{ isFocused: boolean }>`
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
`
const BannerContainer = styled.div`
    height: 22vw;
    margin-top: -6px;
`

const HeaderManager = () => {
    const [isFocused, setIsFocused] = useState(false)

    const onFocus = () => setIsFocused(true)
    const onBlur = () => setIsFocused(false)
    return (
        <PositionManager isFocused={isFocused}>
            <Header useDynamicHeader={!isFocused} />
            <SearchBar dontPosition onFocus={onFocus} onBlur={onBlur} />
        </PositionManager>
    )
}

const RenderOnOptimizeValue = ({ children, windowVar = 'optimizeShowTextEmojiPromo' }) => {
    const [isReady, setIsReady] = useState(false)
    // poll for variable
    useEffect(() => {
        let count = 0
        const poll = setInterval(() => {
            count++
            if (count > 10) {
                // abort after one second
                clearInterval(poll)
            }
            if (window.hasOwnProperty(windowVar)) {
                clearInterval(poll)
                // if true, render
                setIsReady(window[windowVar])
            }
        }, 100)
        return () => clearInterval(poll)
    }, [])
    return isReady ? children : null
}

const HomePage = ({ banner, pingbackId, appSize, isOffScreen }) => {
    return (
        <Page>
            <HeaderInfoContext.Provider>
                <HeaderManager />
                {banner && (
                    <BannerContainer>
                        <Banner {...banner} />
                    </BannerContainer>
                )}
                <TrendingStories pingbackId={pingbackId} showLatestStoryHeader={!!banner} />
                <OpenInAppContainer>
                    <OpenInApp category="Home" />
                </OpenInAppContainer>
                {!isOffScreen && (
                    <RenderOnOptimizeValue>
                        <PromoModal appSize={appSize} />
                    </RenderOnOptimizeValue>
                )}
            </HeaderInfoContext.Provider>
        </Page>
    )
}

export default compose(
    locationState(['banner', 'pingback_id']),
    connect(state => ({
        appSize: selectors.getAppSize(state),
    })),
    getContext({ isOffScreen: PropTypes.bool })
)(HomePage)
