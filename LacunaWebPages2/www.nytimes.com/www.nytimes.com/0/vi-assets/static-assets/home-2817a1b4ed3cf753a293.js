(window.webpackJsonp = window.webpackJsonp || []).push([
    [27, 1], {
        "/Ghh": function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o),
                i = (n("dRSK"), n("q1tI"), n("17x9"), n("UmXO")),
                a = n("wXC7"),
                s = n.n(a),
                l = n("KKRW"),
                c = s.a.breakpoint,
                d = s.a.color,
                u = Object(i.css)("background-color:", d.gray90, ";height:30px;", c.medium, "{display:none;}"),
                p = r()("div", {
                    className: u
                }),
                m = r()("div", {
                    className: u
                }),
                f = function(e) {
                    var t = e.block;
                    if (!t || !t.dataId) return p;
                    return ["alert", "spotlight", "briefing", "topstories", "editorspicks", "smarterliving", "discovery"].find((function(e) {
                        return e === Object(l.a)(t)
                    })) ? null : m
                };
            f.displayName = "BlockSeparator", f.defaultProps = {
                block: null
            }, t.a = f
        },
        "/giM": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return p
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "a", (function() {
                return f
            })), n.d(t, "e", (function() {
                return h
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "d", (function() {
                return v
            }));
            n("84bF"), n("xfY5"), n("KKXr");
            var o = n("J4zp"),
                r = n.n(o),
                i = n("UmXO"),
                a = n("3NoI"),
                s = n.n(a),
                l = n("wXC7"),
                c = n.n(l),
                d = function(e) {
                    var t = e.aspectRatio,
                        n = (2 === t.split(":").length && t.split(":") || ["16", "9"]).map(Number),
                        o = r()(n, 2),
                        i = o[0],
                        a = o[1];
                    return "".concat(String(a / i * 100), "%")
                },
                u = Object(i.keyframes)("0%{transform:rotate(20deg);}100%{transform:rotate(380deg);}"),
                p = s()("div", {
                    target: "etkm6pg0"
                })("position:relative;height:0;padding-bottom:", d, ";"),
                m = s()("div", {
                    target: "etkm6pg1"
                })("z-index:10000;position:relative;width:100%;height:0;background-color:", c.a.color.gray10, ";padding-bottom:", d, ";overflow:hidden;opacity:1;transition-delay:250ms;transition:opacity ", (function(e) {
                    return e.transitionDuration
                }), "ms ease-in-out;", (function(e) {
                    return e.isLoading ? "" : "opacity: 0;"
                }), "}", (function(e) {
                    var t = e.isTransitionDone,
                        n = e.isLoading;
                    return t && !n ? "display: none;" : ""
                }), "}"),
                f = s()("div", {
                    target: "etkm6pg2"
                })("filter:blur(10px) brightness(80%);position:absolute;width:100%;height:100%;img,video{object-fit:cover;width:100%;height:100%;transform:scale(1.1);}"),
                h = Object(i.css)("width:40px;height:40px;top:calc(50% - 20px);left:calc(50% - 20px);position:absolute;border-radius:50%;border:2px solid rgba(255,255,255,0.2);", c.a.breakpoint.small, "{width:60px;height:60px;top:calc(50% - 30px);left:calc(50% - 30px);}"),
                g = Object(i.css)("> div{width:40px;height:40px;position:absolute;top:-2px;left:-2px;right:0;bottom:0;border-radius:50%;border:2px solid rgba(255,255,255,1);border-color:rgba(255,255,255,1) transparent transparent;animation:", u, " 1500ms cubic-bezier(0.77,0.1,0.45,0.8) infinite;", c.a.breakpoint.small, "{width:60px;height:60px;}}> div:nth-child(2){animation-delay:80ms;}"),
                v = Object(i.css)("position:absolute;top:0;width:100%;height:100%;")
        },
        "00Pk": function(e, t, n) {
            "use strict";
            var o = n("mczz"),
                r = n("zWrI");
            t.a = function(e) {
                var t = e.location;
                return Object(o.e)(t, r.a.COMMENTS_PANEL) || Boolean(Object(o.b)(t, r.a.PERM_ID))
            }
        },
        "0JbW": function(e, t, n) {
            "use strict";
            var o, r, i, a, s, l, c = n("gcR/"),
                d = n.n(c),
                u = (n("91GP"), n("J4zp")),
                p = n.n(u),
                m = (n("Z2Ku"), n("L9s1"), n("lwsE")),
                f = n.n(m),
                h = n("W8MJ"),
                g = n.n(h),
                v = n("a1gu"),
                b = n.n(v),
                y = n("Nsbk"),
                O = n.n(y),
                w = n("7W2i"),
                x = n.n(w),
                k = n("q1tI"),
                j = (n("17x9"), n("X6oL")),
                M = n.n(j),
                P = n("06b3"),
                S = n("Rb+W"),
                C = n("pqFz"),
                E = n("ZKN5"),
                T = n("0Pd7"),
                I = n("kd6s"),
                N = n("r5Qd"),
                L = n("vwVQ"),
                D = n("BPYT"),
                A = n("UmXO"),
                R = n("3NoI"),
                H = n.n(R),
                B = n("wXC7"),
                _ = n.n(B),
                z = n("T6LI"),
                V = n.n(z),
                F = n("2CQb"),
                W = _.a.breakpoint,
                U = _.a.color,
                X = H()("div", {
                    target: "e12j3pa50"
                })(W.medium, "{position:relative;width:100vw;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;", (function(e) {
                    return e.isPaidPost && "\n      width: 103%;\n      margin-left: -1.5%;\n      margin-right: -1.5%;\n      left: 0;\n      right: 0;\n    "
                }), ";}", (function(e) {
                    return e.topAd && e.loader && "\n      background-image: url(".concat(V.a, ");\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: 200px 4px;\n  ")
                }), ";", (function(e) {
                    return e.hidden && "display: none"
                }), ";"),
                q = H()("div", {
                    target: "e12j3pa51"
                })("background-color:", U.gray90, ";border-top:1px solid ", U.gray60, ";padding-bottom:30px;", (function(e) {
                    return e.fixedHeight && "min-height: 250px;"
                }), ";", W.medium, "{border-bottom:1px solid ", U.gray80, ";border-top:1px solid ", U.gray80, ";", (function(e) {
                    return e.topAd ? "\n        padding-top: 15px;\n        padding-bottom: 15px;\n        border-top: 0;\n        border-bottom: 1px solid ".concat(U.gray60, ";\n        ") : "margin-bottom: 40px;"
                }), ";", (function(e) {
                    return e.flexFrame && "padding-top: 0;"
                }), ";", (function(e) {
                    return e.flexFrame && "padding-bottom: 0;"
                }), ";", (function(e) {
                    return e.mid1Ad && "\n      margin-bottom: 0;\n\n      ".concat(W.medium, " {\n        margin-bottom: 40px;\n      }\n\n      ").concat(W.mediumLarge, " {\n        margin-bottom: 0;\n      }\n    ")
                }), ";}"),
                G = H()("div", {
                    target: "e12j3pa52"
                })("&::after{content:'';display:block;background-color:", U.gray90, ";height:30px;text-align:center;border-top:1px solid ", U.gray60, ";}", (function(e) {
                    return e.topAd && "\n    background: ".concat(U.gray90, ";\n    border-top: 0;\n    padding-top: 0;\n    padding-bottom:0;\n  ")
                }), ";", W.medium, "{padding-bottom:28px;&::after{background-color:", U.gray60, ";height:0;text-align:center;border-top:0;}}"),
                K = {
                    mid1: Object(A.css)("order:", F.a.Grid + 1, ";"),
                    mid2: Object(A.css)("order:", F.a.InOtherNews - 1, ";", W.mediumLarge, "{order:", F.a.InOtherNews + 1, ";}"),
                    mid3: Object(A.css)("order:", F.a.SmarterLiving + 1, ";", W.mediumLarge, "{order:", F.a.Features + 1, ";}"),
                    bottom: Object(A.css)("order:", F.a.Discovery + 1, ";", W.mediumLarge, "{order:", F.a.MostPopularPlay + 1, ";}")
                },
                Y = {
                    top: "mid1",
                    mid1: "mid2",
                    mid2: "mid3",
                    mid3: "mid4",
                    bottom: "bottom"
                },
                J = (o = T.a.Consumer, r = M()((function(e) {
                    var t = "smartphone" === e.deviceType ? Y[e.position] : e.position;
                    return {
                        event: "impression",
                        eventData: {
                            type: "impression",
                            trigger: "ad"
                        },
                        pageview: {
                            ad: {
                                slotId: t || null,
                                position: t || null
                            }
                        }
                    }
                })), i = N.a.Consumer, Object(E.a)(a = o(a = r(a = Object(I.a)(a = i((l = s = function(e) {
                    function t() {
                        var e, n;
                        f()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = b()(this, (e = O()(t)).call.apply(e, [this].concat(r)))).state = {
                            adSlotVisible: !0,
                            standardAdHeight: !0,
                            flexFrame: !1,
                            isLuce: !1
                        }, n.adStyles = {}, n.hasAdStyles = !1, n.mktgPos = {
                            smartphone: ["mid1", "mid3", "bottom"],
                            tablet: ["top", "mid3", "bottom"],
                            desktop: ["top", "mid3", "bottom"]
                        }, n.adPosition = "smartphone" === n.props.deviceType ? Y[n.props.position] : n.props.position, n.showReportButton = P.a.load("vi_show_report_btn") || "", n.isMktgPos = function(e) {
                            return n.mktgPos[n.props.deviceType].includes(e)
                        }, n.hideContainer = function() {
                            n.setState({
                                adSlotVisible: !1
                            })
                        }, n.handleAdRendered = function(e) {
                            var t = n.props,
                                o = t.deviceType,
                                r = t.tracking.trackEvent,
                                i = e.advertiserId,
                                a = e.creativeTemplateId,
                                s = e.isEmpty,
                                l = e.size,
                                c = e.slot,
                                d = e.sourceAgnosticCreativeId,
                                u = e.sourceAgnosticLineItemId,
                                m = e.timeRendered,
                                f = p()(l, 2),
                                h = f[0],
                                g = f[1],
                                v = a === C.b,
                                b = 0 === h;
                            Object(D.a)({
                                trackEvent: r,
                                eventDetails: {
                                    creativeId: d,
                                    lineItemId: u,
                                    timeRendered: m,
                                    isEmpty: s
                                }
                            }), n.props.onRenderedCallback(l), n.setState({
                                isPaidPost: v
                            }), b && !v && n.setState({
                                flexFrame: !0
                            }), (b || 970 === h) && (n.hasAdStyles = !0), 250 === g ? n.setState({
                                standardAdHeight: !0
                            }) : 0 === g && "desktop" === o ? n.setState({
                                standardAdHeight: !0
                            }) : n.setState({
                                standardAdHeight: !1
                            }), "top" === n.adPosition || "smartphone" === o || n.hasAdStyles || (n.adStyles = {
                                width: "".concat(document.body.clientWidth, "px"),
                                marginLeft: "-".concat(document.body.clientWidth / 2, "px"),
                                left: "50%",
                                position: "relative"
                            }), n.showReportButton && (n.setState({
                                debug: {
                                    sourceAgnosticCreativeId: d,
                                    sourceAgnosticLineItemId: u,
                                    googleQueryId: c.getEscapedQemQueryId(),
                                    advertiserId: i,
                                    pageUrl: window.location.href,
                                    clickUrl: "",
                                    size: l
                                }
                            }), Object(S.g)(c).then((function(e) {
                                n.setState((function(t) {
                                    return {
                                        debug: Object.assign({}, t.debug, {
                                            clickUrl: e
                                        })
                                    }
                                }))
                            })))
                        }, n.handleAdLoaded = function(e) {
                            if (e.slot && "function" == typeof e.slot.getResponseInformation) {
                                var t = e.slot.getResponseInformation();
                                if (null !== t) {
                                    var o = t.sourceAgnosticCreativeId,
                                        r = t.sourceAgnosticLineItemId,
                                        i = n.props.tracking.trackEvent;
                                    Object(D.a)({
                                        trackEvent: i,
                                        eventDetails: {
                                            creativeId: o,
                                            lineItemId: r,
                                            timeLoaded: e.timeLoaded
                                        }
                                    })
                                }
                            }
                        }, n
                    }
                    return x()(t, e), g()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            "1" === Object(S.i)(P.a) && "out" === Object(S.e)(P.a) && this.setState({
                                isLuce: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.page,
                                n = e.user,
                                o = e.adReq,
                                r = e.onImpressionViewable,
                                i = e.onScriptError,
                                a = e.loader,
                                s = e.config,
                                l = e.position,
                                c = this.state,
                                u = c.adSlotVisible,
                                p = c.flexFrame,
                                m = c.standardAdHeight,
                                f = c.isLuce,
                                h = "top" === this.adPosition,
                                g = "mid1" === this.props.position,
                                v = K[l],
                                b = o;
                            return n && (b = Object(S.r)(n, o)), f && this.isMktgPos(this.adPosition) ? d()(G, {
                                className: v,
                                topAd: h
                            }, void 0, d()(L.a, {
                                targeting: b,
                                id: this.adPosition,
                                position: this.adPosition
                            })) : d()(X, {
                                className: v,
                                flexFrame: p,
                                isPaidPost: this.state.isPaidPost,
                                topAd: h,
                                hidden: !u,
                                loader: a
                            }, void 0, d()(q, {
                                flexFrame: p,
                                topAd: h,
                                mid1Ad: g,
                                fixedHeight: m
                            }, void 0, d()(C.a, {
                                hideContainer: this.hideContainer,
                                adId: this.adPosition,
                                page: t,
                                handleAdRendered: this.handleAdRendered,
                                handleAdLoaded: this.handleAdLoaded,
                                onImpressionViewable: r,
                                onScriptError: i,
                                adReq: o,
                                adData: this.showReportButton ? Object.assign({}, this.props, this.state.debug) : {},
                                config: s
                            })))
                        }
                    }]), t
                }(k.Component), s.defaultProps = {
                    page: "",
                    deviceType: "smartphone",
                    onRenderedCallback: function() {},
                    onImpressionViewable: function() {},
                    onScriptError: function() {},
                    adReq: {},
                    config: {},
                    user: void 0,
                    loader: void 0
                }, a = l)) || a) || a) || a) || a) || a);
            J.displayName = "BlockAdvert";
            t.a = J
        },
        "0Pd7": function(e, t, n) {
            "use strict";
            var o = n("pVnL"),
                r = n.n(o),
                i = (n("f3/d"), n("gcR/")),
                a = n.n(i),
                s = n("QILm"),
                l = n.n(s),
                c = n("q1tI"),
                d = n.n(c),
                u = n("E00O"),
                p = n("vEu8"),
                m = d.a.createContext({});
            t.a = {
                Provider: function(e) {
                    var t = Object(p.a)((function(t) {
                            var n = t.deviceType,
                                o = t.breakpoint,
                                r = t.initialDeviceType,
                                i = t.maxWidthMatches,
                                s = t.minWidthMatches,
                                c = t.supportsTouch,
                                p = l()(t, ["deviceType", "breakpoint", "initialDeviceType", "maxWidthMatches", "minWidthMatches", "supportsTouch"]),
                                f = "tablet" === n && o >= u.a.BREAKPOINT_ML;
                            return a()(m.Provider, {
                                value: {
                                    deviceType: n,
                                    breakpoint: o,
                                    initialDeviceType: r,
                                    maxWidthMatches: i,
                                    minWidthMatches: s,
                                    supportsTouch: c,
                                    isLargeTablet: f,
                                    updatedDeviceType: f ? "largeTablet" : n
                                }
                            }, void 0, d.a.createElement(e, p))
                        })),
                        n = e.displayName || e.name || "Component";
                    return t.displayName = "WithResponsiveProvider(".concat(n, ")"), t
                },
                Consumer: function(e) {
                    var t = function(t) {
                            return a()(m.Consumer, {}, void 0, (function(n) {
                                return d.a.createElement(e, r()({}, t, n))
                            }))
                        },
                        n = e.displayName || e.name || "Component";
                    return t.displayName = "WithResponsiveConsumer(".concat(n, ")"), t
                }
            }
        },
        "2CQb": function(e, t, n) {
            "use strict";
            t.a = {
                TopOfPage: 10,
                MoreProgrammables: 25,
                Grid: 20,
                InOtherNews: 30,
                SmarterLiving: 40,
                Features: 50,
                Discovery: 60,
                MostPopularPlay: 70,
                Well: 80
            }
        },
        "4jtI": function(e, t, n) {
            "use strict";
            var o = n("pVnL"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = (n("OG14"), n("lwsE")),
                l = n.n(s),
                c = n("W8MJ"),
                d = n.n(c),
                u = n("a1gu"),
                p = n.n(u),
                m = n("Nsbk"),
                f = n.n(m),
                h = n("7W2i"),
                g = n.n(h),
                v = n("q1tI"),
                b = n.n(v),
                y = (n("17x9"), n("X6oL")),
                O = n.n(y),
                w = n("QS0n"),
                x = n("UmXO"),
                k = n("41jq"),
                j = n("hKI/"),
                M = n.n(j),
                P = n("60yG"),
                S = n.n(P),
                C = n("cr+I"),
                E = n("Vc97"),
                T = n("ZKN5"),
                I = n("5TEs"),
                N = n("00Pk");
            var L = n("j1S3"),
                D = n("bQ5B"),
                A = n("u1H9"),
                R = n("Lkij"),
                H = n("eJDT"),
                B = Object(x.css)("position:fixed;top:70px;height:100%;width:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 100%);pointer-events:none;"),
                _ = n("9+Rx"),
                z = (n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("lSNA")),
                V = n.n(z),
                F = n("rI8Z"),
                W = n("icq2"),
                U = n("E/Bz"),
                X = (n("SMB2"), n("84bF"), n("3NoI")),
                q = n.n(X),
                G = n("R+TL"),
                K = n("uwQJ"),
                Y = "".concat(K.d.dockHeaderHeight.small, "px"),
                J = "".concat(K.d.dockHeaderHeight.mediumLarge, "px"),
                Z = Object(x.keyframes)("0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}"),
                Q = Object(x.keyframes)("0%{opacity:0;}50%{opacity:0;}100%{opacity:1;}"),
                $ = Object(x.css)("background-color:", G.a.color.white, ";color:", G.a.color.black, ";"),
                ee = Object(x.css)("background-color:", G.a.color.gray20, ";color:", G.a.color.white, ";"),
                te = q()("div", {
                    target: "egw6tc40"
                })("height:", (function(e) {
                    return e.theme.dockHeaderHeight.mobileSmall
                }), "px;padding-bottom:", (function(e) {
                    return e.theme.dockHeaderOffset.mobileSmall
                }), "px;width:100%;font-family:", G.a.font.franklin, ";border-radius:0;transition:background-color 250ms linear,0.15s padding ease-out;", G.a.breakpoint.mobileLarge, "{height:", (function(e) {
                    return e.theme.dockHeaderHeight.mobileLarge
                }), "px;padding-bottom:", (function(e) {
                    return e.theme.dockHeaderOffset.mobileLarge
                }), "px;}", G.a.breakpoint.small, "{height:", (function(e) {
                    return e.theme.dockHeaderHeight.small
                }), "px;padding-bottom:", (function(e) {
                    return e.theme.dockHeaderOffset.small
                }), "px;}", G.a.breakpoint.mediumLarge, "{height:", (function(e) {
                    return e.theme.dockHeaderHeight.mediumLarge
                }), "px;padding-bottom:", (function(e) {
                    return e.theme.dockHeaderOffset.mediumLarge
                }), "px;}"),
                ne = Object(x.css)("padding-bottom:0px;", G.a.breakpoint.mobileLarge, "{padding-bottom:0;}", G.a.breakpoint.small, "{padding-bottom:0;}", G.a.breakpoint.mediumLarge, "{padding-bottom:0;}"),
                oe = Object(x.css)("display:flex;align-items:center;justify-content:space-between;height:100%;max-width:", G.a.breakpoint.mediaMaxWidth, "px;margin:auto;padding:0;-webkit-font-smoothing:antialiased !important;outline:aliceblue;strong{font-weight:", G.a.font.weight.bold, ";}", G.a.breakpoint.medium, "{padding:0 20px;}"),
                re = Object(x.css)("width:100%;font-family:", G.a.font.franklin, ";text-align:left;span{display:inline;}", G.a.breakpoint.mediumLarge, "{text-align:center;padding-left:190px;}"),
                ie = q()("div", {
                    target: "egw6tc41"
                })("position:absolute;height:", (function(e) {
                    return e.theme.dockHeaderHeight.mobileSmall
                }), "px;top:0;bottom:0;right:0;left:0;margin:0 70px 0 20px;display:flex;flex-direction:column;justify-content:center;", G.a.breakpoint.mobileLarge, "{height:", (function(e) {
                    return e.theme.dockHeaderHeight.mobileLarge
                }), "px;}", G.a.breakpoint.small, "{height:", (function(e) {
                    return e.theme.dockHeaderHeight.small
                }), "px;}", G.a.breakpoint.mediumLarge, "{height:", (function(e) {
                    return e.theme.dockHeaderHeight.mediumLarge
                }), "px;margin:0;}", G.a.breakpoint.large, "{margin:0;}"),
                ae = Object(x.css)("font-size:15px;line-height:17px;opacity:1;span{white-space:nowrap;&::after{content:'  ';white-space:pre-line;}}"),
                se = Object(x.css)("opacity:0;animation:", Z, " 0.5s;"),
                le = Object(x.css)("opacity:1;animation:", Q, " 0.5s;"),
                ce = Object(x.css)("display:flex;justify-content:flex-end;flex-direction:row;", G.a.breakpoint.medium, "{min-width:160px;}"),
                de = Object(x.css)("display:flex;justify-content:center;align-items:center;background-color:transparent;outline:aliceblue;width:", Y, ";height:", Y, ";z-index:1;", G.a.breakpoint.mediumLarge, "{height:", J, ";width:", J, ";}svg{height:15px;margin:auto;width:15px;}"),
                ue = Object(x.css)("transition:transform 500ms ease;"),
                pe = Object(x.css)("transform:rotate(-90deg);"),
                me = Object(x.css)("transform:rotate(90deg);"),
                fe = Object(x.css)("margin:0 15px 0 0;display:block;", G.a.breakpoint.medium, "{display:block;}"),
                he = Object(x.css)("cursor:pointer;font-size:12px;text-transform:uppercase;font-weight:", G.a.font.weight.bold, ";font-family:", G.a.font.franklin, ";letter-spacing:0.24px;height:", Y, ";line-height:calc(", Y, " + 3px);white-space:nowrap;margin:0;padding:0;display:none;&.", se, "{animation:", Z, " 400ms;}&.", le, "{animation:", Q, " 400ms;}", G.a.breakpoint.mediumLarge, "{display:block;height:", J, ";line-height:calc(", J, " + 3px);}"),
                ge = Object(x.css)("cursor:pointer;"),
                ve = Object(x.css)("outline:none;"),
                be = Object(x.css)("display:none;"),
                ye = Object(x.css)("border-right:1px solid ", G.a.color.gray55, ";display:block;height:30px;margin:auto 0;", G.a.breakpoint.medium, "{display:none;}"),
                Oe = ue,
                we = pe,
                xe = me,
                ke = function(e) {
                    var t = e.coloredHeading,
                        n = e.dockSize,
                        o = e.dockExpanded;
                    if (!e.isDockDismissible) {
                        var r, i = "standard" === n,
                            s = t ? "#fff" : "#111",
                            l = !i && !o,
                            c = !i && o,
                            d = Object(x.cx)(Oe, (r = {}, V()(r, we, l), V()(r, xe, c), r));
                        return a()(W.a, {
                            className: d,
                            fill: s
                        })
                    }
                    var u = t ? "#ffffff" : "#010101";
                    return a()(U.a, {
                        fill: u
                    })
                };
            ke.displayName = "ActionIcon", ke.defaultProps = {
                coloredHeading: !1,
                dockExpanded: !1,
                isDockDismissible: void 0
            };
            var je = ke,
                Me = ce,
                Pe = fe,
                Se = he,
                Ce = de,
                Ee = ge,
                Te = se,
                Ie = le,
                Ne = ve,
                Le = ye,
                De = a()("div", {
                    className: Le
                }),
                Ae = function(e) {
                    var t, n = e.contentID,
                        o = e.coloredHeading,
                        r = e.dockExpanded,
                        i = e.dockSize,
                        s = e.isDockDismissible,
                        l = e.headerExpandedCTA,
                        c = e.headerCollapsedCTA,
                        d = e.headerCTA,
                        u = e.onDockCTAClick,
                        p = e.onDockHeadingClick,
                        m = e.showFocus,
                        f = e.toggleChangedMessages,
                        h = "standard" === i,
                        g = !r && f,
                        v = "".concat("standard" === i ? "standard" : "expanded", "-dock-btn-selector"),
                        b = Object(x.cx)(Ce, (t = {}, V()(t, Ne, m), V()(t, Ee, s), t)),
                        y = function(e) {
                            var t, n, o = e.dockExpanded,
                                r = e.isStandard,
                                i = e.shouldFadeIn,
                                a = Object(x.cx)(Se, (t = {}, V()(t, Te, !o), V()(t, Ie, o), t)),
                                s = Object(x.cx)(Se, (n = {}, V()(n, Te, o), V()(n, Ie, i), n));
                            return !r && o ? i ? s : a : Se
                        }({
                            dockExpanded: r,
                            isStandard: h,
                            shouldFadeIn: g
                        }),
                        O = function(e) {
                            var t = e.isDockDismissible,
                                n = e.dockExpanded,
                                o = e.isStandard,
                                r = e.shouldFadeIn,
                                i = e.headerCTA,
                                a = e.headerCollapsedCTA,
                                s = e.headerExpandedCTA;
                            return t ? "" : o ? i : !n || r ? a : s
                        }({
                            isDockDismissible: s,
                            dockExpanded: r,
                            isStandard: h,
                            shouldFadeIn: g,
                            headerCTA: d,
                            headerCollapsedCTA: c,
                            headerExpandedCTA: l
                        }),
                        w = h && !s ? "Button to subscription page" : !h && r ? "Button to collapse the message" : h || r ? s || "gdpr" === n ? "Button to close this message" : "" : "Button to expand the message";
                    return a()("div", {
                        className: Me
                    }, void 0, a()("div", {
                        className: Pe
                    }, void 0, a()("p", {
                        className: y
                    }, void 0, O)), De, a()("button", {
                        "data-testid": v,
                        type: "button",
                        className: b,
                        onClick: u,
                        onKeyPress: p,
                        "aria-label": w
                    }, void 0, a()(je, {
                        dockSize: i,
                        dockExpanded: r,
                        coloredHeading: o,
                        isDockDismissible: s
                    })))
                };
            Ae.displayName = "CallToAction", Ae.defaultProps = {
                contentID: "",
                coloredHeading: !1,
                dockExpanded: !1,
                isDockDismissible: void 0,
                headerExpandedCTA: "",
                headerCollapsedCTA: "",
                headerCTA: void 0,
                onDockCTAClick: function() {},
                onDockHeadingClick: function() {},
                showFocus: !1,
                toggleChangedMessages: !1
            };
            var Re = Ae,
                He = te,
                Be = oe,
                _e = re,
                ze = ie,
                Ve = ae,
                Fe = ge,
                We = se,
                Ue = le,
                Xe = be,
                qe = ve,
                Ge = ee,
                Ke = $,
                Ye = ne,
                Je = function(e) {
                    function t() {
                        var e, n;
                        l()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = p()(this, (e = f()(t)).call.apply(e, [this].concat(r)))).state = {
                            offerVisible: "standard" === n.props.dockSize,
                            meterVisible: "standard" !== n.props.dockSize,
                            toggleChangedMessages: !1,
                            showFocus: !1,
                            coloredHeading: !1
                        }, n.onDockHeadingKeyUp = function(e) {
                            9 === e.keyCode && n.setState({
                                showFocus: !0
                            })
                        }, n.getHeadingStyling = function() {
                            var e, t = n.props,
                                o = t.contentID,
                                r = t.dockExpanded,
                                i = n.state.coloredHeading,
                                a = "gdpr" === o,
                                s = (e = {}, V()(e, qe, !n.state.showFocus), V()(e, Fe, !a), V()(e, Ye, r), e);
                            return s[[Ke]] = !i, s[[Ge]] = i, s
                        }, n
                    }
                    return g()(t, e), d()(t, [{
                        key: "render",
                        value: function() {
                            var e, t, n, o = this.props,
                                r = o.contentID,
                                i = o.dockSize,
                                s = o.isDockDismissible,
                                l = o.dockExpanded,
                                c = o.headerCTA,
                                d = o.header2,
                                u = o.header1,
                                p = o.onDockHeadingClick,
                                m = o.onDockCTAClick,
                                f = o.headerCollapsedCTA,
                                h = o.headerExpandedCTA,
                                g = this.state,
                                v = g.offerVisible,
                                b = g.meterVisible,
                                y = g.toggleChangedMessages;
                            return n = "standard" === i ? "standard-dock-heading-selector" : "expanded-dock-heading-selector", a()(He, {
                                className: Object(x.cx)(this.getHeadingStyling()),
                                onClick: p,
                                onKeyPress: p,
                                onKeyUp: this.onDockHeadingKeyUp,
                                role: "button",
                                tabIndex: 0,
                                "data-testid": n
                            }, void 0, a()("div", {
                                className: Be
                            }, void 0, a()("div", {
                                className: _e
                            }, void 0, a()(ze, {}, void 0, a()("div", {
                                className: Object(x.cx)(Ve, (e = {}, V()(e, We, "standard" !== i && !v), V()(e, Ue, "standard" !== i && v), V()(e, Xe, "standard" !== i && !v && !y), e))
                            }, void 0, d)), a()(ze, {}, void 0, a()("div", {
                                className: Object(x.cx)(Ve, (t = {}, V()(t, We, "standard" !== i && !b), V()(t, Ue, "standard" !== i && b && y), V()(t, Xe, "standard" === i), t))
                            }, void 0, u))), a()(Re, {
                                contentID: r,
                                coloredHeading: this.state.coloredHeading,
                                dockExpanded: l,
                                dockSize: i,
                                isDockDismissible: s,
                                headerExpandedCTA: h,
                                headerCollapsedCTA: f,
                                headerCTA: c,
                                onDockCTAClick: m,
                                onDockHeadingClick: p,
                                showFocus: this.state.showFocus,
                                toggleChangedMessages: y
                            })))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = e.scrollThresholdMet,
                                o = e.dockSize,
                                r = e.dockExpanded,
                                i = t.meterVisible,
                                a = t.offerVisible,
                                s = {};
                            return n && ("standard" === o ? s.coloredHeading = !0 : (s.meterVisible = !1, s.offerVisible = !0)), r && !i && (s.meterVisible = !0, s.offerVisible = !1, s.toggleChangedMessages = !0), r || a || (s.meterVisible = !1, s.offerVisible = !0, s.toggleChangedMessages = !0), Object.keys(s).length > 0 ? s : null
                        }
                    }]), t
                }(v.Component);
            Je.displayName = "DockHeading", Je.defaultProps = {
                contentID: "",
                isDockDismissible: void 0,
                onDockHeadingClick: function() {},
                onDockCTAClick: function() {},
                dockExpanded: !1,
                scrollThresholdMet: !1,
                headerCTA: void 0,
                header1: null,
                header2: null,
                headerCollapsedCTA: F.c.meter.seeMyOptions,
                headerExpandedCTA: F.c.meter.collapse
            };
            var Ze = q()("div", {
                    target: "ejw0p350"
                })("position:relative;bottom:0;width:100%;height:", (function(e) {
                    return e.theme.dockContentHeight.mobileSmall
                }), "px;z-index:", G.a.zIndex.dock, ";opacity:1;background-color:", G.a.color.white, ";padding:5px 20px 20px;box-sizing:border-box;overflow:hidden;-webkit-font-smoothing:antialiased;", G.a.breakpoint.mobileLarge, "{height:", (function(e) {
                    return e.theme.dockContentHeight.mobileLarge
                }), "px;}", G.a.breakpoint.small, "{height:", (function(e) {
                    return e.theme.dockContentHeight.small
                }), "px;}"),
                Qe = function(e) {
                    var t = e.card;
                    return a()(Ze, {}, void 0, t)
                };
            Qe.displayName = "DockContent", Qe.defaultProps = {
                card: null
            };
            var $e, et, tt, nt, ot = Qe,
                rt = q()("div", {
                    target: "e1x0szx60"
                })("position:fixed;height:", (function(e) {
                    return e.theme.dockContentHeight.mobileSmall + e.theme.dockHeaderHeight.mobileSmall + e.theme.dockHeaderOffset.mobileSmall
                }), "px;z-index:", G.a.zIndex.dock, ";bottom:", (function(e) {
                    return 0 - (e.theme.dockContentHeight.mobileSmall + e.theme.dockHeaderHeight.mobileSmall + e.theme.dockHeaderOffset.mobileSmall + 1)
                }), "px;width:100%;border-top:1px solid ", G.a.color.gray20, ";transition:transform ", (function(e) {
                    return e.theme.dockExpandSpeed
                }), " ease-out;background-color:", G.a.color.white, ";will-change:transform;", G.a.breakpoint.mobileLarge, "{height:", (function(e) {
                    return e.theme.dockContentHeight.mobileLarge + e.theme.dockHeaderHeight.mobileLarge + e.theme.dockHeaderOffset.mobileLarge
                }), "px;bottom:", (function(e) {
                    return 0 - (e.theme.dockContentHeight.mobileLarge + e.theme.dockHeaderHeight.mobileLarge + e.theme.dockHeaderOffset.mobileLarge + 1)
                }), "px;}", G.a.breakpoint.small, "{height:", (function(e) {
                    return e.theme.dockContentHeight.small + e.theme.dockHeaderHeight.small + e.theme.dockHeaderOffset.small
                }), "px;bottom:", (function(e) {
                    return 0 - (e.theme.dockContentHeight.small + e.theme.dockHeaderHeight.small + e.theme.dockHeaderOffset.small + 1)
                }), "px;}", G.a.breakpoint.mediumLarge, "{height:", (function(e) {
                    return e.theme.dockContentHeight.mediumLarge + e.theme.dockHeaderHeight.mediumLarge + e.theme.dockHeaderOffset.mediumLarge
                }), "px;bottom:", (function(e) {
                    return 0 - (e.theme.dockContentHeight.mediumLarge + e.theme.dockHeaderHeight.mediumLarge + e.theme.dockHeaderOffset.mediumLarge + 1)
                }), "px;}@media print{display:none;}.NYTApp &{display:none;}&.shown{transform:translateY( ", (function(e) {
                    return 0 - e.theme.dockHeaderHeight.mobileSmall - e.theme.dockHeaderOffset.mobileSmall - 1
                }), "px );", G.a.breakpoint.mobileLarge, "{transform:translateY( ", (function(e) {
                    return 0 - e.theme.dockHeaderHeight.mobileLarge - e.theme.dockHeaderOffset.mobileLarge - 1
                }), "px );}", G.a.breakpoint.small, "{transform:translateY( ", (function(e) {
                    return 0 - e.theme.dockHeaderHeight.small - e.theme.dockHeaderOffset.small - 1
                }), "px );}", G.a.breakpoint.mediumLarge, "{transform:translateY( ", (function(e) {
                    return 0 - e.theme.dockHeaderHeight.mediumLarge - e.theme.dockHeaderOffset.mediumLarge - 1
                }), "px );}}&.expanded{transform:translateY( ", (function(e) {
                    return 1 - (e.theme.dockContentHeight.mobileSmall + e.theme.dockHeaderHeight.mobileSmall)
                }), "px );", G.a.breakpoint.mobileLarge, "{transform:translateY( ", (function(e) {
                    return 1 - (e.theme.dockContentHeight.mobileLarge + e.theme.dockHeaderHeight.mobileLarge)
                }), "px );}", G.a.breakpoint.small, "{transform:translateY( ", (function(e) {
                    return 1 - (e.theme.dockContentHeight.small + e.theme.dockHeaderHeight.small)
                }), "px );}", G.a.breakpoint.mediumLarge, "{transform:translateY( ", (function(e) {
                    return 1 - (e.theme.dockContentHeight.mediumLarge + e.theme.dockHeaderHeight.mediumLarge)
                }), "px );}}"),
                it = ($e = O()(), Object(D.a)(et = Object(T.a)(et = Object(w.withRouter)(et = Object(I.a)(et = Object(E.a)(et = $e((nt = tt = function(e) {
                    function t() {
                        var e, n;
                        l()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = p()(this, (e = f()(t)).call.apply(e, [this].concat(r)))).state = {
                            scrollThresholdMet: !1,
                            freezeDock: !1,
                            firstView: !0,
                            dismissed: !1
                        }, n.previousScrollTop = 0, n.previousScrollDirection = "none", n.freezeDockTimer = null, n.trackImpressionOnce = S()((function() {
                            var e = n.props,
                                t = e.dockSize,
                                o = e.contentID,
                                r = e.pageCount,
                                i = e.tracking,
                                a = e.segments,
                                s = {
                                    event: "impression",
                                    module: {
                                        name: "dock",
                                        context: t,
                                        label: o,
                                        region: Object(A.g)(r)
                                    }
                                },
                                l = Object(L.a)();
                            "number" == typeof l && (s.eventData = {
                                pagetype: "article",
                                trigger: "module",
                                timeRendered: Date.now() - l
                            }), i.trackEvent(s), a.forEach((function(e) {
                                Object(R.e)(e.testName)
                            }))
                        })), n.isDockVisible = function() {
                            return n.props.overlayContext.overlays.dock.visible
                        }, n.isDockExpanded = function() {
                            return n.isDockVisible() && "expanded" === n.props.overlayContext.overlays.dock.mode
                        }, n.calculateDisplayingExceptions = function() {
                            var e = n.props,
                                t = e.showDock,
                                o = e.location,
                                r = n.state.dismissed,
                                i = Object(C.parse)(o.search);
                            if (r) return !1;
                            if (n.isDockVisible()) return !0;
                            if (!t) return !1;
                            if (n.props.overlayContext.overlays.truncator.exists) {
                                if (!n.isTruncatorReady()) return !1;
                                if (n.isTruncatorVisible() && "acm" !== n.props.overlayContext.overlays.truncator.mode && "gdpr" !== n.props.contentID) return !1
                            }
                            if (Object(H.c)(i)) return !1;
                            if (n.props.overlayContext.overlays.onetap.exists) {
                                if (!n.props.overlayContext.overlays.onetap.ready) return !1;
                                if (n.props.overlayContext.overlays.onetap.visible) return !1
                            }
                            return !0
                        }, n.calculateHidingExceptions = function() {
                            var e = n.props.contentID;
                            return !!n.isDockVisible() && "gdpr" === e
                        }, n.setDockVisibility = function(e) {
                            var t = e ? n.calculateDisplayingExceptions() : n.calculateHidingExceptions();
                            n.isDockVisible() !== t && n.props.overlayContext.setVisibility("dock", t)
                        }, n.setDockExpanded = function() {
                            n.props.overlayContext.setMode("dock", "expanded")
                        }, n.setDockStandard = function() {
                            n.props.overlayContext.setMode("dock", "standard")
                        }, n.isTruncatorReady = function() {
                            return n.props.overlayContext.overlays.truncator.ready
                        }, n.isTruncatorVisible = function() {
                            return n.isTruncatorReady() && n.props.overlayContext.overlays.truncator.visible
                        }, n.checkIfPageScrolledToThreshold = function() {
                            var e = n.props,
                                t = e.contentID,
                                o = e.showDock,
                                r = n.state,
                                i = r.scrollThresholdMet,
                                a = r.freezeDock,
                                s = "gdpr" === t,
                                l = function(e, t) {
                                    var n = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                                        o = n > e ? "down" : "up",
                                        r = t;
                                    return o === t ? r = o : Math.abs(n - e) > 50 && (r = o), {
                                        currentScrollTop: n,
                                        currentScrollDirection: r
                                    }
                                }(n.previousScrollTop, n.previousScrollDirection),
                                c = l.currentScrollTop,
                                d = l.currentScrollDirection,
                                u = c >= 300;
                            c === n.previousScrollTop || !o || a || s || (n.isDockExpanded() && n.setDockStandard(), u && !i && n.setState({
                                scrollThresholdMet: !0
                            }), n.previousScrollTop = c, n.previousScrollDirection = d)
                        }, n.closeDock = function() {
                            var e = n.props,
                                t = e.dockSize,
                                o = e.isDockDismissible,
                                r = e.contentID,
                                i = e.pageCount;
                            if (o) {
                                n.setState({
                                    dismissed: !0
                                }, n.setDockVisibility(!1));
                                var a = Object(A.g)(i),
                                    s = "standard" === t ? t : "expanded";
                                n.props.tracking.trackEvent({
                                    event: "moduleInteraction",
                                    eventData: {
                                        pagetype: "article",
                                        trigger: "module",
                                        type: "click"
                                    },
                                    module: {
                                        name: "dock",
                                        context: s,
                                        label: r,
                                        region: a,
                                        element: {
                                            name: "",
                                            label: "Close",
                                            url: ""
                                        }
                                    }
                                })
                            }
                        }, n.onDockCTAClick = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = n.props,
                                o = t.onDockCTAClick,
                                r = t.isDockDismissible,
                                i = e.currentTarget,
                                a = "button" === i.tagName.toLowerCase();
                            r && a && (e.stopPropagation(), n.closeDock()), o()
                        }, n.onDockHeadingClick = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.currentTarget,
                                o = void 0 === t ? {} : t,
                                r = o.href,
                                i = void 0 === r ? "" : r,
                                a = o.textContent,
                                s = void 0 === a ? "" : a,
                                l = n.props,
                                c = l.dockSize,
                                d = l.isDockDismissible,
                                u = l.contentID,
                                p = l.headerLink,
                                m = l.pageCount,
                                f = l.tracking,
                                h = "button" === o.tagName.toLowerCase(),
                                g = d && h,
                                v = "gdpr" === u;
                            if (!g && !v) {
                                var b = n.isDockExpanded(),
                                    y = "standard" === c,
                                    O = Object(A.g)(m),
                                    w = y ? c : "expanded",
                                    x = Object(_.e)({
                                        contentID: u,
                                        isExpanded: b,
                                        isStandard: y
                                    });
                                f.trackEvent({
                                    event: "moduleInteraction",
                                    eventCallback: function() {
                                        return Object(_.f)({
                                            isStandard: y,
                                            headerLink: p
                                        })
                                    },
                                    eventData: {
                                        pagetype: "article",
                                        trigger: "module",
                                        type: "click"
                                    },
                                    module: {
                                        name: "dock",
                                        context: w,
                                        label: u,
                                        region: O,
                                        element: {
                                            name: x,
                                            label: s,
                                            url: i
                                        }
                                    }
                                }), y || (b ? n.setDockStandard() : n.setDockExpanded())
                            }
                        }, n.handleScroll = M()(n.checkIfPageScrolledToThreshold, 300), n
                    }
                    return g()(t, e), d()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.overlayContext.registerOverlay("dock"), this.setDockVisibility(!0), window.addEventListener("scroll", this.handleScroll)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this,
                                t = this.state.firstView;
                            this.setDockVisibility(!0), this.isDockVisible() && t && (this.props.minimized ? this.setState({
                                firstView: !1,
                                freezeDock: !1
                            }, this.setDockStandard()) : (this.freezeDockTimer = setTimeout((function() {
                                return e.setState({
                                    freezeDock: !1
                                })
                            }), 3e3), this.setState({
                                firstView: !1,
                                freezeDock: !0
                            }, this.setDockExpanded())), this.trackImpressionOnce())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("scroll", this.handleScroll), clearTimeout(this.freezeDockTimer)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.dockTheme,
                                n = e.card,
                                o = e.contentID,
                                i = e.dockSize,
                                s = e.onDockHeadingClick,
                                l = this.state.scrollThresholdMet,
                                c = Object(_.d)({
                                    dockSize: i,
                                    contentID: o
                                }),
                                d = "".concat(c, "-dock"),
                                u = Object(N.a)({
                                    location: this.props.location
                                }),
                                p = null;
                            return n && (p = b.a.cloneElement(n, {
                                closeDock: this.closeDock
                            })), b.a.createElement(b.a.Fragment, null, "app_download_newDock" === o && this.isDockExpanded() && a()("div", {
                                className: B
                            }), a()(k.ThemeProvider, {
                                theme: t
                            }, void 0, a()(rt, {
                                className: Object(x.cx)(o, {
                                    shown: this.isDockVisible() && !u,
                                    expanded: this.isDockExpanded() && !u,
                                    standard: "standard" === i,
                                    "expanded-dock": "standard" !== i
                                }),
                                "data-testid": d,
                                "aria-label": "A message from The Times"
                            }, void 0, b.a.createElement(Je, r()({}, this.props, {
                                dockExpanded: this.isDockExpanded(),
                                theme: t,
                                onDockCTAClick: this.onDockCTAClick,
                                onDockHeadingClick: s || this.onDockHeadingClick,
                                scrollThresholdMet: l,
                                dockShown: this.isDockVisible() && !u
                            })), b.a.createElement(ot, r()({}, this.props, {
                                tabIndex: "0",
                                dockExpanded: this.isDockExpanded(),
                                theme: t,
                                card: p
                            })))))
                        }
                    }]), t
                }(v.Component), tt.defaultProps = {
                    card: null,
                    onDockCTAClick: function() {},
                    headerLink: "https://www.nytimes.com",
                    minimized: !0,
                    pageCount: null,
                    user: null,
                    showDock: !1,
                    geolocation: {},
                    segments: [],
                    onDockHeadingClick: null
                }, et = nt)) || et) || et) || et) || et) || et) || et);
            it.displayName = "Dock";
            t.a = it
        },
        "5dFD": function(e, t, n) {
            "use strict";
            var o = n("VkAN"),
                r = n.n(o),
                i = (n("Z2Ku"), n("pVnL")),
                a = n.n(i),
                s = (n("OG14"), n("tUrg"), n("QILm")),
                l = n.n(s),
                c = (n("KKXr"), n("q1tI")),
                d = n.n(c),
                u = (n("17x9"), n("Dugd")),
                p = n.n(u),
                m = n("KeRS"),
                f = n.n(m),
                h = n("CxY0");

            function g() {
                var e = r()(["\n    fragment ContentLink_link on Linkable {\n      __typename\n      url\n      id\n      ... on Promo {\n        targetUrl\n      }\n    }\n  "]);
                return g = function() {
                    return e
                }, e
            }
            var v = {
                    Article: !0,
                    Image: !0,
                    Section: !0,
                    LegacyCollection: !0
                },
                b = {
                    cooking: !0
                },
                y = {
                    www: !0,
                    alpha: !0,
                    nytimes: !0
                },
                O = ["www.legacy.com"],
                w = function(e, t) {
                    return t && (e.indexOf("?") > -1 ? e += "&".concat(t.split("?")[1]) : e += t), e
                },
                x = function(e) {
                    var t, n, o, r, i, s, c, u = e.link,
                        p = (e.source, e.children),
                        m = e.search,
                        g = e.disableLink,
                        x = l()(e, ["link", "source", "children", "search", "disableLink"]);
                    if (g) return d.a.createElement(d.a.Fragment, null, p);
                    if (u && u.url) {
                        var k, j, M = t = Object(h.parse)(u.url);
                        i = M.pathname, s = M.search, c = M.hash, o = M.href;
                        var P = null === (k = r = M.hostname) || void 0 === k ? void 0 : k.split(".");
                        n = null == P ? void 0 : P[0];
                        var S = "Article" === u.__typename && (null === (j = r) || void 0 === j ? void 0 : j.indexOf("blogs")) > -1;
                        if (b[n] || S) return d.a.createElement("a", a()({
                            href: o
                        }, x), p)
                    }
                    var C = function(e, t) {
                        var n = "";
                        return t ? (n += t, e && (n += "&".concat(e.split("?")[1]))) : e && (n += e), n
                    }(m, s);
                    if (!v[u.__typename]) {
                        var E = n && (y[n] || 0 === n.indexOf("preview-")) && !O.includes(t.hostname),
                            T = "";
                        return T = "Promo" === u.__typename ? w(u.targetUrl, m) : E ? "".concat(i).concat(C) : w(o, m), d.a.createElement("a", a()({
                            href: T
                        }, x), p)
                    }
                    var I = {
                        pathname: i,
                        search: C,
                        hash: c
                    };
                    return d.a.createElement(f.a, a()({
                        to: I
                    }, x), p)
                };
            x.displayName = "ContentLink", x.defaultProps = {
                search: null,
                children: null,
                disableLink: void 0,
                source: void 0
            }, x.fragments = {
                link: p()(g())
            }, t.a = x
        },
        "6D+t": function(e, t) {
            e.exports = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return '(function () { var _f=function(){var t,e,o=50,n=50;function i(t){if(!document.getElementById("3pCheckIframeId")){if(t||(t=1),!document.body){if(t>o)return;return t+=1,setTimeout(i.bind(null,t),n)}var e,a,r;e="https://static01.nyt.com/ads/tpc-check.html",a=document.body,(r=document.createElement("iframe")).src=e,r.id="3pCheckIframeId",r.style="display:none;",r.height=0,r.width=0,a.insertBefore(r,a.firstChild)}}function a(t){if("https://static01.nyt.com"===t.origin)try{"3PCookieSupported"===t.data&&googletag.cmd.push(function(){googletag.pubads().setTargeting("cookie","true")}),"3PCookieNotSupported"===t.data&&googletag.cmd.push(function(){googletag.pubads().setTargeting("cookie","false")})}catch(t){}}function r(){if(function(){if(Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0)return!0;if("[object SafariRemoteNotification]"===(!window.safari||safari.pushNotification).toString())return!0;try{return window.localStorage&&/Safari/.test(window.navigator.userAgent)}catch(t){return!1}}()){try{window.openDatabase(null,null,null,null)}catch(e){return t(),!0}try{localStorage.length?e():(localStorage.x=1,localStorage.removeItem("x"),e())}catch(o){navigator.cookieEnabled?t():e()}return!0}}!function(){try{googletag.cmd.push(function(){googletag.pubads().setTargeting("cookie","unknown")})}catch(t){}}(),t=function(){try{googletag.cmd.push(function(){googletag.pubads().setTargeting("cookie","private")})}catch(t){}}||function(){},e=function(){window.addEventListener("message",a,!1),i(0)}||function(){},function(){if(window.webkitRequestFileSystem)return window.webkitRequestFileSystem(window.TEMPORARY,1,e,t),!0}()||r()||function(){if(!window.indexedDB&&(window.PointerEvent||window.MSPointerEvent))return t(),!0}()||e()};;_f.apply(null, '.concat(JSON.stringify(t), "); })();")
            }
        },
        "6Zrg": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            }));
            n("OG14");
            var o = n("Rb+W");

            function r(e) {
                var t = {
                    edn: "us",
                    sov: Object(o.q)(),
                    test: "projectvi",
                    ver: "vi"
                };
                if (null == e ? void 0 : e.search) {
                    var n = Object(o.o)(e);
                    n && (t.ref = n);
                    var r = Object(o.n)(e);
                    r && (t.refdom = r)
                }
                return t
            }

            function i(e, t) {
                var n = r(e);
                return n.typ = "hp", t && (n = Object(o.x)(t, "large", n)), n
            }
        },
        "9+Rx": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "e", (function() {
                return i
            })), n.d(t, "d", (function() {
                return a
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "c", (function() {
                return l
            }));
            var o = "NYT-T",
                r = "nyt-gdpr",
                i = function(e) {
                    var t = e.contentID,
                        n = e.isExpanded;
                    return e.isStandard ? "app_download_std" === t ? "goto-app" : "goto-subscribe" : n ? "collapse" : "expand"
                },
                a = function(e) {
                    var t = e.dockSize,
                        n = void 0 === t ? "standard" : t,
                        o = e.contentID,
                        r = void 0 === o ? "" : o;
                    return "gdpr" === r ? r : "standard" === n ? n : "expanded"
                },
                s = function(e) {
                    var t = e.isStandard,
                        n = e.headerLink;
                    t && window.open(n, "_self")
                },
                l = function(e) {
                    var t = e.pageCount;
                    return e.totalArticleCount - t <= 3 ? "expanded" : "standard"
                }
        },
        "9ref": function(e, t, n) {
            "use strict";
            var o, r, i = n("VkAN"),
                a = n.n(i),
                s = (n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("gcR/")),
                l = n.n(s),
                c = (n("f3/d"), n("lSNA")),
                d = n.n(c),
                u = n("QILm"),
                p = n.n(u),
                m = n("lwsE"),
                f = n.n(m),
                h = n("W8MJ"),
                g = n.n(h),
                v = n("a1gu"),
                b = n.n(v),
                y = n("Nsbk"),
                O = n.n(y),
                w = n("7W2i"),
                x = n.n(w),
                k = n("q1tI"),
                j = n.n(k),
                M = n("Dugd"),
                P = n.n(M),
                S = n("X6oL"),
                C = n.n(S),
                E = n("ZKN5"),
                T = n("OXmc"),
                I = n.n(T),
                N = n("UIP5");

            function L() {
                var e = a()(["\n    fragment SpanAudio_media on Audio {\n      credit\n      headline {\n        default\n      }\n      summary\n      audioTranscript: transcript {\n        transcriptFragment {\n          text\n          speaker\n        }\n      }\n      promotionalHeadline\n      fileUrl\n      length\n      podcastSeries {\n        name\n      }\n      section {\n        id\n        name\n      }\n      sourceId\n    }\n  "]);
                return L = function() {
                    return e
                }, e
            }

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(n, !0).forEach((function(t) {
                        d()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var R = (o = C()(), Object(E.a)(r = o(r = function(e) {
                function t() {
                    var e, n;
                    f()(this, t);
                    for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                    return (n = b()(this, (e = O()(t)).call.apply(e, [this].concat(r)))).state = {
                        showTranscript: !1,
                        currentTime: 0,
                        isPlaying: !1
                    }, n.showTranscript = function(e) {
                        e && "function" == typeof e.stopPropagation && (e.stopPropagation(), e.preventDefault()), n.setState({
                            showTranscript: !0
                        })
                    }, n.hideTranscript = function() {
                        n.setState({
                            showTranscript: !1
                        })
                    }, n.playerRef = function(e) {
                        n.props.playerRef && n.props.playerRef(e), n.player = e, n.setState({
                            isPlaying: !1
                        }), n.player = e, e.on(e.events.TIME_UPDATE, (function(e) {
                            n.setState({
                                currentTime: e
                            })
                        })), e.on(e.events.PLAY, (function() {
                            n.setState({
                                isPlaying: !0
                            })
                        })), e.on(e.events.PAUSE, (function() {
                            n.setState({
                                isPlaying: !1
                            })
                        })), n.props.locksmith && n.props.locksmith.lock && n.props.locksmith.unlock && e.on(e.events.READY, (function() {
                            var t = e.props.instanceId,
                                o = [e.events.PLAYING],
                                r = [e.events.PAUSE, e.events.ENDED, e.events.ERROR];
                            o.forEach((function(o) {
                                e.on(o, (function() {
                                    n.props.locksmith.lock(t)
                                }))
                            })), r.forEach((function(o) {
                                e.on(o, (function() {
                                    n.props.locksmith.unlock(t)
                                }))
                            }))
                        }))
                    }, n.onPlayPause = function() {
                        n.player && (n.state.isPlaying ? n.player.pause() : n.player.play())
                    }, n
                }
                return x()(t, e), g()(t, [{
                    key: "render",
                    value: function() {
                        var e, t, n, o, r, i, a, s = this.props,
                            c = s.media,
                            d = s.tracking,
                            u = this.props.playerOptions || {},
                            m = u.audioControls,
                            f = p()(u, ["audioControls"]);
                        if (!c.fileUrl) return null;
                        var h = (null === (e = (d.getTrackingData().presentation || {}).pageType) || void 0 === e ? void 0 : e.toLowerCase()) || "homepage",
                            g = c.promotionalHeadline || (null === (t = c.headline) || void 0 === t ? void 0 : t.default) || "",
                            v = A({
                                audioControls: A({
                                    version: "v2",
                                    layout: "desktop",
                                    transcript: c.audioTranscript || null,
                                    showTranscript: c.audioTranscript && this.showTranscript || null
                                }, m),
                                duration: 1e3 * (c.length || 0),
                                gtmTrackEvent: d.trackEvent,
                                headline: g,
                                id: c.sourceId,
                                playerRef: this.playerRef,
                                section: c.section || {},
                                series: (null === (n = c.podcastSeries) || void 0 === n ? void 0 : n.name) || "",
                                src: c.fileUrl,
                                type: h
                            }, f),
                            b = null === (o = c.audioTranscript) || void 0 === o ? void 0 : null === (r = o.transcriptFragment) || void 0 === r ? void 0 : r.map((function(e) {
                                return e.text
                            })).join(" ");
                        return l()("div", {
                            itemProp: "audio",
                            itemScope: !0,
                            itemType: "http://schema.org/AudioObject"
                        }, void 0, b && l()("meta", {
                            itemType: "transcript",
                            data: b
                        }), c.audioTranscript && l()(I.a, {
                            hideTranscript: this.hideTranscript,
                            audioDuration: 1e3 * (c.length || 0),
                            currentTime: this.state.currentTime,
                            isPlaying: this.state.isPlaying,
                            onPlayPause: this.onPlayPause,
                            isVisible: this.state.showTranscript,
                            transcript: c.audioTranscript,
                            headline: (null === (i = c.headline) || void 0 === i ? void 0 : i.default) || "",
                            summary: c.summary || "",
                            credits: c.credit,
                            podcastName: null === (a = c.podcastSeries) || void 0 === a ? void 0 : a.title
                        }), j.a.createElement(N.AudioPlayer, v))
                    }
                }]), t
            }(k.Component)) || r) || r);
            R.fragments = {
                media: P()(L())
            }, t.a = R
        },
        A6pt: function(e, t, n) {
            "use strict";
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var o, r, i, a, s = n("VkAN"),
                l = n.n(s),
                c = n("gcR/"),
                d = n.n(c),
                u = n("pVnL"),
                p = n.n(u),
                m = n("lwsE"),
                f = n.n(m),
                h = n("W8MJ"),
                g = n.n(h),
                v = n("a1gu"),
                b = n.n(v),
                y = n("Nsbk"),
                O = n.n(y),
                w = n("7W2i"),
                x = n.n(w),
                k = (n("pIFo"), n("KKXr"), n("lSNA")),
                j = n.n(k),
                M = n("q1tI"),
                P = n.n(M),
                S = (n("17x9"), n("Dugd")),
                C = n.n(S),
                E = n("UIP5"),
                T = n("X6oL"),
                I = n.n(T),
                N = n("vEu8"),
                L = n("ZKN5"),
                D = n("nosR"),
                A = n("uyHG"),
                R = n.n(A),
                H = n("M5Mg");

            function B() {
                var e = l()(["\n    fragment SpanVideo_media on Video {\n      advertisingProperties {\n        sensitivity\n      }\n      aspectRatio\n      bylines {\n        renderedRepresentation\n      }\n      contentSeries\n      cues {\n        name\n        type\n        timeIn\n        timeOut\n      }\n      duration\n      embedded\n      headline {\n        default\n      }\n      hideControls\n      hideSharetools\n      hideSummary\n      is360\n      isLive\n      liveUrls\n      playlist {\n        videos(first: 4) {\n          edges @filterEmpty {\n            node {\n              advertisingProperties {\n                sensitivity\n                sponsored\n              }\n              id\n              sourceId\n              duration\n              section {\n                id\n                name\n              }\n              headline {\n                default\n              }\n              renditions {\n                url\n                type\n              }\n              url\n              promotionalMedia {\n                ...Video_promoImage\n              }\n            }\n          }\n        }\n        id\n        promotionalHeadline\n        url\n        sourceId\n      }\n      promotionalHeadline\n      promotionalMedia {\n        ...Video_promoImage\n      }\n      promotionalSummary\n      related @filterEmpty {\n        ... on Article {\n          promotionalHeadline\n          url\n          sourceId\n        }\n      }\n      renditions {\n        width\n        url\n        type\n        height\n        bitrate\n        aspectRatio\n      }\n      section {\n        id\n        name\n      }\n      shortUrl\n      sourceId\n      subsection {\n        id\n        name\n      }\n      summary\n      timesTags @filterEmpty {\n        __typename\n        displayName\n        isAdvertisingBrandSensitive\n        vernacular\n      }\n      url\n      ... on Video {\n        url\n        duration\n        sourceId\n        promotionalMedia {\n          ... on Video {\n            renditions {\n              width\n              height\n              bitrate\n              url\n            }\n            promotionalMedia {\n              ...Video_promoImage\n            }\n          }\n        }\n        renditions {\n          width\n          height\n          bitrate\n          url\n        }\n      }\n    }\n\n    fragment Video_promoImage on Image {\n      crops(\n        cropNames: [\n          SMALL_SQUARE\n          MEDIUM_SQUARE\n          SIXTEEN_BY_NINE\n          THREE_BY_TWO\n          TWO_BY_THREE\n          FLEXIBLE\n          MASTER\n        ]\n      ) {\n        name\n        renditions {\n          name\n          width\n          height\n          url\n        }\n      }\n    }\n  "]);
                return B = function() {
                    return e
                }, e
            }

            function _(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(n, !0).forEach((function(t) {
                        j()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var V = R()(D.findRenditionOfBestFitUrl),
                F = R()(D.findRenditionsByRatio);

            function W(e) {
                var t = e.props,
                    n = e.options,
                    o = e.state,
                    r = t.media,
                    i = t.videoOptions,
                    a = t.adReq,
                    s = o.deviceType,
                    l = r.advertisingProperties;
                return {
                    options: z({}, n, {
                        adSensitivity: null == l ? void 0 : l.sensitivity,
                        category: r.contentSeries,
                        controlsOverlay: {
                            mode: "article"
                        },
                        deviceType: s,
                        duration: r.duration,
                        embeddedOnly: r.embedded,
                        id: r.sourceId,
                        is360: r.is360,
                        live: r.isLive,
                        liveUrls: r.liveUrls,
                        section: r.section,
                        series: r.contentSeries,
                        shortUrl: r.shortUrl,
                        subsection: r.subsection,
                        timesTags: r.timesTags,
                        url: r.url,
                        videoCues: r.cues,
                        adReq: a
                    }, i),
                    props: t,
                    state: o
                }
            }

            function U(e) {
                var t = e.props,
                    n = e.options,
                    o = e.state,
                    r = t.media,
                    i = t.videoOptions;
                return n.summary = "homepage" === i.type && r.promotionalSummary || r.summary, {
                    options: n,
                    props: t,
                    state: o
                }
            }

            function X(e) {
                var t, n = e.props,
                    o = e.options,
                    r = e.state,
                    i = n.media,
                    a = r.deviceType;
                if (void 0 === i || void 0 === i.renditions) return {
                    props: n,
                    options: o,
                    state: r
                };
                if (i.is360 && i.renditions) return o.sources = i.renditions, {
                    options: o,
                    props: n,
                    state: r
                };
                for (var s = 0; s < D.commonPrioritizedVideoRenditions[a].length && !t; s += 1)
                    for (var l = 0; l < i.renditions.length && !t; l += 1) {
                        var c = D.commonPrioritizedVideoRenditions[a][s],
                            d = i.renditions[l];
                        c === d.type && (t = d)
                    }
                return o.sources = t ? [t] : [], {
                    options: o,
                    props: n,
                    state: r
                }
            }

            function q(e) {
                var t, n = e.props,
                    o = e.options,
                    r = e.state,
                    i = n.media,
                    a = n.videoOptions;
                return o.headline = (null === (t = i.headline) || void 0 === t ? void 0 : t.default) || "", "homepage" === a.type && i.promotionalHeadline && (o.headline = i.promotionalHeadline), {
                    options: o,
                    props: n,
                    state: r
                }
            }

            function G(e) {
                var t, n = e.props,
                    o = e.options,
                    r = e.state,
                    i = n.media.promotionalMedia,
                    a = o.ratio;
                if (i) {
                    var s = n.media.promotionalMedia,
                        l = s.renditions,
                        c = s.crops,
                        d = n.breakpoint;
                    if (l) t = V(l, d);
                    else if (c) {
                        var u = F(c, a);
                        t = V(u)
                    }
                }
                return {
                    options: z({}, o, {
                        posterUrl: t
                    }),
                    props: n,
                    state: r
                }
            }

            function K(e) {
                var t, n = e.props,
                    o = e.options,
                    r = e.state;
                if (!n.media.promotionalMedia) return {
                    props: n,
                    options: o,
                    state: r
                };
                var i = n.media,
                    a = i.promotionalMedia.renditions,
                    s = i.promotionalMedia,
                    l = o.ratio;
                if (a) {
                    var c, d = null === (c = s.promotionalMedia) || void 0 === c ? void 0 : c.crops;
                    if (d) {
                        var u = F(d, l);
                        t = V(u)
                    }
                }
                return {
                    options: z({}, o, {
                        posterFallbackUrl: t
                    }),
                    props: n,
                    state: r
                }
            }

            function Y(e) {
                var t = e.props,
                    n = e.options,
                    o = e.state,
                    r = t.adReq,
                    i = t.queryParams,
                    a = t.videoOptions,
                    s = o.deviceType;
                if (!a.ads || !r) return n.adReq = void 0, {
                    props: t,
                    options: n,
                    state: o
                };
                var l = {
                        amznslots: r.amznslots,
                        edn: r.edn,
                        plat: r.plat,
                        prop: r.prop,
                        Sub: r.Sub,
                        typ: r.typ,
                        vp: r.vp
                    },
                    c = (r.typ || "").split(",");
                if (c.indexOf("hp") >= 0) {
                    var d = {
                        path: "29390238/nyt/homepage/us",
                        ver: "smartphone" === s ? "mvi" : "vi"
                    };
                    i && (d.adv = i["ad-keywords"]), n.adReq = z({}, l, {}, d)
                } else if (c.indexOf("art") >= 0) {
                    var u = "29390238/nyt";
                    r.coll && (u += "/".concat((r.coll || "").replace(/,/g, "/")));
                    var p = {
                        auth: r.auth,
                        col: r.coll,
                        des: r.des,
                        geo: r.geo,
                        id: r.id,
                        org: r.org,
                        path: u,
                        per: r.per,
                        spon: r.spon,
                        ttl: r.ttl,
                        ver: r.ver
                    };
                    r.adv && (p.adv = r.adv), n.adReq = z({}, l, {}, p)
                }
                return {
                    options: n,
                    props: t,
                    state: o
                }
            }

            function J(e) {
                var t = e.props,
                    n = e.options,
                    o = e.state,
                    r = t.videoOptions;
                return n.ratio = r.ratio || "16:9", {
                    options: n,
                    props: t,
                    state: o
                }
            }

            function Z(e) {
                var t, n, o, r = e.props,
                    i = e.options,
                    a = e.state,
                    s = null === (t = r.media.playlist) || void 0 === t ? void 0 : null === (n = t.videos) || void 0 === n ? void 0 : null === (o = n.edges) || void 0 === o ? void 0 : o.map((function(e) {
                        var t;
                        if (!e || !e.node) return null;
                        var n = e.node,
                            o = n.url,
                            r = n.headline,
                            i = n.promotionalMedia,
                            a = n.renditions,
                            s = n.duration,
                            l = n.sourceId,
                            c = n.advertisingProperties;
                        return {
                            adSensitivity: null == c ? void 0 : c.sensitivity,
                            url: o,
                            duration: s,
                            id: l,
                            headline: null == r ? void 0 : r.default,
                            images: (null == i ? void 0 : null === (t = i.crops) || void 0 === t ? void 0 : t.reduce((function(e, t) {
                                return t.renditions ? e.concat(t.renditions) : e
                            }), [])) || [],
                            renditions: a
                        }
                    })).filter((function(e) {
                        return e
                    }));
                return s && (i.playlistVideos = s), {
                    options: i,
                    props: r,
                    state: a
                }
            }

            function Q(e) {
                var t, n = e.options,
                    o = e.props,
                    r = e.state,
                    i = o.media;
                return (null === (t = i.bylines) || void 0 === t ? void 0 : t[0]) && (n.byline = i.bylines[0].renderedRepresentation), {
                    options: n,
                    props: o,
                    state: r
                }
            }

            function $(e) {
                var t = e.options,
                    n = e.props,
                    o = e.state,
                    r = n.media;
                if ("smartphone" === o.deviceType)
                    if (r.is360) t.ratio = "1:1";
                    else if (t.sources) {
                    var i, a;
                    t.ratio = null == t ? void 0 : null === (i = t.sources) || void 0 === i ? void 0 : null === (a = i[0]) || void 0 === a ? void 0 : a.aspectRatio, t.ratio || (t.ratio = "9:16" === r.aspectRatio ? "2:3" : r.aspectRatio)
                }
                return {
                    options: t,
                    props: n,
                    state: o
                }
            }

            function ee(e) {
                var t = e.props,
                    n = e.options,
                    o = e.state,
                    r = t.media;
                return r.playlist && (n.playlistId = r.playlist.sourceId, n.playlistName = r.playlist.promotionalHeadline, n.playlistUrl = r.playlist.url), {
                    options: n,
                    props: t,
                    state: o
                }
            }

            function te(e) {
                var t, n = e.props,
                    o = e.options,
                    r = e.state,
                    i = n.media;
                return (null == i ? void 0 : null === (t = i.related) || void 0 === t ? void 0 : t[0]) && (o.related = [{
                    headline: i.related[0].promotionalHeadline,
                    url: i.related[0].url
                }]), {
                    options: o,
                    props: n,
                    state: r
                }
            }
            var ne = (o = I()(), Object(L.a)(r = o(r = Object(N.a)((a = i = function(e) {
                function t(e) {
                    var n;
                    return f()(this, t), (n = b()(this, O()(t).call(this, e))).playerRef = function(e) {
                        n.player = e, e.on(e.events.READY, (function() {
                            if (n.disableSpinner(), n.props.locksmith && n.props.locksmith.lock && n.props.locksmith.unlock) {
                                var t = e.props.instanceId,
                                    o = [e.events.PLAYING, e.events.AD_STARTED, e.events.AD_RESUMED],
                                    r = [e.events.PAUSE, e.events.ENDED, e.events.ERROR, e.events.AD_PAUSED, e.events.AD_COMPLETED, e.events.AD_SKIPPED, e.events.AD_STOPPED, e.events.AD_ERROR];
                                o.forEach((function(o) {
                                    e.on(o, (function() {
                                        n.props.locksmith.lock(t)
                                    }))
                                })), r.forEach((function(o) {
                                    e.on(o, (function() {
                                        n.props.locksmith.unlock(t)
                                    }))
                                }))
                            }
                        }))
                    }, n.state = {
                        isLoading: !0,
                        isMounted: !1,
                        isDeviceUpdated: !1,
                        deviceType: e.initialDeviceType || e.deviceType
                    }, n
                }
                return x()(t, e), g()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.setState({
                            isMounted: !0,
                            isDeviceUpdated: !1,
                            deviceType: this.props.deviceType
                        })
                    }
                }, {
                    key: "disableSpinner",
                    value: function() {
                        this.setState({
                            isLoading: !1
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.tracking.trackEvent,
                            n = function(e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                                return n.forEach((function(t) {
                                    e = t(e)
                                })), e
                            }({
                                options: {},
                                props: this.props,
                                state: this.state
                            }, W, J, X, $, G, q, U, K, Y, Z, ee, Q, te).options;
                        return d()(H.a, {
                            isLoading: this.state.isLoading,
                            aspectRatio: n.ratio,
                            backgroundMedia: n.posterUrl
                        }, void 0, P.a.createElement(E.VideoPlayer, p()({}, n, {
                            gtmTrackEvent: t,
                            playerRef: this.playerRef,
                            onErrorLoadingPlayer: function() {
                                e.disableSpinner()
                            }
                        })))
                    }
                }], [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        var n = {};
                        return t.isMounted && !t.isDeviceUpdated && (n.deviceType = e.deviceType, n.isDeviceUpdated = !0), n
                    }
                }]), t
            }(M.Component), i.defaultProps = {
                videoOptions: {
                    ratio: "16:9"
                },
                queryParams: {},
                locksmith: null
            }, r = a)) || r) || r) || r);
            ne.fragments = {
                media: C()(B())
            }, t.a = ne
        },
        "B2Q+": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            }));
            var o = n("E00O");
            t.a = function() {
                var e = "tablet",
                    t = "desktop";
                var n = "smartphone";
                return window.matchMedia("(min-width: ".concat(o.a.BREAKPOINT_M, "px)")).matches && (n = e), window.matchMedia("(min-width: ".concat(o.a.BREAKPOINT_L, "px)")).matches && (n = t), n
            };
            var r = function() {
                var e, t, n = null === (e = navigator) || void 0 === e ? void 0 : null === (t = e.userAgent) || void 0 === t ? void 0 : t.toLowerCase();
                if (n) {
                    return /(ads|google|bing|msn|yandex|baidu|ro|career|)bot|(baidu|jike|symantec)spider|scanner|(web)crawler/i.test(n)
                }
                return !1
            }
        },
        B6UM: function(e, t) {
            e.exports = "/vi-assets/static-assets/icon-refresh-50x50-df0a7e8c63e0be0930638e1835acd295.svg"
        },
        BPYT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "f", (function() {
                return d
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "d", (function() {
                return m
            }));
            var o = n("qs2k"),
                r = n("Lkij"),
                i = ["vi-ads-et"],
                a = function() {
                    return !i.some((function(e) {
                        return null !== Object(r.b)(e)
                    }))
                },
                s = function(e) {
                    var t = e.trackEvent,
                        n = e.eventDetails;
                    if (!a()) {
                        var o = n.creativeId,
                            r = n.lineItemId;
                        o && "number" == typeof o && (n.creativeId = "".concat(o)), r && "number" == typeof r && (n.lineItemId = "".concat(r)), t({
                            pageview: {
                                ad: n
                            }
                        })
                    }
                },
                l = function(e) {
                    var t = e.trackEvent,
                        n = e.slot;
                    if (!a()) {
                        var r = "".concat(n, "-timeDefined");
                        o.f.mark(r), o.f.measure(n, "responseStart", r);
                        var i = o.f.getEntriesByName(n).pop();
                        if (i) t({
                            pageview: {
                                ad: {
                                    timeDefined: Math.round(i.duration)
                                }
                            }
                        })
                    }
                },
                c = function(e) {
                    var t = e.trackEvent,
                        n = e.slot;
                    if (!a()) {
                        var r = "".concat(n, "-timeCalled");
                        o.f.mark(r), o.f.measure(n, "responseStart", r);
                        var i = o.f.getEntriesByName(n).pop();
                        if (i) t({
                            pageview: {
                                ad: {
                                    timeCalled: Math.round(i.duration)
                                }
                            }
                        })
                    }
                },
                d = function(e) {
                    var t = e.slot,
                        n = e.trackEvent,
                        r = e.creativeId,
                        i = e.lineItemId,
                        s = e.isEmpty;
                    if (!a()) {
                        var l = "".concat(t, "-timeRendered");
                        o.f.mark(l), o.f.measure(t, "".concat(t, "-timeCalled"), l);
                        var c = o.f.getEntriesByName(t).pop();
                        if (c) "number" == typeof r && (r = "".concat(r)), "number" == typeof i && (i = "".concat(i)), n({
                            pageview: {
                                ad: {
                                    timeRendered: Math.round(c.duration),
                                    creativeId: r,
                                    lineItemId: i,
                                    isEmpty: s
                                }
                            }
                        })
                    }
                },
                u = function(e) {
                    var t = e.slot,
                        n = e.trackEvent,
                        r = e.creativeId,
                        i = e.lineItemId;
                    if (!a()) {
                        var s = "".concat(t, "-timeLoaded");
                        o.f.mark(s), o.f.measure(t, "".concat(t, "-timeCalled"), s);
                        var l = o.f.getEntriesByName(t).pop();
                        if (l) "number" == typeof r && (r = "".concat(r)), "number" == typeof i && (i = "".concat(i)), n({
                            pageview: {
                                ad: {
                                    timeLoaded: Math.round(l.duration),
                                    creativeId: r,
                                    lineItemId: i
                                }
                            }
                        })
                    }
                },
                p = function(e) {
                    var t = e.trackEvent,
                        n = e.slot;
                    if (!a()) {
                        var r = "".concat(n, "-timeViewed");
                        o.f.mark(r), o.f.measure(n, "".concat(n, "-timeCalled"), r);
                        var i = o.f.getEntriesByName(n).pop();
                        if (i) t({
                            pageview: {
                                ad: {
                                    timeViewed: Math.round(i.duration)
                                }
                            }
                        })
                    }
                },
                m = function(e, t) {
                    a() || t({
                        pageview: {
                            ad: {
                                intersitialIsVisible: e
                            }
                        }
                    })
                }
        },
        DNUX: function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o),
                i = n("lwsE"),
                a = n.n(i),
                s = n("W8MJ"),
                l = n.n(s),
                c = n("a1gu"),
                d = n.n(c),
                u = n("Nsbk"),
                p = n.n(u),
                m = n("7W2i"),
                f = n.n(m),
                h = n("q1tI"),
                g = (n("17x9"), n("/J+c")),
                v = n.n(g),
                b = n("wXC7"),
                y = n.n(b),
                O = (n("SMB2"), n("UmXO")),
                w = Object(O.css)("border-top:1px solid ", y.a.color.gray70, ";padding:0 20px;", y.a.breakpoint.medium, "{padding:0 13%;}", y.a.breakpoint.large, "{border-top:0;padding:0 20px;}"),
                x = Object(O.css)("font-family:", y.a.font.franklin, ";font-weight:", y.a.font.weight.bold, ";font-size:13px;text-transform:uppercase;letter-spacing:0.03em;padding:15px 0;"),
                k = Object(O.css)("border-top:1px solid ", y.a.color.gray70, ";padding-top:15px;"),
                j = Object(O.css)("font-family:", y.a.font.franklin, ";font-size:15px;font-weight:", y.a.font.weight.medium, ";padding-bottom:15px;width:100%;color:", y.a.color.gray30, ";strong{font-weight:", y.a.font.weight.bold, ";}em{font-style:italic;}"),
                M = Object(O.css)("background-color:", y.a.color.gray90, ";border:1px solid ", y.a.color.gray60, ";border-radius:3px;box-sizing:border-box;display:inline-block;max-width:100%;margin-right:3px;margin-bottom:3px;padding:3px;vertical-align:top;"),
                P = Object(O.css)("appearance:none;background-color:transparent;background-image:none;border:0;box-shadow:none;box-sizing:border-box;max-width:100%;cursor:pointer;color:", y.a.color.gray30, ";font-family:", y.a.font.franklin, ";line-height:1;padding:5px 30px 5px 8px;"),
                S = Object(O.css)("height:8px;margin-left:-20px;margin-top:9px;pointer-events:none;position:absolute;width:13px;"),
                C = Object(O.css)(y.a.button.action, ";display:inline-block;font-size:14px;line-height:14px;margin-bottom:15px;padding:10px 15px 8px;");
            n.d(t, "a", (function() {
                return G
            }));
            var E = r()("option", {}, void 0, "Content is inappropriate for the specific article"),
                T = r()("option", {}, void 0, "Ad is being targeted or recurs over and over"),
                I = r()("option", {}, void 0, "Ad creative doesn't render properly or appears to be broken"),
                N = r()("option", {}, void 0, "Ad is intrusive or violates posted specs or industry standards"),
                L = r()("option", {}, void 0, "Ad is suspicious or malicious"),
                D = r()("option", {}, void 0, "Ad violates creative quality (offensive content)"),
                A = r()("option", {}, void 0, "Great ad! Right on target!"),
                R = r()("option", {}, void 0, "Other"),
                H = r()("em", {}, void 0, "Note: This is a test and is for data collection purposes—action will not be taken to remove the ad just yet."),
                B = r()("strong", {}, void 0, "Creative ID: "),
                _ = r()("strong", {}, void 0, "Line Item ID: "),
                z = r()("strong", {}, void 0, "Query ID: "),
                V = r()("strong", {}, void 0, "Company Name: "),
                F = r()("strong", {}, void 0, "Platform: "),
                W = r()("strong", {}, void 0, "Device Type: "),
                U = r()("strong", {}, void 0, "Page Type: "),
                X = r()("strong", {}, void 0, "Ad Position: "),
                q = r()("strong", {}, void 0, "Ad Size: "),
                G = function(e) {
                    function t() {
                        var e, n;
                        a()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = d()(this, (e = p()(t)).call.apply(e, [this].concat(r)))).advertiserIdToNameMapping = {
                            33614678: "Faceboook",
                            33597998: "Rubicon Project",
                            30252878: "Index Exchange",
                            39318518: "Index Exchange EBDA",
                            32855678: "Yieldmo",
                            21966278: "Google Ad Exchange",
                            32074718: "Amazon",
                            38636678: "AppNexus",
                            33597638: "OpenX",
                            4400775978: "OpenX EBDA"
                        }, n.defaultBehavior = "(eg. slow ad, inappropriate ad)", n.state = {
                            behavior: n.defaultBehavior
                        }, n.handleBehaviorChange = function(e) {
                            n.setState({
                                behavior: e.target.value
                            })
                        }, n
                    }
                    return f()(t, e), l()(t, [{
                        key: "render",
                        value: function() {
                            var e, t = this.state.behavior,
                                n = this.props.adData,
                                o = n.deviceType,
                                i = n.page,
                                a = n.position,
                                s = n.sourceAgnosticCreativeId,
                                l = n.sourceAgnosticLineItemId,
                                c = n.googleQueryId,
                                d = n.advertiserId,
                                u = n.pageUrl,
                                p = n.clickUrl,
                                m = n.size,
                                f = d in this.advertiserIdToNameMapping && this.advertiserIdToNameMapping[d];
                            e = Array.isArray(m) ? 0 === m[0] ? "fluid" : m.join("x") : "";
                            var h = encodeURIComponent("Capture Ad / ".concat((new Date).toLocaleDateString("en-US"), " / ").concat(l, " / ").concat(t, " (Experimental Only)")),
                                g = encodeURIComponent("* * * This is currently only a tech test--no action will be taken at this time. * * *\n\nReason: ".concat(t, "\n\nScreenshot: (please attach a screenshot of the ad)\n\n-----------\n\nCreative ID: ").concat(s, "\n\nLine Item ID: ").concat(l, "\n\nQuery ID: ").concat(c, "\n\n").concat(f ? "Company Name: ".concat(f, "\n\n") : "", "Platform: web\n\nDevice Type: ").concat(o, "\n\nPage Type: ").concat(i, "\n\nAd Position: ").concat(a, "\n\nAd Size: ").concat(e, "\n\nPage URL: ").concat(u, "\n\nClick-through URL: ").concat(p));
                            return r()("section", {
                                className: w
                            }, void 0, r()("h2", {
                                className: x
                            }, void 0, "Debug Info"), r()("ul", {
                                className: k
                            }, void 0, r()("li", {}, void 0, r()("div", {
                                className: M
                            }, void 0, r()("select", {
                                className: P,
                                onChange: this.handleBehaviorChange
                            }, void 0, r()("option", {
                                value: this.defaultBehavior
                            }, void 0, "Select ad behavior..."), E, T, I, N, L, D, A, R), r()(v.a, {
                                fill: y.a.color.gray30,
                                className: S
                            })), r()("a", {
                                href: "mailto:devtest-AdFrameworks@nytimes.com?subject=".concat(h, "&body=").concat(g),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: C
                            }, void 0, "Submit")), r()("li", {
                                className: j
                            }, void 0, H)), r()("ul", {
                                className: k
                            }, void 0, r()("li", {
                                className: j
                            }, void 0, B, s), r()("li", {
                                className: j
                            }, void 0, _, l), r()("li", {
                                className: j
                            }, void 0, z, c), f && r()("li", {
                                className: j
                            }, void 0, V, f)), r()("ul", {
                                className: k
                            }, void 0, r()("li", {
                                className: j
                            }, void 0, F, "web"), r()("li", {
                                className: j
                            }, void 0, W, o), r()("li", {
                                className: j
                            }, void 0, U, i), r()("li", {
                                className: j
                            }, void 0, X, a), r()("li", {
                                className: j
                            }, void 0, q, e)))
                        }
                    }]), t
                }(h.Component);
            G.displayName = "ReportModal", G.defaultProps = {
                adData: {
                    deviceType: "",
                    page: "",
                    position: "",
                    sourceAgnosticCreativeId: 0,
                    sourceAgnosticLineItemId: 0,
                    googleQueryId: "",
                    advertiserId: 0,
                    pageUrl: "",
                    clickUrl: "",
                    size: []
                }
            }
        },
        "E/Bz": function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o);
            n("bHtr"), n("q1tI"), n("17x9");

            function i(e) {
                var t = e.className,
                    n = e.fill;
                return r()("svg", {
                    width: "15",
                    height: "15",
                    className: t
                }, void 0, r()("g", {
                    id: "Canvas",
                    fill: "none"
                }, void 0, r()("g", {
                    id: "close"
                }, void 0, r()("path", {
                    d: "M2 2l11 11",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "square",
                    stroke: n,
                    id: "Vector"
                }), r()("path", {
                    d: "M13 2L2 13",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "square",
                    stroke: n,
                    id: "Vector_2"
                }))))
            }
            i.displayName = "Close", i.defaultProps = {
                className: void 0,
                fill: "#111"
            }, t.a = i
        },
        GXaC: function(e, t, n) {
            "use strict";
            var o = n("lwsE"),
                r = n.n(o),
                i = n("W8MJ"),
                a = n.n(i),
                s = n("a1gu"),
                l = n.n(s),
                c = n("Nsbk"),
                d = n.n(c),
                u = n("7W2i"),
                p = n.n(u),
                m = n("q1tI"),
                f = n.n(m),
                h = n("17x9"),
                g = n.n(h),
                v = function(e) {
                    function t() {
                        return r()(this, t), l()(this, d()(t).apply(this, arguments))
                    }
                    return p()(t, e), a()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.children,
                                t = this.context,
                                n = t.lock,
                                o = t.unlock;
                            return f.a.cloneElement(m.Children.only(e), {
                                locksmith: {
                                    lock: n,
                                    unlock: o
                                }
                            })
                        }
                    }]), t
                }(m.Component);
            v.displayName = "Locksmith", v.contextTypes = {
                lock: g.a.func,
                unlock: g.a.func
            }, t.a = v
        },
        GaDg: function(e, t, n) {
            "use strict";
            t.a = function() {
                return e = 36e5, Math.floor(Date.now() / e) * e;
                var e
            }
        },
        Imfu: function(e, t, n) {
            "use strict";
            var o = n("VkAN"),
                r = n.n(o),
                i = (n("f3/d"), n("pVnL")),
                a = n.n(i),
                s = n("QILm"),
                l = n.n(s),
                c = n("lSNA"),
                d = n.n(c),
                u = n("gcR/"),
                p = n.n(u),
                m = n("q1tI"),
                f = n.n(m),
                h = n("17x9"),
                g = n.n(h),
                v = n("Dugd"),
                b = n.n(v),
                y = n("UmXO"),
                O = n("rI8Z"),
                w = n("5dFD"),
                x = n("FOj+"),
                k = n.n(x),
                j = n("wOE9"),
                M = n("bNs8"),
                P = n("nKgM"),
                S = n("3NoI"),
                C = n.n(S),
                E = n("wXC7"),
                T = n.n(E),
                I = (n("SMB2"), T.a.breakpoint),
                N = T.a.color,
                L = T.a.font,
                D = Object(y.css)("margin-bottom:10px;display:block;text-align:center;"),
                A = Object(y.css)("font-size:", L.size(14), ";margin-bottom:6px;display:inline-block;vertical-align:middle;font-family:", L.franklin, ";font-weight:", L.weight.mediumBold, ";", I.large, "{font-size:", L.size(12), ";}"),
                R = Object(y.css)("font-size:", L.size(11), ";line-height:", L.size(13), ";color:", N.white, ";margin-bottom:12px;display:inline-block;vertical-align:middle;font-family:", L.franklin, ";font-weight:", L.weight.bold, ";background-color:", N.black, ";padding:5px 6px 4px 6px;border-radius:3px;text-transform:uppercase;letter-spacing:0.2px;"),
                H = Object(y.css)("display:inline-block;width:0;height:0;border-style:solid;border-width:4px 0 4px 6.6px;border-color:transparent transparent transparent ", N.black, ";vertical-align:middle;margin-right:5px;margin-top:-2px;"),
                B = Object(y.css)("content:'';display:block;position:absolute;border-bottom:1px solid ", N.gray60, ";"),
                _ = function(e) {
                    return Object(y.css)("letter-spacing:0.2px;margin-top:-3px;transition:color 0.6s ease;color:", N.gray10, ";", 1 === e.fontType ? "\n    font-size: ".concat(L.size(14), ";\n    line-height: ").concat(L.size(18), ";\n    font-family: ").concat(L.cheltenhamSmall, ";\n    margin-bottom: 5px;\n\n    ").concat(e.isBriefing ? "\n      font-size: ".concat(L.size(13), ";\n      line-height: ").concat(L.size(20), ";\n      ") : "", ";\n  ") : "", ";", 2 === e.fontType ? "\n    font-size: ".concat(L.size(16), ";\n    line-height: ").concat(L.size(19), ";\n    font-family: ").concat(L.cheltenham, ";\n    letter-spacing: ").concat(e.urgent ? "0.3px" : "0.1px", ";\n    margin-bottom: 5px;\n    ").concat(e.assetTone ? "" : "\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      ", ";\n\n    ").concat(e.isBriefing ? "\n        ".concat(I.mediumLarge, " {\n          font-size: ").concat(L.size(13), ";\n          line-height: ").concat(L.size(15), ";\n        }\n      ") : "", ";\n  ") : "", ";", 3 === e.fontType ? "\n    font-size: ".concat(L.size(28), ";\n    line-height: ").concat(L.size(31), ";\n    font-family: ").concat(L.cheltenham, ";\n    margin-bottom: 8px;\n    ").concat(e.assetTone ? "" : "\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      ", ";\n\n    ").concat("feature" === e.assetTone ? "\n        font-size: ".concat(L.size(32), ";\n        line-height: ").concat(L.size(35), ";\n        letter-spacing: 0.2px;\n        font-weight: ").concat(L.weight.extraLight, ";\n      ") : "", ";\n  ") : "", ";", 4 === e.fontType ? "\n    font-size: ".concat(L.size(20), ";\n    line-height: ").concat(L.size(23), ";\n    font-family: ").concat(L.cheltenham, ";\n    margin-bottom: 10px;\n\n    ").concat("feature" !== !e.assetTone || e.isBriefing ? "" : "\n      ".concat(I.medium, " {\n        font-size: ").concat(L.size(22), ";\n        line-height: ").concat(L.size(25), ";\n      }\n    "), ";\n\n    ").concat(e.assetTone ? "" : "\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      ", ";\n\n    ").concat("feature" === e.assetTone ? "\n        font-size: ".concat(L.size(28), ";\n        line-height: ").concat(L.size(31), ";\n        letter-spacing: 0.4px;\n        font-weight: ").concat(L.weight.extraLight, ";\n      ") : "", ";\n\n    ").concat(e.isBriefing ? "\n        font-size: ".concat(L.size(21), ";\n        line-height: ").concat(L.size(25), ";\n        font-family: ").concat(N.gray10, ";\n\n        ").concat(I.medium, " {\n          font-size: ").concat(L.size(16), ";\n          line-height: ").concat(L.size(19), ";\n        }\n\n        ").concat(I.mediumLarge, " {\n          line-height: ").concat(L.size(18), ";\n          margin-bottom: 0;\n        }\n    ") : "", ";\n  ") : "", ";", 5 === e.fontType ? "\n    font-size: ".concat(L.size(16), ";\n    line-height: ").concat(L.size(22), ";\n    font-family: ").concat(L.cheltenhamSmall, ";\n    margin-bottom: 10px;\n    ").concat(e.assetTone ? "" : "\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      ", ";\n  ") : "", ";", 6 === e.fontType ? "\n    font-size: ".concat(L.size(32), ";\n    line-height: ").concat(L.size(34), ";\n    font-family: ").concat(L.cheltenham, ";\n    font-weight: ").concat(L.weight.bold, ";\n    margin-bottom: 21px;\n    ").concat(e.assetTone ? "" : "\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      ", ";\n    ").concat(e.offsetTop ? "margin-top: -7px;" : "", ";\n  ") : "", ";", 7 === e.fontType ? "\n    font-size: ".concat(L.size(26), ";\n    line-height: ").concat(L.size(28), ";\n    font-family: ").concat(L.cheltenham, ";\n    font-weight: ").concat(L.weight.bold, ";\n    letter-spacing: 0.1px;\n    margin-bottom: 14px;\n    ").concat(e.assetTone ? "" : "\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      ", ";\n\n    ").concat("feature" === e.assetTone ? "\n        font-size: ".concat(L.size(32), ";\n        line-height: ").concat(L.size(35), ";\n        font-weight: ").concat(L.weight.extraLight, ";\n      ") : "", ";\n  ") : "", ";", 8 === e.fontType ? "\n    font-size: ".concat(L.size(28), ";\n    line-height: ").concat(L.size(31), ";\n    font-family: ").concat(L.cheltenham, ";\n    font-weight: ").concat(L.weight.bold, ";\n    margin-bottom: 10px;\n    ").concat(e.assetTone ? "" : "\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      ", ";\n\n    ").concat("feature" === e.assetTone ? "\n        font-weight: ".concat(L.weight.extraLight, ";\n        letter-spacing: 0.2px;\n      ") : "", ";\n\n    ").concat(e.offsetTop ? "margin-top: -7px;" : "", ";\n  ") : "", ";", 9 === e.fontType ? "\n    font-size: ".concat(L.size(24), ";\n    line-height: ").concat(L.size(27), ";\n    font-family: ").concat(L.cheltenham, ";\n    margin-bottom: 8px;\n    ").concat(e.assetTone ? "" : "\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      ", ";\n\n    ").concat("feature" === e.assetTone ? "\n        font-size: ".concat(L.size(28), ";\n        line-height: ").concat(L.size(31), ";\n        letter-spacing: 0.2px;\n        font-weight: ").concat(L.weight.extraLight, ";\n      ") : "", ";\n  ") : "", ";", 10 === e.fontType ? "\n    font-size: ".concat(L.size(28), ";\n    line-height: ").concat(L.size(31), ";\n    font-family: ").concat(L.cheltenham, ";\n    font-weight: ").concat(L.weight.bold, ";\n    letter-spacing: 0.1px;\n    margin-bottom: 14px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  ") : "", ";", "right" === e.rule ? Object(y.css)("&::after{", B, ";top:4px;right:-10px;height:60px;width:0;border-bottom:none;border-right:1px solid ", N.gray60, ";}") : "", ";", "bottom" === e.rule ? Object(y.css)("margin-bottom:18px;padding-bottom:20px;&::after{", B, ";bottom:0;left:0;height:0;width:60px;}") : "", ";", "bottom" === e.rule && e.centered ? Object(y.css)("&::after{", B, ";bottom:0;left:50%;height:0;width:60px;margin-left:-30px;}") : "", ";", "bottom" === e.rule && e.hasTextBelow ? Object(y.css)("margin-bottom:5px;") : "", ";")
                },
                z = function(e) {
                    return Object(y.css)(e.centered ? "\n  text-align: center;\n  " : "", ";", e.italic ? "\n  font-style: italic;\n  " : "", ";", e.urgent ? "\n  font-weight: ".concat(L.weight.bold, ";\n  font-style: italic;\n  ") : "", ";", e.light ? "\n  font-weight: ".concat(L.weight.extraLight, ";\n  ") : "", ";", e.extraBold ? "\n  font-weight: ".concat(L.weight.extraBold, ";\n  ") : "", ";", "feature" === e.assetTone ? "\n  font-family: ".concat(L.cheltenham, ";\n  letter-spacing: 0.2px;\n  ") : "", ";", e.isBriefing ? "\n  font-family: ".concat(L.franklinBase, ";\n  font-weight: ").concat(L.weight.bold, ";\n  line-height: ").concat(L.size(16), ";\n  ") : "", ";")
                },
                V = function(e) {
                    var t = e.opinion,
                        n = e.blockId,
                        o = e.assetTone;
                    return t && ("spotlight" !== n && "topstories" !== n || "feature" === o) ? "\n      margin-top: 4px;\n      font-size: ".concat(L.size(34), ";\n      line-height: ").concat(L.size(38), ";\n      font-family: ").concat(L.opinionBase, ";\n      font-weight: ").concat(L.weight.medium, ";\n\n      ").concat(I.medium, " {\n        line-height: ").concat(L.size(36), ";\n      }\n    ") : ""
                },
                F = function(e) {
                    return "alert" === e.blockId && "\n    font-family: ".concat(L.cheltenham, ";\n    font-weight: ").concat(L.weight.bold, ";\n    font-size: ").concat(L.size(20), ";\n    line-height: ").concat(L.size(23), ";\n    letter-spacing: 0.2px;\n\n    ").concat(I.medium, " {\n      font-size: ").concat(L.size(16), ";\n      line-height: ").concat(L.size(19), ";\n    }\n  ")
                },
                W = function(e) {
                    return "opinion" === e.blockId && "\n  font-size: ".concat(L.size(20), ";\n  line-height: ").concat(L.size(23), ";\n  font-family: ").concat(L.cheltenham, ";\n  margin-bottom: 10px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  ").concat(I.medium, " {\n    font-size: ").concat(L.size(16), ";\n    line-height: ").concat(L.size(19), ";\n    font-family: ").concat(L.cheltenham, ";\n    letter-spacing: 0.1px;\n    margin-bottom: 5px;\n  }\n  ")
                },
                U = function(e) {
                    return e.supportsTouch || e.wrapLink ? "" : Object(y.css)(".assetWrapper:hover &{color:", N.gray30, ";}")
                },
                X = C()("h2", {
                    target: "esl82me0"
                })("font-weight:", L.weight.bold, ";", _, ";", V, ";", F, ";", W, ";", z, ";", U, ";"),
                q = function(e) {
                    return e.isBriefing ? Object(y.css)("display:inline-block;") : ""
                },
                G = C()("div", {
                    target: "esl82me1"
                })("position:relative;line-height:", L.size(13), ";&:last-child > ", X, "{margin-bottom:", (function(e) {
                    return e.isBanner && "bottom" === e.rule ? "-5px" : "0"
                }), ";}", I.medium, "{line-height:", L.size(5), ";", q, ";&:last-child > ", X, "{margin-bottom:0;}}"),
                K = C()("div", {
                    target: "esl82me2"
                })("html[data-nyt-ab~='HL_", (function(e) {
                    return e.sourceId
                }), "=1'] &{", T.a.a11y.visuallyHidden, ";}"),
                Y = C()("div", {
                    target: "esl82me3"
                })(T.a.a11y.visuallyHidden, ";html[data-nyt-ab~='HL_", (function(e) {
                    return e.sourceId
                }), "=1'] &{display:initial;border:initial;-webkit-clip:initial;clip:initial;height:initial;margin:initial;overflow:initial;padding:initial;position:initial;width:initial;}"),
                J = T.a.breakpoint,
                Z = T.a.color,
                Q = T.a.font,
                $ = Object(y.css)("margin-bottom:7px;"),
                ee = C()("div", {
                    target: "e1god9m10"
                })(_, ";", W, ";margin-bottom:0;color:", Z.opinionGray, ";-webkit-font-smoothing:unset;-moz-osx-font-smoothing:unset;", (function(e) {
                    return "opinion" === e.blockId ? "margin-top: -3px;" : "\n    ".concat(!e.hasAuthorHeadshot && "display: inline;", ";\n    margin-top: 0;\n    font-family: ").concat(Q.franklinBase, ";\n    font-size: ").concat(Q.size(16), ";\n    line-height: ").concat(Q.size(20), ";\n    font-weight: ").concat(Q.weight.book, ";\n\n    ").concat(J.medium, " {\n      font-size: ").concat(Q.size(14), ";\n      line-height: ").concat(Q.size(18), ";\n    }\n  ")
                }), ";", J.medium, "{margin-bottom:0;}"),
                te = C()("span", {
                    target: "e1god9m11"
                })((function(e) {
                    return e.hasAuthorHeadshot ? "\n      display: block;\n      margin-bottom: 4px;\n\n      ".concat(J.medium, " {\n        margin-bottom: 2px;\n      }\n      ") : "\n    display: inline-block;\n    ".concat(e.hasByline && "\n      padding-right: 8px;\n      border-right: 1px solid #D1CDCD;\n      margin-right: 8px;\n    ", ";\n  ")
                }), ";font-family:", Q.cheltenham, ";font-size:", Q.size(19), ";line-height:", Q.size(19), ";color:", Z.opinionGray, ";", J.medium, "{font-size:", Q.size(17), ";line-height:", Q.size(17), ";}"),
                ne = function(e) {
                    var t = e.asset,
                        n = e.hideHeadshot,
                        o = e.fontType,
                        r = e.blockId,
                        i = t.card && "AuthorCard" === t.card.__typename && t.section && "Opinion" === t.section.displayName,
                        a = "opinion" === r,
                        s = !!Object(P.a)(t),
                        l = Object(M.simpleByline)({
                            authors: t.card && t.card.creators
                        }),
                        c = l.length > 0,
                        d = i && s && !n;
                    return a && c ? p()("div", {
                        className: $
                    }, void 0, p()(ee, {
                        fontType: o,
                        blockId: r,
                        hasAuthorHeadshot: d
                    }, void 0, l)) : !a && i ? p()("div", {
                        className: $
                    }, void 0, p()(te, {
                        hasAuthorHeadshot: d,
                        hasByline: c
                    }, void 0, "Opinion"), c && p()(ee, {
                        fontType: o,
                        blockId: r,
                        hasAuthorHeadshot: d
                    }, void 0, l)) : null
                };
            ne.defaultProps = {
                hideHeadshot: !1,
                fontType: 1,
                blockId: null
            };
            var oe = ne;

            function re() {
                var e = r()(["\n    fragment Headline_asset on HasPromotionalProperties {\n      ... on CreativeWork {\n        collections @filterEmpty {\n          id\n          slug\n          collectionType\n        }\n      }\n      card {\n        __typename\n        ... on AuthorCard {\n          creators {\n            ... on TimesTag {\n              displayName\n            }\n          }\n        }\n        ... on VideoCard {\n          video {\n            id\n            duration\n          }\n        }\n      }\n      promotionalHeadline\n      oneLine\n      banner\n    }\n  "]);
                return re = function() {
                    return e
                }, e
            }
            var ie = p()("span", {
                    className: H
                }),
                ae = function(e, t) {
                    var n, o, r = e.asset,
                        i = e.hideHeadshot,
                        a = e.type,
                        s = e.centered,
                        l = e.italic,
                        c = e.light,
                        u = e.extraBold,
                        f = e.balanced,
                        h = e.showExclusiveLabel,
                        g = e.showMediaLabel,
                        v = e.showOpinionByline,
                        b = e.urgent,
                        x = e.isTimesExclusive,
                        j = e.isBriefing,
                        M = e.supportsTouch,
                        P = e.wrapLink,
                        S = e.assetTone,
                        C = e.rule,
                        E = e.hasTextBelow,
                        T = e.opinion,
                        I = e.offsetTop,
                        N = e.text,
                        L = e.fastlyAbraConfig,
                        H = t.blockId,
                        B = x && h,
                        _ = g && !B && "VideoCard" === (null == r ? void 0 : null === (n = r.card) || void 0 === n ? void 0 : n.__typename),
                        z = g && !B && "AudioCard" === (null == r ? void 0 : null === (o = r.card) || void 0 === o ? void 0 : o.__typename),
                        V = f && "1_variant" !== L.HOME_chartbeat,
                        F = p()(m.Fragment, {}, void 0, v && p()(oe, {
                            asset: r,
                            hideHeadshot: i,
                            fontType: a,
                            blockId: H
                        }), B && p()("div", {
                            className: Object(y.cx)(R, d()({}, D, s))
                        }, void 0, O.c.timesExclusive), _ && p()("div", {
                            className: Object(y.cx)(A, d()({}, D, s))
                        }, void 0, ie, O.c.watchVideo), z && p()("div", {
                            className: Object(y.cx)(A, d()({}, D, s))
                        }, void 0, O.c.playAudio), p()(X, {
                            centered: s,
                            italic: l,
                            light: c,
                            extraBold: u || b && 2 === a,
                            fontType: a,
                            assetTone: S,
                            urgent: b,
                            isBriefing: j,
                            wrapLink: P,
                            supportsTouch: M,
                            rule: C,
                            hasTextBelow: E,
                            opinion: T,
                            blockId: H,
                            offsetTop: I
                        }, void 0, V ? p()(k.a, {}, void 0, N) : N));
                    return P ? p()(w.a, {
                        link: r
                    }, void 0, F) : F
                };
            ae.defaultProps = {
                type: 1,
                hideHeadshot: !1,
                centered: !1,
                balanced: !1,
                italic: !1,
                light: !1,
                extraBold: !1,
                showExclusiveLabel: !1,
                showMediaLabel: !1,
                showOpinionByline: !0,
                urgent: !1,
                isBriefing: !1,
                isTimesExclusive: !1,
                supportsTouch: !1,
                wrapLink: !1,
                assetTone: null,
                rule: null,
                opinion: !1,
                offsetTop: !1,
                hasTextBelow: !1,
                text: null,
                fastlyAbraConfig: {}
            }, ae.contextTypes = {
                blockId: g.a.string
            };
            var se = Object(j.a)(ae),
                le = function(e) {
                    var t, n = e.hideHeadline,
                        o = e.showSentence,
                        r = e.asset,
                        i = e.isBriefing,
                        s = e.isBanner,
                        c = l()(e, ["hideHeadline", "showSentence", "asset", "isBriefing", "isBanner"]);
                    return n ? null : o ? p()(G, {
                        isBriefing: i
                    }, void 0, f.a.createElement(se, a()({}, c, {
                        asset: r,
                        isBriefing: i,
                        text: r.oneLine || r.promotionalHeadline
                    }))) : s ? p()(G, {
                        isBriefing: i
                    }, void 0, f.a.createElement(se, a()({}, c, {
                        asset: r,
                        isBriefing: i,
                        text: r.banner
                    }))) : 2 === (null == r ? void 0 : null === (t = r.promotions) || void 0 === t ? void 0 : t.length) && r.promotions.every((function(e) {
                        return e && e.promotionalProperties && e.promotionalProperties.headline
                    })) ? p()(m.Fragment, {}, void 0, r.promotions.map((function(e) {
                        return "homepage_alternate" === e.name ? p()(G, {
                            isBriefing: i
                        }, "variant", p()(Y, {
                            sourceId: r.sourceId
                        }, void 0, f.a.createElement(se, a()({}, c, {
                            asset: r,
                            text: e.promotionalProperties.headline,
                            isBriefing: i
                        })))) : p()(G, {
                            isBriefing: i
                        }, "control", p()(K, {
                            sourceId: r.sourceId
                        }, void 0, f.a.createElement(se, a()({}, c, {
                            asset: r,
                            text: e.promotionalProperties.headline,
                            isBriefing: i
                        }))))
                    }))) : p()(G, {
                        isBriefing: i
                    }, void 0, f.a.createElement(se, a()({}, c, {
                        asset: r,
                        isBriefing: i,
                        text: r.promotionalHeadline
                    })))
                };
            le.displayName = "HeadlineABWrapper", le.defaultProps = {
                hideHeadline: !1,
                showSentence: !1,
                isBanner: !1,
                isBriefing: !1
            }, le.fragments = {
                asset: b()(re())
            };
            t.a = le
        },
        Jhol: function(e, t) {
            e.exports = "/vi-assets/static-assets/the-weekly-510x80-0bd5694830486557f301fc599c033e5e.svg"
        },
        KKRW: function(e, t, n) {
            "use strict";
            n("KKXr");
            t.a = function(e) {
                return (e.dataId || "").split("/")[1]
            }
        },
        KQYy: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return G
            }));
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var o, r, i, a = n("pVnL"),
                s = n.n(a),
                l = n("lwsE"),
                c = n.n(l),
                d = n("W8MJ"),
                u = n.n(d),
                p = n("a1gu"),
                m = n.n(p),
                f = n("Nsbk"),
                h = n.n(f),
                g = n("7W2i"),
                v = n.n(g),
                b = n("gcR/"),
                y = n.n(b),
                O = n("lSNA"),
                w = n.n(O),
                x = (n("84bF"), n("VkAN")),
                k = n.n(x),
                j = (n("dRSK"), n("q1tI")),
                M = n.n(j),
                P = (n("17x9"), n("UmXO")),
                S = n("wXC7"),
                C = n.n(S),
                E = n("euCz"),
                T = n("t0IW"),
                I = n("XMA8"),
                N = n("ZKN5"),
                L = n("mczz"),
                D = n("Odck");

            function A() {
                var e = k()(["\n          (max-width: ", "px) and (min-device-pixel-ratio: 1),\n          (max-width: ", "px) and (-webkit-min-device-pixel-ratio: 1),\n          (max-width: ", "px) and (min-resolution: 1dppx),\n          (max-width: ", "px) and (min-resolution: 96dpi)\n        "]);
                return A = function() {
                    return e
                }, e
            }

            function R() {
                var e = k()(["\n          (max-width: ", "px) and (min-device-pixel-ratio: 2),\n          (max-width: ", "px) and (-webkit-min-device-pixel-ratio: 2),\n          (max-width: ", "px) and (min-resolution: 2dppx),\n          (max-width: ", "px) and (min-resolution: 192dpi)\n        "]);
                return R = function() {
                    return e
                }, e
            }

            function H(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(n, !0).forEach((function(t) {
                        w()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function _() {
                var e = k()(["\n          (max-width: ", "px) and (min-device-pixel-ratio: 3),\n          (max-width: ", "px) and (-webkit-min-device-pixel-ratio: 3),\n          (max-width: ", "px) and (min-resolution: 3dppx),\n          (max-width: ", "px) and (min-resolution: 288dpi)\n        "]);
                return _ = function() {
                    return e
                }, e
            }
            var z = {
                    quality: 75,
                    auto: "webp",
                    disable: "upscale"
                },
                V = Object(P.css)("width:100%;background-color:", C.a.color.newsprint30, ";"),
                F = Object(P.keyframes)("from{background-color:", C.a.color.newsprint30, ";}to{background-color:transparent;}"),
                W = Object(P.css)("animation:", F, " ", 300, "ms ease-in forwards;"),
                U = Object(P.css)("transition:opacity ", 300, "ms ease-in-out;opacity:0;display:block;width:100%;"),
                X = {
                    entering: {
                        opacity: 0
                    },
                    entered: {
                        opacity: 1
                    }
                };

            function q(e) {
                return M.a.createElement(M.a.Fragment, null, y()("source", {
                    media: Object(E.oneLineTrim)(_(), C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1),
                    srcSet: Object(T.a)(e.url, B({}, z, {
                        width: 600
                    }))
                }), y()("source", {
                    media: Object(E.oneLineTrim)(R(), C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1),
                    srcSet: Object(T.a)(e.url, B({}, z, {
                        width: 1200
                    }))
                }), y()("source", {
                    media: Object(E.oneLineTrim)(A(), C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1, C.a.breakpoint.width.small - 1),
                    srcSet: Object(T.a)(e.url, B({}, z, {
                        width: 1800
                    }))
                }))
            }

            function G(e) {
                var t = new URL(e);
                return "".concat(t.origin).concat(t.pathname)
            }
            var K = Object(N.a)((i = r = function(e) {
                function t() {
                    var e, n;
                    c()(this, t);
                    for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                    return (n = m()(this, (e = h()(t)).call.apply(e, [this].concat(r)))).state = {
                        showInner: !1,
                        rendition: null,
                        aspectRatio: 1.66,
                        imageLoaded: !1,
                        containerWidth: null
                    }, n.el = M.a.createRef(), n.appearedInViewport = !1, n
                }
                return v()(t, e), u()(t, [{
                    key: "getActiveRendition",
                    value: function() {
                        var e;
                        if (!(null === (e = this.el) || void 0 === e ? void 0 : e.current)) return null;
                        var t = this.props.renditions,
                            n = null;
                        if (Array.isArray(t)) {
                            var o = this.el.current.querySelector("img");
                            if (!o || !o.currentSrc) return null;
                            var r = G(o.currentSrc);
                            t.some((function(e) {
                                return e.url === r
                            })) && (n = t.find((function(e) {
                                return e.url === r
                            })))
                        }
                        return n
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e;
                        if (null === (e = this.el) || void 0 === e ? void 0 : e.current) {
                            var t = this.getActiveRendition(),
                                n = {};
                            Object(L.d)(Object(L.c)(), "forceLazy") ? (this.appearedInViewport = !0, n.showInner = !0) : this.setupIntersectionObserver(), t && t.width && t.height ? (n.aspectRatio = t.width / t.height, n.rendition = t) : n.aspectRatio = this.props.initialAspectRatio, n.containerWidth = this.el.current.offsetWidth ? this.el.current.offsetWidth : null, this.setState(n)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.observer && (this.observer.disconnect(), this.observer = null)
                    }
                }, {
                    key: "setupIntersectionObserver",
                    value: function() {
                        var e = this,
                            t = {
                                threshold: 0,
                                rootMargin: "".concat(this.props.rootMargin, "px")
                            };
                        this.observer = new IntersectionObserver((function(t) {
                            var n;
                            !e.appearedInViewport && (null == t ? void 0 : null === (n = t[0]) || void 0 === n ? void 0 : n.isIntersecting) && (e.appearedInViewport = !0, e.observer.disconnect(), e.observer = null, e.setState({
                                showInner: !0
                            }))
                        }), t), this.observer.observe(this.el.current)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.lazy,
                            o = t.imageProps,
                            r = t.fullBleedImageStyles,
                            i = t.alt,
                            a = t.initialImageWidth,
                            l = t.safeWidths,
                            c = t.metadataOptOut,
                            d = t.imageContainerRef,
                            u = t.useMobileCrop,
                            p = this.props.renditions,
                            m = this.state,
                            f = m.imageLoaded,
                            h = m.containerWidth,
                            g = m.rendition,
                            v = m.showInner,
                            b = Object(I.i)(p);
                        Array.isArray(p) && Array.isArray(o.srcSet) && (p = p.filter((function(e) {
                            return !Object(I.n)(e)
                        })), o.srcSet = o.srcSet.filter((function(e) {
                            return -1 === e.indexOf(I.o)
                        })));
                        var O = this.state.aspectRatio;
                        !h && this.props.initialAspectRatio && (O = this.props.initialAspectRatio);
                        var x, k, j = h || a;
                        if (!g && j) {
                            var S = (x = 1.5 * j, (k = l) && k.find((function(e) {
                                    return e >= x
                                })) || null),
                                C = B({}, z, {}, S ? {
                                    width: S
                                } : {});
                            o.src = Object(T.a)(o.src, C)
                        }
                        if (c || (o.itemProp = "url", o.itemID = o.src), !n && r) return u && b ? y()("picture", {
                            style: r
                        }, void 0, q(b), M.a.createElement("img", s()({
                            ref: d,
                            alt: i
                        }, o))) : M.a.createElement("img", s()({
                            style: r,
                            ref: d,
                            alt: i
                        }, o));
                        if (!n) return u && b ? y()("picture", {}, void 0, q(b), M.a.createElement("img", s()({
                            ref: d,
                            alt: i
                        }, o))) : M.a.createElement("img", s()({
                            ref: d,
                            alt: i
                        }, o));
                        g && (o.src = Object(T.a)(g.url, z), o.srcSet = null), o.onLoad = function() {
                            f || e.setState({
                                imageLoaded: !0
                            })
                        };
                        var E = "auto";
                        return f || (h ? E = h / O : a && (E = a / (1.5 * O))), M.a.createElement("div", {
                            className: Object(P.cx)(V, w()({}, W, f)),
                            ref: this.el
                        }, j && M.a.createElement("div", {
                            ref: d,
                            "data-testid": "lazyimage-container",
                            style: {
                                height: E
                            }
                        }, v && !(u && b) && y()(D.Transition, { in: !!f,
                            timeout: 300
                        }, void 0, (function(e) {
                            return M.a.createElement("img", s()({
                                alt: i,
                                className: U,
                                style: B({}, X[e])
                            }, o))
                        })), v && u && b && y()(D.Transition, { in: !!f,
                            timeout: 300
                        }, void 0, (function(e) {
                            return y()("picture", {
                                className: U,
                                style: B({}, X[e])
                            }, void 0, q(b), M.a.createElement("img", s()({
                                alt: i
                            }, o)))
                        }))))
                    }
                }]), t
            }(j.Component), r.defaultProps = {
                lazy: !1,
                fullBleedImageStyles: null,
                alt: "",
                renditions: null,
                initialAspectRatio: 1.66,
                initialImageWidth: 580,
                safeWidths: null,
                rootMargin: 0,
                metadataOptOut: !1,
                imageContainerRef: null,
                useMobileCrop: !1
            }, o = i)) || o;
            t.a = K
        },
        M5Mg: function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o),
                i = n("lwsE"),
                a = n.n(i),
                s = n("W8MJ"),
                l = n.n(s),
                c = n("a1gu"),
                d = n.n(c),
                u = n("Nsbk"),
                p = n.n(u),
                m = n("7W2i"),
                f = n.n(m),
                h = n("q1tI"),
                g = n.n(h),
                v = (n("17x9"), n("UmXO")),
                b = n("/giM");

            function y(e) {
                return /\.mp4$/.test(e)
            }
            var O = r()("div", {
                    className: b.e
                }, void 0, r()("div", {
                    className: b.f
                }, void 0, r()("div", {}), r()("div", {}))),
                w = function(e) {
                    function t() {
                        var e, n;
                        a()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = d()(this, (e = p()(t)).call.apply(e, [this].concat(r)))).spinnerInnerRef = g.a.createRef(), n.state = {
                            isTransitionDone: !1
                        }, n.componentDidMount = function() {
                            n.spinnerInnerRef.current && n.spinnerInnerRef.current.addEventListener("transitionend", (function() {
                                n.setState({
                                    isTransitionDone: !0
                                })
                            }))
                        }, n
                    }
                    return f()(t, e), l()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isLoading,
                                n = e.aspectRatio,
                                o = e.children,
                                i = e.className,
                                a = e.backgroundMedia,
                                s = this.state.isTransitionDone,
                                l = this.spinnerInnerRef;
                            return r()("div", {
                                className: i
                            }, void 0, r()(b.c, {
                                aspectRatio: n
                            }, void 0, r()("div", {
                                className: Object(v.cx)(b.d)
                            }, void 0, o), r()(b.b, {
                                aspectRatio: n,
                                isLoading: t,
                                transitionDuration: 300,
                                isTransitionDone: s,
                                innerRef: l
                            }, void 0, r()(b.a, {}, void 0, !y(a) && r()("img", {
                                src: a,
                                alt: "Video player loading"
                            }), y(a) && r()("video", {
                                src: "".concat(a, "#t=0.01"),
                                preload: "auto"
                            })), O)))
                        }
                    }]), t
                }(h.Component);
            w.displayName = "LoadingSpinner", w.defaultProps = {
                isLoading: !1,
                aspectRatio: "16:9",
                children: null,
                className: null
            }, t.a = w
        },
        M9y8: function(e, t, n) {
            "use strict";
            n.r(t);
            var o, r, i, a = n("gcR/"),
                s = n.n(a),
                l = n("lwsE"),
                c = n.n(l),
                d = n("W8MJ"),
                u = n.n(d),
                p = n("a1gu"),
                m = n.n(p),
                f = n("Nsbk"),
                h = n.n(f),
                g = n("7W2i"),
                v = n.n(g),
                b = (n("OG14"), n("VkAN")),
                y = n.n(b),
                O = (n("xfY5"), n("fN96"), n("q1tI")),
                w = n.n(O),
                x = n("17x9"),
                k = n.n(x),
                j = n("hHXl"),
                M = n("Dugd"),
                P = n.n(M),
                S = n("X6oL"),
                C = n.n(S),
                E = n("Pqtm"),
                T = n("CxY0"),
                I = n("InUh"),
                N = n.n(I),
                L = n("ZKN5"),
                D = n("wOE9"),
                A = n("Esml"),
                R = n("OO03"),
                H = n("r5Qd"),
                B = n("SMKJ"),
                _ = n("rnzX"),
                z = n("+mLS"),
                V = n("369f"),
                F = (n("VRzm"), n("rGqo"), n("yt8O"), n("Btvt"), n("XfO3"), n("2Spj"), n("9rZX")),
                W = n.n(F),
                U = n("WCv0"),
                X = n("Vc97"),
                q = n("06b3"),
                G = n("0VxJ"),
                K = n("u1H9"),
                Y = n("Lkij"),
                J = n("pVnL"),
                Z = n.n(J),
                Q = n("aVaz"),
                $ = w.a.forwardRef((function(e, t) {
                    return w.a.createElement("div", {
                        ref: t,
                        style: {
                            display: "none"
                        }
                    }, w.a.createElement(Q.a, Z()({}, e, {
                        sources: ["user", "geolocation"]
                    })))
                })),
                ee = n("UmXO"),
                te = n("wXC7"),
                ne = n.n(te),
                oe = ne.a.color,
                re = "22px",
                ie = "#d8d8d8",
                ae = Object(ee.css)("position:relative;top:50%;margin:", -210, "px auto 0;width:", 800, "px;height:", 425, "px;color:", "#fff", ";max-width:", ne.a.breakpoint.mobileFullWidth, ";", ne.a.breakpoint.medium, "{height:", 320, "px;}@media (orientation:landscape){height:", 320, "px;margin-top:", -160, "px;}@media (max-height:", 320, "px){height:", 300, "px;margin-top:", -150, "px;}"),
                se = Object(ee.css)("position:fixed;top:0;left:0;right:0;bottom:0;height:100%;background-image:linear-gradient(-180deg,rgba(255,255,255,0.5) 0%,#fff 100%);z-index:", ne.a.zIndex.modal, ";"),
                le = Object(ee.css)("background-clip:padding-box;background-color:", oe.gray40, ";border:none;border-radius:50%;box-shadow:0 0 0 1px ", oe.white, ",0 0 0 2px ", ie, ",-1px 1px 2px 3px rgba(0,0,0,0.15);cursor:pointer;font-size:0;height:", re, ";line-height:normal;margin:0;padding:0;position:absolute;right:-11px;transition:background-color 0.2s ease-in;top:-11px;vertical-align:middle;width:", re, ";z-index:", ne.a.zIndex.modal, ";:hover{background-color:", oe.gray20, ";}::before{transform:rotate(45deg);}::after{transform:rotate(135deg);}::before,::after{background-color:", oe.white, ";content:'';display:block;height:2px;left:6px;position:absolute;top:10px;width:10px;}"),
                ce = q.a.load("mc_debug"),
                de = C()()(o = Object(X.a)(o = Object(U.a)((i = r = function(e) {
                    function t() {
                        var e, n;
                        c()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = m()(this, (e = h()(t)).call.apply(e, [this].concat(r)))).state = {
                            assetsLoaded: !1,
                            open: !1,
                            changeContent: !1,
                            loadOptimizely: !1,
                            dismissed: !1,
                            campaignName: ""
                        }, n.closeTimer = null, n.storage = w.a.createRef(), n.target = w.a.createRef(), n.openModal = function() {
                            ce || n.beginCloseTimer()
                        }, n.closeModal = function() {
                            n.setState({
                                dismissed: !0
                            })
                        }, n.handleCloseClick = function() {
                            n.closeModal(), n.sendInteractionTracking({
                                name: "close_subscription",
                                label: "Close",
                                url: ""
                            })
                        }, n.beginCloseTimer = function() {
                            var e = n.props.timeout;
                            n.closeTimer = setTimeout((function() {
                                n.closeModal(), n.closeTimer = null
                            }), e)
                        }, n.onOptimizelyUpdated = function(e) {
                            e && e.shouldShow && n.setState({
                                open: !0,
                                campaignName: e.campaignName
                            })
                        }, n
                    }
                    return v()(t, e), u()(t, [{
                        key: "sendInteractionTracking",
                        value: function(e) {
                            var t = this.state.campaignName,
                                n = this.props,
                                o = n.pageCount,
                                r = n.tracking,
                                i = Object(K.g)(o);
                            r.trackEvent({
                                event: "moduleInteraction",
                                eventData: {
                                    pagetype: "homepage",
                                    trigger: "module",
                                    type: "click"
                                },
                                module: {
                                    name: "Welcome Ad",
                                    context: "standard",
                                    label: t,
                                    region: i,
                                    element: e
                                }
                            })
                        }
                    }, {
                        key: "setInteractionTracking",
                        value: function() {
                            var e = this.target.current.querySelectorAll("[href*=subscription]"),
                                t = this.target.current.querySelectorAll("[href*=login]"),
                                n = this.sendInteractionTracking.bind(this);
                            e.forEach((function(e) {
                                e.addEventListener("click", (function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.target,
                                        o = "a" === t.tagName.toLowerCase(),
                                        r = o ? t : t.parentNode,
                                        i = r.href,
                                        a = void 0 === i ? "" : i,
                                        s = "See my options";
                                    n({
                                        name: "goto_lp",
                                        label: s,
                                        url: a
                                    })
                                }))
                            })), t.forEach((function(e) {
                                e.addEventListener("click", (function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.target,
                                        o = "a" === t.tagName.toLowerCase(),
                                        r = o ? t : t.parentNode,
                                        i = r.href,
                                        a = void 0 === i ? "" : i,
                                        s = "Already a Subscriber, Login";
                                    n({
                                        name: "login",
                                        label: s,
                                        url: a
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "loadScripts",
                        value: function() {
                            var e = this,
                                t = this.props.madData,
                                n = this.state.assetsLoaded;
                            if (t && t.content && !n) {
                                var o = Object(G.d)(t.content.welcomeAd);
                                o.length > 0 && Promise.all(Object(G.b)(o)).then((function() {
                                    return e.setState({
                                        assetsLoaded: !0
                                    })
                                })).catch((function(e) {
                                    ce && console.log("Magnolia JS script failed to load", e)
                                }))
                            }
                        }
                    }, {
                        key: "getContent",
                        value: function() {
                            var e, t, n = this.props.madData,
                                o = this.state,
                                r = o.assetsLoaded;
                            return o.loadOptimizely ? w.a.createElement("div", {
                                ref: this.target
                            }) : r && (null === (e = n.content) || void 0 === e ? void 0 : null === (t = e.welcomeAd) || void 0 === t ? void 0 : t.active) ? s()("div", {
                                dangerouslySetInnerHTML: {
                                    __html: n.content.welcomeAd.html
                                }
                            }) : null
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.loadScripts()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            var n = this.props.madData;
                            if (null === e.madData && null !== n && this.loadScripts(), this.state.loadOptimizely && this.state.open && t.open !== this.state.open && this.setState({
                                    changeContent: !0
                                }), this.state.changeContent && t.changeContent !== this.state.changeContent && this.target.current) {
                                this.target.current.innerHTML = this.storage.current.innerHTML;
                                var o = this.state.campaignName,
                                    r = void 0 === o ? "default" : o,
                                    i = this.props,
                                    a = i.pageCount,
                                    s = i.tracking,
                                    l = Object(K.g)(a);
                                s.trackEvent({
                                    event: "impression",
                                    module: {
                                        name: "Welcome Ad",
                                        context: "standard",
                                        label: r,
                                        region: l
                                    }
                                }), this.setInteractionTracking(), Object(G.c)(n, "welcomeAd").forEach((function(e) {
                                    Object(Y.e)(e.testName)
                                }))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.closeTimer)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.loadOptimizely;
                            return this.state.dismissed ? null : w.a.createElement(w.a.Fragment, null, e && w.a.createElement($, {
                                ref: this.storage,
                                id: "vi_welcome",
                                onOptimizelyUpdated: this.onOptimizelyUpdated
                            }), s()(W.a, {
                                isOpen: this.state.open,
                                role: "alert",
                                ariaHideApp: !1,
                                onAfterOpen: this.openModal,
                                onRequestClose: this.handleCloseClick,
                                shouldCloseOnOverlayClick: !0,
                                className: ae,
                                overlayClassName: se
                            }, void 0, s()("button", {
                                tabIndex: "0",
                                onClick: this.handleCloseClick,
                                onKeyPress: this.handleCloseClick,
                                className: le,
                                title: "Close",
                                id: "vi_welcome_close"
                            }, void 0, "Close"), this.getContent()))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e) {
                            var t = e.madData;
                            if (t && t.content.welcomeAd && t.content.welcomeAd.active) {
                                var n = t.content.welcomeAd;
                                return n.campaignName === G.a ? {
                                    loadOptimizely: !0
                                } : {
                                    campaignName: n.campaignName,
                                    open: !0
                                }
                            }
                            return null
                        }
                    }]), t
                }(O.Component), r.defaultProps = {
                    timeout: 7e3,
                    pageCount: null,
                    madData: null
                }, o = i)) || o) || o) || o,
                ue = n("b4f6"),
                pe = n("RvkP"),
                me = n("V6aA"),
                fe = n("0Pd7"),
                he = n("ecgq"),
                ge = n("B2Q+"),
                ve = (n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("lSNA")),
                be = n.n(ve),
                ye = (n("RW0V"), n("ktkx")),
                Oe = n("Rb+W"),
                we = n("W6mh");

            function xe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var ke = Object(Oe.a)("dfp_home_toggle");
            var je = {
                    lazy: !0,
                    AdRequirements: function(e, t) {
                        if (!t) return null;
                        var n = t.getReferrer,
                            o = t.fastlyAbraConfig,
                            r = t.data,
                            i = Object(Oe.c)(),
                            a = r.program;
                        i && o && Object.keys(o).forEach((function(e) {
                            i.push(o[e])
                        }));
                        var s = {
                            typ: "hp",
                            topref: n(),
                            abra_dfp: i
                        };
                        return s = Object(ye.b)(a, s),
                            function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? xe(n, !0).forEach((function(t) {
                                        be()(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xe(n).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, Object(ye.a)(e, t), {}, s)
                    },
                    offset: Object(Oe.j)(),
                    onPostMessage: function(e, t, n, o) {
                        "string" == typeof e.data && (e.data.indexOf("goog_creative_loaded") > -1 || e.data.indexOf("googMsgType") > -1) && n("StartWelcomeAd"), e.data.exclusive && (n("StopWelcomeAd"), Object(we.a)(e, t, n, o))
                    },
                    bidders: [],
                    haltDFP: ke,
                    lockdownAds: ye.c,
                    lazyApi: Object(Oe.v)()
                },
                Me = (n("INYr"), n("J4zp")),
                Pe = n.n(Me),
                Se = n("uyXp"),
                Ce = n("Imfu"),
                Ee = n("mPJI"),
                Te = n("5dFD"),
                Ie = n("STmI"),
                Ne = n("cymk"),
                Le = ne.a.breakpoint,
                De = ne.a.color,
                Ae = Object(ee.css)("padding:20px 25px 25px;> *:first-child{margin-right:10px;}> *:first-child *{display:inline;}", Le.medium, "{padding:0 0 18px 0;border-bottom:1px solid ", De.gray10, ";}"),
                Re = Object(ee.css)(Le.medium, "{display:flex;> *:first-child{order:1;margin-right:0;}> *:last-child{flex-shrink:0;margin-right:8px;}}"),
                He = Object(ee.css)("display:inline-flex;align-items:flex-end;height:23px;", Le.medium, "{margin:'1px 0 -1px';height:19px;}"),
                Be = Object(ee.css)("margin:'2px 0 -2px';"),
                _e = function(e) {
                    var t = e.block,
                        n = Object(Ne.a)(t);
                    if (!n.length) return null;
                    var o = Pe()(n, 1)[0];
                    return s()(Ee.a, {
                        block: t
                    }, void 0, s()(Se.a, {
                        asset: o,
                        assetIndex: 0,
                        useChildren: !0
                    }, void 0, s()("div", {
                        className: Object(ee.cx)(Ae, be()({}, Re, "BREAKING" === o.newsStatus || "LIVE" === o.newsStatus))
                    }, void 0, s()(Te.a, {
                        link: o
                    }, void 0, s()(Ce.a, {
                        asset: o,
                        urgent: "URGENT" === o.cardType,
                        showSentence: !0
                    })), s()("div", {
                        className: Object(ee.cx)(He, be()({}, Be, "URGENT" === o.cardType))
                    }, void 0, s()(Ie.a, {
                        asset: o,
                        isAlert: !0
                    })))))
                };
            _e.displayName = "Alert";
            var ze = _e,
                Ve = n("0JbW"),
                Fe = n("/Ghh"),
                We = n("nUoC"),
                Ue = n("XWHH"),
                Xe = n.n(Ue),
                qe = n("3NoI"),
                Ge = n.n(qe),
                Ke = ne.a.breakpoint,
                Ye = ne.a.color,
                Je = ne.a.font,
                Ze = Object(ee.keyframes)("0%{opacity:0;}10%,90%{opacity:1;}100%{opacity:0;}"),
                Qe = Object(ee.css)("display:flex;flex-direction:column;width:100%;"),
                $e = Object(ee.css)("border-top:1px solid ", Ye.gray60, ";padding-top:4px;"),
                et = Ge()("div", {
                    target: "e1ll57lj0"
                })(Ke.mediumLarge, "{align-items:baseline;display:none;opacity:0;flex-direction:row;width:100%;", (function(e) {
                    return e.isVisible && " animation: ".concat(Ze, " 5s forwards;\n        display: flex;\n        width: 100%;\n      ")
                }), ";}", Ke.large, "{", (function(e) {
                    return 1 !== e.storyCount && "\n        border-top: 1px solid ".concat(Ye.gray60, ";\n        display: flex;\n        opacity: 100;\n        animation: none;\n        justify-content: space-between;\n        align-items: baseline;\n        padding: 3px 0 4px;\n\n        &:first-child {\n          border-top: 0;\n        }\n\n        ").concat(2 === e.storyCount && "\n            &:nth-child(3) {\n              display: none;\n            }\n          ", ";\n      ")
                }), ";}"),
                tt = Object(ee.css)("color:", Ye.gray10, ";font-family:", Je.franklinBase, ";font-size:", Je.size(12), ";"),
                nt = Object(ee.css)("display:flex;align-items:baseline;"),
                ot = Ge()("div", {
                    target: "e1ll57lj1"
                })("font-family:", Je.franklinBase, ";font-size:", Je.size(12), ";margin-right:5px;", (function(e) {
                    return "negative" === e.direction && "color: ".concat("#A61B1E")
                }), ";", (function(e) {
                    return "positive" === e.direction && "color: ".concat("#3F893B")
                }), ";"),
                rt = Ge()("div", {
                    target: "e1ll57lj2"
                })("display:none;", (function(e) {
                    return (2 === e.storyCount || 3 === e.storyCount) && "\n    ".concat(Ke.large, " {\n      display: block;\n      min-height: ").concat(3 === e.storyCount ? "71px" : "48px", ";\n    }\n  ")
                }), ";"),
                it = Object(ee.css)("transform:rotate(180deg);"),
                at = s()("title", {}, void 0, "Group"),
                st = s()("defs", {}),
                lt = function(e) {
                    var t = e.direction;
                    return s()("svg", {
                        width: "5px",
                        height: "9px",
                        viewBox: "0 0 5 9",
                        className: Object(ee.cx)(be()({}, it, "positive" !== t))
                    }, void 0, at, st, s()("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, void 0, s()("g", {
                        id: "Artboard"
                    }, void 0, s()("g", {
                        id: "Group"
                    }, void 0, s()("path", {
                        d: "M2.5,9 L2.5,3.373",
                        id: "Shape",
                        stroke: "positive" === t ? "#3F893B" : "#A61B1E"
                    }), s()("polyline", {
                        id: "Shape",
                        fill: "positive" === t ? "#3F893B" : "#A61B1E",
                        fillRule: "nonzero",
                        points: "4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"
                    })))))
                };
            lt.displayName = "Arrow", lt.defaultProps = {
                direction: null
            };
            var ct = lt,
                dt = function(e) {
                    function t() {
                        var e, n;
                        c()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = m()(this, (e = h()(t)).call.apply(e, [this].concat(r)))).state = {
                            data: null,
                            index: 0,
                            fetchFinished: !1
                        }, n.interval = null, n.incrementIndex = function() {
                            var e = n.state.index + 1;
                            e > 2 && (e = 0), n.setState({
                                index: e
                            })
                        }, n
                    }
                    return v()(t, e), u()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.fetchStocks()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.lastUpdated,
                                o = t.updatedDeviceType,
                                r = t.storyCount;
                            e.lastUpdated !== n && (("largeTablet" === o || "desktop" === o && 1 === r) && this.fetchStocks(), ("largeTablet" !== o || "desktop" !== o && 1 !== r) && (clearInterval(this.interval), this.interval = null))
                        }
                    }, {
                        key: "fetchStocks",
                        value: function() {
                            var e = this;
                            Xe()("https://content.api.nytimes.com/svc/topics/v2/markets.json").then((function(e) {
                                if (200 === e.status) return e.json();
                                throw new Error("Failed to fetch stocks")
                            })).then((function(t) {
                                var n, o;
                                (null == t ? void 0 : null === (n = t.results) || void 0 === n ? void 0 : null === (o = n.indexes) || void 0 === o ? void 0 : o.length) ? (e.setState({
                                    data: t.results,
                                    fetchFinished: !0
                                }), e.interval = setInterval(e.incrementIndex, 5e3)) : e.setState({
                                    fetchFinished: !0
                                })
                            }), (function(t) {
                                "prd" !== vi.env.ENVIRONMENT && (console.error(t), e.setState({
                                    fetchFinished: !0
                                }))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                n = t.data,
                                o = void 0 === n ? null : n,
                                r = t.fetchFinished,
                                i = this.props,
                                a = i.storyCount,
                                l = i.updatedDeviceType,
                                c = i.isGrouped;
                            if (!r) return s()(rt, {
                                storyCount: a
                            });
                            if (!o || !o.indexes) return null;
                            var d = [o.indexes[1], o.indexes[0], o.indexes[2]];
                            return "largeTablet" === l || "desktop" === l ? s()("div", {
                                className: Object(ee.cx)(Qe, be()({}, $e, c))
                            }, void 0, d.map((function(t, n) {
                                return s()(et, {
                                    storyCount: a,
                                    isVisible: e.state.index === n
                                }, t.symbol, s()("div", {}, void 0, s()("span", {
                                    className: tt,
                                    dangerouslySetInnerHTML: {
                                        __html: "".concat(t.shortName)
                                    }
                                })), s()("div", {
                                    className: nt
                                }, void 0, s()(ot, {
                                    direction: t.direction
                                }, void 0, t.changePercentPretty), s()(ct, {
                                    direction: t.direction
                                })))
                            }))) : null
                        }
                    }]), t
                }(O.Component);
            dt.displayName = "Stocks", dt.defaultProps = {
                lastUpdated: void 0,
                storyCount: 1,
                updatedDeviceType: null,
                isGrouped: !1
            };
            var ut = dt,
                pt = n("GaDg"),
                mt = ne.a.breakpoint,
                ft = ne.a.color,
                ht = Object(ee.css)(mt.medium, "{order:0;}"),
                gt = Object(ee.css)("border-top:1px solid ", ft.gray60, ";", mt.medium, "{border-top:0;}"),
                vt = Object(ee.css)(mt.medium, "{border-bottom:1px double ", ft.gray10, ";padding-bottom:2px;&::after{content:'';border-bottom:1px double ", ft.gray10, ";display:block;}}"),
                bt = Object(ee.css)(mt.medium, "{display:flex;align-items:center;padding:5px 0;width:100%;}", mt.mediumLarge, "{align-items:stretch;}"),
                yt = Object(ee.css)("border-bottom:1px solid ", ft.gray60, ";", mt.medium, "{display:flex;align-items:center;border-right:1px solid ", ft.gray60, ";border-bottom:none;padding:0 15px;width:100%;&:first-child{padding-left:0;}&:last-child{padding-right:0;border-right:none;}}", mt.mediumLarge, "{&:last-child{padding-right:15px;border-right:1px solid ", ft.gray60, ";}}"),
                Ot = Object(ee.css)(mt.medium, "{display:flex;align-content:center;width:100%;}"),
                wt = Object(ee.css)("display:none;", mt.mediumLarge, "{display:flex;align-content:center;}"),
                xt = Object(ee.css)(mt.mediumLarge, "{border-right:1px solid ", ft.gray60, ";display:flex;align-items:center;width:100%;}"),
                kt = Object(ee.css)(mt.mediumLarge, "{display:flex;align-items:center;width:100%;}"),
                jt = Object(ee.css)(mt.medium, "{min-height:40px;> *{min-height:40px;}}", mt.mediumLarge, "{.", wt, "{width:65.7%;}.", xt, "{min-width:151px;padding:0 15px;}.", kt, "{padding-left:15px;}}", mt.large, "{.", wt, "{width:50%;}}"),
                Mt = Object(ee.css)(mt.medium, "{min-height:61px;> *{min-height:61px;}}", mt.mediumLarge, "{min-height:71px;> *{min-height:71px;}.", wt, "{display:flex;flex-direction:column;justify-content:center;width:21.8%;padding-left:15px;}.", xt, "{border-right:none;order:1;}}", mt.large, "{min-height:61px;> *{min-height:61px;}.", wt, "{display:flex;flex-direction:row;justify-content:unset;width:50%;padding-left:0;}.", xt, "{border-right:1px solid ", ft.gray60, ";order:0;padding:0 15px;}.", kt, "{padding-left:15px;}}"),
                Pt = Object(ee.css)(mt.medium, "{min-height:71px;> *{min-height:71px;}.", yt, ":nth-child(2){width:75%;}}", mt.mediumLarge, "{.", wt, "{display:flex;flex-direction:column;justify-content:center;width:21.8%;padding-left:15px;}.", xt, "{border-right:none;order:1;}}", mt.large, "{.", yt, ":nth-child(2){width:100%;}.", wt, "{display:flex;flex-direction:row;justify-content:unset;width:31%;padding-left:0;}.", xt, "{border-right:1px solid ", ft.gray60, ";order:0;padding:0 15px;}.", kt, "{padding-left:15px;}}"),
                St = function(e) {
                    var t = e.storyCount,
                        n = e.updatedDeviceType;
                    return s()("div", {
                        className: wt
                    }, void 0, w.a.createElement(w.a.Fragment, null, s()("div", {
                        className: xt
                    }, void 0, s()(ut, {
                        lastUpdated: Object(pt.a)(),
                        updatedDeviceType: n,
                        storyCount: t,
                        isGrouped: "largeTablet" === n && t > 1
                    })), s()("div", {
                        className: kt
                    }, void 0, s()(We.a, {
                        lastUpdated: Object(pt.a)(),
                        isBriefing: !0,
                        updatedDeviceType: n,
                        storyCount: t
                    }))))
                };
            St.displayName = "Widgets", St.defaultProps = {
                storyCount: 0
            };
            var Ct = St;

            function Et(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Et(n, !0).forEach((function(t) {
                        be()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var It = ht,
                Nt = gt,
                Lt = function(e) {
                    var t, n, o;
                    return (null == e ? void 0 : null === (t = e.column) || void 0 === t ? void 0 : null === (n = t.promotionalMedia) || void 0 === n ? void 0 : null === (o = n.crops) || void 0 === o ? void 0 : o.length) > 0
                },
                Dt = {
                    mediaLargeHeadlineSummary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "MediaHeadlineContent"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Tt({}, e, {
                                    type: 1,
                                    isBriefing: !0
                                })
                            },
                            content: function(e) {
                                return Tt({}, e, {
                                    isBriefing: !0
                                })
                            },
                            media: function(e) {
                                return Tt({}, e, {
                                    size: "large",
                                    preferredCrop: Lt(e.media) ? "square320" : "square640",
                                    block: "Briefing"
                                })
                            }
                        }
                    },
                    mediaMediumHeadlineSummary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "MediaHeadlineContent"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Tt({}, e, {
                                    type: 1,
                                    isBriefing: !0
                                })
                            },
                            content: function(e) {
                                return Tt({}, e, {
                                    isBriefing: !0
                                })
                            },
                            media: function(e) {
                                return Tt({}, e, {
                                    size: "medium",
                                    preferredCrop: Lt(e.media) ? "square320" : "square640",
                                    block: "Briefing"
                                })
                            }
                        }
                    },
                    mediaSmallHeadlineSummary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "MediaHeadlineContent"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Tt({}, e, {
                                    type: 1,
                                    inline: !0,
                                    isBriefing: !0
                                })
                            },
                            content: function(e) {
                                return Tt({}, e, {
                                    isBriefing: !0,
                                    inline: !0
                                })
                            },
                            media: function(e) {
                                return Tt({}, e, {
                                    size: "small",
                                    preferredCrop: Lt(e.media) ? "square320" : "square640",
                                    block: "Briefing"
                                })
                            }
                        }
                    }
                },
                At = {
                    headlineSummaryImage: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "MobileCol1AuthorImageHeadlineContentMetaCol2Media"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Tt({}, e, {
                                    type: 2,
                                    isBriefing: !0
                                })
                            },
                            content: function(e) {
                                return Tt({}, e, {
                                    isBriefing: !0
                                })
                            },
                            meta: function(e) {
                                return Tt({}, e, {
                                    hideMeta: !0
                                })
                            },
                            media: function(e) {
                                return Tt({}, e, {
                                    preferredCrop: Lt(e.media) ? "square320" : "square640",
                                    block: "Briefing"
                                })
                            }
                        }
                    },
                    headlineSummary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "AuthorImageHeadlineContentMeta"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Tt({}, e, {
                                    type: 2,
                                    isBriefing: !0
                                })
                            },
                            content: function(e) {
                                return Tt({}, e, {
                                    isBriefing: !0
                                })
                            },
                            meta: function(e) {
                                return Tt({}, e, {
                                    hideMeta: !0
                                })
                            }
                        }
                    }
                },
                Rt = {
                    desktop: {
                        1: [Dt.mediaSmallHeadlineSummary],
                        2: [Dt.mediaMediumHeadlineSummary, Dt.mediaMediumHeadlineSummary],
                        3: [Dt.mediaLargeHeadlineSummary, Dt.mediaLargeHeadlineSummary, Dt.mediaLargeHeadlineSummary]
                    },
                    tablet: {
                        1: [Dt.mediaSmallHeadlineSummary],
                        2: [Dt.mediaMediumHeadlineSummary, Dt.mediaMediumHeadlineSummary],
                        3: [Dt.mediaLargeHeadlineSummary, {
                            headlineSummary: {
                                template: function(e) {
                                    return "INTERACTIVE" === e.asset.cardType ? "Media" : "HeadlineContent"
                                },
                                assetMux: {
                                    headline: function(e) {
                                        return Tt({}, e, {
                                            type: 1,
                                            inline: !1,
                                            isBriefing: !0
                                        })
                                    },
                                    content: function(e) {
                                        return Tt({}, e, {
                                            isBriefing: !0,
                                            inline: !1
                                        })
                                    }
                                }
                            }
                        }.headlineSummary, Dt.mediaLargeHeadlineSummary]
                    },
                    smartphone: [At.headlineSummaryImage, At.headlineSummary, At.headlineSummary]
                },
                Ht = function(e) {
                    var t, n, o, r, i = e.block,
                        a = e.deviceType,
                        l = e.updatedDeviceType,
                        c = e.lazy,
                        d = e.noTopBorder,
                        u = e.position,
                        p = "smartphone" === a,
                        m = [],
                        f = [],
                        h = [];
                    if (null == i ? void 0 : null === (t = i.blocks) || void 0 === t ? void 0 : null === (n = t.edges) || void 0 === n ? void 0 : n.length) {
                        var g = i.blocks.edges.map((function(e) {
                                return Object(Ne.a)(e && e.node)
                            })),
                            v = Pe()(g, 2);
                        f = v[0], h = v[1], m = f.concat(h).slice(0, 3)
                    }
                    return m && m.length ? (r = p ? Rt[a].map((function(e, t) {
                        return t > 0 && Lt(m[t]) ? Rt[a][0] : e
                    })) : Rt[a][m.length], s()("div", {
                        className: Object(ee.cx)(It, be()({}, Nt, "top" !== u))
                    }, void 0, s()(Ee.a, {
                        block: i,
                        lazy: c,
                        noTopBorder: d
                    }, void 0, s()("div", {
                        className: vt
                    }, void 0, s()("div", {
                        className: Object(ee.cx)(bt, (o = {}, be()(o, jt, 1 === m.length), be()(o, Mt, 2 === m.length), be()(o, Pt, 3 === m.length), o))
                    }, void 0, s()("div", {
                        className: Ot
                    }, void 0, m.map((function(e, t) {
                        return s()("div", {
                            className: yt
                        }, e.id, w.a.createElement(Se.a, Z()({
                            asset: e,
                            assetIndex: t
                        }, r[t])))
                    }))), ("desktop" === a || "largeTablet" === l) && s()(Ct, {
                        storyCount: m.length,
                        updatedDeviceType: l
                    })))))) : null
                };
            Ht.displayName = "Briefing", Ht.defaultProps = {
                lazy: !0,
                noTopBorder: !1,
                position: ""
            };
            var Bt = fe.a.Consumer(Ht),
                _t = n("OW05"),
                zt = n("vuE1"),
                Vt = ne.a.breakpoint,
                Ft = ne.a.color,
                Wt = Object(ee.css)(zt.a, " display:flex;flex-flow:column nowrap;", Vt.medium, "{margin-left:-15px;width:calc(100% + 30px);}", Vt.mediumLarge, "{flex-flow:row nowrap;}", Vt.large, "{flex-flow:column nowrap;}"),
                Ut = Object(ee.css)(zt.a, " display:flex;flex-flow:column nowrap;", Vt.medium, "{flex-flow:row nowrap;margin-bottom:15px;}", Vt.mediumLarge, "{flex-flow:row nowrap;width:80%;margin-bottom:0;}", Vt.large, "{width:100%;}"),
                Xt = Object(ee.css)(zt.a, " position:relative;border-bottom:1px solid ", Ft.gray60, ";", Vt.medium, "{margin:0 15px;padding-bottom:15px;width:100%;}", Vt.mediumLarge, "{margin:0;padding:0 15px;border-bottom:none;}", Vt.large, "{margin:0 0 15px;padding:0 15px 15px;&::after{content:'';position:absolute;width:calc(100% - 30px);bottom:0;left:15px;border-bottom:1px solid ", Ft.gray60, ";}}"),
                qt = Object(ee.css)(zt.a, " display:flex;flex-flow:column nowrap;", Vt.medium, "{flex-flow:row wrap;}", Vt.mediumLarge, "{flex-flow:column wrap;width:20%;border-left:1px solid ", Ft.gray60, ";}", Vt.large, "{width:100%;border:none;}"),
                Gt = Object(ee.css)(zt.a, " position:relative;border-bottom:1px solid ", Ft.gray60, ";&:last-child{border-bottom:none;}", Vt.medium, "{padding:0 15px;box-sizing:border-box;border-bottom:none;&:first-child{width:66.66%;}&:last-child{width:33.33%;border-left:1px solid ", Ft.gray60, ";}}", Vt.mediumLarge, "{margin:0 0 15px;padding:0 15px 15px;width:100% !important;border:none !important;&::after{content:'';position:absolute;width:calc(100% - 30px);bottom:0;left:15px;border-bottom:1px solid ", Ft.gray60, ";}&:last-child{margin-bottom:0;padding-bottom:0;&::after{display:none;}}}");

            function Kt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Kt(n, !0).forEach((function(t) {
                        be()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Jt = {
                    primary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "VIDEO" === e.asset.cardType ? "MediaContentMeta" : "NONE" === e.asset.promotionalMediaEmphasis ? "Row1HeadlineRow2Col1ContentMetaCol2Media" : "MediaAuthorImageHeadlineContentMeta"
                        },
                        assetMux: {
                            headline: function(e) {
                                var t;
                                if ("VIDEO" === e.asset.cardType) return Yt({}, e, {
                                    assetTone: "feature",
                                    rule: "bottom",
                                    centered: !1,
                                    balanced: !0
                                });
                                var n = "Opinion" === (null === (t = e.asset.section) || void 0 === t ? void 0 : t.displayName);
                                return Yt({}, e, {
                                    assetTone: "feature",
                                    rule: n ? null : "bottom",
                                    centered: !1,
                                    balanced: !0,
                                    type: 4,
                                    showExclusiveLabel: !0,
                                    opinion: n
                                })
                            },
                            media: function(e) {
                                return "VIDEO" === e.media.cardType ? e : "NONE" === e.media.promotionalMediaEmphasis ? Yt({}, e, {
                                    meta: null,
                                    ruleAlign: !0,
                                    preferredCrop: "square640",
                                    showInteractivePromo: !1
                                }) : Yt({}, e, {
                                    inlineVideo: !0,
                                    meta: "credit"
                                })
                            },
                            column: function(e) {
                                return "NONE" === e.asset.promotionalMediaEmphasis ? Yt({}, e, {
                                    cols: [{
                                        columns: 1,
                                        noVerticalBorder: !0
                                    }, {
                                        columns: 1,
                                        noVerticalBorder: !0
                                    }]
                                }) : e
                            }
                        }
                    },
                    secondary: {
                        template: function(e) {
                            return "TEXT" === e.asset.cardType ? "AuthorImageHeadlineContentMeta" : "Col1AuthorImageHeadlineContentMetaCol2Media"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Yt({}, e, {
                                    type: 2
                                })
                            },
                            media: function(e) {
                                return Yt({}, e, {
                                    preferredCrop: "square640",
                                    showInteractivePromo: !1
                                })
                            },
                            column: function(e) {
                                return Yt({}, e, {
                                    cols: [{
                                        columns: 1,
                                        noVerticalBorder: !0
                                    }, {
                                        columns: 1,
                                        noVerticalBorder: !0
                                    }]
                                })
                            }
                        }
                    }
                },
                Zt = {
                    primary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "VIDEO" === e.asset.cardType ? "MediaContentMeta" : "Col1AuthorImageHeadlineContentMetaCol2Media"
                        },
                        assetMux: {
                            headline: function(e) {
                                var t;
                                if ("VIDEO" === e.asset.cardType) return Yt({}, e, {
                                    assetTone: "feature",
                                    rule: "bottom",
                                    centered: !1,
                                    balanced: !0
                                });
                                var n = "Opinion" === (null === (t = e.asset.section) || void 0 === t ? void 0 : t.displayName);
                                return Yt({}, e, {
                                    assetTone: "feature",
                                    rule: n ? null : "bottom",
                                    centered: !1,
                                    type: 4,
                                    balanced: !0,
                                    showExclusiveLabel: !0,
                                    opinion: n
                                })
                            },
                            content: function(e) {
                                return Yt({}, e, {
                                    centered: "VIDEO" === e.asset.cardType
                                })
                            },
                            meta: function(e) {
                                return Yt({}, e, {
                                    centered: "VIDEO" === e.asset.cardType
                                })
                            },
                            media: function(e) {
                                return "VIDEO" === e.media.cardType ? e : Yt({}, e, {
                                    inlineVideo: !0,
                                    meta: "credit"
                                })
                            },
                            column: function(e) {
                                return "INTERACTIVE" === e.asset.cardType || "VIDEO" === e.asset.cardType ? e : Yt({}, e, {
                                    cols: [{
                                        columns: 7,
                                        noVerticalBorder: !0
                                    }, {
                                        columns: 13,
                                        noVerticalBorder: !0
                                    }]
                                })
                            }
                        }
                    },
                    secondary: {
                        template: "AuthorImageHeadlineContentMeta",
                        assetMux: {
                            headline: function(e) {
                                return Yt({}, e, {
                                    type: 2
                                })
                            },
                            media: function(e) {
                                return Yt({}, e, {
                                    showInteractivePromo: !1
                                })
                            }
                        }
                    }
                },
                Qt = {
                    primary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "VIDEO" === e.asset.cardType ? "MediaContentMeta" : "Col1AuthorImageHeadlineContentMetaCol2Media"
                        },
                        assetMux: {
                            headline: function(e) {
                                var t;
                                if ("VIDEO" === e.asset.cardType) return Yt({}, e, {
                                    assetTone: "feature",
                                    rule: "bottom",
                                    centered: !1,
                                    balanced: !0
                                });
                                var n = "Opinion" === (null === (t = e.asset.section) || void 0 === t ? void 0 : t.displayName);
                                return Yt({}, e, {
                                    assetTone: "feature",
                                    rule: n ? null : "bottom",
                                    centered: !1,
                                    balanced: !0,
                                    showExclusiveLabel: !0,
                                    type: 4,
                                    opinion: n
                                })
                            },
                            content: function(e) {
                                return Yt({}, e, {
                                    centered: "VIDEO" === e.asset.cardType
                                })
                            },
                            meta: function(e) {
                                return Yt({}, e, {
                                    centered: "VIDEO" === e.asset.cardType
                                })
                            },
                            media: function(e) {
                                return "VIDEO" === e.media.cardType ? Yt({}, e, {
                                    preferredCrop: "threeByTwoMediumAt2X"
                                }) : Yt({}, e, {
                                    preferredCrop: "threeByTwoMediumAt2X",
                                    meta: "credit",
                                    inlineVideo: !0,
                                    showVideoMeta: !1
                                })
                            },
                            column: function(e) {
                                return "INTERACTIVE" === e.asset.cardType || "VIDEO" === e.asset.cardType ? e : Yt({}, e, {
                                    cols: [{
                                        columns: 7,
                                        noVerticalBorder: !0,
                                        noPaddingRight: !1
                                    }, {
                                        columns: 13,
                                        noVerticalBorder: !0,
                                        noPaddingLeft: !0
                                    }]
                                })
                            }
                        }
                    },
                    secondary: {
                        template: function(e) {
                            return "TEXT" === e.asset.cardType ? "AuthorImageHeadlineContentMeta" : "Col1AuthorImageHeadlineContentMetaCol2Media"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Yt({}, e, {
                                    type: 2
                                })
                            },
                            media: function(e) {
                                return Yt({}, e, {
                                    showInteractivePromo: !1
                                })
                            }
                        }
                    },
                    tertiary: {
                        template: "AuthorImageHeadlineContentMeta",
                        assetMux: {
                            headline: function(e) {
                                return Yt({}, e, {
                                    type: 2
                                })
                            },
                            media: function(e) {
                                return Yt({}, e, {
                                    showInteractivePromo: !1
                                })
                            }
                        }
                    }
                },
                $t = {
                    primary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "MobileMedia" : "TEXT" === e.asset.cardType ? "AuthorImageHeadlineContentMeta" : "AUDIO" === e.asset.cardType ? "MediaThumbHeadlineContentMeta" : "MobileMediaAuthorImageHeadlineContentMeta"
                        },
                        assetMux: {
                            headline: function(e) {
                                var t, n = "Opinion" === (null === (t = e.asset.section) || void 0 === t ? void 0 : t.displayName);
                                return Yt({}, e, {
                                    type: 3,
                                    assetTone: "feature",
                                    rule: n ? null : "bottom",
                                    showExclusiveLabel: !0,
                                    opinion: n
                                })
                            },
                            media: function(e) {
                                return Yt({}, e, {
                                    inlineVideo: !0,
                                    meta: "credit"
                                })
                            }
                        }
                    },
                    secondary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "MobileMedia" : "TEXT" === e.asset.cardType ? "AuthorImageHeadlineContentMeta" : "AUDIO" === e.asset.cardType ? "MediaThumbHeadlineContentMeta" : "MobileMediaAuthorImageHeadlineContentMeta"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Yt({}, e, {
                                    type: 3,
                                    assetTone: "feature",
                                    rule: "bottom"
                                })
                            },
                            media: function(e) {
                                return Yt({}, e, {
                                    meta: "credit",
                                    showInteractivePromo: !1
                                })
                            }
                        }
                    },
                    tertiary: {
                        template: function(e) {
                            return "INTERACTIVE" === e.asset.cardType ? "MobileMedia" : "AuthorImageHeadlineContentMeta"
                        },
                        assetMux: {
                            headline: function(e) {
                                return Yt({}, e, {
                                    type: 4
                                })
                            },
                            media: function(e) {
                                return Yt({}, e, {
                                    showInteractivePromo: !1
                                })
                            }
                        }
                    }
                },
                en = {
                    desktop: [Jt.primary, Jt.secondary, Jt.secondary],
                    largeTablet: [Zt.primary, Zt.secondary, Zt.secondary],
                    tablet: [Qt.primary, Qt.secondary, Qt.tertiary],
                    smartphone: [$t.primary, $t.secondary, $t.tertiary]
                },
                tn = function(e) {
                    var t = e.block,
                        n = e.updatedDeviceType,
                        o = Object(Ne.a)(t);
                    return o.length < 3 ? null : s()(Ee.a, {
                        block: t,
                        lazy: !0
                    }, void 0, s()(_t.a, {
                        title: t.title
                    }), s()("div", {
                        className: Wt
                    }, void 0, s()("div", {
                        className: Ut
                    }, void 0, o.slice(0, 1).map((function(e, t) {
                        return s()("div", {
                            className: Xt
                        }, e.id, w.a.createElement(Se.a, Z()({
                            asset: e,
                            assetIndex: t
                        }, en[n][t])))
                    }))), s()("div", {
                        className: qt
                    }, void 0, o.slice(1).map((function(e, t) {
                        return s()("div", {
                            className: Gt
                        }, e.id, w.a.createElement(Se.a, Z()({
                            asset: e,
                            assetIndex: t + 1
                        }, en[n][t + 1])))
                    })))))
                };
            tn.displayName = "EditorsPicks", tn.defaultProps = {
                block: void 0
            };
            var nn = fe.a.Consumer(tn),
                on = n("jVh7"),
                rn = n("hXAx"),
                an = n("s5Bo"),
                sn = ne.a.breakpoint,
                ln = ne.a.color,
                cn = Object(ee.css)(sn.mediumLarge, "{margin-top:-10px;border-top:4px double ", ln.black, ";padding-top:10px;}"),
                dn = Object(ee.css)("border-bottom:1px solid ", ln.gray60, ";position:relative;"),
                un = Object(ee.css)(sn.medium, "{display:flex;.", dn, "{width:50%;}.", dn, ":first-child{padding:0 15px 14px 0;}.", dn, ":last-child{padding:0 0 14px 14px;}.", dn, ":first-child::after{content:'';position:absolute;background:", ln.gray60, ";top:0;right:0;bottom:14px;width:1px;}}", sn.mediumLarge, "{display:block;.", dn, "{width:100%;}.", dn, ":first-child{padding:0 0 14px;}.", dn, ":last-child{padding:14px 0;}.", dn, ":first-child::after{display:none;}}"),
                pn = Object(ee.css)(sn.mediumLarge, "{.", dn, ":last-child{padding-top:0;}}"),
                mn = Object(ee.css)(".", dn, ":nth-child(n+4){display:none;", sn.medium, "{display:block;}}", sn.medium, "{display:flex;flex-wrap:wrap;.", dn, ":nth-child(n+4){display:block;}.", dn, "{width:calc((100% - 58px) / 3);padding:14px;}.", dn, ":nth-child(3n+1){padding:14px 14px 14px 0;}.", dn, ":nth-child(3n+2){padding:14px 15px;}.", dn, ":nth-child(3n+3){padding:14px 0 14px 14px;}.", dn, ":nth-child(n+7){border-bottom:none;padding-bottom:0;}.", dn, ":nth-child(3n+2)::before{content:'';position:absolute;background:", ln.gray60, ";top:14px;left:0;bottom:14px;width:1px;}.", dn, ":nth-child(3n+2)::after{content:'';position:absolute;background:", ln.gray60, ";top:14px;right:0;bottom:14px;width:1px;}.", dn, ":nth-child(8)::before,.", dn, ":nth-child(8)::after{bottom:0;}}", sn.mediumLarge, "{display:block;.", dn, "{width:100%;}.", dn, ",.", dn, ":nth-child(3n+1),.", dn, ":nth-child(3n+2),.", dn, ":nth-child(3n+3){padding:14px 0;}.", dn, ":nth-child(n+7){border-bottom:1px solid ", ln.gray60, ";padding-bottom:14px;}.", dn, ":nth-child(3n+2)::before,.", dn, ":nth-child(3n+2)::after{display:none;}.", dn, ":last-child{padding-bottom:0;border-bottom:none;}}", sn.large, "{transform:translateY(-1px);column-count:2;column-gap:29px;position:relative;&::before{content:'';display:block;position:absolute;top:14px;bottom:14px;left:50%;width:1px;background:", ln.gray60, ";}.", dn, "{break-inside:avoid;column-break-inside:avoid;page-break-inside:avoid;display:inline-flex;}.", dn, ",.", dn, ":nth-child(3n+1),.", dn, ":nth-child(3n+2),.", dn, ":nth-child(3n+3){padding:14px 0;}.", dn, ",.", dn, ":nth-child(n+7){border-bottom:none;border-top:1px solid ", ln.gray60, ";}}"),
                fn = Object(ee.css)("padding:20px 25px;", sn.medium, "{padding:0;}");

            function hn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function gn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? hn(n, !0).forEach((function(t) {
                        be()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hn(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var vn = function(e) {
                    return "INTERACTIVE" === e.cardType
                },
                bn = {
                    whole: {
                        template: function(e) {
                            var t = e.asset;
                            return vn(t) ? "Media" : "Col1AuthorImageHeadlineContentMetaCol2Media"
                        },
                        assetMux: {
                            headline: function(e) {
                                return gn({}, e, {
                                    type: 2,
                                    showExclusiveLabel: !0
                                })
                            },
                            media: function(e) {
                                return gn({}, e, {
                                    preferredCrop: "square640"
                                })
                            }
                        }
                    },
                    skim: {
                        template: "AuthorImageHeadlineContentMeta",
                        assetMux: {
                            headline: function(e) {
                                return gn({}, e, {
                                    type: 2
                                })
                            },
                            media: function(e) {
                                return gn({}, e, {
                                    showInteractivePromo: !1
                                })
                            }
                        }
                    }
                },
                yn = {
                    whole: {
                        template: function(e) {
                            var t = e.asset;
                            return vn(t) ? "Media" : "MediaAuthorImageHeadlineContentMeta"
                        },
                        assetMux: {
                            headline: function(e) {
                                return gn({}, e, {
                                    type: 2,
                                    showExclusiveLabel: !0
                                })
                            },
                            media: function(e) {
                                return gn({}, e, {
                                    meta: null,
                                    preferredCrop: "threeByTwoSmallAt2X"
                                })
                            }
                        }
                    }
                },
                On = {
                    whole: {
                        template: function(e) {
                            var t = e.asset;
                            return vn(t) ? "Media" : "MediaAuthorImageHeadlineContentMeta"
                        },
                        assetMux: {
                            headline: function(e) {
                                return gn({}, e, {
                                    type: 2,
                                    showExclusiveLabel: !0
                                })
                            },
                            media: function(e) {
                                return gn({}, e, {
                                    meta: "credit",
                                    preferredCrop: "threeByTwoSmallAt2X"
                                })
                            }
                        }
                    },
                    skim: {
                        template: "AuthorImageHeadlineContentMeta",
                        assetMux: {
                            headline: function(e) {
                                return gn({}, e, {
                                    type: 2
                                })
                            },
                            media: function(e) {
                                return gn({}, e, {
                                    showInteractivePromo: !1
                                })
                            }
                        }
                    }
                },
                wn = {
                    whole: {
                        template: function(e) {
                            var t = e.asset;
                            return "Audio" === (null == t ? void 0 : t.__typename) ? "MediaThumbHeadlineContentMeta" : vn(t) ? "Media" : "MobileMediaAuthorImageHeadlineContentMeta"
                        },
                        assetMux: {
                            headline: function(e) {
                                return gn({}, e, {
                                    type: 4,
                                    showExclusiveLabel: !0
                                })
                            }
                        }
                    }
                },
                xn = function(e) {
                    var t = e.block,
                        n = e.deviceType,
                        o = e.updatedDeviceType,
                        r = e.lazy,
                        i = e.noTopBorder,
                        a = e.hasSpotlight,
                        l = e.fastlyAbraConfig,
                        c = Object(Ne.a)(t),
                        d = "smartphone" === n ? 5 : 11;
                    if (Object(he.b)(l) && (d = 2), c.length < d) return null;
                    var u = "MAXIMUM" === c[0].promotionalMediaEmphasis,
                        p = "MAXIMUM" === c[1].promotionalMediaEmphasis,
                        m = "desktop" !== n || p,
                        f = m ? 2 : 1,
                        h = {
                            desktop: [p && !u ? bn.skim : bn.whole, p ? bn.whole : bn.skim],
                            largeTablet: [p && !u ? On.skim : yn.whole, p ? yn.whole : On.skim],
                            tablet: [On.whole, On.whole],
                            smartphone: [wn.whole, wn.whole]
                        };
                    return s()("div", {
                        className: Object(ee.cx)(be()({}, cn, a))
                    }, void 0, s()(Ee.a, {
                        block: t,
                        lazy: r
                    }, void 0, s()(_t.a, {
                        title: t.title,
                        noTopBorder: i,
                        link: "https://www.nytimes.com/section/opinion",
                        opinionStyle: !0
                    }), s()("div", {
                        className: Object(ee.cx)(un, be()({}, pn, !m))
                    }, void 0, c.slice(0, f).map((function(e, t) {
                        return s()("div", {
                            className: dn
                        }, e.id, w.a.createElement(Se.a, Z()({
                            asset: e,
                            assetIndex: t
                        }, h[o][t])))
                    }))), s()("div", {
                        className: mn
                    }, void 0, c.slice(f).map((function(e, t) {
                        var n, o, r, i, a = 0 === t && 1 === f,
                            l = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : null === (o = n.content) || void 0 === o ? void 0 : null === (r = o[0]) || void 0 === r ? void 0 : null === (i = r.byline) || void 0 === i ? void 0 : i.hideHeadshots;
                        return s()("div", {
                            className: dn
                        }, e.id, s()(Se.a, {
                            asset: e,
                            assetIndex: t + f,
                            useChildren: !0
                        }, void 0, s()("div", {
                            className: fn
                        }, void 0, s()(Te.a, {
                            link: e
                        }, void 0, s()(on.a, {
                            asset: e,
                            hideHeadshot: l
                        }), s()(Ce.a, {
                            asset: e,
                            showSentence: !1,
                            hideHeadshot: l
                        }), a && s()(rn.a, {
                            asset: e
                        })), a && s()(an.a, {
                            asset: e
                        }))))
                    })))))
                };
            xn.displayName = "Opinion", xn.defaultProps = {
                lazy: !0,
                hasSpotlight: !1,
                noTopBorder: !1,
                fastlyAbraConfig: {}
            };
            var kn = Object(D.a)(fe.a.Consumer(xn)),
                jn = n("mczz"),
                Mn = n("PJYZ"),
                Pn = n.n(Mn),
                Sn = (n("f3/d"), n("pIFo"), n("2mql")),
                Cn = n.n(Sn),
                En = n("iiJN");

            function Tn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function In(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tn(n, !0).forEach((function(t) {
                        be()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nn = function(e, t) {
                    var n, o, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "TopStories",
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        l = "Spotlight" === i,
                        c = "TopStories" === i,
                        d = "number" == typeof a && 0 === a,
                        u = l && d,
                        p = "URGENT" === e.cardType,
                        m = !!e.banner,
                        f = "VIDEO" === e.cardType,
                        h = "INTERACTIVE" === e.cardType,
                        g = e.__typename && "Interactive" === e.__typename && "INTERACTIVE" !== e.cardType,
                        v = "EmbeddedInteractive" === (null == e ? void 0 : null === (n = e.promotionalMedia) || void 0 === n ? void 0 : n.__typename),
                        b = "FEATURE" === e.tone && !l && !p && !m,
                        y = {
                            NONE: "NONE",
                            MEDIUM: "MEDIUM",
                            MAXIMUM: "MAXIMUM",
                            default: "default"
                        }[e.promotionalMediaEmphasis || "default"],
                        O = "default" === y,
                        w = "NONE" === y,
                        x = "MEDIUM" === y,
                        k = "MAXIMUM" === y,
                        j = !(m || f || h || b),
                        M = x && j,
                        P = k && j,
                        S = null == e ? void 0 : null === (o = e.promotionalMedia) || void 0 === o ? void 0 : null === (r = o.caption) || void 0 === r ? void 0 : r.text,
                        C = x && f || h || g || v ? {
                            meta: null
                        } : {};
                    switch (t) {
                        case "smartphone":
                            return {
                                template: function() {
                                    return m ? "MobileBannerMediaHeadlineContentMeta" : h ? "Media" : "MobileMediaAuthorImageHeadlineContentMeta"
                                },
                                assetMux: {
                                    content: function(e) {
                                        return In({}, e, {
                                            isTopStories: c,
                                            showBullets: !0
                                        })
                                    },
                                    headline: function(e) {
                                        var t = e.asset.section && "Opinion" === e.asset.section.displayName,
                                            n = In({}, e, {
                                                type: u ? 10 : 7,
                                                urgent: p && !m,
                                                showExclusiveLabel: !0,
                                                opinion: t
                                            });
                                        return b ? In({}, n, {
                                            assetTone: "feature",
                                            rule: t ? null : "bottom"
                                        }) : n
                                    },
                                    media: function(e) {
                                        return b ? In({}, e, {
                                            meta: "credit"
                                        }) : e
                                    },
                                    banner: function(e) {
                                        return m ? In({}, e, {
                                            urgent: p
                                        }) : e
                                    }
                                }
                            };
                        default:
                            return {
                                template: function() {
                                    var e = "Col1AuthorImageHeadlineCol2ContentMeta",
                                        t = "Col1AuthorImageHeadlineContentMetaCol2Media",
                                        n = "Col1AuthorImageHeadlineContentMetaCol2Media";
                                    return f ? m && c ? (t = "Row1BannerRow2Col1AuthorImageHeadlineContentMetaCol2Media", n = "BannerMediaMeta") : (t = "Col1AuthorImageHeadlineContentMetaCol2Media", n = "MediaMeta") : h ? m && c ? (t = "BannerMedia", n = "BannerMedia") : (t = "Media", n = "Media") : m && c && (e = "Row1BannerRow2Col1AuthorImageHeadlineCol2ContentMeta", t = "Row1BannerRow2Col1AuthorImageHeadlineContentMetaCol2Media", n = "Row1BannerRow2Col1AuthorImageHeadlineContentMetaCol2Media"), {
                                        NONE: e,
                                        MEDIUM: t,
                                        MAXIMUM: n,
                                        default: "Col1AuthorImageHeadlineContentMetaCol2Media"
                                    }[y]
                                },
                                assetMux: {
                                    headline: function(e) {
                                        var t = e.asset.section && "Opinion" === e.asset.section.displayName,
                                            n = In({}, e, {
                                                balanced: !0,
                                                urgent: p && !m,
                                                showExclusiveLabel: !0,
                                                opinion: t
                                            });
                                        if (l && !u) return In({}, n, {
                                            type: 2
                                        });
                                        if (b) {
                                            var o = "bottom";
                                            return (w || t) && (o = null), In({}, n, {
                                                type: 4,
                                                assetTone: "feature",
                                                rule: o
                                            })
                                        }
                                        return In({}, n, {
                                            type: 4
                                        })
                                    },
                                    media: function(e) {
                                        var t = In({}, e, {}, C, {
                                            inlineVideo: k,
                                            preferredCrop: k ? "threeByTwoMediumAt2X" : "threeByTwoSmallAt2X"
                                        });
                                        return O ? In({}, t, {
                                            metaPosition: "side",
                                            imageWidth: 5,
                                            metaWidth: 1,
                                            meta: "caption"
                                        }) : P || (m || u && !f) && (k || x) ? In({}, t, {
                                            metaPosition: "bottom",
                                            meta: "caption"
                                        }) : !x || f || h || b ? b || f && k ? In({}, t, {
                                            meta: "caption"
                                        }) : t : In({}, t, S ? {
                                            metaPosition: "side",
                                            imageWidth: 8,
                                            metaWidth: 5,
                                            meta: "caption"
                                        } : {
                                            metaPosition: "bottom",
                                            meta: "caption"
                                        })
                                    },
                                    content: function(e) {
                                        return In({}, e, {
                                            showBullets: !0
                                        })
                                    },
                                    column: function(e) {
                                        return (w || x) && b ? In({}, e, {
                                            cols: [{
                                                columns: 1,
                                                noPaddingRight: !1
                                            }, {
                                                columns: 1,
                                                noVerticalBorder: !0
                                            }]
                                        }) : f && x ? In({}, e, {
                                            cols: [{
                                                columns: 12,
                                                noVerticalBorder: !0
                                            }, {
                                                columns: 8,
                                                noVerticalBorder: !0
                                            }]
                                        }) : O ? In({}, e, {
                                            cols: [{
                                                columns: 1
                                            }, {
                                                columns: 3,
                                                noVerticalBorder: !0,
                                                noPaddingLeft: !0
                                            }]
                                        }) : (m || u) && x ? In({}, e, {
                                            cols: [{
                                                columns: 11,
                                                noPaddingRight: !0
                                            }, {
                                                columns: 7,
                                                noVerticalBorder: !0
                                            }]
                                        }) : M && !S ? In({}, e, {
                                            cols: [{
                                                columns: 12,
                                                noPaddingRight: !0
                                            }, {
                                                columns: 8,
                                                noVerticalBorder: !0
                                            }]
                                        }) : M || P || (m || u) && k || b ? In({}, e, {
                                            cols: [{
                                                columns: 7,
                                                noPaddingRight: !0
                                            }, {
                                                columns: 13,
                                                noVerticalBorder: !0
                                            }]
                                        }) : e
                                    },
                                    banner: function(e) {
                                        return m ? In({}, e, {
                                            type: u ? 10 : 8,
                                            offsetTop: c && d && !s,
                                            urgent: p,
                                            centered: !0,
                                            showMediaLabel: !1,
                                            showExclusiveLabel: !1,
                                            balanced: !0,
                                            wrapLink: !0,
                                            isBanner: !0
                                        }) : e
                                    }
                                }
                            }
                    }
                },
                Ln = {
                    __typename: "Article",
                    promotionalSummary: "The New Zealand gun organization will not be among those pushing against the new ban.",
                    promotionalBullets: [],
                    card: {
                        __typename: "StandardCard"
                    },
                    promotionalHeadline: "Same Name, Different Missions: The N.R.A. in the U.S. and New Zealand",
                    oneLine: "Same Name, Different Missions: The N.R.A. in the U.S. and New Zealand",
                    banner: "",
                    url: "https://www.nytimes.com/2019/03/21/world/australia/nra-new-zealand.html",
                    id: "QXJ0aWNsZTpueXQ6Ly9hcnRpY2xlL2EzOTE2MTNiLTIzY2EtNWExZi1hYjE2LTA2MzI0OTA3NTBmNA==",
                    cardType: "STANDARD",
                    promotionalMediaEmphasis: "MEDIUM",
                    promotionalMedia: {
                        __typename: "Image",
                        caption: {
                            text: "A truck mounted with an advertisement for New Zealand’s largest gun seller.",
                            __typename: "TextOnlyDocumentBlock"
                        },
                        spanImageCrops: [{
                            renditions: [{
                                name: "articleLarge",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/merlin_152382243_4f787808-aae9-4106-a99a-422bad7ddd6d-articleLarge.jpg",
                                width: 600,
                                height: 400,
                                __typename: "ImageRendition"
                            }, {
                                name: "master1050",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/merlin_152382243_4f787808-aae9-4106-a99a-422bad7ddd6d-master1050.jpg",
                                width: 1050,
                                height: 700,
                                __typename: "ImageRendition"
                            }],
                            __typename: "ImageCrop"
                        }, {
                            renditions: [{
                                name: "thumbLarge",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/NZ-NRA-thumbLarge.jpg",
                                width: 150,
                                height: 150,
                                __typename: "ImageRendition"
                            }],
                            __typename: "ImageCrop"
                        }, {
                            renditions: [{
                                name: "square640",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/NZ-NRA-square640.jpg",
                                width: 640,
                                height: 640,
                                __typename: "ImageRendition"
                            }],
                            __typename: "ImageCrop"
                        }, {
                            renditions: [{
                                name: "largeHorizontalJumbo",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/merlin_152382243_4f787808-aae9-4106-a99a-422bad7ddd6d-largeHorizontalJumbo.jpg",
                                width: 1024,
                                height: 682,
                                __typename: "ImageRendition"
                            }],
                            __typename: "ImageCrop"
                        }, {
                            renditions: [{
                                name: "videoLarge",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/merlin_152382243_4f787808-aae9-4106-a99a-422bad7ddd6d-videoLarge.jpg",
                                width: 768,
                                height: 507,
                                __typename: "ImageRendition"
                            }, {
                                name: "threeByTwoLargeAt2X",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/merlin_152382243_4f787808-aae9-4106-a99a-422bad7ddd6d-threeByTwoLargeAt2X.jpg",
                                width: 4e3,
                                height: 2666,
                                __typename: "ImageRendition"
                            }, {
                                name: "threeByTwoMediumAt2X",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/merlin_152382243_4f787808-aae9-4106-a99a-422bad7ddd6d-threeByTwoMediumAt2X.jpg",
                                width: 1500,
                                height: 1e3,
                                __typename: "ImageRendition"
                            }, {
                                name: "threeByTwoSmallAt2X",
                                url: "https://static01.nyt.com/images/2019/03/21/world/NZ-NRA/merlin_152382243_4f787808-aae9-4106-a99a-422bad7ddd6d-threeByTwoSmallAt2X.jpg",
                                width: 600,
                                height: 400,
                                __typename: "ImageRendition"
                            }],
                            __typename: "ImageCrop"
                        }],
                        credit: "Adam Dean for The New York Times",
                        subPromotionalMedia: null
                    },
                    column: null,
                    promotions: [{
                        name: "homepage",
                        promotionalProperties: {
                            headline: "Same Name, Different Missions: The N.R.A. in the U.S. and New Zealand",
                            __typename: "PromotionalProperties"
                        },
                        __typename: "PromotionalVariant"
                    }],
                    sourceId: "100000006421870",
                    tone: "NEWS",
                    timesTags: [{
                        vernacular: "NRA",
                        __typename: "Organization"
                    }, {
                        vernacular: "New Zealand",
                        __typename: "Location"
                    }, {
                        vernacular: "Gun Control",
                        __typename: "Subject"
                    }, {
                        vernacular: "Christchurch, New Zealand Attack",
                        __typename: "Subject"
                    }, {
                        vernacular: "Guns",
                        __typename: "Subject"
                    }, {
                        vernacular: "Jacinda Ardern",
                        __typename: "Person"
                    }, {
                        vernacular: "Politics",
                        __typename: "Subject"
                    }],
                    newsStatus: "DEFAULT",
                    lastMajorModification: "2019-03-21T19:20:11.000Z",
                    lastModified: "2019-03-21T20:17:24.132Z",
                    section: {
                        id: "U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzcwZTg2NWI2LWNjNzAtNTE4MS04NGM5LTgzNjhiM2E1YzM0Yg==",
                        displayName: "World",
                        __typename: "Section"
                    },
                    subsection: {
                        id: "U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzFkN2I0ODlkLWUwMGQtNTRiMi1hNmExLTM0NWE1ZjY4NGNlZg==",
                        displayName: "Australia",
                        __typename: "Section"
                    },
                    commentProperties: {
                        approvedCommentsCount: 0,
                        __typename: "CreativeWorkCommentProperties"
                    },
                    uri: "nyt://article/a391613b-23ca-5a1f-ab16-0632490750f4"
                },
                Dn = "A test bannerhead for this story",
                An = (n("SMB2"), n("B6UM")),
                Rn = n.n(An),
                Hn = Object(ee.css)("box-shadow:inset 0px 1px 0px 0px ", ne.a.color.white, ";background:linear-gradient( to bottom,", ne.a.color.gray100, " 5%,", ne.a.color.gray70, " 100% );filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='", ne.a.color.gray100, "',endColorstr='", ne.a.color.gray70, "',GradientType=0);background-color:", ne.a.color.gray100, ";-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;border:1px solid ", ne.a.color.gray55, ";display:inline-block;cursor:pointer;color:", ne.a.color.gray30, ";font-family:Arial;font-size:", ne.a.font.size(11), ";font-weight:bold;padding:6px;text-decoration:none;text-shadow:0px 1px 0px ", ne.a.color.white, ";min-width:114px;outline-color:#9ade2c;", ne.a.breakpoint.large, "{min-width:150px;padding:6px 24px;}&:hover{background:linear-gradient(to bottom,", ne.a.color.gray70, " 5%,", ne.a.color.gray100, " 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='", ne.a.color.gray70, "',endColorstr='", ne.a.color.gray100, "',GradientType=0);background-color:", ne.a.color.gray70, ";}&:active{position:relative;top:1px;}"),
                Bn = Object(ee.css)(),
                _n = Object(ee.css)(Hn, ";&::before{content:'';background-image:url(", Rn.a, ");display:inline-block;width:15px;height:15px;margin-right:5px;background-size:15px 15px;vertical-align:middle;margin-top:-3px;}"),
                zn = Object(ee.css)("display:block;padding:5px 5px 0;text-align:center;", ne.a.breakpoint.medium, "{margin:0 auto 20px;width:70%;padding:5px 5px 10px;border-bottom:1px solid ", ne.a.color.gray60, ";}", ne.a.breakpoint.large, "{display:none;position:absolute;top:0;right:-177px;padding:10px;z-index:11;box-shadow:3px 3px 5px -1px rgba(0,0,0,0.57);border:1px solid ", ne.a.color.gray60, ";border-radius:5px;width:150px;margin-bottom:0;text-align:left;background:", ne.a.color.white, ";}& .", Bn, "{display:none;", ne.a.breakpoint.large, "{display:block;}}& li{font-family:", ne.a.font.franklinBase, ";font-weight:", ne.a.font.weight.bold, ";font-size:", ne.a.font.size(11), ";margin-right:5px;margin-bottom:5px;display:inline-block;&:last-child{margin-right:0;}", ne.a.breakpoint.large, "{margin-right:0;display:block;}}"),
                Vn = Ge()("div", {
                    target: "e286btj0"
                })("position:relative;", (function(e) {
                    return e.hover && "\n    ".concat(ne.a.breakpoint.large, " {\n      background: ").concat(ne.a.color.gray80, ";\n      cursor: pointer;\n    }\n\n    & .").concat(zn, " {\n      display: block;\n    }\n  ")
                }));

            function Fn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Wn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Fn(n, !0).forEach((function(t) {
                        be()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fn(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Un, Xn = ["NONE", "MEDIUM", "MAXIMUM"],
                qn = {
                    headSum: ["headline", "summary"],
                    oneLine: ["oneLine"]
                },
                Gn = [
                    [
                        [{
                            displayFields: qn.headSum
                        }, {
                            displayFields: qn.headSum
                        }],
                        [{
                            displayFields: qn.headSum
                        }, {
                            displayFields: qn.oneLine
                        }]
                    ],
                    [
                        [{
                            displayFields: qn.headSum
                        }, {
                            displayFields: qn.headSum
                        }, {
                            displayFields: qn.headSum
                        }],
                        [{
                            displayFields: qn.headSum
                        }, {
                            displayFields: qn.headSum
                        }, {
                            displayFields: qn.oneLine
                        }],
                        [{
                            displayFields: qn.headSum
                        }, {
                            displayFields: qn.oneLine
                        }, {
                            displayFields: qn.headSum
                        }],
                        [{
                            displayFields: qn.headSum
                        }, {
                            displayFields: qn.oneLine
                        }, {
                            displayFields: qn.oneLine
                        }]
                    ]
                ],
                Kn = function(e) {
                    var t, n = null == Gn ? void 0 : Gn[(null == e ? void 0 : null === (t = e.assets) || void 0 === t ? void 0 : t.length) - 2];
                    return n ? n.findIndex((function(t) {
                        return t.every((function(t, n) {
                            var o = "oneLine" === t.displayFields[0],
                                r = "oneLine" === e.assetDisplayOptions[n].displayFields[0];
                            return o && r || !o && !r
                        }))
                    })) : null
                },
                Yn = s()("li", {
                    className: Bn
                }, void 0, s()("hr", {})),
                Jn = function(e) {
                    var t = e.displayName || e.name || "Component",
                        n = function(t) {
                            function n() {
                                var e, t, o, r, i, a, s, l, d, u, p, f, g, v, b, y, O, w, x, k, j, M, P, S, C, E, T, I, N, L, D, A, R, H, B, _, z, V, F, W, U, X, q;
                                c()(this, n);
                                for (var G = arguments.length, K = new Array(G), Y = 0; Y < G; Y++) K[Y] = arguments[Y];
                                return (q = m()(this, (e = h()(n)).call.apply(e, [this].concat(K)))).initialProps = {
                                    promotionalMediaEmphasis: Xn.findIndex((function(e) {
                                        var t, n, o, r, i, a, s, l, c;
                                        return (null === (t = Pn()(q)) || void 0 === t ? void 0 : null === (n = t.props) || void 0 === n ? void 0 : null === (o = n.node) || void 0 === o ? void 0 : o.assets) ? (null === (r = Pn()(q)) || void 0 === r ? void 0 : null === (i = r.props) || void 0 === i ? void 0 : null === (a = i.node) || void 0 === a ? void 0 : a.promotionalMediaEmphasis) === e : (null === (s = Pn()(q)) || void 0 === s ? void 0 : null === (l = s.props) || void 0 === l ? void 0 : null === (c = l.asset) || void 0 === c ? void 0 : c.promotionalMediaEmphasis) === e
                                    })),
                                    assets: null === (t = Pn()(q)) || void 0 === t ? void 0 : null === (o = t.props) || void 0 === o ? void 0 : null === (r = o.node) || void 0 === r ? void 0 : r.assets,
                                    displayOption: (null === (i = Pn()(q)) || void 0 === i ? void 0 : null === (a = i.props) || void 0 === a ? void 0 : null === (s = a.node) || void 0 === s ? void 0 : s.assets) ? Kn(null === (l = Pn()(q)) || void 0 === l ? void 0 : null === (d = l.props) || void 0 === d ? void 0 : d.node) : 0,
                                    assetDisplayOptions: null === (u = Pn()(q)) || void 0 === u ? void 0 : null === (p = u.props) || void 0 === p ? void 0 : null === (f = p.node) || void 0 === f ? void 0 : f.assetDisplayOptions,
                                    imgSrc: (null === (g = Pn()(q)) || void 0 === g ? void 0 : null === (v = g.props) || void 0 === v ? void 0 : null === (b = v.node) || void 0 === b ? void 0 : b.assets) ? null === (y = Pn()(q)) || void 0 === y ? void 0 : null === (O = y.props) || void 0 === O ? void 0 : null === (w = O.node) || void 0 === w ? void 0 : w.assets.findIndex((function(e) {
                                        var t, n, o, r, i, a, s;
                                        return !(null === (t = Pn()(q)) || void 0 === t ? void 0 : null === (n = t.props) || void 0 === n ? void 0 : null === (o = n.node) || void 0 === o ? void 0 : o.promotionalMedia) || !e || e.id === (null === (r = Pn()(q)) || void 0 === r ? void 0 : null === (i = r.props) || void 0 === i ? void 0 : null === (a = i.node) || void 0 === a ? void 0 : null === (s = a.promotionalMedia) || void 0 === s ? void 0 : s.id)
                                    })) : null,
                                    promotionalMedia: null === (x = Pn()(q)) || void 0 === x ? void 0 : null === (k = x.props) || void 0 === k ? void 0 : null === (j = k.node) || void 0 === j ? void 0 : j.promotionalMedia,
                                    tone: (null === (M = Pn()(q)) || void 0 === M ? void 0 : null === (P = M.props) || void 0 === P ? void 0 : null === (S = P.node) || void 0 === S ? void 0 : S.assets) ? (null === (C = Pn()(q)) || void 0 === C ? void 0 : null === (E = C.props) || void 0 === E ? void 0 : null === (T = E.node) || void 0 === T ? void 0 : null === (I = T.assets) || void 0 === I ? void 0 : null === (N = I[0]) || void 0 === N ? void 0 : N.tone) || "NEWS" : (null === (L = Pn()(q)) || void 0 === L ? void 0 : null === (D = L.props) || void 0 === D ? void 0 : null === (A = D.asset) || void 0 === A ? void 0 : A.tone) || "NEWS",
                                    banner: (null === (R = Pn()(q)) || void 0 === R ? void 0 : null === (H = R.props) || void 0 === H ? void 0 : null === (B = H.node) || void 0 === B ? void 0 : B.assets) ? (null === (_ = Pn()(q)) || void 0 === _ ? void 0 : null === (z = _.props) || void 0 === z ? void 0 : null === (V = z.node) || void 0 === V ? void 0 : null === (F = V.assets[0]) || void 0 === F ? void 0 : F.banner) || !1 : (null === (W = Pn()(q)) || void 0 === W ? void 0 : null === (U = W.props) || void 0 === U ? void 0 : null === (X = U.asset) || void 0 === X ? void 0 : X.banner) || !1
                                }, q.timeout = {}, q.state = Wn({
                                    hover: !1
                                }, q.initialProps), q.onMouseOver = function() {
                                    clearTimeout(q.timeout), q.setState({
                                        hover: !0
                                    })
                                }, q.onMouseOut = function() {
                                    window && (q.timeout = window.setTimeout((function() {
                                        q.setState({
                                            hover: !1
                                        })
                                    }), 350))
                                }, q.changeLength = function() {
                                    var e, t = q.state.assets,
                                        n = t.length,
                                        o = q.initialProps.assets[2] ? q.initialProps.assets[2] : Ln;
                                    2 === n ? (e = t.slice()).push(o) : e = t.slice(0, 2), q.setState({
                                        assets: e,
                                        displayOption: 0,
                                        assetDisplayOptions: Gn[e.length - 2][0]
                                    })
                                }, q.changeEmphasis = function() {
                                    q.setState({
                                        promotionalMediaEmphasis: q.state.promotionalMediaEmphasis === Xn.length - 1 ? 0 : q.state.promotionalMediaEmphasis + 1
                                    })
                                }, q.changeDisplayOption = function() {
                                    var e = q.state.assets.length - 2,
                                        t = q.state.displayOption === Gn[e].length - 1 ? 0 : q.state.displayOption + 1;
                                    q.setState({
                                        displayOption: t,
                                        assetDisplayOptions: Gn[e][t]
                                    })
                                }, q.changeImgSrc = function() {
                                    var e = 1 === q.state.imgSrc ? 0 : 1;
                                    q.setState({
                                        imgSrc: e,
                                        promotionalMedia: q.state.assets[e]
                                    })
                                }, q.changeTone = function() {
                                    q.setState({
                                        tone: "FEATURE" === q.state.tone ? "NEWS" : "FEATURE"
                                    })
                                }, q.changeBanner = function() {
                                    q.setState({
                                        banner: !q.state.banner
                                    })
                                }, q.reset = function() {
                                    q.setState(q.initialProps)
                                }, q
                            }
                            return v()(n, t), u()(n, [{
                                key: "render",
                                value: function() {
                                    var t, n, o, r, i, a, l = (null == this ? void 0 : null === (t = this.props) || void 0 === t ? void 0 : null === (n = t.node) || void 0 === n ? void 0 : n.assets) ? "package" : "asset";
                                    return "topstories" !== this.context.blockId && "spotlight" !== this.context.blockId || "asset" === l && void 0 !== this.props.packageIndex ? w.a.createElement(e, this.props) : ("package" === l ? ((o = this.props.node).assets = this.state.assets, o.promotionalMediaEmphasis = Xn[this.state.promotionalMediaEmphasis], o.assetDisplayOptions = this.state.assetDisplayOptions, o.promotionalMedia = this.state.promotionalMedia, o.assets[0].tone = this.state.tone, o.assets[0].banner = this.state.banner ? o.assets[0].banner || Dn : "", i = Wn({}, this.props, {
                                        node: o
                                    })) : ((r = this.props.asset).promotionalMediaEmphasis = Xn[this.state.promotionalMediaEmphasis], r.tone = this.state.tone, r.banner = this.state.banner ? r.banner || Dn : "", i = Wn({}, this.props, {
                                        asset: r
                                    }, Nn(r, this.props.deviceType, "topstories", this.props.assetIndex))), s()(Vn, {
                                        onMouseOver: this.onMouseOver,
                                        onFocus: this.onMouseOver,
                                        onBlur: this.onMouseOut,
                                        onMouseOut: this.onMouseOut,
                                        hover: this.state.hover
                                    }, void 0, s()("ol", {
                                        className: zn
                                    }, void 0, "package" === l && s()("li", {}, void 0, s()("button", {
                                        onClick: this.changeLength,
                                        className: Hn,
                                        type: "button"
                                    }, void 0, this.state.assets.length, " ", " stories")), s()("li", {}, void 0, s()("button", {
                                        onClick: this.changeTone,
                                        className: Hn,
                                        type: "button"
                                    }, void 0, this.state.tone)), s()("li", {}, void 0, s()("button", {
                                        onClick: this.changeEmphasis,
                                        className: Hn,
                                        type: "button"
                                    }, void 0, Xn[this.state.promotionalMediaEmphasis])), "package" === l && s()("li", {}, void 0, s()("button", {
                                        onClick: this.changeDisplayOption,
                                        className: Hn,
                                        type: "button"
                                    }, void 0, (null == (a = Gn[this.state.assets.length - 2][this.state.displayOption]) ? void 0 : a.length) ? Object(En.h)(a.slice(1, 3).map((function(e) {
                                        return {
                                            displayFields: e.displayFields.map((function(e) {
                                                return e.replace("oneLine", "OL").replace("headline", "Hed").replace("summary", "Sum")
                                            }))
                                        }
                                    }))) : "default")), "package" === l && s()("li", {}, void 0, s()("button", {
                                        onClick: this.changeImgSrc,
                                        className: Hn,
                                        type: "button"
                                    }, void 0, "Image source ".concat(this.state.imgSrc))), s()("li", {}, void 0, s()("button", {
                                        onClick: this.changeBanner,
                                        className: Hn,
                                        type: "button"
                                    }, void 0, "Bannerhead ".concat(this.state.banner ? "Yes" : "No"))), Yn, s()("li", {}, void 0, s()("button", {
                                        onClick: this.reset,
                                        className: _n,
                                        type: "button"
                                    }, void 0, "Reset"))), w.a.createElement(e, i)))
                                }
                            }]), n
                        }(O.Component);
                    return n.displayName = "WithPreviewer", n.displayName = "WithPreviewer(".concat(t, ")"), n.contextTypes = {
                        blockId: k.a.string
                    }, Cn()(n, e), n
                },
                Zn = n("naSn"),
                Qn = ne.a.breakpoint,
                $n = ne.a.color,
                eo = Object(ee.css)("margin-bottom:15px;"),
                to = Object(ee.css)(Qn.medium, "{padding-bottom:24px;}"),
                no = Object(ee.css)("padding:20px 25px 20px;", Qn.medium, "{padding:0 0 15px;}"),
                oo = Object(ee.css)(Qn.mediumLarge, "{display:flex;flex-wrap:wrap;height:100%;@supports (display:grid){display:grid;grid-template-columns:4fr 1fr;grid-gap:40px 0;}}", Qn.large, "{display:table;table-layout:fixed;width:100%;height:100%;@supports (display:grid){width:inherit;display:grid;grid-template-columns:2fr 1fr;grid-template-rows:auto 1fr;grid-gap:0;}}"),
                ro = Object(ee.css)(Qn.mediumLarge, "{padding-right:15px;border-right:1px solid ", $n.gray60, ";flex-basis:calc(80% - 16px);margin-bottom:40px;@supports (display:grid){margin-bottom:0;}}", Qn.large, "{width:65%;display:table-cell;vertical-align:top;@supports (display:grid){width:inherit;display:block;grid-row:span 2;}}"),
                io = Object(ee.css)(Qn.mediumLarge, "{padding-left:15px;flex-basis:calc(20% - 15px);}");

            function ao(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function so(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ao(n, !0).forEach((function(t) {
                        be()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ao(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var lo = function(e) {
                var t = e.story,
                    n = e.index,
                    o = e.deviceType,
                    r = e.desktopLayout,
                    i = e.templateProps,
                    a = Object(jn.c)(),
                    s = Zn.a,
                    l = Se.a;
                if ("prd" !== vi.env.ENVIRONMENT && a && void 0 !== Object(jn.d)(a, "reshaper") && (s = Jn(Zn.a), l = Jn(Se.a)), "Package" === t.__typename) {
                    var c = "smartphone" === o ? so({}, t, {
                        promotionalMediaEmphasis: 0 === n ? "MAXIMUM" : "NONE"
                    }) : t;
                    return w.a.createElement(s, Z()({
                        node: c,
                        index: n,
                        desktopLayout: r,
                        isSpotlight: !0
                    }, i))
                }
                return w.a.createElement(l, Z()({
                    asset: t,
                    assetIndex: n,
                    hideHeadline: !0
                }, i))
            };
            lo.displayName = "PackageOrAsset";
            var co = (0, fe.a.Consumer)(Un = function(e) {
                function t() {
                    return c()(this, t), m()(this, h()(t).apply(this, arguments))
                }
                return v()(t, e), u()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.block,
                            n = e.locksmith,
                            o = Object(Ne.a)(t).slice(0, 4);
                        o.some((function(e) {
                            return function(e) {
                                var t, n;
                                return "Package" === e.__typename && "EmbeddedInteractive" === (null == e ? void 0 : null === (t = e.promotionalMedia) || void 0 === t ? void 0 : null === (n = t.promotionalMedia) || void 0 === n ? void 0 : n.__typename)
                            }(e) || function(e) {
                                var t;
                                return "INTERACTIVE" === e.cardType && "EmbeddedInteractive" === (null == e ? void 0 : null === (t = e.promotionalMedia) || void 0 === t ? void 0 : t.__typename)
                            }(e)
                        })) && n && n.lock && n.lock("spotlight")
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this.props.locksmith;
                        e && e.unlock && e.unlock("spotlight")
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, n, o, r, i, a = this.props,
                            l = a.block,
                            c = a.deviceType,
                            d = a.desktopLayout,
                            u = Object(Ne.a)(l).slice(0, 4);
                        if (!u.length) return null;
                        var p = "tablet" === c && d ? "largeTablet" : c,
                            m = "Package" === (null == u ? void 0 : null === (e = u[0]) || void 0 === e ? void 0 : e.__typename) ? null == u ? void 0 : null === (t = u[0]) || void 0 === t ? void 0 : null === (n = t.assets) || void 0 === n ? void 0 : n[0] : u[0],
                            f = "smartphone" !== c && m && !!m.banner,
                            h = "INTERACTIVE" === (null == u ? void 0 : null === (o = u[0]) || void 0 === o ? void 0 : o.cardType) ? u[0] : null,
                            g = h && 2 !== u.length,
                            v = u;
                        g && (v = u.slice(1));
                        var b = "Package" === (null === (r = v) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.__typename);
                        v[1] && b && "desktop" !== p && (v[1] = so({}, v[1], {
                            promotionalMediaEmphasis: "NONE"
                        }));
                        var y = v[1] && !b && "VIDEO" === v[1].cardType ? {
                                assetMux: {
                                    column: function(e) {
                                        return so({}, e, {
                                            cols: [{
                                                columns: 8,
                                                noPaddingRight: !1
                                            }, {
                                                columns: 4,
                                                noVerticalBorder: !0
                                            }]
                                        })
                                    }
                                }
                            } : {},
                            O = function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    packageRendition: "lede"
                                };
                                return v[e] ? so({}, Nn(v[e], t, "Spotlight", e), {}, n) : {}
                            },
                            w = {
                                desktop: {
                                    0: O(0, "tablet"),
                                    1: O(1, "tablet", {
                                        packageRendition: "spotlightDesktop2",
                                        template: function(e) {
                                            return "INTERACTIVE" === e.asset.cardType ? "Media" : "Video" === e.asset.__typename ? "MediaHeadlineMeta" : "AuthorImageHeadlineContentMeta"
                                        }
                                    }),
                                    2: O(2, "tablet"),
                                    3: O(3, "tablet")
                                },
                                largeTablet: {
                                    0: O(0, "tablet", {
                                        packageRendition: "spotlightLargeTablet"
                                    }),
                                    1: O(1, "tablet", so({
                                        packageRendition: "spotlightLargeTablet"
                                    }, y)),
                                    2: O(2, "tablet"),
                                    3: O(3, "tablet")
                                },
                                tablet: {
                                    0: O(0, "tablet"),
                                    1: O(1, "tablet", so({
                                        packageRendition: "spotlightLargeTablet"
                                    }, y)),
                                    2: O(2, "tablet"),
                                    3: O(3, "tablet")
                                },
                                smartphone: {
                                    0: O(0, "smartphone"),
                                    1: O(1, "smartphone"),
                                    2: O(2, "smartphone"),
                                    3: O(3, "smartphone")
                                }
                            };
                        return s()(Ee.a, {
                            block: l,
                            lazy: !1
                        }, void 0, s()("div", {
                            className: to
                        }, void 0, f && s()("div", {
                            className: no
                        }, void 0, s()(Te.a, {
                            link: m
                        }, void 0, s()(Ce.a, {
                            asset: m,
                            type: 6,
                            centered: !0,
                            balanced: !0,
                            urgent: m && "URGENT" === m.cardType,
                            showVideoLabel: !1,
                            hideHeadline: !1,
                            rule: "smartphone" === c ? "bottom" : null,
                            offsetTop: !0,
                            isBanner: !0
                        }))), "desktop" === c ? s()(En.c, {}, void 0, g && s()(Se.a, {
                            asset: h,
                            hideHeadline: !0,
                            template: "Media"
                        }), v.length > 1 && s()("div", {
                            className: oo
                        }, void 0, s()("div", {
                            className: ro
                        }, void 0, s()(lo, {
                            story: v[0],
                            index: 0,
                            deviceType: c,
                            desktopLayout: d,
                            templateProps: w[p][0]
                        })), s()("div", {
                            className: io
                        }, void 0, s()(lo, {
                            story: v[1],
                            index: 1,
                            deviceType: c,
                            desktopLayout: d,
                            templateProps: w[p][1]
                        }))), v.slice(2).map((function(e, t) {
                            return s()(lo, {
                                story: e,
                                index: t + 2,
                                deviceType: c,
                                desktopLayout: d,
                                templateProps: w[p][t + 2]
                            }, e.id)
                        }))) : s()(En.c, {
                            className: eo,
                            narrowBorder: "smartphone" === c
                        }, void 0, g && s()(Se.a, {
                            asset: h,
                            hideHeadline: !0,
                            template: "Media"
                        }), v.map((function(e, t) {
                            return s()(lo, {
                                story: e,
                                index: t,
                                deviceType: c,
                                desktopLayout: d,
                                templateProps: w[p][t]
                            }, e.id)
                        })))))
                    }
                }]), t
            }(O.Component)) || Un;
            co.defaultProps = {
                locksmith: void 0,
                desktopLayout: void 0
            };
            var uo = co,
                po = function(e) {
                    return w.a.createElement(Ve.a, Z()({}, e, {
                        position: "top",
                        page: "hp"
                    }))
                };
            po.displayName = "TopAd", po.displayName = "TopAd";
            var mo = po,
                fo = n("aV/+"),
                ho = ne.a.breakpoint,
                go = ne.a.color,
                vo = Object(ee.css)(ho.medium, "{margin-top:-10px;border-top:1px solid ", go.gray10, ";}"),
                bo = Ge()("div", {
                    target: "e1aa0s8g0"
                })("&::after{content:'';display:block;background-color:", go.gray90, ";height:30px;border-top:1px solid ", go.gray60, ";border-bottom:1px solid ", go.gray60, ";}", (function(e) {
                    return e.hasTopAd && "\n    &::after {\n      display: none;\n    }\n  "
                }), ";&:last-child{margin-bottom:0;&::after{display:none;}}", ho.medium, "{margin-bottom:18px;", (function(e) {
                    return (!e.isFirst || e.hasSpotlight) && "padding-top: 18px;"
                }), ";", (function(e) {
                    return !e.isFirst && "border-top: 1px solid ".concat(go.gray10)
                }), ";&::after{display:none;}}"),
                yo = Object(ee.css)("border-bottom:1px solid ", go.gray60, ";", ho.medium, "{display:none;}"),
                Oo = s()("div", {
                    className: yo
                }, void 0, s()(mo, {})),
                wo = function(e) {
                    var t = e.block,
                        n = e.updatedDeviceType,
                        o = e.lazy,
                        r = e.noTopBorder,
                        i = e.hasTopAd,
                        a = e.hasSpotlight,
                        l = e.fastlyAbraConfig,
                        c = Object(Ne.a)(t);
                    if (!c.length) return null;
                    c = c.slice(0, 6);
                    var d = Object(jn.c)(),
                        u = Zn.a,
                        p = Se.a;
                    "prd" !== vi.env.ENVIRONMENT && d && void 0 !== Object(jn.d)(d, "reshaper") && (u = Jn(Zn.a), p = Jn(Se.a));
                    var m = c.length < 4;
                    return s()("div", {
                        className: Object(ee.cx)(be()({}, vo, a))
                    }, void 0, s()(Ee.a, {
                        block: t,
                        lazy: o,
                        noTopBorder: r
                    }, void 0, c.map((function(e, t) {
                        var o = "Package" === e.__typename,
                            r = 0 === t;
                        return s()(bo, {
                            hasSpotlight: a,
                            isFirst: r,
                            hasTopAd: i && r
                        }, e.id, o ? w.a.createElement(u, Z()({
                            node: e,
                            index: t,
                            packageRendition: "lede",
                            showBorder: "smartphone" === n || !r,
                            isFirstPackage: r,
                            hasSpotlight: a
                        }, Nn(e, n))) : w.a.createElement(p, Z()({
                            key: e.id,
                            asset: e,
                            assetIndex: t,
                            showBorder: "smartphone" === n || !r
                        }, Nn(e, n, "TopStories", t))), i && r && Oo)
                    }))), m && s()(fo.a, {
                        fastlyAbraConfig: l
                    }))
                };
            wo.displayName = "TopStories", wo.contextTypes = {
                fastlyAbraConfig: k.a.shape({})
            }, wo.defaultProps = {
                lazy: !1,
                noTopBorder: !1,
                hasTopAd: !1,
                hasSpotlight: void 0,
                fastlyAbraConfig: {}
            };
            var xo = Object(D.a)(fe.a.Consumer(wo)),
                ko = n("U7t6"),
                jo = n("2CQb"),
                Mo = ne.a.breakpoint,
                Po = ne.a.color,
                So = Object(ee.css)(Mo.medium, "{display:flex;flex-direction:column;order:", jo.a.TopOfPage, ";}"),
                Co = Object(ee.css)("border-bottom:1px solid ", Po.gray60, ";", Mo.medium, "{order:1;margin-top:-2px;border-bottom:0;}"),
                Eo = Object(ee.css)(Mo.medium, "{order:2;}"),
                To = Object(ee.css)("border-bottom:1px solid ", Po.gray60, ";", Mo.medium, "{display:none;}"),
                Io = Object(ee.css)(Mo.medium, "{order:", jo.a.Grid, ";}"),
                No = Object(ee.css)(Mo.mediumLarge, "{display:flex;flex-wrap:wrap;@supports (display:grid){display:grid;grid-template-columns:17fr 4fr;grid-gap:40px 0;}}", Mo.large, "{display:table;table-layout:fixed;width:100%;height:100%;margin-bottom:40px;@supports (display:grid){width:inherit;display:grid;grid-template-columns:2fr 1fr;grid-template-rows:max-content auto auto;grid-gap:0;}}"),
                Lo = Object(ee.css)("border-bottom:1px solid ", Po.gray60, ";", Mo.medium, "{border-bottom:0;}", Mo.mediumLarge, "{padding-right:15px;border-right:1px solid ", Po.gray50, ";flex-basis:calc(80% - 16px);margin-bottom:40px;@supports (display:grid){margin-bottom:0;}}", Mo.large, "{width:65%;display:table-cell;vertical-align:top;@supports (display:grid){width:inherit;display:block;grid-row:span 2;}}"),
                Do = Object(ee.css)(Mo.mediumLarge, "{padding-left:15px;flex-basis:calc(20% - 15px);}"),
                Ao = Object(ee.css)(Mo.mediumLarge, "{width:100%;@supports (display:grid){grid-column:span 2;}}", Mo.large, "{padding-left:15px;@supports (display:grid){width:inherit;grid-column:span 1;}}"),
                Ro = Object(ee.css)("margin-bottom:0;", Mo.medium, "{margin-bottom:40px;}", Mo.mediumLarge, "{width:100%;@supports (display:grid){grid-column:span 2;margin-bottom:0;}}", Mo.large, "{@supports (display:grid){margin-bottom:40px;}}"),
                Ho = Object(ee.css)(Mo.medium, "{order:", jo.a.Grid + 1, ";}"),
                Bo = s()(Fe.a, {}),
                _o = s()("div", {
                    className: To
                }, void 0, s()(mo, {})),
                zo = s()(Fe.a, {}),
                Vo = s()("div", {
                    className: Ro
                }, void 0, s()(Ve.a, {
                    position: "mid1",
                    page: "hp"
                })),
                Fo = s()("div", {
                    className: Ro
                }, void 0, s()(Ve.a, {
                    position: "mid1",
                    page: "hp"
                })),
                Wo = s()(Ve.a, {
                    position: "mid1",
                    page: "hp"
                }),
                Uo = function(e) {
                    var t = e.program,
                        n = e.deviceType,
                        o = e.isLargeTablet,
                        r = "smartphone" === n,
                        i = "desktop" === n || o,
                        a = !(r || i),
                        l = r ? "middle" : "top",
                        c = -1e3;
                    r && (c = [t.alert, t.spotlight, t.topStories, t.briefing, t.opinion].findIndex((function(e) {
                        return !Object(ko.a)(e)
                    })));
                    var d = !Object(ko.a)(t.alert),
                        u = !Object(ko.a)(t.briefing),
                        p = !Object(ko.a)(t.opinion),
                        m = !Object(ko.a)(t.spotlight);
                    return w.a.createElement(w.a.Fragment, null, s()("div", {
                        className: So
                    }, void 0, d && s()("div", {
                        className: Co
                    }, void 0, s()(ze, {
                        block: t.alert
                    })), d && Bo, m && s()("div", {
                        className: Eo
                    }, void 0, s()(uo, {
                        block: t.spotlight,
                        desktopLayout: i
                    })), m && r && _o, u && "top" === l && s()(Bt, {
                        block: t.briefing,
                        lazy: r && m,
                        position: "top"
                    })), s()("div", {
                        className: Io
                    }, void 0, s()("div", {
                        className: No
                    }, void 0, s()("div", {
                        className: Lo
                    }, void 0, s()(xo, {
                        block: t.topStories,
                        lazy: m,
                        hasSpotlight: m,
                        hasTopAd: r && !m
                    })), zo, u && "middle" === l && s()(Bt, {
                        block: t.briefing,
                        lazy: r && m
                    }), (r || a) && !o && Vo, s()("div", {
                        className: Do
                    }, void 0, s()(kn, {
                        block: t.opinion,
                        lazy: r || a || m,
                        noTopBorder: r && c - 1 == 3 || i || !u && p,
                        hasSpotlight: m
                    })), o && Fo, s()("div", {
                        className: Ao
                    }, void 0, s()(nn, {
                        block: t.editorsPicks
                    })))), "desktop" === n && s()("div", {
                        className: Object(ee.cx)(Ro, Ho)
                    }, void 0, Wo))
                };
            Uo.defaultProps = {
                isLargeTablet: void 0
            };
            var Xo, qo = fe.a.Consumer(Uo),
                Go = (n("tUrg"), n("aanX")),
                Ko = n.n(Go),
                Yo = n("t0IW"),
                Jo = n("5pww"),
                Zo = n("rI8Z"),
                Qo = n("sIbe"),
                $o = Ge()("div", {
                    target: "e1p1csu90"
                })("background:", ne.a.color.gray10, ";box-shadow:0 0 1px 0 ", ne.a.color.gray10, ";position:fixed;width:100%;bottom:0;transform:translateY(112px);transition:transform 200ms ease-in;z-index:", ne.a.zIndex.dock, ";padding:14px 0 13px;", (function(e) {
                    return e.showing && !e.dismissed && "\n    transform: translateY(0);\n    transition: transform 200ms ease-out;\n  "
                }), ";"),
                er = Object(ee.css)("font-family:", ne.a.font.franklin, ";font-weight:", ne.a.font.weight.light, ";font-size:", ne.a.font.size(14), ";display:flex;align-items:center;justify-content:center;color:", ne.a.color.white, ";", ne.a.breakpoint.mediumLarge, "{font-size:", ne.a.font.size(16), ";}a{font-weight:", ne.a.font.weight.bold, ";color:", ne.a.color.white, ";margin-left:6px;margin-right:6px;vertical-align:middle;}"),
                tr = Object(ee.css)("position:absolute;right:15px;top:14px;cursor:pointer;background:transparent;"),
                nr = Object(ee.css)("height:15px;width:15px;"),
                or = "vi_www_hp_2percent",
                rr = "nyt-alpha-hp-survey-dismissed-2",
                ir = "nyt-alpha-hp-dismissed_count-2",
                ar = 2,
                sr = C()()(Xo = function(e) {
                    function t() {
                        var e, n;
                        c()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = m()(this, (e = h()(t)).call.apply(e, [this].concat(r)))).state = {
                            showing: !1,
                            dismissed: !1,
                            gone: !1
                        }, n.showFeedbackBar = function() {
                            var e = q.a.load(or),
                                t = Number(Jo.a.getItem(ir)),
                                o = Jo.a.getItem(rr);
                            "string" != typeof e || "1" !== e || Date.now() - Number(o) <= 2592e5 || t >= ar || (n.showFeedbackTimeout = setTimeout((function() {
                                n.showFeedbackTimeout = clearTimeout(n.showFeedbackTimeout), n.state.dismissed || n.state.gone || n.setState({
                                    showing: !0
                                })
                            }), 5e3))
                        }, n.dismiss = function(e, t) {
                            var o = Number(Jo.a.getItem(ir));
                            Jo.a.setItem(rr, Date.now()), "message" === t ? Jo.a.setItem(ir, ar) : Jo.a.setItem(ir, o ? o + 1 : 1), n.props.tracking.trackEvent({
                                event: "moduleInteraction",
                                interaction: {
                                    module: {
                                        name: "vi-beta-tools",
                                        label: Zo.c.feedback.heading,
                                        element: {
                                            name: t,
                                            label: e
                                        }
                                    },
                                    pagetype: "homepage",
                                    type: "click"
                                }
                            }), n.hide()
                        }, n.hide = function() {
                            n.setState({
                                dismissed: !0
                            }, (function() {
                                n.goneTimeout = setTimeout((function() {
                                    n.goneTimeout = clearTimeout(n.goneTimeout), n.setState({
                                        gone: !0
                                    })
                                }), 1e3)
                            }))
                        }, n
                    }
                    return v()(t, e), u()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.showFeedbackBar()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.showFeedbackTimeout && (this.showFeedbackTimeout = clearTimeout(this.showFeedbackTimeout)), this.goneTimeout && (this.goneTimeout = clearTimeout(this.goneTimeout))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.url,
                                o = t.user,
                                r = this.state,
                                i = r.showing,
                                a = r.dismissed;
                            return r.gone ? null : s()($o, {
                                "data-testid": "feedback",
                                showing: i,
                                dismissed: a
                            }, void 0, s()("p", {
                                className: er
                            }, void 0, Zo.c.feedback.description, s()("a", {
                                onClick: function() {
                                    return e.dismiss(Zo.c.feedback.link, "message")
                                },
                                href: (null == o ? void 0 : o.id) ? Object(Yo.a)(n, {
                                    regiId: o.id
                                }) : n,
                                rel: "noopener noreferrer",
                                target: "_blank"
                            }, void 0, Zo.c.feedback.link), " ", s()(Qo.a, {
                                stroke: ne.a.color.white
                            })), s()("button", {
                                type: "button",
                                className: tr,
                                onClick: function() {
                                    return e.dismiss("Close", "closeButton")
                                }
                            }, void 0, s()(Ko.a, {
                                className: nr,
                                stroke: ne.a.color.white
                            })))
                        }
                    }]), t
                }(O.Component)) || Xo;
            sr.defaultProps = {
                user: null
            };
            var lr = sr,
                cr = n("vftj"),
                dr = n("bzYf"),
                ur = n("XMA8"),
                pr = n("6Zrg"),
                mr = n("f6wl"),
                fr = n.n(mr),
                hr = n("6D+t"),
                gr = n.n(hr),
                vr = n("W61k"),
                br = n.n(vr),
                yr = "Breaking News, World News & Multimedia",
                Or = "The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.",
                wr = "https://www.nytimes.com",
                xr = "window.NYTD.Abra('dfp_home_toggle') !== '1_block'",
                kr = function(e, t) {
                    return "if (".concat(e, ") {\n    ").concat(t, "\n  }")
                },
                jr = gr()(),
                Mr = s()("title", {}, void 0, yr),
                Pr = s()("link", {
                    rel: "canonical",
                    href: wr
                }),
                Sr = s()("link", {
                    rel: "alternate",
                    type: "application/rss+xml",
                    title: "RSS",
                    href: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                }),
                Cr = s()("meta", {
                    name: "robots",
                    content: "noarchive,noodp,noydir"
                }),
                Er = s()("meta", {
                    name: "msapplication-starturl",
                    content: wr
                }),
                Tr = s()("meta", {
                    name: "msapplication-task",
                    content: "name=Search;action-uri=https://www.nytimes.com/search/?src=iepin;icon-uri=https://static01.nyt.com/images/icons/search.ico"
                }),
                Ir = s()("meta", {
                    name: "msapplication-task",
                    content: "name=Most Popular;action-uri=https://www.nytimes.com/gst/mostpopular.html?src=iepin;icon-uri=https://static01.nyt.com/images/icons/mostpopular.ico"
                }),
                Nr = s()("meta", {
                    name: "msapplication-task",
                    content: "name=Video;action-uri=https://video.nytimes.com/?src=iepin;icon-uri=https://static01.nyt.com/images/icons/video.ico"
                }),
                Lr = s()("meta", {
                    name: "msapplication-task",
                    content: "name=Homepage;action-uri=https://www.nytimes.com?src=iepin&adxnnl=1;icon-uri=https://static01.nyt.com/images/icons/homepage.ico"
                }),
                Dr = s()("meta", {
                    name: "description",
                    content: Or
                }),
                Ar = s()("meta", {
                    property: "og:url",
                    content: wr
                }),
                Rr = s()("meta", {
                    property: "og:type",
                    content: "website"
                }),
                Hr = s()("meta", {
                    property: "og:title",
                    content: yr
                }),
                Br = s()("meta", {
                    property: "og:description",
                    content: Or
                }),
                _r = s()("meta", {
                    property: "og:image",
                    content: ur.a
                }),
                zr = s()("meta", {
                    name: "CG",
                    content: "Homepage"
                }),
                Vr = s()("meta", {
                    name: "SCG",
                    content: ""
                }),
                Fr = s()("meta", {
                    name: "PT",
                    content: "Homepage"
                }),
                Wr = s()("meta", {
                    name: "PST",
                    content: ""
                }),
                Ur = s()("script", {}, void 0, dr.c),
                Xr = function(e) {
                    var t = e.timesTags,
                        n = e.location,
                        o = e.adTargetingParams;
                    return s()(cr.Helmet, {
                        titleTemplate: "".concat(Zo.c.nyt, " - %s"),
                        encodeSpecialCharacters: !1
                    }, void 0, Mr, Pr, Sr, Cr, s()("meta", {
                        name: "application-name",
                        content: Zo.c.nyt
                    }), Er, Tr, Ir, Nr, Lr, Dr, Ar, Rr, Hr, Br, _r, zr, Vr, Fr, Wr, s()("meta", {
                        name: "keywords",
                        content: t
                    }), Ur, s()("script", {}, void 0, kr(xr, dr.b)), s()("script", {}, void 0, kr(xr, dr.a)), s()("script", {}, void 0, kr(xr, jr)), s()("script", {}, void 0, "(function() {\n      ".concat(Object(E.adScripts)(), "\n      AdSlot4.loadScripts({\n        loadMnet: ").concat("window.NYTD.Abra('medianet_toggle') !== '1_block'", ",\n        loadAmazon: ").concat("window.NYTD.Abra('amazon_toggle') !== '1_block'", ",\n        section: 'home',\n        pageType: 'hp',\n        pageViewId: window.NYTD.PageViewId.current,\n      });\n      ").concat(fr()({
                        adTargeting: Object(pr.a)(n, o),
                        lazyApi: Object(Oe.v)()
                    }), "\n    })();")), s()("script", {
                        id: "als-svc"
                    }, void 0, "var alsVariant = window.NYTD.Abra('DFP_als');\n      if (alsVariant != null && alsVariant.match(/(0_control|1_als)/)) {\n        window.NYTD.Abra.reportExposure('DFP_als');\n      }\n      ".concat(kr("window.NYTD.Abra('DFP_als') === '1_als'", br()()), "\n      ")))
                };
            Xr.displayName = "HomeHelmet", Xr.defaultProps = {
                timesTags: "",
                location: {
                    search: ""
                },
                adTargetingParams: []
            };
            var qr = Xr,
                Gr = n("hKI/"),
                Kr = n.n(Gr);

            function Yr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Jr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Yr(n, !0).forEach((function(t) {
                        be()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yr(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Zr = 1e3,
                Qr = 120 * Zr,
                $r = 60 * Zr;
            if (window.location) {
                var ei = Object(T.parse)(window.location.href, !0).query,
                    ti = parseInt(ei.inactivityTimeout, 10);
                Number.isInteger(ti) && ($r = ti * Zr, console.info("overrode inactivityTimeout to", $r, "ms"));
                var ni = parseInt(ei.preRefreshTimeout, 10);
                Number.isInteger(ni) && (Qr = ni * Zr, console.info("overrode preRefreshTimeout to", Qr, "ms"))
            }
            var oi = function(e) {
                function t() {
                    var e, n;
                    c()(this, t);
                    for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                    return (n = m()(this, (e = h()(t)).call.apply(e, [this].concat(r)))).state = {
                        locks: null
                    }, n.refresh = function() {
                        n.inactivityTimer || n.preRefreshTimer || n.isPageActive() && (n.startPreRefreshTimer(), n.props.refresh(n.state.locks))
                    }, n.isPageActive = function() {
                        var e, t;
                        try {
                            t = document.visibilityState
                        } catch (e) {
                            t = "visible"
                        }
                        try {
                            e = document.hasFocus()
                        } catch (t) {
                            e = !0
                        }
                        return "visible" === t || e
                    }, n.startPreRefreshTimer = function() {
                        n.clearPreRefreshTimer(), n.setPreRefreshTimer((function() {
                            n.startInactivityTimer()
                        }))
                    }, n.startInactivityTimer = function() {
                        n.inactivityTimer || n.setInactivityTimer((function() {
                            n.refresh()
                        }))
                    }, n.clearInactivityTimer = function() {
                        clearTimeout(n.inactivityTimer), n.inactivityTimer = null
                    }, n.clearPreRefreshTimer = function() {
                        clearTimeout(n.preRefreshTimer), n.preRefreshTimer = null
                    }, n.clearTimers = function() {
                        n.clearPreRefreshTimer(), n.clearInactivityTimer()
                    }, n.setInactivityTimer = function(e) {
                        n.inactivityTimer = setTimeout((function() {
                            n.inactivityTimer = null, e()
                        }), $r)
                    }, n.setPreRefreshTimer = function(e) {
                        n.preRefreshTimer = setTimeout((function() {
                            n.preRefreshTimer = null, e()
                        }), Qr)
                    }, n.resetInactivityTimer = Kr()((function() {
                        n.inactivityTimer && (n.clearInactivityTimer(), n.startInactivityTimer())
                    }), 10 * Zr), n.lock = function(e) {
                        n.clearTimers(), n.setState({
                            locks: Jr({}, n.state.locks || {}, be()({}, e, !0))
                        })
                    }, n.unlock = function(e) {
                        if (n.state.locks && e in n.state.locks) {
                            var t = Jr({}, n.state.locks);
                            delete t[e], 0 === Object.keys(t).length && (t = null, n.startPreRefreshTimer()), n.setState({
                                locks: t
                            })
                        }
                    }, n
                }
                return v()(t, e), u()(t, [{
                    key: "getChildContext",
                    value: function() {
                        return {
                            lock: this.lock,
                            unlock: this.unlock
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.startPreRefreshTimer(), window.addEventListener("focus", this.refresh), window.addEventListener("scroll", this.resetInactivityTimer), document.addEventListener("keydown", this.resetInactivityTimer), document.addEventListener("mousedown", this.resetInactivityTimer), document.addEventListener("mouseenter", this.resetInactivityTimer)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.clearTimers(), window.removeEventListener("focus", this.refresh), window.removeEventListener("scroll", this.resetInactivityTimer), document.removeEventListener("keydown", this.resetInactivityTimer), document.removeEventListener("mousedown", this.resetInactivityTimer), document.removeEventListener("mouseenter", this.resetInactivityTimer)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return O.Children.only(this.props.children)
                    }
                }]), t
            }(O.Component);
            oi.displayName = "RefreshTimer", oi.childContextTypes = {
                lock: k.a.func,
                unlock: k.a.func
            };
            var ri = oi,
                ii = n("RIqP"),
                ai = n.n(ii),
                si = function(e) {
                    var t = Object(Ne.a)(e);
                    return t.length ? t.reduce((function(e, t) {
                        var n, o;
                        return t && t.assets && (o = t.assets.reduce((function(e, t) {
                            var n;
                            if (null == t ? void 0 : null === (n = t.timesTags) || void 0 === n ? void 0 : n.length) {
                                var o = t.timesTags.filter((function(e) {
                                    return e
                                })).map((function(e) {
                                    return e.vernacular
                                }));
                                return [].concat(ai()(e), ai()(o))
                            }
                            return e
                        }), [])), (null == t ? void 0 : null === (n = t.timesTags) || void 0 === n ? void 0 : n.length) && (o = t.timesTags.filter((function(e) {
                            return e
                        })).map((function(e) {
                            return e.vernacular
                        }))), o && o.length ? [].concat(ai()(e), ai()(o)) : e
                    }), []).filter((function(e, t, n) {
                        return t === n.indexOf(e)
                    })).join() : ""
                },
                li = n("TvfT"),
                ci = "home";
            var di, ui, pi, mi, fi, hi, gi, bi, yi, Oi, wi = ne.a.breakpoint,
                xi = Object(ee.css)("display:flex;flex-direction:column;margin:0 auto;", wi.medium, "{order:", jo.a.MoreProgrammables, ";}"),
                ki = Ge()("div", {
                    target: "e6b6cmu0"
                })("display:flex;flex-direction:column;margin:0 auto;& > *{@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){min-height:1px;}}", wi.medium, "{padding:0 3%;margin:18px auto 0;", (function(e) {
                    return e.hasBriefing && "margin-top: 0;"
                }), ";}", wi.large, "{max-width:", wi.maxDesktopContentWidth, "px;}");

            function ji() {
                var e = y()(['\n    query HomeQuery($programId: String!, $contentLimit: Int!) {\n      program: program_beta(id: $programId) {\n        id\n        alert: spotlightA {\n          ...OnBlockInterfaceBeta\n        }\n        spotlight: spotlightB {\n          ...OnBlockInterfaceBeta\n        }\n        topStories: topPrimaryA {\n          ...OnBlockInterfaceBeta\n        }\n        briefing: topSecondaryA {\n          ...OnBlockInterfaceBeta\n        }\n        opinion: topSecondaryB {\n          ...OnBlockInterfaceBeta\n        }\n        editorsPicks: topSecondaryC {\n          ...OnBlockInterfaceBeta\n        }\n        adTargetingParams: adTargetingParams(\n          clientAdParams: { edn: "us", plat: "web", prop: "nyt" }\n        ) {\n          key\n          value\n        }\n      }\n    }\n    fragment OnBlockInterfaceBeta on BlockInterface_beta {\n      ... on Block_Beta {\n        id\n        firstLoad {\n          totalCount\n        }\n      }\n      ...Block_block\n    }\n    ', "\n  "]);
                return ji = function() {
                    return e
                }, e
            }
            var Mi = E.AdAdapter.updateAdReq,
                Pi = E.AdAdapter.refreshAds,
                Si = 12e4,
                Ci = 6e4;
            if (window.location) {
                var Ei = Object(T.parse)(window.location.href, !0).query,
                    Ti = parseInt(Ei.inactivityTimeout, 10);
                Number.isInteger(Ti) && (Ci = 1e3 * Ti, console.info("overrode inactivityTimeout to", Ci, "ms"));
                var Ii = parseInt(Ei.preRefreshTimeout, 10);
                Number.isInteger(Ii) && (Si = 1e3 * Ii, console.info("overrode preRefreshTimeout to", Si, "ms"))
            }
            var Ni = s()("div", {}),
                Li = N()((function() {
                    return n.e(36).then(n.bind(null, "pvL1"))
                }), {
                    loading: function() {
                        return Ni
                    },
                    loadableGenerated: {
                        webpack: function() {
                            return ["pvL1"]
                        },
                        modules: ["./MoreProgrammables"]
                    }
                }),
                Di = s()(mo, {}),
                Ai = s()(ue.a, {}),
                Ri = s()(de, {}),
                Hi = s()(B.a, {}),
                Bi = (di = Object(j.graphql)(P()(ji(), Ee.a.fragments.block), {
                    options: function(e) {
                        var t = function(e) {
                                if ("dev" !== vi.env.ENVIRONMENT && "prd" === vi.env.ENVIRONMENT) return ci;
                                var t = Object(li.a)("PROGRAM_ID", e);
                                return (null == t ? void 0 : t.length) ? t : ci
                            }(e.location.search),
                            n = 1e3;
                        return Object(he.b)(e.fastlyAbraConfig) && (n = e.initialDeviceType && "smartphone" !== e.initialDeviceType ? 3 : 2), {
                            variables: {
                                programId: t,
                                contentLimit: n
                            },
                            fetchPolicy: "cache-first",
                            context: {
                                surrogateKeyTypes: ["nyt://article/", "nyt://audio", "nyt://embeddedInteractive", "nyt://image/", "nyt://interactive", "nyt://legacycollection/", "nyt://package/", "nyt://promo/", "nyt://slideshow", "nyt://video/"]
                            }
                        }
                    }
                }), ui = Object(A.a)("homeRenderTime"), pi = fe.a.Provider, mi = fe.a.Consumer, fi = C()((function(e) {
                    return {
                        asset: {
                            url: "https://www.nytimes.com/"
                        },
                        presentation: {
                            pageType: "Homepage",
                            program: {
                                breakpoint: {
                                    initial: e.initialDeviceType
                                }
                            }
                        },
                        interaction: {
                            dfp_page_view_id: (0, e.getPageviewId)()
                        }
                    }
                })), hi = Object(E.withAds)(je), gi = H.a.Provider, Object(D.a)(bi = di(bi = Object(L.a)(bi = ui(bi = pi(bi = mi(bi = fi(bi = hi(bi = Object(R.a)(bi = gi((Oi = yi = function(e) {
                    function t() {
                        var e, n;
                        c()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = m()(this, (e = h()(t)).call.apply(e, [this].concat(r)))).state = {
                            pageViewID: n.props.getPageviewId(),
                            refreshed: !1,
                            hasMoreProgrammables: !1
                        }, n.refresh = function(e) {
                            e || (n.props.updatePageviewId(), n.props.data.refetch());
                            var t = n.props.getPageviewId();
                            n.refreshAnalytics(t), n.refreshAds(t), n.setState({
                                pageViewID: t,
                                refreshed: !0
                            })
                        }, n.refreshAnalytics = function(e) {
                            n.props.tracking.trackEvent({
                                event: "trackVirtualPage",
                                asset: {
                                    is_refresh: !0
                                },
                                interaction: {
                                    dfp_page_view_id: e
                                }
                            })
                        }, n.refreshAds = function(e) {
                            var t = n.props.adReq;
                            t.page_view_id = e, t.refresh = "auto", Mi(t), Pi()
                        }, n.setManualRefresh = function() {
                            var e = n.props.adReq;
                            e.refresh = "manual", Mi(e)
                        }, n.importProgrammables = function() {
                            Li.preload(), n.setState({
                                hasMoreProgrammables: !0
                            })
                        }, n
                    }
                    return v()(t, e), u()(t, [{
                        key: "getChildContext",
                        value: function() {
                            return {
                                variables: this.props.data.variables,
                                refetch: this.props.data.refetch,
                                dataLoading: this.props.data.loading,
                                adReq: this.props.adReq
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.data;
                            if (this.state.refreshed && !t.program) {
                                var n = new Error("Homepage refresh failed.");
                                z.a.captureException(n, {
                                    apolloData: t
                                }), setTimeout((function() {
                                    window.location.reload()
                                }), 0)
                            }
                            e.deviceType !== this.props.deviceType && this.props.tracking.trackEvent({
                                event: "impression",
                                presentation: {
                                    program: {
                                        breakpoint: {
                                            rendered: this.props.deviceType,
                                            initial: this.props.initialDeviceType
                                        }
                                    }
                                }
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e, t, n, o, r = this,
                                i = this.props.tracking.getTrackingData,
                                a = void 0 === i ? function() {} : i;
                            z.a.setTagsContext({
                                route: "home"
                            }), 1 === (null === (e = window.performance) || void 0 === e ? void 0 : null === (t = e.navigation) || void 0 === t ? void 0 : t.type) && this.setManualRefresh(), Object(pe.a)(), ("1_variant" === (null == this ? void 0 : null === (n = this.props) || void 0 === n ? void 0 : null === (o = n.fastlyAbraConfig) || void 0 === o ? void 0 : o.HOME_chartbeat) || Object(ge.b)()) && this.importProgrammables(), Object(me.a)(a()), Object(he.a)((function() {
                                r.props.data.refetch({
                                    contentLimit: 1e3
                                })
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = t.program,
                                o = t.variables.programId,
                                r = e.location,
                                i = e.staticContext,
                                a = e.deviceType,
                                l = e.user,
                                c = e.fastlyAbraConfig,
                                d = this.state,
                                u = d.pageViewID,
                                p = d.hasMoreProgrammables;
                            if (!n) return null;
                            var m = "smartphone" === a,
                                f = !Object(ko.a)(n.briefing),
                                h = si(n.topStories);
                            i && (i.pageType = "Homepage", i.edge = "vi-homepage", i.surrogateControl = "max-age=30; stale-if-error=86400; stale-while-revalidate=86400");
                            var g = w.a.createElement(w.a.Fragment, null, "smartphone" !== a && Di, s()(_.a, {
                                deviceType: a,
                                showMiniNavDoubleBorderBottom: !m && !f,
                                hideModalOnScroll: !0,
                                showFloatingMiniNav: !0,
                                center: !0,
                                pageType: "Homepage"
                            }, void 0, s()(qr, {
                                adTargetingParams: n.adTargetingParams,
                                location: r,
                                timesTags: h
                            }), s()(ki, {
                                hasBriefing: f
                            }, void 0, s()(qo, {
                                program: n
                            }), s()("div", {
                                className: xi
                            }, void 0, "1_variant" === (null == c ? void 0 : c.HOME_chartbeat) || Object(ge.b)() ? p && s()(Li, {
                                pageViewID: u,
                                programId: o
                            }) : s()(V.a, {
                                offset: 400,
                                onLoad: this.importProgrammables
                            }, void 0, p && s()(Li, {
                                pageViewID: u,
                                programId: o
                            })))), !m && s()(lr, {
                                user: l,
                                url: "http://nyt.qualtrics.com/jfe/form/SV_eFJmKj9v0krSE0l"
                            }), Ai, Ri, Hi));
                            return m ? g : s()(ri, {
                                refresh: this.refresh
                            }, void 0, g)
                        }
                    }]), t
                }(O.Component), yi.defaultProps = {
                    getPageviewId: function() {},
                    updatePageviewId: function() {},
                    deviceType: "smartphone",
                    initialDeviceType: "smartphone",
                    adReq: {},
                    tracking: {},
                    user: void 0,
                    location: void 0,
                    staticContext: void 0,
                    fastlyAbraConfig: {}
                }, yi.childContextTypes = {
                    variables: k.a.shape({}),
                    refetch: k.a.func,
                    dataLoading: k.a.bool,
                    adReq: k.a.shape({})
                }, bi = Oi)) || bi) || bi) || bi) || bi) || bi) || bi) || bi) || bi) || bi) || bi);
            t.default = Bi
        },
        MsNm: function(e, t, n) {
            "use strict";
            n("tUrg");
            var o = n("VkAN"),
                r = n.n(o),
                i = n("lSNA"),
                a = n.n(i),
                s = n("gcR/"),
                l = n.n(s),
                c = (n("dRSK"), n("q1tI"), n("17x9")),
                d = n.n(c),
                u = n("Dugd"),
                p = n.n(u),
                m = n("UmXO"),
                f = n("nGF/"),
                h = n.n(f),
                g = n("vEu8"),
                v = n("QNJC"),
                b = n("hG4R"),
                y = n("A6pt"),
                O = n("9ref"),
                w = n("5dFD"),
                x = n("369f"),
                k = n("kd6s"),
                j = n("iiJN"),
                M = n("GXaC"),
                P = n("Jhol"),
                S = n.n(P),
                C = n("3NoI"),
                E = n.n(C),
                T = n("wXC7"),
                I = n.n(T),
                N = I.a.breakpoint,
                L = I.a.color,
                D = I.a.font,
                A = E()("section", {
                    target: "e16zw86q0"
                })((function(e) {
                    return "caption" === e.meta && e.caption && "dangle" === e.position && "\n      width: ".concat(e.video ? 32 : 22, "%;\n      position: absolute;\n      right: 0;\n      padding-top: 11px;\n  ")
                }), ";"),
                R = E()("figcaption", {
                    target: "e16zw86q1"
                })("font-size:", D.size(10), ";line-height:", D.size(12), ";font-family:", D.cheltenhamSmall, ";letter-spacing:0.2px;color:", L.gray50, ";text-align:right;margin:3px ", (function(e) {
                    return e.narrowImage ? "0" : "15px"
                }), " 0;min-height:12px;overflow-wrap:break-word;word-break:break-word;", N.medium, "{margin:3px 0 0;}", (function(e) {
                    return "dangle" === e.position && "\n    display: inline;\n    "
                }), ";", (function(e) {
                    return "caption" === e.meta && "\n    font-size: ".concat(D.size(11), ";\n    line-height: ").concat(D.size(14), ";\n    letter-spacing: 0.2px;\n    color: ").concat(L.gray40, ";\n    text-align: left;\n\n    ").concat("side" === e.position && "\n      padding: 0 0 0 15px;\n    ", ";\n\n    .credit {\n      font-size: ").concat(D.size(10), ";\n      line-height: ").concat(D.size(12), ";\n      letter-spacing: 0.2px;\n      color: ").concat(L.gray50, ";\n      display: inline-block;\n    }\n\n    ").concat(N.medium, " {\n      margin: 5px 0 0;\n    }\n\n    ")
                }), ";", (function(e) {
                    return ("side" === e.position || e.suppressImage) && "\n    margin-top: -2px;\n    text-align: left;\n\n    // need this media query to override above margin rule\n    ".concat(N.medium, " {\n      margin-top: -2px;\n    }\n    ")
                }), ";"),
                H = Object(m.css)("height:15px;", N.medium, "{display:none;}"),
                B = l()("div", {
                    className: H
                }),
                _ = function(e) {
                    var t = e.caption,
                        n = e.credit,
                        o = e.meta,
                        r = e.position,
                        i = e.suppressImage,
                        a = e.narrowImage,
                        s = e.video,
                        c = !e.suppressCredit && n && n.length;
                    return "caption" === o && t ? l()(R, {
                        meta: "caption",
                        suppressImage: i,
                        position: r,
                        narrowImage: a
                    }, void 0, l()(A, {
                        meta: "caption",
                        caption: t,
                        position: r,
                        video: s,
                        "aria-hidden": s ? null : "true"
                    }, void 0, t, c && " ", c && l()("span", {
                        className: "credit"
                    }, void 0, n))) : c ? l()(R, {
                        meta: "credit",
                        suppressImage: i,
                        position: r,
                        narrowImage: a
                    }, void 0, l()(A, {
                        meta: "credit",
                        caption: t,
                        position: r,
                        video: s
                    }, void 0, l()("span", {
                        className: "credit"
                    }, void 0, n))) : B
                };
            _.displayName = "MetaContent", _.defaultProps = {
                caption: void 0,
                credit: void 0,
                meta: void 0,
                position: void 0,
                suppressImage: !1,
                narrowImage: !1,
                video: !1,
                suppressCredit: !1
            };
            var z = _,
                V = l()("svg", {
                    width: "60",
                    height: "30",
                    viewBox: "0 0 60 30"
                }, void 0, l()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, l()("rect", {
                    fillOpacity: ".5",
                    fill: "#000",
                    width: "60",
                    height: "30",
                    rx: "3"
                }), l()("path", {
                    d: "M30.742 18.82h-5.024V9.3h-2.064v11.2h7.088v-1.68zM34.05 9.3h-1.888v1.728h1.888V9.3zm-.016 3.056h-1.856V20.5h1.856v-8.144zm7.34 0l-2.048 5.792-2-5.792H35.39l2.992 8.144h1.472l3.024-8.144h-1.504zm9.708 4.224v.176h-5.536c0 1.632.928 2.56 2.144 2.56 1.136 0 1.792-.752 2.096-1.312l1.28.672c-.544.88-1.552 2.016-3.536 2.016-2.416 0-3.856-1.744-3.856-4.096 0-2.352 1.392-4.4 3.792-4.4 1.312 0 2.32.56 2.96 1.616.464.768.656 1.696.656 2.768zm-5.488-.992h3.632c0-1.168-.512-2.08-1.696-2.08-1.408 0-1.936 1.2-1.936 2.08z",
                    fill: "red"
                }), l()("circle", {
                    fill: "red",
                    cx: "12",
                    cy: "15",
                    r: "4"
                })));

            function F() {
                return V
            }
            F.displayName = "LiveBadge";
            var W = n("bmDr"),
                U = l()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, l()("g", {
                    transform: "translate(0 -.017)"
                }, void 0, l()("circle", {
                    fillOpacity: ".2",
                    fill: "#000",
                    cx: "20",
                    cy: "20",
                    r: "18"
                }), l()("path", {
                    d: "M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20zm0-2c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18z",
                    fill: "#F7F7F7",
                    opacity: ".5"
                })), l()("g", {
                    transform: "translate(14 21)",
                    fill: "#F7F7F7"
                }, void 0, l()("circle", {
                    cx: "2",
                    cy: "2",
                    r: "2"
                }), l()("circle", {
                    cx: "10",
                    cy: "2",
                    r: "2"
                })), l()("path", {
                    d: "M11.074 8.045A14.934 14.934 0 0 1 20.135 5c3.32 0 6.388 1.078 8.873 2.904l-9.037 9.037-8.897-8.896z",
                    fill: "#F7F7F7"
                }));

            function X(e) {
                var t = 30,
                    n = 30;
                return "large" === e.size && (t = 40, n = 40), l()("svg", {
                    width: n,
                    height: t,
                    viewBox: "0 0 40 40"
                }, void 0, U)
            }
            X.displayName = "ThreeSixtyCompass", X.defaultProps = {
                size: "medium"
            };
            var q = I.a.color,
                G = I.a.font,
                K = E()("div", {
                    target: "euckorf0"
                })("position:relative;& > img{vertical-align:middle;}&:hover .gradient{opacity:0.6;transition:opacity 300ms ease-out;}.gradient{z-index:1;position:absolute;height:80px;right:0;bottom:0;left:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);opacity:0.5;transition:opacity 300ms ease-in;}.controlsWrapper{position:absolute;bottom:0;left:0;right:0;height:60px;padding:0 20px 20px;display:flex;align-items:flex-end;}.controls{z-index:2;width:100%;display:flex;align-items:center;justify-content:space-between;}.duration{font-size:13px;font-weight:", G.weight.book, ";margin-left:10px;color:", q.gray90, ";font-family:", G.franklin, ";}.playAndDuration{display:flex;align-items:center;path{transform:scale(1) translateX(0);transform-origin:center center;transition:transform 300ms ease-in;}circle{opacity:0;transition:opacity 300ms ease-out;}}", (function(e) {
                    return "small" === e.size ? "\n      .controlsWrapper {\n        height: 65px;\n        padding: 0 15px 15px;\n\n        ".concat(e.isLive && "\n          height: 70px;\n          padding: 0 10px 10px 15px;\n        ", "\n      }\n      ") : "\n      &:hover .playAndDuration {\n        path {\n          transform: scale(0.5) translateX(4px);\n          transform-origin: center center;\n          transition: transform 300ms ease-out;\n        }\n\n        circle {\n          opacity: 1;\n          transition: opacity 300ms ease-in;\n        }\n      }\n      "
                }), ";"),
                Y = l()("div", {
                    className: "gradient"
                }),
                J = l()(F, {}),
                Z = function(e) {
                    var t = e.video,
                        n = e.promoMedia,
                        o = e.preferredCrop,
                        r = e.crop,
                        i = e.size;
                    return t ? l()(K, {
                        size: i,
                        isLive: t.isLive
                    }, void 0, l()(b.a, {
                        media: n,
                        preferredCrop: o,
                        crop: r,
                        metadataOptOut: !0
                    }), Y, l()("div", {
                        className: "controlsWrapper"
                    }, void 0, l()("div", {
                        className: "controls"
                    }, void 0, l()("div", {
                        className: "playAndDuration"
                    }, void 0, l()(W.a, {
                        size: i
                    }), t.duration && l()("span", {
                        className: "duration"
                    }, void 0, function(e) {
                        if (e < 0 || 0 !== e && !e) return null;
                        var t = Math.floor(e / 1e3) % 60;
                        return "".concat(Math.floor(e / 6e4), ":").concat(t < 10 ? "0".concat(t) : t)
                    }(t.duration))), t.is360 && l()(X, {
                        size: i
                    }), t.isLive && J))) : null
                };
            Z.defaultProps = {
                crop: null,
                preferredCrop: null,
                size: "medium"
            };
            var Q = Z,
                $ = Object(m.css)("margin-bottom:5px;width:100%;&:last-child{margin-bottom:0;}"),
                ee = Object(m.css)("& img{display:block;}"),
                te = Object(m.css)("margin-top:-15px;"),
                ne = Object(m.css)("position:absolute;bottom:0;left:0;max-width:52%;padding-bottom:5.5%;padding-left:25px;user-select:none;user-drag:none;pointer-events:none;", I.a.breakpoint.medium, "{padding-left:6.5%;padding-bottom:4.8%;}");

            function oe() {
                var e = r()(['\n    fragment AssetMedia_media on HasPromotionalProperties {\n      cardType\n      card {\n        ... on VideoCard {\n          video {\n            ...SpanVideo_media\n            is360\n            duration\n          }\n        }\n        ... on AudioCard {\n          audio {\n            ...SpanAudio_media\n            podcastSeries {\n              title\n              image {\n                ...SpanImage_media\n              }\n            }\n          }\n        }\n      }\n      ...ContentLink_link\n      promotionalMediaEmphasis\n      promotionalSummary\n      promotionalMedia {\n        __typename\n        ...SpanImage_media\n        ...EmbeddedInteractive_media\n        ...SpanVideo_media\n        ... on Image {\n          credit @stripHtml\n          caption {\n            text @stripHtml\n          }\n          captionOverride {\n            text @stripHtml\n          }\n          hideCaption\n        }\n        ... on Video {\n          isCinemagraph\n        }\n        ... on HasPromotionalProperties {\n          subPromotionalMedia: promotionalMedia {\n            ...SpanImage_media\n            ... on Image {\n              credit @stripHtml\n              caption {\n                text @stripHtml\n              }\n            }\n          }\n        }\n      }\n      ... on Article {\n        episodeProperties {\n          episodeLabel\n        }\n        column {\n          id\n          promotionalMedia {\n            ... on Image {\n              crops(renditionNames: ["master1050", "square320"]) {\n                renditions {\n                  name\n                  url\n                  width\n                  height\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ', "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);
                return oe = function() {
                    return e
                }, e
            }
            var re = Object(k.a)(y.a),
                ie = function(e, t) {
                    var n = e.media,
                        o = e.meta,
                        r = e.metaPosition,
                        i = e.imageWidth,
                        s = e.metaWidth,
                        c = e.crop,
                        d = e.suppressImage,
                        u = e.preferredCrop,
                        p = e.wrapLink,
                        f = e.inlineVideo,
                        g = e.showVideoMeta,
                        y = e.showInteractivePromo,
                        O = e.size,
                        k = e.block,
                        P = e.narrowImage,
                        C = e.linkSearch,
                        E = e.ruleAlign,
                        T = e.deviceType,
                        I = t.lazy,
                        N = n || {},
                        L = N.promotionalSummary,
                        D = N.cardType,
                        A = N.card,
                        R = function(e, t) {
                            var n, o, r, i, a = e || {},
                                s = a.promotionalMedia,
                                l = a.cardType,
                                c = a.card,
                                d = a.column;
                            "AUDIO" === l && (n = null == c ? void 0 : null === (o = c.audio) || void 0 === o ? void 0 : null === (r = o.podcastSeries) || void 0 === r ? void 0 : r.image);
                            return "Briefing" === t && (i = null == d ? void 0 : d.promotionalMedia), n || i || s || null
                        }(n, k);
                    if (!R) return null;
                    var H = "EmbeddedInteractive" === R.__typename && y,
                        B = "Video" === R.__typename,
                        _ = "VIDEO" === D,
                        V = function(e) {
                            return "Image" === e.__typename ? e : e.subPromotionalMedia
                        }(R),
                        F = B ? R : null == A ? void 0 : A.video,
                        W = F && F.isCinemagraph,
                        U = f && W,
                        X = (_ || B) && !f && !W && g,
                        q = (_ || B) && f && !W,
                        G = q && !!(null == F ? void 0 : F.isLive),
                        K = "";
                    _ ? K = L : B && (K = R.promotionalSummary);
                    var Y, J, Z = "";
                    if (_) Z = R.credit;
                    else if (B) {
                        var oe;
                        Z = null == R ? void 0 : null === (oe = R.subPromotionalMedia) || void 0 === oe ? void 0 : oe.credit
                    }
                    if (H) Y = l()(M.a, {}, void 0, l()(v.a, {
                        media: R,
                        blockSize: "FULL",
                        manageScripts: !0
                    })), Y = I ? l()(x.a, {
                        offset: 400
                    }, void 0, Y) : Y;
                    else if (U) {
                        var ie, ae = function(e, t) {
                                if (!e || !e.length) return null;
                                var n = {
                                    smartphone: "video_480p_mp4_mobile",
                                    tablet: "video_480p_mp4",
                                    desktop: "video_720p_mp4"
                                };
                                return e.find((function(e) {
                                    return e.type === n[t]
                                })) || e[0]
                            }(F.renditions, T),
                            se = function(e) {
                                var t = S.a;
                                return e && e.episodeLabel ? t : null
                            }(n && n.episodeProperties),
                            le = l()(h.a, {
                                src: null == ae ? void 0 : ae.url,
                                ratio: "smartphone" === T && ae.aspectRatio ? ae.aspectRatio : "3:2",
                                imgFallback: null === (ie = Object(b.b)(V, u, c)) || void 0 === ie ? void 0 : ie.url
                            });
                        Y = se ? l()("div", {
                            style: {
                                position: "relative"
                            }
                        }, void 0, le, l()("img", {
                            className: ne,
                            src: se,
                            alt: "brandmark"
                        })) : le
                    } else if (q) {
                        var ce = {
                            ads: !0,
                            api: !1,
                            contextualMenu: !0,
                            cover: !0,
                            endSlate: {
                                hasRecommendation: !1,
                                autoplayNext: !1
                            },
                            type: "homepage",
                            autoplay: G,
                            muted: G,
                            liveAutoplayOverlay: G
                        };
                        Y = l()(M.a, {}, void 0, l()(re, {
                            media: F,
                            videoOptions: ce
                        })), Y = I ? l()(x.a, {
                            offset: 600
                        }, void 0, Y) : Y
                    } else if (X) {
                        if (!V) return null;
                        Y = l()(Q, {
                            video: F,
                            promoMedia: V,
                            preferredCrop: u,
                            crop: c,
                            size: O
                        })
                    } else {
                        var de, ue;
                        if (!V) return null;
                        var pe = null == V ? void 0 : null === (de = V.captionOverride) || void 0 === de ? void 0 : de.text,
                            me = null == V ? void 0 : V.hideCaption;
                        K = null == V ? void 0 : null === (ue = V.caption) || void 0 === ue ? void 0 : ue.text, Z = null == V ? void 0 : V.credit, K = !me && (pe || K), Y = l()(b.a, {
                            media: V,
                            preferredCrop: u,
                            crop: c,
                            metadataOptOut: !0,
                            caption: K
                        })
                    }
                    var fe = !(_ && !f);
                    J = "side" !== r || !!(!K && !Z) || d || H ? l()("div", {
                        className: $
                    }, void 0, l()("figure", {
                        className: Object(m.cx)(ee, a()({}, te, E))
                    }, void 0, !d && Y, o && fe && l()(z, {
                        meta: o,
                        position: r,
                        suppressImage: d,
                        caption: K,
                        credit: Z,
                        promoMedia: R,
                        narrowImage: P,
                        video: q,
                        suppressCredit: G
                    }))) : l()("figure", {
                        className: Object(m.cx)(ee, a()({}, te, E))
                    }, void 0, l()(j.b, {}, void 0, l()(j.a, {
                        columns: i,
                        noPadding: !!o
                    }, void 0, Y), o && l()(j.a, {
                        columns: s,
                        noVerticalBorder: !0,
                        noPadding: !0
                    }, void 0, l()(z, {
                        position: "side",
                        meta: o,
                        suppressImage: d,
                        caption: K,
                        credit: Z,
                        promoMedia: R,
                        video: q,
                        suppressCredit: G
                    }))));
                    var he = !p || q || H;
                    return l()(w.a, {
                        link: n,
                        search: C,
                        disableLink: he
                    }, void 0, J)
                };
            ie.displayName = "AssetMedia", ie.defaultProps = {
                media: {},
                crop: void 0,
                preferredCrop: "threeByTwoMediumAt2X",
                meta: null,
                metaPosition: null,
                imageWidth: 5,
                metaWidth: 1,
                wrapLink: !0,
                inlineVideo: !1,
                showVideoMeta: !0,
                showInteractivePromo: !0,
                suppressImage: !1,
                size: "medium",
                block: null,
                narrowImage: !1,
                linkSearch: null,
                ruleAlign: !1
            }, ie.contextTypes = {
                lazy: d.a.bool,
                blockId: d.a.string
            }, ie.fragments = {
                media: p()(oe(), y.a.fragments.media, O.a.fragments.media, w.a.fragments.link, v.a.fragments.media, b.a.fragments.media)
            };
            t.a = Object(g.a)(ie)
        },
        O7Jj: function(e, t, n) {
            "use strict";
            n("91GP");
            var o = n("lwsE"),
                r = n.n(o),
                i = n("W8MJ"),
                a = n.n(i),
                s = n("a1gu"),
                l = n.n(s),
                c = n("Nsbk"),
                d = n.n(c),
                u = n("7W2i"),
                p = n.n(u),
                m = n("q1tI"),
                f = n.n(m),
                h = (n("17x9"), n("hKI/")),
                g = n.n(h),
                v = n("UmXO"),
                b = "Polyfill may not function in the presence of the `sandbox` attribute. Consider using the `force` option.",
                y = /\ballow-same-origin\b/,
                O = function() {
                    return null
                };
            O = function(e) {
                console.error("[srcdoc-polyfill] ".concat(e))
            };
            var w = function(e, t, n) {
                    if (e && e.getAttribute && (t ? e.setAttribute("srcdoc", t) : t = e.getAttribute("srcdoc"), t)) {
                        ! function(e, t) {
                            var n = e.getAttribute("sandbox");
                            "string" != typeof n || y.test(n) || (t && t.force ? e.removeAttribute("sandbox") : t && !1 === t.force || (O(b), e.setAttribute("data-srcdoc-polyfill", b)))
                        }(e, n);
                        var o = 'javascript: window.frameElement.getAttribute("srcdoc");';
                        e.contentWindow && (e.contentWindow.location = o), e.setAttribute("src", o)
                    }
                },
                x = function() {
                    if (!!!("srcdoc" in document.createElement("iframe")))
                        for (var e = document.getElementsByTagName("iframe"), t = e.length; t > 0; t -= 1) w(e[t])
                },
                k = Object(v.css)("border:0;overflow:hidden;width:1px;min-width:100%;");
            n.d(t, "a", (function() {
                return j
            }));
            var j = function(e) {
                function t() {
                    var e, n;
                    r()(this, t);
                    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    return (n = l()(this, (e = d()(t)).call.apply(e, [this].concat(i)))).observer = null, n.frameLoaded = !1, n.state = {
                        frameHeight: null
                    }, n.onFrameLoaded = function(e) {
                        if (e) {
                            ! function t() {
                                try {
                                    var o = e.contentWindow;
                                    if (!o) return void setTimeout(t, 17);
                                    var r = e.contentDocument;
                                    if (!r || !r.body) return void setTimeout(t, 17);
                                    if ("" === r.body.innerHTML) return void setTimeout(t, 17);
                                    var i = r.documentElement,
                                        a = function() {
                                            return i.offsetHeight + i.offsetTop
                                        },
                                        s = o.MutationObserver || o.WebKitMutationObserver || o.MozMutationObserver,
                                        l = function() {
                                            n.setState({
                                                frameHeight: a()
                                            })
                                        };
                                    if (n.frameLoaded = !0, n.observer = new s(l), n.observer.observe(i, {
                                            attributes: !0,
                                            childList: !0,
                                            characterData: !0,
                                            subtree: !0
                                        }), !window.requestAnimationFrame) return;
                                    var c = g()((function() {
                                        n.state.frameHeight !== a() && l()
                                    }), 17);
                                    window.requestAnimationFrame((function e() {
                                        n.frameLoaded && c(), window.requestAnimationFrame(e)
                                    }))
                                } catch (e) {
                                    console.warn("NYT Iframe error:", e), setTimeout(t, 500)
                                }
                            }()
                        }
                    }, n
                }
                return p()(t, e), a()(t, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.observer && this.observer.disconnect(), this.frameLoaded = !1
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.props.srcDoc && x()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.src,
                            n = e.srcDoc,
                            o = e.id,
                            r = e.className,
                            i = this.state.frameHeight,
                            a = {
                                src: t
                            };
                        n && (a = {
                            srcDoc: n,
                            "data-src": t
                        });
                        var s = Object.assign(a, {
                            className: Object(v.cx)(k, r),
                            frameBorder: 0,
                            scrolling: "no",
                            width: "100%",
                            id: o,
                            ref: this.onFrameLoaded
                        }, "number" == typeof i ? {
                            height: i
                        } : {});
                        return f.a.createElement("iframe", s)
                    }
                }]), t
            }(m.Component);
            j.displayName = "Iframe", j.defaultProps = {
                src: null,
                srcDoc: null,
                id: null,
                className: void 0
            }
        },
        OW05: function(e, t, n) {
            "use strict";
            var o = n("VkAN"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = n("lSNA"),
                l = n.n(s),
                c = (n("tUrg"), n("q1tI"), n("17x9"), n("Dugd")),
                d = n.n(c),
                u = n("UmXO"),
                p = n("sIbe"),
                m = (n("SMB2"), n("3NoI")),
                f = n.n(m),
                h = n("wXC7"),
                g = n.n(h),
                v = g.a.breakpoint,
                b = g.a.color,
                y = g.a.font,
                O = g.a.zIndex,
                w = f()("header", {
                    target: "e1pwcx9q0"
                })("font-size:", y.size(16), ";line-height:", y.size(12), ";", (function(e) {
                    return !e.noTopBorder && "border-top: 1px solid ".concat(b.gray10)
                }), ";position:sticky;top:0;background-color:", b.white, ";z-index:", O.sectionOverlay, ";border-bottom:1px solid ", b.gray60, ";", v.medium, "{margin-bottom:8px;padding:2px 0 9px;", (function(e) {
                    return e.noTopBorder && "padding-top: 0"
                }), ";", (function(e) {
                    return e.opinionStyle && "padding-bottom: 5px"
                }), ";position:static;background-color:inherit;border-bottom:none;&::before{", (function(e) {
                    return !e.noTopBorder && "\n          content: '';\n          border-top: 1px solid ".concat(b.gray10, ";\n          display: block;\n          padding-top: 11px;\n      ")
                }), ";}}"),
                x = Object(u.css)("display:inline-block;&:hover{opacity:0.66;}svg{transform:translateY(1px);}"),
                k = Object(u.css)("display:block;font-family:", y.franklin, ";font-weight:", y.weight.bold, ";letter-spacing:0.5px;flex-shrink:0;color:", b.gray10, ";padding:14px 25px 13px;", v.medium, "{padding:0;display:inline;}"),
                j = Object(u.css)(v.medium, "{font-size:1.125rem;line-height:0.75rem;padding-bottom:5px;font-family:", y.cheltenham, ";font-weight:", y.weight.medium, ";letter-spacing:0;}"),
                M = Object(u.css)("margin-left:5px;");

            function P() {
                var e = r()(["\n    fragment BlockHeader_card on Block_Beta {\n      title\n    }\n  "]);
                return P = function() {
                    return e
                }, e
            }
            var S = a()("span", {
                    className: M
                }, void 0, a()(p.a, {})),
                C = function(e) {
                    var t = e.title,
                        n = e.noTopBorder,
                        o = e.link,
                        r = e.opinionStyle,
                        i = e.className;
                    return a()(w, {
                        noTopBorder: n,
                        opinionStyle: r,
                        className: i
                    }, void 0, o ? a()("a", {
                        href: "".concat(o, "?pagetype=Homepage&action=click&module=").concat(t),
                        className: x
                    }, void 0, a()("h3", {
                        className: Object(u.cx)(k, l()({}, j, r))
                    }, void 0, t, S)) : a()("h3", {
                        className: Object(u.cx)(k, l()({}, j, r))
                    }, void 0, t))
                };
            C.displayName = "BlockHeader", C.defaultProps = {
                title: null,
                noTopBorder: !1,
                link: null,
                opinionStyle: !1,
                className: void 0
            }, C.fragments = {
                block: d()(P())
            };
            t.a = C
        },
        QNJC: function(e, t, n) {
            "use strict";
            var o = n("d8k4");
            n("iRoE"), n("rjlW");
            t.a = o.a
        },
        "Rb+W": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            })), n.d(t, "w", (function() {
                return h
            })), n.d(t, "r", (function() {
                return g
            })), n.d(t, "t", (function() {
                return v
            })), n.d(t, "k", (function() {
                return O
            })), n.d(t, "l", (function() {
                return w
            })), n.d(t, "o", (function() {
                return x
            })), n.d(t, "m", (function() {
                return k
            })), n.d(t, "n", (function() {
                return j
            })), n.d(t, "q", (function() {
                return M
            })), n.d(t, "h", (function() {
                return P
            })), n.d(t, "x", (function() {
                return S
            })), n.d(t, "c", (function() {
                return C
            })), n.d(t, "d", (function() {
                return E
            })), n.d(t, "a", (function() {
                return T
            })), n.d(t, "s", (function() {
                return I
            })), n.d(t, "f", (function() {
                return N
            })), n.d(t, "i", (function() {
                return L
            })), n.d(t, "e", (function() {
                return D
            })), n.d(t, "g", (function() {
                return R
            })), n.d(t, "j", (function() {
                return H
            })), n.d(t, "p", (function() {
                return B
            })), n.d(t, "u", (function() {
                return _
            })), n.d(t, "v", (function() {
                return z
            }));
            n("VRzm"), n("SRfc"), n("KKXr"), n("f3/d"), n("OG14");
            var o = n("VkAN"),
                r = n.n(o),
                i = (n("pIFo"), n("rGqo"), n("yt8O"), n("RW0V"), n("a1Th"), n("Btvt"), n("Zz4T"), n("91GP"), n("Dugd")),
                a = n.n(i),
                s = n("cr+I"),
                l = n.n(s),
                c = (n("5pww"), n("TvfT")),
                d = n("Lkij");

            function u() {
                var e = r()(["\n    fragment getAdLibraryFallback_data on CreativeWork {\n      ... on Published {\n        sourceId\n        type\n      }\n      ... on Article {\n        compatibility {\n          isOak\n        }\n        wordCount\n      }\n      bylines {\n        creators {\n          ... on Person {\n            displayName\n          }\n        }\n      }\n      displayProperties {\n        fullBleedDisplayStyle\n      }\n      typeOfMaterials\n    }\n  "]);
                return u = function() {
                    return e
                }, e
            }

            function p() {
                var e = r()(["\n    fragment getCollections_collections on CreativeWork {\n      collections {\n        id\n        name\n        collectionType\n      }\n    }\n  "]);
                return p = function() {
                    return e
                }, e
            }

            function m() {
                var e = r()(["\n    fragment getNewsKeywords_keywords on CreativeWork {\n      timesTags @filterEmpty {\n        __typename\n        vernacular\n        isAdvertisingBrandSensitive\n        displayName\n      }\n    }\n  "]);
                return m = function() {
                    return e
                }, e
            }

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object.assign({}, e, {
                    prop: "nyt",
                    plat: "web",
                    ver: "vi",
                    edn: "us"
                })
            }

            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e ? Object.assign({}, e, {
                    prop: "mnyt",
                    plat: "mweb",
                    ver: "mvi",
                    edn: "us"
                }) : {}
            }

            function g(e, t) {
                var n = null == e ? void 0 : e.demographics,
                    o = null == n ? void 0 : n.emailSubscriptions,
                    r = null == n ? void 0 : n.bundleSubscriptions;
                if (n && r && t && (Array.isArray(r) && r.length && (t.sub = "reg"), o && o.length && (t.em = o.toString().toLowerCase()), n.wat && (t.wat = n.wat.toLowerCase()), Array.isArray(r) && r.length && r[0].bundle)) {
                    var i = r[0];
                    t.sub = i.bundle.toLowerCase(), i.source && (t.subsrc = i.source.toLowerCase()), i.promotion && (t.subprm = i.promotion), i.in_grace && (t.grace = i.in_grace.toString())
                }
                return t
            }

            function v(e) {
                var t = {
                    smartphone: "small",
                    tablet: "medium",
                    desktop: "large"
                };
                return e ? t[e] : t.desktop
            }

            function b() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = Object.keys(e);
                return t.length && t.forEach((function(t) {
                    if (e[t] instanceof Array) {
                        var n = e[t].toString().toLowerCase();
                        n.length > 0 && (e[t] = n)
                    }
                })), e
            }

            function y(e) {
                return "string" == typeof e ? e.toLowerCase().replace(/\s+|\W/g, "").substring(0, 30) : null
            }

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = {
                        brandsensitive: "false"
                    },
                    o = {
                        organization: "org",
                        location: "geo",
                        person: "per",
                        title: "ttl",
                        subject: "des",
                        keyword: "spon"
                    };
                return e && e instanceof Array && e.forEach((function(e) {
                    var t = e.vernacular,
                        r = e.displayName,
                        i = e.isAdvertisingBrandSensitive,
                        a = e.__typename,
                        s = r || t,
                        l = a ? a.toLowerCase() : null,
                        c = s ? y(s) : null,
                        d = o[l] || l;
                    c && d && n[d] ? n[d].push(c) : c && d && (n[d] = [c]), i && (n.brandsensitive = "true")
                })), n = b(n), Object.assign(t, n)
            }

            function w() {
                return Object(c.a)("pgtype") ? Object(c.a)("pgtype") : Object(c.a)("src") ? "recpg" : Object(c.a)("recp") ? "recmod" : ""
            }

            function x(e) {
                if (!e || !e.search) {
                    if ("production" !== vi.env.NODE_ENV) throw new Error("missing react router location in getRefFromLocation");
                    return ""
                }
                var t = l.a.parse(e.search);
                return t.pgtype ? t.pgtype : t.src ? "recpg" : t.recp ? "recmod" : ""
            }

            function k() {
                var e = Object(c.a)("smid");
                if (e) {
                    if ("fb-nytimes" === e || "fb-share" === e) return "facebook";
                    if ("tw-nytimes" === e || "tw-share" === e) return "twitter"
                }
                return ""
            }

            function j(e) {
                if (!e || !e.search) {
                    if ("production" !== vi.env.NODE_ENV) throw new Error("missing react router location in getRefFromLocation");
                    return ""
                }
                var t = l.a.parse(e.search).smid;
                if (t) {
                    if ("fb-nytimes" === t || "fb-share" === t) return "facebook";
                    if ("tw-nytimes" === t || "tw-share" === t) return "twitter"
                }
                return ""
            }

            function M() {
                var e = (Math.floor(4 * Math.random()) + 1).toString();
                return window.sov ? window.sov : (window.sov = e, window.sov)
            }

            function P(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = {};
                return e.forEach((function(e) {
                    var t = e.name,
                        o = e.collectionType,
                        r = y(t);
                    "COLUMN" !== o ? n.coll ? n.coll.push(r) : n.coll = [r] : n.col ? n.col.push(r) : n.col = [r]
                })), n = b(n), Object.assign(t, n)
            }

            function S(e, t, n) {
                return (n = n || {}).vp = n.vp || t, e && Array.isArray(e) ? (e.forEach((function(e) {
                    var o = e.key,
                        r = e.value;
                    o && r && (n[o] = ("prop" === o || "plat" === o) && "small" === t ? "m".concat(r) : r)
                })), n) : n
            }

            function C() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).document.documentElement.getAttribute("data-nyt-ab");
                return e ? e.split(" ").reduce((function(e, t) {
                    var n = t.split("="),
                        o = n[0].toLowerCase(),
                        r = n[1];
                    return (o.indexOf("dfp") > -1 || o.indexOf("redbird") > -1) && e.push("".concat(o, "_").concat(r)), e
                }), []) : ""
            }

            function E(e, t, n) {
                var o = t.sourceId,
                    r = t.type,
                    i = t.compatibility,
                    a = t.wordCount,
                    s = t.bylines,
                    l = t.fullBleedDisplayStyle,
                    c = t.typeOfMaterials,
                    d = {
                        edn: "us",
                        prop: "small" === n ? "mnyt" : "nyt",
                        plat: "small" === n ? "mweb" : "web"
                    };
                return o && (d.id = o), r && i && (d.typ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        o = t.isOak,
                        r = {
                            article: "art",
                            blog: "bl",
                            collection: "coll",
                            guides: "gui",
                            "Guide SF": "guisf",
                            "home page": "hp",
                            interactive: "int",
                            recipe: "rec",
                            review: "rev",
                            "Recommendation Page": "recomm",
                            "search results": "ser",
                            "section front": "sf",
                            slideshow: "ss",
                            "Video Library": "vidlib",
                            "topic index": "topf",
                            "topic page": "top"
                        },
                        i = [];
                    return r[e] && i.push(r[e]), (n || []).forEach((function(e) {
                        var t = (e || "").toLowerCase();
                        t && r[t] && i.push(r[t])
                    })), o && i.push("oak"), i.join(",") || null
                }(r, i, c)), a && (d.artlen = function(e) {
                    return e < 400 ? "short" : e < 1400 ? "medium" : e < 2200 ? "long" : "xlong"
                }(a)), s && (d.auth = function(e) {
                    var t;
                    return e && Array.isArray(e) && e.forEach((function(e) {
                        var n = e.creators;
                        n && Array.isArray(n) && n.forEach((function(e) {
                            var n = e && e.displayName && "string" == typeof e.displayName && e.displayName.replace(/[.\s]+/g, "").toLowerCase();
                            t = t ? "".concat(t, ",").concat(n) : "".concat(n)
                        }))
                    })), t
                }(s)), l && (d.ledemedsz = function(e) {
                    return e && e.length ? e : "none"
                }(l)), Object.assign(e, d)
            }

            function T(e) {
                return "1_block" === (window.NYTD && window.NYTD.Abra && window.NYTD.Abra(e))
            }

            function I(e) {
                return "smartphone" === e ? "m".concat("vi") : "vi"
            }

            function N(e) {
                var t = e.select(/nyt-a/);
                return t ? t["nyt-a"] : null
            }

            function L(e) {
                var t = e.select(/nyt-gdpr/);
                return t ? t["nyt-gdpr"] : null
            }

            function D(e) {
                var t = e.select(/NYT-T/);
                return t ? t["NYT-T"] : null
            }

            function A(e) {
                return e.match(/(http|https):\/\/((www|googleads|adclick|ade-beta|google-bidout-d)\.(googleadservices|g|media6degrees|openx)\.(|doubleclick\.)(com|net))\/(pagead|pcs|adserv|w)\/(|1.0\/)((aclk|click|view|clktrk|rc)\?[^'">]+)/g)
            }

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                return new Promise((function(n) {
                    if (e.j && e.j._html_) {
                        var o = A(e.j._html_);
                        n(null !== o ? o[0] : "")
                    } else {
                        var r = e.getSlotElementId(),
                            i = t.document.getElementById(r).querySelector("iframe");
                        setTimeout((function() {
                            n(function e(t) {
                                var n = t.contentDocument;
                                if (null !== n) {
                                    var o = n.querySelectorAll('a[href][target="_blank"]'),
                                        r = n.querySelectorAll("iframe");
                                    if (o.length > 0)
                                        for (var i = 0; i < o.length; i += 1) {
                                            var a = A(o[i].href);
                                            if (null !== a) return a[0]
                                        } else if (r.length > 0)
                                            for (var s = 0; s < r.length; s += 1) {
                                                var l = e(r[s]);
                                                if ("" !== l) return l
                                            }
                                } else {
                                    var c = A(t.outerHTML);
                                    if (null !== c) return c[0]
                                }
                                return ""
                            }(i))
                        }), 3e3)
                    }
                }))
            }

            function H() {
                return 400
            }

            function B(e, t) {
                return Array.isArray(e) ? e.reduce((function(e, n) {
                    return n.id !== t && e.push(n), e
                }), []) : null
            }

            function _(e) {
                return "/es/" === (null == e ? void 0 : e.substring(e.length - 4))
            }
            O.fragments = {
                keywords: a()(m())
            }, P.fragments = {
                collections: a()(p())
            }, E.fragments = {
                data: a()(u())
            };
            var z = function() {
                var e = {
                    "1_r30": {
                        fetch: 100,
                        render: 30
                    },
                    "2_r40": {
                        fetch: 100,
                        render: 40
                    },
                    "3_r50": {
                        fetch: 100,
                        render: 50
                    },
                    "4_r60": {
                        fetch: 100,
                        render: 60
                    },
                    "5_r70": {
                        fetch: 100,
                        render: 70
                    }
                };
                return Object(d.c)("dfp_lazy4", "0_control") && Object(d.e)("dfp_lazy4"), e[Object.keys(e).filter((function(e) {
                    return Object(d.c)("dfp_lazy4", e) ? (Object(d.e)("dfp_lazy4"), e) : null
                }))]
            }
        },
        RvkP: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("RW0V"), n("a1Th"), n("Btvt");
            var o = n("lSNA"),
                r = n.n(o),
                i = (n("f3/d"), n("SRfc"), n("dRSK"), n("wYzE")),
                a = n("Lkij");

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var l, c = ["vi-ads-et"],
                d = function() {
                    return c.some((function(e) {
                        return null !== Object(a.b)(e)
                    }))
                },
                u = [{
                    nameRegex: /gpt\.js/,
                    trackedOnce: !1,
                    label: "timeGPTLoaded"
                }, {
                    nameRegex: /bidexchange\.js/,
                    trackedOnce: !1,
                    label: "bidLibLoaded",
                    secondary: "media.net"
                }, {
                    nameRegex: /apstag\.js/,
                    trackedOnce: !1,
                    label: "bidLibLoaded",
                    secondary: "amazon"
                }, {
                    nameRegex: /als-svc/,
                    trackedOnce: !1,
                    label: "alsService",
                    secondary: "als-response-time"
                }],
                p = function(e, t) {
                    var n = u.find((function(e) {
                        return t.name.match(e.nameRegex)
                    }));
                    return n && t.responseEnd && e.push(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(n, !0).forEach((function(t) {
                                r()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, n, {
                        responseEnd: t.responseEnd
                    })), e
                };

            function m() {
                if (void 0 !== window.performance && void 0 !== window.PerformanceObserver && void 0 !== window.PerformanceResourceTiming && Object(a.a)() && d()) {
                    var e = function(e) {
                        e.getEntriesByType("resource").reduce(p, []).forEach((function(e) {
                            var t = {
                                event: "impression",
                                module: {
                                    name: "timing",
                                    context: "script-load",
                                    label: "".concat(e.label).concat(e.secondary ? "-".concat(e.secondary) : ""),
                                    region: Math.round(e.responseEnd).toString()
                                }
                            };
                            Object(i.a)(t, {
                                individualEvents: !0
                            }), e.trackedOnce = !0
                        })), u.every((function(e) {
                            return e.trackedOnce
                        })) && "function" == typeof l.disconnect && l.disconnect()
                    };
                    e(window.performance), (l = new window.PerformanceObserver(e)).observe({
                        entryTypes: ["resource"]
                    })
                }
            }
        },
        SMKJ: function(e, t, n) {
            "use strict";
            var o, r, i, a = n("gcR/"),
                s = n.n(a),
                l = (n("OG14"), n("lwsE")),
                c = n.n(l),
                d = n("W8MJ"),
                u = n.n(d),
                p = n("a1gu"),
                m = n.n(p),
                f = n("Nsbk"),
                h = n.n(f),
                g = n("7W2i"),
                v = n.n(g),
                b = n("q1tI"),
                y = (n("17x9"), n("QS0n")),
                O = n("cr+I"),
                w = n.n(O),
                x = n("VaBC"),
                k = n("06b3"),
                j = n("9+Rx"),
                M = Object(y.withRouter)((i = r = function(e) {
                    function t() {
                        var e, n;
                        c()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = m()(this, (e = h()(t)).call.apply(e, [this].concat(r)))).state = {
                            MessageComponent: null
                        }, n.decideMessage = function() {
                            var e = k.a.load(j.b),
                                t = k.a.load(j.a),
                                o = {};
                            return "prd" !== vi.env.ENVIRONMENT && n.props.location.search && (o = w.a.parse(n.props.location.search)), void 0 === e && 1 === parseInt(t, 10) || void 0 !== o.gdpr ? x.a : null
                        }, n
                    }
                    return v()(t, e), u()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.decideMessage();
                            e && this.setState({
                                MessageComponent: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.MessageComponent;
                            return e ? s()(e, {}) : null
                        }
                    }]), t
                }(b.Component), r.defaultProps = {
                    location: {
                        search: ""
                    }
                }, o = i)) || o;
            M.displayName = "GDPR", t.a = M
        },
        STmI: function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o),
                i = (n("q1tI"), n("17x9"), n("UmXO")),
                a = n("dlEz"),
                s = (n("SMB2"), n("3NoI")),
                l = n.n(s),
                c = n("wXC7"),
                d = n.n(c),
                u = d.a.breakpoint,
                p = d.a.color,
                m = d.a.font,
                f = l()("span", {
                    target: "e1c8ga110"
                })("display:inline-block;white-space:pre;font-size:", m.size(14), ";line-height:", m.size(16), ";font-family:", m.franklin, ";font-weight:", m.weight.medium, ";color:", p.gray40, ";margin-right:9px;", u.medium, "{font-size:", m.size(12), ";}", (function(e) {
                    return "\n    color: ".concat(p["".concat(e.newsStatus, "Color")], ";\n  ")
                }), ";", (function(e) {
                    return ("breaking" === e.newsStatus || "live" === e.newsStatus) && "\n    font-weight: ".concat(m.weight.bold, ";\n  ")
                }), ";", (function(e) {
                    return e.showUpdated && "\n    color: ".concat(p.developingColor, ";\n  ")
                }), ";.newsStatus{text-transform:capitalize;margin-right:9px;}"),
                h = Object(i.css)("margin-right:9px;"),
                g = function(e) {
                    var t = e.asset,
                        n = e.isAlert,
                        o = t.lastMajorModification,
                        i = t.lastModified,
                        s = o || i;
                    if (!s) return null;
                    var l = !1;
                    new Date - new Date(o) <= 18e5 && (l = !0);
                    var c = t.newsStatus.toLowerCase(),
                        d = "default" !== c,
                        u = n && !d && l;
                    return r()(f, {
                        showUpdated: u,
                        newsStatus: c
                    }, void 0, d && r()("span", {
                        className: "newsStatus"
                    }, void 0, c), r()(a.a, {
                        formatter: "elapsed",
                        updatedText: u,
                        updatedTextClassName: h,
                        iso: s
                    }))
                };
            g.displayName = "AssetTimestamp", g.defaultProps = {
                isAlert: !1
            };
            t.a = g
        },
        T6LI: function(e, t) {
            e.exports = "/vi-assets/static-assets/horizontal-slide-20578c05882c02e99627e3615f29252c.gif"
        },
        TVP6: function(e, t, n) {
            "use strict";
            var o = n("17x9"),
                r = n.n(o);
            r.a.oneOfType([r.a.string, r.a.func]), r.a.shape({
                media: r.a.func,
                headline: r.a.func,
                content: r.a.func,
                meta: r.a.func,
                authorImage: r.a.func,
                link: r.a.func,
                column: r.a.func,
                banner: r.a.func
            }), r.a.bool, r.a.string, r.a.bool, r.a.bool, r.a.node
        },
        TvfT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            n("Oyvg"), n("pIFo");

            function o(e, t) {
                var n = t || window.location.href || "",
                    o = e.replace(/[\[\]]/g, "\\$&"),
                    r = new RegExp("[?&]".concat(o, "(=([^&#]*)|&|#|$)")).exec(n);
                return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, "")) : "" : null
            }
        },
        U7t6: function(e, t, n) {
            "use strict";
            var o = n("tqOa");
            t.a = function e(t) {
                return !t || (Object(o.b)(t) ? !t.blocks || !t.blocks.edges || t.blocks.edges.every((function(t) {
                    return !t || e(t.node)
                })) : !t.blockFirstLoad || !t.blockFirstLoad.edges || !t.blockFirstLoad.totalCount || t.blockFirstLoad.edges.every((function(e) {
                    return !e || !e.node
                })))
            }
        },
        V6aA: function(e, t, n) {
            "use strict";
            n("91GP"), n("SRfc"), n("KKXr"), n("f3/d");
            var o = n("Lkij"),
                r = n("j1S3"),
                i = n("wYzE");
            t.a = function(e) {
                if (e && void 0 !== window.performance && void 0 !== window.PerformanceObserver && void 0 !== window.PerformanceResourceTiming && !Object(o.d)("dfp_lazy_load_api", "1")) {
                    new window.PerformanceObserver((function(t) {
                        t.getEntriesByType("resource").reduce((function(e, t) {
                            var n;
                            return -1 !== (null == t ? void 0 : null === (n = t.name) || void 0 === n ? void 0 : n.indexOf("securepubads.g.doubleclick.net/gampad/ads")) && e.push(t), e
                        }), []).map((function(e) {
                            var t = decodeURIComponent(e.name).split("?")[1] || "";
                            return {
                                pos: t.match(/pos=([^&#]*)/)[1],
                                id: t.match(/div=([^&#]*)/)[1],
                                http: e
                            }
                        })).forEach((function(t) {
                            var n = t.pos,
                                o = t.id,
                                a = t.http,
                                s = Object.assign(e, {
                                    event: "impression",
                                    eventData: {
                                        type: "impression",
                                        trigger: "ad"
                                    },
                                    pageview: {
                                        ad: {
                                            slotId: o,
                                            position: n,
                                            timeCalled: Math.round(a.fetchStart - Object(r.a)())
                                        }
                                    }
                                });
                            Object(i.a)(s)
                        }))
                    })).observe({
                        entryTypes: ["resource"]
                    })
                }
            }
        },
        VaBC: function(e, t, n) {
            "use strict";
            var o = n("pVnL"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = n("lwsE"),
                l = n.n(s),
                c = n("W8MJ"),
                d = n.n(c),
                u = n("a1gu"),
                p = n.n(u),
                m = n("Nsbk"),
                f = n.n(m),
                h = n("7W2i"),
                g = n.n(h),
                v = n("q1tI"),
                b = n.n(v),
                y = (n("17x9"), n("UmXO")),
                O = n("X6oL"),
                w = n.n(O),
                x = n("JwCr"),
                k = n.n(x),
                j = n("OO03"),
                M = n("Vc97"),
                P = n("4jtI"),
                S = n("uwQJ"),
                C = n("9+Rx"),
                E = n("u1H9"),
                T = n("06b3"),
                I = n("+mLS"),
                N = n("4Qss"),
                L = (n("SMB2"), n("84bF"), n("R+TL")),
                D = Object(y.css)("display:flex;flex-flow:column;align-items:center;justify-content:space-between;height:100%;box-sizing:border-box;padding:20px 30px;border-radius:6px;background-color:", L.a.color.gray70, ";color:", L.a.color.black, ";", L.a.breakpoint.small, "{flex-flow:row;padding:25px 30px;}", L.a.breakpoint.medium, "{padding:40px;}", L.a.breakpoint.mediumLarge, "{padding:40px 55px;}", L.a.breakpoint.large, "{padding:40px 75px 40px 50px;}", L.a.breakpoint.extraLarge, "{padding:40px 85px 40px 120px;}"),
                A = Object(y.css)("display:block;font-family:", L.a.font.cheltenham, ";font-size:18px;line-height:22px;margin-bottom:12px;", L.a.breakpoint.small, "{font-size:16px;margin-bottom:10px;}", L.a.breakpoint.mediumLarge, "{font-size:18px;}"),
                R = Object(y.css)("width:100%;max-width:472px;font-size:12px;line-height:18px;font-family:", L.a.font.franklin, ";", L.a.breakpoint.mobileLarge, "{margin-top:0;}", L.a.breakpoint.small, "{font-size:11px;line-height:16px;}@media (min-width:700px){font-size:12px;}", L.a.breakpoint.medium, "{max-width:700px;line-height:18px;}", L.a.breakpoint.mediumLarge, "{font-size:14px;line-height:20px;}"),
                H = Object(y.css)("color:", L.a.color.linkColor, ";text-decoration:underline;"),
                B = Object(y.css)("width:100%;", L.a.breakpoint.small, "{display:flex;justify-content:flex-end;width:auto;min-width:90px;margin-left:45px;}"),
                _ = Object(y.css)("display:inline-block;padding:11px 20px 10px;background-color:", L.a.color.gray20, ";border-radius:3px;font-size:14px;line-height:16px;font-family:", L.a.font.franklin, ";font-weight:", L.a.font.weight.bold, ";text-transform:uppercase;color:", L.a.color.white, ";white-space:nowrap;"),
                z = Object(y.css)("display:block;margin-top:10px;", L.a.breakpoint.small, "{display:inline;}"),
                V = a()(k.a, {}, void 0, "recognize your repeat visits and preferences"),
                F = a()(k.a, {}, void 0, "measure the effectiveness of campaigns and analyze traffic"),
                W = function(e) {
                    var t = e.handleGDPRaccept,
                        n = e.closeDock,
                        o = e.tracking,
                        r = e.meterCount;
                    return a()("div", {
                        className: Object(y.cx)(N.a, D)
                    }, void 0, a()("p", {
                        className: R
                    }, void 0, a()("span", {
                        className: A
                    }, void 0, "What do we use cookies for?"), a()("span", {}, void 0, "We use cookies and similar technologies to", " ", V, ", as well as to", " ", F, ". To learn more about cookies, including how to disable them, view our", " ", a()("a", {
                        onClick: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.target,
                                n = void 0 === t ? {} : t,
                                i = n.href,
                                a = void 0 === i ? "" : i,
                                s = n.textContent,
                                l = void 0 === s ? "Cookie Policy" : s;
                            o.trackEvent({
                                event: "moduleInteraction",
                                eventData: {
                                    pagetype: "article",
                                    trigger: "module",
                                    type: "click"
                                },
                                module: {
                                    name: "dock",
                                    context: "expanded",
                                    label: "GDPR",
                                    region: r,
                                    element: {
                                        name: "goto-cookiepolicy",
                                        label: l,
                                        url: a
                                    }
                                }
                            })
                        },
                        className: H,
                        href: "https://nytimes.com/cookie-policy",
                        rel: "noreferrer noopener",
                        target: "_blank"
                    }, void 0, "Cookie Policy"), ".", " "), a()("span", {
                        className: z
                    }, void 0, 'By clicking "I Accept" or "X" on this banner, or using our site, you consent to the use of cookies unless you have disabled them.')), a()("div", {
                        className: B
                    }, void 0, a()("button", {
                        className: _,
                        onClick: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = e.target,
                                a = void 0 === i ? {} : i,
                                s = a.href,
                                l = void 0 === s ? "" : s,
                                c = a.textContent,
                                d = void 0 === c ? "Accept" : c;
                            o.trackEvent({
                                event: "moduleInteraction",
                                eventData: {
                                    pagetype: "article",
                                    trigger: "module",
                                    type: "click"
                                },
                                module: {
                                    name: "dock",
                                    context: "expanded",
                                    label: "GDPR",
                                    region: r,
                                    element: {
                                        name: "accept_GDPR",
                                        label: d,
                                        url: l
                                    }
                                }
                            }), t(), n()
                        },
                        type: "button"
                    }, void 0, "I Accept")))
                };
            W.displayName = "GDPRCard", W.defaultProps = {
                closeDock: function() {},
                meterCount: ""
            };
            var U, X, q, G = W,
                K = Object(y.css)("white-space:nowrap;"),
                Y = a()(k.a, {
                    className: K
                }, void 0, "Review our cookie policy"),
                J = w()()(U = Object(j.a)(U = Object(M.a)((q = X = function(e) {
                    function t() {
                        var e, n;
                        l()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = p()(this, (e = f()(t)).call.apply(e, [this].concat(r)))).onDockCTAClick = function() {
                            n.handleGDPRaccept()
                        }, n.handleGDPRaccept = function() {
                            var e = n.props.user;
                            if (!T.a.load(C.b)) {
                                var t = new Date((new Date).getTime() + 31536e7);
                                if (T.a.save(C.b, "ok", {
                                        expires: t,
                                        path: "/",
                                        domain: ".nytimes.com",
                                        secure: !0,
                                        httpOnly: !1
                                    }), null != e && Object.prototype.hasOwnProperty.call(e, "id")) {
                                    var o = "prd" === vi.env.ENVIRONMENT || void 0 === vi.env.ENVIRONMENT ? "https://myaccount.nytimes.com/svc/auth/v1/user/dnt/set" : "https://myaccount.stg.nytimes.com/svc/auth/v1/user/dnt/set";
                                    fetch(o, {
                                        method: "POST",
                                        credentials: "include",
                                        headers: {
                                            Accept: "*/*",
                                            client_id: "web.fwk.vi"
                                        }
                                    }).catch((function(e) {
                                        I.a.captureException(e, {
                                            gdprError: "Set API Failed"
                                        })
                                    }))
                                }
                            }
                        }, n
                    }
                    return g()(t, e), d()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.tracking,
                                n = e.pageCount,
                                o = Object(E.g)(n),
                                i = {
                                    header1: Y,
                                    header2: "",
                                    headerLink: "https://www.nytimes.com",
                                    headerCTA: "",
                                    dockSize: "mega",
                                    contentID: "gdpr",
                                    card: a()(G, {
                                        handleGDPRaccept: this.handleGDPRaccept,
                                        meterCount: o,
                                        tracking: t
                                    }),
                                    showDock: !0,
                                    isDockDismissible: !0,
                                    dockTheme: S.b,
                                    onDockCTAClick: this.onDockCTAClick,
                                    minimized: !1
                                };
                            return b.a.createElement(P.a, r()({}, this.props, i))
                        }
                    }]), t
                }(v.Component), X.defaultProps = {
                    user: null,
                    pageCount: null
                }, U = q)) || U) || U) || U;
            t.a = J
        },
        W61k: function(e, t) {
            e.exports = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return '(function () { var _f=function(){window.googletag=window.googletag||{},googletag.cmd=googletag.cmd||[];var e=new XMLHttpRequest,t="prd"===window.vi.env.ENVIRONMENT?"als-svc.nytimes.com":"als-svc.dev.nytimes.com",n=document.querySelector(\'[name="nyt_uri"]\'),o=null==n?"":encodeURIComponent(n.content),a=document.querySelector(\'[name="template"]\'),s=document.querySelector(\'[name="prop"]\'),l=document.querySelector(\'[name="plat"]\'),i=null==a||null==a.content?"":a.content,g=null==s||null==s.content?"nyt":s.content,r=null==l||null==l.content?"web":l.content;window.innerWidth<740&&(g="mnyt",r="mweb"),"/"===location.pathname&&(o=encodeURIComponent("https://www.nytimes.com/pages/index.html"));var d=window.localStorage.getItem("als_test_clientside");void 0!==d&&window.googletag.cmd.push(function(){googletag.pubads().setTargeting("als_test_clientside",d)});var c=window.localStorage.getItem("mktg");null!==c&&window.googletag.cmd.push(function(){googletag.pubads().setTargeting("mktg",c)}),e.open("GET","https://"+t+"/als?uri="+o+"&typ="+i+"&prop="+g+"&plat="+r),e.withCredentials=!0,e.send(),e.onreadystatechange=function(){if(4===e.readyState)if(200===e.status){var t=JSON.parse(e.responseText);window.googletag.cmd.push(function(){void 0!==t.als_test_clientside&&(googletag.pubads().setTargeting("als_test_clientside",t.als_test_clientside),window.localStorage.setItem("als_test_clientside","ls-"+t.als_test_clientside)),void 0!==t.User&&void 0!==t.User.marketingValues&&(googletag.pubads().setTargeting("mktg",t.User.marketingValues),window.localStorage.setItem("mktg","ls-"+t.User.marketingValues)),Object.keys(t).forEach(function(e){"User"===e&&void 0!==t[e]&&window.localStorage.setItem("UTS_User",JSON.stringify(t[e]))})})}else{console.error("Error "+e.responseText);(window.dataLayer=window.dataLayer||[]).push({event:"impression",module:{name:"timing",context:"script-load",label:"alsService-als-error"}})}}};;_f.apply(null, '.concat(JSON.stringify(t), "); })();")
            }
        },
        W6mh: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var o = n("Rb+W");

            function r(e, t, n, r) {
                if (e.data.exclusive) {
                    var i;
                    if ("only-child" === e.data.type && n("StopAdCalls", "StopAdCalls", {
                            empty: Object(o.p)(t, e.data.div)
                        }), "family-plan" === e.data.type) t.forEach((function(t) {
                        t.slot.getSlotElementId() === e.data.div && null !== t.slot.getResponseInformation() && (i = t.slot.getResponseInformation().lineItemId)
                    })), void 0 !== i && (t.forEach((function(e) {
                        e.slot.setTargeting("adv", i), e.slot.setTargeting("excl", "family")
                    })), r({
                        adv: i,
                        excl: "family"
                    }));
                    "blank" === e.data.type && e.data.div && n("AdSlotEmpty", "SlotEmpty", e.data.div)
                }
            }
        },
        XMA8: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return r
            })), n.d(t, "g", (function() {
                return i
            })), n.d(t, "a", (function() {
                return s
            })), n.d(t, "j", (function() {
                return l
            })), n.d(t, "l", (function() {
                return c
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "c", (function() {
                return p
            })), n.d(t, "k", (function() {
                return m
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "o", (function() {
                return h
            })), n.d(t, "n", (function() {
                return g
            })), n.d(t, "i", (function() {
                return v
            })), n.d(t, "m", (function() {
                return b
            })), n.d(t, "h", (function() {
                return y
            }));
            n("KKXr"), n("f3/d"), n("dRSK");
            var o = function(e, t) {
                    return e.find((function(e) {
                        return e.name === t
                    }))
                },
                r = function(e, t) {
                    if (!e) return null;
                    for (var n = 0; n < t.length; n += 1) {
                        var r = o(e, t[n]);
                        if (r) {
                            var i = r.url;
                            return "images" === i.split("/")[0] && (r.url = "https://static01.nyt.com/".concat(i)), r.url
                        }
                    }
                    return null
                },
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "crops";
                    return e && e[t] && 0 !== e[t].length && e[t][0].renditions && 0 !== e[t][0].renditions.length ? e[t][0].renditions[0].url : null
                },
                a = "https://static01.nyt.com/newsgraphics/images/icons/defaultCrop.png",
                s = "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
                l = function(e) {
                    return r(e, ["facebookJumbo", "watch308", "videoSixteenByNineJumbo1600", "articleLarge"]) || s
                },
                c = function(e) {
                    return r(e, ["videoSixteenByNineJumbo1600", "articleLarge"]) || a
                },
                d = function(e) {
                    return r(e, ["thumbLarge"]) || a
                },
                u = function(e) {
                    return r(e, ["thumbStandard"]) || a
                },
                p = function e(t) {
                    return t.reduce((function(t, n) {
                        return t.concat(Array.isArray(n) && n.length > 0 ? e(n) : n)
                    }), [])
                },
                m = function(e) {
                    var t, n, o;
                    return e ? e.promoCrops ? e.promoCrops : e.assetCrops ? e.assetCrops : (null === (t = e.promotionalMedia) || void 0 === t ? void 0 : t.assetCrops) ? e.promotionalMedia.assetCrops : (null === (n = e.promotionalMedia) || void 0 === n ? void 0 : null === (o = n.promotionalMedia) || void 0 === o ? void 0 : o.assetCrops) ? e.promotionalMedia.promotionalMedia.assetCrops : null : null
                },
                f = function(e) {
                    if (!e) return "";
                    if (!e.promotionalMedia) return "";
                    var t, n = e.promotionalMedia.crops || e.promotionalMedia.spanImageCrops || null;
                    n || (null === (t = e.promotionalMedia.promotionalMedia) || void 0 === t ? void 0 : t.crops) && (n = e.promotionalMedia.promotionalMedia.crops);
                    if (!n) return "";
                    var o = n.map((function(e) {
                        return e.renditions
                    }));
                    if (!o) return "";
                    var r = p(o);
                    return r || ""
                },
                h = "mobileMasterAt3x",
                g = function(e) {
                    return e.name === h
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (!Array.isArray(e)) return null;
                    var t = e.filter(g);
                    return 0 === t.length ? null : t[0]
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return !(!Array.isArray(e) || 0 === e.length) && (e[0].renditions && (e = p(e.map((function(e) {
                        return e.renditions
                    })))), void 0 === e.find((function(e) {
                        return (null == e ? void 0 : e.width) > 650
                    })) && void 0 === e.find((function(e) {
                        var t;
                        return ".gif" === (null == e ? void 0 : null === (t = e.url) || void 0 === t ? void 0 : t.substring(e.url.length - 4))
                    })))
                },
                y = function(e, t) {
                    var n, o, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = p((null == e ? void 0 : null === (n = e.media) || void 0 === n ? void 0 : null === (o = n.crops) || void 0 === o ? void 0 : o.map((function(e) {
                            return e.renditions
                        }))) || []),
                        a = i.filter((function(e) {
                            return e.name !== h
                        }));
                    return b(a) && "desktop" === t && !r ? "SMALL" : e.size
                }
        },
        "aV/+": function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o),
                i = (n("q1tI"), n("17x9"), n("/giM")),
                a = n("UmXO"),
                s = n("ecgq"),
                l = Object(a.css)("margin-top:100px;margin-bottom:400px;position:relative;"),
                c = Object(a.css)("> div{border:2px solid rgba(100,100,100,1);border-color:rgba(100,100,100,1) transparent transparent;}"),
                d = r()("div", {}),
                u = r()("div", {}),
                p = function(e) {
                    var t = e.fastlyAbraConfig;
                    return Object(s.b)(t) ? r()("div", {
                        className: Object(a.cx)(i.e, l)
                    }, void 0, r()("div", {
                        className: Object(a.cx)(i.f, c)
                    }, void 0, d, u)) : null
                };
            p.displayName = "OceanSpinner", p.defaultProps = {
                fastlyAbraConfig: {}
            }, t.a = p
        },
        b4f6: function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o),
                i = (n("q1tI"), n("GY5D")),
                a = function() {
                    return r()(i.a.Consumer, {}, void 0, (function(e) {
                        (0, e.initMeter)()
                    }))
                };
            a.displayName = "MeterInitializer", t.a = a
        },
        bmDr: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var o = n("gcR/"),
                r = n.n(o),
                i = (n("q1tI"), n("17x9"), r()("path", {
                    d: "M3 40V0l34 20z",
                    fill: "#F7F7F7",
                    fillRule: "evenodd"
                })),
                a = r()("circle", {
                    cx: "20",
                    cy: "20",
                    r: "19",
                    stroke: "#F7F7F7",
                    fill: "transparent",
                    strokeWidth: "2px"
                });

            function s(e) {
                var t = e.size,
                    n = 40,
                    o = 40;
                return "medium" === t ? (n = 30, o = 30) : "small" === t ? (n = 20, o = 20) : "extrasmall" === t && (n = 14, o = 14), r()("svg", {
                    width: o,
                    height: n,
                    viewBox: "0 0 40 40"
                }, void 0, i, "small" !== t && "extrasmall" !== t && a)
            }
            s.displayName = "PlayButton", s.defaultProps = {
                size: "medium"
            }
        },
        bzYf: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            }));
            var o = "\n  if (typeof testCookie === 'undefined') {\n    var testCookie = function (name) {\n      var match = document.cookie.match(new RegExp(name + '=([^;]+)'));\n      if (match) return match[1];\n    }\n  }\n",
                r = "\n  function placeGpt() {\n    var purrCookie = testCookie('nyt-purr');\n    if (purrCookie && purrCookie.substring(1, 2) === 's') return;\n    if (testCookie('nyt-gdpr') !== '1') {\n      var gptScript = document.createElement('script');\n      gptScript.async = 'async';\n      gptScript.src = '//securepubads.g.doubleclick.net/tag/js/gpt.js';\n      document.head.appendChild(gptScript);\n    }\n  }\n  placeGpt();\n",
                i = "\n  var googletag = googletag || {};\n  googletag.cmd = googletag.cmd || [];\n\n  if (testCookie('nyt-gdpr') == '1') {\n    googletag.cmd.push(function() {\n      googletag.pubads().setRequestNonPersonalizedAds(1);\n    });\n  }"
        },
        cymk: function(e, t, n) {
            "use strict";
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var o = n("lSNA"),
                r = n.n(o);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            t.a = function(e) {
                var t, n, o;
                return (null == e ? void 0 : null === (t = e.blockFirstLoad) || void 0 === t ? void 0 : t.totalCount) && (null == e ? void 0 : null === (n = e.blockFirstLoad) || void 0 === n ? void 0 : null === (o = n.edges) || void 0 === o ? void 0 : o.length) ? e.blockFirstLoad.edges.filter((function(e) {
                    return e && e.node
                })).map((function(e) {
                    var t = e.node,
                        n = e.trackingParams;
                    return n ? function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? i(n, !0).forEach((function(t) {
                                r()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, t, {
                        trackingParams: n
                    }) : t
                })) : []
            }
        },
        d8k4: function(e, t, n) {
            "use strict";
            var o = n("VkAN"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = (n("q1tI"), n("17x9")),
                l = n.n(s),
                c = n("Dugd"),
                d = n.n(c),
                u = n("ZKN5"),
                p = n("iRoE"),
                m = n("rjlW");

            function f() {
                var e = r()(["\n    fragment EmbeddedInteractive_media on EmbeddedInteractive {\n      slug\n      html\n      compatibility\n      ...EmbeddedInline_media\n      ...EmbeddedIframe_media\n    }\n    ", "\n    ", "\n  "]);
                return f = function() {
                    return e
                }, e
            }
            var h = /^<iframe[^>]+>\s*<\/iframe>\s*$/;

            function g(e) {
                var t, n, o = e.media,
                    r = e.styles,
                    i = e.inStory,
                    s = e.blockSize,
                    l = e.embeddedClass,
                    c = e.manageScripts,
                    d = e.locksmith;
                if (!o || !o.html) return null;
                if (0 === (null == o ? void 0 : null === (t = o.slug) || void 0 === t ? void 0 : t.toLowerCase().indexOf("newsletter-signup-"))) return null;
                if (h.test(o.html)) {
                    return a()("div", {
                        className: r,
                        style: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        dangerouslySetInnerHTML: {
                            __html: o.html
                        }
                    })
                }
                return o.compatibility && "nyt5" !== o.compatibility.toLowerCase() ? "inline" === (null === (n = o.compatibility) || void 0 === n ? void 0 : n.toLowerCase()) ? a()(m.a, {
                    embeddedClass: l,
                    media: o,
                    blockSize: s,
                    inStory: i,
                    manageScripts: c,
                    locksmith: d
                }) : a()(p.a, {
                    styles: r,
                    asset: o,
                    inStory: i,
                    blockSize: s
                }) : a()(p.a, {
                    asset: o,
                    styles: r,
                    inStory: i,
                    blockSize: s
                })
            }
            g.displayName = "EmbeddedInteractive", g.defaultProps = {
                styles: void 0,
                embeddedClass: void 0,
                inStory: !1,
                manageScripts: !1,
                locksmith: l.a.shape({})
            }, g.fragments = {
                media: d()(f(), m.a.fragments.media, p.a.fragments.media)
            }, t.a = Object(u.a)(g)
        },
        f6wl: function(e, t) {
            e.exports = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return '(function () { var _f=function(e){var t=performance.navigation&&1===performance.navigation.type;function o(){return window.matchMedia("(max-width: 739px)").matches}function n(e){var n,r,i,d,a,p,u=function(){var e=window.userXhrObject&&""!==window.userXhrObject.responseText&&JSON.parse(window.userXhrObject.responseText).data||null,t=null;return e&&e.user&&e.user.userInfo&&(t=e.user.userInfo.demographics),t}();return u?(r=e,d=(n=u)&&n.emailSubscriptions,(a=n&&n.bundleSubscriptions)&&r&&(r.sub="reg",d&&d.length&&(r.em=d.toString().toLowerCase()),n.wat&&(r.wat=n.wat.toLowerCase()),a&&a.length&&a[0].bundle&&(i=a[0],r.sub=i.bundle.toLowerCase(),i.source&&(r.subsrc=i.source.toLowerCase()),i.promotion&&(r.subprm=i.promotion),i.in_grace&&(r.grace=i.in_grace.toString()))),e=r):e.sub="anon",o()?(e.prop="mnyt",e.plat="mweb",e.ver="mvi"):(e.prop="nyt",e.plat="web",e.ver="vi"),"/es/"===window.location.pathname.substring(0,4)&&(e.prop="esnyt",e.edn="es",o()&&(e.prop="mesnyt")),"hp"===e.typ&&(document.referrer&&(e.topref=document.referrer),t&&(e.refresh="manual")),e.abra_dfp=(p=document.documentElement.getAttribute("data-nyt-ab"))?p.split(" ").reduce(function(e,t){var o=t.split("="),n=o[0].toLowerCase(),r=o[1];return(n.indexOf("dfp")>-1||n.indexOf("redbird")>-1)&&e.push(n+"_"+r),e},[]):"",e.page_view_id=window.NYTD.PageViewId&&window.NYTD.PageViewId.current,e}var r=e||{},i=r.adTargeting||{},d=r.adUnitPath||"/29390238/nyt/homepage",a=r.offset||400,p=r.hideTopAd||o(),u=r.lockdownAds||!1,s=r.sizeMapping||{top:[[970,["fluid",[728,90],[970,90],[970,250],[1605,300]]],[728,["fluid",[728,90],[1605,300]]],[0,["fluid",[300,250],[300,420]]]],fp1:[[0,[195,250]]],fp2:[[0,[195,250]]],fp3:[[0,[195,250]]],interstitial:[[0,[[1,1],[640,480]]]],mktg:[[1020,[300,250]],[0,[]]],pencil:[[728,[[336,46]],[0,[]]]],pp_edpick:[[0,["fluid"]]],pp_morein:[[0,["fluid"],[210,218]]],ribbon:[[0,["fluid"]]],sponsor:[[765,[150,50]],[0,[320,25]]],supplemental:[[1020,[[300,250],[300,600]]],[0,[]]],default:[[970,["fluid",[728,90],[970,90],[970,250],[1605,300]]],[728,["fluid",[728,90],[300,250],[1605,300]]],[0,["fluid",[300,250],[300,420]]]],chat:["fluid",[300,250],[300,420]]},l=r.dfpToggleName||"dfp_home_toggle",w=r.lazyApi||{};window.AdSlot4=window.AdSlot4||{},window.AdSlot4.cmd=window.AdSlot4.cmd||[],window.AdSlot4.cmd.push(function(){window.AdSlot4.init({adTargeting:n(i),adUnitPath:d,sizeMapping:s,offset:a,haltDFP:"1_block"===window.NYTD.Abra(l),hideTopAd:p,lockdownAds:u,lazyApi:w}),window.NYTD.Abra.reportExposure("dfp_adslot4v2")})};;_f.apply(null, '.concat(JSON.stringify(t), "); })();")
            }
        },
        hG4R: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return h
            }));
            var o = n("VkAN"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = (n("f3/d"), n("dRSK"), n("q1tI"), n("17x9")),
                l = n.n(s),
                c = n("Dugd"),
                d = n.n(c),
                u = n("KQYy"),
                p = n("B2Q+");

            function m() {
                var e = r()(['\n    fragment SpanImage_media on Image {\n      caption {\n        text @stripHtml\n      }\n      spanImageCrops: crops(\n        renditionNames: [\n          "videoLarge"\n          "largeHorizontalJumbo"\n          "articleLarge"\n          "master1050"\n          "square640"\n          "thumbLarge"\n          "threeByTwoSmallAt2X"\n          "threeByTwoMediumAt2X"\n          "threeByTwoLargeAt2X"\n        ]\n      ) {\n        renditions {\n          name\n          url\n          width\n          height\n        }\n      }\n    }\n  ']);
                return m = function() {
                    return e
                }, e
            }
            var f = {
                    threeByTwoLargeAt2X: {
                        initial: 1080,
                        safe: [600, 1100, 1620]
                    },
                    threeByTwoMediumAt2X: {
                        initial: 1080,
                        safe: [600, 1100]
                    },
                    threeByTwoSmallAt2X: {
                        initial: 400,
                        safe: [400]
                    },
                    largeHorizontalJumbo: {
                        initial: 719,
                        safe: [700]
                    },
                    square640: {
                        initial: 218,
                        safe: [350]
                    }
                },
                h = function(e, t, n) {
                    if (!(e && (e.spanImageCrops && e.spanImageCrops.length || e.crops && e.crops.length))) return null;
                    var o;
                    if (!(o = e.spanImageCrops ? e.spanImageCrops.reduce((function(e, t) {
                            return e.concat(t.renditions)
                        }), []) : e.crops.reduce((function(e, t) {
                            return e.concat(t.renditions)
                        }), [])).length) return null;
                    var r = Array.isArray(n) ? n : [n],
                        i = t || r.find((function(e) {
                            return o.find((function(t) {
                                return t.name === e
                            }))
                        }));
                    return o.find((function(e) {
                        return e.name === i
                    })) || o[0]
                },
                g = function(e, t) {
                    var n = e.caption,
                        o = e.media,
                        r = e.preferredCrop,
                        i = e.crop,
                        s = e.metadataOptOut,
                        l = t.lazy,
                        c = h(o, r, i);
                    if (!c) return null;
                    var d = c.height,
                        m = c.width,
                        g = {
                            src: c.url,
                            alt: n
                        },
                        v = f[c.name] ? f[c.name] : null,
                        b = v ? v.safe : null,
                        y = v ? v.initial : null,
                        O = m / d,
                        w = Object(p.a)();
                    return a()(u.a, {
                        lazy: l,
                        imageProps: g,
                        initialAspectRatio: O,
                        initialImageWidth: y,
                        safeWidths: b,
                        metadataOptOut: s,
                        rootMargin: "smartphone" === w ? 200 : 400
                    })
                };
            g.displayName = "SpanImage", g.defaultProps = {
                preferredCrop: "threeByTwoLargeAt2X",
                crop: "threeByTwoLargeAt2X",
                metadataOptOut: !1,
                caption: ""
            }, g.contextTypes = {
                lazy: l.a.bool
            }, g.fragments = {
                media: d()(m())
            }, t.a = g
        },
        hXAx: function(e, t, n) {
            "use strict";
            var o = n("VkAN"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = (n("a1Th"), n("Btvt"), n("q1tI"), n("17x9"), n("Dugd")),
                l = n.n(s),
                c = n("FOj+"),
                d = n.n(c),
                u = n("UmXO"),
                p = n("3NoI"),
                m = n.n(p),
                f = n("wXC7"),
                h = n.n(f),
                g = h.a.breakpoint,
                v = h.a.color,
                b = h.a.font,
                y = function(e) {
                    return Object(u.css)("font-family:", b.imperial, ";font-size:", b.size(16), ";line-height:", b.size(22), ";font-style:normal;letter-spacing:0.1px;color:", v.gray27, ";transition:color 0.6s ease;position:relative;", e.centered && "\n    text-align: center;\n  ", ";", e.isBriefing && "\n    font-size: ".concat(b.size(14), ";\n    line-height: ").concat(b.size(18), ";\n    font-family: ").concat(b.franklinBase, ";\n    font-weight: ").concat(b.weight.medium, ";\n    letter-spacing: 0.2px;\n  "), ";", g.medium, "{font-size:", b.size(14), ";line-height:", b.size(19), ";", e.isBriefing && "\n      font-size: ".concat(b.size(13), ";\n      line-height: ").concat(b.size(15), ";\n    "), ";}", g.mediumLarge, "{", e.isBriefing && "\n      font-size: ".concat(b.size(13), ";\n      line-height: ").concat(b.size(15), ";\n      color: ").concat(v.gray27, ";\n    "), ";", !e.supportsTouch && ".assetWrapper:hover & {\n        color: ".concat(v.gray30, ";\n      }\n    "), ";}")
                },
                O = m()("p", {
                    target: "e1n8kpyg0"
                })(y, ";"),
                w = m()("ul", {
                    target: "e1n8kpyg1"
                })(y, ";li{margin-top:6px;position:relative;font-family:", b.imperial, ";font-size:", b.size(16), ";line-height:", b.size(22), ";&::before{width:3px;height:3px;border-radius:50%;left:-8px;top:7px;content:'';display:block;background:", v.gray30, ";position:absolute;}&:first-child{margin-top:0;}", g.medium, "{font-size:", b.size(14), ";line-height:", b.size(19), ";&::before{top:7px;}}}}");

            function x() {
                var e = r()(["\n    fragment AssetContent_asset on HasPromotionalProperties {\n      promotionalSummary\n      promotionalBullets\n    }\n  "]);
                return x = function() {
                    return e
                }, e
            }
            var k = function(e) {
                var t = e.asset,
                    n = e.showBullets,
                    o = e.centered,
                    r = e.isBriefing,
                    i = e.supportsTouch,
                    s = e.balanced;
                return n && ("BULLET" === t.cardType || "URGENT" === t.cardType) && t.promotionalBullets.length ? a()(w, {
                    supportsTouch: i
                }, void 0, t.promotionalBullets.map((function(e, t) {
                    return e ? a()("li", {}, "bullet".concat(t.toString()), e) : null
                }))) : a()(O, {
                    centered: o,
                    isBriefing: r,
                    supportsTouch: i
                }, void 0, s ? a()(d.a, {}, void 0, t.promotionalSummary) : t.promotionalSummary)
            };
            k.defaultProps = {
                showBullets: !1,
                centered: !1,
                isBriefing: !1,
                supportsTouch: !1,
                balanced: !1
            }, k.fragments = {
                asset: l()(x())
            };
            t.a = k
        },
        iRoE: function(e, t, n) {
            "use strict";
            var o = {};
            n.r(o), n.d(o, "embedded", (function() {
                return L
            })), n.d(o, "hasBorders", (function() {
                return D
            })), n.d(o, "MEDIUM", (function() {
                return A
            }));
            var r, i = n("VkAN"),
                a = n.n(i),
                s = n("gcR/"),
                l = n.n(s),
                c = n("lSNA"),
                d = n.n(c),
                u = n("lwsE"),
                p = n.n(u),
                m = n("W8MJ"),
                f = n.n(m),
                h = n("a1gu"),
                g = n.n(h),
                v = n("Nsbk"),
                b = n.n(v),
                y = n("7W2i"),
                O = n.n(y),
                w = (n("SRfc"), n("OG14"), n("q1tI")),
                x = (n("17x9"), n("QS0n")),
                k = n("Dugd"),
                j = n.n(k),
                M = n("UmXO"),
                P = n("41jq"),
                S = n("cr+I"),
                C = n.n(S),
                E = n("mczz"),
                T = n("O7Jj"),
                I = (n("84bF"), n("wXC7")),
                N = n.n(I),
                L = Object(M.css)("display:block;margin:0 auto;line-height:0;"),
                D = Object(M.css)("border-top:1px solid ", N.a.color.gray60, ";border-bottom:1px solid ", N.a.color.gray60, ";"),
                A = Object(M.css)("width:", N.a.breakpoint.mobileFullWidth, ";max-width:", N.a.breakpoint.textBodyWidth, "px;margin-left:", N.a.grid.pageMargin, "px;margin-right:", N.a.grid.pageMargin, "px;@media (max-width:340px){width:calc(100% - 20px);}", N.a.breakpoint.small, "{margin-left:auto;margin-right:auto;}", N.a.breakpoint.mediumLarge, "{width:", N.a.breakpoint.textBodyWidth, "px;margin-left:0;}", N.a.breakpoint.extraLarge, "{width:", N.a.breakpoint.textBodyWidthExtralarge, "px;max-width:", N.a.breakpoint.textBodyWidthExtralarge, "px;}");

            function R() {
                var e = a()(["\n    fragment EmbeddedIframe_media on CreativeWork {\n      headline {\n        default\n      }\n      displayProperties {\n        displayForPromotionOnly\n        maxWidth: maximumWidth\n      }\n      ... on Interactive {\n        slug\n      }\n      ... on EmbeddedInteractive {\n        slug\n      }\n      ... on Published {\n        sourceId\n        uri\n      }\n    }\n  "]);
                return R = function() {
                    return e
                }, e
            }
            var H = (new Date).getFullYear(),
                B = Object(P.withTheme)(r = Object(x.withRouter)(r = function(e) {
                    function t() {
                        return p()(this, t), g()(this, b()(t).apply(this, arguments))
                    }
                    return O()(t, e), f()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.asset,
                                n = e.styles,
                                r = e.inStory,
                                i = e.location,
                                a = e.theme;
                            if (!t.sourceId) return null;
                            window.location.hostname.match(/\.nytimes\.com/) && (document.domain = "nytimes.com");
                            var s = "",
                                c = "/interactive/".concat(H, "/admin/").concat(t.sourceId, ".embedded.html"),
                                u = "https://www.nytimes.com",
                                p = {},
                                m = Object(E.d)(i, "GQL_HOST");
                            if ("test" === vi.env.ENVIRONMENT && (u = "https://www.stg.nytimes.com"), ("local" === vi.env.ENVIRONMENT || "dev" === vi.env.ENVIRONMENT || /-sbx$/.test(vi.env.ENVIRONMENT)) && (u = "", m && "" !== m && (p.GQL_HOST = m)), function(e) {
                                    var t = C.a.parse(e.search);
                                    return !(!t || void 0 === t.scooppreview) || !!window.location.search.match(/scooppreview/)
                                }(i)) {
                                switch (s = "/resources/app/url/proxy/html?url=", vi.env.ENVIRONMENT) {
                                    case "preview-development":
                                        u = "http://alpha-preview.dev.nytimes.com";
                                        break;
                                    case "preview-staging":
                                        u = "http://alpha-preview.stg.nytimes.com";
                                        break;
                                    default:
                                        u = "http://alpha-preview.nytimes.com"
                                }
                                u = encodeURIComponent(u), c = encodeURIComponent(c), p.contentUri = encodeURIComponent(t.uri)
                            }
                            var f = "?".concat(C.a.stringify(p)),
                                h = t.displayProperties,
                                g = (void 0 === h ? {} : h).maxWidth || 0,
                                v = t.headline && !(t.displayProperties && t.displayProperties.displayForPromotionOnly),
                                b = r && v && !1,
                                y = {
                                    maxWidth: "100%",
                                    margin: "0 auto"
                                },
                                O = {
                                    maxWidth: g
                                };
                            return l()("div", {
                                style: y,
                                className: Object(M.cx)(o[a.tone])
                            }, void 0, l()("div", {
                                "data-id": t.sourceId,
                                "data-slug": t.slug,
                                className: Object(M.cx)(L, d()({}, D, b), n),
                                style: O
                            }, void 0, l()(T.a, {
                                src: "".concat(s).concat(u).concat(c).concat(f)
                            })))
                        }
                    }]), t
                }(w.Component)) || r) || r;
            B.defaultProps = {
                styles: "",
                inStory: !1,
                theme: {},
                location: {}
            }, B.fragments = {
                media: j()(R())
            }, B.displayName = "EmbeddedIframe";
            t.a = B
        },
        icq2: function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o);
            n("bHtr"), n("q1tI"), n("17x9");

            function i(e) {
                var t, n = e.className,
                    o = e.fill,
                    i = e.direction;
                return "up" === i && (t = "rotate(-90 3.5 6.5)"), "down" === i && (t = "rotate(90 3.5 6.5)"), r()("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 9 16",
                    version: "1.1",
                    className: n
                }, void 0, r()("g", {
                    id: "Canvas",
                    transform: "translate(-8250 -1500)"
                }, void 0, r()("g", {
                    id: "Vector"
                }, void 0, r()("use", {
                    xlinkHref: "#path0_stroke",
                    transform: "translate(8251 1501.5)",
                    fill: o
                }))), r()("defs", {}, void 0, r()("path", {
                    id: "path0_stroke",
                    d: "M 6.5 6.5L 7.20711 7.20711L 7.91421 6.5L 7.20711 5.79289L 6.5 6.5ZM -0.707107 0.707107L 5.79289 7.20711L 7.20711 5.79289L 0.707107 -0.707107L -0.707107 0.707107ZM 5.79289 5.79289L -0.707107 12.2929L 0.707107 13.7071L 7.20711 7.20711L 5.79289 5.79289Z",
                    transform: t
                })))
            }
            i.displayName = "Caret", i.defaultProps = {
                className: void 0,
                fill: "#111",
                direction: "right"
            }, t.a = i
        },
        iiJN: function(e, t, n) {
            "use strict";
            n("Vd3H");
            var o = n("gcR/"),
                r = n.n(o),
                i = n("q1tI"),
                a = n.n(i),
                s = n("17x9"),
                l = n.n(s),
                c = (n("TVP6"), n("SMB2"), n("UmXO")),
                d = n("3NoI"),
                u = n.n(d),
                p = n("wXC7"),
                m = n.n(p),
                f = m.a.breakpoint,
                h = m.a.color,
                g = m.a.font,
                v = ";& > *{padding:0 15px;height:100%;}&:first-child{flex-basis:",
                b = "px;& > *{padding:0 15px 0 0;}}&:last-child{flex-basis:",
                y = "px;& > *{padding:0 0 0 15px;}}&:only-child{flex-basis:0;& > *{padding:0;}}",
                O = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Object(c.css)("flex-basis:", 31 + 15.5 * t, "px;width:100%;", e && "\n    border-left: 1px solid ".concat(h.gray60, ";\n\n    &:first-child {\n      border-left: 0;\n    }\n  "), v, 15.5 + 15.5 * t, b, 15.5 + 15.5 * t, y)
                },
                w = u()("div", {
                    target: "eqveam60"
                })((function(e) {
                    return e.columns && function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        return (Object(c.css)("flex:", e, " ", e, ";min-height:0;min-width:0;"))
                    }(e.columns)
                }), ";", (function(e) {
                    return !e.noVerticalBorder && O(!0, 2 * (e.columns - 1))
                }), ";", (function(e) {
                    return !e.noVerticalBorder && e.noBorderLeft && "border: none;"
                }), ";", (function(e) {
                    return e.noVerticalBorder && O(!1, 2 * (e.columns - 1))
                }), ";", f.medium, "{", (function(e) {
                    return 1 !== e.columns && "\n      & > *:last-child {\n        padding-bottom: 0;\n      }\n    "
                }), ";& > *:last-child{margin-bottom:0;padding-bottom:0;}}", f.large, "{", (function(e) {
                    return 1 === e.columns && e.noVerticalBorder && "\n      &:first-child {\n        padding-right: 0;\n        flex-basis: 15px;\n      }\n    "
                }), ";}"),
                x = u()("div", {
                    target: "eqveam61"
                })((function(e) {
                    return e.noPadding && "padding: 0 !important;"
                }), ";", (function(e) {
                    return e.noPaddingRight && "padding-right: 0 !important;"
                }), ";", (function(e) {
                    return e.importantPaddingRight && "padding-right: 15px !important;"
                }), ";", (function(e) {
                    return e.noPaddingLeft && "padding-left: 0 !important;"
                }), ";", (function(e) {
                    return e.verticallyCentered && "\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  "
                }), ";"),
                k = u()("div", {
                    target: "eqveam62"
                })("border-bottom:0;", (function(e) {
                    return !e.noBorder && "border-bottom: 1px solid ".concat(h.gray60)
                }), ";& > *{", (function(e) {
                    return !e.narrowBottomBorder && !e.narrowBorder && !e.noBorder && "border-bottom: 1px solid ".concat(h.gray60, ";")
                }), ";", (function(e) {
                    return e.narrowBorder && "\n        &:after {\n          content: '';\n          border-bottom: 1px solid ".concat(h.gray60, ";\n          margin: 0 25px;\n          position: absolute;\n          left: 0;\n          width: calc(100% - 50px);\n        }\n\n        ").concat(!e.narrowBottomBorder && "\n        &:last-child:after {\n          margin: 0;\n          width: 100%;\n        }", ";\n      ")
                }), ";}&:last-child,& > *:last-child{border-bottom:0;}", f.medium, "{padding-bottom:10px;margin-bottom:14px;& > *{padding-bottom:14px !important;margin-bottom:14px !important;}&:last-child,& > *:last-child{margin-bottom:0 !important;padding-bottom:0 !important;}}"),
                j = u()("div", {
                    target: "eqveam63"
                })("position:relative;display:flex;", (function(e) {
                    return e.noPadding && "\n    padding: 0;\n    margin: 0;\n  "
                }), ";"),
                M = u()("div", {
                    target: "eqveam64"
                })("padding:17px 25px 13px;background-color:", h.white, ";position:sticky;top:0;z-index:100000000;border-top:1px solid ", h.gray10, ";border-bottom:1px solid ", h.gray60, ";h3{font-size:", g.size(13), ";line-height:", g.size(13), ";text-transform:uppercase;font-family:", g.franklin, ";font-weight:", g.weight.bold, ";letter-spacing:0.8px;color:", h.gray10, ";}", f.medium, "{position:static;padding:0;margin-top:-10px;background-color:inherit;border-top:0;border-bottom:0;h3{font-size:", g.size(10), ";line-height:", g.size(10), ";min-height:22px;letter-spacing:0.7px;}}");
            n.d(t, "c", (function() {
                return P
            })), n.d(t, "a", (function() {
                return S
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "d", (function() {
                return E
            })), n.d(t, "e", (function() {
                return T
            })), n.d(t, "g", (function() {
                return I
            })), n.d(t, "f", (function() {
                return N
            })), n.d(t, "h", (function() {
                return L
            }));
            var P = function(e) {
                var t = e.children,
                    n = e.assetProps,
                    o = e.noBorder,
                    s = e.narrowBorder,
                    l = e.narrowBottomBorder,
                    c = i.Children.map(t, (function(e) {
                        return e ? "Asset" === e.type.displayName ? a.a.cloneElement(e, n) : e : null
                    }));
                return r()(k, {
                    noBorder: o,
                    narrowBorder: s,
                    narrowBottomBorder: l
                }, void 0, c)
            };
            P.displayName = "List", P.defaultProps = {
                children: null,
                assetProps: {},
                noBorder: !1,
                narrowBorder: !1,
                narrowBottomBorder: !1
            };
            var S = function(e) {
                var t = e.children,
                    n = e.columns,
                    o = e.noVerticalBorder,
                    i = e.noPadding,
                    a = e.noPaddingRight,
                    s = e.importantPaddingRight,
                    l = e.noPaddingLeft,
                    c = e.noBorderLeft,
                    d = e.verticallyCentered;
                return r()(w, {
                    columns: n,
                    noVerticalBorder: o,
                    noBorderLeft: c
                }, void 0, r()(x, {
                    noPadding: i,
                    noPaddingRight: a,
                    importantPaddingRight: s,
                    noPaddingLeft: l,
                    verticallyCentered: d
                }, void 0, t))
            };
            S.displayName = "Column", S.defaultProps = {
                children: null,
                noVerticalBorder: !1,
                noPadding: !1,
                noPaddingRight: !1,
                importantPaddingRight: !1,
                noPaddingLeft: !1,
                noBorderLeft: !1,
                verticallyCentered: !1
            };
            var C = function(e) {
                var t = e.children,
                    n = e.noPadding;
                return r()(j, {
                    noPadding: n
                }, void 0, t)
            };
            C.displayName = "FlexContainer", C.defaultProps = {
                noPadding: !1
            };
            var E = function(e) {
                var t = e.label;
                return t ? r()(M, {}, void 0, r()("h3", {}, void 0, t)) : null
            };
            E.defaultProps = {
                label: ""
            }, E.contextTypes = {
                blockId: l.a.string
            };
            var T = function(e) {
                    return "MEDIUM" === e.promotionalMediaEmphasis ? "threeByTwoSmallAt2X" : "threeByTwoMediumAt2X"
                },
                I = function(e, t) {
                    var n;
                    return "Video" === (null === (n = t.assets[e]) || void 0 === n ? void 0 : n.__typename)
                },
                N = function(e) {
                    return "URGENT" === e.props.asset.cardType
                },
                L = function(e) {
                    return e.reduce((function(e, t) {
                        return e.concat([t.displayFields.concat().sort().join()])
                    }), []).join(" ")
                }
        },
        j1S3: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var o = n("qs2k");

            function r() {
                var e;
                return (null === o.f || void 0 === o.f ? void 0 : null === (e = o.f.timing) || void 0 === e ? void 0 : e.responseStart) ? o.f.timing.responseStart : null
            }
        },
        jVh7: function(e, t, n) {
            "use strict";
            var o = n("VkAN"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = n("lSNA"),
                l = n.n(s),
                c = (n("q1tI"), n("Dugd")),
                d = n.n(c),
                u = n("17x9"),
                p = n.n(u),
                m = n("UmXO"),
                f = n("KQYy"),
                h = n("nKgM"),
                g = n("wXC7"),
                v = n.n(g).a.breakpoint,
                b = Object(m.css)("float:right;margin-top:0;margin-left:15px;", v.medium, "{margin-top:-2px;}"),
                y = Object(m.css)("float:left;margin-right:8px;margin-top:-3px;", v.medium, "{margin-top:-2px;}"),
                O = Object(m.css)("width:45px;max-width:45px;height:45px;max-height:45px;border-radius:20px;overflow:hidden;", v.medium, "{width:36px;max-width:36px;height:36px;max-height:36px;border-radius:18px;}");

            function w() {
                var e = r()(['\n    fragment AssetAuthorImage_card on AuthorCard {\n      creators {\n        ... on TimesTag {\n          displayName\n          promotionalMedia {\n            ... on Image {\n              authorCrops: crops(renditionNames: "thumbLarge") {\n                renditions {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ']);
                return w = function() {
                    return e
                }, e
            }
            var x = function(e, t) {
                var n, o = e.asset,
                    r = e.hideHeadshot,
                    i = t.lazy,
                    s = t.blockId,
                    c = Object(h.a)(o);
                return c && !r ? a()("div", {
                    className: Object(m.cx)(O, (n = {}, l()(n, b, "opinion" === s), l()(n, y, "opinion" !== s), n))
                }, void 0, a()(f.a, {
                    lazy: i,
                    alt: c.alt,
                    initialAspectRatio: 1,
                    initialImageWidth: 60,
                    imageProps: {
                        src: c.src
                    },
                    metadataOptOut: !0
                })) : null
            };
            x.contextTypes = {
                lazy: p.a.bool,
                blockId: p.a.string
            }, x.defaultProps = {
                asset: null,
                hideHeadshot: !1
            }, x.fragments = {
                card: d()(w())
            };
            t.a = x
        },
        kd6s: function(e, t, n) {
            "use strict";
            n("f3/d");
            var o = n("pVnL"),
                r = n.n(o),
                i = n("q1tI"),
                a = n.n(i),
                s = n("17x9"),
                l = n.n(s);
            t.a = function(e) {
                var t = function(t, n) {
                    var o = n.adReq;
                    return a.a.createElement(e, r()({
                        adReq: o
                    }, t))
                };
                t.contextTypes = {
                    adReq: l.a.shape().isRequired
                };
                var n = e.displayName || e.name || "Component";
                return t.displayName = "WithAdReq(".concat(n, ")"), t
            }
        },
        ktkx: function(e, t, n) {
            "use strict";
            n("a1Th"), n("Btvt");
            var o = n("VkAN"),
                r = n.n(o),
                i = (n("Zz4T"), n("Dugd")),
                a = n.n(i),
                s = n("06b3"),
                l = n("Lkij"),
                c = n("E00O"),
                d = n("B2Q+"),
                u = function() {
                    return window.matchMedia("(min-width: ".concat(c.a.BREAKPOINT_ML, "px)")).matches ? "desktop" : Object(d.a)()
                },
                p = n("mczz"),
                m = n("0O4q"),
                f = n("Rb+W");

            function h() {
                var e = r()(['\n    fragment getTargetingParams_data on WorkOrLocation {\n      ... on RelocatedWork {\n        targetUrl\n      }\n      ... on CreativeWork {\n        adTargetingParams(clientAdParams: { edn: "us", plat: "web", prop: "nyt" }) {\n          key\n          value\n        }\n        ...getAdLibraryFallback_data\n        ...getCollections_collections\n        ...getNewsKeywords_keywords\n      }\n    }\n    ', "\n    ", "\n    ", "\n  "]);
                return h = function() {
                    return e
                }, e
            }

            function g() {
                return Object(l.c)("vi-ads-sandbox", "1")
            }

            function v(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                if (!e) return t;
                var o = e.targetUrl,
                    r = e.timesTags,
                    i = e.collections,
                    a = e.adTargetingParams,
                    s = u() || "smartphone",
                    l = n || Object(f.t)(s);
                return o ? t : (a ? t = Object(f.x)(a, l, t) : (t = Object(f.d)(t, e, l), r && (t = Object(f.k)(r, t)), i && (t = Object(f.h)(i, t))), t)
            }

            function b(e, t) {
                var n, o, r = t.tracking,
                    i = t.getPageviewId,
                    a = t.getReferrer,
                    l = u() || "smartphone",
                    c = Object(f.e)(s.a),
                    d = r ? function(e) {
                        var t = e.getTrackingData;
                        return "function" == typeof t ? t() : null
                    }(r) : null,
                    h = Object(f.f)(s.a),
                    g = Object(p.c)(),
                    v = Object(m.b)(),
                    b = {
                        ver: Object(f.s)(l),
                        sov: Object(f.q)(),
                        sub: "anon",
                        vp: Object(f.t)(l),
                        test: "projectvi",
                        ref: Object(f.l)(),
                        refdom: Object(f.m)(),
                        abra_dfp: Object(f.c)(),
                        "gpt-beta": "vqwdtftx"
                    };
                return g && (o = Object(p.d)(g, "ad-keywords")), i && (b.page_view_id = i()), a && (b.topref = a()), "1" === Object(f.i)(s.a) && (b.gdprUser = !0), "out" === (null == c ? void 0 : c.toString().toLowerCase()) && (b.noTracking = !0), (null == d ? void 0 : null === (n = d.interaction) || void 0 === n ? void 0 : n.page) && (b.page = d.interaction.page), h && (b.aid = h), o && (b.adv = o), v && (b = Object(f.r)(v, b)), b = function(e, t) {
                    var n;
                    if ((null == e ? void 0 : null === (n = e.demographics) || void 0 === n ? void 0 : n.bundle_subscriptions) && Array.isArray(e.demographics.bundle_subscriptions) && e.demographics.bundle_subscriptions.length >= 1) {
                        var o = e.demographics.bundle_subscriptions[0];
                        o.bundle && (t.sub = o.bundle), o.source && (t.subsrc = o.source)
                    }
                    return t
                }(v, b), "smartphone" === l ? Object(f.w)(b) : Object(f.b)(b)
            }
            n.d(t, "c", (function() {
                return g
            })), n.d(t, "b", (function() {
                return v
            })), n.d(t, "a", (function() {
                return b
            })), v.fragments = {
                data: a()(h(), f.d.fragments.data, f.h.fragments.collections, f.k.fragments.keywords)
            }
        },
        mPJI: function(e, t, n) {
            "use strict";
            var o, r, i, a, s, l = n("VkAN"),
                c = n.n(l),
                d = n("gcR/"),
                u = n.n(d),
                p = n("lwsE"),
                m = n.n(p),
                f = n("W8MJ"),
                h = n.n(f),
                g = n("a1gu"),
                v = n.n(g),
                b = n("Nsbk"),
                y = n.n(b),
                O = n("7W2i"),
                w = n.n(O),
                x = (n("pIFo"), n("q1tI")),
                k = n("17x9"),
                j = n.n(k),
                M = n("Dugd"),
                P = n.n(M),
                S = n("X6oL"),
                C = n.n(S),
                E = n("0Pd7"),
                T = n("ZKN5"),
                I = n("uyXp"),
                N = n("/Ghh"),
                L = function(e) {
                    return {
                        label: e.title,
                        name: e.dataId,
                        version: "",
                        list: {
                            uri: e.dataSource
                        }
                    }
                },
                D = n("KKRW"),
                A = n("naSn"),
                R = n("3NoI"),
                H = n.n(R),
                B = n("wXC7"),
                _ = n.n(B).a.breakpoint,
                z = H()("section", {
                    target: "eq74mwp0"
                })("position:relative;", _.medium, "{", (function(e) {
                    switch (Object(D.a)(e.block)) {
                        case "alert":
                        case "spotlight":
                        case "briefing":
                            return "margin-bottom: 18px";
                        case "latest":
                        case "news":
                        case "mostpopular":
                        case "play":
                            return "margin-bottom: 0";
                        default:
                            return "margin-bottom: 40px"
                    }
                }), ";}", (function(e) {
                    switch (Object(D.a)(e.block)) {
                        case "topstories":
                            return "\n          ".concat(_.mediumLarge, " {\n            margin-bottom: 0;\n          }");
                        default:
                            return null
                    }
                }), ";", (function(e) {
                    switch (Object(D.a)(e.block)) {
                        case "latest":
                        case "news":
                        case "editorspicks":
                        case "mostpopular":
                        case "play":
                            return "\n          ".concat(_.large, " {\n            margin-bottom: 0;\n          }");
                        case "opinion":
                            return "\n          ".concat(_.large, " {\n            margin-bottom: 26px;\n          }");
                        default:
                            return null
                    }
                }), ";"),
                V = n("U7t6");

            function F() {
                var e = c()(["\n    fragment Block_personalizedBlock on BlockInterface_beta {\n      title\n      showSection\n      dataId\n      ... on PersonalizedBlock_Beta {\n        id # for error logging\n        dataSource\n        blockFirstLoad: assets(first: 1000) {\n          # load everything in assets\n          edges {\n            ... on PersonalizedItemsEdge {\n              trackingParams {\n                key\n                value\n              }\n              node {\n                ... on Node {\n                  id\n                }\n                __typename\n                ...Asset_asset\n                ...Package_node\n              }\n            }\n          }\n          totalCount\n        }\n      }\n    }\n    ", "\n    ", "\n  "]);
                return F = function() {
                    return e
                }, e
            }

            function W() {
                var e = c()(["\n    fragment Block_block on BlockInterface_beta {\n      title\n      showSection\n      dataId\n      ... on Block_Beta {\n        id # for error logging\n        dataSource\n        blockFirstLoad: firstLoad(first: 1000) {\n          # load everything in firstLoad\n          edges @take(first: $contentLimit) {\n            node {\n              ... on Node {\n                id\n              }\n              __typename\n              ...Asset_asset\n              ...Package_node\n            }\n          }\n          totalCount\n        }\n      }\n      ... on MultiListBlock_Beta {\n        id\n        title\n        showSection\n        dataId\n        blocks {\n          edges {\n            node {\n              __typename\n              ... on Block_Beta {\n                id\n                dataSource\n                showSection\n                title\n                dataId\n                blockFirstLoad: firstLoad(first: 1000) {\n                  edges {\n                    node {\n                      ... on Node {\n                        id\n                      }\n                      __typename\n                      ...Asset_asset\n                    }\n                  }\n                  totalCount\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ", "\n    ", "\n  "]);
                return W = function() {
                    return e
                }, e
            }
            var U = (o = C()((function(e) {
                return {
                    block: L(e.block)
                }
            })), r = E.a.Consumer, o(i = Object(T.a)(i = r((s = a = function(e) {
                function t() {
                    var e, n;
                    m()(this, t);
                    for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                    return (n = v()(this, (e = y()(t)).call.apply(e, [this].concat(r)))).trackClick = function(e) {
                        n.props.tracking.trackEvent({
                            event: "moduleInteraction",
                            interaction: {
                                module: {
                                    name: "see more",
                                    context: "block",
                                    label: e
                                },
                                type: "click"
                            }
                        })
                    }, n
                }
                return w()(t, e), h()(t, [{
                    key: "getChildContext",
                    value: function() {
                        return {
                            blockId: Object(D.a)(this.props.block) || null,
                            showSection: this.props.block.showSection || !1,
                            lazy: this.props.lazy
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.block,
                            n = e.deviceType,
                            o = e.children,
                            r = e.className;
                        if (Object(V.a)(t)) return t.blockFirstLoad || t.blocks || console.error("Block with id ".concat(t.id, " has a null firstLoad connection."), "Check the configuration for this block:", t), null;
                        var i = function(e) {
                                var t = "";
                                return e.title && (t = e.title.replace(/[^A-Za-z\d\s:]+/g, "")), t
                            }(t),
                            a = i.replace(/\W/g, "");
                        return u()(z, {
                            className: r,
                            block: t,
                            "data-block-tracking-id": i,
                            "data-testid": "block-".concat(a)
                        }, void 0, o, "smartphone" === n && u()(N.a, {
                            block: t
                        }))
                    }
                }]), t
            }(x.Component), a.defaultProps = {
                lazy: !1,
                deviceType: "smartphone",
                children: null,
                className: void 0
            }, a.contextTypes = {
                refetch: j.a.func.isRequired,
                variables: j.a.shape({}).isRequired
            }, a.childContextTypes = {
                blockId: j.a.string,
                showSection: j.a.bool,
                lazy: j.a.bool
            }, i = s)) || i) || i) || i);
            U.fragments = {
                block: P()(W(), I.a.fragments.asset, A.a.fragments.node),
                personalizedBlock: P()(F(), I.a.fragments.asset, A.a.fragments.node)
            };
            t.a = U
        },
        nKgM: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                var t = e.card,
                    n = e.section;
                if (!(n && "Opinion" === n.displayName)) return null;
                if (t && t.creators && 1 === t.creators.length && t.creators[0]) {
                    var o, r, i, a, s = t.creators[0],
                        l = s.displayName,
                        c = s.promotionalMedia;
                    if (null == c ? void 0 : null === (o = c.authorCrops) || void 0 === o ? void 0 : null === (r = o[0]) || void 0 === r ? void 0 : null === (i = r.renditions) || void 0 === i ? void 0 : null === (a = i[0]) || void 0 === a ? void 0 : a.url) return {
                        src: c.authorCrops[0].renditions[0].url,
                        alt: l
                    }
                }
                return null
            }
        },
        naSn: function(e, t, n) {
            "use strict";
            var o = {};
            n.r(o), n.d(o, "Cols2StoryStory", (function() {
                return ae
            })), n.d(o, "Cols2StoryMedia", (function() {
                return de
            })), n.d(o, "Cols2VideoStory", (function() {
                return fe
            })), n.d(o, "Cols2StoryVideo", (function() {
                return be
            })), n.d(o, "Cols2StoryFullAsset", (function() {
                return xe
            })), n.d(o, "Cols3StoryStoryStory", (function() {
                return Pe
            })), n.d(o, "Cols3StoryStoryMedia", (function() {
                return Te
            })), n.d(o, "Cols3StoryMediaStory", (function() {
                return De
            })), n.d(o, "Cols3StoryMediaCaptionStory", (function() {
                return Be
            })), n.d(o, "Cols3StoryStoryCaptionMedia", (function() {
                return Fe
            })), n.d(o, "Cols3StoryVideoStory", (function() {
                return qe
            })), n.d(o, "Cols3StoryPlusMediaStory", (function() {
                return Je
            })), n.d(o, "Rows2Cols2StoryMediaCols2StoryCaption", (function() {
                return it
            })), n.d(o, "Rows2Cols2StoryVideoCols2StoryCaption", (function() {
                return ct
            })), n.d(o, "Rows2Cols2StoryMediaCols2StoryStory", (function() {
                return mt
            })), n.d(o, "Rows2VideoCols2StoryStory", (function() {
                return wt
            })), n.d(o, "Rows2Cols2StoryMediaCols3StoryStoryCaption", (function() {
                return vt
            })), n.d(o, "Cols2StoryRows2Cols1MediaCols2StoryCaption", (function() {
                return Mt
            })), n.d(o, "Cols2StoryRows2Cols2MediaStoryCols1Story", (function() {
                return Et
            })), n.d(o, "Cols3StoryRows2MediaStoryStory", (function() {
                return Lt
            })), n.d(o, "VideoStory", (function() {
                return Bt
            })), n.d(o, "assetTemplates", (function() {
                return _t
            }));
            var r = n("VkAN"),
                i = n.n(r),
                a = n("gcR/"),
                s = n.n(a),
                l = (n("91GP"), n("a1Th"), n("Btvt"), n("f3/d"), n("lwsE")),
                c = n.n(l),
                d = n("W8MJ"),
                u = n.n(d),
                p = n("a1gu"),
                m = n.n(p),
                f = n("Nsbk"),
                h = n.n(f),
                g = n("7W2i"),
                v = n.n(g),
                b = n("q1tI"),
                y = n.n(b),
                O = n("17x9"),
                w = n.n(O),
                x = n("Dugd"),
                k = n.n(x),
                j = n("X6oL"),
                M = n.n(j),
                P = n("E00O"),
                S = n("0Pd7"),
                C = n("uyXp"),
                E = n("ZKN5"),
                T = n("pVnL"),
                I = n.n(T),
                N = (n("KKXr"), n("QILm")),
                L = n.n(N),
                D = (n("INYr"), n("MsNm")),
                A = n("Imfu"),
                R = n("5dFD"),
                H = n("iiJN"),
                B = {
                    mediaEmphasis: {
                        NONE: {
                            mediaSource: {
                                0: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols2StoryStory",
                                                    cols: [15, 5]
                                                },
                                                "headline,summary": {
                                                    template: "Cols2StoryStory",
                                                    cols: [12, 8]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols2StoryStory",
                                                    cols: [1, 1]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Cols2StoryStory",
                                                    cols: [1, 1]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Cols2StoryStory",
                                                    cols: [1, 1]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Cols3StoryStoryStory",
                                                    cols: [10, 5, 5]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                _ = {
                    mediaEmphasis: {
                        MAXIMUM: {
                            mediaSource: {
                                0: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols2StoryMedia",
                                                    cols: [7, 13]
                                                },
                                                "headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryCaption",
                                                    cols: [7, 13, 3, 1]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Rows2Cols2StoryMediaCols3StoryStoryCaption",
                                                    cols: [7, 13, 7, 8, 5]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols3StoryStoryCaption",
                                                    cols: [7, 13, 7, 8, 5]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Rows2Cols2StoryMediaCols3StoryStoryCaption",
                                                    cols: [7, 13, 9, 6, 5]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols3StoryStoryCaption",
                                                    cols: [7, 13, 7, 8, 5]
                                                }
                                            }
                                        }
                                    }
                                },
                                1: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols2StoryMedia",
                                                    cols: [7, 13]
                                                },
                                                "headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryCaption",
                                                    cols: [7, 13, 3, 1]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols2StoryRows2Cols1MediaCols2StoryCaption",
                                                    cols: [7, 13, 8, 5]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Cols2StoryRows2Cols1MediaCols2StoryCaption",
                                                    cols: [7, 13, 8, 5]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Cols2StoryRows2Cols1MediaCols2StoryCaption",
                                                    cols: [7, 13, 8, 5]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Cols2StoryRows2Cols1MediaCols2StoryCaption",
                                                    cols: [7, 13, 8, 5]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        MEDIUM: {
                            mediaSource: {
                                0: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols3StoryMediaCaptionStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "headline,summary": {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Cols2StoryRows2Cols2MediaStoryCols1Story",
                                                    cols: [7, 13, 8, 5]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Cols2StoryRows2Cols2MediaStoryCols1Story",
                                                    cols: [7, 13, 8, 5]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Cols2StoryRows2Cols2MediaStoryCols1Story",
                                                    cols: [7, 13, 8, 5]
                                                }
                                            }
                                        }
                                    }
                                },
                                1: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols3StoryStoryCaptionMedia",
                                                    cols: [7, 5, 8]
                                                },
                                                "headline,summary": {
                                                    template: "Cols3StoryStoryMedia",
                                                    cols: [7, 5, 8]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols3StoryStoryMedia",
                                                    cols: [7, 5, 8]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Cols3StoryRows2MediaStoryStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Cols2StoryRows2Cols2MediaStoryCols1Story",
                                                    cols: [7, 13, 8, 5]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Cols2StoryRows2Cols2MediaStoryCols1Story",
                                                    cols: [7, 13, 8, 5]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                z = {
                    mediaEmphasis: {
                        MAXIMUM: {
                            mediaSource: {
                                0: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols2StoryMedia",
                                                    cols: [7, 13]
                                                },
                                                "headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [7, 13, 3, 1]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [7, 13, 10, 10]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [7, 13, 7, 13]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [7, 13, 12, 8]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [7, 13, 10, 10]
                                                }
                                            }
                                        }
                                    }
                                },
                                1: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols2StoryFullAsset",
                                                    cols: [7, 13]
                                                },
                                                "headline,summary": {
                                                    template: "Cols2StoryFullAsset",
                                                    cols: [7, 13]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols2StoryFullAsset",
                                                    cols: [7, 13]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Cols2StoryFullAsset",
                                                    cols: [7, 13]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Cols2StoryFullAsset",
                                                    cols: [7, 13]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Cols2StoryFullAsset",
                                                    cols: [7, 13]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        MEDIUM: {
                            mediaSource: {
                                0: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "headline,summary": {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [12, 8, 7, 13]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [12, 8, 12, 8]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [12, 8, 10, 10]
                                                }
                                            }
                                        }
                                    }
                                },
                                1: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "headline,summary": {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Cols3StoryRows2MediaStoryStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Cols2StoryRows2Cols2MediaStoryCols1Story",
                                                    cols: [7, 13, 8, 5]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Cols2StoryRows2Cols2MediaStoryCols1Story",
                                                    cols: [7, 13, 8, 5]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                V = {
                    mediaEmphasis: {
                        MAXIMUM: {
                            mediaSource: {
                                0: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "VideoStory",
                                                    cols: [1]
                                                },
                                                "headline,summary": {
                                                    template: "Cols2VideoStory",
                                                    cols: [15, 5]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols2VideoStory",
                                                    cols: [15, 5]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Cols2VideoStory",
                                                    cols: [15, 5]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Cols2VideoStory",
                                                    cols: [15, 5]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Rows2VideoCols2StoryStory",
                                                    cols: [1, 1, 1]
                                                }
                                            }
                                        }
                                    }
                                },
                                1: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols2StoryVideo",
                                                    cols: [7, 13]
                                                },
                                                "headline,summary": {
                                                    template: "Cols2StoryVideo",
                                                    cols: [7, 13]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Rows2Cols2StoryVideoCols2StoryCaption",
                                                    cols: [7, 13, 13, 7]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Rows2Cols2StoryVideoCols2StoryCaption",
                                                    cols: [7, 13, 13, 7]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Rows2Cols2StoryVideoCols2StoryCaption",
                                                    cols: [7, 13, 13, 7]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Rows2Cols2StoryVideoCols2StoryCaption",
                                                    cols: [7, 13, 13, 7]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        MEDIUM: {
                            mediaSource: {
                                0: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols2StoryVideo",
                                                    cols: [12, 8]
                                                },
                                                "headline,summary": {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols3StoryMediaStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [12, 8, 7, 13]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [12, 8, 12, 8]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Rows2Cols2StoryMediaCols2StoryStory",
                                                    cols: [12, 8, 1, 1]
                                                }
                                            }
                                        }
                                    }
                                },
                                1: {
                                    numberOfStories: {
                                        2: {
                                            renditions: {
                                                oneLine: {
                                                    template: "Cols2StoryVideo",
                                                    cols: [12, 8]
                                                },
                                                "headline,summary": {
                                                    template: "Cols2StoryVideo",
                                                    cols: [12, 8]
                                                }
                                            }
                                        },
                                        3: {
                                            renditions: {
                                                "oneLine oneLine": {
                                                    template: "Cols3StoryVideoStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "oneLine headline,summary": {
                                                    template: "Cols3StoryVideoStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "headline,summary oneLine": {
                                                    template: "Cols3StoryVideoStory",
                                                    cols: [7, 8, 5]
                                                },
                                                "headline,summary headline,summary": {
                                                    template: "Cols3StoryVideoStory",
                                                    cols: [7, 8, 5]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                F = (n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("RW0V"), n("Z2Ku"), n("L9s1"), n("lSNA")),
                W = n.n(F),
                U = n("UmXO"),
                X = Object(U.css)("margin-bottom:15px;"),
                q = Object(U.css)("padding:20px 25px 15px;background:white;"),
                G = Object(U.css)("padding-bottom:0;");

            function K(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var J = function(e, t) {
                var n = e.node,
                    o = e.children,
                    r = e.imgSrc,
                    i = e.showBorder,
                    a = e.hasFeatureTone,
                    l = e.index,
                    c = e.label,
                    d = "spotlight" === t.blockId,
                    u = o[0] && o[0].props.asset,
                    p = !(d && !u) && o[0] && !!o[0].props.asset.banner;
                return s()("div", {}, void 0, !d && s()(H.d, {
                    showBorder: i,
                    bottomBorder: !0,
                    label: c
                }), p && s()("div", {
                    className: Object(U.cx)(q, W()({}, G, 1 === r))
                }, void 0, s()(R.a, {
                    link: u
                }, void 0, s()(A.a, {
                    type: d ? 10 : 7,
                    asset: u,
                    urgent: "URGENT" === u.cardType,
                    centered: !0,
                    wrapLink: !0,
                    showMediaLabel: !1,
                    isBanner: !0,
                    rule: 1 === r ? "bottom" : null,
                    hasTextBelow: 1 === r
                }))), s()(H.c, {
                    narrowBottomBorder: d,
                    narrowBorder: !0
                }, void 0, o.map((function(e, t) {
                    var o, i, s, c, u, m, f, h, g, v, b, O = "MobileMediaAuthorImageHeadlineContentMeta",
                        w = !1,
                        x = n.assetDisplayOptions[t].displayFields.includes("oneLine"),
                        k = 0 === l,
                        j = 0 === t,
                        M = "TEXT" === (null == e ? void 0 : null === (o = e.props) || void 0 === o ? void 0 : null === (i = o.asset) || void 0 === i ? void 0 : i.cardType),
                        P = "URGENT" === (null == e ? void 0 : null === (s = e.props) || void 0 === s ? void 0 : null === (c = s.asset) || void 0 === c ? void 0 : c.cardType) && !(j && p),
                        S = "Video" === (null == e ? void 0 : null === (u = e.props) || void 0 === u ? void 0 : null === (m = u.asset) || void 0 === m ? void 0 : m.__typename),
                        C = "INTERACTIVE" === (null == e ? void 0 : null === (f = e.props) || void 0 === f ? void 0 : null === (h = f.asset) || void 0 === h ? void 0 : h.cardType),
                        E = "EmbeddedInteractive" === (null == e ? void 0 : null === (g = e.props) || void 0 === g ? void 0 : null === (v = g.asset) || void 0 === v ? void 0 : null === (b = v.promotionalMedia) || void 0 === b ? void 0 : b.__typename);
                    return S ? O = "MobileMediaAuthorImageHeadlineContentMeta" : C ? O = "Media" : j && (j && p) ? 0 === r ? O = "MobileMediaAuthorImageHeadlineContentMeta" : (O = "AuthorImageHeadlineContentMeta", w = !p) : O = M ? "AuthorImageHeadlineContentMeta" : x ? r === t ? "MobileMediaAuthorImageHeadlineMeta" : "AuthorImageHeadlineMeta" : r === t ? "MobileMediaAuthorImageHeadlineContentMeta" : "AuthorImageHeadlineContentMeta", y.a.cloneElement(e, {
                        template: O,
                        assetMux: {
                            headline: function(e) {
                                return Y({}, e, {
                                    type: j ? 7 : 4,
                                    urgent: P,
                                    assetTone: a && j && !P ? "feature" : null,
                                    rule: w || a && j && !P ? "bottom" : null
                                })
                            },
                            content: function(e) {
                                return Y({}, e, {
                                    showBullets: j
                                })
                            },
                            media: function(e) {
                                return Y({}, e, {
                                    narrowImage: !E && !C && (d && !k || !j)
                                })
                            }
                        }
                    })
                }))))
            };
            J.displayName = "SmartphonePackage", J.defaultProps = {
                imgSrc: void 0,
                showBorder: !0,
                hasFeatureTone: !1,
                index: 0,
                label: null
            }, J.contextTypes = {
                blockId: w.a.string
            };
            var Z = J,
                Q = n("wXC7"),
                $ = n.n(Q),
                ee = Object(U.css)("&::before{content:'';display:block;border-bottom:1px solid ", $.a.color.gray60, ";width:180px;margin:15px auto;}"),
                te = Object(U.css)("padding-top:14px;"),
                ne = Object(U.css)("margin-top:14px;border-top:1px solid ", $.a.color.gray60, ";padding-top:14px;");

            function oe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ie = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.hasFeatureTone,
                    l = e.isSpotlight,
                    c = e.hasBanner;
                return s()("div", {
                    className: Object(U.cx)(W()({}, ee, c))
                }, void 0, s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0]
                }, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: function() {
                        return Object(H.g)(0, t) ? "Col1HeadlineMetaCol2Media" : "AuthorImageHeadlineContentMeta"
                    },
                    assetMux: {
                        headline: function(e) {
                            return re({}, e, {
                                type: l ? 2 : 4,
                                balanced: !0,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                hideHeadline: r,
                                assetTone: a ? "feature" : null,
                                rule: a ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !c
                            })
                        },
                        content: function(e) {
                            return re({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: i[1]
                }, void 0, s()(H.c, {}, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[0]] && Object(H.g)(1, t) ? "Col1HeadlineMetaCol2Media" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return re({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        },
                        media: function(e) {
                            return re({}, e, {
                                size: "small"
                            })
                        }
                    }
                }), n[2] && y.a.cloneElement(n[2], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[1]] && Object(H.g)(2, t) ? "Col1HeadlineMetaCol2Media" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return re({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        },
                        media: function(e) {
                            return re({}, e, {
                                size: "small"
                            })
                        }
                    }
                })))))
            };
            ie.displayName = "Cols2StoryStory", ie.defaultProps = {
                cols: [9, 7],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                isSpotlight: !1,
                hasBanner: !1
            };
            var ae = ie;

            function se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : se(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ce = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.hasFeatureTone,
                    l = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0],
                    noPaddingRight: !0
                }, void 0, s()(H.c, {}, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return le({}, e, {
                                type: 4,
                                balanced: !0,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                hideHeadline: r,
                                assetTone: a ? "feature" : null,
                                rule: a ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !l
                            })
                        },
                        content: function(e) {
                            return le({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }), n[1] && y.a.cloneElement(n[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return le({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[1],
                    noVerticalBorder: !0
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })))
            };
            ce.displayName = "Cols2StoryMedia", ce.defaultProps = {
                cols: [4, 12],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var de = ce;

            function ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ue(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var me = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.cols;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: r[0]
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: !0
                })), s()(H.a, {
                    columns: r[1]
                }, void 0, s()(H.c, {}, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return pe({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                }), n[2] && y.a.cloneElement(n[2], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[1]] && Object(H.g)(2, t) ? "MediaHeadlineMeta" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return pe({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        }
                    }
                }))))
            };
            me.displayName = "Cols2VideoStory", me.defaultProps = {
                cols: [12, 4],
                storyRenditions: ["headline,summary", "headline,summary"]
            };
            var fe = me;

            function he(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ve = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.imgSrc,
                    l = e.hasFeatureTone,
                    c = e.hasBanner,
                    d = "VIDEO" === n[1].props.asset.cardType;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0]
                }, void 0, s()(H.c, {}, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return ge({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !c
                            })
                        },
                        content: function(e) {
                            return ge({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }), n[1] && !d && y.a.cloneElement(n[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return ge({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[1],
                    noBorderLeft: 0 === a
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: d
                })))
            };
            ve.displayName = "Cols2StoryVideo", ve.defaultProps = {
                cols: [4, 12],
                imgSrc: 0,
                hideFirstHeadline: !1,
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var be = ve;

            function ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var we = function(e) {
                var t = e.children,
                    n = e.storyRenditions,
                    o = e.hideFirstHeadline,
                    r = e.cols,
                    i = e.hasFeatureTone,
                    a = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: r[0]
                }, void 0, s()(H.c, {}, void 0, t[0] && y.a.cloneElement(t[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return Oe({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: o,
                                assetTone: i ? "feature" : null,
                                rule: i ? "bottom" : null,
                                urgent: Object(H.f)(t[0]) && !a
                            })
                        },
                        content: function(e) {
                            return Oe({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }), t[2] && y.a.cloneElement(t[2], {
                    template: _t[n[1]],
                    assetMux: {
                        headline: function(e) {
                            return Oe({}, e, {
                                type: 2,
                                urgent: "URGENT" === Object(H.f)(t[2])
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: r[1]
                }, void 0, t[1] && y.a.cloneElement(t[1], {
                    template: function() {
                        return "INTERACTIVE" === t[1].props.asset.cardType ? "Media" : "AuthorImageHeadlineContentMeta" === _t[n[0]] ? "MediaAuthorImageHeadlineContentMeta" : "MediaAuthorImageHeadlineMeta"
                    },
                    assetMux: {
                        headline: function(e) {
                            return Oe({}, e, {
                                type: 2,
                                urgent: Object(H.f)(t[1]),
                                showSentence: "oneLine" === n[0]
                            })
                        },
                        media: function(e) {
                            return Oe({}, e, {
                                metaPosition: "bottom",
                                meta: "caption",
                                inlineVideo: !0
                            })
                        }
                    }
                })))
            };
            we.displayName = "Cols2StoryFullAsset", we.defaultProps = {
                cols: [4, 12],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var xe = we;

            function ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ke(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ke(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Me = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.hasFeatureTone,
                    l = e.isSpotlight,
                    c = e.hasBanner;
                return s()("div", {
                    className: Object(U.cx)(W()({}, ee, c))
                }, void 0, s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0]
                }, void 0, s()(H.c, {}, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: function() {
                        return Object(H.g)(0, t) ? "Col1HeadlineMetaCol2Media" : "AuthorImageHeadlineContentMeta"
                    },
                    assetMux: {
                        headline: function(e) {
                            return je({}, e, {
                                type: l ? 2 : 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                assetTone: a ? "feature" : null,
                                rule: a ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !c
                            })
                        },
                        content: function(e) {
                            return je({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[1]
                }, void 0, s()(H.c, {}, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return je({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        },
                        media: function(e) {
                            return je({}, e, {
                                size: "small"
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[2]
                }, void 0, s()(H.c, {}, void 0, n[2] && y.a.cloneElement(n[2], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[1]] && Object(H.g)(2, t) ? "MediaHeadlineMeta" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return je({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        },
                        media: function(e) {
                            return je({}, e, {
                                size: "small"
                            })
                        }
                    }
                })))))
            };
            Me.displayName = "Cols3StoryStoryStory", Me.defaultProps = {
                cols: [10, 5, 5],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                isSpotlight: !1,
                hasBanner: !1
            };
            var Pe = Me;

            function Se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Se(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ee = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.hasFeatureTone,
                    l = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0]
                }, void 0, s()(H.c, {}, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return Ce({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                assetTone: a ? "feature" : null,
                                rule: a ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !l
                            })
                        },
                        content: function(e) {
                            return Ce({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[1],
                    noPaddingRight: !0
                }, void 0, s()(H.c, {}, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return Ce({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                }), n[2] && y.a.cloneElement(n[2], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[1]] && Object(H.g)(2, t) ? "MediaHeadlineMeta" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return Ce({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[2],
                    noVerticalBorder: !0
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })))
            };
            Ee.displayName = "Cols3StoryStoryMedia", Ee.defaultProps = {
                cols: [4, 9, 3],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var Te = Ee;

            function Ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ie(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Le = function(e) {
                var t = e.node,
                    n = e.imgSrc,
                    o = e.children,
                    r = e.storyRenditions,
                    i = e.hideFirstHeadline,
                    a = e.cols,
                    l = e.hasFeatureTone,
                    c = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: a[0],
                    noPaddingRight: 0 === n
                }, void 0, s()(H.c, {}, void 0, o[0] && y.a.cloneElement(o[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return Ne({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: i,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(o[0]) && !c
                            })
                        },
                        content: function(e) {
                            return Ne({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: a[1],
                    noVerticalBorder: 0 === n,
                    noPaddingRight: 1 === n
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })), s()(H.a, {
                    columns: a[2],
                    noVerticalBorder: 1 === n
                }, void 0, s()(H.c, {}, void 0, o[1] && y.a.cloneElement(o[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[r[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[r[0]],
                    assetMux: {
                        headline: function(e) {
                            return Ne({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[1])
                            })
                        },
                        media: function(e) {
                            return Ne({}, e, {
                                size: "small"
                            })
                        }
                    }
                }), o[2] && y.a.cloneElement(o[2], {
                    template: "AuthorImageHeadlineContentMeta" === _t[r[1]] && Object(H.g)(2, t) ? "MediaHeadlineMeta" : _t[r[1]],
                    assetMux: {
                        headline: function(e) {
                            return Ne({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[2])
                            })
                        },
                        media: function(e) {
                            return Ne({}, e, {
                                size: "small"
                            })
                        }
                    }
                }))))
            };
            Le.displayName = "Cols3StoryMediaStory", Le.defaultProps = {
                cols: [4, 9, 3],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var De = Le;

            function Ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ae(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var He = function(e) {
                var t = e.node,
                    n = e.imgSrc,
                    o = e.children,
                    r = e.storyRenditions,
                    i = e.hideFirstHeadline,
                    a = e.cols,
                    l = e.hasFeatureTone,
                    c = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: a[0],
                    noPaddingRight: 0 === n
                }, void 0, s()(H.c, {}, void 0, o[0] && y.a.cloneElement(o[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return Re({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: i,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(o[0]) && !c
                            })
                        },
                        content: function(e) {
                            return Re({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: a[1],
                    noVerticalBorder: 0 === n,
                    noPaddingRight: !0
                }, void 0, s()(D.a, {
                    meta: null,
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })), s()(H.a, {
                    columns: a[2],
                    noVerticalBorder: !0
                }, void 0, s()(H.c, {}, void 0, s()("div", {
                    "aria-hidden": "true"
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    suppressImage: !0
                })), o[1] && y.a.cloneElement(o[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[r[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[r[0]],
                    assetMux: {
                        headline: function(e) {
                            return Re({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[1])
                            })
                        },
                        media: function(e) {
                            return Re({}, e, {
                                size: "small"
                            })
                        }
                    }
                }))))
            };
            He.displayName = "Cols3StoryMediaCaptionStory", He.defaultProps = {
                cols: [7, 8, 5],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var Be = He;

            function _e(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _e(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _e(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ve = function(e) {
                var t = e.node,
                    n = e.imgSrc,
                    o = e.children,
                    r = e.storyRenditions,
                    i = e.hideFirstHeadline,
                    a = e.cols,
                    l = e.hasFeatureTone,
                    c = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: a[0],
                    noPaddingRight: 0 === n
                }, void 0, s()(H.c, {}, void 0, o[0] && y.a.cloneElement(o[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return ze({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: i,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(o[0]) && !c
                            })
                        },
                        content: function(e) {
                            return ze({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: a[1]
                }, void 0, s()(H.c, {}, void 0, o[1] && y.a.cloneElement(o[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[r[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[r[0]],
                    assetMux: {
                        headline: function(e) {
                            return ze({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[1])
                            })
                        },
                        media: function(e) {
                            return ze({}, e, {
                                size: "small"
                            })
                        }
                    }
                }), s()("div", {
                    "aria-hidden": "true"
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    suppressImage: !0
                })))), s()(H.a, {
                    columns: a[2],
                    noPaddingLeft: !0,
                    noVerticalBorder: !0
                }, void 0, s()(D.a, {
                    meta: null,
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })))
            };
            Ve.displayName = "Cols3StoryStoryCaptionMedia", Ve.defaultProps = {
                cols: [7, 5, 8],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var Fe = Ve;

            function We(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? We(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : We(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Xe = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.hasFeatureTone,
                    l = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0]
                }, void 0, s()(H.c, {}, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return Ue({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                assetTone: a ? "feature" : null,
                                rule: a ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !l
                            })
                        },
                        content: function(e) {
                            return Ue({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[1]
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: !0
                })), s()(H.a, {
                    columns: i[2]
                }, void 0, n[2] && y.a.cloneElement(n[2], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[1]] && Object(H.g)(2, t) ? "MediaHeadlineMeta" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return Ue({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        },
                        media: function(e) {
                            return Ue({}, e, {
                                size: "small"
                            })
                        }
                    }
                })))
            };
            Xe.displayName = "Cols3StoryVideoStory", Xe.defaultProps = {
                cols: [4, 9, 3],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var qe = Xe;

            function Ge(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ge(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ge(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ye = function(e) {
                var t = e.node,
                    n = e.imgSrc,
                    o = e.children,
                    r = e.storyRenditions,
                    i = e.hideFirstHeadline,
                    a = e.cols,
                    l = e.hasFeatureTone,
                    c = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: a[0],
                    noPaddingRight: 0 === n
                }, void 0, s()(H.c, {}, void 0, o[0] && y.a.cloneElement(o[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return Ke({}, e, {
                                type: "MEDIUM" === t.promotionalMediaEmphasis ? 4 : 7,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: i,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(o[0]) && !c
                            })
                        },
                        content: function(e) {
                            return Ke({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }), o[1] && y.a.cloneElement(o[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[r[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[r[0]],
                    assetMux: {
                        headline: function(e) {
                            return Ke({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[1])
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: a[1],
                    noVerticalBorder: 0 === n,
                    noPaddingRight: 1 === n
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })), s()(H.a, {
                    columns: a[2],
                    noVerticalBorder: 1 === n
                }, void 0, o[2] && y.a.cloneElement(o[2], {
                    template: "AuthorImageHeadlineContentMeta" === _t[r[1]] && Object(H.g)(2, t) ? "MediaHeadlineMeta" : _t[r[1]],
                    assetMux: {
                        headline: function(e) {
                            return Ke({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[2])
                            })
                        }
                    }
                })))
            };
            Ye.displayName = "Cols3StoryPlusMediaStory", Ye.defaultProps = {
                cols: [4, 9, 3],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var Je = Ye,
                Ze = Object(U.css)("opacity:0;user-select:none;"),
                Qe = Object(U.css)("margin:11px 0 0 15px;"),
                $e = Object(U.css)("margin:13px 0 0 20px;"),
                et = function(e) {
                    var t, n = e.media,
                        o = e.requiresOffset;
                    return s()("div", {
                        "aria-hidden": "true",
                        className: Object(U.cx)(Ze, (t = {}, W()(t, Qe, o && "Video" !== n.__typename), W()(t, $e, o && "Video" === n.__typename), t))
                    }, void 0, s()(D.a, {
                        meta: "caption",
                        metaPosition: "bottom",
                        inlineVideo: !0,
                        suppressImage: !0,
                        media: n
                    }))
                };
            et.displayName = "DanglingCaptionSpaceHolder", et.defaultProps = {
                requiresOffset: !1
            };
            var tt = et;

            function nt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ot(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nt(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var rt = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.imgSrc,
                    l = e.hasFeatureTone,
                    c = e.hasBanner;
                return y.a.createElement(y.a.Fragment, null, s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0],
                    noPaddingRight: 0 === a
                }, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return ot({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !c
                            })
                        },
                        content: function(e) {
                            return ot({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: i[1],
                    noVerticalBorder: 0 === a
                }, void 0, s()(D.a, {
                    meta: "caption",
                    metaPosition: "dangle",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                }))), s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[2]
                }, void 0, s()("div", {
                    className: ne
                }, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: "headline,summary" === o[0] && Object(H.g)(1, t) ? "Col1HeadlineMetaCol2Media" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return ot({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[3],
                    noBorderLeft: !0,
                    noPaddingLeft: !0
                }, void 0, s()(tt, {
                    media: t.promotionalMedia,
                    requiresOffset: !0
                }))))
            };
            rt.defaultProps = {
                cols: [7, 13, 3, 1],
                imgSrc: 0,
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var it = rt;

            function at(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function st(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? at(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var lt = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.imgSrc,
                    l = e.hasFeatureTone,
                    c = e.hasBanner;
                return y.a.createElement(y.a.Fragment, null, s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0],
                    noPaddingRight: 0 === a
                }, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return st({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !c
                            })
                        },
                        content: function(e) {
                            return st({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: i[1],
                    noVerticalBorder: 0 === a
                }, void 0, s()(D.a, {
                    meta: "caption",
                    metaPosition: "dangle",
                    media: t.promotionalMedia,
                    inlineVideo: !0,
                    preferredCrop: Object(H.e)(t)
                }))), s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[2]
                }, void 0, s()("div", {
                    className: ne
                }, void 0, n[2] && y.a.cloneElement(n[2], {
                    template: "headline,summary" === o[1] && Object(H.g)(2, t) ? "Col1HeadlineMetaCol2Media" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return st({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[3],
                    noBorderLeft: !0,
                    noPaddingLeft: !0
                }, void 0, s()(tt, {
                    media: t.promotionalMedia,
                    requiresOffset: !0
                }))))
            };
            lt.defaultProps = {
                cols: [7, 13, 13, 7],
                imgSrc: 0,
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var ct = lt;

            function dt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? dt(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var pt = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.hasFeatureTone,
                    l = e.hasBanner;
                return s()(H.c, {}, void 0, s()("div", {}, void 0, s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0],
                    noPaddingRight: !0
                }, void 0, s()(H.c, {}, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return ut({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                assetTone: a ? "feature" : null,
                                rule: a ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !l
                            })
                        },
                        content: function(e) {
                            return ut({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[1],
                    noVerticalBorder: !0
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })))), s()("div", {}, void 0, s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[2]
                }, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: "headline,summary" === o[0] && Object(H.g)(1, t) ? "Col1HeadlineMetaCol2Media" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return ut({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: i[3],
                    noVerticalBorder: !n[2]
                }, void 0, n[2] && y.a.cloneElement(n[2], {
                    template: "headline,summary" === o[1] && Object(H.g)(2, t) ? "Col1HeadlineMetaCol2Media" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return ut({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        }
                    }
                })))))
            };
            pt.displayName = "Rows2Cols2StoryMediaCols2StoryStory", pt.defaultProps = {
                cols: [4, 12],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var mt = pt;

            function ft(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ht(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ft(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ft(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var gt = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.hasFeatureTone,
                    l = e.hasBanner;
                return s()("div", {}, void 0, s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0]
                }, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return ht({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                assetTone: a ? "feature" : null,
                                rule: a ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !l
                            })
                        },
                        content: function(e) {
                            return ht({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: i[1],
                    noBorderLeft: !0
                }, void 0, s()(D.a, {
                    meta: "caption",
                    metaPosition: "dangle",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                }))), s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[2] + i[3]
                }, void 0, s()("div", {
                    className: ne
                }, void 0, s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[2]
                }, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: "headline,summary" === o[0] && Object(H.g)(1, t) ? "Col1HeadlineMetaCol2Media" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return ht({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: i[3]
                }, void 0, n[2] && y.a.cloneElement(n[2], {
                    template: "headline,summary" === o[1] && Object(H.g)(2, t) ? "Col1HeadlineMetaCol2Media" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return ht({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        }
                    }
                }))))), s()(H.a, {
                    columns: i[4],
                    noBorderLeft: !0,
                    noPaddingLeft: !0
                }, void 0, s()(tt, {
                    media: t.promotionalMedia,
                    requiresOffset: !0
                }))))
            };
            gt.displayName = "Rows2Cols2StoryMediaCols3StoryStoryCaption", gt.defaultProps = {
                cols: [7, 13, 7, 7, 6],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var vt = gt;

            function bt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? bt(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ot = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.cols;
                return s()(H.c, {}, void 0, s()("div", {}, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    imageWidth: r[0],
                    metaPosition: "bottom",
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: !0
                })), s()(H.b, {}, void 0, s()(H.a, {
                    columns: r[1]
                }, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: "headline,summary" === o[0] && Object(H.g)(1, t) ? "Col1HeadlineMetaCol2Media" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return yt({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: r[2]
                }, void 0, n[2] && y.a.cloneElement(n[2], {
                    template: "headline,summary" === o[1] && Object(H.g)(2, t) ? "Col1HeadlineMetaCol2Media" : _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return yt({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        }
                    }
                }))))
            };
            Ot.displayName = "Rows2VideoCols2StoryStory", Ot.defaultProps = {
                cols: [1, 1, 1],
                storyRenditions: ["headline,summary", "headline,summary"]
            };
            var wt = Ot;

            function xt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function kt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xt(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var jt = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.cols,
                    a = e.hasFeatureTone,
                    l = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[0]
                }, void 0, s()(H.c, {}, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return kt({}, e, {
                                balanced: !0,
                                type: 4,
                                hideHeadline: r,
                                showExclusiveLabel: !0,
                                assetTone: a ? "feature" : null,
                                rule: a ? "bottom" : null,
                                urgent: Object(H.f)(n[0]) && !l
                            })
                        },
                        content: function(e) {
                            return kt({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }), n[2] && y.a.cloneElement(n[2], {
                    template: _t[o[1]],
                    assetMux: {
                        headline: function(e) {
                            return kt({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[2])
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: i[1]
                }, void 0, s()("div", {
                    style: {
                        marginBottom: "15px"
                    }
                }, void 0, s()(D.a, {
                    media: t.promotionalMedia,
                    meta: "caption",
                    metaPosition: "dangle",
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })), s()(H.b, {}, void 0, s()(H.a, {
                    columns: i[2],
                    noPaddingRight: !0
                }, void 0, n[1] && y.a.cloneElement(n[1], {
                    template: _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return kt({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: i[3],
                    noVerticalBorder: !0
                }, void 0, s()(tt, {
                    media: t.promotionalMedia
                })))))
            };
            jt.displayName = "Cols2StoryRows2Cols1MediaCols2StoryCaption", jt.defaultProps = {
                cols: [7, 10, 3, 10],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var Mt = jt;

            function Pt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function St(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Pt(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ct = function(e) {
                var t = e.node,
                    n = e.imgSrc,
                    o = e.children,
                    r = e.storyRenditions,
                    i = e.hideFirstHeadline,
                    a = e.cols,
                    l = e.hasFeatureTone,
                    c = e.hasBanner,
                    d = 1,
                    u = 2;
                return "oneLine" === r[0] && (d = 2, u = 1), s()(H.b, {}, void 0, s()(H.a, {
                    columns: a[0],
                    noPaddingRight: 0 === n
                }, void 0, s()(H.c, {}, void 0, o[0] && y.a.cloneElement(o[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return St({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: i,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(o[0]) && !c
                            })
                        },
                        content: function(e) {
                            return St({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: a[1],
                    noVerticalBorder: 0 === n,
                    noPaddingRight: 1 === n
                }, void 0, s()(H.c, {}, void 0, s()(H.b, {}, void 0, s()(H.a, {
                    columns: a[2],
                    noPaddingRight: 1 === n
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                })), s()(H.a, {
                    columns: a[3],
                    noVerticalBorder: 1 === n
                }, void 0, o[d] && y.a.cloneElement(o[d], {
                    template: "headline,summary" === r[d - 1] && Object(H.g)(d, t) ? "MediaHeadlineMeta" : _t[r[d - 1]],
                    assetMux: {
                        headline: function(e) {
                            return St({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[d])
                            })
                        },
                        media: function(e) {
                            return St({}, e, {
                                size: "small"
                            })
                        }
                    }
                }))), o[u] && y.a.cloneElement(o[u], {
                    template: "headline,summary" === r[u - 1] && Object(H.g)(u, t) ? "Col1HeadlineMetaCol2Media" : _t[r[u - 1]],
                    assetMux: {
                        headline: function(e) {
                            return St({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[u])
                            })
                        },
                        media: function(e) {
                            return St({}, e, {
                                size: "small"
                            })
                        }
                    }
                }))))
            };
            Ct.displayName = "Cols2StoryRows2Cols2MediaStoryCols1Story", Ct.defaultProps = {
                cols: [4, 9, 3],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var Et = Ct;

            function Tt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function It(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tt(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nt = function(e) {
                var t = e.node,
                    n = e.imgSrc,
                    o = e.children,
                    r = e.storyRenditions,
                    i = e.hideFirstHeadline,
                    a = e.cols,
                    l = e.hasFeatureTone,
                    c = e.hasBanner;
                return s()(H.b, {}, void 0, s()(H.a, {
                    columns: a[0],
                    noPaddingRight: 0 === n
                }, void 0, o[0] && y.a.cloneElement(o[0], {
                    template: "AuthorImageHeadlineContentMeta",
                    assetMux: {
                        headline: function(e) {
                            return It({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: i,
                                assetTone: l ? "feature" : null,
                                rule: l ? "bottom" : null,
                                urgent: Object(H.f)(o[0]) && !c
                            })
                        },
                        content: function(e) {
                            return It({}, e, {
                                showBullets: !0
                            })
                        }
                    }
                })), s()(H.a, {
                    columns: a[1]
                }, void 0, s()(D.a, {
                    meta: "caption",
                    media: t.promotionalMedia,
                    preferredCrop: Object(H.e)(t),
                    inlineVideo: "MAXIMUM" === t.promotionalMediaEmphasis
                }), s()("div", {
                    className: te
                }, void 0, o[1] && y.a.cloneElement(o[1], {
                    template: "headline,summary" === r[0] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[r[0]],
                    assetMux: {
                        headline: function(e) {
                            return It({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[1])
                            })
                        },
                        media: function(e) {
                            return It({}, e, {
                                size: "small"
                            })
                        }
                    }
                }))), s()(H.a, {
                    columns: a[2]
                }, void 0, o[2] && y.a.cloneElement(o[2], {
                    template: "headline,summary" === r[1] && Object(H.g)(2, t) ? "MediaHeadlineMeta" : _t[r[1]],
                    assetMux: {
                        headline: function(e) {
                            return It({}, e, {
                                type: 2,
                                urgent: Object(H.f)(o[2])
                            })
                        },
                        media: function(e) {
                            return It({}, e, {
                                size: "small"
                            })
                        }
                    }
                })))
            };
            Nt.displayName = "Cols3StoryRows2MediaStoryStory", Nt.defaultProps = {
                cols: [4, 9, 3],
                hideFirstHeadline: !1,
                storyRenditions: ["headline,summary", "headline,summary"],
                hasFeatureTone: !1,
                hasBanner: !1
            };
            var Lt = Nt;

            function Dt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function At(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dt(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Rt = function(e) {
                var t = e.node,
                    n = e.children,
                    o = e.storyRenditions,
                    r = e.hideFirstHeadline,
                    i = e.hasBanner;
                return s()(H.c, {}, void 0, n[0] && y.a.cloneElement(n[0], {
                    template: "MediaMeta",
                    assetMux: {
                        headline: function(e) {
                            return At({}, e, {
                                type: 4,
                                showMediaLabel: !1,
                                showExclusiveLabel: !0,
                                balanced: !0,
                                hideHeadline: r,
                                urgent: Object(H.f)(n[0]) && !i
                            })
                        },
                        media: function(e) {
                            return At({}, e, {
                                meta: "caption"
                            })
                        }
                    }
                }), n[1] && y.a.cloneElement(n[1], {
                    template: "AuthorImageHeadlineContentMeta" === _t[o[0]] && Object(H.g)(1, t) ? "MediaHeadlineMeta" : _t[o[0]],
                    assetMux: {
                        headline: function(e) {
                            return At({}, e, {
                                type: 2,
                                urgent: Object(H.f)(n[1])
                            })
                        }
                    }
                }))
            };
            Rt.displayName = "VideoStory", Rt.defaultProps = {
                hasBanner: !1,
                hideFirstHeadline: !1
            };
            var Ht, Bt = Rt,
                _t = {
                    "headline,summary": "AuthorImageHeadlineContentMeta",
                    oneLine: "AuthorImageHeadlineMeta"
                };

            function zt() {
                var e = i()(["\n    fragment LedePackage_template on Package {\n      name\n      promotionalMediaEmphasis\n      assetDisplayOptions {\n        displayFields\n      }\n      promotionalMedia {\n        __typename\n        ... on HasPromotionalProperties {\n          promotionalMedia {\n            __typename\n          }\n        }\n        ... on Node {\n          id\n        }\n        ... on Article {\n          uri\n        }\n        ...AssetMedia_media\n      }\n      assets {\n        ... on Node {\n          id\n        }\n        ... on Article {\n          uri\n        }\n      }\n    }\n    ", "\n  "]);
                return zt = function() {
                    return e
                }, e
            }
            var Vt = function(e) {
                    var t, n, r, i, a, s, l, c = e.node,
                        d = e.deviceType,
                        u = B,
                        p = z,
                        m = _,
                        f = V,
                        h = "Video" === (null == c ? void 0 : null === (t = c.promotionalMedia) || void 0 === t ? void 0 : t.__typename),
                        g = "EmbeddedInteractive" === (null == c ? void 0 : null === (n = c.promotionalMedia) || void 0 === n ? void 0 : null === (r = n.promotionalMedia) || void 0 === r ? void 0 : r.__typename),
                        v = Object(H.h)(c.assetDisplayOptions.slice(1, 3)) || (c.assets.length - 2 ? "headline,summary" : "headline,summary oneLine"),
                        b = c.assets.findIndex((function(e) {
                            return !c.promotionalMedia || !e || e.id === c.promotionalMedia.id
                        }));
                    try {
                        var y;
                        if (b > 1 ? (b = 0, y = "NONE") : y = c.promotionalMediaEmphasis, "smartphone" === d) s = Z;
                        else {
                            "NONE" === y ? (a = u, b = 0) : a = h ? f : g || function(e, t, n, o) {
                                var r, i, a, s = !e && !t && (null == n ? void 0 : null === (r = n.assets) || void 0 === r ? void 0 : null === (i = r[o]) || void 0 === i ? void 0 : null === (a = i.promotionalMedia) || void 0 === a ? void 0 : a.caption);
                                return !s || !s.text || "" === s.text
                            }(h, g, c, b) ? p : m;
                            var O = a.mediaEmphasis[y || "MAXIMUM"].mediaSource[b].numberOfStories[c.assets.length].renditions[v];
                            i = O.template, l = L()(O, ["template"]), s = o[i]
                        }
                        return {
                            LedePackageTemplate: s,
                            templateName: i,
                            imgSrc: b,
                            storyRenditions: v,
                            hasVideo: h,
                            hasInteractivePromo: g,
                            additionalProps: l
                        }
                    } catch (e) {
                        return null
                    }
                },
                Ft = M()((function(e) {
                    var t = Vt(e);
                    return t ? {
                        block: {
                            package: {
                                imgSrc: t.imgSrc,
                                templateName: t.templateName
                            }
                        }
                    } : {}
                }))(Ht = function(e) {
                    function t() {
                        return c()(this, t), m()(this, h()(t).apply(this, arguments))
                    }
                    return v()(t, e), u()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.node,
                                n = e.children,
                                o = e.showBorder,
                                r = e.hasFeatureTone,
                                i = e.index,
                                a = e.label,
                                l = e.isSpotlight,
                                c = e.deviceType,
                                d = Vt(this.props);
                            if (!d) return null;
                            var u = !!n[0].props.asset.banner,
                                p = d.LedePackageTemplate,
                                m = d.imgSrc,
                                f = d.storyRenditions,
                                h = d.hasVideo,
                                g = d.hasInteractivePromo,
                                v = d.additionalProps,
                                b = u && !l;
                            return y.a.createElement(y.a.Fragment, null, "smartphone" !== c && y.a.createElement(y.a.Fragment, null, s()(H.d, {
                                showBorder: o,
                                label: u ? "" : a
                            }), b && s()("div", {
                                className: X
                            }, void 0, s()(R.a, {
                                link: n[0].props.asset
                            }, void 0, s()(A.a, {
                                asset: n[0].props.asset,
                                type: 8,
                                showMediaLabel: !1,
                                urgent: Object(H.f)(n[0]),
                                centered: !0,
                                balanced: !0,
                                wrapLink: !0,
                                isBanner: !0
                            })))), y.a.createElement(p, I()({
                                node: t,
                                imgSrc: m,
                                storyRenditions: f && f.split(" ") || null,
                                showBorder: o,
                                video: h,
                                interactive: g,
                                hasFeatureTone: r,
                                index: i,
                                hasBanner: u,
                                label: a
                            }, v), n))
                        }
                    }]), t
                }(b.Component)) || Ht;
            Ft.defaultProps = {
                children: null,
                deviceType: "desktop",
                showBorder: !0,
                hasFeatureTone: !1,
                isSpotlight: !1,
                isFirstPackage: !1,
                index: 0,
                label: null
            }, Ft.fragments = {
                template: k()(zt(), D.a.fragments.media)
            };
            var Wt = Ft;

            function Ut(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Xt = {
                    oneLine: {
                        cols: [4, 8, 4],
                        template: "Cols3StoryMediaStory"
                    },
                    "headline,summary": {
                        cols: [4, 8, 4],
                        template: "Cols3StoryMediaStory"
                    },
                    "oneLine oneLine": {
                        cols: [4, 8, 4],
                        template: "Cols3StoryMediaStory"
                    },
                    "oneLine headline,summary": {
                        cols: [4, 8, 4],
                        template: "Cols3StoryMediaStory"
                    },
                    "headline,summary oneLine": {
                        cols: [4, 8, 4],
                        template: "Cols3StoryMediaStory"
                    },
                    "headline,summary headline,summary": {
                        cols: [4, 6, 6],
                        template: "Cols3StoryMediaStory"
                    }
                },
                qt = {
                    oneLine: {
                        cols: [11, 5],
                        template: "Cols2StoryStory"
                    },
                    "headline,summary": {
                        cols: [8, 8],
                        template: "Cols2StoryStory"
                    },
                    "oneLine oneLine": {
                        cols: [8, 8],
                        template: "Cols2StoryStory"
                    },
                    "oneLine headline,summary": {
                        cols: [8, 8],
                        template: "Cols2StoryStory"
                    },
                    "headline,summary oneLine": {
                        cols: [8, 8],
                        template: "Cols2StoryStory"
                    },
                    "headline,summary headline,summary": {
                        cols: [8, 8],
                        template: "Cols2StoryStory"
                    }
                },
                Gt = {
                    cols: [8, 8],
                    template: "Cols2StoryStory"
                },
                Kt = {
                    0: {
                        oneLine: {
                            cols: [12, 4],
                            template: "Cols2VideoStory"
                        },
                        "headline,summary": {
                            cols: [12, 4],
                            template: "Cols2VideoStory"
                        },
                        "oneLine oneLine": {
                            cols: [12, 4],
                            template: "Cols2VideoStory"
                        },
                        "oneLine headline,summary": {
                            cols: [12, 4],
                            template: "Cols2VideoStory"
                        },
                        "headline,summary oneLine": {
                            cols: [12, 4],
                            template: "Cols2VideoStory"
                        },
                        "headline,summary headline,summary": {
                            cols: [10, 6],
                            template: "Cols2VideoStory"
                        }
                    },
                    1: {
                        oneLine: {
                            cols: [4, 12],
                            template: "Cols2StoryVideo"
                        },
                        "headline,summary": {
                            cols: [4, 12],
                            template: "Cols2StoryVideo"
                        },
                        "oneLine oneLine": {
                            cols: [4, 8, 4],
                            template: "Cols3StoryVideoStory"
                        },
                        "oneLine headline,summary": {
                            cols: [4, 8, 4],
                            template: "Cols3StoryVideoStory"
                        },
                        "headline,summary oneLine": {
                            cols: [4, 8, 4],
                            template: "Cols3StoryVideoStory"
                        },
                        "headline,summary headline,summary": {
                            cols: [4, 8, 4],
                            template: "Cols3StoryVideoStory"
                        }
                    }
                },
                Yt = {
                    cols: [7, 13],
                    template: "Cols2StoryFullAsset"
                },
                Jt = function(e) {
                    var t, n, r, i, a, s, l, c, d, u, p, m = e.node,
                        f = e.children,
                        h = e.index,
                        g = Object(H.h)(m.assetDisplayOptions.slice(1, 3)),
                        v = g.split(" "),
                        b = m.assets.findIndex((function(e) {
                            return !m.promotionalMedia || !e || e.id === m.promotionalMedia.id
                        })),
                        O = "Video" === (null === (t = m) || void 0 === t ? void 0 : null === (n = t.promotionalMedia) || void 0 === n ? void 0 : n.__typename),
                        w = "EmbeddedInteractive" === (null === (r = m) || void 0 === r ? void 0 : null === (i = r.promotionalMedia) || void 0 === i ? void 0 : null === (a = i.promotionalMedia) || void 0 === a ? void 0 : a.__typename) && "INTERACTIVE" === (null === (s = m) || void 0 === s ? void 0 : null === (l = s.assets) || void 0 === l ? void 0 : null === (c = l[b]) || void 0 === c ? void 0 : c.cardType),
                        x = m.promotionalMediaEmphasis,
                        k = void 0 === x ? "NONE" : x;
                    try {
                        var j = "NONE" === k ? O ? Gt : qt[g] : O ? Kt[b][g] : w ? Yt : Xt[g];
                        d = j.template, u = L()(j, ["template"]), p = o[d]
                    } catch (e) {
                        return null
                    }
                    var M = 0 === h,
                        P = "URGENT" === f[0].props.asset.cardType;
                    return m = O && M ? function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ut(n, !0).forEach((function(t) {
                                W()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, m, {
                        promotionalMediaEmphasis: "MAXIMUM"
                    }) : m, y.a.createElement(p, I()({
                        node: m,
                        storyRenditions: v,
                        isFirstPackage: !0,
                        isSpotlight: !0,
                        hideFirstHeadline: M && P,
                        imgSrc: b
                    }, u), f)
                };
            Jt.displayName = "SpotlightLargeTabletPackage", Jt.defaultProps = {
                children: null
            };
            var Zt = Jt;

            function Qt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function $t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qt(n, !0).forEach((function(t) {
                        W()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var en, tn, nn, on, rn, an = {
                    "headline,summary": "AuthorImageHeadlineContentMeta",
                    oneLine: "HeadlineMeta"
                },
                sn = {
                    "headline,summary": "MediaAuthorImageHeadlineContentMeta",
                    oneLine: "MediaHeadlineMeta"
                },
                ln = function(e) {
                    var t = e.node,
                        n = e.children,
                        o = t.promotionalMediaEmphasis,
                        r = "NONE" !== (void 0 === o ? "NONE" : o),
                        i = Object(H.h)(t.assetDisplayOptions).split(" "),
                        a = 3 === i.length && "oneLine" === i[1] && "oneLine" === i[2],
                        l = n[2] ? y.a.cloneElement(n[2], {
                            template: function() {
                                return "AuthorImageHeadlineContentMeta" === an[i[2]] && Object(H.g)(2, t) ? a ? "MediaHeadlineMeta" : "Col1HeadlineMetaCol2Media" : an[i[2]]
                            },
                            assetMux: {
                                headline: function(e) {
                                    return $t({}, e, {
                                        type: 2,
                                        balanced: !0,
                                        urgent: Object(H.f)(n[2])
                                    })
                                },
                                media: function(e) {
                                    return $t({}, e, {
                                        size: "small"
                                    })
                                }
                            }
                        }) : null;
                    return s()(H.c, {}, void 0, s()(H.b, {}, void 0, s()(H.a, {
                        columns: 1
                    }, void 0, n[0] && y.a.cloneElement(n[0], {
                        template: function() {
                            var e = an[i[0]];
                            return "AuthorImageHeadlineContentMeta" === e && Object(H.g)(0, t) ? "MediaHeadlineMeta" : r ? sn[i[0]] : e
                        },
                        assetMux: {
                            headline: function(e) {
                                return $t({}, e, {
                                    type: 2,
                                    showMediaLabel: !1
                                })
                            }
                        }
                    })), s()(H.a, {
                        columns: 1
                    }, void 0, s()(H.c, {}, void 0, n[1] && y.a.cloneElement(n[1], {
                        template: function() {
                            var e = an[i[1]];
                            return "AuthorImageHeadlineContentMeta" === e && Object(H.g)(1, t) ? "MediaHeadlineMeta" : r ? sn[i[1]] : e
                        },
                        assetMux: {
                            headline: function(e) {
                                return $t({}, e, {
                                    type: 2,
                                    urgent: Object(H.f)(n[1])
                                })
                            },
                            media: function(e) {
                                return $t({}, e, {
                                    size: "small"
                                })
                            }
                        }
                    }), n[2] && a && l))), n[2] && !a && s()("div", {}, void 0, l))
                };

            function cn() {
                var e = i()(["\n    fragment Package_node on Package {\n      id\n      newsStatus\n      assetDisplayOptions {\n        displayFields\n      }\n      assets {\n        __typename\n        ...Asset_asset\n      }\n      ...LedePackage_template\n    }\n\n    ", "\n    ", "\n  "]);
                return cn = function() {
                    return e
                }, e
            }
            ln.displayName = "SpotlightDesktop2Package";
            var dn = {
                    lede: Wt,
                    spotlightLargeTablet: Zt,
                    spotlightDesktop2: ln
                },
                un = (en = S.a.Consumer, tn = M()((function(e) {
                    var t = e.index,
                        n = e.node,
                        o = e.isSpotlight,
                        r = (n || {}).assets;
                    return {
                        block: {
                            package: {
                                type: o ? "spotlight" : "lede",
                                index: t,
                                storyCount: r ? r.filter((function(e) {
                                    return null !== e
                                })).length : 0
                            }
                        }
                    }
                })), Object(E.a)(nn = en(nn = tn((rn = on = function(e) {
                    function t() {
                        return c()(this, t), m()(this, h()(t).apply(this, arguments))
                    }
                    return v()(t, e), u()(t, [{
                        key: "getChildContext",
                        value: function() {
                            var e = this.context.lazy,
                                t = this.context.blockId,
                                n = this.props,
                                o = n.deviceType,
                                r = n.index;
                            e || "topstories" !== t || (e = r > ("smartphone" === o ? 0 : 2));
                            return {
                                lazy: e
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.node,
                                o = t.deviceType,
                                r = t.breakpoint,
                                i = t.packageRendition,
                                a = t.showBorder,
                                l = t.isFirstPackage,
                                c = t.desktopLayout,
                                d = t.index,
                                u = t.isSpotlight,
                                p = t.hasSpotlight,
                                m = n.assets,
                                f = n.name;
                            if (!i) return null;
                            var h = dn[i];
                            if (!m) return null;
                            var g = m.filter((function(e) {
                                    return null !== e
                                })),
                                v = !u && !c && "FEATURE" === (null == g ? void 0 : null === (e = g[0]) || void 0 === e ? void 0 : e.tone);
                            return g.length > 0 && s()(h, {
                                node: n,
                                deviceType: o,
                                breakpoint: r,
                                rendition: i,
                                index: d,
                                showBorder: a,
                                isFirstPackage: l,
                                hasFeatureTone: v,
                                label: !u && f,
                                isSpotlight: u,
                                hasSpotlight: p
                            }, void 0, g.map((function(e, t) {
                                return s()(C.a, {
                                    asset: "DEFAULT" === n.newsStatus || 0 !== t ? e : Object.assign({}, e, {
                                        newsStatus: n.newsStatus
                                    }),
                                    packageIndex: d,
                                    assetIndex: t
                                }, t.toString())
                            })))
                        }
                    }]), t
                }(b.Component), on.defaultProps = {
                    deviceType: "smartphone",
                    breakpoint: P.a.BREAKPOINT_S,
                    index: 0,
                    packageRendition: null,
                    showBorder: !0,
                    isFirstPackage: !1,
                    desktopLayout: !1,
                    isSpotlight: !1,
                    hasSpotlight: !1
                }, on.contextTypes = {
                    lazy: w.a.bool,
                    blockId: w.a.string
                }, on.childContextTypes = {
                    lazy: w.a.bool
                }, nn = rn)) || nn) || nn) || nn);
            un.fragments = {
                node: k()(cn(), C.a.fragments.asset, Wt.fragments.template)
            };
            t.a = un
        },
        pqFz: function(e, t, n) {
            "use strict";
            var o, r, i, a, s = n("gcR/"),
                l = n.n(s),
                c = n("lSNA"),
                d = n.n(c),
                u = n("lwsE"),
                p = n.n(u),
                m = n("W8MJ"),
                f = n.n(m),
                h = n("a1gu"),
                g = n.n(h),
                v = n("Nsbk"),
                b = n.n(v),
                y = n("7W2i"),
                O = n.n(y),
                w = n("q1tI"),
                x = (n("17x9"), n("X6oL")),
                k = n.n(x),
                j = n("UmXO"),
                M = n("j1S3"),
                P = n("rI8Z"),
                S = n("vEu8"),
                C = n("ZKN5"),
                E = n("Pqtm"),
                T = n("mFn4"),
                I = n.n(T),
                N = n("DNUX"),
                L = n("06b3"),
                D = n("OO03"),
                A = n("BPYT"),
                R = (n("SMB2"), n("wXC7")),
                H = n.n(R),
                B = Object(j.css)("position:relative;min-height:90px;width:100%;overflow:hidden;"),
                _ = Object(j.css)(H.a.a11y.visuallyHidden, ";"),
                z = Object(j.css)("width:100%;color:", H.a.color.gray40, ";text-transform:uppercase;font-size:10px;font-family:", H.a.font.franklin, ";text-align:center;letter-spacing:0.5px;padding:11px 0 10px;"),
                V = Object(j.css)("margin:0 auto;font-size:", H.a.font.size(16), ";line-height:", H.a.font.size(12), ";padding:28px 0 13px 25px;", H.a.breakpoint.medium, "{margin:18px auto 8px;padding:0 1.5%;}", H.a.breakpoint.large, "{max-width:", H.a.breakpoint.maxDesktopContentWidth, "px;}"),
                F = Object(j.css)("font-family:", H.a.font.franklin, ";font-weight:", H.a.font.weight.bold, ";letter-spacing:0.5px;color:", H.a.color.gray10, ";", H.a.breakpoint.medium, "{border-top:1px solid ", H.a.color.gray10, ";padding:2px 0 9px;&::before{content:'';border-top:1px solid ", H.a.color.gray10, ";display:block;padding-top:11px;}}"),
                W = Object(j.css)("font-size:0.625rem;line-height:0.625rem;font-family:", H.a.font.franklinBase, ";font-weight:", H.a.font.weight.book, ";font-style:normal;text-align:center;color:", H.a.color.gray50, ";margin:3px auto;padding:8px 9px;letter-spacing:0.05rem;background:transparent;border:0;border-radius:3px;display:block;"),
                U = Object(j.css)("color:", H.a.color.gray30, ";background-color:", H.a.color.gray70, ";");
            n.d(t, "b", (function() {
                return X
            }));
            var X = 11721671,
                q = (o = k()((function(e) {
                    var t = e.adId,
                        n = e.sequence,
                        o = t || null,
                        r = t || null;
                    return null === o && n && (o = "home-ad-".concat(n), r = "mid".concat(n)), {
                        event: "impression",
                        eventData: {
                            type: "impression",
                            trigger: "ad"
                        },
                        pageview: {
                            ad: {
                                slotId: o,
                                position: r
                            }
                        }
                    }
                })), Object(S.a)(r = o(r = Object(C.a)(r = Object(D.a)((a = i = function(e) {
                    function t() {
                        var e, n;
                        p()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = g()(this, (e = b()(t)).call.apply(e, [this].concat(r)))).state = {
                            adSlotVisible: !0,
                            isPaidPost: !1
                        }, n.responseStart = Object(M.a)(), n.topAdRemoved = !1, n.handleAdDefined = function(e) {
                            var t = n.props.tracking.trackEvent;
                            Object(A.a)({
                                trackEvent: t,
                                eventDetails: {
                                    timeDefined: e.timeDefined
                                }
                            })
                        }, n.handleAdRequested = function(e) {
                            var t = n.props.tracking.trackEvent;
                            Object(A.a)({
                                trackEvent: t,
                                eventDetails: {
                                    timeCalled: e.timeCalled
                                }
                            })
                        }, n.handleAdRendered = function(e) {
                            e.creativeTemplateId === X && n.setState({
                                isPaidPost: !0
                            }), n.props.handleAdRendered(e)
                        }, n.handleAdEmpty = function(e) {
                            var t = n.props.hideContainer;
                            "function" == typeof t ? t() : n.setState({
                                adSlotVisible: !1
                            });
                            var o = e.isEmpty,
                                r = n.props.tracking.trackEvent;
                            Object(A.a)({
                                trackEvent: r,
                                eventDetails: {
                                    isEmpty: o
                                }
                            })
                        }, n.handleAdError = function() {
                            "function" == typeof n.props.onScriptError && n.props.onScriptError();
                            var e = n.props.hideContainer;
                            "function" == typeof e ? e() : n.setState({
                                adSlotVisible: !1
                            })
                        }, n.handleImpression = function(e) {
                            "function" == typeof n.props.onImpressionViewable && n.props.onImpressionViewable();
                            var t = n.props.tracking.trackEvent;
                            Object(A.a)({
                                trackEvent: t,
                                eventDetails: {
                                    timeViewed: e.timeViewed
                                }
                            })
                        }, n
                    }
                    return O()(t, e), f()(t, [{
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                n = t.adData,
                                o = t.adId,
                                r = t.deviceType,
                                i = t.handleAdLoaded,
                                a = t.hideHeader,
                                s = L.a.load("vi_show_report_btn") || "";
                            return l()("div", {
                                className: Object(j.cx)((e = {}, d()(e, B, this.state.adSlotVisible), d()(e, _, !this.state.adSlotVisible), e))
                            }, void 0, !a && this.state.adSlotVisible && (this.state.isPaidPost ? l()("header", {
                                className: V
                            }, void 0, l()("h3", {
                                className: F
                            }, void 0, P.c.paidPostAdvert)) : ("smartphone" === r || "top" !== o) && l()("div", {
                                className: z
                            }, void 0, P.c.advertisement)), l()(E.AdSlotNew, {
                                id: "dfp-ad-".concat(o),
                                position: o,
                                onEmpty: this.handleAdEmpty,
                                onAdDefined: this.handleAdDefined,
                                onSlotLoaded: i,
                                onDFPResponse: this.handleAdRendered,
                                onAdRequested: this.handleAdRequested,
                                onImpressionViewable: this.handleImpression,
                                isPrioritized: "top" === o
                            }), s && l()(I.a, {
                                width: 360,
                                className: W,
                                activeClassName: U,
                                buttonContent: P.c.reportAd,
                                modalContent: l()(N.a, {
                                    adData: n
                                })
                            }))
                        }
                    }]), t
                }(w.Component), i.defaultProps = {
                    adId: "",
                    hideContainer: function() {
                        return null
                    },
                    hideHeader: !1,
                    handleAdRendered: function() {
                        return null
                    },
                    handleAdLoaded: function() {
                        return null
                    },
                    onImpressionViewable: function() {
                        return null
                    },
                    onScriptError: function() {
                        return null
                    },
                    adData: {},
                    adReq: {},
                    user: {},
                    config: {},
                    deviceType: "smartphone"
                }, r = a)) || r) || r) || r) || r);
            q.displayName = "StandardAd";
            t.a = q
        },
        r5Qd: function(e, t, n) {
            "use strict";
            var o = n("pVnL"),
                r = n.n(o),
                i = (n("f3/d"), n("gcR/")),
                a = n.n(i),
                s = n("QILm"),
                l = n.n(s),
                c = n("q1tI"),
                d = n.n(c),
                u = (n("17x9"), d.a.createContext({}));
            t.a = {
                Provider: function(e) {
                    var t = function(t) {
                            var n = t.config,
                                o = l()(t, ["config"]);
                            return a()(u.Provider, {
                                value: n
                            }, void 0, d.a.createElement(e, o))
                        },
                        n = e.displayName || e.name || "Component";
                    return t.displayName = "WithConfigProvider(".concat(n, ")"), t
                },
                Consumer: function(e) {
                    var t = function(t) {
                            return a()(u.Consumer, {}, void 0, (function(n) {
                                return d.a.createElement(e, r()({}, t, {
                                    config: n
                                }))
                            }))
                        },
                        n = e.displayName || e.name || "Component";
                    return t.displayName = "WithConfigConsumer(".concat(n, ")"), t
                }
            }
        },
        rjlW: function(e, t, n) {
            "use strict";
            var o = n("VkAN"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = n("lwsE"),
                l = n.n(s),
                c = n("W8MJ"),
                d = n.n(c),
                u = n("a1gu"),
                p = n.n(u),
                m = n("Nsbk"),
                f = n.n(m),
                h = n("7W2i"),
                g = n.n(h),
                v = n("q1tI"),
                b = n("17x9"),
                y = n.n(b),
                O = n("Dugd"),
                w = n.n(O),
                x = n("UmXO"),
                k = n("RKHt"),
                j = n.n(k),
                M = n("wXC7"),
                P = n.n(M),
                S = Object(x.css)("margin:", P.a.font.size(37), " auto;width:calc(100% - 20px);@media (min-width:340px) and (max-width:630px){width:calc(100% - 40px);}"),
                C = S,
                E = Object(x.css)(S, " max-width:", P.a.breakpoint.textBodyWidth, "px;"),
                T = Object(x.css)(S, " max-width:945px;", P.a.breakpoint.extraLarge, "{max-width:", P.a.breakpoint.mediaMaxWidth, "px;}");

            function I() {
                var e = r()(["\n    fragment EmbeddedInline_media on CreativeWork {\n      headline {\n        default\n      }\n      advertisingProperties {\n        sensitivity\n      }\n      displayProperties {\n        displayForPromotionOnly\n        maxWidth: maximumWidth\n        minWidth: minimumWidth\n      }\n      bylines {\n        prefix\n        creators {\n          ... on TimesTag {\n            displayName\n          }\n        }\n      }\n      ... on Published {\n        sourceId\n      }\n      ... on InteractiveWork {\n        credit\n        leadin\n        note\n        dataSource\n        html\n      }\n      ... on Interactive {\n        slug\n      }\n      ... on EmbeddedInteractive {\n        slug\n      }\n    }\n  "]);
                return I = function() {
                    return e
                }, e
            }
            var N = {
                    SMALL: E,
                    MEDIUM: E,
                    LARGE: T,
                    FULL: C
                },
                L = function(e) {
                    function t() {
                        return l()(this, t), p()(this, f()(t).apply(this, arguments))
                    }
                    return g()(t, e), d()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.media,
                                n = e.locksmith;
                            if (null == n ? void 0 : n.lock) {
                                var o = t.slug;
                                n.lock(o)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this.props,
                                o = n.media,
                                r = n.blockSize,
                                i = n.children,
                                s = n.inStory,
                                l = n.embeddedClass,
                                c = n.manageScripts,
                                d = n.enableInteractiveBridge,
                                u = s ? N[r] || E : "",
                                p = null === (e = o.displayProperties) || void 0 === e ? void 0 : e.maxWidth,
                                m = p ? (t = p, Object(x.css)("max-width:", t, "px;", P.a.breakpoint.extraLarge, "{max-width:", t, "px;}")) : null;
                            return a()(j.a, {
                                interactive: o,
                                className: Object(x.cx)(u, l, m),
                                size: r,
                                manageScripts: c,
                                enableInteractiveBridge: d
                            }, void 0, i)
                        }
                    }]), t
                }(v.Component);
            L.displayName = "EmbeddedInline", L.defaultProps = {
                blockSize: void 0,
                embeddedClass: void 0,
                inStory: !1,
                children: null,
                manageScripts: !1,
                locksmith: y.a.shape({}),
                enableInteractiveBridge: !0
            }, L.fragments = {
                media: w()(I())
            };
            t.a = L
        },
        s5Bo: function(e, t, n) {
            "use strict";
            var o = n("VkAN"),
                r = n.n(o),
                i = n("lSNA"),
                a = n.n(i),
                s = n("gcR/"),
                l = n.n(s),
                c = (n("q1tI"), n("17x9")),
                d = n.n(c),
                u = n("Dugd"),
                p = n.n(u),
                m = n("UmXO"),
                f = n("9ref"),
                h = n("GXaC"),
                g = n("STmI"),
                v = n("wXC7"),
                b = n.n(v),
                y = b.a.breakpoint,
                O = b.a.color,
                w = b.a.font,
                x = Object(m.css)("clear:both;padding:10px 0 0;display:flex;justify-content:space-between;", y.medium, "{justify-content:flex-start;}", y.large, "{padding:7px 0 0;}"),
                k = Object(m.css)("justify-content:center !important;"),
                j = Object(m.css)("height:18px;"),
                M = Object(m.css)("font-size:", w.size(14), ";line-height:", w.size(17), ";font-family:", w.franklin, ";font-weight:", w.weight.medium, ";letter-spacing:0.3px;color:", O.gray40, ";", y.medium, "{font-size:", w.size(12), ";align-self:flex-start;}"),
                P = Object(m.css)("margin-right:9px;"),
                S = Object(m.css)("border-bottom:1px solid ", O.gray75, ";display:inline-block;transition:border 0.6s ease;&:hover{border-bottom-color:", O.gray50, ";}a{color:", O.gray40, ";}"),
                C = (n("91GP"), n("rI8Z")),
                E = n("5dFD");

            function T() {
                var e = r()(["\n    fragment AssetComments_comments on Article {\n      commentProperties {\n        approvedCommentsCount\n      }\n    }\n  "]);
                return T = function() {
                    return e
                }, e
            }
            var I = function(e) {
                var t = e.approvedCommentsCount,
                    n = e.asset,
                    o = n.url,
                    r = Object.assign({}, n, {
                        url: "".concat(o, "#commentsContainer")
                    });
                return l()("div", {
                    className: S
                }, void 0, t && t >= 25 ? l()(E.a, {
                    link: r
                }, void 0, "".concat(t, " ").concat(C.c.comments.comments)) : "")
            };
            I.displayName = "AssetComments", I.defaultProps = {
                approvedCommentsCount: null,
                asset: {}
            }, I.fragments = {
                comments: p()(T())
            };
            var N = I;

            function L() {
                var e = r()(["\n  fragment AssetMeta_asset on HasPromotionalProperties {\n    ...AssetMeta_asset_noComments\n    ...AssetComments_comments\n  }\n  ", "\n  ", "\n"]);
                return L = function() {
                    return e
                }, e
            }

            function D() {
                var e = r()(["\n  fragment AssetMeta_asset_noComments on HasPromotionalProperties {\n    __typename\n    ... on HasPromotionalProperties {\n      newsStatus\n    }\n    ... on Published {\n      lastMajorModification\n      lastModified\n    }\n    ... on CreativeWork {\n      section {\n        id\n        displayName\n      }\n      subsection {\n        id\n        displayName\n      }\n    }\n    ...SpanAudio_media\n  }\n  ", "\n"]);
                return D = function() {
                    return e
                }, e
            }
            var A = function(e, t) {
                var n, o = e.asset,
                    r = e.centered,
                    i = e.hideMeta,
                    s = e.playerRef,
                    c = t.showSection;
                if ("Audio" === o.__typename) {
                    return l()("div", {
                        className: x
                    }, void 0, l()(h.a, {}, void 0, l()(f.a, {
                        media: o,
                        playerOptions: {
                            audioControls: {
                                volume: !1,
                                rewind: !1,
                                suppressDurationPlaceholder: !0,
                                durationStyle: {
                                    fontSize: "12px",
                                    color: "#999",
                                    fontWeight: "500",
                                    letterSpacing: "0.3px"
                                }
                            }
                        },
                        playerRef: s
                    })))
                }
                var d = o.section,
                    u = o.subsection,
                    p = o.creators,
                    v = o.lastMajorModification,
                    b = o.lastModified,
                    y = o.commentProperties,
                    O = u && u.displayName || d && d.displayName,
                    w = v || b,
                    S = (y || {}).approvedCommentsCount;
                return i && "DEFAULT" === o.newsStatus ? null : l()("div", {
                    className: Object(m.cx)(x, (n = {}, a()(n, k, r), a()(n, j, !c && !p && !v), n))
                }, void 0, l()("div", {
                    className: M
                }, void 0, c && O && l()("span", {
                    className: Object(m.cx)(a()({}, P, w))
                }, void 0, O), l()(g.a, {
                    asset: o
                }), l()(N, {
                    asset: o,
                    approvedCommentsCount: S
                })))
            };
            A.displayName = "AssetMeta", A.defaultProps = {
                centered: !1,
                hideMeta: !1,
                playerRef: void 0
            }, A.contextTypes = {
                showSection: d.a.bool
            }, (A.fragments = {}).assetNoComments = p()(D(), f.a.fragments.media), A.fragments.asset = p()(L(), A.fragments.assetNoComments, N.fragments.comments);
            t.a = A
        },
        sIbe: function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o),
                i = (n("q1tI"), n("17x9"), function(e) {
                    var t = e.stroke;
                    return r()("svg", {
                        width: "7",
                        height: "11",
                        viewBox: "0 0 7 12"
                    }, void 0, r()("path", {
                        d: "M1 1l4.333 5L1 11",
                        stroke: t,
                        strokeWidth: "2",
                        fill: "none",
                        fillRule: "evenodd"
                    }))
                });
            i.displayName = "CaretRight", i.defaultProps = {
                stroke: "#121212"
            }, t.a = i
        },
        t0IW: function(e, t, n) {
            "use strict";
            n("OG14");
            var o = n("J4zp"),
                r = n.n(o),
                i = (n("rGqo"), n("yt8O"), n("Btvt"), n("/8Fb"), n("CxY0")),
                a = n.n(i);
            t.a = function(e, t) {
                var n = a.a.parse(e, !0);
                return Object.entries(t).forEach((function(e) {
                    var t = r()(e, 2),
                        o = t[0],
                        i = t[1];
                    n.query[o] = i
                })), n.search = null, a.a.format(n)
            }
        },
        tqOa: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            }));
            var o = function(e) {
                    return "Block_Beta" === (null == e ? void 0 : e.__typename)
                },
                r = function(e) {
                    return "Advert_Beta" === (null == e ? void 0 : e.__typename)
                },
                i = function(e) {
                    return "MultiListBlock_Beta" === (null == e ? void 0 : e.__typename)
                },
                a = function(e) {
                    return "PersonalizedBlock_Beta" === (null == e ? void 0 : e.__typename)
                }
        },
        uwQJ: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "a", (function() {
                return a
            }));
            var o = {
                    dockContentHeight: {
                        mobileSmall: 165,
                        mobileLarge: 165,
                        small: 165,
                        mediumLarge: 165
                    },
                    dockHeaderHeight: {
                        mobileSmall: 65,
                        mobileLarge: 65,
                        small: 55,
                        mediumLarge: 55
                    },
                    dockHeaderOffset: {
                        mobileSmall: 5,
                        mobileLarge: 5,
                        small: 0,
                        mediumLarge: 0
                    },
                    dockExpandSpeed: "200ms"
                },
                r = {
                    dockContentHeight: {
                        mobileSmall: 270,
                        mobileLarge: 335,
                        small: 165,
                        mediumLarge: 165
                    },
                    dockHeaderHeight: {
                        mobileSmall: 65,
                        mobileLarge: 65,
                        small: 55,
                        mediumLarge: 55
                    },
                    dockHeaderOffset: {
                        mobileSmall: 5,
                        mobileLarge: 5,
                        small: 0,
                        mediumLarge: 0
                    },
                    dockExpandSpeed: "200ms"
                },
                i = {
                    dockContentHeight: {
                        mobileSmall: 110,
                        mobileLarge: 110,
                        small: 110,
                        mediumLarge: 110
                    },
                    dockHeaderHeight: {
                        mobileSmall: 55,
                        mobileLarge: 55,
                        small: 55,
                        mediumLarge: 55
                    },
                    dockHeaderOffset: {
                        mobileSmall: 5,
                        mobileLarge: 5,
                        small: 0,
                        mediumLarge: 0
                    },
                    dockExpandSpeed: "200ms"
                },
                a = {
                    dockContentHeight: {
                        mobileSmall: 159,
                        mobileLarge: 159,
                        small: 150,
                        mediumLarge: 150
                    },
                    dockHeaderHeight: {
                        mobileSmall: 55,
                        mobileLarge: 55,
                        small: 55,
                        mediumLarge: 55
                    },
                    dockHeaderOffset: {
                        mobileSmall: 5,
                        mobileLarge: 5,
                        small: 0,
                        mediumLarge: 0
                    },
                    dockExpandSpeed: "200ms"
                }
        },
        uyXp: function(e, t, n) {
            "use strict";
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var o = n("VkAN"),
                r = n.n(o),
                i = n("gcR/"),
                a = n.n(i),
                s = (n("tUrg"), n("lwsE")),
                l = n.n(s),
                c = n("W8MJ"),
                d = n.n(c),
                u = n("a1gu"),
                p = n.n(u),
                m = n("Nsbk"),
                f = n.n(m),
                h = n("7W2i"),
                g = n.n(h),
                v = (n("INYr"), n("lSNA")),
                b = n.n(v),
                y = (n("f3/d"), n("dRSK"), n("q1tI")),
                O = n.n(y),
                w = n("17x9"),
                x = n.n(w),
                k = n("Dugd"),
                j = n.n(k),
                M = n("X6oL"),
                P = n.n(M),
                S = n("UmXO"),
                C = n("0Pd7"),
                E = n("ZKN5"),
                T = n("Lkij"),
                I = n("5dFD"),
                N = n("hXAx"),
                L = n("s5Bo"),
                D = n("MsNm"),
                A = n("Imfu"),
                R = n("jVh7"),
                H = n("iiJN"),
                B = (n("TVP6"), n("wXC7")),
                _ = n.n(B),
                z = n("pVnL"),
                V = n.n(z);
            x.a.object, x.a.object, x.a.object, x.a.object, x.a.object, x.a.object, x.a.object;

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var U, X, q = function(e) {
                    var t = e.displayName || e.name || "Component";

                    function n(t) {
                        var n = t.assetMux;
                        return n.media && n.media.media && "Audio" === n.media.media.__typename ? O.a.createElement(e, V()({}, t, {
                            assetMux: W({}, n, {
                                headline: W({}, n.headline || {}, {
                                    wrapLink: !1
                                }),
                                media: W({}, n.media, {
                                    wrapLink: !1
                                }),
                                link: W({}, n.link || {}, {
                                    disableLink: !0
                                })
                            })
                        })) : O.a.createElement(e, t)
                    }
                    return n.displayName = "WithAudio(".concat(t, ")"), n
                },
                G = Object(S.css)("padding:0 25px 25px;", _.a.breakpoint.medium, "{padding:0;}"),
                K = Object(S.css)("margin-bottom:11px;"),
                Y = {
                    Template: q(U = function(e) {
                        function t() {
                            return l()(this, t), p()(this, f()(t).apply(this, arguments))
                        }
                        return g()(t, e), d()(t, [{
                            key: "render",
                            value: function() {
                                var e = this.props.assetMux;
                                return a()("div", {}, void 0, a()("div", {
                                    className: K
                                }, void 0, O.a.createElement(D.a, e.media)), a()("div", {
                                    className: G
                                }, void 0, O.a.createElement(I.a, e.link, O.a.createElement(R.a, e.authorImage), O.a.createElement(A.a, e.headline), O.a.createElement(N.a, e.content)), O.a.createElement(L.a, e.meta)))
                            }
                        }]), t
                    }(y.Component)) || U,
                    Logic: {}
                };

            function J(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Z = {
                    column: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? J(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            cols: [{
                                columns: 1,
                                noVerticalBorder: !0,
                                noPaddingRight: !0
                            }, {
                                columns: 1,
                                noVerticalBorder: !0
                            }]
                        })
                    }
                },
                Q = q(X = function(e) {
                    function t() {
                        return l()(this, t), p()(this, f()(t).apply(this, arguments))
                    }
                    return g()(t, e), d()(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.assetMux;
                            return a()(H.b, {}, void 0, O.a.createElement(H.a, e.column.cols[0], O.a.createElement(I.a, e.link, O.a.createElement(R.a, e.authorImage), O.a.createElement(A.a, e.headline), O.a.createElement(N.a, e.content)), O.a.createElement(L.a, e.meta)), O.a.createElement(H.a, e.column.cols[1], O.a.createElement(D.a, e.media)))
                        }
                    }]), t
                }(y.Component)) || X;
            Q.displayName = "Col1AuthorImageHeadlineContentMetaCol2MediaTemplate";
            var $, ee = {
                    Template: Q,
                    Logic: Z
                },
                te = Object(S.css)("padding:20px 25px;"),
                ne = Object(S.css)("margin-left:20px;width:60px;min-width:60px;"),
                oe = Object(S.css)("display:flex;align-items:center;justify-content:space-between;");

            function re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var ie, ae = {
                    headline: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? re(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            showMediaLabel: !0
                        })
                    }
                },
                se = {
                    Template: q($ = function(e) {
                        function t() {
                            return l()(this, t), p()(this, f()(t).apply(this, arguments))
                        }
                        return g()(t, e), d()(t, [{
                            key: "render",
                            value: function() {
                                var e = this.props.assetMux;
                                return a()("div", {
                                    className: te
                                }, void 0, a()("div", {
                                    className: oe
                                }, void 0, O.a.createElement(I.a, e.link, O.a.createElement(R.a, e.authorImage), O.a.createElement(A.a, e.headline), O.a.createElement(N.a, e.content)), a()("div", {
                                    className: ne
                                }, void 0, O.a.createElement(D.a, e.media))), O.a.createElement(L.a, e.meta))
                            }
                        }]), t
                    }(y.Component)) || $,
                    Logic: ae
                };

            function le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var ce = _.a.breakpoint,
                de = Object(S.css)("padding:20px 25px;", ce.medium, "{padding:0;}"),
                ue = {
                    headline: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? le(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            showMediaLabel: !0
                        })
                    }
                },
                pe = {
                    Template: q(ie = function(e) {
                        function t() {
                            return l()(this, t), p()(this, f()(t).apply(this, arguments))
                        }
                        return g()(t, e), d()(t, [{
                            key: "render",
                            value: function() {
                                var e = this.props.assetMux;
                                return a()("div", {
                                    className: de
                                }, void 0, O.a.createElement(I.a, e.link, O.a.createElement(R.a, e.authorImage), O.a.createElement(A.a, e.headline), O.a.createElement(N.a, e.content)), O.a.createElement(L.a, e.meta))
                            }
                        }]), t
                    }(y.Component)) || ie,
                    Logic: ue
                };

            function me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var fe = {
                    headline: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? me(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            type: 2
                        })
                    }
                },
                he = Object(S.css)("margin-bottom:11px;"),
                ge = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: he
                    }, void 0, O.a.createElement(D.a, t.media)), O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline)), O.a.createElement(L.a, t.meta))
                };
            ge.displayName = "MediaHeadlineMetaTemplate";
            var ve = {
                Template: ge,
                Logic: fe
            };

            function be(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var ye = _.a.breakpoint,
                Oe = Object(S.css)("padding:20px 25px;", ye.medium, "{padding:0;}"),
                we = {
                    headline: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? be(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            type: 2,
                            showMediaLabel: !0,
                            showSentence: !0
                        })
                    }
                },
                xe = function(e) {
                    var t = e.assetMux;
                    return a()("div", {
                        className: Oe
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(R.a, t.authorImage), O.a.createElement(A.a, t.headline)))
                };
            xe.displayName = "AuthorImageHeadlineTemplate";
            var ke, je = {
                Template: xe,
                Logic: we
            };

            function Me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Pe, Se = _.a.breakpoint,
                Ce = Object(S.css)("padding:20px 25px;", Se.medium, "{padding:0;}"),
                Ee = {
                    headline: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Me(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            type: 2,
                            showMediaLabel: !0,
                            showSentence: !0
                        })
                    }
                },
                Te = {
                    Template: q(ke = function(e) {
                        function t() {
                            return l()(this, t), p()(this, f()(t).apply(this, arguments))
                        }
                        return g()(t, e), d()(t, [{
                            key: "render",
                            value: function() {
                                var e = this.props.assetMux;
                                return a()("div", {
                                    className: Ce
                                }, void 0, O.a.createElement(I.a, e.link, O.a.createElement(R.a, e.authorImage), O.a.createElement(A.a, e.headline)), O.a.createElement(L.a, e.meta))
                            }
                        }]), t
                    }(y.Component)) || ke,
                    Logic: Ee
                };

            function Ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ie(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Le = {
                    headline: function(e) {
                        return Ne({}, e, {
                            showSentence: !0,
                            showMediaLabel: !0
                        })
                    },
                    meta: function(e) {
                        return Ne({}, e, {
                            hideMeta: !1
                        })
                    }
                },
                De = {
                    Template: q(Pe = function(e) {
                        function t() {
                            return l()(this, t), p()(this, f()(t).apply(this, arguments))
                        }
                        return g()(t, e), d()(t, [{
                            key: "render",
                            value: function() {
                                var e = this.props.assetMux;
                                return a()("div", {}, void 0, O.a.createElement(I.a, e.link, O.a.createElement(A.a, e.headline)), O.a.createElement(L.a, e.meta))
                            }
                        }]), t
                    }(y.Component)) || Pe,
                    Logic: Le
                };

            function Ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Re = {
                    headline: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ae(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            showSentence: !0,
                            type: 2
                        })
                    }
                },
                He = Object(S.css)("margin-bottom:11px;"),
                Be = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: He
                    }, void 0, O.a.createElement(D.a, t.media)), O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline)))
                };
            Be.displayName = "MediaHeadlinetemplate";
            var _e = {
                    Template: Be,
                    Logic: Re
                },
                ze = n("3NoI"),
                Ve = n.n(ze),
                Fe = Object(S.css)("display:flex;align-items:center;justify-content:flex-start;"),
                We = {
                    small: 25,
                    medium: 45,
                    large: 55
                },
                Ue = Ve()("div", {
                    target: "e18972d70"
                })("display:block;float:left;margin-right:10px;flex-shrink:0;", (function(e) {
                    return e.size && We[e.size] && "\n\n    figure {\n      width: ".concat(We[e.size], "px;\n      height: ").concat(We[e.size], "px;\n    }\n  ")
                }), ";"),
                Xe = Ve()("div", {
                    target: "e18972d71"
                })("display:block;", (function(e) {
                    return e.inline && "\n    display: inline-block;\n    margin-right: 5px;\n  "
                }), ";", (function(e) {
                    return e.isHidden && "\n    display: none;\n  "
                }), ";"),
                qe = function(e) {
                    var t = e.assetMux;
                    return a()("div", {
                        className: Fe
                    }, void 0, O.a.createElement(Ue, t.media, O.a.createElement(D.a, t.media)), O.a.createElement(I.a, t.link, O.a.createElement(Xe, t.headline, O.a.createElement(A.a, t.headline)), O.a.createElement(Xe, t.content, O.a.createElement(N.a, t.content))))
                };
            qe.displayName = "MediaHeadlineContentTemplate";
            var Ge = {
                Template: qe,
                Logic: {}
            };

            function Ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Ye = {
                    column: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ke(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            cols: [{
                                columns: 1,
                                noVerticalBorder: !0
                            }, {
                                columns: 1,
                                noVerticalBorder: !0
                            }]
                        })
                    }
                },
                Je = function(e) {
                    var t = e.assetMux;
                    return a()(H.b, {}, void 0, O.a.createElement(H.a, V()({}, t.column.cols[0], {
                        noPaddingRight: !0
                    }), O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline)), O.a.createElement(L.a, t.meta)), O.a.createElement(H.a, t.column.cols[1], O.a.createElement(D.a, t.media)))
                };
            Je.displayName = "Col1HeadlineMetaCol2MediaTemplate";
            var Ze = {
                Template: Je,
                Logic: Ye
            };

            function Qe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var $e = {
                    column: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Qe(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            cols: [{
                                columns: 1,
                                noVerticalBorder: !0
                            }, {
                                columns: 3,
                                noVerticalBorder: !0
                            }]
                        })
                    }
                },
                et = function(e) {
                    var t = e.assetMux;
                    return a()(H.b, {}, void 0, O.a.createElement(H.a, V()({}, t.column.cols[0], {
                        noPaddingRight: !0
                    }), O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline), O.a.createElement(N.a, t.content)), O.a.createElement(L.a, t.meta)), O.a.createElement(H.a, t.column.cols[1], O.a.createElement(D.a, t.media)))
                };
            et.displayName = "Col1HeadlineContentMetaCol2MediaTemplate";
            var tt = {
                Template: et,
                Logic: $e
            };

            function nt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ot(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nt(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var rt = {
                    headline: function(e) {
                        return ot({}, e, {
                            type: 7
                        })
                    },
                    column: function(e) {
                        return ot({}, e, {
                            cols: [{
                                columns: 7,
                                noPaddingRight: !1
                            }, {
                                columns: 13,
                                noVerticalBorder: !0
                            }]
                        })
                    }
                },
                it = function(e) {
                    var t = e.assetMux;
                    return a()(H.b, {}, void 0, O.a.createElement(H.a, t.column.cols[0], O.a.createElement(I.a, t.link, O.a.createElement(R.a, t.authorImage), O.a.createElement(A.a, t.headline))), O.a.createElement(H.a, t.column.cols[1], O.a.createElement(I.a, t.link, O.a.createElement(N.a, t.content)), O.a.createElement(L.a, t.meta)))
                };
            it.displayName = "Col1AuthorImageHeadlineCol2ContentMetaTemplate";
            var at = {
                Template: it,
                Logic: rt
            };

            function st(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var lt = {
                    media: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? st(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            inlineVideo: !0
                        })
                    }
                },
                ct = Object(S.css)("margin:0 25px 25px;"),
                dt = {
                    Template: function(e) {
                        var t = e.assetMux;
                        return t.media.narrowImage ? a()("div", {
                            className: ct
                        }, void 0, O.a.createElement(D.a, t.media)) : O.a.createElement(D.a, t.media)
                    },
                    Logic: lt
                },
                ut = Object(S.css)("margin-bottom:15px;");

            function pt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var mt = {
                    media: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? pt(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            inlineVideo: !0
                        })
                    }
                },
                ft = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: ut
                    }, void 0, O.a.createElement(A.a, t.banner)), O.a.createElement(D.a, t.media))
                };
            ft.displayName = "BannerMediaTemplate";
            var ht = {
                    Template: ft,
                    Logic: mt
                },
                gt = Object(S.css)("margin-bottom:8px;"),
                vt = Object(S.css)("margin-bottom:15px;");

            function bt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var yt = {
                    media: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? bt(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bt(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            metaPosition: null,
                            meta: "credit",
                            inlineVideo: !0,
                            showSection: !0
                        })
                    }
                },
                Ot = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: vt
                    }, void 0, O.a.createElement(A.a, t.banner)), a()("div", {
                        className: gt
                    }, void 0, O.a.createElement(D.a, t.media)), O.a.createElement(L.a, t.meta))
                };
            Ot.displayName = "BannerMediaMetaTemplate";
            var wt, xt = {
                    Template: Ot,
                    Logic: yt
                },
                kt = Object(S.css)("float:right;width:calc(50% - 15px);margin-left:15px;margin-bottom:5px;"),
                jt = {
                    Template: q(wt = function(e) {
                        function t() {
                            return l()(this, t), p()(this, f()(t).apply(this, arguments))
                        }
                        return g()(t, e), d()(t, [{
                            key: "render",
                            value: function() {
                                var e = this.props.assetMux;
                                return a()("div", {}, void 0, a()("div", {
                                    className: kt
                                }, void 0, O.a.createElement(D.a, e.media)), O.a.createElement(I.a, e.link, O.a.createElement(R.a, e.authorImage), O.a.createElement(A.a, e.headline), O.a.createElement(N.a, e.content)), O.a.createElement(L.a, e.meta))
                            }
                        }]), t
                    }(y.Component)) || wt,
                    Logic: {}
                };

            function Mt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Pt = {
                    headline: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Mt(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mt(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            type: 2,
                            showMediaLabel: !0
                        })
                    }
                },
                St = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline)))
                };
            St.displayName = "HeadlineTemplate";
            var Ct = {
                    Template: St,
                    Logic: Pt
                },
                Et = Object(S.css)("margin-bottom:21px;"),
                Tt = Object(S.css)("max-width:75%;margin:0 auto;");

            function It(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Nt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? It(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Lt = {
                    headline: function(e) {
                        return Nt({}, e, {
                            type: 3,
                            centered: !0
                        })
                    },
                    content: function(e) {
                        return Nt({}, e, {
                            centered: !0
                        })
                    },
                    meta: function(e) {
                        return Nt({}, e, {
                            centered: !0
                        })
                    },
                    media: function(e) {
                        return Nt({}, e, {
                            showVideoMeta: !1
                        })
                    }
                },
                Dt = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: Et
                    }, void 0, O.a.createElement(D.a, t.media)), a()("div", {
                        className: Tt
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline), O.a.createElement(N.a, t.content)), O.a.createElement(L.a, t.meta)))
                };
            Dt.displayName = "Col1MediaHeadlineContentMetaTemplate";
            var At = {
                Template: Dt,
                Logic: Lt
            };

            function Rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ht(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rt(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Bt = {
                    headline: function(e) {
                        return Ht({}, e, {
                            inline: !0
                        })
                    },
                    content: function(e) {
                        return Ht({}, e, {
                            inline: !0
                        })
                    }
                },
                _t = Ve()("div", {
                    target: "e1no8pd50"
                })((function(e) {
                    return e.inline && "\n    display: inline-block;\n    padding-right: 10px;\n  "
                }), ";"),
                zt = Ve()("div", {
                    target: "e1no8pd51"
                })((function(e) {
                    return e.inline && "display: inline-block;"
                }), ";"),
                Vt = function(e) {
                    var t = e.assetMux;
                    return O.a.createElement(I.a, t.link, O.a.createElement(_t, t.headline, O.a.createElement(A.a, t.headline)), O.a.createElement(zt, t.content, O.a.createElement(N.a, t.content)))
                };
            Vt.displayName = "HeadlineContentTemplate";
            var Ft = {
                Template: Vt,
                Logic: Bt
            };

            function Wt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wt(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Xt = {
                    headline: function(e) {
                        return Ut({}, e, {
                            type: 8
                        })
                    },
                    media: function(e) {
                        return Ut({}, e, {
                            metaPosition: "side",
                            imageWidth: 5,
                            metaWidth: 1,
                            meta: "caption"
                        })
                    },
                    column: function(e) {
                        return Ut({}, e, {
                            cols: [{
                                columns: 1,
                                noPaddingRight: !0
                            }, {
                                columns: 3,
                                noVerticalBorder: !0
                            }]
                        })
                    }
                },
                qt = Object(S.css)("margin-bottom:15px;"),
                Gt = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, !(t.headline && t.headline.hideHeadline) && a()("div", {
                        className: qt
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline))), a()(H.b, {}, void 0, O.a.createElement(H.a, t.column.cols[0], O.a.createElement(I.a, t.link, O.a.createElement(N.a, t.content)), O.a.createElement(L.a, t.meta)), O.a.createElement(H.a, t.column.cols[1], O.a.createElement(D.a, t.media))))
                };
            Gt.displayName = "Row1HeadlineRow2Col1ContentMetaCol2MediaTemplate";
            var Kt = {
                Template: Gt,
                Logic: Xt
            };

            function Yt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Jt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Yt(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Zt = {
                    media: function(e) {
                        return Jt({}, e, {
                            metaPosition: "side",
                            imageWidth: 5,
                            metaWidth: 1,
                            meta: "caption"
                        })
                    },
                    column: function(e) {
                        return Jt({}, e, {
                            cols: [{
                                columns: 1,
                                noPaddingRight: !0
                            }, {
                                columns: 3,
                                noVerticalBorder: !0
                            }]
                        })
                    }
                },
                Qt = Object(S.css)("margin-bottom:15px;"),
                $t = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: Qt
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.banner))), a()(H.b, {}, void 0, O.a.createElement(H.a, t.column.cols[0], O.a.createElement(I.a, t.link, O.a.createElement(R.a, t.authorImage), O.a.createElement(A.a, t.headline), O.a.createElement(N.a, t.content)), O.a.createElement(L.a, t.meta)), O.a.createElement(H.a, t.column.cols[1], O.a.createElement(D.a, t.media))))
                };
            $t.displayName = "Row1BannerRow2Col1AuthorImageHeadlineContentMetaCol2MediaTemplate";
            var en = {
                    Template: $t,
                    Logic: Zt
                },
                tn = Object(S.css)("margin-bottom:15px;"),
                nn = Object(S.css)("&::before{content:'';display:block;border-bottom:1px solid ", _.a.color.gray60, ";width:180px;margin:15px auto;}");

            function on(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function rn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? on(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var an = {
                    headline: function(e) {
                        return rn({}, e, {
                            type: 7
                        })
                    },
                    column: function(e) {
                        return rn({}, e, {
                            cols: [{
                                columns: 7,
                                noPaddingRight: !1
                            }, {
                                columns: 13,
                                noVerticalBorder: !0
                            }]
                        })
                    }
                },
                sn = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: tn
                    }, void 0, O.a.createElement(A.a, t.banner)), a()("div", {
                        className: nn
                    }, void 0, a()(H.b, {}, void 0, O.a.createElement(H.a, t.column.cols[0], O.a.createElement(I.a, t.link, O.a.createElement(R.a, t.authorImage), O.a.createElement(A.a, t.headline))), O.a.createElement(H.a, t.column.cols[1], O.a.createElement(I.a, t.link, O.a.createElement(N.a, t.content)), O.a.createElement(L.a, t.meta)))))
                };
            sn.displayName = "Row1BannerRow2Col1AuthorImageHeadlineCol2ContentMetaTemplate";
            var ln = {
                    Template: sn,
                    Logic: an
                },
                cn = Object(S.css)("margin-bottom:8px;"),
                dn = Object(S.css)("max-width:66%;margin:0 auto;");

            function un(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var pn = {
                    media: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? un(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : un(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            metaPosition: null,
                            meta: "credit",
                            inlineVideo: !0,
                            showSection: !0
                        })
                    }
                },
                mn = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: cn
                    }, void 0, O.a.createElement(D.a, t.media)), a()("div", {
                        className: Object(S.cx)(b()({}, dn, t.content.centered))
                    }, void 0, O.a.createElement(N.a, t.content), O.a.createElement(L.a, t.meta)))
                };
            mn.displayName = "MediaContentMetaTemplate";
            var fn = {
                Template: mn,
                Logic: pn
            };

            function hn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var gn = Object(S.css)("margin-bottom:8px;"),
                vn = {
                    media: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? hn(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hn(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            metaPosition: null,
                            meta: "credit",
                            inlineVideo: !0,
                            showSection: !0
                        })
                    }
                },
                bn = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: gn
                    }, void 0, O.a.createElement(D.a, t.media)), O.a.createElement(L.a, t.meta))
                };
            bn.displayName = "MediaMetaTemplate";
            var yn = {
                Template: bn,
                Logic: vn
            };

            function On(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function wn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? On(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : On(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var xn = {
                    media: function(e) {
                        return wn({}, e, {
                            inlineVideo: !0,
                            meta: "credit",
                            preferredCrop: "threeByTwoLargeAt2X"
                        })
                    },
                    headline: function(e) {
                        return wn({}, e, {
                            hideHeadline: "VideoCard" === e.asset.card.__typename
                        })
                    }
                },
                kn = Object(S.css)("padding:7px 25px 25px;"),
                jn = Object(S.css)("margin:25px 25px 0;"),
                Mn = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: t.media.narrowImage ? jn : ""
                    }, void 0, O.a.createElement(D.a, t.media)), a()("div", {
                        className: kn
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(R.a, t.authorImage), O.a.createElement(A.a, t.headline), O.a.createElement(N.a, t.content)), O.a.createElement(L.a, t.meta)))
                };
            Mn.displayName = "MobileMediaAuthorImageHeadlineContentMetaTemplate";
            var Pn, Sn = {
                    Template: Mn,
                    Logic: xn
                },
                Cn = Object(S.css)("margin-bottom:11px;"),
                En = {
                    Template: q(Pn = function(e) {
                        function t() {
                            return l()(this, t), p()(this, f()(t).apply(this, arguments))
                        }
                        return g()(t, e), d()(t, [{
                            key: "render",
                            value: function() {
                                var e = this.props.assetMux;
                                return a()("div", {}, void 0, a()("div", {
                                    className: Cn
                                }, void 0, O.a.createElement(D.a, e.media)), O.a.createElement(I.a, e.link, O.a.createElement(R.a, e.authorImage), O.a.createElement(A.a, e.headline)), O.a.createElement(L.a, e.meta))
                            }
                        }]), t
                    }(y.Component)) || Pn,
                    Logic: {}
                };

            function Tn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function In(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tn(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nn = {
                    headline: function(e) {
                        return In({}, e, {
                            type: 2
                        })
                    },
                    media: function(e) {
                        return In({}, e, {
                            preferredCrop: "threeByTwoSmallAt2X"
                        })
                    },
                    column: function(e) {
                        return In({}, e, {
                            cols: [{
                                columns: 3
                            }, {
                                columns: 2,
                                noVerticalBorder: !0,
                                noPadding: !0
                            }]
                        })
                    }
                },
                Ln = Object(S.css)("padding:30px 25px;"),
                Dn = function(e) {
                    var t = e.assetMux;
                    return a()("div", {
                        className: Ln
                    }, void 0, a()(H.b, {}, void 0, O.a.createElement(H.a, t.column.cols[0], O.a.createElement(I.a, t.link, O.a.createElement(R.a, t.authorImage), O.a.createElement(A.a, t.headline))), O.a.createElement(H.a, t.column.cols[1], O.a.createElement(D.a, t.media))), O.a.createElement(L.a, t.meta))
                };
            Dn.displayName = "Row1Col1AuthorImageHeadlineCol2MediaRow2MetaTemplate";
            var An, Rn = {
                    Template: Dn,
                    Logic: Nn
                },
                Hn = _.a.breakpoint,
                Bn = Object(S.css)("width:60px;float:right;margin:5px 0 0 10px;"),
                _n = Object(S.css)("width:75px;height:75px;margin:5px 0 10px 10px;"),
                zn = Object(S.css)("padding:20px 25px;", Hn.medium, "{padding:0;}");

            function Vn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Fn = {
                    media: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Vn(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vn(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            preferredCrop: "thumbLarge"
                        })
                    }
                },
                Wn = {
                    Template: q(An = function(e) {
                        function t() {
                            return l()(this, t), p()(this, f()(t).apply(this, arguments))
                        }
                        return g()(t, e), d()(t, [{
                            key: "render",
                            value: function() {
                                var e = this.props.assetMux;
                                return a()("div", {
                                    className: zn
                                }, void 0, a()("div", {
                                    className: Object(S.cx)(Bn, b()({}, _n, "AUDIO" === e.media.cardType))
                                }, void 0, O.a.createElement(D.a, e.media)), O.a.createElement(I.a, e.link, O.a.createElement(A.a, e.headline), O.a.createElement(N.a, e.content)), O.a.createElement(L.a, e.meta))
                            }
                        }]), t
                    }(y.Component)) || An,
                    Logic: Fn
                };

            function Un(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Xn = {
                    headline: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Un(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            showSentence: !0,
                            showMediaLabel: !0
                        })
                    }
                },
                qn = Object(S.css)("padding:20px 25px;"),
                Gn = function(e) {
                    var t = e.assetMux;
                    return a()("div", {
                        className: qn
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline)))
                };
            Gn.displayName = "MobileHeadlineTemplate";
            var Kn = {
                    Template: Gn,
                    Logic: Xn
                },
                Yn = _.a.breakpoint,
                Jn = Object(S.css)("margin-bottom:5px;"),
                Zn = Object(S.css)("padding:7px 25px 25px;"),
                Qn = Object(S.css)(Yn.medium, "{padding-top:10px;}", Yn.large, "{padding-top:13px;}");

            function $n(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var eo = {
                    media: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? $n(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $n(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            metaPosition: null,
                            meta: "credit",
                            inlineVideo: !0,
                            showSection: !0
                        })
                    }
                },
                to = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: Jn
                    }, void 0, O.a.createElement(D.a, t.media)), a()("div", {
                        className: Zn
                    }, void 0, O.a.createElement(N.a, t.content), a()("div", {
                        className: Qn
                    }, void 0, O.a.createElement(L.a, t.meta))))
                };
            to.displayName = "MobileMediaContentMetaTemplate";
            var no = {
                Template: to,
                Logic: eo
            };

            function oo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ro(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oo(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oo(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var io = {
                    media: function(e) {
                        return ro({}, e, {
                            inlineVideo: !0,
                            preferredCrop: "threeByTwoLargeAt2X"
                        })
                    },
                    headline: function(e) {
                        return ro({}, e, {
                            showSentence: !0,
                            hideHeadline: "VideoCard" === e.asset.card.__typename
                        })
                    }
                },
                ao = Object(S.css)("padding:25px;"),
                so = Object(S.css)("margin:25px 25px 0;"),
                lo = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: t.media.narrowImage ? so : ""
                    }, void 0, O.a.createElement(D.a, t.media)), a()("div", {
                        className: ao
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(R.a, t.authorImage), O.a.createElement(A.a, t.headline))))
                };
            lo.displayName = "MobileMediaAuthorImageHeadlineTemplate";
            var co = {
                Template: lo,
                Logic: io
            };

            function uo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function po(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? uo(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uo(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var mo = {
                    media: function(e) {
                        return po({}, e, {
                            inlineVideo: !0,
                            preferredCrop: "threeByTwoLargeAt2X"
                        })
                    },
                    headline: function(e) {
                        return po({}, e, {
                            showSentence: !0,
                            hideHeadline: "VideoCard" === e.asset.card.__typename
                        })
                    }
                },
                fo = Object(S.css)("padding:25px;"),
                ho = Object(S.css)("margin:25px 25px 0;"),
                go = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: t.media.narrowImage ? ho : ""
                    }, void 0, O.a.createElement(D.a, t.media)), a()("div", {
                        className: fo
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(R.a, t.authorImage), O.a.createElement(A.a, t.headline)), O.a.createElement(L.a, t.meta)))
                };
            go.displayName = "MobileMediaAuthorImageHeadlineMetaTemplate";
            var vo = {
                Template: go,
                Logic: mo
            };

            function bo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function yo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? bo(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bo(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Oo = {
                    media: function(e) {
                        return yo({}, e, {
                            inlineVideo: !0,
                            meta: "credit",
                            preferredCrop: "threeByTwoLargeAt2X"
                        })
                    },
                    headline: function(e) {
                        return yo({}, e, {
                            type: 4,
                            hideHeadline: "VideoCard" === e.asset.card.__typename
                        })
                    },
                    banner: function(e) {
                        return yo({}, e, {
                            isBanner: !0,
                            type: 7,
                            centered: !0
                        })
                    }
                },
                wo = Object(S.css)("padding:20px 25px 15px;"),
                xo = Object(S.css)("padding:7px 25px 25px;"),
                ko = Object(S.css)("margin:0 25px;"),
                jo = function(e) {
                    var t = e.assetMux;
                    return a()("div", {}, void 0, a()("div", {
                        className: wo
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.banner))), a()("div", {
                        className: t.media.narrowImage ? ko : ""
                    }, void 0, O.a.createElement(D.a, t.media)), a()("div", {
                        className: xo
                    }, void 0, O.a.createElement(I.a, t.link, O.a.createElement(A.a, t.headline), O.a.createElement(N.a, t.content)), O.a.createElement(L.a, t.meta)))
                };
            jo.displayName = "MobileBannerMediaHeadlineContentMetaTemplate";
            var Mo = {
                Template: jo,
                Logic: Oo
            };

            function Po(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var So, Co = {
                    media: function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Po(n, !0).forEach((function(t) {
                                    b()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Po(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            inlineVideo: !0,
                            preferredCrop: "threeByTwoLargeAt2X"
                        })
                    }
                },
                Eo = Object(S.css)("padding:30px 25px 15px;"),
                To = Object(S.css)("margin-top:15px;"),
                Io = function(e) {
                    var t = e.assetMux;
                    return a()("div", {
                        className: Eo
                    }, void 0, O.a.createElement(D.a, t.media), O.a.createElement(I.a, t.link, a()("div", {
                        className: To
                    }, void 0, O.a.createElement(A.a, t.headline), O.a.createElement(N.a, t.content))), O.a.createElement(L.a, t.meta))
                };

            function No(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Lo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? No(n, !0).forEach((function(t) {
                        b()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : No(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            Io.displayName = "MobileMediaHeadlineContentMetaTemplate";
            var Do, Ao, Ro, Ho, Bo, _o = {
                    media: function(e) {
                        return Lo({}, e, {
                            preferredCrop: "threeByTwoSmallAt2X"
                        })
                    },
                    column: function(e) {
                        return Lo({}, e, {
                            cols: [{
                                columns: 1
                            }, {
                                columns: 1,
                                noVerticalBorder: !0,
                                noPadding: !0
                            }]
                        })
                    }
                },
                zo = {
                    default: Y,
                    TemplateMediaAuthorImageHeadlineContentMeta: Y,
                    TemplateCol1AuthorImageHeadlineContentMetaCol2Media: ee,
                    TemplateMobileCol1AuthorImageHeadlineContentMetaCol2Media: se,
                    TemplateAuthorImageHeadlineContentMeta: pe,
                    TemplateMediaHeadlineMeta: ve,
                    TemplateAuthorImageHeadline: je,
                    TemplateAuthorImageHeadlineMeta: Te,
                    TemplateHeadlineMeta: De,
                    TemplateMediaHeadline: _e,
                    TemplateMediaHeadlineContent: Ge,
                    TemplateCol1HeadlineMetaCol2Media: Ze,
                    TemplateCol1HeadlineContentMetaCol2Media: tt,
                    TemplateCol1AuthorImageHeadlineCol2ContentMeta: at,
                    TemplateMedia: dt,
                    TemplateBannerMedia: ht,
                    TemplateBannerMediaMeta: xt,
                    TemplateFloatMediaAuthorImageHeadlineContentMeta: jt,
                    TemplateHeadline: Ct,
                    TemplateCol1MediaHeadlineContentMeta: At,
                    TemplateHeadlineContent: Ft,
                    TemplateRow1BannerRow2Col1AuthorImageHeadlineContentMetaCol2Media: en,
                    TemplateRow1BannerRow2Col1AuthorImageHeadlineCol2ContentMeta: ln,
                    TemplateMediaContentMeta: fn,
                    TemplateMediaMeta: yn,
                    TemplateMobileMediaContentMeta: no,
                    TemplateMobileMediaAuthorImageHeadlineContentMeta: Sn,
                    TemplateMediaAuthorImageHeadlineMeta: En,
                    TemplateRow1HeadlineRow2Col1ContentMetaCol2Media: Kt,
                    TemplateRow1Col1AuthorImageHeadlineCol2MediaRow2Meta: Rn,
                    TemplateMediaThumbHeadlineContentMeta: Wn,
                    TemplateMobileHeadline: Kn,
                    TemplateMobileMediaAuthorImageHeadline: co,
                    TemplateMobileMediaAuthorImageHeadlineMeta: vo,
                    TemplateMobileBannerMediaHeadlineContentMeta: Mo,
                    TemplateMobileMediaHeadlineContentMeta: {
                        Template: Io,
                        Logic: Co
                    },
                    TemplateMobileFloatMediaAuthorImageHeadlineContentMeta: {
                        Template: q(So = function(e) {
                            function t() {
                                return l()(this, t), p()(this, f()(t).apply(this, arguments))
                            }
                            return g()(t, e), d()(t, [{
                                key: "render",
                                value: function() {
                                    var e, t, n, o, r, i, s = this.props.assetMux,
                                        l = Object(S.css)("padding:20px 25px;"),
                                        c = (null == s ? void 0 : null === (e = s.column) || void 0 === e ? void 0 : null === (t = e.cols) || void 0 === t ? void 0 : null === (n = t[0]) || void 0 === n ? void 0 : n.column) || 1,
                                        d = (null == s ? void 0 : null === (o = s.column) || void 0 === o ? void 0 : null === (r = o.cols) || void 0 === r ? void 0 : null === (i = r[1]) || void 0 === i ? void 0 : i.column) || 1,
                                        u = Math.round(100 * d / (c + d)),
                                        p = Object(S.css)("float:right;width:", u, "%;margin-left:15px;margin-bottom:5px;");
                                    return a()("div", {
                                        className: l
                                    }, void 0, a()("div", {
                                        className: p
                                    }, void 0, O.a.createElement(D.a, s.media)), O.a.createElement(I.a, s.link, O.a.createElement(R.a, s.authorImage), O.a.createElement(A.a, s.headline), O.a.createElement(N.a, s.content)), O.a.createElement(L.a, s.meta))
                                }
                            }]), t
                        }(y.Component)) || So,
                        Logic: _o
                    }
                },
                Vo = Object(S.css)("width:100%;"),
                Fo = Object(S.css)("display:flex;align-items:flex-start;> *{width:100%;}");

            function Wo() {
                var e = r()(["\n    fragment Asset_asset_noComments on HasPromotionalProperties {\n      ...Asset_asset_sub\n      ...AssetMeta_asset_noComments\n    }\n    ", "\n    ", "\n    ", "\n  "]);
                return Wo = function() {
                    return e
                }, e
            }

            function Uo() {
                var e = r()(["\n    fragment Asset_asset on HasPromotionalProperties {\n      ...Asset_asset_sub\n      ...AssetMeta_asset\n    }\n    ", "\n    ", "\n    ", "\n  "]);
                return Uo = function() {
                    return e
                }, e
            }

            function Xo() {
                var e = r()(["\n    fragment Asset_asset_sub on HasPromotionalProperties {\n      ...AssetContent_asset\n      ...Headline_asset\n      ...ContentLink_link\n      ...AssetMedia_media\n      ...Asset_promotions\n      card {\n        __typename\n        ...AssetAuthorImage_card\n      }\n      ... on Article {\n        sourceId\n        tone\n        timesTags @filterEmpty {\n          vernacular\n        }\n        body {\n          content {\n            ... on HeaderFullBleedHorizontalBlock {\n              byline {\n                hideHeadshots\n              }\n            }\n            ... on HeaderLegacyBlock {\n              byline {\n                hideHeadshots\n              }\n            }\n            ... on HeaderBasicBlock {\n              byline {\n                hideHeadshots\n              }\n            }\n            ... on HeaderFullBleedProTopperBlock {\n              byline {\n                hideHeadshots\n              }\n            }\n            ... on HeaderFullBleedVerticalBlock {\n              byline {\n                hideHeadshots\n              }\n            }\n            ... on HeaderFullBleedTopBlock {\n              byline {\n                hideHeadshots\n              }\n            }\n            ... on HeaderLiveBriefingBlock {\n              byline {\n                hideHeadshots\n              }\n            }\n          }\n        }\n      }\n      ... on Interactive {\n        sourceId\n        tone\n        timesTags @filterEmpty {\n          vernacular\n        }\n      }\n      ... on CreativeWork {\n        collections @filterEmpty {\n          id\n          slug\n          collectionType\n        }\n      }\n    }\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);
                return Xo = function() {
                    return e
                }, e
            }

            function qo() {
                var e = r()(["\n  fragment Asset_promotions on HasPromotionalProperties {\n    ... on Article {\n      promotions {\n        name\n        promotionalProperties {\n          headline\n        }\n      }\n    }\n    ... on Interactive {\n      promotions {\n        name\n        promotionalProperties {\n          headline\n        }\n      }\n    }\n    ... on Video {\n      promotions {\n        name\n        promotionalProperties {\n          headline\n        }\n      }\n    }\n  }\n"]);
                return qo = function() {
                    return e
                }, e
            }

            function Go(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var Ko = "HOME_timesExclusive",
                Yo = function(e) {
                    var t, n, o, r = e.preferredCrop,
                        i = void 0 === r ? "master1050" : r,
                        a = e.media,
                        s = a || {},
                        l = s.promotionalMedia,
                        c = s.cardType,
                        d = s.column;
                    "AUDIO" === c && (null === (t = a.card) || void 0 === t ? void 0 : null === (n = t.audio) || void 0 === n ? void 0 : n.podcastSeries) && (o = a.card.audio.podcastSeries.image);
                    var u = null == d ? void 0 : d.promotionalMedia;
                    if (!l && !o && !u) return null;
                    var p, m, f = o || u || ("Image" === l.__typename || "EmbeddedInteractive" === l.__typename ? l : l.assetMediaPromotionalMedia);
                    return f ? (f.spanImageCrops ? p = f.spanImageCrops.reduce((function(e, t) {
                        return e.concat(t.renditions)
                    }), []) : f.crops && (p = f.crops.reduce((function(e, t) {
                        return e.concat(t.renditions)
                    }), [])), p && p.length ? (Array.isArray(p) && (m = p.find((function(e) {
                        return e.name === i
                    })) || p[0]), function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Go(n, !0).forEach((function(t) {
                                b()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Go(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        type: f.__typename
                    }, "Image" === f.__typename ? {
                        size: m.name
                    } : {}, {
                        url: "Image" === f.__typename ? m.url : a.url
                    })) : null) : null
                },
                Jo = function(e) {
                    return e.collections && e.collections.length > 0 && -1 !== e.collections.findIndex((function(e) {
                        return "times_exclusives" === e.slug && "SYNDICATED" === e.collectionType
                    }))
                },
                Zo = ["threeByTwoMediumAt2X", "largeHorizontalJumbo", "videoLarge", "thumbStandard"],
                Qo = a()(H.d, {}),
                $o = (Do = C.a.Consumer, Ao = P()(), Object(E.a)(Ro = Do(Ro = Ao((Bo = Ho = function(e) {
                    function t(e) {
                        var n;
                        return l()(this, t), (n = p()(this, f()(t).call(this))).appearedInViewport = !1, n.templateName = void 0, n.mediaMux = void 0, n.trackingParams = e.asset.trackingParams ? "?".concat(e.asset.trackingParams.concat({
                            key: "imp_id",
                            value: Math.floor(1e9 * Math.random())
                        }).map((function(e) {
                            return "".concat(e.key, "=").concat(e.value)
                        })).join("&")) : "", Jo(e.asset) && (Object(T.e)(Ko), n.trackingParams += "".concat("" === n.trackingParams ? "?" : "&", "exclusive=").concat(Object(T.c)(Ko, "1_variant") ? 1 : 0)), n
                    }
                    return g()(t, e), d()(t, [{
                        key: "getChildContext",
                        value: function() {
                            var e = this.context.lazy,
                                t = this.context.blockId,
                                n = this.props,
                                o = n.deviceType,
                                r = n.packageIndex,
                                i = n.assetIndex;
                            if (!e && "topstories" === t) {
                                var a = "smartphone" === o ? 0 : 2;
                                e = "number" == typeof r ? r > a : i > a
                            }
                            return {
                                lazy: e
                            }
                        }
                    }, {
                        key: "setupIntersectionObserver",
                        value: function() {
                            var e = this;
                            this.observer = new IntersectionObserver((function(t) {
                                var n;
                                if (!e.appearedInViewport && (null == t ? void 0 : null === (n = t[0]) || void 0 === n ? void 0 : n.isIntersecting)) {
                                    e.appearedInViewport = !0, e.observer.disconnect(), e.observer = null;
                                    var o = e.props.tracking.getTrackingData().block,
                                        r = {
                                            event: "impression",
                                            card: {
                                                index: e.props.assetIndex,
                                                id: e.props.asset.sourceId,
                                                type: e.props.asset.__typename,
                                                url: "".concat(e.props.asset.url || e.props.asset.targetUrl).concat(e.trackingParams),
                                                template: e.templateName,
                                                promotionalMediaEmphasis: e.props.asset.promotionalMediaEmphasis
                                            }
                                        };
                                    o && e.mediaMux && (!o.package || o.package && void 0 !== o.package.imgSrc && o.package.imgSrc === e.props.assetIndex) && (r.card.media = Yo(e.mediaMux)), e.headlineMux && e.headlineMux.assetTone && null !== e.headlineMux.assetTone && (r.card.tone = e.headlineMux.assetTone), e.props.tracking.trackEvent(r)
                                }
                            }), {
                                threshold: 0
                            }), this.observer.observe(this.el)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.setupIntersectionObserver()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.observer && (this.observer.disconnect(), this.observer = null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n, o, r, i, s, l, c, d, u, p, m = this,
                                f = this.props,
                                h = f.asset,
                                g = f.template,
                                v = f.supportsTouch,
                                b = f.deviceType,
                                y = f.showBorder,
                                w = f.useChildren,
                                x = f.children;
                            if (w) return O.a.createElement("article", {
                                className: Vo,
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                ref: function(e) {
                                    m.el = e
                                }
                            }, x);
                            var k = function(e) {
                                    return "function" == typeof e ? e : function(e) {
                                        return e
                                    }
                                },
                                j = {
                                    media: k(this.props.assetMux.media),
                                    headline: k(this.props.assetMux.headline),
                                    content: k(this.props.assetMux.content),
                                    link: k(this.props.assetMux.link),
                                    meta: k(this.props.assetMux.meta),
                                    authorImage: k(this.props.assetMux.authorImage),
                                    column: k(this.props.assetMux.column),
                                    banner: k(this.props.assetMux.banner)
                                },
                                M = "function" == typeof g ? g(this.props) : g;
                            this.templateName = M;
                            var P = zo["Template".concat(M)] || zo.default,
                                C = P.Template,
                                E = {
                                    media: k(null === (e = P.Logic) || void 0 === e ? void 0 : e.media),
                                    headline: k(null === (t = P.Logic) || void 0 === t ? void 0 : t.headline),
                                    content: k(null === (n = P.Logic) || void 0 === n ? void 0 : n.content),
                                    link: k(null === (o = P.Logic) || void 0 === o ? void 0 : o.link),
                                    meta: k(null === (r = P.Logic) || void 0 === r ? void 0 : r.meta),
                                    authorImage: k(null === (i = P.Logic) || void 0 === i ? void 0 : i.authorImage),
                                    column: k(null === (s = P.Logic) || void 0 === s ? void 0 : s.column),
                                    banner: k(null === (l = P.Logic) || void 0 === l ? void 0 : l.banner)
                                },
                                I = function(e, t) {
                                    return e.reduce((function(e, t) {
                                        return t(e)
                                    }), t)
                                };
                            return this.mediaMux = I([E.media, j.media], {
                                media: h,
                                crop: Zo,
                                linkSearch: this.trackingParams
                            }), this.headlineMux = I([E.headline, j.headline], {
                                asset: h,
                                supportsTouch: v,
                                isTimesExclusive: Object(T.c)(Ko, "1_variant") && Jo(h)
                            }), O.a.createElement("article", {
                                className: Vo,
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                ref: function(e) {
                                    m.el = e
                                }
                            }, y && "smartphone" !== b && Qo, a()("div", {
                                className: Object(S.cx)(Fo, "assetWrapper")
                            }, void 0, a()(C, {
                                assetMux: {
                                    media: this.mediaMux,
                                    headline: this.headlineMux,
                                    content: I([E.content, j.content], {
                                        asset: h,
                                        supportsTouch: v
                                    }),
                                    link: I([E.link, j.link], {
                                        link: h,
                                        search: this.trackingParams
                                    }),
                                    meta: I([E.meta, j.meta], {
                                        asset: h
                                    }),
                                    authorImage: I([E.authorImage, j.authorImage], {
                                        asset: h,
                                        hideHeadshot: !!(null == h ? void 0 : null === (c = h.body) || void 0 === c ? void 0 : null === (d = c.content) || void 0 === d ? void 0 : null === (u = d[0]) || void 0 === u ? void 0 : null === (p = u.byline) || void 0 === p ? void 0 : p.hideHeadshots)
                                    }),
                                    column: I([E.column, j.column], {
                                        asset: h
                                    }),
                                    banner: I([E.banner, j.banner], {
                                        asset: h
                                    })
                                }
                            })))
                        }
                    }]), t
                }(y.Component), Ho.defaultProps = {
                    template: "MediaAuthorImageHeadlineContentMeta",
                    assetMux: {
                        media: function(e) {
                            return e
                        },
                        headline: function(e) {
                            return e
                        },
                        content: function(e) {
                            return e
                        },
                        meta: function(e) {
                            return e
                        },
                        link: function(e) {
                            return e
                        },
                        column: function(e) {
                            return e
                        },
                        banner: function(e) {
                            return e
                        }
                    },
                    supportsTouch: !1,
                    showBorder: !1,
                    useChildren: !1
                }, Ho.contextTypes = {
                    lazy: x.a.bool,
                    blockId: x.a.string
                }, Ho.childContextTypes = {
                    lazy: x.a.bool
                }, Ro = Bo)) || Ro) || Ro) || Ro),
                er = j()(qo());
            $o.subfragments = {
                asset: j()(Xo(), N.a.fragments.asset, A.a.fragments.asset, I.a.fragments.link, D.a.fragments.media, R.a.fragments.card)
            }, $o.fragments = {
                asset: j()(Uo(), $o.subfragments.asset, L.a.fragments.asset, er),
                assetNoComments: j()(Wo(), $o.subfragments.asset, L.a.fragments.assetNoComments, er)
            };
            t.a = $o
        },
        vuE1: function(e, t, n) {
            "use strict";
            var o = n("UmXO"),
                r = Object(o.css)("@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){min-height:1px;}");
            t.a = r
        },
        vwVQ: function(e, t, n) {
            "use strict";
            var o = n("gcR/"),
                r = n.n(o),
                i = n("J4zp"),
                a = n.n(i),
                s = (n("Zz4T"), n("84bF"), n("lwsE")),
                l = n.n(s),
                c = n("W8MJ"),
                d = n.n(c),
                u = n("a1gu"),
                p = n.n(u),
                m = n("Nsbk"),
                f = n.n(m),
                h = n("7W2i"),
                g = n.n(h),
                v = n("q1tI"),
                b = n("UmXO"),
                y = (n("17x9"), n("Rb+W")),
                O = Object(b.css)("width:100%;min-height:250px;"),
                w = Object(b.css)("height:250px;display:block;margin:0 auto;"),
                x = Object(b.css)("height:250px;"),
                k = Object(b.css)("height:250px;"),
                j = Object(b.css)("height:250px;"),
                M = function(e) {
                    function t() {
                        var e, n;
                        l()(this, t);
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        return (n = p()(this, (e = f()(t)).call.apply(e, [this].concat(r)))).sizesByViewPort = {
                            large: [970, 300],
                            medium: [970, 300],
                            small: [300, 250]
                        }, n.stylesByViewport = {
                            small: x,
                            medium: k,
                            large: j
                        }, n.getViewportStyles = function(e) {
                            return "string" == typeof e ? n.stylesByViewport[e] : n.stylesByViewport.large
                        }, n.getSizesByViewport = function(e) {
                            return "string" == typeof e ? n.sizesByViewPort[e] : n.sizesByViewPort.small
                        }, n.getSource = function() {
                            var e = n.props,
                                t = e.targeting,
                                o = t.prop,
                                r = t.vp,
                                i = t.ver,
                                s = t.sub,
                                l = t.typ,
                                c = t.id,
                                d = e.position,
                                u = Object(y.q)(),
                                p = n.getSizesByViewport(r),
                                m = a()(p, 2),
                                f = m[0],
                                h = m[1];
                            return "https://www.nytimes.com/marketing/gdpr/display.html?prop=".concat(o, "&ver=").concat(i, "&pos=").concat(d, "&sov=").concat(u, "&sub=").concat(s, "&typ=").concat(l, "&id=").concat(c, "&height=").concat(h, "&width=").concat(f)
                        }, n
                    }
                    return g()(t, e), d()(t, [{
                        key: "shouldComponentUpdate",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.targeting.vp,
                                n = e.id,
                                o = this.getSizesByViewport(t),
                                i = a()(o, 1)[0];
                            return r()("div", {
                                className: Object(b.cx)(O, this.getViewportStyles(t))
                            }, void 0, r()("iframe", {
                                scrolling: "no",
                                title: "GdprAd-".concat(n),
                                className: w,
                                width: i,
                                src: this.getSource()
                            }))
                        }
                    }]), t
                }(v.Component);
            M.displayName = "GdprAd", M.defaultProps = {
                targeting: {},
                id: "GdprAd",
                position: "mid"
            };
            t.a = M
        },
        zWrI: function(e, t, n) {
            "use strict";
            t.a = {
                COMMENTS_PANEL: "commentsContainer",
                PERM_ID: "permid"
            }
        }
    }
]);
//# sourceMappingURL=home-2817a1b4ed3cf753a293.js.map