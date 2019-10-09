import React from 'react'
import PropTypes from 'prop-types'
import { autobind, debounce } from 'core-decorators'
import { isString } from 'lodash'
import { getScrollTop, getScrollLeft } from '../../util/scrolling'
import log from '../../util/log'

export const VERTICAL = 'VERTICAL',
    HORIZONTAL = 'HORIZONTAL',
    SCROLL = 'scroll',
    SCROLL_STOP = 'scrollstop'

export default (
    scrollElementInPageOrSelector,
    direction = VERTICAL,
    scrollEvent = SCROLL, // eslint-disable-line no-unused-vars
    throttleTime = 150,
) => WrappedComponent =>
    class ScrollingPropsProxy extends React.Component {
        static propTypes = {
            isOffScreen: PropTypes.bool.isRequired, // turns scroll handlers off and on
        }
        state = {
            scrollTop: 0,
            scrollLeft: 0,
        }
        scrollElement = scrollElementInPageOrSelector
        scrollProp = direction === VERTICAL ? 'scrollTop' : 'scrollLeft'
        scrollValue = () => {
            if (this.scrollElement === window) {
                return direction === VERTICAL ? getScrollTop() : getScrollLeft()
            }
            return direction === VERTICAL ? this.scrollElement.scrollTop : this.scrollElement.scrollLeft
        }
        @autobind
        @debounce(throttleTime)
        onScroll() {
            this.setState({
                [this.scrollProp]: this.scrollValue(),
            })
        }
        componentWillUnmount() {
            this.scrollElement && this.scrollElement.removeEventListener('scroll', this.onScroll)
            super.componentDidUpdate && super.componentDidUpdate()
        }
        componentDidMount() {
            if (isString(this.scrollElement)) {
                this.scrollElement = document.querySelector(this.scrollElement)
            }
            if (!this.scrollElement) {
                let wrappedComponent = this.getWrappedComponent()
                while (!this.scrollElement && wrappedComponent) {
                    this.scrollElement = wrappedComponent.getContainer ? wrappedComponent.getContainer() : null
                    wrappedComponent = wrappedComponent.getWrappedComponent
                        ? wrappedComponent.getWrappedComponent()
                        : null
                }
            }
            if (!this.scrollElement) {
                log.error('Missing scrollElement in ScrollingPropsProxy')
            }

            this.scrollElement.addEventListener('scroll', this.onScroll)

            super.componentDidMount && super.componentDidMount()
        }
        componentDidUpdate(prevProps) {
            if (this.props.isOffScreen !== prevProps.isOffScreen) {
                if (this.props.isOffScreen) {
                    this.scrollElement && this.scrollElement.removeEventListener('scroll', this.onScroll)
                } else {
                    this.onScroll()
                    this.scrollElement && this.scrollElement.addEventListener('scroll', this.onScroll)
                }
            }
            super.componentDidUpdate && super.componentDidUpdate()
        }
        getWrappedComponent() {
            return this.wrappedComponent
        }
        render() {
            return <WrappedComponent {...this.props} {...this.state} ref={c => (this.wrappedComponent = c)} />
        }
    }
