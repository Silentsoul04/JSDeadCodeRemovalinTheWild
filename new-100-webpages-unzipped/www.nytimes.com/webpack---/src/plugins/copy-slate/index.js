import clone from 'clone';
import dom from 'corleone';
import escapeHtml from 'src/util/escape-html';
import shortUrl from 'src/util-nyt/short-url';
import Logger from 'src/util/logger';
import reducer from './reducer';
import actions from './actions';
import template from './template.html';
import embedCodeTemplate from './embed-code-template.html';
import './styles.scss';

const logger = new Logger('vhs:plugin:copy-slate');

export default {
    name: 'copySlate',
    enable: true,
    proto: {
        pluginClassName: 'vhs-copy-slate',
        template,
        actions,
        state: {},
        ui: {
            container: undefined,
            form: undefined,
            input: undefined
        },

        _initialize() {
            this.store = this._player.store;

            this.subscribe();
            this.bindUiEvents();
            this.bindPlayerEvents();
        },

        getEmbedCode() {
            const currentState = this.store.getState();
            const embedCode = embedCodeTemplate({
                id: 'nyt_video_player',
                title: 'New York Times Video - Embed Player',
                src: `https://www.nytimes.com/video/players/offsite/index.html?videoId=${
          currentState.player.media.id
        }`
            });

            return escapeHtml(embedCode);
        },

        renderEmbedCode() {
            const currentState = this.store.getState();
            const errorMsg =
                'Sorry, this video is not available outside of the NYTimes.';
            this.store.dispatch(
                actions.show({
                    text: 'Copy and paste the code below to embed this video on your site',
                    value: currentState.player.media.isEmbeddedOnly ?
                        errorMsg :
                        this.getEmbedCode()
                })
            );
        },

        destroy() {
            if (this.ui.container) {
                dom.remove(this.ui.container);
                this.ui.container = null;
                this.ui.form = null;
                this.ui.input = null;
            }

            this._emit('closed');
            this.store.dispatch(actions.updateVisibility(false));
        },

        render() {
            const templateData = { ...this.state
            };

            if (!templateData || !templateData.text || !templateData.value) {
                throw new Error('The data passed is not semantic.');
            }

            this._player.pause();

            templateData.pluginClassName = this.pluginClassName;

            this.ui.container = dom.create(this.template(templateData));
            this._container.appendChild(this.ui.container);
            this.ui.form = this.ui.container.querySelector(
                '.vhs-embed-form-container'
            );
            this.ui.input = this.ui.container.querySelector('input');
            this.ui.input.focus();
            this.ui.input.setSelectionRange(0, this.ui.input.value.length);

            this.ui.button = this.ui.container.querySelector(
                `.${this.pluginClassName}-close-button`
            );
            this.ui.button.addEventListener('keydown', event => {
                if (event.key === 'Enter') {
                    this.store.dispatch(this.actions.hide());
                }
            });
            this.ui.button.addEventListener('mousedown', event => {
                event.preventDefault();
            });

            this._emit('rendered');
            this.store.dispatch(actions.updateVisibility(true));
        },

        subscribe() {
            this.store.whenever(
                'plugins.copySlate',
                () => true,
                curState => {
                    this.state = clone(curState);
                    this.handleStateChanges();
                }
            );
        },

        handleStateChanges() {
            if (this.state.shouldDisplay && !this.state.isVisible) {
                this.render();
            }
            if (!this.state.shouldDisplay && this.state.isVisible) {
                this.destroy();
            }
        },

        bindUiEvents() {
            this._container.addEventListener('click', event => {
                const target = event.target;

                const isCopyFormElement =
                    this.ui.form &&
                    (target === this.ui.form || this.ui.form.contains(target));

                if (this.ui.container && !isCopyFormElement) {
                    this.store.dispatch(this.actions.hide());
                }
            });

            this._container.addEventListener('click', event => {
                const target = event.target;

                const isCopyInputElement = this.ui.input && target === this.ui.input;

                if (isCopyInputElement) {
                    target.focus();
                    target.setSelectionRange(0, target.value.length);
                }
            });
        },

        bindPlayerEvents() {
            this._on('close', () => {
                this.store.dispatch(this.actions.hide());
            });

            this._on('open:get-video-canonical', async () => {
                const currentState = this.store.getState();
                const url = `${currentState.player.media.url}?smid=pl-share`;

                try {
                    const shortenedUrl = await shortUrl(url);
                    this.store.dispatch(
                        actions.show({
                            text: 'Share the link to this video',
                            value: shortenedUrl
                        })
                    );
                } catch (error) {
                    logger.error(error);
                }
            });

            this._on('open:get-video-canonical-at-current-time', async () => {
                const url = `${this._player.getVideoCanonicalAtCurrentTime()}&smid=pl-share`;

                try {
                    const shortenedUrl = await shortUrl(url);
                    this.store.dispatch(
                        actions.show({
                            text: 'Video URL at Current Time',
                            value: shortenedUrl
                        })
                    );
                } catch (error) {
                    logger.error(error);
                }
            });

            this._on('open:get-embed-code', () => {
                this.renderEmbedCode(this);
            });

            this._on('open:get-video-id', () => {
                this.store.dispatch(
                    actions.show({
                        text: 'Video ID',
                        value: this.store.getState().player.media.id
                    })
                );
            });
        },

        reducer() {
            return {
                copySlate: reducer
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/copy-slate/index.js