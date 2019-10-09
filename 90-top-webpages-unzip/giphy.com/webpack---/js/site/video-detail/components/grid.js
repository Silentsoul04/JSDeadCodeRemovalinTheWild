import { PureComponent } from 'react'
import { Subheader, colors } from '@giphy/react-giphy-brand'
import styled from 'styled-components'
import VideoGrid from 'shared/components/video-grid'
import { withVideoDetailContext } from 'shared/components/context/video-detail'
import { grid9 } from 'shared/css/grid.css'

const itemWidth = parseInt(grid9, 10) / 2 - 6

const Container = styled.div`
    padding-top: 40px;
`

const MoreVideos = styled(Subheader)`
    color: ${colors.giphyLightGrey};
    margin-bottom: 6px;
`
@withVideoDetailContext()
class VideoGridContainer extends PureComponent {
    render() {
        const { videoData } = this.props
        return (
            <Container>
                <MoreVideos>MORE VIDEOS</MoreVideos>
                <VideoGrid itemWidth={itemWidth} filterIds={[videoData.uid]} tags={['giphyfilmfest']} />
            </Container>
        )
    }
}

export default VideoGridContainer
