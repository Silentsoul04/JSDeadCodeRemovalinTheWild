import {
    keyframes,
    css
} from 'styled-components'
import {
    colors
} from '@giphy/react-giphy-brand'

const fadeOut = keyframes `
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const styles = css `
    .flash {
        padding: 15px;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 9999999;
        color: ${colors.giphyBlack};
        animation: ${fadeOut} 0.2s linear 3s forwards;
        text-align: center;
    }
    .flash.success {
        background-color: ${colors.giphyGreen};
    }

    .flash.error {
        background-color: ${colors.errorColor};
    }
`

export default styles