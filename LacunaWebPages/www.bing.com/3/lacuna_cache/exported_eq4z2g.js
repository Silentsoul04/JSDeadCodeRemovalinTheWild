
        //<![CDATA[
        var amd, define, require;
        (function(n) {
            function e(n, i, u) {
                t[n] || (t[n] = {
                    dependencies: i,
                    callback: u
                }, r(n))
            }

            function r(n) {
                if (n) {
                    if (n) return u(n)
                } else {
                    if (!f) {
                        for (var r in t) u(r);
                        f = !0
                    }
                    return i
                }
            }

            function u(n) {
                var s, e;
                if (i[n]) return i[n];
                if (t.hasOwnProperty(n)) {
                    var h = t[n],
                        f = h.dependencies,
                        l = h.callback,
                        a = r,
                        o = {},
                        c = [a, o];
                    if (f.length < 2) throw "invalid usage";
                    else if (f.length > 2)
                        for (s = f.slice(2, f.length), e = 0; e < s.length; e++) c.push(u(s[e]));
                    return l.apply(this, c), i[n] = o, o
                }
            }
            var t = {},
                i = {},
                f = !1;
            n.define = e;
            n.require = r
        })(amd || (amd = {}));
        define = amd.define;
        require = amd.require;
        var _w = window,
            _d = document,
            sb_de = _d.documentElement,
            sb_ie = !1,
            sb_i6 = !1,
            _ge = function(n) {
                return _d.getElementById(n)
            },
            _qs = function(n, t) {
                return t = typeof t == "undefined" ? _d : t, t.querySelector ? t.querySelector(n) : null
            },
            sb_st = function(n, t) {
                return setTimeout(n, t)
            },
            sb_rst = sb_st,
            sb_ct = function(n) {
                clearTimeout(n)
            },
            sb_gt = function() {
                return (new Date).getTime()
            },
            sj_gx = function() {
                return new XMLHttpRequest
            },
            cookieGetAccess, cookieDesc, reg;
        _w.sj_ev = function(n) {
            return n
        };
        _w.sj_ce = function(n, t, i) {
            var r = _d.createElement(n);
            return t && (r.id = t), i && (r.className = i), r
        };
        cookieGetAccess = !1;
        _w.sj_cook = new function() {
            var n = this,
                t = !1,
                i = new Date(0).toGMTString(),
                r;
            try {
                r = _d.cookie
            } catch (u) {
                t = !0
            }
            n.get = function(n, i) {
                var r, u;
                return t || !/\bMSCC=1\b/i.test(_d.cookie) && !cookieGetAccess ? null : (r = _d.cookie.match(new RegExp("\\b" + n + "=[^;]+")), i && r) ? (u = r[0].match(new RegExp("\\b" + i + "=([^&]*)")), u ? u[1] : null) : r ? r[0] : null
            };
            n.set = function(i, r, u, f, e, o) {
                var c, s, h, l;
                if (!t) try {
                    cookieGetAccess = !0;
                    s = r + "=" + u;
                    h = n.get(i);
                    h ? (l = n.get(i, r), c = l ? h.replace(r + "=" + l, s) : h + "&" + s) : c = i + "=" + s;
                    var a = location.hostname.match(/([^.]+\.[^.]*)$/),
                        v = o && o > 0 && o * 6e4 < 33696e6 ? o * 6e4 : 33696e6,
                        y = new Date((new Date).getTime() + Math.min(v, 33696e6));
                    _d.cookie = c + (a ? ";domain=" + a[0] : "") + (f ? ";expires=" + y.toGMTString() : "") + (e ? ";path=" + e : "")
                } finally {
                    cookieGetAccess = !1
                }
            };
            n.clear = function(n) {
                if (!t) {
                    var u = n + "=",
                        r = location.hostname.match(/([^.]+\.[^.]*)$/);
                    _d.cookie = u + (r ? ";domain=" + r[0] : "") + ";expires=" + i
                }
            }
        };
        _w.sk_merge || (_w.sk_merge = function(n) {
            _d.cookie = n
        });
        Object.getOwnPropertyDescriptor && (cookieDesc = null, reg = new RegExp("expires=([^;]+)(;|$)"), window.Document && Document.prototype && Object.getOwnPropertyDescriptor(Document.prototype, "cookie") ? cookieDesc = Object.getOwnPropertyDescriptor(Document.prototype, "cookie") : window.HTMLDocument && HTMLDocument.prototype && Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie") && (cookieDesc = Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie")), cookieDesc && cookieDesc.configurable && Object.defineProperty(document, "cookie", {
            get: function() {
                return /\bMSCC=1\b/i.test(cookieDesc.get.call(document)) || cookieGetAccess ? cookieDesc.get.call(document) : ""
            },
            set: function(n) {
                var t = n.match(reg),
                    r, i, u, f;
                t && (r = new Date(t[1]), i = new Date, r.getTime() - i.getTime() > 33696e6 && (u = new Date(i.getTime() + 33696e6), f = u.toGMTString(), n = n.replace(t[1], f)));
                cookieDesc.set.call(document, n)
            }
        }));
        define("fallback", ["require", "exports"], function(n, t) {
            function f() {
                return function() {
                    for (var r, h, c, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    if (r = s(arguments.callee), u && (h = e(r), h.toString() != f().toString())) return h.apply(null, arguments);
                    c = i[r].q;
                    t[0] === "onPP" && o();
                    c.push(t)
                }
            }

            function s(n) {
                for (var t in i)
                    if (i[t].h === n) return t
            }

            function e(n, t) {
                for (var u, e = n.split("."), i = _w, r = 0; r < e.length; r++) u = e[r], typeof i[u] == "undefined" && t && (i[u] = r === e.length - 1 ? f() : {}), i = i[u];
                return i
            }

            function o() {
                var e = i["rms.js"].q,
                    o, f, t, n, r, u;
                if (e.length > 0)
                    for (o = !1, f = 0; f < e.length; f++) {
                        for (t = e[f], n = 0; n < t.length; n++)
                            if (r = t[n]["A:rms:answers:Shared:BingCore.Bundle"], r || (r = t[n]["A:rmsBu0"]), r) {
                                u = _d.createElement("script");
                                u.setAttribute("data-rms", "1");
                                u.src = r;
                                u.type = "text/javascript";
                                setTimeout(function() {
                                    _d.body.appendChild(u)
                                }, 0);
                                t.splice(n, 1);
                                o = !0;
                                break
                            }
                        if (o) break
                    }
            }

            function h() {
                var n, t, f;
                for (u = !1, n = 0; n < r.length; n++) t = r[n], f = e(t, !0), i[t] = {
                    h: f,
                    q: []
                }
            }

            function c() {
                for (var t, n = 0; n < r.length; n++) {
                    var o = r[n],
                        s = i[o].q,
                        h = e(o);
                    for (t = 0; t < s.length; t++) h.toString() !== f().toString() && h.apply(null, s[t])
                }
                u = !0
            }

            function l(n, t, i, r) {
                n && ((n === _w || n === _d || n === _d.body) && t == "load" ? _w.sj_evt.bind("onP1", i, !0) : n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent ? n.attachEvent("on" + t, i) : n["on" + t] = i)
            }
            t.__esModule = !0;
            var r = ["rms.js", "sj_evt.bind", "sj_evt.fire", "sj_jb", "sj_wf", "sj_cook.get", "sj_cook.set", "sj_pd", "sj_sp", "sj_be", "sj_go", "sj_ev", "sj_ue", "sj_evt.unbind", "sj_et", "Log.Log", "sj_mo", "sj_so"],
                i = {},
                u = !1;
            _w.fb_is = o;
            t.replay = c;
            h();
            _w.sj_be = l
        });

        function lb() {
            _w.si_sendCReq && sb_st(_w.si_sendCReq, 800);
            _w.lbc && _w.lbc()
        };
        (function() {
            function n(n) {
                _w.si_ct(sb_ie ? _w.event.srcElement : n.target, !1, _w.event || n)
            }
            sj_be(document, "mousedown", n, !1)
        })(); /*!DisableJavascriptProfiler*/
        0; /*!DisableJavascriptProfiler*/
        0; /*!DisableJavascriptProfiler*/
        0;
        ClTrCo = {};
        var ctcc = 0,
            clc = _w.ClTrCo || {};
        _w.si_ct = function(n, t, i, r) {
            var u, e, f, o, s, h, c;
            if (clc.SharedClickSuppressed) return !0;
            u = "getAttribute";
            try {
                for (; n !== document.body; n = n.parentNode) {
                    if (!n || n === document || n[u]("data-noct")) break;
                    if (e = (n.tagName === "A" || n[u]("data-clicks")) && (n[u]("h") || n[u]("data-h")) || n[u]("_ct"), e) {
                        f = n[u]("_ctf");
                        o = -1;
                        i && (i.type === "keydown" ? o = -2 : i.button != null && (o = i.button));
                        f && _w[f] || (f = "si_T");
                        f === "si_T" && (s = encodeURIComponent(n[u]("href")), clc.furl && !n[u]("data-private") ? e += "&url=" + s : clc.mfurl && (e += "&abc=" + s));
                        r && (e += "&source=" + r);
                        h = "";
                        clc.mc && (h = "&c=" + ctcc++);
                        c = "&" + e + h;
                        _w.si_sbwu(c) || _w[f] && _w[f](c, n, i, o);
                        break
                    }
                    if (t) break
                }
            } catch (l) {
                _w.SharedLogHelper ? SharedLogHelper.LogWarning("clickEX", null, l) : (new Image).src = _G.lsUrl + '&Type=Event.ClientInst&DATA=[{"T":"CI.Warning","FID":"CI","Name":"JSWarning","Text":' + l.message + "}]"
            }
            return !0
        };
        _w.si_sbwu || (_w.si_sbwu = function() {
                return !1
            }),
            function() {
                _w._G && (_G.si_ct_e = "click")
            }();
        var sb_de = _d.documentElement;
        var BM = BM || {};
        BM.rules = {
            "#bgDiv": [-1, -1, 0],
            "#bLogo": [-1, -1, 0],
            "#sb_form": [-1, -1, 0],
            "#footer": [-1, -1, 0],
            "img,div[data-src]": [-1, -1, 0],
            iframe: [-1, -1, 0]
        };
        var BM = BM || {};
        (function(n) {
            function u(n, u) {
                n in t || (t[n] = []);
                !u.compute || n in r || (r[n] = u.compute);
                !u.unload || n in i || (i[n] = u.unload);
                u.load && u.load()
            }

            function f(n, i) {
                t[n].push({
                    t: s(),
                    i: i
                })
            }

            function e(n) {
                return n in i && i[n](), n in t ? t[n] : void 0
            }

            function o() {
                for (var n in r) r[n]()
            }

            function s() {
                return window.performance && performance.now ? Math.round(performance.now()) : new Date - window.si_ST
            }
            var t = {},
                i = {},
                r = {};
            n.wireup = u;
            n.enqueue = f;
            n.dequeue = e;
            n.trigger = o
        })(BM);
        (function(n) {
            function i() {
                var i = document.documentElement,
                    r = document.body,
                    u = "innerWidth" in window ? window.innerWidth : i.clientWidth,
                    f = "innerHeight" in window ? window.innerHeight : i.clientHeight,
                    e = window.pageXOffset || i.scrollLeft,
                    o = window.pageYOffset || i.scrollTop,
                    s = document.visibilityState || "default";
                n.enqueue(t, {
                    x: e,
                    y: o,
                    w: u,
                    h: f,
                    dw: r.clientWidth,
                    dh: r.clientHeight,
                    v: s
                })
            }
            var t = "V";
            n.wireup(t, {
                load: null,
                compute: i,
                unload: null
            })
        })(BM);
        (function(n) {
            function i() {
                var e, o, u, s, f, r;
                if (document.querySelector && document.querySelectorAll) {
                    e = [];
                    o = n.rules;
                    for (u in o)
                        for (s = o[u], u += !s[2] ? "" : " >*", f = document.querySelectorAll(u), r = 0; r < f.length; r++) {
                            var i = f[r],
                                h = 0,
                                c = 0,
                                l = i.offsetWidth,
                                a = i.offsetHeight;
                            do h += i.offsetLeft, c += i.offsetTop; while (i = i.offsetParent);
                            e.push({
                                _e: f[r],
                                x: h,
                                y: c,
                                w: l,
                                h: a
                            })
                        }
                    n.enqueue(t, e)
                }
            }
            var t = "L";
            n.wireup(t, {
                load: null,
                compute: i,
                unload: null
            })
        })(BM);
        (function(n) {
            function f() {
                u(sj_be, r)
            }

            function r(i) {
                return i && n.enqueue(t, i), !0
            }

            function e() {
                u(sj_ue, r)
            }

            function u(n, t) {
                for (var u, r = 0; r < i.length; r++) u = i[r], n(u === "resize" ? window : document, window.navigator.pointerEnabled ? u.replace("mouse", "pointer") : u, t, !1)
            }
            var t = "EVT",
                i = ["click", "mousedown", "mouseup", "touchstart", "touchend", "mousemove", "touchmove", "scroll", "keydown", "resize"];
            n.wireup(t, {
                load: f,
                compute: null,
                unload: e
            })
        })(BM);
        var logMetaError = function(n) {
                (new Image).src = _G.lsUrl + '&Type=Event.ClientInst&DATA=[{"T":"CI.MetaError","FID":"CI","Name":"MetaJSError","Text":"' + escape(n) + '"}]'
            },
            getHref = function() {
                return location.href
            },
            regexEscape;
        try {
            regexEscape = function(n) {
                return n.replace(/([.?*+^$&[\]\\(){}|<>-])/g, "\\$1")
            };

            function jsErrorHandler(n) {
                var s, r, y, p, u, f, w, e, h, c, o;
                try {
                    if (s = "ERC", r = window[s], r = r ? r + 1 : 1, r === 16 && (n = new Error("max errors reached")), r > 16) return;
                    window[s] = r;
                    var l = n.error || n,
                        b = '"noMessage"',
                        k = n.filename,
                        d = n.lineno,
                        g = n.colno,
                        nt = n.extra,
                        a = l.severity || "Error",
                        tt = l.message || b,
                        i = l.stack,
                        t = '"' + escape(tt.replace(/"/g, "")) + '"',
                        it = new RegExp(regexEscape(getHref()), "g");
                    if (i) {
                        for (y = /\(([^\)]+):[0-9]+:[0-9]+\)/g, u = {};
                            (p = y.exec(i)) !== null;) f = p[1], u[f] ? u[f]++ : u[f] = 1;
                        e = 0;
                        for (h in u) u[h] > 1 && (c = regexEscape(h), w = new RegExp(c, "g"), i = i.replace(w, e), i += "#" + e + "=" + c, e++);
                        i = i.replace(it, "self").replace(/"/g, "");
                        t += ',"Stack":"' + (escape(i) + '"')
                    }
                    if (k && (t += ',"Meta":"' + escape(k.replace(it, "self")) + '"'), d && (t += ',"Line":"' + d + '"'), g && (t += ',"Char":"' + g + '"'), nt && (t += ',"ExtraInfo":"' + nt + '"'), tt === b)
                        if (a = "Warning", t += ',"ObjectToString":"' + n.toString() + '"', JSON && JSON.stringify) t += ',"JSON":"' + escape(JSON.stringify(n)) + '"';
                        else
                            for (o in n) n.hasOwnProperty(o) && (t += ',"' + o + '":"' + n[o] + '"');
                    var rt = (new Date).getTime(),
                        ut = '"T":"CI.' + a + '","FID":"CI","Name":"JS' + a + '","Text":' + t + "",
                        ft = "<E><T>Event.ClientInst<\/T><IG>" + _G.IG + "<\/IG><TS>" + rt + "<\/TS><D><![CDATA[[{" + ut + "}]]\]><\/D><\/E>",
                        et = "<ClientInstRequest><Events>" + ft + "<\/Events><STS>" + rt + "<\/STS><\/ClientInstRequest>",
                        v = new XMLHttpRequest;
                    v.open("POST", "/fd/ls/lsp.aspx?", !0);
                    v.setRequestHeader("Content-Type", "text/xml");
                    v.send(et);
                    typeof sj_evt != "undefined" && sj_evt.fire("ErrorInstrumentation", t)
                } catch (ot) {
                    logMetaError("Failed to execute error handler. " + ot.message)
                }
            }
            window.addEventListener && window.addEventListener("error", jsErrorHandler, !1);
            window.addEventListener || window.onerror || (window.onerror = function(n, t, i, r, u) {
                var f = "",
                    e;
                typeof n == "object" && n.srcElement && n.srcElement.src ? f = "\"ScriptSrc = '" + escape(n.srcElement.src.replace(/'/g, "")) + "'\"" : (n = "" + n, f = '"' + escape(n.replace(/"/g, "")) + '","Meta":"' + escape(t) + '","Line":' + i + ',"Char": ' + r, u && u.stack && (e = new RegExp(regexEscape(getHref()), "g"), f += ',"Stack":"' + escape(u.stack.replace(e, "self").replace(/"/g, "") + '"')));
                (new Image).src = _G.lsUrl + '&Type=Event.ClientInst&DATA=[{"T":"CI.GetError","FID":"CI","Name":"JSGetError","Text":' + f + "}]";
                typeof sj_evt != "undefined" && sj_evt.fire("ErrorInstrumentation", f)
            })
        } catch (e) {
            logMetaError("Failed to bind error handler " + e.message)
        };
        var perf;
        (function(n) {
            function f(n) {
                return i.hasOwnProperty(n) ? i[n] : n
            }

            function e(n) {
                var t = "S";
                return n == 0 ? t = "P" : n == 2 && (t = "M"), t
            }

            function o(n) {
                for (var c, i = [], t = {}, r, l = 0; l < n.length; l++) {
                    var a = n[l],
                        o = a.v,
                        s = a.t,
                        h = a.k;
                    s === 0 && (h = f(h), o = o.toString(36));
                    s === 3 ? i.push(h + ":" + o) : (r = t[s] = t[s] || [], r.push(h + ":" + o))
                }
                for (c in t) t.hasOwnProperty(c) && (r = t[c], i.push(e(+c) + ':"' + r.join(",") + '"'));
                return i.push(u), i
            }
            for (var r = ["redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectionStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "unloadEventStart", "unloadEventEnd", "firstChunkEnd", "secondChunkStart", "htmlEnd", "pageEnd", "msFirstPaint"], u = "v:1.1", i = {}, t = 0; t < r.length; t++) i[r[t]] = t;
            n.compress = o
        })(perf || (perf = {}));
        window.perf = window.perf || {},
            function(n) {
                n.log = function(t, i) {
                    var f = n.compress(t),
                        r;
                    f.push('T:"CI.Perf",FID:"CI",Name:"PerfV2"');
                    var e = "/fd/ls/lsp.aspx?",
                        o = "sendBeacon",
                        h = "<E><T>Event.ClientInst<\/T><IG>" + _G.IG + "<\/IG><TS>" + i + "<\/TS><D><![CDATA[{" + f.join(",") + "}]\]><\/D><\/E>",
                        s = "<ClientInstRequest><Events>" + h + "<\/Events><STS>" + i + "<\/STS><\/ClientInstRequest>",
                        u = !_w.navigator || !navigator[o];
                    if (!u) try {
                        navigator[o](e, s)
                    } catch (c) {
                        u = !0
                    }
                    u && (r = sj_gx(), r.open("POST", e, !0), r.setRequestHeader("Content-Type", "text/xml"), r.send(s))
                }
            }(window.perf);
        var perf;
        (function(n) {
            function a() {
                return c(Math.random() * 1e4)
            }

            function o() {
                return y ? c(f.now()) + l : +new Date
            }

            function v(n, r, f) {
                t.length === 0 && i && sb_st(u, 1e3);
                t.push({
                    k: n,
                    v: r,
                    t: f
                })
            }

            function p(n) {
                return i || (r = n), !i
            }

            function w(n, t) {
                t || (t = o());
                v(n, t, 0)
            }

            function b(n, t) {
                v(n, t, 1)
            }

            function u() {
                var u, f;
                if (t.length) {
                    for (u = 0; u < t.length; u++) f = t[u], f.t === 0 && (f.v -= r);
                    t.push({
                        k: "id",
                        v: e,
                        t: 3
                    });
                    n.log(t, o());
                    t = [];
                    i = !0
                }
            }

            function k() {
                r = o();
                e = a();
                i = !1;
                sj_evt.bind("onP1", u)
            }
            var s = "performance",
                h = !!_w[s],
                f = _w[s],
                y = h && !!f.now,
                c = Math.round,
                t = [],
                i = !1,
                l, r, e;
            h ? l = r = f.timing.navigationStart : r = _w.si_ST ? _w.si_ST : +new Date;
            e = a();
            n.setStartTime = p;
            n.mark = w;
            n.record = b;
            n.flush = u;
            n.reset = k;
            sj_be(window, "load", u, !1);
            sj_be(window, "beforeunload", u, !1)
        })(perf || (perf = {}));
        _w.si_PP = function(n, t, i) {
            var r, o, l, h, e, c;
            if (!_G.PPS) {
                for (o = ["FC", "BC", "SE", "TC", "H", "BP", null]; r = o.shift();) o.push('"' + r + '":' + (_G[r + "T"] ? _G[r + "T"] - _G.ST : -1));
                var u = _w.perf,
                    s = "navigation",
                    r, f = i || _w.performance && _w.performance.timing;
                if (f && u) {
                    if (l = f.navigationStart, u.setStartTime(l), l >= 0)
                        for (r in f) h = f[r], typeof h == "number" && h > 0 && r !== "navigationStart" && r !== s && u.mark(r, h);
                    u.record("nav", s in f ? f[s] : performance[s].type)
                }
                e = "connection";
                c = "";
                _w.navigator && navigator[e] && (c = ',"net":"' + navigator[e].type + '"', navigator[e].downlinkMax && (c += ',"dlMax":"' + navigator[e].downlinkMax + '"'));
                _G.PPImg = new Image;
                _G.PPImg.src = _G.lsUrl + '&Type=Event.CPT&DATA={"pp":{"S":"' + (t || "L") + '",' + o.join(",") + ',"CT":' + (n - _G.ST) + ',"IL":' + _d.images.length + "}" + (_G.C1 ? "," + _G.C1 : "") + c + "}" + (_G.P ? "&P=" + _G.P : "") + (_G.DA ? "&DA=" + _G.DA : "") + (_G.MN ? "&MN=" + _G.MN : "");
                _G.PPS = 1;
                sb_st(function() {
                    u && u.flush();
                    sj_evt.fire("onPP");
                    sj_evt.fire(_w.p1)
                }, 1)
            }
        };
        _w.onbeforeunload = function() {
            si_PP(new Date, "A")
        };
        sj_evt.bind("ajax.requestSent", function() {
            window.perf && perf.reset()
        });
        (function(n) {
            var i, r, t;
            if (_d.querySelector) {
                i = [];
                r = "ad";

                function u() {
                    var k = sb_gt(),
                        a = _d.documentElement,
                        s = _d.body,
                        t = -1,
                        r = -1,
                        v = a.clientHeight,
                        y = ["#b_results ." + _G.adc, ".sb_adsWv2", ".ads"],
                        u, p, h, c, e, o, w, n, f, l, b;
                    if (s) {
                        for (u = 0, p = _d.querySelector("#b_pole .b_adSlug"), p && (h = _d.querySelector("#b_pole"), u = h.offsetHeight, r = h.offsetTop), c = _d.querySelector("#b_results #productAdCarousel"), e = _d.querySelector("#b_results .pa_b_supertop"), e ? (r = e.offsetTop, u = e.offsetHeight) : c && (u += c.offsetHeight), o = 0; o < y.length; o++)
                            if (w = y[o], n = _d.querySelector(w), n && n.className.indexOf("b_adBottom") == -1 && n.offsetTop < v) {
                                f = n.nextSibling;
                                f && f instanceof Element && _w.getComputedStyle && (l = _w.getComputedStyle(f)) && l ? (b = parseFloat(l.marginTop), t = f.offsetTop - n.offsetTop - b) : t = n.offsetHeight;
                                t += u;
                                r === -1 && (r = n.offsetTop);
                                break
                            }
                        isNaN(t) && (t = -1);
                        i = [r, t, a.clientWidth, v, s.offsetWidth, s.offsetHeight, sb_gt() - k]
                    }
                }
                n ? (t = n.onbeforefire, n.onbeforefire = function() {
                    t && t();
                    u();
                    n.mark(r, i)
                }) : (t = si_PP, si_PP = function() {
                    u();
                    var n = '"' + r + '":[' + i.join() + "]";
                    _G.C1 = _G.C1 ? _G.C1 + "," + n : n;
                    t.apply(null, [].slice.apply(arguments))
                })
            }
        })(_w.pp);
        //]]>
    