
        //<![CDATA[
        RMS2 = new function() {
            function s(n, t) {
                for (var f = 6, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", i = n ? n.split("") : [], e, u = ~~(t / f); i.length <= u;) i.push(r.charAt(0));
                return e = r.indexOf(i[u]) | 1 << t % f, i[u] = r.charAt(e), i.join("")
            }

            function h(n) {
                var t = sj_cook.get("RMS", n.n);
                sj_cook.set("RMS", n.n, s(t, n.c), !1, "/", 0)
            }

            function c() {
                _d.domain == r && (n.P && n.P(), o = new Date, t(0))
            }

            function t(r) {
                var s = i[r],
                    e, c;
                if (s) {
                    if (e = sj_gx(), !e) return;
                    e.open("get", s.u, !0);
                    c = sb_st(function() {
                        e[u] != 4 && (e[f] = function() {}, e.abort(), t(r + 1))
                    }, 5e3);
                    e[f] = function() {
                        e[u] == 4 && (sb_ct(c), h(i[r]), t(r + 1))
                    };
                    e.send(null)
                } else n.I && n.I(o)
            }
            var i = [],
                r = "",
                u = "readyState",
                f = "onreadystatechange",
                e, o, n = _w.RmsConfig || {};
            this.RegisterResources = function(n, t, u, f) {
                r = _d.domain;
                for (var o = 0; o < n.length; o++) i.push({
                    n: u,
                    u: n[o],
                    c: f[o]
                });
                e || (e = !0, sj_evt.bind("onP1", c, 1, 1e3))
            }
        };
        var Mobile;
        (function(n) {
            var t;
            (function(n) {
                function t() {
                    return typeof _w.innerWidth == "number" ? _w.innerWidth : sj_b.clientWidth
                }

                function i() {
                    return typeof _w.innerHeight == "number" ? _w.innerHeight : sj_b.clientHeight
                }

                function u() {
                    return t()
                }

                function f() {
                    return i()
                }

                function e() {
                    return t() > i()
                }

                function r() {
                    return "onorientationchange" in _w
                }

                function o() {
                    return r() ? "orientationchange" : "resize"
                }
                n.Width = u;
                n.Height = f;
                n.IsLandscape = e;
                n.SupportsOrientationChange = r;
                n.OrientationChangeEventName = o
            })(t = n.Screen || (n.Screen = {}))
        })(Mobile || (Mobile = {}));
        var Web;
        (function(n) {
            var t;
            (function(n) {
                function t(n) {
                    return !(n && typeof n == "string" && n.length > 0)
                }
                n.isNullOrEmpty = t
            })(t = n.String || (n.String = {}))
        })(Web || (Web = {}));
        var Web;
        (function(n) {
            var t;
            (function(n) {
                function t(n) {
                    return n === null || typeof n == "undefined"
                }
                n.isNullOrUndefined = t
            })(t = n.Util || (n.Util = {}))
        })(Web || (Web = {}));
        var Web;
        (function(n) {
            var t;
            (function(t) {
                function u(t, i) {
                    var u;
                    return n.String.isNullOrEmpty(t) ? !1 : (r() ? (_w.localStorage.setItem(t, i), u = !0) : u = !1, u)
                }

                function f(t) {
                    return n.String.isNullOrEmpty(t) ? null : r() ? _w.localStorage.getItem(t) : null
                }

                function e(t) {
                    var i;
                    return n.String.isNullOrEmpty(t) ? !1 : (r() ? (_w.localStorage.removeItem(t), i = !0) : i = !1, i)
                }

                function r() {
                    if (typeof i == "undefined") try {
                        _w.localStorage.setItem("hasLS", "1");
                        _w.localStorage.removeItem("hasLS");
                        i = !0
                    } catch (n) {
                        i = !1
                    }
                    return i
                }
                var i;
                t.setItem = u;
                t.getItem = f;
                t.removeItem = e;
                t.isSupported = r
            })(t = n.LocalStorage || (n.LocalStorage = {}))
        })(Web || (Web = {}));
        var Mobile;
        (function(n) {
            var t;
            (function(n) {
                function f(n) {
                    return _w.location.search.length > 1 && n.push(_w.location.search.substring(1)), n
                }

                function e(n) {
                    _w.Log && Log.Log && Log.Log("Show", n, null)
                }

                function o() {
                    return u
                }

                function s(n, t, u) {
                    if (n) {
                        t || (n.style.display = "block");
                        var f = sj_fader(),
                            e = t ? i : r,
                            o = t ? r : i;
                        f.init(n, e, o, 25, function() {
                            t && (n.style.display = "none");
                            u && u()
                        })
                    }
                }
                var t = navigator.userAgent,
                    u = t.match(/iPhone/i) || t.match(/iPod/i),
                    i = 100,
                    r = 0;
                n.PushParams = f;
                n.Inst = e;
                n.IsIPhone = o;
                n.HideOrShowElement = s
            })(t = n.MobileLib || (n.MobileLib = {}))
        })(Mobile || (Mobile = {}));
        var Mobile;
        (function(n) {
            var t;
            (function(t) {
                function r() {
                    var t = _ge("bgDiv"),
                        n = function() {
                            l(t)
                        };
                    _H.cards ? (u(null), sj_evt.fire("PositionCards", n)) : u(n)
                }

                function u(t) {
                    var i = n.Screen.Height(),
                        r = n.Screen.Width();
                    a(i, r);
                    t && t()
                }

                function l(t) {
                    var u = n.Screen.Width(),
                        f = n.Screen.Height(),
                        h, r, s;
                    u != o && f != e && (o = u, e = f, h = k(u, f), i = sb_gt(), _H.startTm && _w.hp_llog && hp_llog("ImageStart", i - _H.startTm), r = new Image, s = sj_wf(b, t, r), r.onload = s, r.onerror = s, r.src = h)
                }

                function b(n, t) {
                    n.style.backgroundImage = "url(" + t.src + ")";
                    _w.hp_llog && hp_llog("Image", sb_gt() - i);
                    _w.hp_llog && hp_llog("ImageEnd", sb_gt() - i);
                    c || (sj_evt.fire("onBgSet"), _H.cards || sj_evt.fire("onRBComplete"), c = !0)
                }

                function k(t, i) {
                    var r = ["?w=" + t, "h=" + i];
                    return t >= i && _H.img ? _H.img : i > t && _H.imgp ? _H.imgp : (_w.g_imgHash && r.push("hash=" + _w.g_imgHash), r = n.MobileLib.PushParams(r), p + r.join("&"))
                }

                function d() {
                    var t = n.Screen.Height(),
                        i = n.Screen.Width();
                    (s !== t || h !== i) && (a(t, i), r())
                }

                function a(n, t) {
                    s = n;
                    h = t
                }

                function v() {
                    n.MobileLib.Inst("HpRotate")
                }

                function g() {
                    n.Screen.Height() > n.Screen.Width() ? n.MobileLib.Inst("HpPortrait") : n.MobileLib.Inst("HpLandscape");
                    n.Screen.SupportsOrientationChange() && sj_be(_w, f, v)
                }

                function y() {
                    var t = _ge("bgDiv");
                    t && (r(), g(), n.MobileLib.IsIPhone() || setInterval(d, w))
                }

                function nt() {
                    sj_ue(_w, "load", y);
                    sj_ue(_w, f, v)
                }
                var f = "orientationchange",
                    p = "/ImageResolution.aspx",
                    e, o, s = n.Screen.Height(),
                    h = n.Screen.Width(),
                    w = 1e3,
                    c = !1,
                    i;
                t.SetupBackground = r;
                t.FitBodyToScreenSize = u;
                t.SetBackground = l;
                sj_be(_w, "load", y);
                _H.ajax && sj_evt.bind("unload", nt)
            })(t = n.HomepageBackground || (n.HomepageBackground = {}))
        })(Mobile || (Mobile = {})),
        function(n) {
            var t;
            (function(t) {
                function r() {
                    n.Screen.SupportsOrientationChange() && sj_be(_w, e, i);
                    sj_be(_w, u, i)
                }

                function i() {
                    n.HomepageBackground.SetupBackground()
                }

                function o() {
                    sj_ue(_w, e, i);
                    sj_ue(_w, u, i);
                    sj_ue(_w, f, r);
                    sj_b.style.height = "auto"
                }
                var u = "resize",
                    f = "load",
                    e = "orientationchange";
                t.Load = r;
                sj_be(_w, f, r);
                _H.ajax && sj_evt.bind("unload", o)
            })(t = n.HomepageResize || (n.HomepageResize = {}))
        }(Mobile || (Mobile = {}));
        var SearchBoxCommon;
        (function(n) {
            function t(n, t) {
                var i = n.value !== "" ? "block" : "none";
                t.style.display = i
            }

            function i() {
                return "ontouchstart" in _w ? "touchend" : "click"
            }
            n.enableClrBtn = t;
            n.clickEvent = i
        })(SearchBoxCommon || (SearchBoxCommon = {}));
        var Lib;
        (function(n) {
            var t;
            (function(n) {
                function u(n, t) {
                    var r, i;
                    if (t == null || n == null) throw new TypeError("Null element passed to Lib.CssClass");
                    if (n.indexOf) return n.indexOf(t);
                    for (r = n.length, i = 0; i < r; i++)
                        if (n[i] === t) return i;
                    return -1
                }

                function f(n, u) {
                    if (n == null) throw new TypeError("Null element passed to Lib.CssClass");
                    if (!t(n, u))
                        if (r && n.classList) n.classList.add(u);
                        else {
                            var f = i(n) + " " + u;
                            o(n, f)
                        }
                }

                function e(n, f) {
                    var e, s, h;
                    if (n == null) throw new TypeError("Null element passed to Lib.CssClass");
                    t(n, f) && (r && n.classList ? n.classList.remove(f) : (e = i(n).split(" "), s = u(e, f), s >= 0 && e.splice(s, 1), h = e.join(" "), o(n, h)))
                }

                function s(n, i) {
                    if (n == null) throw new TypeError("Null element passed to Lib.CssClass");
                    r && n.classList ? n.classList.toggle(i) : t(n, i) ? e(n, i) : f(n, i)
                }

                function t(n, t) {
                    var f, e;
                    if (n == null) throw new TypeError("Null element passed to Lib.CssClass");
                    return r && n.classList ? n.classList.contains(t) : (f = i(n), f) ? (e = f.split(" "), u(e, t) >= 0) : !1
                }

                function h(n, t) {
                    var f, e, r, u, o;
                    if (n.getElementsByClassName) return n.getElementsByClassName(t);
                    for (f = n.getElementsByTagName("*"), e = [], r = 0; r < f.length; r++) u = f[r], u && (o = i(u), o && o.indexOf(t) !== -1 && e.push(u));
                    return e
                }

                function o(n, t) {
                    n instanceof SVGElement ? n.setAttribute("class", t) : n.className = t
                }

                function i(n) {
                    return n instanceof SVGElement ? n.getAttribute("class") : n.className
                }
                var r = typeof document.body.classList != "undefined";
                n.add = f;
                n.remove = e;
                n.toggle = s;
                n.contains = t;
                n.getElementByClassName = h
            })(t = n.CssClass || (n.CssClass = {}))
        })(Lib || (Lib = {}));
        var HomepageSearchBox;
        (function() {
            function e(r) {
                r || sj_evt.fire("focusChange", null);
                Lib.CssClass.remove(sj_b, u);
                sj_evt.fire("onASClose");
                n.blur();
                _w.scrollTo(0, 0);
                h || sj_be(sj_b, "touchmove", sj_pd);
                i(t, !1)
            }

            function b() {
                var n = setInterval(function() {
                    f != sj_b.scrollTop && (_w.scrollTo(0, f), self.clearInterval(n))
                }, 5)
            }

            function k() {
                p && y && (f = sj_b.scrollTop, b());
                o() || (n.focus(), l(n))
            }

            function d() {
                n.value = "";
                l(n);
                n.focus();
                i(t, !1)
            }

            function c(t) {
                sj_sp(t);
                n.value === "" && (sj_pd(t), nt(), sj_evt.fire("hpOpalglass"))
            }

            function g() {
                n.value === "" && o() && e(!1)
            }

            function o() {
                return Lib.CssClass.contains(sj_b, u)
            }

            function nt() {
                o() ? e(!1) : k()
            }

            function l(n) {
                sb_st(function() {
                    var t = document.createEvent("MouseEvent");
                    t.initEvent("click", !0, !0);
                    n.dispatchEvent(t)
                }, 0)
            }

            function tt(n, t) {
                var i = it(t, w);
                sj_be(n, "click", i);
                sj_be(n, "touchend", i);
                sj_be(n, "keydown", function(n) {
                    if (n.which == 13 || n.keyCode == 13 || n.which == 32 || n.keyCode == 32) return i(n), !1
                })
            }

            function it(n, t) {
                return function(i) {
                    sj_pd(i);
                    sj_sp(i);
                    n.throttled ? (clearTimeout(n.throttled), n.throttled = 0) : (n.throttled = sb_st(function() {
                        n.throttled = 0
                    }, t), n(i))
                }
            }

            function rt() {
                var n = !1,
                    t = "screen and (-ms-high-contrast: active)";
                _w.matchMedia ? n = _w.matchMedia(t).matches : _w.msMatchMedia && (n = _w.msMatchMedia(t).matches);
                n && (r.type = "image", r.src = "/sa/simg/sbbtn.png")
            }

            function a() {
                var i = Mobile.Screen.Height(),
                    n = _ge("sw_as"),
                    t;
                n && typeof n.getBoundingClientRect == "function" && (t = n.getBoundingClientRect().top, n.style.maxHeight = Mobile.MobileLib.IsIPhone() && Mobile.Screen.IsLandscape() ? "111px" : (i - t).toString() + "px")
            }

            function ut() {
                i(t, n.value !== "")
            }

            function ft() {
                rt();
                h || sj_be(sj_b, "touchmove", sj_pd);
                sj_be(n, "keyup", ut);
                tt(t, d);
                sj_be(r, "click", c);
                sj_be(r, "touchend", c);
                sj_evt.bind("autosuggestHide", function(n) {
                    var i = n[0],
                        r = n[1],
                        t = n[2];
                    t != 0 && e(!0)
                });
                sj_be(_w, "resize", a);
                sj_evt.bind("focusChange", function(r) {
                    var f = r && r.length > 1 && r[1];
                    f && f.id === "sb_form_q" && (Lib.CssClass.add(sj_b, u), i(t, n.value !== ""), sj_evt.fire("onASOpen"), a())
                });
                sj_be(v, "submit", g)
            }
            var v = _ge("sb_form"),
                n = _ge("sb_form_q"),
                r = _ge("sbBtn"),
                t = _ge("clrX"),
                y = _ge("es_switch"),
                u = "as_on",
                s = navigator.userAgent,
                p = s.match(/iPhone/i) || s.match(/iPod/i),
                f, h = _H.cards == 1,
                w = 400,
                i = function(n, t) {
                    return n && (n.style.display = t ? "block" : "none"), i
                };
            sj_be(_d, "DOMContentLoaded", ft)
        })(HomepageSearchBox || (HomepageSearchBox = {}));
        BM.trigger();
        (function(n, t) {
            onload = function() {
                _G.BPT = new Date;
                n && n();
                !_w.sb_ppCPL && t && sb_st(function() {
                    t(new Date)
                }, 0)
            }
        })(_w.onload, _w.si_PP);
        (function() {
            if (!_H.pnfe) {
                sj_evt.bind("OnBnpLoaded", SendRequest, 1, 0);
            }

            function SendRequest() {
                if (typeof Bnp === 'undefined') return;
                if (Bnp.Global) {
                    Bnp.Global.RawRequestURL = "/";
                    Bnp.Global.Referer = null;
                }
                var request = new Bnp.Partner.Request("HomePage");
                request.IID = "SERP.2000";
                request.Submit();
            }
        })();;
        var Mobile;
        (function(n) {
            var t;
            (function() {
                function r() {
                    Lib.CssClass.remove(sj_b, i)
                }

                function u() {
                    Lib.CssClass.add(sj_b, i)
                }

                function f() {
                    Lib.CssClass.add(sj_b, n)
                }

                function e() {
                    Lib.CssClass.remove(sj_b, n)
                }

                function o() {
                    (t = _ge("mHeader"), t) && (sj_evt.bind("onASOpen", r), sj_evt.bind("onASClose", u), sj_evt.bind("bnp.notif.shown", f, 1), sj_evt.bind("bnp.notif.closed", e, 1), sj_ue(sj_b, "touchmove", sj_pd))
                }
                var n = "hp_notif",
                    t, i = "sb_fresh";
                sj_be(_d, "DOMContentLoaded", o)
            })(t = n.SearchboxRefresh || (n.SearchboxRefresh = {}))
        })(Mobile || (Mobile = {}));
        sa_config = {
            "f": "sb_form",
            "i": "sb_form_q",
            "c": "sw_as",
            "u": "%2fAS%2fSuggestions%3fpt%3dpage.home%26mkt%3dnl-nl%26qry%3d",
            "removeSuggUrl": "/historyHandler?oma=delete_matching_queries\u0026qt=%7b0%7d\u0026sig=2AF9E38466946352237EEE75675E62C1\u0026response=json\u0026FORM=ASRMHS",
            "searchHistoryUrl": "/profile/history?FORM=ASRMHP",
            "enabledDataSources": ["Web"],
            "fetchOnEmpty": 1,
            "fetchOnDownArrowKey": 1,
            "t": 1,
            "ol": 1,
            "trimwsnr": 1,
            "clickIco": 1,
            "suppnores": 1,
            "hdm": 1,
            "handleDuplicateFetch": 1,
            "d": 100
        };
        sa_loc = {
            "Suggestions": "Suggestions",
            "SearchRemoved": "This search was removed from your %eSearch history%E"
        };;
        sa_loader = function() {
            _w.rms.js({
                'rms:answers:AutoSuggest:AutoSug': '\/rb\/G\/cj,nj\/17e667dc\/14528b11.js?bu=HUjmAekB7AEvLy8v7wHSAS8vLy8vL6MBswG2AS8vLy_OAS8vL4ICuwE',
                d: 1
            });
        };;
        var sa_eL = !1;
        (function() {
            function e(n, t, i) {
                n && sj_ue(n, t, e);
                sa_eL = sa_eL || i;
                f || (f = !0, sj_evt.fire("AS.bootload", n), sa_loader())
            }

            function r(n, t, i) {
                sj_be(n, t, function(r) {
                    e(n, t, i, sj_ev(r))
                })
            }
            var t = sa_config,
                n = _ge(t.i),
                i, u, f;
            if (n.setAttribute("autocomplete", "off"), i = _ge(t.c), !i) {
                if (u = _ge("sa_qs") || n, !u) throw new Error("AS init failed");
                i = sj_ce("div");
                i.id = t.c;
                u.parentNode.appendChild(i);
                n.setAttribute("aria-controls", t.c)
            }
            f = !1;
            _w.sa_loader && ("ontouchend" in _w && r(n, "touchend", !0), r(n, "click", !0), r(n, "keydown", !0), t.ol && r(_w, "load", !1))
        })();
        var AjaxHelper;
        (function(n) {
            function t(n, t) {
                var f, e, r, i, u;
                if (n) {
                    for (f = n, e = f.getElementsByTagName("script"), r = 0; r < e.length; r++) i = e[r], u = sj_ce("script"), i.src ? u.src = i.src : u.text = i.text, i.parentElement.insertBefore(u, i), i.parentElement.removeChild(i);
                    t && t.appendChild(f)
                }
            }
            n.ParseJs = t
        })(AjaxHelper || (AjaxHelper = {}));
        var Mobile;
        (function(n) {
            var t;
            (function(n) {
                function r(n, r) {
                    var u, f, o, s;
                    if (r) {
                        if (u = r.textContent, f = u.lastIndexOf("("), f < 0) return;
                        var c = u.substring(0, f),
                            e = u.substring(f),
                            h = e;
                        e.length > 2 && (h = e.substring(1, e.length - 1));
                        o = sj_ce(n);
                        o.className = t;
                        o.textContent = c;
                        s = sj_ce(n);
                        s.className = i;
                        s.textContent = h;
                        r.textContent = "";
                        r.appendChild(o);
                        r.appendChild(s);
                        r.style.display = "block"
                    }
                }
                var t = "caption",
                    i = "credit";
                n.FormatCaption = r
            })(t = n.SplitCaption || (n.SplitCaption = {}))
        })(Mobile || (Mobile = {}));
        var Mobile;
        (function(n) {
            var t;
            (function() {
                function dt(i) {
                    var o = _ge(ot),
                        e, u, f;
                    t && o && (e = y + c, u = n.Screen.Height() - e, u < 0 && (u = 0), t.style.height = u + r, t.style.top = e + r, f = u - lt, f < 0 && (f = 0), o.style.paddingTop = f + r);
                    i && i()
                }

                function vr() {
                    if (_w.Bnp && _w.Bnp.Common && !bt) {
                        var t = _ge(di),
                            i = _ge(_w.Bnp.Common.GetBnpContainerId());
                        t && i && (n.MobileLib.HideOrShowElement(i, !0, function() {
                            t.dispatchEvent(new MouseEvent("mouseup"));
                            t.dispatchEvent(new MouseEvent("click"))
                        }), bt = !0)
                    }
                }

                function l(t, i) {
                    (t ? nt : !nt || sj_b.classList.contains(ur)) || (n.MobileLib.HideOrShowElement(k, t), nt = t);
                    (i ? !tt : tt) && (n.MobileLib.HideOrShowElement(vt, i), tt = i)
                }

                function gt(t) {
                    (t ? !it : it) && (n.MobileLib.HideOrShowElement(d, t), it = t)
                }

                function rt() {
                    var i, u, o;
                    if (!sj_b.classList.contains(ct)) {
                        i = _ge(st);
                        i && i.style.removeProperty(tr);
                        u = t.scrollTop;
                        d = d || _ge(wi);
                        var n = v,
                            s = lt + u,
                            h = t.clientHeight,
                            a = Math.min(s, h),
                            f = g.clientHeight - a;
                        if (f > n * p + c || u === 0) {
                            ut(v + r);
                            l(!1, !1);
                            gt(!1);
                            ni(100);
                            return
                        }
                        vr();
                        var w = g.clientHeight - t.clientHeight,
                            b = Math.max(w, f),
                            e = b / p - c / p;
                        n = Math.max(y, e);
                        o = 100 * (1 - y / e);
                        n > er ? l(!1, !1) : n <= fr ? l(!0, !0) : l(!0, !1);
                        gt(!0);
                        ut(n + r);
                        ni(o)
                    }
                }

                function ut(n) {
                    h != n && n !== "" && (f.style.top = h = n)
                }

                function ni(n) {
                    sj_so && sj_so(g, n)
                }

                function ti() {
                    t.scrollTop > sr && (n.MobileLib.Inst("MobileScroll"), wt && si_T(wt.getAttribute("h")), sj_ue(t, i, ti))
                }

                function yr() {
                    !e && t.scrollTop > w ? (n.HomepageHotspots.HideHotspots(function() {
                        b.style.display = ai
                    }, 3), e = !0) : e && t.scrollTop <= w && (b.style.display = si, e = !1)
                }

                function pr() {
                    !o && t.scrollTop > hr ? (n.VideoPlayer.HidePlayButton(), o = !0) : o && t.scrollTop <= w && (n.VideoPlayer.ShowPlayButton(), o = !1)
                }

                function wr() {
                    sj_be(t, u, sj_pd)
                }

                function br() {
                    sj_ue(t, u, sj_pd)
                }

                function kr() {
                    var n = _ge(et),
                        t, i;
                    n && (n.className += " show", t = sj_fader(), i = _H.test ? 100 : 0, t.init(n, i, 100, 5, null))
                }

                function dr() {
                    sj_be(_d, u, sj_pd)
                }

                function ii() {
                    sj_ue(_d, u, sj_pd)
                }

                function ri(n) {
                    this.allowUp = this.scrollTop > 0;
                    this.allowDown = this.scrollTop < this.scrollHeight - this.clientHeight;
                    this.lastX = n.touches[0].pageX;
                    this.lastY = n.touches[0].pageY
                }

                function ui(n) {
                    var t = n.touches[0].pageY > this.lastY,
                        i = !t,
                        r = Math.abs(n.touches[0].pageX - this.lastX),
                        u = Math.abs(n.touches[0].pageY - this.lastY);
                    this.lastX = n.touches[0].pageX;
                    this.lastY = n.touches[0].pageY;
                    t && this.allowUp || i && this.allowDown ? sj_sp(n) : sj_pd(n);
                    sj_b.scrollTop = 0
                }

                function fi() {
                    function n() {
                        sj_b.scrollTop = 0
                    }
                    s && sb_ct(s);
                    s = sb_st(n, lr)
                }

                function a() {
                    dr();
                    sj_be(t, ht, ri);
                    sj_be(t, u, ui);
                    pt || sj_be(_w, i, fi)
                }

                function ft() {
                    ii();
                    sj_ue(t, ht, ri);
                    sj_ue(t, u, ui);
                    pt || sj_ue(_w, i, fi)
                }

                function gr() {
                    var i = [],
                        t;
                    n.MobileLib.PushParams(i);
                    _w._G && _G.IG && i.push("IG=" + _G.IG);
                    _H.cardsIID && i.push("IID=" + _H.cardsIID);
                    t = sj_gx();
                    t.open("GET", "/hpmob?" + i.join("&"));
                    t.onreadystatechange = function() {
                        var n, i, r, f, s, e, u, h, o;
                        if (t.readyState == 4) {
                            if (t.status == 200) {
                                if (n = sj_ce("div"), n.innerHTML = t.responseText, i = _ge(ot), r = n.getElementsByClassName("hpmob_cards"), i && r && r.length > 0) {
                                    for (f = r[0].children, s = f.length, e = 0; e < s; e++) i.appendChild(f[0]);
                                    u = n.getElementsByClassName("hpmob_rms");
                                    u && u.length > 0 && (h = u[0], AjaxHelper.ParseJs(h, i))
                                }
                                o = _ge(li);
                                o && (o.className += " loaded");
                                sj_evt.fire(vi)
                            }
                            Log.Log("Load", "HP", "HpmobAjaxLoad", !0)
                        }
                    };
                    t.send()
                }

                function nu() {
                    if (f = _ge(ci), k = _ge(bi), vt = _ge(ki), t = _ge(et), f && k && t) {
                        c = f.clientHeight;
                        yt && (a(), sj_evt.bind("onASOpen", ft), sj_evt.bind("onASClose", a), sj_evt.bind("requestScroll", ft), sj_evt.bind("unrequestScroll", a));
                        sj_evt.bind("onHSOpen", wr);
                        sj_evt.bind("onHSClose", br);
                        sj_evt.bind("onBgSet", iu, 1);
                        var n = function(n) {
                                if (n && n.length >= 2) {
                                    var t = n[1];
                                    t && t instanceof Function && dt(t)
                                } else dt();
                                sj_b.classList.contains(ct) && ei()
                            },
                            r = function() {
                                var n = gi;
                                n = _w.Bnp && _w.Bnp.Common && !kt ? ir : nr;
                                parseInt(h) < parseInt(n) && (n = h);
                                ut(n);
                                ei()
                            };
                        sj_evt.bind("PositionCards", n, 1);
                        sj_evt.bind("onASOpen", r);
                        sj_evt.bind("onASClose", rt);
                        sj_evt.bind(rr, function() {
                            kt = !0
                        }, 1);
                        sj_be(t, i, rt);
                        sj_be(t, i, oi);
                        sj_be(_w, pi, rt)
                    }
                }

                function ei() {
                    var t = _ge(st),
                        n;
                    t && (n = f.clientHeight, n > at && (t.style.paddingTop = or + n - at + r))
                }

                function tu() {
                    var n = _ge("fbpgdg");
                    n && sj_be(n, hi, ii)
                }

                function iu() {
                    kr();
                    sj_be(t, i, ti);
                    b && sj_be(t, i, yr);
                    cr && sj_be(t, i, pr);
                    sj_evt.bind(yi, tu, 1);
                    gr()
                }

                function oi() {
                    sj_ue(t, i, oi);
                    _d.body.style.backgroundColor = "#f5f5f5"
                }

                function ru() {
                    sb_ct(s);
                    sj_ue(_w, "load", onload);
                    ft();
                    sj_evt.unbind("onASClose", a)
                }

                function uu() {
                    n.SplitCaption.FormatCaption("span", _ge("cap_all"))
                }
                var r = "px",
                    si = "block",
                    et = "hc_cont",
                    ot = "hc_overflow",
                    hi = "click",
                    ci = _H.ossb ? "b_header" : "mHeader",
                    st = _H.ossb ? "sb_form" : "mHeaderInner",
                    li = "hc_loading",
                    ai = "none",
                    vi = "onRBComplete",
                    i = "scroll",
                    u = "touchmove",
                    ht = "touchstart",
                    yi = "onFeedbackShow",
                    pi = "resize",
                    wi = "opal_audio",
                    bi = "bLogoExp",
                    ki = "mHamburger",
                    di = "bnp_close_link",
                    gi = "auto",
                    nr = "8px",
                    tr = "padding-top",
                    ct = "as_on",
                    ir = "0",
                    rr = "bnp.notif.closed",
                    ur = "notif_top",
                    fr = 75,
                    er = 120,
                    v = 126,
                    y = 16,
                    p = 1.5,
                    lt = 60,
                    at = 164,
                    or = 119,
                    sr = 50,
                    w = 30,
                    e = !1,
                    b = _ge("hst"),
                    o = !1,
                    hr = 30,
                    cr = _ge("vplaybtn"),
                    t = null,
                    f = null,
                    k = null,
                    vt = null,
                    d = null,
                    g = _ge("bgDiv"),
                    s = null,
                    lr = 150,
                    ar = navigator.userAgent,
                    yt = n.MobileLib.IsIPhone(),
                    pt = yt && ar.match(/OS 7/i),
                    wt = _ge("hpinstvs"),
                    h = v + r,
                    c, nt = !1,
                    tt = !1,
                    it = !1,
                    bt = !1,
                    kt = !1;
                uu();
                sj_be(_w, "load", nu);
                _H.ajax && sj_evt.bind("unload", ru)
            })(t || (t = {}))
        })(Mobile || (Mobile = {}));
        0;
        _w.rms.js({
            'A:rms:answers:Shared:BingCore.Bundle': '\/rb\/5k\/cj,nj\/3bc5a898\/bff38272.js?bu=EtMf6R-WH6EfggWtH68fiSCxH74fwR_eH-Yf9h_YHuEd5B3IHg'
        }, {
            'A:rms:answers:Shared:BingCore.AppAnimation': '\/rs\/5k\/Zr\/cj,nj\/c9ce19fd\/92e3c570.js'
        }, {
            'A:rms:answers:Shared:BingCore.appFadeAnimation': '\/rs\/5k\/Zu\/cj,nj\/dbbd0c58\/f92a50a7.js'
        }, {
            'A:rms:answers:BoxModel:Framework': '\/rb\/14\/cj,nj\/78482829\/f45ec0a8.js?bu=DiovMmpvcmdhZKoBrAEvlgEv'
        }, {
            'A:0': 0
        }, {
            'A:rms:answers:VisualSystem:FullPageLightBox': '\/rs\/6j\/lu\/cj,nj\/54603a84\/41886d99.js'
        }, {
            'A:1': 1
        }, {
            'A:rms:answers:MultimediaComponents:SearchByImageComponentLoader': '\/rs\/3Q\/nl\/cj,nj\/1beceeda\/3baa9af7.js'
        }, {
            'A:2': 2
        }, {
            'A:rms:answers:Identity:HamburgerMenu': '\/rs\/2Z\/2I\/cj,nj\/d9d4493a\/ac151446.js'
        });;
        //]]>
    