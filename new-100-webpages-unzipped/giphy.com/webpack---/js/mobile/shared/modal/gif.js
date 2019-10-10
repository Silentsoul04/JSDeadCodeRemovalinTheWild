import styled from 'styled-components'
import PropTypes from 'prop-types'

const GifContainer = styled.div `
    height: 100%;
    flex: 1;
    background: url(${props => props.src}) no-repeat center;
    background-size: contain;
    position: relative;
    img {
        -webkit-touch-callout: default;
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`

const ModalGif = ({
    src,
    width,
    className
}) => ( <
    GifContainer src = {
        src
    }
    style = {
        {
            width
        }
    }
    className = {
        className
    } >
    <
    img src = {
        src
    }
    /> <
    /GifContainer>
)

ModalGif.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
}
export default ModalGif