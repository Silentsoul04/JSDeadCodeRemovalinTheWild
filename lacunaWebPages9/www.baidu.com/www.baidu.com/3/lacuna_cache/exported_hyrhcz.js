
            ! function(v) {
                

                function g(mod, v, b, g) {
                    v ? "string" == typeof v && (v = [v]) : mod = "global", g = g || {}, w[mod] = w[mod] || {};
                    for (var h in v) {
                        var y = v[h];
                        if (w[mod][y] = w[mod][y] || [], w[mod][y].push({
                                once: g.once,
                                callback: b
                            }), g.listenpre && k[mod] && k[mod][y])
                            for (var i in k[mod][y]) b && b.call({
                                event: y
                            }, k[mod][y][i])
                    }
                }

                
                var k = v.rain.event.firePool || {},
                    w = {};
                v.define && define("rain_event", null), v.rain.event.listen = g, v.rain.event.unlisten = h, v.rain.event.fire = b
            }(window);;
            (function(global) {
                
                window.rain.event.listen('global', 'rainStartEvent', rainInit, {
                    listenpre: 1
                });
            })(window);
        