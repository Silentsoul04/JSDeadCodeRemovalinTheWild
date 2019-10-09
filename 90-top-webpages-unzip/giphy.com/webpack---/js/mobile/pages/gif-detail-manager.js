import { PureComponent, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import { withRouter, matchPath } from 'react-router'
import PropTypes from 'prop-types'
import Header from 'containers/header'
import { getContext } from 'recompose'
import GifDetail from '../components/gif-detail/gif-detail-container'
import { fetchGifs } from 'shared/redux/fetch-gifs'
import { toggleFavorite, getFavorites, clearQueuedFavorite } from '../shared/actions'
import { setIsMetaVisible, setInstagramVisible } from '../shared/reducers/gif-detail'
import { setIsSearchVisible } from '../shared/reducers/search-bar'
import { addToGroup, removeGifs, receivedGifs } from 'shared/redux/gifs'
import GifCollection from '../shared/gif-collection'
import * as selectors from '../shared/reducers'
import pageCss from './pages.css'
import log from 'shared/util/log'
import gifProps from 'shared/prop-types/gif'
import SearchBar from 'containers/search-bar'
import { resetDetailSchemaMarkup } from 'shared/util/schema-markup'
import InstagramModal from '../components/gif-detail/primary/share/instagram/instagram'
import locationState from 'shared/components/with-location-state'
import { isiOS } from '../shared/environment'
import { GiphyFetch } from '@giphy/js-fetch-api'
import useAsyncEffect from 'shared/hooks/use-async-effect'
import { MOBILE_API_KEY } from 'shared/api'
import routes from 'shared/routes'

const searchBarHeight = 62
const slideIn = keyframes`
  from {
    transform: translateY(-${searchBarHeight}px);
    max-height: 0;
  }

  to {
    transform: translateY(0);
    max-height: ${searchBarHeight}px;
  }
`
const slideOut = keyframes`
  from {
    transform: translateY(0);
    max-height: ${searchBarHeight}px;
  }

  to {
    transform: translateY(-${searchBarHeight}px);
    max-height: 0;
  }
`
const DummySearchBarAnimator = styled.div`
    overflow: hidden;
    animation: ${props => (props.isSearchVisible ? slideIn : slideOut)} 300ms ease-in-out forwards;
`

const getGifId = pathname => {
    const {
        params: { id = '' },
    } = matchPath(pathname, routes.GIF_DETAIL)
    return id.split('-').pop()
}
// only render children when there's a gif
const EnsureGif = ({ gif, receivedGifs, location: { pathname }, children }) => {
    const [, setFetchedGif] = useState(false)
    useAsyncEffect(async () => {
        const id = getGifId(pathname)
        if (!gif) {
            const gf = new GiphyFetch(MOBILE_API_KEY)
            try {
                const { data, meta } = await gf.gif(id)
                receivedGifs({
                    gifs: [data],
                    responseId: meta.response_id,
                })
                setFetchedGif(true)
                // we can see how much this is happening in TrackJS,
                // but also add a filter to keep it out of our reports
                console.error(`Mobile GifDetail, no gif on page load for ${id}, but fetched succesfully`)
            } catch (error) {
                // we can see how much this is happening in TrackJS,
                // but also add a filter to keep it out of our reports
                console.error(`Mobile GifDetail, no gif for ${id}. Both page load and fetch`)
                // redirect to explore
                location.href = `/explore/${id}`
            }
        }
    }, [])
    if (gif) return children
    return null
}

// using hooks in EnsureGif, and I can't make it an HoC
const EnsureGifHoC = WrappedComponent => props => (
    <EnsureGif {...props}>
        <WrappedComponent {...props} />
    </EnsureGif>
)

/**
 * When swiping, if we're this amount away from either end, fetch gifs
 */
const DISTANCE_TO_FETCH = 2

@getContext({ isOffScreen: PropTypes.bool })
@withRouter
@locationState(['is_private', 'gif'])
@connect(
    (state, { location: { pathname }, isPrivate, gif: sorryGif }) => {
        const gifs = selectors.getGifs(state)
        const idFromPathname = getGifId(pathname)
        const gif = isPrivate ? sorryGif : gifs.find(({ id }) => id === idFromPathname)
        const gifIndex = gifs.indexOf(gif)
        return {
            gif,
            gifs,
            nextGif: gifs[gifIndex + 1],
            previousGif: gifIndex > 0 ? gifs[gifIndex - 1] : null,
            favorites: selectors.getFavorites(state),
            isFavorite: id => selectors.isFavorite(state, id),
            user: state.user,
            isInstagramVisible: selectors.getGifDetailIsInstagramVisible(state),
            isSearchVisible: selectors.getIsSearchVisible(state),
        }
    },
    {
        fetchGifs,
        addToGroup,
        toggleFavorite,
        getFavorites,
        clearQueuedFavorite,
        setIsMetaVisible,
        setInstagramVisible,
        removeGifs,
        receivedGifs,
        setIsSearchVisible,
    },
)
@EnsureGifHoC
/**
 * Callback to dispatch the create component action
 */
class GifDetailPage extends PureComponent {
    static defaultProps = {
        isSearchVisible: false,
    }
    static propTypes = {
        isOffScreen: PropTypes.bool.isRequired,
        gif: gifProps.isRequired,
    }
    static getDerivedStateFromProps({ gifs, isSearchVisible }, prevState) {
        if (gifs !== prevState.gifs) {
            return {
                gifCollection: new GifCollection(gifs),
                gifs,
            }
        }
        if (isSearchVisible !== prevState.isSearchVisible && isSearchVisible) {
            return { hasInteracted: true }
        }
        return null
    }
    state = {
        animationComplete: false,
        hasInteracted: false,
    }
    constructor(props) {
        super(props)
        this.setQueuedFavorite(props)
        if (!props.isOffScreen) {
            resetDetailSchemaMarkup(props.gif)
            props.setIsSearchVisible(false)
        }
    }

    onGifChange() {
        this.checkForFetch()
        this.props.getFavorites()
    }

    componentDidMount() {
        this.onGifChange()
        this.setQueuedFavorite(this.props)
    }

    componentDidUpdate(prevProps) {
        const { gif, user, isSearchVisible } = this.props
        this.checkForFetch()
        resetDetailSchemaMarkup(gif)
        if (gif !== prevProps.gif) {
            this.onGifChange()
        }
        if (user.loggedIn !== prevProps.user.loggedIn) {
            this.props.getFavorites()
        }
        if (isSearchVisible !== prevProps.isSearchVisible) {
            this.setState({ animationComplete: false })
            clearTimeout(this.animationTimeout)
            this.animationTimeout = setTimeout(() => this.setState({ animationComplete: true }), 400)
        }
    }

    componentWillUnmount() {
        clearTimeout(this.animationTimeout)
    }

    setQueuedFavorite({ user: { loggedIn, queuedFavorite }, clearQueuedFavorite, toggleFavorite, isFavorite, gif }) {
        if (gif) {
            const { id } = gif
            if (loggedIn && queuedFavorite && !isFavorite(id)) {
                clearQueuedFavorite()
                // this will add it on the back end,
                // happens async, so ui may lag, will update in redesign
                toggleFavorite(id)
            }
        }
    }
    checkForFetch() {
        if (this.props.isOffScreen) {
            return
        }
        const {
            gif: { id },
            fetchGifs,
        } = this.props
        const { gifCollection } = this.state
        const distanceToRight = gifCollection.fromEnd(id)
        if (distanceToRight <= DISTANCE_TO_FETCH && !this.hasFetchedRight) {
            this.hasFetchedRight = true
            // We're close to the end
            log.info(`fetch more gifs on the right, we're ${distanceToRight} away`)
            // load these into the all gifs domain, don't prepend, and don't report
            fetchGifs({ report: false })
        }
    }
    changeGif(gif) {
        const { isPrivate, history, removeGifs, gif: currentGif } = this.props
        if (isPrivate) {
            // if private, after swipe remove the sorry gif
            removeGifs({ gifIds: [currentGif.id] })
            // replace the history so the user can't go back
            history.replace(gif.path)
        } else {
            history.push(gif.path)
        }
    }
    render() {
        const {
            gif,
            gif: { id },
            isPrivate,
            isOffScreen,
            toggleFavorite,
            setIsMetaVisible,
            setInstagramVisible,
            isInstagramVisible,
            isSearchVisible,
        } = this.props
        const { animationComplete, hasInteracted, gifCollection } = this.state
        const nextGif = gifCollection.getNext(id)
        const prevGif = gifCollection.getPrev(id)
        const appLink = `/apps/giphy/download/${isiOS() ? 'ios' : 'android'}`
        const realSearchBarStyle = hasInteracted && animationComplete && isSearchVisible ? {} : { display: 'none' }
        const dummySearchBarStyle = !animationComplete && hasInteracted ? {} : { display: 'none' }
        return (
            <div className={isOffScreen ? pageCss.contentHidden : pageCss.content}>
                <Header />
                <SearchBar isOffScreen={isOffScreen} style={realSearchBarStyle} />
                <DummySearchBarAnimator isSearchVisible={isSearchVisible} style={dummySearchBarStyle}>
                    <SearchBar isOffScreen={isOffScreen} />
                </DummySearchBarAnimator>
                <GifDetail
                    nextGif={nextGif}
                    previousGif={prevGif}
                    toggleFavorite={toggleFavorite}
                    setIsMetaVisible={setIsMetaVisible}
                    onGifChange={gif => this.changeGif(gif)}
                    isOffScreen={isOffScreen}
                    gifID={id}
                    gif={gif}
                    isPrivate={isPrivate}
                />
                {isInstagramVisible && (
                    <InstagramModal
                        isMobile
                        {...{
                            gifId: id,
                            appLink,
                            onClose: () => setInstagramVisible(false),
                        }}
                    />
                )}
            </div>
        )
    }
}

export default GifDetailPage
