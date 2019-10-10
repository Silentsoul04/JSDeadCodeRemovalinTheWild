/* eslint-disable jsx-a11y/no-static-element-interactions */

import preact from 'preact';
import {
    connect
} from 'preact-redux';
import {
    bind
} from 'monocle-decorators';
import safeChain from 'safe-chain';
import {
    actions as playerActions
} from 'src/player/actions';
import formatDuration from 'src/util/format-duration';
import isMobile from 'src/util/is-mobile';
import computeAspectRatio from 'src/util/compute-aspect-ratio';
import DesktopDefault from './desktop-default';
import Desktop360 from './desktop-360';
import DesktopLive from './desktop-live';
import MobileDefault from './mobile-default';
import Mobile360 from './mobile-360';
import MobileLive from './mobile-live';
import {
    isVisible,
    getPresentation
} from './selectors';
import styles from './styles.css';

const PRESENTATION_ENUM = {
    desktopDefault: 'desktopDefault',
    desktop360: 'desktop360',
    desktopLive: 'desktopLive',
    mobileDefault: 'mobileDefault',
    mobile360: 'mobile360',
    mobileLive: 'mobileLive'
};

const mapStateToProps = (state, ownProps) => {
    const aspectRatio = state.player.options && state.player.options.ratio;
    const isVertical = isMobile() && computeAspectRatio(aspectRatio) > 100;
    const {
        cssClass
    } = state.plugins.responsive;
    const centerIconCssClass = isVertical ?
        'centerIcon--vertical' :
        `centerIcon--${cssClass}`;
    return {
        centerIconCssClass,
        duration: formatDuration(safeChain(state, 'player.media.duration')),
        headline: safeChain(state, 'player.media.headline'),
        isVisible: isVisible(state),
        playerWidth: safeChain(state, 'plugins.responsive.playerWidth'),
        size: safeChain(state, 'plugins.responsive.size'),
        posterUrl: safeChain(state, 'player.media.posterUrl'),
        presentation: getPresentation(state),
        shouldGoFullscreenOnClick: isVertical,
        standaloneVideoUrl: safeChain(state, 'player.media.url'),
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    play: () => dispatch(playerActions.shouldPlay()),
    ...ownProps
});

@connect(mapStateToProps, mapDispatchToProps)
class Cover extends preact.Component {
    getSpecializedComponent() {
        switch (this.props.presentation) {
            case PRESENTATION_ENUM.desktopDefault:
                return DesktopDefault;
            case PRESENTATION_ENUM.desktop360:
                return Desktop360;
            case PRESENTATION_ENUM.desktopLive:
                return DesktopLive;
            case PRESENTATION_ENUM.mobile360:
                return Mobile360;
            case PRESENTATION_ENUM.mobileDefault:
                return MobileDefault;
            case PRESENTATION_ENUM.mobileLive:
                return MobileLive;
            default:
                return MobileDefault;
        }
    }

    @bind
    handleClick() {
        this.props.play();
        if (this.props.shouldGoFullscreenOnClick) {
            this.props.player.fullscreen(true);
        }
        return true;
    }

    // For a11y
    @bind
    handleKeyPress(event) {
        if (event.code === 'Enter') {
            this.handleClick();
        }
        return true;
    }

    render() {
        if (!this.props.isVisible) {
            return null;
        }

        const CoverPresentation = this.getSpecializedComponent();
        return ( <
            div onClick = {
                this.handleClick
            }
            onKeyPress = {
                this.handleKeyPress
            }
            className = {
                styles.container
            } >
            <
            CoverPresentation { ...this.props
            }
            /> <
            /div>
        );
    }
}

export default Cover;
export {
    PRESENTATION_ENUM
};



// WEBPACK FOOTER //
// ./src/plugins/cover/component/index.js