import { createGlobalStyle } from 'styled-components'
import { giphyWhite } from '@giphy/js-brand'
import { mobile } from 'shared/util/media-query'

const GiphyMarketingStyles = createGlobalStyle`
    body {
        margin: 0;
        width: 100%;
        color: ${giphyWhite};
        background: black;
    }

    body, html {
        text-align: unset;
    }

    a {
        text-decoration: none;
        border-bottom: none;
        font-size: 16px;
        font-weight: bold;
        font-family: 'interface', serif;
    }

    h1 {
        font-family: 'NexaBlack', serif;
        font-size: 46px;
        line-height: 54px;
        margin-bottom: 20px;
    }

    h3 {
        font-family: 'interface', serif;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 0px;
        text-transform: none;
    }

    h6 {
        font-family: 'interface', serif,
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        text-align: center;
        margin-bottom: 5px;
    }

    p {
        font-family: 'interface';
        font-size: 18px;
        font-weight: normal;
        letter-spacing: 0.4px;
        line-height: 26px;
        opacity: 0.8;
    }

    section {
        margin: 0px;
        padding: 0px;
        border-width: 0px;
    }

    ${mobile.css`
        h1 {
            font-size: 32px;
            line-height: 38px;
            margin-bottom: 15px;
        }

        p {
            letter-spacing: 0px;
            font-size: 18px;
        }
    `}
`

export default GiphyMarketingStyles
