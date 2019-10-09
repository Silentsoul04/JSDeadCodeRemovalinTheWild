import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { giphyGreen, giphyRed } from '../../css/colors.css'
import css from './toggle.css'

const { bool, func, element, string, number } = PropTypes
export default class AutoPlay extends PureComponent {
    static propTypes = {
        toggle: func.isRequired,
        isOn: bool.isRequired,
        backgroundColor: string,
        onColor: string,
        offColor: string, // just this one color is configurable, I guess
        onElement: element,
        offElement: element,
        height: number,
        width: number,
    }
    render() {
        const {
            backgroundColor,
            toggle,
            isOn,
            onElement,
            offElement,
            onColor,
            offColor,
            height = 25,
            width = 50,
        } = this.props
        const lineHeight = `${height}px`
        return (
            <div
                className={isOn ? css.container : css.containerOff}
                onClick={() => toggle(isOn)}
                style={{ height, width, backgroundColor }}
            >
                <div className={isOn ? css.iconOn : css.icon} style={{ height, width: width / 2, lineHeight }}>
                    {onElement}
                </div>
                <div className={isOn ? css.icon : css.iconOn} style={{ height, width: width / 2, lineHeight }}>
                    {offElement}
                </div>
                <span
                    className={css.toggleBackground}
                    style={{
                        backgroundColor: isOn ? onColor || giphyGreen : offColor || giphyRed,
                        height,
                        width: width / 2,
                        left: isOn ? 0 : width / 2,
                    }}
                />
            </div>
        )
    }
}
