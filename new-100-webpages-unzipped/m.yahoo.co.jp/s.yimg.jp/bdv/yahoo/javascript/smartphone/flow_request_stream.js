! function() {
    YAHOO = window.YAHOO || {}, YAHOO.JP = YAHOO.JP || {}, YAHOO.JP.rma = YAHOO.JP.rma || {}, YAHOO.JP.rma.smp = YAHOO.JP.rma.smp || {};
    var e = {};
    ! function() {
        var t = function() {
            var t = function() {
                    var e = "undefined" != typeof window.orientation ? window.orientation : window.innerWidth > window.innerHeight ? 90 : 0;
                    return 90 === e || -90 === e
                },
                n = function(e, t) {
                    return t = t || e,
                        function() {
                            return e.apply(t, arguments)
                        }
                },
                i = function(e, t, n) {
                    var i, r = e.length;
                    for (n = n || e, i = 0; r > i && t.call(n, e[i], i) !== !1; i++);
                },
                r = function(e, t, n) {
                    var i;
                    n = n || e;
                    for (i in e)
                        if (e.hasOwnProperty(i) && t.call(n, e[i], i) === !1) break
                },
                o = function(e, t, n) {
                    var i, o = {};
                    "undefined" != typeof e.style && (i = e.style, "string" == typeof t ? o[t] = n : o = t, r(o, function(e, t) {
                        var n = t.split("-")[0],
                            r = n.match(/^(margin|padding)/);
                        switch (r && r[1] && (n = r[1]), n) {
                            case "width":
                            case "height":
                            case "top":
                            case "bottom":
                            case "left":
                            case "right":
                            case "margin":
                            case "padding":
                                e = "number" == typeof e ? e + "px" : e
                        }
                        i[t] = e
                    }))
                },
                a = function() {
                    return "undefined" == typeof getComputedStyle ? function(e, t) {
                        var n = e.currentStyle ? e.currentStyle[t] : e.style[t];
                        if ("display" === t && "" === n && null !== e.parentNode) return "block";
                        switch (t) {
                            case "width":
                            case "height":
                            case "top":
                            case "bottom":
                            case "left":
                            case "right":
                            case "margin":
                            case "padding":
                                n = c(n)
                        }
                        return n
                    } : function(e, t, n) {
                        var i = getComputedStyle(e, null).getPropertyValue(t);
                        return n ? c(i) : i
                    }
                }(),
                c = function(e) {
                    return e.replace("px", "") - 0
                },
                u = function(e, t, n) {
                    var i = document.createElement(e);
                    return "undefined" != typeof t && r(t, function(e, t) {
                        i.setAttribute(t, e)
                    }), "undefined" != typeof n && o(i, n), i
                },
                s = function(t, n) {
                    return t = t || {}, n = n || e, r(t, function(e, t) {
                        n[t] = e
                    }), n
                },
                d = function(e) {
                    var t = [];
                    return r(e, function(e, n) {
                        t.push(n + "=" + e)
                    }), t.join("&")
                },
                f = function(e, t) {
                    var n = 0;
                    return {
                        pass: function() {
                            ++n === e && (t(), t = function() {})
                        }
                    }
                };
            return {
                isLandscape: t,
                bind: n,
                each: i,
                iterate: r,
                setStyle: o,
                getStyle: a,
                createElement: u,
                extend: s,
                createParamString: d,
                flow: f
            }
        }();
        t.extend(t)
    }(),
    function() {
        var t = function() {
            var t, n = {},
                i = [],
                r = [],
                o = e.isLandscape(),
                a = [],
                c = !1,
                u = [],
                s = !1,
                d = 100,
                f = function(t, r, o, a, c) {
                    if ("function" == typeof o) {
                        var u = e.bind(o, a);
                        t = t || window, r = n[r] || r, c = c || !1, a = a || t, t.addEventListener(r, o, c), i.push({
                            el: t,
                            type: r,
                            fn: o,
                            cb: u,
                            cap: c
                        })
                    }
                },
                p = function(t, r, o, a, c) {
                    t = t || window, r = n[r] || r, c = c || !1, a = a || t, e.each(i, function(e, n) {
                        return e.el === t && e.type === r && e.fn === o && e.cap === c ? (t.removeEventListener(r, o, c), i.splice(n, 1), !1) : void 0
                    })
                },
                l = function(e, t) {
                    t = t || e, O ? e.call(t) : r.push({
                        fn: e,
                        ctx: t
                    })
                },
                h = function(e, t) {
                    t = t || e, a.push({
                        fn: e,
                        ctx: t
                    })
                },
                m = function() {
                    var t = e.isLandscape();
                    e.each(a, function(e) {
                        e.fn.call(e.ctx, t)
                    })
                },
                v = function(e, t) {
                    t = t || e, u.push({
                        fn: e,
                        ctx: t
                    }), s || b()
                },
                g = function(t, n) {
                    n = n || t, e.each(u, function(e, i) {
                        return e.fn === t && e.ctx === n ? (u.splice(i, 1), !1) : void 0
                    })
                },
                y = 500,
                O = !1,
                S = function() {
                    O || (O = !0, setTimeout(function() {
                        e.each(r, function(e) {
                            e.fn.call(e.ctx)
                        })
                    }, y))
                },
                b = function() {
                    s = setInterval(function() {
                        0 === u.length && (clearInterval(s), s = !1), e.each(u, function(e) {
                            return void 0 === e ? !0 : (e.fn.call(e.ctx), void 0)
                        })
                    }, d)
                },
                w = [],
                P = [],
                A = !1,
                E = function(t) {
                    if (!t) {
                        A = !0;
                        var n = P.slice(0);
                        return e.each(n, function(e) {
                            k(e)
                        }), P = [], void 0
                    }
                    "string" == typeof t && -1 === w.indexOf(t) && (w.push(t), -1 !== P.indexOf(t) && k(t))
                },
                x = function(e) {
                    return A ? (k(e), void 0) : ("string" == typeof e && -1 === P.indexOf(e) && (P.push(e), -1 !== w.indexOf(e) && k(e)), void 0)
                },
                k = function(t) {
                    var n = e.getRMAObject(t),
                        i = n ? n.insert : void 0;
                    "function" == typeof i && (delete n.insert, w.splice(w.indexOf(t), 1), P.splice(P.indexOf(t), 1), i.call(n))
                },
                T = !1,
                I = {},
                Y = function(e, t, n) {
                    n = n || t ? 1 : 0, C(e, t, n)
                },
                H = function(e, t) {
                    I[e] = t, T || (T = !0, v(M))
                },
                L = function(e) {
                    I.hasOwnProperty(e) && (delete I[e], 0 === Object.keys(I).length && (T = !1, g(M)))
                },
                M = function() {
                    e.iterate(I, function(e, t) {
                        var n = j(e);
                        C(t, n.isViewable, n.percent)
                    })
                },
                j = function(e) {
                    var t = !1,
                        n = e.getBoundingClientRect(),
                        i = window.innerHeight,
                        r = window.innerWidth,
                        o = Math.min(n.right, r) - Math.max(n.left, 0),
                        a = Math.min(n.bottom, i) - Math.max(n.top, 0),
                        c = 0;
                    if (o > 0 && a > 0) {
                        var u = o * a,
                            s = n.width * n.height,
                            d = r * i;
                        c = u / Math.min(s, d), t = c >= .5
                    }
                    return {
                        isViewable: t,
                        percent: c
                    }
                },
                C = function(t, n, i) {
                    var r = e.getRMAObject(t);
                    r.isViewable = n, "function" == typeof r.viewable && r.viewable.call(r, n, i)
                },
                J = {},
                R = [],
                _ = function(e) {
                    return -1 !== Object.keys(J).indexOf(e)
                },
                B = function(t, n) {
                    if (_(t) && J[t].hasOwnProperty(n)) {
                        "load" === t && R.push(n);
                        var i = [].slice.call(arguments, 2);
                        e.iterate(J[t], function(t, r) {
                            r === n && e.each(t, function(e) {
                                e.apply(e, i)
                            })
                        }), V(t)
                    }
                },
                V = function(n) {
                    if ("load" === n) {
                        !t && (t = Object.keys(YAHOO.JP.rma.smp.getPositionStatus()));
                        var i = t.filter(function(e) {
                            return -1 === R.indexOf(e)
                        }).length;
                        if (0 !== i) return
                    }
                    var r = [];
                    e.each(J[n].all, function(e) {
                        e.apply(e, r)
                    })
                },
                N = function(e, t, n) {
                    !_(e) && (J[e] = {
                        all: []
                    }), !J[e].hasOwnProperty(n) && (J[e][n] = []), J[e][n].push(t)
                },
                W = function(t, n, i) {
                    _(t) && J[t].hasOwnProperty(i) && e.each(J[t][i], function(e, r) {
                        return e === n ? (J[t][i].splice(r, 1), 0 === J[t][i].length && (delete J[t][i], 0 === Object.keys(J[t]).length && delete J[t]), !1) : void 0
                    })
                };
            return YAHOO.JP.rma.smp.onLoadEnd = function(t, n) {
                return n = n || t, e.externalLoadEndCallback = {
                    fn: t,
                    ctx: n
                }, !0
            }, l(function() {
                c || (e.env.support("orientationchange") ? f(window, "orientationchange", m) : v(function() {
                    var t = e.isLandscape();
                    o !== t && (o = t, m())
                }), c = !0)
            }), "complete" === document.readyState && S(), document.addEventListener && (document.addEventListener("DOMContentLoaded", S, !1), window.addEventListener("load", S, !1)), e.extend({
                insert: E,
                viewable: Y,
                addAdEventListener: N,
                removeAdEventListener: W
            }, YAHOO.JP.rma.smp), {
                addEvent: f,
                removeEvent: p,
                addLoadEvent: l,
                addOrientationChangeEvent: h,
                addTimerEvent: v,
                removeTimerEvent: g,
                beReadyInsert: x,
                addObserveViewableElement: H,
                removeObserveViewableElement: L,
                isViewable: j,
                fireAdEvent: B
            }
        }();
        e.extend(t)
    }(),
    function() {
        var t = navigator.userAgent,
            n = /iP(hone|od|ad)/.test(t),
            i = /Android \d+/.test(t),
            r = function() {
                var e;
                return n ? e = new RegExp(" (\\d+)(?:_(\\d+)(?:_(\\d+))?)? ").exec(t) : i && (e = new RegExp(" (\\d+)(?:.(\\d+)(?:.(\\d+))?)?;").exec(t)), e && null !== e ? [e[1], e[2], e[3]].join(".") : ""
            }();
        e.env = {
            ios: n,
            android: i,
            ver: function(e) {
                return r.substr(0, e.length) === e
            },
            over: function(e) {
                return r.substr(0, e.length) >= e
            },
            under: function(e) {
                return r.substr(0, e.length) <= e
            },
            support: function(e, t) {
                return t = t || !1, "undefined" != typeof window[t ? "on" + e : e]
            },
            plugin: navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0
        }
    }(),
    function() {
        var t = function() {
            function t(t, n, r) {
                n && e.isTrustYlk(n) || (n = e.createYlk(a[t] || a["default"], r));
                var o = e.createElement("a", {
                    "data-ylk": n
                }, {
                    display: "block",
                    height: "0px"
                });
                return i[t] = {
                    insert: function() {
                        var n = document.querySelector('div[data-rma-pos="' + t + '"]');
                        n && n.appendChild(o), e.setPositionStatus(t, "done")
                    }
                }, e.beReadyInsert(t), i[t]
            }
            var n, i = {},
                r = function(e, t) {
                    var r = new n(t);
                    return i[e] = r, c(r, e), r
                },
                o = function(e) {
                    return "string" == typeof e ? i[e] : i
                },
                a = {
                    STW: "rsec:prem-ad;slk:vd;_vimp:3;_vctime:1000;pos:all",
                    STB1: "rsec:prem-ad;slk:st;streamid:st_top;_vimp:3;_vctime:1000;pos:all"
                };
            a.ATW = a.STW, a.ATB1 = a.STB1, a.STB2 = a.STB1, a.ATB2 = a.STB1, a["default"] = a.STB1, n = function(t) {
                var n = t.attr || {},
                    i = t.style || {},
                    r = e.createElement("div", n, i),
                    o = t.data || {};
                this.getElement = function() {
                    return r
                }, this.position = o.position, this.onRemoveAbsoluteHide = t.onRemoveAbsoluteHide, this.data = o, this.isViewable = !1, this.userOption = {}, this.$listen = {}
            }, n.prototype = {
                appendTo: function(e) {
                    var t = this.getElement();
                    return e = e || document.body, e.appendChild(t), this
                },
                remove: function() {
                    var e = this.getElement(),
                        t = e.parentNode || document.body;
                    if (null != t) try {
                        t.removeChild(e)
                    } catch (n) {}
                    return this
                },
                setStyle: function(t, n) {
                    return e.setStyle(this.getElement(), t, n), this
                },
                getStyle: function(t, n) {
                    return e.getStyle(this.getElement(), t, n)
                },
                isShowing: function() {
                    var t = e.getStyle(this.getElement(), "display");
                    return "" !== t && "none" !== t
                },
                append: function(e) {
                    return this.getElement().appendChild(e), this
                },
                addEvent: function(t, n, i, r) {
                    return e.addEvent(this.getElement(), t, n, i, r), this
                },
                removeEvent: function(t, n, i, r) {
                    return e.removeEvent(this.getElement(), t, n, i, r), this
                },
                click: function(e, t, n) {
                    return this.addEvent("click", e, t, n)
                },
                show: function() {
                    return this.setStyle("display", "block")
                },
                hide: function() {
                    return this.setStyle("display", "none")
                },
                hasOption: function(e, t) {
                    var n;
                    return "string" == typeof e && (e = e.split(".")), "undefined" == typeof t && (t = this.data), n = e.shift(), "undefined" == typeof n ? "undefined" != typeof t && "" !== t ? !0 : !1 : "undefined" == typeof t[n] ? !1 : this.hasOption(e, t[n])
                },
                getOption: function(t, n) {
                    var i = this.data;
                    return this.hasOption(t) ? (e.each(t.split("."), function(e) {
                        i = i[e]
                    }), i) : n
                },
                $delegate: function(e, t) {
                    "function" == typeof this.$listen[e] && this.$listen[e](t)
                }
            }, YAHOO.JP.rma.smp.userOption = {};
            var c = function(e, t) {
                e.userOption = YAHOO.JP.rma.smp.userOption[t], Object.defineProperty(YAHOO.JP.rma.smp.userOption, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return e.userOption
                    },
                    set: function(t) {
                        e.userOption = t, e.$delegate("userOption", t)
                    }
                })
            };
            return {
                createRMAObject: r,
                getRMAObject: o,
                createNoadObject: t
            }
        }();
        e.extend(t)
    }(),
    function() {
        var t = function() {
            var t = [],
                n = !1,
                i = function() {
                    if (!n && t.length) {
                        var e = t.shift();
                        (new Image).src = e, setTimeout(i, 100)
                    }
                },
                r = function(e) {
                    t.push(e), i()
                },
                o = function(t, n) {
                    var i = "https://ybx.yahoo.co.jp/clear.gif?";
                    return "undefined" == typeof e.sessionId && (e.sessionId = u()), i += [e.createParamString({
                        bkey: "gex"
                    }), a(n), e.createParamString({
                        IVvisibletime: "0",
                        IVactiontime: "0",
                        IVaction: t,
                        IVsid: e.sessionId,
                        r: Math.random()
                    })].join("&")
                },
                a = function(t) {
                    return e.createParamString(c(t))
                },
                c = function(e) {
                    return {
                        A: (e.match(/%2fB%3d(-?[0-9]+)/) || [])[1],
                        M: (e.match(/%2fC%3d(-?[0-9\.]+)/) || [])[1],
                        L: (e.match(/%2fD%3d([0-9A-Za-z]+)/) || [])[1],
                        S: (e.match(/%2fE%3d([0-9]+)/) || [])[1]
                    }
                },
                u = function() {
                    for (var e, t = 3, n = parseInt(Math.random() * Math.pow(10, t), 10) + "", i = (new Date).getTime() + ""; n.length < t;) n = "7" + n;
                    return e = n + i, parseInt(e, 10).toString(32)
                },
                s = function(e, t) {
                    var n = "https://rdsig.yahoo.co.jp/";
                    return n += ["mediaframe", (t.match(/%2fC%3d([0-9]+)/) || [])[1], e, "*https://s.yimg.jp/images/clear.gif"].join("/"), n += "?r=" + Math.random()
                },
                d = function(e) {
                    var t = e.split(";").map(function(e) {
                        return e.split(":")[0]
                    });
                    return -1 !== t.indexOf("adp_bT")
                },
                f = function(e, t) {
                    var n = c(t);
                    return e + ";adp_bC:" + n.M + ";adp_bB:" + n.A + ";adp_bD:" + n.L + ";adp_bE:" + n.S + ";adp_bX:" + Date.now() + ";adp_oV:1"
                };
            return YAHOO.JP.rma.smp.sendCustomLog = function(t) {
                var n = e.getRMAObject();
                for (prop in n)
                    if (n[prop].isExpandShowing()) {
                        var i = n[prop].getInstance().getOption("csc"),
                            r = e.makeRedsumURL(t, i);
                        e.addLog(r)
                    }
            }, {
                addLog: r,
                preload: r,
                makeGexBeaconURL: o,
                makeParamFromCSC: a,
                parseAdParamFromCSC: c,
                makeRedsumURL: s,
                makeSessionId: u,
                isTrustYlk: d,
                createYlk: f
            }
        }();
        e.extend(t)
    }(),
    function() {
        var t = function(t) {
            return function(n) {
                var i = {},
                    r = e.getRMAObject(),
                    o = !1;
                if ("string" == typeof n) {
                    if ("undefined" != typeof r[n] && "function" == typeof r[n][t]) return r[n][t]()
                } else if (e.iterate(r, function(e, n) {
                        if ("function" == typeof e[t]) {
                            var r = e[t]();
                            "undefined" != typeof r && (i[n] = r)
                        }
                    }), e.iterate(i, function() {
                        return o = !0, !1
                    }), o) return i
            }
        };
        e.extend({
            show: t("show"),
            hide: t("hide"),
            isShowing: t("isShowing"),
            getElement: t("getElement"),
            getRma: function() {
                return e
            }
        }, YAHOO.JP.rma.smp)
    }(),
    function() {
        var t, n = {},
            i = function() {
                var e = document.querySelectorAll("script"),
                    t = e[e.length - 1].src.split("?"),
                    n = t.length > 1 ? t[1] : "v" + Math.floor(10 * Math.random() % 3);
                return n
            }(),
            r = {},
            o = [],
            a = {},
            c = !1,
            u = {},
            s = function(t) {
                var n = document.getElementsByTagName("script")[0],
                    i = n.parentNode || document,
                    r = e.createElement("script", {
                        src: t
                    });
                return i.insertBefore(r, n.nextSibling), r
            },
            d = function(t, i, r) {
                var o = "callback_" + Math.floor(1e6 * Math.random()),
                    a = "YAHOO.JP.rma.smp." + o;
                i.callback = a, YAHOO.JP.rma.smp[o] = e.bind(function(e) {
                    var t = this.cbName,
                        i = n[t];
                    this.callback(e), delete YAHOO.JP.rma.smp[t], i.parentNode.removeChild(i)
                }, {
                    cbName: o,
                    callback: r
                }), n[o] = s(t + (/\?.*=/.test(t) ? "&" : "?") + e.createParamString(i))
            },
            f = function(n) {
                var i, r = [],
                    s = /^(SMAP|SA|SW|APSMP|APSA|APSW|SPSMP|SPSA|SPSW)$/,
                    f = /^(SITS|AITS|APSIS|APAIS|SPSIS|SPAIS)$/;
                "undefined" == typeof n ? n = a : a = n, i = {
                    f: n.spaceid.replace(/#/, "%23"),
                    sig: n.sig,
                    output: "json"
                }, c || (o = n.position.split(",")), c = !0, e.each(o, function(t) {
                    f.test(t) && (e.hasSITS = !0), e.isLandscape() && s.test(t) || (u[t] = "init", r.push(t))
                }), e.each(r, function(t) {
                    e.each(o, function(e, n) {
                        return t === e ? (o.splice(n, 1), !1) : void 0
                    })
                }), r.length && (i.l = r.join(","), t = "YSMA" + n.rand, n.api && ("string" == typeof n.api ? d(n.api, i, p) : p(n.api)))
            },
            p = function(t) {
                e.each(t.ads, function(t) {
                    u[t.position] = t.status, "noad" === t.status && "undefined" != typeof t.csc ? (e.addLog(t.csc), e.createNoadObject(t.position, t.ylk, t.csc), e.hasSITS && (YAHOO.JP.rma.smp.missSITS = !0), e.fireAdEvent("load", t.position, "noad")) : "isad" === t.status && "undefined" != typeof t.js ? (r[t.position] = t, s(t.js + "?" + i)) : (e.hasSITS && (YAHOO.JP.rma.smp.missSITS = !0), e.fireAdEvent("load", t.position, "error"))
                })
            },
            l = function() {
                o = []
            },
            h = function(e) {
                return "undefined" != typeof e && r.hasOwnProperty(e) ? r[e] : r
            },
            m = function() {
                return t
            },
            v = function(e) {
                function t(e) {
                    return "init" === u[e] || "isad" === u[e] ? !1 : !0
                }
                if ("undefined" != typeof e && u.hasOwnProperty(e)) return t(e);
                var n = {};
                for (var e in u) n[e] = t(e);
                return n
            },
            g = function(e) {
                return "undefined" != typeof e && u.hasOwnProperty(e) ? u[e] : u
            },
            y = function(e, t) {
                "undefined" != typeof e && "undefined" != typeof t && u.hasOwnProperty(e) && (u[e] = t)
            };
        e.extend({
            setPositionStatus: y
        }), e.extend({
            load: f,
            getPositionData: h,
            getNodeId: m,
            clearPosQueue: l,
            getPositionStatus: g,
            isPositionLoadDone: v
        }, YAHOO.JP.rma.smp), e.addOrientationChangeEvent(function(e) {
            e || f()
        })
    }()
}();