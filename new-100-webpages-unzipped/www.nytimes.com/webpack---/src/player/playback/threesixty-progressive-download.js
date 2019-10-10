import dom from 'corleone';
import retry from 'async-retry';
import apiEvents from 'src/player/events';
import getRenditionUrl from 'src/util/get-rendition-url';
import getStackTrace from 'src/util/get-stack-trace';
import getThreesixtyErrorEventname from 'src/util/get-threesixty-error-eventname';
import getThreesixtyErrorMessage from 'src/util/get-threesixty-error-message';
import shouldUseAudioDriver from 'src/util/should-use-audio-driver';
import Logger from 'src/util/logger';
import ProgressiveDownload from './progressive-download';

class ThreesixtyProgressiveDownload extends ProgressiveDownload {
    static async loadKaleidoscope() {
        return import ( /* webpackChunkName: "kaleidoscope" */ 'kaleidoscope');
    }

    constructor(store, container, player, video = null) {
        super(store, container, player, video);

        this.logger = new Logger('vhs:playback:360pd');

        this.subscribe();
    }

    init() {
        super.init();

        if (shouldUseAudioDriver()) {
            // This timer is used to measure whether the browser is still open
            // in iOS. Whenever the browser is exited, this loop is interrupted,
            // and a check (see renderElement, below) is made to see
            // if the time at the next timeupdate event exceeds the "browser time"
            // last recorded by the loop. If the browser has been exited, we pause
            // the audio tag to prevent playback from continuing.
            const timeLoop = function() {
                this.state.timeInBrowser = Date.now();
                window.setTimeout(timeLoop, 50);
            }.bind(this);
            timeLoop();
        }

        return Promise.resolve();
    }

    async play() {
        if (!this.state.isMediaLoaded) {
            this.video.style.opacity = 0;
            await this.load();
        }

        if (!this.Kaleidoscope) {
            try {
                this.Kaleidoscope = await retry(
                    ThreesixtyProgressiveDownload.loadKaleidoscope, {
                        retries: 5
                    }
                );
            } catch (error) {
                this.handleFailureToLoadLib(error);
            }

            await this.setupKaleidoscope();
        }

        await this.video.play();
    }

    //
    // Private
    //

    renderElement() {
        if (this.video) return;

        if (shouldUseAudioDriver()) {
            const audio = document.createElement('audio');
            audio.addEventListener('timeupdate', () => {
                if (Date.now() - this.state.timeInBrowser > 250 && !audio.paused) {
                    audio.pause();
                }
            });

            this.video = audio;
        } else {
            this.video = dom.create('<video />');
        }

        // for backwards compatibility
        this.player.video = this.video;

        this.container.appendChild(this.video);
    }

    setElementAttributes() {
        super.setElementAttributes();
        this.video.setAttribute('crossorigin', 'anonymous');
    }

    setSource() {
        const renditionUrl = getRenditionUrl(
            this.state.mediaSrc,
            this.state.isMediaHD
        );

        if (renditionUrl) {
            this.video.setAttribute('src', renditionUrl);
        } else {
            this.player.emit(apiEvents.RENDITION_NOT_FOUND);
        }
    }

    onError(evt) {
        this.logger.error('Media element error.', evt);

        // don't bubble up media errors when 360 is initializing
        if (this.video.error && this.state.threeSixtyInitialized) {
            this.player.emit(apiEvents.ERROR, evt);
        }
    }

    onEnded() {
        super.onEnded();
        this.destroyViewer();
    }

    destroy() {
        super.destroy();
        this.video.style.opacity = 1;
        this.destroyViewer();
        this.unregisterScreenChangeListeners();
    }

    setupKaleidoscope() {
        return new Promise((resolve, reject) => {
            try {
                this.viewer = new this.Kaleidoscope.Video({
                    height: this.container.offsetHeight,
                    width: this.container.offsetWidth,
                    source: this.video,
                    container: this.container,
                    onDragStart: this.trackDragStart.bind(this),
                    onDragStop: this.trackDragStop.bind(this),
                    onDriverReady: () => {
                        // only triggered for audio
                        this.state.threeSixtyInitialized = true;
                        resolve();
                    }
                });

                if (shouldUseAudioDriver()) {
                    // for audio, render immediately
                    this.viewer.render();
                    this.player.emit('plugin:video360:started', this.viewer);
                } else {
                    this.state.threeSixtyInitialized = true;

                    // for video, wait for playing to avoid WebGL warnings
                    const onPlaying = () => {
                        this.video.removeEventListener('playing', onPlaying);
                        this.viewer.render();
                        this.player.emit('plugin:video360:started', this.viewer);
                    };
                    this.video.addEventListener('playing', onPlaying);

                    resolve();
                }

                this.registerScreenChangeListeners();
            } catch (error) {
                // THREE.js can throw lots of errors if the browser doesn't
                // implement some WebGL featues. If there is an error at
                // instantiation time, we infer that it is due to a lack of support
                // on the current browser.
                this.handleThreeSixtyError(error);
                reject(error);
            }
        });
    }

