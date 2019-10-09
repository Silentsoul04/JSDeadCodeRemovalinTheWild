import { PureComponent } from 'react' // eslint-disable-line no-unused-vars
import { autobind } from 'core-decorators'
import { compose } from 'redux'
import { setDisplayName } from 'recompose'

import ToolTip from 'shared/components/tool-tip'
import css from './verified-badge.css'
import { hideIfMissing, hideIfFalse } from 'shared/util/conditional-rendering'

export const VerifiedBadgeToolTip = () => {
    return (
        <ToolTip className={css.toolTip} position={'left'}>
            <p className={css.content}>Verified</p>
        </ToolTip>
    )
}

export const VerifiedLogo = () => {
    return (
        <svg viewBox="-1 0 18 18" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard-2" transform="translate(-324.000000, -132.000000)" fill="#15CDFF">
                    <g id="Group-3" transform="translate(323.000000, 132.000000)">
                        <polygon
                            className={css.sprocket}
                            id="sprocket"
                            points="8.95093746 16.1755971 6.18494567 16.8455287 4.34519872 14.6949378 1.70947694 13.628319 1.49869564 10.8185214 2.85993451e-13 8.42276436 1.49869564 6.02700728 1.70947694 3.21720971 4.34519872 2.1505909 6.18494567 4.92383911e-14 8.95093746 0.669931593 11.7169293 4.82947016e-14 13.5566762 2.1505909 16.192398 3.21720971 16.4031793 6.02700728 17.9018749 8.42276436 16.4031793 10.8185214 16.192398 13.628319 13.5566762 14.6949378 11.7169293 16.8455287"
                        />
                        <path
                            d="M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z"
                            id="check"
                            fill="#121212"
                            transform="translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}

class VerifiedBadge extends PureComponent {
    state = { hover: false }

    static defaultProps = {
        tooltip: true,
    }

    @autobind
    onOver() {
        const { tooltip } = this.props
        if (tooltip) {
            this.setState({ hover: true })
        }
    }

    @autobind
    onOut() {
        this.setState({ hover: false })
    }

    render() {
        return (
            <div className={css.verifiedBadge} onMouseEnter={this.onOver} onMouseLeave={this.onOut}>
                <div style={{ position: 'relative' }}>
                    <VerifiedLogo /> {this.state.hover ? <VerifiedBadgeToolTip /> : null}
                </div>
            </div>
        )
    }
}
const enhance = compose(
    hideIfMissing('is_verified'),
    hideIfFalse('is_verified'),
    setDisplayName('VerifiedBadge'),
)

export default enhance(VerifiedBadge)
