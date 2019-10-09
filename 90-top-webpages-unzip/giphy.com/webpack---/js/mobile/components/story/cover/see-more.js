import styled, { keyframes } from 'styled-components'
import { giphyWhite } from 'shared/css/colors.css'

const ArrowAnimation = keyframes`
    0% { transform: translateX(0px); }
    100% { transform: translateX(-6px); }
`

const DotAnimation = keyframes`
    0% { transform: translateX(0px); }
    100% { transform: translateX(-3px); }
`

const Container = styled.div`
    color: ${giphyWhite};
    font-size: 14px;
    bottom: 20px;
    display: ${props => (props.theme.isShort ? 'none' : 'block')};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    margin-bottom: 24px;

    svg {
        display: block;
        margin: 0 auto 8px;
        overflow: visible;
    }

    path[data-arrow] {
        animation: ${ArrowAnimation} 1s ease-in-out 0s infinite alternate;
    }

    circle[data-dot] {
        animation: ${DotAnimation} 1s ease-in-out 0s infinite alternate;
    }
`

const SeeMore = ({ children }) => (
    <Container>
        <svg width="17" height="34" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(90 8.25 8.75)" fill="#FFF" fillRule="evenodd">
                <circle cx="31" cy="8.5" r="2" />
                <circle data-dot cx="25" cy="8.5" r="2" />
                <path
                    data-arrow
                    d="M5.358 10H20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5.358l4.782-4.912a.345.345 0 0 0 .099-.253.345.345 0 0 0-.1-.253L8.68.1a.402.402 0 0 0-.254-.1.393.393 0 0 0-.247.1L.098 8.243A.368.368 0 0 0 0 8.5c0 .1.033.185.099.257L8.178 16.9c.066.072.15.108.251.108a.325.325 0 0 0 .25-.108l1.46-1.482a.345.345 0 0 0 .1-.253.345.345 0 0 0-.1-.253L5.359 10z"
                />
            </g>
        </svg>
        {children}
    </Container>
)

export default SeeMore
