
        function _preLoadErrorHandler() {
            if (arguments) {
                var n = {
                    Page: window.location.href,
                    Message: arguments[0] || "",
                    Script: arguments[1] || "inline",
                    LineNumber: arguments[2] || 0,
                    UserAgent: window.navigator ? window.navigator.userAgent : ""
                };
                _preLoadErrorsBuffer.push(n)
            }
        }
        var _preLoadErrorsBuffer = [];
        (function(n) {
            var t = window.onerror;
            window.onerror = function() {
                t && t.apply(this, arguments);
                n.apply(this, arguments)
            }
        })(_preLoadErrorHandler);
        /*! lazysizes - v2.0.0 Copyright (c) 2015 Alexander Farkas
        	Released under MIT license, http://github.com/aFarkas/lazysizes
        */
        (function(n, t) {
            var i = t(n, n.document);
            n.lazySizes = i;
            typeof module == "object" && module.exports && (module.exports = i)
        })(window, function(n, t) {
            "use strict";
            if (t.getElementsByClassName) {
                var i, s = t.documentElement,
                    f = n.Date,
                    ft = n.HTMLPictureElement,
                    e = "addEventListener",
                    r = "getAttribute",
                    o = n[e],
                    u = n.setTimeout,
                    et = n.requestAnimationFrame || u,
                    c = n.requestIdleCallback,
                    tt = /^picture$/i,
                    ot = ["load", "error", "lazyincluded", "_lazyloaded"],
                    l = {},
                    st = Array.prototype.forEach,
                    a = function(n, t) {
                        return l[t] || (l[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), l[t].test(n[r]("class") || "") && l[t]
                    },
                    v = function(n, t) {
                        a(n, t) || n.setAttribute("class", (n[r]("class") || "").trim() + " " + t)
                    },
                    d = function(n, t) {
                        var i;
                        (i = a(n, t)) && n.setAttribute("class", (n[r]("class") || "").replace(i, " "))
                    },
                    h = function(n, t, i) {
                        var r = i ? e : "removeEventListener";
                        i && h(n, t);
                        ot.forEach(function(i) {
                            n[r](i, t)
                        })
                    },
                    y = function(n, i, r, u, f) {
                        var e = t.createEvent("CustomEvent");
                        return e.initCustomEvent(i, !u, !f, r || {}), n.dispatchEvent(e), e
                    },
                    g = function(t, r) {
                        var u;
                        !ft && (u = n.picturefill || i.pf) ? u({
                            reevaluate: !0,
                            elements: [t]
                        }) : r && r.src && (t.src = r.src)
                    },
                    p = function(n, t) {
                        return (getComputedStyle(n, null) || {})[t]
                    },
                    it = function(n, t, r) {
                        for (r = r || n.offsetWidth; r < i.minSize && t && !n._lazysizesWidth;) r = t.offsetWidth, t = t.parentNode;
                        return r
                    },
                    w = function() {
                        var n, i, r = [],
                            f = function() {
                                var t;
                                for (n = !0, i = !1; r.length;) t = r.shift(), t[0].apply(t[1], t[2]);
                                n = !1
                            };
                        return function(e) {
                            n ? e.apply(this, arguments) : (r.push([e, this, arguments]), i || (i = !0, (t.hidden ? u : et)(f)))
                        }
                    }(),
                    b = function(n, t) {
                        return t ? function() {
                            w(n)
                        } : function() {
                            var t = this,
                                i = arguments;
                            w(function() {
                                n.apply(t, i)
                            })
                        }
                    },
                    ht = function(n) {
                        var i, e = 0,
                            h = 125,
                            r = 999,
                            t = r,
                            o = function() {
                                i = !1;
                                e = f.now();
                                n()
                            },
                            s = c ? function() {
                                c(o, {
                                    timeout: t
                                });
                                t !== r && (t = r)
                            } : b(function() {
                                u(o)
                            }, !0);
                        return function(n) {
                            var r;
                            ((n = n === !0) && (t = 66), i) || (i = !0, r = h - (f.now() - e), r < 0 && (r = 0), n || r < 9 && c ? s() : u(s, r))
                        }
                    },
                    rt = function(n) {
                        var t, r, i = 99,
                            e = function() {
                                t = null;
                                n()
                            },
                            o = function() {
                                var n = f.now() - r;
                                n < i ? u(o, i - n) : (c || e)(e)
                            };
                        return function() {
                            r = f.now();
                            t || (t = u(o, i))
                        }
                    },
                    ut = function() {
                        var l, vt, ut, gt, ft, ni, ti, ii, et, ot, ct, lt, kt, yt, dt, fi = /^img$/i,
                            ei = /^iframe$/i,
                            oi = "onscroll" in n && !/glebot/.test(navigator.userAgent),
                            si = 0,
                            at = 0,
                            k = 0,
                            it = -1,
                            pt = function(n) {
                                k--;
                                n && n.target && h(n.target, pt);
                                (!n || k < 0 || !n.target) && (k = 0)
                            },
                            hi = function(n, i) {
                                var u, r = n,
                                    f = p(t.body, "visibility") == "hidden" || p(n, "visibility") != "hidden";
                                for (et -= i, lt += i, ot -= i, ct += i; f && (r = r.offsetParent) && r != t.body && r != s;) f = (p(r, "opacity") || 1) > 0, f && p(r, "overflow") != "visible" && (u = r.getBoundingClientRect(), f = ct > u.left && ot < u.right && lt > u.top - 1 && et < u.bottom + 1);
                                return f
                            },
                            ci = function() {
                                var a, n, f, e, h, u, c, o, v;
                                if ((ft = i.loadMode) && k < 8 && (a = l.length)) {
                                    for (n = 0, it++, yt == null && ("expand" in i || (i.expand = s.clientHeight > 500 ? 500 : 400), kt = i.expand, yt = kt * i.expFactor), at < yt && k < 1 && it > 2 && ft > 2 && !t.hidden ? (at = yt, it = 0) : at = ft > 1 && it > 1 && k < 6 ? kt : si; n < a; n++)
                                        if (l[n] && !l[n]._lazyRace) {
                                            if (!oi) {
                                                wt(l[n]);
                                                continue
                                            }
                                            if ((o = l[n][r]("data-expand")) && (u = o * 1) || (u = at), v !== u && (ti = innerWidth + u * dt, ii = innerHeight + u, c = u * -1, v = u), f = l[n].getBoundingClientRect(), (lt = f.bottom) >= c && (et = f.top) <= ii && (ct = f.right) >= c * dt && (ot = f.left) <= ti && (lt || ct || ot || et) && (ut && k < 3 && !o && (ft < 3 || it < 4) || hi(l[n], u))) {
                                                if (wt(l[n]), h = !0, k > 9) break
                                            } else !h && ut && !e && k < 4 && it < 4 && ft > 2 && (vt[0] || i.preloadAfterLoad) && (vt[0] || !o && (lt || ct || ot || et || l[n][r](i.sizesAttr) != "auto")) && (e = vt[0] || l[n])
                                        }
                                    e && !h && wt(e)
                                }
                            },
                            c = ht(ci),
                            ri = function(n) {
                                v(n.target, i.loadedClass);
                                d(n.target, i.loadingClass);
                                h(n.target, ui)
                            },
                            li = b(ri),
                            ui = function(n) {
                                li({
                                    target: n.target
                                })
                            },
                            ai = function(n, t) {
                                try {
                                    n.contentWindow.location.replace(t)
                                } catch (i) {
                                    n.src = t
                                }
                            },
                            vi = function(n) {
                                var t, u, f = n[r](i.srcsetAttr);
                                (t = i.customMedia[n[r]("data-media") || n[r]("media")]) && n.setAttribute("media", t);
                                f && n.setAttribute("srcset", f);
                                t && (u = n.parentNode, u.insertBefore(n.cloneNode(), n), u.removeChild(n))
                            },
                            yi = b(function(n, t, f, e, o) {
                                var s, c, a, l, p, b;
                                (p = y(n, "lazybeforeunveil", t)).defaultPrevented || (e && (f ? v(n, i.autosizesClass) : n.setAttribute("sizes", e)), c = n[r](i.srcsetAttr), s = n[r](i.srcAttr), o && (a = n.parentNode, l = a && tt.test(a.nodeName || "")), b = t.firesLoad || "src" in n && (c || s || l), p = {
                                    target: n
                                }, b && (h(n, pt, !0), clearTimeout(gt), gt = u(pt, 2500), v(n, i.loadingClass), h(n, ui, !0)), l && st.call(a.getElementsByTagName("source"), vi), c ? n.setAttribute("srcset", c) : s && !l && (ei.test(n.nodeName) ? ai(n, s) : n.src = s), (c || l) && g(n, {
                                    src: s
                                }));
                                w(function() {
                                    n._lazyRace && delete n._lazyRace;
                                    d(n, i.lazyClass);
                                    (!b || n.complete) && (b ? pt(p) : k--, ri(p))
                                })
                            }),
                            wt = function(n) {
                                var f, t = fi.test(n.nodeName),
                                    e = t && (n[r](i.sizesAttr) || n[r]("sizes")),
                                    u = e == "auto";
                                (u || !ut) && t && (n.src || n.srcset) && !n.complete && !a(n, i.errorClass) || (f = y(n, "lazyunveilread").detail, u && nt.updateElem(n, !0, n.offsetWidth), n._lazyRace = !0, k++, yi(n, f, u, e, t))
                            },
                            bt = function() {
                                if (!ut) {
                                    if (f.now() - ni < 999) {
                                        u(bt, 999);
                                        return
                                    }
                                    var n = rt(function() {
                                        i.loadMode = 3;
                                        c()
                                    });
                                    ut = !0;
                                    i.loadMode = 3;
                                    c();
                                    o("scroll", function() {
                                        i.loadMode == 3 && (i.loadMode = 2);
                                        n()
                                    }, !0)
                                }
                            };
                        return {
                            _: function() {
                                ni = f.now();
                                l = t.getElementsByClassName(i.lazyClass);
                                vt = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass);
                                dt = i.hFac;
                                o("scroll", c, !0);
                                o("resize", c, !0);
                                n.MutationObserver ? new n.MutationObserver(c).observe(s, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (s[e]("DOMNodeInserted", c, !0), s[e]("DOMAttrModified", c, !0), setInterval(c, 999));
                                o("hashchange", c, !0);
                                ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(n) {
                                    t[e](n, c, !0)
                                });
                                /d$|^c/.test(t.readyState) ? bt() : (o("load", bt), t[e]("DOMContentLoaded", c), u(bt, 2e4));
                                c(l.length > 0)
                            },
                            checkElems: c,
                            unveil: wt
                        }
                    }(),
                    nt = function() {
                        var n, f = b(function(n, t, i, r) {
                                var f, u, e;
                                if (n._lazysizesWidth = r, r += "px", n.setAttribute("sizes", r), tt.test(t.nodeName || ""))
                                    for (f = t.getElementsByTagName("source"), u = 0, e = f.length; u < e; u++) f[u].setAttribute("sizes", r);
                                i.detail.dataAttr || g(n, i.detail)
                            }),
                            r = function(n, t, i) {
                                var r, u = n.parentNode;
                                u && (i = it(n, u, i), r = y(n, "lazybeforesizes", {
                                    width: i,
                                    dataAttr: !!t
                                }), r.defaultPrevented || (i = r.detail.width, i && i !== n._lazysizesWidth && f(n, u, r, i)))
                            },
                            e = function() {
                                var t, i = n.length;
                                if (i)
                                    for (t = 0; t < i; t++) r(n[t])
                            },
                            u = rt(e);
                        return {
                            _: function() {
                                n = t.getElementsByClassName(i.autosizesClass);
                                o("resize", u)
                            },
                            checkElems: u,
                            updateElem: r
                        }
                    }(),
                    k = function() {
                        k.i || (k.i = !0, nt._(), ut._())
                    };
                return function() {
                    var t, r = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2
                    };
                    i = n.lazySizesConfig || n.lazysizesConfig || {};
                    for (t in r) t in i || (i[t] = r[t]);
                    n.lazySizesConfig = i;
                    u(function() {
                        i.init && k()
                    })
                }(), {
                    cfg: i,
                    autoSizer: nt,
                    loader: ut,
                    init: k,
                    uP: g,
                    aC: v,
                    rC: d,
                    hC: a,
                    fire: y,
                    gW: it,
                    rAF: w
                }
            }
        }),
        function(n, t, i, r, u, f) {
            "use strict";
            var o, e = i && i.cfg || r,
                s = t.createElement("img"),
                h = "sizes" in s && "srcset" in s,
                c = /\s+\d+h/g,
                l = function() {
                    var n = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                        i = Array.prototype.forEach;
                    return function(u) {
                        var f = t.createElement("img"),
                            o = function(t) {
                                var i, u = t.getAttribute(r.srcsetAttr);
                                u && (u.match(n) && (i = RegExp.$2 == "w" ? RegExp.$1 / RegExp.$3 : RegExp.$3 / RegExp.$1, i && t.setAttribute("data-aspectratio", i)), t.setAttribute(r.srcsetAttr, u.replace(c, "")))
                            },
                            s = function(n) {
                                var t = n.target.parentNode;
                                t && t.nodeName == "PICTURE" && i.call(t.getElementsByTagName("source"), o);
                                o(n.target)
                            },
                            e = function() {
                                !f.currentSrc || t.removeEventListener("lazybeforeunveil", s)
                            };
                        u[1] && (t.addEventListener("lazybeforeunveil", s), (!0 || u[1] > 14) && (f.onload = e, f.onerror = e, f.srcset = "data:,a 1w 1h", f.complete && e()))
                    }
                }();
            if (e || (e = {}, r = e), e.supportsType || (e.supportsType = function(n) {
                    return !n
                }), !u && !e.pf) {
                if (f && h) {
                    t.msElementsFromPoint && l(navigator.userAgent.match(/Edge\/(\d+)/));
                    e.pf = function() {};
                    return
                }
                e.pf = function(n) {
                    var t, i;
                    if (!u)
                        for (t = 0, i = n.elements.length; t < i; t++) o(n.elements[t])
                };
                o = function() {
                    var a = function(n, t) {
                            return n.w - t.w
                        },
                        v = /^\s*\d+px\s*$/,
                        y = function(n) {
                            var i, u, f = n.length,
                                t = n[f - 1],
                                r = 0;
                            for (r; r < f; r++)
                                if (t = n[r], t.d = t.w / n.w, t.d >= n.d) {
                                    !t.cached && (i = n[r - 1]) && i.d > n.d - .13 * Math.pow(n.d, 2.2) && (u = Math.pow(i.d - .6, 1.6), i.cached && (i.d += .15 * u), i.d + (t.d - n.d) * u > n.d && (t = i));
                                    break
                                }
                            return t
                        },
                        f = function() {
                            var n, t = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                                i = /\s/,
                                r = function(t, i, r, u) {
                                    n.push({
                                        c: i,
                                        u: r,
                                        w: u * 1
                                    })
                                };
                            return function(u) {
                                return n = [], u = u.trim(), u.replace(c, "").replace(t, r), n.length || !u || i.test(u) || n.push({
                                    c: u,
                                    u: u,
                                    w: 99
                                }), n
                            }
                        }(),
                        r = function() {
                            r.init || (r.init = !0, addEventListener("resize", function() {
                                var n, i = t.getElementsByClassName("lazymatchmedia"),
                                    r = function() {
                                        for (var n = 0, t = i.length; n < t; n++) o(i[n])
                                    };
                                return function() {
                                    clearTimeout(n);
                                    n = setTimeout(r, 66)
                                }
                            }()))
                        },
                        s = function(t, u) {
                            var o, s = t.getAttribute("srcset") || t.getAttribute(e.srcsetAttr);
                            !s && u && (s = t._lazypolyfill ? t._lazypolyfill._set : t.getAttribute(e.srcAttr) || t.getAttribute("src"));
                            t._lazypolyfill && t._lazypolyfill._set == s || (o = f(s || ""), u && t.parentNode && (o.isPicture = t.parentNode.nodeName.toUpperCase() == "PICTURE", o.isPicture && n.matchMedia && (i.aC(t, "lazymatchmedia"), r())), o._set = s, Object.defineProperty(t, "_lazypolyfill", {
                                value: o,
                                writable: !0
                            }))
                        },
                        p = function(t) {
                            var r = n.devicePixelRatio || 1,
                                u = i.getX && i.getX(t);
                            return Math.min(u || r, 2.5, r)
                        },
                        u = function(t) {
                            if (n.matchMedia) u = function(n) {
                                return !n || (matchMedia(n) || {}).matches
                            };
                            else return !t;
                            return u(t)
                        },
                        w = function(n) {
                            var h, f, l, r, t, c, o;
                            if (r = n, s(r, !0), t = r._lazypolyfill, t.isPicture)
                                for (f = 0, h = n.parentNode.getElementsByTagName("source"), l = h.length; f < l; f++)
                                    if (e.supportsType(h[f].getAttribute("type"), n) && u(h[f].getAttribute("media"))) {
                                        r = h[f];
                                        s(r);
                                        t = r._lazypolyfill;
                                        break
                                    }
                            return t.length > 1 ? (o = r.getAttribute("sizes") || "", o = v.test(o) && parseInt(o, 10) || i.gW(n, n.parentNode), t.d = p(n), !t.src || !t.w || t.w < o ? (t.w = o, c = y(t.sort(a)), t.src = c) : c = t.src) : c = t[0], c
                        },
                        l = function(n) {
                            if (!h || !n.parentNode || n.parentNode.nodeName.toUpperCase() == "PICTURE") {
                                var t = w(n);
                                t && t.u && n._lazypolyfill.cur != t.u && (n._lazypolyfill.cur = t.u, t.cached = !0, n.setAttribute(e.srcAttr, t.u), n.setAttribute("src", t.u))
                            }
                        };
                    return l.parse = f, l
                }();
                e.loadedClass && e.loadingClass && function() {
                    var n = [];
                    ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function(t) {
                        n.push(t + e.loadedClass);
                        n.push(t + e.loadingClass)
                    });
                    e.pf({
                        elements: t.querySelectorAll(n.join(", "))
                    })
                }()
            }
        }(window, document, window.lazySizes, window.lazySizesConfig, window.picturefill),
        function(n, t) {
            "use strict";
            var i, r = n.createElement("img");
            !("srcset" in r) || "sizes" in r || t || (i = /^picture$/i, n.addEventListener("lazybeforeunveil", function(t) {
                var r, u, o, s, h, f, e;
                !t.defaultPrevented && !lazySizesConfig.noIOSFix && (r = t.target) && (o = r.getAttribute(lazySizesConfig.srcsetAttr)) && (u = r.parentNode) && ((h = i.test(u.nodeName || "")) || (s = r.getAttribute("sizes") || r.getAttribute(lazySizesConfig.sizesAttr))) && (f = h ? u : n.createElement("picture"), r._lazyImgSrc || Object.defineProperty(r, "_lazyImgSrc", {
                    value: n.createElement("source"),
                    writable: !0
                }), e = r._lazyImgSrc, s && e.setAttribute("sizes", s), e.setAttribute(lazySizesConfig.srcsetAttr, o), r.setAttribute("data-pfsrcset", o), r.removeAttribute(lazySizesConfig.srcsetAttr), h || (u.insertBefore(f, r), f.appendChild(r)), f.insertBefore(e, r))
            }))
        }(document, window.HTMLPictureElement),
        function(n, t) {
            function s() {
                performance.mark("frame");
                e || a();
                performance.now() < l ? requestAnimationFrame(s) : (t.removeEventListener("visibilitychange", f, !1), n._pageTimings.wasPageHidden = r)
            }

            function a() {
                o = i;
                i = performance.now();
                i - o <= c ? i - u >= h && (n._pageTimings.TimeToPageInteractive = Math.round(u), e = !0) : u = i
            }

            function f() {
                t.visibilityState !== "visible" && (r = !0, t.removeEventListener("visibilitychange", f, !1))
            }
            var e = !1,
                r = !1,
                i = 0,
                o = 0,
                u = 0,
                h = 1e3,
                c = 200,
                l = 3e4;
            n._pageTimings || (n._pageTimings = {});
            n.performance && performance.mark && performance.now && n.requestAnimationFrame && n.parent === n && t.visibilityState && t.addEventListener && (t.visibilityState === "visible" ? t.addEventListener("visibilitychange", f, !1) : r = !0, requestAnimationFrame(s))
        }(window, document),
        function(n) {
            if (n._pageTimings || (n._pageTimings = {}), n._pageTimings.isPaintTimingSupported = !1, n._pageTimings.hasFCPFired = !1, n.PerformanceObserver !== undefined) {
                var t = new n.PerformanceObserver(function(i) {
                    var u = i.getEntries(),
                        r;
                    if (u.length > 1) {
                        for (n._pageTimings.hasFCPFired = !0, n._pageTimings.checkPointMetrics || (n._pageTimings.checkPointMetrics = {}), r = 0; r < u.length; r++) n._pageTimings.checkPointMetrics[u[r].name] = Math.round(u[r].startTime);
                        t.disconnect()
                    }
                });
                try {
                    t.observe({
                        entryTypes: ["paint"]
                    });
                    n._pageTimings.isPaintTimingSupported = !0
                } catch (i) {}
            }
        }(window)
    