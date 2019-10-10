import preact, {
    Component
} from 'preact'; // eslint-disable-line no-unused-vars
import {
    connect
} from 'preact-redux';
import {
    bind
} from 'monocle-decorators';
import Spinner from '../spinner';
import styles from './styles.css';

const PlayIcon = () => ( <
    svg width = "100%"
    height = "100%"
    viewBox = "0 0 40 40"
    className = {
        styles['play-triangle']
    }
    fill = "#444444" >
    <
    path fillRule = "evenodd"
    clipRule = "evenodd"
    d = "M0 40V0L33.6 20L0 40Z"
    transform = "translate(3)" /
    >
    <
    /svg>
);

const PauseIcon = () => ( <
    svg width = "100%"
    height = "100%"
    viewBox = "0 0 40 40"
    className = {
        styles['pause-bars']
    } >
    <
    path d = "M10 0H0V40H10V0Z"
    transform = "translate(24)" / >
    <
    path d = "M10 0H0V40H10V0Z"
    transform = "translate(6)" / >
    <
    /svg>
);

const mapStateToProps = (state, ownProps) => ({
    forceHover: state.plugins.audioControls.forceHover,
    ...ownProps
});

@connect(mapStateToProps)
class Play extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
    }

    @bind
    handleMouseEnter() {
        this.setState({
            isHovered: true
        });
    }

    @bind
    handleMouseLeave() {
        this.setState({
            isHovered: false
        });
    }

    render({
        canPause,
        onClick,
        onMouseDown,
        onFocus,
        onBlur,
        isMediaBuffering,
        forceHover,
        theme,
        breakpoint,
        layout,
        cover
    }) {
        const isHovered = forceHover || this.state.isHovered;

        const themeClass = theme === 'light' ? styles.light : '';
        const bufferingClass = isMediaBuffering ? styles.buffering : '';
        const hoverClass = isHovered ? styles.hover : '';
        const breakpointClass = styles[breakpoint] || '';
        const layoutClass = styles[layout] || ''; // desktop vs mobile
        const coverClass = (cover && styles.cover) || '';

        if (canPause) {
            return ( <
                button className = {
                    `${
            styles.pause
          } ${bufferingClass} ${themeClass} ${breakpointClass} ${layoutClass} ${coverClass}`
                }
                onClick = {
                    onClick
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
                title = "Pause Audio"
                aria - label = "Pause Audio" >
                <
                Circle show = {!isMediaBuffering && (layout === 'mobile' || (cover && isHovered))
                }
                /> <
                Spinner theme = {
                    theme
                }
                breakpoint = {
                    breakpoint
                }
                layout = {
                    layout
                }
                show = {
                    isMediaBuffering
                }
                /> <
                PauseIcon / >
                <
                /button>
            );
        }

        return ( <
            button className = {
                `${
          styles.play
        } ${bufferingClass} ${hoverClass} ${themeClass} ${breakpointClass} ${layoutClass} ${coverClass}`
            }
            onClick = {
                onClick
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
            onMouseEnter = {
                this.handleMouseEnter
            }
            onMouseLeave = {
                this.handleMouseLeave
            }
            title = "Play Audio"
            aria - label = "Play Audio" >
            <
            Circle show = {!isMediaBuffering && (layout === 'mobile' || (cover && isHovered))
            }
            /> <
            Spinner theme = {
                theme
            }
            breakpoint = {
                breakpoint
            }
            layout = {
                layout
            }
            show = {
                isMediaBuffering
            }
            /> <
            PlayIcon / >
            <
            /button>
        );
    }
}

const Circle = ({
    show
}) => ( <
    div className = {
        `${styles.circle} ${(show && styles.show) || ''} `
    }
    />
);

export default Play;



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/componentV2/play/index.js