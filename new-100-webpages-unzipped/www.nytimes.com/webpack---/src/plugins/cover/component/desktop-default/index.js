import preact from 'preact';
import {
    bind
} from 'monocle-decorators';
import {
    Grid,
    Cell,
    Row
} from 'src/util/grid-component';
import Cinemagraph from 'src/util/cinemagraph-component';
import isVideoUrl from 'src/util/is-video-url';
import Headline from './headline';
import Duration from './duration';
import PlayIcon from './play-icon';
import Overlay from './overlay';
import styles from './styles.css';

function getMetadataCssClass(size) {
    if (size === 'l' || size === 'xl' || size === 'xxl') {
        return styles.metadataLarge;
    }

    return styles.metadataDefaults;
}

function getGridPadding(props) {
    if (props.size === 'xxs' || props.size === 'xs') {
        return 20;
    }

    return 30;
}

function getGridStyle(props) {
    const style = {};

    if (!isVideoUrl(props.posterUrl)) {
        style.backgroundImage = `url(${props.posterUrl})`;
    }

    return style;
}

class CoverDesktopDefault extends preact.Component {
    constructor() {
        super();

        this.state = {
            isMouseOver: false
        };
    }

    @bind
    handleMouseEnter() {
        this.setState({
            isMouseOver: true
        });
    }

    @bind
    handleMouseLeave() {
        this.setState({
            isMouseOver: false
        });
    }

    render() {
        return ( <
            div onMouseEnter = {
                this.handleMouseEnter
            }
            onMouseLeave = {
                this.handleMouseLeave
            }
            className = {
                `${styles.container}`
            } >
            <
            Grid padding = {
                getGridPadding(this.props)
            }
            vertical = "bottom"
            fill className = {
                `${styles.poster}`
            }
            style = {
                getGridStyle(this.props)
            } >
            {
                isVideoUrl(this.props.posterUrl) && ( <
                    Cinemagraph src = {
                        this.props.posterUrl
                    }
                    />
                )
            } <
            Overlay isMouseOver = {
                this.state.isMouseOver
            }
            /> <
            Row >
            <
            Cell size = "12of12" >
            <
            PlayIcon isMouseOver = {
                this.state.isMouseOver
            }
            size = {
                this.props.size
            }
            /> {
                this.props.headline && ( <
                    div className = {
                        getMetadataCssClass(this.props.size)
                    } >
                    <
                    Duration duration = {
                        this.props.duration
                    }
                    size = {
                        this.props.size
                    }
                    /> <
                    Headline headline = {
                        this.props.headline
                    }
                    size = {
                        this.props.size
                    }
                    /> <
                    /div>
                )
            } <
            /Cell> <
            /Row> <
            /Grid> <
            /div>
        );
    }
}

export default CoverDesktopDefault;
export {
    getMetadataCssClass,
    getGridPadding,
    getGridStyle
};



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-default/index.js