/* global COMSCORE */
import canTrack from 'can-track';
import checkCookie from 'src/util/check-cookie';
import getScript from 'src/util/get-script';

export default {
    name: 'comscore',
    proto: {
        props: Object.seal({
            isAdActive: false
        }),

        loadLibrary(callback) {
            const url = `${
        document.location.protocol === 'https:' ? 'https://sb' : 'http://b'
      }.scorecardresearch.com/beacon.js`;
            getScript({
                url,
                success: callback,
                dataType: 'script'
            });
        },

        getParams() {
            const c5 = this.props.isAdActive ? '09' : '02';
            const params = {
                c1: 1,
                c2: '3005403',
                c3: '',
                c4: '',
                c5
            };

            return params;
        },

        track() {
            const params = this.getParams();

            if (typeof COMSCORE !== 'undefined' && COMSCORE.beacon) {
                COMSCORE.beacon(params);
            } else {
                this.loadLibrary(() => {
                    if (typeof COMSCORE !== 'undefined' && COMSCORE.beacon) {
                        COMSCORE.beacon(params);
                    }
                });
            }
        },

        subscribe() {
            this._player.store.subscribe(() => {
                this.props = this.mapStateToProps();
            });
        },

        mapStateToProps() {
            const state = this._player.store.getState();

            return {
                isAdActive: state.player.isAdActive
            };
        },

        dontTrack() {
            return (!canTrack() ||
                (this._player.store.getState().plugins.featureFlags.gdpr &&
                    checkCookie('NYT-T=out'))
            );
        },

        //
        // Events
        //

        _initialize() {
            if (this.dontTrack()) {
                return;
            }
            this.tracked = false;
            this.props = this.mapStateToProps();
            this.subscribe();
        },

        _playing() {
            if (this.dontTrack()) {
                return;
            }
            if (!this.tracked) {
                this.track();
                this.tracked = true;
            }
        },

        _ended() {
            if (this.dontTrack()) {
                return;
            }
            this.tracked = false;
        },

        _ad_started() {
            if (this.dontTrack()) {
                return;
            }
            this.track();
        },

        /**
         * When a new video is loaded
         *
         * @method _loadstart
         */
        _loadstart() {
            if (this.dontTrack()) {
                return;
            }
            this.tracked = false;
        }
    },
    enable: true
};



// WEBPACK FOOTER //
// ./src/plugins/comscore/comscore.js