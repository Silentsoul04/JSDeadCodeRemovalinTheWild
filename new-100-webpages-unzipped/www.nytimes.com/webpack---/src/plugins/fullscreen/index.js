import screenfull from 'screenfull';
import isIpad from 'src/util/is-ipad';
import isIphone from 'src/util/is-iphone';
import Logger from 'src/util/logger';
import apiEvents from 'src/player/events';
import reducer from './reducer';
import actions from './actions';

const deprecationLogger = new Logger('vhs');

export default {
    name: 'fullscreen',
    enable: true,
    proto: {
        state: {},
        fullscreenEl: undefined,
        isSafariIos: undefined,
        onFullscreenChangeBound: undefined,
        unsubscriber: undefined,
        curFullscreenEl() {
            return screenfull && screenfull.element;
        },

        _ready() {
            const store = this._player.store;

            this.mapGlobalToLocalState();
            this.subscribeToStore();

            this.isSafariIos = isIpad() || isIphone();
            this.fullscreenEl =
                (isIpad() || isIphone()) && !this.state.isMedia360 ?
                this._player.video :
                this._player.container;

            this.onFullscreenChangeBound = this.onFullscreenChange.bind(this);

            store.dispatch(
                actions.fullscreenApiAvailability(!(this.state.isMedia360 && this.isSafariIos))
            );

            if (!this.state.isApiAvailable) return;

            this.decoratePlayer();
            this.bindEventListeners();
        },

        _destroy() {
            this.undecoratePlayer();
            this.unbindEventListeners();
            this.unsubscribe();
        },

        decoratePlayer() {
            const player = this._player;
            const plugin = this;

            player.fullscreen = function(goFullscreen) {
                if (goFullscreen) {
                    if (plugin.isSafariIos) {
                        plugin.fullscreenEl.webkitEnterFullscreen();
                    } else {
                        screenfull.request(plugin.fullscreenEl);
                    }
                } else if (plugin.isSafariIos) {
                    plugin.fullscreenEl.webkitExitFullscreen();
                } else {
                    screenfull.exit();
                }
            };

            player.toggleFullscreen = function() {
                this.fullscreen(!plugin.state.isFullscreen);
            };

            player.isFullscreen = function() {
                deprecationLogger.warn('`player.isFullscreen` is deprecated');

                return plugin.state.isFullscreen;
            };
        },

        undecoratePlayer() {
            this._player.fullscreen = undefined;
            this._player.toggleFullscreen = undefined;
            this._player.isFullscreen = undefined;
        },

        bindEventListeners() {
            if (screenfull) {
                screenfull.on('change', this.onFullscreenChangeBound);
            }

            // For iOS
            ['webkitbeginfullscreen', 'webkitendfullscreen'].forEach(eventName => {
                this._player.video.addEventListener(
                    eventName,
                    this.onFullscreenChangeBound
                );
            });
        },

        unbindEventListeners() {
            if (screenfull) {
                screenfull.off('change', this.onFullscreenChangeBound);
            }

            // For iOS
            ['webkitbeginfullscreen', 'webkitendfullscreen'].forEach(eventName => {
                this._player.video.removeEventListener(
                    eventName,
                    this.onFullscreenChangeBound
                );
            });
        },

        onFullscreenChange() {
            const store = this._player.store;

            // If it was fullscreen
            if (this.state.isFullscreen) {
                this._player.emit(apiEvents.EXIT_FULLSCREEN);
                store.dispatch(actions.handleFullscreenChange(false));
            } else if (
                this.curFullscreenEl() === this._player.container ||
                this._player.video.webkitDisplayingFullscreen
            ) {
                this._player.emit(apiEvents.GO_FULLSCREEN);
                store.dispatch(actions.handleFullscreenChange(true));
            }
        },

        mapGlobalToLocalState() {
            const globalState = this._player.store.getState();

            this.state = {
                ...this.state,
                ...globalState.plugins.fullscreen,
                isMedia360: globalState.player.media.is360
            };
        },

        subscribeToStore() {
            this.unsubscriber = this._player.store.subscribe(() =>
                this.mapGlobalToLocalState()
            );
        },

        unsubscribe() {
            this.unsubscriber();
        },

        reducer() {
            return {
                fullscreen: reducer
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/fullscreen/index.js