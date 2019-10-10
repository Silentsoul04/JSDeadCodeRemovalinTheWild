import preact from 'preact'; // eslint-disable-line no-unused-vars

import styles from '../styles.css';

const Play = () => ( <
    svg className = {
        styles['play-triangle']
    }
    width = "26"
    height = "30"
    viewBox = "0 0 26 30"
    fill = "#666666" >
    <
    g >
    <
    path d = "M26 15L0 30V0z" / >
    <
    /g> <
    /svg>
);

export default Play;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/play/index.js