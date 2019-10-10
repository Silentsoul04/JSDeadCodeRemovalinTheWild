import safeChain from 'safe-chain';
import {
    bind
} from 'monocle-decorators';
import apiEvents from 'src/player/events';
import {
    actions
} from 'src/player/actions';
import isMobile from 'src/util/is-mobile';
import Logger from 'src/util/logger';
import PlaybackInterface from './interface';
import DFP from './dfp-ads';

export default class extends PlaybackInterface {
    constructor(store, container, player, video, playback) {
        super(store, container, player, video);

        this.store = store;
        this.container = container;
        this.player = player;
        this.type = playback.type;
        this.playback = playback;

        this.state = {
            shouldRequestAd: true,
            canRequestAd: true,
            isMediaElementPrime: false,
            playback
        };

        this.logger = new Logger('vhs:playback:video-with-dfp');

        this.handleMediaEndedBound = this.handleMediaEnded.bind(this);

        this.subscribe();
    }

    async init() {
        await this.playback.init();

        try {
            this.dfp = new DFP(
                this.store,
                this.container,
                this.player,
                this.player.video
            );
            await this.dfp.init();

            this.player.once(apiEvents.ENDED, () => {
                this.state.shouldRequestAd = true;
            });
            this.player.on(apiEvents.SWITCH_TO_CONTENT, this.restorePlayback);
            this.player.on(apiEvents.AD_ERROR, this.restorePlayback);
            this.player.on(apiEvents.AD_SKIPPED, this.restorePlayback);
            this.player.on(apiEvents.AD_STOPPED, this.restorePlayback);
        } catch (error) {
            // Failed to load DFP SDK, so turn off ads.
            this.state.canRequestAd = false;

            this.logger.error('Failed to load DFP', error);
        }
    }

    load() {
        if (this.state.canRequestAd) {
            this.state.shouldRequestAd = true;
        }

        this.playback.load();
        this.dfp.load();
    }

    play() {
        // For "priming" the <video> tag in mobile.
        // Has to happen in the same event loop that occured the user interaction.
        if (!this.state.isMediaElementPrime && isMobile()) {
            try {
                this.state.isMediaElementPrime = true;
                this.playback.video.load();
            } catch (error) {
                this.logger.error(error);
            }
        }

        if (this.state.canRequestAd && this.state.shouldRequestAd) {
            this.state.shouldRequestAd = false;
            this.switchToAds();
        }
        this.state.playback.play();
    }

    pause() {
        this.state.playback.pause();
    }

    mute(mute) {
        // Case DFP was not already initialized, we flag it to start muted.
        this.dfp.state.startMuted = true;
        this.state.playback.mute(mute);
    }

    setVolume(volume) {
        this.state.playback.setVolume(volume);
    }

    destroy() {
        if (typeof safeChain(this, 'dfp.destroy') === 'function') {
            this.dfp.destroy();
        }
        this.playback.destroy();

        this.player.removeListener(apiEvents.AD_ERROR, this.restorePlayback);
        this.player.removeListener(apiEvents.AD_SKIPPED, this.restorePlayback);
        this.player.removeListener(apiEvents.AD_STOPPED, this.restorePlayback);
        this.player.removeListener(
            apiEvents.SWITCH_TO_CONTENT,
            this.restorePlayback
        );
    }

    seek(time) {
        this.state.playback.seek(time);
    }

    toggleHD() {
        this.state.playback.toggleHD();
    }

    reloadVideo() {
        this.state.playback.reloadVideo();
    }

    //
    // Private
    //

    switchToAds() {
        this.playback.unregisterListeners();
        this.state.playback = this.dfp;
        this.store.dispatch(actions.didSwitchToAd());
    }

    @bind
    async restorePlayback() {
        if (this.state.playback === this.playback) return;

        this.playback.setVolume(this.state.volume);
        this.playback.mute(this.state.isMediaMuted);

        this.state.playback = this.playback;
        this.playback.registerListeners();

        this.store.dispatch(actions.didSwitchToContent());

        // mobile uses the same video element as content for the ad
        // so we need to reload the content video on the video element
        // desktop should not need to do this but we aren't branching since
        // it's not a rule
        await this.playback.load();
        this.playback.play();

        this.player.removeListener(apiEvents.ENDED, this.handleMediaEndedBound);
        this.player.once(apiEvents.ENDED, this.handleMediaEndedBound);
    }

    subscribe() {
        if (this.state.didSubscribe) return;
        this.state.didSubscribe = true;

        this.mapGlobalToLocalState();
        this.store.subscribe(() => this.mapGlobalToLocalState());
    }

    mapGlobalToLocalState() {
        const globalState = this.store.getState();
        this.state = {
            ...this.state,
            volume: globalState.player.volume,
            isMediaMuted: globalState.player.isMediaMuted
        };
    }

    handleMediaEnded() {
        this.state.shouldRequestAd = true;
    }
}



// WEBPACK FOOTER //
// ./src/player/playback/video-with-dfp.js