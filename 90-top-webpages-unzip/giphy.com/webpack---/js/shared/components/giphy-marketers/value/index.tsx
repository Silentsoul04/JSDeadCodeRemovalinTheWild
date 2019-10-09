import React from 'react'
import styled, { css } from 'styled-components'
import { blockTextHeight, containerWidth, sectionMargin, sectionMobileMargin } from '../constants'
import { mobile } from 'shared/util/media-query'
import Media from 'react-media'
import { LazyLoadImage } from '../lazy-media'

const blockRowWidth = 320

const rowsInfo = [
    {
        title: 'Reach people who want to be reached',
        hasSnippet: true,
        text: (
            <p>
                Over
                <b>
                    <i> 500 million people </i>
                </b>
                use GIPHY every day to communicate with GIFs and Stickers. Share your brand&rsquo;s GIFs with this
                highly engaged, receptive audience.
            </p>
        ),
        src: '/static/img/giphy-marketers/amazon-cropped.gif',
        altText: 'amazon marketing gif',
        isReverse: true,
    },
    {
        title: 'Promote creative that people want to share',
        hasSnippet: true,
        text: (
            <p>
                GIPHY Studios is the authority on short-form content. Their award winning work has led to branded
                content that has
                <b>
                    <i> 4.8 times higher </i>
                </b>
                engagement than that of traditional display.
            </p>
        ),
        src: '/static/img/giphy-marketers/bubly-cropped.gif',
        altText: 'bubbly happy birthday gif',
        isReverse: false,
        hasSticker: true,
        stickerSrc: '/static/img/giphy-marketers/happy-birthday.gif',
        topLeft: true,
    },
    {
        title: 'Decisions backed by insights',
        text:
            'GIPHY has the data and tools to help guide your branded content strategy and maximize your paid investment.',
        src: '/static/img/giphy-marketers/starbucks-cropped.gif',
        altText: 'example starbucks marketing gif',
        isReverse: true,
        hasSticker: true,
        stickerSrc: '/static/img/giphy-marketers/yes-please.gif',
        bottomRight: true,
    },
]

const Section = styled.section`
    width: 100%;
    background-image: linear-gradient(0deg, #833c52 0%, #c1639d 35%, #8d61cd 66%, #5d5ef6 100%);
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${containerWidth}px;
    margin: ${sectionMargin}px 0;

    ${mobile.css`
            margin: ${sectionMobileMargin}px 0;
        `}
`

const ValueGif = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
        ${mobile.css`
            width: 80px;
        `}
    }
`

const Blurb = styled.div`
    width: 650px;
    margin-bottom: 75px;

    p {
        text-align: center;
        margin-bottom: 0;
        line-height: 28px;
        font-size: 22px;
    }

    ${mobile.css`
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        margin-bottom: 40px;

        p {
            font-size: 18px;
        }
    `}
`

const Blocks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

type BlockRowProps = {
    isReverse: boolean
}
const BlockRow = styled.div<BlockRowProps>`
    display: flex;
    flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
    margin-bottom: 20px;
    height: ${blockTextHeight}px;
    justify-content: space-between;

    ${mobile.css`
        height: 100%;
        width: ${blockRowWidth}px;
        flex-direction: column;
        margin: 20px 0;
    `}

    ${({ isReverse }) =>
        isReverse
            ? mobile.css`
                align-self: flex-start;
            `
            : mobile.css`
                align-self: flex-end;
                align-items: flex-end;
                text-align: right;
            `};
`

const BlockImage = styled.div`
    flex-basis: 48%;
    position: relative;
    height: ${blockTextHeight}px;

    ${mobile.css`
        height: auto;
        width: 302px;
    `}
`

const PlaceHolderImg = styled.img<{ isReverse: boolean }>`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    ${({ isReverse }) =>
        isReverse
            ? css`
                  right: 0;
              `
            : css`
                  left: 0;
              `}

    ${mobile.css`
        height: auto;
        position: unset;
    `}
`

const Sticker = styled.img<{ topLeft?: boolean; bottomRight?: boolean }>`
    position: absolute;

    ${({ topLeft }) =>
        topLeft &&
        css`
            width: 168px;
            top: -78px;
            left: -82px;

            ${mobile.css`
                width: 96px;
                top: -34px;
                left: -42px;
            `}
        `}

    ${({ bottomRight }) =>
        bottomRight &&
        css`
            width: 177px;
            bottom: -72px;
            right: -70px;

            ${mobile.css`
                width: 96px;
                bottom: -32px;
                right: -38px;
            `}
        `}
`

const BlockText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-basis: 48%;
    height: ${blockTextHeight}px;

    ${mobile.css`
        height: auto;
        padding: 25px 14px 0;
    `}
`

type InfoProps = BlockRowProps
const Info = styled.div<InfoProps>`
    display: flex;
    flex-direction: column;
    width: 400px;

    p {
        width: 413px;
        opacity: 1;

        b {
            font-weight: bold;
        }

        i {
            font-style: italic;
        }
    }

    ${({ isReverse }) =>
        isReverse &&
        mobile.css`
            align-items: flex-end;
        `};

    ${mobile.css`
        width: 100%;

        p {
            width: unset;
        }
    `}
`

const Title = styled.h3`
    margin: 0 0 15px;
    width: 100%;
    line-height: 30px;
    height: auto;
`

type Props = {
    translateY: string
}

const SDKValue = ({ translateY }: Props) => {
    return (
        <Media query={mobile.query}>
            {matches => (
                <Section id="whygiphy">
                    <Container style={{ transform: !matches ? 'none' : `translate3d(0, ${translateY}, 0)` }}>
                        <ValueGif>
                            <LazyLoadImage src={'/static/img/giphy-marketers/animated-logo.gif'} />
                            <h1>Why GIPHY?</h1>
                        </ValueGif>
                        <Blurb>
                            <p>
                                GIPHY is not only the world&rsquo;s first and largest GIF platform– we&rsquo;ve become
                                the best way for brands to build meaningful relationships with their audience & create
                                content that&rsquo;s truly conversational.
                            </p>
                        </Blurb>
                        <Blocks>
                            {rowsInfo.map(
                                (
                                    {
                                        title,
                                        hasSnippet,
                                        text,
                                        src,
                                        altText,
                                        isReverse,
                                        hasSticker,
                                        stickerSrc,
                                        topLeft,
                                        bottomRight,
                                    },
                                    index,
                                ) => (
                                    <BlockRow isReverse={isReverse} key={index}>
                                        <BlockImage>
                                            <PlaceHolderImg isReverse={isReverse} src={src} alt={altText} />
                                            {hasSticker && (
                                                <Sticker src={stickerSrc} topLeft={topLeft} bottomRight={bottomRight} />
                                            )}
                                        </BlockImage>
                                        <BlockText>
                                            <Info isReverse={!isReverse}>
                                                <Title>{title}</Title>
                                                {hasSnippet ? text : <p>{text}</p>}
                                            </Info>
                                        </BlockText>
                                    </BlockRow>
                                ),
                            )}
                        </Blocks>
                    </Container>
                </Section>
            )}
        </Media>
    )
}

export default SDKValue
