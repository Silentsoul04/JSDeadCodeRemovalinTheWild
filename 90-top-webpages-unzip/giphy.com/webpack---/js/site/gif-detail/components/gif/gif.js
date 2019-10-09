import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import gifProps from 'shared/prop-types/gif'
import ViewOptions from './view/options'
import Info from './meta/info'
import { googleAnalyticsEvent } from 'shared/util/analytics'
import css from './gif.css'
import Gif from 'shared/components/gif/gif'
import { addProtocol } from 'shared/util/url'
import { getHighestAnimatedRes } from 'shared/util/gif-extract'
import Privacy from 'shared/components/privacy/privacy'

const GifWithHD = getHighestAnimatedRes()(Gif)
const preloader = <div className={css.preload} />
const fullscreenStyle = { width: '100%', height: '100%' }

const fireEvent = () =>
    googleAnalyticsEvent({
        category: 'GIF Detail Sharing',
        action: 'Copied',
        label: 'Image URL',
    })

const GifWrapper = ({ gif: { source_post_url, source_domain }, isFullScreen, children }) => {
    const hasSource = source_post_url || source_domain
    return (
        <div>
            {hasSource ? (
                <a
                    className={isFullScreen ? css.sourceDisabled : ''}
                    href={addProtocol(source_post_url || source_domain)}
                    rel="nofollow"
                    target="_blank"
                >
                    {children}
                </a>
            ) : (
                children
            )}
        </div>
    )
}

/**
 * GIF Detail - GIF Image: Controls the displaying of
 * the GIF along with the tile/fullscreen/tv icon
 * hover state.
 *
 * @class GifAndInfo
 */
const GifAndInfo = ({
    gif,
    gifSize,
    isHidden,
    history: { replace },
    match: {
        params: { mode },
    },
}) => {
    const { is_sticker, is_hidden, path } = gif
    const isFullScreen = mode === 'fullscreen'
    const style = isFullScreen ? fullscreenStyle : gifSize
    return (
        <div style={{ width: gifSize.width }}>
            <Info gif={gif} />
            <div className={is_sticker ? css.sticker : css.gif} onContextMenu={fireEvent} style={gifSize}>
                {!isHidden && (
                    <div
                        className={isFullScreen ? css.fullscreen : css.image}
                        data-sticker={is_sticker}
                        onClick={() => {
                            if (isFullScreen) {
                                replace(path)
                            }
                        }}
                    >
                        <GifWrapper gif={gif} isFullScreen={isFullScreen}>
                            <GifWithHD {...{ gif, preloader, style }} />
                        </GifWrapper>
                    </div>
                )}
                <ViewOptions className={css.overlay} gif={gif} />
            </div>
            {is_hidden && <Privacy title={'This GIF is private and can only be seen by you.'} />}
        </div>
    )
}

GifAndInfo.propTypes = {
    gif: gifProps.isRequired,
    gifSize: PropTypes.object.isRequired,
    isHidden: PropTypes.bool,
    isFlipped: PropTypes.bool,
    viewCount: PropTypes.number,
}

export default withRouter(GifAndInfo)
