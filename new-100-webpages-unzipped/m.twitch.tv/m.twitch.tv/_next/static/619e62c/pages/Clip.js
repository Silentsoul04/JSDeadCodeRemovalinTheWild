(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [5], {
        NLvr: function(e, a, n) {
            "use strict";
            n.d(a, "a", function() {
                return b
            });
            var t = n("h7sq"),
                l = n("tS02"),
                i = n("/XES"),
                r = n("ztBH"),
                s = n("Fayl"),
                o = n("ERkP"),
                c = n.n(o),
                u = n("HIP8"),
                p = n("/SwW"),
                d = n("wRUM"),
                g = n("B8T3"),
                m = n("zqif"),
                f = c.a.createElement,
                h = function(e) {
                    function a() {
                        return Object(t.a)(this, a), Object(i.a)(this, Object(r.a)(a).apply(this, arguments))
                    }
                    return Object(s.a)(a, e), Object(l.a)(a, [{
                        key: "render",
                        value: function() {
                            return f("div", {
                                className: "info-box--logo-container"
                            }, f(this.SafeLink, {
                                ariaLabel: this.ariaLabel,
                                login: this.props.login
                            }, f(d.a, {
                                isLatencyCritical: !!this.props.latencyName,
                                size: 50,
                                src: this.props.profileImageURL,
                                alt: this.imageAlt,
                                latencyName: this.props.latencyName
                            })))
                        }
                    }, {
                        key: "SafeLink",
                        value: function(e) {
                            var a = e.ariaLabel,
                                n = e.login,
                                t = e.children;
                            return n ? f(g.a, {
                                linkTo: u.a.ChannelProfile,
                                params: {
                                    channel: n
                                },
                                interactionContent: "logo",
                                ariaLabel: a
                            }, t) : f(c.a.Fragment, null, t)
                        }
                    }, {
                        key: "ariaLabel",
                        get: function() {
                            var e = this.props.intl.formatMessage,
                                a = Object(m.a)({
                                    displayName: this.props.displayName,
                                    login: this.props.login
                                });
                            return a ? e("Go to {channel}'s profile", {
                                channel: a
                            }, "InfoBoxAvatar") : e("Go to channel's profile", "InfoBoxAvatar")
                        }
                    }, {
                        key: "imageAlt",
                        get: function() {
                            var e = this.props.intl.formatMessage,
                                a = Object(m.a)({
                                    displayName: this.props.displayName,
                                    login: this.props.login
                                });
                            return a ? e("{channel}'s avatar", {
                                channel: a
                            }, "InfoBoxAvatar") : e("Channel's avatar", "InfoBoxAvatar")
                        }
                    }]), a
                }(c.a.PureComponent),
                b = Object(p.a)(h)
        },
        NZLQ: function(e, a, n) {
            "use strict";
            n.d(a, "a", function() {
                return v
            });
            var t = n("h7sq"),
                l = n("tS02"),
                i = n("/XES"),
                r = n("ztBH"),
                s = n("Fayl"),
                o = n("ERkP"),
                c = n.n(o),
                u = n("/SwW"),
                p = n("QS90"),
                d = n("cQFw"),
                g = n("iJNm"),
                m = n("Bq/2"),
                f = n("5kHu"),
                h = n("zkRB"),
                b = n("5vmN"),
                y = c.a.createElement,
                k = function(e) {
                    function a() {
                        return Object(t.a)(this, a), Object(i.a)(this, Object(r.a)(a).apply(this, arguments))
                    }
                    return Object(s.a)(a, e), Object(l.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return y(d.a, {
                                display: g.d.Flex,
                                justifyContent: g.h.Center,
                                margin: {
                                    top: 2
                                }
                            }, y(m.a, {
                                type: f.d.Text,
                                onClick: p.a,
                                interactionContent: "switch_to_desktop_mode"
                            }, y(h.a, {
                                color: b.c.OverlayAlt,
                                bold: !0
                            }, e("Switch to Desktop Mode", "SwitchToDesktop"))))
                        }
                    }]), a
                }(c.a.PureComponent),
                v = Object(u.a)(k)
        },
        jJbw: function(e, a, n) {
            "use strict";
            n.d(a, "a", function() {
                return C
            });
            var t = n("h7sq"),
                l = n("tS02"),
                i = n("/XES"),
                r = n("ztBH"),
                s = n("Fayl"),
                o = n("yFcC"),
                c = n.n(o),
                u = n("ERkP"),
                p = n.n(u),
                d = n("HIP8"),
                g = n("Vp5C"),
                m = n("/SwW"),
                f = n("cQFw"),
                h = n("iJNm"),
                b = n("Bq/2"),
                y = n("5kHu"),
                k = n("jPHO"),
                v = n("zkRB"),
                j = n("5vmN"),
                x = p.a.createElement,
                w = function(e) {
                    function a() {
                        return Object(t.a)(this, a), Object(i.a)(this, Object(r.a)(a).apply(this, arguments))
                    }
                    return Object(s.a)(a, e), Object(l.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage,
                                a = this.props.game;
                            return x(g.a, {
                                value: "discover_more"
                            }, x(f.a, {
                                className: "discover-more",
                                display: h.d.Flex,
                                flexDirection: h.e.Column,
                                margin: 1,
                                overflow: h.i.Hidden
                            }, x(b.a, {
                                type: y.d.Hollow,
                                fullWidth: !0,
                                linkTo: a ? d.a.GameDirectory : d.a.GameDirectoryAll,
                                params: a ? {
                                    game: a
                                } : void 0,
                                interactionContent: "channels"
                            }, x(k.a, {
                                margin: .5
                            }, x(v.a, {
                                color: j.c.Link,
                                bold: !0,
                                fontSize: j.d.Size5
                            }, this.browseChannelsText(e)))), x(f.a, {
                                margin: {
                                    top: 1
                                }
                            }, x(b.a, {
                                type: y.d.Hollow,
                                linkTo: d.a.GamesDirectory,
                                fullWidth: !0,
                                interactionContent: "games"
                            }, x(k.a, {
                                margin: .5
                            }, x(v.a, {
                                color: j.c.Link,
                                bold: !0,
                                fontSize: j.d.Size5
                            }, e("Browse all other games!", "DiscoverMore")))))), x(c.a, {
                                id: "2015323945"
                            }, [".discover-more .tw-button{white-space:normal;}"]))
                        }
                    }, {
                        key: "browseChannelsText",
                        value: function(e) {
                            return this.props.game ? e("Browse all other {game} channels", {
                                game: this.props.game
                            }, "DiscoverMore") : e("Browse all other channels!", "DiscoverMore")
                        }
                    }]), a
                }(p.a.PureComponent),
                C = Object(m.a)(w)
        },
        lWU6: function(e, a, n) {
            "use strict";
            n.r(a);
            var t, l = n("LcAa"),
                i = n.n(l),
                r = n("emby"),
                s = n.n(r),
                o = n("sXAp"),
                c = n.n(o),
                u = n("FIas"),
                p = n.n(u),
                d = n("8k7s"),
                g = n.n(d),
                m = n("TPw6"),
                f = n.n(m),
                h = n("z0N8"),
                b = n.n(h),
                y = n("k9sC"),
                k = n.n(y),
                v = n("yP/C"),
                j = n("h7sq"),
                x = n("tS02"),
                w = n("/XES"),
                C = n("ztBH"),
                O = n("amHM"),
                L = n("Fayl"),
                F = n("znL5"),
                N = n("knAH"),
                S = n("jllS"),
                I = n("8Wlz"),
                P = n("yFcC"),
                D = n.n(P),
                z = n("NLvr"),
                B = n("ERkP"),
                K = n.n(B),
                T = n("pnpS"),
                E = n("Vp5C"),
                _ = K.a.createElement,
                q = function(e) {
                    function a() {
                        return Object(j.a)(this, a), Object(w.a)(this, Object(C.a)(a).apply(this, arguments))
                    }
                    return Object(L.a)(a, e), Object(x.a)(a, [{
                        key: "render",
                        value: function() {
                            return _(E.a, {
                                value: "info_box"
                            }, _("div", {
                                className: "jsx-2736997322 info-box qa-info-box"
                            }, _(z.a, {
                                displayName: this.broadcaster.displayName,
                                login: this.broadcaster.login,
                                profileImageURL: this.broadcaster.profileImageURL
                            }), _("div", {
                                className: "jsx-2736997322 info-box--metadata qa-info-box--metadata"
                            }, _("h2", {
                                className: "jsx-2736997322"
                            }, this.broadcaster.displayName), _("p", {
                                className: "jsx-2736997322 info-box--playing-info"
                            }, this.props.clip.title)), _(D.a, {
                                id: "2736997322"
                            }, [".info-box.jsx-2736997322{background:black;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 10px;height:".concat(84, "px;}"), ".info-box--metadata.jsx-2736997322{-webkit-flex:1;-ms-flex:1;flex:1;padding-left:10px;overflow-x:hidden;}", ".info-box--metadata.jsx-2736997322 h2.jsx-2736997322{font-size:18px;font-weight:normal;line-height:2rem;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;}", ".info-box--metadata.jsx-2736997322 p.jsx-2736997322{color:rgba(255,255,255,0.7);font-size:13px;line-height:1.5;}"])))
                        }
                    }, {
                        key: "broadcaster",
                        get: function() {
                            return this.props.clip.broadcaster ? this.props.clip.broadcaster : {
                                displayName: null,
                                login: null,
                                profileImageURL: null
                            }
                        }
                    }]), a
                }(K.a.Component),
                R = Object(T.createFragmentContainer)(q, {
                    clip: function() {
                        return n("s26e")
                    }
                }),
                U = n("jJbw"),
                H = n("QeuA"),
                A = n("NZLQ"),
                Q = n("HIP8"),
                M = n("KXbp"),
                X = n("7vVX"),
                W = n("zqif"),
                V = n("d6po"),
                G = K.a.createElement;

            function J(e, a) {
                var n = f()(e);
                if (g.a) {
                    var t = g()(e);
                    a && (t = t.filter(function(a) {
                        return p()(e, a).enumerable
                    })), n.push.apply(n, t)
                }
                return n
            }

            function Z(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var n = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? J(n, !0).forEach(function(a) {
                        Object(F.a)(e, a, n[a])
                    }) : c.a ? s()(e, c()(n)) : J(n).forEach(function(a) {
                        i()(e, a, p()(n, a))
                    })
                }
                return e
            }
            var $ = function(e) {
                function a() {
                    return Object(j.a)(this, a), Object(w.a)(this, Object(C.a)(a).apply(this, arguments))
                }
                return Object(L.a)(a, e), Object(x.a)(a, [{
                    key: "pageSpecificPageviewData",
                    value: function() {
                        var e = this.props.clip;
                        return e ? {
                            channel: e.broadcaster && e.broadcaster.login || void 0,
                            channelID: Object(X.f)(e.broadcaster && e.broadcaster.id) || void 0,
                            game: e.game ? e.game.name : void 0,
                            vodID: Object(X.f)(e.id),
                            vodType: M.a.Clip
                        } : {}
                    }
                }, {
                    key: "pageHeadData",
                    value: function() {
                        var e, a = this.props.queryVariables.slug,
                            n = this.props.login,
                            t = n;
                        return this.props.clip && (this.props.clip.broadcaster && (t = Object(W.a)(this.props.clip.broadcaster) || t, n = this.props.clip.broadcaster.login || n), a = this.props.clip.slug || a, e = this.props.clip.title || e), {
                            data: {
                                broadcasterDisplayName: t,
                                clipTitle: e,
                                login: n,
                                route: Q.a.Clip,
                                slug: a
                            }
                        }
                    }
                }, {
                    key: "panelArea",
                    value: function() {
                        var e = this.props.clip;
                        return e ? G(K.a.Fragment, null, G(R, {
                            clip: e
                        }), G(U.a, {
                            game: e.game && e.game.name
                        }), G(A.a, null), e.broadcaster && e.broadcaster.displayName && G(I.a, {
                            journey: {
                                channel: e.broadcaster.displayName,
                                delaySecondsUntilUpsell: 60,
                                game: e.game ? e.game.id : void 0,
                                type: N.b.Clip
                            }
                        })) : null
                    }
                }, {
                    key: "channelDetails",
                    get: function() {
                        var e = this.props.clip;
                        return e ? Object(S.b)(e.broadcaster) : void 0
                    }
                }, {
                    key: "playerParams",
                    get: function() {
                        return this.props.clip && this.props.clip.broadcaster && this.props.clip.broadcaster.login && this.props.clip.broadcaster.login.toLowerCase() !== this.props.login.toLowerCase() ? null : {
                            slug: this.props.clip && this.props.clip.slug || "",
                            type: H.a.Clip
                        }
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var e = Object(v.a)(k.a.mark(function e(n) {
                            var t;
                            return k.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(O.a)(Object(C.a)(a), "getInitialProps", this).call(this, n);
                                    case 2:
                                        return t = e.sent, e.abrupt("return", Z({}, t, {
                                            login: n.query.login,
                                            queryVariables: {
                                                slug: n.query.slug
                                            }
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function(a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "isNotFound",
                    value: function(e, a) {
                        return !b()(e).filter(function(e) {
                            return e && e.slug && e.slug === a.slug
                        })[0]
                    }
                }]), a
            }(V.c);
            Object(F.a)($, "displayName", "ClipPage"), Object(F.a)($, "totalCacheLife", 1800), Object(F.a)($, "query", t || (t = function() {
                return n("zEQC")
            }));
            var Y = Object(X.h)($);
            n.d(a, "default", function() {
                return Y
            })
        },
        s26e: function(e, a, n) {
            "use strict";
            n.r(a);
            var t = {
                kind: "Fragment",
                name: "ClipInfoBox_clip",
                type: "Clip",
                metadata: null,
                argumentDefinitions: [],
                selections: [{
                    kind: "LinkedField",
                    alias: null,
                    name: "broadcaster",
                    storageKey: null,
                    args: null,
                    concreteType: "User",
                    plural: !1,
                    selections: [{
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
                    }]
                }, {
                    kind: "ScalarField",
                    alias: null,
                    name: "title",
                    args: null,
                    storageKey: null
                }],
                hash: "6237b472f9cfd41caff43198f2910982"
            };
            a.default = t
        },
        tunF: function(e, a, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/Clip", function() {
                return n("lWU6")
            }])
        },
        zEQC: function(e, a, n) {
            "use strict";
            n.r(a);
            var t = function() {
                var e = [{
                        kind: "LocalArgument",
                        name: "slug",
                        type: "ID!",
                        defaultValue: null
                    }],
                    a = [{
                        kind: "Variable",
                        name: "slug",
                        variableName: "slug",
                        type: "ID!"
                    }],
                    n = {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    },
                    t = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    },
                    l = {
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
                        name: "profileImageURL",
                        args: [{
                            kind: "Literal",
                            name: "width",
                            value: 50,
                            type: "Int!"
                        }],
                        storageKey: "profileImageURL(width:50)"
                    },
                    s = {
                        kind: "LinkedField",
                        alias: null,
                        name: "subscriptionProducts",
                        storageKey: null,
                        args: null,
                        concreteType: "SubscriptionProduct",
                        plural: !0,
                        selections: [t]
                    },
                    o = {
                        kind: "ScalarField",
                        alias: null,
                        name: "slug",
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
                        selections: [t, {
                            kind: "ScalarField",
                            alias: null,
                            name: "name",
                            args: null,
                            storageKey: null
                        }]
                    };
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "Clip_Query",
                    id: null,
                    text: "query Clip_Query(\n  $slug: ID!\n) {\n  clip(slug: $slug) {\n    ...ClipInfoBox_clip\n    title\n    id\n    broadcaster {\n      id\n      login\n      displayName\n      profileImageURL(width: 50)\n      subscriptionProducts {\n        id\n      }\n    }\n    slug\n    game {\n      id\n      name\n    }\n  }\n}\n\nfragment ClipInfoBox_clip on Clip {\n  broadcaster {\n    login\n    displayName\n    profileImageURL(width: 50)\n    id\n  }\n  title\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "Clip_Query",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "clip",
                            storageKey: null,
                            args: a,
                            concreteType: "Clip",
                            plural: !1,
                            selections: [{
                                kind: "FragmentSpread",
                                name: "ClipInfoBox_clip",
                                args: null
                            }, n, t, {
                                kind: "LinkedField",
                                alias: null,
                                name: "broadcaster",
                                storageKey: null,
                                args: null,
                                concreteType: "User",
                                plural: !1,
                                selections: [t, l, i, r, s]
                            }, o, c]
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "Clip_Query",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "clip",
                            storageKey: null,
                            args: a,
                            concreteType: "Clip",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "broadcaster",
                                storageKey: null,
                                args: null,
                                concreteType: "User",
                                plural: !1,
                                selections: [l, i, r, t, s]
                            }, n, t, o, c]
                        }]
                    }
                }
            }();
            t.hash = "a4909a3e5d0eaab492569f0f545cae64", a.default = t
        }
    },
    [
        ["tunF", 1, 0]
    ]
]);