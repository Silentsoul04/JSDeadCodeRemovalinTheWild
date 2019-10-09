import { sanitize } from 'dompurify'
import { PureComponent } from 'react'
import { autobind } from 'core-decorators'
import {
    explorePingBackEvent,
    trendingGridPingBackEvent,
    relatedPingBackEvent,
    searchPingBackEvent,
    trendingCarouselPingBackEvent,
} from 'shared/pingbacks/pingback-networking'

export default () => WrappedComponent => {
    return class PingbackEnhancerGrid extends PureComponent {
        // constructs the pingback single action object
        @autobind
        createPingbackAction(actionType, gifId, tid) {
            return {
                action_type: actionType,
                ts: new Date().getTime(),
                gif_id: gifId,
                tid: tid,
            }
        }

        selectPingbackFunction() {
            const { category } = this.props

            const pingbackFunction = {
                search: searchPingBackEvent,
                home: trendingGridPingBackEvent,
                related: relatedPingBackEvent,
                'gif detail': relatedPingBackEvent,
                channel: null,
                explore: explorePingBackEvent,
                homeCarousel: trendingCarouselPingBackEvent,
            }
            return pingbackFunction[category]
        }

        // makes the actual pingback request using the array pingbackRequests at top
        @autobind
        firePingback(action, searchResponseId, user, skipQueue = false) {
            const pingbackRequest = this.selectPingbackFunction()
            // check to see if there are pingback events to send && make sure you dont duplicate the batch call

            pingbackRequest(action, searchResponseId, user, skipQueue)
        }

        @autobind
        formatPingback({ id, bottle_data = {} }, searchResponseId, actionType, gridMethod) {
            const { user } = this.props
            const { tid } = bottle_data
            const action = this.createPingbackAction(actionType, id, tid)
            this.firePingback(action, searchResponseId, user, !!tid)

            // optional grid method for other events
            if (gridMethod) {
                gridMethod(id)
            }
        }

        @autobind
        onSeen(gifObject, user, searchResponseId) {
            const { onSeen } = this.props
            const { bottle_data } = gifObject

            if (bottle_data) {
                const { tags = [] } = bottle_data

                tags.forEach(tag => {
                    const el = document.createElement('html')
                    tag = tag.replace('%%CACHEBUSTER%%', Date.now())
                    el.innerHTML = sanitize(tag)
                    const pixel = el.querySelector('img')
                    if (pixel) {
                        document.querySelector('head').appendChild(pixel)
                    }
                })
            }
            this.formatPingback(gifObject, searchResponseId, `SEEN`, onSeen)
        }

        @autobind
        onHover(gifObject, user, searchResponseId) {
            const { onGifHover } = this.props

            this.formatPingback(gifObject, searchResponseId, `HOVER`, onGifHover)
        }

        @autobind
        onClick(gifObject, user, searchResponseId) {
            const { onGifClick } = this.props

            this.formatPingback(gifObject, searchResponseId, `CLICK`, onGifClick)
        }

        render() {
            // if the pingback prop for some reason was not passed in return the component without modifying it
            if (!this.selectPingbackFunction()) {
                return <WrappedComponent {...this.props} />
            }

            return (
                <WrappedComponent
                    {...this.props}
                    onGifClick={this.onClick}
                    onGifSeen={this.onSeen}
                    onGifHover={this.onHover}
                />
            )
        }
    }
}
