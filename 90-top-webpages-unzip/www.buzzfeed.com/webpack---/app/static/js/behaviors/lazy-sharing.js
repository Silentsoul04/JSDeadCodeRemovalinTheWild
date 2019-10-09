import { Application } from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import feedSharing from '../services/feed-sharing';
import localization from '@buzzfeed/buzzblocks/js/services/localization';
import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addBehavior('lazy-sharing', function(context) {
  'use strict';
  var _element = context.getElement();
  var fAd = context.getConfig('fAd');

  var _behavior = {};
  var _eventHandlers = {};
  var _showId;

  var _shareOptions = {
    more: {
      name: 'more',
      type: 'more-button',
      bfa: {
        d: 'More',
      },
    },
  };

  //-----------------------------------------------------------
  // Public
  //-----------------------------------------------------------

  /**
   * Render share bar
   * @return {void}
   */
  function _render() {
    var data = context.getConfig();
    var parentEl;

    if(_showId) {
      data.show_id = _showId;
    }

    if (data && (feedSharing.findUrl(data) || fAd)) {
      data.i18n = {
        SHARE: localization.getTranslation('SHARE'),
      };
      if (!data.platforms) {
        data.platforms = feedSharing.getPlatforms(data);
      }
      data.more = _shareOptions.more;

      const shareTemplate = fAd
        ? require('../../components/homepage/ads/_feed-card-ad-share.html')
        : require('../../components/homepage/share/_feed-card-share.html');

      dom.append(_element, shareTemplate.render(data));
      context.application.startAll(_element);
    } else {
      dom.hide(_element);
      parentEl = dom.closest(_element, '.card');
      dom.addClass(parentEl, 'card--no-shares');
    }
  }

  function _getShowId(data) {
    if(data.show_id) {
      _showId = data.show_id;
    }
  }

  _eventHandlers[util.getUniqueEventName('viewport-active', _element)] = _render;
  _eventHandlers['video-player-loaded-video'] = _getShowId;

  _behavior.messages = util.getKeys(_eventHandlers);

  /**
   * Handles event subscriptions.
   * @param {String} msg - event name.
   * @param {*} data - event data.
   * @listens viewport-active
   * @return {void}
   */
  _behavior.onmessage = function(msg, data) {
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
  _behavior.init = function() {};

  /**
   * Cleanup.
   * @ignore
   * @return {void}
   */
  _behavior.destroy = function() {};

  return _behavior;
});
export const name = 'lazy-sharing';
