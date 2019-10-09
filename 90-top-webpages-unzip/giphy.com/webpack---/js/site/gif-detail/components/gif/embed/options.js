import PropTypes from 'prop-types' // eslint-disable-line no-unused-vars
import { Component } from 'react'
import Toggle from 'shared/components/toggle/toggle'
import { giphyGreen, giphyRed, giphyBlack } from 'shared/css/colors.css'
import css from './options.css'

/**
 * GIF Detail - Embed Options: Controls the embed
 * option toggles on the GIF Detail page. This includes
 * turning on/off social shares and autoplay.
 *
 * @class GifEmbedOptions
 */
export default class extends Component {
    static propTypes = {
        hasVideo: PropTypes.bool,
        onOptionChange: PropTypes.func.isRequired,
    }
    state = {
        isResponsiveOn: false,
        isVideoEmbedOn: true,
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.isResponsiveOn !== this.state.isResponsiveOn) {
            return true
        }
        if (nextState.isVideoEmbedOn !== this.state.isVideoEmbedOn) {
            return true
        }
        return false
    }
    componentDidUpdate() {
        const { onOptionChange } = this.props
        onOptionChange({ ...this.state })
    }
    render() {
        const { hasVideo } = this.props
        const { isResponsiveOn, isVideoEmbedOn } = this.state
        return (
            <div className={css.container}>
                <div className={css.toggle}>
                    <span className={css.label}>Responsive</span>
                    <Toggle
                        backgroundColor={giphyBlack}
                        isOn={isResponsiveOn}
                        onColor={giphyGreen}
                        offColor={giphyRed}
                        onElement={<span className={css.toggleLabel}>On</span>}
                        offElement={<span className={css.toggleLabel}>Off</span>}
                        toggle={isOn => this.setState({ isResponsiveOn: !isOn })}
                    />
                </div>
                {hasVideo && (
                    <div className={css.toggle}>
                        <span className={css.label}>Video Embed</span>
                        <Toggle
                            backgroundColor={giphyBlack}
                            isOn={isVideoEmbedOn}
                            onColor={giphyGreen}
                            offColor={giphyRed}
                            onElement={<span className={css.toggleLabel}>On</span>}
                            offElement={<span className={css.toggleLabel}>Off</span>}
                            toggle={isOn => this.setState({ isVideoEmbedOn: !isOn })}
                        />
                    </div>
                )}
            </div>
        )
    }
}
