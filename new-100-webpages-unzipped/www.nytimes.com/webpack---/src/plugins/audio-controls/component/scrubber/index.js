import preact from 'preact'; // eslint-disable-line no-unused-vars

import styles from '../styles.css';

const Scrubber = ({
    isScrubbing
}) => {
    if (isScrubbing) {
        return ( <
            div >
            <
            svg className = {
                styles.ink
            }
            width = "40"
            height = "40"
            viewBox = "0 0 40 40"
            fill = "#666666" >
            <
            circle cx = "20"
            cy = "20"
            r = "20" / >
            <
            /svg> <
            svg className = {
                styles.handle
            }
            width = "10"
            height = "10"
            viewBox = "0 0 10 10"
            xmlns = "http://www.w3.org/2000/svg"
            xmlnsXlink = "http://www.w3.org/1999/xlink" >
            <
            defs >
            <
            path d = "M5 0c2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.762 0-5-2.24-5-5s2.238-5 5-5z"
            id = "a" /
            >
            <
            /defs> <
            g fill = "none" >
            <
            use fill = "#FFF"
            xlinkHref = "#a" / >
            <
            path stroke = "#979797"
            d = "M5 .5C2.514.5.5 2.515.5 5S2.515 9.5 5 9.5c2.484 0 4.5-2.015 4.5-4.5S7.483.5 5 .5z" /
            >
            <
            /g> <
            /svg> <
            /div>
        );
    }

    return ( <
        svg className = {
            styles['scrub-indicator']
        }
        width = "25"
        height = "24"
        viewBox = "0 0 25 24"
        xmlns = "http://www.w3.org/2000/svg"
        xmlnsXlink = "http://www.w3.org/1999/xlink" >
        <
        defs >
        <
        path d = "M8.24 0c4.417 0 8 3.582 8 8s-3.583 8-8 8c-4.42 0-8-3.582-8-8s3.58-8 8-8z"
        id = "b" /
        >
        <
        filter x = "-37.5%"
        y = "-37.5%"
        width = "175%"
        height = "175%"
        filterUnits = "objectBoundingBox"
        id = "a" >
        <
        feOffset in = "SourceAlpha"
        result = "shadowOffsetOuter1" / >
        <
        feGaussianBlur stdDeviation = "2" in = "shadowOffsetOuter1"
        result = "shadowBlurOuter1" /
        >
        <
        feComposite in = "shadowBlurOuter1"
        in2 = "SourceAlpha"
        operator = "out"
        result = "shadowBlurOuter1" /
        >
        <
        feColorMatrix values = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in = "shadowBlurOuter1" /
        >
        <
        /filter> <
        /defs> <
        g transform = "translate(4 4)"
        fill = "none" >
        <
        use fill = "#000"
        filter = "url(#a)"
        xlinkHref = "#b" / >
        <
        use fill = "#F3F3F3"
        xlinkHref = "#b" / >
        <
        path stroke = "#979797"
        d = "M8.24.5C4.096.5.74 3.858.74 8c0 4.142 3.357 7.5 7.5 7.5 4.14 0 7.5-3.358 7.5-7.5 0-4.142-3.36-7.5-7.5-7.5z" /
        >
        <
        /g> <
        /svg>
    );
};

export default Scrubber;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/component/scrubber/index.js