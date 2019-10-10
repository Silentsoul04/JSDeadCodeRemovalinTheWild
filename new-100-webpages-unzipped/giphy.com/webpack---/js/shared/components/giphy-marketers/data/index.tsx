import React from 'react'
import styled from 'styled-components'
import { mobile } from 'shared/util/media-query'
import { giphyIndigo, twitterColor, giphyDarkGrey, giphyLightGrey, giphyPink, giphyPurple } from '@giphy/js-brand'
import { containerWidth, headerParagraphFontSize } from '../constants'
import Media from 'react-media'
import { LazyLoadImage } from '../lazy-media'

const giphyGraphDesktopWidth = '450px'
const giphyGraphMobileWidth = '80vw'

const DataSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${containerWidth}px;

    ${mobile.css`
        width: 100%;
        box-sizing: border-box;
        padding: 0 15px;
    `}
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
    }

    p {
        text-align: center;
        font-size: ${headerParagraphFontSize}px;
    }

    ${mobile.css`
        margin-bottom: 50px;

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
    width: 750px;
    margin: 75px 0 90px;

    ${mobile.css`
        width: 100%;
        margin: 0 0 45px;
    `}
`

const DataRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 95px;

    h3 {
        line-height: 30px;
    }

    &:last-child {
        flex-direction: row-reverse;
        margin-bottom: 0;

        h1 {
            color: ${giphyPurple};
            text-align: end;
        }

        h3 {
            text-align: end;
        }

        ${mobile.css`
            flex-direction: column;
            align-items: flex-end;

            h3 {
                width: 300px;
            }
        `}
    }

    ${mobile.css`
        flex-direction: column;
        margin-bottom: 45px;

        h3 {
            width: 250px;
        }
    `}
`

const DataBlurb = styled.div`
    flex-basis: 30%;

    ${mobile.css`
        margin-bottom: 30px;
    `}
`

const Figure = styled.h1`
    font-size: 80px;
    color: ${giphyIndigo};

    ${mobile.css`
        font-size: 64px;
        margin-bottom: 20px;
    `}
`

const DataGraph = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin-bottom: 10px;
    }
`

const GiphyGraph = styled.div`
    div {
        border-radius: 30px;
        width: 450px;
        height: 11px;

        ${mobile.css`
            width: 80vw;
        `}
    }

    h6 {
        display: flex;
        align-items: flex-end;

        img {
            width: 30px;
        }
    }
`

const OtherGraph = styled.div`
    h6 {
        color: ${giphyLightGrey};
        opacity: 0.5;
    }
    div {
        background: linear-gradient(45deg, ${giphyDarkGrey} 0%, #4e4e4e 100%);
        border-radius: 30px;
        height: 11px;

        ${mobile.css`
            width: 200px;
        `}
    }
`

const Disclaimer = styled.div`
    width: 100%;
    color: ${giphyLightGrey};

    p {
        text-align: center;
        font-size: 14px;
        font-style: italic;

        strong {
            font-weight: bold;
            font-style: normal;
        }
    }
`

const Data = () => {
    return (
        <Media query={mobile.query}>
            {matches => (
                <DataSection id="results">
                    <Container>
                        <Header>
                            <LazyLoadImage src={'/static/img/giphy-marketers/smirk.gif'} />
                            <h1>Nice Numbers</h1>
                            <p>Branded content on GIPHY drives proven results.</p>
                        </Header>
                        <Content>
                            <DataRow>
                                <DataBlurb>
                                    <Figure>1.5x</Figure>
                                    <h3>More engaging than social feed ads</h3>
                                </DataBlurb>
                                <DataGraph>
                                    <GiphyGraph>
                                        <h6>
                                            GIPHY <LazyLoadImage src={'/static/img/giphy-marketers/fire.gif'} />
                                        </h6>
                                        <div
                                            style={{
                                                background: `linear-gradient(-225deg, ${twitterColor} 0%, ${giphyIndigo} 100%)`,
                                            }}
                                        />
                                    </GiphyGraph>
                                    <OtherGraph>
                                        <h6>Social Feed</h6>
                                        <div
                                            style={{
                                                width: `calc(${
                                                    matches ? giphyGraphMobileWidth : giphyGraphDesktopWidth
                                                } * 0.667)`,
                                            }}
                                        />
                                    </OtherGraph>
                                </DataGraph>
                            </DataRow>
                            <DataRow>
                                <DataBlurb style={{ flexBasis: !matches ? '40%' : '30%', alignItems: 'flex-end' }}>
                                    <Figure>2.6x</Figure>
                                    <h3>More engaging than publisher branded content</h3>
                                </DataBlurb>
                                <DataGraph>
                                    <GiphyGraph style={{ alignItems: matches ? 'flex-end' : 'unset' }}>
                                        <h6>
                                            {matches ? (
                                                <>
                                                    <LazyLoadImage src={'/static/img/giphy-marketers/fire.gif'} /> GIPHY
                                                </>
                                            ) : (
                                                <>
                                                    GIPHY <LazyLoadImage src={'/static/img/giphy-marketers/fire.gif'} />
                                                </>
                                            )}
                                        </h6>
                                        <div
                                            style={{
                                                background: `linear-gradient(-225deg, ${giphyPink} 0%, ${giphyPurple} 100%)`,
                                            }}
                                        />
                                    </GiphyGraph>
                                    <OtherGraph style={{ alignItems: matches ? 'flex-end' : 'unset' }}>
                                        <h6>Publisher Branded Content</h6>
                                        <div
                                            style={{
                                                width: `calc(${
                                                    matches ? giphyGraphMobileWidth : giphyGraphDesktopWidth
                                                } * 0.38)`,
                                            }}
                                        />
                                    </OtherGraph>
                                </DataGraph>
                            </DataRow>
                        </Content>
                        <Disclaimer>
                            <p>
                                <strong>Source</strong>: Emarketer Branded Digital Content Performance Metrics in Select
                                Countries: Average Time Spent and CTR, by Device, Q4 2017.
                            </p>
                            <p>
                                <strong>Notes</strong>: Branded content refers to custom, partner, or sponsored content,
                                or the post-click landing page within a publisher&rsquo;s environment; social feed ads
                                refer to Instagram, Twitter, & Facebook.
                            </p>
                        </Disclaimer>
                    </Container>
                </DataSection>
            )}
        </Media>
    )
}

export default Data
