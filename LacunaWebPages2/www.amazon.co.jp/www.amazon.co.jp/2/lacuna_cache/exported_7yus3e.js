
            ! function() {eturn r.push([t, [].slice.call(arguments, 0), n, {
                                time: Date.now()
                            }]), i(n)
                        }
                    };
                n._s = r, this.csa = n
            }();
            if (window.csa) {
                csa("Config", {
                    'Application': 'Retail',
                    'ObfuscatedMarketplaceId': 'A1VC38T7YXB528',
                    'Events.SushiEndpoint': 'https://unagi-fe.amazon.com/1/events/com.amazon.csm.nexusclient.prod'
                });

                csa("Events")("setEntity", {
                    page: {
                        requestId: "725PFJR1437);
                        i[n] = t[n]
                    })
                }
                 }), a[n] = i || {}
         store = function(t, c) {___jdce_logger("           I = function(n, t) {___jdce_l                  t = "Transport",
     s", 10311, 12015);
                             }
                }), o.once("$afterunload", S), o.once("$afterload", function() {___jdce_logger("lacuna_cache/exported_7yus3e.js", 12278, 12638);
                    (d() || []).forEach(function(e) {___jdce_logger("lacuna_cache/exported_7yus3e.js", 12331, 12568);
                        if (!e.indexOf(r)) try {
                            var t = d(e);
                            o.deleteStored(e), JSON.parse(t).forEach(E)
                        } catch (e) {}
                    }), S(), a && a[e] && a[e]("visibilitychange", S, !1)
                }), o.on("$afterPageTransition", function() {___jdce_logger("lacuna_cache/exported_7yus3e.js", 12670, 12726);
                    y = 0
                })
            });
            csa.plugin(function(n) {___jdce_logger("lacuna_cache/exported_7yus3e.js", 12767, 13713);
                var t, r = n.config["Events.SushiEndpoint"];
                var i = /\/\/(.*?)\//.exec(r);
                i && i[1] && (t = "https://" + i[1] + "/ping"), n("Transport")("register", {
                    post: function(n) {___jdce_logger("lacuna_cache/exported_7yus3e.js", 13008, 13421);
                        return n = n.map(function(n) {___jdce_logger("lacuna_cache/exported_7yus3e.js", 13063, 13209);
                            return {
                                data: n
                            }
                        }), {
                            url: r,
                            body: JSON.stringify({
                                events: n
                            })
                        }
                    },
                    preflight: function() {___jdce_logger("lacuna_cache/exported_7yus3e.js", 13454, 13582);
                        return {
                            url: t
                        }
                    },
                    accepts: function() {___jdce_logger("lacuna_cache/exported_7yus3e.js", 13613, 13680);
                        return 1
                    }
                })
            });
            csa.plugin(function(i) {___jdce_logger("lacuna_cache/exported_7yus3e.js", 13739, 16119);
                var t, a, o, r, c = i.config["Content.ImpressionMinimumTime"] || 1e3,
                    e = "addEventListener",
                    d = "hidden",
                    n = "renderedTo",
                    s = n + "Viewed",
                    f = n + "Meaningful",
                    u = n + "Impressed",
                    g = 1,
                    m = 2,
                    l = 3,
                    v = 4,
                    p = 5,
                    h = 6,
                    T = 7,
                    I = i.global,
                    P = i("Events", {
                        producerId: "csa"
                    }),
                    y = I.document,
                    b = {},
                    w = {};
                if (!y || !y[e] || void 0 === y[d]) return E("PageStateChange.2", {
                    state: "ignored"
                });

                function C(e) {___jdce_logger("lacuna_cache/exported_7yus3e.js", 14653, 15284);
                    if (!b[T]) {
                        var n;
                        if (b[e] = i.time(), e !== l && e !== h || (t = t || b[e]), t && !y[d]) a = a || b[e], (n = {})[f] = t - o, n[s] = a - o, E("PageView.4", n), r = r || setTimeout(S, c);
                        if (e !== p && e !== g && e !== m || (clearTimeout(r), r = 0), e !== g && e !== m || E("PageRender.3", {
                                transitionType: e === g ? "hard" : "soft"
                            }), e === T)(n = {})[f] = t - o, n[s] = a - o, n[u] = b[e] - o, E("PageImpressed.2", n)
                    }
                }

                function E(e, n) {___jdce_logger("lacuna_cache/exported_7yus3e.js", 15302, 15472);
                    w[e] || (n.schemaId = "csa." + e, P("log", n, {
                        full: 1
                    }), w[e] = 1)
                }

                function M() {___jdce_logger("lacuna_cache/exported_7yus3e.js", 15490, 15558);
                    C(y[d] ? p : v)
                }

                function S() {___jdce_logger("lacuna_cache/exported_7yus3e.js", 15576, 15640);
                    C(T), r = 0
                }

                function V() {___jdce_logger("lacuna_cache/exported_7yus3e.js", 15658, 15800);
                    var e = o ? m : g;
                    b = {}, w = {}, a = t = 0, o = i.time(), C(e), M()
                }

                function $() {___jdce_logger("lacuna_cache/exported_7yus3e.js", 15818, 15966);
                    var e = y.readyState;
                    "interactive" === e && C(l), "complete" === e && C(h)
                }
                V(), y[e]("visibilitychange", M, !1), y[e]("readystatechange", $, !1), i.on("$afterPageTransition", V), i.once("$load", $)
            });
        