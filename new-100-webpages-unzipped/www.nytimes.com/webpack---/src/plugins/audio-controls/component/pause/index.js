import preact from 'preact'; // eslint-disable-line no-unused-vars

import styles from '../styles.css';

const Pause = () => ( <
    svg className = {
        styles['pause-bars']
    }
    width = "20"
    height = "30"
    viewBox = "0 0 20 30"
    fill = "#666666" >
    <
    g >
    <
    path d = "M13 0h7v30h-7zM0 0h7v30H0z" / >
    <
    /g> <
    /svg>
);

export default Pause;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/pause/index.js