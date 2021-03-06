/* Global Widget Delivery Platform - GlobalHeaderFrontEnd$24.0.0 */ ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("HttpClient", t()) : (e = e || self).HttpClient = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        if (null == e) throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            if (null != o)
                for (var r = Object.keys(Object(o)), a = 0, s = r.length; a < s; a++) {
                    var c = r[a],
                        u = Object.getOwnPropertyDescriptor(o, c);
                    void 0 !== u && u.enumerable && (n[c] = o[c])
                }
        }
        return n
    }({
        assign: e,
        polyfill: function() {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: e
            })
        }
    }).polyfill();
    var t, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        f = (t = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function() {
            function u(e) {
                this.value = e
            }

            function e(o) {
                var r, a;

                function s(e, t) {
                    try {
                        var n = o[e](t),
                            i = n.value;
                        i instanceof u ? Promise.resolve(i.value).then(function(e) {
                            s("next", e)
                        }, function(e) {
                            s("throw", e)
                        }) : c(n.done ? "return" : "normal", n.value)
                    } catch (e) {
                        c("throw", e)
                    }
                }

                function c(e, t) {
                    switch (e) {
                        case "return":
                            r.resolve({
                                value: t,
                                done: !0
                            });
                            break;
                        case "throw":
                            r.reject(t);
                            break;
                        default:
                            r.resolve({
                                value: t,
                                done: !1
                            })
                    }(r = r.next) ? s(r.key, r.arg): a = null
                }
                this._invoke = function(i, o) {
                    return new Promise(function(e, t) {
                        var n = {
                            key: i,
                            arg: o,
                            resolve: e,
                            reject: t,
                            next: null
                        };
                        a ? a = a.next = n : (r = a = n, s(i, o))
                    })
                }, "function" != typeof o.return && (this.return = void 0)
            }
            "function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function() {
                return this
            }), e.prototype.next = function(e) {
                return this._invoke("next", e)
            }, e.prototype.throw = function(e) {
                return this._invoke("throw", e)
            }, e.prototype.return = function(e) {
                return this._invoke("return", e)
            }
        }(), function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }),
        n = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        }(),
        u = (Object.assign, function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                return null === r ? void 0 : e(r, n, i)
            }
            if ("value" in o) return o.value;
            var a = o.get;
            return void 0 !== a ? a.call(i) : void 0
        }),
        o = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        l = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        r = ("undefined" == typeof global ? self : global, function() {
            function o(e) {
                f(this, o), this.win = e || window, this.initialize()
            }
            return n(o, [{
                key: "initialize",
                value: function() {
                    var e, t = this;
                    this.HOST_NAME = this.win.location.hostname, this.IS_LATEST = -1 !== this.HOST_NAME.indexOf("latest"), this.IS_PARADISE = -1 !== this.HOST_NAME.indexOf("paradise"), this.IS_DEV_MACHINE_HOST = 5 < this.win.location.origin.lastIndexOf(":") && -1 === t.HOST_NAME.indexOf("lvs") && -1 === t.HOST_NAME.indexOf("slc") && -1 === t.HOST_NAME.indexOf("phx"), this.ENV = (e = i(t.win.GH) !== o.TYPE_UNDEFINED && i(t.win.GH.C) !== o.TYPE_UNDEFINED && t.win.GH.C.env || o.ENV_ENUM.PRODUCTION, t.IS_DEV_MACHINE_HOST && (e = o.ENV_ENUM.DEV), e), this.URL_QUERY_MAP = function(e) {
                        var n = {},
                            t = e.split("?");
                        2 === t.length && t[1].split("&").forEach(function(e) {
                            var t = e.split("=");
                            t && 2 === t.length && t[0] && t[1] && (n[t[0]] = t[1])
                        });
                        return n
                    }(this.win.location.search)
                }
            }, {
                key: "sanitizeRequestUrlByEnv",
                value: function(e) {
                    if (e) {
                        var t = this.win.location.origin;
                        return this.ENV !== o.ENV_ENUM.STAGING && this.ENV !== o.ENV_ENUM.FEATURE && this.ENV !== o.ENV_ENUM.SANDBOX && this.ENV !== o.ENV_ENUM.DEV || this.IS_PARADISE ? this.ENV !== o.ENV_ENUM.PREPROD || this.IS_LATEST || (t = o.LATEST) : t = o.QA, this.URL_QUERY_MAP._ghpool && this.ENV !== o.ENV_ENUM.PRODUCTION && (t = decodeURIComponent(this.URL_QUERY_MAP._ghpool)), this.ENV === o.ENV_ENUM.PRODUCTION && o.DOMAIN_REGEX_CHECK.test(this.HOST_NAME) && (t = this.getProductionEnvUrl()), t += e
                    }
                }
            }, {
                key: "getProductionEnvUrl",
                value: function() {
                    var e = "",
                        t = "",
                        n = this.HOST_NAME;
                    n.match(o.DUAL_TLD_REGEX_CHECK) && (n = n.replace(o.DUAL_TLD_REGEX_CHECK, function(e) {
                        return t = e, ""
                    }));
                    var i = n.split(".");
                    return e = (i = this.buildProductionUrl(i)).length ? (0 === i.indexOf("ebay") && -1 === i.indexOf("www") && i.unshift("www"), i = i.join("."), "" !== t.trim() && (i += t), "https://" + i) : (console.debug("Not a valid TLD"), ""), console.debug("Updated xhrRequestURL = " + e), e
                }
            }, {
                key: "buildProductionUrl",
                value: function(e) {
                    for (var t = []; e.length;) {
                        var n = e[0]; - 1 === o.WHITELISTED_DOMAIN_PREFIXES.indexOf(n) && -1 === o.WHITELISTED_TLDS.indexOf(n) ? e.shift() : -1 !== o.WHITELISTED_TLDS.indexOf(n) && -1 === t.indexOf("ebay") ? e.shift() : t.push(e.shift())
                    }
                    return t
                }
            }, {
                key: "addQueryParam",
                value: function(e) {
                    var r = this,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        a = Object.assign({}, this.URL_QUERY_MAP);
                    return (a = Object.assign(a, t))._showdiag = a._showdiag && "1" === a._showdiag ? a._showdiag : void 0, (e = o.ALLOWED_QUERY_PARAMS.reduce(function(e, t) {
                        var n = t.name,
                            i = a[n];
                        if (i && t.denied !== r.ENV) {
                            var o = -1 < e.indexOf("?") ? "&" : "?";
                            e = e + o + n + "=" + encodeURIComponent(i)
                        }
                        return e
                    }, e)).replace(/[^=&]+=(&|$)/g, "").replace(/&$/, "").replace(/\?$/, "")
                }
            }], [{
                key: "TYPE_UNDEFINED",
                get: function() {
                    return "undefined"
                }
            }, {
                key: "ENV_ENUM",
                get: function() {
                    return {
                        PRODUCTION: "production",
                        DEV: "dev",
                        PREPROD: "preprod",
                        STAGING: "staging",
                        FEATURE: "feature",
                        SANDBOX: "sandbox"
                    }
                }
            }, {
                key: "QA",
                get: function() {
                    return "https://www.qa.ebay.com"
                }
            }, {
                key: "LATEST",
                get: function() {
                    return "https://www.latest.ebay.com"
                }
            }, {
                key: "ROUTE_REGEX_CHECK",
                get: function() {
                    return /(www\.)?(.*)\.ebay\.(com|com.au|at|be|ca|cn|fr|de|com.hk|in|ie|it|co.jp|com.my|nl|ph|pl|com.sg|es|se|ch|com.tw|co.th|co.uk|vn)/i
                }
            }, {
                key: "DOMAIN_REGEX_CHECK",
                get: function() {
                    return /(www\.)?(.*)\.ebay\.(com|com.au|at|be|ca|cn|fr|de|com.hk|in|ie|it|co.jp|com.my|nl|ph|pl|com.sg|es|se|ch|com.tw|co.th|co.uk|vn)$/i
                }
            }, {
                key: "DUAL_TLD_REGEX_CHECK",
                get: function() {
                    return /[\.]{1}(com.au|com.hk|co.jp|com.my|com.sg|com.tw|co.th|co.uk)$/i
                }
            }, {
                key: "ALLOWED_QUERY_PARAMS",
                get: function() {
                    return [{
                        name: "_showdiag",
                        denied: ""
                    }, {
                        name: "correlation",
                        denied: ""
                    }, {
                        name: "mock",
                        denied: o.ENV_ENUM.PRODUCTION
                    }, {
                        name: "scenario",
                        denied: o.ENV_ENUM.PRODUCTION
                    }, {
                        name: "show_optin_banner",
                        denied: ""
                    }, {
                        name: "behavior",
                        denied: ""
                    }, {
                        name: "moduleType",
                        denied: ""
                    }, {
                        name: "phone_number",
                        denied: ""
                    }, {
                        name: "authentication_code",
                        denied: ""
                    }, {
                        name: "country_code",
                        denied: ""
                    }, {
                        name: "supportedUxComponentNames",
                        denied: ""
                    }, {
                        name: "resend",
                        denied: ""
                    }, {
                        name: "SSRFallback",
                        denied: ""
                    }, {
                        name: "critical",
                        denied: ""
                    }]
                }
            }, {
                key: "WHITELISTED_DOMAIN_PREFIXES",
                get: function() {
                    return ["www", "m", "ebay", "benl", "befr", "cafr"]
                }
            }, {
                key: "WHITELISTED_TLDS",
                get: function() {
                    return ["com", "com.au", "at", "be", "ca", "cn", "fr", "de", "com.hk", "in", "ie", "it", "co.jp", "com.my", "nl", "ph", "pl", "com.sg", "es", "se", "ch", "com.tw", "co.th", "co.uk", "vn"]
                }
            }]), o
        }()),
        a = function(e) {
            function c(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                    o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
                    r = arguments[5];
                f(this, c);
                var a = r || ("undefined" != typeof window ? window : {});
                t = t.toUpperCase();
                var s = l(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, a));
                return s.ctx = a, s.shouldRetry = o.shouldRetry || !1, s.timeout = o.timeout || c.MAX_TIMEOUT, s.hasFullXhrUrl = o.hasFullXhrUrl || !1, s.queryParamObj = n, s.method = -1 !== c.ALLOWED_METHODS.indexOf(t) ? t : "GET", s.route = e, s.async = !0, "boolean" == typeof o.async && !1 === o.async && (s.async = !1), s.hasFullXhrUrl ? (s.baseUrl = "", s.requestUrl = u(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "addQueryParam", s).call(s, s.route, s.queryParamObj)) : (s.baseUrl = u(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "sanitizeRequestUrlByEnv", s).call(s, s.route), s.requestUrl = u(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "addQueryParam", s).call(s, s.baseUrl, s.queryParamObj)), s.payload = i, s.retries = 0, s
            }
            return o(c, r), n(c, [{
                key: "handlers",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.handlers = e, this
                }
            }, {
                key: "delay",
                value: function(e, t) {
                    setTimeout(e.bind(this), t)
                }
            }, {
                key: "maybeRetry",
                value: function() {
                    var e = this;
                    if (this.shouldRetry) {
                        if (this.retries >= c.MAX_RETRIES) return;
                        this.retries++, this.delay(function() {
                            e.initializeAndTrigger()
                        }, this.retryTimeout)
                    }
                }
            }, {
                key: "initializeAndTrigger",
                value: function() {
                    var t, n = this;
                    try {
                        this.xhr = new XMLHttpRequest;
                        var e = this.ctx.location && this.ctx.location.hostname;
                        (this.hasFullXhrUrl && r.ROUTE_REGEX_CHECK.test(this.route) || !this.hasFullXhrUrl && r.DOMAIN_REGEX_CHECK.test(e)) && (this.xhr.withCredentials = !0), this.xhr.open(this.method, this.requestUrl, this.async), this.async && (this.xhr.timeout = this.timeout), this.xhr.setRequestHeader("Content-Type", "text/plain");
                        var i = this.shouldRetry ? (t = this, function(e) {
                            e instanceof ProgressEvent && t.maybeRetry(t)
                        }) : c.NOOP;
                        c.DEFAULT_XHR_EVENTS.forEach(function(e) {
                            var t = -1 !== c.DEFAULT_RETRY_EVENTS.indexOf(e);
                            n.xhr[e] = n.handlers[e] || (t ? i : c.NOOP)
                        }), this.xhr.send(this.payload)
                    } catch (e) {
                        console.debug("Global HTTPClient requests failing", e)
                    }
                }
            }, {
                key: "retryTimeout",
                get: function() {
                    return Math.min(c.MAX_TIMEOUT, 100 * (2 ^ this.retries))
                }
            }], [{
                key: "ALLOWED_METHODS",
                get: function() {
                    return ["GET", "POST", "HEAD"]
                }
            }, {
                key: "NOOP",
                get: function() {
                    return function() {}
                }
            }, {
                key: "MAX_TIMEOUT",
                get: function() {
                    return 5e3
                }
            }, {
                key: "MAX_RETRIES",
                get: function() {
                    return 1
                }
            }, {
                key: "DEFAULT_XHR_EVENTS",
                get: function() {
                    return ["onload", "onloadstart", "onloadend", "onprogress", "onreadystatechange", "onerror", "onabort", "ontimeout"]
                }
            }, {
                key: "DEFAULT_RETRY_EVENTS",
                get: function() {
                    return ["onerror", "onabort", "ontimeout"]
                }
            }]), c
        }();
    ! function() {
        var n = document.fonts,
            e = "font-marketsans",
            t = "https://ir.ebaystatic.com/cr/v/c1/vendor/fontfaceobserver.js";

        function i() {
            try {
                localStorage.setItem("ebay-font", e)
            } catch (e) {}
        }

        function o() {
            ! function() {
                var e = n && n.load;
                if (e && /Apple/.test(window.navigator.vendor)) {
                    var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    e = !(t && parseInt(t[1], 10) < 603)
                }
                return e
            }() ? function(e, t) {
                var n = document.createElement("script");
                n.type = "application/javascript", n.async = !0, n.onload = t, n.src = e, document.documentElement.firstChild.appendChild(n)
            }(t, function() {
                var e = new FontFaceObserver("Market Sans"),
                    t = new FontFaceObserver("Market Sans", {
                        weight: "bold"
                    });
                Promise.all([e.load(), t.load()]).then(i)
            }) : (n.load("1em Market Sans"), n.load("bold 1em Market Sans"), n.ready.then(i))
        }
        "fontDisplay" in document.documentElement.style || localStorage && localStorage.getItem("ebay-font") === e || window.addEventListener("load", function() {
            requestAnimationFrame ? requestAnimationFrame(o) : o()
        })
    }();
    ! function() {
        if ("undefined" != typeof Element) {
            var e = function() {
                var e = document.createElement("div"),
                    t = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (var n in t)
                    if (void 0 !== e.style[n]) return t[n]
            }()
        }
    }();
    if ("undefined" != typeof Element)
        for (var s = ["matches", "matchesSelector", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], c = 0; c < s.length; c++) {
            var d = s[c];
            if (Element.prototype[d]) {
                d;
                break
            }
        }
    var h = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window;
            return "requestAnimationFrame" in t ? t.requestAnimationFrame(e) : t.setTimeout(e, 0)
        },
        p = function() {
            function r(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                    i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : document;
                f(this, r), this.doc = i, this.cb = n, this.js = e, this.jsSize = this.js && this.js.length, this.css = t, this.cssSize = this.css && this.css.length;
                var o = (i.body || i.getElementsByTagName("head")[0]).childNodes;
                this.ref = o[o.length - 1]
            }
            return n(r, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.js && this.css ? this.loadJS(this.js, function() {
                        return e.loadCSS(e.css)
                    }) : this.cb()
                }
            }, {
                key: "loadJS",
                value: function(e, t) {
                    var n = this;
                    if (e)
                        if (Array.isArray(e)) e.forEach(function(e) {
                            n.loadJS(e, t)
                        });
                        else {
                            var i = this.doc.createElement("script");
                            i.defer = !0, i.src = e, i.type = "text/javascript";
                            i.addEventListener("load", function e() {
                                i.addEventListener && i.removeEventListener("load", e), n.jsSize--, n.jsSize <= 0 && t()
                            }), this.ref.parentNode.insertBefore(i, this.ref.nextSibling)
                        }
                }
            }, {
                key: "loadCSS",
                value: function(e) {
                    var t = this;
                    if (e)
                        if (Array.isArray(e)) e.forEach(function(e) {
                            t.loadCSS(e)
                        });
                        else {
                            var n = this.doc.createElement("link");
                            n.rel = "stylesheet", n.href = e, n.media = "temp";
                            n.addEventListener("load", function e() {
                                n.addEventListener && n.removeEventListener("load", e), n.media = "all", t.cssSize--, t.cssSize <= 0 && t.cb()
                            }), this.ref.parentNode.insertBefore(n, this.ref.nextSibling)
                        }
                }
            }]), r
        }(),
        y = h,
        v = "gh_user",
        E = {
            initAndRenderWidgets: function(r) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    t = e.hasEncodedHtml,
                    a = void 0 === t || t,
                    n = e.js,
                    i = e.css,
                    o = e.jsInline,
                    s = void 0 === o ? "" : o;
                new p(n, i, function() {
                    var e = document.getElementById(v) || function() {
                            var e = document.createElement("div");
                            return e.id = v, e.style.display = "none", document.body.appendChild(e), e
                        }(),
                        t = r.reduce(function(e, t) {
                            return e + (a ? decodeURI(t.html) : t.html)
                        }, "");
                    e.innerHTML += t;
                    var n = function(e) {
                            var t = [],
                                n = [];
                            return e.forEach(function(e) {
                                "nb_script" === e.id ? t.push(e.innerHTML) : n.push(e.innerHTML)
                            }), t.concat(n)
                        }(e.querySelectorAll("script")),
                        i = r.map(function(e) {
                            return e.init
                        }),
                        o = "";
                    s && (o = function(e) {
                            return e.slice(e.indexOf(">") + 1, e.lastIndexOf("<")).trim()
                        }(a ? decodeURI(s) : s)),
                        function(e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document,
                                n = t.createTextNode(e),
                                i = t.createElement("script");
                            i.appendChild(n), y(function() {
                                return t.body.appendChild(i)
                            })
                        }(i.join(" ; ").concat(" ; ").concat(n).concat(" ; ").concat(o)), "function" == typeof window.markoDynamicInitComponents && window.markoDynamicInitComponents()
                }).init()
            }
        },
        m = {
            HOLDER_ID: v
        };
    E.privates = m;
    var g = E.initAndRenderWidgets,
        w = function(e) {
            "complete" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document).readyState ? e() : window.addEventListener("load", e)
        },
        _ = function(e) {
            var t = e.renderedComponents,
                n = e.html,
                i = e.content,
                o = e.js,
                r = e.css,
                a = e.jsInline,
                s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g;
            window.widget_platform_renderedComponents = t, s([{
                html: n || i,
                init: ""
            }], {
                hasEncodedHtml: !1,
                js: o,
                css: r,
                jsInline: a
            })
        },
        b = function(e) {
            var t = e.renderType,
                n = e.renderDelay,
                i = e.widgets,
                o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g,
                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document,
                a = i && i[0],
                s = a && a.js,
                c = a && a.css,
                u = a && a.jsInline;
            1 === t ? o(i, {
                js: s,
                css: c,
                jsInline: u
            }) : 2 === t ? w(function() {
                return o(i, {
                    js: s,
                    css: c,
                    jsInline: u
                })
            }, r) : function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document;
                w(function() {
                    window.setTimeout(t, e)
                }, n)
            }(n, function() {
                return o(i, {
                    js: s,
                    css: c,
                    jsInline: u
                })
            }, r)
        },
        T = function() {
            function d(e) {
                var t = e.widgetResponse,
                    n = void 0 === t ? {} : t,
                    i = e.onFallback,
                    o = e.initializer,
                    r = void 0 === o ? b : o;
                f(this, d);
                var a = n.widgets,
                    s = n.queryParam,
                    c = n.triggerFallBack,
                    u = n.renderType,
                    l = n.renderDelay;
                this.props = {
                    widgets: a || [],
                    queryParam: s || {},
                    triggerFallBack: void 0 === c || c,
                    onFallback: i,
                    initializer: r,
                    renderType: u,
                    renderDelay: l
                }
            }
            return n(d, [{
                key: "initializeWidgets",
                value: function() {
                    var e = this.props,
                        t = e.widgets;
                    (0, e.initializer)({
                        widgets: t,
                        renderType: e.renderType,
                        renderDelay: e.renderDelay
                    })
                }
            }, {
                key: "handleFallback",
                value: function() {
                    var e = this.props,
                        t = e.queryParam;
                    (0, e.onFallback)(t)
                }
            }, {
                key: "init",
                value: function() {
                    this.props.triggerFallBack ? this.handleFallback() : this.initializeWidgets()
                }
            }]), d
        }(),
        S = function() {
            var e = !1;
            return "serviceWorker" in navigator && "Notification" in window && (e = "default" === Notification.permission), e
        },
        O = {
            DATA_MISSING: "dataMissing",
            TYPE_MISMATCH: "typeMismatch"
        },
        I = void 0;

    function N(e) {
        return Array.isArray(e) ? "array" : null === e ? "null" : void 0 === e ? "undefined" : i(e)
    }

    function A(e) {
        return "string" == typeof e && (e = e.split(".").join(",").replace(/\[\d\]/g, function(e) {
            return e = "," + (e = e.replace(/[\[\]']+/g, ""))
        }).split(",")), e
    }

    function k(e, t) {
        return t.reduce(function(e, t) {
            return e && void 0 !== e[t] ? e[t] : void 0
        }, e)
    }

    function R(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "warn",
            o = void 0,
            r = k(e, t = A(t)),
            a = N(r),
            s = N(n);
        return "undefined" === s ? (n = "", s = "string") : "object" === s && function(e) {
            if (e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }
        }(n) && (n = {
            __isEmpty: !0
        }), "undefined" !== a ? a !== s && (o = O.TYPE_MISMATCH, r = n) : (o = O.DATA_MISSING, r = n), I && i && o && function(e, t, n, i) {
            I[i] && I[i]("event: %s, path: %s, default: %s", e, t, n)
        }(o, t, n, i), r
    }
    var U = {
            has: function(e, t) {
                var n = k(e, t = A(t)),
                    i = N(n);
                return n = !("undefined" === i || "null" === i)
            },
            get: function(e, t, n) {
                return R(e, t, n)
            },
            need: function(e, t, n, i) {
                return R(e, t, n, i)
            },
            setLogger: function(e) {
                I = e
            }
        },
        D = {
            EVENT_TYPES: O
        };
    U.privates = D;
    var P = U.has,
        M = U.get,
        C = "X_EBAY_C_CORRELATION_SESSION",
        j = "raptor.require",
        L = "trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo",
        x = {
            readRaptorContext: function() {
                if (P(window, j)) return M(window, j, function() {})("ebay.context.Context")
            },
            extractSessionInfo: function() {
                if (P(window, L)) return M(window, L, function() {})()
            },
            addSessionInfoIntoPage: function(e) {
                window.trkCorrelationSessionInfo = {}, window.trkCorrelationSessionInfo.getTrackingInfo = function() {
                    return JSON.parse(JSON.stringify(e))
                }, window.trkCorrelationSessionInfo.getTrackingCorrelationSessionInfo = function() {
                    return e[C]
                }
            }
        },
        H = S,
        F = function(e) {
            var t = x.extractSessionInfo(),
                n = {},
                i = null;
            if (t) return t;
            try {
                i = x.readRaptorContext()
            } catch (e) {
                i = null
            }
            var o = i && i.pid;
            return o || (e = e || window, o = M(e, "GH.C.pageId", 0)), o ? (n[C] = "operationId=" + o, x.addSessionInfoIntoPage(n), n[C]) : null
        },
        V = _,
        q = function() {
            var e = function(e) {
                    return "undefined" !== i(e.GH) && e.GH && "function" == typeof e.GH.getWidgetDeliveryPlatform && e.GH.getWidgetDeliveryPlatform()
                }(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window),
                t = e && e.base_path,
                n = e && e.new_buyer_acquistion;
            return t && n ? t + n : "/gh/useracquisition"
        },
        X = function(e) {
            var t = function(e) {
                if (e instanceof ProgressEvent) {
                    var t = e.target || e.currentTarget;
                    if (t instanceof XMLHttpRequest) return t.responseText
                }
            }(e);
            if (t) try {
                var n = t && JSON.parse(t);
                V(n)
            } catch (e) {
                console.debug("Unable to parse Response", e)
            }
        },
        G = function(e) {
            console.debug("useracquisition request has failed!", e)
        },
        z = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.route || q(),
                n = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = {
                            correlation: F(),
                            show_optin_banner: H()
                        };
                    return Object.assign(t, e)
                }(e),
                i = {
                    shouldRetry: !1,
                    timeout: 1e4
                };
            return e.route && (i.hasFullXhrUrl = !0), new a(t, "GET", n, {}, i, window).handlers({
                onload: X,
                onerror: G
            })
        },
        W = window.widget_platform,
        Y = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            z(e).initializeAndTrigger()
        };
    return document && document.addEventListener && document.addEventListener("widget-platform-ondemand-uas-request", function(e) {
            ! function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                window && e.widgetPlatformOndemandUASDoneEventType && (window.widget_platform_ondemandUASDoneEventType = e.widgetPlatformOndemandUASDoneEventType), Y(e)
            }(e && e.detail)
        }, !1), new T({
            widgetResponse: W,
            onFallback: Y
        }).init(),
        function() {
            if ("undefined" != typeof window && "function" == typeof window.define && window.define.amd) window.HttpClient = a
        }(), a
});
/* Delivered by Global Header, ISPROD=true */