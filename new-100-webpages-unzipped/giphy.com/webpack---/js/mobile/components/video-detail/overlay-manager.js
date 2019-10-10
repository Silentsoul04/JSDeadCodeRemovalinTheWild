import {
    ThemeProvider
} from 'styled-components'
import ShareModal from './share-modal'
import InfoModal from './info-modal'
import Overlay from '../../shared/overlay'
import Modals from './modals'
import {
    withVideoDetailContext
} from 'shared/components/context/video-detail'

const OverlayManager = ({
    modal,
    setModal
}) => {
    const closeOverlay = () => setModal(undefined)
    if (modal === Modals.SHARE || modal === Modals.INFO) {
        return ( <
            ThemeProvider theme = {
                {
                    headerHeight: 60,
                    closeMarginLeft: 12,
                    backgroundOpacity: 0.9,
                }
            } >
            <
            Overlay showCloseHeader = {
                false
            }
            closeOverlay = {
                closeOverlay
            } > {
                modal === Modals.SHARE ? < ShareModal / > : < InfoModal / >
            } <
            /Overlay> <
            /ThemeProvider>
        )
    }
    return null
}

export default withVideoDetailContext()(OverlayManager)