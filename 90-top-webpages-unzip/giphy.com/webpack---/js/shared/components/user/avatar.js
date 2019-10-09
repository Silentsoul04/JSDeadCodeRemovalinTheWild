import styled from 'styled-components'
import resizeAvatar from 'shared/util/resize-avatar'

const DEFAULT_AVATAR_SIZE = 170

export default styled.a`
    background: no-repeat
        url(${props => resizeAvatar(props.avatar || props.avatar_url, props.size || DEFAULT_AVATAR_SIZE)}) center center;
    background-size: cover;
    display: block;
    height: ${props => props.size || DEFAULT_AVATAR_SIZE}px;
    margin-bottom: 20px;
    width: ${props => props.size || DEFAULT_AVATAR_SIZE}px;
`
