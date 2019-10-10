import dom from 'corleone';
import {
    EventEmitter
} from 'events';
import clone from 'clone';
import _o from 'monocle-decorators';
import uuid from 'uuid/v4';
import objectEntries from 'object.entries';

import registerPlugins from './deprecated-plugins-api';
import store from './store';
import {
    actions
} from './actions';
import apiEvents from './events';
import deprecatedApi from './deprecated-api';
import mediaTypes from './media-types';
import {
    initialState
} from './reducer';

// playback
import playbackTypes from './playback/types';
import AudioMedia from './playback/audio-media';
import Hls from './playback/hls';
import Hlsjs from './playback/hlsjs';
import ProgressiveDownload from './playback/progressive-download';
import ThreesixtyHlsjs from './playback/threesixty-hlsjs';
import ThreesixtyProgressiveDownload from './playback/threesixty-progressive-download';
import VideoWithAds from './playback/video-with-dfp';
import Cinemagraph from './playback/cinemagraph';

// util-nyt
import fetchData from '../util-nyt/fetch-data';
import fetchGraphQLData from '../util-nyt/fetch-graphql-data';
import normalizeData from '../util-nyt/normalize-data';

// util
import computeAspectRatio from '../util/compute-aspect-ratio';
import isChrome from '../util/is-chrome';
import Logger from '../util/logger';
import isOnNytDomain from '../util/is-on-nyt-domain';

const logger = new Logger('vhs:player');
const eventLogger = new Logger('vhs:event');

function mapStateToProps(state) {
    const newProps = {
        ...state.player
    };
    delete newProps.media;
    delete newProps.options;
    return newProps;
}

export function setupUserInteractionListeners(ctx) {
    const handleUserInteraction = event => {
        if (
            event.type === 'click' ||
            (event.type === 'keydown' &&
                (event.key === 'Enter' || event.key === 'Space'))
        ) {
            ['click', 'keydown'].forEach(eventName => {
                ctx.container.removeEventListener(eventName, handleUserInteraction);
            });
            ctx.store.dispatch(actions.userDidInteract());
        }
    };
    ['click', 'keydown'].forEach(eventName => {
        ctx.container.addEventListener(eventName, handleUserInteraction, {
            passive: true
        });
    });
}

@_o.mixin([deprecatedApi])
class Player extends EventEmitter {
    constructor(options = {}) {
        super();

        const instanceId = uuid();

        // Logs all events on console
        const originalEmit = this.emit;
        this.emit = (name, ...args) => {
            eventLogger.log(name, ...args);
            originalEmit.apply(this, [name, ...args]);
        };

        this.events = apiEvents;
        this.readyCallbacks = [];
        this.props = {};
        this.plugins = {};
        this.options = options;
        this.store = store.create({
            debug: options.debug,
            preloadedState: {
                player: {
                    ...initialState,
                    instanceId
                }
            }
        });
        this.setMaxListeners(20);
        this.subscribe();
        this.init();
    }

    async init() {
        this.store.dispatch(actions.optionsReady(this.options));
        this.setupEnvPaths(window.location.protocol);

        // Must happen before plugins are initialized
        this.setupContainer();

        return this.create();
    }

    setupEnvPaths() {
        this.setupHostPaths();
        this.setupDataPath();
    }

