(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [3], {
        "+kWt": function(e, a, n) {
            "use strict";
            n.r(a);
            var t = function() {
                var e = [{
                        kind: "LocalArgument",
                        name: "login",
                        type: "String!",
                        defaultValue: null
                    }],
                    a = [{
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
                    t = {
                        kind: "ScalarField",
                        alias: null,
                        name: "login",
                        args: null,
                        storageKey: null
                    },
                    r = {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    },
                    s = {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    },
                    i = {
                        kind: "ScalarField",
                        alias: null,
                        name: "createdAt",
                        args: null,
                        storageKey: null
                    },
                    l = {
                        kind: "ScalarField",
                        alias: null,
                        name: "height",
                        args: null,
                        storageKey: null
                    },
                    o = {
                        kind: "ScalarField",
                        alias: null,
                        name: "previewImageURL",
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
                        selections: [n, {
                            kind: "ScalarField",
                            alias: null,
                            name: "name",
                            args: null,
                            storageKey: null
                        }]
                    },
                    u = [n],
                    d = {
                        kind: "LinkedField",
                        alias: null,
                        name: "subscriptionProducts",
                        storageKey: null,
                        args: null,
                        concreteType: "SubscriptionProduct",
                        plural: !0,
                        selections: u
                    },
                    m = {
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
                        }, n]
                    },
                    p = {
                        kind: "ScalarField",
                        alias: null,
                        name: "offlineImageURL",
                        args: null,
                        storageKey: null
                    },
                    h = {
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
                    },
                    g = {
                        kind: "LinkedField",
                        alias: null,
                        name: "restriction",
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
                        }, n]
                    },
                    f = {
                        kind: "LinkedField",
                        alias: null,
                        name: "self",
                        storageKey: null,
                        args: null,
                        concreteType: "StreamSelfConnection",
                        plural: !1,
                        selections: [{
                            kind: "ScalarField",
                            alias: null,
                            name: "canWatch",
                            args: null,
                            storageKey: null
                        }]
                    },
                    y = {
                        kind: "LinkedField",
                        alias: null,
                        name: "archiveVideo",
                        storageKey: null,
                        args: null,
                        concreteType: "Video",
                        plural: !1,
                        selections: u
                    },
                    b = {
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
                                selections: [n, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "previewThumbnailURL",
                                    args: null,
                                    storageKey: null
                                }, s, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "status",
                                    args: null,
                                    storageKey: null
                                }]
                            }]
                        }]
                    },
                    v = {
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
                    };
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "Channel_Query",
                    id: null,
                    text: "query Channel_Query(\n  $login: String!\n) {\n  channel: user(login: $login) {\n    ...Player_channel\n    ...StreamInfoBox_user\n    id\n    login\n    displayName\n    lastBroadcast {\n      id\n      title\n      game {\n        displayName\n        id\n      }\n    }\n    stream {\n      id\n      createdAt\n      height\n      previewImageURL\n      game {\n        id\n        name\n      }\n    }\n    hosting {\n      id\n      login\n      stream {\n        id\n        game {\n          id\n          name\n        }\n      }\n    }\n    subscriptionProducts {\n      id\n    }\n  }\n}\n\nfragment Player_channel on User {\n  ...StreamPlayer_channel\n  id\n  login\n  roles {\n    isPartner\n  }\n  stream {\n    id\n    game {\n      id\n      name\n    }\n  }\n  broadcastSettings {\n    isMature\n    id\n  }\n  hosting {\n    id\n    login\n    broadcastSettings {\n      isMature\n      id\n    }\n  }\n}\n\nfragment StreamInfoBox_user on User {\n  login\n  displayName\n  profileImageURL(width: 50)\n  hosting {\n    login\n    displayName\n    profileImageURL(width: 50)\n    stream {\n      game {\n        name\n        id\n      }\n      id\n    }\n    id\n  }\n  stream {\n    game {\n      name\n      id\n    }\n    id\n  }\n}\n\nfragment StreamPlayer_channel on User {\n  id\n  displayName\n  login\n  offlineImageURL\n  roles {\n    isPartner\n  }\n  stream {\n    id\n    game {\n      id\n      name\n    }\n    previewImageURL\n    restriction {\n      type\n      id\n    }\n    self {\n      canWatch\n    }\n    archiveVideo {\n      id\n    }\n  }\n  broadcastSettings {\n    isMature\n    id\n  }\n  videos(sort: TIME, first: 3) {\n    edges {\n      node {\n        id\n        previewThumbnailURL\n        title\n        status\n      }\n    }\n  }\n  hosting {\n    id\n    displayName\n    login\n    offlineImageURL\n    roles {\n      isPartner\n    }\n    videos(sort: TIME, first: 3) {\n      edges {\n        node {\n          id\n          previewThumbnailURL\n          title\n          status\n        }\n      }\n    }\n    stream {\n      id\n      game {\n        id\n        name\n      }\n      restriction {\n        type\n        id\n      }\n      previewImageURL\n      self {\n        canWatch\n      }\n      archiveVideo {\n        id\n      }\n    }\n    broadcastSettings {\n      isMature\n      id\n    }\n  }\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "Channel_Query",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: "channel",
                            name: "user",
                            storageKey: null,
                            args: a,
                            concreteType: "User",
                            plural: !1,
                            selections: [{
                                kind: "FragmentSpread",
                                name: "Player_channel",
                                args: null
                            }, {
                                kind: "FragmentSpread",
                                name: "StreamInfoBox_user",
                                args: null
                            }, n, t, r, {
                                kind: "LinkedField",
                                alias: null,
                                name: "lastBroadcast",
                                storageKey: null,
                                args: null,
                                concreteType: "Broadcast",
                                plural: !1,
                                selections: [n, s, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "game",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Game",
                                    plural: !1,
                                    selections: [r]
                                }]
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "stream",
                                storageKey: null,
                                args: null,
                                concreteType: "Stream",
                                plural: !1,
                                selections: [n, i, l, o, c]
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "hosting",
                                storageKey: null,
                                args: null,
                                concreteType: "User",
                                plural: !1,
                                selections: [n, t, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "stream",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Stream",
                                    plural: !1,
                                    selections: [n, c]
                                }]
                            }, d]
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "Channel_Query",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: "channel",
                            name: "user",
                            storageKey: null,
                            args: a,
                            concreteType: "User",
                            plural: !1,
                            selections: [m, n, t, p, h, {
                                kind: "LinkedField",
                                alias: null,
                                name: "stream",
                                storageKey: null,
                                args: null,
                                concreteType: "Stream",
                                plural: !1,
                                selections: [n, c, o, g, f, y, i, l]
                            }, r, b, {
                                kind: "LinkedField",
                                alias: null,
                                name: "hosting",
                                storageKey: null,
                                args: null,
                                concreteType: "User",
                                plural: !1,
                                selections: [n, r, t, p, h, b, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "stream",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Stream",
                                    plural: !1,
                                    selections: [n, c, g, o, f, y]
                                }, m, v]
                            }, v, {
                                kind: "LinkedField",
                                alias: null,
                                name: "lastBroadcast",
                                storageKey: null,
                                args: null,
                                concreteType: "Broadcast",
                                plural: !1,
                                selections: [n, s, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "game",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Game",
                                    plural: !1,
                                    selections: [r, n]
                                }]
                            }, d]
                        }]
                    }
                }
            }();
            t.hash = "fc97cb1cf481de6ce93a70978b90bd27", a.default = t
        },
        "3kgX": function(e, a, n) {
            "use strict";
            n.r(a);
            var t = function() {
                var e = {
                        kind: "ScalarField",
                        alias: null,
                        name: "login",
                        args: null,
                        storageKey: null
                    },
                    a = {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    },
                    n = {
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
                    t = {
                        kind: "LinkedField",
                        alias: null,
                        name: "stream",
                        storageKey: null,
                        args: null,
                        concreteType: "Stream",
                        plural: !1,
                        selections: [{
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
                        }]
                    };
                return {
                    kind: "Fragment",
                    name: "StreamInfoBox_user",
                    type: "User",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [e, a, n, {
                        kind: "LinkedField",
                        alias: null,
                        name: "hosting",
                        storageKey: null,
                        args: null,
                        concreteType: "User",
                        plural: !1,
                        selections: [e, a, n, t]
                    }, t]
                }
            }();
            t.hash = "04175276f234d9959800de4d4d18ab05", a.default = t
        },
        NLvr: function(e, a, n) {
            "use strict";
            n.d(a, "a", function() {
                return y
            });
            var t = n("h7sq"),
                r = n("tS02"),
                s = n("/XES"),
                i = n("ztBH"),
                l = n("Fayl"),
                o = n("ERkP"),
                c = n.n(o),
                u = n("HIP8"),
                d = n("/SwW"),
                m = n("wRUM"),
                p = n("B8T3"),
                h = n("zqif"),
                g = c.a.createElement,
                f = function(e) {
                    function a() {
                        return Object(t.a)(this, a), Object(s.a)(this, Object(i.a)(a).apply(this, arguments))
                    }
                    return Object(l.a)(a, e), Object(r.a)(a, [{
                        key: "render",
                        value: function() {
                            return g("div", {
                                className: "info-box--logo-container"
                            }, g(this.SafeLink, {
                                ariaLabel: this.ariaLabel,
                                login: this.props.login
                            }, g(m.a, {
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
                            return n ? g(p.a, {
                                linkTo: u.a.ChannelProfile,
                                params: {
                                    channel: n
                                },
                                interactionContent: "logo",
                                ariaLabel: a
                            }, t) : g(c.a.Fragment, null, t)
                        }
                    }, {
                        key: "ariaLabel",
                        get: function() {
                            var e = this.props.intl.formatMessage,
                                a = Object(h.a)({
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
                                a = Object(h.a)({
                                    displayName: this.props.displayName,
                                    login: this.props.login
                                });
                            return a ? e("{channel}'s avatar", {
                                channel: a
                            }, "InfoBoxAvatar") : e("Channel's avatar", "InfoBoxAvatar")
                        }
                    }]), a
                }(c.a.PureComponent),
                y = Object(d.a)(f)
        },
        Pcr7: function(e, a) {
            e.exports = function() {
                return new Worker("/_next/static/619e62c.worker.js")
            }
        },
        Q5L4: function(e, a, n) {
            "use strict";
            var t = n("pneb"),
                r = n("h7sq"),
                s = n("tS02"),
                i = n("/XES"),
                l = n("ztBH"),
                o = n("Fayl"),
                c = n("q5o0"),
                u = n.n(c),
                d = n("ERkP"),
                m = n.n(d),
                p = n("XrKG"),
                h = function(e) {
                    function a() {
                        var a;
                        return (a = e.apply(this, arguments) || this).trackEvent = function() {
                            a.props.branch && a.props.branch.trackBranchEvent(a.props.event, {
                                device_id: a.props.deviceID,
                                session_id: a.props.sessionID
                            })
                        }, a
                    }
                    u()(a, e);
                    var n = a.prototype;
                    return n.componentDidMount = function() {
                        this.trackingTimerHandle = window.setTimeout(this.trackEvent, 1e3 * this.props.delaySecondsUntilTrack)
                    }, n.componentWillUnmount = function() {
                        this.trackingTimerHandle && window.clearTimeout(this.trackingTimerHandle)
                    }, n.render = function() {
                        return null
                    }, a
                }(d.Component);
            h.displayName = "BranchTimedTracker";
            var g = Object(p.a)(h),
                f = n("9j/M"),
                y = n("/JXg");
            n.d(a, "a", function() {
                return k
            });
            var b = m.a.createElement,
                v = function(e) {
                    function a() {
                        return Object(r.a)(this, a), Object(i.a)(this, Object(l.a)(a).apply(this, arguments))
                    }
                    return Object(o.a)(a, e), Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.env.client;
                            return b(f.a, null, b(g, Object(t.a)({}, this.props, {
                                sessionID: e && e.sessionID || "",
                                deviceID: e && e.deviceID || ""
                            })))
                        }
                    }]), a
                }(m.a.Component),
                k = Object(y.a)(v)
        },
        lB50: function(e, a, n) {
            "use strict";
            n.r(a);
            var t, r = n("LcAa"),
                s = n.n(r),
                i = n("emby"),
                l = n.n(i),
                o = n("sXAp"),
                c = n.n(o),
                u = n("FIas"),
                d = n.n(u),
                m = n("8k7s"),
                p = n.n(m),
                h = n("TPw6"),
                g = n.n(h),
                f = n("z0N8"),
                y = n.n(f),
                b = n("k9sC"),
                v = n.n(b),
                k = n("yP/C"),
                j = n("h7sq"),
                C = n("tS02"),
                O = n("/XES"),
                x = n("vTWr"),
                N = n("ztBH"),
                S = n("amHM"),
                w = n("Fayl"),
                L = n("znL5"),
                T = n("knAH"),
                _ = n("9j/M"),
                E = n("jllS"),
                M = n("Q5L4"),
                I = n("8Wlz"),
                F = n("QeuA"),
                P = n("yFcC"),
                U = n.n(P),
                R = n("NLvr"),
                A = n("ERkP"),
                B = n.n(A),
                K = n("pnpS"),
                D = n("HIP8"),
                H = n("Vp5C"),
                z = n("/SwW"),
                W = n("B8T3"),
                G = n("ckPe"),
                q = n("Dlp7"),
                V = n("mSvS"),
                X = n("mTKR"),
                Q = n("Li7b"),
                J = n("pW+w"),
                Y = n("/hOb"),
                $ = B.a.createElement,
                Z = function(e) {
                    return e.toUpperCase().replace("_", "-")
                },
                ee = function(e) {
                    var a = e.country,
                        n = e.control,
                        t = e.treatment,
                        r = e.experimentName,
                        s = Object(J.a)();
                    return B.a.useMemo(function() {
                        var e, n;
                        try {
                            e = Z(s.locale.locale)
                        } catch (i) {
                            e = Z("en-US")
                        }
                        if (!Z(n = e).includes("-") || 5 !== n.length) return !1;
                        var t = e.split("-"),
                            r = Object(q.a)(t, 2)[1];
                        return [].concat(a).reduce(function(e, a) {
                            return e || a.toUpperCase() === r
                        }, !1)
                    }, [s, a]) ? $(Y.a, {
                        messagePrefix: "[ClientSideErrorBoundary LocaleExperiment Protection]",
                        errorStateRender: function() {
                            var e;
                            try {
                                e = n()
                            } catch (a) {
                                e = null
                            }
                            return e
                        }
                    }, $(V.a, {
                        experimentName: r
                    }, $(X.a, {
                        group: Q.a.Treatment
                    }, t()), $(X.a, {
                        group: Q.a.Control
                    }, n()))) : n()
                },
                ae = ["BR", "MX"],
                ne = n("bfSB"),
                te = n("5vmN"),
                re = n("iJNm"),
                se = n("ivAS"),
                ie = n("xtg3"),
                le = n("1nou"),
                oe = n("5kHu"),
                ce = n("XrKG"),
                ue = n("sVKI"),
                de = n("98+S"),
                me = n("n/zO"),
                pe = n("Bq/2"),
                he = n("753B"),
                ge = n("ds2y"),
                fe = B.a.createElement,
                ye = function(e, a, n) {
                    var t = Object(de.b)(e);
                    return t ? Object(de.a)({
                        appStoreOpts: {
                            callToActionIdentifier: n || "upsell_sheet",
                            campaign: a,
                            os: t
                        },
                        path: window.location.pathname,
                        referrer: window.location.href
                    }) : ""
                },
                be = function() {
                    var e = Object(k.a)(v.a.mark(function e(a, n, t, r, s, i) {
                        var l, o;
                        return v.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((l = a.client) && l.agentInfo && n) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", "");
                                case 3:
                                    if (o = r || n, s) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", ye(l.agentInfo, o, i));
                                case 8:
                                    return e.prev = 8, e.next = 11, s.fetchBranchURL(o, t, l.sessionID, l.deviceID);
                                case 11:
                                    return e.abrupt("return", e.sent);
                                case 14:
                                    return e.prev = 14, e.t0 = e.catch(8), e.abrupt("return", ye(l.agentInfo, o, i));
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [8, 14]
                        ])
                    }));
                    return function(a, n, t, r, s, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                ve = Object(ce.a)(function(e) {
                    var a = e.onClose,
                        n = e.title,
                        t = e.buttonText,
                        r = e.description,
                        s = e.branch,
                        i = e.targetAppLocation,
                        l = e.branchCampaign,
                        o = e.callToActionIdentifier,
                        c = Object(ue.a)(),
                        u = Object(he.d)().currentRouteName,
                        d = B.a.useState(""),
                        m = Object(q.a)(d, 2),
                        p = m[0],
                        h = m[1];
                    return B.a.useEffect(function() {
                        Object(ge.a)() && be(c, u, l, i, s, o).then(function(e) {
                            return h(e)
                        })
                    }, [c, u, s, l, i, o]), fe(te.e, {
                        position: re.j.Fixed,
                        attachLeft: !0,
                        attachTop: !0,
                        attachBottom: !0,
                        attachRight: !0,
                        zIndex: re.o.Above,
                        background: te.a.Overlay
                    }, fe("div", null, fe(te.e, {
                        background: te.a.AccentAlt2,
                        position: re.j.Absolute,
                        attachLeft: !0,
                        attachBottom: !0,
                        attachRight: !0,
                        display: re.d.Flex,
                        flexDirection: re.e.Column,
                        padding: {
                            bottom: 3,
                            top: 2,
                            x: 4
                        }
                    }, fe("div", {
                        onClick: function(e) {
                            e.stopPropagation()
                        }
                    }, fe(se.a, {
                        position: re.j.Absolute,
                        attachRight: !0,
                        attachTop: !0,
                        padding: 1
                    }, fe(me.a, {
                        size: ie.b.Small,
                        icon: ne.a.Close,
                        overlay: !0,
                        interactionContent: "upsell_close",
                        onClick: a
                    })), fe(le.a, {
                        type: le.e.H4
                    }, n), r && fe(se.a, {
                        margin: {
                            top: .5
                        }
                    }, fe(le.a, null, r)), fe(se.a, {
                        margin: {
                            top: 2
                        }
                    }, fe(pe.a, {
                        linkTo: p,
                        fullWidth: !0,
                        size: oe.b.Large,
                        interactionContent: "upsell_cta"
                    }, t))))))
                });
            ! function(e) {
                e.TestCampaign = "_TEST_CAMPAIGN_", e.StrikeTeamChannel = "strike_team_channel"
            }(t || (t = {}));
            var ke = B.a.createElement,
                je = function(e) {
                    var a = e.displayName,
                        n = Object(J.a)(),
                        r = B.a.useState(!1),
                        s = Object(q.a)(r, 2),
                        i = s[0],
                        l = s[1],
                        o = n.formatMessage("Open the app and follow {displayName}!", {
                            displayName: ke("span", {
                                style: {
                                    fontWeight: "bold"
                                }
                            }, a)
                        }, "FollowButtonExperiment"),
                        c = n.formatMessage("Follow to get notified when {displayName} is live and so you don\u2019t miss out on the action!", {
                            displayName: ke("span", {
                                style: {
                                    fontWeight: "bold"
                                }
                            }, a)
                        }, "FollowButtonExperiment"),
                        u = n.formatMessage("Open App", "FollowButtonExperiment"),
                        d = ke(B.a.Fragment, null, ke("div", {
                            className: "jsx-3128170899 experiment--follow-btn--wrapper"
                        }, ke(pe.a, {
                            interactionContent: "follow",
                            blurAfterClick: !0,
                            onClick: function() {
                                return l(!0)
                            },
                            icon: ne.a.FollowHollow
                        }, n.formatMessage("Follow", "FollowButtonExperiment"))), i && ke(_.a, null, ke(ve, {
                            branchCampaign: t.StrikeTeamChannel,
                            title: o,
                            description: c,
                            buttonText: u,
                            onClose: function() {
                                return l(!1)
                            },
                            callToActionIdentifier: "follow_button"
                        })), ke(U.a, {
                            id: "3128170899"
                        }, [".experiment--follow-btn--wrapper.jsx-3128170899{padding-left:10px;overflow-x:hidden;}"]));
                    return ke(H.a, {
                        value: "follow_button_experiment"
                    }, ke(ee, {
                        country: ae,
                        control: function() {
                            return null
                        },
                        treatment: function() {
                            return d
                        },
                        experimentName: Q.b.ChannelUpsell
                    }))
                },
                Ce = B.a.createElement,
                Oe = function() {
                    return null
                },
                xe = function() {
                    return Ce(B.a.Fragment, null, Ce(V.a, {
                        experimentName: Q.b.MGSTExperimentBaseline
                    }, Ce(X.a, {
                        group: Q.a.Treatment
                    }), Ce(X.a, {
                        group: Q.a.Control
                    })), Ce(ee, {
                        country: ae,
                        control: Oe,
                        treatment: Oe,
                        experimentName: Q.b.MGSTLocaleExperimentBaseline
                    }))
                },
                Ne = B.a.createElement,
                Se = function(e) {
                    function a() {
                        return Object(j.a)(this, a), Object(O.a)(this, Object(N.a)(a).apply(this, arguments))
                    }
                    return Object(w.a)(a, e), Object(C.a)(a, [{
                        key: "render",
                        value: function() {
                            return Ne(H.a, {
                                value: "info_box"
                            }, Ne("div", {
                                className: "jsx-685280745 info-box qa-info-box"
                            }, Ne(R.a, {
                                displayName: this.channel.displayName,
                                login: this.channel.login,
                                profileImageURL: this.channel.profileImageURL
                            }), Ne("div", {
                                className: "jsx-685280745 info-box--metadata qa-info-box--metadata"
                            }, this.description), Ne(je, {
                                displayName: this.channel.displayName
                            }), Ne(xe, null), Ne(U.a, {
                                id: "685280745"
                            }, [".info-box.jsx-685280745{background:black;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 10px;height:".concat(84, "px;}"), ".info-box--metadata.jsx-685280745{-webkit-flex:1;-ms-flex:1;flex:1;padding-left:10px;overflow-x:hidden;}"])))
                        }
                    }, {
                        key: "description",
                        get: function() {
                            var e = this.props.intl.formatMessage,
                                a = this.channel,
                                n = Ne("h2", {
                                    className: "jsx-695088006"
                                }, a.displayName || a.login, Ne(U.a, {
                                    id: "695088006"
                                }, ["h2.jsx-695088006{font-size:18px;font-weight:normal;line-height:2rem;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;}"])),
                                t = this.hostedChannel,
                                r = null;
                            t && t.login && (r = Ne("h2", {
                                className: "jsx-3547055531"
                            }, e("hosting {hostedChannel}", {
                                hostedChannel: Ne(W.a, {
                                    linkTo: D.a.Channel,
                                    params: {
                                        channel: t.login
                                    },
                                    type: G.b.Overlay
                                }, t.displayName)
                            }, "InfoBoxHosting"), Ne(U.a, {
                                id: "3547055531"
                            }, ["h2.jsx-3547055531{font-size:18px;font-weight:normal;line-height:2rem;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;}"])));
                            var s = null;
                            return this.gameName && (s = Ne("p", {
                                className: "jsx-4013473996 info-box--playing-info"
                            }, e("Playing {game}", {
                                game: Ne(W.a, {
                                    linkTo: D.a.GameDirectory,
                                    params: {
                                        game: this.gameName
                                    },
                                    type: G.b.Overlay
                                }, this.gameName)
                            }, "InfoBoxPlaying"), Ne(U.a, {
                                id: "4013473996"
                            }, ["p.jsx-4013473996{color:rgba(255,255,255,0.7);font-size:13px;line-height:1.5;padding-top:0;}"]))), Ne(B.a.Fragment, null, n, r, s)
                        }
                    }, {
                        key: "gameName",
                        get: function() {
                            return this.hostedChannel && this.hostedChannel.login ? this.hostedChannel.gameName : this.channel.gameName
                        }
                    }, {
                        key: "hostedChannel",
                        get: function() {
                            var e = this.props.user.hosting;
                            return e ? {
                                displayName: e.displayName || "",
                                gameName: e.stream && e.stream.game ? e.stream.game.name : "",
                                login: e.login,
                                profileImageURL: e.profileImageURL
                            } : null
                        }
                    }, {
                        key: "channel",
                        get: function() {
                            var e = this.props.user;
                            return {
                                displayName: e.displayName || "",
                                gameName: e.stream && e.stream.game ? e.stream.game.name : "",
                                login: e.login,
                                profileImageURL: e.profileImageURL
                            }
                        }
                    }]), a
                }(B.a.Component),
                we = Object(K.createFragmentContainer)(Object(z.a)(Se), {
                    user: function() {
                        return n("3kgX")
                    }
                }),
                Le = n("Ss8n"),
                Te = n("C3vT"),
                _e = n.n(Te);
            n("o9XM"), n("zqif");
            var Ee = "TEXT",
                Me = "LINK",
                Ie = "EMOTE";
            var Fe = "POST",
                Pe = "ACTION";
            var Ue = "BAN",
                Re = "TIMEOUT";
            var Ae = "CONNECTED",
                Be = "DISCONNECTED",
                Ke = "RECONNECT",
                De = "HOSTING",
                He = "UNHOST";
            var ze = "SUBSCRIPTION",
                We = "RESUBSCRIPTION";
            var Ge = 250,
                qe = function() {
                    function e() {
                        var a = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge;
                        Object(j.a)(this, e), Object(L.a)(this, "buffer", void 0), Object(L.a)(this, "moderatedUsers", void 0), Object(L.a)(this, "dirty", void 0), Object(L.a)(this, "maxSize", void 0), Object(L.a)(this, "consumeChatEvent", function(e) {
                            var n = e.data;
                            switch (n.type) {
                                case Ue:
                                case Re:
                                    var t = n.username,
                                        r = n.duration;
                                    if (a.moderatedUsers.has(t)) return;
                                    a.buffer.forEach(function(e) {
                                        e.type === Fe || e.type === Pe ? t !== e.user.username || e.deleted || (e.deleted = !0) : e.type === We && e.messageParts && e.user && e.user.username === t && !e.deleted && (e.deleted = !0)
                                    }), a.moderatedUsers.add(t), r && setTimeout(a.unmoderateUser(t), 1e3 * r);
                                    break;
                                case Be:
                                    return;
                                case Ke:
                                    if (a.buffer.find(function(e) {
                                            return e.id === n.id
                                        })) return
                            }
                            a.buffer.push(n), a.dirty = !0
                        }), Object(L.a)(this, "unmoderateUser", function(e) {
                            return function() {
                                a.moderatedUsers.delete(e)
                            }
                        }), this.buffer = [], this.moderatedUsers = new _e.a, this.dirty = !1, this.maxSize = n
                    }
                    return Object(C.a)(e, [{
                        key: "toArray",
                        value: function() {
                            return this.buffer = this.buffer.slice(-this.maxSize), this.dirty = !1, this.buffer
                        }
                    }, {
                        key: "isDirty",
                        get: function() {
                            return this.dirty
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return this.buffer.length
                        }
                    }, {
                        key: "moderatedUserCount",
                        get: function() {
                            return this.moderatedUsers.size
                        }
                    }]), e
                }(),
                Ve = n("Pcr7");

            function Xe(e) {
                var a, n, t = e.chatTargetDetails,
                    r = e.chatUpdateMessages,
                    s = e.bufferSize,
                    i = e.chatReset;
                var l = {
                    buffer: null,
                    rafHandle: null,
                    type: "NULL",
                    worker: null
                };

                function o(e) {
                    l.buffer ? (l.buffer.isDirty && r(l.buffer.toArray()), l.rafHandle = requestAnimationFrame(o)) : Le.a.error("Called updateChatState with no chatBuffer defined")
                }
                return function() {
                    var e = t(),
                        r = e.name,
                        c = e.id;
                    if (r && c)
                        if ("NULL" === l.type) {
                            l = {
                                buffer: new qe(s),
                                rafHandle: requestAnimationFrame(o),
                                type: "ACTIVE",
                                worker: new Ve
                            };
                            var u = document.getElementById("polyfill-script"),
                                d = u && u.getAttribute("src");
                            l.worker.postMessage({
                                command: "CHAT_WORKER_CONNECTED",
                                payload: {
                                    channelID: c,
                                    channelName: r,
                                    polyfillURI: d
                                }
                            }), l.worker.addEventListener("message", l.buffer.consumeChatEvent), l.rafHandle = requestAnimationFrame(o)
                        } else r === a && c === n || (cancelAnimationFrame(l.rafHandle), l.worker.removeEventListener("message", l.buffer.consumeChatEvent), l.buffer = new qe(s), l.worker.postMessage({
                            command: "CHAT_WORKER_CHANNEL_CHANGED",
                            payload: {
                                channelID: c,
                                channelName: r
                            }
                        }), l.worker.addEventListener("message", l.buffer.consumeChatEvent), l.rafHandle = requestAnimationFrame(o));
                    else "ACTIVE" === l.type && (l.worker.postMessage({
                        command: "CHAT_WORKER_DISCONNECTED"
                    }), l.worker.removeEventListener("message", l.buffer.consumeChatEvent), cancelAnimationFrame(l.rafHandle), l = {
                        buffer: null,
                        rafHandle: null,
                        type: "NULL",
                        worker: null
                    }, i());
                    a = r, n = c
                }
            }
            var Qe = B.a.createElement,
                Je = B.a.createContext({}),
                Ye = Je.Provider,
                $e = Je.Consumer,
                Ze = function(e) {
                    function a(e) {
                        var n;
                        return Object(j.a)(this, a), n = Object(O.a)(this, Object(N.a)(a).call(this, e)), Object(L.a)(Object(x.a)(n), "bridge", void 0), Object(L.a)(Object(x.a)(n), "pause", function() {
                            n.setState(function() {
                                return {
                                    paused: !0
                                }
                            })
                        }), Object(L.a)(Object(x.a)(n), "unPause", function() {
                            n.setState(function() {
                                return {
                                    paused: !1
                                }
                            })
                        }), n.state = {
                            chatMessages: [],
                            paused: !1
                        }, Object(ge.a)() && (n.bridge = Xe({
                            bufferSize: 100,
                            chatReset: function() {
                                n.setState(function() {
                                    return {
                                        chatMessages: []
                                    }
                                })
                            },
                            chatTargetDetails: function() {
                                return {
                                    id: n.props.id || "",
                                    name: n.props.login || ""
                                }
                            },
                            chatUpdateMessages: function(e) {
                                n.state.paused || n.setState(function() {
                                    return {
                                        chatMessages: e
                                    }
                                })
                            }
                        })), n
                    }
                    return Object(w.a)(a, e), Object(C.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.bridge && this.bridge()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.bridge && this.bridge()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Qe(Ye, {
                                value: {
                                    chatMessages: this.state.chatMessages,
                                    pause: this.pause,
                                    unPause: this.unPause
                                }
                            }, this.props.children)
                        }
                    }]), a
                }(B.a.Component),
                ea = n("KmwA"),
                aa = n("h6tV"),
                na = n("vCzr"),
                ta = n("V9ax"),
                ra = n("vI2y"),
                sa = n("xeY9"),
                ia = B.a.createElement;

            function la(e, a) {
                var n = g()(e);
                if (p.a) {
                    var t = p()(e);
                    a && (t = t.filter(function(a) {
                        return d()(e, a).enumerable
                    })), n.push.apply(n, t)
                }
                return n
            }
            var oa = n("jPHO"),
                ca = B.a.createElement,
                ua = function(e) {
                    var a = e.alt,
                        n = e.className,
                        t = e.srcKey,
                        r = e.srcSet;
                    return ca("img", {
                        className: n,
                        src: r[t],
                        srcSet: g()(r).map(function(e) {
                            return "".concat(r[e], " ").concat(e)
                        }).join(","),
                        alt: a
                    })
                },
                da = B.a.createElement,
                ma = function(e) {
                    var a = e.badges;
                    return da(B.a.Fragment, null, a.map(function(e, a) {
                        return da(oa.a, {
                            key: "badge-".concat(a),
                            className: "chat-message__badge",
                            verticalAlign: re.m.Middle
                        }, da(ua, {
                            srcKey: "1x",
                            srcSet: e.images,
                            alt: e.alt
                        }))
                    }), da(U.a, {
                        id: "1814409061"
                    }, [".chat-message__badge{margin-right:0.3rem;}"]))
                },
                pa = B.a.createElement,
                ha = function(e) {
                    var a = e.user,
                        n = [pa("span", {
                            key: "username-display",
                            className: "chat-message__username",
                            style: {
                                color: a.color || void 0
                            }
                        }, a.usernameDisplay)];
                    return a.isIntl && n.push(pa("span", {
                        key: "username-base",
                        style: {
                            color: a.color || void 0
                        }
                    }, " (".concat(a.username, ")"))), pa(B.a.Fragment, null, n, pa(U.a, {
                        id: "3418752907"
                    }, [".chat-message__username.jsx-3418752907{font-weight:bold;}"]))
                },
                ga = B.a.createElement,
                fa = function(e) {
                    function a() {
                        return Object(j.a)(this, a), Object(O.a)(this, Object(N.a)(a).apply(this, arguments))
                    }
                    return Object(w.a)(a, e), Object(C.a)(a, [{
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            return e.message.id !== this.props.message.id || e.message.deleted !== this.props.message.deleted
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage,
                                a = this.props.message;
                            switch (a.type) {
                                case Ae:
                                    return ga("li", {
                                        className: "chat-status"
                                    }, e("Welcome to the chat room!", "ChatMessage"));
                                case Be:
                                    return a.reason ? ga("li", {
                                        className: "chat-status"
                                    }, e("You have been disconnected from chat for the following reason: {reason}", {
                                        reason: a.reason
                                    }, "ChatMessage")) : ga("li", {
                                        className: "chat-status"
                                    }, e("You have been disconnected from chat.", "ChatMessage"));
                                case Ke:
                                    return ga("li", {
                                        className: "chat-status"
                                    }, e("Sorry, we were unable to connect to chat. Attempting to reconnect...", "ChatMessage"));
                                case De:
                                    return ga("li", {
                                        className: "chat-status"
                                    }, e("Now hosting {channel}.", {
                                        channel: a.hostedChannel
                                    }, "ChatMessage"));
                                case He:
                                    return ga("li", {
                                        className: "chat-status"
                                    }, e("No longer hosting.", "ChatMessage"));
                                case Fe:
                                case Pe:
                                    var n, t = " : ";
                                    return a.type === Pe && (n = {
                                        color: a.user.color || void 0
                                    }, t = " "), a.messageParts && ga("li", {
                                        className: "chat-message",
                                        style: n
                                    }, ga(ma, {
                                        badges: a.badges
                                    }), ga(ha, {
                                        user: a.user
                                    }), ga("span", {
                                        key: "separator"
                                    }, t), this.messageParts(a.messageParts, a.deleted));
                                case Ue:
                                case Re:
                                    return ga("li", {
                                        className: "chat-moderation"
                                    }, this.moderationMessage(a));
                                case ze:
                                    return ga("li", {
                                        className: "chat-subscribe"
                                    }, this.subscriptionMessage(a));
                                case We:
                                    return ga("li", {
                                        className: "chat-subscribe"
                                    }, this.resubscriptionMessage(a));
                                default:
                                    return
                            }
                        }
                    }, {
                        key: "deletedMessage",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return ga("span", {
                                key: "deleted",
                                className: "chat-message--deleted"
                            }, "<".concat(e("message deleted", "ChatMessage"), ">"))
                        }
                    }, {
                        key: "messageParts",
                        value: function(e, a) {
                            return a ? this.deletedMessage() : e.reduce(function(e, a, n) {
                                var t;
                                switch (a.type) {
                                    case Ee:
                                        t = ga("span", {
                                            key: n
                                        }, a.content);
                                        break;
                                    case Me:
                                        t = ga("a", {
                                            key: n,
                                            className: "chat-message__link",
                                            href: a.content.url,
                                            target: "_blank",
                                            rel: "noreferrer noopener"
                                        }, a.content.displayText);
                                        break;
                                    case Ie:
                                        if (a.content.cheerAmount) {
                                            t = [ga(ua, {
                                                key: n,
                                                className: "chat-message__emote",
                                                srcKey: "1x",
                                                srcSet: a.content.images,
                                                alt: a.content.alt
                                            }), ga("span", {
                                                key: "cheer-amount-".concat(n),
                                                className: "chat-message__cheer-amount",
                                                style: {
                                                    color: a.content.cheerColor
                                                }
                                            }, a.content.cheerAmount)];
                                            break
                                        }
                                        t = ga(ua, {
                                            key: n,
                                            className: "chat-message__emote",
                                            srcKey: "1x",
                                            srcSet: a.content.images,
                                            alt: a.content.alt
                                        });
                                        break;
                                    default:
                                        return a
                                }
                                return e.concat(t)
                            }, [])
                        }
                    }, {
                        key: "moderationMessage",
                        value: function(e) {
                            var a = this.props.intl.formatMessage;
                            return "BAN" === e.type ? e.reason ? a("{username} has been banned. Reason: {reason}", {
                                reason: e.reason,
                                username: e.username
                            }, "ChatMessage") : a("{username} has been banned.", {
                                username: e.username
                            }, "ChatMessage") : e.reason ? a("{username} has been timed out for {duration} seconds. Reason: {reason}", {
                                duration: e.duration,
                                reason: e.reason,
                                username: e.username
                            }, "ChatMessage") : a("{username} has been timed out for {duration} seconds.", {
                                duration: e.duration,
                                username: e.username
                            }, "ChatMessage")
                        }
                    }, {
                        key: "twitchPrimeLink",
                        value: function(e) {
                            return ga("a", {
                                className: "chat-subscribe__prime",
                                href: "https://twitch.amazon.com/prime?ref=subscriptionMessage&channel=".concat(e),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "Twitch Prime")
                        }
                    }, {
                        key: "subscriptionMessage",
                        value: function(e) {
                            var a = this.props.intl.formatMessage;
                            return e.isPrime ? this.formatPrimeSubscribeMessage(e.channel, e.username) : a("{username} just subscribed!", {
                                username: e.username
                            }, "ChatMessage")
                        }
                    }, {
                        key: "resubscriptionMessage",
                        value: function(e) {
                            var a = [],
                                n = this.props.intl.formatMessage;
                            return e.isPrime && e.user && a.push(ga("span", {
                                key: "resub-prime"
                            }, this.formatPrimeSubscribeMessage(e.channel, e.user.usernameDisplay)), ga("span", {
                                key: "resub-separator"
                            }, " ")), e.user && e.months && a.push(ga("span", {
                                key: "resub-months"
                            }, n("{username} subscribed for {months} months in a row!", {
                                months: e.months,
                                username: e.user.usernameDisplay
                            }, "ChatMessage"))), e.messageParts && e.badges && e.user && a.push(ga("div", {
                                key: "resub-message",
                                className: "chat-subscribe__message"
                            }, ga(ma, {
                                badges: e.badges
                            }), ga(ha, {
                                user: e.user
                            }), ga("span", {
                                key: "separator"
                            }, " : "), this.messageParts(e.messageParts, e.deleted))), a
                        }
                    }, {
                        key: "formatPrimeSubscribeMessage",
                        value: function(e, a) {
                            return (0, this.props.intl.formatMessage)("{username} just subscribed with {service}!", {
                                service: this.twitchPrimeLink(e),
                                username: a
                            }, "ChatMessage")
                        }
                    }]), a
                }(B.a.Component),
                ya = n("C0xX"),
                ba = n("QNcz"),
                va = B.a.createElement,
                ka = function(e) {
                    var a = e.displayName,
                        n = Object(J.a)(),
                        r = B.a.useState(!1),
                        s = Object(q.a)(r, 2),
                        i = s[0],
                        l = s[1],
                        o = n.formatMessage("Open the app to chat with {displayName}!", {
                            displayName: va("span", {
                                style: {
                                    fontWeight: "bold"
                                }
                            }, a)
                        }, "ChatInputExperiment"),
                        c = n.formatMessage("Level up your experience! Participate with {displayName}'s chat and the community in the app.", {
                            displayName: va("span", {
                                style: {
                                    fontWeight: "bold"
                                }
                            }, a)
                        }, "ChatInputExperiment"),
                        u = n.formatMessage("Open App", "ChatInputExperiment");
                    return va(H.a, {
                        value: "chat_input_experiment"
                    }, va(ba.a, {
                        interactionContent: "chat_input",
                        blurAfterClick: !0,
                        onClick: function(e) {
                            e.stopPropagation(), l(!0)
                        }
                    }, va(ya.a, {
                        position: re.j.Absolute,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        padding: {
                            x: 1
                        },
                        background: te.a.Alt
                    }, va(ya.a, {
                        borderTop: !0
                    }, va(se.a, {
                        display: re.d.Flex,
                        flexDirection: re.e.Row,
                        padding: {
                            y: 1
                        },
                        alignItems: re.b.Center
                    }, va(se.a, {
                        flexGrow: 1
                    }, va(le.a, {
                        color: te.c.Alt2
                    }, n.formatMessage("Send a message", "ChatInputExperiment"))), va(pe.a, {
                        linkTo: "/",
                        size: oe.b.Small
                    }, n.formatMessage("Chat", "ChatInputExperiment")))))), i && va(ve, {
                        onClose: function() {
                            return l(!1)
                        },
                        title: o,
                        description: c,
                        buttonText: u,
                        branchCampaign: t.StrikeTeamChannel,
                        callToActionIdentifier: "chat_input"
                    }))
                },
                ja = B.a.createElement,
                Ca = ea.a,
                Oa = 10,
                xa = function(e) {
                    function a(e) {
                        var n;
                        return Object(j.a)(this, a), n = Object(O.a)(this, Object(N.a)(a).call(this, e)), Object(L.a)(Object(x.a)(n), "chatList", null), Object(L.a)(Object(x.a)(n), "userScroll", void 0), Object(L.a)(Object(x.a)(n), "reportChatConnected", void 0), Object(L.a)(Object(x.a)(n), "handleScroll", function(e) {
                            e.stopPropagation(), n.userScroll ? n.chatList && n.chatList.scrollTop + n.chatList.clientHeight >= n.chatList.scrollHeight - Oa ? n.state.autoscroll || (n.setState({
                                autoscroll: !0
                            }), n.props.unPause()) : n.state.autoscroll && (n.setState({
                                autoscroll: !1
                            }), n.props.pause()) : n.userScroll = !0
                        }), Object(L.a)(Object(x.a)(n), "scrollToBottom", function() {
                            n.userScroll = !1, n.chatList && (n.chatList.scrollTop = n.chatList.scrollHeight)
                        }), n.userScroll = !0, n.state = {
                            autoscroll: !0
                        }, n.reportChatConnected = Object(ra.a)(n.props.reportLatencyEvent("chatConnected")), n
                    }
                    return Object(w.a)(a, e), Object(C.a)(a, [{
                        key: "isInteractive",
                        value: function() {
                            return this.props.chatMessages.length > 0
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.state.autoscroll && this.scrollToBottom()
                        }
                    }, {
                        key: "moreMessages",
                        value: function(e) {
                            var a = this,
                                n = (0, this.props.intl.formatMessage)("More messages below", "ChatPane");
                            return !this.state.autoscroll && ja(B.a.Fragment, null, ja(ta.a, {
                                alignItems: re.b.Center,
                                attachBottom: !0,
                                background: te.a.Overlay,
                                className: "chat-pane__more-messages",
                                color: te.c.Overlay,
                                display: re.d.Flex,
                                fullWidth: !0,
                                justifyContent: re.h.Center,
                                padding: {
                                    y: 1
                                },
                                position: re.j.Absolute
                            }, ja("div", {
                                onClick: function() {
                                    a.setState({
                                        autoscroll: !0
                                    }, a.scrollToBottom), a.props.unPause()
                                },
                                className: U.a.dynamic([
                                    ["2745003228", [e ? 45 : 0]]
                                ])
                            }, n)), ja(U.a, {
                                id: "2745003228",
                                dynamic: [e ? 45 : 0]
                            }, [".chat-pane__more-messages{bottom:".concat(e ? 45 : 0, "px !important;cursor:pointer;}")]))
                        }
                    }, {
                        key: "renderBody",
                        value: function(e) {
                            var a = this;
                            return this.props.chatMessages.length > 0 && this.reportChatConnected(), ja("div", {
                                className: "jsx-889589459 " + U.a.dynamic([
                                    ["4207471769", [Ca + 84, Ca + 84, 84, e ? 50 : 10]]
                                ]) + " chat-pane"
                            }, ja("ul", {
                                ref: function(e) {
                                    return a.chatList = e
                                },
                                onScroll: this.handleScroll,
                                className: "jsx-889589459 " + U.a.dynamic([
                                    ["4207471769", [Ca + 84, Ca + 84, 84, e ? 50 : 10]]
                                ]) + " chat-pane__chat-list"
                            }, this.props.chatMessages.map(function(e) {
                                return ja(fa, {
                                    intl: a.props.intl,
                                    key: e.id,
                                    message: e
                                })
                            })), e && ja(ka, {
                                displayName: this.props.channelName
                            }), this.moreMessages(e), ja(U.a, {
                                id: "4207471769",
                                dynamic: [Ca + 84, Ca + 84, 84, e ? 50 : 10]
                            }, [".chat-pane.__jsx-style-dynamic-selector{position:relative;height:calc( 100vh - (9 * 100vw / 16) - ".concat(Ca + 84, "px);}"), "@media only screen and (orientation:landscape){.chat-pane.__jsx-style-dynamic-selector{height:calc(100vh - ".concat(Ca + 84, "px);}}"), "@media only screen and (orientation:landscape) and (max-device-width:767px){.chat-pane.__jsx-style-dynamic-selector{height:calc(100vh - ".concat(84, "px);}}"), ".chat-pane__chat-list.__jsx-style-dynamic-selector{position:relative;overflow-y:auto;overflow-x:hidden;height:100%;padding-bottom:".concat(e ? 50 : 10, "px;}")]), ja(U.a, {
                                id: "889589459"
                            }, [".chat-status,.chat-message,.chat-moderation,.chat-subscribe{padding:5px 20px;}", ".chat-message__cheer-amount{font-weight:bold;}", ".chat-message__emote{vertical-align:middle;margin:-5px 0;}", ".chat-subscribe__prime,.chat-message__link{-webkit-text-decoration:underline;text-decoration:underline;}", ".chat-message__link{word-wrap:break-word;}", ".chat-status{color:#686878;}", ".chat-message--deleted,.chat-subscribe__prime{color:#5c16c5;}", ".chat-subscribe{color:#686878;background:#fafafa;border-left:4px solid #5c16c5;padding-left:16px;}", ".chat-subscribe__message{color:initial;}"]))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return ja(ee, {
                                country: ae,
                                control: function() {
                                    return e.renderBody(!1)
                                },
                                treatment: function() {
                                    return e.renderBody(!0)
                                },
                                experimentName: Q.b.ChannelUpsell
                            })
                        }
                    }]), a
                }(B.a.Component);
            Object(L.a)(xa, "displayName", "ChatPane");
            var Na, Sa = function(e) {
                    var a, n;
                    return n = a = function(a) {
                        function n() {
                            return Object(j.a)(this, n), Object(O.a)(this, Object(N.a)(n).apply(this, arguments))
                        }
                        return Object(w.a)(n, a), Object(C.a)(n, [{
                            key: "render",
                            value: function() {
                                var a = this;
                                return ia($e, null, function(n) {
                                    var t = n.chatMessages,
                                        r = n.pause,
                                        i = n.unPause,
                                        o = function(e) {
                                            for (var a = 1; a < arguments.length; a++) {
                                                var n = null != arguments[a] ? arguments[a] : {};
                                                a % 2 ? la(n, !0).forEach(function(a) {
                                                    Object(L.a)(e, a, n[a])
                                                }) : c.a ? l()(e, c()(n)) : la(n).forEach(function(a) {
                                                    s()(e, a, d()(n, a))
                                                })
                                            }
                                            return e
                                        }({}, a.props, {
                                            chatMessages: t,
                                            pause: r,
                                            unPause: i
                                        });
                                    return ia(e, o)
                                })
                            }
                        }]), n
                    }(B.a.Component), Object(L.a)(a, "displayName", "Chat(".concat(Object(sa.a)(e), ")")), n
                }(Object(z.a)(Object(aa.a)(Object(na.a)(xa)))),
                wa = n("LcWN"),
                La = n("7vVX"),
                Ta = n("ne1u"),
                _a = n("d6po"),
                Ea = B.a.createElement;

            function Ma(e, a) {
                var n = g()(e);
                if (p.a) {
                    var t = p()(e);
                    a && (t = t.filter(function(a) {
                        return d()(e, a).enumerable
                    })), n.push.apply(n, t)
                }
                return n
            }

            function Ia(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var n = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? Ma(n, !0).forEach(function(a) {
                        Object(L.a)(e, a, n[a])
                    }) : c.a ? l()(e, c()(n)) : Ma(n).forEach(function(a) {
                        s()(e, a, d()(n, a))
                    })
                }
                return e
            }
            var Fa = {
                    "desktop-redirect": "offline_channel"
                },
                Pa = function(e) {
                    function a(e) {
                        var n;
                        return Object(j.a)(this, a), n = Object(O.a)(this, Object(N.a)(a).call(this, e)), Object(L.a)(Object(x.a)(n), "extraMainClass", "channel-view"), Object(wa.f)(wa.a.PulsarAutoPlayErrors), Object(wa.f)(wa.a.PulsarExperimentShadow), n
                    }
                    return Object(w.a)(a, e), Object(C.a)(a, [{
                        key: "isInteractive",
                        value: function() {
                            return !!this.props.channel
                        }
                    }, {
                        key: "pageSpecificPageviewData",
                        value: function() {
                            var e = this.props.channel;
                            return e ? {
                                channel: e.login || void 0,
                                channelID: Object(La.f)(e.id) || void 0,
                                game: this.currentGame || void 0,
                                isLive: this.props.isLive
                            } : {}
                        }
                    }, {
                        key: "pageHeadData",
                        value: function() {
                            var e, a = this.props.queryVariables.login;
                            if (this.props.channel && this.props.channel.login) {
                                a = this.props.channel.login;
                                var n = this.props.channel.displayName || a,
                                    t = this.props.channel.lastBroadcast && this.props.channel.lastBroadcast.game && this.props.channel.lastBroadcast.game.displayName || void 0,
                                    r = this.props.channel.lastBroadcast && this.props.channel.lastBroadcast.title || void 0,
                                    s = this.props.channel.stream && this.props.channel.stream.height && "".concat(this.props.channel.stream.height, "p") || void 0,
                                    i = this.props.channel.stream && this.props.channel.stream.previewImageURL || void 0;
                                e = {
                                    createdAt: this.props.channel.stream && this.props.channel.stream.createdAt || void 0,
                                    displayName: n,
                                    gameName: t,
                                    preview: i,
                                    quality: s,
                                    title: r
                                }
                            }
                            return {
                                data: {
                                    channel: e,
                                    login: a,
                                    route: D.a.Channel
                                }
                            }
                        }
                    }, {
                        key: "panelArea",
                        value: function() {
                            if (!this.props.channel || !this.props.channel.login) return null;
                            var e = this.props.channel.displayName || "";
                            return Ea(Ze, {
                                id: Object(La.f)(this.props.channel.id),
                                login: this.props.channel.login
                            }, Ea(we, {
                                user: this.props.channel
                            }), Ea(_.a, {
                                hasCriticalChildren: !0
                            }, Ea(Sa, {
                                channelName: this.props.channel.displayName || this.props.channel.login
                            })), Ea(ee, {
                                country: ae,
                                control: function() {
                                    return Ea(I.a, {
                                        journey: [{
                                            channel: e,
                                            delaySecondsUntilUpsell: 60,
                                            type: T.b.Live
                                        }, {
                                            channel: e,
                                            delaySecondsUntilUpsell: 0,
                                            type: T.b.ContentGate
                                        }]
                                    })
                                },
                                treatment: function() {
                                    return null
                                },
                                experimentName: Q.b.ChannelUpsell
                            }), Ea(M.a, {
                                delaySecondsUntilTrack: 300,
                                event: T.a.FiveMinutePlay
                            }))
                        }
                    }, {
                        key: "playerParams",
                        get: function() {
                            var e = this.props.channel;
                            return e && e.id && !Object(La.g)(e.id) ? {
                                channel: e,
                                type: F.a.Stream
                            } : null
                        }
                    }, {
                        key: "channelDetails",
                        get: function() {
                            return Object(E.b)(this.props.channel)
                        }
                    }, {
                        key: "currentGame",
                        get: function() {
                            var e = this.props.channel;
                            if (!e) return null;
                            var a = e.stream && e.stream.game || e.hosting && e.hosting.stream && e.hosting.stream.game;
                            return a && a.name
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function() {
                            var e = Object(k.a)(v.a.mark(function e(n) {
                                var t;
                                return v.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(S.a)(Object(N.a)(a), "getInitialProps", this).call(this, n);
                                        case 2:
                                            return t = e.sent, e.abrupt("return", Ia({}, t, {
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
                            return function(a) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isNotFound",
                        value: function(e, a) {
                            return !y()(e).filter(function(e) {
                                return e && e.login && e.login === a.login
                            })[0]
                        }
                    }, {
                        key: "isChannelLive",
                        value: function(e, a) {
                            var n = a.login,
                                t = y()(e).filter(function(e) {
                                    return e && e.login && e.login === n
                                })[0];
                            if (t) {
                                var r = e[t.stream ? t.stream.__ref : ""];
                                if (r && r.id && !Object(La.g)(r.id)) return !0;
                                var s = e[t.hosting ? t.hosting.__ref : ""];
                                if (s && s.id && !Object(La.g)(s.id)) return !0
                            }
                            return !1
                        }
                    }, {
                        key: "afterRelay",
                        value: function(e) {
                            var n = e.context,
                                t = e.queryRecords,
                                r = e.variables,
                                s = e.hasGQLError,
                                i = Object(S.a)(Object(N.a)(a), "afterRelay", this).call(this, {
                                    context: n,
                                    hasGQLError: s,
                                    queryRecords: t,
                                    variables: r
                                }),
                                l = this.isChannelLive(t, r);
                            if (!l) {
                                var o = Ia({}, Fa, {
                                    channel: r.login
                                });
                                if (n.res) {
                                    var c = D.d.findByName(D.a.ChannelProfile).getAs(o);
                                    n.res.writeHead(Ta.a.TemporaryRedirect, {
                                        Location: c
                                    }), n.res.end(), n.res.finished = !0
                                } else D.b.pushRoute(D.a.ChannelProfile, o)
                            }
                            return Ia({}, i, {
                                isLive: l
                            })
                        }
                    }]), a
                }(_a.c);
            Object(L.a)(Pa, "displayName", "ChannelPage"), Object(L.a)(Pa, "totalCacheLife", 60), Object(L.a)(Pa, "staleWhileRevalidate", 30), Object(L.a)(Pa, "query", Na || (Na = function() {
                return n("+kWt")
            }));
            var Ua = Object(La.h)(Pa);
            n.d(a, "default", function() {
                return Ua
            })
        },
        s1So: function(e, a, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/Channel", function() {
                return n("lB50")
            }])
        },
        sVKI: function(e, a, n) {
            "use strict";
            var t, r, s = n("ERkP"),
                i = n.n(s),
                l = n("jMV1");
            ! function(e) {
                e.SecondGeneration = "2g", e.ThirdGeneration = "3g", e.FourthGeneration = "4g", e.SlowSecondGeneration = "slow-2g"
            }(t || (t = {})),
            function(e) {
                e.Bluetooth = "bluetooth", e.Cellular = "cellular", e.Ethernet = "ethernet", e.None = "none", e.WiFi = "wifi", e.WiMax = "wimax", e.Other = "other", e.Unknown = "unknown"
            }(r || (r = {}));
            n("6Pbf");

            function o() {
                return i.a.useContext(l.b)
            }
            n.d(a, "a", function() {
                return o
            })
        }
    },
    [
        ["s1So", 1, 0]
    ]
]);