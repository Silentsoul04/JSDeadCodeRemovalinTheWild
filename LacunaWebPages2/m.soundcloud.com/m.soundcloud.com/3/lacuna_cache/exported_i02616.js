
        var requirejs, require, define;
        (function(e) {
            function c(e, t) {
                return f.call(e, t)
            }

            function h(e, t) {
                var n, r, i, s, o, a, f, l, c, h, p = t && t.split("/"),
                    d = u.map,
                    v = d && d["*"] || {};
                if (e && e.charAt(0) === ".")
                    if (t) {
                        p = p.slice(0, p.length - 1), e = p.concat(e.split("/"));
                        for (l = 0; l < e.length; l += 1) {
                            h = e[l];
                            if (h === ".") e.splice(l, 1), l -= 1;
                            else if (h === "..") {
                                if (l === 1 && (e[2] === ".." || e[0] === "..")) break;
                                l > 0 && (e.splice(l - 1, 2), l -= 2)
                            }
                        }
                        e = e.join("/")
                    } else e.indexOf("./") === 0 && (e = e.substring(2));
                if ((p || v) && d) {
                    n = e.split("/");
                    for (l = n.length; l > 0; l -= 1) {
                        r = n.slice(0, l).join("/");
                        if (p)
                            for (c = p.length; c > 0; c -= 1) {
                                i = d[p.slice(0, c).join("/")];
                                if (i) {
                                    i = i[r];
                                    if (i) {
                                        s = i, o = l;
                                        break
                                    }
                                }
                            }
                        if (s) break;
                        !a && v && v[r] && (a = v[r], f = l)
                    }!s && a && (s = a, o = f), s && (n.splice(0, o, s), e = n.join("/"))
                }
                return e
            }

            function p(t, r) {
                return function() {
                    return n.apply(e, l.call(arguments, 0).concat([t, r]))
                }
            }

            

            

            function m(n) {
                if (c(o, n)) {
                    var r = o[n];
                    delete o[n], a[n] = !0, t.apply(e, r)
                }
                if (!c(s, n) && !c(a, n)) throw new Error("No " + n);
                return s[n]
            }

            function g(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function y(e) {
                return null
            }
            var t, n, r, i, s = {},
                o = {},
                u = {},
                a = {},
                f = Object.prototype.hasOwnProperty,
                l = [].slice;
            r = function(e, t) {
                var n, r = g(e),
                    i = r[0];
                return e = r[1], i && (i = h(i, t), n = m(i)), i ? n && n.normalize ? e = n.normalize(e, d(t)) : e = h(e, t) : (e = h(e, t), r = g(e), i = r[0], e = r[1], i && (n = m(i))), {
                    f: i ? i + "!" + e : e,
                    n: e,
                    pr: i,
                    p: n
                }
            }, i = {
                require: function(e) {
                    return p(e)
                },
                exports: function(e) {
                    var t = s[e];
                    return typeof t != "undefined" ? t : s[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: s[e],
                        config: y(e)
                    }
                }
            }, t = function(t, n, u, f) {
                var l, h, d, g, y, b = [],
                    w;
                f = f || t;
                if (typeof u == "function") {
                    n = !n.length && u.length ? ["require", "exports", "module"] : n;
                    for (y = 0; y < n.length; y += 1) {
                        g = r(n[y], f), h = g.f;
                        if (h === "require") b[y] = i.require(t);
                        else if (h === "exports") b[y] = i.exports(t), w = !0;
                        else if (h === "module") l = b[y] = i.module(t);
                        else if (c(s, h) || c(o, h) || c(a, h)) b[y] = m(h);
                        else {
                            if (!g.p) throw new Error(t + " missing " + h);
                            g.p.load(g.n, p(f, !0), v(h), {}), b[y] = s[h]
                        }
                    }
                    d = u.apply(s[t], b);
                    if (t)
                        if (l && l.exports !== e && l.exports !== s[t]) s[t] = l.exports;
                        else if (d !== e || !w) s[t] = d
                } else t && (s[t] = u)
            }, requirejs = require = n = function(s, o, a, f, l) {
                return typeof s == "string" ? i[s] ? i[s](o) : m(r(s, o).f) : (s.splice || (u = s, o.splice ? (s = o, o = a, a = null) : s = e), o = o || null, typeof a == "function" && (a = f, f = l), t(e, s, o, a), n)
            }, n.config = null, define = function(e, t, n) {
                t.splice || (n = t, t = []), !c(s, e) && !c(o, e) && (o[e] = [e, t, n])
            }, define.amd = {
                jQuery: !0
            }
        })(), define.unordered = !0, Function.prototype.bind || (Function.prototype.bind = null),
            function() {
                var e = !1;
                this.Class = function() {}, Class.extend = function(t) {
                    function u() {
                        if (!e && this.initialize) return this.initialize.apply(this, arguments)
                    }
                    var n, r, i, s;
                    e = !0;
                    var o = new this;
                    e = !1, Object.prototype.toString.call(t) !== "[object Array]" ? s = [t] : s = t;
                    for (r = 0, i = s.length; r < i; ++r) {
                        t = s[r];
                        for (n in t) o[n] = t[n]
                    }
                    return u.prototype = o, u.prototype.constructor = u, u.extend = arguments.callee, u
                }
            }(),
            define("application", ["require", "exports", "module", "$", "underscore", "api-wrapper", "views/app", "lib/backbone", "config", "lib/error-reporting", "lib/connect", "lib/helpers/client-environment-helper", "lib/event-bus", "lib/deferred-loader", "lib/persistent-store", "lib/play-manager", "lib/pointer-events", "collections/related-sounds", "router", "shared/config/route-builders", "shared/config/routes", "lib/tracking/tracking-core", "lib/url", "models/user", "lib/console-box"], null),
            define("$", ["require", "exports", "module", "underscore", "vendor/underscore.deferred/underscore.deferred", "domify", "lib/dollar/dollar-ajax", "lib/dollar/dollar-attrs", "lib/dollar/dollar-events", "lib/dollar/dollar-manipulation", "lib/dollar/dollar-matches", "lib/dollar/dollar-traversal"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("vendor/underscore.deferred/underscore.deferred"),
                    s = e("domify"),
                    o = e("lib/dollar/dollar-ajax"),
                    u = e("lib/dollar/dollar-attrs"),
                    a = e("lib/dollar/dollar-events"),
                    f = e("lib/dollar/dollar-manipulation"),
                    l = e("lib/dollar/dollar-matches"),
                    c = e("lib/dollar/dollar-traversal"),
                    h = n.exports = null;
                h.prototype.each = null, r.extend(h.prototype, u, a.prototypeMethods, f, c), h.Event = a.Event, h.matches = l, h.noop = null, h.ajax = o, ["get", "post", "getJSON"].forEach(function(e) {
                    h[e] = o[e]
                }), h.getScripts = window.__sc_getScripts, delete window.__sc_getScripts, h.Deferred = i.Deferred, h.when = i.when, h.Callbacks = i.Callbacks
            }),
            define("underscore", ["require", "exports", "module", "vendor/underscore"], function(e, t, n) {
                var r = e("vendor/underscore");
                r.mixin({
                    proxy: null,
                    constant: null,
                    deepExtend: null
                }), n.exports = r
            }),
            define("api-wrapper", ["require", "exports", "module", "$", "underscore", "config", "lib/url"], function(e, t, n) {
                

                

                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("config"),
                    o = e("lib/url"),
                    u = /^https?/,
                    a = /^https?:\/\/.+?\//,
                    f = {
                        likes: "favorites",
                        groups: "groups",
                        people: "users",
                        sound: "track",
                        sounds: "tracks"
                    },
                    l = n.exports = {
                        init: i.once(null),
                        toAPIResource: null
                    }
            }),
            define("views/app", ["require", "exports", "module", "$", "underscore", "lib/helpers/client-environment-helper", "config", "lib/event-bus", "lib/layouts/fullheight", "lib/views/loading", "lib/play-manager", "lib/support", "lib/view", "lib/helpers/viewport-helper", "views/app.css", "views/app.tmpl"], null),
            define("lib/backbone", ["require", "exports", "module", "backbone", "$", "underscore", "lib/mixin"], function(e, t, n) {
                var r = e("backbone"),
                    i = e("$"),
                    s = e("underscore"),
                    o = r.Collection,
                    u = e("lib/mixin"),
                    a = r.Model,
                    f = o.prototype,
                    l = a.prototype,
                    c = r.History.prototype;
                n.exports = r, r.$ = i, c.loadUrl = function() {
                        var e = /\/*(?:[#?].*)?$/;
                        return null
                    }(),
                    function() {
                        

                        function t(t) {
                            return null
                        }
                        l.fetch = t(l.fetch), f.fetch = t(f.fetch)
                    }(), r.Model.extend = r.Collection.extend = r.View.extend = function(e) {
                        return function() {
                            var t = s.toArray(arguments),
                                n = 0,
                                r, i;
                            return r = t.filter(function(e, t) {
                                if (e instanceof u) return n = t + 1, !0
                            }), i = e.apply(this, t.slice(n)), r.forEach(function(e) {
                                e.applyTo(i.prototype)
                            }), i
                        }
                    }(r.View.extend)
            }),
            define("config", ["require", "exports", "module", "lib/mixins/observing", "underscore", "lib/store", "lib/url"], function(e, t, n) {
                var r = e("lib/mixins/observing"),
                    i = e("underscore"),
                    s = e("lib/store"),
                    o = e("lib/url"),
                    u = n.exports = new s;
                r.applyTo(u);
                var a = {
                    client_id: "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX",
                    v2_host: "https://soundcloud.com"
                };
                i.each(i.defaults(a, {
                    app_version: null,
                    app_root: o.parse("https://m.soundcloud.com").directory || "/",
                    api_host: "https://api.soundcloud.com/",
                    bff_api_host: "https://api-mobileweb.soundcloud.com/",
                    api_web_host: "https://api-mobi.soundcloud.com/",
                    stage: "",
                    appView: null,
                    client_application_id: 65097,
                    eventgateway_tracking_url: "https://l9bjkkhaycw6f8f4.soundcloud.com",
                    airbrake_project_key: "31c8ab0643cee32c9585b286e90e9d23",
                    airbrake_project_id: "148573",
                    airbrake_rollout: .01,
                    me: null,
                    restoreToSound: null,
                    playHistoryLength: 50,
                    promotedContentServer: "https://promoted.soundcloud.com",
                    promotedContentAccessToken: "mobileweb",
                    oauth_token: null,
                    router: null,
                    availablePlayManagerSource: null,
                    wisHost: "https://wis.sndcdn.com",
                    internal_qa: !1
                }), function(e, t) {
                    u.set(t, e, {
                        silent: !0
                    })
                }), u.finalize()
            }),
            define("lib/error-reporting", ["require", "exports", "module", "vendor/airbrake-js/airbrake-js", "config"], null),
            define("lib/connect", ["require", "exports", "module", "$", "underscore", "lib/backbone", "config", "lib/event-bus", "lib/url", "lib/persistent-store"], function(e, t, n) {
                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("lib/backbone"),
                    o = e("config"),
                    u = e("lib/event-bus"),
                    a = e("lib/url"),
                    f = e("lib/persistent-store"),
                    l = 150,
                    c = o.get("app_root") + "callback.html",
                    h = "oauth_token",
                    p = "non-expiring",
                    d = new f("anonymous-user"),
                    v = new f("auth"),
                    m, g;
                v.on(h, null);
                var y = n.exports = i.extend({}, s.Events, {
                    setAuthToken: null,
                    getAuthToken: null,
                    isLoggedIn: null,
                    login: null,
                    logout: null,
                    currentUserId: null,
                    getUserIdentifier: null
                })
            }),
            define("lib/helpers/client-environment-helper", ["require", "exports", "module"], function(e, t, n) {
                function f() {
                    var e;
                    return r.iOS && (e = o.match(/\d+_\d+(_\d+)? like mac os x/), e = e && parseFloat(e[0].replace("_", ".").substr(0, 3))), e || -1
                }
                var r = {},
                    i = {},
                    s = {},
                    o = navigator.userAgent.toLowerCase(),
                    u = window.devicePixelRatio,
                    a;
                a = function(e) {
                    return e.test(o)
                }, i.ie10 = a(/iemobile\/10\.0/), r.devicePixelRatio = u, r.dpi = u >= 2 || i.ie10 ? "hdpi" : u > 1 ? "mdpi" : "ldpi", r.iOS = a(/iphone|ipod/), r.android = a(/android/), r.blackberry = a(/bb10/), r.iPhone4 = r.iOS && screen.availWidth === 320 && screen.availHeight === 460, r.iPhone5 = r.iOS && r.highDPI && screen.availWidth === 320 && screen.availHeight === 548, r.playstation = a(/playstation/), r.amazon = !r.playstation && a(/silk|kindle|amazon/), r.supportsNativeApp = r.iOS || r.android || r.blackberry || r.amazon, r.supportsPulseApp = r.iOS || r.android, r.brand = r.iOS ? "iOS" : r.amazon ? "amazon" : r.android ? "android" : r.blackberry ? "blackberry" : "", i.backingStoreRatio = function() {
                    var e = document.createElement("canvas"),
                        t = e.getContext && e.getContext("2d");
                    if (t) return t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || 1
                }(), i.chrome = a(/chrome|crios\//), i.safari = !i.chrome && a(/Version\/.+ Mobile\/.+ Safari\//i), i.firefox = a(/mobile.* firefox/), s.iOS7 = r.iOS && a(/os 7_(.*) like mac os x/), s.iOSVersion = f(), t.device = r, t.browser = i, t.os = s
            }),
            define("lib/event-bus", ["require", "exports", "module", "underscore", "lib/backbone", "config", "lib/persistent-store"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/backbone"),
                    s = e("config"),
                    o = e("lib/persistent-store"),
                    u = new o("broadcast"),
                    a = s.get("app_id"),
                    f, l, c;
                u.on("broadcast", null);
                var h = n.exports = r.extend({}, i.Events, {
                    broadcast: null
                });
                l = null, c = null
            }),
            define("lib/deferred-loader", ["require", "exports", "module", "underscore", "$"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("$"),
                    s = {},
                    o = n.exports = {
                        setPackageMap: null,
                        loadLayout: null,
                        load: null,
                        get: null
                    }
            }),
            define("lib/persistent-store", ["require", "exports", "module", "lib/store", "lib/mixins/persistent", "lib/mixins/observing"], function(e, t, n) {
                var r = e("lib/store"),
                    i = e("lib/mixins/persistent"),
                    s = e("lib/mixins/observing"),
                    o = n.exports = r.extend();
                i.applyTo(o.prototype), s.applyTo(o.prototype)
            }),
            define("lib/play-manager", ["require", "exports", "module", "underscore", "lib/backbone", "lib/collection", "config", "lib/futures"], function(e, t, n) {
                

                

                

                

                

                

                

                

                

                

                

                

                

                

                

                

                

                
                var r = e("underscore"),
                    i = e("lib/backbone"),
                    s = e("lib/collection"),
                    o = e("config"),
                    u = e("lib/futures"),
                    a = 3,
                    f = 3,
                    l = n.exports = r.extend({}, i.Events, {
                        history: [],
                        historyCursor: -1,
                        source: null,
                        sourceCursor: -1,
                        initialSourcePriority: -Infinity,
                        layoutInfo: {},
                        restoreUrl: null,
                        FallbackSource: null,
                        _fetchDeferred: null,
                        _sessionPlays: 0,
                        setInitialSource: null,
                        unsetInitialSource: null,
                        indexOfSoundInSource: null,
                        hasPrevSound: null,
                        hasNextSound: null,
                        hasCurrentSound: null,
                        getCurrentSound: null,
                        getPrevSound: null,
                        getSoundFromHistory: null,
                        addToHistory: null,
                        backfillHistoryFromPlaylist: null,
                        reset: null,
                        clearHistory: null,
                        play: null,
                        playSource: null,
                        toggle: null,
                        pause: null,
                        playCurrent: null,
                        pauseCurrent: null,
                        toggleCurrent: null,
                        playNext: null,
                        playPrev: null,
                        fetchNextSound: T,
                        setFallbackSource: null,
                        restoreState: null,
                        getCurrentRestoreUrl: null,
                        getCurrentMetadata: null,
                        saveLayout: null
                    })
            }),
            define("lib/pointer-events", ["require", "exports", "module", "underscore", "lib/support"], null),
            define("collections/related-sounds", ["require", "exports", "module", "lib/mixins/audio-source", "lib/collection", "models/sound"], null),
            define("router", ["require", "exports", "module", "$", "underscore", "lib/backbone", "config", "lib/event-bus", "lib/deferred-loader", "lib/tracking/tracking-core", "lib/url"], function(e, t, n) {
                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("lib/backbone"),
                    o = e("config"),
                    u = e("lib/event-bus"),
                    a = e("lib/deferred-loader"),
                    f = e("lib/tracking/tracking-core"),
                    l = e("lib/url"),
                    c, h, p = r.Deferred();
                f.deferRequests(p);
                var d = n.exports = s.Router.extend({
                    currentLayout: null,
                    _currentLayoutInfo: null,
                    setRoutes: null,
                    navigateToRoute: null,
                    navigate: null,
                    getQueryParams: null,
                    getQueryString: null,
                    apply: null,
                    getLayoutInfo: null,
                    getRouteInfo: null,
                    goToSoundPage: null,
                    unauthenticated: null
                }, {
                    getRoute: null
                })
            }),
            define("shared/config/route-builders", ["require", "exports", "module", "underscore", "shared/lib/url"], null),
            define("shared/config/routes", ["require", "exports", "module", "shared/vendor/routeabout/routeabout"], null),
            define("lib/tracking/tracking-core", ["require", "exports", "module", "$", "underscore", "lib/tracking/comscore", "config", "lib/tracking/helpers/core", "vendor/event-gateway/event-gateway", "lib/lingua", "lib/tracking/types/actions", "lib/support", "lib/tracking/types/impressions", "lib/tracking/types/pageviews"], function(e, t, n) {
                

                

                

                

                

                

                

                

                

                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("lib/tracking/comscore"),
                    o = e("config"),
                    u = e("lib/tracking/helpers/core"),
                    a = e("vendor/event-gateway/event-gateway"),
                    f = e("lib/lingua"),
                    l = e("lib/tracking/types/actions"),
                    c = e("lib/support"),
                    h = e("lib/tracking/types/impressions"),
                    p = e("lib/tracking/types/pageviews"),
                    d = r.Deferred().resolve(),
                    v = n.exports = {
                        initialize: null,
                        destroy: null,
                        action: null,
                        audio: null,
                        trackClickV1: null,
                        trackImpressionV1: null,
                        saveAudioContext: null,
                        pageview: null,
                        impression: null,
                        appLoad: null,
                        whenRequestAllowed: null,
                        deferRequests: function(e) {
                            d = d.then(function() {
                                return e
                            })
                        }
                    }
            }),
            define("lib/url", ["require", "exports", "module", "underscore", "lib/backbone", "lib/support"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/backbone"),
                    s = e("lib/support"),
                    o = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    u = ["---", "scheme", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
                    a, f = n.exports = {
                        parse: function(e, t) {
                            var n = o.exec(e),
                                r, i, s = {};
                            t || (t = u);
                            for (r = 1; r < u.length; ++r) {
                                i = u[r];
                                if (t.indexOf(i) !== -1)
                                    if (n[r] || i === "query") switch (i) {
                                        case "port":
                                            s[i] = parseInt(n[r], 10);
                                            break;
                                        case "path":
                                            s[i] = n[r].split("/").map(decodeURIComponent).join("/");
                                            break;
                                        case "query":
                                            s[i] = f.parseQueryString(n[r]);
                                            break;
                                        default:
                                            s[i] = n[r]
                                    }
                            }
                            return s
                        },
                        joinPath: null,
                        parseQueryString: function(e) {
                            var t = {};
                            return e && e.replace(/([^?=&]+)(?:=([^&]*))?/g, null), t
                        },
                        getQueryParams: function() {
                            var e, t;
                            return null
                        }(),
                        stringify: null,
                        modify: null,
                        getQueryParam: null,
                        getQueryString: null,
                        currentPath: null
                    };
                a = null
            }),
            define("models/user", ["require", "exports", "module", "lib/model", "lib/mixins/urn"], null),
            define("lib/console-box", ["require", "exports", "module", "css", "lib/console-box.css"], null),
            define("vendor/underscore.deferred/underscore.deferred", ["require", "exports", "module"], function(e, t, n) {
                (function(e) {
                    function y(e) {
                        var t = g[e] = {};
                        return l(e.split(/\s+/), function(e) {
                            t[e] = !0
                        }), t
                    }
                    var t = {},
                        r = Array.prototype,
                        i = Object.prototype,
                        s = i.hasOwnProperty,
                        o = i.toString,
                        u = r.forEach,
                        a = r.indexOf,
                        f = r.slice,
                        l = function(e, n, r) {
                            var i, o, a;
                            if (!e) return;
                            if (u && e.forEach === u) e.forEach(n, r);
                            else if (e.length === +e.length) {
                                for (o = 0, a = e.length; o < a; o++)
                                    if (o in e && n.call(r, e[o], o, e) === t) return
                            } else
                                for (i in e)
                                    if (s.call(e, i) && n.call(r, e[i], i, e) === t) return
                        },
                        c = function(e) {
                            return !!(e && e.constructor && e.call && e.apply)
                        },
                        h = function(e) {
                            return l(f.call(arguments, 1), function(t) {
                                var n;
                                for (n in t) t[n] !== void 0 && (e[n] = t[n])
                            }), e
                        },
                        p = null,
                        d = {};
                    l("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                        d["[object " + e + "]"] = e.toLowerCase()
                    });
                    var v = function(e) {
                            return e == null ? String(e) : d[o.call(e)] || "object"
                        },
                        m = {},
                        g = {};
                    m.Callbacks = function(e) {
                        e = typeof e == "string" ? g[e] || y(e) : h({}, e);
                        var t, n, r, i, s, o, u = [],
                            a = !e.once && [],
                            f = function(l) {
                                t = e.memory && l, n = !0, o = i || 0, i = 0, s = u.length, r = !0;
                                for (; u && o < s; o++)
                                    if (u[o].apply(l[0], l[1]) === !1 && e.stopOnFalse) {
                                        t = !1;
                                        break
                                    }
                                r = !1, u && (a ? a.length && f(a.shift()) : t ? u = [] : c.disable())
                            },
                            c = {
                                add: function() {
                                    if (u) {
                                        var n = u.length;
                                        (function o(t) {
                                            l(t, function(t) {
                                                var n = v(t);
                                                n === "function" ? (!e.unique || !c.has(t)) && u.push(t) : t && t.length && n !== "string" && o(t)
                                            })
                                        })(arguments), r ? s = u.length : t && (i = n, f(t))
                                    }
                                    return this
                                },
                                remove: null,
                                has: null,
                                empty: null,
                                disable: function() {
                                    return u = a = t = undefined, this
                                },
                                disabled: null,
                                lock: function() {
                                    return a = undefined, t || c.disable(), this
                                },
                                locked: null,
                                fireWith: function(e, t) {
                                    return t = t || [], t = [e, t.slice ? t.slice() : t], u && (!n || a) && (r ? a.push(t) : f(t)), this
                                },
                                fire: function() {
                                    return c.fireWith(this, arguments), this
                                },
                                fired: null
                            };
                        return c
                    }, m.Deferred = function(e) {
                        var t = [
                                ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                                ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                                ["notify", "progress", m.Callbacks("memory")]
                            ],
                            n = "pending",
                            r = {
                                state: null,
                                always: null,
                                then: function() {
                                    var e = arguments;
                                    return m.Deferred(function(n) {
                                        l(t, function(t, r) {
                                            var s = t[0],
                                                o = e[r];
                                            i[t[1]](c(o) ? function() {
                                                var e;
                                                try {
                                                    e = o.apply(this, arguments)
                                                } catch (t) {
                                                    n.reject(t);
                                                    return
                                                }
                                                e && c(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s !== "notify" ? "resolveWith" : s + "With"](this === i ? n : this, [e])
                                            } : n[s])
                                        }), e = null
                                    }).promise()
                                },
                                promise: function(e) {
                                    return e != null ? h(e, r) : r
                                }
                            },
                            i = {};
                        return r.pipe = r.then, l(t, function(e, s) {
                            var o = e[2],
                                u = e[3];
                            r[e[1]] = o.add, u && o.add(function() {
                                n = u
                            }, t[s ^ 1][2].disable, t[2][2].lock), i[e[0]] = o.fire, i[e[0] + "With"] = o.fireWith
                        }), r.promise(i), e && e.call(i, i), i
                    }, m.when = null, typeof n != "undefined" && n.exports ? n.exports = m : typeof e._ != "undefined" ? e._.mixin(m) : e._ = m
                })(this)
            }),
            define("domify", ["require", "exports", "module"], function(e, t, n) {
                

                
                n.exports = i;
                var r = {
                    option: [1, '<select multiple="multiple">', "</select>"],
                    optgroup: [1, '<select multiple="multiple">', "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    thead: [1, "<table>", "</table>"],
                    tbody: [1, "<table>", "</table>"],
                    tfoot: [1, "<table>", "</table>"],
                    colgroup: [1, "<table>", "</table>"],
                    caption: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    th: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    _default: [0, "", ""]
                }
            }),
            define("lib/dollar/dollar-ajax", ["require", "exports", "module", "underscore", "ajax", "vendor/underscore.deferred/underscore.deferred"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("ajax"),
                    s = e("vendor/underscore.deferred/underscore.deferred"),
                    o = n.exports = null;
                ["get", "post", "getJSON"].forEach(function(e) {
                    o[e] = null
                })
            }),
            define("lib/dollar/dollar-attrs", ["require", "exports", "module", "underscore", "classes"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("classes"),
                    s = n.exports = {
                        attr: null,
                        classList: null,
                        hasClass: null,
                        scrollTop: null,
                        offset: null
                    };
                ["add", "remove"].forEach(function(e) {
                    s[e + "Class"] = null
                }), s.toggleClass = null
            }),
            define("lib/dollar/dollar-events", ["require", "exports", "module", "underscore", "vendor/zepto-events"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("vendor/zepto-events");
                t.Event = i.Event, t.prototypeMethods = {
                    bind: null,
                    unbind: null,
                    one: null,
                    delegate: null,
                    undelegate: null,
                    on: null,
                    off: null,
                    trigger: null
                }
            }),
            define("lib/dollar/dollar-manipulation", ["require", "exports", "module"], function(e, t, n) {
                
                n.exports = {
                    remove: r,
                    detach: r,
                    prepend: null,
                    insertAfter: null,
                    append: null,
                    html: null
                }
            }),
            define("lib/dollar/dollar-matches", ["require", "exports", "module"], function(e, t, n) {
                n.exports = null
            }),
            define("lib/dollar/dollar-traversal", ["require", "exports", "module", "underscore", "lib/dollar/dollar-matches"], function(e, t, n) {
                
                var r = e("underscore"),
                    i = e("lib/dollar/dollar-matches"),
                    s = n.exports = {
                        find: null,
                        last: null,
                        closest: null,
                        parent: null,
                        children: null,
                        index: null
                    }
            }),
            define("vendor/underscore", ["require", "exports", "module"], function(e, t, n) {
                (function() {
                    function x(e) {
                        
                        return null
                    }

                    function C(e) {
                        return null
                    }

                    
                    var e = this,
                        r = e._,
                        i = Array.prototype,
                        s = Object.prototype,
                        o = Function.prototype,
                        u = i.push,
                        a = i.slice,
                        f = s.toString,
                        l = s.hasOwnProperty,
                        c = Array.isArray,
                        h = Object.keys,
                        p = o.bind,
                        d = Object.create,
                        v = null,
                        m = null;
                    typeof t != "undefined" ? (typeof n != "undefined" && n.exports && (t = n.exports = m), t._ = m) : e._ = m, m.VERSION = "1.8.2";
                    var g = function(e, t, n) {
                            if (t === void 0) return e;
                            switch (n == null ? 3 : n) {
                                case 1:
                                    return null;
                                case 2:
                                    return null;
                                case 3:
                                    return null;
                                case 4:
                                    return null
                            }
                            return null
                        },
                        y = function(e, t, n) {
                            return e == null ? m.identity : m.isFunction(e) ? g(e, t, n) : m.isObject(e) ? m.matcher(e) : m.property(e)
                        };
                    m.iteratee = null;
                    var b = function(e, t) {
                            return function(n) {
                                var r = arguments.length;
                                if (r < 2 || n == null) return n;
                                for (var i = 1; i < r; i++) {
                                    var s = arguments[i],
                                        o = e(s),
                                        u = o.length;
                                    for (var a = 0; a < u; a++) {
                                        var f = o[a];
                                        if (!t || n[f] === void 0) n[f] = s[f]
                                    }
                                }
                                return n
                            }
                        },
                        w = null,
                        E = Math.pow(2, 53) - 1,
                        S = function(e) {
                            var t = e != null && e.length;
                            return typeof t == "number" && t >= 0 && t <= E
                        };
                    m.each = m.forEach = function(e, t, n) {
                        t = g(t, n);
                        var r, i;
                        if (S(e))
                            for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
                        else {
                            var s = m.keys(e);
                            for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e)
                        }
                        return e
                    }, m.map = m.collect = function(e, t, n) {
                        t = y(t, n);
                        var r = !S(e) && m.keys(e),
                            i = (r || e).length,
                            s = Array(i);
                        for (var o = 0; o < i; o++) {
                            var u = r ? r[o] : o;
                            s[o] = t(e[u], u, e)
                        }
                        return s
                    }, m.reduce = m.foldl = m.inject = x(1), m.reduceRight = m.foldr = x(-1), m.find = m.detect = null, m.filter = m.select = null, m.reject = null, m.every = m.all = null, m.some = m.any = null, m.contains = m.includes = m.include = function(e, t, n, r) {
                        S(e) || (e = m.values(e));
                        if (typeof n != "number" || r) n = 0;
                        return m.indexOf(e, t, n) >= 0
                    }, m.invoke = function(e, t) {
                        var n = a.call(arguments, 2),
                            r = m.isFunction(t);
                        return m.map(e, null)
                    }, m.pluck = null, m.where = null, m.findWhere = null, m.max = null, m.min = null, m.shuffle = null, m.sample = null, m.sortBy = null;
                    var T = function(e) {
                        return null
                    };
                    m.groupBy = T(null), m.indexBy = T(null), m.countBy = T(null), m.toArray = function(e) {
                        return e ? m.isArray(e) ? a.call(e) : S(e) ? m.map(e, m.identity) : m.values(e) : []
                    }, m.size = null, m.partition = null, m.first = m.head = m.take = null, m.initial = function(e, t, n) {
                        return a.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)))
                    }, m.last = function(e, t, n) {
                        return e == null ? void 0 : t == null || n ? e[e.length - 1] : m.rest(e, Math.max(0, e.length - t))
                    }, m.rest = m.tail = m.drop = null, m.compact = null;
                    var N = function(e, t, n, r) {
                        var i = [],
                            s = 0;
                        for (var o = r || 0, u = e && e.length; o < u; o++) {
                            var a = e[o];
                            if (S(a) && (m.isArray(a) || m.isArguments(a))) {
                                t || (a = N(a, t, n));
                                var f = 0,
                                    l = a.length;
                                i.length += l;
                                while (f < l) i[s++] = a[f++]
                            } else n || (i[s++] = a)
                        }
                        return i
                    };
                    m.flatten = null, m.without = null, m.uniq = m.unique = null, m.union = null, m.intersection = null, m.difference = null, m.zip = null, m.unzip = null, m.object = null, m.indexOf = function(e, t, n) {
                        var r = 0,
                            i = e && e.length;
                        if (typeof n == "number") r = n < 0 ? Math.max(0, i + n) : n;
                        else if (n && i) return r = m.sortedIndex(e, t), e[r] === t ? r : -1;
                        if (t !== t) {
                            var s = m.findIndex(a.call(e, r), m.isNaN);
                            return s >= 0 ? s + r : -1
                        }
                        for (; r < i; r++)
                            if (e[r] === t) return r;
                        return -1
                    }, m.lastIndexOf = null, m.findIndex = C(1), m.findLastIndex = C(-1), m.sortedIndex = null, m.range = null;
                    var k = function(e, t, n, r, i) {
                        if (r instanceof t) {
                            var s = w(e.prototype),
                                o = e.apply(s, i);
                            return m.isObject(o) ? o : s
                        }
                        return e.apply(n, i)
                    };
                    m.bind = function(e, t) {
                        if (p && e.bind === p) return p.apply(e, a.call(arguments, 1));
                        if (!m.isFunction(e)) throw new TypeError("Bind must be called on a function");
                        var n = a.call(arguments, 2),
                            r = null;
                        return r
                    }, m.partial = function(e) {
                        var t = a.call(arguments, 1),
                            n = function() {
                                var r = 0,
                                    i = t.length,
                                    s = Array(i);
                                for (var o = 0; o < i; o++) s[o] = t[o] === m ? arguments[r++] : t[o];
                                while (r < arguments.length) s.push(arguments[r++]);
                                return k(e, n, this, this, s)
                            };
                        return n
                    }, m.bindAll = function(e) {
                        var t, n = arguments.length,
                            r;
                        if (n <= 1) throw new Error("bindAll must be passed function names");
                        for (t = 1; t < n; t++) r = arguments[t], e[r] = m.bind(e[r], e);
                        return e
                    }, m.memoize = function(e, t) {
                        var n = null;
                        return n.cache = {}, n
                    }, m.delay = null, m.defer = m.partial(m.delay, m, 1), m.throttle = null, m.debounce = null, m.wrap = null, m.negate = null, m.compose = null, m.after = null, m.before = function(e, t) {
                        var n;
                        return null
                    }, m.once = m.partial(m.before, 2);
                    var L = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        A = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                    m.keys = function(e) {
                        if (!m.isObject(e)) return [];
                        if (h) return h(e);
                        var t = [];
                        for (var n in e) m.has(e, n) && t.push(n);
                        return L && O(e, t), t
                    }, m.allKeys = function(e) {
                        if (!m.isObject(e)) return [];
                        var t = [];
                        for (var n in e) t.push(n);
                        return L && O(e, t), t
                    }, m.values = null, m.mapObject = null, m.pairs = null, m.invert = function(e) {
                        var t = {},
                            n = m.keys(e);
                        for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                        return t
                    }, m.functions = m.methods = function(e) {
                        var t = [];
                        for (var n in e) m.isFunction(e[n]) && t.push(n);
                        return t.sort()
                    }, m.extend = b(m.allKeys), m.extendOwn = m.assign = b(m.keys), m.findKey = null, m.pick = function(e, t, n) {
                        var r = {},
                            i = e,
                            s, o;
                        if (i == null) return r;
                        m.isFunction(t) ? (o = m.allKeys(i), s = g(t, n)) : (o = N(arguments, !1, !1, 1), s = null, i = Object(i));
                        for (var u = 0, a = o.length; u < a; u++) {
                            var f = o[u],
                                l = i[f];
                            s(l, f, i) && (r[f] = l)
                        }
                        return r
                    }, m.omit = function(e, t, n) {
                        if (m.isFunction(t)) t = m.negate(t);
                        else {
                            var r = m.map(N(arguments, !1, !1, 1), String);
                            t = function(e, t) {
                                return !m.contains(r, t)
                            }
                        }
                        return m.pick(e, t, n)
                    }, m.defaults = b(m.allKeys, !0), m.create = null, m.clone = null, m.tap = null, m.isMatch = null;
                    var M = null;
                    m.isEqual = null, m.isEmpty = null, m.isElement = null, m.isArray = c || null, m.isObject = function(e) {
                        var t = typeof e;
                        return t === "function" || t === "object" && !!e
                    }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
                        m["is" + e] = function(t) {
                            return f.call(t) === "[object " + e + "]"
                        }
                    }), m.isArguments(arguments) || (m.isArguments = null), typeof /./ != "function" && typeof Int8Array != "object" && (m.isFunction = function(e) {
                        return typeof e == "function" || !1
                    }), m.isFinite = null, m.isNaN = null, m.isBoolean = null, m.isNull = null, m.isUndefined = null, m.has = function(e, t) {
                        return e != null && l.call(e, t)
                    }, m.noConflict = null, m.identity = function(e) {
                        return e
                    }, m.constant = null, m.noop = function() {}, m.property = null, m.propertyOf = null, m.matcher = m.matches = null, m.times = null, m.random = null, m.now = Date.now || null;
                    var _ = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        },
                        D = m.invert(_),
                        P = function(e) {
                            var t = null,
                                n = "(?:" + m.keys(e).join("|") + ")",
                                r = RegExp(n),
                                i = RegExp(n, "g");
                            return null
                        };
                    m.escape = P(_), m.unescape = P(D), m.result = null;
                    var H = 0;
                    m.uniqueId = null, m.templateSettings = {
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g,
                        escape: /<%-([\s\S]+?)%>/g
                    };
                    var B = /(.)^/,
                        j = {
                            "'": "'",
                            "\\": "\\",
                            "\r": "r",
                            "\n": "n",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        F = /\\|'|\r|\n|\u2028|\u2029/g,
                        I = null;
                    m.template = null, m.chain = null;
                    var q = null;
                    m.mixin = function(e) {
                        m.each(m.functions(e), function(t) {
                            var n = m[t] = e[t];
                            m.prototype[t] = null
                        })
                    }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                        var t = i[e];
                        m.prototype[e] = null
                    }), m.each(["concat", "join", "slice"], function(e) {
                        var t = i[e];
                        m.prototype[e] = null
                    }), m.prototype.value = null, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = null
                }).call(this)
            }),
            define("lib/layouts/fullheight", ["require", "exports", "module", "lib/layout", "lib/layouts/fullheight.css", "lib/layouts/fullheight.tmpl"], function(e, t, n) {
                var r = e("lib/layout"),
                    i = n.exports = r.extend({
                        css: e("lib/layouts/fullheight.css"),
                        template: e("lib/layouts/fullheight.tmpl")
                    })
            }),
            define("lib/views/loading", ["require", "exports", "module", "lib/view", "lib/views/loading.css"], function(e, t, n) {
                var r = e("lib/view"),
                    i = n.exports = r.extend({
                        css: e("lib/views/loading.css"),
                        className: "loadingThrobber",
                        defaults: {
                            size: "regular"
                        },
                        setup: null,
                        template: null
                    })
            }),
            define("lib/support", ["require", "exports", "module", "underscore", "lib/helpers/client-environment-helper"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/helpers/client-environment-helper").browser,
                    s, o, u = n.exports = {};
                o = function(e) {
                    try {
                        if (e.getItem) {
                            var t = Date.now();
                            return e.setItem(t, t), e.removeItem(t), !0
                        }
                    } catch (n) {}
                    return !1
                }, s = {
                    sessionStorage: function() {
                        try {
                            return typeof sessionStorage != "undefined" && o(sessionStorage)
                        } catch (e) {
                            return !1
                        }
                    },
                    localStorage: function() {
                        try {
                            return typeof localStorage != "undefined" && o(localStorage)
                        } catch (e) {
                            return !1
                        }
                    },
                    touch: function() {
                        return s.pointerEvents() || s.touchEvents()
                    },
                    touchEvents: function() {
                        return "ontouchstart" in window
                    },
                    pointerEvents: function() {
                        return !!window.PointerEvent
                    },
                    orientationChange: function() {
                        return "onorientationchange" in window
                    },
                    autoPlay: function() {
                        return i.firefox
                    },
                    pushState: function() {
                        return window.history && window.history.pushState
                    },
                    sendBeacon: function() {
                        return window.navigator.sendBeacon
                    },
                    nativeScroll: function() {
                        var e = document.createElement("div"),
                            t;
                        return e.style.webkitOverflowScrolling = "touch", document.body.appendChild(e), t = !!window.getComputedStyle(e).webkitOverflowScrolling, document.body.removeChild(e), t
                    },
                    typedArrays: function() {
                        return !!window.hasOwnProperty("Uint8Array")
                    }
                }, r.each(s, function(e, t) {
                    u[t] = !!e()
                }), s = null
            }),
            define("lib/view", ["require", "exports", "module", "$", "underscore", "lib/backbone", "css", "lib/event-bubble", "lib/views/mixins/stateful", "lib/template"], function(e, t, n) {
                

                

                

                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("lib/backbone"),
                    o = e("css"),
                    u = e("lib/event-bubble"),
                    a = e("lib/views/mixins/stateful"),
                    f = e("lib/template"),
                    l = n.exports = s.View.extend(a, {
                        ModelClass: null,
                        requiredAttributes: null,
                        observedAttributes: null,
                        css: null,
                        template: r.noop,
                        LoadingView: null,
                        loadingViewArgs: null,
                        loadingTemplate: null,
                        element2selector: null,
                        _element2selector_cache: null,
                        defaults: null,
                        bubbleEvents: null,
                        disposed: !1,
                        subviews: null,
                        _subviews_keys: null,
                        _lastEventId: null,
                        constructorArguments: null,
                        _whenInsertedDefer: null,
                        _deferreds: null,
                        initialize: null,
                        _setup: null,
                        setup: r.noop,
                        _dispose: null,
                        dispose: r.noop,
                        _teardown: null,
                        teardown: r.noop,
                        disposeSubviews: null,
                        getModel: null,
                        setupModelListeners: null,
                        teardownModelListeners: null,
                        setupCollectionListeners: null,
                        teardownCollectionListeners: null,
                        _setupBubbleListeners: null,
                        getRequiredAttributes: null,
                        getObservedAttributes: null,
                        addDeferred: null,
                        addSubview: null,
                        removeSubview: null,
                        getAncestorSubviews: null,
                        getElement: null,
                        resetElementCache: null,
                        render: null,
                        renderDecorate: r.noop,
                        rerender: null,
                        getTemplate: null,
                        _getTemplateData: null,
                        getTemplateData: r.noop,
                        getCollectionData: null,
                        getModelData: null,
                        bubble: null,
                        getContextData: null,
                        fetchData: null,
                        hasData: null,
                        removeLoader: null,
                        isEquivalentTo: null,
                        whenInserted: null,
                        onModelChange: null,
                        onCollectionReset: null,
                        onAdd: r.noop,
                        onRemove: r.noop
                    })
            }),
            define("lib/helpers/viewport-helper", ["require", "exports", "module", "$", "underscore", "lib/support"], function(e, t, n) {
                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("lib/support"),
                    o = 300,
                    u, a, f = n.exports = {
                        hideAddressBar: null,
                        enableNativeScroll: null
                    }
            }),
            define("views/app.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform("#app{background:#f2f2f2}#app,#app>#content,#app>#content>div{height:100%}.app__header{position:fixed;top:0;left:0;height:44px;width:100%}.app__footerPanel{position:fixed;bottom:0;left:0;width:100%}.app__miniPlayer{display:none;position:relative}.app__displayMiniPlayer .app__miniPlayer{display:block}#content{padding-top:103px;opacity:1;-webkit-transition:padding .2s linear,opacity .5s linear;transition:padding .2s linear,opacity .5s linear}.app__hideUpsell #content{padding-top:44px}.app__upsell{position:absolute;padding-top:44px;width:100%}.app__displayMiniPlayer #content{padding-bottom:57px}.app__loading{-webkit-transition:opacity .5s linear;transition:opacity .5s linear;opacity:0;position:absolute;padding-top:44px;top:0;left:0;width:100%;height:100%;overflow:hidden}.show-throbber .app__loading{opacity:1}.show-throbber #content{opacity:0}#app.iPhone4Safari{height:416px}#app.iPhone5Safari{height:506px}")), data = null
            }),
            define("views/app.tmpl", ["vendor/handlebars-runtime", "views/header/header", "views/banner/upsell", "views/cookie-banner/cookie-banner", "views/play-controls/play-controls"], null),
            function(e, t) {
                if (typeof define == "function" && define.amd)
                    define("backbone", ["underscore", "$", "exports"], function(n, r, i) {
                        e.Backbone = t(e, i, n, r)
                    });
                else if (typeof exports != "undefined") {
                    var n = require("underscore");
                    t(e, exports, n)
                } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
            }(this, function(e, t, n, r) {
                var i = e.Backbone,
                    s = [],
                    o = s.push,
                    u = s.slice,
                    a = s.splice;
                t.VERSION = "1.1.2", t.$ = r, t.noConflict = null, t.emulateHTTP = !1, t.emulateJSON = !1;
                var f = t.Events = {
                        on: function(e, t, n) {
                            if (!c(this, "on", e, [t, n]) || !t) return this;
                            this._events || (this._events = {});
                            var r = this._events[e] || (this._events[e] = []);
                            return r.push({
                                callback: t,
                                context: n,
                                ctx: n || this
                            }), this
                        },
                        once: null,
                        off: null,
                        trigger: null,
                        stopListening: null
                    },
                    l = /\s+/,
                    c = function(e, t, n, r) {
                        if (!n) return !0;
                        if (typeof n == "object") {
                            for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                            return !1
                        }
                        if (l.test(n)) {
                            var s = n.split(l);
                            for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
                            return !1
                        }
                        return !0
                    },
                    h = null,
                    p = {
                        listenTo: "on",
                        listenToOnce: "once"
                    };
                n.each(p, function(e, t) {
                    f[t] = null
                }), f.bind = f.on, f.unbind = f.off, n.extend(t, f);
                var d = t.Model = null;
                n.extend(d.prototype, f, {
                    changed: null,
                    validationError: null,
                    idAttribute: "id",
                    initialize: null,
                    toJSON: null,
                    sync: null,
                    get: null,
                    escape: null,
                    has: null,
                    set: null,
                    unset: null,
                    clear: null,
                    hasChanged: null,
                    changedAttributes: null,
                    previous: null,
                    previousAttributes: null,
                    fetch: null,
                    save: null,
                    destroy: null,
                    url: null,
                    parse: null,
                    clone: null,
                    isNew: null,
                    isValid: null,
                    _validate: null
                });
                var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
                n.each(v, function(e) {
                    d.prototype[e] = null
                });
                var m = t.Collection = null,
                    g = {
                        add: !0,
                        remove: !0,
                        merge: !0
                    },
                    y = {
                        add: !0,
                        remove: !1
                    };
                n.extend(m.prototype, f, {
                    model: d,
                    initialize: null,
                    toJSON: null,
                    sync: null,
                    add: null,
                    remove: null,
                    set: null,
                    reset: null,
                    push: null,
                    pop: null,
                    unshift: null,
                    shift: null,
                    slice: null,
                    get: null,
                    at: null,
                    where: null,
                    findWhere: null,
                    sort: null,
                    pluck: null,
                    fetch: null,
                    create: null,
                    parse: null,
                    clone: null,
                    _reset: null,
                    _prepareModel: null,
                    _addReference: null,
                    _removeReference: null,
                    _onModelEvent: null
                });
                var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
                n.each(b, function(e) {
                    m.prototype[e] = null
                });
                var w = ["groupBy", "countBy", "sortBy", "indexBy"];
                n.each(w, function(e) {
                    m.prototype[e] = null
                });
                var E = t.View = null,
                    S = /^(\S+)\s*(.*)$/,
                    x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                n.extend(E.prototype, f, {
                    tagName: "div",
                    $: null,
                    initialize: null,
                    render: null,
                    remove: null,
                    setElement: null,
                    delegateEvents: null,
                    undelegateEvents: null,
                    _ensureElement: null
                }), t.sync = null;
                var T = typeof window != "undefined" && !!window.ActiveXObject && (!window.XMLHttpRequest || !(new XMLHttpRequest).dispatchEvent),
                    N = {
                        create: "POST",
                        update: "PUT",
                        patch: "PATCH",
                        "delete": "DELETE",
                        read: "GET"
                    };
                t.ajax = null;
                var C = t.Router = null,
                    k = /\((.*?)\)/g,
                    L = /(\(\?)?:\w+/g,
                    A = /\*\w+/g,
                    O = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                n.extend(C.prototype, f, {
                    initialize: null,
                    route: null,
                    execute: null,
                    navigate: null,
                    _bindRoutes: null,
                    _routeToRegExp: null,
                    _extractParameters: null
                });
                var M = t.History = function() {
                        this.handlers = [], n.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
                    },
                    _ = /^[#\/]|\s+$/g,
                    D = /^\/+|\/+$/g,
                    P = /msie [\w.]+/,
                    H = /\/$/,
                    B = /#.*$/;
                M.started = !1, n.extend(M.prototype, f, {
                    interval: 50,
                    atRoot: null,
                    getHash: null,
                    getFragment: null,
                    start: null,
                    stop: null,
                    route: null,
                    checkUrl: null,
                    loadUrl: null,
                    navigate: null,
                    _updateHash: null
                }), t.history = new M;
                var j = function(e, t) {
                    var r = this,
                        i;
                    e && n.has(e, "constructor") ? i = e.constructor : i = null, n.extend(i, r, t);
                    var s = function() {
                        this.constructor = i
                    };
                    return s.prototype = r.prototype, i.prototype = new s, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
                };
                d.extend = m.extend = C.extend = E.extend = M.extend = j;
                var F = null,
                    I = null;
                return t
            }),
            define("lib/mixin", ["require", "exports", "module", "vendor/remixin/dist/remixin-cjs"], function(e, t, n) {
                n.exports = e("vendor/remixin/dist/remixin-cjs")
            }),
            define("lib/mixins/observing", ["require", "exports", "module", "underscore", "lib/backbone", "lib/mixin"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/backbone"),
                    s = e("lib/mixin"),
                    o = n.exports = new s(r.extend({
                        around: {
                            set: function(e, t, n, r) {
                                var i = r && r.silent,
                                    s, o;
                                return i || (o = this.get(t)), s = e(t, n, r), !i && o !== n && this.trigger(t, {
                                    prev: o,
                                    current: n
                                }), s
                            },
                            unset: null
                        },
                        before: {
                            reset: null
                        }
                    }, i.Events))
            }),
            define("lib/store", ["require", "exports", "module", "underscore"], function(e, t, n) {
                var r = e("underscore"),
                    i = {};
                ["each", "forEach", "map", "find", "detect", "filter", "select", "reduce", "reject", "every", "all", "any", "some", "include", "contains"].forEach(function(e) {
                    i[e] = null
                });
                var s = n.exports = Class.extend([i, {
                    initialize: function(e) {
                        this._store = {}, this.length = 0, this._final = !1, this.maxLength = e && e.maxLength || !1, this.maxLength && (this._keys = [])
                    },
                    maxLength: 0,
                    get: function(e) {
                        return this._store[e]
                    },
                    set: function(e, t) {
                        return this.has(e) ? this.maxLength && this._keys.splice(this._keys.indexOf(e), 1) : (++this.length, this.maxLength && this.length > this.maxLength && this.unset(this._keys[0])), this.maxLength && this._keys.push(e), this._store[e] = t, this
                    },
                    unset: null,
                    reset: null,
                    has: function(e) {
                        return this._store.hasOwnProperty(e)
                    },
                    keys: null,
                    finalize: function() {
                        this._final = !0
                    }
                }])
            }),
            function(t, n) {
                typeof exports == "object" && typeof module == "object" ? module.exports = n() : typeof define == "function" && define.amd ?
                    define("vendor/airbrake-js/airbrake-js", [], n) : typeof exports == "object" ? exports.Client = n() : (t.airbrakeJs = t.airbrakeJs || {}, t.airbrakeJs.Client = n())
            }(this, function() {
                return function(e) {
                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var i = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                    }
                    var t = {};
                    return n.m = e, n.c = t, n.i = null, n.d = null, n.n = null, n.o = null, n.p = "", n(n.s = 20)
                }([function(e, t, n) {
                    "use strict";

                    

                    

                    

                    

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = r;
                    var s = function() {
                        
                        return e.prototype.truncate = null, e.prototype.getPath = null, e.prototype.truncateString = null, e.prototype.truncateArray = null, e.prototype.truncateObject = null, e
                    }();
                    t.truncate = o
                }, function(e, t, n) {
                    "use strict";
                    var r = n(14),
                        i = n(13),
                        s = n(7),
                        o = n(6),
                        u = n(9),
                        a = n(5),
                        f = n(10),
                        l = n(8),
                        c = n(18),
                        h = n(15),
                        p = n(17),
                        d = n(19),
                        v = n(16),
                        m = n(12),
                        g = null();
                    e.exports = g
                }, function(e, t) {
                    Object.assign || (Object.assign = null)
                }, function(e, t, n) {
                    var r = !1;
                    (function(t, i) {
                        "use strict";
                        typeof r == "function" && r.amd ? r("vendor/airbrake-js/airbrake-js", "error-stack-parser", ["stackframe"], i) : e.exports = i(n(4))
                    })(this, function(t) {
                        "use strict";
                        var n = /(^|@)\S+\:\d+/,
                            r = /^\s*at .*(\S+\:\d+|\(native\))/m,
                            i = /^(eval@)?(\[native code\])?$/;
                        return {
                            parse: null,
                            extractLocation: null,
                            parseV8OrIE: null,
                            parseFFOrSafari: null,
                            parseOpera: null,
                            parseOpera9: null,
                            parseOpera10: null,
                            parseOpera11: null
                        }
                    })
                }, function(e, t, n) {
                    var r = !1;
                    (function(t, n) {
                        "use strict";
                        typeof r == "function" && r.amd ? r("vendor/airbrake-js/airbrake-js", "stackframe", [], n) : e.exports = n()
                    })(this, function() {
                        "use strict";

                        

                        function t(e) {
                            return e[0].toUpperCase() + e.substring(1)
                        }

                        function n(e) {
                            return null
                        }

                        
                        var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            i = ["columnNumber", "lineNumber"],
                            s = ["fileName", "functionName", "source"],
                            o = ["args"],
                            u = r.concat(i, s, o);
                        a.prototype = {
                            getArgs: null,
                            setArgs: null,
                            getEvalOrigin: null,
                            setEvalOrigin: null,
                            toString: null
                        };
                        for (var f = 0; f < r.length; f++) a.prototype["get" + t(r[f])] = n(r[f]), a.prototype["set" + t(r[f])] = function(e) {
                            return null
                        }(r[f]);
                        for (var l = 0; l < i.length; l++) a.prototype["get" + t(i[l])] = n(i[l]), a.prototype["set" + t(i[l])] = function(t) {
                            return null
                        }(i[l]);
                        for (var c = 0; c < s.length; c++) a.prototype["get" + t(s[c])] = n(s[c]), a.prototype["set" + t(s[c])] = function(e) {
                            return null
                        }(s[c]);
                        return a
                    })
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = new RegExp(["^", "\\[(\\$.+)\\]", "\\s", "([\\s\\S]+)", "$"].join(""));
                    t.default = i
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = r
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = ["Script error", "Script error.", "InvalidAccessError"];
                    t.default = i
                }, function(module, exports, __webpack_require__) {
                    "use strict";

                    
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    });
                    var myProcess, os;
                    try {
                        myProcess = eval("process"), os = eval("require")("os")
                    } catch (_) {}
                    exports.default = filter
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = new RegExp(["^", "Uncaught\\s", "(.+?)", ":\\s", "(.+)", "$"].join(""));
                    t.default = i
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = r
                }, function(e, t, n) {
                    "use strict";

                    

                    

                    function o(e) {
                        return null
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = ["type", "name", "src"];
                    t.makeEventHandler = o
                }, function(module, exports, __webpack_require__) {
                    "use strict";

                    
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    });
                    var dom_1 = __webpack_require__(11),
                        Historian = function() {
                            function Historian() {
                                var _this = this;
                                this.historyMaxLen = 20, this.notifiers = [], this.errors = [], this.ignoreWindowError = 0, this.history = [], this.ignoreNextXHR = 0;
                                if (typeof window == "object") {
                                    var self_1 = this,
                                        oldHandler_1 = window.onerror;
                                    window.onerror = null
                                } else {
                                    var p = eval("process");
                                    p.on("uncaughtException", null), p.on("unhandledRejection", null)
                                }
                                typeof document == "object" && this.dom(), typeof console == "object" && this.console(), typeof fetch == "function" && this.fetch(), typeof XMLHttpRequest != "undefined" && this.xhr(), typeof history == "object" && this.location()
                            }
                            return Historian.prototype.registerNotifier = null, Historian.prototype.notify = null, Historian.prototype.notifyNotifiers = null, Historian.prototype.onerror = null, Historian.prototype.ignoreNextWindowError = null, Historian.prototype.getHistory = null, Historian.prototype.pushHistory = null, Historian.prototype.isDupState = null, Historian.prototype.dom = function() {
                                var e = dom_1.makeEventHandler(this);
                                document.addEventListener("DOMContentLoaded", e), window.addEventListener("load", e), document.addEventListener("click", e), document.addEventListener("keypress", e), window.addEventListener("error", null, !0)
                            }, Historian.prototype.console = function() {
                                var e = this,
                                    t = ["debug", "log", "info", "warn", "error"],
                                    n = function(t) {
                                        if (!(t in console)) return "continue";
                                        var n = console[t],
                                            r = null;
                                        console[t] = r
                                    };
                                for (var r = 0, i = t; r < i.length; r++) {
                                    var s = i[r];
                                    n(s)
                                }
                            }, Historian.prototype.fetch = null, Historian.prototype.xhr = null, Historian.prototype.recordReq = null, Historian.prototype.location = null, Historian.prototype.recordLocation = null, Historian
                        }();
                    exports.default = Historian, exports.historian = new Historian, exports.getHistory = getHistory
                }, function(e, t, n) {
                    "use strict";

                    

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(3),
                        i = typeof console == "object" && console.warn;
                    t.default = o
                }, function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                        
                        return e.prototype.then = null, e.prototype.catch = null, e.prototype.resolve = null, e.prototype.reject = null, e
                    }();
                    t.default = r
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(0);
                    t.default = i
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(0),
                        i = 0;
                    t.default = s
                }, function(module, exports, __webpack_require__) {
                    "use strict";

                    
                    Object.defineProperty(exports, "__esModule", {
                        value: !0
                    });
                    var jsonify_notice_1 = __webpack_require__(0),
                        request;
                    try {
                        request = eval("require")("request")
                    } catch (_) {}
                    exports.default = report
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.detectReporter = r
                }, function(e, t, n) {
                    "use strict";

                    
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(0);
                    t.default = i
                }, function(e, t, n) {
                    n(2), e.exports = n(1)
                }])
            }),
            define("lib/mixins/persistent", ["require", "exports", "module", "underscore", "lib/mixin", "lib/support"], function(e, t, n) {
                
                var r = e("underscore"),
                    i = e("lib/mixin"),
                    s = e("lib/support"),
                    o = "MW",
                    u = "::",
                    a = new RegExp("^" + o + u + "(\\S+?)" + u + "(\\S+)"),
                    f, l, c, h, p = {
                        local: {},
                        session: {}
                    },
                    d = n.exports = new i({
                        storage: null,
                        keyName: null,
                        type: null,
                        namespace: null,
                        around: {
                            initialize: function(e, t, n) {
                                n = n || "local";
                                if (p[n][t]) return p[n][t];
                                p[n][t] = this, e(), this.type = n, this.namespace = t, this.storage = c(n, t), this.keyName = l(n, t), this._store = f(this), this.length = r.keys(this._store).length
                            }
                        },
                        after: {
                            set: null,
                            unset: null,
                            reset: null
                        },
                        dispose: null,
                        write: null
                    });
                l = function(e, t) {
                    return [o, e, t].join(u)
                }, h = null, c = function(e) {
                    var t;
                    return e === "local" && s.localStorage ? t = window.localStorage : e === "session" && s.sessionStorage && (t = window.sessionStorage), t
                }, f = function(e) {
                    var t = {},
                        n = e.storage;
                    return n && (t = JSON.parse(n.getItem(e.keyName) || "{}")), t
                }, window.addEventListener("storage", v, !1)
            }),
            define("lib/collection", ["require", "exports", "module", "underscore", "$", "lib/endpoints", "lib/backbone", "lib/single", "lib/url"], function(e, t, n) {
                var r, i = e("underscore"),
                    s = e("$"),
                    o = e("lib/endpoints"),
                    u = e("lib/backbone"),
                    a = e("lib/single"),
                    f = e("lib/url"),
                    l = {},
                    c, h;
                r = u.Collection.extend({
                    next_href: null,
                    lastFetchTime: null,
                    model: l,
                    defaults: {
                        offset: 0,
                        limit: 10,
                        secret_token: null
                    },
                    initialize: null,
                    setup: s.noop,
                    getEndpointUrl: o.getEndpointUrl,
                    _prepareModel: null,
                    _removeReference: null,
                    fetch: null,
                    bulkFetch: null,
                    url: null,
                    parse: null,
                    empty: null,
                    hasDataForView: null,
                    isPopulated: null,
                    isPrivate: null,
                    isFullyPopulated: null,
                    setLimit: null,
                    indexOfEquivalentModel: null,
                    compareModels: null
                }), n.exports = a.applyTo(r, {
                    hashFn: null,
                    onHold: null,
                    onRelease: null
                }), h = null, c = null
            }),
            define("lib/futures", ["require", "exports", "module", "$", "underscore"], function(e, t, n) {
                var r, i = e("$"),
                    s = e("underscore");
                n.exports = r = {
                    defer: null,
                    settled: null,
                    all: null,
                    resolve: null,
                    reject: null,
                    promisify: null,
                    call: null,
                    mapEither: null,
                    sequential: null,
                    delay: null
                }
            }),
            define("lib/mixins/audio-source", ["require", "exports", "module", "lib/mixin"], function(e, t, n) {
                var r = e("lib/mixin"),
                    i = n.exports = new r({
                        requires: ["getSourceInfo", "getSounds"],
                        defaults: {
                            isAudioSource: !0
                        }
                    })
            }),
            define("models/sound", ["require", "exports", "module", "underscore", "models/audible-interface", "lib/mixins/models/batching", "lib/mobi-audio", "lib/model", "lib/url", "lib/mixins/urn", "lib/endpoints"], null),
            define("shared/lib/url", ["require", "exports", "module", "underscore"], null),
            define("shared/vendor/routeabout/routeabout", ["require", "exports", "module"], null),
            define("lib/tracking/comscore", ["require", "exports", "module", "$"], function(e, t, n) {
                var r = e("$"),
                    i = "comScore-beacon",
                    s = "16601931",
                    o = n.exports = {
                        init: null,
                        destroy: null
                    }
            }),
            define("lib/tracking/helpers/core", ["require", "exports", "module", "underscore", "config"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("config"),
                    s, o = {
                        listen: "tracks"
                    },
                    u = {
                        search: "category"
                    },
                    a = {
                        suggestions: {
                            args: {
                                category: "suggestions"
                            },
                            layoutName: "search"
                        }
                    },
                    f = n.exports = {
                        getUserId: null,
                        getLevel: null,
                        getChapter: null,
                        getContext: null,
                        getAudioContext: null,
                        saveAudioContext: null,
                        getImpressionEvent: null,
                        getImpressionContext: null,
                        getURN: null,
                        getIdentifier: null
                    }
            }),
            define("vendor/event-gateway/event-gateway", ["require", "exports", "module"], function(e, t, n) {
                (function() {
                    function N() {
                        clearTimeout(p), t = r = i = s = o = u = a = f = l = d = p = m = T = window.__sc_events = undefined, v = [], S = !0, x = !0, h = null
                    }

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    

                    function $(e) {
                        return null
                    }
                    var e, t, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g = {},
                        y = "sc_anonymous_id",
                        b = 3e4,
                        w = "https://telemetry.soundcloud.com",
                        E = /^[^v]/,
                        S = !0,
                        x = !0,
                        T = !1;
                    N(), e = {
                        _anonymousId: null,
                        initialize: null,
                        deinitialize: null,
                        toggle: null,
                        loadQueue: B,
                        saveQueue: null,
                        useCookies: null,
                        setUser: null,
                        setExperiments: null,
                        getAnonymousId: null,
                        setAuthToken: null,
                        logEvent: F,
                        pageview: null,
                        impression: null,
                        click: null,
                        audio: null,
                        audioPerformance: null,
                        audioError: null,
                        appLoad: null,
                        statsView: null,
                        anonymousIdStore: {
                            get: $(null),
                            set: $(null)
                        },
                        flush: j
                    }, typeof n != "undefined" && n.exports ? n.exports = e : (window.SC = window.SC || {}, window.SC.EventGateway = e)
                })()
            }),
            define("lib/lingua", ["require", "exports", "module", "lib/cookies", "vendor/i18n/i18n", "lib/persistent-store", "shared/config/supported-locales"], function(e, t, n) {
                function p(e) {
                    r.set(f.getLocaleCookieName(), e)
                }

                function d(e) {
                    var t = a.get(u);
                    t && (p(e), a.dispose())
                }
                var r = e("lib/cookies"),
                    i = e("vendor/i18n/i18n"),
                    s = e("lib/persistent-store"),
                    o = e("shared/config/supported-locales"),
                    u = "locale",
                    a = new s(u),
                    f, l, c = o.locales,
                    h = n.exports = {
                        initialize: function(e) {
                            l = c[e] ? e : o.defaultLocale, f = f || new i, f.setLocale(l), f.extend(c[l]), this.numberHelper = f.number, this.dateTimeHelper = f.dateTime, d(l)
                        },
                        initializeFromBasicSettings: function() {
                            this.initialize(window.document.documentElement.getAttribute("lang")), p(l)
                        },
                        getLocale: function() {
                            return l
                        },
                        getCurrentLanguage: null,
                        t: function(e, t, n) {
                            n = n || {};
                            var r = f.t(e, t, n.context, n.comment);
                            return r
                        },
                        tp: null
                    }
            }),
            define("lib/tracking/types/actions", ["require", "exports", "module"], function(e, t, n) {
                n.exports = {
                    navigate: {
                        identifiers: ["home", "sign-in", "user", "track", "playlist"]
                    },
                    submit: {
                        identifiers: ["signin_deeplink_button:signin", "download_app_button:download", "download_app_badge:download", "like", "get_the_app::like", "consumer_sub_ad:click"]
                    },
                    cancel: {
                        identifiers: ["get_the_app_cancel::like"]
                    }
                }
            }),
            define("lib/tracking/types/impressions", ["require", "exports", "module"], function(e, t, n) {
                var r = n.exports = ["searchItem", "download_app_interstitial", "upsell_banner", "consumer_sub_ad"]
            }),
            define("lib/tracking/types/pageviews", ["require", "exports", "module", "config"], function(e, t, n) {
                

                
                var r = e("config");
                n.exports = {
                    "default": {
                        chapter: ["default", window.location],
                        level: "default"
                    },
                    listen: {
                        chapter: s,
                        level: "tracks"
                    },
                    search: {
                        chapter: s.bind(s, "category"),
                        level: "search"
                    },
                    "static-page": {
                        chapter: s.bind(s, "pageName"),
                        level: "static-page"
                    },
                    messages: {
                        chapter: s,
                        level: "messages"
                    },
                    error: {
                        chapter: s,
                        level: "error-page"
                    },
                    playlist: {
                        chapter: s,
                        level: "playlist"
                    },
                    premium: {
                        chapter: s,
                        level: "premium"
                    },
                    "consumer-premium": {
                        chapter: s,
                        level: "consumer-premium"
                    },
                    user: {
                        chapter: s,
                        level: "profile"
                    },
                    "people-directory": {
                        chapter: s,
                        level: "people-directory"
                    }
                }
            }),
            define("lib/model", ["require", "exports", "module", "$", "underscore", "api-wrapper", "lib/backbone", "config", "lib/connect", "lib/endpoints", "lib/mixins/models/data-dns-prefetcher", "lib/single", "lib/url", "lib/futures"], function(e, t, n) {
                
                var r, i = e("$"),
                    s = e("underscore"),
                    o = e("api-wrapper"),
                    u = e("lib/backbone"),
                    a = e("config"),
                    f = e("lib/connect"),
                    l = e("lib/endpoints"),
                    c = e("lib/mixins/models/data-dns-prefetcher"),
                    h = e("lib/single"),
                    p = e("lib/url"),
                    d = e("lib/futures"),
                    v = Array.prototype.slice;
                r = u.Model.extend(c, {
                    resource_type: null,
                    lastFetchTime: null,
                    _submodels: null,
                    submodelMap: null,
                    getEndpointUrl: l.getEndpointUrl,
                    initialize: null,
                    setup: i.noop,
                    createSubmodel: null,
                    addSubmodel: null,
                    getAttributesToBeSaved: null,
                    save: null,
                    saveUrl: null,
                    destroy: null,
                    destroyUrl: null,
                    baseUrl: null,
                    url: null,
                    getSecretToken: null,
                    signedUrl: null,
                    equivalentTo: null,
                    toJSON: null,
                    parse: null,
                    extractSecretToken: i.noop,
                    toString: null,
                    hasDataForView: null,
                    updateResourceId: null,
                    attrExists: null,
                    getOrFetch: null
                }, {
                    _resolve: null
                }), n.exports = h.applyTo(r, {
                    hashFn: null,
                    onCleanup: null,
                    prepareArgs: null,
                    prepareInstance: null,
                    getIncrementValue: null
                })
            }),
            define("lib/mixins/urn", ["require", "exports", "module", "lib/mixin"], null),
            define("css", ["require", "exports", "module", "underscore", "lib/lingua", "lib/helpers/client-environment-helper"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/lingua"),
                    s = e("lib/helpers/client-environment-helper").device,
                    o = document.getElementsByTagName("head")[0],
                    u = n.exports = {
                        insert: null,
                        stringToStyleElement: function(e) {
                            var t = document.createElement("style");
                            return t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), t
                        },
                        transformDPI: function(e) {
                            return e.replace(/\/ldpi\//g, "/" + s.dpi + "/")
                        },
                        transformLocale: function(e) {
                            return e.replace(/\/en\//g, "/" + i.getLocale() + "/")
                        },
                        transform: function(e) {
                            return this.transformLocale(this.transformDPI(e))
                        }
                    }
            }),
            define("lib/console-box.css", ["require", "exports", "module", "css"], null),
            define("ajax", ["require", "exports", "module", "type-of"], function(require, exports, module) {
                

                

                

                

                

                

                

                

                

                

                

                

                

                

                
                var type;
                try {
                    type = require("type-of")
                } catch (ex) {
                    var r = require;
                    type = r("type")
                }
                var jsonpID = 0,
                    document = window.document,
                    key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                    scriptTypeRE = /^(?:text|application)\/javascript/i,
                    xmlTypeRE = /^(?:text|application)\/xml/i,
                    jsonType = "application/json",
                    htmlType = "text/html",
                    blankRE = /^\s*$/,
                    ajax = module.exports = null;
                ajax.active = 0, ajax.JSONP = null, ajax.settings = {
                    type: "GET",
                    beforeSend: empty,
                    success: empty,
                    error: empty,
                    complete: empty,
                    context: null,
                    global: !0,
                    xhr: null,
                    accepts: {
                        script: "text/javascript, application/javascript",
                        json: jsonType,
                        xml: "application/xml, text/xml",
                        html: htmlType,
                        text: "text/plain"
                    },
                    crossDomain: !1,
                    timeout: 0
                }, ajax.get = null, ajax.post = null, ajax.getJSON = null;
                var escape = encodeURIComponent
            }),
            define("classes", ["require", "exports", "module", "indexof"], function(e, t, n) {
                
                var r = e("indexof"),
                    i = /\s+/;
                n.exports = null, s.prototype.add = null, s.prototype.remove = null, s.prototype.toggle = null, s.prototype.array = null, s.prototype.has = s.prototype.contains = null
            }),
            define("vendor/zepto-events", ["require", "exports", "module"], function(e, t, n) {
                

                

                

                

                

                

                
                var r = {},
                    i = 1,
                    s = {},
                    o = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    },
                    u = {};
                u.each = null, s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents", t.add = add = null, t.remove = remove = null;
                var v = null,
                    m = null,
                    g = /^([A-Z]|layer[XY]$)/,
                    y = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };
                t.createProxy = createProxy = null, t.Event = Event = null
            }),
            define("lib/layout", ["require", "exports", "module", "underscore", "$", "lib/backbone", "css", "lib/helpers/title-helper", "lib/lingua", "lib/deferred-loader", "lib/mixins/layouts/performance-measuring", "lib/template"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("$"),
                    s = e("lib/backbone"),
                    o = e("css"),
                    u = e("lib/helpers/title-helper"),
                    a = e("lib/lingua"),
                    f = e("lib/deferred-loader"),
                    l = e("lib/mixins/layouts/performance-measuring"),
                    c = e("lib/template"),
                    h, p, d;
                h = "l-footer", p = "views/footer/footer", d = a.t("Enjoy the full SoundCloud experience with our app.", null, {
                    comment: "Default page title"
                });
                var v = n.exports = s.View.extend({
                    css: null,
                    template: null,
                    views: null,
                    _currentViews: null,
                    _viewPaths: null,
                    slots: null,
                    includeFooter: ".l-main",
                    footerClassName: "",
                    getPageUrn: null,
                    getPagePermalink: null,
                    initialize: null,
                    setArgs: null,
                    setup: null,
                    dispose: null,
                    switchLayout: null,
                    render: null,
                    setViews: null,
                    getChangeEventData: null,
                    setTitle: null,
                    getUpsellText: null,
                    t: a.t,
                    tp: a.tp
                });
                l.applyTo(v.prototype), u.initialize()
            }),
            define("lib/layouts/fullheight.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".l-fullheight{height:100%;background:#000}.l-fullheight>.l-main{height:100%}")), data = null
            }),
            define("lib/layouts/fullheight.tmpl", ["vendor/handlebars-runtime"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("lib/views/loading.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".loadingThrobber{background:transparent url(https://mobi.sndcdn.com/assets/images/ldpi/loader-81295ad2.gif) 50% 50% no-repeat;background-size:32px 32px;clear:both;text-align:center;height:40px;width:100%;padding:100px}.loadingThrobber.small{height:20px;background-size:16px}.loadingThrobber.fullscreen{top:44px;left:0;right:0;bottom:0;position:fixed;background-color:#f2f2f2;height:100%}")), data = null
            }),
            define("lib/event-bubble", ["require", "exports", "module"], function(e, t, n) {
                var r = n.exports = Class.extend({
                    _propagate: !0,
                    data: null,
                    initialize: null,
                    stopPropagation: null,
                    isPropagationStopped: null
                })
            }),
            define("lib/views/mixins/stateful", ["require", "exports", "module", "underscore", "lib/mixin"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/mixin"),
                    s = n.exports = new i({
                        states: null,
                        _states: null,
                        toggleState: null,
                        getState: null
                    })
            }),
            define("lib/template", ["require", "exports", "module", "underscore", "vendor/handlebars-runtime", "lib/subview-plugin", "lib/template-helpers"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("vendor/handlebars-runtime"),
                    s = e("lib/subview-plugin"),
                    o = e("lib/template-helpers");
                r.each(o, function(e, t) {
                    i.registerHelper(t, e)
                });
                var u = n.exports = {
                    render: null,
                    subviews: null
                }
            }),
            define("vendor/handlebars-runtime", ["require", "exports", "module"], function(e, t, n) {
                var r = function() {
                    var e = function() {
                            "use strict";

                            
                            var e;
                            return t.prototype.toString = null, e = t, e
                        }(),
                        t = function(e) {
                            "use strict";

                            

                            function u(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }

                            

                            
                            var t = {},
                                n = e,
                                r = {
                                    "&": "&amp;",
                                    "<": "&lt;",
                                    ">": "&gt;",
                                    '"': "&quot;",
                                    "'": "&#x27;",
                                    "`": "&#x60;"
                                },
                                i = /[&<>"'`]/g,
                                s = /[&<>"'`]/;
                            t.extend = u;
                            var a = Object.prototype.toString;
                            t.toString = a;
                            var f = function(e) {
                                return typeof e == "function"
                            };
                            f(/x/) && (f = null);
                            var f;
                            t.isFunction = f;
                            var l = Array.isArray || null;
                            return t.isArray = l, t.escapeExpression = c, t.isEmpty = h, t
                        }(e),
                        n = function() {
                            "use strict";

                            
                            var e, t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                            return n.prototype = new Error, e = n, e
                        }(),
                        r = function(e, t) {
                            "use strict";

                            function h(e, t) {
                                this.helpers = e || {}, this.partials = t || {}, p(this)
                            }

                            function p(e) {
                                e.registerHelper("helperMissing", null), e.registerHelper("blockHelperMissing", null), e.registerHelper("each", null), e.registerHelper("if", null), e.registerHelper("unless", null), e.registerHelper("with", null), e.registerHelper("log", null)
                            }

                            
                            var n = {},
                                r = e,
                                i = t,
                                s = "1.3.0";
                            n.VERSION = s;
                            var o = 4;
                            n.COMPILER_REVISION = o;
                            var u = {
                                1: "<= 1.0.rc.2",
                                2: "== 1.0.0-rc.3",
                                3: "== 1.0.0-rc.4",
                                4: ">= 1.0.0"
                            };
                            n.REVISION_CHANGES = u;
                            var a = r.isArray,
                                f = r.isFunction,
                                l = r.toString,
                                c = "[object Object]";
                            n.HandlebarsEnvironment = h, h.prototype = {
                                constructor: h,
                                logger: d,
                                log: v,
                                registerHelper: function(e, t, n) {
                                    if (l.call(e) === c) {
                                        if (n || t) throw new i("Arg not supported with multiple helpers");
                                        r.extend(this.helpers, e)
                                    } else n && (t.not = n), this.helpers[e] = t
                                },
                                registerPartial: null
                            };
                            var d = {
                                methodMap: {
                                    0: "debug",
                                    1: "info",
                                    2: "warn",
                                    3: "error"
                                },
                                DEBUG: 0,
                                INFO: 1,
                                WARN: 2,
                                ERROR: 3,
                                level: 3,
                                log: null
                            };
                            n.logger = d, n.log = v;
                            var m = null;
                            return n.createFrame = m, n
                        }(t, n),
                        i = function(e, t, n) {
                            "use strict";

                            

                            function f(e, t) {
                                if (!t) throw new s("No environment passed to template");
                                var n = null,
                                    r = {
                                        escapeExpression: i.escapeExpression,
                                        invokePartial: n,
                                        programs: [],
                                        program: null,
                                        merge: null,
                                        programWithDepth: t.VM.programWithDepth,
                                        noop: t.VM.noop,
                                        compilerInfo: null
                                    };
                                return null
                            }

                            

                            

                            

                            
                            var r = {},
                                i = e,
                                s = t,
                                o = n.COMPILER_REVISION,
                                u = n.REVISION_CHANGES;
                            return r.checkRevision = a, r.template = f, r.programWithDepth = l, r.program = c, r.invokePartial = h, r.noop = p, r
                        }(t, n, r),
                        s = function(e, t, n, r, i) {
                            "use strict";
                            var s, o = e,
                                u = t,
                                a = n,
                                f = r,
                                l = i,
                                c = function() {
                                    var e = new o.HandlebarsEnvironment;
                                    return f.extend(e, o), e.SafeString = u, e.Exception = a, e.Utils = f, e.VM = l, e.template = function(t) {
                                        return l.template(t, e)
                                    }, e
                                },
                                h = c();
                            return h.create = c, s = h, s
                        }(r, e, n, t, i);
                    return s
                }();
                n.exports = r
            }),
            define("views/header/header", ["require", "exports", "module", "lib/event-bus", "lib/tracking/tracking-core", "lib/view", "views/header/header.css", "views/header/header.tmpl"], function(e, t, n) {
                

                

                
                var r = e("lib/event-bus"),
                    i = e("lib/tracking/tracking-core"),
                    s = e("lib/view"),
                    o = n.exports = s.extend({
                        tagName: "header",
                        className: "header sc-selection-disabled",
                        attributes: {
                            id: "header",
                            role: "banner"
                        },
                        events: {
                            "click .header__logo": a
                        },
                        bubbleEvents: {
                            "searchButton:click": u
                        },
                        states: {
                            "small-logo": "smallLogo"
                        },
                        css: e("views/header/header.css"),
                        template: e("views/header/header.tmpl"),
                        setup: null,
                        dispose: null,
                        renderDecorate: null
                    })
            }),
            define("views/banner/upsell", ["require", "exports", "module", "underscore", "config", "lib/helpers/consumer-sub-upsell-helper", "lib/helpers/client-environment-helper", "lib/event-bus", "lib/views/fullscreen-overlay", "lib/views/mixins/impression-on-render", "views/banner/launch-app", "lib/lingua", "lib/native-links", "lib/play-manager", "lib/tracking/tracking-core", "lib/views/mixins/update-on-layout-change", "lib/view", "views/banner/upsell.css", "views/banner/upsell.tmpl"], function(e, t, n) {
                

                

                

                

                

                

                

                

                

                

                

                
                var r = e("underscore"),
                    i = e("config"),
                    s = e("lib/helpers/consumer-sub-upsell-helper"),
                    o = e("lib/helpers/client-environment-helper").device,
                    u = e("lib/event-bus"),
                    a = e("lib/views/fullscreen-overlay"),
                    f = e("lib/views/mixins/impression-on-render"),
                    l = e("views/banner/launch-app"),
                    c = e("lib/lingua"),
                    h = e("lib/native-links"),
                    p = e("lib/play-manager"),
                    d = e("lib/tracking/tracking-core"),
                    v = e("lib/views/mixins/update-on-layout-change"),
                    m = e("lib/view"),
                    g = 200,
                    y = n.exports = m.extend(v, f.withOptions({
                        impressionName: "upsell_banner"
                    }), {
                        className: "upsellBanner",
                        css: e("views/banner/upsell.css"),
                        template: e("views/banner/upsell.tmpl"),
                        events: {
                            "click .upsellBanner__appButton": b,
                            "click .upsellBanner__consubButton": w
                        },
                        element2selector: {
                            "upsell-button": ".upsellBanner__appButton,.upsellBanner__consubButton"
                        },
                        states: {
                            launchAppOverlayVisible: "m-launch-app-overlay-visible",
                            hidden: null,
                            transitionVisibility: "transitionVisibility",
                            consubUpsell: null
                        },
                        setup: null,
                        dispose: null,
                        renderDecorate: null,
                        getTemplateData: null
                    })
            }),
            define("views/cookie-banner/cookie-banner", ["require", "exports", "module", "router", "lib/view", "lib/persistent-store", "views/cookie-banner/cookie-banner.css", "views/cookie-banner/cookie-banner.tmpl"], function(e, t, n) {
                
                var r = e("router"),
                    i = e("lib/view"),
                    s = e("lib/persistent-store"),
                    o = new s("announcements"),
                    u = "cookies-2018-05-01",
                    a = n.exports = i.extend({
                        className: "cookieBanner",
                        css: e("views/cookie-banner/cookie-banner.css"),
                        template: e("views/cookie-banner/cookie-banner.tmpl"),
                        events: {
                            "click .cookieBanner__dismiss": f
                        },
                        states: {
                            dismissed: "m-dismissed"
                        },
                        setup: null,
                        getTemplateData: null
                    })
            }),
            define("views/play-controls/play-controls", ["require", "exports", "module", "lib/event-bus", "lib/play-manager", "lib/view", "views/play-controls/play-controls.css", "views/play-controls/play-controls.tmpl"], null),
            define("vendor/remixin/dist/remixin-cjs", ["require", "exports", "module", "underscore"], function(e, t, n) {
                ! function(t) {
                    var r = t(e("underscore"));
                    n.exports = r
                }(function(e) {
                    function t() {
                        this.mixins = e.initial(arguments), this.properties = e.last(arguments)
                    }

                    function n(e, t) {
                        this.applyTo = function(n) {
                            e.applyTo(n, t)
                        }
                    }

                    

                    

                    

                    

                    

                    
                    var f = ["before", "after", "around", "requires", "override", "defaults", "applyTo", "requirePrototype", "merge"],
                        l = /\s+/;
                    return e.extend(t.prototype, {
                        applyTo: function(t, n) {
                            var r = this.properties;
                            this.defaults(t, r.defaults), this.extend(t, r), this.merge(t, r.merge), e.invoke(this.mixins, "applyTo", t), ["requires", "requirePrototype", "override", "before", "after", "around"].forEach(function(e) {
                                this[e](t, r[e])
                            }, this), r.applyTo && r.applyTo.call(this, t, n)
                        },
                        withOptions: function(e) {
                            return new n(this, e)
                        },
                        before: function(t, n) {
                            e.each(n, function(e, n) {
                                var r = t[n];
                                t[n] = null
                            })
                        },
                        after: function(t, n) {
                            e.each(n, function(e, n) {
                                var r = t[n];
                                t[n] = function() {
                                    var t = r.apply(this, arguments);
                                    return e.apply(this, arguments), t
                                }
                            })
                        },
                        around: function(t, n) {
                            e.each(n, function(e, n) {
                                var r = t[n];
                                t[n] = function() {
                                    var t = 0,
                                        n = arguments.length,
                                        i = Array(n + 1);
                                    for (i[0] = r.bind(this); n > t; ++t) i[t + 1] = arguments[t];
                                    return e.apply(this, i)
                                }
                            })
                        },
                        override: function(t, n) {
                            e.extend(t, n)
                        },
                        defaults: function(t, n) {
                            e.each(n, function(e, n) {
                                t.hasOwnProperty(n) || (t[n] = e)
                            })
                        },
                        merge: function(t, n) {
                            e.each(n, null)
                        },
                        extend: function(t, n) {
                            var r = e.omit(n, f);
                            e.extend(t, r)
                        },
                        requires: e.noop,
                        requirePrototype: e.noop
                    }), n.prototype = t.prototype, t
                })
            }),
            define("lib/endpoints", ["require", "exports", "module", "underscore", "lib/url", "config/endpoints"], function(e, t, n) {
                

                
                var r = e("underscore"),
                    i = e("lib/url"),
                    s = e("config/endpoints");
                n.exports = {
                    getEndpointUrl: o
                }
            }),
            define("lib/single", ["require", "exports", "module", "$", "underscore", "backbone", "lib/gc-store"], function(e, t, n) {
                var r = e("$"),
                    i = e("underscore"),
                    s = e("backbone"),
                    o = e("lib/gc-store"),
                    u = r.noop,
                    a = 0,
                    f = 6e4,
                    l;
                n.exports = {
                    applyTo: function c(e, t) {
                        t = i.extend({
                            neverRelease: !1,
                            cleanupInstantly: !1,
                            hashFn: null,
                            prepareArgs: null,
                            prepareInstance: null,
                            getIncrementValue: null,
                            onHold: u,
                            onRelease: u,
                            onCleanup: null,
                            GC_INTERVAL: f
                        }, t, e), delete t.prototype;
                        var n, r = e.extend || s.Model.extend,
                            h = t.neverRelease,
                            p, d, v, m, g, y;
                        return n = new o({
                            autoCleanup: t.cleanupInstantly,
                            onCleanup: t.onCleanup,
                            onIncrement: t.onHold,
                            onDecrement: t.onRelease
                        }), h ? v = m = g = u : (g = null, v = null, m = null), y = {
                            hold: v,
                            release: m,
                            _usageCount: null,
                            constructor: null
                        }, p = r.call(e, y, t), i.extend(p, {
                            __constructor__: l(e),
                            reset: null,
                            extend: function(t) {
                                var n, s;
                                return t = t || {}, i.isArray(t) && (t = i.extend.apply(null, [{}].concat(t))), t.hasOwnProperty("constructor") || (t.constructor = l(e)), n = r.apply(p, arguments), n.extend = r, s = c(n, p), s.__super__ && (s.__super__ = s.__super__.constructor.__super__), s
                            },
                            instances: function() {
                                return n.add = null, n
                            }(),
                            getNewInstance: null
                        })
                    }
                }, l = function(e) {
                    return e.__constructor__ || e
                }
            }),
            define("models/audible-interface", ["require", "exports", "module", "lib/mixins/audio-source", "lib/model", "lib/math"], function(e, t, n) {
                
                var r = e("lib/mixins/audio-source"),
                    i = e("lib/model"),
                    s = e("lib/math"),
                    o = n.exports = i.extend(r, {
                        play: u,
                        pause: u,
                        isPlaying: u,
                        getPrevSound: u,
                        getCurrentSound: u,
                        getNextSound: u,
                        getFirstSound: u,
                        getLastSound: u,
                        getSounds: u,
                        setup: null,
                        getSourceInfo: null,
                        isPrivate: null,
                        isPublic: null,
                        toggle: null,
                        isPaused: null,
                        duration: null,
                        progress: null
                    })
            }),
            define("lib/mixins/models/batching", ["require", "exports", "module", "underscore", "lib/mixin", "lib/futures", "lib/errors/unauthorized-viewer", "lib/url"], function(e, t, n) {
                

                

                

                
                var r = e("underscore"),
                    i = e("lib/mixin"),
                    s = e("lib/futures"),
                    o = e("lib/errors/unauthorized-viewer"),
                    u = e("lib/url"),
                    a = 50,
                    f = 50,
                    l = null,
                    c = n.exports = new i({
                        applyTo: null
                    });
                d.prototype = {
                    getIds: null,
                    add: null,
                    flush: null
                }
            }),
            define("lib/mobi-audio", ["require", "exports", "module", "underscore", "config", "lib/url", "lib/connect", "lib/event-bus", "lib/error-reporting", "lib/integrations/promoted", "vendor/event-gateway/event-gateway", "lib/scaudio-logger", "lib/tracking/tracking-core", "lib/media-element-manager", "vendor/playback/playback"], null),
            define("lib/cookies", ["require", "exports", "module"], function(e, t, n) {
                var r = window.location.hostname.replace(/.*\.(.+\..+)/, "$1"),
                    i = "." + r,
                    s = 864e5,
                    o = 6e4,
                    u, a, f = n.exports = {
                        get: null,
                        set: function(e, t, n) {
                            var r = Date.now(),
                                a = null;
                            n && n.days ? a = n.days * s : n && n.minutes && (a = n.minutes * o), document.cookie = [e + "=" + t, a ? "expires=" + (new Date(r + a)).toGMTString() : "", "path=/", "domain=" + i].filter(Boolean).join(";"), u()
                        },
                        unset: null
                    };
                u = function() {
                    a = null
                }
            }),
            define("vendor/i18n/i18n", ["require", "exports", "module", "./lib/datetime", "./lib/number", "./lib/price", "./locales/es", "./locales/de", "./locales/en", "./locales/fr", "./locales/it", "./locales/nl", "./locales/pl", "./locales/pt_BR", "./locales/sv"], function(e, t, n) {
                function d(e) {
                    this.phrases = {}, this.setLocale(e)
                }

                function v() {
                    var e = m.call(this);
                    this.number = new i(e), this.dateTime = new r(e, this.number), this.price = new s(this.locale, this.number)
                }

                function m() {
                    return p[this.locale] || p[c]
                }

                function g(e, t) {
                    return t ? e.replace(f, null) : e
                }

                

                function b(e) {
                    return Array.isArray(e) ? e[0] : e.toString()
                }

                function w(e) {
                    var t, n;
                    for (var r = 1, i = arguments.length; r < i; r++) {
                        t = arguments[r];
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }

                

                

                
                var r = e("./lib/datetime"),
                    i = e("./lib/number"),
                    s = e("./lib/price"),
                    o = "sclocale",
                    u = {};
                n.exports = d;
                var a = "[a-zA-Z0-9_]+",
                    f = new RegExp("\\[\\[\\[(" + a + ")\\]\\]\\]|" + "\\[\\[(" + a + ")\\]\\]|" + "(%d)", "g"),
                    l, c = "en",
                    h = e("./locales/es"),
                    p = {
                        de: e("./locales/de"),
                        en: e("./locales/en"),
                        en_GB: e("./locales/en"),
                        es: h,
                        es_419: h,
                        fr: e("./locales/fr"),
                        it: e("./locales/it"),
                        nl: e("./locales/nl"),
                        pl: e("./locales/pl"),
                        pt_BR: e("./locales/pt_BR"),
                        sv: e("./locales/sv")
                    };
                d.prototype.availableLocales = Object.keys(p), d.prototype.getLocaleCookieName = function() {
                    return o
                }, d.prototype.setLocale = function(e) {
                    this.locale = p[e] ? e : c, v.call(this)
                }, d.prototype.setPhrases = null, d.prototype.extend = function(e) {
                    w(this.phrases, e)
                }, d.prototype.getLocaleDataFor = null, d.prototype.t = function(e, t, n, r) {
                    var i = (n ? n + "::" : "") + e,
                        s = this.phrases[i] || e;
                    return g.call(this, b(s), t)
                }, d.prototype.tp = null, l = function() {
                    
                    var e = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        },
                        t = /[&<>"'`]/g,
                        n = /[&<>"'`]/;
                    return null
                }()
            }),
            define("shared/config/supported-locales", ["require", "exports", "module", "underscore", "shared/config/locales/locale-de.json", "shared/config/locales/locale-es.json", "shared/config/locales/locale-fr.json", "shared/config/locales/locale-it.json", "shared/config/locales/locale-nl.json", "shared/config/locales/locale-pl.json", "shared/config/locales/locale-pt-br.json", "shared/config/locales/locale-sv.json"], function(e, t, n) {
                var r = e("underscore"),
                    i = {
                        de: "Deutsch",
                        en: "English (US)",
                        es: "Español",
                        fr: "Français",
                        it: "Italiano",
                        nl: "Nederlands",
                        pl: "Polski",
                        pt_BR: "Português (Brasil)",
                        sv: "Svenska"
                    },
                    s = r.extend({}, i),
                    o = {
                        de: e("shared/config/locales/locale-de.json"),
                        en: {},
                        es: e("shared/config/locales/locale-es.json"),
                        fr: e("shared/config/locales/locale-fr.json"),
                        it: e("shared/config/locales/locale-it.json"),
                        nl: e("shared/config/locales/locale-nl.json"),
                        pl: e("shared/config/locales/locale-pl.json"),
                        pt_BR: e("shared/config/locales/locale-pt-br.json"),
                        sv: e("shared/config/locales/locale-sv.json")
                    },
                    u = r.keys(i),
                    a = r.keys(s);
                n.exports = {
                    defaultLocale: "en",
                    locales: o,
                    publicLanguages: i,
                    publicLanguageCodes: u,
                    experimentalAndPublicLanguages: s,
                    experimentalAndPublicLanguageCodes: a
                }
            }),
            define("lib/mixins/models/data-dns-prefetcher", ["require", "exports", "module", "underscore", "lib/helpers/dns-helper", "lib/mixin"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/helpers/dns-helper"),
                    s = e("lib/mixin"),
                    o = n.exports = new s({
                        before: {
                            parse: null
                        }
                    })
            }),
            define("type-of", ["require", "exports", "module"], function(e, t, n) {
                var r = Object.prototype.toString;
                n.exports = null
            }),
            define("indexof", ["require", "exports", "module"], function(e, t, n) {
                var r = [].indexOf;
                n.exports = null
            }),
            define("lib/helpers/title-helper", ["require", "exports", "module", "lib/event-bus", "lib/play-manager"], function(e, t, n) {
                

                
                var r = e("lib/event-bus"),
                    i = e("lib/play-manager"),
                    s = "SoundCloud - Hear the world’s sounds",
                    o, u, a, f = !1,
                    l = n.exports = {
                        initialize: function() {
                            f || (f = !0, r.on("audio:play", h).on("audio:pause", c))
                        },
                        deinitialize: null,
                        set: null,
                        update: null,
                        _setTitle: null
                    };
                a = null, u = null
            }),
            define("lib/mixins/layouts/performance-measuring", ["require", "exports", "module", "lib/tracking/tracking-core", "lib/mixin"], function(e, t, n) {
                
                var r = e("lib/tracking/tracking-core"),
                    i = e("lib/mixin"),
                    s = 50,
                    o = 15e3,
                    u = window.performance && window.performance.timing,
                    a = "fetchStart",
                    f = !0,
                    l = n.exports = u ? new i({
                        defaults: {
                            performanceSelector: null
                        },
                        after: {
                            render: null
                        }
                    }) : new i({})
            }),
            define("views/footer/footer", ["require", "exports", "module", "lib/helpers/client-environment-helper", "lib/event-bus", "lib/view", "views/footer/footer.tmpl", "views/footer/footer.css"], null),
            define("lib/subview-plugin", ["require", "exports", "module", "underscore", "vendor/handlebars-runtime"], function(e, t, n) {
                

                

                
                var r = e("underscore"),
                    i = e("vendor/handlebars-runtime"),
                    s = {},
                    o = 0;
                t.handlebarHelper = a, t.replacePlaceholders = f
            }),
            define("lib/template-helpers", ["require", "exports", "module", "underscore", "lib/helpers/a11y-helper", "lib/helpers/count-helper", "vendor/handlebars-runtime", "lib/helpers/i18n-helper", "lib/helpers/image-helper", "lib/lingua", "router", "lib/subview-plugin"], function(e, t, n) {
                

                

                

                
                var r = e("underscore"),
                    i = e("lib/helpers/a11y-helper"),
                    s = e("lib/helpers/count-helper"),
                    o = e("vendor/handlebars-runtime"),
                    u = e("lib/helpers/i18n-helper"),
                    a = e("lib/helpers/image-helper"),
                    f = e("lib/lingua"),
                    l = e("router"),
                    c = e("lib/subview-plugin"),
                    h = n.exports = {
                        $a11y: null,
                        $count: null,
                        $debug: null,
                        $view: null,
                        $image: null,
                        $route: null,
                        $t: null,
                        $tp: null
                    }
            }),
            define("views/header/header.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".header{height:44px;box-shadow:0 0 2px 0 rgba(0,0,0,.5);background:#fff}.header__logo{background:url(https://mobi.sndcdn.com/assets/images/ldpi/logo-881c7ae2.png) 0 50% no-repeat;background-size:128px 16px;width:128px;height:44px;margin:0 auto;display:block}.smallLogo>.header__logo{width:34px}")), data = null
            }),
            define("views/header/header.tmpl", ["vendor/handlebars-runtime", "views/header/search-button", "views/search/search-box"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("lib/helpers/consumer-sub-upsell-helper", ["require", "exports", "module"], function(e, t, n) {
                

                
                var r = n.exports = {
                    monetizationModelToProductIds: s,
                    soundRequiresUpsell: i,
                    productIds: {
                        HIGH_TIER: "go"
                    }
                }
            }),
            define("lib/views/fullscreen-overlay", ["require", "exports", "module", "config", "lib/views/mixins/overlay", "lib/tracking/tracking-core", "lib/view", "lib/views/fullscreen-overlay.css", "lib/views/fullscreen-overlay.tmpl"], function(e, t, n) {
                var r = e("config"),
                    i = e("lib/views/mixins/overlay"),
                    s = e("lib/tracking/tracking-core"),
                    o = e("lib/view"),
                    u = n.exports = o.extend(i, {
                        defaults: {
                            showHeader: !1,
                            closeBehavior: null,
                            style: null,
                            trackingIdentifier: null
                        },
                        parentEl: null,
                        transitions: {
                            "in": "fadeIn",
                            out: "fadeOut"
                        },
                        css: e("lib/views/fullscreen-overlay.css"),
                        template: e("lib/views/fullscreen-overlay.tmpl"),
                        className: "fullscreen-overlay",
                        bubbleEvents: {
                            "closeButton:click": "close"
                        },
                        setup: null,
                        getTemplateData: null,
                        onOpen: null,
                        onClose: null
                    })
            }),
            define("lib/views/mixins/impression-on-render", ["require", "exports", "module", "underscore", "lib/tracking/tracking-core", "lib/mixin"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/tracking/tracking-core"),
                    s = e("lib/mixin"),
                    o = n.exports = new s({
                        applyTo: function(e, t) {
                            this.after(e, {
                                renderDecorate: null,
                                setup: null
                            })
                        }
                    })
            }),
            define("views/banner/launch-app", ["require", "exports", "module", "config", "lib/native-links", "lib/view", "lib/tracking/tracking-core", "views/banner/launch-app.css", "views/banner/launch-app.tmpl"], function(e, t, n) {
                function a(e) {
                    return null
                }
                var r = e("config"),
                    i = e("lib/native-links"),
                    s = e("lib/view"),
                    o = e("lib/tracking/tracking-core"),
                    u = n.exports = s.extend({
                        className: "launchApp",
                        css: e("views/banner/launch-app.css"),
                        template: e("views/banner/launch-app.tmpl"),
                        events: {
                            "click .launchApp__get-app": a("download_app_button:get_app"),
                            "click .launchApp__open-in-app": a("download_app_button:open_in_app")
                        },
                        getTemplateData: null
                    })
            }),
            define("lib/native-links", ["require", "exports", "module", "lib/helpers/client-environment-helper", "lib/url"], function(e, t, n) {
                

                

                

                

                

                

                

                

                

                

                

                

                

                

                
                var r = e("lib/helpers/client-environment-helper"),
                    i = r.os,
                    s = r.device,
                    o = e("lib/url"),
                    u = "market://details?id=com.soundcloud.android&referrer=utm_source%3Dsoundcloud%26Dutm_medium%3Dmobileweb",
                    a = "https://app.adjust.io/12ozk8?redirect=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fsoundcloud-music-audio%2Fid336353151%3Fmt%3D8%26uo%3D4%26at%3D11lPIB",
                    f = u + "%26utm_campaign%3Ddownload_button_header",
                    l = "https://itunes.apple.com/us/app/soundcloud-pulse-for-creators/id1074278256?mt=8",
                    c = "https://play.google.com/store/apps/details?id=com.soundcloud.creators&hl=en",
                    h = "https://app.adjust.io/kzvpho",
                    p = "https://app.adjust.io/wua7pf",
                    d = "soundcloud://page/authentication",
                    v = "soundcloud://home",
                    m = "soundcloud://remote-sign-in",
                    g = "https://app.adjust.io/7rfiwt?redirect=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fsoundcloud-music-audio%2Fid336353151%3Fmt%3D8%26uo%3D4%26at%3D11lPIB",
                    y = "https://play.google.com/store/apps/details?id=com.soundcloud.android&referrer=utm_source%3Dmobi",
                    b = "appworld://content/41097895",
                    w = "amzn://apps/android?asin=B004HXIZVC",
                    E = "https://itunes.apple.com/app/apple-store/id336353151?pt=298087&ct=mobi&mt=8";
                n.exports = {
                    getStoreLink: N,
                    getUpsellLink: T,
                    getAndroidDeepLink: C,
                    getIOSUpsellDeepLink: k,
                    getSigninDeepLink: L,
                    getActivateDeeplink: A,
                    useDeeplinks: S,
                    getAdjustDeeplink: _,
                    adjustWorksOnIOS: x,
                    getBrowserPrimaryLocale: B
                }
            }),
            define("lib/views/mixins/update-on-layout-change", ["require", "exports", "module", "config", "lib/event-bus", "lib/mixin"], function(e, t, n) {
                

                
                var r = e("config"),
                    i = e("lib/event-bus"),
                    s = e("lib/mixin"),
                    o = n.exports = new s({
                        before: {
                            setup: null,
                            dispose: null
                        },
                        around: {
                            getTemplateData: null
                        }
                    })
            }),
            define("views/banner/upsell.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".upsellBanner{background:#333;height:60px;position:relative;overflow:hidden}.upsellBanner.transitionVisibility{-webkit-transition:-webkit-transform .2s linear;transition:transform .2s linear}.upsellBanner.offscreen{-webkit-transform:translate3d(0,-54px,0);transform:translate3d(0,-54px,0)}.upsellBanner.showingConsubUpsell .upsellBanner__consub,.upsellBanner .upsellBanner__app{opacity:1}.upsellBanner:not(.showingConsubUpsell) .upsellBanner__consub,.upsellBanner.showingConsubUpsell .upsellBanner__app{opacity:0;pointer-events:none}.upsellBanner__app{text-align:center}.upsellBanner__app,.upsellBanner__consub{position:absolute;top:0;bottom:0;left:0;right:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.upsellBanner__consub{background:linear-gradient(to right,#7d01a1,#f50);display:flex;justify-content:space-between;align-items:center;padding:0 12px;-webkit-font-smoothing:antialiased}.upsellBanner__appButton{margin-top:10px}.upsellBanner__snippet{color:#fff;font-size:12px}.upsellBanner__consubButton.g-button-cta{background:transparent;border:1px solid #fff;font-size:12px;height:32px;padding:5px 6px;overflow:visible}.upsellBanner.m-launch-app-overlay-visible .upsellBanner__appButton{opacity:0}@media (max-width:345px){.upsellBanner__snippet,.upsellBanner__consubButton.g-button-cta{font-size:11px}}@media (min-width:400px){.upsellBanner__snippet,.upsellBanner__consubButton.g-button-cta{font-size:13px}}")), data = null
            }),
            define("views/banner/upsell.tmpl", ["vendor/handlebars-runtime"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("views/cookie-banner/cookie-banner.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".cookieBanner{position:relative;background-color:rgba(0,0,0,.9);padding:12px 48px 12px 12px}.cookieBanner.m-dismissed{display:none}.cookieBanner__message{color:#999;font-size:11px;line-height:1.3}.cookieBanner__messageLink{color:#fff}.cookieBanner__dismiss{position:absolute;display:flex;justify-content:center;align-items:center;top:0;right:0;bottom:0;width:48px;cursor:pointer;color:#999;font-size:20px}")), data = null
            }),
            define("views/cookie-banner/cookie-banner.tmpl", ["vendor/handlebars-runtime"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("views/play-controls/play-controls.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".playControls{height:54px}.playControls__content{position:relative;padding:7px 10px;overflow:hidden;background:#333}.playControls__nowPlaying{margin:0 45px 0 0}.playControls__artwork{float:left;margin:0 10px 0 0}.playControls__username,.playControls__title{display:block}.playControls__username{font-size:12px;color:#999;line-height:19px}.playControls__title{font-size:14px;color:#fff;line-height:19px}.playControls__playPause{float:right;height:40px;width:40px;background:rgba(0,0,0,.25) url(https://mobi.sndcdn.com/assets/images/ldpi/player/mini_play_pause_button-6b8e48e4.png) 1px -38px no-repeat;background-size:100% auto;border:1px solid #fff;border-radius:40px;-webkit-transition:background-color .1s ease-in;transition:background-color .1s ease-in}.playControls.playing .playControls__playPause{background-position:0 0}.playControls__playPause:active{background-color:rgba(0,0,0,.5)}.playControls.playing .playControls__playIndicator{-webkit-transform:translate3d(0,-3px,0);transform:translate3d(0,-3px,0)}.playControls.go .playControls__playIndicator{background:linear-gradient(to right,#7d01a1,#f50)}")), data = null
            }),
            define("views/play-controls/play-controls.tmpl", ["vendor/handlebars-runtime", "views/play-controls/now-playing"], null),
            define("config/endpoints", ["require", "exports", "module", "config"], function(e, t, n) {
                var r = e("config"),
                    i = r.get("api_web_host"),
                    s = r.get("api_host"),
                    o = r.get("bff_api_host"),
                    u = n.exports = {
                        track: {
                            host: i,
                            path: "tracks/:urn"
                        },
                        trackBatch: {
                            host: i,
                            path: "tracks"
                        },
                        playlist: {
                            host: i,
                            path: "playlists/:id",
                            query: {
                                representation: "full"
                            }
                        },
                        user: {
                            host: i,
                            path: "users/:urn"
                        },
                        userProfileItems: {
                            host: i,
                            path: "users/:id/profile"
                        },
                        userLikes: {
                            host: i,
                            path: "users/:id/likes"
                        },
                        userPosts: {
                            host: i,
                            path: "users/:id/posts"
                        },
                        spotlightItems: {
                            host: i,
                            path: "users/:id/spotlight"
                        },
                        relatedTracks: {
                            host: i,
                            path: "tracks/:id/related"
                        },
                        assignments: {
                            host: i,
                            path: "assignments/"
                        },
                        charts: {
                            host: i,
                            path: "charts",
                            query: {
                                kind: null,
                                genre: null
                            }
                        },
                        resolveApiWeb: {
                            host: i,
                            path: "resolve",
                            query: {
                                permalink_url: null
                            }
                        },
                        search: {
                            host: i,
                            path: "search"
                        },
                        searchCategory: {
                            host: i,
                            path: "search/:category"
                        },
                        searchQueries: {
                            host: i,
                            path: "search/queries",
                            query: {
                                q: null
                            }
                        },
                        paymentQuotations: {
                            host: i,
                            path: "payments/quotations/:category"
                        },
                        trendingTracks: {
                            host: o,
                            path: "trending-tracks"
                        },
                        resolvePublicApi: {
                            host: s,
                            path: "resolve",
                            query: {
                                url: null,
                                "_status_code_map[302]": 200,
                                _status_format: "json"
                            }
                        },
                        trackRegisterPlayback: {
                            host: s,
                            path: "tracks/:id/plays"
                        },
                        trackStreams: {
                            host: s,
                            path: "i1/tracks/:id/streams"
                        }
                    }
            }),
            define("lib/gc-store", ["require", "exports", "module", "lib/store", "lib/mixins/usage-counting"], function(e, t, n) {
                var r = e("lib/store"),
                    i = e("lib/mixins/usage-counting"),
                    s = n.exports = r.extend();
                i.applyTo(s.prototype)
            }),
            define("lib/math", ["require", "exports", "module"], function(e, t, n) {
                n.exports = {
                    clamp: null,
                    precise: null
                }
            }),
            define("lib/errors/unauthorized-viewer", ["require", "exports", "module"], function(e, t, n) {
                
                r.prototype = Object.create(Error.prototype), n.exports = r
            }),
            define("lib/integrations/promoted", ["require", "exports", "module", "underscore", "config", "lib/persistent-store", "lib/url"], null),
            define("lib/scaudio-logger", ["require", "exports", "module", "vendor/console-logger/console-logger"], null),
            define("lib/media-element-manager", ["require", "exports", "module", "vendor/playback/playback", "lib/scaudio-logger"], null),
            define("vendor/playback/playback", ["require", "exports", "module"], null),
            define("vendor/i18n/lib/datetime", ["require", "exports", "module"], function(e, t, n) {
                function f(e, t) {
                    

                    

                    

                    

                    

                    

                    
                    var n = 0;
                    return {
                        time: a,
                        toRelativeTime: f,
                        format: g,
                        fromString: l,
                        setServerTime: E,
                        nowAtServer: S,
                        timecode: x,
                        stringToTime: c,
                        convert: h,
                        floorTo30Minutes: p,
                        parseTime: d,
                        formatTime: T,
                        getTimezoneOffset: v,
                        getBounds: m,
                        toLocalDate: b
                    }
                }

                

                

                

                

                

                

                

                

                

                
                n.exports = f;
                var r = 1e3,
                    i = 6e4,
                    s = 60 * i,
                    o = 24 * s,
                    u = {
                        sec: 1e3,
                        min: 60,
                        hour: 60,
                        day: 24,
                        month: 30,
                        year: 12
                    },
                    a = {
                        minute: i,
                        hour: s,
                        day: o
                    }
            }),
            define("vendor/i18n/lib/number", ["require", "exports", "module"], function(e, t, n) {
                function r(e) {
                    return {
                        round: i,
                        format: null,
                        zeroPad: null
                    }
                }

                
                n.exports = r
            }),
            define("vendor/i18n/lib/price", ["require", "exports", "module"], function(e, t, n) {
                

                

                function f(e, t) {
                    var n = r.memoize(null, null);
                    return {
                        format: null
                    }
                }
                var r = {
                    has: null,
                    memoize: function(e, t) {
                        var n = null;
                        return n.cache = {}, n
                    }
                };
                n.exports = f;
                var i = {
                        AUD: "AU$",
                        CAD: "CA$",
                        EUR: "€",
                        GBP: "£",
                        NZD: "NZ$",
                        USD: "$"
                    },
                    s = {
                        AUD: {
                            "default": "A$",
                            override: "AU$"
                        },
                        USD: {
                            "default": /US\$|\$US/,
                            override: "$"
                        },
                        GBP: {
                            "default": "£GB",
                            override: "£"
                        }
                    },
                    u = {
                        BIF: 0,
                        CLP: 0,
                        DJF: 0,
                        GNF: 0,
                        ISK: 0,
                        JPY: 0,
                        KMF: 0,
                        KRW: 0,
                        PYG: 0,
                        RWF: 0,
                        UGX: 0,
                        UYI: 0,
                        VND: 0,
                        VUV: 0,
                        XAF: 0,
                        XOF: 0,
                        XPF: 0,
                        BHD: 3,
                        IQD: 3,
                        JOD: 3,
                        KWD: 3,
                        LYD: 3,
                        OMR: 3,
                        TND: 3,
                        CLF: 4
                    }
            }),
            define("vendor/i18n/locales/es", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = n.exports = {
                    delimiters: {
                        thousands: ".",
                        decimal: ","
                    },
                    relativeTime: {
                        justNow: "Ahora mismo",
                        rightNow: "Ahora mismo",
                        future: "en %s",
                        past: "hace %s",
                        sec: i(["1 segundo", "%d segundos"]),
                        min: i(["1 minuto", "%d minutos"]),
                        hour: i(["1 hora", "%d horas"]),
                        day: i(["1 día", "%d días"]),
                        month: i(["1 mes", "%d meses"]),
                        year: i(["1 año", "%d años"])
                    },
                    dateFormats: {
                        readable: "DD MMMM YYYY",
                        readableTime: "DD MMMM YYYY HH:mm",
                        readableAbbreviated: "DD MMM YYYY",
                        readableWithWeekday: "DDDD, DD MMMM YYYY",
                        "default": "DD/MM/YYYY"
                    },
                    dates: {
                        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                        weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                        shortWeekdays: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
                        minWeekdays: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["€", ""],
                        dateTime: "%A, %e de %B de %Y, %X",
                        date: "%d/%m/%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"]
                    },
                    datePicker: {
                        closeText: "Cerrar",
                        prevText: "Ant",
                        nextText: "Sig",
                        currentText: "Hoy",
                        weekHeader: "Sm",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                }
            }),
            define("vendor/i18n/locales/de", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = {
                    delimiters: {
                        thousands: ".",
                        decimal: ","
                    },
                    relativeTime: {
                        justNow: "Vor kurzem",
                        rightNow: "Jetzt",
                        future: "in %s",
                        past: "vor %s",
                        sec: i(["1 Sekunde", "%d Sekunden"]),
                        min: i(["1 Minute", "%d Minuten"]),
                        hour: i(["1 Stunde", "%d Stunden"]),
                        day: i(["1 Tag", "%d Tagen"]),
                        month: i(["1 Monat", "%d Monaten"]),
                        year: i(["1 Jahr", "%d Jahren"])
                    },
                    dateFormats: {
                        readable: "DD MMMM YYYY",
                        readableTime: "DD MMMM YYYY HH:mm",
                        readableAbbreviated: "DD MMM YYYY",
                        readableWithWeekday: "DDDD, DD MMMM YYYY",
                        "default": "DD.MM.YYYY"
                    },
                    dates: {
                        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                        monthsShort: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                        weekdays: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                        shortWeekdays: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                        minWeekdays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["", " €"],
                        dateTime: "%A, der %e. %B %Y, %X",
                        date: "%d.%m.%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"]
                    },
                    datePicker: {
                        closeText: "Schließen",
                        prevText: "Zurück",
                        nextText: "Weiter",
                        currentText: "Heute",
                        weekHeader: "KW",
                        dateFormat: "dd.mm.yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                };
                n.exports = r
            }),
            define("vendor/i18n/locales/en", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = n.exports = {
                    delimiters: {
                        thousands: ",",
                        decimal: "."
                    },
                    relativeTime: {
                        justNow: "Just now",
                        rightNow: "Right now",
                        future: "in %s",
                        past: "%s ago",
                        sec: i(["1 second", "%d seconds"]),
                        min: i(["1 minute", "%d minutes"]),
                        hour: i(["1 hour", "%d hours"]),
                        day: i(["1 day", "%d days"]),
                        month: i(["1 month", "%d months"]),
                        year: i(["1 year", "%d years"])
                    },
                    dateFormats: {
                        readable: "DD MMMM YYYY",
                        readableTime: "DD MMMM YYYY HH:mm",
                        readableAbbreviated: "MMM DD, YYYY",
                        readableWithWeekday: "DDDD, DD MMMM YYYY",
                        "default": "DD/MM/YYYY"
                    },
                    dates: {
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        shortWeekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        minWeekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["$", ""],
                        dateTime: "%a %b %e %X %Y",
                        date: "%m/%d/%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"]
                    },
                    datePicker: {
                        closeText: "Done",
                        prevText: "Prev",
                        nextText: "Next",
                        currentText: "Today",
                        weekHeader: "Wk",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                }
            }),
            define("vendor/i18n/locales/fr", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = n.exports = {
                    delimiters: {
                        thousands: ".",
                        decimal: ","
                    },
                    relativeTime: {
                        justNow: "Récemment",
                        rightNow: "Maintenant",
                        future: "dans %s",
                        past: "il y a %s",
                        sec: i(["1 seconde", "%d secondes"]),
                        min: i(["1 minute", "%d minutes"]),
                        hour: i(["1 heure", "%d heures"]),
                        day: i(["1 jour", "%d jours"]),
                        month: i(["1 mois", "%d mois"]),
                        year: i(["1 an", "%d ans"])
                    },
                    dateFormats: {
                        readable: "DD MMMM YYYY",
                        readableTime: "DD MMMM YYYY HH:mm",
                        readableAbbreviated: "DD MMM YYYY",
                        readableWithWeekday: "DDDD DD MMMM YYYY",
                        "default": "DD/MM/YYYY"
                    },
                    dates: {
                        months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                        monthsShort: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                        weekdays: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                        shortWeekdays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                        minWeekdays: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["$", ""],
                        dateTime: "%A, le %e %B %Y, %X",
                        date: "%d/%m/%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"]
                    },
                    datePicker: {
                        closeText: "Fermer",
                        prevText: "Précédent",
                        nextText: "Suivant",
                        currentText: "Aujourd'hui",
                        weekHeader: "Sem.",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                }
            }),
            define("vendor/i18n/locales/it", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = n.exports = {
                    delimiters: {
                        thousands: ".",
                        decimal: ","
                    },
                    relativeTime: {
                        justNow: "Un momento fa",
                        rightNow: "Ora",
                        future: null,
                        past: "%s fa",
                        sec: i(["1 secondo", "%d secondi"]),
                        min: i(["1 minuto", "%d minuti"]),
                        hour: i(["1 ora", "%d ore"]),
                        day: i(["1 giorno", "%d giorni"]),
                        month: i(["1 mese", "%d mesi"]),
                        year: i(["1 anno", "%d anni"])
                    },
                    dateFormats: {
                        readable: "DD MMMM YYYY",
                        readableTime: "DD MMMM YYYY HH:mm",
                        readableAbbreviated: "MMM DD, YYYY",
                        readableWithWeekday: "DDDD, DD MMMM YYYY",
                        "default": "DD/MM/YYYY"
                    },
                    dates: {
                        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                        monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                        weekdays: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                        shortWeekdays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                        minWeekdays: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["€", ""],
                        dateTime: "%A %e %B %Y, %X",
                        date: "%d/%m/%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"]
                    },
                    datePicker: {
                        closeText: "Chiudi",
                        prevText: "Prec",
                        nextText: "Succ",
                        currentText: "Oggi",
                        weekHeader: "Sm",
                        dateFormat: "dd/mm/yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                }
            }),
            define("vendor/i18n/locales/nl", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = n.exports = {
                    delimiters: {
                        thousands: ",",
                        decimal: "."
                    },
                    relativeTime: {
                        justNow: "Zojuist",
                        rightNow: "Nu",
                        future: "over %s",
                        past: "%s geleden",
                        sec: i(["1 seconde", "%d seconden"]),
                        min: i(["1 minuut", "%d minuten"]),
                        hour: i(["1 uur", "%d uur"]),
                        day: i(["1 dag", "%d dagen"]),
                        month: i(["1 maand", "%d maanden"]),
                        year: i(["1 jaar", "%d jaar"])
                    },
                    dateFormats: {
                        readable: "DD MMMM YYYY",
                        readableTime: "DD MMMM YYYY HH:mm",
                        readableAbbreviated: "MMM DD, YYYY",
                        readableWithWeekday: "DDDD, DD MMMM YYYY",
                        "default": "DD-MM-YYYY"
                    },
                    dates: {
                        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                        monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                        weekdays: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
                        shortWeekdays: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
                        minWeekdays: ["zo", "ma", "di", "wo", "do", "vr", "za"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["$", ""],
                        dateTime: "%a %b %e %X %Y",
                        date: "%d-%m-%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"]
                    },
                    datePicker: {
                        closeText: "Sluiten",
                        prevText: "←",
                        nextText: "→",
                        currentText: "Vandaag",
                        weekHeader: "Wk",
                        dateFormat: "dd-mm-yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                }
            }),
            define("vendor/i18n/locales/pl", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = n.exports = {
                    delimiters: {
                        thousands: ".",
                        decimal: ","
                    },
                    relativeTime: {
                        justNow: "Przed chwilą",
                        rightNow: "W tej chwili",
                        future: "za %s",
                        past: "%s temu",
                        sec: i(["1 sekunda", "%d sekundy", "%d sekund"]),
                        min: i(["1 minuta", "%d minuty", "%d minut"]),
                        hour: i(["1 godzina", "%d godziny", "%d godzin"]),
                        day: i(["1 dzień", "%d dni", "%d dni"]),
                        month: i(["1 miesiąc", "%d miesiące", "%d miesięcy"]),
                        year: i(["1 rok", "%d lata", "%d lat"])
                    },
                    dateFormats: {
                        readable: "DD MMMM YYYY",
                        readableTime: "DD MMMM YYYY HH:mm",
                        readableAbbreviated: "MMM DD, YYYY",
                        readableWithWeekday: "DDDD, DD MMMM YYYY",
                        "default": "DD-MM-YYYY"
                    },
                    dates: {
                        months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                        monthsDay: ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"],
                        monthsShort: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lip.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."],
                        monthsDayShort: ["Stycz.", "Lutego", "Marca", "Kwie.", "Maja", "Czerw.", "Lip.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grud."],
                        weekdays: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
                        shortWeekdays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
                        minWeekdays: ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["", "zł"],
                        dateTime: "%A, %e %B %Y, %X",
                        date: "%d/%m/%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"]
                    },
                    datePicker: {
                        closeText: "Zamknij",
                        prevText: "Poprzedni",
                        nextText: "Następny",
                        currentText: "Dziś",
                        weekHeader: "Tydz",
                        dateFormat: "dd.mm.yy",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                }
            }),
            define("vendor/i18n/locales/pt_BR", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = n.exports = {
                    delimiters: {
                        thousands: ".",
                        decimal: ","
                    },
                    relativeTime: {
                        justNow: "Agora há pouco",
                        rightNow: "Agora há pouco",
                        future: "em %s",
                        past: "há %s",
                        sec: i(["1 segundo", "%d segundos"]),
                        min: i(["1 minuto", "%d minutos"]),
                        hour: i(["1 hora", "%d horas"]),
                        day: i(["1 dia", "%d dias"]),
                        month: i(["1 mês", "%d meses"]),
                        year: i(["1 ano", "%d anos"])
                    },
                    dateFormats: {
                        readable: "DD MMMM YYYY",
                        readableTime: "DD MMMM YYYY HH:mm",
                        readableAbbreviated: "MMM DD, YYYY",
                        readableWithWeekday: "DDDD, DD MMMM YYYY",
                        "default": "DD/MM/YYYY"
                    },
                    dates: {
                        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                        weekdays: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
                        shortWeekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                        minWeekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["$", ""],
                        dateTime: "%A, %e de %B de %Y. %X",
                        date: "%d/%m/%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"]
                    },
                    datePicker: {
                        closeText: "Fechar",
                        prevText: "Anterior",
                        nextText: "Próximo",
                        currentText: "Hoje",
                        weekHeader: "Sm",
                        dateFormat: "dd/mm/yy",
                        firstDay: 0,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                }
            }),
            define("vendor/i18n/locales/sv", ["require", "exports", "module"], function(e, t, n) {
                function i(e, t) {
                    return null
                }
                var r = n.exports = {
                    delimiters: {
                        thousands: " ",
                        decimal: ","
                    },
                    relativeTime: {
                        justNow: "Alldeles nyss",
                        rightNow: "Alldeles nyss",
                        future: "om %s",
                        past: "för %s sedan",
                        sec: i(["1 sekund", "%d sekunder"]),
                        min: i(["1 minut", "%d minuter"]),
                        hour: i(["1 timme", "%d timmar"]),
                        day: i(["1 dygn", "%d dygn"]),
                        month: i(["1 månad", "%d månad"]),
                        year: i(["1 år", "%d år"])
                    },
                    dateFormats: {
                        readable: "YYYY MMMM DD",
                        readableTime: "YYYY MMMM DD HH:mm",
                        readableAbbreviated: "MMM DD, YYYY",
                        readableWithWeekday: "DDDD, YYYY MMMM DD",
                        "default": "YYYY-MMMM-DD"
                    },
                    dates: {
                        months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                        weekdays: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                        shortWeekdays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                        minWeekdays: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"]
                    },
                    d3: {
                        grouping: [3],
                        currency: ["", "SEK"],
                        dateTime: "%A den %d %B %Y %X",
                        date: "%Y-%m-%d",
                        time: "%H:%M:%S",
                        periods: ["fm", "em"]
                    },
                    datePicker: {
                        closeText: "Stäng",
                        prevText: "Förra",
                        nextText: "Nästa",
                        currentText: "Idag",
                        weekHeader: "Ve",
                        dateFormat: "yy-mm-dd",
                        firstDay: 1,
                        isRTL: !1,
                        showMonthAfterYear: !1,
                        yearSuffix: ""
                    },
                    pluralForm: null
                }
            }),
            define("shared/config/locales/locale-de.json", [], {
                "Something doesn’t sound right.": "Mit diesem Track stimmt etwas nicht.",
                "Refresh the page to try again.": "Aktualisiere die Seite, um es erneut zu versuchen.",
                "We can’t find this page.": "Wir können diese Seite nicht finden.",
                "We can’t find this sound.": "Wir können diesen Track nicht finden.",
                "We can’t find this playlist.": "Wir können diese Playlist nicht finden.",
                "We can’t find this user.": "Wir können diesen Benutzer nicht finden.",
                "Charts on SoundCloud.": "Charts auf SoundCloud.",
                "Charts are only available on desktop browsers.": "Charts sind nur in Desktop-Browsern verfügbar.",
                "Alternatively, download our mobile app to discover trending music &amp; audio on the go.": "Alternativ kannst du unsere mobile App herunterladen, um trendige Musik und Audio-Inhalte auch unterwegs zu entdecken.",
                "SoundCloud Premier monetization": "SoundCloud Premier-Monetarisierung",
                "SoundCloud Premier monetization is only available on desktop browsers.": "Die SoundCloud Premier-Monetarisierung ist nur in Desktop-Browsern verfügbar.",
                "Upload your music &amp; audio and share it with the world.": "Lade deine Musik und deine Audiodateien hoch und teile sie mit der Welt.",
                "Upload is only supported on desktop browsers.": "Uploads werden nur von Desktop-Browsern unterstützt.",
                "Come back when you’re at your computer to upload more tracks.": "Wenn du dich wieder von deinem Computer aus anmeldest, kannst du weitere Tracks hochladen.",
                "Connect with Facebook friends.": "Verbinde dich mit Facebook-Freunden.",
                "Connect is only available on desktop browsers.": "Die Funktion zum Verbinden ist nur in Desktop-Browsern verfügbar.",
                "Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers.": "Möchtest du dich mit Facebook-Freunden verbinden oder neue Leute zum Folgen finden? Diese Funktion ist nur in Desktop-Browsern verfügbar.",
                "Come back when you’re at your computer to find new people to follow.": "Wenn du dich wieder von deinem Computer aus anmeldest, kannst du neue Leute zum Folgen finden.",
                "Your profile": "Dein Profil",
                "Managing your account is only available on desktop browsers.": "Die Verwaltung deines Kontos ist nur in Desktop-Browsern verfügbar.",
                'For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.': 'Weitere Informationen zum Optimieren deines Profils findest du in unserer <a href="[[url]]">Anleitung für Ersteller</a>.',
                "Enjoy the free SoundCloud experience with our app.": "Genieß das kostenlose SoundCloud-Erlebnis mit unserer App.",
                "Enjoy the full SoundCloud experience with our free app.": "Genieß das uneingeschränkte SoundCloud-Erlebnis mit unserer App.",
                "[[soundTitle]] by [[authorName]]": "[[soundTitle]] von [[authorName]]",
                Messages: "Nachrichten",
                "Take this playlist with you and enjoy the full SoundCloud experience with our free app.": "Nimm diese Playlist mit und genieß das uneingeschränkte SoundCloud-Erlebnis mit unserer kostenlosen App.",
                "[[playlistTitle]] by [[authorName]]": "[[playlistTitle]] von [[authorName]]",
                "Enjoy the custom experience for creators with SoundCloud Pulse.": "Genieß die benutzerdefinierte Erfahrung für Ersteller mit SoundCloud Pulse.",
                Search: "Suche",
                "Search tracks": "Tracks suchen",
                "Search playlists": "Playlists suchen",
                "Search people": "Leute suchen",
                "Search groups": "Gruppen suchen",
                "Search [[category]]": "[[category]] durchsuchen",
                "Unsubscribed successfully": "Abonnement erfolgreich gekündigt",
                "Be the first to hear what [[username]] posts next with our free app.": "Mit unserer kostenlosen App erfährst du als Erster, was [[username]] als Nächstes postet.",
                "[[username]]’s stream": "[[username]]s Stream",
                "New &amp; hot tracks": "Neue und angesagte Tracks",
                "Up-and-coming tracks on SoundCloud": "Vielversprechende neue Tracks auf SoundCloud",
                "New &amp; hot audio": "Neue und angesagte Audio-Tracks",
                "Up-and-coming audio on SoundCloud": "Vielversprechende neue Audio-Tracks auf SoundCloud",
                "Top 50 tracks": " Top 50 Tracks",
                "The most played tracks on SoundCloud this week": "Diese Woche auf SoundCloud am häufigsten gespielte Tracks",
                "Top 50 audio": "Top 50 Audio",
                "The most played audio on SoundCloud this week": "Diese Woche auf SoundCloud am häufigsten gespielte Audio-Tracks",
                "New &amp; hot in [[[genreLabel]]]": "Neu und angesagt in [[[genreLabel]]]",
                "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud": "Vielversprechende neue Tracks in [[[genreLabel]]] auf SoundCloud",
                "The most played tracks in [[[genreLabel]]] on SoundCloud this week": "Diese Woche auf SoundCloud am häufigsten gespielte Tracks in [[[genreLabel]]]",
                "Up-and-coming in [[[genreLabel]]] on SoundCloud": "Vielversprechendes Neues in [[[genreLabel]]] auf SoundCloud",
                "The most played in [[[genreLabel]]] on SoundCloud this week": "Diese Woche auf SoundCloud am häufigsten gespielt in [[[genreLabel]]]",
                "New &amp; hot": "Neu und angesagt",
                "All music genres": "Alle Musikgenres",
                "All audio genres": "Alle Audio-Genres",
                Classical: "Klassik",
                Electronic: "Elektro",
                "Hip-hop &amp; Rap": "Hip-Hop &amp; Rap",
                Piano: "Klavier",
                Speech: "Sprache",
                World: "Weltmusik",
                Audiobooks: "Hörbücher",
                Learning: "Bildung",
                "News &amp; Politics": "News &amp; Politik",
                "Religion &amp; Spirituality": "Religion und Spiritualität",
                Sports: "Sport",
                Storytelling: "Erzählung",
                Technology: "Wissenschaft",
                "%d hour": ["%d Stunde", "%d Stunden"],
                "%d minute": ["%d Minute", "%d Minuten"],
                "%d second": ["%d Sekunde", "%d Sekunden"],
                "Enjoy the full SoundCloud experience with our app.": "Genieß das uneingeschränkte SoundCloud-Erlebnis mit unserer App.",
                Close: "Schließen",
                Retry: "Erneut versuchen",
                "%d track": ["%d Track", "%d Tracks"],
                "%d play": ["%d Play", "%d Plays"],
                "%d follower": ["%d Follower", "%d Follower"],
                "Download on the App Store": "Im App Store herunterladen",
                "Get it on Google Play": "Bei Google Play holen",
                "Get it at BlackBerry World": "In der BlackBerry World holen",
                "Available at Amazon": "Bei Amazon verfügbar",
                "Download SoundCloud": "SoundCloud herunterladen",
                "I already have the app": "Ich habe die App schon",
                "Listen on the SoundCloud app": "Hör rein in die SoundCloud-App",
                "Download our free app": "Lade unsere kostenlose App herunter",
                "No more previews, just full tracks.": "Schluss mit Vorschau, Tracks jetzt in voller Länge.",
                "Try SoundCloud Go+": "SoundCloud Go+ testen",
                "We use cookies for various purposes including analytics and personalized marketing. By continuing to use the service, you agree to our use of cookies as described in the [[[linkStart]]]Cookie Policy[[[linkEnd]]].": "Wir nutzen Cookies zu unterschiedlichen Zwecken, unter anderem zur Analyse und für personalisierte Marketing-Mitteilungen. Durch die weitere Nutzung unseres Diensts stimmst du der Nutzung von Cookies gemäß unserer [[[linkStart]]]Cookie-Richtlinie[[[linkEnd]]] zu.",
                "Terms of use": "Nutzungsbedingungen",
                Legal: "Rechtliches",
                "Privacy policy": "Datenschutzrichtlinie",
                Privacy: "Datenschutz",
                "Cookies policy": "Cookies-Richtlinie",
                "Company information": "Angaben zum Unternehmen",
                Imprint: "Impressum",
                "People directory": "Personenverzeichnis",
                Directory: "Verzeichnis",
                "SoundCloud homepage": "SoundCloud-Startseite",
                "Hear the world's sounds": "Hör dir die Musik der Welt an",
                "Trending tracks on SoundCloud": "Trendige Tracks auf SoundCloud",
                "Get our iPhone app to save this track to your likes, create playlists and more.": "Hol dir unsere iPhone-App, um diesen Track deinen Likes hinzuzufügen, Playlists zu erstellen und mehr.",
                "Get our Android app to save this track to your likes, create playlists and more.": "Hol dir unsere Android-App, um diesen Track deinen Likes hinzuzufügen, Playlists zu erstellen und mehr.",
                "Try our app.<br>It's even better": "Probier unsere App aus.<br>Sie ist noch besser.",
                "Try playing these related tracks": "Probiere es mit diesen ähnlichen Tracks",
                Cancel: "Abbrechen",
                "Select your language": "Sprache wählen",
                "Language:": "Sprache:",
                "Messages are only<br> supported on desktop browsers.": "Nachrichten werden nur <br>auf Desktop-Browsern unterstützt.",
                "Pages might not display correctly <br>in mobile browsers.": "Seiten werden auf mobilen Browsern <br>ggf. nicht richtig angezeigt.",
                "Go to Messages": "Gehe zu Nachrichten",
                "SoundCloud for mobile is<br> only available as an app.": "SoundCloud für Mobilgeräte <br>ist nur als App verfügbar.",
                "Open or download now<br> to use SoundCloud on<br> your device.": "Jetzt öffnen oder herunterladen, <br>um SoundCloud auf deinem <br>Gerät zu nutzen.",
                "Open or get the app": "Du musst die App öffnen oder herunterladen",
                "We’re sorry to hear you’re leaving.": "Es tut uns leid zu hören, dass du uns verlassen möchtest.",
                "Review your email subscriptions at": "Prüf deine E-Mail-Abonnements unter",
                "Results for: [[generatedSummary]]": "Ergebnisse für: [[generatedSummary]]",
                back: "Back",
                "Don't want to be included? Visit the desktop version of this page to opt out.": "Du möchtest nicht einbezogen werden? Besuche die Desktop-Version dieser Seite, um dich abzumelden.",
                "Play or pause track": "Spielen oder Track anhalten",
                "Get SoundCloud Pulse to manage your tracks on the go": "Hol dir SoundCloud Pulse und verwalte deine Tracks unterwegs",
                "Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.": "Bearbeite Track-Titel, Beschreibungen, Tags, Datenschutzeinstellungen und vieles mehr direkt über dein Handy, wo immer du gerade bist.",
                "Get SoundCloud Pulse to check your stats on the go": "Hol dir SoundCloud Pulse und rufe deine Statistiken unterwegs ab",
                "See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.": "Schau in Echtzeit dabei zu, wie deine Tracks zum Hit werden, ermittle deine Top-Hörer und identifiziere die besten Städte für deine nächste Tournee.",
                "Get SoundCloud Pulse to check your notifications on the go": "Hol dir SoundCloud Pulse und rufe deine Benachrichtigungen unterwegs ab",
                "Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.": "Lass dir Benachrichtigungen zu neuen Followern, Likes, Reposts und Kommentaren schicken, damit du mit deinen Fans und der Community interagieren kannst.",
                All: "Alle",
                Tracks: " Tracks",
                Playlists: " Playlists",
                People: "Leute",
                "%d person": ["%d Person", "[[count]] Leute"],
                "%d playlist": ["%d Playlist", "[[count]] Playlists"],
                "Found %d SoundCloud Go+ result": ["%d SoundCloud Go+-Ergebnis gefunden", "%d SoundCloud Go+-Ergebnisse gefunden"],
                "Show more SoundCloud Go+ results": "Weitere SoundCloud Go+-Ergebnisse anzeigen",
                "Sorry, nothing matches your search.": "Leider stimmt nichts mit deiner Suche überein",
                "Search SoundCloud": "SoundCloud durchsuchen",
                "Find people, tracks and playlists": "Finde Leute, Tracks und Playlists",
                "You have successfully<br>changed your password.": "Du hast dein Kennwort<br>erfolgreich geändert.",
                "Activate your device": "Dein Gerät aktivieren",
                "Open the SoundCloud app": "SoundCloud-App öffnen",
                "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.": "Gib nach entsprechender Aufforderung den Aktivierungscode auf deinem Gerät ein. Die Aktivierung ist nur in der neuesten Version der App möglich.",
                "Or, continue in your browser": "Oder im Browser fortfahren",
                "Not available in your country": "In deinem Land nicht verfügbar",
                "Reposted by [[username]]": "Repost von [[username]]",
                "Now playing": "Aktueller Track",
                "Previous track": "Vorheriger Track",
                "Next track": "Nächster Track",
                "%d Like": ["%d Like", "%d Likes"],
                "Not available in<br>your country": "In deinem Land <br>nicht verfügbar",
                "We’re sorry, that track isn’t available on mobile.": "Leider ist der Track auf dem Mobilgerät nicht verfügbar.",
                "Show more tracks": "Weitere Tracks zeigen",
                "Show more playlists": "Weitere Playlists anzeigen",
                "Show more likes": "Weitere Likes zeigen",
                "searchResults::%d track": ["%d Track", "[[count]] Tracks"],
                'eg. "Found 12 tracks, 1 person"::Found [[joinedCounts]]': "[[joinedCounts]] gefunden",
                "button::Sign in to SoundCloud": "Anmelden in SoundCloud",
                "button::Download our free app": "Lade unsere kostenlose App herunter",
                "track::Preview": "Vorschau"
            }),
            define("shared/config/locales/locale-es.json", [], {
                "Something doesn’t sound right.": "Parece que algo no funciona bien.",
                "Refresh the page to try again.": "Actualiza la página e inténtalo de nuevo.",
                "We can’t find this page.": "No se encuentra esta página.",
                "We can’t find this sound.": "No se encuentra esta pista.",
                "We can’t find this playlist.": "No se encuentra esta lista.",
                "We can’t find this user.": "No se encuentra este usuario.",
                "Charts on SoundCloud.": "Listas de éxitos en SoundCloud.",
                "Charts are only available on desktop browsers.": "Las listas de éxitos solo están disponibles en los navegadores de escritorio.",
                "Alternatively, download our mobile app to discover trending music &amp; audio on the go.": "También puedes descargar nuestra app móvil para descubrir audio y música del momento en cualquier lugar.",
                "SoundCloud Premier monetization": "la monetización de SoundCloud Premier",
                "SoundCloud Premier monetization is only available on desktop browsers.": "La monetización de SoundCloud Premier solo está disponible en navegadores de escritorio.",
                "Upload your music &amp; audio and share it with the world.": "Sube tu música y tus audios para compartirlos con el mundo.",
                "Upload is only supported on desktop browsers.": "Solo se pueden subir pistas en navegadores de escritorio.",
                "Come back when you’re at your computer to upload more tracks.": "Vuelve cuando estés en el ordenador para subir más pistas.",
                "Connect with Facebook friends.": "Conecta con tus amigos de Facebook.",
                "Connect is only available on desktop browsers.": "Solo puedes conectarte en navegadores de escritorio.",
                "Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers.": "¿Quieres conectarte con tus amigos de Facebook o seguir a más gente? Esta función solo está disponible en navegadores de escritorio.",
                "Come back when you’re at your computer to find new people to follow.": "Vuelve cuando estés en el ordenador para encontrar a más gente a la que seguir.",
                "Your profile": "Tu perfil",
                "Managing your account is only available on desktop browsers.": "La gestión de tu cuenta solo está disponible en navegadores de escritorio.",
                'For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.': 'Para obtener más información sobre la optimización de tu perfil, visita nuestra <a href="[[url]]">Guía para creadores</a>.',
                "Enjoy the free SoundCloud experience with our app.": "Disfruta de la experiencia gratuita SoundCloud con nuestra app.",
                "Enjoy the full SoundCloud experience with our free app.": "Vive al máximo la experiencia SoundCloud con nuestra app gratuita.",
                "[[soundTitle]] by [[authorName]]": "[[soundTitle]] de [[authorName]]",
                Messages: "Mensajes",
                "Take this playlist with you and enjoy the full SoundCloud experience with our free app.": "Disfruta de esta lista en cualquier lugar y vive al máximo la experiencia SoundCloud con nuestra app gratuita.",
                "[[playlistTitle]] by [[authorName]]": "[[playlistTitle]] de [[authorName]]",
                "Enjoy the custom experience for creators with SoundCloud Pulse.": "Disfruta de una experiencia pensada para creadores con SoundCloud Pulse.",
                Search: "Buscar",
                "Search tracks": "Buscar pistas",
                "Search playlists": "Buscar listas",
                "Search people": "Buscar gente",
                "Search groups": "Buscar grupos",
                "Search [[category]]": "Buscar [[category]]",
                "Unsubscribed successfully": "Suscripción anulada correctamente",
                "Be the first to hear what [[username]] posts next with our free app.": "Sé el primero en escuchar los nuevos posts de [[username]] con nuestra app gratuita.",
                "[[username]]’s stream": "Stream de [[username]]",
                "New &amp; hot tracks": "Nuevas pistas destacadas",
                "Up-and-coming tracks on SoundCloud": "Pistas revelación en SoundCloud",
                "New &amp; hot audio": "Nuevo audio destacado",
                "Up-and-coming audio on SoundCloud": "Audio revelación en SoundCloud",
                "Top 50 tracks": "Top 50 - pistas",
                "The most played tracks on SoundCloud this week": "Las pistas más reproducidas en SoundCloud esta semana",
                "Top 50 audio": "Top 50 - audio",
                "The most played audio on SoundCloud this week": "Los audios más reproducidos en SoundCloud esta semana",
                "New &amp; hot in [[[genreLabel]]]": "Novedades de [[[genreLabel]]]",
                "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud": "Pistas revelación de [[[genreLabel]]] en SoundCloud",
                "Top 50 in [[[genreLabel]]]": "Top 50 de [[[genreLabel]]]",
                "The most played tracks in [[[genreLabel]]] on SoundCloud this week": "Las pistas más reproducidas de [[[genreLabel]]] en SoundCloud esta semana",
                "Up-and-coming in [[[genreLabel]]] on SoundCloud": "Pistas prometedoras de [[[genreLabel]]] en SoundCloud",
                "The most played in [[[genreLabel]]] on SoundCloud this week": "Lo más reproducido de [[[genreLabel]]] en SoundCloud esta semana",
                "New &amp; hot": "Novedades",
                "All music genres": "Todos los géneros musicales",
                "All audio genres": "Todos los géneros de audio",
                "Alternative Rock": "Rock alternativo",
                Ambient: "Ambiente",
                Classical: "Clásica",
                "Dance &amp; EDM": "Dance y EDM",
                "Deep House": "Deep house",
                "Drum &amp; Bass": "Drum & Bass",
                Electronic: "Electrónica",
                "Folk &amp; Singer-Songwriter": "Folk y Cantautores",
                "Hip-hop &amp; Rap": "Hip hop y Rap",
                "Jazz &amp; Blues": "Jazz y Blues",
                Latin: "Latina",
                "R&B &amp; Soul": "R&B y Soul",
                Reggaeton: "Reguetón",
                Soundtrack: "Bandas sonoras",
                Speech: "Oratoria",
                World: "Música del mundo",
                Audiobooks: "Audiolibros",
                Business: "Negocios",
                Comedy: "Comedia",
                Entertainment: "Entretenimiento",
                Learning: "Aprendizaje",
                "News &amp; Politics": "Noticias y política",
                "Religion &amp; Spirituality": "Religión y espiritualidad",
                Science: "Ciencia",
                Sports: "Deportes",
                Storytelling: "Narración",
                Technology: "Tecnología",
                "%d hour": ["%d hora", "%d horas"],
                "%d minute": ["%d minuto", "%d minutos"],
                "%d second": ["%d segundo", "%d segundos"],
                "Enjoy the full SoundCloud experience with our app.": "Vive al máximo la experiencia SoundCloud con nuestra app.",
                Close: "Cerrar",
                Retry: "Inténtalo de nuevo",
                "%d track": ["%d pista", "%d pistas"],
                "%d play": ["%d reproducción", "%d reproducciones"],
                "%d follower": ["%d seguidor", "%d seguidores"],
                "Download on the App Store": "Descargatela en el App Store",
                "Get it on Google Play": "Obtenla en Google Play",
                "Get it at BlackBerry World": "Consíguela en BlackBerry World",
                "Available at Amazon": "Disponible en Amazon",
                "Download SoundCloud": "Descargar SoundCloud",
                "I already have the app": "Ya tengo la app",
                "Listen on the SoundCloud app": "Escuchar en la app de SoundCloud",
                "Download our free app": "Descarga nuestra app gratuita",
                "No more previews, just full tracks.": "Se acabaron las vistas previas, solo pistas enteras.",
                "Try SoundCloud Go+": "Prueba SoundCloud Go+",
                "We use cookies for various purposes including analytics and personalized marketing. By continuing to use the service, you agree to our use of cookies as described in the [[[linkStart]]]Cookie Policy[[[linkEnd]]].": "Utilizamos cookies para generar estadísticas y enviarte marketing personalizado, entre otros fines. Al seguir usando el servicio, aceptas que utilicemos cookies según lo descrito en la [[[linkStart]]]Política de cookies[[[linkEnd]]].",
                "Terms of use": "Condiciones de uso",
                "Privacy policy": "Política de privacidad",
                Privacy: "Privacidad",
                "Cookies policy": "Política de cookies",
                "Company information": "Información de la empresa",
                Imprint: "SoundCloud Ltd.",
                "People directory": "Directorio de gente",
                Directory: "Directorio",
                "SoundCloud homepage": "Página de inicio de SoundCloud",
                "Hear the world's sounds": "Escucha las pistas del mundo",
                "Trending tracks on SoundCloud": "Pistas del momento en SoundCloud",
                "Get our iPhone app to save this track to your likes, create playlists and more.": "Obtén nuestra app para iPhone para guardar esta pista en tus Me gusta, crear listas y más.",
                "Get our Android app to save this track to your likes, create playlists and more.": "Obtén nuestra app para Android para guardar esta pista en tus Me gusta, crear listas y más.",
                "Try our app.<br>It's even better": "Prueba nuestra app.<br>Es aún mejor",
                Like: "Me gusta",
                "Try playing these related tracks": "Escucha estas pistas similares",
                Cancel: "Cancelar",
                "Select your language": "Selecciona tu idioma",
                "Language:": "Idioma:",
                "Messages are only<br> supported on desktop browsers.": "Los mensajes solo<br>son compatibles en los navegadores de escritorio",
                "Pages might not display correctly <br>in mobile browsers.": "Puede que las páginas no se muestren correctamente<br>en los navegadores para móviles.",
                "Go to Messages": "Ir a Mensajes",
                "SoundCloud for mobile is<br> only available as an app.": "SoundCloud para móviles<br> solo está disponible como app.",
                "Open or download now<br> to use SoundCloud on<br> your device.": "Descárgala o ábrela ahora<br> para usar SoundCloud en<br> tu dispositivo.",
                "Open or get the app": "Hazte con la app o ábrela",
                "We’re sorry to hear you’re leaving.": "Lamentamos que te marches.",
                "Review your email subscriptions at": "Consulta tus suscripciones de correo en",
                "Results for: [[generatedSummary]]": "Resultados de: [[generatedSummary]]",
                back: "atrás",
                "Don't want to be included? Visit the desktop version of this page to opt out.": "¿No quieres aparecer en los resultados? Visita la versión de esta página para escritorio para que no te incluyamos.",
                "Play or pause track": "Reproducir o pausar la pista",
                "Get SoundCloud Pulse to manage your tracks on the go": "Hazte con SoundCloud Pulse para administrar tus pistas en cualquier lugar",
                "Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.": "Edita títulos, descripciones, etiquetas, la configuración de privacidad de las pistas y mucho más desde tu teléfono estés donde estés.",
                "Get SoundCloud Pulse to check your stats on the go": "Hazte con SoundCloud Pulse para consultar tus estadísticas en cualquier lugar",
                "See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.": "Visualiza tus principales reproducciones en tiempo real, identifica tus oyentes principales y consulta tus ciudades principales para planificar tu próximo concierto.",
                "Get SoundCloud Pulse to check your notifications on the go": "Hazte con SoundCloud Pulse para consultar tus notificaciones en cualquier lugar",
                "Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.": "Recibe notificaciones sobre nuevos seguidores, me gusta, reposts y comentarios para que puedas interactuar con tus fans y la Comunidad.",
                All: "Todo",
                Tracks: "Pistas",
                Playlists: "Listas",
                People: "Gente",
                "%d person": ["%d persona", "[[count]] personas"],
                "%d playlist": ["%d lista", "[[count]] listas"],
                "Found %d SoundCloud Go+ result": ["Encontramos %d resultado de SoundCloud Go+", "Encontramos %d resultados de SoundCloud Go+"],
                "Show more SoundCloud Go+ results": "Mostrar más resultados de SoundCloud Go+",
                "Sorry, nothing matches your search.": "No se ha encontrado ningún resultado.",
                "Search SoundCloud": "Buscar en SoundCloud",
                "Find people, tracks and playlists": "Buscar gente, pistas y listas",
                "You have successfully<br>changed your password.": "Has cambiado tu contraseña<br>correctamente.",
                "Activate your device": "Activa tu dispositivo",
                "Open the SoundCloud app": "Abre la app de SoundCloud",
                "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.": "Cuando te lo solicitemos, introduce el código de activación de tu dispositivo. Para la activación necesitarás tener la versión más reciente de la app.",
                "Or, continue in your browser": "También puedes hacerlo desde el navegador",
                "Not available in your country": "No está disponible en tu país",
                "Reposted by [[username]]": "Reposteado por [[username]]",
                "Now playing": "Reproducción en curso",
                "Previous track": "Pista anterior",
                "Next track": "Pista siguiente",
                "%d Like": ["%d me gusta", "%d me gusta"],
                "Not available in<br>your country": "No está disponible en<br>tu país",
                "We’re sorry, that track isn’t available on mobile.": "La pista no está disponible para dispositivos móviles.",
                Spotlight: "Destacados",
                "Show more tracks": "Mostrar más pistas",
                "Show more playlists": "Mostrar más listas",
                Likes: "Me gusta",
                "Show more likes": "Mostrar otros me gusta",
                "searchResults::%d track": ["%d pista", "[[count]] pistas"],
                'eg. "Found 12 tracks, 1 person"::Found [[joinedCounts]]': "Se encontraron [[joinedCounts]]",
                "button::Sign in to SoundCloud": "Iniciar sesión en SoundCloud",
                "button::Download our free app": "Descarga nuestra app gratuita",
                "track::Preview": "Vista previa"
            }),
            define("shared/config/locales/locale-fr.json", [], {
                "Something doesn’t sound right.": "Il semble y avoir un problème",
                "Refresh the page to try again.": "Actualisez la page pour réessayer.",
                "We can’t find this page.": "Cette page est introuvable",
                "We can’t find this sound.": "Ce titre est introuvable.",
                "We can’t find this playlist.": "Cette playlist est introuvable.",
                "We can’t find this user.": "Cet utilisateur est introuvable.",
                "Charts on SoundCloud.": "Charts sur SoundCloud.",
                "Charts are only available on desktop browsers.": "Les charts sont uniquement disponibles sur les navigateurs de bureau.",
                "Alternatively, download our mobile app to discover trending music &amp; audio on the go.": "Vous pouvez également télécharger notre application mobile pour découvrir les titres tendance pendant vos déplacements.",
                "SoundCloud Premier monetization": "Monétisation SoundCloud Premier ",
                "SoundCloud Premier monetization is only available on desktop browsers.": "La monétisation SoundCloud Premier est uniquement disponible sur les navigateurs de bureau.",
                "Upload your music &amp; audio and share it with the world.": "Uploadez votre musique et vos enregistrements audio et partagez-les avec le monde entier.",
                "Upload is only supported on desktop browsers.": "Uploader est pris en charge sur les navigateurs d'ordinateur de bureau uniquement.",
                "Come back when you’re at your computer to upload more tracks.": "Réessayez lorsque vous utiliserez votre ordinateur pour uploader plus de titres.",
                "Connect with Facebook friends.": "Restez en contact avec vos amis Facebook.",
                "Connect is only available on desktop browsers.": "La fonction Connect est uniquement disponible sur les navigateurs de bureau.",
                "Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers.": "Vous souhaitez rester en contact avec vos amis Facebook ou trouver de nouvelles personnes à suivre ? Cette fonction est uniquement disponible sur les navigateurs de bureau.",
                "Come back when you’re at your computer to find new people to follow.": "Réessayez lorsque vous utiliserez votre ordinateur pour trouver d'autres personnes à suivre.",
                "Your profile": "Votre profil",
                "Managing your account is only available on desktop browsers.": "La gestion de votre compte est uniquement disponible sur les navigateurs de bureau.",
                'For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.': "Pour plus d'informations sur l'optimisation de votre profil, consultez notre <a href=\"[[url]]\">Guide de l'auteur</a>.",
                "Enjoy the free SoundCloud experience with our app.": "Bénéficiez gratuitement de l'expérience SoundCloud avec notre application.",
                "Enjoy the full SoundCloud experience with our free app.": "Bénéficiez de l'expérience SoundCloud complète avec notre application gratuite.",
                "[[soundTitle]] by [[authorName]]": "[[soundTitle]] par [[authorName]]",
                "Take this playlist with you and enjoy the full SoundCloud experience with our free app.": "Prenez cette playlist avec vous et vivez l'expérience SoundCloud pleinement avec notre application gratuite.",
                "[[playlistTitle]] by [[authorName]]": "[[playlistTitle]] par [[authorName]]",
                "Enjoy the custom experience for creators with SoundCloud Pulse.": "Profitez d'une expérience personnalisée dédiée aux créateurs grâce à SoundCloud Pulse.",
                Search: "Rechercher",
                "Search tracks": "Rechercher des titres",
                "Search playlists": "Rechercher des playlists",
                "Search people": "Rechercher des personnes",
                "Search groups": "Rechercher des groupes",
                "Search [[category]]": "Rechercher dans [[category]]",
                "Unsubscribed successfully": "Désinscription réussie.",
                "Be the first to hear what [[username]] posts next with our free app.": "Soyez le premier à savoir ce que publie [[username]] avec notre application gratuite. ",
                "[[username]]’s stream": "Stream de [[username]]",
                "New &amp; hot tracks": "Nouveaux titres tendance",
                "Up-and-coming tracks on SoundCloud": "Titres disponibles et à venir sur SoundCloud",
                "New &amp; hot audio": "Nouveaux titres audio tendance",
                "Up-and-coming audio on SoundCloud": "Titres audio disponibles et à venir sur SoundCloud",
                "Top 50 tracks": "50 meilleurs titres",
                "The most played tracks on SoundCloud this week": "Titres les plus écoutés sur SoundCloud cette semaine",
                "Top 50 audio": "50 meilleurs titres audio",
                "The most played audio on SoundCloud this week": "Titres audio les plus écoutés sur SoundCloud cette semaine",
                "New &amp; hot in [[[genreLabel]]]": "Nouveaux titres tendance dans la catégorie [[[genreLabel]]]",
                "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud": "Titres disponibles et à venir dans la catégorie [[[genreLabel]]] sur SoundCloud",
                "Top 50 in [[[genreLabel]]]": "Top 50 dans la catégorie [[[genreLabel]]]",
                "The most played tracks in [[[genreLabel]]] on SoundCloud this week": "Titres les plus écoutés dans la catégorie [[[genreLabel]]] sur SoundCloud cette semaine",
                "Up-and-coming in [[[genreLabel]]] on SoundCloud": "Titres disponibles et à venir dans la catégorie [[[genreLabel]]] sur SoundCloud",
                "The most played in [[[genreLabel]]] on SoundCloud this week": "Titres les plus écoutés dans la catégorie [[[genreLabel]]] sur SoundCloud cette semaine",
                "New &amp; hot": "Nouveaux &amp; tendance",
                "All music genres": "Tous les genres de musique",
                "All audio genres": "Tous les genres audio",
                "Alternative Rock": "Rock alternatif",
                Ambient: "Ambiance",
                Classical: "Classique",
                Electronic: "Electro",
                "Folk &amp; Singer-Songwriter": "Folk &amp; Auteur-compositeur",
                Soundtrack: "Musiques de films",
                Speech: "Discours",
                Audiobooks: "Livres audio",
                Comedy: "Comédie",
                Learning: "Éducation",
                "News &amp; Politics": "Actualités &amp; politique",
                "Religion &amp; Spirituality": "Religion &amp; spiritualité",
                Technology: "Technologie",
                "%d hour": ["%d heure", "%d heures"],
                "%d minute": ["%d minute", "%d minutes"],
                "%d second": ["%d seconde", "%d secondes"],
                "Enjoy the full SoundCloud experience with our app.": "Vivez l'expérience SoundCloud pleinement avec notre application.",
                Close: "Fermer",
                Retry: "Réessayer",
                "%d track": ["%d titre", "%d titres"],
                "%d play": ["%d écoute", "%d écoutes"],
                "%d follower": ["%d abonné", "%d abonnés"],
                "Download on the App Store": "Télécharger dans l'App Store",
                "Get it on Google Play": "Disponible sur Google Play",
                "Get it at BlackBerry World": "Disponible sur BlackBerry World",
                "Available at Amazon": "Disponible sur Amazon",
                "Download SoundCloud": "Télécharger SoundCloud",
                "I already have the app": "Je dispose déjà de l'application",
                "Listen on the SoundCloud app": "Écouter sur l'application SoundCloud",
                "Download our free app": "Télécharger notre application gratuite",
                "No more previews, just full tracks.": "Fini les aperçus, bénéficiez de titres complets.",
                "Try SoundCloud Go+": "Essayez SoundCloud Go+",
                "We use cookies for various purposes including analytics and personalized marketing. By continuing to use the service, you agree to our use of cookies as described in the [[[linkStart]]]Cookie Policy[[[linkEnd]]].": "Nous utilisons les cookies à des fins diverses, notamment à des fins d'analyse et de marketing personnalisé. En continuant à utiliser le service, vous acceptez notre utilisation des cookies comme stipulé dans notre [[[linkStart]]]Politique d'utilisation des cookies[[[linkEnd]]].",
                "Terms of use": "Conditions d'utilisation",
                Legal: "Informations légales",
                "Privacy policy": "Politique de confidentialité",
                Privacy: "Confidentialité",
                "Cookies policy": "Politique d'utilisation des cookies",
                "Company information": "Informations sur l'entreprise",
                Imprint: "A propos",
                "People directory": "Répertoire de personnes",
                Directory: "Répertoire",
                "SoundCloud homepage": "Page d'accueil de SoundCloud",
                "Hear the world's sounds": "Découvrez les sons du monde",
                "Trending tracks on SoundCloud": "Titres en vogue sur SoundCloud",
                "Get our iPhone app to save this track to your likes, create playlists and more.": "Téléchargez notre application pour iPhone pour ajouter ce titre à vos favoris, créer des playlists et bien plus encore.",
                "Get our Android app to save this track to your likes, create playlists and more.": "Téléchargez notre application Android pour ajouter ce titre à vos favoris, créer des playlists et bien plus encore.",
                "Try our app.<br>It's even better": "Essayez notre application<br>pour une expérience optimale",
                Like: "Aimer",
                "Try playing these related tracks": "Essayer de lire ces titres similaires",
                Cancel: "Annuler",
                "Select your language": "Sélectionnez votre langue",
                "Language:": "Langue :",
                "Messages are only<br> supported on desktop browsers.": "Les messages sont uniquement<br> pris en charge par les navigateurs d'ordinateurs de bureau.",
                "Pages might not display correctly <br>in mobile browsers.": "Les pages peuvent ne pas s'afficher correctement <br>dans les navigateurs mobiles.",
                "Go to Messages": "Accéder aux Messages",
                "SoundCloud for mobile is<br> only available as an app.": "SoundCloud pour mobile est<br> uniquement disponible sous forme d'application.",
                "Open or download now<br> to use SoundCloud on<br> your device.": "Ouvrez ou téléchargez<br> SoundCloud sur votre mobile.",
                "Open or get the app": "Ouvrir ou télécharger l'application",
                "We’re sorry to hear you’re leaving.": "Nous sommes désolés d'apprendre que vous nous quittez.",
                "Review your email subscriptions at": "Vérifiez vos inscriptions par e-mail sur",
                "Results for: [[generatedSummary]]": "Résultats pour : [[generatedSummary]]",
                back: "retour",
                "Don't want to be included? Visit the desktop version of this page to opt out.": "Vous ne souhaitez pas y figurer ? Utilisez la version de bureau pour vous exclure.",
                "Play or pause track": "Lire un titre ou le mettre en pause",
                "Get SoundCloud Pulse to manage your tracks on the go": "Obtenez SoundCloud Pulse pour gérer vos titres en déplacement",
                "Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.": "Modifiez les noms de vos titres, les descriptions, les tags, les paramètres de confidentialité et bien plus encore directement depuis votre téléphone, où que vous soyez.",
                "Get SoundCloud Pulse to check your stats on the go": "Obtenez SoundCloud Pulse pour consulter vos statistiques en déplacement",
                "See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.": "Regardez votre nombre d'écoutes exploser en temps réel, identifiez vos plus grands fans et découvrez les villes où vos titres sont les plus écoutés pour planifier votre prochain concert.",
                "Get SoundCloud Pulse to check your notifications on the go": "Obtenez SoundCloud Pulse pour consulter vos notifications en déplacement",
                "Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.": "Soyez averti des nouveaux abonnés, likes, reposts et commentaires afin que vous puissiez communiquer avec vos fans et votre communauté.",
                All: "Tous",
                Tracks: "Titres",
                People: "Personnes",
                "%d person": ["%d personne", "[[count]] personnes"],
                "%d playlist": ["%d playlist", "[[count]] playlists"],
                "Found %d SoundCloud Go+ result": ["%d résultat SoundCloud Go+ trouvé", "%d résultats SoundCloud Go+ trouvés"],
                "Show more SoundCloud Go+ results": "Afficher davantage de résultats SoundCloud Go+",
                "Sorry, nothing matches your search.": "Désolé, aucun résultat ne correspond à votre recherche.",
                "Search SoundCloud": "Rechercher dans SoundCloud",
                "Find people, tracks and playlists": "Trouver des personnes, des titres et des playlists",
                "You have successfully<br>changed your password.": "Vous avez bien<br>modifié votre mot de passe.",
                "Activate your device": "Activez votre appareil",
                "Open the SoundCloud app": "Ouvrir l'application SoundCloud",
                "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.": "Lorsqu'on vous le demande, saisissez le code d'activation de votre appareil. La fonction d'activation est uniquement disponible dans la dernière version de l'application.",
                "Or, continue in your browser": "Ou continuez sur votre navigateur",
                "Not available in your country": "Non disponible dans votre pays",
                "Reposted by [[username]]": "Reposté par [[username]]",
                "Now playing": "Lecture en cours",
                "Previous track": "Titre précédent",
                "Next track": "Titre suivant",
                "%d Like": ["%d mention J'aime", "%d mentions J'aime"],
                "Not available in<br>your country": "Non disponible dans<br>votre pays",
                "We’re sorry, that track isn’t available on mobile.": "Désolé, ce titre n'est pas disponible sur mobile.",
                Spotlight: "Titres épinglés",
                "Show more tracks": "Afficher plus de titres",
                "Show more playlists": "Afficher plus de playlists",
                Likes: "Favoris",
                "Show more likes": "Afficher plus de favoris",
                "searchResults::%d track": ["%d titre", "[[count]] titres"],
                'eg. "Found 12 tracks, 1 person"::Found [[joinedCounts]]': "[[joinedCounts]] trouvé(s)",
                "button::Sign in to SoundCloud": "Se connecter à SoundCloud",
                "button::Download our free app": "Télécharger notre application gratuite",
                "track::Preview": "Aperçu"
            }),
            define("shared/config/locales/locale-it.json", [], {
                "Something doesn’t sound right.": "Qualcosa è andato storto.",
                "Refresh the page to try again.": "Aggiorna la pagina per riprovare.",
                "We can’t find this page.": "Impossibile trovare la pagina.",
                "We can’t find this sound.": "Impossibile trovare la traccia.",
                "We can’t find this playlist.": "Impossibile trovare la playlist.",
                "We can’t find this user.": "Impossibile trovare l'utente.",
                "Charts on SoundCloud.": "Classifiche su SoundCloud.",
                "Charts are only available on desktop browsers.": "Le classifiche sono disponibili solo sul browser del computer.",
                "Alternatively, download our mobile app to discover trending music &amp; audio on the go.": "In alternativa, scarica la nostra app per dispositivi mobili per scoprire musica e audio di tendenza anche quando sei in movimento.",
                "SoundCloud Premier monetization": "la monetizzazione SoundCloud Premier",
                "SoundCloud Premier monetization is only available on desktop browsers.": "La monetizzazione SoundCloud Premier è disponibile solamente per i browser desktop.",
                "Upload your music &amp; audio and share it with the world.": "Carica musica e audio e condividi con tutto il mondo.",
                "Upload is only supported on desktop browsers.": "È possibile caricare solo tramite il browser del computer.",
                "Come back when you’re at your computer to upload more tracks.": "Accedi quando sei al computer per caricare più tracce.",
                "Connect with Facebook friends.": "Collegati con i tuoi amici di Facebook.",
                "Connect is only available on desktop browsers.": "La connessione è disponibile solo sul browser del computer.",
                "Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers.": "Vuoi collegarti con i tuoi amici di Facebook o trovare nuove persone da seguire? Questa funzionalità è disponibile solo sul browser del computer.",
                "Come back when you’re at your computer to find new people to follow.": "Torna quando sei al computer per trovare nuove persone da seguire.",
                "Your profile": "Il tuo profilo",
                "Managing your account is only available on desktop browsers.": "L'account può essere gestito solo tramite il browser del computer.",
                'For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.': 'Per ulteriori informazioni su come ottimizzare il profilo, dai un\'occhiata alla nostra <a href="[[url]]">Guida per gli autori</a>.',
                "Enjoy the free SoundCloud experience with our app.": "Goditi tutto ciò che SoundCloud offre gratuitamente grazie alla nostra applicazione.",
                "Enjoy the full SoundCloud experience with our free app.": "Goditi tutto ciò che offre SoundCloud grazie alla nostra app.",
                "[[soundTitle]] by [[authorName]]": "[[soundTitle]] di [[authorName]]",
                Messages: "Messaggi",
                "Take this playlist with you and enjoy the full SoundCloud experience with our free app.": "Porta con te questa playlist e goditi tutto ciò che offre SoundCloud grazie all'applicazione gratuita.",
                "[[playlistTitle]] by [[authorName]]": "[[playlistTitle]] di [[authorName]]",
                "Enjoy the custom experience for creators with SoundCloud Pulse.": "Approfitta dell'esperienza personalizzata per gli autori con SoundCloud Pulse.",
                Search: "Cerca",
                "Search tracks": "Cerca tracce",
                "Search playlists": "Cerca playlist",
                "Search people": "Cerca persone",
                "Search groups": "Cerca gruppi",
                "Search [[category]]": "Cerca in [[category]]",
                "Unsubscribed successfully": "Iscrizione annullata correttamente",
                "Be the first to hear what [[username]] posts next with our free app.": "Ascolta per primo cosa pubblica [[username]], grazie all'applicazione gratuita.",
                "[[username]]’s stream": "Stream di [[username]]",
                "New &amp; hot tracks": "Tracce nuove e di tendenza",
                "Up-and-coming tracks on SoundCloud": "Tracce di tendenza su SoundCloud",
                "New &amp; hot audio": "Audio nuovi e di tendenza",
                "Up-and-coming audio on SoundCloud": "Audio di tendenza su SoundCloud",
                "Top 50 tracks": "Tracce Top 50",
                "The most played tracks on SoundCloud this week": "Le tracce più ascoltate su SoundCloud questa settimana",
                "Top 50 audio": "Audio Top 50",
                "The most played audio on SoundCloud this week": "Le tracce più ascoltate su SoundCloud questa settimana",
                "New &amp; hot in [[[genreLabel]]]": "Novità e di tendenza [[[genreLabel]]]",
                "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud": "Tracce di tendenza [[[genreLabel]]] su SoundCloud",
                "Top 50 in [[[genreLabel]]]": "Top 50 [[[genreLabel]]]",
                "The most played tracks in [[[genreLabel]]] on SoundCloud this week": "Le tracce [[[genreLabel]]] più ascoltate su SoundCloud questa settimana",
                "Up-and-coming in [[[genreLabel]]] on SoundCloud": "Di tendenza [[[genreLabel]]] su SoundCloud",
                "The most played in [[[genreLabel]]] on SoundCloud this week": "Le più ascoltate [[[genreLabel]]] su SoundCloud questa settimana",
                "New &amp; hot": "Novità e di tendenza",
                "All music genres": "Tutti i generi musicali",
                "All audio genres": "Tutti i generi audio",
                "Alternative Rock": "Rock Alternativo",
                Classical: "Classica",
                "Dance &amp; EDM": "Dance e EDM",
                "Drum &amp; Bass": "Drum & Bass",
                Electronic: "Elettronica",
                "Folk &amp; Singer-Songwriter": "Folk e Cantautori",
                "Hip-hop &amp; Rap": "Hip Hop e Rap",
                "Jazz &amp; Blues": "Jazz e Blues",
                Latin: "Latina",
                Piano: "Pianoforte",
                "R&B &amp; Soul": "R&B e Soul",
                Soundtrack: "Colonna sonora",
                Speech: "Discorsi",
                Triphop: "Trip Hop",
                Audiobooks: "Audiolibri",
                Comedy: "Commedia",
                Entertainment: "Intrattenimento",
                Learning: "Apprendimento",
                "News &amp; Politics": "Notizie e Politica",
                "Religion &amp; Spirituality": "Religione e Spiritualità",
                Science: "Scienza",
                Sports: "Sport",
                Storytelling: "Narrativa",
                Technology: "Tecnologia",
                "%d hour": ["%d ora", "%d ore"],
                "%d minute": ["%d minuto", "%d minuti"],
                "%d second": ["%d secondo", "%d secondi"],
                "Enjoy the full SoundCloud experience with our app.": "Goditi tutto ciò che offre SoundCloud grazie alla nostra applicazione.",
                Close: "Chiudi",
                Retry: "Riprova",
                "%d track": ["%d traccia", "%d tracce"],
                "%d play": ["%d ascolto", "%d ascolti"],
                "%d follower": ["%d follower", "%d follower"],
                "Download on the App Store": "Scaricala dall'App Store",
                "Get it on Google Play": "Scaricala da Google Play",
                "Get it at BlackBerry World": "Scaricala da BlackBerry World",
                "Available at Amazon": "Disponibile su Amazon",
                "Download SoundCloud": "Scarica SoundCloud",
                "I already have the app": "Dispongo già dell'app",
                "Listen on the SoundCloud app": "Ascolta sull'app SoundCloud",
                "Download our free app": "Scarica la nostra applicazione gratuita",
                "No more previews, just full tracks.": "Niente più anteprime, solo tracce complete.",
                "Try SoundCloud Go+": "Prova SoundCloud Go+",
                "We use cookies for various purposes including analytics and personalized marketing. By continuing to use the service, you agree to our use of cookies as described in the [[[linkStart]]]Cookie Policy[[[linkEnd]]].": "Utilizziamo i cookie per vari motivi, tra cui l'esecuzione di analisi e il marketing personalizzato. Utilizzando i nostri servizi, acconsenti all'utilizzo dei cookie come descritto nell'[[[linkStart]]]Informativa sui cookie[[[linkEnd]]].",
                "Terms of use": "Termini di utilizzo",
                Legal: "Note legali",
                "Privacy policy": "Informativa sulla privacy",
                "Cookies policy": "Informativa sui cookie",
                Cookies: "Cookie",
                "Company information": "Informazioni sull'azienda",
                Imprint: "Chi siamo",
                "People directory": "Elenco utenti",
                Directory: "Elenco",
                "SoundCloud homepage": "Homepage di SoundCloud",
                "Hear the world's sounds": "Ascolta i suoni del mondo",
                "Trending tracks on SoundCloud": "Tracce di tendenza su SoundCloud",
                "Get our iPhone app to save this track to your likes, create playlists and more.": "Scarica la nostra app per iPhone e salva questa traccia nei tuoi preferiti, crea playlist e molto altro.",
                "Get our Android app to save this track to your likes, create playlists and more.": "Scarica la nostra app per Android e salva questa traccia nei tuoi preferiti, crea playlist e molto altro.",
                "Try our app.<br>It's even better": "Prova la nostra app.<br>È ancora meglio!",
                Like: "Mi piace",
                "Try playing these related tracks": "Prova ad ascoltare queste tracce simili",
                Cancel: "Annulla",
                "Select your language": "Seleziona la lingua",
                "Language:": "Lingua:",
                "Messages are only<br> supported on desktop browsers.": "I messaggi sono supportati<br> solo sui browser del computer.",
                "Pages might not display correctly <br>in mobile browsers.": "Le pagine potrebbero non essere visualizzate correttamente <br>nei browser per dispositivi mobili.",
                "Go to Messages": "Vai ai Messaggi",
                "SoundCloud for mobile is<br> only available as an app.": "SoundCloud per dispositivi mobili è<br> disponibile solo come app.",
                "Open or download now<br> to use SoundCloud on<br> your device.": "Apri o scarica subito<br> per utilizzare SoundCloud sul<br> tuo dispositivo.",
                "Open or get the app": "Apri o scarica l'app",
                "We’re sorry to hear you’re leaving.": "Ci dispiace che tu te ne vada.",
                "Review your email subscriptions at": "Controlla gli abbonamenti e-mail",
                "Results for: [[generatedSummary]]": "Risultati per: [[generatedSummary]]",
                back: "indietro",
                "Don't want to be included? Visit the desktop version of this page to opt out.": "Non vuoi essere inserito? Visita la versione del computer di questa pagina per rifiutare esplicitamente.",
                "Play or pause track": "Riproduci o metti in pausa la traccia",
                "Get SoundCloud Pulse to manage your tracks on the go": "Ottieni SoundCloud Pulse per gestire le tue tracce ovunque tu sia",
                "Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.": "Modifica titoli delle tracce, descrizioni, tag, impostazioni della privacy e molto altro ancora direttamente dal tuo telefono, ovunque ti trovi.",
                "Get SoundCloud Pulse to check your stats on the go": "Ottieni SoundCloud Pulse per controllare le tue statistiche ovunque tu sia",
                "See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.": "Guarda il conteggio delle riproduzioni delle tue tracce aumentare in tempo reale, individua i tuoi ascoltatori più affezionati e controlla le prime città per pianificare il tuo prossimo show.",
                "Get SoundCloud Pulse to check your notifications on the go": "Ottieni SoundCloud Pulse per controllare le tue notifiche ovunque tu sia",
                "Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.": "Ricevi notifiche in merito a nuovi follower, mi piace, ripubblicazioni e commenti per interagire con i tuoi fan e con la community.",
                All: "Tutto",
                Tracks: "Tracce",
                Playlists: "Playlist",
                People: "Persone",
                "%d person": ["%d persona", "[[count]] persone"],
                "%d playlist": ["%d playlist", "[[count]] playlist"],
                "Found %d SoundCloud Go+ result": ["Trovato %d risultato SoundCloud Go+", "Trovati %d risultati SoundCloud Go+"],
                "Show more SoundCloud Go+ results": "Mostra altri risultati di SoundCloud Go+",
                "Sorry, nothing matches your search.": "La tua ricerca non ha prodotto risultati.",
                "Search SoundCloud": "Cerca su SoundCloud",
                "Find people, tracks and playlists": "Trova persone, tracce e playlist",
                "You have successfully<br>changed your password.": "Password<br>modificata correttamente.",
                "Activate your device": "Attiva il dispositivo",
                "Open the SoundCloud app": "Apri l'app SoundCloud",
                "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.": "Quando richiesto, inserisci il codice di attivazione del dispositivo. L'attivazione è disponibile solo nell'ultima versione dell'app.",
                "Or, continue in your browser": "In alternativa, continua nel browser",
                "Not available in your country": "Non disponibile nel tuo paese",
                "Reposted by [[username]]": "Ripubblicata da [[username]]",
                "Now playing": "In riproduzione",
                "Previous track": "Traccia precedente",
                "Next track": "Traccia successiva",
                "%d Like": ["%d mi piace", "%d mi piace"],
                "Not available in<br>your country": "Non disponibile nel<br>tuo paese",
                "We’re sorry, that track isn’t available on mobile.": "Traccia non disponibile su dispositivi mobili.",
                Spotlight: "In evidenza",
                "Show more tracks": "Mostra altre tracce",
                "Show more playlists": "Mostra altre playlist",
                Likes: "Preferiti",
                "Show more likes": "Mostra altri preferiti",
                "searchResults::%d track": ["%d traccia", "[[count]] tracce"],
                'eg. "Found 12 tracks, 1 person"::Found [[joinedCounts]]': "Trovate [[joinedCounts]]",
                "button::Sign in to SoundCloud": "Accedi a SoundCloud",
                "button::Download our free app": "Scarica la nostra applicazione gratuita",
                "track::Preview": "Anteprima"
            }),
            define("shared/config/locales/locale-nl.json", [], {
                "Something doesn’t sound right.": "Er klinkt iets niet helemaal goed.",
                "Refresh the page to try again.": "Vernieuw de pagina om het opnieuw te proberen.",
                "We can’t find this page.": "We konden deze pagina niet vinden.",
                "We can’t find this sound.": "We konden deze track niet vinden.",
                "We can’t find this playlist.": "We konden deze afspeellijst niet vinden.",
                "We can’t find this user.": "We konden deze gebruiker niet vinden.",
                "Charts on SoundCloud.": "Hitlijsten op SoundCloud.",
                "Charts are only available on desktop browsers.": "Hitlijsten zijn alleen beschikbaar via desktopbrowsers.",
                "Alternatively, download our mobile app to discover trending music &amp; audio on the go.": "Je kunt ook onze mobiele app downloaden om onderweg populaire muziek en audio te ontdekken.",
                "SoundCloud Premier monetization": "Monetarisering met SoundCloud Premier",
                "SoundCloud Premier monetization is only available on desktop browsers.": "Uitbetaling van royalties voor SoundCloud Premier is alleen beschikbaar via desktopbrowsers.",
                "Upload your music &amp; audio and share it with the world.": "Upload je muziek en audio en deel deze met de wereld.",
                "Upload is only supported on desktop browsers.": "Uploaden is alleen beschikbaar via desktop browsers.",
                "Come back when you’re at your computer to upload more tracks.": "Kom terug als je achter de computer zit om meer tracks te uploaden.",
                "Connect with Facebook friends.": "Leg contact met Facebook-vrienden.",
                "Connect is only available on desktop browsers.": "Contact leggen is alleen beschikbaar via desktopbrowsers.",
                "Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers.": "Wil je contact leggen met Facebook-vrienden of nieuwe mensen vinden om te volgen? Deze functie is alleen beschikbaar op desktopbrowsers.",
                "Come back when you’re at your computer to find new people to follow.": "Kom terug als je achter de computer zit om nieuwe mensen te vinden die je kunt volgen.",
                "Your profile": "Jouw profiel",
                "Managing your account is only available on desktop browsers.": "Accountbeheer is alleen beschikbaar via desktopbrowsers.",
                'For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.': 'Bezoek onze <a href="[[url]]">handleiding voor auteurs</a> voor meer informatie over het optimaliseren van je profiel.',
                "Enjoy the free SoundCloud experience with our app.": "Geniet van de gratis SoundCloud-ervaring met onze app.",
                "Enjoy the full SoundCloud experience with our free app.": "Geniet van de complete SoundCloud-ervaring met onze gratis app.",
                "[[soundTitle]] by [[authorName]]": "[[soundTitle]] van [[authorName]]",
                Messages: "Berichten",
                "Take this playlist with you and enjoy the full SoundCloud experience with our free app.": "Luister naar deze afspeellijst onderweg en geniet van de complete SoundCloud-ervaring met onze gratis app.",
                "[[playlistTitle]] by [[authorName]]": "[[playlistTitle]] van [[authorName]]",
                "Enjoy the custom experience for creators with SoundCloud Pulse.": "Profiteer van de gepersonaliseerde ervaring voor auteurs met SoundCloud Pulse.",
                Search: "Zoeken",
                "Search tracks": "Tracks zoeken",
                "Search playlists": "Afspeellijsten zoeken",
                "Search people": "Gebruikers zoeken",
                "Search groups": "Groepen zoeken",
                "Search [[category]]": "[[category]] zoeken",
                "Unsubscribed successfully": "Uitgeschreven",
                "Be the first to hear what [[username]] posts next with our free app.": "Luister als eerste naar wat [[username]] post met onze gratis app.",
                "New &amp; hot tracks": "Nieuwe en populaire tracks",
                "Up-and-coming tracks on SoundCloud": "Veelbelovende tracks op SoundCloud",
                "New &amp; hot audio": "Nieuwe en populaire audio",
                "Up-and-coming audio on SoundCloud": "Veelbelovende audio op SoundCloud",
                "The most played tracks on SoundCloud this week": "De meest afgespeelde tracks op SoundCloud van deze week",
                "The most played audio on SoundCloud this week": "De meest afgespeelde audio op SoundCloud van deze week",
                "New &amp; hot in [[[genreLabel]]]": "Nieuw en populair in [[[genreLabel]]]",
                "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud": "Veelbelovende tracks in [[[genreLabel]]] op SoundCloud",
                "The most played tracks in [[[genreLabel]]] on SoundCloud this week": "De meest afgespeelde tracks in [[[genreLabel]]] op SoundCloud van deze week",
                "Up-and-coming in [[[genreLabel]]] on SoundCloud": "Veelbelovend in [[[genreLabel]]] op SoundCloud",
                "The most played in [[[genreLabel]]] on SoundCloud this week": "Het meest afgespeeld in [[[genreLabel]]] op SoundCloud van deze week",
                "New &amp; hot": "Nieuw en populair",
                "All music genres": "Alle muziekgenres",
                "All audio genres": "Alle audiogenres",
                "Alternative Rock": "Alternatieve Rock",
                Classical: "Klassiek",
                "Dance &amp; EDM": "Dance en EDM",
                "Drum &amp; Bass": "Drum & Bass",
                Electronic: "Electro",
                "Folk &amp; Singer-Songwriter": "Folk en Singer-Songwriter",
                "Hip-hop &amp; Rap": "Hiphop en Rap",
                "Jazz &amp; Blues": "Jazz en Blues",
                "R&B &amp; Soul": "R&B en Soul",
                Speech: "Gesproken woord",
                World: "Wereldmuziek",
                Audiobooks: "Audioboeken",
                Business: "Zakelijk",
                Learning: "Educatie",
                "News &amp; Politics": "Nieuws en Politiek",
                "Religion &amp; Spirituality": "Religie en Spiritualiteit",
                Science: "Wetenschap",
                Sports: "Sport",
                Storytelling: "Verhalen",
                Technology: "Technologie",
                "%d hour": ["%d uur", "%d uur"],
                "%d minute": ["%d minuut", "%d minuten"],
                "%d second": ["%d seconde", "%d seconden"],
                "Enjoy the full SoundCloud experience with our app.": "Geniet van de complete SoundCloud-ervaring met onze app.",
                Close: "Sluiten",
                Retry: "Opnieuw proberen",
                "%d track": ["%d track", "%d tracks"],
                "%d play": ["%d keer afgespeeld", "%d keer afgespeeld"],
                "%d follower": ["%d volger", "%d volgers"],
                "Download on the App Store": "Downloaden van de App Store",
                "Get it on Google Play": "Downloaden van Google Play",
                "Get it at BlackBerry World": "Downloaden van BlackBerry World",
                "Available at Amazon": "Verkrijgbaar op Amazon",
                "Download SoundCloud": "SoundCloud downloaden",
                "I already have the app": "Ik heb de app al",
                "Listen on the SoundCloud app": "Luisteren op de SoundCloud-app",
                "Download our free app": "Download onze gratis app",
                "No more previews, just full tracks.": "Geen previews meer, alleen maar volledige tracks.",
                "Try SoundCloud Go+": "Probeer SoundCloud Go+",
                "We use cookies for various purposes including analytics and personalized marketing. By continuing to use the service, you agree to our use of cookies as described in the [[[linkStart]]]Cookie Policy[[[linkEnd]]].": "We gebruiken cookies voor verschillende doeleinden, zoals voor analyse en persoonlijk afgestemde marketing. Door onze services te blijven gebruiken ga je akkoord met ons gebruik van cookies, zoals beschreven in het [[[linkStart]]]Cookiebeleid[[[linkEnd]]].",
                "Terms of use": "Gebruiksvoorwaarden",
                Legal: "Juridisch",
                "Privacy policy": "Privacybeleid",
                "Cookies policy": "Cookiebeleid",
                "Company information": "Bedrijfsinformatie",
                Imprint: "Impressum",
                "People directory": "Gebruikerslijst",
                Directory: "Gebruikerslijst",
                "SoundCloud homepage": "SoundCloud-homepage",
                "Hear the world's sounds": "Muziek van over de hele wereld",
                "Trending tracks on SoundCloud": "Trending tracks op SoundCloud",
                "Get our iPhone app to save this track to your likes, create playlists and more.": "Download onze iPhone-app om deze track in je likes op te slaan, afspeellijsten te maken en meer.",
                "Get our Android app to save this track to your likes, create playlists and more.": "Download onze Android-app om deze track in je likes op te slaan, afspeellijsten te maken en meer.",
                "Try our app.<br>It's even better": "Probeer onze app.<br>Die is nog beter",
                Like: "Liken",
                "Try playing these related tracks": "Probeer deze verwante tracks",
                Cancel: "Annuleren",
                "Select your language": "Selecteer je taal",
                "Language:": "Taal:",
                "Messages are only<br> supported on desktop browsers.": "Berichten zijn enkel<br>beschikbaar via desktop browsers.",
                "Pages might not display correctly <br>in mobile browsers.": "Pagina's worden mogelijk niet correct <br>weergeven in mobiele browsers.",
                "Go to Messages": "Ga naar Berichten",
                "SoundCloud for mobile is<br> only available as an app.": "SoundCloud voor mobiel is<br> alleen beschikbaar als app.",
                "Open or download now<br> to use SoundCloud on<br> your device.": "Open of download de app nu<br> om SoundCloud op<br> je apparaat te gebruiken.",
                "Open or get the app": "De app openen of downloaden",
                "We’re sorry to hear you’re leaving.": "Wat jammer dat je ons verlaat.",
                "Review your email subscriptions at": "Bekijk je e-mailabonnementen op",
                "Results for: [[generatedSummary]]": "Resultaten voor: [[generatedSummary]]",
                back: "terug",
                "Don't want to be included? Visit the desktop version of this page to opt out.": "Wil je niet in deze lijst? Ga dan naar de desktopversie van deze pagina om je af te melden.",
                "Play or pause track": "Track afspelen of pauzeren",
                "Get SoundCloud Pulse to manage your tracks on the go": "Download SoundCloud Pulse om je tracks onderweg te beheren",
                "Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.": "Bewerk titels, beschrijvingen, tags, privacyinstellingen en meer van tracks direct op je telefoon, waar je ook bent.",
                "Get SoundCloud Pulse to check your stats on the go": "Download SoundCloud Pulse om je statistieken onderweg te controleren",
                "See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.": "Zie je play count in realtime de hoogte in schieten, identificeer je topluisteraars en je topsteden om je volgende optreden te plannen.",
                "Get SoundCloud Pulse to check your notifications on the go": "Download SoundCloud Pulse om je notificaties onderweg te lezen",
                "Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.": "Blijf op de hoogte van nieuwe volgers, likes, reposts en opmerkingen om betrokken te blijven bij je fans en de community.",
                All: "Alles",
                Playlists: "Afspeellijsten",
                People: "Personen",
                "%d person": ["%d persoon", "[[count]] personen"],
                "%d playlist": ["%d afspeellijst", "[[count]] afspeellijsten"],
                "Found %d SoundCloud Go+ result": ["%d SoundCloud Go+-resultaat gevonden", "%d SoundCloud Go+-resultaten gevonden"],
                "Show more SoundCloud Go+ results": "Meer SoundCloud Go+-resultaten weergeven",
                "Sorry, nothing matches your search.": "Sorry, er zijn geen zoekresultaten.",
                "Search SoundCloud": "Zoek op SoundCloud",
                "Find people, tracks and playlists": "Vind personen, tracks en afspeellijsten",
                "You have successfully<br>changed your password.": "Je hebt je<br>wachtwoord gewijzigd.",
                "Activate your device": "Je apparaat activeren",
                "Open the SoundCloud app": "Open de SoundCloud-app",
                "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.": "Voer de activeringscode op je apparaat in wanneer hierom wordt gevraagd. Activering is alleen beschikbaar in de nieuwste versie van de app.",
                "Or, continue in your browser": "Of ga verder in je browser",
                "Not available in your country": "Niet beschikbaar in jouw land",
                "Reposted by [[username]]": "Gerepost door [[username]]",
                "Now playing": "Nu aan het afspelen",
                "Previous track": "Vorige track",
                "Next track": "Volgende track",
                "%d Like": ["%d like", "%d likes"],
                "Not available in<br>your country": "Niet beschikbaar in<br>jouw land",
                "We’re sorry, that track isn’t available on mobile.": "Sorry, deze track is niet beschikbaar op mobiel.",
                "Show more tracks": "Meer tracks weergeven",
                "Show more playlists": "Meer afspeellijsten weergeven",
                "Show more likes": "Meer likes weergeven",
                "searchResults::%d track": ["%d track", "[[count]] tracks"],
                'eg. "Found 12 tracks, 1 person"::Found [[joinedCounts]]': "[[joinedCounts]] gevonden",
                "button::Sign in to SoundCloud": "Inloggen op SoundCloud",
                "button::Download our free app": "Download onze gratis app",
                "track::Preview": "Voorbeeld"
            }),
            define("shared/config/locales/locale-pl.json", [], {
                "Something doesn’t sound right.": "Coś jest nie tak.",
                "Refresh the page to try again.": "Odśwież stronę, aby spróbować ponownie.",
                "We can’t find this page.": "Nie można znaleźć tej strony.",
                "We can’t find this sound.": "Nie można znaleźć tego utworu.",
                "We can’t find this playlist.": "Nie można znaleźć tej playlisty.",
                "We can’t find this user.": "Nie można znaleźć tego użytkownika.",
                "Charts on SoundCloud.": "Listy przebojów w SoundCloud.",
                "Charts are only available on desktop browsers.": "Listy przebojów są dostępne tylko w przeglądarce na komputerze.",
                "Alternatively, download our mobile app to discover trending music &amp; audio on the go.": "Aby odkrywać popularną muzykę i audio gdziekolwiek będziesz, możesz również pobrać naszą mobilną aplikację.",
                "SoundCloud Premier monetization": "monetyzacji SoundCloud Premier",
                "SoundCloud Premier monetization is only available on desktop browsers.": "Monetyzacja w ramach programu SoundCloud Premier jest dostępna wyłącznie dla przeglądarek na komputerach stacjonarnych.",
                "Upload your music &amp; audio and share it with the world.": "Prześlij własną muzykę oraz dźwięki i udostępnij je całemu światu.",
                "Upload is only supported on desktop browsers.": "Zawartość można przesyłać tylko w przeglądarce na komputerze.",
                "Come back when you’re at your computer to upload more tracks.": "Aby przesłać więcej utworów, skorzystaj z komputera.",
                "Connect with Facebook friends.": "Połącz się ze znajomymi z Facebooka.",
                "Connect is only available on desktop browsers.": "Funkcja połączeń jest dostępna tylko w przeglądarce na komputerze.",
                "Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers.": "Chcesz połączyć się ze znajomymi z Facebooka lub znaleźć nowe osoby do obserwowania? Ta funkcja jest dostępna tylko w przeglądarce na komputerze.",
                "Come back when you’re at your computer to find new people to follow.": "Aby znaleźć nowe osoby do obserwowania, skorzystaj z komputera.",
                "Your profile": "Twój profil",
                "Managing your account is only available on desktop browsers.": "Zarządzanie kontem jest dostępne tylko w przeglądarce na komputerze.",
                'For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.': 'Aby uzyskać więcej informacji na temat optymalizowania profilu, zapoznaj się z naszym <a href="[[url]]">Przewodnikiem dla twórców</a>.',
                "Enjoy the free SoundCloud experience with our app.": "Korzystaj za darmo z SoundCloud dzięki naszej aplikacji.",
                "Enjoy the full SoundCloud experience with our free app.": "Wykorzystaj pełnię możliwości SoundCloud dzięki naszej bezpłatnej aplikacji.",
                "[[soundTitle]] by [[authorName]]": "[[soundTitle]] — [[authorName]]",
                Messages: "Wiadomości",
                "Take this playlist with you and enjoy the full SoundCloud experience with our free app.": "Zabierz ze sobą tę playlistę i wykorzystaj pełnię możliwości SoundCloud dzięki naszej bezpłatnej aplikacji.",
                "[[playlistTitle]] by [[authorName]]": "[[playlistTitle]] — [[authorName]]",
                "Enjoy the custom experience for creators with SoundCloud Pulse.": "Korzystaj z serwisu dostosowanego do potrzeb twórców dzięki aplikacji SoundCloud Pulse.",
                Search: "Szukaj",
                "Search tracks": "Wyszukaj utwory",
                "Search playlists": "Wyszukaj playlisty",
                "Search people": "Wyszukaj osoby",
                "Search groups": "Wyszukaj grupy",
                "Search [[category]]": "Wyszukaj w kategorii [[category]]",
                "Unsubscribed successfully": "Subskrypcja anulowana",
                "Be the first to hear what [[username]] posts next with our free app.": "Bądź pierwszym słuchaczem utworów, które publikuje [[username]], dzięki naszej bezpłatnej aplikacji.",
                "[[username]]’s stream": "Strumień użytkownika [[username]]",
                "New &amp; hot tracks": "Nowe i popularne utwory",
                "Up-and-coming tracks on SoundCloud": "Najbardziej obiecujące utwory w SoundCloud",
                "New &amp; hot audio": "Nowe i popularne dźwięki",
                "Up-and-coming audio on SoundCloud": "Najbardziej obiecujące dźwięki w SoundCloud",
                "Top 50 tracks": "Najlepsze 50 utworów",
                "The most played tracks on SoundCloud this week": "Utwory najczęściej odtwarzane w SoundCloud w tym tygodniu",
                "Top 50 audio": "Najlepsze 50 nagrań audio",
                "The most played audio on SoundCloud this week": "Audio najczęściej odtwarzane w SoundCloud w tym tygodniu",
                "New &amp; hot in [[[genreLabel]]]": "Nowe i popularne w gatunku [[[genreLabel]]]",
                "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud": "Najbardziej obiecujące utwory w SoundCloud z gatunku [[[genreLabel]]]",
                "Top 50 in [[[genreLabel]]]": "Najlepsze 50 z gatunku [[[genreLabel]]]",
                "The most played tracks in [[[genreLabel]]] on SoundCloud this week": "Utwory najczęściej odtwarzanie w SoundCloud w tym tygodniu z gatunku [[[genreLabel]]]",
                "Up-and-coming in [[[genreLabel]]] on SoundCloud": "Najbardziej obiecujące utwory w SoundCloud z gatunku [[[genreLabel]]]",
                "The most played in [[[genreLabel]]] on SoundCloud this week": "Najczęściej odtwarzane w SoundCloud w tym tygodniu z gatunku [[[genreLabel]]]",
                "New &amp; hot": "Nowe i popularne",
                "Top 50": "Najlepsze 50",
                "All music genres": "Wszystkie gatunki muzyki",
                "All audio genres": "Wszystkie gatunki audio",
                "Alternative Rock": "Rock alternatywny",
                Classical: "Muzyka klasyczna",
                "Dance &amp; EDM": "Dance i EDM",
                "Drum &amp; Bass": "Drum & Bass",
                Electronic: "Muzyka elektroniczna",
                "Folk &amp; Singer-Songwriter": "Folk i piosenka autorska",
                "Hip-hop &amp; Rap": "Hiphop i rap",
                "Jazz &amp; Blues": "Jazz i blues",
                Latin: "Muzyka latynoska",
                Piano: "Pianistyka",
                "R&B &amp; Soul": "R&B i soul",
                Soundtrack: "Muzyka filmowa",
                Speech: "Wypowiedzi",
                World: "World music",
                Audiobooks: "Audiobooki",
                Business: "Biznes",
                Comedy: "Komedia",
                Entertainment: "Rozrywka",
                Learning: "Edukacja",
                "News &amp; Politics": "Wiadomości i polityka",
                "Religion &amp; Spirituality": "Religia i duchowość",
                Science: "Nauka",
                Sports: "Sport",
                Storytelling: "Historie",
                Technology: "Technologia",
                "%d hour": ["%d godzina", "%d godziny", "%d godzin", "%d godzin"],
                "%d minute": ["%d minuta", "%d minuty", "%d minut", "%d minut"],
                "%d second": ["%d sekunda", "%d sekundy", "%d sekund", "%d sekund"],
                "Enjoy the full SoundCloud experience with our app.": "Wykorzystaj pełnię możliwości SoundCloud dzięki naszej aplikacji.",
                Close: "Zamknij",
                Retry: "Spróbuj ponownie",
                "%d track": ["%d utwór", "%d utwory", "%d utworów", "%d utworów"],
                "%d play": ["%d odtworzenie", "%d odtworzenia", "%d odtworzeń", "%d odtworzeń"],
                "%d follower": ["%d obserwujący", "%d obserwujących", "%d obserwujących", "%d obserwujących"],
                "Download on the App Store": "Pobierz ze sklepu App Store",
                "Get it on Google Play": "Pobierz ze sklepu Google Play",
                "Get it at BlackBerry World": "Pobierz ze sklepu BlackBerry World",
                "Available at Amazon": "Dostępne w serwisie Amazon",
                "Download SoundCloud": "Pobierz aplikację SoundCloud",
                "I already have the app": "Już mam aplikację",
                "Listen on the SoundCloud app": "Posłuchaj w aplikacji SoundCloud",
                "Download our free app": "Pobierz naszą bezpłatną aplikację",
                "No more previews, just full tracks.": "Koniec z fragmentami — tylko całe utwory.",
                "Try SoundCloud Go+": "Wypróbuj SoundCloud Go+",
                "We use cookies for various purposes including analytics and personalized marketing. By continuing to use the service, you agree to our use of cookies as described in the [[[linkStart]]]Cookie Policy[[[linkEnd]]].": "Używamy plików cookie do różnych celów, w tym do analizy i spersonalizowanego marketingu. Korzystając z naszych usług, wyrażasz zgodę na korzystanie przez nas z plików cookie w sposób opisany w [[[linkStart]]]zasadach dotyczących plików cookie[[[linkEnd]]].",
                "Terms of use": "Warunki użytkowania",
                Legal: "Informacje prawne",
                "Privacy policy": "Polityka prywatności",
                Privacy: "Prywatność",
                "Cookies policy": "Zasady dotyczące plików cookie",
                Cookies: "Pliki cookie",
                "Company information": "Informacje o firmie",
                Imprint: "Dane firmy",
                "People directory": "Katalog osób",
                Directory: "Katalog",
                "SoundCloud homepage": "Strona główna SoundCloud",
                "Hear the world's sounds": "Posłuchaj odgłosów świata",
                "Trending tracks on SoundCloud": "Popularne utwory w SoundCloud",
                "Get our iPhone app to save this track to your likes, create playlists and more.": "Pobierz naszą aplikację dla telefonu iPhone, aby zapisywać utwory jako polubione, tworzyć playlisty i korzystać z wielu innych funkcji.",
                "Get our Android app to save this track to your likes, create playlists and more.": "Pobierz naszą aplikację do systemu Android, aby zapisywać utwory jako polubione, tworzyć playlisty i korzystać z wielu innych funkcji.",
                "Try our app.<br>It's even better": "Wypróbuj naszą aplikację.<br>Jest jeszcze lepsza.",
                Like: "Polub",
                "Try playing these related tracks": "Spróbuj odtworzyć te podobne utwory",
                Cancel: "Anuluj",
                "Select your language": "Wybierz język",
                "Language:": "Język:",
                "Messages are only<br> supported on desktop browsers.": "Wiadomości są obsługiwane<br> tylko w przeglądarce na komputerze.",
                "Pages might not display correctly <br>in mobile browsers.": "Strony mogą być wyświetlane nieprawidłowo<br>w przeglądarkach mobilnych.",
                "Go to Messages": "Przejdź do wiadomości",
                "SoundCloud for mobile is<br> only available as an app.": "Mobilny serwis SoundCloud<br> jest dostępny tylko jako aplikacja.",
                "Open or download now<br> to use SoundCloud on<br> your device.": "Otwórz lub pobierz aplikację, <br> aby korzystać z SoundCloud<br> na swoim urządzeniu.",
                "Open or get the app": "Otwórz lub pobierz aplikację",
                "We’re sorry to hear you’re leaving.": "Przykro nam, że nas opuszczasz.",
                "Review your email subscriptions at": "Sprawdź subskrypcje e-mail na stronie",
                "Results for: [[generatedSummary]]": "Wyniki wyszukiwania: [[generatedSummary]]",
                back: "wstecz",
                "Don't want to be included? Visit the desktop version of this page to opt out.": "Nie chcesz być w katalogu? Skorzystaj z wersji tej strony na komputer, żeby z tego zrezygnować.",
                "Play or pause track": "Odtwórz lub wstrzymaj utwór",
                "Get SoundCloud Pulse to manage your tracks on the go": "Pobierz SoundCloud Pulse, aby zarządzać swoimi utworami w podróży ",
                "Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.": "Edytuj tytuły utworów, opisy, tagi, ustawienia prywatności i inne bezpośrednio z telefonu, gdziekolwiek jesteś.",
                "Get SoundCloud Pulse to check your stats on the go": "Pobierz SoundCloud Pulse, aby sprawdzać swoje statystyki w podróży ",
                "See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.": "Sprawdzaj w czasie rzeczywistym liczbę odtwarzań utworów, identyfikuj swoich najlepszych słuchaczy i sprawdź swoje najlepsze miasta, aby zaplanować następny występ.",
                "Get SoundCloud Pulse to check your notifications on the go": "Pobierz SoundCloud Pulse, aby sprawdzać swoje powiadomienia w podróży ",
                "Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.": "Otrzymuj powiadomienia o nowych obserwujących, wielbicielach, repostach i komentarzach, aby móc zaangażować się w kontakt ze swoimi fanami i społecznością.",
                All: "Wszystko",
                Tracks: "Utwory",
                Playlists: "Playlisty",
                People: "Osoby",
                "%d person": ["%d osoba", "[[count]] osoby", "[[count]] osób", "[[count]] osób"],
                "%d playlist": ["%d playlista", "[[count]] playlisty", "[[count]] playlist", "[[count]] playlist"],
                "Found %d SoundCloud Go+ result": ["Znaleziono %d wynik SoundCloud Go+", "Znaleziono %d wyniki SoundCloud Go+", "Znaleziono %d wyników SoundCloud Go+", "Znaleziono %d wyników SoundCloud Go+"],
                "Show more SoundCloud Go+ results": "Pokaż więcej wyników z SoundCloud Go+",
                "Sorry, nothing matches your search.": "Niestety, brak wyników wyszukiwania.",
                "Search SoundCloud": "Szukaj w SoundCloud",
                "Find people, tracks and playlists": "Znajdź osoby, utwory i playlisty",
                "You have successfully<br>changed your password.": "Hasło zostało<br>zmienione.",
                "Activate your device": "Aktywuj urządzenie",
                "Open the SoundCloud app": "Otwórz aplikację SoundCloud",
                "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.": "Po wyświetleniu monitu wprowadź kod aktywacyjny z urządzenia. Aktywacja jest dostępna tylko w najnowszej wersji aplikacji.",
                "Or, continue in your browser": "Możesz zamiast tego kontynuować w przeglądarce",
                "Not available in your country": "Niedostępne w Twoim kraju",
                "Reposted by [[username]]": "Udostępnione przez: [[username]]",
                "Now playing": "Teraz odtwarzane",
                "Previous track": "Poprzedni utwór",
                "Next track": "Następny utwór",
                "%d Like": ["%d polubienie", "%d polubienia", "%d polubień", "%d polubień"],
                "Not available in<br>your country": "Niedostępne<br>w Twoim kraju",
                "We’re sorry, that track isn’t available on mobile.": "Niestety, ten utwór jest niedostępny w wersji mobilnej.",
                Spotlight: "Wyróżnione",
                "Show more tracks": "Pokaż więcej utworów",
                "Show more playlists": "Pokaż więcej playlist",
                Likes: "Polubienia",
                "Show more likes": "Pokaż więcej polubień",
                "searchResults::%d track": ["%d utwór", "[[count]] utwory", "[[count]] utworów", "[[count]] utworów"],
                'eg. "Found 12 tracks, 1 person"::Found [[joinedCounts]]': "Znaleziono: [[joinedCounts]]",
                "button::Sign in to SoundCloud": "Zaloguj się w SoundCloud",
                "button::Download our free app": "Pobierz naszą bezpłatną aplikację",
                "track::Preview": "Fragment"
            }),
            define("shared/config/locales/locale-pt-br.json", [], {
                "Something doesn’t sound right.": "Parece que alguma coisa não está bem.",
                "Refresh the page to try again.": "Atualize a página para tentar novamente.",
                "We can’t find this page.": "Não foi possível encontrar esta página.",
                "We can’t find this sound.": "Não foi possível encontrar esta faixa.",
                "We can’t find this playlist.": "Não foi possível encontrar esta playlist.",
                "We can’t find this user.": "Não foi possível encontrar este usuário.",
                "Charts on SoundCloud.": "Paradas da SoundCloud.",
                "Charts are only available on desktop browsers.": "As paradas só estão disponíveis em navegadores para desktop.",
                "Alternatively, download our mobile app to discover trending music &amp; audio on the go.": "Baixe nosso aplicativo móvel para descobrir a música e o aúdio do momento na hora que desejar.",
                "SoundCloud Premier monetization": "Monetização do SoundCloud Premier",
                "SoundCloud Premier monetization is only available on desktop browsers.": "A monetização do SoundCloud Premier só está disponível em navegadores desktop.",
                "Upload your music &amp; audio and share it with the world.": "Envie sua música e seu áudio e compartilhe-os com o mundo.",
                "Upload is only supported on desktop browsers.": "O upload só é possível em navegadores desktop.",
                "Come back when you’re at your computer to upload more tracks.": "Retorne quando você estiver no seu computador para enviar mais faixas.",
                "Connect with Facebook friends.": "Conecte-se com seus amigos do Facebook.",
                "Connect is only available on desktop browsers.": "A conexão só está disponível em navegadores desktop.",
                "Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers.": "Você quer se conectar com seus amigos do Facebook ou encontrar novas pessoas para seguir? Esse recurso só está disponível em navegadores desktop.",
                "Come back when you’re at your computer to find new people to follow.": "Retorne quando você estiver no computador para encontrar novas pessoas para seguir.",
                "Your profile": "Seu perfil",
                "Managing your account is only available on desktop browsers.": "Só é possível gerenciar sua conta em navegadores desktop.",
                'For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.': 'Para mais informações sobre a otimização do seu perfil, visite nosso <a href="[[url]]">Guia do criador</a>.',
                "Enjoy the free SoundCloud experience with our app.": "Aproveite a SoundCloud gratuitamente com nosso aplicativo.",
                "Enjoy the full SoundCloud experience with our free app.": "Aproveite a SoundCloud completa gratuitamente nosso aplicativo grátis.",
                "[[soundTitle]] by [[authorName]]": "[[soundTitle]] de [[authorName]]",
                Messages: "Mensagens",
                "Take this playlist with you and enjoy the full SoundCloud experience with our free app.": "Ouça esta playlist onde quiser e aproveite a SoundCloud com nosso app gratuito.",
                "[[playlistTitle]] by [[authorName]]": "[[playlistTitle]] de [[authorName]]",
                "Enjoy the custom experience for creators with SoundCloud Pulse.": "Tenha a experiência exclusiva dos criadores com a SoundCloud Pulse.",
                Search: "Pesquisar",
                "Search tracks": "Pesquisar faixas",
                "Search playlists": "Pesquisar playlists",
                "Search people": "Pesquisar pessoas",
                "Search groups": "Pesquisar grupos",
                "Search [[category]]": "Pesquisar [[category]]",
                "Unsubscribed successfully": "Inscrição cancelada com sucesso",
                "Be the first to hear what [[username]] posts next with our free app.": "Seja o primeiro a ouvir o que [[username]] publica com nosso app gratuito.",
                "[[username]]’s stream": "Stream de [[username]]",
                "New &amp; hot tracks": "Faixas novas e iradas",
                "Up-and-coming tracks on SoundCloud": "Faixas que vão bombar na SoundCloud",
                "New &amp; hot audio": "Áudios novos e irados",
                "Up-and-coming audio on SoundCloud": "Áudios que vão bombar na SoundCloud",
                "Top 50 tracks": "Faixas Top 50",
                "The most played tracks on SoundCloud this week": "As faixas mais tocadas na SoundCloud esta semana",
                "Top 50 audio": "Áudios Top 50",
                "The most played audio on SoundCloud this week": "Os áudios mais tocados na SoundCloud esta semana",
                "New &amp; hot in [[[genreLabel]]]": "Novo e irado em [[[genreLabel]]]",
                "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud": "Faixas de [[[genreLabel]]] que vão bombar na SoundCloud",
                "Top 50 in [[[genreLabel]]]": "Top 50 em [[[genreLabel]]]",
                "The most played tracks in [[[genreLabel]]] on SoundCloud this week": "As faixas mais tocadas de [[[genreLabel]]] na SoundCloud esta semana",
                "Up-and-coming in [[[genreLabel]]] on SoundCloud": "O que vai bombar em [[[genreLabel]]] na SoundCloud",
                "The most played in [[[genreLabel]]] on SoundCloud this week": "As mais reproduzidas em [[[genreLabel]]] na SoundCloud esta semana",
                "New &amp; hot": "Novo e irado",
                "All music genres": "Todos os gêneros musicais",
                "All audio genres": "Todos os gêneros de áudio",
                "Alternative Rock": "Rock alternativo",
                Ambient: "Ambiente",
                Classical: "Clássica",
                "Dance &amp; EDM": "Dance e EDM",
                "Drum &amp; Bass": "Drum & Bass",
                Electronic: "Eletrônica",
                "Folk &amp; Singer-Songwriter": "Folk e Cantor/compositor",
                "Hip-hop &amp; Rap": "Rap e Hip Hop",
                "Jazz &amp; Blues": "Jazz e Blues",
                Latin: "Latina",
                "R&B &amp; Soul": "Soul e R&B",
                Soundtrack: "Trilha sonora",
                Speech: "Discursos",
                Triphop: "Trip Hop",
                Business: "Negócio",
                Comedy: "Comédia",
                Entertainment: "Entretenimento",
                Learning: "Aprendizado",
                "News &amp; Politics": "Notícias e Política",
                "Religion &amp; Spirituality": "Religião e Espiritualidade",
                Science: "Ciência",
                Sports: "Esportes",
                Storytelling: "Contação de histórias",
                Technology: "Tecnologia",
                "%d hour": ["%d hora", "%d horas"],
                "%d minute": ["%d minuto", "%d minutos"],
                "%d second": ["%d segundo", "%d segundos"],
                "Enjoy the full SoundCloud experience with our app.": "Aproveite a SoundCloud completa com nosso app.",
                Close: "Fechar",
                Retry: "Tentar novamente",
                "%d track": ["%d faixa", "%d faixas"],
                "%d play": ["%d reprodução", "%d reproduções"],
                "%d follower": ["%d seguidor", "%d seguidores"],
                "Download on the App Store": "Baixar na App Store",
                "Get it on Google Play": "Baixar no Google Play",
                "Get it at BlackBerry World": "Baixar no BlackBerry World",
                "Available at Amazon": "Disponível na Amazon",
                "Download SoundCloud": "Baixar a SoundCloud",
                "I already have the app": "Já tenho o aplicativo",
                "Listen on the SoundCloud app": "Ouvir no app SoundCloud",
                "Download our free app": "Baixe nosso app gratuito",
                "No more previews, just full tracks.": "Chega de pr, apenas faixas completas.",
                "Try SoundCloud Go+": "Experimente a SoundCloud Go+",
                "We use cookies for various purposes including analytics and personalized marketing. By continuing to use the service, you agree to our use of cookies as described in the [[[linkStart]]]Cookie Policy[[[linkEnd]]].": "Usamos cookies para vários efeitos, incluindo análises e marketing personalizado. Ao continuar usando o serviço, você concorda com o nosso uso de cookies conforme descrito na [[[linkStart]]]Política de Cookies[[[linkEnd]]].",
                "Terms of use": "Termos de Uso",
                Legal: "Aviso legal",
                "Privacy policy": "Política de Privacidade",
                Privacy: "Privacidade",
                "Cookies policy": "Política de Cookies",
                "Company information": "Informações sobre a empresa",
                Imprint: "SoundCloud Ltd.",
                "People directory": "Diretório de pessoas",
                Directory: "Diretório",
                "SoundCloud homepage": "Página inicial da SoundCloud",
                "Hear the world's sounds": "Ouça os sons do mundo",
                "Trending tracks on SoundCloud": "Faixas mais tocadas na SoundCloud",
                "Get our iPhone app to save this track to your likes, create playlists and more.": "Baixe nosso aplicativo para iPhone para salvar esta faixa nas suas curtidas, criar playlists e muito mais.",
                "Get our Android app to save this track to your likes, create playlists and more.": "Baixe nosso aplicativo para Android para salvar esta faixa nas suas curtidas, criar playlists e muito mais.",
                "Try our app.<br>It's even better": "Experimente nosso aplicativo.<br>É ainda melhor",
                Like: "Curtir",
                "Try playing these related tracks": "Experimente reproduzir as faixas relacionadas",
                Cancel: "Cancelar",
                "Select your language": "Selecione o idioma",
                "Language:": "Idioma:",
                "Messages are only<br> supported on desktop browsers.": "As mensagens só estão disponíveis<br> em navegadores desktop.",
                "Pages might not display correctly <br>in mobile browsers.": "As páginas podem não ser exibidas corretamente <br>em navegadores móveis.",
                "Go to Messages": "Ir para Mensagens",
                "SoundCloud for mobile is<br> only available as an app.": "A SoundCloud para dispositivos móveis só<br> está disponível como aplicativo.",
                "Open or download now<br> to use SoundCloud on<br> your device.": "Abra ou baixe agora<br> para usar a SoundCloud no<br> seu dispositivo.",
                "Open or get the app": "Abrir ou obter o aplicativo",
                "We’re sorry to hear you’re leaving.": "Que pena que você está indo embora.",
                "Review your email subscriptions at": "Consulte suas assinaturas por e-mail em",
                "Results for: [[generatedSummary]]": "Resultados para: [[generatedSummary]]",
                back: "voltar",
                "Don't want to be included? Visit the desktop version of this page to opt out.": "Não quer ser incluído? Visite a versão para desktop desta página para cancelar.",
                "Play or pause track": "Reproduzir ou pausar faixa",
                "Get SoundCloud Pulse to manage your tracks on the go": "Tenha o SoundCloudPulse para gerenciar as suas faixas em qualquer lugar",
                "Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.": "Edite títulos de faixa, descrições, etiquetas, definições de privacidade e mais a partir de seu telefone, onde quer que você esteja.",
                "Get SoundCloud Pulse to check your stats on the go": "Tenha o SoundCloudPulse para checar as suas estatísticas em qualquer lugar ",
                "See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.": "Veja o número de reproduções rapidamente em tempo real, identifique seus principais ouvintes e cheque suas principais cidades para planejar seu próximo show.",
                "Get SoundCloud Pulse to check your notifications on the go": "Tenha o SoundCloudPulse para checar suas notificações em qualquer lugar ",
                "Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.": "Seja notificado sobre novos seguidores, curtidas, republicações e comentários para interagir com seus fãs e a comunidade.",
                All: "Tudo",
                Tracks: "Faixas",
                People: "Pessoas",
                "%d person": ["%d pessoa", "[[count]] pessoas"],
                "%d playlist": ["%d playlist", "[[count]] playlists"],
                "Found %d SoundCloud Go+ result": ["Encontrado %d resultado do SoundCloud Go+", "Encontrados %d resultados do SoundCloud Go+ "],
                "Show more SoundCloud Go+ results": "Exibir mais resultados na SoundCloud Go+",
                "Sorry, nothing matches your search.": "Lamentamos, não houve resultados para sua pesquisa.",
                "Search SoundCloud": "Pesquisar na SoundCloud",
                "Find people, tracks and playlists": "Encontre pessoas, faixas e playlists",
                "You have successfully<br>changed your password.": "Você alterou<br> sua senha com sucesso.",
                "Activate your device": "Ativar seu dispositivo",
                "Open the SoundCloud app": "Abra o app da SoundCloud",
                "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.": "Quando solicitado, insira o código de ativação do seu dispositivo. A ativação só está disponível na última versão do aplicativo.",
                "Or, continue in your browser": "Ou continue no seu navegador",
                "Not available in your country": "Não disponível no seu país",
                "Reposted by [[username]]": "Republicada por [[username]]",
                "Now playing": "Reproduzindo agora",
                "Previous track": "Faixa anterior",
                "Next track": "Próxima faixa",
                "%d Like": ["%d curtida", "%d curtidas"],
                "Not available in<br>your country": "Não disponível em<br>seu país",
                "We’re sorry, that track isn’t available on mobile.": "Lamentamos, essa faixa não está disponível para dispositivos móveis.",
                Spotlight: "Destaques",
                "Show more tracks": "Ver mais faixas",
                "Show more playlists": "Ver mais playlists",
                Likes: "Curtidas",
                "Show more likes": "Ver mais curtidas",
                "searchResults::%d track": ["%d faixa", "[[count]] faixas"],
                'eg. "Found 12 tracks, 1 person"::Found [[joinedCounts]]': "[[joinedCounts]] encontrados",
                "button::Sign in to SoundCloud": "Entrar na SoundCloud",
                "button::Download our free app": "Baixar nosso aplicativo grátis",
                "track::Preview": "Prévia"
            }),
            define("shared/config/locales/locale-sv.json", [], {
                "Something doesn’t sound right.": "Något låter inte helt rätt.",
                "Refresh the page to try again.": "Uppdatera sidan för att försöka igen.",
                "We can’t find this page.": "Vi kan inte hitta den här sidan.",
                "We can’t find this sound.": "Vi kan inte hitta det här spåret.",
                "We can’t find this playlist.": "Vi kan inte hitta den här spellistan.",
                "We can’t find this user.": "Vi kan inte hitta den här användaren.",
                "Charts on SoundCloud.": "Listor på SoundCloud.",
                "Charts are only available on desktop browsers.": "Listor finns bara på datorn.",
                "Alternatively, download our mobile app to discover trending music &amp; audio on the go.": "Du kan också ladda ner vår mobilapp för att upptäcka populär musik och nya spår när du är på språng.",
                "SoundCloud Premier monetization": "Intäktsgenerering med SoundCloud Premier",
                "SoundCloud Premier monetization is only available on desktop browsers.": "SoundCloud Premier intäktsgenerering är bara tillgängligt via dator.",
                "Upload your music &amp; audio and share it with the world.": "Ladda upp musik och spår och dela med hela världen.",
                "Upload is only supported on desktop browsers.": "Det går bara att ladda upp från datorn.",
                "Come back when you’re at your computer to upload more tracks.": "Kom tillbaka när du sitter vid datorn för att ladda upp fler spår.",
                "Connect with Facebook friends.": "Hitta Facebook-vänner.",
                "Connect is only available on desktop browsers.": "Du kan bara hitta Facebook-vänner från datorn.",
                "Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers.": "Vill du hitta dina Facebook-vänner eller andra personer att följa? Den här funktionen fungerar bara från datorn.",
                "Come back when you’re at your computer to find new people to follow.": "Kom tillbaka när du sitter vid datorn för att hitta folk att följa.",
                "Your profile": "Din profil",
                "Managing your account is only available on desktop browsers.": "Det går bara att hantera kontot från datorn.",
                'For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.': 'Mer information om hur du optimerar din profil finns i vår <a href="[[url]]">skaparguide</a>.',
                "Enjoy the free SoundCloud experience with our app.": "Använd SoundCloud gratis med vår app.",
                "Enjoy the full SoundCloud experience with our free app.": "Använd allting SoundCloud har att erbjuda med vår gratisapp.",
                "[[soundTitle]] by [[authorName]]": "[[soundTitle]] av [[authorName]]",
                Messages: "Meddelanden",
                "Take this playlist with you and enjoy the full SoundCloud experience with our free app.": "Ta med dig den här spellistan och använd allting SoundCloud har att erbjuda med vår gratisapp.",
                "[[playlistTitle]] by [[authorName]]": "[[playlistTitle]] av [[authorName]]",
                "Enjoy the custom experience for creators with SoundCloud Pulse.": "Dra fördel av en anpassad upplevelse för skapare med SoundCloud Pulse.",
                Search: "Sök",
                "Search tracks": "Sök spår",
                "Search playlists": "Sök spellistor",
                "Search people": "Sök folk",
                "Search groups": "Sök grupper",
                "Search [[category]]": "Sök [[category]]",
                "Unsubscribed successfully": "Prenumerationen avslutad",
                "Be the first to hear what [[username]] posts next with our free app.": "Bli först med att höra vad [[username]] postar nästa gång med vår gratisapp.",
                "[[username]]’s stream": "[[username]]s flöde",
                "New &amp; hot tracks": "Nya och heta spår",
                "Up-and-coming tracks on SoundCloud": "Fräscha spår på SoundCloud",
                "New &amp; hot audio": "Nya och heta inspelningar",
                "Up-and-coming audio on SoundCloud": "Fräscha inspelningar på SoundCloud",
                "Top 50 tracks": "Topp 50-spår",
                "The most played tracks on SoundCloud this week": "De mest spelade spåren på SoundCloud den här veckan",
                "Top 50 audio": "Topp 50-inspelningar",
                "The most played audio on SoundCloud this week": "Mest spelade inspelningar på SoundCSloud den här veckan",
                "New &amp; hot in [[[genreLabel]]]": "Nytt och hett inom [[[genreLabel]]]",
                "Up-and-coming tracks in [[[genreLabel]]] on SoundCloud": "Fräscha spår inom [[[genreLabel]]] på SoundCloud",
                "Top 50 in [[[genreLabel]]]": "Topp 50 inom [[[genreLabel]]]",
                "The most played tracks in [[[genreLabel]]] on SoundCloud this week": "De mest spelade spåren inom [[[genreLabel]]] på SoundCloud den här veckan",
                "Up-and-coming in [[[genreLabel]]] on SoundCloud": "Fräscht inom [[[genreLabel]]] på SoundCloud",
                "The most played in [[[genreLabel]]] on SoundCloud this week": "Det mest spelade inom [[[genreLabel]]] på SoundCloud den här veckan",
                "New &amp; hot": "Nytt och hett",
                "Top 50": "Topp 50",
                "All music genres": "Alla musikgenrer",
                "All audio genres": "Alla inspelningsgenrer",
                "Alternative Rock": "Alternativ",
                Classical: "Klassisk",
                "Dance &amp; EDM": "Dans och EDM",
                "Drum &amp; Bass": "Drum and bass",
                Electronic: "Elektronisk",
                "Folk &amp; Singer-Songwriter": "Folk och singer-songwriter",
                "Hip-hop &amp; Rap": "Hiphop och rap",
                "Jazz &amp; Blues": "Jazz och blues",
                "R&B &amp; Soul": "R&B och soul",
                Speech: "Tal",
                Audiobooks: "Ljudböcker",
                Business: "Ekonomi",
                Comedy: "Komedi",
                Entertainment: "Underhållning",
                Learning: "Bildning",
                "News &amp; Politics": "Nyheter och politik",
                "Religion &amp; Spirituality": "Religion och andlighet",
                Science: "Vetenskap",
                Sports: "Sport",
                Storytelling: "Berättelser",
                Technology: "Teknologi",
                "%d hour": ["%d timme", "%d timmar"],
                "%d minute": ["%d minut", "%d minuter"],
                "%d second": ["%d sekund", "%d sekunder"],
                "Enjoy the full SoundCloud experience with our app.": "Använd allting SoundCloud har att erbjuda med vår app.",
                Close: "Stäng",
                Retry: "Försök igen",
                "%d track": ["%d spår", "%d spår"],
                "%d play": ["%d spelning", "%d spelningar"],
                "%d follower": ["%d följare", "%d följare"],
                "Download on the App Store": "Ladda ner i App Store",
                "Get it on Google Play": "Hämta den på Google Play",
                "Get it at BlackBerry World": "Skaffa den på BlackBerry World",
                "Available at Amazon": "Finns på Amazon",
                "Download SoundCloud": "Ladda ner SoundCloud",
                "I already have the app": "Jag har redan appen",
                "Listen on the SoundCloud app": "Lyssna på SoundCloud-appen",
                "Download our free app": "Ladda ner vår gratisapp",
                "No more previews, just full tracks.": "Inga fler förhandsvisningar, bara hela spår.",
                "Try SoundCloud Go+": "Prova SoundCloud Go+",
                "We use cookies for various purposes including analytics and personalized marketing. By continuing to use the service, you agree to our use of cookies as described in the [[[linkStart]]]Cookie Policy[[[linkEnd]]].": "Vi använder cookies för olika ändamål som bland annat statistik och individanpassad reklam. När du använder våra tjänster samtycker du till att vi använder cookies i enlighet med vår [[[linkStart]]]cookie-policy[[[linkEnd]]].",
                "Terms of use": "Användarvillkor",
                Legal: "Juridiskt",
                "Privacy policy": "Sekretesspolicy",
                Privacy: "Sekretess",
                "Cookies policy": "Cookie-policy",
                "Company information": "Företagsinformation",
                Imprint: "Företagsfakta",
                "People directory": "Personkatalog",
                Directory: "Katalog",
                "SoundCloud homepage": "SoundClouds hemsida",
                "Hear the world's sounds": "Lyssna på hela världens spår",
                "Trending tracks on SoundCloud": "Populära spår på SoundCloud",
                "Get our iPhone app to save this track to your likes, create playlists and more.": "Skaffa iPhone-appen för att spara det här spåret till dina favoriter, skapa spellistor och mer.",
                "Get our Android app to save this track to your likes, create playlists and more.": "Skaffa Android-appen för att spara det här spåret till dina favoriter, skapa spellistor och mer.",
                "Try our app.<br>It's even better": "Testa vår app.<br>Den är ännu bättre",
                Like: "Gilla",
                "Try playing these related tracks": "Testa att spela de här liknande spåren",
                Cancel: "Avbryt",
                "Select your language": "Välj ditt språk",
                "Language:": "Språk:",
                "Messages are only<br> supported on desktop browsers.": "Det går bara<br> att skicka meddelanden från datorn.",
                "Pages might not display correctly <br>in mobile browsers.": "Sidor kanske inte visas på rätt sätt <br>i mobilwebbläsare.",
                "Go to Messages": "Gå till Meddelanden",
                "SoundCloud for mobile is<br> only available as an app.": "SoundCloud för mobilen finns<br> bara som en app.",
                "Open or download now<br> to use SoundCloud on<br> your device.": "Öppna eller ladda ner nu<br> för att använda SoundCloud på<br> din enhet.",
                "Open or get the app": "Öppna eller skaffa appen",
                "We’re sorry to hear you’re leaving.": "Det var tråkigt att höra att du lämnar oss.",
                "Review your email subscriptions at": "Se över dina e-postprenumerationer på",
                "Results for: [[generatedSummary]]": "Resultat för: [[generatedSummary]]",
                back: "tillbaka",
                "Don't want to be included? Visit the desktop version of this page to opt out.": "Vill du inte vara med? Besök den här sidan på datorn för att avsluta.",
                "Play or pause track": "Spela eller pausa spår",
                "Get SoundCloud Pulse to manage your tracks on the go": "Skaffa SoundCloud Pulse och hantera dina spår i farten",
                "Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.": "Redigera spårtitlar, beskrivningar, taggar, sekretessinställningar med mera direkt från din smartphone var du än är.",
                "Get SoundCloud Pulse to check your stats on the go": "Skaffa SoundCloud Pulse och kolla din statistik i farten",
                "See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.": "Se ditt antal spelningar skjuta i höjden i realtid, håll koll på dina topplyssnare och kolla dina toppstäder för att planera din nästa livespelning.",
                "Get SoundCloud Pulse to check your notifications on the go": "Skaffa SoundCloud Pulse och kolla dina notiser i farten",
                "Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.": "Få notiser om nya följare, likes, reposts och kommentarer så du håller kontakt med dina fans och communityt.",
                All: "Alla",
                Tracks: "Spår",
                Playlists: "Spellistor",
                People: "Folk",
                "%d person": ["%d person", "[[count]] personer"],
                "%d playlist": ["%d spellista", "[[count]] spellistor"],
                "Found %d SoundCloud Go+ result": ["Hittade %d SoundCloud Go+-resultat", "Hittade %d SoundCloud Go+-resultat"],
                "Show more SoundCloud Go+ results": "Visa fler SoundCloud Go+-resultat",
                "Sorry, nothing matches your search.": "Tyvärr, inget matchar din sökning.",
                "Search SoundCloud": "Sök på SoundCloud",
                "Find people, tracks and playlists": "Hitta folk, spår och spellistor",
                "You have successfully<br>changed your password.": "Du har<br>ändrat ditt lösenord.",
                "Activate your device": "Aktivera din enhet",
                "Open the SoundCloud app": "Öppna SoundCloud-appen",
                "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.": "Ange aktiveringskoden från din enhet när du uppmanas att göra det. Det går endast att aktivera från den senaste versionen av appen.",
                "Or, continue in your browser": "Eller fortsätt i din webbläsare",
                "Not available in your country": "Inte tillgängligt i ditt land",
                "Reposted by [[username]]": "Repostad av [[username]]",
                "Now playing": "Nu spelas",
                "Previous track": "Föregående spår",
                "Next track": "Nästa spår",
                "%d Like": ["%d Like", "%d Likes"],
                "Not available in<br>your country": "Inte tillgänglig i<br>ditt land",
                "We’re sorry, that track isn’t available on mobile.": "Det spåret är tyvärr inte tillgängligt på mobilen.",
                "Show more tracks": "Visa fler spår",
                "Show more playlists": "Visa fler spellistor",
                Likes: "Favoriter",
                "Show more likes": "Visa fler favoriter",
                "searchResults::%d track": ["%d spår", "[[count]] spår"],
                'eg. "Found 12 tracks, 1 person"::Found [[joinedCounts]]': "Hittade[[joinedCounts]]",
                "button::Sign in to SoundCloud": "Logga in på SoundCloud",
                "button::Download our free app": "Ladda ner vår gratisapp",
                "track::Preview": "Förhandsvisning"
            }),
            define("lib/helpers/dns-helper", ["require", "exports", "module", "lib/url"], function(e, t, n) {
                var r = e("lib/url"),
                    i = [],
                    s = n.exports = {
                        lookup: null
                    }
            }),
            define("views/footer/footer.tmpl", ["vendor/handlebars-runtime", "views/app-buttons/app-buttons", "views/locale-selector/locale-selector"], null),
            define("views/footer/footer.css", ["require", "exports", "module", "css"], null),
            define("lib/helpers/a11y-helper", ["require", "exports", "module", "vendor/handlebars-runtime"], function(e, t, n) {
                var r = e("vendor/handlebars-runtime"),
                    i = n.exports = {
                        getAccessibleMarkup: null
                    }
            }),
            define("lib/helpers/count-helper", ["require", "exports", "module", "underscore", "lib/lingua"], function(e, t, n) {
                
                var r = e("underscore"),
                    i = e("lib/lingua"),
                    s = ["K", "M", "B"],
                    o;
                o = {
                    max: null,
                    suffix: "+",
                    useSIUnits: !1,
                    precision: null
                };
                var u = n.exports = {
                    render: null
                }
            }),
            define("lib/helpers/i18n-helper", ["require", "exports", "module"], function(e, t, n) {
                var r = /\r?\n/g,
                    i = /\s+/g;
                n.exports = {
                    cleanBlockText: null
                }
            }),
            define("lib/helpers/image-helper", ["require", "exports", "module", "$", "underscore", "lib/helpers/client-environment-helper", "vendor/experiments/experiments", "lib/helpers/name-helper", "lib/support"], function(e, t, n) {
                

                

                

                

                

                

                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("lib/helpers/client-environment-helper").device,
                    o = e("vendor/experiments/experiments"),
                    u = e("lib/helpers/name-helper"),
                    a = e("lib/support"),
                    f, l = /default_avatar/,
                    c = /^.*\/([a-z0-9]+)-0*([a-z0-9]+)-([a-z0-9]+)-([a-z0-9]+)\.jpg.*$/i,
                    h = /\/images\/default\/.*?x[0-9]+(?:-[a-z0-9]+)?\.png$/,
                    p = {},
                    d = [
                        [20, "t20x20"],
                        [50, "t50x50"],
                        [120, "t120x120"],
                        [200, "t200x200"],
                        [500, "t500x500"]
                    ];
                o.get("mweb_listening", "hocuspocus") === "hocuspocus" && (s.dpi === "hdpi" ? d = [
                    [60, "t120x120"],
                    [120, "t240x240"],
                    [500, "t500x500"]
                ] : d = [
                    [60, "t60x60"],
                    [120, "t120x120"],
                    [500, "t500x500"]
                ]);
                var v = ["alt", "class", "height", "src", "title", "width", "data-src", "onload"],
                    m = {
                        cloud: {
                            40: "https://mobi.sndcdn.com/assets/images/default/cloudx40-397e0b30.png",
                            50: "https://mobi.sndcdn.com/assets/images/default/cloudx50-397e0b30.png",
                            60: "https://mobi.sndcdn.com/assets/images/default/cloudx80-397e0b30.png",
                            80: "https://mobi.sndcdn.com/assets/images/default/cloudx80-397e0b30.png",
                            120: "https://mobi.sndcdn.com/assets/images/default/cloudx120-397e0b30.png",
                            200: "https://mobi.sndcdn.com/assets/images/default/cloudx200-397e0b30.png"
                        },
                        group: {
                            40: "https://mobi.sndcdn.com/assets/images/default/groupx40-397e0b30.png",
                            50: "https://mobi.sndcdn.com/assets/images/default/groupx50-397e0b30.png",
                            60: "https://mobi.sndcdn.com/assets/images/default/groupx80-397e0b30.png",
                            80: "https://mobi.sndcdn.com/assets/images/default/groupx80-397e0b30.png",
                            120: "https://mobi.sndcdn.com/assets/images/default/groupx120-397e0b30.png",
                            200: "https://mobi.sndcdn.com/assets/images/default/groupx200-397e0b30.png"
                        },
                        user: {
                            40: "https://mobi.sndcdn.com/assets/images/default/userx40-397e0b30.png",
                            50: "https://mobi.sndcdn.com/assets/images/default/userx50-397e0b30.png",
                            60: "https://mobi.sndcdn.com/assets/images/default/userx80-397e0b30.png",
                            80: "https://mobi.sndcdn.com/assets/images/default/userx80-397e0b30.png",
                            120: "https://mobi.sndcdn.com/assets/images/default/userx120-397e0b30.png",
                            200: "https://mobi.sndcdn.com/assets/images/default/userx200-397e0b30.png"
                        }
                    },
                    g = n.exports = {
                        load: null,
                        markup: null,
                        getMarkup: null,
                        getAltText: null,
                        getPlaceholderUrl: null,
                        urlFrom: null,
                        isDefaultImage: null,
                        getDefaultImage: null,
                        setFormat: null,
                        fadeInBackground: null
                    };
                f = function() {
                    var e = Object.keys(m.cloud),
                        t;
                    return e.sort(function(e, t) {
                        return e - t
                    }), t = i.last(e), i.memoize(null)
                }()
            }),
            define("views/header/search-button", ["require", "exports", "module", "lib/event-bus", "lib/view", "views/header/search-button.css"], function(e, t, n) {
                

                
                var r = e("lib/event-bus"),
                    i = e("lib/view"),
                    s = n.exports = i.extend({
                        template: null,
                        tagName: "button",
                        css: e("views/header/search-button.css"),
                        className: "searchButton g-touch-padding g-button-nostyle",
                        states: {
                            initiate: "initiate",
                            visibility: "sc-hidden"
                        },
                        events: {
                            click: o
                        },
                        setup: null,
                        dispose: null,
                        renderDecorate: null
                    })
            }),
            define("views/search/search-box", ["require", "exports", "module", "config", "lib/event-bus", "lib/views/mixins/form", "views/search/suggestions-overlay", "views/search/suggestions-list", "lib/tracking/tracking-core", "lib/view", "lib/url", "views/search/search-box.tmpl", "views/search/search-box.css"], function(e, t, n) {
                

                

                

                

                

                

                

                

                

                

                
                var r = e("config"),
                    i = e("lib/event-bus"),
                    s = e("lib/views/mixins/form"),
                    o = e("views/search/suggestions-overlay"),
                    u = e("views/search/suggestions-list"),
                    a = e("lib/tracking/tracking-core"),
                    f = e("lib/view"),
                    l = e("lib/url"),
                    c = n.exports = f.extend(s, {
                        template: e("views/search/search-box.tmpl"),
                        css: e("views/search/search-box.css"),
                        className: "searchBox g-z-index-overlay",
                        events: {
                            "click .searchBox__searchCancel": d,
                            "click .searchBox__searchEmpty": m,
                            "keyup .searchBox__searchInput": g,
                            "focus .searchBox__searchInput": p
                        },
                        element2selector: {
                            input: ".searchBox__searchInput"
                        },
                        formulatingSearch: !1,
                        states: {
                            open: "open"
                        },
                        setup: null,
                        dispose: null,
                        renderDecorate: null,
                        startSearch: null,
                        onSubmit: null,
                        onReset: null,
                        getTemplateData: null
                    })
            }),
            define("lib/views/mixins/overlay", ["require", "exports", "module", "$", "underscore", "lib/event-bus", "lib/helpers/client-environment-helper", "lib/css-transitions", "lib/scroll-bouncing-fix", "lib/mixin"], function(e, t, n) {
                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("lib/event-bus"),
                    o = e("lib/helpers/client-environment-helper").device,
                    u = e("lib/css-transitions"),
                    a = e("lib/scroll-bouncing-fix"),
                    f = e("lib/mixin"),
                    l = n.exports = new f({
                        applyTo: function(e) {
                            e.defaults = i.defaults(e.defaults || {}, {
                                Subview: null,
                                subviewArgs: null,
                                parentEl: null
                            })
                        },
                        defaults: {
                            transitions: null,
                            onOpen: r.noop,
                            onSyncOpen: r.noop,
                            onClose: r.noop
                        },
                        after: {
                            renderDecorate: null
                        },
                        before: {
                            dispose: null
                        },
                        open: null,
                        close: null,
                        _onClose: null,
                        createContentView: null,
                        getContentView: null,
                        detach: null
                    })
            }),
            define("lib/views/fullscreen-overlay.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".fullscreen-overlay{position:fixed;width:100%;left:0;top:0;bottom:0}.fullscreen-overlay-dark{background:rgba(0,0,0,.6);color:#fff}.fullscreen-overlay-show-header{margin-top:44px}.fullscreen-overlay__closeButton{position:absolute;top:14px;right:20px;border:0;overflow:hidden;opacity:.5;background-color:transparent;font-size:120%}")), data = null
            }),
            define("lib/views/fullscreen-overlay.tmpl", ["vendor/handlebars-runtime"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("views/banner/launch-app.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".launchApp{display:flex;flex-flow:column;height:200px;justify-content:space-around;align-items:center;margin-top:135px}")), data = null
            }),
            define("views/banner/launch-app.tmpl", ["vendor/handlebars-runtime"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("views/play-controls/now-playing", ["require", "exports", "module", "models/sound", "lib/view", "shared/config/route-builders", "views/play-controls/now-playing.tmpl", "views/play-controls/now-playing.css"], null),
            define("lib/mixins/usage-counting", ["require", "exports", "module", "lib/mixin"], function(e, t, n) {
                var r = e("lib/mixin"),
                    i = n.exports = new r({
                        onCleanup: null,
                        onIncrement: null,
                        onDecrement: null,
                        after: {
                            initialize: function(e) {
                                this._counts = {}, this._needsGC = !1, e = e || {}, this._autoCleanup = !!e.autoCleanup, this.onCleanup = e.onCleanup, this.onIncrement = e.onIncrement, this.onDecrement = e.onDecrement
                            },
                            reset: null,
                            set: null,
                            unset: null
                        },
                        before: {
                            reset: null
                        },
                        countFor: null,
                        increment: null,
                        decrement: null,
                        cleanup: null,
                        changeKey: null
                    })
            }),
            define("vendor/console-logger/console-logger", ["require", "exports", "module"], null),
            define("views/app-buttons/app-buttons", ["require", "exports", "module", "lib/helpers/client-environment-helper", "lib/lingua", "lib/native-links", "lib/tracking/tracking-core", "lib/views/mixins/update-on-layout-change", "lib/view", "views/app-buttons/app-buttons.tmpl", "views/app-buttons/app-buttons.css"], null),
            define("views/locale-selector/locale-selector", ["require", "exports", "module", "lib/event-bus", "lib/views/fullscreen-overlay", "lib/lingua", "views/locale-selector/locale-selector-content", "lib/view"], null),
            define("vendor/experiments/experiments", ["require", "exports", "module"], function(e, t, n) {
                (function() {
                    
                    var e, t = "assignments";
                    e = {
                        _initialized: !1,
                        _assignments: null,
                        _localStorageKey: null,
                        _localStorageEnabled: null,
                        _availableLayers: null,
                        _assignmentServiceUrl: null,
                        _version: null,
                        _anonymousId: null,
                        initialize: null,
                        reset: null,
                        get: function(t, n) {
                            if (!e._initialized) return !1;
                            var r = e.getLayers() || {};
                            return r.hasOwnProperty(t) && r[t].experimentName === n ? r[t].variantName : !1
                        },
                        set: null,
                        fetchAssignments: null,
                        isUpToDate: null,
                        loadAssignments: null,
                        buildAssignments: null,
                        storeAssignments: null,
                        clearAssignments: null,
                        getAssignments: null,
                        getLayers: null,
                        formatAssignments: null,
                        formatLayers: null,
                        serialize: null,
                        setExperimentsFromQueryParams: null
                    }, typeof n != "undefined" && n.exports ? n.exports = e : (window.SC = window.SC || {}, window.SC.Experiments = e)
                })()
            }),
            define("lib/helpers/name-helper", ["require", "exports", "module", "vendor/handlebars-runtime", "lib/helpers/lang-helper"], function(e, t, n) {
                var r = e("vendor/handlebars-runtime"),
                    i = e("lib/helpers/lang-helper"),
                    s = n.exports = {
                        get: null
                    }
            }),
            define("views/header/search-button.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".searchButton,.searchButton:active{top:0;right:0;position:absolute;overflow:hidden;height:44px;width:50px;text-indent:50px}.searchButton::after{position:absolute;content:'';top:0;right:0;background:#fff url(https://mobi.sndcdn.com/assets/images/ldpi/search/search-5738d5f4.png) 0 0 no-repeat;background-size:50px 44px;width:50px;height:44px;transition:background-color .1s linear}.searchButton.initiate::after{background-color:#333}.searchButton:active::after{background-color:#f50}")), data = null
            }),
            define("lib/views/mixins/form", ["require", "exports", "module", "$", "underscore", "lib/mixin"], function(e, t, n) {
                var r = e("$"),
                    i = e("underscore"),
                    s = e("lib/mixin"),
                    o = n.exports = new s({
                        defaults: {
                            tagName: "form",
                            formSelector: null,
                            formId: null,
                            submit: null,
                            reset: null,
                            getFormElement: null,
                            onSubmit: r.noop,
                            onReset: r.noop
                        },
                        formId: null,
                        applyTo: function(e) {
                            var t = {},
                                n = this.formSelector;
                            t[["reset", n].join(" ").trim()] = "reset", t[["submit", n].join(" ").trim()] = "submit", e.events = i.defaults(t, e.events)
                        },
                        before: {
                            setup: null
                        },
                        around: {
                            getTemplateData: null
                        }
                    })
            }),
            define("views/search/suggestions-overlay", ["require", "exports", "module", "lib/event-bus", "lib/views/fullscreen-overlay"], function(e, t, n) {
                
                var r = e("lib/event-bus"),
                    i = e("lib/views/fullscreen-overlay"),
                    s = n.exports = i.extend({
                        setup: null,
                        dispose: null,
                        onClose: null
                    })
            }),
            define("views/search/suggestions-list", ["require", "exports", "module", "underscore", "lib/views/list", "views/search/query-suggestion", "collections/search-queries", "views/search/suggestions-list-empty.tmpl", "views/search/suggestions-list.css", "views/search/search.css"], function(e, t, n) {
                var r = e("underscore"),
                    i = e("lib/views/list"),
                    s = e("views/search/query-suggestion"),
                    o = e("collections/search-queries"),
                    u = n.exports = i.extend({
                        emptyTemplate: e("views/search/suggestions-list-empty.tmpl"),
                        css: [e("views/search/suggestions-list.css"), e("views/search/search.css")],
                        defaults: {
                            query: null
                        },
                        className: "suggestionsList",
                        itemClassName: "suggestionsList__item",
                        Subview: s,
                        setup: null,
                        getSubviewArgs: null
                    })
            }),
            define("views/search/search-box.tmpl", ["vendor/handlebars-runtime"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("views/search/search-box.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".searchBox{position:absolute;top:0;left:0;width:100%;height:44px;background:#fff;z-index:-1;opacity:0;-webkit-transition:opacity .25s,z-index .3s;transition:opacity .25s,z-index .3s}.searchBox.open{z-index:1;opacity:1;-webkit-transition:opacity .25s,z-index .01s;transition:opacity .25s,z-index .01s}.searchBox__searchInputWrap{position:relative;overflow:hidden;padding-right:8px}.searchBox__searchCancel+.searchBox__searchInputWrap{padding-right:4px}.searchBox__searchInput{position:relative;display:block;width:100%;height:36px;margin:4px 0 0 4px;padding-left:40px;border:0;border-radius:2px;color:#333;background:#e5e5e5}.searchBox__searchInput:focus{outline:0}.searchBox__searchInput::-moz-placeholder,.searchBox__searchInput::-webkit-placeholder,.searchBox__searchInput:-ms-placeholder{color:#999}.searchBox__searchInputWrap::after{content:'';display:block;position:absolute;left:12px;top:12px;width:20px;height:20px;background:url(https://mobi.sndcdn.com/assets/images/ldpi/search/search_input-bd02f9a1.png) 0 0 no-repeat;opacity:.4;background-size:20px 20px}.searchBox__searchEmpty{color:#999;display:none;position:absolute;right:10px;top:3px;height:36px;line-height:36px;width:20px;font-size:20px}.searchBox.filled .searchBox__searchEmpty{display:block}.searchBox__searchCancel{float:right;margin:13px 13px 0;color:#999}")), data = null
            }),
            define("lib/css-transitions", ["require", "exports", "module", "$", "underscore"], function(e, t, n) {
                

                

                
                var r = e("$"),
                    i = e("underscore"),
                    s = "g-transition-fade",
                    o = "g-transition-fade-in",
                    u = "g-transition-fade-out",
                    a = "g-transition-translate",
                    f = "g-transition-slide-top-in",
                    l = "g-transition-slide-top-out",
                    c = 300;
                t.fadeIn = p.bind(null, !0), t.fadeOut = p.bind(null, !1), t.slideTopIn = h.bind(null, !0), t.slideTopOut = h.bind(null, !1)
            }),
            define("lib/scroll-bouncing-fix", ["require", "exports", "module"], function(e, t, n) {
                var r = n.exports = null
            }),
            define("views/play-controls/now-playing.tmpl", ["vendor/handlebars-runtime"], null),
            define("views/play-controls/now-playing.css", ["require", "exports", "module", "css"], null),
            define("views/app-buttons/app-buttons.tmpl", ["vendor/handlebars-runtime"], null),
            define("views/app-buttons/app-buttons.css", ["require", "exports", "module", "css"], null),
            define("views/locale-selector/locale-selector-content", ["require", "exports", "module", "config", "lib/event-bus", "lib/view", "lib/i18n-locale-switcher", "views/locale-selector/locale-selector-content.css", "views/locale-selector/locale-selector-content.tmpl"], null),
            define("lib/helpers/lang-helper", ["require", "exports", "module"], function(e, t, n) {
                var r = n.exports = {
                    plural: null,
                    possessive: null
                }
            }),
            define("lib/views/list", ["require", "exports", "module", "$", "underscore", "vendor/handlebars-runtime", "lib/helpers/map-to-html-attrs-helper", "lib/view"], function(e, t, n) {
                

                

                

                

                
                var r = e("$"),
                    i = e("underscore"),
                    s = e("vendor/handlebars-runtime"),
                    o = e("lib/helpers/map-to-html-attrs-helper"),
                    u = e("lib/view"),
                    a = n.exports = u.extend({
                        emptyTemplate: null,
                        defaults: {
                            minDisplay: 0,
                            maxDisplay: 3
                        },
                        Subview: null,
                        subviewArgs: {},
                        listTagName: "ul",
                        listClassName: "sc-list-nostyle sc-clearfix",
                        itemTagName: "li",
                        itemClassName: "",
                        template: null,
                        _isShowingEmpty: !1,
                        _listElement: null,
                        _desiredLength: null,
                        _setup: null,
                        renderDecorate: null,
                        createListElement: null,
                        syncItems: null,
                        getDesiredNumItems: null,
                        getLength: null,
                        setDisplayedItems: null,
                        _teardown: null,
                        getModelsToRender: null,
                        createAndInsertListItemView: null,
                        getTemplate: null,
                        getListContainer: null,
                        getListElement: null,
                        getListItemView: null,
                        getListItemViews: null,
                        getSubviewArgs: null,
                        getSubviewModel: i.identity,
                        getListItemAttributesData: null,
                        getListItemAttributes: null,
                        getListItemAttributesString: null,
                        onAdd: null,
                        onRemove: null,
                        onCollectionChange: null,
                        addListItemSubview: null,
                        createSubviewWrapper: null,
                        getSubviewWrapper: null,
                        addListItemToDOM: null,
                        removeListItemFromDOM: null,
                        appendDOMElement: null,
                        getCollectionData: null
                    })
            }),
            define("views/search/query-suggestion", ["require", "exports", "module", "lib/event-bus", "models/query-suggestion", "lib/helpers/search-helper", "vendor/usertext/usertext", "lib/view", "views/search/query-suggestion.css", "views/search/query-suggestion.tmpl"], function(e, t, n) {
                
                var r = e("lib/event-bus"),
                    i = e("models/query-suggestion"),
                    s = e("lib/helpers/search-helper"),
                    o = e("vendor/usertext/usertext"),
                    u = e("lib/view"),
                    a = n.exports = u.extend({
                        css: e("views/search/query-suggestion.css"),
                        template: e("views/search/query-suggestion.tmpl"),
                        className: "querySuggestion sc-media g-font-16",
                        ModelClass: i,
                        requiredAttributes: ["output"],
                        events: {
                            click: f
                        },
                        defaults: {
                            queryUrn: null,
                            queryPosition: null
                        },
                        getTemplateData: null
                    })
            }),
            define("collections/search-queries", ["require", "exports", "module", "lib/collection", "models/query-suggestion"], function(e, t, n) {
                var r = e("lib/collection"),
                    i = e("models/query-suggestion"),
                    s = n.exports = r.extend({
                        model: i,
                        queryUrn: null,
                        defaults: {
                            limit: 10,
                            query: null
                        },
                        baseUrl: null,
                        parse: null
                    }, {
                        hashFn: null
                    })
            }),
            define("views/search/suggestions-list-empty.tmpl", ["vendor/handlebars-runtime"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("views/search/suggestions-list.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".suggestionsList{height:100%;color:#333;background-color:#fff;border-top:1px solid #f7f7f7}")), data = null
            }),
            define("views/search/search.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".search{background:#fff}.search__banner{padding-top:140px;color:#666;text-align:center;margin:0 40px;background-position:50% 60px;background-repeat:no-repeat;background-size:48px 48px}.search__blank{background-image:url(https://mobi.sndcdn.com/assets/images/ldpi/search/search_blank-bd02f9a1.png);padding-bottom:100%}")), data = null
            }),
            define("lib/i18n-locale-switcher", ["require", "exports", "module"], null),
            define("views/locale-selector/locale-selector-content.css", ["require", "exports", "module", "css"], null),
            define("views/locale-selector/locale-selector-content.tmpl", ["vendor/handlebars-runtime"], null),
            define("lib/helpers/map-to-html-attrs-helper", ["require", "exports", "module", "underscore"], function(e, t, n) {
                var r = e("underscore"),
                    i = n.exports = null
            }),
            define("models/query-suggestion", ["require", "exports", "module", "lib/model"], function(e, t, n) {
                var r = e("lib/model"),
                    i = n.exports = r.extend({})
            }),
            define("lib/helpers/search-helper", ["require", "exports", "module", "underscore"], function(e, t, n) {
                var r = e("underscore"),
                    i = ["q", "q[fulltext]", "filter.duration", "filter.created_at", "filter.license", "filter.genre", "filter.genre_or_tag", "filter.place"],
                    s = n.exports = {
                        getValidParams: null,
                        highlightText: null
                    }
            }),
            define("vendor/usertext/usertext", ["require", "exports", "module"], function(e, t, n) {
                (function() {
                    var e, t, r, i, s, o, u, a, f = /\b((?:https?:\/\/|www\d{0,3}\.|(?:[a-z0-9\-]+\.)+[a-z]{2,4}\/)[^\s'’"]*[^\s`!()\[\]{};:'".,<>?«»“”‘’])/ig,
                        l = /(\b(?:[0-5]?[0-9])(?::[0-5][0-9]){1,2}\b)/g,
                        c = /([a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,6})/gi,
                        h = /(\s|[^\w]|^)@([\w\-]+)/g,
                        p = /( |^)(#([\w-]+))/gm,
                        d = /\{\{\b((?:https?:\/\/|www\d{0,3}\.|(?:[a-z0-9\-]+\.)+[a-z]{2,4}\/)\S*[^\s`!()\[\]{};:'".,<>?«»“”‘’])\}\}/ig,
                        v = /\{\{(?:mailto:)?([a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,6})\}\}/gi,
                        m = /\{\{@([\w\-]+)\}\}/gi,
                        g = /^((?:https?:\/\/)?(?:www\.|m\.)?soundcloud\.(?:com|dev))\/?/i,
                        y = /^(?:ht|f)tps?:\/\//i,
                        b = /(?:[ \t]*\r?\n[ \t]*){2,}/,
                        w = /[ \t][ \t]+/g;
                    t = {
                        paragraphs: !0,
                        links: !0,
                        externalLinks: !0,
                        internalLinks: !0,
                        userLinks: !0,
                        deepLinks: !1,
                        whitelist: ["b", "i", "em"],
                        internalLinksBaseUrl: "/",
                        isOpeningNewWindow: !1,
                        maxLength: null,
                        truncateExternalLinks: !0,
                        maxExternalLinksLength: 50,
                        hashtagLinks: !0
                    }, r = null, i = null, s = null, a = null, o = null, u = null, e = null, e.withDefaults = null, typeof n != "undefined" && n.exports ? n.exports = e : (global = null(), global.SC = global.SC || {}, global.SC.usertext = e)
                })()
            }),
            define("views/search/query-suggestion.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
                n.exports = r.stringToStyleElement(r.transform(".querySuggestion{display:block;height:50px}.querySuggestion__result,.querySuggestion__link{height:50px;display:block}.querySuggestion__link{padding:0 16px;color:#333}.querySuggestion__result{line-height:50px;border-bottom:1px solid #d6d6d6;padding:0 0 0 32px;background:url(https://mobi.sndcdn.com/assets/images/ldpi/search/search_input-bd02f9a1.png) 0 14px no-repeat;background-size:18px 18px}.querySuggestion__link:active{background:#f2f2f2}")), data = null
            }),
            define("views/search/query-suggestion.tmpl", ["vendor/handlebars-runtime"], function() {
                return require("vendor/handlebars-runtime").template(null)
            }),
            define("layouts/listen", ["require", "exports", "module", "config", "config/error-messages", "models/exception", "lib/layout", "lib/futures", "lib/lingua", "models/playlist", "models/sound", "lib/url", "lib/layouts/fullheight.tmpl", "layouts/blocked-listen.tmpl", "lib/layouts/fullheight.css", "layouts/blocked-listen.css"], null),
            define("config/error-messages", ["require", "exports", "module", "lib/lingua"], null),
            define("models/exception", ["require", "exports", "module", "underscore", "lib/event-bus", "lib/model"], null),
            define("models/playlist", ["require", "exports", "module", "$", "underscore", "models/audible-interface", "lib/backbone", "lib/event-bus", "lib/model", "models/sound", "lib/errors/unauthorized-viewer", "models/user", "lib/mixins/urn"], null),
            define("layouts/blocked-listen.tmpl", ["vendor/handlebars-runtime"], null),
            define("layouts/blocked-listen.css", ["require", "exports", "module", "css"], null),
            define("views/listen/blocked", ["require", "exports", "module", "lib/view", "views/listen/blocked.css", "views/listen/blocked.tmpl"], null),
            define("views/listen/listen-carousel", ["require", "exports", "module", "underscore", "$", "lib/views/mixins/audible-control", "config", "lib/futures", "lib/views/mixins/has-queue-source", "lib/play-manager", "router", "models/sound", "views/sound/sound", "lib/helpers/style-helper", "lib/view", "lib/window-events", "views/listen/listen-carousel.css", "views/listen/listen-carousel.tmpl"], null),
            define("views/sound/sound-controls", ["require", "exports", "module", "underscore", "lib/event-bus", "lib/views/mixins/fetch-experiments", "lib/native-links", "lib/helpers/open-app-store-helper", "lib/play-manager", "lib/view", "views/sound/sound-controls.css", "views/sound/sound-controls.tmpl"], null),
            define("views/listen/blocked.css", ["require", "exports", "module", "css"], null),
            define("views/listen/blocked.tmpl", ["vendor/handlebars-runtime", "views/sound/sound", "views/listen/blocked-suggestions"], null),
            define("lib/views/mixins/audible-control", ["require", "exports", "module", "underscore", "lib/play-manager", "lib/mixin"], null),
            define("lib/views/mixins/has-queue-source", ["require", "exports", "module", "underscore", "lib/event-bus", "lib/mixin", "lib/play-manager", "lib/url"], null),
            define("views/sound/sound", ["require", "exports", "module", "lib/views/mixins/audible-control", "lib/helpers/count-helper", "lib/helpers/client-environment-helper", "lib/event-bus", "vendor/experiments/experiments", "lib/views/mixins/fetch-experiments", "lib/views/mixins/fullscreen-loader", "lib/views/fullscreen-overlay", "lib/views/mixins/has-queue-source", "lib/helpers/image-helper", "views/interstitials/like-app-upsell-content", "lib/lingua", "lib/native-links", "lib/helpers/open-app-store-helper", "lib/play-manager", "models/sound", "lib/views/mixins/swipeable", "lib/tracking/tracking-core", "lib/view", "views/sound/sound.css", "views/sound/sound.tmpl"], null),
            define("lib/helpers/style-helper", ["require", "exports", "module"], null),
            define("lib/window-events", ["require", "exports", "module", "$", "underscore", "lib/backbone", "lib/support"], null),
            define("views/listen/listen-carousel.css", ["require", "exports", "module", "css"], null),
            define("views/listen/listen-carousel.tmpl", ["vendor/handlebars-runtime"], null),
            define("lib/views/mixins/fetch-experiments", ["require", "exports", "module", "$", "underscore", "vendor/experiments/experiments", "config/experiments", "vendor/event-gateway/event-gateway", "lib/mixin", "lib/tracking/tracking-core", "lib/url"], null),
            define("lib/helpers/open-app-store-helper", ["require", "exports", "module", "underscore", "lib/native-links"], null),
            define("views/sound/sound-controls.css", ["require", "exports", "module", "css"], null),
            define("views/sound/sound-controls.tmpl", ["vendor/handlebars-runtime"], null),
            define("views/listen/blocked-suggestions", ["require", "exports", "module", "lib/helpers/charts-helper", "collections/chart-tracks", "collections/related-sounds", "models/sound", "lib/view", "views/listen/blocked-suggestions.css", "views/listen/blocked-suggestions.tmpl"], null),
            define("lib/views/mixins/fullscreen-loader", ["require", "exports", "module", "lib/views/loading", "lib/mixin"], null),
            define("views/interstitials/like-app-upsell-content", ["require", "exports", "module", "lib/helpers/client-environment-helper", "lib/lingua", "lib/view", "views/interstitials/like-app-upsell-content.tmpl", "views/interstitials/like-app-upsell-content.css"], null),
            define("lib/views/mixins/swipeable", ["require", "exports", "module", "lib/mixin"], null),
            define("views/sound/sound.css", ["require", "exports", "module", "css"], null),
            define("views/sound/sound.tmpl", ["vendor/handlebars-runtime", "views/banner/banner", "views/sound/waveform"], null),
            define("config/experiments", ["require", "exports", "module", "lib/endpoints", "vendor/event-gateway/event-gateway", "lib/support"], null),
            define("lib/helpers/charts-helper", ["require", "exports", "module", "underscore", "lib/lingua", "shared/config/charts"], null),
            define("collections/chart-tracks", ["require", "exports", "module", "underscore", "lib/mixins/audio-source", "lib/helpers/charts-helper", "lib/collection", "models/sound"], null),
            define("views/listen/blocked-suggestions.css", ["require", "exports", "module", "css"], null),
            define("views/listen/blocked-suggestions.tmpl", ["vendor/handlebars-runtime", "lib/views/sounds-list"], null),
            define("views/interstitials/like-app-upsell-content.tmpl", ["vendor/handlebars-runtime", "views/app-buttons/app-buttons"], null),
            define("views/interstitials/like-app-upsell-content.css", ["require", "exports", "module", "css"], null),
            define("views/banner/banner", ["require", "exports", "module", "underscore", "lib/view", "views/banner/banner.css"], null),
            define("views/sound/waveform", ["require", "exports", "module", "views/sound/waveform-canvas", "lib/math", "models/sound", "lib/helpers/style-helper", "lib/view", "views/sound/waveform.tmpl", "views/sound/waveform.css"], null),
            define("shared/config/charts", ["require", "exports", "module"], null),
            define("lib/views/sounds-list", ["require", "exports", "module", "lib/views/list", "views/sound/sound-badge"], null),
            define("views/banner/banner.css", ["require", "exports", "module", "css"], null),
            define("views/sound/waveform-canvas", ["require", "exports", "module", "underscore", "lib/views/canvas-view", "vendor/color/color", "config", "models/sound", "lib/store", "lib/support"], null),
            define("views/sound/waveform.tmpl", ["vendor/handlebars-runtime", "views/sound/waveform-canvas", "views/listen/time-indicator", "views/listen/scrubber"], null),
            define("views/sound/waveform.css", ["require", "exports", "module", "css"], null),
            define("views/sound/sound-badge", ["require", "exports", "module", "lib/views/mixins/audible-control", "config", "lib/helpers/datetime-helper", "lib/views/mixins/deferred-images", "models/sound", "lib/view", "views/sound/sound-badge.css", "views/sound/sound-badge.tmpl"], null),
            define("lib/views/canvas-view", ["require", "exports", "module", "lib/helpers/client-environment-helper", "lib/view", "lib/window-events"], null),
            define("vendor/color/color", ["require", "exports", "module"], null),
            define("views/listen/time-indicator", ["require", "exports", "module", "underscore", "lib/helpers/datetime-helper", "lib/views/progress-bar", "views/listen/time-indicator.tmpl", "views/listen/time-indicator.css"], null),
            define("views/listen/scrubber", ["require", "exports", "module", "lib/views/mixins/draggable", "lib/event-bus", "models/sound", "lib/view"], null),
            define("lib/helpers/datetime-helper", ["require", "exports", "module", "underscore", "lib/lingua"], null),
            define("lib/views/mixins/deferred-images", ["require", "exports", "module", "$", "underscore", "config", "lib/css-transitions", "lib/helpers/image-helper", "lib/mixin"], null),
            define("views/sound/sound-badge.css", ["require", "exports", "module", "css"], null),
            define("views/sound/sound-badge.tmpl", ["vendor/handlebars-runtime", "views/stats/sound-stats", "lib/views/promoted"], null),
            define("lib/views/progress-bar", ["require", "exports", "module", "underscore", "$", "models/sound", "lib/view", "lib/window-events"], null),
            define("views/listen/time-indicator.tmpl", ["vendor/handlebars-runtime"], null),
            define("views/listen/time-indicator.css", ["require", "exports", "module", "css"], null),
            define("lib/views/mixins/draggable", ["require", "exports", "module", "$", "lib/animation", "lib/mixin", "lib/window-events"], null),
            define("views/stats/sound-stats", ["require", "exports", "module", "models/sound", "lib/views/mixins/stats", "lib/view"], null),
            define("lib/views/promoted", ["require", "exports", "module", "lib/view", "lib/views/promoted.css"], null),
            define("lib/animation", ["require", "exports", "module", "$"], null),
            define("lib/views/mixins/stats", ["require", "exports", "module", "underscore", "lib/helpers/count-helper", "lib/lingua", "lib/mixin", "lib/views/mixins/stats.tmpl", "lib/views/mixins/stats.css"], null),
            define("lib/views/promoted.css", ["require", "exports", "module", "css"], null),
            define("lib/views/mixins/stats.tmpl", ["vendor/handlebars-runtime"], null),
            define("lib/views/mixins/stats.css", ["require", "exports", "module", "css"], null)
    