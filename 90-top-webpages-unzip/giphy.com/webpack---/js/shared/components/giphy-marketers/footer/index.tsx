import React from 'react'
import styled from 'styled-components'
import Media from 'react-media'
import { giphyPink, giphyIndigo, giphyDarkCharcoal, giphyWhite } from '@giphy/js-brand'
import GetInTouchButton from '../buttons/get-in-touch-button'
import { mobile } from 'shared/util/media-query'
import Arrow from '../icons/arrow'
import { tosLinks, containerWidth } from '../constants'
import { LazyLoadImage } from '../lazy-media'

const Section = styled.section`
    width: 100%;
`
const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    background: linear-gradient(-135deg, ${giphyPink} 0%, ${giphyIndigo} 100%);
    height: 435px;

    img {
        position: absolute;
        top: -80px;
        width: 160px;

        ${mobile.css`
            width: 80px;
            top: -40px;
        `}
    }

    ${mobile.css`
        height: 391px;
    `}
`

const Blurb = styled.div`
    width: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    > * {
        text-align: center;
    }

    p {
        font-size: 18px;
        margin-bottom: 30px;
    }

    ${mobile.css`
        width: 74%;

        p {
            font-size: 16px;
        }
    `}
`

const GiphyFooter = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: ${containerWidth}px;

    margin-bottom: 85px;

    ${mobile.css`
        width: 100%;
    `}
`

const Visit = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    a {
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    ${mobile.css`
        margin-bottom: 15px;
    `}
`

const ImageSpan = styled.span`
    padding: 0 10px;
    height: 18px;
    width: 100%;
    display: flex;
    img {
        object-fit: cover;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 100%;

    ${mobile.css`
        flex-direction: column-reverse;
        height: 100%;
    `}
`

const Copyright = styled.div`
    font-weight: 900;
    font-family: 'NexaBlack', serif;
    padding-right: 30px;

    ${mobile.css`
        padding: 0;
        font-size: 16px;
    `}
`

const ToS = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-left: 30px;
    border-left: 1px solid ${giphyDarkCharcoal};

    ${mobile.css`
        display: flex;
        flex-wrap: wrap;
        width: 100%
        text-align: center;
        padding: 0;
        border: none;
    `}
`

const ToSLink = styled.a`
    color: white;
    font-size: 16px;
    text-decoration: none;
    border-bottom: none;
    margin-right: 20px;
    opacity: 0.6;
    font-weight: normal;
    padding-bottom: 3px;

    &:hover {
        border-bottom: 1px solid ${giphyWhite};
    }

    &:last-child {
        margin-right: 0;
    }

    ${mobile.css`
        display: flex;
        margin-right: 30px;

        &:first-child {
            margin-left: 30px;
        }

        &:last-child {
            margin-right: 0;
        }
    `}
`

const Divider = styled.div`
    height: 1px;
    width: 192px;
    background: ${giphyDarkCharcoal};
    margin: 30px 0;
`

const Footer = () => (
    <Media query={mobile.query}>
        {matches => (
            <>
                <Section>
                    <Banner>
                        <LazyLoadImage src={'/static/img/giphy-marketers/diamond.gif'} />
                        <Blurb>
                            <h1>Let&rsquo;s transcend branded content while we redefine it!</h1>
                            <p>Contact our team for more information on how to become a marketer on GIPHY.</p>
                            <GetInTouchButton darkMode />
                        </Blurb>
                    </Banner>
                </Section>
                <GiphyFooter>
                    <Visit>
                        <a href="/">
                            Visit{' '}
                            <ImageSpan>
                                <LazyLoadImage src="/static/img/giphy-marketers/logo.png" />
                            </ImageSpan>
                        </a>
                        <Arrow rotate={270} />
                    </Visit>
                    <Links>
                        <Copyright>©2019 GIPHY, Inc.</Copyright>
                        {matches && <Divider />}
                        <ToS>
                            {tosLinks.map((item, index) => (
                                <ToSLink href={item.link} key={index}>
                                    {item.title}
                                </ToSLink>
                            ))}
                        </ToS>
                    </Links>
                </GiphyFooter>
            </>
        )}
    </Media>
)

export default Footer
