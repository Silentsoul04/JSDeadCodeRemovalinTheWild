define([], function() {
    var e = (function() {
        function t() {
            if (!W) {
                try {
                    var e = F.getElementsByTagName("body")[0].appendChild(m("span"));
                    e.parentNode.removeChild(e)
                } catch (e) {
                    return
                }
                W = !0;
                for (var t = M.length, n = 0; n < t; n++) M[n]()
            }
        }

        function n(e) {
            W ? e() : M[M.length] = e
        }

        function a(e) {
            if (typeof j.addEventListener != k) j.addEventListener("load", e, !1);
            else if (typeof F.addEventListener != k) F.addEventListener("load", e, !1);
            else if (typeof j.attachEvent != k) g(j, "onload", e);
            else if ("function" == typeof j.onload) {
                var t = j.onload;
                j.onload = function() {
                    t(), e()
                }
            } else j.onload = e
        }

        function i() {
            $ ? r() : o()
        }

        function r() {
            var e = F.getElementsByTagName("body")[0],
                t = m(O);
            t.setAttribute("type", B), t.setAttribute("style", "display: none;");
            var n = e.appendChild(t);
            if (n) {
                var a = 0;
                (function() {
                    if (typeof n.GetVariable != k) {
                        var i = n.GetVariable("$version");
                        i && (i = i.split(" ")[1].split(","), G.pv = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)])
                    } else if (a < 10) return a++, void setTimeout(arguments.callee, 10);
                    e.removeChild(t), n = null, o()
                })()
            } else o()
        }

        function o() {
            var e = V.length;
            if (e > 0)
                for (var t = 0; t < e; t++) {
                    var n = V[t].id,
                        a = V[t].callbackFn,
                        i = {
                            success: !1,
                            id: n
                        };
                    if (G.pv[0] > 0) {
                        var r = h(n);
                        if (r)
                            if (!w(V[t].swfVersion) || G.wk && G.wk < 312)
                                if (V[t].expressInstall && s()) {
                                    var o = {};
                                    o.data = V[t].expressInstall, o.width = r.getAttribute("width") || "0", o.height = r.getAttribute("height") || "0", r.getAttribute("class") && (o.styleclass = r.getAttribute("class")), r.getAttribute("align") && (o.align = r.getAttribute("align"));
                                    for (var f = {}, u = r.getElementsByTagName("param"), p = u.length, v = 0; v < p; v++) "movie" != u[v].getAttribute("name").toLowerCase() && (f[u[v].getAttribute("name")] = u[v].getAttribute("value"));
                                    c(o, f, n, a)
                                } else d(r), a && a(i);
                        else E(n, !0), a && (i.success = !0, i.ref = l(n), a(i))
                    } else if (E(n, !0), a) {
                        var y = l(n);
                        y && typeof y.SetVariable != k && (i.success = !0, i.ref = y), a(i)
                    }
                }
        }

        function l(e) {
            var t = null,
                n = h(e);
            if (n && "OBJECT" == n.nodeName)
                if (typeof n.SetVariable != k) t = n;
                else {
                    var a = n.getElementsByTagName(O)[0];
                    a && (t = a)
                }
            return t
        }

        function s() {
            return !D && w("6.0.65") && (G.win || G.mac) && !(G.wk && G.wk < 312)
        }

        function c(e, t, n, a) {
            D = !0, I = a || null, N = {
                success: !1,
                id: n
            };
            var i = h(n);
            if (i) {
                "OBJECT" == i.nodeName ? (S = f(i), A = null) : (S = i, A = n), e.id = "SWFObjectExprInst", (typeof e.width == k || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == k || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), F.title = F.title.slice(0, 47) + " - Flash Player Installation";
                var r = G.ie && G.win ? "ActiveX" : "PlugIn",
                    o = "MMredirectURL=" + j.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + r + "&MMdoctitle=" + F.title;
                if (typeof t.flashvars != k ? t.flashvars += "&" + o : t.flashvars = o, G.ie && G.win && 4 != i.readyState) {
                    var l = m("div");
                    n += "SWFObjectNew", l.setAttribute("id", n), i.parentNode.insertBefore(l, i), i.style.display = "none", (function() {
                        4 == i.readyState ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
                    })()
                }
                u(e, t, n)
            }
        }

        function d(e) {
            if (G.ie && G.win && 4 != e.readyState) {
                var t = m("div");
                e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(f(e), t), e.style.display = "none", (function() {
                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                })()
            } else e.parentNode.replaceChild(f(e), e)
        }

        function f(e) {
            var t = m("div");
            if (G.win && G.ie) t.innerHTML = e.innerHTML;
            else {
                var n = e.getElementsByTagName(O)[0];
                if (n) {
                    var a = n.childNodes;
                    if (a)
                        for (var i = a.length, r = 0; r < i; r++) 1 == a[r].nodeType && "PARAM" == a[r].nodeName || 8 == a[r].nodeType || t.appendChild(a[r].cloneNode(!0))
                }
            }
            return t
        }

        function u(e, t, n) {
            var a, i = h(n);
            if (G.wk && G.wk < 312) return a;
            if (i)
                if (typeof e.id == k && (e.id = n), G.ie && G.win) {
                    var r = "";
                    for (var o in e) e[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? t.movie = e[o] : "styleclass" == o.toLowerCase() ? r += ' class="' + e[o] + '"' : "classid" != o.toLowerCase() && (r += " " + o + '="' + e[o] + '"'));
                    var l = "";
                    for (var s in t) t[s] != Object.prototype[s] && (l += '<param name="' + s + '" value="' + t[s] + '" />');
                    i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + r + ">" + l + "</object>", P[P.length] = e.id, a = h(e.id)
                } else {
                    var c = m(O);
                    c.setAttribute("type", B);
                    for (var d in e) e[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? c.setAttribute("class", e[d]) : "classid" != d.toLowerCase() && c.setAttribute(d, e[d]));
                    for (var f in t) t[f] != Object.prototype[f] && "movie" != f.toLowerCase() && p(c, f, t[f]);
                    i.parentNode.replaceChild(c, i), a = c
                }
            return a
        }

        function p(e, t, n) {
            var a = m("param");
            a.setAttribute("name", t), a.setAttribute("value", n), e.appendChild(a)
        }

        function v(e) {
            var t = h(e);
            t && "OBJECT" == t.nodeName && (G.ie && G.win ? (t.style.display = "none", (function() {
                4 == t.readyState ? y(e) : setTimeout(arguments.callee, 10)
            })()) : t.parentNode.removeChild(t))
        }

        function y(e) {
            var t = h(e);
            if (t) {
                for (var n in t) "function" == typeof t[n] && (t[n] = null);
                t.parentNode.removeChild(t)
            }
        }

        function h(e) {
            var t = null;
            try {
                t = F.getElementById(e)
            } catch (e) {}
            return t
        }

        function m(e) {
            return F.createElement(e)
        }

        function g(e, t, n) {
            e.attachEvent(t, n), R[R.length] = [e, t, n]
        }

        function w(e) {
            var t = G.pv,
                n = e.split(".");
            return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]
        }

        function b(e, t, n, a) {
            if (!G.ie || !G.mac) {
                var i = F.getElementsByTagName("head")[0];
                if (i) {
                    var r = n && "string" == typeof n ? n : "screen";
                    if (a && (T = null, L = null), !T || L != r) {
                        var o = m("style");
                        o.setAttribute("type", "text/css"), o.setAttribute("media", r), T = i.appendChild(o), G.ie && G.win && typeof F.styleSheets != k && F.styleSheets.length > 0 && (T = F.styleSheets[F.styleSheets.length - 1]), L = r
                    }
                    G.ie && G.win ? T && typeof T.addRule == O && T.addRule(e, t) : T && typeof F.createTextNode != k && T.appendChild(F.createTextNode(e + " {" + t + "}"))
                }
            }
        }

        function E(e, t) {
            if (H) {
                var n = t ? "visible" : "hidden";
                W && h(e) ? h(e).style.visibility = n : b("#" + e, "visibility:" + n)
            }
        }

        function C(e) {
            return null != /[\\\"<>\.;]/.exec(e) && typeof encodeURIComponent != k ? encodeURIComponent(e) : e
        }
        var S, A, I, N, T, L, k = "undefined",
            O = "object",
            B = "application/x-shockwave-flash",
            j = window,
            F = document,
            x = navigator,
            $ = !1,
            M = [i],
            V = [],
            P = [],
            R = [],
            W = !1,
            D = !1,
            H = !0,
            G = (function() {
                var e = typeof F.getElementById != k && typeof F.getElementsByTagName != k && typeof F.createElement != k,
                    t = x.userAgent.toLowerCase(),
                    n = x.platform.toLowerCase(),
                    a = n ? /win/.test(n) : /win/.test(t),
                    i = n ? /mac/.test(n) : /mac/.test(t),
                    r = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                    o = !1,
                    l = [0, 0, 0],
                    s = null;
                if (typeof x.plugins != k && typeof x.plugins["Shockwave Flash"] == O) s = x.plugins["Shockwave Flash"].description, !s || typeof x.mimeTypes != k && x.mimeTypes[B] && !x.mimeTypes[B].enabledPlugin || ($ = !0, o = !1, s = s.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), l[0] = parseInt(s.replace(/^(.*)\..*$/, "$1"), 10), l[1] = parseInt(s.replace(/^.*\.(.*)\s.*$/, "$1"), 10), l[2] = /[a-zA-Z]/.test(s) ? parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if (typeof j.ActiveXObject != k) try {
                    var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    c && (s = c.GetVariable("$version"), s && (o = !0, s = s.split(" ")[1].split(","), l = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)]))
                } catch (e) {}
                return {
                    w3: e,
                    pv: l,
                    wk: r,
                    ie: o,
                    win: a,
                    mac: i
                }
            })();
        (function() {
            G.w3 && ((typeof F.readyState != k && "complete" == F.readyState || typeof F.readyState == k && (F.getElementsByTagName("body")[0] || F.body)) && t(), W || (typeof F.addEventListener != k && F.addEventListener("DOMContentLoaded", t, !1), G.ie && G.win && (F.attachEvent("onreadystatechange", function() {
                "complete" == F.readyState && (F.detachEvent("onreadystatechange", arguments.callee), t())
            }), j == top && (function() {
                if (!W) {
                    try {
                        F.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(arguments.callee, 0)
                    }
                    t()
                }
            })()), G.wk && (function() {
                if (!W) return /loaded|complete/.test(F.readyState) ? void t() : void setTimeout(arguments.callee, 0)
            })(), a(t)))
        })(), (function() {
            G.ie && G.win && window.attachEvent("onunload", function() {
                for (var t = R.length, n = 0; n < t; n++) R[n][0].detachEvent(R[n][1], R[n][2]);
                for (var a = P.length, i = 0; i < a; i++) v(P[i]);
                for (var r in G) G[r] = null;
                G = null;
                for (var o in e) e[o] = null;
                e = null
            })
        })();
        return {
            registerObject: function(e, t, n, a) {
                if (G.w3 && e && t) {
                    var i = {};
                    i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = a, V[V.length] = i, E(e, !1)
                } else a && a({
                    success: !1,
                    id: e
                })
            },
            getObjectById: function(e) {
                if (G.w3) return l(e)
            },
            embedSWF: function(e, t, a, i, r, o, l, d, f, p) {
                var v = {
                    success: !1,
                    id: t
                };
                G.w3 && !(G.wk && G.wk < 312) && e && t && a && i && r ? (E(t, !1), n(function() {
                    a += "", i += "";
                    var n = {};
                    if (f && typeof f === O)
                        for (var y in f) n[y] = f[y];
                    n.data = e, n.width = a, n.height = i;
                    var h = {};
                    if (d && typeof d === O)
                        for (var m in d) h[m] = d[m];
                    if (l && typeof l === O)
                        for (var g in l) typeof h.flashvars != k ? h.flashvars += "&" + g + "=" + l[g] : h.flashvars = g + "=" + l[g];
                    if (w(r)) {
                        var b = u(n, h, t);
                        n.id == t && E(t, !0), v.success = !0, v.ref = b
                    } else {
                        if (o && s()) return n.data = o, void c(n, h, t, p);
                        E(t, !0)
                    }
                    p && p(v)
                })) : p && p(v)
            },
            switchOffAutoHideShow: function() {
                H = !1
            },
            ua: G,
            getFlashPlayerVersion: function() {
                return {
                    major: G.pv[0],
                    minor: G.pv[1],
                    release: G.pv[2]
                }
            },
            hasFlashPlayerVersion: w,
            createSWF: function(e, t, n) {
                return G.w3 ? u(e, t, n) : void 0
            },
            showExpressInstall: function(e, t, n, a) {
                G.w3 && s() && c(e, t, n, a)
            },
            removeSWF: function(e) {
                G.w3 && v(e)
            },
            createCSS: function(e, t, n, a) {
                G.w3 && b(e, t, n, a)
            },
            addDomLoadEvent: n,
            addLoadEvent: a,
            getQueryParamValue: function(e) {
                var t = F.location.search || F.location.hash;
                if (t) {
                    if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return C(t);
                    for (var n = t.split("&"), a = 0; a < n.length; a++)
                        if (n[a].substring(0, n[a].indexOf("=")) == e) return C(n[a].substring(n[a].indexOf("=") + 1))
                }
                return ""
            },
            expressInstallCallback: function() {
                if (D) {
                    var e = h("SWFObjectExprInst");
                    e && S && (e.parentNode.replaceChild(S, e), A && (E(A, !0), G.ie && G.win && (S.style.display = "block")), I && I(N)), D = !1
                }
            }
        }
    })();
    return e
}.bind(Object.create(null)));
//# sourceMappingURL=swfobject.min.js-vflsWG14s.map