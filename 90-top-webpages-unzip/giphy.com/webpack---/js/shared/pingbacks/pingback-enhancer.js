import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { PureComponent } from 'react'
import { autobind } from 'core-decorators'
import { fetchPingbackRequest } from 'shared/pingbacks/pingback-networking'

export default () => WrappedComponent => {
    return class PingbackEnhancer extends PureComponent {
        constructor(props) {
            super(props)
            this.state = { seen: false }
            this.checkTimeout = null
            this.onScroll = this.checkForSeen.bind(this)
        }

        componentDidMount() {
            if (!this.props.pingbackAnalytics) return

            const {
                pingbackAnalytics: { needToCheckForOverflow },
            } = this.props
            // we got ourselves a race condition
            // user does not get set on the Window fast enough to get the logged_in_user_id at mount

            if (needToCheckForOverflow) {
                // the overflowed items have an upward animation so its important we wait a bit before checking
                this.checkTimeout = setTimeout(() => {
                    this.checkForSeen()
                }, 1000)
            } else {
                this.checkForSeen()
            }

            window.addEventListener('scroll', this.onScroll, false)
            window.addEventListener('touchmove', this.onScroll, false)
            window.addEventListener('beforeunload', this.fireImmediatePingback, false)
        }

        componentWillUnmount() {
            if (!this.props.pingbackAnalytics) return

            clearTimeout(this.checkTimeout)
            window.removeEventListener('scroll', this.onScroll, false)
            window.removeEventListener('touchmove', this.onScroll, false)
            window.removeEventListener('beforeunload', this.fireImmediatePingback, false)
        }

        // constructs the pingback single action object
        @autobind
        createPingbackAction(actionType, attributes) {
            return {
                action_type: actionType,
                ts: new Date().getTime(),
                attributes,
            }
        }

        // makes the actual pingback request using the array pingbackRequests at top
        @autobind
        fireImmediatePingback() {
            fetchPingbackRequest()
        }

        // makes the actual pingback request using the array pingbackRequests at top
        @autobind
        firePingback(action) {
            var {
                pingbackAnalytics: { searchResponseId, pingbackRequest, user },
            } = this.props
            pingbackRequest(action, searchResponseId, user)
        }

        // returns bool - checks to see if the element is in the viewport
        @autobind
        isInViewPort(rect) {
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            )
        }

        @autobind
        isNotAnOverflowedItem(parentElement, index) {
            // check to see if the item is visible in the container viewbox and not overflown
            return (
                parentElement.children[index].offsetTop + parentElement.children[index].offsetHeight <=
                parentElement.offsetTop + parentElement.offsetHeight
            )
        }

        checkForSeen() {
            const { seen } = this.state
            const {
                index,
                pingbackAnalytics: { needToCheckForOverflow },
            } = this.props

            if (seen) return

            // innerRefs skip the .el
            const rect = (this.container && this.container.el && this.container.el.getBoundingClientRect()) || undefined
            const isInViewPort = rect ? this.isInViewPort(rect) : false

            // pass the parentElement container to check whether this item is overflowed or not
            // some items arent visible because they are overflow hidden
            const checkOverflow =
                needToCheckForOverflow && this.container
                    ? this.isNotAnOverflowedItem(this.container.el.parentElement, index)
                    : true

            // if the item is visible and has not yet been seen trigger the event
            if (checkOverflow && !seen && isInViewPort) {
                this.setState({ seen: true })
                this.onSeen(this.props)
            }
        }

        @autobind
        onSeen(props) {
            const {
                pingbackAnalytics: {
                    actionNames: { seen },
                    data,
                },
            } = props
            const action = this.createPingbackAction(seen, data)
            this.firePingback(action)
        }

        @autobind
        onHover(props) {
            const {
                pingbackAnalytics: {
                    actionNames: { hover },
                    data,
                },
            } = props
            const action = this.createPingbackAction(hover, data)
            this.firePingback(action)
        }

        @autobind
        onClick(props) {
            const {
                pingbackAnalytics: {
                    actionNames: { click },
                    data,
                },
            } = props
            const action = this.createPingbackAction(click, data)
            this.firePingback(action)
        }

        render() {
            const { pingbackAnalytics } = this.props
            // if the pingback prop for some reason was not passed in return the component without modifying it
            if (!pingbackAnalytics) {
                return <WrappedComponent {...this.props} />
            }

            const pingBackFunctions = {
                onClick: this.onClick,
                onHover: this.onHover,
                checkForSeen: this.checkForSeen,
            }

            return (
                <WrappedComponent
                    ref={el => (this.container = el)}
                    pingBackFunctions={pingBackFunctions}
                    {...this.props}
                />
            )
        }
    }
}
