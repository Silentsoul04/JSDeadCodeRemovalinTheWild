import React from 'react'
import { Copy } from '../copy'
import styled from 'styled-components'
import { Title } from '@giphy/react-giphy-brand'
import Mascot from './mascot'
import Container from './container'

const Message = styled(Copy)`
    margin: 20px 0;
`

const Rejected = () => (
    <Container>
        <Title>The Results Are In</Title>
        <Copy>Your Application Is Ineligible</Copy>
        <Mascot id="3o7bu3m9pmSN1S3yxi" />
        <Message>
            We have reviewed your GIPHY application and determined that your channel is not eligible for an upgrade. Our
            team individually reviews every application and makes decisions based on the information provided and
            GIPHY&apos;s policies. If you love GIFs as much as us, we hope you&apos;ll continue to make and share them.
            Your current account still gives you access to many awesome features including unlimited uploads, favorites,
            renditions and much more.
        </Message>
    </Container>
)

export default Rejected
