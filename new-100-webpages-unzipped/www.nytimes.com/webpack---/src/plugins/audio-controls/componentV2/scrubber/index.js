import preact from 'preact'; // eslint-disable-line no-unused-vars

import styles from './styles.css';

const Scrubber = ({
    theme,
    scrubbing,
    layout
}) => {
    const themeClass = theme === 'light' ? styles.light : '';
    const scrubbingClass = scrubbing ? styles.scrubbing : '';
    const layoutClass = layout === 'desktop' ? styles.desktop : '';

    return ( <
        div className = {
            `${themeClass} ${scrubbingClass} ${layoutClass}`
        }
        style = {
            {
                transform: 'translateX(-50%)',
                height: '100%',
                display: 'flex',
                alignItems: 'center'
            }
        } >
        <
        svg className = {
            styles.ink
        }
        width = "40"
        height = "40"
        viewBox = "0 0 40 40" >
        <
        circle cx = "20"
        cy = "20"
        r = "20" / >
        <
        /svg> <
        svg className = {
            styles.handle
        }
        width = "20px"
        height = "20px"
        viewBox = "0 0 10 10" >
        <
        g >
        <
        path d = "M5 0c2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.762 0-5-2.24-5-5s2.238-5 5-5z" / >
        <
        /g> <
        /svg> <
        /div>
    );
};

export default Scrubber;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/scrubber/index.js