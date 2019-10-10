import React from 'react'
import styled from 'styled-components'
import { mobile } from 'shared/util/media-query'
import { headerParagraphFontSize } from '../constants'
import { LazyLoadImage, LazyLoadVideo } from '../lazy-media'

const AdGridContainer = styled.section`
    width: 100%;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(180deg, #833c52 0%, #080405 100%);

    img {
        width: 112px;
    }

    p {
        text-align: center;
        line-height: 30px;
        width: 573px;
        font-size: ${headerParagraphFontSize}px;
    }

    ${mobile.css`
        p {
            width: 100%;
            font-size: 18px;
        }

        img {
            width: 80px;
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

const AdGrid = () => {
    return (
        <AdGridContainer id="content">
            <Header>
                <LazyLoadImage src={'/static/img/giphy-marketers/hair-flip.gif'} />
                <h1>Campaign&rsquo;d Content</h1>
                <p>Enough talk, here are just a few of the campaigns that we&rsquo;ve brought to life.</p>
            </Header>
            <Content>
                <LazyLoadVideo src={'/static/img/giphy-marketers/giphy-adgrid_web_compressed.mp4'} />
            </Content>
        </AdGridContainer>
    )
}

export default AdGrid
