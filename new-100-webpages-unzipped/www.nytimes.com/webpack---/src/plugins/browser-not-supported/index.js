import dom from 'corleone';
import template from './template.html';
import './styles.scss';

export default {
    name: 'browserNotSupported',
    proto: {
        template,

        browserNotSupportedMsg: 'Video playback is not supported in your current browser.<br/>To view NYTimes Video, please upgrade your browser to the latest version.',
        browser360NotSupportedMsg: '360 video playback is not supported in your current browser.<br/>To view NYTimes 360 videos, please use a different browser.',
        browserLiveNotSupportedMsg: 'NYTimes Live video is not supported in your current browser.<br/>To view live feeds, please use a different browser.',

        _browser_not_supported() {
            if (this._player.store.getState().player.media.is360) {
                this.render(this.browser360NotSupportedMsg);
            } else {
                this.render(this.browserNotSupportedMsg);
            }
            dom.show(this.element);
        },

        _browser_live_not_supported() {
            this.render(this.browserLiveNotSupportedMsg);
            dom.show(this.element);
        },

        render(errorMsg) {
            if (!this.element) {
                this.element = dom.create(this.template({
                    errorMsg
                }));
                this._container.appendChild(this.element);
            }
        }
    },
    enable: true
};



// WEBPACK FOOTER //
// ./src/plugins/browser-not-supported/index.js