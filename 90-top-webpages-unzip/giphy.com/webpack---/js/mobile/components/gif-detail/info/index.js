import { PureComponent } from 'react'
import Tappable from 'react-tappable'
import styled, { css } from 'styled-components'
import { fetchGifDetailViewCount } from 'shared/api'
import { getShortViewCountDisplay } from 'shared/util/view-count-formatter'
import { getUrl } from 'shared/util/gif-extract'
import { trackEvent, Actions } from 'shared/util/gif-detail-ga-events'
import CopyGifOverlay from '../copy-gif-overlay/copy-gif-overlay'
import Header from './header'
import Footer from './footer'
import Title from './title'
import ViewCount from './view-count'
import CopyGIF from './copy-gif'
import { withGifDetailContext, Modals } from '../gif-detail-context'

const VIEW_COUNT_CACHE = {}
const VISIBLE_DELAY = 2000

const fill = css`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

const Container = styled.div`
    ${fill};
    user-select: none;
    overflow: hidden;
    ${props =>
        props.backgroundGif &&
        css`
            background: url(${props => props.backgroundGif}) no-repeat center;
            background-size: contain;
        `};
`

const Info = styled.div`
    height: 100%;
    opacity: ${props => (props.isVisible ? 1 : 0)};
    transition: opacity 0.2s ease-out;

    ${Header} {
        transform: translateY(${props => (props.isVisible ? 0 : -100)}%);
        transition: transform 0.2s ease-out;
    }

    ${Footer} {
        transform: translateY(${props => (props.isVisible ? 0 : 100)}%);
        transition: transform 0.2s ease-out;
    }
`

const CopyWrapper = styled.div`
    ${fill};
    img {
        ${fill};
        opacity: 0;
        -webkit-touch-callout: default;
    }
`

const ContextBlocker = styled.div`
    width: 100%;
    height: 100%;
`

const blockContext = e => e.preventDefault()

@withGifDetailContext
export default class GIFInfoOverlay extends PureComponent {
    static defaultProps = {
        gif: {},
        rendition: 'original',
        isShareLauncher: false,
    }
    state = {
        viewCount: 0,
        isCopying: false,
        isVisible: false,
    }
    visibleTimeout = null
    componentDidMount() {
        this.updateViewCount()
        this.setState({ isVisible: true }, () => {
            this.visibleTimeout = setTimeout(this.onToggleInfo, VISIBLE_DELAY)
        })
        if (this.contextBlockerEl) this.contextBlockerEl.addEventListener('contextmenu', blockContext)
    }
    componentDidUpdate({ gif: prevGif }) {
        const { gif } = this.props
        if (gif.id !== prevGif.id) {
            this.updateViewCount()
        }
    }
    componentWillUnmount() {
        if (this.contextBlockerEl) this.contextBlockerEl.removeEventListener('contextmenu', blockContext)
        clearTimeout(this.visibleTimeout)
        clearTimeout(this.showShareMenuTimeout)
    }
    updateViewCount() {
        const {
            gif: { id },
        } = this.props
        if (VIEW_COUNT_CACHE[id]) {
            this.setState({
                viewCount: VIEW_COUNT_CACHE[id],
            })
        } else {
            this.fetchViewCount(id)
        }
    }
    fetchViewCount = async id => {
        // clear view count so the old one doesn't appear while the new one loads
        this.setState({ viewCount: 0 })
        try {
            const { viewCount } = await fetchGifDetailViewCount(id)
            VIEW_COUNT_CACHE[id] = viewCount
            this.setState({ viewCount })
        } catch (e) {}
    }
    onToggleInfo = () => {
        clearTimeout(this.visibleTimeout)
        this.setState({ isVisible: !this.state.isVisible })
    }
    onCopyStart = () => {
        this.setState({ isCopying: true })
        clearTimeout(this.showShareMenuTimeout)
        this.showShareMenuTimeout = setTimeout(this.showShareMenu, 500)
    }
    onCopy = () => {
        const {
            isShareLauncher,
            gif: { id },
        } = this.props
        // we'll track shareClick onCopyEnd
        if (!isShareLauncher) {
            trackEvent(Actions.rightClick, id)
        }
        this.onCopyEnd()
    }
    onCopyEnd = () => {
        this.setState({ isCopying: false })
        clearTimeout(this.showShareMenuTimeout)
    }
    showShareMenu = () => {
        const { isShareLauncher } = this.props
        if (!isShareLauncher) {
            return
        }
        const {
            setModal,
            gif: { id },
        } = this.props
        setModal(Modals.SHARE)
        trackEvent(Actions.shareClick, id)
    }
    render() {
        const { gif, rendition, isShareLauncher, className } = this.props
        const { viewCount, isVisible, isCopying } = this.state
        const src = getUrl(gif, rendition)
        return (
            <Container
                onClick={this.onToggleInfo}
                backgroundGif={isShareLauncher ? undefined : src}
                className={className}
            >
                <Info isVisible={isVisible}>
                    <Header>
                        <Title>{gif.title}</Title>
                    </Header>
                    <Footer>
                        <CopyGIF isShareLauncher={isShareLauncher} />
                        {isShareLauncher && viewCount > 0 && (
                            <ViewCount className="ss-view">{getShortViewCountDisplay(viewCount)}</ViewCount>
                        )}
                    </Footer>
                </Info>
                <CopyWrapper>
                    <Tappable
                        onTouchStart={this.onCopyStart}
                        onTouchEnd={this.onCopyEnd}
                        onTouchMove={this.onCopyEnd}
                        onPress={this.onCopy}
                        pressMoveThreshold={150}
                        moveThreshold={150}
                    >
                        {isShareLauncher ? (
                            <ContextBlocker ref={c => (this.contextBlockerEl = c)} />
                        ) : (
                            <img src={src} alt="" />
                        )}
                    </Tappable>
                    {!isShareLauncher && <CopyGifOverlay isCopying={isCopying} />}
                </CopyWrapper>
            </Container>
        )
    }
}
