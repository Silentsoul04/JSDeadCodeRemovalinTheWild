import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import css from './power-glove.css'

const getFingerStyle = (x, y) => {
    const offsetX = window.innerWidth / 2
    const offsetY = window.innerHeight / 2
    const diffX = offsetX - x
    const diffY = offsetY - y
    const radians = Math.atan2(diffX, diffY)
    const degrees = -radians * (180 / Math.PI) + 180

    return {
        transform: `translate(${x}px, ${y}px) rotate(${degrees}deg)`,
    }
}

export default class PowerGlovePoint extends PureComponent {
    static propTypes = {
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        isDragging: PropTypes.bool,
        isInvalid: PropTypes.bool,
        onHidden: PropTypes.func.isRequired,
    }

    static defaultProps = {
        status: '',
    }

    onTransitionEnd() {
        const { isInvalid, onHidden } = this.props
        isInvalid && onHidden()
    }

    render() {
        const { x, y, isDragging, isInvalid } = this.props
        const style = getFingerStyle(x, y, this.state)
        const isVisible = isDragging || isInvalid
        return (
            <div className={isVisible ? css.container : css.containerHidden}>
                <div
                    className={isInvalid ? css.gloveSassy : css.glove}
                    style={style}
                    onTransitionEnd={() => this.onTransitionEnd()}
                >
                    <div className={isInvalid ? css.innerSassy : css.inner}>
                        <div className={isInvalid ? css.fingerSassy : css.finger} />
                    </div>
                </div>
            </div>
        )
    }
}
