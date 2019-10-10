/* global webpackPluginVhsVersion */
/* eslint-disable no-restricted-globals */

import dom from 'corleone';
import uuid from 'uuid/v4';
import safeChain from 'safe-chain';
import mediaTypes from 'src/player/media-types';
import PrefixedSessionStorage from 'src/util/prefixed-session-storage';
import Logger from 'src/util/logger';

const logger = new Logger('vhs:plugin:nyt-tracking');
const prefixedSessionStorage = new PrefixedSessionStorage();

class Dimensions {
    constructor(store, player) {
        this.store = store;
        this.player = player;
        this.state = {
            mediaSessionId: uuid(),
            startTimestamp: Date.now(),
            readyTimestamp: null,
            timeToPlayStart: null,
            timeToPlayEnd: null,
            playerLoadTime: null,
            isFirstPlay: true,
            wasLastMediaEnded: false
        };
    }

    init() {
        this.subscribe();
    }

    subscribe() {
        this.store.whenever(
            'player.media.id',
            () => true,
            (cur, prev) => {
                // Only after the second media is loaded.
                if (prev !== undefined) {
                    this.state.mediaSessionId = uuid();
                    this.state.isFirstPlay = false;
                    this.state.wasLastMediaEnded = false;
                }
            }
        );

        this.store.whenever('player.shouldPlay', true, () => {
            this.state.timeToPlayStart = Date.now();
        });

        this.store.whenever('player.isAdActive', true, () => {
            this.state.timeToPlayStart = null;
            this.state.timeToPlayEnd = null;
        });

        this.store.whenever('player.isAdActive', false, () => {
            this.state.timeToPlayStart = Date.now();
        });

        this.store.whenever('player.isMediaPlaying', true, () => {
            if (!this.store.getState().player.isAdActive) {
                this.state.timeToPlayEnd = Date.now();
            }
        });

        // Renew `mediaSessionId` for replay
        this.store.whenever(
            'player',
            () => true,
            (cur, prev = {}) => {
                if (
                    cur.media &&
                    prev.media &&
                    cur.media.id === prev.media.id &&
                    prev.isMediaEnded &&
                    cur.isMediaPlaying
                ) {
                    this.state.mediaSessionId = uuid();
                }
            }
        );

        const playerIsReadyUnsubscribe = this.store.whenever(
            'player.isReady',
            true,
            () => {
                this.state.readyTimestamp = Date.now();
                playerIsReadyUnsubscribe();
            }
        );
    }

    getDefaultBatch() {
        const dimensions = {
            ad_duration: this.getAdDuration(),
            ad_load_time: this.getAdLoadTime(),
            ad_id: this.getAdId(),
            ad_creative_id: this.getAdCreativeId(),
            ad_position: this.getAdPosition(),
            captions_available: this.getCaptionsAvailable(),
            captions_enabled: this.getCaptionsEnabled(),
            client_id: this.getClientId(),
            delivery_method: this.getDeliveryMethod(),
            error_code: this.getErrorCode(),
            error_message: this.getErrorMessage(),
            is_inview: this.getIsInview(),
            level: this.getLevel(),
            mute_enabled: this.getMuteEnabled(),
            other_data: this.getOtherData(),
            play_id: this.getPlayId(),
            seek_time: this.getSeekTime(),
            time_of_event: Date.now(),
            viewing_mode: this.getViewingMode(),
            voiceover_running: this.getVoiceoverRunning()
        };

        Object.keys(dimensions).forEach(key => {
            if (dimensions[key] === undefined) {
                delete dimensions[key];
            }
        });

        return dimensions;
    }

    getCompleteBatch() {
        const dimensions = {
            ...this.getDefaultBatch(),
            aspect_ratio: this.getAspectRatio(),
            autoplay: this.getAutoplay(),
            creation_type: this.getCreationType(),
            duration: this.getDuration(),
            headline: this.getHeadline(),
            media_id: this.getMediaId(),
            media_type: this.getMediaType(),
            play_intent: this.getPlayIntent(),
            player_load_time: this.getPlayerLoadTime(),
            player_time_to_download: this.getPlayerTimeToDownload(),
            player_loc: this.getPlayerLoc(),
            player_size: this.getPlayerSize(),
            player_time_to_play: this.getPlayerTimeToPlay(),
            primary_playlist_headline: this.getPrimaryPlaylistHeadline(),
            primary_playlist_id: this.getPrimaryPlaylistId(),
            section: this.getSection(),
            series: this.getSeries(),
            test_variant: this.getTestVariant(),
            type: this.getType(),
            uri: this.getUri(),
            vhs_version: this.getVhsVersion()
        };

        Object.keys(dimensions).forEach(key => {
            if (dimensions[key] === undefined) {
                delete dimensions[key];
            }
        });

        return dimensions;
    }

    getDuration() {
        return safeChain(this.store.getState(), 'player.media.duration');
    }

