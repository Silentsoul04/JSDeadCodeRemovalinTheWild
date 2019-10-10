import styled from 'styled-components'
import {
    grid6
} from 'shared/css/grid.css'

const Container = styled.p `
    line-height: 1.4;
    margin: 0 0 20px;
    max-width: ${grid6};
    padding: ${props => (props.padded ? '6px' : '0')};
`

const Description = ({
    padded
}) => ( <
    Container padded = {
        padded
    } >
    GIPHY artists make fun, unique, and original artwork and share it via GIPHY.Explore the directory to meet them all!
    <
    /Container>
)

export default Description