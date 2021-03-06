import { Application } from 't3js';
import imageConverter from '../services/image-converter';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addBehavior('lazy-image-background', function(context) {
  'use strict';
  //-----------------------------------------------------------
  // Private
  //-----------------------------------------------------------
  var _element = context.getElement();
  var _eventHandlers = {};
  var _backgroundSrcAttribute = 'data-background-src';
  var _widthAttribute = 'data-width';
  var _resizeAttribute = 'data-resize';
  var _qualityAttribute = 'data-quality';
  var _cropAttribute = 'data-crop';
  var _fitAttribute = 'data-fit';
  var _fillAttribute = 'data-fill';
  var _downsizeAttribute = 'data-downsize';
  var _renderRetry = 0;

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------
  /**
   * Behavior for lazy loading images in the module
   * @mixin behavior:lazy-image
   */
  var lazyImage = {};

  /**
   * Loads module's images.
   * @memberOf behavior:lazy-image
   * @return {void}
   */
  function _render() {
    var progressiveImages = dom.find(_element, '.js-progressive-image');

    // For some case when module image won't rendered we need to wait
    // One waiting step is 250ms
    // Maximum waiting interval is 1sec
    if (!progressiveImages.length) {
      if (_renderRetry < 4) {
        _renderRetry++;
        setTimeout(_render, 250);

        return;
      }

      return;
    }

    progressiveImages.forEach(function(img) {
      var config = {};
      if (img.hasAttribute(_backgroundSrcAttribute)) {
        if (img.hasAttribute(_widthAttribute)) {
          config.width = img.getAttribute(_widthAttribute);
        }
        if (img.hasAttribute(_resizeAttribute)) {
          config.resize = img.getAttribute(_resizeAttribute);
        }
        if (img.hasAttribute(_qualityAttribute)) {
          config.quality = img.getAttribute(_qualityAttribute);
        }
        if (img.hasAttribute(_cropAttribute)) {
          config.crop = img.getAttribute(_cropAttribute);
        }
        if (img.hasAttribute(_fitAttribute)) {
          config.fit = img.getAttribute(_fitAttribute);
        }
        if (img.hasAttribute(_fillAttribute)) {
          config.fill = img.getAttribute(_fillAttribute);
        }
        if (img.hasAttribute(_downsizeAttribute)) {
          config.fill = img.getAttribute(_downsizeAttribute);
        }

        dom.setStyle(img, {
          backgroundImage: `url('${imageConverter.generate(img.getAttribute(_backgroundSrcAttribute), config)}')`
        });
      }
    });
  }

  _eventHandlers[util.getUniqueEventName('viewport-active', _element)] = _render;

  lazyImage.messages = util.getKeys(_eventHandlers);

  /**
   * Handles event subscriptions.
   * @param {String} msg - event name.
   * @param {*} data - event data.
   * @listens viewport-active
   * @return {void}
   */
  lazyImage.onmessage = function(msg, data) {
    var handler = _eventHandlers[msg];
    if (typeof handler === 'function') {
      handler.call(this, data);
    }
  };

  /**
   * Initialization logic.
   * @ignore
   * @return {void}
   */
  lazyImage.init = function() {
  };

  /**
   * Cleanup.
   * @ignore
   * @return {void}
   */
  lazyImage.destroy = function() {
    _element = null;
  };

  return lazyImage;
});
export const name = 'lazy-image-background';
