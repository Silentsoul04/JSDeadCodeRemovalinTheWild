/* global mux */

import canTrack from 'can-track';
import checkCookie from 'src/util/check-cookie';
import getScriptNative from 'src/util/get-script-native';
import Logger from 'src/util/logger';
import playerEvents from 'src/player/events';
import {
    getMediaData
} from './selectors';

const logger = new Logger('vhs:plugins:mux');

//
// API
//

export default {
    enable: false,
    name: 'mux',
    proto: {
        _initialize() {
            const player = this._player;
            const store = this._player.store;
            if (!canTrack() ||
                (this._player.store.getState().plugins.featureFlags.gdpr &&
                    checkCookie('NYT-T=out'))
            ) {
                return undefined;
            }
            this.state = {
                isMonitoring: false,
                debug: store.getState().player.options.debug
            };

            return new Promise((resolve, reject) => {
                const unsubscribe = store.whenever(
                    'player.isElementReady',
                    true,
                    () => {
                        unsubscribe();

                        this.fetchMux()
                            .then(() => {
                                this.monkeyPatchMuxLogger();
                                this.setupMux(player, store, this.state);
                                this.bindEvents(player, store, this.state);
                                resolve();
                            })
                            .catch(reject);
                    }
                );
            });
        },

        _error(event) {
            if (this.state.isMonitoring && event.hlsjs && event.fatal) {
                mux.emit(this._player.video, 'error', {
                    player_error_code: event.type,
                    player_error_message: event.details
                });
            }
        },

        fetchMux() {
            return new Promise((resolve, reject) => {
                if (typeof mux === 'undefined') {
                    getScriptNative({
                        url: 'https://src.litix.io/core/2/mux.js',
                        success() {
                            resolve();
                        },
                        error(error) {
                            reject(error);
                        }
                    });
                } else {
                    resolve();
                }
            });
        },

        setupMux(player, store, pluginState) {
            if (
                typeof mux !== 'undefined' &&
                player.video &&
                player.video.constructor === HTMLVideoElement
            ) {
                const storeState = store.getState();
                const data = getMediaData(storeState);

                if (!pluginState.isMonitoring) {
                    pluginState.isMonitoring = true;
                    mux.monitor(player.video, {
                        data,
                        debug: pluginState.debug
                    });
                } else {
                    mux.emit(player.video, 'videochange', data);
                }
            }
        },

        handleAdEvent(eventName, player) {
            if (typeof mux === 'undefined') return;

            mux.emit(player.video, eventName);
        },

        bindEvents(player, store, pluginState) {
            player.on(playerEvents.LOAD_START, () => {
                this.setupMux(player, store, pluginState);
            });
            player.on(playerEvents.AD_STARTED, () =>
                this.handleAdEvent('adplaying', player)
            );
            player.on(playerEvents.AD_PAUSED, () =>
                this.handleAdEvent('adpause', player)
            );
            player.on(playerEvents.AD_COMPLETED, () =>
                this.handleAdEvent('adended', player)
            );
            player.on(playerEvents.AD_SKIPPED, () =>
                this.handleAdEvent('adended', player)
            );
            player.on(playerEvents.AD_ERROR, () =>
                this.handleAdEvent('aderror', player)
            );
            player.on(playerEvents.AD_RESUMED, () => {
                this.handleAdEvent('adplay', player);
                this.handleAdEvent('adplaying', player);
            });
        },

        monkeyPatchMuxLogger() {
            // mux uses loglevel https://github.com/pimterry/loglevel
            // We check for its signature before monkey patching
            if (typeof mux === 'undefined' || !mux.log || !mux.log.methodFactory)
                return;

            const originalMethodFactory = mux.log.methodFactory;
            mux.log.methodFactory = (methodName, logLevel, loggerName) => {
                if (typeof logger[methodName] === 'function') {
                    return (...args) => {
                        logger[methodName](...args);
                    };
                }

                return originalMethodFactory(methodName, logLevel, loggerName);
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/mux/index.js