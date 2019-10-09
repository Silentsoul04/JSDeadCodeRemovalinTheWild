import { connect } from 'react-redux'
import { PureComponent } from 'react'
import { forEach, startCase } from 'lodash'
import { getSocialUrls, socialClick } from 'shared/util/gif-social'
import { giphyAnalyticsEvent } from 'shared/util/analytics'
import InstagramModal from 'shared/components/instagram-share/modal'
import { trackEvent } from 'shared/util/gif-detail-ga-events'
import SocialActions from 'shared/util/social-ga-events'
import gifProps from 'shared/prop-types/gif'
import css from './social.css'
import { getUserLoggedIn } from 'shared/redux/reducers'

const PRIME_TIME = ['facebook', 'twitter']

const getSocialLinks = gif => {
    const urls = getSocialUrls(gif)
    const shown = []
    const hidden = []

    forEach(urls, (url, type) => {
        const item = { url, type }
        if (PRIME_TIME.indexOf(type) > -1) {
            shown.push(item)
        } else {
            hidden.push(item)
        }
    })

    return { shown, hidden }
}

const onSocialClick = (e, type, url, gifId) => {
    giphyAnalyticsEvent({
        shareType: type,
        gifId: gifId,
    })
    trackEvent(type, gifId)
    socialClick.desktop(url, type, e)
}

const SocialButton = ({ url, type, gifId }) => (
    <a
        className={css[type]}
        href={url}
        title={`Share to ${startCase(type)}`}
        onClick={e => onSocialClick(e, type, url, gifId)}
    />
)

@connect(state => ({
    isLoggedIn: getUserLoggedIn(state),
}))
/**
 * GIF Detail - Social Buttons: Controls the social
 * sharing buttons on the GIF Detail pages. This
 * opens pop-ups for each social link and downloads
 * video for Instagram.
 *
 * @class SocialButtons

*/
class SocialShare extends PureComponent {
    static propTypes = {
        gif: gifProps,
    }
    state = {
        isShowAll: false,
    }
    closeInstagram = () => this.setState({ isInstagramVisible: false })
    showInstagram = () => this.setState({ isInstagramVisible: true })
    render() {
        const { gif, isLoggedIn } = this.props
        const { id } = gif
        const { isShowAll, isInstagramVisible } = this.state
        const { shown, hidden } = getSocialLinks(gif)
        return (
            <div className={css.container}>
                <h3 className={css.label}>Share it!</h3>
                {shown.map(({ url, type }) => (
                    <SocialButton key={type} url={url} type={type} gifId={id} />
                ))}
                <div
                    className={`${css.instagram} rad-modal-trigger`}
                    title="Share to Instagram"
                    data-title="Share on Instagram"
                    data-description="We're going to create a GIF that you can post to Instagram. Where should we send it?"
                    data-content="#instagram-modal"
                    onClick={() => {
                        if (isLoggedIn) {
                            this.showInstagram()
                            trackEvent(SocialActions.instagram, id)
                        } else {
                            location.href = `/login/?next=${encodeURIComponent(location.pathname)}&ref=auth_required`
                        }
                    }}
                />
                {isShowAll && (
                    <div className={css.hiddenButtons}>
                        {hidden.map(({ url, type }) => (
                            <SocialButton key={type} url={url} type={type} gifId={id} />
                        ))}
                    </div>
                )}
                <div
                    className={isShowAll ? css.hide : css.showAll}
                    onClick={() => this.setState({ isShowAll: !isShowAll })}
                />
                {isInstagramVisible && (
                    <InstagramModal {...{ gifId: id, elementId: 'content', onClose: this.closeInstagram }} />
                )}
            </div>
        )
    }
}

export default SocialShare
