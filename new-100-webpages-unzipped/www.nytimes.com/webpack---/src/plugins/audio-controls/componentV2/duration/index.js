import preact from 'preact'; // eslint-disable-line no-unused-vars

import formatDuration from 'src/util/format-duration';
import styles from './styles.css';

const placeholder = < strong > Listen < /strong>;

const Duration = ({
    countdownMode,
    duration,
    progress,
    style,
    mediaStarted,
    theme
}) => {
    let text;
    if (duration) {
        if (mediaStarted) {
            if (countdownMode) {
                text = formatDuration(Math.max(duration - progress, 0));
            } else {
                text = `${formatDuration(progress)} / ${formatDuration(duration)}`;
            }
        } else {
            text = ( <
                span style = {
                    {
                        marginLeft: '10px'
                    }
                } > {
                    formatDuration(duration)
                } < /span>
            );
        }
    }

    const placeholderClass = duration ? '' : styles['duration--placeholder'];
    const themeClass = theme === 'light' ? styles.light : '';

    return ( <
        div className = {
            `${styles.duration} ${placeholderClass} ${themeClass}`
        }
        style = {
            style || {}
        } >
        {!mediaStarted && placeholder
        } {
            text
        } <
        /div>
    );
};

export default Duration;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/duration/index.js