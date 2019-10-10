
        (function() {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 10, 5283);
            'use strict';

            var html = document.documentElement;

            var extend = function() {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 125, 699);
                var args = [].slice.call(arguments);

                var obj0 = args.slice(0, 1)[0] || {};
                obj0 = 'object' === typeof obj0 ? obj0 : {};

                args.slice(1).forEach(function(_obj) {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 346, 653);
                    _obj = 'object' === typeof _obj ? _obj : {};

                    for (var _prop in _obj) {
                        if (_obj.hasOwnProperty(_prop)) {
                            obj0[_prop] = _obj[_prop];
                        }
                    }
                });

                return obj0;
            };

            window.a8cGAOptimize = window.a8cGAOptimize || {
                config: extend({
                    id: '',
                    enabled: true,
                    asyncDimTime: 3000,
                }, window.a8cGAOptimizeConfig || {}),

                a8cAnalytics: {
                    kit: null,
                    config: null,
                },
                refs: {
                    tracked: {},
                    asyncDimEnded: false,
                    asyncDimTimeout: null,
                    asyncDimInterval: null,
                },

                dataLayer: (window.dataLayer = window.dataLayer || []),

                push: function() {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 1371, 1462);
                    a8cGAOptimize.dataLayer.push(arguments);
                },

                isEnabled: function() {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 1492, 1610);
                    return !!(a8cGAOptimize.config.id && a8cGAOptimize.config.enabled);
                },

                startAsyncDim: function() {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 1644, 2595);
                    html.className += ' async-dim';

                    a8cGAOptimize.dataLayer.hide = {
                        start: Date.now(),
                        end: a8cGAOptimize.endAsyncDim,
                        timeout: a8cGAOptimize.config.asyncDimTime,
                    };
                    a8cGAOptimize.dataLayer.hide[a8cGAOptimize.config.id] = true;

                    a8cGAOptimize.refs.asyncDimTimeout = setTimeout(
                        a8cGAOptimize.endAsyncDim,
                        a8cGAOptimize.config.asyncDimTime
                    );
                    a8cGAOptimize.refs.asyncDimInterval = setInterval(function() {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 2307, 2570);
                        var cookieBanner = document.querySelector('.a8c-cookie-banner');
                        if (cookieBanner && 'none' !== cookieBanner.style.display)
                            a8cGAOptimize.endAsyncDim();
                    }, 250);
                },

                endAsyncDim: function() {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 2627, 3214);
                    if (a8cGAOptimize.refs.asyncDimEnded) {
                        return; // Done.
                    }

                    a8cGAOptimize.refs.asyncDimEnded = true;
                    clearTimeout(a8cGAOptimize.refs.asyncDimTimeout);
                    clearInterval(a8cGAOptimize.refs.asyncDimInterval);

                    html.className += ' async-trans'; // Transition fx.
                    setTimeout(function() {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 3071, 3191);
                        html.className = html.className.replace(/\s?async-dim/g, '');
                    }, 0);
                },

                a8cAnalyticsSetup: function(kit, config) {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 3252, 3889);
                    if (!a8cGAOptimize.isEnabled()) {
                        return; // Not enabled.
                    }

                    a8cGAOptimize.a8cAnalytics.kit = kit;
                    a8cGAOptimize.a8cAnalytics.config = config;
                    a8cGAOptimize.a8cAnalyticsExpStart();

                    a8cGAOptimize.push('event', 'optimize.callback', {
                        callback: a8cGAOptimize.a8cAnalyticsExpStart
                    });
                    a8cGAOptimize.dataLayer.push({
                        event: 'optimize.activate'
                    });
                },

                a8cAnalyticsExpStart: function(variationId, experimentId) {___jdce_logger("lacuna_cache/exported_8f1vlt.js", 3930, 5150);
                    if (undefined === experimentId && undefined === variationId) {
                        var utm = a8cGAOptimize.a8cAnalytics.kit.getQueryVar('utm_expid') || '';
                        experimentId = utm.split('.')[1] || '';
                        variationId = utm.split('.')[2] || '';
                    }

                    if (!experimentId || !variationId) {
                        return; // Not possible.
                    } else if (a8cGAOptimize.refs.tracked[experimentId]) {
                        return; // Done already.
                    }

                    var props = {
                        lp_name: a8cGAOptimize.a8cAnalytics.config.lpName,
                        lp_variation: a8cGAOptimize.a8cAnalytics.config.lpVariation,
                        lp_personal_variation: a8cGAOptimize.a8cAnalytics.config.lpPersonalVariation,
                        experiment_id: experimentId,
                        variation_id: variationId,
                    };
                    a8cGAOptimize.refs.tracked[experimentId] = variationId;
                    window._tkq.push(['recordEvent', 'wpcom_gaexp_start', props]);
                },
            };

            if (a8cGAOptimize.isEnabled()) {
                a8cGAOptimize.startAsyncDim();
            }
        })();
    