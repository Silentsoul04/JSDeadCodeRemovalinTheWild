import { PureComponent } from 'react'
import { autobind, debounce } from 'core-decorators'
import { isArray } from 'lodash'
/**
 * WindowResize: HOC for window props that change on window.resize
 *
 * @param {String|Array} props The props on the window to pass to the wrapped component
 * @param {Number} debounceRate time in ms for debouncing
 */
const WindowResize = (props = ['innerWidth', 'innerHeight'], debounceRate = 5) => WrappedComponent =>
    class WindowResizeiiHoC extends PureComponent {
        state = {}
        @autobind
        @debounce(debounceRate)
        resize() {
            const setState = prop => this.setState({ [prop]: window[prop] })
            if (isArray(props)) {
                props.forEach(prop => setState(prop))
            } else {
                setState(props)
            }
        }
        componentWillMount() {
            this.resize()
            window.addEventListener('resize', this.resize)
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.resize)
        }
        render() {
            return <WrappedComponent {...this.props} {...this.state} />
        }
    }

export default WindowResize
