import {
    Component
} from 'react'
import {
    matchPath
} from 'react-router'
import css from './gif-menu.css'
import Clipboard from 'clipboard'
import Favorite from '../../components/favorite/favorite'
import {
    trackEvent as trackGifDetailEvent,
    Actions
} from 'shared/util/gif-detail-ga-events'
import routes from 'shared/routes'
import {
    trackEvent
} from '../gif-grid/track-grid-events'
import {
    getShareUrl
} from '../../util/gif-extract'
import EditButton from 'shared/containers/edit-button'
import {
    removeAllQueryParams
} from 'shared/util/url-utils'

const isGifDetail = () => matchPath(location.pathname, routes.GIF_DETAIL)

const SUCCESS_MESSAGE = 'Link copied to clipboard!',
    ERROR_MESSAGE = 'Error copying to clipboard :('

const onLinkCopy = (category, label) => trackEvent({
        category,
        action: 'GIF Copy Link',
        label
    }),
    // onDownload = () => trackEvent({ category: 'GIF Grid', action: 'Click', label: 'Download Button' }),
    showClipboard = Clipboard.isSupported()

/**
 * GIF Grid - Favorite: Favorite GIFs in the GIF grid!
 *
 * @class Favorite
 */
export default class extends Component {
    createClipboard() {
        const {
            gif: {
                id,
                images: {
                    original: {
                        url
                    },
                },
            },
            category,
        } = this.props
        this.clipboard = new Clipboard(this.copyButton, {
            text: () => removeAllQueryParams(getShareUrl(url))
        })
        this.clipboard.on('success', () => {
            onLinkCopy(category, id)
            window.showSuccess(SUCCESS_MESSAGE)
        })
        this.clipboard.on('error', () => window.showError(ERROR_MESSAGE))
    }
    destroyClipboard() {
        if (this.clipboard) {
            this.clipboard.destroy()
        }
    }
    componentWillUnmount() {
        this.destroyClipboard()
    }
    render() {
        const {
            gif: {
                id,
                images: {
                    original: {
                        url
                    },
                },
                slug,
                url: gifUrl,
                is_favorite: isFavorite = false, // this seemed to be unset somehow
            },
            category,
            className,
        } = this.props
        return ( <
            div className = {
                className || css.container
            } >
            <
            Favorite id = {
                id
            }
            url = {
                gifUrl
            }
            isFavorite = {
                isFavorite
            }
            onClick = {
                () =>
                isGifDetail() ?
                trackGifDetailEvent(Actions.relatedFavorite, id) // on gif detail pages this is a related favorite
                :
                    trackEvent(category, 'GIF FAVORITE', id) // other grids this will be SEARCH
            }
            /> {
                showClipboard && ( <
                    a ref = {
                        c => (this.copyButton = c)
                    }
                    onMouseOver = {
                        () => this.createClipboard()
                    }
                    onMouseOut = {
                        () => this.destroyClipboard()
                    }
                    className = {
                        css.link
                    }
                    href = {
                        removeAllQueryParams(url)
                    }
                    onClick = {
                        e => e.preventDefault()
                    }
                    />
                )
            } <
            EditButton slug = {
                slug
            }
            gif = {
                this.props.gif
            }
            /> <
            /div>
        )
    }
}