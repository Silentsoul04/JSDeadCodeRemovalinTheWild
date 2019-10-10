import React from 'react'
import styled from 'styled-components'
import { mobile } from 'shared/util/media-query'
import Carousel from './carousel'
import { headerParagraphFontSize } from '../constants'
import { LazyLoadImage } from '../lazy-media'

const CarouselContainer = styled.section`
    width: 100%;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;

    img {
        width: 112px;

        ${mobile.css`
            width: 80px;
        `}
    }

    p {
        text-align: center;
        line-height: 30px;
        width: 890px;
        font-size: ${headerParagraphFontSize}px;
    }

    ${mobile.css`
        p {
            width: 100%;
            font-size: 18px;
        }

    `}
`

const Content = styled.div`
    display: flex;
    flex-direction: column;

    video {
        width: 100%;

        ${mobile.css`
            width: unset;
            height: 516px;
            object-fit: cover;
        `}
    }

    ${mobile.css`
        width: 100%;
        margin: auto;
        flex-direction: column-reverse;
    `}
`

const PlatformCarousel = () => {
    return (
        <CarouselContainer id="platform">
            <Header>
                <LazyLoadImage src={'/static/img/giphy-marketers/flexing.gif'} />
                <h1>Our Platform</h1>
                <p>
                    GIPHY&rsquo;s platform GIFs your content the home it deserves. Find your place at the top of our
                    trending feed, discreetly slipped into top searches, as well as your own curated channel.
                </p>
            </Header>
            <Carousel />
            <Content />
        </CarouselContainer>
    )
}

export default PlatformCarousel
