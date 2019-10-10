import styled from 'styled-components'
import {
    Attribution
} from '@giphy/react-giphy-brand'

const Container = styled.div `
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;

    &:before {
        content: '';
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
        bottom: 0;
        height: 70px;
        left: 0;
        pointer-events: none;
        position: absolute;
        width: 100%;
    }
`

const User = styled.div `
    bottom: 10px;
    left: 10px;
    position: absolute;
    right: 10px;
`

const ArtistInfo = ({
    user = {}
}) => ( <
    Container >
    <
    User >
    <
    Attribution user = {
        user
    }
    /> <
    /User> <
    /Container>
)

export default ArtistInfo