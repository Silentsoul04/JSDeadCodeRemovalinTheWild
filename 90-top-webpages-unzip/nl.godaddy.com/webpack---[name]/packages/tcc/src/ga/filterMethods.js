
const browserHelper = require('@exp/exp-utils/helper/browser');
const cookieHelper = require('@exp/exp-utils/helper/cookie');
const authHelper = require('@exp/exp-utils/helper/auth');
const urlHelper = require('@exp/exp-utils/helper/url');
const dateHelper = require('@exp/exp-utils/helper/date');
const object = require('@exp/exp-utils/helper/object');
const page = require('@tcc/shared/src/traffic/eventPageProperties');
const config = require('@tcc/shared/src/helpers/config');
const VisitHelper = require('../helpers/visitHelperTcc');
const gaTracker = require('../ga/tracker');

/*      FILTER HELPER METHODS     */

function trueOrUndefined(callback) {
  return () => {
    return (callback && callback()) || undefined;
  };
}

function getVisitId() {
  return new VisitHelper().getVisitInfo().visitGuid;
}

function getVisitorId() {
  return new VisitHelper().getVisitInfo().visitorGuid;
}

function isEmployee() {
  return authHelper.isEmployee();
}

function isAuthenticated() {
  return authHelper.isAuthenticated();
}

function isDelegated() {
  return authHelper.isDelegated();
}

function getEmployeeId() {
  return authHelper.getEmployeeId(true);
}

function getParentCustomerId() {
  return authHelper.getDelegateCustomerId(true);
}

function getShopperId() {
  return authHelper.getShopperId(true);
}

function getCustomerId() {
  return authHelper.getCustomerId(true);
}

function getUserAgent() {
  return browserHelper.getNavigator().userAgent;
}

function getFederationPartnerId() {
  return authHelper.getFederationPartnerId();
}

const plidToHostMap = {
  'godaddy.com': '1',
  'mediatemple.net': '4500',
  'afternic.com': '497036'
};

function getPrivateLabelId() {
  // Lookup plid from info token
  const infoTokenPlid = authHelper.getClaimFromInfoToken('plid');
  if (infoTokenPlid) {
    return infoTokenPlid.toString();
  }

  // Lookup plid from the query string
  const plid = urlHelper.getQueryStringParameter('plid');
  if (plid) {
    return plid;
  }

  // Lookup plid for the designated host
  let host = browserHelper.getBaseHost('tcc.baseHost');
  host = host.replace('dev-', '').replace('test-', '').replace('stg-', '');
  if (plidToHostMap.hasOwnProperty(host)) {
    return plidToHostMap[host];
  }
}

// TODO: Jordan 2018-05-11 Move this into a schema.js decorator that only transforms input for GA
function getCouponCode(eventData) {
  if (eventData && eventData.coupon !== '???') {
    return eventData.coupon;
  }
}

function getQueryString() {
  // for reporting, the query string should be "readable"
  return decodeURIComponent(urlHelper.moveUtmContent(urlHelper.getCleanQueryString())) || '';
}

function getMarketCookie() {
  return cookieHelper.findCookie('market');
}

function getReferrer() {
  return browserHelper.getDocument().referrer;
}

function getIscCode() {
  return urlHelper.getQueryStringParameter('isc');
}

function isFOSImpression(eventData) {
  return (eventData && eventData.eventtype === 'impression' && eventData.e_id && !!eventData.e_id.match('^gce\.sales\./\..*')) || undefined;
}

function isFOSClick(eventData) {
  return (eventData && eventData.eventtype === 'click' && eventData.e_id && !!eventData.e_id.match('^gce\.sales\./\..*')) || undefined;
}

function isUXPImpression(eventData) {
  return (eventData && eventData.e_id && !!eventData.e_id.match('^uxp.hyd.int.salesheader.sales.impression$')) || undefined;
}

function isEIDClick(regex) {
  return (eventData) => {
    return (eventData && eventData.e_id && !!eventData.e_id.match(regex)) || undefined;
  };
}

function getCiCode() {
  return urlHelper.getQueryStringParameter('ci');
}

function _getUXCoreData(key) {
  const ux = browserHelper.getWindow().ux;
  if (ux && ux.data) {
    return ux.data[key];
  }
}

function getUXCoreApp() {
  return _getUXCoreData('app');
}

function getUXCoreAppName() {
  return _getUXCoreData('appName');
}

function getUXCoreManifestName() {
  return _getUXCoreData('manifest');
}

function getUXCoreManifestVersion() {
  return _getUXCoreData('manifestVersion');
}

const salesApps = [
  'www', 'ca', 'uk', 'sg', 'au',
  'in', 'mx', 'ph', 'br', 'my',
  'hk', 'tr', 'tw', 'co', 'pe',
  'pk', 'es', 'vn', 'nz', 'ar',
  'za', 'id', 'th', 'ie', 'ru',
  'fr', 'it', 'cl', 'de', 'nl',
  've', 'kr', 'jp', 'pt', 'ua',
  'ch', 'be', 'se', 'gr', 'dk',
  'fi', 'pl', 'no', 'at', 'cart',
  'ae', 'il', 'auctions', 'account',
  'myh', 'websites'];

