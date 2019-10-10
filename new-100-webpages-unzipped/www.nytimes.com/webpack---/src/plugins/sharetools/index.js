import safeChain from 'safe-chain';
import shortUrl from 'src/util-nyt/short-url';
import Logger from 'src/util/logger';
import reducer from './reducer';
import actions from './actions';

const logger = new Logger('vhs:plugin:sharetools');

export default {
    name: 'sharetools',
    proto: {
        config: {
            facebook: {
                apiUrl: 'https://www.facebook.com/sharer.php',
                windowOptions: {
                    height: 430,
                    width: 655,
                    name: 'facebookShare'
                }
            },
            twitter: {
                apiUrl: 'https://twitter.com/intent/tweet',
                windowOptions: {
                    height: 450,
                    width: 600,
                    name: 'twitterShare'
                }
            }
        },

        _initialize() {
            this.bindEvents();
            this._container.classList.add(`vhs-plugin-${this._name}`);
            this._player.store.dispatch(actions.init());
        },

        bindEvents() {
            this._on('facebook', () => {
                const urlToShare = `${this.getUrlToShare()}?smid=fb-share`;
                this.openShareWindow(
                    urlToShare,
                    this.buildFacebookApiUrl.bind(this),
                    this.config.facebook.windowOptions
                );
            });
            this._on('twitter', () => {
                const urlToShare = `${this.getUrlToShare()}?smid=tw-share`;
                this.openShareWindow(
                    urlToShare,
                    this.buildTwitterApiUrl.bind(this),
                    this.config.twitter.windowOptions
                );
            });
            this._on('embed', () => {
                this._emit('plugin:copySlate:open:get-embed-code');
            });
            this._on('permalink', () => {
                this._emit('plugin:copySlate:open:get-video-canonical');
            });
        },

        getUrlToShare() {
            const currentState = this._player.store.getState();
            const isEmbeddedOnly = safeChain(
                currentState,
                'player.media.isEmbeddedOnly'
            );
            const mediaUrl = safeChain(currentState, 'player.media.url');
            const relatedUrl = safeChain(currentState, 'player.media.related[0].url');
            const shareUrl = safeChain(currentState, 'player.options.shareUrl');

            return (
                shareUrl ||
                (isEmbeddedOnly && relatedUrl) ||
                (!isEmbeddedOnly && mediaUrl) ||
                'https://www.nytimes.com/video'
            );
        },

        openShareWindow(urlToShare, shareApiUrlBuilder, windowOptions) {
            const windowSpecs = [
                'scrollbars=yes',
                'resizeable=yes',
                'toolbar=0',
                'status=0',
                `height=${windowOptions.height}`,
                `width=${windowOptions.width}`
            ].join(',');

            // keep this out here (not async) to bypass popup-blockers
            const shareWindow = window.open(
                'about:blank',
                windowOptions.name,
                windowSpecs
            );

            shortUrl(urlToShare)
                .then(shortenedUrl => {
                    shareWindow.location.href = shareApiUrlBuilder(
                        shortenedUrl || urlToShare
                    );
                })
                .catch(error => {
                    logger.error(error);
                });
        },

        buildFacebookApiUrl(urlToShare) {
            return `${this.config.facebook.apiUrl}?u=${encodeURIComponent(
        urlToShare
      )}`;
        },

        buildTwitterApiUrl(urlToTweet) {
            let url = `${
        this.config.twitter.apiUrl
      }?related=nytimes&via=nytvideo&url=${encodeURIComponent(urlToTweet)}`;
            const tweetText = this.getTweetText();
            if (tweetText) {
                url += `&text=${tweetText}`;
            }
            return url;
        },

        getTweetText() {
            const currentState = this._player.store.getState();
            let tweetText = currentState.player.media.headline || '';
            if (currentState.player.media.playlist.isPaidPost) {
                tweetText = `Paid Post: ${tweetText}`;
            }
            return encodeURIComponent(tweetText);
        },

        reducer() {
            return {
                shareTools: reducer
            };
        }
    },
    enable: true
};



// WEBPACK FOOTER //
// ./src/plugins/sharetools/index.js