import pipe from 'tubo';
import clone from 'clone';
import safeChain from 'safe-chain';
import isOnNYTDomain from 'src/util/is-on-nyt-domain';
import isDesktop from 'src/util/is-desktop';
import dom from 'corleone';
import template from './template.html';

const viewSettings = {
    // clean - disables content
    share: {
        logoClasses: 'vhs-no-pipe',
        titleClasses: 'vhs-invisible'
    },
    article: {
        logoClasses: '',
        titleClasses: ''
    },
    offsite: {
        logoClasses: '',
        titleClasses: ''
    }
};

function mapStateToProps(state, prevProps) {
    const {
        shareUrl,
        hideShareTools
    } = state.player.options;
    const isAdActive = state.player.isAdActive;
    const {
        isEmbeddedOnly,
        isLive,
        url: videoUrl,
        headline,
        byline,
        id
    } =
    state.player.media || {};
    const {
        masterFadeTime: fadeTime,
        isEnded
    } = state.player;
    const mode =
        safeChain(state, 'player.options.controlsOverlay.mode') || 'clean';

    return {
        ...prevProps,
        isEnabled: !!(state.player.media && typeof viewSettings[mode] === 'object'),
        showShareTools: !!(!hideShareTools && (!isEmbeddedOnly || shareUrl)),
        linkUrl: (!isEmbeddedOnly && videoUrl) || null,
        showEmbedShare: !isEmbeddedOnly && !isLive,
        media: {
            id,
            headline,
            byline,
            isEmbeddedOnly,
            isEnded
        },
        isAdActive,
        shareUrl,
        fadeTime,
        mode
    };
}

/**
 * This plugin renders an overlay to the player which will render the times
 * video logo, video title, video byline, and share buttons. The plugin is
 * visible whenever the sharetools plugin is enabled, the player's content is a
 * video has not ended, and the controls are visible.
 */
