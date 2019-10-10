import React from 'react'
import styled from 'styled-components'
import Media from 'react-media'
import { mobile } from 'shared/util/media-query'
import { containerWidth } from '../constants'
import GetInTouchButton from '../buttons/get-in-touch-button'
import Arrow from '../icons/arrow'
import { LazyLoadImage } from '../lazy-media'

const Section = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;

    ${mobile.css`
        overflow: hidden;
    `}
`

const Background = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;

    img {
        width: 100%;
        height: 100%;
    }

    ${mobile.css`
        img {
            width: 100%
        }
    `}
`

const Container = styled.div`
    width: ${containerWidth}px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    h1 {
        height: 108px;
        width: 509px;
    }

    p {
        height: 78px;
        width: 429px;
    }

    ${mobile.css`
        width: 100%;
        top: 20%;
        box-sizing: border-box;
        padding: 0 15px 50px;

        h1 {
            height: 76px;
            width: 351px;
        }

        p {
            height: 104px;
            width: 333px;
            margin-bottom: 25px;
        }

        svg {
            align-self: center;
            margin-top: 20px;
        }
    `}
`

const Header = () => (
    <Section>
        <Media query={mobile.query}>
            {matches => (
                <>
                    <Background>
                        <LazyLoadImage
                            src={
                                matches
                                    ? '/static/img/giphy-marketers/marketing-landing-page-header-mobile.jpg'
                                    : '/static/img/giphy-marketers/marketing-landing-page-header.jpg'
                            }
                        />
                    </Background>
                    <Container>
                        <h1>Make content conversational</h1>
                        <p>
                            GIPHY enables brands to animate conversations by delivering culturally relevant content
                            across the world&rsquo;s largest messaging and social apps.
                        </p>
                        {matches && <GetInTouchButton />}
                        {matches && <Arrow />}
                    </Container>
                </>
            )}
        </Media>
    </Section>
)

export default Header
