import Header from '../containers/header'
import SearchBar from '../containers/search-bar'
import VideoDetail from '../components/video-detail'
import VideoPrototype from '../components/video-detail/prototype'
import withLocationState from 'shared/components/with-location-state'
import Page from './page'

const VideoDetailPage = ({
    gifData,
    isVideoPrototype
}) => {
    return ( <
        Page >
        <
        Header / >
        <
        SearchBar / > {
            isVideoPrototype ? < VideoPrototype video = {
                gifData
            }
            /> : <VideoDetail / >
        } <
        /Page>
    )
}

export default withLocationState(['gif_data', 'is_video_prototype'])(VideoDetailPage)