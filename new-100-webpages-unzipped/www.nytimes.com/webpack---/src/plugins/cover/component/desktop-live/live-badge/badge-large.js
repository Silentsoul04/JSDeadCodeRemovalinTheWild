/* eslint-disable react/no-unknown-property */

import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './styles.css';

export default ({
    liveRedDotClassName
}) => ( <
    svg width = "60"
    height = "30"
    view - box = "0 0 60 30"
    xmlns = "http://www.w3.org/2000/svg"
    className = {
        styles.liveBadgeLarge
    } >
    <
    g fill = "none"
    fill - rule = "evenodd" >
    <
    rect fill - opacity = ".5"
    fill = "#000"
    width = "60"
    height = "30"
    rx = "3" / >
    <
    path d = "M30.742 18.82h-5.024V9.3h-2.064v11.2h7.088v-1.68zM34.05 9.3h-1.888v1.728h1.888V9.3zm-.016 3.056h-1.856V20.5h1.856v-8.144zm7.34 0l-2.048 5.792-2-5.792H35.39l2.992 8.144h1.472l3.024-8.144h-1.504zm9.708 4.224v.176h-5.536c0 1.632.928 2.56 2.144 2.56 1.136 0 1.792-.752 2.096-1.312l1.28.672c-.544.88-1.552 2.016-3.536 2.016-2.416 0-3.856-1.744-3.856-4.096 0-2.352 1.392-4.4 3.792-4.4 1.312 0 2.32.56 2.96 1.616.464.768.656 1.696.656 2.768zm-5.488-.992h3.632c0-1.168-.512-2.08-1.696-2.08-1.408 0-1.936 1.2-1.936 2.08z"
    fill = "#F00" /
    >
    <
    circle className = {
        liveRedDotClassName
    }
    fill = "#F00"
    cx = "12"
    cy = "15"
    r = "4" /
    >
    <
    /g> <
    /svg>
);



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-live/live-badge/badge-large.js