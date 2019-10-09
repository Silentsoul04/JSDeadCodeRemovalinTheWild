import { connect } from 'react-redux'
import { compose } from 'recompose'
import CopyButton from '../../../../shared/buttons/copy-button'
import Social from '../../../../shared/buttons/social'
import Footer from '../../../../shared/modal/footer-container'
import * as selectors from '../../../../shared/reducers'
import { withGifDetailContext } from '../../gif-detail-context'
import TapAndHoldButton from './tap-and-hold-button'
import InfoOverlay from '../../info/index'
import styled from 'styled-components'

// fill the remaining area in the modal
const CopyGif = styled(InfoOverlay)`
    flex: 1;
    width: 100%;
    position: relative;
`

const ShareModal = ({ gif, slug, url, rendition }) => {
    return (
        <>
            <CopyGif gif={gif} rendition={rendition} />
            <Footer>
                <TapAndHoldButton {...{ gif, rendition }} />
                <CopyButton CTA={`Copy GIF Link`} url={url} label={slug} />
                <Social
                    gif={gif}
                    types={[`sms`, `facebook`, `twitter`, `instagram`, `pinterest`, `reddit`]}
                    gaEvent={{
                        category: `GIF Detail`,
                        label: gif.id,
                    }}
                />
            </Footer>
        </>
    )
}

export default compose(
    withGifDetailContext,
    connect(state => ({
        size: selectors.getAppSize(state),
    })),
)(ShareModal)
