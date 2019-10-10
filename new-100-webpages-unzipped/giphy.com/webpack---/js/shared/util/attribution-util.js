import {
    parse
} from 'url'
import {
    relativeUrl
} from 'shared/util/url'

const getDisplayName = ({
        username,
        display_name: displayName,
        short_display_name: shortDisplayName
    }) =>
    shortDisplayName || displayName || username

// get user props for the PublicUser module
export const getAttributionProps = ({
    user,
    source_post_url
}) => {
    const sourceBits = source_post_url ? parse(source_post_url) : {}
    const source = sourceBits.hostname ? sourceBits.hostname.replace('www.', '') : ''
    return {
        user,
        source,
        sourceFull: source_post_url,
        avatar: user ? user.avatar_url : '',
        channel: user && user.profile_url ? relativeUrl(user.profile_url) : '',
        userName: user ? getDisplayName(user) : '',
        changeIndicator: user || source,
    }
}