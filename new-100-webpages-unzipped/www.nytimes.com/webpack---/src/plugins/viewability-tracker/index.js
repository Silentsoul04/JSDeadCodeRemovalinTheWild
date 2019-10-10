import canTrack from 'can-track';
import checkCookie from 'src/util/check-cookie';
import mediaTypes from 'src/player/media-types';
import events from './events';

/**
 * This is a plugin depending on plugin TagX
 *
 * It tracks for how long a video has been played and sends Analytics requests through TagX when it
 * reachs 3sec and 30sec.
 */
export default {
    name: 'viewabilityTracker',
    enable: true,
    proto: {
        _initialize() {
            if (this.dontTrack()) {
                return;
            }
            this.reset();
        },

        _load_start() {
            if (this.dontTrack()) {
                return;
            }
            this.reset();
        },

        _ended() {
            if (this.dontTrack()) {
                return;
            }
            this.reset();
        },

        _seeking() {
            this.lastTimeUpdate = null;
        },

        _time_update(currentTime) {
            if (this.lastTimeUpdate === null) {
                this.lastTimeUpdate = currentTime;
            } else {
                this.timePlayed += currentTime - this.lastTimeUpdate;
                this.lastTimeUpdate = currentTime;

                this.checkTimeAndTrack(this.timePlayed);
            }
        },

        reset() {
            this.timePlayed = 0;
            this.lastTimeUpdate = null;
            this.tracked30Second = false;
            this.tracked3Second = false;
        },

        getMediaType() {
            return this._player.store.getState().player.options.mediaType;
        },

        get3SecondEvent() {
            if (this.getMediaType() === mediaTypes.AUDIO) {
                return events.HEARD_3_SECONDS;
            }
            return events.VIEWED_3_SECONDS;
        },

        get30SecondEvent() {
            if (this.getMediaType() === mediaTypes.AUDIO) {
                return events.HEARD_30_SECONDS;
            }
            return events.VIEWED_30_SECONDS;
        },

        checkTimeAndTrack(timePlayed) {
            if (timePlayed >= 30 && !this.tracked30Second) {
                this.track(this.get30SecondEvent());
                this.tracked30Second = true;
            } else if (timePlayed >= 3 && !this.tracked3Second) {
                this.track(this.get3SecondEvent());
                this.tracked3Second = true;
            }
        },

        track(eventName) {
            const trackPayload = {
                eventName
            };
            this._emit(events.TRACK, trackPayload);
        },

        dontTrack() {
            return (!canTrack() ||
                (this._player.store.getState().plugins.featureFlags.gdpr &&
                    checkCookie('NYT-T=out'))
            );
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/viewability-tracker/index.js