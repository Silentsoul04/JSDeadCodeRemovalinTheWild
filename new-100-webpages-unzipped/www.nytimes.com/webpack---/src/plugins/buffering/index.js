import clone from 'clone';
import dom from 'corleone';
import safeChain from 'safe-chain';
import Logger from 'src/util/logger';
import actions from './actions';
import reducer from './reducer';
import template from './template.html';
import './styles.scss';

const logger = new Logger('vhs:plugin:buffering');

function mapStateToProps(state, prevProps) {
    return { ...prevProps,
        ...state.plugins.buffering
    };
}

export default {
    name: 'buffering',
    enable: true,
    proto: {
        template,
        actions,
        _media_element_mounted() {
            this.element = dom.create(this.template());
            this._container.appendChild(this.element);

            const globalState = this._player.store.getState();
            const shouldShow = !safeChain(globalState, 'player.options.autoplay') &&
                safeChain(globalState, 'player.options.cover');
            this._player.store.dispatch(this.actions.setInitialBuffer(shouldShow));

            this.bindEvents();
            this.checkBufferState();
        },

        _loadstart() {
            this._player.store.dispatch(this.actions.setInitialBuffer(true));
            this.checkBufferState();
        },

        _initialize() {
            const initialProps = {
                initialBuffer: true
            };
            this.props = mapStateToProps(this._player.store.getState(), initialProps);
            this.subscribe();
        },

        _ad_impression() {
            this.bufferFullFromPlayerEvent();
        },

        _play() {
            this.bufferFullFromPlayerEvent();
        },

        _ad_started() {
            this.bufferFullFromPlayerEvent();
        },

        _error() {
            this.bufferFullFromPlayerEvent();
        },

        _browser_not_supported() {
            this.bufferFullFromPlayerEvent();
        },

        _browser_live_not_supported() {
            this.bufferFullFromPlayerEvent();
        },

        _rendition_not_found() {
            this.bufferFullFromPlayerEvent();
        },

        bindEvents() {
            if (!this._player.video) return;

            this._player.video.addEventListener(
                'canplay',
                this.checkBufferState.bind(this)
            );
            this._player.video.addEventListener(
                'canplaythrough',
                this.checkBufferState.bind(this)
            );
            this._player.video.addEventListener(
                'seeked',
                this.checkBufferState.bind(this)
            );
            this._player.video.addEventListener(
                'seeking',
                this.checkBufferState.bind(this)
            );
            this._player.video.addEventListener(
                'waiting',
                this.checkBufferState.bind(this)
            );
            this._player.video.addEventListener(
                'emptied',
                this.checkBufferState.bind(this)
            );
            this._player.video.addEventListener(
                'loadeddata',
                this.checkBufferState.bind(this)
            );
        },

        onBuffering() {
            logger.log('video buffering');

            if (this.element) {
                dom.show(this.element);
            }
        },

        onBufferFull() {
            logger.log('video bufferfull');

            if (this.element) {
                dom.hide(this.element);
            }
        },

        bufferFullFromPlayerEvent() {
            this._player.store.dispatch(this.actions.setInitialBuffer(false));
            this.onBufferFull();
        },

        checkBufferState() {
            const {
                paused,
                ended,
                readyState
            } = this._player.video;
            const isBuffering = !paused && !ended && readyState < 3;
            if (isBuffering || this.props.initialBuffer) {
                this.onBuffering();
            } else {
                this.onBufferFull();
            }
        },

        subscribe() {
            this._player.store.subscribe(() => {
                this.props = mapStateToProps(
                    this._player.store.getState(),
                    clone(this.props)
                );
            });

            this._player.store.whenever(
                'player.isMediaBuffering',
                () => true,
                isMediaBuffering => {
                    if (isMediaBuffering) {
                        dom.show(this.element);
                    } else {
                        dom.hide(this.element);
                    }
                }
            );

            this._player.store.whenever('player.isPlaybackReady', true, () => {
                this.onBufferFull();
            });
        },

        reducer() {
            return {
                buffering: reducer
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/buffering/index.js