    setupHostPaths() {
        if (this.options.env === 'localhost') {
            this.apiBaseDomain = 'https://www.nytimes.com';
            this.staticBaseUrl = 'https://static01.nyt.com';
            this.publicPath = `${document.location.origin}/build/`;
        } else if (this.options.env === 'preview') {
            const branchName = document.location.pathname
                .split('/video-static/vhs3/preview/')[1]
                .split('/')[0];
            this.apiBaseDomain = 'https://www.stg.nytimes.com';
            this.staticBaseUrl = 'https://static.stg.nytimes.com';
            this.publicPath = `${
        document.location.origin
      }/video-static/vhs3/preview/${branchName}/`;
        } else if (this.options.env === 'test') {
            this.apiBaseDomain = 'https://www.nytimes.com';
            this.staticBaseUrl = 'https://static.stg.nytimes.com';
            this.publicPath = 'https://static01.nyt.com/video-static/vhs3/';
        } else if (this.options.env === 'development') {
            this.apiBaseDomain = 'https://www.stg.nytimes.com';
            this.staticBaseUrl = 'https://static.dev.nytimes.com';
            this.publicPath = 'http://localhost.nytimes.com:8080/build/';
        } else if (this.options.env === 'staging') {
            this.apiBaseDomain = 'https://www.stg.nytimes.com';
            this.staticBaseUrl = 'https://static.stg.nytimes.com';
            this.publicPath = 'https://static01.stg.nyt.com/video-static/vhs3/';
        } else {
            this.apiBaseDomain = 'https://www.nytimes.com';
            this.staticBaseUrl = 'https://static01.nyt.com';
            this.publicPath = 'https://static01.nyt.com/video-static/vhs3/';
        }

        // eslint-disable-next-line camelcase, no-undef
        __webpack_public_path__ = this.publicPath;

        if (this.options.apiBaseDomain) {
            this.apiBaseDomain = this.options.apiBaseDomain;
        }

        this.apiBasePath = this.options.apiBasePath || '/svc/video/api/v3/';
        this.apiBaseUrl = this.apiBaseDomain + this.apiBasePath;

        if (this.options.staticBaseUrl) {
            this.staticBaseUrl = this.options.staticBaseUrl;
        }
    }

    setupDataPath() {
        switch (this.options.dataEnv) {
            case 'localhost':
            case 'development':
                this.graphQLHost =
                    'http://samizdat-graphql.stg.iad2.nyt.net/graphql/v2';
                this.graphQLToken = process.env.SAMIZDAT_TOKEN_STG;
                break;
            case 'test':
                this.graphQLHost =
                    'https://samizdat-graphql-test.stg.nytimes.com/graphql/v2';
                this.graphQLToken = process.env.SAMIZDAT_TOKEN_TST;
                break;
            case 'preview':
            case 'staging':
                this.graphQLHost =
                    'https://samizdat-graphql.stg.nytimes.com/graphql/v2';
                this.graphQLToken = process.env.SAMIZDAT_TOKEN_STG;
                break;
            default:
                this.graphQLHost = 'https://samizdat-graphql.nytimes.com/graphql/v2';
                this.graphQLToken = process.env.SAMIZDAT_TOKEN_PRD;
                break;
        }
    }

    async create() {
        if (this.options.mediaType !== mediaTypes.AUDIO) {
            this.setupIdleStateListeners();
        }

        setupUserInteractionListeners(this);

        // Plugins need to load before we get data so we can report on bootstrap
        // failures
        await registerPlugins(this);

        this.store.dispatch(actions.fetchDataStarted());

        let data;
        if (this.options.id !== '' && this.options.api) {
            try {
                data = await fetchGraphQLData(this.graphQLHost, {
                    id: this.options.id,
                    env: this.options.dataEnv,
                    token: this.graphQLToken
                });
            } catch (error) {
                let errorMsg = 'Error fetching GraphQL data.';

                if (!isOnNytDomain()) {
                    errorMsg += " Seems you're not on nytimes.com domain.";
                }
                logger.error(errorMsg, error);

                this.store.dispatch(actions.fetchDataFailed(error));
            }
        }
        const normalizedData = normalizeData(data, this);

        this.store.dispatch(actions.dataReady(normalizedData));
        this.renderPlayer();
    }

    destroy() {
        this.clearIdleTimeout();

        if (this.playback) {
            this.playback.destroy(true);
        }

        this.emit(apiEvents.DESTROY);

        if (this.container) {
            dom.remove(this.container);
        }

        delete window.__VHS__.instances[this.props.instanceId];
    }

    fetchPlaylist() {
        const {
            playlist: mediaPlaylist,
            id: videoId
        } = this.store.getState().player.media;
        if (mediaPlaylist) {
            const url = `${this.apiBaseDomain}${`${this.apiBasePath}playlist`}/${
        mediaPlaylist.id
      }`;
            fetchData(url)
                .then(playlist => {
                    // dedup playlist
                    if (playlist && playlist.videos && playlist.videos.length) {
                        playlist.videos = playlist.videos.filter(
                            curVideo => curVideo !== parseInt(videoId, 10)
                        );
                    }
                    this.store.dispatch(actions.didFetchPlaylist(playlist));
                })
                .catch(response => {
                    logger.error('Error fetching playlist.', response);

                    this.store.dispatch(actions.fetchDataFailed(response));
                });
        }
    }

