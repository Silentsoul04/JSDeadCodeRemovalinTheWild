! function(n) {
    var t = {};

    function e(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return n[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    e.m = n, e.c = t, e.d = function(n, t, i) {
        e.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n["default"]
        } : function() {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, e.p = "", e(e.s = 2)
}([function(n, t) {
    n.exports = {
        iterate_selfandparents: function(n, t) {
            do {
                try {
                    if (n && t.call(n)) return !0
                } catch (e) {}
            } while (n && n.parent && n !== n.parent && (n = n.parent))
        },
        iframe_findfromwindow: function(n) {
            try {
                return n.frameElement
            } catch (t) {}
            return null
        },
        get_script_src: function() {
            if (document.currentScript) return document.currentScript.src;
            var n = document.getElementsByTagName("script");
            for (var t in n) {
                var e = n[t];
                if (e.src && e.src.indexOf("technoratimedia.com/") > 0) return e.src
            }
            return null
        }
    }
}, function(n, t) {
    function e(n) {
        var t = 0,
            e = n;
        do {
            n = e, e = decodeURIComponent(n), t++
        } while (t < 10 && e !== n);
        return e && (e.match(/\w+(?:@)[a-zA-Z_]+?\.[a-zA-Z]{2,3}/) || e.match(/(?:username|password|sessionid)=/))
    }
    n.exports = function() {
        var n = null,
            t = !1,
            i = !1,
            r = !1;
        try {
            n = window.top.location.href;
            try {
                e(window.top.document.referrer) && (window.top.document.referrer, t = !0)
            } catch (c) {}
        } catch (c) {}
        if (null === n) {
            i = !0;
            for (var o = 20, a = window; o > 0 && a !== window.top;) {
                try {
                    e(n = a.document.referrer) && (t = !0), a.location.href
                } catch (c) {}
                a = a.parent, o--
            }
            if (window.location.ancestorOrigins && window.location.ancestorOrigins.length) {
                var d = window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1];
                null !== n && n.substr(0, d.length) === d || (r = !0, n = d)
            }
        }
        return null !== n && "string" == typeof n && n.match(/^https?:\/\/(?:[^\@\/]*\@)?([^\/\:]+)/) ? (e(n) && (t = !0), n.length > 500 && (n = n.replace(/\?.*$/, ""))) : n = function(n) {
            try {
                if (window.location.protocol.match(/^https?:$/)) return window.location.protocol
            } catch (c) {}
            return n.match(/^https:/) ? "https:" : "http:"
        }(n || "") + "//unknown/", {
            origin: n,
            is_in_crossdomain_frame: i,
            is_in_nested_crossdomain_frame: r,
            pii_detected: t
        }
    }()
}, function(n, t, e) {
    window.TN8 = window.TN8 || {}, window.TN8.apn = e(3), window.TN8.tag = e(4), window.TN8.viewability = e(5), window.TN8.location = e(1), window.TN8.utils = e(0), n.exports = window.TN8, e(6)
}, function(n, t) {
    t.writeTag = function(n, t, e, i, r, o, a) {
        var d = document,
            c = document.getElementsByTagName("script"),
            u = 1;
        for (u = 1; u < c.length; u++) {
            if (c[c.length - u].src.indexOf("/adserv_") > 0) break
        }
        var l = c[c.length - u],
            s = l.src.replace(/^[^\?]+\??/, ""),
            w = "https:" == l.src.substring(0, 6),
            m = window.getCookie && getCookie("TMEDIA") || -1,
            h = window.getCookie && getCookie("TMEDIAISP"); - 1 != m && (s = s + "&dmsc=" + m.substring(5, m.indexOf("/")) + "&dmsi=" + escape(h));
        a = a || "0";
        var f = /iphone|ipad|ipod|android|silk|kindle fire/i.test(navigator.userAgent.toLowerCase()),
            p = (w ? "https://secure" : f ? "http://mobile" : "http://ib") + ".adnxs.com";
        (p += "/ttj?id=" + r, e.indexOf(",") > -1) ? p += "&promo_alignment=none&size=" + e.substring(0, e.indexOf(",")) + "&promo_sizes=" + e.substring(e.indexOf(",") + 1): p += "&size=" + e;
        p += "&pt1=" + n, p += "&pt2=" + t, p += "&pt3=" + a, p += "&rev=" + a, p += "&position=" + ("ATF" === i ? "above" : "below"), f && (p += "&st=mobile_web"), p += "&brlg=" + (window.navigator.userLanguage || window.navigator.language || "").toLowerCase(), p += o, p += "&" + s, p += "&cb=" + Math.floor(11e9 * Math.random()), d.write('<script type="text/javascript" src="' + p + '"><\/script>')
    }
}, function(n, t) {
    n.exports = {
        createIF: function() {
            var n = document.createElement(String.fromCharCode(105) + "frame");
            return n.width = 0, n.height = 0, n.frameborder = 0, n.scrolling = "no", n.marginheight = 0, n.marginwidth = 0, n.opmargin = 0, n.leftmargin = 0, (n.frameElement || n).style.cssText = "border: 0; visibility:hidden; display:none", n
        },
        dropJsPixel: function(n) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = n, t.async = !0, (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
        },
        dropIFPixel: function(n) {
            var t = this.createIF();
            t.src = n, (document.body || document.getElementsByTagName("body")[0]).appendChild(t)
        },
        dropIFScript: function(n) {
            var t = this.createIF();
            t.onload = function() {
                var t = this.contentWindow.document,
                    e = t.createElement("script");
                e.src = n, t.head.appendChild(e)
            }, (document.body || document.getElementsByTagName("body")[0]).appendChild(t)
        },
        dropPixel: function(n) {
            var t = document.createElement("img");
            t.style.cssText = "border: 0;width:0;height:0;visibility:hidden;display:none;", t.src = n, (document.body || document.getElementsByTagName("body")[0]).appendChild(t)
        }
    }, window && (window.TN8 || (window.TN8 = {}), window.TN8.tag || (window.TN8.tag = n.exports))
}, function(n, t, e) {
    var i = e(0),
        r = e(1);

    function o() {
        var n = null;
        return "undefined" != typeof document.hidden ? n = "hidden" : "undefined" != typeof document.mozHidden ? n = "mozHidden" : "undefined" != typeof document.msHidden ? n = "msHidden" : "undefined" != typeof document.webkitHidden && (n = "webkitHidden"), n ? !document[n] : function() {
            var n = !1;
            try {
                window.top.document
            } catch (t) {
                return window.document.hasFocus() || null
            }
            return i.iterate_selfandparents(window, function() {
                if (!n) {
                    this.document.hasFocus() && (n = !0);
                    for (var e = 0; e < this.frames.length; e++) try {
                        if (this.frames[e].contentWindow.document.hasFocus()) {
                            n = !0;
                            break
                        }
                    } catch (t) {}
                }
            }), n
        }()
    }

    function a(n) {
        for (var t, e, r = null, o = window, a = ({
                l: 0,
                t: 0,
                r: "innerWidth" in window ? window.innerWidth : window.document.documentElement.clientWidth,
                b: "innerHeight" in window ? window.innerHeight : window.document.documentElement.clientHeight
            }), d = a.r * a.b, c = 0, u = 1; o !== window.top;) {
            try {
                if (o.parent.document, null === (r = i.iframe_findfromwindow(o))) return null;
                t = r.getBoundingClientRect(), e = {
                    w: "innerWidth" in o.parent ? o.parent.innerWidth : o.document.parent.documentElement.clientWidth,
                    h: "innerHeight" in o.parent ? o.parent.innerHeight : o.document.parent.documentElement.clientHeight
                }
            } catch (b) {
                try {
                    return o && o.$sf && o.$sf.ext && o.$sf.ext.inViewPercentage ? o.$sf.ext.inViewPercentage() : null
                } catch (b) {
                    return null
                }
            }
            if (a.l = Math.max(Math.min(a.l + t.left, e.w), 0), a.t = Math.max(Math.min(a.t + t.top, e.h), 0), a.r = Math.max(Math.min(a.r + t.left, e.w, t.right), 0), a.b = Math.max(Math.min(a.b + t.top, e.h, t.bottom), 0), n) {
                var l = 0,
                    s = Math.max(1, Math.floor(Math.sqrt(c / 500))),
                    w = Math.floor(s / 2);
                Math.pow(s, 2);
                console.log("before", c);
                for (var m = a.l, h = m + w; h < a.r; h = (m += s) + w)
                    for (var f = a.t, p = f + w; p < a.b; p = (f += s) + w) o.parent.document.elementFromPoint(h, p) !== r && l++;
                console.log("measurements_off_screen", l, 500), u = 1 - l / 500
            }
            o = o.parent
        }
        c = (a.r - a.l) * (a.b - a.t);
        var g = d > 0 ? c / d : 0;
        return Math.min(g, u)
    }
    n.exports = {
        inViewPercentage: a,
        getMoat: function() {
            return r.is_in_nested_crossdomain_frame ? -1 : o() && function(n) {
                var t = a();
                return null === t ? null : !(t < n)
            }(.5) ? r.is_in_crossdomain_frame ? 2 : 1 : 0
        },
        getAceView: function() {
            return r.is_in_nested_crossdomain_frame ? -1 : o() && function(n) {
                for (var t, e, r = null, o = window, a = ({
                        l: 0,
                        t: 0,
                        r: "innerWidth" in window ? window.innerWidth : window.document.documentElement.clientWidth,
                        b: "innerHeight" in window ? window.innerHeight : window.document.documentElement.clientHeight
                    }), d = a.r * a.b * n; o !== window.top;) {
                    try {
                        if (o.parent.document, null === (r = i.iframe_findfromwindow(o))) return null;
                        t = r.getBoundingClientRect(), e = {
                            w: "innerWidth" in o.parent ? o.parent.innerWidth : o.parent.document.documentElement.clientWidth,
                            h: "innerHeight" in o.parent ? o.parent.innerHeight : o.parent.document.documentElement.clientHeight
                        }
                    } catch (p) {
                        try {
                            return o && o.$sf && o.$sf.ext && o.$sf.ext.inViewPercentage ? o.$sf.ext.inViewPercentage() >= n : null
                        } catch (p) {
                            return null
                        }
                    }
                    a.l = Math.max(Math.min(a.l + t.left, e.w), 0), a.t = Math.max(Math.min(a.t + t.top, e.h), 0), a.r = Math.max(Math.min(a.r + t.left, e.w, t.right), 0), a.b = Math.max(Math.min(a.b + t.top, e.h, t.bottom), 0);
                    var c = (a.r - a.l) * (a.b - a.t);
                    if (c < d) return !1;
                    for (var u = 0, l = Math.max(1, Math.floor(Math.sqrt(c / 500))), s = Math.floor(l / 2), w = (Math.pow(l, 2), a.l), m = w + s; m < a.r; m = (w += l) + s) {
                        for (var h = a.t, f = h + s; f < a.b; f = (h += l) + s) o.parent.document.elementFromPoint(m, f) !== r && u++;
                        if (1 - u / 500 < n) return !1
                    }
                    o = o.parent
                }
                return !0
            }(.5) ? r.is_in_crossdomain_frame ? 2 : 1 : 0
        }
    }, window && (window.TN8 = window.TN8 || {}, window.TN8.viewability = n.exports)
}, function(n, t) {
    ! function() {
        var n;
        for (window.TN8 = window.TN8 || {}, window.TN8.lq = window.TN8.lq || [], window.TN8.lq.push = window.TN8.lq.unshift = function(n) {
                n.apply(window.TN8)
            };
            (n = window.TN8.lq.shift()) !== undefined;) try {
            n.apply(window.TN8)
        } catch (t) {
            console.error("TN8: Loading queue error", {
                callback: n,
                error: t
            })
        }
    }()
}]);