import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { PureComponent } from 'react'
import css from './fit-text.css'

let hasFiredADelayedCheck = false
const timeToWaitForFont = 10

const getFontSize = el => getComputedStyle(el, null).getPropertyValue('font-size')

/**
 * Fit Text: Scales text to fit an element's
 * width and height.
 *
 * @class FitText
 */
export default class extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        maxFontSize: PropTypes.number,
        increment: PropTypes.number,
    }
    static defaultProps = {
        maxFontSize: 16,
        increment: 1,
    }
    componentWillUnmount() {
        this.unmounted = true
    }
    componentDidMount() {
        const { maxFontSize } = this.props

        this.sizeText(maxFontSize)

        if (!hasFiredADelayedCheck) {
            // wait timeToWaitForFont to make sure fonts load
            setTimeout(() => {
                this.sizeText()
                hasFiredADelayedCheck = true
            }, timeToWaitForFont)
        }
    }
    componentDidUpdate(prevProps) {
        const { maxFontSize } = this.props

        if (this.props.children !== prevProps.children) {
            this.sizeText(maxFontSize)
        } else {
            this.sizeText()
        }
    }
    sizeText(maxFontSize) {
        if (this.unmounted) {
            return
        }

        if (maxFontSize) {
            // size back up when possible
            const currentFontSize = getFontSize(this.el)
            const currentFontSizeInt = parseInt(currentFontSize, 10)

            this.el.style.fontSize = currentFontSize.replace(currentFontSizeInt, maxFontSize)
        }

        const { increment } = this.props
        const { offsetWidth, offsetHeight, scrollWidth, scrollHeight } = this.el
        const fontSize = getFontSize(this.el)
        const fontSizeInt = parseInt(fontSize, 10)
        if (scrollWidth > offsetWidth || scrollHeight > offsetHeight) {
            const newFontSize = fontSizeInt - increment
            this.el.style.fontSize = fontSize.replace(fontSizeInt, newFontSize)
            this.sizeText()
        }
    }
    render() {
        const { className, children } = this.props
        return (
            <span ref={c => (this.el = c)} className={`${css.container} ${className}`}>
                {children}
            </span>
        )
    }
}
