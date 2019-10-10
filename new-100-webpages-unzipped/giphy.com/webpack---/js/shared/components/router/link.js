import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import Link from 'react-router-dom/Link'

/**
 * if context has a router, we're a child of React Router,
 * else use an "a" tag.
 */
const LinkOrA = ({
    href,
    children,
    shouldUseLinkFallback = false,
    ...rest
}, {
    router
}) => {
    if (router && !shouldUseLinkFallback) {
        return ( <
            Link to = {
                href
            } { ...rest
            } > {
                children
            } <
            /Link>
        )
    }
    return ( <
        a href = {
            href
        } { ...rest
        } > {
            children
        } <
        /a>
    )
}

LinkOrA.contextTypes = {
    router: PropTypes.object,
}
LinkOrA.propTypes = {
    href: PropTypes.string.isRequired,
}
export default LinkOrA