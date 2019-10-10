(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [14], {
        "0NMP": function(e, n, a) {
            "use strict";
            a.r(n);
            var i, l = a("LcAa"),
                t = a.n(l),
                r = a("emby"),
                o = a.n(r),
                s = a("sXAp"),
                d = a.n(s),
                u = a("FIas"),
                c = a.n(u),
                p = a("8k7s"),
                m = a.n(p),
                g = a("TPw6"),
                y = a.n(g),
                f = a("z0N8"),
                v = a.n(f),
                h = a("k9sC"),
                k = a.n(h),
                b = a("yP/C"),
                w = a("h7sq"),
                j = a("tS02"),
                S = a("/XES"),
                F = a("ztBH"),
                L = a("amHM"),
                O = a("Fayl"),
                x = a("znL5"),
                T = a("knAH"),
                I = a("jllS"),
                K = a("Q5L4"),
                N = a("8Wlz"),
                V = a("jJbw"),
                P = a("QeuA"),
                C = a("NZLQ"),
                D = a("yFcC"),
                R = a.n(D),
                E = a("NLvr"),
                M = a("ERkP"),
                _ = a.n(M),
                B = a("pnpS"),
                U = a("Vp5C"),
                A = _.a.createElement,
                H = function(e) {
                    function n() {
                        return Object(w.a)(this, n), Object(S.a)(this, Object(F.a)(n).apply(this, arguments))
                    }
                    return Object(O.a)(n, e), Object(j.a)(n, [{
                        key: "render",
                        value: function() {
                            return A(U.a, {
                                value: "info_box"
                            }, A("div", {
                                className: "jsx-1679074720 info-box qa-info-box"
                            }, A(E.a, {
                                displayName: this.owner.displayName,
                                login: this.owner.login,
                                profileImageURL: this.owner.profileImageURL
                            }), A("div", {
                                className: "jsx-1679074720 info-box--metadata qa-info-box--metadata"
                            }, A("h2", {
                                className: "jsx-1679074720"
                            }, this.owner.displayName), A("p", {
                                className: "jsx-1679074720 info-box--playing-info"
                            }, this.props.video.title)), A(R.a, {
                                id: "1679074720"
                            }, [".info-box.jsx-1679074720{background:black;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 10px;height:".concat(84, "px;}"), ".info-box--metadata.jsx-1679074720{-webkit-flex:1;-ms-flex:1;flex:1;padding-left:10px;overflow-x:hidden;}", ".info-box--metadata.jsx-1679074720 h2.jsx-1679074720{font-size:18px;font-weight:normal;line-height:2rem;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;}", ".info-box--metadata.jsx-1679074720 p.jsx-1679074720{color:rgba(255,255,255,0.7);font-size:13px;line-height:1.5;}"])))
                        }
                    }, {
                        key: "owner",
                        get: function() {
                            return this.props.video.owner ? this.props.video.owner : {
                                displayName: null,
                                login: null,
                                profileImageURL: null
                            }
                        }
                    }]), n
                }(_.a.Component),
                q = Object(B.createFragmentContainer)(H, {
                    video: function() {
                        return a("M/we")
                    }
                }),
                z = a("HIP8"),
                Q = a("Tf1S"),
                X = a("7vVX"),
                J = a("d6po"),
                G = _.a.createElement;

            function W(e, n) {
                var a = y()(e);
                if (m.a) {
                    var i = m()(e);
                    n && (i = i.filter(function(n) {
                        return c()(e, n).enumerable
                    })), a.push.apply(a, i)
                }
                return a
            }

            function Z(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? W(a, !0).forEach(function(n) {
                        Object(x.a)(e, n, a[n])
                    }) : d.a ? o()(e, d()(a)) : W(a).forEach(function(n) {
                        t()(e, n, c()(a, n))
                    })
                }
                return e
            }
            var $ = function(e) {
                function n() {
                    return Object(w.a)(this, n), Object(S.a)(this, Object(F.a)(n).apply(this, arguments))
                }
                return Object(O.a)(n, e), Object(j.a)(n, [{
                    key: "pageSpecificPageviewData",
                    value: function() {
                        var e = this.props.video;
                        return e ? {
                            channel: e.owner && e.owner.login || void 0,
                            channelID: e.owner && Object(X.f)(e.owner.id) || void 0,
                            game: e.game && e.game.name || void 0,
                            isLive: this.isLive,
                            vodID: Object(X.f)(e.id),
                            vodType: Object(Q.a)(e.broadcastType)
                        } : {}
                    }
                }, {
                    key: "pageHeadData",
                    value: function() {
                        var e, n = this.props.queryVariables.vodId;
                        if (this.props.video) {
                            var a = this.props.video,
                                i = a.createdAt,
                                l = a.id,
                                t = a.lengthSeconds,
                                r = a.previewThumbnailURL,
                                o = a.title,
                                s = a.owner,
                                d = a.viewCount;
                            n = l || n, e = {
                                broadcasterDisplayName: s && s.displayName || void 0,
                                broadcasterLogin: s && s.login || void 0,
                                createdAt: i || void 0,
                                duration: t || void 0,
                                preview: r || void 0,
                                title: o || void 0,
                                viewCount: d || void 0
                            }
                        }
                        return {
                            data: {
                                route: z.a.Vod,
                                vod: e,
                                vodId: n
                            }
                        }
                    }
                }, {
                    key: "panelArea",
                    value: function() {
                        var e = this.props.video;
                        return !e || Object(X.g)(e.id) ? null : G(_.a.Fragment, null, G(q, {
                            video: e
                        }), G(V.a, {
                            game: e.game && e.game.name
                        }), G(C.a, null), e.owner && e.owner.displayName && G(N.a, {
                            journey: {
                                channel: e.owner.displayName,
                                delaySecondsUntilUpsell: 60,
                                type: T.b.Vod
                            }
                        }), G(K.a, {
                            delaySecondsUntilTrack: 300,
                            event: T.a.FiveMinutePlay
                        }))
                    }
                }, {
                    key: "playerParams",
                    get: function() {
                        var e = this.props.video;
                        return e && e.id && !Object(X.g)(e.id) ? {
                            type: P.a.Video,
                            video: e
                        } : null
                    }
                }, {
                    key: "channelDetails",
                    get: function() {
                        var e = this.props.video;
                        if (e) return Object(I.b)(e.owner)
                    }
                }, {
                    key: "isLive",
                    get: function() {
                        return !(!(this.props.video && this.props.video.owner && this.props.video.owner.login && this.props.video.owner.stream && this.props.video.owner.stream.id) || Object(X.g)(this.props.video.owner.stream.id))
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var e = Object(b.a)(k.a.mark(function e(a) {
                            var i;
                            return k.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(L.a)(Object(F.a)(n), "getInitialProps", this).call(this, a);
                                    case 2:
                                        return i = e.sent, e.abrupt("return", Z({}, i, {
                                            queryVariables: {
                                                vodId: Object(X.e)(a.query.id)
                                            }
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "isNotFound",
                    value: function(e, n) {
                        return !v()(e).filter(function(e) {
                            return e && e.id && e.id === n.vodId
                        })[0]
                    }
                }]), n
            }(J.c);
            Object(x.a)($, "displayName", "VodPage"), Object(x.a)($, "totalCacheLife", 1800), Object(x.a)($, "query", i || (i = function() {
                return a("MwmJ")
            }));
            var Y = Object(X.h)($);
            a.d(n, "default", function() {
                return Y
            })
        },
        "M/we": function(e, n, a) {
            "use strict";
            a.r(n);
            var i = {
                kind: "Fragment",
                name: "VODInfoBox_video",
                type: "Video",
                metadata: null,
                argumentDefinitions: [],
                selections: [{
                    kind: "LinkedField",
                    alias: null,
                    name: "owner",
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
                hash: "2267d34c0713143749339923c89a127c"
            };
            n.default = i
        },
        MwmJ: function(e, n, a) {
            "use strict";
            a.r(n);
            var i = function() {
                var e = [{
                        kind: "LocalArgument",
                        name: "vodId",
                        type: "ID!",
                        defaultValue: null
                    }],
                    n = [{
                        kind: "Variable",
                        name: "id",
                        variableName: "vodId",
                        type: "ID"
                    }],
                    a = {
                        kind: "ScalarField",
                        alias: null,
                        name: "name",
                        args: null,
                        storageKey: null
                    },
                    i = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    },
                    l = {
                        kind: "ScalarField",
                        alias: null,
                        name: "broadcastType",
                        args: null,
                        storageKey: null
                    },
                    t = {
                        kind: "ScalarField",
                        alias: null,
                        name: "createdAt",
                        args: null,
                        storageKey: null
                    },
                    r = {
                        kind: "ScalarField",
                        alias: null,
                        name: "lengthSeconds",
                        args: null,
                        storageKey: null
                    },
                    o = {
                        kind: "ScalarField",
                        alias: null,
                        name: "login",
                        args: null,
                        storageKey: null
                    },
                    s = {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    },
                    d = [i],
                    u = {
                        kind: "LinkedField",
                        alias: null,
                        name: "stream",
                        storageKey: null,
                        args: null,
                        concreteType: "Stream",
                        plural: !1,
                        selections: d
                    },
                    c = {
                        kind: "ScalarField",
                        alias: null,
                        name: "previewThumbnailURL",
                        args: null,
                        storageKey: null
                    },
                    p = {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    },
                    m = {
                        kind: "ScalarField",
                        alias: null,
                        name: "viewCount",
                        args: null,
                        storageKey: null
                    };
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "Vod_Query",
                    id: null,
                    text: "query Vod_Query(\n  $vodId: ID!\n) {\n  video(id: $vodId) {\n    ...Player_video\n    ...VODInfoBox_video\n    id\n    broadcastType\n    createdAt\n    game {\n      name\n      id\n    }\n    lengthSeconds\n    owner {\n      id\n      login\n      displayName\n      stream {\n        id\n      }\n      subscriptionProducts {\n        id\n      }\n    }\n    previewThumbnailURL\n    title\n    viewCount\n  }\n}\n\nfragment Player_video on Video {\n  ...VideoPlayer_video\n  id\n}\n\nfragment VODInfoBox_video on Video {\n  owner {\n    login\n    displayName\n    profileImageURL(width: 50)\n    id\n  }\n  title\n}\n\nfragment VideoPlayer_video on Video {\n  id\n  broadcastType\n  owner {\n    id\n    displayName\n    login\n    roles {\n      isPartner\n    }\n    broadcastSettings {\n      isMature\n      id\n    }\n    subscriptionProducts {\n      displayName\n      hasSubonlyVideoArchive\n      id\n    }\n    videos(sort: TIME, first: 3) {\n      edges {\n        node {\n          id\n          previewThumbnailURL\n          title\n          status\n        }\n      }\n    }\n  }\n  game {\n    id\n    name\n  }\n  muteInfo {\n    mutedSegmentConnection {\n      nodes {\n        duration\n      }\n    }\n  }\n  resourceRestriction {\n    type\n    id\n  }\n  self {\n    isRestricted\n  }\n  previewThumbnailURL\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "Vod_Query",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "video",
                            storageKey: null,
                            args: n,
                            concreteType: "Video",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "game",
                                storageKey: null,
                                args: null,
                                concreteType: "Game",
                                plural: !1,
                                selections: [a]
                            }, {
                                kind: "FragmentSpread",
                                name: "Player_video",
                                args: null
                            }, i, l, t, {
                                kind: "FragmentSpread",
                                name: "VODInfoBox_video",
                                args: null
                            }, r, {
                                kind: "LinkedField",
                                alias: null,
                                name: "owner",
                                storageKey: null,
                                args: null,
                                concreteType: "User",
                                plural: !1,
                                selections: [i, o, s, u, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "subscriptionProducts",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "SubscriptionProduct",
                                    plural: !0,
                                    selections: d
                                }]
                            }, c, p, m]
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "Vod_Query",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "video",
                            storageKey: null,
                            args: n,
                            concreteType: "Video",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "self",
                                storageKey: null,
                                args: null,
                                concreteType: "VideoSelfEdge",
                                plural: !1,
                                selections: [{
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "isRestricted",
                                    args: null,
                                    storageKey: null
                                }]
                            }, i, {
                                kind: "LinkedField",
                                alias: null,
                                name: "owner",
                                storageKey: null,
                                args: null,
                                concreteType: "User",
                                plural: !1,
                                selections: [i, s, o, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "roles",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "UserRoles",
                                    plural: !1,
                                    selections: [{
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "isPartner",
                                        args: null,
                                        storageKey: null
                                    }]
                                }, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "broadcastSettings",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "BroadcastSettings",
                                    plural: !1,
                                    selections: [{
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "isMature",
                                        args: null,
                                        storageKey: null
                                    }, i]
                                }, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "subscriptionProducts",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "SubscriptionProduct",
                                    plural: !0,
                                    selections: [s, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "hasSubonlyVideoArchive",
                                        args: null,
                                        storageKey: null
                                    }, i]
                                }, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "videos",
                                    storageKey: 'videos(first:3,sort:"TIME")',
                                    args: [{
                                        kind: "Literal",
                                        name: "first",
                                        value: 3,
                                        type: "Int"
                                    }, {
                                        kind: "Literal",
                                        name: "sort",
                                        value: "TIME",
                                        type: "VideoSort"
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
                                            selections: [i, c, p, {
                                                kind: "ScalarField",
                                                alias: null,
                                                name: "status",
                                                args: null,
                                                storageKey: null
                                            }]
                                        }]
                                    }]
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
                                }, u]
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "game",
                                storageKey: null,
                                args: null,
                                concreteType: "Game",
                                plural: !1,
                                selections: [i, a]
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "muteInfo",
                                storageKey: null,
                                args: null,
                                concreteType: "VideoMuteInfo",
                                plural: !1,
                                selections: [{
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "mutedSegmentConnection",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "VideoMutedSegmentConnection",
                                    plural: !1,
                                    selections: [{
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "nodes",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "VideoMutedSegment",
                                        plural: !0,
                                        selections: [{
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "duration",
                                            args: null,
                                            storageKey: null
                                        }]
                                    }]
                                }]
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "resourceRestriction",
                                storageKey: null,
                                args: null,
                                concreteType: "ResourceRestriction",
                                plural: !1,
                                selections: [{
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "type",
                                    args: null,
                                    storageKey: null
                                }, i]
                            }, l, c, p, t, r, m]
                        }]
                    }
                }
            }();
            i.hash = "a67bc39eb62554e59a80809644d4b0aa", n.default = i
        },
        NLvr: function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return v
            });
            var i = a("h7sq"),
                l = a("tS02"),
                t = a("/XES"),
                r = a("ztBH"),
                o = a("Fayl"),
                s = a("ERkP"),
                d = a.n(s),
                u = a("HIP8"),
                c = a("/SwW"),
                p = a("wRUM"),
                m = a("B8T3"),
                g = a("zqif"),
                y = d.a.createElement,
                f = function(e) {
                    function n() {
                        return Object(i.a)(this, n), Object(t.a)(this, Object(r.a)(n).apply(this, arguments))
                    }
                    return Object(o.a)(n, e), Object(l.a)(n, [{
                        key: "render",
                        value: function() {
                            return y("div", {
                                className: "info-box--logo-container"
                            }, y(this.SafeLink, {
                                ariaLabel: this.ariaLabel,
                                login: this.props.login
                            }, y(p.a, {
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
                            var n = e.ariaLabel,
                                a = e.login,
                                i = e.children;
                            return a ? y(m.a, {
                                linkTo: u.a.ChannelProfile,
                                params: {
                                    channel: a
                                },
                                interactionContent: "logo",
                                ariaLabel: n
                            }, i) : y(d.a.Fragment, null, i)
                        }
                    }, {
                        key: "ariaLabel",
                        get: function() {
                            var e = this.props.intl.formatMessage,
                                n = Object(g.a)({
                                    displayName: this.props.displayName,
                                    login: this.props.login
                                });
                            return n ? e("Go to {channel}'s profile", {
                                channel: n
                            }, "InfoBoxAvatar") : e("Go to channel's profile", "InfoBoxAvatar")
                        }
                    }, {
                        key: "imageAlt",
                        get: function() {
                            var e = this.props.intl.formatMessage,
                                n = Object(g.a)({
                                    displayName: this.props.displayName,
                                    login: this.props.login
                                });
                            return n ? e("{channel}'s avatar", {
                                channel: n
                            }, "InfoBoxAvatar") : e("Channel's avatar", "InfoBoxAvatar")
                        }
                    }]), n
                }(d.a.PureComponent),
                v = Object(c.a)(f)
        },
        NZLQ: function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return b
            });
            var i = a("h7sq"),
                l = a("tS02"),
                t = a("/XES"),
                r = a("ztBH"),
                o = a("Fayl"),
                s = a("ERkP"),
                d = a.n(s),
                u = a("/SwW"),
                c = a("QS90"),
                p = a("cQFw"),
                m = a("iJNm"),
                g = a("Bq/2"),
                y = a("5kHu"),
                f = a("zkRB"),
                v = a("5vmN"),
                h = d.a.createElement,
                k = function(e) {
                    function n() {
                        return Object(i.a)(this, n), Object(t.a)(this, Object(r.a)(n).apply(this, arguments))
                    }
                    return Object(o.a)(n, e), Object(l.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return h(p.a, {
                                display: m.d.Flex,
                                justifyContent: m.h.Center,
                                margin: {
                                    top: 2
                                }
                            }, h(g.a, {
                                type: y.d.Text,
                                onClick: c.a,
                                interactionContent: "switch_to_desktop_mode"
                            }, h(f.a, {
                                color: v.c.OverlayAlt,
                                bold: !0
                            }, e("Switch to Desktop Mode", "SwitchToDesktop"))))
                        }
                    }]), n
                }(d.a.PureComponent),
                b = Object(u.a)(k)
        },
        Q5L4: function(e, n, a) {
            "use strict";
            var i = a("pneb"),
                l = a("h7sq"),
                t = a("tS02"),
                r = a("/XES"),
                o = a("ztBH"),
                s = a("Fayl"),
                d = a("q5o0"),
                u = a.n(d),
                c = a("ERkP"),
                p = a.n(c),
                m = a("XrKG"),
                g = function(e) {
                    function n() {
                        var n;
                        return (n = e.apply(this, arguments) || this).trackEvent = function() {
                            n.props.branch && n.props.branch.trackBranchEvent(n.props.event, {
                                device_id: n.props.deviceID,
                                session_id: n.props.sessionID
                            })
                        }, n
                    }
                    u()(n, e);
                    var a = n.prototype;
                    return a.componentDidMount = function() {
                        this.trackingTimerHandle = window.setTimeout(this.trackEvent, 1e3 * this.props.delaySecondsUntilTrack)
                    }, a.componentWillUnmount = function() {
                        this.trackingTimerHandle && window.clearTimeout(this.trackingTimerHandle)
                    }, a.render = function() {
                        return null
                    }, n
                }(c.Component);
            g.displayName = "BranchTimedTracker";
            var y = Object(m.a)(g),
                f = a("9j/M"),
                v = a("/JXg");
            a.d(n, "a", function() {
                return b
            });
            var h = p.a.createElement,
                k = function(e) {
                    function n() {
                        return Object(l.a)(this, n), Object(r.a)(this, Object(o.a)(n).apply(this, arguments))
                    }
                    return Object(s.a)(n, e), Object(t.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props.env.client;
                            return h(f.a, null, h(y, Object(i.a)({}, this.props, {
                                sessionID: e && e.sessionID || "",
                                deviceID: e && e.deviceID || ""
                            })))
                        }
                    }]), n
                }(p.a.Component),
                b = Object(v.a)(k)
        },
        VaKl: function(e, n, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/Vod", function() {
                return a("0NMP")
            }])
        },
        jJbw: function(e, n, a) {
            "use strict";
            a.d(n, "a", function() {
                return F
            });
            var i = a("h7sq"),
                l = a("tS02"),
                t = a("/XES"),
                r = a("ztBH"),
                o = a("Fayl"),
                s = a("yFcC"),
                d = a.n(s),
                u = a("ERkP"),
                c = a.n(u),
                p = a("HIP8"),
                m = a("Vp5C"),
                g = a("/SwW"),
                y = a("cQFw"),
                f = a("iJNm"),
                v = a("Bq/2"),
                h = a("5kHu"),
                k = a("jPHO"),
                b = a("zkRB"),
                w = a("5vmN"),
                j = c.a.createElement,
                S = function(e) {
                    function n() {
                        return Object(i.a)(this, n), Object(t.a)(this, Object(r.a)(n).apply(this, arguments))
                    }
                    return Object(o.a)(n, e), Object(l.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage,
                                n = this.props.game;
                            return j(m.a, {
                                value: "discover_more"
                            }, j(y.a, {
                                className: "discover-more",
                                display: f.d.Flex,
                                flexDirection: f.e.Column,
                                margin: 1,
                                overflow: f.i.Hidden
                            }, j(v.a, {
                                type: h.d.Hollow,
                                fullWidth: !0,
                                linkTo: n ? p.a.GameDirectory : p.a.GameDirectoryAll,
                                params: n ? {
                                    game: n
                                } : void 0,
                                interactionContent: "channels"
                            }, j(k.a, {
                                margin: .5
                            }, j(b.a, {
                                color: w.c.Link,
                                bold: !0,
                                fontSize: w.d.Size5
                            }, this.browseChannelsText(e)))), j(y.a, {
                                margin: {
                                    top: 1
                                }
                            }, j(v.a, {
                                type: h.d.Hollow,
                                linkTo: p.a.GamesDirectory,
                                fullWidth: !0,
                                interactionContent: "games"
                            }, j(k.a, {
                                margin: .5
                            }, j(b.a, {
                                color: w.c.Link,
                                bold: !0,
                                fontSize: w.d.Size5
                            }, e("Browse all other games!", "DiscoverMore")))))), j(d.a, {
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
                    }]), n
                }(c.a.PureComponent),
                F = Object(g.a)(S)
        }
    },
    [
        ["VaKl", 1, 0]
    ]
]);