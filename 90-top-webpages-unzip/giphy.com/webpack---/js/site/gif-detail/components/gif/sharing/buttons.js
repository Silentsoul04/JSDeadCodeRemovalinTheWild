import { PureComponent } from 'react'
import gifProps from 'shared/prop-types/gif'
import withRouter from 'react-router-dom/withRouter'
import Favorite from 'shared/components/favorite/favorite'
import { trackEvent, Actions } from 'shared/util/gif-detail-ga-events'
import css from './buttons.css'

const MODES = [
    {
        label: 'Copy link',
        type: 'links',
        className: css.links,
    },
    {
        label: 'Media',
        type: 'media',
        className: css.media,
    },
    {
        label: 'Embed',
        type: 'embed',
        className: css.embed,
    },
]

/**
 * GIF Detail - GIF Buttons: Controls
 * GIF utility buttons, including embed,
 * download, and links.
 *
 * @class GifButtons
 */
@withRouter
export default class GifDetailButtons extends PureComponent {
    static propTypes = {
        gif: gifProps,
    }
    updateMode(nextMode) {
        const {
            gif: { path },
            match: {
                params: { mode },
            },
            history: { replace },
        } = this.props
        mode !== nextMode && replace(`${path}/${nextMode}`)
    }
    render() {
        const {
            gif: { id, is_favorite: isFavorite, url },
        } = this.props
        return (
            <div className={css.container}>
                <Favorite
                    className={css.favorite}
                    id={id}
                    isFavorite={!!isFavorite}
                    url={url}
                    showLabel={true}
                    onClick={() => trackEvent(Actions.favorite, id)}
                />
                {MODES.map(({ label, type, className }) => (
                    <div key={type} className={css.button} onClick={() => this.updateMode(type)}>
                        <i className={className} />
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        )
    }
}
