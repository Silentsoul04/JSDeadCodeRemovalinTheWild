const proto = {
    _media_element_mounted() {
        const currentState = this._player.store.getState();
        const nativeControls = currentState.player.options.nativeControls;

        this.togglePlayBound = this._player.togglePlay.bind(this._player);

        if (!nativeControls && !this._player.props.isTouch) {
            this._player.video.addEventListener('click', this.togglePlayBound);
        }
    },

    _destroy() {
        // Need to check for removeEventListener existence due to video stubbing in tests
        if (this._player.video && this._player.video.removeEventListener) {
            this._player.video.removeEventListener('click', this.togglePlayBound);
        }
    }
};

export default {
    name: 'clickVideoToTogglePlay',
    proto,
    enable: true
};



// WEBPACK FOOTER //
// ./src/plugins/click-video-to-toggle-play/index.js