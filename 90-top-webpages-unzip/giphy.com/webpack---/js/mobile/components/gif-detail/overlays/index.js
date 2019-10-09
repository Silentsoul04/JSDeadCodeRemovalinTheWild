import { ThemeProvider } from 'styled-components'
import OpenInApp from '../../open-in-app'
import ShareModal from '../primary/share/share-modal'
import Overlay from '../../../shared/overlay'
import InfoModal from '../secondary/info-modal'
import styled from 'styled-components'

import { withGifDetailContext, Modals } from '../gif-detail-context'

const OpenInAppContainer = styled.div`
    position: fixed;
    width: 100%;
    justify-content: center;
    display: flex;
    margin-bottom: 25px;
    bottom: 0;
`

const OverlayManager = ({ rendition, modal, setModal, gif, slug, url }) => {
    const closeOverlay = () => setModal(undefined)
    if (modal === Modals.SHARE || modal === Modals.INFO) {
        return (
            <ThemeProvider
                theme={{
                    headerHeight: 60,
                    closeMarginLeft: 12,
                }}
            >
                <Overlay closeOverlay={closeOverlay}>
                    {modal === Modals.SHARE ? (
                        <ShareModal {...{ rendition, gif, slug, url }} />
                    ) : (
                        <InfoModal {...{ gif, rendition }} />
                    )}
                </Overlay>
            </ThemeProvider>
        )
    }
    return (
        <OpenInAppContainer>
            <OpenInApp category="GIF Detail" url={url} />
        </OpenInAppContainer>
    )
}

export default withGifDetailContext(OverlayManager)
