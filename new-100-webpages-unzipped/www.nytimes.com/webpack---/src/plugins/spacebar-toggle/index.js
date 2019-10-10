/**
 * Plugin for spacebar toggle functionality for HTML5 player.
 * The container div needs to have a tabindex for key strokes to be bound to the div.
 * To get rid of the focus visual indicator be sure to set `outline: none`
 * in the css for the div in use.
 * Only valid for keyCode 32 (spacebar).
 * Private by convention, not for external use.
 */

import isDesktop from 'src/util/is-desktop';

export default {
    name: 'spacebarToggle',
    enable: true,
    canEnable: () => isDesktop(),
    proto: {
        _ready() {
            // You need to set a tabindex on a div to be able to bind to key commands
            this._container.setAttribute('tabindex', -1);
            this._container.addEventListener('keydown', event => {
                if (event && event.keyCode === 32) {
                    event.preventDefault();
                    this._player.togglePlay();
                }
            });
        },

        _play() {
            // Set focus on container so the spacebar toggle will work without needing
            // to click on the video element first.
            const x = window.scrollX;
            const y = window.scrollY;
            this._container.focus();
            window.scrollTo(x, y);
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/spacebar-toggle/index.js