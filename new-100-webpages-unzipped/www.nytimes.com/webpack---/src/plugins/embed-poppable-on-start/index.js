import isDesktop from 'src/util/is-desktop';
import getUrlParameterByName from 'src/util/get-url-parameter-by-name';
import removeParamsFromUrl from 'src/util/remove-params-from-url';

export default {
    name: 'embedPoppableOnStart',
    enable: false,
    proto: {
        queryParamName: 'embedcode',

        bindEvents() {
            this._emit('plugin:copySlate:open:get-embed-code');
            this._on(
                'plugin:copySlate:closed',
                function playOnce() {
                    this._player.play();
                    this._removeListener('plugin:copySlate:closed', playOnce);
                }.bind(this)
            );
        },

        _ready() {
            if (
                isDesktop() &&
                getUrlParameterByName(this.queryParamName) === 'true'
            ) {
                this.bindEvents();
                removeParamsFromUrl([this.queryParamName]);
            }
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/embed-poppable-on-start/index.js