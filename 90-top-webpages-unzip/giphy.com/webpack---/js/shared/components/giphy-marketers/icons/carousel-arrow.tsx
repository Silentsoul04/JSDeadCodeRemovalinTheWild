import React from 'react'
import styled from 'styled-components'

type SVGCarouselArrowProps = {
    rotate: number
}
const SVGCarouselArrow = styled.svg<SVGCarouselArrowProps>`
    transform: rotate(${({ rotate }) => rotate}deg);
`

type CarouselArrowProps = {
    rotate?: number
    size?: {
        width: number
        height: number
    }
}
const CarouselArrow = ({ size = { width: 20, height: 40 }, rotate = 0 }: CarouselArrowProps) => (
    <SVGCarouselArrow
        width={size.width}
        height={size.height}
        viewBox="0 0 20 40"
        rotate={rotate}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="Landing-Page-Final" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
                id="carousel-2---content"
                transform="translate(-20.000000, -664.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
            >
                <g id="What's-In-the-Kit-Carousel" transform="translate(-7.000000, 115.000000)">
                    <g id="Carousel" transform="translate(0.000000, 204.000000)">
                        <g id="Arrows" transform="translate(27.000000, 345.000000)">
                            <polygon
                                id="Shape"
                                transform="translate(10.000000, 20.000000) scale(-1, 1) translate(-10.000000, -20.000000) "
                                points="20 20.0000023 18.9154709 18.740847 2.6901171 0 0 2.51830132 15.1408247 20.0000023 0 37.4816987 2.6901171 40 18.9154709 21.259153"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SVGCarouselArrow>
)

export default CarouselArrow
