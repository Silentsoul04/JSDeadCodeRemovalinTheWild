import {
    PureComponent
} from 'react'
import {
    without,
    throttle,
    uniq
} from 'lodash'
import {
    getScrollTop
} from '../../util/scrolling'

let callbacks = []
let scrollTop = 0
export const DIRECTION = {
    DOWN: 'down',
    UP: 'up'
}
const onScroll = () => {
    const nextScrollTop = getScrollTop()
    const direction = nextScrollTop > scrollTop ? DIRECTION.DOWN : DIRECTION.UP
    const momentum = Math.abs(nextScrollTop - scrollTop)
    scrollTop = nextScrollTop
    callbacks.forEach(cb => cb(nextScrollTop, direction, momentum))
}
const addWindowScroll = callback => {
    if (callbacks.length === 0) {
        // single scroll handler for all window scrolls
        window.addEventListener('scroll', onScroll)
    }
    callbacks = uniq([...callbacks, callback])
}

const removeWindowScroll = callback => {
    callbacks = without(callbacks, callback)
    if (callbacks.length === 0) {
        window.removeEventListener('scroll', onScroll)
    }
}

export default (throttleTime = 500) => WrappedComponent =>
    class WindowScroll extends PureComponent {
        state = {
            scrollTop: 0,
        }
        onScroll = throttle((scrollTop, scrollDirection, scrollMomentum) => {
            this.setState({
                scrollTop,
                scrollDirection,
                scrollMomentum,
            })
        }, throttleTime)
        componentWillUnmount() {
            removeWindowScroll(this.onScroll)
        }
        componentDidMount() {
            addWindowScroll(this.onScroll)
        }
        componentDidUpdate(prevProps) {
            const {
                isOffScreen
            } = this.props
            if (isOffScreen) {
                removeWindowScroll(this.onScroll)
            } else if (!isOffScreen && prevProps.isOffScreen) {
                addWindowScroll(this.onScroll)
            }
        }
        render() {
            return <WrappedComponent { ...this.props
            } { ...this.state
            }
            />
        }
    }