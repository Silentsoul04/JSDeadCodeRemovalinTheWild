(function() {
    if (window.CTO) return;
    var ctoImage1 = new Image,
        url = escape(location.href),
        userAgent = escape(navigator.userAgent),
        pageViewId, firstPageViewId;
    firstPageViewId = window.cto && window.cto.firstPageViewId ? window.cto.firstPageViewId : "CTO-" + (new Date).getTime() + "-" + Math.floor(1e13 * Math.random()), "undefined" != typeof Prototype && Prototype.Version && -1 !== Prototype.Version.indexOf("1.6") && (Array.prototype.reduce = function(t, i) {
        "use strict";
        if (null === this || void 0 === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        var n, e, o = this.length >>> 0,
            u = !1;
        for (1 < arguments.length && (e = i, u = !0), n = 0; o > n; ++n) this.hasOwnProperty(n) && (u ? e = t(e, this[n], n, this) : (e = this[n], u = !0));
        if (!u) throw new TypeError("Reduce of empty array with no initial value");
        return e
    }), window.CTO = function() {
        var t = {
            firstPageViewId: firstPageViewId,
            h: {},
            queue: [],
            track: function(t) {
                this.queue.unshift(function() {
                    this.trackPage(t)
                })
            },
            trackPage: function(t) {
                this.queue.unshift(function() {
                    this.trackPage(t)
                })
            },
            trackLink: function(t) {
                this.queue.unshift(function() {
                    this.trackLink(t)
                })
            },
            trackEvent: function(t) {
                this.queue.unshift(function() {
                    this.trackEvent(t)
                })
            },
            trackVideo: function(t) {
                this.queue.unshift(function() {
                    this.trackVideo(t)
                })
            },
            trackGame: function(t) {
                this.queue.unshift(function() {
                    this.trackGame(t)
                })
            },
            trackApp: function(t) {
                this.queue.unshift(function() {
                    this.trackApp(t)
                })
            },
            trackPrint: function(t) {
                this.queue.unshift(function() {
                    this.trackPrint(t)
                })
            },
            trackPagination: function(t) {
                this.queue.unshift(function() {
                    this.trackPage({
                        pageNumber: t
                    })
                })
            },
            updateVariableLogic: function(t, i) {
                this.queue.unshift(function() {
                    this.updateVariableLogic(t, i)
                })
            },
            addCTOListener: function(t, i) {
                this.queue.unshift(function() {
                    this.addCTOListener(t, i)
                })
            },
            setCTOConfigs: function(t) {
                this.queue.unshift(function() {
                    this.setCTOConfigs(t)
                })
            },
            resetObj: function() {
                this.queue.unshift(function() {
                    this.resetObj()
                })
            }
        };
        for (var i in window.cto) window.cto.hasOwnProperty(i) && "function" != typeof window.cto[i] && (t[i] = window.cto[i]);
        return window.cto = t, t
    }, window.CTO.firstPageViewId = firstPageViewId;
    /** vim: et:ts=4:sw=4:sts=4
     * @license RequireJS 2.1.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
     * Available via the MIT or new BSD license.
     * see: http://github.com/jrburke/requirejs for details
     */

    /*!
     * Bean - copyright (c) Jacob Thornton 2011-2012
     * https://github.com/fat/bean
     * MIT license
     */

    //     Underscore.js 1.5.2
    //     http://underscorejs.org
    //     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //     Underscore may be freely distributed under the MIT license.

    // Copyright (c) 2012 Florian H., https://github.com/js-coder https://github.com/js-coder/cookie.js

    /*!
     * Reqwest! A general purpose XHR connection manager
     * (c) Dustin Diaz 2013
     * https://github.com/ded/reqwest
     * license MIT
     */

    /*
         ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

        AppMeasurement for JavaScript version: 2.10.0
        Copyright 1996-2016 Adobe, Inc. All Rights Reserved
        More info available at http://www.adobe.com/marketing-cloud.html
        */

    /**
     * @license
     * Adobe Visitor API for JavaScript version: 3.3.0
     * Copyright 2018 Adobe, Inc. All Rights Reserved
     * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
     */

    // Copyright (c) 2014 comScore, Inc.

    /*!
     * $script.js JS loader & dependency manager
     * https://github.com/ded/script.js
     * (c) Dustin Diaz 2014 | License MIT
     */

    var requirejs, require, define;
    ! function(global, window) {
        function isFunction(e) {
            return "[object Function]" === ostring.call(e)
        }

        function isArray(e) {
            return "[object Array]" === ostring.call(e)
        }

        function each(e, t) {
            if (e) {
                var n;
                for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
            }
        }

        function eachReverse(e, t) {
            if (e) {
                var n;
                for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
            }
        }

        function hasProp(e, t) {
            return hasOwn.call(e, t)
        }

        function getOwn(e, t) {
            return hasProp(e, t) && e[t]
        }

        function eachProp(e, t) {
            var n;
            for (n in e)
                if (hasProp(e, n) && t(e[n], n)) break
        }

        function mixin(e, t, n, r) {
            return t && eachProp(t, function(t, i) {
                !n && hasProp(e, i) || (r && "string" != typeof t ? (e[i] || (e[i] = {}), mixin(e[i], t, n, r)) : e[i] = t)
            }), e
        }

        function bind(e, t) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function scripts() {
            return document.getElementsByTagName("script")
        }

        function defaultOnError(e) {
            throw e
        }

        function getGlobal(e) {
            if (!e) return e;
            var t = global;
            return each(e.split("."), function(e) {
                t = t[e]
            }), t
        }

        function makeError(e, t, n, r) {
            var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
            return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
        }

        function newContext(e) {
            function t(e) {
                var t, n;
                for (t = 0; e[t]; t += 1)
                    if ("." === (n = e[t])) e.splice(t, 1), t -= 1;
                    else if (".." === n) {
                    if (1 === t && (".." === e[2] || ".." === e[0])) break;
                    t > 0 && (e.splice(t - 1, 2), t -= 2)
                }
            }

            function n(e, n, r) {
                var i, a, o, s, l, c, d, u, p, m, f, g = n && n.split("/"),
                    v = g,
                    h = C.map,
                    y = h && h["*"];
                if (e && "." === e.charAt(0) && (n ? (v = getOwn(C.pkgs, n) ? g = [n] : g.slice(0, g.length - 1), e = v.concat(e.split("/")), t(e), a = getOwn(C.pkgs, i = e[0]), e = e.join("/"), a && e === i + "/" + a.main && (e = i)) : 0 === e.indexOf("./") && (e = e.substring(2))), r && h && (g || y)) {
                    for (s = e.split("/"), l = s.length; l > 0; l -= 1) {
                        if (d = s.slice(0, l).join("/"), g)
                            for (c = g.length; c > 0; c -= 1)
                                if ((o = getOwn(h, g.slice(0, c).join("/"))) && (o = getOwn(o, d))) {
                                    u = o, p = l;
                                    break
                                }
                        if (u) break;
                        !m && y && getOwn(y, d) && (m = getOwn(y, d), f = l)
                    }!u && m && (u = m, p = f), u && (s.splice(0, p, u), e = s.join("/"))
                }
                return e
            }

            function r(e) {
                isBrowser && each(scripts(), function(t) {
                    if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === _.contextName) return t.parentNode.removeChild(t), !0
                })
            }

            function i(e) {
                var t = getOwn(C.paths, e);
                if (t && isArray(t) && t.length > 1) return r(e), t.shift(), _.require.undef(e), _.require([e]), !0
            }

            function a(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function o(e, t, r, i) {
                var o, s, l, c, d = null,
                    u = t ? t.name : null,
                    p = e,
                    m = !0,
                    f = "";
                return e || (m = !1, e = "_@r" + (E += 1)), c = a(e), d = c[0], e = c[1], d && (d = n(d, u, i), s = getOwn(V, d)), e && (d ? f = s && s.normalize ? s.normalize(e, function(e) {
                    return n(e, u, i)
                }) : n(e, u, i) : (f = n(e, u, i), c = a(f), d = c[0], f = c[1], r = !0, o = _.nameToUrl(f))), l = !d || s || r ? "" : "_unnormalized" + (A += 1), {
                    prefix: d,
                    name: f,
                    parentMap: t,
                    unnormalized: !!l,
                    url: o,
                    originalName: p,
                    isDefine: m,
                    id: (d ? d + "!" + f : f) + l
                }
            }

            function s(e) {
                var t = e.id,
                    n = getOwn(T, t);
                return n || (n = T[t] = new _.Module(e)), n
            }

            function l(e, t, n) {
                var r = e.id,
                    i = getOwn(T, r);
                !hasProp(V, r) || i && !i.defineEmitComplete ? (i = s(e), i.error && "error" === t ? n(i.error) : i.on(t, n)) : "defined" === t && n(V[r])
            }

            function c(e, t) {
                var n = e.requireModules,
                    r = !1;
                t ? t(e) : (each(n, function(t) {
                    var n = getOwn(T, t);
                    n && (n.error = e, n.events.error && (r = !0, n.emit("error", e)))
                }), r || req.onError(e))
            }

            function d() {
                globalDefQueue.length && (apsp.apply(P, [P.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
            }

            function u(e) {
                delete T[e], delete S[e]
            }

            function p(e, t, n) {
                var r = e.map.id;
                e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, i) {
                    var a = r.id,
                        o = getOwn(T, a);
                    !o || e.depMatched[i] || n[a] || (getOwn(t, a) ? (e.defineDep(i, V[a]), e.check()) : p(o, t, n))
                }), n[r] = !0)
            }

            function m() {
                var e, t, n, a, o = 1e3 * C.waitSeconds,
                    s = o && _.startTime + o < (new Date).getTime(),
                    l = [],
                    d = [],
                    u = !1,
                    f = !0;
                if (!y) {
                    if (y = !0, eachProp(S, function(n) {
                            if (e = n.map, t = e.id, n.enabled && (e.isDefine || d.push(n), !n.error))
                                if (!n.inited && s) i(t) ? (a = !0, u = !0) : (l.push(t), r(t));
                                else if (!n.inited && n.fetched && e.isDefine && (u = !0, !e.prefix)) return f = !1
                        }), s && l.length) return n = makeError("timeout", "Load timeout for modules: " + l, null, l), n.contextName = _.contextName, c(n);
                    f && each(d, function(e) {
                        p(e, {}, {})
                    }), s && !a || !u || !isBrowser && !isWebWorker || k || (k = setTimeout(function() {
                        k = 0, m()
                    }, 50)), y = !1
                }
            }

            function f(e) {
                hasProp(V, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2])
            }

            function g(e, t, n, r) {
                e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
            }

            function v(e) {
                var t = e.currentTarget || e.srcElement;
                return g(t, _.onScriptLoad, "load", "onreadystatechange"), g(t, _.onScriptError, "error"), {
                    node: t,
                    id: t && t.getAttribute("data-requiremodule")
                }
            }

            function h() {
                var e;
                for (d(); P.length;) {
                    if (e = P.shift(), null === e[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                    f(e)
                }
            }
            var y, b, _, w, k, C = {
                    waitSeconds: 7,
                    baseUrl: "./",
                    paths: {},
                    pkgs: {},
                    shim: {},
                    config: {}
                },
                T = {},
                S = {},
                I = {},
                P = [],
                V = {},
                D = {},
                E = 1,
                A = 1;
            return w = {
                require: function(e) {
                    return e.require ? e.require : e.require = _.makeRequire(e.map)
                },
                exports: function(e) {
                    if (e.usingExports = !0, e.map.isDefine) return e.exports ? e.exports : e.exports = V[e.map.id] = {}
                },
                module: function(e) {
                    return e.module ? e.module : e.module = {
                        id: e.map.id,
                        uri: e.map.url,
                        config: function() {
                            var t = getOwn(C.pkgs, e.map.id);
                            return (t ? getOwn(C.config, e.map.id + "/" + t.main) : getOwn(C.config, e.map.id)) || {}
                        },
                        exports: V[e.map.id]
                    }
                }
            }, b = function(e) {
                this.events = getOwn(I, e.id) || {}, this.map = e, this.shim = getOwn(C.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
            }, b.prototype = {
                init: function(e, t, n, r) {
                    r = r || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                        this.emit("error", e)
                    })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
                },
                defineDep: function(e, t) {
                    this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
                },
                fetch: function() {
                    if (!this.fetched) {
                        this.fetched = !0, _.startTime = (new Date).getTime();
                        var e = this.map;
                        if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                        _.makeRequire(this.map, {
                            enableBuildCallback: !0
                        })(this.shim.deps || [], bind(this, function() {
                            return e.prefix ? this.callPlugin() : this.load()
                        }))
                    }
                },
                load: function() {
                    var e = this.map.url;
                    D[e] || (D[e] = !0, _.load(this.map.id, e))
                },
                check: function() {
                    if (this.enabled && !this.enabling) {
                        var e, t, n = this.map.id,
                            r = this.depExports,
                            i = this.exports,
                            a = this.factory;
                        if (this.inited) {
                            if (this.error) this.emit("error", this.error);
                            else if (!this.defining) {
                                if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                    if (isFunction(a)) {
                                        if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                            i = _.execCb(n, a, r, i)
                                        } catch (t) {
                                            e = t
                                        } else i = _.execCb(n, a, r, i);
                                        if (this.map.isDefine && (t = this.module, t && void 0 !== t.exports && t.exports !== this.exports ? i = t.exports : void 0 === i && this.usingExports && (i = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
                                    } else i = a;
                                    this.exports = i, this.map.isDefine && !this.ignore && (V[n] = i, req.onResourceLoad && req.onResourceLoad(_, this.map, this.depMaps)), u(n), this.defined = !0
                                }
                                this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                            }
                        } else this.fetch()
                    }
                },
                callPlugin: function() {
                    var e = this.map,
                        t = e.id,
                        r = o(e.prefix);
                    this.depMaps.push(r), l(r, "defined", bind(this, function(r) {
                        var i, a, d, p = this.map.name,
                            m = this.map.parentMap ? this.map.parentMap.name : null,
                            f = _.makeRequire(e.parentMap, {
                                enableBuildCallback: !0
                            });
                        if (this.map.unnormalized) return r.normalize && (p = r.normalize(p, function(e) {
                            return n(e, m, !0)
                        }) || ""), a = o(e.prefix + "!" + p, this.map.parentMap), l(a, "defined", bind(this, function(e) {
                            this.init([], function() {
                                return e
                            }, null, {
                                enabled: !0,
                                ignore: !0
                            })
                        })), void((d = getOwn(T, a.id)) && (this.depMaps.push(a), this.events.error && d.on("error", bind(this, function(e) {
                            this.emit("error", e)
                        })), d.enable()));
                        i = bind(this, function(e) {
                            this.init([], function() {
                                return e
                            }, null, {
                                enabled: !0
                            })
                        }), i.error = bind(this, function(e) {
                            this.inited = !0, this.error = e, e.requireModules = [t], eachProp(T, function(e) {
                                0 === e.map.id.indexOf(t + "_unnormalized") && u(e.map.id)
                            }), c(e)
                        }), i.fromText = bind(this, function(n, r) {
                            var a = e.name,
                                l = o(a),
                                d = useInteractive;
                            r && (n = r), d && (useInteractive = !1), s(l), hasProp(C.config, t) && (C.config[a] = C.config[t]);
                            try {
                                req.exec(n)
                            } catch (e) {
                                return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [t]))
                            }
                            d && (useInteractive = !0), this.depMaps.push(l), _.completeLoad(a), f([a], i)
                        }), r.load(e.name, f, i, C)
                    })), _.enable(r, this), this.pluginMaps[r.id] = r
                },
                enable: function() {
                    S[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                        var n, r, i;
                        if ("string" == typeof e) {
                            if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, i = getOwn(w, e.id)) return void(this.depExports[t] = i(this));
                            this.depCount += 1, l(e, "defined", bind(this, function(e) {
                                this.defineDep(t, e), this.check()
                            })), this.errback && l(e, "error", bind(this, this.errback))
                        }
                        n = e.id, r = T[n], hasProp(w, n) || !r || r.enabled || _.enable(e, this)
                    })), eachProp(this.pluginMaps, bind(this, function(e) {
                        var t = getOwn(T, e.id);
                        t && !t.enabled && _.enable(e, this)
                    })), this.enabling = !1, this.check()
                },
                on: function(e, t) {
                    var n = this.events[e];
                    n || (n = this.events[e] = []), n.push(t)
                },
                emit: function(e, t) {
                    each(this.events[e], function(e) {
                        e(t)
                    }), "error" === e && delete this.events[e]
                }
            }, _ = {
                config: C,
                contextName: e,
                registry: T,
                defined: V,
                urlFetched: D,
                defQueue: P,
                Module: b,
                makeModuleMap: o,
                nextTick: req.nextTick,
                onError: c,
                configure: function(e) {
                    e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                    var t = C.pkgs,
                        n = C.shim,
                        r = {
                            paths: !0,
                            config: !0,
                            map: !0
                        };
                    eachProp(e, function(e, t) {
                        r[t] ? "map" === t ? (C.map || (C.map = {}), mixin(C[t], e, !0, !0)) : mixin(C[t], e, !0) : C[t] = e
                    }), e.shim && (eachProp(e.shim, function(e, t) {
                        isArray(e) && (e = {
                            deps: e
                        }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = _.makeShimExports(e)), n[t] = e
                    }), C.shim = n), e.packages && (each(e.packages, function(e) {
                        var n;
                        e = "string" == typeof e ? {
                            name: e
                        } : e, n = e.location, t[e.name] = {
                            name: e.name,
                            location: n || e.name,
                            main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                        }
                    }), C.pkgs = t), eachProp(T, function(e, t) {
                        e.inited || e.map.unnormalized || (e.map = o(t))
                    }), (e.deps || e.callback) && _.require(e.deps || [], e.callback)
                },
                makeShimExports: function(e) {
                    function t() {
                        var t;
                        return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                    }
                    return t
                },
                makeRequire: function(t, r) {
                    function i(n, a, l) {
                        var d, u, p;
                        return r.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild = !0), "string" == typeof n ? isFunction(a) ? c(makeError("requireargs", "Invalid require call"), l) : t && hasProp(w, n) ? w[n](T[t.id]) : req.get ? req.get(_, n, t, i) : (u = o(n, t, !1, !0), d = u.id, hasProp(V, d) ? V[d] : c(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (h(), _.nextTick(function() {
                            h(), p = s(o(null, t)), p.skipMap = r.skipMap, p.init(n, a, l, {
                                enabled: !0
                            }), m()
                        }), i)
                    }
                    return r = r || {}, mixin(i, {
                        isBrowser: isBrowser,
                        toUrl: function(e) {
                            var r, i = e.lastIndexOf("."),
                                a = e.split("/")[0],
                                o = "." === a || ".." === a;
                            return -1 !== i && (!o || i > 1) && (r = e.substring(i, e.length), e = e.substring(0, i)), _.nameToUrl(n(e, t && t.id, !0), r, !0)
                        },
                        defined: function(e) {
                            return hasProp(V, o(e, t, !1, !0).id)
                        },
                        specified: function(e) {
                            return e = o(e, t, !1, !0).id, hasProp(V, e) || hasProp(T, e)
                        }
                    }), t || (i.undef = function(e) {
                        d();
                        var n = o(e, t, !0),
                            r = getOwn(T, e);
                        delete V[e], delete D[n.url], delete I[e], r && (r.events.defined && (I[e] = r.events), u(e))
                    }), i
                },
                enable: function(e) {
                    getOwn(T, e.id) && s(e).enable()
                },
                completeLoad: function(e) {
                    var t, n, r, a = getOwn(C.shim, e) || {},
                        o = a.exports;
                    for (d(); P.length;) {
                        if (n = P.shift(), null === n[0]) {
                            if (n[0] = e, t) break;
                            t = !0
                        } else n[0] === e && (t = !0);
                        f(n)
                    }
                    if (r = getOwn(T, e), !t && !hasProp(V, e) && r && !r.inited) {
                        if (!(!C.enforceDefine || o && getGlobal(o))) return i(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [e]));
                        f([e, a.deps || [], a.exportsFn])
                    }
                    m()
                },
                nameToUrl: function(e, t, n) {
                    var r, i, a, o, s, l, c, d, u;
                    if (req.jsExtRegExp.test(e)) d = e + (t || "");
                    else {
                        for (r = C.paths, i = C.pkgs, s = e.split("/"), l = s.length; l > 0; l -= 1) {
                            if (c = s.slice(0, l).join("/"), a = getOwn(i, c), u = getOwn(r, c)) {
                                isArray(u) && (u = u[0]), s.splice(0, l, u);
                                break
                            }
                            if (a) {
                                o = e === a.name ? a.location + "/" + a.main : a.location, s.splice(0, l, o);
                                break
                            }
                        }
                        d = s.join("/"), d += t || (/\?/.test(d) || n ? "" : ".js"), d = ("/" === d.charAt(0) || d.match(/^[\w\+\.\-]+:/) ? "" : C.baseUrl) + d
                    }
                    return C.urlArgs ? d + (-1 === d.indexOf("?") ? "?" : "&") + C.urlArgs : d
                },
                load: function(e, t) {
                    req.load(_, e, t)
                },
                execCb: function(e, t, n, r) {
                    return t.apply(r, n)
                },
                onScriptLoad: function(e) {
                    if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                        interactiveScript = null;
                        var t = v(e);
                        _.completeLoad(t.id)
                    }
                },
                onScriptError: function(e) {
                    var t = v(e);
                    if (!i(t.id)) return c(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
                }
            }, _.require = _.makeRequire(), _
        }

        function getInteractiveScript() {
            return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
                if ("interactive" === e.readyState) return interactiveScript = e
            }), interactiveScript)
        }
        var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.8",
            commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
            cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
            jsSuffixRegExp = /\.js$/,
            currDirRegExp = /^\.\//,
            op = Object.prototype,
            ostring = op.toString,
            hasOwn = op.hasOwnProperty,
            ap = Array.prototype,
            apsp = ap.splice,
            isBrowser = !(void 0 === window || !navigator || !window.document),
            isWebWorker = !isBrowser && "undefined" != typeof importScripts,
            readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
            defContextName = "_",
            isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
            contexts = {},
            cfg = {},
            globalDefQueue = [],
            useInteractive = !1;
        if (void 0 === define) {
            if (void 0 !== requirejs) {
                if (isFunction(requirejs)) return;
                cfg = requirejs, requirejs = void 0
            }
            void 0 === require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, r) {
                var i, a, o = defContextName;
                return isArray(e) || "string" == typeof e || (a = e, isArray(t) ? (e = t, t = n, n = r) : e = []), a && a.context && (o = a.context), i = getOwn(contexts, o), i || (i = contexts[o] = req.s.newContext(o)), a && i.configure(a), i.require(e, t, n)
            }, req.config = function(e) {
                return req(e)
            }, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
                setTimeout(e, 4)
            } : function(e) {
                e()
            }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
                contexts: contexts,
                newContext: newContext
            }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
                req[e] = function() {
                    var t = contexts[defContextName];
                    return t.require[e].apply(t, arguments)
                }
            }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], (baseElement = document.getElementsByTagName("base")[0]) && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
                var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
                return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
            }, req.load = function(e, t, n) {
                var r, i = e && e.config || {};
                if (isBrowser) return r = req.createNode(i, t, n), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = n, currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r;
                if (isWebWorker) try {
                    importScripts(n), e.completeLoad(t)
                } catch (r) {
                    e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, r, [t]))
                }
            }, isBrowser && eachReverse(scripts(), function(e) {
                if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
            }), define = function(e, t, n) {
                var r, i;
                "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
                    t.push(n)
                }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript()) && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")]), (i ? i.defQueue : globalDefQueue).push([e, t, n])
            }, define.amd = {
                jQuery: !0
            }, req.exec = function(text) {
                return eval(text)
            }, req(cfg)
        }
    }({}, {}), define("requireLib", function() {}),
        function(e, t, n) {
            "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("bean", n) : t.bean = n()
        }(0, this, function(e, t) {
            e = e || "bean", t = t || this;
            var n, r = window,
                i = t[e],
                a = /[^\.]*(?=\..*)\.|.*/,
                o = /\..*/,
                s = "addEventListener",
                l = document || {},
                c = l.documentElement || {},
                d = c[s],
                u = d ? s : "attachEvent",
                p = {},
                m = Array.prototype.slice,
                f = function(e, t) {
                    return e.split(t || " ")
                },
                g = function(e) {
                    return "string" == typeof e
                },
                v = function(e) {
                    return "function" == typeof e
                },
                h = function(e, t, n) {
                    for (n = 0; n < t.length; n++) t[n] && (e[t[n]] = 1);
                    return e
                }({}, f("click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll " + (d ? "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete " : ""))),
                y = function() {
                    var e = "compareDocumentPosition" in c ? function(e, t) {
                            return t.compareDocumentPosition && 16 == (16 & t.compareDocumentPosition(e))
                        } : "contains" in c ? function(e, t) {
                            return (t = 9 === t.nodeType || t === window ? c : t) !== e && t.contains(e)
                        } : function(e, t) {
                            for (; e = e.parentNode;)
                                if (e === t) return 1;
                            return 0
                        },
                        t = function(t) {
                            var n = t.relatedTarget;
                            return n ? n !== this && "xul" !== n.prefix && !/document/.test(this.toString()) && !e(n, this) : null == n
                        };
                    return {
                        mouseenter: {
                            base: "mouseover",
                            condition: t
                        },
                        mouseleave: {
                            base: "mouseout",
                            condition: t
                        },
                        mousewheel: {
                            base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"
                        }
                    }
                }(),
                b = function() {
                    var e = f("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),
                        t = e.concat(f("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),
                        n = t.concat(f("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),
                        i = e.concat(f("char charCode key keyCode keyIdentifier keyLocation location")),
                        a = e.concat(f("data")),
                        o = e.concat(f("touches targetTouches changedTouches scale rotation")),
                        s = e.concat(f("data origin source")),
                        d = e.concat(f("state")),
                        u = /over|out/,
                        p = [{
                            reg: /key/i,
                            fix: function(e, t) {
                                return t.keyCode = e.keyCode || e.which, i
                            }
                        }, {
                            reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                            fix: function(e, n, r) {
                                return n.rightClick = 3 === e.which || 2 === e.button, n.pos = {
                                    x: 0,
                                    y: 0
                                }, e.pageX || e.pageY ? (n.clientX = e.pageX, n.clientY = e.pageY) : (e.clientX || e.clientY) && (n.clientX = e.clientX + l.body.scrollLeft + c.scrollLeft, n.clientY = e.clientY + l.body.scrollTop + c.scrollTop), u.test(r) && (n.relatedTarget = e.relatedTarget || e[("mouseover" == r ? "from" : "to") + "Element"]), t
                            }
                        }, {
                            reg: /mouse.*(wheel|scroll)/i,
                            fix: function() {
                                return n
                            }
                        }, {
                            reg: /^text/i,
                            fix: function() {
                                return a
                            }
                        }, {
                            reg: /^touch|^gesture/i,
                            fix: function() {
                                return o
                            }
                        }, {
                            reg: /^message$/i,
                            fix: function() {
                                return s
                            }
                        }, {
                            reg: /^popstate$/i,
                            fix: function() {
                                return d
                            }
                        }, {
                            reg: /.*/,
                            fix: function() {
                                return e
                            }
                        }],
                        m = {},
                        g = function(e, t, n) {
                            if (arguments.length && (e = e || ((t.ownerDocument || t.document || t).parentWindow || r).event, this.originalEvent = e, this.isNative = n, this.isBean = !0, e)) {
                                var i, a, o, s, l, c = e.type,
                                    d = e.target || e.srcElement;
                                if (this.target = d && 3 === d.nodeType ? d.parentNode : d, n) {
                                    if (!(l = m[c]))
                                        for (i = 0, a = p.length; i < a; i++)
                                            if (p[i].reg.test(c)) {
                                                m[c] = l = p[i].fix;
                                                break
                                            }
                                    for (s = l(e, this, c), i = s.length; i--;) !((o = s[i]) in this) && o in e && (this[o] = e[o])
                                }
                            }
                        };
                    return g.prototype.preventDefault = function() {
                        this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue = !1
                    }, g.prototype.stopPropagation = function() {
                        this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble = !0
                    }, g.prototype.stop = function() {
                        this.preventDefault(), this.stopPropagation(), this.stopped = !0
                    }, g.prototype.stopImmediatePropagation = function() {
                        this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function() {
                            return !0
                        }
                    }, g.prototype.isImmediatePropagationStopped = function() {
                        return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
                    }, g.prototype.clone = function(e) {
                        var t = new g(this, this.element, this.isNative);
                        return t.currentTarget = e, t
                    }, g
                }(),
                _ = function(e, t) {
                    return d || t || e !== l && e !== r ? e : c
                },
                w = function() {
                    var e = function(e, t, n, r) {
                            var i = function(n, i) {
                                    return t.apply(e, r ? m.call(i, n ? 0 : 1).concat(r) : i)
                                },
                                a = function(n, r) {
                                    return t.__beanDel ? t.__beanDel.ft(n.target, e) : r
                                },
                                o = n ? function(e) {
                                    var t = a(e, this);
                                    if (n.apply(t, arguments)) return e && (e.currentTarget = t), i(e, arguments)
                                } : function(e) {
                                    return t.__beanDel && (e = e.clone(a(e))), i(e, arguments)
                                };
                            return o.__beanDel = t.__beanDel, o
                        },
                        t = function(t, n, r, i, a, o, s) {
                            var l, c = y[n];
                            "unload" == n && (r = I(P, t, n, r, i)), c && (c.condition && (r = e(t, r, c.condition, o)), n = c.base || n), this.isNative = l = h[n] && !!t[u], this.customType = !d && !l && n, this.element = t, this.type = n, this.original = i, this.namespaces = a, this.eventType = d || l ? n : "propertychange", this.target = _(t, l), this[u] = !!this.target[u], this.root = s, this.handler = e(t, r, null, o)
                        };
                    return t.prototype.inNamespaces = function(e) {
                        var t, n, r = 0;
                        if (!e) return !0;
                        if (!this.namespaces) return !1;
                        for (t = e.length; t--;)
                            for (n = this.namespaces.length; n--;) e[t] == this.namespaces[n] && r++;
                        return e.length === r
                    }, t.prototype.matches = function(e, t, n) {
                        return !(this.element !== e || t && this.original !== t || n && this.handler !== n)
                    }, t
                }(),
                k = function() {
                    var e = {},
                        t = function(n, r, i, a, o, s) {
                            var l = o ? "r" : "$";
                            if (r && "*" != r) {
                                var c, d = 0,
                                    u = e[l + r],
                                    p = "*" == n;
                                if (!u) return;
                                for (c = u.length; d < c; d++)
                                    if ((p || u[d].matches(n, i, a)) && !s(u[d], u, d, r)) return
                            } else
                                for (var m in e) m.charAt(0) == l && t(n, m.substr(1), i, a, o, s)
                        };
                    return {
                        has: function(t, n, r, i) {
                            var a, o = e[(i ? "r" : "$") + n];
                            if (o)
                                for (a = o.length; a--;)
                                    if (!o[a].root && o[a].matches(t, r, null)) return !0;
                            return !1
                        },
                        get: function(e, n, r, i) {
                            var a = [];
                            return t(e, n, r, null, i, function(e) {
                                return a.push(e)
                            }), a
                        },
                        put: function(t) {
                            var n = !t.root && !this.has(t.element, t.type, null, !1),
                                r = (t.root ? "r" : "$") + t.type;
                            return (e[r] || (e[r] = [])).push(t), n
                        },
                        del: function(n) {
                            t(n.element, n.type, null, n.handler, n.root, function(t, n, r) {
                                return n.splice(r, 1), t.removed = !0, 0 === n.length && delete e[(t.root ? "r" : "$") + t.type], !1
                            })
                        },
                        entries: function() {
                            var t, n = [];
                            for (t in e) "$" == t.charAt(0) && (n = n.concat(e[t]));
                            return n
                        }
                    }
                }(),
                C = function(e) {
                    n = arguments.length ? e : l.querySelectorAll ? function(e, t) {
                        return t.querySelectorAll(e)
                    } : function() {
                        throw new Error("Bean: No selector engine installed")
                    }
                },
                T = function(e, t) {
                    if (d || !t || !e || e.propertyName == "_on" + t) {
                        var n = k.get(this, t || e.type, null, !1),
                            r = n.length,
                            i = 0;
                        for (e = new b(e, this, !0), t && (e.type = t); i < r && !e.isImmediatePropagationStopped(); i++) n[i].removed || n[i].handler.call(this, e)
                    }
                },
                S = d ? function(e, t, n) {
                    e[n ? s : "removeEventListener"](t, T, !1)
                } : function(e, t, n, r) {
                    var i;
                    n ? (k.put(i = new w(e, r || t, function(t) {
                        T.call(e, t, r)
                    }, T, null, null, !0)), r && null == e["_on" + r] && (e["_on" + r] = 0), i.target.attachEvent("on" + i.eventType, i.handler)) : (i = k.get(e, r || t, T, !0)[0]) && (i.target.detachEvent("on" + i.eventType, i.handler), k.del(i))
                },
                I = function(e, t, n, r, i) {
                    return function() {
                        r.apply(this, arguments), e(t, n, i)
                    }
                },
                P = function(e, t, n, r) {
                    var i, a, s = t && t.replace(o, ""),
                        l = k.get(e, s, null, !1),
                        c = {};
                    for (i = 0, a = l.length; i < a; i++) n && l[i].original !== n || !l[i].inNamespaces(r) || (k.del(l[i]), !c[l[i].eventType] && l[i][u] && (c[l[i].eventType] = {
                        t: l[i].eventType,
                        c: l[i].type
                    }));
                    for (i in c) k.has(e, c[i].t, null, !1) || S(e, c[i].t, !1, c[i].c)
                },
                V = function(e, t) {
                    var r = function(t, r) {
                            for (var i, a = g(e) ? n(e, r) : e; t && t !== r; t = t.parentNode)
                                for (i = a.length; i--;)
                                    if (a[i] === t) return t
                        },
                        i = function(e) {
                            var n = r(e.target, this);
                            n && t.apply(n, arguments)
                        };
                    return i.__beanDel = {
                        ft: r,
                        selector: e
                    }, i
                },
                D = d ? function(e, t, n) {
                    var i = l.createEvent(e ? "HTMLEvents" : "UIEvents");
                    i[e ? "initEvent" : "initUIEvent"](t, !0, !0, r, 1), n.dispatchEvent(i)
                } : function(e, t, n) {
                    n = _(n, e), e ? n.fireEvent("on" + t, l.createEventObject()) : n["_on" + t]++
                },
                E = function(e, t, n) {
                    var r, i, s, l, c = g(t);
                    if (c && t.indexOf(" ") > 0) {
                        for (t = f(t), l = t.length; l--;) E(e, t[l], n);
                        return e
                    }
                    if (i = c && t.replace(o, ""), i && y[i] && (i = y[i].base), !t || c)(s = c && t.replace(a, "")) && (s = f(s, ".")), P(e, i, n, s);
                    else if (v(t)) P(e, null, t);
                    else
                        for (r in t) t.hasOwnProperty(r) && E(e, r, t[r]);
                    return e
                },
                A = function(e, t, n, r) {
                    var i, s, l, c, d, g, h; {
                        if (void 0 !== n || "object" != typeof t) {
                            for (v(n) ? (d = m.call(arguments, 3), r = i = n) : (i = r, d = m.call(arguments, 4), r = V(n, i)), l = f(t), this === p && (r = I(E, e, t, r, i)), c = l.length; c--;) h = k.put(g = new w(e, l[c].replace(o, ""), r, i, f(l[c].replace(a, ""), "."), d, !1)), g[u] && h && S(e, g.eventType, !0, g.customType);
                            return e
                        }
                        for (s in t) t.hasOwnProperty(s) && A.call(this, e, s, t[s])
                    }
                },
                O = function(e, t, n, r) {
                    return A.apply(null, g(n) ? [e, n, t, r].concat(arguments.length > 3 ? m.call(arguments, 5) : []) : m.call(arguments))
                },
                x = function() {
                    return A.apply(p, arguments)
                },
                L = function(e, t, n) {
                    var r, i, s, l, c, d = f(t);
                    for (r = d.length; r--;)
                        if (t = d[r].replace(o, ""), (l = d[r].replace(a, "")) && (l = f(l, ".")), l || n || !e[u])
                            for (c = k.get(e, t, null, !1), n = [!1].concat(n), i = 0, s = c.length; i < s; i++) c[i].inNamespaces(l) && c[i].handler.apply(e, n);
                        else D(h[t], t, e);
                    return e
                },
                N = function(e, t, n) {
                    for (var r, i, a = k.get(t, n, null, !1), o = a.length, s = 0; s < o; s++) a[s].original && (r = [e, a[s].type], (i = a[s].handler.__beanDel) && r.push(i.selector), r.push(a[s].original), A.apply(null, r));
                    return e
                },
                R = {
                    on: A,
                    add: O,
                    one: x,
                    off: E,
                    remove: E,
                    clone: N,
                    fire: L,
                    Event: b,
                    setSelectorEngine: C,
                    noConflict: function() {
                        return t[e] = i, this
                    }
                };
            if (r.attachEvent) {
                var M = function() {
                    var e, t = k.entries();
                    for (e in t) t[e].type && "unload" !== t[e].type && E(t[e].element, t[e].type);
                    r.detachEvent("onunload", M), r.CollectGarbage && r.CollectGarbage()
                };
                r.attachEvent("onunload", M)
            }
            return C(), R
        }),
        function() {
            var e = {},
                t = e._,
                n = {},
                r = Array.prototype,
                i = Object.prototype,
                a = Function.prototype,
                o = r.push,
                s = r.slice,
                l = r.concat,
                c = i.toString,
                d = i.hasOwnProperty,
                u = r.forEach,
                p = r.map,
                m = r.reduce,
                f = r.reduceRight,
                g = r.filter,
                v = r.every,
                h = r.some,
                y = r.indexOf,
                b = r.lastIndexOf,
                _ = Array.isArray,
                w = Object.keys,
                k = a.bind,
                C = function(e) {
                    return e instanceof C ? e : this instanceof C ? void(this._wrapped = e) : new C(e)
                };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : e._ = C, C.VERSION = "1.5.2";
            var T = C.each = C.forEach = function(e, t, r) {
                if (null != e)
                    if (u && e.forEach === u) e.forEach(t, r);
                    else if (e.length === +e.length) {
                    for (var i = 0, a = e.length; i < a; i++)
                        if (t.call(r, e[i], i, e) === n) return
                } else
                    for (var o = C.keys(e), i = 0, a = o.length; i < a; i++)
                        if (t.call(r, e[o[i]], o[i], e) === n) return
            };
            C.map = C.collect = function(e, t, n) {
                var r = [];
                return null == e ? r : p && e.map === p ? e.map(t, n) : (T(e, function(e, i, a) {
                    r.push(t.call(n, e, i, a))
                }), r)
            };
            var S = "Reduce of empty array with no initial value";
            C.reduce = C.foldl = C.inject = function(e, t, n, r) {
                var i = arguments.length > 2;
                if (null == e && (e = []), m && e.reduce === m) return r && (t = C.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
                if (T(e, function(e, a, o) {
                        i ? n = t.call(r, n, e, a, o) : (n = e, i = !0)
                    }), !i) throw new TypeError(S);
                return n
            }, C.reduceRight = C.foldr = function(e, t, n, r) {
                var i = arguments.length > 2;
                if (null == e && (e = []), f && e.reduceRight === f) return r && (t = C.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
                var a = e.length;
                if (a !== +a) {
                    var o = C.keys(e);
                    a = o.length
                }
                if (T(e, function(s, l, c) {
                        l = o ? o[--a] : --a, i ? n = t.call(r, n, e[l], l, c) : (n = e[l], i = !0)
                    }), !i) throw new TypeError(S);
                return n
            }, C.find = C.detect = function(e, t, n) {
                var r;
                return I(e, function(e, i, a) {
                    if (t.call(n, e, i, a)) return r = e, !0
                }), r
            }, C.filter = C.select = function(e, t, n) {
                var r = [];
                return null == e ? r : g && e.filter === g ? e.filter(t, n) : (T(e, function(e, i, a) {
                    t.call(n, e, i, a) && r.push(e)
                }), r)
            }, C.reject = function(e, t, n) {
                return C.filter(e, function(e, r, i) {
                    return !t.call(n, e, r, i)
                }, n)
            }, C.every = C.all = function(e, t, r) {
                t || (t = C.identity);
                var i = !0;
                return null == e ? i : v && e.every === v ? e.every(t, r) : (T(e, function(e, a, o) {
                    if (!(i = i && t.call(r, e, a, o))) return n
                }), !!i)
            };
            var I = C.some = C.any = function(e, t, r) {
                t || (t = C.identity);
                var i = !1;
                return null == e ? i : h && e.some === h ? e.some(t, r) : (T(e, function(e, a, o) {
                    if (i || (i = t.call(r, e, a, o))) return n
                }), !!i)
            };
            C.contains = C.include = function(e, t) {
                return null != e && (y && e.indexOf === y ? -1 != e.indexOf(t) : I(e, function(e) {
                    return e === t
                }))
            }, C.invoke = function(e, t) {
                var n = s.call(arguments, 2),
                    r = C.isFunction(t);
                return C.map(e, function(e) {
                    return (r ? t : e[t]).apply(e, n)
                })
            }, C.pluck = function(e, t) {
                return C.map(e, function(e) {
                    return e[t]
                })
            }, C.where = function(e, t, n) {
                return C.isEmpty(t) ? n ? void 0 : [] : C[n ? "find" : "filter"](e, function(e) {
                    for (var n in t)
                        if (t[n] !== e[n]) return !1;
                    return !0
                })
            }, C.findWhere = function(e, t) {
                return C.where(e, t, !0)
            }, C.max = function(e, t, n) {
                if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                if (!t && C.isEmpty(e)) return -1 / 0;
                var r = {
                    computed: -1 / 0,
                    value: -1 / 0
                };
                return T(e, function(e, i, a) {
                    var o = t ? t.call(n, e, i, a) : e;
                    o > r.computed && (r = {
                        value: e,
                        computed: o
                    })
                }), r.value
            }, C.min = function(e, t, n) {
                if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
                if (!t && C.isEmpty(e)) return 1 / 0;
                var r = {
                    computed: 1 / 0,
                    value: 1 / 0
                };
                return T(e, function(e, i, a) {
                    var o = t ? t.call(n, e, i, a) : e;
                    o < r.computed && (r = {
                        value: e,
                        computed: o
                    })
                }), r.value
            }, C.shuffle = function(e) {
                var t, n = 0,
                    r = [];
                return T(e, function(e) {
                    t = C.random(n++), r[n - 1] = r[t], r[t] = e
                }), r
            }, C.sample = function(e, t, n) {
                return arguments.length < 2 || n ? e[C.random(e.length - 1)] : C.shuffle(e).slice(0, Math.max(0, t))
            };
            var P = function(e) {
                return C.isFunction(e) ? e : function(t) {
                    return t[e]
                }
            };
            C.sortBy = function(e, t, n) {
                var r = P(t);
                return C.pluck(C.map(e, function(e, t, i) {
                    return {
                        value: e,
                        index: t,
                        criteria: r.call(n, e, t, i)
                    }
                }).sort(function(e, t) {
                    var n = e.criteria,
                        r = t.criteria;
                    if (n !== r) {
                        if (n > r || void 0 === n) return 1;
                        if (n < r || void 0 === r) return -1
                    }
                    return e.index - t.index
                }), "value")
            };
            var V = function(e) {
                return function(t, n, r) {
                    var i = {},
                        a = null == n ? C.identity : P(n);
                    return T(t, function(n, o) {
                        var s = a.call(r, n, o, t);
                        e(i, s, n)
                    }), i
                }
            };
            C.groupBy = V(function(e, t, n) {
                (C.has(e, t) ? e[t] : e[t] = []).push(n)
            }), C.indexBy = V(function(e, t, n) {
                e[t] = n
            }), C.countBy = V(function(e, t) {
                C.has(e, t) ? e[t]++ : e[t] = 1
            }), C.sortedIndex = function(e, t, n, r) {
                n = null == n ? C.identity : P(n);
                for (var i = n.call(r, t), a = 0, o = e.length; a < o;) {
                    var s = a + o >>> 1;
                    n.call(r, e[s]) < i ? a = s + 1 : o = s
                }
                return a
            }, C.toArray = function(e) {
                return e ? C.isArray(e) ? s.call(e) : e.length === +e.length ? C.map(e, C.identity) : C.values(e) : []
            }, C.size = function(e) {
                return null == e ? 0 : e.length === +e.length ? e.length : C.keys(e).length
            }, C.first = C.head = C.take = function(e, t, n) {
                if (null != e) return null == t || n ? e[0] : s.call(e, 0, t)
            }, C.initial = function(e, t, n) {
                return s.call(e, 0, e.length - (null == t || n ? 1 : t))
            }, C.last = function(e, t, n) {
                if (null != e) return null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
            }, C.rest = C.tail = C.drop = function(e, t, n) {
                return s.call(e, null == t || n ? 1 : t)
            }, C.compact = function(e) {
                return C.filter(e, C.identity)
            };
            var D = function(e, t, n) {
                return t && C.every(e, C.isArray) ? l.apply(n, e) : (T(e, function(e) {
                    C.isArray(e) || C.isArguments(e) ? t ? o.apply(n, e) : D(e, t, n) : n.push(e)
                }), n)
            };
            C.flatten = function(e, t) {
                return D(e, t, [])
            }, C.without = function(e) {
                return C.difference(e, s.call(arguments, 1))
            }, C.uniq = C.unique = function(e, t, n, r) {
                C.isFunction(t) && (r = n, n = t, t = !1);
                var i = n ? C.map(e, n, r) : e,
                    a = [],
                    o = [];
                return T(i, function(n, r) {
                    (t ? r && o[o.length - 1] === n : C.contains(o, n)) || (o.push(n), a.push(e[r]))
                }), a
            }, C.union = function() {
                return C.uniq(C.flatten(arguments, !0))
            }, C.intersection = function(e) {
                var t = s.call(arguments, 1);
                return C.filter(C.uniq(e), function(e) {
                    return C.every(t, function(t) {
                        return C.indexOf(t, e) >= 0
                    })
                })
            }, C.difference = function(e) {
                var t = l.apply(r, s.call(arguments, 1));
                return C.filter(e, function(e) {
                    return !C.contains(t, e)
                })
            }, C.zip = function() {
                for (var e = C.max(C.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; n < e; n++) t[n] = C.pluck(arguments, "" + n);
                return t
            }, C.object = function(e, t) {
                if (null == e) return {};
                for (var n = {}, r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n
            }, C.indexOf = function(e, t, n) {
                if (null == e) return -1;
                var r = 0,
                    i = e.length;
                if (n) {
                    if ("number" != typeof n) return r = C.sortedIndex(e, t), e[r] === t ? r : -1;
                    r = n < 0 ? Math.max(0, i + n) : n
                }
                if (y && e.indexOf === y) return e.indexOf(t, n);
                for (; r < i; r++)
                    if (e[r] === t) return r;
                return -1
            }, C.lastIndexOf = function(e, t, n) {
                if (null == e) return -1;
                var r = null != n;
                if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                for (var i = r ? n : e.length; i--;)
                    if (e[i] === t) return i;
                return -1
            }, C.range = function(e, t, n) {
                arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
                for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, a = new Array(r); i < r;) a[i++] = e, e += n;
                return a
            };
            var E = function() {};
            C.bind = function(e, t) {
                var n, r;
                if (k && e.bind === k) return k.apply(e, s.call(arguments, 1));
                if (!C.isFunction(e)) throw new TypeError;
                return n = s.call(arguments, 2), r = function() {
                    if (!(this instanceof r)) return e.apply(t, n.concat(s.call(arguments)));
                    E.prototype = e.prototype;
                    var i = new E;
                    E.prototype = null;
                    var a = e.apply(i, n.concat(s.call(arguments)));
                    return Object(a) === a ? a : i
                }
            }, C.partial = function(e) {
                var t = s.call(arguments, 1);
                return function() {
                    return e.apply(this, t.concat(s.call(arguments)))
                }
            }, C.bindAll = function(e) {
                var t = s.call(arguments, 1);
                if (0 === t.length) throw new Error("bindAll must be passed function names");
                return T(t, function(t) {
                    e[t] = C.bind(e[t], e)
                }), e
            }, C.memoize = function(e, t) {
                var n = {};
                return t || (t = C.identity),
                    function() {
                        var r = t.apply(this, arguments);
                        return C.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                    }
            }, C.delay = function(e, t) {
                var n = s.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, C.defer = function(e) {
                return C.delay.apply(C, [e, 1].concat(s.call(arguments, 1)))
            }, C.throttle = function(e, t, n) {
                var r, i, a, o = null,
                    s = 0;
                n || (n = {});
                var l = function() {
                    s = !1 === n.leading ? 0 : new Date, o = null, a = e.apply(r, i)
                };
                return function() {
                    var c = new Date;
                    s || !1 !== n.leading || (s = c);
                    var d = t - (c - s);
                    return r = this, i = arguments, d <= 0 ? (clearTimeout(o), o = null, s = c, a = e.apply(r, i)) : o || !1 === n.trailing || (o = setTimeout(l, d)), a
                }
            }, C.debounce = function(e, t, n) {
                var r, i, a, o, s;
                return function() {
                    a = this, i = arguments, o = new Date;
                    var l = function() {
                            var c = new Date - o;
                            c < t ? r = setTimeout(l, t - c) : (r = null, n || (s = e.apply(a, i)))
                        },
                        c = n && !r;
                    return r || (r = setTimeout(l, t)), c && (s = e.apply(a, i)), s
                }
            }, C.once = function(e) {
                var t, n = !1;
                return function() {
                    return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
                }
            }, C.wrap = function(e, t) {
                return function() {
                    var n = [e];
                    return o.apply(n, arguments), t.apply(this, n)
                }
            }, C.compose = function() {
                var e = arguments;
                return function() {
                    for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }, C.after = function(e, t) {
                return function() {
                    if (--e < 1) return t.apply(this, arguments)
                }
            }, C.keys = w || function(e) {
                if (e !== Object(e)) throw new TypeError("Invalid object");
                var t = [];
                for (var n in e) C.has(e, n) && t.push(n);
                return t
            }, C.values = function(e) {
                for (var t = C.keys(e), n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
                return r
            }, C.pairs = function(e) {
                for (var t = C.keys(e), n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                return r
            }, C.invert = function(e) {
                for (var t = {}, n = C.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                return t
            }, C.functions = C.methods = function(e) {
                var t = [];
                for (var n in e) C.isFunction(e[n]) && t.push(n);
                return t.sort()
            }, C.extend = function(e) {
                return T(s.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) e[n] = t[n]
                }), e
            }, C.pick = function(e) {
                var t = {},
                    n = l.apply(r, s.call(arguments, 1));
                return T(n, function(n) {
                    n in e && (t[n] = e[n])
                }), t
            }, C.omit = function(e) {
                var t = {},
                    n = l.apply(r, s.call(arguments, 1));
                for (var i in e) C.contains(n, i) || (t[i] = e[i]);
                return t
            }, C.defaults = function(e) {
                return T(s.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) void 0 === e[n] && (e[n] = t[n])
                }), e
            }, C.clone = function(e) {
                return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e
            }, C.tap = function(e, t) {
                return t(e), e
            };
            var A = function(e, t, n, r) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return e === t;
                e instanceof C && (e = e._wrapped), t instanceof C && (t = t._wrapped);
                var i = c.call(e);
                if (i != c.call(t)) return !1;
                switch (i) {
                    case "[object String]":
                        return e == String(t);
                    case "[object Number]":
                        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                    case "[object RegExp]":
                        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                }
                if ("object" != typeof e || "object" != typeof t) return !1;
                for (var a = n.length; a--;)
                    if (n[a] == e) return r[a] == t;
                var o = e.constructor,
                    s = t.constructor;
                if (o !== s && !(C.isFunction(o) && o instanceof o && C.isFunction(s) && s instanceof s)) return !1;
                n.push(e), r.push(t);
                var l = 0,
                    d = !0;
                if ("[object Array]" == i) {
                    if (l = e.length, d = l == t.length)
                        for (; l-- && (d = A(e[l], t[l], n, r)););
                } else {
                    for (var u in e)
                        if (C.has(e, u) && (l++, !(d = C.has(t, u) && A(e[u], t[u], n, r)))) break;
                    if (d) {
                        for (u in t)
                            if (C.has(t, u) && !l--) break;
                        d = !l
                    }
                }
                return n.pop(), r.pop(), d
            };
            C.isEqual = function(e, t) {
                return A(e, t, [], [])
            }, C.isEmpty = function(e) {
                if (null == e) return !0;
                if (C.isArray(e) || C.isString(e)) return 0 === e.length;
                for (var t in e)
                    if (C.has(e, t)) return !1;
                return !0
            }, C.isElement = function(e) {
                return !(!e || 1 !== e.nodeType)
            }, C.isArray = _ || function(e) {
                return "[object Array]" == c.call(e)
            }, C.isObject = function(e) {
                return e === Object(e)
            }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
                C["is" + e] = function(t) {
                    return c.call(t) == "[object " + e + "]"
                }
            }), C.isArguments(arguments) || (C.isArguments = function(e) {
                return !(!e || !C.has(e, "callee"))
            }), "function" != typeof /./ && (C.isFunction = function(e) {
                return "function" == typeof e
            }), C.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }, C.isNaN = function(e) {
                return C.isNumber(e) && e != +e
            }, C.isBoolean = function(e) {
                return !0 === e || !1 === e || "[object Boolean]" == c.call(e)
            }, C.isNull = function(e) {
                return null === e
            }, C.isUndefined = function(e) {
                return void 0 === e
            }, C.has = function(e, t) {
                return d.call(e, t)
            }, C.noConflict = function() {
                return e._ = t, this
            }, C.identity = function(e) {
                return e
            }, C.times = function(e, t, n) {
                for (var r = Array(Math.max(0, e)), i = 0; i < e; i++) r[i] = t.call(n, i);
                return r
            }, C.random = function(e, t) {
                return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
            }, C.isNumber = function(e) {
                return "[object Number]" == c.call(e)
            };
            var O = {
                escape: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                }
            };
            O.unescape = C.invert(O.escape);
            var x = {
                escape: new RegExp("[" + C.keys(O.escape).join("") + "]", "g"),
                unescape: new RegExp("(" + C.keys(O.unescape).join("|") + ")", "g")
            };
            C.each(["escape", "unescape"], function(e) {
                C[e] = function(t) {
                    return null == t ? "" : ("" + t).replace(x[e], function(t) {
                        return O[e][t]
                    })
                }
            }), C.result = function(e, t) {
                if (null != e) {
                    var n = e[t];
                    return C.isFunction(n) ? n.call(e) : n
                }
            }, C.mixin = function(e) {
                T(C.functions(e), function(t) {
                    var n = C[t] = e[t];
                    C.prototype[t] = function() {
                        var e = [this._wrapped];
                        return o.apply(e, arguments), F.call(this, n.apply(C, e))
                    }
                })
            };
            var L = 0;
            C.uniqueId = function(e) {
                var t = ++L + "";
                return e ? e + t : t
            }, C.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var N = /(.)^/,
                R = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\t": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                M = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            C.template = function(e, t, n) {
                var r;
                n = C.defaults({}, n, C.templateSettings);
                var i = new RegExp([(n.escape || N).source, (n.interpolate || N).source, (n.evaluate || N).source].join("|") + "|$", "g"),
                    a = 0,
                    o = "__p+='";
                e.replace(i, function(t, n, r, i, s) {
                    return o += e.slice(a, s).replace(M, function(e) {
                        return "\\" + R[e]
                    }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), a = s + t.length, t
                }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    r = new Function(n.variable || "obj", "_", o)
                } catch (e) {
                    throw e.source = o, e
                }
                if (t) return r(t, C);
                var s = function(e) {
                    return r.call(this, e, C)
                };
                return s.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", s
            }, C.chain = function(e) {
                return C(e).chain()
            };
            var F = function(e) {
                return this._chain ? C(e).chain() : e
            };
            C.mixin(C), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                var t = r[e];
                C.prototype[e] = function() {
                    var n = this._wrapped;
                    return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], F.call(this, n)
                }
            }), T(["concat", "join", "slice"], function(e) {
                var t = r[e];
                C.prototype[e] = function() {
                    return F.call(this, t.apply(this._wrapped, arguments))
                }
            }), C.extend(C.prototype, {
                chain: function() {
                    return this._chain = !0, this
                },
                value: function() {
                    return this._wrapped
                }
            }), "function" == typeof define && define.amd && define("underscore", [], function() {
                return C
            })
        }.call(this), define("models/variable/utility", ["underscore"], function(e) {
            return {
                getValue: function(t, n, r) {
                    var i, a = ["eventEvent", "appEvent", "videoEvent", "gameEvent", "printEvent", "linkEvent", "pageEvent", "unloadEvent"];
                    if (e.each(a, function(e) {
                            i || t[e] && (t[e][n] || 0 === t[e][n]) && (i = t[e][n])
                        }), i || 0 === i) return i;
                    var o = new r,
                        s = o[n];
                    return void 0 !== s ? s : ""
                }
            }
        }),
        function(e) {
            if ("object" == typeof exports) module.exports = e();
            else if ("function" == typeof define && define.amd) define("tld", e);
            else {
                var t;
                "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.tldjs = e()
            }
        }(function() {
            return function e(t, n, r) {
                function i(o, s) {
                    if (!n[o]) {
                        if (!t[o]) {
                            var l = "function" == typeof require && require;
                            if (!s && l) return l(o, !0);
                            if (a) return a(o, !0);
                            throw new Error("Cannot find module '" + o + "'")
                        }
                        var c = n[o] = {
                            exports: {}
                        };
                        t[o][0].call(c.exports, function(e) {
                            var n = t[o][1][e];
                            return i(n || e)
                        }, c, c.exports, e, t, n, r)
                    }
                    return n[o].exports
                }
                for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
                return i
            }({
                1: [function(e, t, n) {
                    "use strict";
                    var r = e("./lib/tld.js").init();
                    r.rules = e("./rules.json"), t.exports = r
                }, {
                    "./lib/tld.js": 3,
                    "./rules.json": 4
                }],
                2: [function(e, t, n) {
                    "use strict";

                    function r(e) {
                        e = e || {}, this.exception = e.exception || !1, this.firstLevel = e.firstLevel || "", this.secondLevel = e.secondLevel || null, this.source = e.source || "", this.wildcard = e.wildcard || !1
                    }
                    r.prototype.getNormalXld = function() {
                        return (this.secondLevel ? "." + this.secondLevel : "") + "." + this.firstLevel
                    }, r.prototype.getNormalPattern = function() {
                        return (this.secondLevel ? "\\." + this.secondLevel : "") + "\\." + this.firstLevel
                    }, r.prototype.getWildcardPattern = function() {
                        return "\\.[^\\.]+" + this.getNormalXld().replace(/\./g, "\\.")
                    }, r.prototype.getExceptionPattern = function() {
                        return (this.secondLevel || "") + "\\." + this.firstLevel
                    }, r.prototype.getPattern = function(e, t) {
                        var n = "";
                        return e = void 0 === e ? "(" : e + "", t = void 0 === t ? ")$" : e + "", n = !0 === this.exception ? this.getExceptionPattern() : "[^\\.]+" + (this.wildcard ? this.getWildcardPattern() : this.getNormalPattern()), e + n + t
                    }, t.exports = r
                }, {}],
                3: [function(e, t, n) {
                    "use strict";

                    function r() {
                        this.rules = []
                    }

                    function i(e) {
                        return String(e).replace(/(^\s+|\s+$)/g, "")
                    }

                    function a(e, t) {
                        if (void 0 === e || null === e) throw new TypeError;
                        var n = Object(e),
                            r = n.length >>> 0;
                        if ("function" != typeof t) throw new TypeError;
                        for (var i = arguments.length >= 3 ? arguments[2] : void 0, a = 0; a < r; a++)
                            if (a in n && t.call(i, n[a], a, n)) return !0;
                        return !1
                    }

                    function o(e, t) {
                        if (void 0 === e || null === e) throw new TypeError;
                        var n = Object(e),
                            r = n.length >>> 0;
                        if ("function" != typeof t) throw new TypeError;
                        for (var i = new Array(r), a = arguments.length >= 3 ? arguments[2] : void 0, o = 0; o < r; o++) o in n && (i[o] = t.call(a, n[o], o, n));
                        return i
                    }
                    var s = e("./rule.js"),
                        l = /^(https?:\/\/)?(.+@)?(.+?)(:\d{2,5})?(\/.*)?$/;
                    r.init = function() {
                        return new r
                    }, r.getCandidateRule = function(e, t) {
                        var n = {
                            normal: null,
                            exception: null
                        };
                        return a(t, function(t) {
                            var r;
                            return "." + e === t.getNormalXld() ? (!0 === t.exception && (n.normal = t), !0) : (r = ".+" + t.getNormalPattern() + "$", !!new RegExp(r).test(e) && (n[t.exception ? "exception" : "normal"] = t, !t.exception))
                        }), n.normal && n.exception ? n.exception : n.normal
                    }, r.prototype.getRulesForTld = function(e, t) {
                        var n = !0,
                            r = this.rules[e];
                        return "[object Array]" === Object.prototype.toString.call(r) ? r : r ? (r = o(r.split("|"), function(t) {
                            var r = t[0];
                            return "!" !== r && "*" !== r || (t = t.slice(1)) || (n = !1), new s({
                                firstLevel: e,
                                secondLevel: t,
                                exception: "!" === r,
                                wildcard: "*" === r
                            })
                        }), n && r.unshift(new s({
                            firstLevel: e
                        })), this.rules[e] = r.reverse(), r) : t ? [t] : []
                    }, r.prototype.tldExists = function(e) {
                        var t;
                        return e = r.cleanHostValue(e), !!this.rules[e] || (t = r.extractTldFromHost(e), void 0 !== this.rules[t])
                    }, r.prototype.getDomain = function(e) {
                        var t, n, i, a = null;
                        return !1 === this.isValid(e) ? null : (e = r.cleanHostValue(e), t = r.extractTldFromHost(e), n = this.getRulesForTld(t, new s({
                            firstLevel: t
                        })), null === (i = r.getCandidateRule(e, n)) ? null : (e.replace(new RegExp(i.getPattern()), function(e, t) {
                            a = t
                        }), a))
                    }, r.prototype.getSubdomain = function(e) {
                        var t, n, i = null;
                        return e = r.cleanHostValue(e), null === (t = this.getDomain(e)) ? i : (n = "\\.?" + r.escapeRegExp(t) + "$", i = e.replace(new RegExp(n, "i"), ""))
                    }, r.prototype.isValid = function(e) {
                        return !("string" != typeof e || -1 === e.indexOf(".") || "." === e[0])
                    }, r.cleanHostValue = function(e) {
                        return e = i(e).toLowerCase(), l.exec(e)[3] || e || ""
                    }, r.extractTldFromHost = function(e) {
                        return e.split(".").pop()
                    }, r.escapeRegExp = function(e) {
                        return String(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
                    }, t.exports = r
                }, {
                    "./rule.js": 2
                }],
                4: [function(e, t, n) {
                    t.exports = {
                        au: "com",
                        br: "com",
                        my: "com",
                        tr: "com",
                        il: "co",
                        nz: "co",
                        th: "co",
                        uk: "co",
                        za: "co"
                    }
                }, {}]
            }, {}, [1])(1)
        }), define("models/variable/common/category", ["models/variable/utility", "tld"], function(e, t) {
            return {
                id: "category",
                libs: {
                    utility: e,
                    tld: t
                },
                getValue: function(t, n) {
                    return e.getValue(t, this.id, n) || e.getValue(t, "categoryCode", n) || ""
                }
            }
        }), define("models/variable/common/categoryCode", ["models/variable/utility", "tld"], function(e, t) {
            return {
                id: "categoryCode",
                libs: {
                    utility: e,
                    tld: t
                },
                getValue: function(t, n) {
                    return e.getValue(t, this.id, n) || e.getValue(t, "category", n) || ""
                }
            }
        }), define("models/variable/common/pageName", ["models/variable/utility"], function(e) {
            return {
                id: "pageName",
                getParams: function() {
                    return {
                        utility: e
                    }
                },
                getValue: function(t, n) {
                    return e.getValue(t, this.id, n) || ""
                }
            }
        }), define("url", [], function() {
            function e(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }
            return function(t, n) {
                var r = n || window.location.toString();
                if (!t) return r;
                t = t.toString(), "//" === r.substring(0, 2) ? r = "http:" + r : 1 === r.split("://").length && (r = "http://" + r), n = r.split("/");
                var i = {
                        auth: ""
                    },
                    a = n[2].split("@");
                1 === a.length ? a = a[0].split(":") : (i.auth = a[0], a = a[1].split(":")), i.protocol = n[0], i.hostname = a[0], i.port = a[1] || "80", i.pathname = (n.length > 3 ? "/" : "") + n.slice(3, n.length).join("/").split("?")[0].split("#")[0];
                var o = i.pathname;
                "/" === o.charAt(o.length - 1) && (o = o.substring(0, o.length - 1));
                var s = i.hostname,
                    l = s.split("."),
                    c = o.split("/");
                if ("hostname" === t) return s;
                if ("domain" === t) return l.slice(-2).join(".");
                if ("sub" === t) return l.slice(0, l.length - 2).join(".");
                if ("port" === t) return i.port || "80";
                if ("protocol" === t) return i.protocol.split(":")[0];
                if ("auth" === t) return i.auth;
                if ("user" === t) return i.auth.split(":")[0];
                if ("pass" === t) return i.auth.split(":")[1] || "";
                if ("path" === t) return i.pathname;
                if ("." === t.charAt(0)) {
                    if (t = t.substring(1), e(t)) return t = parseInt(t, 10), l[t < 0 ? l.length + t : t - 1] || ""
                } else {
                    if (e(t)) return t = parseInt(t, 10), c[t < 0 ? c.length + t : t] || "";
                    if ("file" === t) return c.slice(-1)[0];
                    if ("filename" === t) return c.slice(-1)[0].split(".")[0];
                    if ("fileext" === t) return c.slice(-1)[0].split(".")[1] || "";
                    if ("?" === t.charAt(0) || "#" === t.charAt(0)) {
                        var d = r,
                            u = null;
                        if ("?" === t.charAt(0) ? d = (d.split("?")[1] || "").split("#")[0] : "#" === t.charAt(0) && (d = d.split("#")[1] || ""), !t.charAt(1)) return d;
                        t = t.substring(1), d = d.split("&");
                        for (var p = 0, m = d.length; p < m; p++)
                            if (u = d[p].split("="), u[0] === t) return u[1];
                        return null
                    }
                }
                return ""
            }
        }), define("models/variable/common/site", ["underscore", "models/variable/utility", "url", "tld"], function(e, t, n, r) {
            return {
                id: "site",
                libs: {
                    _: e,
                    utility: t,
                    url: n,
                    tld: r
                },
                getValue: function(e, n) {
                    return t.getValue(e, this.id, n) || t.getValue(e, "siteCode", n) || ""
                }
            }
        }), define("models/variable/common/siteCode", ["underscore", "models/variable/utility", "url", "tld"], function(e, t, n, r) {
            return {
                id: "siteCode",
                libs: {
                    _: e,
                    utility: t,
                    url: n,
                    tld: r
                },
                getValue: function(e, n) {
                    return t.getValue(e, this.id, n) || t.getValue(e, "site", n) || ""
                }
            }
        }), define("models/variable/common/siteSection", ["underscore", "models/variable/utility", "url", "tld"], function(e, t, n, r) {
            return {
                id: "siteSection",
                libs: {
                    _: e,
                    utility: t,
                    tld: r,
                    url: n
                },
                getValue: function(e, n) {
                    return t.getValue(e, this.id, n) || t.getValue(e, "breadcrumbs", n)
                }
            }
        }), define("models/variable/common/breadcrumbs", ["underscore", "models/variable/utility", "url", "tld"], function(e, t, n, r) {
            return {
                id: "breadcrumbs",
                libs: {
                    _: e,
                    utility: t,
                    tld: r,
                    url: n
                },
                getValue: function(e, n) {
                    return t.getValue(e, this.id, n) || t.getValue(e, "siteSection", n) || ""
                }
            }
        }), define("models/variable/app/appLoad", ["models/variable/utility"], function(e) {
            return {
                id: "appLoad",
                getValue: function(t) {
                    return "load" === e.getValue(t, "appEvent", CTO) ? "true" : ""
                }
            }
        }), define("models/variable/app/appSaveC", ["models/variable/utility"], function(e) {
            return {
                id: "appSaveC",
                getValue: function(t) {
                    return "save_completed" === e.getValue(t, "appEvent", CTO) ? "true" : ""
                }
            }
        }), define("models/variable/app/appShare", ["models/variable/utility"], function(e) {
            return {
                id: "appShare",
                getValue: function(t) {
                    return "share" === e.getValue(t, "appEvent", CTO) ? "true" : ""
                }
            }
        }), define("models/variable/common/fullPageName", ["models/variable/utility", "models/variable/common/siteSection", "models/variable/common/breadcrumbs", "models/variable/common/site", "models/variable/common/siteCode", "models/variable/common/pageName", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i, a, o, s) {
            "use strict";
            return {
                id: "fullPageName",
                getValue: function(l, c) {
                    var d = e.getValue(l, this.id, c);
                    if (d) return d;
                    var u = !1,
                        p = a.getValue(l, c),
                        m = s.getValue(l, c) || o.getValue(l, c),
                        f = e.getValue(l, "account", c);
                    "dcom" != m && "ddit" != m && "ddif" != m && "latam" != m && "luc" != m && -1 == f.indexOf("spoonful") && -1 == f.indexOf("babble") && -1 == f.indexOf("disneyfamilydeals") || (u = !0);
                    var g = [];
                    if ("errorpage" == p || "errorpage" == e.getValue(l, "pageTypeCode", c)) g.push(document.URL);
                    else {
                        m && g.push(m);
                        var v = i.getValue(l, c) || r.getValue(l, c);
                        v && g.push(v);
                        var h = n.getValue(l, c) || t.getValue(l, c);
                        h && g.push(h), p && g.push(p)
                    }
                    var y;
                    y = u ? g.join("|") : g.join(":");
                    var b = e.getValue(l, "pageNumber", c);
                    return b && (y = y + "_" + b), y
                }
            }
        }),
        function(e, t) {
            var n = function() {
                    return n.get.apply(n, arguments)
                },
                r = n.utils = {
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isPlainObject: function(e) {
                        return !!e && "[object Object]" === Object.prototype.toString.call(e)
                    },
                    toArray: function(e) {
                        return Array.prototype.slice.call(e)
                    },
                    getKeys: Object.keys || function(e) {
                        var t = [],
                            n = "";
                        for (n in e) e.hasOwnProperty(n) && t.push(n);
                        return t
                    },
                    escape: function(e) {
                        return String(e).replace(/[,;"\\=\s%]/g, function(e) {
                            return encodeURIComponent(e)
                        })
                    },
                    retrieve: function(e, t) {
                        return null == e ? t : e
                    }
                };
            n.defaults = {}, n.expiresMultiplier = 86400, n.safeSet = function(e, t, r) {
                try {
                    n.set(e, t, r)
                } catch (e) {}
            }, n.set = function(t, n, i) {
                if (r.isPlainObject(t))
                    for (var a in t) t.hasOwnProperty(a) && this.set(a, t[a], n);
                else {
                    i = r.isPlainObject(i) ? i : {
                        expires: i
                    };
                    var o = void 0 !== i.expires ? i.expires : this.defaults.expires || "",
                        s = typeof o;
                    "string" === s && "" !== o ? o = new Date(o) : "number" === s && (o = new Date(+new Date + 1e3 * this.expiresMultiplier * o)), "" !== o && "toGMTString" in o && (o = ";expires=" + o.toGMTString());
                    var l = i.path || this.defaults.path;
                    l = l ? ";path=" + l : "";
                    var c = i.domain || this.defaults.domain;
                    c = c ? ";domain=" + c : "";
                    var d = i.secure || this.defaults.secure ? ";secure" : "";
                    e.cookie = r.escape(t) + "=" + r.escape(n) + o + l + c + d
                }
                return this
            }, n.remove = function(e) {
                e = r.isArray(e) ? e : r.toArray(arguments);
                for (var t = 0, n = e.length; t < n; t++) this.set(e[t], "", -1);
                return this
            }, n.empty = function() {
                return this.remove(r.getKeys(this.all()))
            }, n.get = function(e, t) {
                t = t || void 0;
                var n = this.all();
                if (r.isArray(e)) {
                    for (var i = {}, a = 0, o = e.length; a < o; a++) {
                        var s = e[a];
                        i[s] = r.retrieve(n[s], t)
                    }
                    return i
                }
                return r.retrieve(n[e], t)
            }, n.all = function() {
                if ("" === e.cookie) return {};
                for (var t = e.cookie.split("; "), n = {}, r = 0, i = t.length; r < i; r++) {
                    var a = t[r].split("=");
                    n[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                }
                return n
            }, n.enabled = function() {
                if (navigator.cookieEnabled) return !0;
                var e = "_" === n.set("_", "_").get("_");
                return n.remove("_"), e
            }, "function" == typeof define && define.amd ? define("cookie", [], function() {
                return n
            }) : "undefined" != typeof exports ? exports.cookie = n : window.cookie = n
        }(document),
        function(e, t, n) {
            "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("reqwest", n) : t.reqwest = n()
        }(0, this, function() {
            function handleReadyState(e, t, n) {
                return function() {
                    if (e._aborted) return n(e.request);
                    e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, twoHundo.test(e.request.status) ? t(e.request) : n(e.request))
                }
            }

            function setHeaders(e, t) {
                var n, r = t.headers || {};
                r.Accept = r.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"], t.crossOrigin || r[requestedWith] || (r[requestedWith] = defaultHeaders.requestedWith), r[contentType] || (r[contentType] = t.contentType || defaultHeaders.contentType);
                for (n in r) r.hasOwnProperty(n) && "setRequestHeader" in e && e.setRequestHeader(n, r[n])
            }

            function setCredentials(e, t) {
                void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !!t.withCredentials)
            }

            function generalCallback(e) {
                lastValue = e
            }

            function urlappend(e, t) {
                return e + (/\?/.test(e) ? "&" : "?") + t
            }

            function handleJsonp(e, t, n, r) {
                var i = uniqid++,
                    a = e.jsonpCallback || "callback",
                    o = e.jsonpCallbackName || reqwest.getcallbackPrefix(i),
                    s = new RegExp("((^|\\?|&)" + a + ")=([^&]+)"),
                    l = r.match(s),
                    c = doc.createElement("script"),
                    d = 0,
                    u = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
                return l ? "?" === l[3] ? r = r.replace(s, "$1=" + o) : o = l[3] : r = urlappend(r, a + "=" + o), win[o] = generalCallback, c.type = "text/javascript", c.src = r, c.async = !0, void 0 === c.onreadystatechange || u || (c.event = "onclick", c.htmlFor = c.id = "_reqwest_" + i), c.onload = c.onreadystatechange = function() {
                    if (c[readyState] && "complete" !== c[readyState] && "loaded" !== c[readyState] || d) return !1;
                    c.onload = c.onreadystatechange = null, c.onclick && c.onclick(), t(lastValue), lastValue = void 0, head.removeChild(c), d = 1
                }, head.appendChild(c), {
                    abort: function() {
                        c.onload = c.onreadystatechange = null, n({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(c), d = 1
                    }
                }
            }

            function getRequest(e, t) {
                var n, r = this.o,
                    i = (r.method || "GET").toUpperCase(),
                    a = "string" == typeof r ? r : r.url,
                    o = !1 !== r.processData && r.data && "string" != typeof r.data ? reqwest.toQueryString(r.data) : r.data || null,
                    s = !1;
                return "jsonp" != r.type && "GET" != i || !o || (a = urlappend(a, o), o = null), "jsonp" == r.type ? handleJsonp(r, e, t, a) : (n = xhr(r), n.open(i, a, !1 !== r.async), setHeaders(n, r), setCredentials(n, r), win[xDomainRequest] && n instanceof win[xDomainRequest] ? (n.onload = e, n.onerror = t, n.onprogress = function() {}, s = !0) : n.onreadystatechange = handleReadyState(this, e, t), r.before && r.before(n), s ? setTimeout(function() {
                    n.send(o)
                }, 200) : n.send(o), n)
            }

            function Reqwest(e, t) {
                this.o = e, this.fn = t, init.apply(this, arguments)
            }

            function setType(e) {
                var t = e.match(/\.(json|jsonp|html|xml)(\?|$)/);
                return t ? t[1] : "js"
            }

            function init(o, fn) {
                function complete(e) {
                    for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
                }

                function success(resp) {
                    resp = "jsonp" !== type ? self.request : resp;
                    var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                        r = filteredResponse;
                    try {
                        resp.responseText = r
                    } catch (e) {}
                    if (r) switch (type) {
                        case "json":
                            try {
                                resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")")
                            } catch (e) {
                                return error(resp, "Could not parse JSON in response", e)
                            }
                            break;
                        case "js":
                            resp = eval(r);
                            break;
                        case "html":
                            resp = r;
                            break;
                        case "xml":
                            resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML;
                            break;
                        case "png":
                            for (var png = btoa(unescape(encodeURIComponent(r))), chars = png.split(""), arr = [], i = 0; i < chars.length; i++) arr.push(chars[i].charCodeAt(0));
                            var raw = String.fromCharCode.apply(null, new Uint8Array(arr)),
                                b64 = btoa(raw);
                            resp = "data:image/png;base64," + b64
                    }
                    for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                    complete(resp)
                }

                function error(e, t, n) {
                    for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = n, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, n);
                    complete(e)
                }
                this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
                var self = this,
                    type = o.type || setType(this.url);
                fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
                    self.abort()
                }, o.timeout)), o.success && (this._successHandler = function() {
                    o.success.apply(o, arguments)
                }), o.error && this._errorHandlers.push(function() {
                    o.error.apply(o, arguments)
                }), o.complete && this._completeHandlers.push(function() {
                    o.complete.apply(o, arguments)
                }), this.request = getRequest.call(this, success, error)
            }

            function reqwest(e, t) {
                return new Reqwest(e, t)
            }

            function normalize(e) {
                return e ? e.replace(/\r?\n/g, "\r\n") : ""
            }

            function serial(e, t) {
                var n, r, i, a, o = e.name,
                    s = e.tagName.toLowerCase(),
                    l = function(e) {
                        e && !e.disabled && t(o, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
                    };
                if (!e.disabled && o) switch (s) {
                    case "input":
                        /reset|button|image|file/i.test(e.type) || (n = /checkbox/i.test(e.type), r = /radio/i.test(e.type), i = e.value, (!(n || r) || e.checked) && t(o, normalize(n && "" === i ? "on" : i)));
                        break;
                    case "textarea":
                        t(o, normalize(e.value));
                        break;
                    case "select":
                        if ("select-one" === e.type.toLowerCase()) l(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                        else
                            for (a = 0; e.length && a < e.length; a++) e.options[a].selected && l(e.options[a])
                }
            }

            function eachFormElement() {
                var e, t, n = this;
                for (t = 0; t < arguments.length; t++) e = arguments[t], /input|select|textarea/i.test(e.tagName) && serial(e, n),
                    function(e, t) {
                        var r, i, a;
                        for (r = 0; r < t.length; r++)
                            for (a = e[byTag](t[r]), i = 0; i < a.length; i++) serial(a[i], n)
                    }(e, ["input", "select", "textarea"])
            }

            function serializeQueryString() {
                return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
            }

            function serializeHash() {
                var e = {};
                return eachFormElement.apply(function(t, n) {
                    t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(n)) : e[t] = n
                }, arguments), e
            }

            function buildParams(e, t, n, r) {
                var i, a, o, s = /\[\]$/;
                if (isArray(t))
                    for (a = 0; t && a < t.length; a++) o = t[a], n || s.test(e) ? r(e, o) : buildParams(e + "[" + ("object" == typeof o ? a : "") + "]", o, n, r);
                else if (t && "[object Object]" === t.toString())
                    for (i in t) buildParams(e + "[" + i + "]", t[i], n, r);
                else r(e, t)
            }
            var win = window,
                doc = document,
                twoHundo = /^20\d$/,
                byTag = "getElementsByTagName",
                readyState = "readyState",
                contentType = "Content-Type",
                requestedWith = "X-Requested-With",
                head = doc[byTag]("head")[0],
                uniqid = 0,
                callbackPrefix = "reqwest_" + +new Date,
                lastValue, xmlHttpRequest = "XMLHttpRequest",
                xDomainRequest = "XDomainRequest",
                noop = function() {},
                isArray = "function" == typeof Array.isArray ? Array.isArray : function(e) {
                    return e instanceof Array
                },
                defaultHeaders = {
                    contentType: "application/x-www-form-urlencoded",
                    requestedWith: xmlHttpRequest,
                    accept: {
                        "*": "text/javascript, text/html, application/xml, text/xml, */*",
                        xml: "application/xml, text/xml",
                        html: "text/html",
                        text: "text/plain",
                        json: "application/json, text/javascript",
                        js: "application/javascript, text/javascript"
                    }
                },
                xhr = function(e) {
                    if (!0 === e.crossOrigin) {
                        var t = win[xmlHttpRequest] ? new XMLHttpRequest : null;
                        if (t && "withCredentials" in t) return t;
                        if (win[xDomainRequest]) return new XDomainRequest;
                        throw new Error("Browser does not support cross-origin requests")
                    }
                    return win[xmlHttpRequest] ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                },
                globalSetupOptions = {
                    dataFilter: function(e) {
                        return e
                    }
                };
            return Reqwest.prototype = {
                abort: function() {
                    this._aborted = !0, this.request.abort()
                },
                retry: function() {
                    init.call(this, this.o, this.fn)
                },
                then: function(e, t) {
                    return e = e || function() {}, t = t || function() {}, this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)), this
                },
                always: function(e) {
                    return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e), this
                },
                fail: function(e) {
                    return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e), this
                }
            }, reqwest.serializeArray = function() {
                var e = [];
                return eachFormElement.apply(function(t, n) {
                    e.push({
                        name: t,
                        value: n
                    })
                }, arguments), e
            }, reqwest.serialize = function() {
                if (0 === arguments.length) return "";
                var e, t, n = Array.prototype.slice.call(arguments, 0);
                return e = n.pop(), e && e.nodeType && n.push(e) && (e = null), e && (e = e.type), t = "map" == e ? serializeHash : "array" == e ? reqwest.serializeArray : serializeQueryString, t.apply(null, n)
            }, reqwest.toQueryString = function(e, t) {
                var n, r, i = t || !1,
                    a = [],
                    o = encodeURIComponent,
                    s = function(e, t) {
                        t = "function" == typeof t ? t() : null == t ? "" : t, a[a.length] = o(e) + "=" + o(t)
                    };
                if (isArray(e))
                    for (r = 0; e && r < e.length; r++) s(e[r].name, e[r].value);
                else
                    for (n in e) buildParams(n, e[n], i, s);
                return a.join("&").replace(/%20/g, "+")
            }, reqwest.getcallbackPrefix = function() {
                return callbackPrefix
            }, reqwest.compat = function(e, t) {
                return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)), new Reqwest(e, t)
            }, reqwest.ajaxSetup = function(e) {
                e = e || {};
                for (var t in e) globalSetupOptions[t] = e[t]
            }, reqwest
        }), define("models/variable/common/cf", ["cookie"], function(e) {
            var t;
            return {
                id: "cf",
                getValue: function(n) {
                    if (void 0 !== t) return t;
                    return e.safeSet({
                        ctoTest: "test"
                    }), "test" === e.get("ctoTest") ? (t = "true", e.remove("ctoTest")) : t = "false", t
                }
            }
        }), define("pollster", ["reqwest", "underscore", "models/variable/common/cf", "cookie", "bean", "tld"], function(e, t, n, r, i, a) {
            "use strict";
            var o = {};
            return o.ziplineDomains = ["https://r.disney.com/poll", "https://r.disney.go.com/poll", "https://r.starwars.com/poll", "https://r.disneyjunior.com/poll", "https://r.babble.com/poll", "https://r.disneybaby.com/poll", "https://r.disneystore.com/poll", "https://r.shopdisney.com/poll"], o.cookiesEnabled = function() {
                return "true" == n.getValue({})
            }, o.corsSupported = function() {
                if (!0 === this.isCorsSupported) return !0;
                if (!1 === this.isCorsSupported) return !1;
                if ("undefined" != typeof ActiveXObject) return this.isCorsSupported = !1, this.isCorsSupported;
                var e = new XMLHttpRequest;
                return this.isCorsSupported = !!e && "withCredentials" in e, !!this.isCorsSupported
            }, o.generateIdentifier = function() {
                return (new Date).getTime() + "-" + Math.floor(1e13 * Math.random())
            }, o.pollDomains = function() {
                var n = o.ziplineDomains.length,
                    s = 0,
                    l = [],
                    c = a.getDomain(location.hostname),
                    d = function(e) {
                        "while(1);" === e.substr(0, 9) && (e = e.substr(9));
                        for (var t, n, r = /\s*([^=;]+)=?([^;]*);?/g, i = {}; t = r.exec(e);) n = t[2], i[t[1]] = n;
                        (i.ctoVisitor || i.ctoSession || i.ctoVisitorData || i.ctoSessionData) && l.push(i)
                    },
                    u = function() {
                        ++s >= n && p()
                    },
                    p = function() {
                        var e = /^[0-9]+-[0-9]+$/,
                            n = {
                                priority: 100,
                                createTime: 0
                            },
                            a = function(t) {
                                var r;
                                try {
                                    r = JSON.parse(unescape(t.ctoVisitor)) || {}
                                } catch (e) {
                                    return
                                }
                                var i;
                                try {
                                    i = JSON.parse(unescape(t.ctoSession)) || {}
                                } catch (e) {
                                    return
                                }
                                r.visitorId && r.visitorId.match(e) && i.sessionId && i.sessionId.match(e) && (n.priority > 1 ? n = {
                                    priority: 1,
                                    createTime: t.ctoBrowserSession,
                                    cookie: {
                                        visitor: {
                                            visitorId: r.visitorId,
                                            firstRefUrl: r.firstRefUrl,
                                            firstUrl: r.firstUrl,
                                            firstPageName: r.firstPageName,
                                            sessionCount: r.sessionCount
                                        },
                                        session: {
                                            sessionId: i.sessionId,
                                            sessionFirstRefUrl: i.sessionFirstRefUrl,
                                            firstSessionUrl: i.firstSessionUrl,
                                            firstSessionPageName: i.firstSessionPageName,
                                            hitCount: i.hitCount
                                        }
                                    }
                                } : 1 == n.priority && n.createTime < t.ctoBrowserSession && (n = {
                                    priority: 1,
                                    createTime: t.ctoBrowserSession,
                                    cookie: {
                                        visitor: {
                                            visitorId: r.visitorId,
                                            firstRefUrl: r.firstRefUrl,
                                            firstUrl: r.firstUrl,
                                            firstPageName: r.firstPageName,
                                            sessionCount: r.sessionCount
                                        },
                                        session: {
                                            sessionId: i.sessionId,
                                            sessionFirstRefUrl: i.sessionFirstRefUrl,
                                            firstSessionUrl: i.firstSessionUrl,
                                            firstSessionPageName: i.firstSessionPageName,
                                            hitCount: i.hitCount
                                        }
                                    }
                                }))
                            },
                            s = function(t) {
                                var r;
                                try {
                                    r = JSON.parse(unescape(t.ctoVisitor)) || {}
                                } catch (e) {
                                    return
                                }
                                r.visitorId && r.visitorId.match(e) && n.priority > 2 && (n = {
                                    priority: 2,
                                    createTime: t.ctoBrowserSession,
                                    cookie: {
                                        visitor: {
                                            visitorId: r.visitorId,
                                            firstRefUrl: r.firstRefUrl,
                                            firstUrl: r.firstUrl,
                                            firstPageName: r.firstPageName,
                                            sessionCount: r.sessionCount
                                        }
                                    }
                                })
                            },
                            d = function(t) {
                                var r = t.ctoVisitorData.split("<|>"),
                                    i = t.ctoSessionData.split("<|>");
                                if (5 === r.length && 5 === i.length) {
                                    var a = r[0].replace(/\s+/gi, "") || "",
                                        o = i[0].replace(/\s+/gi, "") || "";
                                    if (!a.match(e)) return;
                                    if (!o.match(e)) return;
                                    var s = r[1].replace(/\s+/gi, ""),
                                        l = r[2].replace(/\s+/gi, ""),
                                        c = r[3].replace(/\s+/gi, ""),
                                        d = r[4].replace(/\s+/gi, ""),
                                        u = i[1].replace(/\s+/gi, ""),
                                        p = i[2].replace(/\s+/gi, ""),
                                        m = i[3].replace(/\s+/gi, ""),
                                        f = i[4].replace(/\s+/gi, "");
                                    n.priority > 3 && (n = {
                                        priority: 3,
                                        createTime: t.ctoBrowserSession,
                                        cookie: {
                                            visitor: {
                                                visitorId: a,
                                                firstRefUrl: s,
                                                firstUrl: l,
                                                firstPageName: c,
                                                sessionCount: d
                                            },
                                            session: {
                                                sessionId: o,
                                                sessionFirstRefUrl: u,
                                                firstSessionUrl: p,
                                                firstSessionPageName: m,
                                                hitCount: f
                                            }
                                        }
                                    })
                                }
                            },
                            u = function(t) {
                                var r = t.ctoVisitorData.split("<|>");
                                if (5 === r.length) {
                                    var i = r[0].replace(/\s+/gi, "") || "";
                                    if (!i.match(e)) return;
                                    var a = r[1].replace(/\s+/gi, ""),
                                        o = r[2].replace(/\s+/gi, ""),
                                        s = r[3].replace(/\s+/gi, ""),
                                        l = r[4].replace(/\s+/gi, "");
                                    n.priority > 4 && (n = {
                                        priority: 4,
                                        createTime: t.ctoBrowserSession,
                                        cookie: {
                                            visitor: {
                                                visitorId: i,
                                                firstRefUrl: a,
                                                firstUrl: o,
                                                firstPageName: s,
                                                sessionCount: l
                                            }
                                        }
                                    })
                                }
                            },
                            p = (new Date).getTime();
                        t.each(l, function(e) {
                            e.ctoVisitor && e.ctoSession && e.ctoBrowserSession && p - e.ctoBrowserSession < 18e5 ? a(e) : e.ctoVisitor ? s(e) : e.ctoVisitorData && e.ctoSessionData ? d(e) : e.ctoVisitorData && u(e)
                        });
                        var m = new Date((new Date).getTime() + 33927469800),
                            f = new Date((new Date).getTime() + 18e5);
                        n.cookie && (n.cookie.visitor && r.safeSet("ctoVisitor", JSON.stringify(n.cookie.visitor), {
                            expires: m,
                            path: "/",
                            domain: c
                        }), n.cookie.session && (n.cookie.session.timestamp || (n.cookie.session.timestamp = (new Date).getTime()), r.safeSet("ctoSession", JSON.stringify(n.cookie.session), {
                            expires: f,
                            path: "/",
                            domain: c
                        }), r.safeSet("ctoBrowserSession", p, {
                            path: "/",
                            domain: c
                        })));
                        var g = !1,
                            v = o.generateIdentifier();
                        if (r.get("ctoVisitor")) try {
                            JSON.parse(unescape(r.get("ctoVisitor"))).visitorId && (g = !0)
                        } catch (e) {}
                        g || r.safeSet("ctoVisitor", JSON.stringify({
                            visitorId: v
                        }), {
                            expires: m,
                            path: "/",
                            domain: c
                        });
                        var h = !1;
                        if (r.get("ctoSession") && r.get("ctoBrowserSession")) try {
                            JSON.parse(unescape(r.get("ctoSession"))).sessionId && (h = !0)
                        } catch (e) {}
                        h || (r.safeSet("ctoSession", JSON.stringify({
                            sessionId: v,
                            timestamp: (new Date).getTime()
                        }), {
                            expires: f,
                            path: "/",
                            domain: c
                        }), r.safeSet("ctoBrowserSession", p, {
                            path: "/",
                            domain: c
                        })), i.fire(window, "cookiesReadyCTO")
                    },
                    m = [];
                t.each(o.ziplineDomains, function(e) {
                    -1 === e.indexOf("." + c) ? m.push(e) : s++
                }), t.each(m, function(t) {
                    try {
                        e({
                            url: t,
                            withCredentials: !0,
                            type: "html",
                            crossOrigin: !0,
                            success: d,
                            complete: u
                        })
                    } catch (e) {
                        s++
                    }
                })
            }, o
        }), define("models/data/utility", ["cookie", "underscore", "models/API/CTO", "pollster", "tld"], function(e, t, n, r, i) {
            return {
                sessionQueue: {},
                visitorQueue: {},
                localSessionQueue: {},
                localVisitorQueue: {},
                getPollsterValue: function(e, t) {
                    return this.getValueFromCookieQueue(e, t) || this.getValueFromCookie(e, t)
                },
                getLocalValue: function(e, t) {
                    return this.getValueFromLocalCookieQueue(e, t) || this.getValueFromLocalCookie(e, t)
                },
                getValueFromCookie: function(t, n) {
                    if (n) {
                        var r, i = e.get("ctoVisitor");
                        try {
                            r = JSON.parse(unescape(i))
                        } catch (e) {
                            r = {}
                        }
                        return r[t]
                    }
                    if (this.isSessionExpired()) return "";
                    var a, o = e.get("ctoSession");
                    try {
                        a = JSON.parse(unescape(o))
                    } catch (e) {
                        a = {}
                    }
                    return a[t]
                },
                addKeyValueToCookieQueue: function(e, t, n) {
                    n ? this.visitorQueue[e] = t : this.sessionQueue[e] = t
                },
                getValueFromCookieQueue: function(e, t) {
                    return t ? this.visitorQueue[e] : this.sessionQueue[e]
                },
                getValueFromLocalCookie: function(t, n) {
                    if (n) {
                        var r, i = e.get("ctoLocalVisitor");
                        try {
                            r = JSON.parse(unescape(i))
                        } catch (e) {
                            r = {}
                        }
                        return r[t]
                    }
                    if (this.isLocalSessionExpired()) return "";
                    var a, o = e.get("ctoLocalSession");
                    try {
                        a = JSON.parse(unescape(o))
                    } catch (e) {
                        a = {}
                    }
                    return a[t]
                },
                addKeyValueToLocalCookieQueue: function(e, t, n) {
                    n ? this.localVisitorQueue[e] = t : this.localSessionQueue[e] = t
                },
                getValueFromLocalCookieQueue: function(e, t) {
                    return t ? this.localVisitorQueue[e] : this.localSessionQueue[e]
                },
                _updateCookieObject: function(e, n) {
                    var r = this._getJSONCookieValue(e);
                    return t.each(n, function(e, t) {
                        r[t] = e
                    }), r
                },
                saveCookieQueue: function() {
                    var n = i.getDomain(location.hostname);
                    e.safeSet("ctoBrowserSession", (new Date).getTime(), {
                        path: "/",
                        domain: n
                    });
                    var a = !1;
                    this.isSessionExpired() && (a = !0);
                    var o = 18e5;
                    o = new Date((new Date).getTime() + o);
                    var s = new Date((new Date).getTime() + 33927469800),
                        l = this._updateCookieObject("ctoLocalSession", this.localSessionQueue),
                        c = this._updateCookieObject("ctoLocalVisitor", this.localVisitorQueue);
                    if (e.safeSet("ctoLocalSession", JSON.stringify(l), {
                            expires: o,
                            path: "/",
                            domain: n
                        }), e.safeSet("ctoLocalVisitor", JSON.stringify(c), {
                            expires: s,
                            path: "/",
                            domain: n
                        }), this.localSessionQueue = {}, this.localVisitorQueue = {}, !r.corsSupported()) return !1;
                    var d = this._updateCookieObject("ctoSession", this.sessionQueue),
                        u = this._updateCookieObject("ctoVisitor", this.visitorQueue);
                    a && (t.isNumber(u.sessionCount) ? u.sessionCount++ : u.sessionCount = 1), this.visitorQueue = {}, this.sessionQueue = {}, d.timestamp = (new Date).getTime(), e.safeSet("ctoSession", JSON.stringify(d), {
                        expires: o,
                        path: "/",
                        domain: n
                    }), e.safeSet("ctoVisitor", JSON.stringify(u), {
                        expires: s,
                        path: "/",
                        domain: n
                    })
                },
                isLocalSessionExpired: function() {
                    var t, n = e.get("ctoLocalSession");
                    try {
                        t = JSON.parse(unescape(n))
                    } catch (e) {
                        t = {}
                    }
                    var r = e.get("ctoBrowserSession");
                    return (!t.localSessionId || !r) && (e.remove(["ctoLocalSession"]), !0)
                },
                isSessionExpired: function() {
                    if (r.corsSupported() && r.cookiesEnabled()) {
                        var t = e.get("ctoSession"),
                            n = {};
                        if (t) try {
                            n = JSON.parse(unescape(t))
                        } catch (e) {
                            n = {}
                        }
                        var i = e.get("ctoBrowserSession");
                        return (!n.sessionId || !i) && (e.remove(["ctoSession"]), !0)
                    }
                },
                _getJSONCookieValue: function(t) {
                    var n, r = e.get(t);
                    try {
                        n = JSON.parse(r)
                    } catch (e) {}
                    return n || {}
                }
            }
        }), define("models/variable/common/arPageName", ["models/variable/common/fullPageName", "models/data/utility", "models/variable/utility"], function(e, t, n) {
            return {
                id: "arPageName",
                getValue: function(r, i) {
                    var a, o = n.getValue(r, "templateType", i);
                    return "watch" !== o && "play" !== o && "embed" !== o && "create" !== o || t.isSessionExpired() ? (a = e.getValue(r, i), t.addKeyValueToCookieQueue(this.id, a), a || "na") : t.getPollsterValue(this.id)
                }
            }
        }), define("models/variable/common/assetComplete", ["models/variable/utility"], function(e) {
            return {
                id: "assetComplete",
                getValue: function(t, n) {
                    return "playerPlayEnd" === e.getValue(t, "KDPEVNT", n) ? "true" : ""
                }
            }
        }), define("models/variable/common/assetInteractionType", ["models/variable/utility"], function(e) {
            return {
                id: "assetInteractionType",
                getValue: function(t) {
                    var n = "",
                        r = e.getValue(t, "gameEvent", CTO),
                        i = e.getValue(t, "gmEvntVal", CTO);
                    if (0 == r.indexOf("omni:")) return n = r, i && (n += "|" + i), n;
                    var a = e.getValue(t, "appEvntVal", CTO),
                        o = e.getValue(t, "appEvent", CTO);
                    return "load" !== o && (n = o, a && (n += "|" + a)), n
                }
            }
        }), define("models/variable/common/assetMSTP", ["models/variable/utility"], function(e) {
            return {
                id: "assetMSTP",
                getValue: function(t, n) {
                    var r = "";
                    if ("tV" === t.trackType) {
                        var i = e.getValue(t, "ASSETNAME", n) || e.getValue(t, "assetName", n);
                        if ("string" == typeof i) {
                            var a = i.split("|");
                            "string" == typeof a[2] && a[2] && (r = a[2])
                        }
                    } else if ("tG" === t.trackType) {
                        var o = e.getValue(t, "gameSeriesCode", n);
                        "string" == typeof o && (r = o)
                    }
                    return r
                }
            }
        }), define("models/variable/common/assetBU", ["models/variable/utility"], function(e) {
            return {
                id: "assetBU",
                getValue: function(t, n) {
                    var r = "";
                    if ("tV" === t.trackType) {
                        var i = e.getValue(t, "ASSETNAME", n) || e.getValue(t, "assetName", n);
                        if ("string" == typeof i) {
                            var a = i.split("|");
                            "string" == typeof a[1] && a[1] && (r = a[1])
                        }
                    } else if ("tG" === t.trackType) {
                        var o = e.getValue(t, "gameBuCode", n);
                        "string" == typeof o && (r = o)
                    }
                    return r
                }
            }
        }), define("models/variable/common/assetPlayerType", ["models/variable/utility"], function(e) {
            return {
                id: "assetPlayerType",
                getValue: function(t) {
                    var n = "";
                    if ("tV" === t.trackType) {
                        var r = e.getValue(t, "WIGID", CTO);
                        if ("string" == typeof r && r) {
                            var i = {
                                1959: "Matterhorn",
                                _628012: "Kaltura"
                            };
                            n = i[r] ? i[r] : r
                        }
                    }
                    return n
                }
            }
        }), define("models/variable/common/assetPlayerForm", ["models/variable/utility"], function(e) {
            return {
                id: "assetPlayerForm",
                getValue: function(t, n) {
                    var r = "";
                    if ("tV" === t.trackType) {
                        var i = e.getValue(t, "ASSETNAME", n) || e.getValue(t, "assetName", n);
                        if ("string" == typeof i) {
                            var a = i.split("|");
                            "string" == typeof a[3] && a[3] && (r = a[3])
                        }
                    }
                    return r
                }
            }
        }), define("models/variable/video/videoStart", ["models/variable/utility"], function(e) {
            return {
                id: "videoStart",
                getValue: function(t) {
                    var n = e.getValue(t, "KDPEVNT", CTO),
                        r = e.getValue(t, "KDPDAT_VALUE", CTO);
                    return "percentReached" === n && 0 == r ? "true" : ""
                }
            }
        }), define("models/variable/int/video25", [], function() {
            "use strict";
            return {
                id: "video25",
                getValue: function(e) {
                    return e.videoEvent && "percentReached" === e.videoEvent.KDPEVNT && 25 == e.videoEvent.KDPDAT_VALUE ? "true" : ""
                }
            }
        }), define("models/variable/video/video50", ["models/variable/utility"], function(e) {
            return {
                id: "video50",
                getValue: function(t, n) {
                    var r = e.getValue(t, "KDPEVNT", n),
                        i = e.getValue(t, "KDPDAT_VALUE", n);
                    return "percentReached" === r && 50 == i ? "true" : ""
                }
            }
        }), define("models/variable/int/video75", [], function() {
            return {
                id: "video75",
                getValue: function(e) {
                    return e.videoEvent && "percentReached" === e.videoEvent.KDPEVNT && 75 == e.videoEvent.KDPDAT_VALUE ? "true" : ""
                }
            }
        }), define("models/variable/video/videoComplete", ["models/variable/utility"], function(e) {
            return {
                id: "videoComplete",
                getValue: function(t, n) {
                    return "playerPlayEnd" === e.getValue(t, "KDPEVNT", n) ? "true" : ""
                }
            }
        }), define("models/variable/common/assetSecondsConsumed", ["models/variable/utility", "models/variable/video/videoStart", "models/variable/int/video25", "models/variable/video/video50", "models/variable/int/video75", "models/variable/video/videoComplete"], function(e, t, n, r, i, a) {
            var o;
            return {
                id: "assetSecondsConsumed",
                getValue: function(s, l) {
                    var c = e.getValue(s, "KDPEVNT", l);
                    if ("string" != typeof c) return "";
                    c = c.toLowerCase();
                    var d = t.getValue(s, l),
                        u = n.getValue(s, l),
                        p = r.getValue(s, l),
                        m = i.getValue(s, l),
                        f = a.getValue(s, l);
                    return "doplay" == c || "dopause" == c || "dostop" == c || u || p || m || f || !o ? e.getValue(s, "KDPDAT_PLAYHEAD", l) : (d && (o = (new Date).getTime()), "")
                },
                getEventValue: function(e, t) {
                    var s = o,
                        l = n.getValue(e, t),
                        c = r.getValue(e, t),
                        d = i.getValue(e, t),
                        u = a.getValue(e, t);
                    if ((l || c || d || u) && (o = (new Date).getTime()), e && e.videoEvent) return s ? Math.round((o - s) / 1e3) : 0
                }
            }
        }), define("models/variable/common/assetStart", ["models/variable/video/videoStart", "models/variable/utility"], function(e, t) {
            return {
                id: "assetStart",
                getValue: function(n, r) {
                    return "load" === t.getValue(n, "gameEvent", r) ? "true" : "load" === t.getValue(n, "appEvent", r) ? "true" : e.getValue(n, r) ? "true" : ""
                }
            }
        }), define("models/variable/common/bh", [], function() {
            return {
                id: "bh",
                getValue: function(e) {
                    return window.innerHeight || document.body.clientHeight
                }
            }
        }), define("models/variable/common/bro", ["underscore"], function(e) {
            return {
                id: "bro",
                getValue: function(t) {
                    function n(e) {
                        var t = e.indexOf(a);
                        if (-1 !== t) return parseFloat(e.substring(t + a.length + 1))
                    }
                    var r, i, a, o = [{
                        string: navigator.userAgent,
                        subString: "Chrome",
                        identity: "Chrome"
                    }, {
                        string: navigator.userAgent,
                        subString: "OmniWeb",
                        versionSearch: "OmniWeb/",
                        identity: "OmniWeb"
                    }, {
                        string: navigator.vendor,
                        subString: "Apple",
                        identity: "Safari",
                        versionSearch: "Version"
                    }, {
                        prop: window.opera,
                        identity: "Opera",
                        versionSearch: "Version"
                    }, {
                        string: navigator.vendor,
                        subString: "iCab",
                        identity: "iCab"
                    }, {
                        string: navigator.vendor,
                        subString: "KDE",
                        identity: "Konqueror"
                    }, {
                        string: navigator.userAgent,
                        subString: "Firefox",
                        identity: "Firefox"
                    }, {
                        string: navigator.vendor,
                        subString: "Camino",
                        identity: "Camino"
                    }, {
                        string: navigator.userAgent,
                        subString: "Netscape",
                        identity: "Netscape"
                    }, {
                        string: navigator.userAgent,
                        subString: "MSIE",
                        identity: "Explorer",
                        versionSearch: "MSIE"
                    }, {
                        string: navigator.userAgent,
                        subString: "Gecko",
                        identity: "Mozilla",
                        versionSearch: "rv"
                    }, {
                        string: navigator.userAgent,
                        subString: "Mozilla",
                        identity: "Netscape",
                        versionSearch: "Mozilla"
                    }];
                    return e.each(o, function(e, t) {
                        if (!r) {
                            var n = e.string,
                                i = e.prop;
                            n ? -1 !== n.indexOf(e.subString) && (a = e.versionSearch || e.identity, r = e.identity) : i && (r = e.identity)
                        }
                    }), r = r || "An unknown browser", i = n(navigator.userAgent) || n(navigator.appVersion) || "an unknown version", r + " " + i
                }
            }
        }), define("models/variable/common/bw", [], function() {
            return {
                id: "bw",
                getValue: function(e) {
                    return window.innerWidth || document.body.clientWidth
                }
            }
        }), define("models/variable/common/cmp", ["url"], function(e) {
            return {
                id: "cmp",
                getValue: function(t) {
                    var n = e("?att", document.URL.toLowerCase()),
                        r = e("?cmp", document.URL.toLowerCase());
                    if (e("hostname").indexOf("shopdisney") > -1 || e("hostname").indexOf("disneystore") > -1 || e("hostname").indexOf("disneysubscription") > -1) {
                        var i = e("?campaignid", document.URL.toLowerCase()),
                            a = [];
                        return r && a.push(r), i && a.push(i), n && a.push(n), a.join(":")
                    }
                    var o = r || e("?ex_cmp", document.URL.toLowerCase()) || n || e("?rmid", document.URL.toLowerCase()) || e("?source", document.URL.toLowerCase());
                    return o && (o = unescape(o)), o || ""
                }
            }
        }), define("models/variable/common/cod", [], function() {
            return {
                id: "cod",
                getValue: function(e) {
                    return screen.colorDepth
                }
            }
        }), define("models/variable/common/dolWAVersion", [], function() {
            return {
                id: "dolWAVersion",
                getValue: function(e) {
                    return "4.5.55"
                }
            }
        }), define("models/variable/common/dom", [], function() {
            return {
                id: "dom",
                getValue: function(e) {
                    return location.host
                }
            }
        }), define("models/variable/common/engagementType", ["models/variable/utility"], function(e) {
            return {
                id: "engagementType",
                getValue: function(t, n) {
                    var r = e.getValue(t, "engagementType", n);
                    return r ? escape(r) : ""
                }
            }
        }), define("models/variable/common/error", ["models/variable/utility", "models/variable/common/pageName"], function(e, t) {
            return {
                id: "error",
                getValue: function(n, r) {
                    var i = t.getValue(n, r),
                        a = e.getValue(n, "pageTypeCode", r);
                    return "errorpage" == i.toLowerCase() || "errorpage" == a.toLowerCase() ? "true" : ""
                }
            }
        }), define("models/variable/common/flashVersion", [], function() {
            return {
                id: "flashVersion",
                getValue: function(e) {
                    var t = !(-1 == navigator.appVersion.indexOf("MSIE")),
                        n = !(-1 == navigator.appVersion.toLowerCase().indexOf("win")),
                        r = !(-1 == navigator.userAgent.indexOf("Opera")),
                        i = -1;
                    if (null != navigator.plugins && navigator.plugins.length > 0) {
                        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                            var a = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
                                o = navigator.plugins["Shockwave Flash" + a].description,
                                s = o.split(" "),
                                l = s[2].split("."),
                                c = l[0],
                                d = l[1],
                                u = s[3];
                            "" == u && (u = s[4]), "d" == u[0] ? u = u.substring(1) : "r" == u[0] && (u = u.substring(1), u.indexOf("d") > 0 && (u = u.substring(0, u.indexOf("d")))), i = c + "." + d + "." + u
                        }
                    } else -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.6") ? i = 4 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.5") ? i = 3 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv") ? i = 2 : t && n && !r && (i = function() {
                        var e, t;
                        try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t.GetVariable("$version")
                        } catch (e) {}
                        if (!e) try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
                        } catch (e) {}
                        if (!e) try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = t.GetVariable("$version")
                        } catch (e) {}
                        if (!e) try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = "WIN 3,0,18,0"
                        } catch (e) {}
                        if (!e) try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = "WIN 2,0,0,11"
                        } catch (t) {
                            e = -1
                        }
                        return e
                    }());
                    return "flash_version:" + i
                }
            }
        }), define("models/variable/common/gSwid", ["cookie"], function(e) {
            return {
                id: "gSwid",
                getValue: function() {
                    return e.get("SWID") || ""
                }
            }
        }), define("models/variable/common/hootPostId", ["url"], function(e) {
            return {
                id: "hootPostId",
                getValue: function(t) {
                    var n = e("?" + this.id);
                    return void 0 === n ? "true" : n || ""
                }
            }
        }), define("models/variable/common/instantSearch", ["underscore", "models/variable/utility"], function(e, t) {
            "use strict";
            return {
                id: "instantSearch",
                getValue: function(n, r) {
                    var i = t.getValue(n, this.id, r);
                    if (i) return i;
                    var a, o = t.getValue(n, "searchEvent", r);
                    if (!o || !o.split) return "";
                    a = o.split(",");
                    var s = !1;
                    return e.each(a, function(e) {
                        "instantSearch" === e && (s = !0)
                    }), s ? "true" : ""
                }
            }
        }), define("models/variable/common/instantSearchResultClick", ["underscore", "models/variable/utility"], function(e, t) {
            "use strict";
            return {
                id: "instantSearchResultClick",
                getValue: function(n, r) {
                    var i = t.getValue(n, this.id, r);
                    if (i) return i;
                    var a, o = t.getValue(n, "searchEvent", r);
                    if (!o || !o.split) return "";
                    a = o.split(",");
                    var s = !1;
                    return e.each(a, function(e) {
                        "instantResultsClick" === e && (s = !0)
                    }), s ? "true" : ""
                }
            }
        }), define("models/variable/common/internalPromotion", ["url", "models/data/utility", "models/variable/utility", ""], function(e, t, n) {
            return {
                id: "internalPromotion",
                getValue: function(r, i) {
                    var a = t.getValueFromLocalCookie(this.id),
                        o = e("?int_cmp", document.URL.toLowerCase());
                    return o && (o = unescape(o)), void 0 === o && (o = "cmp_value_not_set"), a === o ? "" : o ? (t.addKeyValueToLocalCookieQueue(this.id, o), o) : n.getValue(r, this.id, i) || ""
                }
            }
        }), define("models/variable/common/internalPromotionEvent", ["url"], function(e) {
            return {
                id: "internalPromotionEvent",
                getValue: function(t) {
                    var n = e("?int_cmp", document.URL.toLowerCase());
                    return void 0 === n && (n = "cmp_value_not_set"), n || ""
                }
            }
        }), define("models/variable/common/internalSearchPhrase", ["models/variable/utility"], function(e) {
            return {
                id: "internalSearchPhrase",
                getValue: function(t, n) {
                    return e.getValue(t, this.id, n)
                }
            }
        }), define("models/variable/common/jf", [], function() {
            return {
                id: "jf",
                getValue: function(e) {
                    return navigator.javaEnabled && navigator.javaEnabled()
                }
            }
        }), define("models/variable/common/jsv", [], function() {
            return {
                id: "jsv",
                getValue: function(e) {
                    var t = [];
                    return !!Number.prototype.toFixed && t.push("1.5"), !(![].indexOf || ![].forEach) && t.push("1.6"), !! function() {
                        try {
                            return [1, 3]
                        } catch (e) {
                            return !1
                        }
                    }() && t.push("1.7"), !!([].reduce && [].reduceRight && JSON) && t.push("1.8"), !!"".trimLeft && t.push("1.8.1"), t[t.length - 1]
                }
            }
        }), define("models/variable/common/lan", [], function() {
            return {
                id: "lan",
                getValue: function(e) {
                    return navigator.language || navigator.browserLanguage
                }
            }
        }), define("models/variable/common/localSessionId", ["models/data/utility", "models/variable/common/cf"], function(e, t) {
            "use strict";
            return {
                id: "localSessionId",
                getValue: function(n, r) {
                    if ("false" == t.getValue({}, r)) return "";
                    var i = e.getLocalValue(this.id);
                    return i || (i = (new Date).getTime() + "-" + Math.floor(1e13 * Math.random()), e.addKeyValueToLocalCookieQueue(this.id, i)), i || ""
                }
            }
        }), define("models/variable/common/localVisitorId", ["models/data/utility", "models/variable/common/cf"], function(e, t) {
            "use strict";
            return {
                id: "localVisitorId",
                getValue: function(n, r) {
                    if ("false" == t.getValue({}, r)) return "";
                    var i = e.getLocalValue(this.id, !0);
                    return i || (i = (new Date).getTime() + "-" + Math.floor(1e13 * Math.random()), e.addKeyValueToLocalCookieQueue(this.id, i, !0)), i
                }
            }
        }), define("models/variable/common/loginStatus", ["cookie"], function(e) {
            return {
                id: "loginStatus",
                getValue: function(t) {
                    var n = e.get("dolWASessionReg"),
                        r = e.get("SWID");
                    return r && -1 !== r.indexOf("{") ? "li|r" : n ? "lo|" + n : "lo|nr"
                }
            }
        }), define("models/variable/common/mkwid", ["url"], function(e) {
            return {
                id: "mkwid",
                getValue: function(t) {
                    var n = e("?" + this.id);
                    return void 0 === n ? "true" : n || ""
                }
            }
        }), define("models/variable/common/omniId", ["cookie"], function(e) {
            return {
                id: "omniId",
                getValue: function(t) {
                    return e.get("s_vi") || "no_s_vi_cookie"
                }
            }
        }), define("models/variable/common/os", ["underscore"], function(e) {
            return {
                id: "os",
                getValue: function(t) {
                    var n, r = [{
                        string: navigator.platform,
                        subString: "Win",
                        identity: "Windows"
                    }, {
                        string: navigator.platform,
                        subString: "Mac",
                        identity: "Mac"
                    }, {
                        string: navigator.userAgent,
                        subString: "iPhone",
                        identity: "iPhone/iPod"
                    }, {
                        string: navigator.platform,
                        subString: "Linux",
                        identity: "Linux"
                    }];
                    return e.each(r, function(e, t) {
                        if (!n) {
                            var r = e.string,
                                i = e.prop;
                            r ? -1 !== r.indexOf(e.subString) && (n = e.identity) : i && (n = e.identity)
                        }
                    }), n || "Unknown OS"
                }
            }
        }), define("models/variable/common/prevPageName", ["models/data/utility"], function(e) {
            return {
                id: "prevPageName",
                getValue: function(t) {
                    return e.getLocalValue(this.id) || "na"
                }
            }
        }), define("models/variable/common/refOverride", ["models/variable/utility", "url"], function(e, t) {
            return {
                id: "refOverride",
                getValue: function(n, r) {
                    var i = unescape(t("?refoverride", document.URL.toLowerCase()));
                    return "null" === i && (i = "na"), e.getValue(n, this.id, r) || i
                }
            }
        }), define("models/variable/common/referrer", ["models/variable/utility", "models/variable/common/refOverride"], function(e, t) {
            return {
                id: "referrer",
                getValue: function(n, r) {
                    var i = e.getValue(n, "templateType", r),
                        a = t.getValue(n, r);
                    return "embed" !== i && "amp" !== i || !a ? unescape(document.referrer) || "na" : unescape(a)
                }
            }
        }), define("models/variable/common/pageName-internalPromotion", ["models/variable/common/prevPageName", "models/variable/common/referrer", "models/variable/common/internalPromotion"], function(e, t, n) {
            return {
                id: "pageName-internalPromotion",
                getValue: function(r, i) {
                    var a = n.getValue(r, i);
                    if (a) {
                        var o = e.getValue(r, i);
                        return o ? o + "|" + a : t.getValue(r, i) + "|" + a
                    }
                    return ""
                }
            }
        }), define("models/variable/common/trackingCode", ["url"], function(e) {
            return {
                id: "trackingCode",
                getValue: function(t) {
                    var n = e("?att", document.URL.toLowerCase()),
                        r = e("?cmp", document.URL.toLowerCase());
                    if (e("hostname").indexOf("shopdisney") > -1 || e("hostname").indexOf("disneystore") > -1 || e("hostname").indexOf("disneysubscription") > -1) {
                        var i = e("?campaignid", document.URL.toLowerCase()),
                            a = [];
                        return r && a.push(r), i && a.push(i), n && a.push(n), a.join(":")
                    }
                    var o = r || e("?ex_cmp", document.URL.toLowerCase()) || n || e("?rmid", document.URL.toLowerCase()) || e("?source", document.URL.toLowerCase());
                    return o && (o = unescape(o)), o || ""
                }
            }
        }), define("models/variable/common/pageName-trackingCode", ["models/variable/common/prevPageName", "models/variable/common/trackingCode", "models/variable/common/referrer"], function(e, t, n) {
            return {
                id: "pageName-trackingCode",
                getValue: function(r, i) {
                    var a = t.getValue(r, i);
                    if (a) {
                        var o = e.getValue(r, i);
                        return o ? unescape(o + "|" + +a) : unescape(n.getValue(r, i) + "|" + a)
                    }
                    return ""
                }
            }
        }), define("models/variable/common/trackType", [], function() {
            return {
                id: "trackType",
                getValue: function(e) {
                    var t;
                    return "tP" === e.trackType ? t = "trackpage" : "tL" === e.trackType ? t = "tracklink" : "tE" === e.trackType ? t = "trackevent" : "tV" === e.trackType ? t = "trackvideo" : "tG" === e.trackType ? t = "trackgame" : "tA" === e.trackType ? t = "trackapp" : "tPr" === e.trackType ? t = "trackprint" : "tLo" === e.trackType ? t = "trackload" : "tU" === e.trackType ? t = "trackunload" : "tEr" === e.trackType ? t = "trackerror" : "tMO" === e.trackType && (t = "trackmouseover"), t
                }
            }
        }), define("models/variable/common/pageViewId", ["models/variable/common/trackType", "bean"], function(e, t) {
            return {
                id: "pageViewId",
                getValue: function(e, t) {
                    var n = new t;
                    return n.pageViewId || t.firstPageViewId || n.firstPageViewId
                }
            }
        }), define("models/variable/common/pgTtl", [], function() {
            return {
                id: "pgTtl",
                getValue: function(e) {
                    return document.title ? escape(document.title) : "no_title_set"
                }
            }
        }), define("models/variable/common/plg", ["underscore"], function(e) {
            return {
                id: "plg",
                getValue: function(t) {
                    var n = [];
                    return e.each(navigator.plugins, function(e, t) {
                        n.push(e.name)
                    }), n.join(";")
                }
            }
        }), define("models/variable/common/plgId", ["models/variable/common/plg"], function(e) {
            return {
                id: "plgId",
                getValue: function(t, n) {
                    var r, i = e.getValue(t, n),
                        a = 0;
                    if (0 == i) return a;
                    for (var o = 0, s = i.length; o < s; o++) r = i.charCodeAt(o), a = (a << 5) - a + r, a |= 0;
                    return a
                }
            }
        }), define("models/variable/common/searchPhrase", ["models/variable/utility"], function(e) {
            return {
                id: "searchPhrase",
                getValue: function(t, n) {
                    return e.getValue(t, this.id, n)
                }
            }
        }), define("models/variable/common/previousPageSearch", ["models/variable/common/prevPageName", "models/variable/common/internalSearchPhrase", "models/variable/common/searchPhrase"], function(e, t, n) {
            return {
                id: "previousPageSearch",
                getValue: function(r, i) {
                    var a = e.getValue(r, i),
                        o = n.getValue(r, i),
                        s = t.getValue(r, i),
                        l = o || s;
                    return a && l ? a : ""
                }
            }
        }), define("models/variable/common/print", ["models/variable/common/trackType", "models/variable/utility"], function(e, t) {
            return {
                id: "print",
                getValue: function(n, r) {
                    var i = t.getValue(n, "linkName", r) || t.getValue(n, "linkId", r),
                        a = t.getValue(n, "linkPosition", r);
                    return -1 !== i.indexOf("print:") || -1 !== a.indexOf("print:") ? "true" : -1 !== i.indexOf("print_") || -1 !== a.indexOf("print_") ? "true" : -1 !== t.getValue(n, "gameEvent", r).indexOf("omni:print:") ? "true" : -1 !== t.getValue(n, "appEvent", r).indexOf("print") ? "true" : t.getValue(n, "print", r) ? "true" : "trackprint" === e.getValue(n, r) ? "true" : ""
                }
            }
        }), define("models/variable/common/printable", ["models/variable/common/trackType", "models/variable/utility"], function(e, t) {
            return {
                id: "printable",
                getValue: function(n, r) {
                    var i = t.getValue(n, "linkName", r) || t.getValue(n, "linkId", r),
                        a = t.getValue(n, "linkPosition", r);
                    return -1 !== i.indexOf("print:") || -1 !== a.indexOf("print:") ? "true" : -1 !== i.indexOf("print_") || -1 !== a.indexOf("print_") ? "true" : -1 !== t.getValue(n, "gameEvent", r).indexOf("omni:print:") ? "true" : -1 !== t.getValue(n, "appEvent", r).indexOf("print") ? "true" : t.getValue(n, "print", r) ? "true" : "trackprint" === e.getValue(n, r) ? "true" : ""
                }
            }
        }), define("models/variable/common/promoClicks", ["url", "models/data/utility"], function(e, t) {
            return {
                id: "promoClicks",
                getValue: function(n) {
                    var r = t.getValueFromLocalCookie(this.id),
                        i = e("?int_cmp", document.URL.toLowerCase());
                    return i && (i = unescape(i)), void 0 === i && (i = "cmp_value_not_set"), r === i ? "" : i ? (t.addKeyValueToLocalCookieQueue(this.id, i), i) : ""
                }
            }
        }), define("models/variable/common/property", ["models/variable/utility"], function(e) {
            return {
                id: "property",
                getValue: function(t, n) {
                    var r = e.getValue(t, this.id, n) || e.getValue(t, "seriesCode", n);
                    return "emea" !== e.getValue(t, "region", n) || r || (r = "multi"), r
                }
            }
        }), define("models/variable/common/recommendation_source", ["url"], function(e) {
            return {
                id: "recommendation_source",
                getValue: function() {
                    var t = e("?request_type", document.URL.toLowerCase()) || e("?recommendation_source", document.URL.toLowerCase());
                    return t && (t = unescape(t)), t || ""
                }
            }
        }), define("models/variable/common/recommendation_token", ["url"], function(e) {
            return {
                id: "recommendation_token",
                getValue: function() {
                    var t = e("?gre_rt", document.URL.toLowerCase()) || e("?recommendation_token", document.URL.toLowerCase());
                    return t && (t = unescape(t)), t || ""
                }
            }
        }), define("models/variable/common/res", [], function() {
            return {
                id: "res",
                getValue: function(e) {
                    return screen.width + "x" + screen.height
                }
            }
        }), define("models/variable/common/searchAttempt", ["underscore", "models/variable/utility"], function(e, t) {
            "use strict";
            return {
                id: "searchAttempt",
                getValue: function(n, r) {
                    var i = t.getValue(n, this.id, r);
                    if (i) return i;
                    var a, o = t.getValue(n, "searchEvent", r);
                    if (!o || !o.split) return "";
                    a = o.split(",");
                    var s = !1;
                    return e.each(a, function(e) {
                        "attempt" === e && (s = !0)
                    }), s ? "true" : ""
                }
            }
        }), define("models/variable/common/searchEventAttempt", ["underscore", "models/variable/utility"], function(e, t) {
            "use strict";
            return {
                id: "searchEventAttempt",
                getValue: function(n, r) {
                    var i = t.getValue(n, this.id, r);
                    if (i) return i;
                    var a, o = t.getValue(n, "searchEvent", r);
                    if (!o || !o.split) return "";
                    a = o.split(",");
                    var s = !1;
                    return e.each(a, function(e) {
                        "attempt" === e && (s = !0)
                    }), s ? "true" : ""
                }
            }
        }), define("models/variable/common/searchEventAutocomplete", ["underscore", "models/variable/utility"], function(e, t) {
            "use strict";
            return {
                id: "searchEventAutocomplete",
                getValue: function(n, r) {
                    var i = t.getValue(n, this.id, r);
                    if (i) return i;
                    var a, o = t.getValue(n, "searchEvent", r);
                    if (!o || !o.split) return "";
                    a = o.split(",");
                    var s = !1;
                    return e.each(a, function(e) {
                        "autoComplete" === e && (s = !0)
                    }), s ? "true" : ""
                }
            }
        }), define("models/variable/common/searchEventClose", ["underscore", "models/variable/utility"], function(e, t) {
            "use strict";
            return {
                id: "searchEventClose",
                getValue: function(n, r) {
                    var i, a = t.getValue(n, "searchEvent", r);
                    if (!a || !a.split) return "";
                    i = a.split(",");
                    var o = !1;
                    return e.each(i, function(e) {
                        "close" === e && (o = !0)
                    }), o ? "true" : ""
                }
            }
        }), define("models/variable/common/searchEventResultClicks", ["underscore", "models/variable/utility"], function(e, t) {
            "use strict";
            return {
                id: "searchEventResultClicks",
                getValue: function(n, r) {
                    var i = t.getValue(n, "linkPosition", r);
                    if (-1 != i.indexOf("sitesearch:results") || -1 != i.indexOf("sitesearch:featured") || -1 != i.indexOf("sitesearch:games_carousel") || -1 != i.indexOf("sitesearch:videos_carousel") || -1 != i.indexOf("sitesearch/results") || -1 != i.indexOf("sitesearch/featured") || -1 != i.indexOf("sitesearch/games_carousel") || -1 != i.indexOf("sitesearch/videos_carousel")) return "true";
                    var a, o = t.getValue(n, "searchEvent", r);
                    if (!o || !o.split) return "";
                    a = o.split(",");
                    var s = !1;
                    return e.each(a, function(e) {
                        "resultsClick" === e && (s = !0)
                    }), s ? "true" : ""
                }
            }
        }), define("models/variable/common/searchPhraseEvent", ["models/data/utility", "models/variable/utility", "models/variable/common/instantSearch", "models/variable/common/instantSearchResultClick", "models/variable/common/searchEventAutocomplete"], function(e, t, n, r, i) {
            return {
                id: "searchPhraseEvent",
                getValue: function(a, o) {
                    var s = e.getValueFromLocalCookie(this.id),
                        l = t.getValue(a, "searchPhrase", o) || t.getValue(a, "internalSearchPhrase", o),
                        c = n.getValue(a, o),
                        d = r.getValue(a, o),
                        u = i.getValue(a, o);
                    return s && s === l || !l ? "" : c || d || u ? void 0 : (e.addKeyValueToLocalCookieQueue(this.id, l), l)
                }
            }
        }), define("models/variable/common/searchResultClicks", ["underscore", "models/variable/utility"], function(e, t) {
            "use strict";
            return {
                id: "searchResultClicks",
                getValue: function(n, r) {
                    var i = t.getValue(n, "linkPosition", r);
                    if (-1 != i.indexOf("sitesearch:results") || -1 != i.indexOf("sitesearch:featured") || -1 != i.indexOf("sitesearch:games_carousel") || -1 != i.indexOf("sitesearch:videos_carousel") || -1 != i.indexOf("sitesearch/results") || -1 != i.indexOf("sitesearch/featured") || -1 != i.indexOf("sitesearch/games_carousel") || -1 != i.indexOf("sitesearch/videos_carousel")) return "true";
                    var a, o = t.getValue(n, "searchEvent", r);
                    if (!o || !o.split) return "";
                    a = o.split(",");
                    var s = !1;
                    return e.each(a, function(e) {
                        "resultsClick" === e && (s = !0)
                    }), s ? "true" : ""
                }
            }
        }), define("models/variable/common/sem_cmp", ["url"], function(e) {
            return {
                id: "sem_cmp",
                getValue: function(t) {
                    var n = e("?" + this.id);
                    return n && (n = unescape(n)), n || ""
                }
            }
        }), define("models/variable/common/seriesCode", ["models/variable/utility"], function(e) {
            return {
                id: "seriesCode",
                getValue: function(t, n) {
                    var r = e.getValue(t, this.id, n) || e.getValue(t, "property", n);
                    return "emea" !== e.getValue(t, "region", n) || r || (r = "multi"), r
                }
            }
        }), define("models/variable/common/sessionFirstPage", ["models/data/utility", "models/variable/common/fullPageName", "pollster"], function(e, t, n) {
            "use strict";
            return {
                id: "sessionFirstPage",
                getValue: function(r, i) {
                    if (!n.corsSupported()) return "";
                    var a = e.getPollsterValue("firstSessionPageName");
                    if (!a) {
                        var a = t.getValue(r, i);
                        e.addKeyValueToCookieQueue("firstSessionPageName", a)
                    }
                    return a || ""
                }
            }
        }), define("models/variable/common/sessionFirstRefUrl", ["models/data/utility", "models/variable/common/referrer", "pollster"], function(e, t, n) {
            "use strict";
            return {
                id: "sessionFirstRefUrl",
                getValue: function(r) {
                    if (!n.corsSupported()) return "na";
                    var i = e.getPollsterValue("sessionFirstRefUrl");
                    return i ? i.length > 255 && (i = i.substr(0, 255), e.addKeyValueToCookieQueue("sessionFirstRefUrl", i)) : (i = t.getValue(r, CTO) || "na", e.addKeyValueToCookieQueue("sessionFirstRefUrl", i)), i || ""
                }
            }
        }), define("models/variable/common/url", ["models/variable/utility"], function(e) {
            return {
                id: "url",
                getValue: function(t, n) {
                    var r = e.getValue(t, "templateType", n);
                    return "embed" !== r && "amp" !== r || !document.referrer ? unescape(document.URL.substring(0, 255)) : unescape(document.referrer)
                }
            }
        }), define("models/variable/common/sessionFirstUrl", ["models/data/utility", "models/variable/common/url", "pollster"], function(e, t, n) {
            "use strict";
            return {
                id: "sessionFirstUrl",
                getValue: function(r) {
                    if (!n.corsSupported()) return "";
                    var i = e.getPollsterValue("firstSessionUrl");
                    return i ? i.length > 255 && (i = i.substr(0, 255), e.addKeyValueToCookieQueue("firstSessionUrl", i)) : (i = t.getValue(r, CTO), e.addKeyValueToCookieQueue("firstSessionUrl", i)), i || ""
                }
            }
        }), define("models/variable/common/sessionHitSeq", ["models/data/utility", "pollster"], function(e, t) {
            "use strict";
            return {
                id: "sessionHitSeq",
                getValue: function(n) {
                    if (!t.corsSupported()) return "";
                    var r = e.getPollsterValue("hitCount");
                    return r || (r = 1, e.addKeyValueToCookieQueue("hitCount", r)), r || 1
                }
            }
        }), define("models/variable/common/visitorId", ["models/data/utility", "models/variable/common/localVisitorId"], function(e, t) {
            "use strict";
            return {
                id: "visitorId",
                getValue: function(n, r) {
                    n = n || {};
                    var i = e.getPollsterValue("visitorId", !0) || "";
                    if ("omni" == n.vendor) {
                        var a = /^[0-9]+-[0-9]+$/;
                        return i.match(a) ? i : t.getValue(n, r)
                    }
                    return i || ""
                }
            }
        }), define("models/variable/common/sessionId", ["models/data/utility", "pollster", "models/variable/common/visitorId", "models/variable/common/localSessionId"], function(e, t, n, r) {
            "use strict";
            return {
                id: "sessionId",
                getValue: function(i, a) {
                    i = i || {};
                    var o = e.getPollsterValue("sessionId") || "";
                    if ("omni" == i.vendor) {
                        var s = /^[0-9]+-[0-9]+$/;
                        return o.match(s) ? o : r.getValue(i, a) || ""
                    }
                    if (!o) {
                        if (!n.getValue(i, a)) return "";
                        o = t.generateIdentifier(), e.addKeyValueToCookieQueue("sessionId", o)
                    }
                    return o || ""
                }
            }
        }), define("models/variable/common/siteLevel4", ["models/variable/utility", "models/variable/common/siteSection", "models/variable/common/breadcrumbs", "models/variable/common/site", "models/variable/common/siteCode", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i, a, o) {
            return {
                id: "siteLevel4",
                getValue: function(e, n) {
                    var i = i.getValue(e, n) || t.getValue(e, n),
                        s = i.getValue(e, n).split(":");
                    if (s.length < 4) return "";
                    for (var l = [], c = 0; c < 4; c++) l.push(s[c]);
                    var d = o.getValue(e, n) || a.getValue(e, n),
                        u = u.getValue(e, n) || r.getValue(e, n);
                    return d + ":" + u + ":" + l.join(":")
                }
            }
        }), define("models/variable/common/siteLevel5", ["models/variable/utility", "models/variable/common/siteSection", "models/variable/common/breadcrumbs", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i) {
            return {
                id: "siteLevel5",
                getValue: function(e, a) {
                    var o = n.getValue(e, a) || t.getValue(e, a),
                        s = o.split(":");
                    if (s.length < 5) return "";
                    for (var l = [], c = 0; c < 5; c++) l.push(s[c]);
                    return (i.getValue(e, a) || r.getValue(e, a)) + ":" + (siteCode.getValue(e, a) || site.getValue(e, a)) + ":" + l.join(":")
                }
            }
        }), define("models/variable/common/siteSectionLevel1", [], function() {
            return {
                id: "siteSectionLevel1",
                getValue: function(e, t) {
                    function n(e, t) {
                        return e && t.push(e), t
                    }
                    var r = new t;
                    if ("emea" != r.region) return "";
                    var i = [];
                    return i = n(r.country, i), i = n(r.intBreadcrumbs, i), i.join(":")
                }
            }
        }), define("models/variable/common/siteSectionLevel2", ["models/variable/common/siteSectionLevel1"], function(e) {
            return {
                id: "siteSectionLevel2",
                getValue: function(t, n) {
                    function r(e, t) {
                        return e && t.push(e), t
                    }
                    var i = new n;
                    if ("emea" != i.region) return "";
                    var a = [];
                    return a = r(e.getValue(t, n), a), a = r(i.property, a), a.join(":")
                }
            }
        }), define("models/variable/common/siteSectionLevel3", ["models/variable/common/siteSectionLevel2"], function(e) {
            return {
                id: "siteSectionLevel3",
                getValue: function(t, n) {
                    function r(e, t) {
                        return e && t.push(e), t
                    }
                    var i = new n;
                    if ("emea" != i.region) return "";
                    var a = [];
                    return a = r(e.getValue(t, n), a), a = r(i.contentType, a), a.join(":")
                }
            }
        }), define("models/variable/common/siteSectionLevel4", ["models/variable/common/siteSectionLevel3", "models/variable/utility"], function(e, t) {
            return {
                id: "siteSectionLevel4",
                getValue: function(n, r) {
                    function i(e, t) {
                        return e && t.push(e), t
                    }
                    if ("emea" != (new r).region) return "";
                    var a = [];
                    a = i(e.getValue(n, r), a);
                    var o = t.getValue(n, "contentDescription", r),
                        s = document.title;
                    return a = i(o || s, a), a.join(":")
                }
            }
        }), define("models/variable/common/siteSectionLevelN", ["models/variable/common/siteSectionLevel4"], function(e) {
            return {
                id: "siteSectionLevelN",
                getValue: function(t, n) {
                    function r(e, t) {
                        return e && t.push(e), t
                    }
                    var i = new n;
                    if ("emea" != i.region) return "";
                    var a = [];
                    return a = r(e.getValue(t, n), a), a = r(i.extras, a), a.join(":")
                }
            }
        }), define("models/variable/common/siteSectionPage", ["models/variable/common/siteSectionLevelN", "models/variable/common/pageName"], function(e, t) {
            return {
                id: "siteSectionPage",
                getValue: function(n, r) {
                    function i(e, t) {
                        return e && t.push(e), t
                    }
                    var a = [];
                    return a = i(e.getValue(n, r), a), a = i(t.getValue(n, r), a), a.join(":")
                }
            }
        }), define("models/variable/common/swid", ["cookie"], function(e) {
            return {
                id: "swid",
                getValue: function() {
                    return e.get("SWID") || ""
                }
            }
        }), define("models/variable/common/t", [], function() {
            return {
                id: "t",
                getValue: function(e) {
                    var t = new Date;
                    return t.getUTCFullYear() + "/" + t.getUTCMonth() + "/" + t.getUTCDate() + " " + t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds()
                }
            }
        }), define("models/variable/common/timeOnPage", ["models/variable/utility"], function(e) {
            return {
                id: "timeOnPage",
                getValue: function(t, n) {
                    var r = e.getValue(t, "timeOnPage", n);
                    if ("number" == typeof r && !isNaN(r)) return r
                }
            }
        }), define("models/variable/common/trackingCodeEvent", ["url", "models/data/utility"], function(e, t) {
            return {
                id: "trackingCodeEvent",
                getValue: function(n) {
                    var r = t.getValueFromLocalCookie(this.id),
                        i = e("?cmp", document.URL.toLowerCase()) || e("?ex_cmp", document.URL.toLowerCase()) || e("?att", document.URL.toLowerCase()) || e("?rmid", document.URL.toLowerCase()) || e("?source", document.URL.toLowerCase());
                    return i && (i = unescape(i)), void 0 === i && (i = "cmp_value_not_set"), r === i ? "" : i ? (t.addKeyValueToLocalCookieQueue(this.id, i), unescape(i)) : ""
                }
            }
        }), define("models/variable/common/ua", [], function() {
            return {
                id: "ua",
                getValue: function(e) {
                    return navigator && navigator.userAgent
                }
            }
        }), define("models/variable/common/universalPathing", ["models/variable/utility", "models/variable/common/fullPageName", "models/variable/common/assetStart"], function(e, t, n) {
            return {
                id: "universalPathing",
                getValue: function(r, i) {
                    if (n.getValue(r, i)) {
                        var a = e.getValue(r, "ASSETNAME", i) || e.getValue(r, "assetName", i);
                        if (a) return a
                    }
                    var o = e.getValue(r, "linkName", i) || e.getValue(r, "linkId", i);
                    if (o) return o;
                    var s = t.getValue(r, i);
                    return s || ""
                }
            }
        }), define("models/variable/common/unid", ["cookie"], function(e) {
            return {
                id: "unid",
                getValue: function() {
                    var t = "";
                    return window.unid && (t = window.unid.value), t || (t = e.get("UNID")), t || ""
                }
            }
        }), define("models/variable/common/unidReason", [], function() {
            return {
                id: "unidReason",
                getValue: function() {
                    return window.unid ? window.unid.reason || "" : ""
                }
            }
        }), define("models/variable/common/urlDomain", ["tld", "url", "models/variable/utility"], function(e, t, n) {
            return {
                id: "urlDomain",
                getValue: function(r, i) {
                    if ("embed" === n.getValue(r, "templateType", i)) {
                        var a = t("hostname", document.referrer),
                            o = e.getDomain(a);
                        return o
                    }
                    var o = e.getDomain(location.hostname);
                    return o
                }
            }
        }), define("models/variable/common/urlFullDomain", ["url", "models/variable/utility"], function(e, t) {
            return {
                id: "urlFullDomain",
                getValue: function(n, r) {
                    if ("embed" === t.getValue(n, "templateType", r)) return e("hostname", document.referrer);
                    return location.hostname
                }
            }
        }), define("models/variable/common/urlFullDomain1", ["url", "models/variable/utility"], function(e, t) {
            return {
                id: "urlFullDomain1",
                getValue: function(n, r) {
                    if ("embed" === t.getValue(n, "templateType", r)) {
                        var i = e("hostname", document.referrer),
                            a = e("path", document.referrer);
                        return a.split("/")[1] ? i + "/" + a.split("/")[1] || "" : i || ""
                    }
                    return location.pathname.split("/")[1] ? location.hostname + "/" + location.pathname.split("/")[1] || "" : location.hostname || ""
                }
            }
        }), define("models/variable/common/vendorLst", ["underscore"], function(e) {
            return {
                id: "vendorLst",
                getValue: function(e) {
                    return "o"
                }
            }
        }), define("models/variable/common/visitorFirstPage", ["models/data/utility", "models/variable/common/fullPageName", "pollster"], function(e, t, n) {
            "use strict";
            return {
                id: "visitorFirstPage",
                getValue: function(r, i) {
                    if (!n.corsSupported()) return "";
                    var a = e.getPollsterValue("firstPageName", !0);
                    if (!a) {
                        var a = t.getValue(r, i);
                        e.addKeyValueToCookieQueue("firstPageName", a, !0)
                    }
                    return a || ""
                }
            }
        }), define("models/variable/common/visitorFirstRefUrl", ["models/data/utility", "models/variable/common/referrer", "pollster"], function(e, t, n) {
            "use strict";
            return {
                id: "visitorFirstRefUrl",
                getValue: function(r) {
                    if (!n.corsSupported()) return "";
                    var i = e.getPollsterValue("firstRefUrl", !0);
                    return i ? i.length > 255 && (i = i.substr(0, 255), e.addKeyValueToCookieQueue("firstRefUrl", i, !0)) : (i = t.getValue(r, CTO), e.addKeyValueToCookieQueue("firstRefUrl", i, !0)), i || ""
                }
            }
        }), define("models/variable/common/visitorFirstUrl", ["models/data/utility", "models/variable/common/url", "pollster"], function(e, t, n) {
            "use strict";
            return {
                id: "visitorFirstUrl",
                getValue: function(r) {
                    if (!n.corsSupported()) return "";
                    var i = e.getPollsterValue("firstUrl", !0);
                    return i ? i.length > 255 && (i = i.substr(0, 255), e.addKeyValueToCookieQueue("firstUrl", i, !0)) : (i = t.getValue(r, CTO), e.addKeyValueToCookieQueue("firstUrl", i, !0)), i || ""
                }
            }
        }), define("models/variable/common/visitorSesSeq", ["models/data/utility", "pollster"], function(e, t) {
            "use strict";
            return {
                id: "visitorSesSeq",
                getValue: function(n) {
                    if (!t.corsSupported()) return "";
                    var r = e.getPollsterValue("sessionCount", !0);
                    return r || (r = 1, e.addKeyValueToCookieQueue("sessionCount", r, !0)), r || ""
                }
            }
        }), define("models/variable/common/adblockStatus", [], function() {
            return {
                id: "adblockStatus",
                getValue: function(e, t) {
                    var n = "not-detected",
                        r = document.createElement("div");
                    return r.innerHTML = "&nbsp;", r.className = "adsbox", r.style.position = "fixed", r.style.width = "100px", r.style.height = "100px", document.body.appendChild(r), 0 === r.offsetHeight && (n = "detected"), r.parentElement.removeChild(r), n
                }
            }
        }), define("models/variable/common/amoid", ["url"], function(e) {
            return {
                id: "amoId",
                getValue: function(t) {
                    var n = e("?amoid", document.URL.toLowerCase());
                    return n ? unescape(n) || "" : ""
                }
            }
        }), define("models/variable/common/rrid", ["url"], function(e) {
            return {
                id: "RRID",
                getValue: function(t) {
                    var n = e("?rrid", document.URL.toLowerCase());
                    return n ? unescape(n) || "" : ""
                }
            }
        }), define("models/variable/event/titlerevenue", ["models/variable/utility", "underscore"], function(e, t) {
            return {
                id: "titlerevenue",
                value: 0,
                everyOther: !0,
                incrementValue: function(n, r) {
                    var i = e.getValue(n, this.id, r);
                    t.isNumber(i) && this.everyOther && (this.value += i, this.everyOther = !this.everyOther)
                },
                getValue: function(t, n) {
                    return e.getValue(t, this.id, n) ? this.value : ""
                }
            }
        }), define("models/variable/event/titlerevenueCount", ["models/variable/utility", "models/variable/event/titlerevenue"], function(e, t) {
            return {
                id: "titlerevenueCount",
                value: 0,
                everyOther: !0,
                incrementValue: function(n, r) {
                    e.getValue(n, t.id, r) && (this.value++, this.everyOther = !this.everyOther)
                },
                getValue: function(n, r) {
                    return e.getValue(n, t.id, r) ? this.value : ""
                }
            }
        }), define("models/variable/game/coreGameId", ["models/variable/utility", "url"], function(e, t) {
            return {
                id: "coreGameId",
                getValue: function(n, r) {
                    var i = t("?coregameid", document.URL.toLowerCase());
                    return "null" === i && (i = ""), e.getValue(n, this.id, r) || i
                }
            }
        }), define("models/variable/game/gameLoad", ["models/variable/utility"], function(e) {
            return {
                id: "gameLoad",
                getValue: function(t, n) {
                    return "load" === e.getValue(t, "gameEvent", n) ? "true" : ""
                }
            }
        }), define("models/variable/int/intFullPageName", [], function() {
            return {
                id: "intFullPageName",
                getValue: function(e, t) {
                    var n = new t;
                    return "emea" == n.region ? [n.region, n.country, n.intBreadcrumbs, n.property, n.breadcrumbs].join(":") : ""
                }
            }
        }), define("models/variable/int/intFullSiteSection", [], function() {
            return {
                id: "intFullSiteSection",
                getValue: function(e, t) {
                    var n = new t;
                    return [n.country, n.breadcrumbs, n.seriesCode, n.contentType, n.contentAction, n.contentDescription, n.extras].join(":")
                }
            }
        }), define("models/variable/int/intPageNameLinkId", ["models/variable/int/intFullPageName", "models/variable/utility"], function(e, t) {
            return {
                id: "intPageNameLinkId",
                getValue: function(n, r) {
                    var i = e.getValue(n, r),
                        a = t.getValue(n, "linkName", r);
                    return i && a ? i + "|" + a : ""
                }
            }
        }), define("models/variable/link/buy", ["models/variable/utility"], function(e) {
            return {
                id: "buy",
                getValue: function(t, n) {
                    return -1 !== (e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n)).indexOf("buy_") ? "true" : ""
                }
            }
        }), define("models/variable/link/download", ["models/variable/utility"], function(e) {
            return {
                id: "download",
                getValue: function(t, n) {
                    return -1 !== (e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n)).indexOf("download_") ? "true" : ""
                }
            }
        }), define("models/variable/link/linkClicks", ["models/variable/common/trackType"], function(e) {
            return {
                id: "linkClicks",
                getValue: function(t, n) {
                    return "tracklink" === e.getValue(t, n) ? "true" : ""
                }
            }
        }), define("models/variable/link/linkModule", ["models/variable/utility"], function(e) {
            return {
                id: "linkModule",
                getValue: function(t, n) {
                    var r = e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n);
                    if (r) {
                        var i = r.split("/");
                        if (i.length > 1) return i[0]
                    }
                    var a = e.getValue(t, "linkModule", n);
                    return a || "na"
                }
            }
        }), define("models/variable/link/signup", ["models/variable/utility"], function(e) {
            return {
                id: "signup",
                getValue: function(t, n) {
                    return -1 !== (e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n)).indexOf("signup_") ? "true" : ""
                }
            }
        }), define("models/variable/link/signup_", ["models/variable/utility"], function(e) {
            return {
                id: "signup_",
                getValue: function(t, n) {
                    return -1 !== (e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n)).indexOf("signup_") ? "true" : ""
                }
            }
        }), define("models/variable/link/social", ["models/variable/utility"], function(e) {
            return {
                id: "social",
                getValue: function(t, n) {
                    return -1 !== (e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n)).indexOf("social_") ? "true" : ""
                }
            }
        }), define("models/variable/link/social_", ["models/variable/utility"], function(e) {
            return {
                id: "social_",
                getValue: function(t, n) {
                    return -1 !== (e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n)).indexOf("social_") ? "true" : ""
                }
            }
        }), define("models/variable/video/adStart", ["models/variable/utility"], function(e) {
            "use strict";
            return {
                id: "adStart",
                getValue: function(t, n) {
                    var r = e.getValue(t, "account", n);
                    return "adStart" === e.getValue(t, "KDPEVNT", n) && -1 === r.indexOf("wdgint") ? "true" : ""
                }
            }
        }), define("models/variable/video/video20", ["models/variable/utility"], function(e) {
            "use strict";
            return {
                id: "video20",
                getValue: function(t, n) {
                    var r = e.getValue(t, "KDPEVNT", n),
                        i = e.getValue(t, "KDPDAT_VALUE", n);
                    return "percentReached" === r && 20 == i ? "true" : ""
                }
            }
        }), define("models/variable/video/video70", ["models/variable/utility"], function(e) {
            return {
                id: "video70",
                getValue: function(t, n) {
                    var r = e.getValue(t, "KDPEVNT", n),
                        i = e.getValue(t, "KDPDAT_VALUE", n);
                    return "percentReached" === r && 70 == i ? "true" : ""
                }
            }
        }), define("models/variable/video/videoAuto", ["models/variable/video/videoStart", "models/variable/utility"], function(e, t) {
            return {
                id: "videoAuto",
                getValue: function(n, r) {
                    return t.getValue(n, "AUTO", r) && e.getValue(n, r) ? "true" : ""
                }
            }
        }), define("models/variable/video/videoSegment", ["models/variable/video/videoStart", "models/variable/int/video25", "models/variable/video/video50", "models/variable/int/video75", "models/variable/video/videoComplete", "models/variable/utility"], function(e, t, n, r, i, a) {
            return {
                id: "videoSegment",
                getValue: function(o, s) {
                    if (!o || !o.videoEvent) return "";
                    if ("emea" === a.getValue(o, "region", s)) {
                        var l = a.getValue(o, "KDPDAT_PLAYHEAD", s),
                            l = Number(o.videoEvent.KDPDAT_PLAYHEAD),
                            c = Number(o.videoEvent.VIDLEN),
                            d = l / c;
                        if (d > .75 || i.getValue(o, s)) return "4:M:75-100";
                        if (d > .5 || r.getValue(o, s)) return "3:M:50-75";
                        if (d > .25 || n.getValue(o, s)) return "2:M:25-50";
                        if (d > 0 || e.getValue(o, s) || t.getValue(o, s)) return "1:M:0-25"
                    }
                }
            }
        }), define("models/variable/video/videoSegmentViews", ["models/variable/int/video25", "models/variable/video/video50", "models/variable/int/video75", "models/variable/video/videoComplete"], function(e, t, n, r) {
            return {
                id: "videoSegmentViews",
                getValue: function(i, a) {
                    if (!i || !i.videoEvent) return "";
                    if ("emea" === (new a).region) {
                        if (e.getValue(i, a)) return "true";
                        if (t.getValue(i, a)) return "true";
                        if (n.getValue(i, a)) return "true";
                        if (r.getValue(i, a)) return "true"
                    }
                }
            }
        }), define("models/variable/allVariables", ["models/variable/common/category", "models/variable/common/categoryCode", "models/variable/common/pageName", "models/variable/common/site", "models/variable/common/siteCode", "models/variable/common/siteSection", "models/variable/common/breadcrumbs", "models/variable/app/appLoad", "models/variable/app/appSaveC", "models/variable/app/appShare", "models/variable/common/arPageName", "models/variable/common/assetComplete", "models/variable/common/assetInteractionType", "models/variable/common/assetMSTP", "models/variable/common/assetBU", "models/variable/common/assetPlayerType", "models/variable/common/assetPlayerForm", "models/variable/common/assetSecondsConsumed", "models/variable/common/assetStart", "models/variable/common/bh", "models/variable/common/bro", "models/variable/common/bw", "models/variable/common/cf", "models/variable/common/cmp", "models/variable/common/cod", "models/variable/common/dolWAVersion", "models/variable/common/dom", "models/variable/common/engagementType", "models/variable/common/error", "models/variable/common/flashVersion", "models/variable/common/fullPageName", "models/variable/common/gSwid", "models/variable/common/hootPostId", "models/variable/common/instantSearch", "models/variable/common/instantSearchResultClick", "models/variable/common/internalPromotion", "models/variable/common/internalPromotionEvent", "models/variable/common/internalSearchPhrase", "models/variable/common/jf", "models/variable/common/jsv", "models/variable/common/lan", "models/variable/common/localSessionId", "models/variable/common/localVisitorId", "models/variable/common/loginStatus", "models/variable/common/mkwid", "models/variable/common/omniId", "models/variable/common/os", "models/variable/common/pageName-internalPromotion", "models/variable/common/pageName-trackingCode", "models/variable/common/pageViewId", "models/variable/common/pgTtl", "models/variable/common/plg", "models/variable/common/plgId", "models/variable/common/prevPageName", "models/variable/common/previousPageSearch", "models/variable/common/print", "models/variable/common/printable", "models/variable/common/promoClicks", "models/variable/common/property", "models/variable/common/recommendation_source", "models/variable/common/recommendation_token", "models/variable/common/refOverride", "models/variable/common/referrer", "models/variable/common/res", "models/variable/common/searchAttempt", "models/variable/common/searchEventAttempt", "models/variable/common/searchEventAutocomplete", "models/variable/common/searchEventClose", "models/variable/common/searchEventResultClicks", "models/variable/common/searchPhrase", "models/variable/common/searchPhraseEvent", "models/variable/common/searchResultClicks", "models/variable/common/sem_cmp", "models/variable/common/seriesCode", "models/variable/common/sessionFirstPage", "models/variable/common/sessionFirstRefUrl", "models/variable/common/sessionFirstUrl", "models/variable/common/sessionHitSeq", "models/variable/common/sessionId", "models/variable/common/siteLevel4", "models/variable/common/siteLevel5", "models/variable/common/siteSectionLevel1", "models/variable/common/siteSectionLevel2", "models/variable/common/siteSectionLevel3", "models/variable/common/siteSectionLevel4", "models/variable/common/siteSectionLevelN", "models/variable/common/siteSectionPage", "models/variable/common/swid", "models/variable/common/t", "models/variable/common/timeOnPage", "models/variable/common/trackType", "models/variable/common/trackingCode", "models/variable/common/trackingCodeEvent", "models/variable/common/ua", "models/variable/common/universalPathing", "models/variable/common/unid", "models/variable/common/unidReason", "models/variable/common/url", "models/variable/common/urlDomain", "models/variable/common/urlFullDomain", "models/variable/common/urlFullDomain1", "models/variable/common/vendorLst", "models/variable/common/visitorFirstPage", "models/variable/common/visitorFirstRefUrl", "models/variable/common/visitorFirstUrl", "models/variable/common/visitorId", "models/variable/common/visitorSesSeq", "models/variable/common/adblockStatus", "models/variable/common/amoid", "models/variable/common/rrid", "models/variable/event/titlerevenue", "models/variable/event/titlerevenueCount", "models/variable/game/coreGameId", "models/variable/game/gameLoad", "models/variable/int/intFullPageName", "models/variable/int/intFullSiteSection", "models/variable/int/intPageNameLinkId", "models/variable/int/video25", "models/variable/int/video75", "models/variable/link/buy", "models/variable/link/download", "models/variable/link/linkClicks", "models/variable/link/linkModule", "models/variable/link/signup", "models/variable/link/signup_", "models/variable/link/social", "models/variable/link/social_", "models/variable/video/adStart", "models/variable/video/video20", "models/variable/video/video50", "models/variable/video/video70", "models/variable/video/videoAuto", "models/variable/video/videoComplete", "models/variable/video/videoSegment", "models/variable/video/videoSegmentViews", "models/variable/video/videoStart"], function() {
            for (var e = {}, t = arguments.length, n = 0; n < t; n++) e[arguments[n].id] = arguments[n];
            return e
        }), define("controller/vendor/utility", ["underscore", "models/variable/allVariables"], function(e, t) {
            return {
                trackOrder: ["trackType", "sessionId", "visitorId", "vendorLst", "error", "swid", "pageViewId", "pageId", "fullPageName", "arPageName", "plgId", "ua", "res", "cod", "eventLst", "categoryCode", "siteCode", "breadcrumbs", "buId", "propertyId", "seriesId", "characterId", "buCode", "propertyCode", "seriesCode", "characterCd", "contentType", "templateType", "ASSETID", "KSESSIONID", "KSESSIONSEQ", "KDPEVNT", "KDPDAT_VALUE", "KDPDAT_PLAYHEAD", "ASSETNAME", "AUTO", "KDPPROTO", "PLAYLISTID", "assetId", "gameSessionId", "gameEvent", "gameEventValue", "appSessionId", "appEvent", "appEventValue", "embFields", "embValues", "assetName", "adPageName", "adSizeList", "internalPromotion", "trackingCode", "url", "urlDomain", "urlFullDomain", "urlFullDomain1", "referrer", "linkName", "linkPosition", "linkUrl", "linkModule", "leadType", "engagementType", "engagementMeta", "loginStatus", "regFlowType", "internalSearchPhrase", "numSearchResults", "searchAutocomplete", "searchRefinement", "searchTypeCode", "prevPageName", "assetTypeCode", "visitorFirstPage", "visitorFirstRefUrl", "visitorFirstUrl", "visitorSesSeq", "sessionFirstPage", "sessionFirstRefUrl", "sessionFirstUrl", "sessionHitSeq"],
                getVariableValues: function(n, r, i, a, o, s) {
                    r = r || {};
                    var l = {
                            vendor: a,
                            trackType: i,
                            videoEvent: r,
                            gameEvent: r,
                            linkEvent: r,
                            eventEvent: r,
                            appEvent: r,
                            printEvent: r,
                            pageEvent: r,
                            unloadEvent: r
                        },
                        c = [];
                    return e.each(n, function(n, r) {
                        var i;
                        if (t[r]) {
                            var d = t[r].getValue(l, s);
                            t[r].getEventValue && (i = t[r].getEventValue(l, s)), "cto" === a && t[r].incrementValue && t[r].incrementValue(l, s), "" !== d && null != d && void 0 !== d && e.each(n, function(e) {
                                c.push({
                                    id: r,
                                    mapping: e,
                                    value: d,
                                    eventValue: i
                                })
                            })
                        } else "" !== o[r] && null != o[r] && void 0 !== o[r] && e.each(n, function(e) {
                            c.push({
                                id: r,
                                mapping: e,
                                value: o[r],
                                eventValue: i
                            })
                        })
                    }), c.events = o.events, c
                },
                getParams: function(t, n, r, i) {
                    var a = new i;
                    r = r || {};
                    var o, s, l, c, d, u, p = document.location.hostname.indexOf("shopdisney") > -1 || document.location.hostname.indexOf("disneystore") > -1 || document.location.hostname.indexOf("disneysubscription") > -1;
                    "emea" == a.region ? i.__appData.variableMap[t][n] ? (l = i.__appData.variableMap[t][n].EMEAmappings, o = i.__appData.variableMap[t][n].mappings, s = i.__appData.variableMap[t][n].events, c = i.__appData.variableMap[t][n].EMEAevents) : (o = {}, l = {}, s = {}, c = {}) : p ? i.__appData.variableMap[t][n] ? (d = i.__appData.variableMap[t][n].shopMappings, o = i.__appData.variableMap[t][n].mappings, u = i.__appData.variableMap[t][n].shopEvents, s = i.__appData.variableMap[t][n].events) : (d = {}, o = {}, u = {}, s = {}) : i.__appData.variableMap[t][n] ? (o = i.__appData.variableMap[t][n].mappings, s = i.__appData.variableMap[t][n].events) : (o = {}, s = {});
                    var m, f, g = a.getProducerInfo(r);
                    return "emea" == a.region && "omni" == n ? (m = this.getVariableValues(l, r, t, n, g, i), f = this.getVariableValues(c, r, t, n, g, i)) : p && "omni" == n ? (m = this.getVariableValues(d, r, t, n, g, i), f = this.getVariableValues(u, r, t, n, g, i)) : (m = this.getVariableValues(o, r, t, n, g, i), f = this.getVariableValues(s, r, t, n, g, i)), m = e.uniq(m, !1, function(e, t, n) {
                        return e.mapping
                    }), f = e.uniq(f, !1, function(e, t, n) {
                        return e.mapping
                    }), {
                        mappings: m,
                        eventMapping: f,
                        events: g.events
                    }
                },
                getSiteTag: function() {
                    var e = location.hostname,
                        t = location.pathname;
                    return e.indexOf("starwars.com") > -1 ? "/" == t ? "starw0" : t.indexOf("/films/rogue-one") > -1 ? "starw007" : t.indexOf("/films/solo") > -1 ? "starw008" : t.indexOf("/films/star-wars-episode-i-the-phantom-menace") > -1 ? "starw009" : t.indexOf("/films/star-wars-episode-ii-attack-of-the-clones") > -1 ? "starw00a" : t.indexOf("/films/star-wars-episode-iii-revenge-of-the-sith") > -1 ? "starw00b" : t.indexOf("/films/star-wars-episode-iv-a-new-hope") > -1 ? "starw00c" : t.indexOf("/films/star-wars-episode-v-the-empire-strikes-back") > -1 ? "starw00d" : t.indexOf("/films/star-wars-episode-vi-return-of-the-jedi") > -1 ? "starw00e" : t.indexOf("/films/star-wars-episode-vii-the-force-awakens") > -1 ? "starw00f" : t.indexOf("/films/star-wars-episode-viii-the-last-jedi") > -1 ? "starw00g" : t.indexOf("/films") > -1 ? "starw002" : null : null
                }
            }
        }), define("controller/vendor/CTO", ["underscore", "bean", "controller/vendor/utility", "models/variable/common/print", "models/variable/utility", "reqwest", "url"], function(e, t, n, r, i, a, o) {
            var s = {
                    checkForPrintTrack: function(e) {
                        if (r.getValue({
                                linkEvent: e
                            }, CTO)) {
                            var t = n.getParams("tPr", "cto", e, CTO);
                            u.send(t, CTO, "tPr")
                        }
                    },
                    trackPage: function(e, t) {
                        e = e || {};
                        var r = n.getParams("tP", "cto", e, t);
                        u.send(r, t, "tP")
                    },
                    trackLink: function(e, t) {
                        e = e || {}, this.checkForPrintTrack(e);
                        var r = n.getParams("tL", "cto", e, t);
                        u.send(r, t, "tL")
                    },
                    trackVideo: function(e, t) {
                        e = e || {};
                        var r = n.getParams("tV", "cto", e, t);
                        u.send(r, t, "tV")
                    },
                    trackGame: function(e, t) {
                        e = e || {};
                        var r = n.getParams("tG", "cto", e, t);
                        u.send(r, t, "tG")
                    },
                    trackEvent: function(e, t) {
                        e = e || {};
                        var r = n.getParams("tE", "cto", e, t);
                        u.send(r, t, "tE")
                    },
                    trackApp: function(e, t) {
                        e = e || {};
                        var r = n.getParams("tA", "cto", e, t);
                        u.send(r, t, "tA")
                    },
                    trackPrint: function(e, t) {
                        e = e || {};
                        var r = n.getParams("tPr", "cto", e, t);
                        u.send(r, t, "tPr")
                    },
                    trackUnload: function(e, t) {
                        e = e || {};
                        var r = n.getParams("tU", "cto", e, t);
                        u.send(r, t, "tU")
                    }
                },
                l = i.getValue({}, "account", CTO),
                c = "https://di-dtaectolog-us-prod-1.appspot.com/cto/v2/web",
                d = "GAE 3253e943-7456-45a7-bfde-9205d99d3ac9";
            0 !== l.indexOf("dev") && -1 === location.hostname.indexOf("diznee.net") && -1 === location.hostname.indexOf("dev.") && -1 === location.hostname.indexOf("qa.") || (c = "https://di-dtaectolog-us-dev-1.appspot.com/cto/v2/web", d = "GAE 44B0FF8C-8401-40F8-B80A-E7BB4C6C5A6F"), t.on(window, "CTOReady", function() {
                a({
                    url: c,
                    withCredentials: !0,
                    type: "png",
                    crossOrigin: !0,
                    contentType: "application/json",
                    method: "post",
                    data: JSON.stringify({
                        dolWAVer: "4.5.55",
                        trckTp: "trackcto",
                        pgVwId: window.cto.firstPageViewId,
                        url: escape(location.href),
                        userAgent: escape(navigator.userAgent)
                    }),
                    headers: {
                        Authorization: d
                    }
                })
            });
            var u = {
                trackOrder: ["trackType", "sessionId", "visitorId", "localSessionId", "localVisitorId", "vendorLst", "error", "swid", "pageViewId", "pageId", "fullPageName", "arPageName", "plgId", "ua", "eventLst", "assetName", "categoryCode", "siteCode", "breadcrumbs", "buId", "propertyId", "seriesId", "characterId", "buCode", "propertyCode", "seriesCode", "characterCd", "contentType", "templateType", "coreGameId", "COREVIDEOID", "coreId", "ASSETID", "KSESSIONID", "KSESSIONSEQ", "KDPEVNT", "KDPDAT_VALUE", "KDPDAT_PLAYHEAD", "ASSETNAME", "AUTO", "KDPPROTO", "PLAYLISTID", "assetId", "res", "cod", "gameSessionId", "gameEvent", "gameEventValue", "appSessionId", "appEvent", "appEventValue", "embFields", "embValues", "adPageName", "adSizeList", "internalPromotion", "trackingCode", "url", "urlDomain", "urlFullDomain", "urlFullDomain1", "referrer", "linkName", "linkPosition", "linkUrl", "linkModule", "leadType", "engagementType", "engagementMeta", "loginStatus", "regFlowType", "internalSearchPhrase", "numSearchResults", "searchAutocomplete", "searchRefinement", "searchTypeCode", "prevPageName", "assetTypeCode", "visitorFirstPage", "visitorFirstRefUrl", "visitorFirstUrl", "visitorSesSeq", "sessionFirstPage", "sessionFirstRefUrl", "sessionFirstUrl", "sessionHitSeq"],
                send: function(t, n, r) {
                    function o(e) {
                        (new Image).src = e
                    }

                    function s(e, t) {
                        try {
                            a({
                                url: e,
                                withCredentials: !0,
                                type: "png",
                                crossOrigin: !0,
                                headers: {
                                    Authorization: t
                                },
                                error: function(e) {
                                    var t = e.responseText || encodeURIComponent("Error in preflight request"),
                                        r = (new n).getCTOValue("dolWAVersion", n);
                                    o(h + "/error?ver=" + r + "&msg=Error encountered while sending data&err=" + t)
                                }
                            })
                        } catch (e) {
                            var r = e.stack,
                                i = (new n).getCTOValue("dolWAVersion", n),
                                s = h + "/error?ver=" + i + "&msg=Error encountered sending data&err=" + r;
                            o(s)
                        }
                    }
                    if (t.mappings && t.mappings.length || t.eventMapping && t.eventMapping.length) {
                        if ("emea" != (new n).region) {
                            var l = function(t, n) {
                                var r = e.indexOf(u.trackOrder, t.id),
                                    i = e.indexOf(u.trackOrder, n.id);
                                return -1 === r && -1 === i ? 0 : -1 === r ? 1 : -1 === i ? -1 : r > i ? 1 : r < i ? -1 : 0
                            };
                            t.mappings = t.mappings.sort(l);
                            var c = [];
                            if (e.each(t.eventMapping, function(e) {
                                    e.eventValue || 0 == e.eventValue ? c.push(e.mapping + "=" + escape(e.eventValue)) : c.push(e.mapping)
                                }), t.events) {
                                var d = t.events.split(",");
                                for (var p in d) c.push(d[p])
                            }
                            var m = e.uniq(c);
                            m = m.join(",");
                            var f = "",
                                g = {};
                            e.each(t.mappings, function(e, t) {
                                f += "&" + e.mapping + "=" + escape(e.value), g[e.mapping] = e.value, 1 === t && m && (f += "&eventLst=" + escape(m), g.eventLst = e.eventList)
                            });
                            var v = i.getValue({}, "account", n),
                                h = "https://di-dtaectolog-us-prod-1.appspot.com/cto/v2/web",
                                y = "GAE 3253e943-7456-45a7-bfde-9205d99d3ac9";
                            0 !== v.indexOf("dev") && -1 === location.hostname.indexOf("diznee.net") && -1 === location.hostname.indexOf("dev.") && -1 === location.hostname.indexOf("qa.") || (h = "https://di-dtaectolog-us-dev-1.appspot.com/cto/v2/web", y = "GAE 44B0FF8C-8401-40F8-B80A-E7BB4C6C5A6F");
                            var b = Math.floor(1e3 * Math.random());
                            g.app = "w88_dolwa_prod03", g.dc = b;
                            var _ = h + "?app=w88_dolwa_prod03" + f + "&dc=" + b,
                                w = 0;
                            "tL" != r ? s(_, y) : function(e, t, r, i) {
                                try {
                                    a({
                                        url: e,
                                        withCredentials: !0,
                                        type: "png",
                                        crossOrigin: !0,
                                        contentType: "application/json",
                                        method: "post",
                                        data: JSON.stringify(r),
                                        headers: {
                                            Authorization: t
                                        },
                                        error: function(e) {
                                            if (!(w++ < 1)) {
                                                var r = e.responseText || encodeURIComponent("Error in preflight request"),
                                                    a = (new n).getCTOValue("dolWAVersion", n);
                                                return o(h + "/error?ver=" + a + "&msg=Error encountered while sending data&err=" + r), !1
                                            }
                                            if (s(i, t)) return !0
                                        }
                                    })
                                } catch (e) {
                                    var l = e.stack,
                                        c = (new n).getCTOValue("dolWAVersion", n),
                                        d = h + "/error?ver=" + c + "&msg=Error encountered sending data&err=" + l;
                                    return o(d), !1
                                }
                            }(h, y, g, _)
                        }
                    }
                }
            };
            return t.on(window, "trackVideoCTO", function(e) {
                var n = new CTO,
                    r = n.getCTOValue("visitorFirstUrl", CTO),
                    i = n.getCTOValue("url", CTO),
                    a = {
                        visitorId: n.getCTOValue("visitorId", CTO),
                        subdomain: o("hostname", i),
                        videoSessionId: e.KSESSIONID,
                        videoSequenceNum: e.KSESSIONSEQ,
                        pageTitle: n.getCTOValue("pgTtl", CTO),
                        firstUrlSubdomain: o("hostname", r)
                    };
                t.fire(window, "cto-ddn-video", a)
            }), s
        }), define("scode", [], function() {
            var e = function(t) {
                    var n = this;
                    n.version = "2.10.0";
                    var r = window;
                    r.s_c_in || (r.s_c_il = [], r.s_c_in = 0), n._il = r.s_c_il, n._in = r.s_c_in, n._il[n._in] = n, r.s_c_in++, n._c = "s_c";
                    var i = e.Nb;
                    i || (i = null);
                    var a, o, s = r;
                    try {
                        for (a = s.parent, o = s.location; a && a.location && o && "" + a.location != "" + o && s.location && "" + a.location != "" + s.location && a.location.host == o.host;) s = a, a = s.parent
                    } catch (e) {}
                    n.D = function(e) {
                        try {
                            console.log(e)
                        } catch (e) {}
                    }, n.Ha = function(e) {
                        return "" + parseInt(e) == "" + e
                    }, n.replace = function(e, t, n) {
                        return !e || 0 > e.indexOf(t) ? e : e.split(t).join(n)
                    }, n.escape = function(e) {
                        var t, r;
                        if (!e) return e;
                        for (e = encodeURIComponent(e), t = 0; 7 > t; t++) r = "+~!*()'".substring(t, t + 1), 0 <= e.indexOf(r) && (e = n.replace(e, r, "%" + r.charCodeAt(0).toString(16).toUpperCase()));
                        return e
                    }, n.unescape = function(e) {
                        if (!e) return e;
                        e = 0 <= e.indexOf("+") ? n.replace(e, "+", " ") : e;
                        try {
                            return decodeURIComponent(e)
                        } catch (e) {}
                        return unescape(e)
                    }, n.ub = function() {
                        var e, t = r.location.hostname,
                            i = n.fpCookieDomainPeriods;
                        if (i || (i = n.cookieDomainPeriods), t && !n.za && !/^[0-9.]+$/.test(t) && (i = i ? parseInt(i) : 2, i = 2 < i ? i : 2, 0 <= (e = t.lastIndexOf(".")))) {
                            for (; 0 <= e && 1 < i;) e = t.lastIndexOf(".", e - 1), i--;
                            n.za = 0 < e ? t.substring(e) : t
                        }
                        return n.za
                    }, n.c_r = n.cookieRead = function(e) {
                        e = n.escape(e);
                        var t = " " + n.d.cookie,
                            r = t.indexOf(" " + e + "="),
                            i = 0 > r ? r : t.indexOf(";", r);
                        return e = 0 > r ? "" : n.unescape(t.substring(r + 2 + e.length, 0 > i ? t.length : i)), "[[B]]" != e ? e : ""
                    }, n.c_w = n.cookieWrite = function(e, t, r) {
                        var i, a = n.ub(),
                            o = n.cookieLifetime;
                        return t = "" + t, o = o ? ("" + o).toUpperCase() : "", r && "SESSION" != o && "NONE" != o && ((i = "" != t ? parseInt(o || 0) : -60) ? (r = new Date, r.setTime(r.getTime() + 1e3 * i)) : 1 === r && (r = new Date, i = r.getYear(), r.setYear(i + 2 + (1900 > i ? 1900 : 0)))), e && "NONE" != o ? (n.d.cookie = n.escape(e) + "=" + n.escape("" != t ? t : "[[B]]") + "; path=/;" + (r && "SESSION" != o ? " expires=" + r.toUTCString() + ";" : "") + (a ? " domain=" + a + ";" : ""), n.cookieRead(e) == t) : 0
                    }, n.rb = function() {
                        var e = n.Util.getIeVersion();
                        "number" == typeof e && 10 > e && (n.unsupportedBrowser = !0, n.gb(n, function() {}))
                    }, n.gb = function(e, t) {
                        for (var n in e) e.hasOwnProperty(n) && "function" == typeof e[n] && (e[n] = t)
                    }, n.L = [], n.ba = function(e, t, r) {
                        if (n.Aa) return 0;
                        n.maxDelay || (n.maxDelay = 250);
                        var i = 0,
                            a = (new Date).getTime() + n.maxDelay,
                            o = n.d.visibilityState,
                            s = ["webkitvisibilitychange", "visibilitychange"];
                        if (o || (o = n.d.webkitVisibilityState), o && "prerender" == o) {
                            if (!n.ca)
                                for (n.ca = 1, r = 0; r < s.length; r++) n.d.addEventListener(s[r], function() {
                                    var e = n.d.visibilityState;
                                    e || (e = n.d.webkitVisibilityState), "visible" == e && (n.ca = 0, n.delayReady())
                                });
                            i = 1, a = 0
                        } else r || n.o("_d") && (i = 1);
                        return i && (n.L.push({
                            m: e,
                            a: t,
                            t: a
                        }), n.ca || setTimeout(n.delayReady, n.maxDelay)), i
                    }, n.delayReady = function() {
                        var e, t = (new Date).getTime(),
                            r = 0;
                        for (n.o("_d") ? r = 1 : n.ra(); 0 < n.L.length;) {
                            if (e = n.L.shift(), r && !e.t && e.t > t) {
                                n.L.unshift(e), setTimeout(n.delayReady, parseInt(n.maxDelay / 2));
                                break
                            }
                            n.Aa = 1, n[e.m].apply(n, e.a), n.Aa = 0
                        }
                    }, n.setAccount = n.sa = function(e) {
                        var t, r;
                        if (!n.ba("setAccount", arguments))
                            if (n.account = e, n.allAccounts)
                                for (t = n.allAccounts.concat(e.split(",")), n.allAccounts = [], t.sort(), r = 0; r < t.length; r++) 0 != r && t[r - 1] == t[r] || n.allAccounts.push(t[r]);
                            else n.allAccounts = e.split(",")
                    }, n.foreachVar = function(e, t) {
                        var r, i, a, o, s = "";
                        for (a = i = "", n.lightProfileID ? (r = n.P, (s = n.lightTrackVars) && (s = "," + s + "," + n.ga.join(",") + ",")) : (r = n.g, (n.pe || n.linkType) && (s = n.linkTrackVars, i = n.linkTrackEvents, n.pe && (a = n.pe.substring(0, 1).toUpperCase() + n.pe.substring(1), n[a] && (s = n[a].Lb, i = n[a].Kb))), s && (s = "," + s + "," + n.G.join(",") + ","), i && s && (s += ",events,")), t && (t = "," + t + ","), i = 0; i < r.length; i++) a = r[i], (o = n[a]) && (!s || 0 <= s.indexOf("," + a + ",")) && (!t || 0 <= t.indexOf("," + a + ",")) && e(a, o)
                    }, n.q = function(e, t, r, i, a) {
                        var o, s, l, c, d = "",
                            u = 0;
                        if ("contextData" == e && (e = "c"), t) {
                            for (o in t)
                                if (!(Object.prototype[o] || a && o.substring(0, a.length) != a) && t[o] && (!r || 0 <= r.indexOf("," + (i ? i + "." : "") + o + ","))) {
                                    if (l = !1, u)
                                        for (s = 0; s < u.length; s++) o.substring(0, u[s].length) == u[s] && (l = !0);
                                    if (!l && ("" == d && (d += "&" + e + "."), s = t[o], a && (o = o.substring(a.length)), 0 < o.length))
                                        if (0 < (l = o.indexOf("."))) s = o.substring(0, l), l = (a || "") + s + ".", u || (u = []), u.push(l), d += n.q(s, t, r, i, l);
                                        else if ("boolean" == typeof s && (s = s ? "true" : "false"), s) {
                                        if ("retrieveLightData" == i && 0 > a.indexOf(".contextData.")) switch (l = o.substring(0, 4), c = o.substring(4), o) {
                                            case "transactionID":
                                                o = "xact";
                                                break;
                                            case "channel":
                                                o = "ch";
                                                break;
                                            case "campaign":
                                                o = "v0";
                                                break;
                                            default:
                                                n.Ha(c) && ("prop" == l ? o = "c" + c : "eVar" == l ? o = "v" + c : "list" == l ? o = "l" + c : "hier" == l && (o = "h" + c, s = s.substring(0, 255)))
                                        }
                                        d += "&" + n.escape(o) + "=" + n.escape(s)
                                    }
                                }
                            "" != d && (d += "&." + e)
                        }
                        return d
                    }, n.usePostbacks = 0, n.xb = function() {
                        var e, t, r, a, o, s, l, c, d = "",
                            u = "",
                            p = "",
                            m = a = "";
                        if (n.lightProfileID ? (e = n.P, (u = n.lightTrackVars) && (u = "," + u + "," + n.ga.join(",") + ",")) : (e = n.g, (n.pe || n.linkType) && (u = n.linkTrackVars, p = n.linkTrackEvents, n.pe && (a = n.pe.substring(0, 1).toUpperCase() + n.pe.substring(1), n[a] && (u = n[a].Lb, p = n[a].Kb))), u && (u = "," + u + "," + n.G.join(",") + ","), p && (p = "," + p + ",", u && (u += ",events,")), n.events2 && (m += ("" != m ? "," : "") + n.events2)), n.visitor && n.visitor.getCustomerIDs) {
                            if (a = i, o = n.visitor.getCustomerIDs())
                                for (t in o) Object.prototype[t] || "object" == typeof(r = o[t]) && (a || (a = {}), r.id && (a[t + ".id"] = r.id), r.authState && (a[t + ".as"] = r.authState));
                            a && (d += n.q("cid", a))
                        }
                        for (n.AudienceManagement && n.AudienceManagement.isReady() && (d += n.q("d", n.AudienceManagement.getEventCallConfigParams())), t = 0; t < e.length; t++) {
                            if (a = e[t], o = n[a], r = a.substring(0, 4), s = a.substring(4), o || ("events" == a && m ? (o = m, m = "") : "marketingCloudOrgID" == a && n.visitor && (o = n.visitor.marketingCloudOrgID)), o && (!u || 0 <= u.indexOf("," + a + ","))) {
                                switch (a) {
                                    case "customerPerspective":
                                        a = "cp";
                                        break;
                                    case "marketingCloudOrgID":
                                        a = "mcorgid";
                                        break;
                                    case "supplementalDataID":
                                        a = "sdid";
                                        break;
                                    case "timestamp":
                                        a = "ts";
                                        break;
                                    case "dynamicVariablePrefix":
                                        a = "D";
                                        break;
                                    case "visitorID":
                                        a = "vid";
                                        break;
                                    case "marketingCloudVisitorID":
                                        a = "mid";
                                        break;
                                    case "analyticsVisitorID":
                                        a = "aid";
                                        break;
                                    case "audienceManagerLocationHint":
                                        a = "aamlh";
                                        break;
                                    case "audienceManagerBlob":
                                        a = "aamb";
                                        break;
                                    case "authState":
                                        a = "as";
                                        break;
                                    case "pageURL":
                                        a = "g", 255 < o.length && (n.pageURLRest = o.substring(255), o = o.substring(0, 255));
                                        break;
                                    case "pageURLRest":
                                        a = "-g";
                                        break;
                                    case "referrer":
                                        a = "r";
                                        break;
                                    case "vmk":
                                    case "visitorMigrationKey":
                                        a = "vmt";
                                        break;
                                    case "visitorMigrationServer":
                                        a = "vmf", n.ssl && n.visitorMigrationServerSecure && (o = "");
                                        break;
                                    case "visitorMigrationServerSecure":
                                        a = "vmf", !n.ssl && n.visitorMigrationServer && (o = "");
                                        break;
                                    case "charSet":
                                        a = "ce";
                                        break;
                                    case "visitorNamespace":
                                        a = "ns";
                                        break;
                                    case "cookieDomainPeriods":
                                        a = "cdp";
                                        break;
                                    case "cookieLifetime":
                                        a = "cl";
                                        break;
                                    case "variableProvider":
                                        a = "vvp";
                                        break;
                                    case "currencyCode":
                                        a = "cc";
                                        break;
                                    case "channel":
                                        a = "ch";
                                        break;
                                    case "transactionID":
                                        a = "xact";
                                        break;
                                    case "campaign":
                                        a = "v0";
                                        break;
                                    case "latitude":
                                        a = "lat";
                                        break;
                                    case "longitude":
                                        a = "lon";
                                        break;
                                    case "resolution":
                                        a = "s";
                                        break;
                                    case "colorDepth":
                                        a = "c";
                                        break;
                                    case "javascriptVersion":
                                        a = "j";
                                        break;
                                    case "javaEnabled":
                                        a = "v";
                                        break;
                                    case "cookiesEnabled":
                                        a = "k";
                                        break;
                                    case "browserWidth":
                                        a = "bw";
                                        break;
                                    case "browserHeight":
                                        a = "bh";
                                        break;
                                    case "connectionType":
                                        a = "ct";
                                        break;
                                    case "homepage":
                                        a = "hp";
                                        break;
                                    case "events":
                                        if (m && (o += ("" != o ? "," : "") + m), p)
                                            for (s = o.split(","), o = "", r = 0; r < s.length; r++) l = s[r], c = l.indexOf("="), 0 <= c && (l = l.substring(0, c)), c = l.indexOf(":"), 0 <= c && (l = l.substring(0, c)), 0 <= p.indexOf("," + l + ",") && (o += (o ? "," : "") + s[r]);
                                        break;
                                    case "events2":
                                        o = "";
                                        break;
                                    case "contextData":
                                        d += n.q("c", n[a], u, a), o = "";
                                        break;
                                    case "lightProfileID":
                                        a = "mtp";
                                        break;
                                    case "lightStoreForSeconds":
                                        a = "mtss", n.lightProfileID || (o = "");
                                        break;
                                    case "lightIncrementBy":
                                        a = "mti", n.lightProfileID || (o = "");
                                        break;
                                    case "retrieveLightProfiles":
                                        a = "mtsr";
                                        break;
                                    case "deleteLightProfiles":
                                        a = "mtsd";
                                        break;
                                    case "retrieveLightData":
                                        n.retrieveLightProfiles && (d += n.q("mts", n[a], u, a)), o = "";
                                        break;
                                    default:
                                        n.Ha(s) && ("prop" == r ? a = "c" + s : "eVar" == r ? a = "v" + s : "list" == r ? a = "l" + s : "hier" == r && (a = "h" + s, o = o.substring(0, 255)))
                                }
                                o && (d += "&" + a + "=" + ("pev" != a.substring(0, 3) ? n.escape(o) : o))
                            }
                            "pev3" == a && n.e && (d += n.e)
                        }
                        return n.fa && (d += "&lrt=" + n.fa, n.fa = null), d
                    }, n.C = function(e) {
                        var t = e.tagName;
                        return "undefined" != "" + e.Qb || "undefined" != "" + e.Gb && "HTML" != ("" + e.Gb).toUpperCase() ? "" : (t = t && t.toUpperCase ? t.toUpperCase() : "", "SHAPE" == t && (t = ""), t && (("INPUT" == t || "BUTTON" == t) && e.type && e.type.toUpperCase ? t = e.type.toUpperCase() : !t && e.href && (t = "A")), t)
                    }, n.Da = function(e) {
                        var t, n, i, a = r.location,
                            o = e.href ? e.href : "";
                        return t = o.indexOf(":"), n = o.indexOf("?"), i = o.indexOf("/"), o && (0 > t || 0 <= n && t > n || 0 <= i && t > i) && (n = e.protocol && 1 < e.protocol.length ? e.protocol : a.protocol ? a.protocol : "", t = a.pathname.lastIndexOf("/"), o = (n ? n + "//" : "") + (e.host ? e.host : a.host ? a.host : "") + ("/" != o.substring(0, 1) ? a.pathname.substring(0, 0 > t ? 0 : t) + "/" : "") + o), o
                    }, n.M = function(e) {
                        var t, r, i = n.C(e),
                            a = "",
                            o = 0;
                        return i && (t = e.protocol, r = e.onclick, !e.href || "A" != i && "AREA" != i || r && t && !(0 > t.toLowerCase().indexOf("javascript")) ? r ? (a = n.replace(n.replace(n.replace(n.replace("" + r, "\r", ""), "\n", ""), "\t", ""), " ", ""), o = 2) : "INPUT" == i || "SUBMIT" == i ? (e.value ? a = e.value : e.innerText ? a = e.innerText : e.textContent && (a = e.textContent), o = 3) : "IMAGE" == i && e.src && (a = e.src) : a = n.Da(e), a) ? {
                            id: a.substring(0, 100),
                            type: o
                        } : 0
                    }, n.Ob = function(e) {
                        for (var t = n.C(e), r = n.M(e); e && !r && "BODY" != t;)(e = e.parentElement ? e.parentElement : e.parentNode) && (t = n.C(e), r = n.M(e));
                        return r && "BODY" != t || (e = 0), e && (t = e.onclick ? "" + e.onclick : "", 0 <= t.indexOf(".tl(") || 0 <= t.indexOf(".trackLink(")) && (e = 0), e
                    }, n.Fb = function() {
                        var e, t, i, a, o = n.linkObject,
                            s = n.linkType,
                            l = n.linkURL;
                        if (n.ha = 1, o || (n.ha = 0, o = n.clickObject), o) {
                            for (e = n.C(o), t = n.M(o); o && !t && "BODY" != e;)(o = o.parentElement ? o.parentElement : o.parentNode) && (e = n.C(o), t = n.M(o));
                            if (t && "BODY" != e || (o = 0), o && !n.linkObject) {
                                var c = o.onclick ? "" + o.onclick : "";
                                (0 <= c.indexOf(".tl(") || 0 <= c.indexOf(".trackLink(")) && (o = 0)
                            }
                        } else n.ha = 1;
                        if (!l && o && (l = n.Da(o)), l && !n.linkLeaveQueryString && 0 <= (i = l.indexOf("?")) && (l = l.substring(0, i)), !s && l) {
                            var d, u = 0,
                                p = 0;
                            if (n.trackDownloadLinks && n.linkDownloadFileTypes)
                                for (c = l.toLowerCase(), i = c.indexOf("?"), a = c.indexOf("#"), 0 <= i ? 0 <= a && a < i && (i = a) : i = a, 0 <= i && (c = c.substring(0, i)), i = n.linkDownloadFileTypes.toLowerCase().split(","), a = 0; a < i.length; a++)(d = i[a]) && c.substring(c.length - (d.length + 1)) == "." + d && (s = "d");
                            if (n.trackExternalLinks && !s && (c = l.toLowerCase(), n.Ga(c) && (n.linkInternalFilters || (n.linkInternalFilters = r.location.hostname), i = 0, n.linkExternalFilters ? (i = n.linkExternalFilters.toLowerCase().split(","), u = 1) : n.linkInternalFilters && (i = n.linkInternalFilters.toLowerCase().split(",")), i))) {
                                for (a = 0; a < i.length; a++) d = i[a], 0 <= c.indexOf(d) && (p = 1);
                                p ? u && (s = "e") : u || (s = "e")
                            }
                        }
                        n.linkObject = o, n.linkURL = l, n.linkType = s, (n.trackClickMap || n.trackInlineStats) && (n.e = "", o && (s = n.pageName, l = 1, o = o.sourceIndex, s || (s = n.pageURL, l = 0), r.s_objectID && (t.id = r.s_objectID, o = t.type = 1), s && t && t.id && e && (n.e = "&pid=" + n.escape(s.substring(0, 255)) + (l ? "&pidt=" + l : "") + "&oid=" + n.escape(t.id.substring(0, 100)) + (t.type ? "&oidt=" + t.type : "") + "&ot=" + e + (o ? "&oi=" + o : ""))))
                    }, n.yb = function() {
                        var e = n.ha,
                            t = n.linkType,
                            r = n.linkURL,
                            i = n.linkName;
                        if (t && (r || i) && (t = t.toLowerCase(), "d" != t && "e" != t && (t = "o"), n.pe = "lnk_" + t, n.pev1 = r ? n.escape(r) : "", n.pev2 = i ? n.escape(i) : "", e = 1), n.abort && (e = 0), n.trackClickMap || n.trackInlineStats || n.Bb()) {
                            var a, o, s, t = {},
                                r = 0,
                                l = n.cookieRead("s_sq"),
                                c = l ? l.split("&") : 0,
                                l = 0;
                            if (c)
                                for (a = 0; a < c.length; a++) o = c[a].split("="), i = n.unescape(o[0]).split(","), o = n.unescape(o[1]), t[o] = i;
                            i = n.account.split(","), a = {};
                            for (s in n.contextData) s && !Object.prototype[s] && "a.activitymap." == s.substring(0, 14) && (a[s] = n.contextData[s], n.contextData[s] = "");
                            if (n.e = n.q("c", a) + (n.e ? n.e : ""), e || n.e) {
                                e && !n.e && (l = 1);
                                for (o in t)
                                    if (!Object.prototype[o])
                                        for (s = 0; s < i.length; s++)
                                            for (l && (c = t[o].join(",")) == n.account && (n.e += ("&" != o.charAt(0) ? "&" : "") + o, t[o] = [], r = 1), a = 0; a < t[o].length; a++)(c = t[o][a]) == i[s] && (l && (n.e += "&u=" + n.escape(c) + ("&" != o.charAt(0) ? "&" : "") + o + "&u=0"), t[o].splice(a, 1), r = 1);
                                if (e || (r = 1), r) {
                                    l = "", a = 2, !e && n.e && (l = n.escape(i.join(",")) + "=" + n.escape(n.e), a = 1);
                                    for (o in t) !Object.prototype[o] && 0 < a && 0 < t[o].length && (l += (l ? "&" : "") + n.escape(t[o].join(",")) + "=" + n.escape(o), a--);
                                    n.cookieWrite("s_sq", l)
                                }
                            }
                        }
                        return e
                    }, n.zb = function() {
                        if (!n.Jb) {
                            var e, t, r = new Date,
                                i = s.location,
                                a = t = e = "",
                                o = "",
                                l = "",
                                c = "1.2",
                                d = n.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                                u = "",
                                p = "";
                            if (r.setUTCDate && (c = "1.3", (0).toPrecision && (c = "1.5", r = [], r.forEach))) {
                                c = "1.6", t = 0, e = {};
                                try {
                                    t = new Iterator(e), t.next && (c = "1.7", r.reduce && (c = "1.8", c.trim && (c = "1.8.1", Date.parse && (c = "1.8.2", Object.create && (c = "1.8.5")))))
                                } catch (e) {}
                            }
                            e = screen.width + "x" + screen.height, a = navigator.javaEnabled() ? "Y" : "N", t = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, o = n.w.innerWidth ? n.w.innerWidth : n.d.documentElement.offsetWidth, l = n.w.innerHeight ? n.w.innerHeight : n.d.documentElement.offsetHeight;
                            try {
                                n.b.addBehavior("#default#homePage"), u = n.b.Pb(i) ? "Y" : "N"
                            } catch (e) {}
                            try {
                                n.b.addBehavior("#default#clientCaps"), p = n.b.connectionType
                            } catch (e) {}
                            n.resolution = e, n.colorDepth = t, n.javascriptVersion = c, n.javaEnabled = a, n.cookiesEnabled = d, n.browserWidth = o, n.browserHeight = l, n.connectionType = p, n.homepage = u, n.Jb = 1
                        }
                    }, n.Q = {}, n.loadModule = function(e, t) {
                        var i = n.Q[e];
                        if (!i) {
                            i = r["AppMeasurement_Module_" + e] ? new r["AppMeasurement_Module_" + e](n) : {}, n.Q[e] = n[e] = i, i.ab = function() {
                                return i.fb
                            }, i.hb = function(t) {
                                (i.fb = t) && (n[e + "_onLoad"] = t, n.ba(e + "_onLoad", [n, i], 1) || t(n, i))
                            };
                            try {
                                Object.defineProperty ? Object.defineProperty(i, "onLoad", {
                                    get: i.ab,
                                    set: i.hb
                                }) : i._olc = 1
                            } catch (e) {
                                i._olc = 1
                            }
                        }
                        t && (n[e + "_onLoad"] = t, n.ba(e + "_onLoad", [n, i], 1) || t(n, i))
                    }, n.o = function(e) {
                        var t, r;
                        for (t in n.Q)
                            if (!Object.prototype[t] && (r = n.Q[t]) && (r._olc && r.onLoad && (r._olc = 0, r.onLoad(n, r)), r[e] && r[e]())) return 1;
                        return 0
                    }, n.Bb = function() {
                        return !(!n.ActivityMap || !n.ActivityMap._c)
                    }, n.Cb = function() {
                        var e = Math.floor(1e13 * Math.random()),
                            t = n.visitorSampling,
                            r = n.visitorSamplingGroup,
                            r = "s_vsn_" + (n.visitorNamespace ? n.visitorNamespace : n.account) + (r ? "_" + r : ""),
                            i = n.cookieRead(r);
                        if (t) {
                            if (t *= 100, i && (i = parseInt(i)), !i) {
                                if (!n.cookieWrite(r, e)) return 0;
                                i = e
                            }
                            if (i % 1e4 > t) return 0
                        }
                        return 1
                    }, n.R = function(e, t) {
                        var r, i, a, o, s, l;
                        for (r = 0; 2 > r; r++)
                            for (i = 0 < r ? n.va : n.g, a = 0; a < i.length; a++)
                                if (o = i[a], (s = e[o]) || e["!" + o]) {
                                    if (!t && ("contextData" == o || "retrieveLightData" == o) && n[o])
                                        for (l in n[o]) s[l] || (s[l] = n[o][l]);
                                    n[o] = s
                                }
                    }, n.Ra = function(e, t) {
                        var r, i, a, o;
                        for (r = 0; 2 > r; r++)
                            for (i = 0 < r ? n.va : n.g, a = 0; a < i.length; a++) o = i[a], e[o] = n[o], t || e[o] || (e["!" + o] = 1)
                    }, n.tb = function(e) {
                        var t, n, r, i, a, o, s = 0,
                            l = "",
                            c = "";
                        if (e && 255 < e.length && (t = "" + e, 0 < (n = t.indexOf("?")) && (o = t.substring(n + 1), t = t.substring(0, n), i = t.toLowerCase(), r = 0, "http://" == i.substring(0, 7) ? r += 7 : "https://" == i.substring(0, 8) && (r += 8), 0 < (n = i.indexOf("/", r)) && (i = i.substring(r, n), a = t.substring(n), t = t.substring(0, n), 0 <= i.indexOf("google") ? s = ",q,ie,start,search_key,word,kw,cd," : 0 <= i.indexOf("yahoo.co") && (s = ",p,ei,"), s && o)))) {
                            if ((e = o.split("&")) && 1 < e.length) {
                                for (r = 0; r < e.length; r++) i = e[r], n = i.indexOf("="), 0 < n && 0 <= s.indexOf("," + i.substring(0, n) + ",") ? l += (l ? "&" : "") + i : c += (c ? "&" : "") + i;
                                l && c ? o = l + "&" + c : c = ""
                            }
                            n = 253 - (o.length - c.length) - t.length, e = t + (0 < n ? a.substring(0, n) : "") + "?" + o
                        }
                        return e
                    }, n.Va = function(e) {
                        var t = n.d.visibilityState,
                            r = ["webkitvisibilitychange", "visibilitychange"];
                        if (t || (t = n.d.webkitVisibilityState), t && "prerender" == t) {
                            if (e)
                                for (t = 0; t < r.length; t++) n.d.addEventListener(r[t], function() {
                                    var t = n.d.visibilityState;
                                    t || (t = n.d.webkitVisibilityState), "visible" == t && e()
                                });
                            return !1
                        }
                        return !0
                    }, n.X = !1, n.J = !1, n.jb = function() {
                        n.J = !0, n.H()
                    }, n.Y = !1, n.S = !1, n.kb = function(e) {
                        n.marketingCloudVisitorID = e.MCMID, n.visitorOptedOut = e.MCOPTOUT, n.analyticsVisitorID = e.MCAID, n.audienceManagerLocationHint = e.MCAAMLH, n.audienceManagerBlob = e.MCAAMB, n.S = !0, n.H()
                    }, n.Ua = function(e) {
                        return n.maxDelay || (n.maxDelay = 250), !n.o("_d") || (e && setTimeout(function() {
                            e()
                        }, n.maxDelay), !1)
                    }, n.W = !1, n.I = !1, n.ra = function() {
                        n.I = !0, n.H()
                    }, n.isReadyToTrack = function() {
                        var e = !0,
                            t = n.visitor;
                        return n.X || n.J || (n.Va(n.jb) ? n.J = !0 : n.X = !0), !(n.X && !n.J) && (t && t.isAllowed() && (n.Y || n.marketingCloudVisitorID || !t.getVisitorValues || (n.Y = !0, n.marketingCloudVisitorID ? n.S = !0 : t.getVisitorValues(n.kb)), e = !(n.Y && !n.S && !n.marketingCloudVisitorID)), n.W || n.I || (n.Ua(n.ra) ? n.I = !0 : n.W = !0), n.W && !n.I && (e = !1), e)
                    }, n.l = i, n.r = 0, n.callbackWhenReadyToTrack = function(e, t, r) {
                        var a;
                        a = {}, a.ob = e, a.nb = t, a.lb = r, n.l == i && (n.l = []), n.l.push(a), 0 == n.r && (n.r = setInterval(n.H, 100))
                    }, n.H = function() {
                        var e;
                        if (n.isReadyToTrack() && (n.ib(), n.l != i))
                            for (; 0 < n.l.length;) e = n.l.shift(), e.nb.apply(e.ob, e.lb)
                    }, n.ib = function() {
                        n.r && (clearInterval(n.r), n.r = 0)
                    }, n.cb = function(e) {
                        var t, r, a = i,
                            o = i;
                        if (!n.isReadyToTrack()) {
                            if (t = [], e != i)
                                for (r in a = {}, e) a[r] = e[r];
                            return o = {}, n.Ra(o, !0), t.push(a), t.push(o), n.callbackWhenReadyToTrack(n, n.track, t), !0
                        }
                        return !1
                    }, n.vb = function() {
                        var e, t = n.cookieRead("s_fid"),
                            r = "",
                            i = "";
                        e = 8;
                        var a = 4;
                        if (!t || 0 > t.indexOf("-")) {
                            for (t = 0; 16 > t; t++) e = Math.floor(Math.random() * e), r += "0123456789ABCDEF".substring(e, e + 1), e = Math.floor(Math.random() * a), i += "0123456789ABCDEF".substring(e, e + 1), e = a = 16;
                            t = r + "-" + i
                        }
                        return n.cookieWrite("s_fid", t, 1) || (t = 0), t
                    }, n.t = n.track = function(e, t) {
                        var i, a = new Date,
                            o = "s" + Math.floor(a.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
                            l = a.getYear(),
                            l = "t=" + n.escape(a.getDate() + "/" + a.getMonth() + "/" + (1900 > l ? l + 1900 : l) + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + " " + a.getDay() + " " + a.getTimezoneOffset());
                        n.visitor && n.visitor.getAuthState && (n.authState = n.visitor.getAuthState()), n.o("_s"), n.cb(e) || (t && n.R(t), e && (i = {}, n.Ra(i, 0), n.R(e)), n.Cb() && !n.visitorOptedOut && (n.pa() || (n.fid = n.vb()), n.Fb(), n.usePlugins && n.doPlugins && n.doPlugins(n), n.account && (n.abort || (n.trackOffline && !n.timestamp && (n.timestamp = Math.floor(a.getTime() / 1e3)), a = r.location, n.pageURL || (n.pageURL = a.href ? a.href : a), n.referrer || n.Sa || (a = n.Util.getQueryParam("adobe_mc_ref", null, null, !0), n.referrer = a || void 0 === a ? void 0 === a ? "" : a : s.document.referrer), n.Sa = 1, n.referrer = n.tb(n.referrer), n.o("_g")), n.yb() && !n.abort && (n.visitor && !n.supplementalDataID && n.visitor.getSupplementalDataID && (n.supplementalDataID = n.visitor.getSupplementalDataID("AppMeasurement:" + n._in, !n.expectSupplementalData)), n.zb(), l += n.xb(), n.eb(o, l), n.o("_t"), n.referrer = ""))), e && n.R(i, 1)), n.abort = n.supplementalDataID = n.timestamp = n.pageURLRest = n.linkObject = n.clickObject = n.linkURL = n.linkName = n.linkType = r.s_objectID = n.pe = n.pev1 = n.pev2 = n.pev3 = n.e = n.lightProfileID = 0
                    }, n.ua = [], n.registerPreTrackCallback = function(e) {
                        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                        "function" == typeof e ? n.ua.push([e, t]) : n.debugTracking && n.D("DEBUG: Non function type passed to registerPreTrackCallback")
                    }, n.Ya = function(e) {
                        n.oa(n.ua, e)
                    }, n.ta = [], n.registerPostTrackCallback = function(e) {
                        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                        "function" == typeof e ? n.ta.push([e, t]) : n.debugTracking && n.D("DEBUG: Non function type passed to registerPostTrackCallback")
                    }, n.Xa = function(e) {
                        n.oa(n.ta, e)
                    }, n.oa = function(e, t) {
                        if ("object" == typeof e)
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r][0],
                                    a = e[r][1].slice();
                                if (a.unshift(t), "function" == typeof i) try {
                                    i.apply(null, a)
                                } catch (e) {
                                    n.debugTracking && n.D(e.message)
                                }
                            }
                    }, n.tl = n.trackLink = function(e, t, r, i, a) {
                        return n.linkObject = e, n.linkType = t, n.linkName = r, a && (n.k = e, n.v = a), n.track(i)
                    }, n.trackLight = function(e, t, r, i) {
                        return n.lightProfileID = e, n.lightStoreForSeconds = t, n.lightIncrementBy = r, n.track(i)
                    }, n.clearVars = function() {
                        var e, t;
                        for (e = 0; e < n.g.length; e++) t = n.g[e], ("prop" == t.substring(0, 4) || "eVar" == t.substring(0, 4) || "hier" == t.substring(0, 4) || "list" == t.substring(0, 4) || "channel" == t || "events" == t || "eventList" == t || "products" == t || "productList" == t || "purchaseID" == t || "transactionID" == t || "state" == t || "zip" == t || "campaign" == t) && (n[t] = void 0)
                    }, n.tagContainerMarker = "", n.eb = function(e, t) {
                        var r = n.Za() + "/" + e + "?AQB=1&ndh=1&pf=1&" + (n.qa() ? "callback=s_c_il[" + n._in + "].doPostbacks&et=1&" : "") + t + "&AQE=1";
                        n.Ya(r), n.Wa(r), n.T()
                    }, n.Za = function() {
                        var e = n.$a();
                        return "http" + (n.ssl ? "s" : "") + "://" + e + "/b/ss/" + n.account + "/" + (n.mobile ? "5." : "") + (n.qa() ? "10" : "1") + "/JS-" + n.version + (n.Ib ? "T" : "") + (n.tagContainerMarker ? "-" + n.tagContainerMarker : "")
                    }, n.qa = function() {
                        return n.AudienceManagement && n.AudienceManagement.isReady() || 0 != n.usePostbacks
                    }, n.$a = function() {
                        var e = n.dc,
                            t = n.trackingServer;
                        return t ? n.trackingServerSecure && n.ssl && (t = n.trackingServerSecure) : (e = e ? ("" + e).toLowerCase() : "d1", "d1" == e ? e = "112" : "d2" == e && (e = "122"), t = n.bb() + "." + e + ".2o7.net"), t
                    }, n.bb = function() {
                        var e = n.visitorNamespace;
                        return e || (e = n.account.split(",")[0], e = e.replace(/[^0-9a-z]/gi, "")), e
                    }, n.Qa = /{(%?)(.*?)(%?)}/, n.Mb = RegExp(n.Qa.source, "g"), n.sb = function(e) {
                        if ("object" == typeof e.dests)
                            for (var t = 0; t < e.dests.length; ++t) {
                                var r = e.dests[t];
                                if ("string" == typeof r.c && "aa." == r.id.substr(0, 3))
                                    for (var i = r.c.match(n.Mb), a = 0; a < i.length; ++a) {
                                        var o = i[a],
                                            s = o.match(n.Qa),
                                            l = "";
                                        "%" == s[1] && "timezone_offset" == s[2] ? l = (new Date).getTimezoneOffset() : "%" == s[1] && "timestampz" == s[2] && (l = n.wb()), r.c = r.c.replace(o, n.escape(l))
                                    }
                            }
                    }, n.wb = function() {
                        var e = new Date,
                            t = new Date(6e4 * Math.abs(e.getTimezoneOffset()));
                        return n.j(4, e.getFullYear()) + "-" + n.j(2, e.getMonth() + 1) + "-" + n.j(2, e.getDate()) + "T" + n.j(2, e.getHours()) + ":" + n.j(2, e.getMinutes()) + ":" + n.j(2, e.getSeconds()) + (0 < e.getTimezoneOffset() ? "-" : "+") + n.j(2, t.getUTCHours()) + ":" + n.j(2, t.getUTCMinutes())
                    }, n.j = function(e, t) {
                        return (Array(e + 1).join(0) + t).slice(-e)
                    }, n.la = {}, n.doPostbacks = function(e) {
                        if ("object" == typeof e)
                            if (n.sb(e), "object" == typeof n.AudienceManagement && "function" == typeof n.AudienceManagement.isReady && n.AudienceManagement.isReady() && "function" == typeof n.AudienceManagement.passData) n.AudienceManagement.passData(e);
                            else if ("object" == typeof e && "object" == typeof e.dests)
                            for (var t = 0; t < e.dests.length; ++t) {
                                var r = e.dests[t];
                                "object" == typeof r && "string" == typeof r.c && "string" == typeof r.id && "aa." == r.id.substr(0, 3) && (n.la[r.id] = new Image, n.la[r.id].alt = "", n.la[r.id].src = r.c)
                            }
                    }, n.Wa = function(e) {
                        n.i || n.Ab(), n.i.push(e), n.ea = n.B(), n.Oa()
                    }, n.Ab = function() {
                        n.i = n.Db(), n.i || (n.i = [])
                    }, n.Db = function() {
                        var e, t;
                        if (n.ka()) {
                            try {
                                (t = r.localStorage.getItem(n.ia())) && (e = r.JSON.parse(t))
                            } catch (e) {}
                            return e
                        }
                    }, n.ka = function() {
                        var e = !0;
                        return n.trackOffline && n.offlineFilename && r.localStorage && r.JSON || (e = !1), e
                    }, n.Ea = function() {
                        var e = 0;
                        return n.i && (e = n.i.length), n.p && e++, e
                    }, n.T = function() {
                        if (!n.p || (n.A && n.A.complete && n.A.F && n.A.na(), !n.p))
                            if (n.Fa = i, n.ja) n.ea > n.O && n.Ma(n.i), n.ma(500);
                            else {
                                var e = n.mb();
                                0 < e ? n.ma(e) : (e = n.Ba()) && (n.p = 1, n.Eb(e), n.Hb(e))
                            }
                    }, n.ma = function(e) {
                        n.Fa || (e || (e = 0), n.Fa = setTimeout(n.T, e))
                    }, n.mb = function() {
                        var e;
                        return !n.trackOffline || 0 >= n.offlineThrottleDelay ? 0 : (e = n.B() - n.Ka, n.offlineThrottleDelay < e ? 0 : n.offlineThrottleDelay - e)
                    }, n.Ba = function() {
                        if (0 < n.i.length) return n.i.shift()
                    }, n.Eb = function(e) {
                        if (n.debugTracking) {
                            var t = "AppMeasurement Debug: " + e;
                            e = e.split("&");
                            var r;
                            for (r = 0; r < e.length; r++) t += "\n\t" + n.unescape(e[r]);
                            n.D(t)
                        }
                    }, n.pa = function() {
                        return n.marketingCloudVisitorID || n.analyticsVisitorID
                    }, n.V = !1;
                    var l;
                    try {
                        l = JSON.parse('{"x":"y"}')
                    } catch (e) {
                        l = null
                    }
                    l && "y" == l.x ? (n.V = !0, n.U = function(e) {
                        return JSON.parse(e)
                    }) : r.$ && r.$.parseJSON ? (n.U = function(e) {
                        return r.$.parseJSON(e)
                    }, n.V = !0) : n.U = function() {
                        return null
                    }, n.Hb = function(e) {
                        var t, a, o;
                        if (n.pa() && 2047 < e.length && (n.Ta() && (a = 1, t = new XMLHttpRequest), t && (n.AudienceManagement && n.AudienceManagement.isReady() || 0 != n.usePostbacks) && (n.V ? t.wa = !0 : t = 0)), !t && n.Pa && (e = e.substring(0, 2047)), !t && n.d.createElement && (0 != n.usePostbacks || n.AudienceManagement && n.AudienceManagement.isReady()) && (t = n.d.createElement("SCRIPT")) && "async" in t && ((o = (o = n.d.getElementsByTagName("HEAD")) && o[0] ? o[0] : n.d.body) ? (t.type = "text/javascript", t.setAttribute("async", "async"), a = 2) : t = 0), t || (t = new Image, t.alt = "", t.abort || void 0 === r.InstallTrigger || (t.abort = function() {
                                t.src = i
                            })), t.La = Date.now(), t.ya = function() {
                                try {
                                    t.F && (clearTimeout(t.F), t.F = 0)
                                } catch (e) {}
                            }, t.onload = t.na = function() {
                                if (t.La && (n.fa = Date.now() - t.La), n.Xa(e), t.ya(), n.qb(), n.Z(), n.p = 0, n.T(), t.wa) {
                                    t.wa = !1;
                                    try {
                                        n.doPostbacks(n.U(t.responseText))
                                    } catch (e) {}
                                }
                            }, t.onabort = t.onerror = t.Ca = function() {
                                t.ya(), (n.trackOffline || n.ja) && n.p && n.i.unshift(n.pb), n.p = 0, n.ea > n.O && n.Ma(n.i), n.Z(), n.ma(500)
                            }, t.onreadystatechange = function() {
                                4 == t.readyState && (200 == t.status ? t.na() : t.Ca())
                            }, n.Ka = n.B(), 1 == a) o = e.indexOf("?"), a = e.substring(0, o), o = e.substring(o + 1), o = o.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), t.open("POST", a, !0), t.withCredentials = !0, t.send(o);
                        else if (t.src = e, 2 == a) {
                            if (n.Ia) try {
                                o.removeChild(n.Ia)
                            } catch (e) {}
                            o.firstChild ? o.insertBefore(t, o.firstChild) : o.appendChild(t), n.Ia = n.A
                        }
                        t.F = setTimeout(function() {
                            t.F && (t.complete ? t.na() : (n.trackOffline && t.abort && t.abort(), t.Ca()))
                        }, 5e3), n.pb = e, n.A = r["s_i_" + n.replace(n.account, ",", "_")] = t, (n.useForcedLinkTracking && n.K || n.v) && (n.forcedLinkTrackingTimeout || (n.forcedLinkTrackingTimeout = 250), n.aa = setTimeout(n.Z, n.forcedLinkTrackingTimeout))
                    }, n.Ta = function() {
                        return "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                    }, n.qb = function() {
                        if (n.ka() && !(n.Ja > n.O)) try {
                            r.localStorage.removeItem(n.ia()), n.Ja = n.B()
                        } catch (e) {}
                    }, n.Ma = function(e) {
                        if (n.ka()) {
                            n.Oa();
                            try {
                                r.localStorage.setItem(n.ia(), r.JSON.stringify(e)), n.O = n.B()
                            } catch (e) {}
                        }
                    }, n.Oa = function() {
                        if (n.trackOffline)
                            for ((!n.offlineLimit || 0 >= n.offlineLimit) && (n.offlineLimit = 10); n.i.length > n.offlineLimit;) n.Ba()
                    }, n.forceOffline = function() {
                        n.ja = !0
                    }, n.forceOnline = function() {
                        n.ja = !1
                    }, n.ia = function() {
                        return n.offlineFilename + "-" + n.visitorNamespace + n.account
                    }, n.B = function() {
                        return (new Date).getTime()
                    }, n.Ga = function(e) {
                        return e = e.toLowerCase(), 0 != e.indexOf("#") && 0 != e.indexOf("about:") && 0 != e.indexOf("opera:") && 0 != e.indexOf("javascript:")
                    }, n.setTagContainer = function(e) {
                        var t, r, i;
                        for (n.Ib = e, t = 0; t < n._il.length; t++)
                            if ((r = n._il[t]) && "s_l" == r._c && r.tagContainerName == e) {
                                if (n.R(r), r.lmq)
                                    for (t = 0; t < r.lmq.length; t++) i = r.lmq[t], n.loadModule(i.n);
                                if (r.ml)
                                    for (i in r.ml)
                                        if (n[i])
                                            for (t in e = n[i], i = r.ml[i]) !Object.prototype[t] && ("function" != typeof i[t] || 0 > ("" + i[t]).indexOf("s_c_il")) && (e[t] = i[t]);
                                if (r.mmq)
                                    for (t = 0; t < r.mmq.length; t++) i = r.mmq[t], n[i.m] && (e = n[i.m], e[i.f] && "function" == typeof e[i.f] && (i.a ? e[i.f].apply(e, i.a) : e[i.f].apply(e)));
                                if (r.tq)
                                    for (t = 0; t < r.tq.length; t++) n.track(r.tq[t]);
                                r.s = n;
                                break
                            }
                    }, n.Util = {
                        urlEncode: n.escape,
                        urlDecode: n.unescape,
                        cookieRead: n.cookieRead,
                        cookieWrite: n.cookieWrite,
                        getQueryParam: function(e, t, i, a) {
                            var o, s = "";
                            return t || (t = (n.pageURL ? n.pageURL : r.location).toLowerCase()), i = i || "&", e && t ? (t = "" + t, 0 > (o = t.indexOf("?")) ? s : (t = i + t.substring(o + 1) + i, a && (0 <= t.indexOf(i + e + i) || 0 <= t.indexOf(i + e + "=" + i)) ? void 0 : (o = t.indexOf("#"), 0 <= o && (t = t.substr(0, o) + i), 0 > (o = t.indexOf(i + e + "=")) ? s : (t = t.substring(o + i.length + e.length + 1), o = t.indexOf(i), 0 <= o && (t = t.substring(0, o)), 0 < t.length && (s = n.unescape(t)), s)))) : s
                        },
                        getIeVersion: function() {
                            if (document.documentMode) return document.documentMode;
                            for (var e = 7; 4 < e; e--) {
                                var t = document.createElement("div");
                                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return e
                            }
                            return null
                        }
                    }, n.G = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "), n.g = n.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), n.ga = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), n.P = n.ga.slice(0), n.va = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
                    for (a = 0; 250 >= a; a++) 76 > a && (n.g.push("prop" + a), n.P.push("prop" + a)), n.g.push("eVar" + a), n.P.push("eVar" + a), 6 > a && n.g.push("hier" + a), 4 > a && n.g.push("list" + a);
                    a = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" "), n.g = n.g.concat(a), n.G = n.G.concat(a), n.ssl = 0 <= r.location.protocol.toLowerCase().indexOf("https"), n.charSet = "UTF-8", n.contextData = {}, n.offlineThrottleDelay = 0, n.offlineFilename = "AppMeasurement.offline", n.Ka = 0, n.ea = 0, n.O = 0, n.Ja = 0, n.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", n.w = r, n.d = r.document;
                    try {
                        if (n.Pa = !1, navigator) {
                            var c = navigator.userAgent;
                            ("Microsoft Internet Explorer" == navigator.appName || 0 <= c.indexOf("MSIE ") || 0 <= c.indexOf("Trident/") && 0 <= c.indexOf("Windows NT 6")) && (n.Pa = !0)
                        }
                    } catch (e) {}
                    n.Z = function() {
                        n.aa && (r.clearTimeout(n.aa), n.aa = i), n.k && n.K && n.k.dispatchEvent(n.K), n.v && ("function" == typeof n.v ? n.v() : n.k && n.k.href && (n.d.location = n.k.href)), n.k = n.K = n.v = 0
                    }, n.Na = function() {
                        n.b = n.d.body, n.b ? (n.u = function(e) {
                            var t, i, a, o, s;
                            if (!(n.d && n.d.getElementById("cppXYctnr") || e && e["s_fe_" + n._in])) {
                                if (n.xa) {
                                    if (!n.useForcedLinkTracking) return n.b.removeEventListener("click", n.u, !0), void(n.xa = n.useForcedLinkTracking = 0);
                                    n.b.removeEventListener("click", n.u, !1)
                                } else n.useForcedLinkTracking = 0;
                                n.clickObject = e.srcElement ? e.srcElement : e.target;
                                try {
                                    if (!n.clickObject || n.N && n.N == n.clickObject || !(n.clickObject.tagName || n.clickObject.parentElement || n.clickObject.parentNode)) n.clickObject = 0;
                                    else {
                                        var l = n.N = n.clickObject;
                                        if (n.da && (clearTimeout(n.da), n.da = 0), n.da = setTimeout(function() {
                                                n.N == l && (n.N = 0)
                                            }, 1e4), a = n.Ea(), n.track(), a < n.Ea() && n.useForcedLinkTracking && e.target) {
                                            for (o = e.target; o && o != n.b && "A" != o.tagName.toUpperCase() && "AREA" != o.tagName.toUpperCase();) o = o.parentNode;
                                            if (o && (s = o.href, n.Ga(s) || (s = 0), i = o.target, e.target.dispatchEvent && s && (!i || "_self" == i || "_top" == i || "_parent" == i || r.name && i == r.name))) {
                                                try {
                                                    t = n.d.createEvent("MouseEvents")
                                                } catch (e) {
                                                    t = new r.MouseEvent
                                                }
                                                if (t) {
                                                    try {
                                                        t.initMouseEvent("click", e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget)
                                                    } catch (e) {
                                                        t = 0
                                                    }
                                                    t && (t["s_fe_" + n._in] = t.s_fe = 1, e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.preventDefault(), n.k = e.target, n.K = t)
                                                }
                                            }
                                        }
                                    }
                                } catch (e) {
                                    n.clickObject = 0
                                }
                            }
                        }, n.b && n.b.attachEvent ? n.b.attachEvent("onclick", n.u) : n.b && n.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && n.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && r.MouseEvent) && (n.xa = 1, n.useForcedLinkTracking = 1, n.b.addEventListener("click", n.u, !0)), n.b.addEventListener("click", n.u, !1))) : setTimeout(n.Na, 30)
                    }, n.rb(), n.Rb || (t ? n.setAccount(t) : n.D("Error, missing Report Suite ID in AppMeasurement initialization"), n.Na(), n.loadModule("ActivityMap"))
                },
                t = function(t) {
                    var n, r, i, a, o, s = window.s_c_il,
                        l = t.split(","),
                        c = 0;
                    if (s)
                        for (r = 0; !c && r < s.length;) {
                            if (n = s[r], "s_c" == n._c && (n.account || n.oun))
                                if (n.account && n.account == t) c = 1;
                                else
                                    for (i = n.account ? n.account : n.oun, i = n.allAccounts ? n.allAccounts : i.split(","), a = 0; a < l.length; a++)
                                        for (o = 0; o < i.length; o++) l[a] == i[o] && (c = 1);
                            r++
                        }
                    return c ? n.setAccount && n.setAccount(t) : n = new e(t), n
                };
            e.getInstance = t, window.s_objectID || (window.s_objectID = 0),
                function() {
                    var e, n, r, i = window,
                        a = i.s_giq;
                    if (a)
                        for (e = 0; e < a.length; e++) n = a[e], r = t(n.oun), r.setAccount(n.un), r.setTagContainer(n.tagContainerName);
                    i.s_giq = 0
                }();
            ! function() {
                "use strict";

                function e() {
                    return {
                        callbacks: {},
                        add: function(e, t) {
                            this.callbacks[e] = this.callbacks[e] || [];
                            var n = this.callbacks[e].push(t) - 1;
                            return function() {
                                this.callbacks[e].splice(n, 1)
                            }
                        },
                        execute: function(e, t) {
                            if (this.callbacks[e]) {
                                t = void 0 === t ? [] : t, t = t instanceof Array ? t : [t];
                                try {
                                    for (; this.callbacks[e].length;) {
                                        var n = this.callbacks[e].shift();
                                        "function" == typeof n ? n.apply(null, t) : n instanceof Array && n[1].apply(n[0], t)
                                    }
                                    delete this.callbacks[e]
                                } catch (e) {}
                            }
                        },
                        executeAll: function(e, t) {
                            (t || e && !T.isObjectEmpty(e)) && Object.keys(this.callbacks).forEach(function(t) {
                                var n = void 0 !== e[t] ? e[t] : "";
                                this.execute(t, n)
                            }, this)
                        },
                        hasCallbacks: function() {
                            return Boolean(Object.keys(this.callbacks).length)
                        }
                    }
                }

                function t(e) {
                    for (var t = /^\d+$/, n = 0, r = e.length; n < r; n++)
                        if (!t.test(e[n])) return !1;
                    return !0
                }

                function n(e, t) {
                    for (; e.length < t.length;) e.push("0");
                    for (; t.length < e.length;) t.push("0")
                }

                function r(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = parseInt(e[n], 10),
                            i = parseInt(t[n], 10);
                        if (r > i) return 1;
                        if (i > r) return -1
                    }
                    return 0
                }

                function i(e, i) {
                    if (e === i) return 0;
                    var a = e.toString().split("."),
                        o = i.toString().split(".");
                    return t(a.concat(o)) ? (n(a, o), r(a, o)) : NaN
                }
                var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
                Object.assign = Object.assign || function(e) {
                    for (var t, n, r = 1; r < arguments.length; ++r) {
                        n = arguments[r];
                        for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    }
                    return e
                };
                var o = {
                        HANDSHAKE: "HANDSHAKE",
                        GETSTATE: "GETSTATE",
                        PARENTSTATE: "PARENTSTATE"
                    },
                    s = {
                        MCMID: "MCMID",
                        MCAID: "MCAID",
                        MCAAMB: "MCAAMB",
                        MCAAMLH: "MCAAMLH",
                        MCOPTOUT: "MCOPTOUT",
                        CUSTOMERIDS: "CUSTOMERIDS"
                    },
                    l = {
                        MCMID: "getMarketingCloudVisitorID",
                        MCAID: "getAnalyticsVisitorID",
                        MCAAMB: "getAudienceManagerBlob",
                        MCAAMLH: "getAudienceManagerLocationHint",
                        MCOPTOUT: "getOptOut"
                    },
                    c = {
                        CUSTOMERIDS: "getCustomerIDs"
                    },
                    d = {
                        MCMID: "getMarketingCloudVisitorID",
                        MCAAMB: "getAudienceManagerBlob",
                        MCAAMLH: "getAudienceManagerLocationHint",
                        MCOPTOUT: "getOptOut",
                        MCAID: "getAnalyticsVisitorID",
                        CUSTOMERIDS: "getCustomerIDs"
                    },
                    u = {
                        MC: "MCMID",
                        A: "MCAID",
                        AAM: "MCAAMB"
                    },
                    p = {
                        MCMID: "MCMID",
                        MCOPTOUT: "MCOPTOUT",
                        MCAID: "MCAID",
                        MCAAMLH: "MCAAMLH",
                        MCAAMB: "MCAAMB"
                    },
                    m = {
                        UNKNOWN: 0,
                        AUTHENTICATED: 1,
                        LOGGED_OUT: 2
                    },
                    f = {
                        GLOBAL: "global"
                    },
                    g = {
                        MESSAGES: o,
                        STATE_KEYS_MAP: s,
                        ASYNC_API_MAP: l,
                        SYNC_API_MAP: c,
                        ALL_APIS: d,
                        FIELDGROUP_TO_FIELD: u,
                        FIELDS: p,
                        AUTH_STATE: m,
                        OPT_OUT: f
                    },
                    v = g.STATE_KEYS_MAP,
                    h = function(e) {
                        function t() {}

                        function n(t, n) {
                            var r = this;
                            return function() {
                                var t = e(0, v.MCMID),
                                    i = {};
                                return i[v.MCMID] = t, r.setStateAndPublish(i), n(t), t
                            }
                        }
                        this.getMarketingCloudVisitorID = function(e) {
                            e = e || t;
                            var r = this.findField(v.MCMID, e),
                                i = n.call(this, v.MCMID, e);
                            return void 0 !== r ? r : i()
                        }
                    },
                    y = g.MESSAGES,
                    b = g.ASYNC_API_MAP,
                    _ = g.SYNC_API_MAP,
                    w = function() {
                        function e() {}

                        function t(e, t) {
                            var n = this;
                            return function() {
                                return n.callbackRegistry.add(e, t), n.messageParent(y.GETSTATE), ""
                            }
                        }

                        function n(n) {
                            this[b[n]] = function(r) {
                                r = r || e;
                                var i = this.findField(n, r),
                                    a = t.call(this, n, r);
                                return void 0 !== i ? i : a()
                            }
                        }

                        function r(t) {
                            this[_[t]] = function() {
                                return this.findField(t, e) || {}
                            }
                        }
                        Object.keys(b).forEach(n, this), Object.keys(_).forEach(r, this)
                    },
                    k = g.ASYNC_API_MAP,
                    C = function() {
                        Object.keys(k).forEach(function(e) {
                            this[k[e]] = function(t) {
                                this.callbackRegistry.add(e, t)
                            }
                        }, this)
                    },
                    T = function(e, t) {
                        return t = {
                                exports: {}
                            },
                            function(e, t) {
                                t.isObjectEmpty = function(e) {
                                    return e === Object(e) && 0 === Object.keys(e).length
                                }, t.isValueEmpty = function(e) {
                                    return "" === e || t.isObjectEmpty(e)
                                }, t.getIeVersion = function() {
                                    if (document.documentMode) return document.documentMode;
                                    for (var e = 7; e > 4; e--) {
                                        var t = document.createElement("div");
                                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e;
                                        t = null
                                    }
                                    return null
                                }, t.encodeAndBuildRequest = function(e, t) {
                                    return e.map(encodeURIComponent).join(t)
                                }, t.isObject = function(e) {
                                    return null !== e && "object" == typeof e && !1 === Array.isArray(e)
                                }
                            }(t, t.exports), t.exports
                    }(),
                    S = (T.isObjectEmpty, T.isValueEmpty, T.getIeVersion, T.encodeAndBuildRequest, T.isObject, e),
                    I = g.MESSAGES,
                    P = {
                        0: "prefix",
                        1: "orgID",
                        2: "state"
                    },
                    V = function(e, t) {
                        this.parse = function(e) {
                            try {
                                var t = {};
                                return e.data.split("|").forEach(function(e, n) {
                                    void 0 !== e && (t[P[n]] = 2 !== n ? e : JSON.parse(e))
                                }), t
                            } catch (e) {}
                        }, this.isInvalid = function(n) {
                            var r = this.parse(n);
                            if (!r || Object.keys(r).length < 2) return !0;
                            var i = e !== r.orgID,
                                a = !t || n.origin !== t,
                                o = -1 === Object.keys(I).indexOf(r.prefix);
                            return i || a || o
                        }, this.send = function(n, r, i) {
                            var a = r + "|" + e;
                            i && i === Object(i) && (a += "|" + JSON.stringify(i));
                            try {
                                n.postMessage(a, t)
                            } catch (e) {}
                        }
                    },
                    D = g.MESSAGES,
                    E = function(e, t, n, r) {
                        function i(e) {
                            Object.assign(f, e)
                        }

                        function o(e) {
                            Object.assign(f.state, e), f.callbackRegistry.executeAll(f.state)
                        }

                        function s(e) {
                            if (!y.isInvalid(e)) {
                                v = !1;
                                var t = y.parse(e);
                                f.setStateAndPublish(t.state)
                            }
                        }

                        function l(e) {
                            !v && g && (v = !0, y.send(r, e))
                        }

                        function c() {
                            i(new h(n._generateID)), f.getMarketingCloudVisitorID(), f.callbackRegistry.executeAll(f.state, !0), a.removeEventListener("message", d)
                        }

                        function d(e) {
                            if (!y.isInvalid(e)) {
                                var t = y.parse(e);
                                v = !1, a.clearTimeout(f._handshakeTimeout), a.removeEventListener("message", d), i(new w(f)), a.addEventListener("message", s), f.setStateAndPublish(t.state), f.callbackRegistry.hasCallbacks() && l(D.GETSTATE)
                            }
                        }

                        function u() {
                            g && postMessage ? (a.addEventListener("message", d), l(D.HANDSHAKE), f._handshakeTimeout = setTimeout(c, 250)) : c()
                        }

                        function p() {
                            a.s_c_in || (a.s_c_il = [], a.s_c_in = 0), f._c = "Visitor", f._il = a.s_c_il, f._in = a.s_c_in, f._il[f._in] = f, a.s_c_in++
                        }

                        function m() {
                            function e(e) {
                                0 !== e.indexOf("_") && "function" == typeof n[e] && (f[e] = function() {})
                            }
                            Object.keys(n).forEach(e), f.getSupplementalDataID = n.getSupplementalDataID
                        }
                        var f = this,
                            g = t.whitelistParentDomain;
                        f.state = {}, f.version = n.version, f.marketingCloudOrgID = e, f.cookieDomain = n.cookieDomain || "", f._instanceType = "child";
                        var v = !1,
                            y = new V(e, g);
                        f.callbackRegistry = S(), f.init = function() {
                            p(), m(), i(new C(f)), u()
                        }, f.findField = function(e, t) {
                            if (f.state[e]) return t(f.state[e]), f.state[e]
                        }, f.messageParent = l, f.setStateAndPublish = o
                    },
                    A = g.MESSAGES,
                    O = g.ALL_APIS,
                    x = g.ASYNC_API_MAP,
                    L = g.FIELDGROUP_TO_FIELD,
                    N = function(e, t) {
                        function n() {
                            var t = {};
                            return Object.keys(O).forEach(function(n) {
                                var r = O[n],
                                    i = e[r]();
                                T.isValueEmpty(i) || (t[n] = i)
                            }), t
                        }

                        function r() {
                            var t = [];
                            return e._loading && Object.keys(e._loading).forEach(function(n) {
                                if (e._loading[n]) {
                                    var r = L[n];
                                    t.push(r)
                                }
                            }), t.length ? t : null
                        }

                        function i(t) {
                            return function n(i) {
                                var a = r();
                                if (a) {
                                    var o = x[a[0]];
                                    e[o](n, !0)
                                } else t()
                            }
                        }

                        function a(e, r) {
                            var i = n();
                            t.send(e, r, i)
                        }

                        function o(e) {
                            l(e), a(e, A.HANDSHAKE)
                        }

                        function s(e) {
                            i(function() {
                                a(e, A.PARENTSTATE)
                            })()
                        }

                        function l(n) {
                            function r(r) {
                                i.call(e, r), t.send(n, A.PARENTSTATE, {
                                    CUSTOMERIDS: e.getCustomerIDs()
                                })
                            }
                            var i = e.setCustomerIDs;
                            e.setCustomerIDs = r
                        }
                        return function(e) {
                            t.isInvalid(e) || (t.parse(e).prefix === A.HANDSHAKE ? o : s)(e.source)
                        }
                    },
                    R = function(e, t) {
                        function n(e) {
                            return function(n) {
                                r[e] = n, ++i === a && t(r)
                            }
                        }
                        var r = {},
                            i = 0,
                            a = Object.keys(e).length;
                        Object.keys(e).forEach(function(t) {
                            var r = e[t];
                            if (r.fn) {
                                var i = r.args || [];
                                i.unshift(n(t)), r.fn.apply(r.context || null, i)
                            }
                        })
                    },
                    M = function(e) {
                        var t;
                        if (!e && a.location && (e = a.location.hostname), t = e)
                            if (/^[0-9.]+$/.test(t)) t = "";
                            else {
                                var n = ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",
                                    r = t.split("."),
                                    i = r.length - 1,
                                    o = i - 1;
                                if (i > 1 && r[i].length <= 2 && (2 === r[i - 1].length || n.indexOf("," + r[i] + ",") < 0) && o--, o > 0)
                                    for (t = ""; i >= o;) t = r[i] + (t ? "." : "") + t, i--
                            }
                        return t
                    },
                    F = {
                        compare: i,
                        isLessThan: function(e, t) {
                            return i(e, t) < 0
                        },
                        areVersionsDifferent: function(e, t) {
                            return 0 !== i(e, t)
                        },
                        isGreaterThan: function(e, t) {
                            return i(e, t) > 0
                        },
                        isEqual: function(e, t) {
                            return 0 === i(e, t)
                        }
                    },
                    U = !!a.postMessage,
                    j = {
                        postMessage: function(e, t, n) {
                            var r = 1;
                            t && (U ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (n.location = t.replace(/#.*$/, "") + "#" + +new Date + r++ + "&" + e))
                        },
                        receiveMessage: function(e, t) {
                            var n;
                            try {
                                U && (e && (n = function(n) {
                                    if ("string" == typeof t && n.origin !== t || "[object Function]" === Object.prototype.toString.call(t) && !1 === t(n.origin)) return !1;
                                    e(n)
                                }), a.addEventListener ? a[e ? "addEventListener" : "removeEventListener"]("message", n) : a[e ? "attachEvent" : "detachEvent"]("onmessage", n))
                            } catch (e) {}
                        }
                    },
                    q = function(e) {
                        var t, n, r = "0123456789",
                            i = "",
                            a = "",
                            o = 8,
                            s = 10,
                            l = 10;
                        if (1 == e) {
                            for (r += "ABCDEF", t = 0; 16 > t; t++) n = Math.floor(Math.random() * o), i += r.substring(n, n + 1), n = Math.floor(Math.random() * o), a += r.substring(n, n + 1), o = 16;
                            return i + "-" + a
                        }
                        for (t = 0; 19 > t; t++) n = Math.floor(Math.random() * s), i += r.substring(n, n + 1), 0 === t && 9 == n ? s = 3 : (1 == t || 2 == t) && 10 != s && 2 > n ? s = 10 : 2 < t && (s = 10), n = Math.floor(Math.random() * l), a += r.substring(n, n + 1), 0 === t && 9 == n ? l = 3 : (1 == t || 2 == t) && 10 != l && 2 > n ? l = 10 : 2 < t && (l = 10);
                        return i + a
                    },
                    B = function(e, t) {
                        return {
                            corsMetadata: function() {
                                var e = "none",
                                    t = !0;
                                return "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? e = "XMLHttpRequest" : "undefined" != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (t = !1), Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor") > 0 && (t = !1)), {
                                    corsType: e,
                                    corsCookiesEnabled: t
                                }
                            }(),
                            getCORSInstance: function() {
                                return "none" === this.corsMetadata.corsType ? null : new a[this.corsMetadata.corsType]
                            },
                            fireCORS: function(t, n, r) {
                                function i(e) {
                                    var n;
                                    try {
                                        if ((n = JSON.parse(e)) !== Object(n)) return void o.handleCORSError(t, null, "Response is not JSON")
                                    } catch (e) {
                                        return void o.handleCORSError(t, e, "Error parsing response as JSON")
                                    }
                                    try {
                                        for (var r = t.callback, i = a, s = 0; s < r.length; s++) i = i[r[s]];
                                        i(n)
                                    } catch (e) {
                                        o.handleCORSError(t, e, "Error forming callback function")
                                    }
                                }
                                var o = this;
                                n && (t.loadErrorHandler = n);
                                try {
                                    var s = this.getCORSInstance();
                                    s.open("get", t.corsUrl + "&ts=" + (new Date).getTime(), !0), "XMLHttpRequest" === this.corsMetadata.corsType && (s.withCredentials = !0, s.timeout = e.loadTimeout, s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.onreadystatechange = function() {
                                        4 === this.readyState && 200 === this.status && i(this.responseText)
                                    }), s.onerror = function(e) {
                                        o.handleCORSError(t, e, "onerror")
                                    }, s.ontimeout = function(e) {
                                        o.handleCORSError(t, e, "ontimeout")
                                    }, s.send(), e._log.requests.push(t.corsUrl)
                                } catch (e) {
                                    this.handleCORSError(t, e, "try-catch")
                                }
                            },
                            handleCORSError: function(t, n, r) {
                                e.CORSErrors.push({
                                    corsData: t,
                                    error: n,
                                    description: r
                                }), t.loadErrorHandler && ("ontimeout" === r ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1))
                            }
                        }
                    },
                    H = {
                        POST_MESSAGE_ENABLED: !!a.postMessage,
                        DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                        MILLIS_PER_DAY: 864e5,
                        ADOBE_MC: "adobe_mc",
                        ADOBE_MC_SDID: "adobe_mc_sdid",
                        VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                        ADOBE_MC_TTL_IN_MIN: 5,
                        VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/
                    },
                    z = function(e, t) {
                        var n = a.document;
                        return {
                            THROTTLE_START: 3e4,
                            MAX_SYNCS_LENGTH: 649,
                            throttleTimerSet: !1,
                            id: null,
                            onPagePixels: [],
                            iframeHost: null,
                            getIframeHost: function(e) {
                                if ("string" == typeof e) {
                                    var t = e.split("/");
                                    return t[0] + "//" + t[2]
                                }
                            },
                            subdomain: null,
                            url: null,
                            getUrl: function() {
                                var t, r = "http://fast.",
                                    i = "?d_nsid=" + e.idSyncContainerID + "#" + encodeURIComponent(n.location.origin);
                                return this.subdomain || (this.subdomain = "nosubdomainreturned"), e.loadSSL && (r = e.idSyncSSLUseAkamai ? "https://fast." : "https://"), t = r + this.subdomain + ".demdex.net/dest5.html" + i, this.iframeHost = this.getIframeHost(t), this.id = "destination_publishing_iframe_" + this.subdomain + "_" + e.idSyncContainerID, t
                            },
                            checkDPIframeSrc: function() {
                                var t = "?d_nsid=" + e.idSyncContainerID + "#" + encodeURIComponent(n.location.href);
                                "string" == typeof e.dpIframeSrc && e.dpIframeSrc.length && (this.id = "destination_publishing_iframe_" + (e._subdomain || this.subdomain || (new Date).getTime()) + "_" + e.idSyncContainerID, this.iframeHost = this.getIframeHost(e.dpIframeSrc), this.url = e.dpIframeSrc + t)
                            },
                            idCallNotProcesssed: null,
                            doAttachIframe: !1,
                            startedAttachingIframe: !1,
                            iframeHasLoaded: null,
                            iframeIdChanged: null,
                            newIframeCreated: null,
                            originalIframeHasLoadedAlready: null,
                            iframeLoadedCallbacks: [],
                            regionChanged: !1,
                            timesRegionChanged: 0,
                            sendingMessages: !1,
                            messages: [],
                            messagesPosted: [],
                            messagesReceived: [],
                            messageSendingInterval: H.POST_MESSAGE_ENABLED ? null : 100,
                            jsonForComparison: [],
                            jsonDuplicates: [],
                            jsonWaiting: [],
                            jsonProcessed: [],
                            canSetThirdPartyCookies: !0,
                            receivedThirdPartyCookiesNotification: !1,
                            readyToAttachIframePreliminary: function() {
                                return !(e.idSyncDisableSyncs || e.disableIdSyncs || e.idSyncDisable3rdPartySyncing || e.disableThirdPartyCookies || e.disableThirdPartyCalls)
                            },
                            readyToAttachIframe: function() {
                                return this.readyToAttachIframePreliminary() && (this.doAttachIframe || e._doAttachIframe) && (this.subdomain && "nosubdomainreturned" !== this.subdomain || e._subdomain) && this.url && !this.startedAttachingIframe
                            },
                            attachIframe: function() {
                                function e() {
                                    i = n.createElement("iframe"), i.sandbox = "allow-scripts allow-same-origin", i.title = "Adobe ID Syncing iFrame", i.id = r.id, i.name = r.id + "_name", i.style.cssText = "display: none; width: 0; height: 0;", i.src = r.url, r.newIframeCreated = !0, t(), n.body.appendChild(i)
                                }

                                function t(e) {
                                    i.addEventListener("load", function() {
                                        i.className = "aamIframeLoaded", r.iframeHasLoaded = !0, r.fireIframeLoadedCallbacks(e), r.requestToProcess()
                                    })
                                }
                                this.startedAttachingIframe = !0;
                                var r = this,
                                    i = n.getElementById(this.id);
                                i ? "IFRAME" !== i.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, "aamIframeLoaded" !== i.className ? (this.originalIframeHasLoadedAlready = !1, t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = i, this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."), this.requestToProcess())) : e(), this.iframe = i
                            },
                            fireIframeLoadedCallbacks: function(e) {
                                this.iframeLoadedCallbacks.forEach(function(t) {
                                    "function" == typeof t && t({
                                        message: e || "The destination publishing iframe was attached and loaded successfully."
                                    })
                                }), this.iframeLoadedCallbacks = []
                            },
                            requestToProcess: function(t) {
                                function n() {
                                    i.jsonForComparison.push(t), i.jsonWaiting.push(t), i.processSyncOnPage(t)
                                }
                                var r, i = this;
                                if (t === Object(t) && t.ibs)
                                    if (r = JSON.stringify(t.ibs || []), this.jsonForComparison.length) {
                                        var a, o, s, l = !1;
                                        for (a = 0, o = this.jsonForComparison.length; a < o; a++)
                                            if (s = this.jsonForComparison[a], r === JSON.stringify(s.ibs || [])) {
                                                l = !0;
                                                break
                                            }
                                        l ? this.jsonDuplicates.push(t) : n()
                                    } else n();
                                if ((this.receivedThirdPartyCookiesNotification || !H.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
                                    var c = this.jsonWaiting.shift();
                                    this.process(c), this.requestToProcess()
                                }
                                e.idSyncDisableSyncs || e.disableIdSyncs || !this.iframeHasLoaded || !this.messages.length || this.sendingMessages || (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() {
                                    i.messageSendingInterval = H.POST_MESSAGE_ENABLED ? null : 150
                                }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages())
                            },
                            getRegionAndCheckIfChanged: function(t, n) {
                                var r = e._getField("MCAAMLH"),
                                    i = t.d_region || t.dcs_region;
                                return r ? i && (e._setFieldExpire("MCAAMLH", n), e._setField("MCAAMLH", i), parseInt(r, 10) !== i && (this.regionChanged = !0, this.timesRegionChanged++, e._setField("MCSYNCSOP", ""), e._setField("MCSYNCS", ""), r = i)) : (r = i) && (e._setFieldExpire("MCAAMLH", n), e._setField("MCAAMLH", r)), r || (r = ""), r
                            },
                            processSyncOnPage: function(e) {
                                var t, n, r, i;
                                if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                    for (r = 0; r < n; r++) i = t[r], i.syncOnPage && this.checkFirstPartyCookie(i, "", "syncOnPage")
                            },
                            process: function(e) {
                                var t, n, r, i, a, o = encodeURIComponent,
                                    s = !1;
                                if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                    for (s = !0, r = 0; r < n; r++) i = t[r], a = [o("ibs"), o(i.id || ""), o(i.tag || ""), T.encodeAndBuildRequest(i.url || [], ","), o(i.ttl || ""), "", "", i.fireURLSync ? "true" : "false"], i.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(a.join("|")) : i.fireURLSync && this.checkFirstPartyCookie(i, a.join("|")));
                                s && this.jsonProcessed.push(e)
                            },
                            checkFirstPartyCookie: function(t, n, r) {
                                var i = "syncOnPage" === r,
                                    a = i ? "MCSYNCSOP" : "MCSYNCS";
                                e._readVisitor();
                                var o, s, l = e._getField(a),
                                    c = !1,
                                    d = !1,
                                    u = Math.ceil((new Date).getTime() / H.MILLIS_PER_DAY);
                                l ? (o = l.split("*"), s = this.pruneSyncData(o, t.id, u), c = s.dataPresent, d = s.dataValid, c && d || this.fireSync(i, t, n, o, a, u)) : (o = [], this.fireSync(i, t, n, o, a, u))
                            },
                            pruneSyncData: function(e, t, n) {
                                var r, i, a, o = !1,
                                    s = !1;
                                for (i = 0; i < e.length; i++) r = e[i], a = parseInt(r.split("-")[1], 10), r.match("^" + t + "-") ? (o = !0, n < a ? s = !0 : (e.splice(i, 1), i--)) : n >= a && (e.splice(i, 1), i--);
                                return {
                                    dataPresent: o,
                                    dataValid: s
                                }
                            },
                            manageSyncsSize: function(e) {
                                if (e.join("*").length > this.MAX_SYNCS_LENGTH)
                                    for (e.sort(function(e, t) {
                                            return parseInt(e.split("-")[1], 10) - parseInt(t.split("-")[1], 10)
                                        }); e.join("*").length > this.MAX_SYNCS_LENGTH;) e.shift()
                            },
                            fireSync: function(t, n, r, i, a, o) {
                                var s = this;
                                if (t) {
                                    if ("img" === n.tag) {
                                        var l, c, d, u, p = n.url,
                                            m = e.loadSSL ? "https:" : "http:";
                                        for (l = 0, c = p.length; l < c; l++) {
                                            d = p[l], u = /^\/\//.test(d);
                                            var f = new Image;
                                            f.addEventListener("load", function(t, n, r, i) {
                                                return function() {
                                                    s.onPagePixels[t] = null, e._readVisitor();
                                                    var o, l = e._getField(a),
                                                        c = [];
                                                    if (l) {
                                                        o = l.split("*");
                                                        var d, u, p;
                                                        for (d = 0, u = o.length; d < u; d++) p = o[d], p.match("^" + n.id + "-") || c.push(p)
                                                    }
                                                    s.setSyncTrackingData(c, n, r, i)
                                                }
                                            }(this.onPagePixels.length, n, a, o)), f.src = (u ? m : "") + d, this.onPagePixels.push(f)
                                        }
                                    }
                                } else this.addMessage(r), this.setSyncTrackingData(i, n, a, o)
                            },
                            addMessage: function(t) {
                                var n = encodeURIComponent,
                                    r = n(e._enableErrorReporting ? "---destpub-debug---" : "---destpub---");
                                this.messages.push((H.POST_MESSAGE_ENABLED ? "" : r) + t)
                            },
                            setSyncTrackingData: function(t, n, r, i) {
                                t.push(n.id + "-" + (i + Math.ceil(n.ttl / 60 / 24))), this.manageSyncsSize(t), e._setField(r, t.join("*"))
                            },
                            sendMessages: function() {
                                var e, t = this,
                                    n = "",
                                    r = encodeURIComponent;
                                this.regionChanged && (n = r("---destpub-clear-dextp---"), this.regionChanged = !1), this.messages.length ? H.POST_MESSAGE_ENABLED ? (e = n + r("---destpub-combined---") + this.messages.join("%01"), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(n + e), setTimeout(function() {
                                    t.sendMessages()
                                }, this.messageSendingInterval)) : this.sendingMessages = !1
                            },
                            postMessage: function(e) {
                                j.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e)
                            },
                            receiveMessage: function(e) {
                                var t, n = /^---destpub-to-parent---/;
                                "string" == typeof e && n.test(e) && (t = e.replace(n, "").split("|"), "canSetThirdPartyCookies" === t[0] && (this.canSetThirdPartyCookies = "true" === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e))
                            },
                            processIDCallData: function(r) {
                                (null == this.url || r.subdomain && "nosubdomainreturned" === this.subdomain) && ("string" == typeof e._subdomain && e._subdomain.length ? this.subdomain = e._subdomain : this.subdomain = r.subdomain || "", this.url = this.getUrl()), r.ibs instanceof Array && r.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (e.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || "complete" === n.readyState || "loaded" === n.readyState) && this.attachIframe() : this.attachIframeASAP()), "function" == typeof e.idSyncIDCallResult ? e.idSyncIDCallResult(r) : this.requestToProcess(r), "function" == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(r)
                            },
                            canMakeSyncIDCall: function(t, n) {
                                return e._forceSyncIDCall || !t || n - t > H.DAYS_BETWEEN_SYNC_ID_CALLS
                            },
                            attachIframeASAP: function() {
                                function e() {
                                    t.startedAttachingIframe || (n.body ? t.attachIframe() : setTimeout(e, 30))
                                }
                                var t = this;
                                e()
                            }
                        }
                    },
                    K = {
                        audienceManagerServer: {},
                        audienceManagerServerSecure: {},
                        cookieDomain: {},
                        cookieLifetime: {},
                        cookieName: {},
                        disableThirdPartyCalls: {},
                        idSyncAfterIDCallResult: {},
                        idSyncAttachIframeOnWindowLoad: {},
                        idSyncContainerID: {},
                        idSyncDisable3rdPartySyncing: {},
                        disableThirdPartyCookies: {},
                        idSyncDisableSyncs: {},
                        disableIdSyncs: {},
                        idSyncIDCallResult: {},
                        idSyncSSLUseAkamai: {},
                        isCoopSafe: {},
                        loadSSL: {},
                        loadTimeout: {},
                        marketingCloudServer: {},
                        marketingCloudServerSecure: {},
                        overwriteCrossDomainMCIDAndAID: {},
                        resetBeforeVersion: {},
                        sdidParamExpiry: {},
                        serverState: {},
                        sessionCookieName: {},
                        secureCookie: {},
                        takeTimeoutMetrics: {},
                        trackingServer: {},
                        trackingServerSecure: {},
                        whitelistIframeDomains: {},
                        whitelistParentDomain: {}
                    },
                    G = {
                        getConfigNames: function() {
                            return Object.keys(K)
                        },
                        getConfigs: function() {
                            return K
                        }
                    },
                    W = function(e, t, n) {
                        function r(e) {
                            var t = e;
                            return function(e) {
                                var n = e || d.location.href;
                                try {
                                    var r = c._extractParamFromUri(n, t);
                                    if (r) return S.parsePipeDelimetedKeyValues(r)
                                } catch (e) {}
                            }
                        }

                        function i(e) {
                            function t(e, t) {
                                e && e.match(H.VALID_VISITOR_ID_REGEX) && t(e)
                            }
                            t(e[f], c.setMarketingCloudVisitorID), c._setFieldExpire(_, -1), t(e[y], c.setAnalyticsVisitorID)
                        }

                        function o(e) {
                            e = e || {}, c._supplementalDataIDCurrent = e.supplementalDataIDCurrent || "", c._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, c._supplementalDataIDLast = e.supplementalDataIDLast || "", c._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {}
                        }

                        function s(e) {
                            function t(e, t, n) {
                                return n = n ? n += "|" : n, n += e + "=" + encodeURIComponent(t)
                            }

                            function n(e, n) {
                                var r = n[0],
                                    i = n[1];
                                return null != i && i !== w && (e = t(r, i, e)), e
                            }
                            var r = e.reduce(n, "");
                            return function(e) {
                                var t = S.getTimestampInSeconds();
                                return e = e ? e += "|" : e, e += "TS=" + t
                            }(r)
                        }

                        function l(e) {
                            var t = e.minutesToLive,
                                n = "";
                            return (c.idSyncDisableSyncs || c.disableIdSyncs) && (n = n || "Error: id syncs have been disabled"), "string" == typeof e.dpid && e.dpid.length || (n = n || "Error: config.dpid is empty"), "string" == typeof e.url && e.url.length || (n = n || "Error: config.url is empty"), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (n = n || "Error: config.minutesToLive needs to be a positive number")), {
                                error: n,
                                ttl: t
                            }
                        }
                        if (!n || n.split("").reverse().join("") !== e) throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");
                        var c = this;
                        c.version = "3.3.0";
                        var d = a,
                            u = d.Visitor;
                        u.version = c.version, u.AuthState = g.AUTH_STATE, u.OptOut = g.OPT_OUT, d.s_c_in || (d.s_c_il = [], d.s_c_in = 0), c._c = "Visitor", c._il = d.s_c_il, c._in = d.s_c_in, c._il[c._in] = c, d.s_c_in++, c._instanceType = "regular", c._log = {
                            requests: []
                        }, c.marketingCloudOrgID = e, c.cookieName = "AMCV_" + e, c.sessionCookieName = "AMCVS_" + e, c.cookieDomain = M(), c.cookieDomain === d.location.hostname && (c.cookieDomain = ""), c.loadSSL = d.location.protocol.toLowerCase().indexOf("https") >= 0, c.loadTimeout = 3e4, c.CORSErrors = [], c.marketingCloudServer = c.audienceManagerServer = "dpm.demdex.net", c.sdidParamExpiry = 30;
                        var p = d.document,
                            m = null,
                            f = "MCMID",
                            v = "MCIDTS",
                            h = "A",
                            y = "MCAID",
                            b = "AAM",
                            _ = "MCAAMB",
                            w = "NONE",
                            k = function(e) {
                                return !Object.prototype[e]
                            },
                            C = B(c);
                        c.FIELDS = g.FIELDS, c.cookieRead = function(e) {
                            e = encodeURIComponent(e);
                            var t = (";" + p.cookie).split(" ").join(";"),
                                n = t.indexOf(";" + e + "="),
                                r = n < 0 ? n : t.indexOf(";", n + 1);
                            return n < 0 ? "" : decodeURIComponent(t.substring(n + 2 + e.length, r < 0 ? t.length : r))
                        }, c.cookieWrite = function(e, t, n) {
                            var r, i = c.cookieLifetime,
                                a = "";
                            if (t = "" + t, i = i ? ("" + i).toUpperCase() : "", n && "SESSION" !== i && "NONE" !== i) {
                                if (r = "" !== t ? parseInt(i || 0, 10) : -60) n = new Date, n.setTime(n.getTime() + 1e3 * r);
                                else if (1 === n) {
                                    n = new Date;
                                    var o = n.getYear();
                                    n.setYear(o + 2 + (o < 1900 ? 1900 : 0))
                                }
                            } else n = 0;
                            return e && "NONE" !== i ? (c.configs && c.configs.secureCookie && "https:" === location.protocol && (a = "Secure"), p.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; path=/;" + (n ? " expires=" + n.toGMTString() + ";" : "") + (c.cookieDomain ? " domain=" + c.cookieDomain + ";" : "") + a, c.cookieRead(e) === t) : 0
                        }, c.resetState = function(e) {
                            e ? c._mergeServerState(e) : o()
                        }, c._isAllowedDone = !1, c._isAllowedFlag = !1, c.isAllowed = function() {
                            return c._isAllowedDone || (c._isAllowedDone = !0, (c.cookieRead(c.cookieName) || c.cookieWrite(c.cookieName, "T", 1)) && (c._isAllowedFlag = !0)), c._isAllowedFlag
                        }, c.setMarketingCloudVisitorID = function(e) {
                            c._setMarketingCloudFields(e)
                        }, c._use1stPartyMarketingCloudServer = !1, c.getMarketingCloudVisitorID = function(e, t) {
                            if (c.isAllowed()) {
                                c.marketingCloudServer && c.marketingCloudServer.indexOf(".demdex.net") < 0 && (c._use1stPartyMarketingCloudServer = !0);
                                var n = c._getAudienceManagerURLData("_setMarketingCloudFields"),
                                    r = n.url;
                                return c._getRemoteField(f, r, e, t, n)
                            }
                            return ""
                        }, c.getVisitorValues = function(e, t) {
                            var n = {
                                    MCMID: {
                                        fn: c.getMarketingCloudVisitorID,
                                        args: [!0],
                                        context: c
                                    },
                                    MCOPTOUT: {
                                        fn: c.isOptedOut,
                                        args: [void 0, !0],
                                        context: c
                                    },
                                    MCAID: {
                                        fn: c.getAnalyticsVisitorID,
                                        args: [!0],
                                        context: c
                                    },
                                    MCAAMLH: {
                                        fn: c.getAudienceManagerLocationHint,
                                        args: [!0],
                                        context: c
                                    },
                                    MCAAMB: {
                                        fn: c.getAudienceManagerBlob,
                                        args: [!0],
                                        context: c
                                    }
                                },
                                r = t && t.length ? S.pluck(n, t) : n;
                            R(r, e)
                        }, c._currentCustomerIDs = {}, c._customerIDsHashChanged = !1, c._newCustomerIDsHash = "", c.setCustomerIDs = function(e) {
                            function t() {
                                c._customerIDsHashChanged = !1
                            }
                            if (c.isAllowed() && e) {
                                if (!T.isObject(e) || T.isObjectEmpty(e)) return !1;
                                c._readVisitor();
                                var n, r;
                                for (n in e)
                                    if (k(n) && (r = e[n]))
                                        if ("object" == typeof r) {
                                            var i = {};
                                            r.id && (i.id = r.id), void 0 != r.authState && (i.authState = r.authState), c._currentCustomerIDs[n] = i
                                        } else c._currentCustomerIDs[n] = {
                                            id: r
                                        };
                                var a = c.getCustomerIDs(),
                                    o = c._getField("MCCIDH"),
                                    s = "";
                                o || (o = 0);
                                for (n in a) k(n) && (r = a[n], s += (s ? "|" : "") + n + "|" + (r.id ? r.id : "") + (r.authState ? r.authState : ""));
                                c._newCustomerIDsHash = String(c._hash(s)), c._newCustomerIDsHash !== o && (c._customerIDsHashChanged = !0, c._mapCustomerIDs(t))
                            }
                        }, c.getCustomerIDs = function() {
                            c._readVisitor();
                            var e, t, n = {};
                            for (e in c._currentCustomerIDs) k(e) && (t = c._currentCustomerIDs[e], n[e] || (n[e] = {}), t.id && (n[e].id = t.id), void 0 != t.authState ? n[e].authState = t.authState : n[e].authState = u.AuthState.UNKNOWN);
                            return n
                        }, c.setAnalyticsVisitorID = function(e) {
                            c._setAnalyticsFields(e)
                        }, c.getAnalyticsVisitorID = function(e, t, n) {
                            if (!S.isTrackingServerPopulated() && !n) return c._callCallback(e, [""]), "";
                            if (c.isAllowed()) {
                                var r = "";
                                if (n || (r = c.getMarketingCloudVisitorID(function(t) {
                                        c.getAnalyticsVisitorID(e, !0)
                                    })), r || n) {
                                    var i = n ? c.marketingCloudServer : c.trackingServer,
                                        a = "";
                                    c.loadSSL && (n ? c.marketingCloudServerSecure && (i = c.marketingCloudServerSecure) : c.trackingServerSecure && (i = c.trackingServerSecure));
                                    var o = {};
                                    if (i) {
                                        var s = "http" + (c.loadSSL ? "s" : "") + "://" + i + "/id",
                                            l = "d_visid_ver=" + c.version + "&mcorgid=" + encodeURIComponent(c.marketingCloudOrgID) + (r ? "&mid=" + encodeURIComponent(r) : "") + (c.idSyncDisable3rdPartySyncing || c.disableThirdPartyCookies ? "&d_coppa=true" : ""),
                                            d = ["s_c_il", c._in, "_set" + (n ? "MarketingCloud" : "Analytics") + "Fields"];
                                        a = s + "?" + l + "&callback=s_c_il%5B" + c._in + "%5D._set" + (n ? "MarketingCloud" : "Analytics") + "Fields", o.corsUrl = s + "?" + l, o.callback = d
                                    }
                                    return o.url = a, c._getRemoteField(n ? f : y, a, e, t, o)
                                }
                            }
                            return ""
                        }, c.getAudienceManagerLocationHint = function(e, t) {
                            if (c.isAllowed() && c.getMarketingCloudVisitorID(function(t) {
                                    c.getAudienceManagerLocationHint(e, !0)
                                })) {
                                var n = c._getField(y);
                                if (!n && S.isTrackingServerPopulated() && (n = c.getAnalyticsVisitorID(function(t) {
                                        c.getAudienceManagerLocationHint(e, !0)
                                    })), n || !S.isTrackingServerPopulated()) {
                                    var r = c._getAudienceManagerURLData(),
                                        i = r.url;
                                    return c._getRemoteField("MCAAMLH", i, e, t, r)
                                }
                            }
                            return ""
                        }, c.getLocationHint = c.getAudienceManagerLocationHint, c.getAudienceManagerBlob = function(e, t) {
                            if (c.isAllowed() && c.getMarketingCloudVisitorID(function(t) {
                                    c.getAudienceManagerBlob(e, !0)
                                })) {
                                var n = c._getField(y);
                                if (!n && S.isTrackingServerPopulated() && (n = c.getAnalyticsVisitorID(function(t) {
                                        c.getAudienceManagerBlob(e, !0)
                                    })), n || !S.isTrackingServerPopulated()) {
                                    var r = c._getAudienceManagerURLData(),
                                        i = r.url;
                                    return c._customerIDsHashChanged && c._setFieldExpire(_, -1), c._getRemoteField(_, i, e, t, r)
                                }
                            }
                            return ""
                        }, c._supplementalDataIDCurrent = "", c._supplementalDataIDCurrentConsumed = {}, c._supplementalDataIDLast = "", c._supplementalDataIDLastConsumed = {}, c.getSupplementalDataID = function(e, t) {
                            c._supplementalDataIDCurrent || t || (c._supplementalDataIDCurrent = c._generateID(1));
                            var n = c._supplementalDataIDCurrent;
                            return c._supplementalDataIDLast && !c._supplementalDataIDLastConsumed[e] ? (n = c._supplementalDataIDLast, c._supplementalDataIDLastConsumed[e] = !0) : n && (c._supplementalDataIDCurrentConsumed[e] && (c._supplementalDataIDLast = c._supplementalDataIDCurrent, c._supplementalDataIDLastConsumed = c._supplementalDataIDCurrentConsumed, c._supplementalDataIDCurrent = n = t ? "" : c._generateID(1), c._supplementalDataIDCurrentConsumed = {}), n && (c._supplementalDataIDCurrentConsumed[e] = !0)), n
                        }, c.getOptOut = function(e, t) {
                            if (c.isAllowed()) {
                                var n = c._getAudienceManagerURLData("_setMarketingCloudFields"),
                                    r = n.url;
                                return c._getRemoteField("MCOPTOUT", r, e, t, n)
                            }
                            return ""
                        }, c.isOptedOut = function(e, t, n) {
                            if (c.isAllowed()) {
                                t || (t = u.OptOut.GLOBAL);
                                var r = c.getOptOut(function(n) {
                                    var r = n === u.OptOut.GLOBAL || n.indexOf(t) >= 0;
                                    c._callCallback(e, [r])
                                }, n);
                                return r ? r === u.OptOut.GLOBAL || r.indexOf(t) >= 0 : null
                            }
                            return !1
                        }, c._fields = null, c._fieldsExpired = null, c._hash = function(e) {
                            var t, n, r = 0;
                            if (e)
                                for (t = 0; t < e.length; t++) n = e.charCodeAt(t), r = (r << 5) - r + n, r &= r;
                            return r
                        }, c._generateID = q, c._generateLocalMID = function() {
                            var e = c._generateID(0);
                            return P.isClientSideMarketingCloudVisitorID = !0, e
                        }, c._callbackList = null, c._callCallback = function(e, t) {
                            try {
                                "function" == typeof e ? e.apply(d, t) : e[1].apply(e[0], t)
                            } catch (e) {}
                        }, c._registerCallback = function(e, t) {
                            t && (null == c._callbackList && (c._callbackList = {}), void 0 == c._callbackList[e] && (c._callbackList[e] = []), c._callbackList[e].push(t))
                        }, c._callAllCallbacks = function(e, t) {
                            if (null != c._callbackList) {
                                var n = c._callbackList[e];
                                if (n)
                                    for (; n.length > 0;) c._callCallback(n.shift(), t)
                            }
                        }, c._addQuerystringParam = function(e, t, n, r) {
                            var i = encodeURIComponent(t) + "=" + encodeURIComponent(n),
                                a = S.parseHash(e),
                                o = S.hashlessUrl(e);
                            if (-1 === o.indexOf("?")) return o + "?" + i + a;
                            var s = o.split("?"),
                                l = s[0] + "?",
                                c = s[1];
                            return l + S.addQueryParamAtLocation(c, i, r) + a
                        }, c._extractParamFromUri = function(e, t) {
                            var n = new RegExp("[\\?&#]" + t + "=([^&#]*)"),
                                r = n.exec(e);
                            if (r && r.length) return decodeURIComponent(r[1])
                        }, c._parseAdobeMcFromUrl = r(H.ADOBE_MC), c._parseAdobeMcSdidFromUrl = r(H.ADOBE_MC_SDID), c._attemptToPopulateSdidFromUrl = function(t) {
                            var n = c._parseAdobeMcSdidFromUrl(t),
                                r = 1e9;
                            n && n.TS && (r = S.getTimestampInSeconds() - n.TS), n && n.SDID && n.MCORGID === e && r < c.sdidParamExpiry && (c._supplementalDataIDCurrent = n.SDID, c._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0)
                        }, c._attemptToPopulateIdsFromUrl = function() {
                            var t = c._parseAdobeMcFromUrl();
                            if (t && t.TS) {
                                var n = S.getTimestampInSeconds(),
                                    r = n - t.TS;
                                if (Math.floor(r / 60) > H.ADOBE_MC_TTL_IN_MIN || t.MCORGID !== e) return;
                                i(t)
                            }
                        }, c._mergeServerState = function(e) {
                            if (e) try {
                                if (e = function(e) {
                                        return S.isObject(e) ? e : JSON.parse(e)
                                    }(e), e[c.marketingCloudOrgID]) {
                                    var t = e[c.marketingCloudOrgID];
                                    ! function(e) {
                                        S.isObject(e) && c.setCustomerIDs(e)
                                    }(t.customerIDs), o(t.sdid)
                                }
                            } catch (e) {
                                throw new Error("`serverState` has an invalid format.")
                            }
                        }, c._timeout = null, c._loadData = function(e, t, n, r) {
                            t = c._addQuerystringParam(t, "d_fieldgroup", e, 1), r.url = c._addQuerystringParam(r.url, "d_fieldgroup", e, 1), r.corsUrl = c._addQuerystringParam(r.corsUrl, "d_fieldgroup", e, 1), P.fieldGroupObj[e] = !0, r === Object(r) && r.corsUrl && "XMLHttpRequest" === C.corsMetadata.corsType && C.fireCORS(r, n, e)
                        }, c._clearTimeout = function(e) {
                            null != c._timeout && c._timeout[e] && (clearTimeout(c._timeout[e]), c._timeout[e] = 0)
                        }, c._settingsDigest = 0, c._getSettingsDigest = function() {
                            if (!c._settingsDigest) {
                                var e = c.version;
                                c.audienceManagerServer && (e += "|" + c.audienceManagerServer), c.audienceManagerServerSecure && (e += "|" + c.audienceManagerServerSecure), c._settingsDigest = c._hash(e)
                            }
                            return c._settingsDigest
                        }, c._readVisitorDone = !1, c._readVisitor = function() {
                            if (!c._readVisitorDone) {
                                c._readVisitorDone = !0;
                                var e, t, n, r, i, a, o = c._getSettingsDigest(),
                                    s = !1,
                                    l = c.cookieRead(c.cookieName),
                                    d = new Date;
                                if (null == c._fields && (c._fields = {}), l && "T" !== l)
                                    for (l = l.split("|"), l[0].match(/^[\-0-9]+$/) && (parseInt(l[0], 10) !== o && (s = !0), l.shift()), l.length % 2 == 1 && l.pop(), e = 0; e < l.length; e += 2) t = l[e].split("-"), n = t[0], r = l[e + 1], t.length > 1 ? (i = parseInt(t[1], 10), a = t[1].indexOf("s") > 0) : (i = 0, a = !1), s && ("MCCIDH" === n && (r = ""), i > 0 && (i = d.getTime() / 1e3 - 60)), n && r && (c._setField(n, r, 1), i > 0 && (c._fields["expire" + n] = i + (a ? "s" : ""), (d.getTime() >= 1e3 * i || a && !c.cookieRead(c.sessionCookieName)) && (c._fieldsExpired || (c._fieldsExpired = {}), c._fieldsExpired[n] = !0)));
                                !c._getField(y) && S.isTrackingServerPopulated() && (l = c.cookieRead("s_vi")) && (l = l.split("|"), l.length > 1 && l[0].indexOf("v1") >= 0 && (r = l[1], e = r.indexOf("["), e >= 0 && (r = r.substring(0, e)), r && r.match(H.VALID_VISITOR_ID_REGEX) && c._setField(y, r)))
                            }
                        }, c._appendVersionTo = function(e) {
                            var t = "vVersion|" + c.version,
                                n = e ? c._getCookieVersion(e) : null;
                            return n ? F.areVersionsDifferent(n, c.version) && (e = e.replace(H.VERSION_REGEX, t)) : e += (e ? "|" : "") + t, e
                        }, c._writeVisitor = function() {
                            var e, t, n = c._getSettingsDigest();
                            for (e in c._fields) k(e) && c._fields[e] && "expire" !== e.substring(0, 6) && (t = c._fields[e], n += (n ? "|" : "") + e + (c._fields["expire" + e] ? "-" + c._fields["expire" + e] : "") + "|" + t);
                            n = c._appendVersionTo(n), c.cookieWrite(c.cookieName, n, 1)
                        }, c._getField = function(e, t) {
                            return null == c._fields || !t && c._fieldsExpired && c._fieldsExpired[e] ? null : c._fields[e]
                        }, c._setField = function(e, t, n) {
                            null == c._fields && (c._fields = {}), c._fields[e] = t, n || c._writeVisitor()
                        }, c._getFieldList = function(e, t) {
                            var n = c._getField(e, t);
                            return n ? n.split("*") : null
                        }, c._setFieldList = function(e, t, n) {
                            c._setField(e, t ? t.join("*") : "", n)
                        }, c._getFieldMap = function(e, t) {
                            var n = c._getFieldList(e, t);
                            if (n) {
                                var r, i = {};
                                for (r = 0; r < n.length; r += 2) i[n[r]] = n[r + 1];
                                return i
                            }
                            return null
                        }, c._setFieldMap = function(e, t, n) {
                            var r, i = null;
                            if (t) {
                                i = [];
                                for (r in t) k(r) && (i.push(r), i.push(t[r]))
                            }
                            c._setFieldList(e, i, n)
                        }, c._setFieldExpire = function(e, t, n) {
                            var r = new Date;
                            r.setTime(r.getTime() + 1e3 * t), null == c._fields && (c._fields = {}), c._fields["expire" + e] = Math.floor(r.getTime() / 1e3) + (n ? "s" : ""), t < 0 ? (c._fieldsExpired || (c._fieldsExpired = {}), c._fieldsExpired[e] = !0) : c._fieldsExpired && (c._fieldsExpired[e] = !1), n && (c.cookieRead(c.sessionCookieName) || c.cookieWrite(c.sessionCookieName, "1"))
                        }, c._findVisitorID = function(e) {
                            return e && ("object" == typeof e && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : "" + e), e && "NOTARGET" === (e = e.toUpperCase()) && (e = w), e && (e === w || e.match(H.VALID_VISITOR_ID_REGEX)) || (e = "")), e
                        }, c._setFields = function(e, t) {
                            if (c._clearTimeout(e), null != c._loading && (c._loading[e] = !1), P.fieldGroupObj[e] && P.setState(e, !1), "MC" === e) {
                                !0 !== P.isClientSideMarketingCloudVisitorID && (P.isClientSideMarketingCloudVisitorID = !1);
                                var n = c._getField(f);
                                if (!n || c.overwriteCrossDomainMCIDAndAID) {
                                    if (!(n = "object" == typeof t && t.mid ? t.mid : c._findVisitorID(t))) {
                                        if (c._use1stPartyMarketingCloudServer && !c.tried1stPartyMarketingCloudServer) return c.tried1stPartyMarketingCloudServer = !0, void c.getAnalyticsVisitorID(null, !1, !0);
                                        n = c._generateLocalMID()
                                    }
                                    c._setField(f, n)
                                }
                                n && n !== w || (n = ""), "object" == typeof t && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && c._setFields(b, t), c._use1stPartyMarketingCloudServer && t.mid && c._setFields(h, {
                                    id: t.id
                                })), c._callAllCallbacks(f, [n])
                            }
                            if (e === b && "object" == typeof t) {
                                var r = 604800;
                                void 0 != t.id_sync_ttl && t.id_sync_ttl && (r = parseInt(t.id_sync_ttl, 10));
                                var i = I.getRegionAndCheckIfChanged(t, r);
                                c._callAllCallbacks("MCAAMLH", [i]);
                                var a = c._getField(_);
                                (t.d_blob || t.blob) && (a = t.d_blob, a || (a = t.blob), c._setFieldExpire(_, r), c._setField(_, a)), a || (a = ""), c._callAllCallbacks(_, [a]), !t.error_msg && c._newCustomerIDsHash && c._setField("MCCIDH", c._newCustomerIDsHash)
                            }
                            if (e === h) {
                                var o = c._getField(y);
                                o && !c.overwriteCrossDomainMCIDAndAID || (o = c._findVisitorID(t), o ? o !== w && c._setFieldExpire(_, -1) : o = w, c._setField(y, o)), o && o !== w || (o = ""), c._callAllCallbacks(y, [o])
                            }
                            if (c.idSyncDisableSyncs || c.disableIdSyncs) I.idCallNotProcesssed = !0;
                            else {
                                I.idCallNotProcesssed = !1;
                                var s = {};
                                s.ibs = t.ibs, s.subdomain = t.subdomain, I.processIDCallData(s)
                            }
                            if (t === Object(t)) {
                                var l, d;
                                c.isAllowed() && (l = c._getField("MCOPTOUT")), l || (l = w, t.d_optout && t.d_optout instanceof Array && (l = t.d_optout.join(",")), d = parseInt(t.d_ottl, 10), isNaN(d) && (d = 7200), c._setFieldExpire("MCOPTOUT", d, !0), c._setField("MCOPTOUT", l)), c._callAllCallbacks("MCOPTOUT", [l])
                            }
                        }, c._loading = null, c._getRemoteField = function(e, t, n, r, i) {
                            var a, o = "",
                                s = S.isFirstPartyAnalyticsVisitorIDCall(e),
                                l = {
                                    MCAAMLH: !0,
                                    MCAAMB: !0
                                };
                            if (c.isAllowed())
                                if (c._readVisitor(), o = c._getField(e, !0 === l[e]), function() {
                                        return (!o || c._fieldsExpired && c._fieldsExpired[e]) && (!c.disableThirdPartyCalls || s)
                                    }()) {
                                    if (e === f || "MCOPTOUT" === e ? a = "MC" : "MCAAMLH" === e || e === _ ? a = b : e === y && (a = h), a) return !t || null != c._loading && c._loading[a] || (null == c._loading && (c._loading = {}), c._loading[a] = !0, c._loadData(a, t, function(t) {
                                        if (!c._getField(e)) {
                                            t && P.setState(a, !0);
                                            var n = "";
                                            e === f ? n = c._generateLocalMID() : a === b && (n = {
                                                error_msg: "timeout"
                                            }), c._setFields(a, n)
                                        }
                                    }, i)), c._registerCallback(e, n), o || (t || c._setFields(a, {
                                        id: w
                                    }), "")
                                } else o || (e === f ? (c._registerCallback(e, n), o = c._generateLocalMID(), c.setMarketingCloudVisitorID(o)) : e === y ? (c._registerCallback(e, n), o = "", c.setAnalyticsVisitorID(o)) : (o = "", r = !0));
                            return e !== f && e !== y || o !== w || (o = "", r = !0), n && r && c._callCallback(n, [o]), o
                        }, c._setMarketingCloudFields = function(e) {
                            c._readVisitor(), c._setFields("MC", e)
                        }, c._mapCustomerIDs = function(e) {
                            c.getAudienceManagerBlob(e, !0)
                        }, c._setAnalyticsFields = function(e) {
                            c._readVisitor(), c._setFields(h, e)
                        }, c._setAudienceManagerFields = function(e) {
                            c._readVisitor(), c._setFields(b, e)
                        }, c._getAudienceManagerURLData = function(e) {
                            var t = c.audienceManagerServer,
                                n = "",
                                r = c._getField(f),
                                i = c._getField(_, !0),
                                a = c._getField(y),
                                o = a && a !== w ? "&d_cid_ic=AVID%01" + encodeURIComponent(a) : "";
                            if (c.loadSSL && c.audienceManagerServerSecure && (t = c.audienceManagerServerSecure), t) {
                                var s, l, d = c.getCustomerIDs();
                                if (d)
                                    for (s in d) k(s) && (l = d[s], o += "&d_cid_ic=" + encodeURIComponent(s) + "%01" + encodeURIComponent(l.id ? l.id : "") + (l.authState ? "%01" + l.authState : ""));
                                e || (e = "_setAudienceManagerFields");
                                var u = "http" + (c.loadSSL ? "s" : "") + "://" + t + "/id",
                                    p = "d_visid_ver=" + c.version + "&d_rtbd=json&d_ver=2" + (!r && c._use1stPartyMarketingCloudServer ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(c.marketingCloudOrgID) + "&d_nsid=" + (c.idSyncContainerID || 0) + (r ? "&d_mid=" + encodeURIComponent(r) : "") + (c.idSyncDisable3rdPartySyncing || c.disableThirdPartyCookies ? "&d_coppa=true" : "") + (!0 === m ? "&d_coop_safe=1" : !1 === m ? "&d_coop_unsafe=1" : "") + (i ? "&d_blob=" + encodeURIComponent(i) : "") + o,
                                    g = ["s_c_il", c._in, e];
                                return n = u + "?" + p + "&d_cb=s_c_il%5B" + c._in + "%5D." + e, {
                                    url: n,
                                    corsUrl: u + "?" + p,
                                    callback: g
                                }
                            }
                            return {
                                url: n
                            }
                        }, c.appendVisitorIDsTo = function(e) {
                            try {
                                var t = [
                                    [f, c._getField(f)],
                                    [y, c._getField(y)],
                                    ["MCORGID", c.marketingCloudOrgID]
                                ];
                                return c._addQuerystringParam(e, H.ADOBE_MC, s(t))
                            } catch (t) {
                                return e
                            }
                        }, c.appendSupplementalDataIDTo = function(e, t) {
                            if (!(t = t || c.getSupplementalDataID(S.generateRandomString(), !0))) return e;
                            try {
                                var n = s([
                                    ["SDID", t],
                                    ["MCORGID", c.marketingCloudOrgID]
                                ]);
                                return c._addQuerystringParam(e, H.ADOBE_MC_SDID, n)
                            } catch (t) {
                                return e
                            }
                        };
                        var S = {
                            parseHash: function(e) {
                                var t = e.indexOf("#");
                                return t > 0 ? e.substr(t) : ""
                            },
                            hashlessUrl: function(e) {
                                var t = e.indexOf("#");
                                return t > 0 ? e.substr(0, t) : e
                            },
                            addQueryParamAtLocation: function(e, t, n) {
                                var r = e.split("&");
                                return n = null != n ? n : r.length, r.splice(n, 0, t), r.join("&")
                            },
                            isFirstPartyAnalyticsVisitorIDCall: function(e, t, n) {
                                if (e !== y) return !1;
                                var r;
                                return t || (t = c.trackingServer), n || (n = c.trackingServerSecure), !("string" != typeof(r = c.loadSSL ? n : t) || !r.length) && r.indexOf("2o7.net") < 0 && r.indexOf("omtrdc.net") < 0
                            },
                            isObject: function(e) {
                                return Boolean(e && e === Object(e))
                            },
                            removeCookie: function(e) {
                                document.cookie = encodeURIComponent(e) + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;" + (c.cookieDomain ? " domain=" + c.cookieDomain + ";" : "")
                            },
                            isTrackingServerPopulated: function() {
                                return !!c.trackingServer || !!c.trackingServerSecure
                            },
                            getTimestampInSeconds: function() {
                                return Math.round((new Date).getTime() / 1e3)
                            },
                            parsePipeDelimetedKeyValues: function(e) {
                                return e.split("|").reduce(function(e, t) {
                                    var n = t.split("=");
                                    return e[n[0]] = decodeURIComponent(n[1]), e
                                }, {})
                            },
                            generateRandomString: function(e) {
                                e = e || 5;
                                for (var t = "", n = "abcdefghijklmnopqrstuvwxyz0123456789"; e--;) t += n[Math.floor(Math.random() * n.length)];
                                return t
                            },
                            parseBoolean: function(e) {
                                return "true" === e || "false" !== e && null
                            },
                            replaceMethodsWithFunction: function(e, t) {
                                for (var n in e) e.hasOwnProperty(n) && "function" == typeof e[n] && (e[n] = t);
                                return e
                            },
                            pluck: function(e, t) {
                                return t.reduce(function(t, n) {
                                    return e[n] && (t[n] = e[n]), t
                                }, Object.create(null))
                            }
                        };
                        c._helpers = S;
                        var I = z(c, u);
                        c._destinationPublishing = I, c.timeoutMetricsLog = [];
                        var P = {
                            isClientSideMarketingCloudVisitorID: null,
                            MCIDCallTimedOut: null,
                            AnalyticsIDCallTimedOut: null,
                            AAMIDCallTimedOut: null,
                            fieldGroupObj: {},
                            setState: function(e, t) {
                                switch (e) {
                                    case "MC":
                                        !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
                                        break;
                                    case h:
                                        !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
                                        break;
                                    case b:
                                        !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t
                                }
                            }
                        };
                        c.isClientSideMarketingCloudVisitorID = function() {
                            return P.isClientSideMarketingCloudVisitorID
                        }, c.MCIDCallTimedOut = function() {
                            return P.MCIDCallTimedOut
                        }, c.AnalyticsIDCallTimedOut = function() {
                            return P.AnalyticsIDCallTimedOut
                        }, c.AAMIDCallTimedOut = function() {
                            return P.AAMIDCallTimedOut
                        }, c.idSyncGetOnPageSyncInfo = function() {
                            return c._readVisitor(), c._getField("MCSYNCSOP")
                        }, c.idSyncByURL = function(e) {
                            var t = l(e || {});
                            if (t.error) return t.error;
                            var n, r, i = e.url,
                                a = encodeURIComponent,
                                o = I;
                            return i = i.replace(/^https:/, "").replace(/^http:/, ""), n = T.encodeAndBuildRequest(["", e.dpid, e.dpuuid || ""], ","), r = ["ibs", a(e.dpid), "img", a(i), t.ttl, "", n], o.addMessage(r.join("|")), o.requestToProcess(), "Successfully queued"
                        }, c.idSyncByDataSource = function(e) {
                            return e === Object(e) && "string" == typeof e.dpuuid && e.dpuuid.length ? (e.url = "//dpm.demdex.net/ibs:dpid=" + e.dpid + "&dpuuid=" + e.dpuuid, c.idSyncByURL(e)) : "Error: config or config.dpuuid is empty"
                        }, c.publishDestinations = function(e, t, n) {
                            if (n = "function" == typeof n ? n : function() {}, "string" != typeof e || !e.length) return void n({
                                error: "subdomain is not a populated string."
                            });
                            if (!(t instanceof Array && t.length)) return void n({
                                error: "messages is not a populated array."
                            });
                            var r = I;
                            if (!r.readyToAttachIframePreliminary()) return void n({
                                error: "The destination publishing iframe is disabled in the Visitor library."
                            });
                            var i = !1;
                            if (t.forEach(function(e) {
                                    "string" == typeof e && e.length && (r.addMessage(e), i = !0)
                                }), !i) return void n({
                                error: "None of the messages are populated strings."
                            });
                            r.iframe ? (n({
                                message: "The destination publishing iframe is already attached and loaded."
                            }), r.requestToProcess()) : !c.subdomain && c._getField(f) ? (r.subdomain = e, r.doAttachIframe = !0, r.url = r.getUrl(), r.readyToAttachIframe() ? (r.iframeLoadedCallbacks.push(function(e) {
                                n({
                                    message: "Attempted to attach and load the destination publishing iframe through this API call. Result: " + (e.message || "no result")
                                })
                            }), r.attachIframe()) : n({
                                error: "Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."
                            })) : r.iframeLoadedCallbacks.push(function(e) {
                                n({
                                    message: "Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: " + (e.message || "no result")
                                })
                            })
                        }, c._getCookieVersion = function(e) {
                            e = e || c.cookieRead(c.cookieName);
                            var t = H.VERSION_REGEX.exec(e);
                            return t && t.length > 1 ? t[1] : null
                        }, c._resetAmcvCookie = function(e) {
                            var t = c._getCookieVersion();
                            t && !F.isLessThan(t, e) || S.removeCookie(c.cookieName)
                        }, c.setAsCoopSafe = function() {
                            m = !0
                        }, c.setAsCoopUnsafe = function() {
                            m = !1
                        }, c.init = function() {
                            ! function() {
                                if (t && "object" == typeof t) {
                                    c.configs = Object.create(null);
                                    for (var e in t) k(e) && (c[e] = t[e], c.configs[e] = t[e]);
                                    c.idSyncContainerID = c.idSyncContainerID || 0, m = "boolean" == typeof c.isCoopSafe ? c.isCoopSafe : S.parseBoolean(c.isCoopSafe), c.resetBeforeVersion && c._resetAmcvCookie(c.resetBeforeVersion), c._attemptToPopulateIdsFromUrl(), c._attemptToPopulateSdidFromUrl(), c._readVisitor();
                                    var n = c._getField(v),
                                        r = Math.ceil((new Date).getTime() / H.MILLIS_PER_DAY);
                                    c.idSyncDisableSyncs || c.disableIdSyncs || !I.canMakeSyncIDCall(n, r) || (c._setFieldExpire(_, -1), c._setField(v, r)), c.getMarketingCloudVisitorID(), c.getAudienceManagerLocationHint(), c.getAudienceManagerBlob(), c._mergeServerState(c.serverState)
                                } else c._attemptToPopulateIdsFromUrl(), c._attemptToPopulateSdidFromUrl()
                            }(),
                            function() {
                                if (!c.idSyncDisableSyncs && !c.disableIdSyncs) {
                                    I.checkDPIframeSrc();
                                    var e = function() {
                                        var e = I;
                                        e.readyToAttachIframe() && e.attachIframe()
                                    };
                                    d.addEventListener("load", function() {
                                        u.windowLoaded = !0, e()
                                    });
                                    try {
                                        j.receiveMessage(function(e) {
                                            I.receiveMessage(e.data)
                                        }, I.iframeHost)
                                    } catch (e) {}
                                }
                            }(),
                            function() {
                                c.whitelistIframeDomains && H.POST_MESSAGE_ENABLED && (c.whitelistIframeDomains = c.whitelistIframeDomains instanceof Array ? c.whitelistIframeDomains : [c.whitelistIframeDomains], c.whitelistIframeDomains.forEach(function(t) {
                                    var n = new V(e, t),
                                        r = N(c, n);
                                    j.receiveMessage(r, t)
                                }))
                            }()
                        }
                    };
                W.getInstance = function(e, t) {
                        if (!e) throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");
                        e.indexOf("@") < 0 && (e += "@AdobeOrg");
                        var n = function() {
                            var t = a.s_c_il;
                            if (t)
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    if (r && "Visitor" === r._c && r.marketingCloudOrgID === e) return r
                                }
                        }();
                        if (n) return n;
                        var r = e,
                            i = r.split("").reverse().join(""),
                            o = new W(e, null, i);
                        t === Object(t) && t.cookieDomain && (o.cookieDomain = t.cookieDomain),
                            function() {
                                a.s_c_il.splice(--a.s_c_in, 1)
                            }();
                        var s = T.getIeVersion();
                        if ("number" == typeof s && s < 10) return o._helpers.replaceMethodsWithFunction(o, function() {});
                        var l = function() {
                            try {
                                return a.self !== a.parent
                            } catch (e) {
                                return !0
                            }
                        }() && ! function(e) {
                            return e.cookieWrite("TEST_AMCV_COOKIE", "T", 1), "T" === e.cookieRead("TEST_AMCV_COOKIE") && (e._helpers.removeCookie("TEST_AMCV_COOKIE"), !0)
                        }(o) && a.parent ? new E(e, t, o, a.parent) : new W(e, t, i);
                        return o = null, l.init(), l
                    },
                    function() {
                        function e() {
                            W.windowLoaded = !0
                        }
                        a.addEventListener ? a.addEventListener("load", e) : a.attachEvent && a.attachEvent("onload", e), W.codeLoadEnd = (new Date).getTime()
                    }(), W.config = G, a.Visitor = W
            }();
            return function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var i = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
                }
                var n = {};
                t.m = e, t.c = n, t.d = function(e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: r
                    })
                }, t.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, t.t = function(e, n) {
                    if (1 & n && (e = t(e)), 8 & n) return e;
                    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (t.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & n && "string" != typeof e)
                        for (var i in e) t.d(r, i, function(t) {
                            return e[t]
                        }.bind(null, i));
                    return r
                }, t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 0)
            }([function(e, t) {
                "function" != typeof window.DIL && (window.DIL = function(e) {
                    var t, n, r, i, a, o, s, l, c, d, u, p, m, f, g, v, h, y = [];
                    e !== Object(e) && (e = {}), r = e.partner, i = e.containerNSID, a = e.mappings, o = e.uuidCookie, s = !0 === e.enableErrorReporting, l = e.visitorService, c = e.declaredId, d = !0 === e.delayAllUntilWindowLoad, u = void 0 === e.secureDataCollection || !0 === e.secureDataCollection, p = "boolean" == typeof e.isCoopSafe ? e.isCoopSafe : null, m = !0 === e.disableDefaultRequest, f = e.afterResultForDefaultRequest, g = e.visitorConstructor, v = !0 === e.disableCORS, h = !0 === e.ignoreHardDependencyOnVisitorAPI, s && DIL.errorModule.activate(), h && y.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");
                    var b = !0 === window._dil_unit_tests;
                    if ((t = arguments[1]) && y.push(t + ""), !r || "string" != typeof r) {
                        var _ = {
                            name: "error",
                            message: t = "DIL partner is invalid or not specified in initConfig",
                            filename: "dil.js"
                        };
                        return DIL.errorModule.handleError(_), new Error(t)
                    }
                    if (t = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0", (i || "number" == typeof i) && (i = parseInt(i, 10), !isNaN(i) && i >= 0 && (t = "")), t && (i = 0, y.push(t), t = ""), (n = DIL.getDil(r, i)) instanceof DIL && n.api.getPartner() === r && n.api.getContainerNSID() === i) return n;
                    if (!(this instanceof DIL)) return new DIL(e, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + r + " and containerNSID = " + i);
                    DIL.registerDil(this, r, i);
                    var w = {
                        IS_HTTPS: u || "https:" === document.location.protocol,
                        SIX_MONTHS_IN_MINUTES: 259200,
                        IE_VERSION: function() {
                            if (document.documentMode) return document.documentMode;
                            for (var e = 7; e > 4; e--) {
                                var t = document.createElement("div");
                                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                            }
                            return null
                        }()
                    };
                    w.IS_IE_LESS_THAN_10 = "number" == typeof w.IE_VERSION && w.IE_VERSION < 10;
                    var k = {
                            stuffed: {}
                        },
                        C = {},
                        T = {
                            firingQueue: [],
                            fired: [],
                            firing: !1,
                            sent: [],
                            errored: [],
                            reservedKeys: {
                                sids: !0,
                                pdata: !0,
                                logdata: !0,
                                callback: !0,
                                postCallbackFn: !0,
                                useImageRequest: !0
                            },
                            firstRequestHasFired: !1,
                            abortRequests: !1,
                            num_of_cors_responses: 0,
                            num_of_cors_errors: 0,
                            corsErrorSources: [],
                            num_of_img_responses: 0,
                            num_of_img_errors: 0,
                            platformParams: {
                                d_nsid: i + "",
                                d_rtbd: "json",
                                d_jsonv: DIL.jsonVersion + "",
                                d_dst: "1"
                            },
                            nonModStatsParams: {
                                d_rtbd: !0,
                                d_dst: !0,
                                d_cts: !0,
                                d_rs: !0
                            },
                            modStatsParams: null,
                            adms: {
                                TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 3e4,
                                calledBack: !1,
                                mid: null,
                                noVisitorAPI: null,
                                VisitorAPI: null,
                                instance: null,
                                releaseType: "no VisitorAPI",
                                isOptedOut: !0,
                                isOptedOutCallbackCalled: !1,
                                admsProcessingStarted: !1,
                                process: function(e) {
                                    try {
                                        if (this.admsProcessingStarted) return;
                                        this.admsProcessingStarted = !0;
                                        var t, n, r, a, o, s = this,
                                            c = l;
                                        if ("function" == typeof e && "function" == typeof e.getInstance) {
                                            if (c !== Object(c) || !(t = c.namespace) || "string" != typeof t) throw this.releaseType = "no namespace", new Error("DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}");
                                            if ((n = e.getInstance(t, {
                                                    idSyncContainerID: i
                                                })) === Object(n) && n instanceof e && "function" == typeof n.isAllowed && "function" == typeof n.getMarketingCloudVisitorID && "function" == typeof n.getCustomerIDs && "function" == typeof n.isOptedOut && "function" == typeof n.publishDestinations) return this.VisitorAPI = e, n.isAllowed() ? (this.instance = n, r = function(e) {
                                                "VisitorAPI" !== s.releaseType && (s.mid = e, s.releaseType = "VisitorAPI", s.releaseRequests())
                                            }, "string" == typeof(a = n.getMarketingCloudVisitorID(r)) && a.length ? void r(a) : void setTimeout(function() {
                                                "VisitorAPI" !== s.releaseType && (s.releaseType = "timeout", s.releaseRequests())
                                            }, this.getLoadTimeout())) : (this.releaseType = "VisitorAPI is not allowed to write cookies", void this.releaseRequests());
                                            throw this.releaseType = "invalid instance", o = "Invalid Visitor instance.", n === Object(n) && "function" != typeof n.publishDestinations && (o += " In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3+ ."), new Error(o)
                                        }
                                        throw this.noVisitorAPI = !0, new Error("Visitor does not exist.")
                                    } catch (e) {
                                        if (!h) throw new Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: " + e.message);
                                        this.releaseRequests()
                                    }
                                },
                                releaseRequests: function() {
                                    this.calledBack = !0, T.registerRequest()
                                },
                                getMarketingCloudVisitorID: function() {
                                    return this.instance ? this.instance.getMarketingCloudVisitorID() : null
                                },
                                getMIDQueryString: function() {
                                    var e = V.isPopulatedString,
                                        t = this.getMarketingCloudVisitorID();
                                    return e(this.mid) && this.mid === t || (this.mid = t), e(this.mid) ? "d_mid=" + this.mid + "&" : ""
                                },
                                getCustomerIDs: function() {
                                    return this.instance ? this.instance.getCustomerIDs() : null
                                },
                                getCustomerIDsQueryString: function(e) {
                                    if (e === Object(e)) {
                                        var t, n, r, i, a = "",
                                            o = [],
                                            s = [];
                                        for (t in e) e.hasOwnProperty(t) && (s[0] = t, (n = e[t]) === Object(n) && (s[1] = n.id || "", s[2] = n.authState || 0, o.push(s), s = []));
                                        if (i = o.length)
                                            for (r = 0; r < i; r++) a += "&d_cid_ic=" + D.encodeAndBuildRequest(o[r], "%01");
                                        return a
                                    }
                                    return ""
                                },
                                getIsOptedOut: function() {
                                    this.instance ? this.instance.isOptedOut([this, this.isOptedOutCallback], this.VisitorAPI.OptOut.GLOBAL, !0) : (this.isOptedOut = !1, this.isOptedOutCallbackCalled = !0)
                                },
                                isOptedOutCallback: function(e) {
                                    this.isOptedOut = e, this.isOptedOutCallbackCalled = !0, T.registerRequest()
                                },
                                getLoadTimeout: function() {
                                    var e = this.instance;
                                    if (e) {
                                        if ("function" == typeof e.getLoadTimeout) return e.getLoadTimeout();
                                        if (void 0 !== e.loadTimeout) return e.loadTimeout
                                    }
                                    return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE
                                }
                            },
                            declaredId: {
                                declaredId: {
                                    init: null,
                                    request: null
                                },
                                declaredIdCombos: {},
                                setDeclaredId: function(e, t) {
                                    var n = V.isPopulatedString,
                                        r = encodeURIComponent;
                                    if (e === Object(e) && n(t)) {
                                        var i = e.dpid,
                                            a = e.dpuuid,
                                            o = null;
                                        if (n(i) && n(a)) return o = r(i) + "$" + r(a), !0 === this.declaredIdCombos[o] ? "setDeclaredId: combo exists for type '" + t + "'" : (this.declaredIdCombos[o] = !0, this.declaredId[t] = {
                                            dpid: i,
                                            dpuuid: a
                                        }, "setDeclaredId: succeeded for type '" + t + "'")
                                    }
                                    return "setDeclaredId: failed for type '" + t + "'"
                                },
                                getDeclaredIdQueryString: function() {
                                    var e = this.declaredId.request,
                                        t = this.declaredId.init,
                                        n = encodeURIComponent,
                                        r = "";
                                    return null !== e ? r = "&d_dpid=" + n(e.dpid) + "&d_dpuuid=" + n(e.dpuuid) : null !== t && (r = "&d_dpid=" + n(t.dpid) + "&d_dpuuid=" + n(t.dpuuid)), r
                                }
                            },
                            registerRequest: function(e) {
                                var t, n = this.firingQueue;
                                e === Object(e) && n.push(e), this.firing || !n.length || d && !DIL.windowLoaded || (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(), this.adms.calledBack && !this.adms.isOptedOut && this.adms.isOptedOutCallbackCalled && (this.adms.isOptedOutCallbackCalled = !1, (t = n.shift()).src = t.src.replace(/demdex.net\/event\?d_nsid=/, "demdex.net/event?" + this.adms.getMIDQueryString() + "d_nsid="), V.isPopulatedString(t.corsPostData) && (t.corsPostData = t.corsPostData.replace(/^d_nsid=/, this.adms.getMIDQueryString() + "d_nsid=")), P.fireRequest(t), this.firstRequestHasFired || "script" !== t.tag && "cors" !== t.tag || (this.firstRequestHasFired = !0)))
                            },
                            processVisitorAPI: function() {
                                this.adms.process(g || window.Visitor)
                            },
                            getCoopQueryString: function() {
                                var e = "";
                                return !0 === p ? e = "&d_coop_safe=1" : !1 === p && (e = "&d_coop_unsafe=1"), e
                            }
                        },
                        S = {
                            sendingMessages: !1,
                            messages: [],
                            messagesPosted: [],
                            messagesReceived: [],
                            jsonForComparison: [],
                            jsonDuplicates: [],
                            jsonWaiting: [],
                            jsonProcessed: [],
                            requestToProcess: function(e, t) {
                                function n() {
                                    i.jsonForComparison.push(e), i.jsonWaiting.push([e, t])
                                }
                                var r, i = this;
                                if (e && !V.isEmptyObject(e))
                                    if (r = JSON.stringify(e.dests || []), this.jsonForComparison.length) {
                                        var a, o, s, l = !1;
                                        for (a = 0, o = this.jsonForComparison.length; a < o; a++)
                                            if (s = this.jsonForComparison[a], r === JSON.stringify(s.dests || [])) {
                                                l = !0;
                                                break
                                            }
                                        l ? this.jsonDuplicates.push(e) : n()
                                    } else n();
                                if (this.jsonWaiting.length) {
                                    var c = this.jsonWaiting.shift();
                                    this.process(c[0], c[1]), this.requestToProcess()
                                }
                                this.messages.length && !this.sendingMessages && this.sendMessages()
                            },
                            process: function(e, t) {
                                var n, r, i, a, o, s = encodeURIComponent;
                                if (t === Object(t) && D.encodeAndBuildRequest(["", t.dpid || "", t.dpuuid || ""], ","), (n = e.dests) && n instanceof Array && (r = n.length))
                                    for (i = 0; i < r; i++) a = n[i], o = [s("dests"), s(a.id || ""), s(a.y || ""), s(a.c || "")], this.addMessage(o.join("|"));
                                this.jsonProcessed.push(e)
                            },
                            addMessage: function(e) {
                                this.messages.push(e)
                            },
                            sendMessages: function() {
                                this.sendingMessages || (this.sendingMessages = !0, this.messages.length ? (this.publishDestinations(this.messages), this.messages = [], this.sendingMessages = !1) : this.sendingMessages = !1)
                            },
                            publishDestinations: function(e) {
                                var t = T.adms.instance;
                                t && "function" == typeof t.publishDestinations && t.publishDestinations(r, e, function(e) {
                                    y.push("visitor.publishDestinations() result: " + (e.error || e.message))
                                }), Array.prototype.push.apply(this.messagesPosted, e)
                            }
                        },
                        I = {
                            traits: function(e) {
                                return V.isValidPdata(e) && (C.sids instanceof Array || (C.sids = []), D.extendArray(C.sids, e)), this
                            },
                            pixels: function(e) {
                                return V.isValidPdata(e) && (C.pdata instanceof Array || (C.pdata = []), D.extendArray(C.pdata, e)), this
                            },
                            logs: function(e) {
                                return V.isValidLogdata(e) && (C.logdata !== Object(C.logdata) && (C.logdata = {}), D.extendObject(C.logdata, e)), this
                            },
                            customQueryParams: function(e) {
                                return V.isEmptyObject(e) || D.extendObject(C, e, T.reservedKeys), this
                            },
                            signals: function(e, t) {
                                var n, r = e;
                                if (!V.isEmptyObject(r)) {
                                    if (t && "string" == typeof t)
                                        for (n in r = {}, e) e.hasOwnProperty(n) && (r[t + n] = e[n]);
                                    D.extendObject(C, r, T.reservedKeys)
                                }
                                return this
                            },
                            declaredId: function(e) {
                                return T.declaredId.setDeclaredId(e, "request"), this
                            },
                            result: function(e) {
                                return "function" == typeof e && (C.callback = e), this
                            },
                            afterResult: function(e) {
                                return "function" == typeof e && (C.postCallbackFn = e), this
                            },
                            useImageRequest: function() {
                                return C.useImageRequest = !0, this
                            },
                            clearData: function() {
                                return C = {}, this
                            },
                            submit: function() {
                                return P.submitRequest(C), C = {}, this
                            },
                            getPartner: function() {
                                return r
                            },
                            getContainerNSID: function() {
                                return i
                            },
                            getEventLog: function() {
                                return y
                            },
                            getState: function() {
                                var t = {},
                                    n = {};
                                return D.extendObject(t, T, {
                                    registerRequest: !0
                                }), D.extendObject(n, S, {
                                    requestToProcess: !0,
                                    process: !0,
                                    sendMessages: !0
                                }), {
                                    initConfig: e,
                                    pendingRequest: C,
                                    otherRequestInfo: t,
                                    destinationPublishingInfo: n,
                                    log: y
                                }
                            },
                            idSync: function() {
                                throw new Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance")
                            },
                            aamIdSync: function() {
                                throw new Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance")
                            },
                            passData: function(e) {
                                return V.isEmptyObject(e) ? "Error: json is empty or not an object" : (P.defaultCallback(e), e)
                            },
                            getPlatformParams: function() {
                                return T.platformParams
                            },
                            getEventCallConfigParams: function() {
                                var e, t = T,
                                    n = t.modStatsParams,
                                    r = t.platformParams;
                                if (!n) {
                                    for (e in n = {}, r) r.hasOwnProperty(e) && !t.nonModStatsParams[e] && (n[e.replace(/^d_/, "")] = r[e]);
                                    !0 === p ? n.coop_safe = 1 : !1 === p && (n.coop_unsafe = 1), t.modStatsParams = n
                                }
                                return n
                            },
                            setAsCoopSafe: function() {
                                return p = !0, this
                            },
                            setAsCoopUnsafe: function() {
                                return p = !1, this
                            }
                        },
                        P = {
                            corsMetadata: function() {
                                var e = "none";
                                return "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? e = "XMLHttpRequest" : new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/")() && (e = "XMLHttpRequest")), {
                                    corsType: e
                                }
                            }(),
                            getCORSInstance: function() {
                                return "none" === this.corsMetadata.corsType ? null : new window[this.corsMetadata.corsType]
                            },
                            submitRequest: function(e) {
                                return T.registerRequest(P.createQueuedRequest(e)), !0
                            },
                            createQueuedRequest: function(e) {
                                var t, n, r, i, o, s = e.callback,
                                    l = "img";
                                if (!V.isEmptyObject(a))
                                    for (r in a)
                                        if (a.hasOwnProperty(r)) {
                                            if (null == (i = a[r]) || "" === i) continue;
                                            if (r in e && !(i in e) && !(i in T.reservedKeys)) {
                                                if (null == (o = e[r]) || "" === o) continue;
                                                e[i] = o
                                            }
                                        }
                                return V.isValidPdata(e.sids) || (e.sids = []), V.isValidPdata(e.pdata) || (e.pdata = []), V.isValidLogdata(e.logdata) || (e.logdata = {}), e.logdataArray = D.convertObjectToKeyValuePairs(e.logdata, "=", !0), e.logdataArray.push("_ts=" + (new Date).getTime()), "function" != typeof s && (s = this.defaultCallback), t = this.makeRequestSrcData(e), (n = this.getCORSInstance()) && !0 !== e.useImageRequest && (l = "cors"), {
                                    tag: l,
                                    src: t.src,
                                    corsSrc: t.corsSrc,
                                    callbackFn: s,
                                    postCallbackFn: e.postCallbackFn,
                                    useImageRequest: !!e.useImageRequest,
                                    requestData: e,
                                    corsInstance: n,
                                    corsPostData: t.corsPostData
                                }
                            },
                            defaultCallback: function(e, t) {
                                var n, r, i, a, s, l, c, d, u;
                                if ((n = e.stuff) && n instanceof Array && (r = n.length))
                                    for (i = 0; i < r; i++)(a = n[i]) && a === Object(a) && (s = a.cn, l = a.cv, void 0 !== (c = a.ttl) && "" !== c || (c = Math.floor(D.getMaxCookieExpiresInMinutes() / 60 / 24)), d = a.dmn || "." + document.domain.replace(/^www\./, ""), u = a.type, s && (l || "number" == typeof l) && ("var" !== u && (c = parseInt(c, 10)) && !isNaN(c) && D.setCookie(s, l, 24 * c * 60, "/", d, !1), k.stuffed[s] = l));
                                var p, m, f = e.uuid;
                                V.isPopulatedString(f) && (V.isEmptyObject(o) || ("string" == typeof(p = o.path) && p.length || (p = "/"), m = parseInt(o.days, 10), isNaN(m) && (m = 100), D.setCookie(o.name || "aam_did", f, 24 * m * 60, p, o.domain || "." + document.domain.replace(/^www\./, ""), !0 === o.secure))), T.abortRequests || S.requestToProcess(e, t)
                            },
                            makeRequestSrcData: function(e) {
                                e.sids = V.removeEmptyArrayValues(e.sids || []), e.pdata = V.removeEmptyArrayValues(e.pdata || []);
                                var t = T,
                                    n = t.platformParams,
                                    i = D.encodeAndBuildRequest(e.sids, ","),
                                    a = D.encodeAndBuildRequest(e.pdata, ","),
                                    o = (e.logdataArray || []).join("&");
                                delete e.logdataArray;
                                var s, l, c, d = w.IS_HTTPS ? "https://" : "http://",
                                    u = t.declaredId.getDeclaredIdQueryString(),
                                    p = t.adms.instance ? t.adms.getCustomerIDsQueryString(t.adms.getCustomerIDs()) : "",
                                    m = function() {
                                        var n, r, i, a, o = [];
                                        for (n in e)
                                            if (!(n in t.reservedKeys) && e.hasOwnProperty(n))
                                                if (r = e[n], n = encodeURIComponent(n), r instanceof Array)
                                                    for (i = 0, a = r.length; i < a; i++) o.push(n + "=" + encodeURIComponent(r[i]));
                                                else o.push(n + "=" + encodeURIComponent(r));
                                        return o.length ? "&" + o.join("&") : ""
                                    }(),
                                    f = "d_nsid=" + n.d_nsid + t.getCoopQueryString() + u + p + (i.length ? "&d_sid=" + i : "") + (a.length ? "&d_px=" + a : "") + (o.length ? "&d_ld=" + encodeURIComponent(o) : ""),
                                    g = "&d_rtbd=" + n.d_rtbd + "&d_jsonv=" + n.d_jsonv + "&d_dst=" + n.d_dst;
                                return c = l = (s = d + r + ".demdex.net/event") + "?" + f + g + m, l.length > 2048 && (l = l.substring(0, 2048).substring(0, l.lastIndexOf("&"))), {
                                    corsSrc: s + "?_ts=" + (new Date).getTime(),
                                    src: l,
                                    originalSrc: c,
                                    corsPostData: f + g + m,
                                    isDeclaredIdCall: "" !== u
                                }
                            },
                            fireRequest: function(e) {
                                if ("img" === e.tag) this.fireImage(e);
                                else {
                                    var t = T.declaredId,
                                        n = t.declaredId.request || t.declaredId.init || {},
                                        r = {
                                            dpid: n.dpid || "",
                                            dpuuid: n.dpuuid || ""
                                        };
                                    this.fireCORS(e, r)
                                }
                            },
                            fireImage: function(e) {
                                var n, r, i = T;
                                i.abortRequests || (i.firing = !0, n = new Image(0, 0), i.sent.push(e), n.onload = function() {
                                    i.firing = !1, i.fired.push(e), i.num_of_img_responses++, i.registerRequest()
                                }, r = function(n) {
                                    t = "imgAbortOrErrorHandler received the event of type " + n.type, y.push(t), i.abortRequests = !0, i.firing = !1, i.errored.push(e), i.num_of_img_errors++, i.registerRequest()
                                }, n.addEventListener("error", r), n.addEventListener("abort", r), n.src = e.src)
                            },
                            fireCORS: function(e, n) {
                                var i = this,
                                    a = T,
                                    o = this.corsMetadata.corsType,
                                    s = e.corsSrc,
                                    l = e.corsInstance,
                                    c = e.corsPostData,
                                    d = e.postCallbackFn,
                                    u = "function" == typeof d;
                                if (!a.abortRequests && !v) {
                                    a.firing = !0;
                                    try {
                                        l.open("post", s, !0), "XMLHttpRequest" === o && (l.withCredentials = !0, l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.onreadystatechange = function() {
                                            4 === this.readyState && 200 === this.status && function(o) {
                                                var s;
                                                try {
                                                    if ((s = JSON.parse(o)) !== Object(s)) return void i.handleCORSError(e, n, "Response is not JSON")
                                                } catch (t) {
                                                    return void i.handleCORSError(e, n, "Error parsing response as JSON")
                                                }
                                                try {
                                                    var l = e.callbackFn;
                                                    a.firing = !1, a.fired.push(e), a.num_of_cors_responses++, l(s, n), u && d(s, n)
                                                } catch (e) {
                                                    e.message = "DIL handleCORSResponse caught error with message " + e.message, t = e.message, y.push(t), e.filename = e.filename || "dil.js", e.partner = r, DIL.errorModule.handleError(e);
                                                    try {
                                                        l({
                                                            error: e.name + "|" + e.message
                                                        }, n), u && d({
                                                            error: e.name + "|" + e.message
                                                        }, n)
                                                    } catch (e) {}
                                                } finally {
                                                    a.registerRequest()
                                                }
                                            }(this.responseText)
                                        }), l.onerror = function() {
                                            i.handleCORSError(e, n, "onerror")
                                        }, l.ontimeout = function() {
                                            i.handleCORSError(e, n, "ontimeout")
                                        }, l.send(c)
                                    } catch (t) {
                                        this.handleCORSError(e, n, "try-catch")
                                    }
                                    a.sent.push(e), a.declaredId.declaredId.request = null
                                }
                            },
                            handleCORSError: function(e, t, n) {
                                T.num_of_cors_errors++, T.corsErrorSources.push(n)
                            },
                            handleRequestError: function(e, t) {
                                var n = T;
                                y.push(e), n.abortRequests = !0, n.firing = !1, n.errored.push(t), n.registerRequest()
                            }
                        },
                        V = {
                            isValidPdata: function(e) {
                                return !!(e instanceof Array && this.removeEmptyArrayValues(e).length)
                            },
                            isValidLogdata: function(e) {
                                return !this.isEmptyObject(e)
                            },
                            isEmptyObject: function(e) {
                                if (e !== Object(e)) return !0;
                                var t;
                                for (t in e)
                                    if (e.hasOwnProperty(t)) return !1;
                                return !0
                            },
                            removeEmptyArrayValues: function(e) {
                                var t, n = 0,
                                    r = e.length,
                                    i = [];
                                for (n = 0; n < r; n++) void 0 !== (t = e[n]) && null !== t && "" !== t && i.push(t);
                                return i
                            },
                            isPopulatedString: function(e) {
                                return "string" == typeof e && e.length
                            }
                        },
                        D = {
                            convertObjectToKeyValuePairs: function(e, t, n) {
                                var r, i, a = [];
                                for (r in t || (t = "="), e) e.hasOwnProperty(r) && void 0 !== (i = e[r]) && null !== i && "" !== i && a.push(r + t + (n ? encodeURIComponent(i) : i));
                                return a
                            },
                            encodeAndBuildRequest: function(e, t) {
                                return e.map(function(e) {
                                    return encodeURIComponent(e)
                                }).join(t)
                            },
                            getCookie: function(e) {
                                var t, n, r, i = e + "=",
                                    a = document.cookie.split(";");
                                for (t = 0, n = a.length; t < n; t++) {
                                    for (r = a[t];
                                        " " === r.charAt(0);) r = r.substring(1, r.length);
                                    if (0 === r.indexOf(i)) return decodeURIComponent(r.substring(i.length, r.length))
                                }
                                return null
                            },
                            setCookie: function(e, t, n, r, i, a) {
                                var o = new Date;
                                n && (n = 1e3 * n * 60), document.cookie = e + "=" + encodeURIComponent(t) + (n ? ";expires=" + new Date(o.getTime() + n).toUTCString() : "") + (r ? ";path=" + r : "") + (i ? ";domain=" + i : "") + (a ? ";secure" : "")
                            },
                            extendArray: function(e, t) {
                                return e instanceof Array && t instanceof Array && (Array.prototype.push.apply(e, t), !0)
                            },
                            extendObject: function(e, t, n) {
                                var r;
                                if (e === Object(e) && t === Object(t)) {
                                    for (r in t)
                                        if (t.hasOwnProperty(r)) {
                                            if (!V.isEmptyObject(n) && r in n) continue;
                                            e[r] = t[r]
                                        }
                                    return !0
                                }
                                return !1
                            },
                            getMaxCookieExpiresInMinutes: function() {
                                return w.SIX_MONTHS_IN_MINUTES
                            },
                            replaceMethodsWithFunction: function(e, t) {
                                var n;
                                if (e === Object(e) && "function" == typeof t)
                                    for (n in e) e.hasOwnProperty(n) && "function" == typeof e[n] && (e[n] = t)
                            }
                        };
                    "error" === r && 0 === i && window.addEventListener("load", function() {
                        DIL.windowLoaded = !0
                    });
                    var E = !1,
                        A = function() {
                            E || (E = !0, T.registerRequest(), O())
                        },
                        O = function() {
                            setTimeout(function() {
                                m || T.firstRequestHasFired || ("function" == typeof f ? I.afterResult(f).submit() : I.submit())
                            }, DIL.constants.TIME_TO_DEFAULT_REQUEST)
                        },
                        x = document;
                    "error" !== r && (DIL.windowLoaded ? A() : "complete" !== x.readyState && "loaded" !== x.readyState ? window.addEventListener("load", function() {
                        DIL.windowLoaded = !0, A()
                    }) : (DIL.windowLoaded = !0, A())), T.declaredId.setDeclaredId(c, "init"), T.processVisitorAPI(), w.IS_IE_LESS_THAN_10 && D.replaceMethodsWithFunction(I, function() {
                        return this
                    }), this.api = I, this.getStuffedVariable = function(e) {
                        var t = k.stuffed[e];
                        return t || "number" == typeof t || (t = D.getCookie(e)) || "number" == typeof t || (t = ""), t
                    }, this.validators = V, this.helpers = D, this.constants = w, this.log = y, b && (this.pendingRequest = C, this.requestController = T, this.destinationPublishing = S, this.requestProcs = P, this.variables = k, this.callWindowLoadFunctions = A)
                }, DIL.extendStaticPropertiesAndMethods = function(e) {
                    var t;
                    if (e === Object(e))
                        for (t in e) e.hasOwnProperty(t) && (this[t] = e[t])
                }, DIL.extendStaticPropertiesAndMethods({
                    version: "8.0",
                    jsonVersion: 1,
                    constants: {
                        TIME_TO_DEFAULT_REQUEST: 50
                    },
                    variables: {
                        scriptNodeList: document.getElementsByTagName("script")
                    },
                    windowLoaded: !1,
                    dils: {},
                    isAddedPostWindowLoad: function() {
                        var e = arguments[0];
                        this.windowLoaded = "function" == typeof e ? !!e() : "boolean" != typeof e || e
                    },
                    create: function(e) {
                        try {
                            return new DIL(e)
                        } catch (e) {
                            throw new Error("Error in attempt to create DIL instance with DIL.create(): " + e.message)
                        }
                    },
                    registerDil: function(e, t, n) {
                        var r = t + "$" + n;
                        r in this.dils || (this.dils[r] = e)
                    },
                    getDil: function(e, t) {
                        var n;
                        return "string" != typeof e && (e = ""), t || (t = 0), (n = e + "$" + t) in this.dils ? this.dils[n] : new Error("The DIL instance with partner = " + e + " and containerNSID = " + t + " was not found")
                    },
                    dexGetQSVars: function(e, t, n) {
                        var r = this.getDil(t, n);
                        return r instanceof this ? r.getStuffedVariable(e) : ""
                    }
                }), DIL.errorModule = function() {
                    var e = DIL.create({
                            partner: "error",
                            containerNSID: 0,
                            ignoreHardDependencyOnVisitorAPI: !0
                        }),
                        t = {
                            harvestererror: 14138,
                            destpuberror: 14139,
                            dpmerror: 14140,
                            generalerror: 14137,
                            error: 14137,
                            noerrortypedefined: 15021,
                            evalerror: 15016,
                            rangeerror: 15017,
                            referenceerror: 15018,
                            typeerror: 15019,
                            urierror: 15020
                        },
                        n = !1;
                    return {
                        activate: function() {
                            n = !0
                        },
                        handleError: function(r) {
                            if (!n) return "DIL error module has not been activated";
                            r !== Object(r) && (r = {});
                            var i = r.name ? (r.name + "").toLowerCase() : "",
                                a = i in t ? t[i] : t.noerrortypedefined,
                                o = [],
                                s = {
                                    name: i,
                                    filename: r.filename ? r.filename + "" : "",
                                    partner: r.partner ? r.partner + "" : "no_partner",
                                    site: r.site ? r.site + "" : document.location.href,
                                    message: r.message ? r.message + "" : ""
                                };
                            return o.push(a), e.api.pixels(o).logs(s).useImageRequest().submit(), "DIL error report sent"
                        },
                        pixelMap: t
                    }
                }(), DIL.tools = {}, DIL.modules = {
                    helpers: {
                        handleModuleError: function(e, t, n) {
                            var r = "",
                                i = t || "Error caught in DIL module/submodule: ";
                            return e === Object(e) ? r = i + (e.message || "err has no message") : (r = i + "err is not a valid object", e = {}), e.message = r, n instanceof DIL && (e.partner = n.api.getPartner()), DIL.errorModule.handleError(e), this.errorMessage = r, r
                        }
                    }
                })
            }]), t
        }), define("controller/vendor/Omni", ["underscore", "bean", "controller/vendor/utility", "scode", "url", "models/variable/utility", "models/variable/common/site", "models/variable/common/siteCode", "models/variable/common/category", "models/variable/common/categoryCode", "tld"], function(e, t, n, r, i, a, o, s, l, c, d) {
            var u, p = i("hostname"),
                m = {
                    isBox: p.indexOf("disneysubscription") > -1,
                    isStore: p.indexOf("shopdisney") > -1 || p.indexOf("disneystore") > -1 || p.indexOf("disneysubscription") > -1,
                    trackPage: function(e, t) {
                        this.checkInit(t);
                        var r = n.getParams("tP", "omni", e, t);
                        this.send(r, "tP", e)
                    },
                    trackGame: function(e, t) {
                        this.checkInit(t);
                        var r = n.getParams("tG", "omni", e, t);
                        this.send(r, "tG", e)
                    },
                    trackVideo: function(e, t) {
                        this.checkInit(t);
                        var r = n.getParams("tV", "omni", e, t);
                        this.send(r, "tV", e)
                    },
                    trackLink: function(e, t) {
                        this.checkInit(t);
                        var r = n.getParams("tL", "omni", e, t);
                        this.send(r, "tL", e, t)
                    },
                    trackEvent: function(e, t) {
                        this.checkInit(t);
                        var r = n.getParams("tE", "omni", e, t);
                        this.send(r, "tE", e)
                    },
                    trackApp: function(e, t) {
                        this.checkInit(t);
                        var r = n.getParams("tA", "omni", e, t);
                        this.send(r, "tA", e)
                    },
                    trackPrint: function(e, t) {
                        this.checkInit(t);
                        var r = n.getParams("tPr", "omni", e, t);
                        this.send(r, "tPr", e)
                    },
                    getCookie: function(e) {
                        var t, n, r, i = document.cookie.split(";");
                        for (t = 0; t < i.length; t++)
                            if (n = i[t].slice(0, i[t].indexOf("=")), r = i[t].slice(i[t].indexOf("=") + 1), (n = n.replace(/^\s+|\s+$/g, "")) === e) return decodeURIComponent(r)
                    },
                    setSessionCookie: function(e, t) {
                        document.cookie = e + "=" + t + ";path=/"
                    },
                    checkInit: function(e) {
                        var t = a.getValue({}, "account", e),
                            n = a.getValue({}, "country", e),
                            r = a.getValue({}, "region", e),
                            i = a.getValue({}, "buCode", e) || a.getValue({}, "unit", e),
                            d = c.getValue({}, e) || l.getValue({}, e) || "",
                            p = s.getValue({}, e) || o.getValue({}, e),
                            m = a.getValue({}, "searchTypeCode", e) || a.getValue({}, "searchType", e) || a.getValue({}, "searchFlow", e),
                            f = a.getValue({}, "internalSearchPhrase", e) || a.getValue({}, "searchPhrase", e),
                            g = a.getValue({}, "genreCode", e) || a.getValue({}, "genre", e);
                        if (this.hasInit) {
                            var v = this.getOmniAccountName(t, d, p, m, f, g, "trackpage", i);
                            u.un = v, u.oun = v
                        } else this.init(t, n, r, i, d, p, m, f, g, "trackpage", e)
                    },
                    init: function(e, t, n, i, a, o, s, l, c, d) {
                        if ("emea" == n) u || (u = r(e, !1, !0), this.extraOmniInit(u, t)), u.visitorNamespace = "disneyinternational", u.charSet = "UTF-8";
                        else {
                            var p = this.getOmniAccountName(e, a, o, s, l, c, d, i);
                            u || (u = r(p, !1, !0), this.extraOmniInit(u, t)), u.visitorNamespace = "dol", u.un = p, u.oun = p
                        }
                        return m.isStore && (u.setTagContainer("DisneyStoreDesktop"), window.optimizely = window.optimizely || [], window.optimizely.push("activateSiteCatalyst"), u.visitor = Visitor.getInstance("EDA101AC512D2B230A490D4C@AdobeOrg")), u.trackingServer = "w88.go.com", u.trackingServerSecure = "sw88.go.com", this.hasInit = !0, !0
                    },
                    send: function(t, n, r, i) {
                        r = r || {}, u.linkTrackEvents = [], u.linkTrackVars = [];
                        var o = [],
                            s = [];
                        e.each(t.eventMapping, function(e) {
                            e.eventValue || 0 == e.eventValue ? o.push(e.mapping + "=" + e.eventValue) : o.push(e.mapping)
                        });
                        var l = "";
                        if (t.events) {
                            var c = t.events.split(",");
                            for (var d in c) l = c[d], l.indexOf("=") > -1 ? s.push(l.substring(0, l.indexOf("="))) : s.push(l), o.push(l)
                        }
                        var p = e.uniq(o);
                        if (u.linkTrackEvents = e.uniq(s), p = p.join(","), u.events = "", p && (u.events = p, u.linkTrackVars.push("events")), e.each(t.mappings, function(e) {
                                m.isStore ? u[e.mapping] = e.value : u[e.mapping] = e.value.toLowerCase ? e.value.toLowerCase() : e.value, u.linkTrackVars.push(e.mapping)
                            }), u.linkTrackVars = u.linkTrackVars.join(","), u.linkTrackEvents = u.linkTrackEvents.join(","), u.pageURL = location.href, u.currencyCode = cto.currencyCode || u.currencyCode, !m.isStore && r.hasOwnProperty("titlerevenue")) {
                            var f, g = 0,
                                v = ";;;;";
                            for (var d in t.eventMapping) {
                                if (f = t.eventMapping[d], "titlerevenue" === f.id || "titlerevenueCount" === f.id) {
                                    if ((u.products ? u.products.indexOf(f.mapping + "=") : -1) > -1) {
                                        for (var h = u.products.split(","), y = 0; y < h.length; y++)
                                            if (h[y].match(f.mapping + "=[0-9]*")) {
                                                h.splice(y, 1);
                                                break
                                            }
                                        u.products = h.join(";")
                                    }
                                    4 != v.length && (v += ";"), v += f.mapping + "=" + f.value, g++
                                }
                                if (g > 1) {
                                    u.products = u.apl(u.products, v, "", 0), -1 == u.linkTrackVars.indexOf("products") && (u.linkTrackVars += ",products");
                                    break
                                }
                            }
                        }
                        if ("tV" !== n && "tG" !== n || u.events)
                            if ("tL" === n || "tV" === n || "tG" === n || "tA" === n || "tE" === n || "tPr" === n) {
                                var b;
                                "tL" === n && (b = a.getValue({
                                    videoEvent: r,
                                    gameEvent: r,
                                    linkEvent: r,
                                    eventEvent: r,
                                    appEvent: r,
                                    printEvent: r,
                                    pageEvent: r,
                                    unloadEvent: r
                                }, "linkName", i));
                                var _ = b || n;
                                u.tl(!0, "o", _)
                            } else "tP" === n && u.t();
                        else;
                        e.each(t.mappings, function(e) {
                            delete u[e.mapping]
                        }), delete u.events
                    },
                    getOmniAccountName: function(t, n, r, i, a, o, s, l) {
                        var c = -1 !== t.indexOf("exclude"),
                            u = [],
                            p = {
                                doltest: "wdgdolgenericsite",
                                doltestdev: "wdgdolgenericsitedev",
                                doltest1: "wdgdoltesting1",
                                doltest2: "wdgdoltesting2",
                                doltest3: "wdgdoltesting3",
                                disneyinteractivestudios: "wdgdolint",
                                disneymovieclub: "wdgdoldmc,wdgdolstusec",
                                disneymovierewards: "wdgdoldmr,wdgdolstusec",
                                disneydvd: "wdgdoldvd,wdgdolstusec",
                                disneygiftexpress: "wdgdoldge,wdgdolstusec",
                                corporate: "wdgdolcorp",
                                dcnabckids: "wdgdolabckids",
                                dcndisneychannel: "wdgdoldch",
                                disneyxd: "wdgdoldxd",
                                dcnjetix: "wdgdoljtx",
                                dcnplayhouse: "wdgdolpla",
                                dcntoondisney: "wdgdoltoo",
                                disneybaby: "wdgdoldbb,wdgdolfamsec",
                                disneybooks: "wdgdoldbk",
                                disneydigitalbooks: "wdgdolddbk",
                                disneydigitalbooksdev: "wdgdolddbkdev",
                                familymuseum: "wdgdoldfm",
                                disneygallery: "wdgdoldg",
                                disneygiftcard: "wdgdoldgc",
                                disneyhealthykids: "wdgdoldhk",
                                disneyhome: "wdgdoldho",
                                disneylive: "wdgdoldle,wdgdolstusec",
                                disneyonbroadway: "wdgdoldob,wdgdoldobru,wdgdolstusec",
                                disneyonice: "wdgdoldoi,wdgdolstusec",
                                disneypictures: "wdgdoldpic,wdgdolstusec",
                                disneypintrader: "wdgdoldpt",
                                disneyvault28: "wdgdolv28",
                                disneyrewardsvisa: "wdgdoldvr",
                                adsales: "wdgdolad",
                                disneyconnection: "wdgdoldcn",
                                disneygamedownloads: "wdgdolgdw",
                                disneycom: "wdgdsec",
                                disneypreschool: "wdgdoldpre",
                                piratesonline: "wdgdolpironl",
                                preschooltime: "wdgdolpre",
                                toontown: "wdgdoltnt",
                                pixiehollow: "wdgdolpih",
                                elcapitan: "wdgdolelc,wdgdolstusec",
                                gamekingdom: "wdgdoldgk",
                                mixcentral: "wdgdolmc",
                                radiodisney: "wdgdolrad",
                                disneyparks: "wdgwdprodp,wdgwdprosec,wdgdsec",
                                disneyshopping: "wdgdsishopping",
                                clubpenguin: "wdgdolclp",
                                waltdisneyrecords: "wdgdolwdr,wdgdolstusec",
                                videoondemand: "wdgdolvod",
                                babyeinstein: "wdgdolbbe",
                                disneyeducationproducts: "wdgdoldep",
                                studiorollup: "wdgdolstusec",
                                worldofcars: "wdgdolwoc",
                                toystory: "wdgdoltoy",
                                disneymediasalesmarketing: "wdgdoldmsm",
                                familycom: "wdgdolfcom,wdgdolfamsec",
                                familyfuncom: "wdgdolfam,wdgdolfamsec",
                                wondertimecom: "wdgdolwnd,wdgdolfamsec",
                                gocom: "wdgdolgoc,wdgdolfamsec",
                                iparenting: "wdgdolipa,wdgdolfamsec",
                                family: "wdgdolfamsec",
                                enfamilia: "wdgdoldef,wdgdolfamsec",
                                familytravel: "wdgdolfcom,wdgdolfamsec,wdgwdprofamilytravel",
                                pregnancytoday: "wdgdolpreg,wdgdolfamsec",
                                kaboose: "wdgdolkabo,wdgdolfamsec",
                                babyzone: "wdgdolbbz,wdgdolfamsec",
                                funschool: "wdgdolfus,wdgdolfamsec",
                                amazingmoms: "wdgdolamm,wdgdolfamsec",
                                kaboosedev: "wdgdolkabodev,wdgdolfamsecdev",
                                babyzonedev: "wdgdolbbzdev,wdgdolfamsecdev",
                                funschooldev: "wdgdolfusdev,wdgdolfamsecdev",
                                amazingmomsdev: "wdgdolammdev,wdgdolfamsecdev",
                                familygap: "wdgdolgap",
                                videocom: "wdgvid,wdgdolstusec",
                                miramaxcom: "wdgmrmx,wdgdolstusec",
                                touchstone: "wdgtch,wdgdolstusec",
                                hollywoodrecords: "wdgbvmuhr,wdgdolstusec",
                                lyricstreetrecords: "wdgbvmulsr,wdgdolstusec",
                                disneyvideos: "wdgdoldvid",
                                disneygames: "wdgdoldgam",
                                disneycharacters: "wdgdoldchr",
                                disneyfans: "wdgdoldfan",
                                disneyurock: "wdgdoldurts",
                                cars: "wdgdolcar",
                                fairies: "wdgdolfai",
                                hannahmontana: "wdgdolhan",
                                highschoolmusical: "wdgdolhsm",
                                mickey: "wdgdolmic",
                                jonasbrothers: "wdgdoljbr",
                                pirates: "wdgdolpir",
                                disneyonstage: "wdgdoldos",
                                tron: "wdgdoltrn",
                                disneycreate: "wdgdolcr8",
                                princess: "wdgdolpri",
                                pooh: "wdgdolpoo",
                                alice: "wdgdolali",
                                persia: "wdgdolpop",
                                camprock: "wdgdolcmp",
                                disneyband: "wdgdoliitb",
                                phineasferb: "wdgdolphf",
                                waverly: "wdgdolwiz",
                                zekeluther: "wdgdolzkl",
                                sorcerer: "wdgdolsor",
                                tangled: "wdgdoltan",
                                disneysearch: "wdgdolser",
                                guestservices: "wdgdolgsrv",
                                registration: "wdgdolreg",
                                d2c: "wdgdold2c",
                                d2cdfile: "wdgdold2cdf",
                                d2cdev: "wdgdold2cdev",
                                d2cdfiledev: "wdgdold2cdfdev",
                                d2cfnf: "wdgdold2cfnf",
                                disneymagichealthyliving: "wdgdoldmhl",
                                musiccategory: "wdgdoldmuscat",
                                bookscategory: "wdgdoldbkcat",
                                liveeventscategory: "wdgdoldlecat",
                                moviescategory: "wdgdoldmovcat",
                                tvcategory: "wdgdoldtvcat",
                                trongames: "wdgdoltrng",
                                disneyjunior: "wdgdoldjr",
                                tvapp: "wdgdoltvapp",
                                d2cdisneymovierewards: "wdgdold2cdmr",
                                portfolio: "wdgdoldpor",
                                avengers: "wdgdolaemh",
                                shakeitup: "wdgdolsiu",
                                fishhooks: "wdgdolfish",
                                charlie: "wdgdolglc",
                                marsneedsmoms: "wdgdolmnm",
                                marvel: "wdgdolmarv",
                                marveldcom: "wdgdolmarvdcom",
                                marveldxd: "wdgdolmarvdxd",
                                marvelfamily: "wdgdolmarvfam",
                                prom: "wdgdolprom",
                                muppets: "wdgdolmup",
                                artofdisneyparks: "wdgdolartdp",
                                secondscreen: "wdgdolss",
                                mydisney: "wdgdolmyd",
                                buddies: "wdgdolfranbds",
                                friendsforchange: "wdgdolffc",
                                lionking: "wdgdollio",
                                mydcast: "wdgdolmydcast",
                                johncarter: "wdgdoljcm",
                                brave: "wdgdolbrave",
                                d23: "wdgdold23",
                                fashionlounge: "wdgdoldfl",
                                disneymagichealthylivingrollup: "wdgdolmhlru",
                                planes: "wdgdolplanes",
                                dsaa: "wdgdsaa",
                                frankenweenie: "wdgdolfkw",
                                wheresmywater: "wdgdolwmw",
                                babble: "wdgdolbabble,wdgdolfamsec",
                                rulethemix: "wdgdolrtm",
                                spoonful: "wdgdolspoon,wdgdolfamsec",
                                disneyfamilydeals: "wdgdoldfd,wdgdolfamsec",
                                summertoremember: "wdgdols2rem",
                                disneyvideo2: "wdgdoldvid2",
                                disneycollections: "wdgdoldcol",
                                timothygreen: "wdgdoldtim",
                                wreckitralph: "wdgdolwir",
                                findingnemo: "wdgdolnem",
                                hallmarkeverydayideas: "wdgdoldhei",
                                wheresmyperry: "wdgdolwmp",
                                ozg: "wdgdoloz",
                                stylestudio: "wdgdolmymstud",
                                disneydebit: "wdgdoldde",
                                pixeld: "wdgdoldpixeld",
                                beverlyhillschihuahua: "wdgdolbhc",
                                distrofacebook: "wdgdoldditfb",
                                disneymovies: "wdgdoldmov",
                                disneymusic: "wdgdoldmus",
                                disneygames2: "wdgdoldgam2",
                                disneyhomepage: "wdgdoldhom",
                                disneystaro: "wdgdolstar",
                                disneysitesearch: "wdgdoldss",
                                disneycomhomepage: "wdgdoldcomhp",
                                disneyloneranger: "wdgdollone",
                                disneyblogs: "wdgdoldblog",
                                monstersuniversity: "wdgdolmonu",
                                monstersuniversity2: "wdgdolmonuni",
                                disneyvacationclub: "wdgdoldvc",
                                monsterinc: "wdgdolmon",
                                disneyshows: "wdgdoldsho",
                                disneycharacters2: "wdgdoldchr2",
                                disneyinfinity: "wdgdoldinf",
                                memorymaker: "wdgdolfsto",
                                matterhorn: "",
                                disneyprincessandme: "wdgdcpprinme",
                                disneyprincessandmedev: "wdgdcpprinmedev",
                                disneymagazines: "wdgdpwmagazines",
                                disneymagazinesdev: "wdgdpwmagazinesdev",
                                disneyearthday: "wdgcorpearthday",
                                disneytheatricallicensing: "wdgstutheaterlicensing",
                                disneytheatricallicensingdev: "wdgstutheaterlicensingdev",
                                disneymediamktg: "wdgabcchannelmktg",
                                disneymediamktgdev: "wdgabcchannelmktgdev",
                                disneydisasterrelief: "wdgcorpdisaster",
                                disneydisasterreliefdev: "wdgcorpdisasterdev",
                                disneydcljobs: "wdgwdprdcljobs",
                                disneydcljobsdev: "wdgwdprdcljobsdev",
                                disneyimaginations: "wdgwdprimaginations",
                                disneyimaginationsdev: "wdgwdprimaginationsdev",
                                disneystudioservices: "wdgstuservices",
                                disneystudioservicesdev: "wdgstuservicesdev",
                                disneystudiocorpcomm: "wdgstucorpsite",
                                disneystudiocorpcommdev: "wdgstucorpsitedev",
                                disneystudiodigitalservices: "wdgstuddss",
                                disneystudiolicensing: "wdgstulicensing",
                                disneystudiolicensingdev: "wdgstulicensingdev",
                                disneydebitcard: "wdgcorpdebit",
                                disneydebitcarddev: "wdgcorpdebitdev",
                                wdgwdolmobilethree: "wdgwdolmobilethree",
                                disneyonbroadwaymobile: "wdgdoldobmob,wdgdoldobru,wdgdolstusec",
                                wdgwdoldmr: "wdgwdoldmr"
                            },
                            m = {
                                "starwars.com": "wdgdolstarcom,wdgdollucas",
                                "lucasfilm.com": "wdgdollucasfilm,wdgdollucas",
                                "lucasarts.com": "wdgdollucasarts,wdgdollucas",
                                "ilm.com": "wdgdollucas",
                                "skysound.com": "wdgdollucas",
                                "sienarfleetsystems.com": "wdgdollucas",
                                "openexr.com": "wdgdollucas",
                                "alembic.io": "wdgdollucas"
                            },
                            f = {
                                latam: "i",
                                luc: "d",
                                dcore: "d",
                                dcom: "d",
                                dtv: "d",
                                dgame: "d",
                                wdpro: "d",
                                dfam: "d",
                                ddit: "d",
                                ddif: "d",
                                dshop: "d",
                                dmus: "d",
                                dlive: "d",
                                dmov: "d",
                                dmob: "d",
                                corp: "d",
                                dpw: "d",
                                dcp: "d",
                                abc: "d",
                                wdpr: "d",
                                stu: "d",
                                internal: "n",
                                tools: "n"
                            };
                        if ("d" === f[n] && -1 === t.indexOf("wdgint")) {
                            if ("luc" === n && u.push("wdgdollucas"), "starwars" === r && u.push("wdgdolstarcom"), "lucasfilm" === r && u.push("wdgdollucasfilm"), 0 == t.indexOf("dev")) return "wdgdsecdev";
                            c || u.push("wdgdsec"), "ddit" == n && u.push("wdgdolddit"), "dcom" == n && -1 == t.indexOf("disneysitesearch") && "" != i && "string" == typeof i && "" != a && "string" == typeof a && u.push("wdgdoldss"), -1 !== l.indexOf("dch") && u.push("wdgdoldch"), -1 !== l.indexOf("dxd") && u.push("wdgdoldxd"), -1 !== l.indexOf("djr") && u.push("wdgdoldjr"), -1 !== l.indexOf("aja") && u.push("wdgdolaja"), ("brandexcluded" == o || "dmob" == n || "dsaa" == t && "trackpage" != s || "dsaa" == t && "trackvideo" != s) && (u = [])
                        }
                        if (t) {
                            t = t.toLowerCase().replace(/\s+/g, "");
                            var g = t.split(",");
                            e.each(g, function(t) {
                                var n = "";
                                if (n = 0 == t.indexOf("wdg") ? t : p[t]) {
                                    var r = n.split(",");
                                    e.each(r, function(e) {
                                        e && u.push(e)
                                    })
                                }
                            })
                        }
                        var v = m[d.getDomain(location.hostname)];
                        return v && (v = v.split(","), e.each(v, function(e) {
                            u.push(e)
                        })), u = e.uniq(u), u.length ? u.join(",") : "wdgdolunrouted"
                    },
                    extraOmniInit: function(e, t) {
                        var n = new CTO;
                        e.currencyCode = n.currencyCode || "USD", e.cookieDomainPeriods = "2", e.trackDownloadLinks = !0, e.trackExternalLinks = !0, e.trackInlineStats = !0, e.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls", m.isStore || (e.linkInternalFilters = "uk" == t ? this._omniInternalDomainsUK.join() : "es" == t ? this._omniInternalDomainsUK.join() : "de" == t ? this._omniInternalDomainsDE.join() : this._omniInternalDomains.join()), e.linkLeaveQueryString = !m.isStore, e.linkTrackEvents = "None", e.trackFormList = !0, e.trackPageName = !0, e.useCommerce = !1, e.varUsed = "prop30", e.eventList = "", e.exec = 0, e.usePlugins = !0, e.doPlugins = this.s_omni_doPlugins, this.omniInitFunctions(e)
                    },
                    s_omni_doPlugins: function(e) {
                        m.isStore ? (e.visitor = Visitor.getInstance("EDA101AC512D2B230A490D4C@AdobeOrg", {
                            trackingServer: "w88.go.com",
                            trackingServerSecure: "sw88.go.com"
                        }), e.eVar24 = e.visitor.getMarketingCloudVisitorID(), e.server = window.location.hostname) : (e.Util.getQueryParam("s_kwcid") && (e.scCampaignFlag = "SC", e.pageURL = e.manageQueryParam("s_kwcid", 1, 1)), e.eVar3 && (e.exec < 1 ? e.products = e.apl(e.products, "ads;" + e.eVar3 + ";;;event7=1", ",", 2) : e.products = "ads;" + e.eVar3 + ";;;event7=1", e.events = e.apl(e.events, "event7", ",", 2)), e.eVar47 = e.campaign || "", e.channelManager({
                            channel: "cm_tmp_channel",
                            keyword: "cm_tmp_keyword",
                            engine: "cm_tmp_engine",
                            campaignId: null,
                            referrer: "cm_tmp_referrer",
                            cleanURL: !0,
                            debug: null
                        }), e.eVar47 || (e.cm_tmp_channel && "n/a" != e.cm_tmp_channel && "Typed/Bookmarked" != e.cm_tmp_channel && (e.eVar47 = e.cm_tmp_channel), e.scCampaignFlag && "" != e.scCampaignFlag && (e.eVar47 = e.eVar47 + e.scCampaignFlag), e.cm_tmp_engine && "n/a" != e.cm_tmp_engine ? e.eVar47 = e.eVar47 + "-" + e.cm_tmp_engine : e.cm_tmp_referrer && "n/a" != e.cm_tmp_referrer && (e.eVar47 = e.eVar47 + "-" + e.cm_tmp_referrer)), e.cm_tmp_keyword && "n/a" != e.cm_tmp_keyword ? e.eVar46 = e.cm_tmp_keyword : e.eVar47 && (e.eVar46 = "OtherEffort"), !e.eVar27 && e.eVar47 && (e.eVar27 = "OtherEffort"))
                    },
                    omniInitFunctions: function(e) {
                        e.manageQueryParam = new Function("p", "w", "e", "u", "var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.location);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf('?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.length);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1,x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.substring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp){y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0;while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break;}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.rep(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}if(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if(qp)qs='?'+qp;return u+qs;"), e.getValOnce = new Function("v", "c", "e", "t", "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"), e.apl = new Function("l", "v", "d", "u", "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"), e.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), e.clickPast = new Function("scp", "ct_ev", "cp_ev", "cpc", "var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc){cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev;s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc,0,0);}}}"), e.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"), e.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.length;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}if(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=arry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce)s.c_w(cn,'');return r;"), e.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), e.join = new Function("v", "p", "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;"), e.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x"), e.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), e.getLinkParams = new Function("p", "qp", "m", "q", "ev", "var s=this,a='',t=0,l,ll,l2,r,e,la,ap,ev=ev?';;;'+ev+'=1':'';if(s.d.links){for(i=0;i<s.d.links.length;i++){l=s.d.links[i];r=l.href;e=l.name;e=!e?'':e.indexOf('&')!=0?'&'+e:e;la=r.indexOf('?')>-1?r.substring(r.indexOf('?'))+e:e?'?'+e:'';ll=la.toLowerCase();if(qp&&ll.indexOf(qp.toLowerCase())>0) l2=qp?s.Util.getQueryParam(qp,'',ll):'';else l2='';if(l2&&l2.indexOf(p.toLowerCase())>0){ap=s.Util.getQueryParam(p,'',l2+'');if(ap!=''&&ap.indexOf('#')<0){a=s.apl(a,q+ap+ev,',',2);t=t+1;}}else if(ll.indexOf(p.toLowerCase())>0){ap=s.Util.getQueryParam(p,'',la+'');if(ap!=''&&ap.indexOf('#')<0){a=s.apl(a,q+ap+ev,',',2);t=t+1;}}if(t==m)return a;}return a;}"), e.setLinkId = new Function("p1", "p2", "qp", "d", "id", "t", "k", "L", "v1", "vd", "h", "var s=this;if(s.c_r(k)=='customlink'){s.c_w(k,'');return '';}if(typeof h=='undefined'||h==''||(h[0]==''&&h[1]=='')){var h=s.getLinkId(p1,p2,qp,d,id,L,v1,vd);}var v,kv,wh=s.c_gd().substring(1);if(!h[0]){kv=s.c_r(k);s.c_w(k,'');return kv;}if(typeof h[0]=='object'){h[0]=h[0]+'';}wh=h[0].indexOf(wh)>-1?'0':h[0].indexOf('javascript:')>-1?'0':'1';v=h[1].indexOf('atxt:')>-1?'1':'-1';if(s.linkType||s.linkName){if(typeof s.linkTrackingArray[2]!='undefined'&&s.linkTrackingArray[2]!=''){s.c_w(k,'');}else {s.c_w(k,'customlink');}return h[1];}else if(t=='0'||s.lt(h[0])=='d'||s.lt(h[0])=='e'){s.c_w(k,'');return h[1];}else if(wh=='1'){s.linkName=h[1];s.linkType='o';return h[1];}else if(t=='1'){if(v>-1){s.c_w(k,h[1]);return '';}else {s.linkName=h[1];s.linkType='o';return h[1];}}else if(t=='2'){s.linkName=h[1];s.linkType='o';return h[1];}else {s.c_w(k,h[1]);return '';}s.c_w(k,'');return '';"), e.getLinkId = new Function("p1", "p2", "qp", "d", "id", "L", "v1", "vd", "var s=this,h,n,r,h1,h2,h3,a,e,q;if(!s.eo&&!s.lnk){return '';}var o=s.eo?s.eo:s.lnk;var y=s.ot(o);var n=s.oid(o);var x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o){return '';}y=s.ot(o);n=s.oid(o);x=o.s_oidt;}}d=d?d:'|';id=id?id:':';if(!o.href){return '';}r=o.href;q=r.indexOf('?');e=!o.name?'':o.name.indexOf('&')!=0?'&'+o.name:o.name;h=q>-1?r.substring(q)+e:e?'?'+e:'';if(s.linkLeaveQueryString==false){r=q>0?r.substring(0,q):r;}if(h){h1=p1?s.Util.getQueryParam(p1,id,h):'';h2=p2?s.Util.getQueryParam(p2,id,h):'';h3=qp?s.Util.getQueryParam(qp,id,h):'';}if(h3&&s.Util.getQueryParam(p2,id,h3)){h2=p2?s.Util.getQueryParam(p2,id,h3):'';}if(!h1&&!h2){if(!s.getinnerHTML(o)){return '';}else {h=L<1?'atxt'+id:'atxt'+id+s.getinnerHTML(o);}}else {h=h1+=h2?d+h2:'';}h=v1?h+vd+v1:h;a=new Array;a[0]=r?r:'';a[1]=h;return a?a:'';"), e.getinnerHTML = new Function("o", "var ih=''+o.innerHTML,ihl=ih.toLowerCase(),i=ihl.indexOf('<img');if(ih&&i>-1){eval(\"evl=/ srcs*=s*['\\\"]?([^'\\\" ]+)['\\\"]?/i\");evl.exec(ih);if(RegExp.$1) ih=RegExp.$1}return(ih);"), e.isEntry = new Function("var s=this;var l=s.linkInternalFilters,r=s.referrer||typeof s.referrer!='undefined'?s.referrer:document.referrer,p=l.indexOf(','),b=0,v='';if(!r){return 1;}while((p=l.indexOf(','))){v=p>-1?l.substring(b,p):l;if(v=='.'||r.indexOf(v)>-1){return 0;}if(p==-1){break;}b=p+1;while(l.indexOf(',')+1==b){b++;}l=l.substring(b,l.length);}return 1;"), e.fireOnce = new Function("var s=this;if(!s.__fo){s.__fo=new Object;return 1;}else {return 0;}"), e.channelManager = new Function("q", "var s=this,r=s.referrer||typeof s.referrer!='undefined'?s.referrer:document.referrer,e,k,c,w,_b=0,url=s.pageURL?s.pageURL:s.wd.location,url=url+'',rf='n/a';if(!this.fireOnce()){s[q.channel]=s[q.keyword]=s[q.campaignId]=s[q.engine]=s[q.referrer]='';s[q.debug]=r;return -1;}if(!this.isEntry()){s[q.channel]=s[q.keyword]=s[q.campaignId]=s[q.engine]=s[q.referrer]='';s[q.debug]=r;return 0;}s.__se=s.__se();if(!r||typeof r=='undefined'){c='Typed/Bookmarked';e=s.__se.DirectLoad.direct.tl[0];k=s.__se.DirectLoad.direct.kw[0];w=s.__se.DirectLoad.direct.qs[0];}for(var u in s.__se){for(var i in s.__se[u]){if(r.indexOf(i)>-1&&u=='Search'){for(var h in s.__se[u][i].tl){if(r.indexOf(s.__se[u][i].tl[h].indexOf('+')==0?i+'.'+s.__se[u][i].tl[h].substring(1,s.__se[u][i].tl[h].length):s.__se[u][i].tl[h])>-1){e=s.__se[u][i].tl[h].indexOf('+')==0?i+'.'+s.__se[u][i].tl[h].substring(1,s.__se[u][i].tl[h].length):s.__se[u][i].tl[h];for(var g in s.__se[u][i].kw){var _g=s.__se[u][i].kw[g];if(r.indexOf('?'+_g+'=')>-1||r.indexOf('&'+_g+'=')>-1){var t=r.indexOf('?'+_g+'=')>-1?r.indexOf('?'+_g+'='):r.indexOf('&'+_g+'=');k=r.substring(t+_g.length+2,r.length);k=k.substring(0,k.indexOf('&')>-1?k.indexOf('&'):k.length);_b=1;}}for(var g in s.__se[u][i].qs){var _g=s.__se[u][i].qs[g];if((url.indexOf('?'+_g+'=')>-1||url.indexOf('&'+_g+'=')>-1)&&typeof k!='undefined'){var t=url.indexOf('?'+_g+'=')>-1?url.indexOf('?'+_g+'='):url.indexOf('&'+_g+'=');w=url.substring((url.indexOf(_g)>-1?url.indexOf(_g):0)+_g.length+1,url.length);w=w.substring(0,w.indexOf('&')>-1?w.indexOf('&'):w.length);c='';_b=1;break;}else if(typeof k!='undefined'){c='SearchEngine';w='n/a';_b=1;}else if(typeof k=='undefined'){c='SearchEngineNoKW';w='n/a';_b=1;}}}}}else if(u=='Email'){for(var g in s.__se[u][i].qs){var _g=s.__se[u][i].qs[g];if(url.indexOf('?'+_g)>-1||url.indexOf('&'+_g)>-1){var t=url.indexOf('?'+_g+'=')>-1?url.indexOf('?'+_g+'='):url.indexOf('&'+_g+'=');w=url.substring((url.indexOf(_g)>-1?url.indexOf(_g):0)+_g.length+1,url.length);w=w.substring(0,w.indexOf('&')>-1?w.indexOf('&'):w.length);c='Email';e=i;k=s.__se[u][i].kw[0];_b=1;}}}else if(u=='OtherWebsites'){if(r){for(var g in s.__se[u][i].qs){var _g=s.__se[u][i].qs[g];if(_g.indexOf('!')!=0){if(url.indexOf('?'+_g+'=')>-1||url.indexOf('&'+_g+'=')>-1){var t=url.indexOf('?'+_g+'=')>-1?url.indexOf('?'+_g+'='):url.indexOf('&'+_g+'=');w=url.substring((url.indexOf(_g)>-1?url.indexOf(_g):0)+_g.length+1,url.length);w=w.substring(0,w.indexOf('&')>-1?w.indexOf('&'):w.length);e='n/a';}}}c='NaturalLink';rf=r;w=!w||typeof w=='undefined'?'n/a':w;k=s.__se[u][i].kw[0];}}}if(_b){break;}}s[q.channel]=!c||typeof c=='undefined'?'n/a':c;s[q.keyword]=!k||typeof k=='undefined'?'n/a':k;s[q.campaignId]=!w||typeof w=='undefined'?'n/a':w;s[q.engine]=!e||typeof e=='undefined'?'n/a':e;s[q.referrer]=!rf||typeof rf=='undefined'||rf=='n/a'?'n/a':rf.substring(rf.indexOf('://')+3,rf.indexOf('?')>-1?rf.indexOf('?'):rf.length);s[q.debug]=r;return 1;"), e.__se = new Function("return {Search:{yahoo:{tl:['+com', 'uk.search.yahoo.com', 'sg.search.yahoo.com', 'ca.search.yahoo.com', 'au.search.yahoo.com', 'search.yahoo.co.jp'], kw:['p'], qs:['n/a']},comcast:{tl:['search.comcast.net'], kw:['q'], qs:['n/a']},ebay:{tl:['shop.ebay.com'], kw:['OVKEY'], qs:['n/a']},earthlink:{tl:['search.earthlink.net'], kw:['q'], qs:['n/a']},google:{tl:['+com', '+co.uk', '+com.au', '+at', '+be', '+com.br', '+ca', '+dk', '+fi', '+fr', '+de', '+gr', '+co.id', '+ie', '+it', '+co.jp', '+com.mx', '+nl', '+co.nz', '+com.ng', '+no', '+pl', '+ru', '+com.sg', '+co.za', '+es', '+se', '+ch', '+ae', '+co.ve', '+vg'], kw:['q'], qs:['n/a']},alltheweb:{tl:['+com'], kw:['q'], qs:['n/a']},altavista:{tl:['+com'], kw:['q'], qs:['n/a']},aol:{tl:['search.aol.com'], kw:['query'], qs:['n/a']},ask:{tl:['+com'], kw:['q'], qs:['n/a']},gigablast:{tl:['+com'], kw:['q'], qs:['n/a']},hotbot:{tl:['+com'], kw:['query'], qs:['n/a']},live:{tl:['+com'], kw:['q'], qs:['n/a']},looksmart:{tl:['+com'], kw:['qt'], qs:['n/a']},lycos:{tl:['+com'], kw:['query'], qs:['n/a']},mamma:{tl:['+com'], kw:['query'], qs:['n/a']},msn:{tl:['search.msn.com', 'search.msn.co.uk'], kw:['q'], qs:['n/a']},myway:{tl:['search.myway.com'], kw:['searchfor'], qs:['n/a']},netscape:{tl:['search.netscape.com'], kw:['query'], qs:['n/a']}},'OtherWebsites':{direct:{tl:['n/a'], kw:['n/a'], qs:['n/a']}},'DirectLoad':{direct:{tl:['n/a'], kw:['n/a'], qs:['n/a']}},Email:{direct:{tl:['n/a'], kw:['n/a'], qs:['n/a']}}};"), e.getTimeParting = new Function("t", "z", "y", "l", "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=String(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U.substring(2,4);X='090801|101407|111306|121104|131003|140902|150801|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substring(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.getTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.getHours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Available'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){return A}}else{return Z+', '+W}}}"), e.getPercentPageViewed = function(e, t) {
                            var n = this,
                                r = n.c_r("s_ppv");
                            r = -1 < r.indexOf(",") ? r.split(",") : [], r[0] = n.unescape(r[0]), e = e || (n.pageName ? n.pageName : document.location.href), n.ppvChange = t || !0, void 0 !== n.linkType && "o" === n.linkType || (n.ppvID && n.ppvID === e || (n.ppvID = e, n.c_w("s_ppv", ""), n.handlePPVevents()), n.p_fo("s_gppvLoad") && window.addEventListener && (window.addEventListener("load", n.handlePPVevents, !1), window.addEventListener("click", n.handlePPVevents, !1), window.addEventListener("scroll", n.handlePPVevents, !1), window.addEventListener("resize", n.handlePPVevents, !1)), n._ppvPreviousPage = r[0] ? r[0] : "", n._ppvHighestPercentViewed = r[1] ? r[1] : "", n._ppvInitialPercentViewed = r[2] ? r[2] : "", n._ppvHighestPixelsSeen = r[3] ? r[3] : "")
                        }, e.handlePPVevents = function() {
                            if (s_c_il) {
                                for (var e = 0, t = s_c_il.length; e < t; e++)
                                    if (void 0 !== s_c_il[e] && s_c_il[e]._c && "s_c" == s_c_il[e]._c) {
                                        var n = s_c_il[e];
                                        break
                                    }
                                if (n && n.ppvID) {
                                    var r = Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight));
                                    e = (window.pageYOffset || window.document.documentElement.scrollTop || window.document.body.scrollTop) + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight), t = Math.min(Math.round(e / r * 100), 100);
                                    var i = "";
                                    !n.c_r("s_tp") || n.unescape(n.c_r("s_ppv").split(",")[0]) !== n.ppvID || 1 == n.ppvChange && n.c_r("s_tp") && r != n.c_r("s_tp") ? (n.c_w("s_tp", r), n.c_w("s_ppv", "")) : i = n.c_r("s_ppv");
                                    var a = i && -1 < i.indexOf(",") ? i.split(",", 4) : [];
                                    r = 0 < a.length ? a[0] : escape(n.ppvID);
                                    var o = 1 < a.length ? parseInt(a[1]) : t,
                                        s = 2 < a.length ? parseInt(a[2]) : t;
                                    a = 3 < a.length ? parseInt(a[3]) : e, 0 < t && (i = r + "," + (t > o ? t : o) + "," + s + "," + (e > a ? e : a)), n.c_w("s_ppv", i)
                                }
                            }
                        }, e.p_fo = function(e) {
                            var t = this;
                            return t.__fo || (t.__fo = {}), !t.__fo[e] && (t.__fo[e] = {}, !0)
                        }, e.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}"), m.isStore ? (e.visitorNamespace = "disneyshopping", e.trackingServer = "w88.go.com", e.trackingServerSecure = "sw88.go.com", e.dc = 112) : (e.socialPlatforms = new Function("a", "var s=this,g,K,D,E,F;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();K=s.split(s.socPlatList,'|');for(i=0;i<K.length;i++){D=s.split(K[i],'>');if(g.indexOf(D[0])!=-1){if(a){s[a]=D[1];}}}"), e.socPlatList = "facebook.com>Facebook|twitter.com>Twitter|t.co/>Twitter|youtube.com>Youtube|clipmarks.com>Clipmarks|dailymotion.com>Dailymotion|delicious.com>Delicious|digg.com>Digg|diigo.com>Diigo|flickr.com>Flickr|flixster.com>Flixster|fotolog.com>Fotolog|friendfeed.com>FriendFeed|google.com/buzz>Google Buzz|buzz.googleapis.com>Google Buzz|plus.google.com>Google+|hulu.com>Hulu|identi.ca>identi.ca|ilike.com>iLike|intensedebate.com>IntenseDebate|myspace.com>MySpace|newsgator.com>Newsgator|photobucket.com>Photobucket|plurk.com>Plurk|slideshare.net>SlideShare|smugmug.com>SmugMug|stumbleupon.com>StumbleUpon|tumblr.com>Tumblr|vimeo.com>Vimeo|wordpress.com>WordPress|xanga.com>Xanga|metacafe.com>Metacafe|pinterest.com>Pinterest", e.socialAuthors = new Function("", "var s=this,g,tco;g=s.referrer?s.referrer:document.referrer;if(g.indexOf('t.co/')!=-1){s.tco=escape(s.split(g,'/')[3]);s.Integrate.add('SocialAuthor');s.Integrate.SocialAuthor.tEvar='eVar54';s.Integrate.SocialAuthor.get('search.twitter.com/search.json?var=[VAR]&callback=s.twitterSearch&q=http%3A%2F%2Ft.co%2F'+s.tco);s.Integrate.SocialAuthor.delay();s.Integrate.SocialAuthor.setVars=function(s,p){s[p.tEvar]=s.user;}}"), e.twitterSearch = new Function("obj", "var s=this,txt,txtRT,txtEnd,txtAuthor;txt=obj.results[0].text;txtRT=txt.indexOf('RT @');if(txtRT!=-1){txtEnd=txt.indexOf(' ',txtRT+4);txtAuthor=txt.substring(txtRT+4,txtEnd);s.user=txtAuthor.replace(':','');}else{s.user=obj.results[0].from_user;}s.Integrate.SocialAuthor.ready();"), e.maxDelay = "3000", e.loadModule("Integrate"), e.Integrate.onLoad = function(t, n) {
                            e.socialAuthors()
                        }, e.trackingServer = "w88.go.com", e.trackingServerSecure = "sw88.go.com", e.dc = 112)
                    },
                    _omniInternalDomains: ["javascript:", d.getDomain(location.hostname), "dolimg.com", "clubpenguin.com", "go.com", "babyzone.com"],
                    _omniInternalDomainsUK: ["javascript:", d.getDomain(location.hostname), "disneychannel.co.uk", "disneyinternational.com"],
                    _omniInternalDomainsDE: ["javascript:", d.getDomain(location.hostname), "disneychannel.de", "disneyinternational.com"]
                };
            return m
        }), define("controller/vendor/ResearchNowAPI", ["underscore", "bean", "models/variable/common/fullPageName", "models/variable/utility"], function(e, t, n, r) {
            var i = {
                send: function(e, t) {
                    e = e || {};
                    var i = location.protocol + "//tag.researchnow.com/t/beacon?pr=2701&si=" + location.hostname + "&eid=" + n.getValue(e, t) + "&ca=" + r.getValue(e, "templateType", t) + "&adn=3&tt=3";
                    (new Image).src = i
                }
            };
            return {
                trackPage: function(e, t) {
                    if ("emea" == (new t).region) return "";
                    i.send(e, t)
                }
            }
        }), define("StreamSense", [], function() {
            var e = e || {};
            return e.PlatformAPIs = e.PlatformAPIs || {
                Standard: 0,
                Trilithium: 1,
                AppleTV: 2,
                Chromecast: 3
            }, e.Utils = e.Utils || function() {
                return {
                    uid: function() {
                        var e = 1;
                        return function() {
                            return +new Date + "_" + e++
                        }
                    }(),
                    filter: function(e, t) {
                        var n = {};
                        for (var r in t) t.hasOwnProperty(r) && e(t[r]) && (n[r] = t[r]);
                        return n
                    },
                    extend: function(e) {
                        var t, n = arguments.length;
                        e = e || {};
                        for (var r = 1; r < n; r++)
                            if (t = arguments[r])
                                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                        return e
                    },
                    getString: function(e, t) {
                        var n = String(e);
                        return null == e ? t || "na" : n
                    },
                    getLong: function(e, t) {
                        var n = Number(e);
                        return null == e || isNaN(n) ? t || 0 : n
                    },
                    getInteger: function(e, t) {
                        var n = Number(e);
                        return null == e || isNaN(n) ? t || 0 : n
                    },
                    getBoolean: function(e, t) {
                        var n = "true" == String(e).toLowerCase();
                        return null == e ? t || !1 : n
                    },
                    isNotEmpty: function(e) {
                        return void 0 !== e && null != e && void 0 !== e.length && e.length > 0
                    },
                    indexOf: function(e, t) {
                        var n = -1;
                        return this.forEach(t, function(t, r) {
                            t == e && (n = r)
                        }), n
                    },
                    forEach: function(e, t, n) {
                        try {
                            if ("function" == typeof t)
                                if (n = void 0 !== n ? n : null, "number" != typeof e.length || void 0 === e[0]) {
                                    var r = void 0 !== e.__proto__;
                                    for (var i in e) e.hasOwnProperty(i) && (!r || r && void 0 === e.__proto__[i]) && "function" != typeof e[i] && t.call(n, e[i], i)
                                } else
                                    for (var a = 0, o = e.length; a < o; a++) t.call(n, e[a], a)
                        } catch (e) {}
                    },
                    regionMatches: function(e, t, n, r, i) {
                        if (t < 0 || r < 0 || t + i > e.length || r + i > n.length) return !1;
                        for (; --i >= 0;) {
                            if (e.charAt(t++) != n.charAt(r++)) return !1
                        }
                        return !0
                    },
                    size: function(e) {
                        var t = 0;
                        for (var n in e) e.hasOwnProperty(n) && t++;
                        return t
                    },
                    log: function(e, t) {
                        if (void 0 !== t && t && "undefined" != typeof console && console) {
                            var n = new Date,
                                r = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
                            console.log(r, e)
                        }
                    },
                    isTrue: function(e) {
                        return void 0 !== e && ("string" == typeof e ? "true" === (e = e.toLowerCase()) || "1" === e || "on" === e : !!e)
                    },
                    toString: function(e) {
                        if (void 0 === e) return "undefined";
                        if ("string" == typeof e) return e;
                        if ("[object Array]" === Object.prototype.toString.call(e)) return e.join(",");
                        if (this.size(e) > 0) {
                            var t = "";
                            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
                            return t
                        }
                        return e.toString()
                    },
                    exists: function(e) {
                        return void 0 !== e && null != e
                    },
                    firstGreaterThan0: function() {
                        for (var e = 0, t = arguments.length; e < t; e++) {
                            var n = arguments[e];
                            if (n > 0) return n
                        }
                        return 0
                    },
                    cloneObject: function(e) {
                        return null == e || "object" != typeof e ? e : function() {
                            function e() {}

                            function t(t) {
                                return "object" == typeof t ? (e.prototype = t, new e) : t
                            }

                            function n(e) {
                                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t])
                            }

                            function r() {
                                this.copiedObjects = [];
                                var e = this;
                                this.recursiveDeepCopy = function(t) {
                                    return e.deepCopy(t)
                                }, this.depth = 0
                            }

                            function i(e, t) {
                                var n = new r;
                                return t && (n.maxDepth = t), n.deepCopy(e)
                            }

                            function a(e) {
                                return "undefined" != typeof window && window && window.Node ? e instanceof Node : e === document || "number" == typeof e.nodeType && e.attributes && e.childNodes && e.cloneNode
                            }
                            var o = [];
                            return n.prototype = {
                                constructor: n,
                                canCopy: function() {
                                    return !1
                                },
                                create: function(e) {},
                                populate: function(e, t, n) {}
                            }, r.prototype = {
                                constructor: r,
                                maxDepth: 256,
                                cacheResult: function(e, t) {
                                    this.copiedObjects.push([e, t])
                                },
                                getCachedResult: function(e) {
                                    for (var t = this.copiedObjects, n = t.length, r = 0; r < n; r++)
                                        if (t[r][0] === e) return t[r][1]
                                },
                                deepCopy: function(e) {
                                    if (null === e) return null;
                                    if ("object" != typeof e) return e;
                                    var t = this.getCachedResult(e);
                                    if (t) return t;
                                    for (var n = 0; n < o.length; n++) {
                                        var r = o[n];
                                        if (r.canCopy(e)) return this.applyDeepCopier(r, e)
                                    }
                                    throw new Error("Unable to clone the following object " + e)
                                },
                                applyDeepCopier: function(e, t) {
                                    var n = e.create(t);
                                    if (this.cacheResult(t, n), ++this.depth > this.maxDepth) throw new Error("Maximum recursion depth exceeded.");
                                    return e.populate(this.recursiveDeepCopy, t, n), this.depth--, n
                                }
                            }, i.DeepCopier = n, i.deepCopiers = o, i.register = function(e) {
                                e instanceof n || (e = new n(e)), o.unshift(e)
                            }, i.register({
                                canCopy: function() {
                                    return !0
                                },
                                create: function(e) {
                                    return e instanceof e.constructor ? t(e.constructor.prototype) : {}
                                },
                                populate: function(e, t, n) {
                                    for (var r in t) t.hasOwnProperty(r) && (n[r] = e(t[r]));
                                    return n
                                }
                            }), i.register({
                                canCopy: function(e) {
                                    return e instanceof Array
                                },
                                create: function(e) {
                                    return new e.constructor
                                },
                                populate: function(e, t, n) {
                                    for (var r = 0; r < t.length; r++) n.push(e(t[r]));
                                    return n
                                }
                            }), i.register({
                                canCopy: function(e) {
                                    return e instanceof Date
                                },
                                create: function(e) {
                                    return new Date(e)
                                }
                            }), i.register({
                                canCopy: function(e) {
                                    return a(e)
                                },
                                create: function(e) {
                                    return e === document ? document : e.cloneNode(!1)
                                },
                                populate: function(e, t, n) {
                                    if (t === document) return document;
                                    if (t.childNodes && t.childNodes.length)
                                        for (var r = 0; r < t.childNodes.length; r++) {
                                            var i = e(t.childNodes[r]);
                                            n.appendChild(i)
                                        }
                                }
                            }), {
                                deepCopy: i
                            }
                        }().deepCopy(e)
                    },
                    safeGet: function(e, t) {
                        return t = this.exists(t) ? t : "", this.exists(e) ? e : t
                    },
                    getBrowserName: function() {
                        if ("undefined" == typeof navigator || !navigator.hasOwnProperty("userAgent") || !navigator.hasOwnProperty("appName")) return "";
                        var e, t, n = navigator.userAgent,
                            r = navigator.appName;
                        return -1 != (t = n.indexOf("Opera")) || -1 != (t = n.indexOf("OPR/")) ? r = "Opera" : -1 != (t = n.indexOf("Android")) ? r = "Android" : -1 != (t = n.indexOf("Chrome")) ? r = "Chrome" : -1 != (t = n.indexOf("Safari")) ? r = "Safari" : -1 != (t = n.indexOf("Firefox")) ? r = "Firefox" : -1 != (t = n.indexOf("IEMobile")) ? r = "Internet Explorer Mobile" : "Microsoft Internet Explorer" == r || "Netscape" == r ? r = "Internet Explorer" : (e = n.lastIndexOf(" ") + 1) < (t = n.lastIndexOf("/")) && (r = n.substring(e, t), r.toLowerCase() == r.toUpperCase() && (r = navigator.appName)), r
                    },
                    getBrowserFullVersion: function() {
                        if ("undefined" == typeof navigator || !navigator.hasOwnProperty("userAgent") || !navigator.hasOwnProperty("appName") || !navigator.hasOwnProperty("appVersion")) return "";
                        var e, t, n, r, i = navigator.userAgent,
                            a = navigator.appName,
                            o = "" + parseFloat(navigator.appVersion);
                        return -1 != (t = i.indexOf("Opera")) ? (o = i.substring(t + 6), -1 != (t = i.indexOf("Version")) && (o = i.substring(t + 8))) : -1 != (t = i.indexOf("OPR/")) ? o = i.substring(t + 4) : -1 != (t = i.indexOf("Android")) ? o = i.substring(t + 11) : -1 != (t = i.indexOf("Chrome")) ? o = i.substring(t + 7) : -1 != (t = i.indexOf("Safari")) ? (o = i.substring(t + 7), -1 != (t = i.indexOf("Version")) && (o = i.substring(t + 8))) : -1 != (t = i.indexOf("Firefox")) ? o = i.substring(t + 8) : "Microsoft Internet Explorer" == a ? (r = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null != r.exec(i) && (o = parseFloat(RegExp.$1))) : "Netscape" == a ? (r = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), null != r.exec(i) && (o = parseFloat(RegExp.$1))) : i.lastIndexOf(" ") + 1 < (t = i.lastIndexOf("/")) && (o = i.substring(t + 1)), o = o.toString(), -1 != (n = o.indexOf(";")) && (o = o.substring(0, n)), -1 != (n = o.indexOf(" ")) && (o = o.substring(0, n)), -1 != (n = o.indexOf(")")) && (o = o.substring(0, n)), e = parseInt("" + o, 10), isNaN(e) && (o = "" + parseFloat(navigator.appVersion)), o
                    },
                    browserAcceptsLargeURLs: function() {
                        return "undefined" == typeof window || (null === window.ActiveXObject || !0)
                    }
                }
            }(), e.StreamSense = e.StreamSense || function() {
                function t(e, t) {
                    var n = e || "",
                        i = "undefined",
                        a = b.comScore || b.sitestat || function(e) {
                            var t, n, a, o, s, l = "comScore=",
                                c = _.cookie,
                                d = "",
                                u = "indexOf",
                                p = "length",
                                m = r.browserAcceptsLargeURLs() ? S.URL_LENGTH_LIMIT : S.RESTRICTED_URL_LENGTH_LIMIT,
                                f = "&ns_",
                                v = b.encodeURIComponent || escape;
                            if (c[u](l) + 1)
                                for (o = 0, a = c.split(";"), s = a[p]; o < s; o++)(n = a[o][u](l)) + 1 && (d = "&" + unescape(a[o].substring(n + l[p])));
                            e += f + "_t=" + +new Date + f + "c=" + (_.characterSet || _.defaultCharset || "") + d, e.length > m && e.indexOf("&") > 0 && (t = e.substr(0, m - 8).lastIndexOf("&"), e = (e.substring(0, t) + f + "cut=" + v(e.substring(t + 1))).substr(0, m)), g.httpGet(e), typeof ns_p === i && (ns_p = {
                                src: e
                            }), ns_p.lastMeasurement = e
                        };
                    if (typeof t !== i) {
                        var o = [],
                            s = b.encodeURIComponent || escape;
                        for (var l in t) t.hasOwnProperty(l) && o.push(s(l) + "=" + s(t[l]));
                        /[\?\&]$/.test(n) || (n += "&"), n += o.join("&")
                    }
                    return a(n)
                }

                function n(e, t) {
                    for (var n, i = b.encodeURIComponent || escape, a = [], o = S.LABELS_ORDER, s = e.split("?"), l = s[0], c = s[1], d = c.split("&"), u = 0, p = d.length; u < p; u++) {
                        var m = d[u].split("="),
                            f = unescape(m[0]),
                            g = unescape(m[1]);
                        f && (t[f] = g)
                    }
                    for (var v = {}, h = 0, y = o.length; h < y; h++) {
                        var w = o[h];
                        if (t.hasOwnProperty(w)) {
                            var k = t[w];
                            void 0 !== k && null != k && (v[w] = !0, a.push(i(w) + "=" + i(t[w])))
                        }
                    }
                    for (var C in t)
                        if (t.hasOwnProperty(C)) {
                            if (v[C]) continue;
                            var T = t[C];
                            void 0 !== T && null != T && a.push(i(C) + "=" + i(t[C]))
                        }
                    n = l + "?" + a.join("&"), n = n + (n.indexOf("&c8=") < 0 ? "&c8=" + i(_.title) : "") + (n.indexOf("&c7=") < 0 ? "&c7=" + i(_.URL) : "") + (n.indexOf("&c9=") < 0 ? "&c9=" + i(_.referrer) : "");
                    var I = r.browserAcceptsLargeURLs() ? S.URL_LENGTH_LIMIT : S.RESTRICTED_URL_LENGTH_LIMIT;
                    if (n.length > I && n.indexOf("&") > 0) {
                        var P = n.substr(0, I - 8).lastIndexOf("&");
                        n = (n.substring(0, P) + "&ns_cut=" + i(n.substring(P + 1))).substr(0, I)
                    }
                    return n
                }
                var r = e.Utils,
                    i = function() {
                        var e = "cs_";
                        return function() {
                            var t;
                            try {
                                t = "undefined" != typeof localStorage ? localStorage : {}
                            } catch (e) {
                                t = {}
                            }
                            r.extend(this, {
                                get: function(n) {
                                    return t[e + n]
                                },
                                set: function(n, r) {
                                    t[e + n] = r
                                },
                                has: function(n) {
                                    return e + n in t
                                },
                                remove: function(n) {
                                    delete t[e + n]
                                },
                                clear: function() {
                                    for (var e in t) t.hasOwnProperty(e) && delete t[e]
                                }
                            })
                        }
                    }(),
                    a = function() {
                        var e = "cs_";
                        return function() {
                            var t;
                            try {
                                t = "undefined" != typeof atv && void 0 !== atv.localStorage && atv.localStorage || null
                            } catch (e) {
                                t = null
                            }
                            r.extend(this, {
                                get: function(n) {
                                    return t && n && t.getItem(e + n) || null
                                },
                                set: function(n, r) {
                                    t && n && (t[e + n] = r)
                                },
                                has: function(n) {
                                    return t && n && null != t.getItem(e + n) || !1
                                },
                                remove: function(n) {
                                    t && n && t.removeItem(e + n)
                                },
                                clear: function() {}
                            })
                        }
                    }(),
                    o = function(e, t) {
                        if ("undefined" != typeof Image) {
                            var n = new Image;
                            n.onload = function() {
                                t && t(200), n = null
                            }, n.onerror = function() {
                                t && t(), n = null
                            }, n.src = e
                        }
                    },
                    s = function(e, t, n) {
                        "undefined" != typeof XMLHttpRequest && n && "undefined" != typeof setTimeout && setTimeout(n, 0);
                        var r = new XMLHttpRequest;
                        r.open("POST", e, !0), r.onreadystatechange = function() {
                            4 === r.readyState && (n && n(r.status), r = null)
                        }, r.send(t)
                    },
                    l = function(e, t) {
                        t && "undefined" != typeof setTimeout && setTimeout(t, 0)
                    },
                    c = function(e, t, n) {
                        n && "undefined" != typeof setTimeout && setTimeout(n, 0)
                    },
                    d = function() {
                        function e(e) {
                            var t = p + e;
                            o[t] = "", l[t] = []
                        }

                        function t(e, t) {
                            var n = p + e;
                            o[n] += c + s(t), l[n].push(t)
                        }

                        function n(e, t) {
                            var n = p + e,
                                i = l[n];
                            i.splice(r.indexOf(t, i), 1);
                            for (var a = [], d = 0, u = i.length; d < u; d++) a.push(s(i[d]));
                            o[n] = a.join(c), delete o[m + e + t]
                        }

                        function i(e, t, n) {
                            o[m + e + t] = n
                        }

                        function a(e, t) {
                            return o[m + e + t]
                        }
                        var o, s = "undefined" != typeof encodeURIComponent ? encodeURIComponent : escape,
                            u = "undefined" != typeof decodeURIComponent ? decodeURIComponent : unescape,
                            p = "cs_dir_",
                            m = "cs_file_";
                        try {
                            o = "undefined" != typeof localStorage ? localStorage : {}, l = {}, c = "|"
                        } catch (e) {
                            o = {}, l = {}, c = "|"
                        }
                        return {
                            dir: function(e) {
                                var t = p + e,
                                    n = l[t];
                                if (n) return n.slice();
                                var r = o[t];
                                if (r) {
                                    r = r.split(c), n = [];
                                    for (var i = 0, a = r.length; i < a; i++) r[i].length > 0 && n.push(u(r[i]));
                                    return l[t] = n, n.slice()
                                }
                                return null
                            },
                            append: function(e, t, n) {
                                var r = d.read(e, t);
                                r ? r += n : r = n, d.write(e, t, r)
                            },
                            write: function(n, a, o) {
                                var s = d.dir(n);
                                s || (e(n), s = []), -1 == r.indexOf(a, s) && t(n, a), i(n, a, o)
                            },
                            deleteFile: function(e, t) {
                                var i = d.dir(e);
                                return !!i && (-1 != r.indexOf(t, i) && (n(e, t), !0))
                            },
                            read: function(e, t) {
                                var n = d.dir(e);
                                return n ? -1 == r.indexOf(t, n) ? null : a(e, t) : null
                            }
                        }
                    }(),
                    u = function() {
                        return {
                            dir: function() {
                                return null
                            },
                            append: function(e, t, n) {},
                            write: function(e, t, n) {},
                            deleteFile: function() {
                                return !1
                            },
                            read: function() {
                                return null
                            }
                        }
                    }(),
                    p = function(e, t) {
                        "undefined" != typeof engine && t && "undefined" != typeof setTimeout && setTimeout(t, 0), engine.createHttpClient().createRequest("GET", e, null).start(), t && setTimeout(t, 0)
                    },
                    m = function(e, t) {
                        if ("undefined" != typeof atv && "function" == typeof atv.setTimeout) {
                            "undefined" != typeof XMLHttpRequest && t && atv.setTimeout(t, 0);
                            var n = new XMLHttpRequest;
                            n.open("GET", e, !0), n.onreadystatechange = function() {
                                4 === n.readyState && (t && t(n.status), n = null)
                            }, n.send()
                        }
                    },
                    f = function(e, t, n) {
                        if ("undefined" != typeof atv && "function" == typeof atv.setTimeout) {
                            "undefined" != typeof XMLHttpRequest && n && atv.setTimeout(n, 0);
                            var r = new XMLHttpRequest;
                            r.open("POST", e, !0), r.onreadystatechange = function() {
                                4 === r.readyState && (n && n(r.status), r = null)
                            }, r.send(t)
                        }
                    },
                    g = function() {
                        return {
                            PLATFORM: "generic",
                            httpGet: o,
                            httpPost: c,
                            Storage: i,
                            IO: u,
                            getCrossPublisherId: function() {
                                return null
                            },
                            getAppName: function() {
                                return Constants.UNKNOWN_VALUE
                            },
                            getAppVersion: function() {
                                return Constants.UNKNOWN_VALUE
                            },
                            getVisitorId: function() {
                                return this.getDeviceName() + +new Date + ~~(1e3 * Math.random())
                            },
                            getVisitorIdSuffix: function() {
                                return "72"
                            },
                            getDeviceName: function() {
                                return ""
                            },
                            getPlatformVersion: function() {
                                return ""
                            },
                            getPlatformName: function() {
                                return "js"
                            },
                            getRuntimeName: function() {
                                return ""
                            },
                            getRuntimeVersion: function() {
                                return ""
                            },
                            getResolution: function() {
                                return ""
                            },
                            getLanguage: function() {
                                return ""
                            },
                            getPackageName: function() {
                                return ""
                            },
                            isConnectionAvailable: function() {
                                return !0
                            },
                            isCompatible: function() {
                                return !0
                            },
                            autoSelect: function() {},
                            setPlatformAPI: function() {},
                            isCrossPublisherIdChanged: function() {
                                return !1
                            },
                            setTimeout: function(e, t, n) {
                                return setTimeout(e, t, n)
                            },
                            clearTimeout: function(e) {
                                return clearTimeout(e)
                            },
                            getDeviceArchitecture: function() {
                                return Constants.UNKNOWN_VALUE
                            },
                            getConnectionType: function() {
                                return Constants.UNKNOWN_VALUE
                            },
                            getDeviceJailBrokenFlag: function() {
                                return Constants.UNKNOWN_VALUE
                            }
                        }
                    }(),
                    v = function() {
                        function e() {
                            return "undefined" != typeof engine && void 0 !== engine.stats
                        }

                        function t() {
                            return r.isNotEmpty(engine.stats.device.id) ? engine.stats.device.id : r.isNotEmpty(engine.stats.network.mac) ? engine.stats.network.mac : null
                        }

                        function n() {
                            if (null == a) {
                                var e = t();
                                null != e ? (a = e, o = "31", s = e) : (a = +new Date + ~~(1e3 * Math.random()), o = "72", s = null)
                            }
                        }
                        var a = null,
                            o = null,
                            s = null;
                        return {
                            PLATFORM: "trilithium",
                            httpGet: p,
                            httpPost: c,
                            Storage: i,
                            IO: u,
                            getCrossPublisherId: function() {
                                return n(), s
                            },
                            getAppName: function() {
                                return r.isNotEmpty(engine.stats.application.name) ? engine.stats.application.name : Constants.UNKNOWN_VALUE
                            },
                            getAppVersion: function() {
                                return r.isNotEmpty(engine.stats.application.version) ? engine.stats.application.version : Constants.UNKNOWN_VALUE
                            },
                            getVisitorId: function() {
                                return n(), a
                            },
                            getVisitorIdSuffix: function() {
                                return o
                            },
                            getDeviceName: function() {
                                return r.safeGet(engine.stats.device.platform, "")
                            },
                            getPlatformVersion: function() {
                                return r.safeGet(engine.stats.device.version, "")
                            },
                            getPlatformName: function() {
                                return "js"
                            },
                            getRuntimeName: function() {
                                return "trilithium"
                            },
                            getRuntimeVersion: function() {
                                return ""
                            },
                            getResolution: function() {
                                return "undefined" != typeof screen && void 0 !== screen.height && void 0 !== screen.width ? screen.height + "x" + screen.width : ""
                            },
                            getLanguage: function() {
                                return ""
                            },
                            getPackageName: function() {
                                return ""
                            },
                            isConnectionAvailable: function() {
                                return !0
                            },
                            isCompatible: e
                        }
                    }(),
                    h = function() {
                        function e() {
                            return "undefined" == typeof window && "undefined" != typeof atv
                        }

                        function t() {
                            null == n && ("undefined" != typeof atv && void 0 !== atv.device && atv.device.idForVendor ? (n = r.safeGet(atv.device.idForVendor, ""), i = "62") : (n = +new Date + ~~(1e3 * Math.random()), i = "72"), o = null)
                        }
                        var n = null,
                            i = null,
                            o = null;
                        return {
                            PLATFORM: "atv",
                            httpGet: m,
                            httpPost: f,
                            Storage: a,
                            IO: u,
                            getCrossPublisherId: function() {
                                return t(), o
                            },
                            getAppName: function() {
                                return Constants.UNKNOWN_VALUE
                            },
                            getAppVersion: function() {
                                return Constants.UNKNOWN_VALUE
                            },
                            getVisitorId: function() {
                                return t(), n
                            },
                            getVisitorIdSuffix: function() {
                                return i
                            },
                            getDeviceName: function() {
                                return "Apple TV"
                            },
                            getPlatformVersion: function() {
                                return "undefined" != typeof atv && void 0 !== atv.device && r.safeGet(atv.device.softwareVersion, "")
                            },
                            getPlatformName: function() {
                                return "js"
                            },
                            getRuntimeName: function() {
                                return "atv"
                            },
                            getRuntimeVersion: function() {
                                return "undefined" != typeof atv && void 0 !== atv.device && r.safeGet(atv.device.softwareVersion, "")
                            },
                            getResolution: function() {
                                return void 0 !== atv.device && void 0 !== atv.device.screenFrame && void 0 !== atv.device.screenFrame.height && void 0 !== atv.device.screenFrame.width ? atv.device.screenFrame.height + "x" + atv.device.screenFrame.width : ""
                            },
                            getLanguage: function() {
                                return "undefined" != typeof atv && void 0 !== atv.device && r.safeGet(atv.device.language, "")
                            },
                            getPackageName: function() {
                                return ""
                            },
                            isConnectionAvailable: function() {
                                return !0
                            },
                            setTimeout: function(e, t, n) {
                                return "undefined" != typeof atv && void 0 !== atv.setTimeout && atv.setTimeout(e, t, n)
                            },
                            clearTimeout: function(e) {
                                return "undefined" != typeof atv && void 0 !== atv.clearTimeout && atv.clearTimeout(e)
                            },
                            isCompatible: e
                        }
                    }(),
                    y = function() {
                        function e() {
                            return "undefined" != typeof window && "undefined" != typeof document
                        }
                        return {
                            PLATFORM: "chromecast",
                            httpGet: o,
                            httpPost: s,
                            Storage: i,
                            IO: d,
                            getCrossPublisherId: function() {
                                return null
                            },
                            getAppName: function() {
                                return "undefined" != typeof document && document.title || Constants.UNKNOWN_VALUE
                            },
                            getAppVersion: function() {
                                return Constants.UNKNOWN_VALUE
                            },
                            getVisitorId: function() {
                                return +new Date + ~~(1e3 * Math.random())
                            },
                            getVisitorIdSuffix: function() {
                                return "72"
                            },
                            getDeviceName: function() {
                                return "chromecast"
                            },
                            getPlatformVersion: function() {
                                return "5"
                            },
                            getPlatformName: function() {
                                return "js"
                            },
                            getRuntimeName: function() {
                                return "html"
                            },
                            getRuntimeVersion: function() {
                                return r.safeGet(r.getBrowserName() + " " + r.getBrowserFullVersion(), Constants.UNKNOWN_VALUE)
                            },
                            getResolution: function() {
                                var e = "undefined" != typeof window && r.exists(window.screen) && r.exists(window.screen.availWidth) ? window.screen.availWidth : 0,
                                    t = "undefined" != typeof window && r.exists(window.screen) && r.exists(window.screen.availHeight) ? window.screen.availHeight : 0;
                                return e > 0 && t > 0 ? e + "x" + t : ""
                            },
                            getLanguage: function() {
                                return "undefined" != typeof window && r.exists(window.navigator) && r.safeGet(window.navigator.language, "") || ""
                            },
                            getPackageName: function() {
                                return "undefined" != typeof castReceiverManager && castReceiverManager.getApplicationData && "function" == typeof castReceiverManager.getApplicationData && castReceiverManager.getApplicationData().namespaces && castReceiverManager.getApplicationData().namespaces[0] || ""
                            },
                            isConnectionAvailable: function() {
                                return "undefined" != typeof window && r.exists(window.navigator) && r.safeGet(window.navigator.onLine, !0) || !0
                            },
                            isCompatible: e,
                            getConnectionType: function() {
                                return Constants.UNKNOWN_VALUE
                            }
                        }
                    }();
                g.autoSelect = function() {
                    v.isCompatible() ? e.Utils.extend(g, v) : h.isCompatible() && e.Utils.extend(g, h)
                }, g.setPlatformAPI = function(t) {
                    var n = !1;
                    switch (t) {
                        case e.PlatformAPIs.Trilithium:
                            e.Utils.extend(g, v), n = !0;
                            break;
                        case e.PlatformAPIs.AppleTV:
                            e.Utils.extend(g, h), n = !0;
                            break;
                        case e.PlatformAPIs.Chromecast:
                            r.extend(g, y), n = !0
                    }
                    n && (g.autoSelect = function() {})
                };
                var b, _, w = "undefined" != typeof window && "undefined" != typeof document;
                w ? (b = window, _ = document) : (b = {}, _ = {
                    location: {
                        href: ""
                    },
                    title: "",
                    URL: "",
                    referrer: "",
                    cookie: ""
                });
                var r = r || {};
                r.filterMap = function(e, t) {
                    for (var n in e) e.hasOwnProperty(n) && -1 == r.indexOf(n, t) && delete e[n]
                }, r.getKeys = function(e, t) {
                    var n, r = [];
                    for (n in e)(!t || t.test(n)) && e.hasOwnProperty(n) && (r[r.length] = n);
                    return r
                };
                var k = function() {
                        var e = ["play", "pause", "end", "buffer", "keep-alive", "hb", "custom", "ad_play", "ad_pause", "ad_end", "ad_click"];
                        return {
                            PLAY: 0,
                            PAUSE: 1,
                            END: 2,
                            BUFFER: 3,
                            KEEP_ALIVE: 4,
                            HEART_BEAT: 5,
                            CUSTOM: 6,
                            AD_PLAY: 7,
                            AD_PAUSE: 8,
                            AD_END: 9,
                            AD_CLICK: 10,
                            toString: function(t) {
                                return e[t]
                            }
                        }
                    }(),
                    C = function() {
                        var e = [k.END, k.PLAY, k.PAUSE, k.BUFFER];
                        return {
                            IDLE: 0,
                            PLAYING: 1,
                            PAUSED: 2,
                            BUFFERING: 3,
                            toEventType: function(t) {
                                return e[t]
                            }
                        }
                    }(),
                    T = {
                        ADPLAY: k.AD_PLAY,
                        ADPAUSE: k.AD_PAUSE,
                        ADEND: k.AD_END,
                        ADCLICK: k.AD_CLICK
                    },
                    S = {
                        STREAMSENSE_VERSION: "4.1504.21",
                        DEFAULT_PLAYERNAME: "streamsense",
                        DEFAULT_HEARTBEAT_INTERVAL: [{
                            playingtime: 6e4,
                            interval: 1e4
                        }, {
                            playingtime: null,
                            interval: 6e4
                        }],
                        DEFAULT_KEEP_ALIVE_INTERVAL: 12e5,
                        DEFAULT_PAUSED_ON_BUFFERING_INTERVAL: 500,
                        C1_VALUE: "19",
                        C10_VALUE: "js",
                        NS_AP_C12M_VALUE: "1",
                        NS_NC_VALUE: "1",
                        PAGE_NAME_LABEL: "name",
                        RESTRICTED_URL_LENGTH_LIMIT: 2048,
                        URL_LENGTH_LIMIT: 4096,
                        LABELS_ORDER: ["c1", "c2", "ca2", "cb2", "cc2", "cd2", "ns_site", "ca_ns_site", "cb_ns_site", "cc_ns_site", "cd_ns_site", "ns_vsite", "ca_ns_vsite", "cb_ns_vsite", "cc_ns_vsite", "cd_ns_vsite", "ns_ap_an", "ca_ns_ap_an", "cb_ns_ap_an", "cc_ns_ap_an", "cd_ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "ca12", "cb12", "cc12", "cd12", "ns_ak", "ns_ap_hw", "name", "ns_ap_ni", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ca_ns_ap_ver", "cb_ns_ap_ver", "cc_ns_ap_ver", "cd_ns_ap_ver", "ns_ap_sv", "ns_ap_cv", "ns_type", "ca_ns_type", "cb_ns_type", "cc_ns_type", "cd_ns_type", "ns_radio", "ns_nc", "ns_ap_ui", "ca_ns_ap_ui", "cb_ns_ap_ui", "cc_ns_ap_ui", "cd_ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sq", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ca_ns_st_mp", "cb_ns_st_mp", "cc_ns_st_mp", "cd_ns_st_mp", "ns_st_mv", "ca_ns_st_mv", "cb_ns_st_mv", "cc_ns_st_mv", "cd_ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_pt", "ns_st_pa", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_ap_jb", "ns_ap_res", "ns_ap_sd", "ns_ap_po", "ns_ap_ot", "ns_ap_c12m", "cs_c12u", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_ar", "ns_ap_miss", "ns_ts", "ns_st_ca", "ns_st_cp", "ns_st_er", "ca_ns_st_er", "cb_ns_st_er", "cc_ns_st_er", "cd_ns_st_er", "ns_st_pe", "ns_st_ui", "ca_ns_st_ui", "cb_ns_st_ui", "cc_ns_st_ui", "cd_ns_st_ui", "ns_st_bc", "ns_st_bt", "ns_st_bp", "ns_st_pc", "ns_st_pp", "ns_st_br", "ns_st_ub", "ns_st_vo", "ns_st_ws", "ns_st_pl", "ns_st_pr", "ns_st_ep", "ns_st_ty", "ns_st_ct", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_dt", "ns_st_de", "ns_st_pu", "ns_st_cu", "ns_st_fee", "ns_ap_i1", "ns_ap_i2", "ns_ap_i3", "ns_ap_i4", "ns_ap_i5", "ns_ap_i6", "ns_ap_referrer", "ns_clid", "ns_campaign", "ns_source", "ns_mchannel", "ns_linkname", "ns_fee", "gclid", "utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content", "c3", "ca3", "cb3", "cc3", "cd3", "c4", "ca4", "cb4", "cc4", "cd4", "c5", "ca5", "cb5", "cc5", "cd5", "c6", "ca6", "cb6", "cc6", "cd6", "c10", "c11", "c13", "c14", "c15", "c16", "c7", "c8", "c9", "ns_ap_er"]
                    },
                    I = function() {
                        return function() {
                            function e(e, t) {
                                var r = t[e];
                                null != r && (n[e] = r)
                            }
                            var t, n, i = this,
                                a = 0,
                                o = 0,
                                s = 0,
                                l = 0,
                                c = 0,
                                d = 0;
                            r.extend(this, {
                                reset: function(e) {
                                    null != e && e.length > 0 ? r.filterMap(n, e) : n = {}, n.hasOwnProperty("ns_st_cl") || (n.ns_st_cl = "0"), n.hasOwnProperty("ns_st_pn") || (n.ns_st_pn = "1"), n.hasOwnProperty("ns_st_tp") || (n.ns_st_tp = "1"), i.setPauses(0), i.setStarts(0), i.setBufferingTime(0), i.setBufferingTimestamp(-1), i.setPlaybackTime(0), i.setPlaybackTimestamp(-1)
                                },
                                setLabels: function(e, t) {
                                    null != e && r.extend(n, e), i.setRegisters(n, t)
                                },
                                getLabels: function() {
                                    return n
                                },
                                setLabel: function(e, t) {
                                    var n = {};
                                    n[e] = t, i.setLabels(n, null)
                                },
                                getLabel: function(e) {
                                    return n[e]
                                },
                                getClipId: function() {
                                    return (void 0 === t || null == t) && i.setClipId("1"), t
                                },
                                setClipId: function(e) {
                                    t = e
                                },
                                setRegisters: function(t, n) {
                                    var r = t.ns_st_cn;
                                    null != r && (i.setClipId(r), delete t.ns_st_cn), r = t.ns_st_bt, null != r && (s = Number(r), delete t.ns_st_bt), e("ns_st_cl", t), e("ns_st_pn", t), e("ns_st_tp", t), e("ns_st_ub", t), e("ns_st_br", t), n != C.PLAYING && null != n || null != (r = t.ns_st_sq) && (o = Number(r), delete t.ns_st_sq), n != C.BUFFERING && null != (r = t.ns_st_pt) && (c = Number(r), delete t.ns_st_pt), n != C.PAUSED && n != C.IDLE && null != n || null != (r = t.ns_st_pc) && (a = Number(r), delete t.ns_st_pc)
                                },
                                createLabels: function(e, t) {
                                    var n = t || {};
                                    return n.ns_st_cn = i.getClipId(), n.ns_st_bt = String(i.getBufferingTime()), e != k.PLAY && null != e || (n.ns_st_sq = String(o)), e != k.PAUSE && e != k.END && e != k.KEEP_ALIVE && e != k.HEART_BEAT && null != e || (n.ns_st_pt = String(i.getPlaybackTime()), n.ns_st_pc = String(a)), r.extend(n, i.getLabels()), n
                                },
                                incrementPauses: function() {
                                    a++
                                },
                                incrementStarts: function() {
                                    o++
                                },
                                getBufferingTime: function() {
                                    var e = s;
                                    return l >= 0 && (e += +new Date - l), e
                                },
                                setBufferingTime: function(e) {
                                    s = e
                                },
                                getPlaybackTime: function() {
                                    var e = c;
                                    return d >= 0 && (e += +new Date - d), e
                                },
                                setPlaybackTime: function(e) {
                                    c = e
                                },
                                getPlaybackTimestamp: function() {
                                    return d
                                },
                                setPlaybackTimestamp: function(e) {
                                    d = e
                                },
                                getBufferingTimestamp: function() {
                                    return l
                                },
                                setBufferingTimestamp: function(e) {
                                    l = e
                                },
                                getPauses: function() {
                                    return a
                                },
                                setPauses: function(e) {
                                    a = e
                                },
                                getStarts: function() {
                                    return o
                                },
                                setStarts: function(e) {
                                    o = e
                                }
                            }), n = {}, i.reset()
                        }
                    }(),
                    P = function() {
                        return function() {
                            var e, t, n = this,
                                i = null,
                                a = 0,
                                o = 0,
                                s = 0,
                                l = 0,
                                c = 0,
                                d = 0,
                                u = !1;
                            r.extend(this, {
                                reset: function(e) {
                                    null != e && e.length > 0 ? r.filterMap(t, e) : t = {}, n.setPlaylistId(+new Date + "_" + d), n.setBufferingTime(0), n.setPlaybackTime(0), n.setPauses(0), n.setStarts(0), n.setRebufferCount(0), u = !1
                                },
                                setLabels: function(e, i) {
                                    null != e && r.extend(t, e), n.setRegisters(t, i)
                                },
                                getLabels: function() {
                                    return t
                                },
                                setLabel: function(e, t) {
                                    var r = {};
                                    r[e] = t, n.setLabels(r, null)
                                },
                                getLabel: function(e) {
                                    return t[e]
                                },
                                getClip: function() {
                                    return i
                                },
                                getPlaylistId: function() {
                                    return e
                                },
                                setPlaylistId: function(t) {
                                    e = t
                                },
                                setRegisters: function(t, n) {
                                    var r = t.ns_st_sp;
                                    null != r && (a = Number(r), delete t.ns_st_sp), r = t.ns_st_bc, null != r && (s = Number(r), delete t.ns_st_bc), r = t.ns_st_bp, null != r && (l = Number(r), delete t.ns_st_bp), r = t.ns_st_id, null != r && (e = r, delete t.ns_st_id), n != C.BUFFERING && null != (r = t.ns_st_pa) && (c = Number(r), delete t.ns_st_pa), n != C.PAUSED && n != C.IDLE && null != n || null != (r = t.ns_st_pp) && (o = Number(r), delete t.ns_st_pp)
                                },
                                createLabels: function(t, i) {
                                    var l = i || {};
                                    return l.ns_st_bp = String(n.getBufferingTime()), l.ns_st_sp = String(a), l.ns_st_id = String(e), s > 0 && (l.ns_st_bc = String(s)), t != k.PAUSE && t != k.END && t != k.KEEP_ALIVE && t != k.HEART_BEAT && null != t || (l.ns_st_pa = String(n.getPlaybackTime()), l.ns_st_pp = String(o)), t != k.PLAY && null != t || n.didFirstPlayOccurred() || (l.ns_st_pb = "1", n.setFirstPlayOccurred(!0)), r.extend(l, n.getLabels()), l
                                },
                                incrementStarts: function() {
                                    a++
                                },
                                incrementPauses: function() {
                                    o++, i.incrementPauses()
                                },
                                setPlaylistCounter: function(e) {
                                    d = e
                                },
                                incrementPlaylistCounter: function() {
                                    d++
                                },
                                addPlaybackTime: function(e) {
                                    if (i.getPlaybackTimestamp() >= 0) {
                                        var t = e - i.getPlaybackTimestamp();
                                        i.setPlaybackTimestamp(-1), i.setPlaybackTime(i.getPlaybackTime() + t), n.setPlaybackTime(n.getPlaybackTime() + t)
                                    }
                                },
                                addBufferingTime: function(e) {
                                    if (i.getBufferingTimestamp() >= 0) {
                                        var t = e - i.getBufferingTimestamp();
                                        i.setBufferingTimestamp(-1), i.setBufferingTime(i.getBufferingTime() + t), n.setBufferingTime(n.getBufferingTime() + t)
                                    }
                                },
                                getBufferingTime: function() {
                                    var e = l;
                                    return i.getBufferingTimestamp() >= 0 && (e += +new Date - i.getBufferingTimestamp()), e
                                },
                                setBufferingTime: function(e) {
                                    l = e
                                },
                                getPlaybackTime: function() {
                                    var e = c;
                                    return i.getPlaybackTimestamp() >= 0 && (e += +new Date - i.getPlaybackTimestamp()), e
                                },
                                setPlaybackTime: function(e) {
                                    c = e
                                },
                                getStarts: function() {
                                    return a
                                },
                                setStarts: function(e) {
                                    a = e
                                },
                                getPauses: function() {
                                    return o
                                },
                                setPauses: function(e) {
                                    o = e
                                },
                                getRebufferCount: function() {
                                    return s
                                },
                                incrementRebufferCount: function() {
                                    s++
                                },
                                setRebufferCount: function(e) {
                                    s = e
                                },
                                didFirstPlayOccurred: function() {
                                    return u
                                },
                                setFirstPlayOccurred: function(e) {
                                    u = e
                                }
                            }), i = new I, t = {}, n.reset()
                        }
                    }(),
                    V = function() {
                        var i = function(i, a, o) {
                            function s(e) {
                                var t = 0;
                                if (null != fe)
                                    for (var n = 0; n < fe.length; n++) {
                                        var r = fe[n],
                                            i = r.playingtime;
                                        if (!i || e < i) {
                                            t = r.interval;
                                            break
                                        }
                                    }
                                return t
                            }

                            function l() {
                                p();
                                var e = s(ue.getClip().getPlaybackTime());
                                if (e > 0) {
                                    var t = he > 0 ? he : e;
                                    Z = g.setTimeout(u, t)
                                }
                                he = 0
                            }

                            function c() {
                                p();
                                var e = s(ue.getClip().getPlaybackTime());
                                he = e - ue.getClip().getPlaybackTime() % e, null != Z && p()
                            }

                            function d() {
                                he = 0, be = 0, ye = 0
                            }

                            function u() {
                                ye++, D(q(k.HEART_BEAT, null)), he = 0, l()
                            }

                            function p() {
                                null != Z && (g.clearTimeout(Z), Z = null)
                            }

                            function m() {
                                v(), $ = g.setTimeout(f, ge)
                            }

                            function f() {
                                D(q(k.KEEP_ALIVE, null)), de++, m()
                            }

                            function v() {
                                null != $ && (g.clearTimeout($), $ = null)
                            }

                            function h() {
                                b(), ae.isPauseOnBufferingEnabled() && L(C.PAUSED) && (J = g.setTimeout(y, ve))
                            }

                            function y() {
                                if (ee == C.PLAYING) {
                                    ue.incrementRebufferCount(), ue.incrementPauses();
                                    D(q(k.PAUSE, null)), de++, ee = C.PAUSED
                                }
                            }

                            function b() {
                                null != J && (g.clearTimeout(J), J = null)
                            }

                            function _(e) {
                                return e == C.PLAYING || e == C.PAUSED
                            }

                            function w() {
                                W && (g.clearTimeout(W), W = null)
                            }

                            function T(e) {
                                return e == k.PLAY ? C.PLAYING : e == k.PAUSE ? C.PAUSED : e == k.BUFFER ? C.BUFFERING : e == k.END ? C.IDLE : null
                            }

                            function I(e, t, n) {
                                if (w(), n) W = g.setTimeout(function(e, t) {
                                    return function() {
                                        I(e, t)
                                    }
                                }(e, t), n);
                                else if (M(e)) {
                                    var i = U(),
                                        a = le,
                                        o = R(t),
                                        s = a >= 0 ? o - a : 0;
                                    O(U(), t), x(e, t), j(U()), F(e);
                                    for (var l = 0, c = ie.length; l < c; l++) ie[l](i, e, t, s);
                                    V(t), ue.setRegisters(t, e), ue.getClip().setRegisters(t, e);
                                    var d = q(C.toEventType(e), t);
                                    r.extend(d, t), L(Y) && (D(d), ee = Y, de++)
                                }
                            }

                            function V(e) {
                                var t = e.ns_st_mp;
                                null != t && (te = t, delete e.ns_st_mp), t = e.ns_st_mv, null != t && (ne = t, delete e.ns_st_mv), null != (t = e.ns_st_ec) && (de = Number(t), delete e.ns_st_ec)
                            }

                            function D(e, t) {
                                void 0 === t && (t = !0), t && A(e);
                                var r = ae.getPixelURL();
                                if (X) {
                                    if (!E()) {
                                        var i = we.am,
                                            a = we.et,
                                            o = i.newApplicationMeasurement(X, a.HIDDEN, e, r);
                                        X.getQueue().offer(o)
                                    }
                                } else r && g.httpGet(n(r, e))
                            }

                            function E() {
                                var e = X.getAppContext(),
                                    t = X.getSalt(),
                                    n = X.getPixelURL();
                                return null == e || null == t || 0 == t.length || null == n || 0 == n.length
                            }

                            function A(e) {
                                re = q(null), r.extend(re, e)
                            }

                            function O(e, t) {
                                var n = R(t);
                                if (e == C.PLAYING) ue.addPlaybackTime(n), c(), v();
                                else if (e == C.BUFFERING) ue.addBufferingTime(n), b();
                                else if (e == C.IDLE) {
                                    var i = r.getKeys(ue.getClip().getLabels());
                                    ue.getClip().reset(i)
                                }
                            }

                            function x(e, t) {
                                var n = R(t);
                                ce = N(t), e == C.PLAYING ? (l(), m(), ue.getClip().setPlaybackTimestamp(n), L(e) && (ue.getClip().incrementStarts(), ue.getStarts() < 1 && ue.setStarts(1))) : e == C.PAUSED ? L(e) && ue.incrementPauses() : e == C.BUFFERING ? (ue.getClip().setBufferingTimestamp(n), me && h()) : e == C.IDLE && d()
                            }

                            function L(e) {
                                return (e != C.PAUSED && e != C.IDLE || ee != C.IDLE && null != ee) && (e != C.BUFFERING && ee != e)
                            }

                            function N(e) {
                                var t = -1;
                                return e.hasOwnProperty("ns_st_po") && (t = r.getInteger(e.ns_st_po)), t
                            }

                            function R(e) {
                                var t = -1;
                                return e.hasOwnProperty("ns_ts") && (t = Number(e.ns_ts)), t
                            }

                            function M(e) {
                                return null != e && U() != e
                            }

                            function F(e) {
                                Y = e, le = +new Date
                            }

                            function U() {
                                return Y
                            }

                            function j(e) {
                                Q = e
                            }

                            function q() {
                                var e, t;
                                1 == arguments.length ? (e = C.toEventType(Y), t = arguments[0]) : (e = arguments[0], t = arguments[1]);
                                var n = {};
                                if ("undefined" != typeof document) {
                                    var i = document;
                                    n.c7 = i.URL, n.c8 = i.title, n.c9 = i.referrer
                                }
                                return null != t && r.extend(n, t), n.hasOwnProperty("ns_ts") || (n.ns_ts = String(+new Date)), null != e && !n.hasOwnProperty("ns_st_ev") && (n.ns_st_ev = k.toString(e)), ae.isPersistentLabelsShared() && X && r.extend(n, X.getLabels()), r.extend(n, ae.getLabels()), B(e, n), ue.createLabels(e, n), ue.getClip().createLabels(e, n), n.hasOwnProperty("ns_st_mp") || (n.ns_st_mp = te), n.hasOwnProperty("ns_st_mv") || (n.ns_st_mv = ne), n.hasOwnProperty("ns_st_ub") || (n.ns_st_ub = "0"), n.hasOwnProperty("ns_st_br") || (n.ns_st_br = "0"), n.hasOwnProperty("ns_st_pn") || (n.ns_st_pn = "1"), n.hasOwnProperty("ns_st_tp") || (n.ns_st_tp = "1"), n.hasOwnProperty("ns_st_it") || (n.ns_st_it = "c"), n.ns_st_sv = S.STREAMSENSE_VERSION, n.ns_type = "hidden", n
                            }

                            function B(e, t) {
                                var n = t || {};
                                if (n.ns_st_ec = String(de), !n.hasOwnProperty("ns_st_po")) {
                                    var i = ce,
                                        a = R(n);
                                    (e == k.PLAY || e == k.KEEP_ALIVE || e == k.HEART_BEAT || null == e && Y == C.PLAYING) && (i += a - ue.getClip().getPlaybackTimestamp()), n.ns_st_po = r.getInteger(i)
                                }
                                return e == k.HEART_BEAT && (n.ns_st_hc = String(ye)), n
                            }

                            function H(e) {
                                R(e) < 0 && (e.ns_ts = String(+new Date))
                            }

                            function z(e, t, n) {
                                t = t || {}, t.ns_st_ad = 1, e >= k.AD_PLAY && e <= k.AD_CLICK && ae.notify(e, t, n)
                            }

                            function K(e, t) {
                                ae.notify(k.CUSTOM, e, t)
                            }
                            var G, W, Q, Y, X, J, $, Z, ee, te, ne, re, ie, ae = this,
                                oe = 500,
                                se = null,
                                le = 0,
                                ce = 0,
                                de = 0,
                                ue = null,
                                pe = !0,
                                me = !0,
                                fe = S.DEFAULT_HEARTBEAT_INTERVAL,
                                ge = S.DEFAULT_KEEP_ALIVE_INTERVAL,
                                ve = S.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,
                                he = 0,
                                ye = 0,
                                be = 0,
                                _e = !1,
                                we = {};
                            o ? g.setPlatformAPI(o) : g.autoSelect(), r.extend(this, {
                                reset: function(e) {
                                    ue.reset(e), ue.setPlaylistCounter(0), ue.setPlaylistId(+new Date + "_1"), ue.getClip().reset(e), null == e || e.isEmpty() ? G = {} : r.filterMap(G, e), de = 1, ye = 0, c(), d(), v(), b(), w(), Y = C.IDLE, Q = null, le = -1, ee = null, te = S.DEFAULT_PLAYERNAME, ne = S.STREAMSENSE_VERSION, re = null
                                },
                                setPauseOnBufferingInterval: function(e) {
                                    ve = e
                                },
                                getPauseOnBufferingInterval: function() {
                                    return ve
                                },
                                setKeepAliveInterval: function(e) {
                                    ge = e
                                },
                                getKeepAliveInterval: function() {
                                    return ge
                                },
                                setHeartbeatIntervals: function(e) {
                                    fe = e
                                },
                                notify: function() {
                                    var e, t, n, i;
                                    if (t = arguments[0], 3 == arguments.length ? (n = arguments[1], i = arguments[2]) : (n = {}, i = arguments[1]), k.toString(t)) {
                                        e = T(t);
                                        var a = r.extend({}, n);
                                        if (H(a), a.hasOwnProperty("ns_st_po") || (a.ns_st_po = r.getInteger(i).toString()), t == k.PLAY || t == k.PAUSE || t == k.BUFFER || t == k.END) ae.isPausePlaySwitchDelayEnabled() && _(Y) && _(e) && (Y != C.PLAYING || e != C.PAUSED || W) ? I(e, a, oe) : I(e, a);
                                        else {
                                            var o = q(t, a);
                                            r.extend(o, a), D(o, !1), de++
                                        }
                                    }
                                },
                                getLabels: function() {
                                    return G
                                },
                                getState: function() {
                                    return Y
                                },
                                setLabels: function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && ae.setLabel(t, e[t])
                                },
                                getLabel: function(e) {
                                    return G[e]
                                },
                                setLabel: function(e, t) {
                                    null == t ? delete G[e] : G[e] = t
                                },
                                setPixelURL: function(e) {
                                    if (null == e || 0 == e.length) return null;
                                    var t = decodeURIComponent || unescape,
                                        n = e.indexOf("?");
                                    if (n >= 0) {
                                        if (n < e.length - 1) {
                                            for (var r = e.substring(n + 1).split("&"), i = 0, a = r.length; i < a; i++) {
                                                var o = r[i],
                                                    s = o.split("=");
                                                2 == s.length ? ae.setLabel(s[0], t(s[1])) : 1 == s.length && ae.setLabel(S.PAGE_NAME_LABEL, t(s[0]))
                                            }
                                            e = e.substring(0, n + 1)
                                        }
                                    } else e += "?";
                                    return se = e
                                },
                                getPixelURL: function() {
                                    return se || ("undefined" != typeof ns_p && "string" == typeof ns_p.src ? se = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : "string" == typeof ns_pixelUrl ? se = ns_pixelUrl.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null)
                                },
                                isPersistentLabelsShared: function() {
                                    return pe
                                },
                                setPersistentLabelsShared: function(e) {
                                    pe = e
                                },
                                isPauseOnBufferingEnabled: function() {
                                    return me
                                },
                                setPauseOnBufferingEnabled: function(e) {
                                    me = e
                                },
                                isPausePlaySwitchDelayEnabled: function() {
                                    return _e
                                },
                                setPausePlaySwitchDelayEnabled: function(e) {
                                    _e = e
                                },
                                setPausePlaySwitchDelay: function(e) {
                                    e && e > 0 && (oe = e)
                                },
                                getPausePlaySwitchDelay: function() {
                                    return oe
                                },
                                setClip: function(e, t) {
                                    var n = !1;
                                    return Y == C.IDLE && (ue.getClip().reset(), ue.getClip().setLabels(e, null), t && ue.incrementStarts(), n = !0), n
                                },
                                setPlaylist: function(e) {
                                    var t = !1;
                                    return Y == C.IDLE && (ue.incrementPlaylistCounter(), ue.reset(), ue.getClip().reset(), ue.setLabels(e, null), t = !0), t
                                },
                                importState: function(e) {
                                    reset();
                                    var t = r.extend({}, e);
                                    ue.setRegisters(t, null), ue.getClip().setRegisters(t, null), V(t), de++
                                },
                                exportState: function() {
                                    return re
                                },
                                getVersion: function() {
                                    return S.STREAMSENSE_VERSION
                                },
                                addListener: function(e) {
                                    ie.push(e)
                                },
                                removeListener: function(e) {
                                    ie.splice(r.indexOf(e, ie), 1)
                                },
                                getClip: function() {
                                    return ue.getClip()
                                },
                                getPlaylist: function() {
                                    return ue
                                },
                                setHttpGet: function(e) {
                                    "function" == typeof e && (g.httpGet = e)
                                },
                                setHttpPost: function(e) {
                                    "function" == typeof e && (g.httpPost = e)
                                }
                            }), r.extend(this, {
                                adNotify: z,
                                customNotify: K,
                                viewNotify: function(e, n) {
                                    (e = e || ae.getPixelURL()) && t(e, n)
                                }
                            }), e.comScore && (we = e.comScore.exports, X = we.c()), G = {}, de = 1, Y = C.IDLE, ue = new P, J = null, me = !0, Z = null, ye = 0, d(), $ = null, W = null, _e = !1, ee = null, ce = 0, ie = [], ae.reset(), i && ae.setLabels(i), a && ae.setPixelURL(a)
                        };
                        return function(t) {
                            function n(e, t) {
                                return C[S] || a(e, t)
                            }

                            function i() {
                                S = -1;
                                for (var t = 0; t <= T; t++)
                                    if (C.hasOwnProperty(String(t))) {
                                        S = t;
                                        break
                                    }
                                return e.StreamSense.activeIndex = S, S
                            }

                            function a(t, n) {
                                return t = t || null, n = n || null, t && "object" == typeof t && (n = t, t = null), C[++T] = new e.StreamSense(n, t), i(), C[T]
                            }

                            function o() {
                                var t = !1,
                                    n = S;
                                if ("number" == typeof arguments[0] && isFinite(arguments[0])) n = arguments[0];
                                else if (arguments[0] instanceof e.StreamSense)
                                    for (var r in C)
                                        if (C.hasOwnProperty(r) && C[r] === arguments[0]) {
                                            n = r;
                                            break
                                        }
                                return C.hasOwnProperty(String(n)) && (t = C[n], delete C[n], t.reset(), i()), t
                            }

                            function s(e) {
                                return e = e || {}, n().setPlaylist(e), n().getPlaylist()
                            }

                            function l(e, t, r) {
                                return e = e || {}, "number" == typeof t && (e.ns_st_cn = t), n().setClip(e, r), n().getClip()
                            }

                            function c(e, t, r) {
                                return void 0 !== e && (r = r || null, t = t || {}, n().notify(e, t, r))
                            }

                            function d(e) {
                                void 0 !== e && n().setLabels(e)
                            }

                            function u() {
                                return n().getLabels()
                            }

                            function p(e) {
                                void 0 !== e && n().getPlaylist().setLabels(e)
                            }

                            function m() {
                                return n().getPlaylist().getLabels()
                            }

                            function f(e) {
                                void 0 !== e && n().getClip().setLabels(e)
                            }

                            function g() {
                                return n().getClip().getLabels()
                            }

                            function v(e) {
                                return n().reset(e || {})
                            }

                            function h(e) {
                                return n().getPlaylist().reset(e || {})
                            }

                            function y(e) {
                                return n().getClip().reset(e || {})
                            }

                            function b(e) {
                                return e = e || {}, n().viewNotify(null, e)
                            }

                            function _(e, t) {
                                return arguments.length > 2 && (e = arguments[1], t = arguments[2]), e = e || {}, "number" == typeof t && (e.ns_st_po = t), n().customNotify(e, t)
                            }

                            function w() {
                                return n().exportState()
                            }

                            function k(e) {
                                n().importState(e)
                            }
                            var C = {},
                                T = -1,
                                S = -1;
                            r.extend(t, {
                                activeIndex: S,
                                newInstance: a,
                                new: a,
                                destroyInstance: o,
                                destroy: o,
                                newPlaylist: s,
                                newClip: l,
                                notify: c,
                                setLabels: d,
                                getLabels: u,
                                setPlaylistLabels: p,
                                getPlaylistLabels: m,
                                setClipLabels: f,
                                getClipLabels: g,
                                resetInstance: v,
                                resetPlaylist: h,
                                resetClip: y,
                                viewEvent: b,
                                customEvent: _,
                                exportState: w,
                                importState: k
                            })
                        }(i), i
                    }();
                return V.AdEvents = T, V.PlayerEvents = k, V.InternalStates = C, V.getPlatformAPI = function() {
                    return g
                }, V
            }(), e.StreamingTag = e.StreamingTag || function() {
                var t = e.Utils,
                    n = e.StreamSense,
                    r = e.StreamSense.PlayerEvents,
                    i = (e.StreamSense.AdEvents, e.StreamSense.InternalStates || null),
                    a = null != e.StreamSense.InternalStates;
                return function() {
                    var o = function(o) {
                        function s(e) {
                            return t.exists(e) || (e = {}), t.exists(e.ns_st_ci) || (e.ns_st_ci = "0"), t.exists(e.c3) || (e.c3 = "*null"), t.exists(e.c4) || (e.c4 = "*null"), t.exists(e.c6) || (e.c6 = "*null"), e
                        }

                        function l(e) {
                            return v > 0 && e >= v ? h += e - v : h = 0, h
                        }

                        function c(e) {
                            _.getState() != i.IDLE && _.getState() != i.PAUSED ? _.notify(r.END, l(e)) : _.getState() == i.PAUSED && _.notify(r.END, h)
                        }

                        function d(e) {
                            return u("ns_st_ci", y, e) && u("c3", y, e) && u("c4", y, e) && u("c6", y, e)
                        }

                        function u(e, n, r) {
                            if (t.exists(e) && t.exists(n) && t.exists(r)) {
                                var i = n[e],
                                    a = r[e];
                                return t.exists(i) && t.exists(a) && i === a
                            }
                            return !1
                        }

                        function p(e, n) {
                            c(e), g++;
                            var i = {
                                ns_st_cn: g,
                                ns_st_pn: "1",
                                ns_st_tp: "0"
                            };
                            t.extend(i, n), _.setClip(i), y = n, v = e, h = 0, _.notify(r.PLAY, h)
                        }

                        function m(e) {
                            var n = +new Date;
                            c(n), g++, e = s(e);
                            var i = {
                                ns_st_cn: g,
                                ns_st_pn: "1",
                                ns_st_tp: "1",
                                ns_st_ad: "1"
                            };
                            t.extend(i, e), _.setClip(i), h = 0, _.notify(r.PLAY, h), v = n, b = !1
                        }

                        function f(e, t) {
                            var n = +new Date;
                            e = s(e), C == k.None && (C = t), b && C == t && d(e) ? (_.getClip().setLabels(e), _.getState() != i.PLAYING && (v = n, _.notify(r.PLAY, h))) : p(n, e), b = !0, C = t
                        }
                        var g = 0,
                            v = 0,
                            h = 0,
                            y = null,
                            b = !1,
                            _ = null,
                            w = !1,
                            k = {
                                None: 0,
                                AudioContent: 1,
                                VideoContent: 2
                            },
                            C = k.None;
                        t.extend(this, {
                                playAdvertisement: function() {
                                    if (_) {
                                        w && console && console.warn("Calling deprecated function 'playAdvertisement'. Please call 'playVideoAdvertisement' or 'playAudioAdvertisement' functions instead.");
                                        m({
                                            ns_st_ct: "va"
                                        })
                                    }
                                },
                                playVideoAdvertisement: function(e) {
                                    if (_) {
                                        var n = {
                                            ns_st_ct: "va"
                                        };
                                        e && t.extend(n, e), m(n)
                                    }
                                },
                                playAudioAdvertisement: function(e) {
                                    if (_) {
                                        var n = {
                                            ns_st_ct: "aa"
                                        };
                                        e && t.extend(n, e), m(n)
                                    }
                                },
                                playContentPart: function(e) {
                                    if (_) {
                                        w && console && console.warn("Calling deprecated function 'playContentPart'. Please call 'playVideoContentPart' or 'playAudioContentPart' functions instead.");
                                        var n = {
                                            ns_st_ct: "vc"
                                        };
                                        e && t.extend(n, e), f(n, k.VideoContent)
                                    }
                                },
                                playVideoContentPart: function(e) {
                                    if (_) {
                                        var n = {
                                            ns_st_ct: "vc"
                                        };
                                        e && t.extend(n, e), f(n, k.VideoContent)
                                    }
                                },
                                playAudioContentPart: function(e) {
                                    if (_) {
                                        var n = {
                                            ns_st_ct: "ac"
                                        };
                                        e && t.extend(n, e), f(n, k.AudioContent)
                                    }
                                },
                                stop: function() {
                                    if (_) {
                                        var e = +new Date;
                                        _.notify(r.PAUSE, l(e))
                                    }
                                }
                            }),
                            function() {
                                if (a)
                                    if (e.comScore) _ = new n, _.setLabel("ns_st_it", "r");
                                    else if (t.exists(o))
                                    if (w = t.isTrue(o.debug), t.exists(o.customerC2) && o.customerC2.length > 0) {
                                        var r = o.secure ? "https://sb" : "http" + ("s" == document.location.href.charAt(4) ? "s://sb" : "://b");
                                        _ = new n, _.setPixelURL(r + ".scorecardresearch.com/p?c1=2"), _.setLabel("c2", o.customerC2), _.setLabel("ns_st_it", "r")
                                    } else w && console && console.log("Warning: customerC2 is not provided (or incorrect) in the StreamingTag configuration.")
                            }()
                    };
                    return o
                }()
            }(), e
        }), define("controller/vendor/ComScore", ["underscore", "bean", "models/variable/video/videoStart", "models/variable/video/adStart", "models/variable/utility", "StreamSense", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i, a, o, s) {
            window._comscore = [], window.COMSCORE = [], t.on(window, "CTOReady", function() {
                u.init()
            });
            var l;
            l = "https:" === location.protocol ? new a.StreamSense({}, "https://sb.scorecardresearch.com/p?c1=2&c2=15354235") : new a.StreamSense({}, "http://b.scorecardresearch.com/p?c1=2&c2=15354235"), l.setHeartbeatIntervals(null);
            var c = {
                    trackVideoStream: function(e) {
                        var t = i.getValue({
                                videoEvent: e
                            }, "KDPEVNT", CTO),
                            n = i.getValue({
                                videoEvent: e
                            }, "KDPDAT_VALUE", CTO),
                            r = i.getValue({
                                videoEvent: e
                            }, "KDPDAT_PLAYHEAD", CTO),
                            o = i.getValue({
                                videoEvent: e
                            }, "VIDLEN", CTO),
                            s = i.getValue({
                                videoEvent: e
                            }, "GENURL", CTO),
                            c = i.getValue({
                                videoEvent: e
                            }, "ASSETID", CTO),
                            d = i.getValue({
                                videoEvent: e
                            }, "ASSETNAME", CTO),
                            u = "";
                        d && d[5] && (u = d[5]);
                        var p = 1e3 * r,
                            m = 1e3 * o,
                            f = {},
                            g = [];
                        "doPlay" == t && 0 == n && (f = {
                            ns_st_cn: "1",
                            ns_st_ci: c,
                            ns_st_pn: "1",
                            ns_st_tp: "1",
                            ns_st_cu: s,
                            ns_st_cl: m
                        }, u && (f.ns_st_ep = u), g[0] = f, l.setPlaylist(g), l.setClip(g[0])), "doPause" == t ? l.notify(a.StreamSense.PlayerEvents.PAUSE, {}, p) : "doPlay" == t ? l.notify(a.StreamSense.PlayerEvents.PLAY, {}, p) : "playerPlayEnd" == t ? l.notify(a.StreamSense.PlayerEvents.END, {}, p) : "playerUpdatePlayhead" == t && (l.notify(a.StreamSense.PlayerEvents.PAUSE, {}, p), l.notify(a.StreamSense.PlayerEvents.PLAY, {}, p))
                    },
                    trackPage: function(e, t) {
                        d._dolWAcomScorePageCheck(t) && this.comScorePage(t), d._dolWAcomScoreADPAGECheck(t) && this.comScoreADPage(t)
                    },
                    trackVideo: function(e, t) {
                        var i = !1,
                            a = !1;
                        if (n.getValue({
                                videoEvent: e
                            }, t) && (i = !0), r.getValue({
                                videoEvent: e
                            }, t) && (a = !0), i) try {
                            window.COMSCORE.beacon({
                                c1: 1,
                                c2: "6035140",
                                c3: d._dolWAcomScoreKeyword(t),
                                c5: "09",
                                c10: ""
                            })
                        } catch (e) {}
                        if (a) {
                            var o;
                            o = "shr" === e.FORM ? "02" : "03";
                            try {
                                window.COMSCORE.beacon({
                                    c1: 1,
                                    c2: "6035140",
                                    c5: o,
                                    c10: ""
                                })
                            } catch (e) {}
                        }(a || i) && d.createBeacon()
                    },
                    comScorePage: function(e) {
                        var t = new e;
                        window._comscore.push({
                            c1: "2",
                            c2: "fb" === t.getCTOValue("site", e) ? "15354235" : "6035140",
                            c3: "",
                            c4: document.URL,
                            c5: "",
                            options: {
                                url_append: d._dolWAcomScoreKeyword(e)
                            }
                        }), d.createBeacon()
                    },
                    comScoreADPage: function(e) {
                        var t = document.createElement("script"),
                            n = document.getElementsByTagName("script")[0];
                        t.async = !0, t.id = "analyticsComscorePageTrack", t.src = ("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/c2/15592703/cs.js", n.parentNode.insertBefore(t, n);
                        var r = document.getElementById("analyticsComscorePageTrack");
                        r.parentNode.removeChild(r)
                    }
                },
                d = {
                    _dolWAcomScoreKeyword: function(e) {
                        var t = (s.getValue({}, e) || o.getValue({}, e), i.getValue({}, "account", e)),
                            n = i.getValue({}, "comscorekw", e);
                        return "" != n && "string" == typeof n ? "comscorekw=" + n : -1 != t.indexOf("dcndisneychannel") ? "comscorekw=disneychannel" : -1 != t.indexOf("disneyxd") ? "comscorekw=disneyxd" : -1 != t.indexOf("disneyvideo2") ? "comscorekw=disneyvideos" : -1 != t.indexOf("disneygames2") ? "comscorekw=disneygames" : -1 != t.indexOf("disneyshows") ? "comscorekw=disneyshows" : -1 != t.indexOf("disneycharacters2") ? "comscorekw=disneycharacters" : -1 != t.indexOf("disneymovies") ? "comscorekw=disneymovies" : -1 != t.indexOf("disneymusic") ? "comscorekw=disneymusic" : -1 != t.indexOf("disneyhomepage") ? "comscorekw=disneycomhomepage" : -1 != t.indexOf("disneysitesearch") ? "comscorekw=disneysearch" : 0 == document.URL.indexOf("http://disney.go.com/create") ? "comscorekw=disneycreate" : 0 == document.URL.indexOf("http://disney.go.com/mydisney") ? "comscorekw=mydisney" : 0 == document.URL.indexOf("http://disney.go.com/characters") ? "comscorekw=disneycharacters" : 0 == document.URL.indexOf("http://disney.go.com/games/#/games/disneych") ? "comscorekw=disneychannel" : 0 == document.URL.indexOf("http://disney.go.com/videos/#/videos/tvshows") ? "comscorekw=disneychannel" : 0 == document.URL.indexOf("http://disney.go.com/games/#/games/disneyxd") ? "comscorekw=disneyxd" : 0 == document.URL.indexOf("http://disney.go.com/videos") ? "comscorekw=disneyvideos" : 0 == document.URL.indexOf("http://disney.go.com/games") ? "comscorekw=disneygames" : -1 != t.indexOf("babble") ? "comscorekw=babble" : -1 != t.indexOf("spoonful") ? "comscorekw=spoonful" : -1 != t.indexOf("babyzone") ? "comscorekw=babyzone" : -1 != t.indexOf("kaboose") ? "comscorekw=kaboose" : -1 != t.indexOf("funschool") ? "comscorekw=funschool" : -1 != t.indexOf("familycom") ? "comscorekw=familycom" : ""
                    },
                    _dolWAcomScorePageCheck: function(e) {
                        var t = s.getValue({}, e) || o.getValue({}, e) || "",
                            n = i.getValue({}, "account", e);
                        return "dfam" != t && "ddif" != t && (-1 !== n.indexOf("wdgint") && "latam" == t || -1 == n.indexOf("wdgint")) && -1 == n.indexOf("babble") && -1 == n.indexOf("disneyjunior") && -1 == n.indexOf("disneyconnection") && -1 == n.indexOf("disneygamedownloads") && -1 == n.indexOf("piratesonline") && -1 == n.indexOf("pixiehollow") && -1 == n.indexOf("toontown") && -1 == n.indexOf("worldofcars") && -1 == n.indexOf("preschooltime")
                    },
                    _dolWAcomScoreADPAGECheck: function(e) {
                        var t = s.getValue({}, e) || o.getValue({}, e) || "",
                            n = i.getValue({}, "account", e),
                            r = i.getValue({}, "breadcrumbs", e);
                        return -1 != n.indexOf("babble") || -1 != n.indexOf("spoonful") || "dcom" == t || "teen-beach-movie" == r
                    },
                    createBeacon: function() {
                        var e = document.createElement("script"),
                            t = document.getElementsByTagName("script")[0];
                        e.async = !0, e.id = "analyticsComscorePageTrack", e.src = ("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js", t.parentNode.insertBefore(e, t);
                        var n = document.getElementById("analyticsComscorePageTrack");
                        n.parentNode.removeChild(n)
                    }
                },
                u = {
                    udm_: function(e) {
                        var t, n, r, i, a, o = "comScore=",
                            s = document,
                            l = s.cookie,
                            c = "",
                            d = "indexOf",
                            u = "substring",
                            p = "length",
                            m = 2048,
                            f = "&ns_",
                            g = window,
                            v = g.encodeURIComponent || escape;
                        if (l[d](o) + 1)
                            for (i = 0, r = l.split(";"), a = r[p]; i < a; i++)(n = r[i][d](o)) + 1 && (c = "&" + unescape(r[i][u](n + o[p])));
                        e += f + "_t=" + +new Date + f + "c=" + (s.characterSet || s.defaultCharset || "") + "&c8=" + v(s.title) + c + "&c7=" + v(s.URL) + "&c9=" + v(s.referrer), e[p] > m && e[d]("&") > 0 && (t = e[u](0, m - 8).lastIndexOf("&"), e = (e[u](0, t) + f + "cut=" + v(e[u](t + 1)))[u](0, m)), s.images && (n = new Image, g.ns_p || (ns_p = n), n.src = e)
                    },
                    loadCS: function() {
                        var e = document.createElement("script"),
                            t = document.getElementsByTagName("script")[0];
                        e.async = !0, e.id = "analyticsComscorePageTrack", e.src = ("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/c2/15592703/cs.js", t.parentNode.insertBefore(e, t);
                        var n = document.getElementById("analyticsComscorePageTrack");
                        n.parentNode.removeChild(n)
                    },
                    init: function() {
                        this.isInit || (this.isInit = !0, u.udm_("http" + ("s" == document.location.href.charAt(4) ? "s://sb" : "://b") + ".scorecardresearch.com/b?c1=2&c2=15592703&" + d._dolWAcomScoreKeyword(CTO)), u.loadCS())
                    }
                };
            return c
        }), define("models/API/CTO", ["underscore", "bean", "controller/vendor/CTO", "controller/vendor/Omni", "controller/vendor/ResearchNowAPI", "controller/vendor/ComScore", "models/variable/allVariables"], function(e, t, n, r, i, a, o) {
            "use strict";
            var s, l, c = window.CTO.firstPageViewId;
            t.on(window, "beforeTrackPage", function() {
                c ? (l = c, c = void 0) : l = "CTO-" + (new Date).getTime() + "-" + Math.floor(1e13 * Math.random())
            });
            var d = function() {
                return s || (s = {
                    h: {},
                    addToQueue: function(e, t) {
                        return !d.__appData && (this.queue.unshift(function() {
                            this[e].apply(t)
                        }), !0)
                    },
                    runQueue: function() {
                        if (s.queue && s.queue.length && s.queue.pop && d.__appData)
                            for (; s.queue.length;) {
                                var t = s.queue.pop();
                                if (!e.isFunction(t)) return;
                                t = e.bind(t, s), t()
                            }
                    },
                    track: function(e) {
                        this.trackPage(e)
                    },
                    trackPage: function(o) {
                        if (this.copyProperties(o), !d.__appData.configs.disableTrackPage) {
                            if ("y" === (new d).disableTrack) return void(d.__appData.configs.disableTrackPage = !0);
                            this.addToQueue("trackPage", [o]) || (t.fire(window, "beforeTrackPage"), e.each(d.__appData.configs.trackedVendors, function(e) {
                                "CTO" === e ? n.trackPage(o, d) : "Omniture" === e ? r.trackPage(o, d) : "ResearchNow" === e ? i.trackPage(o, d) : "ComScore" === e && a.trackPage(o, d)
                            }), e.each(d.__appData.configs.trackedVendors, function(e) {
                                t.fire(window, "trackPage" + e, o)
                            }), t.fire(window, "trackPageComplete"), t.fire(d, "trackPageComplete"))
                        }
                    },
                    trackLink: function(i, a, o, s, l) {
                        if (!d.__appData.configs.disableTrackLink && !this.addToQueue("trackLink", [i, a, o, s, l])) {
                            var c = {};
                            e.isObject(i) ? c = i : i && (c.linkName = i, c.linkPosition = a, c.linkType = o, c.linkUrl = s, c.autoLinkTracking = l), t.fire(window, "beforeTrackLink"), e.each(d.__appData.configs.trackedVendors, function(e) {
                                "CTO" === e ? n.trackLink(c, d) : "Omniture" === e && r.trackLink(c, d)
                            }), e.each(d.__appData.configs.trackedVendors, function(e) {
                                t.fire(window, "trackLink" + e, c)
                            }), t.fire(window, "trackLinkComplete")
                        }
                    },
                    trackEvent: function(i) {
                        d.__appData.configs.disableTrackEvent || this.addToQueue("trackEvent", [i]) || (i = i || {}, e.each(d.__appData.configs.trackedVendors, function(e) {
                            "CTO" === e ? n.trackEvent(i, d) : "Omniture" === e && r.trackEvent(i, d)
                        }), d.__appData.configs.trackedVendors && e.each(d.__appData.configs.trackedVendors, function(e) {
                            t.fire(window, "trackEvent" + e, i)
                        }), t.fire(window, "trackEventComplete"))
                    },
                    trackVideo: function(i) {
                        d.__appData.configs.disableTrackVideo || this.addToQueue("trackVideo", [i]) || (i = i || {}, e.each(d.__appData.configs.trackedVendors, function(e) {
                            "CTO" === e ? n.trackVideo(i, d) : "Omniture" === e ? r.trackVideo(i, d) : "ComScore" === e && (a.trackVideo(i, d), a.trackVideoStream(i, d))
                        }), e.each(d.__appData.configs.trackedVendors, function(e) {
                            var n = "trackVideo" + e;
                            t.fire(window, n, i)
                        }), t.fire(window, "trackVideoComplete"))
                    },
                    trackGame: function(i) {
                        d.__appData.configs.disableTrackGame || this.addToQueue("trackGame", [i]) || (i = i || {}, e.each(d.__appData.configs.trackedVendors, function(e) {
                            "CTO" === e ? n.trackGame(i, d) : "Omniture" === e && r.trackGame(i, d)
                        }), d.__appData.configs.trackedVendors && e.each(d.__appData.configs.trackedVendors, function(e) {
                            t.fire(window, "trackGame" + e, i)
                        }), t.fire(window, "trackGameComplete"))
                    },
                    trackApp: function(i) {
                        d.__appData.configs.disableTrackApp || this.addToQueue("trackApp", [i]) || (i = i || {}, e.each(d.__appData.configs.trackedVendors, function(e) {
                            "CTO" === e ? n.trackApp(i, d) : "Omniture" === e && r.trackApp(i, d)
                        }), d.__appData.configs.trackedVendors && e.each(d.__appData.configs.trackedVendors, function(e) {
                            t.fire(window, "trackApp" + e, i)
                        }), t.fire(window, "trackAppComplete"))
                    },
                    trackPrint: function(i) {
                        d.__appData.configs.disableTrackPrint || this.addToQueue("trackPrint", [i]) || (i = i || {}, e.each(d.__appData.configs.trackedVendors, function(e) {
                            "CTO" === e ? n.trackPrint(i, d) : "Omniture" === e && r.trackPrint(i, d)
                        }), d.__appData.configs.trackedVendors && e.each(d.__appData.configs.trackedVendors, function(e) {
                            t.fire(window, "trackPrint" + e, i)
                        }), t.fire(window, "trackPrintComplete"))
                    },
                    trackError: function(e) {},
                    trackPagination: function(e) {
                        this.trackPage({
                            pageNumber: e
                        })
                    },
                    update: function(e) {
                        t.fire(window, "updateCTO", e)
                    },
                    resetObj: function() {
                        var n = this;
                        e.each(this, function(t, r) {
                            e.isFunction(t) || "__appData" === r || "queue" === r || delete n[r]
                        }), t.fire(window, "resetObj")
                    },
                    setProducerInfo: function(e) {
                        this.copyProperties(e), t.fire(window, "ctoProducerInfoAdded")
                    },
                    setCTOConfigs: function(n) {
                        e.extend(d.__appData.configs, n), t.fire(window, "ctoConfigsUpdated")
                    },
                    copyProperties: function(t) {
                        var n = this;
                        e.each(t, function(t, r) {
                            e.isFunction(t) || "retailer" !== r && "events" !== r && (n[r] = t)
                        })
                    },
                    getProducerInfo: function(t) {
                        var n = {};
                        return e.each(this, function(t, r) {
                            "string" != typeof t && "number" != typeof t && "boolean" != typeof t || e.isNaN(t) || "" === t || (n[r] = t)
                        }), e.each(t, function(e, t) {
                            (e || 0 === e) && (n[t] = e)
                        }), n
                    },
                    updateVariableLogic: function(t, n) {
                        e.each(t, function(t) {
                            var r = e.bind(n, o[t]);
                            o[t].getValue = r
                        })
                    },
                    addCTOListener: function(n, r) {
                        e.bind(r, s), t.on(window, n, r)
                    },
                    getCTOValue: function(e, t) {
                        return !(!o[e] || !o[e].getValue) && o[e].getValue(t, d)
                    }
                }), e.each(window.cto, function(t, n) {
                    e.isFunction(t) || (s[n] = t)
                }), s.pageViewId = l, s
            };
            return d
        }), define("controller/events/APIReadyCTO", ["underscore", "bean", "models/API/CTO", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i) {
            var a, o, s, l;
            t.on(window, "configLoadedCTO", function(e) {
                s = e, c.checkIfMainDependenciesLoaded()
            }), t.on(window, "variableMapLoadedCTO", function(e) {
                l = e, c.checkIfMainDependenciesLoaded()
            }), t.on(window, "cookiesReadyCTO", function() {
                o = !0, c.checkIfMainDependenciesLoaded()
            }), t.on(window, "modulesLoadedCTO", function() {
                a = !0, c.checkIfMainDependenciesLoaded()
            });
            var c = {
                checkIfMainDependenciesLoaded: function() {
                    if (!(s && l && o && a)) return !1;
                    var c = new n;
                    n.__appData = {
                        configs: s,
                        variableMap: l,
                        coreLibs: {
                            underscore: e,
                            bean: t
                        }
                    }, "load" === c.html5gpl && (n.__appData.configs.disableTrackPage = !0);
                    var d = i.getValue({}, n) || r.getValue({}, n) || "";
                    "embed" === c.templateType && "ddit" !== d && "ddif" !== d && (n.__appData.configs.disableTrackPage = !0), "load" === c.html5gpl && c.trackGame(c.gameParams), window.CTO = n;
                    var u = c.queue;
                    return window.cto = new n, u && (window.cto.queue = u), window.s_gi = window.s_gi || !0, window.cto.runQueue(), window.cto && window.cto.runQueue && "function" == typeof window.cto.runQueue && window.cto.runQueue(), "function" == typeof window.$ ? (t.fire(window, "CTOReady"), window.$(window).trigger("CTOReady")) : "function" == typeof window.jQuery ? (t.fire(window, "CTOReady"), window.jQuery(window).trigger("CTOReady")) : t.fire(window, "CTOReady"), !0
                }
            }
        }), define("controller/events/trackLinkCTO", ["bean", "underscore", "models/API/CTO", "models/variable/utility"], function(e, t, n, r) {
            e.one(n, "trackPageComplete", function() {
                if (!n.__appData.configs.disableAutoLinkTracking) {
                    i.getLevel() && i.addListener()
                }
            });
            var i = {
                addListener: function() {
                    e.on(window, "click", function(e) {
                        var t = "",
                            n = e.target || e.srcElement,
                            r = e.target || e.srcElement;
                        3 == n.nodeType && (n = n.parentNode, r = r.parentNode);
                        var a = i.getLevel();
                        if (a >= 3 && (n.getAttribute("src") ? t = n.getAttribute("src") : n.firstChild && "" != n.firstChild.data && "string" == typeof n.firstChild.data && (t = n.firstChild.data)), 0 == e.button) {
                            for (var o = !0; r;)
                                if (r.getAttribute) {
                                    if (r.getAttribute && "goc-menu" === r.getAttribute("id")) {
                                        o = !1;
                                        break
                                    }
                                    r = r.parentNode
                                } else r = r.parentNode;
                            if (!o) return;
                            for (; n;)
                                if (n.getAttribute) {
                                    if (a >= 1 && n.nodeName && (n.getAttribute("data-linkname") || n.getAttribute("data-linkposition"))) return i.getDataAttr(n), !0;
                                    if (a >= 2 && "A" == n.nodeName && n.getAttribute("name") && (-1 != n.getAttribute("name").indexOf("&lid") || -1 != n.getAttribute("name").indexOf("&lpos"))) return i.getLinkNameAttr(n), !0;
                                    if (a >= 3 && "A" == n.nodeName && n.getAttribute("href")) return i.getLinkNoAttr(n, t), !0;
                                    n = n.parentNode
                                } else n = n.parentNode
                        }
                    })
                },
                getLinkNoAttr: function(e, t) {
                    var r = e.getAttribute("href"),
                        i = t.match(/\S/g) ? t : r;
                    (new n).trackLink({
                        linkName: i,
                        linkPosition: "",
                        linkUrl: r,
                        linkType: 3,
                        autoLinkTracking: !0
                    })
                },
                getLinkNameAttr: function(e) {
                    var t = e.getAttribute("name"),
                        r = t.indexOf("&lid"),
                        i = t.indexOf("&lpos"),
                        a = "",
                        o = ""; - 1 != r && -1 != i && r < i ? (a = t.substring(r + 5, i), o = t.substring(i + 6)) : -1 != r && -1 == i ? a = t.substring(r + 5) : -1 != r && -1 != i && i < r ? (o = t.substring(i + 6, r), a = t.substring(r + 5)) : -1 != i && -1 == r && (a = t.substring(i + 6));
                    var s = e.getAttribute("href") ? e.getAttribute("href") : "";
                    (new n).trackLink({
                        linkName: a,
                        linkPosition: o,
                        linkUrl: s,
                        linkType: 2,
                        autoLinkTracking: !0
                    })
                },
                getDataAttr: function(e) {
                    var t = e.getAttribute("data-linkname") ? e.getAttribute("data-linkname") : "",
                        r = e.getAttribute("data-linkposition") ? e.getAttribute("data-linkposition") : "",
                        i = e.getAttribute("href") ? e.getAttribute("href") : "";
                    (new n).trackLink({
                        linkName: t,
                        linkPosition: r,
                        linkUrl: i,
                        linkType: 1,
                        autoLinkTracking: !0
                    })
                },
                getLevel: function() {
                    var e = (new n, {});
                    e[0] = ["wdgintde", "wdgintes", "wdgintuk", "wdgintpt", "wdgintit", "wdgintpl", "wdgintfr", "wdgintse", "wdginttr", "wdgintdk", "wdgintno", "wdgintfi", "wdgintbg", "wdgintro", "wdgintcz", "wdginthu", "wdgintnl", "wdgintgr", "wdgintil", "clubpenguin", "princess", "disneyvideo2", "disneygames2", "disneyshows", "disneycharacters2", "disneymovies", "disneymusic", "disneysitesearch", "disneyhomepage", "monstersuniversity2", "matterhorn"], e[1] = [], e[2] = ["disneymovierewards"];
                    var t = r.getValue({}, "account", n);
                    if ("string" == typeof t && "" != t)
                        for (var i = 0; i < 3; i++)
                            for (var a = 0; a < e[i].length; a++)
                                if (-1 != t.indexOf(e[i][a])) return i;
                    return 3
                }
            }
        }), define("controller/events/cookiesReadyCTO", ["pollster", "bean", "underscore", "models/data/utility", "cookie", "tld", "controller/events/APIReadyCTO"], function(e, t, n, r, i, a) {
            var o = a.getDomain(location.hostname),
                s = !1;
            if (n.each(e.ziplineDomains, function(e) {
                    -1 !== e.indexOf(o) && (s = !0)
                }), e.corsSupported() && e.cookiesEnabled())
                if (r.isSessionExpired()) {
                    if (i.get("ctoVisitor")) {
                        var l;
                        try {
                            l = JSON.parse(unescape(i.get("ctoVisitor")))
                        } catch (e) {
                            l = {}
                        }
                        if (n.isNumber(l.sessionCount)) {
                            l.sessionCount++;
                            var c = new Date((new Date).getTime() + 315569259747);
                            i.safeSet("ctoVisitor", JSON.stringify(l), {
                                expires: c,
                                path: "/",
                                domain: o
                            })
                        }
                    }
                } else s = !1;
            else s = !1;
            if (!s) return t.fire(window, "cookiesReadyCTO"), "";
            e.pollDomains()
        }), define("controller/events/updateCookies", ["bean", "models/data/utility"], function(e, t) {
            e.on(window, "trackPageComplete trackLinkComplete trackEventComplete trackVideoComplete trackGameComplete trackAppComplete trackPrintComplete", function() {
                t.saveCookieQueue()
            })
        }), define("controller/events/updateHitSeq", ["bean", "models/data/utility", "underscore"], function(e, t, n) {
            e.on(window, "trackPageComplete trackLinkComplete trackEventComplete trackVideoComplete trackGameComplete trackAppComplete trackPrintComplete", function() {
                var e = t.getValueFromCookie("hitCount");
                n.isNumber(e) ? e++ : e = 1, t.addKeyValueToCookieQueue("hitCount", e)
            })
        }), define("controller/events/trackBounce", ["bean", "models/API/CTO", "cookie", "models/data/utility"], function(e, t, n, r) {
            var i = r.getPollsterValue("sessionId"),
                a = r.getLocalValue("localSessionId");
            if (!i && !a) {
                var o = new t;
                setTimeout(function() {
                    "emea" != o.region && o.trackEvent({
                        engagementType: "page_5_sec",
                        timeOnPage: 5
                    })
                }, 5e3), setTimeout(function() {
                    "emea" != o.region && o.trackEvent({
                        engagementType: "page_10_sec",
                        timeOnPage: 10
                    })
                }, 1e4), setTimeout(function() {
                    "emea" != o.region && o.trackEvent({
                        engagementType: "page_15_sec",
                        timeOnPage: 15
                    })
                }, 15e3)
            }
        }), define("controller/events/trackTimeToClick", ["bean", "models/API/CTO"], function(e, t) {
            e.on(window, "beforeTrackPage", function() {
                (new t).pageTimestamp = (new Date).getTime()
            }), e.on(window, "beforeTrackLink", function() {
                var e = new t;
                e.pageTimestamp && (e.timeToClick = (new Date).getTime() - e.pageTimestamp)
            }), e.on(window, "trackLinkComplete", function() {
                delete cto.pageTimestamp, delete cto.timeToClick
            })
        }), define("controller/events/trackPrint", ["bean", "models/API/CTO"], function(e, t) {
            var n = 0,
                r = function(e) {
                    return (new Date).getTime() - e < 1e4
                },
                i = function() {
                    if (!r(n)) {
                        n = (new Date).getTime();
                        (new t).trackPrint()
                    }
                };
            if (window.matchMedia) {
                var a = window.matchMedia("print");
                if (!a.addListener) return;
                a.addListener(function(e) {
                    e.matches && i()
                })
            }
            window.onbeforeprint = i, e.on(window, "click", function(e) {
                var n = e.target || e.srcElement;
                for (3 == n.nodeType && (n = n.parentNode); n;) {
                    if ("A" == n.nodeName) {
                        var r = n.getAttribute("href");
                        if (r && r.match && r.match(/.pdf$/)) {
                            (new t).trackPrint({
                                linkUrl: r
                            })
                        }
                    }
                    n = n.parentNode
                }
            })
        }), define("controller/events/runQueue", ["bean", "models/API/CTO"], function(e, t) {
            e.on(window, "load", function(e) {
                (new t).runQueue()
            }), e.on(window, "trackPageComplete trackLinkComplete trackEventComplete trackVideoComplete trackGameComplete trackAppComplete trackPrintComplete", function() {
                (new t).runQueue()
            })
        }), define("controller/cookie/prevPageName", ["bean", "models/variable/common/fullPageName", "models/variable/int/intFullPageName", "models/variable/common/prevPageName", "models/data/utility", "models/API/CTO"], function(e, t, n, r, i, a) {
            var o = {
                updatePreviousPage: function() {
                    "emea" === (new a).region ? i.addKeyValueToLocalCookieQueue(r.id, n.getValue({}, a)) : i.addKeyValueToLocalCookieQueue(r.id, t.getValue({}, a)), i.saveCookieQueue()
                }
            };
            return e.on(window, "trackPageComplete", function() {
                o.updatePreviousPage()
            }), o
        }),
        function(e, t) {
            "undefined" != typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define("script", t) : this.$script = t()
        }(0, function() {
            function e(e, t) {
                for (var n = 0, r = e.length; n < r; ++n)
                    if (!t(e[n])) return l;
                return 1
            }

            function t(t, n) {
                e(t, function(e) {
                    return !n(e)
                })
            }

            function n(a, o, s) {
                function l(e) {
                    return e.call ? e() : p[e]
                }

                function d() {
                    if (!--y) {
                        p[h] = 1, v && v();
                        for (var n in f) e(n.split("|"), l) && !t(f[n], l) && (f[n] = [])
                    }
                }
                a = a[c] ? a : [a];
                var u = o && o.call,
                    v = u ? o : s,
                    h = u ? a.join("") : o,
                    y = a.length;
                return setTimeout(function() {
                    t(a, function e(t, n) {
                        return null === t ? d() : (t = n || -1 !== t.indexOf(".js") || /^https?:\/\//.test(t) || !i ? t : i + t + ".js", g[t] ? (h && (m[h] = 1), 2 == g[t] ? d() : setTimeout(function() {
                            e(t, !0)
                        }, 0)) : (g[t] = 1, h && (m[h] = 1), void r(t, d)))
                    })
                }, 0), n
            }

            function r(e, t) {
                var n, r = o.createElement("script");
                r.onload = r.onerror = r[u] = function() {
                    r[d] && !/^c|loade/.test(r[d]) || n || (r.onload = r[u] = null, n = 1, g[e] = 2, t())
                }, r.async = 1, r.src = a ? e + (-1 === e.indexOf("?") ? "?" : "&") + a : e, s.insertBefore(r, s.lastChild)
            }
            var i, a, o = document,
                s = o.getElementsByTagName("head")[0],
                l = !1,
                c = "push",
                d = "readyState",
                u = "onreadystatechange",
                p = {},
                m = {},
                f = {},
                g = {};
            return n.get = r, n.order = function(e, t, r) {
                ! function i(a) {
                    a = e.shift(), e.length ? n(a, i) : n(a, t, r)
                }()
            }, n.path = function(e) {
                i = e
            }, n.urlArgs = function(e) {
                a = e
            }, n.ready = function(r, i, a) {
                r = r[c] ? r : [r];
                var o = [];
                return !t(r, function(e) {
                    p[e] || o[c](e)
                }) && e(r, function(e) {
                    return p[e]
                }) ? i() : function(e) {
                    f[e] = f[e] || [], f[e][c](i), a && a(o)
                }(r.join("|")), n
            }, n.done = function(e) {
                n([null], e)
            }, n
        }), define("controller/vendor/Nielsen", ["underscore", "bean", "models/variable/utility", "models/variable/video/videoStart", "models/variable/video/videoComplete", "models/API/CTO", "script"], function(e, t, n, r, i, a, o) {
            t.on(window, "trackPageNielsen", function() {
                l.init(), s.trackPageCTO(), t.fire(window, "trackPageNielsenComplete")
            }), t.on(window, "trackVideoNielsen", function(e) {
                s.trackVideo(e), t.fire(window, "trackVideoNielsenComplete")
            });
            var s = {
                    trackPageCTO: function() {
                        l._dolWANielsenPageCheck() && this.nielsenPageTrack()
                    },
                    trackVideo: function(e) {
                        var t = !1,
                            n = !1;
                        if (r.getValue({
                                videoEvent: e
                            }, a) ? t = !0 : i.getValue({
                                videoEvent: e
                            }, a) && (n = !0), n || t) {
                            var o = new a,
                                s = {
                                    clientid: "us-902424",
                                    vcid: l._dolWANielsenVideoCheck(e),
                                    sfcode: "us",
                                    cisuffix: "",
                                    prod: "sc"
                                };
                            if ("undefined" == typeof gg) return void o.trackError({
                                errorCode: 1,
                                errorMessage: "Nielsen is not tracking.",
                                errorType: "trackVideo"
                            });
                            var c = new gg;
                            c.ggInitialize(s, 0, !1, !0), c.ggPM(3, e.ASSETID, "content", "<title>" + e.ASSETNAME + "</title><censuscategory>" + o.seriesCode + "</censuscategory><length>" + e.VIDLEN + "</length>", "1"), t ? c.ggPM(5, e.KDPDAT_PLAYHEAD) : n && c.ggPM(7, e.KDPDAT_PLAYHEAD)
                        }
                    },
                    nielsenPageTrack: function() {
                        if ("au" == (new a).region) o("//secure-au.imrworldwide.com/v60.js", function() {
                            if ("function" == typeof nol_t) {
                                var e = {
                                    cid: "disneyau",
                                    content: "0",
                                    server: "secure-au"
                                };
                                nol_t(e).record().post()
                            }
                        });
                        else {
                            (new Image).src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-505916h&cg=0&cc=1&si=", escape(window.location.href), "&rp=", escape(document.referrer), "&ts=compact&rnd=", (new Date).getTime()].join("")
                        }
                    }
                },
                l = {
                    init: function() {
                        if (!this.hasInit && (this.hasInit = !0, "au" != (new a).region)) {
                            var e = document.createElement("script");
                            e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://" : "http://") + "secure-us.imrworldwide.com/novms/js/2/ggcmb390.js", document.getElementsByTagName("body")[0].appendChild(e)
                        }
                    },
                    _dolWANielsenVideoCheck: function(e) {
                        var t = n.getValue({
                            videoEvent: e
                        }, "account", a);
                        switch (n.getValue({
                            videoEvent: e
                        }, "comscorekw", a)) {
                            case "disneychannel":
                                return "c06";
                            case "disneyxd":
                                return "c05";
                            case "disneyjunior":
                                return "c03";
                            case "disneyvideo":
                                return "c04"
                        }
                        return -1 != t.indexOf("dcndisneychannel") ? "c06" : 0 == document.URL.indexOf("http://disneychannel.disney.com") ? "c06" : 0 == document.URL.indexOf("http://disney.go.com/games/#/games/disneych") ? "c06" : 0 == document.URL.indexOf("http://disney.go.com/videos/#/videos/tvshows") ? "c06" : -1 != t.indexOf("disneyxd") ? "c05" : 0 == document.URL.indexOf("http://disneyxd.disney.com") ? "c05" : 0 == document.URL.indexOf("http://disney.go.com/games/#/games/disneyxd") ? "c05" : -1 != t.indexOf("disneyjunior") ? "c03" : 0 == document.URL.indexOf("http://disneyjunior.disney.com") ? "c03" : 0 == document.URL.indexOf("http://disney.go.com/disneyjunior") ? "c03" : -1 != t.indexOf("disneyvideo2") ? "c04" : 0 == document.URL.indexOf("http://video.disney.com") ? "c04" : 0 == document.URL.indexOf("http://disney.go.com/videos") ? "c04" : 0 == document.URL.indexOf("http://disneydvd.disney.go.com") ? "c02" : 0 == document.URL.indexOf("http://disney.com") ? "c01" : ""
                    },
                    _dolWANielsenPageCheck: function() {
                        return -1 == n.getValue({}, "account", a).indexOf("clubpenguin")
                    }
                }
        }), define("controller/vendor/SZM", ["bean", "models/API/CTO", "url"], function(e, t, n) {
            e.on(window, "trackPageSZM", function() {
                var e = new t;
                "tv-dc-app" !== e.intBreadcrumbs && -1 === document.referrer.indexOf("file://") && "de" === e.country && a.init()
            });
            var r = {
                    one: {
                        "disneychannel.de/tv-programm": {
                            CP: "07_02_TV-DC"
                        },
                        "filme.disney.de/kino": {
                            CP: "06_02_Kino_CP"
                        },
                        "filme.disney.de/dvd&blu-ray": {
                            CP: "06_03_Kino_DVD"
                        },
                        "filme.disney.de/oliver-und-co": {
                            CP: "06_02_Kino_CP"
                        },
                        "filme.disney.de/lone-ranger": {
                            CP: "06_02_Kino_CP"
                        }
                    },
                    multi: {
                        "parks.disney.de/": {
                            CP: "10_01_Parks"
                        },
                        "live.disney.de/": {
                            CP: "11_01_live"
                        },
                        "tv.disney.de/": {
                            CP: "07_01_TV_LP"
                        },
                        "video.disney.de/": {
                            CP: "03_02_VideoCP"
                        },
                        "shows.disneychannel.de/": {
                            CP: "07_02_TV-DC"
                        },
                        "disneychannel.de/livestream": {
                            CP: "07_05_TV-DCSimulcast"
                        },
                        "disneychannel.de/mediathek": {
                            CP: "07_05_TV-DCCatchup"
                        },
                        "disneychannel.de/watch/": {
                            CP: "07_05_TV-DCCatchup"
                        },
                        "gewinnspiele.disney.de/": {
                            CP: "05_01_GWS_LP"
                        },
                        "spiele.disney.de/": {
                            CP: "02_02_GamesCP"
                        },
                        "filme.disney.de/": {
                            CP: "06_02_Kino_CP"
                        },
                        "cinemagic.disney.de/": {
                            CP: "07_04_TV-DCM"
                        },
                        "disneyxd.disney.de/": {
                            CP: "07_03_TV-DXD"
                        },
                        "prinzessinnen.disney.de/": {
                            CP: "08_01_Favo-Princess"
                        },
                        "winnie-puuh.disney.de/": {
                            CP: "08_02_Favo-Winniepuuh"
                        },
                        "micky.disney.de/": {
                            CP: "08_03_Favo-Mickey"
                        },
                        "cars.disney.de/": {
                            CP: "08_04_Favo-Cars"
                        },
                        "suche.disney.de": {
                            CP: "13_01_Suche"
                        },
                        "disney.de/": {
                            CP: "01_01_Home"
                        },
                        "disneychannel.de/": {
                            CP: "07_02_TV-DC_LP"
                        }
                    }
                },
                i = {
                    trackPage: function() {
                        var e = n("hostname") + n("path"),
                            t = r.one[e] && r.one[e].CP;
                        if (!t)
                            for (var i in r.multi)
                                if (r.multi.hasOwnProperty(i) && -1 !== e.indexOf(i)) {
                                    t = r.multi[i].CP;
                                    break
                                }
                        t = t || "14_01_event";
                        var a = {
                            st: "disney",
                            mg: "yes",
                            cp: t,
                            sv: "i2"
                        };
                        iom.c(a, 1)
                    }
                },
                a = {
                    init: function() {
                        this.scriptTag({
                            src: "https://script.ioam.de/iam.js"
                        }, function() {
                            i.trackPage()
                        })
                    },
                    scriptTag: function(e, t) {
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.src = e.src, n.async = !0, n.onreadystatechange = n.onload = function() {
                            var e = n.readyState;
                            t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t())
                        }, document.body.appendChild(n)
                    }
                }
        }), define("controller/vendor/Tealium", ["underscore", "bean", "models/API/CTO"], function(e, t, n) {
            t.on(window, "trackPageTealium", function() {
                var e = new n,
                    r = "emea" === e.region,
                    i = "sea" === e.region,
                    a = "in" === e.region,
                    o = document.location.hostname.indexOf(".com.au") > -1;
                if (r || i || o || a) {
                    var s = document.getElementsByTagName("head")[0],
                        l = document.createElement("script");
                    l.type = "text/javascript", l.src = r ? "//tags.disneyinternational.com/tealium/utag.js" : o ? "//tags.disneyinternational.com/tealium/australia/prod/utag.js" : a ? "https://tags.disneyinternational.com/tealium/india/prod/utag.js" : "//analytics.disneyinternational.com/tealium/sea/utag.js", s.appendChild(l), t.fire(window, "trackPageTealiumComplete")
                }
            })
        }), define("controller/vendor/BlueKai", ["underscore", "bean"], function(e, t) {
            t.on(window, "trackPageBlueKai", function() {
                if (!n.isLoaded) return void(n.trackOnLoad = !0);
                var e = n.getSiteTag();
                if (e > 0) {
                    try {
                        if ("undefined" != typeof cto) {
                            var r = void 0 !== cto.adKeywords ? cto.adKeywords : "",
                                i = void 0 !== cto.breadcrumbs ? cto.breadcrumbs : "",
                                a = void 0 !== cto.contentTag ? cto.contentTag : "",
                                o = void 0 !== cto.swid ? cto.swid : "";
                            bk_addPageCtx("adKeywords", r), bk_addPageCtx("heir1", i), bk_addPageCtx("contentTag", a), bk_addPageCtx("id", o)
                        }
                    } catch (e) {}
                    bk_allow_multiple_calls = !0, bk_use_multiple_iframes = !0, bk_doJSTag(e, 10)
                }
                t.fire(window, "trackPageBlueKaiComplete")
            }), t.on(window, "trackLinkBlueKai", function() {
                var e = n.getSiteTag();
                79675 == e ? bk_doJSTag(79675, 10) : 25625 == e && bk_doJSTag(25625, 10)
            });
            var n = {
                isLoaded: !1,
                trackOnLoad: !1,
                getSiteTag: function() {
                    var e = location.hostname,
                        t = location.pathname;
                    return e.indexOf("babble.com") > -1 ? 79671 : e.indexOf("ohmy.disney.com") > -1 ? 79675 : e.indexOf("style.disney.com") > -1 ? 79675 : e.indexOf("family.disney.com") > -1 ? 79677 : e.indexOf("liveshows.disney.com") > -1 ? 79679 : e.indexOf("www.starwars.com") > -1 ? 79681 : e.indexOf("disneybaby.com") > -1 ? 42138 : e.indexOf("www.disney.com") > -1 && "/" == t ? 79994 : 0
                }
            };
            if (n.getSiteTag() > 0) {
                var r = document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                i.type = "text/javascript", i.src = "//tags.bkrtx.com/js/bk-coretag.js", i.onload = function() {
                    n.isLoaded = !0, n.trackOnLoad && t.fire(window, "trackPageBlueKai")
                }, r.appendChild(i)
            }
        }), define("controller/vendor/CoreMetrics", ["underscore", "bean", "tld", "models/API/CTO"], function(e, t, n, r) {
            t.on(window, "trackPageCoreMetrics", function(e) {
                var n = new r;
                "string" == typeof n.region && "latam" == n.region.toLowerCase() && (a.hasInit ? a.trackPage(e) : (a.init(a.setup, e), a.hasInit = !0)), t.fire(window, "trackPageCoreMetricsComplete")
            });
            var a = {
                hasInit: !1,
                init: function(e, t) {
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.src = "//libs.coremetrics.com/eluminate.js", n.readyState ? n.onreadystatechange = function() {
                        "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, e(t))
                    } : n.onload = function() {
                        e(t)
                    }, document.getElementsByTagName("head")[0].appendChild(n)
                },
                setup: function(e) {
                    cmSetClientID(a.getSiteCode(), !0, "data.coremetrics.com", n.getDomain(location.hostname)), a.trackPage(e)
                },
                trackPage: function(e) {
                    var t = new r,
                        n = {
                            pageID: t.getCTOValue("pgTtl", r) || "",
                            catID: t.getCTOValue("breadcrumbs", r) || "",
                            searchTerm: e.internalSearchPhrase || "",
                            searchResults: "",
                            sitename: t.getCTOValue("pageName", r) || "",
                            category: t.getCTOValue("category", r) || "DCORE",
                            BU: t.getCTOValue("buCode", r) || "DOL",
                            country: "LATAM:".concat(t.country || ""),
                            description: a.getMetaTag("property", "og:description") || a.getMetaTag("name", "description"),
                            keywords: " "
                        },
                        i = document.location.search;
                    i = i.substring(1, i.length).replace(/&/g, "-_-"), cmCreatePageviewTag(n.pageID, n.catID, n.searchTerm, n.searchResults, "sitename=" + n.sitename + "-_-category=" + n.category + "-_-BU=" + n.BU + "-_-country=" + n.country + "-_-description=" + n.description + "-_-keywords=" + n.keywords + "-_-" + i)
                },
                getSiteCode: function() {
                    var e = new r,
                        t = e.getCTOValue("siteCode", r);
                    return t = t.replace("mh:", ""), t ? "disneychannel" === t ? t = "dch" : "disneyjunior" === t ? t = "djr" : "disneyxd" === t && (t = "dxd") : t = "LATAM", "51050000|".concat(t.substring(0, 6))
                },
                getMetaTag: function(e, t) {
                    var n = document.getElementsByTagName("meta");
                    for (i = 0; i < n.length; i++)
                        if (n[i].getAttribute(e) == t) return n[i].getAttribute("content");
                    return ""
                }
            }
        }), define("controller/vendor/Facebook", ["models/API/CTO"], function(e) {
            var t = {
                    isLoaded: !1,
                    adIdArray: [
                        ["728131197322127", "1564454920515476", "1043656762354122", "566400313524051", "10152420391245954"],
                        ["126599171393465"],
                        ["1975382006082933"],
                        ["10152420387815954"]
                    ],
                    getSiteTag: function() {
                        var e = location.hostname;
                        return e.indexOf("family.disney.com") > -1 || e.indexOf("ohmy.disney.com") > -1 || e.indexOf("style.disney.com") > -1 || e.indexOf("babble.com") > -1 || e.indexOf("disneybaby.com") > -1 ? 0 : e.indexOf("readriordan.com") > -1 ? 1 : e.indexOf("ddn.disney.com") > -1 ? 2 : e.indexOf("starwars.com") > -1 ? 3 : void 0
                    }
                },
                n = t.getSiteTag();
            if (n > -1) {
                if (!t.adIdArray[n]) return;
                document.getElementsByTagName("body")[0];
                ! function(e, t, n, r, i, a, o) {
                    e.fbq || (i = e.fbq = function() {
                        i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments)
                    }, e._fbq || (e._fbq = i), i.push = i, i.loaded = !0, i.version = "2.0", i.queue = [], a = t.createElement(n), a.async = !0, a.src = "https://connect.facebook.net/en_US/fbevents.js", o = t.getElementsByTagName(n)[0], o.parentNode.insertBefore(a, o))
                }(window, document, "script");
                for (var r = t.adIdArray[n].length, i = 0; i < r; i++) {
                    var a = t.adIdArray[n][i];
                    fbq("init", a), fbq("track", "PageView")
                }(new e).addCTOListener("trackPrintCTO", function() {
                    fbq("track", "printbutton")
                })
            }
        }), define("controller/vendor/Unid", [], function() {
            if (function() {
                    var e = location.hostname;
                    return e.indexOf("babble.com") > -1 || e.indexOf("disneymovieclub.go.com") > -1
                }()) {
                var e = document.getElementsByTagName("head")[0],
                    t = document.createElement("script");
                t.type = "text/javascript", t.src = "//cdn.unid.go.com/js/unid.min.js", e.appendChild(t)
            }
        }), define("controller/vendor/Floodlight", ["controller/vendor/utility"], function(e) {
            var t = {
                    isLoaded: !1,
                    trackOnLoad: !1,
                    getPostfix: function() {
                        var e = location.hostname,
                            t = location.pathname;
                        return e.indexOf("starwars.com") > -1 ? t.indexOf("/films/star-wars-episode") > -1 || t.endsWith("/films/solo") || t.endsWith("/films/rogue-one") ? "tfua=;npa=;ord=" : "ord=" : null
                    }
                },
                n = e.getSiteTag();
            if (null != n) {
                var r = Math.random() + "",
                    i = 1e13 * r,
                    a = document.getElementsByTagName("head")[0],
                    o = document.createElement("script");
                o.type = "text/javascript", o.src = "//www.googleadservices.com/pagead/conversion.js", a.appendChild(o);
                var s = document.getElementsByTagName("body")[0],
                    l = document.createElement("iframe");
                l.src = "https://3944448.fls.doubleclick.net/activityi;src=3944448;type=" + n + ";cat=starw0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;" + t.getPostfix() + i + "?", l.width = 1, l.height = 1, l.frameBorder = 0, l.style = "display:none", s.appendChild(l)
            }
        }), define("controller/vendor/Cint", ["tld", "models/API/CTO", "models/variable/common/visitorId", "models/variable/common/localVisitorId"], function(e, t, n, r) {
            if (function() {
                    var t = e.getDomain(location.hostname),
                        n = e.getSubdomain(location.hostname);
                    return "disney.com" === t ? "eats" === n || "style" === n || "ohmy" === n || "books" === n || "liveshows" === n || "www" === n : "babble.com" === t || "starwars.com" === t
                }()) {
                var i = n.getValue({}, t);
                i || (i = r.getValue({}, t));
                var a = document.getElementsByTagName("body")[0],
                    o = document.createElement("img");
                o.style = "display: none", o.src = "https://c.cintnetworks.com/?a=6483&i=2&e=1&c=1&c0=" + i, a.appendChild(o)
            }
        }), define("controller/vendor/Parsely", ["tld", "models/API/CTO"], function(e, t) {
            if (function() {
                    return location.hostname.indexOf("babble.com") > -1
                }()) {
                var n = new t,
                    r = document.createElement("div");
                r.id = "parsely-root", r.style = "display: none";
                var i = document.createElement("span");
                i.id = "parsely-cfg", i.setAttribute("data-parsely-site", e.getDomain(location.hostname));
                var a = document.getElementsByTagName("body")[0];
                r.appendChild(i), a.appendChild(r);
                var o = document.location.protocol,
                    s = document.getElementById("parsely-root"),
                    l = "https:" === o ? "d1z2jf7jlzjs58.cloudfront.net" : "static.parsely.com";
                if (document.getElementById("parsely-script")) return;
                var c = document.createElement("script");
                return c.id = "parsely-script", c.async = !0, c.src = o + "//" + l + "/p.js", s.appendChild(c), n.addCTOListener("trackLinkCTO", function(e) {
                    "infinite_scroll" != e.linkId && "Next" != e.linkName || PARSELY.beacon.trackPageView({
                        url: e.linkUrl,
                        urlref: location.href,
                        js: 1
                    })
                }), !0
            }
        }), define("controller/vendor/AdobeDTM", ["tld"], function(e) {
            function t() {
                var e = location.hostname,
                    t = location.pathname;
                return e.indexOf("disneyplusoriginals_disney_com") > -1 && 0 == t.indexOf("/one-day-at-disney") ? 1 : e.indexOf("disneyplusoriginals") > -1 && 0 == t.indexOf("/show/one-day-at-disney") && 2
            }
            if (t()) {
                var n = document.getElementsByTagName("head")[0],
                    r = document.createElement("script");
                r.type = "text/javascript", r.async = !0, 1 === t() ? r.src = "//assets.adobedtm.com/launch-ENfcdf2143f28f4b68999f3ac78e44c1bf-development.min.js" : r.src = "//assets.adobedtm.com/launch-ENb32f5684f1194fb99b7cdf3f8f7095ae.min.js", n.appendChild(r)
            }
        }), define("controller/vendor/allVendors", ["controller/vendor/CTO", "controller/vendor/Omni", "controller/vendor/ComScore", "controller/vendor/Nielsen", "controller/vendor/ResearchNowAPI", "controller/vendor/SZM", "controller/vendor/Tealium", "controller/vendor/BlueKai", "controller/vendor/CoreMetrics", "controller/vendor/Facebook", "controller/vendor/Unid", "controller/vendor/Floodlight", "controller/vendor/Cint", "controller/vendor/Parsely", "controller/vendor/AdobeDTM"], function() {
            return arguments
        }), define("models/data/Config", ["bean", "controller/events/APIReadyCTO"], function(e) {
            e.fire(window, "configLoadedCTO", {
                disableAutoLinkTracking: !1,
                trackedVendors: ["CTO", "Nielsen", "Omniture", "ComScore", "ResearchNow", "Tealium", "BlueKai", "CoreMetrics"]
            })
        }), define("models/data/VariableMap", ["bean", "controller/events/APIReadyCTO"], function(e) {
            var t = {
                tP: {
                    cto: {
                        mappings: {
                            trackingCode: ["extTrckCd"],
                            cmp: ["extTrckCd"],
                            timeParting: ["tParting"],
                            internalPromotion: ["intTrckCd"],
                            promoClicks: ["intTrckCd"],
                            searchPhrase: ["intSearchKwd"],
                            internalSearchPhrase: ["intSearchKwd"],
                            searchFlow: ["srchTypeCd"],
                            searchType: ["srchTypeCd"],
                            searchTypeCode: ["srchTypeCd"],
                            personalization: ["personalization"],
                            engagementType: ["engmtTp"],
                            link_engmtTp: ["engmtTp"],
                            seriesCode: ["seriesCd"],
                            property: ["seriesCd"],
                            siteCode: ["siteCd"],
                            site: ["siteCd"],
                            ugcType: ["ugcTp"],
                            categoryCode: ["categoryCd"],
                            category: ["categoryCd"],
                            fullPageName: ["fullPgNm"],
                            leadType: ["leadTp"],
                            abTest: ["abTest"],
                            genreCode: ["gnrCd"],
                            genre: ["gnrCd"],
                            dealType: ["dealTp"],
                            dealCategory: ["dealCtgry"],
                            firstCampaign: ["firstCampaign"],
                            searchEvent: ["searchEvent"],
                            searchAutocomplete: ["searchEvent"],
                            searchAutoComplete: ["searchEvent"],
                            searchPhraseInput: ["truSearchKwd"],
                            trueSearchPhrase: ["truSearchKwd"],
                            sem_cmp: ["semTrckCd"],
                            flashVersion: ["fsv"],
                            searchQuery: ["searchQuery"],
                            "unused-TWCvar": ["searchQuery"],
                            arPageName: ["arPgNm"],
                            mkwid: ["mkwTrckCd"],
                            regAge: ["regAge"],
                            regMilestone: ["regMlstn"],
                            regFlowType: ["regFlowTp"],
                            socialPlatforms: ["socialPlatforms"],
                            socialAuthors: ["socialAuthors"],
                            templateType: ["templateTp"],
                            engagementMeta: ["engmtMt"],
                            urlDomain: ["urlDom"],
                            urlFullDomain: ["urlFDom"],
                            urlFullDomain1: ["urlFDom1"],
                            pageName: ["pgNm"],
                            "unused-shortPageName": ["pgNm"],
                            url: ["url"],
                            adPageName: ["adPgNm"],
                            referrer: ["refUrl"],
                            PLAYLISTID: ["PLAYLISTID"],
                            contentTag: ["contentTag"],
                            dolWAVersion: ["dolWAVer"],
                            swid: ["swid"],
                            program: ["program"],
                            adblockStatus: ["adblck"],
                            breadcrumbs: ["brdcrums"],
                            siteSection: ["brdcrums"],
                            products: ["prods"],
                            purchaseId: ["purchId"],
                            contentType: ["contentTp"],
                            searchResultsCount: ["numSearchRslts"],
                            numSearchResults: ["numSearchRslts"],
                            timePartingCodes: ["timePartingCodes"],
                            prevPageName: ["prevPgNm"],
                            buCode: ["buCd"],
                            unit: ["buCd"],
                            engagementId: ["engagementId"],
                            membershipTypeCode: ["mmbrTpCd"],
                            membershipType: ["mmbrTpCd"],
                            familyPartner: ["fmlPrtnr"],
                            familyTentPole: ["fmlTentPole"],
                            registrationStatus: ["regStatus"],
                            searchRefinement: ["srchRfn"],
                            optinType: ["optinLst"],
                            author: ["author"],
                            postDate: ["pstDt"],
                            adCampaign: ["adCmp"],
                            contentId: ["contentId"],
                            pageViewId: ["pgVwId"],
                            adKeywords: ["adKwd"],
                            galleryPageName: ["glPgNm"],
                            sponsor: ["sponsor"],
                            retailer: ["rtlr"],
                            characterCode: ["charCd"],
                            propertyCode: ["propCd"],
                            ipCode: ["propCd"],
                            adSizeList: ["adSzLst"],
                            trackType: ["trckTp"],
                            account: ["accnt"],
                            biReserved: ["biReserved"],
                            "unused-time": ["biReserved"],
                            visitorId: ["visitorId"],
                            sessionId: ["sessionId"],
                            pageTypeCode: ["pgTpCd"],
                            pageType: ["pgTpCd"],
                            server: ["server"],
                            searchPhraseEvent: ["searchPhraseEvent"],
                            registration: ["registration"],
                            internalPromotionEvent: ["internalPromotionEvent"],
                            regAttempt: ["regAttempt"],
                            searchEventAttempt: ["searchEventAttempt"],
                            searchAttempt: ["searchEventAttempt"],
                            login: ["login"],
                            trackingCodeEvent: ["trackingCodeEvent"],
                            cmpClickThrough: ["cmpClickThrough"],
                            "unused-pastEvent": ["cmpClickThrough"],
                            instantSearchResultClick: ["instantSearchResultClick"],
                            instantSearch: ["instantSearch"],
                            searchEventAutocomplete: ["searchEventAutocomplete"],
                            error: ["error"],
                            app: ["app"],
                            AUTOTRANSITION: ["AUTOTRANSITION"],
                            buId: ["buId"],
                            cf: ["cf"],
                            characterId: ["charId"],
                            cod: ["cod"],
                            coreId: ["coreId"],
                            COREVIDEOID: ["COREVIDEOID"],
                            eventData: ["evntData"],
                            jf: ["jf"],
                            lHitSeq: ["lHitSeq"],
                            localSessionId: ["lSessId"],
                            localVar1: ["localVar1"],
                            localVar2: ["localVar2"],
                            localVisitorId: ["lVisId"],
                            pageId: ["pgId"],
                            plgId: ["plgId"],
                            propertyId: ["propId"],
                            region: ["region"],
                            res: ["res"],
                            seriesId: ["seriesId"],
                            sessionFirstPage: ["sFP"],
                            sessionFirstRefUrl: ["sFRU"],
                            sessionFirstUrl: ["sFU"],
                            sessionHitSeq: ["sHS"],
                            uuid: ["uuid"],
                            vendorLst: ["vendorLst"],
                            version: ["version"],
                            visitorFirstPage: ["vFP"],
                            visitorFirstRefUrl: ["vFRU"],
                            visitorFirstUrl: ["vFU"],
                            visitorSesSeq: ["vSS"],
                            country: ["country"],
                            intFullPageName: ["intFullPageName"],
                            bh: ["bh"],
                            bw: ["bw"],
                            checkoutCart: ["checkoutCart"],
                            cmsId: ["cmsId"],
                            customProductView: ["customProductView"],
                            intCategoryCode: ["intCategoryCode"],
                            jsv: ["jsv"],
                            lan: ["lan"],
                            newPageName: ["newPageName"],
                            omniId: ["omniId"],
                            os: ["os"],
                            pgTtl: ["pgTtl"],
                            siteSectionLevel1: ["siteSectionLevel1"],
                            siteSectionLevel2: ["siteSectionLevel2"],
                            siteSectionLevel3: ["siteSectionLevel3"],
                            siteSectionLevel4: ["siteSectionLevel4"],
                            siteSectionLevelN: ["siteSectionLevelN"],
                            siteSectionPage: ["siteSectionPage"],
                            t: ["t"],
                            manual_promo: ["manual_promo"],
                            auto_promo: ["auto_promo"],
                            product_finding_methods: ["product_finding_methods"],
                            merchandising_category: ["merchandising_category"],
                            merchandising_category1: ["merchandising_category1"],
                            merchandising_category2: ["merchandising_category2"],
                            merchandising_category3: ["merchandising_category3"],
                            merchandising_category4: ["merchandising_category4"],
                            merchandising_category5: ["merchandising_category5"],
                            merchandising_category6: ["merchandising_category6"],
                            entered_promo: ["entered_promo"],
                            amoId: ["amoId"],
                            entered_promo_error: ["entered_promo_error"],
                            dsr_number: ["dsr_number"],
                            dsr_store_number: ["dsr_store_number"],
                            payment_ship_type: ["payment_ship_type"],
                            bazaarvoice_review: ["bazaarvoice_review"],
                            reflektion: ["reflektion"],
                            reflektion_search: ["reflektion_search"],
                            reflektion_recommendations: ["reflektion_recommendations"],
                            optimizely0: ["optimizely0"],
                            optimizely1: ["optimizely1"],
                            optimizely2: ["optimizely2"],
                            optimizely3: ["optimizely3"],
                            optimizely4: ["optimizely4"],
                            optimizely5: ["optimizely5"],
                            api_environment: ["api_environment"],
                            api_endpoint_url: ["api_endpoint_url"],
                            elapsed_time: ["elapsed_time"],
                            platform: ["platform"],
                            searchRefinementAttr: ["searchRefinementAttr"],
                            productAvailability: ["productAvailability"],
                            characterSearch: ["characterSearch"],
                            contentType1: ["contentType1"],
                            currencyType: ["currencyType"],
                            priceDisplayed: ["priceDisplayed"],
                            unid: ["unid"],
                            unidReason: ["unidReason"],
                            recommendation_source: ["recommendation_source"],
                            recommendation_token: ["recommendation_token"],
                            EFID: ["EFID"],
                            errorType: ["errorType"],
                            error_type: ["errorType"],
                            errorDetails: ["errorDetails"],
                            error_details: ["errorDetails"],
                            core_content_id: ["core_content_id"],
                            track_type_event: ["track_type_event"],
                            gift: ["gift"]
                        },
                        events: {
                            personalization: ["e5"],
                            engagementType: ["e6"],
                            link_engmtTp: ["e6"],
                            ugcType: ["e36"],
                            leadType: ["e15"],
                            mkwid: ["e43"],
                            regMilestone: ["e26"],
                            searchPhraseEvent: ["e2"],
                            registration: ["e4"],
                            internalPromotionEvent: ["e7"],
                            regAttempt: ["e25"],
                            searchEventAttempt: ["e27"],
                            searchAttempt: ["e27"],
                            login: ["e39"],
                            trackingCodeEvent: ["e51"],
                            cmpClickThrough: ["e52"],
                            "unused-pastEvent": ["e52"],
                            instantSearchResultClick: ["e95"],
                            instantSearch: ["e96"],
                            searchEventAutocomplete: ["e99"],
                            error: ["e100"]
                        }
                    },
                    omni: {
                        mappings: {
                            trackingCode: ["campaign"],
                            cmp: ["campaign"],
                            timeParting: ["eVar1"],
                            internalPromotion: ["eVar3"],
                            promoClicks: ["eVar3"],
                            searchPhrase: ["prop7", "eVar4"],
                            internalSearchPhrase: ["prop7", "eVar4"],
                            searchFlow: ["prop18", "eVar5"],
                            searchType: ["prop18", "eVar5"],
                            searchTypeCode: ["prop18", "eVar5"],
                            personalization: ["eVar6"],
                            engagementType: ["eVar8"],
                            link_engmtTp: ["eVar8"],
                            seriesCode: ["prop11", "eVar9"],
                            property: ["prop11", "eVar9"],
                            siteCode: ["prop1", "eVar10"],
                            site: ["prop1", "eVar10"],
                            ugcType: ["prop54", "eVar12"],
                            categoryCode: ["prop14"],
                            category: ["prop14"],
                            fullPageName: ["pageName"],
                            previousPageSearch: ["eVar20"],
                            leadType: ["eVar23"],
                            abTest: ["prop19", "eVar24"],
                            genreCode: ["prop25", "eVar25"],
                            genre: ["prop25", "eVar25"],
                            dealType: ["eVar26"],
                            dealCategory: ["eVar27"],
                            firstCampaign: ["eVar28"],
                            searchEvent: ["prop50", "eVar30"],
                            searchAutocomplete: ["prop50", "eVar30"],
                            searchAutoComplete: ["prop50", "eVar30"],
                            searchPhraseInput: ["eVar31"],
                            trueSearchPhrase: ["eVar31"],
                            sem_cmp: ["eVar36"],
                            flashVersion: ["prop37"],
                            arPageName: ["prop47", "eVar40"],
                            mkwid: ["eVar42"],
                            regAge: ["eVar43"],
                            regMilestone: ["eVar44"],
                            regFlowType: ["eVar45"],
                            "pageName-internalPromotion": ["eVar50"],
                            "pageName-trackingCode": ["eVar51"],
                            socialPlatforms: ["eVar53"],
                            socialAuthors: ["eVar54"],
                            templateType: ["prop65", "eVar55"],
                            engagementMeta: ["eVar58"],
                            urlDomain: ["prop61", "eVar61"],
                            urlFullDomain: ["prop62", "eVar62"],
                            urlFullDomain1: ["prop63", "eVar63"],
                            pageName: ["prop64", "eVar64"],
                            "unused-shortPageName": ["prop64", "eVar64"],
                            url: ["prop28", "eVar65"],
                            adPageName: ["prop66", "eVar66"],
                            referrer: ["prop68", "eVar68"],
                            contentTag: ["prop44"],
                            dolWAVersion: ["prop72"],
                            swid: ["prop2", "eVar73"],
                            program: ["prop48", "eVar74"],
                            adblockStatus: ["eVar76"],
                            breadcrumbs: ["hier1"],
                            siteSection: ["hier1"],
                            products: ["products"],
                            purchaseId: ["purchaseID"],
                            contentType: ["prop4"],
                            siteLevel2: ["prop5"],
                            siteLevel3: ["prop6"],
                            searchResultsCount: ["prop8"],
                            numSearchResults: ["prop8"],
                            timePartingCodes: ["prop10"],
                            prevPageName: ["prop12"],
                            buCode: ["prop15"],
                            unit: ["prop15"],
                            familyPartner: ["prop24"],
                            familyTentPole: ["prop26"],
                            registrationStatus: ["prop29"],
                            searchRefinement: ["prop33"],
                            brandSegment: ["prop34"],
                            hcsCV: ["prop34"],
                            optinType: ["prop35"],
                            universalPathing: ["prop39"],
                            author: ["prop41"],
                            postDate: ["prop42"],
                            adCampaign: ["prop43"],
                            contentId: ["prop45"],
                            pageViewId: ["prop49"],
                            adKeywords: ["prop53"],
                            galleryPageName: ["prop55"],
                            sponsor: ["prop56"],
                            retailer: ["prop57"],
                            characterCode: ["prop58"],
                            propertyCode: ["prop59"],
                            ipCode: ["prop59"],
                            adSizeList: ["prop67"],
                            trackType: ["prop69"],
                            account: ["prop70"],
                            biReserved: ["prop71"],
                            "unused-time": ["prop71"],
                            visitorId: ["prop74"],
                            sessionId: ["prop75"],
                            pageTypeCode: ["pageType"],
                            pageType: ["pageType"],
                            server: ["server"],
                            unid: ["eVar100"],
                            unidReason: ["eVar99"]
                        },
                        EMEAmappings: {
                            trackingCode: ["campaign"],
                            cmp: ["campaign"],
                            timeParting: ["eVar1"],
                            internalPromotion: ["eVar3"],
                            promoClicks: ["eVar3"],
                            searchPhrase: ["prop7", "eVar4"],
                            internalSearchPhrase: ["prop7", "eVar4"],
                            searchFlow: ["prop18", "eVar5"],
                            searchType: ["prop18", "eVar5"],
                            searchTypeCode: ["prop18", "eVar5"],
                            seriesCode: ["prop11", "eVar9"],
                            property: ["prop11", "eVar9"],
                            siteCode: ["prop1", "eVar10"],
                            site: ["prop1", "eVar10"],
                            ugcType: ["eVar12"],
                            abTest: ["prop19", "eVar24"],
                            firstCampaign: ["eVar28"],
                            url: ["prop46"],
                            contentTag: ["list2", "eVar65"],
                            swid: ["prop2"],
                            adblockStatus: ["prop59", "eVar59"],
                            contentType: ["prop4", "eVar17"],
                            siteLevel2: ["prop5"],
                            siteLevel3: ["prop6"],
                            searchResultsCount: ["prop8"],
                            numSearchResults: ["prop8"],
                            timePartingCodes: ["prop10"],
                            prevPageName: ["prop12"],
                            registrationStatus: ["prop29"],
                            searchRefinement: ["prop33"],
                            sponsor: ["eVar69"],
                            region: ["prop30"],
                            country: ["prop31"],
                            intFullPageName: ["pageName", "eVar16"],
                            cmsId: ["prop51"],
                            intCategoryCode: ["prop14", "eVar15"],
                            newPageName: ["eVar18"],
                            siteSectionLevel1: ["prop41"],
                            siteSectionLevel2: ["prop42"],
                            siteSectionLevel3: ["prop43", "hier1"],
                            siteSectionLevel4: ["prop44"],
                            siteSectionLevelN: ["prop45"],
                            siteSectionPage: ["eVar18"]
                        },
                        shopMappings: {
                            trackingCode: ["campaign"],
                            cmp: ["campaign"],
                            internalPromotion: ["eVar11"],
                            promoClicks: ["eVar11"],
                            searchPhrase: ["prop6", "eVar30"],
                            internalSearchPhrase: ["prop6", "eVar30"],
                            searchFlow: ["prop4"],
                            searchType: ["prop4"],
                            searchTypeCode: ["prop4"],
                            personalization: ["eVar12"],
                            siteCode: ["prop1", "eVar8"],
                            site: ["prop1", "eVar8"],
                            fullPageName: ["pageName"],
                            url: ["prop19"],
                            swid: ["prop2"],
                            breadcrumbs: ["channel"],
                            siteSection: ["channel"],
                            products: ["products"],
                            purchaseId: ["purchaseID", "eVar7"],
                            contentType: ["prop14"],
                            searchResultsCount: ["prop7"],
                            numSearchResults: ["prop7"],
                            prevPageName: ["prop15", "eVar9"],
                            registrationStatus: ["prop3"],
                            visitorId: ["prop21"],
                            sessionId: ["prop22"],
                            server: ["server"],
                            state: ["state"],
                            zip: ["zip"],
                            amoId: ["eVar13"],
                            platform: ["prop18", "eVar18"],
                            productAvailability: ["eVar27"],
                            errorType: ["prop9"],
                            error_type: ["prop9"],
                            errorDetails: ["prop10"],
                            error_details: ["prop10"],
                            attPageType: ["eVar19"],
                            attPagePath: ["eVar20"],
                            attSearchParam: ["eVar21"],
                            attAlgorithm: ["eVar22"],
                            attPosition: ["eVar23"],
                            RRID: ["eVar14"],
                            adobeMarketingId: ["eVar24"],
                            priceBands: ["eVar4"],
                            productBadges: ["eVar5"],
                            customerGroup: ["eVar6"],
                            couponCodes: ["eVar10"],
                            paymentData: ["eVar15"],
                            shippingMethodID: ["eVar16"],
                            productSku: ["eVar26"],
                            productPosition: ["eVar28"],
                            basketID: ["eVar29"],
                            languageLocale: ["prop11"],
                            refinementName: ["prop12"],
                            refinementType: ["prop13"],
                            contentSlotImpression: ["list1"],
                            giftFlag: ["eVar25"],
                            chatInteractions: ["prop16"],
                            refinementNameClick: ["prop20"],
                            refinementTypeClick: ["prop21"],
                            searchResults: ["prop5"],
                            searchPhraseOriginal: ["prop8"],
                            videoImpression: ["eVar31"],
                            subscriptionName: ["eVar82"]
                        },
                        EMEAevents: {
                            searchPhrase: ["event2"],
                            internalSearchPhrase: ["event2"],
                            ugcType: ["event36"],
                            registration: ["event4"],
                            internalPromotionEvent: ["event7"],
                            login: ["event39"],
                            trackingCodeEvent: ["event51"],
                            checkoutCart: ["scCheckout"],
                            customProductView: ["event22"]
                        },
                        events: {
                            personalization: ["event5"],
                            engagementType: ["event6"],
                            link_engmtTp: ["event6"],
                            ugcType: ["event36"],
                            leadType: ["event15"],
                            mkwid: ["event43"],
                            regMilestone: ["event26"],
                            searchPhraseEvent: ["event2"],
                            registration: ["event4"],
                            internalPromotionEvent: ["event7"],
                            regAttempt: ["event25"],
                            searchEventAttempt: ["event27"],
                            searchAttempt: ["event27"],
                            login: ["event39"],
                            trackingCodeEvent: ["event51"],
                            cmpClickThrough: ["event52"],
                            "unused-pastEvent": ["event52"],
                            instantSearchResultClick: ["event95"],
                            instantSearch: ["event96"],
                            searchEventAutocomplete: ["event99"],
                            error: ["event100"]
                        },
                        shopEvents: {
                            fullPageName: ["event3"]
                        }
                    }
                },
                tL: {
                    cto: {
                        mappings: {
                            trackingCode: ["extTrckCd"],
                            cmp: ["extTrckCd"],
                            timeParting: ["tParting"],
                            searchPhrase: ["intSearchKwd"],
                            internalSearchPhrase: ["intSearchKwd"],
                            searchFlow: ["srchTypeCd"],
                            searchType: ["srchTypeCd"],
                            searchTypeCode: ["srchTypeCd"],
                            personalization: ["personalization"],
                            engagementType: ["engmtTp"],
                            link_engmtTp: ["engmtTp"],
                            seriesCode: ["seriesCd"],
                            property: ["seriesCd"],
                            siteCode: ["siteCd"],
                            site: ["siteCd"],
                            ugcType: ["ugcTp"],
                            categoryCode: ["categoryCd"],
                            category: ["categoryCd"],
                            fullPageName: ["fullPgNm"],
                            leadType: ["leadTp"],
                            abTest: ["abTest"],
                            genreCode: ["gnrCd"],
                            genre: ["gnrCd"],
                            dealType: ["dealTp"],
                            dealCategory: ["dealCtgry"],
                            firstCampaign: ["firstCampaign"],
                            searchEvent: ["searchEvent"],
                            searchAutocomplete: ["searchEvent"],
                            searchAutoComplete: ["searchEvent"],
                            searchPhraseInput: ["truSearchKwd"],
                            trueSearchPhrase: ["truSearchKwd"],
                            sem_cmp: ["semTrckCd"],
                            searchQuery: ["searchQuery"],
                            "unused-TWCvar": ["searchQuery"],
                            arPageName: ["arPgNm"],
                            mkwid: ["mkwTrckCd"],
                            regAge: ["regAge"],
                            regMilestone: ["regMlstn"],
                            regFlowType: ["regFlowTp"],
                            linkModule: ["linkMod"],
                            socialPlatforms: ["socialPlatforms"],
                            socialAuthors: ["socialAuthors"],
                            templateType: ["templateTp"],
                            urlDomain: ["urlDom"],
                            urlFullDomain: ["urlFDom"],
                            urlFullDomain1: ["urlFDom1"],
                            url: ["url"],
                            adPageName: ["adPgNm"],
                            referrer: ["refUrl"],
                            PLAYLISTID: ["PLAYLISTID"],
                            linkUrl: ["linkUrl"],
                            contentTag: ["contentTag"],
                            dolWAVersion: ["dolWAVer"],
                            swid: ["swid"],
                            program: ["program"],
                            adblockStatus: ["adblck"],
                            breadcrumbs: ["brdcrums"],
                            siteSection: ["brdcrums"],
                            products: ["prods"],
                            purchaseId: ["purchId"],
                            contentType: ["contentTp"],
                            searchResultsCount: ["numSearchRslts"],
                            numSearchResults: ["numSearchRslts"],
                            linkName: ["linkNm"],
                            linkId: ["linkNm"],
                            timePartingCodes: ["timePartingCodes"],
                            prevPageName: ["prevPgNm"],
                            linkPosition: ["linkPos"],
                            buCode: ["buCd"],
                            unit: ["buCd"],
                            engagementId: ["engagementId"],
                            membershipTypeCode: ["mmbrTpCd"],
                            membershipType: ["mmbrTpCd"],
                            familyPartner: ["fmlPrtnr"],
                            familyTentPole: ["fmlTentPole"],
                            registrationStatus: ["regStatus"],
                            searchRefinement: ["srchRfn"],
                            optinType: ["optinLst"],
                            author: ["author"],
                            postDate: ["pstDt"],
                            adCampaign: ["adCmp"],
                            contentId: ["contentId"],
                            pageViewId: ["pgVwId"],
                            adKeywords: ["adKwd"],
                            galleryPageName: ["glPgNm"],
                            sponsor: ["sponsor"],
                            characterCode: ["charCd"],
                            propertyCode: ["propCd"],
                            ipCode: ["propCd"],
                            adSizeList: ["adSzLst"],
                            trackType: ["trckTp"],
                            account: ["accnt"],
                            biReserved: ["biReserved"],
                            "unused-time": ["biReserved"],
                            retailerClick: ["rtlc"],
                            visitorId: ["visitorId"],
                            sessionId: ["sessionId"],
                            pageTypeCode: ["pgTpCd"],
                            pageType: ["pgTpCd"],
                            server: ["server"],
                            searchPhraseEvent: ["searchPhraseEvent"],
                            registration: ["registration"],
                            internalPromotionEvent: ["internalPromotionEvent"],
                            linkClicks: ["linkClicks"],
                            print: ["print"],
                            printable: ["print"],
                            buy: ["buy"],
                            buy_: ["buy"],
                            "purchase/": ["buy"],
                            social: ["social"],
                            social_: ["social"],
                            signup: ["signup"],
                            signup_: ["signup"],
                            download: ["download"],
                            download_: ["download"],
                            regAttempt: ["regAttempt"],
                            searchEventAttempt: ["searchEventAttempt"],
                            searchAttempt: ["searchEventAttempt"],
                            login: ["login"],
                            searchEventResultClicks: ["srchResClicks"],
                            searchResultClicks: ["srchResClicks"],
                            trackingCodeEvent: ["trackingCodeEvent"],
                            cmpClickThrough: ["cmpClickThrough"],
                            "unused-pastEvent": ["cmpClickThrough"],
                            instantSearchResultClick: ["instantSearchResultClick"],
                            instantSearch: ["instantSearch"],
                            searchEventClose: ["searchEventClose"],
                            searchEventAutocomplete: ["searchEventAutocomplete"],
                            error: ["error"],
                            app: ["app"],
                            AUTOTRANSITION: ["AUTOTRANSITION"],
                            buId: ["buId"],
                            cf: ["cf"],
                            characterId: ["charId"],
                            cod: ["cod"],
                            coreId: ["coreId"],
                            COREVIDEOID: ["COREVIDEOID"],
                            eventData: ["evntData"],
                            jf: ["jf"],
                            lHitSeq: ["lHitSeq"],
                            localSessionId: ["lSessId"],
                            localVar1: ["localVar1"],
                            localVar2: ["localVar2"],
                            localVisitorId: ["lVisId"],
                            pageId: ["pgId"],
                            plgId: ["plgId"],
                            propertyId: ["propId"],
                            region: ["region"],
                            res: ["res"],
                            seriesId: ["seriesId"],
                            sessionFirstPage: ["sFP"],
                            sessionFirstRefUrl: ["sFRU"],
                            sessionFirstUrl: ["sFU"],
                            sessionHitSeq: ["sHS"],
                            uuid: ["uuid"],
                            vendorLst: ["vendorLst"],
                            version: ["version"],
                            visitorFirstPage: ["vFP"],
                            visitorFirstRefUrl: ["vFRU"],
                            visitorFirstUrl: ["vFU"],
                            visitorSesSeq: ["vSS"],
                            country: ["country"],
                            intFullPageName: ["intFullPageName"],
                            autoLinkTracking: ["autoLinkTracking"],
                            clickX: ["cX"],
                            clickY: ["cY"],
                            cmsId: ["cmsId"],
                            intPageNameLinkId: ["intPageNameLinkId"],
                            linkType: ["linkTp"],
                            timeToClick: ["timeToClick"],
                            manual_promo: ["manual_promo"],
                            auto_promo: ["auto_promo"],
                            product_finding_methods: ["product_finding_methods"],
                            merchandising_category: ["merchandising_category"],
                            merchandising_category1: ["merchandising_category1"],
                            merchandising_category2: ["merchandising_category2"],
                            merchandising_category3: ["merchandising_category3"],
                            merchandising_category4: ["merchandising_category4"],
                            merchandising_category5: ["merchandising_category5"],
                            merchandising_category6: ["merchandising_category6"],
                            entered_promo: ["entered_promo"],
                            amoId: ["amoId"],
                            entered_promo_error: ["entered_promo_error"],
                            dsr_number: ["dsr_number"],
                            dsr_store_number: ["dsr_store_number"],
                            payment_ship_type: ["payment_ship_type"],
                            bazaarvoice_review: ["bazaarvoice_review"],
                            reflektion: ["reflektion"],
                            reflektion_search: ["reflektion_search"],
                            reflektion_recommendations: ["reflektion_recommendations"],
                            optimizely0: ["optimizely0"],
                            optimizely1: ["optimizely1"],
                            optimizely2: ["optimizely2"],
                            optimizely3: ["optimizely3"],
                            optimizely4: ["optimizely4"],
                            optimizely5: ["optimizely5"],
                            api_environment: ["api_environment"],
                            api_endpoint_url: ["api_endpoint_url"],
                            elapsed_time: ["elapsed_time"],
                            platform: ["platform"],
                            searchRefinementAttr: ["searchRefinementAttr"],
                            productAvailability: ["productAvailability"],
                            characterSearch: ["characterSearch"],
                            contentType1: ["contentType1"],
                            unid: ["unid"],
                            unidReason: ["unidReason"],
                            recommendation_source: ["recommendation_source"],
                            recommendation_token: ["recommendation_token"],
                            EFID: ["EFID"],
                            link_module_title: ["link_module_title"],
                            link_location1: ["link_location1"],
                            link_location2: ["link_location2"],
                            link_category: ["link_category"],
                            link_campaign1: ["link_campaign1"],
                            link_campaign2: ["link_campaign2"],
                            link_item_name: ["link_item_name"],
                            link_campaign_date: ["link_campaign_date"],
                            errorType: ["errorType"],
                            error_type: ["errorType"],
                            errorDetails: ["errorDetails"],
                            error_details: ["errorDetails"],
                            link_module_id: ["link_module_id"],
                            link_module_header: ["link_module_header"],
                            link_module_type: ["link_module_type"],
                            link_module_position: ["link_module_position"],
                            link_type: ["link_type"],
                            core_content_id: ["core_content_id"],
                            track_type_event: ["track_type_event"],
                            gift: ["gift"]
                        },
                        events: {
                            personalization: ["e5"],
                            engagementType: ["e6"],
                            link_engmtTp: ["e6"],
                            ugcType: ["e36"],
                            leadType: ["e15"],
                            mkwid: ["e43"],
                            regMilestone: ["e26"],
                            searchPhraseEvent: ["e2"],
                            registration: ["e4"],
                            internalPromotionEvent: ["e7"],
                            linkClicks: ["e12"],
                            print: ["e14"],
                            printable: ["e14"],
                            buy: ["e16"],
                            buy_: ["e16"],
                            "purchase/": ["e16"],
                            social: ["e17"],
                            social_: ["e17"],
                            signup: ["e18"],
                            signup_: ["e18"],
                            download: ["e19"],
                            download_: ["e19"],
                            regAttempt: ["e25"],
                            searchEventAttempt: ["e27"],
                            searchAttempt: ["e27"],
                            login: ["e39"],
                            searchEventResultClicks: ["e41"],
                            searchResultClicks: ["e41"],
                            trackingCodeEvent: ["e51"],
                            cmpClickThrough: ["e52"],
                            "unused-pastEvent": ["e52"],
                            instantSearchResultClick: ["e95"],
                            instantSearch: ["e96"],
                            searchEventClose: ["e98"],
                            searchEventAutocomplete: ["e99"],
                            error: ["e100"]
                        }
                    },
                    omni: {
                        EMEAevents: {
                            searchPhrase: ["event2"],
                            internalSearchPhrase: ["event2"],
                            searchEventResultClicks: ["event41"],
                            searchResultClicks: ["event41"]
                        },
                        mappings: {
                            searchPhrase: ["prop7", "eVar4"],
                            internalSearchPhrase: ["prop7", "eVar4"],
                            searchFlow: ["prop18", "eVar5"],
                            searchType: ["prop18", "eVar5"],
                            searchTypeCode: ["prop18", "eVar5"],
                            personalization: ["eVar6"],
                            engagementType: ["eVar8"],
                            link_engmtTp: ["eVar8"],
                            fullPageName: ["pageName"],
                            leadType: ["eVar23"],
                            abTest: ["prop19", "eVar24"],
                            genreCode: ["prop25", "eVar25"],
                            genre: ["prop25", "eVar25"],
                            searchEvent: ["prop50", "eVar30"],
                            searchAutocomplete: ["prop50", "eVar30"],
                            searchAutoComplete: ["prop50", "eVar30"],
                            searchPhraseInput: ["eVar31"],
                            trueSearchPhrase: ["eVar31"],
                            arPageName: ["prop47", "eVar40"],
                            "pageName-linkPosition": ["eVar49"],
                            linkModule: ["eVar52"],
                            urlDomain: ["prop61", "eVar61"],
                            urlFullDomain: ["prop62", "eVar62"],
                            urlFullDomain1: ["prop63", "eVar63"],
                            url: ["prop28", "eVar65"],
                            referrer: ["prop68", "eVar68"],
                            linkUrl: ["eVar70"],
                            dolWAVersion: ["prop72"],
                            swid: ["prop2", "eVar73"],
                            program: ["prop48", "eVar74"],
                            adblockStatus: ["eVar76"],
                            products: ["products"],
                            purchaseId: ["purchaseID"],
                            searchResultsCount: ["prop8"],
                            numSearchResults: ["prop8"],
                            linkName: ["prop9"],
                            linkId: ["prop9"],
                            prevPageName: ["prop12"],
                            linkPosition: ["prop13"],
                            searchRefinement: ["prop33"],
                            brandSegment: ["prop34"],
                            hcsCV: ["prop34"],
                            optinType: ["prop35"],
                            universalPathing: ["prop39"],
                            pageViewId: ["prop49"],
                            trackType: ["prop69"],
                            account: ["prop70"],
                            biReserved: ["prop71"],
                            "unused-time": ["prop71"],
                            retailerClick: ["prop73"],
                            visitorId: ["prop74"],
                            sessionId: ["prop75"],
                            server: ["server"],
                            unid: ["eVar100"],
                            unidReason: ["eVar99"]
                        },
                        EMEAmappings: {
                            searchPhrase: ["prop7", "eVar4"],
                            internalSearchPhrase: ["prop7", "eVar4"],
                            searchFlow: ["prop18", "eVar5"],
                            searchType: ["prop18", "eVar5"],
                            searchTypeCode: ["prop18", "eVar5"],
                            abTest: ["prop19", "eVar24"],
                            url: ["prop46"],
                            swid: ["prop2"],
                            adblockStatus: ["prop59", "eVar59"],
                            searchResultsCount: ["prop8"],
                            numSearchResults: ["prop8"],
                            linkName: ["prop9"],
                            linkId: ["prop9"],
                            prevPageName: ["prop12"],
                            searchRefinement: ["prop33"],
                            country: ["prop31"],
                            intFullPageName: ["pageName", "eVar16"],
                            cmsId: ["prop51"],
                            intPageNameLinkId: ["eVar21"]
                        },
                        shopMappings: {
                            searchPhrase: ["prop6", "eVar30"],
                            internalSearchPhrase: ["prop6", "eVar30"],
                            searchFlow: ["prop4"],
                            searchType: ["prop4"],
                            searchTypeCode: ["prop4"],
                            personalization: ["eVar12"],
                            fullPageName: ["pageName"],
                            url: ["prop19"],
                            swid: ["prop2"],
                            products: ["products"],
                            purchaseId: ["purchaseID", "eVar7"],
                            searchResultsCount: ["prop7"],
                            numSearchResults: ["prop7"],
                            linkName: ["prop17"],
                            linkId: ["prop17"],
                            prevPageName: ["prop15", "eVar9"],
                            visitorId: ["prop21"],
                            sessionId: ["prop22"],
                            server: ["server"],
                            state: ["state"],
                            zip: ["zip"],
                            amoId: ["eVar13"],
                            platform: ["prop18", "eVar18"],
                            productAvailability: ["eVar27"],
                            errorType: ["prop9"],
                            error_type: ["prop9"],
                            errorDetails: ["prop10"],
                            error_details: ["prop10"],
                            attPageType: ["eVar19"],
                            attPagePath: ["eVar20"],
                            attSearchParam: ["eVar21"],
                            attAlgorithm: ["eVar22"],
                            attPosition: ["eVar23"],
                            RRID: ["eVar14"],
                            adobeMarketingId: ["eVar24"],
                            priceBands: ["eVar4"],
                            productBadges: ["eVar5"],
                            customerGroup: ["eVar6"],
                            couponCodes: ["eVar10"],
                            paymentData: ["eVar15"],
                            shippingMethodID: ["eVar16"],
                            productSku: ["eVar26"],
                            productPosition: ["eVar28"],
                            basketID: ["eVar29"],
                            languageLocale: ["prop11"],
                            refinementName: ["prop12"],
                            refinementType: ["prop13"],
                            contentSlotImpression: ["list1"],
                            giftFlag: ["eVar25"],
                            chatInteractions: ["prop16"],
                            refinementNameClick: ["prop20"],
                            refinementTypeClick: ["prop21"],
                            searchResults: ["prop5"],
                            searchPhraseOriginal: ["prop8"],
                            numberMonthSelected: ["eVar80"],
                            nameOfMonths: ["eVar81"],
                            subscriptionName: ["eVar82"]
                        },
                        events: {
                            personalization: ["event5"],
                            engagementType: ["event6"],
                            link_engmtTp: ["event6"],
                            leadType: ["event15"],
                            searchPhraseEvent: ["event2"],
                            linkClicks: ["event12"],
                            print: ["event14"],
                            printable: ["event14"],
                            buy: ["event16"],
                            buy_: ["event16"],
                            "purchase/": ["event16"],
                            social: ["event17"],
                            social_: ["event17"],
                            signup: ["event18"],
                            signup_: ["event18"],
                            download: ["event19"],
                            download_: ["event19"],
                            searchEventAttempt: ["event27"],
                            searchAttempt: ["event27"],
                            searchEventResultClicks: ["event41"],
                            searchResultClicks: ["event41"],
                            instantSearchResultClick: ["event95"],
                            instantSearch: ["event96"],
                            searchEventClose: ["event98"],
                            searchEventAutocomplete: ["event99"],
                            error: ["event100"]
                        }
                    }
                },
                tE: {
                    cto: {
                        mappings: {
                            trackingCode: ["extTrckCd"],
                            cmp: ["extTrckCd"],
                            timeParting: ["tParting"],
                            searchPhrase: ["intSearchKwd"],
                            internalSearchPhrase: ["intSearchKwd"],
                            searchFlow: ["srchTypeCd"],
                            searchType: ["srchTypeCd"],
                            searchTypeCode: ["srchTypeCd"],
                            personalization: ["personalization"],
                            engagementType: ["engmtTp"],
                            link_engmtTp: ["engmtTp"],
                            seriesCode: ["seriesCd"],
                            property: ["seriesCd"],
                            siteCode: ["siteCd"],
                            site: ["siteCd"],
                            ugcType: ["ugcTp"],
                            categoryCode: ["categoryCd"],
                            category: ["categoryCd"],
                            fullPageName: ["fullPgNm"],
                            userReview: ["usrRvw"],
                            "unused-VID|PageName": ["usrRvw"],
                            leadType: ["leadTp"],
                            abTest: ["abTest"],
                            genreCode: ["gnrCd"],
                            genre: ["gnrCd"],
                            dealType: ["dealTp"],
                            dealCategory: ["dealCtgry"],
                            firstCampaign: ["firstCampaign"],
                            searchEvent: ["searchEvent"],
                            searchAutocomplete: ["searchEvent"],
                            searchAutoComplete: ["searchEvent"],
                            searchPhraseInput: ["truSearchKwd"],
                            trueSearchPhrase: ["truSearchKwd"],
                            sem_cmp: ["semTrckCd"],
                            timeOnPage: ["timeOnPage"],
                            searchQuery: ["searchQuery"],
                            "unused-TWCvar": ["searchQuery"],
                            arPageName: ["arPgNm"],
                            mkwid: ["mkwTrckCd"],
                            regAge: ["regAge"],
                            regMilestone: ["regMlstn"],
                            regFlowType: ["regFlowTp"],
                            uniqueOptin: ["unqOptIn"],
                            socialPlatforms: ["socialPlatforms"],
                            socialAuthors: ["socialAuthors"],
                            templateType: ["templateTp"],
                            engagementMeta: ["engmtMt"],
                            urlDomain: ["urlDom"],
                            urlFullDomain: ["urlFDom"],
                            urlFullDomain1: ["urlFDom1"],
                            url: ["url"],
                            adPageName: ["adPgNm"],
                            referrer: ["refUrl"],
                            PLAYLISTID: ["PLAYLISTID"],
                            contentTag: ["contentTag"],
                            dolWAVersion: ["dolWAVer"],
                            swid: ["swid"],
                            program: ["program"],
                            adblockStatus: ["adblck"],
                            breadcrumbs: ["brdcrums"],
                            siteSection: ["brdcrums"],
                            products: ["prods"],
                            purchaseId: ["purchId"],
                            contentType: ["contentTp"],
                            searchResultsCount: ["numSearchRslts"],
                            numSearchResults: ["numSearchRslts"],
                            timePartingCodes: ["timePartingCodes"],
                            prevPageName: ["prevPgNm"],
                            buCode: ["buCd"],
                            unit: ["buCd"],
                            engagementId: ["engagementId"],
                            membershipTypeCode: ["mmbrTpCd"],
                            membershipType: ["mmbrTpCd"],
                            familyPartner: ["fmlPrtnr"],
                            familyTentPole: ["fmlTentPole"],
                            registrationStatus: ["regStatus"],
                            searchRefinement: ["srchRfn"],
                            optinType: ["optinLst"],
                            author: ["author"],
                            postDate: ["pstDt"],
                            adCampaign: ["adCmp"],
                            contentId: ["contentId"],
                            pageViewId: ["pgVwId"],
                            adKeywords: ["adKwd"],
                            galleryPageName: ["glPgNm"],
                            sponsor: ["sponsor"],
                            characterCode: ["charCd"],
                            propertyCode: ["propCd"],
                            ipCode: ["propCd"],
                            adSizeList: ["adSzLst"],
                            trackType: ["trckTp"],
                            account: ["accnt"],
                            biReserved: ["biReserved"],
                            "unused-time": ["biReserved"],
                            visitorId: ["visitorId"],
                            sessionId: ["sessionId"],
                            pageTypeCode: ["pgTpCd"],
                            pageType: ["pgTpCd"],
                            server: ["server"],
                            searchPhraseEvent: ["searchPhraseEvent"],
                            registration: ["registration"],
                            internalPromotionEvent: ["internalPromotionEvent"],
                            userReviewEvent: ["userReviewEvent"],
                            print: ["print"],
                            printable: ["print"],
                            regAttempt: ["regAttempt"],
                            searchEventAttempt: ["searchEventAttempt"],
                            searchAttempt: ["searchEventAttempt"],
                            login: ["login"],
                            trackingCodeEvent: ["trackingCodeEvent"],
                            cmpClickThrough: ["cmpClickThrough"],
                            "unused-pastEvent": ["cmpClickThrough"],
                            titlerevenue: ["titlerevenue"],
                            titlerevenueCount: ["titlerevenueCount"],
                            instantSearchResultClick: ["instantSearchResultClick"],
                            instantSearch: ["instantSearch"],
                            searchEventClose: ["searchEventClose"],
                            searchEventAutocomplete: ["searchEventAutocomplete"],
                            error: ["error"],
                            purchase: ["purchase"],
                            familyTravelBudget: ["purchase"],
                            familyTravelLength: ["purchase"],
                            app: ["app"],
                            AUTOTRANSITION: ["AUTOTRANSITION"],
                            buId: ["buId"],
                            cf: ["cf"],
                            characterId: ["charId"],
                            cod: ["cod"],
                            coreId: ["coreId"],
                            COREVIDEOID: ["COREVIDEOID"],
                            eventData: ["evntData"],
                            jf: ["jf"],
                            lHitSeq: ["lHitSeq"],
                            localSessionId: ["lSessId"],
                            localVar1: ["localVar1"],
                            localVar2: ["localVar2"],
                            localVisitorId: ["lVisId"],
                            pageId: ["pgId"],
                            plgId: ["plgId"],
                            propertyId: ["propId"],
                            region: ["region"],
                            res: ["res"],
                            seriesId: ["seriesId"],
                            sessionFirstPage: ["sFP"],
                            sessionFirstRefUrl: ["sFRU"],
                            sessionFirstUrl: ["sFU"],
                            sessionHitSeq: ["sHS"],
                            uuid: ["uuid"],
                            vendorLst: ["vendorLst"],
                            version: ["version"],
                            visitorFirstPage: ["vFP"],
                            visitorFirstRefUrl: ["vFRU"],
                            visitorFirstUrl: ["vFU"],
                            visitorSesSeq: ["vSS"],
                            country: ["country"],
                            intFullPageName: ["intFullPageName"],
                            manual_promo: ["manual_promo"],
                            auto_promo: ["auto_promo"],
                            product_finding_methods: ["product_finding_methods"],
                            merchandising_category: ["merchandising_category"],
                            merchandising_category1: ["merchandising_category1"],
                            merchandising_category2: ["merchandising_category2"],
                            merchandising_category3: ["merchandising_category3"],
                            merchandising_category4: ["merchandising_category4"],
                            merchandising_category5: ["merchandising_category5"],
                            merchandising_category6: ["merchandising_category6"],
                            entered_promo: ["entered_promo"],
                            amoId: ["amoId"],
                            entered_promo_error: ["entered_promo_error"],
                            dsr_number: ["dsr_number"],
                            dsr_store_number: ["dsr_store_number"],
                            payment_ship_type: ["payment_ship_type"],
                            bazaarvoice_review: ["bazaarvoice_review"],
                            reflektion: ["reflektion"],
                            reflektion_search: ["reflektion_search"],
                            reflektion_recommendations: ["reflektion_recommendations"],
                            optimizely0: ["optimizely0"],
                            optimizely1: ["optimizely1"],
                            optimizely2: ["optimizely2"],
                            optimizely3: ["optimizely3"],
                            optimizely4: ["optimizely4"],
                            optimizely5: ["optimizely5"],
                            api_environment: ["api_environment"],
                            api_endpoint_url: ["api_endpoint_url"],
                            elapsed_time: ["elapsed_time"],
                            platform: ["platform"],
                            searchRefinementAttr: ["searchRefinementAttr"],
                            productAvailability: ["productAvailability"],
                            characterSearch: ["characterSearch"],
                            contentType1: ["contentType1"],
                            unid: ["unid"],
                            unidReason: ["unidReason"],
                            recommendation_source: ["recommendation_source"],
                            recommendation_token: ["recommendation_token"],
                            EFID: ["EFID"],
                            errorType: ["errorType"],
                            error_type: ["errorType"],
                            errorDetails: ["errorDetails"],
                            error_details: ["errorDetails"],
                            quiz_question_number: ["quiz_question_number"],
                            core_content_id: ["core_content_id"],
                            track_type_event: ["track_type_event"],
                            live_chat_impression: ["live_chat_impression"],
                            live_chat_yes: ["live_chat_yes"],
                            live_chat_no: ["live_chat_no"],
                            gift: ["gift"]
                        },
                        events: {
                            personalization: ["e5"],
                            engagementType: ["e6"],
                            link_engmtTp: ["e6"],
                            ugcType: ["e36"],
                            leadType: ["e15"],
                            mkwid: ["e43"],
                            regMilestone: ["e26"],
                            uniqueOptin: ["e8"],
                            searchPhraseEvent: ["e2"],
                            registration: ["e4"],
                            internalPromotionEvent: ["e7"],
                            userReviewEvent: ["e13"],
                            print: ["e14"],
                            printable: ["e14"],
                            regAttempt: ["e25"],
                            searchEventAttempt: ["e27"],
                            searchAttempt: ["e27"],
                            login: ["e39"],
                            trackingCodeEvent: ["e51"],
                            cmpClickThrough: ["e52"],
                            "unused-pastEvent": ["e52"],
                            titlerevenue: ["e77"],
                            titlerevenueCount: ["e78"],
                            instantSearchResultClick: ["e95"],
                            instantSearch: ["e96"],
                            searchEventClose: ["e98"],
                            searchEventAutocomplete: ["e99"],
                            error: ["e100"],
                            purchase: ["purchase"],
                            familyTravelBudget: ["purchase"],
                            familyTravelLength: ["purchase"]
                        }
                    },
                    omni: {
                        EMEAevents: {
                            searchPhrase: ["event2"],
                            internalSearchPhrase: ["event2"],
                            ugcType: ["event36"],
                            registration: ["event4"],
                            login: ["event39"],
                            purchase: ["purchase"],
                            familyTravelBudget: ["purchase"],
                            familyTravelLength: ["purchase"]
                        },
                        mappings: {
                            searchPhrase: ["prop7", "eVar4"],
                            internalSearchPhrase: ["prop7", "eVar4"],
                            searchFlow: ["prop18", "eVar5"],
                            searchType: ["prop18", "eVar5"],
                            searchTypeCode: ["prop18", "eVar5"],
                            personalization: ["eVar6"],
                            engagementType: ["eVar8"],
                            link_engmtTp: ["eVar8"],
                            ugcType: ["prop54", "eVar12"],
                            fullPageName: ["pageName"],
                            userReview: ["eVar18"],
                            "unused-VID|PageName": ["eVar18"],
                            leadType: ["eVar23"],
                            abTest: ["prop19", "eVar24"],
                            genreCode: ["prop25", "eVar25"],
                            genre: ["prop25", "eVar25"],
                            searchEvent: ["prop50", "eVar30"],
                            searchAutocomplete: ["prop50", "eVar30"],
                            searchAutoComplete: ["prop50", "eVar30"],
                            searchPhraseInput: ["eVar31"],
                            trueSearchPhrase: ["eVar31"],
                            timeOnPage: ["eVar38"],
                            arPageName: ["prop47", "eVar40"],
                            regAge: ["eVar43"],
                            regMilestone: ["eVar44"],
                            regFlowType: ["eVar45"],
                            uniqueOptin: ["eVar48"],
                            socialPlatforms: ["eVar53"],
                            socialAuthors: ["eVar54"],
                            engagementMeta: ["eVar58"],
                            urlDomain: ["prop61", "eVar61"],
                            urlFullDomain: ["prop62", "eVar62"],
                            urlFullDomain1: ["prop63", "eVar63"],
                            url: ["prop28", "eVar65"],
                            referrer: ["prop68", "eVar68"],
                            dolWAVersion: ["prop72"],
                            swid: ["prop2", "eVar73"],
                            program: ["prop48", "eVar74"],
                            adblockStatus: ["eVar76"],
                            products: ["products"],
                            purchaseId: ["purchaseID"],
                            searchResultsCount: ["prop8"],
                            numSearchResults: ["prop8"],
                            prevPageName: ["prop12"],
                            registrationStatus: ["prop29"],
                            searchRefinement: ["prop33"],
                            optinType: ["prop35"],
                            universalPathing: ["prop39"],
                            pageViewId: ["prop49"],
                            trackType: ["prop69"],
                            account: ["prop70"],
                            biReserved: ["prop71"],
                            "unused-time": ["prop71"],
                            visitorId: ["prop74"],
                            sessionId: ["prop75"],
                            server: ["server"],
                            unid: ["eVar100"],
                            unidReason: ["eVar99"]
                        },
                        EMEAmappings: {
                            searchPhrase: ["prop7", "eVar4"],
                            internalSearchPhrase: ["prop7", "eVar4"],
                            searchFlow: ["prop18", "eVar5"],
                            searchType: ["prop18", "eVar5"],
                            searchTypeCode: ["prop18", "eVar5"],
                            ugcType: ["eVar12"],
                            abTest: ["prop19", "eVar24"],
                            url: ["prop46"],
                            swid: ["prop2"],
                            adblockStatus: ["prop59", "eVar59"],
                            searchResultsCount: ["prop8"],
                            numSearchResults: ["prop8"],
                            prevPageName: ["prop12"],
                            registrationStatus: ["prop29"],
                            searchRefinement: ["prop33"],
                            country: ["prop31"],
                            intFullPageName: ["pageName", "eVar16"]
                        },
                        shopMappings: {
                            searchPhrase: ["prop6", "eVar30"],
                            internalSearchPhrase: ["prop6", "eVar30"],
                            searchFlow: ["prop4"],
                            searchType: ["prop4"],
                            searchTypeCode: ["prop4"],
                            personalization: ["eVar12"],
                            fullPageName: ["pageName"],
                            url: ["prop19"],
                            swid: ["prop2"],
                            products: ["products"],
                            purchaseId: ["purchaseID", "eVar7"],
                            searchResultsCount: ["prop7"],
                            numSearchResults: ["prop7"],
                            prevPageName: ["prop15", "eVar9"],
                            registrationStatus: ["prop3"],
                            visitorId: ["prop21"],
                            sessionId: ["prop22"],
                            server: ["server"],
                            state: ["state"],
                            zip: ["zip"],
                            amoId: ["eVar13"],
                            platform: ["prop18", "eVar18"],
                            productAvailability: ["eVar27"],
                            errorType: ["prop9"],
                            error_type: ["prop9"],
                            errorDetails: ["prop10"],
                            error_details: ["prop10"],
                            live_chat_impression: ["eVar17"],
                            attPageType: ["eVar19"],
                            attPagePath: ["eVar20"],
                            attSearchParam: ["eVar21"],
                            attAlgorithm: ["eVar22"],
                            attPosition: ["eVar23"],
                            RRID: ["eVar14"],
                            adobeMarketingId: ["eVar24"],
                            priceBands: ["eVar4"],
                            productBadges: ["eVar5"],
                            customerGroup: ["eVar6"],
                            couponCodes: ["eVar10"],
                            paymentData: ["eVar15"],
                            shippingMethodID: ["eVar16"],
                            productSku: ["eVar26"],
                            productPosition: ["eVar28"],
                            basketID: ["eVar29"],
                            languageLocale: ["prop11"],
                            refinementName: ["prop12"],
                            refinementType: ["prop13"],
                            contentSlotImpression: ["list1"],
                            giftFlag: ["eVar25"],
                            chatInteractions: ["prop16"],
                            refinementNameClick: ["prop20"],
                            refinementTypeClick: ["prop21"],
                            searchResults: ["prop5"],
                            searchPhraseOriginal: ["prop8"]
                        },
                        events: {
                            personalization: ["event5"],
                            engagementType: ["event6"],
                            link_engmtTp: ["event6"],
                            ugcType: ["event36"],
                            leadType: ["event15"],
                            regMilestone: ["event26"],
                            uniqueOptin: ["event8"],
                            searchPhraseEvent: ["event2"],
                            registration: ["event4"],
                            userReviewEvent: ["event13"],
                            print: ["event14"],
                            printable: ["event14"],
                            regAttempt: ["event25"],
                            searchEventAttempt: ["event27"],
                            searchAttempt: ["event27"],
                            login: ["event39"],
                            titlerevenue: ["event77"],
                            titlerevenueCount: ["event78"],
                            instantSearchResultClick: ["event95"],
                            instantSearch: ["event96"],
                            searchEventClose: ["event98"],
                            searchEventAutocomplete: ["event99"],
                            error: ["event100"],
                            purchase: ["purchase"],
                            familyTravelBudget: ["purchase"],
                            familyTravelLength: ["purchase"]
                        }
                    }
                },
                tV: {
                    cto: {
                        mappings: {
                            trackingCode: ["extTrckCd"],
                            cmp: ["extTrckCd"],
                            timeParting: ["tParting"],
                            assetName: ["assetNm"],
                            ASSETNAME: ["assetNm"],
                            personalization: ["personalization"],
                            engagementType: ["engmtTp"],
                            link_engmtTp: ["engmtTp"],
                            seriesCode: ["seriesCd"],
                            property: ["seriesCd"],
                            siteCode: ["siteCd"],
                            site: ["siteCd"],
                            ugcType: ["ugcTp"],
                            assetInteractionType: ["assetIntTp"],
                            categoryCode: ["categoryCd"],
                            category: ["categoryCd"],
                            fullPageName: ["fullPgNm"],
                            leadType: ["leadTp"],
                            abTest: ["abTest"],
                            genreCode: ["gnrCd"],
                            genre: ["gnrCd"],
                            dealType: ["dealTp"],
                            dealCategory: ["dealCtgry"],
                            firstCampaign: ["firstCampaign"],
                            sem_cmp: ["semTrckCd"],
                            arPageName: ["arPgNm"],
                            mkwid: ["mkwTrckCd"],
                            regAge: ["regAge"],
                            regMilestone: ["regMlstn"],
                            regFlowType: ["regFlowTp"],
                            socialPlatforms: ["socialPlatforms"],
                            socialAuthors: ["socialAuthors"],
                            templateType: ["templateTp"],
                            KDPDAT_VALUE: ["KDPDAT_VALUE"],
                            KDPEVNT: ["KDPEVNT"],
                            urlDomain: ["urlDom"],
                            urlFullDomain: ["urlFDom"],
                            urlFullDomain1: ["urlFDom1"],
                            url: ["url"],
                            adPageName: ["adPgNm"],
                            referrer: ["refUrl"],
                            PLAYLISTID: ["PLAYLISTID"],
                            contentTag: ["contentTag"],
                            dolWAVersion: ["dolWAVer"],
                            swid: ["swid"],
                            program: ["program"],
                            adblockStatus: ["adblck"],
                            breadcrumbs: ["brdcrums"],
                            siteSection: ["brdcrums"],
                            products: ["prods"],
                            purchaseId: ["purchId"],
                            contentType: ["contentTp"],
                            timePartingCodes: ["timePartingCodes"],
                            prevPageName: ["prevPgNm"],
                            buCode: ["buCd"],
                            unit: ["buCd"],
                            engagementId: ["engagementId"],
                            membershipTypeCode: ["mmbrTpCd"],
                            membershipType: ["mmbrTpCd"],
                            familyPartner: ["fmlPrtnr"],
                            familyTentPole: ["fmlTentPole"],
                            registrationStatus: ["regStatus"],
                            optinType: ["optinLst"],
                            author: ["author"],
                            postDate: ["pstDt"],
                            adCampaign: ["adCmp"],
                            contentId: ["contentId"],
                            pageViewId: ["pgVwId"],
                            adKeywords: ["adKwd"],
                            galleryPageName: ["glPgNm"],
                            sponsor: ["sponsor"],
                            characterCode: ["charCd"],
                            propertyCode: ["propCd"],
                            ipCode: ["propCd"],
                            adSizeList: ["adSzLst"],
                            trackType: ["trckTp"],
                            account: ["accnt"],
                            biReserved: ["biReserved"],
                            "unused-time": ["biReserved"],
                            visitorId: ["visitorId"],
                            sessionId: ["sessionId"],
                            pageTypeCode: ["pgTpCd"],
                            pageType: ["pgTpCd"],
                            server: ["server"],
                            assetStart: ["assetStart"],
                            registration: ["registration"],
                            internalPromotionEvent: ["internalPromotionEvent"],
                            assetComplete: ["assetComplete"],
                            regAttempt: ["regAttempt"],
                            login: ["login"],
                            trackingCodeEvent: ["trackingCodeEvent"],
                            cmpClickThrough: ["cmpClickThrough"],
                            "unused-pastEvent": ["cmpClickThrough"],
                            videoAuto: ["videoAuto"],
                            video20: ["video20"],
                            video70: ["video70"],
                            video50: ["video50"],
                            videoStart: ["videoStart"],
                            videoComplete: ["videoComplete"],
                            adStart: ["adStart"],
                            error: ["error"],
                            app: ["app"],
                            AUTOTRANSITION: ["AUTOTRANSITION"],
                            buId: ["buId"],
                            cf: ["cf"],
                            characterId: ["charId"],
                            cod: ["cod"],
                            coreId: ["coreId"],
                            COREVIDEOID: ["COREVIDEOID"],
                            eventData: ["evntData"],
                            jf: ["jf"],
                            lHitSeq: ["lHitSeq"],
                            localSessionId: ["lSessId"],
                            localVar1: ["localVar1"],
                            localVar2: ["localVar2"],
                            localVisitorId: ["lVisId"],
                            pageId: ["pgId"],
                            plgId: ["plgId"],
                            propertyId: ["propId"],
                            region: ["region"],
                            res: ["res"],
                            seriesId: ["seriesId"],
                            sessionFirstPage: ["sFP"],
                            sessionFirstRefUrl: ["sFRU"],
                            sessionFirstUrl: ["sFU"],
                            sessionHitSeq: ["sHS"],
                            uuid: ["uuid"],
                            vendorLst: ["vendorLst"],
                            version: ["version"],
                            visitorFirstPage: ["vFP"],
                            visitorFirstRefUrl: ["vFRU"],
                            visitorFirstUrl: ["vFU"],
                            visitorSesSeq: ["vSS"],
                            country: ["country"],
                            intFullPageName: ["intFullPageName"],
                            ASSETID: ["ASSETID"],
                            assetId: ["ASSETID"],
                            assetStartType: ["assetStartType"],
                            assetTypeCode: ["assetTpCd"],
                            AUTO: ["AUTO"],
                            BITRATE: ["BITRATE"],
                            DEVID: ["DEVID"],
                            FORM: ["FORM"],
                            GENTITLE: ["GENTITLE"],
                            GENURL: ["GENURL"],
                            KDPDAT_PLAYHEAD: ["KDPDAT_PLAYHEAD"],
                            KDPID: ["KDPID"],
                            KDPPROTO: ["KDPPROTO"],
                            KPLAYBACKID: ["KPLAYBACKID"],
                            KSESSIONID: ["KSESSIONID"],
                            KSESSIONSEQ: ["KSESSIONSEQ"],
                            SCRUBPOS: ["SCRUBPOS"],
                            video25: ["video25"],
                            video75: ["video75"],
                            videoSegment: ["videoSegment"],
                            videoSegmentViews: ["videoSegmentViews"],
                            VIDLEN: ["VIDLEN"],
                            WIGID: ["WIGID"],
                            media_segments: ["media_segments"],
                            media_content_type: ["media_content_type"],
                            manual_promo: ["manual_promo"],
                            auto_promo: ["auto_promo"],
                            product_finding_methods: ["product_finding_methods"],
                            merchandising_category: ["merchandising_category"],
                            merchandising_category1: ["merchandising_category1"],
                            merchandising_category2: ["merchandising_category2"],
                            merchandising_category3: ["merchandising_category3"],
                            merchandising_category4: ["merchandising_category4"],
                            merchandising_category5: ["merchandising_category5"],
                            merchandising_category6: ["merchandising_category6"],
                            entered_promo: ["entered_promo"],
                            amoId: ["amoId"],
                            entered_promo_error: ["entered_promo_error"],
                            dsr_number: ["dsr_number"],
                            dsr_store_number: ["dsr_store_number"],
                            payment_ship_type: ["payment_ship_type"],
                            bazaarvoice_review: ["bazaarvoice_review"],
                            reflektion: ["reflektion"],
                            reflektion_search: ["reflektion_search"],
                            reflektion_recommendations: ["reflektion_recommendations"],
                            optimizely0: ["optimizely0"],
                            optimizely1: ["optimizely1"],
                            optimizely2: ["optimizely2"],
                            optimizely3: ["optimizely3"],
                            optimizely4: ["optimizely4"],
                            optimizely5: ["optimizely5"],
                            api_environment: ["api_environment"],
                            api_endpoint_url: ["api_endpoint_url"],
                            elapsed_time: ["elapsed_time"],
                            platform: ["platform"],
                            searchRefinementAttr: ["searchRefinementAttr"],
                            productAvailability: ["productAvailability"],
                            characterSearch: ["characterSearch"],
                            contentType1: ["contentType1"],
                            unid: ["unid"],
                            unidReason: ["unidReason"],
                            videoIdSource: ["videoIdSource"],
                            videoAdPattern: ["videoAdPattern"],
                            recommendation_source: ["recommendation_source"],
                            recommendation_token: ["recommendation_token"],
                            EFID: ["EFID"],
                            errorType: ["errorType"],
                            error_type: ["errorType"],
                            errorDetails: ["errorDetails"],
                            error_details: ["errorDetails"],
                            video_initiated_method: ["video_initiated_method"],
                            up_next_flag: ["up_next_flag"],
                            autoplay_blocked: ["autoplay_blocked"],
                            video_content_ad_eligible: ["video_content_ad_eligible"],
                            video_location_ad_eligible: ["video_location_ad_eligible"],
                            video_ad_type: ["video_ad_type"],
                            video_player_in_viewport: ["video_player_in_viewport"],
                            request_type: ["request_type"],
                            mute_flag: ["mute_flag"],
                            core_content_id: ["core_content_id"],
                            track_type_event: ["track_type_event"],
                            gift: ["gift"]
                        },
                        events: {
                            personalization: ["e5"],
                            engagementType: ["e6"],
                            link_engmtTp: ["e6"],
                            ugcType: ["e36"],
                            assetInteractionType: ["e40"],
                            leadType: ["e15"],
                            mkwid: ["e43"],
                            regMilestone: ["e26"],
                            KDPEVNT: ["e76"],
                            assetStart: ["e1"],
                            registration: ["e4"],
                            internalPromotionEvent: ["e7"],
                            assetComplete: ["e11"],
                            regAttempt: ["e25"],
                            login: ["e39"],
                            trackingCodeEvent: ["e51"],
                            cmpClickThrough: ["e52"],
                            "unused-pastEvent": ["e52"],
                            videoAuto: ["e68"],
                            video20: ["e69"],
                            video70: ["e70"],
                            video50: ["e71"],
                            videoStart: ["e73"],
                            videoComplete: ["e74"],
                            adStart: ["e97"],
                            error: ["e100"]
                        }
                    },
                    omni: {
                        mappings: {
                            assetName: ["prop3", "eVar2"],
                            ASSETNAME: ["prop3", "eVar2"],
                            personalization: ["eVar6"],
                            engagementType: ["eVar8"],
                            link_engmtTp: ["eVar8"],
                            assetInteractionType: ["eVar13"],
                            fullPageName: ["pageName"],
                            leadType: ["eVar23"],
                            abTest: ["prop19", "eVar24"],
                            genreCode: ["prop25", "eVar25"],
                            genre: ["prop25", "eVar25"],
                            arPageName: ["prop47", "eVar40"],
                            assetMSTP: ["eVar56"],
                            KDPDAT_VALUE: ["eVar57"],
                            KDPEVNT: ["eVar59"],
                            urlDomain: ["prop61", "eVar61"],
                            urlFullDomain: ["prop62", "eVar62"],
                            urlFullDomain1: ["prop63", "eVar63"],
                            url: ["prop28", "eVar65"],
                            assetPlayerType: ["eVar67"],
                            referrer: ["prop68", "eVar68"],
                            PLAYLISTID: ["eVar69"],
                            dolWAVersion: ["prop72"],
                            swid: ["prop2", "eVar73"],
                            program: ["prop48", "eVar74"],
                            adblockStatus: ["eVar76"],
                            products: ["products"],
                            purchaseId: ["purchaseID"],
                            prevPageName: ["prop12"],
                            optinType: ["prop35"],
                            universalPathing: ["prop39"],
                            pageViewId: ["prop49"],
                            trackType: ["prop69"],
                            account: ["prop70"],
                            biReserved: ["prop71"],
                            "unused-time": ["prop71"],
                            visitorId: ["prop74"],
                            sessionId: ["prop75"],
                            server: ["server"],
                            unid: ["eVar100"],
                            unidReason: ["eVar99"]
                        },
                        EMEAmappings: {
                            assetName: ["prop3", "eVar2"],
                            ASSETNAME: ["prop3", "eVar2"],
                            assetInteractionType: ["eVar11"],
                            abTest: ["prop19", "eVar24"],
                            url: ["prop46"],
                            swid: ["prop2"],
                            adblockStatus: ["prop59", "eVar59"],
                            prevPageName: ["prop12"],
                            country: ["prop31"],
                            intFullPageName: ["pageName", "eVar16"],
                            assetStartType: ["eVar13"],
                            videoSegment: ["eVar20"]
                        },
                        events: {
                            personalization: ["event5"],
                            engagementType: ["event6"],
                            link_engmtTp: ["event6"],
                            assetInteractionType: ["event40"],
                            leadType: ["event15"],
                            KDPEVNT: ["event76"],
                            assetStart: ["event1"],
                            assetComplete: ["event11"],
                            videoAuto: ["event68"],
                            video20: ["event69"],
                            video70: ["event70"],
                            video50: ["event71"],
                            videoStart: ["event73"],
                            videoComplete: ["event74"],
                            adStart: ["event97"],
                            error: ["event100"]
                        },
                        shopMappings: {
                            personalization: ["eVar12"],
                            fullPageName: ["pageName"],
                            url: ["prop19"],
                            swid: ["prop2"],
                            products: ["products"],
                            purchaseId: ["purchaseID", "eVar7"],
                            prevPageName: ["prop15", "eVar9"],
                            visitorId: ["prop21"],
                            sessionId: ["prop22"],
                            server: ["server"],
                            state: ["state"],
                            zip: ["zip"],
                            amoId: ["eVar13"],
                            platform: ["prop18", "eVar18"],
                            productAvailability: ["eVar27"],
                            errorType: ["prop9"],
                            error_type: ["prop9"],
                            errorDetails: ["prop10"],
                            error_details: ["prop10"]
                        },
                        EMEAevents: {
                            assetInteractionType: ["event40"],
                            assetStart: ["event1"],
                            assetComplete: ["event11"],
                            video50: ["event17"],
                            assetSecondsConsumed: ["event10"],
                            video25: ["event16"],
                            video75: ["event18"],
                            videoSegmentViews: ["event12"]
                        }
                    }
                },
                tG: {
                    cto: {
                        mappings: {
                            trackingCode: ["extTrckCd"],
                            cmp: ["extTrckCd"],
                            timeParting: ["tParting"],
                            assetName: ["assetNm"],
                            ASSETNAME: ["assetNm"],
                            personalization: ["personalization"],
                            engagementType: ["engmtTp"],
                            link_engmtTp: ["engmtTp"],
                            seriesCode: ["seriesCd"],
                            property: ["seriesCd"],
                            siteCode: ["siteCd"],
                            site: ["siteCd"],
                            ugcType: ["ugcTp"],
                            assetInteractionType: ["assetIntTp"],
                            categoryCode: ["categoryCd"],
                            category: ["categoryCd"],
                            fullPageName: ["fullPgNm"],
                            leadType: ["leadTp"],
                            abTest: ["abTest"],
                            genreCode: ["gnrCd"],
                            genre: ["gnrCd"],
                            dealType: ["dealTp"],
                            dealCategory: ["dealCtgry"],
                            firstCampaign: ["firstCampaign"],
                            sem_cmp: ["semTrckCd"],
                            arPageName: ["arPgNm"],
                            mkwid: ["mkwTrckCd"],
                            regAge: ["regAge"],
                            regMilestone: ["regMlstn"],
                            regFlowType: ["regFlowTp"],
                            socialPlatforms: ["socialPlatforms"],
                            socialAuthors: ["socialAuthors"],
                            templateType: ["templateTp"],
                            urlDomain: ["urlDom"],
                            urlFullDomain: ["urlFDom"],
                            urlFullDomain1: ["urlFDom1"],
                            url: ["url"],
                            adPageName: ["adPgNm"],
                            referrer: ["refUrl"],
                            PLAYLISTID: ["PLAYLISTID"],
                            contentTag: ["contentTag"],
                            dolWAVersion: ["dolWAVer"],
                            swid: ["swid"],
                            program: ["program"],
                            adblockStatus: ["adblck"],
                            breadcrumbs: ["brdcrums"],
                            siteSection: ["brdcrums"],
                            products: ["prods"],
                            purchaseId: ["purchId"],
                            contentType: ["contentTp"],
                            timePartingCodes: ["timePartingCodes"],
                            prevPageName: ["prevPgNm"],
                            buCode: ["buCd"],
                            unit: ["buCd"],
                            engagementId: ["engagementId"],
                            membershipTypeCode: ["mmbrTpCd"],
                            membershipType: ["mmbrTpCd"],
                            familyPartner: ["fmlPrtnr"],
                            familyTentPole: ["fmlTentPole"],
                            registrationStatus: ["regStatus"],
                            optinType: ["optinLst"],
                            author: ["author"],
                            postDate: ["pstDt"],
                            adCampaign: ["adCmp"],
                            contentId: ["contentId"],
                            pageViewId: ["pgVwId"],
                            adKeywords: ["adKwd"],
                            galleryPageName: ["glPgNm"],
                            sponsor: ["sponsor"],
                            characterCode: ["charCd"],
                            propertyCode: ["propCd"],
                            ipCode: ["propCd"],
                            adSizeList: ["adSzLst"],
                            trackType: ["trckTp"],
                            account: ["accnt"],
                            biReserved: ["biReserved"],
                            "unused-time": ["biReserved"],
                            visitorId: ["visitorId"],
                            sessionId: ["sessionId"],
                            pageTypeCode: ["pgTpCd"],
                            pageType: ["pgTpCd"],
                            server: ["server"],
                            assetStart: ["assetStart"],
                            registration: ["registration"],
                            internalPromotionEvent: ["internalPromotionEvent"],
                            assetComplete: ["assetComplete"],
                            regAttempt: ["regAttempt"],
                            login: ["login"],
                            trackingCodeEvent: ["trackingCodeEvent"],
                            cmpClickThrough: ["cmpClickThrough"],
                            "unused-pastEvent": ["cmpClickThrough"],
                            gameLoad: ["gameLoad"],
                            adStart: ["adStart"],
                            error: ["error"],
                            app: ["app"],
                            AUTOTRANSITION: ["AUTOTRANSITION"],
                            buId: ["buId"],
                            cf: ["cf"],
                            characterId: ["charId"],
                            cod: ["cod"],
                            coreId: ["coreId"],
                            COREVIDEOID: ["COREVIDEOID"],
                            eventData: ["evntData"],
                            jf: ["jf"],
                            lHitSeq: ["lHitSeq"],
                            localSessionId: ["lSessId"],
                            localVar1: ["localVar1"],
                            localVar2: ["localVar2"],
                            localVisitorId: ["lVisId"],
                            pageId: ["pgId"],
                            plgId: ["plgId"],
                            propertyId: ["propId"],
                            region: ["region"],
                            res: ["res"],
                            seriesId: ["seriesId"],
                            sessionFirstPage: ["sFP"],
                            sessionFirstRefUrl: ["sFRU"],
                            sessionFirstUrl: ["sFU"],
                            sessionHitSeq: ["sHS"],
                            uuid: ["uuid"],
                            vendorLst: ["vendorLst"],
                            version: ["version"],
                            visitorFirstPage: ["vFP"],
                            visitorFirstRefUrl: ["vFRU"],
                            visitorFirstUrl: ["vFU"],
                            visitorSesSeq: ["vSS"],
                            country: ["country"],
                            intFullPageName: ["intFullPageName"],
                            ASSETID: ["ASSETID"],
                            assetId: ["ASSETID"],
                            assetStartType: ["assetStartType"],
                            assetTypeCode: ["assetTpCd"],
                            coreGameId: ["coreGameId"],
                            embFields: ["embFields"],
                            embValues: ["embValues"],
                            gameBuCode: ["gmBuCd"],
                            gameEvent: ["gmEvnt"],
                            gameEventValue: ["gmEvntVal"],
                            gameGenreCode: ["gmGenreCd"],
                            gameName: ["gmNm"],
                            gameOwnerName: ["gmOwnNm"],
                            gameSeriesCode: ["gmSeriesCd"],
                            gameSessionId: ["gmSessionId"],
                            gameTime: ["gmTm"],
                            gameTypeCode: ["gmTpCd"],
                            refOverride: ["refOverride"],
                            unid: ["unid"],
                            unidReason: ["unidReason"],
                            recommendation_source: ["recommendation_source"],
                            recommendation_token: ["recommendation_token"],
                            EFID: ["EFID"],
                            errorType: ["errorType"],
                            error_type: ["errorType"],
                            errorDetails: ["errorDetails"],
                            error_details: ["errorDetails"],
                            core_content_id: ["core_content_id"],
                            track_type_event: ["track_type_event"],
                            gift: ["gift"]
                        },
                        events: {
                            personalization: ["e5"],
                            engagementType: ["e6"],
                            link_engmtTp: ["e6"],
                            ugcType: ["e36"],
                            assetInteractionType: ["e40"],
                            leadType: ["e15"],
                            mkwid: ["e43"],
                            regMilestone: ["e26"],
                            assetStart: ["e1"],
                            registration: ["e4"],
                            internalPromotionEvent: ["e7"],
                            assetComplete: ["e11"],
                            regAttempt: ["e25"],
                            login: ["e39"],
                            trackingCodeEvent: ["e51"],
                            cmpClickThrough: ["e52"],
                            "unused-pastEvent": ["e52"],
                            gameLoad: ["e72"],
                            adStart: ["e97"],
                            error: ["e100"]
                        }
                    },
                    omni: {
                        mappings: {
                            assetName: ["prop3", "eVar2"],
                            ASSETNAME: ["prop3", "eVar2"],
                            personalization: ["eVar6"],
                            engagementType: ["eVar8"],
                            link_engmtTp: ["eVar8"],
                            assetInteractionType: ["eVar13"],
                            fullPageName: ["pageName"],
                            leadType: ["eVar23"],
                            abTest: ["prop19", "eVar24"],
                            genreCode: ["prop25", "eVar25"],
                            genre: ["prop25", "eVar25"],
                            arPageName: ["prop47", "eVar40"],
                            assetMSTP: ["eVar56"],
                            urlDomain: ["prop61", "eVar61"],
                            urlFullDomain: ["prop62", "eVar62"],
                            urlFullDomain1: ["prop63", "eVar63"],
                            url: ["prop28", "eVar65"],
                            referrer: ["prop68", "eVar68"],
                            dolWAVersion: ["prop72"],
                            swid: ["prop2", "eVar73"],
                            program: ["prop48", "eVar74"],
                            adblockStatus: ["eVar76"],
                            products: ["products"],
                            purchaseId: ["purchaseID"],
                            prevPageName: ["prop12"],
                            optinType: ["prop35"],
                            universalPathing: ["prop39"],
                            pageViewId: ["prop49"],
                            trackType: ["prop69"],
                            account: ["prop70"],
                            biReserved: ["prop71"],
                            "unused-time": ["prop71"],
                            visitorId: ["prop74"],
                            sessionId: ["prop75"],
                            server: ["server"],
                            unid: ["eVar100"],
                            unidReason: ["eVar99"]
                        },
                        EMEAmappings: {
                            assetName: ["prop3", "eVar2"],
                            ASSETNAME: ["prop3", "eVar2"],
                            assetInteractionType: ["eVar11"],
                            abTest: ["prop19", "eVar24"],
                            url: ["prop46"],
                            swid: ["prop2"],
                            adblockStatus: ["prop59", "eVar59"],
                            prevPageName: ["prop12"],
                            country: ["prop31"],
                            intFullPageName: ["pageName", "eVar16"],
                            assetStartType: ["eVar13"]
                        },
                        events: {
                            personalization: ["event5"],
                            engagementType: ["event6"],
                            link_engmtTp: ["event6"],
                            assetInteractionType: ["event40"],
                            leadType: ["event15"],
                            assetStart: ["event1"],
                            assetComplete: ["event11"],
                            gameLoad: ["event72"],
                            adStart: ["event97"],
                            error: ["event100"]
                        },
                        shopMappings: {
                            personalization: ["eVar12"],
                            fullPageName: ["pageName"],
                            url: ["prop19"],
                            swid: ["prop2"],
                            products: ["products"],
                            purchaseId: ["purchaseID", "eVar7"],
                            prevPageName: ["prop15", "eVar9"],
                            visitorId: ["prop21"],
                            sessionId: ["prop22"],
                            server: ["server"],
                            errorType: ["prop9"],
                            error_type: ["prop9"],
                            errorDetails: ["prop10"],
                            error_details: ["prop10"]
                        },
                        EMEAevents: {
                            assetInteractionType: ["event40"],
                            assetStart: ["event1"],
                            assetComplete: ["event11"]
                        }
                    }
                },
                tA: {
                    cto: {
                        mappings: {
                            trackingCode: ["extTrckCd"],
                            cmp: ["extTrckCd"],
                            timeParting: ["tParting"],
                            assetName: ["assetNm"],
                            ASSETNAME: ["assetNm"],
                            personalization: ["personalization"],
                            engagementType: ["engmtTp"],
                            link_engmtTp: ["engmtTp"],
                            seriesCode: ["seriesCd"],
                            property: ["seriesCd"],
                            siteCode: ["siteCd"],
                            site: ["siteCd"],
                            ugcType: ["ugcTp"],
                            assetInteractionType: ["assetIntTp"],
                            categoryCode: ["categoryCd"],
                            category: ["categoryCd"],
                            fullPageName: ["fullPgNm"],
                            leadType: ["leadTp"],
                            abTest: ["abTest"],
                            genreCode: ["gnrCd"],
                            genre: ["gnrCd"],
                            dealType: ["dealTp"],
                            dealCategory: ["dealCtgry"],
                            firstCampaign: ["firstCampaign"],
                            sem_cmp: ["semTrckCd"],
                            arPageName: ["arPgNm"],
                            mkwid: ["mkwTrckCd"],
                            regAge: ["regAge"],
                            regMilestone: ["regMlstn"],
                            regFlowType: ["regFlowTp"],
                            socialPlatforms: ["socialPlatforms"],
                            socialAuthors: ["socialAuthors"],
                            templateType: ["templateTp"],
                            urlDomain: ["urlDom"],
                            urlFullDomain: ["urlFDom"],
                            urlFullDomain1: ["urlFDom1"],
                            url: ["url"],
                            adPageName: ["adPgNm"],
                            referrer: ["refUrl"],
                            PLAYLISTID: ["PLAYLISTID"],
                            contentTag: ["contentTag"],
                            dolWAVersion: ["dolWAVer"],
                            swid: ["swid"],
                            program: ["program"],
                            adblockStatus: ["adblck"],
                            breadcrumbs: ["brdcrums"],
                            siteSection: ["brdcrums"],
                            products: ["prods"],
                            purchaseId: ["purchId"],
                            contentType: ["contentTp"],
                            timePartingCodes: ["timePartingCodes"],
                            prevPageName: ["prevPgNm"],
                            buCode: ["buCd"],
                            unit: ["buCd"],
                            engagementId: ["engagementId"],
                            membershipTypeCode: ["mmbrTpCd"],
                            membershipType: ["mmbrTpCd"],
                            familyPartner: ["fmlPrtnr"],
                            familyTentPole: ["fmlTentPole"],
                            registrationStatus: ["regStatus"],
                            optinType: ["optinLst"],
                            author: ["author"],
                            postDate: ["pstDt"],
                            adCampaign: ["adCmp"],
                            contentId: ["contentId"],
                            pageViewId: ["pgVwId"],
                            adKeywords: ["adKwd"],
                            galleryPageName: ["glPgNm"],
                            sponsor: ["sponsor"],
                            characterCode: ["charCd"],
                            propertyCode: ["propCd"],
                            ipCode: ["propCd"],
                            adSizeList: ["adSzLst"],
                            trackType: ["trckTp"],
                            account: ["accnt"],
                            biReserved: ["biReserved"],
                            "unused-time": ["biReserved"],
                            visitorId: ["visitorId"],
                            sessionId: ["sessionId"],
                            pageTypeCode: ["pgTpCd"],
                            pageType: ["pgTpCd"],
                            server: ["server"],
                            assetStart: ["assetStart"],
                            registration: ["registration"],
                            internalPromotionEvent: ["internalPromotionEvent"],
                            assetComplete: ["assetComplete"],
                            regAttempt: ["regAttempt"],
                            login: ["login"],
                            trackingCodeEvent: ["trackingCodeEvent"],
                            cmpClickThrough: ["cmpClickThrough"],
                            "unused-pastEvent": ["cmpClickThrough"],
                            appShare: ["appShare"],
                            appSaveC: ["appSaveC"],
                            appLoad: ["appLoad"],
                            adStart: ["adStart"],
                            error: ["error"],
                            app: ["app"],
                            AUTOTRANSITION: ["AUTOTRANSITION"],
                            buId: ["buId"],
                            cf: ["cf"],
                            characterId: ["charId"],
                            cod: ["cod"],
                            coreId: ["coreId"],
                            COREVIDEOID: ["COREVIDEOID"],
                            eventData: ["evntData"],
                            jf: ["jf"],
                            lHitSeq: ["lHitSeq"],
                            localSessionId: ["lSessId"],
                            localVar1: ["localVar1"],
                            localVar2: ["localVar2"],
                            localVisitorId: ["lVisId"],
                            pageId: ["pgId"],
                            plgId: ["plgId"],
                            propertyId: ["propId"],
                            region: ["region"],
                            res: ["res"],
                            seriesId: ["seriesId"],
                            sessionFirstPage: ["sFP"],
                            sessionFirstRefUrl: ["sFRU"],
                            sessionFirstUrl: ["sFU"],
                            sessionHitSeq: ["sHS"],
                            uuid: ["uuid"],
                            vendorLst: ["vendorLst"],
                            version: ["version"],
                            visitorFirstPage: ["vFP"],
                            visitorFirstRefUrl: ["vFRU"],
                            visitorFirstUrl: ["vFU"],
                            visitorSesSeq: ["vSS"],
                            country: ["country"],
                            intFullPageName: ["intFullPageName"],
                            appBuCode: ["appBuCd"],
                            appEvent: ["appEvnt"],
                            appEventValue: ["appEvntVal"],
                            appGenreCode: ["appGenreCd"],
                            appName: ["appNm"],
                            appOwnerName: ["appOwnNm"],
                            appPropertyCode: ["appPropCd"],
                            appSessionId: ["appSessionId"],
                            appTime: ["appTm"],
                            appTypeCode: ["appTpCd"],
                            ASSETID: ["ASSETID"],
                            assetId: ["ASSETID"],
                            assetStartType: ["assetStartType"],
                            assetTypeCode: ["assetTpCd"],
                            unid: ["unid"],
                            unidReason: ["unidReason"],
                            recommendation_source: ["recommendation_source"],
                            recommendation_token: ["recommendation_token"],
                            EFID: ["EFID"],
                            errorType: ["errorType"],
                            error_type: ["errorType"],
                            errorDetails: ["errorDetails"],
                            error_details: ["errorDetails"],
                            core_content_id: ["core_content_id"],
                            track_type_event: ["track_type_event"],
                            gift: ["gift"]
                        },
                        events: {
                            personalization: ["e5"],
                            engagementType: ["e6"],
                            link_engmtTp: ["e6"],
                            ugcType: ["e36"],
                            assetInteractionType: ["e40"],
                            leadType: ["e15"],
                            mkwid: ["e43"],
                            regMilestone: ["e26"],
                            assetStart: ["e1"],
                            registration: ["e4"],
                            internalPromotionEvent: ["e7"],
                            assetComplete: ["e11"],
                            regAttempt: ["e25"],
                            login: ["e39"],
                            trackingCodeEvent: ["e51"],
                            cmpClickThrough: ["e52"],
                            "unused-pastEvent": ["e52"],
                            appShare: ["e65"],
                            appSaveC: ["e66"],
                            appLoad: ["e67"],
                            adStart: ["e97"],
                            error: ["e100"]
                        }
                    },
                    omni: {
                        mappings: {
                            assetName: ["prop3", "eVar2"],
                            ASSETNAME: ["prop3", "eVar2"],
                            personalization: ["eVar6"],
                            engagementType: ["eVar8"],
                            link_engmtTp: ["eVar8"],
                            assetInteractionType: ["eVar13"],
                            fullPageName: ["pageName"],
                            leadType: ["eVar23"],
                            abTest: ["prop19", "eVar24"],
                            genreCode: ["prop25", "eVar25"],
                            genre: ["prop25", "eVar25"],
                            arPageName: ["prop47", "eVar40"],
                            assetMSTP: ["eVar56"],
                            urlDomain: ["prop61", "eVar61"],
                            urlFullDomain: ["prop62", "eVar62"],
                            urlFullDomain1: ["prop63", "eVar63"],
                            url: ["prop28", "eVar65"],
                            referrer: ["prop68", "eVar68"],
                            dolWAVersion: ["prop72"],
                            swid: ["prop2", "eVar73"],
                            program: ["prop48", "eVar74"],
                            adblockStatus: ["eVar76"],
                            products: ["products"],
                            purchaseId: ["purchaseID"],
                            prevPageName: ["prop12"],
                            optinType: ["prop35"],
                            universalPathing: ["prop39"],
                            pageViewId: ["prop49"],
                            trackType: ["prop69"],
                            account: ["prop70"],
                            biReserved: ["prop71"],
                            "unused-time": ["prop71"],
                            visitorId: ["prop74"],
                            sessionId: ["prop75"],
                            server: ["server"],
                            unid: ["eVar100"],
                            unidReason: ["eVar99"]
                        },
                        EMEAmappings: {
                            assetName: ["prop3", "eVar2"],
                            ASSETNAME: ["prop3", "eVar2"],
                            assetInteractionType: ["eVar11"],
                            abTest: ["prop19", "eVar24"],
                            url: ["prop46"],
                            swid: ["prop2"],
                            adblockStatus: ["prop59", "eVar59"],
                            prevPageName: ["prop12"],
                            country: ["prop31"],
                            intFullPageName: ["pageName", "eVar16"],
                            assetStartType: ["eVar13"]
                        },
                        events: {
                            personalization: ["event5"],
                            engagementType: ["event6"],
                            link_engmtTp: ["event6"],
                            assetInteractionType: ["event40"],
                            leadType: ["event15"],
                            assetStart: ["event1"],
                            assetComplete: ["event11"],
                            appShare: ["event65"],
                            appSaveC: ["event66"],
                            appLoad: ["event67"],
                            adStart: ["event97"],
                            error: ["event100"]
                        },
                        shopMappings: {
                            personalization: ["eVar12"],
                            fullPageName: ["pageName"],
                            url: ["prop19"],
                            swid: ["prop2"],
                            products: ["products"],
                            purchaseId: ["purchaseID", "eVar7"],
                            prevPageName: ["prop15", "eVar9"],
                            visitorId: ["prop21"],
                            sessionId: ["prop22"],
                            server: ["server"],
                            errorType: ["prop9"],
                            error_type: ["prop9"],
                            errorDetails: ["prop10"],
                            error_details: ["prop10"]
                        },
                        EMEAevents: {
                            assetInteractionType: ["event40"],
                            assetStart: ["event1"],
                            assetComplete: ["event11"]
                        }
                    }
                },
                tPr: {
                    cto: {
                        mappings: {
                            trackingCode: ["extTrckCd"],
                            cmp: ["extTrckCd"],
                            timeParting: ["tParting"],
                            personalization: ["personalization"],
                            engagementType: ["engmtTp"],
                            link_engmtTp: ["engmtTp"],
                            seriesCode: ["seriesCd"],
                            property: ["seriesCd"],
                            siteCode: ["siteCd"],
                            site: ["siteCd"],
                            ugcType: ["ugcTp"],
                            categoryCode: ["categoryCd"],
                            category: ["categoryCd"],
                            fullPageName: ["fullPgNm"],
                            leadType: ["leadTp"],
                            abTest: ["abTest"],
                            genreCode: ["gnrCd"],
                            genre: ["gnrCd"],
                            dealType: ["dealTp"],
                            dealCategory: ["dealCtgry"],
                            firstCampaign: ["firstCampaign"],
                            sem_cmp: ["semTrckCd"],
                            arPageName: ["arPgNm"],
                            mkwid: ["mkwTrckCd"],
                            regAge: ["regAge"],
                            regMilestone: ["regMlstn"],
                            regFlowType: ["regFlowTp"],
                            socialPlatforms: ["socialPlatforms"],
                            socialAuthors: ["socialAuthors"],
                            templateType: ["templateTp"],
                            urlDomain: ["urlDom"],
                            urlFullDomain: ["urlFDom"],
                            urlFullDomain1: ["urlFDom1"],
                            url: ["url"],
                            adPageName: ["adPgNm"],
                            referrer: ["refUrl"],
                            PLAYLISTID: ["PLAYLISTID"],
                            linkUrl: ["linkUrl"],
                            contentTag: ["contentTag"],
                            dolWAVersion: ["dolWAVer"],
                            swid: ["swid"],
                            program: ["program"],
                            adblockStatus: ["adblck"],
                            breadcrumbs: ["brdcrums"],
                            siteSection: ["brdcrums"],
                            products: ["prods"],
                            purchaseId: ["purchId"],
                            contentType: ["contentTp"],
                            timePartingCodes: ["timePartingCodes"],
                            prevPageName: ["prevPgNm"],
                            buCode: ["buCd"],
                            unit: ["buCd"],
                            engagementId: ["engagementId"],
                            membershipTypeCode: ["mmbrTpCd"],
                            membershipType: ["mmbrTpCd"],
                            familyPartner: ["fmlPrtnr"],
                            familyTentPole: ["fmlTentPole"],
                            registrationStatus: ["regStatus"],
                            optinType: ["optinLst"],
                            author: ["author"],
                            postDate: ["pstDt"],
                            adCampaign: ["adCmp"],
                            contentId: ["contentId"],
                            pageViewId: ["pgVwId"],
                            adKeywords: ["adKwd"],
                            galleryPageName: ["glPgNm"],
                            sponsor: ["sponsor"],
                            characterCode: ["charCd"],
                            propertyCode: ["propCd"],
                            ipCode: ["propCd"],
                            adSizeList: ["adSzLst"],
                            trackType: ["trckTp"],
                            account: ["accnt"],
                            biReserved: ["biReserved"],
                            "unused-time": ["biReserved"],
                            visitorId: ["visitorId"],
                            sessionId: ["sessionId"],
                            pageTypeCode: ["pgTpCd"],
                            pageType: ["pgTpCd"],
                            server: ["server"],
                            registration: ["registration"],
                            internalPromotionEvent: ["internalPromotionEvent"],
                            print: ["print"],
                            printable: ["print"],
                            regAttempt: ["regAttempt"],
                            login: ["login"],
                            trackingCodeEvent: ["trackingCodeEvent"],
                            cmpClickThrough: ["cmpClickThrough"],
                            "unused-pastEvent": ["cmpClickThrough"],
                            error: ["error"],
                            app: ["app"],
                            AUTOTRANSITION: ["AUTOTRANSITION"],
                            buId: ["buId"],
                            cf: ["cf"],
                            characterId: ["charId"],
                            cod: ["cod"],
                            coreId: ["coreId"],
                            COREVIDEOID: ["COREVIDEOID"],
                            eventData: ["evntData"],
                            jf: ["jf"],
                            lHitSeq: ["lHitSeq"],
                            localSessionId: ["lSessId"],
                            localVar1: ["localVar1"],
                            localVar2: ["localVar2"],
                            localVisitorId: ["lVisId"],
                            pageId: ["pgId"],
                            plgId: ["plgId"],
                            propertyId: ["propId"],
                            region: ["region"],
                            res: ["res"],
                            seriesId: ["seriesId"],
                            sessionFirstPage: ["sFP"],
                            sessionFirstRefUrl: ["sFRU"],
                            sessionFirstUrl: ["sFU"],
                            sessionHitSeq: ["sHS"],
                            uuid: ["uuid"],
                            vendorLst: ["vendorLst"],
                            version: ["version"],
                            visitorFirstPage: ["vFP"],
                            visitorFirstRefUrl: ["vFRU"],
                            visitorFirstUrl: ["vFU"],
                            visitorSesSeq: ["vSS"],
                            country: ["country"],
                            intFullPageName: ["intFullPageName"],
                            unid: ["unid"],
                            unidReason: ["unidReason"],
                            recommendation_source: ["recommendation_source"],
                            recommendation_token: ["recommendation_token"],
                            EFID: ["EFID"],
                            errorType: ["errorType"],
                            error_type: ["errorType"],
                            errorDetails: ["errorDetails"],
                            error_details: ["errorDetails"],
                            core_content_id: ["core_content_id"],
                            track_type_event: ["track_type_event"],
                            gift: ["gift"]
                        },
                        events: {
                            personalization: ["e5"],
                            engagementType: ["e6"],
                            link_engmtTp: ["e6"],
                            ugcType: ["e36"],
                            leadType: ["e15"],
                            mkwid: ["e43"],
                            regMilestone: ["e26"],
                            registration: ["e4"],
                            internalPromotionEvent: ["e7"],
                            print: ["e14"],
                            printable: ["e14"],
                            regAttempt: ["e25"],
                            login: ["e39"],
                            trackingCodeEvent: ["e51"],
                            cmpClickThrough: ["e52"],
                            "unused-pastEvent": ["e52"],
                            error: ["e100"]
                        }
                    },
                    omni: {
                        events: {
                            personalization: ["event5"],
                            engagementType: ["event6"],
                            link_engmtTp: ["event6"],
                            leadType: ["event15"],
                            print: ["event14"],
                            printable: ["event14"],
                            error: ["event100"]
                        },
                        mappings: {
                            personalization: ["eVar6"],
                            engagementType: ["eVar8"],
                            link_engmtTp: ["eVar8"],
                            fullPageName: ["pageName"],
                            leadType: ["eVar23"],
                            abTest: ["prop19", "eVar24"],
                            genreCode: ["prop25", "eVar25"],
                            genre: ["prop25", "eVar25"],
                            arPageName: ["prop47", "eVar40"],
                            urlDomain: ["prop61", "eVar61"],
                            urlFullDomain: ["prop62", "eVar62"],
                            urlFullDomain1: ["prop63", "eVar63"],
                            url: ["prop28", "eVar65"],
                            referrer: ["prop68", "eVar68"],
                            linkUrl: ["eVar70"],
                            dolWAVersion: ["prop72"],
                            swid: ["prop2", "eVar73"],
                            program: ["prop48", "eVar74"],
                            adblockStatus: ["eVar76"],
                            products: ["products"],
                            purchaseId: ["purchaseID"],
                            prevPageName: ["prop12"],
                            optinType: ["prop35"],
                            pageViewId: ["prop49"],
                            trackType: ["prop69"],
                            account: ["prop70"],
                            biReserved: ["prop71"],
                            "unused-time": ["prop71"],
                            visitorId: ["prop74"],
                            sessionId: ["prop75"],
                            server: ["server"],
                            unid: ["eVar100"],
                            unidReason: ["eVar99"]
                        },
                        shopMappings: {
                            personalization: ["eVar12"],
                            fullPageName: ["pageName"],
                            url: ["prop19"],
                            swid: ["prop2"],
                            products: ["products"],
                            purchaseId: ["purchaseID", "eVar7"],
                            prevPageName: ["prop15", "eVar9"],
                            visitorId: ["prop21"],
                            sessionId: ["prop22"],
                            server: ["server"],
                            errorType: ["prop9"],
                            error_type: ["prop9"],
                            errorDetails: ["prop10"],
                            error_details: ["prop10"]
                        },
                        EMEAmappings: {
                            abTest: ["prop19", "eVar24"],
                            url: ["prop46"],
                            swid: ["prop2"],
                            adblockStatus: ["prop59", "eVar59"],
                            prevPageName: ["prop12"],
                            country: ["prop31"],
                            intFullPageName: ["pageName", "eVar16"]
                        }
                    }
                }
            };
            e.fire(window, "variableMapLoadedCTO", t)
        }), require.config({
            paths: {
                underscore: "vendor/underscore-amd/underscore",
                requireLib: "vendor/requirejs/require",
                reqwest: "vendor/reqwest/reqwest",
                script: "vendor/script/script",
                cookie: "vendor/cookie/cookie",
                url: "vendor/url/url",
                tld: "vendor/tld/tld",
                q: "vendor/q/q",
                scode: "vendor/scode/scode",
                StreamSense: "vendor/streamsense/streamsense-new",
                pollster: "vendor/pollster/pollster",
                bean: "vendor/bean/bean"
            }
        }), require(["bean", "underscore", "controller/events/APIReadyCTO", "controller/events/trackLinkCTO", "controller/events/cookiesReadyCTO", "controller/events/updateCookies", "controller/events/updateHitSeq", "controller/events/trackBounce", "controller/events/trackTimeToClick", "controller/events/trackPrint", "controller/events/runQueue", "controller/cookie/prevPageName", "controller/vendor/allVendors", "models/data/Config", "models/data/VariableMap"], function(e, t) {
            t.noConflict(), e.fire(window, "modulesLoadedCTO")
        }), define("main", function() {});
})();