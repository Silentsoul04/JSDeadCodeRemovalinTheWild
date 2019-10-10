import reduxLogdown from 'redux-logdown';
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import setStateRedux from 'set-state-redux';
import thunk from 'redux-thunk';
import whenever from 'redux-whenever';
import plugins from '../plugins';
import playerReducer from './reducer';

//
// Reducers
//

const allPluginsReducers = () => {
    const pluginsReducers = plugins
        .filter(plugin => typeof plugin.proto.reducer === 'function')
        .reduce(
            (memo, plugin) => ({
                ...memo,
                ...plugin.proto.reducer()
            }), {}
        );

    return {
        plugins: combineReducers(pluginsReducers)
    };
};

const reducers = {
    ...allPluginsReducers(),
    ...playerReducer
};

const appReducer = combineReducers(reducers);

//
// Middlewares
//

const getMiddlewares = (debug = false) => {
    const isTestEnv = () => typeof __karma__ !== 'undefined';

    const middlewares = [thunk];

    if (debug && !isTestEnv()) {
        const logger = reduxLogdown('vhs:store', {
            diff: true
        });
        middlewares.push(logger);
    }

    return middlewares;
};

const getComposeEnhancers = (debug = false) => {
    const composeEnhancers =
        debug && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
        compose;

    return composeEnhancers;
};

//
// API
//

const create = opts_ => {
    const opts = {
        debug: false,
        ...opts_
    };

    const composeEnhancers = getComposeEnhancers(opts.debug);

    const createStoreArgs = [];
    createStoreArgs.push(appReducer);
    if (opts.preloadedState) createStoreArgs.push(opts.preloadedState);
    createStoreArgs.push(
        composeEnhancers(whenever, applyMiddleware(...getMiddlewares(opts.debug)))
    );

    return setStateRedux.decorateCreateStore(createStore)(...createStoreArgs);
};

export default {
    create
};



// WEBPACK FOOTER //
// ./src/player/store.js