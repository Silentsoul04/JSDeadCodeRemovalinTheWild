import dom from 'corleone';
import isMobile from 'src/util/is-mobile';
import apiEvents from '../../player/events';
import template from './template.html';
import './style.scss';

export default {
    name: 'orientation',
    enable: true,
    proto: {
        template,
        namespace: 'vhs-plugin-orientation',
        isRendered: false,
        $icon: null,
        $rotator: null,
        $onboardingText: null,
        compassTimeout: null,
        isOnboardingAnimationInProgress: false,
        hasOnboardingAnimationBeenShown: false,
        animationId: null,
        isActive: false,
        focused: false,
        timer: null,

        _initialize() {
            this.subscribe();
            this._on('plugin:video360:started', this.start.bind(this));
            this._on('plugin:video360:ended', this.destroy.bind(this));
            if (this._player.store.getState().plugins.featureFlags.threeSixtyCover) {
                this._player.on('plugin:cover:compass', () => {
                    this.render();
                    this.showCoverIcon();
                });
            }
            this.animationLoop = this.animationLoop.bind(this);
        },

        subscribe() {
            this._player.store.whenever(
                'plugins.captions.areCaptionsEnabled',
                true,
                () => this.hideOnboardingMessage()
            );
            this._player.store.whenever(
                'plugins.captions.areCaptionsEnabled',
                false,
                () => this.showOnboardingMessage()
            );
        },

        bindEvents() {
            this.$icon.addEventListener('click', () => {
                this.viewer.centralize();
                this.trackClick();
            });

            this.$icon.addEventListener('focus', () => {
                this.focused = true;
            });

            this.$icon.addEventListener('blur', () => {
                this.focused = false;
            });

            this._player.on(apiEvents.EXIT_FULLSCREEN, this.onExitFullscreen);

            const volumeControls = this._container.querySelector(
                '.vhs-plugin-controls-volume-container'
            );
            if (volumeControls) {
                volumeControls.addEventListener('mouseenter', () => {
                    this.$icon.classList.add(`${this.namespace}-icon-hidden`);
                });
                volumeControls.addEventListener('mouseleave', () => {
                    this.$icon.classList.remove(`${this.namespace}-icon-hidden`);
                });
            }

            this.bindKeyboardEvents();
        },

        bindKeyboardEvents() {
            this.$icon.addEventListener('keydown', e => {
                if (!this.viewer || !this.viewer.controls) return;
                if (e.key === 'Enter') {
                    this.viewer.centralize();
                    return;
                }

                const {
                    controls
                } = this.viewer;
                const {
                    onMouseDown,
                    onMouseMove,
                    onMouseUp,
                    rotateStart
                } = controls;
                const {
                    x,
                    y
                } = rotateStart;
                let nextX = x;
                let nextY = y;
                if (e.key === 'ArrowUp' || e.key === 'Up') {
                    nextY += 10;
                } else if (e.key === 'ArrowRight' || e.key === 'Right') {
                    nextX -= 10;
                } else if (e.key === 'ArrowDown' || e.key === 'Down') {
                    nextY -= 10;
                } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
                    nextX += 10;
                } else {
                    return;
                }

                onMouseDown({
                    clientX: x,
                    clientY: y
                });
                onMouseMove({
                    clientX: nextX,
                    clientY: nextY
                });
                onMouseUp();
            });
        },

        onExitFullscreen() {
            window.dispatchEvent(new Event('resize'));
        },

        start(viewer) {
            this.viewer = viewer;
            this.render();

            if (this._player.store.getState().plugins.featureFlags.threeSixtyCover) {
                this.showPlaybackIcon();
            }
            this.animationLoop();
        },

        animationLoop() {
            if (!this.viewer) {
                return;
            }
            const direction = this.viewer.camera.getWorldDirection();
            const theta = Math.atan2(direction.x, direction.z);
            const angle = (theta * 180 / Math.PI + 90) * -1;
            this.$rotator.style.transform = `rotate(${angle}deg)`;
            this.animationId = window.requestAnimationFrame(this.animationLoop);
        },

        destroy() {
            window.cancelAnimationFrame(this.animationId);
            dom.remove(this.element);
            this.isRendered = false;
            this.isRaised = false;
            this.focused = false;
            if (this.timer) {
                this.timer = clearTimeout(this.timer);
            }
        },

        render() {
            if (!this.isRendered) {
                const options = {
                    use360Cover: this._player.store.getState().plugins.featureFlags
                        .threeSixtyCover,
                    onboardingText: this.getOnboardingText()
                };
                this.element = dom.create(this.template(options));
                this.$icon = this.element.querySelector(`.${this.namespace}-icon`);
                this.$rotator = this.$icon.querySelector(`.${this.namespace}-rotator`);
                this.$onboardingText = this.element.querySelector(
                    `.${this.namespace}-onboarding`
                );
                this.bindEvents();
                this._container.appendChild(this.element);
                this.isRendered = true;
            }
        },

        showCoverIcon() {
            this.$icon.classList.add(`${this.namespace}-icon-cover`);
        },

        showPlaybackIcon() {
            this.$icon.classList.remove(`${this.namespace}-icon-cover`);
            if (this.isActive) {
                this.raiseCompass();
            }
            if (!this.hasOnboardingAnimationBeenShown) {
                this.animateOnboardingSequence();
            }
        },

        animateOnboardingSequence() {
            this.highlightIcon();
            this.isOnboardingAnimationInProgress = true;
            const $eyes = this.$icon.querySelector(`.${this.namespace}-eyes`);
            $eyes.classList.add(`${this.namespace}-blink`);
            this.element.classList.add(
                `${this.namespace}-onboarding-message-showing`
            );
            this.$onboardingText.classList.add(
                `${this.namespace}-onboarding-message-shown`
            );

            const onAnimationEnd = () => {
                this.$onboardingText.removeEventListener(
                    'animationend',
                    onAnimationEnd
                );
                this.isOnboardingAnimationInProgress = false;
                this.hasOnboardingAnimationBeenShown = true;
                this.element.classList.remove(
                    `${this.namespace}-onboarding-message-showing`
                );
                this.fadeIcon();
            };

            this.$onboardingText.addEventListener('animationend', onAnimationEnd);
        },

        hideOnboardingMessage() {
            if (this.isOnboardingAnimationInProgress) {
                this.$onboardingText.classList.add(`${this.namespace}-hidden`);
                this.element.classList.remove(
                    `${this.namespace}-onboarding-message-showing`
                );
            }
        },

        showOnboardingMessage() {
            if (this.isOnboardingAnimationInProgress) {
                this.$onboardingText.classList.remove(`${this.namespace}-hidden`);
                this.element.classList.add(
                    `${this.namespace}-onboarding-message-showing`
                );
            }
        },

        _active() {
            this.isActive = true;
            if (
                this._player.store.getState().plugins.featureFlags.threeSixtyCover &&
                this.$icon !== null
            ) {
                this.raiseCompass();
                this.highlightIcon();
            }
        },

        _idle() {
            this.isActive = false;
            if (
                this._player.store.getState().plugins.featureFlags.threeSixtyCover &&
                this.$icon !== null
            ) {
                this.lowerCompass();
                if (!this.isOnboardingAnimationInProgress) {
                    this.fadeIcon();
                }
            }
        },

        _play() {
            if (this.focused) {
                this.timer = setTimeout(() => {
                    this.timer = clearTimeout(this.timer);
                    this.$icon.focus();
                }, 0);
            }
        },

        raiseCompass() {
            if (!this.isRaised) {
                window.clearTimeout(this.compassTimeout);
                this.$icon.classList.add(`${this.namespace}-raised`);
                this.$onboardingText.classList.add(`${this.namespace}-raised`);
                this.isRaised = true;
            }
        },

        lowerCompass() {
            if (this.isRaised) {
                this.isRaised = false;
                this.compassTimeout = window.setTimeout(() => {
                    this.$icon.classList.remove(`${this.namespace}-raised`);
                    this.$onboardingText.classList.remove(`${this.namespace}-raised`);
                }, 333);
            }
        },

        fadeIcon() {
            if (this.$icon) {
                this.$icon.classList.add(`${this.namespace}-icon-faded`);
            }
        },

        highlightIcon() {
            if (this.$icon) {
                this.$icon.classList.remove(`${this.namespace}-icon-faded`);
            }
        },

        getOnboardingText() {
            let text = '';
            if (isMobile()) {
                text = 'Move your device to explore.';
            } else {
                text = 'Click and drag your mouse to explore.';
            }
            return text;
        },

        trackClick() {
            const trackingOptions = {
                eventName: '360-compass-click'
            };
            this._player.emit('plugin:tagx:track', trackingOptions);
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/orientation/index.js