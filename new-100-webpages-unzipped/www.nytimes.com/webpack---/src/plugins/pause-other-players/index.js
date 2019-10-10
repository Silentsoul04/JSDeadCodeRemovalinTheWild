import apiEvents from 'src/player/events';

export default {
    name: 'pauseOtherPlayers',
    enable: true,
    proto: {
        _ready() {
            // copy config param to plugin for stubbing in tests
            this._allowMultiplePlayers = window.__VHS__.config.allowMultiplePlayers;
            this._player.on(apiEvents.PLAY, this.pauseOtherPlayers.bind(this));
            this._player.on(apiEvents.AD_STARTED, this.pauseOtherPlayers.bind(this));
            this._player.on(apiEvents.AD_RESUMED, this.pauseOtherPlayers.bind(this));
        },

        pauseOtherPlayers() {
            const state = this._player.store.getState();
            const isAudio = state.player.options.mediaType === 'audio';
            if (this._allowMultiplePlayers && !isAudio) {
                return;
            }

            Object.keys(window.__VHS__.instances).forEach(instanceId => {
                if (
                    this._player.props.instanceId !== instanceId &&
                    !this.isPlayerMuted(window.__VHS__.instances[instanceId])
                ) {
                    window.__VHS__.instances[instanceId].pause();
                }
            });
        },

        isPlayerMuted(player) {
            const isVHS3 = !!player.store;

            if (isVHS3) {
                return player.store.getState().player.isMediaMuted;
            }
            return player.isMuted();
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/pause-other-players/index.js