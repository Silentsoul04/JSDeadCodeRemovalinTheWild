(("undefined" !== typeof self ? self : this).webpackJsonp = ("undefined" !== typeof self ? self : this).webpackJsonp || []).push([
    [15], {
        0: function(e, t) {},
        HaU7: function(e, t, r) {
            "use strict";
            var n = r("E1+a"),
                o = r("Z05o"),
                a = r("OY2S"),
                i = r("zBsc"),
                c = r("wt0f"),
                s = r("k9sC"),
                u = r("lpv4");
            t.__esModule = !0, t.Container = function(e) {
                0;
                return e.children
            }, t.createUrl = g, t.default = void 0;
            var p = u(r("uFB0")),
                l = u(r("WWUj")),
                d = u(r("ERkP")),
                h = u(r("aWzz")),
                f = r("fvxO");
            t.AppInitialProps = f.AppInitialProps;
            var v = r("7xIC");

            function m(e) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, l.default)(s.mark(function e(t) {
                    var r, n, o;
                    return s.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.Component, n = t.ctx, e.next = 3, (0, f.loadGetInitialProps)(r, n);
                            case 3:
                                return o = e.sent, e.abrupt("return", {
                                    pageProps: o
                                });
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var w = function(e) {
                function t() {
                    return n(this, t), a(this, i(t).apply(this, arguments))
                }
                return c(t, e), o(t, [{
                    key: "getChildContext",
                    value: function() {
                        return {
                            router: (0, v.makePublicRouterInstance)(this.props.router)
                        }
                    }
                }, {
                    key: "componentDidCatch",
                    value: function(e, t) {
                        throw e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.router,
                            r = e.Component,
                            n = e.pageProps,
                            o = g(t);
                        return d.default.createElement(r, (0, p.default)({}, n, {
                            url: o
                        }))
                    }
                }]), t
            }(d.default.Component);

            function g(e) {
                var t = e.pathname,
                    r = e.asPath,
                    n = e.query;
                return {
                    get query() {
                        return n
                    },
                    get pathname() {
                        return t
                    },
                    get asPath() {
                        return r
                    },
                    back: function() {
                        e.back()
                    },
                    push: function(t, r) {
                        return e.push(t, r)
                    },
                    pushTo: function(t, r) {
                        var n = r ? t : "",
                            o = r || t;
                        return e.push(n, o)
                    },
                    replace: function(t, r) {
                        return e.replace(t, r)
                    },
                    replaceTo: function(t, r) {
                        var n = r ? t : "",
                            o = r || t;
                        return e.replace(n, o)
                    }
                }
            }
            t.default = w, w.childContextTypes = {
                router: h.default.object
            }, w.origGetInitialProps = m, w.getInitialProps = m
        },
        "Khd+": function(e, t, r) {
            e.exports = r("HaU7")
        },
        ODB1: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r("cha2")
            }])
        },
        cha2: function(e, t, r) {
            "use strict";
            r.r(t);
            var n, o = r("LcAa"),
                a = r.n(o),
                i = r("emby"),
                c = r.n(i),
                s = r("sXAp"),
                u = r.n(s),
                p = r("FIas"),
                l = r.n(p),
                d = r("8k7s"),
                h = r.n(d),
                f = r("TPw6"),
                v = r.n(f),
                m = r("k9sC"),
                b = r.n(m),
                w = r("yP/C"),
                g = r("h7sq"),
                O = r("tS02"),
                E = r("/XES"),
                y = r("vTWr"),
                j = r("ztBH"),
                k = r("amHM"),
                P = r("Fayl"),
                R = r("znL5"),
                x = r("ERkP"),
                S = r.n(x),
                I = r("HIP8"),
                A = r("AS2I"),
                C = r("jp4N"),
                D = r.n(C),
                U = r("q5o0"),
                L = r.n(U),
                T = r("xeY9"),
                W = r("ds2y"),
                B = r("Z05o"),
                N = r.n(B);

            function F() {
                if (window.screen && window.screen.orientation && window.screen.orientation.type) return window.screen.orientation.type.split("-")[0];
                if ("number" === typeof window.orientation) {
                    var e = Math.abs(window.orientation);
                    return 45 < e && e < 135 ? n.Landscape : n.Portrait
                }
                var t = document.documentElement && document.documentElement.clientWidth,
                    r = document.documentElement && document.documentElement.clientHeight;
                return t && r ? t > r ? n.Landscape : n.Portrait : n.Landscape
            }

            function H(e) {
                void 0 === e && (e = window.document.referrer);
                try {
                    return new URL(e).host
                } catch (Xe) {
                    return ""
                }
            }

            function M(e) {
                void 0 === e && (e = window.document.referrer);
                var t = H(e);
                return t ? (t.match(/([^.]+\.[^.]+)$/) || [])[1] : ""
            }! function(e) {
                e.Portrait = "portrait", e.Landscape = "landscape"
            }(n || (n = {}));
            var G = r("Ss8n"),
                q = function() {
                    function e() {}
                    return e.prototype.reportEvent = function(e) {
                        G.a.log(e)
                    }, e
                }(),
                X = function(e) {
                    var t = this;
                    this.reportEvent = function(e, r) {
                        t.reporters.forEach(function(t) {
                            t.reportEvent(e, r)
                        })
                    }, this.reporters = e
                },
                Y = r("i3c9"),
                V = r.n(Y),
                K = r("tZkf"),
                z = r.n(K),
                J = "application/x-www-form-urlencoded; charset=UTF-8",
                Q = function() {
                    function e(t) {
                        var r = this;
                        this.reportEvent = function(t, n) {
                            void 0 === n && (n = {});
                            var o = e.PrepareEvent(t);
                            if (n.useBeacon && "sendBeacon" in navigator) {
                                var a = new Blob([o], {
                                    type: J
                                });
                                navigator.sendBeacon(r.spadeURI, a)
                            } else fetch(r.spadeURI, {
                                body: o,
                                headers: {
                                    "Content-Type": J
                                },
                                method: "POST",
                                mode: "no-cors"
                            })
                        }, this.spadeURI = t
                    }
                    return e.PrepareEvent = function(e) {
                        var t = z.a.parse(JSON.stringify([e]));
                        return "data=" + V.a.stringify(t)
                    }, e
                }();

            function Z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(r, !0).forEach(function(t) {
                        D()(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(r).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ee = function() {
                    function e(e) {
                        var t = this,
                            r = e.appVersion,
                            n = e.clientApp,
                            o = e.debugSpade,
                            a = e.deviceID,
                            i = e.language,
                            c = e.platform,
                            s = e.sessionID,
                            u = e.spadeURI;
                        this.reportEvent = function(e, r) {
                            var n = $({}, e, {
                                properties: $({}, t.staticProperties, {}, t.dynamicProperties, {}, e.properties || {})
                            });
                            t.reporter.reportEvent(n, r)
                        }, this.debugSpade = o || !1, this.staticProperties = {
                            app_session_id: s,
                            app_version: r,
                            browser: window.navigator.userAgent,
                            client_app: n,
                            device_id: a,
                            domain: window.location.hostname,
                            host: window.location.protocol + "//" + window.location.hostname,
                            language: i.toLowerCase(),
                            platform: c,
                            referrer: window.document.referrer || "",
                            referrer_domain: M(),
                            referrer_host: H()
                        }, this.reporter = new X([new q, new Q(u)])
                    }
                    return N()(e, [{
                        key: "dynamicProperties",
                        get: function() {
                            return {
                                orientation: F(),
                                url: window.document.location ? window.document.location.href : void 0,
                                viewport_height: window.innerHeight,
                                viewport_width: window.innerWidth
                            }
                        }
                    }]), e
                }(),
                te = x.createContext({}),
                re = te.Provider,
                ne = te.Consumer,
                oe = function(e) {
                    function t(t) {
                        var r;
                        return (r = e.call(this, t) || this).reporter = Object(W.a)() ? new ee(t) : new q, r
                    }
                    return L()(t, e), t.prototype.render = function() {
                        return x.createElement(re, {
                            value: {
                                reporter: this.reporter
                            }
                        }, this.props.children)
                    }, t
                }(x.Component);

            function ae(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ie(e) {
                var t;
                return (t = function(t) {
                    function r() {
                        return t.apply(this, arguments) || this
                    }
                    return L()(r, t), r.prototype.render = function() {
                        var t = this;
                        return S.a.createElement(ne, null, function(r) {
                            var n = r.reporter,
                                o = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? ae(r, !0).forEach(function(t) {
                                            D()(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ae(r).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }({}, t.props, {
                                    reportEvent: n.reportEvent
                                });
                            return S.a.createElement(e, o)
                        })
                    }, r
                }(S.a.Component)).displayName = "SpadeReporter(" + Object(T.a)(e) + ")", t
            }
            oe.displayName = "SpadeReporterRoot";
            var ce = r("753B"),
                se = S.a.createElement,
                ue = [I.a.Search, I.a.Channel, I.a.Vod],
                pe = ie(function(e) {
                    var t = e.children,
                        r = e.reportEvent,
                        n = Object(ce.d)().currentRouteName;
                    return se(A.c, {
                        currentRouteName: n,
                        searchCorrelationRoutes: ue,
                        onEvent: r
                    }, t)
                }),
                le = r("vvfS"),
                de = r("/JXg"),
                he = S.a.createElement,
                fe = function(e) {
                    function t() {
                        return Object(g.a)(this, t), Object(E.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(P.a)(t, e), Object(O.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.env.client;
                            return he(le.b, {
                                apiKey: this.props.isDebug ? "key_test_ahupan1EKvF7XkpepyA3vpfivrdlOlMg" : "key_live_jgBdao5vVtyZ3hdckxy8jlkkzqooQltZ",
                                deviceID: e && e.deviceID
                            }, this.props.children)
                        }
                    }]), t
                }(S.a.Component),
                ve = Object(de.a)(fe),
                me = r("/hOb"),
                be = r("LcWN"),
                we = ie(function(e) {
                    function t(e) {
                        var r;
                        return Object(g.a)(this, t), r = Object(E.a)(this, Object(j.a)(t).call(this, e)), Object(W.a)() && Object(be.c)(e.reportEvent), r
                    }
                    return Object(P.a)(t, e), Object(O.a)(t, [{
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), t
                }(S.a.Component)),
                ge = r("QB7R"),
                Oe = r("hrRz"),
                Ee = S.a.createElement,
                ye = ie(function(e) {
                    var t = Object(ce.d)(),
                        r = t.queryParams,
                        n = r.tt_content,
                        o = r.tt_email_id,
                        a = r.tt_medium,
                        i = t.currentRouteName;
                    return Ee(ge.c, {
                        children: e.children,
                        interactionMedium: i,
                        location: e.inError ? "internal_error" : i,
                        onEvent: e.reportEvent,
                        twitchTracking: {
                            content: Object(Oe.a)(n),
                            emailID: Object(Oe.a)(o),
                            medium: Object(Oe.a)(a)
                        }
                    })
                }),
                je = r("gAwj"),
                ke = S.a.createElement,
                Pe = ie(function(e) {
                    function t() {
                        return Object(g.a)(this, t), Object(E.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(P.a)(t, e), Object(O.a)(t, [{
                        key: "render",
                        value: function() {
                            return ke(je.c, {
                                children: this.props.children,
                                experimentGroupsForUser: this.props.experimentGroupsForUser,
                                onEvent: this.props.reportEvent,
                                userExperimentSeed: this.props.userExperimentSeed
                            })
                        }
                    }]), t
                }(S.a.Component)),
                _e = r("sVKI"),
                Re = r("QZ2g");
            var xe = r("NAXs"),
                Se = r("yyOJ"),
                Ie = S.a.createElement,
                Ae = ie(function(e) {
                    var t = e.children,
                        r = e.reportEvent,
                        n = Object(ce.d)(),
                        o = n.currentRouteName,
                        a = n.currentPath,
                        i = Object(_e.a)(),
                        c = S.a.useMemo(function() {
                            return {
                                deviceID: i.client.deviceID,
                                netInfo: i.client.netInfo,
                                platform: i.common.platform,
                                sessionID: i.client.sessionID
                            }
                        }, [i]),
                        s = S.a.useCallback(function(e) {
                            var t = function(e) {
                                return e.event === Re.a.PageAbandoned || e.event === Re.a.CustomEvent && "player-abandon" === e.properties.key
                            }(e);
                            r(e, {
                                useBeacon: t
                            })
                        }, [r]);
                    return Ie(xe.c, {
                        appData: c,
                        children: t,
                        componentReportingThreshold: Se.LATENCY_COMPONENT_REPORTING_THRESHOLD,
                        currentLocation: o,
                        currentPath: a,
                        onEvent: s,
                        reportTransitionAbandonment: !0
                    })
                }),
                Ce = S.a.createElement,
                De = function(e) {
                    function t() {
                        return Object(g.a)(this, t), Object(E.a)(this, Object(j.a)(t).apply(this, arguments))
                    }
                    return Object(P.a)(t, e), Object(O.a)(t, [{
                        key: "render",
                        value: function() {
                            return Ce(oe, {
                                appVersion: this.props.env.common.appVersion,
                                children: this.props.children,
                                clientApp: this.props.env.common.clientApp,
                                deviceID: this.props.env.client.deviceID,
                                language: this.props.env.common.language,
                                platform: this.props.env.common.platform,
                                sessionID: this.props.env.client.sessionID,
                                spadeURI: this.props.spadeURI
                            })
                        }
                    }]), t
                }(S.a.Component),
                Ue = Object(de.a)(De),
                Le = r("ysqo"),
                Te = r.n(Le),
                We = S.a.createElement;
            var Be = S.a.memo(function(e) {
                    var t = e.currentPath,
                        r = "twitch://m.twitch.tv".concat(t, "?referrer=https%3A%2F%2Fm.twitch.tv%2F"),
                        n = "".concat(Se.BASE_CANONICAL_URL).concat(t);
                    return We(Te.a, null, We("meta", {
                        property: "al:ios:url",
                        content: r
                    }), We("meta", {
                        property: "al:android:url",
                        content: r
                    }), We("meta", {
                        property: "og:url",
                        content: n
                    }))
                }),
                Ne = r("h6tV"),
                Fe = r("vI2y"),
                He = r("I2OU");
            try {
                self["workbox:window:4.3.1"] && _()
            } catch (Me) {}
            var Me = function(e, t) {
                return new Promise(function(r) {
                    var n = new MessageChannel;
                    n.port1.onmessage = function(e) {
                        return r(e.data)
                    }, e.postMessage(t, [n.port2])
                })
            };

            function Ge(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function qe(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            try {
                self["workbox:core:4.3.1"] && _()
            } catch (Me) {}
            var Xe = function() {
                    var e = this;
                    this.promise = new Promise(function(t, r) {
                        e.resolve = t, e.reject = r
                    })
                },
                Ye = function(e, t) {
                    return new URL(e, location).href === new URL(t, location).href
                },
                Ve = function(e, t) {
                    Object.assign(this, t, {
                        type: e
                    })
                };

            function Ke(e) {
                return function() {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
            }

            function ze(e, t, r) {
                return r ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
            }

            function Je() {}
            var Qe = function(e) {
                    var t, r;

                    function n(t, r) {
                        var n;
                        return void 0 === r && (r = {}), (n = e.call(this) || this).t = t, n.i = r, n.o = 0, n.u = new Xe, n.s = new Xe, n.h = new Xe, n.v = n.v.bind(qe(qe(n))), n.l = n.l.bind(qe(qe(n))), n.g = n.g.bind(qe(qe(n))), n.m = n.m.bind(qe(qe(n))), n
                    }
                    r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
                    var o, a, i = n.prototype;
                    return i.register = Ke(function(e) {
                        var t, r, n = this,
                            o = (void 0 === e ? {} : e).immediate,
                            a = void 0 !== o && o;
                        return t = function() {
                            return n.p = Boolean(navigator.serviceWorker.controller), n.P = n.R(), ze(n.k(), function(e) {
                                n.B = e, n.P && (n.O = n.P, n.s.resolve(n.P), n.h.resolve(n.P), n.j(n.P), n.P.addEventListener("statechange", n.l, {
                                    once: !0
                                }));
                                var t = n.B.waiting;
                                return t && Ye(t.scriptURL, n.t) && (n.O = t, Promise.resolve().then(function() {
                                    n.dispatchEvent(new Ve("waiting", {
                                        sw: t,
                                        wasWaitingBeforeRegister: !0
                                    }))
                                })), n.O && n.u.resolve(n.O), n.B.addEventListener("updatefound", n.g), navigator.serviceWorker.addEventListener("controllerchange", n.m, {
                                    once: !0
                                }), "BroadcastChannel" in self && (n.C = new BroadcastChannel("workbox"), n.C.addEventListener("message", n.v)), navigator.serviceWorker.addEventListener("message", n.v), n.B
                            })
                        }, (r = function() {
                            if (!a && "complete" !== document.readyState) return function(e, t) {
                                return e && e.then ? e.then(Je) : Promise.resolve()
                            }(new Promise(function(e) {
                                return addEventListener("load", e)
                            }))
                        }()) && r.then ? r.then(t) : t()
                    }), i.getSW = Ke(function() {
                        return this.O || this.u.promise
                    }), i.messageSW = Ke(function(e) {
                        return ze(this.getSW(), function(t) {
                            return Me(t, e)
                        })
                    }), i.R = function() {
                        var e = navigator.serviceWorker.controller;
                        if (e && Ye(e.scriptURL, this.t)) return e
                    }, i.k = Ke(function() {
                        var e = this;
                        return function(e, t) {
                            try {
                                var r = e()
                            } catch (e) {
                                return t(e)
                            }
                            return r && r.then ? r.then(void 0, t) : r
                        }(function() {
                            return ze(navigator.serviceWorker.register(e.t, e.i), function(t) {
                                return e.L = performance.now(), t
                            })
                        }, function(e) {
                            throw e
                        })
                    }), i.j = function(e) {
                        Me(e, {
                            type: "WINDOW_READY",
                            meta: "workbox-window"
                        })
                    }, i.g = function() {
                        var e = this.B.installing;
                        this.o > 0 || !Ye(e.scriptURL, this.t) || performance.now() > this.L + 6e4 ? (this.W = e, this.B.removeEventListener("updatefound", this.g)) : (this.O = e, this.u.resolve(e)), ++this.o, e.addEventListener("statechange", this.l)
                    }, i.l = function(e) {
                        var t = this,
                            r = e.target,
                            n = r.state,
                            o = r === this.W,
                            a = o ? "external" : "",
                            i = {
                                sw: r,
                                originalEvent: e
                            };
                        !o && this.p && (i.isUpdate = !0), this.dispatchEvent(new Ve(a + n, i)), "installed" === n ? this._ = setTimeout(function() {
                            "installed" === n && t.B.waiting === r && t.dispatchEvent(new Ve(a + "waiting", i))
                        }, 200) : "activating" === n && (clearTimeout(this._), o || this.s.resolve(r))
                    }, i.m = function(e) {
                        var t = this.O;
                        t === navigator.serviceWorker.controller && (this.dispatchEvent(new Ve("controlling", {
                            sw: t,
                            originalEvent: e
                        })), this.h.resolve(t))
                    }, i.v = function(e) {
                        var t = e.data;
                        this.dispatchEvent(new Ve("message", {
                            data: t,
                            originalEvent: e
                        }))
                    }, o = n, (a = [{
                        key: "active",
                        get: function() {
                            return this.s.promise
                        }
                    }, {
                        key: "controlling",
                        get: function() {
                            return this.h.promise
                        }
                    }]) && Ge(o.prototype, a), n
                }(function() {
                    function e() {
                        this.D = {}
                    }
                    var t = e.prototype;
                    return t.addEventListener = function(e, t) {
                        this.T(e).add(t)
                    }, t.removeEventListener = function(e, t) {
                        this.T(e).delete(t)
                    }, t.dispatchEvent = function(e) {
                        e.target = this, this.T(e.type).forEach(function(t) {
                            return t(e)
                        })
                    }, t.T = function(e) {
                        return this.D[e] = this.D[e] || new Set
                    }, e
                }()),
                Ze = function(e) {
                    function t() {
                        var e, r;
                        Object(g.a)(this, t);
                        for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                        return r = Object(E.a)(this, (e = Object(j.a)(t)).call.apply(e, [this].concat(o))), Object(R.a)(Object(y.a)(r), "trackWorkerInstalled", Object(Fe.a)(r.props.reportLatencyEvent("workerInstalled"))), Object(R.a)(Object(y.a)(r), "trackWorkerControlling", Object(Fe.a)(r.props.reportLatencyEvent("workerControlling"))), Object(R.a)(Object(y.a)(r), "trackWorkerActivated", Object(Fe.a)(r.props.reportLatencyEvent("workerActivated"))), Object(R.a)(Object(y.a)(r), "workbox", null), Object(R.a)(Object(y.a)(r), "installedHandler", t.workboxHandler(function(e) {
                            G.a.info("Service worker status: installed"), r.trackWorkerInstalled()
                        })), Object(R.a)(Object(y.a)(r), "activatedHandler", t.workboxHandler(function(e) {
                            G.a.info("Service worker status: activated"), r.trackWorkerActivated()
                        })), Object(R.a)(Object(y.a)(r), "controllingHandler", t.workboxHandler(function(e) {
                            G.a.info("Service worker status: controlling"), r.trackWorkerControlling()
                        })), Object(R.a)(Object(y.a)(r), "registerServiceWorker", Object(w.a)(b.a.mark(function e() {
                            return b.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.workbox) {
                                            e.next = 3;
                                            break
                                        }
                                        return G.a.error("Workbox instance is not available"), e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, r.workbox.register();
                                    case 6:
                                        e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(3), G.a.error({
                                            error: "SW registration failed: ".concat(Object(He.a)(e.t0))
                                        });
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 8]
                            ])
                        }))), r
                    }
                    return Object(P.a)(t, e), Object(O.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            "serviceWorker" in navigator ? (this.workbox = new Qe(Se.SERVICE_WORKER_HREF), this.workbox.addEventListener("installed", this.installedHandler), this.workbox.addEventListener("activated", this.activatedHandler), this.workbox.addEventListener("controlling", this.controllingHandler), "complete" === document.readyState ? this.registerServiceWorker() : window.addEventListener("load", this.registerServiceWorker)) : G.a.info("SW not supported by browser")
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.workbox && (this.workbox.removeEventListener("installed", this.installedHandler), this.workbox.removeEventListener("activated", this.activatedHandler), this.workbox.removeEventListener("controlling", this.controllingHandler))
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), t
                }(S.a.Component);
            Object(R.a)(Ze, "displayName", "ServiceWorker"), Object(R.a)(Ze, "workboxHandler", function(e) {
                return function(t) {
                    "isUpdate" in t && t.isUpdate || e(t)
                }
            });
            var $e = Object(Ne.a)(Ze),
                et = r("Khd+"),
                tt = r.n(et),
                rt = r("jMV1"),
                nt = r("UUhf"),
                ot = r("loQz");
            var at = r("7vVX"),
                it = r("XbHE"),
                ct = r("tiCm"),
                st = r("Jv1f"),
                ut = r("WWUj"),
                pt = r.n(ut),
                lt = r("jRMw"),
                dt = r.n(lt),
                ht = r("lA+U"),
                ft = r("HWWO"),
                vt = r("ORcP"),
                mt = function(e) {
                    function t(t) {
                        var r, n = t.middleware,
                            o = dt()(t, ["middleware"]);
                        return (r = e.call(this, n || []) || this).sentinelReportOptions = o, r
                    }
                    L()(t, e);
                    var r = t.prototype;
                    return r.debug = function(e) {
                        this.report(e, vt.a.DEBUG)
                    }, r.log = function(e) {
                        this.report(e, vt.a.DEBUG)
                    }, r.info = function(e) {
                        this.report(e, vt.a.INFO)
                    }, r.warn = function(e) {
                        this.report(e, vt.a.WARNING)
                    }, r.error = function(e) {
                        this.report(e, vt.a.ERROR)
                    }, r.buildReport = function(e, t) {
                        return {
                            buildID: this.sentinelReportOptions.buildID,
                            clientTime: Date.now(),
                            deviceID: this.sentinelReportOptions.deviceID,
                            location: Object(W.a)() ? window.location.href : void 0,
                            logEntries: [this.getSentinelLogEntry(e, t)],
                            pageComponentName: this.sentinelReportOptions.pageComponentName || "",
                            pageSessionID: this.sentinelReportOptions.pageSessionID || "",
                            platform: "mobile_web",
                            product: "mobile_web",
                            userAgent: navigator.userAgent,
                            userID: 0,
                            username: ""
                        }
                    }, r.getSentinelLogEntry = function(e, t) {
                        var r = this.getLogObject(t, e),
                            n = JSON.stringify(r.message || "");
                        return {
                            args: [r],
                            category: "client_error",
                            errors: [{
                                message: n,
                                stack: "https://.a.js:1:1"
                            }],
                            level: Object.keys(vt.a).indexOf(t),
                            message: n,
                            time: r.time || Date.now()
                        }
                    }, r.report = function() {
                        var e = pt()(b.a.mark(function e(t, r) {
                            var n, o, a;
                            return b.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!((n = Object.keys(vt.a)).indexOf(r) < n.indexOf(this.sentinelReportOptions.minimumLevel || vt.a.ERROR))) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        o = this.buildReport(t, r), ft.a.debug({
                                            message: "Reporting error.",
                                            report: o
                                        }), a = 1;
                                    case 6:
                                        if (!(a <= 1)) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.prev = 7, e.next = 10, fetch("https://sentinel-mweb.twitchsvc.net/error-report", {
                                            body: JSON.stringify(o),
                                            headers: {
                                                Accept: "application/json; charset=UTF-8",
                                                "Content-Type": "application/json; charset=UTF-8"
                                            },
                                            method: "POST"
                                        });
                                    case 10:
                                        return ft.a.debug("Report sent."), e.abrupt("return");
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(7), ft.a.warn({
                                            attempt: a,
                                            err: e.t0,
                                            maxAttempts: 1,
                                            message: "Failed to submit error report."
                                        });
                                    case 17:
                                        ++a, e.next = 6;
                                        break;
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [7, 14]
                            ])
                        }));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(), t
                }(ht.a);
            var bt = r("bS+5"),
                wt = r(0),
                gt = r("ZlPP"),
                Ot = r("A+7I"),
                Et = S.a.createElement;

            function yt(e, t) {
                var r = v()(e);
                if (h.a) {
                    var n = h()(e);
                    t && (n = n.filter(function(t) {
                        return l()(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function jt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? yt(r, !0).forEach(function(t) {
                        Object(R.a)(e, t, r[t])
                    }) : u.a ? c()(e, u()(r)) : yt(r).forEach(function(t) {
                        a()(e, t, l()(r, t))
                    })
                }
                return e
            }
            if (Object(W.a)()) try {
                ! function(e) {
                    var t, r, n;
                    window.onerror = function(e, t, r, n, o) {
                        G.a.error({
                            colno: n,
                            error: Object(He.a)(o),
                            lineno: r,
                            message: e,
                            source: t
                        })
                    }, t = e, r = Object(it.a)() || "", n = Object(ct.a)(), G.a.register(new mt({
                        buildID: t,
                        deviceID: r,
                        middleware: [st.c],
                        pageSessionID: n
                    }))
                }("619e62c")
            } catch (Xe) {}
            Object(bt.b)(I.c);
            var kt = [Se.PLAYER_INITIAL_OFFSET_QUERY_PARAM_KEY, Se.EXPERIMENT_OVERRIDES_QUERY_PARAM_KEY, Se.SEARCH_TERM_QUERY_PARAM_KEY, Se.SEARCH_CATEGORY_QUERY_PARAM_KEY],
                Pt = function(e) {
                    function t(e) {
                        var r;
                        if (Object(g.a)(this, t), r = Object(E.a)(this, Object(j.a)(t).call(this, e)), Object(R.a)(Object(y.a)(r), "erroringPath", void 0), Object(R.a)(Object(y.a)(r), "onError", function() {
                                r.erroringPath = r.props.currentPath, r.forceUpdate()
                            }), Object(W.a)()) try {
                            var n = function(e) {
                                var t = e.match(/twitch\.(?:tv|tech)/);
                                if (t) return t[0]
                            }(window.location.hostname);
                            n && (document.domain = n, Object(gt.c)(n), G.a.debug("Setting the domain for cookies and the document to ".concat(n)))
                        } catch (o) {
                            G.a.debug("Failed to set domain for ".concat(window.location.hostname))
                        }
                        return r
                    }
                    return Object(P.a)(t, e), Object(O.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.Component,
                                r = e.currentPath,
                                n = e.currentRouteName,
                                o = e.experimentBucket,
                                a = e.hasPrerenderError,
                                i = e.experimentGroupsForUser,
                                c = e.language,
                                s = e.pageProps,
                                u = e.localeBundle,
                                p = e.sURI;
                            return this.erroringPath && this.erroringPath !== r && (this.erroringPath = void 0), Et(S.a.StrictMode, null, Et(me.a, {
                                currentPath: r,
                                messagePrefix: "[ClientSideErrorBoundary Root Protection]",
                                errorStateRender: function() {
                                    return Et("span", null, "An error occurred. Please refresh the page.")
                                }
                            }, Et(this.CSSReset, null), Et(Be, {
                                currentPath: r
                            }), Et(ce.c, {
                                preservedParams: kt,
                                queryParams: this.props.queryParams,
                                currentRouteNameServerFallback: n,
                                currentPathServerFallback: r
                            }, Et(at.a, null, Et(rt.c, {
                                common: {
                                    appVersion: "619e62c",
                                    clientApp: Se.CLIENT_APP,
                                    language: c,
                                    platform: Se.PLATFORM
                                },
                                networkStatusDebounceWait: Se.ONLINE_STATUS_CHANGE_DELAY_MS
                            }, Et(Ue, {
                                spadeURI: p
                            }, Et(we, null), Et(nt.c, {
                                bundle: u
                            }, Et(ye, {
                                inError: a || !!this.erroringPath
                            }, Et(Ae, null, Et(Pe, {
                                experimentGroupsForUser: i,
                                userExperimentSeed: o
                            }, Et(ve, null, Et(pe, null, Et(me.a, {
                                currentPath: r,
                                messagePrefix: "[ClientSideErrorBoundary App Protection]",
                                errorStateRender: function() {
                                    return Et(Ot.a, null)
                                },
                                onError: this.onError
                            }, Et(t, s), Et($e, null))))))))))))))
                        }
                    }, {
                        key: "CSSReset",
                        value: function() {
                            return Object(W.a)() ? null : Et(wt.StyleBase, null)
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function() {
                            var e = Object(w.a)(b.a.mark(function e(r) {
                                var n, o, a, i, c;
                                return b.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.ctx, o = Object(W.a)() ? {
                                                experimentBucket: window.__NEXT_DATA__.props.experimentBucket,
                                                experimentGroupsForUser: window.__NEXT_DATA__.props.experimentGroupsForUser,
                                                language: window.__NEXT_DATA__.props.language,
                                                localeBundle: window.__NEXT_DATA__.props.localeBundle,
                                                sURI: window.__NEXT_DATA__.props.sURI
                                            } : {
                                                experimentBucket: n.req.experimentBucket,
                                                experimentGroupsForUser: n.req.experimentGroupsForUser,
                                                language: n.req.localeBundle.locale.locale,
                                                localeBundle: n.req.localeBundle,
                                                sURI: n.req.spadeURI
                                            }, n.language = o.language, e.next = 5, Object(k.a)(Object(j.a)(t), "getInitialProps", this).call(this, r);
                                        case 5:
                                            return a = e.sent, i = !1, n.err ? i = !0 : n.res && 500 <= (c = n.res.statusCode) && c <= 599 && (i = !0), e.abrupt("return", jt({}, a, {}, o, {
                                                currentPath: n.asPath,
                                                currentRouteName: Object(ot.a)(n),
                                                hasPrerenderError: i,
                                                queryParams: n.query
                                            }));
                                        case 9:
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
                }(tt.a);
            r.d(t, "default", function() {
                return Pt
            })
        },
        i3c9: function(e, t, r) {
            ! function(t, n) {
                var o;
                e.exports = (o = r("Ni7E"), function() {
                    var e = o,
                        t = e.lib.WordArray;
                    e.enc.Base64 = {
                        stringify: function(e) {
                            var t = e.words,
                                r = e.sigBytes,
                                n = this._map;
                            e.clamp();
                            for (var o = [], a = 0; a < r; a += 3)
                                for (var i = (t[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, c = 0; c < 4 && a + .75 * c < r; c++) o.push(n.charAt(i >>> 6 * (3 - c) & 63));
                            var s = n.charAt(64);
                            if (s)
                                for (; o.length % 4;) o.push(s);
                            return o.join("")
                        },
                        parse: function(e) {
                            var r = e.length,
                                n = this._map,
                                o = this._reverseMap;
                            if (!o) {
                                o = this._reverseMap = [];
                                for (var a = 0; a < n.length; a++) o[n.charCodeAt(a)] = a
                            }
                            var i = n.charAt(64);
                            if (i) {
                                var c = e.indexOf(i); - 1 !== c && (r = c)
                            }
                            return function(e, r, n) {
                                for (var o = [], a = 0, i = 0; i < r; i++)
                                    if (i % 4) {
                                        var c = n[e.charCodeAt(i - 1)] << i % 4 * 2,
                                            s = n[e.charCodeAt(i)] >>> 6 - i % 4 * 2;
                                        o[a >>> 2] |= (c | s) << 24 - a % 4 * 8, a++
                                    }
                                return t.create(o, a)
                            }(e, r, o)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(), o.enc.Base64)
            }()
        },
        sVKI: function(e, t, r) {
            "use strict";
            var n, o, a = r("ERkP"),
                i = r.n(a),
                c = r("jMV1");
            ! function(e) {
                e.SecondGeneration = "2g", e.ThirdGeneration = "3g", e.FourthGeneration = "4g", e.SlowSecondGeneration = "slow-2g"
            }(n || (n = {})),
            function(e) {
                e.Bluetooth = "bluetooth", e.Cellular = "cellular", e.Ethernet = "ethernet", e.None = "none", e.WiFi = "wifi", e.WiMax = "wimax", e.Other = "other", e.Unknown = "unknown"
            }(o || (o = {}));
            r("6Pbf");

            function s() {
                return i.a.useContext(c.b)
            }
            r.d(t, "a", function() {
                return s
            })
        },
        tZkf: function(e, t, r) {
            ! function(t, n) {
                var o;
                e.exports = (o = r("Ni7E"), o.enc.Utf8)
            }()
        }
    },
    [
        ["ODB1", 1, 0]
    ]
]);