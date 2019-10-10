import {
    Application
} from 't3js';
import {
    name as viewable
} from '@buzzfeed/buzzblocks/js/behaviors/viewable';
import {
    name as lazyImageBackground
} from '../behaviors/lazy-image-background';
import {
    name as lazyImage
} from '../behaviors/lazy-image';

Application.addModule('card-article', function() {
    'use strict';

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    var module = {};

    module.behaviors = [
        lazyImageBackground,
        viewable,
        lazyImage,
    ];

    /**
     * Module's initialization logic
     * @ignore
     * @returns {void}
     */
    module.init = function() {};

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    module.destroy = function() {};

    return module;
});