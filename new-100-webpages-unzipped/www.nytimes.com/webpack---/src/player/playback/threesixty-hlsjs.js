import Logger from 'src/util/logger';
import Hlsjs from './hlsjs';
import ThreesixtyProgressiveDownload from './threesixty-progressive-download';

class ThreesixtyHlsjs extends Hlsjs {
    constructor(store, container, player, video = null) {
        super(store, container, player, video);

        this.logger = new Logger('vhs:playback:360hlsjs');

        this.subscribe();
    }

    play(...args) {
        return ThreesixtyProgressiveDownload.prototype.play.apply(this, args);
    }

    destroy(...args) {
        return ThreesixtyProgressiveDownload.prototype.destroy.apply(this, args);
    }

    //
    // Private
    //

    handleFailureToLoadLib(...args) {
        return ThreesixtyProgressiveDownload.prototype.handleFailureToLoadLib.apply(
            this,
            args
        );
    }

    handleThreeSixtyError(...args) {
        return ThreesixtyProgressiveDownload.prototype.handleThreeSixtyError.apply(
            this,
            args
        );
    }

    trackDragStart(...args) {
        return ThreesixtyProgressiveDownload.prototype.trackDragStart.apply(
            this,
            args
        );
    }

    trackDragStop(...args) {
        return ThreesixtyProgressiveDownload.prototype.trackDragStop.apply(
            this,
            args
        );
    }

    onEnded(...args) {
        return ThreesixtyProgressiveDownload.prototype.onEnded.apply(this, args);
    }

    onPlayerSizeChange(...args) {
        return ThreesixtyProgressiveDownload.prototype.onPlayerSizeChange.apply(
            this,
            args
        );
    }

    onGoFullscreen(...args) {
        return ThreesixtyProgressiveDownload.prototype.onGoFullscreen.apply(
            this,
            args
        );
    }

    onExitFullscreen(...args) {
        return ThreesixtyProgressiveDownload.prototype.onExitFullscreen.apply(
            this,
            args
        );
    }

    registerScreenChangeListeners(...args) {
        return ThreesixtyProgressiveDownload.prototype.registerScreenChangeListeners.apply(
            this,
            args
        );
    }

    unregisterScreenChangeListeners(...args) {
        return ThreesixtyProgressiveDownload.prototype.unregisterScreenChangeListeners.apply(
            this,
            args
        );
    }

    setElementAttributes() {
        super.setElementAttributes();
        this.video.setAttribute('crossorigin', 'anonymous');
    }

    setupKaleidoscope() {
        try {
            this.viewer = new this.Kaleidoscope.Video({
                height: this.container.offsetHeight,
                width: this.container.offsetWidth,
                source: this.video,
                container: this.container,
                onDragStart: this.trackDragStart.bind(this),
                onDragStop: this.trackDragStop.bind(this)
            });

            this.video.style.opacity = 0;

            // for video wait for playing to avoid WebGL warnings
            const onPlaying = () => {
                this.video.removeEventListener('playing', onPlaying);
                this.viewer.render();
                this.player.emit('plugin:video360:started', this.viewer);
            };
            this.video.addEventListener('playing', onPlaying);

            this.registerScreenChangeListeners();
        } catch (error) {
            // THREE.js can throw lots of errors if the browser doesn't
            // implement some WebGL featues. If there is an error at
            // instantiation time, we infer that it is due to a lack of support
            // on the current browser.
            this.handleThreeSixtyError(error);
        }
    }

    destroyViewer() {
        if (this.viewer) {
            this.player.emit('plugin:video360:ended');
            this.viewer.destroy();
            this.viewer = null;
            this.Kaleidoscope = null;
        }
    }

    mapGlobalToLocalState() {
        super.mapGlobalToLocalState();

        const globalState = this.store.getState();
        this.state = {
            ...this.state,
            isMediaLoaded: globalState.player.isMediaLoaded
        };
    }

    subscribe() {
        if (this.state.didSubscribe) return;
        this.state.didSubscribe = true;

        this.mapGlobalToLocalState();
        this.store.subscribe(() => this.mapGlobalToLocalState());
    }
}

export default ThreesixtyHlsjs;



// WEBPACK FOOTER //
// ./src/player/playback/threesixty-hlsjs.js