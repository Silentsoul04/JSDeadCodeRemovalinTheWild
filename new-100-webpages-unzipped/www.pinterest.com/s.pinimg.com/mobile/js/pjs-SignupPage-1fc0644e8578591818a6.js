(window.webpackJsonp = window.webpackJsonp || []).push([
    ["SignupPage"], {
        "+8U0": function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.split("@")[0];
                return (t.includes(".") ? t.replace(".", " ") : t.includes("_") ? t.replace("_", " ") : t).replace(/[0-9]/g, "").replace(/\w\S*/g, (function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                }))
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        "2hay": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "e", (function() {
                return f
            })), n.d(t, "h", (function() {
                return m
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "c", (function() {
                return d
            }));
            var r = n("37no");

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t, n) {
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
                u = function(e) {
                    return Object(r.c)("//connect.facebook.net/".concat(function(e) {
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
                    }(e), "/sdk.js"), r.a.FACEBOOK).then((function() {
                        window.FB.init({
                            appId: i,
                            status: !0,
                            xfbml: !0,
                            version: "v2.7"
                        })
                    }))
                },
                s = function() {
                    return new Promise((function(e) {
                        window.FB.getLoginStatus(e)
                    }))
                },
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return new Promise((function(r, a) {
                        if ("connected" === e.status) {
                            var i = e.authResponse,
                                c = {
                                    facebook_id: i.userID,
                                    facebook_token: i.accessToken,
                                    facebook_autologin: t.autologin || !1
                                },
                                u = "/me?fields=".concat(l.join(","));
                            n && n("login_status.connected"), window.FB.api(u, (function(e) {
                                r({
                                    creds: c,
                                    data: o({}, e, c, e.picture && !e.picture.data.is_silhouette ? {
                                        image_url: e.picture.data.url
                                    } : {})
                                })
                            }))
                        } else {
                            var s = e.status || "unknown";
                            n && n("login_status.".concat(s)), a({
                                status: s
                            })
                        }
                    }))
                },
                m = function(e, t) {
                    var n = e.data;
                    e.isTrusted && "string" == typeof n && 0 === n.indexOf("_FB_") && -1 !== n.indexOf("type=login_button_dialog_open") && t && t("facebook_connect.login_button_dialog_open")
                },
                p = function() {
                    return new Promise((function(e) {
                        window.FB.login(e, {
                            scope: c.join(",")
                        })
                    })).then(f)
                },
                d = function(e) {
                    return new Promise((function(t, n) {
                        window.FB.api("/me/permissions", (function(r) {
                            var o = r.data;
                            if (o) {
                                var a = o.find((function(t) {
                                    return t.permission === e && "granted" === t.status
                                }));
                                return t({
                                    hasPerm: !!a
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
                return u
            }));
            var r = n("7w6Q"),
                o = 20,
                a = 100,
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
                        var r = document.createElement("script");
                        r.src = e, r.async = !0, r.addEventListener("load", t), r.addEventListener("error", n), document.getElementsByTagName("head")[0].appendChild(r)
                    }
                }))
            }

            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.OTHER,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "web" : "mweb";
                return new Promise((function(c, u) {
                    if (document.querySelector('script[src="'.concat(e, '"]'))) {
                        var s = 0;
                        if (t === l.GPLUS_ONE)
                            if (window.gapi) c();
                            else var f = setInterval((function() {
                                window.gapi || s === o ? (clearInterval(f), c()) : (s += 1, r.a.increment("".concat(n, ".loadScript.gplus_one.tries_").concat(s), i))
                            }), a);
                        else if (t === l.FACEBOOK)
                            if (window.FB) c();
                            else var m = setInterval((function() {
                                window.FB || s === o ? (clearInterval(m), c()) : (s += 1, r.a.increment("".concat(n, ".loadScript.facebook.tries_").concat(s), i))
                            }), a);
                        else c()
                    } else {
                        var p = document.createElement("script");
                        p.src = e, p.async = !0, p.addEventListener("load", c), p.addEventListener("error", u), document.getElementsByTagName("head")[0].appendChild(p)
                    }
                }))
            }
        },
        MFNJ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("i8i4"),
                o = (n("n6mq"), function(e) {
                    var t = Object(r.findDOMNode)(e);
                    if (t && t instanceof HTMLElement) {
                        var n = t.querySelector("input");
                        n && n.focus()
                    }
                })
        },
        UjEz: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("i8i4"),
                i = n("/MKj"),
                l = n("vH2r"),
                c = n("af3U");

            function u(e) {
                var t = e && -1 !== e.indexOf("@") ? e.split("@") : [];
                if (2 === t.length) {
                    var n = t[1],
                        r = n && -1 !== n.indexOf(".") ? n.split(".") : [];
                    if (r.length >= 2 && "gmail" === r[0] && "com" !== r.slice(1).join(".")) return !0;
                    var o = function(e, t) {
                        if (0 === e.length) return t.length;
                        if (0 === t.length) return e.length;
                        var n, r, o = [];
                        for (n = 0; n <= t.length; n += 1) o[n] = [n];
                        for (r = 0; r <= e.length; r += 1) o[0][r] = r;
                        for (n = 1; n <= t.length; n += 1)
                            for (r = 1; r <= e.length; r += 1) t.charAt(n - 1) === e.charAt(r - 1) ? o[n][r] = o[n - 1][r - 1] : o[n][r] = Math.min(o[n - 1][r - 1] + 1, Math.min(o[n][r - 1] + 1, o[n - 1][r] + 1));
                        return o[t.length][e.length]
                    }(n, "gmail.com");
                    if ("g" === n.charAt(0) && (1 === o || 2 === o)) return !0
                }
                return !1
            }
            var s = n("aNdZ"),
                f = n("4Tgq"),
                m = n("5SBu"),
                p = n("n6mq"),
                d = n("c50B");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function v(e) {
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
            var w = function(e) {
                function t() {
                    var e, n, r, i;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var l = arguments.length, s = new Array(l), m = 0; m < l; m++) s[m] = arguments[m];
                    return r = this, i = (e = h(t)).call.apply(e, [this].concat(s)), n = !i || "object" !== b(i) && "function" != typeof i ? v(r) : i, E(v(v(n)), "state", {
                        email: n.props.email,
                        emailFieldElement: null,
                        error: "",
                        fixedGmail: "",
                        gmailError: null,
                        shouldShowEmailSuggestions: !1
                    }), E(v(v(n)), "onBlur", (function(e) {
                        var t = e.value;
                        n.validate(t, !0)
                    })), E(v(v(n)), "onChange", (function(e) {
                        var t = e.value;
                        if (n.props.handleChangeEmail(t).then(n.validate(t, !1)), n.state.shouldShowEmailSuggestions) n.setState({
                            shouldShowEmailSuggestions: !1
                        });
                        else if (t.endsWith("@")) {
                            var r = n.getEmailFieldElement();
                            n.setState({
                                shouldShowEmailSuggestions: !0,
                                emailFieldElement: r
                            })
                        }
                        n.setState({
                            email: t
                        })
                    })), E(v(v(n)), "getEmailFieldElement", (function() {
                        var e = Object(a.findDOMNode)(n.emailTextFieldRef);
                        return e && e instanceof HTMLElement ? e.querySelector("input") : null
                    })), E(v(v(n)), "showGmailError", (function(e) {
                        var t = e + "@gmail.com",
                            r = o.a.createElement(p.C, {
                                bold: !0,
                                inline: !0,
                                color: "red"
                            }, t),
                            a = o.a.createElement(p.b, {
                                marginTop: 1
                            }, o.a.createElement(p.G, {
                                onTouch: n.handleGmailSuggestionClick
                            }, o.a.createElement(p.C, {
                                color: "red"
                            }, c.a.interpolateNamedTemplate(c.a._("Did you mean {{ emailElement }}?", "Email suggestion when user tries to sign up with a gmail account that has a typo (like abc@gmail.con)"), {
                                emailElement: r
                            })))),
                            i = n.state.email;
                        "gmail.com" !== (i && -1 !== i.indexOf("@") ? i.split("@") : [])[1] && (n.setState({
                            error: "",
                            fixedGmail: t,
                            gmailError: a
                        }), n.props.setValidState("gmail error"), Object(f.a)("unauth_mweb.signup.gmail_suggestion.shown"))
                    })), E(v(v(n)), "handleGmailSuggestionClick", (function() {
                        n.onChange({
                            value: n.state.fixedGmail
                        }), n.setState({
                            gmailError: null
                        }), n.props.setValidState(), Object(f.a)("unauth_mweb.signup.gmail_suggestion.click")
                    })), E(v(v(n)), "validate", (function(e, t) {
                        var r = n.props.validateEmailExists,
                            o = e && -1 !== e.indexOf("@") ? e.split("@") : [];
                        if (u(e)) {
                            var a = o[0];
                            r(e).then((function(e) {
                                e.resource_response.data ? (n.setState({
                                    error: "",
                                    gmailError: null
                                }), n.props.setValidState()) : n.showGmailError(a)
                            })).catch((function(e) {
                                n.showGmailError(a)
                            }))
                        } else {
                            n.setState({
                                gmailError: null
                            });
                            var i = Object(d.j)(e, [n.requiredEmailValidator, n.emailValidator]);
                            n.setState({
                                error: t ? i : ""
                            }), n.props.setValidState(i)
                        }
                    })), E(v(v(n)), "handleEmailSuggestionClick", (function(e) {
                        Object(f.a)("mweb_unauth_email_suggestions.signup_page.tap"), n.onChange({
                            value: e
                        })
                    })), E(v(v(n)), "emailValidator", Object(d.c)({
                        message: c.a._("Not a valid email.", "Email field validation error message")
                    })), E(v(v(n)), "requiredEmailValidator", Object(d.h)({
                        message: c.a._("You missed a spot! Don't forget to add your email.", "Email validation error")
                    })), n
                }
                var n, r, i;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(t, e), n = t, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.validate(this.props.email, !1)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.disabled,
                            r = t.getFocusFieldRef,
                            a = t.hideLabel,
                            i = t.inMwebUnauthSessionPLPBannerExp,
                            u = this.state,
                            f = u.error,
                            m = u.email,
                            d = u.gmailError;
                        return o.a.createElement(p.b, {
                            marginTop: 3
                        }, !a && o.a.createElement(p.m, {
                            htmlFor: "email"
                        }, o.a.createElement(p.b, {
                            marginBottom: i ? 3 : 10
                        }, o.a.createElement(s.a, {
                            minHeight: 60
                        }, o.a.createElement(p.i, {
                            size: i ? "xs" : "sm",
                            overflow: "normal"
                        }, c.a._("What's your email?", "Sign up page field label"))))), o.a.createElement(p.b, {
                            marginTop: 2
                        }, o.a.createElement(p.E, {
                            id: "email",
                            autoComplete: this.state.shouldShowEmailSuggestions ? "off" : "on",
                            disabled: n,
                            errorMessage: this.state.shouldShowEmailSuggestions ? "" : f,
                            onBlur: this.onBlur,
                            onChange: this.onChange,
                            placeholder: c.a._("Email address", "Field label"),
                            ref: function(t) {
                                e.emailTextFieldRef = t, r(t)
                            },
                            type: "email",
                            value: m
                        }), d, this.state.shouldShowEmailSuggestions ? o.a.createElement(l.a, {
                            direction: "down",
                            email: this.state.email,
                            emailFieldElement: this.state.emailFieldElement,
                            handleEmailSuggestionClick: this.handleEmailSuggestionClick,
                            showUsername: !0
                        }) : null))
                    }
                }]) && g(n.prototype, r), i && g(n, i), t
            }(r.PureComponent);
            t.a = Object(i.connect)(null, (function(e) {
                return {
                    validateEmailExists: function(t) {
                        return e(Object(m.n)(t))
                    }
                }
            }))(w)
        },
        aNdZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var r = n("q1tI"),
                o = n.n(r),
                a = n("n6mq");

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function u(e, t) {
                return (u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function(e) {
                function t() {
                    var e, n, r, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var a = arguments.length, l = new Array(a), u = 0; u < a; u++) l[u] = arguments[u];
                    return r = this, o = (e = c(t)).call.apply(e, [this].concat(l)), n = !o || "object" !== i(o) && "function" != typeof o ? s(r) : o, f(s(s(n)), "state", {
                        textWidth: void 0
                    }), f(s(s(n)), "setWidthFn", (function(e) {
                        var t = n.props.minHeight;
                        if (e && void 0 === n.state.textWidth) {
                            var r = e.offsetHeight,
                                o = e.offsetWidth,
                                a = r < t;
                            n.setState({
                                textWidth: a ? o - 1 : "auto"
                            })
                        }
                    })), n
                }
                var n, r, m;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && u(e, t)
                }(t, e), n = t, (r = [{
                    key: "render",
                    value: function() {
                        var e = this.props.children,
                            t = this.state.textWidth;
                        return o.a.createElement(a.b, {
                            display: "flex",
                            width: t
                        }, o.a.createElement("div", {
                            ref: this.setWidthFn
                        }, e))
                    }
                }]) && l(n.prototype, r), m && l(n, m), t
            }(r.PureComponent)
        },
        b4VE: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                o = n.n(r),
                a = n("/MKj"),
                i = n("2NiC"),
                l = n("qjYu"),
                c = n("GuVr"),
                u = n("af3U"),
                s = n("fsjD"),
                f = n("75Yz"),
                m = n("wdUa"),
                p = n("Lr1Z"),
                d = n("fs0a"),
                b = n("Bb4+"),
                g = n("o+5w"),
                h = n("7w6Q"),
                y = n("n6mq");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function w(e) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function O(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var j = {
                    icon: {
                        offset: {
                            bottom: "26%",
                            left: "71%"
                        },
                        box_shadow: {
                            boxShadow: "0 0 0 2px #fff"
                        }
                    }
                },
                P = function(e) {
                    function t() {
                        var e, n, r, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c];
                        return r = this, a = (e = w(t)).call.apply(e, [this].concat(l)), n = !a || "object" !== v(a) && "function" != typeof a ? S(r) : a, O(S(S(n)), "renderTitleAndValueProps", (function() {
                            var e = n.props,
                                t = e.invite,
                                r = e.onDarkBackground,
                                a = e.showValueProp,
                                i = u.a._("Welcome to Pinterest", "Title on the mobile web home page"),
                                l = u.a._("Free, unlimited access to ideas", "Value proposition on mobile web home page"),
                                c = t ? t.sender : null,
                                s = !!c && c.first_name,
                                f = s || "";
                            return s && (i = a ? u.a._("Join {{ name }} on Pinterest", "Prompt user to signup to access all Pinterest features").replace("{{ name }}", f) : u.a._("Join {{ name }} on Pinterest for more ideas", "Prompt user to signup to access all Pinterest features").replace("{{ name }}", f)), o.a.createElement(y.b, null, o.a.createElement(y.C, {
                                color: r ? "white" : "darkGray",
                                bold: !0,
                                size: "xl",
                                align: "center",
                                overflow: "normal"
                            }, i), !s || a ? o.a.createElement(y.b, {
                                marginTop: 1
                            }, o.a.createElement(y.C, {
                                color: r ? "white" : "darkGray",
                                size: "sm",
                                align: "center"
                            }, l)) : null)
                        })), O(S(S(n)), "renderSignupIcon", (function() {
                            var e = n.props,
                                t = e.inPaidSplashImageExp,
                                r = e.invite,
                                a = e.onDarkBackground,
                                i = e.isTablet,
                                l = e.showAvatar,
                                c = r && r.sender ? r.sender : null,
                                s = c && c.full_name && c.image_large_url && l,
                                f = o.a.createElement(y.b, {
                                    position: "relative",
                                    width: "30%",
                                    height: "30%",
                                    minWidth: 8,
                                    minHeight: 8,
                                    dangerouslySetInlineStyle: {
                                        __style: j.icon.offset
                                    }
                                }, o.a.createElement(y.b, {
                                    color: "white",
                                    shape: "circle",
                                    dangerouslySetInlineStyle: {
                                        __style: j.icon.box_shadow
                                    }
                                }, o.a.createElement(y.j, {
                                    color: "red",
                                    icon: "pinterest",
                                    accessibilityLabel: "",
                                    size: "100%"
                                }))),
                                m = s ? o.a.createElement(y.a, {
                                    src: c ? c.image_large_url : "",
                                    name: c ? c.full_name : ""
                                }) : o.a.createElement(y.j, {
                                    icon: "pinterest",
                                    color: a ? "white" : "red",
                                    accessibilityLabel: u.a._("Pinterest logo"),
                                    size: i ? 120 : 72
                                }),
                                p = s ? 104 : null,
                                d = p ? {
                                    width: p,
                                    height: p
                                } : null,
                                b = !s && t ? {
                                    __style: {
                                        background: "white",
                                        borderRadius: 36
                                    }
                                } : {};
                            return o.a.createElement(y.b, {
                                justifyContent: "center",
                                display: "flex",
                                marginTop: i ? 0 : 6,
                                marginBottom: i ? 0 : 2
                            }, o.a.createElement(y.b, Object.assign({}, d, {
                                dangerouslySetInlineStyle: b
                            }), m, s ? f : null))
                        })), O(S(S(n)), "renderSignupText", (function() {
                            var e = n.props,
                                t = e.invite,
                                r = e.isTablet,
                                a = t ? t.sender : null,
                                i = !!a && a.first_name;
                            return r ? o.a.createElement(y.b, {
                                marginTop: 5,
                                marginBottom: 10
                            }, o.a.createElement(y.C, {
                                bold: !0,
                                size: "xl",
                                align: "center"
                            }, u.a._("Welcome to Pinterest", "Title on the mobile web home page"))) : o.a.createElement(y.b, {
                                marginBottom: i ? 12 : 4,
                                marginTop: i ? 6 : 0,
                                width: i ? "80%" : "100%",
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        marginLeft: i ? "10%" : "0%"
                                    }
                                }
                            }, n.renderTitleAndValueProps())
                        })), O(S(S(n)), "render", (function() {
                            return o.a.createElement(y.b, null, n.renderSignupIcon(), n.renderSignupText())
                        })), n
                    }
                    var n, r, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && _(e, t)
                    }(t, e), n = t, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.invite,
                                n = e.showValueProp,
                                r = e.showAvatar,
                                o = t ? t.sender : null;
                            o && o.first_name && (n ? h.a.increment("mweb_social_unauth_signup.prop_displayed") : h.a.increment("mweb_social_unauth_signup.no_prop_displayed"), r ? h.a.increment("mweb_social_unauth_signup.avatar_displayed") : o && o.is_default_image && h.a.increment("mweb_social_unauth_signup.default_image"), (r || n) && h.a.increment("mweb_social_unauth_signup.social_header"))
                        }
                    }]) && E(n.prototype, r), a && E(n, a), t
                }(r.PureComponent),
                x = n("vbRK"),
                T = n.n(x),
                k = n("UjEz"),
                C = n("k1Bv"),
                B = n("+8U0"),
                A = n("tCfZ"),
                I = n("4Tgq"),
                L = n("fArA"),
                F = n("MFNJ"),
                R = n("5SBu"),
                N = n("wIs1");

            function U(e) {
                return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function V(e, t) {
                return (V = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function G(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function M(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var D = function(e) {
                    function t() {
                        var e, n, r, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c];
                        return r = this, a = (e = z(t)).call.apply(e, [this].concat(l)), n = !a || "object" !== U(a) && "function" != typeof a ? G(r) : a, M(G(G(n)), "state", {
                            email: "",
                            isLoading: !1,
                            isValid: !1
                        }), M(G(G(n)), "handleChangeEmail", (function(e) {
                            return new Promise((function(t) {
                                return n.setState({
                                    email: e
                                }, t)
                            }))
                        })), M(G(G(n)), "setValidState", (function(e) {
                            n.setState({
                                isValid: !e
                            })
                        })), M(G(G(n)), "shouldShowLoginBelow", (function() {
                            return n.props.expGroup.startsWith("enabled_login_bottom")
                        })), M(G(G(n)), "handleEmailSubmit", (function() {
                            var e = n.state.email;
                            Object(I.a)("unauth_mweb.simple_splashscreen.continue_button.click"), n.props.validateEmailExists(e).then((function(t) {
                                n.setState({
                                    isLoading: !1
                                }), !0 === t.resource_response.data ? (Object(I.a)("unauth_mweb.simple_splashscreen.continue_button.existing_email"), n.props.history.push({
                                    pathname: "/login/",
                                    state: {
                                        email: e,
                                        next: n.props.next,
                                        shouldShowLoginBelow: n.shouldShowLoginBelow()
                                    }
                                })) : (Object(I.a)("unauth_mweb.simple_splashscreen.continue_button.new_email"), n.props.history.push({
                                    pathname: "/signup/step2",
                                    state: {
                                        email: e,
                                        fullName: Object(B.a)(e),
                                        showLoginButtons: !0
                                    }
                                }))
                            })), n.setState({
                                isLoading: !0
                            })
                        })), M(G(G(n)), "renderLogo", (function() {
                            var e = n.props.isTablet;
                            return o.a.createElement(y.b, {
                                display: "flex",
                                direction: "column",
                                alignItems: "center"
                            }, o.a.createElement(y.j, {
                                icon: "pinterest",
                                accessibilityLabel: "Pinterest Logo",
                                color: "red",
                                size: e ? 120 : 72
                            }), o.a.createElement(y.b, {
                                marginTop: 6,
                                marginBottom: 6
                            }, o.a.createElement(y.C, {
                                align: "center",
                                bold: !0,
                                size: "xl"
                            }, u.a._("Welcome to Pinterest", "Title on the mobile web home page")), o.a.createElement(y.b, {
                                marginTop: 2
                            }, o.a.createElement(y.C, {
                                align: "center",
                                size: "sm"
                            }, u.a._("Free, unlimited access to ideas", "Value proposition on mobile web home page")))))
                        })), M(G(G(n)), "renderLogoOrInviteHeader", (function() {
                            var e = n.props.isTablet;
                            return o.a.createElement(s.a.Consumer, null, (function(t) {
                                return t ? o.a.createElement(f.a, {
                                    invite_code: t
                                }, (function(t) {
                                    var r = t && t.sender && t.sender.full_name,
                                        a = t && t.sender && !t.sender.is_default_image,
                                        i = t || {};
                                    return r && a ? o.a.createElement(P, {
                                        invite: i,
                                        showAvatar: !0,
                                        isTablet: e
                                    }) : n.renderLogo()
                                })) : n.renderLogo()
                            }))
                        })), M(G(G(n)), "renderButtons", (function() {
                            var e = n.state.email,
                                t = o.a.createElement(y.c, {
                                    text: u.a._("Continue", "Continue button text"),
                                    color: "red",
                                    onClick: n.handleEmailSubmit
                                });
                            return o.a.createElement(y.b, {
                                width: "85%",
                                marginBottom: 4
                            }, o.a.createElement(k.a, {
                                disabled: !1,
                                hideLabel: !0,
                                email: e,
                                getFocusFieldRef: F.a,
                                handleChangeEmail: n.handleChangeEmail,
                                setValidState: n.setValidState
                            }), o.a.createElement(y.b, {
                                marginTop: 2
                            }), t)
                        })), M(G(G(n)), "render", (function() {
                            var e = n.props,
                                t = e.isTablet,
                                r = e.nativeInstallButton,
                                a = n.state.isLoading;
                            return o.a.createElement(b.b, null, a && o.a.createElement(C.a, null), o.a.createElement(y.b, {
                                position: "fixed",
                                top: !0,
                                right: !0,
                                bottom: !0,
                                left: !0
                            }, o.a.createElement(y.b, {
                                alignItems: "center",
                                direction: "row",
                                display: "flex",
                                minHeight: "100%"
                            }, o.a.createElement(y.b, {
                                display: "flex",
                                direction: "column",
                                alignItems: "center",
                                flex: "grow"
                            }, n.renderLogoOrInviteHeader(), n.renderButtons(), o.a.createElement(A.a, {
                                size: t ? "sm" : "xs"
                            }), r), o.a.createElement(y.b, {
                                display: "flex",
                                direction: "column",
                                alignItems: "center",
                                position: "absolute",
                                bottom: !0,
                                left: !0,
                                right: !0
                            }, o.a.createElement(y.b, {
                                width: "85%"
                            }, o.a.createElement(y.f, null)), o.a.createElement(y.b, {
                                marginTop: 6,
                                marginBottom: 6
                            }, o.a.createElement(p.a, {
                                to: "/business/create?referrer=home_page",
                                inline: !0,
                                pressState: "compress"
                            }, o.a.createElement(y.C, {
                                align: "center",
                                bold: !0,
                                size: "md"
                            }, u.a._("Create a business account"))))))))
                        })), n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && V(e, t)
                    }(t, e), t
                }(r.PureComponent),
                q = Object(L.compose)(N.a, Object(a.connect)(null, (function(e) {
                    return {
                        validateEmailExists: function(t) {
                            return e(Object(R.n)(t))
                        }
                    }
                })))(D),
                W = n("sRIr"),
                H = n("wa+1"),
                Z = n("SMdm"),
                J = n("PmFr"),
                K = n("RNo4"),
                $ = n("ulr2"),
                Y = n("AGnR");

            function Q(e) {
                return (Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function X(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function ee(e) {
                return (ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function te(e, t) {
                return (te = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ne(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function re(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var oe = function(e) {
                    function t() {
                        var e, n, r, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c];
                        return r = this, n = !(a = (e = ee(t)).call.apply(e, [this].concat(l))) || "object" !== Q(a) && "function" != typeof a ? ne(r) : a, re(ne(ne(n)), "handleNativeButtonOpenAppClick", (function(e) {
                            Object(Y.g)({
                                component: 15,
                                element: 10308,
                                view_parameter: 47,
                                view_type: 10
                            }), e("/")
                        })), re(ne(ne(n)), "renderBusinessToggle", (function() {
                            return o.a.createElement(y.b, {
                                alignItems: "center",
                                marginTop: 4,
                                display: "flex",
                                justifyContent: "center",
                                direction: "column"
                            }, o.a.createElement(y.b, {
                                maxWidth: 400,
                                marginBottom: 4,
                                flex: "grow",
                                width: "100%"
                            }, o.a.createElement(y.f, null)), o.a.createElement(y.b, {
                                display: "inlineBlock",
                                alignSelf: "center"
                            }, o.a.createElement(p.a, {
                                to: "/business/create?referrer=home_page",
                                inline: !0,
                                pressState: "compress"
                            }, o.a.createElement(y.C, {
                                size: "sm",
                                bold: !0,
                                inline: !0
                            }, u.a._("Create a business account")))))
                        })), n
                    }
                    var n, r, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && te(e, t)
                    }(t, e), n = t, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.location,
                                n = e.setLoginSignupFrom;
                            t.state && t.state.from && n(t.state.from), H.D.preload()
                        }
                    }, {
                        key: "renderNativeAppInstallButton",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.platform,
                                r = t.locale;
                            return o.a.createElement(i.a, null, (function(t) {
                                return o.a.createElement(W.a, {
                                    onTouch: function() {
                                        return e.handleNativeButtonOpenAppClick(t)
                                    },
                                    pressState: "none"
                                }, o.a.createElement(y.b, {
                                    height: 38,
                                    width: 118,
                                    marginTop: 4,
                                    shape: "rounded"
                                }, "ios" === n ? o.a.createElement(m.a, {
                                    locale: r
                                }) : o.a.createElement(c.a, {
                                    locale: r
                                })))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.canUseNativeApp,
                                n = e.inPaidSplashImageExp,
                                r = e.isTablet,
                                a = e.next,
                                i = e.simpleSplashExpGroup;
                            return o.a.createElement(g.a, {
                                viewType: 10,
                                viewParameter: 47
                            }, i ? o.a.createElement(q, {
                                expGroup: i,
                                isTablet: r,
                                nativeInstallButton: this.renderNativeAppInstallButton(),
                                next: a
                            }) : o.a.createElement(y.b, {
                                display: "flex",
                                direction: "column",
                                justifyContent: "center",
                                dangerouslySetInlineStyle: n ? {} : {
                                    __style: {
                                        minHeight: "100%"
                                    }
                                }
                            }, o.a.createElement(b.b, null, o.a.createElement(y.b, null, o.a.createElement(s.a.Consumer, null, (function(e) {
                                return e ? o.a.createElement(f.a, {
                                    invite_code: e
                                }, (function(e) {
                                    var t = e && e.sender && e.sender.full_name,
                                        n = e && e.sender && !e.sender.is_default_image,
                                        a = e || {};
                                    return t && n ? o.a.createElement(P, {
                                        invite: a,
                                        showAvatar: !0,
                                        isTablet: r
                                    }) : o.a.createElement(P, {
                                        isTablet: r
                                    })
                                })) : o.a.createElement(P, {
                                    isTablet: r,
                                    inPaidSplashImageExp: n
                                })
                            })), o.a.createElement(d.a, {
                                facebookText: u.a._("Continue with Facebook", "Login page button"),
                                googleText: u.a._("Continue with Google", "Login page button"),
                                next: a,
                                showEmailButton: !0,
                                showLoginButtons: !0,
                                viewParameter: 47,
                                isHomeOrLoginPage: !0
                            }), o.a.createElement(A.a, {
                                size: r ? "sm" : "xs"
                            }), !r && o.a.createElement(y.b, {
                                justifyContent: "center",
                                display: "flex"
                            }, t ? this.renderNativeAppInstallButton() : null), this.renderBusinessToggle()))))
                        }
                    }]) && X(n.prototype, r), a && X(n, a), t
                }(r.PureComponent),
                ae = Object(Z.a)(J.m),
                ie = function(e) {
                    return o.a.createElement(l.a, {
                        name: "mweb_unauth_collect_email_first",
                        isEligible: !e.isPaidTraffic
                    }, (function(t) {
                        var n = t.group;
                        return n.startsWith("enabled") || n.startsWith("employees") ? o.a.createElement(oe, Object.assign({}, e, {
                            simpleSplashExpGroup: n
                        })) : o.a.createElement(l.a, {
                            name: "mweb_unauth_paid_splash_image",
                            isEligible: e.isPaidTraffic && ae
                        }, (function(t) {
                            var n = t.anyEnabled;
                            return o.a.createElement(y.b, {
                                position: "fixed",
                                top: !0,
                                right: !0,
                                bottom: !0,
                                left: !0,
                                overflow: "scrollY"
                            }, n && ae && o.a.createElement(y.b, {
                                height: "35%",
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        background: "url(".concat(ae, ")"),
                                        backgroundSize: "cover",
                                        marginBottom: "-72px"
                                    }
                                }
                            }), o.a.createElement(oe, Object.assign({}, e, {
                                inPaidSplashImageExp: n
                            })))
                        }))
                    }))
                },
                le = function(e) {
                    return o.a.createElement(y.b, {
                        position: "fixed",
                        top: !0,
                        right: !0,
                        bottom: !0,
                        left: !0,
                        overflow: "scrollY",
                        display: "flex",
                        direction: "column"
                    }, o.a.createElement(y.b, {
                        flex: "grow",
                        maxHeight: "50%",
                        dangerouslySetInlineStyle: {
                            __style: {
                                background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(".concat(T.a, ")"),
                                backgroundSize: "cover"
                            }
                        }
                    }), o.a.createElement(y.b, {
                        display: "flex",
                        direction: "column",
                        justifyContent: "center",
                        marginBottom: 6
                    }, o.a.createElement(oe, e)))
                };
            t.default = Object(L.compose)(Object(a.connect)((function(e, t) {
                var n = e.session,
                    r = t.location;
                return {
                    canUseNativeApp: n.canUseNativeApp,
                    isPaidTraffic: n.isPaidTraffic,
                    isTablet: n.isTablet,
                    locale: n.locale,
                    next: Object(K.j)(r.search).next || r.state && r.state.next,
                    platform: n.userAgentPlatform
                }
            }), (function(e) {
                return {
                    setLoginSignupFrom: function(t) {
                        return e(Object($.n)(t))
                    }
                }
            })))((function(e) {
                return e.isTablet ? o.a.createElement(le, e) : o.a.createElement(ie, e)
            }))
        },
        c50B: function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {
                return o
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "g", (function() {
                return l
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "i", (function() {
                return u
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "j", (function() {
                return p
            }));
            var r = function(e) {
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
                return n.forEach((function(e, r) {
                    var o = t[e];
                    o && (n[r] = o)
                })), n.join("")
            };

            function o(e) {
                return function(t, n) {
                    var r = [];
                    t && /\S/.test(t) || r.push(e.message);
                    var o = {
                        errors: r,
                        warnings: []
                    };
                    return n && n(o), o
                }
            }

            function a(e) {
                return function(t, n) {
                    var r = new RegExp(["(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*", '|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-\\011\\013\\014\\016-\\177])*"', ")@((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+[A-Z]{2,20}$)", "|\\[(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}\\]$"].join(""), "i"),
                        o = [];
                    (t = t && t.trim()) && !t.match(r) && o.push(e.message);
                    var a = {
                        errors: o,
                        warnings: []
                    };
                    return n && n(a), a
                }
            }

            function i(e) {
                return function(t, n) {
                    var o = r(t.trim()),
                        a = [];
                    o && "" !== o && o.length < 2 && a.push(e.ageTooShortString);
                    var i = Math.floor(parseInt(o, 10));
                    "" === o || /^\d+$/.test(o) && i > 0 && i < 300 || a.push(e.invalidAgeString);
                    var l = {
                        errors: a,
                        warnings: []
                    };
                    return n && n(l), l
                }
            }

            function l(e) {
                return function(t, n) {
                    var r = (t = t && t.trim()).replace(/[\(\)\+\-\. ]/g, ""),
                        o = [],
                        a = !1 !== e.checkLength && r.length < 7;
                    !t || t.match(/^(\(?\+?[0-9]*\)?)?[0-9_\- \.\(\)]*$/g) && !a || o.push(e.message);
                    var i = {
                        errors: o,
                        warnings: []
                    };
                    return n && n(i), i
                }
            }

            function c(e) {
                return function(t, n) {
                    var o = [];
                    "number" == typeof t || "string" == typeof t && (t = t && t.trim(), (t = r(t)) && !t.match(/^\d+$/) && o.push(e.message));
                    var a = {
                        errors: o,
                        warnings: []
                    };
                    return n && n(a), a
                }
            }

            function u(e) {
                return function(t, n) {
                    var r = [];
                    t && !t.match(/^(https?:\/\/){0,1}[a-z0-9_\-]+\..+/gi) && r.push(e.message);
                    var o = {
                        errors: r,
                        warnings: []
                    };
                    return n && n(o), o
                }
            }

            function s(e) {
                return function(t, n) {
                    var r = [];
                    (e.should_trim || !1) && (t = t && t.trim());
                    var o = t.length;
                    e.min && o < e.min ? r.push(e.minErrorString) : e.max && o > e.max && r.push(e.maxErrorString);
                    var a = {
                        errors: r,
                        warnings: []
                    };
                    return n && n(a), a
                }
            }

            function f(e) {
                return function(t, n) {
                    var r = [];
                    t !== (e && e.targetValue) && r.push(e.message);
                    var o = {
                        errors: r,
                        warnings: []
                    };
                    return n && n(o), o
                }
            }

            function m(e) {
                return function(t, n) {
                    var r = [];
                    /^[\040-\176]*$/.test(t) || r.push(e.message);
                    var o = {
                        errors: r,
                        warnings: []
                    };
                    return n && n(o), o
                }
            }

            function p(e, t) {
                var n = "";
                return t.some((function(t) {
                    var r = t(e);
                    return r.errors.length > 0 && (n = r.errors[0], !0)
                })), n
            }
        },
        vH2r: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("/MKj"),
                i = "gmail.com",
                l = "yahoo.com",
                c = "hotmail.com",
                u = {
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
            var s = n("sRIr"),
                f = n("n6mq");

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function b(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var y = {
                    border: "1px solid rgb(181, 181, 181)",
                    zIndex: 1
                },
                v = function(e) {
                    function t() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), b(this, g(t).apply(this, arguments))
                    }
                    var n, r, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && h(e, t)
                    }(t, e), n = t, (r = [{
                        key: "render",
                        value: function() {
                            var e, t = this,
                                n = this.props,
                                r = n.email,
                                a = n.emailFieldElement,
                                i = n.handleEmailSuggestionClick,
                                l = n.direction,
                                c = (e = this.props.country) && e.toUpperCase() in u ? u[e.toUpperCase()] : u.DEFAULT;
                            "top" === l && c.reverse();
                            var m = window.innerWidth - 32,
                                d = a;
                            d && (m = d.getBoundingClientRect().width);
                            var b = y;
                            if ("top" === l) {
                                var g = d ? d.offsetTop - 105 : 200;
                                b = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        })))), r.forEach((function(t) {
                                            p(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({}, y, {
                                    top: g
                                })
                            }
                            return o.a.createElement(f.b, {
                                color: "white",
                                dangerouslySetInlineStyle: {
                                    __style: b
                                },
                                direction: "column",
                                display: "flex",
                                position: "absolute",
                                top: "top" === l,
                                width: m
                            }, c.map((function(e) {
                                var n = t.props.showUsername ? r.concat(e) : e;
                                return o.a.createElement(f.b, {
                                    key: n
                                }, o.a.createElement("div", {
                                    role: "button",
                                    onMouseDown: function() {
                                        i(r.concat(e))
                                    },
                                    tabIndex: 0
                                }, o.a.createElement(s.a, {
                                    pressState: "background"
                                }, o.a.createElement(f.b, {
                                    paddingX: 3,
                                    paddingY: 2
                                }, o.a.createElement(f.C, null, n)))))
                            })))
                        }
                    }]) && d(n.prototype, r), a && d(n, a), t
                }(r.PureComponent);
            t.a = Object(a.connect)((function(e) {
                return {
                    country: e.session.country
                }
            }), null)(v)
        },
        vbRK: function(e, t) {
            e.exports = "https://s.pinimg.com/mobile/style/images/signup_page_background-560da431.jpg"
        }
    }
]);
//# sourceMappingURL=pjs-SignupPage-1fc0644e8578591818a6.js.map