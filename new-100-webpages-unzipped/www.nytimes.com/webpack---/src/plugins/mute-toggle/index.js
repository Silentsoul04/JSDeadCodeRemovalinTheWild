import dom from 'corleone';
import apiEvents from 'src/player/events';
import './styles.scss';

export default {
    name: 'muteToggle',
    enable: false,
    proto: {
        ui: {
            container: null
        },

        _initialize() {
            this._player.once(
                apiEvents.MEDIA_ELEMENT_MOUNTED,
                this.onRenderer.bind(this)
            );
            this._player.on(apiEvents.MUTE, this.onMuteChange.bind(this));
        },

        onRenderer() {
            this.ui.container = dom.create(
                '<div class="nyt-debate-unmute">unmute</div>'
            );
            this._container.appendChild(this.ui.container);

            this.ui.container.addEventListener('click', this.toggleMute.bind(this));
            this.onMuteChange(this._player.isMuted());
        },

        onMuteChange(muted) {
            if (!this.ui.container) return;

            if (muted) {
                this.ui.container.classList.remove('mute');
                this.ui.container.innerHTML = 'mute';
            } else {
                this.ui.container.classList.add('mute');
                this.ui.container.innerHTML = 'unmute';
            }
        },

        toggleMute() {
            if (this._player.isMuted() && this._player.getVolume() === 0) {
                this._player.setVolume(0.75);
                this._player.mute(false);
            } else {
                this._player.toggleVolume();
            }
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/mute-toggle/index.js