let _isGdSalesSite;

function isGdSalesSiteBool() {
  if (typeof _isGdSalesSite === 'undefined') {
    _isGdSalesSite = false;

    const host = browserHelper.getHost();

    if (host.indexOf('godaddy.com') === -1) {
      return _isGdSalesSite;
    }

    const split = host.split('.');

    if (split.length >= 2) {
      // If this is FOS (i.e. w/o www), this is a sales app
      if (split.length === 2) {
        _isGdSalesSite = true;
      } else {
        // Check if a sales app is in the subdomain
        const subDomains = split.slice(0, split.length - 2);
        for (let i = 0; i < subDomains.length; i++) {
          const subDomain = subDomains[i];

          if (salesApps.indexOf(subDomain) > -1) {
            _isGdSalesSite = true;
            break;
          }
        }
      }
    }
  }
  return _isGdSalesSite;
}

function _getMetaContentVals(propertyName) {
  const valueList = [];
  const metaElms = browserHelper.getDocument().getElementsByTagName('meta');
  for (let i = 0; i < metaElms.length; i++) {
    const attributes = metaElms[i].attributes;
    const propertyAttr = attributes.property;
    const contentAttr = attributes.content;
    if (!propertyAttr || !contentAttr) {
      continue;
    }

    if (propertyAttr.value === propertyName) {
      valueList.push(contentAttr.value);
    }
  }
  return valueList;
}

function _formatCsv(valueList) {
  if (valueList.length > 0) {
    // Return as a CSV
    return valueList.join(',');
  }

  return undefined;
}

function getMetaTagVals() {
  const valueList = _getMetaContentVals('article:tag');
  return _formatCsv(valueList);
}

function getMetaPublishedTimeVals() {
  const valueList = _getMetaContentVals('article:published_time');
  return _formatCsv(valueList);
}

function getTCCVersion() {
  return config.get('tcc.buildVersion');
}

function getTCCRealm() {
  return config.get('tcc.realm');
}

function getContentGroup() {
  const contentGroup = config.get('tcc.gaContentGroup');
  if (typeof contentGroup === 'string') {
    const groups = contentGroup.split('/');
    for (let i = groups.length - 1; i >= 0; i--) {
      groups[i] = groups[i].trim();
      if (!groups[i]) {
        // remove the element if it has no value
        groups.splice(i, 1);
      }
    }
    // GA will handle the case of no groups
    if (groups.length > 0) {
      while (groups.length < 3) {
        groups.push('Other');
      }
    }
    return groups.join(' / ');
  }
  return contentGroup;
}

function getPageId() {
  return config.get('tcc.pageId');
}

function getTimestamp() {
  return dateHelper.getISODate();
}

function getGaClientId() {
  const notFound = 'Not Available';
  const clientId = gaTracker.getGaClientId();
  return clientId || notFound;
}

// Retrives the Correlation Id
function getCorrId() {
  return page.get('corrid');
}

function getLoadSource() {
  return page.get('loadSource');
}

function getMobileAppBool() {
  return typeof urlHelper.getQueryStringParameter('mdeviceid', true) !== 'undefined';
}

function getMobileAppName() {
  return urlHelper.getQueryStringParameter('native_app_name', true);
}

function getDccExtension(eventData) {
  if (eventData.e_id.match('^find\.sales\.domain_.*\.buy\.click$')) {
    return eventData.extension;
  }
}

function getQualtricsSurveyId() {
  return cookieHelper.findCookie('Qint_id');
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
  internalExports = {
    _setGdSalesSiteFlag: function _setGdSalesSiteFlag(flag) {
      _isGdSalesSite = flag;
    },
    _getMetaContentVals: _getMetaContentVals
  };
}

module.exports = object.merge(
  {
    getCiCode,
    getCorrId,
    getContentGroup,
    getCouponCode,
    getCustomerId,
    getDccExtension,
    getEmployeeId,
    getFederationPartnerId,
    getGaClientId,
    getIscCode,
    getLoadSource,
    getMarketCookie,
    getMetaTagVals,
    getMetaPublishedTimeVals,
    getMobileAppBool,
    getMobileAppName,
    getPageId,
    getParentCustomerId,
    getPrivateLabelId,
    getQualtricsSurveyId,
    getQueryString,
    getReferrer,
    getShopperId,
    getTCCRealm,
    getTCCVersion,
    getTimestamp,
    getUserAgent,
    getUXCoreApp,
    getUXCoreAppName,
    getUXCoreManifestName,
    getUXCoreManifestVersion,
    getVisitId,
    getVisitorId,
    isAuthenticated,
    isDelegated,
    isEIDClick,
    isEmployee,
    isFOSClick,
    isFOSImpression,
    isGdSalesSiteBool,
    isUXPImpression,
    trueOrUndefined
  },
  internalExports
);
