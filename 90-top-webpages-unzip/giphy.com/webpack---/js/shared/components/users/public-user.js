import PropTypes from 'prop-types'
import UsernameBadge from './username-badge'
import css, { avatarSize as avatarSizePx } from './public-user.css'
import resizeAvatar from 'shared/util/resize-avatar'
import user from 'shared/prop-types/user'

const avatarSize = parseInt(avatarSizePx, 10)

const DisplayName = ({ maxWidth, channel, userName, shouldTruncate }) => (
    <h2 className={shouldTruncate ? css.usernameTruncate : css.username} style={{ maxWidth }}>
        <a href={channel}>{userName}</a>
    </h2>
)

/**
 *
 * @param {Function} onClick when container is clicked
 * @param {User} user
 * @param {String} avatar url to avatar
 * @param {String} userName name to display
 * @param {String} channel url to channel
 * @param {Number} maxWidth truncate user name text to this value
 */
const PublicUser = ({ onClick = () => {}, user, channel, userName, avatar, maxWidth: mw }) => {
    const maxWidth = mw ? mw - avatarSize : 'inherit'
    return (
        <div className={css.header} onClick={onClick}>
            <a
                href={channel}
                className={css.avatar}
                style={{ backgroundImage: `url(${resizeAvatar(avatar, avatarSize)})` }}
            />
            <DisplayName {...{ maxWidth, shouldTruncate: !!mw, userName, channel }} />
            <UsernameBadge {...{ maxWidth, user }} />
        </div>
    )
}

PublicUser.propTypes = {
    user: user.isRequired,
    onClick: PropTypes.func,
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

export default PublicUser
