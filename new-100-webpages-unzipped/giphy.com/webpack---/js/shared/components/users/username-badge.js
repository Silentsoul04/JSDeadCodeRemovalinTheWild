import PropTypes from 'prop-types'
import {
    compose
} from 'redux'
import {
    flattenProp,
    onlyUpdateForPropTypes,
    setPropTypes,
    setDisplayName
} from 'recompose'
import {
    hideIfMissing
} from 'shared/util/conditional-rendering'
import VerifiedBadge from './verified-badge'
import addUserChannelPageAsProp from './add-user-channel-page-url-as-prop'
import css from './username-badge.css'

const enhance = compose(
    flattenProp('user'),
    hideIfMissing('username'),
    addUserChannelPageAsProp,
    onlyUpdateForPropTypes,
    setPropTypes({
        username: PropTypes.string.isRequired,
        channelPageUrl: PropTypes.string.isRequired,
        maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
    setDisplayName('UsernameBadge'),
)

const UsernameBadge = enhance(({
    username,
    is_verified,
    channelPageUrl,
    tooltip,
    maxWidth
}) => ( <
    div className = {
        css.usernameWrapper
    }
    style = {
        {
            maxWidth
        }
    } >
    <
    a href = {
        channelPageUrl
    }
    className = {
        css.username
    } >
    @ {
        username
    } <
    /a> <
    VerifiedBadge is_verified = {
        is_verified
    }
    tooltip = {
        tooltip
    }
    css = {
        css
    }
    /> <
    /div>
))

export default UsernameBadge