import styled from 'styled-components'
import FooterContainer from '../../shared/modal/footer-container'

// to position the content at the bottom.
// could have flex-ended overlay-manager,
// but don't want to over configure
const Container = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`
const Footer = styled(FooterContainer)
`
    position: relative;
`

const Background = styled.div `
    position: absolute;
    z-index: -1;
    right: -100px;
    left: -100px;
    bottom: -100px;
    top: -20px;
    background-color: black;
    opacity: 0.9;
`

const OverlayContainer = ({
    children
}) => ( <
    Container >
    <
    Footer >
    <
    Background / > {
        children
    } <
    /Footer> <
    /Container>
)

export default OverlayContainer