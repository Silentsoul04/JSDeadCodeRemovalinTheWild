import {
    throttle
} from 'monocle-decorators';
import {
    actions
} from 'src/player/actions';
import apiEvents from 'src/player/events';
import Logger from 'src/util/logger';
import ProgressiveDownload from './progressive-download';

class AudioMedia extends ProgressiveDownload {
    constructor(store, container, player, video = null) {
        super(store, container, player, video);

        this.logger = new Logger('vhs:playback:audio');
    }

    play() {
        if (!this.store.getState().player.isMediaLoaded) {
            this.load();
        }

        const playPromise = this.video.play();
        if (!playPromise) return Promise.resolve();

        return playPromise.catch(err => {
            if (err.name === 'AbortError') {
                // error thrown if video.pause() is called before playback begins
                this.logger.warn(err);
            } else {
                this.logger.error(err);
            }
        });
    }

    reloadVideo() {
        if (this.video) {
            this.store.dispatch(actions.media.isBuffering(true));
            const timestamp = this.store.getState().player.media.progress;
            const onCanPlay = () => {
                this.video.removeEventListener('canplay', onCanPlay);
                // resume playback at the point it failed
                if (typeof timestamp === 'number') {
                    this.seek(timestamp);
                }
                this.play();
            };
            this.triggerLoadStart();
            this.video.addEventListener('canplay', onCanPlay);
            this.video.load();
            this.store.dispatch(actions.media.didLoad());
            if (typeof timestamp === 'number') {
                this.seek(timestamp);
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    toggleHD() {}

    //
    // Private
    //

    renderElement() {
        if (this.video && this.type !== 'audio') {
            this.video.parentNode.removeChild(this.video);
        }

        const audio = document.createElement('audio');
        this.video = audio;
        this.player.video = this.video; // backwards compat

        this.container.appendChild(audio);
    }

    setElementAttributes() {
        const currentState = this.store.getState();
        const preload = currentState.player.media.preload;

        this.video.setAttribute('preload', preload);
        this.video.setAttribute('id', `video_${new Date().getTime()}`);

        if (currentState.player.options.loop) {
            this.video.setAttribute('loop', true);
        }

        if (currentState.player.options.muted) {
            this.video.setAttribute('muted', true);
            this.store.dispatch(actions.media.didMute());
        }
    }

    setSource() {
        const {
            source,
            src
        } = this.store.getState().player.media;

        if (src) {
            this.video.setAttribute('src', src);
        } else if (source) {
            while (this.video.hasChildNodes()) {
                this.video.removeChild(this.video.firstChild);
            }
            Object.keys(source).forEach(format => {
                const audioSource = document.createElement('source');
                audioSource.setAttribute('src', source[format]);
                audioSource.setAttribute('type', format);
                this.video.appendChild(audioSource);
            });
        } else {
            this.player.emit(apiEvents.RENDITION_NOT_FOUND);
            const retry = false;
            const message = 'Audio rendition not found.';

            this.store.dispatch(actions.didError({
                message,
                retry
            }));
        }
    }

    onError(evt) {
        // is it a valid error - we were getting false error events from VPAID ads
        if (this.video.error) {
            this.player.emit(apiEvents.ERROR, evt);

            const {
                error
            } = this.video;
            let retry;
            let message;

            switch (error.code) {
                case 1: // MEDIA_ERR_ABORTED
                case 2: // MEDIA_ERR_NETWORK
                case 3: // MEDIA_ERR_DECODE
                    retry = true;
                    message =
                        'There was a problem loading this audio file. Refresh the player to resolve.';
                    break;
                case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
                default:
                    retry = false;
                    message =
                        'Audio will not load. Try refreshing the page to resolve this issue.';
                    break;
            }

            this.store.dispatch(actions.didError({
                message,
                retry
            }));
            this.timeout = setTimeout(() => {
                this.store.dispatch(actions.media.isBuffering(false));
                this.timeout = clearTimeout(this.timeout);
            }, 300);
        }
    }

    @throttle(500)
    onProgress(evt) {
        if (evt.target.buffered && evt.target.readyState >= 1) {
            const lastIndex = evt.target.buffered.length - 1;
            if (lastIndex >= 0) {
                evt.bufferEnd = evt.target.buffered.end(lastIndex);
            }
        }
        this.player.emit(apiEvents.PROGRESS, evt);
        this.store.dispatch(actions.media.progress.didBuffer(evt.bufferEnd));
    }
}

export default AudioMedia;



// WEBPACK FOOTER //
// ./src/player/playback/audio-media.js