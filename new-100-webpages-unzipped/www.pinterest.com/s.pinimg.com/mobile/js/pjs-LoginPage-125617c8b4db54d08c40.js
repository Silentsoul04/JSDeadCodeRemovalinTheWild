(window.webpackJsonp = window.webpackJsonp || []).push([
    ["LoginPage"], {
        "+zvl": function(e, t, n) {
            "use strict";
            var o = n("q1tI"),
                a = n.n(o),
                r = n("af3U"),
                i = n("n6mq");
            t.a = function(e) {
                var t = e.pin,
                    n = t.image,
                    l = t.pin_description,
                    c = t.dominant_color;
                return a.a.createElement(o.Fragment, null, a.a.createElement(i.f, null), a.a.createElement(i.b, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingY: 2
                }, a.a.createElement(i.b, {
                    width: 40,
                    height: 40,
                    marginRight: 2
                }, a.a.createElement(i.l, {
                    src: (n || {}).url,
                    alt: l || "",
                    naturalHeight: (n || {}).height,
                    naturalWidth: (n || {}).width,
                    color: c || "",
                    fit: "cover"
                })), a.a.createElement(i.C, {
                    bold: !0
                }, r.a._("More ideas like this await", "page banner with pin image that was signed up from"))), a.a.createElement(i.f, null))
            }
        },
        "2hay": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "e", (function() {
                return m
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "g", (function() {
                return g
            })), n.d(t, "c", (function() {
                return p
            }));
            var o = n("37no");

            function a(e) {
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
            var i = "274266067164",
                l = ["picture.type(large)", "id", "first_name", "last_name", "email", "gender", "birthday"],
                c = ["public_profile", "email", "user_likes", "user_birthday", "user_friends"],
                s = function(e) {
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
                            appId: i,
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
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return new Promise((function(o, r) {
                        if ("connected" === e.status) {
                            var i = e.authResponse,
                                c = {
                                    facebook_id: i.userID,
                                    facebook_token: i.accessToken,
                                    facebook_autologin: t.autologin || !1
                                },
                                s = "/me?fields=".concat(l.join(","));
                            n && n("login_status.connected"), window.FB.api(s, (function(e) {
                                o({
                                    creds: c,
                                    data: a({}, e, c, e.picture && !e.picture.data.is_silhouette ? {
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
                g = function() {
                    return new Promise((function(e) {
                        window.FB.login(e, {
                            scope: c.join(",")
                        })
                    })).then(m)
                },
                p = function(e) {
                    return new Promise((function(t, n) {
                        window.FB.api("/me/permissions", (function(o) {
                            var a = o.data;
                            if (a) {
                                var r = a.find((function(t) {
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
                return c
            })), n.d(t, "c", (function() {
                return s
            }));
            var o = n("7w6Q"),
                a = 20,
                r = 100,
                i = .01,
                l = Object.freeze({
                    OTHER: 0,
                    FACEBOOK: 1,
                    GPLUS_ONE: 2
                });

            function c(e) {
                return new Promise((function(t, n) {
                    if (document.querySelector('script[src="'.concat(e, '"]'))) t();
                    else {
                        var o = document.createElement("script");
                        o.src = e, o.async = !0, o.addEventListener("load", t), o.addEventListener("error", n), document.getElementsByTagName("head")[0].appendChild(o)
                    }
                }))
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.OTHER,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "web" : "mweb";
                return new Promise((function(c, s) {
                    if (document.querySelector('script[src="'.concat(e, '"]'))) {
                        var u = 0;
                        if (t === l.GPLUS_ONE)
                            if (window.gapi) c();
                            else var m = setInterval((function() {
                                window.gapi || u === a ? (clearInterval(m), c()) : (u += 1, o.a.increment("".concat(n, ".loadScript.gplus_one.tries_").concat(u), i))
                            }), r);
                        else if (t === l.FACEBOOK)
                            if (window.FB) c();
                            else var d = setInterval((function() {
                                window.FB || u === a ? (clearInterval(d), c()) : (u += 1, o.a.increment("".concat(n, ".loadScript.facebook.tries_").concat(u), i))
                            }), r);
                        else c()
                    } else {
                        var g = document.createElement("script");
                        g.src = e, g.async = !0, g.addEventListener("load", c), g.addEventListener("error", s), document.getElementsByTagName("head")[0].appendChild(g)
                    }
                }))
            }
        },
        "38yB": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("q1tI"),
                a = n.n(o),
                r = n("qjYu"),
                i = n("/MKj"),
                l = n("yeqU"),
                c = n("y6dK"),
                s = n("k1Bv"),
                u = n("af3U"),
                m = n("Lr1Z"),
                d = n("fs0a"),
                g = n("+zvl"),
                p = n("eOdZ"),
                f = n("sRIr"),
                h = n("4Tgq"),
                b = n("n6mq");

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var O = function(e) {
                    function t() {
                        var e, n, o, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
                        return o = this, a = (e = E(t)).call.apply(e, [this].concat(i)), n = !a || "object" !== w(a) && "function" != typeof a ? _(o) : a, S(_(_(n)), "handleBackToLoginClick", (function() {
                            var e = n.props,
                                t = e.method,
                                o = e.backToLogin;
                            Object(h.a)("unauth_mweb.login.no_account_found_screen.back_to_login.".concat(t)), o()
                        })), S(_(_(n)), "handleContinueSignupClick", (function() {
                            var e = n.props,
                                t = e.method,
                                o = e.continueSignup;
                            Object(h.a)("unauth_mweb.login.no_account_found_screen.account_created.".concat(t)), o()
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
                        }), t && v(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            Object(h.a)("unauth_mweb.login.no_account_found_screen.shown.".concat(this.props.method))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.email,
                                n = e.method,
                                o = u.a._("Hmm, it looks like there’s no Pinterest account that matches this email. Try logging in again?", "Short text informing users the email they tried to log in with does not belong to an existing account");
                            return "facebook" === n ? o = u.a._("Hmm, it looks like the Facebook account associated with this email isn’t on Pinterest yet.  Try logging in with a different method.", "Short text informing users the Facebook account they tried to log in with is not linked to an existing account") : "google" === n && (o = u.a._("Hmm, it looks like the Google account associated with this email isn’t on Pinterest yet.  Try logging in with a different method.", "Short text informing users the Google account they tried to log in with is not linked to an existing account")), a.a.createElement(b.b, {
                                flex: "grow"
                            }, a.a.createElement(b.i, {
                                size: "sm",
                                overflow: "normal"
                            }, u.a._("Couldn't find your Pinterest account", "Heading for the page informing users the account they tried to log in to does not exist")), a.a.createElement(b.b, {
                                marginTop: 10,
                                marginBottom: 3
                            }, t && a.a.createElement(b.C, {
                                bold: !0
                            }, t), a.a.createElement(b.b, {
                                marginTop: 4
                            }, a.a.createElement(b.C, {
                                size: "md"
                            }, o)), a.a.createElement(b.b, {
                                marginTop: 4
                            }, a.a.createElement(b.c, {
                                color: "red",
                                text: u.a._("Back to login", "Text on button taking users back to login page"),
                                onClick: this.handleBackToLoginClick
                            }))), a.a.createElement(f.a, {
                                key: "signupConfirmationLink",
                                onTouch: this.handleContinueSignupClick,
                                pressState: "background"
                            }, a.a.createElement(b.b, {
                                position: "fixed",
                                bottom: !0,
                                left: !0,
                                right: !0,
                                paddingX: 4,
                                paddingY: 8
                            }, a.a.createElement(b.C, {
                                align: "center",
                                bold: !0
                            }, u.a._("Create new account", "Text button to take users to complete sign up after attempting to log in with non-existent account")))))
                        }
                    }]) && y(n.prototype, o), r && y(n, r), t
                }(o.PureComponent),
                k = n("6adH"),
                C = n("QtD7"),
                P = n("fArA"),
                T = n("mmsh"),
                j = n("TXO6"),
                x = n("Q5BC"),
                L = n("qEYz"),
                B = n("RNo4"),
                F = n("bKKl"),
                A = n("c50B"),
                U = n("AGnR"),
                I = n("wIs1");

            function V(e) {
                return (V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R(e, t) {
                if (null == e) return {};
                var n, o, a = function(e, t) {
                    if (null == e) return {};
                    var n, o, a = {},
                        r = Object.keys(e);
                    for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), o.forEach((function(t) {
                        H(e, t, n[t])
                    }))
                }
                return e
            }

            function M(e, t) {
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

            function N(e, t) {
                return (N = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function G(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function H(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var D = function(e) {
                    return e.state && e.state.email || ""
                },
                W = function(e) {
                    var t = {
                        connectedToFacebook: e.connected_to_facebook,
                        connectedToGoogle: e.connected_to_google,
                        email: e.email,
                        firstName: e.first_name,
                        hasPassword: e.has_password,
                        avatarSrc: ""
                    };
                    return e.image_medium_url ? t.avatarSrc = e.image_medium_url : e.medium_image_url && (t.avatarSrc = e.medium_image_url), t
                },
                Z = function(e) {
                    return Object(B.j)(e.search).next || e.state && e.state.next || "/"
                },
                K = u.a._("Continue with Facebook", "Text on the facebook button on the mobile web log in modal"),
                Y = u.a._("Continue with Google", "Text on the google button on the mobile web log in modal"),
                $ = function(e) {
                    function t() {
                        var e, n, o, r;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++) l[s] = arguments[s];
                        return o = this, r = (e = q(t)).call.apply(e, [this].concat(l)), n = !r || "object" !== V(r) && "function" != typeof r ? G(o) : r, H(G(G(n)), "state", {
                            apiErrorCode: 0,
                            email: D(n.props.location),
                            isLoading: !1,
                            isValid: !0,
                            loggedInWith: null,
                            password: "",
                            emailValidationError: "",
                            passwordValidationError: "",
                            shouldShowSignupConfirmation: !1,
                            registerCallback: function() {},
                            socialEmail: "",
                            optOutFromPersonalizedForm: !1,
                            shouldShowSignUpButton: !1
                        }), H(G(G(n)), "onLoginClick", (function() {
                            n.trackButtonTap(30)
                        })), H(G(G(n)), "onSignUpClick", (function() {
                            n.trackButtonTap(31), n.props.history.push({
                                pathname: "/signup/step1/",
                                state: {
                                    email: n.state.email,
                                    password: n.state.password,
                                    isSignUpFromLoginError: !0
                                }
                            })
                        })), H(G(G(n)), "trackLoginEvent", (function(e) {
                            var t = n.props,
                                o = t.isAuthenticated,
                                a = t.isLimitedLoginUser;
                            Object(U.d)({
                                event_type: e,
                                view_type: 9,
                                view_parameter: 63,
                                aux_data: z({}, o ? {
                                    login_state: a ? 2 : 1
                                } : {}, {
                                    signup_login_method: 1
                                })
                            })
                        })), H(G(G(n)), "trackButtonTap", (function(e) {
                            var t = n.props,
                                o = t.isAuthenticated,
                                a = t.isLimitedLoginUser;
                            Object(U.g)({
                                view_type: 9,
                                element: e,
                                aux_data: z({}, o ? {
                                    login_state: a ? 2 : 1
                                } : {})
                            })
                        })), H(G(G(n)), "handleForgetPwdClick", (function() {
                            n.trackButtonTap(10881)
                        })), H(G(G(n)), "handleNotYouClick", (function() {
                            n.trackButtonTap(10879), n.setState({
                                email: "",
                                optOutFromPersonalizedForm: !0
                            })
                        })), H(G(G(n)), "handleNoAccountClick", (function() {
                            n.props.activateOriMotionExp(), n.trackButtonTap(10880)
                        })), H(G(G(n)), "handlePasswordReset", (function() {
                            var e = n.state.email;
                            n.trackButtonTap(10881), p.a.create("UserResetPasswordResource", {
                                username_or_email: e
                            }).callCreate({
                                showError: !1
                            }).then((function() {
                                return n.setState({
                                    apiErrorCode: 0
                                })
                            }))
                        })), H(G(G(n)), "validate", (function(e, t) {
                            var o = n.state,
                                a = o.email,
                                r = o.password,
                                i = Object(A.j)(a, [n.requiredEmailValidator, n.emailValidator]),
                                l = Object(A.j)(r, [n.requiredPasswordValidator]),
                                c = !i && !l;
                            !c && e && "email" === t ? n.setState({
                                emailValidationError: i,
                                isValid: c
                            }) : !c && e && "password" === t ? n.setState({
                                passwordValidationError: l,
                                isValid: c
                            }) : e || c ? n.setState({
                                emailValidationError: i,
                                passwordValidationError: l,
                                isValid: c
                            }) : n.setState({
                                isValid: c
                            })
                        })), H(G(G(n)), "validateEmailOnBlur", (function() {
                            setTimeout((function() {
                                n.validate(!0, "email")
                            }), 0)
                        })), H(G(G(n)), "validatePasswordOnBlur", (function() {
                            setTimeout((function() {
                                n.validate(!0, "password")
                            }), 0)
                        })), H(G(G(n)), "emailValidator", Object(A.c)({
                            message: u.a._("Not a valid email.", "Email field validation error message")
                        })), H(G(G(n)), "requiredEmailValidator", Object(A.h)({
                            message: u.a._("You missed a spot! Don't forget to add your email.", "Email validation error")
                        })), H(G(G(n)), "requiredPasswordValidator", Object(A.h)({
                            message: u.a._("The password you entered is incorrect.", "Password validation error")
                        })), H(G(G(n)), "handleChangeEmail", (function(e) {
                            var t = e.value;
                            n.setState({
                                email: t,
                                shouldShowSignUpButton: !1
                            }, (function() {
                                n.validate()
                            }))
                        })), H(G(G(n)), "handleChangePassword", (function(e) {
                            var t = e.value;
                            return n.setState({
                                password: t
                            }, n.validate)
                        })), H(G(G(n)), "handleLogin", (function(e) {
                            e && e.preventDefault();
                            var t = n.props,
                                o = t.history,
                                a = t.location,
                                r = t.login,
                                i = t.showToast,
                                l = t.isSignupConfirmationExpEnabled,
                                c = n.state,
                                s = c.email,
                                u = c.password,
                                m = a.state && "true" === a.state.switch_account,
                                d = m ? {
                                    isSwitchAccount: m
                                } : {},
                                g = !1;
                            n.trackLoginEvent(7534), r({
                                username_or_email: s,
                                password: u
                            }, o, Z(a), d).then((function() {
                                n.trackLoginEvent(7536)
                            })).catch((function(e) {
                                n.trackLoginEvent(7535);
                                var t = e.apiErrorCode === F.b ? {
                                    passwordValidationError: e.message
                                } : e.message ? {
                                    passwordValidationError: e.message
                                } : {};
                                e.apiErrorCode === F.d ? (i({
                                    color: "orange",
                                    text: e.message
                                }), t = {}) : e.apiErrorCode === F.c && (s ? l() ? g = !0 : t = {
                                    emailValidationError: e.message,
                                    shouldShowSignUpButton: !0
                                } : t = {
                                    emailValidationError: e.message
                                }), n.setState(z({
                                    isLoading: !1,
                                    shouldShowSignupConfirmation: g,
                                    apiErrorCode: e.apiErrorCode
                                }, t))
                            })), n.setState({
                                isLoading: !0
                            })
                        })), H(G(G(n)), "handleLoginTouch", (function(e) {
                            n.setState({
                                loggedInWith: e
                            })
                        })), H(G(G(n)), "renderLimitedLoginHeader", (function(e) {
                            return a.a.createElement(b.b, {
                                display: "flex",
                                direction: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }, a.a.createElement(b.b, {
                                display: "flex",
                                paddingY: 5
                            }, a.a.createElement(b.C, {
                                bold: !0,
                                size: "lg"
                            }, e)), a.a.createElement(b.b, {
                                marginLeft: -6,
                                marginRight: -6,
                                width: "100%"
                            }, a.a.createElement(b.f, null)))
                        })), H(G(G(n)), "renderPersonalizedLogin", (function(e) {
                            var t = n.props,
                                o = t.inLLSocialLoginExp,
                                r = t.isLimitedLoginUser,
                                i = n.state,
                                l = i.emailValidationError,
                                s = i.passwordValidationError,
                                g = i.isValid,
                                p = i.password,
                                f = i.shouldShowSignUpButton,
                                h = W(e),
                                w = h.connectedToFacebook,
                                y = h.connectedToGoogle,
                                E = h.email,
                                v = h.firstName,
                                _ = h.hasPassword,
                                S = h.avatarSrc,
                                O = !_ && !w && !y,
                                k = _ || O,
                                C = w || O,
                                P = y || O,
                                T = v ? u.a.interpolateNamedTemplate(u.a._("Welcome back, {{name}}!", "Heading on personalized login page, followed by user's name"), {
                                    name: v
                                }) : u.a._("Welcome back!", "Welcome message on user login page");
                            return a.a.createElement(a.a.Fragment, null, a.a.createElement(b.b, {
                                display: "flex",
                                direction: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 5,
                                marginBottom: k ? -3 : 5
                            }, a.a.createElement(b.C, {
                                bold: !0,
                                size: "xl",
                                align: "center",
                                overflow: "normal"
                            }, T), a.a.createElement(b.b, {
                                marginTop: 3,
                                marginBottom: 3
                            }, a.a.createElement(b.a, {
                                size: "lg",
                                src: S,
                                name: v || ""
                            })), !k && a.a.createElement(b.b, null, a.a.createElement(b.C, {
                                align: "center"
                            }, E))), a.a.createElement(b.b, {
                                deprecatedMargin: {
                                    left: "auto",
                                    right: "auto"
                                },
                                marginTop: 3,
                                marginBottom: 6,
                                maxWidth: 400
                            }, k && a.a.createElement(c.b, {
                                email: E,
                                handleChangeEmail: n.handleChangeEmail,
                                handleChangePassword: n.handleChangePassword,
                                handlePasswordReset: n.handlePasswordReset,
                                emailValidationError: l,
                                passwordValidationError: s,
                                validatePasswordOnBlur: n.validatePasswordOnBlur,
                                validateEmailOnBlur: n.validateEmailOnBlur,
                                isValid: g,
                                onLoginClick: n.onLoginClick,
                                onSignUpClick: n.onSignUpClick,
                                onSubmit: n.handleLogin,
                                password: p,
                                shouldShowSignUpButton: f,
                                showEmailAsText: !0
                            }), k && (C || P) && a.a.createElement(b.b, {
                                marginTop: 3,
                                marginBottom: 3
                            }, a.a.createElement(b.C, {
                                align: "center",
                                size: "xs",
                                bold: !0
                            }, u.a._("OR", "Separator for email login button and social login button"))), a.a.createElement(d.a, {
                                fbButtonType: "continue",
                                facebookText: w || O ? K : null,
                                googleText: y || O ? Y : null,
                                next: Z(r && o ? n.props.location : location),
                                beforeRegister: n.onSocialLoginFailure,
                                onGoogleTouch: function() {
                                    return n.handleLoginTouch("Google")
                                },
                                onFacebookTouch: function() {
                                    return n.handleLoginTouch("Facebook")
                                },
                                isHomeOrLoginPage: !0
                            })), a.a.createElement(b.b, {
                                alignItems: "center",
                                direction: "column",
                                display: "flex",
                                flex: "grow",
                                justifyContent: "center",
                                marginTop: 2
                            }, a.a.createElement(b.b, {
                                display: "flex",
                                justifyContent: "center",
                                "data-test-id": "login-switch-account"
                            }, a.a.createElement(b.b, {
                                marginEnd: 1
                            }, a.a.createElement(b.C, null, u.a._("Not you?", "Short message on the bottom of the login modal that prompts a user to log in to a different account"))), a.a.createElement(m.a, {
                                to: r && o ? {
                                    pathname: "/login",
                                    state: n.props.location.state
                                } : "/login",
                                pressState: "background",
                                onTouch: n.handleNotYouClick
                            }, a.a.createElement(b.C, {
                                bold: !0,
                                color: "darkGray"
                            }, u.a._("Log in with a different account", "Short message on the bottom of the login modal that prompts a user to log in to a different account")))), a.a.createElement(b.b, {
                                display: "flex",
                                justifyContent: "center",
                                marginTop: 4
                            }, a.a.createElement(b.b, {
                                marginEnd: 1
                            }, a.a.createElement(b.C, null, u.a._("No Account?", "Prompt for signing up"))), a.a.createElement(m.a, {
                                to: "/signup/step1",
                                pressState: "background",
                                onTouch: n.handleNoAccountClick
                            }, a.a.createElement(b.C, {
                                bold: !0,
                                color: "darkGray"
                            }, u.a._("Sign up", "Prompt for signing up"))))))
                        })), H(G(G(n)), "onSocialLoginFailure", (function(e, t) {
                            n.setState({
                                shouldShowSignupConfirmation: !0,
                                registerCallback: t,
                                socialEmail: e
                            })
                        })), H(G(G(n)), "handleCreateAccountClick", (function() {
                            var e = n.state.registerCallback;
                            e ? e() : n.onSignUpClick()
                        })), H(G(G(n)), "renderHeader", (function() {
                            return a.a.createElement(b.b, {
                                display: "flex",
                                direction: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }, a.a.createElement(b.b, {
                                display: "flex",
                                paddingY: 5
                            }, a.a.createElement(b.C, {
                                bold: !0,
                                size: "lg"
                            }, u.a._("Log in", "Header on user log in page"))), a.a.createElement(b.b, {
                                marginLeft: -6,
                                marginRight: -6,
                                width: "100%"
                            }, a.a.createElement(b.f, null)))
                        })), H(G(G(n)), "renderLoginButtons", (function(e) {
                            var t = n.props.location,
                                o = a.a.createElement(d.a, {
                                    fbButtonType: "continue",
                                    facebookText: K,
                                    googleText: Y,
                                    next: Z(t),
                                    beforeRegister: n.onSocialLoginFailure,
                                    onGoogleTouch: function() {
                                        return n.handleLoginTouch("Google")
                                    },
                                    onFacebookTouch: function() {
                                        return n.handleLoginTouch("Facebook")
                                    },
                                    isHomeOrLoginPage: !0
                                }),
                                r = a.a.createElement(b.b, {
                                    marginTop: e ? 0 : -2,
                                    marginBottom: e ? 2 : 0
                                }, a.a.createElement(b.C, {
                                    align: "center",
                                    size: "xs",
                                    bold: !0
                                }, u.a._("OR", "Separator for email login button and social login button")));
                            return e ? a.a.createElement(b.b, null, r, o) : a.a.createElement(b.b, null, o, r)
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
                        }), t && N(e, t)
                    }(t, e), n = t, r = [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = e.isAuthenticated,
                                o = e.isLimitedLoginUser,
                                a = e.loggedOutUserInfo,
                                r = e.viewingUser;
                            return n || !a || t.optOutFromPersonalizedForm ? o && r && !t.optOutFromPersonalizedForm ? {
                                email: r.email
                            } : null : {
                                email: a.email
                            }
                        }
                    }], (o = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.history,
                                n = e.isAuthenticated,
                                o = e.isLimitedLoginUser,
                                a = e.location,
                                r = e.showToast,
                                i = a.state && "true" === a.state.switch_account;
                            if (a.state && a.state.shouldShowAccountExistsToast && (r({
                                    text: u.a._("Looks like you already have a Pinterest account. Please log in.", "Toast showing that a user already has a Pinterest account and can login normally")
                                }), a.state)) {
                                var l = a.state,
                                    c = (l.shouldShowAccountExistsToast, R(l, ["shouldShowAccountExistsToast"]));
                                t.replace("/login/", c)
                            }!n || o || i || Object(L.a)({
                                history: t,
                                next: Z(a)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.isLimitedLoginUser,
                                o = t.location,
                                r = t.loggedOutUserInfo,
                                i = t.viewingUser,
                                d = t.inMwebUnauthSessionPLPBannerLoginExp,
                                p = t.lastVisitedPin,
                                f = o.state && o.state.shouldShowLoginBelow || !1,
                                h = this.state,
                                w = h.email,
                                y = h.emailValidationError,
                                E = h.passwordValidationError,
                                v = h.shouldShowSignupConfirmation,
                                _ = h.isLoading,
                                S = h.isValid,
                                k = h.loggedInWith,
                                C = h.optOutFromPersonalizedForm,
                                P = h.password,
                                T = h.shouldShowSignUpButton,
                                j = h.socialEmail,
                                x = n ? i : r,
                                L = a.a.createElement(a.a.Fragment, null, a.a.createElement(b.b, {
                                    deprecatedMargin: {
                                        left: "auto",
                                        right: "auto"
                                    },
                                    marginTop: 3,
                                    marginBottom: 6,
                                    maxWidth: 400
                                }, !f && this.renderLoginButtons(f), a.a.createElement(c.b, {
                                    email: w,
                                    handleChangeEmail: this.handleChangeEmail,
                                    handleChangePassword: this.handleChangePassword,
                                    handlePasswordReset: this.handlePasswordReset,
                                    emailValidationError: y,
                                    passwordValidationError: E,
                                    validatePasswordOnBlur: this.validatePasswordOnBlur,
                                    validateEmailOnBlur: this.validateEmailOnBlur,
                                    isValid: S,
                                    onLoginClick: this.onLoginClick,
                                    onSignUpClick: this.onSignUpClick,
                                    onSubmit: this.handleLogin,
                                    password: P,
                                    shouldShowSignUpButton: T
                                }), f && this.renderLoginButtons(f)), a.a.createElement(b.b, {
                                    alignItems: "center",
                                    direction: "column",
                                    display: "flex",
                                    flex: "grow",
                                    justifyContent: "center",
                                    marginTop: 2
                                }, a.a.createElement(b.b, {
                                    display: "flex",
                                    justifyContent: "center"
                                }, a.a.createElement(b.b, {
                                    marginEnd: 1
                                }, a.a.createElement(b.C, null, u.a._("No Account?", "Prompt for signing up"))), a.a.createElement(m.a, {
                                    to: {
                                        pathname: "/signup/step1",
                                        state: {
                                            email: w
                                        }
                                    },
                                    pressState: "background",
                                    onTouch: this.handleNoAccountClick
                                }, a.a.createElement(b.C, {
                                    bold: !0,
                                    color: "darkGray"
                                }, u.a._("Sign up", "Prompt for signing up")))), a.a.createElement(l.a, null)));
                            return v ? a.a.createElement(O, {
                                email: k ? j : w,
                                method: k ? k.toLowerCase() : "email",
                                backToLogin: function() {
                                    return e.setState({
                                        loggedInWith: null,
                                        registerCallback: void 0,
                                        shouldShowSignupConfirmation: !1,
                                        socialEmail: ""
                                    })
                                },
                                continueSignup: this.handleCreateAccountClick
                            }) : a.a.createElement(a.a.Fragment, null, d && p && a.a.createElement(g.a, {
                                pin: p
                            }), a.a.createElement(b.b, {
                                paddingX: d ? 4 : 0
                            }, x && !C ? this.renderPersonalizedLogin(x) : L, _ && a.a.createElement(s.a, null)))
                        }
                    }]) && M(n.prototype, o), r && M(n, r), t
                }(o.PureComponent),
                J = Object(P.compose)(I.a, k.b, Object(i.connect)((function(e) {
                    var t = e.session,
                        n = e.users,
                        o = void 0 === n ? {} : n,
                        a = e.experiments;
                    return {
                        canUseNativeApp: t.canUseNativeApp,
                        country: t.country,
                        isAuthenticated: t.isAuthenticated,
                        isLimitedLoginUser: Object(j.b)(o[t.userId]),
                        loggedOutUserInfo: t.loggedOutUserInfo,
                        viewingUser: o[t.userId],
                        inLLSocialLoginExp: ["enabled", "employees"].includes(Object(T.b)(a, "mweb_limited_login_stay_after_social_login") || "")
                    }
                }), (function(e) {
                    return {
                        login: function(t, n, o, a) {
                            return e(Object(x.b)(t, n, o, a))
                        },
                        activateOriMotionExp: function() {
                            return e(Object(C.a)("mweb_vertical_ori_vs_motion"))
                        },
                        isSignupConfirmationExpEnabled: function() {
                            return ["enabled", "employees"].includes(e(Object(C.a)("mweb_unauth_signup_confirmation")))
                        }
                    }
                })))($),
                X = n("Bb4+"),
                Q = n("o+5w"),
                ee = n("tCfZ"),
                te = n("SMdm"),
                ne = n("PmFr");
            t.default = function() {
                var e = (JSON.parse(Object(te.a)(ne.h)) || [])[0] || {};
                return a.a.createElement(Q.a, {
                    viewType: 9
                }, a.a.createElement(r.a, {
                    name: "mweb_unauth_session_plp_banner_login",
                    isEligible: Boolean(e.image)
                }, (function(t) {
                    var n = t.anyEnabled;
                    return a.a.createElement(X.b, {
                        hasGutter: !n
                    }, a.a.createElement(J, {
                        inMwebUnauthSessionPLPBannerLoginExp: n,
                        lastVisitedPin: e
                    }), a.a.createElement(b.b, {
                        marginTop: 5
                    }, a.a.createElement(ee.a, null)))
                })))
            }
        },
        c50B: function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "g", (function() {
                return l
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "i", (function() {
                return s
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "j", (function() {
                return g
            }));
            var o = function(e) {
                var t = {
                        "０": "0",
                        "１": "1",
                        "２": "2",
                        "３": "3",
                        "４": "4",
                        "５": "5",
                        "６": "6",
                        "７": "7",
                        "８": "8",
                        "９": "9",
                        "　": " "
                    },
                    n = String(e).split("");
                return n.forEach((function(e, o) {
                    var a = t[e];
                    a && (n[o] = a)
                })), n.join("")
            };

            function a(e) {
                return function(t, n) {
                    var o = [];
                    t && /\S/.test(t) || o.push(e.message);
                    var a = {
                        errors: o,
                        warnings: []
                    };
                    return n && n(a), a
                }
            }

            function r(e) {
                return function(t, n) {
                    var o = new RegExp(["(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*", '|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-\\011\\013\\014\\016-\\177])*"', ")@((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+[A-Z]{2,20}$)", "|\\[(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}\\]$"].join(""), "i"),
                        a = [];
                    (t = t && t.trim()) && !t.match(o) && a.push(e.message);
                    var r = {
                        errors: a,
                        warnings: []
                    };
                    return n && n(r), r
                }
            }

            function i(e) {
                return function(t, n) {
                    var a = o(t.trim()),
                        r = [];
                    a && "" !== a && a.length < 2 && r.push(e.ageTooShortString);
                    var i = Math.floor(parseInt(a, 10));
                    "" === a || /^\d+$/.test(a) && i > 0 && i < 300 || r.push(e.invalidAgeString);
                    var l = {
                        errors: r,
                        warnings: []
                    };
                    return n && n(l), l
                }
            }

            function l(e) {
                return function(t, n) {
                    var o = (t = t && t.trim()).replace(/[\(\)\+\-\. ]/g, ""),
                        a = [],
                        r = !1 !== e.checkLength && o.length < 7;
                    !t || t.match(/^(\(?\+?[0-9]*\)?)?[0-9_\- \.\(\)]*$/g) && !r || a.push(e.message);
                    var i = {
                        errors: a,
                        warnings: []
                    };
                    return n && n(i), i
                }
            }

            function c(e) {
                return function(t, n) {
                    var a = [];
                    "number" == typeof t || "string" == typeof t && (t = t && t.trim(), (t = o(t)) && !t.match(/^\d+$/) && a.push(e.message));
                    var r = {
                        errors: a,
                        warnings: []
                    };
                    return n && n(r), r
                }
            }

            function s(e) {
                return function(t, n) {
                    var o = [];
                    t && !t.match(/^(https?:\/\/){0,1}[a-z0-9_\-]+\..+/gi) && o.push(e.message);
                    var a = {
                        errors: o,
                        warnings: []
                    };
                    return n && n(a), a
                }
            }

            function u(e) {
                return function(t, n) {
                    var o = [];
                    (e.should_trim || !1) && (t = t && t.trim());
                    var a = t.length;
                    e.min && a < e.min ? o.push(e.minErrorString) : e.max && a > e.max && o.push(e.maxErrorString);
                    var r = {
                        errors: o,
                        warnings: []
                    };
                    return n && n(r), r
                }
            }

            function m(e) {
                return function(t, n) {
                    var o = [];
                    t !== (e && e.targetValue) && o.push(e.message);
                    var a = {
                        errors: o,
                        warnings: []
                    };
                    return n && n(a), a
                }
            }

            function d(e) {
                return function(t, n) {
                    var o = [];
                    /^[\040-\176]*$/.test(t) || o.push(e.message);
                    var a = {
                        errors: o,
                        warnings: []
                    };
                    return n && n(a), a
                }
            }

            function g(e, t) {
                var n = "";
                return t.some((function(t) {
                    var o = t(e);
                    return o.errors.length > 0 && (n = o.errors[0], !0)
                })), n
            }
        },
        vH2r: function(e, t, n) {
            "use strict";
            var o = n("q1tI"),
                a = n.n(o),
                r = n("/MKj"),
                i = "gmail.com",
                l = "yahoo.com",
                c = "hotmail.com",
                s = {
                    AR: [i, c, "yahoo.com.ar"],
                    AU: [i, c, "bigpond.com"],
                    BR: [i, c, "yahoo.com.br"],
                    CA: [i, c, l],
                    DE: [i, "web.de", "gmx.de"],
                    ES: [i, c, "hotmail.es"],
                    FR: [i, "hotmail.fr", "orange.fr"],
                    GB: [i, "hotmail.co.uk", "hotmail.com"],
                    IN: [i, l, "rediffmail.com"],
                    IT: [i, "libero.it", "hotmail.it"],
                    JP: [i, "yahoo.co.jp", "ezweb.ne.jp"],
                    MX: [i, c, "outlook.com"],
                    US: [i, c, l],
                    DEFAULT: [i, c, l]
                };
            var u = n("sRIr"),
                m = n("n6mq");

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function f(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t) {
                return (b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var w = {
                    border: "1px solid rgb(181, 181, 181)",
                    zIndex: 1
                },
                y = function(e) {
                    function t() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), f(this, h(t).apply(this, arguments))
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
                        }), t && b(e, t)
                    }(t, e), n = t, (o = [{
                        key: "render",
                        value: function() {
                            var e, t = this,
                                n = this.props,
                                o = n.email,
                                r = n.emailFieldElement,
                                i = n.handleEmailSuggestionClick,
                                l = n.direction,
                                c = (e = this.props.country) && e.toUpperCase() in s ? s[e.toUpperCase()] : s.DEFAULT;
                            "top" === l && c.reverse();
                            var d = window.innerWidth - 32,
                                p = r;
                            p && (d = p.getBoundingClientRect().width);
                            var f = w;
                            if ("top" === l) {
                                var h = p ? p.offsetTop - 105 : 200;
                                f = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            o = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        })))), o.forEach((function(t) {
                                            g(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({}, w, {
                                    top: h
                                })
                            }
                            return a.a.createElement(m.b, {
                                color: "white",
                                dangerouslySetInlineStyle: {
                                    __style: f
                                },
                                direction: "column",
                                display: "flex",
                                position: "absolute",
                                top: "top" === l,
                                width: d
                            }, c.map((function(e) {
                                var n = t.props.showUsername ? o.concat(e) : e;
                                return a.a.createElement(m.b, {
                                    key: n
                                }, a.a.createElement("div", {
                                    role: "button",
                                    onMouseDown: function() {
                                        i(o.concat(e))
                                    },
                                    tabIndex: 0
                                }, a.a.createElement(u.a, {
                                    pressState: "background"
                                }, a.a.createElement(m.b, {
                                    paddingX: 3,
                                    paddingY: 2
                                }, a.a.createElement(m.C, null, n)))))
                            })))
                        }
                    }]) && p(n.prototype, o), r && p(n, r), t
                }(o.PureComponent);
            t.a = Object(r.connect)((function(e) {
                return {
                    country: e.session.country
                }
            }), null)(y)
        },
        y6dK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            var o = n("q1tI"),
                a = n.n(o),
                r = n("i8i4"),
                i = n("/MKj"),
                l = n("vH2r"),
                c = n("af3U"),
                s = n("Lr1Z"),
                u = n("sRIr"),
                m = n("4Tgq"),
                d = n("QtD7"),
                g = n("AGnR"),
                p = n("n6mq");

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function E(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var v = "M11.969 17a4.983 4.983 0 0 1-2.047-.447l6.6-6.6c.281.626.447 1.316.447 2.047a5 5 0\n0 1-5 5m-5-5a5 5 0 0 1 5-5c.748 0 1.45.175 2.087.47l-6.617 6.617A4.944 4.944 0 0 1 6.969\n12m13.104-5.598l2.415-2.415a1.75 1.75 0 1 0-2.475-2.474l-3.014 3.013A12.646 12.646 0 0 0 12 3.5C6.455\n3.5 1.751 7.051 0 12a12.798 12.798 0 0 0 3.927 5.598l-2.414 2.415A1.748 1.748 0 0 0 2.75 23c.448 0 .896-.171\n1.238-.513l3.013-3.013A12.65 12.65 0 0 0 12 20.5c5.545 0 10.249-3.551 12-8.5a12.782 12.782 0 0 0-3.927-5.598\n",
                _ = function(e) {
                    function t() {
                        var e, n, i, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var s = arguments.length, d = new Array(s), h = 0; h < s; h++) d[h] = arguments[h];
                        return i = this, l = (e = b(t)).call.apply(e, [this].concat(d)), n = !l || "object" !== f(l) && "function" != typeof l ? y(i) : l, E(y(y(n)), "state", {
                            emailFieldElement: null,
                            shouldShowEmailSuggestion: !1,
                            showPassword: !1
                        }), E(y(y(n)), "getEmailFieldElement", (function() {
                            var e = Object(r.findDOMNode)(n.emailTextFieldRef);
                            return e && e instanceof HTMLElement ? e.querySelector("input") : null
                        })), E(y(y(n)), "handleChangeEmail", (function(e) {
                            var t = e.value,
                                o = n.props.handleChangeEmail;
                            if (n.state.shouldShowEmailSuggestion) n.setState({
                                shouldShowEmailSuggestion: !1
                            });
                            else if (t.endsWith("@")) {
                                var a = n.getEmailFieldElement();
                                n.setState({
                                    shouldShowEmailSuggestion: !0,
                                    emailFieldElement: a
                                })
                            }
                            o && o({
                                value: t
                            })
                        })), E(y(y(n)), "handleEmailSuggestionClick", (function(e) {
                            Object(m.a)("mweb_unauth_email_suggestions.login_page.tap"), n.setState({
                                shouldShowEmailSuggestion: !1
                            }), n.handleChangeEmail({
                                value: e
                            })
                        })), E(y(y(n)), "validateEmailOnBlur", (function() {
                            var e = n.props.validateEmailOnBlur;
                            !n.state.shouldShowEmailSuggestion && e && e()
                        })), E(y(y(n)), "handlePasswordFieldFocus", (function() {
                            n.setState({
                                shouldShowEmailSuggestion: !1
                            })
                        })), E(y(y(n)), "togglePassword", (function(e) {
                            var t = n.state.showPassword;
                            Object(g.d)({
                                event_type: t ? 107 : 106,
                                view_type: 9,
                                element: 129
                            }), n.setState({
                                showPassword: !t
                            })
                        })), E(y(y(n)), "handleSignupClick", (function() {
                            var e = n.props,
                                t = e.activateOriMotionExp,
                                o = e.onSignUpClick;
                            t(), o && o()
                        })), E(y(y(n)), "renderErrorInlineMiddle", (function(e, t, o) {
                            return a.a.createElement(p.b, {
                                marginTop: 1
                            }, a.a.createElement(p.E, {
                                autoComplete: n.state.shouldShowEmailSuggestion ? "off" : "on",
                                id: "email",
                                onChange: e,
                                placeholder: c.a._("Enter email", "prompt for entering password"),
                                ref: function(e) {
                                    n.emailTextFieldRef = e
                                },
                                type: "email",
                                value: n.props.email,
                                onBlur: n.validateEmailOnBlur
                            }), a.a.createElement(p.b, {
                                marginTop: 1,
                                marginBottom: 3,
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        lineHeight: "18px"
                                    }
                                }
                            }, a.a.createElement(p.C, {
                                inline: !0,
                                color: "red",
                                overflow: "normal"
                            }, c.a._("This email address isn't linked to a Pinterest account. ", "error message show when user try to login with a non exist email account")), a.a.createElement(u.a, {
                                onTouch: o,
                                inline: !0,
                                pressState: "background"
                            }, a.a.createElement(p.C, {
                                inline: !0,
                                bold: !0,
                                color: "red",
                                overflow: "normal"
                            }, c.a._("Sign up for one now.", "A text with link that, if user click the text then it will redirect user to sign up flow")))))
                        })), E(y(y(n)), "renderPasswordToggle", (function() {
                            var e = n.state.showPassword;
                            return a.a.createElement(o.Fragment, null, a.a.createElement(p.b, {
                                position: "absolute",
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        top: 10,
                                        right: 12
                                    }
                                }
                            }, a.a.createElement(u.a, {
                                onTouch: n.togglePassword,
                                shape: "circle",
                                inline: !0,
                                pressState: "none"
                            }, e ? a.a.createElement(p.j, {
                                icon: "eye",
                                color: "gray",
                                inline: !0,
                                accessibilityLabel: c.a._("Show password", "Accessibility label for button that toggles showing the password")
                            }) : a.a.createElement(p.j, {
                                dangerouslySetSvgPath: {
                                    __path: v
                                },
                                color: "gray",
                                inline: !0,
                                accessibilityLabel: c.a._("Hide password", "Accessibility label for button that toggles hiding the password")
                            }))))
                        })), n
                    }
                    var n, i, d;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && w(e, t)
                    }(t, e), n = t, (i = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.email,
                                n = e.handleChangePassword,
                                r = e.handlePasswordReset,
                                i = e.hideLoginBtn,
                                u = e.hidePasswordField,
                                m = e.passwordValidationError,
                                d = e.emailValidationError,
                                g = e.validateEmailOnBlur,
                                f = e.validatePasswordOnBlur,
                                h = e.isValid,
                                b = e.onLoginClick,
                                w = e.onSubmit,
                                y = e.password,
                                E = e.shouldShowSignUpButton,
                                v = e.showEmailAsText,
                                _ = this.state,
                                S = _.emailFieldElement,
                                O = _.shouldShowEmailSuggestion,
                                k = _.showPassword;
                            return a.a.createElement(p.b, {
                                marginTop: 3,
                                marginBottom: 3
                            }, a.a.createElement("form", {
                                onSubmit: w,
                                autoCapitalize: "none",
                                autoCorrect: "off"
                            }, v ? a.a.createElement(p.b, {
                                marginBottom: 5
                            }, a.a.createElement(p.C, {
                                align: "center"
                            }, t)) : a.a.createElement(o.Fragment, null, O ? a.a.createElement(l.a, {
                                direction: "top",
                                email: t,
                                emailFieldElement: S,
                                handleEmailSuggestionClick: this.handleEmailSuggestionClick,
                                showUsername: !0
                            }) : null, a.a.createElement(p.b, {
                                marginTop: 1
                            }, a.a.createElement(p.E, {
                                id: "email",
                                errorMessage: d,
                                onBlur: g,
                                onChange: this.handleChangeEmail,
                                placeholder: c.a._("Email", "Prompt for user to enter in email on the mobile web login page"),
                                type: "email",
                                value: t
                            }))), u ? null : a.a.createElement(p.b, null, a.a.createElement(p.b, {
                                marginTop: 2,
                                position: "relative"
                            }, a.a.createElement(p.E, {
                                autoComplete: "on",
                                id: "password",
                                errorMessage: m,
                                onBlur: f,
                                onChange: n,
                                placeholder: c.a._("Password", "Prompt for user to enter in password on the mobile web login page"),
                                type: k ? "text" : "password",
                                value: y
                            }), this.renderPasswordToggle()), a.a.createElement(p.b, {
                                marginTop: 1
                            }, a.a.createElement(s.a, {
                                to: "/password/reset",
                                pressState: "background",
                                onTouch: r
                            }, a.a.createElement(p.C, {
                                bold: !0,
                                inline: !0,
                                smSize: "xs",
                                mdSize: "xs",
                                lgSize: "xs"
                            }, c.a._("Forgot your password?", "Link to the password reset page"))))), E && a.a.createElement(p.b, {
                                marginTop: 3
                            }, a.a.createElement(p.c, {
                                color: "red",
                                type: "submit",
                                text: c.a._("Sign up with this email", "Label for sign up button"),
                                onClick: this.handleSignupClick
                            })), !i && a.a.createElement(p.b, {
                                marginTop: 3
                            }, a.a.createElement(p.c, {
                                color: "red",
                                type: "submit",
                                text: c.a._("Log in", "Label for log in button"),
                                disabled: !h || E,
                                onClick: b
                            }))))
                        }
                    }]) && h(n.prototype, i), d && h(n, d), t
                }(o.PureComponent);
            t.b = Object(i.connect)(null, (function(e) {
                return {
                    activateOriMotionExp: function() {
                        return e(Object(d.a)("mweb_vertical_ori_vs_motion"))
                    }
                }
            }))(_)
        },
        yeqU: function(e, t, n) {
            "use strict";
            var o = n("q1tI"),
                a = n("af3U"),
                r = n("Lr1Z"),
                i = n("n6mq");
            t.a = function(e) {
                var t = e.marginTop,
                    n = void 0 === t ? 5 : t;
                return o.createElement(i.b, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    marginTop: n
                }, o.createElement(i.b, {
                    display: "flex",
                    marginEnd: 1,
                    justifyContent: "center"
                }, o.createElement(i.C, {
                    align: "center",
                    inline: !0
                }, a.a._("Are you a business?", "Prompt for business signup"))), o.createElement(i.b, {
                    display: "flex",
                    justifyContent: "center"
                }, o.createElement(r.a, {
                    inline: !0,
                    newTab: !0,
                    to: "/business/create",
                    pressState: "background"
                }, o.createElement(i.C, {
                    align: "center",
                    bold: !0
                }, a.a._("Get started here!", "Prompt for signing up")))))
            }
        }
    }
]);
//# sourceMappingURL=pjs-LoginPage-125617c8b4db54d08c40.js.map