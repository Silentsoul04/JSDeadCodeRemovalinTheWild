import { giphyBlack, giphyDarkCharcoal, giphyLightestGrey } from '@giphy/js-brand'
import { IGif } from '@giphy/js-types'
import { getBestRenditionUrl, getGifHeight } from '@giphy/js-util'
import { Button, Title } from '@giphy/react-giphy-brand'
import React, { useEffect, useState } from 'react'
import useLocalStorage from 'react-use/lib/useLocalStorage'
import { mobileFetch } from 'shared/api'
import useAsyncEffect from 'shared/hooks/use-async-effect'
import styled, { createGlobalStyle, ThemeProvider, css } from 'styled-components'
import Overlay from '../overlay'
import { googleAnalyticsEvent } from 'shared/util/analytics'

const FreezeBackground = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

const margin = css`
    margin: 2.5vh 0 0.5vh;
`
// inner modal top margin is in the close X header height
const InnerModal = styled.div<{ horizontalMargin: number }>`
    margin: ${({ horizontalMargin }) => `0 ${horizontalMargin}px ${horizontalMargin}px`};
    background: ${giphyBlack};
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    img {
        display: block;
        max-height: 50vh;
        object-fit: cover;
    }
`
const Copy = styled.div`
    color: ${giphyLightestGrey};
    ${margin};
`
const CopyContainer = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    flex-shrink: 0;
    ${Title} {
        line-height: 28px;
        ${margin};
    }
    ${Button} {
        width: 100%;
        height: 40px;
        flex-shrink: 0;
        ${margin};
    }
`

const MaybeLater = styled(Copy)`
    cursor: pointer;
    font-weight: bold;
`

const SmallScreenButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* 
        Button has 0.5vh on the bottom, this evens it out with
        the top at 2.5vh
    */
    margin-bottom: 2vh;
    ${Button} {
        width: 49%;
    }
`

const gaOpen = () => googleAnalyticsEvent({ category: 'Pop-Up', action: 'Open', label: 'Homepage' })
const gaClose = () => googleAnalyticsEvent({ category: 'Pop-Up', action: 'Close', label: 'Homepage' })

const id = 'IyyTFAxyU3YsLcqHhN'
const CLOSE_X_HEIGHT = 20
const PromoModal = ({ appSize }: { appSize: { width: number; height: number } }) => {
    // only show it once per user
    const [hasSeen, setHasSeen] = useLocalStorage(`giphy-has-seen-promo-${id}`, false)
    const isSmall = appSize.height < 600
    const horizontalMargin = isSmall ? 0 : appSize.width * 0.05
    const headerHeight = CLOSE_X_HEIGHT + horizontalMargin * 2
    const promoWidth = appSize.width - horizontalMargin * 2
    const [showOverlay, setShowOverlay] = useState(false)
    useEffect(() => {
        // show the modal after this timeout
        const showTimeout = setTimeout(() => setShowOverlay(true), 3000)
        return () => clearInterval(showTimeout)
    }, [])
    const [gif, setGif] = useState<IGif | undefined>(undefined)
    useAsyncEffect(async () => {
        // only fetch the gif once
        if (!hasSeen) {
            // fetch the promo gif
            const { data } = await mobileFetch.gif(id)
            setGif(data)
            setHasSeen(true)
        }
    }, [])

    // wait for the promo gif so we know its height, so the text below won't jump
    if (!gif) {
        return null
    }
    // kill it on landscape
    if (appSize.width > appSize.height) {
        return null
    }
    const height = getGifHeight(gif, promoWidth)
    const renditionBump = 100 // getting a shitty rendition for most phone widths
    const src = getBestRenditionUrl(gif, promoWidth + renditionBump, height + renditionBump)
    return showOverlay ? (
        <ThemeProvider theme={{ closeMarginLeft: horizontalMargin, headerHeight }}>
            <Overlay closeOverlay={() => setShowOverlay(false)} hideCancel showCloseHeader={!isSmall}>
                <FreezeBackground />
                <InnerModal horizontalMargin={horizontalMargin}>
                    <img src={src} width={promoWidth} height={height} />
                    <CopyContainer>
                        <Title>Two new ways to express yourself!</Title>
                        <Copy>Speak your mind with GIPHY Emoji and Text, available only in our app.</Copy>
                        {isSmall ? (
                            <SmallScreenButtonContainer>
                                <Button
                                    onClick={() => {
                                        gaOpen()
                                        location.href = 'https://giphy.onelink.me/LLpx/291675df'
                                    }}
                                >
                                    Open App Store
                                </Button>
                                <Button onClick={() => setShowOverlay(false)} color={giphyDarkCharcoal}>
                                    Maybe Later
                                </Button>
                            </SmallScreenButtonContainer>
                        ) : (
                            <>
                                <Button
                                    onClick={() => {
                                        gaOpen()
                                        location.href = 'https://giphy.onelink.me/LLpx/291675df'
                                    }}
                                >
                                    Open App Store
                                </Button>
                                <MaybeLater
                                    onClick={() => {
                                        gaClose()
                                        setShowOverlay(false)
                                    }}
                                >
                                    Maybe Later
                                </MaybeLater>
                            </>
                        )}
                    </CopyContainer>
                </InnerModal>
            </Overlay>
        </ThemeProvider>
    ) : null
}

export default PromoModal
