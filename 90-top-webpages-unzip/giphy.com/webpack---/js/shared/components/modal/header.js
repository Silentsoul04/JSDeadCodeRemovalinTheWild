import styled from 'styled-components'
import { TitleSmall, Button, colors } from '@giphy/react-giphy-brand'

const Container = styled.div`
    align-items: center;
    border-bottom: 1px solid ${colors.giphyLightCharcoal};
    color: ${colors.giphyWhite};
    display: flex;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    width: 100%;
`

const Title = styled(TitleSmall)`
    font-size: 16px;
    margin-right: auto;
`

const CloseButton = styled(Button)`
    background: transparent;
    color: ${colors.giphyWhite};
    flex-grow: 0;
    flex-shrink: 0;
    line-height: 40px;
    margin-left: 10px;
    margin-right: -10px;
    padding: 0;
`

const ModalHeader = ({ children, title, onClose }) => (
    <Container>
        <Title>{title}</Title>
        {children}
        <CloseButton onClick={onClose}>
            <i className="ss-delete" />
        </CloseButton>
    </Container>
)

export default ModalHeader
