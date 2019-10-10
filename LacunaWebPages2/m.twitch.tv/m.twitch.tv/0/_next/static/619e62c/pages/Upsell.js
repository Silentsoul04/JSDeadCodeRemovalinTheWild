(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [13], {
        aG6Q: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/Upsell", function() {
                return a("zCI7")
            }])
        },
        zCI7: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("k9sC"),
                i = a.n(n),
                r = a("yP/C"),
                l = a("h7sq"),
                s = a("tS02"),
                o = a("/XES"),
                p = a("ztBH"),
                c = a("amHM"),
                u = a("Fayl"),
                d = a("znL5"),
                m = a("yFcC"),
                f = a.n(m),
                h = a("9j/M"),
                g = a("ERkP"),
                _ = a.n(g),
                x = a("/SwW"),
                w = a("vCzr"),
                b = a("yyOJ"),
                j = a("ZlPP"),
                y = a("lIWZ");

            function O() {
                Object(j.d)({
                    name: b.NATIVE_APP_UPSELL_OPT_OUT.COOKIE_NAME,
                    opts: {
                        maxAge: b.NATIVE_APP_UPSELL_OPT_OUT.DURATION
                    },
                    value: "true"
                }), Object(y.a)()
            }
            var v = a("Bq/2"),
                k = a("5kHu"),
                C = a("zkRB"),
                P = a("5vmN"),
                N = _.a.createElement,
                E = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(o.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return N(v.a, {
                                onClick: O,
                                type: k.d.Text
                            }, N(C.a, {
                                color: P.c.Alt2
                            }, e("Switch to Desktop Mode", "DeclineUpsell")))
                        }
                    }]), t
                }(_.a.Component);
            Object(d.a)(E, "displayName", "DeclineUpsell");
            var A = Object(x.a)(Object(w.a)(E)),
                S = a("aVvr"),
                I = _.a.createElement,
                T = Object(x.a)(function(e) {
                    var t = e.intl.formatMessage;
                    return I(C.a, {
                        fontSize: P.d.Size4,
                        color: P.c.Alt2
                    }, t("Watch and chat with your favorite broadcasters.", "UpsellPage"))
                }),
                U = a("Q0He"),
                z = a("iJNm"),
                D = a("cQFw"),
                L = a("S2yq"),
                B = a("bfSB"),
                M = a("CmdM"),
                H = a("jPHO"),
                W = a("d6po"),
                F = _.a.createElement,
                Q = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(o.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(s.a)(t, [{
                        key: "content",
                        value: function() {
                            return F(U.a, {
                                alignItems: z.b.Center,
                                background: P.a.Base,
                                display: z.d.Flex,
                                flexDirection: z.e.Column,
                                justifyContent: z.h.Between,
                                fullWidth: !0,
                                className: "upsell-page",
                                padding: {
                                    top: 2
                                }
                            }, F(D.a, {
                                textAlign: z.l.Center,
                                className: "upsell__header"
                            }, F(L.a, {
                                asset: B.a.LogoTwitch,
                                type: M.b.Brand,
                                height: 60,
                                width: 180
                            }), F(D.a, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, F(T, null))), F(H.a, {
                                textAlign: z.l.Center
                            }, F("picture", {
                                className: "jsx-1238737873 upsell__image"
                            }, F("source", {
                                srcSet: "\n                /static/images/upsell-phone.jpg 1x,\n                /static/images/upsell-phone@2x.jpg 2x,\n                /static/images/upsell-phone@3x.jpg 3x\n              ",
                                media: "\n                (min-width: 540px) and (orientation: portrait), (min-width: 813px) and (orientation: landscape)\n              ",
                                className: "jsx-1238737873"
                            }), F(H.a, {
                                fullWidth: !0,
                                className: "upsell__default-image"
                            }, F("img", {
                                src: "/static/images/upsell-android.jpg",
                                srcSet: "/static/images/upsell-android.jpg 1x, /static/images/upsell-android@2x.jpg 2x, /static/images/upsell-android@3x.jpg 3x",
                                className: "jsx-1238737873"
                            })))), F(H.a, {
                                display: z.d.Flex,
                                flexDirection: z.e.Column,
                                justifyContent: z.h.End,
                                textAlign: z.l.Center
                            }, F("footer", {
                                className: "jsx-1238737873 upsell__footer"
                            }, F(h.a, {
                                hasCriticalChildren: !0
                            }, F(U.a, {
                                background: P.a.Accent
                            }, F(S.a, {
                                fullWidth: !0,
                                className: "open-in-app"
                            })), F(D.a, {
                                padding: {
                                    top: 1
                                }
                            }, F(A, null))))), F(f.a, {
                                id: "1238737873"
                            }, [".upsell-page{height:100vh;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left);padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right);}", "@media (min-width:813px) and (orientation:landscape){.upsell__default-image{height:80vh;width:auto !important;}}", ".upsell__image{min-height:293px;}", "@media (min-width:540px) and (orientation:portrait),(min-width:813px) and (orientation:landscape){.upsell__image{min-height:561px;}}", ".upsell__footer{min-height:66px;width:90%;}", "@media (min-width:540px) and (orientation:portrait){.upsell__footer{width:50vw;}}", "@media (orientation:portrait){.upsell-page{padding-bottom:150px;}.upsell__image{min-height:230px;}.upsell__default-image{width:85%;}}", "@media screen and (orientation:landscape){.upsell-page{-webkit-flex-flow:column wrap !important;-ms-flex-flow:column wrap !important;flex-flow:column wrap !important;-webkit-box-pack:space-around !important;-webkit-justify-content:space-around !important;-ms-flex-pack:space-around !important;justify-content:space-around !important;}.upsell__image{-webkit-order:3;-ms-flex-order:3;order:3;}.upsell__header,.upsell__image,.upsell__footer{margin:initial;width:45%;}.upsell__header{-webkit-order:1;-ms-flex-order:1;order:1;}.upsell__footer{-webkit-order:2;-ms-flex-order:2;order:2;}}"]))
                        }
                    }, {
                        key: "pageSpecificPageviewData",
                        value: function() {
                            return {}
                        }
                    }, {
                        key: "pageHeadData",
                        value: function() {
                            return {
                                data: null
                            }
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function() {
                            var e = Object(r.a)(i.a.mark(function e(a) {
                                var n;
                                return i.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(c.a)(Object(p.a)(t), "getInitialProps", this).call(this, a);
                                        case 2:
                                            return n = e.sent, this.afterRelay({
                                                context: a,
                                                hasGQLError: !1,
                                                queryRecords: {},
                                                variables: {}
                                            }), e.abrupt("return", n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), t
                }(W.a);
            Object(d.a)(Q, "totalCacheLife", 1800), a.d(t, "default", function() {
                return Q
            })
        }
    },
    [
        ["aG6Q", 1, 0]
    ]
]);