    renderPlayer() {
        const currentState = this.store.getState();
        const {
            posterUrl
        } = currentState.player.media;
        const {
            cover
        } = currentState.player.options;

        this.createPlayback();
        return this.playback.init().then(() => {
            this.store.dispatch(actions.playbackReady());
            this._ready();

            if (this.options.mediaType === mediaTypes.AUDIO) {
                this.setActiveState(true);
            } else if (!cover) {
                // controls only show up on active
                this.setActiveState(true);
                if (posterUrl) {
                    this.video.setAttribute('poster', posterUrl);
                }
            }
        });
    }

    setupContainer() {
        if (typeof this.options.container.get === 'function') {
            this.container = this.options.container.get(0);
        } else if (typeof this.options.container === 'string') {
            this.container = dom.query(`#${this.options.container}`);
        } else if (this.options.container instanceof HTMLElement) {
            this.container = this.options.container;
        } else {
            logger.error(
                'options.container must be an HTMLElement, id string or jQuery object.'
            );
        }

        this.container.classList.add('vhs-container-namespace-hwX6aOr7');
        this.container.classList.add('nytd-player-container');
        if (this.options.mediaType === mediaTypes.AUDIO) {
            this.container.classList.add('nytd-player-container--audio');
        }

        if (!this.store.getState().player.isTouch) {
            this.container.classList.add('vhs-no-touch');
        }

        if (!this.container.id) {
            this.container.id = this.props.instanceId;
        }

        if (
            this.options.height === '100%' &&
            this.options.width === '100%' &&
            this.options.mediaType !== mediaTypes.AUDIO
        ) {
            this.container.style.background = '#000';
            this.container.style.paddingBottom = `${computeAspectRatio(
        this.options.ratio
      )}%`;
            this.container.style.height =
                this.options.ratio === 'none' ? this.options.height : 0;
            this.container.style.position = 'relative';
            this.container.style.overflow = 'hidden';
            this.container.style.width = this.options.width;
        } else {
            this.container.style.width = this.options.width;
            this.container.style.height = this.options.height;
        }

        return this.container;
    }

    setupIdleStateListeners() {
        ['mousemove', 'touchmove', 'touchstart', 'mouseenter'].forEach(
            eventName => {
                this.container.addEventListener(
                    eventName,
                    event => {
                        const mouseDidMove = event.movementX !== 0 && event.movementY !== 0;
                        const isMouseMoveEvent = event.type === 'mousemove';
                        if (isChrome() && isMouseMoveEvent && !mouseDidMove) {
                            return;
                        }
                        this.setActiveState();
                    }, {
                        passive: true
                    }
                );
            }
        );

        this.container.addEventListener('mouseleave', () => {
            this.setIdleState();
        });

        this.on(apiEvents.AD_STARTED, () => {
            this.setActiveState(true);
        });

        this.once(apiEvents.PLAYING, () => {
            this.setIdleState();
        });
    }

    /**
     * Get the video Canonical URL at Current Time
     *
     * @public
     * @method getVideoCanonicalAtCurrentTime
     * @return {String} Returns the Video Canonical URL at Current Time
     */
    getVideoCanonicalAtCurrentTime() {
        let canonicalURL = '';
        const currentState = this.store.getState();

        if (currentState.player.media.url) {
            canonicalURL = currentState.player.media.url;
            canonicalURL += `?t=${Math.round(this.getCurrentTime())}`;
        }

        return canonicalURL;
    }

    setActiveState(force) {
        // do nothing if a player has not been activated yet (clicked/tapped or told to play)
        if (!this.props.activated) {
            return;
        }

        this.resetIdleTimeout();

        // see if state changed or force (force when player state changes, i.e. ad to content)
        if (this.container.classList.contains('idle') || force) {
            logger.log('set active state');
            this.container.classList.remove('idle');
            this.store.dispatch(actions.active());
            this.emit(apiEvents.ACTIVE);
        }
    }

    setIdleState() {
        this.clearIdleTimeout();

        // stay active if not activated or paused
        if (!this.props.activated || this.isPaused()) {
            return;
        }

        logger.log('set idle state');
        this.container.classList.add('idle');
        this.store.dispatch(actions.idle());
        this.emit(apiEvents.IDLE);
    }

