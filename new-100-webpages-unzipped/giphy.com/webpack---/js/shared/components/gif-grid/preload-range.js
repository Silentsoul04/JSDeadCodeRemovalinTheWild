import PropTypes from 'prop-types'
import {
    Component
} from 'react'
import bsRange from '../../util/bs-range'
import {
    isEqual
} from 'lodash'

const {
    arrayOf,
    number
} = PropTypes
// Whether we measure the element's top or left
export const VERTICAL = 'VERTICAL',
    HORIZONTAL = 'HORIZONTAL',
    propTypes = {
        isInPriorityRange: arrayOf(number).isRequired,
        isInPreloadRange: arrayOf(number).isRequired,
    },
    /**
     * Used to determine if an index is included in the range, including the start and end
     */
    isInRange = (index, range) => index >= range[0] && index <= range[1]

const keepInstance = (currentArray, newArray) => (isEqual(currentArray, newArray) ? currentArray : newArray)

/**
 * PreloadRange: Will set state with isInPreloadRange and isInPriorityRange
 * Inheritance Inversion to preload grid images when scrolling vertically
 * Set two ranges, one for priority preloading, and one for general preload
 *
 * @class PreloadRange
 * @param {Class} WrappedComponent The class to wrap and pass props to
 * @param {Object} preload The low and high for regular preloading
 * @param {Object} priority The low and high for priority preloading
 * @param {String} direction Whether to check top or left of the elements
 */
export default (
    preload = {
        low: 0,
        high: 0
    },
    priority = {
        low: 0,
        high: 0
    },
    direction = VERTICAL,
) => WrappedComponent =>
    class PreloadRangePropsProxy extends Component {
        static propTypes = {
            // required prop so we check for priority when scroll position changes
            [direction === VERTICAL ? 'scrollTop' : 'scrollLeft']: number.isRequired,
        }
        state = {
            isInPreloadRange: [],
            isInPriorityRange: [],
            isVisibleOnScreen: [],
        }
        propToCheck = direction === VERTICAL ? 'scrollTop' : 'scrollLeft'
        windowPropToCheck = direction === VERTICAL ? 'innerHeight' : 'innerWidth'
        configureImagePreloading() {
            let wrappedComponent = this.getWrappedComponent()
            while (!this.grid && wrappedComponent) {
                if (wrappedComponent.getElements) {
                    this.grid = wrappedComponent
                    break
                }
                wrappedComponent = wrappedComponent.getWrappedComponent ? wrappedComponent.getWrappedComponent() : null
            }

            if (!this.grid) {
                throw "Preload Range - Couldn't find Grid.getElements() function"
            }

            // We need to use the Inheritance Inversion (II) pattern to get elements
            const li = this.grid.getElements()

            if (li.length === 0) {
                return
            }

            const {
                gifsGrid
            } = this.grid
            const gridOffset = gifsGrid ? gifsGrid.getBoundingClientRect().top : 0
            // if the gif contains a y position data attribute, use that instead
            // of checking it's bounding client rect.
            const extractValue = element =>
                element.dataset.y ?
                parseInt(element.dataset.y) + gridOffset :
                element.getBoundingClientRect()[direction === VERTICAL ? 'top' : 'left']

            // gifs to preload e.g [0,80]
            const isInPreloadRange = bsRange(li, extractValue, preload.low, preload.high),
                // gifs to preload with priority [0, 12]
                isInPriorityRange = bsRange(li, extractValue, priority.low, priority.high),
                isVisibleOnScreen = bsRange(li, extractValue, 0, window[this.windowPropToCheck])

            // log.info('priority grid gifs', isInPriorityRange, 'preload', isInPreloadRange)

            this.setState({
                isInPriorityRange: keepInstance(this.state.isInPriorityRange, isInPriorityRange),
                isInPreloadRange: keepInstance(this.state.isInPreloadRange, isInPreloadRange),
                isVisibleOnScreen: keepInstance(this.state.isVisibleOnScreen, isVisibleOnScreen),
            })
        }
        componentDidUpdate(prevProps) {
            // see if scroll prop changed, or gifs
            if (prevProps[this.propToCheck] !== this.props[this.propToCheck] || prevProps.gifs !== this.props.gifs) {
                // if gifs change, we need to let Masonry render complete since it sets state
                this.renderTimeout = setTimeout(() => this.configureImagePreloading(), 0)
            }
        }
        componentWillUnmount() {
            clearTimeout(this.renderTimeout)
        }
        componentDidMount() {
            this.configureImagePreloading()
        }
        getWrappedComponent() {
            return this.wrappedComponent
        }
        render() {
            return <WrappedComponent { ...this.props
            } { ...this.state
            }
            ref = {
                c => (this.wrappedComponent = c)
            }
            />
        }
    }