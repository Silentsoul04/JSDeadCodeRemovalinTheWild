import {
    Application
} from 't3js';
import client from '@buzzfeed/buzzblocks/js/services/client';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import {
    name as loadFeed
} from '../behaviors/load-feed';
import {
    name as feedAds
} from '../behaviors/feed-ads';
import scrollListener from '@buzzfeed/buzzblocks/js/services/scroll-listener';
import scrollTracking from '../services/scroll-tracking';
import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addModule('feed-cards', function(context) {
    'use strict';

    var _element;
    var _scrollListenerId;
    var _mobileMoreMenu = false;
    var _eventHandlers = [];
    var _feedName;
    var _bzfd;

    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------

    /**
     * Inserts 'End Of The Road' video into end of feed
     * @returns {void}
     */
    function _addEndOfRoad() {
        var template = require('../../components/homepage/end-of-road.html');
        var endOfRoad = template.render();

        dom.append(_element, endOfRoad);
    }

    /**
     * Add scroll listener to load more feed items
     * when user scrolled to the bottom of the page
     * @returns {void}
     */
    function _addScrollListener() {
        var _scrollOptions = {
            scrollLookahead: 500,
            throttleTimeout: 0,
        };

        _scrollListenerId = scrollListener.add({
            throttleTimeout: _scrollOptions.throttleTimeout,
            callback: function() {
                var viewportHeight = client.getViewportHeight();

                if (dom.getViewPosition(_element, viewportHeight).isNearBottom() && !_mobileMoreMenu) {
                    context.broadcast('feed-load', {});
                }
            },
        });
    }

    /**
     * Add class to grid posts
     * @returns {void}
     */

    function _addGridClass() {
        var posts = dom.find(_element, '.js-grid-post');

        posts.forEach(function(el, i) {
            if (i % 2) {
                dom.addClass(el, 'grid-margin');
            }
        });
    }

    /**
     * Sets _mobileMoreMenu to true/false to prevent page views on more menu
     * @returns {Object} - simple message
     */
    function _onMoreMenu(data) {
        if (data.statechange && !_mobileMoreMenu) {
            _mobileMoreMenu = true;
        } else if (data.statechange && _mobileMoreMenu) {
            _mobileMoreMenu = false;
        }
    }

    /**
     * Remove scroll listener handler
     * @returns {void}
     */
    function _removeScrollListener() {
        scrollListener.remove(_scrollListenerId);
        _scrollListenerId = null;
    }

    function toggleSpinner(params) {
        if (typeof params.show !== 'undefined') {
            dom[params.show ? 'addClass' : 'removeClass'](_element, 'feed-cards--loading');
        }
    }

    function _feedLoadFail() {
        toggleSpinner({
            show: 0
        });
        if (_feedName === 'home') {
            _addEndOfRoad();
        }
    }

    function _feedLoadSuccess() {
        toggleSpinner({
            show: 0
        });
        scrollTracking.getCards();
    }

    /**
     * Adds event handlers
     * @returns {Array} - list of henler keys
     */
    function _addEventHandlers() {
        _eventHandlers['nav-more-menu'] = _onMoreMenu;
        _eventHandlers['feed-load-fail'] = _feedLoadFail;
        _eventHandlers['feed-load-success'] = _feedLoadSuccess;
        _eventHandlers['feed-toggle-spinner'] = toggleSpinner;

        return util.getKeys(_eventHandlers);
    }


    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    var module = {};

    /**
     * Handles event subscriptions.
     * @param {String} msg - event name.
     * @param {Object} data - event data.
     * @listens nav-more-menu
     * @return {void}
     */
    module.onmessage = function(msg, data) {
        var handler = _eventHandlers[msg];
        if (typeof handler === 'function') {
            handler.call(this, data);
        }
    };

    module.behaviors = [loadFeed, feedAds];

    /**
     * Module initialization logic
     * @ignore
     * @returns {void}
     */
    module.init = function() {
        _element = context.getElement();
        _bzfd = context.getGlobal('BZFD');
        _feedName = context.getConfig('feedName');
        const filters = _bzfd.Context.page.filters;
        for (let filter in filters) {
            if (filters.hasOwnProperty(filter)) {
                let feed = filters[filter].feed;
                if (feed === _feedName) {
                    _feedName = filter;
                    break;
                }
            }
        }

        // trending can't at the moment
        const canLoadPages = ('canLoadPages' in context.getConfig()) ? context.getConfig('canLoadPages') : true;

        context.broadcast('feed-set', {
            feed: _feedName,
            page: 2,
            feedParams: context.getConfig('feedParams') || {}
        });

        if (canLoadPages) {
            _addScrollListener();
        }
        scrollTracking.getCards();

        if (_bzfd.Context.page.name === 'investigations') {
            _addGridClass();
        }

        module.messages = _addEventHandlers();
    };

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    module.destroy = function() {
        _element = null;
        _mobileMoreMenu = null;
        _removeScrollListener();
        _eventHandlers = null;
    };

    return module;
});