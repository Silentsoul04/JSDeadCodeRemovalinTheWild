import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './styles.css';

const Volume = ({
    muted,
    onClick,
    onMouseDown,
    onFocus,
    onBlur,
    disabled,
    theme,
    layout
}) => {
    const themeClass = theme === 'light' ? styles.light : '';
    const layoutClass = layout === 'desktop' ? styles.desktop : '';

    return ( <
        button className = {
            `${styles.volume} ${themeClass} ${layoutClass}`
        }
        onClick = {
            onClick
        }
        title = {
            muted ? 'Unmute' : 'Mute'
        }
        aria - label = {
            muted ? 'Unmute' : 'Mute'
        }
        onMouseDown = {
            onMouseDown
        }
        onFocus = {
            onFocus
        }
        onBlur = {
            onBlur
        }
        disabled = {
            disabled
        } >
        <
        VolumeIcon isMediaMuted = {
            muted
        }
        /> <
        /button>
    );
};

const VolumeIcon = ({
    isMediaMuted
}) => {
    if (isMediaMuted) {
        return ( <
            svg width = "100%"
            height = "100%"
            viewBox = "0 0 24 24" >
            <
            path fillRule = "evenodd"
            clipRule = "evenodd"
            d = "M5 6L11 0L13 0V20H11L5 14H0V6H5Z"
            transform = "translate(0 2)" /
            >
            <
            path fillRule = "evenodd"
            clipRule = "evenodd"
            d = "M5.33333 4L8 6.66667L6.66667 8L4 5.33333L1.33333 8L0 6.66667L2.66667 4L0 1.33333L1.33333 0L4 2.66667L6.66667 0L8 1.33333L5.33333 4Z"
            transform = "translate(16 8)" /
            >
            <
            /svg>
        );
    }

    return ( <
        svg width = "100%"
        height = "100%"
        viewBox = "0 0 24 24" >
        <
        path fillRule = "evenodd"
        clipRule = "evenodd"
        d = "M5 6L11 0L13 0V20H11L5 14H0V6H5Z"
        transform = "translate(0 2)" /
        >
        <
        path fillRule = "evenodd"
        clipRule = "evenodd"
        d = "M0 0C1.65685 0 3 1.34315 3 3C3 4.65685 1.65685 6 0 6L0 0Z"
        transform = "translate(16 9)" /
        >
        <
        path d = "M0.532837 0.0350647L0 0V1.99994L0.462067 2.0351C3.55962 2.27072 6 4.85941 6 8.01759C6 11.1758 3.55962 13.7645 0.462067 14.0001L0 14.0352V16.0352L0.532837 16.0001C4.70294 15.7256 8 12.2569 8 8.01759C8 3.77834 4.70294 0.309555 0.532837 0.0350647Z"
        transform = "translate(16 3.98241)" /
        >
        <
        /svg>
    );
};

export default Volume;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/volume/index.js