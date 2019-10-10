import preact from 'preact';
import Provider from 'preact-context-provider';
import safeChain from 'safe-chain';
import isMobile from 'src/util/is-mobile';
import AudioControls from './component';
import AudioControlsV2 from './componentV2';
import actions from './componentV2/actions';

const render = (container, player, store) => {
    const state = store.getState();
    const version = safeChain(state, 'player.options.audioControls.version');
    if (version === 'v2') {
        preact.render( <
            Provider store = {
                store
            } >
            <
            AudioControlsV2 player = {
                player
            }
            /> <
            /Provider>,
            container
        );
        return;
    }

    preact.render( <
        Provider store = {
            store
        } >
        <
        AudioControls player = {
            player
        }
        /> <
        /Provider>,
        container
    );
};

//
// API
//

export default {
    enable: false,
    name: 'audioControls',
    proto: {
        _initialize() {
            const store = this._player.store;
            const layout =
                safeChain(this, '_player.options.audioControls.layout') ||
                (isMobile() ? 'mobile' : 'desktop');
            actions(store).init({
                layout
            });
            render(this._container, this._player, store);
        },

        // Dummy reducer is needed until we remove `combineReducers`
        reducer() {
            return {
                audioControls: (state = {}) => state
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/audio-controls/index.js