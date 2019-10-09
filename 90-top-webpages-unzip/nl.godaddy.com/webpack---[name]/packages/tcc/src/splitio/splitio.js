const browserHelper = require('@exp/exp-utils/helper/browser');
const object = require('@exp/exp-utils/helper/object');
const logger = require('@exp/exp-utils/helper/logger');

const config = require('@tcc/shared/src/helpers/config');
const authHelper = require('@exp/exp-utils/helper/auth');
const visitHelper = require('../helpers/visitHelperTcc');


let _splitIoLibrary;
const asyncCommands = [];
let _isLoadingLibrary;

function init() {
  _getSplitIoLibrary(() => {});
}

function _loadSplitIoJs() {
  _isLoadingLibrary = true;
  const script = browserHelper.getDocument().createElement('script');
  script.type = 'text/javascript';
  script.async = false;
  script.src = config.get('tcc.splitioUrl');
  script.addEventListener('load', _onLoad.bind(this));
  (browserHelper.getDocument().getElementsByTagName('head')[0] ||
  browserHelper.getDocument().getElementsByTagName('body')[0])
    .appendChild(script);
}

function _getSplitIoLibrary(callbackFunc) {
  if (_splitIoLibrary) {
    callbackFunc(_splitIoLibrary);
    return;
  } else if (!_isLoadingLibrary) {
    _loadSplitIoJs();
  }

  asyncCommands.push(callbackFunc);
}

function _onLoad() {
  _splitIoLibrary = browserHelper.getWindow()._expSplitIO;

  // Handle any commands that were waiting for the load to finish
  while (asyncCommands.length > 0) {
    asyncCommands.shift()(_splitIoLibrary);
  }
}

function _getUserId(trafficType) {
  if (trafficType.toLowerCase() === 'shopper') {
    const shopperId = authHelper.getShopperId(true);
    if (!shopperId) {
      logger.error('A shopper based split is being referenced but a shopper is not logged in.');
    }
    return shopperId;
  }
  return new visitHelper().getVisitInfo().visitorGuid;
}

function getVariantId(experimentId, attributes, trafficType = 'visitor', configuration, callbackFunc) {
  _getSplitIoLibrary((library) => {

    const userId = _getUserId(trafficType);

    library.getSplitClient(config.get('tcc.splitioApiKey'), trafficType, userId, (client) => {
      const variantId = configuration ? client.getTreatmentWithConfig(experimentId, attributes) : client.getTreatment(experimentId, attributes);
      callbackFunc(variantId);
    });
  });
}


let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
  internalExports = {
    _onLoad: _onLoad,
    _getUserId: _getUserId,
    _setSplitIoLibrary: (library) => {
      _splitIoLibrary = library;
    },
    _setIsLoading: (loading) => {
      _isLoadingLibrary = loading;
    },
    _getLibrary: () => {
      return _splitIoLibrary;
    }
  };
}

module.exports = object.merge({
  getVariantId: getVariantId,
  init: init
}, internalExports);
