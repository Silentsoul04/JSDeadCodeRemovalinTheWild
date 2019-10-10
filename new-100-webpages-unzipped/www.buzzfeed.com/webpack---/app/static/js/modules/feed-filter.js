import {
    Application
} from 't3js';
import bzfd from '@buzzfeed/buzzblocks/js/services/bzfd';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';
import client from '@buzzfeed/buzzblocks/js/services/client';


Application.addModule('feed-filter', function(context) {
    'use strict';
    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------

    // globals
    var _location = context.getGlobal('location');
    var _history = context.getGlobal('history');

    // assuming filter is always the last component in pathname
    const mainFeedPathname = _location.pathname.replace(/^(\/.+)\/.+\/?/, '$1').replace(/\/$/, '');

    // vars
    var _config = context.getConfig();
    var _isFeedLoading = false;
    var _scrollToResults = _config['scroll_to_results'] || false;
    var _isActive = false;
    var _activeClass = 'active';
    var _hoverClass = 'hover';
    var _filter = {};
    var _eventHandlers = {};

    // els
    var _element = context.getElement();


    function setPageState({
        feed
    }) {
        if (BZFD.Context.page.filters[feed].is_main) {
            BZFD.Context.page.filter = null;
        } else {
            BZFD.Context.page.filter = feed;
        }
    }

    /**
     * Activate or deactivate filter
     * @param {Object} data - triggered filter data
     * @param {HTMLElement} [data.el] - active filter element
     */
    function _onTriggerFilter(data) {
        dom.removeClass(_element, _activeClass);
        dom.setAttr(_element, {
            'aria-selected': false
        });
        dom.removeClass(_element, _hoverClass);

        if (data.el && data.el === _element) {
            dom.addClass(_element, _activeClass);
            dom.setAttr(_element, {
                'aria-selected': true
            });
            _isActive = true;
        } else {
            _isActive = false;
        }
    }

    function _getFeedUrl(feed) {
        return BZFD.Context.page.filters[feed].is_main ? mainFeedPathname : `${mainFeedPathname}/${feed}`;
    }

    function _getOriginParam(feed) {
        var amazonTag;
        // reset filter || return to main feed
        if (BZFD.Context.page.filters[feed].is_main) {
            amazonTag = _config['nofil_origin'] || 'nofil';
        } else {
            amazonTag = BZFD.Context.page.filters[feed].origin || `fil-${feed.substring(0, 2)}`;
        }
        return amazonTag;
    }

    /**
     *
     * @param {String} feed - feed name which should be loaded
     * @param {HTMLElement | null} el - active filter element
     * @private
     */
    function _clickFilter(feed, el) {
        _fireActiveFilter(el);
        _fireFeedLoad(feed);
        _history.pushState({}, '', BZFD.Context.page.filters[feed].url || _getFeedUrl(feed));
        _track(el);
    }

    function _getActiveFilter() {
        if (_isActive) {
            _fireActiveFilter(_element);
        }
    }

    function _track(isSelected) {
        var bfaRoute = 'track/click/filter';
        var position = dom.getData(_element, 'index');
        var label = BZFD.Context.page.filters[_config.filter].feed;
        var action = 'click:filter';
        if (!isSelected) {
            action = 'click:unselect-filter';
        }
        if (_config['tracking_category']) {
            label = position;
        }

        var bfaData = {
            'l': 'feed-filters',
            'd': label,
            'n': action,
            'data': {
                'page_name': _config['tracking_category']
            }
        };
        util.bfaTrack(bfaRoute, bfaData);
    }

    function _onFeedLoading(isLoading) {
        _isFeedLoading = isLoading;
    }

    /**
     * Run gif background image animation after filter is viewed
     */
    function _onView() {
        dom.addClass(_element, 'viewed');
        var gifEl = dom.find(_element, 'img');
        var src = '';
        if (typeof gifEl[0] !== 'undefined') {
            dom.addClass(_element, 'animating');
            src = dom.getAttr(gifEl[0], 'data-gif-src');
            if (src) {
                dom.setAttr(gifEl[0], {
                    'src': src,
                });
            }

            setTimeout(function() {
                dom.remove(gifEl[0]);
            }, 1200);
        }
    }

    /**
     * Fire update origin value after page loaded and if filter is active
     * but we should not update origin if page url already contain origin value
     */
    function _onFeedMainLoaded() {
        if (_isActive && !util.getQueryParams().origin) {
            _fireUpdateOriginParam();
        }
    }

    function _fireFeedLoad(feed) {
        context.broadcast('feed-reload', {
            feed: feed,
            page: 1,
            fromTab: 1,
            scrollToResults: _scrollToResults,
            origin: _getOriginParam(feed)
        });
    }

    function _fireActiveFilter(el) {
        var data = {};
        if (el) {
            data.el = el;
            data.title = BZFD.Context.page.filters[_config.filter].title;
        }
        context.broadcast('filter-trigger', data);
    }

    function _fireUpdateOriginParam() {
        context.broadcast('feed-update-origin', {
            'origin': _getOriginParam(_config.filter)
        });
    }

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    _filter.behaviors = ['viewable'];

    _eventHandlers['filter-trigger'] = _onTriggerFilter;
    _eventHandlers['feed-main-loaded'] = _onFeedMainLoaded;

    _eventHandlers['feed-is-loading'] = _onFeedLoading;

    // it's need for updating text on `filter-results-header` after page load with selected filter
    _eventHandlers['filter-get-active'] = _getActiveFilter;

    _eventHandlers['feed-reload'] = setPageState;

    _eventHandlers[util.getUniqueEventName('viewport-active', _element)] = _onView;

    _filter.messages = util.getKeys(_eventHandlers);

    _filter.onmessage = function(msg, data) {
        var handler = _eventHandlers[msg];
        if (typeof handler === 'function') {
            handler.call(this, data);
        }
    };

    _filter.onmouseenter = function(e) {
        // add hover class only for mouseenter (not tapping) event
        if (typeof e.sourceCapabilities === 'undefined' || !e.sourceCapabilities.firesTouchEvents) {
            dom.addClass(_element, _hoverClass);
        }
    };

    _filter.onmouseleave = function() {
        dom.removeClass(_element, _hoverClass);
    };

    _filter.onclick = function(ev) {
        dom.removeClass(_element, _hoverClass);
        if (!_isFeedLoading) {
            if (!_isActive) {
                _clickFilter(_config.filter, _element);
            } else if (_config['can_be_deselected']) {
                _clickFilter(bzfd.pageMainFilter, null);
            }
        }
        ev.preventDefault();
    };

    /**
     * Module's initialization logic
     * @ignore
     * @returns {void}
     */
    _filter.init = function() {
        // Highlight filter if landing on page
        const pathnameNormalized = _location.pathname.replace(/\/$/, '');
        if (
            pathnameNormalized === BZFD.Context.page.filters[_config.filter].url ||
            pathnameNormalized === _getFeedUrl(_config.filter)
        ) {
            _isActive = true;
            _fireActiveFilter(_element);
        }
        if (!client.hasTouch) {
            dom.addClass(_element, 'animating');
        }
    };

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    _filter.destroy = function() {
        _filter.onclick = null;
        _element = null;
        _location = null;
        _history = null;
        _config = null;
    };

    return _filter;
});