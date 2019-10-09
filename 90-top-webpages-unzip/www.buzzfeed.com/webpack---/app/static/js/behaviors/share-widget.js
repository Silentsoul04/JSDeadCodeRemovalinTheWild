import { Application } from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';
import feedSharing from '../services/feed-sharing';

//get facebook and pinterest services to trigger sdk loading
import facebook from '../services/facebook';
import pinterest from '../services/pinterest';
import sms from '../services/sms';
import tumblr from '../services/tumblr';
import twitter from '../services/twitter';

const shareServices = {
  facebook,
  twitter,
  pinterest,
  sms,
  tumblr
};

Application.addBehavior('share-widget', function(context) {
  'use strict';
  var _platforms;
  var _isVideo;
  var _eventHandlers = {};
  var _element = context.getElement();
  var _behavior = {};
  var cardId;

  function _share(network, ev, data) {
    var shareService = shareServices[network];
    var platform;
    var platformData = {};
    var shareData = {};
    data = data || {};
    if (shareService) {
      //try to take data from module config
      if (_platforms) {
        platform = _platforms.filter(function(item) {
          return item.name === network;
        })[0];
        if (platform) {
          platformData = platform && platform.shareData ? platform.shareData : {};
          // Remove empty strings
          util.each(platformData, function(key, val) {
            if (val === '') {
              delete platform.shareData[key];
            }
          });
        }
        //Use platform data and additional data passed into function
        shareData = util.extend({}, platformData, data);
        shareService.share(shareData, ev);
      }
    }

    if (_isVideo) {
      var parentEl = dom.closest(_element, '.card');
      var videoEl = '';
      if (parentEl) {
        videoEl = dom.find(parentEl, '.js-native-video')[0];
      }
      var name;
      if (parentEl && videoEl) {
        name = util.getUniqueEventName('share-widget:share-video', videoEl);
      }
      if (name) {
        context.broadcast(name, {'network': network, });
      }
    }
  }

  /**
   * Triggers sharing dialogue according to `data.network` field
   * @param {Object} data - data to be shared
   * @param {String} data.network - required. Social network to be shared with
   * @param {Event} data.event - DOM Event object which triggered sharing initially
   * @param {HTMLElement} data.element - element which was clicked initially
   * @returns {void}
   */
  function _onShare(data) {
    var network = data.network;
    var event = data.event;
    delete data.event;
    delete data.network;
    delete data.element;
    _share(network, event, data);
  }

  _eventHandlers[util.getUniqueEventName('share', _element)] = _onShare;
  _behavior.messages = util.getKeys(_eventHandlers);

  _behavior.onclick = function(ev, elem, elemType) {
    if (elemType === 'sharing-button') {
      _share(elem.getAttribute('data-bfa-network'), ev);
    }
  };

  /**
   * Handles event subscriptions.
   * @param {String} msg - event name.
   * @param {*} data - event data.
   * @listens share-click
   * @return {void}
   */
  _behavior.onmessage = function(msg, data) {
    var handler = _eventHandlers[msg];
    if (typeof handler === 'function') {
      handler.call(this, data);
    }
  };

  _behavior.init = function() {
    facebook.init();
    pinterest.init();

    cardId = context.getConfig('cardId');
    var fAd = context.getConfig('fAd');
    if (fAd) {
      cardId = 'wid:' + cardId;
    }
    var cardData = feedSharing.getData(cardId);
    _platforms = cardData.platforms;
    _isVideo = cardData.type === 'video';
  };

  _behavior.destroy = function() {
    _platforms = null;
    _isVideo = null;
  };

  return _behavior;
});
export const name = 'share-widget';
