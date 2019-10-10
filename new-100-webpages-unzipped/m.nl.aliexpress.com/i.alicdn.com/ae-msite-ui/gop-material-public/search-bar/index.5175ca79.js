(function(e) {
    function t(t) {
        var a = t[0];
        var i = t[1];
        var u = t[2];
        var s, c, d = 0,
            f = [];
        for (; d < a.length; d++) {
            c = a[d];
            if (Object.prototype.hasOwnProperty.call(n, c) && n[c]) {
                f.push(n[c][0])
            }
            n[c] = 0
        }
        for (s in i) {
            if (Object.prototype.hasOwnProperty.call(i, s)) {
                e[s] = i[s]
            }
        }
        if (l) l(t);
        while (f.length) {
            f.shift()()
        }
        o.push.apply(o, u || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < o.length; t++) {
            var r = o[t];
            var a = true;
            for (var u = 1; u < r.length; u++) {
                var s = r[u];
                if (n[s] !== 0) a = false
            }
            if (a) {
                o.splice(t--, 1);
                e = i(i.s = r[0])
            }
        }
        return e
    }
    var a = {};
    var n = {
        13: 0
    };
    var o = [];

    function i(t) {
        if (a[t]) {
            return a[t].exports
        }
        var r = a[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(r.exports, r, r.exports, i);
        r.l = true;
        return r.exports
    }
    i.m = e;
    i.c = a;
    i.d = function(e, t, r) {
        if (!i.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    i.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    i.t = function(e, t) {
        if (t & 1) e = i(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        i.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var a in e) i.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    };
    i.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function a() {
            return e
        };
        i.d(t, "a", t);
        return t
    };
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    i.p = "//i.alicdn.com/ae-msite-ui/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var s = u.push.bind(u);
    u.push = t;
    u = u.slice();
    for (var c = 0; c < u.length; c++) t(u[c]);
    var l = s;
    o.push(["7QGN", 0]);
    return r()
})({
    "/ubK": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.EXP_COMMON_CONFIG = t.FORM_SEARCH_ACTION = t.AUTOSUGGEST_ENDPOINT = t.DISCOVERY_ENDPOINT = t.SEACRH_ICON = t.HISTORY_STORE_NAME = t.MAX_HISTORY_COUNT = t.PROJECT_ID = undefined;
        var a = r("F8dh");
        var n = t.PROJECT_ID = 180139;
        var o = t.MAX_HISTORY_COUNT = 6;
        var i = t.HISTORY_STORE_NAME = "SEA_HIS";
        var u = t.SEACRH_ICON = "//ae01.alicdn.com/kf/HTB1FsINbizxK1RjSspj763S.pXa3.png";
        var s = t.DISCOVERY_ENDPOINT = a.MSITE_URL + "/api/search/bar/recommend";
        var c = t.AUTOSUGGEST_ENDPOINT = a.MSITE_URL + "/api/search/auto-suggests/";
        var l = t.FORM_SEARCH_ACTION = a.MSITE_URL + "/search.htm";
        var d = t.EXP_COMMON_CONFIG = {
            DISCOVERY: {
                project_id: n,
                exp_page_area: "searchdiscovery",
                exp_type: "Search_Discovery",
                exp_result_cnt: "1"
            },
            HISTORY: {
                project_id: n,
                exp_page_area: "searchhistory",
                exp_type: "Search_History",
                exp_result_cnt: "1"
            },
            SEARCH_ICON: {
                project_id: n,
                exp_page_area: "searchbox",
                exp_type: "Shading_Keyword_Show",
                exp_result_cnt: "1"
            }
        }
    },
    "0Rf0": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var a = t[r];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    if ("value" in a) a.writable = true;
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, r, a) {
                if (r) e(t.prototype, r);
                if (a) e(t, a);
                return t
            }
        }();

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var o = function() {
            function e() {
                n(this, e);
                this._data = {}
            }
            a(e, [{
                key: "getItem",
                value: function t(e) {
                    return this._data.hasOwnProperty(e) ? this._data[e] : null
                }
            }, {
                key: "setItem",
                value: function r(e, t) {
                    return this._data[e] = String(t)
                }
            }, {
                key: "removeItem",
                value: function o(e) {
                    return delete this._data[e]
                }
            }, {
                key: "clear",
                value: function i() {
                    return this._data = {}
                }
            }]);
            return e
        }();
        t.default = o
    },
    "0XX+": function(e, t, r) {
        e.exports = {
            "static-search-bar-wrap": "_28w9p",
            "fixed-search-bar-wrap": "_2-_fp",
            "search-input-wrap": "oIDDb",
            "search-bar-wrap": "_2db7F",
            "form-search-input": "_3iajd",
            "search-input": "_2Emsu",
            "search-icon": "_3zdRA",
            "icon-clear": "_2Lh-R",
            "dropdown-container": "_15gAT",
            "autosuggest-wrap": "_2oVgr",
            "autosuggest-item-wrap": "_1PYTI",
            "store-logo": "_3gcVP",
            "store-text": "Ng7gq",
            "keyword-text": "_3hZtx",
            "category-text": "_1fwCF",
            "icon-insert-wrap": "_2PIAG",
            "ic-insert-md": "JNkko",
            "dummy-div": "_1SQvI",
            "dropdown-wrap": "_1ZtkU",
            "dropdown-title": "_3LCfJ",
            "dropdown-btn": "_3-OPL",
            "dropdown-item-wrap": "_17NKd",
            "dropdown-item": "_1XQdg",
            "plain-item-link": "_1iDV6",
            "item-link-with-cat": "_1Nm68",
            "dummy-overlay": "_1Aa1L"
        }
    },
    "4JyM": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.default = a;

        function a(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
                r[a - 1] = arguments[a]
            }
            var o = (window.params || {}).i18n || {};
            if (typeof o[e.key] === "undefined" || o[e.key] === "") {
                return e.fallback || ""
            }
            var i = o[e.key];
            r.forEach(function(e, t) {
                i = i.replace("{" + t + "}", r[t])
            });
            return n(i.trim())
        }

        function n(e) {
            var t = document.createElement("span");
            return e.replace(/&[#\w;]+/gi, function(e) {
                t.innerHTML = e;
                return t.innerText
            })
        }
    },
    "5oy4": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("6ato");
        var n = c(a);
        var o = r("2dj7");
        var i = c(o);
        var u = r("d9lH");
        var s = c(u);

        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var l = function() {
            (0, i.default)(e, null, [{
                key: "getInstance",
                value: function t() {
                    if (!e._instance) {
                        e._instance = new e
                    }
                    return e._instance
                }
            }]);

            function e() {
                (0, n.default)(this, e);
                this.st_page_id = window.dmtrack_pageid
            }(0, i.default)(e, [{
                key: "click",
                value: function r(e) {
                    var t = e.projectId,
                        r = t === undefined ? "" : t,
                        a = e.pageType,
                        n = a === undefined ? "" : a,
                        o = e.pageArea,
                        i = o === undefined ? "" : o,
                        u = e.buttonType,
                        c = u === undefined ? "" : u,
                        l = e.objectType,
                        d = l === undefined ? "" : l,
                        f = e.objectValue,
                        p = f === undefined ? "" : f,
                        v = e.clickBehavior,
                        m = v === undefined ? "" : v;
                    var _ = {
                        ae_project_id: r,
                        ae_page_type: n,
                        ae_page_area: i,
                        ae_button_type: c,
                        ae_object_type: d,
                        ae_object_value: p,
                        ae_click_behavior: m,
                        st_page_id: this.st_page_id
                    };
                    goldlog.record("/ae.pc_click.statweb_ae_click", "CLK", (0, s.default)(_), "GET")
                }
            }]);
            return e
        }();
        t.default = l
    },
    "7QGN": function(e, t, r) {
        "use strict";
        var a = r("cDcd");
        var n = d(a);
        var o = r("31al");
        var i = d(o);
        var u = r("HDSX");
        var s = d(u);
        var c = r("4JyM");
        var l = d(c);

        function d(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        window["gop"]["search-bar"] = function(e, t, r) {
            (0, i.default)(n.default.createElement(s.default, {
                cdpJson: e,
                i18n: l.default
            }), t, r)
        }
    },
    "9c0I": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("EH+i");
        var n = o(a);
        r("0XX+");

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = function u(e) {
            var t = e.autoSuggestDataObj,
                r = t === undefined ? {} : t,
                a = e.storeHistory;
            var n = r.autoSuggestPromList,
                o = n === undefined ? [] : n,
                i = r.autoSuggestCatList,
                u = i === undefined ? [] : i,
                s = r.autoSuggestList,
                c = s === undefined ? [] : s;
            var l = window.params || {},
                d = l.spmAB,
                f = d === undefined ? "spm-a-b-is-missing" : d;
            return o.concat(u).concat(c).map(function(e) {
                return React.createElement("li", {
                    className: "_1PYTI"
                }, e.action && React.createElement("a", {
                    href: e.action + "&spm=" + f,
                    onClick: function t() {
                        return a(e)
                    }
                }, React.createElement("div", {
                    className: "flex align-center"
                }, React.createElement("img", {
                    src: e.icon,
                    className: "_3gcVP",
                    alt: "image",
                    width: "60",
                    height: "30"
                }), React.createElement("span", {
                    className: "Ng7gq"
                }, e.keyWord))), e.mainSearchURL && React.createElement("a", {
                    href: e.mainSearchURL,
                    onClick: function r() {
                        return a(e)
                    }
                }, React.createElement("div", {
                    className: "_3hZtx"
                }, e.keyWord), e.catName && React.createElement("div", {
                    className: "_1fwCF"
                }, e.catName), React.createElement("span", {
                    className: "_2PIAG"
                }, React.createElement("div", {
                    className: "ic-md ic-insert-md JNkko"
                }))))
            })
        };
        i.propTypes = {
            autoSuggestDataObj: n.default.shape({
                autoSuggestPromList: n.default.array,
                autoSuggestCatList: n.default.array,
                autoSuggestList: n.default.array
            }),
            storeHistory: n.default.func
        };
        t.default = i
    },
    AsEh: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = m(a);
        var o = r("Ck+K");
        var i = m(o);
        var u = r("EH+i");
        var s = m(u);
        var c = r("cDcd");
        var l = m(c);
        var d = r("eTd9");
        var f = m(d);
        var p = r("/ubK");
        var v = r("F8dh");
        r("0XX+");

        function m(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var _ = {
            "../index.module.scss": {
                "search-input-wrap": "oIDDb",
                "search-bar-wrap": "_2db7F",
                "static-search-bar-wrap": "_28w9p",
                "fixed-search-bar-wrap": "_2-_fp",
                "form-search-input": "_3iajd",
                "search-input": "_2Emsu",
                "search-icon": "_3zdRA",
                "icon-clear": "_2Lh-R",
                "dropdown-container": "_15gAT",
                "autosuggest-wrap": "_2oVgr",
                "autosuggest-item-wrap": "_1PYTI",
                "store-logo": "_3gcVP",
                "store-text": "Ng7gq",
                "keyword-text": "_3hZtx",
                "category-text": "_1fwCF",
                "icon-insert-wrap": "_2PIAG",
                "ic-insert-md": "JNkko",
                "dummy-div": "_1SQvI",
                "dropdown-wrap": "_1ZtkU",
                "dropdown-title": "_3LCfJ",
                "dropdown-btn": "_3-OPL",
                "dropdown-item-wrap": "_17NKd",
                "dropdown-item": "_1XQdg",
                "plain-item-link": "_1iDV6",
                "item-link-with-cat": "_1Nm68",
                "dummy-overlay": "_1Aa1L"
            }
        };
        var h = window.params || {},
            y = h.spmAB,
            g = y === undefined ? "spm-a-b-is-missing" : y;
        var S = "plain-item-link";
        var w = "item-link-with-cat";
        var b = function E(e) {
            var t = e.i18n,
                r = e.isHistoryEmpty,
                a = e.clearHistory,
                o = e.historyItems,
                u = o === undefined ? [] : o,
                s = e.storeHistory;
            var d = function h(e) {
                return l.default.createElement(c.Fragment, null, l.default.createElement("span", null, e.keyWord), e.catName && l.default.createElement("div", {
                    className: "_1fwCF"
                }, e.catName))
            };
            var m = function y(e) {
                return l.default.createElement("div", {
                    className: "flex align-center"
                }, l.default.createElement("img", {
                    src: e.icon,
                    className: "_3gcVP",
                    alt: "image",
                    height: "28"
                }), l.default.createElement("span", null, e.keyWord))
            };
            return !r && l.default.createElement(c.Fragment, null, l.default.createElement("div", {
                className: "flex justify-space-between align-center"
            }, l.default.createElement("span", {
                className: "_3LCfJ"
            }, t({
                key: "searchHistory",
                fallback: "SEARCH HISTORY"
            })), l.default.createElement("span", {
                className: "_3-OPL",
                onClick: a
            }, t({
                key: "clearHistory",
                fallback: "CLEAR"
            }))), l.default.createElement("ul", {
                className: "flex _17NKd"
            }, u.map(function(e) {
                var t = e.catName ? w : S;
                var r = e.action ? e.action + "&spm=" + g : v.MSITE_URL + "/search.htm?keywords=" + e.keyWord;
                return l.default.createElement("li", (0, n.default)({
                    className: "_1XQdg"
                }, v.DAILY_ANALYTIC, p.EXP_COMMON_CONFIG.HISTORY, {
                    exp_product: e.keyWord
                }), l.default.createElement("a", {
                    href: r,
                    onClick: function a() {
                        (0, f.default)({
                            pageArea: "searchhistory",
                            buttonType: "Search_History_Click",
                            objectType: "button",
                            objectValue: e.keyWord
                        });
                        s(e)
                    },
                    className: (0, i.default)(t, _)
                }, e.action ? m(e) : d(e)))
            })))
        };
        b.propTypes = {
            i18n: s.default.func.isRequired,
            isHistoryEmpty: s.default.bool,
            clearHistory: s.default.func.isRequired,
            historyItems: s.default.array,
            storeHistory: s.default.func
        };
        t.default = l.default.memo(b)
    },
    FPs1: function(e, t) {
        function r(e, t, r) {
            var a, n, o, i, u;
            if (null == t) t = 100;

            function s() {
                var c = Date.now() - i;
                if (c < t && c >= 0) {
                    a = setTimeout(s, t - c)
                } else {
                    a = null;
                    if (!r) {
                        u = e.apply(o, n);
                        o = n = null
                    }
                }
            }
            var c = function() {
                o = this;
                n = arguments;
                i = Date.now();
                var c = r && !a;
                if (!a) a = setTimeout(s, t);
                if (c) {
                    u = e.apply(o, n);
                    o = n = null
                }
                return u
            };
            c.clear = function() {
                if (a) {
                    clearTimeout(a);
                    a = null
                }
            };
            c.flush = function() {
                if (a) {
                    u = e.apply(o, n);
                    o = n = null;
                    clearTimeout(a);
                    a = null
                }
            };
            return c
        }
        r.debounce = r;
        e.exports = r
    },
    HDSX: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = G(a);
        var o = r("6ato");
        var i = G(o);
        var u = r("2dj7");
        var s = G(u);
        var c = r("Xtzg");
        var l = G(c);
        var d = r("0dFU");
        var f = G(d);
        var p, v, m;
        var _ = r("Ck+K");
        var h = G(_);
        r("0XX+");
        var y = r("cDcd");
        var g = G(y);
        var S = r("EH+i");
        var w = G(S);
        var b = r("9c0I");
        var E = G(b);
        var O = r("fl9y");
        var C = G(O);
        var I = r("AsEh");
        var N = G(I);
        var T = r("nsXK");
        var k = G(T);
        var D = r("q3Yw");
        var A = G(D);
        var x = r("FPs1");
        var H = r("EUxi");
        var R = G(H);
        var j = r("eTd9");
        var P = G(j);
        var M = r("aKyJ");
        var L = G(M);
        var V = r("sEGC");
        var F = G(V);
        var X = r("e+V+");
        var Y = G(X);
        var U = r("F8dh");
        var Q = r("/ubK");

        function G(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var W = {
            "../index.module.scss": {
                "search-input-wrap": "oIDDb",
                "search-bar-wrap": "_2db7F",
                "static-search-bar-wrap": "_28w9p",
                "fixed-search-bar-wrap": "_2-_fp",
                "form-search-input": "_3iajd",
                "search-input": "_2Emsu",
                "search-icon": "_3zdRA",
                "icon-clear": "_2Lh-R",
                "dropdown-container": "_15gAT",
                "autosuggest-wrap": "_2oVgr",
                "autosuggest-item-wrap": "_1PYTI",
                "store-logo": "_3gcVP",
                "store-text": "Ng7gq",
                "keyword-text": "_3hZtx",
                "category-text": "_1fwCF",
                "icon-insert-wrap": "_2PIAG",
                "ic-insert-md": "JNkko",
                "dummy-div": "_1SQvI",
                "dropdown-wrap": "_1ZtkU",
                "dropdown-title": "_3LCfJ",
                "dropdown-btn": "_3-OPL",
                "dropdown-item-wrap": "_17NKd",
                "dropdown-item": "_1XQdg",
                "plain-item-link": "_1iDV6",
                "item-link-with-cat": "_1Nm68",
                "dummy-overlay": "_1Aa1L"
            }
        };
        var J = "static-search-bar-wrap";
        var K = "fixed-search-bar-wrap";
        var B = "//ae01.alicdn.com/kf/HTB1FsINbizxK1RjSspj763S.pXa3.png";
        var q = "Search for AliExpress";
        var z = 54;
        var Z = 300;
        var $ = (v = p = function(e) {
            (0, f.default)(t, e);

            function t(e) {
                (0, i.default)(this, t);
                var r = (0, l.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                m.call(r);
                var a = r.props.i18n;
                r.spmC = "search-bar";
                r.lastScrollTop = 0;
                r.initialOffsetTop = 0;
                r._form = g.default.createRef();
                r.historyStore = new L.default(Q.HISTORY_STORE_NAME, Q.MAX_HISTORY_COUNT);
                r.historyStore.syncStateFromLocal();
                r.state = {
                    searchBarClass: J,
                    placeholderValue: a({
                        key: "searchBarInput"
                    }) || q,
                    discoveryItems: [],
                    showDiscovery: false,
                    inputValue: "",
                    autoSuggestDataObj: {},
                    isHistoryEmpty: r.historyStore.isHistoryEmpty(),
                    offTop: 0
                };
                r.onScroll = (0, A.default)(r._onScroll, U.THROTTLE_SCROLL);
                r.onSetAutoSearch = (0, x.debounce)(r._onSetAutoSearch, Z);
                return r
            }(0, s.default)(t, [{
                key: "componentDidMount",
                value: function r() {
                    window.addEventListener("scroll", this.onScroll);
                    this.bindCloseDownloadBar();
                    this.getShadingAndDiscoveryItem()
                }
            }, {
                key: "componentWillUnmount",
                value: function a() {
                    window.removeEventListener("scroll", this.onScroll)
                }
            }, {
                key: "render",
                value: function o() {
                    var e = this.state,
                        t = e.searchBarClass,
                        r = e.offTop,
                        a = e.placeholderValue,
                        o = e.inputValue,
                        i = e.showDiscovery;
                    var u = t === J ? "static-sb-wrapper" : "fixed-sb-wrapper";
                    var s = t === J ? "0" : this.initialOffsetTop + z;
                    return g.default.createElement("div", {
                        className: "_2db7F"
                    }, g.default.createElement("div", (0, n.default)({
                        "data-role": this.spmC
                    }, U.DAILY_ANALYTIC, {
                        "data-spm": this.spmC,
                        style: {
                            top: r
                        },
                        className: (0, h.default)(t, W)
                    }), g.default.createElement("div", {
                        "data-role": u,
                        className: "flex align-center oIDDb",
                        onClick: this.showDiscovery
                    }, g.default.createElement("img", (0, n.default)({
                        className: "_3zdRA",
                        src: B
                    }, U.DAILY_ANALYTIC, Q.EXP_COMMON_CONFIG.SEARCH_ICON, {
                        exp_product: a,
                        onClick: this.handleSubmit
                    })), g.default.createElement("form", {
                        ref: this._form,
                        className: "flex align-center _3iajd",
                        method: "GET",
                        action: Q.FORM_SEARCH_ACTION,
                        onSubmit: this.handleSubmit
                    }, g.default.createElement("input", {
                        className: "_2Emsu",
                        type: "text",
                        onChange: this.onInputChange,
                        value: o,
                        placeholder: (0, R.default)(a)
                    }), g.default.createElement("input", {
                        type: "hidden",
                        name: "keywords",
                        value: o || (0, R.default)(a)
                    }), o.length > 0 && g.default.createElement("i", {
                        className: "ic-md ic-close-md clear-show _2Lh-R",
                        id: "search-clear",
                        onClick: this.clearInput
                    }))), i ? this.renderDropdown() : null), g.default.createElement("div", {
                        className: "_1SQvI",
                        style: {
                            height: s + "px"
                        }
                    }))
                }
            }]);
            return t
        }(g.default.PureComponent), m = function ee() {
            var e = this;
            this._onScroll = function() {
                var t = document.querySelector('div[data-role="' + U.DOWNLOAD_BAR_TAG + '"]');
                if (!t) return;
                var r = t.clientHeight;
                var a = window.pageYOffset;
                if (r > 0) {
                    e.initialOffsetTop = r - 4
                }
                if (e.lastScrollTop < a) {
                    if (a > e.initialOffsetTop) {
                        e.setState({
                            searchBarClass: K,
                            offTop: 0
                        })
                    }
                } else if (a > e.initialOffsetTop) {
                    e.setState({
                        searchBarClass: K,
                        offTop: e.initialOffsetTop
                    })
                } else if (a < e.initialOffsetTop) {
                    e.setState({
                        searchBarClass: J,
                        offTop: e.initialOffsetTop
                    })
                }
                e.lastScrollTop = a
            };
            this._onSetAutoSearch = function(t) {
                e.getAutoSuggest(t)
            };
            this.bindCloseDownloadBar = function() {
                document.addEventListener("closedDownloadBar", function() {
                    e.initialOffsetTop = 0;
                    e.setState({
                        searchBarClass: K,
                        offTop: 0
                    })
                })
            };
            this.showDiscovery = function() {
                if (e.state.showDiscovery) return;
                document.body.style.overflow = "hidden";
                e.setState({
                    showDiscovery: true
                })
            };
            this.hideDiscovery = function() {
                document.body.style.overflow = "auto";
                e.getShadingAndDiscoveryItem();
                e.setState({
                    showDiscovery: false
                })
            };
            this.getShadingAndDiscoveryItem = function() {
                (0, k.default)("" + Q.DISCOVERY_ENDPOINT).then(function(e) {
                    return e.json()
                }).then(function(t) {
                    if (t.data) {
                        e.setState({
                            placeholderValue: t.data.searchShadingEntry && t.data.searchShadingEntry.placeholder,
                            discoveryItems: t.data.searchDiscoveryEntryList || []
                        })
                    }
                })
            };
            this.getDiscoveryItem = function() {
                (0, P.default)({
                    pageArea: "searchdiscovery",
                    buttonType: "Search_Discovery_Refresh_Click",
                    objectType: "button"
                });
                (0, k.default)(Q.DISCOVERY_ENDPOINT + "?modules=discovery").then(function(e) {
                    return e.json()
                }).then(function(t) {
                    if (!(0, Y.default)(t.data)) {
                        e.setState({
                            discoveryItems: t.data.searchDiscoveryEntryList || []
                        })
                    }
                })
            };
            this.getAutoSuggest = function(t) {
                if (e.state.inputValue) {
                    (0, k.default)("" + Q.AUTOSUGGEST_ENDPOINT + t).then(function(e) {
                        return e.json()
                    }).then(function(t) {
                        if (!(0, Y.default)(t.data)) {
                            e.setState({
                                autoSuggestDataObj: t.data || {}
                            })
                        }
                    })
                } else {
                    e.clearInput()
                }
            };
            this.onInputChange = function(t) {
                var r = t.target.value;
                e.setState({
                    inputValue: r
                });
                e.onSetAutoSearch(r)
            };
            this.clearInput = function() {
                e.setState({
                    inputValue: "",
                    autoSuggestDataObj: {}
                })
            };
            this.handleSubmit = function(t) {
                t.preventDefault();
                var r = e.state,
                    a = r.placeholderValue,
                    n = r.inputValue,
                    o = r.showDiscovery;
                if (o) {
                    var i = n || (0, R.default)(a);
                    (0, P.default)({
                        pageArea: "searchbox",
                        buttonType: "Shading_Keyword_Click",
                        objectType: "button",
                        objectValue: i
                    });
                    e._form.current.submit();
                    e.storeHistory({
                        keyWord: i
                    })
                }
            };
            this.clearHistory = function() {
                e.setState({
                    isHistoryEmpty: true
                });
                e.historyStore.clearHistory()
            };
            this.storeHistory = function(t) {
                var r = t.keyWord,
                    a = t.catName,
                    n = t.icon,
                    o = t.action;
                e.historyStore.addHistory(new F.default(r, a, n, o));
                e.historyStore.storeHistory()
            };
            this.renderDropdown = function() {
                var t = e.state,
                    r = t.autoSuggestDataObj,
                    a = t.discoveryItems,
                    n = t.isHistoryEmpty;
                var o = e.props.i18n;
                var i = e.historyStore.getAllHistory();
                return g.default.createElement("div", {
                    className: "_15gAT"
                }, g.default.createElement("div", {
                    id: "discovery-wrap",
                    className: "_1ZtkU"
                }, g.default.createElement(N.default, {
                    i18n: o,
                    isHistoryEmpty: n,
                    clearHistory: e.clearHistory,
                    historyItems: i,
                    storeHistory: e.storeHistory
                }), g.default.createElement(C.default, {
                    i18n: o,
                    getDiscoveryItem: e.getDiscoveryItem,
                    discoveryItems: a,
                    storeHistory: e.storeHistory
                })), g.default.createElement("ul", {
                    className: "_2oVgr"
                }, g.default.createElement(E.default, {
                    autoSuggestDataObj: r,
                    storeHistory: e.storeHistory
                })), g.default.createElement("div", {
                    className: "_1Aa1L",
                    onClick: e.hideDiscovery
                }))
            }
        }, v);
        $.propTypes = {
            i18n: w.default.func.isRequired
        };
        t.default = $
    },
    S1C0: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var a = t[r];
                    a.enumerable = a.enumerable || false;
                    a.configurable = true;
                    if ("value" in a) a.writable = true;
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, r, a) {
                if (r) e(t.prototype, r);
                if (a) e(t, a);
                return t
            }
        }();
        t.hasCookies = l;
        var n = r("wNut");
        var o = i(n);

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var s = "lS_";
        var c = function() {
            function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                u(this, e);
                this.cookieOptions = Object.assign({
                    path: "/"
                }, t);
                s = t.prefix === undefined ? s : t.prefix
            }
            a(e, [{
                key: "getItem",
                value: function t(e) {
                    var t = o.default.parse(document.cookie);
                    if (!t || !t.hasOwnProperty(s + e)) {
                        return null
                    }
                    return t[s + e]
                }
            }, {
                key: "setItem",
                value: function r(e, t) {
                    document.cookie = o.default.serialize(s + e, t, this.cookieOptions);
                    return t
                }
            }, {
                key: "removeItem",
                value: function n(e) {
                    var t = Object.assign({}, this.cookieOptions, {
                        maxAge: -1
                    });
                    document.cookie = o.default.serialize(s + e, "", t);
                    return null
                }
            }, {
                key: "clear",
                value: function i() {
                    var e = o.default.parse(document.cookie);
                    for (var t in e) {
                        if (t.indexOf(s) === 0) {
                            this.removeItem(t.substr(s.length))
                        }
                    }
                    return null
                }
            }]);
            return e
        }();
        t.default = c;

        function l() {
            var e = new c;
            try {
                var t = "__test";
                e.setItem(t, "1");
                var r = e.getItem(t);
                e.removeItem(t);
                return r === "1"
            } catch (a) {
                return false
            }
        }
    },
    aKyJ: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("6ato");
        var n = u(a);
        var o = r("tjqE");
        var i = u(o);

        function u(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var s = function c(e) {
            var t = this;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            (0, n.default)(this, c);
            this._findHistory = function(e) {
                for (var r = 0; r < t.historyQueue.length; r++) {
                    if (t.historyQueue[r].keyWord === e.keyWord) {
                        return r
                    }
                }
                return -1
            };
            this._removeDuplicates = function(e) {
                var r = t._findHistory(e);
                if (r !== -1) {
                    t.historyQueue.splice(r, 1);
                    t.currentCount -= 1
                }
            };
            this.getAllHistory = function() {
                return t.historyQueue
            };
            this.isHistoryEmpty = function() {
                return !t.currentCount
            };
            this.syncStateFromLocal = function() {
                var e = i.default.getItem(t.storeName);
                if (!e) return;
                t.historyQueue = JSON.parse(e);
                t.currentCount = t.historyQueue.length;
                if (t.currentCount > t.maxHistoryCount) {
                    t.historyQueue = t.historyQueue.slice(0, t.maxHistoryCount);
                    t.currentCount = t.maxHistoryCount
                }
            };
            this.addHistory = function(e) {
                if (!e || !e.keyWord) return;
                t._removeDuplicates(e);
                if (t.currentCount >= t.maxHistoryCount) {
                    t.historyQueue.pop()
                } else {
                    t.currentCount += 1
                }
                t.historyQueue.unshift(e)
            };
            this.storeHistory = function() {
                i.default.setItem(t.storeName, JSON.stringify(t.historyQueue))
            };
            this.clearHistory = function() {
                i.default.removeItem(t.storeName);
                t.historyQueue = [];
                t.currentCount = 0
            };
            this.storeName = e;
            this.maxHistoryCount = r;
            this.currentCount = 0;
            this.historyQueue = []
        };
        t.default = s
    },
    cDcd: function(e, t) {
        e.exports = window.React
    },
    d9lH: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.default = function(e) {
            return e ? Object.keys(e).map(function(t) {
                return t + "=" + e[t]
            }).join("&") : ""
        }
    },
    "e+V+": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.default = function(e) {
            return Object.keys(e).length === 0
        }
    },
    eTd9: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = s(a);
        var o = r("5oy4");
        var i = s(o);
        var u = r("/ubK");

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.default = function(e) {
            i.default.getInstance().click((0, n.default)({
                projectId: u.PROJECT_ID
            }, e))
        }
    },
    faye: function(e, t) {
        e.exports = window.ReactDOM
    },
    fl9y: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = p(a);
        var o = r("EH+i");
        var i = p(o);
        var u = r("cDcd");
        var s = p(u);
        var c = r("eTd9");
        var l = p(c);
        var d = r("F8dh");
        var f = r("/ubK");
        r("0XX+");

        function p(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var v = function m(e) {
            var t = e.i18n,
                r = e.getDiscoveryItem,
                a = e.discoveryItems,
                o = a === undefined ? [] : a,
                i = e.storeHistory;
            return s.default.createElement(u.Fragment, null, s.default.createElement("div", {
                className: "flex justify-space-between align-center"
            }, s.default.createElement("span", {
                className: "_3LCfJ"
            }, t({
                key: "discoverMore",
                fallback: "DISCOVER MORE"
            })), s.default.createElement("span", {
                className: "_3-OPL",
                onClick: r
            }, t({
                key: "refresh",
                fallback: "REFRESH"
            }))), s.default.createElement("ul", {
                className: "flex _17NKd"
            }, o.map(function(e) {
                return s.default.createElement("li", (0, n.default)({
                    className: "_1XQdg"
                }, d.DAILY_ANALYTIC, f.EXP_COMMON_CONFIG.DISCOVERY, {
                    exp_product: e.discoveryWords
                }), s.default.createElement("a", {
                    className: "_1iDV6",
                    href: e.searchAction,
                    onClick: function t() {
                        (0, l.default)({
                            pageArea: "searchdiscovery",
                            buttonType: "Search_Discovery_Click",
                            objectType: "button",
                            objectValue: e.discoveryWords
                        });
                        i({
                            keyWord: e.discoveryWords
                        })
                    }
                }, e.discoveryWords))
            })))
        };
        v.propTypes = {
            i18n: i.default.func.isRequired,
            getDiscoveryItem: i.default.func.isRequired,
            discoveryItems: i.default.array,
            storeHistory: i.default.func
        };
        t.default = s.default.memo(v)
    },
    sEGC: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("6ato");
        var n = o(a);

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var i = function u(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            (0, n.default)(this, u);
            this.keyWord = e;
            this.catName = t;
            this.icon = r;
            this.action = a
        };
        t.default = i
    },
    tjqE: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.MemoryStorage = t.CookieStorage = t.isSupported = t.storage = undefined;
        var a = r("ziWM");
        var n = c(a);
        var o = r("S1C0");
        var i = c(o);
        var u = r("0Rf0");
        var s = c(u);

        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var l = null;
        if ((0, n.default)("localStorage")) {
            t.storage = l = window.localStorage
        } else if ((0, n.default)("sessionStorage")) {
            t.storage = l = window.sessionStorage
        } else if ((0, n.default)("cookieStorage")) {
            t.storage = l = new i.default
        } else {
            t.storage = l = new s.default
        }
        t.default = l;
        t.storage = l;
        t.isSupported = n.default;
        t.CookieStorage = i.default;
        t.MemoryStorage = s.default
    },
    wNut: function(e, t, r) {
        "use strict";
        t.parse = u;
        t.serialize = s;
        var a = decodeURIComponent;
        var n = encodeURIComponent;
        var o = /; */;
        var i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

        function u(e, t) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string")
            }
            var r = {};
            var n = t || {};
            var i = e.split(o);
            var u = n.decode || a;
            for (var s = 0; s < i.length; s++) {
                var l = i[s];
                var d = l.indexOf("=");
                if (d < 0) {
                    continue
                }
                var f = l.substr(0, d).trim();
                var p = l.substr(++d, l.length).trim();
                if ('"' == p[0]) {
                    p = p.slice(1, -1)
                }
                if (undefined == r[f]) {
                    r[f] = c(p, u)
                }
            }
            return r
        }

        function s(e, t, r) {
            var a = r || {};
            var o = a.encode || n;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid")
            }
            if (!i.test(e)) {
                throw new TypeError("argument name is invalid")
            }
            var u = o(t);
            if (u && !i.test(u)) {
                throw new TypeError("argument val is invalid")
            }
            var s = e + "=" + u;
            if (null != a.maxAge) {
                var c = a.maxAge - 0;
                if (isNaN(c)) throw new Error("maxAge should be a Number");
                s += "; Max-Age=" + Math.floor(c)
            }
            if (a.domain) {
                if (!i.test(a.domain)) {
                    throw new TypeError("option domain is invalid")
                }
                s += "; Domain=" + a.domain
            }
            if (a.path) {
                if (!i.test(a.path)) {
                    throw new TypeError("option path is invalid")
                }
                s += "; Path=" + a.path
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid")
                }
                s += "; Expires=" + a.expires.toUTCString()
            }
            if (a.httpOnly) {
                s += "; HttpOnly"
            }
            if (a.secure) {
                s += "; Secure"
            }
            if (a.sameSite) {
                var l = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch (l) {
                    case true:
                        s += "; SameSite=Strict";
                        break;
                    case "lax":
                        s += "; SameSite=Lax";
                        break;
                    case "strict":
                        s += "; SameSite=Strict";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid")
                }
            }
            return s
        }

        function c(e, t) {
            try {
                return t(e)
            } catch (r) {
                return e
            }
        }
    },
    ziWM: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.default = i;
        var a = r("S1C0");
        var n = "__test";

        function o(e) {
            try {
                var t = window[e];
                t.setItem(n, "1");
                t.removeItem(n);
                return true
            } catch (r) {
                return false
            }
        }

        function i() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "localStorage";
            var t = String(e).replace(/storage$/i, "").toLowerCase();
            if (t === "local") {
                return o("localStorage")
            }
            if (t === "session") {
                return o("sessionStorage")
            }
            if (t === "cookie") {
                return (0, a.hasCookies)()
            }
            if (t === "memory") {
                return true
            }
            throw new Error("Storage method `" + e + "` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.")
        }
    }
});