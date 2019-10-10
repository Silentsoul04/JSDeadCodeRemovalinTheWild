/* eslint-disable react/no-unknown-property */

import Logger from 'src/util/logger';
import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './styles.css';

const logger = new Logger('vhs:plugin:cover');

const getCircleCssClass = props => {
    if (props.isMouseOver) {
        return styles.playIconCircleMouseOver;
    }

    return styles.playIconCircle;
};

const getTriangleCssClass = props => {
    if (props.isMouseOver) {
        return styles.playIconTriangleMouseOver;
    }

    return styles.playIconTriangle;
};

// eslint-disable-next-line consistent-return
const getSize = props => {
    switch (props.size) {
        case 'xxs':
        case 'xs':
            return 30;
        case 's':
        case 'm':
            return 40;
        case 'l':
        case 'xl':
        case 'xxl':
            return 60;
        default:
            logger.error('props.size is a required argument');
    }
};

export default props => ( <
    button className = {
        styles[`playIcon-${props.size}`]
    }
    title = "Play Video"
    aria - label = "Play Video"
    onMouseDown = {
        event => {
            event.preventDefault();
        }
    } >
    <
    svg className = {
        getCircleCssClass(props)
    }
    height = {
        getSize(props)
    }
    width = {
        getSize(props)
    } >
    <
    circle cx = {
        getSize(props) / 2
    }
    cy = {
        getSize(props) / 2
    }
    r = {
        getSize(props) / 2 - 1
    }
    stroke = "#F7F7F7"
    fill = "transparent"
    stroke - width = "2px" /
    >
    <
    /svg> <
    svg className = {
        getTriangleCssClass(props)
    }
    width = {
        getSize(props)
    }
    height = {
        getSize(props)
    } >
    <
    svg length = "auto"
    viewBox = "0 0 35 40" >
    <
    g stroke = "none"
    stroke - width = "1"
    fill = "none"
    fillRule = "evenodd" >
    <
    g transform = "translate(-14.000000, -12.000000)"
    fillRule = "nonzero"
    fill = "#F7F7F7" >
    <
    polyline points = "14 52 14 12 48.6666667 32" / >
    <
    /g> <
    /g> <
    /svg> <
    /svg> <
    /button>
);



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-default/play-icon/index.js