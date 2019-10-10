const windowHelper = require('@exp/exp-utils/helper/window');
const browserHelper = require('@exp/exp-utils/helper/browser');
const arrayHelper = require('@exp/exp-utils/helper/array');
const urlHelper = require('@exp/exp-utils/helper/url');
const envHelper = require('@exp/exp-utils/helper/environment');
const object = require('@exp/exp-utils/helper/object');
const logger = require('@exp/exp-utils/helper/logger');
const auth = require('@exp/exp-utils/helper/auth');
const config = require('../helpers/config');
const filterMethods = require('../../../tcc/src/ga/filterMethods');
const _logName = '_trfqSendLog';
let _visitHelper;

let _initialized = false;
const _asyncCommands = [];

const _getHost = () => {
    var host = browserHelper.getBaseHost();
    if (host === 'localhost') {
        return 'dev-secureserver.net';
    }
    return browserHelper.isCorporateHost(host) ? host : 'secureserver.net';
};

// New Traffic API (events.godaddy.com)
const _getTrafficHost = () => {
    if (process.env.NODE_ENV !== 'production') {
        if (process.env.NODE_ENV === 'localhost')
            return 'http://localhost:8888';
        if (process.env.NODE_ENV === 'dev-private') {
            return 'https://events.dev-private.aws.dev-godaddy.com';
        }
    }

    return `https://events.${_getHost()}`;
};

const _logCall = (endpointPath, method, data) => {
    const logData = {
        endpoint: endpointPath,
        method: method,
        payload: data
    };
    if (process.env.NODE_ENV !== 'production') {
        logger.debug('TCC sending event to', logData);
    }
    arrayHelper.logToArray(windowHelper.getInternalVar(_logName), logData);
};

const _getTrafficProps = (data) => {
    const properties = object.merge({
        visitor_guid: _visitHelper.getVisitInfo().visitorGuid,
        hashed_shopper_id: filterMethods.getShopperId(),
        environment_name: envHelper.getEnvName(),
        user_realm: auth.getUserRealm(),
        page_realm: config.get('tcc.realm')
    }, data);

    const cleanedProps = {};
    // remove undefined values
    object.map(properties, (key, value) => {
        if (typeof value !== 'undefined') {
            cleanedProps[key] = value;
        }
    });

    return cleanedProps;
};

const _imagePixel = (endpointPath, data, callback) => {
    const encodedProperties = urlHelper.encodeProperties(data);
    const url = urlHelper.assembleUrl(encodedProperties, endpointPath);

    //
    // Send is being done via an asyncronous image load
    //

    const image = browserHelper.getWindow().Image;
    const imageElm = new image(1, 1);
    if (typeof callback === 'function') {
        imageElm.onload = callback;
    } else {
        imageElm.onload = () => {};
    }

    // Class is a reserved keyword for IE <= 8
    imageElm['class'] = 'trafficImage'; // eslint-disable-line dot-notation
    imageElm.src = url;

    _logCall(endpointPath, 'GET', object.stringify(encodedProperties, '&', '='));
};

const _ajax = (endpointPath, method, payload, callback) => {

    // construct an HTTP request
    if (browserHelper.getWindow().XMLHttpRequest) {
        const Request = browserHelper.getWindow().XMLHttpRequest;
        var request = new Request();
        request.open(method, endpointPath, true);
        request.setRequestHeader('Content-Type', 'application/json;');
        request.onreadystatechange = callback;

        // send the collected data as JSON
        request.send(JSON.stringify(payload));

        _logCall(endpointPath, method, payload);
    } else if (process.env.NODE_ENV !== 'production') {
        logger.error('Browser does not support XMLHttpRequest');
    }
};

function _sendEvent(data, endpoint, method, callback) {
    const endpointPath = _getTrafficHost() + endpoint;
    const extraProps = _getTrafficProps();

    const payload = object.merge(data, extraProps);

    if (method === 'GET') {
        _imagePixel(endpointPath, payload, callback);
    } else {
        _ajax(endpointPath, method, payload, callback);
    }
}

function init(visitHelper) {
    _visitHelper = visitHelper;
    _initialized = true;
    while (_asyncCommands.length > 0) {
        _sendEvent.apply(this, _asyncCommands.shift());
    }
}

// Should take all the properties and attach them to the query string (GET)
//  or include them as POST parameters
function sendEvent(data, endpoint, method, callback) {
    if (!_initialized) {
        _asyncCommands.push([data, endpoint, method, callback]);
    } else {
        _sendEvent(data, endpoint, method, callback);
    }
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
    internalExports = {
        _logCall: _logCall,
        _getHost: _getHost,
        _getTrafficHost: _getTrafficHost,
        _getTrafficProps: _getTrafficProps,
        _logName: _logName,
        _ajax: _ajax,
        _imagePixel: _imagePixel,
        setInitialized: (initialized) => {
            _initialized = initialized;
        }
    };
}

module.exports = object.merge({
        init: init,
        sendEvent: sendEvent
    },
    internalExports
);