import preact from 'preact'; // eslint-disable-line no-unused-vars
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
import Duration from '../desktop-default/duration';
import Headline from '../desktop-default/headline';
import PlayIcon from '../desktop-default/play-icon';
import Overlay from '../desktop-default/overlay';
import styles from './styles.css';
import stylesDefault from '../desktop-default/styles.css';
import {
    getMetadataCssClass,
    getGridPadding,
    getGridStyle
} from '../desktop-default';

function getCompassCssClass(size) {
    return styles[`compassIcon-${size}`];
}

class CoverDesktop360 extends preact.Component {
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
                stylesDefault.poster
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
            Cell size = "10of12" >
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
            Cell size = "2of12"
            horizontal = "end" >
            <
            div className = {
                getCompassCssClass(this.props.size)
            }
            /> <
            /Cell> <
            /Row> <
            /Grid> <
            /div>
        );
    }
}

export default CoverDesktop360;



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-360/index.js