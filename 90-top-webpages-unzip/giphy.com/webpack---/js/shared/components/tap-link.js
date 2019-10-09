import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import isMobile from '../util/is-mobile'

/**
 * Useful only when the keyboard is active on iOS,
 * since links don't fire onClick events until the keyboard closes
 */

// the number of pixels your finger can move before canceling
const MOVE_THRESHOLD = 5

let clientY, clientX, cancelLink

class TapLink extends PureComponent {
    static propTypes = {
        link: PropTypes.string,
        onTap: PropTypes.func,
    }
    onTouchStart(e) {
        // store the touch start y
        clientY = e.touches[0].clientY
        // store the touch start x
        clientX = e.touches[0].clientX
        // reset cancel
        cancelLink = false
    }
    onTouchMove(e) {
        const touch = e.changedTouches[0]
        // measure change as finger moves
        const deltaY = Math.abs(touch.clientY - clientY)
        if (deltaY > MOVE_THRESHOLD) {
            cancelLink = true
        }
        // measure change as finger moves
        const deltaX = Math.abs(touch.clientX - clientX)
        if (deltaX > MOVE_THRESHOLD) {
            cancelLink = true
        }
    }
    onTouchEnd(e, link, onTap) {
        // if we didn't cancel, navigate
        if (!cancelLink) {
            e.preventDefault()
            if (onTap) {
                onTap()
            }
            if (link) {
                location.href = link
            }
        }
    }
    render() {
        const { link, children, onTap, ...rest } = this.props
        return (
            <a
                href={link}
                onTouchStart={e => this.onTouchStart(e)}
                onTouchMove={e => this.onTouchMove(e)}
                onTouchEnd={e => this.onTouchEnd(e, link, onTap)}
                onMouseDown={e => this.onTouchEnd(e, link, onTap)}
                {...rest}
            >
                {children}
            </a>
        )
    }
}

export default isMobile()
    ? TapLink
    : ({ children, link, onTap, ...rest }) => (
          <a href={link} onClick={onTap} {...rest}>
              {children}
          </a>
      )
