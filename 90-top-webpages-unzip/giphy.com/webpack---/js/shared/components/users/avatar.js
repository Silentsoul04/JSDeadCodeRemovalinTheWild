import PropTypes from 'prop-types'
import { compose } from 'redux'
import { flattenProp, onlyUpdateForPropTypes, setPropTypes, setDisplayName } from 'recompose'
import { hideIfMissing } from 'shared/util/conditional-rendering'
import addUserChannelPageAsProp from './add-user-channel-page-url-as-prop'
import css from './avatar.css'

const enhance = compose(
    flattenProp('user'),
    hideIfMissing('avatar_url'),
    addUserChannelPageAsProp,
    onlyUpdateForPropTypes,
    setPropTypes({
        avatar_url: PropTypes.string.isRequired,
        channelPageUrl: PropTypes.string.isRequired,
    }),
    setDisplayName('Avatar'),
)

const Avatar = enhance(({ avatar_url, channelPageUrl, height = 45 }) => (
    <a className={css.avatar} href={channelPageUrl}>
        <img className={css.avatarImage} src={avatar_url} style={{ width: height, height }} />
    </a>
))

export default Avatar
