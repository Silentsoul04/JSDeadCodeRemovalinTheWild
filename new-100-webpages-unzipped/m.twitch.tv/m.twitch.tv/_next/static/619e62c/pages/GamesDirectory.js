(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [9], {
        "1k+N": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return y
            });
            var r = n("h7sq"),
                a = n("tS02"),
                i = n("/XES"),
                s = n("ztBH"),
                o = n("vTWr"),
                l = n("Fayl"),
                u = n("znL5"),
                c = n("ERkP"),
                d = n.n(c),
                f = n("x6OE"),
                m = n.n(f),
                p = n("ds2y"),
                h = n("vI2y"),
                g = d.a.createElement,
                y = function(e) {
                    function t(e) {
                        var n;
                        return Object(r.a)(this, t), n = Object(i.a)(this, Object(s.a)(t).call(this, e)), Object(u.a)(Object(o.a)(n), "loadMoreOnce", void 0), Object(u.a)(Object(o.a)(n), "lastLength", void 0), Object(u.a)(Object(o.a)(n), "itemsRenderer", function(e, t) {
                            return g("div", {
                                ref: t,
                                className: n.props.className
                            }, e)
                        }), Object(u.a)(Object(o.a)(n), "itemRenderer", function(e, t) {
                            return Object(p.a)() && n.props.length - e <= 2 * n.props.pageSize && n.loadMoreOnce(), n.props.itemRenderer(e, t)
                        }), n.lastLength = e.length, n.loadMoreOnce = Object(h.a)(n.props.loadMore), n
                    }
                    return Object(l.a)(t, e), Object(a.a)(t, [{
                        key: "render",
                        value: function() {
                            return this.lastLength !== this.props.length && (this.lastLength = this.props.length, this.loadMoreOnce = Object(h.a)(this.props.loadMore)), g(m.a, {
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
            var r = {
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
            t.default = r
        },
        "7kXS": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var r = n("jp4N"),
                a = n.n(r),
                i = n("Z05o"),
                s = n.n(i),
                o = n("q5o0"),
                l = n.n(o),
                u = n("ERkP"),
                c = n("xeY9");

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                var t;
                return (t = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return l()(n, t), n.prototype.render = function() {
                        var t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? d(n, !0).forEach(function(t) {
                                    a()(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, this.props, {
                            interactionContent: this.interactionContent
                        });
                        return u.createElement(e, t)
                    }, s()(n, [{
                        key: "interactionContent",
                        get: function() {
                            return "position_" + this.props.position
                        }
                    }]), n
                }(u.Component)).displayName = "AsListItem(" + Object(c.a)(e) + ")", t
            }
        },
        AITX: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
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
            r.hash = "d4ce725257fca716d57f43d030a4f179", t.default = r
        },
        BDaT: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
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
            t.default = r
        },
        Cc0E: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var r = n("uFB0"),
                a = n.n(r),
                i = n("ERkP"),
                s = n("ERpE"),
                o = n("iJNm"),
                l = n("5vmN"),
                u = n("ivAS"),
                c = n("C0xX"),
                d = function(e) {
                    var t, n, r;
                    return e.row && (t = o.b.Center), e.elevation && (n = e.elevation), e.background === l.a.Overlay && (r = l.c.Overlay), i.createElement(u.a, a()({
                        className: "tw-card",
                        position: o.j.Relative
                    }, Object(s.a)(e)), i.createElement(c.a, {
                        display: o.d.Flex,
                        flexDirection: e.row ? o.e.Row : o.e.Column,
                        alignItems: t,
                        elevation: n,
                        background: e.background,
                        borderRadius: e.borderRadius,
                        color: r,
                        border: e.border,
                        flexWrap: o.f.NoWrap
                    }, e.children))
                };
            d.displayName = "Card", d.displayName = "Card"
        },
        FGl0: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("uFB0"),
                a = n.n(r),
                i = n("ERkP"),
                s = n("ERpE"),
                o = n("iJNm"),
                l = n("ivAS"),
                u = function(e) {
                    return i.createElement(l.a, a()({
                        className: "tw-card-body",
                        overflow: e.overflow,
                        position: o.j.Relative
                    }, Object(s.a)(e)), e.children)
                };
            u.displayName = "CardBody", u.displayName = "CardBody"
        },
        He6c: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var r = n("q5o0"),
                a = n.n(r),
                i = n("ERkP"),
                s = n("FGl0"),
                o = n("EIzr"),
                l = n("yFcC").default,
                u = n("8m3w").default;

            function c() {
                return i.createElement(i.Fragment, null, i.createElement(l, {
                    id: "tw-inject-layout"
                }, u))
            }
            var d = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return a()(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(s.a, this.props), i.createElement(c, null))
                }, t
            }(o.a);
            d.displayName = "CardBody"
        },
        L59W: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/GamesDirectory", function() {
                return n("qaeO")
            }])
        },
        WIFU: function(e, t, n) {
            "use strict";
            var r;

            function a(e) {
                var t = e.aspectRatio,
                    n = e.heightFudge,
                    a = e.imageType,
                    i = e.topNavHeight,
                    s = e.viewportHeight,
                    o = e.viewportWidth;
                if ("undefined" === typeof window) return 0;
                var l = s || window.document.documentElement && window.document.documentElement.clientHeight,
                    u = o || window.document.documentElement && window.document.documentElement.clientWidth;
                if (!l || !u) return 0;
                var c, d = l - i;
                switch (a) {
                    case r.BoxArt:
                        c = u < l && u <= 540 ? 2 : 4;
                        break;
                    case r.Thumbnail:
                        c = u < l && u <= 540 ? 1 : u > l && u >= 768 ? 3 : 2;
                        break;
                    default:
                        c = 1
                }
                var f = u / c * t + n;
                return c * Math.ceil(d / f)
            }
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e[e.BoxArt = 0] = "BoxArt", e[e.Thumbnail = 1] = "Thumbnail"
                }(r || (r = {}))
        },
        fMXQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return D
            });
            var r = n("LcAa"),
                a = n.n(r),
                i = n("emby"),
                s = n.n(i),
                o = n("sXAp"),
                l = n.n(o),
                u = n("FIas"),
                c = n.n(u),
                d = n("8k7s"),
                f = n.n(d),
                m = n("TPw6"),
                p = n.n(m),
                h = n("h7sq"),
                g = n("tS02"),
                y = n("/XES"),
                v = n("ztBH"),
                b = n("vTWr"),
                w = n("Fayl"),
                S = n("znL5"),
                k = n("yFcC"),
                O = n.n(k),
                C = n("1k+N"),
                E = n("KmwA"),
                j = n("zlVm"),
                P = n("ERkP"),
                x = n.n(P),
                z = n("pnpS"),
                F = n("Vp5C"),
                R = n("yyOJ"),
                G = n("7vVX"),
                L = n("wtJr"),
                A = n("WIFU"),
                _ = n("nZ6Q"),
                I = x.a.createElement;

            function M(e, t) {
                var n = p()(e);
                if (f.a) {
                    var r = f()(e);
                    t && (r = r.filter(function(t) {
                        return c()(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var T = [{
                    mediaCondition: "(max-width: 540px) and (orientation: portrait)",
                    size: "47vw"
                }, {
                    size: "24vw"
                }],
                N = function(e) {
                    function t(e) {
                        var n;
                        return Object(h.a)(this, t), n = Object(y.a)(this, Object(v.a)(t).call(this, e)), Object(S.a)(Object(b.a)(n), "state", {
                            endCursor: null,
                            gameIds: [],
                            games: [],
                            noMoreGames: !1
                        }), Object(S.a)(Object(b.a)(n), "criticalImageCount", void 0), Object(S.a)(Object(b.a)(n), "itemRenderer", function(e, t) {
                            return I(j.b, {
                                key: t,
                                isLatencyCritical: e < n.criticalImageCount,
                                game: n.state.games[e],
                                srcSetSizes: T,
                                position: e
                            })
                        }), Object(S.a)(Object(b.a)(n), "getRefetchVariables", function(e) {
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? M(n, !0).forEach(function(t) {
                                        Object(S.a)(e, t, n[t])
                                    }) : l.a ? s()(e, l()(n)) : M(n).forEach(function(t) {
                                        a()(e, t, c()(n, t))
                                    })
                                }
                                return e
                            }({}, e, {
                                cursor: n.state.endCursor,
                                gamesCount: 3 * R.GAMES_PAGE_SIZE
                            })
                        }), Object(S.a)(Object(b.a)(n), "loadMore", function() {
                            n.state.noMoreGames || n.props.relay.refetch(n.getRefetchVariables)
                        }), n.criticalImageCount = Math.min(Object(A.b)({
                            aspectRatio: L.a,
                            heightFudge: j.a,
                            imageType: A.a.BoxArt,
                            topNavHeight: E.a
                        }), R.GAMES_PAGE_SIZE), n
                    }
                    return Object(w.a)(t, e), Object(g.a)(t, [{
                        key: "render",
                        value: function() {
                            return I(F.a, {
                                value: "game_list"
                            }, I(C.a, {
                                className: "game-list",
                                itemRenderer: this.itemRenderer,
                                length: this.state.games.length,
                                loadMore: this.loadMore,
                                pageSize: R.GAMES_PAGE_SIZE
                            }), I(O.a, {
                                id: "2649554984"
                            }, [".game-list{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:wrap row;-ms-flex-flow:wrap row;flex-flow:wrap row;padding:0.5vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.005);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.005);width:100%;}", "@media (max-width:540px) and (orientation:portrait){.game-list{padding:1vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.01);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01);}}", ".game-list .box-art-card{padding:0.5vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.005);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.005);width:24.75vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.2475);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.2475);}", "@media (max-width:540px) and (orientation:portrait){.game-list .box-art-card{padding:1vw;padding:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.01);padding:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.01);width:49vw;width:calc( (100vw - constant(safe-area-inset-left) - constant(safe-area-inset-right)) * 0.49);width:calc( (100vw - env(safe-area-inset-left) - env(safe-area-inset-right)) * 0.49);}}"]))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            if (!e.query.games || !e.query.games.edges) return {
                                noMoreGames: !0
                            };
                            var n = Object(_.b)(e.query.games.edges),
                                r = n.endCursor,
                                a = n.nodes;
                            if (t.endCursor === r) return null;
                            if (0 === a.length) return {
                                noMoreGames: !0
                            };
                            var i = a.reduce(function(e, n) {
                                var r = n.__id;
                                return r === Object(G.c)("0") || t.gameIds.includes(r) || (e.ids.push(r), e.games.push(n)), e
                            }, {
                                games: [],
                                ids: []
                            });
                            return {
                                endCursor: r,
                                gameIds: t.gameIds.concat(i.ids),
                                games: t.games.concat(i.games)
                            }
                        }
                    }]), t
                }(x.a.Component),
                D = Object(z.createRefetchContainer)(N, {
                    query: function() {
                        return n("1ucA")
                    }
                }, function() {
                    return n("AITX")
                })
        },
        h3Ds: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
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
                    name: "GamesDirectory_Query",
                    id: null,
                    text: "query GamesDirectory_Query(\n  $gamesCount: Int!\n  $cursor: Cursor\n) {\n  ...GameList_query\n}\n\nfragment GameList_query on Query {\n  games(first: $gamesCount, after: $cursor) {\n    edges {\n      cursor\n      node {\n        ...GameCard_game\n        id\n      }\n    }\n  }\n}\n\nfragment GameCard_game on Game {\n  name\n  displayName\n  viewersCount\n  boxArtURL\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "GamesDirectory_Query",
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
                        name: "GamesDirectory_Query",
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
            r.hash = "2f051e6387e752123184a71e4dfa417f", t.default = r
        },
        nZ6Q: function(e, t, n) {
            "use strict";

            function r(e) {
                return a(e).nodes
            }

            function a(e) {
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
                return r
            }), n.d(t, "b", function() {
                return a
            })
        },
        qaeO: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a = n("LcAa"),
                i = n.n(a),
                s = n("emby"),
                o = n.n(s),
                l = n("sXAp"),
                u = n.n(l),
                c = n("FIas"),
                d = n.n(c),
                f = n("8k7s"),
                m = n.n(f),
                p = n("TPw6"),
                h = n.n(p),
                g = n("k9sC"),
                y = n.n(g),
                v = n("yP/C"),
                b = n("h7sq"),
                w = n("tS02"),
                S = n("/XES"),
                k = n("ztBH"),
                O = n("amHM"),
                C = n("Fayl"),
                E = n("znL5"),
                j = n("knAH"),
                P = n("fMXQ"),
                x = n("8Wlz"),
                z = n("ERkP"),
                F = n.n(z),
                R = n("HIP8"),
                G = n("yyOJ"),
                L = n("7vVX"),
                A = n("d6po"),
                _ = F.a.createElement;

            function I(e, t) {
                var n = h()(e);
                if (m.a) {
                    var r = m()(e);
                    t && (r = r.filter(function(t) {
                        return d()(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(n, !0).forEach(function(t) {
                        Object(E.a)(e, t, n[t])
                    }) : u.a ? o()(e, u()(n)) : I(n).forEach(function(t) {
                        i()(e, t, d()(n, t))
                    })
                }
                return e
            }
            var T = function(e) {
                function t() {
                    return Object(b.a)(this, t), Object(S.a)(this, Object(k.a)(t).apply(this, arguments))
                }
                return Object(C.a)(t, e), Object(w.a)(t, [{
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
                                route: R.a.GamesDirectory
                            }
                        }
                    }
                }, {
                    key: "listArea",
                    value: function() {
                        return _(F.a.Fragment, null, _(P.a, {
                            query: this.props
                        }), _(x.a, {
                            journey: {
                                delaySecondsUntilUpsell: 5,
                                type: j.b.MainDir
                            }
                        }))
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var e = Object(v.a)(y.a.mark(function e(n) {
                            var r;
                            return y.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(O.a)(Object(k.a)(t), "getInitialProps", this).call(this, n);
                                    case 2:
                                        return r = e.sent, e.abrupt("return", M({}, r, {
                                            queryVariables: {
                                                cursor: null,
                                                gamesCount: G.GAMES_PAGE_SIZE
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
            }(A.b);
            Object(E.a)(T, "displayName", "GamesDirectory"), Object(E.a)(T, "query", r || (r = function() {
                return n("h3Ds")
            }));
            var N = Object(L.h)(T);
            n.d(t, "default", function() {
                return N
            })
        },
        x6OE: function(e, t, n) {
            var r, a, i;
            a = [n("ERkP"), n("aWzz")], void 0 === (i = "function" === typeof(r = function(t, n) {
                "use strict";
                var r, a, i;

                function s() {
                    if ("function" !== typeof WeakMap) return null;
                    var e = new WeakMap;
                    return s = function() {
                        return e
                    }, e
                }

                function o(e) {
                    return (o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function l(e, t) {
                    return !t || "object" !== o(t) && "function" !== typeof t ? function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e) : t
                }

                function u(e) {
                    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function c(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function d(e, t, n) {
                    return t && c(e.prototype, t), n && c(e, n), e
                }

                function f(e, t) {
                    return (f = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function m(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function p(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                t = function(e) {
                    if (e && e.__esModule) return e;
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {};
                    if (null != e) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var a in e)
                            if (Object.prototype.hasOwnProperty.call(e, a)) {
                                var i = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                                i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
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
                            r = e.minSize,
                            a = e.type,
                            i = t.from,
                            s = t.size,
                            o = t.itemsPerRow,
                            l = (s = Math.max(s, r)) % o;
                        return l && (s += o - l), s > n && (s = n), i = "simple" !== a && i ? Math.max(Math.min(i, n - s), 0) : 0, (l = i % o) && (i -= l, s += l), i === t.from && s == t.size ? t : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? m(n, !0).forEach(function(t) {
                                    p(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(n).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, t, {
                            from: i,
                            size: s
                        })
                    };
                e.exports = (a = r = function(e) {
                    function n(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), (t = l(this, u(n).call(this, e))).state = j(e, {
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
                        }), t && f(e, t)
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
                                r = b[t];
                            do {
                                n += e[r] || 0
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
                                r = e === window ? document.body[n] || document.documentElement[n] : e[n],
                                a = this.getScrollSize() - this.props.scrollParentViewportSizeGetter(this),
                                i = Math.max(0, Math.min(r, a)),
                                s = this.getEl();
                            return this.cachedScrollPosition = this.getOffset(e) + i - this.getOffset(s), this.cachedScrollPosition
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
                                r = t.documentElement,
                                a = S[this.props.axis];
                            return e === window ? Math.max(n[a], r[a]) : e[a]
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
                                r = t + this.props.scrollParentViewportSizeGetter(this) + e;
                            return this.hasDeterminateSize() && (r = Math.min(r, this.getSpaceBefore(this.props.length))), {
                                start: n,
                                end: r
                            }
                        }
                    }, {
                        key: "getItemSizeAndItemsPerRow",
                        value: function() {
                            var e = this.props,
                                t = e.axis,
                                n = e.useStaticSize,
                                r = this.state,
                                a = r.itemSize,
                                i = r.itemsPerRow;
                            if (n && a && i) return {
                                itemSize: a,
                                itemsPerRow: i
                            };
                            var s = this.items.children;
                            if (!s.length) return {};
                            var o = s[0],
                                l = o[v[t]],
                                u = Math.abs(l - a);
                            if ((isNaN(u) || u >= 1) && (a = l), !a) return {};
                            for (var c = b[t], d = o[c], f = s[i = 1]; f && f[c] === d; f = s[i]) ++i;
                            return {
                                itemSize: a,
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
                                r = this.items.children,
                                a = 0;
                            if (r.length) {
                                var i = this.props.axis,
                                    s = r[0],
                                    o = r[r.length - 1];
                                a = this.getOffset(o) + o[v[i]] - this.getOffset(s)
                            }
                            if (a > n) return e();
                            var l = this.props,
                                u = l.pageSize,
                                c = l.length,
                                d = Math.min(this.state.size + u, c);
                            this.maybeSetState({
                                size: d
                            }, e)
                        }
                    }, {
                        key: "updateVariableFrame",
                        value: function(e) {
                            this.props.itemSizeGetter || this.cacheSizes();
                            for (var t = this.getStartAndEnd(), n = t.start, r = t.end, a = this.props, i = a.length, s = a.pageSize, o = 0, l = 0, u = 0, c = i - 1; l < c;) {
                                var d = this.getSizeOfItem(l);
                                if (null == d || o + d > n) break;
                                o += d, ++l
                            }
                            for (var f = i - l; u < f && o < r;) {
                                var m = this.getSizeOfItem(l + u);
                                if (null == m) {
                                    u = Math.min(u + s, f);
                                    break
                                }
                                o += m, ++u
                            }
                            this.maybeSetState({
                                from: l,
                                size: u
                            }, e)
                        }
                    }, {
                        key: "updateUniformFrame",
                        value: function(e) {
                            var t = this.getItemSizeAndItemsPerRow(),
                                n = t.itemSize,
                                r = t.itemsPerRow;
                            if (!n || !r) return e();
                            var a = this.getStartAndEnd(),
                                i = a.start,
                                s = a.end,
                                o = j(this.props, {
                                    from: Math.floor(i / n) * r,
                                    size: (Math.ceil((s - i) / n) + 1) * r,
                                    itemsPerRow: r
                                }),
                                l = o.from,
                                u = o.size;
                            return this.maybeSetState({
                                itemsPerRow: r,
                                from: l,
                                itemSize: n,
                                size: u
                            }, e)
                        }
                    }, {
                        key: "getSpaceBefore",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (null != t[e]) return t[e];
                            var n = this.state,
                                r = n.itemSize,
                                a = n.itemsPerRow;
                            if (r) return t[e] = Math.floor(e / a) * r;
                            for (var i = e; i > 0 && null == t[--i];);
                            for (var s = t[i] || 0, o = i; o < e; ++o) {
                                t[o] = s;
                                var l = this.getSizeOfItem(o);
                                if (null == l) break;
                                s += l
                            }
                            return t[e] = s
                        }
                    }, {
                        key: "cacheSizes",
                        value: function() {
                            for (var e = this.cache, t = this.state.from, n = this.items.children, r = v[this.props.axis], a = 0, i = n.length; a < i; ++a) e[t + a] = n[a][r]
                        }
                    }, {
                        key: "getSizeOfItem",
                        value: function(e) {
                            var t = this.cache,
                                n = this.items,
                                r = this.props,
                                a = r.axis,
                                i = r.itemSizeGetter,
                                s = r.itemSizeEstimator,
                                o = r.type,
                                l = this.state,
                                u = l.from,
                                c = l.itemSize,
                                d = l.size;
                            if (c) return c;
                            if (i) return i(e);
                            if (e in t) return t[e];
                            if ("simple" === o && e >= u && e < u + d && n) {
                                var f = n.children[e - u];
                                if (f) return f[v[a]]
                            }
                            return s ? s(e, t) : void 0
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
                                r = n - this.props.scrollParentViewportSizeGetter(this) + this.getSizeOfItem(e),
                                a = Math.min(r, n),
                                i = Math.max(r, n);
                            return t <= a ? this.setScroll(a) : t > i ? this.setScroll(i) : void 0
                        }
                    }, {
                        key: "getVisibleRange",
                        value: function() {
                            for (var e, t, n = this.state, r = n.from, a = n.size, i = this.getStartAndEnd(0), s = i.start, o = i.end, l = {}, u = r; u < r + a; ++u) {
                                var c = this.getSpaceBefore(u, l),
                                    d = c + this.getSizeOfItem(u);
                                null == e && d > s && (e = u), null != e && c < o && (t = u)
                            }
                            return [e, t]
                        }
                    }, {
                        key: "renderItems",
                        value: function() {
                            for (var e = this, t = this.props, n = t.itemRenderer, r = t.itemsRenderer, a = this.state, i = a.from, s = a.size, o = [], l = 0; l < s; ++l) o.push(n(i + l, l));
                            return r(o, function(t) {
                                return e.items = t
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                n = this.props,
                                r = n.axis,
                                a = n.length,
                                i = n.type,
                                s = n.useTranslate3d,
                                o = this.state,
                                l = o.from,
                                u = o.itemsPerRow,
                                c = this.renderItems();
                            if ("simple" === i) return c;
                            var d = {
                                    position: "relative"
                                },
                                f = {},
                                m = Math.ceil(a / u) * u,
                                p = this.getSpaceBefore(m, f);
                            p && (d[O[r]] = p, "x" === r && (d.overflowX = "hidden"));
                            var h = this.getSpaceBefore(l, f),
                                g = "x" === r ? h : 0,
                                y = "y" === r ? h : 0,
                                v = s ? "translate3d(".concat(g, "px, ").concat(y, "px, 0)") : "translate(".concat(g, "px, ").concat(y, "px)"),
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
                            }, c))
                        }
                    }]), n
                }(t.Component), p(r, "displayName", "ReactList"), p(r, "propTypes", {
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
                }), p(r, "defaultProps", {
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
                        for (var t = e.props.axis, n = e.getEl(), r = w[t]; n = n.parentElement;) switch (window.getComputedStyle(n)[r]) {
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
                }), a)
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        xuCQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var r = n("q5o0"),
                a = n.n(r),
                i = n("ERkP"),
                s = n("Cc0E"),
                o = n("EIzr"),
                l = n("yFcC").default,
                u = n("8m3w").default,
                c = n("mEQy").default;

            function d() {
                return i.createElement(i.Fragment, null, i.createElement(l, {
                    id: "tw-inject-layout"
                }, u), i.createElement(l, {
                    id: "tw-inject-styled-layout"
                }, c))
            }
            var f = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return a()(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(s.a, this.props), i.createElement(d, null))
                }, t
            }(o.a);
            f.displayName = "Card"
        },
        zlVm: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return x
            }), n.d(t, "b", function() {
                return F
            });
            var r = n("pneb"),
                a = n("h7sq"),
                i = n("tS02"),
                s = n("/XES"),
                o = n("ztBH"),
                l = n("Fayl"),
                u = n("yFcC"),
                c = n.n(u),
                d = n("ERkP"),
                f = n.n(d),
                m = n("pnpS"),
                p = n("HIP8"),
                h = n("7kXS"),
                g = n("/SwW"),
                y = n("B8T3"),
                v = n("xuCQ"),
                b = n("5vmN"),
                w = n("k3nD"),
                S = n("wtJr"),
                k = n("vlJ8"),
                O = n("He6c"),
                C = n("cQFw"),
                E = n("iJNm"),
                j = n("zkRB"),
                P = f.a.createElement,
                x = 49,
                z = function(e) {
                    function t() {
                        return Object(a.a)(this, t), Object(s.a)(this, Object(o.a)(t).apply(this, arguments))
                    }
                    return Object(l.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl,
                                t = e.formatNumberShort,
                                n = e.formatMessage,
                                a = t(this.props.game.viewersCount || 0, {
                                    maximumSignificantDigits: 3
                                });
                            return P(y.a, {
                                linkTo: p.a.GameDirectory,
                                params: {
                                    game: this.props.game.name
                                },
                                className: "box-art-card",
                                interactionContent: this.props.interactionContent
                            }, P(v.a, {
                                background: b.a.Base,
                                elevation: 1
                            }, P(w.a, Object(r.a)({}, Object(S.d)(this.props.game.boxArtURL), {
                                alt: this.props.game.name,
                                aspect: k.c.BoxArt,
                                key: this.props.game.name,
                                sizes: this.props.srcSetSizes,
                                isLatencyCritical: this.props.isLatencyCritical
                            })), P(O.a, null, P(C.a, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                overflow: E.i.Hidden,
                                className: "box-art-card__info"
                            }, P(j.a, {
                                fontSize: b.d.Size5,
                                ellipsis: !0,
                                bold: !0,
                                color: b.c.Base
                            }, this.props.game.name), P(j.a, {
                                fontSize: b.d.Size6,
                                ellipsis: !0,
                                color: b.c.Alt
                            }, n("{viewersCount} viewers", {
                                viewersCount: a
                            }, "GameViewersCount"))))), P(c.a, {
                                id: "3324188481"
                            }, [".box-art-card .box-art-card__info{height:".concat(x, "px;}")]))
                        }
                    }]), t
                }(f.a.Component),
                F = Object(m.createFragmentContainer)(Object(h.a)(Object(g.a)(z)), {
                    game: function() {
                        return n("BDaT")
                    }
                })
        }
    },
    [
        ["L59W", 1, 0]
    ]
]);