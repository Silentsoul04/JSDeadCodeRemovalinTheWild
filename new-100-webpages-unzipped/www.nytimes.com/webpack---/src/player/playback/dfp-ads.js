/* global google */
/* eslint-disable no-mixed-operators */

import safeChain from 'safe-chain';
import getUrlParameterByName from 'src/util/get-url-parameter-by-name';
import getScript from 'src/util/get-script-native';
import isMobile from 'src/util/is-mobile';
import getCurrentURL from 'src/util/get-current-url';
import Logger from 'src/util/logger';
import computeAspectRatio from 'src/util/compute-aspect-ratio';
import dom from 'corleone';
import localStorage from 'src/util/local-storage';
import apiEvents from 'src/player/events';
import {
    actions
} from 'src/player/actions';
import PlaybackInterface from './interface';

function ensureSDK() {
    const sdkURL = '//imasdk.googleapis.com/js/sdkloader/ima3.js';

    if (window.google && window.google.ima) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        getScript({
            url: sdkURL,
            success: resolve,
            error: reject
        });
    });
}

function getShrunkenSize(playerWidth, playerHeight, controlHeight) {
    const skipHeight = 43;
    const adHeight = playerHeight - (controlHeight + skipHeight);
    const adWidth = adHeight / playerHeight * playerWidth;
    return {
        adWidth,
        adHeight
    };
}

export function getViddur(duration) {
    if (duration) {
        if (duration >= 240) {
            return 'long';
        } else if (duration >= 60) {
            return 'medium';
        } else if (duration >= 45) {
            return 'semishort';
        } else if (duration > 0) {
            return 'short';
        }
    }
    return 'none';
}

export function getSz(duration) {
    return `480x360${duration >= 60 ? '|480x361|640x480' : ''}`;
}

export function formatCustParams(params) {
    const validKeyList = Object.keys(params).filter(key => !!params[key]);
    const validParamList = validKeyList.map(key => `${key}%3D${params[key]}`);
    return validParamList.join('%26');
}

// strip out all non-alphanumeric characters, including spaces, and lowercase
export function formatTimesTagValue(value) {
    if (typeof value === 'string') {
        return value
            .toLowerCase()
            .replace(/\s+|\W/g, '')
            .substring(0, 30);
    }

    return null;
}

