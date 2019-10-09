/* Filter map that is used to
    1. Define the custom dimension configuration for GA
    2. Build a GA parameter for each custom dimension configuration in GA
    3. Build a GA parameter that will automatically pull from an object (i.e. tData for Traffic events)

   Map Template:
     'filter_name': {
        'cd_scope': {
            1: 'hit',
            2: 'session'
        },
        'fn': _getFilterFunctionValue
     }

    'filter_name' (Required)
      For a Generic GA Parameter:
        If you are not mapping a custom dimension, this configuration should match the
        GA parameter value that you are trying to pass. This will be used to build the
        call to GA, as seen in the following example.

          _gtag('event', 'click', {filter_name: value})

      For a Custom Dimension:
        If filtering a custom dimension, this should match the custom dimension
        name that is setup in GA. However, if there are multiple scopes under
        the same custom dimension (i.e. shopper_id_hit and shopper_id_session)
        you would set this value to the common prefix (shopper_id).

    'cd_scope' (Optional)
        Maps the config to the custom dimension # in GA.
         * If there are mutliple scopes under this custom dimension, then include each scope's custom dimension #.
         * Each scope will be mapped to a separate custom dimension, appending the scope name to the filter_name

        As an example, the above template would build the definitions
        'custom_dimension_name_hit' and 'custom_dimension_name_session' where
        the hit maps to GA's Custom Dimension #1 and the session maps to
        GA's Custom Dimension #2.

        If you are only mapping a single index, use undefined or an empty string:
          { 5: undefined } or { 5: '' }

    'cm_scope' (Optional)
        Maps the config to the custom metric # in GA.
        This follows the SAME logic as cd_scope, but for metrics instead of dimensions.

      Properties are able to be both a custom metric  and custom dimension as long they do not share a
      a common scope (ie 'hit' or 'session'). A common scope will cause issues with duplicate keys in maps

      cd_scope and cm_scope example:
        'filter_name': {
           'cd_scope': {
               1: 'hit'
           },
           'cm_scope': {
             2: 'session'
           },
           'fn': _getFilterFunctionValue
        }

    'fn' (Optional)
        Function will be called to fetch the value for a filter.
        If a function is not specified, the data_key property must be configured.

    'data_key' (Optional) [This setting can be a string or a list of strings]
        If defined as a string, the value will be fetched from the eventData using the data_key key.

        If defined as a list of strings, the first value that is found in the eventData will be used.

        If the data_key is not specified, the function property must be configured.

    'value' (Optional)
        If defined, this static value will be used for the CD rather than calculating the value
        from event data or a filterMethod function.
*/

/* eslint-disable id-length */
const arrayHelper = require('@exp/exp-utils/helper/array');
const object = require('@exp/exp-utils/helper/object');
const filterMethods = require('./filterMethods');

