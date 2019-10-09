import { withVideoDetailContext } from 'shared/components/context/video-detail'
import OverlayContainer from './overlay-container'
import SourceButton from '../../shared/buttons/source'

const VideoInfoModal = ({ videoData: { id, source_url: postURL } }) => (
    <OverlayContainer>
        <SourceButton id={id} postURL={postURL} />
    </OverlayContainer>
)

export default withVideoDetailContext()(VideoInfoModal)
