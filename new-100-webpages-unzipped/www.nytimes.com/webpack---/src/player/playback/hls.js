import {
    actions
} from 'src/player/actions';
import apiEvents from 'src/player/events';
import Logger from 'src/util/logger';
import ProgressiveDownload from './progressive-download';

class Hls extends ProgressiveDownload {
    constructor(store, container, player, video = null) {
        super(store, container, player, video);

        this.logger = new Logger('vhs:playback:hls');

        this.subscribe();
    }

    init() {
        if (!this.video) {
            // first run
            this.renderElement();
            this.setElementAttributes();
            this.setSource();
            this.player.emit(apiEvents.MEDIA_ELEMENT_MOUNTED);
            this.store.dispatch(actions.elementReady());
        }

        this.registerListeners();

        return Promise.resolve();
    }

    //
    // Private
    //

    setSource() {
        if (this.state.isMediaHD && this.state.hlsHdSrc) {
            this.video.setAttribute('src', this.state.hlsHdSrc);
        } else if (this.state.hlsSrc) {
            this.video.setAttribute('src', this.state.hlsSrc);
        } else if (this.state.src) {
            this.video.setAttribute('src', this.state.src);
        } else {
            this.player.emit(apiEvents.RENDITION_NOT_FOUND);
        }
    }

    mapGlobalToLocalState() {
        super.mapGlobalToLocalState();

        const globalState = this.store.getState();
        this.state = {
            ...this.state,
            src: globalState.player.media.src,
            hlsSrc: globalState.player.media.hlsSrc,
            hlsHdSrc: globalState.player.media.hlsHdSrc,
            isMediaHD: globalState.player.isMediaHD
        };
    }

    subscribe() {
        if (this.state.didSubscribe) return;
        this.state.didSubscribe = true;

        this.mapGlobalToLocalState();
        this.store.subscribe(() => this.mapGlobalToLocalState());
    }
}

export default Hls;



// WEBPACK FOOTER //
// ./src/player/playback/hls.js