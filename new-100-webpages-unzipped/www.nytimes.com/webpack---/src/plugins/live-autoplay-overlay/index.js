import preact from 'preact';
import Provider from 'preact-context-provider';
import LiveAutoplayOverlay from './component';

const render = (container, player, store) => {
    preact.render( <
        Provider store = {
            store
        } >
        <
        LiveAutoplayOverlay player = {
            player
        }
        /> <
        /Provider>,
        container
    );
};

//
// API
//

export default {
    enable: false,
    name: 'liveAutoplayOverlay',
    proto: {
        muted: true,

        _initialize() {
            this._player.store.whenever(
                'plugins.autoplay.canAutoplayMuted',
                true,
                () => {
                    this.init();
                }
            );
        },

        init() {
            const store = this._player.store;

            render(this._container, this._player, store);

            this._player.on(this._player.events.MEDIA_ELEMENT_MOUNTED, () => {
                this._player.emit('plugin:controls:disable');
                this._player.emit('plugin:controlsOverlay:disable');
            });

            this._player.on(this._player.events.LOAD_START, () => {
                if (this._player.store.getState().player.isMediaMuted) {
                    this._player.emit('plugin:controls:disable');
                    this._player.emit('plugin:controlsOverlay:disable');
                }
            });

            this._player.on(this._player.events.AD_STARTED, () => {
                this._player.emit('plugin:controls:enable');
                this._player.emit('plugin:controlsOverlay:enable');
            });

            this._player.on(this._player.events.AD_SKIPPED, () => {
                if (this._player.store.getState().player.isMediaMuted) {
                    this._player.emit('plugin:controls:disable');
                    this._player.emit('plugin:controlsOverlay:disable');
                }
            });

            this._player.on(this._player.events.AD_COMPLETED, () => {
                if (this._player.store.getState().player.isMediaMuted) {
                    this._player.emit('plugin:controls:disable');
                    this._player.emit('plugin:controlsOverlay:disable');
                }
            });
        },

        // Dummy reducer is needed until we remove `combineReducers`
        reducer() {
            return {
                liveAutoplayOverlay: (state = {}) => state
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/live-autoplay-overlay/index.js