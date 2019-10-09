import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(36px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-36px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export default styled.p`
    animation: ${props => (props.isPrevious ? slideDown : slideUp)} 0.4s ease-in-out;
    box-sizing: border-box;
    bottom: 100%;
    font-size: 18px;
    font-weight: bold;
    left: 0;
    line-height: 1.3;
    padding: 10px;
    position: absolute;
    text-align: left;
    -webkit-font-smoothing: antialiased;
`
