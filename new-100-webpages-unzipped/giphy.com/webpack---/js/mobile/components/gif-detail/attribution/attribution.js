import PropTypes from 'prop-types'
import {
    connect
} from 'react-redux'
import {
    compose
} from 'redux'
import {
    flattenProp,
    setPropTypes,
    onlyUpdateForPropTypes,
    setDisplayName
} from 'recompose'
import {
    PublicUser
} from 'shared/components/users'
import {
    getSwipeStyles
} from './attribution-utils'
import {
    getAttributionProps
} from 'shared/util/attribution-util'
import userProps from 'shared/prop-types/user'
import css from './attribution.css'
import {
    trackEvent,
    Actions
} from 'shared/util/gif-detail-ga-events'
import SourceFallback from './source-fallback'

const enhance = compose(
    flattenProp('gif'),
    onlyUpdateForPropTypes,
    setPropTypes({
        appWidth: PropTypes.number,
        user: userProps,
        swipeProgress: PropTypes.number,
        nextUser: PropTypes.object,
    }),
    connect(({
        appSize
    }) => ({
        appWidth: appSize.width,
    })),
    setDisplayName('Attribution'),
)

const Attribution = enhance(({
    user,
    nextUser,
    swipeProgress,
    id,
    gif = {},
    nextGif = {}
}) => {
    const userProps = gif ? getAttributionProps(gif) : null
    const nextUserProps = nextGif ? getAttributionProps(nextGif) : null
    const {
        transform
    } = getSwipeStyles(userProps, nextUserProps, swipeProgress)
    return ( <
        div className = {
            css.container
        } >
        <
        div className = {
            css.wrapper
        }
        style = {
            {
                transform
            }
        } >
        <
        div className = {
            css.user
        } > {
            user ? ( <
                PublicUser { ...userProps
                }
                onClick = {
                    () => trackEvent(Actions.attributionClick, id)
                }
                />
            ) : ( <
                SourceFallback { ...userProps
                }
                />
            )
        } <
        /div> <
        div className = {
            swipeProgress < 0 ? css.nextUser : css.previousUser
        } > {
            nextUser ? < PublicUser { ...nextUserProps
            }
            /> : <SourceFallback {...nextUserProps} / >
        } <
        /div> <
        /div> <
        /div>
    )
})

export default Attribution