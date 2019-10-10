(function(e) {
    function t(t) {
        var n = t[0];
        var a = t[1];
        var s = t[2];
        var l, u, f = 0,
            d = [];
        for (; f < n.length; f++) {
            u = n[f];
            if (Object.prototype.hasOwnProperty.call(i, u) && i[u]) {
                d.push(i[u][0])
            }
            i[u] = 0
        }
        for (l in a) {
            if (Object.prototype.hasOwnProperty.call(a, l)) {
                e[l] = a[l]
            }
        }
        if (c) c(t);
        while (d.length) {
            d.shift()()
        }
        o.push.apply(o, s || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < o.length; t++) {
            var r = o[t];
            var n = true;
            for (var s = 1; s < r.length; s++) {
                var l = r[s];
                if (i[l] !== 0) n = false
            }
            if (n) {
                o.splice(t--, 1);
                e = a(a.s = r[0])
            }
        }
        return e
    }
    var n = {};
    var i = {
        5: 0
    };
    var o = [];

    function a(t) {
        if (n[t]) {
            return n[t].exports
        }
        var r = n[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(r.exports, r, r.exports, a);
        r.l = true;
        return r.exports
    }
    a.m = e;
    a.c = n;
    a.d = function(e, t, r) {
        if (!a.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    a.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    a.t = function(e, t) {
        if (t & 1) e = a(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        a.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var n in e) a.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    };
    a.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function n() {
            return e
        };
        a.d(t, "a", t);
        return t
    };
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    a.p = "//i.alicdn.com/ae-msite-ui/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var l = s.push.bind(s);
    s.push = t;
    s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var c = l;
    o.push(["XUJo", 0]);
    return r()
})({
    Fr7k: function(e, t, r) {
        (function(t, r) {
            (function(t, r) {
                true ? e.exports = r() : undefined
            })(this, function() {
                "use strict";

                function e(e) {
                    var t = typeof e;
                    return e !== null && (t === "object" || t === "function")
                }

                function n(e) {
                    return typeof e === "function"
                }
                var i = void 0;
                if (Array.isArray) {
                    i = Array.isArray
                } else {
                    i = function(e) {
                        return Object.prototype.toString.call(e) === "[object Array]"
                    }
                }
                var o = i;
                var a = 0;
                var s = void 0;
                var l = void 0;
                var u = function oe(e, t) {
                    k[a] = e;
                    k[a + 1] = t;
                    a += 2;
                    if (a === 2) {
                        if (l) {
                            l(O)
                        } else {
                            A()
                        }
                    }
                };

                function c(e) {
                    l = e
                }

                function f(e) {
                    u = e
                }
                var d = typeof window !== "undefined" ? window : undefined;
                var h = d || {};
                var v = h.MutationObserver || h.WebKitMutationObserver;
                var p = typeof self === "undefined" && typeof t !== "undefined" && {}.toString.call(t) === "[object process]";
                var m = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";

                function _() {
                    return function() {
                        return t.nextTick(O)
                    }
                }

                function w() {
                    if (typeof s !== "undefined") {
                        return function() {
                            s(O)
                        }
                    }
                    return g()
                }

                function y() {
                    var e = 0;
                    var t = new v(O);
                    var r = document.createTextNode("");
                    t.observe(r, {
                        characterData: true
                    });
                    return function() {
                        r.data = e = ++e % 2
                    }
                }

                function b() {
                    var e = new MessageChannel;
                    e.port1.onmessage = O;
                    return function() {
                        return e.port2.postMessage(0)
                    }
                }

                function g() {
                    var e = setTimeout;
                    return function() {
                        return e(O, 1)
                    }
                }
                var k = new Array(1e3);

                function O() {
                    for (var e = 0; e < a; e += 2) {
                        var t = k[e];
                        var r = k[e + 1];
                        t(r);
                        k[e] = undefined;
                        k[e + 1] = undefined
                    }
                    a = 0
                }

                function j() {
                    try {
                        var e = Function("return this")().require("vertx");
                        s = e.runOnLoop || e.runOnContext;
                        return w()
                    } catch (t) {
                        return g()
                    }
                }
                var A = void 0;
                if (p) {
                    A = _()
                } else if (v) {
                    A = y()
                } else if (m) {
                    A = b()
                } else if (d === undefined && "function" === "function") {
                    A = j()
                } else {
                    A = g()
                }

                function S(e, t) {
                    var r = this;
                    var n = new this.constructor(T);
                    if (n[C] === undefined) {
                        W(n)
                    }
                    var i = r._state;
                    if (i) {
                        var o = arguments[i - 1];
                        u(function() {
                            return K(i, n, o, r._result)
                        })
                    } else {
                        X(r, n, e, t)
                    }
                    return n
                }

                function x(e) {
                    var t = this;
                    if (e && typeof e === "object" && e.constructor === t) {
                        return e
                    }
                    var r = new t(T);
                    N(r, e);
                    return r
                }
                var C = Math.random().toString(36).substring(2);

                function T() {}
                var U = void 0;
                var B = 1;
                var E = 2;

                function P() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function I() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function M(e, t, r, n) {
                    try {
                        e.call(t, r, n)
                    } catch (i) {
                        return i
                    }
                }

                function D(e, t, r) {
                    u(function(e) {
                        var n = false;
                        var i = M(r, t, function(r) {
                            if (n) {
                                return
                            }
                            n = true;
                            if (t !== r) {
                                N(e, r)
                            } else {
                                H(e, r)
                            }
                        }, function(t) {
                            if (n) {
                                return
                            }
                            n = true;
                            J(e, t)
                        }, "Settle: " + (e._label || " unknown promise"));
                        if (!n && i) {
                            n = true;
                            J(e, i)
                        }
                    }, e)
                }

                function R(e, t) {
                    if (t._state === B) {
                        H(e, t._result)
                    } else if (t._state === E) {
                        J(e, t._result)
                    } else {
                        X(t, undefined, function(t) {
                            return N(e, t)
                        }, function(t) {
                            return J(e, t)
                        })
                    }
                }

                function L(e, t, r) {
                    if (t.constructor === e.constructor && r === S && t.constructor.resolve === x) {
                        R(e, t)
                    } else {
                        if (r === undefined) {
                            H(e, t)
                        } else if (n(r)) {
                            D(e, t, r)
                        } else {
                            H(e, t)
                        }
                    }
                }

                function N(t, r) {
                    if (t === r) {
                        J(t, P())
                    } else if (e(r)) {
                        var n = void 0;
                        try {
                            n = r.then
                        } catch (i) {
                            J(t, i);
                            return
                        }
                        L(t, r, n)
                    } else {
                        H(t, r)
                    }
                }

                function F(e) {
                    if (e._onerror) {
                        e._onerror(e._result)
                    }
                    q(e)
                }

                function H(e, t) {
                    if (e._state !== U) {
                        return
                    }
                    e._result = t;
                    e._state = B;
                    if (e._subscribers.length !== 0) {
                        u(q, e)
                    }
                }

                function J(e, t) {
                    if (e._state !== U) {
                        return
                    }
                    e._state = E;
                    e._result = t;
                    u(F, e)
                }

                function X(e, t, r, n) {
                    var i = e._subscribers;
                    var o = i.length;
                    e._onerror = null;
                    i[o] = t;
                    i[o + B] = r;
                    i[o + E] = n;
                    if (o === 0 && e._state) {
                        u(q, e)
                    }
                }

                function q(e) {
                    var t = e._subscribers;
                    var r = e._state;
                    if (t.length === 0) {
                        return
                    }
                    var n = void 0,
                        i = void 0,
                        o = e._result;
                    for (var a = 0; a < t.length; a += 3) {
                        n = t[a];
                        i = t[a + r];
                        if (n) {
                            K(r, n, i, o)
                        } else {
                            i(o)
                        }
                    }
                    e._subscribers.length = 0
                }

                function K(e, t, r, i) {
                    var o = n(r),
                        a = void 0,
                        s = void 0,
                        l = true;
                    if (o) {
                        try {
                            a = r(i)
                        } catch (u) {
                            l = false;
                            s = u
                        }
                        if (t === a) {
                            J(t, I());
                            return
                        }
                    } else {
                        a = i
                    }
                    if (t._state !== U) {} else if (o && l) {
                        N(t, a)
                    } else if (l === false) {
                        J(t, s)
                    } else if (e === B) {
                        H(t, a)
                    } else if (e === E) {
                        J(t, a)
                    }
                }

                function Y(e, t) {
                    try {
                        t(function n(t) {
                            N(e, t)
                        }, function i(t) {
                            J(e, t)
                        })
                    } catch (r) {
                        J(e, r)
                    }
                }
                var z = 0;

                function Q() {
                    return z++
                }

                function W(e) {
                    e[C] = z++;
                    e._state = undefined;
                    e._result = undefined;
                    e._subscribers = []
                }

                function Z() {
                    return new Error("Array Methods must be provided an Array")
                }
                var G = function() {
                    function e(e, t) {
                        this._instanceConstructor = e;
                        this.promise = new e(T);
                        if (!this.promise[C]) {
                            W(this.promise)
                        }
                        if (o(t)) {
                            this.length = t.length;
                            this._remaining = t.length;
                            this._result = new Array(this.length);
                            if (this.length === 0) {
                                H(this.promise, this._result)
                            } else {
                                this.length = this.length || 0;
                                this._enumerate(t);
                                if (this._remaining === 0) {
                                    H(this.promise, this._result)
                                }
                            }
                        } else {
                            J(this.promise, Z())
                        }
                    }
                    e.prototype._enumerate = function t(e) {
                        for (var t = 0; this._state === U && t < e.length; t++) {
                            this._eachEntry(e[t], t)
                        }
                    };
                    e.prototype._eachEntry = function r(e, t) {
                        var r = this._instanceConstructor;
                        var n = r.resolve;
                        if (n === x) {
                            var i = void 0;
                            var o = void 0;
                            var a = false;
                            try {
                                i = e.then
                            } catch (s) {
                                a = true;
                                o = s
                            }
                            if (i === S && e._state !== U) {
                                this._settledAt(e._state, t, e._result)
                            } else if (typeof i !== "function") {
                                this._remaining--;
                                this._result[t] = e
                            } else if (r === ne) {
                                var l = new r(T);
                                if (a) {
                                    J(l, o)
                                } else {
                                    L(l, e, i)
                                }
                                this._willSettleAt(l, t)
                            } else {
                                this._willSettleAt(new r(function(t) {
                                    return t(e)
                                }), t)
                            }
                        } else {
                            this._willSettleAt(n(e), t)
                        }
                    };
                    e.prototype._settledAt = function n(e, t, r) {
                        var n = this.promise;
                        if (n._state === U) {
                            this._remaining--;
                            if (e === E) {
                                J(n, r)
                            } else {
                                this._result[t] = r
                            }
                        }
                        if (this._remaining === 0) {
                            H(n, this._result)
                        }
                    };
                    e.prototype._willSettleAt = function i(e, t) {
                        var r = this;
                        X(e, undefined, function(e) {
                            return r._settledAt(B, t, e)
                        }, function(e) {
                            return r._settledAt(E, t, e)
                        })
                    };
                    return e
                }();

                function $(e) {
                    return new G(this, e).promise
                }

                function V(e) {
                    var t = this;
                    if (!o(e)) {
                        return new t(function(e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        })
                    } else {
                        return new t(function(r, n) {
                            var i = e.length;
                            for (var o = 0; o < i; o++) {
                                t.resolve(e[o]).then(r, n)
                            }
                        })
                    }
                }

                function ee(e) {
                    var t = this;
                    var r = new t(T);
                    J(r, e);
                    return r
                }

                function te() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function re() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }
                var ne = function() {
                    function e(t) {
                        this[C] = Q();
                        this._result = this._state = undefined;
                        this._subscribers = [];
                        if (T !== t) {
                            typeof t !== "function" && te();
                            this instanceof e ? Y(this, t) : re()
                        }
                    }
                    e.prototype.catch = function t(e) {
                        return this.then(null, e)
                    };
                    e.prototype.finally = function r(e) {
                        var t = this;
                        var r = t.constructor;
                        if (n(e)) {
                            return t.then(function(t) {
                                return r.resolve(e()).then(function() {
                                    return t
                                })
                            }, function(t) {
                                return r.resolve(e()).then(function() {
                                    throw t
                                })
                            })
                        }
                        return t.then(e, e)
                    };
                    return e
                }();
                ne.prototype.then = S;
                ne.all = $;
                ne.race = V;
                ne.resolve = x;
                ne.reject = ee;
                ne._setScheduler = c;
                ne._setAsap = f;
                ne._asap = u;

                function ie() {
                    var e = void 0;
                    if (typeof r !== "undefined") {
                        e = r
                    } else if (typeof self !== "undefined") {
                        e = self
                    } else {
                        try {
                            e = Function("return this")()
                        } catch (t) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    }
                    var n = e.Promise;
                    if (n) {
                        var i = null;
                        try {
                            i = Object.prototype.toString.call(n.resolve())
                        } catch (t) {}
                        if (i === "[object Promise]" && !n.cast) {
                            return
                        }
                    }
                    e.Promise = ne
                }
                ne.polyfill = ie;
                ne.Promise = ne;
                return ne
            })
        }).call(this, r("TDnd"), r("Xd7j"))
    },
    H52b: function(e, t, r) {
        e.exports = {
            "download-bar": "_2JK7Z",
            "show-fixed-download-bar": "_3N8Oe",
            "hide-fixed-download-bar": "O9pol",
            "close-btn": "_2whHn"
        }
    },
    XUJo: function(e, t, r) {
        "use strict";
        var n = r("cDcd");
        var i = u(n);
        var o = r("31al");
        var a = u(o);
        var s = r("xfjm");
        var l = u(s);

        function u(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        window["gop"]["download-bar"] = function(e, t, r) {
            (0, a.default)(i.default.createElement(l.default, {
                cdpJson: e
            }), t, r)
        }
    },
    cDcd: function(e, t) {
        e.exports = window.React
    },
    faye: function(e, t) {
        e.exports = window.ReactDOM
    },
    vqO6: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.click = i;
        t.exposure = o;

        function n(e) {
            try {
                var t = Object.keys(e.params).map(function(t) {
                    return t + "=" + e.params[t]
                }).join("&");
                window.goldlog.record(e.path, e.event, "st_page_id=" + window.dmtrack_pageid + "&" + t, "GET")
            } catch (r) {
                console.log("Data track (" + e.event + ") error:", r)
            }
        }

        function i(e) {
            n({
                path: "/ae.pc_click.statweb_ae_click",
                event: "CLK",
                params: e
            })
        }

        function o(e) {
            n({
                path: "/ae.pc_ctr.statweb_ae_ctr",
                event: "EXP",
                params: e
            })
        }
    },
    xfjm: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r("6ato");
        var i = b(n);
        var o = r("2dj7");
        var a = b(o);
        var s = r("Xtzg");
        var l = b(s);
        var u = r("0dFU");
        var c = b(u);
        var f = r("Ck+K");
        var d = b(f);
        var h = r("cDcd");
        var v = b(h);
        var p = r("F8dh");
        var m = r("zo0Q");
        var _ = b(m);
        var w = r("q3Yw");
        var y = b(w);
        r("H52b");

        function b(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var g = {
            "./index.module.scss": {
                "download-bar": "_2JK7Z",
                "close-btn": "_2whHn",
                "show-fixed-download-bar": "_3N8Oe",
                "hide-fixed-download-bar": "O9pol"
            }
        };
        var k = "download-bar";
        var O = "show-fixed-download-bar";
        var j = "hide-fixed-download-bar";
        var A = function(e) {
            (0, c.default)(t, e);

            function t(e) {
                (0, i.default)(this, t);
                var r = (0, l.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.downloadBarRef = v.default.createRef();
                r.spmC = "download-bar";
                r.lastTop = 0;
                r.state = {
                    downloadBarClass: k
                };
                r.onScroll = (0, y.default)(r._onScroll.bind(r), p.THROTTLE_SCROLL);
                return r
            }(0, a.default)(t, [{
                key: "componentDidMount",
                value: function r() {
                    var e = new _.default({
                        element: this.downloadBarRef.current,
                        pageId: window.dmtrack_pageid,
                        hasClose: true,
                        channel: "msite",
                        clickParams: {
                            ae_page_type: "msite_home",
                            ae_button_type: "download"
                        },
                        closeCallback: function t() {
                            var e = document.createEvent("Event");
                            e.initEvent("closedDownloadBar", true, true);
                            document.dispatchEvent(e)
                        }
                    });
                    window.addEventListener("scroll", this.onScroll)
                }
            }, {
                key: "componentWillUnmount",
                value: function n() {
                    window.removeEventListener("scroll", this.onScroll)
                }
            }, {
                key: "_onScroll",
                value: function o() {
                    var e = window.pageYOffset;
                    var t = this.downloadBarRef.current.clientHeight;
                    var r = k;
                    if (e > t) {
                        r = this.lastTop < e ? j : O
                    }
                    this.setState({
                        downloadBarClass: r
                    });
                    this.lastTop = e
                }
            }, {
                key: "render",
                value: function s() {
                    var e = this.state.downloadBarClass;
                    return v.default.createElement("div", {
                        "data-role": p.DOWNLOAD_BAR_TAG,
                        ref: this.downloadBarRef,
                        className: (0, d.default)(e, g)
                    })
                }
            }]);
            return t
        }(v.default.PureComponent);
        t.default = A
    },
    zo0Q: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r("6ato");
        var i = c(n);
        var o = r("2dj7");
        var a = c(o);
        var s = r("Dl9q");
        var l = c(s);
        var u = r("vqO6");

        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        r("Fr7k").polyfill();
        var f = "//m.aliexpress.com/api/app/download";
        var d = "//m.aliexpress.com/api/setting/cookieswitch/close?type=download_bar";
        var h = "//ae01.alicdn.com/kf/HTB1MC.LSmzqK1RjSZFp761kSXXah.png";
        var v = function() {
            function e(t) {
                (0, i.default)(this, e);
                t = t || {};
                this.element = t.element || null;
                this.channel = t.channel || "msite";
                this.hasClose = t.hasClose;
                this.redirectToUrl = t.redirectToUrl;
                this.pageId = t.pageId || window.dmtrack_pageid;
                this.autoArise = t.autoArise || null;
                this.openUrl = t.openUrl || null;
                this.clickParams = t.clickParams;
                this.closeCallback = t.closeCallback || null;
                this.scenes = t.scenes || "";
                this.showBar = t.showBar || "";
                this.timeOut = t.timeOut || 1500;
                this.downloadBarData = {};
                this.appStoreUrl = "";
                this.openAppUrl = "";
                this.bannerImg = null;
                this.closeImg = null;
                this._getdata()
            }(0, a.default)(e, [{
                key: "_getdata",
                value: function t() {
                    var e = this;
                    var t = {
                        otherResource: !this.element,
                        pageId: this.pageId,
                        channel: this.channel,
                        showBar: this.showBar
                    };
                    if (!this.element) {
                        t.openUrl = encodeURIComponent(this.openUrl ? this.openUrl : document.referrer)
                    }(0, l.default)(f + "?" + this.convertParamsObjToString(t)).then(function(e) {
                        return e.json()
                    }).then(function(t) {
                        if (t.success) {
                            var r = t.data;
                            e.downloadBarData = r.downloadBarData;
                            e.appStoreUrl = r.appStoreUrl;
                            e.openAppUrl = r.openAppUrl;
                            if (e.element && r.showBar) {
                                e._renderBar()
                            } else if (e.autoArise) {
                                e.ariseApp()
                            }
                        }
                    })
                }
            }, {
                key: "_renderBar",
                value: function r() {
                    var e = this.scenes ? this.downloadBarData[this.scenes] : this.downloadBarData.downloadBarImgUrl;
                    if (!e) {
                        return
                    }
                    var t = document.createElement("div");
                    t.style.position = "relative";
                    this.bannerImg = document.createElement("img");
                    this.bannerImg.src = this.downloadBarData.downloadBarImgUrl;
                    this.bannerImg.className = "banner-img";
                    this.bannerImg.style.width = "100%";
                    t.appendChild(this.bannerImg);
                    if (this.hasClose) {
                        this.closeImg = document.createElement("img");
                        this.closeImg.src = h;
                        this.closeImg.className = "close-img";
                        this.closeImg.style.cssText = "position: absolute; top: 0; right: 0; width: 32px; height: 32px;";
                        t.appendChild(this.closeImg)
                    }
                    this.element.appendChild(t);
                    this._bindEvent()
                }
            }, {
                key: "_bindEvent",
                value: function n() {
                    var e = this;
                    this.bannerImg.addEventListener("click", function() {
                        e.ariseApp()
                    });
                    if (this.hasClose) {
                        this.closeImg.addEventListener("click", function() {
                            e._closeBar()
                        })
                    }
                }
            }, {
                key: "ariseApp",
                value: function o() {
                    var e = this;
                    this._log();
                    var t = this.timeOut;
                    if (!this.openAppUrl) {
                        window.location.href = this.appStoreUrl ? this.appStoreUrl : this.redirectToUrl;
                        return
                    }
                    setTimeout(function() {
                        if (document.visibilityState === "visible") {
                            window.location.href = e.appStoreUrl
                        } else {
                            var t = e.redirectToUrl ? e.redirectToUrl : e._getParameterByName("redirect_to_url");
                            if (t) {
                                window.location.href = t
                            }
                        }
                    }, t);
                    window.location.href = this.openAppUrl
                }
            }, {
                key: "weexAriseApp",
                value: function s() {
                    this.ariseApp()
                }
            }, {
                key: "_log",
                value: function c() {
                    var e = {
                        ae_page_type: "other",
                        ae_button_type: "download"
                    };
                    var t = this.clickParams || e;
                    t.channel = this.channel;
                    (0, u.click)(t)
                }
            }, {
                key: "_closeBar",
                value: function v() {
                    var e = this;
                    this.element.parentNode.removeChild(this.element);
                    (0, l.default)(d).then(function(e) {
                        return e.json()
                    }).then(function(t) {
                        if (t.success) {
                            e.closeCallback && e.closeCallback()
                        }
                    })
                }
            }, {
                key: "dataToQuery",
                value: function p(e) {
                    var t = "";
                    if (e) {
                        t += "?";
                        for (var r in e) {
                            t += r + "=" + e[r] + "&"
                        }
                        t = t.slice(0, t.length - 1)
                    }
                    return t
                }
            }, {
                key: "_getParameterByName",
                value: function m(e, t) {
                    if (!t) t = window.location.href;
                    e = e.replace(/[[\]]/g, "\\$&");
                    var r = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)");
                    var n = r.exec(t);
                    if (!n) return null;
                    if (!n[2]) return "";
                    return decodeURIComponent(n[2].replace(/\+/g, " "))
                }
            }, {
                key: "convertParamsObjToString",
                value: function _(e) {
                    return e ? Object.keys(e).map(function(t) {
                        return t + "=" + e[t]
                    }).join("&") : ""
                }
            }]);
            return e
        }();
        t.default = v
    }
});