import preact from 'preact';
import {
    connect
} from 'preact-redux';
import safeChain from 'safe-chain';
import {
    bind
} from 'monocle-decorators';
import Volume from 'src/plugins/audio-controls/component/volume';
import styles from './styles.css';

const mapStateToProps = (state, ownProps) => ({
    controlsActive: safeChain(state, 'player.isActive'),
    isAdActive: safeChain(state, 'player.isAdActive'),
    isMediaMuted: safeChain(state, 'player.isMediaMuted'),
    ...ownProps
});

@connect(mapStateToProps)
class LiveAutoplayOverlay extends preact.Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    @bind
    onClick() {
        this.setState({
            clicked: true
        });
        this.props.player.mute(false);
        this.props.player.emit('plugin:controls:enable');
        this.props.player.emit('plugin:controlsOverlay:enable');
    }

    render() {
        // it's possible someone unmuted the ad :)
        const hasInteracted = this.state.clicked || !this.props.isMediaMuted;
        if (this.props.isAdActive) return null;
        if (hasInteracted && this.props.controlsActive) return null;
        if (hasInteracted) return null;

        return ( <
            button title = "Click to Listen"
            className = {
                styles.overlay
            }
            onClick = {
                this.onClick
            } >
            <
            div className = {
                styles.gradient
            } >
            <
            div className = {
                styles.unclickedWrapper
            } >
            <
            div className = {
                styles.unmuteCta
            } >
            <
            div className = {
                styles.volume
            } >
            <
            Volume isMediaMuted / >
            <
            /div>
            Click to Listen <
            /div> <
            /div> <
            /div> <
            /button>
        );
    }
}

export default LiveAutoplayOverlay;



// WEBPACK FOOTER //
// ./src/plugins/live-autoplay-overlay/component/index.js