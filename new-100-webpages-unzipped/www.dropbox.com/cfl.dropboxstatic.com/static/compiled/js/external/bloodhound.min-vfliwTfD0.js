(function(t, e) {
    "function" == typeof define && define.amd ? define("bloodhound", ["jquery"], function(r) {
        return t.Bloodhound = e(r)
    }) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.Bloodhound = e(jQuery)
})(this, function(t) {
    var e = (function() {
            "use strict";
            return {
                isMsie: function() {
                    return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                },
                isBlankString: function(t) {
                    return !t || /^\s*$/.test(t)
                },
                escapeRegExChars: function(t) {
                    return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isNumber: function(t) {
                    return "number" == typeof t
                },
                isArray: t.isArray,
                isFunction: t.isFunction,
                isObject: t.isPlainObject,
                isUndefined: function(t) {
                    return void 0 === t
                },
                isElement: function(t) {
                    return !(!t || 1 !== t.nodeType)
                },
                isJQuery: function(e) {
                    return e instanceof t
                },
                toStr: function(t) {
                    return e.isUndefined(t) || null === t ? "" : t + ""
                },
                bind: t.proxy,
                each: function(e, r) {
                    function i(t, e) {
                        return r(e, t)
                    }
                    t.each(e, i)
                },
                map: t.map,
                filter: t.grep,
                every: function(e, r) {
                    var i = !0;
                    return e ? (t.each(e, function(t, n) {
                        if (!(i = r.call(null, n, t, e))) return !1
                    }), !!i) : i
                },
                some: function(e, r) {
                    var i = !1;
                    return e ? (t.each(e, function(t, n) {
                        if (i = r.call(null, n, t, e)) return !1
                    }), !!i) : i
                },
                mixin: t.extend,
                identity: function(t) {
                    return t
                },
                clone: function(e) {
                    return t.extend(!0, {}, e)
                },
                getIdGenerator: function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                },
                templatify: function(e) {
                    function r() {
                        return String(e)
                    }
                    return t.isFunction(e) ? e : r
                },
                defer: function(t) {
                    setTimeout(t, 0)
                },
                debounce: function(t, e, r) {
                    var i, n;
                    return function() {
                        var s, o, u = this,
                            c = arguments;
                        return s = function() {
                            i = null, r || (n = t.apply(u, c))
                        }, o = r && !i, clearTimeout(i), i = setTimeout(s, e), o && (n = t.apply(u, c)), n
                    }
                },
                throttle: function(t, e) {
                    var r, i, n, s, o, u;
                    return o = 0, u = function() {
                            o = new Date, n = null, s = t.apply(r, i)
                        },
                        function() {
                            var c = new Date,
                                a = e - (c - o);
                            return r = this, i = arguments, a <= 0 ? (clearTimeout(n), n = null, o = c, s = t.apply(r, i)) : n || (n = setTimeout(u, a)), s
                        }
                },
                stringify: function(t) {
                    return e.isString(t) ? t : JSON.stringify(t)
                },
                noop: function() {}
            }
        })(),
        r = (function() {
            "use strict";

            function t(t) {
                return t = e.toStr(t), t ? t.split(/\s+/) : []
            }

            function r(t) {
                return t = e.toStr(t), t ? t.split(/\W+/) : []
            }

            function i(t) {
                return function(r) {
                    return r = e.isArray(r) ? r : [].slice.call(arguments, 0),
                        function(i) {
                            var n = [];
                            return e.each(r, function(r) {
                                n = n.concat(t(e.toStr(i[r])))
                            }), n
                        }
                }
            }
            return {
                nonword: r,
                whitespace: t,
                obj: {
                    nonword: i(r),
                    whitespace: i(t)
                }
            }
        })(),
        i = (function() {
            "use strict";

            function r(r) {
                this.maxSize = e.isNumber(r) ? r : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
            }

            function i() {
                this.head = this.tail = null
            }

            function n(t, e) {
                this.key = t, this.val = e, this.prev = this.next = null
            }
            return e.mixin(r.prototype, {
                set: function(t, e) {
                    var r, i = this.list.tail;
                    this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key], this.size--), (r = this.hash[t]) ? (r.val = e, this.list.moveToFront(r)) : (r = new n(t, e), this.list.add(r), this.hash[t] = r, this.size++)
                },
                get: function(t) {
                    var e = this.hash[t];
                    if (e) return this.list.moveToFront(e), e.val
                },
                reset: function() {
                    this.size = 0, this.hash = {}, this.list = new i
                }
            }), e.mixin(i.prototype, {
                add: function(t) {
                    this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                },
                remove: function(t) {
                    t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                },
                moveToFront: function(t) {
                    this.remove(t), this.add(t)
                }
            }), r
        })(),
        n = (function() {
            "use strict";

            function r(t, r) {
                this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + e.escapeRegExChars(this.prefix)), this.ls = r || u, !this.ls && this._noop()
            }

            function i() {
                return (new Date).getTime()
            }

            function n(t) {
                return JSON.stringify(e.isUndefined(t) ? null : t)
            }

            function s(e) {
                return t.parseJSON(e)
            }

            function o(t) {
                var e, r, i = [],
                    n = u.length;
                for (e = 0; e < n; e++)(r = u.key(e)).match(t) && i.push(r.replace(t, ""));
                return i
            }
            var u;
            try {
                u = window.localStorage, u.setItem("~~~", "!"), u.removeItem("~~~")
            } catch (t) {
                u = null
            }
            return e.mixin(r.prototype, {
                _prefix: function(t) {
                    return this.prefix + t
                },
                _ttlKey: function(t) {
                    return this._prefix(t) + this.ttlKey
                },
                _noop: function() {
                    this.get = this.set = this.remove = this.clear = this.isExpired = e.noop
                },
                _safeSet: function(t, e) {
                    try {
                        this.ls.setItem(t, e)
                    } catch (t) {
                        "QuotaExceededError" === t.name && (this.clear(), this._noop())
                    }
                },
                get: function(t) {
                    return this.isExpired(t) && this.remove(t), s(this.ls.getItem(this._prefix(t)))
                },
                set: function(t, r, s) {
                    return e.isNumber(s) ? this._safeSet(this._ttlKey(t), n(i() + s)) : this.ls.removeItem(this._ttlKey(t)), this._safeSet(this._prefix(t), n(r))
                },
                remove: function(t) {
                    return this.ls.removeItem(this._ttlKey(t)), this.ls.removeItem(this._prefix(t)), this
                },
                clear: function() {
                    var t, e = o(this.keyMatcher);
                    for (t = e.length; t--;) this.remove(e[t]);
                    return this
                },
                isExpired: function(t) {
                    var r = s(this.ls.getItem(this._ttlKey(t)));
                    return !!(e.isNumber(r) && i() > r)
                }
            }), r
        })(),
        s = (function() {
            "use strict";

            function r(t) {
                t = t || {}, this.cancelled = !1, this.lastReq = null, this._send = t.transport, this._get = t.limiter ? t.limiter(this._get) : this._get, this._cache = t.cache === !1 ? new i(0) : u
            }
            var n = 0,
                s = {},
                o = 6,
                u = new i(10);
            return r.setMaxPendingRequests = function(t) {
                o = t
            }, r.resetCache = function() {
                u.reset()
            }, e.mixin(r.prototype, {
                _fingerprint: function(e) {
                    return e = e || {}, e.url + e.type + t.param(e.data || {})
                },
                _get: function(t, e) {
                    function r(t) {
                        e(null, t), h._cache.set(c, t)
                    }

                    function i() {
                        e(!0)
                    }

                    function u() {
                        n--, delete s[c], h.onDeckRequestArgs && (h._get.apply(h, h.onDeckRequestArgs), h.onDeckRequestArgs = null)
                    }
                    var c, a, h = this;
                    c = this._fingerprint(t), this.cancelled || c !== this.lastReq || ((a = s[c]) ? a.done(r).fail(i) : n < o ? (n++, s[c] = this._send(t).done(r).fail(i).always(u)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                },
                get: function(r, i) {
                    var n, s;
                    i = i || t.noop, r = e.isString(r) ? {
                        url: r
                    } : r || {}, s = this._fingerprint(r), this.cancelled = !1, this.lastReq = s, (n = this._cache.get(s)) ? i(null, n) : this._get(r, i)
                },
                cancel: function() {
                    this.cancelled = !0
                }
            }), r
        })(),
        o = window.SearchIndex = (function() {
            "use strict";

            function r(r) {
                r = r || {}, r.datumTokenizer && r.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.identify = r.identify || e.stringify, this.datumTokenizer = r.datumTokenizer, this.queryTokenizer = r.queryTokenizer, this.reset()
            }

            function i(t) {
                return t = e.filter(t, function(t) {
                    return !!t
                }), t = e.map(t, function(t) {
                    return t.toLowerCase()
                })
            }

            function n() {
                var t = {};
                return t.i = [], t.c = {}, t
            }

            function s(t) {
                for (var e = {}, r = [], i = 0, n = t.length; i < n; i++) e[t[i]] || (e[t[i]] = !0, r.push(t[i]));
                return r
            }

            function o(t, e) {
                var r = 0,
                    i = 0,
                    n = [];
                t = t.sort(), e = e.sort();
                for (var s = t.length, o = e.length; r < s && i < o;) t[r] < e[i] ? r++ : t[r] > e[i] ? i++ : (n.push(t[r]), r++, i++);
                return n
            }
            return e.mixin(r.prototype, {
                bootstrap: function(t) {
                    this.datums = t.datums, this.trie = t.trie
                },
                add: function(t) {
                    var r = this;
                    t = e.isArray(t) ? t : [t], e.each(t, function(t) {
                        var s, o;
                        r.datums[s = r.identify(t)] = t, o = i(r.datumTokenizer(t)), e.each(o, function(t) {
                            var e, i, o;
                            for (e = r.trie, i = t.split(""); o = i.shift();) e = e.c[o] || (e.c[o] = n()), e.i.push(s)
                        })
                    })
                },
                get: function(t) {
                    var r = this;
                    return e.map(t, function(t) {
                        return r.datums[t]
                    })
                },
                search: function(t) {
                    var r, n, u = this;
                    return r = i(this.queryTokenizer(t)), e.each(r, function(t) {
                        var e, r, i, s;
                        if (n && 0 === n.length) return !1;
                        for (e = u.trie, r = t.split(""); e && (i = r.shift());) e = e.c[i];
                        if (!e || 0 !== r.length) return n = [], !1;
                        s = e.i.slice(0), n = n ? o(n, s) : s
                    }), n ? e.map(s(n), function(t) {
                        return u.datums[t]
                    }) : []
                },
                all: function() {
                    var t = [];
                    for (var e in this.datums) t.push(this.datums[e]);
                    return t
                },
                reset: function() {
                    this.datums = {}, this.trie = n()
                },
                serialize: function() {
                    return {
                        datums: this.datums,
                        trie: this.trie
                    }
                }
            }), r
        })(),
        u = (function() {
            "use strict";

            function t(t) {
                this.url = t.url, this.ttl = t.ttl, this.cache = t.cache, this.prepare = t.prepare, this.transform = t.transform, this.transport = t.transport, this.thumbprint = t.thumbprint, this.storage = new n(t.cacheKey)
            }
            var r;
            return r = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            }, e.mixin(t.prototype, {
                _settings: function() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                store: function(t) {
                    this.cache && (this.storage.set(r.data, t, this.ttl), this.storage.set(r.protocol, location.protocol, this.ttl), this.storage.set(r.thumbprint, this.thumbprint, this.ttl))
                },
                fromCache: function() {
                    var t, e = {};
                    return this.cache ? (e.data = this.storage.get(r.data), e.protocol = this.storage.get(r.protocol), e.thumbprint = this.storage.get(r.thumbprint), t = e.thumbprint !== this.thumbprint || e.protocol !== location.protocol, e.data && !t ? e.data : null) : null
                },
                fromNetwork: function(t) {
                    function e() {
                        t(!0)
                    }

                    function r(e) {
                        t(null, n.transform(e))
                    }
                    var i, n = this;
                    t && (i = this.prepare(this._settings()), this.transport(i).fail(e).done(r))
                },
                clear: function() {
                    return this.storage.clear(), this
                }
            }), t
        })(),
        c = (function() {
            "use strict";

            function t(t) {
                this.url = t.url, this.prepare = t.prepare, this.transform = t.transform, this.transport = new s({
                    cache: t.cache,
                    limiter: t.limiter,
                    transport: t.transport
                })
            }
            return e.mixin(t.prototype, {
                _settings: function() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                get: function(t, e) {
                    function r(t, r) {
                        e(t ? [] : n.transform(r))
                    }
                    var i, n = this;
                    if (e) return t = t || "", i = this.prepare(t, this._settings()), this.transport.get(i, r)
                },
                cancelLastRequest: function() {
                    this.transport.cancel()
                }
            }), t
        })(),
        a = (function() {
            "use strict";

            function r(r) {
                var i;
                return r ? (i = {
                    url: null,
                    ttl: 864e5,
                    cache: !0,
                    cacheKey: null,
                    thumbprint: "",
                    prepare: e.identity,
                    transform: e.identity,
                    transport: null
                }, r = e.isString(r) ? {
                    url: r
                } : r, r = e.mixin(i, r), !r.url && t.error("prefetch requires url to be set"), r.transform = r.filter || r.transform, r.cacheKey = r.cacheKey || r.url, r.thumbprint = "0.11.1" + r.thumbprint, r.transport = r.transport ? o(r.transport) : t.ajax, r) : null
            }

            function i(r) {
                var i;
                if (r) return i = {
                    url: null,
                    cache: !0,
                    prepare: null,
                    replace: null,
                    wildcard: null,
                    limiter: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    transform: e.identity,
                    transport: null
                }, r = e.isString(r) ? {
                    url: r
                } : r, r = e.mixin(i, r), !r.url && t.error("remote requires url to be set"), r.transform = r.filter || r.transform, r.prepare = n(r), r.limiter = s(r), r.transport = r.transport ? o(r.transport) : t.ajax, delete r.replace, delete r.wildcard, delete r.rateLimitBy, delete r.rateLimitWait, r
            }

            function n(t) {
                function e(t, e) {
                    return e.url = s(e.url, t), e
                }

                function r(t, e) {
                    return e.url = e.url.replace(o, encodeURIComponent(t)), e
                }

                function i(t, e) {
                    return e
                }
                var n, s, o;
                return n = t.prepare, s = t.replace, o = t.wildcard, n ? n : n = s ? e : t.wildcard ? r : i
            }

            function s(t) {
                function r(t) {
                    return function(r) {
                        return e.debounce(r, t)
                    }
                }

                function i(t) {
                    return function(r) {
                        return e.throttle(r, t)
                    }
                }
                var n, s, o;
                return n = t.limiter, s = t.rateLimitBy, o = t.rateLimitWait, n || (n = /^throttle$/i.test(s) ? i(o) : r(o)), n
            }

            function o(r) {
                return function(i) {
                    function n(t) {
                        e.defer(function() {
                            o.resolve(t)
                        })
                    }

                    function s(t) {
                        e.defer(function() {
                            o.reject(t)
                        })
                    }
                    var o = t.Deferred();
                    return r(i, n, s), o
                }
            }
            return function(n) {
                var s, o;
                return s = {
                    initialize: !0,
                    identify: e.stringify,
                    datumTokenizer: null,
                    queryTokenizer: null,
                    sufficient: 5,
                    sorter: null,
                    local: [],
                    prefetch: null,
                    remote: null
                }, n = e.mixin(s, n || {}), !n.datumTokenizer && t.error("datumTokenizer is required"), !n.queryTokenizer && t.error("queryTokenizer is required"), o = n.sorter, n.sorter = o ? function(t) {
                    return t.sort(o)
                } : e.identity, n.local = e.isFunction(n.local) ? n.local() : n.local, n.prefetch = r(n.prefetch), n.remote = i(n.remote), n
            }
        })();
    return (function() {
        "use strict";

        function i(t) {
            t = a(t), this.sorter = t.sorter, this.identify = t.identify, this.sufficient = t.sufficient, this.local = t.local, this.remote = t.remote ? new c(t.remote) : null, this.prefetch = t.prefetch ? new u(t.prefetch) : null, this.index = new o({
                identify: this.identify,
                datumTokenizer: t.datumTokenizer,
                queryTokenizer: t.queryTokenizer
            }), t.initialize !== !1 && this.initialize()
        }
        var n;
        return n = window && window.Bloodhound, i.noConflict = function() {
            return window && (window.Bloodhound = n), i
        }, i.tokenizers = r, e.mixin(i.prototype, {
            __ttAdapter: function() {
                function t(t, e, i) {
                    return r.search(t, e, i)
                }

                function e(t, e) {
                    return r.search(t, e)
                }
                var r = this;
                return this.remote ? t : e
            },
            _loadPrefetch: function() {
                function e(t, e) {
                    if (t) return r.reject();
                    n.add(e), n.prefetch.store(n.index.serialize()), r.resolve()
                }
                var r, i, n = this;
                return r = t.Deferred(), this.prefetch ? (i = this.prefetch.fromCache()) ? (this.index.bootstrap(i), r.resolve()) : this.prefetch.fromNetwork(e) : r.resolve(), r.promise()
            },
            _initialize: function() {
                function t() {
                    e.add(e.local)
                }
                var e = this;
                return this.clear(), (this.initPromise = this._loadPrefetch()).done(t), this.initPromise
            },
            initialize: function(t) {
                return !this.initPromise || t ? this._initialize() : this.initPromise
            },
            add: function(t) {
                return this.index.add(t), this
            },
            get: function(t) {
                return t = e.isArray(t) ? t : [].slice.call(arguments), this.index.get(t)
            },
            search: function(t, r, i) {
                function n(t) {
                    var r = [];
                    e.each(t, function(t) {
                        !e.some(s, function(e) {
                            return o.identify(t) === o.identify(e)
                        }) && r.push(t)
                    }), i && i(r)
                }
                var s, o = this;
                return s = this.sorter(this.index.search(t)), r(this.remote ? s.slice() : s), this.remote && s.length < this.sufficient ? this.remote.get(t, n) : this.remote && this.remote.cancelLastRequest(), this
            },
            all: function() {
                return this.index.all()
            },
            clear: function() {
                return this.index.reset(), this
            },
            clearPrefetchCache: function() {
                return this.prefetch && this.prefetch.clear(), this
            },
            clearRemoteCache: function() {
                return s.resetCache(), this
            },
            ttAdapter: function() {
                return this.__ttAdapter()
            }
        }), i
    })()
});
//# sourceMappingURL=bloodhound.min.js-vflEfftEl.map