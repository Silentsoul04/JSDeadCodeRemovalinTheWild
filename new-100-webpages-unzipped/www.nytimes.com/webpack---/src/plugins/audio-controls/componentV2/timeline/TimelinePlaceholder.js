import preact from 'preact'; // eslint-disable-line no-unused-vars

import styles from './styles.css';

const TimelinePlaceholder = ({
    theme
}) => ( <
    div className = {
        `${styles.timeline} ${styles['timeline--placeholder']} ${
      theme === 'light' ? styles.light : ''
    }`
    } >
    <
    div className = {
        styles.timeline__duration
    }
    /> <
    /div>
);

export default TimelinePlaceholder;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/timeline/TimelinePlaceholder.js