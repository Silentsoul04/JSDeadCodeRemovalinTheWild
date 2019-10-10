import {
    Application
} from 't3js';
import {
    name as lazyImage
} from '../behaviors/lazy-image';
import {
    name as viewable
} from '@buzzfeed/buzzblocks/js/behaviors/viewable';
import {
    name as lazyImageBackground
} from '../behaviors/lazy-image-background';

import dom from '@buzzfeed/buzzblocks/js/services/dom';
import solid from '@buzzfeed/buzzblocks/js/services/solid';
import ScrollingCarousel from '@buzzfeed/buzzblocks/js/services/scrolling-carousel';

Application.addModule('package', function(context) {
    'use strict';

    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------
    var _module = {};
    var _element;
    var isCarousel;

    function carouselMe() {
        if (solid.isXsmall() && !isCarousel) {
            new ScrollingCarousel(_element).setSizes();
            isCarousel = true;
        }
    }

    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------

    _module.behaviors = [
        lazyImageBackground,
        viewable,
        lazyImage,
    ];

    /**
     * Module's initialization logic
     * @ignore
     * @returns {void}
     */
    _module.init = function() {
        _element = context.getElement();
        carouselMe();
        dom.on(window, 'resize', carouselMe);

        if (solid.isXsmall()) {
            dom.find(_element, '.js-xs-impressions').map(i => dom.setAttr(i, {
                'data-bfa-impressions': 'true'
            }));
        } else {
            dom.find(_element, '.js-impressions').map(i => dom.setAttr(i, {
                'data-bfa-impressions': 'true'
            }));
        }
    };

    /**
     * Cleanup
     * @ignore
     * @returns {void}
     */
    _module.destroy = function() {};

    return _module;
});