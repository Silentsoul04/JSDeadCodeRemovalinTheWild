import { Component } from 'react'
import userProps from 'shared/prop-types/user'
import PropTypes from 'prop-types'
import { autobind } from 'core-decorators'
import { relativeUrl } from 'shared/util/url'
import { PublicUser } from 'shared/components/users'
import css from './index.css'
import { trackEvent, Actions } from 'shared/util/gif-detail-ga-events'

/**
 * PublicUser: Controls the left rail attribution content
 * for users with a public profile
 *
 * 1. GIF uploaded by user with public channel page: show channel
 * attribution + show source if present
 * 2. GIF uploaded by user with public user page: show user attribution
 * + show source if present
 *
 * @class PublicUser
 */
export default class PublicUserDetails extends Component {
    static propTypes = {
        user: userProps.isRequired,
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }
    state = {
        readMore: null,
    }
    componentDidMount() {
        this.setTruncation()
    }
    componentDidUpdate() {
        this.setTruncation()
    }
    @autobind
    setTruncation() {
        const { readMore } = this.state
        const descriptionHeight = this.description ? this.description.clientHeight : 0

        if (!readMore && descriptionHeight > 77) {
            this.setState({
                readMore: { isOpen: false },
            })
        }
    }
    @autobind
    toggleReadMore() {
        this.setState(prevState => {
            return {
                readMore: {
                    isOpen: !prevState.readMore.isOpen,
                },
            }
        })
    }
    render() {
        const { user, id } = this.props
        const { readMore } = this.state
        const userName = user.display_name || user.username
        const avatar = user.avatar_url
        const description = user.description
        const channel = relativeUrl(user.profile_url)
        const hasSocial = !!(user.facebook_url || user.instagram_url || user.twitter_url || user.tumblr_url)
        const socialLinks = [
            { type: 'facebook', url: user.facebook_url },
            { type: 'instagram', url: user.instagram_url },
            { type: 'twitter', url: user.twitter_url },
            { type: 'tumblr', url: user.tumblr_url },
        ]
        let decriptionClass

        if (!readMore) {
            decriptionClass = 'description'
        } else if (readMore.isOpen) {
            decriptionClass = 'descriptionOpen'
        } else if (!readMore.isOpen) {
            decriptionClass = 'descriptionClosed'
        }

        return (
            <div className={css.container}>
                {avatar && userName && (
                    <div className={css.publicUserContainer}>
                        <PublicUser
                            onClick={() => {
                                trackEvent(Actions.attributionClick, id)
                            }}
                            {...{ user, userName, avatar, channel }}
                        />
                    </div>
                )}
                {description && (
                    <p
                        className={css[decriptionClass]}
                        ref={el => {
                            this.description = el
                        }}
                    >
                        {description}
                    </p>
                )}
                {description && readMore && (
                    <p className={css.readMore} onClick={this.toggleReadMore}>
                        Read {readMore.isOpen ? 'less' : 'more'}{' '}
                        <i className={readMore.isOpen ? css.collapseIcon : css.expandIcon} />
                    </p>
                )}
                {hasSocial && (
                    <div className={css.social}>
                        <p className={css.followLabel}>Follow on:</p>
                        {socialLinks.map(({ type, url }) =>
                            url ? <a key={type} className={css[`${type}Button`]} href={url} target="_blank" /> : null,
                        )}
                    </div>
                )}
            </div>
        )
    }
}
