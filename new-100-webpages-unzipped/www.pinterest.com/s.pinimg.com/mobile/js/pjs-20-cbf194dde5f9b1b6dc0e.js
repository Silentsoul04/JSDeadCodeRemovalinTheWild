(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        Lajh: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("q1tI"),
                i = n.n(o),
                a = n("/MKj"),
                r = n("gxu6"),
                c = n("af3U"),
                l = n("37no"),
                s = n("mp1x"),
                u = n("kmwA"),
                p = n("4Tgq"),
                d = n("/8nX"),
                g = n("B/oJ"),
                f = n("6adH"),
                m = n("QtD7"),
                h = n("fArA"),
                _ = n("hQ+u"),
                b = n("Posz"),
                y = n("TXO6"),
                O = n("Q5BC"),
                v = n("vKjI"),
                T = n("VL22"),
                w = n("AGnR"),
                C = n("n6mq"),
                S = function() {
                    return o.createElement(C.b, null, o.createElement(C.b, {
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        top: !0,
                        left: !0,
                        bottom: !0,
                        right: !0,
                        dangerouslySetInlineStyle: {
                            __style: {
                                opacity: 1,
                                zIndex: 101
                            }
                        }
                    }, o.createElement(C.z, {
                        accessibilityLabel: c.a._("Loading", "Label for loading spinner"),
                        show: !0
                    })), o.createElement(C.b, {
                        color: "white",
                        position: "absolute",
                        top: !0,
                        left: !0,
                        bottom: !0,
                        right: !0,
                        dangerouslySetInlineStyle: {
                            __style: {
                                opacity: .7,
                                zIndex: 100
                            }
                        }
                    }))
                },
                E = n("tCfZ");

            function j(e) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function I(e) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function L(e, t) {
                return (L = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function R(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var N = {
                    STATIC_CONFIRMATION: "staticSignupLogin",
                    STATIC_CONFIRMATION_WITH_TOS: "staticSignupLoginWithTOS"
                },
                D = "mweb_google_one_tap.confirmation_dialog",
                x = function(e) {
                    function t() {
                        var e, n, o, i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c];
                        return o = this, i = (e = I(t)).call.apply(e, [this].concat(r)), n = !i || "object" !== j(i) && "function" != typeof i ? A(o) : i, R(A(A(n)), "handleCancelClick", (function(e) {
                            Object(p.a)("".concat(D, ".").concat(e, ".cancel.click")), Object(w.g)({
                                element: 73,
                                view_parameter: 3202,
                                view_type: 10
                            }), n.props.handleCancelClick()
                        })), R(A(A(n)), "handleConfirmSignup", (function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            Object(p.a)("".concat(D, ".").concat(e, ".confirm.click")), Object(w.g)({
                                element: 31,
                                view_parameter: 3202,
                                view_type: 10
                            }), n.props.handleConfirmSignup(t)
                        })), R(A(A(n)), "handleShowLogin", (function(e) {
                            Object(p.a)("".concat(D, ".").concat(e, ".login.click")), Object(w.g)({
                                element: 30,
                                view_parameter: 3202,
                                view_type: 10
                            }), n.props.handleShowLogin()
                        })), n
                    }
                    var n, o, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && L(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            Object(p.a)("".concat(D, ".").concat(this.props.initialStep, ".shown"))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.enableBackgroundScrolling()
                        }
                    }, {
                        key: "enableBackgroundScrolling",
                        value: function() {
                            document.body && (document.body.style.overflow = "")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.initialStep;
                            return i.a.createElement(C.b, null, this.props.loading ? i.a.createElement(S, null) : null, i.a.createElement(C.b, {
                                padding: 3
                            }, i.a.createElement(C.b, {
                                display: "inlineBlock",
                                position: "absolute",
                                top: !0,
                                right: !0,
                                marginTop: 2,
                                marginRight: 2
                            }, i.a.createElement(C.k, {
                                accessibilityLabel: c.a._("Cancel", "Button to close the signup/login modal"),
                                icon: "cancel",
                                onClick: function() {
                                    return e.handleCancelClick(t)
                                },
                                size: "sm"
                            })), i.a.createElement(C.C, {
                                align: "left",
                                size: "xl",
                                bold: !0
                            }, c.a._("Continue to Pinterest", "Title of a dialog telling enabling the user to continue with sign up or log in")), i.a.createElement(C.b, {
                                marginTop: 2
                            }, i.a.createElement(C.C, {
                                align: "left",
                                size: "md"
                            }, c.a._("Hmm, it looks like you don't have an account yet. Let's get started!", "Description text of a dialog asking the user to sign up for a Pinterest account"))), i.a.createElement(C.b, {
                                marginTop: 5
                            }, i.a.createElement(C.c, {
                                color: "red",
                                onClick: function() {
                                    return e.handleConfirmSignup(t)
                                },
                                text: c.a._("Sign up", "Text on a button which will create an account when clicked")
                            })), i.a.createElement(C.b, {
                                marginTop: 2
                            }, i.a.createElement(C.c, {
                                color: "gray",
                                onClick: function() {
                                    return e.handleShowLogin(t)
                                },
                                text: c.a._("Log in using a different method", "Text on a button which will take the user to login when clicked")
                            })), this.props.initialStep === N.STATIC_CONFIRMATION_WITH_TOS ? i.a.createElement(C.b, {
                                marginTop: 6
                            }, i.a.createElement(E.a, null)) : null))
                        }
                    }]) && k(n.prototype, o), a && k(n, a), t
                }(o.Component),
                G = {
                    USER_CANCELED: "userCanceled",
                    NO_CREDENTIALS_AVAILABLE: "noCredentialsAvailable",
                    REQUEST_FAILED: "requestFailed",
                    OPERATION_CANCELED: "operationCanceled",
                    ILLEGAL_CONCURRENT_REQUEST: "illegalConcurrentRequest",
                    INITIALIZATION_ERROR: "initializationError",
                    CONFIGURATION_ERROR: "configurationError"
                },
                P = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ["https://accounts.google.com"];
                    if (!e) return null;
                    var o = {
                        supportedAuthMethods: n,
                        supportedIdTokenProviders: [{
                            uri: "https://accounts.google.com",
                            clientId: u.a.settings.GPLUS_CLIENT_ID
                        }],
                        context: "continue"
                    };
                    return t ? e.hint(o) : e.retrieve(o)
                },
                U = function(e) {
                    e && e.cancelLastOperation && e.cancelLastOperation().then((function() {}))
                },
                M = n("ulr2"),
                F = n("wIs1");

            function z(e) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), o.forEach((function(t) {
                        Q(e, t, n[t])
                    }))
                }
                return e
            }

            function H(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function V(e) {
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
            var J = 30,
                K = "mweb_google_one_tap",
                X = "disableUnauthGoogleOneTap",
                Z = Object.freeze({
                    RETRIEVE: "retrieve",
                    HINT: "hint"
                }),
                Y = function(e) {
                    function t() {
                        var e, n, o, i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var a = arguments.length, l = new Array(a), s = 0; s < a; s++) l[s] = arguments[s];
                        return o = this, i = (e = q(t)).call.apply(e, [this].concat(l)), n = !i || "object" !== z(i) && "function" != typeof i ? V(o) : i, Q(V(V(n)), "state", {
                            loading: !1,
                            confirmationDialogStep: void 0,
                            googleOpenId: "",
                            showRegisterLoading: !1,
                            first_name: "",
                            dismissTimeout: void 0
                        }), Q(V(V(n)), "onRetrieveCredentialsSuccess", (function(e, t) {
                            var o = n.props,
                                i = o.history,
                                a = o.isAuthenticated,
                                r = o.isLimitedLoginUser,
                                c = o.location,
                                l = o.login;
                            n.disableGoogleOneTapDialog(), n.showLoading(), Object(p.a)("".concat(K, ".").concat(t, ".success"));
                            var s = {
                                google_open_id_token: e.idToken
                            };
                            Object(w.d)({
                                event_type: 7534,
                                view_type: 10,
                                view_parameter: 3201,
                                aux_data: W({}, a ? {
                                    login_state: r ? 2 : 1
                                } : {}, {
                                    signup_login_method: 4
                                })
                            }), l(s, i, c.pathname).then((function() {
                                Object(p.a)("".concat(K, ".hint.login.success")), Object(w.d)({
                                    event_type: 7536,
                                    view_type: 10,
                                    view_parameter: 3201,
                                    aux_data: W({}, a ? {
                                        login_state: r ? 2 : 1
                                    } : {}, {
                                        signup_login_method: 4
                                    })
                                })
                            }), (function(e) {
                                Object(w.d)({
                                    event_type: 7535,
                                    view_type: 10,
                                    view_parameter: 3201,
                                    aux_data: W({}, a ? {
                                        login_state: r ? 2 : 1
                                    } : {}, {
                                        signup_login_method: 4
                                    })
                                }), n.onLoginFailure(s, t, e)
                            }))
                        })), Q(V(V(n)), "onRetrieveCredentialsFailure", (function(e, t) {
                            var n = e && e.type || "unknown";
                            Object(p.a)("".concat(K, ".").concat(t, ".error.").concat(n))
                        })), Q(V(V(n)), "onLoginFailure", (function(e, t, o) {
                            n.hideLoading();
                            var i = o && o.apiErrorCode || 0;
                            if (Object(p.a)("".concat(K, ".hint.login.error.").concat(i)), i !== J || n.props.isTablet) n.props.showToast({
                                text: o.message || c.a._("We couldn’t log you in with that account. Try the Google button!")
                            }), n.props.handleLoginError();
                            else {
                                var a = n.determineConfirmationDialogStep(t);
                                a === N.STATIC_CONFIRMATION || a === N.STATIC_CONFIRMATION_WITH_TOS ? n.showConfirmationDialog(e, a) : n.attemptSignup(e.google_open_id_token, !1)
                            }
                        })), Q(V(V(n)), "onSignupSuccess", (function(e, t) {
                            var o = n.props,
                                i = o.isAuthenticated,
                                a = o.isLimitedLoginUser;
                            n.setState({
                                showRegisterLoading: !1
                            }), Object(p.a)("".concat(K, ".hint.signup.success")), Object(w.d)({
                                event_type: 7487,
                                view_type: 10,
                                view_parameter: t ? 3202 : 3201,
                                aux_data: W({}, i ? {
                                    login_state: a ? 2 : 1
                                } : {}, {
                                    signup_login_method: 4
                                })
                            }), n.props.history.push("/")
                        })), Q(V(V(n)), "onSignupFailure", (function(e, t) {
                            var o = n.props,
                                i = o.isAuthenticated,
                                a = o.isLimitedLoginUser,
                                r = e && e.api_error_code || 0;
                            Object(p.a)("".concat(K, ".hint.signup.error.").concat(r)), Object(w.d)({
                                event_type: 7488,
                                view_type: 10,
                                view_parameter: t ? 3202 : 3201,
                                aux_data: W({}, i ? {
                                    login_state: a ? 2 : 1
                                } : {}, {
                                    signup_login_method: 4
                                })
                            }), n.hideLoading(), n.hideConfirmationDialog(), n.props.showToast({
                                text: e.message || c.a._("We couldn’t sign you up with that account. Try the Google button!")
                            }), n.props.handleSignupError()
                        })), Q(V(V(n)), "determineConfirmationDialogStep", (function(e) {
                            var t = n.props.location;
                            return Object(b.o)(t) ? N.STATIC_CONFIRMATION : e === Z.RETRIEVE ? N.STATIC_CONFIRMATION_WITH_TOS : ""
                        })), Q(V(V(n)), "shouldUseMediatedAuthentication", (function() {
                            return !n.isGoogleOneTapDisabled()
                        })), Q(V(V(n)), "attemptCredentialAuthentication", (function(e, t, o) {
                            Object(p.a)("".concat(K, ".request_credentials.").concat(t)), setTimeout((function() {
                                Object(p.a)("".concat(K, ".").concat(t, ".promise_initiate"));
                                var i = P(e, o),
                                    a = n.state.dismissTimeout;
                                n.props.showGoogleOneTap(), i ? i.then((function(e) {
                                    a && clearTimeout(a), Object(p.a)("".concat(K, ".").concat(t, ".promise_resolved")), n.onRetrieveCredentialsSuccess(e, t)
                                })).catch((function(i) {
                                    t === Z.HINT && a && clearTimeout(a), Object(p.a)("".concat(K, ".").concat(t, ".promise_rejected")), n.onRetrieveCredentialsFailure(i, t);
                                    var r = i && i.type || "";
                                    o || r === G.USER_CANCELED ? n.props.handleEmptyCredentials && n.props.handleEmptyCredentials() : r !== G.OPERATION_CANCELED ? n.shouldUseMediatedAuthentication() ? n.attemptCredentialAuthentication(e, Z.HINT, !0) : n.props.handleEmptyCredentials && n.props.handleEmptyCredentials() : n.props.hideGoogleOneTap()
                                })) : Object(p.a)("".concat(K, ".request_credentials.").concat(t, ".smartlock_not_ready"))
                            }), 0)
                        })), Q(V(V(n)), "handleCancelOneTap", (function() {
                            n.hideConfirmationDialog()
                        })), Q(V(V(n)), "isGoogleOneTapDisabled", (function() {
                            return "1" === r.get(X)
                        })), Q(V(V(n)), "disableGoogleOneTapDialog", (function() {
                            r.set(X, "1", 168)
                        })), Q(V(V(n)), "navigateToLogin", (function() {
                            n.handleCancelOneTap(), n.props.history.push({
                                pathname: "/login/",
                                state: {
                                    next: n.props.location.pathname
                                }
                            })
                        })), Q(V(V(n)), "attemptSignup", (function(e, t) {
                            var o = n.props,
                                i = o.activateOriMotionExp,
                                a = o.country,
                                r = o.isAuthenticated,
                                c = o.isLimitedLoginUser,
                                l = n.decodeToken(e),
                                s = {
                                    google_open_id_token: e,
                                    first_name: l.given_name,
                                    last_name: l.family_name,
                                    image_url: l.picture
                                };
                            if (i(), Object(T.b)(a)) return n.hideLoading(), n.hideConfirmationDialog(), void n.props.history.push({
                                pathname: "/signup/thirdpartyage/",
                                state: {
                                    signupOptions: s,
                                    signupPlatform: "gtap"
                                }
                            });
                            n.setState({
                                showRegisterLoading: !0,
                                first_name: s.first_name
                            }), Object(w.d)({
                                event_type: 7537,
                                view_type: 10,
                                view_parameter: t ? 3202 : 3201,
                                aux_data: W({}, r ? {
                                    login_state: c ? 2 : 1
                                } : {}, {
                                    signup_login_method: 4
                                })
                            }), n.props.register(s).then((function(e) {
                                return n.onSignupSuccess(e, t)
                            }), (function(e) {
                                return n.onSignupFailure(e, t)
                            }))
                        })), Q(V(V(n)), "handleConfirmOneTapSignup", (function(e) {
                            e && n.showLoading();
                            var t = n.state.googleOpenId;
                            n.attemptSignup(t, !0)
                        })), n
                    }
                    var n, o, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && B(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.handleEmptyCredentials;
                            if (r.get("fba") || this.isGoogleOneTapDisabled()) e && e();
                            else {
                                var t = Object(_.b)(),
                                    n = this.props.getOneTapMigrationExpGroup(t);
                                n.startsWith("enabled_new_sdk") ? this.setupGoogleOneTapV2() : n.startsWith("enabled_12s_dismiss") ? (this.setupGoogleOneTap(), this.setupDismiss(12)) : this.setupGoogleOneTap()
                            }
                        }
                    }, {
                        key: "setupGoogleOneTapV2",
                        value: function() {
                            var e = this;
                            Object(l.b)("https://accounts.google.com/gsi/client").then((function() {
                                Object(p.a)("".concat(K, ".gsi_script_loaded"));
                                var t = window.google;
                                if (t && t.accounts && t.accounts.id) {
                                    Object(p.a)("".concat(K, ".sdk_exists"));
                                    var n = t.accounts.id;
                                    n.initialize({
                                        client_id: u.a.settings.GPLUS_CLIENT_ID,
                                        auto_select: !0,
                                        callback: e.handleOneTapResponse.bind(e),
                                        cancel_on_tap_outside: !1,
                                        context: "use",
                                        activity_listener: e.handleActivity.bind(e)
                                    }), Object(p.a)("".concat(K, ".initialize")), n.prompt(e.handleMomentNotification.bind(e))
                                }
                            }))
                        }
                    }, {
                        key: "handleMomentNotification",
                        value: function(e) {
                            var t = e.getMomentType();
                            "display" === t ? e.isDisplayed() ? Object(p.a)("".concat(K, ".display_moment.displayed")) : Object(p.a)("".concat(K, ".display_moment.not_displayed.").concat(e.getNotDisplayedReason())) : "skipped" === t ? Object(p.a)("".concat(K, ".skipped_moment.").concat(e.getSkippedReason())) : "dismissed" === t && Object(p.a)("".concat(K, ".dismissed_moment.").concat(e.getDismissedReason()))
                        }
                    }, {
                        key: "handleOneTapResponse",
                        value: function(e) {
                            if (e) {
                                Object(p.a)("".concat(K, ".select_by.").concat(e.select_by));
                                var t = "auto" === e.select_by ? Z.RETRIEVE : Z.HINT;
                                this.onRetrieveCredentialsSuccess({
                                    idToken: e.credential
                                }, t)
                            }
                        }
                    }, {
                        key: "handleActivity",
                        value: function(e) {
                            if (e) {
                                if ("error" === e.type) return Object(p.a)("".concat(K, ".error.").concat(e.errorType)), void this.props.hideGoogleOneTap();
                                var t = "ui_change" === e.type ? e.uiActivityType : e.userActivityType;
                                Object(p.a)("".concat(K, ".activity.").concat(e.type, ".").concat(t)), "prompt_displayed" === t ? this.props.showGoogleOneTap() : "close_prompt" === t && this.props.hideGoogleOneTap()
                            }
                        }
                    }, {
                        key: "setupDismiss",
                        value: function(e) {
                            var t = setTimeout((function() {
                                U(window.smartlock)
                            }), 1e3 * e);
                            this.setState({
                                dismissTimeout: t
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e;
                            Object(p.a)("".concat(K, ".dismiss_iframe.attempt")), U(window.smartlock), (e = window.google) && e.accounts && e.accounts.id && e.accounts.id.cancel()
                        }
                    }, {
                        key: "setupGoogleOneTap",
                        value: function() {
                            var e = this;
                            window.onSmartLockLoad = function(t) {
                                Object(p.a)("".concat(K, ".setup.attempt"));
                                try {
                                    var n = window.openyolo;
                                    Object(p.a)("".concat(K, ".open_yolo_load.").concat((!!n).toString())), n.setProviderUrlBase("https://smartlock.google.com/iframe/request"), e.attemptCredentialAuthentication(t, Z.RETRIEVE, !1)
                                } catch (i) {
                                    var o = i && i.name || "unknown";
                                    Object(p.a)("".concat(K, ".setup.error.").concat(o)), e.props.handleEmptyCredentials && e.props.handleEmptyCredentials()
                                }
                            }, this.addGoogleOneTapScript()
                        }
                    }, {
                        key: "base64urlUnescape",
                        value: function(e) {
                            return e.replace(/\-/g, "+").replace(/_/g, "/")
                        }
                    }, {
                        key: "decodeToken",
                        value: function(e) {
                            return JSON.parse(decodeURIComponent(atob(this.base64urlUnescape(e.split(".")[1])).split("").map((function(e) {
                                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                            })).join("")))
                        }
                    }, {
                        key: "showConfirmationDialog",
                        value: function(e, t) {
                            this.setState({
                                googleOpenId: e.google_open_id_token,
                                confirmationDialogStep: t
                            })
                        }
                    }, {
                        key: "hideConfirmationDialog",
                        value: function() {
                            this.setState({
                                confirmationDialogStep: void 0
                            })
                        }
                    }, {
                        key: "showLoading",
                        value: function() {
                            this.setState({
                                loading: !0
                            })
                        }
                    }, {
                        key: "hideLoading",
                        value: function() {
                            this.setState({
                                loading: !1,
                                showRegisterLoading: !1
                            })
                        }
                    }, {
                        key: "addGoogleOneTapScript",
                        value: function() {
                            Object(l.b)("https://smartlock.google.com/client?clientId=".concat(u.a.settings.GPLUS_CLIENT_ID))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.confirmationDialogStep;
                            return e.showRegisterLoading ? i.a.createElement(g.a, {
                                platform: "gtap"
                            }) : t ? i.a.createElement(d.a, {
                                viewType: 10,
                                viewParameter: 3202
                            }, i.a.createElement(s.a, {
                                isOpen: !0,
                                type: "google_one_tap"
                            }, i.a.createElement(x, {
                                handleCancelClick: this.handleCancelOneTap,
                                handleConfirmSignup: this.handleConfirmOneTapSignup,
                                handleShowLogin: this.navigateToLogin,
                                initialStep: t,
                                loading: this.state.loading
                            }))) : null
                        }
                    }]) && H(n.prototype, o), a && H(n, a), t
                }(o.PureComponent);
            t.default = Object(h.compose)(F.a, f.b, Object(a.connect)((function(e) {
                var t = e.session,
                    n = e.users,
                    o = void 0 === n ? {} : n;
                return {
                    country: t.country,
                    isTablet: t.isTablet,
                    isAuthenticated: t.isAuthenticated,
                    isLimitedLoginUser: Object(y.b)(o[t.userId])
                }
            }), (function(e) {
                return {
                    login: function(t, n, o) {
                        return e(Object(O.b)(t, n, o))
                    },
                    register: function(t) {
                        return e(Object(v.b)(t))
                    },
                    showGoogleOneTap: function() {
                        return e(Object(M.x)())
                    },
                    hideGoogleOneTap: function() {
                        return e(Object(M.b)())
                    },
                    activateOriMotionExp: function() {
                        return e(Object(m.a)("mweb_vertical_ori_vs_motion"))
                    },
                    getOneTapMigrationExpGroup: function(t) {
                        return e(Object(m.a)(t ? "mweb_unauth_one_tap_migration_iov2_available" : "mweb_unauth_one_tap_migration_iov2_unavailable")) || ""
                    }
                }
            })))(Y)
        }
    }
]);
//# sourceMappingURL=pjs-20-cbf194dde5f9b1b6dc0e.js.map