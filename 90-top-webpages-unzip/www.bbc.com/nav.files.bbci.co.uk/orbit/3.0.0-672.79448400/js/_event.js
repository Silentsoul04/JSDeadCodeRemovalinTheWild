/** @lint */

/**
 * @module orb/lib/_event
 */

define('orb/lib/_event', function () {
    'use strict';
    
    /** Add an event listener to a DOM node.
        @param node
        @param eventName
        @param callback
     */
    var exports = {};
    
    if (document.addEventListener) { // W3C standards branch
        exports.addEvent = function (node, name, callback) {
            if (node && (node.nodeName || node === window)) {
                node.addEventListener(name, callback, false);
            }
            else if (node && node.length) {
                for (var i = 0, len = node.length; i < len; i++) {
                    exports.addEvent(node[i], name, callback);
                }
            }
        };
    }
    else { // IE branch
        exports.addEvent = function (node, name, callback) {
            if (node && (node.nodeName || node === window)) {
                node.attachEvent('on' + name, function (e) {
                    e = e || window.event || {};
                    // IE uses `srcElement`, standard is `target`
                    if (e.srcElement && typeof e.target === 'undefined') {
                        e.target = e.srcElement;
                    }
                    return callback.call(node, e);
                });
            }
            else if (node && node.length) {
                for (var i = 0, len = node.length; i < len; i++) {
                    exports.addEvent(node[i], name, callback);
                }
            } 
        };
    }
    
    /**
        Add custom signal/event-like features to non-DOM objects.
        
        @param {object} target - object to receive the added features.
        @example
            var phone = new Phone();
            event.mixin(phone);
        
            phone.event('ring').add(function (e) {
                alert('Hello ' + e.callerName);
            });
        
            phone.event('ring').fire({callerName: 'Nikos'});
     */
    exports.mixin = function (target) {
        target.__events = {};
        
        target.event = function (name) {
            var eventQueue;
            
            if (typeof target.__events[name] !== 'undefined') {
                eventQueue = target.__events[name];
            }
            else {
                eventQueue = target.__events[name] = [];
            }
            
            return {
                add: function (handler) {
                    eventQueue.push(handler);
                },
                fire: function (e) {
                    e = e || {};
                    for (var i = 0, len = eventQueue.length; i < len; i++) {
                        eventQueue[i](e);
                    }
                }
            };
        };
    };
      
    return exports;
});