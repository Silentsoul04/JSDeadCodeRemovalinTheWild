import preact from 'preact';
import {
    Provider,
    connect
} from 'preact-redux';
import formatDuration from 'src/util/format-duration';
import isMobile from 'src/util/is-mobile';
import styles from './styles.css';

const mapStateToProps = state => ({
    show: state.player.isAdActive &&
        state.player.adData &&
        !state.player.adData.hasCountdown &&
        !isMobile(),
    time: state.player.adProgress,
    sizeClass: state.plugins.responsive.cssClass
});

const mapSizeToClassName = size => {
    if (!size) return '';
    const className = size.split('-')[1];
    return styles[className];
};

let Countdown = props => {
    if (props.show && props.time >= 0) {
        return ( <
            div className = {
                `${styles.countdown} ${mapSizeToClassName(props.sizeClass)}`
            } >
            <
            span className = {
                styles.label
            } > AD < /span> {
                formatDuration(props.time)
            } <
            /div>
        );
    }
    return null;
};

Countdown = connect(mapStateToProps)(Countdown);

const render = (container, store, player) => {
    preact.render( <
        Provider store = {
            store
        } >
        <
        Countdown player = {
            player
        }
        /> <
        /Provider>,
        container
    );
};

//
// API
//

const name = 'ad-countdown';

export default {
    enable: true,
    name,
    proto: {
        _initialize() {
            render(this._container, this._player.store, this._player);
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/ad-countdown/index.js