import {
    Application
} from 't3js';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addModule('feed-filters', function(context) {
    'use strict';
    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------
    var _module = {};
    var _eventHandlers = [];
    var _nofilOrigin = context.getConfig('nofil_origin');

    // Globals
    var _location = context.getGlobal('location');

    // assuming filter is always the last component in pathname
    const mainFeedPathname = _location.pathname.replace(/^(\/.+)\/.+\/?/, '$1').replace(/\/$/, '');

    // els
    var _element = context.getElement();

    function _showAll() {
        dom.addClass(_element, 'feed-filters--show-all');
    }

    function _onFeedMainLoaded() {
        // update origin for main feed after page has loaded
        if (_location.pathname === mainFeedPathname && !util.getQueryParams().origin) {
            context.broadcast('feed-update-origin', {
                'origin': _nofilOrigin
            });
        }
    }

    _eventHandlers['feed-main-loaded'] = _onFeedMainLoaded;


    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    _module.messages = util.getKeys(_eventHandlers);
    _module.onmessage = util.getMessageHandler(_eventHandlers);

    _module.onclick = function(ev, elem, elemType) {
        if (elemType === 'show-all') {
            _showAll();
        }
    };

    /**
     * Module's initialization logic
     * @ignore
     * @returns {void}
     */
    _module.init = function() {

    };

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    _module.destroy = function() {
        _module.onclick = null;
        _element = null;

    };

    return _module;
});