    getType() {
        try {
            const isAudio =
                this.store.getState().player.options.mediaType === mediaTypes.AUDIO;
            const is360 = this.store.getState().player.media.is360;
            const isPaidPost = this.store.getState().player.media.playlist.isPaidPost;
            const isAdActive = this.store.getState().player.isAdActive;

            return (
                (isPaidPost && Dimensions.type.PAID_POST) ||
                (isAdActive && Dimensions.type.AD) ||
                (is360 && Dimensions.type['360video']) ||
                (isAudio && Dimensions.type.AUDIO) ||
                Dimensions.type.VIDEO
            );
        } catch (error) {
            return undefined;
        }
    }

    getPlayerType() {
        const pt = dom.query('meta[name="PT"]');
        const pst = dom.query('meta[name="PST"]');
        const slug = dom.query('meta[name="slug"]');

        const ptContent = safeChain(pt, 'content') || '';
        const pstContent = safeChain(pst, 'content') || '';
        const slugContent = safeChain(slug, 'content') || '';

        const pageType =
            ptContent && pstContent ?
            `${ptContent.toLowerCase()}-${pstContent.toLowerCase()}` :
            null;
        let type = null;

        if (this.store.getState().player.options.type) {
            type = this.store.getState().player.options.type;
        } else if (pageType === 'multimedia-interactive' && slugContent) {
            type = `${pageType}|${slugContent}`;
        } else if (pageType) {
            type = pageType;
        } else {
            logger.error('Player TYPE should be provided');
        }

        return type;
    }

    getAdDuration() {
        return safeChain(this.store.getState(), 'player.adData.duration');
    }

    getCreationType() {
        if (
            safeChain(this.store.getState(), 'player.options.usage') === 'vanilla_js'
        ) {
            return Dimensions.creationType.JS;
        }

        return undefined;
    }

    getMediaId() {
        return safeChain(this.store.getState(), 'player.media.id');
    }

    getHeadline() {
        return safeChain(this.store.getState(), 'player.media.headline');
    }

    getPrimaryPlaylistId() {
        return safeChain(this.store.getState(), 'player.media.playlist.id');
    }

    getPrimaryPlaylistHeadline() {
        return safeChain(this.store.getState(), 'player.media.playlist.headline');
    }

    getDeliveryMethod() {
        return safeChain(this.store.getState(), 'player.media.playbackType');
    }

    // eslint-disable-next-line class-methods-use-this
    getVhsVersion() {
        return webpackPluginVhsVersion;
    }

    getPlayIntent() {
        const autoPlay = safeChain(
            this.store.getState(),
            'player.options.autoplay'
        );

        if (this.state.isFirstPlay) {
            if (autoPlay) {
                return Dimensions.playIntent.AUTO;
            }
            return Dimensions.playIntent.USER;
        } else if (this.state.wasLastMediaEnded) {
            if (autoPlay) {
                return Dimensions.playIntent.NEXT_AUTO;
            }
            return Dimensions.playIntent.NEXT_USER;
        }

        return Dimensions.playIntent.UNKNOW;
    }

    getMediaType() {
        return safeChain(this.store.getState(), 'player.options.mediaType');
    }

    getAutoplay() {
        return safeChain(this.store.getState(), 'player.options.autoplay');
    }

    getPlayerLoadTime() {
        if (!this.state.readyTimestamp) {
            return undefined;
        }
        const time = this.state.readyTimestamp - this.state.startTimestamp;
        return time;
    }

    getPlayerTimeToDownload(performance = window.performance) {
        if (this.state.playerLoadTime) {
            return this.state.playerLoadTime;
        }

        try {
            const performanceEntry = performance
                .getEntries()
                .filter(entry => /(vhs\.js|vhs\.min\.js)/.test(entry.name))[0];
            this.state.playerLoadTime = performanceEntry.duration;
            return this.state.playerLoadTime;
        } catch (error) {
            return undefined;
        }
    }

    getPlayerSize(performance = window.performance) {
        if (this.state.playerSize) {
            return this.state.playerSize;
        }

        try {
            const performanceEntry = performance
                .getEntries()
                .filter(entry => /(vhs\.js|vhs\.min\.js)/.test(entry.name))[0];
            this.state.playerSize = performanceEntry.transferSize;
            return this.state.playerSize;
        } catch (error) {
            return undefined;
        }
    }

    getMuteEnabled() {
        return safeChain(this.store.getState(), 'player.isMediaMuted');
    }

    getCaptionsEnabled() {
        return safeChain(
            this.store.getState(),
            'plugins.captions.areCaptionsEnabled'
        );
    }

    // eslint-disable-next-line class-methods-use-this
    getClientId() {
        let clientId = prefixedSessionStorage.getItem('clientId');

        if (!clientId) {
            clientId = uuid();
            prefixedSessionStorage.setItem('clientId', clientId);
        }

        return clientId;
    }

