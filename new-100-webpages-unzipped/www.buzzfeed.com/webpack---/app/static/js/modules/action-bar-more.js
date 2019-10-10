import {
    Application
} from 't3js';
import client from '@buzzfeed/buzzblocks/js/services/client';
import {
    name as dropDownActionBar
} from '../behaviors/drop-down-action-bar';
import {
    name as shareManaged
} from '../behaviors/share-managed';
import {
    name as extendableActionBar
} from '../behaviors/extendable-action-bar';
import {
    name as shareWidget
} from '../behaviors/share-widget';

Application.addModule('action-bar-more', function() {
    'use strict';

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------
    /**
     * Action Bar module
     * @exports module:action-bar
     */
    var actionBar = {};

    actionBar.behaviors = [];

    if (client.hasTouch) {
        actionBar.behaviors.push(shareWidget);
        actionBar.behaviors.push(extendableActionBar);
        actionBar.behaviors.push(shareManaged);
    } else {
        actionBar.behaviors.push(dropDownActionBar);
    }

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