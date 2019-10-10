import {
    deprecate
} from 'monocle-decorators';
import pipe from 'tubo';
import Logger from 'src/util/logger';
import {
    actions
} from './actions';
import apiEvents from './events';

const logger = new Logger('vhs');

const deprecatedApi = pipe({
        _ready() {
            if (typeof this.options.onReady === 'function') {
                this.options.onReady.bind(this)();
            }

            if (Array.isArray(this.readyCallbacks)) {
                this.readyCallbacks.forEach(callback => {
                    callback.bind(this)();
                }, this);
            }

            this.store.dispatch(actions.ready());
            this.emit(apiEvents.READY);
            this.readyCallbacks = [];
        },

        ready(callback) {
            if (this.props.isReady) {
                callback.apply(this);
            } else {
                this.readyCallbacks.push(callback);
            }
        }
    },
    input =>
    deprecate(
        input,
        'ready',
        '`player.ready()` is deprecated. Use `player.on(player.events.READY)`', {
            logger: logger.warn.bind(logger)
        }
    )
);

export default deprecatedApi;



// WEBPACK FOOTER //
// ./src/player/deprecated-api.js