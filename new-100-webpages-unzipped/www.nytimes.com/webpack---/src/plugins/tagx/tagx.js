/* global webpackPluginVhsVersion */

import safeChain from 'safe-chain';
import canTrack from 'can-track';
import dom from 'corleone';
import objectAssign from 'object.assign';
import mediaTypes from 'src/player/media-types';
import checkCookie from 'src/util/check-cookie';
import getDeviceType from 'src/util/get-device-type';
import getReferrer from 'src/util/get-referrer';
import Logger from 'src/util/logger';
import Poller from 'src/util/poller';

const logger = new Logger('vhs:plugin:tagx');

export default {
    name: 'tagx',
    enable: true,
    proto: {
        props: Object.seal({
            isAdActive: false
        }),

        events: {
            PLAYER_LOAD: 'player-load',
            VIDEO_LOAD: 'video-load',
            VIDEO_IN_VIEW: 'video-inview',

            USER_PLAY: 'user-play',
            AUTO_PLAY_NEXT: 'auto-play-next',
            AUTO_PLAY_START: 'auto-play-start',
            AUTO_PLAY_LOOP: 'auto-play-loop',
            USER_PLAY_LOOP: 'user-play-loop',
            VIDEO_COMPLETE: 'video-complete',
            PAUSE: 'pause',
            RESUME: 'resume',
            PERCENT_25_VIEWED: 'percent-25-viewed',
            PERCENT_50_VIEWED: 'percent-50-viewed',
            PERCENT_75_VIEWED: 'percent-75-viewed',
            SEEK: 'seek',

            GO_FULLSCREEN: 'go-fullscreen',
            EXIT_FULLSCREEN: 'exit-fullscreen',
            MUTED: 'muted',
            UNMUTED: 'unmuted',
            HD_ON: 'hd-on',
            HD_OFF: 'hd-off',

            SKIP_AD: 'skip-ad',
            AD_START: 'ad-start',
            AD_PAUSE: 'ad-pause',
            AD_RESUME: 'ad-resume',
            AD_COMPLETE: 'ad-complete',

            MEDIA_ERROR: 'media-error',

            VIDEO_TIME_TO_START: 'video-time-to-start',
            QOS_LOAD_FAILURE: 'qos-library-load-failure',
            RENDITION_NOT_FOUND: 'rendition-not-found',
            FW_ADMANAGER_LOAD_ERROR: 'fw-admanager-load-error',
            FW_AD_MANAGER_LOAD_TIMEOUT: 'fw-ad-manager-load-timeout',
            CHERRY_API_REQUEST_ERROR: 'cherry-api-request-error',
            '360_LIBRARY_LOAD_ERROR': '360-library-load-error'
        },

        audioEvents: {
            AUDIO_IN_VIEW: 'audio-inview',
            AUDIO_LOAD: 'audio-load',

            USER_PLAY_AUDIO: 'user-play-audio',
            AUDIO_COMPLETE: 'audio-complete',
            AUDIO_PAUSE: 'audio-pause',
            AUDIO_RESUME: 'audio-resume',
            PERCENT_25_HEARD: 'percent-25-heard',
            PERCENT_50_HEARD: 'percent-50-heard',
            PERCENT_75_HEARD: 'percent-75-heard',

            HEARD_3_SECONDS: '3-seconds-heard',
            HEARD_30_SECONDS: '30-seconds-heard',

            AUDIO_ERROR: 'audio-error'
        },

        video_type: {
            VIDEO: 'video',
            AD: 'ad',
            PAID_POST: 'paidPost',
            '360video': '360video',
            AUDIO: 'audio'
        },

        _initialize() {
            this.props = this.mapStateToProps(this._player.store.getState());
            this.subscribe();

            this.trackedPlay = false;
            this.tracked25Percent = false;
            this.tracked50Percent = false;
            this.tracked75Percent = false;
            this.trackingHistory = [];
            this.trackedInViewport = false;
            this.wasInViewport = false;

            this.paused = false;
            this.firstPlay = true;
            this.mediaChanged = false;
            this.videoCompleted = false;
            this.adStarted = false;
            this.adCompleted = false;
            this.loadedTimestamp = null;
            this.endTimestamp = null;
            this.startUpTimeSent = false;
            this.videoPlayCounter = 0;
            this.adDurationCache = null;

            this.videoConfig = {
                videoType: this.video_type.VIDEO,
                module: 'video-player',
                mData: {}
            };

            this.video360Config = {
                videoType: this.video_type['360video'],
                module: 'video-player',
                mData: {}
            };

            this.adConfig = {
                videoType: this.video_type.AD,
                module: 'video-player',
                mData: {}
            };

            this.paidPostConfig = {
                videoType: this.video_type.PAID_POST,
                module: 'video-player',
                mData: {}
            };

            this.audioConfig = {
                videoType: this.video_type.AUDIO,
                module: 'audio-player',
                mData: {}
            };

            this.bindEvents();
        },

        bindEvents() {
            /**
             * track general events triggered by the player
             *
             * @example
             *   player.emit('plugin:tagx:track', {
             *       eventName: 'example-event',
             *       videoType: 'video',
             *       module: 'video-player',
             *       region: '',
             *       action: 'click'
             *   });
             */
            this._on('track', payload => {
                if (!payload ||
                    !payload.eventName ||
                    typeof payload.eventName !== 'string'
                ) {
                    return;
                }
                const config = objectAssign(this.getTrackingConfig(), payload);
                this.track(payload.eventName, config);
            });
        },

        getVideoType() {
            const currentState = this._player.store.getState();
            const isAudio =
                currentState.player.options.mediaType === mediaTypes.AUDIO;
            const is360 = currentState.player.media.is360;
            const isPaidPost = currentState.player.media.playlist.isPaidPost;

            return (
                (isPaidPost && this.video_type.PAID_POST) ||
                (this.props.isAdActive && this.video_type.AD) ||
                (is360 && this.video_type['360video']) ||
                (isAudio && this.video_type.AUDIO) ||
                this.video_type.VIDEO
            );
        },

        getTrackingConfig() {
            let config;
            switch (this.getVideoType()) {
                case this.video_type.AD:
                    config = Object.create(this.adConfig);
                    break;
                case this.video_type.PAID_POST:
                    config = Object.create(this.paidPostConfig);
                    break;
                case this.video_type['360video']:
                    config = Object.create(this.video360Config);
                    break;
                case this.video_type.AUDIO:
                    config = Object.create(this.audioConfig);
                    break;
                case this.video_type.VIDEO:
                default:
                    config = Object.create(this.videoConfig);
                    break;
            }
            return config;
        },

        getInViewEvent() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.AUDIO_IN_VIEW;
            }
            return this.events.VIDEO_IN_VIEW;
        },

        getLoadEvent() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.AUDIO_LOAD;
            }
            return this.events.VIDEO_LOAD;
        },

        getUserPlayEvent() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.USER_PLAY_AUDIO;
            }
            return this.events.USER_PLAY;
        },

        getCompleteEvent() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.AUDIO_COMPLETE;
            }
            return this.events.VIDEO_COMPLETE;
        },

        getPauseEvent() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.AUDIO_PAUSE;
            }
            return this.events.PAUSE;
        },

        getResumeEvent() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.AUDIO_RESUME;
            }
            return this.events.RESUME;
        },

        getPercent25Event() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.PERCENT_25_HEARD;
            }
            return this.events.PERCENT_25_VIEWED;
        },

        getPercent50Event() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.PERCENT_50_HEARD;
            }
            return this.events.PERCENT_50_VIEWED;
        },

        getPercent75Event() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.PERCENT_75_HEARD;
            }
            return this.events.PERCENT_75_VIEWED;
        },

        getErrorEvent() {
            if (this.getVideoType() === this.video_type.AUDIO) {
                return this.audioEvents.AUDIO_ERROR;
            }
            return this.events.MEDIA_ERROR;
        },

        track(name, config) {
            const interaction = ['interaction', 'tagx-event-video'];
            const data = this.getTrackingData(name, config);
            const currentState = this._player.store.getState();
            const {
                gtmTrackEvent,
                loop
            } = currentState.player.options;

            if (config.videoType === this.video_type.AUDIO) {
                interaction[1] = 'tagx-event-audio';
            }

            // for looping video only track loop events (auto-play-loop & user-play-loop)
            if (loop && name.indexOf('loop') === -1) {
                return;
            }

            if (gtmTrackEvent && typeof gtmTrackEvent === 'function') {
                const gtmData = {
                    event: 'videoEvent',
                    video: data
                };
                delete gtmData.video.referrer;
                gtmTrackEvent(gtmData);
            } else if (window.TAGX) {
                this.tagxTrigger(name, data, interaction);
                this.sendTrackingQueue();

                if (this.tagxPoller && this.tagxPoller.isPolling()) {
                    this.tagxPoller.cancel();
                }
            } else {
                this.trackingHistory.push({
                    name,
                    data,
                    interaction
                });

                if (!this.tagxPoller) {
                    this.tagxPoller = new Poller(
                        'TAGX',
                        1000,
                        30,
                        this.sendTrackingQueue.bind(this)
                    );
                    this.tagxPoller.start();
                }
            }
        },

        sendTrackingQueue() {
            if (this.trackingHistory.length > 0) {
                const len = this.trackingHistory.length;
                for (let i = len - 1; i >= 0; i -= 1) {
                    const evt = this.trackingHistory[i];
                    this.tagxTrigger(evt.name, evt.data, evt.interaction);
                }
                this.trackingHistory = [];
            }
        },

        tagxTrigger(name, data, interaction) {
            try {
                window.TAGX.EventProxy.trigger(name, data, interaction);
            } catch (error) {
                logger.error(error);
            }
        },

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

            if (this._player.options.type) {
                type = this._player.options.type;
            } else if (pageType === 'multimedia-interactive' && slugContent) {
                type = `${pageType}|${slugContent}`;
            } else if (pageType) {
                type = pageType;
            } else {
                logger.error('Player TYPE should be provided');
            }

            return type;
        },

        getTrackingData(name, config) {
            // base object
            const currentState = this._player.store.getState();
            let obj = {
                module: config.module || 'video-player',
                referrer: getReferrer() || '',
                version: this.getPlayerType() || 'unknown',
                contentCollection: currentState.player.media.section,
                region: config.region || '',
                action: config.action || '',
                contentId: currentState.player.media.id,
                eventName: name,
                eventTimestamp: new Date().getTime(),
                mData: {
                    videoName: currentState.player.media.headline,
                    videoType: config.videoType || this.getVideoType(),
                    ...config.mData
                }
            };

            if (name === this.getCompleteEvent()) {
                obj.state = 'completed';
            } else if (this._player.isPaused()) {
                obj.state = 'paused';
            } else {
                obj.state = 'playing';
            }

            // video and ad specific data on mData
            if (obj.module === 'video-player') {
                obj = this.addVideoData(obj);
            } else if (obj.module === 'audio-player') {
                obj.mData = {
                    ...obj.mData,
                    ...this.audioMData()
                };
            }

            return obj;
        },

        addVideoData(obj) {
            const currentState = this._player.store.getState();
            obj.mData.device = getDeviceType();
            obj.mData.playerMode = 'html5';
            obj.mData.playerType = this.getPlayerType() || '';
            obj.mData.playerUsage = this._options.usage || '';
            obj.mData.playerVersion = webpackPluginVhsVersion;
            obj.mData.tech = 'html5';
            obj.mData.videoDeliveryMethod = this._options.live ? 'live' : 'vod';
            obj.mData.videoDuration = Math.round(currentState.player.media.duration);
            obj.mData.videoFranchise = currentState.player.media.series;
            obj.mData.videoPrimaryPlaylistId = currentState.player.media.playlist.id;
            obj.mData.videoPrimaryPlaylistName =
                currentState.player.media.playlist.headline;
            obj.mData.videoSection = currentState.player.media.section;
            obj.mData.videoSubSection = '';
            obj.mData.videoTimeOfEvent = this._player.getCurrentTime();
            obj.mData.aspectRatio = currentState.player.media.ratio;

            if (currentState.plugins.captions) {
                obj.mData.captionsAvailable =
                    currentState.plugins.captions.areCaptionsAvailable;
                obj.mData.captionsEnabled =
                    currentState.plugins.captions.areCaptionsEnabled;
            }

            obj.mData.muteEnabled = currentState.player.isMediaMuted;

            if (obj.mData.videoType === this.video_type.AD) {
                obj.mData.adPosition = 'preroll';
                this.adDurationCache =
                    this.adDurationCache === null ?
                    this._player.store.getState().player.adData.duration :
                    this.adDurationCache;
                obj.mData.adDuration = Math.round(this.adDurationCache);
            }

            if (
                obj.mData.videoType === this.video_type.VIDEO &&
                currentState.player.media.playlist.isSponsored &&
                !currentState.player.media.playlist.isPaidPost
            ) {
                obj.mData.adPosition = 'flexframe';
            }

            return obj;
        },

        audioMData() {
            const currentState = this._player.store.getState();
            return {
                device: getDeviceType(),
                playerMode: 'html5',
                playerType: this.getPlayerType() || '',
                playerUsage: this._options.usage || '',
                playerVersion: webpackPluginVhsVersion,
                tech: 'html5',
                deliveryMethod: this._options.live ? 'live' : 'aod',
                duration: Math.round(currentState.player.media.duration),
                series: currentState.player.media.series,
                section: currentState.player.media.section,
                subSection: '',
                timeOfEvent: this._player.getCurrentTime()
            };
        },

        getErrorCode(evt) {
            let errorCode = '';
            if (evt && evt.hlsjs && evt.fatal) {
                errorCode = `${evt.type}.${evt.details}`;
            } else if (this._element && this._element.error) {
                errorCode = this._element.error.code;
            } else if (evt && evt.error && evt.error.code) {
                errorCode = evt.error.code;
            }
            return errorCode;
        },

        videoStartUpTime() {
            let config;
            const playerStartTimestamp = this._player ?
                this._player.props.playerStartTimestamp :
                null;
            this.startUpTimeSent = true;
            if (this.endTimestamp && this.loadedTimestamp && playerStartTimestamp) {
                config = this.getTrackingConfig();
                config.mData = {
                    ...config.mData,
                    videoTimeToStartFromLoaded: this.endTimestamp.getTime() - this.loadedTimestamp.getTime(),
                    videoTimeToStartFromInit: this.endTimestamp.getTime() - playerStartTimestamp.getTime()
                };
                this.track(this.events.VIDEO_TIME_TO_START, config);
            }
        },

        dontTrack() {
            return (!canTrack() ||
                (this._player.store.getState().plugins.featureFlags.gdpr &&
                    checkCookie('NYT-T=out'))
            );
        },

        _ready() {
            if (this.dontTrack()) {
                return;
            }

            logger.log('loaded');
            this.track(this.events.PLAYER_LOAD, this.getTrackingConfig());
            this.loadedTimestamp = new Date();
            // ensure inview event is tracked if player is in view before tagx is ready
            if (this.wasInViewport) {
                this._in_viewport();
            }
        },

        _loadstart() {
            if (this.dontTrack()) {
                return;
            }
            logger.log('loadstart');
            this.trackedPlay = false;
            this.tracked25Percent = false;
            this.tracked50Percent = false;
            this.tracked75Percent = false;
            this.paused = false;
            this.mediaChanged = true;
            this.videoPlayCounter += 1;

            this.track(this.getLoadEvent(), this.getTrackingConfig());
        },

        _play() {
            if (this.dontTrack()) {
                return;
            }

            let evt = this.getUserPlayEvent();

            if (!this.trackedPlay) {
                if (this._options.loop && this.firstPlay) {
                    if (this._options.autoplay) {
                        evt = this.events.AUTO_PLAY_LOOP;
                    } else {
                        evt = this.events.USER_PLAY_LOOP;
                    }
                } else if (
                    this._options.autoplay &&
                    this.firstPlay &&
                    !this._options.userInitiatedPlay
                ) {
                    evt = this.events.AUTO_PLAY_START;

                    // record first play time
                    if (!this.startUpTimeSent &&
                        this.getVideoType() !== this.video_type.AUDIO
                    ) {
                        this.endTimestamp = new Date();
                        this.videoStartUpTime();
                    }
                } else if (this._options.userInitiatedNext) {
                    // Used for endcard when video is complete and a user selects a new video to play, then
                    // userInitiatedNext is set so we know it didn't autoplay.
                    evt = this.getUserPlayEvent();
                } else if (
                    this.videoCompleted &&
                    !this.adStarted &&
                    this.mediaChanged
                ) {
                    // next video autoplayed and no preroll
                    // video completed, no ad played, no user interuption
                    evt = this.events.AUTO_PLAY_NEXT;
                } else if (
                    this.videoCompleted &&
                    this.adStarted &&
                    this.adCompleted &&
                    this.mediaChanged
                ) {
                    // next video autoplayed with preroll complete or skipped
                    // video completed, ad played and completed without user interuption
                    evt = this.events.AUTO_PLAY_NEXT;
                } else {
                    evt = this.getUserPlayEvent();
                }

                // set that we've tracked this first play of this media
                this.trackedPlay = true;

                // set that this is no longer the first play
                this.firstPlay = false;

                // reinitialize flags
                this.mediaChanged = false;
                this.videoCompleted = false;
                this.adStarted = false;
                this.adCompleted = false;

                // set startUpTimeSent flag as a fail safe so it does not trigger after a first play
                this.startUpTimeSent = true;

                this.track(evt, this.getTrackingConfig());
            } else if (this.paused) {
                this.track(this.getResumeEvent(), this.getTrackingConfig());
            }

            this.paused = false;
        },

        _pause() {
            if (this.dontTrack()) {
                return;
            }
            const currentState = this._player.store.getState();
            if (
                this._player &&
                (this._options.live || currentState.player.media.duration > 0)
            ) {
                this.paused = true;
                this.track(this.getPauseEvent(), this.getTrackingConfig());
            }
        },

        _ended() {
            if (this.dontTrack()) {
                return;
            }
            this.trackedPlay = false;
            this.tracked25Percent = false;
            this.tracked50Percent = false;
            this.tracked75Percent = false;
            this.videoCompleted = true;
            this.track(this.getCompleteEvent(), this.getTrackingConfig());
        },

        _time_update(pos) {
            if (this.dontTrack()) {
                return;
            }
            const currentState = this._player.store.getState();
            const position = Math.round(parseInt(pos, 10));
            const duration = Math.round(
                parseInt(currentState.player.media.duration, 10)
            );
            const quartilesHidden =
                duration < 1 ||
                position < 1 ||
                currentState.player.isMediaEnded ||
                currentState.player.media.isLive;
            if (quartilesHidden) return;
            let evt;
            const pct25 = duration * 0.25;
            const pct50 = duration * 0.5;
            const pct75 = duration * 0.75;

            if (position > 0) {
                if (position >= pct25 && position < pct50 && !this.tracked25Percent) {
                    evt = this.getPercent25Event();
                    this.tracked25Percent = true;
                } else if (
                    position >= pct50 &&
                    position < pct75 &&
                    !this.tracked50Percent
                ) {
                    evt = this.getPercent50Event();
                    this.tracked50Percent = true;
                } else if (position >= pct75 && !this.tracked75Percent) {
                    evt = this.getPercent75Event();
                    this.tracked75Percent = true;
                }

                if (evt) {
                    this.track(evt, this.getTrackingConfig());
                }
            }
        },

        _seeked() {
            if (this.dontTrack()) {
                return;
            }
            this.track(this.events.SEEK, this.getTrackingConfig());
        },

        _mute(muted) {
            if (this.dontTrack()) {
                return;
            }
            const evt = muted ? this.events.MUTED : this.events.UNMUTED;
            const config = this.getTrackingConfig();
            this.track(evt, config);
        },

        _go_fullscreen() {
            if (this.dontTrack()) {
                return;
            }
            const config = this.getTrackingConfig();
            this.track(this.events.GO_FULLSCREEN, config);
        },

        _exit_fullscreen() {
            if (this.dontTrack()) {
                return;
            }
            const config = this.getTrackingConfig();
            this.track(this.events.EXIT_FULLSCREEN, config);
        },

        _hd_on() {
            if (this.dontTrack()) {
                return;
            }
            this.track(this.events.HD_ON, this.videoConfig);
        },

        _hd_off() {
            if (this.dontTrack()) {
                return;
            }
            this.track(this.events.HD_OFF, this.videoConfig);
        },

        _ad_started() {
            if (this.dontTrack()) {
                return;
            }
            this.adStarted = true;
            this.adDurationCache = null;
            this.track(this.events.AD_START, this.adConfig);

            if (!this.startUpTimeSent &&
                this._options.autoplay &&
                !this._options.userInitiatedPlay
            ) {
                this.endTimestamp = new Date();
                this.videoStartUpTime();
            }
        },

        _ad_completed() {
            if (this.dontTrack()) {
                return;
            }
            this.trackedPlay = false;
            this.tracked25Percent = false;
            this.tracked50Percent = false;
            this.tracked75Percent = false;
            this.adCompleted = true;
            this.track(this.events.AD_COMPLETE, this.adConfig);
        },

        _ad_skipped() {
            if (this.dontTrack()) {
                return;
            }
            this.trackedPlay = false;
            this.tracked25Percent = false;
            this.tracked50Percent = false;
            this.tracked75Percent = false;
            this.adCompleted = true;
            this.track(this.events.SKIP_AD, this.adConfig);
        },

        _ad_paused() {
            if (this.dontTrack()) {
                return;
            }
            this.track(this.events.AD_PAUSE, this.adConfig);
        },

        _ad_resumed() {
            if (this.dontTrack()) {
                return;
            }
            this.track(this.events.AD_RESUME, this.adConfig);
        },

        _error(evt) {
            if (this.dontTrack()) {
                return;
            }
            const config = this.getTrackingConfig();
            config.mData = {
                ...config.mData,
                errorCode: this.getErrorCode(evt),
                rendition: this._player.getCurrentSource()
            };
            this.track(this.getErrorEvent(), config);
        },

        _rendition_not_found() {
            if (this.dontTrack()) {
                return;
            }
            this.track(this.events.RENDITION_NOT_FOUND, this.getTrackingConfig());
        },

        _tracking_event(evt) {
            if (this.dontTrack()) {
                return;
            }
            let config;
            const mData = {};
            if (evt && evt.data && evt.data.name) {
                config = this.getTrackingConfig();
                switch (evt.data.name) {
                    case this.events.FW_ADMANAGER_LOAD_ERROR:
                    case this.events.QOS_LOAD_FAILURE:
                    case this.events['360_LIBRARY_LOAD_ERROR']:
                        mData.errorStatus = evt.data.errorStatus ?
                            evt.data.errorStatus :
                            '';
                        mData.errorThrown = evt.data.errorThrown ?
                            evt.data.errorThrown :
                            '';
                        break;

                    case this.events.CHERRY_API_REQUEST_ERROR:
                        mData.videoId = this._player.store.getState().player.media.id;
                        mData.errorStatus = evt.data.errorStatus ?
                            evt.data.errorStatus :
                            '';
                        mData.errorThrown = evt.data.errorThrown ?
                            evt.data.errorThrown :
                            '';
                        break;
                    default:
                        break;
                }
                config.mData = {
                    ...config.mData,
                    ...mData
                };
                this.track(evt.data.name, config);
            }
        },

        _media_element_mounted() {
            if (this.dontTrack()) {
                return;
            }
            this._element = this._player.video;
            this.bindTaggedDomElement();
        },

        _in_viewport() {
            if (this.dontTrack()) {
                return;
            }
            if (this.trackedInViewport) {
                return;
            }
            // this event may fire before tagx / data are loaded
            if (!this._player.store.getState().player.isReady) {
                this.wasInViewport = true;
            } else {
                const config = this.getTrackingConfig();
                this.track(this.getInViewEvent(), config);
                this.trackedInViewport = true;
            }
        },

        bindTaggedDomElement() {
            if (!this._container) return;

            this._container.addEventListener('click', event => {
                let vhsEtNameNode;
                if (dom.matches(event.target, '[data-vhs-et-name]')) {
                    vhsEtNameNode = event.target;
                } else if (event.target.querySelector('[data-vhs-et-name]')) {
                    vhsEtNameNode = event.target.querySelector('[data-vhs-et-name]');
                }

                if (vhsEtNameNode) {
                    this.trackDomClickEvent(vhsEtNameNode);
                }
            });
        },

        trackDomClickEvent(node) {
            const eventName = node.dataset.vhsEtName;
            const module =
                (dom.closest(node, '[data-vhs-et-module]') &&
                    dom.closest(node, '[data-vhs-et-module]').dataset.vhsEtModule) ||
                'default-module';
            const region =
                (dom.closest(node, '[data-vhs-et-region]') &&
                    dom.closest(node, '[data-vhs-et-region]').dataset.vhsEtRegion) ||
                module;
            const config = {
                module,
                region,
                videoType: this.video_type.VIDEO,
                action: 'click'
            };

            this.track(eventName, config);
        },

        mapStateToProps() {
            const state = this._player.store.getState();

            return {
                isAdActive: state.player.isAdActive
            };
        },

        subscribe() {
            this._player.store.subscribe(() => {
                this.props = this.mapStateToProps();
            });
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/tagx/tagx.js