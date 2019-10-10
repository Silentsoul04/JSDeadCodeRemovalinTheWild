import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './mobile.css';

const TranscriptIcon = ({
    theme
}) => ( <
    svg xmlns = "http://www.w3.org/2000/svg"
    width = "24"
    height = "20"
    viewBox = "0 0 24 20"
    fill = {
        theme === 'light' ? '#ffffff' : '#000000'
    } >
    <
    path fill - rule = "evenodd" // eslint-disable-line react/no-unknown-property
    clip - rule = "evenodd" // eslint-disable-line react/no-unknown-property
    d = "M0 0H24V20H0V0ZM3 7H21V9H3V7ZM21 11H3V13H21V11ZM3 15H21V17H3V15ZM11 3H3V5H11V3Z"
    fill = {
        theme === 'light' ? '#ffffff' : '#000000'
    }
    /> <
    /svg>
);

const AudioTranscriptCTA = ({
    onMouseDown,
    onFocus,
    onClick,
    theme
}) => ( <
    button type = "button"
    className = {
        `${styles.tbutton} ${
      theme === 'light' ? styles.tbuttonLightTheme : styles.tbuttonDarkTheme
    }`
    }
    aria - haspopup aria - label = "Show Transcript"
    title = "Show Transcript"
    onMouseDown = {
        onMouseDown
    }
    onFocus = {
        onFocus
    }
    onClick = {
        onClick
    } >
    <
    div className = {
        styles.buttonContentContainer
    } >
    <
    TranscriptIcon theme = {
        theme
    }
    /> <
    span className = {
        styles.textSpan
    } > Transcript < /span> <
    /div> <
    /button>
);

export default AudioTranscriptCTA;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/transcript/mobile.js