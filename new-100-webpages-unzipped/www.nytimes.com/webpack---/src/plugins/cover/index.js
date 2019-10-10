import retry from 'async-retry';
import preact from 'preact';
import {
    Provider
} from 'preact-redux';
import safeChain from 'safe-chain';
import Logger from 'src/util/logger';

const logger = new Logger('vhs:plugin:cover');

const name = 'cover';

const render = (Cover, container, store, player) => {
    preact.render( <
        Provider store = {
            store
        } >
        <
        Cover player = {
            player
        }
        /> <
        /Provider>,
        container
    );
};

const canEnable = player =>
    new Promise(resolve => {
        const unsubscribe = player.store.subscribe(() => {
            const options = safeChain(player.store.getState(), 'player.options');

            if (options) {
                resolve(options.cover);
                unsubscribe();
            }
        });
    });

//
// API
//

export default {
    enable: false,
    canEnable,
    name,
    proto: {
        async _initialize() {
            let Cover;

            try {
                Cover = await retry(
                    () =>
                    import ( /* webpackChunkName: "plugin-cover-vi" */ './component'), {
                        retries: 5
                    }
                );
            } catch (error) {
                logger.error(
                    'Error loading `plugin-cover.js`. Do you have the correct `options.env` set up?\nhttps://github.com/nytm/vhs/blob/master/doc/OPTIONS.md'
                );

                throw error;
            }

            render(Cover.default, this._container, this._player.store, this._player);
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/cover/index.js