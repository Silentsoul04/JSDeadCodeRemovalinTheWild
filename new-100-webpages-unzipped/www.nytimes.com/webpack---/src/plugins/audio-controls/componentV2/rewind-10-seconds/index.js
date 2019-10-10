import preact from 'preact'; // eslint-disable-line no-unused-vars
import styles from './styles.css';

const Rewind10Seconds = ({
    onClick,
    onMouseDown,
    onFocus,
    onBlur,
    disabled,
    theme,
    layout
}) => {
    const themeClass = theme === 'light' ? styles.light : '';
    const layoutClass = layout === 'desktop' ? styles.desktop : ''; // layout is only used for hover on desktop

    return ( <
        button className = {
            `${styles.rewind} ${themeClass} ${layoutClass}`
        }
        onClick = {
            onClick
        }
        title = "Rewind"
        aria - label = "Rewind"
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
        Rewind10SecondsIcon / >
        <
        /button>
    );
};

const Rewind10SecondsIcon = () => ( <
    svg width = "30"
    height = "30"
    viewBox = "0 0 30 30" >
    <
    path fillRule = "evenodd"
    clipRule = "evenodd"
    d = "M14.989 4.16232V0L4.98901 6H13.0714V6.00104C19.109 6.08286 23.978 10.9759 23.978 17C23.978 23.0751 19.0261 28 12.9176 28C7.4959 28 2.98529 24.1202 2.03961 19H0C0.967285 25.2302 6.38239 30 12.9176 30C20.1368 30 25.989 24.1797 25.989 17C25.989 10.5213 21.2238 5.14957 14.989 4.16232Z"
    transform = "translate(2)" /
    >
    <
    path fillRule = "evenodd"
    clipRule = "evenodd"
    d = "M3.476 7.821V0.121H0.363L-1.79291e-07 1.683H1.54V7.821H3.476ZM8.92 7.942C6.951 7.942 5.785 6.347 5.785 3.971C5.785 1.584 6.951 -9.91821e-08 8.92 -9.91821e-08C10.878 -9.91821e-08 12.022 1.584 12.022 3.971C12.022 6.347 10.878 7.942 8.92 7.942ZM8.92 6.281C9.624 6.281 10.086 5.533 10.086 3.971C10.086 2.42 9.624 1.661 8.92 1.661C8.216 1.661 7.743 2.42 7.743 3.971C7.743 5.533 8.216 6.281 8.92 6.281Z"
    transform = "translate(9.07812 13.179)" /
    >
    <
    /svg>
);

export default Rewind10Seconds;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/rewind-10-seconds/index.js