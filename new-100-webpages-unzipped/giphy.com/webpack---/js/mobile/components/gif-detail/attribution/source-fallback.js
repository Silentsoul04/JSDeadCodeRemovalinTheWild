import styled from 'styled-components'
import {
    colors
} from '@giphy/react-giphy-brand'
import {
    avatarSize
} from 'shared/components/users/public-user.css'

const AVATAR_SIZE = parseInt(avatarSize)

const Container = styled.a `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: ${AVATAR_SIZE}px;
    justify-content: center;
    padding-left: ${AVATAR_SIZE + 10}px;
    position: relative;
    text-align: left;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

const Label = styled.div `
    color: ${colors.giphyLightestGrey};
    font-size: 14px;
    line-height: 14px;
    margin-top: 2px;
`

const Source = styled.div `
    display: block;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const Icon = styled.div `
    background: ${colors.giphyDarkestGrey};
    font-size: 24px;
    height: ${AVATAR_SIZE}px;
    left: 0;
    line-height: ${AVATAR_SIZE + 4}px;
    position: absolute;
    text-align: center;
    top: 0;
    width: ${AVATAR_SIZE}px;
`

const SourceAttributionFallback = ({
    source = '',
    sourceFull = ''
}) => {
    return source ? ( <
        Container href = {
            sourceFull
        }
        target = "_blank" >
        <
        Icon className = "ss-globe" / >
        <
        Label > Source < /Label> <
        Source > {
            source
        } < /Source> <
        /Container>
    ) : null
}

export default SourceAttributionFallback