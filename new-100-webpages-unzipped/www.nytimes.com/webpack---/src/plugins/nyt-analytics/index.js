import checkCookie from 'src/util/check-cookie';
import Logger from 'src/util/logger';
import idle from 'idle-promise';
import retry from 'async-retry';
import canTrack from 'can-track';

const logger = new Logger('vhs:plugin:nyt-analytics');

export default {
    enable: true,
    name: 'nytAnalytics',
    proto: {
        async _initialize() {
            if (!canTrack()) {
                logger.info('`doNotTrack` is enabled. Plugin will not be initialized.');
                return;
            }
            if (
                this._player.store.getState().plugins.featureFlags.gdpr &&
                checkCookie('NYT-T=out')
            ) {
                return;
            }

            let Tracker;

            await idle();

            try {
                Tracker = await retry(
                    () =>
                    import ( /* webpackChunkName: "plugin-nyt-analytics" */ './tracker'), {
                        retries: 5
                    }
                );
                Tracker = Tracker.default;
            } catch (error) {
                logger.error(
                    'Error loading `plugin-nyt-analytics.js`. Do you have the correct `options.env` set up?\nhttps://github.com/nytm/vhs/blob/master/doc/OPTIONS.md'
                );

                throw error;
            }

            this.tracker = new Tracker(this._player.store, this._player);
            this.tracker.init();
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/nyt-analytics/index.js