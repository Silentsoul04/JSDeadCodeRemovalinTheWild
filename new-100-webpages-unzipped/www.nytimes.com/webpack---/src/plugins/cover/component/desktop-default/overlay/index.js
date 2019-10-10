import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './styles.css';

const cssClass = props => {
    if (props.isMouseOver) {
        return styles.isMouseOver;
    }

    return styles.overlay;
};

export default props => < div className = {
    cssClass(props)
}
/>;



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-default/overlay/index.js