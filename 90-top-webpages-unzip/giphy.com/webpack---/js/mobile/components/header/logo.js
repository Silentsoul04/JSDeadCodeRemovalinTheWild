import styled from 'styled-components'
import { giphyYellow, giphyBlue, giphyRed, giphyGreen, giphyPurple } from 'shared/css/colors.css'

const Logo = styled.svg`
    display: block;
    height: 26px;
    width: 21px;
    margin-right: 6px;
    flex-shrink: 0;

    .shadow {
        fill: #000;
        enable-background: new;
        opacity: 0.4;
    }
`

export default () => (
    <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 35" itemProp="logo">
        <g fillRule="evenodd" clipRule="evenodd">
            <path fill={giphyGreen} d="M0 3h4v29H0z" />
            <path fill={giphyPurple} d="M24 11h4v21h-4z" />
            <path fill={giphyBlue} d="M0 31h28v4H0z" />
            <path fill={giphyYellow} d="M0 0h16v4H0z" />
            <path fill={giphyRed} d="M24 8V4h-4V0h-4v12h12V8" />
            <path className="shadow" d="M24 16v-4h4M16 0v4h-4" />
        </g>
    </Logo>
)
