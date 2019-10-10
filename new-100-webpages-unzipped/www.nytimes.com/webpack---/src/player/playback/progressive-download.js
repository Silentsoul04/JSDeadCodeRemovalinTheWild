import {
    throttle
} from 'monocle-decorators';
import objectEntries from 'object.entries';
import dom from 'corleone';
import {
    actions
} from 'src/player/actions';
import apiEvents from 'src/player/events';
import getRenditionUrl from 'src/util/get-rendition-url';
import Logger from 'src/util/logger';
import PlaybackInterface from './interface';

class ProgressiveDownload extends PlaybackInterface {
    constructor(store, container, player, video = null) {
        super(store, container, player, video);

        this.logger = new Logger('vhs:playback:pd');

        this.subscribe();
    }

    init() {
        if (!this.video) {
            // first run
            this.renderElement();
            this.setElementAttributes();
            this.player.emit(apiEvents.MEDIA_ELEMENT_MOUNTED);
            this.store.dispatch(actions.elementReady());
        }

        this.registerListeners();

        return Promise.resolve();
    }

    async load() {
        this.setSource();
        this.triggerLoadStart();

        return new Promise(resolve => {
            const onCanPlay = () => {
                this.video.removeEventListener('canplay', onCanPlay);
                resolve();
            };
            this.video.addEventListener('canplay', onCanPlay);

            this.video.load();
            this.store.dispatch(actions.media.didLoad());
        });
    }

    async play() {
        this.logger.log('play');

        if (!this.state.isMediaLoaded) {
            await this.load();
        }

        return this.video.play();
    }

    pause() {
        this.video.pause();
    }

    seek(time) {
        this.logger.log('seek', time);

        this.video.currentTime = time;
    }

    mute(mute) {
        this.video.muted = Boolean(mute);
        if (this.video.muted) {
            this.store.dispatch(actions.media.didMute());
        }
    }

    setVolume(volume) {
        this.video.volume = volume;
    }

    reloadVideo() {
        if (this.video) {
            this.triggerLoadStart();
            this.video.load();
            this.video.play();
        }
    }

    toggleHD() {
        const currentTime = this.video.currentTime;
        this.video.pause();
        this.store.dispatch(actions.toggleHD());
        this.setSource();
        this.triggerHDEvent();

        const onCanPlay = () => {
            this.video.removeEventListener('canplay', onCanPlay);
            this.video.currentTime = currentTime;
            this.play();
        };
        this.video.addEventListener('canplay', onCanPlay);

        this.video.load();
        this.store.dispatch(actions.media.didLoad());
    }

    destroy(removeElement = false) {
        this.pause();
        this.unregisterListeners();

        if (removeElement && this.video) {
            this.video.setAttribute('src', '');
            dom.remove(this.video);
        }
    }

    //
    // Private
    //

    mapGlobalToLocalState() {
        const globalState = this.store.getState();
        this.state = {
            ...this.state,
            isMediaLoaded: globalState.player.isMediaLoaded,
            isMediaHD: globalState.player.isMediaHD
        };
    }

    subscribe() {
        if (this.state.didSubscribe) return;
        this.state.didSubscribe = true;

        this.mapGlobalToLocalState();
        this.store.subscribe(() => this.mapGlobalToLocalState());
    }

    renderElement() {
        if (this.video) return;

        this.video = dom.create('<video></video>');
        // for backwards compatibility
        this.player.video = this.video;

        this.container.appendChild(this.video);
    }

    setElementAttributes() {
        const currentState = this.store.getState();
        const preload = currentState.player.media.preload;
        const width = currentState.player.options.width;
        const height = currentState.player.options.height;

        this.video.setAttribute('preload', preload);
        this.video.setAttribute('x-webkit-airplay', 'allow');
        this.video.setAttribute('id', `video_${new Date().getTime()}`);

        this.video.style.height = '100%';
        this.video.style.width = '100%';

        if (height === '100%' && width === '100%') {
            this.video.style.position = 'absolute';
            this.video.style.top = 0;
            this.video.style.left = 0;
        }

        if (currentState.player.options.loop) {
            this.video.setAttribute('loop', 'loop');
        }

        if (currentState.player.options.muted) {
            this.mute(true);
        }

        if (currentState.player.options.nativeControls) {
            this.video.setAttribute('controls', 'controls');
        }

        this.video.setAttribute('playsinline', 'playsinline');
        this.video.setAttribute('webkit-playsinline', 'webkit-playsinline');
    }

    setSource() {
        const {
            source,
            src
        } = this.store.getState().player.media;
        const isMediaHD = this.store.getState().player.isMediaHD;
        const renditionUrl = getRenditionUrl(src, isMediaHD);

        if (renditionUrl) {
            this.video.setAttribute('src', renditionUrl);
        } else if (source) {
            this.video.innerHTML = '';
            objectEntries(source).forEach(([format]) => {
                const sourceTag = dom.create('<source></source>');
                sourceTag.setAttribute('src', source[format]);
                sourceTag.setAttribute('type', format);
                this.video.appendChild(sourceTag);
            });
        } else {
            this.player.emit(apiEvents.RENDITION_NOT_FOUND);
        }
    }

    triggerLoadStart() {
        const currentState = this.store.getState();
        this.store.dispatch(actions.media.shouldLoad());
        this.player.emit(apiEvents.LOAD_START, {
            id: currentState.player.media.id,
            headline: currentState.player.media.headline,
            summary: currentState.player.media.summary,
            url: currentState.player.media.url,
            images: currentState.player.media.images,
            playlist: currentState.player.media.playlist,
            related: currentState.player.media.related
        });
    }

