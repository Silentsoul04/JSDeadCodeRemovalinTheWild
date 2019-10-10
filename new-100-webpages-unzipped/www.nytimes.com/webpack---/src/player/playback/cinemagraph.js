import dom from 'corleone';
import apiEvents from 'src/player/events';
import isVideoOnImgTagSupported from 'src/util/is-video-on-img-tag-supported';
import {
    actions
} from 'src/player/actions';
import Logger from 'src/util/logger';
import ProgressiveDownload from './progressive-download';

function isElementBiggerThanHd(el) {
    return parseInt(getComputedStyle(el).height, 10) >= 720;
}

class Cinemagraph extends ProgressiveDownload {
    constructor(store, container, player, video = null) {
        super(store, container, player, video);

        this.logger = new Logger('vhs:playback:cinemagraph');
    }

    async init() {
        if (!isVideoOnImgTagSupported()) {
            await super.init();
            super.mute(true);
            return Promise.resolve();
        }

        if (!this.video) {
            this._renderElement();
        }

        return Promise.resolve();
    }

    async load() {
        this.setSource();
        this.triggerLoadStart();
        this.store.dispatch(actions.media.didLoad());

        return Promise.resolve();
    }

    async play() {
        if (!isVideoOnImgTagSupported()) {
            return super.play();
        }

        if (!this.state.isMediaLoaded) {
            await this.load();
        }

        return Promise.resolve();
    }

    destroy() {
        dom.remove(this.video);
        this.video = undefined;
    }

    pause() {
        this.logger.warn('Current playback dont support `pause`');
    }

    seek() {
        this.logger.warn('Current playback dont support `seek`');
    }

    mute() {
        this.logger.warn('Current playback dont support `mute`');
    }

    setVolume() {
        this.logger.warn('Current playback dont support `setVolume`');
    }

    reloadVideo() {
        this.logger.warn('Current playback dont support `reloadVideo`');
    }

    toggleHD() {
        this.logger.warn('Current playback dont support `toggleHD`');
    }

    //
    // Private
    //

    mapGlobalToLocalState() {
        super.mapGlobalToLocalState();

        const globalState = this.store.getState();
        this.state = {
            ...this.state,
            isMediaLoaded: globalState.player.isMediaLoaded
        };
    }

    setSource() {
        const currentState = this.store.getState();
        const {
            hdSrc,
            sdSrc
        } = currentState.player.media;
        const {
            src
        } = currentState.player.options;

        if (hdSrc && isElementBiggerThanHd(this.container)) {
            this.video.src = hdSrc;
        } else if (sdSrc) {
            this.video.src = sdSrc;
        } else if (src) {
            this.video.src = src;
        } else {
            this.player.emit(apiEvents.RENDITION_NOT_FOUND);
        }
    }

    _renderElement() {
        this.video = dom.create('<img />');
        // for backwards compatibility
        this.player.video = this.video;

        this.container.appendChild(this.video);
        this.video.style.width = `100%`;
        this.video.style.height = `100%`;
    }
}

export default Cinemagraph;



// WEBPACK FOOTER //
// ./src/player/playback/cinemagraph.js