export function getAdUnit2(iu) {
    if (!iu) return '';

    const adUnits = iu.split(/\//);
    let adUnit1Index = -1;
    for (let i = 0; i < adUnits.length; i++) {
        if (adUnits[i] === 'nyt') {
            adUnit1Index = i;
            break;
        }
    }

    if (adUnit1Index >= 0 && adUnits.length > adUnit1Index + 1) {
        return adUnits[adUnit1Index + 1] || '';
    }
    return '';
}

class DfpAds extends PlaybackInterface {
    constructor(store, container, player, video) {
        super(store, container, player, video);

        this.logger = new Logger('vhs:playback:dfp');

        this.subscribe();
    }

    init() {
        return ensureSDK()
            .then(() => {
                this.logger.log('IMA SDK downloaded');
            })
            .catch(error => {
                this.onLibLoadingError();
                throw error;
            });
    }

    play() {
        this.logger.log('play');

        // We have to setup DFP in the same event loop
        // the user interacted with the media element.
        if (!this.state.isIMASetUp) {
            this.setupIMA();
            this.state.isIMASetUp = true;
        }

        if (
            this.state.isAdActive &&
            this.state.adProgress >= 0 &&
            this.adsManager
        ) {
            this.adsManager.resume();
            this.startPollingForTimecode();
        } else {
            this.resetAd();
            this.requestAds();
        }
    }

    pause() {
        if (this.adsManager) {
            this.adsManager.pause();
            this.stopPollingForTimecode();
        }
    }

    mute(mute) {
        if (mute) {
            this.adsManager.setVolume(0);
            this.store.dispatch(actions.media.didMute());
            this.player.emit(apiEvents.MUTE, true);
        } else {
            const volume = this.state.volume;
            this.adsManager.setVolume(volume);
            this.store.dispatch(actions.media.didUnmute());
            this.player.emit(apiEvents.MUTE, false);
        }
    }

    setVolume(volume) {
        if (this.adsManager) {
            this.store.dispatch(actions.media.volume.didChange(volume));
            this.player.emit(apiEvents.VOLUME_CHANGE, volume);
            const muted = this.state.isMediaMuted;
            if (!muted) {
                this.adsManager.setVolume(volume);
            }
        }
    }

    destroy() {
        if (this.adsManager) {
            this.adsManager.destroy();
        }

        if (this.adContainer) {
            dom.remove(this.adContainer);
            this.adContainer = null;
        }

        this.unsubscribe();
        this.stopPollingForTimecode();
    }

    //
    // Private
    //

    setupIMA() {
        google.ima.settings.setVpaidMode(
            google.ima.ImaSdkSettings.VpaidMode.ENABLED
        );

        this.adContainer = dom.create('<div id="vhs-video-ads-container"></div>');
        this.adContainer.style.zIndex = 1;
        this.adContainer.style.position = 'absolute';
        this.adContainer.style.width = '100%';
        this.adContainer.style.height = '100%';
        this.adContainer.style.left = 0;
        this.adContainer.style.top = 0;
        dom.hide(this.adContainer);
        this.player.container.appendChild(this.adContainer);

        this.adDisplayContainer = new google.ima.AdDisplayContainer(
            this.adContainer,
            this.video
        );
        this.adsLoader = new google.ima.AdsLoader(
            this.adDisplayContainer,
            this.video
        );

        // on mobile, this initialize needs to be called within the same event loop as the user click
        this.adDisplayContainer.initialize();

        this.adsLoader.addEventListener(
            google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
            this.onAdsManagerLoaded,
            false,
            this
        );
        this.adsLoader.addEventListener(
            google.ima.AdErrorEvent.Type.AD_ERROR,
            this.onAdError,
            false,
            this
        );
    }

    nextAd() {
        this.resetAd();
        this.requestAds();
    }

    resetAd() {
        // destroy adsManger to avoid playing any post-rolls when calling contentComplete on adsLoader.
        // adsLoader.contentComplete() will reset SDK,
        // so the new ad request doesn't look like a duplicate of the previous one.
        if (this.adsManager) {
            this.adsManager.destroy();
            this.adsManager = null;

            if (this.adsLoader) {
                this.adsLoader.contentComplete();
            }

            this.state.startMuted = false;
        }
    }

    onLibLoadingError() {
        this.player.emit(apiEvents.TRACKING_EVENT, {
            data: {
                name: 'ima-sdk-load-error'
            }
        });
    }

    requestAds() {
        const adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = this.getTagUrl();
        adsRequest.linearAdSlotWidth = this.player.container.offsetWidth;
        adsRequest.linearAdSlotHeight = this.player.container.offsetHeight;
        adsRequest.nonLinearAdSlotWidth = this.player.container.offsetWidth;
        adsRequest.nonLinearAdSlotHeight = 150;

        this.adsLoader.requestAds(adsRequest);

        this.store.dispatch(
            actions.updateAdData({
                loadStartTimestamp: Date.now(),
                loadEndTimestamp: undefined
            })
        );
    }

    getTagUrl() {
        const url = getCurrentURL().split('?')[0];

        return `https://securepubads.g.doubleclick.net/gampad/ads?
        env=vp&gdfp_req=1&impl=s&unviewed_position_start=1
        &iu=${this._getIu()}
        &output=xml_vmap1
        &sz=${getSz(this.state.mediaDuration)}
        &url=${url}
        &description_url=${encodeURIComponent(url)}
        &correlator=${Date.now()}
        &cmsid=1958
        &vid=${this.state.mediaId}
        &cust_params=${formatCustParams(this.getCustParams())}
        `.replace(/\s/g, '');
    }

    getCustParams() {
        const isVertical = computeAspectRatio(this.state.mediaRatio) > 100;
        const {
            path,
            ...optionalParams
        } = this.state.adReq; // eslint-disable-line no-unused-vars
        let params = optionalParams || {};
        params.adv = getUrlParameterByName('ad-keywords') || '';
        params.audio = this.state.isMediaMuted ? 'muted' : 'unmuted';
        params.autoplay = this.state.autoplay ? 'yes' : 'no';
        params.noads = this.state.mediaAds ? 'no' : 'yes';
        params.pos = isVertical ? 'vidv' : 'vidh';
        params.section = this.state.mediaSection;
        params.subsection = this.state.mediaSubsection;
        params.videoser = this.state.mediaSeries;
        params.vidid = this.state.mediaId;
        params.viddur = getViddur(this.state.mediaDuration);

        // some of the parameters below are coming from vi
        // so we check if they already exists and if not
        // so, we get them in a different way (timesvideo case).
        params.plat = params.plat || this._getPlatform();
        params.prop = params.prop || this._getProperty();
        params.typ = params.typ || this._getType();
        params.id = params.id || this._getMetaValues('articleid');
        params.kuid = params.kuid || localStorage.getItem('kxkuid');
        params.ksg = params.ksg || localStorage.getItem('kxsegs');
        params.ver = params.ver || this._getVer();

        const timesTagsParams = this.getCustParamsFromTimesTags();
        params = { ...params,
            ...(timesTagsParams || {})
        };

        return params;
    }

    getCustParamsFromTimesTags() {
        const {
            mediaTimesTags: timesTags
        } = this.state;
        if (!timesTags) return null;

        const params = {
            vidbrandsensitive: 'false'
        };
        const keywords = {
            organization: 'vidorg',
            location: 'vidgeo',
            person: 'vidper',
            title: 'vidttl',
            subject: 'viddes',
            keyword: 'vidspon'
        };

        timesTags.forEach(timesTag => {
            const {
                vernacular,
                displayName,
                isAdvertisingBrandSensitive,
                __typename: type
            } = timesTag;
            const value = displayName || vernacular;
            const parsedValue = value ? formatTimesTagValue(value) : null;
            const keyword = type ? type.toLowerCase() : null;
            const param = keywords[keyword] || keyword;

            if (parsedValue && param && params[param]) {
                params[param].push(parsedValue);
            } else if (parsedValue && param) {
                params[param] = [parsedValue];
            }

            if (isAdvertisingBrandSensitive) {
                params.vidbrandsensitive = 'true';
            }
        });

        Object.keys(params).forEach(keyword => {
            if (Array.isArray(params[keyword])) {
                params[keyword] = params[keyword].join(',');
            }
        });

        return params;
    }

    onAdsManagerLoaded(adsManagerLoadedEvent) {
        const adsRenderingSettings = new google.ima.AdsRenderingSettings();
        adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = false;
        adsRenderingSettings.loadVideoTimeout = 5000;
        adsRenderingSettings.enablePreloading = true;

        this.adsManager = adsManagerLoadedEvent.getAdsManager(
            this.video,
            adsRenderingSettings
        );

        if (this.state.startMuted) {
            this.adsManager.setVolume(0);
            this.store.dispatch(actions.media.didMute());
        } else {
            this.adsManager.setVolume(this.state.volume);
        }

        this.registerAdEventsListeners();
        this.startAd();
    }

    onAdActive() {
        this.resize(this.state.playerWidth, this.state.playerHeight);
    }

    onAdError(evt) {
        this.logger.error('Ad Manager SDK error ', evt.getError().toString());

        if (!isMobile()) {
            // It's possible that the video is hidden and
            // error happens before ads manager is loaded,
            // so we need to restore video.
            this.video.style.visibility = '';
        }

        this.player.emit(apiEvents.AD_ERROR, evt.getError());
        if (this.adsManager) {
            this.adsManager.destroy();
        }
    }

    registerAdEventsListeners() {
        this.adsManager.addEventListener(
            google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
            this.onContentPauseRequested,
            false,
            this
        );
        this.adsManager.addEventListener(
            google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
            this.onContentResumeRequested,
            false,
            this
        );

        this.adsManager.addEventListener(
            google.ima.AdErrorEvent.Type.AD_ERROR,
            this.onAdError,
            false,
            this
        );

        const events = [
            google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
            google.ima.AdEvent.Type.CLICK,
            google.ima.AdEvent.Type.COMPLETE,
            google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
            google.ima.AdEvent.Type.DURATION_CHANGE,
            google.ima.AdEvent.Type.FIRST_QUARTILE,
            google.ima.AdEvent.Type.IMPRESSION,
            google.ima.AdEvent.Type.LOADED,
            google.ima.AdEvent.Type.MIDPOINT,
            google.ima.AdEvent.Type.PAUSED,
            google.ima.AdEvent.Type.RESUMED,
            google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,
            google.ima.AdEvent.Type.SKIPPED,
            google.ima.AdEvent.Type.STARTED,
            google.ima.AdEvent.Type.THIRD_QUARTILE,
            google.ima.AdEvent.Type.USER_CLOSE,
            google.ima.AdEvent.Type.VOLUME_MUTED,
            google.ima.AdEvent.Type.VOLUME_CHANGED
        ];

        events.forEach(event => {
            this.adsManager.addEventListener(event, this.onAdEvent, false, this);
        });
    }

    onContentPauseRequested(evt) {
        this.logger.log(evt);

        if (this.state.isMediaMuted) {
            this.adsManager.setVolume(0);
        }

        dom.show(this.adContainer);
        this.startPollingForTimecode();
        this.resize(this.state.playerWidth, this.state.playerHeight);
    }

    // this one triggers after all-complete
    onContentResumeRequested(evt) {
        this.logger.log(evt);
        this.player.emit(apiEvents.SWITCH_TO_CONTENT);
        dom.hide(this.adContainer);

        this.stopPollingForTimecode();
        if (!isMobile()) {
            this.video.style.visibility = '';
        }
    }

    onAdEvent(evt) {
        if (evt && evt.type) {
            switch (evt.type) {
                case google.ima.AdEvent.Type.LOADED:
                    this.ad = evt.getAd();
                    this.store.dispatch(
                        actions.updateAdData({
                            creativeId: this.ad.getCreativeId(),
                            duration: this.ad.getDuration(),
                            hasCountdown: this.hasCountdown(),
                            id: this.ad.getAdId(),
                            title: this.ad.getTitle(),
                            position: this._getAdPosition()
                        })
                    );
                    break;
                case google.ima.AdEvent.Type.IMPRESSION:
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    this.store.dispatch(
                        actions.updateAdData({
                            loadEndTimestamp: Date.now()
                        })
                    );
                    this.store.dispatch(actions.media.didPlay());
                    this.player.emit(apiEvents.AD_STARTED);

                    break;
                case google.ima.AdEvent.Type.CLICK:
                    if (this.isPlaying()) {
                        this.pause();
                    }
                    break;
                case google.ima.AdEvent.Type.COMPLETE:
                    this.player.emit(apiEvents.AD_COMPLETED);
                    break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    this.ad = null;
                    break;
                case google.ima.AdEvent.Type.DURATION_CHANGE:
                    break;
                case google.ima.AdEvent.Type.FIRST_QUARTILE:
                    this.player.emit(apiEvents.AD_FIRST_QUARTILE);
                    break;
                case google.ima.AdEvent.Type.MIDPOINT:
                    this.player.emit(apiEvents.AD_MIDPOINT);
                    break;
                case google.ima.AdEvent.Type.PAUSED:
                    this.store.dispatch(actions.media.didPause());
                    this.player.emit(apiEvents.AD_PAUSED);
                    break;
                case google.ima.AdEvent.Type.RESUMED:
                    this.store.dispatch(actions.media.didPlay());
                    this.player.emit(apiEvents.AD_RESUMED);
                    break;
                case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
                    break;
                case google.ima.AdEvent.Type.SKIPPED:
                    this.player.emit(apiEvents.AD_SKIPPED);
                    break;
                case google.ima.AdEvent.Type.THIRD_QUARTILE:
                    this.player.emit(apiEvents.AD_THIRD_QUARTILE);
                    break;
                case google.ima.AdEvent.Type.USER_CLOSE:
                    break;
                case google.ima.AdEvent.Type.VOLUME_MUTED:
                case google.ima.AdEvent.Type.VOLUME_CHANGED:
                    break;
                default:
                    break;
            }
        }
    }

    startAd() {
        const containerWidth = this.player.container.offsetWidth;
        const containerHeight = this.player.container.offsetHeight;

        try {
            this.adsManager.init(
                containerWidth,
                containerHeight,
                google.ima.ViewMode.NORMAL
            );
            this.adsManager.start();
        } catch (adError) {
            // An error may be thrown if there was a problem with the VAST response.
            this.logger.error(adError);
        }
    }

    stop() {
        if (this.adsManager) {
            this.adsManager.stop();
            this.player.emit(apiEvents.AD_STOPPED);
        }
    }

    // should not be used
    skip() {
        if (this.adsManager) {
            // our own implementation of skip ad function is only used when the ad is non-skippable
            // and thus doesn't have its own skip-ad button,
            // so SDK's skip method won't work here
            this.adsManager.stop();
        }
    }

    isPlaying() {
        return this.state.isMediaPlaying;
    }

    resize(playerWidth, playerHeight) {
        let adWidth;
        let adHeight;

        if (!isMobile()) {
            const controlHeight = safeChain(
                this.store.getState().plugins,
                'controls.height'
            );
            ({
                adWidth,
                adHeight
            } = getShrunkenSize(
                playerWidth,
                playerHeight,
                controlHeight
            ));
            this.shrinkAd(adWidth, adHeight);
        } else {
            adWidth = playerWidth;
            adHeight = playerHeight;
        }

        if (this.adsManager) {
            this.adsManager.resize(adWidth, adHeight, google.ima.ViewMode.NORMAL);
        }
    }

    startPollingForTimecode() {
        this.stopPollingForTimecode();
        this.checkAdTimecode();
    }

    checkAdTimecode() {
        if (this.adsManager) {
            const remainingTime = this.adsManager.getRemainingTime();
            if (remainingTime >= 0) {
                this.store.dispatch(actions.updateAdProgress(remainingTime));
            }

            this.timecodePolling = window.setTimeout(() => {
                this.checkAdTimecode();
            }, 200);
        }
    }

    stopPollingForTimecode() {
        if (this.timecodePolling) {
            window.clearTimeout(this.timecodePolling);
            this.timecodePolling = null;
        }
    }

    hasCountdown() {
        const uiElements = (this.ad && this.ad.getUiElements()) || [];
        return uiElements.indexOf(google.ima.UiElements.COUNTDOWN) !== -1;
    }

    shrinkAd(width, height) {
        this.adContainer.style.width = `${width}px`;
        this.adContainer.style.height = `${height}px`;
        this.adContainer.style.left = '50%';
        this.adContainer.style.top = '50%';
        this.adContainer.style.transform = 'translate(-50%, -50%)';

        this.video.style.visibility = 'hidden';
    }

    subscribe() {
        if (this.state.didSubscribe) return;
        this.state.didSubscribe = true;
        this.state.isIMASetUp = false;

        this.mapGlobalToLocalState();

        this.unsubscribe.unsubscribers = [];
        this.unsubscribe.unsubscribers.push(
            this.store.subscribe(() => this.mapGlobalToLocalState()),
            this.store.subscribe(() => {
                const state = this.store.getState();

                if (state.player.isMediaEnded && !state.player.isAdActive) {
                    this.resetAd();
                }
            }),
            this.store.whenever(
                'plugins.responsive',
                () => true,
                () => {
                    const {
                        isAdActive
                    } = this.store.getState().player;

                    if (isAdActive) {
                        this.onAdActive();
                    }
                }
            )
        );
    }

    unsubscribe() {
        this.unsubscribe.unsubscribers.forEach(unsubscribe => unsubscribe());
        this.unsubscribe.unsubscribers = [];
        this.state.didSubscribe = false;
    }

    mapGlobalToLocalState() {
        const globalState = this.store.getState();

        this.state = {
            startMuted: false,
            ...this.state,
            isAdActive: globalState.player.isAdActive,
            adProgress: globalState.player.adProgress,
            isMediaMuted: globalState.player.isMediaMuted,
            isMediaPlaying: globalState.player.isMediaPlaying,
            volume: globalState.player.volume,
            mediaAds: globalState.player.media.ads,
            mediaDuration: globalState.player.media.duration,
            mediaId: globalState.player.media.id,
            mediaRatio: globalState.player.media.ratio,
            mediaSection: globalState.player.media.section,
            mediaSeries: globalState.player.media.series,
            mediaSubsection: globalState.player.media.subsection,
            mediaTimesTags: globalState.player.media.timesTags,
            adReq: globalState.player.options.adReq || {},
            autoplay: globalState.player.options.autoplay,
            env: globalState.player.options.env,
            playerWidth: globalState.plugins.responsive.playerWidth,
            playerHeight: globalState.plugins.responsive.playerHeight
        };
    }

    _getAdPosition() {
        try {
            return this.ad.getAdPodInfo().getPodIndex();
        } catch (error) {
            this.logger.error(error);

            return undefined;
        }
    }

    _getIu() {
        return (
            this.state.adReq.path ||
            `29390238/${this.state.env === 'production' ? 'nyt' : 'zznyt'}`
        );
    }

    // eslint-disable-next-line class-methods-use-this
    _getHost() {
        return document.location.host;
    }

    // eslint-disable-next-line class-methods-use-this
    _getMetaValues(name) {
        const values = [];
        const metaTags = document.getElementsByTagName('meta');
        for (let i = 0; i < metaTags.length; i++) {
            if (metaTags[i].name === name) {
                values.push(metaTags[i].content);
            }
        }

        return values;
    }

    _getPlatform() {
        return isMobile() || this._getHost().indexOf('mobile.nytimes.com') > -1 ?
            'mweb' :
            'web';
    }

    _getProperty() {
        const host = this._getHost();
        if (host.indexOf('mobile.nytimes.com') > -1) {
            return 'mnyt';
        } else if (host.indexOf('cooking.nytimes.com') > -1) {
            return 'cookweb';
        }
        return 'nyt';
    }

    _getType() {
        const sourceApp = this._getMetaValues('sourceApp').join('');
        const pt = this._getMetaValues('PT').join('');
        const applicationName = this._getMetaValues('applicationName').join('');
        if (sourceApp === 'nytcooking') {
            return 'rec';
        } else if (sourceApp === 'nytv') {
            return 'vidlib';
        } else if (pt === 'Homepage') {
            return 'hp';
        } else if (applicationName === 'collection') {
            return 'coll';
        } else if (applicationName === 'interactive') {
            return 'int';
        } else if (pt === 'Section Front') {
            return 'sf';
        } else if (pt === 'article') {
            return 'art';
        } else if (pt === 'Blogs') {
            return 'bl';
        } else if (pt === 'guide') {
            return 'gui';
        }
        return '';
    }

    _getVer() {
        const sourceAppToVer = {
            'nyt-v5': 'nyt5',
            nytv: 'timesvideo',
            mobileWeb: 'mweb'
        };
        const sourceApp = this._getMetaValues('sourceApp').join('');
        if (sourceApp && sourceAppToVer[sourceApp]) {
            return sourceAppToVer[sourceApp];
        }
        return '';
    }
}

export default DfpAds;



// WEBPACK FOOTER //
// ./src/player/playback/dfp-ads.js