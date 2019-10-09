import React from 'react'
import { Copy } from '../copy'
import styled from 'styled-components'
import { Title } from '@giphy/react-giphy-brand'
import Mascot from './mascot'
import Container from './container'

const Message = styled(Copy)`
    margin: 20px 0;
`

const Incomplete = () => (
    <Container>
        <Title>Something Is Missing</Title>
        <Copy>Your Application Is Incomplete</Copy>
        <Mascot id="4N98IV8HQYUmAhBjKR" />
        <Message>
            We&apos;ve reviewed your GIPHY application and unfortunately the information provided in the application
            fields does not sufficiently meet our{' '}
            <a
                href="https://support.giphy.com/hc/en-us/articles/360020433711-Tips-For-Submitting-An-Application-"
                rel="noopener noreferrer"
                target="_blank"
            >
                requirements
            </a>
            . Please review our requirements and{' '}
            <a href="https://support.giphy.com/hc/en-us/requests/new" rel="noopener noreferrer" target="_blank">
                contact
            </a>{' '}
            our support team for assistance updating and processing your application.
        </Message>
    </Container>
)

export default Incomplete
