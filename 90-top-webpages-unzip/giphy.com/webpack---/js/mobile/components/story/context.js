import produce from 'immer'
import { pull } from 'lodash'
import { createContext, PureComponent, forwardRef } from 'react'
import useCanVideoAutoPlay from 'shared/hooks/can-video-autoplay'

export const StoryContext = createContext({})

export const withStoryContext = WrappedComponent =>
    forwardRef((props, ref) => (
        <StoryContext.Consumer>
            {context => <WrappedComponent {...context} {...props} ref={ref} />}
        </StoryContext.Consumer>
    ))

const spread = produce(Object.assign)
const withStoryContextManager = WrappedComponent => {
    class StoryContextManager extends PureComponent {
        state = {
            // has the active item played at least once
            hasPlayedOnce: false,
            // when true, signal that we don't wanna loop no more
            isWaitingForMediaEnd: false,
        }
        // array of callbacks for when media ends
        onEndedCBs = []
        // fired when a story item that's active loops
        hasPlayedOnce = hasPlayedOnce => this.setState({ hasPlayedOnce })
        // invoked after the timeout fires to move to the next animation
        waitForMediaEnd = cb => {
            // ensure no duplicates
            pull(this.onEndedCBs, cb)
            const { useVideo } = this.props
            const { hasPlayedOnce } = this.state
            // if we've looped once, fire the cb right away
            if (hasPlayedOnce || !useVideo) {
                cb()
            } else {
                // if not, update the context to let the story item
                // know that we're waiting and shouldn't loop anymore
                this.setState({ isWaitingForMediaEnd: true })
                this.onEndedCBs.push(cb)
            }
        }
        // when the loop is turned off on the story item
        // we'll get a media ended event
        onEnded = () => {
            this.onEndedCBs.forEach(cb => cb())
            this.onEndedCBs = []
            this.setState({ isWaitingForMediaEnd: false })
        }
        // boilerplate context manager stuff
        api = {
            hasPlayedOnce: this.hasPlayedOnce,
            onEnded: this.onEnded,
            waitForMediaEnd: this.waitForMediaEnd,
        }
        value = {}
        render() {
            const { forwardedRef, ...rest } = this.props
            // value === this.value, if nothing changes
            const value = spread(this.value, {
                ...this.state,
                ...this.api,
                useVideo: this.props.useVideo,
            })
            this.value = value
            return (
                <StoryContext.Provider value={value}>
                    <WrappedComponent {...rest} ref={forwardedRef} />
                </StoryContext.Provider>
            )
        }
    }
    // if refs need to make it to children, do this forwardRef stuff
    return forwardRef((props, ref) => {
        const useVideo = useCanVideoAutoPlay()
        return <StoryContextManager {...props} useVideo={useVideo} forwardedRef={ref} />
    })
}

export default withStoryContextManager
