import { PureComponent } from 'react'
import Helmet, { HelmetProvider } from 'react-helmet-async'
import { withRouter } from 'react-router'
import { withVideoDetailContext } from './video-detail'

const getId = ({ match = {} }) => {
    if (match.params) {
        return match.params.id
    }
}

@withRouter
@withVideoDetailContext()
/**
 * A component that handles fetching
 * when the route changes
 * @class VideoDetail
 */
class VideoDetail extends PureComponent {
    componentDidMount() {
        const { videoData, fetchVideo } = this.props
        if (!videoData) {
            fetchVideo(getId(this.props))
        }
    }

    componentDidUpdate(prevProps) {
        const id = getId(this.props)
        if (getId(prevProps) !== id) {
            const { fetchVideo } = this.props
            fetchVideo(id)
        }
    }

    render() {
        const { videoData, children } = this.props
        return videoData ? (
            <HelmetProvider>
                <Helmet>
                    <title>{videoData.title} | GIPHY</title>
                </Helmet>
                {children}
            </HelmetProvider>
        ) : null
    }
}

export default VideoDetail
