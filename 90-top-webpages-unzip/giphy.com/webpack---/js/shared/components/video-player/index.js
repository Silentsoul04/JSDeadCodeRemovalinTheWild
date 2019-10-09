import { PureComponent } from 'react'
import { Video, Button, colors } from '@giphy/react-giphy-brand'
import styled from 'styled-components'
import { grid9 } from 'shared/css/grid.css'
import Description from './description'
import Analytics from './analytics'

const DEFAULT_WIDTH = parseInt(grid9)
const DEFAULT_HEIGHT = DEFAULT_WIDTH / (16 / 9)

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Footer = styled.div`
    margin-top: 20px;
    display: flex;
`

const ShareButton = styled(Button)`
    background: ${colors.giphyCharcoal};
    padding: 0 20px;
`

class VideoPlayer extends PureComponent {
    static defaultProps = {
        videoData: {},
        height: DEFAULT_HEIGHT,
        width: DEFAULT_WIDTH,
        autoPlay: false,
        showAttribution: false,
    }
    state = { toggleShare: false }
    constructor(props) {
        super(props)
        const {
            videoData: { id },
        } = props
        this.analytics = new Analytics(id)
    }
    componentDidUpdate({ videoData: prevVideoData = {} }) {
        const { videoData = {} } = this.props
        if (videoData.id !== prevVideoData.id) {
            this.analytics = new Analytics(videoData.id)
        }
    }
    toggle = () => this.setState(({ toggleShare }) => ({ toggleShare: !toggleShare }))
    render() {
        const { videoData, height, width, autoPlay, showAttribution } = this.props
        const { toggleShare } = this.state
        return (
            <Container>
                <Video
                    height={height}
                    videoData={videoData}
                    toggleShare={toggleShare}
                    autoPlay={autoPlay}
                    width={width}
                    events={this.analytics}
                />
                <Footer>
                    <Description showAttribution={showAttribution} videoData={videoData} />
                    <ShareButton onClick={this.toggle}>Share Video</ShareButton>
                </Footer>
            </Container>
        )
    }
}

export default VideoPlayer
