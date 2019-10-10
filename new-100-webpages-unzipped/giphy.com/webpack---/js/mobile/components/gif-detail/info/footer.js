import styled from 'styled-components'
import Header from './header'

export default styled(Header)
`
    bottom: 0;
    display: flex;
    line-height: 40px;
    top: auto;

    &:before {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
        bottom: 0;
        top: auto;
    }
`