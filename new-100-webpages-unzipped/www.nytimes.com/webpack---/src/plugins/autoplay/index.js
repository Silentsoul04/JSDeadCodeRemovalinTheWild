import canAutoplay from 'can-autoplay';
import checkCookie from 'src/util/check-cookie';
import events from 'src/player/events';
import Logger from 'src/util/logger';
import nextTick from 'src/util/next-tick';
import reducer from './reducer';
import actions from './actions';

const logger = new Logger('vhs:plugin:autoplay');

export default {
    name: 'autoplay',
    enable: false,
    proto: {
        _initialize() {
            const player = this._player;

            player.on(events.PLAYBACK_READY, () => {
                player.playback.init();
            });
        },

        shouldReducedMotion() {
            try {
                return window.matchMedia('(prefers-reduced-motion)').matches;
            } catch (_) {
                return false;
            }
        },

        async _ready() {
            const player = this._player;
            const state = this._player.store.getState();
            if (
                state.plugins.featureFlags.gdpr &&
                checkCookie('nyt-gdpr=1') &&
                !checkCookie('NYT-T=')
            ) {
                return;
            }

            if (state.player.dataFailed) return;

            if (document.hidden) {
                const handleVisibilityChange = async () => {
                    document.removeEventListener(
                        'visibilitychange',
                        handleVisibilityChange
                    );
                    await this.handlePageVisible();
                };
                document.addEventListener('visibilitychange', handleVisibilityChange);
            } else {
                await this.handlePageVisible();
            }

            player.store.whenever(
                'plugins.viewportIntersectionObserver.isInsideViewport',
                true,
                () => this.handlePlayerInsideViewport()
            );

            player.store.whenever(
                'plugins.viewportIntersectionObserver.isInsideViewport',
                false,
                () => this.handlePlayerOutsideViewport()
            );
        },

        handlePlayerInsideViewport() {
            const player = this._player;
            const state = this._player.store.getState();

            if (
                (state.plugins.autoplay.canAutoplayUnmuted &&
                    !state.player.didUserInteract) ||
                (state.plugins.autoplay.canAutoplayMuted && state.player.isMediaMuted)
            ) {
                player.play();
            }
        },

        handlePlayerOutsideViewport() {
            const player = this._player;
            const globalState = this._player.store.getState();

            if (globalState.player.isMediaMuted) {
                player.pause();
            }
        },

        async handlePageVisible() {
            await this.detectAutoplayCapabilities();

            const player = this._player;
            const state = this._player.store.getState();

            if (!state.plugins.autoplay.canAutoplayUnmuted &&
                state.plugins.autoplay.canAutoplayMuted
            ) {
                // Hack. Browsers were not respecting the mute attribute when muting and
                // playing on the same event loop. (Or maybe an uncaught race condition
                // in our code?)
                player.mute(true);
                await nextTick();
            }

            if (
                state.plugins.viewportIntersectionObserver.isInsideViewport &&
                state.plugins.autoplay.canAutoplay
            ) {
                player.play();
            }
        },

        async detectAutoplayCapabilities() {
            const store = this._player.store;
            let canAutoplayUnmuted = false;
            let canAutoplayMuted;
            const promises = [];

            if (this.shouldReducedMotion()) {
                logger.log('User prefers reduced motion, ignoring autoplay');
                canAutoplayMuted = false;
                if (!this._player.options.muted) {
                    canAutoplayUnmuted = false;
                }
            } else {
                promises.push(
                    canAutoplay
                    .video({
                        muted: true,
                        timeout: 5000,
                        inline: true,
                        blob: true
                    })
                    .then(({
                        result
                    }) => {
                        canAutoplayMuted = result;
                    })
                    .catch(() => {
                        canAutoplayMuted = false;
                    })
                );

                if (!this._player.options.muted) {
                    promises.push(
                        canAutoplay
                        .video({
                            timeout: 5000,
                            inline: true,
                            blob: true
                        })
                        .then(({
                            result
                        }) => {
                            canAutoplayUnmuted = result;
                        })
                        .catch(() => {
                            canAutoplayUnmuted = false;
                        })
                    );
                }
            }

            return Promise.all(promises).then(() => {
                store.dispatch(
                    actions.updatePermissions({
                        canAutoplayUnmuted,
                        canAutoplayMuted
                    })
                );
            });
        },

        reducer() {
            return {
                autoplay: reducer
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/autoplay/index.js