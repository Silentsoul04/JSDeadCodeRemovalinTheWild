import preact from 'preact';
import isMobile from 'src/util/is-mobile';
import isAndroid from 'src/util/is-android';
import localStorage from 'src/util/local-storage';
import {
    Provider
} from 'preact-redux';
import Captions from './component';
import reducer from './reducer';
import actions from './actions';

const pluginClassName = 'captions';

const render = (container, store) => {
    preact.render( <
        Provider store = {
            store
        } >
        <
        Captions / >
        <
        /Provider>,
        container
    );
};

const textTrackModes = {
    SHOWING: 'showing',
    DISABLED: 'disabled',
    HIDDEN: 'hidden'
};

export default {
    name: 'captions',
    enable: true,
    proto: {
        pluginClassName,
        usingNativeCaptions: false,
        userCCPref: null,

        _initialize() {
            render(this._container, this._player.store);
            this.subscribe(this, this._player.store);
            this.userCCPref = this.getUserCCPref();
        },

        subscribe() {
            const {
                store
            } = this._player;
            store.whenever('player.mediaStarted', true, () => {
                if (this._player.store.getState().plugins.captions.trackLoaded) {
                    this.initializeTracksOnTrackLoaded();
                    this._player.store.dispatch(actions.trackUnloaded());
                }
            });
            store.whenever('player.isMediaLoaded', true, () =>
                this.initializeTextTracks()
            );
            store.whenever('player.shouldMediaLoad', true, () =>
                this.resetTextTracks()
            );
            store.whenever('plugins.captions.shouldEnableCaptions', true, () => {
                this.setUserCCPref(true);
                store.dispatch(actions.didEnableCaptions());
            });
            store.whenever('plugins.captions.shouldDisableCaptions', true, () => {
                this.setUserCCPref(false);
                store.dispatch(actions.didDisableCaptions());
            });
            store.whenever('player.didSubtitleTrackLoad', true, () => {
                this._player.store.dispatch(actions.trackLoaded());
                if (this._player.store.getState().player.mediaStarted) {
                    this.initializeTracksOnTrackLoaded();
                    this._player.store.dispatch(actions.trackUnloaded());
                }
            });
            store.whenever(
                'plugins.fullscreen.isFullscreen',
                () => true,
                () => {
                    const currentState = store.getState();
                    if (currentState.plugins.captions.areCaptionsEnabled) {
                        const shouldUseNativeCaptions =
                            isMobile() &&
                            !isAndroid() &&
                            !currentState.player.media.is360 &&
                            currentState.plugins.fullscreen.isFullscreen;
                        this.useNativeCaptions(shouldUseNativeCaptions);
                    }
                }
            );
        },

        useNativeCaptions(shouldUseNativeCaptions) {
            const mode = shouldUseNativeCaptions ?
                textTrackModes.SHOWING :
                textTrackModes.HIDDEN;
            this.setTextTrackMode(mode);
            this.usingNativeCaptions = shouldUseNativeCaptions;
        },

        initializeTracksOnTrackLoaded() {
            const {
                textTracks
            } = this._player.video;
            for (let i = 0; i < textTracks.length; i++) {
                this.initializeTextTrack(textTracks[i]);
            }
        },

        initializeTextTracks() {
            const {
                video
            } = this._player;
            if (
                video.textTracks &&
                typeof video.textTracks.onaddtrack !== 'function'
            ) {
                video.textTracks.onaddtrack = function(e) {
                    this._player.store.dispatch(actions.trackLoaded());
                    this.initializeTextTrack(e.track);
                }.bind(this);
            }
        },

        initializeTextTrack(track) {
            if (track.kind !== 'subtitles' && track.kind !== 'captions') return;

            const {
                store
            } = this._player;

            track.mode = 'hidden';
            track.oncuechange = evt => this.initializeVTTCue(evt.currentTarget);

            const {
                areCaptionsAvailable
            } = store.getState().plugins.captions;
            if (!areCaptionsAvailable) {
                store.dispatch(actions.captionsAvailable(true));
            }

            const shouldEnableCaptions = this.getUserCCPref();
            if (shouldEnableCaptions) {
                store.dispatch(actions.didEnableCaptions());
                this.initializeVTTCue(track);
            }
        },

        initializeVTTCue(track) {
            if (!this.usingNativeCaptions) {
                // This is for IE11 and Edge, since, after the 'addtrack'
                // event, hls.js reassigns the mode for each track in order
                // for these browsers to support WebVTT. It is an extra measure
                // to ensure that native browser captions are not displayed.
                track.mode = 'hidden';
            }
            let newText = '';
            if (track.activeCues && track.activeCues.length) {
                newText = track.activeCues[track.activeCues.length - 1].text;
            }
            this._player.store.dispatch(actions.textChange(newText));
        },

        resetTextTracks() {
            this._player.store.dispatch(actions.textChange(''));
            this._player.store.dispatch(actions.captionsAvailable(false));
            this.setTextTrackMode(textTrackModes.DISABLED);
            this._player.store.dispatch(actions.trackUnloaded());
        },

        setTextTrackMode(mode) {
            if (this._player.video && this._player.video.textTracks.length) {
                for (let i = 0; i < this._player.video.textTracks.length; i++) {
                    const track = this._player.video.textTracks[i];
                    track.mode = mode;
                    if (mode === textTrackModes.DISABLED) {
                        track.oncuechange = null;
                    }
                }
            }
        },

        getUserCCPref() {
            if (this.userCCPref !== null) {
                return this.userCCPref;
            }
            return Number(localStorage.getItem('cc', 0));
        },

        setUserCCPref(shouldEnableCaptions) {
            const newValue = Number(shouldEnableCaptions);
            const currentUserPreferenceValue = this.getUserCCPref();
            if (newValue !== currentUserPreferenceValue) {
                localStorage.setItem('cc', `${newValue}`);
                this.userCCPref = newValue;
            }
        },

        reducer() {
            return {
                captions: reducer
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/captions/index.js