    getCaptionsAvailable() {
        return safeChain(
            this.store.getState(),
            'plugins.captions.areCaptionsAvailable'
        );
    }

    getPlayId() {
        return this.state.mediaSessionId;
    }

    getUri() {
        return safeChain(this.store.getState(), 'player.media.url');
    }

    getErrorCode() {
        return safeChain(this.player, 'playback.video.error.code');
    }

    getErrorMessage() {
        return safeChain(this.player, 'playback.video.error.message');
    }

    getIsInview() {
        return safeChain(
            this.store.getState(),
            'plugins.viewportIntersectionObserver.isInsideViewport'
        );
    }

    getPlayerTimeToPlay() {
        const timeToPlay = this.state.timeToPlayEnd - this.state.timeToPlayStart;
        return isNaN(timeToPlay) ? undefined : timeToPlay;
    }

    getAspectRatio() {
        return safeChain(this.store.getState(), 'player.media.ratio');
    }

    getLevel() {
        return safeChain(this.store.getState(), 'player.media.hlsLevel');
    }

    getSeries() {
        return safeChain(this.store.getState(), 'player.media.series');
    }

    getSection() {
        return safeChain(this.store.getState(), 'player.media.section');
    }

    // eslint-disable-next-line class-methods-use-this
    getTestVariant() {
        return 0;
    }

    getPlayerLoc() {
        return safeChain(this.store.getState(), 'player.options.type');
    }

    // eslint-disable-next-line class-methods-use-this
    getVoiceoverRunning() {
        return undefined;
    }

    // eslint-disable-next-line class-methods-use-this
    getViewingMode() {
        return 'standard';
    }

    // eslint-disable-next-line class-methods-use-this
    getOtherData() {
        return undefined;
    }

    getAdLoadTime() {
        const state = this.store.getState();
        const adLoadStarTimestamp = safeChain(
            state,
            'player.adData.loadStartTimestamp'
        );
        const adLoadEndTimestamp = safeChain(
            state,
            'player.adData.loadEndTimestamp'
        );
        const adLoadTime = adLoadEndTimestamp - adLoadStarTimestamp;

        return isNaN(adLoadTime) ? undefined : adLoadTime;
    }

    getSeekTime() {
        return safeChain(this.store.getState(), 'player.seekTo');
    }

    getAdId() {
        return safeChain(this.store.getState(), 'player.adData.id');
    }

    getAdCreativeId() {
        return safeChain(this.store.getState(), 'player.adData.creativeId');
    }

    getAdPosition() {
        const position = safeChain(this.store.getState(), 'player.adData.position');

        if (position === 0) {
            return 'preroll';
        } else if (position === -1) {
            return 'postroll';
        } else if (position > 0) {
            return 'midroll';
        }

        return undefined;
    }

    getCompleteEvent() {
        if (this.getType() === Dimensions.type.AUDIO) {
            return 'audio-complete';
        }
        return 'video-complete';
    }

    getTrackingConfig() {
        let config;
        switch (this.getType()) {
            case Dimensions.type.AD:
                config = { ...Dimensions.adConfig
                };
                break;
            case Dimensions.type.PAID_POST:
                config = { ...Dimensions.paidPostConfig
                };
                break;
            case Dimensions.type['360video']:
                config = { ...Dimensions.video360Config
                };
                break;
            case Dimensions.type.AUDIO:
                config = { ...Dimensions.audioConfig
                };
                break;
            case Dimensions.type.VIDEO:
            default:
                config = { ...Dimensions.videoConfig
                };
                break;
        }
        return config;
    }
}

Dimensions.creationType = {
    JS: 'js',
    HTML: 'html'
};

Dimensions.type = {
    VIDEO: 'video',
    AD: 'ad',
    PAID_POST: 'paidPost',
    '360video': '360video',
    AUDIO: 'audio'
};

Dimensions.playIntent = {
    USER: 'user',
    AUTO: 'auto',
    NEXT_USER: 'next_user',
    NEXT_AUTO: 'next_auto',
    UNKNOW: 'unknow'
};

Dimensions.videoConfig = {
    videoType: Dimensions.type.VIDEO,
    module: 'video-player',
    mData: {}
};

Dimensions.video360Config = {
    videoType: Dimensions.type['360video'],
    module: 'video-player',
    mData: {}
};

Dimensions.adConfig = {
    videoType: Dimensions.type.AD,
    module: 'video-player',
    mData: {}
};

Dimensions.paidPostConfig = {
    videoType: Dimensions.type.PAID_POST,
    module: 'video-player',
    mData: {}
};

Dimensions.audioConfig = {
    videoType: Dimensions.type.AUDIO,
    module: 'audio-player',
    mData: {}
};

export default Dimensions;



// WEBPACK FOOTER //
// ./src/plugins/nyt-analytics/dimensions.js