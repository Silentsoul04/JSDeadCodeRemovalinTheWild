! function(u) {
    function t(t) {
        for (var e, n, r = t[0], o = t[1], i = 0, s = []; i < r.length; i++) n = r[i], a[n] && s.push(a[n][0]), a[n] = 0;
        for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (u[e] = o[e]);
        for (c && c(t); s.length;) s.shift()()
    }
    var n = {},
        a = {
            0: 0
        };

    function l(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return u[t].call(e.exports, e, e.exports, l), e.l = !0, e.exports
    }
    l.e = function(i) {
        var t, e = [],
            n = a[i];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var r = new Promise(function(t, e) {
                    n = a[i] = [t, e]
                });
                e.push(n[2] = r);
                var o, s = document.getElementsByTagName("head")[0],
                    u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, l.nc && u.setAttribute("nonce", l.nc), u.src = l.p + "" + ({}[t = i] || t) + "." + {
                    2: "19edb718",
                    3: "2889cf57",
                    4: "330452a8",
                    5: "6da135ed",
                    6: "65012c9c",
                    7: "3a7a7909",
                    8: "2b7d0366",
                    9: "165c59f9",
                    10: "9b79e5c6",
                    11: "5074473f"
                }[t] + ".js", o = function(t) {
                    u.onerror = u.onload = null, clearTimeout(c);
                    var e = a[i];
                    if (0 !== e) {
                        if (e) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src,
                                o = new Error("Loading chunk " + i + " failed.\n(" + n + ": " + r + ")");
                            o.type = n, o.request = r, e[1](o)
                        }
                        a[i] = void 0
                    }
                };
                var c = setTimeout(function() {
                    o({
                        type: "timeout",
                        target: u
                    })
                }, 12e4);
                u.onerror = u.onload = o, s.appendChild(u)
            }
        return Promise.all(e)
    }, l.m = u, l.c = n, l.d = function(t, e, n) {
        l.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, l.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function(e, t) {
        if (1 & t && (e = l(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (l.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) l.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, l.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "/js/web/sugNew/", l.oe = function(t) {
        throw console.error(t), t
    };
    var e = window.webpackJsonpSug = window.webpackJsonpSug || [],
        r = e.push.bind(e);
    e.push = t, e = e.slice();
    for (var o = 0; o < e.length; o++) t(e[o]);
    var c = r;
    l(l.s = 12)
}([function(t, e, n) {
    "use strict";

    function l() {}
    var f = {
        json: "application/json",
        xml: "application/xml, text/xml"
    };

    function r() {}

    function o(t, e) {
        t && (t.style.display = e)
    }

    function i(t) {
        var e = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document).querySelectorAll(t);
        return 1 < e.length ? e : e[0]
    }

    function s(t) {
        var e, n, r = document.cookie;
        return r && t && 0 <= (e = r.indexOf(t + "=")) ? (e = e + t.length + 1, n = r.indexOf(";", e), r.substring(e, -1 == n ? r.length : n)) : ""
    }

    function u(t) {
        return encodeURIComponent(t)
    }

    function c() {
        var t, e, n = "";
        for (t = 0; t < 32; t++) e = 16 * Math.random() | 0, 8 !== t && 12 !== t && 16 !== t && 20 !== t || (n += "-"), n += (12 === t ? 4 : 16 === t ? 3 & e | 8 : e).toString(16);
        return n
    }

    function a(t) {
        var e = document.createElement("div");
        return e.appendChild(document.createTextNode(t)), e.innerHTML
    }

    function p(t) {
        var e = document.createElement("div");
        e.innerHTML = t;
        var n = e.innerText || e.textContent;
        return e = null, n
    }

    function d(t, e) {
        var n = i("#".concat(t));
        n && document.body.removeChild(n), (n = document.createElement("script")).id = t, n.src = e, document.body.appendChild(n)
    }

    function h() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            e = 1 < arguments.length ? arguments[1] : void 0,
            n = 2 < arguments.length ? arguments[2] : void 0;
        ! function(n) {
            var r, t, e, o = n.dataType,
                i = f[o],
                s = {},
                u = new window.XMLHttpRequest,
                c = u.setRequestHeader;
            for (var a in e = i || "*/*", s[(t = "Accept").toLowerCase()] = [t, e], (i = n.mimeType || i) && (-1 < i.indexOf(",") && (i = i.split(",", 2)[0]), u.overrideMimeType && u.overrideMimeType(i)), u.onreadystatechange = function() {
                    if (4 == u.readyState) {
                        u.onreadystatechange = l, clearTimeout(r);
                        var t, e = !1;
                        if (200 <= u.status && u.status < 300 || 304 == u.status) {
                            if (o = o || u.getResponseHeader("content-type"), "arraybuffer" == u.responseType || "blob" == u.responseType) t = u.response;
                            else {
                                t = u.responseText;
                                try {
                                    "xml" == o ? t = u.responseXML : "json" == o && (t = /^\s*$/.test(t) ? null : JSON.parse(t))
                                } catch (t) {
                                    e = t
                                }
                                if (e) return console.log(e, "parsererror")
                            }
                            n.success(t)
                        } else n.error("xhr failed: ".concat(u.status))
                    }
                }, u.open("GET", n.url, !0), s) c.apply(u, s[a]);
            0 < n.timeout && (r = setTimeout(function() {
                u.onreadystatechange = l, u.abort(), console.log("xhr failed: ".concat(u.status)), clearTimeout(r)
            }, n.timeout)), u.send(null)
        }({
            url: t.url + "&t=" + Date.now(),
            dataType: t.dataType || "json",
            success: e || r,
            error: n || r
        })
    }
    n.d(e, "j", function() {
        return o
    }), n.d(e, "g", function() {
        return i
    }), n.d(e, "f", function() {
        return s
    }), n.d(e, "d", function() {
        return u
    }), n.d(e, "e", function() {
        return c
    }), n.d(e, "i", function() {
        return a
    }), n.d(e, "h", function() {
        return p
    }), n.d(e, "b", function() {
        return d
    }), n.d(e, "a", function() {
        return h
    });
    e.c = {
        formatQuery: function(t) {
            var r = {};
            return (t || "").split("&").forEach(function(t) {
                var e = (t = t.split("="))[0],
                    n = t[1] || "";
                if (e) try {
                    r[e] = decodeURIComponent(n.replace(/\+/g, "%20"))
                } catch (t) {
                    r[e] = n
                }
            }), r
        },
        params: function(t) {
            var e = [];
            for (var n in t = t || {}) e.push(n + "=" + encodeURIComponent(t[n]));
            return e.join("&")
        },
        getOffsetTop: function(t) {
            var e = 0;
            if (t.offsetParent)
                for (; e += t.offsetTop, t.offsetParent;) t = t.offsetParent;
            else t.y && (e += t.y);
            return e
        },
        elecontains: function(t, e) {
            if (null != t && null != e) {
                if (t == e) return !0;
                for (var n = t.getElementsByTagName(e.tagName), r = 0; r < n.length; r++)
                    if (n[r] == e) return !0
            }
            return !1
        },
        extend: function() {
            var t, e = arguments.length,
                n = arguments[0];
            if (1 < e)
                for (var r = 1; r < e; r++)
                    for (var o in t = arguments[r]) t.hasOwnProperty(o) && (n[o] = t[o]);
            return n
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    }), n.d(e, "f", function() {
        return i
    }), n.d(e, "b", function() {
        return s
    }), n.d(e, "d", function() {
        return u
    }), n.d(e, "c", function() {
        return c
    }), n.d(e, "e", function() {
        return a
    }), n.d(e, "g", function() {
        return l
    }), n.d(e, "h", function() {
        return f
    });
    var r = n(0),
        o = !!Object(r.f)("wapsogou_qq_nickname"),
        i = Object(r.f)("wuid"),
        s = !!window.isNeedEncrypt,
        u = window.sogou = window.sogou || {},
        c = window.navigator.cookieEnabled && window.localStorage,
        a = 10;
    var l = {
            curQuery: "",
            localStorage: function() {
                return JSON.parse(c && c.getItem("hQ") || "[]")
            },
            cache: {},
            vr: "",
            currentSug: []
        },
        f = {}
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    }), n.d(e, "b", function() {
        return u
    }), n.d(e, "c", function() {
        return c
    });
    var r = n(1),
        i = n(0),
        o = window.uigs_para || {},
        s = {
            uigs_productid: "suggwap",
            type: "sugg",
            sugtype: "web",
            source: "wap_index" == o.type ? "index" : "result",
            sessionuuid: Object(i.e)(),
            pvuuid: Object(i.e)(),
            abtest: o.abtest,
            iploc: Object(i.f)("iploc"),
            userid: Object(i.f)("wuid"),
            login_uid: o.login_uid,
            resolution: "wap_index" == o.type ? o.resolution : o.scrnwi + "*" + o.scrnhi,
            suguuid: Object(i.e)(),
            query: "",
            pid: "" == o.pid ? "sogouwap" : o.pid
        },
        u = {
            act: "show_pos",
            qingqiu: 0,
            show: 0,
            hotword: 0,
            history: 0,
            result_his: 0,
            history_pos: "",
            shortanswer: "",
            result_pos: "",
            result_star: 0,
            result_end: 0,
            hisspecil_pos: "",
            hisspecil_star: 0,
            hisspecil_end: 0,
            sugvr: 0,
            sugvrtype: "",
            sugvrtplid: "",
            sugvrid: "",
            sugvrdesc: "",
            history_more: r.a ? 1 : 0,
            history_clearall: 0,
            noresult: 0,
            submit: 0,
            querylength: 0,
            clktype: "",
            clkpos: "",
            clkquery: "",
            clklink: ""
        };

    function c(t, e, n) {
        var r = i.c.extend({}, s, t || {}, n ? {
                uigs_productid: "wapapp"
            } : {}),
            o = "//pb.sogou.com/" + (e || "pv") + ".gif?";
        (new Image).src = o + i.c.params(r) + "&_t=" + Date.now()
    }
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "",
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, "")
        }
        with(obj) items.forEach(function(t, e) {
            if (__p += '\n    <li class="' + (null == (__t = liClass) ? "" : __t) + '" data-sugnum="' + (null == (__t = sugnum) ? "" : __t) + '" data-text="' + (null == (__t = encodeURIComponent(t.text)) ? "" : __t) + '" data-type="' + (null == (__t = t.type || type) ? "" : __t) + '" data-query="' + (null == (__t = encodeURIComponent(query)) ? "" : __t) + '" data-pos="' + (null == (__t = vr ? e + 2 : e + 1) ? "" : __t) + '">\n        <p>\n            \x3c!-- 渲染热词 --\x3e\n            ', "hotword" === type) __p += "\n                " + (null == (__t = e + 1) ? "" : __t) + "<span>" + (null == (__t = t.text) ? "" : __t) + "</span>\n            \x3c!-- 渲染历史记录 --\x3e\n            ";
            else if ("history" === type) __p += '\n                <strong class="clamp3">' + (null == (__t = t.text) ? "" : __t) + "</strong>\n            \x3c!-- 普通结果 --\x3e\n            ";
            else {
                if (__p += "\n                ", t.answer) var n = "question";
                __p += "\n                \x3c!-- (query命中sug) 写一行否则多余空格 --\x3e\n                ", t.left || t.right ? __p += "<strong>" + (null == (__t = t.left) ? "" : __t) + "</strong>" + (null == (__t = query) ? "" : __t) + '<strong class="' + (null == (__t = n || "") ? "" : __t) + '">' + (null == (__t = t.right) ? "" : __t) + "</strong>" : __p += '<strong class="' + (null == (__t = n || "") ? "" : __t) + '">' + (null == (__t = t.text) ? "" : __t) + "</strong>", t.answer && (__p += "<span>" + (null == (__t = "答:&nbsp" + t.answer) ? "" : __t) + "</span>"), t.hotNew && (__p += '<span class="tag-red">热</span>'), __p += "\n            "
            }
            __p += "\n        </p>\n        \x3c!-- 历史记录时列表右方是否登陆显示 --\x3e\n        ", "history" === type && IS_LOGIN ? __p += '\n            <div data-action="clearOne" class="sugg-del">\n                <span data-action="clearOne"></span>\n        ' : __p += '\n            <div data-action="update" class="sugg-arrow">\n                <span data-action="update"></span>\n        ', __p += "\n            </div>\n    </li>\n"
        }), __p += '\n\x3c!-- 底部 --\x3e\n<li class="sugg-last">\n    \x3c!-- 历史记录未登录 --\x3e\n    ', "history" === type ? (__p += '\n        <a data-action="clear" class="del-record" href="javascript:void(0);">清除历史</a>\n        \x3c!-- 历史记录登录 --\x3e\n        ', IS_LOGIN && (__p += '\n            <a data-action="more" href="/web/usercenter/search_history.jsp" class="more-record">更多历史</a>\n        '), __p += "\n    \x3c!-- 热词和sug --\x3e\n    ") : __p += '\n        <a  data-action="fankui" href="//fankui.sogou.com/wap/fbrecommendword.php" target="_blank" class="report-word">举报推荐词</a>\n    ', __p += '\n    <a data-action="close" class="s_close" href="javascript:void(0);">' + (null == (__t = "关闭") ? "" : __t) + "</a>\n</li>";
        return __p
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var i = n(0),
        s = n(1);

    function r(n) {
        var r = {},
            t = s.g.currentSug,
            o = s.g.localStorage();
        t.forEach(function(t) {
            t.q === n && (r = t)
        }), r.q = n, r.b = !0, o.forEach(function(t, e) {
            t.b && t.q == n && (r = t, o.splice(e, 1))
        }), o.unshift(r), 10 < o.length && o.pop(), s.c && s.c.setItem("hQ", JSON.stringify(o)), Object(i.b)("pinyin", "/sugg_json?type=getpinyin&cb=window.sogou.sugpy&key=" + Object(i.d)(n))
    }
    s.d.sugpy = function(t) {
        var e, n, r = t && t[1] && t[1][0],
            o = s.g.localStorage();
        for (e = o.length; e--;)(n = o[e].q) == t[0] && (o[e].p = r || n, s.c && s.c.setItem("hQ", JSON.stringify(o)))
    }
}, function(e, t) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(t) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function(t) {
            return n(t)
        } : e.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(t)
    }
    e.exports = r
}, function(t, e, n) {
    "use strict";
    var E = n(0),
        P = n(2),
        C = n(1),
        A = n(4),
        x = navigator.userAgent,
        B = (window.uigs_para || {}).needEncrypt,
        L = !1;

    function r(i) {
        var s = i.fromPage,
            u = i.clearId,
            e = i.noToTop,
            n = i.isInternationalEntranceOn,
            r = "searchList_iphone_footer" == s,
            o = r ? Object(E.g)("#footer").style : {},
            c = Object(E.g)("#" + u),
            a = !1,
            t = this.addEvent.bind(this),
            l = this,
            f = this.sugBox = i.sugBox,
            p = this.vrBox = i.ulList[0],
            d = this.submitForm = i.submitForm,
            h = this.inputElement = i.inputElement,
            g = this.addCommParams.bind(this),
            v = this.handler;

        function _() {
            if (-1 === x.indexOf("UCBrowser")) {
                var t = E.c.getOffsetTop(h) - (n ? 30 : 5);
                !e && window.scrollTo(0, t)
            }
        }

        function y(t) {
            var e = t && t.target && t.target.value.toLowerCase().trim() || h.value.trim(),
                n = l.history,
                r = l.result;
            if ("" == (C.g.curQuery = e)) P.a.pvuuid = Object(E.e)(), Object(E.j)(c, "none"), Object(E.j)(p, "none"), C.a ? n.fetch() : n.paint();
            else {
                Object(E.j)(c, "block");
                var o = C.g.cache[e];
                o ? r.paint(o, 0) : r.fetch(e, i)
            }
        }
        if (this.fromPage = s, t(f, "click", v), document.activeElement == h) {
            var b = Object(E.g)("#pan_sogou_mic_con"),
                m = setTimeout(function() {
                    _(), clearTimeout(m)
                }, 50);
            b && (b.style.display = "none")
        }
        t(h, "focus", function(t) {
            var e = setTimeout(function() {
                L && (L = !1, _(), y(t), clearTimeout(e))
            }, 50);
            r && (x && -1 != x.toLowerCase().indexOf("sogousearch") ? o.paddingBottom = "330px" : o.paddingBottom = "145px")
        }), t(h, "blur", function() {
            if (r) var t = setTimeout(function() {
                clearTimeout(t), o.paddingBottom = ""
            }, 100)
        }), t(h, "compositionstart", function() {
            a = !0
        }), t(h, "compositionend", function(t) {
            a = !1, y(t)
        }), t(h, "input", function(t) {
            a || y(t)
        });
        var w = function(t) {
            c = Object(E.g)("#" + u);
            var e = !1,
                n = t.target,
                r = null != c && c.parentNode.contains(n),
                o = n == h;
            if (n && (h == n || f.contains(n) || r) && (e = !0), e) {
                if (r) {
                    var i = setTimeout(function() {
                        h.focus(), L = !0, clearTimeout(i)
                    }, 50);
                    h.value = ""
                }
            } else Object(E.j)(f, "none"), h.blur();
            o && (L = !0, h.focus()), "foot_submit_btn" === n.id && (t.preventDefault(), d.submit())
        };
        t(d, "submit", function(t) {
            var e = E.c.extend({}, P.b),
                n = h.value;
            if (n && "" != n.trim()) {
                Object(P.c)({
                    type: "sgcount",
                    stype: i.fromPage,
                    searchType: "direct"
                }, !0);
                var r = l.result.querys,
                    o = r && r[n] || "";
                "index_iphone" === s && o && B ? (I(d, ["pg=webSearchList", "eqs=" + o]), h.removeAttribute("name")) : g(n), Object(A.a)(n), e.submit = 1, e.clktype = "submitbtn", e.querylength = n.length, Object(P.c)(e, "cl")
            } else "index" == P.a.source && t.preventDefault()
        });
        var j = document.body;
        t(j, "toucstart", w), t(j, "click", w), t(j, "touchend", w)
    }

    function I(u, t) {
        t = t || [];
        var c = document.createDocumentFragment();
        t.forEach(function(t) {
            var e = t.split("="),
                n = e[0],
                r = e[1],
                o = "input[name=".concat(n, "]"),
                i = Object(E.g)(o, u);
            if (r && i) i.value = r;
            else {
                var s = document.createElement("input");
                s.type = "hidden", s.name = n, s.value = r, c.appendChild(s)
            }
        }), u.appendChild(c)
    }
    r.prototype = {
        addEvent: function(t, e, n) {
            t.addEventListener(e, n.bind(this), !1)
        },
        handler: function(t) {
            var o = this.result,
                i = this.fromPage,
                s = this.addCommParams.bind(this),
                e = this.history,
                u = this.inputElement,
                c = this.submitForm,
                n = this.sugBox,
                r = Object(E.g)("ul", n),
                a = t.target,
                l = r[1],
                f = a.parentNode.parentNode,
                p = l.children,
                d = (a.dataset || {}).action,
                h = function t(e) {
                    var n = e.parentNode,
                        r = e.dataset || {};
                    r.sugnum || null === n || (r = t(n));
                    return r
                }(a),
                g = h.text,
                v = h.url,
                _ = h.pos,
                y = h.type,
                b = h.appkey,
                m = h.query,
                w = h.vrid,
                j = h.tplid,
                x = h.urltype,
                O = h.sugnum,
                T = y,
                S = E.c.extend({}, P.b, {
                    clktype: y,
                    clkpos: _
                });
            if (void 0 !== g || void 0 !== d) {
                switch (g = Object(E.h)(decodeURIComponent(g)), m = Object(E.h)(decodeURIComponent(m)), "tapHeader" === d && (x = "search"), d) {
                    case "update":
                        u.focus(), L = !0, Object(E.g)("#foot_keyword").value = g || "", Object(E.g)("#keyword").value = g || "", m = g, T = "up" + y;
                        break;
                    case "close":
                        var k = setTimeout(function() {
                            Object(E.j)(n, "none"), clearTimeout(k)
                        }, 50);
                        break;
                    case "clear":
                        confirm("清除全部历史查询记录?") && (C.c && C.c.removeItem("hQ"), Object(E.j)(n, "none"), C.a && e.delete()), T = "history_clearall";
                        break;
                    case "clearOne":
                        f.parentNode.removeChild(f), p.length <= 1 && Object(E.j)(n, "none"), e.delete(g), T = "history_clearonce";
                        break;
                    case "fankui":
                        break;
                    case "more":
                        T = "history_more";
                        break;
                    default:
                        w ? (T = "sugvr", function(t, e, n, r) {
                            var o;
                            if (S.clklink = t, S.sugvr = "1", S.sugvrid = e, S.sugvrtype = y, S.sugvrtplid = n, r) {
                                var i, s, u = !1,
                                    c = 0;
                                window.location.href = "sogousearch://extension4bookrack?bkey=" + r, s = +new Date, i = setInterval(function() {
                                    u || 40 == ++c && (clearInterval(i), i = null, c = 0, +new Date - s < 1200 ? (o = "download", window.location.href = v, S.clklink = v) : (o = "toapp", S.clklink = "sogouapp"))
                                }, 20), window.onblur = function() {
                                    u = !0, clearInterval(i), i = null
                                }
                            } else "link" == t ? S.clklink = v : "search" == t && q();
                            Object(P.c)({
                                type: "sgvrnew",
                                stype: e,
                                uigstype: "cl",
                                goTo: o
                            }, "", !0)
                        }(x, w, j, b)) : q(), "tel" !== x && (Object(E.j)(n, "none"), Object(A.a)(m))
                }
                S.clktype = T, Object(P.c)(S, "cl")
            }

            function q() {
                var t = "index_iphone" === i && "result" === y && B;
                (t || I(c, ["sourceid=sugg", "sugoq=" + u.value, "sugn=" + O]), "index" == P.a.source && "hotword" == y && I(c, ["feed=hotwords"]), "hotword" == y && I(c, ["s_from=sugg_hotspot"]), "hotword" === y || "history" === y || "hishotwords" === y || t) || (S.query = m, I(c, ["sugri=" + _, "sugct=" + ("his" == y ? 2 : "VR" == y ? 1 : 0)]));
                if (m = g, t || s(m), t) {
                    var e = o.querys && o.querys[m] || "";
                    I(c, ["pg=webSearchList", "eqs=" + e]), u.removeAttribute("name")
                }
                if (window.isSoSoRedirectPid) {
                    var n = Object(E.g)("#query"),
                        r = Object(E.g)("#foot_query");
                    n && (n.value = g), r && (r.value = g)
                }
                u.value = g || "", S.clkquery = g, S.submit = 1, S.querylength = g.length, c.submit()
            }
        },
        addCommParams: function(t) {
            var e = this.result,
                n = this.inputElement,
                r = Date.now(),
                o = ["suguuid=" + P.a.suguuid, "sugsuv=" + C.f],
                i = e.types[t],
                s = e.querys[t],
                u = Object(E.g)("#s_t");
            u && (u.value = Date.now()), C.b && s ? (n.removeAttribute("name"), o.push("ekw=".concat(s))) : n.setAttribute("name", "keyword"), o.push("sugtime=" + r), i && o.push("sugclass=".concat(Object(E.d)(i))), I(this.submitForm, o)
        }
    }, e.a = r
}, function(t, e, n) {
    "use strict";
    var _ = n(1),
        y = n(0),
        b = n(2),
        r = n(3),
        m = n.n(r),
        o = "/search/history?",
        i = {
            op: "delete",
            queryFrom: "wap",
            queryPlatform: "sugg",
            sec: Object(y.d)(window.userCenterSec).toLowerCase(),
            tags: Object(y.d)("all::SEARCH_HISTORY::::::::")
        };

    function s(t) {
        this.resultBox = t.ulList[1], this.sugBox = t.sugBox
    }
    s.prototype = {
        paint: function(t) {
            var e, n = t && t[0] || {},
                r = n.subitem || [],
                o = [],
                i = r.length;
            "ok" == n.status && 0 < i && r.forEach(function(t) {
                (e = {}).q = t.query_string, e.t = t.other || "", e.b = !0, o.push(e)
            });
            var s = _.a ? o : _.g.localStorage(),
                u = y.c.extend({}, b.b, {
                    show: 1
                }),
                c = {
                    act: "show_query"
                },
                a = s.length,
                l = 0,
                f = [];
            if (0 < a) {
                s.forEach(function(t, e) {
                    if (e < _.e) {
                        var n = Object(y.i)(t.q);
                        f.push({
                            text: n
                        }), c["history" + (e + 1)] = n, l += 1
                    }
                }), u.history = l, u.history_clearall = 1;
                var p = m()({
                        vr: "",
                        items: f,
                        type: "history",
                        query: "",
                        liClass: "sugg-default",
                        sugnum: l,
                        IS_LOGIN: _.a
                    }),
                    d = window || {},
                    h = d.indexMap,
                    g = d.hotwords,
                    v = h && h.hotWords || g;
                v ? (p = this.historyHotWord.paint(v, !0) + p, this.resultBox.innerHTML = p) : this.historyHotWord.fetch(p), Object(b.c)(u), Object(b.c)(c), Object(y.j)(this.sugBox, "block")
            } else this.hotWord.fetch()
        },
        fetch: function() {
            var t = y.c.extend({}, i, {
                op: "mine"
            });
            Object(y.a)({
                url: o + y.c.params(t)
            }, this.paint.bind(this))
        },
        delete: function(t) {
            var e = y.c.extend({}, i, {
                query: t
            });
            Object(y.a)({
                url: o + y.c.params(t ? e : i)
            })
        }
    }, e.a = s
}, function(t, e, n) {
    "use strict";
    var o = n(0),
        r = n(9),
        i = n.n(r);

    function s(t) {
        this.resultBox = t.ulList[1], this.sugBox = t.sugBox
    }
    s.prototype = {
        paint: function(t, e) {
            if (!(t && Array.isArray(t) && t.length)) return "";
            t = t.slice(0, 10);
            var n = i()({
                items: t,
                type: "hishotwords"
            });
            if (e) return n || "";
            var r = this.historyStr;
            this.resultBox.innerHTML = n + r, Object(o.j)(this.sugBox, "block")
        },
        fetch: function(t) {
            this.historyStr = t, Object(o.a)({
                url: "/web/hotwords?n=10"
            }, this.paint.bind(this))
        }
    }, e.a = s
}, function(module, exports) {
    module.exports = function(obj) {
        obj || (obj = {});
        var __t, __p = "",
            __j = Array.prototype.join;

        function print() {
            __p += __j.call(arguments, "")
        }
        with(obj) __p += '<li class="sugg-hot">\n    <h4 class="text-gray fz-mid">热门搜索</h4>\n    <div class="select-tab select-tab-scroll select-tab-gray">\n        <div class="select-box">\n            <div class="select-row">\n                ', items.forEach(function(t, e) {
            __p += '\n                    <a data-sugnum="' + (null == (__t = items.length) ? "" : __t) + '" data-type="' + (null == (__t = type) ? "" : __t) + '" data-text="' + (null == (__t = t.word) ? "" : __t) + '" data-pos="' + (null == (__t = e) ? "" : __t) + '" href="javascript:void(0)"><span class="ellipsis">' + (null == (__t = t.word) ? "" : __t), "1" == t.ishot && (__p += '</span><span class="tag-red">新</span>'), __p += "\n                    </a>\n                "
        }), __p += "\n            </div>\n        </div>\n    </div>\n</li>";
        return __p
    }
}, function(t, e, n) {
    "use strict";
    var a = n(1),
        l = n(0),
        f = n(2),
        r = n(3),
        p = n.n(r),
        d = "";

    function o(t) {
        this.resultBox = t.ulList[1], this.sugBox = t.sugBox
    }
    o.prototype = {
        paint: function(t) {
            for (var e = (d = t).querySelectorAll("DOCUMENT item display form newsTitle") || [], n = e.length, r = [], o = 0, i = {
                    act: "show_query"
                }, s = 0; s < n && s < a.e; s++) {
                var u = e[s].textContent;
                r.push({
                    text: Object(l.i)(u)
                }), o += 1, i["hotword" + (s + 1)] = u
            }
            var c = p()({
                vr: "",
                items: r,
                type: "hotword",
                query: "",
                liClass: "top-list",
                sugnum: o
            });
            this.resultBox.innerHTML = c, a.g.currShow = 1, Object(l.j)(this.sugBox, "block"), Object(f.c)(l.c.extend({}, f.b, {
                show: 1,
                hotword: o
            })), Object(f.c)(i)
        },
        fetch: function() {
            var t = this.paint.bind(this);
            d ? t(d) : Object(l.a)({
                url: "/reventondc/wireless",
                dataType: "xml"
            }, t)
        }
    }, e.a = o
}, function(t, e, L) {
    "use strict";
    var I = L(1),
        M = L(0),
        N = L(2),
        n = L(3),
        H = L.n(n);

    function r(t) {
        this.types = {}, this.querys = {}, this.resultBox = t.ulList[1], this.vrBox = t.ulList[0], this.sugBox = t.sugBox, this.vr = t.vr, this.fromPage = t.fromPage, this.sugNum = 10
    }
    r.prototype = {
        paint: function(t, e) {
            var n = this,
                r = this.sugBox,
                p = this.types,
                o = this.querys,
                d = M.c.extend({}, N.b, {
                    show: 1,
                    qingqiu: e
                }),
                h = {
                    act: "show_query"
                };

            function i(t) {
                return t.slice(0, t.length - 1)
            }
            var s = t && t.vr || [],
                u = s[0] && s[0].json || [],
                c = u[0] || {};
            u = c && (c.hasOwnProperty("IsSuggestionValid") && "1" == c.IsSuggestionValid || !c.hasOwnProperty("IsSuggestionValid")) ? u : [];
            var a = c && (!c.hasOwnProperty("IQ_summary") || "18087" != c.IQ_tplid || c.IQ_summary),
                g = (u.length && a && s.length) + 0;
            if (!t || t && t.s && 0 == t.s.length && 0 === g) return I.g.currentSug = [], this.vrBox.innerHTML = "", this.resultBox.innerHTML = "", void Object(M.j)(r, "none");
            var l = this.addResultData(t);
            if (I.g.currentSug == l.s && 0 !== l.s.length) 0 == l.s.length && (!l.vr || l.vr && 0 == l.vr.length) ? Object(M.j)(r, "none") : (Object(M.j)(r, "block"), Object(N.c)(d), Object(N.c)(h));
            else {
                var v = Object(M.i)(l.q),
                    f = l.s.slice(0, 10),
                    _ = f.length;
                if (d.query = v, h.query = v, d.suguuid = I.h[v], (I.b || "index_iphone" === this.fromPage) && (o[v] = l.e, f.forEach(function(t) {
                        o[t.q] = t.e
                    })), 0 != _ || g) {
                    var y = this.sugNum,
                        b = _ <= y ? _ : y,
                        m = 0,
                        w = !1,
                        j = 0,
                        x = 0,
                        O = !1,
                        T = 0,
                        S = 0,
                        k = "",
                        q = "",
                        E = "",
                        P = "",
                        C = "",
                        A = [];
                    f.forEach(function(t, e) {
                        if (e < y - g) {
                            var n = t.q,
                                r = t.t,
                                o = t.a,
                                i = t.aT,
                                s = t.aV,
                                u = t.d,
                                c = e + (g ? 2 : 1),
                                a = u.split(";")[1],
                                l = "result",
                                f = new RegExp("(.*?)" + function(t) {
                                    if (!t) return "";
                                    for (var e = "", n = 0; n < t.length; n++) {
                                        var r = t.charAt(n); - 1 != "* . ? + $ ^ [ ] ( ) { } | \\ /".indexOf(r) && (r = "\\" + r), e += r
                                    }
                                    return e
                                }(v) + "(.*)").exec(n) || [];
                            o && (k += c + ",", C += c + "|" + n + "|" + Object(M.d)(i) + "|" + Object(M.d)(s) + ",", l = "shortanswer"), 23 == a && (l = "newsHot", d.result_hot = 1), p[n] = r, 20 == a ? (l = "hisspecil", P += c + ",", w || (j = c, w = !0), x = c) : 21 == a ? (l = "result_his", q += c + ",", m++) : (E += c + ",", O || (T = c, O = !0), S = c), A.push({
                                text: n,
                                left: f[1],
                                right: f[2],
                                answer: o,
                                hotNew: !1,
                                type: l
                            }), h[l + c] = n
                        }
                    }), d.result_his = m, d.hisspecil_star = j, d.hisspecil_end = x, d.result_star = T, d.result_end = S, d.shortanswer = i(k), d.history_pos = i(q), d.hisspecil_pos = i(P), d.result_pos = i(E), d.shortanswerdetail = i(C), 0 < g && 0 !== this.vr ? L.e(2).then(L.bind(null, 20)).then(function(t) {
                        t.paint(n.vrBox, s, v, b, d)
                    }) : (Object(M.j)(this.vrBox, "none"), Object(N.c)(d)), Object(N.c)(h);
                    var B = H()({
                        vr: g ? 1 : 0,
                        items: A,
                        type: "result",
                        query: v,
                        liClass: "sugg-default",
                        sugnum: b
                    });
                    this.resultBox.innerHTML = B, I.g.currentSug = f
                } else Object(M.j)(r, "none"), d.noresult = 1;
                Object(M.j)(r, "block")
            }
        },
        fetch: function(t, e) {
            var n = e.sugid,
                r = e.vr,
                o = e.inputId,
                i = e.fromPage,
                s = Object(M.e)(),
                u = Date.now(),
                c = uigs_para.pid,
                a = {
                    sugsuv: I.f,
                    suguuid: s,
                    sugtime: u,
                    vr: r || 1,
                    s: 1,
                    cb: "window.sug." + o,
                    source: "wapsearch"
                };
            n && (a.id = n, a.cb = a.cb + n), N.a.suguuid = s, I.h[t] = s, t = Object(M.d)(t), null != c && 0 != c.length && (a.pid = c), "index_iphone" === i ? a.encrypt = 2 : I.b && (a.encrypt = !0);
            var l = "/web/sugg/" + t + "?" + M.c.params(a);
            Object(M.b)("sug", l)
        },
        addResultData: function(t) {
            var e = t && t.q || "",
                n = t.s || [],
                r = n.length,
                o = I.g.localStorage();
            if (e && 0 < r && !t.finded) {
                var i = 0,
                    s = {};
                n.forEach(function(t, e) {
                    s[t.q] = e
                });
                for (var u = 0; u < o.length; u++) {
                    var c = o[u],
                        a = c.q,
                        l = c.b,
                        f = c.p || "";
                    if (l && a !== e && (0 == a.indexOf(e) || 0 == f.indexOf(e.toLowerCase()))) {
                        var p = e.length / a.length,
                            d = .2 <= p ? 0 : .15 <= p ? 1 : .1 <= p ? 2 : .05 <= p ? 3 : 4,
                            h = s[a];
                        if (0 <= h && n.splice(h, 1), n.splice(d, 0, c), i++, n[d].d = "0;21;0;0", 2 <= i) break
                    }
                }
                t.s = n, t.finded = !0
            }
            return t
        }
    }, e.a = r
}, function(t, e, r) {
    "use strict";
    r.r(e),
        function(e) {
            var t = r(5),
                n = r.n(t),
                v = r(0),
                _ = r(6),
                y = r(1),
                b = r(7),
                m = r(8),
                w = r(10),
                j = r(11),
                x = r(4);
            r(14).polyfill(),
                function(t) {
                    if ("object" === ("undefined" == typeof exports ? "undefined" : n()(exports)) && "object" === n()(e)) e.exports = t();
                    else if ("function" == typeof define && r(17)) define("SougSug", [], t);
                    else {
                        if ("object" !== ("undefined" == typeof exports ? "undefined" : n()(exports))) return window.SougSug = t();
                        exports.SougSug = t()
                    }
                }(function() {
                    function t(t) {
                        this.props = t
                    }
                    return window.sug = {
                        select: function() {}
                    }, t.prototype = {
                        init: function(t) {
                            var e = t || {},
                                n = e.inputId,
                                r = e.boxId,
                                o = e.sugid,
                                i = void 0 === o ? "" : o,
                                s = location.search.substr(1),
                                u = Object(v.g)("#".concat(n)),
                                c = Object(v.g)("#".concat(r)),
                                a = Object(v.g)("ul", c),
                                l = v.c.formatQuery(s).keyword || "";
                            l && (u.value = l), c.style.webkitTapHighlightColor = "rgba(0, 0, 0, 0)", u.setAttribute("autocomplete", "off"), t.inputElement = u, t.sugBox = c, t.ulList = a;
                            var f = new j.a(t),
                                p = new w.a(t),
                                d = new m.a(t),
                                h = new b.a(t),
                                g = new _.a(t);
                            h.hotWord = p, h.historyHotWord = d, g.result = f, g.history = h, f.history = h, "" != u.value.trim() && Object(x.a)(u.value), window.sug["".concat(n).concat(i || "")] = function(t) {
                                "" != t.q && (y.g.cache[t.q] = t), f.paint(t, 1)
                            }
                        }
                    }, t
                })
        }.call(this, r(13)(t))
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    (function(Q, F) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.5+7f2b526d
         */
        t.exports = function() {
            "use strict";

            function a(t) {
                return "function" == typeof t
            }
            var n = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                r = 0,
                e = void 0,
                o = void 0,
                u = function(t, e) {
                    p[r] = t, p[r + 1] = e, 2 === (r += 2) && (o ? o(d) : y())
                },
                t = "undefined" != typeof window ? window : void 0,
                i = t || {},
                s = i.MutationObserver || i.WebKitMutationObserver,
                c = "undefined" == typeof self && void 0 !== Q && "[object process]" === {}.toString.call(Q),
                l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function f() {
                var t = setTimeout;
                return function() {
                    return t(d, 1)
                }
            }
            var p = new Array(1e3);

            function d() {
                for (var t = 0; t < r; t += 2) {
                    var e = p[t],
                        n = p[t + 1];
                    e(n), p[t] = void 0, p[t + 1] = void 0
                }
                r = 0
            }
            var h, g, v, _, y = void 0;

            function b(t, e) {
                var n = this,
                    r = new this.constructor(j);
                void 0 === r[w] && H(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    u(function() {
                        return M(o, r, i, n._result)
                    })
                } else L(n, r, t, e);
                return r
            }

            function m(t) {
                if (t && "object" == typeof t && t.constructor === this) return t;
                var e = new this(j);
                return P(e, t), e
            }
            y = c ? function() {
                return Q.nextTick(d)
            } : s ? (g = 0, v = new s(d), _ = document.createTextNode(""), v.observe(_, {
                characterData: !0
            }), function() {
                _.data = g = ++g % 2
            }) : l ? ((h = new MessageChannel).port1.onmessage = d, function() {
                return h.port2.postMessage(0)
            }) : void 0 === t ? function() {
                try {
                    var t = Function("return this")().require("vertx");
                    return void 0 === (e = t.runOnLoop || t.runOnContext) ? f() : function() {
                        e(d)
                    }
                } catch (t) {
                    return f()
                }
            }() : f();
            var w = Math.random().toString(36).substring(2);

            function j() {}
            var x = void 0,
                O = 1,
                T = 2,
                S = {
                    error: null
                };

            function k(t) {
                try {
                    return t.then
                } catch (t) {
                    return S.error = t, S
                }
            }

            function q(t, e, n, r) {
                try {
                    t.call(e, n, r)
                } catch (t) {
                    return t
                }
            }

            function E(t, e, n) {
                var r, o, i, s;
                e.constructor === t.constructor && n === b && e.constructor.resolve === m ? (i = t, (s = e)._state === O ? A(i, s._result) : s._state === T ? B(i, s._result) : L(s, void 0, function(t) {
                    return P(i, t)
                }, function(t) {
                    return B(i, t)
                })) : n === S ? (B(t, S.error), S.error = null) : void 0 === n ? A(t, e) : a(n) ? (r = e, o = n, u(function(e) {
                    var n = !1,
                        t = q(o, r, function(t) {
                            n || (n = !0, r !== t ? P(e, t) : A(e, t))
                        }, function(t) {
                            n || (n = !0, B(e, t))
                        }, e._label);
                    !n && t && (n = !0, B(e, t))
                }, t)) : A(t, e)
            }

            function P(t, e) {
                var n, r;
                t === e ? B(t, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = e), null === n || "object" !== r && "function" !== r ? A(t, e) : E(t, e, k(e)))
            }

            function C(t) {
                t._onerror && t._onerror(t._result), I(t)
            }

            function A(t, e) {
                t._state === x && (t._result = e, t._state = O, 0 !== t._subscribers.length && u(I, t))
            }

            function B(t, e) {
                t._state === x && (t._state = T, t._result = e, u(C, t))
            }

            function L(t, e, n, r) {
                var o = t._subscribers,
                    i = o.length;
                t._onerror = null, o[i] = e, o[i + O] = n, o[i + T] = r, 0 === i && t._state && u(I, t)
            }

            function I(t) {
                var e = t._subscribers,
                    n = t._state;
                if (0 !== e.length) {
                    for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? M(n, r, o, i) : o(i);
                    t._subscribers.length = 0
                }
            }

            function M(t, e, n, r) {
                var o = a(n),
                    i = void 0,
                    s = void 0,
                    u = void 0,
                    c = void 0;
                if (o) {
                    if ((i = function(t, e) {
                            try {
                                return t(e)
                            } catch (t) {
                                return S.error = t, S
                            }
                        }(n, r)) === S ? (c = !0, s = i.error, i.error = null) : u = !0, e === i) return void B(e, new TypeError("A promises callback cannot return that same promise."))
                } else i = r, u = !0;
                e._state !== x || (o && u ? P(e, i) : c ? B(e, s) : t === O ? A(e, i) : t === T && B(e, i))
            }
            var N = 0;

            function H(t) {
                t[w] = N++, t._state = void 0, t._result = void 0, t._subscribers = []
            }
            var R = function() {
                    function t(t, e) {
                        this._instanceConstructor = t, this.promise = new t(j), this.promise[w] || H(this.promise), n(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && A(this.promise, this._result))) : B(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    return t.prototype._enumerate = function(t) {
                        for (var e = 0; this._state === x && e < t.length; e++) this._eachEntry(t[e], e)
                    }, t.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor,
                            r = n.resolve;
                        if (r === m) {
                            var o = k(e);
                            if (o === b && e._state !== x) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                            else if (n === D) {
                                var i = new n(j);
                                E(i, e, o), this._willSettleAt(i, t)
                            } else this._willSettleAt(new n(function(t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(r(e), t)
                    }, t.prototype._settledAt = function(t, e, n) {
                        var r = this.promise;
                        r._state === x && (this._remaining--, t === T ? B(r, n) : this._result[e] = n), 0 === this._remaining && A(r, this._result)
                    }, t.prototype._willSettleAt = function(t, e) {
                        var n = this;
                        L(t, void 0, function(t) {
                            return n._settledAt(O, e, t)
                        }, function(t) {
                            return n._settledAt(T, e, t)
                        })
                    }, t
                }(),
                D = function() {
                    function e(t) {
                        this[w] = N++, this._result = this._state = void 0, this._subscribers = [], j !== t && ("function" != typeof t && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof e ? function(e, t) {
                            try {
                                t(function(t) {
                                    P(e, t)
                                }, function(t) {
                                    B(e, t)
                                })
                            } catch (t) {
                                B(e, t)
                            }
                        }(this, t) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return e.prototype.catch = function(t) {
                        return this.then(null, t)
                    }, e.prototype.finally = function(e) {
                        var n = this.constructor;
                        return a(e) ? this.then(function(t) {
                            return n.resolve(e()).then(function() {
                                return t
                            })
                        }, function(t) {
                            return n.resolve(e()).then(function() {
                                throw t
                            })
                        }) : this.then(e, e)
                    }, e
                }();
            return D.prototype.then = b, D.all = function(t) {
                return new R(this, t).promise
            }, D.race = function(o) {
                var i = this;
                return n(o) ? new i(function(t, e) {
                    for (var n = o.length, r = 0; r < n; r++) i.resolve(o[r]).then(t, e)
                }) : new i(function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }, D.resolve = m, D.reject = function(t) {
                var e = new this(j);
                return B(e, t), e
            }, D._setScheduler = function(t) {
                o = t
            }, D._setAsap = function(t) {
                u = t
            }, D._asap = u, D.polyfill = function() {
                var t = void 0;
                if (void 0 !== F) t = F;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(e.resolve())
                    } catch (t) {}
                    if ("[object Promise]" === n && !e.cast) return
                }
                t.Promise = D
            }, D.Promise = D
        }()
    }).call(this, n(15), n(16))
}, function(t, e) {
    var n, r, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function u(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var c, a = [],
        l = !1,
        f = -1;

    function p() {
        l && c && (l = !1, c.length ? a = c.concat(a) : f = -1, a.length && d())
    }

    function d() {
        if (!l) {
            var t = u(p);
            l = !0;
            for (var e = a.length; e;) {
                for (c = a, a = []; ++f < e;) c && c[f].run();
                f = -1, e = a.length
            }
            c = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(t)
        }
    }

    function h(t, e) {
        this.fun = t, this.array = e
    }

    function g() {}
    o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        a.push(new h(t, e)), 1 !== a.length || l || u(d)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function(t) {
        return []
    }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(Nn, On) {
    var Pn;
    Pn = function() {
        return this
    }();
    try {
        Pn = Pn || Function("return this")() || eval("this")
    } catch (t) {
        "object" == typeof window && (Pn = window)
    }
    Nn.exports = Pn
}, function(e, t) {
    (function(t) {
        e.exports = t
    }).call(this, {})
}]);