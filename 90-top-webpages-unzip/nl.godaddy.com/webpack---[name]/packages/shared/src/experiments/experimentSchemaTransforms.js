const browserHelper = require('@exp/exp-utils/helper/browser');
const object = require('@exp/exp-utils/helper/object');

/*      Shared Transformation Functions      */

const emptyStringForUndefined = (output) => {
  object.map(output, (filter) => {
    if (typeof output[filter] === 'undefined') {
      output[filter] = '';
    }
  });
  return output;
};

const filterLogType = (input) => {
  return input.length > 10 ? input.substr(0, 10) : input || '';
};

const getPackagesForGA = (data) => {
  if (!data.pkgs) return data;

  const pkgList = [];
  for (let i = 0; i < data.pkgs.length; i++) {
    if (data.pkgs[i].package_id) {
      pkgList.push(data.pkgs[i].package_id);
    }
  }

  // Cleanup GA doesn't need the raw pkg obj
  delete data.pkgs;

  // Set Datakey for filterMap
  data.package_id = pkgList.join(',');

  return data;
};

// Support V2 CJ purchase transformations
const _transformCjValues = (data) => {
  if (!data.items) return;

  [
    'product_id',
    'product_price_usd',
    'product_quantity'
  ].forEach((name) => {

    // Init Arrays
    data['cj_' + name] = [];

    // Populate Arrays for any items with a true cj flag
    data.items.forEach((item) => {
      if (item.cj === 'true') {
        data['cj_' + name].push(item[name]);
      }
    });

  });

  return data;
};

// Supports all V1 purchase transformations
// TODO Brandon 11/16/2018 Remove after Cart moves to V2 Purchase
// https://jira.godaddy.com/browse/EXP-1107
const transformForTealium = (data) => {
  const values = data.items || data.pkgs;

  for (let i = 0; i < values.length; i++) {
    const keys = Object.keys(values[i]);
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      data[key] = data[key] || [];
      const value = values[i][key];
      if (typeof value !== 'undefined') {
        data[key].push(value);
      }
    }
  }

  // Cleanup, Tealium doesn't need the raw data
  (data.items) ? delete data.items : delete data.pkgs;

  return data;
};

// Supports V2 purchase transformations
const transformForTealiumV2 = (data) => {
  const values = data.items || data.pkgs;

  // Handles all array creations except CJ
  values.forEach((ecommItem) => {
    Object.keys(ecommItem).forEach((key) => {
      data[key] = data[key] || [];
      data[key].push(ecommItem[key] || '');
    });
  });

  // Handle CJ Array Creations
  _transformCjValues(data);

  // Cleanup, Tealium doesn't need the raw data
  ['items', 'pkgs', 'properties'].forEach((key) => {
    if (data[key] === values) delete data[key];
  });
  delete data.cj;

  return data;
};

// Used with V1 Generic Conversions. Used to unnest the props passed in the
// properties object before sending to Tealium.
const unnestProperties = (data) => {
  if (!data.properties) return data;

  Object.keys(data.properties).forEach((key) => {
    data[key] = data.properties[key] || '';
  });

  delete data.properties;

  return data;
};

// Evaluates event data and modifies the eid if required data is present
// otherwise event data is passed through with no modifications. Must be handled before schema parse
// since order_total_new_usd will be removed from GA data.
const applyPurchaseEventEid = (data) => { // eslint-disable-line complexity
  if (data.new_customer && data.payment_pending &&
      !isNaN(parseFloat(data.order_total_new_usd)) &&
      !isNaN(parseFloat(data.order_total_renewal_usd))) {

    // Define conditionals to evaluate.
    const productEvals = {
      'new-and-renewal-products': (parseFloat(data.order_total_new_usd) > 0 && parseFloat(data.order_total_renewal_usd) > 0),
      'new-product-only': (parseFloat(data.order_total_new_usd) > 0 && parseFloat(data.order_total_renewal_usd) === 0),
      'renewal-product-only': (parseFloat(data.order_total_new_usd) === 0 && parseFloat(data.order_total_renewal_usd) > 0),
      'unknown-products': (parseFloat(data.order_total_new_usd) === 0 && parseFloat(data.order_total_renewal_usd) === 0)
    };

    // loop through productEvals and set newVsRenewal string
    let newVsRenewal;
    for (const option in productEvals) {
      if (productEvals[option] === true) {
        newVsRenewal = option;
      }
    }

    // Build new eid
    const eidArr = ['ecomm.payments.transaction.'];
    eidArr.push(data.new_customer === 'true' ? 'new-customer_' : 'existing-customer_');
    eidArr.push(data.payment_pending === 'true' ? 'payment-pending_' : 'payment-processed_');
    eidArr.push(newVsRenewal);
    eidArr.push('.modular-cart.success');

    // replace eid
    data.eid = eidArr.join('');
    data.new_vs_renewal = newVsRenewal;
  }

  return data;
};

const applyAddToCartEid = (data) => {
  if (!data) return;

  data.eid = 'gpd.exp.tcc.add-to-cart.success';
  return data;
};

const applyProductImpressionEid = (data) => {
  if (!data) return;

  data.eid = 'gpd.exp.tcc.product-impression.success';
  return data;
};

const validateEid = (input) => {
  let eid = input.eid;
  if (!eid) {
    eid = browserHelper.getClickEventData(input.dom_element, input.dom_event).e_id;
  }
  if (!eid) {
    throw 'Either eid or dom_element parameters are required';
  }
  return input;
};

// Join required properties and add derived eid to data.
const applyGenericConversionEid = (data) => {
  const { area, product, revenue, action } = data;

  // The addEvent handler uses e_id while completing validation
  data.eid = `tcc.conversion.${area}.${product}.${revenue}.${action}`;

  // Clean properties platforms do not need
  ['area', 'product', 'revenue', 'action'].forEach((key) => {
    delete data[key];
  });

  return data;
};

const removeUnwantedGaPurchaseProps = (data) => {
  delete data.order_total_new_usd;
  delete data.order_total_renewal_usd;

  return data;
};

let internalExports = {};
if (process.env.NODE_ENV !== 'production') {
  internalExports = {
    _transformCjValues: _transformCjValues
  };
}

module.exports = object.merge({
  applyAddToCartEid,
  applyProductImpressionEid,
  applyPurchaseEventEid,
  applyGenericConversionEid,
  emptyStringForUndefined,
  filterLogType,
  getPackagesForGA,
  removeUnwantedGaPurchaseProps,
  transformForTealium,
  transformForTealiumV2,
  unnestProperties,
  validateEid
},
internalExports
);
