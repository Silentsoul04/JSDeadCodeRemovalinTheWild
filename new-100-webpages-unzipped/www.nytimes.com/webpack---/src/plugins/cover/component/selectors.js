/* eslint-disable import/prefer-default-export */

import safeChain from 'safe-chain';
import isMobile from 'src/util/is-mobile';
import {
    PRESENTATION_ENUM
} from './index';

const getPresentation = state => {
    if (isMobile()) {
        if (safeChain(state, 'player.media.is360')) {
            return PRESENTATION_ENUM.mobile360;
        } else if (
            safeChain(state, 'player.media.isLive') ||
            safeChain(state, 'player.options.live')
        ) {
            return PRESENTATION_ENUM.mobileLive;
        }
        return PRESENTATION_ENUM.mobileDefault;
    } else if (safeChain(state, 'player.media.is360')) {
        return PRESENTATION_ENUM.desktop360;
    } else if (
        safeChain(state, 'player.media.isLive') ||
        safeChain(state, 'player.options.live')
    ) {
        return PRESENTATION_ENUM.desktopLive;
    }

    return PRESENTATION_ENUM.desktopDefault;
};

const isVisible = state => {
    if (!safeChain(state, 'player.options')) return false;

    if (!safeChain(state, 'player.media.posterUrl')) {
        return false;
    }

    if (
        state.player.options.autoplay &&
        safeChain(state, 'plugins.autoplay.canAutoplay') !== false
    ) {
        return false;
    }

    if (
        safeChain(state, 'player.hasAnyMediaPlayed') ||
        safeChain(state, 'player.isMediaPlaying') ||
        safeChain(state, 'player.isMediaEnded') ||
        safeChain(state, 'player.shouldPlay')
    ) {
        return false;
    }

    return true;
};

export {
    isVisible,
    getPresentation
};



// WEBPACK FOOTER //
// ./src/plugins/cover/component/selectors.js