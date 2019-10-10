/** @lint */

/**
 * @module orb/features/_skiplinks
 */
define('orb/features/_skiplinks', ['orb/lib/_$'], function($) {
    'use strict';

    /**
        Fix skip links in Webkit.
        @author Ian Pouncey
     */
    return function() {
        $.ready(function() {
            var accLinks = $('.orb-skip-links')[0],
                clickHandler = function(e) {
                    //needed? e = e || window.event;
                    var target = e.target || e.srcElement,
                        hash = target.getAttribute('href').match(/^(#.+)/),
                        targetElement = (hash ? $(hash[1]) : [])[0];

                    if (targetElement) {
                        if (targetElement.tabIndex === null || targetElement.tabIndex === -1) { // some browser mistakenly reports -1 when it is unset,  so set to -1 explicitly in that case
                            targetElement.tabIndex = -1;
                        }
                        targetElement.focus();
                    }
                };
            $.addEvent(accLinks, 'click', clickHandler);
        });
    };
});