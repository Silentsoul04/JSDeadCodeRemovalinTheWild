/** @lint */

/**
 * @module orb/features/api
 */
define('orb/api', function() {
    'use strict';

    var eventQueue = {
            layout: []
        },
        settings = {};

    var api = {
        /**
            Listen for changes to the layout of ORB masthead.
         */
        layout: function(f) {
            eventQueue.layout.push(f);
        },
        /**
            Trigger a custom event, such as "layout".
         */
        trigger: function(eventName, e) {
            if (eventQueue[eventName]) {
                for (var i = 0, l = eventQueue[eventName].length; i < l; i++) {
                    eventQueue[eventName][i](e);
                }
            }
        },
        /**
            Get or set the configuration properties.
            @example
                orb.config('maxSuggestions', 3);
         */
        config: function(key, val) {
            if (arguments.length === 0) {
                return settings;
            } else if (arguments.length === 1) {
                return settings[key];
            } else {
                settings[key] = val;
            }
        }
    };

    return api;
});