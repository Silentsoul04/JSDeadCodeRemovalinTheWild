import styled from 'styled-components'
import {
    colors
} from '@giphy/react-giphy-brand'

export const FILTERS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

const Container = styled.div `
    display: flex;
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
`

const Filter = styled.a `
    color: ${props => (props.active ? colors.giphyWhite : colors.giphyLightCharcoal)};
    display: block;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 10px;
    text-align: left;
    text-transform: uppercase;
    width: 100%;

    &:hover {
        color: ${colors.giphyWhite};
    }
`

const ArtistFilters = ({
    filter
}) => ( <
    Container >
    <
    Filter href = "/artists"
    active = {!filter
    } >
    All <
    /Filter> <
    Filter href = "/artists/123"
    active = {
        filter === '123'
    } > {
        `#`
    } < /Filter> {
        FILTERS.map(letter => ( <
            Filter key = {
                letter
            }
            active = {
                letter === filter
            }
            href = {
                `/artists/${letter}`
            } > {
                letter
            } <
            /Filter>
        ))
    } <
    /Container>
)

export default ArtistFilters