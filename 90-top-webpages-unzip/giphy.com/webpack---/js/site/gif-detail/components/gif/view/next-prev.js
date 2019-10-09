import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import RouterLink from 'shared/components/router/link'
import { trackEvent, Actions } from 'shared/util/gif-detail-ga-events'
import gifProps from 'shared/prop-types/gif'
import css from './next-prev.css'

const NextPrev = ({
    gif,
    children,
    className,
    gaAction,
    history: { push },
    match: {
        params: { mode },
    },
}) => {
    return gif ? (
        <RouterLink
            className={`${css.active} ${className}`}
            onClick={e => {
                e.preventDefault()
                push(`${gif.path}${mode ? `/${mode}` : ''}`)
                trackEvent(gaAction, gif.id)
            }}
            href={gif.path}
        >
            {children}
        </RouterLink>
    ) : (
        <span className={`${css.inactive} ${className}`}>{children}</span>
    )
}

NextPrev.propTypes = {
    gif: gifProps,
    className: PropTypes.string,
    gaAction: PropTypes.oneOf([Actions.previousClick, Actions.nextClick]),
}

export default withRouter(NextPrev)
