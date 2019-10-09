import styled from 'styled-components'
import { isiOSChrome } from '../../../shared/environment'
import Icon from './copy-icon'

const Container = styled.div`
    margin-right: auto;
    position: relative;
`

const CopyGIF = ({ isShareLauncher }) => (
    <Container>
        <Icon />
        Tap &amp; Hold {isShareLauncher ? ' to Share' : isiOSChrome() ? ' to Save' : ' to Copy'} GIF
    </Container>
)

export default CopyGIF
