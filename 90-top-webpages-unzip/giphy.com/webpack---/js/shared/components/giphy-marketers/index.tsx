import React, { useState } from 'react'
import Media from 'react-media'
import styled from 'styled-components'
import { sectionMobileMargin, sectionMargin } from './constants'
import { mobile } from 'shared/util/media-query'
import GiphyMarketingGlobalStyle from './giphy-marketing-landing-style'
import Navigation from './nav'
import Header from './header'
import Intro from './intro'
import Data from './data'
import Footer from './footer'
import Value from './value'
import AdGrid from './ad-grid'
import PlatformCarousel from './platform-carousel'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
        padding-bottom: ${sectionMargin}px;

        &:first-child {
            padding-bottom: 0;
        }

        ${mobile.css`
            padding-bottom: ${sectionMobileMargin}px;

            &:nth-child(6) {
                padding-bottom: ${sectionMargin}px;
            }
        `}
    }
`

const NoPadding = styled.div`
    width: 100%;
    section {
        padding-bottom: 0;
    }
`

const MarketingLandingPage = () => {
    const [introOutProgress, setIntroOutProgress] = useState<number>(0)
    const [isIntroError, setIsIntroError] = useState<boolean>(false)
    const [isIntroComplete, setIsIntroComplete] = useState<boolean>(false)

    const onIntroProgress = (progress: number) => {
        if (progress < 0.7) return
        setIntroOutProgress((progress - 0.7) / 0.3)
    }

    const onIntroComplete = () => {
        setIsIntroComplete(true)
    }

    const onIntroError = () => {
        setIsIntroError(true)
    }

    return (
        <>
            <GiphyMarketingGlobalStyle />
            <Container>
                <Navigation />
                <Media query={mobile.query}>
                    {matches =>
                        matches || isIntroError ? (
                            <Header />
                        ) : (
                            !isIntroComplete && (
                                <Intro
                                    opacity={1 - introOutProgress}
                                    onAnimationProgress={onIntroProgress}
                                    onAnimationComplete={onIntroComplete}
                                    onError={onIntroError}
                                />
                            )
                        )
                    }
                </Media>
                <NoPadding>
                    <Value translateY={`${(1 - introOutProgress) * 30}vh`} />
                </NoPadding>
                <AdGrid />
                <PlatformCarousel />
                <Data />
                <Footer />
            </Container>
        </>
    )
}

export default MarketingLandingPage
