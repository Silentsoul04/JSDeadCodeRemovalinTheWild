import { LearnMore as SharedLearnMore, Copy } from '../copy'
import styled from 'styled-components'
import { CTAButton } from '../form-components'
import Mascot from './mascot'
import Container from './container'
import appendQuery from 'append-query'
import Media from 'react-media'
import { desktop } from 'shared/util/media-query'

const LearnMore = styled(SharedLearnMore)`
    margin-top: 5px;
`

const MoreGifs = () => (
    <Container>
        <LearnMore />
        <Mascot id="l4pT001rQ6qbX9SYo" />
        <Copy>
            In order to be considered for a Brand or Artist account, you must have at <br /> least 5 GIFs on your
            channel.
        </Copy>
        <Media query={desktop.query}>
            {matches =>
                matches ? (
                    <>
                        <Copy>(Make sure they’re reflective of your work or brand!)</Copy>
                        <CTAButton onClick={() => (location.href = appendQuery('/upload', { next: '/apply' }))}>
                            Go upload some GIFs
                        </CTAButton>
                    </>
                ) : (
                    <>
                        <Copy>Open this page from your computer to start uploading GIFs!</Copy>
                        <CTAButton onClick={() => (location.href = `/`)}>Okay, cool</CTAButton>
                    </>
                )
            }
        </Media>
    </Container>
)

export default MoreGifs
