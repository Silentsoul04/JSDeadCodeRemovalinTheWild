import retry from 'async-retry';
import preact from 'preact';
import Provider from 'preact-context-provider';
import Logger from 'src/util/logger';
import actions from './actions';

const logger = new Logger('vhs:plugin:end-slate');

function render(container, store, player, EndSlate) {
    preact.render( <
        Provider store = {
            store
        }
        player = {
            player
        } >
        <
        EndSlate / >
        <
        /Provider>,
        container
    );
}

async function loadEndSlate() {
    let EndSlate;

    try {
        EndSlate = await retry(
            () =>
            import ( /* webpackChunkName: "plugin-end-slate" */ './component'), {
                retries: 5
            }
        );
    } catch (error) {
        logger.error(
            'Error loading `plugin-end-slate.js`. Do you have the correct `options.env` set up?\nhttps://github.com/nytm/vhs/blob/master/doc/OPTIONS.md'
        );

        throw error;
    }

    return EndSlate;
}

function onAnyMediaPlayed(store) {
    return new Promise(resolve => {
        const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            if (state.player.hasAnyMediaPlayed) {
                resolve();
                unsubscribe();
            }
        });
    });
}

//
// API
//

export default {
    enable: true,
    name: 'endSlate',
    proto: {
        async _initialize() {
            const container = this._container;
            const store = this._player.store;
            const player = this._player;

            actions(store).init();
            await onAnyMediaPlayed(store);
            const EndSlate = await loadEndSlate();
            actions(store).loaded();
            render(container, store, player, EndSlate.default);
        },

        // Dummy reducer is needed until we remove `combineReducers`
        reducer() {
            return {
                endSlate: (state = {}) => state
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/end-slate/index.js