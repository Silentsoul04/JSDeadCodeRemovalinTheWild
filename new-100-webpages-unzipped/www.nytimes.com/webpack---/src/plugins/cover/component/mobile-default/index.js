import preact from 'preact'; // eslint-disable-line no-unused-vars
import {
    Grid,
    Cell,
    Row
} from 'src/util/grid-component';
import Cinemagraph from 'src/util/cinemagraph-component';
import isVideoUrl from 'src/util/is-video-url';
import Overlay from './overlay';
import styles from './styles.css';
import Headline from './headline';

function getGridStyle(props) {
    const style = {};

    if (!isVideoUrl(props.posterUrl)) {
        style.backgroundImage = `url(${props.posterUrl})`;
        style.backgroundSize = 'cover';
    }

    return style;
}

export default props => ( <
        Grid padding = "30"
        vertical = "bottom"
        fill className = {
            `${styles.container} ${styles.poster}`
        }
        style = {
            getGridStyle(props)
        } >
        {
            isVideoUrl(props.posterUrl) && < Cinemagraph src = {
                props.posterUrl
            }
            />} <
            Overlay / >
            <
            Row
            style = {
                {
                    marginBottom: '0px',
                    flex: '1 1 0%'
                }
            } >
            <
            Cell
            size = "6of6"
            style = {
                {
                    'align-items': 'flex-end'
                }
            } >
            <
            button
            className = {
                `${styles.centerIconCircle} ${
            styles[props.centerIconCssClass]
          }`
            }
            /> <
            /Cell> <
            /Row> {
                props.headline && ( <
                    Row style = {
                        {
                            marginBottom: '13px'
                        }
                    } >
                    <
                    Cell size = "6of6" >
                    <
                    span className = {
                        styles.duration
                    } > {
                        props.duration
                    } < /span> <
                    /Cell> <
                    /Row>
                )
            } {
                props.headline && ( <
                    Row >
                    <
                    Cell size = "6of6" >
                    <
                    Headline headline = {
                        props.headline
                    }
                    playerWidth = {
                        props.playerWidth
                    }
                    /> <
                    /Cell> <
                    /Row>
                )
            } <
            /Grid>
        );

        export {
            getGridStyle
        };



        // WEBPACK FOOTER //
        // ./src/plugins/cover/component/mobile-default/index.js