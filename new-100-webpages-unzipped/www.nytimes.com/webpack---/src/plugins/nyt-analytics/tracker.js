/* global webpackPluginVhsVersion */

import safeChain from 'safe-chain';
import playerEvents from 'src/player/events';
import getDeviceType from 'src/util/get-device-type';
import getReferrer from 'src/util/get-referrer';
import Logger from 'src/util/logger';
import Dimensions from './dimensions';

const logger = new Logger('vhs:plugin:nyt-analytics');
const log = (...args) => {
    Promise.resolve().then(() => logger.log(...args));
};

const dataLayer = window.dataLayer || [];

class Tracker {
    constructor(store, player) {
        this.store = store;
        this.player = player;
        this.dimensions = new Dimensions(store, player);
        this.unsubscribes = [];
    }

    init() {
        this.dimensions.init();

        this.setOncePerMediaTrackers();
        this.subscribe();

        this.trackPlayerLoad();
        this.trackMediaLoad();
        this.trackInview();
        this.trackPlay();
        this.trackPause();
        this.trackResume();
        this.trackSeek();
        this.trackMediaComplete();
        this.trackMute();
        this.trackUnmute();
        this.trackHdOn();
        this.trackHdOff();
        this.trackEnterFullscreen();
        this.trackExitFullscreen();
        this.trackAdStart();
        this.trackAdSkip();
        this.trackAdComplete();
        this.trackPlayerError();
        this.trackRebuffering();
        this.trackMediaError();
        this.trackEndSlateInview();
        this.trackEndSlateLoaded();
    }

    subscribe() {
        // For replay
        this.store.whenever(
            'player',
            () => true,
            (cur, prev) => {
                if (
                    cur.media &&
                    prev.media &&
                    cur.media.id === prev.media.id &&
                    prev.isMediaEnded &&
                    cur.isMediaPlaying
                ) {
                    this.resetOncePerMediaTrackers();
                }
            }
        );

        this.store.whenever('player.isMediaLoaded', true, () => {
            this.resetOncePerMediaTrackers();
        });
    }

    setOncePerMediaTrackers() {
        this.unsubscribes.push(this.track25PercentConsumed());
        this.unsubscribes.push(this.track50PercentConsumed());
        this.unsubscribes.push(this.track75PercentConsumed());
        this.unsubscribes.push(this.track90PercentConsumed());
        this.unsubscribes.push(this.trackPlay());
    }

    resetOncePerMediaTrackers() {
        this.unsubscribes.forEach(unsubscribe => unsubscribe());
        this.unsubscribes = [];

        this.setOncePerMediaTrackers();
    }

    trackPlayerLoad() {
        const event = 'player-load';
        const state = this.store.getState();

        if (state.player.isElementReady) {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        } else {
            const unsubscribe = this.store.whenever(
                'player.isElementReady',
                true,
                () => {
                    unsubscribe();
                    log(event, {
                        dimensions: this.dimensions.getDefaultBatch()
                    });
                }
            );
        }
    }

