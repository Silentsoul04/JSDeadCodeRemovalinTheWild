(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [4], {
        "/SJ4": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return p
            });
            var a, i, r = n("uFB0"),
                l = n.n(r),
                o = n("ERkP"),
                s = n("LaCE"),
                d = n("ERpE"),
                u = n("iJNm"),
                c = n("ivAS");
            ! function(e) {
                e.Small = "tw-channel-status-indicator--small", e.Medium = "tw-channel-status-indicator--medium", e.Large = "tw-channel-status-indicator--large"
            }(a || (a = {})),
            function(e) {
                e.Offline = "tw-channel-status-indicator--offline", e.Hosting = "tw-channel-status-indicator--hosting", e.Live = "tw-channel-status-indicator--live"
            }(i || (i = {}));
            var p = function(e) {
                var t = {
                    "tw-channel-status-indicator": !0,
                    "tw-channel-status-indicator--pulse": e.pulse
                };
                return e.size ? t[e.size] = !0 : t[a.Small] = !0, e.status ? t[e.status] = !0 : t[i.Offline] = !0, o.createElement(c.a, l()({
                    display: u.d.InlineBlock,
                    position: u.j.Relative,
                    className: Object(s.a)(t)
                }, Object(d.a)(e)))
            };
            p.displayName = "ChannelStatusIndicator", p.displayName = "ChannelStatusIndicator"
        },
        "5ps1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var a = n("q5o0"),
                i = n.n(a),
                r = n("ERkP"),
                l = n("mBIT"),
                o = n("EIzr"),
                s = n("yFcC").default,
                d = n("zkr3").default,
                u = n("a7ab").default,
                c = n("8m3w").default,
                p = n("FK86").default,
                m = n("snZo").default;

            function g() {
                return r.createElement(r.Fragment, null, r.createElement(s, {
                    id: "tw-aspect"
                }, d), r.createElement(s, {
                    id: "tw-icon"
                }, u), r.createElement(s, {
                    id: "tw-inject-layout"
                }, c), r.createElement(s, {
                    id: "tw-stat"
                }, p), r.createElement(s, {
                    id: "tw-tooltip"
                }, m))
            }
            var f = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return i()(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, r.createElement(l.a, this.props), r.createElement(g, null))
                }, t
            }(o.a);
            f.displayName = "Stat"
        },
        "6QUu": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        kind: "ScalarField",
                        alias: null,
                        name: "login",
                        args: null,
                        storageKey: null
                    },
                    t = {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    },
                    n = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    },
                    a = {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    },
                    i = {
                        kind: "ScalarField",
                        alias: null,
                        name: "viewersCount",
                        args: null,
                        storageKey: null
                    },
                    r = {
                        kind: "ScalarField",
                        alias: null,
                        name: "previewImageURL",
                        args: null,
                        storageKey: null
                    },
                    l = {
                        kind: "LinkedField",
                        alias: null,
                        name: "game",
                        storageKey: null,
                        args: null,
                        concreteType: "Game",
                        plural: !1,
                        selections: [{
                            kind: "ScalarField",
                            alias: null,
                            name: "name",
                            args: null,
                            storageKey: null
                        }]
                    };
                return {
                    kind: "Fragment",
                    name: "FeaturedContentCard_user",
                    type: "User",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [e, t, {
                        kind: "LinkedField",
                        alias: null,
                        name: "stream",
                        storageKey: null,
                        args: null,
                        concreteType: "Stream",
                        plural: !1,
                        selections: [n, a, i, r, l]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "hosting",
                        storageKey: null,
                        args: null,
                        concreteType: "User",
                        plural: !1,
                        selections: [n, e, t, {
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
                            name: "stream",
                            storageKey: null,
                            args: null,
                            concreteType: "Stream",
                            plural: !1,
                            selections: [a, i, r, l]
                        }]
                    }, {
                        kind: "LinkedField",
                        alias: "recentArchive",
                        name: "videos",
                        storageKey: 'videos(first:1,sort:"TIME",type:"ARCHIVE")',
                        args: [{
                            kind: "Literal",
                            name: "first",
                            value: 1,
                            type: "Int"
                        }, {
                            kind: "Literal",
                            name: "sort",
                            value: "TIME",
                            type: "VideoSort"
                        }, {
                            kind: "Literal",
                            name: "type",
                            value: "ARCHIVE",
                            type: "BroadcastType"
                        }],
                        concreteType: "VideoConnection",
                        plural: !1,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "edges",
                            storageKey: null,
                            args: null,
                            concreteType: "VideoEdge",
                            plural: !0,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "node",
                                storageKey: null,
                                args: null,
                                concreteType: "Video",
                                plural: !1,
                                selections: [n, a, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "viewCount",
                                    args: null,
                                    storageKey: null
                                }, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "previewThumbnailURL",
                                    args: null,
                                    storageKey: null
                                }, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "lengthSeconds",
                                    args: null,
                                    storageKey: null
                                }, l]
                            }]
                        }]
                    }]
                }
            }();
            a.hash = "847a19c761b50f81ea135d9840422107", t.default = a
        },
        "7vUx": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return p
            });
            var a, i, r = n("uFB0"),
                l = n.n(r),
                o = n("ERkP"),
                s = n("LaCE"),
                d = n("ERpE"),
                u = n("hEEa"),
                c = n("iJNm");
            ! function(e) {
                e.Top = "tw-tooltip--up", e.Bottom = "tw-tooltip--down", e.Left = "tw-tooltip--left", e.Right = "tw-tooltip--right"
            }(a || (a = {})),
            function(e) {
                e.Left = "tw-tooltip--align-left", e.Center = "tw-tooltip--align-center", e.Right = "tw-tooltip--align-right"
            }(i || (i = {}));
            var p = function(e) {
                var t, n, r, p, m = Object(u.a)(),
                    g = {
                        "tw-tooltip": !0,
                        "tw-tooltip--wrap": !!e.width
                    },
                    f = {
                        "tw-tooltip-wrapper": !0,
                        "tw-tooltip-wrapper--show": e.show
                    };
                e.direction ? g[e.direction] = !0 : g[a.Top] = !0, e.align && e.align !== i.Center && e.direction !== a.Left && e.direction !== a.Right ? g[e.align] = !0 : g[i.Center] = !0, e.offsetX && (e.align === i.Right ? n = e.offsetX : t = e.offsetX), e.offsetY && (e.direction && e.direction !== a.Top ? r = e.offsetY : p = e.offsetY);
                var h = {
                    marginLeft: t,
                    marginRight: n,
                    marginTop: r,
                    marginBottom: p,
                    width: e.width
                };
                return o.createElement(c.g, l()({
                    display: e.display ? e.display : c.d.InlineFlex
                }, Object(d.a)(e)), o.createElement("div", {
                    className: Object(s.a)(f),
                    "aria-describedby": e.id || m,
                    title: e.title
                }, e.children, o.createElement("div", {
                    className: Object(s.a)(g),
                    style: h,
                    "data-a-target": "tw-tooltip-label",
                    role: "tooltip",
                    id: e.id || m
                }, e.label)))
            };
            p.displayName = "Tooltip", p.displayName = "Tooltip"
        },
        "8egr": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return T
            });
            var a = n("pneb"),
                i = n("h7sq"),
                r = n("tS02"),
                l = n("/XES"),
                o = n("ztBH"),
                s = n("Fayl"),
                d = n("yFcC"),
                u = n.n(d),
                c = n("ERkP"),
                p = n.n(c),
                m = n("/SwW"),
                g = n("Q0He"),
                f = n("5vmN"),
                h = n("iJNm"),
                y = n("cQFw"),
                w = n("k3nD"),
                v = n("wtJr"),
                k = n("vlJ8"),
                b = n("5ps1"),
                C = n("bfSB"),
                S = n("zkRB"),
                F = n("1nou"),
                L = p.a.createElement,
                E = function(e) {
                    function t() {
                        return Object(i.a)(this, t), Object(l.a)(this, Object(o.a)(t).apply(this, arguments))
                    }
                    return Object(s.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl,
                                t = e.formatNumberShort,
                                n = e.formatMessage,
                                i = e.formatPastRelativeDate;
                            return L(g.a, {
                                className: "mw-channel-profile-video-card",
                                background: f.a.Base,
                                display: h.d.Flex,
                                alignItems: h.b.Center,
                                justifyContent: h.h.Start,
                                flexWrap: h.f.NoWrap,
                                padding: 1,
                                fullWidth: !0
                            }, L(y.a, {
                                className: "mw-channel-profile-video-card__image",
                                flexShrink: 0,
                                position: h.j.Relative
                            }, L(w.a, Object(a.a)({}, Object(v.f)(this.props.imageURL), {
                                alt: this.props.title || "video preview thumbnail",
                                aspect: k.c.Aspect16x9,
                                key: this.props.imageURL,
                                sizes: [{
                                    size: "105px"
                                }]
                            })), this.props.formattedLength && L(g.a, {
                                className: "mw-channel-profile-video-card__time",
                                color: f.c.Overlay,
                                position: h.j.Absolute
                            }, L(b.a, {
                                icon: C.a.GlyphLength,
                                label: n("Video length", "VideoRowItem"),
                                value: this.props.formattedLength
                            }))), L(y.a, {
                                className: "mw-channel-profile-video-card__details",
                                margin: {
                                    left: 1
                                },
                                ellipsis: !0
                            }, L(S.a, {
                                type: F.e.H4,
                                ellipsis: !0,
                                color: f.c.Base
                            }, this.props.title), L(S.a, {
                                ellipsis: !0,
                                color: f.c.Alt2
                            }, this.props.gameName, "\xa0|\xa0", n("{viewCount, plural, one {1 view} other {{formattedViewCount} views}}", {
                                formattedViewCount: t(this.props.viewCount || 0, {
                                    maximumSignificantDigits: 3
                                }),
                                viewCount: this.props.viewCount || 0
                            }, "VideoRowItem"), "\xa0|\xa0", this.props.createdAt ? i(this.props.createdAt) : null)), L(u.a, {
                                id: "1195150318"
                            }, [".mw-channel-profile-video-card__image{width:105px;height:60px;}", ".mw-channel-profile-video-card__image .mw-channel-profile-video-card__time{right:4px;bottom:-4px;text-shadow:2px 2px 5px #212126;}"]))
                        }
                    }]), t
                }(p.a.PureComponent),
                T = Object(m.a)(E)
        },
        "9Evb": function(e, t, n) {
            "use strict";
            var a = n("pneb"),
                i = n("h7sq"),
                r = n("tS02"),
                l = n("/XES"),
                o = n("ztBH"),
                s = n("Fayl"),
                d = n("znL5"),
                u = n("ERkP"),
                c = n.n(u),
                p = n("/SwW"),
                m = n("bfSB"),
                g = n("Q0He"),
                f = n("5vmN"),
                h = n("iJNm"),
                y = n("cQFw"),
                w = n("zkRB"),
                v = n("1nou"),
                k = n("/SJ4"),
                b = n("q5o0"),
                C = n.n(b),
                S = n("EIzr"),
                F = n("yFcC").default,
                L = n("bRbd").default,
                E = n("8m3w").default;

            function T() {
                return u.createElement(u.Fragment, null, u.createElement(F, {
                    id: "tw-channel-status-indicator"
                }, L), u.createElement(F, {
                    id: "tw-inject-layout"
                }, E))
            }
            var I = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return C()(t, e), t.prototype.render = function() {
                    return u.createElement(u.Fragment, null, u.createElement(k.a, this.props), u.createElement(T, null))
                }, t
            }(S.a);
            I.displayName = "ChannelStatusIndicator";
            var x, O, _ = n("S2yq");

            function j(e, t) {
                if (t) return x.Hosting;
                if (e) switch (e) {
                    case "live":
                        return x.Live;
                    case "premiere":
                        return x.Premiere;
                    case "watch_party":
                    case "rerun":
                        return x.Rerun;
                    default:
                        return
                }
            }! function(e) {
                e.Live = "live", e.Premiere = "premiere", e.Rerun = "rerun", e.Hosting = "hosting"
            }(x || (x = {})), n.d(t, "a", function() {
                return N
            }), n.d(t, "b", function() {
                return j
            });
            var V = c.a.createElement,
                R = (O = {}, Object(d.a)(O, x.Premiere, {
                    asset: m.a.VideoPremiere,
                    fill: !0
                }), Object(d.a)(O, x.Rerun, {
                    asset: m.a.VideoRerun,
                    fill: !1
                }), O),
                K = function(e) {
                    function t() {
                        return Object(i.a)(this, t), Object(l.a)(this, Object(o.a)(t).apply(this, arguments))
                    }
                    return Object(s.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return V(g.a, {
                                color: this.props.isOverlay ? f.c.Overlay : f.c.Base,
                                background: this.props.isOverlay ? f.a.Overlay : f.a.Base,
                                padding: {
                                    x: .5
                                },
                                borderRadius: f.b.Small,
                                display: h.d.Flex
                            }, V(y.a, {
                                display: h.d.Flex,
                                alignItems: h.b.Center,
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
                                case x.Live:
                                    t = e("LIVE", "streamTypeIndicator");
                                    break;
                                case x.Premiere:
                                    t = e("Premiere", "streamTypeIndicator");
                                    break;
                                case x.Rerun:
                                    t = e("Rerun", "streamTypeIndicator");
                                    break;
                                case x.Hosting:
                                    t = e("HOSTING", "streamTypeIndicator")
                            }
                            return !!t && V(w.a, {
                                type: v.e.Span
                            }, t)
                        }
                    }, {
                        key: "icon",
                        get: function() {
                            var e;
                            return this.props.indicatorType === x.Live ? e = k.c.Live : this.props.indicatorType === x.Hosting && (e = k.c.Hosting), e ? V(y.a, {
                                display: h.d.Flex,
                                alignItems: h.b.Center
                            }, V(I, {
                                status: e,
                                size: k.b.Small,
                                pulse: this.props.isPulsing
                            })) : this.props.indicatorType && V(_.a, Object(a.a)({}, R[this.props.indicatorType], {
                                width: 14,
                                height: 14
                            }))
                        }
                    }]), t
                }(c.a.PureComponent),
                N = Object(p.a)(K)
        },
        FK86: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-stat,.tw-stat__icon{display:inline-flex}.tw-stat{align-items:center;color:currentColor;line-height:1}.tw-stat__icon svg{width:calc(1em + 2px);height:calc(1em + 2px)}.tw-stat__value{margin-left:.5rem}\n"
        },
        GPry: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        kind: "LocalArgument",
                        name: "login",
                        type: "String!",
                        defaultValue: null
                    }],
                    t = [{
                        kind: "Variable",
                        name: "login",
                        variableName: "login",
                        type: "String"
                    }],
                    n = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    },
                    a = {
                        kind: "ScalarField",
                        alias: null,
                        name: "login",
                        args: null,
                        storageKey: null
                    },
                    i = {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    },
                    r = {
                        kind: "ScalarField",
                        alias: null,
                        name: "name",
                        args: null,
                        storageKey: null
                    },
                    l = {
                        kind: "LinkedField",
                        alias: null,
                        name: "subscriptionProducts",
                        storageKey: null,
                        args: null,
                        concreteType: "SubscriptionProduct",
                        plural: !0,
                        selections: [n]
                    },
                    o = {
                        kind: "Literal",
                        name: "first",
                        value: 1,
                        type: "Int"
                    },
                    s = {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    },
                    d = {
                        kind: "ScalarField",
                        alias: null,
                        name: "viewCount",
                        args: null,
                        storageKey: null
                    },
                    u = {
                        kind: "ScalarField",
                        alias: null,
                        name: "createdAt",
                        args: null,
                        storageKey: null
                    },
                    c = {
                        kind: "LinkedField",
                        alias: null,
                        name: "game",
                        storageKey: null,
                        args: null,
                        concreteType: "Game",
                        plural: !1,
                        selections: [n, r]
                    },
                    p = [{
                        kind: "LinkedField",
                        alias: null,
                        name: "edges",
                        storageKey: null,
                        args: null,
                        concreteType: "ClipEdge",
                        plural: !0,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "node",
                            storageKey: null,
                            args: null,
                            concreteType: "Clip",
                            plural: !1,
                            selections: [n, s, {
                                kind: "ScalarField",
                                alias: null,
                                name: "thumbnailURL",
                                args: null,
                                storageKey: null
                            }, d, {
                                kind: "ScalarField",
                                alias: null,
                                name: "durationSeconds",
                                args: null,
                                storageKey: null
                            }, u, {
                                kind: "ScalarField",
                                alias: null,
                                name: "url",
                                args: null,
                                storageKey: null
                            }, c]
                        }]
                    }],
                    m = {
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
                    },
                    g = {
                        kind: "ScalarField",
                        alias: null,
                        name: "viewersCount",
                        args: null,
                        storageKey: null
                    },
                    f = {
                        kind: "ScalarField",
                        alias: null,
                        name: "previewImageURL",
                        args: null,
                        storageKey: null
                    },
                    h = {
                        kind: "LinkedField",
                        alias: null,
                        name: "game",
                        storageKey: null,
                        args: null,
                        concreteType: "Game",
                        plural: !1,
                        selections: [r, n]
                    },
                    y = {
                        kind: "Literal",
                        name: "type",
                        value: "HIGHLIGHT",
                        type: "BroadcastType"
                    },
                    w = {
                        kind: "ScalarField",
                        alias: null,
                        name: "previewThumbnailURL",
                        args: null,
                        storageKey: null
                    },
                    v = {
                        kind: "ScalarField",
                        alias: null,
                        name: "lengthSeconds",
                        args: null,
                        storageKey: null
                    },
                    k = [{
                        kind: "LinkedField",
                        alias: null,
                        name: "edges",
                        storageKey: null,
                        args: null,
                        concreteType: "VideoEdge",
                        plural: !0,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "node",
                            storageKey: null,
                            args: null,
                            concreteType: "Video",
                            plural: !1,
                            selections: [n, s, w, d, v, u, c]
                        }]
                    }],
                    b = {
                        kind: "Literal",
                        name: "sort",
                        value: "TIME",
                        type: "VideoSort"
                    },
                    C = {
                        kind: "Literal",
                        name: "type",
                        value: "ARCHIVE",
                        type: "BroadcastType"
                    },
                    S = {
                        kind: "Literal",
                        name: "first",
                        value: 6,
                        type: "Int"
                    };
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "ChannelProfile_Query",
                    id: null,
                    text: "query ChannelProfile_Query(\n  $login: String!\n) {\n  user(login: $login) {\n    ...ChannelInfoCard_user\n    ...ChannelProfileVideos_user\n    ...FeaturedContentCard_user\n    id\n    login\n    displayName\n    lastBroadcast {\n      id\n      game {\n        name\n        id\n      }\n    }\n    subscriptionProducts {\n      id\n    }\n  }\n}\n\nfragment ChannelInfoCard_user on User {\n  displayName\n  description\n  bannerImageURL\n  followers {\n    totalCount\n  }\n  id\n  login\n  profileImageURL(width: 50)\n  profileViewCount\n  hosting {\n    id\n  }\n  stream {\n    id\n    type\n  }\n  clips(first: 1, criteria: {period: ALL_TIME, sort: VIEWS_DESC}) {\n    edges {\n      node {\n        ...ClipRowItem_clip\n        id\n      }\n    }\n  }\n  videos(first: 1, type: HIGHLIGHT, sort: VIEWS) {\n    edges {\n      node {\n        ...VideoRowItem_video\n        id\n      }\n    }\n  }\n}\n\nfragment ChannelProfileVideos_user on User {\n  ...FeaturedContentCard_user\n  login\n  displayName\n  stream {\n    id\n  }\n  hosting {\n    login\n    stream {\n      id\n    }\n    id\n  }\n  recentHighlights: videos(first: 6, type: HIGHLIGHT, sort: TIME) {\n    edges {\n      node {\n        ...VideoRowItem_video\n        id\n      }\n    }\n  }\n  archives: videos(first: 7, type: ARCHIVE, sort: TIME) {\n    edges {\n      node {\n        ...VideoRowItem_video\n        id\n      }\n    }\n  }\n  topClips: clips(first: 6, criteria: {period: LAST_WEEK, sort: VIEWS_DESC}) {\n    edges {\n      node {\n        ...ClipRowItem_clip\n        id\n      }\n    }\n  }\n  recentPremieres: videos(first: 6, type: PAST_PREMIERE, sort: TIME) {\n    edges {\n      node {\n        ...VideoRowItem_video\n        createdAt\n        id\n      }\n    }\n  }\n  recentUploads: videos(first: 6, type: UPLOAD, sort: TIME) {\n    edges {\n      node {\n        ...VideoRowItem_video\n        createdAt\n        id\n      }\n    }\n  }\n}\n\nfragment FeaturedContentCard_user on User {\n  login\n  displayName\n  stream {\n    id\n    title\n    viewersCount\n    previewImageURL\n    game {\n      name\n      id\n    }\n  }\n  hosting {\n    id\n    login\n    displayName\n    profileImageURL(width: 50)\n    stream {\n      title\n      viewersCount\n      previewImageURL\n      game {\n        name\n        id\n      }\n      id\n    }\n  }\n  recentArchive: videos(first: 1, type: ARCHIVE, sort: TIME) {\n    edges {\n      node {\n        id\n        title\n        viewCount\n        previewThumbnailURL\n        lengthSeconds\n        game {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment VideoRowItem_video on Video {\n  id\n  title\n  previewThumbnailURL\n  viewCount\n  lengthSeconds\n  createdAt\n  game {\n    id\n    name\n  }\n}\n\nfragment ClipRowItem_clip on Clip {\n  id\n  title\n  thumbnailURL\n  viewCount\n  durationSeconds\n  createdAt\n  url\n  game {\n    id\n    name\n  }\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "ChannelProfile_Query",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "user",
                            storageKey: null,
                            args: t,
                            concreteType: "User",
                            plural: !1,
                            selections: [{
                                kind: "FragmentSpread",
                                name: "ChannelInfoCard_user",
                                args: null
                            }, {
                                kind: "FragmentSpread",
                                name: "ChannelProfileVideos_user",
                                args: null
                            }, {
                                kind: "FragmentSpread",
                                name: "FeaturedContentCard_user",
                                args: null
                            }, n, a, i, {
                                kind: "LinkedField",
                                alias: null,
                                name: "lastBroadcast",
                                storageKey: null,
                                args: null,
                                concreteType: "Broadcast",
                                plural: !1,
                                selections: [n, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "game",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Game",
                                    plural: !1,
                                    selections: [r]
                                }]
                            }, l]
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "ChannelProfile_Query",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "user",
                            storageKey: null,
                            args: t,
                            concreteType: "User",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "clips",
                                storageKey: 'clips(criteria:{"period":"ALL_TIME","sort":"VIEWS_DESC"},first:1)',
                                args: [{
                                    kind: "Literal",
                                    name: "criteria",
                                    value: {
                                        period: "ALL_TIME",
                                        sort: "VIEWS_DESC"
                                    },
                                    type: "UserClipsInput"
                                }, o],
                                concreteType: "ClipConnection",
                                plural: !1,
                                selections: p
                            }, i, {
                                kind: "ScalarField",
                                alias: null,
                                name: "bannerImageURL",
                                args: null,
                                storageKey: null
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "followers",
                                storageKey: null,
                                args: null,
                                concreteType: "FollowerConnection",
                                plural: !1,
                                selections: [{
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "totalCount",
                                    args: null,
                                    storageKey: null
                                }]
                            }, n, a, m, {
                                kind: "ScalarField",
                                alias: null,
                                name: "profileViewCount",
                                args: null,
                                storageKey: null
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "hosting",
                                storageKey: null,
                                args: null,
                                concreteType: "User",
                                plural: !1,
                                selections: [n, a, i, m, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "stream",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Stream",
                                    plural: !1,
                                    selections: [s, g, f, h, n]
                                }]
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "stream",
                                storageKey: null,
                                args: null,
                                concreteType: "Stream",
                                plural: !1,
                                selections: [n, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "type",
                                    args: null,
                                    storageKey: null
                                }, s, g, f, h]
                            }, {
                                kind: "ScalarField",
                                alias: null,
                                name: "description",
                                args: null,
                                storageKey: null
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "videos",
                                storageKey: 'videos(first:1,sort:"VIEWS",type:"HIGHLIGHT")',
                                args: [o, {
                                    kind: "Literal",
                                    name: "sort",
                                    value: "VIEWS",
                                    type: "VideoSort"
                                }, y],
                                concreteType: "VideoConnection",
                                plural: !1,
                                selections: k
                            }, {
                                kind: "LinkedField",
                                alias: "recentArchive",
                                name: "videos",
                                storageKey: 'videos(first:1,sort:"TIME",type:"ARCHIVE")',
                                args: [o, b, C],
                                concreteType: "VideoConnection",
                                plural: !1,
                                selections: [{
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "edges",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "VideoEdge",
                                    plural: !0,
                                    selections: [{
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "node",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "Video",
                                        plural: !1,
                                        selections: [n, s, d, w, v, h]
                                    }]
                                }]
                            }, {
                                kind: "LinkedField",
                                alias: "recentHighlights",
                                name: "videos",
                                storageKey: 'videos(first:6,sort:"TIME",type:"HIGHLIGHT")',
                                args: [S, b, y],
                                concreteType: "VideoConnection",
                                plural: !1,
                                selections: k
                            }, {
                                kind: "LinkedField",
                                alias: "archives",
                                name: "videos",
                                storageKey: 'videos(first:7,sort:"TIME",type:"ARCHIVE")',
                                args: [{
                                    kind: "Literal",
                                    name: "first",
                                    value: 7,
                                    type: "Int"
                                }, b, C],
                                concreteType: "VideoConnection",
                                plural: !1,
                                selections: k
                            }, {
                                kind: "LinkedField",
                                alias: "topClips",
                                name: "clips",
                                storageKey: 'clips(criteria:{"period":"LAST_WEEK","sort":"VIEWS_DESC"},first:6)',
                                args: [{
                                    kind: "Literal",
                                    name: "criteria",
                                    value: {
                                        period: "LAST_WEEK",
                                        sort: "VIEWS_DESC"
                                    },
                                    type: "UserClipsInput"
                                }, S],
                                concreteType: "ClipConnection",
                                plural: !1,
                                selections: p
                            }, {
                                kind: "LinkedField",
                                alias: "recentPremieres",
                                name: "videos",
                                storageKey: 'videos(first:6,sort:"TIME",type:"PAST_PREMIERE")',
                                args: [S, b, {
                                    kind: "Literal",
                                    name: "type",
                                    value: "PAST_PREMIERE",
                                    type: "BroadcastType"
                                }],
                                concreteType: "VideoConnection",
                                plural: !1,
                                selections: k
                            }, {
                                kind: "LinkedField",
                                alias: "recentUploads",
                                name: "videos",
                                storageKey: 'videos(first:6,sort:"TIME",type:"UPLOAD")',
                                args: [S, b, {
                                    kind: "Literal",
                                    name: "type",
                                    value: "UPLOAD",
                                    type: "BroadcastType"
                                }],
                                concreteType: "VideoConnection",
                                plural: !1,
                                selections: k
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "lastBroadcast",
                                storageKey: null,
                                args: null,
                                concreteType: "Broadcast",
                                plural: !1,
                                selections: [n, h]
                            }, l]
                        }]
                    }
                }
            }();
            a.hash = "ee90d779d21c648e4815a212e7a6f04e", t.default = a
        },
        Ho9t: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "a", function() {
                return g
            });
            var a, i, r, l, o, s = n("uFB0"),
                d = n.n(s),
                u = n("ERkP"),
                c = n("LaCE"),
                p = n("ERpE"),
                m = n("iJNm");
            ! function(e) {
                e.Short = "tw-animation--delay-short", e.Medium = "tw-animation--delay-medium", e.Long = "tw-animation--delay-long", e.ExtraLong = "tw-animation--delay-extra-long"
            }(a || (a = {})),
            function(e) {
                e.Short = "tw-animation--duration-short", e.Medium = "tw-animation--duration-medium", e.Long = "tw-animation--duration-long", e.ExtraLong = "tw-animation--duration-extra-long"
            }(i || (i = {})),
            function(e) {
                e.Both = "tw-animation--fill-mode-both", e.None = "tw-animation--fill-mode-none", e.Forwards = "tw-animation--fill-mode-forwards", e.Backwards = "tw-animation--fill-mode-backwards"
            }(r || (r = {})),
            function(e) {
                e.Ease = "tw-animation--timing-ease", e.Linear = "tw-animation--timing-linear", e.EaseIn = "tw-animation--timing-ease-in", e.EaseOut = "tw-animation--timing-ease-out", e.EaseInOut = "tw-animation--timing-ease-in-out"
            }(l || (l = {})),
            function(e) {
                e.Bounce = "tw-animation--bounce", e.BounceIn = "tw-animation--bounce-in", e.BounceOut = "tw-animation--bounce-out", e.FadeIn = "tw-animation--fade-in", e.FadeOut = "tw-animation--fade-out", e.SlideInTop = "tw-animation--slide-in-top", e.SlideInRight = "tw-animation--slide-in-right", e.SlideInBottom = "tw-animation--slide-in-bottom", e.SlideInLeft = "tw-animation--slide-in-left", e.SlideOutTop = "tw-animation--slide-out-top", e.SlideOutRight = "tw-animation--slide-out-right", e.SlideOutBottom = "tw-animation--slide-out-bottom", e.SlideOutLeft = "tw-animation--slide-out-left"
            }(o || (o = {}));
            var g = function(e) {
                var t = {
                    "tw-animation": !0,
                    "tw-animation--animate": e.enabled,
                    "tw-animation--loop": e.loop
                };
                return e.delay && (t[e.delay] = !0), e.duration ? t[e.duration] = !0 : t[i.Short] = !0, e.fillMode ? t[e.fillMode] = !0 : t[r.Both] = !0, e.timing ? t[e.timing] = !0 : t[l.Ease] = !0, e.type && (t[e.type] = !0), u.createElement(m.g, d()({
                    className: Object(c.a)(t)
                }, Object(p.a)(e)), u.createElement("div", {
                    onAnimationStart: e.onAnimationStart,
                    onAnimationEnd: e.onAnimationEnd,
                    "data-a-target": "tw-animation-target"
                }, e.children))
            };
            g.displayName = "Animation", g.displayName = "Animation"
        },
        IPxZ: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-animation--loop{animation-iteration-count:infinite}.tw-animation--duration-short{animation-duration:.15s}.tw-animation--duration-medium{animation-duration:.3s}.tw-animation--duration-long{animation-duration:.6s}.tw-animation--duration-extra-long{animation-duration:1s}.tw-animation--delay-short{animation-delay:.15s}.tw-animation--delay-medium{animation-delay:.3s}.tw-animation--delay-long{animation-delay:.6s}.tw-animation--delay-extra-long{animation-delay:1s}.tw-animation--fill-mode-both{animation-fill-mode:both}.tw-animation--fill-mode-none{animation-fill-mode:none}.tw-animation--fill-mode-forwards{animation-fill-mode:forwards}.tw-animation--fill-mode-backwards{animation-fill-mode:backwards}.tw-animation--timing-ease{animation-timing-function:ease}.tw-animation--timing-linear{animation-timing-function:linear}.tw-animation--timing-ease-in{animation-timing-function:ease-in}.tw-animation--timing-ease-out{animation-timing-function:ease-out}.tw-animation--timing-ease-in-out{animation-timing-function:ease-in-out}.tw-animation--animate.tw-animation--bounce{animation-name:tw-animation--bounce}.tw-animation--animate.tw-animation--bounce-in{animation-name:tw-animation--bounce-in}.tw-animation--animate.tw-animation--bounce-out{animation-name:tw-animation--bounce-out}.tw-animation--animate.tw-animation--fade-in{animation-name:tw-animation--fade-in}.tw-animation--animate.tw-animation--fade-out{animation-name:tw-animation--fade-out}.tw-animation--animate.tw-animation--slide-in-top{animation-name:tw-animation--slide-in-top}.tw-animation--animate.tw-animation--slide-in-right{animation-name:tw-animation--slide-in-right}.tw-animation--animate.tw-animation--slide-in-bottom{animation-name:tw-animation--slide-in-bottom}.tw-animation--animate.tw-animation--slide-in-left{animation-name:tw-animation--slide-in-left}.tw-animation--animate.tw-animation--slide-out-top{animation-name:tw-animation--slide-out-top}.tw-animation--animate.tw-animation--slide-out-right{animation-name:tw-animation--slide-out-right}.tw-animation--animate.tw-animation--slide-out-bottom{animation-name:tw-animation--slide-out-bottom}.tw-animation--animate.tw-animation--slide-out-left{animation-name:tw-animation--slide-out-left}@keyframes tw-animation--fade-in{0%{opacity:0}100%{opacity:1}}@keyframes tw-animation--fade-out{0%{opacity:1}100%{opacity:0}}@keyframes tw-animation--slide-in-top{0%{transform:translate3d(0,-2rem,0);opacity:0}100%{transform:translate3d(0,0,0);opacity:1}}@keyframes tw-animation--slide-in-right{0%{transform:translate3d(2rem,0,0);opacity:0}100%{transform:translate3d(0,0,0);opacity:1}}@keyframes tw-animation--slide-in-bottom{0%{transform:translate3d(0,2rem,0);opacity:0}100%{transform:translate3d(0,0,0);opacity:1}}@keyframes tw-animation--slide-in-left{0%{transform:translate3d(-2rem,0,0);opacity:0}100%{transform:translate3d(0,0,0);opacity:1}}@keyframes tw-animation--slide-out-top{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(0,-2rem,0);opacity:0}}@keyframes tw-animation--slide-out-right{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(2rem,0,0);opacity:0}}@keyframes tw-animation--slide-out-bottom{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(0,2rem,0);opacity:0}}@keyframes tw-animation--slide-out-left{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(-2rem,0,0);opacity:0}}@keyframes tw-animation--bounce{0%,100%,70%{transform:translateY(0)}50%{transform:translateY(-.7rem)}60%{transform:translateY(-.35rem)}80%{transform:translateY(-.125rem)}}@keyframes tw-animation--bounce-in{20%,40%,60%,80%,from,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{transform:scale3d(.3,.3,.3);opacity:0}60%{transform:scale3d(1.1,1.1,1.1)}to{transform:scale3d(1,1,1);opacity:1}}@keyframes tw-animation--bounce-out{20%{transform:scale3d(.9,.9,.9)}50%,55%{transform:scale3d(1.1,1.1,1.1);opacity:1}to{transform:scale3d(.3,.3,.3);opacity:0}}\n"
        },
        NM2R: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return y
            });
            var a = n("h7sq"),
                i = n("tS02"),
                r = n("/XES"),
                l = n("ztBH"),
                o = n("Fayl"),
                s = n("8egr"),
                d = n("ERkP"),
                u = n.n(d),
                c = n("pnpS"),
                p = n("HIP8"),
                m = n("B8T3"),
                g = n("c67T"),
                f = u.a.createElement,
                h = function(e) {
                    function t() {
                        return Object(a.a)(this, t), Object(r.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(o.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.video;
                            return f(m.a, {
                                linkTo: p.a.Vod,
                                params: {
                                    id: e.id
                                },
                                interactionContent: this.props.interactionContent,
                                hoverUnderlineNone: !0
                            }, f(s.a, {
                                title: e.title,
                                imageURL: e.previewThumbnailURL,
                                viewCount: e.viewCount,
                                formattedLength: e.lengthSeconds ? Object(g.a)(e.lengthSeconds) : null,
                                gameName: e.game && e.game.name,
                                createdAt: e.createdAt ? new Date(e.createdAt) : null
                            }))
                        }
                    }]), t
                }(u.a.Component),
                y = Object(c.createFragmentContainer)(h, {
                    video: function() {
                        return n("yMDu")
                    }
                })
        },
        Vve8: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/ChannelProfile", function() {
                return n("omMt")
            }])
        },
        bRbd: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-channel-status-indicator,.tw-root--theme-dark .tw-channel-status-indicator,.tw-root--theme-dark .tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator,.tw-root--theme-light .tw-channel-status-indicator--pulse::after{background:#e91916}.tw-channel-status-indicator{border-radius:50%}.tw-channel-status-indicator--small,.tw-channel-status-indicator--small::after{width:.8rem;height:.8rem}.tw-channel-status-indicator--medium,.tw-channel-status-indicator--medium::after{width:1.2rem;height:1.2rem}.tw-channel-status-indicator--large,.tw-channel-status-indicator--large::after{width:1.6rem;height:1.6rem}.tw-channel-status-indicator--pulse::after{background:#e91916;position:absolute;top:0;left:0;border-radius:50%;content:'';opacity:.2;animation:1.5s ease-out infinite tw-channel-status-indicator--pulse}.tw-root--theme-dark .tw-channel-status-indicator--offline,.tw-root--theme-dark .tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after{background:#686878}.tw-channel-status-indicator--offline{background:#a0a0ac}.tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator--offline{background:#a0a0ac}.tw-root--theme-light .tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after{background:#a0a0ac}.tw-channel-status-indicator--hosting,.tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after,.tw-root--theme-dark .tw-channel-status-indicator--hosting,.tw-root--theme-dark .tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator--hosting,.tw-root--theme-light .tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after{background:#ffbf00}@keyframes tw-channel-status-indicator--pulse{0%{transform:scale3d(1,1,1);opacity:.2}100%{transform:scale3d(4,4,4);opacity:0}}\n"
        },
        c67T: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = 60,
                i = 60 * a,
                r = 24 * i;

            function l(e) {
                var t = e,
                    n = Math.floor(t / r);
                t -= n * r;
                var l = Math.floor(t / i);
                t -= l * i;
                for (var o = Math.floor(t / a), s = [n, l, o, t - o * a]; 0 === s[0] && s.length > 2;) s.shift();
                return s.map(function(e, t) {
                    return 0 === t || e > 9 ? e : "0" + e
                }).join(":")
            }
        },
        e7Sc: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-toast{width:100%;min-width:30rem;z-index:4000}.tw-toast__dismiss-target{min-width:4.8rem;min-height:4.8rem}\n"
        },
        hEEa: function(e, t, n) {
            "use strict";

            function a() {
                return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
            n.d(t, "a", function() {
                return a
            })
        },
        is3J: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    },
                    t = {
                        kind: "Literal",
                        name: "first",
                        value: 1,
                        type: "Int"
                    };
                return {
                    kind: "Fragment",
                    name: "ChannelInfoCard_user",
                    type: "User",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [{
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
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "bannerImageURL",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "followers",
                        storageKey: null,
                        args: null,
                        concreteType: "FollowerConnection",
                        plural: !1,
                        selections: [{
                            kind: "ScalarField",
                            alias: null,
                            name: "totalCount",
                            args: null,
                            storageKey: null
                        }]
                    }, e, {
                        kind: "ScalarField",
                        alias: null,
                        name: "login",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "description",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "profileViewCount",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "hosting",
                        storageKey: null,
                        args: null,
                        concreteType: "User",
                        plural: !1,
                        selections: [e]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "stream",
                        storageKey: null,
                        args: null,
                        concreteType: "Stream",
                        plural: !1,
                        selections: [e, {
                            kind: "ScalarField",
                            alias: null,
                            name: "type",
                            args: null,
                            storageKey: null
                        }]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "clips",
                        storageKey: 'clips(criteria:{"period":"ALL_TIME","sort":"VIEWS_DESC"},first:1)',
                        args: [{
                            kind: "Literal",
                            name: "criteria",
                            value: {
                                period: "ALL_TIME",
                                sort: "VIEWS_DESC"
                            },
                            type: "UserClipsInput"
                        }, t],
                        concreteType: "ClipConnection",
                        plural: !1,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "edges",
                            storageKey: null,
                            args: null,
                            concreteType: "ClipEdge",
                            plural: !0,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "node",
                                storageKey: null,
                                args: null,
                                concreteType: "Clip",
                                plural: !1,
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: "ClipRowItem_clip",
                                    args: null
                                }]
                            }]
                        }]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "videos",
                        storageKey: 'videos(first:1,sort:"VIEWS",type:"HIGHLIGHT")',
                        args: [t, {
                            kind: "Literal",
                            name: "sort",
                            value: "VIEWS",
                            type: "VideoSort"
                        }, {
                            kind: "Literal",
                            name: "type",
                            value: "HIGHLIGHT",
                            type: "BroadcastType"
                        }],
                        concreteType: "VideoConnection",
                        plural: !1,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "edges",
                            storageKey: null,
                            args: null,
                            concreteType: "VideoEdge",
                            plural: !0,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "node",
                                storageKey: null,
                                args: null,
                                concreteType: "Video",
                                plural: !1,
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: "VideoRowItem_video",
                                    args: null
                                }]
                            }]
                        }]
                    }]
                }
            }();
            a.hash = "d3e732857e9bb547983df180c1cf0dd1", t.default = a
        },
        lIBa: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        kind: "ScalarField",
                        alias: null,
                        name: "login",
                        args: null,
                        storageKey: null
                    },
                    t = {
                        kind: "LinkedField",
                        alias: null,
                        name: "stream",
                        storageKey: null,
                        args: null,
                        concreteType: "Stream",
                        plural: !1,
                        selections: [{
                            kind: "ScalarField",
                            alias: null,
                            name: "id",
                            args: null,
                            storageKey: null
                        }]
                    },
                    n = {
                        kind: "Literal",
                        name: "first",
                        value: 6,
                        type: "Int"
                    },
                    a = {
                        kind: "Literal",
                        name: "sort",
                        value: "TIME",
                        type: "VideoSort"
                    },
                    i = {
                        kind: "FragmentSpread",
                        name: "VideoRowItem_video",
                        args: null
                    },
                    r = [{
                        kind: "LinkedField",
                        alias: null,
                        name: "edges",
                        storageKey: null,
                        args: null,
                        concreteType: "VideoEdge",
                        plural: !0,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "node",
                            storageKey: null,
                            args: null,
                            concreteType: "Video",
                            plural: !1,
                            selections: [i]
                        }]
                    }],
                    l = [{
                        kind: "LinkedField",
                        alias: null,
                        name: "edges",
                        storageKey: null,
                        args: null,
                        concreteType: "VideoEdge",
                        plural: !0,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "node",
                            storageKey: null,
                            args: null,
                            concreteType: "Video",
                            plural: !1,
                            selections: [i, {
                                kind: "ScalarField",
                                alias: null,
                                name: "createdAt",
                                args: null,
                                storageKey: null
                            }]
                        }]
                    }];
                return {
                    kind: "Fragment",
                    name: "ChannelProfileVideos_user",
                    type: "User",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [{
                        kind: "FragmentSpread",
                        name: "FeaturedContentCard_user",
                        args: null
                    }, e, {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    }, t, {
                        kind: "LinkedField",
                        alias: null,
                        name: "hosting",
                        storageKey: null,
                        args: null,
                        concreteType: "User",
                        plural: !1,
                        selections: [e, t]
                    }, {
                        kind: "LinkedField",
                        alias: "recentHighlights",
                        name: "videos",
                        storageKey: 'videos(first:6,sort:"TIME",type:"HIGHLIGHT")',
                        args: [n, a, {
                            kind: "Literal",
                            name: "type",
                            value: "HIGHLIGHT",
                            type: "BroadcastType"
                        }],
                        concreteType: "VideoConnection",
                        plural: !1,
                        selections: r
                    }, {
                        kind: "LinkedField",
                        alias: "archives",
                        name: "videos",
                        storageKey: 'videos(first:7,sort:"TIME",type:"ARCHIVE")',
                        args: [{
                            kind: "Literal",
                            name: "first",
                            value: 7,
                            type: "Int"
                        }, a, {
                            kind: "Literal",
                            name: "type",
                            value: "ARCHIVE",
                            type: "BroadcastType"
                        }],
                        concreteType: "VideoConnection",
                        plural: !1,
                        selections: r
                    }, {
                        kind: "LinkedField",
                        alias: "topClips",
                        name: "clips",
                        storageKey: 'clips(criteria:{"period":"LAST_WEEK","sort":"VIEWS_DESC"},first:6)',
                        args: [{
                            kind: "Literal",
                            name: "criteria",
                            value: {
                                period: "LAST_WEEK",
                                sort: "VIEWS_DESC"
                            },
                            type: "UserClipsInput"
                        }, n],
                        concreteType: "ClipConnection",
                        plural: !1,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "edges",
                            storageKey: null,
                            args: null,
                            concreteType: "ClipEdge",
                            plural: !0,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "node",
                                storageKey: null,
                                args: null,
                                concreteType: "Clip",
                                plural: !1,
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: "ClipRowItem_clip",
                                    args: null
                                }]
                            }]
                        }]
                    }, {
                        kind: "LinkedField",
                        alias: "recentPremieres",
                        name: "videos",
                        storageKey: 'videos(first:6,sort:"TIME",type:"PAST_PREMIERE")',
                        args: [n, a, {
                            kind: "Literal",
                            name: "type",
                            value: "PAST_PREMIERE",
                            type: "BroadcastType"
                        }],
                        concreteType: "VideoConnection",
                        plural: !1,
                        selections: l
                    }, {
                        kind: "LinkedField",
                        alias: "recentUploads",
                        name: "videos",
                        storageKey: 'videos(first:6,sort:"TIME",type:"UPLOAD")',
                        args: [n, a, {
                            kind: "Literal",
                            name: "type",
                            value: "UPLOAD",
                            type: "BroadcastType"
                        }],
                        concreteType: "VideoConnection",
                        plural: !1,
                        selections: l
                    }]
                }
            }();
            a.hash = "3e1fe6d5ac1392f076a081cd5733478d", t.default = a
        },
        mBIT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var a = n("uFB0"),
                i = n.n(a),
                r = n("ERkP"),
                l = n("LaCE"),
                o = n("ERpE"),
                s = n("shpO"),
                d = n("7vUx"),
                u = function(e) {
                    var t;
                    e.icon && (t = r.createElement(s.a, {
                        asset: e.icon
                    }));
                    var n = r.createElement("div", i()({
                        className: Object(l.a)({
                            "tw-stat": !0
                        })
                    }, Object(o.a)(e)), r.createElement("span", {
                        className: "tw-stat__icon"
                    }, t), r.createElement("span", {
                        className: "tw-stat__value",
                        "data-a-target": "tw-stat-value"
                    }, e.value));
                    return e.label ? r.createElement(d.a, {
                        direction: e.tooltipDirection ? e.tooltipDirection : d.c.Bottom,
                        align: e.tooltipAlign ? e.tooltipAlign : d.b.Center,
                        label: e.label
                    }, n) : n
                };
            u.displayName = "Stat"
        },
        nHjI: function(e, t, n) {
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
                    name: "ClipRowItem_clip",
                    type: "Clip",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [e, {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "thumbnailURL",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "viewCount",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "durationSeconds",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "createdAt",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "url",
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
                    }]
                }
            }();
            a.hash = "255e36646abac48fcc79f3c6669b43e7", t.default = a
        },
        nZ6Q: function(e, t, n) {
            "use strict";

            function a(e) {
                return i(e).nodes
            }

            function i(e) {
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
                return i
            })
        },
        omMt: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("LcAa"),
                i = n.n(a),
                r = n("emby"),
                l = n.n(r),
                o = n("sXAp"),
                s = n.n(o),
                d = n("FIas"),
                u = n.n(d),
                c = n("8k7s"),
                p = n.n(c),
                m = n("TPw6"),
                g = n.n(m),
                f = n("z0N8"),
                h = n.n(f),
                y = n("k9sC"),
                w = n.n(y),
                v = n("yP/C"),
                k = n("h7sq"),
                b = n("tS02"),
                C = n("/XES"),
                S = n("ztBH"),
                F = n("amHM"),
                L = n("Fayl"),
                E = n("znL5"),
                T = n("knAH"),
                I = n("KmwA"),
                x = n("jllS"),
                O = n("pneb"),
                _ = n("vTWr"),
                j = n("yFcC"),
                V = n.n(j),
                R = n("9j/M"),
                K = n("9Evb"),
                N = n("8egr"),
                P = n("ERkP"),
                A = n.n(P),
                H = n("pnpS"),
                U = n("B8T3"),
                B = n("c67T"),
                M = A.a.createElement,
                D = function(e) {
                    function t() {
                        return Object(k.a)(this, t), Object(C.a)(this, Object(S.a)(t).apply(this, arguments))
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.clip;
                            return M(U.a, {
                                linkTo: e.url,
                                interactionContent: this.props.interactionContent,
                                hoverUnderlineNone: !0,
                                interactionTargetPath: "/clips/".concat(e.url.split("/").slice(-1)[0])
                            }, M(N.a, {
                                title: e.title,
                                imageURL: e.thumbnailURL,
                                viewCount: e.viewCount,
                                formattedLength: e.durationSeconds ? Object(B.a)(e.durationSeconds) : null,
                                gameName: e.game && e.game.name,
                                createdAt: new Date(e.createdAt)
                            }))
                        }
                    }]), t
                }(A.a.Component),
                z = Object(H.createFragmentContainer)(D, {
                    clip: function() {
                        return n("nHjI")
                    }
                }),
                W = n("NM2R"),
                G = n("HIP8"),
                q = n("Vp5C"),
                J = n("/SwW"),
                Q = n("vCzr"),
                X = n("V9ax"),
                Y = n("5vmN"),
                Z = n("cQFw"),
                $ = n("iJNm"),
                ee = n("Q0He"),
                te = n("wRUM"),
                ne = n("L9xg"),
                ae = n("wtJr"),
                ie = n("zkRB"),
                re = n("1nou"),
                le = n("5ps1"),
                oe = n("bfSB"),
                se = n("n/zO"),
                de = n("xtg3"),
                ue = n("jPHO"),
                ce = A.a.createElement,
                pe = function(e) {
                    function t(e) {
                        var n;
                        return Object(k.a)(this, t), n = Object(C.a)(this, Object(S.a)(t).call(this, e)), Object(E.a)(Object(_.a)(n), "toggleDescription", function(e) {
                            e && e.currentTarget && e.currentTarget.blur(), n.setState(function(e) {
                                return {
                                    expanded: !e.expanded
                                }
                            })
                        }), n.state = {
                            expanded: !1,
                            featuredVOD: t.getFeaturedVOD(n.props.user)
                        }, n
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !!this.props.username
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return ce(q.a, {
                                value: "channel_info"
                            }, this.content, ce(V.a, {
                                id: "3650333513"
                            }, [".mw-channel-info-card{min-height:110px;}", ".mw-channel-info-card .mw-channel-info-card__banner-wrapper{background-color:#000000;height:60px;}", ".mw-channel-info-card .mw-channel-info-card__body .mw-channel-info-card__avatar{border-radius:50%;margin-top:-30px;overflow:hidden;}", ".mw-channel-info-card .mw-channel-info-card__body .mw-channel-info-card__counts{min-height:2rem;}"]))
                        }
                    }, {
                        key: "content",
                        get: function() {
                            var e = this.props.user.profileImageURL,
                                t = this.props.intl.formatMessage;
                            return ce(X.a, {
                                className: "mw-channel-info-card",
                                background: Y.a.Base,
                                borderBottom: !0
                            }, ce("section", null, this.channelBanner, ce(Z.a, {
                                className: "mw-channel-info-card__body",
                                alignItems: $.b.Center,
                                display: $.d.Flex,
                                flexWrap: $.f.NoWrap,
                                justifyContent: $.h.Between,
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, e && ce(ee.a, {
                                background: Y.a.Base,
                                border: !0,
                                className: "mw-channel-info-card__avatar",
                                elevation: 1,
                                padding: .5
                            }, ce(te.a, {
                                isLatencyCritical: !0,
                                alt: t("Avatar for {channelDisplayName}", {
                                    channelDisplayName: this.props.username
                                }, "ChannelInfoCard"),
                                latencyName: "ChannelInfoCardAvatar",
                                size: 50,
                                src: e
                            })), ce(Z.a, {
                                flexGrow: 2,
                                padding: {
                                    x: .5
                                }
                            }, this.channelName, ce(Z.a, {
                                className: "mw-channel-info-card__counts",
                                display: $.d.Flex,
                                alignItems: $.b.Center,
                                justifyContent: $.h.Start
                            }, this.viewerAndFollowerCounts)), ce(R.a, {
                                hasCriticalChildren: !0
                            }, this.expandContentButton)), this.expandedContent))
                        }
                    }, {
                        key: "channelBanner",
                        get: function() {
                            var e = this.props.intl.formatMessage,
                                t = null;
                            return this.props.user.bannerImageURL && (t = ce(ne.a, Object(O.a)({
                                className: "mw-channel-info-card__banner",
                                alt: e("Profile banner for {channelDisplayName}", {
                                    channelDisplayName: this.props.username
                                }, "ChannelInfoCard"),
                                sizes: [{
                                    size: "100vw"
                                }]
                            }, Object(ae.e)(this.props.user.bannerImageURL)))), ce(Z.a, {
                                className: "mw-channel-info-card__banner-wrapper",
                                overflow: $.i.Hidden,
                                display: $.d.Flex,
                                alignItems: $.b.Center,
                                justifyContent: $.h.Center
                            }, t)
                        }
                    }, {
                        key: "channelName",
                        get: function() {
                            var e = this.props.user,
                                t = ce(ie.a, {
                                    type: re.e.H4,
                                    bold: !0,
                                    ellipsis: !0
                                }, e.displayName || e.login),
                                n = Object(K.b)(e.stream && e.stream.type, !!e.hosting && !!e.hosting.id);
                            return n ? ce(U.a, {
                                linkTo: G.a.Channel,
                                params: {
                                    channel: this.props.username
                                },
                                interactionContent: "live_channel_link"
                            }, ce(Z.a, {
                                display: $.d.Flex,
                                flexWrap: $.f.NoWrap,
                                justifyContent: $.h.Start,
                                alignItems: $.b.Center
                            }, t, ce(Z.a, {
                                margin: {
                                    left: .5
                                }
                            }, ce(K.a, {
                                indicatorType: n,
                                isOverlay: !1,
                                isPulsing: !0
                            })))) : t
                        }
                    }, {
                        key: "viewerAndFollowerCounts",
                        get: function() {
                            var e = this.props.user,
                                t = this.props.intl,
                                n = t.formatMessage,
                                a = t.formatNumberShort;
                            return !!e.followers && !!e.followers.totalCount && !!e.profileViewCount && ce(A.a.Fragment, null, ce(le.a, {
                                key: "followers",
                                icon: oe.a.GlyphFollowers,
                                label: n("Followers", "ChannelInfoCard"),
                                value: a(e.followers.totalCount, {
                                    maximumSignificantDigits: 3
                                })
                            }), ce(ie.a, {
                                key: "bullet",
                                type: re.e.P,
                                bold: !0
                            }, "\xa0\xa0\u2022\xa0\xa0"), ce(le.a, {
                                key: "views",
                                icon: oe.a.GlyphViews,
                                label: n("Views", "ChannelInfoCard"),
                                value: a(e.profileViewCount, {
                                    maximumSignificantDigits: 3
                                })
                            }))
                        }
                    }, {
                        key: "expandContentButton",
                        get: function() {
                            var e = this.props.intl.formatMessage;
                            return this.state.featuredVOD ? ce(se.a, {
                                ariaLabel: e("Toggle channel description", "ChannelInfoCard"),
                                icon: this.state.expanded ? oe.a.Close : oe.a.Plus,
                                interactionContent: "expand",
                                onClick: this.toggleDescription,
                                isLatencyCritical: !0,
                                latencyName: "ChannelInfoCardExpandToggle",
                                type: de.c.Secondary
                            }) : null
                        }
                    }, {
                        key: "expandedContent",
                        get: function() {
                            return this.state.expanded ? ce(Z.a, {
                                className: "mw-channel-info-card__details"
                            }, !!this.props.user.description && ce(ue.a, {
                                padding: {
                                    top: .5,
                                    x: 1
                                }
                            }, ce(ie.a, null, this.props.user.description)), this.expandedContentVideo) : null
                        }
                    }, {
                        key: "expandedContentVideo",
                        get: function() {
                            var e = this.state.featuredVOD;
                            if (!e) return !1;
                            var t, n, a = this.props.intl.formatMessage;
                            return "video" === e.type ? (n = ce(W.a, {
                                video: e.ref,
                                interactionContent: "most_popular_video"
                            }), t = a("Most Popular Highlight", "ChannelInfoCard")) : (n = ce(z, {
                                clip: e.ref,
                                interactionContent: "most_popular_video"
                            }), t = a("Most Popular Clip", "ChannelInfoCard")), ce(A.a.Fragment, null, ce(ue.a, {
                                padding: {
                                    top: 1,
                                    x: 1
                                },
                                key: "video-header"
                            }, ce(ie.a, {
                                type: re.e.P,
                                bold: !0
                            }, t)), n)
                        }
                    }], [{
                        key: "getFeaturedVOD",
                        value: function(e) {
                            var t = e.clips,
                                n = e.videos,
                                a = n && n.edges && n.edges[0];
                            if (a && a.node) return {
                                ref: a.node,
                                type: "video"
                            };
                            var i = t && t.edges && t.edges[0];
                            return i && i.node ? {
                                ref: i.node,
                                type: "clip"
                            } : null
                        }
                    }, {
                        key: "getDerivedStateFromProps",
                        value: function(e) {
                            return {
                                featuredVOD: t.getFeaturedVOD(e.user)
                            }
                        }
                    }]), t
                }(A.a.PureComponent);
            Object(E.a)(pe, "displayName", "ChannelInfoCard");
            var me = Object(H.createFragmentContainer)(Object(J.a)(Object(Q.a)(pe)), {
                    user: function() {
                        return n("is3J")
                    }
                }),
                ge = n("q5o0"),
                fe = n.n(ge),
                he = n("Ho9t"),
                ye = n("EIzr"),
                we = n("yFcC").default,
                ve = n("IPxZ").default,
                ke = n("8m3w").default;

            function be() {
                return P.createElement(P.Fragment, null, P.createElement(we, {
                    id: "tw-animation"
                }, ve), P.createElement(we, {
                    id: "tw-inject-layout"
                }, ke))
            }
            var Ce = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return fe()(t, e), t.prototype.render = function() {
                    return P.createElement(P.Fragment, null, P.createElement(he.a, this.props), P.createElement(be, null))
                }, t
            }(ye.a);
            Ce.displayName = "Animation";
            var Se = n("sU26"),
                Fe = n("yFcC").default,
                Le = n("zkr3").default,
                Ee = n("a7ab").default,
                Te = n("8m3w").default,
                Ie = n("mEQy").default,
                xe = n("Jnmh").default,
                Oe = n("e7Sc").default;

            function _e() {
                return P.createElement(P.Fragment, null, P.createElement(Fe, {
                    id: "tw-aspect"
                }, Le), P.createElement(Fe, {
                    id: "tw-icon"
                }, Ee), P.createElement(Fe, {
                    id: "tw-inject-layout"
                }, Te), P.createElement(Fe, {
                    id: "tw-inject-styled-layout"
                }, Ie), P.createElement(Fe, {
                    id: "tw-interactable"
                }, xe), P.createElement(Fe, {
                    id: "tw-toast"
                }, Oe))
            }
            var je = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return fe()(t, e), t.prototype.render = function() {
                    return P.createElement(P.Fragment, null, P.createElement(Se.a, this.props), P.createElement(_e, null))
                }, t
            }(ye.a);
            je.displayName = "Toast";
            var Ve, Re = A.a.createElement,
                Ke = function(e) {
                    function t() {
                        var e, n;
                        Object(k.a)(this, t);
                        for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r];
                        return n = Object(C.a)(this, (e = Object(S.a)(t)).call.apply(e, [this].concat(i))), Object(E.a)(Object(_.a)(n), "state", {
                            enabled: !1,
                            readyForFirstRender: !1
                        }), Object(E.a)(Object(_.a)(n), "showTimerHandle", void 0), Object(E.a)(Object(_.a)(n), "hideTimerHandle", void 0), Object(E.a)(Object(_.a)(n), "clickClose", function(e) {
                            e && e.currentTarget && e.currentTarget.blur(), n.props.onClickClose && n.props.onClickClose(e), n.setState(function() {
                                return {
                                    enabled: !1
                                }
                            }), n.clearTimers()
                        }), n
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.showTimerHandle = window.setTimeout(function() {
                                e.showToastAndStartHideTimer()
                            }, 1e3 * (this.props.secondsDelayUntilVisible || 0))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.clearTimers()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.readyForFirstRender && Re(Z.a, {
                                alignItems: $.b.Center,
                                zIndex: $.o.Default,
                                position: $.j.Absolute,
                                fullWidth: !0
                            }, Re(Ce, {
                                type: this.animationType,
                                duration: this.state.enabled ? he.c.Long : he.c.Medium,
                                timing: he.e.EaseIn,
                                delay: this.state.enabled ? he.b.Long : he.b.Short,
                                enabled: !0
                            }, Re(Z.a, {
                                fullWidth: !0,
                                flexGrow: 1,
                                display: $.d.Flex
                            }, Re(je, {
                                onClose: this.clickClose
                            }, this.props.children))))
                        }
                    }, {
                        key: "showToastAndStartHideTimer",
                        value: function() {
                            var e = this;
                            this.setState(function() {
                                return {
                                    enabled: !0,
                                    readyForFirstRender: !0
                                }
                            }), this.hideTimerHandle = window.setTimeout(function() {
                                e.setState(function() {
                                    return {
                                        enabled: !1
                                    }
                                })
                            }, 1e3 * this.props.secondsVisible)
                        }
                    }, {
                        key: "clearTimers",
                        value: function() {
                            this.showTimerHandle && clearTimeout(this.showTimerHandle), this.hideTimerHandle && clearTimeout(this.hideTimerHandle)
                        }
                    }, {
                        key: "animationType",
                        get: function() {
                            return this.state.enabled ? he.f.SlideInTop : he.f.SlideOutTop
                        }
                    }]), t
                }(A.a.PureComponent),
                Ne = n("753B"),
                Pe = A.a.createElement,
                Ae = function(e) {
                    function t() {
                        return Object(k.a)(this, t), Object(C.a)(this, Object(S.a)(t).apply(this, arguments))
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            if (!this.props.routerUtils.queryParams["desktop-redirect"] || "offline_channel" !== this.props.routerUtils.queryParams["desktop-redirect"]) return null;
                            var e = this.props.intl.formatMessage;
                            return Pe(Ke, {
                                secondsVisible: 20
                            }, Pe(Z.a, {
                                display: $.d.Flex,
                                alignItems: $.b.Center,
                                padding: 1,
                                fullHeight: !0
                            }, Pe(ie.a, {
                                bold: !0
                            }, e("You missed {channel}'s show, catch up below!", {
                                channel: this.props.displayName
                            }, "ChannelOfflineToast"))))
                        }
                    }]), t
                }(A.a.PureComponent),
                He = Object(J.a)(Object(Ne.e)(Ae)),
                Ue = n("Bq/2"),
                Be = n("5kHu"),
                Me = A.a.createElement;
            ! function(e) {
                e.Clip = "Clip", e.Vod = "Vod"
            }(Ve || (Ve = {}));
            var De, ze = function(e) {
                    function t() {
                        var e, n;
                        Object(k.a)(this, t);
                        for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r];
                        return n = Object(C.a)(this, (e = Object(S.a)(t)).call.apply(e, [this].concat(i))), Object(E.a)(Object(_.a)(n), "state", {
                            expanded: !1
                        }), Object(E.a)(Object(_.a)(n), "expand", function(e) {
                            e && e.currentTarget && e.currentTarget.blur(), n.setState(function() {
                                return {
                                    expanded: !0
                                }
                            })
                        }), n
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            return Me(Z.a, {
                                className: "mw-channel-profile-video-list",
                                padding: {
                                    bottom: this.isExpandable ? 0 : 3
                                },
                                fullWidth: !0
                            }, Me(Z.a, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Me(ie.a, {
                                fontSize: Y.d.Size5
                            }, this.props.headerText)), this.items, this.isExpandable && this.showMore)
                        }
                    }, {
                        key: "items",
                        get: function() {
                            var e = this.state.expanded ? this.props.list.items.length : 3;
                            return this.props.list.type === Ve.Clip ? this.props.list.items.slice(0, e).map(function(e, t) {
                                return Me(ee.a, {
                                    borderBottom: !0,
                                    borderTop: !t,
                                    key: t
                                }, Me(z, {
                                    clip: e,
                                    interactionContent: "position_".concat(t)
                                }))
                            }) : this.props.list.items.slice(0, e).map(function(e, t) {
                                return Me(ee.a, {
                                    borderBottom: !0,
                                    borderTop: !t,
                                    key: t
                                }, Me(W.a, {
                                    video: e,
                                    interactionContent: "position_".concat(t)
                                }))
                            })
                        }
                    }, {
                        key: "showMore",
                        get: function() {
                            var e = this.props.intl.formatMessage;
                            return Me(Z.a, {
                                className: "mw_channel_profile_video_list__show_more",
                                display: $.d.Flex,
                                alignItems: $.b.Center,
                                justifyContent: $.h.Center,
                                margin: {
                                    top: 1
                                }
                            }, Me(R.a, null, Me(Ue.a, {
                                type: Be.d.Text,
                                interactionContent: "show_more",
                                onClick: this.expand,
                                dropdown: !0
                            }, Me(ie.a, {
                                fontSize: Y.d.Size5
                            }, e("Show More", "ChannelProfileContentList")))), Me(V.a, {
                                id: "3990117420"
                            }, [".mw_channel_profile_video_list__show_more{min-height:31px;}"]))
                        }
                    }, {
                        key: "isExpandable",
                        get: function() {
                            return !this.state.expanded && this.props.list.items.length > 3
                        }
                    }]), t
                }(A.a.Component),
                We = Object(J.a)(ze),
                Ge = n("k3nD"),
                qe = n("vlJ8"),
                Je = n("S2yq"),
                Qe = A.a.createElement;
            ! function(e) {
                e.Live = "Live", e.Hosting = "Hosting", e.Vod = "Vod"
            }(De || (De = {}));
            var Xe = function(e) {
                    function t() {
                        return Object(k.a)(this, t), Object(C.a)(this, Object(S.a)(t).apply(this, arguments))
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            var e;
                            return this.props.featured.type === De.Hosting && this.props.featured.profileImageURL && (e = Qe(Z.a, {
                                margin: {
                                    right: 1
                                }
                            }, Qe(te.a, {
                                src: this.props.featured.profileImageURL,
                                size: 30,
                                alt: this.props.featured.displayName || ""
                            }))), Qe(q.a, {
                                value: "featured_content"
                            }, Qe(Z.a, {
                                className: "mw-featured-content-card",
                                margin: 1
                            }, Qe(ee.a, {
                                background: Y.a.Alt,
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Qe(ie.a, {
                                type: re.e.H5
                            }, this.featuredContentCardTitle)), Qe(Z.a, {
                                className: "mw-featured-content-card__image"
                            }, Qe(U.a, Object(O.a)({}, this.linkToProps, {
                                interactionContent: "thumbnail"
                            }), Qe(Z.a, null, Qe(Ge.a, Object(O.a)({}, Object(ae.f)(this.props.featured.previewThumbnailURL), {
                                alt: "Featured content preview image",
                                aspect: qe.c.Aspect16x9,
                                key: this.props.featured.previewThumbnailURL || "",
                                sizes: [{
                                    size: "calc(100vw - 2rem)"
                                }],
                                isLatencyCritical: !0,
                                latencyName: "FeaturedContentCardImage"
                            })), Qe(Je.a, {
                                asset: oe.a.Play,
                                width: 40,
                                height: 44
                            }), Qe(Z.a, {
                                className: "mw-featured-content-card__views"
                            }, this.viewsStat), this.formattedLengthLayout))), Qe(Z.a, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                className: "mw-featured-content-card__details",
                                display: $.d.Flex,
                                flexShrink: 0,
                                flexDirection: $.e.Row,
                                alignItems: $.b.Center
                            }, e, Qe(Z.a, {
                                flexDirection: $.e.Column,
                                ellipsis: !0
                            }, this.props.featured.title && Qe(U.a, Object(O.a)({}, this.linkToProps, {
                                interactionContent: "title",
                                hoverUnderlineNone: !0
                            }), Qe(ie.a, {
                                type: re.e.H5,
                                ellipsis: !0,
                                color: Y.c.Overlay
                            }, this.props.featured.title)), this.props.featured.game && Qe(ie.a, {
                                ellipsis: !0,
                                color: Y.c.OverlayAlt
                            }, this.props.featured.game)))), Qe(V.a, {
                                id: "182992197"
                            }, [".mw-featured-content-card__image{position:relative;}", ".mw-featured-content-card__image .tw-svg{color:#fcfaff;position:absolute;top:50%;right:50%;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);}", ".mw-featured-content-card__image span{color:#fcfaff;text-shadow:2px 2px 5px #15052e;}", ".mw-featured-content-card__image .mw-featured-content-card__views{position:absolute;left:10px;bottom:0px;}", ".mw-featured-content-card__image .mw-featured-content-card__views .tw-svg{position:static;-webkit-transform:none;-ms-transform:none;transform:none;}", ".mw-featured-content-card__image .mw-featured-content-card__time{position:absolute;right:10px;bottom:0px;}", ".mw-featured-content-card__image .mw-featured-content-card__time .tw-svg{position:static;-webkit-transform:none;-ms-transform:none;transform:none;}", ".mw-featured-content-card__details{background:#15052e;}"]))
                        }
                    }, {
                        key: "linkToProps",
                        get: function() {
                            switch (this.props.featured.type) {
                                case De.Live:
                                case De.Hosting:
                                    return {
                                        linkTo: G.a.Channel,
                                        params: {
                                            channel: this.props.featured.channel
                                        }
                                    };
                                case De.Vod:
                                    return {
                                        linkTo: G.a.Vod,
                                        params: {
                                            id: this.props.featured.vodId
                                        }
                                    }
                            }
                        }
                    }, {
                        key: "featuredContentCardTitle",
                        get: function() {
                            var e = this.props.intl.formatMessage;
                            switch (this.props.featured.type) {
                                case De.Live:
                                    return e("Now Streaming", "FeaturedContentCardCommon");
                                case De.Hosting:
                                    return e("Now Hosting {channel}", {
                                        channel: this.props.featured.displayName || this.props.featured.channel
                                    }, "FeaturedContentCardCommon");
                                case De.Vod:
                                    return e("Most Recent Broadcast", "FeaturedContentCardCommon")
                            }
                        }
                    }, {
                        key: "formattedLengthLayout",
                        get: function() {
                            if (this.props.featured.type === De.Vod && this.props.featured.duration) {
                                var e = this.props.intl.formatMessage;
                                return Qe(Z.a, {
                                    className: "mw-featured-content-card__time"
                                }, Qe(le.a, {
                                    icon: oe.a.GlyphLength,
                                    label: e("Video Length", "FeaturedContentCardCommon"),
                                    value: Object(B.a)(this.props.featured.duration)
                                }))
                            }
                        }
                    }, {
                        key: "viewsStat",
                        get: function() {
                            var e = this.props.intl,
                                t = e.formatMessage,
                                n = e.formatNumberShort;
                            return this.props.featured.type === De.Vod ? Qe(le.a, {
                                icon: oe.a.GlyphViews,
                                label: t("Views", "FeaturedContentCardCommon"),
                                value: n(this.props.featured.views || 0, {
                                    maximumSignificantDigits: 3
                                })
                            }) : Qe(le.a, {
                                icon: oe.a.GlyphViews,
                                label: t("Viewers", "FeaturedContentCardCommon"),
                                value: n(this.props.featured.views || 0, {
                                    maximumSignificantDigits: 3
                                })
                            })
                        }
                    }]), t
                }(A.a.Component),
                Ye = Object(J.a)(Xe),
                Ze = n("7vVX"),
                $e = A.a.createElement,
                et = function(e) {
                    function t() {
                        return Object(k.a)(this, t), Object(C.a)(this, Object(S.a)(t).apply(this, arguments))
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = null,
                                t = this.props.user,
                                n = t.hosting,
                                a = t.recentArchive && t.recentArchive.edges && t.recentArchive.edges[0];
                            return n && n.stream && n.login ? e = {
                                channel: n.login,
                                displayName: n.displayName,
                                game: n.stream.game && n.stream.game.name,
                                previewThumbnailURL: n.stream.previewImageURL,
                                profileImageURL: n.profileImageURL,
                                title: n.stream.title,
                                type: De.Hosting,
                                views: n.stream.viewersCount
                            } : t && t.stream && t.stream.id && !Object(Ze.g)(t.stream.id) && t.login ? e = {
                                channel: t.login,
                                game: t.stream.game && t.stream.game.name,
                                previewThumbnailURL: t.stream.previewImageURL,
                                title: t.stream.title,
                                type: De.Live,
                                views: t.stream.viewersCount
                            } : a && a.node && (e = {
                                duration: a.node.lengthSeconds,
                                game: a.node.game && a.node.game.name,
                                previewThumbnailURL: a.node.previewThumbnailURL,
                                title: a.node.title,
                                type: De.Vod,
                                views: a.node.viewCount,
                                vodId: a.node.id
                            }), e && $e(Ye, {
                                featured: e
                            })
                        }
                    }]), t
                }(A.a.Component);
            Object(E.a)(et, "displayName", "FeaturedContentCard");
            var tt = Object(H.createFragmentContainer)(Object(Q.a)(et), {
                    user: function() {
                        return n("6QUu")
                    }
                }),
                nt = n("CmdM"),
                at = A.a.createElement,
                it = function(e) {
                    function t() {
                        return Object(k.a)(this, t), Object(C.a)(this, Object(S.a)(t).apply(this, arguments))
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return at(q.a, {
                                value: "empty_state"
                            }, at(ue.a, {
                                display: $.d.Flex,
                                flexDirection: $.e.Column,
                                alignItems: $.b.Center,
                                padding: 2
                            }, at("section", null, at(Je.a, {
                                asset: oe.a.NavChannels,
                                height: 40,
                                width: 40,
                                type: nt.b.Alt2
                            }), at(ue.a, {
                                margin: {
                                    y: 1
                                }
                            }, at(ie.a, {
                                fontSize: Y.d.Size4,
                                color: Y.c.Alt2,
                                bold: !0
                            }, e("This channel has no videos", "ProfileEmptyState"))), at(ie.a, {
                                color: Y.c.Alt2
                            }, e("It's Quiet... too quiet", "ProfileEmptyState")), at(ee.a, {
                                background: Y.a.Accent,
                                margin: {
                                    top: 1
                                }
                            }, at(Ue.a, {
                                linkTo: G.a.GamesDirectory,
                                interactionContent: "browse_twitch"
                            }, e("Browse Twitch", "ProfileEmptyState"))))))
                        }
                    }]), t
                }(A.a.PureComponent);
            Object(E.a)(it, "displayName", "ProfileEmptyState");
            var rt, lt = Object(J.a)(Object(Q.a)(it)),
                ot = n("nZ6Q"),
                st = A.a.createElement,
                dt = function(e) {
                    function t() {
                        return Object(k.a)(this, t), Object(C.a)(this, Object(S.a)(t).apply(this, arguments))
                    }
                    return Object(L.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            if (!this.isHosting && !this.archives.length && !this.clips.length && !this.highlights.length && !this.premieresAndUploads.length) return st(lt, null);
                            var t = this.props.user.displayName || this.props.username;
                            return st("section", null, st(tt, {
                                user: this.props.user
                            }), this.archives.length > 0 && st(We, {
                                headerText: e("{name}'s Past Broadcasts", {
                                    name: t
                                }, "ChannelProfileVideos"),
                                list: {
                                    items: this.archives,
                                    type: Ve.Vod
                                }
                            }), this.clips.length > 0 && st(We, {
                                headerText: e("{name}'s Top Clips", {
                                    name: t
                                }, "ChannelProfileVideos"),
                                list: {
                                    items: this.clips,
                                    type: Ve.Clip
                                }
                            }), this.highlights.length > 0 && st(We, {
                                headerText: e("{name}'s Recent Highlights", {
                                    name: t
                                }, "ChannelProfileVideos"),
                                list: {
                                    items: this.highlights,
                                    type: Ve.Vod
                                }
                            }), this.premieresAndUploads.length > 0 && st(We, {
                                headerText: e("{name}'s Recent Videos", {
                                    name: t
                                }, "ChannelProfileVideos"),
                                list: {
                                    items: this.premieresAndUploads,
                                    type: Ve.Vod
                                }
                            }))
                        }
                    }, {
                        key: "highlights",
                        get: function() {
                            var e = this.props.user.recentHighlights && this.props.user.recentHighlights.edges || [];
                            return Object(ot.a)(e)
                        }
                    }, {
                        key: "isHosting",
                        get: function() {
                            var e = this.props.user.hosting;
                            return null !== (e && e.stream && e.login)
                        }
                    }, {
                        key: "archives",
                        get: function() {
                            var e = Object(ot.a)(this.props.user.archives && this.props.user.archives.edges || []);
                            return this.isHosting ? e.slice(0, 6) : e.slice(1, 7)
                        }
                    }, {
                        key: "clips",
                        get: function() {
                            var e = this.props.user.topClips && this.props.user.topClips.edges || [];
                            return Object(ot.a)(e)
                        }
                    }, {
                        key: "premieresAndUploads",
                        get: function() {
                            var e = this.props.user.recentPremieres && this.props.user.recentPremieres.edges || [],
                                t = this.props.user.recentUploads && this.props.user.recentUploads.edges || [];
                            return Object(ot.a)(e.concat(t)).sort(function(e, t) {
                                return e.createdAt ? t.createdAt ? new Date(t.createdAt).valueOf() - new Date(e.createdAt).valueOf() : -1 : t.createdAt ? 1 : 0
                            }).slice(0, 6)
                        }
                    }]), t
                }(A.a.Component),
                ut = Object(H.createFragmentContainer)(Object(J.a)(dt), {
                    user: function() {
                        return n("lIBa")
                    }
                }),
                ct = n("8Wlz"),
                pt = n("am3Y"),
                mt = n("d6po"),
                gt = A.a.createElement;

            function ft(e, t) {
                var n = g()(e);
                if (p.a) {
                    var a = p()(e);
                    t && (a = a.filter(function(t) {
                        return u()(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function ht(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ft(n, !0).forEach(function(t) {
                        Object(E.a)(e, t, n[t])
                    }) : s.a ? l()(e, s()(n)) : ft(n).forEach(function(t) {
                        i()(e, t, u()(n, t))
                    })
                }
                return e
            }
            var yt = function(e) {
                function t() {
                    return Object(k.a)(this, t), Object(C.a)(this, Object(S.a)(t).apply(this, arguments))
                }
                return Object(L.a)(t, e), Object(b.a)(t, [{
                    key: "pageSpecificPageviewData",
                    value: function() {
                        return {
                            channel: this.props.user && this.props.user.login || void 0,
                            channelID: this.props.user && Object(Ze.f)(this.props.user.id) || void 0
                        }
                    }
                }, {
                    key: "pageHeadData",
                    value: function() {
                        var e, t = this.props.queryVariables.login;
                        this.props.user && this.props.user.login && (t = this.props.user.login, e = {
                            displayName: this.props.user.displayName || void 0,
                            gameName: this.props.user.lastBroadcast && this.props.user.lastBroadcast.game && this.props.user.lastBroadcast.game.name || void 0
                        });
                        return {
                            data: {
                                channel: e,
                                login: t,
                                route: G.a.ChannelProfile
                            }
                        }
                    }
                }, {
                    key: "content",
                    value: function() {
                        var e = this.props.user;
                        if (!e) return gt(pt.a, null);
                        var t = e.displayName || this.props.queryVariables.login;
                        return gt(A.a.Fragment, null, gt(I.b, {
                            currentChannel: this.channelDetails,
                            fixed: !0
                        }), gt("main", null, gt(He, {
                            displayName: t
                        }), gt(me, {
                            user: e,
                            username: this.props.queryVariables.login
                        }), gt(ut, {
                            user: e,
                            featuredContent: e,
                            username: this.props.queryVariables.login
                        }), gt(ct.a, {
                            journey: {
                                channel: t,
                                delaySecondsUntilUpsell: 30,
                                type: T.b.Profile
                            }
                        })))
                    }
                }, {
                    key: "channelDetails",
                    get: function() {
                        return Object(x.b)(this.props.user)
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var e = Object(v.a)(w.a.mark(function e(n) {
                            var a;
                            return w.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(F.a)(Object(S.a)(t), "getInitialProps", this).call(this, n);
                                    case 2:
                                        return a = e.sent, e.abrupt("return", ht({}, a, {
                                            queryVariables: {
                                                login: n.query.channel.toLowerCase()
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
                }, {
                    key: "isNotFound",
                    value: function(e, t) {
                        return !h()(e).filter(function(e) {
                            return e && e.login && e.login === t.login
                        })[0]
                    }
                }]), t
            }(mt.a);
            Object(E.a)(yt, "displayName", "ChannelProfile"), Object(E.a)(yt, "query", rt || (rt = function() {
                return n("GPry")
            }));
            var wt = Object(Ze.h)(yt);
            n.d(t, "default", function() {
                return wt
            })
        },
        sU26: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            });
            var a = n("ERkP"),
                i = n("LaCE"),
                r = n("shpO"),
                l = n("djjR"),
                o = n("iJNm"),
                s = n("5vmN"),
                d = n("ivAS"),
                u = n("C0xX"),
                c = n("bfSB"),
                p = function(e) {
                    return a.createElement(d.a, {
                        fullWidth: !0
                    }, a.createElement(u.a, {
                        display: o.d.Flex,
                        flexWrap: o.f.NoWrap,
                        className: Object(i.a)({
                            "tw-toast": !0
                        }),
                        elevation: 3,
                        background: s.a.Base,
                        border: !0
                    }, a.createElement(d.a, {
                        flexGrow: 1
                    }, e.children), a.createElement(u.a, {
                        display: o.d.Flex,
                        flexShrink: 0,
                        borderLeft: !0
                    }, a.createElement(l.a, {
                        onClick: e.onClose,
                        ariaLabel: "Dismiss This",
                        tabIndex: e.tabIndex,
                        type: l.b.Alpha,
                        "data-a-target": "tw-toast-close"
                    }, a.createElement(d.a, {
                        padding: 1,
                        display: o.d.Flex,
                        alignItems: o.b.Center,
                        justifyContent: o.h.Center,
                        className: "tw-toast__dismiss-target"
                    }, a.createElement(r.a, {
                        asset: c.a.Close
                    }))))))
                };
            p.displayName = "Toast", p.displayName = "Toast"
        },
        snZo: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-tooltip-wrapper{display:inline-flex;position:relative}.tw-root--hover .tw-tooltip-wrapper:hover .tw-tooltip,.tw-root--touch .tw-tooltip-wrapper:hover .tw-tooltip,.tw-tooltip-wrapper--show .tw-tooltip{display:block}.tw-tooltip{padding:.5rem;border-radius:2px;background:#040109;color:#fff;display:none;position:absolute;left:0;font-size:1.2rem;line-height:1;text-align:left;white-space:nowrap;z-index:2000;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tw-root--theme-dark .tw-tooltip{padding:3px 6px;border-radius:2px;background:#fff;color:#040109}.tw-root--theme-light .tw-tooltip{padding:3px 6px;border-radius:2px;background:#040109;color:#fff}.tw-tooltip::after,.tw-tooltip::before{position:absolute;content:''}.tw-tooltip::before{top:-6px;left:-6px;width:calc(100% + 12px);height:calc(100% + 12px);z-index:-1}.tw-tooltip::after{background:#040109;width:6px;height:6px;transform:rotate(45deg);z-index:-1}.tw-root--theme-dark .tw-tooltip::after{background:#fff}.tw-root--theme-light .tw-tooltip::after{background:#040109}.tw-tooltip--wrap{line-height:1.2;white-space:normal}.tw-tooltip--left{top:0;right:100%;left:auto;margin-right:6px}.tw-tooltip--left::after{border-radius:0 2px 0 0;top:6px;left:100%;margin-left:-3px}.tw-root--theme-dark .tw-tooltip--left::after,.tw-root--theme-light .tw-tooltip--left::after{border-radius:0 2px 0 0}.tw-tooltip--right{top:0;left:100%;margin-left:6px}.tw-tooltip--right::after{border-radius:0 0 0 2px;top:6px;left:0;margin-left:-3px}.tw-root--theme-dark .tw-tooltip--right::after,.tw-root--theme-light .tw-tooltip--right::after{border-radius:0 0 0 2px}.tw-tooltip--left.tw-tooltip--align-center,.tw-tooltip--right.tw-tooltip--align-center{top:50%;transform:translateY(-50%)}.tw-tooltip--left.tw-tooltip--align-center::after,.tw-tooltip--right.tw-tooltip--align-center::after{top:50%;margin-top:-3px}.tw-tooltip--up{top:auto;bottom:100%;left:0;margin-bottom:6px}.tw-tooltip--up::after{border-radius:0 0 2px;top:100%;left:6px;margin-top:-3px}.tw-root--theme-dark .tw-tooltip--up::after,.tw-root--theme-light .tw-tooltip--up::after{border-radius:0 0 2px}.tw-tooltip--down{top:100%;left:0;margin-top:6px}.tw-tooltip--down::after{border-radius:2px 0 0;top:-3px;left:6px}.tw-root--theme-dark .tw-tooltip--down::after,.tw-root--theme-light .tw-tooltip--down::after{border-radius:2px 0 0}.tw-tooltip--down.tw-tooltip--align-center,.tw-tooltip--up.tw-tooltip--align-center{left:50%;transform:translateX(-50%)}.tw-tooltip--down.tw-tooltip--align-center::after,.tw-tooltip--up.tw-tooltip--align-center::after{left:50%;margin-left:-3px}.tw-tooltip--down.tw-tooltip--align-right,.tw-tooltip--up.tw-tooltip--align-right{top:auto;right:0;left:auto}.tw-tooltip--down.tw-tooltip--align-right::after,.tw-tooltip--up.tw-tooltip--align-right::after{top:100%;left:100%;margin-left:-12px}.tw-tooltip--down.tw-tooltip--align-right{top:100%}.tw-tooltip--down.tw-tooltip--align-right::after{top:-3px;left:100%;margin-left:-12px}\n"
        },
        yMDu: function(e, t, n) {
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
                    name: "VideoRowItem_video",
                    type: "Video",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [e, {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "previewThumbnailURL",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "viewCount",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "lengthSeconds",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "createdAt",
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
                    }]
                }
            }();
            a.hash = "2f25c319a53a1686dff374689a501264", t.default = a
        }
    },
    [
        ["Vve8", 1, 0]
    ]
]);