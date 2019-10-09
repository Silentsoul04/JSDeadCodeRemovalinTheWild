import { addProtocol, removeProtocol } from 'shared/util/url'
import { trackEvent, Actions } from 'shared/util/gif-detail-ga-events'
import gifProps from 'shared/prop-types/gif'
import css from './index.css'

const getUrl = ({ source_post_url, user }) => {
    if (source_post_url) {
        return source_post_url
    }

    if (user && user.is_public) {
        const { website_url, source_image_url } = user
        return website_url || source_image_url
    }
}

/**
 * GIF Detail - Source URL
 *
 * @class SourceUrl
 */
const SourceUrl = ({ gif }) => {
    const url = getUrl(gif)
    const isVimeo = url ? url.match(/vimeo.com/) : false
    return url ? (
        <div className={css.container}>
            <span className={css.subheading}>Source</span>
            <a
                className={isVimeo ? css.vimeoSource : css.source}
                onClick={() => trackEvent(Actions.sourceClick, gif.id)}
                href={addProtocol(url)}
                target="_blank"
            >
                {isVimeo ? <img className={css.vimeo} src="/static/img/vimeo.png" /> : <i className={css.linkIcon} />}
                <span>{removeProtocol(url, true)}</span>
            </a>
        </div>
    ) : null
}

SourceUrl.propTypes = {
    gif: gifProps.isRequired,
}

export default SourceUrl
