import { Application as application } from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';

var _template = require('../../components/homepage/modal-dialog/modal-dialog.html');
var _isVisible = false;
var _modalEl;
var _contentEl;
var _headerEl;
var _headerTextEl;

/**
 * Service for modal dialog widget.
 * @exports service:modal-dialog
 */
var service = {};

/**
 * Set dialog content
 * @param {Object} content - object with content data
 * @param {String} content.html - html to be placed into content block
 * @param {Function} [content.onclick] - optional click handler
 * @returns {void}
 */
function _setContent(content) {
  if (content.html) {
    dom.setHTML(_contentEl, content.html);
  }

  if (content.onclick) {
    dom.on(_contentEl, 'click', content.onclick);
  }
}

/**
 * Set dialog header
 * @param {Object} header - object with header data
 * @param {String} header.html - html to be placed into header
 * @param {Function} [header.onclick] - optional click handler
 * @returns {void}
 */
function _setHeader(header) {
  if (header.html) {
    dom.setHTML(_headerTextEl, header.html);
  }

  if (header.onclick) {
    dom.on(_headerEl, 'click', header.onclick);
  }
}

function _render(data) {
  //remove old modal before adding new
  if (_modalEl) {
    dom.remove(_modalEl);
  }
  _modalEl = dom.stringToHTML(_template.render(data))[0];
  _contentEl = dom.find(_modalEl, '.js-modal__content')[0];
  _headerEl = dom.find(_modalEl, '.js-modal__header')[0];
  _headerTextEl = dom.find(_modalEl, '.js-modal__header__text')[0];
  dom.on(dom.find(_modalEl, '.js-modal__button-close')[0], 'click', service.hide);

  //add new modal
  document.body.appendChild(_modalEl);
}

/**
 * Shows modal dialog with specified content.
 * @param {Object} options - content to display on modal.
 * @return {void}
 */
service.show = function(options) {
  options = options || {};
  _render(options.data || {});
  if (options.content) {
    _setContent(options.content);
  }
  if (options.header) {
    _setHeader(options.header);
  }
  if (typeof options.callback === 'function') {
    //@todo think which other data may be needed
    options.callback.call(this, _modalEl);
  }
  dom.addClass(document.body, 'js-show-modal');
  _isVisible = true;
  application.broadcast('modal-opened');
};

/**
 * Hides modal dialog.
 * @return {void}
 */
service.hide = function() {
  if (!_modalEl) {
    return;
  }
  dom.removeClass(document.body, 'js-show-modal');
  _isVisible = false;
  application.broadcast('modal-closed');
};

/**
 * Hides modal dialog.
 * @return {void}
 */
service.isVisible = function() {
  return _isVisible;
};

export default service;
