var requirejs, require, define;
! function(global) {
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

    function mixin(e, t, n, i) {
        return t && eachProp(t, function(t, r) {
            (n || !hasProp(e, r)) && (!i || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[r] = t : (e[r] || (e[r] = {}), mixin(e[r], t, n, i)))
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

    function makeError(e, t, n, i) {
        var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return r.requireType = e, r.requireModules = i, n && (r.originalError = n), r
    }

    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; t < e.length; t++)
                if (n = e[t], "." === n) e.splice(t, 1), t -= 1;
                else if (".." === n) {
                if (0 === t || 1 == t && ".." === e[2] || ".." === e[t - 1]) continue;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function n(e, n, i) {
            var r, o, a, s, c, u, l, d, f, p, h, g, m = n && n.split("/"),
                v = x.map,
                y = v && v["*"];
            if (e && (e = e.split("/"), l = e.length - 1, x.nodeIdCompat && jsSuffixRegExp.test(e[l]) && (e[l] = e[l].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && m && (g = m.slice(0, m.length - 1), e = g.concat(e)), t(e), e = e.join("/")), i && v && (m || y)) {
                a = e.split("/");
                e: for (s = a.length; s > 0; s -= 1) {
                    if (u = a.slice(0, s).join("/"), m)
                        for (c = m.length; c > 0; c -= 1)
                            if (o = getOwn(v, m.slice(0, c).join("/")), o && (o = getOwn(o, u))) {
                                d = o, f = s;
                                break e
                            }!p && y && getOwn(y, u) && (p = getOwn(y, u), h = s)
                }!d && p && (d = p, f = h), d && (a.splice(0, f, d), e = a.join("/"))
            }
            return r = getOwn(x.pkgs, e), r ? r : e
        }

        function i(e) {
            isBrowser && each(scripts(), function(t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === E.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }

        function r(e) {
            var t = getOwn(x.paths, e);
            return t && isArray(t) && t.length > 1 ? (t.shift(), E.require.undef(e), E.makeRequire(null, {
                skipMap: !0
            })([e]), !0) : void 0
        }

        function o(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function a(e, t, i, r) {
            var a, s, c, u, l = null,
                d = t ? t.name : null,
                f = e,
                p = !0,
                h = "";
            return e || (p = !1, e = "_@r" + (B += 1)), u = o(e), l = u[0], e = u[1], l && (l = n(l, d, r), s = getOwn(I, l)), e && (l ? h = s && s.normalize ? s.normalize(e, function(e) {
                return n(e, d, r)
            }) : -1 === e.indexOf("!") ? n(e, d, r) : e : (h = n(e, d, r), u = o(h), l = u[0], h = u[1], i = !0, a = E.nameToUrl(h))), c = !l || s || i ? "" : "_unnormalized" + (T += 1), {
                prefix: l,
                name: h,
                parentMap: t,
                unnormalized: !!c,
                url: a,
                originalName: f,
                isDefine: p,
                id: (l ? l + "!" + h : h) + c
            }
        }

        function s(e) {
            var t = e.id,
                n = getOwn(S, t);
            return n || (n = S[t] = new E.Module(e)), n
        }

        function c(e, t, n) {
            var i = e.id,
                r = getOwn(S, i);
            !hasProp(I, i) || r && !r.defineEmitComplete ? (r = s(e), r.error && "error" === t ? n(r.error) : r.on(t, n)) : "defined" === t && n(I[i])
        }

        function u(e, t) {
            var n = e.requireModules,
                i = !1;
            t ? t(e) : (each(n, function(t) {
                var n = getOwn(S, t);
                n && (n.error = e, n.events.error && (i = !0, n.emit("error", e)))
            }), i || req.onError(e))
        }

        function l() {
            globalDefQueue.length && (apsp.apply(k, [k.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function d(e) {
            delete S[e], delete L[e]
        }

        function f(e, t, n) {
            var i = e.map.id;
            e.error ? e.emit("error", e.error) : (t[i] = !0, each(e.depMaps, function(i, r) {
                var o = i.id,
                    a = getOwn(S, o);
                !a || e.depMatched[r] || n[o] || (getOwn(t, o) ? (e.defineDep(r, I[o]), e.check()) : f(a, t, n))
            }), n[i] = !0)
        }

        function p() {
            var e, t, n = 1e3 * x.waitSeconds,
                o = n && E.startTime + n < (new Date).getTime(),
                a = [],
                s = [],
                c = !1,
                l = !0;
            if (!y) {
                if (y = !0, eachProp(L, function(e) {
                        var n = e.map,
                            u = n.id;
                        if (e.enabled && (n.isDefine || s.push(e), !e.error))
                            if (!e.inited && o) r(u) ? (t = !0, c = !0) : (a.push(u), i(u));
                            else if (!e.inited && e.fetched && n.isDefine && (c = !0, !n.prefix)) return l = !1
                    }), o && a.length) return e = makeError("timeout", "Load timeout for modules: " + a, null, a), e.contextName = E.contextName, u(e);
                l && each(s, function(e) {
                    f(e, {}, {})
                }), o && !t || !c || !isBrowser && !isWebWorker || C || (C = setTimeout(function() {
                    C = 0, p()
                }, 50)), y = !1
            }
        }

        function h(e) {
            hasProp(I, e[0]) || s(a(e[0], null, !0)).init(e[1], e[2])
        }

        function g(e, t, n, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
        }

        function m(e) {
            var t = e.currentTarget || e.srcElement;
            return g(t, E.onScriptLoad, "load", "onreadystatechange"), g(t, E.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function v() {
            var e;
            for (l(); k.length;) {
                if (e = k.shift(), null === e[0]) return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                h(e)
            }
        }
        var y, b, E, w, C, x = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            S = {},
            L = {},
            P = {},
            k = [],
            I = {},
            A = {},
            O = {},
            B = 1,
            T = 1;
        return w = {
            require: function(e) {
                return e.require ? e.require : e.require = E.makeRequire(e.map)
            },
            exports: function(e) {
                return e.usingExports = !0, e.map.isDefine ? e.exports ? I[e.map.id] = e.exports : e.exports = I[e.map.id] = {} : void 0
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(x.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        }, b = function(e) {
            this.events = getOwn(P, e.id) || {}, this.map = e, this.shim = getOwn(x.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, b.prototype = {
            init: function(e, t, n, i) {
                i = i || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, E.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void E.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    })) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                A[e] || (A[e] = !0, E.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id,
                        i = this.depExports,
                        r = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        r = E.execCb(n, o, i, r)
                                    } catch (a) {
                                        e = a
                                    } else r = E.execCb(n, o, i, r);
                                    if (this.map.isDefine && void 0 === r && (t = this.module, t ? r = t.exports : this.usingExports && (r = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", u(this.error = e)
                                } else r = o;
                                this.exports = r, this.map.isDefine && !this.ignore && (I[n] = r, req.onResourceLoad && req.onResourceLoad(E, this.map, this.depMaps)), d(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    t = e.id,
                    i = a(e.prefix);
                this.depMaps.push(i), c(i, "defined", bind(this, function(i) {
                    var r, o, l, f = getOwn(O, this.map.id),
                        p = this.map.name,
                        h = this.map.parentMap ? this.map.parentMap.name : null,
                        g = E.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    return this.map.unnormalized ? (i.normalize && (p = i.normalize(p, function(e) {
                        return n(e, h, !0)
                    }) || ""), o = a(e.prefix + "!" + p, this.map.parentMap), c(o, "defined", bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), l = getOwn(S, o.id), void(l && (this.depMaps.push(o), this.events.error && l.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })), l.enable()))) : f ? (this.map.url = E.nameToUrl(f), void this.load()) : (r = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), r.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(S, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && d(e.map.id)
                        }), u(e)
                    }), r.fromText = bind(this, function(n, i) {
                        var o = e.name,
                            c = a(o),
                            l = useInteractive;
                        i && (n = i), l && (useInteractive = !1), s(c), hasProp(x.config, t) && (x.config[o] = x.config[t]);
                        try {
                            req.exec(n)
                        } catch (d) {
                            return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + d, d, [t]))
                        }
                        l && (useInteractive = !0), this.depMaps.push(c), E.completeLoad(o), g([o], r)
                    }), void i.load(e.name, g, r, x))
                })), E.enable(i, this), this.pluginMaps[i.id] = i
            },
            enable: function() {
                L[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var n, i, r;
                    if ("string" == typeof e) {
                        if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(w, e.id)) return void(this.depExports[t] = r(this));
                        this.depCount += 1, c(e, "defined", bind(this, function(e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && c(e, "error", bind(this, this.errback))
                    }
                    n = e.id, i = S[n], hasProp(w, n) || !i || i.enabled || E.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(S, e.id);
                    t && !t.enabled && E.enable(e, this)
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
        }, E = {
            config: x,
            contextName: e,
            registry: S,
            defined: I,
            urlFetched: A,
            defQueue: k,
            Module: b,
            makeModuleMap: a,
            nextTick: req.nextTick,
            onError: u,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = x.shim,
                    n = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    n[t] ? (x[t] || (x[t] = {}), mixin(x[t], e, !0, !0)) : x[t] = e
                }), e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (O[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function(e, n) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = E.makeShimExports(e)), t[n] = e
                }), x.shim = t), e.packages && each(e.packages, function(e) {
                    var t, n;
                    e = "string" == typeof e ? {
                        name: e
                    } : e, n = e.name, t = e.location, t && (x.paths[n] = e.location), x.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(S, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = a(t))
                }), (e.deps || e.callback) && E.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, r) {
                function o(n, i, c) {
                    var l, d, f;
                    return r.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0), "string" == typeof n ? isFunction(i) ? u(makeError("requireargs", "Invalid require call"), c) : t && hasProp(w, n) ? w[n](S[t.id]) : req.get ? req.get(E, n, t, o) : (d = a(n, t, !1, !0), l = d.id, hasProp(I, l) ? I[l] : u(makeError("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), E.nextTick(function() {
                        v(), f = s(a(null, t)), f.skipMap = r.skipMap, f.init(n, i, c, {
                            enabled: !0
                        }), p()
                    }), o)
                }
                return r = r || {}, mixin(o, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var i, r = e.lastIndexOf("."),
                            o = e.split("/")[0],
                            a = "." === o || ".." === o;
                        return -1 !== r && (!a || r > 1) && (i = e.substring(r, e.length), e = e.substring(0, r)), E.nameToUrl(n(e, t && t.id, !0), i, !0)
                    },
                    defined: function(e) {
                        return hasProp(I, a(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = a(e, t, !1, !0).id, hasProp(I, e) || hasProp(S, e)
                    }
                }), t || (o.undef = function(e) {
                    l();
                    var n = a(e, t, !0),
                        r = getOwn(S, e);
                    i(e), delete I[e], delete A[n.url], delete P[e], eachReverse(k, function(t, n) {
                        t[0] === e && k.splice(n, 1)
                    }), r && (r.events.defined && (P[e] = r.events), d(e))
                }), o
            },
            enable: function(e) {
                var t = getOwn(S, e.id);
                t && s(e).enable()
            },
            completeLoad: function(e) {
                var t, n, i, o = getOwn(x.shim, e) || {},
                    a = o.exports;
                for (l(); k.length;) {
                    if (n = k.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    h(n)
                }
                if (i = getOwn(S, e), !t && !hasProp(I, e) && i && !i.inited) {
                    if (!(!x.enforceDefine || a && getGlobal(a))) return r(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
                    h([e, o.deps || [], o.exportsFn])
                }
                p()
            },
            nameToUrl: function(e, t, n) {
                var i, r, o, a, s, c, u, l = getOwn(x.pkgs, e);
                if (l && (e = l), u = getOwn(O, e)) return E.nameToUrl(u, t, n);
                if (req.jsExtRegExp.test(e)) s = e + (t || "");
                else {
                    for (i = x.paths, r = e.split("/"), o = r.length; o > 0; o -= 1)
                        if (a = r.slice(0, o).join("/"), c = getOwn(i, a)) {
                            isArray(c) && (c = c[0]), r.splice(0, o, c);
                            break
                        }
                    s = r.join("/"), s += t || (/^data\:|\?/.test(s) || n ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : x.baseUrl) + s
                }
                return x.urlArgs ? s + ((-1 === s.indexOf("?") ? "?" : "&") + x.urlArgs) : s
            },
            load: function(e, t) {
                req.load(E, e, t)
            },
            execCb: function(e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = m(e);
                    E.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = m(e);
                return r(t.id) ? void 0 : u(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, E.require = E.makeRequire(), E
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            return "interactive" === e.readyState ? interactiveScript = e : void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.14",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, i) {
            var r, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = i) : e = []), o && o.context && (a = o.context), r = getOwn(contexts, a), r || (r = contexts[a] = req.s.newContext(a)), o && r.configure(o), r.require(e, t, n)
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
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
            var i = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return i.type = e.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i
        }, req.load = function(e, t, n) {
            var i, r = e && e.config || {};
            if (isBrowser) return i = req.createNode(r, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
            if (isWebWorker) try {
                importScripts(n), e.completeLoad(t)
            } catch (o) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, o, [t]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
            return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
        }), define = function(e, t, n) {
            var i, r;
            "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (i = currentlyAddingScript || getInteractiveScript(), i && (e || (e = i.getAttribute("data-requiremodule")), r = contexts[i.getAttribute("data-requirecontext")])), (r ? r.defQueue : globalDefQueue).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this), define("requireJs", function() {}), define("requireDomReady", [], function() {
        "use strict";

        function e(e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t](u)
        }

        function t() {
            var t = l;
            c && t.length && (l = [], e(t))
        }

        function n() {
            c || (c = !0, a && clearInterval(a), t())
        }

        function i(e) {
            return c ? e(u) : l.push(e), i
        }
        var r, o, a, s = "undefined" != typeof window && window.document,
            c = !s,
            u = s ? document : null,
            l = [];
        if (s) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
            else if (window.attachEvent) {
                window.attachEvent("onload", n), o = document.createElement("div");
                try {
                    r = null === window.frameElement
                } catch (d) {}
                o.doScroll && r && window.external && (a = setInterval(function() {
                    try {
                        o.doScroll(), n()
                    } catch (e) {}
                }, 30))
            }
            "complete" === document.readyState && n()
        }
        return i.version = "2.0.1", i.load = function(e, t, n, r) {
            r.isBuild ? n(null) : i(n)
        }, i
    }), define("core/adkitAPI", [], function() {
        var e = !1,
            t = null,
            n = null,
            i = function(i) {
                e = !0, t = i, n = t.getClient();
                var r = document.createEvent("HTMLEvents");
                r.initEvent("adkit-ready", !1, !1), window.dispatchEvent(r)
            };
        return adkit.ActionType = {
            USER: "user",
            AUTO: "auto"
        }, adkit.Animation = {
            Easing: {
                LINEAR: "linear",
                EASE_IN: "ease-in",
                EASE_OUT: "ease-out",
                EASE_IN_OUT: "ease-in-out"
            }
        }, adkit.onReady = function(t) {
            e ? t() : window.addEventListener("adkit-ready", t)
        }, adkit.$ = function(e) {
            return adkit.select(e)
        }, adkit.select = function(e) {
            return t ? t.getItemById(e) : null
        }, adkit.setCurrentContainer = function(e) {
            t && t.setCurrentContainer(e)
        }, adkit.addItem = function(e, n) {
            t && t.addItem(e, n)
        }, adkit.loadComponents = function(e, n) {
            t && t.loadComponents(e, n)
        }, adkit.getServingParams = function() {
            return n ? n.getServingParams() : null
        }, adkit.getAdInfo = function() {
            return t ? t.getAdInfo() : null
        }, adkit.getComponentsByType = function(e) {
            return t ? t.getComponentsByType(e) : null
        }, adkit.getSVData = function(e) {
            return n ? n.getSVData(e) : null
        }, adkit.clickedVersion = function(e, t) {
            n && n.clickedVersion(e, t)
        }, adkit.getVersions = function() {
            n && n.getVersions.apply(n, arguments)
        }, adkit.getVersionCount = function() {
            return n ? n.getVersionCount() : null
        }, adkit.getMinVersions = function() {
            return n ? n.getMinVersions() : null
        }, adkit.getVersionDataByKey = function(e, t, i) {
            n && n.getVersionDataByKey(e, t, i)
        }, adkit.expand = function() {
            n && n.expand.apply(n, arguments)
        }, adkit.userSwipe = function() {
            n && n.userSwipe()
        }, adkit.collapse = function() {
            n && n.collapse.apply(n, arguments)
        }, adkit.clickThrough = function() {
            n && n.clickThrough.apply(n, arguments)
        }, adkit.clickthrough = adkit.clickThrough, adkit.customInteraction = function(e, t) {
            n && n.customInteraction.apply(n, arguments)
        }, adkit.onExpand = function(e) {
            n && n.onExpand(e)
        }, adkit.onCollapse = function(e) {
            n && n.onCollapse(e)
        }, adkit.draw = function() {
            t && t.draw()
        }, adkit.getPanelInfoById = function(e) {
            return t ? t.getPanelInfoById(e) : null
        }, adkit.getBannerInfoById = function(e) {
            return t ? t.getBannerInfoById(e) : null
        }, adkit.onVisibilityChanged = function(e) {
            n && n.onVisibilityChanged(e)
        }, adkit.hideBanner = function() {
            n && n.hideBanner()
        }, adkit.showBanner = function() {
            n && n.showBanner()
        }, adkit.hidePanel = function(e) {
            n && n.hidePanel(e)
        }, adkit.showPanel = function(e) {
            n && n.showPanel(e)
        }, adkit.onResize = function(e) {
            t.onResize(e)
        }, adkit.getStage = function() {
            return t.getStage()
        }, Object.defineProperty(adkit, "vpaid", {
            get: function() {
                return n ? n.vpaid : void 0
            }
        }), {
            notifyReady: i
        }
    }), define("utils/stringUtils", [], function() {
        var e = function(e) {
                return "string" == typeof e ? e.replace(/^\s+|\s+$/g, "") : e
            },
            t = function(e, t) {
                for (var n = e, i = 0; i < t.length; i++) {
                    var r = new RegExp("\\{" + i + "\\}", "gm");
                    n = n.replace(r, t[i])
                }
                return n
            };
        return {
            trim: e,
            formatString: t
        }
    }), define("utils/objectUtils", [], function() {
        var e = function(e, t) {
                var n = Object.create(e);
                return Object.keys(t).forEach(function(e) {
                    n[e] = t[e]
                }), n
            },
            t = function(e) {
                if (e)
                    for (var t in e) null == e[t] && delete e[t]
            },
            n = function(e) {
                return 0 === Object.keys(e).length
            },
            i = function(e, t) {
                var n = [{}, {}];
                return null != e && Object.keys(e).forEach(function(i) {
                    t.indexOf(i) > -1 ? n[1][i] = e[i] : n[0][i] = e[i]
                }), n
            },
            r = function(e) {
                var t = null;
                if (e) {
                    t = {};
                    for (var n = Object.keys(e), i = n.length; i--;) {
                        var o = n[i];
                        t[o] instanceof Object ? t[o.toLowerCase()] = r(e[o], !0) : t[o.toLowerCase()] = e[o]
                    }
                }
                return t
            },
            o = function() {
                var e = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                };
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            },
            a = function(e) {
                return "string" == typeof e
            },
            s = function(e) {
                return "function" == typeof e
            },
            c = function(e) {
                return e instanceof Object
            },
            u = function(e) {
                return e instanceof Array
            };
        return {
            create: e,
            removeUndefinedProperties: t,
            lowerCaseProperties: r,
            generateGUID: o,
            isEmpty: n,
            splitProperties: i,
            isString: a,
            isObject: c,
            isArray: u,
            isFunction: s
        }
    }), define("utils/urlUtils", ["utils/objectUtils"], function(e) {
        var t = function(e, t) {
                return e.replace(/^\w+:\/\//, t + "://")
            },
            n = function(t) {
                return e.isString(t) ? 0 == t.search(/^http:\/\//) : void 0
            },
            i = function(t) {
                return e.isString(t) ? 0 == t.search(/^https:\/\//) : void 0
            },
            r = function(t) {
                return e.isString(t) ? 0 == t.search(/^https?:\/\//) : void 0
            },
            o = function(t) {
                return e.isString(t) ? 0 != t.search(/^(https?:|\/\/)/) : void 0
            },
            a = function(t) {
                return e.isString(t) ? 0 != t.search(/^\/\//) : void 0
            },
            s = function(t) {
                if (e.isString(t)) {
                    var n = t.match(/[^\/?#&:=]+(\.[^\/:?#&;=.]+)((\?|\#).*)?$/);
                    if (n) return n[1]
                }
            },
            c = function(t) {
                return e.isString(t) && 0 != t.indexOf("http") ? "http://" + t : t
            },
            u = function(t) {
                return e.isString(t) ? encodeURI(t) : t
            };
        return {
            hasHttpProtocol: n,
            hasProtocol: r,
            hasHttpsProtocol: i,
            getExtension: s,
            fixURL: c,
            escapeUrl: u,
            isPageRelative: o,
            changeProtocol: t,
            isProtocolRelative: a
        }
    }), define("utils/environmentUtils", [], function() {
        var e = function() {
                return navigator.userAgent.match(/iPad/i) ? !0 : !1
            },
            t = function() {
                return "https:" === window.location.protocol
            },
            n = function() {
                var e = window.navigator.userAgent,
                    t = e.indexOf("MSIE ");
                if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
                var n = e.indexOf("Trident/");
                if (n > 0) {
                    var i = e.indexOf("rv:");
                    return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10)
                }
                var r = e.indexOf("Edge/");
                return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : !1
            },
            i = function() {
                return /iPad|iPhone|iPod/.test(window.navigator.userAgent)
            },
            r = function() {
                return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
            };
        return {
            isIPad: e,
            isIE: n,
            isSecured: t,
            isSafari: r,
            isIOS: i
        }
    }), define("infra/logger", [], function() {
        var e = 0,
            t = !1,
            n = function(n) {
                t && (n += " " + i()), 0 == e && !window.console
            },
            i = function() {
                var e = new Date,
                    t = e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + ":" + e.getMilliseconds();
                return t
            };
        return {
            debugLevel: e,
            addTimeStamp: t,
            log: n
        }
    }), define("core/client/assetsHelper", ["utils/stringUtils", "utils/urlUtils", "utils/environmentUtils", "infra/logger"], function(e, t, n, i) {
        var r = function(e, t) {
                return EB.getAssetUrl(e, t)
            },
            o = function(e) {
                var t = r(e, "");
                return t === e && (t = r("assets/" + e, "")), t
            },
            a = function(e) {
                return r("", e)
            },
            s = function(n) {
                var i, r = e.trim(n);
                if ("" === r) i = null;
                else {
                    var s = parseInt(r);
                    i = s == r ? a(s) : t.isPageRelative(r) ? o(r) : c(r)
                }
                return i
            },
            c = function(e) {
                return e
            },
            u = function(e) {
                var t, n = typeof e;
                switch (n) {
                    case "number":
                        t = a(e);
                        break;
                    case "object":
                        t = r(e);
                        break;
                    case "string":
                        t = s(e)
                }
                return t
            },
            l = function(e) {
                var t = [];
                for (var n in e) t.push(u(e[n]));
                return t
            },
            d = function(e) {
                var t;
                return t = "number" == typeof e || parseInt(e) == e ? EB.getAssetProps(null, e) : EB.getAssetProps(e)
            };
        return {
            parseAsset: u,
            parseAssets: l,
            getAssetInfo: d
        }
    }), define("infra/dataObjectList", [], function() {
        function e() {
            this.dataObjectsMap = {}, this.dataObjectsArray = []
        }
        return e.prototype.addDataObject = function(e) {
            if (e) {
                var t = this.dataObjectsMap[e.getSignature()];
                null != t ? this.dataObjectsArray[t] = e : (this.dataObjectsArray.push(e), this.dataObjectsMap[e.getSignature()] = this.dataObjectsArray.length - 1)
            }
        }, e.prototype.clone = function() {
            var t = new e;
            return this.dataObjectsArray.forEach(function(e) {
                t.addDataObject(e)
            }), t
        }, e.prototype.getDataObjectBySignature = function(e) {
            return this.dataObjectsArray[this.dataObjects[e]]
        }, e.prototype.some = function(e) {
            this.dataObjectsArray.some(e)
        }, e
    }), define("core/client/clientManager", ["core/client/assetsHelper", "infra/dataObjectList", "utils/objectUtils", "infra/logger"], function(e, t, n, i) {
        var r = {
                SV: 1,
                SVCAT: 2,
                VPAID: 3
            },
            o = null,
            a = null,
            s = null,
            c = {},
            u = 0,
            l = !1,
            d = new t,
            f = function() {
                "undefined" == typeof EBModulesToLoad && (EBModulesToLoad = []);
                var e = EBModulesToLoad;
                (o.usingVideo || o.vpaid) && -1 === e.indexOf("Video") && e.push("Video"), o.usingSV && -1 === e.indexOf("SV") && (e.push("SV"), c[r.SV] = "core/client/svModule"), o.usingSVCatalog && -1 === e.indexOf("SVCAT") && (e.push("SVCAT"), c[r.SVCAT] = "core/client/catalogModule"), o.vpaid && -1 === e.indexOf("VPAID") && (e.push("VPAID"), c[r.VPAID] = "core/client/vpaidModule"), u = Object.keys(c).length
            },
            p = function() {
                return s
            },
            h = function() {
                if (!l) {
                    l = !0;
                    for (var e in c) {
                        var t = c[e];
                        t && t.handleCreativeReady && t.handleCreativeReady()
                    }
                }
            },
            g = function() {
                var e = c[r.SV];
                if (e) {
                    var t = e.getDataObject();
                    t && d.addDataObject(t)
                }
            },
            m = function() {
                H.clickThrough = EB.clickthrough.bind(EB), H.userSwipe = EB.userSwipe.bind(EB), H.isMobileDevice = EB.isMobileDevice.bind(EB)
            },
            v = function() {
                m(), g(), a && a()
            },
            y = function() {
                --u <= 0 && v()
            },
            b = function() {
                var e = ["client"];
                for (var t in c) e.push(c[t]), c[t] = null;
                return e
            },
            E = function() {
                return d
            },
            w = function() {
                var e = c[r.SVCAT];
                return e ? e.getDataProvider() : void 0
            },
            C = function() {
                for (var e in c) {
                    var t = c[e];
                    t && t.init(o, H, y)
                }
            },
            x = function(e) {
                s = e, 0 === u ? v() : C()
            },
            S = function(e) {
                for (var t = 1; t < e.length; t++) {
                    var n = e[t];
                    n && (c[r[n.id]] = n)
                }
            },
            L = function() {
                EB.collapse()
            },
            P = function() {
                var e = b();
                require(e, function() {
                    S(arguments), EB.addEventListener(EBG.EventName.collapseAd, L), EB.notifyCreativeWhenReady ? EB.notifyCreativeWhenReady(x) : EB.isInitialized() ? x() : EB.addEventListener(EBG.EventName.EB_INITIALIZED, x)
                })
            },
            k = function(e, t) {
                o = e, a = t, null == window.EB && (f(), P())
            },
            I = function(t) {
                return e.getAssetInfo(t)
            },
            A = function(t) {
                return e.parseAsset(t)
            },
            O = function(t) {
                return e.parseAssets(t)
            },
            B = function(e, t) {
                EB.userActionCounter.apply(EB, arguments)
            },
            T = function(e) {
                return new EBG.VideoModule(e)
            },
            R = function() {
                var e = null;
                arguments[0] instanceof Object ? (objects = n.splitProperties(arguments[0], ["background", "closeButton"]), e = objects[0], n.isEmpty(objects[1]) || (e.userData = objects[1], e.userData.id = "adKitExpand")) : null != arguments[0] && (e = {
                    panelName: arguments[0]
                }, arguments[1] && (e.actionType = arguments[1] ? EBG.ActionType.USER : EBG.ActionType.AUTO)), (e.actionType !== EBG.ActionType.AUTO || !EB.isAutoExpandEnabled || EB.isAutoExpandEnabled()) && EB.expand(e)
            },
            j = function() {
                var e = null;
                e = null == arguments[0] || arguments[0] instanceof Object ? arguments[0] : {
                    panelName: arguments[0]
                }, EB.collapse(e)
            },
            D = function(e) {
                EB.addEventListener(EBG.EventName.EXPAND, e)
            },
            U = function(e) {
                EB.addEventListener(EBG.EventName.COLLAPSE, e)
            },
            N = function() {
                EB.hideAdPart({
                    adPart: EBG.adParts.BANNER
                })
            },
            M = function() {
                EB.showAdPart({
                    adPart: EBG.adParts.BANNER
                })
            },
            q = function(e) {
                EB.hideAdPart({
                    adPart: EBG.adParts.PANEL,
                    panelName: e
                })
            },
            F = function(e) {
                EB.showAdPart({
                    adPart: EBG.adParts.PANEL,
                    panelName: e
                })
            },
            V = function(e) {
                function t(t, n) {
                    i && (clearTimeout(i), i = null);
                    var r = {
                        percentage: t
                    };
                    n ? i = setTimeout(function() {
                        i = null, e(r)
                    }, 0) : e(r)
                }
                var n = EB.getVisibilityData(),
                    i = null,
                    r = n && n.available,
                    o = r ? n.percentage : 100;
                o && t(o, !0), r && EB.addEventListener(EBG.EventName.VISIBILITY, function(e) {
                    EB.visibilityAssetId === e.data.assetId && t(e.data.percentage)
                })
            },
            z = function() {
                return EB.getAdProperty("geoData")
            };
        i.log("client manager loaded");
        var H = {
            init: k,
            expand: R,
            collapse: j,
            getServingParams: p,
            getDataObjects: E,
            registerVideo: T,
            getCatalogDataProvider: w,
            getAssetUrl: A,
            getAssetsUrl: O,
            customInteraction: B,
            onExpand: D,
            onCollapse: U,
            onVisibilityChanged: V,
            handleCreativeReady: h,
            hideBanner: N,
            showBanner: M,
            hidePanel: q,
            showPanel: F,
            getDeviceLocation: z,
            getAssetInfo: I
        };
        return H
    }), define("utils/domUtils", [], function() {
        function e(e, t, n) {
            var i;
            return function() {
                var r = this,
                    o = arguments,
                    a = function() {
                        i = null, e.apply(r, o)
                    },
                    s = n && !i;
                clearTimeout(i), i = setTimeout(a, t), s && e.apply(r, o)
            }
        }
        var t = document.createElement("div"),
            n = document.documentElement,
            i = function(e, t) {
                return t ? document.createElementNS(t, e) : document.createElement(e)
            },
            r = function(e, t) {
                var n = null;
                if (e && t)
                    for (var i = e.getElementsByTagName("*"), r = i.length, o = 0; r > o; o++)
                        if (i[o].getAttribute(t.attribute) === t.value) {
                            n = i[o];
                            break
                        }
                return n
            },
            o = function(e, t) {
                var n = null;
                return n = t ? r(t, {
                    attribute: "id",
                    value: e
                }) : document.getElementById(e)
            },
            a = function(e, t) {
                e && t && e.appendChild(t)
            },
            s = function(e, t) {
                for (; t.childNodes.length > 0;) a(e, t.childNodes[0])
            },
            c = function(e, t) {
                e && t && e.removeChild(t)
            },
            u = function(e) {
                var t = U("head") || n;
                c(t, e)
            },
            l = function(e) {
                e && (e.innerHTML = "")
            },
            d = function(e) {
                var t = o(e);
                l(t)
            },
            f = function(e, t) {
                e && t && (e.innerHTML = t)
            },
            p = function(e, t) {
                e && t && (e.textContent = t)
            },
            h = function(e, t) {
                e && t && (e.id = t)
            },
            g = function(e) {
                e && (e.style.visibility = "hidden")
            },
            m = function(e) {
                e && (e.style.visibility = "visible")
            },
            v = function(e) {
                return e ? e.clientWidth : void 0
            },
            y = function(e) {
                return e ? e.clientHeight : void 0
            },
            b = function(e) {
                return e ? e.offsetWidth : void 0
            },
            E = function(e) {
                return e ? e.offsetHeight : void 0
            },
            w = function(e, t) {
                if (e && t) {
                    var n = window.getComputedStyle(e);
                    return n.getPropertyValue(t)
                }
            },
            C = function(e, t) {
                return e && t ? e[t] : void 0
            },
            x = function(e, t) {
                if (e && t)
                    for (var n in t) e.style[n] = t[n]
            },
            S = function(e, t) {
                if (e && t)
                    if ("string" == typeof t) e.className ? e.className = e.className + " " + t : e.className = t;
                    else if (t instanceof Array)
                    for (var n in t) e.className ? e.className = e.className + " " + t[n] : e.className = t[n]
            },
            L = function(e, t) {
                if (e && t)
                    if (e.classList) e.classList.remove(t);
                    else if (e.className) {
                    var n = e.className.split(" ");
                    n.splice(n.indexOf(t), 1), e.className = n.join(" ")
                }
            },
            P = function(e, t) {
                e && t && (e.className = "", S(e, t))
            },
            k = function(e, t) {
                if (e && t)
                    for (var n in t) e[n] = t[n]
            },
            I = function(e) {
                var t = 0,
                    n = 0;
                return n = e.offsetLeft, t = e.offsetTop, {
                    top: t,
                    left: n
                }
            },
            A = function(e, t, n) {
                e && t && n && e.addEventListener && e.addEventListener(t, n)
            },
            O = function(e, t, n) {
                t.forEach(function(t) {
                    A(e, t, n)
                })
            },
            B = function(e, t, n) {
                e && t && n && e.removeEventListener && e.removeEventListener(t, n)
            },
            T = function(e) {
                return e ? "hidden" !== e.style.visibility : void 0
            },
            R = function(e, t, n) {
                e && t && n && (e.style[t] = n)
            },
            j = function(e, t) {
                if (e && t)
                    for (var n in t) e.setAttribute(n, t[n])
            },
            D = function(e, t, n) {
                t.insertBefore(e, n)
            },
            U = function(e) {
                return N(e)[0]
            },
            N = function(e) {
                return document.getElementsByTagName(e)
            },
            M = function(e) {
                var t = U("head") || n;
                a(t, e)
            },
            q = function(e) {
                return e in n.style
            },
            F = function(e, n, i) {
                return t.style[e] = n, "undefined" == typeof i && (i = n), t.style[e].indexOf(i) > -1
            },
            V = function(e) {
                return document.createTextNode(e)
            },
            z = function(e, t) {
                if (e && t) {
                    t(e);
                    var n = e.children;
                    if (n.length)
                        for (var i = 0; i < n.length; i++) z(n[i], t)
                }
            },
            H = function(e, t, n) {
                var i = null;
                return e && (i = e.cloneNode(t)), n && z(i, function(e) {
                    e.id && (e.id += "_" + n)
                }), i
            },
            W = function(e, t, n, i) {
                var r = document.createEvent("HTMLEvents"),
                    o = "boolean" == typeof i ? i : !1;
                r.initEvent(t, o, !1), r.data = n, e.dispatchEvent(r)
            },
            G = function(e, t) {
                return e.getAttribute(t)
            },
            _ = function(e, t, n) {
                return e.setAttribute(t, n)
            },
            K = function(e) {
                var t = !1;
                do {
                    if (!e) break;
                    if (e === document) {
                        t = !0;
                        break
                    }
                    if (!e.parentNode) break;
                    var n = window.getComputedStyle(e);
                    if (null == n || "none" == n.display || "hidden" == n.visibility || 0 == n.opacity) break;
                    if ("fixed" == n.position) {
                        t = !0;
                        break
                    }
                    var i = e.parentNode;
                    do {
                        if (i === document) {
                            t = !0;
                            break
                        }
                        var r = window.getComputedStyle(i);
                        if ("hidden" == r.overflow) {
                            var o = e.getBoundingClientRect(),
                                a = i.getBoundingClientRect();
                            if (o.right <= a.left || o.left >= a.right || o.bottom <= a.top || o.top >= a.bottom) break
                        }
                        if ("fixed" == r.position) {
                            t = !0;
                            break
                        }
                    } while (i = i.parentNode)
                } while (!1);
                return t
            };
        return {
            createElement: i,
            getElementById: o,
            insertElementIntoContainer: a,
            removeElementFromContainer: c,
            removeElementFromHead: u,
            clearElementContent: l,
            clearElementContentById: d,
            setElementHtmlContent: f,
            setElementTextContent: p,
            setElementId: h,
            hideElement: g,
            showElement: m,
            getElementWidth: v,
            getElementHeight: y,
            getElementContentWidth: b,
            getElementContentHeight: E,
            getCssProperty: w,
            applyStyle: x,
            addClass: S,
            removeClass: L,
            applyElementProperties: k,
            getOffsetSum: I,
            bindEvent: A,
            isVisible: T,
            setCssProperty: R,
            setClass: P,
            bindEvents: O,
            unbindEvent: B,
            applyElementAttributes: j,
            insertElementBefore: D,
            getElementByTagName: U,
            getElementsByTagName: N,
            insertElementToHead: M,
            isStylePropertySupported: q,
            isStyleValueSupported: F,
            dispatchEvent: W,
            createTextNode: V,
            cloneElement: H,
            getElementProperty: C,
            insertElementContentIntoContainer: s,
            setElementAttribute: _,
            getElementAttribute: G,
            isElementVisible: K,
            debounce: e
        }
    }), define("utils/styleUtils", ["utils/domUtils", "utils/objectUtils"], function(e, t) {
        var n = function(e, t, n) {
                var i = "";
                if (n && t && e) {
                    i += "#" + e + " ." + t + "{";
                    for (var r in n) i += r + ": " + n[r] + ";";
                    i += "}"
                }
                return i
            },
            i = function(t) {
                var n = e.createElement("style");
                e.applyElementProperties(n, {
                    type: "text/css"
                });
                var i = e.getElementProperty(n, "styleSheet");
                if (i) i.cssText = t;
                else {
                    var r = e.createTextNode(t);
                    r && e.insertElementIntoContainer(n, r)
                }
                return e.insertElementToHead(n), n
            },
            r = function(t, n) {
                var i = e.getElementProperty(t, "styleSheet");
                i ? i.cssText = n : t.replaceChild(e.createTextNode(n), t.firstChild)
            },
            o = function(e, t, r) {
                var o = n(e, t, r);
                return i(o)
            },
            a = function(e, t) {
                return window.getComputedStyle(e, null)
            },
            s = function(e, t) {
                return a(e).getPropertyValue(t)
            },
            c = function(n) {
                var r = "forceVisibility-" + t.generateGUID(),
                    o = "." + r + " *{visibility:inherit!important;}";
                i(o), e.addClass(n, [r])
            };
        return {
            updateStyle: r,
            createStyleFromScript: i,
            createStyleFromClass: o,
            getComputedStyleProperty: s,
            inheritVisibility: c
        }
    }), define("utils/graphicUtils", ["utils/domUtils", "utils/urlUtils", "utils/objectUtils", "infra/logger"], function(e, t, n, i) {
        function r(e) {
            var t = a(e);
            return t && o(t, e.sources, e.type), t
        }

        function o(t, n, i) {
            n && n.forEach(function(n) {
                var r = g(i, n);
                if (r) {
                    var o = m(n, r);
                    e.insertElementIntoContainer(t, o)
                }
            })
        }

        function a(t) {
            var i;
            return n.removeUndefinedProperties(t.elementProperties), n.removeUndefinedProperties(t.elementAttributes), n.removeUndefinedProperties(t.styleProperties), i = e.createElement(t.type, t.namespace), i && (e.setElementId(i, t.elementId), e.applyElementProperties(i, t.elementProperties), e.applyElementAttributes(i, t.elementAttributes), e.applyStyle(i, t.styleProperties), e.addClass(i, t.classArray), e.setElementTextContent(i, t.textContent)), i
        }

        function s(e) {
            return e.type = "div", a(e)
        }

        function c(e) {
            return e.type = "span", a(e)
        }

        function u(e) {
            return e.type = "a", a(e)
        }

        function l(e) {
            return e.type = "img", a(e)
        }

        function d(e) {
            return e.type = "script", a(e)
        }

        function f(e, t) {
            return !e || 0 != e.indexOf("#") && 7 != e.length ? e : (t || (t = "1"), "rgba(" + parseInt("0x" + e.substr(1, 2)) + "," + parseInt("0x" + e.substr(3, 2)) + "," + parseInt("0x" + e.substr(5, 2)) + "," + t + ")")
        }

        function p(e) {
            var t;
            if (e) {
                var n = O[e.direction || "up"];
                t = "background:" + e.startColor + ";background: linear-gradient(" + n[0] + ", " + e.startColor + " " + e.startPercent + "%," + e.endColor + " " + e.endPercent + "%);background: -moz-linear-gradient(" + n[1] + ", " + e.startColor + " " + e.startPercent + "%," + e.endColor + " " + e.endPercent + "%);background: -webkit-linear-gradient(" + n[1] + ", " + e.startColor + " " + e.startPercent + "%," + e.endColor + " " + e.endPercent + "%);background: -o-linear-gradient(" + n[1] + ", " + e.startColor + " " + e.startPercent + "%," + e.endColor + " " + e.endPercent + "%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=" + e.startColor + ", endColorstr=" + e.endColor + ",GradientType=" + n[2] + " );"
            }
            return t
        }

        function h(t) {
            var n = e.createElement("style");
            if (t && t.elementIdentifier) {
                var i = t.elementIdentifier;
                t.selector && (i = i + ":" + t.selector);
                var r = "";
                for (var o in t.elementProperties) r = r + " " + o + ":" + t.elementProperties[o] + ";";
                i = i + "{" + r + "}";
                var a = e.createTextNode(i);
                e.insertElementIntoContainer(n, a)
            }
            return n
        }

        function g(e, n) {
            var i = t.getExtension(n);
            if (i) {
                var r = A[e][i];
                if (r) return e + "/" + r
            }
        }

        function m(t, n) {
            var i = e.createElement("source");
            return i.src = t, i.type = n, i
        }

        function v(e) {
            e.type = "svg", e.namespace = I;
            var t = a(e);
            return t.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), t
        }

        function y(e) {
            return e.type = "polyline", e.namespace = I, a(e)
        }

        function b(e) {
            return e.type = "circle", e.namespace = I, a(e)
        }

        function E(e) {
            return e.type = "rect", e.namespace = I, a(e)
        }

        function w(t, n) {
            switch (n) {
                case "center":
                    e.applyStyle(t, {
                        top: "50%",
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%, -50%)",
                        "-webkit-transform": "translate(-50%, -50%)",
                        "-ms-transform": "translate(-50%, -50%)"
                    });
                    break;
                case "topCenter":
                    e.applyStyle(t, {
                        top: "0",
                        left: "50%",
                        position: "absolute",
                        transform: "translateX(-50%)",
                        "-webkit-transform": "translateX(-50%)",
                        "-ms-transform": "translateX(-50%, -50%)"
                    })
            }
        }

        function C(t, n, i) {
            if ("fit" === i) {
                var r, o, a = window.getComputedStyle(t),
                    s = {},
                    c = parseInt(a.width) / parseInt(a.height);
                if ("VIDEO" === n.tagName) r = parseInt(n.videoWidth), o = parseInt(n.videoHeight);
                else if ("IMG" === n.tagName) r = n.width, o = n.height;
                else {
                    var u = window.getComputedStyle(n);
                    r = u.width, o = u.height
                }
                var l = r / o;
                c > l ? (s.height = "100%", s.width = "auto") : (s.width = "100%", s.height = "auto"), e.applyStyle(n, s)
            }
        }

        function x() {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
        }

        function S(e) {
            return x() === e
        }

        function L(e, t) {
            e.style[T] = e.style[R] = e.style[j] = "scale(" + t + ")"
        }

        function P(e, t, n) {
            e.style[D] = e.style[U] = e.style[N] = t + " " + n
        }

        function k() {
            M || (e.bindEvents(document, B, function() {
                var e = x();
                if (e) q = {
                    ref: e
                }, q[T] = e.style[T], q[R] = e.style[R], q[j] = e.style[j], e.style[T] = "", e.style[R] = "", e.style[j] = "";
                else if (q) {
                    var t = q.ref;
                    t.style[T] = q[T], t.style[R] = q[R], t.style[j] = q[j], q = null
                }
            }), M = !0)
        }
        var I = "http://www.w3.org/2000/svg",
            A = {
                video: {
                    ".mp4": "mp4",
                    ".webm": "webm",
                    ".ogg": "ogg",
                    ".ogv": "ogg"
                },
                audio: {
                    ".mp3": "mpeg",
                    ".ogg": "ogg",
                    ".wav": "wav"
                }
            },
            O = {
                down: ["to bottom", "top", 0],
                up: ["to top", "bottom", 0],
                left: ["to left", "right", 1],
                right: ["to right", "left", 1]
            },
            B = ["webkitfullscreenchange", "mozfullscreenchange", "fullscreenchange", "msfullscreenchange", "MSFullscreenChange"],
            T = "-webkit-transform",
            R = "-ms-transform",
            j = "transform",
            D = "-webkit-transform-origin",
            U = "-ms-transform-origin",
            N = "transform-origin",
            M = !1,
            q = null;
        return {
            buildMedia: r,
            buildDiv: s,
            buildSpan: c,
            buildA: u,
            buildImg: l,
            buildScript: d,
            getRGBA: f,
            getBGGradient: p,
            buildStyle: h,
            buildSVG: v,
            buildSVGPolyline: y,
            buildSVGCircle: b,
            buildSVGRect: E,
            alignElement: w,
            fitElementInContainer: C,
            isInFullScreen: S,
            getFullScreenElement: x,
            fixFullScreenVideo: k,
            scale: L,
            setTransformOrigin: P
        }
    }), define("core/responsiveStyle", ["utils/domUtils", "utils/graphicUtils"], function(e, t) {
        var n = null,
            i = null,
            r = null,
            o = function(e, t, o) {
                n = e, i = t, r = o
            },
            a = function(t, n, i, r) {
                if (t) {
                    n || (n = "center");
                    var o = s(n, i, r);
                    e.applyStyle(t, o)
                }
            },
            s = function(e, t, i) {
                var r = {};
                switch (e) {
                    case "center":
                        t && i && n.adPart.containerHeight && n.adPart.containerWidth && (r.top = (parseInt(n.adPart.containerHeight) - parseInt(t)) / 2 + "px", r.left = (parseInt(n.adPart.containerWidth) - parseInt(i)) / 2 + "px");
                        break;
                    case "topRight":
                        r.top = "0px", r.right = "0px";
                        break;
                    case "topLeft":
                        r.top = "0px", r.left = "0px";
                        break;
                    case "bottomRight":
                        r.bottom = "0px", r.right = "0px";
                        break;
                    case "bottomLeft":
                        r.bottom = "0px", r.left = "0px"
                }
                return r
            },
            c = function(n, i, r) {
                n && e.setCssProperty(n, "background-color", t.getRGBA(i, r))
            },
            u = function(e, n, i, r, o, a) {
                e && (e.style.cssText += t.getBGGradient({
                    startColor: n,
                    endColor: i,
                    startPercent: r,
                    endPercent: o,
                    direction: a
                }))
            },
            l = function(t, n, r) {
                if (t) {
                    var o = e.createElement("div"),
                        a = {
                            "z-index": "-2147483638",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: "100%",
                            opacity: r
                        };
                    e.applyStyle(o, a), e.setCssProperty(o, "background-image", "url('" + i.getAssetUrl(n) + "')"), e.insertElementBefore(o, t, t.firstChild)
                }
            },
            d = function(e, n) {
                if (e) {
                    if (n) switch (n.type) {
                        case "solidColor":
                        case "solid":
                            if (n.color) return void c(e, n.color, n.opacity);
                        case "gradientColor":
                        case "gradient":
                            if (n.colors.length > 1) {
                                var i = t.getRGBA(n.colors[0].color, n.colors[0].opacity),
                                    r = t.getRGBA(n.colors[1].color, n.colors[1].opacity);
                                return void u(e, i, r, n.colors[0].percent, n.colors[1].percent, n.direction)
                            }
                        case "image":
                            if (n.image) return void l(e, n.image, n.opacity)
                    }
                    c(e, "#FFFFFF")
                }
            },
            f = function(t, n, r) {
                t || (t = "topRight");
                var o = p(r),
                    a = e.createElement("img");
                a.src = o.normal, a.onclick = function() {
                    i.collapse(n)
                }, o.hover && (a.onmouseenter = function() {
                    a.src = o.hover
                }, a.onmouseleave = function() {
                    a.src = o.normal
                });
                var c = {
                    "z-index": "2147483638",
                    position: "absolute",
                    padding: "0px",
                    margin: "10px",
                    opacity: "1"
                };
                e.applyStyle(a, c);
                var u = s(t);
                e.applyStyle(a, u), e.insertElementIntoContainer(document.body, a)
            },
            p = function(e) {
                var t = {
                    normal: null,
                    hover: null
                };
                return e ? t.normal = i.getAssetUrl(e) : (t.normal = n.cachedScriptURL + "/HTML5FactoryFiles/ExpandFS/1_0_0/default_close.png", t.hover = n.cachedScriptURL + "/HTML5FactoryFiles/ExpandFS/1_0_0/default_close_hover.png"), t
            },
            h = function(i) {
                i && (a(r, i.alignment, n.adPart.internalHeight, n.adPart.internalWidth), d(document.body, i.background), i.closeButton && f(i.closeButton.alignment, n.adPart.name, i.closeButton.image)), n.bgColor && e.setCssProperty(r, "background-color", t.getRGBA(n.bgColor))
            };
        return {
            init: o,
            drawCloseButton: f,
            align: a,
            drawBackground: d,
            drawFullScreen: h
        }
    }), define("utils/appUtils", ["core/client/clientManager"], function(e) {
        var t = function(t, n, r, o) {
                var a = {
                        lat: 51.508042,
                        lng: -.1306037
                    },
                    s = function() {
                        return t && i(t.lat, t.lng) ? t : a
                    },
                    c = e.getDeviceLocation();
                c ? i(c.latitude, c.longitude) ? o({
                    lat: +c.latitude,
                    lng: +c.longitude
                }) : n(r, c.zip, c.country, function(e) {
                    o(e || s())
                }) : o(s())
            },
            n = function(e, t) {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function() {
                    4 == this.readyState && t(200 == this.status ? JSON.parse(this.responseText) : void 0)
                }, n.open("GET", e, !0), n.send()
            },
            i = function(e, t) {
                if (e && t && 0 != e && 0 != t) {
                    var n = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
                    if (n.test(e + "," + t)) return !0
                }
                return !1
            },
            r = function() {
                var e = window.location.host || JSON.parse(window.name).dsServer;
                if (e) {
                    var t = /serving-sys-(dev4)|(int).com$/;
                    return !t.test(e)
                }
                return !1
            };
        return {
            getCurrentLocation: t,
            urlToJson: n,
            validateLatLng: i,
            ifProductionEnv: r
        }
    }), define("ctrl/border/border", ["utils/domUtils", "utils/stringUtils", "utils/appUtils", "utils/styleUtils", "utils/environmentUtils"], function(e, t, n, i, r) {
        var o = "adkit-overlap-border-" + (new Date).getTime(),
            a = "{0}::after{border:{1} solid {2}; width:100%; height:100%; top: 0px; left: 0px; z-index: 2147483647;box-sizing: border-box; pointer-events:none;content:'';position:absolute}",
            s = {},
            c = function(e) {
                return e.id ? "#" + e.id : e.tagName
            },
            u = function(e, n) {
                var r = t.formatString(a, [e + "." + o, n.width, n.color]);
                i.createStyleFromScript(r), s[e] = !0
            },
            l = function(e, t) {
                var n = r.isIE();
                if (!n || n > 10) {
                    var i = c(e);
                    s[i] || u(i, t), f(e)
                }
            },
            d = function(t) {
                e.removeClass(t, o)
            },
            f = function(t) {
                e.addClass(t, o)
            };
        return {
            addBorder: l,
            hideBorder: d,
            showBorder: f
        }
    }), define("core/adStage", ["utils/domUtils", "utils/objectUtils"], function(e, t) {
        function n(e) {
            this.container = e
        }
        var i = ["top", "left", "bottom", "right"],
            r = ["width", "height"],
            o = document.createElement("div"),
            a = function(e) {
                return o.style.top = e, o.style.top === e
            },
            s = function(e) {
                var t = null;
                return a(e) ? t = e : a(e + "px") && (t = e + "px"), t
            },
            c = function(t, n) {
                var i = {};
                t.forEach(function(e) {
                    e in n && (i[e] = s(n[e]))
                }), e.applyStyle(this.container, i)
            };
        return n.prototype.setPosition = function(e) {
            c.call(this, i, e)
        }, n.prototype.setDimension = function(e) {
            c.call(this, r, e)
        }, n
    }), define("core/consts", [], function() {
        return {
            ADKIT_CONTAINER_ID: "adkit-container"
        }
    }), define("core/adBuilder", ["utils/domUtils", "utils/styleUtils", "core/responsiveStyle", "ctrl/border/border", "core/adStage", "core/consts"], function(e, t, n, i, r, o) {
        var a = null,
            s = null,
            c = null,
            u = null,
            l = null,
            d = null,
            f = function(e, t) {
                s.addItem(e, a.container, function(e) {
                    e && a.autoDraw && e.draw(), t && t(e)
                })
            },
            p = function(e) {
                var t, n = 0,
                    i = function(i) {
                        n++, t && t.length === n && e(i)
                    };
                l.useResponsiveContainer() ? (t = l.buildResponsiveLayers(a), t.length > 0 ? t.forEach(function(e) {
                    s.addItems(e.items, e.container, i)
                }) : e()) : (a.container.id === o.ADKIT_CONTAINER_ID && h(), s.addItems(a.items, a.container, e))
            },
            h = function() {
                a.container.style.width = a.adPart.internalWidth + "px", a.container.style.height = a.adPart.internalHeight + "px"
            },
            g = function() {
                var t = e.getElementById(o.ADKIT_CONTAINER_ID);
                t ? e.setCssProperty(t, "background-color", a.bgColor) : e.applyElementAttributes(document.body, {
                    bgColor: a.bgColor
                })
            },
            m = function() {
                var t = e.getElementById(o.ADKIT_CONTAINER_ID) || document.getElementsByTagName("body")[0];
                t && (i.addBorder(t, a.border), e.bindEvents(document, ["enterFullscreen", "enterFullSize"], function() {
                    i.hideBorder(t)
                }), e.bindEvents(document, ["exitFullscreen", "exitFullSize"], function() {
                    i.showBorder(t)
                }))
            },
            v = function() {
                var t = e.getElementById(o.ADKIT_CONTAINER_ID);
                t && (d = new r(t))
            },
            y = function(e, t, n, i) {
                a = e, s = t, c = n, l = i, v()
            },
            b = function(e) {
                p(function() {
                    a.autoDraw && w(), e()
                })
            },
            E = function() {
                var t = e.createElement("div");
                e.setElementId(t, "adkit-responsive-container-12C269B9-9F6D-47FC-8112-8F43C2EAA0B7"), e.insertElementContentIntoContainer(t, document.body), e.insertElementIntoContainer(document.body, t);
                var n = {
                    overflow: "hidden",
                    padding: "0",
                    margin: "0",
                    position: "absolute",
                    height: a.adPart.internalHeight + "px",
                    width: a.adPart.internalWidth + "px"
                };
                return e.applyStyle(t, n), t
            },
            w = function() {
                if (s.getItems().forEach(function(e) {
                        e.draw()
                    }), a.userData && "adKitExpand" === a.userData.id) {
                    u = E();
                    var t = {
                        overflow: "hidden",
                        width: a.adPart.containerWidth + "px",
                        height: a.adPart.containerHeight + "px"
                    };
                    e.applyStyle(document.body.parentElement, t), t = {
                        overflow: "hidden",
                        padding: "0",
                        margin: "0",
                        width: a.adPart.containerWidth + "px",
                        height: a.adPart.containerHeight + "px"
                    }, e.applyStyle(document.body, t), n.init(a, c, u), n.drawFullScreen(a.userData)
                } else a.bgColor && g();
                a.border && m()
            },
            C = function() {
                return d
            };
        return {
            init: y,
            build: b,
            addItem: f,
            draw: w,
            getStage: C
        }
    }), define("infra/subject", [], function() {
        var e = function() {
            this.eventCBMap = {}
        };
        return e.prototype.registerForEvent = function(e, t, n) {
            "function" == typeof n && "string" == typeof e && "number" == typeof t && (-1 === t || t > 0) && (this.eventCBMap[e] || (this.eventCBMap[e] = []), this.eventCBMap[e].push({
                cb: n,
                times: t
            }))
        }, e.prototype.dispatchEvent = function(e, t) {
            if ("string" == typeof e && this.eventCBMap[e] && this.eventCBMap[e]) {
                var n = this.eventCBMap[e];
                for (var i in n) n[i].cb(t), n[i].times > 0 && 0 === --n[i].times && n.slice(parseInt(i), 1)
            }
        }, e
    }), define("core/responsiveManager", ["utils/domUtils", "utils/objectUtils", "utils/graphicUtils", "infra/subject", "core/consts"], function(e, t, n, i, r) {
        var o, a, s = [],
            c = !1,
            u = !1,
            l = new i,
            d = function(e) {
                o = e, a = e.container, a.id === r.ADKIT_CONTAINER_ID && (h(e), f(e), S() && b(e), E(e), l.dispatchEvent("resize"), C())
            },
            f = function(e) {
                e.adPart.data.responsive && e.adPart.data.responsive.indexOf("maintainAspectRatio") > -1 && (u = !0), e.items.some(function(e) {
                    return e.responsive && e.responsive.indexOf("maintainAspectRatio") > -1 ? (c = !0, !0) : void 0
                })
            },
            p = function(i) {
                var r = "layer-" + t.generateGUID(),
                    s = m(),
                    c = n.buildDiv({
                        elementAttributes: {
                            id: r
                        },
                        styleProperties: {
                            width: o.adPart.internalWidth + "px",
                            height: o.adPart.internalHeight + "px",
                            position: "absolute",
                            visibility: "hidden",
                            "z-index": i,
                            "pointer-events": "visible"
                        }
                    });
                return n.scale(c, s), n.setTransformOrigin(c, 0, 0), e.insertElementIntoContainer(a, c), {
                    id: r,
                    container: c
                }
            },
            h = function(e) {
                e.adPart.data.responsive || (e.adPart.data.responsive = ["fixed"]), e.items.forEach(function(t) {
                    t.responsive || (t.responsive = e.adPart.data.responsive)
                })
            },
            g = function(e, t) {
                return e.zIndex && t.zIndex ? e.zIndex - t.zIndex : 1
            },
            m = function() {
                var e = window.innerHeight > 0 ? window.innerHeight : o.adPart.containerHeight,
                    t = window.innerWidth > 0 ? window.innerWidth : o.adPart.containerWidth,
                    n = t / o.adPart.internalWidth,
                    i = e / o.adPart.internalHeight;
                return i > n ? n : i
            },
            v = function(e) {
                var t = o.adPart.internalHeight,
                    n = o.adPart.internalWidth;
                e.top && e.top > t / 2 && (e.bottom = t - e.top - e.height, delete e.top), e.left && e.left > n / 2 && (e.right = n - e.left - e.width, delete e.left)
            },
            y = function(e) {
                var t = [];
                e.items.forEach(function(e) {
                    t.push(e)
                });
                var n = [];
                return t.sort(g), t.forEach(function(e) {
                    e.responsive.indexOf("maintainAspectRatio") > -1 ? n[n.length - 1] && "maintainAspectRatio" === n[n.length - 1].responsiveBehaviour ? n[n.length - 1].items.push(e) : n.push({
                        responsiveBehaviour: "maintainAspectRatio",
                        items: [e]
                    }) : (v(e), n.push({
                        responsiveBehaviour: "fixed",
                        items: [e]
                    }))
                }), n.forEach(function(e) {
                    if ("maintainAspectRatio" === e.responsiveBehaviour) {
                        var t = p(e.items[0].zIndex);
                        e.id = t.id, e.container = t.container
                    } else e.id = e.items[0].id, e.container = o.container
                }), s = n, n
            },
            b = function(e) {
                if (S()) {
                    var t = m();
                    e.container.style.width = t * e.adPart.internalWidth + "px", e.container.style.height = t * e.adPart.internalHeight + "px"
                }
            },
            E = function(e) {
                var t = window.innerHeight > 0 ? window.innerHeight : e.adPart.containerHeight,
                    n = window.innerWidth > 0 ? window.innerWidth : e.adPart.containerWidth,
                    i = parseInt(e.container.style.width) > 0 ? parseInt(e.container.style.width) : e.adPart.internalWidth,
                    r = parseInt(e.container.style.height) > 0 ? parseInt(e.container.style.height) : e.adPart.internalHeight;
                e.container.style.top = (t - r) / 2 + "px", e.container.style.left = (n - i) / 2 + "px"
            },
            w = function(e, t) {
                if (S() && b(t), E(t), x()) {
                    var i = m();
                    e.forEach(function(e) {
                        "maintainAspectRatio" === e.responsiveBehaviour && n.scale(e.container, i)
                    })
                }
                l.dispatchEvent("resize")
            },
            C = function() {
                var t = e.debounce(function() {
                    w(s, o)
                }, 100, !0);
                window.addEventListener("resize", t)
            },
            x = function() {
                return c
            },
            S = function() {
                return u
            },
            L = function(e) {
                l.registerForEvent("resize", -1, e)
            };
        return {
            init: d,
            buildResponsiveLayers: y,
            useResponsiveLayers: x,
            useResponsiveContainer: S,
            onResize: L
        }
    }), define("comp/types", ["utils/urlUtils"], function(e) {
        var t = null,
            n = document.createElement("div"),
            i = function(e) {
                t = e
            },
            r = function(e) {
                return n.style.top = e, n.style.top === e
            },
            o = function(e) {
                var t = null;
                return r(e) ? t = e : r(e + "px") && (t = e + "px"), t
            },
            a = function(e, t) {
                return s[e] ? s[e].parse(t) : void 0
            },
            s = {
                "int": {
                    parse: function(e) {
                        var t, n = parseInt(e);
                        return n == e && (t = n), t
                    }
                },
                "float": {
                    parse: function(e) {
                        var t, n = parseFloat(e);
                        return n == e && (t = n), t
                    }
                },
                cssMeasure: {
                    parse: function(e) {
                        return o(e)
                    }
                },
                cssPosition: {
                    parse: function(e) {
                        return o(e)
                    }
                },
                bool: {
                    parse: function(e) {
                        var t = null;
                        if ("boolean" == typeof e) t = e;
                        else if ("string" == typeof e) {
                            var n = e.toLowerCase();
                            "true" === n ? t = !0 : "false" === n && (t = !1)
                        }
                        return t
                    }
                },
                assets: {
                    parse: function(e) {
                        var n = null;
                        return ("string" == typeof e || "number" == typeof e || e instanceof Object && !(e instanceof Array)) && (e = [e]), e instanceof Array && (n = t.getAssetsUrl(e)), n
                    }
                },
                asset: {
                    parse: function(e) {
                        var n = null;
                        return ("string" == typeof e || "number" == typeof e || e instanceof Object) && (n = t.getAssetUrl(e)), n
                    }
                },
                array: {
                    parse: function(e) {
                        var t = null;
                        return t = e instanceof Array ? e : []
                    }
                },
                url: {
                    parse: function(t) {
                        var n = null;
                        return "string" == typeof t && (n = e.fixURL(t)), n
                    }
                },
                string: {
                    parse: function(e) {
                        return "string" == typeof e ? e : ""
                    }
                },
                lcString: {
                    parse: function(e) {
                        return s.string.parse(e).toLowerCase()
                    }
                },
                clickThrough: {
                    parse: function(e) {
                        var t = null;
                        return e instanceof Object && ("custom" === e.kind && e.url && (e.url = s.url.parse(e.url)), t = e), t
                    }
                }
            };
        return {
            init: i,
            parse: a
        }
    }), define("comp/compFactory", ["comp/types", "infra/logger"], function(e, t) {
        var n = {},
            i = {},
            r = {},
            o = null,
            a = function(t) {
                o = t.client, e.init(o)
            },
            s = function(e, t) {
                require([e], function(i) {
                    n[e] = i, t(i)
                }, function(e) {
                    t(null)
                })
            },
            c = function(e) {
                var t = [];
                for (var n in e) {
                    var i = l(e[n]);
                    i && -1 == t.indexOf(i) && t.push(i)
                }
                return t
            },
            u = function(e, t) {
                var i = c(e);
                i && i.length ? require(i, function() {
                    for (var e in i) n[i[e]] = arguments[e];
                    t()
                }) : t()
            },
            l = function(e) {
                var t = null;
                if (e && "string" == typeof e) {
                    var n = e.indexOf("-");
                    if (n > 0 && n < e.length) {
                        var i = e.substring(0, n);
                        if (i) {
                            var r = e.substring(n + 1, e.length);
                            t = i + "/" + r + "/" + r, t = t.replace(/^adkit/, "comp")
                        }
                    }
                }
                return t
            },
            d = function(e, t) {
                var i = l(e);
                if (i) {
                    var r = n[i];
                    r ? t(r) : s(i, t)
                } else t(null)
            },
            f = function(e, t) {
                e in i ? i[e].push(t) : i[e] = [t]
            },
            p = function(e) {
                return i[e]
            },
            h = function(e) {
                var t;
                d(e.prop.type, function(n) {
                    return n && (t = new n({
                        div: e.div,
                        prop: e.prop,
                        dataObjects: e.dataObjects,
                        client: o
                    })) ? (r[e.div.id] = t, t.build(function() {
                        e.readyCB(t)
                    }), void f(e.prop.type, t)) : void e.readyCB(t)
                })
            },
            g = function(e) {
                return r[e]
            };
        return {
            init: a,
            createComp: h,
            loadComponents: u,
            getComponentsByType: p,
            getItemById: g
        }
    }), define("core/compManager", ["utils/domUtils", "comp/compFactory", "infra/logger"], function(e, t, n) {
        var i = null,
            r = [],
            o = function(e, n) {
                i = e, t.init({
                    client: n
                })
            },
            a = function(t, n) {
                var r = null;
                return t && (r = e.getElementById(t.id), r || (r = e.createElement("div"), e.setElementId(r, t.id), n ? n.appendChild(r) : i.container.appendChild(r))), r
            },
            s = function(e, n, i) {
                var o = a(e, n);
                o ? t.createComp({
                    div: o,
                    prop: e,
                    readyCB: function(e) {
                        e && r.push(e), i(e)
                    }
                }) : i(null)
            },
            c = function(e, t, n) {
                var i = 0,
                    r = [],
                    o = e.length;
                o > 0 ? e.forEach(function(e) {
                    s(e, t, function(e) {
                        e && r.push(e), ++i === o && n(r)
                    })
                }) : n(r)
            },
            u = function() {
                return r
            };
        return {
            init: o,
            addItem: s,
            addItems: c,
            getItems: u,
            getItemById: t.getItemById,
            loadComponents: t.loadComponents,
            getComponentsByType: t.getComponentsByType
        }
    }), define("core/scriptsLoader", ["utils/objectUtils"], function(objUtils) {
        var init = function(scriptsList, readyCB) {
            var scriptUrls = [];
            objUtils.isArray(scriptsList) && scriptsList.forEach(function(script) {
                if (objUtils.isObject(script)) switch (script.type) {
                    case "url":
                        scriptUrls.push("optional!" + script.value);
                        break;
                    case "literal":
                        try {
                            eval(script.value)
                        } catch (err) {}
                }
            }), scriptUrls.length ? require(scriptUrls, function() {
                readyCB()
            }) : readyCB()
        };
        return {
            init: init
        }
    }), define("core/adManager", ["core/client/clientManager", "core/adBuilder", "core/responsiveManager", "core/compManager", "core/scriptsLoader", "utils/domUtils", "infra/subject"], function(e, t, n, i, r, o, a) {
        var s = null,
            c = !1,
            u = !1,
            l = new a,
            d = function(o, a) {
                s = o, r.init(s.scripts, function() {
                    e.init(s, function() {
                        n.onResize(y), n.init(s), i.init(s, e), t.init(s, i, e, n), t.build(function() {
                            a(), c = !0, (s.autoDraw || u) && e.handleCreativeReady()
                        })
                    })
                })
            },
            f = function() {
                return s
            },
            p = function() {
                return e
            },
            h = function(e) {
                s.container = o.getElementById(e) || s.container
            },
            g = function(e) {
                return s.panels[e]
            },
            m = function(e) {
                return s.banners[e]
            },
            v = function() {
                t.draw(), u = !0, c && e.handleCreativeReady()
            },
            y = function() {
                l.dispatchEvent("resize")
            },
            b = function(e) {
                l.registerForEvent("resize", -1, e)
            };
        return {
            init: d,
            addItem: t.addItem,
            getAdInfo: f,
            getPanelInfoById: g,
            getBannerInfoById: m,
            setCurrentContainer: h,
            loadComponents: i.loadComponents,
            getComponentsByType: i.getComponentsByType,
            getClient: p,
            getItemById: i.getItemById,
            draw: v,
            onResize: b,
            getStage: t.getStage
        }
    }), define("core/localConfig", ["config"], function(e) {
        var t = {};
        e && (t = e);
        var n = function() {
            return t
        };
        return {
            getConfig: n
        }
    }), define("core/configManager", ["core/localConfig", "infra/logger"], function(e, t) {
        var n = function(e) {
                var t = e.ITEMS;
                t && t instanceof Array && t.length && (p.ITEMS = t)
            },
            i = function(e) {
                var t = e.banners;
                if (t && t instanceof Array)
                    for (var n in t) {
                        var i = t[n];
                        i instanceof Object && i.id && (p.banners[i.id] = i)
                    }
            },
            r = function(e) {
                var t = e.panels;
                if (t && t instanceof Array)
                    for (var n in t) {
                        var i = t[n];
                        i instanceof Object && i.id && (p.panels[i.id] = i)
                    }
            },
            o = function(e) {
                var t = e.SV;
                if (t && t instanceof Object && t.svData instanceof Array && t.svData.length)
                    for (var n in t.svData) {
                        var i = t.svData[n];
                        i instanceof Object && "string" == typeof i.svKey && (p.SV.svData[i.svKey.toLowerCase()] = i)
                    }
            },
            a = function(e) {
                var t = e.SVCatalog;
                if (t && t instanceof Object && t.svData instanceof Array && t.svData.length) {
                    p.SVCatalog.minVersions = t.minVersions, p.SVCatalog.maxVersions = t.maxVersions;
                    for (var n in t.svData) {
                        var i = t.svData[n];
                        i instanceof Object && "string" == typeof i.svCatKey && (p.SVCatalog.svData[i.svCatKey.toLowerCase()] = i)
                    }
                }
            },
            s = function(e) {
                var t = e.AdditionalAssets;
                if (t && t instanceof Array && t.length)
                    for (var n in t) {
                        var i = t[n];
                        i instanceof Object && i.OrdinalNumber && (p.AdditionalAssets[i.OrdinalNumber] = i)
                    }
            },
            c = function(e, t, n) {
                var i = n || t;
                t in e && (p[i] = e[t])
            },
            u = function(e) {
                c(e, "type"), c(e, "defaultBanner"), c(e, "defaultPanel"), c(e, "bgColor"), c(e, "clickThrough"), c(e, "meta"), c(e, "commonLibs", "sharedLibs"), c(e, "sharedLibs", "sharedLibs"), c(e, "autoDraw"), c(e, "vpaid")
            },
            l = function(e) {
                e instanceof Object && (n(e), i(e), r(e), o(e), a(e), s(e), u(e))
            },
            d = function() {
                var t = e.getConfig();
                l(t)
            },
            f = function() {
                return p
            },
            p = {
                banners: {},
                panels: {},
                SV: {
                    svData: {}
                },
                SVCatalog: {
                    svData: {}
                },
                AdditionalAssets: {},
                scripts: []
            };
        return {
            init: d,
            getConfig: f
        }
    }), define("core/adInfo", [], function() {
        return {
            usingVideo: !1,
            usingSV: !1,
            usingSVCatalog: !1,
            items: [],
            panels: {},
            banners: {},
            svSchema: {},
            svCatalogSchema: {},
            additionalAssets: {},
            container: null,
            autoDraw: !0,
            scripts: []
        }
    }), define("core/customization", ["utils/objectUtils"], function(e) {
        var t, n = function(e) {
                t = e
            },
            i = function(n) {
                e.isObject(t) && e.isArray(t.customCode) && t.customCode.forEach(function(e) {
                    n.push(e)
                })
            };
        return {
            init: n,
            appendScripts: i
        }
    }), define("core/sharedLibsManager", ["utils/urlUtils", "utils/objectUtils"], function(e, t) {
        var n = [],
            i = [],
            r = function(e, r) {
                t.isArray(e) && (n = e), t.isArray(r) && (i = r)
            },
            o = function(t, n) {
                n.forEach(function(n) {
                    e.isPageRelative(n) && t.push({
                        type: "url",
                        value: "sharedLibs/" + n
                    })
                })
            },
            a = function(e) {
                o(e, n), o(e, i)
            };
        return {
            init: r,
            appendScripts: a
        }
    }), define("core/adInfoBuilder", ["core/configManager", "utils/domUtils", "core/adInfo", "core/customization", "core/sharedLibsManager", "utils/objectUtils", "core/consts"], function(e, t, n, i, r, o, a) {
        var s = {
                BANNER: "banner",
                PANEL: "panel"
            },
            c = function() {
                return n
            },
            u = function(e) {
                return Object.keys(e.SV.svData).length > 0
            },
            l = function(e) {
                return Object.keys(e.SVCatalog.svData).length > 0
            },
            d = function(e) {
                var t = !1;
                if ("adkit-video" === e.type || "adkit-youtube" === e.type || "adkit-media" === e.type || "adkit-video360" === e.type || "adkit-dailymotion" === e.type) t = !0;
                else
                    for (var n in e)
                        if (e[n] instanceof Object && d(e[n])) {
                            t = !0;
                            break
                        } return t
            },
            f = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return e[t]
            },
            p = function(e) {
                var t, n;
                e.adPart.expansionParams instanceof Object ? (t = e.adPart.expansionParams.width, n = e.adPart.expansionParams.height) : (t = e.adPart.data.width ? e.adPart.data.width : e.adPart.width, n = e.adPart.data.height ? e.adPart.data.height : e.adPart.height), e.adPart.internalWidth = t, e.adPart.internalHeight = n
            },
            h = function(e) {
                var t = {};
                return e instanceof Object ? (t.type = e.type, t.name = e.name, t.width = e.width, t.height = e.height, t.containerWidth = e.containerWidth, t.containerHeight = e.containerHeight, t.expansionParams = e.expansionParams) : (t.type = s.BANNER, t.name = "", t.width = window.innerWidth, t.height = window.innerHeight, t.containerWidth = window.innerWidth, t.containerHeight = window.innerHeight), t
            },
            g = function(e, t) {
                t.type === s.BANNER ? t.data = e.banners[t.name] || e.banners[e.defaultBanner] || f(e.banners) : t.type === s.PANEL && (t.data = e.panels[t.name] || e.panels[e.defaultPanel]), null == t.data && (t.data = {
                    items: e.ITEMS,
                    vpaid: e.vpaid
                })
            },
            m = function(e, t) {
                var n = h(e);
                return g(t, n), n
            },
            v = function(e) {
                return e.data.items instanceof Array ? e.data.items : []
            },
            y = function(e, t, n, i, r) {
                return r in e.data ? t : r in n ? i : null
            },
            b = function(e) {
                var t = !1;
                for (var n in e)
                    if (d(e[n])) {
                        t = !0;
                        break
                    }
                return t
            },
            E = function(e) {
                return e.clickThrough instanceof Object ? e.clickThrough : null
            },
            w = function() {
                return t.getElementById(a.ADKIT_CONTAINER_ID) || t.getElementsByTagName("body")[0]
            },
            C = function(t) {
                e.init();
                var o = e.getConfig();
                i.init(t.customization), n.panels = o.panels, n.banners = o.banners, n.userData = t.userData, n.adPart = m(t.adPart, o), n.adType = o.type || "", n.items = v(n.adPart), n.clickThrough = E(o), n.usingSV = u(o), n.usingSVCatalog = l(o), n.svSchema = o.SV, n.svCatalogSchema = o.SVCatalog, n.additionalAssets = o.AdditionalAssets, n.usingVideo = b(n.items), n.bgColor = y(n.adPart, n.adPart.data.bgColor, o, o.bgColor, "bgColor"), n.border = y(n.adPart, n.adPart.data.border, o, o.border, "border"), n.clickThrough = o.clickThrough, n.container = w(), n.vpaid = n.adPart.data.vpaid, n.autoDraw = !(o.autoDraw === !1), n.cachedScriptURL = t.cachedScriptURL, n.rootFolder = t.rootFolderURL, n.scripts = [], r.init(o.sharedLibs, n.adPart.data.sharedLibs), r.appendScripts(n.scripts), i.appendScripts(n.scripts), p(n)
            };
        return {
            build: C,
            getAdInfo: c
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define("infra/logger/anyLogger", t) : "object" == typeof exports ? module.exports = t() : e.AnyLogger = t()
    }(this, function() {
        var e = {},
            t = {},
            n = 0,
            i = [],
            r = function(e, t) {
                return t && (t.scope && (e = "[" + t.scope + "]" + e), t.module && (e = "[" + t.module + "]" + e), t.date && (e = "[" + t.date.toISOString() + "]" + e)), e
            },
            o = function() {
                return {
                    type: "console",
                    write: "undefined" == typeof console ? function() {} : function(e, n) {
                        var i;
                        n === t.logLevels.WARN && console.warn ? i = console.warn : n === t.logLevels.ERROR && console.error ? i = console.error : n === t.logLevels.INFO && console.info ? i = console.info : n === t.logLevels.DEBUG && console.debug && (i = console.debug), i && i.call(console, e, {
                            noCollect: !0
                        })
                    }
                }
            },
            a = function(e) {
                this.settings = {}, this.handlers = [], this.capturedLogs = [], this.id = e.id, this.settings.captureLogsLimit = t.defaultCaptureLogsLimit;
                var n = this;
                e.captureLogs && (e.captureLogsLimit && this.captureLogsLimit(e.captureLogsLimit), this.flushCapturedLogsOnLimit(e.flushCapturedLogsOnLimit), this.flushCapturedLogsOnError(e.flushCapturedLogsOnError), this.captureLogs(!0)), 0 != e.logToConsole && this.handlers.push(o()), i.forEach(function(t) {
                    t.create(n, e)
                }), e.handlers && e.handlers.forEach(n.addHandler.bind(n)), e.formatter ? this.formatter = e.formatter : 0 != e.useFormatter && (this.formatter = r), e.logLevel ? this.logLevel(e.logLevel) : this.logLevel(t.defaultLogLevel), e.module && (this.settings.module = e.module), e.collect && u.call(this)
            },
            s = a.prototype;
        s.logLevel = function(e) {
            return "string" == typeof e && e.toUpperCase() in t.logLevels ? this.settings.logLevel = t.logLevels[e.toUpperCase()] : e && e.name in t.logLevels && (this.settings.logLevel = t.logLevels[e.name]), this.settings.logLevel ? this.settings.logLevel.name : null
        }, s.captureLogs = function(e) {
            this.settings.captureLogs = e
        }, s.captureLogsLimit = function(e) {
            this.settings.captureLogsLimit = e
        }, s.flushCapturedLogsOnLimit = function(e) {
            this.settings.flushCapturedLogsOnLimit = e
        }, s.flushCapturedLogsOnError = function(e) {
            this.settings.flushCapturedLogsOnError = e
        }, s.debug = function(e, n, i) {
            return this.trigger(e, t.logLevels.DEBUG, n, i)
        }, s.info = function(e, n, i) {
            return this.trigger(e, t.logLevels.INFO, n, i)
        }, s.warn = function(e, n, i) {
            return this.trigger(e, t.logLevels.WARN, n, i)
        }, s.error = function(e, n, i) {
            return this.trigger(e, t.logLevels.ERROR, n, i)
        }, s.trigger = function(e, n, i, r) {
            var o;
            o = i || {}, o.module = o.module || this.settings.module, o.date = new Date, e && this.formatter && (e = this.formatter(e, o)), this.settings.captureLogs && (this.settings.flushCapturedLogsOnError && n.value >= t.logLevels.ERROR.value ? this.flushCapturedLogs(this.settings.flushCapturedLogsOnError.logLevel, this.settings.flushCapturedLogsOnError.handlerTypes) : (this.capturedLogs.push({
                message: e,
                level: n,
                data: o
            }), this.capturedLogs.length >= this.settings.captureLogsLimit && (this.settings.flushCapturedLogsOnLimit ? this.flushCapturedLogs(this.settings.flushCapturedLogsOnLimit.logLevel, this.settings.flushCapturedLogsOnLimit.handlerTypes) : this.capturedLogs.shift()))), d.call(this, n) ? this.handlers && this.handlers.constructor === Array && this.handlers.forEach(function(t) {
                l(i) && "console" == t.type || c(t, e, n, o, r)
            }) : r && r(!1)
        }, s.getCapturedLogs = function() {
            return this.capturedLogs
        }, s.flushCapturedLogs = function(e, n, i) {
            var r, o = this,
                a = 0;
            r = t.logLevels[e.toUpperCase()], r || (r = t.defaultFlushLogLevel), this.capturedLogs.forEach(function(e) {
                e.level.value >= r.value && (a++, n && n.forEach(function(t) {
                    c(o.getHandlerByType(t), e.message, e.level, e.data)
                }))
            }), this.capturedLogs = [], i && i(a)
        }, s.getHandlerByType = function(e) {
            var t;
            return this.handlers.some(function(n) {
                return n.type === e ? (t = n, !0) : void 0
            }), t
        }, s.getHandlerTypes = function() {
            return this.handlers.map(function(e) {
                return e.type
            })
        }, s.addHandler = function(e) {
            "function" == typeof e ? this.handlers.push({
                type: "custom",
                write: e
            }) : this.handlers.push(e)
        };
        var c = function(e, t, n, i, r) {
                e && (e.asyncWrite ? e.asyncWrite(t, n, i, function() {
                    r && r(!0)
                }) : (e.write(t, n, i), r && r(!0)))
            },
            u = function() {
                var e = this;
                if (console.log) {
                    var n = console.log;
                    console.log = function(i, r) {
                        r && r.noCollect || e.trigger(i, t.logLevels.DEBUG, {
                            collected: !0
                        }), n.apply(console, arguments)
                    }
                }
                if (console.debug) {
                    var i = console.debug;
                    console.debug = function(n, r) {
                        r && r.noCollect || e.trigger(n, t.logLevels.DEBUG, {
                            collected: !0
                        }), i.apply(console, arguments)
                    }
                }
                if (console.info) {
                    var r = console.info;
                    console.info = function(n, i) {
                        i && i.noCollect || e.trigger(n, t.logLevels.INFO, {
                            collected: !0
                        }), r.apply(console, arguments)
                    }
                }
                if (console.warn) {
                    var o = console.warn;
                    console.warn = function(n, i) {
                        i && i.noCollect || e.trigger(n, t.logLevels.WARN, {
                            collected: !0
                        }), o.apply(console, arguments)
                    }
                }
                if (console.error) {
                    var a = console.error;
                    console.error = function(n, i) {
                        i && i.noCollect || e.trigger(n, t.logLevels.ERROR, {
                            collected: !0
                        }), a.apply(console, arguments)
                    }
                }
                window.onerror = function(n, i, r, o, a) {
                    var s = ["Message: " + n, "URL: " + i, "Line: " + r, "Column: " + o];
                    a && a.stack && s.push("Stack: " + a.stack), s = s.join(" - "), e.trigger(s, t.logLevels.ERROR, {
                        collected: !0
                    })
                }
            },
            l = function(e) {
                return e && e.collected
            },
            d = function(e) {
                var t = this.settings.logLevel;
                return e.value >= t.value
            },
            f = function(t) {
                t ? t.id || (t.id = "logger" + n) : t = {
                    id: "logger" + n
                };
                var i = new a(t);
                return e[i.id] = i, n++, i
            },
            p = function(t) {
                return e[t]
            },
            h = function(e) {
                e && "function" == typeof e.create && i.push(e)
            };
        return t.logLevels = {}, t.logLevels.DEBUG = {
            value: 1,
            name: "DEBUG"
        }, t.logLevels.INFO = {
            value: 2,
            name: "INFO"
        }, t.logLevels.WARN = {
            value: 4,
            name: "WARN"
        }, t.logLevels.ERROR = {
            value: 5,
            name: "ERROR"
        }, t.logLevels.FATAL = {
            value: 9,
            name: "FATAL"
        }, t.logLevels.OFF = {
            value: 10,
            name: "OFF"
        }, t.defaultLogLevel = t.logLevels.OFF, t.defaultFlushLogLevel = t.logLevels.DEBUG, t.defaultCaptureLogsLimit = 1e3, {
            create: f,
            getLoggerById: p,
            consts: t,
            addPlugin: h
        }
    }), define("infra/logger/logManager", ["./anyLogger"], function(e) {
        var t = {
                logLevel: "OFF",
                collect: !0,
                captureLogs: !0,
                captureLogsLimit: 200
            },
            n = e.create(t);
        return n
    }), define("core/main", ["module", "requireDomReady", "core/adkitAPI", "core/adManager", "core/adInfoBuilder", "infra/logger/logManager"], function(e, t, n, i, r, o) {
        adkit.environment && adkit.environment.version && o.info("AdKit version: " + adkit.environment.version);
        var a = function(e) {
            try {
                n.notifyReady(e)
            } catch (t) {}
        };
        t(function() {
            r.build(e.config()), i.init(r.getAdInfo(), function() {
                a(i)
            })
        })
    }),
    function() {
        var e = document,
            t = "/",
            n = "config",
            i = "script",
            r = /\/adkit.js/,
            o = /adkit\/\d+_\d+_\d+_\d+\/adkit.js/,
            a = "contrib/requirejs-domready/domReady",
            s = "contrib/require-css/css",
            c = "contrib/requirejs-optional/optional",
            u = function(e) {
                return e.replace(/([^:\/])\/+/g, "$1/")
            },
            l = function() {
                var t = null,
                    n = null,
                    a = e.getElementsByTagName(i);
                for (var s in a) {
                    var c = a[s];
                    if (c.src) {
                        if (-1 !== c.src.search(o)) {
                            t = c;
                            break
                        }
                        n || -1 === c.src.search(r) || (n = c)
                    }
                }
                return t || n
            },
            d = function() {
                return e.currentScript ? e.currentScript : l()
            },
            f = function() {
                var e = g.getAttribute("adkit-config");
                return ("string" != typeof e || "" === e) && (e = h.adPart && h.adPart.adkitConfigUrl, "" === e ? e = n : ("string" != typeof e || -1 == e.indexOf("?")) && (e = h.rootFolderURL + t + n)), e
            },
            p = function() {
                return "function" == typeof require
            },
            h = {
                cachedScriptURL: adkit.environment.paths.cachedScript,
                nonCachedScriptURL: adkit.environment.paths.nonCachedScript,
                rootFolderURL: adkit.environment.paths.folderRoot,
                adPart: adkit.environment.adParts,
                userData: adkit.environment.userData,
                customization: adkit.environment.customization
            },
            g = d(),
            m = g.getAttribute("adkit-mode"),
            v = null == m || "serving" === m,
            y = f(),
            b = g.src.substring(0, g.src.lastIndexOf(t)),
            E = b + "/contrib/requirejs/require.js",
            w = h.nonCachedScriptURL + "/EBLoader",
            C = v ? w : "core/client/ebLoader",
            x = [u(y), n],
            S = h.cachedScriptURL,
            L = {
                baseUrl: u(b),
                paths: {
                    requireDomReady: a,
                    client: u(C),
                    ebLoaderOrigin: u(w),
                    config: x,
                    user: h.rootFolderURL
                },
                map: {
                    "*": {
                        css: s,
                        optional: c,
                        sharedLibs: u(S)
                    }
                },
                config: {
                    "core/main": h
                }
            };
        if (p()) require.config(L), require(["core/main"]);
        else {
            require = L, require.deps = ["core/main"];
            var P = e.createElement(i);
            P.type = "text/javascript", P.src = u(E), g.parentNode.appendChild(P)
        }
    }(), define("adkit", function() {}), define("comp/baseComp", ["comp/types", "utils/domUtils", "infra/logger"], function(e, t, n) {
        function i(e) {
            e && (this.prop = Object.create(e.prop), this.dataObjects = e.dataObjects, this.div = e.div, this.client = e.client, this.normalize(), this.initContainer(), this.drawn = !1, this.prevCTTime = null)
        }
        var r = [
                ["position"],
                ["width"],
                ["height"],
                ["top", "bottom"],
                ["left", "right"],
                ["zIndex"],
                ["transform"]
            ],
            o = function(e, t) {
                var n = null;
                return e && t && e.some(function(e) {
                    var i = e.getSignature() + "Key";
                    return i in t ? (n = c(e.getDataByKey(t[i])), !0) : void 0
                }), n
            },
            a = function(e) {
                var t = o(this.dataObjects, e);
                return null == t && (t = o(this.client.getDataObjects(), e)), t
            },
            s = function(e, t, n) {
                var i = a.call(this, n);
                null != i && (e[t] = i)
            },
            c = function(e) {
                var t = e instanceof Object && "value" in e ? e.value : e;
                return "string" == typeof t || "number" == typeof t || t instanceof Object ? t : null
            },
            u = function(e, n) {
                t.bindEvent(e, "click", n)
            },
            l = function(t, n) {
                var i = t;
                if (t && n)
                    if ("string" == typeof n) {
                        var r = e.parse(n, t);
                        null != r && (i = r)
                    } else if (t instanceof Object && n instanceof Object) {
                    var o = !1;
                    t instanceof Array && (n instanceof Array || (o = !0));
                    for (var a in t) i[a] = l(t[a], o ? n : n[a])
                }
                return i
            },
            d = function(t, n) {
                var i = this;
                r.forEach(function(r) {
                    r.some(function(r) {
                        if (r in t) {
                            var o = i.getInputSchema()[r],
                                a = n ? e.parse(o, t[r]) : t[r];
                            if (null != a) return i.div.style[r] = a, !0
                        }
                    })
                })
            };
        return i.prototype.attachClickThrough = function() {
            var e = this;
            u.call(this, this.div, function(t) {
                t.triggeredByControls || e.prevCTTime && !(t.timeStamp - e.prevCTTime > 500) || (e.prevCTTime = t.timeStamp, e.clickThrough())
            })
        }, i.prototype.clickThrough = function() {
            var e = this.prop.clickThrough,
                t = e.kind || e.type;
            switch (t) {
                case "platform":
                    this.client.clickThrough();
                    break;
                case "custom":
                    this.client.clickThrough(e.name, e.url)
            }
        }, i.prototype.initContainer = function() {
            d.call(this, this.prop)
        }, i.prototype.internalDraw = function() {
            "clickThrough" in this.prop && this.prop.clickThrough instanceof Object && this.attachClickThrough()
        }, i.prototype.convertFromPrevFormat = function() {
            if (this.prop.params instanceof Object) {
                for (var e in this.prop.params) this.prop[e] = this.prop.params[e];
                delete this.prop.params
            }
        }, i.prototype.normalizeDefaultProperty = function() {
            var e = this.getDefaultProperty();
            e && s.call(this, this.prop, e, this.prop)
        }, i.prototype.normalizeProperties = function() {
            var e = this.getInputSchema();
            for (var t in e) "adkitComp" !== e[t] && t in this.prop && (this.prop[t] instanceof Object && !(this.prop[t] instanceof Array) && s.call(this, this.prop, t, this.prop[t]), this.prop[t] = l(this.prop[t], e[t]), null == this.prop[t] && delete this.prop[t])
        }, i.prototype.build = function(e) {
            e && e()
        }, i.prototype.addProperties = function() {}, i.prototype.normalize = function() {
            this.convertFromPrevFormat(), this.addProperties(), this.normalizeDefaultProperty(), this.normalizeProperties()
        }, i.prototype.getDefaultProperty = function() {
            return null
        }, i.prototype.getInputSchema = function() {
            return i.inputSchema
        }, i.inputSchema = {
            top: "cssPosition",
            left: "cssPosition",
            bottom: "cssPosition",
            right: "cssPosition",
            width: "cssMeasure",
            height: "cssMeasure",
            clickThrough: "clickThrough",
            position: null,
            zIndex: null
        }, i.prototype.draw = function() {
            this.div && !this.drawn && (this.drawn = !0, this.internalDraw())
        }, i.prototype.setPosition = function(e) {
            e instanceof Object && d.call(this, {
                top: e.top,
                bottom: e.bottom,
                left: e.left,
                right: e.right
            }, !0)
        }, i.prototype.setDimension = function(e) {
            e instanceof Object && d.call(this, {
                width: e.width,
                height: e.height
            }, !0)
        }, i
    }), define("comp/graphicComp", ["comp/baseComp", "utils/objectUtils", "utils/styleUtils", "utils/domUtils", "infra/logger"], function(e, t, n, i, r) {
        function o(t) {
            t && e.call(this, t)
        }
        return o.prototype = new e, o.prototype.internalDraw = function() {
            e.prototype.internalDraw.call(this);
            var t = this.div.style;
            t.fontFamily = "Arial,Helvetica,sans-serif", "visible" in this.prop && (t.visibility = this.prop.visible ? "visible" : "hidden"), "opacity" in this.prop && (t.opacity = this.prop.opacity), "layout" in this.prop && (t.display = this.prop.layout ? "block" : "none"), "bgColor" in this.prop && (t.backgroundColor = this.prop.bgColor), "color" in this.prop && (t.color = this.prop.color);
            var n = "hidden";
            "overflow" in this.prop && (n = this.prop.overflow), t.overflow = n;
            var i = "normal";
            "wordBreak" in this.prop && (i = this.prop.wordBreak), t.wordBreak = i, "css" in this.prop && (t.cssText = "string" == typeof t.cssText ? t.cssText + ";" + this.prop.css : this.prop.css)
        }, o.prototype.getInputSchema = function() {
            return o.inputSchema
        }, o.inputSchema = t.create(e.inputSchema, {
            visible: "bool",
            layout: "bool",
            opacity: null,
            bgColor: null,
            overflow: null,
            wordBreak: null,
            color: null,
            css: null
        }), o
    }), define("contrib/require-css/css", [], function() {
        if ("undefined" == typeof window) return {
            load: function(e, t, n) {
                n()
            }
        };
        var e = document.getElementsByTagName("head")[0],
            t = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/) || 0,
            n = !1,
            i = !0;
        t[1] || t[7] ? n = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9 : t[2] || t[8] ? i = !1 : t[4] && (n = parseInt(t[4]) < 18);
        var r = {};
        r.pluginBuilder = "./css-builder";
        var o, a, s, c = function() {
                o = document.createElement("style"), e.appendChild(o), a = o.styleSheet || o.sheet
            },
            u = 0,
            l = [],
            d = function(e) {
                u++, 32 == u && (c(), u = 0), a.addImport(e), o.onload = function() {
                    f()
                }
            },
            f = function() {
                s();
                var e = l.shift();
                return e ? (s = e[1], void d(e[0])) : void(s = null)
            },
            p = function(e, t) {
                if (a && a.addImport || c(), a && a.addImport) s ? l.push([e, t]) : (d(e), s = t);
                else {
                    o.textContent = '@import "' + e + '";';
                    var n = setInterval(function() {
                        try {
                            o.sheet.cssRules, clearInterval(n), t()
                        } catch (e) {}
                    }, 10)
                }
            },
            h = function(t, n) {
                var r = document.createElement("link");
                if (r.type = "text/css", r.rel = "stylesheet", i) r.onload = function() {
                    r.onload = function() {}, setTimeout(n, 7)
                };
                else var o = setInterval(function() {
                    for (var e = 0; e < document.styleSheets.length; e++) {
                        var t = document.styleSheets[e];
                        if (t.href == r.href) return clearInterval(o), n()
                    }
                }, 10);
                r.href = t, e.appendChild(r)
            };
        return r.normalize = function(e, t) {
            return ".css" == e.substr(e.length - 4, 4) && (e = e.substr(0, e.length - 4)), t(e)
        }, r.load = function(e, t, i, r) {
            0 === e.indexOf("data:text/css;") ? (n ? p : h)(e, i) : (n ? p : h)(t.toUrl(e + ".css"), i)
        }, r
    });