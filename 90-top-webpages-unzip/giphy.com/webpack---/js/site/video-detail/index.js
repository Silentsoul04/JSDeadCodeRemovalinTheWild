import VideoDetailManager from 'shared/components/context/video-detail-manager'
import Container from './components/container'
import VideoDetailContext from 'shared/components/context/video-detail'
import SideBar from './components/side-bar'
import Content from './components/content'
import VideoPlayer from './components/video-player'
import VideoGrid from './components/grid'
import VideoPrototype from './prototype'

const VideoDetail = ({ location: { state } }) => {
    if (state && state.is_video_prototype) {
        return <VideoPrototype gif={state.gif_data} showRelated={state.show_related} />
    }

    return (
        <Container>
            <VideoDetailContext.Provider>
                <VideoDetailManager>
                    <SideBar />
                    <Content>
                        <VideoPlayer />
                        <VideoGrid />
                    </Content>
                </VideoDetailManager>
            </VideoDetailContext.Provider>
        </Container>
    )
}

export default VideoDetail
