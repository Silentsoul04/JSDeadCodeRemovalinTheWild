import preact from 'preact'; // eslint-disable-line no-unused-vars

import formatDuration from 'src/util/format-duration';
import styles from '../styles.css';

const placeholder = 'Play Audio';

const Duration = ({
    countdownMode,
    duration,
    progress,
    style,
    suppressDurationPlaceholder
}) => {
    if (!duration && suppressDurationPlaceholder) return null;

    let text;
    if (duration) {
        if (countdownMode) {
            text = formatDuration(Math.max(duration - progress, 0));
        } else {
            text = `${formatDuration(progress)} / ${formatDuration(duration)}`;
        }
    } else {
        text = placeholder;
    }

    return ( <
        div className = {
            `${styles.duration} ${styles.chunk}${
        duration ? '' : ` ${styles['duration--placeholder']}`
      }`
        }
        style = {
            style || {}
        } >
        {
            text
        } <
        /div>
    );
};

export default Duration;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/duration/index.js