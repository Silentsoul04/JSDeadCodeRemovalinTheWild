(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [8], {
        "/SJ4": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return m
            });
            var a, r, i = n("uFB0"),
                l = n.n(i),
                s = n("ERkP"),
                o = n("LaCE"),
                c = n("ERpE"),
                u = n("iJNm"),
                d = n("ivAS");
            ! function(e) {
                e.Small = "tw-channel-status-indicator--small", e.Medium = "tw-channel-status-indicator--medium", e.Large = "tw-channel-status-indicator--large"
            }(a || (a = {})),
            function(e) {
                e.Offline = "tw-channel-status-indicator--offline", e.Hosting = "tw-channel-status-indicator--hosting", e.Live = "tw-channel-status-indicator--live"
            }(r || (r = {}));
            var m = function(e) {
                var t = {
                    "tw-channel-status-indicator": !0,
                    "tw-channel-status-indicator--pulse": e.pulse
                };
                return e.size ? t[e.size] = !0 : t[a.Small] = !0, e.status ? t[e.status] = !0 : t[r.Offline] = !0, s.createElement(d.a, l()({
                    display: u.d.InlineBlock,
                    position: u.j.Relative,
                    className: Object(o.a)(t)
                }, Object(c.a)(e)))
            };
            m.displayName = "ChannelStatusIndicator", m.displayName = "ChannelStatusIndicator"
        },
        "1k+N": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return y
            });
            var a = n("h7sq"),
                r = n("tS02"),
                i = n("/XES"),
                l = n("ztBH"),
                s = n("vTWr"),
                o = n("Fayl"),
                c = n("znL5"),
                u = n("ERkP"),
                d = n.n(u),
                m = n("x6OE"),
                p = n.n(m),
                f = n("ds2y"),
                h = n("vI2y"),
                g = d.a.createElement,
                y = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), n = Object(i.a)(this, Object(l.a)(t).call(this, e)), Object(c.a)(Object(s.a)(n), "loadMoreOnce", void 0), Object(c.a)(Object(s.a)(n), "lastLength", void 0), Object(c.a)(Object(s.a)(n), "itemsRenderer", function(e, t) {
                            return g("div", {
                                ref: t,
                                className: n.props.className
                            }, e)
                        }), Object(c.a)(Object(s.a)(n), "itemRenderer", function(e, t) {
                            return Object(f.a)() && n.props.length - e <= 2 * n.props.pageSize && n.loadMoreOnce(), n.props.itemRenderer(e, t)
                        }), n.lastLength = e.length, n.loadMoreOnce = Object(h.a)(n.props.loadMore), n
                    }
                    return Object(o.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return this.lastLength !== this.props.length && (this.lastLength = this.props.length, this.loadMoreOnce = Object(h.a)(this.props.loadMore)), g(p.a, {
                                itemRenderer: this.itemRenderer,
                                itemsRenderer: this.itemsRenderer,
                                length: this.props.length,
                                type: "uniform",
                                minSize: this.props.pageSize,
                                useStaticSize: !1,
                                useTranslate3d: !0
                            })
                        }
                    }]), t
                }(d.a.Component)
        },
        "7kXS": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var a = n("jp4N"),
                r = n.n(a),
                i = n("Z05o"),
                l = n.n(i),
                s = n("q5o0"),
                o = n.n(s),
                c = n("ERkP"),
                u = n("xeY9");

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function m(e) {
                var t;
                return (t = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return o()(n, t), n.prototype.render = function() {
                        var t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? d(n, !0).forEach(function(t) {
                                    r()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, this.props, {
                            interactionContent: this.interactionContent
                        });
                        return c.createElement(e, t)
                    }, l()(n, [{
                        key: "interactionContent",
                        get: function() {
                            return "position_" + this.props.position
                        }
                    }]), n
                }(c.Component)).displayName = "AsListItem(" + Object(u.a)(e) + ")", t
            }
        },
        "9Evb": function(e, t, n) {
            "use strict";
            var a = n("pneb"),
                r = n("h7sq"),
                i = n("tS02"),
                l = n("/XES"),
                s = n("ztBH"),
                o = n("Fayl"),
                c = n("znL5"),
                u = n("ERkP"),
                d = n.n(u),
                m = n("/SwW"),
                p = n("bfSB"),
                f = n("Q0He"),
                h = n("5vmN"),
                g = n("iJNm"),
                y = n("cQFw"),
                v = n("zkRB"),
                b = n("1nou"),
                w = n("/SJ4"),
                S = n("q5o0"),
                k = n.n(S),
                O = n("EIzr"),
                C = n("yFcC").default,
                E = n("bRbd").default,
                j = n("8m3w").default;

            function F() {
                return u.createElement(u.Fragment, null, u.createElement(C, {
                    id: "tw-channel-status-indicator"
                }, E), u.createElement(C, {
                    id: "tw-inject-layout"
                }, j))
            }
            var P = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return k()(t, e), t.prototype.render = function() {
                    return u.createElement(u.Fragment, null, u.createElement(w.a, this.props), u.createElement(F, null))
                }, t
            }(O.a);
            P.displayName = "ChannelStatusIndicator";
            var z, R, x = n("S2yq");

            function I(e, t) {
                if (t) return z.Hosting;
                if (e) switch (e) {
                    case "live":
                        return z.Live;
                    case "premiere":
                        return z.Premiere;
                    case "watch_party":
                    case "rerun":
                        return z.Rerun;
                    default:
                        return
                }
            }! function(e) {
                e.Live = "live", e.Premiere = "premiere", e.Rerun = "rerun", e.Hosting = "hosting"
            }(z || (z = {})), n.d(t, "a", function() {
                return N
            }), n.d(t, "b", function() {
                return I
            });
            var L = d.a.createElement,
                _ = (R = {}, Object(c.a)(R, z.Premiere, {
                    asset: p.a.VideoPremiere,
                    fill: !0
                }), Object(c.a)(R, z.Rerun, {
                    asset: p.a.VideoRerun,
                    fill: !1
                }), R),
                T = function(e) {
                    function t() {
                        return Object(r.a)(this, t), Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(o.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return L(f.a, {
                                color: this.props.isOverlay ? h.c.Overlay : h.c.Base,
                                background: this.props.isOverlay ? h.a.Overlay : h.a.Base,
                                padding: {
                                    x: .5
                                },
                                borderRadius: h.b.Small,
                                display: g.d.Flex
                            }, L(y.a, {
                                display: g.d.Flex,
                                alignItems: g.b.Center,
                                margin: {
                                    right: .5
                                }
                            }, this.icon), this.getText(e))
                        }
                    }, {
                        key: "getText",
                        value: function(e) {
                            var t;
                            switch (this.props.indicatorType) {
                                case z.Live:
                                    t = e("LIVE", "streamTypeIndicator");
                                    break;
                                case z.Premiere:
                                    t = e("Premiere", "streamTypeIndicator");
                                    break;
                                case z.Rerun:
                                    t = e("Rerun", "streamTypeIndicator");
                                    break;
                                case z.Hosting:
                                    t = e("HOSTING", "streamTypeIndicator")
                            }
                            return !!t && L(v.a, {
                                type: b.e.Span
                            }, t)
                        }
                    }, {
                        key: "icon",
                        get: function() {
                            var e;
                            return this.props.indicatorType === z.Live ? e = w.c.Live : this.props.indicatorType === z.Hosting && (e = w.c.Hosting), e ? L(y.a, {
                                display: g.d.Flex,
                                alignItems: g.b.Center
                            }, L(P, {
                                status: e,
                                size: w.b.Small,
                                pulse: this.props.isPulsing
                            })) : this.props.indicatorType && L(x.a, Object(a.a)({}, _[this.props.indicatorType], {
                                width: 14,
                                height: 14
                            }))
                        }
                    }]), t
                }(d.a.PureComponent),
                N = Object(m.a)(T)
        },
        AdED: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("LcAa"),
                r = n.n(a),
                i = n("emby"),
                l = n.n(i),
                s = n("sXAp"),
                o = n.n(s),
                c = n("FIas"),
                u = n.n(c),
                d = n("8k7s"),
                m = n.n(d),
                p = n("TPw6"),
                f = n.n(p),
                h = n("k9sC"),
                g = n.n(h),
                y = n("yP/C"),
                v = n("h7sq"),
                b = n("tS02"),
                w = n("/XES"),
                S = n("ztBH"),
                k = n("amHM"),
                O = n("Fayl"),
                C = n("znL5"),
                E = n("vTWr"),
                j = n("G5Dg"),
                F = n("Z0kh"),
                P = n("ERkP"),
                z = n.n(P),
                R = n("pnpS"),
                x = n("yyOJ"),
                I = n("nZ6Q"),
                L = z.a.createElement;

            function _(e, t) {
                var n = f()(e);
                if (m.a) {
                    var a = m()(e);
                    t && (a = a.filter(function(t) {
                        return u()(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }
            var T, N = function(e) {
                    function t() {
                        var e, n;
                        Object(v.a)(this, t);
                        for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
                        return n = Object(w.a)(this, (e = Object(S.a)(t)).call.apply(e, [this].concat(i))), Object(C.a)(Object(E.a)(n), "state", {
                            endCursor: null,
                            noMoreStreams: !1,
                            streamIds: [],
                            streams: []
                        }), Object(C.a)(Object(E.a)(n), "getRefetchVariables", function(e) {
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? _(n, !0).forEach(function(t) {
                                        Object(C.a)(e, t, n[t])
                                    }) : o.a ? l()(e, o()(n)) : _(n).forEach(function(t) {
                                        r()(e, t, u()(n, t))
                                    })
                                }
                                return e
                            }({}, e, {
                                channelsCount: 3 * x.CHANNELS_PAGE_SIZE,
                                cursor: n.state.endCursor
                            })
                        }), Object(C.a)(Object(E.a)(n), "loadMore", function() {
                            n.state.noMoreStreams || n.props.relay.refetch(n.getRefetchVariables)
                        }), n
                    }
                    return Object(O.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            return 0 === this.state.streams.length ? L(F.a, null) : L(j.b, {
                                loadMore: this.loadMore,
                                streams: this.state.streams
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            if (!e.query.streams || !e.query.streams.edges) return {
                                noMoreStreams: !0
                            };
                            var n = Object(I.b)(e.query.streams.edges),
                                a = n.endCursor,
                                r = n.nodes;
                            if (t.endCursor === a) return null;
                            if (0 === r.length) return {
                                noMoreStreams: !0
                            };
                            var i = r.reduce(function(e, n) {
                                var a = n.__id;
                                return t.streamIds.includes(a) || (e.ids.push(a), e.streams.push(n)), e
                            }, {
                                ids: [],
                                streams: []
                            });
                            return {
                                endCursor: a,
                                streamIds: t.streamIds.concat(i.ids),
                                streams: t.streams.concat(i.streams)
                            }
                        }
                    }]), t
                }(z.a.Component),
                A = Object(R.createRefetchContainer)(N, {
                    query: function() {
                        return n("Uvbe")
                    }
                }, function() {
                    return n("t9d1")
                }),
                K = n("HIP8"),
                M = n("7vVX"),
                D = n("d6po"),
                H = z.a.createElement;

            function q(e, t) {
                var n = f()(e);
                if (m.a) {
                    var a = m()(e);
                    t && (a = a.filter(function(t) {
                        return u()(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(n, !0).forEach(function(t) {
                        Object(C.a)(e, t, n[t])
                    }) : o.a ? l()(e, o()(n)) : q(n).forEach(function(t) {
                        r()(e, t, u()(n, t))
                    })
                }
                return e
            }
            var G = function(e) {
                function t() {
                    return Object(v.a)(this, t), Object(w.a)(this, Object(S.a)(t).apply(this, arguments))
                }
                return Object(O.a)(t, e), Object(b.a)(t, [{
                    key: "pageSpecificPageviewData",
                    value: function() {
                        return {}
                    }
                }, {
                    key: "pageHeadData",
                    value: function() {
                        return {
                            data: {
                                route: K.a.GameDirectoryAll
                            }
                        }
                    }
                }, {
                    key: "listArea",
                    value: function() {
                        return H(A, {
                            query: this.props
                        })
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var e = Object(y.a)(g.a.mark(function e(n) {
                            var a;
                            return g.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(k.a)(Object(S.a)(t), "getInitialProps", this).call(this, n);
                                    case 2:
                                        return a = e.sent, e.abrupt("return", B({}, a, {
                                            queryVariables: {
                                                channelsCount: x.CHANNELS_PAGE_SIZE,
                                                cursor: null
                                            }
                                        }));
                                    case 4:
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
            }(D.b);
            Object(C.a)(G, "displayName", "GameDirectoryAll"), Object(C.a)(G, "query", T || (T = function() {
                return n("YN0O")
            }));
            var U = Object(M.h)(G);
            n.d(t, "default", function() {
                return U
            })
        },
        Cc0E: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var a = n("uFB0"),
                r = n.n(a),
                i = n("ERkP"),
                l = n("ERpE"),
                s = n("iJNm"),
                o = n("5vmN"),
                c = n("ivAS"),
                u = n("C0xX"),
                d = function(e) {
                    var t, n, a;
                    return e.row && (t = s.b.Center), e.elevation && (n = e.elevation), e.background === o.a.Overlay && (a = o.c.Overlay), i.createElement(c.a, r()({
                        className: "tw-card",
                        position: s.j.Relative
                    }, Object(l.a)(e)), i.createElement(u.a, {
                        display: s.d.Flex,
                        flexDirection: e.row ? s.e.Row : s.e.Column,
                        alignItems: t,
                        elevation: n,
                        background: e.background,
                        borderRadius: e.borderRadius,
                        color: a,
                        border: e.border,
                        flexWrap: s.f.NoWrap
                    }, e.children))
                };
            d.displayName = "Card", d.displayName = "Card"
        },
        E7Yk: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                    kind: "ScalarField",
                    alias: null,
                    name: "id",
                    args: null,
                    storageKey: null
                };
                return {
                    kind: "Fragment",
                    name: "StreamCard_stream",
                    type: "Stream",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [e, {
                        kind: "ScalarField",
                        alias: null,
                        name: "viewersCount",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "previewImageURL",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "type",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "game",
                        storageKey: null,
                        args: null,
                        concreteType: "Game",
                        plural: !1,
                        selections: [e, {
                            kind: "ScalarField",
                            alias: null,
                            name: "name",
                            args: null,
                            storageKey: null
                        }]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "broadcaster",
                        storageKey: null,
                        args: null,
                        concreteType: "User",
                        plural: !1,
                        selections: [e, {
                            kind: "ScalarField",
                            alias: null,
                            name: "login",
                            args: null,
                            storageKey: null
                        }, {
                            kind: "ScalarField",
                            alias: null,
                            name: "displayName",
                            args: null,
                            storageKey: null
                        }, {
                            kind: "ScalarField",
                            alias: null,
                            name: "profileImageURL",
                            args: [{
                                kind: "Literal",
                                name: "width",
                                value: 50,
                                type: "Int!"
                            }],
                            storageKey: "profileImageURL(width:50)"
                        }, {
                            kind: "LinkedField",
                            alias: null,
                            name: "hosting",
                            storageKey: null,
                            args: null,
                            concreteType: "User",
                            plural: !1,
                            selections: [e]
                        }]
                    }]
                }
            }();
            a.hash = "7b4b44ceeb37324ea838c2d1a650efd0", t.default = a
        },
        EhrP: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/GameDirectoryAll", function() {
                return n("AdED")
            }])
        },
        FGl0: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var a = n("uFB0"),
                r = n.n(a),
                i = n("ERkP"),
                l = n("ERpE"),
                s = n("iJNm"),
                o = n("ivAS"),
                c = function(e) {
                    return i.createElement(o.a, r()({
                        className: "tw-card-body",
                        overflow: e.overflow,
                        position: s.j.Relative
                    }, Object(l.a)(e)), e.children)
                };
            c.displayName = "CardBody", c.displayName = "CardBody"
        },
        G5Dg: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return k
            }), n.d(t, "b", function() {
                return O
            });
            var a = n("h7sq"),
                r = n("tS02"),
                i = n("/XES"),
                l = n("ztBH"),
                s = n("vTWr"),
                o = n("Fayl"),
                c = n("znL5"),
                u = n("yFcC"),
                d = n.n(u),
                m = n("1k+N"),
                p = n("KmwA"),
                f = n("VVbc"),
                h = n("ERkP"),
                g = n.n(h),
                y = n("Vp5C"),
                v = n("yyOJ"),
                b = n("wtJr"),
                w = n("WIFU"),
                S = g.a.createElement,
                k = [{
                    mediaCondition: "(max-width: 540px) and (orientation: portrait)",
                    size: "96vw"
                }, {
                    mediaCondition: "(min-width: 768px) and (orientation: landscape)",
                    size: "32.33vw"
                }, {
                    size: "48.5vw"
                }],
                O = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), n = Object(i.a)(this, Object(l.a)(t).call(this, e)), Object(c.a)(Object(s.a)(n), "criticalImageCount", void 0), Object(c.a)(Object(s.a)(n), "itemRenderer", function(e, t) {
                            return S(f.b, {
                                key: t,
                                isLatencyCritical: e < n.criticalImageCount,
                                stream: n.props.streams[e],
                                srcSetSizes: k,
                                position: e
                            })
                        }), n.criticalImageCount = Math.min(Object(w.b)({
                            aspectRatio: b.b,
                            heightFudge: f.a,
                            imageType: w.a.Thumbnail,
                            topNavHeight: p.a
                        }), v.CHANNELS_PAGE_SIZE), n
                    }
                    return Object(o.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            return S(y.a, {
                                value: "channel_list"
                            }, S(m.a, {
                                className: "channel-list",
                                itemRenderer: this.itemRenderer,
                                length: this.props.streams.length,
                                loadMore: this.props.loadMore,
                                pageSize: v.CHANNELS_PAGE_SIZE
                            }), S(d.a, {
                                id: "3490532075"
                            }, [".channel-list{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:wrap row;-ms-flex-flow:wrap row;flex-flow:wrap row;padding:0.5vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.005);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.005);width:100%;}", "@media (max-width:540px) and (orientation:portrait){.channel-list{padding:1vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.01);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01);}}", "@media (min-width:768px) and (orientation:landscape){.channel-list{padding:0.5vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.005);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.005);}}", ".channel-list .channel-thumbnail-card{padding:0.5vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.005);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.005);width:49.5vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.495);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.495);}", "@media (max-width:540px) and (orientation:portrait){.channel-list .channel-thumbnail-card{padding:1vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.01);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01);width:98vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.98);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.98);}}", "@media (min-width:768px) and (orientation:landscape){.channel-list .channel-thumbnail-card{padding:0.5vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.005);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.005);width:33vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.33);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.33);}}"]))
                        }
                    }]), t
                }(g.a.Component)
        },
        He6c: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var a = n("q5o0"),
                r = n.n(a),
                i = n("ERkP"),
                l = n("FGl0"),
                s = n("EIzr"),
                o = n("yFcC").default,
                c = n("8m3w").default;

            function u() {
                return i.createElement(i.Fragment, null, i.createElement(o, {
                    id: "tw-inject-layout"
                }, c))
            }
            var d = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return r()(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(l.a, this.props), i.createElement(u, null))
                }, t
            }(s.a);
            d.displayName = "CardBody"
        },
        Uvbe: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                kind: "Fragment",
                name: "TopChannels_query",
                type: "Query",
                metadata: null,
                argumentDefinitions: [{
                    kind: "RootArgument",
                    name: "channelsCount",
                    type: "Int"
                }, {
                    kind: "RootArgument",
                    name: "cursor",
                    type: "Cursor"
                }],
                selections: [{
                    kind: "LinkedField",
                    alias: null,
                    name: "streams",
                    storageKey: null,
                    args: [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor",
                        type: "Cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "channelsCount",
                        type: "Int"
                    }],
                    concreteType: "StreamConnection",
                    plural: !1,
                    selections: [{
                        kind: "LinkedField",
                        alias: null,
                        name: "edges",
                        storageKey: null,
                        args: null,
                        concreteType: "StreamEdge",
                        plural: !0,
                        selections: [{
                            kind: "ScalarField",
                            alias: null,
                            name: "cursor",
                            args: null,
                            storageKey: null
                        }, {
                            kind: "LinkedField",
                            alias: null,
                            name: "node",
                            storageKey: null,
                            args: null,
                            concreteType: "Stream",
                            plural: !1,
                            selections: [{
                                kind: "FragmentSpread",
                                name: "StreamCard_stream",
                                args: null
                            }]
                        }]
                    }]
                }],
                hash: "b5c8060e23c0b60ee3de600e6c0ff0bd"
            };
            t.default = a
        },
        VVbc: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return x
            }), n.d(t, "b", function() {
                return L
            });
            var a = n("pneb"),
                r = n("h7sq"),
                i = n("tS02"),
                l = n("/XES"),
                s = n("ztBH"),
                o = n("Fayl"),
                c = n("yFcC"),
                u = n.n(c),
                d = n("9Evb"),
                m = n("ERkP"),
                p = n.n(m),
                f = n("pnpS"),
                h = n("HIP8"),
                g = n("7kXS"),
                y = n("/SwW"),
                v = n("B8T3"),
                b = n("xuCQ"),
                w = n("5vmN"),
                S = n("cQFw"),
                k = n("k3nD"),
                O = n("wtJr"),
                C = n("vlJ8"),
                E = n("He6c"),
                j = n("iJNm"),
                F = n("wRUM"),
                P = n("zkRB"),
                z = n("zqif"),
                R = p.a.createElement,
                x = 67,
                I = function(e) {
                    function t() {
                        return Object(r.a)(this, t), Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(o.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl,
                                t = e.formatMessage,
                                n = e.formatNumberShort;
                            if (!this.props.stream.broadcaster || !this.props.stream.broadcaster.login) return R("div", null);
                            var r = n(this.props.stream.viewersCount || 0, {
                                    maximumSignificantDigits: 3
                                }),
                                i = !!this.props.stream.broadcaster.hosting && !!this.props.stream.broadcaster.hosting.id;
                            return R(v.a, {
                                linkTo: h.a.Channel,
                                params: {
                                    channel: this.props.stream.broadcaster.login
                                },
                                className: "channel-thumbnail-card",
                                interactionContent: this.props.interactionContent
                            }, R(b.a, {
                                background: w.a.Base,
                                elevation: 1
                            }, R(S.a, {
                                className: "channel-thumbnail-card__preview"
                            }, R(k.a, Object(a.a)({}, Object(O.f)(this.props.stream.previewImageURL || "https://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg"), {
                                alt: "thumbnail for ".concat(this.props.stream.broadcaster.login),
                                aspect: C.c.Aspect16x9,
                                key: this.props.stream.broadcaster.login,
                                sizes: this.props.srcSetSizes,
                                isLatencyCritical: this.props.isLatencyCritical
                            }), R(S.a, {
                                className: "channel-thumbnail-card__preview__viewers"
                            }, t("{viewersCount} viewers", {
                                viewersCount: r
                            }, "StreamCard")), R(S.a, {
                                className: "channel-thumbnail-card__preview__type"
                            }, R(d.a, {
                                indicatorType: Object(d.b)(this.props.stream.type, i),
                                isOverlay: !0,
                                isPulsing: !1
                            })))), R(E.a, null, R(S.a, {
                                padding: {
                                    x: 1
                                },
                                overflow: j.i.Hidden,
                                display: j.d.Flex,
                                className: "channel-thumbnail-card__info"
                            }, R(S.a, {
                                flexShrink: 0,
                                margin: {
                                    top: 1
                                }
                            }, R(F.a, {
                                alt: "avatar for ".concat(this.props.stream.broadcaster.login),
                                size: 36,
                                src: this.props.stream.broadcaster.profileImageURL
                            })), R(S.a, {
                                margin: {
                                    left: 1,
                                    y: .5
                                },
                                ellipsis: !0,
                                flexShrink: 2
                            }, R(P.a, {
                                fontSize: w.d.Size5,
                                bold: !0,
                                color: w.c.Base,
                                ellipsis: !0
                            }, this.props.stream.title), R(P.a, {
                                color: w.c.Alt,
                                ellipsis: !0,
                                fontSize: w.d.Size6
                            }, Object(z.a)(this.props.stream.broadcaster)), R(P.a, {
                                color: w.c.Alt2,
                                ellipsis: !0,
                                fontSize: w.d.Size6
                            }, this.props.stream.game && this.props.stream.game.name))))), R(u.a, {
                                id: "2005384020"
                            }, [".channel-thumbnail-card .channel-thumbnail-card__info{height:".concat(x, "px;}"), ".channel-thumbnail-card .channel-thumbnail-card__preview__viewers{color:#fafafa;position:absolute;bottom:7.3rem;left:1rem;}", ".channel-thumbnail-card .channel-thumbnail-card__preview .tw-aspect{position:relative;}", ".channel-thumbnail-card .channel-thumbnail-card__preview .tw-aspect::after{content:'';background:linear-gradient(to top,#15052e,transparent);height:3.3rem;position:absolute;bottom:0;left:0;right:0;}", ".channel-thumbnail-card .channel-thumbnail-card__preview__type{color:#fafafa;position:absolute;top:1rem;left:1rem;}"]))
                        }
                    }]), t
                }(p.a.Component),
                L = Object(f.createFragmentContainer)(Object(g.a)(Object(y.a)(I)), {
                    stream: function() {
                        return n("E7Yk")
                    }
                })
        },
        WIFU: function(e, t, n) {
            "use strict";
            var a;

            function r(e) {
                var t = e.aspectRatio,
                    n = e.heightFudge,
                    r = e.imageType,
                    i = e.topNavHeight,
                    l = e.viewportHeight,
                    s = e.viewportWidth;
                if ("undefined" === typeof window) return 0;
                var o = l || window.document.documentElement && window.document.documentElement.clientHeight,
                    c = s || window.document.documentElement && window.document.documentElement.clientWidth;
                if (!o || !c) return 0;
                var u, d = o - i;
                switch (r) {
                    case a.BoxArt:
                        u = c < o && c <= 540 ? 2 : 4;
                        break;
                    case a.Thumbnail:
                        u = c < o && c <= 540 ? 1 : c > o && c >= 768 ? 3 : 2;
                        break;
                    default:
                        u = 1
                }
                var m = c / u * t + n;
                return u * Math.ceil(d / m)
            }
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e[e.BoxArt = 0] = "BoxArt", e[e.Thumbnail = 1] = "Thumbnail"
                }(a || (a = {}))
        },
        YN0O: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        kind: "LocalArgument",
                        name: "channelsCount",
                        type: "Int!",
                        defaultValue: null
                    }, {
                        kind: "LocalArgument",
                        name: "cursor",
                        type: "Cursor",
                        defaultValue: null
                    }],
                    t = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    };
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "GameDirectoryAll_Query",
                    id: null,
                    text: "query GameDirectoryAll_Query(\n  $channelsCount: Int!\n  $cursor: Cursor\n) {\n  ...TopChannels_query\n}\n\nfragment TopChannels_query on Query {\n  streams(first: $channelsCount, after: $cursor) {\n    edges {\n      cursor\n      node {\n        ...StreamCard_stream\n        id\n      }\n    }\n  }\n}\n\nfragment StreamCard_stream on Stream {\n  id\n  viewersCount\n  previewImageURL\n  type\n  title\n  game {\n    id\n    name\n  }\n  broadcaster {\n    id\n    login\n    displayName\n    profileImageURL(width: 50)\n    hosting {\n      id\n    }\n  }\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "GameDirectoryAll_Query",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "FragmentSpread",
                            name: "TopChannels_query",
                            args: null
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "GameDirectoryAll_Query",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "streams",
                            storageKey: null,
                            args: [{
                                kind: "Variable",
                                name: "after",
                                variableName: "cursor",
                                type: "Cursor"
                            }, {
                                kind: "Variable",
                                name: "first",
                                variableName: "channelsCount",
                                type: "Int"
                            }],
                            concreteType: "StreamConnection",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "edges",
                                storageKey: null,
                                args: null,
                                concreteType: "StreamEdge",
                                plural: !0,
                                selections: [{
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "cursor",
                                    args: null,
                                    storageKey: null
                                }, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "node",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Stream",
                                    plural: !1,
                                    selections: [t, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "viewersCount",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "previewImageURL",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "type",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "title",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "game",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "Game",
                                        plural: !1,
                                        selections: [t, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "name",
                                            args: null,
                                            storageKey: null
                                        }]
                                    }, {
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "broadcaster",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "User",
                                        plural: !1,
                                        selections: [t, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "login",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "displayName",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "profileImageURL",
                                            args: [{
                                                kind: "Literal",
                                                name: "width",
                                                value: 50,
                                                type: "Int!"
                                            }],
                                            storageKey: "profileImageURL(width:50)"
                                        }, {
                                            kind: "LinkedField",
                                            alias: null,
                                            name: "hosting",
                                            storageKey: null,
                                            args: null,
                                            concreteType: "User",
                                            plural: !1,
                                            selections: [t]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }();
            a.hash = "9e789b53fd33f6f2ee3eede6ad25db09", t.default = a
        },
        Z0kh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var a = n("yFcC"),
                r = n.n(a),
                i = n("KmwA"),
                l = n("ERkP"),
                s = n.n(l),
                o = n("/SwW"),
                c = n("cQFw"),
                u = n("iJNm"),
                d = n("zkRB"),
                m = n("5vmN"),
                p = s.a.createElement,
                f = s.a.memo(Object(o.a)(function(e) {
                    var t = e.game,
                        n = e.intl.formatMessage;
                    return p(c.a, {
                        fullHeight: !0,
                        fullWidth: !0,
                        display: u.d.Flex,
                        alignItems: u.b.Center,
                        justifyContent: u.h.Center,
                        textAlign: u.l.Center
                    }, p(d.a, {
                        fontSize: m.d.Size4,
                        className: "no-channels-live"
                    }, n("There are no channels currently live for {game}.", {
                        game: t || "Twitch"
                    }, "NoChannelsLive")), p(r.a, {
                        id: "369004582",
                        dynamic: [i.a]
                    }, ["main{height:calc(100vh - ".concat(i.a, "px);}")]))
                }))
        },
        bRbd: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-channel-status-indicator,.tw-root--theme-dark .tw-channel-status-indicator,.tw-root--theme-dark .tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator,.tw-root--theme-light .tw-channel-status-indicator--pulse::after{background:#e91916}.tw-channel-status-indicator{border-radius:50%}.tw-channel-status-indicator--small,.tw-channel-status-indicator--small::after{width:.8rem;height:.8rem}.tw-channel-status-indicator--medium,.tw-channel-status-indicator--medium::after{width:1.2rem;height:1.2rem}.tw-channel-status-indicator--large,.tw-channel-status-indicator--large::after{width:1.6rem;height:1.6rem}.tw-channel-status-indicator--pulse::after{background:#e91916;position:absolute;top:0;left:0;border-radius:50%;content:'';opacity:.2;animation:1.5s ease-out infinite tw-channel-status-indicator--pulse}.tw-root--theme-dark .tw-channel-status-indicator--offline,.tw-root--theme-dark .tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after{background:#686878}.tw-channel-status-indicator--offline{background:#a0a0ac}.tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator--offline{background:#a0a0ac}.tw-root--theme-light .tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after{background:#a0a0ac}.tw-channel-status-indicator--hosting,.tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after,.tw-root--theme-dark .tw-channel-status-indicator--hosting,.tw-root--theme-dark .tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator--hosting,.tw-root--theme-light .tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after{background:#ffbf00}@keyframes tw-channel-status-indicator--pulse{0%{transform:scale3d(1,1,1);opacity:.2}100%{transform:scale3d(4,4,4);opacity:0}}\n"
        },
        nZ6Q: function(e, t, n) {
            "use strict";

            function a(e) {
                return r(e).nodes
            }

            function r(e) {
                var t = null,
                    n = e.reduce(function(e, n) {
                        return n && (n.cursor && (t = n.cursor), n.node && e.push(n.node)), e
                    }, []);
                return {
                    endCursor: t,
                    nodes: n
                }
            }
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            })
        },
        t9d1: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        kind: "LocalArgument",
                        name: "channelsCount",
                        type: "Int!",
                        defaultValue: null
                    }, {
                        kind: "LocalArgument",
                        name: "cursor",
                        type: "Cursor",
                        defaultValue: null
                    }],
                    t = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    };
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "TopChannels_RefetchQuery",
                    id: null,
                    text: "query TopChannels_RefetchQuery(\n  $channelsCount: Int!\n  $cursor: Cursor\n) {\n  ...TopChannels_query\n}\n\nfragment TopChannels_query on Query {\n  streams(first: $channelsCount, after: $cursor) {\n    edges {\n      cursor\n      node {\n        ...StreamCard_stream\n        id\n      }\n    }\n  }\n}\n\nfragment StreamCard_stream on Stream {\n  id\n  viewersCount\n  previewImageURL\n  type\n  title\n  game {\n    id\n    name\n  }\n  broadcaster {\n    id\n    login\n    displayName\n    profileImageURL(width: 50)\n    hosting {\n      id\n    }\n  }\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "TopChannels_RefetchQuery",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "FragmentSpread",
                            name: "TopChannels_query",
                            args: null
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "TopChannels_RefetchQuery",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "streams",
                            storageKey: null,
                            args: [{
                                kind: "Variable",
                                name: "after",
                                variableName: "cursor",
                                type: "Cursor"
                            }, {
                                kind: "Variable",
                                name: "first",
                                variableName: "channelsCount",
                                type: "Int"
                            }],
                            concreteType: "StreamConnection",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "edges",
                                storageKey: null,
                                args: null,
                                concreteType: "StreamEdge",
                                plural: !0,
                                selections: [{
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "cursor",
                                    args: null,
                                    storageKey: null
                                }, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "node",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Stream",
                                    plural: !1,
                                    selections: [t, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "viewersCount",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "previewImageURL",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "type",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "title",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "game",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "Game",
                                        plural: !1,
                                        selections: [t, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "name",
                                            args: null,
                                            storageKey: null
                                        }]
                                    }, {
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "broadcaster",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "User",
                                        plural: !1,
                                        selections: [t, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "login",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "displayName",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "profileImageURL",
                                            args: [{
                                                kind: "Literal",
                                                name: "width",
                                                value: 50,
                                                type: "Int!"
                                            }],
                                            storageKey: "profileImageURL(width:50)"
                                        }, {
                                            kind: "LinkedField",
                                            alias: null,
                                            name: "hosting",
                                            storageKey: null,
                                            args: null,
                                            concreteType: "User",
                                            plural: !1,
                                            selections: [t]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }();
            a.hash = "8e636aad0d7de30666e37c37f7bc1b16", t.default = a
        },
        x6OE: function(e, t, n) {
            var a, r, i;
            r = [n("ERkP"), n("aWzz")], void 0 === (i = "function" === typeof(a = function(t, n) {
                "use strict";
                var a, r, i;

                function l() {
                    if ("function" !== typeof WeakMap) return null;
                    var e = new WeakMap;
                    return l = function() {
                        return e
                    }, e
                }

                function s(e) {
                    return (s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function o(e, t) {
                    return !t || "object" !== s(t) && "function" !== typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function c(e) {
                    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function u(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                function d(e, t, n) {
                    return t && u(e.prototype, t), n && u(e, n), e
                }

                function m(e, t) {
                    return (m = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function p(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, a)
                    }
                    return n
                }

                function f(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                t = function(e) {
                    if (e && e.__esModule) return e;
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var n = {};
                    if (null != e) {
                        var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var i = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                                i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r]
                            }
                    }
                    return n.default = e, t && t.set(e, n), n
                }(t), n = (i = n) && i.__esModule ? i : {
                    default: i
                };
                var h = {
                        x: "clientWidth",
                        y: "clientHeight"
                    },
                    g = {
                        x: "clientTop",
                        y: "clientLeft"
                    },
                    y = {
                        x: "innerWidth",
                        y: "innerHeight"
                    },
                    v = {
                        x: "offsetWidth",
                        y: "offsetHeight"
                    },
                    b = {
                        x: "offsetLeft",
                        y: "offsetTop"
                    },
                    w = {
                        x: "overflowX",
                        y: "overflowY"
                    },
                    S = {
                        x: "scrollWidth",
                        y: "scrollHeight"
                    },
                    k = {
                        x: "scrollLeft",
                        y: "scrollTop"
                    },
                    O = {
                        x: "width",
                        y: "height"
                    },
                    C = function() {},
                    E = !! function() {
                        if ("undefined" === typeof window) return !1;
                        var e = !1;
                        try {
                            document.createElement("div").addEventListener("test", C, {
                                get passive() {
                                    return e = !0, !1
                                }
                            })
                        } catch (t) {}
                        return e
                    }() && {
                        passive: !0
                    },
                    j = function(e, t) {
                        var n = e.length,
                            a = e.minSize,
                            r = e.type,
                            i = t.from,
                            l = t.size,
                            s = t.itemsPerRow,
                            o = (l = Math.max(l, a)) % s;
                        return o && (l += s - o), l > n && (l = n), i = "simple" !== r && i ? Math.max(Math.min(i, n - l), 0) : 0, (o = i % s) && (i -= o, l += o), i === t.from && l == t.size ? t : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? p(n, !0).forEach(function(t) {
                                    f(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, t, {
                            from: i,
                            size: l
                        })
                    };
                e.exports = (r = a = function(e) {
                    function n(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), (t = o(this, c(n).call(this, e))).state = j(e, {
                            itemsPerRow: 1,
                            from: e.initialIndex,
                            size: 0
                        }), t.cache = {}, t.cachedScrollPosition = null, t.prevPrevState = {}, t.unstable = !1, t.updateCounter = 0, t
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && m(e, t)
                    }(n, e), d(n, null, [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = j(e, t);
                            return n === t ? null : n
                        }
                    }]), d(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this), window.addEventListener("resize", this.updateFrameAndClearCache), this.updateFrame(this.scrollTo.bind(this, this.props.initialIndex))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this;
                            if (this.props.axis !== e.axis && this.clearSizeCache(), !this.unstable) {
                                if (++this.updateCounter > 50) return this.unstable = !0, console.error("ReactList failed to reach a stable state.");
                                this.updateCounterTimeoutId || (this.updateCounterTimeoutId = setTimeout(function() {
                                    t.updateCounter = 0, delete t.updateCounterTimeoutId
                                }, 0)), this.updateFrame()
                            }
                        }
                    }, {
                        key: "maybeSetState",
                        value: function(e, t) {
                            if (function(e, t) {
                                    for (var n in t)
                                        if (e[n] !== t[n]) return !1;
                                    return !0
                                }(this.state, e)) return t();
                            this.setState(e, t)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.updateFrameAndClearCache), this.scrollParent.removeEventListener("scroll", this.updateFrameAndClearCache, E), this.scrollParent.removeEventListener("mousewheel", C, E)
                        }
                    }, {
                        key: "getOffset",
                        value: function(e) {
                            var t = this.props.axis,
                                n = e[g[t]] || 0,
                                a = b[t];
                            do {
                                n += e[a] || 0
                            } while (e = e.offsetParent);
                            return n
                        }
                    }, {
                        key: "getEl",
                        value: function() {
                            return this.el || this.items
                        }
                    }, {
                        key: "getScrollPosition",
                        value: function() {
                            if ("number" === typeof this.cachedScrollPosition) return this.cachedScrollPosition;
                            var e = this.scrollParent,
                                t = this.props.axis,
                                n = k[t],
                                a = e === window ? document.body[n] || document.documentElement[n] : e[n],
                                r = this.getScrollSize() - this.props.scrollParentViewportSizeGetter(this),
                                i = Math.max(0, Math.min(a, r)),
                                l = this.getEl();
                            return this.cachedScrollPosition = this.getOffset(e) + i - this.getOffset(l), this.cachedScrollPosition
                        }
                    }, {
                        key: "setScroll",
                        value: function(e) {
                            var t = this.scrollParent,
                                n = this.props.axis;
                            if (e += this.getOffset(this.getEl()), t === window) return window.scrollTo(0, e);
                            e -= this.getOffset(this.scrollParent), t[k[n]] = e
                        }
                    }, {
                        key: "getScrollSize",
                        value: function() {
                            var e = this.scrollParent,
                                t = document,
                                n = t.body,
                                a = t.documentElement,
                                r = S[this.props.axis];
                            return e === window ? Math.max(n[r], a[r]) : e[r]
                        }
                    }, {
                        key: "hasDeterminateSize",
                        value: function() {
                            var e = this.props,
                                t = e.itemSizeGetter,
                                n = e.type;
                            return "uniform" === n || t
                        }
                    }, {
                        key: "getStartAndEnd",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.threshold,
                                t = this.getScrollPosition(),
                                n = Math.max(0, t - e),
                                a = t + this.props.scrollParentViewportSizeGetter(this) + e;
                            return this.hasDeterminateSize() && (a = Math.min(a, this.getSpaceBefore(this.props.length))), {
                                start: n,
                                end: a
                            }
                        }
                    }, {
                        key: "getItemSizeAndItemsPerRow",
                        value: function() {
                            var e = this.props,
                                t = e.axis,
                                n = e.useStaticSize,
                                a = this.state,
                                r = a.itemSize,
                                i = a.itemsPerRow;
                            if (n && r && i) return {
                                itemSize: r,
                                itemsPerRow: i
                            };
                            var l = this.items.children;
                            if (!l.length) return {};
                            var s = l[0],
                                o = s[v[t]],
                                c = Math.abs(o - r);
                            if ((isNaN(c) || c >= 1) && (r = o), !r) return {};
                            for (var u = b[t], d = s[u], m = l[i = 1]; m && m[u] === d; m = l[i]) ++i;
                            return {
                                itemSize: r,
                                itemsPerRow: i
                            }
                        }
                    }, {
                        key: "clearSizeCache",
                        value: function() {
                            this.cachedScrollPosition = null
                        }
                    }, {
                        key: "updateFrameAndClearCache",
                        value: function(e) {
                            return this.clearSizeCache(), this.updateFrame(e)
                        }
                    }, {
                        key: "updateFrame",
                        value: function(e) {
                            switch (this.updateScrollParent(), "function" != typeof e && (e = C), this.props.type) {
                                case "simple":
                                    return this.updateSimpleFrame(e);
                                case "variable":
                                    return this.updateVariableFrame(e);
                                case "uniform":
                                    return this.updateUniformFrame(e)
                            }
                        }
                    }, {
                        key: "updateScrollParent",
                        value: function() {
                            var e = this.scrollParent;
                            this.scrollParent = this.props.scrollParentGetter(this), e !== this.scrollParent && (e && (e.removeEventListener("scroll", this.updateFrameAndClearCache), e.removeEventListener("mousewheel", C)), this.clearSizeCache(), this.scrollParent.addEventListener("scroll", this.updateFrameAndClearCache, E), this.scrollParent.addEventListener("mousewheel", C, E))
                        }
                    }, {
                        key: "updateSimpleFrame",
                        value: function(e) {
                            var t = this.getStartAndEnd(),
                                n = t.end,
                                a = this.items.children,
                                r = 0;
                            if (a.length) {
                                var i = this.props.axis,
                                    l = a[0],
                                    s = a[a.length - 1];
                                r = this.getOffset(s) + s[v[i]] - this.getOffset(l)
                            }
                            if (r > n) return e();
                            var o = this.props,
                                c = o.pageSize,
                                u = o.length,
                                d = Math.min(this.state.size + c, u);
                            this.maybeSetState({
                                size: d
                            }, e)
                        }
                    }, {
                        key: "updateVariableFrame",
                        value: function(e) {
                            this.props.itemSizeGetter || this.cacheSizes();
                            for (var t = this.getStartAndEnd(), n = t.start, a = t.end, r = this.props, i = r.length, l = r.pageSize, s = 0, o = 0, c = 0, u = i - 1; o < u;) {
                                var d = this.getSizeOfItem(o);
                                if (null == d || s + d > n) break;
                                s += d, ++o
                            }
                            for (var m = i - o; c < m && s < a;) {
                                var p = this.getSizeOfItem(o + c);
                                if (null == p) {
                                    c = Math.min(c + l, m);
                                    break
                                }
                                s += p, ++c
                            }
                            this.maybeSetState({
                                from: o,
                                size: c
                            }, e)
                        }
                    }, {
                        key: "updateUniformFrame",
                        value: function(e) {
                            var t = this.getItemSizeAndItemsPerRow(),
                                n = t.itemSize,
                                a = t.itemsPerRow;
                            if (!n || !a) return e();
                            var r = this.getStartAndEnd(),
                                i = r.start,
                                l = r.end,
                                s = j(this.props, {
                                    from: Math.floor(i / n) * a,
                                    size: (Math.ceil((l - i) / n) + 1) * a,
                                    itemsPerRow: a
                                }),
                                o = s.from,
                                c = s.size;
                            return this.maybeSetState({
                                itemsPerRow: a,
                                from: o,
                                itemSize: n,
                                size: c
                            }, e)
                        }
                    }, {
                        key: "getSpaceBefore",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (null != t[e]) return t[e];
                            var n = this.state,
                                a = n.itemSize,
                                r = n.itemsPerRow;
                            if (a) return t[e] = Math.floor(e / r) * a;
                            for (var i = e; i > 0 && null == t[--i];);
                            for (var l = t[i] || 0, s = i; s < e; ++s) {
                                t[s] = l;
                                var o = this.getSizeOfItem(s);
                                if (null == o) break;
                                l += o
                            }
                            return t[e] = l
                        }
                    }, {
                        key: "cacheSizes",
                        value: function() {
                            for (var e = this.cache, t = this.state.from, n = this.items.children, a = v[this.props.axis], r = 0, i = n.length; r < i; ++r) e[t + r] = n[r][a]
                        }
                    }, {
                        key: "getSizeOfItem",
                        value: function(e) {
                            var t = this.cache,
                                n = this.items,
                                a = this.props,
                                r = a.axis,
                                i = a.itemSizeGetter,
                                l = a.itemSizeEstimator,
                                s = a.type,
                                o = this.state,
                                c = o.from,
                                u = o.itemSize,
                                d = o.size;
                            if (u) return u;
                            if (i) return i(e);
                            if (e in t) return t[e];
                            if ("simple" === s && e >= c && e < c + d && n) {
                                var m = n.children[e - c];
                                if (m) return m[v[r]]
                            }
                            return l ? l(e, t) : void 0
                        }
                    }, {
                        key: "scrollTo",
                        value: function(e) {
                            null != e && this.setScroll(this.getSpaceBefore(e))
                        }
                    }, {
                        key: "scrollAround",
                        value: function(e) {
                            var t = this.getScrollPosition(),
                                n = this.getSpaceBefore(e),
                                a = n - this.props.scrollParentViewportSizeGetter(this) + this.getSizeOfItem(e),
                                r = Math.min(a, n),
                                i = Math.max(a, n);
                            return t <= r ? this.setScroll(r) : t > i ? this.setScroll(i) : void 0
                        }
                    }, {
                        key: "getVisibleRange",
                        value: function() {
                            for (var e, t, n = this.state, a = n.from, r = n.size, i = this.getStartAndEnd(0), l = i.start, s = i.end, o = {}, c = a; c < a + r; ++c) {
                                var u = this.getSpaceBefore(c, o),
                                    d = u + this.getSizeOfItem(c);
                                null == e && d > l && (e = c), null != e && u < s && (t = c)
                            }
                            return [e, t]
                        }
                    }, {
                        key: "renderItems",
                        value: function() {
                            for (var e = this, t = this.props, n = t.itemRenderer, a = t.itemsRenderer, r = this.state, i = r.from, l = r.size, s = [], o = 0; o < l; ++o) s.push(n(i + o, o));
                            return a(s, function(t) {
                                return e.items = t
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                n = this.props,
                                a = n.axis,
                                r = n.length,
                                i = n.type,
                                l = n.useTranslate3d,
                                s = this.state,
                                o = s.from,
                                c = s.itemsPerRow,
                                u = this.renderItems();
                            if ("simple" === i) return u;
                            var d = {
                                    position: "relative"
                                },
                                m = {},
                                p = Math.ceil(r / c) * c,
                                f = this.getSpaceBefore(p, m);
                            f && (d[O[a]] = f, "x" === a && (d.overflowX = "hidden"));
                            var h = this.getSpaceBefore(o, m),
                                g = "x" === a ? h : 0,
                                y = "y" === a ? h : 0,
                                v = l ? "translate3d(".concat(g, "px, ").concat(y, "px, 0)") : "translate(".concat(g, "px, ").concat(y, "px)"),
                                b = {
                                    msTransform: v,
                                    WebkitTransform: v,
                                    transform: v
                                };
                            return t.default.createElement("div", {
                                style: d,
                                ref: function(t) {
                                    return e.el = t
                                }
                            }, t.default.createElement("div", {
                                style: b
                            }, u))
                        }
                    }]), n
                }(t.Component), f(a, "displayName", "ReactList"), f(a, "propTypes", {
                    axis: n.default.oneOf(["x", "y"]),
                    initialIndex: n.default.number,
                    itemRenderer: n.default.func,
                    itemSizeEstimator: n.default.func,
                    itemSizeGetter: n.default.func,
                    itemsRenderer: n.default.func,
                    length: n.default.number,
                    minSize: n.default.number,
                    pageSize: n.default.number,
                    scrollParentGetter: n.default.func,
                    scrollParentViewportSizeGetter: n.default.func,
                    threshold: n.default.number,
                    type: n.default.oneOf(["simple", "variable", "uniform"]),
                    useStaticSize: n.default.bool,
                    useTranslate3d: n.default.bool
                }), f(a, "defaultProps", {
                    axis: "y",
                    itemRenderer: function(e, n) {
                        return t.default.createElement("div", {
                            key: n
                        }, e)
                    },
                    itemsRenderer: function(e, n) {
                        return t.default.createElement("div", {
                            ref: n
                        }, e)
                    },
                    length: 0,
                    minSize: 1,
                    pageSize: 10,
                    scrollParentGetter: function(e) {
                        for (var t = e.props.axis, n = e.getEl(), a = w[t]; n = n.parentElement;) switch (window.getComputedStyle(n)[a]) {
                            case "auto":
                            case "scroll":
                            case "overlay":
                                return n
                        }
                        return window
                    },
                    scrollParentViewportSizeGetter: function(e) {
                        var t = e.props.axis,
                            n = e.scrollParent;
                        return n === window ? window[y[t]] : n[h[t]]
                    },
                    threshold: 100,
                    type: "simple",
                    useStaticSize: !1,
                    useTranslate3d: !1
                }), r)
            }) ? a.apply(t, r) : a) || (e.exports = i)
        },
        xuCQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var a = n("q5o0"),
                r = n.n(a),
                i = n("ERkP"),
                l = n("Cc0E"),
                s = n("EIzr"),
                o = n("yFcC").default,
                c = n("8m3w").default,
                u = n("mEQy").default;

            function d() {
                return i.createElement(i.Fragment, null, i.createElement(o, {
                    id: "tw-inject-layout"
                }, c), i.createElement(o, {
                    id: "tw-inject-styled-layout"
                }, u))
            }
            var m = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return r()(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(l.a, this.props), i.createElement(d, null))
                }, t
            }(s.a);
            m.displayName = "Card"
        }
    },
    [
        ["EhrP", 1, 0]
    ]
]);