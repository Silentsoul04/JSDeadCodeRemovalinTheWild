import {
    Application
} from 't3js';
import bzfd from '@buzzfeed/buzzblocks/js/services/bzfd';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addModule('filter-results-header', function(context) {
    'use strict';
    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------
    var _module = {};
    var _history = context.getGlobal('history');
    var _mainFeed = bzfd.pageMainFilter;
    // assuming filter is always the last component in pathname
    const _mainUrl = location.pathname.replace(/^(\/.+)\/.+\/?/, '$1').replace(/\/$/, '');
    var _trackingCategory = context.getConfig('tracking_category');
    var _nofilOrigin = context.getConfig('nofil_origin');
    var _eventHandlers = {};
    var _defaultMsg = 'Showing posts for';


    // els
    var _element = context.getElement();
    var _termEls = dom.find(_element, '.js-filter-results-header__term');
    var _msgEl = dom.findOne(_element, '.js-filter-results-header__msg');

    /**
     * Update module text
     * @param {Object} data - data for update text
     * @param {String} [data.title] - term string
     * @param {String} [data.msg] - message before title
     * @param {String} [data.module] - module name
     * @private
     */
    function _updateText(data) {
        if (data && data.title) {
            var moduleName;
            var msg = typeof data.msg !== 'undefined' ? data.msg : _defaultMsg;

            _element.className = _element.className.replace(/filter-results-header--module-[\w]+/g, '');

            if (typeof data.module !== 'undefined' && data.module) {
                moduleName = 'filter-results-header--module-' + data.module;
            }
            if (moduleName) {
                dom.addClass(_element, moduleName);
            }

            _termEls.forEach(function(el) {
                dom.setText(el, data.title);
            });

            dom.setText(_msgEl, msg);
            dom.show(_element);
        } else {
            dom.hide(_element);
        }
    }

    function trackClearFilter() {
        var bfaRoute = 'track/click/clearfilter';
        var bfaData = {
            n: 'click:clearfilter',
            l: 'FeedSearch',
            data: {
                'page_name': _trackingCategory
            }
        };

        util.bfaTrack(bfaRoute, bfaData);
    }

    function _clearFilter() {
        trackClearFilter();
        dom.hide(_element);
        context.broadcast('filter-trigger', {});

        context.broadcast('feed-reload', {
            feed: _mainFeed,
            page: 1,
            fromTab: 1,
            origin: _nofilOrigin
        });
        _history.pushState({}, '', _mainUrl);
    }

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    _eventHandlers['filter-trigger'] = _updateText;

    _module.messages = util.getKeys(_eventHandlers);
    _module.onmessage = util.getMessageHandler(_eventHandlers);

    _module.onclick = function(ev, elem, elemType) {
        if (elemType === 'clear-filter') {
            _clearFilter();
        }
    };


    /**
     * Module's initialization logic
     * @ignore
     * @returns {void}
     */
    _module.init = function() {
        context.broadcast('filter-get-active');

    };

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    _module.destroy = function() {
        _module.messages = null;
        _module.onmessage = null;
        _element = null;

    };

    return _module;
});