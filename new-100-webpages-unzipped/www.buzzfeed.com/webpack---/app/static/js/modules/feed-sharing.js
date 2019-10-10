import {
    Application
} from 't3js';
import {
    name as lazySharing
} from '../behaviors/lazy-sharing';
import {
    name as viewable
} from '@buzzfeed/buzzblocks/js/behaviors/viewable';

Application.addModule('feed-sharing', function() {
    'use strict';
    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------
    var _module = {};

    _module.behaviors = [
        viewable,
        lazySharing,
    ];

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

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