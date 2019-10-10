import 'intersection-observer';

import apiEvents from '../../player/events';
import actions from './actions';
import reducer from './reducer';

const name = 'viewportIntersectionObserver';

function onVisibilityChange(player, store) {
    return entries => {
        if (entries[0].intersectionRatio === 0) {
            store.dispatch(actions.isOutside());
        } else {
            store.dispatch(actions.isInside());
        }
    };
}

function initIntersectionObserver(playerElement, player, store) {
    const intersectionObserver = new IntersectionObserver(
        onVisibilityChange(player, store)
    );
    intersectionObserver.observe(playerElement);
}

//
// Selectors
//

function isInsideViewport(state) {
    return state.plugins.viewportIntersectionObserver.isInsideViewport;
}

//
// Subscriber
//

function subscribe(store, player) {
    let prevState = store.getState();

    store.subscribe(() => {
        const curState = store.getState();

        if (
            isInsideViewport(prevState) === false &&
            isInsideViewport(curState) === true
        ) {
            player.emit(apiEvents.IN_VIEWPORT);
        } else if (
            isInsideViewport(prevState) === true &&
            isInsideViewport(curState) === false
        ) {
            player.emit(apiEvents.OUT_VIEWPORT);
        }

        prevState = curState;
    });
}

//
// API
//

const api = {
    enable: true,
    name,
    proto: {
        _initialize() {
            const playerElement = this._container;
            const player = this._player;
            const store = this._player.store;

            initIntersectionObserver(playerElement, player, store);
            subscribe(store, player);
        },
        reducer() {
            return {
                viewportIntersectionObserver: reducer
            };
        }
    }
};

if (process.env.NODE_ENV === 'test') {
    api.proto.onVisibilityChange = onVisibilityChange;
}

export default api;



// WEBPACK FOOTER //
// ./src/plugins/viewport-intersection-observer/index.js