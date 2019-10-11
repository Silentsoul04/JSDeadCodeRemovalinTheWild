
            ! function(v) {
                function b(mod, v, b) {
                    v || (mod = "global");
                    var g = [];
                    if (k[mod] = k[mod] || {}, k[mod][v] = k[mod][v] || [], k[mod][v].push(b), w[mod] && w[mod][v]) {
                        for (var i = 0, h = w[mod][v].length; h > i; i++) {
                            var y = w[mod][v][i],
                                P = y.callback && y.callback.call({
                                    event: v
                                }, b);
                            P && g.push(P), w[mod][v][i].once && (w[mod][v] = null)
                        }
                        return g
                    }
                    return null
                }

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

                function h(mod, v) {
                    v || (mod = "global");
                    for (var b = w[mod][v] || {}, i = 0; i < b.length && b[i] !== v; i++) w[mod][v].slice(i, 1)
                }
                var k = v.rain.event.firePool || {},
                    w = {};
                v.define && define("rain_event", function(require, exports) {
                    exports.listen = g, exports.fire = b, exports.unlisten = h
                }), v.rain.event.listen = g, v.rain.event.unlisten = h, v.rain.event.fire = b
            }(window);;
            (function(global) {
                function rainInit() {
                    define("rain_fileLoader", function() {
                        function h(h, v) {
                            var y = document.createElement("script");
                            y.setAttribute("type", "text/javascript"), y.setAttribute("src", h), y.setAttribute("defer", "defer"), y.onload = v, document.getElementsByTagName("head")[0].appendChild(y)
                        }
                        return {
                            loadJs: h
                        }
                    }), define("rain_kernel", function(require, exports) {
                        function h(h, v) {
                            this.compName = h, this.moduleId = v
                        }

                        function v(topDom) {
                            var h = topDom.on;
                            return topDom.on = function() {
                                h.apply(topDom, arguments)
                            }, topDom
                        }

                        function y() {
                            rain.event.listen("rainBase", "removeComponent", function(h) {
                                M[h.currentId].rainUmount()
                            }, {
                                listenpre: !0
                            })
                        }

                        function w(w) {
                            function L(v) {
                                var y = $('script[data-rain-id="' + v + '"]'),
                                    module = y.attr("data-rain-module");
                                M[v] = new h(module, v), require(["rain_fileLoader"], function(h) {
                                    rain.fileLoader = h, h.loadJs(y.eq(0).attr("data-src"), function() {
                                        M[v] && M[v].rainMount(!0), g[module] && g[module](v)
                                    })
                                })
                            }
                            var N = this;
                            N.rain = N.rain || {};
                            "body" !== w && (w = "#" + w);
                            var topDom = $(w),
                                g = {};
                            y(), rain.rainshell = function(h, y) {
                                g[h] = function(currentId) {
                                    y.call(b, b.define, b.require, b.rain, v(topDom), currentId)
                                }
                            }, N.rain.stack.forEach(L), N.rain.loadModule = L
                        }
                        var M = {},
                            b = window,
                            rain = b.rain,
                            L = rain.event;
                        h.prototype = {
                            rainDestroy: function() {
                                L.fire(this.moduleId, "diddestroy")
                            },
                            rainMount: function() {
                                L.fire("rainModule/" + this.compName, "didmount", {
                                    moduleId: this.moduleId
                                })
                            },
                            rainUmount: function() {
                                $("#" + this.moduleId).remove(), this.rainDestroy(), L.fire("rainModule/" + this.compName, "didunmount", {
                                    moduleId: this.moduleId
                                })
                            }
                        }, exports.rain = window.rain, exports.event = rain.event, exports.init = w, exports.LifeCycle = h
                    });;
                    require(['rain_kernel'], function(rk) {
                        rk.init('body');
                    });
                }
                window.rain.event.listen('global', 'rainStartEvent', rainInit, {
                    listenpre: 1
                });
            })(window);
        