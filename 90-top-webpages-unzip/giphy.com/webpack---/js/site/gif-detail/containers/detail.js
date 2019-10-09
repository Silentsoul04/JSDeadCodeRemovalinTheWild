import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import GifDetail from '../components/detail'
import * as selectors from 'shared/redux/reducers'
import { getNewPermissions, WEB_API_KEY } from 'shared/api'
import { setUserPermissions, resetUserPermissions } from 'shared/redux/permissions'
import { setEditModeChannels } from 'shared/redux/edit-mode-channels'
import { receivedGifs } from 'shared/redux/gifs'
import log from 'shared/util/log'
import { fetchGifs, fetchGifsFromUrl } from 'shared/redux/fetch-gifs'
import fetchChannels from 'shared/redux/fetch-channels'
import { debounce, isEmpty } from 'lodash'
import routes from 'shared/routes'
import { GiphyFetch } from '@giphy/js-fetch-api'

const FETCH_DEBOUNCE = 1000

/**
 * Don't render the GifDetail without a gif
 * If there's no gif, fetch one with the gif id
 * Also, fetch pagination gifs
 */
class EnsureGif extends PureComponent {
    static defaultProps = {
        relatedGifs: [],
    }
    async ensureGif() {
        const { gif, gifId, groupId, receivedGifs } = this.props
        if (!gif && gifId) {
            try {
                /**
                 * Fires on history popstate
                 * If we knew which direction we were going
                 * forward or backward, we could prepend
                 * or append the gif set, but we don't know
                 */
                const gf = new GiphyFetch(WEB_API_KEY)
                const { data, meta } = await gf.gif(gifId)
                receivedGifs({
                    gifs: [data],
                    responseId: meta.response_id,
                    groupId,
                })
            } catch (error) {
                location.href = routes.ERROR_404.path
            }
        }
    }
    componentDidUpdate(prevProps) {
        const { gif, gifId, relatedGifs, isRemoved, user = {} } = this.props
        if (isRemoved) {
            const { username } = user
            location.href = username ? `/channel/${username}` : `/`
            return
        }
        this.ensureGif()
        if (!relatedGifs.length && gifId !== prevProps.gifId) {
            this.queueRelatedGifsFetch()
        }
        // avoid errors when a gif is deleted
        if (gif && prevProps.gif && gif.id !== prevProps.gif.id) {
            this.getNewGifData()
        }
    }
    componentDidMount() {
        this.ensureGif()
        this.getRelatedGifs()
        this.getNewGifData()
    }
    getRelatedGifs = () => {
        const { gifId, fetchGifs, fetchGifsFromUrl, relatedGroupId, relatedGifs } = this.props
        if (relatedGifs.length) {
            fetchGifs({ groupId: relatedGroupId })
        } else {
            fetchGifsFromUrl(`/gifs/${gifId}/related/1`, {
                groupId: relatedGroupId,
                report: false,
                onError: this.onError,
            })
        }
    }
    queueRelatedGifsFetch = debounce(this.getRelatedGifs, FETCH_DEBOUNCE)
    getNewGifData = debounce(async () => {
        // gets new user permissions and view count & resets the schema markup

        const {
            gif,
            setUserPermissions,
            resetUserPermissions,
            setChannels,
            fetchChannels,
            channelSelectorItems,
            user,
        } = this.props

        if (!user.loggedIn) {
            resetUserPermissions()
            return
        }

        try {
            const { id } = gif
            const {
                permissions,
                gif: { channels },
            } = await getNewPermissions(id)
            setUserPermissions(permissions)
            if (permissions.channel) {
                setChannels(channels) // sets the gif's channels
                if (!channelSelectorItems || (channelSelectorItems && isEmpty(channelSelectorItems.channels))) {
                    fetchChannels() // fetches all channels to populate channel selector if we don't already have them
                }
            }
        } catch (e) {
            resetUserPermissions()
            log.error(`Error getting gif view count ${e}`)
        }
    }, FETCH_DEBOUNCE)
    onError = () => {
        const { gifId } = this.props
        location.href = `/explore/${gifId}`
    }
    render() {
        const { gif, isRemoved } = this.props
        return <div>{gif && !isRemoved && <GifDetail {...this.props} />}</div>
    }
}

export default connect(
    (state, { gifId, groupId }) => {
        const relatedGroupId = `${gifId}-related`
        return {
            gifId,
            relatedGroupId,
            gif: selectors.getGifById(state, gifId, groupId),
            nextGif: selectors.getNextGif(state, gifId, groupId || relatedGroupId),
            prevGif: selectors.getPrevGif(state, gifId, groupId || relatedGroupId),
            relatedGifs: selectors.getGifs(state, relatedGroupId),
            permissions: selectors.getUserPermissions(state),
            editModeChannels: selectors.getEditModeChannels(state),
            channelSelectorItems: state.channelSelectorItems,
            user: selectors.getUser(state),
            isRemoved: selectors.getRemovedGifs(state).indexOf(gifId) !== -1,
        }
    },
    {
        fetchGifsFromUrl,
        resetUserPermissions,
        fetchGifs,
        receivedGifs,
        setUserPermissions,
        setEditModeChannels,
        fetchChannels,
    },
)(EnsureGif)
