/* eslint-disable react/no-unknown-property */

import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './styles.css';

export default ({
    liveRedDotClassName
}) => ( <
    svg width = "40"
    height = "20"
    view - box = "0 0 40 20"
    xmlns = "http://www.w3.org/2000/svg"
    className = {
        styles.liveBadge
    } >
    <
    g fill = "none"
    fill - rule = "evenodd" >
    <
    rect fill - opacity = ".5"
    fill = "#000"
    width = "40"
    height = "20"
    rx = "2" / >
    <
    circle className = {
        liveRedDotClassName
    }
    fill = "#F00"
    cx = "8.5"
    cy = "10"
    r = "2.5" /
    >
    <
    path d = "M19.707 12.845h-3.454V6.3h-1.42V14h4.874v-1.155zM21.975 6.3h-1.298v1.188h1.298V6.3zm-.01 2.1h-1.277V14h1.276V8.4zm5.04 0l-1.41 3.983L24.222 8.4h-1.33l2.057 5.6h1.012l2.078-5.6h-1.034zm6.667 2.905v.12h-3.806c0 1.123.638 1.76 1.474 1.76.78 0 1.232-.516 1.44-.9l.88.46c-.373.606-1.066 1.387-2.43 1.387-1.66 0-2.65-1.2-2.65-2.816 0-1.617.956-3.025 2.606-3.025.902 0 1.595.386 2.035 1.112.32.528.452 1.166.452 1.903zm-3.773-.682h2.496c0-.803-.352-1.43-1.166-1.43-.968 0-1.33.825-1.33 1.43z"
    fill = "#F00" /
    >
    <
    /g> <
    /svg>
);



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-live/live-badge/badge.js