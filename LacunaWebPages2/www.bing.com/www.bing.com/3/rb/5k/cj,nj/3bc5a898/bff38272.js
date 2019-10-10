var customEvents, fallbackReplay;
_w.EventsToDuplicate = [];
_w.useSharedLocalStorage = !1;
define("shared", ["require", "exports"], function(n, t) {
    function s(n, t) {
        for (var r = n.length, i = 0; i < r; i++) t(n[i])
    }

    function r(n) {
        for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
        return function() {
            n.apply(null, i)
        }
    }

    function u(n) {
        i && event && (event.returnValue = !1);
        n && typeof n.preventDefault == "function" && n.preventDefault()
    }

    function f(n) {
        i && event && (event.cancelBubble = !0);
        n && typeof n.stopPropagation == "function" && n.stopPropagation()
    }

    function e(n, t, i) {
        for (var r = 0; n && n.offsetParent && n != (i || document.body);) r += n["offset" + t], n = n.offsetParent;
        return r
    }

    function o() {
        return (new Date).getTime()
    }

    function h(n) {
        return i ? event : n
    }

    function c(n) {
        return i ? event ? event.srcElement : null : n.target
    }

    function l(n) {
        return i ? event ? event.fromElement : null : n.relatedTarget
    }

    function a(n) {
        return i ? event ? event.toElement : null : n.relatedTarget
    }

    function v(n, t, i) {
        while (n && n != (i || document.body)) {
            if (n == t) return !0;
            n = n.parentNode
        }
        return !1
    }

    function y(n) {
        window.location.href = n
    }

    function p(n, t) {
        n.style.filter = t >= 100 ? "" : "alpha(opacity=" + t + ")";
        n.style.opacity = t / 100
    }
    t.__esModule = !0;
    var i = sb_ie;
    t.forEach = s;
    t.wrap = r;
    t.preventDefault = u;
    t.stopPropagation = f;
    t.getOffset = e;
    t.getTime = o;
    window.sj_b = document.body;
    window.sb_de = document.documentElement;
    window.sj_wf = r;
    window.sj_pd = u;
    window.sj_sp = f;
    window.sj_go = e;
    window.sj_ev = h;
    window.sj_et = c;
    window.sj_mi = l;
    window.sj_mo = a;
    window.sj_we = v;
    window.sb_gt = o;
    window.sj_so = p;
    window.sj_lc = y
});
define("env", ["require", "exports", "shared"], function(n, t, i) {
    function v(n, t) {
        return t.length && typeof n == "function" ? function() {
            return n.apply(null, t)
        } : n
    }

    function y(n, t) {
        var e = [].slice.apply(arguments).slice(2),
            u = v(n, e),
            i;
        return i = window.setImmediate && !window.setImmediate.Override && (!t || t <= 16) ? "i" + setImmediate(u) : o(u, t), f[r] = i, r = (r + 1) % a, i
    }

    function p(n, t) {
        var r = [].slice.apply(arguments).slice(2),
            i = l(v(n, r), t);
        return e[u] = i, u = (u + 1) % a, i
    }

    function w() {
        h.forEach(f, s);
        h.forEach(e, window.clearInterval);
        r = u = e.length = f.length = 0
    }

    function s(n) {
        n != null && (typeof n == "string" && n.indexOf("i") === 0 ? window.clearImmediate(parseInt(n.substr(1), 10)) : c(n))
    }
    var h = i,
        f = [],
        e = [],
        o, c, l, a = 1024,
        r = 0,
        u = 0;
    o = window.setTimeout;
    t.setTimeout = y;
    l = window.setInterval;
    t.setInterval = p;
    t.clear = w;
    c = window.clearTimeout;
    t.clearTimeout = s;
    window.sb_rst = o;
    window.setTimeout = window.sb_st = y;
    window.setInterval = window.sb_si = p;
    window.clearTimeout = window.sb_ct = s
});
/*!DisableJavascriptProfiler*/
define("event.custom", ["require", "exports", "shared", "env"], function(n, t, i, r) {
    function f(n) {
        return u[n] || (u[n] = [])
    }

    function e(n, t) {
        n.d ? l.setTimeout(c.wrap(n, t), n.d) : n(t)
    }

    function v(n) {
        for (var t in u) t.indexOf(a) === 0 || n != null && n[t] != null || delete u[t]
    }

    function o(n) {
        for (var t = f(n), u = t.e = arguments, i, r = 0; r < t.length; r++)
            if (t[r].alive) try {
                e(t[r].func, u)
            } catch (o) {
                i || (i = o)
            }
        if (i) throw i;
    }

    function s(n, t, i, r) {
        var u = f(n);
        t && (t.d = r, u.push({
            func: t,
            alive: !0
        }), i && u.e && e(t, u.e))
    }

    function h(n, t) {
        for (var i = 0, r = u[n]; r && i < r.length; i++)
            if (r[i].func == t && r[i].alive) {
                r[i].alive = !1;
                break
            }
    }
    var c = i,
        l = r,
        u = {},
        a = "ajax.";
    t.reset = v;
    t.fire = o;
    t.bind = s;
    t.unbind = h;
    _w.sj_evt = {
        bind: s,
        unbind: h,
        fire: o
    }
});
define("event.native", ["require", "exports"], function(n, t) {
    function r(n, t, r, u) {
        var f = n === window || n === document || n === document.body;
        n && (f && t == "load" ? i.bind("onP1", r, !0) : f && t == "unload" ? i.bind("unload", r, !0) : n.addEventListener ? n.addEventListener(t, r, u) : n.attachEvent ? n.attachEvent("on" + t, r) : n["on" + t] = r)
    }

    function u(n, t, r, u) {
        var f = n === window || n === document || n === document.body;
        n && (f && t == "load" ? i.unbind("onP1", r) : f && t == "unload" ? i.unbind("unload", r) : n.removeEventListener ? n.removeEventListener(t, r, u) : n.detachEvent ? n.detachEvent("on" + t, r) : n["on" + t] = null)
    }
    t.__esModule = !0;
    var i = n("event.custom");
    t.bind = r;
    t.unbind = u;
    window.sj_be = r;
    window.sj_ue = u
});
customEvents = require("event.custom");
customEvents.fire("onHTML");
define("dom", ["require", "exports"], function(n, t) {
    function f(n, t) {
        function s(n, t, r, f) {
            r && u.unbind(r, f, s);
            c.bind("onP1", function() {
                if (!n.l) {
                    n.l = 1;
                    var r = i("script");
                    r.setAttribute("data-rms", "1");
                    r.src = (t ? "/fd/sa/" + _G.Ver : "/sa/" + _G.AppVer) + "/" + n.n + ".js";
                    _d.body.appendChild(r)
                }
            }, !0, 5)
        }
        for (var f = arguments, e, o, r = 2, l = {
                n: n
            }; r < f.length; r += 2) e = f[r], o = f[r + 1], u.bind(e, o, h.wrap(s, l, t, e, o));
        r < 3 && s(l, t)
    }

    function e() {
        var n = _d.getElementById("ajaxStyles");
        return n || (n = _d.createElement("div"), n.id = "ajaxStyles", _d.body.insertBefore(n, _d.body.firstChild)), n
    }

    function l(n) {
        var t = i("script");
        t.type = "text/javascript";
        t.text = n;
        t.setAttribute("data-bing-script", "1");
        document.body.appendChild(t);
        r.setTimeout(function() {
            document.body.removeChild(t)
        }, 0)
    }

    function a(n) {
        var t = i("script");
        t.type = "text/javascript";
        t.src = n;
        t.onload = r.setTimeout(function() {
            document.body.removeChild(t)
        }, 0);
        document.body.appendChild(t)
    }

    function o(n) {
        var t = s("ajaxStyle");
        t || (t = i("style"), t.setAttribute("data-rms", "1"), t.id = "ajaxStyle", e().appendChild(t));
        t.textContent !== undefined ? t.textContent += n : t.styleSheet.cssText += n
    }

    function v(n, t) {
        for (var i = Element.prototype, r = i.matches || i.msMatchesSelector; n != null;) {
            if (r.call(n, t)) return n;
            n = n.parentElement
        }
        return null
    }

    function s(n) {
        return _d.getElementById(n)
    }

    function i(n, t, i) {
        var r = _d.createElement(n);
        return t && (r.id = t), i && (r.className = i), r
    }
    t.__esModule = !0;
    var r = n("env"),
        h = n("shared"),
        u = n("event.native"),
        c = n("event.custom");
    t.loadJS = f;
    t.getCssHolder = e;
    t.includeScript = l;
    t.includeScriptReference = a;
    t.includeCss = o;
    _w._ge = s;
    _w.sj_ce = i;
    _w.sj_jb = f;
    _w.sj_ic = o;
    _w.sj_fa = v
});
define("cookies", ["require", "exports"], function(n, t) {
    function f() {
        var n = location.hostname.match(/([^.]+\.[^.]*)$/);
        return n ? ";domain=" + n[0] : ""
    }

    function e(n, t, i, r) {
        var u = f(),
            e = r && r > 0 && r * 6e4 < 33696e6 ? r * 6e4 : 33696e6,
            o = new Date((new Date).getTime() + Math.min(e, 33696e6));
        _d.cookie = n + u + (t ? ";expires=" + o.toGMTString() : "") + (i ? ";path=" + i : "")
    }

    function o(n, t, r, u, f) {
        if (!i) {
            var o = n + "=" + t;
            e(o, r, u, f)
        }
    }

    function s() {
        return !i
    }

    function r(n, t) {
        var r, u;
        return i || !/\bMSCC=1\b/i.test(_d.cookie) && !_w.cookieGetAccess ? null : (r = _d.cookie.match(new RegExp("\\b" + n + "=[^;]+")), t && r) ? (u = r[0].match(new RegExp("\\b" + t + "=([^&]*)")), u ? u[1] : null) : r ? r[0] : null
    }

    function h(n, t, u, f, o, s) {
        var l, h, c, a;
        if (!i) try {
            _w.cookieGetAccess = !0;
            h = t + "=" + u;
            c = r(n);
            c ? (a = r(n, t), l = a ? c.replace(t + "=" + a, h) : c + "&" + h) : l = n + "=" + h;
            e(l, f, o, s)
        } finally {
            _w.cookieGetAccess = !1
        }
    }

    function c(n, t) {
        if (!i) {
            var r = n + "=",
                e = f();
            _d.cookie = r + e + ";expires=" + u + (t ? ";path=" + t : "")
        }
    }
    var i, u, l;
    t.__esModule = !0;
    i = !1;
    u = new Date(0).toGMTString();
    _w.cookieGetAccess = !1;
    try {
        l = _d.cookie
    } catch (a) {
        i = !0
    }
    t.setNoCrumbs = o;
    t.areCookiesAccessible = s;
    t.get = r;
    t.set = h;
    t.clear = c;
    _w.sj_cook = {
        get: r,
        set: h,
        setNoCrumbs: o,
        clear: c,
        areCookiesAccessible: s
    }
});
define("rmsajax", ["require", "exports"], function(n, t) {
    function c() {
        for (var r, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        if (n.length != 0) {
            if (r = n[n.length - 1], n.length == 1) ot(r) && u.push(r);
            else if (n.length == 3) {
                var o = n[0],
                    s = n[1],
                    e = n[2];
                st(o) && st(s) && ot(e) && (ht(i, o, e), ht(f, s, e))
            }
            return window.rms
        }
    }

    function nt() {
        var r = arguments,
            n, t;
        for (e.push(r), n = 0; n < r.length; n++) t = r[n], ct(t, i), t.d && tt.call(null, t);
        return window.rms
    }

    function bt() {
        var t = arguments,
            n;
        for (o.push(t), n = 0; n < t.length; n++) ct(t[n], f);
        return window.rms
    }

    function l() {
        var t, i, n;
        for (ii(), t = !1, n = 0; n < e.length; n++) t = tt.apply(null, p.call(e[n], 0)) || t;
        for (i = 0; i < o.length; i++) t = ni.apply(null, p.call(o[i], 0)) || t;
        if (!t)
            for (n = 0; n < u.length; n++) u[n]()
    }

    function tt() {
        var n = arguments,
            t, u, f, e;
        if (n.length === 0) return !1;
        if (t = i[ut(n[0])], n.length > 1)
            for (u = ri.apply(null, n), f = 0; f < u.length; f++) e = u[f], e.run = r, kt(e, function(n) {
                return function() {
                    dt(n, u)
                }
            }(e));
        else t.run = r, ft(t, function() {
            it(t)
        });
        return !0
    }

    function kt(n, t) {
        var r, i;
        if (!n.state) {
            if (n.state = yt, at(n)) {
                t();
                return
            }
            window.ActiveXObject !== undefined || wt.test(navigator.userAgent) ? (r = new Image, r.onload = t, r.onerror = t, r.src = n.url) : (i = new XMLHttpRequest, i.open("GET", n.url, !0), i.onreadystatechange = function() {
                i.readyState == 4 && t()
            }, i.send())
        }
    }

    function dt(n, t) {
        n.run == r && (n.state = w, rt(t))
    }

    function gt(n, t) {
        n.run == r && ft(n, function(n) {
            return function() {
                it(n, t)
            }
        }(n))
    }

    function it(n, t) {
        n.run == r && (n.state = h, ti(n), t) && rt(t)
    }

    function rt(n) {
        for (var i, t = 0; t < n.length; t++) {
            i = n[t];
            switch (i.state) {
                case w:
                    gt(i, n);
                    return;
                case h:
                    continue
            }
            return
        }
    }

    function ut(n) {
        for (var t in n) return t
    }

    function ni() {
        return !1
    }

    function ti(n) {
        for (var t = 0; t < n.callbacks.length; t++) n.callbacks[t].dec()
    }

    function ft(n, t) {
        var i, e, o, u, r;
        if (n.state != b && n.state != h)
            if (n.state = b, i = s.createElement("SCRIPT"), i.type = "text/javascript", i.setAttribute("data-rms", "1"), i.onreadystatechange = i.onload = function() {
                    var n = i.readyState;
                    (!n || /loaded|complete/.test(n)) && et(t)
                }, at(n)) {
                if (e = n.app ? d : k, (o = s.getElementById(e)) && (u = o.childNodes) && u[n.pos] && (r = u[n.pos].innerHTML, r !== "")) {
                    var c = 4,
                        l = 3,
                        f = r.length,
                        a = r.substring(0, c),
                        v = r.substring(f - l, f);
                    a == "<!--" && v == "-->" && (r = r.substring(c, f - l));
                    i.text = r;
                    s.body.appendChild(i)
                }
                et(t)
            } else i.src = n.url, s.body.appendChild(i)
    }

    function et(n) {
        n.done || (n.done = !0, n())
    }

    function ot(n) {
        return g.call(n) == "[object Function]"
    }

    function st(n) {
        return g.call(n) == "[object Array]"
    }

    function ht(n, t, i) {
        for (var u, f = new a(i), r = 0; r < t.length; r++) u = n[t[r]], u || (u = lt(n, t[r])), v(u, f)
    }

    function ii() {
        for (var t, r, e, n = 0; n < u.length; n++) {
            t = new a(u[n]);
            for (r in i) v(i[r], t);
            for (e in f) v(f[e], t)
        }
    }

    function v(n, t) {
        n.callbacks.push(t);
        t.inc()
    }

    function ct(n, t) {
        for (var i in n)
            if (typeof n[i] != undefined) return lt(t, i, n[i])
    }

    function lt(n, t, i) {
        return n[t] || (n[t] = {
            callbacks: [],
            onPrefetch: []
        }, n[t].key = t), t.indexOf(pt) == 0 && (n[t].app = !0), isNaN(i) ? n[t].url = i : n[t].pos = i, n[t]
    }

    function ri() {
        for (var r, t = [], n = 0; n < arguments.length; n++) r = ut(arguments[n]), t.push(i[r]);
        return t
    }

    function at(n) {
        return !n.url
    }

    function ui(n) {
        var t, s;
        i = {};
        f = {};
        u = [];
        e = [];
        o = [];
        r += 1;
        t = document.getElementById(k);
        t && t.parentNode.removeChild(t);
        s = document.getElementById(d);
        s && s.parentNode.removeChild(s);
        n || vt()
    }

    function vt() {
        y.bind("onP1Lazy", function() {
            c(function() {
                y.fire("onP1")
            });
            l()
        }, !0)
    }
    var a;
    t.__esModule = !0;
    var y = n("event.custom"),
        p = [].slice,
        yt = 1,
        w = 2,
        b = 3,
        h = 4,
        r = 0,
        pt = "A:",
        k = "fRmsDefer",
        d = "aRmsDefer",
        i = {},
        f = {},
        u = [],
        e = [],
        o = [],
        g = Object.prototype.toString,
        s = document,
        wt = /edge/i;
    t.onload = c;
    t.js = nt;
    t.css = bt;
    t.start = l;
    a = function(n) {
        var t = 0,
            i = !1;
        this.inc = function() {
            i || t++
        };
        this.dec = function() {
            i || (t--, t == 0 && (i = !0, n()))
        }
    };
    t.reset = ui;
    vt();
    window.rms = {
        onload: c,
        js: nt,
        start: l
    }
});
_w.LogUploadCapFeatureEnabled = !1;
_w.InstLogQueueKeyFetcher = {
    Get: function(n) {
        var t = "eventLogQueue";
        return n.indexOf("proactive") == 1 || n.indexOf("search") == 1 || n.indexOf("zinc") == 1 ? t + "_Online" : t + "_Offline"
    },
    GetSharedLocation: function() {
        return "eventLogQueue_Shared"
    },
    CanUploadSharedMessages: function(n) {
        return _w.useSharedLocalStorage && n.indexOf("AS/API") === 1 ? !0 : !1
    }
};
define("clientinst", ["require", "exports"], function(n, t) {
    function l(n, t, i, u) {
        s || (a("Init", "CI", "Base", !1), f = y.setTimeout(r, p), s = 1, nt.bind(window, "beforeunload", r, !1), tt.bind("unload", function() {
            ot()
        }, !1));
        a(n, t, i, u, [].slice.apply(arguments).slice(4))
    }

    function g(n, t, i, r, u, f, e) {
        var o = Object.keys(e).reduce(function(n, t) {
            return n.concat([t, e[t]])
        }, []);
        a(n, t, i, f, ["AppNS", r, "K", u].concat(o))
    }

    function a(n, t, f, o, s) {
        var l = "",
            y = _G.IG,
            a, h, c, v;
        if (s)
            for (a = 0; a < s.length; a += 2) {
                if (h = s[a], c = s[a + 1], h == "ImpressionGuid") {
                    y = c;
                    continue
                }(typeof h != "string" || h.indexOf('"') < 0) && (h = '"' + h + '"');
                typeof c != "string" || c.match(ut) || (c = '"' + c.replace(rt, '\\"') + '"');
                l += h + ":" + c + ","
            }
        l += '"T":"CI.' + n + '",' + (typeof t == "number" ? '"K":' + t : '"FID":"' + t + '"') + ',"Name":"' + f + '","TS":' + it.getTime();
        l = u("{" + l + "}");
        v = i[y] || "";
        et[e] + v[e] + l[e] >= ft && (r(), v = "");
        i[y] = v + u(v ? "," : "") + l;
        o && r()
    }

    function v(n, t, i, r) {
        var u = n[t];
        n[t] = function() {
            var n = arguments,
                e, t, f;
            if (r && i[o](this, n), e = u[o](this, n), !r) {
                for (t = [], f = 0; f < n.length; f++) t.push(n[f]);
                t.push(e);
                i[o](this, t)
            }
            return e
        }
    }

    function ot() {
        s = 0;
        r()
    }

    function r() {
        var n, t;
        f && clearTimeout(f);
        for (n in i) i.hasOwnProperty(n) && (t = n != _G.IG ? _G.lsUrl.replace(_G.IG, n) : _G.lsUrl, d().src = w + t + "&TYPE=Event.ClientInst&DATA=" + u("[") + i[n] + u("]"), delete i[n]);
        f = y.setTimeout(r, p)
    }
    var c, k, i, d;
    t.__esModule = !0;
    var y = n("env"),
        nt = n("event.native"),
        tt = n("event.custom"),
        it = n("shared"),
        u = encodeURIComponent,
        e = "length",
        o = "apply",
        rt = /"/g,
        ut = /^\s*[{\["].*["}\]]\s*$/g,
        p = 2e3,
        ft = 2e3,
        s = 0,
        f, w = "",
        et = _G.lsUrl + "&TYPE=Event.ClientInst&DATA=",
        h = location.hostname,
        b = h.match(/([^.]+\.[^.]*)$/);
    b && (c = location.protocol, k = c == "https:" ? h.substring(0, h.indexOf(".")) : "a4", w = c + "//" + k + "." + b[0]);
    i = {};
    d = function() {
        return new Image
    };
    t.Log = l;
    t.LogInstrumented = g;
    t.Wrap = v;
    window.Log = {
        Log: l,
        Wrap: v
    };
    window.Shared2 = window.Shared2 || {};
    window.Shared2.Log = {
        Log: l,
        Wrap: v,
        LogInstrumented: g
    }
});
fallbackReplay = require("fallback");
fallbackReplay.replay();
var sj_anim = function(n) {
        var s = 25,
            t = this,
            c, u, h, f, e, o, l, i, r;
        t.init = function(n, s, a, v, y) {
            if (c = n, e = s, o = a, l = v, r = y, v == 0) {
                f = h;
                r && r();
                return
            }
            i || (i = e);
            u || t.start()
        };
        t.start = function() {
            h = sb_gt();
            f = Math.abs(o - i) / l * s;
            u = setInterval(t.next, s)
        };
        t.stop = function() {
            clearInterval(u);
            u = 0
        };
        t.next = function() {
            var u = sb_gt() - h,
                s = u >= f;
            i = e + (o - e) * u / f;
            s && (t.stop(), i = o);
            n(c, i);
            s && r && r()
        };
        t.getInterval = function() {
            return s
        }
    },
    sj_fader = function() {
        return new sj_anim(function(n, t) {
            sj_so(n, t)
        })
    },
    customEvents = require("event.custom");
customEvents.bind("onPP", function() {
    customEvents.fire("onP1Lazy")
}, !0)