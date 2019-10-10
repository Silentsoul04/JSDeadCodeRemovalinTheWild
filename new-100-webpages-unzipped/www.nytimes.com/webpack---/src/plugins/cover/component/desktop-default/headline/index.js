import preact from 'preact'; // eslint-disable-line no-unused-vars
import supportsCssLineClamp from 'src/util/supports-css-line-clamp';
import styles from './styles.css';

const getCssClasses = props => {
    const classes = [styles[`headline-${props.size}`]];

    if (!supportsCssLineClamp()) {
        classes.push(styles.singleLineTruncation);
    } else {
        classes.push(styles.multiLineTruncation);
    }

    return classes.join(' ');
};

export default props => ( <
    span className = {
        getCssClasses(props)
    } > {
        props.headline
    } < /span>
);



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-default/headline/index.js