import {
    Application
} from 't3js';
import facebook from '../services/facebook';

Application.addModule('facebook-like', function() {
    'use strict';

    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------
    var _module = {};

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    /**
     * Module's initialization logic
     * @ignore
     * @returns {void}
     */
    _module.init = function() {
        facebook.init();
    };

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    _module.destroy = function() {};

    return _module;
});