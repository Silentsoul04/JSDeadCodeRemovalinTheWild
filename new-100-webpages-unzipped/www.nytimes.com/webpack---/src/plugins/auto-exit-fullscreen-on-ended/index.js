import isIphone from 'src/util/is-iphone';

export default {
    name: 'autoExitFullscreenOnEnded',
    enable: false,
    proto: {
        _ended() {
            if (isIphone()) {
                this.exitFullscreen();
            }
        },
        exitFullscreen() {
            if (this._player.video.webkitExitFullscreen) {
                this._player.video.webkitExitFullscreen();
            }
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/auto-exit-fullscreen-on-ended/index.js