    trackMediaLoad() {
        const event = 'media-load';

        this.store.whenever('player.isMediaLoaded', true, () => {
            log(event, {
                dimensions: this.dimensions.getCompleteBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackInview() {
        const event = 'inview';
        const state = this.store.getState();

        if (state.plugins.viewportIntersectionObserver.isInsideViewport) {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        }

        this.store.whenever(
            'plugins.viewportIntersectionObserver.isInsideViewport',
            true,
            () => {
                log(event, {
                    dimensions: this.dimensions.getDefaultBatch()
                });
                this.pushToDataLayer(event);
            }
        );
    }

    trackPlay() {
        const event = 'play';

        const unsubscribe = this.store.whenever(
            'player.isMediaPlaying',
            true,
            () => {
                unsubscribe();
                log(event, {
                    dimensions: this.dimensions.getDefaultBatch()
                });
                this.pushToDataLayer(event);
            }
        );

        return unsubscribe;
    }

    async trackPause() {
        const event = 'pause';

        this.store.whenever('player.isMediaPlaying', false, () => {
            // If it's a seek, we ignore.
            if (this.store.getState().plugins.controls.isMouseDown) return;

            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackResume() {
        const event = 'resume';

        this.store.whenever('player.isMediaPlaying', true, () => {
            const state = this.store.getState();

            if (state.player.isSeeking) return;

            if (safeChain(state, 'player.media.progress') > 0) {
                log(event, {
                    dimensions: this.dimensions.getDefaultBatch()
                });
                this.pushToDataLayer(event);
            }
        });
    }

    trackSeek() {
        const event = 'seek';

        this.store.whenever('player.isSeeking', true, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackMediaComplete() {
        const event = 'media-complete';

        this.store.whenever('player.isMediaEnded', true, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackMute() {
        const event = 'mute';

        this.store.whenever('player.isMediaMuted', true, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackUnmute() {
        const event = 'unmute';

        this.store.whenever('player.isMediaMuted', false, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackHdOn() {
        const event = 'hd-on';

        this.store.whenever('player.isMediaHD', true, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackHdOff() {
        const event = 'hd-off';

        this.store.whenever('player.isMediaHD', false, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    track25PercentConsumed() {
        const event = 'percent-25-consumed';

        const unsubscribe = this.store.whenever(
            'player.media.progress',
            progress => progress > 0,
            () => {
                const state = this.store.getState();
                const progressPercentage =
                    state.player.media.progress / state.player.media.duration;

                if (progressPercentage >= 0.25) {
                    unsubscribe();
                    log(event, {
                        dimensions: this.dimensions.getDefaultBatch()
                    });
                    this.pushToDataLayer(event);
                }
            }
        );

        return unsubscribe;
    }

    track50PercentConsumed() {
        const event = 'percent-50-consumed';

        const unsubscribe = this.store.whenever(
            'player.media.progress',
            progress => progress > 0,
            () => {
                const state = this.store.getState();
                const progressPercentage =
                    state.player.media.progress / state.player.media.duration;

                if (progressPercentage >= 0.5) {
                    unsubscribe();
                    log(event, {
                        dimensions: this.dimensions.getDefaultBatch()
                    });
                    this.pushToDataLayer(event);
                }
            }
        );

        return unsubscribe;
    }

    track75PercentConsumed() {
        const event = 'percent-75-consumed';

        const unsubscribe = this.store.whenever(
            'player.media.progress',
            progress => progress > 0,
            () => {
                const state = this.store.getState();
                const progressPercentage =
                    state.player.media.progress / state.player.media.duration;

                if (progressPercentage >= 0.75) {
                    unsubscribe();
                    log(event, {
                        dimensions: this.dimensions.getDefaultBatch()
                    });
                    this.pushToDataLayer(event);
                }
            }
        );

        return unsubscribe;
    }

    track90PercentConsumed() {
        const event = 'percent-90-consumed';

        const unsubscribe = this.store.whenever(
            'player.media.progress',
            progress => progress > 0,
            () => {
                const state = this.store.getState();
                const progressPercentage =
                    state.player.media.progress / state.player.media.duration;

                if (progressPercentage >= 0.9) {
                    unsubscribe();
                    log(event, {
                        dimensions: this.dimensions.getDefaultBatch()
                    });
                    this.pushToDataLayer(event);
                }
            }
        );

        return unsubscribe;
    }

    trackEnterFullscreen() {
        const event = 'enter-fullscreen';

        this.store.whenever('plugins.fullscreen.isFullscreen', true, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackExitFullscreen() {
        const event = 'exit-fullscreen';

        this.store.whenever('plugins.fullscreen.isFullscreen', false, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackAdStart() {
        const event = 'ad-start';

        this.player.on(playerEvents.AD_STARTED, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackAdSkip() {
        const event = 'ad-skip';

        this.player.on(playerEvents.AD_SKIPPED, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackAdComplete() {
        const event = 'ad-complete';

        this.player.on(playerEvents.AD_COMPLETED, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackPlayerError() {
        const event = 'player-error';

        window.addEventListener('error', error => {
            const filename = safeChain(error, 'filename') || '';

            // Only errors from VHS files
            if (filename.indexOf('vhs') === -1) {
                return;
            }

            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });

        this.player.on(playerEvents.ERROR, error => {
            // If it's an event, it means it was fired by the media element.
            if (error && error.target) {
                return;
            }

            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackLevelChange() {
        const event = 'level-change';

        this.player.on(playerEvents.LEVEL_TYPE_CHANGE, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackRebuffering() {
        const event = 'rebuffering';

        this.store.whenever('player.isMediaBuffering', true, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    trackMediaError() {
        const event = 'media-error';

        this.player.on(playerEvents.ERROR, error => {
            // Only capture media element errors.
            if (error && error.target) {
                log(event, {
                    dimensions: this.dimensions.getDefaultBatch()
                });
                this.pushToDataLayer(event);
            }
        });
    }

    trackEndSlateInview() {
        const event = 'endslate-inview';

        function isEndSlateInview(state) {
            return (
                state.plugins.viewportIntersectionObserver.isInsideViewport &&
                state.plugins.endSlate.isVisible
            );
        }

        this.store.whenever(
            'plugins.viewportIntersectionObserver.isInsideViewport',
            true,
            () => {
                const state = this.store.getState();
                if (isEndSlateInview(state)) {
                    log(event, {
                        dimensions: this.dimensions.getDefaultBatch()
                    });
                    this.pushToDataLayer(event);
                }
            }
        );

        this.store.whenever('plugins.endSlate.isLoaded', true, () => {
            const state = this.store.getState();
            if (isEndSlateInview(state)) {
                log(event, {
                    dimensions: this.dimensions.getDefaultBatch()
                });
                this.pushToDataLayer(event);
            }
        });
    }

    trackEndSlateLoaded() {
        const event = 'endslate-load';

        this.store.whenever('plugins.endSlate.isLoaded', true, () => {
            log(event, {
                dimensions: this.dimensions.getDefaultBatch()
            });
            this.pushToDataLayer(event);
        });
    }

    pushToDataLayer(name) {
        const media = this.getTrackingData(
            name,
            this.dimensions.getTrackingConfig()
        );
        dataLayer.push({
            event: 'mediaEvent',
            media
        });
    }

    getTrackingData(name, config) {
        const currentState = this.store.getState();

        let trackingData = {
            module: config.module || 'video-player',
            version: this.dimensions.getPlayerType() || 'unknown',
            contentCollection: safeChain(currentState, 'player.media.section'),
            region: config.region || '',
            action: config.action || '',
            contentId: safeChain(currentState, 'player.media.id'),
            eventName: name,
            eventTimestamp: new Date().getTime(),
            referrer: getReferrer() || '',
            mData: {
                videoName: safeChain(currentState, 'player.media.headline'),
                videoType: config.videoType || this.dimensions.getType(),
                ...config.mData
            }
        };

        if (name === this.dimensions.getCompleteEvent()) {
            trackingData.state = 'completed';
        } else if (this.player.isPaused()) {
            trackingData.state = 'paused';
        } else {
            trackingData.state = 'playing';
        }

        // video and ad specific data on mData
        if (trackingData.module === 'video-player') {
            trackingData = this.addVideoData(trackingData);
        } else if (trackingData.module === 'audio-player') {
            trackingData.mData = {
                ...trackingData.mData,
                ...this.audioMData()
            };
        }

        return trackingData;
    }

    addVideoData(trackingData) {
        const currentState = this.store.getState();
        trackingData.mData.device = getDeviceType();
        trackingData.mData.playerType = this.dimensions.getPlayerType() || '';
        trackingData.mData.playerUsage = currentState.player.options.usage || '';
        trackingData.mData.playerVersion = webpackPluginVhsVersion;
        trackingData.mData.tech = 'html5';
        trackingData.mData.videoDeliveryMethod = safeChain(
                currentState,
                'player.media.isLive'
            ) ?
            'live' :
            'vod';
        trackingData.mData.videoDuration = Math.round(
            safeChain(currentState, 'player.media.duration')
        );
        trackingData.mData.videoFranchise = safeChain(
            currentState,
            'player.media.series'
        );
        trackingData.mData.videoPrimaryPlaylistId = safeChain(
            currentState,
            'player.media.playlist.id'
        );
        trackingData.mData.videoPrimaryPlaylistName = safeChain(
            currentState,
            'player.media.playlist.headline'
        );
        trackingData.mData.videoSection = safeChain(
            currentState,
            'player.media.section'
        );
        trackingData.mData.videoSubSection = '';
        trackingData.mData.videoTimeOfEvent = this.player.getCurrentTime();
        trackingData.mData.aspectRatio = safeChain(
            currentState,
            'player.media.ratio'
        );

        if (currentState.plugins.captions) {
            trackingData.mData.captionsAvailable =
                currentState.plugins.captions.areCaptionsAvailable;
            trackingData.mData.captionsEnabled =
                currentState.plugins.captions.areCaptionsEnabled;
        }

        trackingData.mData.muteEnabled = currentState.player.isMediaMuted;

        if (trackingData.mData.videoType === 'ad') {
            trackingData.mData.adPosition = 'preroll';
            trackingData.mData.adDuration = Math.round(
                currentState.player.adData.duration
            );
        }
        if (
            trackingData.mData.videoType === 'video' &&
            safeChain(currentState, 'player.media.playlist.isSponsored') &&
            !safeChain(currentState, 'player.media.playlist.isPaidPost')
        ) {
            trackingData.mData.adPosition = 'flexframe';
        }

        return trackingData;
    }

    audioMData() {
        const currentState = this.store.getState();
        return {
            device: getDeviceType(),
            playerType: this.dimensions.getPlayerType() || '',
            playerUsage: currentState.player.options.usage || '',
            playerVersion: webpackPluginVhsVersion,
            tech: 'html5',
            deliveryMethod: safeChain(currentState, 'player.media.isLive') ?
                'live' :
                'aod',
            duration: Math.round(safeChain(currentState, 'player.media.duration')),
            series: safeChain(currentState, 'player.media.series'),
            section: safeChain(currentState, 'player.media.section'),
            subSection: '',
            timeOfEvent: this.player.getCurrentTime()
        };
    }
}

export default Tracker;



// WEBPACK FOOTER //
// ./src/plugins/nyt-analytics/tracker.js