/** @lint */

/**
 * @module orb/lib/_attr
 */
define('orb/lib/_attr', function() {
    'use strict';

    return {
        getAttr: function(node, name) {
            var attrNode,
                value;
            if (!node) {
                return '';
            } else if (node.attributes[name]) {
                return (!node.attributes[name].specified) ? '' : node.attributes[name].value;
            } else if (node.getAttributeNode) {
                attrNode = node.getAttributeNode(name, 0);
                return (attrNode === null) ? '' : attrNode.value;
            } else {
                value = node.getAttribute(name, 2);
                return (value === null) ? '' : value;
            }
        },
        setAttr: function(node, name, value) {
            node.setAttribute(name, '' + value);
        }
    };
});