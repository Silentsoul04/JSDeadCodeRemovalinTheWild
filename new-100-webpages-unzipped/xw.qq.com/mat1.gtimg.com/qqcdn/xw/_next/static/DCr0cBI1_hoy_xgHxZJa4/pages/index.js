(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        "+sCI": function(e, t, n) {
            "use strict";
            var a = n("6BQ9"),
                o = n.n(a),
                r = n("p0XB"),
                i = n.n(r),
                s = n("eVuF"),
                c = n.n(s),
                l = n("UXZV"),
                u = n.n(l),
                d = n("9Jkg"),
                p = n.n(d),
                f = n("tblk"),
                m = {},
                h = {},
                g = {};
            t.a = function(e) {
                var t = e.url,
                    n = void 0 === t ? "//pacaio.match.qq.com/irs/rcd" : t,
                    a = e.params,
                    r = void 0 === a ? {} : a,
                    s = e.offset,
                    l = void 0 === s ? 0 : s,
                    d = e.count,
                    b = void 0 === d ? 10 : d,
                    v = e.solidExpIds,
                    x = void 0 === v ? "" : v,
                    w = e.noExpIds,
                    y = void 0 !== w && w,
                    j = e.useRefreshAsPage,
                    k = void 0 !== j && j,
                    O = e.pageOffset,
                    _ = void 0 === O ? 0 : O,
                    C = e.numPerRequest,
                    S = void 0 === C ? 20 : C,
                    E = p()(u()({
                        url: n
                    }, r));
                return new c.a((function(e, t) {
                    var a = function() {
                            var e = ("number" == typeof h[E] ? h[E] : -1) + 1;
                            e += _;
                            var a = (m[E] || []).slice(-20).map((function(e) {
                                return e.id || ("00" !== e.app_id ? e.app_id : null) || ""
                            })).join("|");
                            x && (a += (a ? "|" : "") + (i()(x) ? x.join("|") : x)), Object(f.a)(n, u()({}, r, {
                                num: S
                            }, y ? {} : {
                                expIds: a
                            }, k ? {
                                refresh: e
                            } : {
                                page: e
                            }, {
                                _t: o()((new Date).valueOf() / 1e3, 10)
                            })).then((function(a) {
                                a && 0 === a.code && a.data ? a.data.length > 0 ? (window && -1 !== ((window.location || {}).href || "").indexOf("pgv_ref=mobileqq") && (a.data = a.data.filter(function() {
                                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        n = t.keywords || [],
                                        a = !1;
                                    return n.length > 0 && (a = !0, e = new RegExp(n.join("|"))),
                                        function(t, n, o) {
                                            return !a || !e.test(t.title || "")
                                        }
                                }({
                                    keywords: ["\u7f8e\u5973", "\u540c\u4eba", "\u62bd\u5956"]
                                }))), m[E] = m[E].concat(a.data), h[E] = e, g[n] = a, s()) : s(!0) : t(new Error("api response format error"))
                            })).catch((function(e) {
                                return t(e)
                            }))
                        },
                        s = function(t) {
                            var o = m[E];
                            o ? o.length >= b + l || t ? e([o.slice(l, l + b), g[n]]) : a() : (m[E] = [], a())
                        };
                    s()
                }))
            }
        },
        "/A4X": function(e, t, n) {
            "use strict";
            var a = n("6BQ9"),
                o = n.n(a);
            t.a = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                e = o()(e, 10);
                var t = new Date(null);
                t.setSeconds(e);
                var n = t.toISOString().substr(11, 8);
                return e < 3600 && (n = n.substr(3, 5)), n
            }
        },
        "/lCS": function(e, t, n) {
            var a = n("gFfm"),
                o = n("jbM+"),
                r = [
                    ["ary", 128],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", 16],
                    ["flip", 512],
                    ["partial", 32],
                    ["partialRight", 64],
                    ["rearg", 256]
                ];
            e.exports = function(e, t) {
                return a(r, (function(n) {
                    var a = "_." + n[0];
                    t & n[1] && !o(e, a) && e.push(a)
                })), e.sort()
            }
        },
        "07Xt": function(e, t, n) {
            "use strict";
            var a = n("MuZe"),
                o = "//res.wx.qq.com/open/js/jweixin-1.4.0.js";
            t.a = {
                get: function(e) {
                    e = "function" == typeof e ? e : function() {}, window ? /micromessenger/i.test(window.navigator.userAgent) ? window.wx && wx.config ? e(null, window.wx) : a(o, (function(t) {
                        !t && window.wx ? e(null, window.wx) : e(t)
                    })) : e(new Error("not in wechat")) : e(new Error("wechat sdk cannot run in node"))
                }
            }
        },
        "0ADi": function(e, t, n) {
            var a = n("heNW"),
                o = n("EldB"),
                r = n("Kz5y"),
                i = 1;
            e.exports = function(e, t, n, s) {
                var c = t & i,
                    l = o(e);
                return function t() {
                    for (var o = -1, i = arguments.length, u = -1, d = s.length, p = Array(d + i), f = this && this !== r && this instanceof t ? l : e; ++u < d;) p[u] = s[u];
                    for (; i--;) p[u++] = arguments[++o];
                    return a(f, c ? n : this, p)
                }
            }
        },
        "0Q2g": function(e, t, n) {
            var a = n("W6/K");
            e.exports = function(e, t) {
                return e && e.length && t && t.length ? a(e, t) : e
            }
        },
        "0U20": function(e, t, n) {
            "use strict";
            t.a = function(e) {
                return "string" != typeof e ? e : -1 !== e.indexOf("/iphone/m/wemedia/") ? e : e.replace(/^(https?:|)\/\/(xw|testshipei)\.qq\.com\/?/, "/")
            }
        },
        "0XPj": function(e, t, n) {
            var a = n("eUgh"),
                o = n("s+kx"),
                r = n("EA7m"),
                i = n("XzbM"),
                s = r((function(e) {
                    var t = a(e, i);
                    return t.length && t[0] === e[0] ? o(t) : []
                }));
            e.exports = s
        },
        "0j6O": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            var a = n("ln6h"),
                o = n.n(a),
                r = n("O40h"),
                i = n("0iUn"),
                s = n("sLSF"),
                c = n("MI3g"),
                l = n("a7VT"),
                u = n("AT/M"),
                d = n("Tit0"),
                p = n("vYYK"),
                f = n("MX0m"),
                m = n.n(f),
                h = n("q1tI"),
                g = n.n(h),
                b = n("xkCI"),
                v = n("62Vo"),
                x = n("Gy9X"),
                w = n("NpjF"),
                y = n("LEpJ"),
                j = n("CZ8k"),
                k = g.a.createElement,
                O = function(e) {
                    function t(e) {
                        var n;
                        return Object(i.a)(this, t), n = Object(c.a)(this, Object(l.a)(t).call(this, e)), Object(p.a)(Object(u.a)(n), "handleLoadMore", (function() {
                            n.setState({
                                size: 19
                            }, (function() {
                                setTimeout((function() {
                                    n.setState({
                                        hasLoadMore: !0,
                                        more: {
                                            text: "\u8fdb\u516524\u5c0f\u65f6\u9891\u9053",
                                            url: "/m/24h",
                                            boss: "jrpd"
                                        }
                                    })
                                }), 500)
                            }))
                        })), n.state = {
                            size: 7,
                            more: {
                                text: "\u52a0\u8f7d\u66f4\u591a",
                                boss: "more"
                            },
                            skin: {}
                        }, n
                    }
                    var n;
                    return Object(d.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(r.a)(o.a.mark((function e() {
                            var t, n, a, r;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (void 0 !== (t = this.props.ignoreSkin) && t) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, Object(b.a)();
                                    case 5:
                                        n = e.sent, a = n.hasSkin, r = n.bgcolor, a && this.setState({
                                            skin: {
                                                bgcolor: r
                                            }
                                        }), e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(2), console.log(e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 11]
                            ])
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.diaocha,
                                a = e.yunying,
                                o = e.ignoreSkin,
                                r = e.adChannel,
                                i = e.displayMode,
                                s = this.state,
                                c = s.size,
                                l = s.more,
                                u = s.hasLoadMore,
                                d = s.skin,
                                p = t.slice(0),
                                f = d.bgcolor,
                                g = null,
                                b = n.length && Number(n[0].station) + 1 || 0;
                            if (p.length > b && b > 0 && b < c) {
                                var O = n[0];
                                g = k("div", {
                                    index: b
                                }, k(x.a, {
                                    data: {
                                        title: O.title,
                                        url: O.hrefurl,
                                        image: O.picurl,
                                        source: O.source || "\u9177\u9e45\u7528\u6237\u7814\u7a76\u9662"
                                    },
                                    bossClick: "survey_click&modular=survey",
                                    bossExpo: "survey_click&modular=survey"
                                }))
                            }
                            var _ = null,
                                C = a.length && Number(a[0].station) + 1 || 0;
                            if (p.length > C && C > 0 && C < c) {
                                var S = a[0],
                                    E = null;
                                E = S.mtitle ? k(x.a, {
                                    data: {
                                        title: S.mtitle,
                                        url: S.morelink,
                                        image: S.banner,
                                        source: S.msource || "",
                                        titleLabels: [{
                                            style: {
                                                backgroundColor: "rgb(76, 126, 255)"
                                            },
                                            text: "\u4e13\u9898"
                                        }]
                                    },
                                    bossClick: "article&modular=business",
                                    bossExpo: "article&modular=business"
                                }) : k(y.a, {
                                    key: "insert-315",
                                    data: {
                                        banner: S.banner || "",
                                        bgcolor: S.bgcolor || "",
                                        img: S.picurl,
                                        link: S.hrefurl,
                                        title: S.title,
                                        moredesc: S.moredesc,
                                        morelink: S.morelink,
                                        source: S.source
                                    },
                                    bossClickArticle: "article&modular=business",
                                    bossExpo: "article&modular=business",
                                    bossClickMore: "more&modular=business"
                                }), _ = k("div", {
                                    index: C
                                }, E)
                            }
                            var N = 0;
                            return [2, 5, 17, 27].forEach((function(e) {
                                if (p.length > e) {
                                    var t = N++;
                                    p.splice(e, 0, {
                                        type: "custom",
                                        id: "ad_".concat(t),
                                        Element: k(j.a, {
                                            channel: r || "homepage",
                                            index: t,
                                            moduleId: "m_24h"
                                        })
                                    })
                                }
                            })), k(h.Fragment, null, k(w.a, {
                                name: "24hours",
                                more: {
                                    text: l.text,
                                    boss: l.boss,
                                    url: u ? l.url : null,
                                    onClick: u ? null : this.handleLoadMore,
                                    arrowDir: u ? "right" : "down"
                                },
                                style: {
                                    minHeight: "2rem"
                                },
                                ignoreSkin: o
                            }, k(v.a, {
                                data: p.slice(0, c),
                                modular: "24hours",
                                displayMode: i
                            }, g, _)), k(m.a, {
                                id: "2161992359",
                                dynamic: [f || "rgba(76,126,255,1)"]
                            }, [".title.__jsx-style-dynamic-selector{height:0.2rem;line-height:0.2rem;margin-top:0.24rem;margin-bottom:0.09rem;overflow:hidden;font-size:0px;}", ".title.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:0.2rem;}", ".title.__jsx-style-dynamic-selector:before{float:left;content:'';width:0.12rem;height:0.2rem;margin-right:0.12rem;background:".concat(f || "rgba(76,126,255,1)", ";border-radius:0rem 0.02rem 0.02rem 0rem;}")]))
                        }
                    }]), t
                }(h.Component)
        },
        "18Zd": function(e, t, n) {
            var a = n("mOAx"),
                o = n("Sxd8");
            e.exports = function(e, t) {
                return e && e.length ? a(e, o(t)) : void 0
            }
        },
        "1w02": function(e, t) {
            e.exports = function(e, t, n) {
                for (var a = -1, o = e.length, r = t.length, i = {}; ++a < o;) {
                    var s = a < r ? t[a] : void 0;
                    n(i, e[a], s)
                }
                return i
            }
        },
        "2GsC": function(e, t) {
            e.exports = function(e, t, n, a) {
                for (var o = n - 1, r = e.length; ++o < r;)
                    if (a(e[o], t)) return o;
                return -1
            }
        },
        "2W6z": function(e, t, n) {
            "use strict";
            var a = function() {};
            e.exports = a
        },
        "2ajD": function(e, t) {
            e.exports = function(e) {
                return e != e
            }
        },
        "2lMS": function(e, t) {
            var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            e.exports = function(e, t) {
                var a = t.length;
                if (!a) return e;
                var o = a - 1;
                return t[o] = (a > 1 ? "& " : "") + t[o], t = t.join(a > 2 ? ", " : " "), e.replace(n, "{\n/* [wrapped with " + t + "] */\n")
            }
        },
        "2rMq": function(e, t, n) {
            var a;
            ! function() {
                "use strict";
                var o = !("undefined" == typeof window || !window.document || !window.document.createElement),
                    r = {
                        canUseDOM: o,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners: o && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: o && !!window.screen
                    };
                void 0 === (a = function() {
                    return r
                }.call(t, n, t, e)) || (e.exports = a)
            }()
        },
        "2zs7": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canUseDOM = void 0;
            var a, o = n("2rMq");
            var r = ((a = o) && a.__esModule ? a : {
                    default: a
                }).default,
                i = r.canUseDOM ? window.HTMLElement : {};
            t.canUseDOM = r.canUseDOM;
            t.default = i
        },
        "30sJ": function(e, t, n) {
            "use strict";
            t.a = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return e < 1e4 ? e : e / 1e4 > 10 ? (e / 1e4).toFixed(0) + "\u4e07" : (e / 1e4).toFixed(1) + "\u4e07"
            }
        },
        "3DEb": function(e, t, n) {
            "use strict";
            var a = n("kOwS"),
                o = n("0iUn"),
                r = n("sLSF"),
                i = n("MI3g"),
                s = n("a7VT"),
                c = n("AT/M"),
                l = n("Tit0"),
                u = n("vYYK"),
                d = n("q1tI"),
                p = n.n(d),
                f = n("RNUE"),
                m = n("ob4f"),
                h = n("zv14"),
                g = n("qUMa"),
                b = n("CZ8k"),
                v = n("fP2x"),
                x = n("UqUK"),
                w = n("iKBj"),
                y = n("MX0m"),
                j = n.n(y),
                k = n("PIAq"),
                O = n("zCEa"),
                _ = n("Ri3a"),
                C = n("30sJ"),
                S = n("/A4X"),
                E = n("g+X1"),
                N = n("0U20"),
                M = p.a.createElement,
                T = function(e) {
                    function t(e) {
                        var n;
                        return Object(o.a)(this, t), n = Object(i.a)(this, Object(s.a)(t).call(this, e)), Object(u.a)(Object(c.a)(n), "handleNagativeFeedback", (function(e) {
                            e.stopPropagation(), e.preventDefault()
                        })), Object(u.a)(Object(c.a)(n), "handlePlay", (function(e) {
                            Object(g.c)({
                                vid: e,
                                target: n.preview.current
                            })
                        })), n.state = {}, n.feedbackBtn = p.a.createRef(), n.container = p.a.createRef(), n.preview = p.a.createRef(), n
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.handleNegativeFeedback,
                                a = t.data,
                                o = t.bossExpo,
                                r = t.bossClick,
                                i = t.hideSubInfo,
                                s = t.superView,
                                c = t.theme,
                                l = a.id,
                                u = a.app_id,
                                d = a.title,
                                p = a.url,
                                f = a.image,
                                m = a.titleLabels,
                                h = a.playCount,
                                g = a.duration,
                                b = a.source,
                                v = a.categories,
                                x = a.showtype,
                                w = r.replace(/[a-zA-z_]*&/, "play&"),
                                y = r.replace(/[a-zA-z_]*&/, "author&"),
                                T = r.replace(/[a-zA-z_]*&/, "tag&");
                            return M("div", {
                                ref: this.container,
                                style: {
                                    position: "relative"
                                },
                                "data-boss-expo": o,
                                "data-list-vid": l,
                                "data-boss-once": !0,
                                className: "jsx-3897169103 " + "root showDividingLine ".concat(c || "")
                            }, M("div", {
                                onClick: function() {
                                    return e.handlePlay(l)
                                },
                                ref: this.preview,
                                "data-boss": w,
                                className: "jsx-3897169103 ct-preview"
                            }, M(O.a, {
                                image: f,
                                ratio: "56.25%"
                            }), M("div", {
                                className: "jsx-3897169103 ct-title"
                            }, M(k.a, {
                                title: d,
                                style: {
                                    marginBottom: "0.09rem",
                                    color: "#fff"
                                },
                                labels: m
                            })), M("i", {
                                className: "jsx-3897169103 play-icon"
                            }), g && M("div", {
                                className: "jsx-3897169103 video-info"
                            }, h - 0 > 0 && M("span", {
                                className: "jsx-3897169103 views"
                            }, Object(C.a)(h), "\u2002", M("em", {
                                className: "jsx-3897169103"
                            }, "|"), "\u2002"), Object(S.a)(g))), !i && M("div", {
                                className: "jsx-3897169103 news-info"
                            }, M("div", {
                                className: "jsx-3897169103 source"
                            }, M(_.a, {
                                href: "/m/shipin?type=author&title=".concat(b.name, "&id=").concat(b.id),
                                "data-boss": y
                            }, M("img", {
                                src: Object(E.a)(b.icon) || "//mat1.gtimg.com/pingjs/ext2020/test2017/components/channel/index/Dujia/head.svg",
                                alt: "\u5934\u50cf",
                                className: "jsx-3897169103"
                            }), M("span", {
                                className: "jsx-3897169103"
                            }, b.name))), M("div", {
                                className: "jsx-3897169103 categories"
                            }, v.map((function(e) {
                                return M("span", {
                                    key: e.id,
                                    className: "jsx-3897169103"
                                }, M(_.a, {
                                    href: "/m/shipin/?type=tag&id=".concat(e.id, "&title=").concat(e.name),
                                    "data-boss": T
                                }, e.name))
                            }))), M(_.a, {
                                href: Object(N.a)(p),
                                style: {
                                    flex: 1,
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                                },
                                "data-boss": r,
                                superView: s,
                                articleInfo: {
                                    id: u,
                                    title: d,
                                    showtype: x
                                }
                            }), n && M("span", {
                                "data-boss": "delete",
                                ref: this.feedbackBtn,
                                role: "button",
                                title: "\u4e0d\u559c\u6b22",
                                onClick: this.handleNagativeFeedback,
                                className: "jsx-3897169103 icon icon-dislike"
                            }, "\u4e0d\u559c\u6b22")), M(j.a, {
                                id: "3897169103"
                            }, [".root.jsx-3897169103{padding:0 0.15rem;margin-top:0.12rem;}", ".root.jsx-3897169103:after{clear:both;content:'';display:block;height:0px;width:100%;}", ".showDividingLine.jsx-3897169103:after{height:1px;background:rgba(240,240,240,1);-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}", ".ct-preview.jsx-3897169103{border-radius:0.04rem;position:relative;overflow:hidden;}", ".ct-title.jsx-3897169103{position:absolute;width:100%;top:0;background:linear-gradient(180deg,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);border-radius:0.03rem 0.03rem 0px 0px;padding:0.06rem 0.12rem;}", ".play-icon.jsx-3897169103{position:absolute;z-index:0;width:48px;height:48px;left:50%;top:50%;font-size:0px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-image:url(//mat1.gtimg.com/pingjs/ext2020/xw-video/newui/xw_icon_video_play.svg);background-size:contain;border-radius:50%;}", ".video-info.jsx-3897169103{display:block;position:absolute;right:0.09rem;bottom:0.11rem;font-size:0.12rem;color:rgb(255,255,255);height:0.18rem;line-height:0.18rem;background:rgba(0,0,0,0.3);padding:0px 0.1rem;border-radius:0.09rem;}", ".views.jsx-3897169103{display:inline-block;background-image:url(//mat1.gtimg.com/pingjs/ext2020/xw-video/newui/xw_icon_video_watch.svg);padding-left:0.24rem;background-position:left center;background-repeat:no-repeat;}", ".views.jsx-3897169103 em.jsx-3897169103{color:rgba(255,255,255,0.5);font-style:normal;}", ".news-info.jsx-3897169103{height:0.24rem;margin:0.09rem 0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".source.jsx-3897169103{float:left;line-height:0.24rem;margin-right:0.15rem;}", ".source.jsx-3897169103 img.jsx-3897169103{vertical-align:top;margin-right:0.06rem;width:0.24rem;height:0.24rem;border-radius:50%;}", ".source.jsx-3897169103 span.jsx-3897169103{vertical-align:top;font-size:0.14rem;color:rgba(34,34,34,1);}", ".categories.jsx-3897169103{float:left;padding:0.03rem 0px;}", ".categories.jsx-3897169103 span.jsx-3897169103{float:left;padding:0px 0.09rem;height:0.18rem;background:rgba(237,242,250,1);border-radius:0.10rem;font-size:0.12rem;color:rgba(130,140,155,1);line-height:0.18rem;margin-right:0.09rem;text-align:center;}", ".icon-dislike.jsx-3897169103{font-size:0px;width:0.24rem;height:0.24rem;float:right;margin-right:0.01rem;background-size:0.08rem;background-image:url('data:image/svg+xml;utf8,".concat('<svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.9 5.485l2.828 2.829a1 1 0 0 1-1.414 1.414L5.485 6.899 2.657 9.728a1 1 0 0 1-1.414-1.414L4.07 5.485 1.243 2.657a1 1 0 1 1 1.414-1.414L5.485 4.07l2.829-2.828a1 1 0 1 1 1.414 1.414L6.899 5.485z" fill="%23E0E0E0" fill-rule="evenodd"/></svg>', "');background-repeat:no-repeat;background-position:center;overflow:hidden;}"), ".dark.jsx-3897169103 .source.jsx-3897169103 span.jsx-3897169103{color:#fff;}", ".dark.jsx-3897169103 .categories.jsx-3897169103 span.jsx-3897169103{background:#373C47;color:#828C9B;}", ".dark.showDividingLine.jsx-3897169103:after{background:#43454A;}"]))
                        }
                    }]), t
                }(d.Component);
            n.d(t, "a", (function() {
                return L
            }));
            var I = p.a.createElement,
                L = function(e) {
                    function t(e) {
                        var n, a, r;
                        return Object(o.a)(this, t), n = Object(i.a)(this, Object(s.a)(t).call(this, e)), Object(u.a)(Object(c.a)(n), "updateAutoPlay", (function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.update;
                            if (this.props.videoAutoPlay && (!a || n)) {
                                if (Object(v.a)()) {
                                    var o, i = function() {
                                        var t, n = !1;
                                        Array.prototype.forEach.call(document.querySelectorAll("[data-list-vid]"), (function(e) {
                                            if (!n) {
                                                var a = e.querySelector(".ct-preview");
                                                if (a) {
                                                    var r = a.getBoundingClientRect();
                                                    if (r.top >= 0 && r.left >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                                                        var i = e.getAttribute("data-list-vid");
                                                        if (o === i) return void(n = !0);
                                                        o = i, t = i, n = !0
                                                    }
                                                }
                                            }
                                        })), t && t !== r && !e.unmounted && Object(v.a)() && (r = t, Object(g.c)({
                                            vid: t,
                                            target: document.querySelector("[data-list-vid=".concat(t, "] .ct-preview")),
                                            txpOptions: {
                                                autoPlayInMute: !0,
                                                muted: !0
                                            },
                                            clickReport: !0,
                                            auto: !0,
                                            autoNext: e.props.autoNext
                                        }))
                                    };
                                    n ? i() : (i(), window.addEventListener("scroll", Object(f.debounce)(i, 300), Object(x.a)()))
                                }
                                a = !0
                            }
                        })), Object(u.a)(Object(c.a)(n), "handleDisLike", (function(e) {
                            n.props.handleNegativeFeedback(e);
                            n.setState({
                                disLikeArticles: n.state.disLikeArticles.concat([e])
                            }), Object(g.d)(), window.scrollTo(window.scrollX, window.scrollY - 1), window.scrollTo(window.scrollX, window.scrollY + 1), Object(g.d)()
                        })), n.state = {
                            disLikeArticles: []
                        }, n
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.updateAutoPlay()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.unmounted = !0, Object(g.a)()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.updateAutoPlay({
                                update: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.data,
                                o = t.dataMeta,
                                r = t.handleNegativeFeedback,
                                i = t.bossExpo,
                                s = t.bossClick,
                                c = t.hideSubInfo,
                                l = t.modular,
                                u = t.disableSuperView,
                                p = t.theme,
                                f = t.adChannel,
                                g = this.state.disLikeArticles,
                                v = [];
                            if (n.length) {
                                var x = "";
                                if (o) {
                                    var y = o.biz,
                                        j = void 0 === y ? "" : y,
                                        k = o.s_group,
                                        O = void 0 === k ? "" : k,
                                        _ = o.seq,
                                        C = void 0 === _ ? "" : _,
                                        S = o.other,
                                        E = void 0 === S ? "" : S;
                                    x += "&biz=".concat(j, "&s_group=").concat(O, "&seq=").concat(C, "&user_group=").concat((E || {}).user_group || "")
                                }
                                if (l && (x += "&modular=".concat(l)), n.forEach((function(t, n) {
                                        if (g.indexOf(t.id) < 0) {
                                            var a = Object(h.a)(t),
                                                o = w.a.articleItem(t, n);
                                            o += "&articletype=".concat(a.type);
                                            var c = {
                                                id: a.id,
                                                data: a,
                                                props: {
                                                    bossExpo: "article&".concat(o).concat(x).concat(i || ""),
                                                    bossClick: "article&".concat(o).concat(x).concat(s || ""),
                                                    handleNegativeFeedback: r ? function() {
                                                        return e.handleDisLike(a.id)
                                                    } : null
                                                }
                                            };
                                            v.push(c)
                                        }
                                    })), f) {
                                    var N = 0;
                                    [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79, 84, 89, 94, 99, 104, 109, 114, 119].forEach((function(e) {
                                        if (v.length > e) {
                                            var t = N++;
                                            v.splice(e, 0, {
                                                type: "custom",
                                                id: "ad_".concat(t),
                                                Element: I(m.a, {
                                                    triggerOnce: !0,
                                                    rootMargin: "0px 0px 300px 0px"
                                                }, (function(e) {
                                                    var n = e.inView,
                                                        a = e.ref;
                                                    return I("div", {
                                                        ref: a
                                                    }, n ? I(b.a, {
                                                        channel: f,
                                                        index: t
                                                    }) : null)
                                                }))
                                            })
                                        }
                                    }))
                                }
                            }
                            return I(d.Fragment, null, v.map((function(e, t) {
                                return "custom" === e.type ? I("div", {
                                    id: e.id,
                                    key: e.id
                                }, e.Element) : I(T, Object(a.a)({
                                    index: t,
                                    key: "video_".concat(t),
                                    data: e.data
                                }, e.props, {
                                    hideSubInfo: c,
                                    superView: !u,
                                    theme: p
                                }))
                            })))
                        }
                    }]), t
                }(d.Component)
        },
        "3EZw": function(e, t, n) {
            var a = n("6T1N"),
                o = 8;

            function r(e, t, n) {
                var i = a(e, o, void 0, void 0, void 0, void 0, void 0, t = n ? void 0 : t);
                return i.placeholder = r.placeholder, i
            }
            r.placeholder = {}, e.exports = r
        },
        "3tWz": function(e, t) {
            var n = Array.prototype.join;
            e.exports = function(e, t) {
                return null == e ? "" : n.call(e, t)
            }
        },
        "3zbN": function(e, t, n) {
            var a = n("EA7m"),
                o = n("Sxd8"),
                r = "Expected a function";
            e.exports = function(e, t) {
                if ("function" != typeof e) throw new TypeError(r);
                return t = void 0 === t ? t : o(t), a(e, t)
            }
        },
        "4Ig+": function(e, t, n) {
            var a = n("ut/Y"),
                o = n("j2Dk");
            e.exports = function(e, t) {
                return e && e.length ? o(e, a(t, 3), !0) : []
            }
        },
        "4O/9": function(e, t, n) {
            var a = n("Sxd8"),
                o = "Expected a function";
            e.exports = function(e, t) {
                var n;
                if ("function" != typeof t) throw new TypeError(o);
                return e = a(e),
                    function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
                    }
            }
        },
        "4Zpp": function(e, t, n) {
            var a = n("ut/Y"),
                o = n("6ZrN");
            e.exports = function(e, t) {
                return e && e.length ? o(e, a(t, 2)) : []
            }
        },
        "4mXO": function(e, t, n) {
            e.exports = n("Vphk")
        },
        "4vei": function(e, t, n) {
            var a = n("ut/Y"),
                o = n("j2Dk");
            e.exports = function(e, t) {
                return e && e.length ? o(e, a(t, 3)) : []
            }
        },
        "5sOR": function(e, t, n) {
            var a = n("N4mw"),
                o = n("99Ms"),
                r = n("T8tx"),
                i = 1,
                s = 2,
                c = 4,
                l = 8,
                u = 32,
                d = 64;
            e.exports = function(e, t, n, p, f, m, h, g, b, v) {
                var x = t & l;
                t |= x ? u : d, (t &= ~(x ? d : u)) & c || (t &= ~(i | s));
                var w = [e, t, f, x ? m : void 0, x ? h : void 0, x ? void 0 : m, x ? void 0 : h, g, b, v],
                    y = n.apply(void 0, w);
                return a(e) && o(y, w), y.placeholder = p, r(y, e, t)
            }
        },
        "5yYD": function(e, t, n) {
            var a = n("KxBF"),
                o = n("Sxd8");
            e.exports = function(e, t, n) {
                var r = null == e ? 0 : e.length;
                return r ? (t = n || void 0 === t ? 1 : o(t), a(e, t < 0 ? 0 : t, r)) : []
            }
        },
        "6+Eo": function(e, t, n) {
            var a = n("XGnz"),
                o = n("Sxd8");
            e.exports = function(e, t) {
                return (null == e ? 0 : e.length) ? (t = void 0 === t ? 1 : o(t), a(e, t)) : []
            }
        },
        "62Vo": function(e, t, n) {
            "use strict";
            var a = n("p0XB"),
                o = n.n(a),
                r = n("0iUn"),
                i = n("sLSF"),
                s = n("MI3g"),
                c = n("a7VT"),
                l = n("AT/M"),
                u = n("Tit0"),
                d = n("vYYK"),
                p = n("q1tI"),
                f = n.n(p),
                m = n("RNUE"),
                h = n("kOwS"),
                g = n("9dat"),
                b = n("HXQy"),
                v = f.a.createElement,
                x = b.TYPE_CODES.TITLE,
                w = b.TYPE_CODES.BIG_PICTURE,
                y = b.TYPE_CODES.THREE_PICTURE,
                j = b.TYPE_CODES.VIDEO,
                k = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), (n = Object(s.a)(this, Object(c.a)(t).call(this, e))).state = {}, n
                    }
                    return Object(u.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.children,
                                a = e.superView,
                                o = e.displayMode,
                                r = [],
                                i = {};
                            return t.forEach((function(e, t) {
                                var n = e.id,
                                    s = e.data,
                                    c = e.props,
                                    l = void 0 === c ? {} : c,
                                    u = e.type;
                                if (n && !(n in i) && u)
                                    if (i[n] = r.length, "custom" === u) {
                                        var d = e.Element;
                                        d && r.push(v(p.Fragment, {
                                            key: n
                                        }, d))
                                    } else {
                                        var f;
                                        switch ("noimage" === o && (u = x), l.id = n, l.superView = a, u) {
                                            case x:
                                                f = g.d;
                                                break;
                                            case w:
                                                f = g.a;
                                                break;
                                            case y:
                                                f = g.c;
                                                break;
                                            case j:
                                                f = g.e;
                                                break;
                                            default:
                                                f = g.b
                                        }
                                        r.push(v(f, Object(h.a)({
                                            index: t,
                                            key: n,
                                            data: s
                                        }, l)))
                                    }
                            })), f.a.Children.map(n, (function(e) {
                                if (e) {
                                    var t = e.props,
                                        n = t.index,
                                        a = t.after;
                                    if (a && i[a]) {
                                        var o = r.findIndex((function(e) {
                                            return e.key == a
                                        }));
                                        r.splice(o, 0, e)
                                    } else n && "number" == typeof n && n > 0 ? n <= r.length ? r.splice(n - 1, 0, e) : (r.push(e), console.warn("\u5d4c\u5165\u5b50\u5143\u7d20index\u5927\u4e8e\u5217\u8868\u957f\u5ea6")) : console.error("\u5d4c\u5165\u5b50\u5143\u7d20index,after\u6570\u636e\u5747\u65e0\u6548\u8bf7\u9a8c\u8bc1")
                                }
                            })), v(p.Fragment, null, r)
                        }
                    }]), t
                }(p.PureComponent),
                O = n("qUMa"),
                _ = n("fP2x"),
                C = n("UqUK"),
                S = n("zv14"),
                E = n("iKBj"),
                N = n("70DZ");
            n.d(t, "a", (function() {
                return q
            }));
            var M = f.a.createElement,
                T = b.TYPE_CODES.TITLE,
                I = b.TYPE_CODES.ONE_PICTURE,
                L = b.TYPE_CODES.BIG_PICTURE,
                D = b.TYPE_CODES.THREE_PICTURE,
                A = b.TYPE_CODES.VIDEO,
                q = function(e) {
                    function t(e) {
                        var n, a, o;
                        return Object(r.a)(this, t), n = Object(s.a)(this, Object(c.a)(t).call(this, e)), Object(d.a)(Object(l.a)(n), "updateAutoPlay", (function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.update;
                            if (this.props.videoAutoPlay && (!a || n)) {
                                if (Object(_.a)()) {
                                    var r, i = function() {
                                        var t, n = !1;
                                        Array.prototype.forEach.call(document.querySelectorAll("[data-list-vid]"), (function(e) {
                                            if (!n) {
                                                var a = e.querySelector(".ct-preview");
                                                if (a) {
                                                    var o = a.getBoundingClientRect();
                                                    if (o.top >= 0 && o.left >= 0 && o.bottom <= (window.innerHeight || document.documentElement.clientHeight) && o.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                                                        var i = e.getAttribute("data-list-vid");
                                                        if (r === i) return void(n = !0);
                                                        r = i, t = i, n = !0
                                                    }
                                                }
                                            }
                                        })), t && t !== o && !e.unmounted && Object(_.a)() && (o = t, Object(O.c)({
                                            vid: t,
                                            target: document.querySelector("[data-list-vid=".concat(t, "] .ct-preview")),
                                            txpOptions: {
                                                autoPlayInMute: !0,
                                                muted: !0
                                            },
                                            clickReport: !0,
                                            auto: !0
                                        }))
                                    };
                                    n ? i() : (i(), window.addEventListener("scroll", Object(m.debounce)(i, 300), Object(C.a)()))
                                }
                                a = !0
                            }
                        })), Object(d.a)(Object(l.a)(n), "handleNegativeFeedback", (function(e) {
                            n.props.handleNegativeFeedback(e);
                            n.setState({
                                disLikeArticles: n.state.disLikeArticles.concat([e])
                            }), Object(O.d)(), window.scrollTo(window.scrollX, window.scrollY - 1), window.scrollTo(window.scrollX, window.scrollY + 1)
                        })), n.state = {
                            disLikeArticles: [],
                            displayMode: null
                        }, n.unmounted = !1, n
                    }
                    return Object(u.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            if (this.updateAutoPlay(), !this.props.displayMode) {
                                var e = N.a.switches.get("noimage") || !1;
                                this.setState({
                                    displayMode: e ? "noimage" : null
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.unmounted = !0, Object(O.a)()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.updateAutoPlay({
                                update: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.data,
                                a = t.modular,
                                r = t.handleNegativeFeedback,
                                i = t.bossExpo,
                                s = t.bossClick,
                                c = t.children,
                                l = t.dataMeta,
                                u = t.dataProcess,
                                d = t.disableSuperView,
                                p = this.state.disLikeArticles,
                                f = this.state.displayMode || this.props.displayMode,
                                m = [],
                                h = "";
                            if (l) {
                                var g = l.biz,
                                    b = void 0 === g ? "" : g,
                                    v = l.s_group,
                                    x = void 0 === v ? "" : v,
                                    w = l.seq,
                                    y = void 0 === w ? "" : w,
                                    j = l.other,
                                    _ = void 0 === j ? "" : j;
                                h += "&biz=".concat(b, "&s_group=").concat(x, "&seq=").concat(y, "&user_group=").concat((_ || {}).user_group || "")
                            }
                            return a && (h += "&modular=".concat(a)), n.forEach((function(t, n) {
                                if ("custom" !== t.type) {
                                    var a = Object(S.a)(t),
                                        c = E.a.articleItem(t, n) + h,
                                        l = a.id,
                                        d = a.type,
                                        f = a.img_type,
                                        g = a.images,
                                        b = a.image;
                                    a.showtype;
                                    if (p.indexOf(l) < 0) {
                                        var v = {
                                            id: l,
                                            data: a,
                                            props: {
                                                noOpenUrl: !0
                                            }
                                        };
                                        r && (v.props.handleNegativeFeedback = function() {
                                            return e.handleNegativeFeedback(l)
                                        });
                                        var x = "";
                                        3 === d ? (v.type = A, v.props.handlePlay = O.c, x = "video") : 2 === f ? (v.type = L, x = "large") : o()(g) && g.length > 2 ? (v.type = D, x = "three") : b ? (v.type = I, x = "single") : (v.type = T, x = "nopic");
                                        var w = "article&viewtype=".concat(x, "&articletype=").concat(d, "&").concat(c);
                                        v.props.bossExpo = "".concat(w).concat(i || ""), v.props.bossClick = "".concat(w).concat(s || ""), u && u(v), m.push(v)
                                    }
                                } else m.push(t)
                            })), M(k, {
                                data: m,
                                superView: !d,
                                displayMode: f
                            }, c)
                        }
                    }]), t
                }(p.Component)
        },
        "6KkN": function(e, t) {
            var n = "__lodash_placeholder__";
            e.exports = function(e, t) {
                for (var a = -1, o = e.length, r = 0, i = []; ++a < o;) {
                    var s = e[a];
                    s !== t && s !== n || (e[a] = n, i[r++] = a)
                }
                return i
            }
        },
        "6T1N": function(e, t, n) {
            var a = n("s0N+"),
                o = n("ieoY"),
                r = n("Rw8+"),
                i = n("a1zH"),
                s = n("0ADi"),
                c = n("KF6i"),
                l = n("q3TU"),
                u = n("99Ms"),
                d = n("T8tx"),
                p = n("Sxd8"),
                f = "Expected a function",
                m = 1,
                h = 2,
                g = 8,
                b = 16,
                v = 32,
                x = 64,
                w = Math.max;
            e.exports = function(e, t, n, y, j, k, O, _) {
                var C = t & h;
                if (!C && "function" != typeof e) throw new TypeError(f);
                var S = y ? y.length : 0;
                if (S || (t &= ~(v | x), y = j = void 0), O = void 0 === O ? O : w(p(O), 0), _ = void 0 === _ ? _ : p(_), S -= j ? j.length : 0, t & x) {
                    var E = y,
                        N = j;
                    y = j = void 0
                }
                var M = C ? void 0 : c(e),
                    T = [e, t, n, y, j, E, N, k, O, _];
                if (M && l(T, M), e = T[0], t = T[1], n = T[2], y = T[3], j = T[4], !(_ = T[9] = void 0 === T[9] ? C ? 0 : e.length : w(T[9] - S, 0)) && t & (g | b) && (t &= ~(g | b)), t && t != m) I = t == g || t == b ? r(e, t, _) : t != v && t != (m | v) || j.length ? i.apply(void 0, T) : s(e, t, n, y);
                else var I = o(e, t, n);
                return d((M ? a : u)(I, T), e, t)
            }
        },
        "6ZrN": function(e, t, n) {
            var a = n("ljhN");
            e.exports = function(e, t) {
                for (var n = -1, o = e.length, r = 0, i = []; ++n < o;) {
                    var s = e[n],
                        c = t ? t(s) : s;
                    if (!n || !a(c, l)) {
                        var l = c;
                        i[r++] = 0 === s ? 0 : s
                    }
                }
                return i
            }
        },
        "6ae/": function(e, t, n) {
            var a = n("dTAl"),
                o = n("RrRF");

            function r(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            r.prototype = a(o.prototype), r.prototype.constructor = r, e.exports = r
        },
        "6vz9": function(e, t, n) {
            var a = n("SmhD"),
                o = n("EA7m"),
                r = n("tLB3"),
                i = o((function(e, t, n) {
                    return a(e, r(t) || 0, n)
                }));
            e.exports = i
        },
        "7cXV": function(e, t, n) {
            var a = n("LqpT"),
                o = n("XGnz"),
                r = n("LGYb");
            e.exports = function(e, t, n) {
                var i = e.length;
                if (i < 2) return i ? r(e[0]) : [];
                for (var s = -1, c = Array(i); ++s < i;)
                    for (var l = e[s], u = -1; ++u < i;) u != s && (c[s] = a(c[s] || l, e[u], t, n));
                return r(o(c, 1), t, n)
            }
        },
        "7tbW": function(e, t, n) {
            var a = n("LGYb");
            e.exports = function(e) {
                return e && e.length ? a(e) : []
            }
        },
        "8CK4": function(e, t, n) {
            var a = n("UKhj");
            e.exports = function(e, t) {
                return a(e, t, !0)
            }
        },
        "99Ms": function(e, t, n) {
            var a = n("s0N+"),
                o = n("88Gu")(a);
            e.exports = o
        },
        "9PER": function(e, t, n) {
            var a = n("6T1N"),
                o = 512;
            e.exports = function(e) {
                return a(e, o)
            }
        },
        "9dat": function(e, t, n) {
            "use strict";
            var a = n("UXZV"),
                o = n.n(a),
                r = n("0iUn"),
                i = n("sLSF"),
                s = n("MI3g"),
                c = n("a7VT"),
                l = n("Tit0"),
                u = n("MX0m"),
                d = n.n(u),
                p = n("q1tI"),
                f = n.n(p),
                m = n("PIAq"),
                h = f.a.createElement,
                g = function(e) {
                    function t(e) {
                        return Object(r.a)(this, t), Object(s.a)(this, Object(c.a)(t).call(this, e))
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.children,
                                a = e.styles,
                                r = void 0 === a ? {} : a,
                                i = t.title,
                                s = t.titleLabels,
                                c = o()({}, {
                                    marginBottom: "0.03rem"
                                }, r.title);
                            return h(p.Fragment, null, h(m.a, {
                                title: i,
                                style: c,
                                labels: s
                            }), n, h(d.a, {
                                id: "3636536621"
                            }, []))
                        }
                    }]), t
                }(p.PureComponent),
                b = n("O8ig"),
                v = n("kSD8"),
                x = n("zCEa"),
                w = f.a.createElement,
                y = function(e) {
                    function t(e) {
                        return Object(r.a)(this, t), Object(s.a)(this, Object(c.a)(t).call(this, e))
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.children,
                                a = e.disableLazyImage,
                                o = t.title,
                                r = t.image,
                                i = t.titleLabels;
                            return w(p.Fragment, null, w(m.a, {
                                title: o,
                                style: {
                                    marginBottom: "0.06rem"
                                },
                                labels: i
                            }), w(x.a, {
                                image: r,
                                disableLazyImage: a,
                                style: {
                                    marginBottom: "0.06rem",
                                    borderRadius: "0.04rem"
                                },
                                ratio: "56.232%"
                            }), n, w(d.a, {
                                id: "3636536621"
                            }, []))
                        }
                    }]), t
                }(p.PureComponent),
                j = n("AT/M"),
                k = n("vYYK"),
                O = n("30sJ"),
                _ = n("/A4X"),
                C = f.a.createElement,
                S = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(s.a)(this, Object(c.a)(t).call(this, e)), Object(k.a)(Object(j.a)(n), "playClickHandle", (function(e) {
                            var t = n.props,
                                a = t.handlePlay,
                                o = t.data;
                            "function" == typeof a ? (e.stopPropagation(), e.preventDefault(), a({
                                vid: o.vid,
                                target: n.preview.current
                            })) : window.open(o.url, "_self")
                        })), n.preview = f.a.createRef(), n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.children,
                                a = e.disableLazyImage,
                                o = e.bossClick,
                                r = t.title,
                                i = t.image,
                                s = t.titleLabels,
                                c = t.playCount,
                                l = t.duration,
                                u = o.replace(/[a-zA-z_]*&/, "play&");
                            return C("div", {
                                style: {
                                    position: "relative"
                                },
                                className: "jsx-4024812458"
                            }, C(m.a, {
                                title: r,
                                style: {
                                    marginBottom: "0.06rem"
                                },
                                labels: s
                            }), C("div", {
                                onClick: this.playClickHandle,
                                ref: this.preview,
                                "data-boss": u,
                                className: "jsx-4024812458 ct-preview"
                            }, C(x.a, {
                                image: i,
                                disableLazyImage: a,
                                ratio: "56.232%"
                            }), C("i", {
                                className: "jsx-4024812458 play-icon"
                            }), l && C("div", {
                                className: "jsx-4024812458 info"
                            }, c - 0 > 0 && C("span", {
                                className: "jsx-4024812458 views"
                            }, Object(O.a)(c), "\u2002", C("em", {
                                className: "jsx-4024812458"
                            }, "|"), "\u2002"), Object(_.a)(l))), n, C(d.a, {
                                id: "4024812458"
                            }, [".ct-preview.jsx-4024812458{width:3.45rem;margin-bottom:0.06rem;border-radius:0.04rem;position:relative;overflow:hidden;}", ".play-icon.jsx-4024812458{position:absolute;z-index:0;width:48px;height:48px;left:50%;top:50%;font-size:0px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-image:url(//mat1.gtimg.com/pingjs/ext2020/xw-video/newui/xw_icon_video_play.svg);background-size:contain;border-radius:50%;}", ".info.jsx-4024812458{display:block;position:absolute;right:0.06rem;bottom:0.06rem;font-size:0.09rem;color:rgb(255,255,255);height:0.18rem;line-height:0.18rem;background:rgba(0,0,0,0.3);padding:0px 0.1rem;border-radius:0.09rem;}", ".views.jsx-4024812458{display:inline-block;background-image:url(//mat1.gtimg.com/pingjs/ext2020/xw-video/newui/xw_icon_video_watch.svg);padding-left:0.24rem;background-position:left center;background-repeat:no-repeat;}", ".views.jsx-4024812458 em.jsx-4024812458{color:rgba(255,255,255,0.5);font-style:normal;}"]))
                        }
                    }]), t
                }(p.PureComponent),
                E = n("kOwS"),
                N = n("Zw3B"),
                M = n("0U20"),
                T = n("Ri3a"),
                I = n("Sop2"),
                L = n("gzMX"),
                D = f.a.createElement,
                A = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(s.a)(this, Object(c.a)(t).call(this, e)), Object(k.a)(Object(j.a)(n), "handleStartNagativeFeedback", (function(e) {
                            e.stopPropagation(), e.preventDefault(), n.setState({
                                showFeedbackPanel: !0
                            })
                        })), Object(k.a)(Object(j.a)(n), "handleNegativeFeedback", (function(e) {
                            n.setState({
                                showFeedbackPanel: !1
                            }), e && n.props.handleNegativeFeedback(n.props.id)
                        })), n.state = {
                            showFeedbackPanel: !1
                        }, n.feedbackBtn = f.a.createRef(), n.container = f.a.createRef(), n
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.id,
                                n = e.style,
                                a = e.labels,
                                r = e.tags,
                                i = e.source,
                                s = e.categories,
                                c = e.handleNegativeFeedback,
                                l = this.state.showFeedbackPanel,
                                u = s[0];
                            return D(p.Fragment, null, D("div", {
                                style: n,
                                ref: this.container,
                                className: "jsx-328099781 root-sec"
                            }, a.map((function(e, t) {
                                var n = e.text,
                                    a = e.style;
                                return a = o()({
                                    marginRight: "0.09rem",
                                    verticalAlign: "top",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: "1rem"
                                }, a || {}), D(I.a, {
                                    key: t,
                                    text: n,
                                    style: a
                                })
                            })), c && D("span", {
                                "data-boss": "delete",
                                ref: this.feedbackBtn,
                                role: "button",
                                title: "\u4e0d\u559c\u6b22",
                                onClick: this.handleStartNagativeFeedback,
                                className: "jsx-328099781 icon icon-dislike"
                            }), l && D(L.a, {
                                modalIsOpen: l,
                                id: t,
                                src: i && i.name,
                                author_id: i && i.id,
                                category_cn_name: u && u.name,
                                category_id: u && u.id,
                                tag: r.map((function(e) {
                                    var t = e.id;
                                    return {
                                        tag_name: e.name,
                                        tag_id: t
                                    }
                                })),
                                unlikeCallback: this.handleNegativeFeedback,
                                bossPadding: "&"
                            })), D(d.a, {
                                id: "328099781"
                            }, [".root-sec.jsx-328099781{line-height:0.16rem;}", ".icon.jsx-328099781{display:inline-block;vertical-align:top;font-size:0.12rem;text-indent:-99px;-webkit-tap-highlight-color:rgb(238,238,238);background-repeat:no-repeat;background-position:center center;}", ".icon-dislike.jsx-328099781{float:right;color:rgb(193,193,193);margin-right:0.01rem;width:0.16rem;height:0.16rem;background-image:url('data:image/svg+xml;utf8,".concat('<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.7 8l3.155 3.154a.496.496 0 0 1-.701.7L8 8.702l-3.154 3.154a.496.496 0 0 1-.7-.701L7.298 8 4.145 4.846a.496.496 0 0 1 .701-.7L8 7.298l3.154-3.154a.496.496 0 1 1 .7.701L8.702 8z" fill="%23D8DDE9" fill-rule="nonzero"/></svg>', "');background-size:0.16rem 0.16rem;overflow:hidden;}")]))
                        }
                    }]), t
                }(p.PureComponent),
                q = n("HXQy"),
                P = f.a.createElement,
                F = q.TYPE_CODES.BIG_PICTURE,
                z = q.TYPE_CODES.VIDEO,
                R = q.TYPE_CODES.THREE_PICTURE,
                U = q.TYPE_CODES.ONE_PICTURE,
                Y = {
                    0: null,
                    1: {
                        backgroundColor: "#F69D45"
                    },
                    2: null,
                    3: null,
                    4: {
                        backgroundColor: "#4C7EFF"
                    },
                    5: null,
                    6: {
                        backgroundColor: "#F69D45"
                    },
                    zhiding: {
                        backgroundColor: "#EE5449"
                    },
                    hot: {
                        backgroundColor: "#EE5449"
                    }
                },
                B = function(e) {
                    var t = e.WrappedComponent,
                        n = e.viewType;
                    return function(e) {
                        function a(e) {
                            return Object(r.a)(this, a), Object(s.a)(this, Object(c.a)(a).call(this, e))
                        }
                        return Object(l.a)(a, e), Object(i.a)(a, [{
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    a = e.id,
                                    r = e.index,
                                    i = e.data,
                                    s = e.noOpenUrl,
                                    c = e.hideDividingLine,
                                    l = e.styles,
                                    u = void 0 === l ? {} : l,
                                    f = e.bossClick,
                                    m = e.bossExpo,
                                    h = e.bossExpoOnce,
                                    g = void 0 === h || h,
                                    b = e.bossExpoTemplate,
                                    v = e.bossClickTemplate,
                                    x = e.handleNegativeFeedback,
                                    w = e.superView,
                                    y = i.app_id,
                                    j = i.title,
                                    k = i.url,
                                    O = i.showtype,
                                    _ = i.timestamp,
                                    C = i.comment,
                                    S = void 0 === C ? {} : C,
                                    I = i.marks,
                                    L = void 0 === I ? [] : I,
                                    D = i.source,
                                    q = i.flag,
                                    B = void 0 === q ? {} : q,
                                    W = i.tags,
                                    V = void 0 === W ? [] : W,
                                    H = i.categories,
                                    X = void 0 === H ? [] : H,
                                    K = i.origin_data;
                                n !== F && n !== z || (i.image = i.bimage || i.image);
                                var G = "number" != typeof _ || isNaN(_) ? 1e10 : ((new Date).valueOf() - 1e3 * _) / 36e5,
                                    Q = i.isHot = S.number >= 1e3 && G < 24,
                                    Z = L;
                                D && D.name && Z.push({
                                    text: D.name
                                }), S.number && Z.push({
                                    text: "".concat(S.number, "\u8bc4")
                                }), G < 12 && Z.push({
                                    text: Object(N.a)(_)
                                }), i.labels = Z;
                                var J = B.id,
                                    $ = B.name;
                                if (J && $) {
                                    var ee = Y[J];
                                    i.titleLabels = [{
                                        text: $,
                                        style: ee
                                    }]
                                } else if (Q) {
                                    var te = Y.hot;
                                    i.titleLabels = [{
                                        text: "\u70ed\u70b9",
                                        style: te
                                    }]
                                }
                                var ne = {};
                                n === z && (ne["data-list-vid"] = a);
                                var ae = "0.12rem 0px";
                                return n === F || n === z || n === R ? ae = "0.09rem 0px 0.06rem" : n === U && (ae = "0.12rem 0px 0.12rem"), P(p.Fragment, null, P("div", Object(E.a)({
                                    "data-list-id": a,
                                    "data-boss-expo": m,
                                    "data-boss-once": g,
                                    "data-boss-template": b,
                                    style: u.container
                                }, ne, {
                                    className: "jsx-3990885670 " + (ne && null != ne.className && ne.className || "container ".concat(c ? "" : " showDividingLine"))
                                }), P(T.a, {
                                    superView: w,
                                    articleInfo: {
                                        id: y,
                                        title: j,
                                        showtype: O
                                    },
                                    href: Object(M.a)(k),
                                    hrefLang: "zh",
                                    "data-boss-template": v,
                                    "data-boss": f,
                                    "data-no-openurl": s,
                                    style: o()({}, {
                                        fontSize: "inherit",
                                        color: "inherit",
                                        textDecoration: "none",
                                        display: "block",
                                        padding: ae
                                    }, u.inner)
                                }, P(t, this.props, P(A, Object(E.a)({
                                    id: a,
                                    index: r,
                                    source: D,
                                    categories: X,
                                    labels: Z,
                                    tags: V,
                                    handleNegativeFeedback: x
                                }, {
                                    originData: K
                                }))))), P(d.a, {
                                    id: "3990885670"
                                }, [".container.jsx-3990885670{margin:0px 0.15rem;overflow:hidden;}", ".container.jsx-3990885670:after{clear:both;content:'';display:block;height:0px;width:100%;}", ".showDividingLine.jsx-3990885670:after{height:1px;background:rgba(240,240,240,1);-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}"]))
                            }
                        }]), a
                    }(p.PureComponent)
                };
            n.d(t, "d", (function() {
                return G
            })), n.d(t, "b", (function() {
                return Q
            })), n.d(t, "c", (function() {
                return Z
            })), n.d(t, "a", (function() {
                return J
            })), n.d(t, "e", (function() {
                return $
            }));
            var W = q.TYPE_CODES.TITLE,
                V = q.TYPE_CODES.ONE_PICTURE,
                H = q.TYPE_CODES.BIG_PICTURE,
                X = q.TYPE_CODES.THREE_PICTURE,
                K = q.TYPE_CODES.VIDEO,
                G = B({
                    WrappedComponent: g,
                    viewType: W
                }),
                Q = B({
                    WrappedComponent: b.a,
                    viewType: V
                }),
                Z = B({
                    WrappedComponent: v.b,
                    viewType: X
                }),
                J = B({
                    WrappedComponent: y,
                    viewType: H
                }),
                $ = B({
                    WrappedComponent: S,
                    viewType: K
                })
        },
        "9rZX": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, o = n("qFS3"),
                r = (a = o) && a.__esModule ? a : {
                    default: a
                };
            t.default = r.default, e.exports = t.default
        },
        A72C: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNTYgNC4wOGw0LjM2IDUuODEzYS4xLjEgMCAwIDAgLjE2IDBsNC4zNi01LjgxM0EuMi4yIDAgMCAxIDEyLjYgNGgxYS4yLjIgMCAwIDEgLjE2LjMybC01LjI4IDcuMDRhLjYuNiAwIDAgMS0uOTYgMEwyLjI0IDQuMzJBLjIuMiAwIDAgMSAyLjQgNGgxYS4yLjIgMCAwIDEgLjE2LjA4eiIgZmlsbD0iIzUwNzZGNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"
        },
        CKBo: function(e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjE4OCAzLjc1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAgMTQuNjI1SDIuODEzYS4xODguMTg4IDAgMCAwLS4xODguMTg4djEuNWMwIC4xMDMuMDg0LjE4Ny4xODguMTg3aDE4LjM3NWEuMTg4LjE4OCAwIDAgMCAuMTg3LS4xODh2LTEuNWEuMTg4LjE4OCAwIDAgMC0uMTg4LS4xODd6bTAtNy4zMTNIMi44MTNhLjE4OC4xODggMCAwIDAtLjE4OC4xODh2MS41YzAgLjEwMy4wODQuMTg4LjE4OC4xODhoMTguMzc1YS4xODguMTg4IDAgMCAwIC4xODctLjE4OHYtMS41YS4xODguMTg4IDAgMCAwLS4xODgtLjE4OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="
        },
        CZ8k: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                o = n.n(a),
                r = n("kOwS"),
                i = n("9Jkg"),
                s = n.n(i),
                c = n("6BQ9"),
                l = n.n(c),
                u = n("UXZV"),
                d = n.n(u),
                p = n("p0XB"),
                f = n.n(p),
                m = n("0iUn"),
                h = n("sLSF"),
                g = n("MI3g"),
                b = n("a7VT"),
                v = n("AT/M"),
                x = n("Tit0"),
                w = n("MX0m"),
                y = n.n(w),
                j = n("ob4f"),
                k = n("zrwo"),
                O = n("eVuF"),
                _ = n.n(O),
                C = n("pvup"),
                S = n("p46w"),
                E = n("vDqi"),
                N = n("GQBn"),
                M = n("Cs1F"),
                T = {},
                I = {
                    hasad: !0,
                    qq: ""
                },
                L = [],
                D = !1,
                A = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.loid,
                        n = e.index;
                    return t = t.toString(), n = l()(n, 10), new _.a((function(a, o) {
                        L.push({
                            option: Object(k.a)({}, e, {
                                loid: t,
                                index: n
                            }),
                            resolve: a,
                            reject: o
                        }), q()
                    }))
                };

            function q() {
                if (0 !== L.length) {
                    var e = L[0],
                        t = e.option,
                        n = e.resolve,
                        a = e.reject,
                        o = t.channel,
                        r = t.loid,
                        i = t.index,
                        c = t.moduleId,
                        u = void 0 === c ? "default" : c,
                        p = Object(C.get)(T, [o, u, r, i]);
                    p ? (L.shift(), n(p), "2" === r && (T[o][u][r] = []), q()) : D || function(e) {
                        var t = e.channel,
                            n = e.loid,
                            a = e.moduleId,
                            o = void 0 === a ? "default" : a;
                        return D = !0, new _.a((function(e, a) {
                            var r = Object(C.get)(T, [t, o, n]) || [],
                                i = r[r.length - 1],
                                c = function() {
                                    var e = Object(S.get)("qq_client_id") || "",
                                        t = Object(S.get)("qq_openid") || "",
                                        n = window.localStorage.getItem("ams_openid") || "";
                                    e && t && !n && function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "101487368";
                                        return new _.a((function(n, a) {
                                            e && !U ? (U = !0, Object(E.post)("https://openid.ssp.qq.com/openid", s()({
                                                req_id: Math.ceil(1e6 * Math.random()).toString(),
                                                login_type: 0,
                                                openid: e,
                                                srcappid: t,
                                                dstappid: "101414945"
                                            })).then((function(e) {
                                                U = !1, 200 === e.status && e.data ? n(e.data) : a(e)
                                            })).catch((function(e) {
                                                U = !1, a(e)
                                            }))) : a()
                                        }))
                                    }(t, e).then((function(e) {
                                        e.openid && window.localStorage.setItem("ams_openid", e.openid)
                                    })).catch((function() {}));
                                    return {
                                        qq_openid: t,
                                        ams_openid: n
                                    }
                                }(),
                                u = d()({}, I, c, {
                                    cur: i ? l()(i.seq, 10) + 1 : 0,
                                    refresh_type: i ? 2 : 1,
                                    news_cnt: 10,
                                    channel: t,
                                    module_id: o && "default" !== o ? o : "",
                                    loid: n.toString(),
                                    qq: z(),
                                    wap_source: Object(M.a)(),
                                    callback: function(r) {
                                        r && f()(r) ? (! function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                                                n = arguments.length > 2 ? arguments[2] : void 0;
                                            (arguments.length > 3 ? arguments[3] : void 0).filter(function(e) {
                                                return function(t) {
                                                    return -1 !== (F[e] || []).indexOf(t.sub_type)
                                                }
                                            }(n)).forEach((function(a) {
                                                a.loid.toString() === n && (T[e] || (T[e] = {}), T[e][t] || (T[e][t] = {}), T[e][t][n] || (T[e][t][n] = []), T[e][t][n].push(a))
                                            }))
                                        }(t, o, n, r), e()) : a(r), D = !1
                                    },
                                    error: function() {
                                        a()
                                    }
                                });
                            new _.a((function(e, t) {
                                var n = function() {
                                    return Object(N.a)(Y() ? "ssptest" : "ssp").then(e).catch(t)
                                };
                                /\s(qq|ipadqq)\//i.test(navigator.userAgent) ? Object(N.a)("gdtmod").then(n).catch(t) : n()
                            })).then((function(e) {
                                return e.create(u)
                            })).catch(a)
                        }))
                    }(t).then(q).catch(a)
                }
            }
            var P, F = {
                1: [10, 11, 17],
                2: [11],
                10: [10, 11, 17],
                23: [10]
            };

            function z() {
                if (void 0 !== P) return P;
                if (!(P = Object(S.get)("uin") || Object(S.get)("luin") || Object(S.get)("ptui_loginuin") || "")) {
                    var e = Object(S.get)("pac_uid");
                    e && 0 === e.indexOf("1_") && (P = e.replace("1_", ""))
                }
                return P
            }
            var R, U = !1;

            function Y() {
                if (void 0 === R) {
                    var e = ((window || {}).location || {}).search || "";
                    R = -1 !== e.indexOf("ssptest=1")
                }
                return R
            }
            var B = n("MuZe"),
                W = n.n(B),
                V = [],
                H = [],
                X = !1,
                K = !1,
                G = "//qzs.qq.com/qzone/biz/res/i.js",
                Q = 0,
                Z = {
                    sxbrowser: ["1109476019", "6050265967803059"],
                    sxbrowsers: ["1109476019", "6050265967803059"],
                    kaijiajl: ["1109862418", "8050689365397877"],
                    lenovofuyi: ["1107862635", "6030989412576393"]
                },
                J = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = Q++;
                    return new _.a((function(n, a) {
                        H.push({
                            option: Object(k.a)({}, e, {
                                index: t
                            }),
                            resolve: n,
                            reject: a
                        }), $()
                    }))
                };

            function $() {
                if (0 !== H.length) {
                    var e, t, n = H[0],
                        a = n.option,
                        o = n.resolve,
                        r = n.reject,
                        i = a.index,
                        s = Object(C.get)(V, [i]);
                    s ? (H.shift(), o(s), $()) : K || (e = a, t = e.qudao, K = !0, new _.a((function(e, n) {
                        var a = Z[t][0],
                            o = Z[t][1];
                        X ? window.TencentGDT.NATIVE.loadAd(o) : (window.TencentGDT = window.TencentGDT || [], TencentGDT.push({
                            app_id: a,
                            placement_id: o,
                            type: "native",
                            count: 10,
                            onComplete: function(t) {
                                if (t && t.data && t.data.length > 0) {
                                    var r = t.data.map((function(e) {
                                        return d()({
                                            _xw: {
                                                app_id: a,
                                                placement_id: o
                                            }
                                        }, e)
                                    }));
                                    V = V.concat(r), $(), e()
                                } else n(t);
                                K = !1
                            }
                        }), W()(G), X = !0)
                    }))).then((function() {})).catch(r)
                }
            }
            var ee = n("g+X1"),
                te = o.a.createElement,
                ne = function(e, t) {
                    return function(n) {
                        function a(e) {
                            var t;
                            return Object(m.a)(this, a), (t = Object(g.a)(this, Object(b.a)(a).call(this, e))).state = {
                                data: null,
                                hide: !1,
                                reason: ""
                            }, t.handleInViewChange = t.handleInViewChange.bind(Object(v.a)(t)), t.handleAdClick = t.handleAdClick.bind(Object(v.a)(t)), t.handlePing = t.handlePing.bind(Object(v.a)(t)), t.handleAdDislike = t.handleAdDislike.bind(Object(v.a)(t)), t.adPlatform = null, t
                        }
                        return Object(x.a)(a, n), Object(h.a)(a, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this;
                                if (this.checkAdShouldShow()) {
                                    var n = this.props.qudao || Object(M.a)();
                                    this.adPlatform = "sxbrowser" === n || "sxbrowsers" === n || "kaijiajl" === n || "lenovofuyi" === n ? "gdt" : "ssp";
                                    var a = "gdt" === this.adPlatform ? J : A,
                                        o = this.props,
                                        r = o.channel,
                                        i = o.index,
                                        s = o.moduleId,
                                        c = o.subTypeOnly;
                                    a({
                                        channel: r,
                                        loid: t = void 0 !== t ? t : this.props.loid,
                                        moduleId: s,
                                        index: i,
                                        qudao: n
                                    }).then((function(t) {
                                        f()(c) && -1 === c.indexOf(t.sub_type) ? e.setState({
                                            hide: !0,
                                            reason: "\u4f4d\u7f6esub_type\u8303\u56f4\u9650\u5236",
                                            data: t
                                        }) : (t._title = t.longTitle || t.title || "", t._image = Object(ee.a)(t.resource_url0 || t.img_url), t._images = (t.resource_urlList || []).map((function(e) {
                                            return Object(ee.a)(e.url)
                                        })), t.locDomId = t.locDomId || "gdt_".concat(i, "_").concat(t.advertisement_id || ""), e.setState({
                                            data: t
                                        }, (function() {
                                            e.handlePing()
                                        })))
                                    })).catch((function() {}))
                                } else this.setState({
                                    hide: !0,
                                    reason: "\u8fd0\u884c\u73af\u5883\u9650\u5236"
                                })
                            }
                        }, {
                            key: "handleInViewChange",
                            value: function(e) {
                                var t = this;
                                e && ("gdt" === this.adPlatform && function(e) {
                                    var t = (((window || {}).TencentGDT || {}).NATIVE || {}).doExpose,
                                        n = e.locDomId;
                                    if ("function" == typeof t && n) {
                                        var a = {
                                            placement_id: e._xw.placement_id,
                                            container: e.locDomId,
                                            advertisement_id: e.advertisement_id
                                        };
                                        try {
                                            t(a)
                                        } catch (e) {}
                                    }
                                }(this.state.data), -1 !== navigator.userAgent.indexOf(" MQQBrowser/") && setTimeout((function() {
                                    try {
                                        var e = document.querySelector("#".concat(t.state.data.locDomId, " img"));
                                        e && e.setAttribute("onclick", "function(){};")
                                    } catch (e) {}
                                }), 500))
                            }
                        }, {
                            key: "handleAdClick",
                            value: function(e) {
                                Y() && console.log("\u5e7f\u544a\u70b9\u51fb", this.state.data), window.SSPAd ? window.SSPAd.click(this.state.data) : "gdt" === this.adPlatform && function(e, t) {
                                    var n = (((window || {}).TencentGDT || {}).NATIVE || {}).doClick,
                                        a = t.locDomId;
                                    if ("function" == typeof n && a) {
                                        var o = document.getElementById(a).getBoundingClientRect() || {
                                                x: 0,
                                                y: 0
                                            },
                                            r = e.pageX - o.x - window.screenX,
                                            i = e.pageY - o.y - window.scrollY,
                                            s = {
                                                placement_id: t._xw.placement_id,
                                                container: t.locDomId,
                                                advertisement_id: t.advertisement_id,
                                                traceid: t.traceid,
                                                s: {
                                                    down_x: r,
                                                    down_y: i,
                                                    up_x: r,
                                                    up_y: i
                                                }
                                            };
                                        try {
                                            n(s)
                                        } catch (e) {}
                                    }
                                }(e, this.state.data)
                            }
                        }, {
                            key: "handlePing",
                            value: function() {
                                if (window.SSPAd) {
                                    var e = this.state.data,
                                        t = d()(e.params, {
                                            actid: 1101
                                        });
                                    window.SSPAd.dp3(t), window.SSPAd.view(e, (function() {
                                        return window.SSPAd.ping(e)
                                    }))
                                }
                            }
                        }, {
                            key: "handleAdDislike",
                            value: function(e) {
                                ("boolean" != typeof e.cancelable || e.cancelable) && e.preventDefault(), e.stopPropagation(), this.setState({
                                    hide: !0,
                                    reason: "\u4e0d\u559c\u6b22"
                                }), "function" == typeof this.props.onDislike && this.props.onDislike();
                                try {
                                    window.dispatchEvent(new CustomEvent("refresh_float_video_player_position"))
                                } catch (e) {}
                            }
                        }, {
                            key: "checkAdShouldShow",
                            value: function() {
                                var e = (location || {}).href || "",
                                    t = (navigator || {}).userAgent || "";
                                return -1 !== e.indexOf("pgv_ref=mobileqq") || -1 !== t.indexOf("QQ/") ? -1 === t.indexOf("Android") || -1 === t.indexOf("GM") : -1 === e.indexOf("pgv_ref=sxs") && -1 === e.indexOf("pgv_ref=leshi") && -1 === e.indexOf("pgv_ref=tzrd")
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = this;
                                if (!this.state.data) return null;
                                var n = this.state.data,
                                    a = n.oid,
                                    i = n.locDomId,
                                    c = this.props,
                                    u = c.cmptBefore,
                                    d = void 0 === u ? null : u,
                                    p = c.cmptAfter,
                                    f = void 0 === p ? null : p,
                                    m = this.props.bossExtra,
                                    h = void 0 === m ? "" : m;
                                return l()(a, 10) <= 100 || this.state.hide ? te(o.a.Fragment, null, te("div", {
                                    id: i,
                                    className: "jsx-2686809724 ssp unshown"
                                }, Y() ? te("input", {
                                    type: "text",
                                    defaultValue: "[\u672a\u663e\u793a\u7684\u5e7f\u544a".concat(this.state.reason ? ": " + this.state.reason : "", "] ").concat(s()(this.state.data)),
                                    onFocus: function(e) {
                                        return e.target.select()
                                    },
                                    className: "jsx-2686809724"
                                }) : null), te(y.a, {
                                    id: "2686809724"
                                }, [".unshown.jsx-2686809724{font-size:0.12rem;word-break:break-all;white-space:normal;}", ".unshown.jsx-2686809724 input.jsx-2686809724{width:100%;font-family:monospace;}"])) : te(o.a.Fragment, null, d, te(j.a, {
                                    triggerOnce: !0,
                                    onChange: this.handleInViewChange
                                }, (function(n) {
                                    var a = n.ref;
                                    return te("div", {
                                        ref: a,
                                        className: "jsx-1761839320 ssp"
                                    }, te("a", {
                                        id: i,
                                        onClick: t.handleAdClick,
                                        rel: "nofollow noopener noreferrer",
                                        "data-boss": "ad".concat(h ? "&" + h : ""),
                                        "data-boss-expo": "ad".concat(h ? "&" + h : ""),
                                        className: "jsx-1761839320"
                                    }, te(e, Object(r.a)({}, t.props, {
                                        data: t.state.data,
                                        handleAdDislike: t.handleAdDislike
                                    }))))
                                })), f, Y() && te("input", {
                                    type: "text",
                                    defaultValue: "[\u4e0a\u65b9\u5e7f\u544a\u6570\u636e] ".concat(s()(this.state.data)),
                                    onFocus: function(e) {
                                        return e.target.select()
                                    },
                                    className: "jsx-1761839320 debug"
                                }), te(y.a, {
                                    id: "1761839320"
                                }, [".ssp.jsx-1761839320{margin:0 .15rem;}", '.ssp.jsx-1761839320::after{content:" ";display:block;clear:both;width:100%;height:1px;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);background:#f0f0f0;}', ".ssp.jsx-1761839320 a.jsx-1761839320{display:block;padding:.12rem 0;-webkit-text-decoration:none;text-decoration:none;}", "input.debug.jsx-1761839320{display:block;width:100%;margin:0;font-family:monospace;}"]))
                            }
                        }]), a
                    }(a.Component)
                },
                ae = n("PIAq"),
                oe = n("zCEa"),
                re = o.a.createElement,
                ie = function(e) {
                    return re(o.a.Fragment, null, re("i", {
                        className: "jsx-3852352456"
                    }, e.text || "\u5e7f\u544a"), re(y.a, {
                        id: "3852352456"
                    }, ["i.jsx-3852352456{display:block;position:absolute;top:0.12rem;right:0.12rem;width:0.32rem;height:0.18rem;line-height:0.18rem;color:white;background-color:rgba(0,0,0,.48);font-size:0.12rem;font-style:normal;font-weight:lighter;text-align:center;border-radius:0.02rem;}"]))
                },
                se = o.a.createElement,
                ce = function(e) {
                    var t, n;
                    return 1 === e.actType ? (t = "\u7acb\u5373\u4e0b\u8f7d", n = "dl") : (t = "\u4e86\u89e3\u8be6\u60c5", n = "xq"), se(o.a.Fragment, null, se("em", {
                        style: Object(k.a)({
                            backgroundImage: "url(//mat1.gtimg.com/www/mobi/2017/image/ad-icon-".concat(n, ".svg)")
                        }, e.style),
                        className: "jsx-3822151474 " + (n || "")
                    }, t), se(y.a, {
                        id: "3822151474"
                    }, ["em.jsx-3822151474{display:inline-block;vertical-align:top;background-repeat:no-repeat;background-position:0.09rem center;color:#537BFF;font-size:0.12rem;min-width:0.86rem;max-width:1.5rem;height:0.24rem;line-height:0.24rem;border-radius:0.12rem;font-style:normal;padding-left:0.26rem;box-sizing:border-box;border:0.01rem solid #537BFF;}", "em.dl.jsx-3822151474{background-size:0.16rem auto;}", "em.xq.jsx-3822151474{background-size:0.14rem auto;}"]))
                },
                le = o.a.createElement,
                ue = o.a.createElement,
                de = o.a.createElement,
                pe = function(e) {
                    var t, n, a = e.children,
                        o = e.handleAdDislike,
                        r = e.actType,
                        i = e.adStyle;
                    return 1 === r && (t = "\u7acb\u5373\u4e0b\u8f7d", n = "dl"), de("div", {
                        className: "jsx-1073704448"
                    }, de("span", {
                        className: "jsx-1073704448 blue"
                    }, "\u5e7f\u544a"), de("span", {
                        className: "jsx-1073704448"
                    }, a), de("span", {
                        "data-boss": "delete",
                        role: "button",
                        title: "\u4e0d\u559c\u6b22",
                        onClick: o,
                        className: "jsx-1073704448 icon icon-dislike"
                    }, "\u4e0d\u559c\u6b22"), n && t && de("span", {
                        style: Object(k.a)({
                            backgroundImage: "url(//mat1.gtimg.com/www/mobi/2017/image/ad-icon-".concat(n, ".svg)")
                        }, e.style),
                        className: "jsx-1073704448 " + "icon icon-act ".concat(n, " ").concat("oneimg" === i ? "compact" : "")
                    }, t), de(y.a, {
                        id: "1073704448"
                    }, ["div.jsx-1073704448{line-height:0.16rem;}", "div.jsx-1073704448 span.jsx-1073704448{display:inline-block;vertical-align:top;font-size:0.12rem;font-weight:400;color:rgb(130,140,155);line-height:0.16rem;height:0.16rem;margin-right:0.09rem;}", "div.jsx-1073704448 span.blue.jsx-1073704448{color:#537BFF;}", "div.jsx-1073704448 .icon.jsx-1073704448{display:inline-block;vertical-align:top;-webkit-tap-highlight-color:rgb(238,238,238);background-repeat:no-repeat;background-position:center center;overflow:hidden;}", "div.jsx-1073704448 .icon-dislike.jsx-1073704448{display:block;position:relative;top:-0.04rem;float:right;color:rgb(193,193,193);margin-right:0.01rem;width:0.24rem;height:0.24rem;background-image:url('data:image/svg+xml;utf8,".concat('<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.7 8l3.155 3.154a.496.496 0 0 1-.701.7L8 8.702l-3.154 3.154a.496.496 0 0 1-.7-.701L7.298 8 4.145 4.846a.496.496 0 0 1 .701-.7L8 7.298l3.154-3.154a.496.496 0 1 1 .7.701L8.702 8z" fill="%23D8DDE9" fill-rule="nonzero"/></svg>', "');background-size:0.16rem 0.16rem;overflow:hidden;text-indent:-999px;}"), "div.jsx-1073704448 .icon-act.jsx-1073704448{display:block;position:relative;float:right;font-size:0.12rem;color:#537BFF;background-position:left center;background-size:0.16rem;padding-left:0.16rem;}", "@media screen and (max-width:400px){div.jsx-1073704448 .icon-act.compact.jsx-1073704448{margin-right:0;}}"]))
                },
                fe = o.a.createElement,
                me = function(e) {
                    var t = e.data,
                        n = e.handleAdDislike;
                    return fe(o.a.Fragment, null, fe(ae.a, {
                        title: t._title,
                        style: {
                            marginBottom: "0.06rem"
                        }
                    }), fe(oe.a, {
                        image: t._image,
                        style: {
                            marginBottom: "0.06rem",
                            borderRadius: "0.04rem"
                        },
                        ratio: "56.232%"
                    }), fe(pe, {
                        handleAdDislike: n,
                        actType: t.act_type
                    }, t.navTitle), t.locDomId && fe(y.a, {
                        id: "662604236",
                        dynamic: [t.locDomId]
                    }, ["a#".concat(t.locDomId, "{padding:0.09rem 0 0.06rem;}")]))
                },
                he = o.a.createElement,
                ge = function(e) {
                    var t = e.data,
                        n = e.handleAdDislike;
                    return he(o.a.Fragment, null, he("div", {
                        className: "jsx-2095170379 image"
                    }, he(oe.a, {
                        image: t._image
                    })), he("div", {
                        className: "jsx-2095170379 info"
                    }, he(ae.a, {
                        title: "".concat(t._title),
                        style: {
                            marginBottom: "0.09rem",
                            minHeight: "0.38rem"
                        }
                    }), he(pe, {
                        handleAdDislike: n,
                        actType: t.act_type,
                        adStyle: "oneimg"
                    }, t.navTitle)), he(y.a, {
                        id: "2095170379"
                    }, [".image.jsx-2095170379{height:0.72rem;width:1.11rem;float:right;overflow:hidden;border-radius:0.03rem;margin-left:0.15rem;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}", ".info.jsx-2095170379{position:relative;top:-0.03rem;min-height:0.72rem;}"]))
                },
                be = n("kSD8"),
                ve = o.a.createElement,
                xe = function(e) {
                    var t = e.data,
                        n = e.handleAdDislike;
                    return ve(o.a.Fragment, null, ve(ae.a, {
                        title: t._title,
                        style: {
                            marginBottom: "0.06rem"
                        }
                    }), ve(be.a, {
                        images: t._images
                    }), ve(pe, {
                        handleAdDislike: n,
                        actType: t.act_type
                    }, t.navTitle), t.locDomId && ve(y.a, {
                        id: "2601247680",
                        dynamic: [t.locDomId]
                    }, ["a#".concat(t.locDomId, "{padding:0.09rem 0;}")]))
                };
            n.d(t, "a", (function() {
                return ye
            })), n.d(t, "b", (function() {
                return je
            }));
            var we = o.a.createElement,
                ye = ne((function(e) {
                    var t = e.data.sub_type || 10;
                    return 10 === t ? we(ge, e) : 11 === t ? we(me, e) : 17 === t ? we(xe, e) : void 0
                }), "1"),
                je = (ne((function(e) {
                    var t = e.data;
                    return ue("div", null, ue(oe.a, {
                        image: t._image,
                        ratio: "56.232%"
                    }), ue(ae.a, {
                        title: "".concat(t._title),
                        style: {
                            marginBottom: "0.09rem"
                        }
                    }))
                }), "23"), ne((function(e) {
                    var t = e.data;
                    return le(o.a.Fragment, null, le("div", {
                        className: "jsx-1210247617 image"
                    }, le(oe.a, {
                        image: t._image,
                        style: {
                            marginBottom: "0.09rem",
                            borderRadius: "0.04rem"
                        },
                        ratio: "56.81%"
                    }), le(ie, null)), le("div", {
                        className: "jsx-1210247617 bottom"
                    }, le("div", {
                        className: "jsx-1210247617 title"
                    }, le(ae.a, {
                        title: t._title
                    })), le("div", {
                        className: "jsx-1210247617 icon"
                    }, le(ce, {
                        actType: t.act_type
                    }))), le(y.a, {
                        id: "1210247617"
                    }, [".image.jsx-1210247617{position:relative;}", ".bottom.jsx-1210247617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".bottom.jsx-1210247617 .icon.jsx-1210247617{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;max-height:.24rem;margin-left:.15rem;}"]))
                }), "2"));
            ne(ge, "10")
        },
        CZoQ: function(e, t) {
            e.exports = function(e, t, n) {
                for (var a = n - 1, o = e.length; ++a < o;)
                    if (e[a] === t) return a;
                return -1
            }
        },
        Cg2A: function(e, t, n) {
            e.exports = n("guND")
        },
        CnqA: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = n("q1tI"),
                i = l(r),
                s = l(n("17x9")),
                c = l(n("xEkU"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var d = function(e) {
                function t() {
                    var e, n, a;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var o = arguments.length, r = Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                    return n = a = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), a.events = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"], a.subscribers = [], a.rafHandle = null, a.subscribe = function(e) {
                        a.subscribers = a.subscribers.concat(e)
                    }, a.unsubscribe = function(e) {
                        a.subscribers = a.subscribers.filter((function(t) {
                            return t !== e
                        }))
                    }, a.notifySubscribers = function(e) {
                        if (!a.framePending) {
                            var t = e.currentTarget;
                            a.rafHandle = (0, c.default)((function() {
                                a.framePending = !1;
                                var e = a.node.getBoundingClientRect(),
                                    n = e.top,
                                    o = e.bottom;
                                a.subscribers.forEach((function(e) {
                                    return e({
                                        distanceFromTop: n,
                                        distanceFromBottom: o,
                                        eventSource: t === window ? document.body : a.node
                                    })
                                }))
                            })), a.framePending = !0
                        }
                    }, a.getParent = function() {
                        return a.node
                    }, u(a, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), o(t, [{
                    key: "getChildContext",
                    value: function() {
                        return {
                            subscribe: this.subscribe,
                            unsubscribe: this.unsubscribe,
                            getParent: this.getParent
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.events.forEach((function(t) {
                            return window.addEventListener(t, e.notifySubscribers)
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        this.rafHandle && (c.default.cancel(this.rafHandle), this.rafHandle = null), this.events.forEach((function(t) {
                            return window.removeEventListener(t, e.notifySubscribers)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return i.default.createElement("div", a({}, this.props, {
                            ref: function(t) {
                                return e.node = t
                            },
                            onScroll: this.notifySubscribers,
                            onTouchStart: this.notifySubscribers,
                            onTouchMove: this.notifySubscribers,
                            onTouchEnd: this.notifySubscribers
                        }))
                    }
                }]), t
            }(r.PureComponent);
            d.childContextTypes = {
                subscribe: s.default.func,
                unsubscribe: s.default.func,
                getParent: s.default.func
            }, t.default = d
        },
        D3i9: function(e, t, n) {
            "use strict";
            var a = n("ln6h"),
                o = n.n(a),
                r = n("O40h"),
                i = n("DNZy"),
                s = n("E3Ww"),
                c = n.n(s),
                l = n("70DZ"),
                u = {
                    main: ["nba", "ent", "sports", "picture", "mil", "football_all", "finance", "tech"],
                    back: ["cba", "tech", "auto", "house", "world", "local", "zhongchao", "mobile", "astro", "digi", "stock", "science", "fun", "esport", "star_all", "games", "fashion", "edu", "history", "health", "comic", "pet", "food"]
                },
                d = {
                    show: "\u7efc\u827a",
                    film: "\u7535\u5f71",
                    football_all: "\u8db3\u7403",
                    sports_football: "\u8db3\u7403",
                    star_all: "\u660e\u661f",
                    comic: "\u52a8\u6f2b"
                },
                p = {};
            [].concat(u.fixed).concat(u.main).concat(u.back).forEach((function(e) {
                p[e] = c.a[e] && c.a[e].name ? c.a[e].name : d[e] ? d[e] : e
            }));
            var f = function() {
                    var e = Object(r.a)(o.a.mark((function e() {
                        var t, n, a;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (window && window.localStorage) try {
                                        t = l.a.json.get("index.sort")
                                    } catch (e) {}
                                    return n = t && t.main ? t.main : u.main, a = Object(i.pullAll)(u.main.concat(u.back), n), e.abrupt("return", {
                                        main: n,
                                        back: a
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = Object(r.a)(o.a.mark((function e() {
                        var t, n, a = arguments;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = a.length > 0 && void 0 !== a[0] ? a[0] : [], n = {
                                            main: t
                                        }, window && window.localStorage) try {
                                        l.a.json.set("index.sort", n)
                                    } catch (e) {}
                                    return e.abrupt("return", !0);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            t.a = {
                defaultConfig: u,
                channelNameMap: p,
                getSettings: f,
                saveSettings: m
            }
        },
        "DC/2": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var a = n("UXZV"),
                o = n.n(a),
                r = n("0iUn"),
                i = n("sLSF"),
                s = n("MI3g"),
                c = n("a7VT"),
                l = n("AT/M"),
                u = n("Tit0"),
                d = n("vYYK"),
                p = n("q1tI"),
                f = n.n(p),
                m = n("g+X1"),
                h = f.a.createElement,
                g = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(s.a)(this, Object(c.a)(t).call(this, e)), Object(d.a)(Object(l.a)(n), "imageBaseStyle", {
                            display: "block",
                            width: "auto",
                            height: "auto",
                            maxWidth: "unset",
                            maxHeight: "unset",
                            marginLeft: 0,
                            marginTop: 0,
                            border: "0 none",
                            verticalAlign: "top",
                            visibility: "hidden",
                            transition: "opacity ".concat(n.props.fadeIn || 0, "ms ease-out"),
                            opacity: n.props.fadeIn ? 0 : 1,
                            backfaceVisibility: "hidden"
                        }), Object(d.a)(Object(l.a)(n), "imageOnLoad", (function(e) {
                            var t = n.lastSrc !== n.props.src;
                            if (!n.props.preventRerender || !n.imageLoaded || t) {
                                var a, r = e.target;
                                if (n.supportsObjectFit && !n.props.disableNativeFit || !r.parentNode) a = {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                };
                                else {
                                    var i = r.naturalWidth,
                                        s = r.naturalHeight,
                                        c = i / s,
                                        l = r.parentNode.offsetWidth,
                                        u = r.parentNode.offsetHeight,
                                        d = l / u;
                                    if (Math.abs(c - d) / c <= n.tolerant) a = {
                                        width: "100%",
                                        height: "100%"
                                    };
                                    else if (c > d) a = {
                                        height: "100%",
                                        marginLeft: 0 - (u / s * i - l) / 2
                                    };
                                    else if (c < d) {
                                        var p;
                                        switch (n.props.verticalCutMethod) {
                                            case "top":
                                                p = 0;
                                                break;
                                            case "bottom":
                                                p = 0 - (l / i * s - u);
                                                break;
                                            default:
                                                p = 0 - (l / i * s - u) / 2
                                        }
                                        a = {
                                            width: "100%",
                                            marginTop: p
                                        }
                                    }
                                }
                                n.setState({
                                    imageStyle: o()({}, n.props.style, n.imageBaseStyle, a, {
                                        visibility: "visible",
                                        opacity: 1
                                    })
                                }), "function" == typeof n.props.loaded && n.props.loaded(e), n.imageLoaded = !0, n.lastSrc = n.props.src
                            }
                        })), Object(d.a)(Object(l.a)(n), "imageOnError", (function(e) {
                            "function" == typeof n.props.error && n.props.error(e)
                        })), n.tolerant = .02, n.imageLoaded = !1, n.lastSrc = n.props.src, n.state = {
                            imageStyle: n.imageBaseStyle
                        }, n
                    }
                    return Object(u.a)(t, e), Object(i.a)(t, [{
                        key: "UNSAFE_componentWillMount",
                        value: function() {
                            this.supportsObjectFit = "object-fit" in (new Image).style
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return h("img", {
                                src: Object(m.a)(this.props.src),
                                alt: this.props.alt || "",
                                title: this.props.title || "",
                                style: this.state.imageStyle,
                                onLoad: this.imageOnLoad,
                                onError: this.imageOnError,
                                "aria-hidden": this.props.ariaHidden
                            })
                        }
                    }]), t
                }(p.Component)
        },
        DLve: function(e, t, n) {
            "use strict";
            var a = n("MX0m"),
                o = n.n(a),
                r = n("q1tI"),
                i = n.n(r),
                s = n("Jtl/"),
                c = i.a.createElement;
            t.a = function(e) {
                var t = e.hasBottomBorder,
                    n = e.modular,
                    a = void 0 === n ? "appdiversion" : n,
                    i = e.path,
                    l = void 0 === i ? "qqnews://article_9500" : i;
                return c(r.Fragment, null, c("div", {
                    "data-boss-expo": "app&modular=".concat(a),
                    "data-boss-once": !0,
                    className: "jsx-4120115242 root"
                }, c("img", {
                    src: "//mat1.gtimg.com/www/mobi/2017/image/ui-icon_log.svg",
                    alt: "\u817e\u8bafLOGO",
                    className: "jsx-4120115242"
                }), c("p", {
                    className: "jsx-4120115242"
                }, "\u817e\u8baf\u65b0\u95fbAPP"), c("button", {
                    "data-boss": "app&modular=".concat(a),
                    onClick: function() {
                        return Object(s.a)({
                            config: {
                                openUrl: l
                            }
                        })
                    },
                    className: "jsx-4120115242"
                }, "\u6253\u5f00")), t && c("div", {
                    className: "jsx-4120115242 btm-line"
                }), c(o.a, {
                    id: "4120115242"
                }, [".root.jsx-4120115242{padding:0.1rem 0.15rem;height:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".btm-line.jsx-4120115242{margin:0px 0.15rem;display:block;height:1px;background:#F0F0F0;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}", "img.jsx-4120115242{width:0.3rem;height:0.3rem;}", "p.jsx-4120115242{-webkit-flex:1;-ms-flex:1;flex:1;height:0.3rem;line-height:0.3rem;font-size:0.16rem;color:rgba(34,34,34,1);margin-left:0.09rem;}", "button.jsx-4120115242{width:0.64rem;height:0.28rem;font-size:0.14rem;line-height:0.27rem;background:rgba(255,255,255,1);border-radius:0.15rem;border:1px solid rgba(76,127,255,1);color:rgba(83,123,255,1);margin-top:0.01rem;-webkit-tap-highlight-color:rgba(0,0,0,0);}"]))
            }
        },
        DNZy: function(e, t, n) {
            e.exports = {
                chunk: n("kcif"),
                compact: n("wig9"),
                concat: n("NIJN"),
                difference: n("zqxM"),
                differenceBy: n("oSXT"),
                differenceWith: n("UrOp"),
                drop: n("5yYD"),
                dropRight: n("J9Se"),
                dropRightWhile: n("vlBi"),
                dropWhile: n("4Ig+"),
                fill: n("odGD"),
                findIndex: n("UfWW"),
                findLastIndex: n("JELi"),
                first: n("afOK"),
                flatten: n("TYy9"),
                flattenDeep: n("mRsi"),
                flattenDepth: n("6+Eo"),
                fromPairs: n("O7iK"),
                head: n("pZt1"),
                indexOf: n("uoTU"),
                initial: n("enmc"),
                intersection: n("0XPj"),
                intersectionBy: n("H8cV"),
                intersectionWith: n("nEsn"),
                join: n("3tWz"),
                last: n("RBan"),
                lastIndexOf: n("dSNf"),
                nth: n("18Zd"),
                pull: n("hzCD"),
                pullAll: n("0Q2g"),
                pullAllBy: n("aiSq"),
                pullAllWith: n("Wah+"),
                pullAt: n("JeuH"),
                remove: n("wEy/"),
                reverse: n("USjQ"),
                slice: n("Kssv"),
                sortedIndex: n("sTTA"),
                sortedIndexBy: n("ytg1"),
                sortedIndexOf: n("nz8K"),
                sortedLastIndex: n("8CK4"),
                sortedLastIndexBy: n("gYoz"),
                sortedLastIndexOf: n("HQ4t"),
                sortedUniq: n("JnaE"),
                sortedUniqBy: n("4Zpp"),
                tail: n("ziAQ"),
                take: n("Xp7I"),
                takeRight: n("GtlU"),
                takeRightWhile: n("zTPS"),
                takeWhile: n("4vei"),
                union: n("v8eK"),
                unionBy: n("hxiM"),
                unionWith: n("VD47"),
                uniq: n("7tbW"),
                uniqBy: n("qPyV"),
                uniqWith: n("H+6e"),
                unzip: n("Y0CH"),
                unzipWith: n("lKaW"),
                without: n("Wt1U"),
                xor: n("Qcb2"),
                xorBy: n("kBl3"),
                xorWith: n("YteJ"),
                zip: n("xrec"),
                zipObject: n("VJLA"),
                zipObjectDeep: n("gWQk"),
                zipWith: n("UDfb")
            }
        },
        Dl2F: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return w
            }));
            var a = n("ln6h"),
                o = n.n(a),
                r = n("O40h"),
                i = n("0iUn"),
                s = n("sLSF"),
                c = n("MI3g"),
                l = n("a7VT"),
                u = n("AT/M"),
                d = n("Tit0"),
                p = n("vYYK"),
                f = n("MX0m"),
                m = n.n(f),
                h = n("q1tI"),
                g = n.n(h),
                b = n("Jtl/"),
                v = n("tblk"),
                x = g.a.createElement,
                w = function(e) {
                    function t(e) {
                        var n;
                        return Object(i.a)(this, t), n = Object(c.a)(this, Object(l.a)(t).call(this, e)), Object(p.a)(Object(u.a)(n), "carouselPlaceHolder", (function() {
                            var e = n.state,
                                t = e.list,
                                a = e.carouselIndex,
                                o = ++a >= t.length ? 0 : a;
                            n._mounted && n.setState({
                                carouselIndex: o
                            }), setTimeout(n.carouselPlaceHolder, 5e3)
                        })), Object(p.a)(Object(u.a)(n), "handleInputChange", (function(e) {
                            n.setState({
                                inputContent: e.target.value
                            })
                        })), Object(p.a)(Object(u.a)(n), "openNewsApp", (function(e) {
                            Object(b.a)({
                                config: {
                                    openUrl: e
                                }
                            })
                        })), n.state = {
                            list: [],
                            carouselIndex: -1,
                            inputContent: ""
                        }, n
                    }
                    var n;
                    return Object(d.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(r.a)(o.a.mark((function e() {
                            var t;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._mounted = !0, t = this.props.data) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 5, Object(v.a)("//xw.qq.com/service/api/getData?k=hot_search");
                                    case 5:
                                        t = e.sent;
                                    case 6:
                                        this._mounted && (this.setState({
                                            list: t,
                                            carouselIndex: 0
                                        }), setTimeout(this.carouselPlaceHolder, 5e3));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._mounted = !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                n = t.list,
                                a = void 0 === n ? [] : n,
                                o = t.carouselIndex,
                                r = t.inputContent,
                                i = this.props.hasBottomBorder,
                                s = a.length > 0 && a.length >= o ? a[o].title : "";
                            return 0 != a.length && x(g.a.Fragment, null, x("div", {
                                "data-boss-once": !0,
                                "data-boss-expo": "app&modular=search",
                                className: "jsx-1056607499 root-search"
                            }, x("div", {
                                className: "jsx-1056607499 root-input"
                            }, x("span", {
                                className: "jsx-1056607499 logo"
                            }), x("span", {
                                className: "jsx-1056607499 vr"
                            }), x("input", {
                                type: "text",
                                placeholder: "\u70ed\u641c\uff1a".concat(s),
                                value: r,
                                onChange: this.handleInputChange,
                                className: "jsx-1056607499"
                            })), x("button", {
                                onClick: function() {
                                    return e.openNewsApp("qqnews://article_9527?chlid=news_search&search_keyword=".concat(r || s, "&from=xw"))
                                },
                                "data-boss": "app&modular=search",
                                className: "jsx-1056607499 btn-app"
                            }, "\u6253\u5f00")), i && x("div", {
                                className: "jsx-1056607499 btm-line"
                            }), x(m.a, {
                                id: "1056607499"
                            }, [".root-search.jsx-1056607499{padding:0.09rem 0.15rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".root-input.jsx-1056607499{-webkit-flex:1;-ms-flex:1;flex:1;margin-right:0.09rem;background:rgba(246,248,252,1);border-radius:0.16rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0.06rem 0.09rem;}", ".logo.jsx-1056607499{float:left;height:0.2rem;width:0.2rem;background-image:url(//mat1.gtimg.com/www/mobi/2017/image/ui-icon_log.svg);background-size:0.2rem 0.2rem;}", ".vr.jsx-1056607499{display:block;width:1px;height:0.2rem;background:rgba(216,221,233,1);margin:0px 0.1rem;}", "input.jsx-1056607499{-webkit-flex:1;-ms-flex:1;flex:1;background-color:transparent;outline:none;border:0px;font-size:0.14rem;padding:0px;}", ".btn-app.jsx-1056607499{width:0.64rem;height:0.26rem;border-radius:15px;border:1px solid rgba(76,127,255,1);font-size:0.14rem;color:rgba(83,123,255,1);line-height:0.24rem;background:rgba(255,255,255,1);margin-top:0.03rem;}", ".btm-line.jsx-1056607499{margin:0px 0.15rem;display:block;height:1px;background:#F0F0F0;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}"]))
                        }
                    }]), t
                }(h.PureComponent)
        },
        Dv1A: function(e, t, n) {
            "use strict";
            var a = n("UXZV"),
                o = n.n(a),
                r = n("MX0m"),
                i = n.n(r),
                s = n("q1tI"),
                c = n.n(s).a.createElement;
            t.a = function(e) {
                var t = e.children,
                    n = e.height,
                    a = e.style;
                return c("div", {
                    style: o()({}, {
                        height: n
                    }, a),
                    className: "jsx-671811996 gap"
                }, t, c(i.a, {
                    id: "671811996"
                }, [".gap.jsx-671811996{display:block;position:relative;min-height:7px;background-color:#F7F8FA;font-size:0;}"]))
            }
        },
        DzJC: function(e, t, n) {
            var a = n("sEfC"),
                o = n("GoyQ"),
                r = "Expected a function";
            e.exports = function(e, t, n) {
                var i = !0,
                    s = !0;
                if ("function" != typeof e) throw new TypeError(r);
                return o(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), a(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: s
                })
            }
        },
        ERuW: function(e, t, n) {
            var a = n("JbSc"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", n = a[t], r = o.call(a, t) ? n.length : 0; r--;) {
                    var i = n[r],
                        s = i.func;
                    if (null == s || s == e) return i.name
                }
                return t
            }
        },
        EldB: function(e, t, n) {
            var a = n("dTAl"),
                o = n("GoyQ");
            e.exports = function(e) {
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new e(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var n = a(e.prototype),
                        r = e.apply(n, t);
                    return o(r) ? r : n
                }
            }
        },
        GtlU: function(e, t, n) {
            var a = n("KxBF"),
                o = n("Sxd8");
            e.exports = function(e, t, n) {
                var r = null == e ? 0 : e.length;
                return r ? (t = n || void 0 === t ? 1 : o(t), a(e, (t = r - t) < 0 ? 0 : t, r)) : []
            }
        },
        Gy9X: function(e, t, n) {
            "use strict";
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("Tit0"),
                c = n("q1tI"),
                l = n.n(c),
                u = n("MX0m"),
                d = n.n(u),
                p = n("Sop2"),
                f = l.a.createElement,
                m = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), (n = Object(r.a)(this, Object(i.a)(t).call(this, e))).state = {}, n
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.source;
                            return f(c.Fragment, null, f("div", {
                                className: "jsx-587571403 root"
                            }, f(p.a, {
                                text: e
                            })), f(d.a, {
                                id: "587571403"
                            }, [".root.jsx-587571403{line-height:0;}"]))
                        }
                    }]), t
                }(c.PureComponent),
                h = l.a.createElement,
                g = n("O8ig");
            n.d(t, "a", (function() {
                return v
            }));
            var b, v = (b = g.a, function(e) {
                function t(e) {
                    return Object(a.a)(this, t), Object(r.a)(this, Object(i.a)(t).call(this, e))
                }
                return Object(s.a)(t, e), Object(o.a)(t, [{
                    key: "render",
                    value: function() {
                        return h(c.Fragment, null, h("a", {
                            href: this.props.data.url,
                            className: "suvery-module",
                            "data-boss": this.props.bossClick || "survey_click&modular=survey",
                            "data-boss-expo": this.props.bossExpo || "survey_click&modular=survey"
                        }, h(b, this.props, h(m, {
                            source: this.props.data.source
                        }))), h("style", null, "\n          .suvery-module{\n            position:relative;\n            margin: 0px 0.15rem;\n            padding: 0.12rem 0;\n            font-size: 0.16rem;\n            display: block;\n            text-decoration: none;\n            overflow:hidden;\n          }\n          .suvery-module::after{\n            position:absolute;\n            left:0;\n            bottom:0;\n            clear: both;\n            content: '';\n            width: 100%;\n            display: block;\n            height: 0.01rem;\n            background:rgba(240,240,240,1);\n            transform: scaleY(0.5);\n          }\n        "))
                    }
                }]), t
            }(c.PureComponent))
        },
        "H+6e": function(e, t, n) {
            var a = n("LGYb");
            e.exports = function(e, t) {
                return t = "function" == typeof t ? t : void 0, e && e.length ? a(e, void 0, t) : []
            }
        },
        H8cV: function(e, t, n) {
            var a = n("eUgh"),
                o = n("s+kx"),
                r = n("ut/Y"),
                i = n("EA7m"),
                s = n("XzbM"),
                c = n("RBan"),
                l = i((function(e) {
                    var t = c(e),
                        n = a(e, s);
                    return t === c(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? o(n, r(t, 2)) : []
                }));
            e.exports = l
        },
        HQ4t: function(e, t, n) {
            var a = n("UKhj"),
                o = n("ljhN");
            e.exports = function(e, t) {
                if (null == e ? 0 : e.length) {
                    var n = a(e, t, !0) - 1;
                    if (o(e[n], t)) return n
                }
                return -1
            }
        },
        HXQy: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "TYPE_CODES", (function() {
                return a
            })), n.d(t, "FLAG", (function() {
                return o
            }));
            var a = {
                    TITLE: "0",
                    ONE_PICTURE: "1",
                    BIG_PICTURE: "2",
                    THREE_PICTURE: "3",
                    VIDEO: "4"
                },
                o = {
                    0: null,
                    1: "\u72ec\u5bb6",
                    2: null,
                    3: null,
                    4: "\u4e13\u9898",
                    5: null,
                    6: "\u76f4\u64ad",
                    zhiding: "\u7f6e\u9876"
                }
        },
        HZII: function(e, t, n) {
            var a = n("4O/9");
            e.exports = function(e) {
                return a(2, e)
            }
        },
        HrR8: function(e, t, n) {
            var a = n("EwQA"),
                o = n("sKJ/");
            e.exports = function(e, t) {
                return o(a(t), e)
            }
        },
        J9Se: function(e, t, n) {
            var a = n("KxBF"),
                o = n("Sxd8");
            e.exports = function(e, t, n) {
                var r = null == e ? 0 : e.length;
                return r ? (t = n || void 0 === t ? 1 : o(t), a(e, 0, (t = r - t) < 0 ? 0 : t)) : []
            }
        },
        JELi: function(e, t, n) {
            var a = n("KwMD"),
                o = n("ut/Y"),
                r = n("Sxd8"),
                i = Math.max,
                s = Math.min;
            e.exports = function(e, t, n) {
                var c = null == e ? 0 : e.length;
                if (!c) return -1;
                var l = c - 1;
                return void 0 !== n && (l = r(n), l = n < 0 ? i(c + l, 0) : s(l, c - 1)), a(e, o(t, 3), l, !0)
            }
        },
        JIMn: function(e, t, n) {
            var a = n("EA7m"),
                o = n("6T1N"),
                r = n("V9aw"),
                i = n("6KkN"),
                s = a((function(e, t) {
                    var n = i(t, r(s));
                    return o(e, 64, void 0, t, n)
                }));
            s.placeholder = {}, e.exports = s
        },
        JX7q: function(e, t, n) {
            "use strict";

            function a(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        JbSc: function(e, t) {
            e.exports = {}
        },
        JeuH: function(e, t, n) {
            var a = n("eUgh"),
                o = n("TYtb"),
                r = n("f5xI"),
                i = n("yue5"),
                s = n("xs/l"),
                c = n("wJg7"),
                l = s((function(e, t) {
                    var n = null == e ? 0 : e.length,
                        s = o(e, t);
                    return r(e, a(t, (function(e) {
                        return c(e, n) ? +e : e
                    })).sort(i)), s
                }));
            e.exports = l
        },
        JnaE: function(e, t, n) {
            var a = n("6ZrN");
            e.exports = function(e) {
                return e && e.length ? a(e) : []
            }
        },
        JpaV: function(e, t, n) {
            var a = n("EA7m"),
                o = n("6T1N"),
                r = n("V9aw"),
                i = n("6KkN"),
                s = a((function(e, t, n) {
                    var a = 1;
                    if (n.length) {
                        var c = i(n, r(s));
                        a |= 32
                    }
                    return o(e, a, t, n, c)
                }));
            s.placeholder = {}, e.exports = s
        },
        "Jtl/": function(e, t, n) {
            "use strict";
            var a = n("6BQ9"),
                o = n.n(a),
                r = {
                    openUrl: "qqnews://article_9500",
                    downloadUrl: "http://view.inews.qq.com/newsDownLoad?refer=biznew&src=10757tencentmaster&by=dict",
                    packageName: "com.tencent.news",
                    init: function(e) {
                        e && (e.openUrl && (this.openUrl = e.openUrl), e.downloadUrl && (this.downloadUrl = e.downloadUrl), e.packageName && (this.packageName = e.packageName))
                    },
                    getUA: function() {
                        var e = navigator.userAgent.toLowerCase();
                        return {
                            androidversion: e.substr(e.indexOf("android") + 8, 3),
                            ipad: /ipad/.test(e),
                            iphone: /iphone/.test(e),
                            android: /android/.test(e),
                            qqnews: /qqnews/.test(e),
                            weixin: /micromessenger/.test(e),
                            mqqbrowser: /mqqbrowser/.test(e),
                            qq: /qq/.test(e),
                            sogo: /sogo/.test(e)
                        }
                    },
                    run: function(e) {
                        var t = e.downloadCallback,
                            n = e.openCallback;
                        this.downloadCallback = t, this.openCallback = n;
                        var a = this.getUA();
                        a.iphone || a.android ? (a.weixin ? this.handleWx() : a.mqqbrowser && a.android ? this.handleQQ() : a.qq ? this.handleQQ() : this.defaultopenApp(), setTimeout((function() {}), 4e3)) : window.location.href = this.downloadUrl
                    },
                    handleQQ: function() {
                        var e = this,
                            t = !1,
                            n = e.getUA();
                        if (window.mqq && window.mqq.app && window.mqq.app.isAppInstalled) {
                            var a = e.packageName;
                            n.iphone && (a = e.openUrl), window.mqq.app.isAppInstalled(a, (function(n) {
                                t || (t = !0, n ? e.openApp() : e.downloadApp())
                            })), setTimeout((function() {
                                t || (t = !0, e.defaultopenApp())
                            }), 500)
                        } else e.defaultopenApp()
                    },
                    handleQBrowser: function() {
                        var e = '{"packagename":' + this.packageName + "}",
                            t = !1;
                        window.x5mtt && window.x5mtt.isApkInstalled ? (-1 == (t = window.x5mtt.isApkInstalled(e)) && (t = !1), t ? this.openApp() : this.downloadApp()) : this.defaultopenApp()
                    },
                    handleWx: function() {
                        var e = this;
                        window.WeixinJSBridge ? e.checkInWx() : document.addEventListener("WeixinJSBridgeReady", (function() {
                            e.checkInWx()
                        }))
                    },
                    checkInWx: function(e) {
                        var t = this,
                            n = 0;
                        ! function e() {
                            WeixinJSBridge.invoke("getInstallState", {
                                packageName: t.packageName,
                                packageUrl: t.openUrl
                            }, (function(a) {
                                var o = a.err_msg,
                                    r = o.indexOf("not_allow") > -1;
                                if (r || (r = o.indexOf("access_denied") > -1), r && n < 2) return n++, void setTimeout((function() {
                                    e()
                                }), 500 * n);
                                r && t.defaultopenApp(), o.indexOf("get_install_state:yes") > -1 ? t.openAppInWx() : t.downloadApp()
                            }))
                        }()
                    },
                    defaultopenApp: function() {
                        var e = this,
                            t = e.getUA(),
                            n = (new Date).valueOf();
                        if (t.android) {
                            var a = document.createElement("iframe");
                            a.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;", a.src = e.openUrl, document.body.appendChild(a), n = (new Date).valueOf()
                        }
                        if (t.ipad) {
                            var o = document.createElement("iframe");
                            o.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;", o.src = e.openUrl, document.body.appendChild(o), n = (new Date).valueOf()
                        }
                        if (t.iphone) {
                            var r = document.createElement("a");
                            r.href = e.openUrl, document.body.appendChild(r), r.click(), n = (new Date).valueOf()
                        } else location.href = e.openUrl;
                        setTimeout((function() {
                            4050 > (new Date).valueOf() - n && "hidden" != document.visibilityState ? e.downloadApp() : e.openCallback && e.openCallback()
                        }), 4e3)
                    },
                    openAppInWx: function() {
                        var e = {
                                schemeUrl: this.openUrl
                            },
                            t = navigator.userAgent.toLowerCase().match(/micromessenger\/(\d+)\.(\d+)\.(\d+)/),
                            n = 0;
                        t && t.length >= 4 && (n = 100 * o()(t[1]) + o()(t[2]) + o()(t[3]) / 1e3), n > 605.006 ? WeixinJSBridge.invoke("launchApplication", e, (function(e) {})) : this.openApp(), this.openCallback && this.openCallback()
                    },
                    openApp: function() {
                        location.href = this.openUrl, setTimeout((function() {
                            self.openCallback && self.openCallback()
                        }), 500)
                    },
                    downloadApp: function() {
                        var e = this,
                            t = this.getUA();
                        t.weixin ? window.open(this.downloadUrl, "_blank") : t.iphone ? (location.href = this.downloadUrl, window.open("https://itunes.apple.com/cn/app/id399363156?mt=8", "_blank")) : t.sogo || window.open(this.downloadUrl, "_self"), setTimeout((function() {
                            e.downloadCallback && e.downloadCallback()
                        }), 1e3)
                    }
                };
            t.a = function(e) {
                var t = e.config,
                    n = e.downloadCallback,
                    a = e.openCallback;
                t && r.init(t), r.run({
                    downloadCallback: n,
                    openCallback: a
                })
            }
        },
        JytW: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("Tit0"),
                c = n("MX0m"),
                l = n.n(c),
                u = n("q1tI"),
                d = n.n(u),
                p = n("dV6L"),
                f = n("Cs1F"),
                m = d.a.createElement,
                h = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), (n = Object(r.a)(this, Object(i.a)(t).call(this, e))).state = {
                            top: "0",
                            feedbackUrl: "//support.qq.com/products/14842"
                        }, n
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            if (!this.props.noSticky && window) {
                                var e = window.innerHeight - this.footer.offsetTop - this.footer.offsetHeight;
                                e > 0 && this.setState({
                                    top: e + "px"
                                })
                            }
                            var t = Object(f.a)(),
                                n = p.a.getUserAgentForWebview(),
                                a = p.a.getUserAgent();
                            if ("mobileqq" == t && "mqq" == n) {
                                var o = "//support.qq.com/products/41098";
                                a.android && (o = "//support.qq.com/product/63027"), this.setState({
                                    feedbackUrl: o
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return m("div", {
                                style: {
                                    top: "".concat(this.state.top)
                                },
                                ref: function(t) {
                                    e.footer = t
                                },
                                className: "jsx-287773377 " + "footer ".concat(this.props.hasFixNav ? "hasnav" : "")
                            }, m("div", {
                                className: "jsx-287773377 links"
                            }, this.props.feedback && m("a", {
                                href: this.state.feedbackUrl,
                                "data-boss": "feedback&modular=bottom",
                                className: "jsx-287773377 feedback"
                            }, " \u53cd\u9988"), this.props.tipoff && m("a", {
                                href: "http://report.12377.cn:13225/toreportinputNormal_anis.do",
                                "data-boss": "rcenter&modular=bottom",
                                className: "jsx-287773377"
                            }, "\u4e3e\u62a5\u4e2d\u5fc3"), this.props.pcurl && m("a", {
                                href: "string" == typeof this.props.pcurl ? this.props.pcurl : "//www.qq.com/?pc",
                                "data-boss": "pc&modular=bottom",
                                className: "jsx-287773377 pcs"
                            }, "\u7535\u8111\u7248")), m("div", {
                                className: "jsx-287773377 copyright"
                            }, "Copyright \xa9 1998 - ", (new Date).getFullYear(), " Tencent. All Rights Reserved"), m(l.a, {
                                id: "287773377"
                            }, [".footer.jsx-287773377{background:#F7F8FA;color:#A8ABB0;font-size:12px;padding:23px 0;text-align:center;position:relative;}", ".footer.jsx-287773377 .links.jsx-287773377{margin-bottom:15px;}", ".footer.jsx-287773377 .links.jsx-287773377 a.jsx-287773377{color:#7D8189;-webkit-text-decoration:none;text-decoration:none;display:inline-block;margin-right:10px;}", ".footer.jsx-287773377 .links.jsx-287773377 a.jsx-287773377+a.jsx-287773377{padding-left:10px;border-left:1px solid #E0E0E0;}", ".copyright.jsx-287773377{font-size:12px;}"]))
                        }
                    }]), t
                }(u.Component)
        },
        KF6i: function(e, t, n) {
            var a = n("a5q3"),
                o = n("vN+2"),
                r = a ? function(e) {
                    return a.get(e)
                } : o;
            e.exports = r
        },
        "Kfv+": function(e, t, n) {
            var a = n("Yoag"),
                o = n("6ae/"),
                r = n("RrRF"),
                i = n("Z0cm"),
                s = n("ExA7"),
                c = n("xFI3"),
                l = Object.prototype.hasOwnProperty;

            function u(e) {
                if (s(e) && !i(e) && !(e instanceof a)) {
                    if (e instanceof o) return e;
                    if (l.call(e, "__wrapped__")) return c(e)
                }
                return new o(e)
            }
            u.prototype = r.prototype, u.prototype.constructor = u, e.exports = u
        },
        Kssv: function(e, t, n) {
            var a = n("KxBF"),
                o = n("mv/X"),
                r = n("Sxd8");
            e.exports = function(e, t, n) {
                var i = null == e ? 0 : e.length;
                return i ? (n && "number" != typeof n && o(e, t, n) ? (t = 0, n = i) : (t = null == t ? 0 : r(t), n = void 0 === n ? i : r(n)), a(e, t, n)) : []
            }
        },
        KwMD: function(e, t) {
            e.exports = function(e, t, n, a) {
                for (var o = e.length, r = n + (a ? 1 : -1); a ? r-- : ++r < o;)
                    if (t(e[r], r, e)) return r;
                return -1
            }
        },
        LCKm: function(e, t) {
            e.exports = function(e, t, n) {
                for (var a = n + 1; a--;)
                    if (e[a] === t) return a;
                return a
            }
        },
        LEpJ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("Tit0"),
                c = n("MX0m"),
                l = n.n(c),
                u = n("q1tI"),
                d = n.n(u),
                p = n("9dat"),
                f = n("0U20"),
                m = d.a.createElement,
                h = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), (n = Object(r.a)(this, Object(i.a)(t).call(this, e))).state = {}, n
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.data || {};
                            return !!e.title && m("div", {
                                "data-boss-expo": "&modular=business",
                                "data-boss-once": !0,
                                className: "jsx-2329300166"
                            }, m("div", {
                                style: {
                                    backgroundImage: "url(".concat(e.banner, ")")
                                },
                                className: "jsx-2329300166 banner"
                            }), m("div", {
                                style: {
                                    background: "".concat(e.bgcolor || "#fff")
                                },
                                className: "jsx-2329300166 content"
                            }, m("div", {
                                "data-boss": "article&articleid=".concat(e.articleid, "&modular=business"),
                                className: "jsx-2329300166 innercontent"
                            }, m(p.b, {
                                data: {
                                    title: e.title,
                                    url: Object(f.a)(e.link),
                                    image: e.img,
                                    source: {
                                        name: e.source
                                    }
                                }
                            }), e.moredesc && m("a", {
                                href: e.morelink,
                                "data-boss": "more&articleid=".concat(e.articleid, "&modular=business"),
                                className: "jsx-2329300166 promotionmore"
                            }, e.moredesc, m("span", {
                                style: {
                                    backgroundColor: "".concat(e.bgcolor || "#777")
                                },
                                className: "jsx-2329300166"
                            })))), m(l.a, {
                                id: "2329300166"
                            }, [".banner.jsx-2329300166{padding-top:13.87%;background:center;background-size:cover;}", ".content.jsx-2329300166{padding:0 0.06rem 0.07rem;box-shadow:0 0.01rem 0.05rem 0 rgba(0,0,0,.24);}", ".innercontent.jsx-2329300166{background:#fff;border-radius:0.03rem;}", ".promotionmore.jsx-2329300166{color:#515761;font-size:0.14rem;height:0.38rem;line-height:0.38rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;display:block;}", ".promotionmore.jsx-2329300166 span.jsx-2329300166{width:0.12rem;height:0.12rem;display:inline-block;border-radius:0.02rem;margin-left:0.03rem;vertical-align:middle;background-image:url(//mat1.gtimg.com/www/mobi/image/promotion-more.svg);background-repeat:no-repeat;background-size:0.12rem 0.12rem;position:relative;top:-0.01rem;}"]))
                        }
                    }]), t
                }(u.Component)
        },
        LGYb: function(e, t, n) {
            var a = n("1hJj"),
                o = n("jbM+"),
                r = n("Xt/L"),
                i = n("xYSL"),
                s = n("dQpi"),
                c = n("rEGp"),
                l = 200;
            e.exports = function(e, t, n) {
                var u = -1,
                    d = o,
                    p = e.length,
                    f = !0,
                    m = [],
                    h = m;
                if (n) f = !1, d = r;
                else if (p >= l) {
                    var g = t ? null : s(e);
                    if (g) return c(g);
                    f = !1, d = i, h = new a
                } else h = t ? [] : m;
                e: for (; ++u < p;) {
                    var b = e[u],
                        v = t ? t(b) : b;
                    if (b = n || 0 !== b ? b : 0, f && v == v) {
                        for (var x = h.length; x--;)
                            if (h[x] === v) continue e;
                        t && h.push(v), m.push(b)
                    } else d(h, v, n) || (h !== m && h.push(v), m.push(b))
                }
                return m
            }
        },
        LNSk: function(e, t, n) {
            "use strict";
            var a = n("p0XB"),
                o = n.n(a),
                r = n("0iUn"),
                i = n("sLSF"),
                s = n("MI3g"),
                c = n("a7VT"),
                l = n("AT/M"),
                u = n("Tit0"),
                d = n("vYYK"),
                p = n("q1tI"),
                f = n.n(p),
                m = n("62Vo"),
                h = n("HXQy"),
                g = n("6BQ9"),
                b = n.n(g);
            n.d(t, "a", (function() {
                return w
            }));
            var v = f.a.createElement,
                x = h.TYPE_CODES.TITLE,
                w = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(s.a)(this, Object(c.a)(t).call(this, e)), Object(d.a)(Object(l.a)(n), "dataProcess", (function(e) {
                            return e.type = x, e && e.data && (e.data.marks = [{
                                text: "\u7f6e\u9876",
                                style: {
                                    color: "#EE544A"
                                }
                            }]), e
                        })), Object(d.a)(Object(l.a)(n), "bossProcess", (function() {
                            return "top"
                        })), n.state = {}, n
                    }
                    return Object(u.a)(t, e), Object(i.a)(t, [{
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            return this.props.data !== e.data
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.data,
                                t = e.map((function(e, t) {
                                    var n = function(e, t) {
                                        var n = "stick_last_show_".concat(t);
                                        if (o()(e) && e.length) {
                                            var a;
                                            if (1 === e.length) a = e[0];
                                            else if (sessionStorage && sessionStorage.getItem) {
                                                var r;
                                                try {
                                                    r = sessionStorage.getItem(n)
                                                } catch (e) {}
                                                var i = e.filter((function(e) {
                                                    return e.id != r
                                                }));
                                                a = i[b()(Math.random() * (i.length - 1), 10)]
                                            }
                                            if (a && sessionStorage && sessionStorage.setItem) try {
                                                sessionStorage.setItem(n, a.id)
                                            } catch (e) {}
                                            return a
                                        }
                                        return null
                                    }(e, "index_".concat(t));
                                    return n || null
                                }));
                            return o()(t) && e.length > 0 ? v(m.a, {
                                modular: "top",
                                data: t.filter((function(e) {
                                    return e && e.title && e.url
                                })),
                                dataProcess: this.dataProcess,
                                bossProcess: this.bossProcess,
                                disableSuperView: !0
                            }) : null
                        }
                    }]), t
                }(p.Component)
        },
        LSTS: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                o = n("q1tI"),
                r = s(o),
                i = s(n("17x9"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.scrollListener = n.scrollListener.bind(n), n.eventListenerOptions = n.eventListenerOptions.bind(n), n.mousewheelListener = n.mousewheelListener.bind(n), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.pageLoaded = this.props.pageStart, this.options = this.eventListenerOptions(), this.attachScrollListener()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        if (this.props.isReverse && this.loadMore) {
                            var e = this.getParentElement(this.scrollComponent);
                            e.scrollTop = e.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop, this.loadMore = !1
                        }
                        this.attachScrollListener()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.detachScrollListener(), this.detachMousewheelListener()
                    }
                }, {
                    key: "isPassiveSupported",
                    value: function() {
                        var e = !1,
                            t = {
                                get passive() {
                                    e = !0
                                }
                            };
                        try {
                            document.addEventListener("test", null, t), document.removeEventListener("test", null, t)
                        } catch (e) {}
                        return e
                    }
                }, {
                    key: "eventListenerOptions",
                    value: function() {
                        var e = this.props.useCapture;
                        return this.isPassiveSupported() && (e = {
                            useCapture: this.props.useCapture,
                            passive: !0
                        }), e
                    }
                }, {
                    key: "setDefaultLoader",
                    value: function(e) {
                        this.defaultLoader = e
                    }
                }, {
                    key: "detachMousewheelListener",
                    value: function() {
                        var e = window;
                        !1 === this.props.useWindow && (e = this.scrollComponent.parentNode), e.removeEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture)
                    }
                }, {
                    key: "detachScrollListener",
                    value: function() {
                        var e = window;
                        !1 === this.props.useWindow && (e = this.getParentElement(this.scrollComponent)), e.removeEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture), e.removeEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture)
                    }
                }, {
                    key: "getParentElement",
                    value: function(e) {
                        var t = this.props.getScrollParent && this.props.getScrollParent();
                        return null != t ? t : e && e.parentNode
                    }
                }, {
                    key: "filterProps",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "attachScrollListener",
                    value: function() {
                        var e = this.getParentElement(this.scrollComponent);
                        if (this.props.hasMore && e) {
                            var t = window;
                            !1 === this.props.useWindow && (t = e), t.addEventListener("mousewheel", this.mousewheelListener, this.options ? this.options : this.props.useCapture), t.addEventListener("scroll", this.scrollListener, this.options ? this.options : this.props.useCapture), t.addEventListener("resize", this.scrollListener, this.options ? this.options : this.props.useCapture), this.props.initialLoad && this.scrollListener()
                        }
                    }
                }, {
                    key: "mousewheelListener",
                    value: function(e) {
                        1 !== e.deltaY || this.isPassiveSupported() || e.preventDefault()
                    }
                }, {
                    key: "scrollListener",
                    value: function() {
                        var e = this.scrollComponent,
                            t = window,
                            n = this.getParentElement(e),
                            a = void 0;
                        if (this.props.useWindow) {
                            var o = document.documentElement || document.body.parentNode || document.body,
                                r = void 0 !== t.pageYOffset ? t.pageYOffset : o.scrollTop;
                            a = this.props.isReverse ? r : this.calculateOffset(e, r)
                        } else a = this.props.isReverse ? n.scrollTop : e.scrollHeight - n.scrollTop - n.clientHeight;
                        a < Number(this.props.threshold) && e && null !== e.offsetParent && (this.detachScrollListener(), this.beforeScrollHeight = n.scrollHeight, this.beforeScrollTop = n.scrollTop, "function" == typeof this.props.loadMore && (this.props.loadMore(this.pageLoaded += 1), this.loadMore = !0))
                    }
                }, {
                    key: "calculateOffset",
                    value: function(e, t) {
                        return e ? this.calculateTopPosition(e) + (e.offsetHeight - t - window.innerHeight) : 0
                    }
                }, {
                    key: "calculateTopPosition",
                    value: function(e) {
                        return e ? e.offsetTop + this.calculateTopPosition(e.offsetParent) : 0
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.filterProps(this.props),
                            n = t.children,
                            a = t.element,
                            o = t.hasMore,
                            i = (t.initialLoad, t.isReverse),
                            s = t.loader,
                            c = (t.loadMore, t.pageStart, t.ref),
                            l = (t.threshold, t.useCapture, t.useWindow, t.getScrollParent, function(e, t) {
                                var n = {};
                                for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
                                return n
                            }(t, ["children", "element", "hasMore", "initialLoad", "isReverse", "loader", "loadMore", "pageStart", "ref", "threshold", "useCapture", "useWindow", "getScrollParent"]));
                        l.ref = function(t) {
                            e.scrollComponent = t, c && c(t)
                        };
                        var u = [n];
                        return o && (s ? i ? u.unshift(s) : u.push(s) : this.defaultLoader && (i ? u.unshift(this.defaultLoader) : u.push(this.defaultLoader))), r.default.createElement(a, l, u)
                    }
                }]), t
            }(o.Component);
            c.propTypes = {
                children: i.default.node.isRequired,
                element: i.default.node,
                hasMore: i.default.bool,
                initialLoad: i.default.bool,
                isReverse: i.default.bool,
                loader: i.default.node,
                loadMore: i.default.func.isRequired,
                pageStart: i.default.number,
                ref: i.default.func,
                getScrollParent: i.default.func,
                threshold: i.default.number,
                useCapture: i.default.bool,
                useWindow: i.default.bool
            }, c.defaultProps = {
                element: "div",
                hasMore: !1,
                initialLoad: !0,
                pageStart: 0,
                ref: null,
                threshold: 250,
                useWindow: !0,
                isReverse: !1,
                useCapture: !1,
                loader: null,
                getScrollParent: null
            }, t.default = c, e.exports = t.default
        },
        LXhs: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                o = n("q1tI"),
                r = c(o),
                i = c(n("i8i4")),
                s = c(n("17x9"));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var u = function(e) {
                function t() {
                    var e, n, a;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var o = arguments.length, r = Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                    return n = a = l(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), a.state = {
                        isSticky: !1,
                        wasSticky: !1,
                        style: {}
                    }, a.handleContainerEvent = function(e) {
                        var t = e.distanceFromTop,
                            n = e.distanceFromBottom,
                            o = e.eventSource,
                            r = a.context.getParent(),
                            i = !1;
                        a.props.relative && (i = o !== r, t = -(o.scrollTop + o.offsetTop) + a.placeholder.offsetTop);
                        var s = a.placeholder.getBoundingClientRect(),
                            c = a.content.getBoundingClientRect().height,
                            l = n - a.props.bottomOffset - c,
                            u = !!a.state.isSticky,
                            d = i ? u : t <= -a.props.topOffset && n > -a.props.bottomOffset;
                        n = (a.props.relative ? r.scrollHeight - r.scrollTop : n) - c;
                        var p = d ? {
                            position: "fixed",
                            top: l > 0 ? a.props.relative ? r.offsetTop - r.offsetParent.scrollTop : 0 : l,
                            left: s.left,
                            width: s.width
                        } : {};
                        a.props.disableHardwareAcceleration || (p.transform = "translateZ(0)"), a.setState({
                            isSticky: d,
                            wasSticky: u,
                            distanceFromTop: t,
                            distanceFromBottom: n,
                            calculatedHeight: c,
                            style: p
                        })
                    }, l(a, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), a(t, [{
                    key: "componentWillMount",
                    value: function() {
                        if (!this.context.subscribe) throw new TypeError("Expected Sticky to be mounted within StickyContainer");
                        this.context.subscribe(this.handleContainerEvent)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.context.unsubscribe(this.handleContainerEvent)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.placeholder.style.paddingBottom = this.props.disableCompensation ? 0 : (this.state.isSticky ? this.state.calculatedHeight : 0) + "px"
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = r.default.cloneElement(this.props.children({
                                isSticky: this.state.isSticky,
                                wasSticky: this.state.wasSticky,
                                distanceFromTop: this.state.distanceFromTop,
                                distanceFromBottom: this.state.distanceFromBottom,
                                calculatedHeight: this.state.calculatedHeight,
                                style: this.state.style
                            }), {
                                ref: function(t) {
                                    e.content = i.default.findDOMNode(t)
                                }
                            });
                        return r.default.createElement("div", null, r.default.createElement("div", {
                            ref: function(t) {
                                return e.placeholder = t
                            }
                        }), t)
                    }
                }]), t
            }(o.Component);
            u.propTypes = {
                topOffset: s.default.number,
                bottomOffset: s.default.number,
                relative: s.default.bool,
                children: s.default.func.isRequired
            }, u.defaultProps = {
                relative: !1,
                topOffset: 0,
                bottomOffset: 0,
                disableCompensation: !1,
                disableHardwareAcceleration: !1
            }, u.contextTypes = {
                subscribe: s.default.func,
                unsubscribe: s.default.func,
                getParent: s.default.func
            }, t.default = u
        },
        LqpT: function(e, t, n) {
            var a = n("1hJj"),
                o = n("jbM+"),
                r = n("Xt/L"),
                i = n("eUgh"),
                s = n("sEf8"),
                c = n("xYSL"),
                l = 200;
            e.exports = function(e, t, n, u) {
                var d = -1,
                    p = o,
                    f = !0,
                    m = e.length,
                    h = [],
                    g = t.length;
                if (!m) return h;
                n && (t = i(t, s(n))), u ? (p = r, f = !1) : t.length >= l && (p = c, f = !1, t = new a(t));
                e: for (; ++d < m;) {
                    var b = e[d],
                        v = null == n ? b : n(b);
                    if (b = u || 0 !== b ? b : 0, f && v == v) {
                        for (var x = g; x--;)
                            if (t[x] === v) continue e;
                        h.push(b)
                    } else p(t, v, u) || h.push(b)
                }
                return h
            }
        },
        MMiu: function(e, t) {
            var n = Math.max;
            e.exports = function(e, t, a, o) {
                for (var r = -1, i = e.length, s = -1, c = a.length, l = -1, u = t.length, d = n(i - c, 0), p = Array(d + u), f = !o; ++r < d;) p[r] = e[r];
                for (var m = r; ++l < u;) p[m + l] = t[l];
                for (; ++s < c;)(f || r < i) && (p[m + a[s]] = e[r++]);
                return p
            }
        },
        Mdvf: function(e, t, n) {
            var a = n("heNW"),
                o = n("eUgh"),
                r = n("XGnz"),
                i = n("ut/Y"),
                s = n("EA7m"),
                c = n("sEf8"),
                l = n("gFQe"),
                u = n("Z0cm"),
                d = Math.min,
                p = l((function(e, t) {
                    var n = (t = 1 == t.length && u(t[0]) ? o(t[0], c(i)) : o(r(t, 1), c(i))).length;
                    return s((function(o) {
                        for (var r = -1, i = d(o.length, n); ++r < i;) o[r] = t[r].call(this, o[r]);
                        return a(e, this, o)
                    }))
                }));
            e.exports = p
        },
        N4mw: function(e, t, n) {
            var a = n("Yoag"),
                o = n("KF6i"),
                r = n("ERuW"),
                i = n("Kfv+");
            e.exports = function(e) {
                var t = r(e),
                    n = i[t];
                if ("function" != typeof n || !(t in a.prototype)) return !1;
                if (e === n) return !0;
                var s = o(n);
                return !!s && e === s[0]
            }
        },
        NIJN: function(e, t, n) {
            var a = n("CH3K"),
                o = n("XGnz"),
                r = n("Q1l4"),
                i = n("Z0cm");
            e.exports = function() {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), n = arguments[0], s = e; s--;) t[s - 1] = arguments[s];
                return a(i(n) ? r(n) : [n], o(t, 1))
            }
        },
        NpjF: function(e, t, n) {
            "use strict";
            var a = n("kOwS"),
                o = n("MX0m"),
                r = n.n(o),
                i = n("q1tI"),
                s = n.n(i),
                c = n("p0XB"),
                l = n.n(c),
                u = n("ln6h"),
                d = n.n(u),
                p = n("O40h"),
                f = n("0iUn"),
                m = n("sLSF"),
                h = n("MI3g"),
                g = n("a7VT"),
                b = n("Tit0"),
                v = n("Ri3a"),
                x = s.a.createElement,
                w = function(e) {
                    var t = e.data,
                        n = e.modular;
                    return x("ul", {
                        className: "jsx-764471012 nav"
                    }, t.map((function(e, t) {
                        return x("li", {
                            key: t,
                            "data-boss": "ejrk_".concat(t, "&modular=").concat(n),
                            className: "jsx-764471012"
                        }, x(v.a, {
                            href: e.url
                        }, e.name))
                    })), x(r.a, {
                        id: "764471012"
                    }, [".nav.jsx-764471012 li.jsx-764471012{float:left;margin-right:0.1rem;text-align:center;height:0.2rem;font-size:0.16rem;color:rgba(99,104,113,1);line-height:0.2rem;}", ".nav.jsx-764471012 li.jsx-764471012:last-child{margin-right:0rem;}"]))
                },
                y = n("xkCI"),
                j = s.a.createElement,
                k = function(e) {
                    function t(e) {
                        var n;
                        return Object(f.a)(this, t), (n = Object(h.a)(this, Object(g.a)(t).call(this, e))).state = {
                            skin: {}
                        }, n
                    }
                    var n;
                    return Object(b.a)(t, e), Object(m.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(p.a)(d.a.mark((function e() {
                            var t, n, a, o;
                            return d.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (void 0 !== (t = this.props.ignoreSkin) && t) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, Object(y.a)();
                                    case 5:
                                        n = e.sent, a = n.hasSkin, o = n.bgcolor, a && this.setState({
                                            skin: {
                                                bgcolor: o
                                            }
                                        }), e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(2), console.log(e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 11]
                            ])
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.modular,
                                n = e.text,
                                a = e.nav,
                                o = e.url,
                                i = this.state.skin.bgcolor;
                            return j("div", {
                                className: r.a.dynamic([
                                    ["161558243", [i || "rgba(76,126,255,1)"]]
                                ]) + " ct-title"
                            }, j(v.a, {
                                href: o || null,
                                "data-boss": "title&modular=".concat(t)
                            }, j("span", {
                                className: r.a.dynamic([
                                    ["161558243", [i || "rgba(76,126,255,1)"]]
                                ])
                            }, n)), l()(a) && j("div", {
                                className: r.a.dynamic([
                                    ["161558243", [i || "rgba(76,126,255,1)"]]
                                ]) + " ct-nav"
                            }, j(w, {
                                data: a,
                                modular: t
                            })), j(r.a, {
                                id: "161558243",
                                dynamic: [i || "rgba(76,126,255,1)"]
                            }, ['@font-face{font-family:"fzltzch";src:url("//mat1.gtimg.com/qqcdn/test/static/font/fzltzch.eot");src:url("//mat1.gtimg.com/qqcdn/test/static/font/fzltzch.eot?#iefix") format("embedded-opentype"), url("//mat1.gtimg.com/qqcdn/test/static/font/fzltzch.woff") format("woff"), url("//mat1.gtimg.com/qqcdn/test/static/font/fzltzch.ttf") format("truetype");}', ".ct-title.__jsx-style-dynamic-selector{height:0.2rem;margin-top:0.24rem;margin-bottom:0.09rem;overflow:hidden;}", 'span.__jsx-style-dynamic-selector{height:0.2rem;line-height:0.22rem;font-size:0.2rem;color:black;float:left;font-family:"fzltzch";color:#373C46;}', ".ct-title.__jsx-style-dynamic-selector:before{float:left;content:'';width:0.12rem;height:0.2rem;margin-right:0.12rem;background:".concat(i || "rgba(76,126,255,1)", ";border-radius:0rem 0.02rem 0.02rem 0rem;}"), ".ct-nav.__jsx-style-dynamic-selector{float:right;margin-right:0.15rem;}"]))
                        }
                    }]), t
                }(i.PureComponent),
                O = s.a.createElement,
                _ = function(e) {
                    function t(e) {
                        var n;
                        return Object(f.a)(this, t), (n = Object(h.a)(this, Object(g.a)(t).call(this, e))).root = s.a.createRef(), n
                    }
                    return Object(b.a)(t, e), Object(m.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.text,
                                a = e.url,
                                o = e.boss,
                                i = e.onClick,
                                s = e.arrowDir,
                                c = e.style,
                                l = void 0 === c ? {} : c,
                                u = e.modular;
                            return O("section", {
                                style: l.root,
                                "data-boss-expo": "".concat(o, "&modular=").concat(u),
                                "data-boss-once": !0,
                                ref: this.root,
                                className: "jsx-598588573 ct-tips"
                            }, O("a", {
                                href: a || null,
                                "data-boss": "".concat(o, "&modular=").concat(u),
                                onClick: i,
                                style: l.text,
                                className: "jsx-598588573 btn"
                            }, t, s && O("img", {
                                style: l.arrow,
                                src: n("A72C"),
                                alt: "",
                                className: "jsx-598588573 " + "icon ".concat(s)
                            })), O(r.a, {
                                id: "598588573"
                            }, [".ct-tips.jsx-598588573{height:0.46rem;text-align:center;}", ".btn.jsx-598588573{font-size:0.15rem;font-weight:500;display:block;height:0.46rem;line-height:0.46rem;}", ".icon.jsx-598588573{height:0.16rem;width:0.16rem;vertical-align:top;margin-top:0.16rem;}", ".icon.right.jsx-598588573{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}", ".ct-tips.jsx-598588573 a.jsx-598588573{color:#5076F5;-webkit-text-decoration:none;text-decoration:none;}"]))
                        }
                    }]), t
                }(i.Component),
                C = s.a.createElement;
            t.a = function(e) {
                var t = e.name,
                    n = e.title,
                    o = e.nav,
                    i = e.children,
                    s = e.more,
                    c = e.style,
                    l = e.ignoreSkin;
                return C("section", {
                    style: c,
                    className: "jsx-2768539492 ct-module"
                }, n && C(k, Object(a.a)({}, n, {
                    nav: o,
                    ignoreSkin: l,
                    modular: t
                })), C("div", {
                    style: {
                        overflow: "hidden"
                    },
                    className: "jsx-2768539492"
                }, i), s && C(_, Object(a.a)({}, s, {
                    modular: t
                })), C(r.a, {
                    id: "2768539492"
                }, [".ct-module.jsx-2768539492{overflow:hidden;}"]))
            }
        },
        O7iK: function(e, t) {
            e.exports = function(e) {
                for (var t = -1, n = null == e ? 0 : e.length, a = {}; ++t < n;) {
                    var o = e[t];
                    a[o[0]] = o[1]
                }
                return a
            }
        },
        O8ig: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("Tit0"),
                c = n("MX0m"),
                l = n.n(c),
                u = n("q1tI"),
                d = n.n(u),
                p = n("PIAq"),
                f = n("zCEa"),
                m = d.a.createElement,
                h = function(e) {
                    function t(e) {
                        return Object(a.a)(this, t), Object(r.a)(this, Object(i.a)(t).call(this, e))
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.disableLazyImage,
                                a = e.children,
                                o = t.title,
                                r = t.image,
                                i = t.titleLabels;
                            return m(u.Fragment, null, m("div", {
                                className: "jsx-3552575022 image"
                            }, m(f.a, {
                                image: r,
                                disableLazyImage: n
                            })), m("div", {
                                className: "jsx-3552575022 info"
                            }, m("div", {
                                className: "jsx-3552575022 ct-title"
                            }, m(p.a, {
                                title: o,
                                style: {
                                    minHeight: "0.38rem"
                                },
                                labels: i
                            })), a), m(l.a, {
                                id: "3552575022"
                            }, [".ct-title.jsx-3552575022{margin-bottom:0.16rem;}", ".image.jsx-3552575022{width:32.174%;float:right;overflow:hidden;border-radius:0.03rem;margin-left:4.348%;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}", ".info.jsx-3552575022{position:relative;top:-0.03rem;min-height:0.72rem;}", "@media (max-width:380px){.ct-title.jsx-3552575022{margin-bottom:0.12rem;}}"]))
                        }
                    }]), t
                }(u.PureComponent)
        },
        PIAq: function(e, t, n) {
            "use strict";
            var a = n("p0XB"),
                o = n.n(a),
                r = n("MX0m"),
                i = n.n(r),
                s = n("q1tI"),
                c = n.n(s).a.createElement;
            t.a = function(e) {
                var t = e.style,
                    n = e.title,
                    a = e.labels;
                return c(s.Fragment, null, c("p", {
                    style: t || {},
                    className: "jsx-1613253250 title"
                }, o()(a) && a.length ? a.map((function(e, t) {
                    var n = e.text,
                        a = e.style;
                    return c("span", {
                        key: t,
                        style: a || {},
                        className: "jsx-1613253250 label"
                    }, n)
                })) : "", n), c(i.a, {
                    id: "1613253250"
                }, [".title.jsx-1613253250{font-size:0.17rem;line-height:0.24rem;font-weight:400;color:rgba(34,34,34,1);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;}", ".label.jsx-1613253250{display:inline-block;vertical-align:top;margin-right:0.055rem;background-color:rgb(73,139,248);color:#fff;font-size:0.12rem;margin-top:0.025rem;height:0.17rem;line-height:0.18rem;border-radius:0.02rem;padding:0px 0.04rem;color:#fff;}", "@media (max-width:380px){.title.jsx-1613253250{font-size:0.18rem;line-height:0.26rem;}.label.jsx-1613253250{margin-top:0.035rem;height:0.18rem;line-height:0.18rem;}}", ".font-xl .title.jsx-1613253250{font-size:0.21rem;line-height:0.28rem;}", ".font-xl .label.jsx-1613253250{margin-top:0.035rem;height:0.21rem;line-height:0.21rem;}", "@media (max-width:380px){.font-xl .title.jsx-1613253250{font-size:0.22rem;line-height:0.3rem;}.font-xl .label.jsx-1613253250{margin-top:0.03rem;height:0.22rem;line-height:0.22rem;}}", ".font-l .title.jsx-1613253250{font-size:0.19rem;line-height:0.26rem;}", ".font-l .label.jsx-1613253250{margin-top:0.035rem;height:0.19rem;line-height:0.19rem;}", "@media (max-width:380px){.font-l .title.jsx-1613253250{font-size:0.2rem;line-height:0.28rem;}.font-l .label.jsx-1613253250{margin-top:0.03rem;height:0.2rem;line-height:0.2rem;}}"]))
            }
        },
        PczM: function(e, t, n) {
            var a = n("0T/a");
            a(a.S, "Date", {
                now: function() {
                    return (new Date).getTime()
                }
            })
        },
        Pv5E: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("AT/M"),
                c = n("Tit0"),
                l = n("vYYK"),
                u = n("MX0m"),
                d = n.n(u),
                p = n("q1tI"),
                f = n.n(p),
                m = n("dV6L"),
                h = n("Cs1F"),
                g = f.a.createElement,
                b = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(l.a)(Object(s.a)(n), "refreshStorageKey", "refresh_btn_ts"), Object(l.a)(Object(s.a)(n), "moduleSettingTipsKey", "hasShowModuleSettingTips"), Object(l.a)(Object(s.a)(n), "lastScroll", 0), Object(l.a)(Object(s.a)(n), "getScrollTop", (function() {
                            return document.body.scrollTop || document.documentElement.scrollTop
                        })), Object(l.a)(Object(s.a)(n), "getDocumentHeight", (function() {
                            return window.innerHeight || document.documentElement.clientHeight
                        })), Object(l.a)(Object(s.a)(n), "hiddenElevator", (function() {
                            clearInterval(n.timer), n.lastScroll = n.getScrollTop(), n.timer = setInterval((function() {
                                var e = n.getScrollTop(),
                                    t = Math.abs(n.lastScroll - e);
                                n.lastScroll = e, t < 10 && (clearInterval(n.timer), n._mounted && n.setState({
                                    show: !0,
                                    showGoTop: n.getDocumentHeight() < n.getScrollTop()
                                }))
                            }), 300)
                        })), Object(l.a)(Object(s.a)(n), "handleRefresh", (function() {
                            "function" == typeof n.props.refreshFn ? n.props.refreshFn((function() {})) : window && (window.sessionStorage && window.sessionStorage.setItem(n.refreshStorageKey, (new Date).getTime().toString()), window.scrollTo(0, 0), window.location.reload())
                        })), Object(l.a)(Object(s.a)(n), "handleGoTop", (function(e) {
                            window && (window.scrollTo(0, 0), "function" == typeof e && e())
                        })), n.state = {
                            show: !0,
                            showGoTop: !1,
                            showSettingTips: !1,
                            feedbackUrl: "//support.qq.com/products/14842"
                        }, n.timer = null, n._mounted = !1, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this._mounted = !0, window && window.sessionStorage && "function" == typeof this.props.onAfterRefreshReload) {
                                var t = Number(window.sessionStorage.getItem(this.refreshStorageKey));
                                if (t)(new Date).getTime() - t < 2e3 && this.props.onAfterRefreshReload(t), window.sessionStorage.removeItem(this.refreshStorageKey)
                            }
                            if (window && window.localStorage) try {
                                this.setState({
                                    showSettingTips: "1" !== window.localStorage.getItem(this.moduleSettingTipsKey)
                                }), window.localStorage.setItem(this.moduleSettingTipsKey, "1"), setTimeout((function() {
                                    e.setState({
                                        showSettingTips: !1
                                    })
                                }), 3e3)
                            } catch (e) {
                                console.log(e)
                            }
                            var n = Object(h.a)(),
                                a = m.a.getUserAgentForWebview(),
                                o = m.a.getUserAgent();
                            if ("mobileqq" == n && "mqq" == a) {
                                var r = "//support.qq.com/products/41098";
                                o.android && (r = "//support.qq.com/product/63027"), this.setState({
                                    feedbackUrl: r
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._mounted = !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.settingsTips,
                                t = void 0 === e ? {
                                    text: "\u70b9\u51fb\u8fd9\u91cc\u53ef\u4ee5\u8c03\u6574\u6a21\u5757\u6392\u5e8f",
                                    image: "//mat1.gtimg.com/pingjs/ext2020/test2017/settingTips.svg"
                                } : e,
                                n = this.props.feedbackUrl || this.state.feedbackUrl;
                            return g("div", {
                                style: {
                                    display: this.state.show ? "block" : "none"
                                },
                                onTouchStart: function(e) {
                                    return e.stopPropagation()
                                },
                                "data-boss-expo": "elevator&modular=elevator",
                                "data-boss-once": !0,
                                className: "jsx-2747606084 elevator"
                            }, this.props.hasGoHome && g("a", {
                                "aria-label": "\u56de\u5230\u9996\u9875",
                                href: "/",
                                "data-boss": "homepage&modular=elevator",
                                className: "jsx-2747606084 item gohome"
                            }), this.props.settings && g("a", {
                                href: "string" == typeof this.props.settings ? this.props.settings : null,
                                "data-boss": "setting&modular=elevator",
                                "aria-label": "\u8bbe\u7f6e",
                                onClick: "function" == typeof this.props.settings ? this.props.settings : null,
                                "data-no-openurl": "true",
                                className: "jsx-2747606084 item settings"
                            }, this.state.showSettingTips && g("div", {
                                style: {
                                    backgroundImage: "url(".concat(t.image)
                                },
                                className: "jsx-2747606084 tips"
                            }, t.text)), this.props.hasRefresh && g("a", {
                                "data-boss": "refresh&modular=elevator",
                                "aria-label": "\u5237\u65b0",
                                onClick: this.handleRefresh,
                                className: "jsx-2747606084 item refresh"
                            }), this.props.hasFeedback && g("a", {
                                href: n,
                                "data-boss": "feedback&modular=elevator",
                                "aria-label": "\u53cd\u9988",
                                "data-no-openurl": "true",
                                className: "jsx-2747606084 item feedback"
                            }, "\u53cd\u9988"), this.props.hasGoTop && g("a", {
                                "data-boss": "top&modular=elevator",
                                onClick: this.handleGoTop,
                                style: {
                                    display: this.state.showGoTop ? "block" : "none"
                                },
                                className: "jsx-2747606084 item go-top"
                            }, "\u56de\u5230\u9876\u90e8"), g(d.a, {
                                id: "2747606084"
                            }, [".elevator.jsx-2747606084{position:fixed;bottom:20%;right:0.12rem;z-index:7;font-size:0;}", "@supports (padding-bottom:constant(safe-area-inset-bottom)){.elevator.jsx-2747606084{--safe-area-inset-bottom:constant(safe-area-inset-bottom);bottom:calc(20% + var(--safe-area-inset-bottom));}}", "@supports (padding-bottom:env(safe-area-inset-bottom)){.elevator.jsx-2747606084{--safe-area-inset-bottom:env(safe-area-inset-bottom);bottom:calc(20% + var(--safe-area-inset-bottom));}}", ".item.jsx-2747606084{display:block;width:0.35rem;height:0.35rem;background-color:#D6F2FF;background-color:rgba(214,242,255,0.95);border-radius:0.03rem;font-size:0;box-shadow:0 0.01rem 0.04rem 0 rgba(28,32,42,0.36);}", ".item.jsx-2747606084+.item.jsx-2747606084{margin-top:0.2rem;}", ".item.jsx-2747606084::before{content:'';display:inline-block;width:0.35rem;height:0.35rem;background-image:url(//mat1.gtimg.com/www/mobi/2017/image/elevator_icons_v4.svg);background-repeat:no-repeat;background-size:auto 0.2rem;}", ".item.refresh.jsx-2747606084::before{background-position:0.08rem center;}", ".item.go-top.jsx-2747606084::before{background-position:-0.22rem center;}", ".item.feedback.jsx-2747606084::before{background-position:-0.53rem center;}", ".item.settings.jsx-2747606084{background-color:rgba(73,139,248,0.95);position:relative;}", ".item.settings.jsx-2747606084::before{background-position:-0.83rem center;}", ".item.go-top.jsx-2747606084{display:none;}", ".settings.jsx-2747606084 .tips.jsx-2747606084{position:absolute;background-repeat:no-repeat;background-position:center;background-size:100% auto;width:1.82rem;height:0.34rem;right:0.35rem;top:0px;}", ".item.gohome.jsx-2747606084{background:#537BFF;}", ".item.gohome.jsx-2747606084::before{background:url(http://mat1.gtimg.com/pingjs/ext2020/xw-article/newui/gohome.png) center no-repeat;background-size:24px;}"]))
                        }
                    }]), t
                }(p.Component)
        },
        QEso: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                },
                o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                i = n("q1tI"),
                s = h(i),
                c = h(n("17x9")),
                l = m(n("VKEO")),
                u = h(n("S1to")),
                d = m(n("Ye7m")),
                p = m(n("fbhf")),
                f = h(n("2zs7"));

            function m(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = {
                    overlay: "ReactModal__Overlay",
                    content: "ReactModal__Content"
                },
                b = 9,
                v = 27,
                x = 0,
                w = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.setOverlayRef = function(e) {
                            n.overlay = e, n.props.overlayRef && n.props.overlayRef(e)
                        }, n.setContentRef = function(e) {
                            n.content = e, n.props.contentRef && n.props.contentRef(e)
                        }, n.afterClose = function() {
                            var e = n.props,
                                t = e.appElement,
                                a = e.ariaHideApp,
                                o = e.htmlOpenClassName,
                                r = e.bodyOpenClassName;
                            r && p.remove(document.body, r), o && p.remove(document.getElementsByTagName("html")[0], o), a && x > 0 && 0 === (x -= 1) && d.show(t), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (l.returnFocus(), l.teardownScopedFocus()) : l.popWithoutFocus()), n.props.onAfterClose && n.props.onAfterClose()
                        }, n.open = function() {
                            n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({
                                beforeClose: !1
                            })) : (n.props.shouldFocusAfterRender && (l.setupScopedFocus(n.node), l.markForFocusLater()), n.setState({
                                isOpen: !0
                            }, (function() {
                                n.setState({
                                    afterOpen: !0
                                }), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen()
                            })))
                        }, n.close = function() {
                            n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout()
                        }, n.focusContent = function() {
                            return n.content && !n.contentHasFocus() && n.content.focus()
                        }, n.closeWithTimeout = function() {
                            var e = Date.now() + n.props.closeTimeoutMS;
                            n.setState({
                                beforeClose: !0,
                                closesAt: e
                            }, (function() {
                                n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now())
                            }))
                        }, n.closeWithoutTimeout = function() {
                            n.setState({
                                beforeClose: !1,
                                isOpen: !1,
                                afterOpen: !1,
                                closesAt: null
                            }, n.afterClose)
                        }, n.handleKeyDown = function(e) {
                            e.keyCode === b && (0, u.default)(n.content, e), n.props.shouldCloseOnEsc && e.keyCode === v && (e.stopPropagation(), n.requestClose(e))
                        }, n.handleOverlayOnClick = function(e) {
                            null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), n.shouldClose = null
                        }, n.handleContentOnMouseUp = function() {
                            n.shouldClose = !1
                        }, n.handleOverlayOnMouseDown = function(e) {
                            n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault()
                        }, n.handleContentOnClick = function() {
                            n.shouldClose = !1
                        }, n.handleContentOnMouseDown = function() {
                            n.shouldClose = !1
                        }, n.requestClose = function(e) {
                            return n.ownerHandlesClose() && n.props.onRequestClose(e)
                        }, n.ownerHandlesClose = function() {
                            return n.props.onRequestClose
                        }, n.shouldBeClosed = function() {
                            return !n.state.isOpen && !n.state.beforeClose
                        }, n.contentHasFocus = function() {
                            return document.activeElement === n.content || n.content.contains(document.activeElement)
                        }, n.buildClassName = function(e, t) {
                            var a = "object" === (void 0 === t ? "undefined" : o(t)) ? t : {
                                    base: g[e],
                                    afterOpen: g[e] + "--after-open",
                                    beforeClose: g[e] + "--before-close"
                                },
                                r = a.base;
                            return n.state.afterOpen && (r = r + " " + a.afterOpen), n.state.beforeClose && (r = r + " " + a.beforeClose), "string" == typeof t && t ? r + " " + t : r
                        }, n.attributesFromObject = function(e, t) {
                            return Object.keys(t).reduce((function(n, a) {
                                return n[e + "-" + a] = t[a], n
                            }), {})
                        }, n.state = {
                            afterOpen: !1,
                            beforeClose: !1
                        }, n.shouldClose = null, n.moveFromContentToOverlay = null, n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), r(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.isOpen && this.open()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer)
                        }
                    }, {
                        key: "beforeOpen",
                        value: function() {
                            var e = this.props,
                                t = e.appElement,
                                n = e.ariaHideApp,
                                a = e.htmlOpenClassName,
                                o = e.bodyOpenClassName;
                            o && p.add(document.body, o), a && p.add(document.getElementsByTagName("html")[0], a), n && (x += 1, d.hide(t))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.id,
                                n = e.className,
                                o = e.overlayClassName,
                                r = e.defaultStyles,
                                i = n ? {} : r.content,
                                c = o ? {} : r.overlay;
                            return this.shouldBeClosed() ? null : s.default.createElement("div", {
                                ref: this.setOverlayRef,
                                className: this.buildClassName("overlay", o),
                                style: a({}, c, this.props.style.overlay),
                                onClick: this.handleOverlayOnClick,
                                onMouseDown: this.handleOverlayOnMouseDown
                            }, s.default.createElement("div", a({
                                id: t,
                                ref: this.setContentRef,
                                style: a({}, i, this.props.style.content),
                                className: this.buildClassName("content", n),
                                tabIndex: "-1",
                                onKeyDown: this.handleKeyDown,
                                onMouseDown: this.handleContentOnMouseDown,
                                onMouseUp: this.handleContentOnMouseUp,
                                onClick: this.handleContentOnClick,
                                role: this.props.role,
                                "aria-label": this.props.contentLabel
                            }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
                                "data-testid": this.props.testId
                            }), this.props.children))
                        }
                    }]), t
                }(i.Component);
            w.defaultProps = {
                style: {
                    overlay: {},
                    content: {}
                },
                defaultStyles: {}
            }, w.propTypes = {
                isOpen: c.default.bool.isRequired,
                defaultStyles: c.default.shape({
                    content: c.default.object,
                    overlay: c.default.object
                }),
                style: c.default.shape({
                    content: c.default.object,
                    overlay: c.default.object
                }),
                className: c.default.oneOfType([c.default.string, c.default.object]),
                overlayClassName: c.default.oneOfType([c.default.string, c.default.object]),
                bodyOpenClassName: c.default.string,
                htmlOpenClassName: c.default.string,
                ariaHideApp: c.default.bool,
                appElement: c.default.instanceOf(f.default),
                onAfterOpen: c.default.func,
                onAfterClose: c.default.func,
                onRequestClose: c.default.func,
                closeTimeoutMS: c.default.number,
                shouldFocusAfterRender: c.default.bool,
                shouldCloseOnOverlayClick: c.default.bool,
                shouldReturnFocusAfterClose: c.default.bool,
                role: c.default.string,
                contentLabel: c.default.string,
                aria: c.default.object,
                data: c.default.object,
                children: c.default.node,
                shouldCloseOnEsc: c.default.bool,
                overlayRef: c.default.func,
                contentRef: c.default.func,
                id: c.default.string,
                testId: c.default.string
            }, t.default = w, e.exports = t.default
        },
        QIyF: function(e, t, n) {
            var a = n("Kz5y");
            e.exports = function() {
                return a.Date.now()
            }
        },
        QLaP: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, a, o, r, i, s) {
                if (!e) {
                    var c;
                    if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var l = [n, a, o, r, i, s],
                            u = 0;
                        (c = new Error(t.replace(/%s/g, (function() {
                            return l[u++]
                        })))).name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1, c
                }
            }
        },
        QV2i: function(e, t) {
            e.exports = [{
                key: "news",
                unsortable: !0
            }, {
                key: "tuijian",
                unsortable: !0
            }, {
                key: "sports"
            }, {
                key: "ent"
            }, {
                key: "finance"
            }, {
                key: "mil"
            }, {
                key: "local"
            }, {
                key: "guoqing"
            }, {
                key: "video"
            }, {
                key: "nba"
            }, {
                key: "cba"
            }, {
                key: "games"
            }, {
                key: "auto"
            }, {
                key: "house"
            }, {
                key: "world"
            }, {
                key: "picture"
            }, {
                key: "football"
            }, {
                key: "zhongchao"
            }, {
                key: "tech"
            }, {
                key: "astro"
            }].slice(0, 20)
        },
        Qcb2: function(e, t, n) {
            var a = n("LXxW"),
                o = n("EA7m"),
                r = n("7cXV"),
                i = n("3L66"),
                s = o((function(e) {
                    return r(a(e, i))
                }));
            e.exports = s
        },
        "R/W3": function(e, t, n) {
            var a = n("KwMD"),
                o = n("2ajD"),
                r = n("CZoQ");
            e.exports = function(e, t, n) {
                return t == t ? r(e, t, n) : a(e, o, n)
            }
        },
        RNUE: function(e, t, n) {
            e.exports = {
                after: n("cq4s"),
                ary: n("v8vJ"),
                before: n("4O/9"),
                bind: n("JpaV"),
                bindKey: n("unST"),
                curry: n("3EZw"),
                curryRight: n("SDVc"),
                debounce: n("sEfC"),
                defer: n("gLAU"),
                delay: n("6vz9"),
                flip: n("9PER"),
                memoize: n("44Ds"),
                negate: n("oKwy"),
                once: n("HZII"),
                overArgs: n("Mdvf"),
                partial: n("sKJ/"),
                partialRight: n("JIMn"),
                rearg: n("be4H"),
                rest: n("3zbN"),
                spread: n("cUzr"),
                throttle: n("DzJC"),
                unary: n("mzC7"),
                wrap: n("HrR8")
            }
        },
        RNiq: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, o = n("ln6h"),
                r = n.n(o),
                i = n("O40h"),
                s = n("0iUn"),
                c = n("sLSF"),
                l = n("MI3g"),
                u = n("a7VT"),
                d = n("AT/M"),
                p = n("Tit0"),
                f = n("vYYK"),
                m = n("q1tI"),
                h = n.n(m),
                g = n("Y3KF"),
                b = n("UOJH"),
                v = n("07Xt"),
                x = n("iNUw"),
                w = n("p0XB"),
                y = n.n(w),
                j = n("Cg2A"),
                k = n.n(j),
                O = n("MX0m"),
                _ = n.n(O),
                C = n("vDqi"),
                S = n.n(C),
                E = n("ob4f"),
                N = n("hnLT"),
                M = n("tblk"),
                T = n("xkCI"),
                I = n("kOwS"),
                L = n("L8Ui"),
                D = n("oWp1"),
                A = n("Xi4S"),
                q = h.a.createElement,
                P = function(e) {
                    return function(t) {
                        function n(e) {
                            var t;
                            return Object(s.a)(this, n), (t = Object(l.a)(this, Object(u.a)(n).call(this, e))).state = {
                                navList: [],
                                localInfo: null
                            }, t
                        }
                        return Object(p.a)(n, t), Object(c.a)(n, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this;
                                Object(D.a)((function(t) {
                                    return e.setState({
                                        localInfo: t
                                    })
                                }));
                                var t = A.a.getSettings().main;
                                this.setState({
                                    navList: t
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = this.state,
                                    n = t.navList,
                                    a = t.localInfo,
                                    o = n.map((function(e) {
                                        var t = null;
                                        return (t = "local" === e ? a || {
                                            name: "\u672c\u5730",
                                            link: "/m/s/loc",
                                            boss: "local"
                                        } : Object(L.a)(e)).channelKey = e, t
                                    }));
                                return q(e, Object(I.a)({
                                    data: o
                                }, this.props))
                            }
                        }]), n
                    }(m.PureComponent)
                },
                F = h.a.createElement,
                z = P(function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).state = {
                            skin: {}
                        }, n
                    }
                    var n;
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(i.a)(r.a.mark((function e() {
                            var t, n, a, o;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(T.a)();
                                    case 3:
                                        t = e.sent, n = t.hasSkin, a = t.navcolor, o = t.navfontcolor, n && this.setState({
                                            skin: {
                                                bg: a,
                                                color: o
                                            }
                                        }), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 10]
                            ])
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.data,
                                t = this.state.skin,
                                n = t.bg,
                                a = t.color,
                                o = e.filter((function(e) {
                                    var t = e.channelKey;
                                    return "tuijian" !== t && "video" !== t
                                })).slice(0, 17);
                            return o.push({
                                boss: "more",
                                channelKey: "sort",
                                link: "/m/s/sort",
                                name: "\u66f4\u591a"
                            }), F("section", {
                                style: {
                                    background: n || ""
                                },
                                "data-boss-expo": "map&modular=map",
                                "data-boss-once": !0,
                                className: "jsx-3207699850 nav"
                            }, F("ul", {
                                className: "jsx-3207699850"
                            }, o.map((function(e, t) {
                                var n = e.name,
                                    o = e.link,
                                    r = e.boss;
                                return F("li", {
                                    key: t,
                                    style: {
                                        color: a || ""
                                    },
                                    className: "jsx-3207699850"
                                }, F("a", {
                                    "data-boss": "map&modular=map&map=".concat(r),
                                    href: o,
                                    className: "jsx-3207699850"
                                }, n))
                            }))), F(_.a, {
                                id: "3207699850"
                            }, [".nav.jsx-3207699850{height:0.95rem;width:3.45rem;background:rgba(255,255,255,1);box-shadow:0px 1px 6px 0px rgba(0,69,189,0.1);border-radius:0.06rem;padding:0.12rem 0px 0px 0.045rem;box-sizing:border-box;margin:0px auto 0.03rem;}", ".nav.jsx-3207699850 li.jsx-3207699850{font-size:0.15rem;width:0.56rem;height:0.17rem;color:rgba(81,87,97,1);line-height:0.17rem;float:left;text-align:center;margin-bottom:0.1rem;text-align:center;overflow:hidden;}", "@media (max-width:380px){.nav.jsx-3207699850 li.jsx-3207699850{font-size:0.16rem;}}", ".nav.jsx-3207699850 li.reddot.jsx-3207699850{color:red;}", ".nav.jsx-3207699850 li.jsx-3207699850:nth-child(6n){margin-right:0rem;}", "a.jsx-3207699850{font-size:inherit;color:inherit;-webkit-text-decoration:none;text-decoration:none;}"]))
                        }
                    }]), t
                }(m.PureComponent)),
                R = n("nGgP"),
                U = h.a.createElement,
                Y = P(function(e) {
                    function t(e) {
                        return Object(s.a)(this, t), Object(l.a)(this, Object(u.a)(t).call(this, e))
                    }
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.data;
                            return U("section", {
                                "data-boss-expo": "bottom&modular=bottom",
                                "data-boss-once": !0,
                                className: "jsx-1593748777 nav"
                            }, U("ul", {
                                className: "jsx-1593748777"
                            }, e.filter((function(e) {
                                var t = e.channelKey;
                                return "tuijian" !== t && "video" !== t
                            })).slice(0, 18).map((function(e, t) {
                                var n = e.name,
                                    a = e.link,
                                    o = e.boss,
                                    r = e.channelKey,
                                    i = Object(R.a)(r, (e || {}).introDate);
                                return U("li", {
                                    key: t,
                                    className: "jsx-1593748777 " + ((i ? "reddot" : "") || "")
                                }, U("a", {
                                    "data-boss": "map&modular=bottom&map=".concat(o),
                                    href: a,
                                    className: "jsx-1593748777"
                                }, n))
                            }))), U(_.a, {
                                id: "1593748777"
                            }, [".nav.jsx-1593748777{padding:0.14rem 0px 0.14rem 0.07rem;height:1.04rem;}", ".nav.jsx-1593748777 li.jsx-1593748777{width:0.56rem;overflow:hidden;text-align:center;height:0.2rem;font-size:0.15rem;font-weight:400;color:rgba(81,87,97,1);line-height:0.16rem;margin-right:0.05rem;margin-bottom:0.1rem;float:left;}", ".nav.jsx-1593748777 li.jsx-1593748777:nth-child(6n){margin-right:0rem;}", "a.jsx-1593748777{font-size:inherit;color:inherit;-webkit-text-decoration:none;text-decoration:none;}"]))
                        }
                    }]), t
                }(m.PureComponent)),
                B = n("Dv1A"),
                W = n("JytW"),
                V = n("S7RP"),
                H = n("NpjF"),
                X = n("Jtl/"),
                K = n("Dl2F"),
                G = h.a.createElement,
                Q = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), n = Object(l.a)(this, Object(u.a)(t).call(this, e)), Object(f.a)(Object(d.a)(n), "openNewsApp", (function(e) {
                            Object(X.a)({
                                config: {
                                    openUrl: e
                                }
                            })
                        })), n.state = {
                            list: []
                        }, n
                    }
                    var n;
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(i.a)(r.a.mark((function e() {
                            var t;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(M.a)("//xw.qq.com/service/api/getData?k=hot_search");
                                    case 2:
                                        t = e.sent, this.setState({
                                            list: t
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.list,
                                n = void 0 === t ? [] : t;
                            return 0 != n.length && G(H.a, {
                                name: "search",
                                more: {
                                    text: "\u6253\u5f00 \u817e\u8baf\u65b0\u95fbAPP \u770b\u66f4\u591a\u70ed\u641c",
                                    boss: "more",
                                    onClick: function() {
                                        return e.openNewsApp("qqnews://article_9528?act=daily_hot&from=xw")
                                    },
                                    arrowDir: "right"
                                }
                            }, G(K.a, {
                                data: n
                            }), G("div", {
                                className: "jsx-3990290119 ct-list"
                            }, n.slice(0, 6).map((function(t, n) {
                                var a = "search&s_order=".concat(n, "&modular=search");
                                return G("div", {
                                    key: n,
                                    "data-boss-once": !0,
                                    "data-boss-expo": a,
                                    className: "jsx-3990290119 item"
                                }, G("a", {
                                    "data-boss": a,
                                    onClick: function() {
                                        return e.openNewsApp("qqnews://article_9527?chlid=news_search&search_keyword=".concat(t.title, "&from=xw"))
                                    },
                                    className: "jsx-3990290119"
                                }, G("span", {
                                    className: "jsx-3990290119 " + ((n > 2 ? "index" : "index red") || "")
                                }, n + 1), G("span", {
                                    className: "jsx-3990290119 title"
                                }, t.title)))
                            }))), G("span", {
                                className: "jsx-3990290119 hr"
                            }), G(_.a, {
                                id: "3990290119"
                            }, [".ct-list.jsx-3990290119{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0rem 0.15rem;}", ".ct-list.jsx-3990290119::before{content:'';display:block;background:rgba(240,240,240,1);height:1px;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);width:100%;margin-bottom:0.13rem;}", ".hr.jsx-3990290119{display:block;background:rgba(240,240,240,1);height:1px;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}", ".item.jsx-3990290119{max-width:50%;min-width:50%;height:0.21rem;line-height:0.21rem;margin-bottom:0.13rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}", ".index.jsx-3990290119{font-size:0.16rem;font-weight:500;line-height:0.22rem;color:rgba(130,140,155,1);margin-right:0.04rem;}", ".index.red.jsx-3990290119{color:rgba(238,84,74,1);}", ".title.jsx-3990290119{font-size:0.15rem;color:rgba(34,34,34,1);line-height:0.21rem;}"]))
                        }
                    }]), t
                }(m.PureComponent),
                Z = n("DLve"),
                J = n("zRKg"),
                $ = h.a.createElement,
                ee = function(e) {
                    var t = e.openApp;
                    return $(h.a.Fragment, null, $(Z.a, {
                        modular: "topic",
                        path: "qqnews://article_9500?tab=news_recommend_main&channel=news_recommend_hot_chat&from=xw"
                    }), $(J.a, {
                        openApp: t
                    }))
                },
                te = n("p46w"),
                ne = h.a.createElement,
                ae = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).state = {
                            showHotSearch: !1,
                            showTopicGuide: !1
                        }, n
                    }
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = 1 === oe(),
                                t = !e;
                            this.setState({
                                showHotSearch: e,
                                showTopicGuide: t
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.showHotSearch,
                                n = e.showTopicGuide;
                            return ne(h.a.Fragment, null, t && ne(Q, null), n && ne(ee, {
                                openApp: !0
                            }))
                        }
                    }]), t
                }(m.PureComponent),
                oe = function() {
                    return void 0 === a && (a = function(e) {
                        var t = e.base,
                            n = void 0 === t ? 2 : t,
                            a = e.offset,
                            o = void 0 === a ? 0 : a,
                            r = Object(te.get)("uin") || Object(te.get)("luin") || Object(te.get)("o_cookie") || Object(te.get)("pac_uid") || Object(te.get)("skey") || Object(te.get)("lskey") || "z";
                        if ("string" == typeof r) {
                            var i = r.toLowerCase().slice(-1);
                            return ("0123456789abcdefghijklmnopqrstuvwxyz".indexOf(i) + o) % n == 0
                        }
                    }({
                        base: 2,
                        offset: 1
                    }) ? 1 : 0), a
                },
                re = n("LNSk"),
                ie = n("0j6O"),
                se = n("hLC8"),
                ce = n("UXZV"),
                le = n.n(ce),
                ue = n("eVuF"),
                de = n.n(ue),
                pe = n("doui"),
                fe = n("fTgM"),
                me = n("D3i9"),
                he = n("SKe7"),
                ge = n("tQFP"),
                be = h.a.createElement,
                ve = me.a.getSettings,
                xe = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).state = {
                            channelNews: {},
                            channels: [],
                            channelInfo: {}
                        }, n
                    }
                    var n;
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(i.a)(r.a.mark((function e() {
                            var t, n, a, o, i, s, c, l, u, d, p, f, m, h;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, de.a.all([Object(he.a)("5bd02543"), ve(), S.a.get("/service/api/getData?k=index:data:all")]);
                                    case 2:
                                        if (t = e.sent, n = Object(pe.a)(t, 3), a = n[0], o = n[1], i = n[2], s = a.channels, c = {}, s.forEach((function(e) {
                                                c[e.key] = e
                                            })), l = o.main, this.setState({
                                                channels: l,
                                                channelInfo: c,
                                                channelNews: i.data.all
                                            }), !(l.indexOf("local") >= 0)) {
                                            e.next = 28;
                                            break
                                        }
                                        return e.prev = 13, e.next = 16, Object(fe.a)({
                                            fetchOptions: {
                                                offset: 0,
                                                count: 6
                                            }
                                        });
                                    case 16:
                                        u = e.sent, d = Object(pe.a)(u, 2), p = d[0], f = d[1], m = f.py, h = f.short, c.local = {
                                            key: "local",
                                            name: "\u672c\u5730",
                                            url: "/a/area/".concat(m),
                                            morekey: h,
                                            links: [{
                                                name: "\u5929\u6c14",
                                                url: "https://xw.tianqi.qq.com/"
                                            }]
                                        }, this.setState({
                                            channelInfo: c,
                                            channelNews: le()({}, this.state.channelNews, {
                                                local: p
                                            })
                                        }), e.next = 28;
                                        break;
                                    case 25:
                                        e.prev = 25, e.t0 = e.catch(13), console.log(e.t0);
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [13, 25]
                            ])
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.channels,
                                n = e.channelInfo,
                                a = e.channelNews,
                                o = this.props.adChannel;
                            return t.map((function(e) {
                                var t = n[e],
                                    r = a[e];
                                if (t && y()(r) && r.length > 0) return be(ge.a, {
                                    key: e,
                                    data: t,
                                    news: r,
                                    adChannel: o
                                })
                            }))
                        }
                    }]), t
                }(m.Component),
                we = h.a.createElement,
                ye = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), n = Object(l.a)(this, Object(u.a)(t).call(this, e)), Object(f.a)(Object(d.a)(n), "handleRefresh", Object(i.a)(r.a.mark((function e() {
                            var t;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(M.a)("//pacaio.match.qq.com/xw/getAllHotEvent");
                                    case 2:
                                        return t = e.sent, n.setState({
                                            model: "simplify",
                                            hotNews: t.data.top
                                        }), e.next = 6, n.tuijian.current.handleRefresh();
                                    case 6:
                                        window.scrollTo(0, 0);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), n.state = {
                            focusList: [],
                            requiredList: [],
                            newsList: [],
                            loading: !0,
                            isstick: 0,
                            model: "init",
                            hotNews: []
                        }, n.tuijian = h.a.createRef(), n
                    }
                    var n;
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(i.a)(r.a.mark((function e() {
                            var t, n, a, o, i;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, !(window._xw_server_timestamp && k()() / 1e3 - window._xw_server_timestamp < 300 && window.rcdTopStaticData && window.rcdTopStaticData.focus)) {
                                            e.next = 5;
                                            break
                                        }
                                        t = window.rcdTopStaticData, e.next = 11;
                                        break;
                                    case 5:
                                        return console.log("cache out date"), e.next = 8, S.a.get("/service/api/getData?k=yaowen:cache");
                                    case 8:
                                        n = e.sent, window._xw_client_timestamp = k()(), t = window.rcdTopStaticData = n.data;
                                    case 11:
                                        this.props.onLoadComplete(), o = (a = t).newstick, i = a.required, this.setState({
                                            stick: o,
                                            requiredList: i || [],
                                            loading: !1
                                        }), e.next = 19;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(0), console && console.log("data load error", e.t0);
                                    case 19:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 16]
                            ])
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.stick,
                                n = e.requiredList,
                                a = e.loading,
                                o = e.model,
                                r = e.hotNews,
                                i = this.props,
                                s = i.diaoChaData,
                                c = i.promotionModuleData,
                                l = i.qudao;
                            return we("div", {
                                className: "jsx-3902279208 container"
                            }, a && we("div", {
                                style: {
                                    position: "fixed",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)"
                                },
                                className: "jsx-3902279208"
                            }, we(N.a, null)), !a && we(m.Fragment, null, we(z, {
                                skin: this.props.skin
                            }), we(re.a, {
                                data: t
                            }), "simplify" === o && we(V.a, {
                                list: r
                            }), y()(n) && n.length > 0 && "init" === o && we(m.Fragment, null, we(ie.a, {
                                data: n,
                                noTitle: !0,
                                diaocha: s && s[0] && s[0].homemodulename.indexOf("24h") > -1 ? s : [],
                                yunying: c && c[0] && c[0].homemodulename.indexOf("24h") > -1 ? c : []
                            }), we(B.a, {
                                style: {
                                    minHeight: "0.06rem",
                                    background: "rgba(247,248,250,1)"
                                }
                            })), "init" === o && -1 === ["mobileqq", "sxs", "sxbrowser"].indexOf(l) && we(m.Fragment, null, we(ae, null), we(B.a, {
                                style: {
                                    minHeight: "0.06rem",
                                    background: "rgba(247,248,250,1)"
                                }
                            })), we(se.a, {
                                ref: this.tuijian,
                                solidExpIds: n.map((function(e) {
                                    return e.id
                                })),
                                diaocha: s && s[0] && s[0].homemodulename.indexOf("news") > -1 ? s : [],
                                yunying: c && c[0] && c[0].homemodulename.indexOf("news") > -1 ? c : [],
                                showNotification: this.props.showNotification,
                                qudao: l
                            }), we(B.a, {
                                style: {
                                    minHeight: "0.06rem",
                                    background: "rgba(247,248,250,1)"
                                }
                            }), we(E.a, {
                                triggerOnce: !0,
                                rootMargin: "0px 0px 120px 0px"
                            }, (function(e) {
                                var t = e.inView,
                                    n = e.ref;
                                return we("div", {
                                    ref: n,
                                    className: "jsx-3902279208"
                                }, t ? we(xe, null) : null)
                            })), we("div", {
                                "data-boss-expo": "bottom&modular=bottom",
                                "data-boss-once": !0,
                                className: "jsx-3902279208"
                            }, we(Y, null), we(W.a, {
                                feedback: !0,
                                tipoff: !0,
                                pcurl: !0,
                                noSticky: !0,
                                hasFixNav: !0
                            }))), we(_.a, {
                                id: "3902279208"
                            }, [".container.jsx-3902279208{min-height:700px;}"]))
                        }
                    }]), t
                }(m.Component),
                je = n("VxGw"),
                ke = n("uVuS"),
                Oe = n("Pv5E"),
                _e = n("zu0i"),
                Ce = n("qUMa"),
                Se = n("uoA0"),
                Ee = h.a.createElement,
                Ne = "index-tab-switch",
                Me = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), n = Object(l.a)(this, Object(u.a)(t).call(this, e)), Object(f.a)(Object(d.a)(n), "tabPositioning", (function(e) {
                            var t = e.disableUrlUpdate,
                                a = window.location.hash.substr(1).trim();
                            n.handeNavigation(a, t)
                        })), Object(f.a)(Object(d.a)(n), "refreshRecommendUpdateNumber", (function() {
                            var e = localStorage ? localStorage.getItem("v2-rcd-update-ts") : 0;
                            k()() - e > 12e4 && n.setState({
                                redDot: Math.round(5 * Math.random() + 10)
                            })
                        })), Object(f.a)(Object(d.a)(n), "markRecommednClick", (function() {
                            localStorage && localStorage.setItem("v2-rcd-update-ts", k()()), n.setState({
                                redDot: 0
                            })
                        })), Object(f.a)(Object(d.a)(n), "handeNavigation", (function(e, t) {
                            "recommend" == e && n.markRecommednClick();
                            var a = n.state.currentTag;
                            if ((e = e || "news") != a) {
                                Object(Ce.a)(), t || e === window.location.hash.substr(1) || history.pushState({
                                    prevUrl: window.location.href,
                                    action: Ne,
                                    tab: e
                                }, null, "#".concat(e));
                                var o = n.state.nav.map((function(t) {
                                    return t.on = t.key === e, t
                                }));
                                if (n.setState({
                                        currentTag: e,
                                        nav: o
                                    }), n.isSticky) {
                                    n.relocate();
                                    var r = 0,
                                        i = setInterval((function() {
                                            r++, n.relocate(), r > 5 && clearInterval(i)
                                        }), 50)
                                }
                                n.props.handleNavigation && n.props.handleNavigation(e)
                            }
                        })), Object(f.a)(Object(d.a)(n), "relocate", (function() {
                            window.scrollTo(0, n.state.topHeight)
                        })), n.state = {
                            currentTag: "",
                            nav: [{
                                key: "news",
                                title: "\u8981\u95fb",
                                on: !1,
                                boss: "qhyk&modular=map&map=yaowen&"
                            }, {
                                key: "recommend",
                                title: "\u63a8\u8350",
                                on: !1,
                                boss: "qhyk&modular=map&map=tuijian"
                            }, {
                                key: "video",
                                title: "\u89c6\u9891",
                                on: !1,
                                boss: "qhyk&modular=map&map=shipin"
                            }],
                            skin: {},
                            topHeight: 51
                        }, n.topElement = h.a.createRef(), n
                    }
                    var a;
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: (a = Object(i.a)(r.a.mark((function e() {
                            var t, n, a, o, i, s, c, l = this;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(T.a)();
                                    case 3:
                                        t = e.sent, n = t.hasSkin, a = t.img, o = t.underlinecolor, i = t.fontcolor, s = t.biglogo, c = t.bgcolor, n && this.setState({
                                            skin: {
                                                logo: s,
                                                bgcolor: c,
                                                bgImage: a,
                                                color: i,
                                                underlinecolor: o
                                            }
                                        }), e.next = 16;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(0), console.log(e.t0);
                                    case 16:
                                        this.refreshRecommendUpdateNumber(), this.tabPositioning({
                                            disableUrlUpdate: !0
                                        }), this.setState({
                                            topHeight: this.topElement.current.clientHeight
                                        }), Object(Se.b)(Ne, (function(e) {
                                            try {
                                                if (e) {
                                                    var t = e.action,
                                                        n = e.tab;
                                                    t === Ne && /^(news|recommend|video)$/.test(n), l.tabPositioning({
                                                        disableUrlUpdate: !0
                                                    })
                                                } else l.tabPositioning({
                                                    disableUrlUpdate: !0
                                                })
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        }));
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 13]
                            ])
                        }))), function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                a = t.nav,
                                o = t.topHeight,
                                r = t.currentTag,
                                i = t.redDot,
                                s = t.skin,
                                c = s.logo,
                                l = s.bgcolor,
                                u = s.bgImage,
                                d = s.color,
                                p = s.underlinecolor;
                            return Ee("header", {
                                style: {
                                    backgroundImage: u ? "url(".concat(u, ")") : ""
                                },
                                "data-boss-expo": "head&modular=head",
                                "data-boss-once": !0,
                                className: _.a.dynamic([
                                    ["1795411114", [p || "rgba(103,245,255,1)"]]
                                ])
                            }, Ee("div", {
                                ref: this.topElement,
                                className: _.a.dynamic([
                                    ["1795411114", [p || "rgba(103,245,255,1)"]]
                                ]) + " top"
                            }, Ee("div", {
                                style: {
                                    backgroundImage: "url(".concat(c || "//mat1.gtimg.com/www/mobi/2017/image/logo-text-whitetext_v2.svg", ")")
                                },
                                className: _.a.dynamic([
                                    ["1795411114", [p || "rgba(103,245,255,1)"]]
                                ]) + " logo"
                            }), Ee("a", {
                                href: "/m/s/sort",
                                "data-boss": "qzdh&modular=head",
                                className: _.a.dynamic([
                                    ["1795411114", [p || "rgba(103,245,255,1)"]]
                                ]) + " more"
                            }, Ee("img", {
                                src: n("CKBo"),
                                alt: "\u66f4\u591a\u9891\u9053",
                                className: _.a.dynamic([
                                    ["1795411114", [p || "rgba(103,245,255,1)"]]
                                ])
                            })), Ee("div", {
                                className: _.a.dynamic([
                                    ["1795411114", [p || "rgba(103,245,255,1)"]]
                                ]) + " login"
                            }, Ee(_e.a, null))), Ee(g.Sticky, {
                                topOffset: o,
                                disableHardwareAcceleration: !0
                            }, (function(t) {
                                var n = t.isSticky,
                                    o = (t.wasSticky, t.style);
                                t.distanceFromTop, t.distanceFromBottom, t.calculatedHeight;
                                return e.isSticky = n, Ee("ul", {
                                    style: le()({}, o, n ? {
                                        backgroundColor: l || "#538CFE"
                                    } : {
                                        bgcolor: "#538CFE"
                                    }),
                                    "data-boss-once": !0,
                                    "data-boss-expo": "qhyk&modular=map",
                                    className: _.a.dynamic([
                                        ["1795411114", [p || "rgba(103,245,255,1)"]]
                                    ]) + " " + "tabs ".concat(n ? "sticky" : "")
                                }, a.map((function(t) {
                                    var n = t.key,
                                        a = t.title,
                                        o = t.boss,
                                        s = t.on;
                                    return Ee("li", {
                                        key: n,
                                        style: {
                                            color: d || ""
                                        },
                                        "data-boss": o,
                                        onClick: function() {
                                            return e.handeNavigation(n)
                                        },
                                        className: _.a.dynamic([
                                            ["1795411114", [p || "rgba(103,245,255,1)"]]
                                        ]) + " " + ((s ? "on" : "") || "")
                                    }, a, "recommend" !== r && "recommend" === n && i > 10 && Ee("span", {
                                        className: _.a.dynamic([
                                            ["1795411114", [p || "rgba(103,245,255,1)"]]
                                        ]) + " reddot"
                                    }, i))
                                })))
                            })), Ee(_.a, {
                                id: "1795411114",
                                dynamic: [p || "rgba(103,245,255,1)"]
                            }, ["header.__jsx-style-dynamic-selector{height:1.5rem;background:linear-gradient(176deg,rgba(76,126,255,1) 0%,rgba(100,174,252,1) 100%);background-size:100% auto;box-sizing:border-box;margin-bottom:-0.55rem;}", ".top.__jsx-style-dynamic-selector{height:0.45rem;padding:0.15rem 0.12rem 0rem 0.15rem;}", ".top.__jsx-style-dynamic-selector .logo.__jsx-style-dynamic-selector{float:left;height:0.26rem;width:0.9rem;font-size:0;background-repeat:no-repeat;background-position:center center;background-size:0.9rem auto;outline:none;-webkit-tap-highlight-color:rgba(255,0,0,0);}", ".top.__jsx-style-dynamic-selector .login.__jsx-style-dynamic-selector{float:right;margin-right:0.09rem;}", ".top.__jsx-style-dynamic-selector .more.__jsx-style-dynamic-selector{height:0.26rem;width:0.26rem;float:right;}", ".top.__jsx-style-dynamic-selector .more.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{display:block;height:0.26rem;width:0.26rem;}", ".tabs.__jsx-style-dynamic-selector{height:0.44rem;line-height:0.44rem;margin:0px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:3;-webkit-transition:backgroundColor 0.5s;transition:backgroundColor 0.5s;}", ".tabs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;margin:0px;font-size:0.18rem;color:rgba(255,255,255,1);height:0.28rem;line-height:0.28rem;padding-top:0.09rem;box-sizing:content-box;opacity:0.85;position:relative;}", ".tabs.__jsx-style-dynamic-selector li.on.__jsx-style-dynamic-selector{opacity:1;font-weight:500;}", ".tabs.__jsx-style-dynamic-selector li.on.__jsx-style-dynamic-selector:after{content:'';display:block;width:0.18rem;height:0.03rem;background:".concat(p || "rgba(103,245,255,1)", ";margin:0px auto;}"), ".reddot.__jsx-style-dynamic-selector{padding:0px 0.05rem;height:0.13rem;line-height:0.14rem;background:#FA473B;border-radius:0.08rem;font-size:0.12rem;position:absolute;top:0.07rem;}"]))
                        }
                    }]), t
                }(m.Component),
                Te = n("lBdf"),
                Ie = n("mQlY"),
                Le = n("70DZ"),
                De = h.a.createElement,
                Ae = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), n = Object(l.a)(this, Object(u.a)(t).call(this, e)), Object(f.a)(Object(d.a)(n), "closeNotice", (function() {
                            n.setState({
                                show: !1
                            })
                        })), n.state = {
                            show: !1,
                            showed: !1
                        }, n
                    }
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            "1" != Le.a.json.get("addhomescreen") && window.addEventListener("scroll", (function() {
                                (document.body.scrollTop || document.documentElement.scrollTop) > 1300 && !e.state.showed && (Le.a.json.set("addhomescreen", "1"), e.setState({
                                    show: !0,
                                    showed: !0
                                }, (function() {
                                    setTimeout((function() {
                                        e.setState({
                                            show: !1
                                        })
                                    }), 5e3)
                                })))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return De("div", {
                                onClick: function(e) {
                                    e.stopPropagation()
                                },
                                className: "jsx-2318743460 " + "add-homescreen ".concat(this.state.show ? "show" : "")
                            }, De("div", {
                                className: "jsx-2318743460 bubble"
                            }, De("div", {
                                className: "jsx-2318743460 closebg"
                            }), De("div", {
                                onClick: this.closeNotice,
                                "data-boss": "cancel&modular=homescreen",
                                className: "jsx-2318743460 close"
                            }), De("div", {
                                className: "jsx-2318743460 icon"
                            }), De("div", {
                                className: "jsx-2318743460 text"
                            }, "\u5c06\u817e\u8baf\u7f51\u6dfb\u52a0\u81f3\u684c\u9762\u6216\u6536\u85cf\uff0c\u6d4f\u89c8\u8d44\u8baf\u66f4\u65b9\u4fbf\uff5e")), this.state.show && De("div", {
                                "data-boss-expo": "&modular=homescreen",
                                "data-boss-once": !0,
                                className: "jsx-2318743460"
                            }), De(_.a, {
                                id: "2318743460"
                            }, [".add-homescreen.jsx-2318743460{position:fixed;left:0;right:0;width:100%;bottom:-1rem;z-index:99;-webkit-transition:bottom .35s ease-in;transition:bottom .35s ease-in;max-width:768px;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}", ".add-homescreen.show.jsx-2318743460{bottom:0;}", ".bubble.jsx-2318743460{position:absolute;height:0.74rem;padding:0.15rem 0.12rem;background:#fff;font-size:0.16rem;color:#222;border-radius:0.09rem;box-shadow:0px 2px 6px 0 rgba(5,24,74,0.37);left:12px;right:12px;overflow:hidden;bottom:0.15rem;}", ".bubble.jsx-2318743460 .icon.jsx-2318743460{display:inline-block;width:0.44rem;height:0.44rem;background:url(//mat1.gtimg.com/www/mobi/2017/image/ui-icon_log.svg) no-repeat center;background-size:0.32rem;vertical-align:middle;border:1px solid #EAEAEA;border-radius:0.09rem;margin-right:0.09rem;}", ".closebg.jsx-2318743460{background:#f2f6fb;width:0.56rem;height:0.56rem;border-radius:0.28rem;position:absolute;top:-0.32rem;right:-0.3rem;}", ".close.jsx-2318743460{background:url(//mat1.gtimg.com/qqcdn/xw/article-images/newui/icon_tips_close.svg) center no-repeat;width:0.18rem;height:0.18rem;position:absolute;top:0.01rem;right:0.01rem;}", ".text.jsx-2318743460{position:absolute;left:0.65rem;line-height:0.22rem;width:2.72rem;top:0.15rem;}"]))
                        }
                    }]), t
                }(m.Component);
            n.d(t, "default", (function() {
                return ze
            }));
            var qe = h.a.createElement,
                Pe = {
                    news: "yaowen",
                    recommend: "tuijian",
                    video: "shipin"
                },
                Fe = {
                    news: "www",
                    recommend: "tj",
                    video: "shipin"
                },
                ze = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), n = Object(l.a)(this, Object(u.a)(t).call(this, e)), Object(f.a)(Object(d.a)(n), "handleNewsLoadComplete", (function() {
                            n.props._app.pageMounted()
                        })), Object(f.a)(Object(d.a)(n), "handleNavigation", (function(e) {
                            n.setState({
                                curentNav: e
                            });
                            var t = Pe[e];
                            if (n._bossStarted ? (n.props._app.updateBOSSOptions({
                                    pagetype: "homepage",
                                    channel: t
                                }), n.props._app.sendBOSSPV()) : (n.props._app.startBOSS({
                                    options: {
                                        is_gray: "0",
                                        pagetype: "homepage",
                                        channel: t
                                    },
                                    auto4787: !0
                                }), n._bossStarted = !0), window && window.MtaH5) try {
                                window.MtaH5.pgv()
                            } catch (e) {}
                            window.pvRepeatCount = 1, n.props._app.startPGV({
                                pgv_site: Fe[e],
                                useUnofficialJS: !0
                            })
                        })), Object(f.a)(Object(d.a)(n), "showNotification", (function(e) {
                            n.props._app.showNotification(e)
                        })), Object(f.a)(Object(d.a)(n), "handleRefresh", Object(i.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n.news.current.handleRefresh();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), n.state = {
                            pushModule: [],
                            diaoChaItem: [],
                            kaipinModule: [],
                            promotionModule: [],
                            curentNav: ""
                        }, n.news = h.a.createRef(), n._bossStarted = !1, n
                    }
                    var n, a;
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: (a = Object(i.a)(r.a.mark((function e() {
                            var t = this;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        v.a.get((function(e, t) {
                                            if (!e && t) {
                                                var n = {
                                                    title: "\u817e\u8baf\u7f51",
                                                    desc: "",
                                                    link: "",
                                                    imgUrl: "https://mat1.gtimg.com/www/mobi/2017/image/apple-touch-icon.png"
                                                };
                                                t.updateAppMessageShareData(n), t.updateTimelineShareData(n), t.onMenuShareWeibo(n)
                                            }
                                        })), Object(x.a)({
                                            sid: "5d22fc35",
                                            qudao: "default",
                                            contentid: [0],
                                            channelname: "\u65b0\u7248\u9996\u9875"
                                        }).then((function(e) {
                                            t.setState({
                                                diaoChaItem: e.obj_survery.length > 0 && e.obj_survery || [],
                                                surveyLocation: e.obj_survery.length > 0 && e.obj_survery[0].station || 0
                                            })
                                        })), Object(x.a)({
                                            qudao: "default",
                                            contentid: [1, 2, 3],
                                            channelname: "\u65b0\u7248\u9996\u9875"
                                        }).then((function(e) {
                                            t.setState({
                                                pushModule: e.obj_push.length > 0 && e.obj_push || [],
                                                kaipinModule: e.obj_kaipin.length > 0 && e.obj_kaipin || [],
                                                promotionModule: e.obj_promotion.length > 0 && e.obj_promotion || []
                                            })
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props._app.qudao,
                                t = this.state,
                                n = t.curentNav,
                                a = t.diaoChaItem,
                                o = t.promotionModule;
                            return qe(b.a, null, qe(g.StickyContainer, null, qe("div", {
                                style: {
                                    maxWidth: "3.75rem",
                                    margin: "0px auto"
                                }
                            }, qe(Me, {
                                handleNavigation: this.handleNavigation
                            }), "news" === n && qe(ye, {
                                ref: this.news,
                                qudao: e,
                                onLoadComplete: this.handleNewsLoadComplete,
                                showNotification: this.showNotification,
                                diaoChaData: a,
                                promotionModuleData: o
                            }), "recommend" === n && qe(je.a, {
                                onLoadComplete: this.handleNewsLoadComplete,
                                showNotification: this.showNotification,
                                _app: this.props._app
                            }), "video" === n && qe(ke.a, {
                                onLoadComplete: this.handleNewsLoadComplete
                            }))), qe(Oe.a, {
                                settings: "news" === n ? "/m/s/myindex" : null,
                                hasRefresh: !0,
                                refreshFn: "news" === n ? this.handleRefresh : null,
                                hasFeedback: !1,
                                feedbackUrl: "https://support.qq.com/embed/phone/59301",
                                hasGoTop: !0
                            }), this.state.pushModule.length > 0 && qe(Te.a, {
                                data: {
                                    title: this.state.pushModule[0].title,
                                    hrefurl: this.state.pushModule[0].hrefurl,
                                    source: this.state.pushModule[0].source
                                },
                                theme: "",
                                bossClickClose: "emergency&modular=emergency",
                                bossExpo: "emergency",
                                bossClickMore: "emergency&modular=emergency"
                            }), this.state.kaipinModule.length > 0 && qe(Ie.a, {
                                data: {
                                    img: this.state.kaipinModule[0].picurl,
                                    link: this.state.kaipinModule[0].hrefurl
                                },
                                bossChannel: "area" === this.state.chId ? "local" : this.state.chId
                            }), "mqq" !== this.props._app.simpleUA && "iPadQQ" !== this.props._app.simpleUA && "weixin" !== this.props._app.simpleUA && qe(Ae, null))
                        }
                    }], [{
                        key: "getInitialProps",
                        value: (n = Object(i.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.query, e.abrupt("return", n);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), t
                }(m.Component);
            Object(f.a)(ze, "_pageConfig", {
                includeManifest: !0,
                registerServiceWorker: !0,
                includeGSV: !0,
                remLayout: {
                    enabled: !0
                },
                launchScreen: !0
            })
        },
        RotF: function(e, t, n) {
            e.exports = n("LSTS")
        },
        RrRF: function(e, t) {
            e.exports = function() {}
        },
        "Rw8+": function(e, t, n) {
            var a = n("heNW"),
                o = n("EldB"),
                r = n("a1zH"),
                i = n("5sOR"),
                s = n("V9aw"),
                c = n("6KkN"),
                l = n("Kz5y");
            e.exports = function(e, t, n) {
                var u = o(e);
                return function o() {
                    for (var d = arguments.length, p = Array(d), f = d, m = s(o); f--;) p[f] = arguments[f];
                    var h = d < 3 && p[0] !== m && p[d - 1] !== m ? [] : c(p, m);
                    return (d -= h.length) < n ? i(e, t, r, o.placeholder, void 0, p, h, void 0, void 0, n - d) : a(this && this !== l && this instanceof o ? u : e, this, p)
                }
            }
        },
        S1to: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = (0, r.default)(e);
                if (!n.length) return void t.preventDefault();
                var a, o = t.shiftKey,
                    i = n[0],
                    s = n[n.length - 1];
                if (e === document.activeElement) {
                    if (!o) return;
                    a = s
                }
                s !== document.activeElement || o || (a = i);
                i === document.activeElement && o && (a = s);
                if (a) return t.preventDefault(), void a.focus();
                var c = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
                if (null == c || "Chrome" == c[1] || null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) return;
                var l = n.indexOf(document.activeElement);
                l > -1 && (l += o ? -1 : 1);
                if (void 0 === n[l]) return t.preventDefault(), void(a = o ? s : i).focus();
                t.preventDefault(), n[l].focus()
            };
            var a, o = n("ZDLa"),
                r = (a = o) && a.__esModule ? a : {
                    default: a
                };
            e.exports = t.default
        },
        S7RP: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return y
            }));
            var a = n("AT/M"),
                o = n("vYYK"),
                r = n("kOwS"),
                i = n("0iUn"),
                s = n("sLSF"),
                c = n("MI3g"),
                l = n("a7VT"),
                u = n("Tit0"),
                d = n("MX0m"),
                p = n.n(d),
                f = n("q1tI"),
                m = n.n(f),
                h = n("0U20"),
                g = n("tblk"),
                b = n("iKBj"),
                v = n("PIAq"),
                x = n("Ri3a"),
                w = m.a.createElement,
                y = function(e) {
                    function t(e) {
                        var n;
                        return Object(i.a)(this, t), (n = Object(c.a)(this, Object(l.a)(t).call(this, e))).state = {
                            data: null
                        }, n._mounted = !1, n
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this._mounted = !0, Object(g.a)("//pacaio.match.qq.com/openapi/json", {
                                key: "xw_top_report"
                            }).then((function(t) {
                                if (t && t.data.length > 1) {
                                    var n = t.data.slice(1);
                                    e._mounted && (e.setState({
                                        data: n
                                    }), "function" == typeof e.props.onDataReady && e.props.onDataReady(n))
                                }
                            })).catch((function() {}))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._mounted = !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.prepend,
                                n = void 0 === t ? null : t,
                                a = e.append,
                                o = void 0 === a ? null : a;
                            return this.state.data ? w(m.a.Fragment, null, n, w(j, Object(r.a)({}, this.props, {
                                list: this.state.data
                            })), o) : null
                        }
                    }]), t
                }(f.Component),
                j = function(e) {
                    function t(e) {
                        var n;
                        return Object(i.a)(this, t), n = Object(c.a)(this, Object(l.a)(t).call(this, e)), Object(o.a)(Object(a.a)(n), "currentIndex", 0), n.state = {
                            currentNews: n.props.list[n.currentIndex],
                            currentNewsIndex: n.currentIndex
                        }, n
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.timer = setInterval((function() {
                                e.currentIndex < e.props.list.length - 1 ? e.currentIndex += 1 : e.currentIndex = 0, e.setState({
                                    currentNews: e.props.list[e.currentIndex],
                                    currentNewsIndex: e.currentIndex
                                })
                            }), 5e3)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(this.timer)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.icon,
                                n = void 0 === t ? "icon_rdjx" : t,
                                a = e.iconLink,
                                o = void 0 === a ? null : a,
                                r = e.moreLink,
                                i = void 0 === r ? "/m/hot" : r,
                                s = this.state,
                                c = s.currentNews,
                                l = s.currentNewsIndex,
                                u = "article&&modular=hotnews&".concat(b.a.articleItem(c, l));
                            return w("div", {
                                "data-boss-expo": "hotnews&modular=hotnews",
                                "data-boss-once": !0,
                                className: "jsx-533603717 " + "flash ".concat(this.props.theme || "")
                            }, w("a", {
                                href: i,
                                "data-boss": "more&modular=hotnews",
                                className: "jsx-533603717 more"
                            }, "\u66f4\u591a\u70ed\u70b9"), w("a", {
                                href: o,
                                title: "\u67e5\u770b\u66f4\u591a",
                                className: "jsx-533603717 title-icon"
                            }, w("img", {
                                src: "//mat1.gtimg.com/www/mobi/2017/image/".concat(n, ".svg"),
                                className: "jsx-533603717"
                            })), w("div", {
                                className: "jsx-533603717 news"
                            }, w(x.a, {
                                href: Object(h.a)(this.state.currentNews.url),
                                "data-boss": u
                            }, w(v.a, {
                                title: this.state.currentNews.title,
                                style: {
                                    verticalAlign: "middle",
                                    textAlign: "left",
                                    WebkitLineClamp: 2
                                }
                            }))), w(p.a, {
                                id: "533603717"
                            }, [".flash.jsx-533603717{position:relative;padding:0.12rem 0;height:0.48rem;box-sizing:content-box;overflow:hidden;}", ".flash.jsx-533603717::before{content:'';display:block;position:absolute;left:0;top:0;background:#e9e9e9;width:100%;height:0.01rem;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}", ".flash.jsx-533603717 .news.jsx-533603717{height:0.48rem;overflow:hidden;padding:0 0.15rem;font-size:0.14rem;line-height:0.2rem;}", ".flash.jsx-533603717 .title-icon.jsx-533603717{display:block;float:left;height:0.4rem;margin-left:0.18rem;margin-top:0.04rem;}", ".flash.jsx-533603717 .title-icon.jsx-533603717 img.jsx-533603717{width:0.4rem;height:0.4rem;}", ".flash.jsx-533603717 .more.jsx-533603717{display:block;float:right;font-size:0;text-indent:-9.99rem;height:0.4rem;width:0.4rem;border-left:0.01rem solid #E9E9E9;padding:0 0.05rem;background-image:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/newui/flash-gray-arrow.svg);background-repeat:no-repeat;background-position:center center;background-size:0.16rem;margin-top:0.04rem;}", ".flash.dark.jsx-533603717{background:#F6F8FC;border-radius:3px;margin:0.15rem 0.18rem;}", ".flash.jsx-533603717::before{display:none;}", ".flash.dark.jsx-533603717 .more.jsx-533603717{width:0.38rem;padding:0;border:none;}", ".flash.dark.jsx-533603717 .news.jsx-533603717{padding:0 0 0 0.12rem;}", ".flash.dark.jsx-533603717 .title-icon.jsx-533603717 img.jsx-533603717{width:0.44rem;height:0.44rem;}"]))
                        }
                    }]), t
                }(f.Component);
            t.b = j
        },
        SDVc: function(e, t, n) {
            var a = n("6T1N"),
                o = 16;

            function r(e, t, n) {
                var i = a(e, o, void 0, void 0, void 0, void 0, void 0, t = n ? void 0 : t);
                return i.placeholder = r.placeholder, i
            }
            r.placeholder = {}, e.exports = r
        },
        SmhD: function(e, t) {
            var n = "Expected a function";
            e.exports = function(e, t, a) {
                if ("function" != typeof e) throw new TypeError(n);
                return setTimeout((function() {
                    e.apply(void 0, a)
                }), t)
            }
        },
        SnzR: function(e, t, n) {
            "use strict";
            (function(t) {
                function n(e) {
                    var t, n, o, r, i, s, c = Object.create(null);
                    if (this[l] = c, e)
                        if ("string" == typeof e)
                            for ("?" === e.charAt(0) && (e = e.slice(1)), i = 0, s = (r = e.split("&")).length; i < s; i++) - 1 < (t = (o = r[i]).indexOf("=")) ? d(c, p(o.slice(0, t)), p(o.slice(t + 1))) : o.length && d(c, p(o), "");
                        else if (a(e))
                        for (i = 0, s = e.length; i < s; i++) d(c, (o = e[i])[0], o[1]);
                    else if (e.forEach) e.forEach(u, c);
                    else
                        for (n in e) d(c, n, e[n])
                }
                var a = Array.isArray,
                    o = n.prototype,
                    r = /[!'\(\)~]|%20|%00/g,
                    i = /\+/g,
                    s = {
                        "!": "%21",
                        "'": "%27",
                        "(": "%28",
                        ")": "%29",
                        "~": "%7E",
                        "%20": "+",
                        "%00": "\0"
                    },
                    c = function(e) {
                        return s[e]
                    },
                    l = "__URLSearchParams__:" + Math.random();

                function u(e, t) {
                    d(this, t, e)
                }

                function d(e, t, n) {
                    var o = a(n) ? n.join(",") : n;
                    t in e ? e[t].push(o) : e[t] = [o]
                }

                function p(e) {
                    return decodeURIComponent(e.replace(i, " "))
                }

                function f(e) {
                    return encodeURIComponent(e).replace(r, c)
                }
                o.append = function(e, t) {
                        d(this[l], e, t)
                    }, o.delete = function(e) {
                        delete this[l][e]
                    }, o.get = function(e) {
                        var t = this[l];
                        return e in t ? t[e][0] : null
                    }, o.getAll = function(e) {
                        var t = this[l];
                        return e in t ? t[e].slice(0) : []
                    }, o.has = function(e) {
                        return e in this[l]
                    }, o.set = function(e, t) {
                        this[l][e] = ["" + t]
                    }, o.forEach = function(e, t) {
                        var n = this[l];
                        Object.getOwnPropertyNames(n).forEach((function(a) {
                            n[a].forEach((function(n) {
                                e.call(t, n, a, this)
                            }), this)
                        }), this)
                    }, o.toJSON = function() {
                        return {}
                    }, o.toString = function() {
                        var e, t, n, a, o = this[l],
                            r = [];
                        for (t in o)
                            for (n = f(t), e = 0, a = o[t]; e < a.length; e++) r.push(n + "=" + f(a[e]));
                        return r.join("&")
                    },
                    function(e) {
                        var t = function() {
                            try {
                                return !!Symbol.iterator
                            } catch (e) {
                                return !1
                            }
                        }();
                        "forEach" in e || (e.forEach = function(e, t) {
                            var n = Object.create(null);
                            this.toString().replace(/=[\s\S]*?(?:&|$)/g, "=").split("=").forEach((function(a) {
                                !a.length || a in n || (n[a] = this.getAll(a)).forEach((function(n) {
                                    e.call(t, n, a, this)
                                }), this)
                            }), this)
                        }), "keys" in e || (e.keys = function() {
                            var e = [];
                            this.forEach((function(t, n) {
                                e.push(n)
                            }));
                            var n = {
                                next: function() {
                                    var t = e.shift();
                                    return {
                                        done: void 0 === t,
                                        value: t
                                    }
                                }
                            };
                            return t && (n[Symbol.iterator] = function() {
                                return n
                            }), n
                        }), "values" in e || (e.values = function() {
                            var e = [];
                            this.forEach((function(t) {
                                e.push(t)
                            }));
                            var n = {
                                next: function() {
                                    var t = e.shift();
                                    return {
                                        done: void 0 === t,
                                        value: t
                                    }
                                }
                            };
                            return t && (n[Symbol.iterator] = function() {
                                return n
                            }), n
                        }), "entries" in e || (e.entries = function() {
                            var e = [];
                            this.forEach((function(t, n) {
                                e.push([n, t])
                            }));
                            var n = {
                                next: function() {
                                    var t = e.shift();
                                    return {
                                        done: void 0 === t,
                                        value: t
                                    }
                                }
                            };
                            return t && (n[Symbol.iterator] = function() {
                                return n
                            }), n
                        }), !t || Symbol.iterator in e || (e[Symbol.iterator] = e.entries), "sort" in e || (e.sort = function() {
                            for (var e, t, n, a = this.entries(), o = a.next(), r = o.done, i = [], s = Object.create(null); !r;) t = (n = o.value)[0], i.push(t), t in s || (s[t] = []), s[t].push(n[1]), r = (o = a.next()).done;
                            for (i.sort(), e = 0; e < i.length; e++) this.delete(i[e]);
                            for (e = 0; e < i.length; e++) t = i[e], this.append(t, s[t].shift())
                        })
                    }((n = e.exports = t.URLSearchParams || n).prototype)
            }).call(this, n("yLpj"))
        },
        Sop2: function(e, t, n) {
            "use strict";
            var a = n("MX0m"),
                o = n.n(a),
                r = n("q1tI"),
                i = n.n(r).a.createElement;
            t.a = function(e) {
                var t = e.style,
                    n = e.text;
                return i(r.Fragment, null, i("span", {
                    style: t || {},
                    className: "jsx-3717176363"
                }, n), i(o.a, {
                    id: "3717176363"
                }, ["span.jsx-3717176363{display:inline-block;font-size:0.12rem;font-weight:400;color:rgba(130,140,155,1);line-height:0.16rem;height:0.16rem;}"]))
            }
        },
        T8tx: function(e, t, n) {
            var a = n("ulEd"),
                o = n("2lMS"),
                r = n("wclG"),
                i = n("/lCS");
            e.exports = function(e, t, n) {
                var s = t + "";
                return r(e, o(s, i(a(s), n)))
            }
        },
        UDfb: function(e, t, n) {
            var a = n("EA7m"),
                o = n("lKaW"),
                r = a((function(e) {
                    var t = e.length,
                        n = t > 1 ? e[t - 1] : void 0;
                    return n = "function" == typeof n ? (e.pop(), n) : void 0, o(e, n)
                }));
            e.exports = r
        },
        UKhj: function(e, t, n) {
            var a = n("xpk8"),
                o = n("zZ0H"),
                r = n("/9aa"),
                i = 2147483647;
            e.exports = function(e, t, n) {
                var s = 0,
                    c = null == e ? s : e.length;
                if ("number" == typeof t && t == t && c <= i) {
                    for (; s < c;) {
                        var l = s + c >>> 1,
                            u = e[l];
                        null !== u && !r(u) && (n ? u <= t : u < t) ? s = l + 1 : c = l
                    }
                    return c
                }
                return a(e, t, o, n)
            }
        },
        USjQ: function(e, t) {
            var n = Array.prototype.reverse;
            e.exports = function(e) {
                return null == e ? e : n.call(e)
            }
        },
        UfWW: function(e, t, n) {
            var a = n("KwMD"),
                o = n("ut/Y"),
                r = n("Sxd8"),
                i = Math.max;
            e.exports = function(e, t, n) {
                var s = null == e ? 0 : e.length;
                if (!s) return -1;
                var c = null == n ? 0 : r(n);
                return c < 0 && (c = i(s + c, 0)), a(e, o(t, 3), c)
            }
        },
        UrOp: function(e, t, n) {
            var a = n("LqpT"),
                o = n("XGnz"),
                r = n("EA7m"),
                i = n("3L66"),
                s = n("RBan"),
                c = r((function(e, t) {
                    var n = s(t);
                    return i(n) && (n = void 0), i(e) ? a(e, o(t, 1, i, !0), void 0, n) : []
                }));
            e.exports = c
        },
        V9aw: function(e, t) {
            e.exports = function(e) {
                return e.placeholder
            }
        },
        VCL8: function(e, t, n) {
            "use strict";

            function a() {
                var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
                null != e && this.setState(e)
            }

            function o(e) {
                this.setState(function(t) {
                    var n = this.constructor.getDerivedStateFromProps(e, t);
                    return null != n ? n : null
                }.bind(this))
            }

            function r(e, t) {
                try {
                    var n = this.props,
                        a = this.state;
                    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, a)
                } finally {
                    this.props = n, this.state = a
                }
            }

            function i(e) {
                var t = e.prototype;
                if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
                if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
                var n = null,
                    i = null,
                    s = null;
                if ("function" == typeof t.componentWillMount ? n = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof t.componentWillReceiveProps ? i = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (i = "UNSAFE_componentWillReceiveProps"), "function" == typeof t.componentWillUpdate ? s = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"), null !== n || null !== i || null !== s) {
                    var c = e.displayName || e.name,
                        l = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + c + " uses " + l + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== i ? "\n  " + i : "") + (null !== s ? "\n  " + s : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
                }
                if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = a, t.componentWillReceiveProps = o), "function" == typeof t.getSnapshotBeforeUpdate) {
                    if ("function" != typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                    t.componentWillUpdate = r;
                    var u = t.componentDidUpdate;
                    t.componentDidUpdate = function(e, t, n) {
                        var a = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                        u.call(this, e, t, a)
                    }
                }
                return e
            }
            n.r(t), n.d(t, "polyfill", (function() {
                return i
            })), a.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0, r.__suppressDeprecationWarning = !0
        },
        VD47: function(e, t, n) {
            var a = n("XGnz"),
                o = n("EA7m"),
                r = n("LGYb"),
                i = n("3L66"),
                s = n("RBan"),
                c = o((function(e) {
                    var t = s(e);
                    return t = "function" == typeof t ? t : void 0, r(a(e, 1, i, !0), void 0, t)
                }));
            e.exports = c
        },
        VJLA: function(e, t, n) {
            var a = n("MrPd"),
                o = n("1w02");
            e.exports = function(e, t) {
                return o(e || [], t || [], a)
            }
        },
        VKEO: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleBlur = l, t.handleFocus = u, t.markForFocusLater = function() {
                i.push(document.activeElement)
            }, t.returnFocus = function() {
                var e = null;
                try {
                    return void(0 !== i.length && (e = i.pop()).focus())
                } catch (t) {
                    console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "))
                }
            }, t.popWithoutFocus = function() {
                i.length > 0 && i.pop()
            }, t.setupScopedFocus = function(e) {
                s = e, window.addEventListener ? (window.addEventListener("blur", l, !1), document.addEventListener("focus", u, !0)) : (window.attachEvent("onBlur", l), document.attachEvent("onFocus", u))
            }, t.teardownScopedFocus = function() {
                s = null, window.addEventListener ? (window.removeEventListener("blur", l), document.removeEventListener("focus", u)) : (window.detachEvent("onBlur", l), document.detachEvent("onFocus", u))
            };
            var a, o = n("ZDLa"),
                r = (a = o) && a.__esModule ? a : {
                    default: a
                };
            var i = [],
                s = null,
                c = !1;

            function l() {
                c = !0
            }

            function u() {
                if (c) {
                    if (c = !1, !s) return;
                    setTimeout((function() {
                        s.contains(document.activeElement) || ((0, r.default)(s)[0] || s).focus()
                    }), 0)
                }
            }
        },
        Vphk: function(e, t, n) {
            n("0lY0"), e.exports = n("p9MR").Object.getOwnPropertySymbols
        },
        VxGw: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return E
            }));
            var a = n("ln6h"),
                o = n.n(a),
                r = n("O40h"),
                i = n("doui"),
                s = n("0iUn"),
                c = n("sLSF"),
                l = n("MI3g"),
                u = n("a7VT"),
                d = n("AT/M"),
                p = n("Tit0"),
                f = n("vYYK"),
                m = n("MX0m"),
                h = n.n(m),
                g = n("q1tI"),
                b = n.n(g),
                v = n("RotF"),
                x = n.n(v),
                w = n("ob4f"),
                y = n("62Vo"),
                j = n("hnLT"),
                k = n("CZ8k"),
                O = n("+sCI"),
                _ = n("fP2x"),
                C = b.a.createElement,
                S = {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                },
                E = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), n = Object(l.a)(this, Object(u.a)(t).call(this, e)), Object(f.a)(Object(d.a)(n), "handleNegativeFeedback", (function(e) {
                            n.props.showNotification("\u5c06\u4e3a\u60a8\u51cf\u5c11\u6b64\u7c7b\u63a8\u8350")
                        })), Object(f.a)(Object(d.a)(n), "loadRcdNews", (function() {
                            var e = n.state.newsList,
                                t = "//pacaio.match.qq.com/xw/" + ("mobileqq" === n.props._app.qudao ? "recommendMobileQQ" : "recommend");
                            Object(O.a)({
                                url: t,
                                params: {
                                    fun: "ch_ptdc",
                                    channel: "tuijian",
                                    webview: n.props._app.simpleUA,
                                    qudao: n.props._app.qudao,
                                    network: Object(_.a)() ? "WIFI" : ""
                                },
                                useRefreshAsPage: !0,
                                offset: 10 * n.pageCounter,
                                count: 10,
                                noExpIds: !0
                            }).then((function(t) {
                                var a = Object(i.a)(t, 2),
                                    o = a[0],
                                    r = a[1];
                                n.pageCounter += 1, n._mounted && n.setState({
                                    newsList: e.concat(o),
                                    newsMeta: r,
                                    hasMore: o.length > 0
                                }), n.initialized || (n.initialized = !0, n.props.onLoadComplete())
                            })).catch((function(e) {
                                console && console.log("data load error", e)
                            }))
                        })), Object(f.a)(Object(d.a)(n), "loadItemsRec", (function() {
                            n.loadRcdNews()
                        })), n.state = {
                            newsList: [],
                            newsMeta: {},
                            hasMore: !0
                        }, n.pageCounter = 0, n._mounted = !1, n.initialized = !1, n
                    }
                    var n;
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(r.a)(o.a.mark((function e() {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this._mounted = !0;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._mounted = !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.newsList,
                                n = e.hasMore,
                                a = e.newsMeta,
                                o = this.props,
                                r = o.adChannel,
                                i = o.displayMode;
                            t = t.slice(0);
                            for (var s = function(e) {
                                    var n = (e - 4) / 5;
                                    t.splice(e, 0, {
                                        type: "custom",
                                        id: "ad_".concat(n),
                                        Element: C(w.a, {
                                            triggerOnce: !0,
                                            rootMargin: "0px 0px 300px 0px"
                                        }, (function(e) {
                                            var t = e.inView,
                                                a = e.ref;
                                            return C("div", {
                                                ref: a
                                            }, t ? C(k.a, {
                                                channel: r || "tuijian",
                                                index: n
                                            }) : null)
                                        }))
                                    })
                                }, c = 4; c < t.length; c += 5) s(c);
                            return C("div", {
                                className: "jsx-3522178407 container"
                            }, C(x.a, {
                                pageStart: 0,
                                loadMore: this.loadItemsRec,
                                hasMore: n,
                                loader: C("div", {
                                    style: 0 == t.length && n ? S : {},
                                    key: 0,
                                    className: "jsx-3522178407"
                                }, C(j.a, null))
                            }, C(y.a, {
                                data: t,
                                handleNegativeFeedback: this.handleNegativeFeedback,
                                bossExpo: "&channel=tuijian",
                                bossClick: "&channel=tuijian",
                                dataMeta: a,
                                videoAutoPlay: this.props.videoAutoPlay,
                                displayMode: i
                            })), C(h.a, {
                                id: "3522178407"
                            }, [".container.jsx-3522178407{background:rgba(255,255,255,1);border-radius:0.12rem 0.12rem 0px 0px;min-height:700px;}"]))
                        }
                    }]), t
                }(g.Component)
        },
        "W6/K": function(e, t, n) {
            var a = n("eUgh"),
                o = n("R/W3"),
                r = n("2GsC"),
                i = n("sEf8"),
                s = n("Q1l4"),
                c = Array.prototype.splice;
            e.exports = function(e, t, n, l) {
                var u = l ? r : o,
                    d = -1,
                    p = t.length,
                    f = e;
                for (e === t && (t = s(t)), n && (f = a(e, i(n))); ++d < p;)
                    for (var m = 0, h = t[d], g = n ? n(h) : h;
                        (m = u(f, g, m, l)) > -1;) f !== e && c.call(f, m, 1), c.call(e, m, 1);
                return e
            }
        },
        "Wah+": function(e, t, n) {
            var a = n("W6/K");
            e.exports = function(e, t, n) {
                return e && e.length && t && t.length ? a(e, t, void 0, n) : e
            }
        },
        Wt1U: function(e, t, n) {
            var a = n("LqpT"),
                o = n("EA7m"),
                r = n("3L66"),
                i = o((function(e, t) {
                    return r(e) ? a(e, t) : []
                }));
            e.exports = i
        },
        Xi4S: function(e, t, n) {
            "use strict";
            var a = n("pLtp"),
                o = n.n(a),
                r = n("DNZy"),
                i = n("pvup"),
                s = n("QV2i"),
                c = n.n(s),
                l = n("E3Ww"),
                u = n.n(l),
                d = n("70DZ"),
                p = "nav.sort0";
            t.a = {
                getSettings: function() {
                    var e;
                    if (d.a.json.remove("nav.sort"), window && window.localStorage) try {
                        if (!(e = d.a.json.get(p))) {
                            var t = JSON.parse(window.localStorage.getItem("xwChannel"));
                            t && t.length > 0 && (e = {
                                main: t.slice(0, 20)
                            })
                        }
                    } catch (e) {}
                    var n = [];
                    if (e && e.main && 0 !== e.main.length)
                        for (var a = 0; a < c.a.length; a++)
                            if (c.a[a].unsortable) n.push(c.a[a].key);
                            else {
                                if (!(e && e.main && e.main[a])) break;
                                n.push(e.main[a])
                            }
                    else n = c.a.map((function(e) {
                        return e.key
                    }));
                    return {
                        main: n,
                        back: Object(r.pullAll)(o()(Object(i.pickBy)(u.a, (function(e) {
                            return !e.hideInMainNav
                        }))), n),
                        unsortables: c.a.filter((function(e) {
                            return e.unsortable
                        })).map((function(e) {
                            return e.key
                        }))
                    }
                },
                saveSettings: function(e) {
                    if (window && window.localStorage) try {
                        d.a.json.set(p, {
                            main: e.main
                        })
                    } catch (e) {}
                },
                clearSettings: function() {
                    return d.a.json.set(p, null)
                }
            }
        },
        Xp7I: function(e, t, n) {
            var a = n("KxBF"),
                o = n("Sxd8");
            e.exports = function(e, t, n) {
                return e && e.length ? (t = n || void 0 === t ? 1 : o(t), a(e, 0, t < 0 ? 0 : t)) : []
            }
        },
        "Xt/L": function(e, t) {
            e.exports = function(e, t, n) {
                for (var a = -1, o = null == e ? 0 : e.length; ++a < o;)
                    if (n(t, e[a])) return !0;
                return !1
            }
        },
        XzbM: function(e, t, n) {
            var a = n("3L66");
            e.exports = function(e) {
                return a(e) ? e : []
            }
        },
        Y0CH: function(e, t, n) {
            var a = n("LXxW"),
                o = n("eUgh"),
                r = n("711d"),
                i = n("UNi/"),
                s = n("3L66"),
                c = Math.max;
            e.exports = function(e) {
                if (!e || !e.length) return [];
                var t = 0;
                return e = a(e, (function(e) {
                    if (s(e)) return t = c(e.length, t), !0
                })), i(t, (function(t) {
                    return o(e, r(t))
                }))
            }
        },
        Y3KF: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StickyContainer = t.Sticky = void 0;
            var a = r(n("LXhs")),
                o = r(n("CnqA"));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.Sticky = a.default, t.StickyContainer = o.default, t.default = a.default
        },
        Ye7m: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assertNodeList = c, t.setElement = function(e) {
                var t = e;
                if ("string" == typeof t && i.canUseDOM) {
                    var n = document.querySelectorAll(t);
                    c(n, t), t = "length" in n ? n[0] : n
                }
                return s = t || s
            }, t.validateElement = l, t.hide = function(e) {
                l(e) && (e || s).setAttribute("aria-hidden", "true")
            }, t.show = function(e) {
                l(e) && (e || s).removeAttribute("aria-hidden")
            }, t.documentNotReadyOrSSRTesting = function() {
                s = null
            }, t.resetForTesting = function() {
                s = null
            };
            var a, o = n("2W6z"),
                r = (a = o) && a.__esModule ? a : {
                    default: a
                },
                i = n("2zs7");
            var s = null;

            function c(e, t) {
                if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".")
            }

            function l(e) {
                return !(!e && !s) || ((0, r.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), !1)
            }
        },
        Yoag: function(e, t, n) {
            var a = n("dTAl"),
                o = n("RrRF"),
                r = 4294967295;

            function i(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = r, this.__views__ = []
            }
            i.prototype = a(o.prototype), i.prototype.constructor = i, e.exports = i
        },
        YteJ: function(e, t, n) {
            var a = n("LXxW"),
                o = n("EA7m"),
                r = n("7cXV"),
                i = n("3L66"),
                s = n("RBan"),
                c = o((function(e) {
                    var t = s(e);
                    return t = "function" == typeof t ? t : void 0, r(a(e, i), void 0, t)
                }));
            e.exports = c
        },
        ZDLa: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return [].slice.call(e.querySelectorAll("*"), 0).filter(i)
            };
            var a = /input|select|textarea|button|object/;

            function o(e) {
                var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
                if (t && !e.innerHTML) return !0;
                var n = window.getComputedStyle(e);
                return t ? "visible" !== n.getPropertyValue("overflow") : "none" == n.getPropertyValue("display")
            }

            function r(e, t) {
                var n = e.nodeName.toLowerCase();
                return (a.test(n) && !e.disabled || "a" === n && e.href || t) && function(e) {
                    for (var t = e; t && t !== document.body;) {
                        if (o(t)) return !1;
                        t = t.parentNode
                    }
                    return !0
                }(e)
            }

            function i(e) {
                var t = e.getAttribute("tabindex");
                null === t && (t = void 0);
                var n = isNaN(t);
                return (n || t >= 0) && r(e, !n)
            }
            e.exports = t.default
        },
        Zw3B: function(e, t, n) {
            "use strict";
            var a = n("6BQ9"),
                o = n.n(a);
            t.a = function(e) {
                var t;
                if ("string" == typeof e && e.indexOf("-") > -1 && (e = new Date(e.replace(/-/g, "/"))), e && "function" == typeof e.getMonth ? t = e : "number" == typeof e || "string" == typeof e ? ((e = o()(e)) < 9999999999 && (e *= 1e3), t = new Date(e)) : t = new Date(e), "function" != typeof t.getMonth) return "";
                var n = t.valueOf(),
                    a = (new Date).valueOf() - n || 1,
                    r = "";
                if (a < 36e5) {
                    var i = Math.floor(a / 6e4);
                    r = i < 5 ? "\u521a\u521a" : "".concat(i, "\u5206\u949f\u524d")
                } else if (a < 864e5) {
                    var s = Math.floor(a / 36e5);
                    r = "".concat(s, "\u5c0f\u65f6\u524d")
                } else {
                    var c = Math.floor(a / 864e5);
                    if (1 == c) r = "\u6628\u5929";
                    else if (2 == c) r = "\u524d\u5929";
                    else {
                        var l = ("00" + (t.getMonth() + 1)).substr(-2),
                            u = ("00" + t.getDate()).substr(-2),
                            d = t.getFullYear();
                        r = (new Date).getFullYear() == d ? "".concat(l, "-").concat(u) : "".concat(d, "-").concat(l, "-").concat(u)
                    }
                }
                return r
            }
        },
        a1zH: function(e, t, n) {
            var a = n("y4QH"),
                o = n("MMiu"),
                r = n("t2dP"),
                i = n("EldB"),
                s = n("5sOR"),
                c = n("V9aw"),
                l = n("pzgU"),
                u = n("6KkN"),
                d = n("Kz5y"),
                p = 1,
                f = 2,
                m = 8,
                h = 16,
                g = 128,
                b = 512;
            e.exports = function e(t, n, v, x, w, y, j, k, O, _) {
                var C = n & g,
                    S = n & p,
                    E = n & f,
                    N = n & (m | h),
                    M = n & b,
                    T = E ? void 0 : i(t);
                return function p() {
                    for (var f = arguments.length, m = Array(f), h = f; h--;) m[h] = arguments[h];
                    if (N) var g = c(p),
                        b = r(m, g);
                    if (x && (m = a(m, x, w, N)), y && (m = o(m, y, j, N)), f -= b, N && f < _) {
                        var I = u(m, g);
                        return s(t, n, e, p.placeholder, v, m, I, k, O, _ - f)
                    }
                    var L = S ? v : this,
                        D = E ? L[t] : t;
                    return f = m.length, k ? m = l(m, k) : M && f > 1 && m.reverse(), C && O < f && (m.length = O), this && this !== d && this instanceof p && (D = T || i(D)), D.apply(L, m)
                }
            }
        },
        a5q3: function(e, t, n) {
            var a = n("Of+w"),
                o = a && new a;
            e.exports = o
        },
        afOK: function(e, t, n) {
            e.exports = n("pZt1")
        },
        aiSq: function(e, t, n) {
            var a = n("ut/Y"),
                o = n("W6/K");
            e.exports = function(e, t, n) {
                return e && e.length && t && t.length ? o(e, t, a(n, 2)) : e
            }
        },
        bQgK: function(e, t, n) {
            (function(t) {
                (function() {
                    var n, a, o, r, i, s;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now()
                    } : null != t && t.hrtime ? (e.exports = function() {
                        return (n() - i) / 1e6
                    }, a = t.hrtime, r = (n = function() {
                        var e;
                        return 1e9 * (e = a())[0] + e[1]
                    })(), s = 1e9 * t.uptime(), i = r - s) : Date.now ? (e.exports = function() {
                        return Date.now() - o
                    }, o = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - o
                    }, o = (new Date).getTime())
                }).call(this)
            }).call(this, n("8oxB"))
        },
        be4H: function(e, t, n) {
            var a = n("6T1N"),
                o = n("xs/l"),
                r = o((function(e, t) {
                    return a(e, 256, void 0, void 0, void 0, t)
                }));
            e.exports = r
        },
        cUzr: function(e, t, n) {
            var a = n("heNW"),
                o = n("CH3K"),
                r = n("EA7m"),
                i = n("wy8a"),
                s = n("Sxd8"),
                c = "Expected a function",
                l = Math.max;
            e.exports = function(e, t) {
                if ("function" != typeof e) throw new TypeError(c);
                return t = null == t ? 0 : l(s(t), 0), r((function(n) {
                    var r = n[t],
                        s = i(n, 0, t);
                    return r && o(s, r), a(e, this, s)
                }))
            }
        },
        cq4s: function(e, t, n) {
            var a = n("Sxd8"),
                o = "Expected a function";
            e.exports = function(e, t) {
                if ("function" != typeof t) throw new TypeError(o);
                return e = a(e),
                    function() {
                        if (--e < 1) return t.apply(this, arguments)
                    }
            }
        },
        dI71: function(e, t, n) {
            "use strict";

            function a(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        dQpi: function(e, t, n) {
            var a = n("yGk4"),
                o = n("vN+2"),
                r = n("rEGp"),
                i = a && 1 / r(new a([, -0]))[1] == 1 / 0 ? function(e) {
                    return new a(e)
                } : o;
            e.exports = i
        },
        dSNf: function(e, t, n) {
            var a = n("KwMD"),
                o = n("2ajD"),
                r = n("LCKm"),
                i = n("Sxd8"),
                s = Math.max,
                c = Math.min;
            e.exports = function(e, t, n) {
                var l = null == e ? 0 : e.length;
                if (!l) return -1;
                var u = l;
                return void 0 !== n && (u = (u = i(n)) < 0 ? s(l + u, 0) : c(u, l - 1)), t == t ? r(e, t, u) : a(e, o, u, !0)
            }
        },
        enmc: function(e, t, n) {
            var a = n("KxBF");
            e.exports = function(e) {
                return (null == e ? 0 : e.length) ? a(e, 0, -1) : []
            }
        },
        f5xI: function(e, t, n) {
            var a = n("S7Xf"),
                o = n("wJg7"),
                r = Array.prototype.splice;
            e.exports = function(e, t) {
                for (var n = e ? t.length : 0, i = n - 1; n--;) {
                    var s = t[n];
                    if (n == i || s !== c) {
                        var c = s;
                        o(s) ? r.call(e, s, 1) : a(e, s)
                    }
                }
                return e
            }
        },
        fP2x: function(e, t, n) {
            "use strict";

            function a() {
                var e = !1;
                e || (e = "wifi" === (navigator.connection || navigator.mozConnection || navigator.webkitConnection || {}).type);
                if (!e) {
                    var t = (window.navigator || {}).userAgent;
                    t && (e = /NetType\/WIFI/i.test(t))
                }
                e || window.mqq && window.mqq.device && "function" == typeof window.mqq.device.getNetworkType && (e = 1 === window.mqq.device.getNetworkType((function(e) {
                    return e
                })));
                return e
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        fTgM: function(e, t, n) {
            "use strict";
            var a = n("ln6h"),
                o = n.n(a),
                r = n("doui"),
                i = n("UXZV"),
                s = n.n(i),
                c = n("O40h"),
                l = n("eVuF"),
                u = n.n(l),
                d = n("Rj/o"),
                p = n("+sCI");
            t.a = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.areaId,
                    n = e.fetchOptions;
                return new u.a(function() {
                    var e = Object(c.a)(o.a.mark((function e(a, i) {
                        var c;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 3, d.a.getLocationInfo();
                                case 3:
                                    c = e.sent, t = c.py, e.next = 8;
                                    break;
                                case 7:
                                    c = d.a.getLocationInfoByPy(t);
                                case 8:
                                    t || i(), Object(p.a)(s()({
                                        url: "//pacaio.match.qq.com/irs/rcd",
                                        params: {
                                            cid: "158",
                                            token: "da204eeafecad1ae86c8aebd84f60cdd",
                                            id: "",
                                            ext: c.irs
                                        },
                                        offset: 0,
                                        count: 20,
                                        noExpIds: !0
                                    }, n)).then((function(e) {
                                        var t = Object(r.a)(e, 1)[0];
                                        a([t, c])
                                    })).catch((function(e) {
                                        i(e)
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())
            }
        },
        fbhf: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.dumpClassLists = function() {
                0
            };
            var a = {},
                o = {};
            t.add = function(e, t) {
                return n = e.classList, r = "html" == e.nodeName.toLowerCase() ? a : o, void t.split(" ").forEach((function(e) {
                    ! function(e, t) {
                        e[t] || (e[t] = 0), e[t] += 1
                    }(r, e), n.add(e)
                }));
                var n, r
            }, t.remove = function(e, t) {
                return n = e.classList, r = "html" == e.nodeName.toLowerCase() ? a : o, void t.split(" ").forEach((function(e) {
                    ! function(e, t) {
                        e[t] && (e[t] -= 1)
                    }(r, e), 0 === r[e] && n.remove(e)
                }));
                var n, r
            }
        },
        gFQe: function(e, t, n) {
            var a = n("EA7m");
            e.exports = a
        },
        gLAU: function(e, t, n) {
            var a = n("SmhD"),
                o = n("EA7m")((function(e, t) {
                    return a(e, 1, t)
                }));
            e.exports = o
        },
        gWQk: function(e, t, n) {
            var a = n("FZoo"),
                o = n("1w02");
            e.exports = function(e, t) {
                return o(e || [], t || [], a)
            }
        },
        gYoz: function(e, t, n) {
            var a = n("ut/Y"),
                o = n("xpk8");
            e.exports = function(e, t, n) {
                return o(e, t, a(n, 2), !0)
            }
        },
        guND: function(e, t, n) {
            n("PczM"), e.exports = n("p9MR").Date.now
        },
        gvKm: function(e, t, n) {
            var a = n("Sxd8"),
                o = n("4WeC");
            e.exports = function(e, t, n, r) {
                var i = e.length;
                for ((n = a(n)) < 0 && (n = -n > i ? 0 : i + n), (r = void 0 === r || r > i ? i : a(r)) < 0 && (r += i), r = n > r ? 0 : o(r); n < r;) e[n++] = t;
                return e
            }
        },
        gzMX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return w
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("AT/M"),
                c = n("Tit0"),
                l = n("vYYK"),
                u = n("MX0m"),
                d = n.n(u),
                p = n("q1tI"),
                f = n.n(p),
                m = n("9rZX"),
                h = n.n(m),
                g = n("Dv1A"),
                b = n("dV6L"),
                v = n("Cs1F"),
                x = f.a.createElement,
                w = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(l.a)(Object(s.a)(n), "chooseReason", (function() {
                            n.closeModal(!0)
                        })), Object(l.a)(Object(s.a)(n), "handleTucao", (function() {
                            var e = n.props.feedbackUrl || n.state.feedbackUrl;
                            window.location.href = e
                        })), n.state = {
                            step: 1,
                            modalIsOpen: n.props.modalIsOpen,
                            feedbackUrl: "//support.qq.com/products/14842"
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function(e) {
                            this.setState({
                                modalIsOpen: e.modalIsOpen
                            })
                        }
                    }, {
                        key: "closeModal",
                        value: function(e) {
                            this.setState({
                                modalIsOpen: !1,
                                step: 1
                            }), this.props.unlikeCallback && this.props.unlikeCallback(e)
                        }
                    }, {
                        key: "nextStep",
                        value: function(e) {
                            this.setState({
                                step: 2,
                                step2type: e
                            })
                        }
                    }, {
                        key: "prevStep",
                        value: function() {
                            this.setState({
                                step: 1
                            })
                        }
                    }, {
                        key: "handleBlock",
                        value: function(e) {
                            e && this.nextStep("block")
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(v.a)(),
                                t = b.a.getUserAgentForWebview(),
                                n = b.a.getUserAgent();
                            if ("mobileqq" == e && "mqq" == t) {
                                var a = "//support.qq.com/products/41098";
                                n.android && (a = "//support.qq.com/product/63027"), this.setState({
                                    feedbackUrl: a
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.tag,
                                a = void 0 === n ? [] : n,
                                o = t.category_cn_name,
                                r = t.id;
                            a = a.slice(0, 2);
                            var i = [];
                            a.map((function(e) {
                                i.push(e.tag_name)
                            })), o && i.push(o);
                            var s = i.join("\u3001") || "";
                            return x("div", {
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation()
                                },
                                className: "jsx-30085487"
                            }, x(h.a, {
                                ariaHideApp: !1,
                                isOpen: this.state.modalIsOpen,
                                onRequestClose: function(t) {
                                    e.closeModal(!1, t)
                                },
                                className: "feedbackModal",
                                overlayClassName: "feedbackOverlay"
                            }, x("div", {
                                style: {
                                    display: 1 == this.state.step ? "block" : "none"
                                },
                                className: "jsx-30085487 innermodal"
                            }, x("ul", {
                                className: "jsx-30085487 reason"
                            }, x("li", {
                                onClick: this.nextStep.bind(this, "content"),
                                className: "jsx-30085487 content"
                            }, x("div", {
                                className: "jsx-30085487 tit"
                            }, "\u5185\u5bb9\u95ee\u9898"), x("div", {
                                className: "jsx-30085487"
                            }, "\u6807\u9898\u515a\u3001\u8f6f\u6587\u7b49"), x("div", {
                                className: "jsx-30085487 more"
                            })), x("li", {
                                onClick: this.handleBlock.bind(this, s),
                                className: "jsx-30085487 tag"
                            }, x("div", {
                                className: "jsx-30085487 tit"
                            }, "\u5c4f\u853d"), s ? x(f.a.Fragment, null, x("div", {
                                className: "jsx-30085487"
                            }, s), x("div", {
                                className: "jsx-30085487 more"
                            })) : x("div", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=shield&articleid=".concat(r, "&modular=dislike"),
                                className: "jsx-30085487"
                            }, "\u5c4f\u853d\u6b64\u7bc7\u6587\u7ae0")), this.props.src && x("li", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=author:".concat(this.props.author_id || "", "&articleid=").concat(r, "&modular=dislike"),
                                className: "jsx-30085487 author"
                            }, x("div", {
                                className: "jsx-30085487 tit"
                            }, "\u62c9\u9ed1\u4f5c\u8005:", this.props.src), x("div", {
                                className: "jsx-30085487"
                            }, "\u4e0d\u518d\u663e\u793a\u6b64\u4f5c\u8005\u8d44\u8baf")), x("li", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=default&articleid=".concat(r, "&modular=dislike"),
                                className: "jsx-30085487 noreason"
                            }, x("div", {
                                className: "jsx-30085487 tit"
                            }, "\u4e0d\u611f\u5174\u8da3"), x("div", {
                                className: "jsx-30085487"
                            }, "\u51cf\u5c11\u6b64\u7c7b\u5185\u5bb9\u63a8\u8350"))), x(g.a, null), x("div", {
                                onClick: this.closeModal.bind(this, !1),
                                "data-boss": "cancel&articleid=".concat(this.props.id, "&modular=dislike"),
                                className: "jsx-30085487 submit"
                            }, "\u53d6\u6d88")), x("div", {
                                style: {
                                    display: 2 == this.state.step ? "block" : "none"
                                },
                                className: "jsx-30085487 modalstep2"
                            }, x("div", {
                                className: "jsx-30085487 reasontxt"
                            }, x("span", {
                                onClick: this.prevStep.bind(this),
                                className: "jsx-30085487"
                            }), "block" == this.state.step2type ? "\u5c4f\u853d" : "\u9009\u62e9\u7406\u7531"), x("ul", {
                                className: "jsx-30085487 reason"
                            }, "block" == this.state.step2type ? x(f.a.Fragment, null, a.map((function(t, n) {
                                return x("li", {
                                    key: n,
                                    className: "jsx-30085487"
                                }, x("span", {
                                    onClick: e.chooseReason,
                                    "data-boss": "submit&dislike=tag:".concat(t.tag_id || "", "&articleid=").concat(r, "&modular=dislike"),
                                    className: "jsx-30085487"
                                }, "\u5c4f\u853d: ", t.tag_name))
                            })), o && x("li", {
                                className: "jsx-30085487"
                            }, x("span", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=category:".concat(this.props.category_id || "", "&articleid=").concat(r, "&modular=dislike"),
                                className: "jsx-30085487"
                            }, "\u5c4f\u853d: \u201c", o, "\u201d\u5206\u7c7b")), x("li", {
                                className: "jsx-30085487"
                            }, x("a", {
                                onClick: this.handleTucao,
                                "data-boss": "submit&dislike=debunk&articleid=".concat(this.props.id, "&modular=dislike"),
                                className: "jsx-30085487 fb"
                            }, "\u6211\u8981\u5410\u69fd"))) : x(f.a.Fragment, null, x("li", {
                                className: "jsx-30085487"
                            }, x("span", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=quality:5&articleid=".concat(r, "&modular=dislike"),
                                className: "jsx-30085487"
                            }, "\u4f4e\u4fd7\u8272\u60c5")), x("li", {
                                className: "jsx-30085487"
                            }, x("span", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=quality:2&articleid=".concat(r, "&modular=dislike"),
                                className: "jsx-30085487"
                            }, "\u6807\u9898\u515a")), x("li", {
                                className: "jsx-30085487"
                            }, x("span", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=quality:4&articleid=".concat(r, "&modular=dislike"),
                                className: "jsx-30085487"
                            }, "\u5185\u5bb9\u4e0d\u5b9e")), x("li", {
                                className: "jsx-30085487"
                            }, x("span", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=quality:8&articleid=".concat(r, "&modular=dislike"),
                                className: "jsx-30085487"
                            }, "\u65e7\u6587\u91cd\u590d")), x("li", {
                                className: "jsx-30085487"
                            }, x("span", {
                                onClick: this.chooseReason,
                                "data-boss": "submit&dislike=quality:6&articleid=".concat(r, "&modular=dislike"),
                                className: "jsx-30085487"
                            }, "\u8f6f\u6587\u3001\u5783\u573e\u5185\u5bb9"))), x(g.a, null), x("div", {
                                onClick: this.closeModal.bind(this, !1),
                                "data-boss": "cancel&articleid=".concat(this.props.id, "&modular=dislike"),
                                className: "jsx-30085487 submit"
                            }, "\u53d6\u6d88")))), x(d.a, {
                                id: "592644138"
                            }, [".feedbackModal{position:absolute;width:100%;left:0;bottom:0;background-color:#fff;outline:none;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);}", ".feedbackOverlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.24);z-index:12;}"]), x(d.a, {
                                id: "3307324716"
                            }, [".reason.jsx-30085487{overflow:hidden;}", ".innermodal.jsx-30085487 li.jsx-30085487{color:#828C9B;height:70px;line-height:16px;padding:11px 15px;font-size:12px;overflow:hidden;position:relative;}", ".innermodal.jsx-30085487 li.jsx-30085487 .tit.jsx-30085487{line-height:24px;font-size:16px;margin:2px 0 3px;color:#222;}", ".innermodal.jsx-30085487 li.jsx-30085487::before{background:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/article-fb-content.svg) center no-repeat;width:48px;height:48px;content:'';display:block;float:left;margin-right:12px;background-size:contain;}", ".innermodal.jsx-30085487 li.jsx-30085487 .more.jsx-30085487{background:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/newui/flash-gray-arrow.svg) center no-repeat;background-size:contain;width:16px;height:16px;position:absolute;right:12px;top:27px;}", ".fb.jsx-30085487::before{content:'';background:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/article-fb-gray.svg) center no-repeat;background-size:contain;width:24px;height:24px;display:inline-block;vertical-align:middle;margin-right:9px;}", ".reasontxt.jsx-30085487 span.jsx-30085487{position:absolute;width:24px;height:24px;top:10px;left:9px;background:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/newui/flash-gray-arrow.svg) center no-repeat;background-size:contain;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}", ".innermodal.jsx-30085487 li.tag.jsx-30085487::before{background-image:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/article-fb-tag.svg);}", ".innermodal.jsx-30085487 li.author.jsx-30085487::before{background-image:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/article-fb-author.svg);}", ".innermodal.jsx-30085487 li.noreason.jsx-30085487::before{background-image:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/article-fb-unlike.svg);}", ".reasontxt.jsx-30085487{color:#828C9B;font-size:14px;margin-bottom:18px;position:relative;}", ".modalstep2.jsx-30085487 .reasontxt.jsx-30085487{text-align:center;height:44px;line-height:44px;margin:0;color:#222;font-size:18px;}", ".modalstep2.jsx-30085487 li.jsx-30085487{font-size:16px;height:45px;overflow:hidden;position:relative;}", ".modalstep2.jsx-30085487 li.jsx-30085487::before,.innermodal.jsx-30085487 li.jsx-30085487::after{content:'';display:block;height:1px;background:#F0F0F0;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);position:absolute;left:15px;right:15px;top:0;}", ".innermodal.jsx-30085487 li.jsx-30085487::after{top:auto;bottom:0;}", ".modalstep2.jsx-30085487 li.jsx-30085487 span.jsx-30085487,.fb.jsx-30085487{position:relative;color:#222;height:45px;line-height:45px;padding-left:15px;display:block;-webkit-text-decoration:none;text-decoration:none;}", ".submit.jsx-30085487{height:50px;line-height:50px;color:#222;font-size:18px;text-align:center;}", ".closeicon.jsx-30085487{background:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/fb_icon_close.svg) no-repeat center;width:24px;height:24px;position:absolute;top:15px;right:12px;}"]))
                        }
                    }]), t
                }(p.Component)
        },
        hLC8: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            }));
            var a = n("UXZV"),
                o = n.n(a),
                r = n("doui"),
                i = n("ln6h"),
                s = n.n(i),
                c = n("O40h"),
                l = n("0iUn"),
                u = n("sLSF"),
                d = n("MI3g"),
                p = n("a7VT"),
                f = n("AT/M"),
                m = n("Tit0"),
                h = n("vYYK"),
                g = n("MX0m"),
                b = n.n(g),
                v = n("q1tI"),
                x = n.n(v),
                w = n("ob4f"),
                y = n("RotF"),
                j = n.n(y),
                k = n("62Vo"),
                O = n("hnLT"),
                _ = n("NpjF"),
                C = n("rlRc"),
                S = n("Dl2F"),
                E = n("CZ8k"),
                N = n("+sCI"),
                M = n("HXQy"),
                T = n("Gy9X"),
                I = n("LEpJ"),
                L = x.a.createElement,
                D = M.TYPE_CODES.VIDEO,
                A = function(e) {
                    function t(e) {
                        var n;
                        return Object(l.a)(this, t), n = Object(d.a)(this, Object(p.a)(t).call(this, e)), Object(h.a)(Object(f.a)(n), "handleNegativeFeedback", (function(e) {
                            n.props.showNotification("\u5c06\u4e3a\u60a8\u51cf\u5c11\u6b64\u7c7b\u63a8\u8350")
                        })), Object(h.a)(Object(f.a)(n), "handleRefresh", Object(c.a)(s.a.mark((function e() {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n.loadRcdNews({
                                            prepend: !0
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), Object(h.a)(Object(f.a)(n), "loadRcdNews", (function(e) {
                            var t = e.prepend,
                                a = void 0 !== t && t;
                            if (!n.isLoading) {
                                var o = n.props,
                                    i = o.solidExpIds,
                                    s = o.autoLoadPagesPreClick,
                                    c = void 0 === s ? 3 : s,
                                    l = o.articleIndexOffset,
                                    u = void 0 === l ? 0 : l,
                                    d = o.numPrePage,
                                    p = void 0 === d ? 10 : d,
                                    f = n.state,
                                    m = f.newsList,
                                    h = f.readTipsIndex;
                                n.isLoading = !0, n.setState({
                                    loading: !0
                                });
                                Object(N.a)({
                                    url: "//pacaio.match.qq.com/xw/topNews",
                                    params: {},
                                    useRefreshAsPage: !0,
                                    numPerRequest: 10,
                                    offset: n.currentPage * p + u,
                                    count: p,
                                    solidExpIds: i
                                }).then((function(e) {
                                    var t = Object(r.a)(e, 2),
                                        o = t[0],
                                        i = t[1];
                                    if (0 !== n.currentPage || o && 0 !== o.length) {
                                        var s;
                                        if (n.currentPage += 1, n._mounted) a ? (s = o.concat(m), h = o.length, window.scrollTo(0, 0)) : s = m.concat(o), n.setState({
                                            newsList: s,
                                            readTipsIndex: h,
                                            newsMeta: i,
                                            hasMore: o.length > 0 && c > 1 && n.currentPage % c != 0,
                                            loading: !1
                                        });
                                        n.isLoading = !1
                                    } else n.setState({
                                        dataErr: !0
                                    })
                                })).catch((function(e) {
                                    n.isLoading = !1, n.setState({
                                        hasMore: !1,
                                        loading: !1
                                    }), console && console.log("data load error", e)
                                }))
                            }
                        })), Object(h.a)(Object(f.a)(n), "handleLoadMore", (function() {
                            n.loadRcdNews({}), n.setState({
                                hasLoadMore: !0,
                                more: o()({
                                    text: "\u8fdb\u5165\u63a8\u8350\u9891\u9053",
                                    url: "#recommend",
                                    boss: "jrpd"
                                }, n.props.moreLink || {})
                            })
                        })), n.state = {
                            newsList: [],
                            newsMeta: {},
                            hasMore: !0,
                            dataErr: !1,
                            loading: !1,
                            more: {
                                text: "\u52a0\u8f7d\u66f4\u591a",
                                boss: "more"
                            },
                            readTipsIndex: -1
                        }, n.currentPage = 0, n.isLoading = !1, n
                    }
                    var n;
                    return Object(m.a)(t, e), Object(u.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(c.a)(s.a.mark((function e() {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this._mounted = !0;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._mounted = !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.newsList,
                                n = e.more,
                                a = e.hasLoadMore,
                                o = e.loading,
                                r = e.newsMeta,
                                i = e.hasMore,
                                s = e.readTipsIndex,
                                c = this.props,
                                l = c.title,
                                u = c.diaocha,
                                d = c.yunying,
                                p = c.adChannel,
                                f = c.qudao,
                                m = c.displayMode,
                                h = c.noAppStuffs,
                                g = c.bossModular,
                                x = void 0 === g ? "feeds" : g,
                                y = c.ignoreSkin,
                                N = this.props.infiniteInitialLoad,
                                M = void 0 === N || N;
                            t = t.slice(0);
                            var A = null,
                                q = u.length && Number(u[0].station) || 0;
                            if (t.length > q && q > 0) {
                                var P = u[0];
                                A = L("div", {
                                    index: q
                                }, L(T.a, {
                                    data: {
                                        title: P.title,
                                        url: P.hrefurl,
                                        image: P.picurl,
                                        source: P.source || "\u9177\u9e45\u7528\u6237\u7814\u7a76\u9662"
                                    },
                                    bossClick: "survey_click&modular=survey",
                                    bossExpo: "survey_click&modular=survey"
                                }))
                            }
                            var F = null,
                                z = d.length && Number(d[0].station) || 0;
                            if (t.length > z && z > 0) {
                                var R = d[0],
                                    U = null;
                                U = R.mtitle ? L(T.a, {
                                    data: {
                                        title: R.mtitle,
                                        url: R.morelink,
                                        image: R.banner,
                                        source: R.msource || "",
                                        titleLabels: [{
                                            style: {
                                                backgroundColor: "rgb(76, 126, 255)"
                                            },
                                            text: "\u4e13\u9898"
                                        }]
                                    },
                                    bossClick: "article&modular=business",
                                    bossExpo: "article&modular=business"
                                }) : L(I.a, {
                                    key: "insert-315",
                                    data: {
                                        banner: R.banner || "",
                                        bgcolor: R.bgcolor || "",
                                        img: R.picurl,
                                        link: R.hrefurl,
                                        title: R.title,
                                        moredesc: R.moredesc,
                                        morelink: R.morelink,
                                        source: R.source
                                    },
                                    bossClickArticle: "article&modular=business",
                                    bossExpo: "article&modular=business",
                                    bossClickMore: "more&modular=business"
                                }), F = L("div", {
                                    index: z
                                }, U)
                            }
                            for (var Y = function(e) {
                                    var n = (e - 4) / 5;
                                    t.splice(e, 0, {
                                        type: "custom",
                                        id: "ad_".concat(n),
                                        Element: L(w.a, {
                                            triggerOnce: !0,
                                            rootMargin: "0px 0px 300px 0px"
                                        }, (function(e) {
                                            var t = e.inView,
                                                a = e.ref;
                                            return L("div", {
                                                ref: a
                                            }, t ? L(E.a, {
                                                channel: p || "homepage",
                                                index: n,
                                                moduleId: "m_tuijian"
                                            }) : null)
                                        }))
                                    })
                                }, B = 4; B < t.length; B += 5) Y(B);
                            return this.state.dataErr ? null : L(v.Fragment, null, L(_.a, {
                                name: "feeds",
                                title: l,
                                more: o ? null : {
                                    text: n.text,
                                    boss: n.boss,
                                    url: a ? n.url : null,
                                    onClick: a ? null : this.handleLoadMore,
                                    arrowDir: a ? "right" : "down"
                                },
                                style: {
                                    minHeight: "5rem"
                                },
                                ignoreSkin: y
                            }, L(j.a, {
                                pageStart: 0,
                                initialLoad: M,
                                loadMore: this.loadRcdNews,
                                hasMore: i,
                                loader: L(O.a, {
                                    key: 0
                                })
                            }, L(k.a, {
                                data: t,
                                handleNegativeFeedback: this.handleNegativeFeedback,
                                modular: x,
                                dataMeta: r,
                                dataProcess: function(e) {
                                    e.type === D && (e.props.handleNegativeFeedback = null)
                                },
                                displayMode: m
                            }, -1 === ["mobileqq", "sxs", "sxbrowser"].indexOf(f) && !h && L(S.a, {
                                index: 15,
                                hasBottomBorder: !0
                            }), s > 0 && L(C.a, {
                                index: s,
                                clickHandler: this.handleRefresh
                            }), A, F))), L(b.a, {
                                id: "4107177824"
                            }, [".title.jsx-4107177824{height:0.2rem;line-height:0.2rem;margin-top:0.24rem;margin-bottom:0.09rem;overflow:hidden;font-size:0px;}", ".title.jsx-4107177824 img.jsx-4107177824{height:0.2rem;}", ".title.jsx-4107177824:before{float:left;content:'';width:0.12rem;height:0.2rem;margin-right:0.12rem;background:rgba(76,126,255,1);border-radius:0rem 0.02rem 0.02rem 0rem;}"]))
                        }
                    }]), t
                }(v.Component)
        },
        hxiM: function(e, t, n) {
            var a = n("XGnz"),
                o = n("ut/Y"),
                r = n("EA7m"),
                i = n("LGYb"),
                s = n("3L66"),
                c = n("RBan"),
                l = r((function(e) {
                    var t = c(e);
                    return s(t) && (t = void 0), i(a(e, 1, s, !0), o(t, 2))
                }));
            e.exports = l
        },
        hzCD: function(e, t, n) {
            var a = n("EA7m")(n("0Q2g"));
            e.exports = a
        },
        iKBj: function(e, t, n) {
            "use strict";
            t.a = {
                articleItem: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = {};
                    n.articleid = e.aid || e.id, n.category = e.category_id, n.category2 = e.category2_id, n.category_ori = e.category, n.ctr_score = e.ctr_score || "", n.news_level = e.news_level || "", n.s_from = e.from, n.strategy_pos = e.strategy_pos, n.strategy_score = e.strategy_score, n.vid = 3 === e.article_type ? e.id : "", n.s_order = void 0 !== t ? "" + t : "", n.articletype = void 0 !== e.atype ? e.atype.toString() : void 0 !== e.article_type ? e.article_type.toString() : void 0 !== e.articletype ? e.articletype.toString() : "", ["duration", "img_count", "pool_type", "strategy", "source_id"].forEach((function(t) {
                        n[t] = e[t]
                    }));
                    var a = [];
                    for (var o in n) n.hasOwnProperty(o) && a.push("".concat(o, "=").concat(encodeURIComponent(n[o] || "")));
                    return a.join("&")
                }
            }
        },
        iNUw: function(e, t, n) {
            "use strict";
            var a = n("UXZV"),
                o = n.n(a),
                r = n("eVuF"),
                i = n.n(r),
                s = n("SKe7"),
                c = ["survey-edit", "module-edit", "popup-edit", "push-edit"],
                l = {
                    obj_survery: [],
                    obj_promotion: [],
                    obj_kaipin: [],
                    obj_push: []
                },
                u = [{
                    name: "\u6a21\u677f\u4e00",
                    temp: ""
                }, {
                    name: "\u6a21\u677f\u4e8c",
                    temp: "two"
                }, {
                    name: "\u6a21\u677f\u4e09",
                    temp: "three"
                }, {
                    name: "\u6a21\u677f\u56db",
                    temp: "four"
                }, {
                    name: "\u6a21\u677f\u4e94",
                    temp: "five"
                }],
                d = [{
                    name: "\u4e3b\u7ad9",
                    order: "default"
                }, {
                    name: "\u624bQ",
                    order: "mobileqq"
                }, {
                    name: "iPad",
                    order: "ipadqq.ak"
                }, {
                    name: "iPadPush",
                    order: "ipadqq.push"
                }],
                p = {
                    "24\u5c0f\u65f6": "24h",
                    "\u4f53\u80b2": "sports",
                    "\u8d22\u7ecf": "finance",
                    NBA: "nba",
                    "\u5a31\u4e50": "ent",
                    "\u6c11\u751f": "shehui",
                    "\u79d1\u6280": "tech",
                    "\u6c7d\u8f66": "auto",
                    "\u519b\u4e8b": "mil",
                    "\u56fe\u7247": "picture",
                    "\u5973\u6027": "women",
                    "\u6e38\u620f": "games",
                    "\u79d1\u5b66": "science",
                    "\u7b11\u8bdd": "fun",
                    "\u661f\u5ea7": "astro",
                    "\u8d44\u8baf\u6d41": "news"
                };
            t.a = function(e) {
                var t = e.sid,
                    n = e.qudao,
                    a = e.contentid,
                    r = e.channelname;
                return new i.a((function(e) {
                    t = t || "5ca5b507", Object(s.a)(t).then((function(i) {
                        l = {
                            obj_survery: [],
                            obj_promotion: [],
                            obj_kaipin: [],
                            obj_push: []
                        }, a.length || (a = "5ca5b507" === t ? [1, 2, 3] : [0]);
                        var s = a.length,
                            f = (new Date).getTime();
                        a.map((function(t, a) {
                            var m = i[c[t]];
                            m.length && m.map((function(e) {
                                if ("\u624bQ\u9996\u9875" === r) {
                                    var a = [];
                                    e.channel.length && e.channel.map((function(t, n) {
                                        t.indexOf("\u624bQ\u9996\u9875") >= 0 && (a.push(p[t.substr(5)]), e.channel[n] = "\u624bQ\u9996\u9875")
                                    })), e.homemodulename = a
                                }
                                if ("\u65b0\u7248\u9996\u9875" === r) {
                                    var s = [];
                                    e.channel.length && e.channel.map((function(t, n) {
                                        t.indexOf("\u65b0\u7248\u9996\u9875") >= 0 && (s.push(p[t.substr(5)]), e.channel[n] = "\u65b0\u7248\u9996\u9875")
                                    })), e.homemodulename = s
                                }
                                var c, m, h, g = e.channel.indexOf(r),
                                    b = new Date(e.starttime.replace(/-/g, "/").replace(/T/g, " ")).getTime(),
                                    v = new Date(e.endtime.replace(/-/g, "/").replace(/T/g, " ")).getTime(),
                                    x = f < v && b < f,
                                    w = !1;
                                if (d.map((function(t) {
                                        e.scene.indexOf(t.name) >= 0 && t.order === n && (w = !0)
                                    })), g >= 0 && x && w) switch (t) {
                                    case 0:
                                        l.obj_survery.push(e);
                                        break;
                                    case 1:
                                        l.obj_promotion.push((m = i, h = {}, (c = e).labour ? m["labour-edit"].length && m["labour-edit"].map((function(e) {
                                            if (e.labour === c.labour) return h = o()({
                                                hrefurl: e.hrefurl,
                                                picurl: e.picurl,
                                                source: e.source,
                                                title: e.title
                                            }, c), !1
                                        })) : m["keyword-edit"].length && m["keyword-edit"].map((function(e) {
                                            if (e.keyword === c.machine) return h = o()({
                                                keyword1: e.keyword1,
                                                keyword2: e.keyword2
                                            }, c), !1
                                        })), u.map((function(e) {
                                            e.name === c.template && m["templatestyle-edit".concat(e.temp)].map((function(e) {
                                                if (e.templatestyle === c.templatestyle) return h = o()({
                                                    banner: e.banner || "",
                                                    bgcolor: e.bgcolor || "",
                                                    moredesc: e.moredesc || "",
                                                    morelink: e.morelink || "",
                                                    mtitle: e.mtitle || "",
                                                    msource: e.msource || ""
                                                }, h, c), !1
                                            }))
                                        })), h));
                                        break;
                                    case 2:
                                        l.obj_kaipin.push(e);
                                        break;
                                    case 3:
                                        l.obj_push.push(e)
                                }
                            })), a + 1 === s && e(l)
                        }))
                    }))
                }))
            }
        },
        ieoY: function(e, t, n) {
            var a = n("EldB"),
                o = n("Kz5y"),
                r = 1;
            e.exports = function(e, t, n) {
                var i = t & r,
                    s = a(e);
                return function t() {
                    return (this && this !== o && this instanceof t ? s : e).apply(i ? n : this, arguments)
                }
            }
        },
        j2Dk: function(e, t, n) {
            var a = n("KxBF");
            e.exports = function(e, t, n, o) {
                for (var r = e.length, i = o ? r : -1;
                    (o ? i-- : ++i < r) && t(e[i], i, e););
                return n ? a(e, o ? 0 : i, o ? i + 1 : r) : a(e, o ? i + 1 : 0, o ? r : i)
            }
        },
        "jbM+": function(e, t, n) {
            var a = n("R/W3");
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && a(e, t, 0) > -1
            }
        },
        kBl3: function(e, t, n) {
            var a = n("LXxW"),
                o = n("ut/Y"),
                r = n("EA7m"),
                i = n("7cXV"),
                s = n("3L66"),
                c = n("RBan"),
                l = r((function(e) {
                    var t = c(e);
                    return s(t) && (t = void 0), i(a(e, s), o(t, 2))
                }));
            e.exports = l
        },
        kSD8: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return h
            })), n.d(t, "a", (function() {
                return g
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("Tit0"),
                c = n("MX0m"),
                l = n.n(c),
                u = n("q1tI"),
                d = n.n(u),
                p = n("PIAq"),
                f = n("zCEa"),
                m = d.a.createElement,
                h = function(e) {
                    function t(e) {
                        return Object(a.a)(this, t), Object(r.a)(this, Object(i.a)(t).call(this, e))
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.children,
                                a = e.disableLazyImage,
                                o = t.title,
                                r = t.images,
                                i = t.titleLabels;
                            return m(u.Fragment, null, m(p.a, {
                                title: o,
                                style: {
                                    marginBottom: "0.06rem"
                                },
                                labels: i
                            }), m(g, {
                                images: r,
                                disableLazyImage: a
                            }), n, m(l.a, {
                                id: "903154409"
                            }, [".info.jsx-903154409{position:relative;top:-0.03rem;min-height:0.72rem;}"]))
                        }
                    }]), t
                }(u.PureComponent);

            function g(e) {
                var t = e.images,
                    n = e.disableLazyImage;
                return m(u.Fragment, null, m("div", {
                    className: "jsx-4152356206 images"
                }, t.map((function(e, t) {
                    return t < 3 && m("div", {
                        key: t,
                        className: "jsx-4152356206 image-item"
                    }, m(f.a, {
                        image: e,
                        disableLazyImage: n
                    }))
                })), m(l.a, {
                    id: "4152356206"
                }, [".images.jsx-4152356206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:relative;overflow:hidden;margin-bottom:0.06rem;}", ".image-item.jsx-4152356206{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;overflow:hidden;pointer-events:none;border-radius:0.03rem;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}", ".images.jsx-4152356206 .image-item.jsx-4152356206+.image-item.jsx-4152356206{margin-left:0.05rem;}"])))
            }
        },
        kcif: function(e, t, n) {
            var a = n("KxBF"),
                o = n("mv/X"),
                r = n("Sxd8"),
                i = Math.ceil,
                s = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? o(e, t, n) : void 0 === t) ? 1 : s(r(t), 0);
                var c = null == e ? 0 : e.length;
                if (!c || t < 1) return [];
                for (var l = 0, u = 0, d = Array(i(c / t)); l < c;) d[u++] = a(e, l, l += t);
                return d
            }
        },
        lBdf: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("AT/M"),
                c = n("Tit0"),
                l = n("vYYK"),
                u = n("MX0m"),
                d = n.n(u),
                p = n("q1tI"),
                f = n.n(p),
                m = n("70DZ"),
                h = n("0U20"),
                g = f.a.createElement,
                b = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(l.a)(Object(s.a)(n), "pushLayerRemove", (function() {
                            n.setState({
                                pushShow: !1
                            })
                        })), n.state = {
                            pushShow: !1,
                            data: []
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = m.a.json.get("breakingnews"),
                                n = m.a.json.get("breakingnewsid");
                            if (t && n && new Date(t).toDateString() === (new Date).toDateString() && n === this.props.data.source) return null;
                            setTimeout((function() {
                                e.setState({
                                    pushShow: !0
                                }, (function() {
                                    var t = (new Date).getTime();
                                    m.a.json.set("breakingnews", t), m.a.json.set("breakingnewsid", e.props.data.source)
                                }))
                            }), 500)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.pushShow,
                                t = this.props.data,
                                n = t.title,
                                a = t.hrefurl;
                            return g("div", {
                                style: {
                                    display: e ? "block" : "none"
                                },
                                "data-boss-expo": this.props.bossExpo || "emergency",
                                "data-boss-once": !0,
                                className: "jsx-2549063115 " + "push-layer ".concat(this.props.theme)
                            }, g("div", {
                                className: "jsx-2549063115 push-layer_inner"
                            }, g("div", {
                                className: "jsx-2549063115 push-layer_button"
                            }, this.props.theme ? g("img", {
                                src: "//mat1.gtimg.com/www/mobi/2017/image/push-icon1.svg",
                                className: "jsx-2549063115"
                            }) : g("img", {
                                src: "//mat1.gtimg.com/www/mobi/2017/image/push-icon.svg",
                                className: "jsx-2549063115"
                            }), g("strong", {
                                onClick: this.pushLayerRemove,
                                "data-boss": this.props.bossClickClose || "emergency&modular=emergency",
                                className: "jsx-2549063115"
                            }, g("img", {
                                src: "//mat1.gtimg.com/www/mobi/2017/image/push-close-icon.svg",
                                className: "jsx-2549063115"
                            }))), g("a", {
                                href: Object(h.a)(a),
                                "data-boss": this.props.bossClickMore || "emergency&modular=emergency",
                                className: "jsx-2549063115 push-layer_title"
                            }, n || ""), g("a", {
                                href: Object(h.a)(a),
                                "data-boss": this.props.bossClickMore || "emergency&modular=emergency",
                                className: "jsx-2549063115 push-layer_href"
                            }, g("span", {
                                className: "jsx-2549063115"
                            }, "\u7acb\u5373\u67e5\u770b"), g("img", {
                                src: "//mat1.gtimg.com/www/mobi/2017/image/push-more-icon.svg",
                                className: "jsx-2549063115"
                            }))), g(d.a, {
                                id: "2549063115"
                            }, [".push-layer.jsx-2549063115{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:100;}", ".article-layer.jsx-2549063115{background:#fff;height:auto;font-size:0.16rem;}", ".article-layer.jsx-2549063115 .push-layer_inner.jsx-2549063115{position:static;left:0;top:0;-webkit-transform:translate(0,0);-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);padding-top:0.1rem;width:100%;height:0.98rem;margin:0 auto;background-color:#fff;-webkit-border-radius:0;border-radius:0;-webkit-box-shadow:0 0.02rem 0.06rem rgba(4,41,106,0.15);box-shadow:0 0.02rem 0.06rem rgba(4,41,106,0.15);}", ".push-layer_inner.jsx-2549063115{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding-top:0.13rem;width:77.6%;height:1.56rem;margin:0 auto;-webkit-box-shadow:0 0.02rem 0.06rem rgba(2,24,62,0.18);box-shadow:0 0.02rem 0.06rem rgba(2,24,62,0.18);background-color:#fff;-webkit-border-radius:0.03rem;border-radius:0.03rem;}", ".push-layer_inner.jsx-2549063115 a.jsx-2549063115{-webkit-text-decoration:none;text-decoration:none;}", ".push-layer_button.jsx-2549063115{position:relative;height:0.29rem;width:100%;color:#fff;margin-bottom:0.04rem;}", ".article-layer.jsx-2549063115 .push-layer_button.jsx-2549063115{margin-bottom:0;}", ".push-layer_button.jsx-2549063115 strong.jsx-2549063115{position:absolute;right:0.12rem;top:0;width:0.24rem;height:0.24rem;font-size:0.16rem;}", ".push-layer_button.jsx-2549063115 strong.jsx-2549063115 img.jsx-2549063115{width:100%;height:100%;left:0;}", ".push-layer_button.jsx-2549063115 img.jsx-2549063115{position:absolute;left:-0.09rem;top:0;width:0.83rem;height:0.29rem;}", ".push-layer_title.jsx-2549063115{width:84%;margin:0 auto;margin-bottom:0.15rem;text-align:center;color:#222;font-size:0.16rem;line-height:0.24rem;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;}", ".article-layer.jsx-2549063115 .push-layer_title.jsx-2549063115{text-align:left;margin-left:4%;margin-bottom:0;width:70%;display:inline-block;vertical-align:middle;}", ".push-layer_href.jsx-2549063115{position:relative;display:block;width:92%;margin:0 auto;-webkit-text-decoration:none;text-decoration:none;height:0.47rem;font-weight:600;line-height:0.47rem;text-align:center;color:#5076F5;font-size:0.15rem;}", '.push-layer_href.jsx-2549063115::after{content:"";display:block;position:absolute;left:0;top:0;width:100%;height:0.01rem;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;background:rgb(233,233,233);}', ".push-layer_href.jsx-2549063115 img.jsx-2549063115,.push-layer_href.jsx-2549063115 span.jsx-2549063115{vertical-align:middle;}", ".push-layer_href.jsx-2549063115 img.jsx-2549063115{width:0.16rem;height:0.16rem;margin-top:0.02rem;}", ".article-layer.jsx-2549063115 .push-layer_href.jsx-2549063115 span.jsx-2549063115{background-color:#4C7FFF;color:#fff;padding:0.03rem 0.09rem;border-radius:0.16rem;font-weight:500;font-size:0.12rem;}", ".article-layer.jsx-2549063115 .push-layer_button.jsx-2549063115 img.jsx-2549063115{left:0.06rem;}", ".article-layer.jsx-2549063115 .push-layer_href.jsx-2549063115{display:inline-block;width:26%;height:0.48rem;line-height:0.48rem;vertical-align:middle;}", ".article-layer.jsx-2549063115 .push-layer_href.jsx-2549063115::after{display:none;}", ".article-layer.jsx-2549063115 .push-layer_href.jsx-2549063115 svg.jsx-2549063115{display:none;}"]))
                        }
                    }]), t
                }(p.Component)
        },
        lKaW: function(e, t, n) {
            var a = n("heNW"),
                o = n("eUgh"),
                r = n("Y0CH");
            e.exports = function(e, t) {
                if (!e || !e.length) return [];
                var n = r(e);
                return null == t ? n : o(n, (function(e) {
                    return a(t, void 0, e)
                }))
            }
        },
        mOAx: function(e, t, n) {
            var a = n("wJg7");
            e.exports = function(e, t) {
                var n = e.length;
                if (n) return a(t += t < 0 ? n : 0, n) ? e[t] : void 0
            }
        },
        mQlY: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return w
            }));
            var a = n("ln6h"),
                o = n.n(a),
                r = n("O40h"),
                i = n("0iUn"),
                s = n("sLSF"),
                c = n("MI3g"),
                l = n("a7VT"),
                u = n("AT/M"),
                d = n("Tit0"),
                p = n("vYYK"),
                f = n("MX0m"),
                m = n.n(f),
                h = n("q1tI"),
                g = n.n(h),
                b = n("dV6L"),
                v = g.a.createElement,
                x = n("SnzR"),
                w = function(e) {
                    function t(e) {
                        var n;
                        return Object(i.a)(this, t), n = Object(c.a)(this, Object(l.a)(t).call(this, e)), Object(p.a)(Object(u.a)(n), "adTipsRemove", (function() {
                            n.setState({
                                adshow: !1
                            })
                        })), Object(p.a)(Object(u.a)(n), "qudaoTag", ""), Object(p.a)(Object(u.a)(n), "kaipingImgUrl", ""), n.elem = {}, n.state = {
                            UA: "",
                            adurl: "",
                            adhref: "",
                            adshow: !1
                        }, n
                    }
                    var n;
                    return Object(d.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(r.a)(o.a.mark((function e() {
                            var t, n = this;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = new x(window.location.search), this.qudaoTag = t.get("ADTAG") || "", setTimeout((function() {
                                            var e = n.qudaoTag ? window.localStorage.getItem("ad_qudaoinfoTips") : window.localStorage.getItem("ad_infoTips"),
                                                t = n.props.data.img || "";
                                            "" !== e && e === t || n.setState({
                                                adshow: !0,
                                                UA: b.a.getUserAgentForWebview(),
                                                adhref: n.props.data.link,
                                                adurl: t
                                            }, (function() {
                                                n.kaipingImgUrl = t || "", n.elem.exposeReporter.click(), window && window.localStorage && (n.qudaoTag ? window.localStorage.setItem("ad_qudaoinfoTips", n.kaipingImgUrl) : window.localStorage.setItem("ad_infoTips", n.kaipingImgUrl))
                                            }))
                                        }), 500);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                n = t.adurl,
                                a = t.adshow,
                                o = t.adhref;
                            return v("div", null, v("div", {
                                style: {
                                    display: a ? "block" : "none"
                                },
                                "data-boss": "m_layer",
                                onClick: this.adTipsRemove,
                                className: "jsx-435901031 ad-info"
                            }, v("div", {
                                className: "jsx-435901031 ad-inner"
                            }, v("a", {
                                href: o,
                                "data-boss": "spreads&modular=spreads",
                                className: "jsx-435901031"
                            }, v("img", {
                                src: n,
                                className: "jsx-435901031"
                            })), v("div", {
                                "data-boss": "cancel",
                                className: "jsx-435901031 ad-remove"
                            }, v("svg", {
                                width: "70px",
                                height: "70px",
                                viewBox: "0 0 70 70",
                                className: "jsx-435901031"
                            }, v("g", {
                                id: "Page-2",
                                stroke: "none",
                                fill: "none",
                                className: "jsx-435901031"
                            }, v("g", {
                                id: "ad-remove",
                                className: "jsx-435901031"
                            }, v("path", {
                                d: "M35,0 C54.33,0 70,15.67 70,35 C70,54.33 54.33,70 35,70 C15.67,70 0,54.33 0,35 C0,15.67 15.67,0 35,0 Z",
                                id: "Shape",
                                fill: "#000000",
                                opacity: "0.702",
                                className: "jsx-435901031"
                            }), v("path", {
                                d: "M37.828,35 L47.728,44.9 C48.2479132,45.4021489 48.4564252,46.1457558 48.2733943,46.8450146 C48.0903634,47.5442735 47.5442735,48.0903634 46.8450146,48.2733943 C46.1457558,48.4564252 45.4021489,48.2479132 44.9,47.728 L35,37.828 L25.1,47.728 C24.5978511,48.2479132 23.8542442,48.4564252 23.1549854,48.2733943 C22.4557265,48.0903634 21.9096366,47.5442735 21.7266057,46.8450146 C21.5435748,46.1457558 21.7520868,45.4021489 22.272,44.9 L32.172,35 L22.272,25.1 C21.7520868,24.5978511 21.5435748,23.8542442 21.7266057,23.1549854 C21.9096366,22.4557265 22.4557265,21.9096366 23.1549854,21.7266057 C23.8542442,21.5435748 24.5978511,21.7520868 25.1,22.272 L35,32.172 L44.9,22.272 C45.4021489,21.7520868 46.1457558,21.5435748 46.8450146,21.7266057 C47.5442735,21.9096366 48.0903634,22.4557265 48.2733943,23.1549854 C48.4564252,23.8542442 48.2479132,24.5978511 47.728,25.1 L37.828,35 Z",
                                id: "Shape",
                                fill: "#FFFFFF",
                                className: "jsx-435901031"
                            })))))), v(m.a, {
                                id: "435901031"
                            }, [".ad-info.jsx-435901031{position:fixed;left:0;top:0;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.5);z-index:99;}", ".ad-info.jsx-435901031 .ad-inner.jsx-435901031{position:absolute;left:50%;top:14.2%;-webkit-transform:translate(-50%,0);-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);width:73%;-webkit-box-shadow:0 0 16px 0 #000;box-shadow:0 0 16px 0 #000;-webkit-border-radius:2px;border-radius:2px;}", ".ad-info.jsx-435901031 a.jsx-435901031{position:relative;display:block;padding-top:127%;background-color:#252b2d;-webkit-tap-highlight-color:transparent;}", "a.jsx-435901031 img.jsx-435901031{position:absolute;left:0;top:0;width:100%;}", ".ad-remove.jsx-435901031{position:absolute;left:50%;bottom:-58px;width:34px;height:34px;-webkit-transform:translate(-50%,0);-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);display:inline-block;}", ".ad-remove.jsx-435901031 svg.jsx-435901031{position:absolute;left:0;top:0;width:100%;height:100%;}", "@media screen and ( min-width:414px){.ad-remove.jsx-435901031{width:48px;height:48px;bottom:-71px;display:inline-block;}}"])), v("div", {
                                ref: function(t) {
                                    e.elem.exposeReporter = t
                                },
                                "data-boss": "fun=xxx",
                                "data-boss-template": "BossId=8091&Pwd=1914956704&page=channel&modular=kaiping&channel=".concat(this.props.bossChannel || "", "&qudao=").concat(this.qudaoTag || "", "&qq={QQ}&source={REFER}&network={UANETTYPE}&webview=").concat(this.state.UA, "&pac_uid={COOKIE.pac_uid}&openid={COOKIE.wx_openid}&_dc={RANDOM}"),
                                style: {
                                    display: "none"
                                }
                            }))
                        }
                    }]), t
                }(h.Component)
        },
        mRsi: function(e, t, n) {
            var a = n("XGnz"),
                o = 1 / 0;
            e.exports = function(e) {
                return (null == e ? 0 : e.length) ? a(e, o) : []
            }
        },
        mzC7: function(e, t, n) {
            var a = n("v8vJ");
            e.exports = function(e) {
                return a(e, 1)
            }
        },
        nEsn: function(e, t, n) {
            var a = n("eUgh"),
                o = n("s+kx"),
                r = n("EA7m"),
                i = n("XzbM"),
                s = n("RBan"),
                c = r((function(e) {
                    var t = s(e),
                        n = a(e, i);
                    return (t = "function" == typeof t ? t : void 0) && n.pop(), n.length && n[0] === e[0] ? o(n, void 0, t) : []
                }));
            e.exports = c
        },
        nz8K: function(e, t, n) {
            var a = n("UKhj"),
                o = n("ljhN");
            e.exports = function(e, t) {
                var n = null == e ? 0 : e.length;
                if (n) {
                    var r = a(e, t);
                    if (r < n && o(e[r], t)) return r
                }
                return -1
            }
        },
        oSXT: function(e, t, n) {
            var a = n("LqpT"),
                o = n("XGnz"),
                r = n("ut/Y"),
                i = n("EA7m"),
                s = n("3L66"),
                c = n("RBan"),
                l = i((function(e, t) {
                    var n = c(t);
                    return s(n) && (n = void 0), s(e) ? a(e, o(t, 1, s, !0), r(n, 2)) : []
                }));
            e.exports = l
        },
        ob4f: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            var a = n("wx14"),
                o = n("zLVn"),
                r = n("JX7q"),
                i = n("dI71"),
                s = n("rePB"),
                c = n("q1tI"),
                l = n("QLaP"),
                u = n.n(l),
                d = new Map,
                p = new Map,
                f = new Map,
                m = 0;

            function h(e, t, n) {
                void 0 === n && (n = {}), n.threshold || (n.threshold = 0);
                var a = n,
                    o = a.root,
                    r = a.rootMargin,
                    i = a.threshold;
                if (u()(!d.has(e), "react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s", e), e) {
                    var s = function(e) {
                            return e ? f.has(e) ? f.get(e) : (m += 1, f.set(e, m.toString()), f.get(e) + "_") : ""
                        }(o) + (r ? i.toString() + "_" + r : i.toString()),
                        c = p.get(s);
                    c || (c = new IntersectionObserver(b, n), s && p.set(s, c));
                    var l = {
                        callback: t,
                        element: e,
                        inView: !1,
                        observerId: s,
                        observer: c,
                        thresholds: c.thresholds || (Array.isArray(i) ? i : [i])
                    };
                    return d.set(e, l), c.observe(e), l
                }
            }

            function g(e) {
                if (e) {
                    var t = d.get(e);
                    if (t) {
                        var n = t.observerId,
                            a = t.observer,
                            o = a.root;
                        a.unobserve(e);
                        var r = !1,
                            i = !1;
                        n && d.forEach((function(t, a) {
                            a !== e && (t.observerId === n && (r = !0, i = !0), t.observer.root === o && (i = !0))
                        })), !i && o && f.delete(o), a && !r && a.disconnect(), d.delete(e)
                    }
                }
            }

            function b(e) {
                e.forEach((function(e) {
                    var t = e.isIntersecting,
                        n = e.intersectionRatio,
                        a = e.target,
                        o = d.get(a);
                    if (o && n >= 0) {
                        var r = o.thresholds.some((function(e) {
                            return o.inView ? n > e : n >= e
                        }));
                        void 0 !== t && (r = r && t), o.inView = r, o.callback(r, e)
                    }
                }))
            }
            var v = function(e) {
                function t() {
                    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this, Object(s.a)(Object(r.a)(t), "state", {
                        inView: !1,
                        entry: void 0
                    }), Object(s.a)(Object(r.a)(t), "node", null), Object(s.a)(Object(r.a)(t), "handleNode", (function(e) {
                        t.node && g(t.node), t.node = e || null, t.observeNode()
                    })), Object(s.a)(Object(r.a)(t), "handleChange", (function(e, n) {
                        (e !== t.state.inView || e) && t.setState({
                            inView: e,
                            entry: n
                        }), t.props.onChange && t.props.onChange(e, n)
                    })), t
                }
                Object(i.a)(t, e);
                var n = t.prototype;
                return n.componentDidMount = function() {
                    0
                }, n.componentDidUpdate = function(e, t) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold || (g(this.node), this.observeNode()), t.inView !== this.state.inView && this.state.inView && this.props.triggerOnce && (g(this.node), this.node = null)
                }, n.componentWillUnmount = function() {
                    this.node && (g(this.node), this.node = null)
                }, n.observeNode = function() {
                    if (this.node) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            a = e.rootMargin;
                        h(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: a
                        })
                    }
                }, n.render = function() {
                    var e = this.state,
                        t = e.inView,
                        n = e.entry;
                    if (! function(e) {
                            return "function" != typeof e.children
                        }(this.props)) return this.props.children({
                        inView: t,
                        entry: n,
                        ref: this.handleNode
                    });
                    var r = this.props,
                        i = r.children,
                        s = r.as,
                        l = r.tag,
                        u = (r.triggerOnce, r.threshold, r.root, r.rootMargin, r.onChange, Object(o.a)(r, ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange"]));
                    return Object(c.createElement)(s || l || "div", Object(a.a)({
                        ref: this.handleNode
                    }, u), i)
                }, t
            }(c.Component);
            Object(s.a)(v, "displayName", "InView"), Object(s.a)(v, "defaultProps", {
                threshold: 0,
                triggerOnce: !1
            })
        },
        odGD: function(e, t, n) {
            var a = n("gvKm"),
                o = n("mv/X");
            e.exports = function(e, t, n, r) {
                var i = null == e ? 0 : e.length;
                return i ? (n && "number" != typeof n && o(e, t, n) && (n = 0, r = i), a(e, t, n, r)) : []
            }
        },
        pZt1: function(e, t) {
            e.exports = function(e) {
                return e && e.length ? e[0] : void 0
            }
        },
        pzgU: function(e, t, n) {
            var a = n("Q1l4"),
                o = n("wJg7"),
                r = Math.min;
            e.exports = function(e, t) {
                for (var n = e.length, i = r(t.length, n), s = a(e); i--;) {
                    var c = t[i];
                    e[i] = o(c, n) ? s[c] : void 0
                }
                return e
            }
        },
        q3TU: function(e, t, n) {
            var a = n("y4QH"),
                o = n("MMiu"),
                r = n("6KkN"),
                i = "__lodash_placeholder__",
                s = 1,
                c = 2,
                l = 4,
                u = 8,
                d = 128,
                p = 256,
                f = Math.min;
            e.exports = function(e, t) {
                var n = e[1],
                    m = t[1],
                    h = n | m,
                    g = h < (s | c | d),
                    b = m == d && n == u || m == d && n == p && e[7].length <= t[8] || m == (d | p) && t[7].length <= t[8] && n == u;
                if (!g && !b) return e;
                m & s && (e[2] = t[2], h |= n & s ? 0 : l);
                var v = t[3];
                if (v) {
                    var x = e[3];
                    e[3] = x ? a(x, v, t[4]) : v, e[4] = x ? r(e[3], i) : t[4]
                }
                return (v = t[5]) && (x = e[5], e[5] = x ? o(x, v, t[6]) : v, e[6] = x ? r(e[5], i) : t[6]), (v = t[7]) && (e[7] = v), m & d && (e[8] = null == e[8] ? t[8] : f(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = h, e
            }
        },
        qFS3: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bodyOpenClassName = t.portalClassName = void 0;
            var a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                r = n("q1tI"),
                i = m(r),
                s = m(n("i8i4")),
                c = m(n("17x9")),
                l = m(n("QEso")),
                u = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n("Ye7m")),
                d = n("2zs7"),
                p = m(d),
                f = n("VCL8");

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var g = t.portalClassName = "ReactModalPortal",
                b = t.bodyOpenClassName = "ReactModal__Body--open",
                v = void 0 !== s.default.createPortal,
                x = function() {
                    return v ? s.default.createPortal : s.default.unstable_renderSubtreeIntoContainer
                };

            function w(e) {
                return e()
            }
            var y = function(e) {
                function t() {
                    var e, n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var r = arguments.length, c = Array(r), u = 0; u < r; u++) c[u] = arguments[u];
                    return n = o = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), o.removePortal = function() {
                        !v && s.default.unmountComponentAtNode(o.node), w(o.props.parentSelector).removeChild(o.node)
                    }, o.portalRef = function(e) {
                        o.portal = e
                    }, o.renderPortal = function(e) {
                        var n = x()(o, i.default.createElement(l.default, a({
                            defaultStyles: t.defaultStyles
                        }, e)), o.node);
                        o.portalRef(n)
                    }, h(o, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), o(t, [{
                    key: "componentDidMount",
                    value: function() {
                        d.canUseDOM && (v || (this.node = document.createElement("div")), this.node.className = this.props.portalClassName, w(this.props.parentSelector).appendChild(this.node), !v && this.renderPortal(this.props))
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function(e) {
                        return {
                            prevParent: w(e.parentSelector),
                            nextParent: w(this.props.parentSelector)
                        }
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t, n) {
                        if (d.canUseDOM) {
                            var a = this.props,
                                o = a.isOpen,
                                r = a.portalClassName;
                            e.portalClassName !== r && (this.node.className = r);
                            var i = n.prevParent,
                                s = n.nextParent;
                            s !== i && (i.removeChild(this.node), s.appendChild(this.node)), (e.isOpen || o) && !v && this.renderPortal(this.props)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (d.canUseDOM && this.node && this.portal) {
                            var e = this.portal.state,
                                t = Date.now(),
                                n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                            n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal()
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return d.canUseDOM && v ? (!this.node && v && (this.node = document.createElement("div")), x()(i.default.createElement(l.default, a({
                            ref: this.portalRef,
                            defaultStyles: t.defaultStyles
                        }, this.props)), this.node)) : null
                    }
                }], [{
                    key: "setAppElement",
                    value: function(e) {
                        u.setElement(e)
                    }
                }]), t
            }(r.Component);
            y.propTypes = {
                isOpen: c.default.bool.isRequired,
                style: c.default.shape({
                    content: c.default.object,
                    overlay: c.default.object
                }),
                portalClassName: c.default.string,
                bodyOpenClassName: c.default.string,
                htmlOpenClassName: c.default.string,
                className: c.default.oneOfType([c.default.string, c.default.shape({
                    base: c.default.string.isRequired,
                    afterOpen: c.default.string.isRequired,
                    beforeClose: c.default.string.isRequired
                })]),
                overlayClassName: c.default.oneOfType([c.default.string, c.default.shape({
                    base: c.default.string.isRequired,
                    afterOpen: c.default.string.isRequired,
                    beforeClose: c.default.string.isRequired
                })]),
                appElement: c.default.instanceOf(p.default),
                onAfterOpen: c.default.func,
                onRequestClose: c.default.func,
                closeTimeoutMS: c.default.number,
                ariaHideApp: c.default.bool,
                shouldFocusAfterRender: c.default.bool,
                shouldCloseOnOverlayClick: c.default.bool,
                shouldReturnFocusAfterClose: c.default.bool,
                parentSelector: c.default.func,
                aria: c.default.object,
                data: c.default.object,
                role: c.default.string,
                contentLabel: c.default.string,
                shouldCloseOnEsc: c.default.bool,
                overlayRef: c.default.func,
                contentRef: c.default.func
            }, y.defaultProps = {
                isOpen: !1,
                portalClassName: g,
                bodyOpenClassName: b,
                role: "dialog",
                ariaHideApp: !0,
                closeTimeoutMS: 0,
                shouldFocusAfterRender: !0,
                shouldCloseOnEsc: !0,
                shouldCloseOnOverlayClick: !0,
                shouldReturnFocusAfterClose: !0,
                parentSelector: function() {
                    return document.body
                }
            }, y.defaultStyles = {
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.75)"
                },
                content: {
                    position: "absolute",
                    top: "40px",
                    left: "40px",
                    right: "40px",
                    bottom: "40px",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px"
                }
            }, (0, f.polyfill)(y), t.default = y
        },
        qPyV: function(e, t, n) {
            var a = n("ut/Y"),
                o = n("LGYb");
            e.exports = function(e, t) {
                return e && e.length ? o(e, a(t, 2)) : []
            }
        },
        rePB: function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        rlRc: function(e, t, n) {
            "use strict";
            var a = n("MX0m"),
                o = n.n(a),
                r = n("q1tI"),
                i = n.n(r).a.createElement;
            t.a = function(e) {
                var t = e.text,
                    n = void 0 === t ? "\u521a\u521a\u9605\u8bfb\u5230\u8fd9\u91cc\uff0c\u70b9\u51fb\u5237\u65b0" : t,
                    a = e.clickHandler;
                return i("a", {
                    onClick: a,
                    className: "jsx-468557595 last-read"
                }, i("div", {
                    className: "jsx-468557595 text"
                }, n), i(o.a, {
                    id: "468557595"
                }, [".last-read.jsx-468557595{display:block;height:0.4rem;line-height:0.4rem;color:#448aff;font-size:0.14rem;background-color:#F0F6FF;text-align:center;-webkit-text-decoration:none;text-decoration:none;}", ".last-read.jsx-468557595 .text.jsx-468557595{display:inline-block;margin:0 auto;background-image:url('data:image/svg+xml;utf8,".concat('<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="%23498BF8" fill-rule="evenodd"><path d="M2.728 7.705l1.402-.812a.405.405 0 0 0-.098-.74l-.598-.16A4.995 4.995 0 0 1 8.008 3a4.996 4.996 0 0 1 4.578 2.998l.003-.002c.048.226.24.398.48.398a.5.5 0 0 0 .5-.5.49.49 0 0 0-.073-.243l.008-.003C12.586 3.51 10.484 2 8.009 2c-2.51 0-4.64 1.55-5.536 3.737l-.654-.175a.404.404 0 0 0-.454.593l.811 1.403a.405.405 0 0 0 .552.147M14.636 9.833l-.812-1.401a.403.403 0 0 0-.552-.148l-1.403.813a.404.404 0 0 0 .099.74l.618.164A4.995 4.995 0 0 1 8.009 13a4.992 4.992 0 0 1-4.562-2.972.498.498 0 0 0-.471-.352.5.5 0 0 0-.5.5c0 .092.03.172.073.245C3.482 12.522 5.562 14 8.009 14c2.512 0 4.644-1.553 5.537-3.743l.636.17a.405.405 0 0 0 .454-.594"/></g></svg>', "');background-position:center left;background-repeat:no-repeat;background-size:0.16rem 0.16rem;padding-left:0.22rem;}")]))
            }
        },
        "s+kx": function(e, t, n) {
            var a = n("1hJj"),
                o = n("jbM+"),
                r = n("Xt/L"),
                i = n("eUgh"),
                s = n("sEf8"),
                c = n("xYSL"),
                l = Math.min;
            e.exports = function(e, t, n) {
                for (var u = n ? r : o, d = e[0].length, p = e.length, f = p, m = Array(p), h = 1 / 0, g = []; f--;) {
                    var b = e[f];
                    f && t && (b = i(b, s(t))), h = l(b.length, h), m[f] = !n && (t || d >= 120 && b.length >= 120) ? new a(f && b) : void 0
                }
                b = e[0];
                var v = -1,
                    x = m[0];
                e: for (; ++v < d && g.length < h;) {
                    var w = b[v],
                        y = t ? t(w) : w;
                    if (w = n || 0 !== w ? w : 0, !(x ? c(x, y) : u(g, y, n))) {
                        for (f = p; --f;) {
                            var j = m[f];
                            if (!(j ? c(j, y) : u(e[f], y, n))) continue e
                        }
                        x && x.push(y), g.push(w)
                    }
                }
                return g
            }
        },
        "s0N+": function(e, t, n) {
            var a = n("zZ0H"),
                o = n("a5q3"),
                r = o ? function(e, t) {
                    return o.set(e, t), e
                } : a;
            e.exports = r
        },
        sEfC: function(e, t, n) {
            var a = n("GoyQ"),
                o = n("QIyF"),
                r = n("tLB3"),
                i = "Expected a function",
                s = Math.max,
                c = Math.min;
            e.exports = function(e, t, n) {
                var l, u, d, p, f, m, h = 0,
                    g = !1,
                    b = !1,
                    v = !0;
                if ("function" != typeof e) throw new TypeError(i);

                function x(t) {
                    var n = l,
                        a = u;
                    return l = u = void 0, h = t, p = e.apply(a, n)
                }

                function w(e) {
                    var n = e - m;
                    return void 0 === m || n >= t || n < 0 || b && e - h >= d
                }

                function y() {
                    var e = o();
                    if (w(e)) return j(e);
                    f = setTimeout(y, function(e) {
                        var n = t - (e - m);
                        return b ? c(n, d - (e - h)) : n
                    }(e))
                }

                function j(e) {
                    return f = void 0, v && l ? x(e) : (l = u = void 0, p)
                }

                function k() {
                    var e = o(),
                        n = w(e);
                    if (l = arguments, u = this, m = e, n) {
                        if (void 0 === f) return function(e) {
                            return h = e, f = setTimeout(y, t), g ? x(e) : p
                        }(m);
                        if (b) return clearTimeout(f), f = setTimeout(y, t), x(m)
                    }
                    return void 0 === f && (f = setTimeout(y, t)), p
                }
                return t = r(t) || 0, a(n) && (g = !!n.leading, d = (b = "maxWait" in n) ? s(r(n.maxWait) || 0, t) : d, v = "trailing" in n ? !!n.trailing : v), k.cancel = function() {
                    void 0 !== f && clearTimeout(f), h = 0, l = m = u = f = void 0
                }, k.flush = function() {
                    return void 0 === f ? p : j(o())
                }, k
            }
        },
        "sKJ/": function(e, t, n) {
            var a = n("EA7m"),
                o = n("6T1N"),
                r = n("V9aw"),
                i = n("6KkN"),
                s = a((function(e, t) {
                    var n = i(t, r(s));
                    return o(e, 32, void 0, t, n)
                }));
            s.placeholder = {}, e.exports = s
        },
        sTTA: function(e, t, n) {
            var a = n("UKhj");
            e.exports = function(e, t) {
                return a(e, t)
            }
        },
        t2dP: function(e, t) {
            e.exports = function(e, t) {
                for (var n = e.length, a = 0; n--;) e[n] === t && ++a;
                return a
            }
        },
        tQFP: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return k
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("AT/M"),
                c = n("Tit0"),
                l = n("vYYK"),
                u = n("q1tI"),
                d = n.n(u),
                p = n("ob4f"),
                f = n("Dv1A"),
                m = n("62Vo"),
                h = n("hnLT"),
                g = n("CZ8k"),
                b = n("Gy9X"),
                v = n("LEpJ"),
                x = n("HXQy"),
                w = n("tblk"),
                y = n("NpjF"),
                j = d.a.createElement,
                k = (x.TYPE_CODES.TITLE, x.TYPE_CODES.ONE_PICTURE, x.TYPE_CODES.BIG_PICTURE, x.TYPE_CODES.THREE_PICTURE, x.TYPE_CODES.VIDEO, function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(l.a)(Object(s.a)(n), "handleLoadMore", (function() {
                            var e = n.props,
                                t = e.news,
                                a = e.data,
                                o = a.morekey,
                                r = a.name;
                            n.setState({
                                loading: !0
                            });
                            try {
                                Object(w.a)("//pacaio.match.qq.com/irs/rcd?cid=155&token=53fb09e4d443917a3efaeab622d3eb3b&ext=".concat(o, "&expIds=").concat(t.map((function(e) {
                                    return e.id
                                })).join("|"))).then((function(e) {
                                    n.setState({
                                        lazyNews: e.data,
                                        loading: !1,
                                        hasLoadMore: !0,
                                        size: 16,
                                        more: {
                                            text: "\u8fdb\u5165".concat(r, "\u9891\u9053"),
                                            boss: "jrpd&modular="
                                        }
                                    })
                                }))
                            } catch (e) {
                                console && console.log("data load error", e), n.setState({
                                    hasLoadMore: !0,
                                    loading: !1,
                                    size: 16,
                                    more: {
                                        text: "\u8fdb\u5165".concat(r, "\u9891\u9053"),
                                        boss: "jrpd&modular="
                                    }
                                })
                            }
                        })), n.state = {
                            size: 6,
                            more: {
                                text: "\u52a0\u8f7d\u66f4\u591a",
                                boss: "more&modular=",
                                loading: !1
                            },
                            lazyNews: []
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.news,
                                a = e.ignoreSkin,
                                o = e.adChannel,
                                r = e.displayMode,
                                i = e.diaocha,
                                s = e.yunying,
                                c = this.state,
                                l = c.more,
                                d = c.size,
                                x = c.lazyNews,
                                w = c.hasLoadMore,
                                k = c.loading,
                                O = t.url,
                                _ = t.key,
                                C = t.name,
                                S = t.links,
                                E = "\u672c\u5730" === C ? "local" : _,
                                N = [].concat(n, x).slice(0, d),
                                M = 0,
                                T = "m_".concat({
                                    football_all: "football",
                                    sports_football: "football"
                                }[_] || _);
                            [4, 9, 14, 19].forEach((function(e) {
                                if (N.length > e) {
                                    var t = M++;
                                    N.splice(e, 0, {
                                        type: "custom",
                                        id: "ad_".concat(t),
                                        Element: j(p.a, {
                                            triggerOnce: !0,
                                            rootMargin: "0px 0px 300px 0px"
                                        }, (function(e) {
                                            var n = e.inView,
                                                a = e.ref;
                                            return j("div", {
                                                ref: a
                                            }, n ? j(g.a, {
                                                channel: o || "homepage",
                                                index: t,
                                                moduleId: T
                                            }) : null)
                                        }))
                                    })
                                }
                            }));
                            var I = null,
                                L = null;
                            if ("mqq" === o) {
                                var D = i.length && Number(i[0].station) || 0;
                                if (N.length > D && D > 0) {
                                    var A = i[0];
                                    I = j("div", {
                                        index: D
                                    }, j(b.a, {
                                        data: {
                                            title: A.title,
                                            url: A.hrefurl,
                                            image: A.picurl,
                                            source: A.source || "\u9177\u9e45\u7528\u6237\u7814\u7a76\u9662"
                                        },
                                        bossClick: "survey_click&modular=survey",
                                        bossExpo: "survey_click&modular=survey"
                                    }))
                                }
                                var q = s.length && Number(s[0].station) || 0;
                                if (N.length > q && q > 0) {
                                    var P = s[0],
                                        F = null;
                                    F = P.mtitle ? j(b.a, {
                                        data: {
                                            title: P.mtitle,
                                            url: P.morelink,
                                            image: P.banner,
                                            source: P.msource || "",
                                            titleLabels: [{
                                                style: {
                                                    backgroundColor: "rgb(76, 126, 255)"
                                                },
                                                text: "\u4e13\u9898"
                                            }]
                                        },
                                        bossClick: "article&modular=business",
                                        bossExpo: "article&modular=business"
                                    }) : j(v.a, {
                                        key: "insert-315",
                                        data: {
                                            banner: P.banner || "",
                                            bgcolor: P.bgcolor || "",
                                            img: P.picurl,
                                            link: P.hrefurl,
                                            title: P.title,
                                            moredesc: P.moredesc,
                                            morelink: P.morelink,
                                            source: P.source
                                        },
                                        bossClickArticle: "article&modular=business",
                                        bossExpo: "article&modular=business",
                                        bossClickMore: "more&modular=business"
                                    }), L = j("div", {
                                        index: q
                                    }, F)
                                }
                            }
                            return N = N.slice(0, d), j(u.Fragment, null, j(y.a, {
                                name: E,
                                title: {
                                    text: C,
                                    url: this.props.data.url,
                                    boss: "mkbt&modular=".concat(E)
                                },
                                more: k ? null : {
                                    text: l.text,
                                    url: w ? O : null,
                                    onClick: w ? null : this.handleLoadMore,
                                    boss: "".concat(l.boss),
                                    arrowDir: w ? "right" : "down"
                                },
                                nav: S,
                                ignoreSkin: a
                            }, j(u.Fragment, null, j(m.a, {
                                data: N,
                                modular: E,
                                displayMode: r
                            }, I, L), k && j(h.a, null))), j(f.a, {
                                style: {
                                    minHeight: "0.06rem",
                                    background: "rgba(247,248,250,1)"
                                }
                            }))
                        }
                    }]), t
                }(u.Component))
        },
        uVuS: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return C
            }));
            var a = n("ln6h"),
                o = n.n(a),
                r = n("O40h"),
                i = n("doui"),
                s = n("0iUn"),
                c = n("sLSF"),
                l = n("MI3g"),
                u = n("a7VT"),
                d = n("AT/M"),
                p = n("Tit0"),
                f = n("vYYK"),
                m = n("MX0m"),
                h = n.n(m),
                g = n("q1tI"),
                b = n.n(g),
                v = n("RotF"),
                x = n.n(v),
                w = n("qUMa"),
                y = n("hnLT"),
                j = n("3DEb"),
                k = n("+sCI"),
                O = b.a.createElement,
                _ = {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                },
                C = function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), n = Object(l.a)(this, Object(u.a)(t).call(this, e)), Object(f.a)(Object(d.a)(n), "handleNegativeFeedback", (function(e) {
                            n.setState({
                                videoList: n.state.videoList.filter((function(t) {
                                    return t.id !== e
                                }))
                            }), Object(w.d)()
                        })), Object(f.a)(Object(d.a)(n), "loadRcdNews", (function() {
                            var e = n.state.videoList;
                            Object(k.a)({
                                url: "//pacaio.match.qq.com/xw/rcdVideo",
                                useRefreshAsPage: !0,
                                offset: 10 * n.pageCounter,
                                count: 10,
                                noExpIds: !0
                            }).then((function(t) {
                                var a = Object(i.a)(t, 2),
                                    o = a[0],
                                    r = a[1];
                                n.pageCounter += 1, n._mounted && n.setState({
                                    videoList: e.concat(o),
                                    dataMeta: r,
                                    hasMore: o.length > 0
                                }), n.initialized || (n.initialized = !0, n.props.onLoadComplete())
                            })).catch((function(e) {
                                console && console.log("data load error", e)
                            }))
                        })), n.state = {
                            videoList: [],
                            hasMore: !0
                        }, n.pageCounter = 0, n._mounted = !1, n.initialized = !1, n
                    }
                    var n;
                    return Object(p.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: (n = Object(r.a)(o.a.mark((function e() {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this._mounted = !0;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._mounted = !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.videoList,
                                n = e.hasMore,
                                a = e.dataMeta;
                            return O("div", {
                                className: "jsx-2573456202 ct-videos"
                            }, O(x.a, {
                                pageStart: 0,
                                loadMore: this.loadRcdNews,
                                hasMore: n,
                                loader: O("div", {
                                    style: 0 == t.length && n ? _ : {},
                                    key: 0,
                                    className: "jsx-2573456202"
                                }, O(y.a, null))
                            }, O(j.a, {
                                data: t,
                                dataMeta: a,
                                videoAutoPlay: this.props.videoAutoPlay,
                                adChannel: "video"
                            })), O(h.a, {
                                id: "2573456202"
                            }, [".ct-videos.jsx-2573456202{background:rgba(255,255,255,1);box-shadow:0px -1px 6px 0px rgba(0,69,189,0.1);border-radius:0.12rem 0.12rem 0px 0px;padding-top:0.03rem;min-height:700px;}"]))
                        }
                    }]), t
                }(g.Component)
        },
        ulEd: function(e, t) {
            var n = /\{\n\/\* \[wrapped with (.+)\] \*/,
                a = /,? & /;
            e.exports = function(e) {
                var t = e.match(n);
                return t ? t[1].split(a) : []
            }
        },
        unST: function(e, t, n) {
            var a = n("EA7m"),
                o = n("6T1N"),
                r = n("V9aw"),
                i = n("6KkN"),
                s = a((function(e, t, n) {
                    var a = 3;
                    if (n.length) {
                        var c = i(n, r(s));
                        a |= 32
                    }
                    return o(t, a, e, n, c)
                }));
            s.placeholder = {}, e.exports = s
        },
        uoTU: function(e, t, n) {
            var a = n("R/W3"),
                o = n("Sxd8"),
                r = Math.max;
            e.exports = function(e, t, n) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var s = null == n ? 0 : o(n);
                return s < 0 && (s = r(i + s, 0)), a(e, t, s)
            }
        },
        v8eK: function(e, t, n) {
            var a = n("XGnz"),
                o = n("EA7m"),
                r = n("LGYb"),
                i = n("3L66"),
                s = o((function(e) {
                    return r(a(e, 1, i, !0))
                }));
            e.exports = s
        },
        v8vJ: function(e, t, n) {
            var a = n("6T1N"),
                o = 128;
            e.exports = function(e, t, n) {
                return t = n ? void 0 : t, t = e && null == t ? e.length : t, a(e, o, void 0, void 0, void 0, void 0, t)
            }
        },
        "vN+2": function(e, t) {
            e.exports = function() {}
        },
        vlBi: function(e, t, n) {
            var a = n("ut/Y"),
                o = n("j2Dk");
            e.exports = function(e, t) {
                return e && e.length ? o(e, a(t, 3), !0, !0) : []
            }
        },
        vlRD: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n("RNiq")
            }])
        },
        "wEy/": function(e, t, n) {
            var a = n("ut/Y"),
                o = n("f5xI");
            e.exports = function(e, t) {
                var n = [];
                if (!e || !e.length) return n;
                var r = -1,
                    i = [],
                    s = e.length;
                for (t = a(t, 3); ++r < s;) {
                    var c = e[r];
                    t(c, r, e) && (n.push(c), i.push(r))
                }
                return o(e, i), n
            }
        },
        wig9: function(e, t) {
            e.exports = function(e) {
                for (var t = -1, n = null == e ? 0 : e.length, a = 0, o = []; ++t < n;) {
                    var r = e[t];
                    r && (o[a++] = r)
                }
                return o
            }
        },
        wx14: function(e, t, n) {
            "use strict";

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        wy8a: function(e, t, n) {
            var a = n("KxBF");
            e.exports = function(e, t, n) {
                var o = e.length;
                return n = void 0 === n ? o : n, !t && n >= o ? e : a(e, t, n)
            }
        },
        xEkU: function(e, t, n) {
            (function(t) {
                for (var a = n("bQgK"), o = "undefined" == typeof window ? t : window, r = ["moz", "webkit"], i = "AnimationFrame", s = o["request" + i], c = o["cancel" + i] || o["cancelRequest" + i], l = 0; !s && l < r.length; l++) s = o[r[l] + "Request" + i], c = o[r[l] + "Cancel" + i] || o[r[l] + "CancelRequest" + i];
                if (!s || !c) {
                    var u = 0,
                        d = 0,
                        p = [];
                    s = function(e) {
                        if (0 === p.length) {
                            var t = a(),
                                n = Math.max(0, 1e3 / 60 - (t - u));
                            u = n + t, setTimeout((function() {
                                var e = p.slice(0);
                                p.length = 0;
                                for (var t = 0; t < e.length; t++)
                                    if (!e[t].cancelled) try {
                                        e[t].callback(u)
                                    } catch (e) {
                                        setTimeout((function() {
                                            throw e
                                        }), 0)
                                    }
                            }), Math.round(n))
                        }
                        return p.push({
                            handle: ++d,
                            callback: e,
                            cancelled: !1
                        }), d
                    }, c = function(e) {
                        for (var t = 0; t < p.length; t++) p[t].handle === e && (p[t].cancelled = !0)
                    }
                }
                e.exports = function(e) {
                    return s.call(o, e)
                }, e.exports.cancel = function() {
                    c.apply(o, arguments)
                }, e.exports.polyfill = function(e) {
                    e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = c
                }
            }).call(this, n("yLpj"))
        },
        xFI3: function(e, t, n) {
            var a = n("Yoag"),
                o = n("6ae/"),
                r = n("Q1l4");
            e.exports = function(e) {
                if (e instanceof a) return e.clone();
                var t = new o(e.__wrapped__, e.__chain__);
                return t.__actions__ = r(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        xpk8: function(e, t, n) {
            var a = n("/9aa"),
                o = 4294967294,
                r = Math.floor,
                i = Math.min;
            e.exports = function(e, t, n, s) {
                t = n(t);
                for (var c = 0, l = null == e ? 0 : e.length, u = t != t, d = null === t, p = a(t), f = void 0 === t; c < l;) {
                    var m = r((c + l) / 2),
                        h = n(e[m]),
                        g = void 0 !== h,
                        b = null === h,
                        v = h == h,
                        x = a(h);
                    if (u) var w = s || v;
                    else w = f ? v && (s || g) : d ? v && g && (s || !b) : p ? v && g && !b && (s || !x) : !b && !x && (s ? h <= t : h < t);
                    w ? c = m + 1 : l = m
                }
                return i(l, o)
            }
        },
        xrec: function(e, t, n) {
            var a = n("EA7m")(n("Y0CH"));
            e.exports = a
        },
        y4QH: function(e, t) {
            var n = Math.max;
            e.exports = function(e, t, a, o) {
                for (var r = -1, i = e.length, s = a.length, c = -1, l = t.length, u = n(i - s, 0), d = Array(l + u), p = !o; ++c < l;) d[c] = t[c];
                for (; ++r < s;)(p || r < i) && (d[a[r]] = e[r]);
                for (; u--;) d[c++] = e[r++];
                return d
            }
        },
        ytg1: function(e, t, n) {
            var a = n("ut/Y"),
                o = n("xpk8");
            e.exports = function(e, t, n) {
                return o(e, t, a(n, 2))
            }
        },
        yue5: function(e, t, n) {
            var a = n("/9aa");
            e.exports = function(e, t) {
                if (e !== t) {
                    var n = void 0 !== e,
                        o = null === e,
                        r = e == e,
                        i = a(e),
                        s = void 0 !== t,
                        c = null === t,
                        l = t == t,
                        u = a(t);
                    if (!c && !u && !i && e > t || i && s && l && !c && !u || o && s && l || !n && l || !r) return 1;
                    if (!o && !i && !u && e < t || u && n && r && !o && !i || c && n && r || !s && r || !l) return -1
                }
                return 0
            }
        },
        zCEa: function(e, t, n) {
            "use strict";
            var a = n("MX0m"),
                o = n.n(a),
                r = n("q1tI"),
                i = n.n(r),
                s = n("ob4f"),
                c = n("DC/2"),
                l = i.a.createElement;
            t.a = function(e) {
                var t = e.image,
                    n = e.disableLazyImage,
                    a = void 0 !== n && n,
                    i = e.style,
                    u = e.ratio,
                    d = void 0 === u ? "66.071%" : u,
                    p = l(c.a, {
                        src: t,
                        alt: "",
                        ariaHidden: !0,
                        verticalCutMethod: "top",
                        fadeIn: 200,
                        disableNativeFit: !0,
                        preventRerender: !0,
                        style: {
                            backgroundColor: "#FFF"
                        }
                    });
                return l(r.Fragment, null, l("div", {
                    style: i,
                    className: "jsx-712228745 root"
                }, l("div", {
                    style: {
                        paddingTop: d
                    },
                    className: "jsx-712228745 placeholder"
                }), l(s.a, {
                    triggerOnce: !0
                }, (function(e) {
                    var t = e.inView,
                        n = e.ref;
                    return l("div", {
                        ref: n,
                        className: "jsx-712228745 img"
                    }, t || a ? p : null)
                }))), l(o.a, {
                    id: "712228745"
                }, [".root.jsx-712228745{height:100%;width:100%;overflow:hidden;background-color:#eaeaea;background-image:url(//mat1.gtimg.com/www/mobi/2017/image/image-placeholder-logo.svg);background-position:center center;background-repeat:no-repeat;background-size:45px 45px;border-radius:0.03rem;position:relative;}", ".img.jsx-712228745{position:absolute;top:0px;left:0px;right:0px;bottom:0px;}"]))
            }
        },
        zLVn: function(e, t, n) {
            "use strict";

            function a(e, t) {
                if (null == e) return {};
                var n, a, o = {},
                    r = Object.keys(e);
                for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        zRKg: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return y
            }));
            var a = n("0iUn"),
                o = n("sLSF"),
                r = n("MI3g"),
                i = n("a7VT"),
                s = n("AT/M"),
                c = n("Tit0"),
                l = n("vYYK"),
                u = n("MX0m"),
                d = n.n(u),
                p = n("q1tI"),
                f = n.n(p),
                m = n("NpjF"),
                h = n("Ri3a"),
                g = n("tblk"),
                b = n("30sJ"),
                v = n("iKBj"),
                x = n("Jtl/"),
                w = f.a.createElement,
                y = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), n = Object(r.a)(this, Object(i.a)(t).call(this, e)), Object(l.a)(Object(s.a)(n), "openAppAndTopic", (function(e) {
                            var t = "/m/topic?id=".concat(e);
                            n.props.openApp ? Object(x.a)({
                                config: {
                                    openUrl: "qqnews://article_9528?act=topic&topic_id=".concat(e, "&from=xw")
                                },
                                downloadCallback: function() {
                                    window.open(t, "_self")
                                },
                                openCallback: function() {
                                    window.open(t, "_self")
                                }
                            }) : window.open(t, "_self")
                        })), Object(l.a)(Object(s.a)(n), "loadMore", (function() {
                            n.props.openApp ? Object(x.a)({
                                config: {
                                    openUrl: "qqnews://article_9500?tab=news_recommend_main&channel=news_recommend_hot_chat&from=xw"
                                }
                            }) : window.open("/m/topic/rank", "_self")
                        })), n.state = {
                            rank: []
                        }, n
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.getRankList()
                        }
                    }, {
                        key: "getRankList",
                        value: function() {
                            var e = this;
                            Object(g.a)("//pacaio.match.qq.com/openapi/getTopicRank").then((function(t) {
                                if (0 == t.code && t.data) {
                                    for (var n = t.data.slice(0, 10), a = []; a.length < 4;) {
                                        var o = Math.floor(10 * Math.random());
                                        a.indexOf(o) < 0 && a.push(o)
                                    }
                                    var r = [];
                                    a.map((function(t) {
                                        n[t].tpid !== e.props.id && r.push(n[t])
                                    })), e.setState({
                                        rank: r
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.rank,
                                n = void 0 === t ? [] : t,
                                a = this.props.openApp,
                                o = void 0 !== a && a,
                                r = o ? "topic" : "xwtopic";
                            return 0 != n.length && w(m.a, {
                                name: r,
                                more: {
                                    text: o ? "\u6253\u5f00 \u817e\u8baf\u65b0\u95fbAPP \u770b\u66f4\u591a\u70ed\u95e8\u8bdd\u9898" : "\u67e5\u770b\u66f4\u591a\u70ed\u95e8\u8bdd\u9898",
                                    boss: "more",
                                    onClick: this.loadMore,
                                    arrowDir: "right"
                                }
                            }, w("div", {
                                className: "jsx-2727045345 ct-topic"
                            }, n.slice(0, 3).map((function(t, n) {
                                var a = v.a.articleItem(t, n),
                                    o = "topic&viewtype=nopic&modular=".concat(r, "&s_order=").concat(n, "&").concat(a);
                                return w("div", {
                                    key: n,
                                    "data-boss-once": !0,
                                    "data-boss-expo": o,
                                    className: "jsx-2727045345 rankitem"
                                }, w(h.a, {
                                    "data-boss": o,
                                    onClick: function() {
                                        return e.openAppAndTopic(t.tpid)
                                    }
                                }, w("span", {
                                    className: "jsx-2727045345 title"
                                }, t.tpname), t.readNum > 0 && w("span", {
                                    className: "jsx-2727045345 info"
                                }, Object(b.a)(t.readNum), "\u9605\u8bfb")))
                            }))), w(d.a, {
                                id: "2727045345"
                            }, ["a.jsx-2727045345{color:inherit;-webkit-text-decoration:none;text-decoration:none;display:block;}", ".ct-topic.jsx-2727045345{font-size:0px;line-height:0px;}", ".rankitem.jsx-2727045345{height:0.48rem;line-height:0.48rem;font-size:0.16rem;color:#222;position:relative;overflow:hidden;padding:0 0.18rem;}", ".title.jsx-2727045345{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;float:left;max-width:74%;}", ".info.jsx-2727045345{color:#828C9B;font-size:0.14rem;margin-left:0.09rem;}", ".rankitem.jsx-2727045345:not(:last-child)::after{content:'';position:absolute;height:1px;left:0.18rem;right:0.18rem;bottom:0;background:#F0F0F0;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}", ".ct-topic.jsx-2727045345::before,.ct-topic.jsx-2727045345::after{content:'';display:block;height:1px;background:#F0F0F0;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);width:100%;}", ".title.jsx-2727045345:before{background:url(//mat1.gtimg.com/pingjs/ext2020/xw-article-icons/topic_icon.svg) center no-repeat;content:'';display:inline-block;width:0.24rem;height:0.48rem;margin-right:0.09rem;line-height:0.48rem;vertical-align:bottom;}"]))
                        }
                    }]), t
                }(p.PureComponent)
        },
        zTPS: function(e, t, n) {
            var a = n("ut/Y"),
                o = n("j2Dk");
            e.exports = function(e, t) {
                return e && e.length ? o(e, a(t, 3), !1, !0) : []
            }
        },
        ziAQ: function(e, t, n) {
            var a = n("KxBF");
            e.exports = function(e) {
                var t = null == e ? 0 : e.length;
                return t ? a(e, 1, t) : []
            }
        },
        zqxM: function(e, t, n) {
            var a = n("LqpT"),
                o = n("XGnz"),
                r = n("EA7m"),
                i = n("3L66"),
                s = r((function(e, t) {
                    return i(e) ? a(e, o(t, 1, i, !0)) : []
                }));
            e.exports = s
        },
        zrwo: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var a = n("Jo+v"),
                o = n.n(a),
                r = n("4mXO"),
                i = n.n(r),
                s = n("pLtp"),
                c = n.n(s),
                l = n("vYYK");

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = c()(n);
                    "function" == typeof i.a && (a = a.concat(i()(n).filter((function(e) {
                        return o()(n, e).enumerable
                    })))), a.forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    }))
                }
                return e
            }
        },
        zv14: function(e, t, n) {
            "use strict";
            var a = n("p0XB"),
                o = n.n(a),
                r = n("0U20"),
                i = n("HXQy").FLAG;
            t.a = function(e) {
                var t, n, a, s, c, l, u, d = void 0 !== e.article_type ? "irs" : "inews",
                    p = e.id,
                    f = e.app_id,
                    m = e.title,
                    h = e.from,
                    g = e.source,
                    b = e.source_id,
                    v = void 0 === b ? "" : b,
                    x = e.media_icon,
                    w = void 0 === x ? "" : x,
                    y = e.category,
                    j = e.category_chn,
                    k = e.category_id,
                    O = e.category2_chn,
                    _ = e.category2_id,
                    C = e.flag,
                    S = e.comment_id,
                    E = e.commentid,
                    N = e.comment_num,
                    M = void 0 === N ? 0 : N,
                    T = e.tag,
                    I = void 0 === T ? [] : T,
                    L = e.tag_label,
                    D = void 0 === L ? [] : L,
                    A = e.showtype,
                    q = e.img_type;
                switch (d) {
                    case "irs":
                        t = Object(r.a)(e.url), n = e.article_type, a = e.ts, s = S, c = o()(D) ? D.map((function(e) {
                            return {
                                id: e[1],
                                name: e[0]
                            }
                        })) : [], l = function(e) {
                            var t = ["640X330", "580X328", "870X492"];
                            if (e.irs_imgs)
                                for (var n = 0; n < t.length; n++) {
                                    var a = e.irs_imgs[t[n]];
                                    if (o()(a) && a.length) return a[0]
                                }
                            return e.bimg || e.img
                        }(e), u = (e.irs_imgs ? e.irs_imgs["295X195"] || e.irs_imgs["294X195"] : null) || e.multi_imgs || [];
                        break;
                    case "inews":
                        t = function(e) {
                            var t;
                            switch (Number(e.articletype)) {
                                case 0:
                                case 1:
                                case 56:
                                case 101:
                                    t = "/cmsid/".concat(e.id);
                                    break;
                                case 3:
                                    t = "/a/video/".concat(e.id);
                                    break;
                                case 100:
                                case 120:
                                    t = "/zt/".concat(e.id.replace(/[^0-9]/gi, ""), "/").concat(e.id);
                                    break;
                                case 302:
                                case 303:
                                    t = "/m/topic/detail?id=".concat(e.id);
                                    break;
                                default:
                                    t = e.url
                            }!t && e.topic && e.topic.tpid && (t = "/m/topic?id=".concat(e.topic.tpid));
                            !t && e.id && (t = "/cmsid/".concat(e.id));
                            return t
                        }(e), n = Number(e.articletype), a = e.timestamp, s = E, c = o()(I) ? I.map((function(e) {
                            return {
                                id: "",
                                name: e
                            }
                        })) : [], l = function(e) {
                            var t, n = (e.ext_data || {}).Fimgurl30 || ((e.ext_data || {}).ext_action || {}).Fimgurl30;
                            n && (t = n.split(",")[0]);
                            if (!t || 0 === t.length) {
                                var a = e.thumbnails_qqnews || e.thumbnails;
                                t = a ? a[0] : ""
                            }
                            return t
                        }(e), u = function(e) {
                            var t;
                            if ("1" === e.articletype && e.ext_data) {
                                var n = e.ext_data.Fimgurl33 || ((e.ext_data || {}).ext_action || {}).Fimgurl33;
                                n && (t = n.split(","))
                            }
                            if (!t || 0 === t.length) {
                                var a = (e.ext_data || {}).Fimgurl32 || ((e.ext_data || {}).ext_action || {}).Fimgurl32;
                                a && (t = a.split(","))
                            }
                            t && 0 !== t.length || (t = e.thumbnails_qqnews || e.thumbnails);
                            return o()(t) ? t : []
                        }(e)
                }
                var P = e.usesurl,
                    F = e.surl;
                1 == P && (t = F), "string" == typeof u && (u = [u]);
                var z = {
                        id: v,
                        name: g,
                        icon: w
                    },
                    R = [];
                k && R.push({
                    id: k,
                    code: y,
                    name: j
                }), _ && R.push({
                    id: _,
                    name: O
                });
                var U = Number(C) || 0,
                    Y = {
                        id: U,
                        name: i[U]
                    },
                    B = {
                        id: s,
                        number: M
                    },
                    W = {
                        api_name: d,
                        id: p,
                        app_id: f || p,
                        title: m,
                        url: t,
                        type: n,
                        showtype: 1 == e.usesurl ? "" : A,
                        img_type: q,
                        source: z,
                        from: h,
                        categories: R,
                        flag: Y,
                        comment: B,
                        timestamp: a,
                        origin_data: e,
                        tags: c,
                        bimage: l,
                        images: u,
                        image: o()(u) && u.length > 0 && u[0] || l
                    };
                if (3 === n) switch (d) {
                    case "irs":
                        W.vid = e.id, W.url = "/a/video/".concat(e.id), W.bimage = (e.imgs || [])["496X280"] || e.bimg || e.img, W.duration = e.duration || 0, W.playCount = e.view_count || 0
                }
                return W
            }
        }
    },
    [
        ["vlRD", 1, 0]
    ]
]);