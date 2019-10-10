import clone from 'clone';
import dom from 'corleone';
import {
    debounce
} from 'monocle-decorators';
import safeChain from 'safe-chain';
import captionsActions from 'src/plugins/captions/actions';
import apiEvents from 'src/player/events';
import formatDuration from 'src/util/format-duration';
import isIE11 from 'src/util/is-ie11';
import reducer from './reducer';
import actions from './actions';
import template from './template.html';
import './style.scss';

function mapStateToProps(state, prevProps) {
    const {
        instanceId,
        isTouch,
        isMediaHD,
        isMediaMuted,
        volume
    } = state.player;
    const progress = (state.player.media && state.player.media.progress) || 0;
    const isLive = Boolean(
        safeChain(state, 'plugins.controls.isLive') ||
        safeChain(state, 'player.options.live')
    );
    return {
        ...prevProps,
        ...state.plugins.controls,
        isLive,
        instanceId,
        isTouch,
        isMediaHD,
        isMediaMuted,
        progress,
        volume
    };
}

export default {
    name: 'controls',
    enable: true,
    proto: {
        template,
        _initialize() {
            this.props = mapStateToProps(this._player.store.getState(), {});
            this.triggerControlsSizeChangedDebounced = debounce(
                this.triggerControlsSizeChanged.bind(this),
                150
            );
            this.subscribeToStore();
            this.render();

            // usage:
            // player.emit('plugin:controls:enable');
            // player.emit('plugin:controls:disable');
            this._on('enable', this.enable.bind(this));
            this._on('disable', this.disable.bind(this));
        },

        reducer() {
            return {
                controls: reducer
            };
        },

        subscribeToStore() {
            this._player.store.subscribe(() => {
                const lastProps = this.props;
                this.props = mapStateToProps(
                    this._player.store.getState(),
                    clone(this.props)
                );
                if (this.props.duration !== lastProps.duration) {
                    this.updateDuration();
                }
            });
            this._player.store.whenever(
                'plugins.captions.areCaptionsAvailable',
                true,
                () => this.enableCaptions()
            );
            this._player.store.whenever(
                'plugins.captions.areCaptionsAvailable',
                false,
                () => this.disableCaptions()
            );
            this._player.store.whenever(
                'plugins.captions.areCaptionsEnabled',
                true,
                () => this.captionsOn()
            );
            this._player.store.whenever(
                'plugins.captions.areCaptionsEnabled',
                false,
                () => this.captionsOff()
            );

            const unsubscribe = this._player.store.whenever(
                'plugins.fullscreen.isApiAvailable',
                false,
                () => {
                    this.ui.fullscreen.remove();
                    unsubscribe();
                }
            );
        },

        _media_element_mounted() {
            if (this.props.controlsEnabled) {
                this.setupControls();
            }
        },

        _loadstart() {
            this._media_element_mounted();
            this._pause();
        },

        _ended() {
            const button = this.ui.play;
            button.classList.remove('vhs-icon-pause');
            button.classList.add('vhs-icon-play');
            button.setAttribute('title', 'Play Video');
            button.setAttribute('aria-label', 'Play Video');
        },

        _idle() {
            this.ui.controls.classList.add('vhs-controls-hidden');
            this.ui.gradient.classList.add('vhs-controls-hidden');
            this.ui.controls.classList.remove('vhs-controls-active');
            this.ui.gradient.classList.remove('vhs-controls-active');
        },

        _active() {
            this.ui.controls.classList.add('vhs-controls-enabled');
            this.ui.controls.classList.add('vhs-controls-active');
            this.ui.gradient.classList.add('vhs-controls-active');
            this.ui.controls.classList.remove('vhs-controls-hidden');
            this.ui.gradient.classList.remove('vhs-controls-hidden');
        },

        _play() {
            const button = this.ui.play;
            this.ui.controls.classList.add('vhs-controls-enabled');
            button.classList.remove('vhs-icon-play');
            button.classList.add('vhs-icon-pause');
            button.setAttribute('title', 'Pause Video');
            button.setAttribute('aria-label', 'Pause Video');

            // media playback causes the video container to gain focus
            // so we need to set the focus back to the button that
            // triggered playback on the next tick
            const lastFocusedElement = this.focusedElement;
            if (lastFocusedElement) {
                setTimeout(() => {
                    lastFocusedElement.focus();
                }, 0);
            }
        },

        _pause() {
            const button = this.ui.play;
            button.classList.remove('vhs-icon-pause');
            button.classList.add('vhs-icon-play');
            button.setAttribute('title', 'Play Video');
            button.setAttribute('aria-label', 'Play Video');
        },

        _hd_on() {
            const button = this.ui.hd;
            button.classList.remove('vhs-icon-hd-off');
            button.classList.add('vhs-icon-hd-on');
            button.setAttribute('title', 'Turn HD Off');
            button.setAttribute('aria-label', 'Turn HD Off');
        },

        _hd_off() {
            const button = this.ui.hd;
            button.classList.remove('vhs-icon-hd-on');
            button.classList.add('vhs-icon-hd-off');
            button.setAttribute('title', 'Turn HD On');
            button.setAttribute('aria-label', 'Turn HD On');
        },

        _go_fullscreen() {
            const button = this.ui.fullscreen;
            button.classList.remove('vhs-icon-resize-full');
            button.classList.add('vhs-icon-resize-default');
            button.setAttribute('title', 'Exit Fullscreen');
            button.setAttribute('aria-label', 'Exit Fullscreen');
        },

        _exit_fullscreen() {
            const button = this.ui.fullscreen;
            button.classList.remove('vhs-icon-resize-default');
            button.classList.add('vhs-icon-resize-full');
            button.setAttribute('title', 'Enter Fullscreen');
            button.setAttribute('aria-label', 'Enter Fullscreen');
        },

        _mute() {
            this.updateVolumeUI();
        },

        _volume_change() {
            this.updateVolumeUI();
        },

        _progress(e) {
            if (e.bufferEnd) {
                const bufferPosition = this.getSeekPosition(e.bufferEnd);
                this.ui.progressBuffer.style.width = `${bufferPosition}%`;
            }
        },

        _time_update(time) {
            if (!this.props.isMouseDown) {
                this.updateProgressUI(time);
            }
        },

        _ad_started() {
            this.setupAdMode();
            this._play();
        },

        _ad_paused() {
            this._pause();
        },

        _ad_resumed() {
            this._play();
        },

        _ad_completed() {
            if (this.props.isLive) {
                this.setupLiveMode();
            } else {
                this.setupVodMode();
            }
        },

        _ad_skipped() {
            this._ad_completed();
        },

        enable() {
            if (!this.element) {
                return;
            }
            this.ui.gradient.style.display = 'block';
        },

        disable() {
            if (!this.element) {
                return;
            }
            this.ui.controls.classList.remove('vhs-controls-enabled');
            this.ui.gradient.style.display = 'none';
        },

        setupControls() {
            this.enable();

            if (this.props.isMediaHD) {
                this._hd_on();
            }

            this.updateVolumeUI();

            if (this.props.isTouch) {
                this.ui.controls.classList.remove('vhs-controls-no-touch');
                this.ui.gradient.classList.remove('vhs-controls-no-touch');
                this.ui.marker.classList.add(
                    'vhs-plugin-controls-progress-marker--active'
                );
            }

            if (isIE11()) {
                this.fixStyleForIE11();
            }

            if (this.props.isLive) {
                this.setupLiveMode();
            } else {
                this.setupVodMode();
            }

            if (this.props.hasExternalSource) {
                this.ui.hd.style.display = 'none';
            }

            this.triggerControlsSizeChanged();
        },

        setupLiveMode() {
            this.ui.hd.style.display = 'none';
            this.ui.progress.classList.add('vhs-progress-hidden');
            this.ui.ad.style.display = 'none';
            this.ui.gradient.style.display = 'block';
            this.ui.messageContainer.classList.add('vhs-message-container-enabled');
            this.ui.live.style.display = 'flex';
            this._player.store.dispatch(captionsActions.captionsAvailable(false));
        },

        setupAdMode() {
            this.ui.hd.style.display = 'none';
            this.ui.progress.classList.add('vhs-progress-hidden');
            this.ui.live.style.display = 'none';
            this.ui.messageContainer.classList.add('vhs-message-container-enabled');
            this.ui.ad.style.display = 'block';
            this.ui.gradient.style.display = 'none';
            this._player.store.dispatch(captionsActions.captionsAvailable(false));
        },

        setupVodMode() {
            this.ui.messageContainer.classList.remove(
                'vhs-message-container-enabled'
            );
            if (this.props.hasExternalSource) {
                this.ui.hd.style.display = 'none';
            } else {
                this.ui.hd.style.display = 'block';
            }
            this.ui.progress.classList.remove('vhs-progress-hidden');
            this.ui.gradient.style.display = 'block';
        },

        levelTypeChange(levelType) {
            switch (levelType) {
                case 'live':
                    this.setupLiveMode();
                    break;
                case 'vod':
                    this.setupVodMode();
                    break;
                default:
                    break;
            }
        },

        updateProgressUI(time) {
            const progressTime = this.ui.progressTime;
            const marker = this.ui.marker;
            const currentTime = this.ui.currentTime;
            const progressSlider = this.ui.progressSlider;

            const percent = this.getSeekPosition(time);
            const formattedProgress = formatDuration(time);
            const formattedDuration = formatDuration(this.props.duration);

            progressTime.style.width = `${percent}%`;
            marker.style.left = `${percent}%`;
            currentTime.textContent = formattedProgress;
            progressSlider.setAttribute('aria-valuenow', time);
            progressSlider.setAttribute(
                'aria-valuetext',
                `${formattedProgress} of ${formattedDuration}`
            );
        },

        getSeekPosition(time) {
            const position = time / this.props.duration * 100;
            const trimmedPosition = Math.max(0, Math.min(position, 100));
            return parseFloat(trimmedPosition.toFixed(2));
        },

        getTimePosition(event) {
            const pageX = this.props.isTouch ?
                event.changedTouches[0].pageX :
                event.pageX;
            const x = pageX - dom.offset(this.ui.progressTimeline).left;
            const time =
                this.props.duration / this.ui.progressTimeline.clientWidth * x;
            const trimmedTime = Math.max(0, Math.min(time, this.props.duration));
            return trimmedTime;
        },

        triggerControlsSizeChanged() {
            if (
                this._player.emit &&
                (this.width !== this.ui.controls.clientWidth ||
                    this.height !== this.ui.controls.clientHeight)
            ) {
                this.width = this.ui.controls.clientWidth;
                this.height = this.ui.controls.clientHeight;
                this._player.store.dispatch(actions.heightChange(this.height));
                this._player.emit(apiEvents.CONTROLS_SIZE_CHANGED, {
                    width: this.width,
                    height: this.height
                });
            }
        },

        render() {
            this.element = dom.create(this.template());
            this._container.appendChild(this.element);
            this.registerElements();
            this.bindEvents();
        },

        registerElements() {
            const prefix = '.vhs-plugin-controls';
            this.ui = {
                controls: this.element.querySelector(`${prefix}`),
                gradient: this.element.querySelector(`${prefix}-gradient`),
                play: this.element.querySelector(`${prefix}-play`),
                fullscreen: this.element.querySelector(`${prefix}-fullscreen`),
                volumeContainer: this.element.querySelector(
                    `${prefix}-volume-container`
                ),
                volume: this.element.querySelector(`${prefix}-volume`),
                volumeSliderContainer: this.element.querySelector(
                    `${prefix}-volume-slider-container`
                ),
                volumeSliderFill: this.element.querySelector(
                    `${prefix}-volume-slider-fill`
                ),
                volumeSlider: this.element.querySelector(`${prefix}-volume-slider`),
                messageContainer: this.element.querySelector(
                    `${prefix}-message-container`
                ),
                progress: this.element.querySelector(`${prefix}-progress`),
                progressSlider: this.element.querySelector(`${prefix}-progress-slider`),
                progressTimeline: this.element.querySelector(
                    `${prefix}-progress-timeline`
                ),
                progressBuffer: this.element.querySelector(`${prefix}-progress-buffer`),
                progressTime: this.element.querySelector(`${prefix}-progress-time`),
                marker: this.element.querySelector(`${prefix}-progress-marker`),
                duration: this.element.querySelector(`${prefix}-duration`),
                currentTime: this.element.querySelector(`${prefix}-current-time`),
                cc: this.element.querySelector(`${prefix}-cc`),
                hd: this.element.querySelector(`${prefix}-hd`),
                live: this.element.querySelector(`${prefix}-live-label`),
                ad: this.element.querySelector(`${prefix}-ad-label`)
            };
        },

        bindEvents() {
            this.bindCommonEvents();
            if (this.props.isTouch) {
                this.bindTouchEvents();
            } else {
                this.bindMouseEvents();
                this.bindKeyboardEvents();
            }
        },

        bindCommonEvents() {
            this.ui.play.addEventListener('click', () => {
                this._player.togglePlay();
            });
            this.ui.fullscreen.addEventListener('click', () => {
                this._player.toggleFullscreen();
            });
            this.ui.volume.addEventListener('click', () => {
                this.handleVolumeToggle();
            });
            this.ui.cc.addEventListener('click', () => {
                this.toggleCC();
            });

            // IE11 doesn't fire "input" events; instead it fires "change" in the way that "input" is
            // supposed to be fired. We can stop listening to "change" event once we stop supporting IE11.
            this.ui.volumeSlider.addEventListener('input', e => {
                this.handleVolumeChange(e);
            });
            this.ui.volumeSlider.addEventListener('change', e => {
                this.handleVolumeChange(e);
            });
            this.ui.hd.addEventListener('click', () => {
                this._player.toggleHD();
            });
            window.addEventListener('resize', () => {
                this.triggerControlsSizeChangedDebounced();
            });

            this._player.on(
                apiEvents.LEVEL_TYPE_CHANGE,
                this.levelTypeChange.bind(this)
            );
        },

        bindTouchEvents() {
            this.ui.progressTimeline.addEventListener('touchstart', e => {
                this.progressTouchStart(e);
            });
            this.ui.progressTimeline.addEventListener('touchend', e => {
                this.progressTouchEnd(e);
            });
            this.ui.progressTimeline.addEventListener('touchmove', e => {
                this.progressTouchMove(e);
            });
        },

        bindMouseEvents() {
            this.ui.volumeContainer.addEventListener('mouseenter', () => {
                this.volumeActive();
            });
            this.ui.volumeContainer.addEventListener('mouseleave', () => {
                this.volumeIdle();
            });
            this.ui.progressTimeline.addEventListener('mouseenter', () => {
                this.progressMouseEnter();
            });
            this.ui.progressTimeline.addEventListener('mouseleave', e => {
                this.progressMouseLeave(e);
            });
            this.ui.progressTimeline.addEventListener('mouseup', e => {
                this.progressMouseUp(e);
            });
            this.ui.progressTimeline.addEventListener('mousedown', e => {
                this.progressMouseDown(e);
            });
            this.ui.progressTimeline.addEventListener('mousemove', e => {
                this.progressMouseMove(e);
            });
            document.addEventListener('mousemove', e => {
                this.documentMouseMove(e);
            });
            document.addEventListener('mouseup', e => {
                this.documentMouseUp(e);
            });

            // prevent focus() being called on button/input click
            // to avoid :focus styles (for a11y) being applied on click
            const elements = [
                this.ui.play,
                this.ui.progressSlider,
                this.ui.cc,
                this.ui.hd,
                this.ui.volume,
                this.ui.fullscreen
            ];

            const onMousedown = e => {
                e.preventDefault();
                if (this.focusedElement) {
                    this.focusedElement.blur();
                    this.focusedElement = null;
                }
            };

            elements.forEach(element => {
                element.addEventListener('mousedown', onMousedown);
            });

            const onVolumeSliderMousedown = () => {
                // set a flag to indicate this has been clicked
                // we cannot stop the event's propagation because we need to
                // consume the input events to change the volume
                this.volumeSliderClicked = true;

                if (this.focusedElement) {
                    this.focusedElement.blur();
                    this.focusedElement = null;
                }
            };
            this.ui.volumeSlider.addEventListener(
                'mousedown',
                onVolumeSliderMousedown
            );
        },

        bindKeyboardEvents() {
            // get all focusable elements
            const elements = [
                this.ui.play,
                this.ui.progressSlider,
                this.ui.cc,
                this.ui.hd,
                this.ui.volume,
                this.ui.fullscreen
            ];

            // attach focus and blur events
            const onBlur = () => {
                this._player.setActiveState();
                this.focusedElement = null;
            };

            elements.forEach(element => {
                element.addEventListener('focus', () => {
                    this._player.setActiveState();
                    this.focusedElement = element;
                });
                element.addEventListener('blur', onBlur);
            });

            const onVolumeSliderFocus = () => {
                if (this.volumeSliderClicked) {
                    // this is a mouse event, so do undo the focus styles
                    this.ui.volumeSlider.blur();

                    this.volumeSliderClicked = false;
                } else {
                    this.focusedElement = this.ui.volumeSlider;
                }
                this._player.setActiveState();
                this.volumeActive();
            };
            const onVolumeSliderBlur = () => {
                if (!this.volumeSliderClicked) {
                    this.volumeIdle();
                    this._player.setIdleState();
                }
                this.focusedElement = null;
            };
            this.ui.volumeSlider.addEventListener('focus', onVolumeSliderFocus);
            this.ui.volumeSlider.addEventListener('blur', onVolumeSliderBlur);

            // per-button keydown handlers
            const onPlayKeydown = e => {
                this._player.setActiveState();
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this._player.togglePlay();
                }
            };

            const onProgressSliderKeydown = e => {
                this._player.setActiveState();
                if (
                    e.key === 'ArrowRight' ||
                    e.key === 'Right' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'Up'
                ) {
                    e.preventDefault();
                    this._player.seek(
                        Math.min(this.props.progress + 5, this.props.duration)
                    );
                } else if (
                    e.key === 'ArrowLeft' ||
                    e.key === 'Left' ||
                    e.key === 'ArrowDown' ||
                    e.key === 'Down'
                ) {
                    e.preventDefault();
                    this._player.seek(Math.max(this.props.progress - 5, 0));
                }
            };

            const onCCKeydown = e => {
                this._player.setActiveState();
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.toggleCC();
                }
            };

            const onHDKeydown = e => {
                this._player.setActiveState();
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this._player.toggleHD();
                }
            };

            const onVolumeToggleKeydown = e => {
                this._player.setActiveState();
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleVolumeToggle();
                }
            };

            const onVolumeSliderKeydown = () => {
                this._player.setActiveState();
                this.volumeActive();
            };

            const onFullscreenKeydown = e => {
                this._player.setActiveState();
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this._player.toggleFullscreen();
                }
            };

            this.ui.play.addEventListener('keydown', onPlayKeydown);
            this.ui.progressSlider.addEventListener(
                'keydown',
                onProgressSliderKeydown
            );
            this.ui.cc.addEventListener('keydown', onCCKeydown);
            this.ui.hd.addEventListener('keydown', onHDKeydown);
            this.ui.volume.addEventListener('keydown', onVolumeToggleKeydown);
            this.ui.volumeSlider.addEventListener('keydown', onVolumeSliderKeydown);
            this.ui.fullscreen.addEventListener('keydown', onFullscreenKeydown);
        },

        documentMouseMove(e) {
            if (this.props.isMouseDown) {
                this.progressMouseMove(e);
            }
        },

        documentMouseUp(e) {
            if (this.props.isMouseDown) {
                this._player.store.dispatch(actions.mouseDown(false));
                this._player.seek(this.getTimePosition(e));
                this.progressMouseLeave(e);
                this.progressMouseUp(e);
            }
        },

        progressTouchStart(e) {
            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
            this._emit('progress:touchstart', this.ui.progressTimeline);
            this._player.store.dispatch(actions.wasPlaying(!this._player.isPaused()));
            this._player.pause();
        },

        progressTouchEnd(e) {
            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
            this._emit('progress:touchend');
            this._player.seek(this.getTimePosition(e));
            if (this.props.wasPlaying) {
                this._player.play();
            }
        },

        progressTouchMove(e) {
            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
            const time = this.getTimePosition(e);
            this._emit('progress:touchmove', {
                time,
                formattedTime: formatDuration(time)
            });
            this.updateProgressUI(time);
        },

        progressMouseEnter() {
            this._emit('progress:mouseenter', this.ui.progressTimeline);
            const marker = this.ui.marker;
            marker.classList.add('vhs-plugin-controls-progress-marker--active');
        },

        progressMouseLeave() {
            this._emit('progress:mouseleave');
            const marker = this.ui.marker;
            marker.classList.remove('vhs-plugin-controls-progress-marker--active');
        },

        progressMouseUp(e) {
            const time = this.getTimePosition(e);
            this._player.store.dispatch(actions.mouseDown(false));
            this.ui.marker.classList.remove(
                'vhs-plugin-controls-progress-marker-grabbing'
            );
            this._player.seek(time);
            if (this.props.wasPlaying && this._player.isPaused()) {
                if (time < this.props.duration) {
                    this._player.togglePlay();
                }
                this._player.store.dispatch(actions.wasPlaying(false));
            }
        },

        progressMouseDown(e) {
            this._player.store.dispatch(actions.mouseDown(true));
            this.ui.marker.classList.add(
                'vhs-plugin-controls-progress-marker-grabbing'
            );
            this.progressMouseMove(e);
        },

        progressMouseMove(e) {
            const time = this.getTimePosition(e);
            this._emit('progress:mousemove', {
                time,
                formattedTime: formatDuration(time)
            });
            if (this.props.isMouseDown) {
                if (!this._player.isPaused()) {
                    this._player.togglePlay();
                    this._player.store.dispatch(actions.wasPlaying(true));
                }
                this.updateProgressUI(time);
            }
        },

        updateDuration() {
            const {
                duration,
                progress
            } = this.props;
            const formattedDuration = formatDuration(duration);
            const formattedProgress = formatDuration(progress);

            this.ui.duration.textContent = formattedDuration;
            this.ui.progressSlider.setAttribute('aria-valuemax', this.props.duration);
            this.ui.progressSlider.setAttribute(
                'aria-valuetext',
                `${formattedProgress} of ${formattedDuration}`
            );
        },

        toggleCC() {
            const eventName = this.props.captionsEnabled ?
                'captions-off' :
                'captions-on';
            this._player.emit('plugin:tagx:track', {
                eventName
            });
            if (this.props.captionsEnabled) {
                this._player.store.dispatch(captionsActions.shouldDisableCaptions());
            } else {
                this._player.store.dispatch(captionsActions.shouldEnableCaptions());
            }
        },

        enableCaptions() {
            const store = this._player.store;
            this.ui.cc.classList.remove('vhs-icon-cc-disabled');
            if (store.getState().player.options.captionsDefaultOn) {
                store.dispatch(captionsActions.shouldEnableCaptions());
            }
        },

        disableCaptions() {
            this.ui.cc.classList.add('vhs-icon-cc-disabled');
        },

        captionsOn() {
            const button = this.ui.cc;
            button.classList.remove('vhs-icon-cc-off');
            button.classList.add('vhs-icon-cc-on');
            button.setAttribute('title', 'Turn Off Closed Captions');
            button.setAttribute('aria-label', 'Turn Off Closed Captions');
        },

        captionsOff() {
            const button = this.ui.cc;
            button.classList.remove('vhs-icon-cc-on');
            button.classList.add('vhs-icon-cc-off');
            button.setAttribute('title', 'Turn On Closed Captions');
            button.setAttribute('aria-label', 'Turn On Closed Captions');
        },

        handleVolumeToggle() {
            if (this.props.isMediaMuted && this.props.volume === 0) {
                this._player.setVolume(0.75);
                this._player.mute(false);
            } else {
                this._player.toggleVolume();
            }
        },

        handleVolumeChange(e) {
            const volume = e.target.value;
            this._player.setVolume(volume / 100);
            this._player.mute(volume === '0');
        },

        updateVolumeUI() {
            const volume = this.props.isMediaMuted ? 0 : this.props.volume;

            if (volume > 0.5) {
                this.ui.volume.classList.remove('vhs-icon-volume-half');
                this.ui.volume.classList.remove('vhs-icon-volume-off');
                this.ui.volume.classList.add('vhs-icon-volume-on');
                this.ui.volume.setAttribute('title', 'Mute');
                this.ui.volume.setAttribute('aria-label', 'Mute');
            } else if (volume > 0) {
                this.ui.volume.classList.remove('vhs-icon-volume-on');
                this.ui.volume.classList.remove('vhs-icon-volume-off');
                this.ui.volume.classList.add('vhs-icon-volume-half');
                this.ui.volume.setAttribute('title', 'Mute');
                this.ui.volume.setAttribute('aria-label', 'Mute');
            } else {
                this.ui.volume.classList.remove('vhs-icon-volume-on');
                this.ui.volume.classList.remove('vhs-icon-volume-half');
                this.ui.volume.classList.add('vhs-icon-volume-off');
                this.ui.volume.setAttribute('title', 'Unmute');
                this.ui.volume.setAttribute('aria-label', 'Unmute');
            }

            this.updateVolumeSliderUI();
        },

        updateVolumeSliderUI() {
            const volume = this.props.isMediaMuted ? 0 : this.props.volume * 100;

            this.ui.volumeSliderFill.style.width = `${volume}%`;
            this.ui.volumeSlider.setAttribute('value', volume);
            this.ui.volumeSlider.setAttribute('aria-valuenow', volume);
        },

        volumeActive() {
            this.ui.volumeSliderContainer.classList.remove(
                'vhs-plugin-controls-volume-slider-hide'
            );
            this.ui.volumeSliderContainer.classList.add(
                'vhs-plugin-controls-volume-slider-show'
            );
        },

        volumeIdle() {
            this.ui.volumeSliderContainer.classList.remove(
                'vhs-plugin-controls-volume-slider-show'
            );
            this.ui.volumeSliderContainer.classList.add(
                'vhs-plugin-controls-volume-slider-hide'
            );
        },

        fixStyleForIE11() {
            this.ui.volumeSlider.style.border = 'none';
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/controls/index.js