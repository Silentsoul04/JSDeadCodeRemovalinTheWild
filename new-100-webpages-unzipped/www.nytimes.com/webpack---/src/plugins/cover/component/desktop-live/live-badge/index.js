import preact from 'preact'; // eslint-disable-line no-unused-vars
import {
    classSizes
} from 'src/util-nyt/responsive-rules';
import styles from './styles.css';
import Badge from './badge';
import BadgeLarge from './badge-large';

class LiveBadge extends preact.Component {
    get badgeClass() {
        return `${styles[`liveBadge-${this.props.size}`]}`;
    }

    render() {
        if (this.props.playerWidth >= classSizes.XSMALL.size) {
            return ( <
                div className = {
                    this.badgeClass
                } >
                <
                BadgeLarge liveRedDotClassName = {
                    styles.liveRedDot
                }
                /> <
                /div>
            );
        }

        return ( <
            div className = {
                this.badgeClass
            } >
            <
            Badge liveRedDotClassName = {
                styles.liveRedDot
            }
            /> <
            /div>
        );
    }
}

export default LiveBadge;



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-live/live-badge/index.js