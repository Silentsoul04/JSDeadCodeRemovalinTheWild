import styled from 'styled-components'
import { titleFont } from 'shared/css/fonts.css'
import { giphyWhite } from 'shared/css/colors.css'

export default styled.h2`
    color: ${giphyWhite};
    font-family: ${titleFont};
    font-size: ${({ theme }) => (theme.isShort ? 22 : theme.isSmall ? 24 : 30)}px;
    line-height: 1.1;
    margin: 0 0 16px;
    -webkit-font-smoothing: antialiased;
`
