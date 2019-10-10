import retry from 'async-retry';
import apiEvents from 'src/player/events';
import {
    actions
} from 'src/player/actions';
import Logger from 'src/util/logger';
import ProgressiveDownload from './progressive-download';

// To be lazy loaded.
let Hls;

class Hlsjs extends ProgressiveDownload {
    constructor(store, container, player, video = null) {
        super(store, container, player, video);

        this.logger = new Logger('vhs:playback:hlsjs');

        this.subscribe();
    }

    async init() {
        await super.init();
        try {
            Hls = await retry(
                () =>
                import ( /* webpackChunkName: "hlsjs" */ 'hls.js'), {
                    retries: 5
                }
            );
        } catch (error) {
            this.logger.error(
                'Error loading `hls.js`. Do you have the correct `options.env` set up?\nhttps://github.com/nytm/vhs/blob/master/doc/OPTIONS.md'
            );

            throw error;
        }
    }

    async play() {
        this.logger.log('play');

        if (!this.state.isMediaLoaded) {
            await this.load();
        }

        return this.video.play();
    }

    reloadVideo() {
        this.setSource();
        this.triggerLoadStart();
        return this.play();
    }

    toggleHD() {
        let level = -1; // auto
        this.store.dispatch(actions.toggleHD());
        if (this.state.isMediaHD) {
            level = this.hls.levels.length - 1;
        }

        this.hls.currentLevel = level;
        this.triggerHDEvent();
    }

    destroy() {
        this.pause();
        this.unregisterListeners();

        // clean up HLS
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
        }
    }

    //
    // Private
    //

    setSource() {
        const renditionUrl =
            typeof this.state.mediaSrc === 'object' ?
            this.state.mediaSrc.HLS :
            this.state.mediaSrc;

        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
        }

        this._setupHlsjs(renditionUrl);
    }

    // hls.js has a bug where it does not report the correct duration
    // https://github.com/dailymotion/hls.js/issues/570
    // Until fixed we will rely on the duration from data or options
    // except where we need it dynamic for live to vod rollover
    onDurationChange() {
        if (this.state.isLive) {
            this.store.dispatch(
                actions.media.duration.didChange(this.video.duration || 0)
            );
        } else {
            this.logger.log('noop duration change for hls.js');
        }
    }

    triggerFatalError(data) {
        data.hlsjs = true;
        this.pause();
        this.player.emit(apiEvents.ERROR, data);
    }

    mapGlobalToLocalState() {
        super.mapGlobalToLocalState();

        const globalState = this.store.getState();
        this.state = {
            ...this.state,
            isMediaLoaded: globalState.player.isMediaLoaded,
            isMediaHD: globalState.player.isMediaHD,
            isLive: globalState.player.media.isLive,
            is360: globalState.player.media.is360,
            mediaSrc: globalState.player.media.src,
            debug: globalState.player.options.debug
        };
    }

    _setupHlsjs(renditionUrl) {
        const opts = {
            fragLoadingTimeOut: 20000,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 500,
            manifestLoadingTimeOut: 10000,
            manifestLoadingMaxRetry: 6,
            manifestLoadingRetryDelay: 500,
            enableWebVTT: true,
            capLevelToPlayerSize: true,
            maxBufferLength: 30
        };

        // Capping the level to player size for 360
        // videos too restrictive on the quality
        if (this.state.is360) {
            opts.capLevelToPlayerSize = false;
        }

        if (this.state.debug) {
            opts.debug = this.logger;
        }

        this.hls = new Hls(opts);

        // Start 360 videos at a slightly higher quality level
        if (this.state.is360) {
            this.hls.startLevel = 1;
        }

        this.hls.attachMedia(this.video);

        this._setupHlsjsEvents(renditionUrl);
    }

    _setupHlsjsEvents(renditionUrl) {
        this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            this.hls.loadSource(renditionUrl);
        });

        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
            if (this.state.isMediaHD && !this.state.isLive) {
                this.hls.nextLevel = this.hls.levels.length - 1;
            }
        });

        this.hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
            this._levelLoaded(event, data);
        });

        this.hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
            this.store.dispatch(actions.media.didSwitchHlsLevel(data.level));
        });

        this.hls.on(Hls.Events.SUBTITLE_TRACK_LOADED, () => {
            this.store.dispatch(actions.media.didSubtitleTrackLoad());
        });

        this.hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
                if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                    this.hls.recoverMediaError();
                } else {
                    this.triggerFatalError(data);
                }
            }
        });
    }

    _levelLoaded(event, data) {
        let currentLevelType;

        if (!this.state.isLive) {
            return;
        }

        if (data && data.details) {
            currentLevelType = data.details.live ? 'live' : 'vod';
            if (this.levelType !== currentLevelType) {
                this.player.emit(apiEvents.LEVEL_TYPE_CHANGE, currentLevelType);
            }
            this.levelType = currentLevelType;
        }
    }
}

export default Hlsjs;



// WEBPACK FOOTER //
// ./src/player/playback/hlsjs.js