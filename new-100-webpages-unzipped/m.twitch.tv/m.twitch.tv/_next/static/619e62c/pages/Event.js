(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [6], {
        "4vvM": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("LcAa"),
                l = n.n(a),
                i = n("emby"),
                r = n.n(i),
                o = n("sXAp"),
                s = n.n(o),
                p = n("FIas"),
                c = n.n(p),
                u = n("8k7s"),
                d = n.n(u),
                m = n("TPw6"),
                g = n.n(m),
                f = n("z0N8"),
                h = n.n(f),
                v = n("k9sC"),
                w = n.n(v),
                y = n("yP/C"),
                b = n("h7sq"),
                k = n("tS02"),
                x = n("/XES"),
                j = n("ztBH"),
                E = n("amHM"),
                F = n("Fayl"),
                O = n("znL5"),
                S = n("KmwA"),
                _ = n("pneb"),
                L = n("yFcC"),
                C = n.n(L),
                K = n("9j/M"),
                N = n("ERkP"),
                T = n.n(N),
                R = n("/SwW"),
                A = n("Q0He"),
                I = n("iJNm"),
                P = n("zkRB"),
                D = n("1nou"),
                U = T.a.createElement,
                V = function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(F.a)(t, e), Object(k.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatDate;
                            return U(K.a, null, U(A.a, {
                                className: "event-calendar",
                                elevation: 1,
                                textAlign: I.l.Center
                            }, U(P.a, {
                                className: "event-calendar__month",
                                transform: D.d.Uppercase
                            }, e(this.props.date, {
                                month: "short"
                            })), U(P.a, {
                                className: "event-calendar__day"
                            }, e(this.props.date, {
                                day: "numeric"
                            }))), U(C.a, {
                                id: "919708169"
                            }, [".event-calendar{font-size:1.2rem;color:black;background-color:white;}", ".event-calendar .event-calendar__month{background-color:black;color:white;padding:0.2rem 0.3rem;font-size:1.6rem;}", ".event-calendar .event-calendar__day{font-size:3rem;padding:0 1rem;}"]))
                        }
                    }]), t
                }(T.a.PureComponent),
                z = Object(R.a)(V),
                M = n("cQFw"),
                B = n("L9xg"),
                H = n("wtJr"),
                X = T.a.createElement,
                q = function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(F.a)(t, e), Object(k.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.coverImageTemplateURL,
                                n = e.startTime,
                                a = this.props.intl.formatMessage;
                            return X(T.a.Fragment, null, X(M.a, {
                                position: I.j.Relative
                            }, X(B.a, Object(_.a)({}, Object(H.g)(t || null), {
                                alt: a("Event banner image", "EventBanner"),
                                className: "event-cover-image",
                                sizes: [{
                                    size: "100vw"
                                }],
                                isLatencyCritical: !0
                            })), n && X(M.a, {
                                margin: {
                                    left: 2,
                                    top: 1
                                },
                                position: I.j.Absolute,
                                attachLeft: !0,
                                attachTop: !0
                            }, X(z, {
                                date: n
                            }))), X(C.a, {
                                id: "4118514095"
                            }, [".event-cover-image{width:100vw;min-height:calc(100vw * 0.5625);}", "@media (min-width:480px){.event-cover-image{width:60vw;min-height:calc(60vw * 0.5625);}}", "@media (min-width:768px){.event-cover-image{width:calc(50vw - calc( (2 * 2rem) + (5rem)));min-height:calc( (50vw - calc( (2 * 2rem) + (5rem))) * 0.5625);}}"]))
                        }
                    }]), t
                }(T.a.PureComponent),
                Q = Object(R.a)(q),
                J = n("vCzr"),
                G = n("5vmN"),
                Y = T.a.createElement,
                W = function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(F.a)(t, e), Object(k.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !!this.props.description
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return Y(M.a, {
                                padding: {
                                    bottom: 1,
                                    x: 2
                                }
                            }, Y(P.a, {
                                type: D.e.H5,
                                color: G.c.Alt2,
                                transform: D.d.Uppercase
                            }, e("Description", "EventDescription")), Y(P.a, {
                                className: "event-description",
                                type: D.e.P
                            }, this.props.description), Y(C.a, {
                                id: "2502854319"
                            }, [".event-description{white-space:pre-wrap;}"]))
                        }
                    }]), t
                }(T.a.PureComponent);
            Object(O.a)(W, "displayName", "EventDescription");
            var Z = Object(R.a)(Object(J.a)(W)),
                $ = T.a.createElement,
                ee = function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(F.a)(t, e), Object(k.a)(t, [{
                        key: "render",
                        value: function() {
                            var e, t, n = this.props.intl,
                                a = n.formatDate,
                                l = n.formatTime;
                            return e = this.props.start, t = this.props.end, e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear() ? $("span", {
                                className: "timespan--date"
                            }, a(this.props.start, {
                                day: "numeric",
                                month: "short",
                                weekday: "long"
                            }), " ", l(this.props.start), " - ", l(this.props.end)) : $("span", null, $("span", {
                                className: "timespan--date"
                            }, a(this.props.start, {
                                day: "numeric",
                                month: "short",
                                weekday: "short"
                            }), " ", l(this.props.start)), $("span", null, " - "), $("span", {
                                className: "timespan--date"
                            }, a(this.props.end, {
                                day: "numeric",
                                month: "short",
                                weekday: "short"
                            }), " ", l(this.props.end)))
                        }
                    }]), t
                }(T.a.PureComponent);
            var te = Object(R.a)(ee),
                ne = n("jPHO"),
                ae = T.a.createElement,
                le = function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(F.a)(t, e), Object(k.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !!this.props.title && !!this.props.startTime && !!this.props.endTime
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return ae(M.a, null, ae(ne.a, {
                                margin: {
                                    bottom: .5
                                }
                            }, ae(P.a, {
                                type: D.e.H2,
                                bold: !0
                            }, this.props.title)), this.props.isPremiere && ae(P.a, {
                                className: "premiere-title",
                                type: D.e.Span
                            }, e("Premiere", "EventInfo")), ae(M.a, {
                                className: "event-timespan",
                                margin: {
                                    bottom: .5
                                }
                            }, this.props.startTime && this.props.endTime && ae(K.a, null, ae(te, {
                                start: this.props.startTime,
                                end: this.props.endTime
                            }))), ae(C.a, {
                                id: "157734307"
                            }, [".event-timespan{min-height:2rem;}"]))
                        }
                    }]), t
                }(T.a.PureComponent);
            Object(O.a)(le, "displayName", "EventInfo");
            var ie = Object(R.a)(Object(J.a)(le)),
                re = n("pnpS"),
                oe = n("V9ax"),
                se = n("l6xT"),
                pe = n("e6sv"),
                ce = n("/3cs"),
                ue = T.a.createElement,
                de = function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(F.a)(t, e), Object(k.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !!this.props.event.title && !!this.props.event.startAt && !!this.props.event.endAt
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.event;
                            return ue(T.a.Fragment, null, ue(oe.a, {
                                breakpointExtraSmall: {
                                    padding: {
                                        x: 5
                                    }
                                },
                                breakpointSmall: {
                                    padding: {
                                        top: 1,
                                        x: 5
                                    }
                                }
                            }, ue("main", null, ue(se.a, {
                                gutterSize: pe.b.None
                            }, ue(ce.a, {
                                cols: {
                                    default: 12,
                                    sm: 6
                                }
                            }, ue(M.a, {
                                breakpointExtraSmall: {
                                    margin: {
                                        x: 2
                                    }
                                }
                            }, ue(Q, {
                                coverImageTemplateURL: e.imageURL,
                                startTime: e.startAt ? new Date(e.startAt) : void 0
                            }))), ue(ce.a, {
                                cols: {
                                    default: 12,
                                    sm: 6
                                }
                            }, ue(M.a, {
                                display: I.d.Flex,
                                flexDirection: I.e.Column,
                                justifyContent: I.h.Center,
                                padding: {
                                    top: 1,
                                    x: 2
                                },
                                breakpointSmall: {
                                    padding: {
                                        top: 0,
                                        x: 1
                                    }
                                },
                                fullHeight: !0
                            }, ue(ie, {
                                endTime: e.endAt ? new Date(e.endAt) : void 0,
                                isPremiere: !1,
                                startTime: e.startAt ? new Date(e.startAt) : void 0,
                                title: e.title
                            })))), e.description && ue(Z, {
                                description: e.description
                            }))))
                        }
                    }]), t
                }(T.a.PureComponent);
            Object(O.a)(de, "displayName", "EventCollectionView");
            var me = Object(re.createFragmentContainer)(Object(R.a)(de), {
                    event: function() {
                        return n("NjQ2")
                    }
                }),
                ge = n("NM2R"),
                fe = n("HIP8"),
                he = n("Vp5C"),
                ve = n("7vVX"),
                we = n("QNcz"),
                ye = n("wRUM"),
                be = n("zqif"),
                ke = T.a.createElement,
                xe = function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(F.a)(t, e), Object(k.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !!this.props.channel && !!this.props.channel.login || !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.intl.formatMessage;
                            return ke(T.a.Fragment, null, ke(he.a, {
                                value: "panels"
                            }, ke(M.a, null, this.vodInfo, ke(ne.a, {
                                margin: {
                                    bottom: .5,
                                    left: 1
                                }
                            }, ke(P.a, {
                                type: D.e.H5,
                                color: G.c.Alt2,
                                transform: D.d.Uppercase
                            }, e("Starring", "EventPanels"))), this.channelInfo, ke(ne.a, {
                                margin: {
                                    bottom: .5,
                                    left: 1
                                }
                            }, ke(P.a, {
                                type: D.e.H5,
                                color: G.c.Alt2,
                                transform: D.d.Uppercase
                            }, e("Game", "EventPanels"))), this.gameInfo)), this.seriesInfo)
                        }
                    }, {
                        key: "vodInfo",
                        get: function() {
                            return !this.props.video || Object(ve.g)(this.props.video.id) ? null : ke(A.a, {
                                elevation: 1,
                                margin: {
                                    bottom: 1
                                }
                            }, ke(ge.a, {
                                video: this.props.video,
                                interactionContent: "vod"
                            }))
                        }
                    }, {
                        key: "channelInfo",
                        get: function() {
                            if (!this.props.channel) return null;
                            var e = this.props.channel,
                                t = e.displayName,
                                n = e.login;
                            if (!n) return null;
                            var a = this.props.intl.formatMessage,
                                l = Object(be.a)({
                                    displayName: t,
                                    login: n
                                });
                            return ke(we.a, {
                                linkTo: fe.a.Channel,
                                params: {
                                    channel: n
                                },
                                interactionContent: "channel"
                            }, ke(A.a, {
                                className: "event-channel-info",
                                display: I.d.Flex,
                                flexDirection: I.e.Row,
                                alignItems: I.b.Center,
                                background: G.a.Base,
                                elevation: 1,
                                padding: 1,
                                margin: {
                                    bottom: 1
                                }
                            }, ke(ye.a, {
                                alt: a("{channel}'s avatar", {
                                    channel: l
                                }, "EventPanels"),
                                src: this.props.channel.profileImageURL,
                                size: 40
                            }), ke(ne.a, {
                                padding: {
                                    left: 1
                                }
                            }, ke(P.a, {
                                type: D.e.Span,
                                color: G.c.Link
                            }, t))))
                        }
                    }, {
                        key: "gameInfo",
                        get: function() {
                            if (!this.props.game || !this.props.game.name) return null;
                            var e = this.props.intl.formatMessage;
                            return ke(we.a, {
                                linkTo: fe.a.GameDirectory,
                                params: {
                                    game: this.props.game.name
                                },
                                interactionContent: "game"
                            }, ke(A.a, {
                                className: "event-game-info",
                                display: I.d.Flex,
                                flexDirection: I.e.Row,
                                alignItems: I.b.Center,
                                background: G.a.Base,
                                elevation: 1,
                                padding: 1
                            }, ke(B.a, Object(_.a)({
                                alt: e("Box art for {game}", {
                                    game: this.props.game.name
                                }, "EventPanels"),
                                className: "event-channel-boxart",
                                sizes: [{
                                    size: "4rem"
                                }]
                            }, Object(H.d)(this.props.game.boxArtURL || null))), ke(C.a, {
                                id: "3779558480"
                            }, [".event-channel-boxart{width:4rem;height:calc(4rem * 58 / 42);}"]), ke(ne.a, {
                                padding: {
                                    left: 1
                                }
                            }, ke(P.a, {
                                type: D.e.Span,
                                color: G.c.Link
                            }, this.props.game.name))))
                        }
                    }, {
                        key: "seriesInfo",
                        get: function() {
                            if (!this.props.parent) return null;
                            var e = this.props.intl.formatMessage;
                            return ke(we.a, {
                                linkTo: fe.a.Event,
                                params: {
                                    id: this.props.parent.id
                                },
                                interactionContent: "series"
                            }, ke(M.a, {
                                padding: {
                                    x: 1,
                                    y: 1
                                }
                            }, ke(P.a, {
                                type: D.e.H5,
                                color: G.c.Alt2,
                                transform: D.d.Uppercase
                            }, e("Series", "EventDescription")), ke(P.a, {
                                className: "event-description",
                                type: D.e.P,
                                color: G.c.Link
                            }, this.props.parent.title), ke(C.a, {
                                id: "2896154629"
                            }, [".event-description{white-space:pre-wrap;}"])))
                        }
                    }]), t
                }(T.a.Component);
            Object(O.a)(xe, "displayName", "EventPanels");
            var je = Object(re.createFragmentContainer)(Object(R.a)(Object(J.a)(xe)), {
                    video: function() {
                        return n("eTdS")
                    }
                }),
                Ee = T.a.createElement,
                Fe = function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(F.a)(t, e), Object(k.a)(t, [{
                        key: "isInteractive",
                        value: function() {
                            return !!this.props.event.title && !!this.props.event.startAt && !!this.props.event.endAt
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.event,
                                t = e.premiere || null,
                                n = e.channel || null,
                                a = e.game || null;
                            return Ee(T.a.Fragment, null, Ee(oe.a, {
                                breakpointExtraSmall: {
                                    padding: {
                                        x: 5
                                    }
                                },
                                breakpointSmall: {
                                    padding: {
                                        top: 1,
                                        x: 5
                                    }
                                }
                            }, Ee("main", null, Ee(se.a, {
                                gutterSize: pe.b.None
                            }, Ee(ce.a, {
                                cols: {
                                    default: 12,
                                    sm: 6
                                }
                            }, Ee(M.a, {
                                breakpointExtraSmall: {
                                    margin: {
                                        x: 2
                                    }
                                }
                            }, Ee(Q, {
                                coverImageTemplateURL: e.imageURL,
                                startTime: e.startAt ? new Date(e.startAt) : void 0
                            }))), Ee(ce.a, {
                                cols: {
                                    default: 12,
                                    sm: 6
                                }
                            }, Ee(M.a, {
                                display: I.d.Flex,
                                flexDirection: I.e.Column,
                                justifyContent: I.h.Center,
                                padding: {
                                    top: 1,
                                    x: 2
                                },
                                breakpointSmall: {
                                    padding: {
                                        top: 0,
                                        x: 1
                                    }
                                },
                                fullHeight: !0
                            }, Ee(ie, {
                                endTime: e.endAt ? new Date(e.endAt) : void 0,
                                isPremiere: !!e.premiere,
                                startTime: e.startAt ? new Date(e.startAt) : void 0,
                                title: e.title
                            })))), Ee(M.a, {
                                margin: {
                                    x: 1,
                                    y: 1
                                }
                            }, Ee(je, {
                                channel: n,
                                game: a,
                                parent: e.parent,
                                video: t && t.pastPremiere
                            })), e.description && Ee(Z, {
                                description: e.description
                            }))))
                        }
                    }]), t
                }(T.a.PureComponent);
            Object(O.a)(Fe, "displayName", "EventLeafView");
            var Oe, Se = Object(re.createFragmentContainer)(Object(R.a)(Fe), {
                    event: function() {
                        return n("M7XN")
                    }
                }),
                _e = n("am3Y"),
                Le = n("d6po"),
                Ce = T.a.createElement;

            function Ke(e, t) {
                var n = g()(e);
                if (d.a) {
                    var a = d()(e);
                    t && (a = a.filter(function(t) {
                        return c()(e, t).enumerable
                    })), n.push.apply(n, a)
                }
                return n
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ke(n, !0).forEach(function(t) {
                        Object(O.a)(e, t, n[t])
                    }) : s.a ? r()(e, s()(n)) : Ke(n).forEach(function(t) {
                        l()(e, t, c()(n, t))
                    })
                }
                return e
            }
            var Te = function(e) {
                function t() {
                    return Object(b.a)(this, t), Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
                }
                return Object(F.a)(t, e), Object(k.a)(t, [{
                    key: "pageSpecificPageviewData",
                    value: function() {
                        if (!this.props.event) return {};
                        if ("EventLeaf" !== this.props.event.__typename) return {
                            channel: ""
                        };
                        var e = this.props.event.channel;
                        return {
                            channel: e && e.login || ""
                        }
                    }
                }, {
                    key: "pageHeadData",
                    value: function() {
                        var e, t = this.props.queryVariables.id;
                        return this.props.event && ["EventLeaf", "EventCollection"].includes(this.props.event.__typename) && (t = this.props.event.id, e = this.props.event.title), {
                            data: {
                                eventID: t,
                                eventTitle: e,
                                route: fe.a.Event
                            }
                        }
                    }
                }, {
                    key: "content",
                    value: function() {
                        if (!this.props.event) return Ce(_e.a, null);
                        var e = null;
                        return "EventLeaf" === this.props.event.__typename ? e = Ce(Se, {
                            event: this.props.event
                        }) : "EventCollection" === this.props.event.__typename && (e = Ce(me, {
                            event: this.props.event
                        })), Ce(T.a.Fragment, null, Ce(S.b, null), e)
                    }
                }], [{
                    key: "getInitialProps",
                    value: function() {
                        var e = Object(y.a)(w.a.mark(function e(n) {
                            var a;
                            return w.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(E.a)(Object(j.a)(t), "getInitialProps", this).call(this, n);
                                    case 2:
                                        return a = e.sent, e.abrupt("return", Ne({}, a, {
                                            queryVariables: {
                                                id: Object(ve.b)(n.query.id)
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
                            return e && e.id && e.id === t.id && ["EventLeaf", "EventCollection"].includes(e.__typename)
                        })[0]
                    }
                }]), t
            }(Le.a);
            Object(O.a)(Te, "displayName", "EventDetails"), Object(O.a)(Te, "query", Oe || (Oe = function() {
                return n("x7DS")
            }));
            var Re = Object(ve.h)(Te);
            n.d(t, "default", function() {
                return Re
            })
        },
        "5ps1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var a = n("q5o0"),
                l = n.n(a),
                i = n("ERkP"),
                r = n("mBIT"),
                o = n("EIzr"),
                s = n("yFcC").default,
                p = n("zkr3").default,
                c = n("a7ab").default,
                u = n("8m3w").default,
                d = n("FK86").default,
                m = n("snZo").default;

            function g() {
                return i.createElement(i.Fragment, null, i.createElement(s, {
                    id: "tw-aspect"
                }, p), i.createElement(s, {
                    id: "tw-icon"
                }, c), i.createElement(s, {
                    id: "tw-inject-layout"
                }, u), i.createElement(s, {
                    id: "tw-stat"
                }, d), i.createElement(s, {
                    id: "tw-tooltip"
                }, m))
            }
            var f = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return l()(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(r.a, this.props), i.createElement(g, null))
                }, t
            }(o.a);
            f.displayName = "Stat"
        },
        "7vUx": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return d
            });
            var a, l, i = n("uFB0"),
                r = n.n(i),
                o = n("ERkP"),
                s = n("LaCE"),
                p = n("ERpE"),
                c = n("hEEa"),
                u = n("iJNm");
            ! function(e) {
                e.Top = "tw-tooltip--up", e.Bottom = "tw-tooltip--down", e.Left = "tw-tooltip--left", e.Right = "tw-tooltip--right"
            }(a || (a = {})),
            function(e) {
                e.Left = "tw-tooltip--align-left", e.Center = "tw-tooltip--align-center", e.Right = "tw-tooltip--align-right"
            }(l || (l = {}));
            var d = function(e) {
                var t, n, i, d, m = Object(c.a)(),
                    g = {
                        "tw-tooltip": !0,
                        "tw-tooltip--wrap": !!e.width
                    },
                    f = {
                        "tw-tooltip-wrapper": !0,
                        "tw-tooltip-wrapper--show": e.show
                    };
                e.direction ? g[e.direction] = !0 : g[a.Top] = !0, e.align && e.align !== l.Center && e.direction !== a.Left && e.direction !== a.Right ? g[e.align] = !0 : g[l.Center] = !0, e.offsetX && (e.align === l.Right ? n = e.offsetX : t = e.offsetX), e.offsetY && (e.direction && e.direction !== a.Top ? i = e.offsetY : d = e.offsetY);
                var h = {
                    marginLeft: t,
                    marginRight: n,
                    marginTop: i,
                    marginBottom: d,
                    width: e.width
                };
                return o.createElement(u.g, r()({
                    display: e.display ? e.display : u.d.InlineFlex
                }, Object(p.a)(e)), o.createElement("div", {
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
            d.displayName = "Tooltip", d.displayName = "Tooltip"
        },
        "8egr": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return S
            });
            var a = n("pneb"),
                l = n("h7sq"),
                i = n("tS02"),
                r = n("/XES"),
                o = n("ztBH"),
                s = n("Fayl"),
                p = n("yFcC"),
                c = n.n(p),
                u = n("ERkP"),
                d = n.n(u),
                m = n("/SwW"),
                g = n("Q0He"),
                f = n("5vmN"),
                h = n("iJNm"),
                v = n("cQFw"),
                w = n("k3nD"),
                y = n("wtJr"),
                b = n("vlJ8"),
                k = n("5ps1"),
                x = n("bfSB"),
                j = n("zkRB"),
                E = n("1nou"),
                F = d.a.createElement,
                O = function(e) {
                    function t() {
                        return Object(l.a)(this, t), Object(r.a)(this, Object(o.a)(t).apply(this, arguments))
                    }
                    return Object(s.a)(t, e), Object(i.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.intl,
                                t = e.formatNumberShort,
                                n = e.formatMessage,
                                l = e.formatPastRelativeDate;
                            return F(g.a, {
                                className: "mw-channel-profile-video-card",
                                background: f.a.Base,
                                display: h.d.Flex,
                                alignItems: h.b.Center,
                                justifyContent: h.h.Start,
                                flexWrap: h.f.NoWrap,
                                padding: 1,
                                fullWidth: !0
                            }, F(v.a, {
                                className: "mw-channel-profile-video-card__image",
                                flexShrink: 0,
                                position: h.j.Relative
                            }, F(w.a, Object(a.a)({}, Object(y.f)(this.props.imageURL), {
                                alt: this.props.title || "video preview thumbnail",
                                aspect: b.c.Aspect16x9,
                                key: this.props.imageURL,
                                sizes: [{
                                    size: "105px"
                                }]
                            })), this.props.formattedLength && F(g.a, {
                                className: "mw-channel-profile-video-card__time",
                                color: f.c.Overlay,
                                position: h.j.Absolute
                            }, F(k.a, {
                                icon: x.a.GlyphLength,
                                label: n("Video length", "VideoRowItem"),
                                value: this.props.formattedLength
                            }))), F(v.a, {
                                className: "mw-channel-profile-video-card__details",
                                margin: {
                                    left: 1
                                },
                                ellipsis: !0
                            }, F(j.a, {
                                type: E.e.H4,
                                ellipsis: !0,
                                color: f.c.Base
                            }, this.props.title), F(j.a, {
                                ellipsis: !0,
                                color: f.c.Alt2
                            }, this.props.gameName, "\xa0|\xa0", n("{viewCount, plural, one {1 view} other {{formattedViewCount} views}}", {
                                formattedViewCount: t(this.props.viewCount || 0, {
                                    maximumSignificantDigits: 3
                                }),
                                viewCount: this.props.viewCount || 0
                            }, "VideoRowItem"), "\xa0|\xa0", this.props.createdAt ? l(this.props.createdAt) : null)), F(c.a, {
                                id: "1195150318"
                            }, [".mw-channel-profile-video-card__image{width:105px;height:60px;}", ".mw-channel-profile-video-card__image .mw-channel-profile-video-card__time{right:4px;bottom:-4px;text-shadow:2px 2px 5px #212126;}"]))
                        }
                    }]), t
                }(d.a.PureComponent),
                S = Object(m.a)(O)
        },
        FK86: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-stat,.tw-stat__icon{display:inline-flex}.tw-stat{align-items:center;color:currentColor;line-height:1}.tw-stat__icon svg{width:calc(1em + 2px);height:calc(1em + 2px)}.tw-stat__value{margin-left:.5rem}\n"
        },
        M7XN: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
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
                    n = {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    };
                return {
                    kind: "Fragment",
                    name: "EventLeafView_event",
                    type: "EventLeaf",
                    metadata: null,
                    argumentDefinitions: [],
                    selections: [{
                        kind: "ScalarField",
                        alias: null,
                        name: "endAt",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "__typename",
                        args: null,
                        storageKey: null
                    }, e, {
                        kind: "ScalarField",
                        alias: null,
                        name: "imageURL",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "ScalarField",
                        alias: null,
                        name: "startAt",
                        args: null,
                        storageKey: null
                    }, t, {
                        kind: "ScalarField",
                        alias: null,
                        name: "description",
                        args: null,
                        storageKey: null
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "channel",
                        storageKey: null,
                        args: null,
                        concreteType: "User",
                        plural: !1,
                        selections: [t, {
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
                            name: "login",
                            args: null,
                            storageKey: null
                        }, n]
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
                        }, n, {
                            kind: "ScalarField",
                            alias: null,
                            name: "boxArtURL",
                            args: null,
                            storageKey: null
                        }]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "parent",
                        storageKey: null,
                        args: null,
                        concreteType: "EventCollection",
                        plural: !1,
                        selections: [t, e]
                    }, {
                        kind: "LinkedField",
                        alias: null,
                        name: "premiere",
                        storageKey: null,
                        args: null,
                        concreteType: "Premiere",
                        plural: !1,
                        selections: [t, {
                            kind: "ScalarField",
                            alias: null,
                            name: "status",
                            args: null,
                            storageKey: null
                        }, {
                            kind: "LinkedField",
                            alias: null,
                            name: "pastPremiere",
                            storageKey: null,
                            args: null,
                            concreteType: "Video",
                            plural: !1,
                            selections: [{
                                kind: "FragmentSpread",
                                name: "EventPanels_video",
                                args: null
                            }]
                        }]
                    }]
                }
            }();
            a.hash = "0745a5ba62b675986ef6138e6e0526f2", t.default = a
        },
        NM2R: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return v
            });
            var a = n("h7sq"),
                l = n("tS02"),
                i = n("/XES"),
                r = n("ztBH"),
                o = n("Fayl"),
                s = n("8egr"),
                p = n("ERkP"),
                c = n.n(p),
                u = n("pnpS"),
                d = n("HIP8"),
                m = n("B8T3"),
                g = n("c67T"),
                f = c.a.createElement,
                h = function(e) {
                    function t() {
                        return Object(a.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
                    }
                    return Object(o.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.video;
                            return f(m.a, {
                                linkTo: d.a.Vod,
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
                }(c.a.Component),
                v = Object(u.createFragmentContainer)(h, {
                    video: function() {
                        return n("yMDu")
                    }
                })
        },
        NjQ2: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                kind: "Fragment",
                name: "EventCollectionView_event",
                type: "EventCollection",
                metadata: null,
                argumentDefinitions: [],
                selections: [{
                    kind: "ScalarField",
                    alias: null,
                    name: "__typename",
                    args: null,
                    storageKey: null
                }, {
                    kind: "ScalarField",
                    alias: null,
                    name: "id",
                    args: null,
                    storageKey: null
                }, {
                    kind: "ScalarField",
                    alias: null,
                    name: "title",
                    args: null,
                    storageKey: null
                }, {
                    kind: "ScalarField",
                    alias: null,
                    name: "imageURL",
                    args: null,
                    storageKey: null
                }, {
                    kind: "ScalarField",
                    alias: null,
                    name: "startAt",
                    args: null,
                    storageKey: null
                }, {
                    kind: "ScalarField",
                    alias: null,
                    name: "endAt",
                    args: null,
                    storageKey: null
                }, {
                    kind: "ScalarField",
                    alias: null,
                    name: "description",
                    args: null,
                    storageKey: null
                }],
                hash: "3e19356c7f03ca068dc2297b11ba13df"
            };
            t.default = a
        },
        c67T: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var a = 60,
                l = 60 * a,
                i = 24 * l;

            function r(e) {
                var t = e,
                    n = Math.floor(t / i);
                t -= n * i;
                var r = Math.floor(t / l);
                t -= r * l;
                for (var o = Math.floor(t / a), s = [n, r, o, t - o * a]; 0 === s[0] && s.length > 2;) s.shift();
                return s.map(function(e, t) {
                    return 0 === t || e > 9 ? e : "0" + e
                }).join(":")
            }
        },
        eTdS: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                kind: "Fragment",
                name: "EventPanels_video",
                type: "Video",
                metadata: null,
                argumentDefinitions: [],
                selections: [{
                    kind: "ScalarField",
                    alias: null,
                    name: "id",
                    args: null,
                    storageKey: null
                }, {
                    kind: "FragmentSpread",
                    name: "VideoRowItem_video",
                    args: null
                }],
                hash: "b4428833793fe7a4f44c5065d646e34c"
            };
            t.default = a
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
        mBIT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var a = n("uFB0"),
                l = n.n(a),
                i = n("ERkP"),
                r = n("LaCE"),
                o = n("ERpE"),
                s = n("shpO"),
                p = n("7vUx"),
                c = function(e) {
                    var t;
                    e.icon && (t = i.createElement(s.a, {
                        asset: e.icon
                    }));
                    var n = i.createElement("div", l()({
                        className: Object(r.a)({
                            "tw-stat": !0
                        })
                    }, Object(o.a)(e)), i.createElement("span", {
                        className: "tw-stat__icon"
                    }, t), i.createElement("span", {
                        className: "tw-stat__value",
                        "data-a-target": "tw-stat-value"
                    }, e.value));
                    return e.label ? i.createElement(p.a, {
                        direction: e.tooltipDirection ? e.tooltipDirection : p.c.Bottom,
                        align: e.tooltipAlign ? e.tooltipAlign : p.b.Center,
                        label: e.label
                    }, n) : n
                };
            c.displayName = "Stat"
        },
        snZo: function(e, t, n) {
            "use strict";
            n.r(t), t.default = ".tw-tooltip-wrapper{display:inline-flex;position:relative}.tw-root--hover .tw-tooltip-wrapper:hover .tw-tooltip,.tw-root--touch .tw-tooltip-wrapper:hover .tw-tooltip,.tw-tooltip-wrapper--show .tw-tooltip{display:block}.tw-tooltip{padding:.5rem;border-radius:2px;background:#040109;color:#fff;display:none;position:absolute;left:0;font-size:1.2rem;line-height:1;text-align:left;white-space:nowrap;z-index:2000;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tw-root--theme-dark .tw-tooltip{padding:3px 6px;border-radius:2px;background:#fff;color:#040109}.tw-root--theme-light .tw-tooltip{padding:3px 6px;border-radius:2px;background:#040109;color:#fff}.tw-tooltip::after,.tw-tooltip::before{position:absolute;content:''}.tw-tooltip::before{top:-6px;left:-6px;width:calc(100% + 12px);height:calc(100% + 12px);z-index:-1}.tw-tooltip::after{background:#040109;width:6px;height:6px;transform:rotate(45deg);z-index:-1}.tw-root--theme-dark .tw-tooltip::after{background:#fff}.tw-root--theme-light .tw-tooltip::after{background:#040109}.tw-tooltip--wrap{line-height:1.2;white-space:normal}.tw-tooltip--left{top:0;right:100%;left:auto;margin-right:6px}.tw-tooltip--left::after{border-radius:0 2px 0 0;top:6px;left:100%;margin-left:-3px}.tw-root--theme-dark .tw-tooltip--left::after,.tw-root--theme-light .tw-tooltip--left::after{border-radius:0 2px 0 0}.tw-tooltip--right{top:0;left:100%;margin-left:6px}.tw-tooltip--right::after{border-radius:0 0 0 2px;top:6px;left:0;margin-left:-3px}.tw-root--theme-dark .tw-tooltip--right::after,.tw-root--theme-light .tw-tooltip--right::after{border-radius:0 0 0 2px}.tw-tooltip--left.tw-tooltip--align-center,.tw-tooltip--right.tw-tooltip--align-center{top:50%;transform:translateY(-50%)}.tw-tooltip--left.tw-tooltip--align-center::after,.tw-tooltip--right.tw-tooltip--align-center::after{top:50%;margin-top:-3px}.tw-tooltip--up{top:auto;bottom:100%;left:0;margin-bottom:6px}.tw-tooltip--up::after{border-radius:0 0 2px;top:100%;left:6px;margin-top:-3px}.tw-root--theme-dark .tw-tooltip--up::after,.tw-root--theme-light .tw-tooltip--up::after{border-radius:0 0 2px}.tw-tooltip--down{top:100%;left:0;margin-top:6px}.tw-tooltip--down::after{border-radius:2px 0 0;top:-3px;left:6px}.tw-root--theme-dark .tw-tooltip--down::after,.tw-root--theme-light .tw-tooltip--down::after{border-radius:2px 0 0}.tw-tooltip--down.tw-tooltip--align-center,.tw-tooltip--up.tw-tooltip--align-center{left:50%;transform:translateX(-50%)}.tw-tooltip--down.tw-tooltip--align-center::after,.tw-tooltip--up.tw-tooltip--align-center::after{left:50%;margin-left:-3px}.tw-tooltip--down.tw-tooltip--align-right,.tw-tooltip--up.tw-tooltip--align-right{top:auto;right:0;left:auto}.tw-tooltip--down.tw-tooltip--align-right::after,.tw-tooltip--up.tw-tooltip--align-right::after{top:100%;left:100%;margin-left:-12px}.tw-tooltip--down.tw-tooltip--align-right{top:100%}.tw-tooltip--down.tw-tooltip--align-right::after{top:-3px;left:100%;margin-left:-12px}\n"
        },
        vjD1: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/Event", function() {
                return n("4vvM")
            }])
        },
        x7DS: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        kind: "LocalArgument",
                        name: "id",
                        type: "ID!",
                        defaultValue: null
                    }],
                    t = [{
                        kind: "Variable",
                        name: "id",
                        variableName: "id",
                        type: "ID!"
                    }],
                    n = {
                        kind: "ScalarField",
                        alias: null,
                        name: "__typename",
                        args: null,
                        storageKey: null
                    },
                    a = {
                        kind: "ScalarField",
                        alias: null,
                        name: "id",
                        args: null,
                        storageKey: null
                    },
                    l = {
                        kind: "ScalarField",
                        alias: null,
                        name: "title",
                        args: null,
                        storageKey: null
                    },
                    i = {
                        kind: "ScalarField",
                        alias: null,
                        name: "login",
                        args: null,
                        storageKey: null
                    },
                    r = {
                        kind: "ScalarField",
                        alias: null,
                        name: "imageURL",
                        args: null,
                        storageKey: null
                    },
                    o = {
                        kind: "ScalarField",
                        alias: null,
                        name: "startAt",
                        args: null,
                        storageKey: null
                    },
                    s = {
                        kind: "ScalarField",
                        alias: null,
                        name: "endAt",
                        args: null,
                        storageKey: null
                    },
                    p = {
                        kind: "ScalarField",
                        alias: null,
                        name: "description",
                        args: null,
                        storageKey: null
                    },
                    c = {
                        kind: "ScalarField",
                        alias: null,
                        name: "displayName",
                        args: null,
                        storageKey: null
                    },
                    u = {
                        kind: "ScalarField",
                        alias: null,
                        name: "name",
                        args: null,
                        storageKey: null
                    };
                return {
                    kind: "Request",
                    operationKind: "query",
                    name: "Event_Query",
                    id: null,
                    text: "query Event_Query(\n  $id: ID!\n) {\n  event(id: $id) {\n    __typename\n    ... on EventLeaf {\n      __typename\n      id\n      title\n      channel {\n        login\n        id\n      }\n      ...EventLeafView_event\n    }\n    ... on EventCollection {\n      __typename\n      id\n      title\n      ...EventCollectionView_event\n    }\n  }\n}\n\nfragment EventLeafView_event on EventLeaf {\n  __typename\n  id\n  title\n  imageURL\n  startAt\n  endAt\n  description\n  channel {\n    id\n    profileImageURL(width: 50)\n    login\n    displayName\n  }\n  game {\n    id\n    name\n    displayName\n    boxArtURL\n  }\n  parent {\n    id\n    title\n  }\n  premiere {\n    id\n    status\n    pastPremiere {\n      ...EventPanels_video\n      id\n    }\n  }\n}\n\nfragment EventCollectionView_event on EventCollection {\n  __typename\n  id\n  title\n  imageURL\n  startAt\n  endAt\n  description\n}\n\nfragment EventPanels_video on Video {\n  id\n  ...VideoRowItem_video\n}\n\nfragment VideoRowItem_video on Video {\n  id\n  title\n  previewThumbnailURL\n  viewCount\n  lengthSeconds\n  createdAt\n  game {\n    id\n    name\n  }\n}\n",
                    metadata: {},
                    fragment: {
                        kind: "Fragment",
                        name: "Event_Query",
                        type: "Query",
                        metadata: null,
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "event",
                            storageKey: null,
                            args: t,
                            concreteType: null,
                            plural: !1,
                            selections: [n, {
                                kind: "InlineFragment",
                                type: "EventCollection",
                                selections: [a, l, {
                                    kind: "FragmentSpread",
                                    name: "EventCollectionView_event",
                                    args: null
                                }]
                            }, {
                                kind: "InlineFragment",
                                type: "EventLeaf",
                                selections: [a, l, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "channel",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "User",
                                    plural: !1,
                                    selections: [i]
                                }, {
                                    kind: "FragmentSpread",
                                    name: "EventLeafView_event",
                                    args: null
                                }]
                            }]
                        }]
                    },
                    operation: {
                        kind: "Operation",
                        name: "Event_Query",
                        argumentDefinitions: e,
                        selections: [{
                            kind: "LinkedField",
                            alias: null,
                            name: "event",
                            storageKey: null,
                            args: t,
                            concreteType: null,
                            plural: !1,
                            selections: [n, {
                                kind: "InlineFragment",
                                type: "EventCollection",
                                selections: [a, l, r, o, s, p]
                            }, {
                                kind: "InlineFragment",
                                type: "EventLeaf",
                                selections: [o, l, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "channel",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "User",
                                    plural: !1,
                                    selections: [i, a, {
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
                                    }, c]
                                }, r, a, s, p, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "game",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Game",
                                    plural: !1,
                                    selections: [a, u, c, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "boxArtURL",
                                        args: null,
                                        storageKey: null
                                    }]
                                }, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "parent",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "EventCollection",
                                    plural: !1,
                                    selections: [a, l]
                                }, {
                                    kind: "LinkedField",
                                    alias: null,
                                    name: "premiere",
                                    storageKey: null,
                                    args: null,
                                    concreteType: "Premiere",
                                    plural: !1,
                                    selections: [a, {
                                        kind: "ScalarField",
                                        alias: null,
                                        name: "status",
                                        args: null,
                                        storageKey: null
                                    }, {
                                        kind: "LinkedField",
                                        alias: null,
                                        name: "pastPremiere",
                                        storageKey: null,
                                        args: null,
                                        concreteType: "Video",
                                        plural: !1,
                                        selections: [a, l, {
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
                                            selections: [a, u]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }();
            a.hash = "e473c75dd25444550e06a284e3bb8417", t.default = a
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
        ["vjD1", 1, 0]
    ]
]);