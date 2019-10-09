/** @lint */

/**
 * @module orb/lib/_dom
 */
define('orb/lib/_dom', function () {
    'use strict';
    
    return {
        remove: function (node) {
            node.parentNode.removeChild(node);
        }
    };
});