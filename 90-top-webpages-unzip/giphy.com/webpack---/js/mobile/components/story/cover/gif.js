import styled from 'styled-components'
import { getUrl } from 'shared/util/gif-extract'

export default styled.div`
    background: no-repeat url(${props => getUrl(props.gif, props.isActive ? 'original' : 'original_still')}) center
        center;
    background-size: cover;
    height: 100%;
    left: 0;
    opacity: 0.1;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
`
