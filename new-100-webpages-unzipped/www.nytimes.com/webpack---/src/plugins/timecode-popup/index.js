import dom from 'corleone';
import safeChain from 'safe-chain';
import preloadImg from 'async-preload-img';
import template from './template.html';
import './styles.scss';

export default {
    name: 'timecodePopup',
    enable: true,
    proto: {
        template,
        _initialize() {
            this.rendered = false;
            this.shouldTurnOnThumbsPromise = null;
            this.bindEvents();
        },

        _loadstart() {
            if (this.progressEl) {
                dom.remove(this.element);
                return this.render(this.progressEl).then(() => {
                    this.element.style.display = 'none';
                });
            }
            return Promise.resolve();
        },

        bindEvents() {
            if (this._player.props.isTouch) {
                this.bindTouchEvents();
            } else {
                this.bindMouseEvents();
            }
        },

        bindTouchEvents() {
            this._on('plugin:controls:progress:touchstart', e => {
                this.onMouseEnter(e);
            });
            this._on('plugin:controls:progress:touchend', () => {
                this.onMouseLeave();
            });
            this._on('plugin:controls:progress:touchmove', e => {
                this.onMouseMove(e.time, e.formattedTime);
            });
        },

        bindMouseEvents() {
            this._on('plugin:controls:progress:mouseenter', e => {
                this.onMouseEnter(e);
            });
            this._on('plugin:controls:progress:mouseleave', () => {
                this.onMouseLeave();
            });
            this._on('plugin:controls:progress:mousemove', e => {
                this.onMouseMove(e.time, e.formattedTime);
            });
        },

        onMouseEnter(progressEl) {
            if (!this.rendered) {
                return this.render(progressEl).then(() => {
                    this.element.style.display = 'block';
                });
            }
            this.element.style.display = 'block';
            return Promise.resolve();
        },

        onMouseLeave() {
            this.element.style.display = 'none';
        },

        onMouseMove(time, formattedTime) {
            if (!this.rendered) {
                return Promise.resolve();
            }

            const position = this.getBoxPosition(time, this.progressEl);
            this.element.style.left = `${position}%`;
            this.positionEl.innerHTML = formattedTime;

            return this.shouldTurnOnThumbs().then(shouldTurnOnThumbs => {
                if (shouldTurnOnThumbs) {
                    this.updateThumb(time);
                }
                this.element.style.display = 'block';
            });
        },

        getBoxPosition(time, progressEl) {
            const duration = this._player.store.getState().player.media.duration;
            const deltaEl =
                100 * (this.element.clientWidth / 2) / progressEl.clientWidth;
            const initPosition = parseFloat((time / duration * 100).toFixed(2));
            return initPosition - deltaEl;
        },

        render(progressEl) {
            this.progressEl = progressEl;
            this.element = dom.create(this.template());
            this.element.style.display = 'none';
            this.progressEl.appendChild(this.element);
            this.positionEl = this.element.querySelector(
                '.nytd-player-timecode-popup-position'
            );
            return this.shouldTurnOnThumbs().then(shouldTurnOnThumbs => {
                if (shouldTurnOnThumbs) {
                    this.setThumbsMode();
                }
                this.rendered = true;
                this.element.style.display = 'block';
            });
        },

        getThumbRendition() {
            const thumbsHost =
                this._player.options.env === 'test' ?
                'https://vp.stg.nyt.com' :
                'https://vp.nyt.com';
            const state = this._player.store.getState();
            if (thumbsHost && state.player.media && state.player.media.id) {
                return `${thumbsHost}/thumbnail/${state.player.media.id}/sprite/72/2`;
            }
            return undefined;
        },

        updateThumb(time) {
            // move thumb sprite images accordingly. We are requesting a 72p frame
            // every two seconds on getThumbRendition(). Almost all our videos are 16x9,
            // so width is 126. We are summing up 2 pixels for the popup borders.
            const thumbPositionX = Math.floor(time / 2) * 128;
            const thumbPositionY = Math.floor(time / 20) * 72 + 2;
            this.element.style.backgroundPosition = `-${thumbPositionX}px -${thumbPositionY}px`;
        },

        shouldTurnOnThumbs() {
            if (this.shouldTurnOnThumbsPromise) {
                return this.shouldTurnOnThumbsPromise;
            }

            this.shouldTurnOnThumbsPromise = new Promise(resolve => {
                preloadImg(this.getThumbRendition())
                    .then(() => {
                        const state = this._player.store.getState();
                        const type = safeChain(state, 'player.options.type') || '';
                        const shouldTurnOnThumbs =
                            state.player.media &&
                            !state.player.media.is360 &&
                            !state.player.media.live &&
                            type.indexOf('article') !== -1;
                        resolve(shouldTurnOnThumbs);
                    })
                    .catch(() => {
                        resolve(false);
                    });
            });

            return this.shouldTurnOnThumbsPromise;
        },

        setThumbsMode() {
            const thumbRendition = this.getThumbRendition();
            this.element.classList.add('nytd-player-timecode-thumb-popup');
            this.positionEl.classList.add('nytd-player-timecode-thumb-position');
            this.element.style.backgroundImage = `url(${thumbRendition})`;
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/timecode-popup/index.js