    handleFailureToLoadLib(error) {
        this.player.emit(apiEvents.TRACKING_EVENT, {
            data: {
                name: '360-library-load-error'
            }
        });

        this.player.emit(apiEvents.SLATE, {
            message: 'There was an error loading the 360 library. Please refresh to try again.'
        });
        this.player.emit(apiEvents.ERROR, error);

        this.logger.error(
            'Error loading `kaleidoscope.js`. Do you have the correct `options.env` set up?\nhttps://github.com/nytm/vhs/blob/master/doc/OPTIONS.md\n',
            error
        );
    }

    handleThreeSixtyError(error) {
        const trackingPayload = {};

        trackingPayload.eventName = getThreesixtyErrorEventname();
        trackingPayload.mData = {
            stackTrace: getStackTrace(error)
        };

        this.player.emit('plugin:tagx:track', trackingPayload);
        this.player.emit(apiEvents.SLATE, {
            message: getThreesixtyErrorMessage()
        });
        this.player.emit(apiEvents.ERROR, error);

        this.logger.error('Error setting up Kaleidoscope\n', error);
    }

    trackDragStart() {
        this.player.emit('plugin:tagx:track', {
            eventName: '360-drag-start'
        });
    }

    trackDragStop() {
        this.player.emit('plugin:tagx:track', {
            eventName: '360-drag-stop'
        });
    }

    destroyViewer() {
        if (this.viewer) {
            this.player.emit('plugin:video360:ended');
            this.viewer.destroy();
            this.viewer = null;
            this.Kaleidoscope = null;
            this.state.threeSixtyInitialized = false;
        }
    }

    onPlayerSizeChange(size) {
        if (this.viewer) {
            this.viewer.setSize(size);
        }
    }

    onGoFullscreen() {
        if (this.viewer) {
            this.viewer.setSize({
                height: window.screen.height,
                width: window.screen.width
            });
        }
    }

    onExitFullscreen() {
        if (this.viewer) {
            this.viewer.setSize({
                height: this.container.offsetHeight,
                width: this.container.offsetWidth
            });
        }
    }

    registerScreenChangeListeners() {
        this.onPlayerSizeChange = this.onPlayerSizeChange.bind(this);
        this.onGoFullscreen = this.onGoFullscreen.bind(this);
        this.onExitFullscreen = this.onExitFullscreen.bind(this);

        this.player.on(apiEvents.PLAYER_SIZE_CHANGE, this.onPlayerSizeChange);
        this.player.on(apiEvents.GO_FULLSCREEN, this.onGoFullscreen);
        this.player.on(apiEvents.EXIT_FULLSCREEN, this.onExitFullscreen);
    }

    unregisterScreenChangeListeners() {
        this.player.removeListener(
            apiEvents.PLAYER_SIZE_CHANGE,
            this.onPlayerSizeChange
        );
        this.player.removeListener(apiEvents.GO_FULLSCREEN, this.onGoFullscreen);
        this.player.removeListener(
            apiEvents.EXIT_FULLSCREEN,
            this.onExitFullscreen
        );
    }

    mapGlobalToLocalState() {
        super.mapGlobalToLocalState();

        const globalState = this.store.getState();
        this.state = {
            ...this.state,
            env: globalState.player.options.env,
            isMediaHD: globalState.player.isMediaHD,
            isMediaLoaded: globalState.player.isMediaLoaded,
            mediaSrc: globalState.player.media.src
        };
    }

    subscribe() {
        if (this.state.didSubscribe) return;

        this.state.didSubscribe = true;
        this.state.threeSixtyInitialized = false;

        this.mapGlobalToLocalState();
        this.store.subscribe(() => this.mapGlobalToLocalState());
    }
}

export default ThreesixtyProgressiveDownload;



// WEBPACK FOOTER //
// ./src/player/playback/threesixty-progressive-download.js