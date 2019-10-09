const cookieHelper = require('@exp/exp-utils/helper/cookie');

const pageRequestHelper = require('../../../tcc/src/traffic/methods/cmdLogPageRequest');
const pageEventHelper = require('../../../tcc/src/traffic/methods/cmdLogPageEvent');
const logRequestHelper = require('../../../tcc/src/traffic/methods/cmdLog');
const trackingHelper = require('../../../tcc/src/traffic/methods/cmdGetTrackingValues');
const logPagePerfHelper = require('../../../tcc/src/traffic/methods/cmdLogPagePerf');
const logImpressionHelper = require('../../../tcc/src/traffic/methods/cmdLogImpression');

// Do init for the module
cookieHelper.setCookie('traffic', '', 20, '/');

// Methods used for the traffic data layer process are published through here
module.exports = {
  // Extern mappings
  cmdLog: logRequestHelper.cmdLog,
  cmdLogImpression: logImpressionHelper.cmdLogImpression,
  cmdLogPageEvent: pageEventHelper.cmdLogPageEvent,
  cmdLogPagePerf: logPagePerfHelper.cmdLogPagePerf,
  cmdLogPageRequest: pageRequestHelper.cmdLogPageRequest,

  // Debug method
  cmdGetTrackingValues: trackingHelper.cmdGetTrackingValues
};
