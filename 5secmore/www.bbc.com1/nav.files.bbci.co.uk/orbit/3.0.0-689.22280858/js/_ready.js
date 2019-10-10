/**
 * @module orb/lib/_ready
 */
define('orb/lib/_ready', [], function() {
    'use strict';

    var callbacks = [];

    function runAll() {
        while (callbacks.length) {
            callbacks.shift().call(null);
        }
    }

    var exports = function(callback) {
        if (exports.isReady) {
            callback();
        } else {
            callbacks.push(callback);
        }
    };

    exports.isReady = false;

    /*!
     * contentloaded.js
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     *
     */

    // @win window reference
    // @fn function reference
    function contentLoaded(win, fn) {

        var top = true,

            doc = win.document,
            root = doc.documentElement,
            modern = doc.addEventListener,

            add = modern ? 'addEventListener' : 'attachEvent',
            rem = modern ? 'removeEventListener' : 'detachEvent',
            pre = modern ? '' : 'on',

            init = function(e) {
                if (e.type === 'readystatechange' && doc.readyState != 'interactive') return;
                (e.type === 'load' ? win : doc)[rem](pre + e.type, init, false);
                if (!exports.isReady && (exports.isReady = true)) fn.call(win, e.type || e);
            },

            poll = function() {
                try {
                    root.doScroll('left');
                } catch (e) {
                    setTimeout(poll, 50);
                    return;
                }
                init('poll');
            };

        if (doc.readyState === 'complete') {
            exports.isReady = true;
            fn.call(win, 'lazy');
        } else {
            if (!modern && root.doScroll) {
                try {
                    top = !win.frameElement;
                } catch (e) {}
                if (top) poll();
            }
            doc[add](pre + 'DOMContentLoaded', init, false);
            doc[add](pre + 'readystatechange', init, false);
            win[add](pre + 'load', init, false);
        }
    }

    contentLoaded(window, runAll);

    return exports;
});