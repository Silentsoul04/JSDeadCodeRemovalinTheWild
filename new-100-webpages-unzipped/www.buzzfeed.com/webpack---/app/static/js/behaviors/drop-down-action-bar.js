import {
    Application
} from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import feedSharing from '../services/feed-sharing';
import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addBehavior('drop-down-action-bar', function(context) {
    'use strict';

    var _moreBarElement;
    var _dropDownElement;
    var _element;

    var _isOpened = false;
    var _eventHandlers = [];
    var _cardId;
    var _cardData;
    var _behavior = {};
    var _fAd;


    /**
     * Fire action for close other opened drop-down bars
     */
    function _fireShowBar() {
        context.broadcast('show-drop-down-action-bar', {
            element: _element,
        });
    }

    /**
     * Hide dropdown bar
     */
    function _hideBar() {
        if (_isOpened) {
            dom.hide(_dropDownElement);
            dom.removeClass(_moreBarElement, 'more-button--opened');
            _isOpened = false;
        }
    }

    /**
     *  Hide not current opened dropdown bars
     * @param {Object} data - {
     *                          element - drop-down element
     *                        }
     */
    function _onShowBar(data) {
        if (data.element === _element) {
            return;
        }
        _hideBar();
    }

    /**
     * Show drop-down bar
     */
    function _showBar() {
        _isOpened = true;
        dom.show(_dropDownElement);
        dom.addClass(_moreBarElement, 'more-button--opened');
    }

    /**
     * Render and insert drop-down bar to html
     */
    function _renderBar() {
        var data = {
            position: 'more',
            cardPosition: _cardData.position,
            isMore: 1,
            id: _cardId,
            platforms: _cardData.platforms,
        };

        if (_fAd) {
            data.fAd = 1;
        }

        var template = require('../../components/homepage/share/_feed-share-dropdown.html');
        var string = template.render(data);
        dom.append(_moreBarElement, string);
        _dropDownElement = dom.find(_element, '.action-bar-dropdown')[0];
        context.application.start(_dropDownElement);
        _showBar();
        dom.on(window, 'click', _hideBar);
    }

    _eventHandlers['show-drop-down-action-bar'] = _onShowBar;

    _behavior.messages = util.getKeys(_eventHandlers);

    _behavior.onclick = function(ev, elem, elemType) {
        if (elemType === 'more-button') {
            _moreBarElement = elem;

            ev.preventDefault();
            ev.stopPropagation();

            var bfaRoute = 'track/click/share';
            var bfaData = {
                n: 'click:open-share-sheet',
                l: 'Feed',
                d: '',
                opt: {
                    dimension2: _cardId,
                    dimension4: _cardData.name
                }
            };

            if (_cardData.videos) {
                bfaData.opt.dimension3 = _cardId;
            }

            util.bfaTrack(bfaRoute, bfaData);

            _fireShowBar();
            if (!_dropDownElement) {
                _renderBar();
            } else if (_isOpened) {
                _hideBar();
            } else {
                _showBar();
            }
        }
    };

    /**
     * Handles event subscriptions.
     * @param {String} msg - event name.
     * @param {*} data - event data.
     * @listens quiz-selected
     * @return {void}
     */
    _behavior.onmessage = function(msg, data) {
        var handler = _eventHandlers[msg];
        if (typeof handler === 'function') {
            handler.call(this, data);
        }
    };

    _behavior.init = function() {
        _element = context.getElement();
        _cardId = context.getConfig('cardId');
        _fAd = context.getConfig('fAd');
        if (_fAd) {
            _cardData = feedSharing.getData('wid:' + _cardId);
        } else {
            _cardData = feedSharing.getData(_cardId);
        }
    };

    _behavior.destroy = function() {};

    return _behavior;
});
export const name = 'drop-down-action-bar';