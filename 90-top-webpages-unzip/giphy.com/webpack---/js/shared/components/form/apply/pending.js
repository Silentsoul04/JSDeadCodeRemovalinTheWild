import { Copy } from '../copy'
import styled from 'styled-components'
import { Title } from '@giphy/react-giphy-brand'
import Mascot from './mascot'
import Container from './container'
import Footer from './footer'

const Message = styled(Copy)`
    margin: 20px 0;
`
const MoreGifs = () => (
    <Container>
        <Title>Hello again...</Title>
        <Mascot id="2YgHfc2H9ljyPc7YIA" />
        <Message>
            Your application to upgrade your GIPHY channel to a Brand or Artist account has been received. We receive a
            high volume of applications every day, so this can take a while. In the meantime - live your life and we’ll
            notify you if you’ve been approved!
        </Message>
        <Footer />
    </Container>
)

export default MoreGifs
