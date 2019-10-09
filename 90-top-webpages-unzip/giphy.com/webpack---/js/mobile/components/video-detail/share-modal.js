import CopyButton from '../../shared/buttons/copy-button'
import Social from '../../shared/buttons/social'
import { withVideoDetailContext } from 'shared/components/context/video-detail'
import OverlayContainer from './overlay-container'

// TODO fix `label` which is actually for reporting :/
const VideoDetailShareModal = ({ videoData }) => (
    <OverlayContainer>
        <CopyButton CTA={`Copy Video Link`} url={videoData.url} label={'video share'} />
        <Social
            types={[`sms`, `facebook`, `twitter`, `pinterest`, `reddit`]}
            url={videoData.url}
            gaEvent={{
                category: `GIF Detail`,
                label: videoData.id,
            }}
        />
    </OverlayContainer>
)

export default withVideoDetailContext()(VideoDetailShareModal)
