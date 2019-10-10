import VideoDetailComponents from './components'
import VideoDetailContext from 'shared/components/context/video-detail'
import VideoDetailManager from 'shared/components/context/video-detail-manager'

const VideoDetail = ({
    autoPlay
}) => ( <
    VideoDetailContext.Provider >
    <
    VideoDetailManager >
    <
    VideoDetailComponents autoPlay = {
        autoPlay
    }
    /> <
    /VideoDetailManager> <
    /VideoDetailContext.Provider>
)

export default VideoDetail