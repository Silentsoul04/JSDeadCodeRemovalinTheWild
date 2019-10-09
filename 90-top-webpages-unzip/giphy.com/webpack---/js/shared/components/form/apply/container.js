import styled from 'styled-components'
import { Copy } from '../copy'

const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

const Content = styled.div`
    max-width: 500px;
    ${Copy} {
        margin-bottom: 20px;
    }
`

const Wrapper = ({ children }) => (
    <Container>
        <Content>{children}</Content>
    </Container>
)
export default Wrapper
