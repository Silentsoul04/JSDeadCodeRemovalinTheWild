import util from '@buzzfeed/buzzblocks/js/services/util';

//-----------------------------------------------------------
// Private
//-----------------------------------------------------------
var _currentPriorities;
var _lastOrder;
var _priorities = {
  referrer: ['facebook', 'pinterest', 'twitter', ],
  general: ['facebook', 'email', 'pinterest', 'twitter', ],
};
var _topBarSize = 1;
var _referrer;

/**
 * Check if user came from appropriate social netework
 * @returns {Boolean} true if we should use `referrer` priorities list, false otherwise
 */
function _checkReferrer() {
  if (_referrer && (
    _referrer === 'facebook' ||
      _referrer === 'pinterest' ||
      _referrer === 'tweet'
  )) {
    return true;
  }
  return false;
}

/**
 * Pick priorities list depending on business logic
 * @param {Object} options - options object passed into `manage`
 * @returns {void}
 */
function _setPriorities() {
  if (_checkReferrer()) {
    _currentPriorities = _priorities.referrer;
  } else {
    _currentPriorities = _priorities.general;
  }
  _lastOrder = _currentPriorities.length;
}

/**
 * Calcualtes button's order depending on current priorities list
 * @param {Object} button - share button object
 * @returns {Number|undefined} order number
 */
function _getOrder(button) {
  if (!button) {
    return undefined;
  }
  //if button is present in priorities list - use this order
  if (_currentPriorities.indexOf(button.name) !== -1) {
    return _currentPriorities.indexOf(button.name);
  } else { //if button is not present - give next not used order position
    return _lastOrder++;
  }
}

/**
 * Calculate size for share button
 * @todo implement sizing logic
 * @param {Object} button - current button data
 * @param {Object} options - options object passed into `manage`
 * @param {Array} buttons - list of button objects
 * @returns {Number} button size
 */
function _getSize(button) {
  if (button && button.order === 0) {
    return 2;
  }
  return 1;
}

//-----------------------------------------------------------
// Public
//-----------------------------------------------------------

/**
 * Service contains logic for managing share buttons visibility, order and size.
 * @exports service:share-manager
 */
var _service = {};

/**
 * Add order, visibility and size properties
 * @param {Array} buttons - list of button objects
 * @param {Object} options - options object which affect ordering logic(`position` etc)
 * @returns {Array} new list of objects with additions properties
 */
_service.manage = function(buttons, options) {
  var result = [];
  //set priorities each time because they may rely on some dynamic params or options object
  _setPriorities(options);
  //set properties for all buttons
  util.each(buttons, function(key, value) {
    var button = util.extend({}, value);
    button.order = _getOrder(button);
    button.isVisible = 1;
    button.size = 1;
    result.push(button);
  });
  if (options.position === 'top' || options.position === 'bottom') {
    util.each(result, function(key, button) {
      button.isVisible = button.order < _topBarSize ? 1 : 0;
      button.size = _getSize(button, options, buttons);
    });
  } else if (options.position === 'more') {
    util.each(result, function(key, button) {
      button.isVisible = button.order < _topBarSize ? 0 : 1;
    });
  }
  return result;
};

export default _service;
