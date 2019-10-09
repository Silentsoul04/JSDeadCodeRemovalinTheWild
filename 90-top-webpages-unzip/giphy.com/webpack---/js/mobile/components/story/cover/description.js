import styled from 'styled-components'

export default styled.p`
    font-size: ${props => (props.theme.isSmall ? 14 : 16)}px;
    font-weight: bold;
    line-height: ${props => (props.theme.isSmall ? 1.3 : 1.4)};
    margin: 0 0 20px;
    -webkit-font-smoothing: antialiased;
`
