import css from './back-button.css'
import {
    withRouter
} from 'react-router'
import WindowResize from 'shared/util/window-resize'
import {
    gridWidth
} from 'shared/css/grid.css'
import {
    GIF_MAKER
} from '../route'

// start moving the back button at less than this size
const START_FADE_OUT = 1300
const APP_WIDTH = parseInt(gridWidth)
// The back button's max distance from the left
const MAX_MARGIN_LEFT = 35
// at what distance to hide the button outright
const DISTANCE_TO_HIDE = START_FADE_OUT - APP_WIDTH - 120

const BackButton = ({
    innerWidth,
    location: {
        pathname
    },
    history: {
        goBack
    }
}) => {
    if (pathname === GIF_MAKER) {
        // don't show on /create/gifmaker
        return null
    }
    let marginLeft = MAX_MARGIN_LEFT
    const currentDistance = START_FADE_OUT - innerWidth
    if (currentDistance > 0) {
        marginLeft = MAX_MARGIN_LEFT - (currentDistance / (START_FADE_OUT - APP_WIDTH)) * MAX_MARGIN_LEFT
    }
    const showButton = currentDistance < DISTANCE_TO_HIDE
    return ( <
        div className = {
            showButton ? css.backButton : css.backButtonFade
        }
        onClick = {
            () => goBack()
        }
        style = {
            {
                transform: `translateX(${marginLeft}px)`
            }
        } >
        <
        span className = {
            css.leftArrowIcon
        }
        /> <
        /div>
    )
}

export default withRouter(WindowResize(['innerWidth'])(BackButton))