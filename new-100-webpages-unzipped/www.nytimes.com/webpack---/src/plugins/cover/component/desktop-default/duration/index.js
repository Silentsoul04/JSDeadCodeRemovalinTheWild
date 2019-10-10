import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './styles.css';

export default props => ( <
    span className = {
        styles[`duration-${props.size}`]
    } > {
        props.duration
    } < /span>
);



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-default/duration/index.js