    registerListeners() {
        this.onPlayBound = this.onPlay.bind(this);
        this.onPlayingBound = this.onPlaying.bind(this);
        this.onProgressBound = this.onProgress.bind(this);
        this.onTimeupdateBound = this.onTimeupdate.bind(this);
        this.onSeekedBound = this.onSeeked.bind(this);
        this.onPauseBound = this.onPause.bind(this);
        this.onDurationChangeBound = this.onDurationChange.bind(this);
        this.onEndedBound = this.onEnded.bind(this);
        this.onVolumeChangeBound = this.onVolumeChange.bind(this);
        this.onErrorBound = this.onError.bind(this);
        this.onCanPlayBound = this.onCanPlay.bind(this);
        this.onCanPlayThroughBound = this.onCanPlayThrough.bind(this);
        this.onWaitingBound = this.onWaiting.bind(this);

        this.video.addEventListener('play', this.onPlayBound);
        this.video.addEventListener('playing', this.onPlayingBound);
        this.video.addEventListener('progress', this.onProgressBound);
        this.video.addEventListener('timeupdate', this.onTimeupdateBound);
        this.video.addEventListener('seeked', this.onSeekedBound);
        this.video.addEventListener('pause', this.onPauseBound);
        this.video.addEventListener('durationchange', this.onDurationChangeBound);
        this.video.addEventListener('ended', this.onEndedBound);
        this.video.addEventListener('volumechange', this.onVolumeChangeBound);
        this.video.addEventListener('error', this.onErrorBound);
        this.video.addEventListener('canplay', this.onCanPlayBound);
        this.video.addEventListener('canplaythrough', this.onCanPlayThroughBound);
        this.video.addEventListener('waiting', this.onWaitingBound);
    }

    unregisterListeners() {
        this.video.removeEventListener('play', this.onPlayBound);
        this.video.removeEventListener('playing', this.onPlayingBound);
        this.video.removeEventListener('progress', this.onProgressBound);
        this.video.removeEventListener('timeupdate', this.onTimeupdateBound);
        this.video.removeEventListener('seeked', this.onSeekedBound);
        this.video.removeEventListener('pause', this.onPauseBound);
        this.video.removeEventListener(
            'durationchange',
            this.onDurationChangeBound
        );
        this.video.removeEventListener('ended', this.onEndedBound);
        this.video.removeEventListener('volumechange', this.onVolumeChangeBound);
        this.video.removeEventListener('error', this.onErrorBound);
        this.video.removeEventListener('canplay', this.onCanPlayBound);
        this.video.removeEventListener(
            'canplaythrough',
            this.onCanPlayThroughBound
        );
        this.video.removeEventListener('waiting', this.onWaitingBound);
    }

    onPlay() {
        this.player.emit(apiEvents.PLAY);
    }

    onPlaying() {
        this.store.dispatch(actions.media.didPlay());
    }

    onProgress(evt) {
        if (evt.target.buffered && evt.target.readyState >= 1) {
            const lastIndex = evt.target.buffered.length - 1;
            if (lastIndex >= 0) {
                evt.bufferEnd = evt.target.buffered.end(lastIndex);
            }
        }
        this.player.emit(apiEvents.PROGRESS, evt);
    }

    @throttle(500)
    onTimeupdate() {
        this.player.emit(apiEvents.TIME_UPDATE, this.video.currentTime);
        this.store.dispatch(
            actions.media.progress.didChange(this.video.currentTime)
        );
    }

    onSeeked() {
        this.player.emit(apiEvents.SEEKED);
    }

    onPause() {
        // the pause event comes before the ended event,
        // but the prop `ended` flips before the pause event
        if (this.video.ended) return;
        this.store.dispatch(actions.media.didPause());
    }

    onDurationChange() {
        this.store.dispatch(
            actions.media.duration.didChange(this.video.duration || 0)
        );
    }

    onEnded() {
        this.store.dispatch(actions.media.didEnd());

        if (this.store.getState().player.media.isLive) {
            this.levelType = null;
        }
    }

    onVolumeChange() {
        const currentState = this.store.getState();
        if (this.video.muted !== currentState.player.isMediaMuted) {
            if (this.video.muted) {
                this.store.dispatch(actions.media.didMute());
            } else {
                this.store.dispatch(actions.media.didUnmute());
            }
            this.player.emit(apiEvents.MUTE, this.video.muted);
        } else {
            this.store.dispatch(actions.media.volume.didChange(this.video.volume));
            this.player.emit(apiEvents.VOLUME_CHANGE, this.video.volume);
        }
    }

    onError(evt) {
        this.logger.error(evt);

        // is it a valid error - we were getting false error events from VPAID ads
        if (this.video.error) {
            this.player.emit(apiEvents.ERROR, evt);
        }
    }

    onCanPlay() {
        this.store.dispatch(actions.media.isBuffering(false));
    }

    onCanPlayThrough() {
        this.store.dispatch(actions.media.isBuffering(false));
    }

    onWaiting() {
        this.store.dispatch(actions.media.isBuffering(true));
    }

    triggerHDEvent() {
        // trigger events for analytics
        if (this.state.isMediaHD) {
            this.player.emit(apiEvents.HD_ON);
        } else {
            this.player.emit(apiEvents.HD_OFF);
        }
    }
}

export default ProgressiveDownload;



// WEBPACK FOOTER //
// ./src/player/playback/progressive-download.js