    /**
     * Reset the Idle Timeout
     *
     * @method resetIdleTimeout
     * @param {Number} overrideTime An override timeout time in milliseconds
     */
    resetIdleTimeout(overrideTime) {
        // reset timeout
        const timeoutValue = overrideTime || this.options.timeUntilIdle;
        this.clearIdleTimeout();
        this.idleTimeout = window.setTimeout(() => {
            this.setIdleState();
        }, timeoutValue);
    }

    /**
     * Clear the Idle Timeout
     *
     * @method clearIdleTimeout
     */
    clearIdleTimeout() {
        if (this.idleTimeout) {
            window.clearTimeout(this.idleTimeout);
            this.idleTimeout = null;
        }
    }

    async load(nextVideo, playAfterLoad = false) {
        this.video.style.opacity = 0;

        const options = this.store.getState().player.options;

        const currentState = this.store.getState();
        this.emit(apiEvents.LOAD_START, {
            id: currentState.player.media.id,
            headline: currentState.player.media.headline,
            summary: currentState.player.media.summary,
            url: currentState.player.media.url,
            images: currentState.player.media.images,
            playlist: currentState.player.media.playlist,
            related: currentState.player.media.related
        });

        async function loadNextVideo() {
            const playbackType = this.store.getState().player.media.playbackType;

            if (!this.playback || this.playback.type !== playbackType) {
                this.createPlayback();
                await this.playback.init();
                await this.playback.load();
                this.video.style.opacity = 1;
                if (playAfterLoad) {
                    this.playback.play();
                }
            } else {
                await this.playback.load();
                this.video.style.opacity = 1;
                if (playAfterLoad) {
                    this.playback.play();
                }
            }
        }

        if (typeof nextVideo === 'object') {
            const normalizedData = normalizeData({
                    src: nextVideo.src,
                    headline: nextVideo.headline
                },
                this
            );
            this.store.dispatch(actions.dataReady(normalizedData));
            loadNextVideo.apply(this);
        } else {
            this.store.dispatch(actions.fetchDataStarted());

            try {
                const data = await fetchGraphQLData(this.graphQLHost, {
                    env: options.dataEnv,
                    id: nextVideo,
                    token: this.graphQLToken
                });
                const normalizedData = normalizeData(data, this);
                this.store.dispatch(actions.dataReady(normalizedData));
                loadNextVideo.apply(this);
            } catch (error) {
                logger.error('Error on fetching GraphQL data. ', error);

                this.store.dispatch(actions.fetchDataFailed(error));

                this.pause();
            }
        }
    }

    createPlayback() {
        const currentState = this.store.getState();
        const playbackType = currentState.player.media.playbackType;
        const container = this.container;

        if (this.playback) {
            this.playback.destroy();
        }

        switch (playbackType) {
            case playbackTypes.HLS:
                this.playback = new Hls(this.store, container, this, this.video);
                break;
            case playbackTypes.PROGRESSIVE_DOWNLOAD:
                this.playback = new ProgressiveDownload(
                    this.store,
                    container,
                    this,
                    this.video
                );
                break;
            case playbackTypes.HLSJS:
                this.playback = new Hlsjs(this.store, container, this, this.video);
                break;
            case playbackTypes.THREESIXTY_HLSJS:
                this.playback = new ThreesixtyHlsjs(
                    this.store,
                    container,
                    this,
                    this.video
                );
                break;
            case playbackTypes.THREESIXTY_PROGRESSIVE_DOWNLOAD:
                this.playback = new ThreesixtyProgressiveDownload(
                    this.store,
                    container,
                    this,
                    this.video
                );
                break;
            case playbackTypes.AUDIO:
                this.playback = new AudioMedia(this.store, container, this, this.video);
                break;
            case playbackTypes.CINEMAGRAPH:
                this.playback = new Cinemagraph(
                    this.store,
                    container,
                    this,
                    this.video
                );
                break;
            default:
                this.playback = null;
                this.emit(apiEvents.BROWSER_NOT_SUPPORTED);
        }

        if (currentState.player.media.ads && this.playback) {
            const playback = this.playback;
            this.playback = new VideoWithAds(
                this.store,
                container,
                this,
                this.video,
                playback
            );
        }
    }

    async plugin(pluginObj) {
        const [pluginName, pluginFactory] = objectEntries(pluginObj)[0];
        const pluginInstance = await pluginFactory(this);
        if (pluginInstance) {
            this.plugins[pluginName] = pluginInstance;
        }
        this.emit(apiEvents.PLUGIN, pluginName);
    }

