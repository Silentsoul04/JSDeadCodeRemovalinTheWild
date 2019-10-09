import styled, { css } from 'styled-components'
import { giphyWhite } from 'shared/css/colors.css'

const Container = styled.div`
    ${props =>
        !props.theme.isOnCover &&
        css`
            display: none;
        `}
    color: ${giphyWhite};
    font-size: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
`

const Share = ({ peek, onClick }) => (
    <Container style={{ transform: `translate3d(0, ${peek}px, 0)` }} onClick={onClick}>
        <div style={{ marginTop: 3 }} className="ss-send" />
    </Container>
)

export default Share
