import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { giphyWhite } from '@giphy/js-brand'
import { PlaceholderText } from './sc'

const Container = styled(PlaceholderText)`
    user-select: none;
    overflow: hidden;
    background-color: ${giphyWhite};
    height: 100%;
    left: 0px;
    z-index: 0;
    top: 0;
`
const flipUp = keyframes`
 0% {
        transform: translateY(0);
    }
    45% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-50px);
    }
    95% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(-100px);
    }
`
const Text = styled.div`
    transform: translateY(0);
    animation: ${flipUp} 5s infinite;
    ${props =>
        !props.theme.isDesktop &&
        css`
            font-size: 15px;
            margin-top: -3px;
        `}
    p {
        line-height: 50px;
        margin: 0;
        ${props =>
            props.theme.isDesktop
                ? css`
                      margin-left: 17px;
                      margin-top: 1px;
                  `
                : css`
                      margin-left: 13px;
                      text-align: left;
                      user-select: none;
                  `}
    }
`
type Props = {
    placeholderText: string
    isDesktop: boolean
    rollInPlaceholderText: string
    onClick: () => void
    mobileRollInPlaceholderText: string
    mobilePlaceholderText: string
    showAnimationPlaceholder: boolean
}
const InputPlaceholderEducationAnimation = ({
    placeholderText,
    isDesktop,
    rollInPlaceholderText,
    onClick,
    mobileRollInPlaceholderText,
    mobilePlaceholderText,
    showAnimationPlaceholder,
}: Props) => (
    <div>
        <Container onClick={onClick} hidden={!showAnimationPlaceholder}>
            <Text>
                <p>{isDesktop ? rollInPlaceholderText : mobileRollInPlaceholderText}</p>
                <p>{isDesktop ? placeholderText : mobilePlaceholderText}</p>
                <p>{isDesktop ? rollInPlaceholderText : mobileRollInPlaceholderText}</p>
            </Text>
        </Container>
    </div>
)

export default InputPlaceholderEducationAnimation
