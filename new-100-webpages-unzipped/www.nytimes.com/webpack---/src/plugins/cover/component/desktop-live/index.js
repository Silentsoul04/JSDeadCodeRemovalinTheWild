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
import Headline from '../desktop-default/headline';
import PlayIcon from '../desktop-default/play-icon';
import Overlay from '../desktop-default/overlay';
import LiveBadge from './live-badge';
import stylesDefault from '../desktop-default/styles.css';
import styles from './styles.css';
import {
    getMetadataCssClass,
    getGridPadding,
    getGridStyle
} from '../desktop-default';

class CoverDesktopLive extends preact.Component {
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
                stylesDefault.container
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
            Row style = {
                {
                    alignItems: 'center'
                }
            } >
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
                        `${getMetadataCssClass()} ${styles.metadataLive}`
                    } >
                    <
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
            Cell size = "2of12" >
            <
            LiveBadge playerWidth = {
                this.props.playerWidth
            }
            size = {
                this.props.size
            }
            /> <
            /Cell> <
            /Row> <
            /Grid> <
            /div>
        );
    }
}

export default CoverDesktopLive;



// WEBPACK FOOTER //
// ./src/plugins/cover/component/desktop-live/index.js