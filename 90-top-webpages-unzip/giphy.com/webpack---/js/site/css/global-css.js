import { css, createGlobalStyle } from 'styled-components'
import { colors } from '@giphy/react-giphy-brand'
import reset from 'styled-reset'
import giphyIcons from './giphy-icon'
import socialIcons from './social'
import ssStandard from './ss-standard'
import fonts from './fonts'
import flashMessage from 'shared/css/flash-message'

const tags = css`
    body {
        background-color: ${colors.giphyBlack};
        color: ${colors.giphyWhite};
        font-family: 'interface', 'Helvetica Neue', helvetica, sans-serif;
        font-size: 16px;
        font-weight: normal;
        height: 100%;
        letter-spacing: 0;
        margin: 0 auto;
        min-height: 500px;
        overflow-y: scroll;
        text-align: left;
        width: 1040px;
        min-width: 1040px;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        line-height: unset;
        list-style: none;
    }

    * {
        border-radius: 0;
        border: 0;
        outline: none;
        box-sizing: border-box;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: inherit;
    }

    p {
        margin: 10px 0;
        text-align: left;
    }

    input {
        width: 100%;
        height: 40px;
        margin: 0 0 10px 0;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        color: #000;
        padding: 0 10px;
        outline: none;
    }

    button {
        color: ${colors.giphyWhite};
        background-color: ${colors.giphyDarkestGrey};
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 700;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        text-align: center;
        text-transform: none;
    }

    h3 {
        text-align: left;
        font-size: 16px;
        text-transform: capitalize;
        margin: 15px 0 10px 0;
        font-weight: 700;
    }

    textarea {
        width: 100%;
        height: 80px;
    }
    a {
        color: ${colors.giphyBlue};
    }
`

const DesktopGlobalCSS = createGlobalStyle`
${reset}
${fonts}
${tags}
${ssStandard}
${socialIcons}
${giphyIcons}
${flashMessage}
`

export default DesktopGlobalCSS
