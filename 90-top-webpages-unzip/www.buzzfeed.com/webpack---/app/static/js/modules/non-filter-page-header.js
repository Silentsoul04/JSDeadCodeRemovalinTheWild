import { Application } from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addModule('non-filter-page-header', function(context) {
  'use strict';
  //-----------------------------------------------------------
  // Private
  //-----------------------------------------------------------

  // vars
  var _updated = false;
  var _eventHandlers = {};
  var _module = {};

  // els
  var _element = context.getElement();

  function _onUpdate() {
    if (!_updated) {
      _updated = true;
      var mainTitleText = context.getConfig('main_title');
      var parentTitle = dom.findOne(_element, '.js-non-filter-page-header__parent-title');
      var mainTitle = dom.findOne(_element, '.js-non-filter-page-header__main-title');
      dom.hide(parentTitle);
      dom.setHTML(mainTitle, mainTitleText);
    }
  }

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------

  _eventHandlers['feed-clear'] = _onUpdate;

  _module.messages = util.getKeys(_eventHandlers);

  _module.onmessage = function(msg, data) {
    var handler = _eventHandlers[msg];
    if (typeof handler === 'function') {
      handler.call(this, data);
    }
  };

  /**
   * Cleanup
   * @ignore
   * @returns {void}
   */
  _module.destroy = function() {
    _updated = null;
    _element = null;
  };

  return _module;
});
