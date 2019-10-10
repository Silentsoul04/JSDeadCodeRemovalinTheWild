import {
    Application
} from 't3js';
import {
    name as shareManaged
} from '../behaviors/share-managed';
import {
    name as shareWidget
} from '../behaviors/share-widget';

Application.addModule('action-bar-desktop', function() {
    'use strict';
    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------
    /**
     * Action Bar module
     * @exports module:action-bar
     */
    var actionBar = {};

    actionBar.behaviors = [
        shareWidget,
        shareManaged,
    ];

    /**
     * Initialization logic
     * @ignore
     * @return {void}
     */
    actionBar.init = function() {};

    /**
     * Cleanup
     * @ignore
     * @return {void}
     */
    actionBar.destroy = function() {};

    return actionBar;
});