const _filterMap = {
  visitguid: {
    cd_scope: {
      1: 'hit',
      2: 'session'
    },
    fn: filterMethods.getVisitId
  },
  visitorguid: {
    cd_scope: {
      3: 'hit',
      4: 'session',
      5: 'user_scoped'
    },
    fn: filterMethods.getVisitorId
  },
  shopper_id: {
    cd_scope: {
      6: 'hit',
      7: 'session',
      8: 'user_scoped'
    },
    fn: filterMethods.getShopperId
  },
  customer_id: {
    cd_scope: {
      9: 'hit',
      10: 'session',
      11: 'user_scoped'
    },
    fn: filterMethods.getCustomerId
  },

  parent_customer_id: {
    cd_scope: {
      12: 'hit',
      13: 'session',
      14: 'user_scoped'
    },
    fn: filterMethods.getParentCustomerId
  },
  logged_in_status: {
    cd_scope: {
      15: 'hit'
    },
    fn: filterMethods.isAuthenticated
  },
  logged_in_status_defined: {
    cd_scope: {
      16: 'session'
    },
    fn: filterMethods.trueOrUndefined(filterMethods.isAuthenticated)
  },
  customer_agent_id: {
    cd_scope: {
      17: 'hit',
      18: 'session',
      19: 'user_scoped'
    },
    fn: filterMethods.getEmployeeId
  },
  customer_agent_bool: {
    cd_scope: {
      20: 'hit'
    },
    fn: filterMethods.isEmployee
  },
  customer_agent_bool_defined: {
    cd_scope: {
      21: 'session'
    },
    fn: filterMethods.trueOrUndefined(filterMethods.isEmployee)
  },
  delegated_bool: {
    cd_scope: {
      22: 'hit'
    },
    fn: filterMethods.isDelegated
  },
  delegated_bool_defined: {
    cd_scope: {
      23: 'session'
    },
    fn: filterMethods.trueOrUndefined(filterMethods.isDelegated)
  },
  market: {
    cd_scope: {
      24: 'hit',
      25: 'session'
    },
    fn: filterMethods.getMarketCookie
  },
  referrer: {
    cd_scope: {
      26: 'hit'
    },
    fn: filterMethods.getReferrer
  },
  isc: {
    cd_scope: {
      27: 'hit',
      28: 'session'
    },
    fn: filterMethods.getIscCode
  },
  user_agent: {
    cd_scope: {
      30: 'hit',
      31: 'session'
    },
    fn: filterMethods.getUserAgent
  },
  querystring: {
    cd_scope: {
      32: 'hit'
    },
    fn: filterMethods.getQueryString
  },
  privatelabelid: {
    cd_scope: {
      33: 'hit',
      34: 'session'
    },
    fn: filterMethods.getPrivateLabelId
  },
  ci_code: {
    cd_scope: {
      40: 'hit',
      41: 'session'
    },
    fn: filterMethods.getCiCode
  },
  content_meta_tagging_values: {
    cd_scope: {
      // we do not want a prefix here. use an empty string
      43: ''
    },
    fn: filterMethods.getMetaTagVals
  },
  timestamp: {
    cd_scope: {
      44: 'hit'
    },
    fn: filterMethods.getTimestamp
  },
  eid_experimentation_exp_id: {
    cd_scope: {
      47: 'hit',
      48: 'session'
    },
    data_key: 'experiment_id'
  },
  eid_experimentation_variant_id: {
    cd_scope: {
      45: 'hit',
      46: 'session'
    },
    data_key: 'variant_id'
  },
  eid_sitecore_block_id: {
    cd_scope: {
      50: 'hit'
    },
    data_key: 'block_id'
  },
  eid_sitecore_module_id: {
    cd_scope: {
      51: 'hit'
    },
    data_key: 'module_id'
  },
  location_uri: {
    cd_scope: {
      52: 'hit'
    },
    data_key: 'page_uri'
  },
  google_client_id: {
    cd_scope: {
      53: 'hit',
      54: 'session',
      55: 'user_scoped'
    },
    fn: filterMethods.getGaClientId
  },
  uxcore_app: {
    cd_scope: {
      56: 'hit'
    },
    fn: filterMethods.getUXCoreApp
  },
  uxcore_appname: {
    cd_scope: {
      57: 'hit'
    },
    fn: filterMethods.getUXCoreAppName
  },
  uxcore_manifest_name: {
    cd_scope: {
      58: 'hit'
    },
    fn: filterMethods.getUXCoreManifestName
  },
  uxcore_manifest_version: {
    cd_scope: {
      59: 'hit'
    },
    fn: filterMethods.getUXCoreManifestVersion
  },
  is_gd_salessite_bool: {
    cd_scope: {
      62: 'hit'
    },
    fn: filterMethods.isGdSalesSiteBool
  },
  is_gd_salessite_bool_defined: {
    cd_scope: {
      63: 'session'
    },
    fn: filterMethods.trueOrUndefined(filterMethods.isGdSalesSiteBool)
  },
  item_tracking_code: {
    cd_scope: {
      64: 'product'
    }
  },
  purchase_payment_pending_bool: {
    cd_scope: {
      65: 'hit'
    },
    data_key: 'payment_pending'
  },
  purchase_discount_applied_usd: {
    cd_scope: {
      66: 'hit'
    },
    cm_scope: {
      3: ''
    },
    data_key: 'order_discount_usd'
  },
  purchase_payment_processor: {
    cd_scope: {
      67: 'hit'
    },
    data_key: 'payment_processor'
  },
  purchase_is_first_order: {
    cd_scope: {
      68: 'hit',
      69: 'session'
    },
    data_key: 'first_order'
  },
  purchase_is_new_customer: {
    cd_scope: {
      70: 'hit',
      71: 'session'
    },
    data_key: 'new_customer'
  },
  purchase_is_activation_redirect: {
    cd_scope: {
      72: 'hit'
    },
    data_key: 'activation_redirect'
  },
  content_meta_tagging_article_published_time: {
    cd_scope: {
      84: 'hit'
    },
    fn: filterMethods.getMetaPublishedTimeVals
  },
  gocentral_optimizely_experiment: {
    cd_scope: {
      85: 'session'
    }
  },
  correlation_id: {
    cd_scope: {
      87: 'hit'
    },
    fn: filterMethods.getCorrId
  },
  federation_partner_id: {
    cd_scope: {
      89: 'user'
    },
    fn: filterMethods.getFederationPartnerId
  },
  traffic_load_source: {
    cd_scope: {
      91: 'hit'
    },
    fn: filterMethods.getLoadSource
  },
  purchase_new_vs_renewal: {
    cd_scope: {
      92: ''
    },
    data_key: 'new_vs_renewal'
  },
  page_id: {
    cd_scope: {
      93: 'hit'
    },
    fn: filterMethods.getPageId
  },
  traffic_tcc_version: {
    cd_scope: {
      94: 'hit'
    },
    fn: filterMethods.getTCCVersion
  },
  product_package_id: {
    cd_scope: {
      95: 'product'
    },
    data_key: 'package_id'
  },
  native_mobile_app_bool: {
    cd_scope: {
      96: 'session'
    },
    fn: filterMethods.getMobileAppBool
  },
  native_mobile_appname: {
    cd_scope: {
      97: 'session'
    },
    fn: filterMethods.getMobileAppName
  },
  hit_id: {
    cd_scope: {
      98: 'hit'
    },
    data_key: ['hit_id']
  },
  realm: {
    cd_scope: {
      99: 'hit',
      100: 'session'
    },
    fn: filterMethods.getTCCRealm
  },
  existing_shopper: {
    cd_scope: {
      102: 'user_scoped',
      107: 'session'
    },
    value: '0'
  },
  eid_experimentation_content_id: {
    cd_scope: {
      103: 'hit',
      104: 'session'
    },
    data_key: 'content_id'
  },
  eid_experimentation_source_id: {
    cd_scope: {
      105: 'hit',
      106: 'session'
    },
    data_key: 'experiment_source'
  },
  add_to_cart_domain_extension: {
    cd_scope: {
      108: 'hit'
    },
    fn: filterMethods.getDccExtension
  },
  eid_experimentation_qualtrics_survey_id_hit: {
    cd_scope: {
      109: 'hit'
    },
    fn: filterMethods.getQualtricsSurveyId
  },
  eid_fos_impressions: {
    cm_scope: {
      1: ''
    },
    fn: filterMethods.isFOSImpression
  },
  eid_fos_clicks: {
    cm_scope: {
      2: ''
    },
    fn: filterMethods.isFOSClick
  },
  uxp_impression: {
    cm_scope: {
      4: 'hit'
    },
    fn: filterMethods.isUXPImpression
  },
  uxp_product_nav_click: {
    cm_scope: {
      5: 'hit'
    },
    fn: filterMethods.isEIDClick('^uxp\.hyd\.product_nav\..*\.click$')
  },
  uxp_sales_header_click: {
    cm_scope: {
      6: 'hit'
    },
    fn: filterMethods.isEIDClick('^uxp\.hyd\.sales_header\..*\.click$')
  },
  uxp_shared_click: {
    cm_scope: {
      7: 'hit'
    },
    fn: filterMethods.isEIDClick('^uxp\.hyd\.shared\..*\.click$')
  },
  uxp_sales_footer_click: {
    cm_scope: {
      8: 'hit'
    },
    fn: filterMethods.isEIDClick('^uxp\.hyd\.sales_footer\..*\.click$')
  },
  event_label: {
    data_key: ['experiment_id', 'event_label', 'eid_label']
  },
  event_category: {
    data_key: ['event_category', 'eventtype']
  },
  event_action: {
    data_key: 'eid'
  },
  content_group1: {
    fn: filterMethods.getContentGroup
  },
  coupon: {
    fn: filterMethods.getCouponCode
  }
};

