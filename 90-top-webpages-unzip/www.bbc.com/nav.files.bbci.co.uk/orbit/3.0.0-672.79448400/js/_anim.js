/** @lint */

/**
 * @module orb/lib/_anim
 */
define('orb/lib/_anim', function () {
    'use strict';

    var exports = {},
        prefixes = ['transition', 'WebkitTransition', 'MozTransition', 'msTransition', 'OTransition'],
        transitionSupported = (function () {
            var s = document.createElement('div').style,
                i = prefixes.length;
            while (i--) {
                if (prefixes[i] in s) {
                    return prefixes[i];
                }
            }
            return false;
        }());

    function easeOut(t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    }

    /**
        @param {HTMLDOMElement} el
        @param {object} opts
        @param {number} opts.height The height to grow to (pixels)
        @param {number} opts.duration The time to grow (milliseconds)
     */
    exports.animate = transitionSupported ?
        function (el, opts) {
            el.style[transitionSupported] = 'height ' + opts.duration + 'ms';
            el.style.height = opts.height + 'px';

        }
    :
        function (el, opts) {
            var startHeight = parseFloat(el.offsetHeight),
                targetHeight = opts.height,
                duration = opts.duration,
                style = el.style,
                frameInterval = 10,
                startTime = (new Date()).getTime(),
                tick;

            clearTimeout(el.orbAnimTimer); // Ensure only one anim per element

            if ( duration === 0 ) {
                style.height = targetHeight + 'px';
            } else {

                tick = function () {
                    var elapsedTime = (new Date()).getTime() - startTime,
                        newHeight = easeOut(elapsedTime, startHeight, targetHeight - startHeight, duration);

                    if (elapsedTime > duration) {
                        style.height = targetHeight + 'px';
                        return;
                    }

                    style.height = newHeight + 'px';
                    el.orbAnimTimer = setTimeout(tick, frameInterval);
                };

                el.orbAnimTimer = setTimeout(tick, 0);
            }
        }
    ;

    return exports;
});
