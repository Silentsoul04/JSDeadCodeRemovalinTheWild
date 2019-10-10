import preact from 'preact'; // eslint-disable-line no-unused-vars

import styles from '../styles.css';

const FadeableCard = ({
    children,
    show
}) => ( <
    div className = {
        `${styles['fadeable-card']}${
      show ? ` ${styles['fadeable-card--show']}` : ''
    }`
    } >
    {
        children
    } <
    /div>
);

export default FadeableCard;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/fadeable-card/index.js