import dom from 'corleone';
import template from './template.html';
import './style.scss';

export default {
    name: 'errorSlate',
    enable: true,
    proto: {
        template,
        props: Object.seal({
            isAdActive: false
        }),
        errorMessages: {
            defaultVod: 'This video is currently unavailable.',
            defaultLive: 'This stream is not currently available.',
            aborted: 'The video playback was aborted. Please refresh to resume playback.',
            network: 'The video connection was lost. Please refresh to resume playback.',
            decode: 'There was a video playback error. Please refresh to resume playback.',
            srcNotSupported: 'The video format is currently not supported in this browser.'
        },

        _initialize() {
            this.props = this.mapStateToProps(this._player.store.getState());
            this.subscribe();

            this.renderSlate();
        },

        _play() {
            this.hide();
        },

        _loadstart() {
            this.hide();
        },

        hide() {
            if (this.element) {
                dom.hide(this.element);
            }
        },

        _rendition_not_found() {
            if (!this.element) {
                this.renderSlate();
            }
            this.errorMsgElement.innerHTML =
                'This video is not currently supported on your browser.';
            dom.show(this.element);
            dom.hide(this.reloadElement);
            dom.show(this.alertIcon);
        },

        _error(evt) {
            if (this.props.isAdActive) {
                return;
            }

            if (evt.hlsjs) {
                this.onHlsjsError(evt);
            } else {
                this.onHtml5Error(evt);
            }
        },

        _slate(evt) {
            if (evt && evt.message) {
                this.errorMsgElement.innerHTML = evt.message;
                dom.show(this.element);
                dom.show(this.alertIcon);
                dom.hide(this.reloadElement);
            }
        },

        onHlsjsError(evt) {
            if (evt.fatal) {
                if (evt.type === 'networkError') {
                    this.errorMsgElement.innerHTML = this.errorMessages.network;
                } else if (evt.type === 'mediaError') {
                    this.errorMsgElement.innerHTML = this.errorMessages.decode;
                } else if (evt.type === 'otherError') {
                    this.errorMsgElement.innerHTML = this.errorMessages.aborted;
                } else {
                    this.errorMsgElement.innerHTML = this.errorMessages.defaultVod;
                }
                dom.show(this.reloadElement);
                dom.hide(this.alertIcon);
                dom.show(this.element);
            }
        },

        onHtml5Error(evt) {
            const error = this.getError(evt);
            const errorMsg = this.getErrorMessage(error);
            this.errorMsgElement.innerHTML = errorMsg;
            dom.show(this.element);
            if (
                error &&
                error.code &&
                error.code === error.MEDIA_ERR_SRC_NOT_SUPPORTED
            ) {
                dom.hide(this.reloadElement);
                dom.show(this.alertIcon);
            }
        },

        getError(event) {
            if (this._player.options.live) {
                return this._player.video ? this._player.video.error : null;
            }

            return event.currentTarget ? event.currentTarget.error : event.error;
        },

        onClickReload(event) {
            this._player.reloadVideo();

            if (this._player.props.isTouch) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        canPlay() {
            if (!this._player || !this._player.video) {
                return false;
            }

            if (this._player.options.live) {
                return this._player.video.canPlayType('application/x-mpegURL') !== '';
            }

            const fileType = this._player.video.currentSrc.split('.').pop();
            const mimeType =
                fileType === 'm3u8' ? 'application/x-mpegURL' : `video/${fileType}`;
            return this._player.video.canPlayType(mimeType) !== '';
        },

        renderSlate() {
            this.element = dom.create(this.template());
            this._container.appendChild(this.element);
            this.registerElements();
        },

        registerElements() {
            this.errorMsgElement = this.element.querySelector(
                '.vhs-plugin-error-msg'
            );
            this.reloadElement = this.element.querySelector(
                '.vhs-plugin-error-reload-icon'
            );
            this.reloadElement.addEventListener(
                'click',
                this.onClickReload.bind(this)
            );
            this.alertIcon = this.element.querySelector('span.vhs-icon-alert');
        },

        getErrorMessage(error) {
            if (error && error.code) {
                if (error.code === error.MEDIA_ERR_ABORTED) {
                    return this.errorMessages.aborted;
                } else if (error.code === error.MEDIA_ERR_NETWORK) {
                    return this.errorMessages.network;
                } else if (error.code === error.MEDIA_ERR_DECODE) {
                    return this.errorMessages.decode;
                } else if (error.code === error.MEDIA_ERR_SRC_NOT_SUPPORTED) {
                    return this.canPlay() ?
                        this.errorMessages.defaultVod :
                        this.errorMessages.srcNotSupported;
                }
            }

            return this._player.options.live ?
                this.errorMessages.defaultLive :
                this.errorMessages.defaultVod;
        },

        mapStateToProps() {
            const state = this._player.store.getState();

            return {
                isAdActive: state.player.isAdActive
            };
        },

        subscribe() {
            this._player.store.subscribe(() => {
                this.props = this.mapStateToProps();
            });
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/error-slate/index.js