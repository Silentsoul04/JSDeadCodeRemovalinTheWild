(window.webpackJsonp = window.webpackJsonp || []).push([
    ["UnauthPageWrapper"], {
        "+o5r": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var o = 320
        },
        "0WZX": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("q1tI"),
                i = n.n(o),
                r = n("/MKj"),
                a = n("i2lo"),
                l = n("4Tgq"),
                s = n("4kAQ"),
                c = n("6adH"),
                u = n("fArA"),
                p = n("wIs1");

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var g = [501181],
                w = function(e) {
                    function t() {
                        var e, n, o, i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                        return o = this, i = (e = h(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== d(i) && "function" != typeof i ? b(o) : i, y(b(b(n)), "completeExperience", (function() {
                            var e = n.props,
                                t = e.experience,
                                o = e.completeExperience;
                            t && o && o(t.placement_id, t.experience_id)
                        })), y(b(b(n)), "onTouch", (function() {
                            n.completeExperience(), Object(l.a)("mweb_unauth_toast_upsell.tap");
                            var e = n.props,
                                t = e.history,
                                o = e.location;
                            o.pathname.startsWith("/search/") ? t.push({
                                pathname: "/",
                                state: {
                                    from: "".concat(o.pathname).concat(o.search),
                                    next: "".concat(o.pathname).concat(o.search)
                                }
                            }) : t.push({
                                pathname: "/",
                                state: {
                                    from: o.pathname,
                                    next: o.pathname
                                }
                            })
                        })), n
                    }
                    var n, o, r;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && m(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            Object(l.a)("mweb_unauth_toast_upsell.shown")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.experience ? i.a.createElement(a.a, {
                                experience: this.props.experience,
                                eligibleIds: g
                            }, i.a.createElement(c.a, {
                                persistent: !0,
                                text: this.props.experience.display_data.toast_text,
                                icon: "arrow-circle-forward",
                                onTouch: this.onTouch
                            })) : null
                        }
                    }]) && f(n.prototype, o), r && f(n, r), t
                }(o.PureComponent),
                v = Object(u.compose)(p.a, Object(r.connect)(null, (function(e, t) {
                    return {
                        completeExperience: function(t, n) {
                            return e(Object(s.a)(t, n))
                        }
                    }
                })))(w),
                S = n("af3U"),
                O = n("hLPq"),
                _ = n("fs0a"),
                E = n("7w6Q"),
                j = n("sRIr"),
                T = n("kmwA"),
                k = n("tCfZ"),
                x = n("n6mq");

            function P(e) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), o.forEach((function(t) {
                        B(e, t, n[t])
                    }))
                }
                return e
            }

            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function I(e, t) {
                return (I = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function B(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var L = {
                    visible: {
                        transform: "translateY(0)",
                        transition: "all 225ms cubic-bezier(0.0,0.0,0.2,1)"
                    },
                    hiding: {
                        transform: "translateY(350px)",
                        transition: "all 225ms cubic-bezier(0.0,0.0,0.2,1)"
                    },
                    wash: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        height: "100%",
                        touchAction: "none",
                        width: "100%",
                        zIndex: 10001,
                        position: "fixed",
                        top: 0,
                        left: 0
                    },
                    mask: {
                        baseStyles: {
                            backgroundColor: "rgba(0,0,0, .5)",
                            height: "100%",
                            touchAction: "none",
                            width: "100%",
                            zIndex: 1
                        }
                    }
                },
                M = 1e3,
                F = function(e) {
                    function t() {
                        var e, n, o, r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var a = arguments.length, l = new Array(a), s = 0; s < a; s++) l[s] = arguments[s];
                        return o = this, r = (e = C(t)).call.apply(e, [this].concat(l)), n = !r || "object" !== P(r) && "function" != typeof r ? A(o) : r, B(A(A(n)), "state", {
                            visible: !1,
                            hiding: !1,
                            showWash: !1
                        }), B(A(A(n)), "getTitle", (function() {
                            var e = n.props.invite,
                                t = e && e.sender,
                                o = t && t.first_name;
                            return S.a._("Join {{ name }} on Pinterest for more ideas", "Prompt user to signup to access all Pinterest features").replace("{{ name }}", o || "")
                        })), B(A(A(n)), "getAvatar", (function() {
                            var e = n.props.invite,
                                t = e && e.sender,
                                o = t && t.image_medium_url,
                                r = t && t.full_name;
                            return i.a.createElement(x.a, {
                                src: o || "",
                                name: r || "",
                                size: "md"
                            })
                        })), B(A(A(n)), "handleHide", (function() {
                            var e = n.props.onDismiss,
                                t = n.props.fbAutoLoginStatus || "unknown";
                            E.a.increment("mweb_facebook_social_upsell.close.".concat(t)), n.setState({
                                hiding: !0,
                                showWash: !1
                            }), n.slideInAnimation = window.requestAnimationFrame((function() {
                                setTimeout((function() {
                                    e && e()
                                }), M)
                            }))
                        })), B(A(A(n)), "handleHideOutsideTap", (function() {
                            var e = n.props.onDismiss,
                                t = n.props.fbAutoLoginStatus || "unknown";
                            E.a.increment("mweb_facebook_social_upsell.close.outside.modal.".concat(t)), n.setState({
                                hiding: !0,
                                showWash: !1
                            }), n.slideInAnimation = window.requestAnimationFrame((function() {
                                setTimeout((function() {
                                    e && e()
                                }), M)
                            }))
                        })), B(A(A(n)), "handleFBConnect", (function(e) {
                            E.a.increment("mweb_facebook_social_upsell.fb_connect_button_click.".concat(e))
                        })), B(A(A(n)), "handleSignupClick", (function() {
                            E.a.increment("mweb_facebook_social_upsell.signup_button_click"), n.props.history.push({
                                pathname: "/",
                                state: {
                                    from: n.props.location.pathname,
                                    next: n.props.location.pathname
                                }
                            })
                        })), B(A(A(n)), "initializeShowAnimation", (function() {
                            var e = n.props.fbAutoLoginStatus || "unknown";
                            E.a.increment("mweb_facebook_social_upsell.shown.".concat(e)), n.slideInAnimation = window.requestAnimationFrame((function() {
                                setTimeout((function() {
                                    n.setState({
                                        visible: !0
                                    })
                                }), M)
                            }))
                        })), n
                    }
                    var n, o, r;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && I(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            E.a.increment("mweb_facebook_social_upsell.land");
                            var e = this.props.invite,
                                t = e ? e.invite_channel : null;
                            t && E.a.increment("mweb_social_unauth.invite_channel.".concat(t)), this.initializeShowAnimation()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.cancelAnimationFrame(this.slideInAnimation)
                        }
                    }, {
                        key: "renderDefaultLoginHeader",
                        value: function() {
                            return i.a.createElement(x.b, {
                                flex: "grow",
                                display: "flex",
                                alignItems: "center",
                                marginBottom: 2,
                                justifyContent: "center"
                            }, i.a.createElement(x.b, {
                                alignItems: "center",
                                display: "flex",
                                direction: "column",
                                marginBottom: 5
                            }, i.a.createElement(x.b, null, i.a.createElement(x.C, {
                                bold: !0,
                                size: "xl",
                                align: "left"
                            }, S.a._("Sign up to see more", "Title on mobile web signup modal to prompt users to signup for Pinterest."))), i.a.createElement(x.b, {
                                marginBottom: 1
                            }), i.a.createElement(x.b, {
                                alignItems: "center",
                                display: "flex",
                                direction: "column"
                            }, i.a.createElement(x.C, {
                                align: "left"
                            }, S.a._("Free, unlimited access to ideas", "First value prop on mobile web sign up modal")))), i.a.createElement(x.f, null))
                        }
                    }, {
                        key: "renderInviterHeader",
                        value: function() {
                            return i.a.createElement(x.b, {
                                flex: "grow",
                                display: "flex",
                                alignItems: "center",
                                marginBottom: 2
                            }, i.a.createElement(x.b, {
                                alignItems: "center",
                                direction: "row",
                                display: "flex",
                                paddingY: 3
                            }, i.a.createElement(x.b, null, i.a.createElement(x.C, {
                                bold: !0,
                                size: "xl",
                                align: "left"
                            }, this.getTitle())), i.a.createElement(x.b, {
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        marginLeft: "26%"
                                    }
                                }
                            }, this.getAvatar())), i.a.createElement(x.f, null))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.location,
                                n = e.invite,
                                o = this.state,
                                r = o.visible,
                                a = o.hiding,
                                l = o.showWash,
                                s = T.a.settings.LOGIN_URL,
                                c = n ? n.sender : null,
                                u = r && !a ? L.visible : L.hiding;
                            return i.a.createElement(x.b, {
                                dangerouslySetInlineStyle: {
                                    __style: l ? L.wash : {}
                                }
                            }, r && !a ? i.a.createElement(j.a, {
                                onTouch: this.handleHideOutsideTap,
                                pressState: "background"
                            }, i.a.createElement(x.b, {
                                position: "fixed",
                                top: !0,
                                left: !0,
                                dangerouslySetInlineStyle: {
                                    __style: U({
                                        opacity: 1
                                    }, L.mask.baseStyles)
                                }
                            })) : null, i.a.createElement(x.b, {
                                position: "fixed",
                                bottom: !0,
                                color: "white",
                                paddingX: 6,
                                width: "100%",
                                dangerouslySetInlineStyle: {
                                    __style: U({}, u, {
                                        boxShadow: "0 1px 5px 0 rgba(0,0,0,0.25)",
                                        paddingBottom: "5%",
                                        paddingTop: "2%",
                                        touchAction: "none",
                                        zIndex: 10001
                                    })
                                }
                            }, i.a.createElement(x.b, {
                                maxWidth: 400,
                                deprecatedMargin: {
                                    left: "auto",
                                    right: "auto"
                                }
                            }, i.a.createElement(x.b, {
                                paddingY: 2
                            }), i.a.createElement(x.b, {
                                position: "absolute",
                                left: !0,
                                top: !0,
                                marginLeft: 4,
                                marginTop: 2
                            }, i.a.createElement(O.a, {
                                accessibilityLabel: S.a._("Close modal", "Close the modal for facebook upsell"),
                                icon: "cancel",
                                shape: "circle",
                                onTouch: this.handleHide,
                                size: 15
                            })), i.a.createElement(x.b, {
                                paddingY: 2
                            }), c ? this.renderInviterHeader() : this.renderDefaultLoginHeader(), i.a.createElement(x.b, {
                                marginBottom: 1,
                                height: 40
                            }, i.a.createElement(_.a, {
                                facebookText: S.a._("Continue with Facebook", "Button to login or signup with FB on Facebook"),
                                from: t.pathname,
                                next: t.pathname,
                                fbButtonType: "continue",
                                fbUseContinueAs: !0,
                                fbConnectHandler: this.handleFBConnect
                            })), i.a.createElement(x.b, {
                                marginBottom: 1,
                                marginTop: 2
                            }, i.a.createElement(x.c, {
                                onClick: this.handleSignupClick,
                                color: "gray",
                                text: S.a._("Sign Up", "Button to redirect user to Signup Page on mweb")
                            })), i.a.createElement(x.b, {
                                marginTop: 3
                            }, i.a.createElement(x.C, {
                                color: "gray",
                                align: "center",
                                size: "xs"
                            }, S.a.interpolateNamedTemplate(S.a._("Have an account? {{ logIn }}", "Asking users if they already have an account"), {
                                logIn: i.a.createElement(x.p, {
                                    href: s,
                                    inline: !0
                                }, i.a.createElement(x.C, {
                                    size: "xs",
                                    color: "gray",
                                    bold: !0,
                                    inline: !0
                                }, S.a._("Log in", "Mobile web link to log in page")))
                            }))), i.a.createElement(x.b, {
                                marginTop: 3
                            }, i.a.createElement(k.a, {
                                size: "xs"
                            })))))
                        }
                    }]) && D(n.prototype, o), r && D(n, r), t
                }(o.PureComponent),
                G = Object(p.a)(F),
                z = n("fsjD"),
                R = n("75Yz"),
                H = n("G5lw"),
                W = n("rYoy"),
                N = n("QtD7"),
                Y = n("ulr2");

            function q(e) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function V(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function J(e) {
                return (J = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function X(e, t) {
                return (X = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function K(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Q(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var Z = 400,
                $ = 500,
                ee = 6e5,
                te = function() {
                    document.body && (document.body.style.overflow = "hidden", document.body.style.touchAction = "none")
                },
                ne = function() {
                    document.body && (document.body.style.overflow = "visible", document.body.style.touchAction = "auto")
                },
                oe = function(e) {
                    function t() {
                        var e, n, o, i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                        return o = this, i = (e = J(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== q(i) && "function" != typeof i ? K(o) : i, Q(K(K(n)), "state", {
                            hasScrollSignupDisplayed: !1,
                            scrollingModalEnabled: !1,
                            scrollVariant: "",
                            scrollThreshold: 0,
                            isIdleTimerDeactivated: !1
                        }), Q(K(K(n)), "inactiveTime", 0), Q(K(K(n)), "handleIdleInactivity", (function() {
                            var e = n.inactiveTime + $;
                            E.a.increment("mweb_unauth.idle_time.".concat(e)), n.inactiveTime = e, e >= ee && n.handleIdleDeactivate()
                        })), Q(K(K(n)), "handleIdleDeactivate", (function() {
                            n.state.isIdleTimerDeactivated || (clearInterval(n.idleId), n.setState({
                                isIdleTimerDeactivated: !0
                            }), window.removeEventListener("touchstart", n.handleIdleDeactivate), window.removeEventListener("touchend", n.handleIdleDeactivate), window.removeEventListener("touchcancel", n.handleIdleDeactivate), window.removeEventListener("touchmove", n.handleIdleDeactivate))
                        })), Q(K(K(n)), "handleScroll", (function() {
                            var e = n.props,
                                t = e.isSignupModalShown,
                                o = e.showSignupModal,
                                i = e.isUnauthSharingModalsShown,
                                r = e.toggleSignupScrollControllerDisplay,
                                a = n.state,
                                l = a.hasScrollSignupDisplayed,
                                s = a.scrollingModalEnabled,
                                c = n.getScrollPos();
                            n.handleScrollLogging(c), n.handleIdleDeactivate(), c > Z && !l && !i && !t && (te(), s || (n.setState({
                                scrollingModalEnabled: !0
                            }), r(!0)), n.setState({
                                hasScrollSignupDisplayed: !0,
                                scrollVariant: "enabled_background_icon_only"
                            }), o())
                        })), Q(K(K(n)), "handleScrollLogging", (function(e) {
                            var t = n.state.scrollThreshold,
                                o = 0,
                                i = 0,
                                r = 0;
                            e >= 10500 || (e > 250 && e < 500 && 0 == (1 & t) ? (o = 250, r = 1) : e > 500 && e < 750 && 0 == (2 & t) ? (o = 500, r = 2) : e > 750 && e < 1e3 && 0 == (4 & t) ? (o = 750, r = 3) : e >= 1e3 && e < 1500 && 0 == (8 & t) ? (o = 1e3, r = 4) : e >= 1500 && e < 2e3 && 0 == (16 & t) ? (o = 1500, r = 5) : e >= 2e3 && e < 2500 && 0 == (32 & t) ? (o = 2e3, r = 6) : e >= 2500 && e < 3e3 && 0 == (64 & t) ? (o = 2500, r = 7) : e >= 3e3 && e < 3500 && 0 == (128 & t) ? (o = 3e3, r = 8) : e >= 3500 && e < 4e3 && 0 == (256 & t) ? (o = 3500, r = 9) : e >= 4e3 && e < 4500 && 0 == (512 & t) ? (o = 4e3, r = 10) : e >= 4500 && e < 5e3 && 0 == (1024 & t) ? (o = 4500, r = 11) : e >= 5e3 && e < 6e3 && 0 == (2048 & t) ? (o = 5e3, r = 12) : e >= 6e3 && e < 7e3 && 0 == (4096 & t) ? (o = 6e3, r = 13) : e >= 7e3 && e < 8e3 && 0 == (8192 & t) ? (o = 7e3, r = 14) : e >= 8e3 && e < 9e3 && 0 == (16384 & t) ? (o = 8e3, r = 15) : e >= 9e3 && e < 1e4 && 0 == (32768 & t) ? (o = 9e3, r = 16) : e >= 1e4 && 0 == (65536 & t) && (o = 1e4, r = 17), o && (i = 1 << r - 1, E.a.increment("mweb_unauth_scroll_depth.".concat(o)), t |= i, n.setState({
                                scrollThreshold: t
                            })))
                        })), Q(K(K(n)), "handleSignupDismiss", (function() {
                            var e = n.props,
                                t = e.hideSignupModal,
                                o = e.isSignupModalShown,
                                i = e.toggleSignupScrollControllerDisplay;
                            o && t(), i && i(!1), n.setState({
                                scrollingModalEnabled: !1
                            }), ne()
                        })), n
                    }
                    var n, i, r;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && X(e, t)
                    }(t, e), n = t, (i = [{
                        key: "componentDidMount",
                        value: function() {
                            this.idleId = setInterval(this.handleIdleInactivity, $), window.addEventListener("scroll", this.handleScroll), window.addEventListener("touchstart", this.handleIdleDeactivate), window.addEventListener("touchend", this.handleIdleDeactivate), window.addEventListener("touchcancel", this.handleIdleDeactivate), window.addEventListener("touchmove", this.handleIdleDeactivate)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("scroll", this.handleScroll), this.handleIdleDeactivate(), ne()
                        }
                    }, {
                        key: "getScrollPos",
                        value: function() {
                            return void 0 !== window.scrollY ? window.scrollY : document.documentElement && void 0 !== document.documentElement.scrollTop ? document.documentElement.scrollTop : 0
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.scrollingModalEnabled,
                                n = e.scrollVariant,
                                i = this.props,
                                r = i.isSignupModalShown,
                                a = i.invite,
                                l = i.renderSignupModal,
                                s = i.renderOnActionUpsell,
                                c = i.showWashOnly,
                                u = t ? l(n, this.handleSignupDismiss, a, !0, t, c) : s(),
                                p = r ? u : null;
                            return o.createElement(x.b, null, p)
                        }
                    }]) && V(n.prototype, i), r && V(n, r), t
                }(o.Component),
                ie = Object(u.compose)(Object(r.connect)((function(e, t) {
                    return {
                        isSignupModalShown: e.session.isSignupModalShown,
                        isGoogleOneTapShown: e.session.isGoogleOneTapShown,
                        isUnauthSharingModalsShown: e.session.isUnauthSharingModalsShown
                    }
                }), (function(e) {
                    return {
                        hideSignupModal: function() {
                            return e(Object(Y.f)())
                        },
                        showSignupModal: function() {
                            return e(Object(Y.C)())
                        },
                        activateExperiment: function(t) {
                            return e(Object(N.a)(t))
                        }
                    }
                })))(oe),
                re = n("gxu6"),
                ae = n("AGnR");

            function le(e) {
                return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function se(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function ce(e) {
                return (ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ue(e, t) {
                return (ue = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function pe(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function de(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var fe = {
                    outerBar: {
                        width: "100%",
                        position: "fixed",
                        top: "0px",
                        zIndex: "100"
                    }
                },
                he = function(e) {
                    function t(e) {
                        var n, o, i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), o = this, i = ce(t).call(this, e), n = !i || "object" !== le(i) && "function" != typeof i ? pe(o) : i, de(pe(pe(n)), "handleGotItClick", (function() {
                            re.set("euCookieBanner", "true"), Object(l.a)("unauth.mweb_eu_cookie_banner.dismissed"), n.setState({
                                showCookieBanner: !1
                            }), n.props.handleDismiss(), n.props.viewType && Object(ae.g)({
                                view_type: n.props.viewType,
                                view_parameter: n.props.viewParameter,
                                component: 13390,
                                element: 11290
                            })
                        })), de(pe(pe(n)), "handleLearnMoreClick", (function() {
                            Object(l.a)("unauth.mweb_eu_cookie_banner.learn_more_click")
                        }));
                        var r = n.props.country,
                            a = !1;
                        return T.a.settings.EU_COUNTRIES.indexOf(r) > -1 && !re.get("euCookieBanner") && (a = !0, Object(l.a)("unauth.mweb_eu_cookie_banner.view")), n.state = {
                            showCookieBanner: a
                        }, n
                    }
                    var n, o, r;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && ue(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.state.showCookieBanner && !e.viewType && this.props.viewType && Object(ae.d)({
                                event_type: 13,
                                view_type: this.props.viewType,
                                view_parameter: this.props.viewParameter,
                                component: 13390
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = S.a._("Pinterest is ", "The full text is 'Pinterest is using cookies to help give you the best experience we can.' and is part of eu cookie banner"),
                                t = S.a._("using cookies", "The full text is 'Pinterest is using cookies to help give you the best experience we can.' and is part of eu cookie banner"),
                                n = S.a._(" to help give you the best experience we can.", "The full text is 'Pinterest is using cookies to help give you the best experience we can.' and is part of eu cookie banner");
                            return this.state.showCookieBanner ? i.a.createElement("div", {
                                style: fe.outerBar,
                                ref: this.props.setRef,
                                "data-test-id": "unauthEuCookieBar"
                            }, i.a.createElement(x.b, {
                                color: "darkGray",
                                paddingX: 4,
                                paddingY: 4,
                                alignItems: "center",
                                direction: "row",
                                display: "flex"
                            }, i.a.createElement(x.b, {
                                flex: "grow",
                                marginRight: 8
                            }, i.a.createElement(x.C, {
                                overflow: "normal",
                                color: "lightGray"
                            }, e, i.a.createElement(x.C, {
                                inline: !0,
                                bold: !0,
                                color: "white"
                            }, i.a.createElement(x.p, {
                                inline: !0,
                                href: T.a.settings.ABOUT_COOKIE_URL,
                                onClick: this.handleLearnMoreClick
                            }, t)), n)), i.a.createElement(x.b, {
                                flex: "none"
                            }, i.a.createElement("div", {
                                "data-test-id": "unauthEuCookieBar_gotItButton"
                            }, i.a.createElement(x.c, {
                                text: S.a._("Got it!", "Text on button user presses acknowleding our cookie policy"),
                                size: "sm",
                                color: "white",
                                onClick: this.handleGotItClick
                            }))))) : null
                        }
                    }]) && se(n.prototype, o), r && se(n, r), t
                }(o.Component),
                me = Object(u.compose)(Object(r.connect)((function(e, t) {
                    return {
                        viewParameter: e.currentPage.viewParameter,
                        viewType: e.currentPage.viewType
                    }
                }), null))(he),
                be = n("BAGE");

            function ye(e) {
                return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function ge(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function we(e) {
                return (we = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ve(e, t) {
                return (ve = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Se(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Oe(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var _e = function(e) {
                    function t() {
                        var e, n, o, r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++) s[u] = arguments[u];
                        return o = this, r = (e = we(t)).call.apply(e, [this].concat(s)), n = !r || "object" !== ye(r) && "function" != typeof r ? Se(o) : r, Oe(Se(Se(n)), "onTouch", (function() {
                            Object(l.a)("mweb_unauth_toast_upsell.tap");
                            var e = n.props,
                                t = e.history,
                                o = e.location,
                                i = o.pathname,
                                r = o.search;
                            t.push({
                                pathname: "/",
                                state: {
                                    from: "".concat(i).concat(r),
                                    next: "".concat(i).concat(r)
                                }
                            })
                        })), Oe(Se(Se(n)), "renderDefaultToast", (function() {
                            return i.a.createElement(c.a, {
                                persistent: !0,
                                text: S.a._("Join for unlimited access to the world's best ideas", "Prompt user to signup to access all Pinterest features"),
                                icon: "arrow-circle-forward",
                                onTouch: n.onTouch
                            })
                        })), Oe(Se(Se(n)), "renderInviterToast", (function(e) {
                            var t = n.props.showAvatar,
                                o = e ? e.sender : null,
                                r = o ? o.first_name : "",
                                a = o ? o.full_name : "",
                                l = o ? o.image_medium_url : "",
                                s = S.a._("Join {{ name }} on Pinterest for more ideas", "Prompt user to signup to access all Pinterest features").replace("{{ name }}", r),
                                u = ["", s],
                                p = i.a.createElement(x.b, {
                                    dangerouslySetInlineStyle: {
                                        __style: {
                                            padding: "0.167em"
                                        }
                                    }
                                }, i.a.createElement(x.a, {
                                    name: a,
                                    src: l,
                                    outline: !0
                                }));
                            return t ? i.a.createElement(c.a, {
                                persistent: !0,
                                text: u,
                                onTouch: n.onTouch,
                                thumbnail: p
                            }) : i.a.createElement(c.a, {
                                persistent: !0,
                                text: s,
                                onTouch: n.onTouch,
                                icon: "arrow-circle-forward"
                            })
                        })), n
                    }
                    var n, o, r;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && ve(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            Object(l.a)("mweb_unauth_toast_upsell.shown")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isJoinSocialToast,
                                n = e.invite,
                                o = n && n.sender && n.sender.first_name;
                            return !t && o ? this.renderInviterToast(n) : this.renderDefaultToast()
                        }
                    }]) && ge(n.prototype, o), r && ge(n, r), t
                }(o.PureComponent),
                Ee = Object(p.a)(_e),
                je = n("eQwl"),
                Te = n("sdre"),
                ke = n("bUAJ"),
                xe = n("GUxv"),
                Pe = n("ke5A"),
                Ue = n("JJAz"),
                De = n("PmFr"),
                Ce = n("Posz"),
                Ie = n("wa+1"),
                Ae = n("SMdm"),
                Be = n("sYwW");

            function Le(e) {
                return (Le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Me(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function Fe(e) {
                return (Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Ge(e, t) {
                return (Ge = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ze(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Re(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "shouldShowSignupModalOnRouteChange", (function() {
                return Xe
            })), n.d(t, "shouldShowSignupToast", (function() {
                return Ke
            })), n.d(t, "UnauthPageWrapper", (function() {
                return $e
            }));
            var He = o.lazy((function() {
                    return n.e(16).then(n.bind(null, "xiyX"))
                })),
                We = o.lazy((function() {
                    return n.e(15).then(n.bind(null, "4aTO"))
                })),
                Ne = o.lazy((function() {
                    return n.e(20).then(n.bind(null, "Lajh"))
                })),
                Ye = o.lazy((function() {
                    return n.e(21).then(n.bind(null, "iyyw"))
                })),
                qe = function(e) {
                    return !(Object(Ce.w)(!1, e) || Object(Ce.p)(e) || Object(Ce.o)(e) || Object(Ce.g)(e) || Object(Ce.r)(e) || Object(Ce.m)(e))
                },
                Ve = [5, 18, 17],
                Je = [6, 19],
                Xe = function(e, t) {
                    var n = Object(Ae.a)("openUnauthType"),
                        o = e && Object(Ce.u)(e) && t && Object(Ce.u)(t);
                    return (Object(Te.a)(e) || !!t && "#amp" === t.hash) && qe(e) && !(t && Object(Ce.i)(t) && Object(Ce.v)(e)) && !o && (!Boolean(n) || n !== De.l && Object(Ce.l)(e)) && "#amp" !== e.hash
                },
                Ke = function(e) {
                    var t = e.location,
                        n = e.isSignupModalShown,
                        o = Object(Ae.a)("openUnauthType");
                    return !n && qe(t) && (!Boolean(o) || o !== De.l || o === De.l && !Object(Te.a)(t))
                },
                Qe = function(e, t, n) {
                    var o = Object(Ae.a)("openUnauthType");
                    return !Boolean(o) && e && ["ios", "ipad", "android"].includes(n) && je.a.includes(t) && !Object(Ue.d)(window)
                },
                Ze = Object.freeze({
                    interstitialSticky: !0,
                    hideLogo: !0,
                    interstitialDismissible: !1,
                    appBannerShow: !1,
                    appBannerDismissible: !1
                }),
                $e = function(e) {
                    function t() {
                        var e, n, i, r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++) s[c] = arguments[c];
                        return i = this, r = (e = Fe(t)).call.apply(e, [this].concat(s)), n = !r || "object" !== Le(r) && "function" != typeof r ? ze(i) : r, Re(ze(ze(n)), "state", {
                            shouldShowGoogleOneTap: !0,
                            showSignupStepForUpsell: !1,
                            googleOneTapFailed: !1,
                            facebookAutoLoginFailureStatus: "",
                            fbSocialUpsellDismissed: !1,
                            interstitialUpsellDismissed: !1,
                            interstitialUpsellHeight: 0,
                            cookieBannerHeight: 0,
                            isDefaultToastDisplayed: !0,
                            showWashOnly: !1,
                            isBoardToastDisplayed: !1,
                            isProfileToastDisplayed: !1,
                            isScrollControllerDisplayed: !1
                        }), Re(ze(ze(n)), "isLandingPage", (function() {
                            return location.pathname.startsWith("/explore") || Object(Ce.t)(location) || Object(Ce.e)(location)
                        })), Re(ze(ze(n)), "getAppUpsellV3Options", (function() {
                            var e = n.props,
                                t = e.activateExperiment,
                                o = e.canUseNativeApp,
                                i = e.routeName;
                            if (!o) return null;
                            if (Object(Ce.t)(location) || "BoardPage" === i) {
                                var r = t("mweb_unauth_app_upsell_value_prop");
                                return {
                                    subheaderUpsellCopy: "ratings",
                                    ctaButtonType: "install",
                                    hideLogo: !1,
                                    interstitialSticky: !0,
                                    interstitialDismissible: "enabled" !== r,
                                    appBannerShow: !1,
                                    appBannerDismissible: !1,
                                    inValuePropExperiment: ["enabled", "enabled_dismissible"].includes(r)
                                }
                            }
                            return location.pathname.startsWith("/login/") ? Ze : null
                        })), Re(ze(ze(n)), "setUnauthInterstitialUpsellRef", (function(e) {
                            e && n.setState({
                                interstitialUpsellHeight: e.offsetHeight
                            })
                        })), Re(ze(ze(n)), "setUnauthEUCookieBannerRef", (function(e) {
                            e && n.setState({
                                cookieBannerHeight: e.offsetHeight
                            })
                        })), Re(ze(ze(n)), "hideGoogleOneTap", (function() {
                            n.props.hideGoogleOneTap()
                        })), Re(ze(ze(n)), "handleFacebookAutoLoginFailure", (function(e) {
                            n.setState({
                                facebookAutoLoginFailureStatus: e.status
                            })
                        })), Re(ze(ze(n)), "handleFacebookSocialUpsellHide", (function() {
                            n.state.fbSocialUpsellDismissed || n.setState({
                                fbSocialUpsellDismissed: !0
                            })
                        })), Re(ze(ze(n)), "handleInterstitialUpsellHide", (function() {
                            n.setState({
                                interstitialUpsellDismissed: !0
                            })
                        })), Re(ze(ze(n)), "handleCookieBannerDismiss", (function() {
                            n.setState({
                                cookieBannerHeight: 0
                            })
                        })), Re(ze(ze(n)), "handleSignupModalDismiss", (function() {
                            var e = n.props,
                                t = e.isSignupModalShown,
                                o = e.hideSignupModal;
                            t && o(), Object(l.a)("unauth_mweb.navpage.signup_modal.dismiss")
                        })), Re(ze(ze(n)), "toggleSignupScrollControllerDisplay", (function(e) {
                            n.setState({
                                isScrollControllerDisplayed: e
                            })
                        })), Re(ze(ze(n)), "shouldShowGoogleOneTap", (function(e) {
                            return !Object(Ce.r)(e) && !Object(Ce.m)(e) && !Object(Ce.g)(e)
                        })), Re(ze(ze(n)), "renderSignupModal", (function(e, t, i, r, a, l) {
                            return o.createElement(W.a, null, o.createElement(Ye, {
                                location: n.props.location,
                                onDismiss: t,
                                closeVariant: e,
                                inviteObject: i,
                                isScrollingModal: r,
                                isOpen: a,
                                isWashOnly: l,
                                toggleSignupScrollControllerDisplay: n.toggleSignupScrollControllerDisplay
                            }))
                        })), Re(ze(ze(n)), "renderBannerAppUpsell", (function(e) {
                            return o.createElement(W.a, null, o.createElement(He, Object.assign({
                                location: n.props.location,
                                browserUpsellType: "login",
                                browserUpsellInModal: !1
                            }, e)))
                        })), Re(ze(ze(n)), "renderOnLandingUpsell", (function(e) {
                            var t = n.props,
                                i = t.canUseNativeApp,
                                r = t.country,
                                a = t.experience,
                                l = t.platform,
                                s = n.state,
                                c = s.isBoardToastDisplayed,
                                u = s.isProfileToastDisplayed;
                            return i ? e ? (n.state.isDefaultToastDisplayed && n.setState({
                                isDefaultToastDisplayed: !1
                            }), e.appBannerShow ? n.renderBannerAppUpsell({
                                browserUpsellType: "none",
                                dismissible: e.appBannerDismissible,
                                inBlockingModal: !1,
                                scrollMode: "yPosition"
                            }) : null) : Qe(i, r, l) ? (n.state.isDefaultToastDisplayed && n.setState({
                                isDefaultToastDisplayed: !1
                            }), n.renderBannerAppUpsell({
                                inBlockingModal: !1,
                                browserUpsellType: "login",
                                scrollMode: "default"
                            })) : Object(Ce.x)(location, c, u) ? (n.state.isDefaultToastDisplayed && n.setState({
                                isDefaultToastDisplayed: !1
                            }), null) : a ? o.createElement(v, {
                                experience: a
                            }) : o.createElement(Ee, null) : null
                        })), Re(ze(ze(n)), "onMobileModalDismiss", (function() {
                            n.props.isSignupModalDismissible && n.props.hideSignupModal()
                        })), Re(ze(ze(n)), "renderOnActionUpsell", (function() {
                            var e = n.props,
                                t = e.canUseNativeApp,
                                o = e.country,
                                i = e.platform;
                            return Qe(t, o, i) ? n.renderBannerAppUpsell({
                                inBlockingModal: !0
                            }) : n.renderSignupModal(void 0, n.onMobileModalDismiss, void 0, void 0, !1, n.state.showWashOnly)
                        })), Re(ze(ze(n)), "renderGoogleOneTapExperiment", (function() {
                            return n.shouldShowGoogleOneTap(n.props.location) ? o.createElement(W.a, null, o.createElement(Ne, {
                                handleEmptyCredentials: function() {
                                    n.hideGoogleOneTap(), n.setState({
                                        googleOneTapFailed: !0
                                    })
                                },
                                handleLoginError: function() {
                                    return n.hideGoogleOneTap()
                                },
                                handleSignupError: function() {
                                    return n.hideGoogleOneTap()
                                }
                            })) : null
                        })), Re(ze(ze(n)), "renderJoinSocialToast", (function(e) {
                            var t = n.props,
                                i = t.location,
                                r = t.isUnauthToastUpsellDisplayed,
                                a = n.state,
                                l = a.isBoardToastDisplayed,
                                s = a.isProfileToastDisplayed,
                                c = l || s;
                            return (Object(Ce.x)(i) || c) && r ? o.createElement(Ee, {
                                invite: e,
                                showAvatar: c,
                                isJoinSocialToast: !0
                            }) : null
                        })), Re(ze(ze(n)), "renderFacebookSocialUpsell", (function(e, t) {
                            var i = n.props.location,
                                r = n.state,
                                a = r.facebookAutoLoginFailureStatus,
                                l = r.fbSocialUpsellDismissed,
                                s = t ? t.invite_channel : null;
                            return Object(Ce.x)(i, !0, !0) && s ? Ve.includes(s) || Je.includes(s) ? l ? e : o.createElement(G, {
                                fbAutoLoginStatus: a,
                                invite: t,
                                onDismiss: n.handleFacebookSocialUpsellHide
                            }) : e : null
                        })), Re(ze(ze(n)), "renderUnauthInterstitialUpsell", (function(e) {
                            var t = n.state,
                                i = t.cookieBannerHeight,
                                r = t.isScrollControllerDisplayed;
                            return o.createElement(be.a, {
                                hideLogo: e.hideLogo,
                                dismissible: e.interstitialDismissible,
                                sticky: e.interstitialSticky,
                                handleHide: n.handleInterstitialUpsellHide,
                                subheaderUpsellCopy: e.subheaderUpsellCopy,
                                ctaButtonType: e.ctaButtonType,
                                setRef: n.setUnauthInterstitialUpsellRef,
                                cookieBannerHeight: i,
                                inValuePropExperiment: e.inValuePropExperiment,
                                isShowing: r
                            })
                        })), Re(ze(ze(n)), "renderInviteUpsells", (function(e, t, i) {
                            var r = n.props,
                                a = r.location,
                                l = r.isSignupModalShown,
                                s = n.state,
                                c = s.isBoardToastDisplayed,
                                u = s.isProfileToastDisplayed,
                                p = s.shouldShowGoogleOneTap,
                                d = s.isDefaultToastDisplayed,
                                f = e ? e.invite_channel : null,
                                h = e ? e.sender : null,
                                m = Object(Ce.e)(a) && Object(Ce.x)(a, !0) && h;
                            !c && m && n.setState({
                                isBoardToastDisplayed: !0
                            });
                            var b = Object(Ce.u)(a) && Object(Ce.x)(a, !1, !0) && h;
                            !u && b && n.setState({
                                isProfileToastDisplayed: !0
                            });
                            var y = p || l || d ? null : n.renderJoinSocialToast(e),
                                g = !Ve.includes(f) && !Je.includes(f) && Object(Ce.x)(a) ? o.createElement(ie, {
                                    invite: e,
                                    history: n.props.history,
                                    location: n.props.location,
                                    renderSignupModal: n.renderSignupModal,
                                    renderOnActionUpsell: n.renderOnActionUpsell,
                                    toggleSignupScrollControllerDisplay: n.toggleSignupScrollControllerDisplay,
                                    showWashOnly: n.state.showWashOnly
                                }) : t;
                            return o.createElement(x.b, null, i, g, n.renderFacebookSocialUpsell(y, e))
                        })), n
                    }
                    var n, i, r;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Ge(e, t)
                    }(t, e), n = t, (i = [{
                        key: "componentDidMount",
                        value: function() {
                            Ie.T.preload(), Ie.zb.preload(), Ie.q.preload(), Ie.F.preload();
                            var e = this.props,
                                t = e.fetchExperiencesForPlacements,
                                n = e.isBot,
                                o = e.setLoggedOutUserInfo,
                                i = e.showUnauthToastUpsell;
                            t([1000180]), Object(xe.a)(this.props.country) && (Object(Be.a)(), Object(Be.b)("PageView", (function() {
                                E.a.increment("fb_tracking_pixel", 1, {
                                    event_category: "PageView",
                                    event_name: "All Views"
                                })
                            }))), n || Object(ke.f)().then((function(e) {
                                o(e)
                            }), (function(e) {
                                o()
                            })), i()
                        }
                    }, {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function(e) {
                            this.props.isGoogleOneTapShown !== e.isGoogleOneTapShown && this.setState({
                                shouldShowGoogleOneTap: e.isGoogleOneTapShown
                            });
                            var t = this.props,
                                n = t.location,
                                o = t.referrer,
                                i = t.activeExperiments;
                            n !== e.location && (e.isSignupModalShown || !Xe(e.location, n) || function(e, t) {
                                var n = Object(Ae.a)("gotDirectDuploFreeClick");
                                n || Object(Ae.c)("gotDirectDuploFreeClick", !0);
                                var o = (t && t.mweb_unauth_amp_to_duplo || "").startsWith("enabled"),
                                    i = e || "undefined" != typeof document && document.referrer || "";
                                return Object(Pe.d)(i) && !n && o
                            }(o, i) ? e.isSignupModalShown && !Xe(e.location, n) && (this.setState({
                                showSignupStepForUpsell: !1
                            }), e.hideSignupModal()) : (e.showSignupModal(), this.handleFacebookSocialUpsellHide(), (Object(Ce.w)(!1, this.props.location) || Object(Ce.p)(this.props.location)) && this.setState({
                                showSignupStepForUpsell: !0
                            }))), e.isGoogleOneTapShown && e.isSignupModalShown && !this.state.showWashOnly ? this.setState({
                                showWashOnly: !0
                            }) : !e.isGoogleOneTapShown && this.state.showWashOnly && this.setState({
                                showWashOnly: !1
                            })
                        }
                    }, {
                        key: "renderUpsells",
                        value: function(e, t) {
                            return o.createElement(x.b, null, t, e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.children,
                                i = t.country,
                                r = t.isSignupModalShown,
                                a = t.location,
                                l = this.state,
                                s = l.interstitialUpsellDismissed,
                                c = l.interstitialUpsellHeight,
                                u = l.cookieBannerHeight,
                                p = l.shouldShowGoogleOneTap,
                                d = this.getAppUpsellV3Options(),
                                f = d && d.interstitialSticky && !s ? {
                                    paddingTop: c || 0
                                } : {},
                                h = r ? this.renderOnActionUpsell() : null,
                                m = Ke(this.props) && !Object(Ce.u)(a) ? this.renderOnLandingUpsell(d) : null;
                            return u && (f.paddingTop = f.paddingTop ? f.paddingTop + u : u), o.createElement(x.b, null, o.createElement(me, {
                                country: i,
                                setRef: this.setUnauthEUCookieBannerRef,
                                handleDismiss: this.handleCookieBannerDismiss
                            }), !d || s || Object(Ce.a)(a) ? null : this.renderUnauthInterstitialUpsell(d), o.createElement(x.b, {
                                dangerouslySetInlineStyle: {
                                    __style: f
                                }
                            }, n), o.createElement(W.a, null, o.createElement(We, {
                                crossDomain: !0,
                                fb: !0,
                                google: !0,
                                smartlock: !0,
                                history: this.props.history,
                                location: this.props.location,
                                onFBAutoLoginFailure: this.handleFacebookAutoLoginFailure
                            })), p ? this.renderGoogleOneTapExperiment() : null, o.createElement(z.a.Consumer, null, (function(t) {
                                return t ? o.createElement(R.a, {
                                    invite_code: t
                                }, (function(t) {
                                    return e.renderInviteUpsells(t, h, m)
                                })) : e.renderUpsells(h, m)
                            })))
                        }
                    }]) && Me(n.prototype, i), r && Me(n, r), t
                }(o.Component);
            t.default = Object(r.connect)((function(e, t) {
                return {
                    activeExperiments: e.experiments.active,
                    country: e.session.country,
                    canUseNativeApp: e.session.canUseNativeApp,
                    locale: e.session.locale,
                    platform: e.session.userAgentPlatform,
                    isBot: e.session.isSeoBot,
                    isSignupModalShown: e.session.isSignupModalShown,
                    isSignupModalDismissible: e.session.isSignupModalDismissible,
                    isUnauthToastUpsellDisplayed: e.session.isUnauthToastUpsellDisplayed,
                    isGoogleOneTapShown: e.session.isGoogleOneTapShown,
                    referrer: e.session.referrer
                }
            }), (function(e) {
                return {
                    activateExperiment: function(t) {
                        return e(Object(N.a)(t))
                    },
                    hideSignupModal: function() {
                        return e(Object(Y.f)())
                    },
                    setLoggedOutUserInfo: function(t) {
                        return e(Object(Y.m)(t))
                    },
                    setSessionData: function(t) {
                        return e(Object(Y.q)(t))
                    },
                    showSignupModal: function() {
                        return e(Object(Y.C)())
                    },
                    hideUnauthToastUpsell: function() {
                        return e(Object(Y.j)())
                    },
                    showUnauthToastUpsell: function() {
                        return e(Object(Y.F)())
                    },
                    hideGoogleOneTap: function() {
                        return e(Object(Y.b)())
                    },
                    fetchExperiencesForPlacements: function(t) {
                        return e(Object(s.f)(t))
                    }
                }
            }))((function(e) {
                return o.createElement(H.a, {
                    id: 1000180
                }, (function(t) {
                    var n = t.experience;
                    return o.createElement($e, Object.assign({}, e, {
                        experience: n
                    }))
                }))
            }))
        },
        "2hay": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "e", (function() {
                return p
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "c", (function() {
                return h
            }));
            var o = n("37no");

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), o.forEach((function(t) {
                        r(e, t, n[t])
                    }))
                }
                return e
            }

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var a = "274266067164",
                l = ["picture.type(large)", "id", "first_name", "last_name", "email", "gender", "birthday"],
                s = ["public_profile", "email", "user_likes", "user_birthday", "user_friends"],
                c = function(e) {
                    return Object(o.c)("//connect.facebook.net/".concat(function(e) {
                        var t = e;
                        switch (t = t.replace(/-/g, "_")) {
                            case "de":
                                t = "de_DE";
                                break;
                            case "fr":
                                t = "fr_FR";
                                break;
                            case "it":
                                t = "it_IT";
                                break;
                            case "ja":
                                t = "ja_JP";
                                break;
                            case "nl":
                                t = "nl_NL";
                                break;
                            case "tr":
                                t = "tr_TR";
                                break;
                            case "en_AU":
                                t = "en_US";
                                break;
                            case "es_419":
                            case "es_AR":
                                t = "es_LA"
                        }
                        return t
                    }(e), "/sdk.js"), o.a.FACEBOOK).then((function() {
                        window.FB.init({
                            appId: a,
                            status: !0,
                            xfbml: !0,
                            version: "v2.7"
                        })
                    }))
                },
                u = function() {
                    return new Promise((function(e) {
                        window.FB.getLoginStatus(e)
                    }))
                },
                p = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return new Promise((function(o, r) {
                        if ("connected" === e.status) {
                            var a = e.authResponse,
                                s = {
                                    facebook_id: a.userID,
                                    facebook_token: a.accessToken,
                                    facebook_autologin: t.autologin || !1
                                },
                                c = "/me?fields=".concat(l.join(","));
                            n && n("login_status.connected"), window.FB.api(c, (function(e) {
                                o({
                                    creds: s,
                                    data: i({}, e, s, e.picture && !e.picture.data.is_silhouette ? {
                                        image_url: e.picture.data.url
                                    } : {})
                                })
                            }))
                        } else {
                            var u = e.status || "unknown";
                            n && n("login_status.".concat(u)), r({
                                status: u
                            })
                        }
                    }))
                },
                d = function(e, t) {
                    var n = e.data;
                    e.isTrusted && "string" == typeof n && 0 === n.indexOf("_FB_") && -1 !== n.indexOf("type=login_button_dialog_open") && t && t("facebook_connect.login_button_dialog_open")
                },
                f = function() {
                    return new Promise((function(e) {
                        window.FB.login(e, {
                            scope: s.join(",")
                        })
                    })).then(p)
                },
                h = function(e) {
                    return new Promise((function(t, n) {
                        window.FB.api("/me/permissions", (function(o) {
                            var i = o.data;
                            if (i) {
                                var r = i.find((function(t) {
                                    return t.permission === e && "granted" === t.status
                                }));
                                return t({
                                    hasPerm: !!r
                                })
                            }
                            return n(Error("Failed to call facebook to get permission"))
                        }))
                    }))
                }
        },
        "37no": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "c", (function() {
                return c
            }));
            var o = n("7w6Q"),
                i = 20,
                r = 100,
                a = .01,
                l = Object.freeze({
                    OTHER: 0,
                    FACEBOOK: 1,
                    GPLUS_ONE: 2
                });

            function s(e) {
                return new Promise((function(t, n) {
                    if (document.querySelector('script[src="'.concat(e, '"]'))) t();
                    else {
                        var o = document.createElement("script");
                        o.src = e, o.async = !0, o.addEventListener("load", t), o.addEventListener("error", n), document.getElementsByTagName("head")[0].appendChild(o)
                    }
                }))
            }

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.OTHER,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "web" : "mweb";
                return new Promise((function(s, c) {
                    if (document.querySelector('script[src="'.concat(e, '"]'))) {
                        var u = 0;
                        if (t === l.GPLUS_ONE)
                            if (window.gapi) s();
                            else var p = setInterval((function() {
                                window.gapi || u === i ? (clearInterval(p), s()) : (u += 1, o.a.increment("".concat(n, ".loadScript.gplus_one.tries_").concat(u), a))
                            }), r);
                        else if (t === l.FACEBOOK)
                            if (window.FB) s();
                            else var d = setInterval((function() {
                                window.FB || u === i ? (clearInterval(d), s()) : (u += 1, o.a.increment("".concat(n, ".loadScript.facebook.tries_").concat(u), a))
                            }), r);
                        else s()
                    } else {
                        var f = document.createElement("script");
                        f.src = e, f.async = !0, f.addEventListener("load", s), f.addEventListener("error", c), document.getElementsByTagName("head")[0].appendChild(f)
                    }
                }))
            }
        },
        BAGE: function(e, t, n) {
            "use strict";
            var o = n("q1tI"),
                i = n.n(o),
                r = n("/MKj"),
                a = n("EgnG"),
                l = n("2NiC"),
                s = n("GuVr"),
                c = n("af3U"),
                u = n("hLPq"),
                p = n("wdUa"),
                d = function(e) {
                    var t = e.fill,
                        n = e.width;
                    return "half" === t ? o.createElement("svg", {
                        height: n,
                        width: n,
                        viewBox: "0 0 32 32",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o.createElement("path", {
                        fill: "lightgray",
                        d: "M32 12.118l-11.61-1.2L16.025.6 16 .66v24.665l.02-.013 9.894 6.088-2.648-11.533"
                    }), o.createElement("path", {
                        fill: "orange",
                        d: "M11.547 10.918L0 12.118l8.822 7.75L6.127 31.4 16 25.325V.66"
                    })) : o.createElement("svg", {
                        height: n,
                        width: n,
                        viewBox: "0 0 32 32",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o.createElement("path", {
                        fill: "gray" === t ? "lightgray" : t,
                        d: "M20.388 10.918L32 12.118l-8.735 7.75 2.65 11.532-9.894-6.088L6.128 31.4l2.695-11.533L0 12.117l11.547-1.2L16.027.6l4.36 10.318z"
                    }))
                },
                f = n("sRIr"),
                h = n("/8nX"),
                m = n("fArA"),
                b = n("+o5r"),
                y = n("4Tgq"),
                g = n("AGnR"),
                w = n("n6mq"),
                v = n("wIs1");

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function _(e) {
                return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function T(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var k = function() {
                    return window.screen.width <= b.a
                },
                x = "upsellValuePropContainer",
                P = [{
                    title: c.a._("Pinterest", "Pinterest brand for the app upsell"),
                    subtitle: c.a._("Get the app for finding ideas", "Unauth app interstitial upsell value proposition subtitle")
                }, {
                    title: c.a._("Find what you love", "Unauth app interstitial upsell value proposition title"),
                    subtitle: c.a._("Discover even more ideas like this one", "Unauth app interstitial upsell value proposition subtitle")
                }, {
                    title: c.a._("Save for later", "Unauth app interstitial upsell value proposition title"),
                    subtitle: c.a._("Organize all your ideas in one place", "Unauth app interstitial upsell value proposition subtitle")
                }],
                U = function(e) {
                    return {
                        targets: "#".concat(x, "-").concat(e),
                        delay: 3500 * e,
                        endDelay: 3e3,
                        duration: 500,
                        opacity: [0, 1],
                        translateY: ["100%", "0%"],
                        easing: "cubicBezier(0.25, 0.1, 0.25, 1)"
                    }
                },
                D = function(e) {
                    return {
                        targets: "#".concat(x, "-").concat(e),
                        duration: 500,
                        opacity: [1, 0],
                        translateY: ["0%", "-100%"],
                        easing: "cubicBezier(0.25, 0.1, 0.25, 1)"
                    }
                },
                C = function(e) {
                    function t() {
                        var e, n, o, r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++) s[u] = arguments[u];
                        return o = this, r = (e = _(t)).call.apply(e, [this].concat(s)), n = !r || "object" !== S(r) && "function" != typeof r ? j(o) : r, T(j(j(n)), "state", {
                            userDismissedUpsell: !1
                        }), T(j(j(n)), "requestAnimationFrameId", null), T(j(j(n)), "handleOpenAppClick", (function(e, t) {
                            var o = e.event;
                            n.props.handleClickLogging && n.props.handleClickLogging();
                            var i = n.props,
                                r = i.viewParameter,
                                a = i.viewType,
                                l = i.location,
                                s = i.handleOpenInApp;
                            Object(y.b)("mweb_unauth.interstitial_app_upsell.install_tap", {
                                x: o.pageX,
                                y: o.pageY
                            }), Object(g.g)({
                                component: 13198,
                                element: 10308,
                                view_type: a,
                                view_parameter: r
                            }), s ? s(t) : t && t(l.pathname.substr(1))
                        })), T(j(j(n)), "handleHide", (function(e) {
                            var t = n.props,
                                o = t.handleHide,
                                i = t.viewParameter,
                                r = t.viewType;
                            Object(y.b)("mweb_unauth.interstitial_app_upsell.dismiss_tap", {
                                x: e.pageX,
                                y: e.pageY
                            }), Object(g.g)({
                                component: 13198,
                                element: 75,
                                view_type: r,
                                view_parameter: i
                            }), n.setState({
                                userDismissedUpsell: !0
                            }), o && o()
                        })), T(j(j(n)), "startAnimation", (function() {
                            n.requestAnimationFrameId = window.requestAnimationFrame((function() {
                                P.forEach((function(e, t) {
                                    Object(a.a)(U(t)).finished.then((function() {
                                        Object(a.a)(D(t)).finished.then((function() {
                                            t >= P.length - 1 && n.startAnimation()
                                        }))
                                    }))
                                }))
                            }))
                        })), T(j(j(n)), "renderSubheaderUpsell", (function() {
                            return "ratings" === n.props.subheaderUpsellCopy ? i.a.createElement(w.b, null, n.renderPinRatings(), i.a.createElement(w.C, {
                                bold: !0,
                                inline: !0,
                                size: "xs"
                            }, i.a.createElement(w.b, {
                                display: "inlineBlock",
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        color: "b5b5b5"
                                    }
                                }
                            }, c.a._("2.58M ratings", "Unauth app upsell copy to reflect number of ratings in the app store")))) : i.a.createElement(w.C, {
                                color: "darkGray",
                                overflow: "normal",
                                size: "sm"
                            }, c.a._("Get the free app for more ideas", "Unauth app interstitial upsell value proposition"))
                        })), T(j(j(n)), "renderValuePropCopy", (function() {
                            var e = n.props.hideLogo;
                            return i.a.createElement(w.b, {
                                marginStart: e ? 0 : 2,
                                overflow: "hidden",
                                position: "relative",
                                width: "100%",
                                height: 64
                            }, P.map((function(e, t) {
                                return function(e, t, n) {
                                    var o = {
                                        opacity: 0 === e ? 1 : 0,
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0
                                    };
                                    return i.a.createElement(w.b, {
                                        id: "".concat(x, "-").concat(e),
                                        key: e,
                                        display: "flex",
                                        direction: "column",
                                        justifyContent: "center",
                                        dangerouslySetInlineStyle: {
                                            __style: o
                                        }
                                    }, i.a.createElement(w.C, {
                                        bold: !0,
                                        color: "darkGray",
                                        size: k() ? "lg" : "xl"
                                    }, t), i.a.createElement(w.b, {
                                        dangerouslySetInlineStyle: {
                                            __style: {
                                                whiteSpace: "pre-wrap",
                                                marginTop: "-2px"
                                            }
                                        }
                                    }, i.a.createElement(w.C, {
                                        color: "darkGray",
                                        overflow: "normal",
                                        size: k() ? "xs" : "sm"
                                    }, n)))
                                }(t, e.title, e.subtitle)
                            })))
                        })), n
                    }
                    var n, o, r;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && E(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.inValuePropExperiment && this.startAnimation()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.requestAnimationFrameId && window.cancelAnimationFrame(this.requestAnimationFrameId)
                        }
                    }, {
                        key: "renderNativeAppInstallButton",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.platform,
                                o = t.locale;
                            return i.a.createElement(l.a, null, (function(t) {
                                return i.a.createElement(f.a, {
                                    onTouch: function(n) {
                                        return e.handleOpenAppClick(n, t)
                                    },
                                    pressState: "none"
                                }, i.a.createElement(w.b, {
                                    height: 38,
                                    width: 118,
                                    shape: "rounded"
                                }, "ios" === n ? i.a.createElement(p.a, {
                                    locale: o
                                }) : i.a.createElement(s.a, {
                                    locale: o
                                })))
                            }))
                        }
                    }, {
                        key: "renderPinRatings",
                        value: function() {
                            for (var e = [], t = 0; t < 5; t += 1) e.push(i.a.createElement(w.b, {
                                marginEnd: 1,
                                display: "inlineBlock",
                                key: t
                            }, i.a.createElement(d, {
                                fill: "orange",
                                width: 11,
                                key: t
                            })));
                            return e
                        }
                    }, {
                        key: "renderPlatformAppInstallButton",
                        value: function() {
                            var e = this,
                                t = this.props.platform;
                            return i.a.createElement(l.a, null, (function(n) {
                                return i.a.createElement(f.a, {
                                    onTouch: function(t) {
                                        return e.handleOpenAppClick(t, n)
                                    },
                                    pressState: "none"
                                }, "ios" === t ? i.a.createElement(w.b, {
                                    height: 32,
                                    paddingX: 5,
                                    paddingY: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    dangerouslySetInlineStyle: {
                                        __style: {
                                            backgroundColor: "#007aff",
                                            borderRadius: "16px",
                                            minWidth: "72px"
                                        }
                                    }
                                }, i.a.createElement(w.C, {
                                    align: "center",
                                    inline: !0,
                                    bold: !0,
                                    color: "white",
                                    size: "sm"
                                }, c.a._("GET", "Unauth app upsell iOS cta button to install the app"))) : i.a.createElement(w.b, {
                                    height: 32,
                                    paddingX: 5,
                                    paddingY: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    dangerouslySetInlineStyle: {
                                        __style: {
                                            backgroundColor: "#0f9d58",
                                            borderRadius: "2px",
                                            minWidth: "72px",
                                            boxShadow: "inset 0 -2px 0 0 #02783e"
                                        }
                                    }
                                }, i.a.createElement(w.b, {
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    flex: "grow",
                                    marginEnd: 1
                                }, i.a.createElement("span", {
                                    style: {
                                        fontFamily: "Roboto-Medium, Helvetica, Arial, sans-serif",
                                        fontSize: "14px",
                                        color: "white"
                                    }
                                }, c.a._("INSTALL", "Unauth app upsell Android cta button to install the app")))))
                            }))
                        }
                    }, {
                        key: "renderCTAButton",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.ctaButtonType,
                                o = t.installButtonText || c.a._("Install", "CTA on the app interstitial upsell to install the app");
                            return "native" === n ? this.renderNativeAppInstallButton() : "platform" === n ? this.renderPlatformAppInstallButton() : i.a.createElement(l.a, null, (function(t) {
                                return i.a.createElement(w.c, {
                                    color: "red",
                                    onClick: function(n) {
                                        return e.handleOpenAppClick(n, t)
                                    },
                                    size: "sm",
                                    text: o
                                })
                            }))
                        }
                    }, {
                        key: "renderDismissButton",
                        value: function() {
                            return i.a.createElement(u.a, {
                                accessibilityLabel: c.a._("Close modal", "Close the unauth app interstitial upsell"),
                                icon: "cancel",
                                shape: "circle",
                                onTouch: this.handleHide,
                                padding: 2,
                                size: 15
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.cookieBannerHeight,
                                n = e.dismissible,
                                o = e.hideLogo,
                                r = e.inValuePropExperiment,
                                a = e.isShowing,
                                l = e.setRef,
                                s = e.sticky,
                                u = e.viewParameter,
                                p = e.viewType;
                            return i.a.createElement(h.a, {
                                viewType: p || 202,
                                viewParameter: u,
                                component: 13198
                            }, i.a.createElement(w.b, {
                                "data-test-id": "unauthInterstitialUpsell"
                            }, !this.state.userDismissedUpsell && i.a.createElement(w.b, {
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.08)",
                                        zIndex: 1,
                                        backgroundColor: "#f7f7f7",
                                        marginTop: t,
                                        transition: "all 225ms cubic-bezier(0.0,0.0,0.2,1) 500ms",
                                        transform: a ? "translateY(-100vh)" : "translateY(0)"
                                    }
                                },
                                top: !0,
                                left: !0,
                                width: "100%",
                                position: s ? "fixed" : "relative",
                                paddingX: 3
                            }, i.a.createElement("div", {
                                ref: l
                            }, i.a.createElement(w.b, {
                                alignItems: "center",
                                display: "flex",
                                direction: "row",
                                justifyContent: "between"
                            }, i.a.createElement(w.b, {
                                alignItems: "center",
                                display: "flex",
                                direction: "row",
                                marginEnd: r ? 2 : 3,
                                width: "100%"
                            }, i.a.createElement(w.b, {
                                marginStart: n ? -2 : 0
                            }, n && this.renderDismissButton()), !o && i.a.createElement(w.b, {
                                alignItems: "center",
                                display: "flex",
                                height: 56,
                                justifyContent: "center",
                                shape: "rounded"
                            }, i.a.createElement(w.j, {
                                color: "red",
                                icon: "pinterest",
                                accessibilityLabel: c.a._("Pinterest App", "Pinterest icon for app upsell"),
                                size: 32
                            })), r ? this.renderValuePropCopy() : i.a.createElement(w.b, {
                                marginStart: o ? 0 : 2,
                                paddingY: 2
                            }, i.a.createElement(w.C, {
                                bold: !0,
                                color: "darkGray",
                                size: "xl"
                            }, c.a._("Pinterest", "Pinterest brand for the app upsell")), i.a.createElement(w.b, {
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        whiteSpace: "pre-wrap"
                                    }
                                }
                            }, this.renderSubheaderUpsell()))), i.a.createElement(w.b, {
                                marginEnd: 0,
                                flex: "none",
                                alignItems: "center",
                                display: "flex",
                                direction: "row"
                            }, this.renderCTAButton()))))))
                        }
                    }]) && O(n.prototype, o), r && O(n, r), t
                }(o.PureComponent);
            T(C, "defaultProps", {
                sticky: !1,
                dismissible: !1,
                subheaderUpsellCopy: "text",
                ctaButtonType: "install"
            });
            t.a = Object(m.compose)(v.a, Object(r.connect)((function(e, t) {
                return {
                    locale: e.session.locale,
                    platform: e.session.userAgentPlatform,
                    unauthId: e.session.unauthId,
                    userAgent: e.session.userAgent,
                    viewParameter: e.currentPage.viewParameter,
                    viewType: e.currentPage.viewType
                }
            })))(C)
        },
        GUxv: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var o = function(e) {
                return ! function(e) {
                    return ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "UK", "IS", "LI", "NO", "CH"].includes(e)
                }(e)
            }
        },
        ke5A: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return d
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "a", (function() {
                return h
            })), n.d(t, "b", (function() {
                return m
            }));
            var o = n("RNo4"),
                i = "BING",
                r = "GOOGLE",
                a = "YAHOO",
                l = "YANDEX",
                s = "RAKUTEN",
                c = "NAVER",
                u = [r, i, a, l, s, c];

            function p(e) {
                var t = Object(o.i)(e, !0).hostname;
                if (t && e) {
                    if (e.match(/^(http|https):\/\/(www.)?google\.com\/?$|google\.(co|com)\.[a-z]{2}\/?$|google\.[a-z]{2}\/?$/) || function(e) {
                            return e.includes("android-app://com.google.android.googlequicksearchbox")
                        }(e)) return r;
                    if (t.includes("bing.")) return i;
                    if (t.includes("yahoo.")) return a;
                    if (t.includes("yandex.")) return l;
                    if (t.includes("rakuten.")) return s;
                    if (t.includes("naver.")) return c
                }
                return ""
            }

            function d(e) {
                return p(e) === r
            }

            function f(e) {
                return u.includes(p(e))
            }

            function h(e) {
                return Boolean(Object(o.j)(e.hash)["#details?amp_client_id"]) || Boolean(Object(o.j)(e.search).amp_client_id)
            }

            function m(e) {
                return (Object(o.i)(e).hostname || "").includes(".cdn.ampproject.org")
            }
        }
    }
]);
//# sourceMappingURL=pjs-UnauthPageWrapper-e33966cafdb635e9ecd5.js.map