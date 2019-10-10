const object = require('@exp/exp-utils/helper/object');
const browserHelper = require('@exp/exp-utils/helper/browser');
const filterMethods = require('../ga/filterMethods');
const page = require('@tcc/shared/src/traffic/eventPageProperties');

let _initialized = false;
const _asyncCommands = [];

// If tealium has not begun to execute, merge  data
// into window.utag_data for tealium consumption on initial load
const _mergeDataLayers = (eventData) => {
    browserHelper.getWindow().utag_data = object.merge(browserHelper.getWindow().utag_data || {}, eventData);
};

const _setVirtualPage = (utagData) => {
    if (!page.isSet('page'))
        return;

    const pagePath = page.get('page');
    if (pagePath === browserHelper.getWindow().location.pathname) {
        return;
    }
    utagData.virtual_page_path = pagePath;
};

const isTealiumLoaded = () => {
    const utag = browserHelper.getWindow().utag;
    return utag && utag.view;
};

const _utagView = (utagData) => {
    _setVirtualPage(utagData);

    const utag = browserHelper.getWindow().utag;
    if (!utag || !utag.view) {
        _mergeDataLayers(utagData);
    } else {
        utag.view.call(utag, utagData); // eslint-disable-line
    }
};

const _utagEvent = (utagData) => {
    const utag = browserHelper.getWindow().utag;
    if (!utag || !utag.link) {
        /* TODO: Remove after we:
            1. [EXP-1523] Buffer incoming Tealium events so that they're fired AFTER tealium loads
            2. [EXP-1524] Map ONLY events to utag.link, ONLY page views to utag.view */
        _mergeDataLayers(utagData);
    } else {
        utag.link.call(utag, utagData); // eslint-disable-line
    }
};

const _process = (input, isEvent) => {
    if (isEvent) return _utagEvent(input);
    return _utagView(input);
};

const _feedTealium = (input, isEvent) => {
    if (!_initialized) {
        _asyncCommands.push([input, isEvent]);
    } else {
        _process(input, isEvent);
    }
};

const sendEvent = (type, input) => {
    input.event_type = type;
    _feedTealium(input, true);
};

const sendPageView = (input) => {
    _feedTealium(input, false);
};

const sendEcommerceEvent = (type, input) => {
    // Insert needed data that was not provided by caller
    input.pl_id = filterMethods.getPrivateLabelId();
    input.event_type = type;

    _feedTealium(input);
};

const sendGenericConversion = (input) => {
    // map eid to event_type
    sendEvent(input.eid, input);
};

function init() {
    _initialized = true;
    while (_asyncCommands.length > 0) {
        _process.apply(this, _asyncCommands.shift());
    }
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
    internalExports = {
        _feedTealium: _feedTealium,
        _mergeDataLayers: _mergeDataLayers,
        _utagView: _utagView,
        _utagEvent: _utagEvent
    };
}

module.exports = object.merge({
        sendEcommerceEvent: sendEcommerceEvent,
        sendGenericConversion: sendGenericConversion,
        sendEvent: sendEvent,
        sendPageView: sendPageView,
        init: init,
        isTealiumLoaded: isTealiumLoaded,
        setInitialized: (initialized) => {
            _initialized = initialized;
        },
        clearAsyncCommands: () => {
            _asyncCommands.splice();
        }
    },
    internalExports
);