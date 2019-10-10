const arrayHelper = require('@exp/exp-utils/helper/array');
const windowHelper = require('@exp/exp-utils/helper/window');
const environmentHelper = require('@exp/exp-utils/helper/environment');
const browserHelper = require('@exp/exp-utils/helper/browser');
const logger = require('@exp/exp-utils/helper/logger');
const object = require('@exp/exp-utils/helper/object');
const configHelper = require('./helpers/config');

const _name = '_gaDataLayer';
let _gaDataLayer;

const _logName = '_gaDataLayerLog';
const _gaDataLayerLog = [];

// Known invalid properties, including those which are now internally managed
const _ignoredProperties = ['shopperid', 'privatelabelid', 'marketid', 'currency', 'gtm.status'];

function _isTccProperty(item) {
    return item.indexOf('tcc.') === 0 || (item.indexOf('gtm.') === 0);
}

function processDataLayer(processTccConfigs) {
    let debug = false;
    const result = {};

    for (let i = 0; i < _gaDataLayer.length; i++) {
        const properties = _gaDataLayer[i];
        object.map(properties, (key, value) => {
            if (_ignoredProperties.indexOf(key.toLowerCase()) !== -1) {
                // only log the error message when processing the gaDataLayer for the first time,
                // else we'll spam the console on every event
                if (process.env.NODE_ENV !== 'production' && processTccConfigs) {
                    logger.error('Traffic Load Error: Unnecessary, invalid, or internally managed property found in _gaDataLayer:', key);
                }
                return;
            }

            // During processing if we see a debug property we mark it as seen in all cases'
            if (key === 'debug') {
                debug = value;
            }

            // Control whether tcc. configs are processed, or non tcc. configs are processed
            if (!processTccConfigs && _isTccProperty(key) ||
                processTccConfigs && !_isTccProperty(key)) {
                return;
            }

            result[key] = value;
        });
    }
    environmentHelper.setDebug(debug);
    return result;
}

function init() {
    // initialize dataLayer
    _gaDataLayer = browserHelper.getWindow()[_name] || [];

    // initialize dataLayerLog
    windowHelper.setInternalVar(_logName, _gaDataLayerLog);

    const config = processDataLayer(true);
    configHelper.merge(config);
    logger.log('>>> TCC properties configured in', _name, 'with', config);
    arrayHelper.logToArray(_gaDataLayerLog, config);
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
    internalExports = {
        _isTccProperty: _isTccProperty
    };
}

module.exports = object.merge({
        gaDataLayerLog: _gaDataLayerLog,
        gaDataLayerName: _name,
        init: init,
        processDataLayer: processDataLayer
    },
    internalExports
);