function _getValueFromEventData(map, eventData) {
  let value;
  const dataKey = map.data_key;

  if (eventData) {
    // if the eventData key is an array of keys, check
    // each key in the eventData until one is found.
    if (arrayHelper.isArray(dataKey)) {
      for (let i = 0; i < dataKey.length; i++) {
        const key = dataKey[i];
        if (eventData.hasOwnProperty(key)) {
          value = eventData[key];
          break;
        }
      }
    } else {
      value = eventData[dataKey];
    }
  }

  return value;
}

// Translate custom dimension results to the proper GA format
function _parseValue(value) {
  // We will be representing true/false as a string encoded bit in GA
  if (value === true) {
    return '1';
  } else if (value === false) {
    return '0';
  }

  // Rather than passing an empty string, we will send undefined to GA
  if (value === '') {
    return undefined;
  }

  return value;
}

function _getValueForFilter(map, eventData) {
  // If a static value is configured for the CD, return it
  if (typeof map.value !== 'undefined') {
    return map.value;
  }

  let value;
  const fn = map.fn;
  // If a function is defined for this filter, call it
  if (fn) {
    try {
      value = map.fn(eventData);
    } catch (err) {} // eslint-disable-line no-empty
  } else {
    // Lets try parsing the eventData obj to see if any keys
    // match for this filter.
    value = _getValueFromEventData(map, eventData);
  }

  return _parseValue(value);
}

