import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from '../styles.css';

const Volume = ({
    isMediaMuted
}) => {
    if (isMediaMuted) {
        return ( <
            svg width = "24"
            height = "20"
            viewBox = "0 0 24 20"
            fill = "#666666" >
            <
            g >
            <
            path d = "M21.333 10L24 7.333 22.667 6 20 8.667 17.333 6 16 7.333 18.667 10 16 12.667 17.333 14 20 11.333 22.667 14 24 12.667 21.333 10zM11 0h2v20h-2zM11 20L1 10 11 0" / >
            <
            path d = "M0 6h10v8H0z" / >
            <
            /g> <
            /svg>
        );
    }

    return ( <
        svg width = "24"
        height = "20"
        viewBox = "0 0 24 20"
        fill = "#666666" >
        <
        g >
        <
        path d = "M16 7c1.657 0 3 1.343 3 3s-1.343 3-3 3V7z" / >
        <
        path className = {
            styles.volume__stroke
        }
        stroke = "#666666"
        d = "M16.5 2.516V3.52c3.356.254 6 3.058 6 6.48 0 3.422-2.644 6.226-6 6.48v1.004c3.91-.258 7-3.51 7-7.484s-3.09-7.226-7-7.484z" /
        >
        <
        path d = "M11 0h2v20h-2zM11 20L1 10 11 0" / >
        <
        path d = "M0 6h10v8H0z" / >
        <
        /g> <
        /svg>
    );
};

export default Volume;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/volume/index.js