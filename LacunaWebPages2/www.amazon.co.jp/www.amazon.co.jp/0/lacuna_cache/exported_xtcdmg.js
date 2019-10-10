
            ! function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 15, 619);
                function n(n, t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 44, 172);
                    var r = i(n);
                    return t && (r = r("instance", t)), r
                }
                var r = [],
                    c = 0,
                    i = function(t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 252, 565);
                        return function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 297, 543);
                            var n = c++;
                            return r.push([t, [].slice.call(arguments, 0), n, {
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
                        requestId: "725PFJR14FB1KKM6M0Y1",
                        meaningful: "interactive"
                    },
                    session: {
                        id: "355-2252142-1341312"
                    }
                });
            }! function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 1274, 4482);
                var e, o, t = n.csa,
                    i = {},
                    f = {},
                    u = n.csa._s,
                    c = 0,
                    r = {},
                    a = {},
                    s = setTimeout,
                    l = Object.keys;

                function g(n, i) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 1588, 1659);
                    return t(n, i)
                }

                function d(n, i) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 1677, 1800);
                    var t = f[n] || {};
                    O(t, i), f[n] = t, s(b, 0)
                }

                function h(n, i) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 1818, 1908);
                    r[n] || (r[n] = []), r[n].push(i)
                }

                function p(i, t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 1926, 2199);
                    if (i in a) t(a[i]);
                    else {
                        var e = function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 2045, 2126);
                            v(i, e), t(n)
                        };
                        h(i, e)
                    }
                }

                function v(n, i) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 2217, 2338);
                    var t = r[n];
                    t && t.splice(t.indexOf(i), 1)
                }

                function m(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 2356, 2430);
                    if (i.DEBUG) throw n
                }

                function w() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 2448, 2561);
                    return Math.abs(4294967295 * Math.random() | 0).toString(36)
                }

                function b() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 2579, 2893);
                    for (var n = 0; n < u.length;) {
                        var i = u[n],
                            t = i[0] in f;
                        if (!t && !o) return void(c = i.length);
                        t ? (u.splice(c = n, 1), S(i)) : n++
                    }
                }

                function S(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 2911, 3215);
                    var arguments, i = f[n[0]],
                        t = (arguments = n[1])[0];
                    if (!i || !i[t]) return m("Undefined function: " + i + "/" + t);
                    e = n[3], f[n[2]] = i[t].apply(i, arguments.slice(1)) || {}, e = 0
                }

                function D() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 3233, 3296);
                    o = 1, b()
                }

                function O(i, t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 3314, 3456);
                    l(t).forEach(function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 3366, 3437);
                        i[n] = t[n]
                    })
                }
                p("$beforeunload", D), d("Config", {
                    instance: function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 3540, 3607);
                        O(i, n)
                    }
                }), t.plugin = function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 3639, 3695);
                    n(g)
                }, g.config = i, g.register = d, g.on = h, g.removeListener = v, g.once = p, g.emit = function(n, i) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 3780, 3937);
                    (r[n] || []).forEach(function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 3838, 3902);
                        n(i)
                    }), a[n] = i || {}
                }, g.UUID = function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 3948, 4036);
                    return [w(), w(), w(), w()].join("-")
                }, g.time = function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 4047, 4210);
                    var i = e ? new Date(e.time) : new Date;
                    return "ISO" === n ? i.toISOString() : i.getTime()
                }, g.error = m, (g.global = n).csa._s.push = function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 4254, 4364);
                    n[0] in f && (!u.length || o) ? S(n) : u.splice(c++, 0, n)
                }, b(), s(function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 4373, 4464);
                    s(D, i.SkipMissingPluginsTimeout || 5e3)
                }, 1)
            }("undefined" != typeof window ? window : global);
            csa.plugin(function(t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 4555, 5244);
                var e;

                function n() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 4609, 4818);
                    if (!e) try {
                        e = t.global.localStorage || {}
                    } catch (t) {
                        e = {}
                    }
                }
                t.store = function(t, c) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 4845, 5078);
                    try {
                        if (n(), !t) return Object.keys(e);
                        if (!c) return e[t];
                        e[t] = c
                    } catch (t) {}
                }, t.deleteStored = function(t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 5097, 5230);
                    try {
                        n(), delete e[t]
                    } catch (t) {}
                }
            });
            csa.plugin(function(a) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 5270, 6564);
                var t, e = a.global,
                    n = a("Events"),
                    r = e.location,
                    o = e.document,
                    i = e.addEventListener,
                    l = a.emit;

                function d() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 5523, 6130);
                    var e = !!t;
                    e && (l("$beforePageTransition"), l("$pageTransition")), t = a.UUID(), n("setEntity", {
                        page: {
                            schemaId: "csa.PageEntity.1",
                            id: t,
                            url: r.href,
                            server: r.hostname,
                            path: r.pathname,
                            referrer: o.referrer,
                            title: o.title
                        }
                    }), e && l("$afterPageTransition")
                }

                function f() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 6148, 6228);
                    l("$load"), l("$afterload")
                }

                function s() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 6246, 6350);
                    l("$beforeunload"), l("$unload"), l("$afterunload")
                }
                r && o && (i && (i("beforeunload", s), i("pagehide", s), "complete" === o.readyState ? f() : i("load", f)), a.register("SPA", {
                    newPage: d
                }), d())
            });
            csa.plugin(function(t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 6590, 9288);
                var i = "UNKNOWN",
                    a = "id",
                    e = "messageId",
                    c = "timestamp",
                    u = "producerId",
                    o = "application",
                    f = "obfuscatedMarketplaceId",
                    s = "entities",
                    r = "schemaId",
                    l = "version",
                    d = "attributes",
                    p = t.config,
                    g = t("Transport"),
                    v = {},
                    I = function(n, t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 7142, 7230);
                        Object.keys(n).forEach(t)
                    };

                function m(t, i, e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 7249, 7478);
                    I(i, function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 7296, 7459);
                        n in t || (t[n] = {
                            version: 1
                        }), b(t[n], i[n], e)
                    })
                }

                function b(t, i, e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 7496, 7652);
                    I(i, function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 7543, 7633);
                        !e && n !== a || (t[n] = i[n])
                    })
                }

                function h(c, n, o) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 7670, 8081);
                    I(n, function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 7717, 8062);
                        var t = c[n];
                        if (t[r]) {
                            var i = {},
                                e = {};
                            E(i), i[a] = t[a], i[u] = t[u] || o, i[r] = t[r], i[l] = t[l]++, b(i[d] = e, t, 1), O(e), g("log", i)
                        }
                    })
                }

                function E(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 8099, 8264);
                    n[c] = n[c] || t.time("ISO"), n[e] = t.UUID(), n[o] = p.Application || i, n[f] = p.ObfuscatedMarketplaceId || i
                }

                function O(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 8282, 8373);
                    delete n[l], delete n[r], delete n[u]
                }

                function k(c) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 8391, 8907);
                    var o = {};
                    this.log = function(n, t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 8470, 8785);
                        var i = {},
                            e = (t || {}).full;
                        E(n), m(i, v, e), m(i, o, e), m(i, n[s] || {}, e), I(i, function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 8651, 8726);
                            O(i[n])
                        }), n[u] = c[u], n[s] = i, g("log", n)
                    }, this.setEntity = function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 8804, 8889);
                        m(o, n, 1), h(o, n, c[u])
                    }
                }
                t.on("$pageTransition", function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 8948, 9005);
                    v = {}
                }), t.register("Events", {
                    setEntity: function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 9062, 9148);
                        m(v, n, 1), h(v, n, "csa")
                    },
                    instance: function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 9180, 9255);
                        return new k(n)
                    }
                })
            });
            csa.plugin(function(o) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 9314, 12741);
                var n, i, r = "csa.cajun.",
                    c = "post",
                    u = "preflight",
                    e = "addEventListener",
                    f = "sendBeacon",
                    t = "Transport",
                    s = o.global,
                    a = s.document,
                    d = o.store,
                    l = o.config,
                    p = [],
                    v = [],
                    h = l[t + ".BatchInterval"] || 5e3,
                    g = l[t + ".MaxEvents"] || 1e3,
                    y = 0,
                    m = 864e5;

                function E(e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 9936, 10248);
                    if (g <= ++y) return y === g ? o.error("Max events reached") : 0;
                    var t = e.timestamp;
                    if (o.time() - +new Date(t) > m) return o.error("Event is too old: " + t);
                    n = n || setTimeout(S, h), v.push(e)
                }

                function S() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 10266, 12049);
                    p.forEach(function(t) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 10311, 12015);
                        var n = [];
                        v.forEach(function(e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 10395, 10488);
                            t.accepts(e) && n.push(e)
                        }), n.length && function(t, n, e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 10503, 11973);
                            d(e, JSON.stringify(n));

                            function r() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 10605, 10699);
                                o.deleteStored(e)
                            }[function(e, t, n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 10700, 11276);
                                var r = s.navigator || {},
                                    o = s.cordova || {};
                                if (!r[f]) return;
                                if ("ios" === o.platformId && !i) {
                                    if (!e[u]) return;
                                    (new Image).src = e[u]().url, i = 1
                                }
                                var a = e[c](t);
                                if (!a.type && r[f](a.url, a.body)) return n(), 1
                            }, function(e, t, n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 11278, 11757);
                                var r = e[c](t),
                                    o = r.type,
                                    a = new XMLHttpRequest;
                                a.onload = function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 11498, 11602);
                                    a.status < 299 && n()
                                }, a.open("POST", r.url), o && a.setRequestHeader("Content-Type", o);
                                return a.send(r.body), 1
                            }].some(function(e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 11764, 11946);
                                try {
                                    return e(t, n, r)
                                } catch (e) {}
                            })
                        }(t, n, r + o.UUID())
                    }), v = [], n = 0
                }
                o.register(t, {
                    log: E,
                    register: function(e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 12140, 12209);
                        p.push(e)
                    }
                }), o.once("$afterunload", S), o.once("$afterload", function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 12278, 12638);
                    (d() || []).forEach(function(e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 12331, 12568);
                        if (!e.indexOf(r)) try {
                            var t = d(e);
                            o.deleteStored(e), JSON.parse(t).forEach(E)
                        } catch (e) {}
                    }), S(), a && a[e] && a[e]("visibilitychange", S, !1)
                }), o.on("$afterPageTransition", function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 12670, 12726);
                    y = 0
                })
            });
            csa.plugin(function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 12767, 13713);
                var t, r = n.config["Events.SushiEndpoint"];
                var i = /\/\/(.*?)\//.exec(r);
                i && i[1] && (t = "https://" + i[1] + "/ping"), n("Transport")("register", {
                    post: function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 13008, 13421);
                        return n = n.map(function(n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 13063, 13209);
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
                    preflight: function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 13454, 13582);
                        return {
                            url: t
                        }
                    },
                    accepts: function() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 13613, 13680);
                        return 1
                    }
                })
            });
            csa.plugin(function(i) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 13739, 16119);
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

                function C(e) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 14653, 15284);
                    if (!b[T]) {
                        var n;
                        if (b[e] = i.time(), e !== l && e !== h || (t = t || b[e]), t && !y[d]) a = a || b[e], (n = {})[f] = t - o, n[s] = a - o, E("PageView.4", n), r = r || setTimeout(S, c);
                        if (e !== p && e !== g && e !== m || (clearTimeout(r), r = 0), e !== g && e !== m || E("PageRender.3", {
                                transitionType: e === g ? "hard" : "soft"
                            }), e === T)(n = {})[f] = t - o, n[s] = a - o, n[u] = b[e] - o, E("PageImpressed.2", n)
                    }
                }

                function E(e, n) {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 15302, 15472);
                    w[e] || (n.schemaId = "csa." + e, P("log", n, {
                        full: 1
                    }), w[e] = 1)
                }

                function M() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 15490, 15558);
                    C(y[d] ? p : v)
                }

                function S() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 15576, 15640);
                    C(T), r = 0
                }

                function V() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 15658, 15800);
                    var e = o ? m : g;
                    b = {}, w = {}, a = t = 0, o = i.time(), C(e), M()
                }

                function $() {___jdce_logger("lacuna_cache/exported_xtcdmg.js", 15818, 15966);
                    var e = y.readyState;
                    "interactive" === e && C(l), "complete" === e && C(h)
                }
                V(), y[e]("visibilitychange", M, !1), y[e]("readystatechange", $, !1), i.on("$afterPageTransition", V), i.once("$load", $)
            });
        