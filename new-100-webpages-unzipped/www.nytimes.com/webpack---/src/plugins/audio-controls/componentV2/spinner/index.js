import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './styles.css';

const Spinner = ({
    theme,
    breakpoint,
    layout,
    show
}) => ( <
    div className = {
        `${styles.spinner} ${
      theme === 'light' ? styles.light : ''
    } ${styles[breakpoint] || ''} ${show ? styles.show : ''}
    ${layout === 'mobile' ? styles.mobile : ''}`
    } >
    <
    span / >
    <
    /div>
);

export default Spinner;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/spinner/index.js