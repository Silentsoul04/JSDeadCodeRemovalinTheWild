import preact from 'preact'; // eslint-disable-line no-unused-vars

import styles from '../styles.css';

const PlaceholderTimeline = () => ( <
    div className = {
        `${styles.timeline} ${styles.chunk} ${
      styles['timeline--placeholder']
    }`
    } >
    <
    div className = {
        styles.timeline__duration
    }
    /> <
    /div>
);

export default PlaceholderTimeline;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/placeholder-timeline/index.js