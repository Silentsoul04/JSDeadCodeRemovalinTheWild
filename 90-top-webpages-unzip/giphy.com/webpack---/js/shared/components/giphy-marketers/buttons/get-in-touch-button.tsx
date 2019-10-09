import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { giphyRed, giphyPurple, twitterColor } from '@giphy/js-brand'
import { mobile } from 'shared/util/media-query'

const slideAnimation = keyframes`
    0% {background-position: 0;}
  100% {background-position: -300%;}
`

const GetInTouchButton = styled.a<GITButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: 'interface', serif;
    font-size: 18px;
    background: linear-gradient(to right, ${giphyPurple}, ${giphyRed}, ${giphyPurple});
    background-size: 300%;
    background-position: 0% 100%;
    height: 42px;
    width: 176px;
    cursor: pointer;

    &:hover {
        animation: ${slideAnimation} 3s infinite linear;
    }

    ${({ darkMode }) =>
        darkMode &&
        css`
            background: black;
            color: ${twitterColor};
            width: 285px;

            &:hover {
                animation: none;
            }

            ${mobile.css`
                width: 305px;
                font-size: 16px;
            `}
        `}

    ${mobile.css`
        width: 100%;
    `}
`
type GITButtonProps = {
    darkMode?: boolean
}

const GITButton = ({ darkMode }: GITButtonProps) => (
    <GetInTouchButton href="https://giphy.typeform.com/to/RUb4pO" target="_blank" darkMode={darkMode}>
        Get in Touch
    </GetInTouchButton>
)

export default GITButton
