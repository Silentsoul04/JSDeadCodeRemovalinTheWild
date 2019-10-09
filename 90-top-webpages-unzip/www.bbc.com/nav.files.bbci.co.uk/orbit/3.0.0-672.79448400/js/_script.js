/** @lint */

/**
 * @module orb/lib/_script.js
 */
define('orb/lib/_script', function (undefined) {
    'use strict';
    
    var uid = 1; // unique scriptnode name identifier

    var exports = {
        inject: function (src) {
            var scriptEl;

            scriptEl = document.createElement('script');
            scriptEl.src = src;
            document.getElementsByTagName('head')[0].appendChild(scriptEl);
            
            return scriptEl;
        },
        /**
            @param {string} url The remote URL of the service providing the JSONP data.
            @param {function} callback The function to execute once the JSON has been unwrapped from its JSONP.
            @param {object} [opts] The options.
            @param {string} [opts.callbackName] The name of the JSONP function, defaults to "jsonpcb_#" where # is an incrementing number.
            @param {number} [opts.timeout] The number of milliseconds to wait before giving up (and calling the error function, if one is given).
            @param {function} [opts.error] The function to call if the JSONP request times out.
         */
        jsonp: function (url, callback, opts) {
            var key,
                script,
                timer,
                timedOut = false;
            opts = opts || {};
            
            key = opts.callbackName ? opts.callbackName : 'jsonpcb' + (uid++);
            
            if (opts.timeout) {
                timer = setTimeout(function () {
                    timedOut = true;
                    if (opts.error) {
                        opts.error();
                    }
                }, opts.timeout);
            }

            var keyParts = key.split(".");
            var child = keyParts[keyParts.length-1];
            var parent = window;
            for (var i = 0, l = keyParts.length; i < l-1; i++) {
                parent = parent[keyParts[i]];
            }

            parent[child] = function (data) {
                clearTimeout(timer);
                if (!timedOut) {
                    callback(data);
                }
                if (script && script.parentNode) {
                    script.parentNode.removeChild(script);
                }
                parent[child] = undefined;
            };

            script = exports.inject(url + (url.indexOf('?') === -1 ? '?' : '&') + 'callback=' + key);
        }
    };
    
    return exports;
});