// If customVariableTypes is true, all of the custom dimension / custom metric filters will be returned
// If customVariableTypes is false, all of the generic properties (i.e. not custom dimensions or custom filters) will be returned
function _getFilterMap(customVariableTypes) {
  const result = {};
  object.map(_filterMap, (filter, map) => {
    // If we're looking for custom variable types but neither custom dimension or custom metric scopes are defined
    if (customVariableTypes === true && map.cd_scope === undefined && map.cm_scope === undefined) {
      return;
    }
    // If we're looking for non custom variable types but either custom dimension or custom metric scope is defined
    if (customVariableTypes === false && (map.cd_scope !== undefined || map.cm_scope !== undefined)) {
      return;
    }
    result[filter] = map;
  });
  return result;
}

// Use the filter map to either build the custom variable
// definitions or fetch all of the custom variable values
function _customVariableLookup(fetchValues, eventData) {
  const result = {};

  const customVariableTypes = true;
  const customVariables = _getFilterMap(customVariableTypes);

  object.map(customVariables, (variable, map) => {
    const customScopes = ['cd_scope', 'cm_scope'];
    for (let x = 0; x < customScopes.length; x++) {
      if (map.hasOwnProperty(customScopes[x])) {

        // Assume Dimension but check for Metric
        let customVariableType = 'dimension';
        let scopeMap = map.cd_scope;
        if (customScopes[x] === 'cm_scope') {
          scopeMap = map.cm_scope;
          customVariableType = 'metric';
        }

        const indices = Object.keys(scopeMap);

        let value;
        if (fetchValues) {
          // fetch the value early so that we can
          // apply it it to each scope definition
          value = _getValueForFilter(map, eventData);
        }

        // Append scope to parameter name
        for (let i = 0; i < indices.length; i++) {
          const index = indices[i];
          let variableName = variable;
          if (scopeMap && scopeMap.hasOwnProperty(index)) {
            const scopeName = scopeMap[index];
            if (scopeName) {
              variableName += `_${scopeName}`;
            }
          }

          // if we're fetching the values, add the value as a key value pair
          if (fetchValues) {
            result[variableName] = value;
          } else {
            // if we're fetching the config, add the dimension/metric config information
            result[customVariableType + index] = variableName;
          }
        }
      }
    }
  });
  return result;
}

function _getNonCustomVariableValues(eventData) {
  const result = {};

  const customDimensionTypes = false;
  const filters = _getFilterMap(customDimensionTypes);
  object.map(filters, (filter, map) => {
    result[filter] = _getValueForFilter(map, eventData);
  });
  return result;
}

// Returns a key/value dictionary of the filter
// map that will be used to configure gtag
function getCustomVariableConfig() {
  const fetchValues = false;
  return _customVariableLookup(fetchValues);
}

// Returns a key/value dictionary of all filters
// and their calculated values

// eventData key/value object will be used to fetch
// filters that have a defined 'data_key'
function getValuesForFilterMap(eventData) {
  const fetchValues = true;
  const customVariableValues = _customVariableLookup(fetchValues, eventData);
  const nonCustomVariableValues = _getNonCustomVariableValues(eventData);
  return object.merge(customVariableValues, nonCustomVariableValues);
}

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
  internalExports = {
    _getValueForFilter: _getValueForFilter,
    _getValueFromEventData: _getValueFromEventData
  };
}

module.exports = object.merge(
  {
    getCustomVariableConfig: getCustomVariableConfig,
    getValuesForFilterMap: getValuesForFilterMap
  },
  internalExports
);
