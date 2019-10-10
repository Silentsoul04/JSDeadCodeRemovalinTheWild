import {
    orientation
} from 'o9n';
import safeChain from 'safe-chain';

export default {
    name: 'fullscreenOnLandscape',
    enable: false,
    proto: {
        state: {},

        _ready() {
            if (typeof this._player.fullscreen !== 'function') return;

            this.mapGlobalToLocalState();
            this.subscribeToStore();
            this.bindEventListeners();
        },

        bindEventListeners() {
            orientation.onchange = () => {
                if (this.shouldGoFullscreen()) {
                    this._player.fullscreen(true);
                    orientation.lock('landscape');
                }
            };
        },

        mapGlobalToLocalState() {
            const globalState = this._player.store.getState();

            this.state = {
                ...this.state,
                isPlaying: globalState.player.isMediaPlaying,
                isFullscreen: safeChain(globalState, 'plugins.fullscreen.isFullscreen') || false,
                is360: safeChain(globalState, 'player.media.is360') || false
            };
        },

        subscribeToStore() {
            this._player.store.subscribe(() => this.mapGlobalToLocalState());
        },

        shouldGoFullscreen() {
            return (!this.state.isFullscreen && !this.state.is360,
                this.state.isPlaying && orientation.type.indexOf('landscape') === 0
            );
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/fullscreen-on-landscape/index.js