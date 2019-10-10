import styled from 'styled-components'
import {
    titleFont
} from 'shared/css/fonts.css'
import {
    giphyWhite
} from 'shared/css/colors.css'

export default styled.h1 `
    color: ${giphyWhite};
    font-family: ${titleFont};
    font-size: ${props => (props.theme.isSmall ? 30 : 36)}px;
    line-height: 1.1;
    margin: 0 0 16px;
    -webkit-font-smoothing: antialiased;
`