import {
    Application
} from 't3js';
import shareManager from '../services/share-manager';
import feedSharing from '../services/feed-sharing';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addBehavior('share-managed', function(context) {
    'use strict';

    var _platforms;
    var _position;
    var _element = context.getElement();
    var _behavior = {};

    function _manage() {
        var managed = shareManager.manage(_platforms, {
            position: _position,
        });

        util.each(managed, function(key, button) {
            var el = dom.find(_element, '.js-action-bar--' + button.name)[0];
            if (!el) {
                return;
            }

            //set visibility state
            if (!button.isVisible) {
                dom.hide(el);
                return;
            }

            //set order
            if (typeof button.order !== 'undefined') {
                dom.addClass(el, 'flex-order--' + button.order);
            }
            //set size
            if (typeof button.size !== 'undefined') {
                dom.addClass(el, 'flex-grow--' + button.size);
            }
        });
    }

    var _eventHandlers = [];
    _behavior.messages = util.getKeys(_eventHandlers);
    _behavior.onmessage = function(msg, data) {
        var handler = _eventHandlers[msg];
        if (typeof handler === 'function') {
            handler.call(this, data);
        }
    };

    _behavior.init = function() {
        var cardId = context.getConfig('cardId');
        var fAd = context.getConfig('fAd');
        if (fAd) {
            cardId = 'wid:' + cardId;
        }
        _platforms = feedSharing.getPlatforms({
            id: cardId
        });
        _position = context.getConfig('position');
        _manage();
    };

    _behavior.destroy = function() {
        //    _platforms = null;
        //    _util = null;
    };

    return _behavior;
});
export const name = 'share-managed';