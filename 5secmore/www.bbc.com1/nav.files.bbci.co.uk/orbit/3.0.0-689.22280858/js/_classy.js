/** @lint */

/**
 * @module orb/lib/_classy
 */
define('orb/lib/_classy', function() {
    'use strict';

    var exports = {};

    /**
       @param {HTMLDOMElement | Array<HTMLDOMElement> } node - DOM node or nodes to add the class/es to.
       @param {string | Array<string> } name - Class name or names to add to the node.
     */
    exports.addClass = function(node, name) {
        var i, len;

        if (Object.prototype.toString.call(name) === '[object Array]') {
            for (i = 0, len = name.length; i < len; i++) {
                exports.addClass(node, name[i]);
            }
        }

        if (node.nodeName) {
            if (!exports.hasClass(node, name)) {
                node.className += (node.className ? ' ' : '') + name;
            }
        } else if (node.length) {
            for (i = 0, len = node.length; i < len; i++) {
                exports.addClass(node[i], name);
            }
        }
    };

    /**
       @param {HTMLDOMElement | Array<HTMLDOMElement> } node - DOM node or nodes to remove the class/es from.
       @param {string | Array<string> } name - Class name or names to remove from the node.
     */
    exports.removeClass = function(node, name) {
        var i, len;

        if (Object.prototype.toString.call(name) === '[object Array]') {
            for (i = 0, len = name.length; i < len; i++) {
                exports.removeClass(node, name[i]);
            }
        }

        if (node.nodeName) {
            node.className = node.className.replace(new RegExp('(^| )' + name + '( |$)', 'g'), ' ').replace(/(^ | $)/g, '').replace(/ {2}/g, ' ');
        } else if (node.length) {
            for (i = 0, len = node.length; i < len; i++) {
                exports.removeClass(node[i], name);
            }
        }
    };

    /**
       @param {HTMLDOMElement} node 
       @param {string} name - Class name to check.
       @returns {boolean}
     */
    exports.hasClass = function(node, name) {
        return node ? ((' ' + node.className + ' ').indexOf(' ' + name + ' ') > -1) : false;
    };

    return exports;
});