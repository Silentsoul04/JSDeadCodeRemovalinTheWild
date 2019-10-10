(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [11], {
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
        "0iFB": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                    kind: "ScalarField",
                    alias: null,
                    name: "__typename",
                    args: null,
                    storageKey: null
                };
                return {
                    kind: "Fragment",
                    name: "ShelfTitle_title",
                    type: "ShelfTitle",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [{
                        kind: "ScalarField",
                        alias: null,
                        name: "key",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "fallbackLocalizedTitle",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "localizedTitleTokens",
                        storageKey: null,
                        args: null,
                        concreteType: "TitleTokenEdge",
                        plural: !0,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "node",
                            storageKey: null,
                            args: null,
                            concreteType: null,
                            plural: !1,
                            selections: [{
                                kind: "InlineFragment",
                                type: "TextToken",
                                selections: [e, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "text",
                                    args: null,
                                    storageKey: null
                                }, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "hasEmphasis",
                                    args: null,
                                    storageKey: null
                                }, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "location",
                                    args: null,
                                    storageKey: null
                                }]
                            }, {
                                kind: "InlineFragment",
                                type: "Game",
                                selections: [e, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "id",
                                    args: null,
                                    storageKey: null
                                }, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "name",
                                    args: null,
                                    storageKey: null
                                }, {
                                    kind: "ScalarField",
                                    alias: null,
                                    name: "displayName",
                                    args: null,
                                    storageKey: null
                                }]
                            }]
                        }]
                    }]
                }
            }();
            a.hash = "bf3305c4123438fcc264007ecdd4c994", t.default = a
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
        "1ucA": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                kind: "Fragment",
                name: "GameList_query",
                type: "Query",
                metadata: null,
                argumentDefinitions: [{
                    kind: "RootArgument",
                    name: "gamesCount",
                    type: "Int"
                }, {
                    kind: "RootArgument",
                    name: "cursor",
                    type: "Cursor"
                }],
                selections: [{
                    kind: "LinkedField",
                    alias: null,
                    name: "games",
                    storageKey: null,
                    args: [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor",
                        type: "Cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "gamesCount",
                        type: "Int"
                    }],
                    concreteType: "GameConnection",
                    plural: !1,
                    selections: [{
                        kind: "LinkedField",
                        alias: null,
                        name: "edges",
                        storageKey: null,
                        args: null,
                        concreteType: "GameEdge",
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
                            concreteType: "Game",
                            plural: !1,
                            selections: [{
                                kind: "FragmentSpread",
                                name: "GameCard_game",
                                args: null
                            }]
                        }]
                    }]
                }],
                hash: "1c2b923f537f74dc894597650ad2f6c5"
            };
            t.default = a
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
        "99f3": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        kind: "LocalArgument",
                        name: "gamesCount",
                        type: "Int!",
                        defaultValue: null
                    }, {
                        kind: "LocalArgument",
                        name: "cursor",
                        type: "Cursor",
                        defaultValue: null
                    }, {
                        kind: "LocalArgument",
                        name: "requestID",
                        type: "String!",
                        defaultValue: null
                    }, {
                        kind: "LocalArgument",
                        name: "platform",
                        type: "String!",
                        defaultValue: null
                    }, {
                        kind: "LocalArgument",
                        name: "limit",
                        type: "Int!",
                        defaultValue: null
                    }, {
                        kind: "LocalArgument",
                        name: "itemsPerRow",
                        type: "Int!",
                        defaultValue: null
                    }],
                    t = {
                        kind: "ScalarField",
                        alias: null,
                        name: "name",
                        args: null,
                        storageKey: null
                    },
                    n = {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    },
                    a = {
                        kind: "ScalarField",
                        alias: null,
                        name: "viewersCount",
                        args: null,
                        storageKey: null
                    },
                    r = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    },
                    i = [t, n, a, {
                        kind: "ScalarField",
                        alias: null,
                        name: "boxArtURL",
                        args: null,
                        storageKey: null
                    }, r],
                    l = {
                        kind: "ScalarField",
                        alias: null,
                        name: "__typename",
                        args: null,
                        storageKey: null
                    },
                    s = [r];
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "Homepage_Query",
                    id: null,
                    text: "query Homepage_Query(\n  $gamesCount: Int!\n  $cursor: Cursor\n  $requestID: String!\n  $platform: String!\n  $limit: Int!\n  $itemsPerRow: Int!\n) {\n  ...GameList_query\n  ...RecommendationShelves_query\n}\n\nfragment GameList_query on Query {\n  games(first: $gamesCount, after: $cursor) {\n    edges {\n      cursor\n      node {\n        ...GameCard_game\n        id\n      }\n    }\n  }\n}\n\nfragment RecommendationShelves_query on Query {\n  shelves(requestID: $requestID, platform: $platform, first: $limit, itemsPerRow: $itemsPerRow) {\n    edges {\n      node {\n        ...ShelfContainer_shelf\n        id\n      }\n    }\n  }\n}\n\nfragment ShelfContainer_shelf on Shelf {\n  __typename\n  id\n  title {\n    ...ShelfTitle_title\n  }\n  content {\n    __typename\n    edges {\n      __typename\n      trackingID\n      node {\n        __typename\n        ... on Game {\n          __typename\n          ...GameCard_game\n          id\n        }\n        ... on Stream {\n          __typename\n          ...StreamCard_stream\n          id\n        }\n        ... on Clip {\n          id\n        }\n        ... on Video {\n          id\n        }\n      }\n    }\n  }\n  trackingInfo {\n    __typename\n    rowName\n    reasonType\n    reasonTarget\n    reasonTargetType\n  }\n}\n\nfragment ShelfTitle_title on ShelfTitle {\n  key\n  fallbackLocalizedTitle\n  localizedTitleTokens {\n    node {\n      __typename\n      ... on Game {\n        __typename\n        id\n        name\n        displayName\n      }\n      ... on TextToken {\n        __typename\n        text\n        hasEmphasis\n        location\n      }\n      ... on User {\n        id\n      }\n    }\n  }\n}\n\nfragment GameCard_game on Game {\n  name\n  displayName\n  viewersCount\n  boxArtURL\n}\n\nfragment StreamCard_stream on Stream {\n  id\n  viewersCount\n  previewImageURL\n  type\n  title\n  game {\n    id\n    name\n  }\n  broadcaster {\n    id\n    login\n    displayName\n    profileImageURL(width: 50)\n    hosting {\n      id\n    }\n  }\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "Homepage_Query",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "FragmentSpread",
                            name: "GameList_query",
                            args: null
                        }, {
                            kind: "FragmentSpread",
                            name: "RecommendationShelves_query",
                            args: null
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "Homepage_Query",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "games",
                            storageKey: null,
                            args: [{
                                kind: "Variable",
                                name: "after",
                                variableName: "cursor",
                                type: "Cursor"
                            }, {
                                kind: "Variable",
                                name: "first",
                                variableName: "gamesCount",
                                type: "Int"
                            }],
                            concreteType: "GameConnection",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "edges",
                                storageKey: null,
                                args: null,
                                concreteType: "GameEdge",
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
                                    concreteType: "Game",
                                    plural: !1,
                                    selections: i
                                }]
                            }]
                        }, {
                            kind: "LinkedField",
                            alias: null,
                            name: "shelves",
                            storageKey: null,
                            args: [{
                                kind: "Variable",
                                name: "first",
                                variableName: "limit",
                                type: "Int"
                            }, {
                                kind: "Variable",
                                name: "itemsPerRow",
                                variableName: "itemsPerRow",
                                type: "Int"
                            }, {
                                kind: "Variable",
                                name: "platform",
                                variableName: "platform",
                                type: "String!"
                            }, {
                                kind: "Variable",
                                name: "requestID",
                                variableName: "requestID",
                                type: "String!"
                            }],
                            concreteType: "ShelfConnection",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "edges",
                                storageKey: null,
                                args: null,
                                concreteType: "ShelfEdge",
                                plural: !0,
                                selections: [{
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "node",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Shelf",
                                    plural: !1,
                                    selections: [l, r, {
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "title",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "ShelfTitle",
                                        plural: !1,
                                        selections: [{
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "key",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "fallbackLocalizedTitle",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "LinkedField",
                                            alias: null,
                                            name: "localizedTitleTokens",
                                            storageKey: null,
                                            args: null,
                                            concreteType: "TitleTokenEdge",
                                            plural: !0,
                                            selections: [{
                                                kind: "LinkedField",
                                                alias: null,
                                                name: "node",
                                                storageKey: null,
                                                args: null,
                                                concreteType: null,
                                                plural: !1,
                                                selections: [l, {
                                                    kind: "InlineFragment",
                                                    type: "User",
                                                    selections: s
                                                }, {
                                                    kind: "InlineFragment",
                                                    type: "TextToken",
                                                    selections: [l, {
                                                        kind: "ScalarField",
                                                        alias: null,
                                                        name: "text",
                                                        args: null,
                                                        storageKey: null
                                                    }, {
                                                        kind: "ScalarField",
                                                        alias: null,
                                                        name: "hasEmphasis",
                                                        args: null,
                                                        storageKey: null
                                                    }, {
                                                        kind: "ScalarField",
                                                        alias: null,
                                                        name: "location",
                                                        args: null,
                                                        storageKey: null
                                                    }]
                                                }, {
                                                    kind: "InlineFragment",
                                                    type: "Game",
                                                    selections: [l, r, t, n]
                                                }]
                                            }]
                                        }]
                                    }, {
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "content",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "ShelfContentConnection",
                                        plural: !1,
                                        selections: [l, {
                                            kind: "LinkedField",
                                            alias: null,
                                            name: "edges",
                                            storageKey: null,
                                            args: null,
                                            concreteType: "ShelfContentEdge",
                                            plural: !0,
                                            selections: [l, {
                                                kind: "ScalarField",
                                                alias: null,
                                                name: "trackingID",
                                                args: null,
                                                storageKey: null
                                            }, {
                                                kind: "LinkedField",
                                                alias: null,
                                                name: "node",
                                                storageKey: null,
                                                args: null,
                                                concreteType: null,
                                                plural: !1,
                                                selections: [l, {
                                                    kind: "InlineFragment",
                                                    type: "Video",
                                                    selections: s
                                                }, {
                                                    kind: "InlineFragment",
                                                    type: "Clip",
                                                    selections: s
                                                }, {
                                                    kind: "InlineFragment",
                                                    type: "Stream",
                                                    selections: [r, a, {
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
                                                        selections: [r, t]
                                                    }, {
                                                        kind: "LinkedField",
                                                        alias: null,
                                                        name: "broadcaster",
                                                        storageKey: null,
                                                        args: null,
                                                        concreteType: "User",
                                                        plural: !1,
                                                        selections: [r, {
                                                            kind: "ScalarField",
                                                            alias: null,
                                                            name: "login",
                                                            args: null,
                                                            storageKey: null
                                                        }, n, {
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
                                                            selections: s
                                                        }]
                                                    }]
                                                }, {
                                                    kind: "InlineFragment",
                                                    type: "Game",
                                                    selections: i
                                                }]
                                            }]
                                        }]
                                    }, {
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "trackingInfo",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "TrackingInfo",
                                        plural: !1,
                                        selections: [l, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "rowName",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "reasonType",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "reasonTarget",
                                            args: null,
                                            storageKey: null
                                        }, {
                                            kind: "ScalarField",
                                            alias: null,
                                            name: "reasonTargetType",
                                            args: null,
                                            storageKey: null
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }();
            a.hash = "e0eb928992557201cad49c8bb8f8d2a4", t.default = a
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
                k = n("/SJ4"),
                w = n("q5o0"),
                S = n.n(w),
                O = n("EIzr"),
                F = n("yFcC").default,
                C = n("bRbd").default,
                T = n("8m3w").default;

            function j() {
                return u.createElement(u.Fragment, null, u.createElement(F, {
                    id: "tw-channel-status-indicator"
                }, C), u.createElement(F, {
                    id: "tw-inject-layout"
                }, T))
            }
            var E = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return S()(t, e), t.prototype.render = function() {
                    return u.createElement(u.Fragment, null, u.createElement(k.a, this.props), u.createElement(j, null))
                }, t
            }(O.a);
            E.displayName = "ChannelStatusIndicator";
            var _, z, x = n("S2yq");

            function R(e, t) {
                if (t) return _.Hosting;
                if (e) switch (e) {
                    case "live":
                        return _.Live;
                    case "premiere":
                        return _.Premiere;
                    case "watch_party":
                    case "rerun":
                        return _.Rerun;
                    default:
                        return
                }
            }! function(e) {
                e.Live = "live", e.Premiere = "premiere", e.Rerun = "rerun", e.Hosting = "hosting"
            }(_ || (_ = {})), n.d(t, "a", function() {
                return K
            }), n.d(t, "b", function() {
                return R
            });
            var I = d.a.createElement,
                L = (z = {}, Object(c.a)(z, _.Premiere, {
                    asset: p.a.VideoPremiere,
                    fill: !0
                }), Object(c.a)(z, _.Rerun, {
                    asset: p.a.VideoRerun,
                    fill: !1
                }), z),
                P = function(e) {
                    function t() {
                        return Object(r.a)(this, t), Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(o.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return I(f.a, {
                                color: this.props.isOverlay ? h.c.Overlay : h.c.Base,
                                background: this.props.isOverlay ? h.a.Overlay : h.a.Base,
                                padding: {
                                    x: .5
                                },
                                borderRadius: h.b.Small,
                                display: g.d.Flex
                            }, I(y.a, {
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
                                case _.Live:
                                    t = e("LIVE", "streamTypeIndicator");
                                    break;
                                case _.Premiere:
                                    t = e("Premiere", "streamTypeIndicator");
                                    break;
                                case _.Rerun:
                                    t = e("Rerun", "streamTypeIndicator");
                                    break;
                                case _.Hosting:
                                    t = e("HOSTING", "streamTypeIndicator")
                            }
                            return !!t && I(v.a, {
                                type: b.e.Span
                            }, t)
                        }
                    }, {
                        key: "icon",
                        get: function() {
                            var e;
                            return this.props.indicatorType === _.Live ? e = k.c.Live : this.props.indicatorType === _.Hosting && (e = k.c.Hosting), e ? I(y.a, {
                                display: g.d.Flex,
                                alignItems: g.b.Center
                            }, I(E, {
                                status: e,
                                size: k.b.Small,
                                pulse: this.props.isPulsing
                            })) : this.props.indicatorType && I(x.a, Object(a.a)({}, L[this.props.indicatorType], {
                                width: 14,
                                height: 14
                            }))
                        }
                    }]), t
                }(d.a.PureComponent),
                K = Object(m.a)(P)
        },
        AITX: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                    kind: "LocalArgument",
                    name: "gamesCount",
                    type: "Int!",
                    defaultValue: null
                }, {
                    kind: "LocalArgument",
                    name: "cursor",
                    type: "Cursor",
                    defaultValue: null
                }];
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "GameList_RefetchQuery",
                    id: null,
                    text: "query GameList_RefetchQuery(\n  $gamesCount: Int!\n  $cursor: Cursor\n) {\n  ...GameList_query\n}\n\nfragment GameList_query on Query {\n  games(first: $gamesCount, after: $cursor) {\n    edges {\n      cursor\n      node {\n        ...GameCard_game\n        id\n      }\n    }\n  }\n}\n\nfragment GameCard_game on Game {\n  name\n  displayName\n  viewersCount\n  boxArtURL\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "GameList_RefetchQuery",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "FragmentSpread",
                            name: "GameList_query",
                            args: null
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "GameList_RefetchQuery",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "games",
                            storageKey: null,
                            args: [{
                                kind: "Variable",
                                name: "after",
                                variableName: "cursor",
                                type: "Cursor"
                            }, {
                                kind: "Variable",
                                name: "first",
                                variableName: "gamesCount",
                                type: "Int"
                            }],
                            concreteType: "GameConnection",
                            plural: !1,
                            selections: [{
                                kind: "LinkedField",
                                alias: null,
                                name: "edges",
                                storageKey: null,
                                args: null,
                                concreteType: "GameEdge",
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
                                    concreteType: "Game",
                                    plural: !1,
                                    selections: [{
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "name",
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
                                        name: "viewersCount",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "boxArtURL",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "id",
                                        args: null,
                                        storageKey: null
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }();
            a.hash = "d4ce725257fca716d57f43d030a4f179", t.default = a
        },
        BDaT: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                kind: "Fragment",
                name: "GameCard_game",
                type: "Game",
                metadata: null,
                argumentDefinitions: [],
                selections: [{
                    kind: "ScalarField",
                    alias: null,
                    name: "name",
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
                    name: "viewersCount",
                    args: null,
                    storageKey: null
                }, {
                    kind: "ScalarField",
                    alias: null,
                    name: "boxArtURL",
                    args: null,
                    storageKey: null
                }],
                hash: "8391ff55e3c923824439ba539d4391d1"
            };
            t.default = a
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
        "Dw+o": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                kind: "Fragment",
                name: "RecommendationShelves_query",
                type: "Query",
                metadata: null,
                argumentDefinitions: [{
                    kind: "RootArgument",
                    name: "requestID",
                    type: "String!"
                }, {
                    kind: "RootArgument",
                    name: "platform",
                    type: "String!"
                }, {
                    kind: "RootArgument",
                    name: "limit",
                    type: "Int"
                }, {
                    kind: "RootArgument",
                    name: "itemsPerRow",
                    type: "Int"
                }],
                selections: [{
                    kind: "LinkedField",
                    alias: null,
                    name: "shelves",
                    storageKey: null,
                    args: [{
                        kind: "Variable",
                        name: "first",
                        variableName: "limit",
                        type: "Int"
                    }, {
                        kind: "Variable",
                        name: "itemsPerRow",
                        variableName: "itemsPerRow",
                        type: "Int"
                    }, {
                        kind: "Variable",
                        name: "platform",
                        variableName: "platform",
                        type: "String!"
                    }, {
                        kind: "Variable",
                        name: "requestID",
                        variableName: "requestID",
                        type: "String!"
                    }],
                    concreteType: "ShelfConnection",
                    plural: !1,
                    selections: [{
                        kind: "LinkedField",
                        alias: null,
                        name: "edges",
                        storageKey: null,
                        args: null,
                        concreteType: "ShelfEdge",
                        plural: !0,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "node",
                            storageKey: null,
                            args: null,
                            concreteType: "Shelf",
                            plural: !1,
                            selections: [{
                                kind: "FragmentSpread",
                                name: "ShelfContainer_shelf",
                                args: null
                            }]
                        }]
                    }]
                }],
                hash: "8df4bb84c1f6b07e1ac85422854183b3"
            };
            t.default = a
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
        RkoE: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                    kind: "ScalarField",
                    alias: null,
                    name: "__typename",
                    args: null,
                    storageKey: null
                };
                return {
                    kind: "Fragment",
                    name: "ShelfContainer_shelf",
                    type: "Shelf",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [e, {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "title",
                        storageKey: null,
                        args: null,
                        concreteType: "ShelfTitle",
                        plural: !1,
                        selections: [{
                            kind: "FragmentSpread",
                            name: "ShelfTitle_title",
                            args: null
                        }]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "content",
                        storageKey: null,
                        args: null,
                        concreteType: "ShelfContentConnection",
                        plural: !1,
                        selections: [e, {
                            kind: "LinkedField",
                            alias: null,
                            name: "edges",
                            storageKey: null,
                            args: null,
                            concreteType: "ShelfContentEdge",
                            plural: !0,
                            selections: [e, {
                                kind: "ScalarField",
                                alias: null,
                                name: "trackingID",
                                args: null,
                                storageKey: null
                            }, {
                                kind: "LinkedField",
                                alias: null,
                                name: "node",
                                storageKey: null,
                                args: null,
                                concreteType: null,
                                plural: !1,
                                selections: [e, {
                                    kind: "InlineFragment",
                                    type: "Stream",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: "StreamCard_stream",
                                        args: null
                                    }]
                                }, {
                                    kind: "InlineFragment",
                                    type: "Game",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: "GameCard_game",
                                        args: null
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "trackingInfo",
                        storageKey: null,
                        args: null,
                        concreteType: "TrackingInfo",
                        plural: !1,
                        selections: [e, {
                            kind: "ScalarField",
                            alias: null,
                            name: "rowName",
                            args: null,
                            storageKey: null
                        }, {
                            kind: "ScalarField",
                            alias: null,
                            name: "reasonType",
                            args: null,
                            storageKey: null
                        }, {
                            kind: "ScalarField",
                            alias: null,
                            name: "reasonTarget",
                            args: null,
                            storageKey: null
                        }, {
                            kind: "ScalarField",
                            alias: null,
                            name: "reasonTargetType",
                            args: null,
                            storageKey: null
                        }]
                    }]
                }
            }();
            a.hash = "bf19cec1be37e765fcd129736f037aef", t.default = a
        },
        VVbc: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return x
            }), n.d(t, "b", function() {
                return I
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
                k = n("5vmN"),
                w = n("cQFw"),
                S = n("k3nD"),
                O = n("wtJr"),
                F = n("vlJ8"),
                C = n("He6c"),
                T = n("iJNm"),
                j = n("wRUM"),
                E = n("zkRB"),
                _ = n("zqif"),
                z = p.a.createElement,
                x = 67,
                R = function(e) {
                    function t() {
                        return Object(r.a)(this, t), Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(o.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl,
                                t = e.formatMessage,
                                n = e.formatNumberShort;
                            if (!this.props.stream.broadcaster || !this.props.stream.broadcaster.login) return z("div", null);
                            var r = n(this.props.stream.viewersCount || 0, {
                                    maximumSignificantDigits: 3
                                }),
                                i = !!this.props.stream.broadcaster.hosting && !!this.props.stream.broadcaster.hosting.id;
                            return z(v.a, {
                                linkTo: h.a.Channel,
                                params: {
                                    channel: this.props.stream.broadcaster.login
                                },
                                className: "channel-thumbnail-card",
                                interactionContent: this.props.interactionContent
                            }, z(b.a, {
                                background: k.a.Base,
                                elevation: 1
                            }, z(w.a, {
                                className: "channel-thumbnail-card__preview"
                            }, z(S.a, Object(a.a)({}, Object(O.f)(this.props.stream.previewImageURL || "https://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg"), {
                                alt: "thumbnail for ".concat(this.props.stream.broadcaster.login),
                                aspect: F.c.Aspect16x9,
                                key: this.props.stream.broadcaster.login,
                                sizes: this.props.srcSetSizes,
                                isLatencyCritical: this.props.isLatencyCritical
                            }), z(w.a, {
                                className: "channel-thumbnail-card__preview__viewers"
                            }, t("{viewersCount} viewers", {
                                viewersCount: r
                            }, "StreamCard")), z(w.a, {
                                className: "channel-thumbnail-card__preview__type"
                            }, z(d.a, {
                                indicatorType: Object(d.b)(this.props.stream.type, i),
                                isOverlay: !0,
                                isPulsing: !1
                            })))), z(C.a, null, z(w.a, {
                                padding: {
                                    x: 1
                                },
                                overflow: T.i.Hidden,
                                display: T.d.Flex,
                                className: "channel-thumbnail-card__info"
                            }, z(w.a, {
                                flexShrink: 0,
                                margin: {
                                    top: 1
                                }
                            }, z(j.a, {
                                alt: "avatar for ".concat(this.props.stream.broadcaster.login),
                                size: 36,
                                src: this.props.stream.broadcaster.profileImageURL
                            })), z(w.a, {
                                margin: {
                                    left: 1,
                                    y: .5
                                },
                                ellipsis: !0,
                                flexShrink: 2
                            }, z(E.a, {
                                fontSize: k.d.Size5,
                                bold: !0,
                                color: k.c.Base,
                                ellipsis: !0
                            }, this.props.stream.title), z(E.a, {
                                color: k.c.Alt,
                                ellipsis: !0,
                                fontSize: k.d.Size6
                            }, Object(_.a)(this.props.stream.broadcaster)), z(E.a, {
                                color: k.c.Alt2,
                                ellipsis: !0,
                                fontSize: k.d.Size6
                            }, this.props.stream.game && this.props.stream.game.name))))), z(u.a, {
                                id: "2005384020"
                            }, [".channel-thumbnail-card .channel-thumbnail-card__info{height:".concat(x, "px;}"), ".channel-thumbnail-card .channel-thumbnail-card__preview__viewers{color:#fafafa;position:absolute;bottom:7.3rem;left:1rem;}", ".channel-thumbnail-card .channel-thumbnail-card__preview .tw-aspect{position:relative;}", ".channel-thumbnail-card .channel-thumbnail-card__preview .tw-aspect::after{content:'';background:linear-gradient(to top,#15052e,transparent);height:3.3rem;position:absolute;bottom:0;left:0;right:0;}", ".channel-thumbnail-card .channel-thumbnail-card__preview__type{color:#fafafa;position:absolute;top:1rem;left:1rem;}"]))
                        }
                    }]), t
                }(p.a.Component),
                I = Object(f.createFragmentContainer)(Object(g.a)(Object(y.a)(R)), {
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
        "a/nN": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/Homepage", function() {
                return n("mE5d")
            }])
        },
        bRbd: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-channel-status-indicator,.tw-root--theme-dark .tw-channel-status-indicator,.tw-root--theme-dark .tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator,.tw-root--theme-light .tw-channel-status-indicator--pulse::after{background:#e91916}.tw-channel-status-indicator{border-radius:50%}.tw-channel-status-indicator--small,.tw-channel-status-indicator--small::after{width:.8rem;height:.8rem}.tw-channel-status-indicator--medium,.tw-channel-status-indicator--medium::after{width:1.2rem;height:1.2rem}.tw-channel-status-indicator--large,.tw-channel-status-indicator--large::after{width:1.6rem;height:1.6rem}.tw-channel-status-indicator--pulse::after{background:#e91916;position:absolute;top:0;left:0;border-radius:50%;content:'';opacity:.2;animation:1.5s ease-out infinite tw-channel-status-indicator--pulse}.tw-root--theme-dark .tw-channel-status-indicator--offline,.tw-root--theme-dark .tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after{background:#686878}.tw-channel-status-indicator--offline{background:#a0a0ac}.tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator--offline{background:#a0a0ac}.tw-root--theme-light .tw-channel-status-indicator--offline.tw-channel-status-indicator--pulse::after{background:#a0a0ac}.tw-channel-status-indicator--hosting,.tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after,.tw-root--theme-dark .tw-channel-status-indicator--hosting,.tw-root--theme-dark .tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after,.tw-root--theme-light .tw-channel-status-indicator--hosting,.tw-root--theme-light .tw-channel-status-indicator--hosting.tw-channel-status-indicator--pulse::after{background:#ffbf00}@keyframes tw-channel-status-indicator--pulse{0%{transform:scale3d(1,1,1);opacity:.2}100%{transform:scale3d(4,4,4);opacity:0}}\n"
        },
        fMXQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return D
            });
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
                h = n("h7sq"),
                g = n("tS02"),
                y = n("/XES"),
                v = n("ztBH"),
                b = n("vTWr"),
                k = n("Fayl"),
                w = n("znL5"),
                S = n("yFcC"),
                O = n.n(S),
                F = n("1k+N"),
                C = n("KmwA"),
                T = n("zlVm"),
                j = n("ERkP"),
                E = n.n(j),
                _ = n("pnpS"),
                z = n("Vp5C"),
                x = n("yyOJ"),
                R = n("7vVX"),
                I = n("wtJr"),
                L = n("WIFU"),
                P = n("nZ6Q"),
                K = E.a.createElement;

            function N(e, t) {
                var n = f()(e);
                if (m.a) {
                    var a = m()(e);
                    t && (a = a.filter(function(t) {
                        return u()(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }
            var G = [{
                    mediaCondition: "(max-width: 540px) and (orientation: portrait)",
                    size: "47vw"
                }, {
                    size: "24vw"
                }],
                A = function(e) {
                    function t(e) {
                        var n;
                        return Object(h.a)(this, t), n = Object(y.a)(this, Object(v.a)(t).call(this, e)), Object(w.a)(Object(b.a)(n), "state", {
                            endCursor: null,
                            gameIds: [],
                            games: [],
                            noMoreGames: !1
                        }), Object(w.a)(Object(b.a)(n), "criticalImageCount", void 0), Object(w.a)(Object(b.a)(n), "itemRenderer", function(e, t) {
                            return K(T.b, {
                                key: t,
                                isLatencyCritical: e < n.criticalImageCount,
                                game: n.state.games[e],
                                srcSetSizes: G,
                                position: e
                            })
                        }), Object(w.a)(Object(b.a)(n), "getRefetchVariables", function(e) {
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? N(n, !0).forEach(function(t) {
                                        Object(w.a)(e, t, n[t])
                                    }) : o.a ? l()(e, o()(n)) : N(n).forEach(function(t) {
                                        r()(e, t, u()(n, t))
                                    })
                                }
                                return e
                            }({}, e, {
                                cursor: n.state.endCursor,
                                gamesCount: 3 * x.GAMES_PAGE_SIZE
                            })
                        }), Object(w.a)(Object(b.a)(n), "loadMore", function() {
                            n.state.noMoreGames || n.props.relay.refetch(n.getRefetchVariables)
                        }), n.criticalImageCount = Math.min(Object(L.b)({
                            aspectRatio: I.a,
                            heightFudge: T.a,
                            imageType: L.a.BoxArt,
                            topNavHeight: C.a
                        }), x.GAMES_PAGE_SIZE), n
                    }
                    return Object(k.a)(t, e), Object(g.a)(t, [{
                        key: "render",
                        value: function() {
                            return K(z.a, {
                                value: "game_list"
                            }, K(F.a, {
                                className: "game-list",
                                itemRenderer: this.itemRenderer,
                                length: this.state.games.length,
                                loadMore: this.loadMore,
                                pageSize: x.GAMES_PAGE_SIZE
                            }), K(O.a, {
                                id: "2649554984"
                            }, [".game-list{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:wrap row;-ms-flex-flow:wrap row;flex-flow:wrap row;padding:0.5vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.005);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.005);width:100%;}", "@media (max-width:540px) and (orientation:portrait){.game-list{padding:1vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.01);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01);}}", ".game-list .box-art-card{padding:0.5vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.005);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.005);width:24.75vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.2475);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.2475);}", "@media (max-width:540px) and (orientation:portrait){.game-list .box-art-card{padding:1vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.01);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01);width:49vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.49);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.49);}}"]))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            if (!e.query.games || !e.query.games.edges) return {
                                noMoreGames: !0
                            };
                            var n = Object(P.b)(e.query.games.edges),
                                a = n.endCursor,
                                r = n.nodes;
                            if (t.endCursor === a) return null;
                            if (0 === r.length) return {
                                noMoreGames: !0
                            };
                            var i = r.reduce(function(e, n) {
                                var a = n.__id;
                                return a === Object(R.c)("0") || t.gameIds.includes(a) || (e.ids.push(a), e.games.push(n)), e
                            }, {
                                games: [],
                                ids: []
                            });
                            return {
                                endCursor: a,
                                gameIds: t.gameIds.concat(i.ids),
                                games: t.games.concat(i.games)
                            }
                        }
                    }]), t
                }(E.a.Component),
                D = Object(_.createRefetchContainer)(A, {
                    query: function() {
                        return n("1ucA")
                    }
                }, function() {
                    return n("AITX")
                })
        },
        mE5d: function(e, t, n) {
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
                k = n("/XES"),
                w = n("ztBH"),
                S = n("amHM"),
                O = n("Fayl"),
                F = n("znL5"),
                C = n("ERkP"),
                T = n.n(C),
                j = n("HIP8"),
                E = n("d6po"),
                _ = n("KmwA"),
                z = n("7vVX"),
                x = n("yyOJ"),
                R = n("mSvS"),
                I = n("Li7b"),
                L = n("mTKR"),
                P = n("pnpS"),
                K = n("zkRB"),
                N = n("Bq/2"),
                G = n("/SwW"),
                A = n("ivAS"),
                D = n("1nou"),
                M = n("5vmN"),
                q = n("C0xX"),
                V = n("iJNm"),
                B = n("CmdM"),
                H = n("bfSB"),
                U = n("yFcC"),
                Q = n.n(U),
                W = n("VVbc"),
                X = n("zlVm"),
                J = n("vTWr"),
                $ = n("B8T3"),
                Z = T.a.createElement,
                Y = function(e) {
                    function t() {
                        var e, n;
                        Object(v.a)(this, t);
                        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                        return n = Object(k.a)(this, (e = Object(w.a)(t)).call.apply(e, [this].concat(r))), Object(F.a)(Object(J.a)(n), "renderLinkFromTitle", function(e, t, a) {
                            return Z($.a, {
                                key: e,
                                onClick: n.trackTitleClick,
                                linkTo: t,
                                params: a
                            }, Z(K.a, {
                                bold: !0,
                                type: D.e.Span,
                                fontSize: M.d.Size5,
                                breakpointMedium: {
                                    fontSize: M.d.Size3
                                }
                            }, e))
                        }), Object(F.a)(Object(J.a)(n), "trackTitleClick", function() {}), n
                    }
                    return Object(O.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.title,
                                n = t.localizedTitleTokens.map(function(t) {
                                    return e.parseTitleToken(t)
                                });
                            return n.some(function(e) {
                                return !e
                            }) || 0 === n.length ? Z(K.a, {
                                key: t.key,
                                type: D.e.Span,
                                fontSize: M.d.Size5,
                                breakpointMedium: {
                                    fontSize: M.d.Size3
                                }
                            }, t.fallbackLocalizedTitle) : Z(T.a.Fragment, null, n)
                        }
                    }, {
                        key: "parseTitleToken",
                        value: function(e) {
                            var t = e && e.node;
                            return t ? "Game" === t.__typename ? this.renderLinkFromTitle(t.displayName, j.a.GameDirectory, {
                                game: t.displayName
                            }) : "TextToken" === t.__typename ? "CATEGORIES_DIRECTORY" === t.location ? this.renderLinkFromTitle(t.text, j.a.GamesDirectory) : "STREAMS_DIRECTORY" === t.location ? this.renderLinkFromTitle(t.text, j.a.GameDirectoryAll) : Z(K.a, {
                                key: t.text,
                                type: D.e.Span,
                                bold: t.hasEmphasis,
                                fontSize: M.d.Size5,
                                breakpointMedium: {
                                    fontSize: M.d.Size3
                                }
                            }, t.text) : null : null
                        }
                    }]), t
                }(T.a.Component);
            Object(F.a)(Y, "displayName", "ShelfTitle");
            var ee = Object(P.createFragmentContainer)(Y, {
                    title: function() {
                        return n("0iFB")
                    }
                }),
                te = T.a.createElement,
                ne = [{
                    size: "39.5vw"
                }, {
                    mediaCondition: "(max-width: 540px) and (orientation: portrait)",
                    size: "65vw"
                }, {
                    mediaCondition: "(min-width: 768px) and (orientation: landscape)",
                    size: "26vw"
                }],
                ae = [{
                    size: "27vw"
                }, {
                    mediaCondition: "(max-width: 540px) and (orientation: portrait)",
                    size: "36vw"
                }, {
                    mediaCondition: "(min-width: 768px) and (orientation: landscape)",
                    size: "20vw"
                }],
                re = function(e) {
                    function t() {
                        return Object(v.a)(this, t), Object(k.a)(this, Object(w.a)(t).apply(this, arguments))
                    }
                    return Object(O.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            return this.props.shelf.content.edges ? te(A.a, {
                                margin: {
                                    y: 1
                                }
                            }, te(A.a, {
                                margin: {
                                    bottom: .5,
                                    left: 2
                                }
                            }, te(ee, {
                                title: this.props.shelf.title
                            })), te(A.a, {
                                display: V.d.Flex,
                                overflow: V.i.Scroll,
                                className: "shelf-container"
                            }, this.renderShelfItems(), te(Q.a, {
                                id: "2417415243"
                            }, [".shelf-container .channel-thumbnail-card__preview,.shelf-container .channel-thumbnail-card>div{width:39.5vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.395);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.395);}", "@media (max-width:540px) and (orientation:portrait){.shelf-container .channel-thumbnail-card__preview,.shelf-container .channel-thumbnail-card>div{width:65vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.65);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.65);}}", "@media (min-width:768px) and (orientation:landscape){.shelf-container .channel-thumbnail-card__preview,.shelf-container .channel-thumbnail-card>div{width:26vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.26);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.26);}}", ".shelf-container .box-art-card>div{width:27vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.27);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.27);}", "@media (max-width:540px) and (orientation:portrait){.shelf-container .box-art-card>div{width:36vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.36);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.36);}}", "@media (min-width:768px) and (orientation:landscape){.shelf-container .box-art-card>div{width:20vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.2);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.2);}}"]))) : null
                        }
                    }, {
                        key: "renderShelfItems",
                        value: function() {
                            var e = this.props.shelf.content.edges;
                            return e ? e.filter(function(e) {
                                return !!e.node
                            }).slice(0).map(function(t, n) {
                                var a, r = t.node && t.node.__typename;
                                return t.node && "%other" !== r ? (a = 0 === n ? {
                                    left: 2,
                                    right: .5
                                } : n === e.length - 1 ? {
                                    left: .5,
                                    right: 2
                                } : {
                                    x: .5
                                }, t.node && "Stream" === t.node.__typename ? te(A.a, {
                                    padding: a,
                                    key: n
                                }, te(W.b, {
                                    stream: t.node,
                                    srcSetSizes: ne,
                                    position: n,
                                    isLatencyCritical: !0
                                })) : t.node && "Game" === t.node.__typename ? te(A.a, {
                                    padding: a,
                                    key: n
                                }, te(X.b, {
                                    key: n,
                                    isLatencyCritical: !0,
                                    game: t.node,
                                    srcSetSizes: ae,
                                    position: n
                                })) : null) : null
                            }) : null
                        }
                    }]), t
                }(T.a.Component);
            Object(F.a)(re, "displayName", "Shelf");
            var ie, le = Object(P.createFragmentContainer)(re, {
                    shelf: function() {
                        return n("RkoE")
                    }
                }),
                se = T.a.createElement,
                oe = function(e) {
                    function t() {
                        return Object(v.a)(this, t), Object(k.a)(this, Object(w.a)(t).apply(this, arguments))
                    }
                    return Object(O.a)(t, e), Object(b.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.query.shelves && this.props.query.shelves.edges;
                            if (!e || 0 === e.length) return this.renderError();
                            var t = this.props.intl.formatMessage;
                            return se(A.a, {
                                padding: {
                                    top: 1
                                }
                            }, se(A.a, {
                                margin: {
                                    left: 1
                                },
                                padding: {
                                    left: .5
                                }
                            }, se(K.a, {
                                type: D.e.H2,
                                breakpointMedium: {
                                    fontSize: M.d.Size1
                                },
                                bold: !0
                            }, t("Welcome to Twitch!", "RecommendationShelves"))), e.map(function(e, t) {
                                return se(A.a, {
                                    key: t
                                }, se(le, {
                                    shelf: e.node
                                }))
                            }))
                        }
                    }, {
                        key: "renderError",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return se(q.a, {
                                textAlign: V.l.Center,
                                fullWidth: !0,
                                fullHeight: !0,
                                padding: {
                                    top: 2
                                }
                            }, se(B.a, {
                                asset: H.a.DeadGlitch,
                                height: 100,
                                width: 100,
                                type: B.b.Alt2
                            }), se(K.a, {
                                fontSize: M.d.Size4
                            }, e("Something went wrong...", "RecommendationShelves")), se(K.a, {
                                fontSize: M.d.Size5,
                                color: M.c.Alt2
                            }, e("We couldn't find your recommendations", "RecommendationShelves")), se(A.a, {
                                padding: {
                                    top: 1
                                }
                            }, se(N.a, {
                                linkTo: j.a.GamesDirectory
                            }, e("Browse games", "RecommendationShelves"))))
                        }
                    }]), t
                }(T.a.Component),
                ce = Object(G.a)(Object(P.createFragmentContainer)(oe, {
                    query: function() {
                        return n("Dw+o")
                    }
                })),
                ue = n("fMXQ"),
                de = n("8Wlz"),
                me = n("knAH"),
                pe = n("lllG"),
                fe = T.a.createElement;

            function he(e, t) {
                var n = f()(e);
                if (m.a) {
                    var a = m()(e);
                    t && (a = a.filter(function(t) {
                        return u()(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(n, !0).forEach(function(t) {
                        Object(F.a)(e, t, n[t])
                    }) : o.a ? l()(e, o()(n)) : he(n).forEach(function(t) {
                        r()(e, t, u()(n, t))
                    })
                }
                return e
            }
            var ye = function(e) {
                function t() {
                    return Object(v.a)(this, t), Object(k.a)(this, Object(w.a)(t).apply(this, arguments))
                }
                return Object(O.a)(t, e), Object(b.a)(t, [{
                    key: "isInteractive",
                    value: function() {
                        return !0
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
                            data: {
                                route: j.a.Homepage
                            }
                        }
                    }
                }, {
                    key: "content",
                    value: function() {
                        return fe(T.a.Fragment, null, fe(_.b, {
                            fixed: !0
                        }), fe("main", null, fe(R.a, {
                            experimentName: I.b.BlackWidow
                        }, fe(L.a, {
                            group: I.a.Control
                        }, fe(ue.a, {
                            query: this.props
                        })), fe(L.a, {
                            group: I.a.Treatment
                        }, fe(ce, {
                            query: this.props
                        }))), fe(de.a, {
                            journey: {
                                delaySecondsUntilUpsell: 5,
                                type: me.b.MainDir
                            }
                        })))
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var e = Object(y.a)(g.a.mark(function e(n) {
                            var a;
                            return g.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(S.a)(Object(w.a)(t), "getInitialProps", this).call(this, n);
                                    case 2:
                                        return a = e.sent, e.abrupt("return", ge({}, a, {
                                            queryVariables: {
                                                cursor: null,
                                                gamesCount: x.GAMES_PAGE_SIZE,
                                                itemsPerRow: 8,
                                                limit: 8,
                                                platform: "mobile_web",
                                                requestID: Object(pe.b)(16)
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
            }(E.a);
            Object(F.a)(ye, "displayName", "Homepage"), Object(F.a)(ye, "totalCacheLife", 0), Object(F.a)(ye, "query", ie || (ie = function() {
                return n("99f3")
            }));
            var ve = Object(z.h)(ye);
            n.d(t, "default", function() {
                return ve
            })
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
                    k = {
                        x: "overflowX",
                        y: "overflowY"
                    },
                    w = {
                        x: "scrollWidth",
                        y: "scrollHeight"
                    },
                    S = {
                        x: "scrollLeft",
                        y: "scrollTop"
                    },
                    O = {
                        x: "width",
                        y: "height"
                    },
                    F = function() {},
                    C = !! function() {
                        if ("undefined" === typeof window) return !1;
                        var e = !1;
                        try {
                            document.createElement("div").addEventListener("test", F, {
                                get passive() {
                                    return e = !0, !1
                                }
                            })
                        } catch (t) {}
                        return e
                    }() && {
                        passive: !0
                    },
                    T = function(e, t) {
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
                        }(this, n), (t = o(this, c(n).call(this, e))).state = T(e, {
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
                            var n = T(e, t);
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
                            window.removeEventListener("resize", this.updateFrameAndClearCache), this.scrollParent.removeEventListener("scroll", this.updateFrameAndClearCache, C), this.scrollParent.removeEventListener("mousewheel", F, C)
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
                                n = S[t],
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
                            e -= this.getOffset(this.scrollParent), t[S[n]] = e
                        }
                    }, {
                        key: "getScrollSize",
                        value: function() {
                            var e = this.scrollParent,
                                t = document,
                                n = t.body,
                                a = t.documentElement,
                                r = w[this.props.axis];
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
                            switch (this.updateScrollParent(), "function" != typeof e && (e = F), this.props.type) {
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
                            this.scrollParent = this.props.scrollParentGetter(this), e !== this.scrollParent && (e && (e.removeEventListener("scroll", this.updateFrameAndClearCache), e.removeEventListener("mousewheel", F)), this.clearSizeCache(), this.scrollParent.addEventListener("scroll", this.updateFrameAndClearCache, C), this.scrollParent.addEventListener("mousewheel", F, C))
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
                                s = T(this.props, {
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
                        for (var t = e.props.axis, n = e.getEl(), a = k[t]; n = n.parentElement;) switch (window.getComputedStyle(n)[a]) {
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
        },
        zlVm: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return E
            }), n.d(t, "b", function() {
                return z
            });
            var a = n("pneb"),
                r = n("h7sq"),
                i = n("tS02"),
                l = n("/XES"),
                s = n("ztBH"),
                o = n("Fayl"),
                c = n("yFcC"),
                u = n.n(c),
                d = n("ERkP"),
                m = n.n(d),
                p = n("pnpS"),
                f = n("HIP8"),
                h = n("7kXS"),
                g = n("/SwW"),
                y = n("B8T3"),
                v = n("xuCQ"),
                b = n("5vmN"),
                k = n("k3nD"),
                w = n("wtJr"),
                S = n("vlJ8"),
                O = n("He6c"),
                F = n("cQFw"),
                C = n("iJNm"),
                T = n("zkRB"),
                j = m.a.createElement,
                E = 49,
                _ = function(e) {
                    function t() {
                        return Object(r.a)(this, t), Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(o.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl,
                                t = e.formatNumberShort,
                                n = e.formatMessage,
                                r = t(this.props.game.viewersCount || 0, {
                                    maximumSignificantDigits: 3
                                });
                            return j(y.a, {
                                linkTo: f.a.GameDirectory,
                                params: {
                                    game: this.props.game.name
                                },
                                className: "box-art-card",
                                interactionContent: this.props.interactionContent
                            }, j(v.a, {
                                background: b.a.Base,
                                elevation: 1
                            }, j(k.a, Object(a.a)({}, Object(w.d)(this.props.game.boxArtURL), {
                                alt: this.props.game.name,
                                aspect: S.c.BoxArt,
                                key: this.props.game.name,
                                sizes: this.props.srcSetSizes,
                                isLatencyCritical: this.props.isLatencyCritical
                            })), j(O.a, null, j(F.a, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                overflow: C.i.Hidden,
                                className: "box-art-card__info"
                            }, j(T.a, {
                                fontSize: b.d.Size5,
                                ellipsis: !0,
                                bold: !0,
                                color: b.c.Base
                            }, this.props.game.name), j(T.a, {
                                fontSize: b.d.Size6,
                                ellipsis: !0,
                                color: b.c.Alt
                            }, n("{viewersCount} viewers", {
                                viewersCount: r
                            }, "GameViewersCount"))))), j(u.a, {
                                id: "3324188481"
                            }, [".box-art-card .box-art-card__info{height:".concat(E, "px;}")]))
                        }
                    }]), t
                }(m.a.Component),
                z = Object(p.createFragmentContainer)(Object(h.a)(Object(g.a)(_)), {
                    game: function() {
                        return n("BDaT")
                    }
                })
        }
    },
    [
        ["a/nN", 1, 0]
    ]
]);