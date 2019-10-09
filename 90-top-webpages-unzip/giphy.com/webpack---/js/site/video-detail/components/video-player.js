import styled from 'styled-components'
import { withVideoDetailContext } from 'shared/components/context/video-detail'
import Player from 'shared/components/video-player'

const Container = styled.div`
    margin-top: 24px;
`

const VideoPlayer = ({ videoData }) => (
    <Container>
        <Player videoData={videoData} autoPlay />
    </Container>
)

export default withVideoDetailContext()(VideoPlayer)
