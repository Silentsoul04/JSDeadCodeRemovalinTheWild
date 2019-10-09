import Container from './components/container'
import Background from './components/background'
import Form from './components/join-form'
import { Helmet } from 'react-helmet'
import FormErrors from './components/form-errors'

const Join = () => (
    <Container>
        <Helmet>
            <title>Join | GIPHY</title>
        </Helmet>
        <Form />
        <Background />
        <FormErrors />
    </Container>
)

export default Join
