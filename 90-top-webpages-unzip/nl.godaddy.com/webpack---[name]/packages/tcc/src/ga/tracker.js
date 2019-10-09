const object = require('@exp/exp-utils/helper/object');
const browserHelper = require('@exp/exp-utils/helper/browser');

let _gaAccountId;

function setGaAccountId(trackingId) {
  _gaAccountId = trackingId;
}

let _gaTracker;
// If not already done, assigns and returns the correct GTAG tracker on the browser
// This can be used to lookup internal GA values, such as clientId
function _getGaTracker() {
  if (_gaTracker || !_gaAccountId) {
    return _gaTracker;
  }
  try {
    const trackers = browserHelper.getWindow().ga.getAll();
    let i, len;
    for (i = 0, len = trackers.length; i < len; i++) {
      if (trackers[i].get('trackingId') === _gaAccountId) {
        _gaTracker = trackers[i];
        return _gaTracker;
      }
    }
  } catch (e) {} // eslint-disable-line no-empty
  return undefined;
}

function getGaClientId() {
  const gaTracker = _getGaTracker();
  if (!gaTracker) return;

  return gaTracker.get('clientId');
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
  internalExports = {
    _getGaTracker: _getGaTracker,
    _gaTracker: _gaTracker,
    _gaAccountId: _gaAccountId,
    _getGaAccountId: function _getGaAccountId() {
      return _gaAccountId;
    },
    _setTracker: function _setTracker(tracker) {
      _gaTracker = tracker;
    }
  };
}

module.exports = object.merge(
  {
    setGaAccountId: setGaAccountId,
    getGaClientId: getGaClientId
  },
  internalExports
);
