import { Copy } from '../copy'
import Container from './container'
import { Title } from '@giphy/react-giphy-brand'
import Mascot from './mascot'
import { CTAButton } from '../form-components'

const ApplyDone = () => (
    <Container>
        <Title>You&apos;re done!</Title>
        <Copy>Your Application Has Been Successfully Submitted</Copy>
        <Mascot id="3og0IQvedKKy6Cb80o" />
        <Copy>
            Your application to upgrade your GIPHY channel to a Brand or Artist account has been submitted. We receive a
            high volume of applications every day, so this can take a while. In the meantime, live your life and we’ll
            notify you if you’ve been approved!
        </Copy>
        <CTAButton onClick={() => (location.href = '/')}>Okay! Take me back to GIPHY</CTAButton>
    </Container>
)

export default ApplyDone
