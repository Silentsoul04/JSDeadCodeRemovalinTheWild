import styled, { css } from 'styled-components'
import React, { useState, useEffect } from 'react'
import Media from 'react-media'
import { mobile } from 'shared/util/media-query'
import { containerWidth } from '../../constants'
import CarouselArrow from '../../icons/carousel-arrow'
import { giphyIndigo, giphyPink, giphyBlack } from '@giphy/js-brand'
import Observer from 'shared/components/observer'

const inbetweenColor1 = '#8652EB'
const inbetweenColor2 = '#BA4CCF'
const SLIDE_COUNT = 3
const SLIDE_WIDTH_DESKTOP = 1200
const SLIDE_WIDTH_MOBILE = 100 // technically a percentage to fit all the mobile devices
const slideMarginRight = 30

const slideContent = [
    {
        src: '/static/img/giphy-marketers/carousel/ourproducts-1.mp4',
        background: `linear-gradient(${giphyIndigo}, ${inbetweenColor1})`,
    },
    {
        src: '/static/img/giphy-marketers/carousel/ourproducts-2.mp4',
        background: `linear-gradient(${inbetweenColor1}, ${inbetweenColor2})`,
    },
    {
        src: '/static/img/giphy-marketers/carousel/ourproducts-3.mp4',
        background: `linear-gradient(${inbetweenColor2}, ${giphyPink})`,
    },
]

const CarouselSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    overflow: hidden;
`

const Viewport = styled.div`
    width: ${containerWidth}px;
    height: 100%;
    align-items: center;
    display: flex;

    ${mobile.css`
        width: 100%;
    `}
`

const Slides = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

const Slide = styled.div`
    height: 100%;

    ${mobile.css`
        video {
            width: 100vw;
            height: 100%;
        }
    `}
`

const Arrows = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    z-index: 1;

    ${mobile.css`
        height: unset;
        z-index: 0;
    `}
`

const Arrow = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 100px;
    height: 100%;
    cursor: pointer;

    ${mobile.css`
        padding: 0 30px;
    `}

    svg {
        filter: drop-shadow(3px 3px 3px ${giphyBlack});
    }
`

const Breadcrumbs = styled.div`
    display: flex;
    flex-direction: column;

    h6 {
        margin-bottom: 10px;
    }

    ${mobile.css`
        position: relative;
        width: 100%;
        justify-content: center;
        align-items: center;
    `}
`

const Lines = styled.div`
    display: flex;

    span {
        display: flex;
        align-items: center;
        height: 15px;
        margin-right: 5px;
        cursor: pointer;
    }
`

type LineProps = {
    isActive: boolean
    background: string
}
const Line = styled.div<LineProps>`
    width: 70px;
    height: 3px;
    background: ${({ background }) => background};
    opacity: 0.3;

    &:last-child {
        margin-right: 0;
    }

    ${({ isActive }) =>
        isActive &&
        css`
            opacity: 1;
            transition: opacity 300ms ease-in-out;
        `}
`

const Carousel = () => {
    const [count, setCount] = useState(0)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    useEffect(() => {
        // javascript does not handle modular arithmetic with negative numbers correctly
        setCurrentSlideIndex(((count % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT)
    }, [count])

    return (
        <CarouselSection>
            <Media query={mobile.query}>
                {matches => (
                    <>
                        <Container>
                            <Viewport>
                                <Slides
                                    style={{
                                        // 30 is half the difference between the container and video widths
                                        // it centers the graphic in the container on desktop
                                        transform: matches
                                            ? `translateX(${-(SLIDE_WIDTH_MOBILE * currentSlideIndex)}%)`
                                            : `translateX(${-(
                                                  SLIDE_WIDTH_DESKTOP * currentSlideIndex +
                                                  slideMarginRight
                                              )}px)`,
                                        transition: 'transform 500ms ease-in-out',
                                    }}
                                >
                                    <Observer
                                        onVisibleChange={() => null}
                                        style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center' }}
                                    >
                                        {slideContent.map((slide, index) => (
                                            <Slide
                                                style={{
                                                    opacity: index === currentSlideIndex ? 1 : 0.15,
                                                    transition: 'opacity 500ms ease-in-out',
                                                }}
                                                key={index}
                                            >
                                                <video autoPlay loop muted playsInline>
                                                    <source src={slide.src} type="video/mp4" />
                                                </video>
                                            </Slide>
                                        ))}
                                    </Observer>
                                </Slides>
                            </Viewport>
                            {!matches && (
                                <Arrows>
                                    <Arrow
                                        onClick={() => {
                                            setCount(count - 1)
                                        }}
                                    >
                                        <CarouselArrow />
                                    </Arrow>
                                    <Arrow
                                        onClick={() => {
                                            setCount(count + 1)
                                        }}
                                    >
                                        <CarouselArrow rotate={180} />
                                    </Arrow>
                                </Arrows>
                            )}
                        </Container>
                        <Breadcrumbs>
                            {matches && (
                                <Arrows>
                                    <Arrow
                                        onClick={() => {
                                            setCount(count - 1)
                                        }}
                                    >
                                        <CarouselArrow size={{ width: 9, height: 18 }} />
                                    </Arrow>
                                    <Arrow
                                        onClick={() => {
                                            setCount(count + 1)
                                        }}
                                    >
                                        <CarouselArrow size={{ width: 9, height: 18 }} rotate={180} />
                                    </Arrow>
                                </Arrows>
                            )}
                            <h6>
                                {currentSlideIndex + 1}/{SLIDE_COUNT}
                            </h6>
                            <Lines>
                                {slideContent.map((slide, index) => (
                                    <span
                                        onClick={() => {
                                            setCount(index)
                                        }}
                                        key={index}
                                    >
                                        <Line isActive={index === currentSlideIndex} background={slide.background} />
                                    </span>
                                ))}
                            </Lines>
                        </Breadcrumbs>
                    </>
                )}
            </Media>
        </CarouselSection>
    )
}

export default Carousel
