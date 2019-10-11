
        ! function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 11, 551);
            function n(n, t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 36, 152);
                var r = i(n);
                return t && (r = r("instance", t)), r
            }
            var r = [],
                c = 0,
                i = function(t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 220, 505);
                    return function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 261, 487);
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
                'ObfuscatedMarketplaceId': 'A1EVAM02EL8SFB',
                'Events.SushiEndpoint': 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod'
            });

            csa("Events")("setEntity", {
                page: {
                    requestId: "WDZR9BW0DJDJSNJBXCD8",
                    meaningful: "interactive"
                },
                session: {
                    id: "141-0518080-7552509"
                }
            });
        }! function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 1142, 4026);
            var e, o, t = n.csa,
                i = {},
                f = {},
                u = n.csa._s,
                c = 0,
                r = {},
                a = {},
                s = setTimeout,
                l = Object.keys;

            function g(n, i) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 1416, 1479);
                return t(n, i)
            }

            function d(n, i) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 1493, 1604);
                var t = f[n] || {};
                O(t, i), f[n] = t, s(b, 0)
            }

            function h(n, i) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 1618, 1700);
                r[n] || (r[n] = []), r[n].push(i)
            }

            function p(i, t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 1714, 1955);
                if (i in a) t(a[i]);
                else {
                    var e = function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 1821, 1894);
                        v(i, e), t(n)
                    };
                    h(i, e)
                }
            }

            function v(n, i) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 1969, 2078);
                var t = r[n];
                t && t.splice(t.indexOf(i), 1)
            }

            function m(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 2092, 2158);
                if (i.DEBUG) throw n
            }

            function w() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 2172, 2277);
                return Math.abs(4294967295 * Math.random() | 0).toString(36)
            }

            function b() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 2291, 2577);
                for (var n = 0; n < u.length;) {
                    var i = u[n],
                        t = i[0] in f;
                    if (!t && !o) return void(c = i.length);
                    t ? (u.splice(c = n, 1), S(i)) : n++
                }
            }

            function S(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 2591, 2875);
                var arguments, i = f[n[0]],
                    t = (arguments = n[1])[0];
                if (!i || !i[t]) return m("Undefined function: " + i + "/" + t);
                e = n[3], f[n[2]] = i[t].apply(i, arguments.slice(1)) || {}, e = 0
            }

            function D() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 2889, 2944);
                o = 1, b()
            }

            function O(i, t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 2958, 3084);
                l(t).forEach(function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3006, 3069);
                    i[n] = t[n]
                })
            }
            p("$beforeunload", D), d("Config", {
                instance: function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3160, 3219);
                    O(i, n)
                }
            }), t.plugin = function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3247, 3295);
                n(g)
            }, g.config = i, g.register = d, g.on = h, g.removeListener = v, g.once = p, g.emit = function(n, i) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3380, 3521);
                (r[n] || []).forEach(function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3434, 3490);
                    n(i)
                }), a[n] = i || {}
            }, g.UUID = function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3532, 3612);
                return [w(), w(), w(), w()].join("-")
            }, g.time = function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3623, 3774);
                var i = e ? new Date(e.time) : new Date;
                return "ISO" === n ? i.toISOString() : i.getTime()
            }, g.error = m, (g.global = n).csa._s.push = function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3818, 3920);
                n[0] in f && (!u.length || o) ? S(n) : u.splice(c++, 0, n)
            }, b(), s(function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 3929, 4012);
                s(D, i.SkipMissingPluginsTimeout || 5e3)
            }, 1)
        }("undefined" != typeof window ? window : global);
        csa.plugin(function(t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 4095, 4704);
            var e;

            function n() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 4141, 4326);
                if (!e) try {
                    e = t.global.localStorage || {}
                } catch (t) {
                    e = {}
                }
            }
            t.store = function(t, c) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 4349, 4558);
                try {
                    if (n(), !t) return Object.keys(e);
                    if (!c) return e[t];
                    e[t] = c
                } catch (t) {}
            }, t.deleteStored = function(t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 4577, 4694);
                try {
                    n(), delete e[t]
                } catch (t) {}
            }
        });
        csa.plugin(function(a) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 4726, 5900);
            var t, e = a.global,
                n = a("Events"),
                r = e.location,
                o = e.document,
                i = e.addEventListener,
                l = a.emit;

            function d() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 4951, 5506);
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

            function f() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 5520, 5592);
                l("$load"), l("$afterload")
            }

            function s() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 5606, 5702);
                l("$beforeunload"), l("$unload"), l("$afterunload")
            }
            r && o && (i && (i("beforeunload", s), i("pagehide", s), "complete" === o.readyState ? f() : i("load", f)), a.register("SPA", {
                newPage: d
            }), d())
        });
        csa.plugin(function(t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 5922, 8348);
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
                I = function(n, t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 6414, 6494);
                    Object.keys(n).forEach(t)
                };

            function m(t, i, e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 6509, 6714);
                I(i, function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 6552, 6699);
                    n in t || (t[n] = {
                        version: 1
                    }), b(t[n], i[n], e)
                })
            }

            function b(t, i, e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 6728, 6868);
                I(i, function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 6771, 6853);
                    !e && n !== a || (t[n] = i[n])
                })
            }

            function h(c, n, o) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 6882, 7257);
                I(n, function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 6925, 7242);
                    var t = c[n];
                    if (t[r]) {
                        var i = {},
                            e = {};
                        E(i), i[a] = t[a], i[u] = t[u] || o, i[r] = t[r], i[l] = t[l]++, b(i[d] = e, t, 1), O(e), g("log", i)
                    }
                })
            }

            function E(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 7271, 7428);
                n[c] = n[c] || t.time("ISO"), n[e] = t.UUID(), n[o] = p.Application || i, n[f] = p.ObfuscatedMarketplaceId || i
            }

            function O(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 7442, 7525);
                delete n[l], delete n[r], delete n[u]
            }

            function k(c) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 7539, 8011);
                var o = {};
                this.log = function(n, t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 7610, 7901);
                    var i = {},
                        e = (t || {}).full;
                    E(n), m(i, v, e), m(i, o, e), m(i, n[s] || {}, e), I(i, function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 7779, 7846);
                        O(i[n])
                    }), n[u] = c[u], n[s] = i, g("log", n)
                }, this.setEntity = function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 7920, 7997);
                    m(o, n, 1), h(o, n, c[u])
                }
            }
            t.on("$pageTransition", function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 8048, 8097);
                v = {}
            }), t.register("Events", {
                setEntity: function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 8150, 8228);
                    m(v, n, 1), h(v, n, "csa")
                },
                instance: function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 8256, 8323);
                    return new k(n)
                }
            })
        });
        csa.plugin(function(o) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 8370, 11505);
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

            function E(e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 8924, 9216);
                if (g <= ++y) return y === g ? o.error("Max events reached") : 0;
                var t = e.timestamp;
                if (o.time() - +new Date(t) > m) return o.error("Event is too old: " + t);
                n = n || setTimeout(S, h), v.push(e)
            }

            function S() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 9230, 10877);
                p.forEach(function(t) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 9271, 10847);
                    var n = [];
                    v.forEach(function(e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 9347, 9432);
                        t.accepts(e) && n.push(e)
                    }), n.length && function(t, n, e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 9447, 10809);
                        d(e, JSON.stringify(n));

                        function r() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 9541, 9627);
                            o.deleteStored(e)
                        }[function(e, t, n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 9628, 10164);
                            var r = s.navigator || {},
                                o = s.cordova || {};
                            if (!r[f]) return;
                            if ("ios" === o.platformId && !i) {
                                if (!e[u]) return;
                                (new Image).src = e[u]().url, i = 1
                            }
                            var a = e[c](t);
                            if (!a.type && r[f](a.url, a.body)) return n(), 1
                        }, function(e, t, n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 10166, 10613);
                            var r = e[c](t),
                                o = r.type,
                                a = new XMLHttpRequest;
                            a.onload = function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 10370, 10466);
                                a.status < 299 && n()
                            }, a.open("POST", r.url), o && a.setRequestHeader("Content-Type", o);
                            return a.send(r.body), 1
                        }].some(function(e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 10620, 10786);
                            try {
                                return e(t, n, r)
                            } catch (e) {}
                        })
                    }(t, n, r + o.UUID())
                }), v = [], n = 0
            }
            o.register(t, {
                log: E,
                register: function(e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 10956, 11017);
                    p.push(e)
                }
            }), o.once("$afterunload", S), o.once("$afterload", function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 11082, 11414);
                (d() || []).forEach(function(e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 11131, 11348);
                    if (!e.indexOf(r)) try {
                        var t = d(e);
                        o.deleteStored(e), JSON.parse(t).forEach(E)
                    } catch (e) {}
                }), S(), a && a[e] && a[e]("visibilitychange", S, !1)
            }), o.on("$afterPageTransition", function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 11446, 11494);
                y = 0
            })
        });
        csa.plugin(function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 11527, 12373);
            var t, r = n.config["Events.SushiEndpoint"];
            var i = /\/\/(.*?)\//.exec(r);
            i && i[1] && (t = "https://" + i[1] + "/ping"), n("Transport")("register", {
                post: function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 11752, 12121);
                    return n = n.map(function(n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 11803, 11933);
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
                preflight: function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 12150, 12262);
                    return {
                        url: t
                    }
                },
                accepts: function() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 12289, 12348);
                    return 1
                }
            })
        });
        csa.plugin(function(i) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 12395, 14559);
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

            function C(e) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 13209, 13808);
                if (!b[T]) {
                    var n;
                    if (b[e] = i.time(), e !== l && e !== h || (t = t || b[e]), t && !y[d]) a = a || b[e], (n = {})[f] = t - o, n[s] = a - o, E("PageView.4", n), r = r || setTimeout(S, c);
                    if (e !== p && e !== g && e !== m || (clearTimeout(r), r = 0), e !== g && e !== m || E("PageRender.3", {
                            transitionType: e === g ? "hard" : "soft"
                        }), e === T)(n = {})[f] = t - o, n[s] = a - o, n[u] = b[e] - o, E("PageImpressed.2", n)
                }
            }

            function E(e, n) {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 13822, 13976);
                w[e] || (n.schemaId = "csa." + e, P("log", n, {
                    full: 1
                }), w[e] = 1)
            }

            function M() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 13990, 14050);
                C(y[d] ? p : v)
            }

            function S() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 14064, 14120);
                C(T), r = 0
            }

            function V() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 14134, 14264);
                var e = o ? m : g;
                b = {}, w = {}, a = t = 0, o = i.time(), C(e), M()
            }

            function $() {___jdce_logger("lacuna_cache/exported_fc4ru2.js", 14278, 14414);
                var e = y.readyState;
                "interactive" === e && C(l), "complete" === e && C(h)
            }
            V(), y[e]("visibilitychange", M, !1), y[e]("readystatechange", $, !1), i.on("$afterPageTransition", V), i.once("$load", $)
        });
    