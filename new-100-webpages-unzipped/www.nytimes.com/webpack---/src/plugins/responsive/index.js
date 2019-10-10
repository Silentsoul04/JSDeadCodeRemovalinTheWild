import {
    debounce
} from 'monocle-decorators';
import apiEvents from '../../player/events';
import reducer from './reducer';
import actions from './actions';
import './styles.scss';

export default {
    enable: true,
    name: 'responsive',
    proto: {
        _initialize() {
            this.store = this._player.store;
            this.player = this._player;
            this.container = this._container;
            this.onResizeBoundDebounced = debounce(this.onResize.bind(this), 150);

            this.subscribe();
            this.initStore();
            this.bindEventListeners();
        },

        subscribe() {
            this.store.whenever(
                'plugins.responsive.cssClass',
                () => true,
                (curCssClass, prevCssClass) => {
                    if (prevCssClass) {
                        this.container.classList.remove(prevCssClass);
                    }
                    this.container.classList.add(curCssClass);
                }
            );
        },

        initStore() {
            this.store.dispatch(
                actions.init({
                    playerWidth: this.container.clientWidth,
                    playerHeight: this.container.clientHeight,
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight
                })
            );
        },

        bindEventListeners() {
            window.removeEventListener('resize', this.onResizeBoundDebounced);
            window.addEventListener('resize', this.onResizeBoundDebounced);
        },

        onResize() {
            const curPlayerWidth = this.container.clientWidth;
            const curPlayerHeight = this.container.clientHeight;

            this.store.dispatch(
                actions.changedDimensions({
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight,
                    playerWidth: curPlayerWidth,
                    playerHeight: curPlayerHeight
                })
            );

            this.player.emit(apiEvents.PLAYER_SIZE_CHANGE, {
                width: curPlayerWidth,
                height: curPlayerHeight
            });
        },

        reducer() {
            return {
                responsive: reducer
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/responsive/index.js