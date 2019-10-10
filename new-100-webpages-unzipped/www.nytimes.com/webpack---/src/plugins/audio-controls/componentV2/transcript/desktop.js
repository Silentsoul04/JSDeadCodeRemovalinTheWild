import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './desktop.css';

/* eslint-disable react/no-unknown-property */
const Transcript = ({
    isTranscriptAvailable,
    onFocus,
    onBlur,
    onMouseDown,
    onClick,
    disabled
}) => {
    if (!isTranscriptAvailable) return null;

    return ( <
        button disabled = {
            disabled
        }
        onClick = {
            onClick
        }
        title = "Show Transcript"
        aria - label = "Show Transcript"
        onMouseDown = {
            onMouseDown
        }
        onFocus = {
            onFocus
        }
        onBlur = {
            onBlur
        } >
        <
        div className = {
            styles.center
        } >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "24"
        height = "20"
        viewBox = "0 0 24 20"
        fill = "black" >
        <
        path fill - rule = "evenodd"
        clip - rule = "evenodd"
        d = "M0 0H24V20H0V0ZM3 7H21V9H3V7ZM21 11H3V13H21V11ZM3 15H21V17H3V15ZM11 3H3V5H11V3Z"
        fill = "#666666" /
        >
        <
        /svg> <
        /div> <
        /button>
    );
};

export default Transcript;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/transcript/desktop.js