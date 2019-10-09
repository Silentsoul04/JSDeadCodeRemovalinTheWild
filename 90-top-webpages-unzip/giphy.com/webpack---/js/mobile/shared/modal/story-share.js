import styled from 'styled-components'
import CopyButton from '../buttons/copy-button'
import Footer from './footer-container'
import Info from './info'
import InfoOverlay from '../../components/gif-detail/info/index'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`

// fill the remaining area in the modal
const CopyGif = styled(InfoOverlay)`
    flex: 1;
    width: 100%;
    position: relative;
`

const ShareModal = ({ gif, title, description, primaryButton, secondaryButton, children, rendition }) => {
    const hasHeader = title || description
    const isGif = !!gif.images
    return (
        <Container>
            {!isGif && hasHeader && <Info title={title} description={description} />}
            {isGif && <CopyGif gif={gif} rendition={rendition} />}
            <Footer>
                {primaryButton && (
                    <CopyButton
                        CTA={primaryButton.cta}
                        url={primaryButton.url}
                        primary={true}
                        label={primaryButton.label}
                    />
                )}
                {secondaryButton && (
                    <CopyButton CTA={secondaryButton.cta} url={secondaryButton.url} label={secondaryButton.label} />
                )}
                {children}
            </Footer>
        </Container>
    )
}

export default ShareModal