export default {
    name: 'controlsOverlay',
    enable: true,
    canEnable: () => isDesktop(),

    proto: {
        shareToolsClass: 'vhs-plugin-sharetools',
        template,

        render() {
            const props = this.props;

            const viewOptions = {
                logoClasses: '',
                titleClasses: '',
                ...props,
                ...viewSettings[props.mode],
                shareClasses: props.showEmbedShare ? '' : 'vhs-no-pipe'
            };

            this.el = dom.create(
                `<div class="vhs-plugin-container-${
          this._name
        }" style="display: none;"></div>`
            );
            pipe(this.template(viewOptions), dom.create, node =>
                this.el.appendChild(node)
            );

            this._container.appendChild(this.el);
            this._container.classList.add(`vhs-plugin-${this._name}`);

            if (props.showShareTools) {
                const shareButtons = Array.prototype.slice.call(
                    this.el.querySelectorAll('[data-share-name]')
                );
                shareButtons.forEach(shareButton => {
                    const shareName = shareButton.dataset.shareName;
                    const onClick = event => {
                        // Stop propagation for embed, so that the copySlate won't get destroyed after
                        // rendering
                        if (shareName === 'embed') {
                            event.stopPropagation();
                        }
                        this._emit(`plugin:sharetools:${shareName}`);
                    };
                    shareButton.addEventListener('click', onClick);
                    shareButton.addEventListener('focus', this.onFocusBound);
                    shareButton.addEventListener('blur', this.onBlurBound);
                    shareButton.addEventListener('keydown', this.createKeyDown(onClick));
                    shareButton.addEventListener('mousedown', this.onMouseDown);
                });
            }

            this.setupTimesVideoLinks();
            this.props.isRendered = true;
            this._emit('rendered');
        },

        fadeIn() {
            dom.show(this.el);
            const pauseSlate = Array.prototype.slice.call(
                this.el.querySelectorAll(
                    '.vhs-pause-slate, .vhs-player-header-background'
                )
            );

            pauseSlate.forEach(node => {
                node.style.opacity = 0;
                node.style.transition = `opacity ${this.props.fadeTime}ms linear`;
                // Needs to happen on next tick, otherwise the browser will batch with `opacity = 0` no
                // transition will happen.
                setTimeout(() => {
                    node.style.opacity = 1;
                });
                dom.show(node);
            });
        },

        fadeOut() {
            const pauseSlate = Array.prototype.slice.call(
                this.el.querySelectorAll(
                    '.vhs-pause-slate, .vhs-player-header-background'
                )
            );
            pauseSlate.forEach(node => {
                node.style.opacity = 1;
                node.style.transition = `opacity ${this.props.fadeTime}ms linear`;
                // Needs to happen on next tick, otherwise the browser will batch with `opacity = 0` and
                // no transition will happen.
                setTimeout(() => {
                    node.style.opacity = 0;
                });
            });
        },

        setupTimesVideoLinks() {
            this.focusedElement = null;
            const titleWrapper = this.el.querySelector(
                '.vhs-video-title-wrapper .vhs-data a'
            );
            const timesLogo = this.el.querySelector(
                '.vhs-player-header .vhs-times-logo'
            );

            if (titleWrapper) {
                titleWrapper.removeEventListener(
                    'click',
                    this.onTitleWrapperClickBound
                );
                titleWrapper.addEventListener('click', this.onTitleWrapperClickBound);
                titleWrapper.addEventListener('focus', this.onFocusBound);
                titleWrapper.addEventListener('blur', this.onBlurBound);
                titleWrapper.addEventListener(
                    'keydown',
                    this.createKeyDownBound(this.onTitleWrapperClickBound)
                );
                titleWrapper.addEventListener('mousedown', this.onMouseDownBound);
            }

            if (this.props.linkUrl) {
                timesLogo.removeEventListener('click', this.onTimesLogoClickBound);
                timesLogo.addEventListener('click', this.onTimesLogoClickBound);
                timesLogo.addEventListener('focus', this.onFocusBound);
                timesLogo.addEventListener('blur', this.onBlurBound);
                timesLogo.addEventListener(
                    'keydown',
                    this.createKeyDownBound(this.onTimesLogoClickBound)
                );
                timesLogo.addEventListener('mousedown', this.onMouseDownBound);
            }
        },

        pauseAndRedirect(region) {
            this._player.pause();
            const linkUrl = this.getRedirectUrl(region);
            window.open(linkUrl, '_blank');
        },

        getRedirectUrl(region) {
            const querystring = `?action=click&gtype=vhs&version=vhs-heading&module=vhs&region=${region}`;
            const deepLinkParams = `&cview=true&t=${Math.round(
        this._player.getCurrentTime()
      )}`;
            if (region === 'times-logo-area') {
                return `https://www.nytimes.com/video${querystring}`;
            }
            return this.props.linkUrl + querystring + deepLinkParams;
        },

        destroy() {
            function noop() {}

            // prevent vhs from triggering these events
            this._ad_started = noop;
        },

        subscribe() {
            this._player.store.subscribe(() => {
                this.props = mapStateToProps(
                    this._player.store.getState(),
                    clone(this.props)
                );
            });
        },

        onTitleWrapperClick(event) {
            event.preventDefault();
            this.pauseAndRedirect('title-area');
        },

        onTimesLogoClick(event) {
            event.preventDefault();
            this.pauseAndRedirect('times-logo-area');
        },

        onFocus(event) {
            this._player.setActiveState();
            this.focusedElement = event.target;
        },

        onBlur() {
            this._player.setActiveState();
            this.focusedElement = null;
        },

        createKeyDown(clickHandler) {
            return event => {
                if (event.key === 'Enter') {
                    clickHandler(event);
                }
            };
        },

        onMouseDown(event) {
            event.preventDefault();
            if (this.focusedElement) {
                this.focusedElement.blur();
                this.focusedElement = null;
            }
        },

        //
        // Player reactions
        //

        _initialize() {
            const initialProps = {
                mode: 'clean',
                isOnSite: isOnNYTDomain(),
                shareToolsClass: 'vhs-plugin-sharetools',
                isRendered: false
            };
            this.props = mapStateToProps(this._player.store.getState(), initialProps);
            this.subscribe(this, this._player.store);

            this.onTitleWrapperClickBound = this.onTitleWrapperClick.bind(this);
            this.onTimesLogoClickBound = this.onTimesLogoClick.bind(this);
            this.onFocusBound = this.onFocus.bind(this);
            this.onBlurBound = this.onBlur.bind(this);
            this.createKeyDownBound = this.createKeyDown.bind(this);
            this.onMouseDownBound = this.onMouseDown.bind(this);

            // usage:
            // player.emit('plugin:controlsOverlay:enable');
            // player.emit('plugin:controlsOverlay:disable');
            this._on('enable', this.enable.bind(this));
            this._on('disable', this.disable.bind(this));
        },

        _media_element_mounted() {
            const {
                mode,
                shareToolsClass,
                isEnabled
            } = this.props;

            if (isEnabled && this._container.classList.contains(shareToolsClass)) {
                this.render();
            }

            if (mode === 'clean') {
                this.destroy();
            }
        },

        _loadstart() {
            if (this.el) {
                this.el.remove();
                this.render();
            }
        },

        _active() {
            if (!this.props.isRendered ||
                this.props.media.isEnded ||
                this.props.isAdActive
            ) {
                return;
            }

            this.fadeIn();
        },

        _idle() {
            if (!this.props.isRendered || this.props.media.isEnded) {
                return;
            }

            this.fadeOut();
        },

        _ad_started() {
            if (this.el) {
                dom.hide(this.el);
            }
        },

        _ended() {
            if (this.el) {
                dom.hide(this.el);
            }
        },

        enable() {
            if (this.el) {
                this.el.remove();
            }
            this.render();
        },

        disable() {
            if (this.el) {
                this.el.remove();
            }
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/controls-overlay/index.js