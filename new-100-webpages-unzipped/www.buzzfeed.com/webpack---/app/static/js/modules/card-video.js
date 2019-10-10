import {
    Application
} from 't3js';
import {
    name as lazyImage
} from '../behaviors/lazy-image';
import {
    name as viewable
} from '@buzzfeed/buzzblocks/js/behaviors/viewable';

import util from '@buzzfeed/buzzblocks/js/services/util';

Application.addModule('card-video', function() {
    'use strict';
    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    // Vars
    var _eventHandlers = {};
    var _module = {};

    _module.behaviors = [
        viewable,
        lazyImage,
    ];

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------
    _module.messages = util.getKeys(_eventHandlers);
    _module.onmessage = function(msg, data) {
        var handler = _eventHandlers[msg];
        if (typeof handler === 'function') {
            handler.call(this, data);
        }
    };

    /**
     * Module's initialization logic
     * @ignore
     * @returns {void}
     */
    _module.init = function() {};

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    _module.destroy = function() {};

    return _module;
});