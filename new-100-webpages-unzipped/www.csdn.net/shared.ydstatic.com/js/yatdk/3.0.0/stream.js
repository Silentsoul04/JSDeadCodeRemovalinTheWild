/*!!!
 * yadk template sdk: stream 3.0.0
 *
 * author: liwenzhao
 * Date: 2017-05-18
 */
! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    function o(e, t, n) {
        for (var o, r = 0; o = n[r]; r++) e = e.replace(new RegExp("\\$\\{" + o + "\\}"), o in t ? t[o] : "");
        return e
    }

    function r(e, t) {
        for (var n, o = {}, r = 0; n = t[r]; r++) n in e && (o[n] = e[n], delete e[n]);
        return o
    }

    function i(e, t, n) {
        var i = '<div class="ad" style="${divStyle}"><div class="ad-img" style="${imgStyle}"><a href="{0}" target="_blank"><img src="{1}"/></a></div><div class="ad-text"><a href="{0}" target="_blank"><span class="title" style="${titStyle}">{2}</span> </a><a href="{0}" target="_blank"><span class="desc" style="${desStyle}">{3}</span></a></div></div>',
            d = e.imgKey,
            c = e.css || l;
        delete e.css, delete e.imgKey, "nt" in e || (e.nt = "UNKNOWN");
        var u = ["divStyle", "imgStyle", "titStyle", "desStyle"],
            f = r(e, u),
            g = window.yadk;
        g.config(e), g.fetch(t.length, function(r) {
            try {
                for (var l, m = 0; l = r[m]; m++) {
                    var h = l[d] || l.iconimage,
                        y = g.formatString(i, l.clktracker, h, l.title, l.text),
                        p = a.genIframe();
                    if (!h) throw new Error("Can't find image named " + d + " or iconimage in data");
                    y = o(y, f, u), s(p, t[m], y, l.imptracker, h, c)
                }
            } catch (v) {
                console.error("error occurs when rendering stream ad, detail: " + v)
            }
            a.isFunction(n) && n(e.id, t.length, r.length)
        })
    }
    var a = n(1),
        d = n(2),
        s = n(4),
        l = a.getProtocol() + "//shared.ydstatic.com/js/yatdk/3.0.0/stream.css";
    i.url = "shared.ydstatic.com/js/yatdk/3.0.0/stream", d(i)
}, function(e, t) {
    function n(e) {
        return "[object Function]" === s.call(e)
    }

    function o(e) {
        return document.createElement(e || "div")
    }

    function r() {
        var e = o("iframe");
        return e.style.width = "100%", e.style.height = "0", e.style.border = "0", e.scrolling = "no", e
    }

    function i(e) {
        var t = (e || "").match(/^(https?:)/);
        return t && t.length >= 2 ? t[1] : "http:" === location.protocol ? "http:" : "https:"
    }

    function a(e) {
        return e[0].toUpperCase() + e.substr(1)
    }

    function d(e) {
        for (var t = e.split("-"), n = 1; n < t.length; n++) t[n] = a(t[n]);
        return t.join("")
    }
    var s = Object.prototype.toString;
    t.isFunction = n, t.newElem = o, t.genIframe = r, t.getProtocol = i, t.hyphenToCamelCase = d
}, function(e, t, n) {
    function o(e) {
        function t(t) {
            r(function(n) {
                return n ? (window.yadk || (window.yadk = n), a(e)) : void t()
            })
        }
        var n = l();
        t(function() {
            "yadkLoading" in window || (window.yadkLoading = !1);
            var e = "error: can not find yadk after it is loaded.";
            if (window.yadkLoading) window.yadkLoading && setTimeout(function r() {
                window.yadkLoading ? setTimeout(r, 20) : t(function() {
                    console.log(e)
                })
            }, 20);
            else {
                window.yadkLoading = !0;
                var o = s.getProtocol() + "//shared.ydstatic.com/js/yadk/1.1.2.js";
                n([o], function(n) {
                    window.yadkLoading = !1, n || t(function() {
                        console.log(e)
                    })
                })
            }
        })
    }

    function r(t) {
        function n() {
            t(o)
        }
        var o;
        if ("yadk" in window) o = window.yadk, n();
        else if ("undefined" != typeof e && "object" == typeof e.exports) {
            try {
                o = window.require("yadk")
            } catch (r) {}
            n()
        } else if ("undefined" != typeof window.define && (window.define.amd || window.define.cmd)) try {
            window.require(["yadk"], function(e) {
                o = e, setTimeout(n, 0)
            })
        } catch (r) {} else n()
    }

    function i(e) {
        var t = {},
            n = e.dataset;
        if (n) {
            for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o]);
            return t
        }
        n = this.attributes;
        for (var r, i = 0, a = n.length; r = n[i], i < a; i++) 0 === r.name.indexOf("data-") && (t[s.hyphenToCamelCase(r.name.substr(5))] = r.value);
        return t
    }

    function a(e) {
        if (!e.url) return void console.error("invalid ad generator", e);
        var t = function() {
            for (var t, n = document.getElementsByTagName("script"), o = 0; t = n[o++];)
                if ("1" != t.getAttribute("data-is-handling") && t.src.indexOf(e.url) !== -1) return t.setAttribute("data-is-handling", "1"), t;
            return null
        }();
        if (!t) return void console.error("do not find the right script");
        var n = i(t);
        if (!n.id) return void console.error("invalid ad id");
        var o = window[n.notify] || function() {};
        delete n.notify, delete n.isHandling;
        var r = s.getProtocol(t.src);
        "https:" === r && (n.isSecure = 1), "imgKey" in n || (n.imgKey = "mainimage"), e(n, d(t, n), function(e, t, n) {
            o(e, t, n)
        })
    }

    function d(e, t) {
        function n() {
            delete t.insertNodes;
            var e, n, r;
            for (e = 0; e < o.length;) n = (o[e] || "").replace(/^\s+|\s+$/g, ""), n ? (r = document.getElementById(n), r ? r.appendChild(o[e++] = s.newElem()) : (console.error("invalid ad node id", n), o.splice(e, 1))) : o.splice(e, 1)
        }
        var o, r = "insertNodes" in t && t.insertNodes;
        return o = r ? r.split(",") : [], o.length > 0 && n(), o.length > 0 ? e.parentNode.removeChild(e) : o.push(e), o
    }
    var s = n(1),
        l = n(3);
    e.exports = o
}, function(e, t, n) {
    function o() {
        var e = document,
            t = e.head || e.getElementsByTagName("head")[0],
            n = t.getElementsByTagName("base")[0];
        return function o(e, r) {
            function d() {
                console.log("script loaded: ", c.src), c.onload = c.onerror = c.onreadystatechange = null, t.removeChild(c), c = null, e.length ? o(e, r) : (console.log("scripts load finish!"), a(r) && r())
            }

            function s() {
                console.log("script load failed", c.src), c.onload = c.onerror = c.onreadystatechange = null, t.removeChild(c), c = null, a(r) && r("error")
            }
            var l = e.shift(),
                c = i("script");
            c.charset = "utf-8", "onload" in c ? (c.onload = d, c.onerror = s) : c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d()
            }, c.async = !0, c.src = l, n ? t.insertBefore(c, n) : t.appendChild(c)
        }
    }
    var r = n(1),
        i = r.newElem,
        a = r.isFunction;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = a("link");
        return t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e), t
    }

    function r(e) {
        var t = a("style");
        return t.setAttribute("type", "text/css"), "textContent" in t ? t.textContent = e : t.stylesheet.cssText = e, t
    }

    function i(e, t, n, i, s, l, c) {
        t.parentNode.replaceChild(e, t), setTimeout(function() {
            function t() {
                setTimeout(function() {
                    e.style.height = y.offsetHeight + "px", d(e, window, function() {
                        window.yadk.showed(i)
                    })
                }, 16)
            }
            var u = e.contentDocument || e.contentWindow.document,
                f = u.head || u.getElementsByTagName("head")[0],
                g = u.body;
            g.style.margin = "0", g.style.padding = "0";
            var m = a("meta");
            m.setAttribute("charset", "utf-8"), f.appendChild(m), l && f.appendChild(o(l)), c && f.appendChild(r(c));
            var h = a();
            h.innerHTML = n;
            var y = h.childNodes[0];
            g.appendChild(y), h = null, s ? function() {
                function e() {
                    n.onload = n.onerror = null, t()
                }
                var n = y.getElementsByTagName("img")[0];
                n.onload = e, n.onerror = function() {
                    console.log("ad image load failed!", s), e()
                }, n.src = s
            }() : t()
        }, 50)
    }
    var a = n(1).newElem,
        d = n(5);
    e.exports = i
}, function(e, t) {
    function n(e, t, n) {
        var d = e.offsetHeight,
            s = i(t);
        return r(o(e), d, s, a(t)) ? void n() : void t.addEventListener("scroll", function(i) {
            r(o(e), d, s, a(t)) && (t.removeEventListener("scroll", arguments.callee), setTimeout(n, 10))
        }, !1)
    }

    function o(e) {
        for (var t = e.offsetTop, n = e.offsetParent; null !== n;) t += n.offsetTop, n = n.offsetParent;
        return t
    }

    function r(e, t, n, o) {
        var r = e + t / 3 - o;
        return r >= 0 && r < n
    }

    function i(e) {
        return e.innerHeight || e.document.documentElement.clientHeight || e.document.body.clientHeight || 0
    }

    function a(e) {
        return e.pageYOffset || e.document.documentElement.scrollTop || e.document.body.scrollTop || 0
    }
    e.exports = n
}]);