    /**
     * Public Media Control Functions
     * These call into the playback currently registered
     */
    play() {
        return this.playback.play();
    }

    pause() {
        if (this.props.activated && this.props.isMediaPlaying) {
            this.playback.pause();
        }
    }

    seek(time) {
        const currentState = this.store.getState();
        if (typeof time !== 'number') {
            throw new Error('time argument should be a Number');
        }

        if (time < 0 || time > currentState.player.media.duration) {
            throw new Error(
                'time should be greater than 0 and lower than the duration of the video'
            );
        }

        this.store.dispatch(actions.shouldSeek(time));
        this.emit(apiEvents.SEEKING, time);
        logger.log(`seeking event: ${time}`);

        if (this.playback) {
            this.playback.seek(time);
            const unsubscriber = this.store.whenever(
                'player.isMediaPlaying',
                true,
                () => {
                    unsubscriber();
                    this.store.dispatch(actions.media.didSeek());
                }
            );
        }
    }

    mute(mute) {
        this.playback.mute(mute);
    }

    setVolume(volume) {
        this.playback.setVolume(volume);
    }

    reloadVideo() {
        if (this.playback) {
            this.playback.reloadVideo();
            this.store.dispatch(actions.media.didLoad());
        }
    }

    /**
     * Toggles
     *
     */
    togglePlay() {
        const currentState = this.store.getState();
        const isPaused = !currentState.player.isMediaPlaying;
        const isEnded = currentState.player.isMediaEnded;

        if (isPaused || isEnded) {
            this.play();
        } else {
            this.pause();
        }
    }

    toggleHD() {
        if (this.playback) {
            this.playback.toggleHD();
        }
    }

    toggleVolume() {
        this.mute(!this.isMuted());
    }

    /**
     * Some leftover getters
     *
     */
    isPaused() {
        return !this.store.getState().player.isMediaPlaying;
    }

    isMuted() {
        return this.store.getState().player.isMediaMuted;
    }

    getVolume() {
        return this.store.getState().player.volume;
    }

    getCurrentTime() {
        return this.video ? this.video.currentTime : 0;
    }

    getCurrentSource() {
        return this.video ? this.video.src || this.video.currentSrc : '';
    }

    getDuration() {
        return this.store.getState().player.media.duration;
    }

    getHeadline() {
        return this.store.getState().player.media.headline;
    }

    /**
     * Subscriber to state changes
     *
     */
    subscribe() {
        this.unsubscribe.subscribers = [];

        this.unsubscribe.subscribers.push(
            this.store.subscribe(() => {
                const currentState = this.store.getState();
                this.props = mapStateToProps(currentState, clone(this.props));
            }),
            this.store.whenever('player.shouldPlay', true, () => this.play()),
            this.store.whenever('player.shouldPause', true, () => this.pause()),

            this.store.whenever('player.shouldFetchPlaylist', true, () =>
                this.fetchPlaylist()
            ),

            this.store.whenever('player.isMediaPlaying', true, () => {
                const {
                    isAdActive
                } = this.store.getState().player;

                if (!isAdActive) {
                    this.emit(apiEvents.PLAYING);
                }
            }),

            this.store.whenever('player.isAdActive', false, () => {
                const {
                    isMediaPlaying
                } = this.store.getState().player;

                if (isMediaPlaying) {
                    this.emit(apiEvents.PLAYING);
                }
            }),

            this.store.whenever('player.isMediaPlaying', false, () => {
                const {
                    isMediaEnded,
                    isReady
                } = this.store.getState().player;
                if (isMediaEnded || !isReady) {
                    return;
                }
                this.emit(apiEvents.PAUSE);
            }),

            this.store.whenever('player.isMediaEnded', true, () => {
                this.emit(apiEvents.ENDED);
            }),

            this.store.whenever('player.dataFailed', true, () => {
                this.emit(apiEvents.SLATE, {
                    message: 'Video Data Failed to Load'
                });
            }),

            this.store.whenever(
                'player.options',
                () => true,
                () => {
                    this.options = this.store.getState().player.options;
                }
            )
        );
    }

    unsubscribe() {
        if (!Array.isArray(this.unsubscribe.unsubscribers)) {
            return false;
        }

        this.unsubscribe.unsubscribers.forEach(unsubscriber => unsubscriber());

        return true;
    }
}

export default Player;



// WEBPACK FOOTER //
// ./src/player/index.js