import preact from 'preact'; // eslint-disable-line no-unused-vars
import supportsCssLineClamp from 'src/util/supports-css-line-clamp';
import styles from './styles.css';

const getHeadlineCssClasses = props => {
    const classes = [styles.headline];

    if (!supportsCssLineClamp() || props.playerWidth < 250) {
        classes.push(styles.singleLineTruncation);
    } else {
        classes.push(styles.multiLineTruncation);
    }

    return classes.join(' ');
};

export default props => ( <
    span className = {
        getHeadlineCssClasses(props)
    } > {
        props.headline
    } < /span>
);



// WEBPACK FOOTER //
// ./src/plugins/cover/component/mobile-default/headline/index.js