(window.webpackJsonp = window.webpackJsonp || []).push([
    ["EmailSignupPage"], {
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
        "+zvl": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("af3U"),
                i = n("n6mq");
            t.a = function(e) {
                var t = e.pin,
                    n = t.image,
                    s = t.pin_description,
                    l = t.dominant_color;
                return a.a.createElement(r.Fragment, null, a.a.createElement(i.f, null), a.a.createElement(i.b, {
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
                    alt: s || "",
                    naturalHeight: (n || {}).height,
                    naturalWidth: (n || {}).width,
                    color: l || "",
                    fit: "cover"
                })), a.a.createElement(i.C, {
                    bold: !0
                }, o.a._("More ideas like this await", "page banner with pin image that was signed up from"))), a.a.createElement(i.f, null))
            }
        },
        "2hay": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "h", (function() {
                return p
            })), n.d(t, "g", (function() {
                return m
            })), n.d(t, "c", (function() {
                return f
            }));
            var r = n("37no");

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var i = "274266067164",
                s = ["picture.type(large)", "id", "first_name", "last_name", "email", "gender", "birthday"],
                l = ["public_profile", "email", "user_likes", "user_birthday", "user_friends"],
                c = function(e) {
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
                u = function() {
                    return new Promise((function(e) {
                        window.FB.getLoginStatus(e)
                    }))
                },
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return new Promise((function(r, o) {
                        if ("connected" === e.status) {
                            var i = e.authResponse,
                                l = {
                                    facebook_id: i.userID,
                                    facebook_token: i.accessToken,
                                    facebook_autologin: t.autologin || !1
                                },
                                c = "/me?fields=".concat(s.join(","));
                            n && n("login_status.connected"), window.FB.api(c, (function(e) {
                                r({
                                    creds: l,
                                    data: a({}, e, l, e.picture && !e.picture.data.is_silhouette ? {
                                        image_url: e.picture.data.url
                                    } : {})
                                })
                            }))
                        } else {
                            var u = e.status || "unknown";
                            n && n("login_status.".concat(u)), o({
                                status: u
                            })
                        }
                    }))
                },
                p = function(e, t) {
                    var n = e.data;
                    e.isTrusted && "string" == typeof n && 0 === n.indexOf("_FB_") && -1 !== n.indexOf("type=login_button_dialog_open") && t && t("facebook_connect.login_button_dialog_open")
                },
                m = function() {
                    return new Promise((function(e) {
                        window.FB.login(e, {
                            scope: l.join(",")
                        })
                    })).then(d)
                },
                f = function(e) {
                    return new Promise((function(t, n) {
                        window.FB.api("/me/permissions", (function(r) {
                            var a = r.data;
                            if (a) {
                                var o = a.find((function(t) {
                                    return t.permission === e && "granted" === t.status
                                }));
                                return t({
                                    hasPerm: !!o
                                })
                            }
                            return n(Error("Failed to call facebook to get permission"))
                        }))
                    }))
                }
        },
        "351Y": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            })), n.d(t, "a", (function() {
                return c
            }));
            var r = n("7w6Q"),
                a = n("RNo4"),
                o = n("SMdm");

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var s = "adcredits",
                l = function() {
                    if (!window) return !1;
                    var e = Object(a.j)(window.location.search).utm_medium;
                    return !!e && e === s
                },
                c = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.key = "paid.campaign.".concat(s)
                    }
                    var t, n, a;
                    return t = e, (n = [{
                        key: "markEligible",
                        value: function() {
                            Object(o.c)(this.key, "true"), r.a.increment("partner.paid.ad_credits.seen", 1, {
                                platform: "mobile"
                            })
                        }
                    }, {
                        key: "isEligible",
                        value: function() {
                            return "true" === Object(o.a)(this.key)
                        }
                    }, {
                        key: "claim",
                        value: function() {
                            Object(o.c)(this.key, "false"), r.a.increment("partner.paid.ad_credits.claimed", 1, {
                                platform: "mobile"
                            })
                        }
                    }]) && i(t.prototype, n), a && i(t, a), e
                }()
        },
        "37no": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "c", (function() {
                return c
            }));
            var r = n("7w6Q"),
                a = 20,
                o = 100,
                i = .01,
                s = Object.freeze({
                    OTHER: 0,
                    FACEBOOK: 1,
                    GPLUS_ONE: 2
                });

            function l(e) {
                return new Promise((function(t, n) {
                    if (document.querySelector('script[src="'.concat(e, '"]'))) t();
                    else {
                        var r = document.createElement("script");
                        r.src = e, r.async = !0, r.addEventListener("load", t), r.addEventListener("error", n), document.getElementsByTagName("head")[0].appendChild(r)
                    }
                }))
            }

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.OTHER,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "web" : "mweb";
                return new Promise((function(l, c) {
                    if (document.querySelector('script[src="'.concat(e, '"]'))) {
                        var u = 0;
                        if (t === s.GPLUS_ONE)
                            if (window.gapi) l();
                            else var d = setInterval((function() {
                                window.gapi || u === a ? (clearInterval(d), l()) : (u += 1, r.a.increment("".concat(n, ".loadScript.gplus_one.tries_").concat(u), i))
                            }), o);
                        else if (t === s.FACEBOOK)
                            if (window.FB) l();
                            else var p = setInterval((function() {
                                window.FB || u === a ? (clearInterval(p), l()) : (u += 1, r.a.increment("".concat(n, ".loadScript.facebook.tries_").concat(u), i))
                            }), o);
                        else l()
                    } else {
                        var m = document.createElement("script");
                        m.src = e, m.async = !0, m.addEventListener("load", l), m.addEventListener("error", c), document.getElementsByTagName("head")[0].appendChild(m)
                    }
                }))
            }
        },
        Ep0g: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = ["AU", "CA", "GB", "IE", "NZ", "US", "FR", "DE", "AT", "IT", "ES", "NL", "BE", "PT", "CH", "NL", "BE", "PT", "CH", "SE", "NO", "DK", "FI"],
                a = function(e) {
                    return r.includes(e.toUpperCase())
                }
        },
        MFNJ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("i8i4"),
                a = (n("n6mq"), function(e) {
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
                a = n.n(r),
                o = n("i8i4"),
                i = n("/MKj"),
                s = n("vH2r"),
                l = n("af3U");

            function c(e) {
                var t = e && -1 !== e.indexOf("@") ? e.split("@") : [];
                if (2 === t.length) {
                    var n = t[1],
                        r = n && -1 !== n.indexOf(".") ? n.split(".") : [];
                    if (r.length >= 2 && "gmail" === r[0] && "com" !== r.slice(1).join(".")) return !0;
                    var a = function(e, t) {
                        if (0 === e.length) return t.length;
                        if (0 === t.length) return e.length;
                        var n, r, a = [];
                        for (n = 0; n <= t.length; n += 1) a[n] = [n];
                        for (r = 0; r <= e.length; r += 1) a[0][r] = r;
                        for (n = 1; n <= t.length; n += 1)
                            for (r = 1; r <= e.length; r += 1) t.charAt(n - 1) === e.charAt(r - 1) ? a[n][r] = a[n - 1][r - 1] : a[n][r] = Math.min(a[n - 1][r - 1] + 1, Math.min(a[n][r - 1] + 1, a[n - 1][r] + 1));
                        return a[t.length][e.length]
                    }(n, "gmail.com");
                    if ("g" === n.charAt(0) && (1 === a || 2 === a)) return !0
                }
                return !1
            }
            var u = n("aNdZ"),
                d = n("4Tgq"),
                p = n("5SBu"),
                m = n("n6mq"),
                f = n("c50B");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function w(e) {
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
            var _ = function(e) {
                function t() {
                    var e, n, r, i;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var s = arguments.length, u = new Array(s), p = 0; p < s; p++) u[p] = arguments[p];
                    return r = this, i = (e = b(t)).call.apply(e, [this].concat(u)), n = !i || "object" !== g(i) && "function" != typeof i ? w(r) : i, E(w(w(n)), "state", {
                        email: n.props.email,
                        emailFieldElement: null,
                        error: "",
                        fixedGmail: "",
                        gmailError: null,
                        shouldShowEmailSuggestions: !1
                    }), E(w(w(n)), "onBlur", (function(e) {
                        var t = e.value;
                        n.validate(t, !0)
                    })), E(w(w(n)), "onChange", (function(e) {
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
                    })), E(w(w(n)), "getEmailFieldElement", (function() {
                        var e = Object(o.findDOMNode)(n.emailTextFieldRef);
                        return e && e instanceof HTMLElement ? e.querySelector("input") : null
                    })), E(w(w(n)), "showGmailError", (function(e) {
                        var t = e + "@gmail.com",
                            r = a.a.createElement(m.C, {
                                bold: !0,
                                inline: !0,
                                color: "red"
                            }, t),
                            o = a.a.createElement(m.b, {
                                marginTop: 1
                            }, a.a.createElement(m.G, {
                                onTouch: n.handleGmailSuggestionClick
                            }, a.a.createElement(m.C, {
                                color: "red"
                            }, l.a.interpolateNamedTemplate(l.a._("Did you mean {{ emailElement }}?", "Email suggestion when user tries to sign up with a gmail account that has a typo (like abc@gmail.con)"), {
                                emailElement: r
                            })))),
                            i = n.state.email;
                        "gmail.com" !== (i && -1 !== i.indexOf("@") ? i.split("@") : [])[1] && (n.setState({
                            error: "",
                            fixedGmail: t,
                            gmailError: o
                        }), n.props.setValidState("gmail error"), Object(d.a)("unauth_mweb.signup.gmail_suggestion.shown"))
                    })), E(w(w(n)), "handleGmailSuggestionClick", (function() {
                        n.onChange({
                            value: n.state.fixedGmail
                        }), n.setState({
                            gmailError: null
                        }), n.props.setValidState(), Object(d.a)("unauth_mweb.signup.gmail_suggestion.click")
                    })), E(w(w(n)), "validate", (function(e, t) {
                        var r = n.props.validateEmailExists,
                            a = e && -1 !== e.indexOf("@") ? e.split("@") : [];
                        if (c(e)) {
                            var o = a[0];
                            r(e).then((function(e) {
                                e.resource_response.data ? (n.setState({
                                    error: "",
                                    gmailError: null
                                }), n.props.setValidState()) : n.showGmailError(o)
                            })).catch((function(e) {
                                n.showGmailError(o)
                            }))
                        } else {
                            n.setState({
                                gmailError: null
                            });
                            var i = Object(f.j)(e, [n.requiredEmailValidator, n.emailValidator]);
                            n.setState({
                                error: t ? i : ""
                            }), n.props.setValidState(i)
                        }
                    })), E(w(w(n)), "handleEmailSuggestionClick", (function(e) {
                        Object(d.a)("mweb_unauth_email_suggestions.signup_page.tap"), n.onChange({
                            value: e
                        })
                    })), E(w(w(n)), "emailValidator", Object(f.c)({
                        message: l.a._("Not a valid email.", "Email field validation error message")
                    })), E(w(w(n)), "requiredEmailValidator", Object(f.h)({
                        message: l.a._("You missed a spot! Don't forget to add your email.", "Email validation error")
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
                            o = t.hideLabel,
                            i = t.inMwebUnauthSessionPLPBannerExp,
                            c = this.state,
                            d = c.error,
                            p = c.email,
                            f = c.gmailError;
                        return a.a.createElement(m.b, {
                            marginTop: 3
                        }, !o && a.a.createElement(m.m, {
                            htmlFor: "email"
                        }, a.a.createElement(m.b, {
                            marginBottom: i ? 3 : 10
                        }, a.a.createElement(u.a, {
                            minHeight: 60
                        }, a.a.createElement(m.i, {
                            size: i ? "xs" : "sm",
                            overflow: "normal"
                        }, l.a._("What's your email?", "Sign up page field label"))))), a.a.createElement(m.b, {
                            marginTop: 2
                        }, a.a.createElement(m.E, {
                            id: "email",
                            autoComplete: this.state.shouldShowEmailSuggestions ? "off" : "on",
                            disabled: n,
                            errorMessage: this.state.shouldShowEmailSuggestions ? "" : d,
                            onBlur: this.onBlur,
                            onChange: this.onChange,
                            placeholder: l.a._("Email address", "Field label"),
                            ref: function(t) {
                                e.emailTextFieldRef = t, r(t)
                            },
                            type: "email",
                            value: p
                        }), f, this.state.shouldShowEmailSuggestions ? a.a.createElement(s.a, {
                            direction: "down",
                            email: this.state.email,
                            emailFieldElement: this.state.emailFieldElement,
                            handleEmailSuggestionClick: this.handleEmailSuggestionClick,
                            showUsername: !0
                        }) : null))
                    }
                }]) && h(n.prototype, r), i && h(n, i), t
            }(r.PureComponent);
            t.a = Object(i.connect)(null, (function(e) {
                return {
                    validateEmailExists: function(t) {
                        return e(Object(p.n)(t))
                    }
                }
            }))(_)
        },
        aNdZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("n6mq");

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function u(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var p = function(e) {
                function t() {
                    var e, n, r, a;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++) s[c] = arguments[c];
                    return r = this, a = (e = l(t)).call.apply(e, [this].concat(s)), n = !a || "object" !== i(a) && "function" != typeof a ? u(r) : a, d(u(u(n)), "state", {
                        textWidth: void 0
                    }), d(u(u(n)), "setWidthFn", (function(e) {
                        var t = n.props.minHeight;
                        if (e && void 0 === n.state.textWidth) {
                            var r = e.offsetHeight,
                                a = e.offsetWidth,
                                o = r < t;
                            n.setState({
                                textWidth: o ? a - 1 : "auto"
                            })
                        }
                    })), n
                }
                var n, r, p;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(t, e), n = t, (r = [{
                    key: "render",
                    value: function() {
                        var e = this.props.children,
                            t = this.state.textWidth;
                        return a.a.createElement(o.b, {
                            display: "flex",
                            width: t
                        }, a.a.createElement("div", {
                            ref: this.setWidthFn
                        }, e))
                    }
                }]) && s(n.prototype, r), p && s(n, p), t
            }(r.PureComponent)
        },
        dn1y: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                a = n.n(r),
                o = n("/MKj"),
                i = n("af3U"),
                s = n("Lr1Z"),
                l = n("aNdZ"),
                c = n("sRIr"),
                u = n("y6dK"),
                d = n("AGnR"),
                p = n("n6mq"),
                m = n("c50B");

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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

            function b(e, t) {
                return (b = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var E = function(e) {
                    function t() {
                        var e, n, r, o;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var s = arguments.length, l = new Array(s), g = 0; g < s; g++) l[g] = arguments[g];
                        return r = this, o = (e = h(t)).call.apply(e, [this].concat(l)), n = !o || "object" !== f(o) && "function" != typeof o ? y(r) : o, w(y(y(n)), "state", {
                            error: "",
                            showPassword: n.props.showPasswordFirst
                        }), w(y(y(n)), "onChange", (function(e) {
                            var t = e.value;
                            n.props.handleChangePassword(t).then(n.validate(t, !1))
                        })), w(y(y(n)), "validate", (function(e, t) {
                            var r = Object(m.j)(e, [n.requiredPasswordValidator]);
                            n.setState({
                                error: t ? r : ""
                            }), n.props.setValidState(r)
                        })), w(y(y(n)), "requiredPasswordValidator", Object(m.h)({
                            message: i.a._("The password you entered is incorrect.", "Password validation error")
                        })), w(y(y(n)), "togglePassword", (function(e) {
                            var t = n.state.showPassword;
                            Object(d.d)({
                                event_type: t ? 107 : 106,
                                view_parameter: 3207,
                                view_type: 10,
                                element: 129
                            }), n.setState({
                                showPassword: !t
                            })
                        })), w(y(y(n)), "renderPasswordToggle", (function() {
                            var e = n.state.showPassword;
                            return a.a.createElement(p.b, {
                                position: "absolute",
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        top: 10,
                                        right: 12
                                    }
                                }
                            }, a.a.createElement(c.a, {
                                onTouch: n.togglePassword,
                                shape: "circle",
                                inline: !0,
                                pressState: "none"
                            }, e ? a.a.createElement(p.j, {
                                icon: "eye",
                                color: "gray",
                                inline: !0,
                                accessibilityLabel: i.a._("Show password", "Accessibility label for button that toggles showing the password")
                            }) : a.a.createElement(p.j, {
                                dangerouslySetSvgPath: {
                                    __path: u.a
                                },
                                color: "gray",
                                inline: !0,
                                accessibilityLabel: i.a._("Hide password", "Accessibility label for button that toggles hiding the password")
                            })))
                        })), w(y(y(n)), "clearPassword", (function() {
                            Object(d.d)({
                                view_parameter: 3207,
                                view_type: 10,
                                element: 73
                            }), n.props.handleChangePassword("").then(n.validate("", !1))
                        })), w(y(y(n)), "renderClearToggle", (function() {
                            return a.a.createElement(p.b, {
                                padding: 1,
                                position: "absolute",
                                right: !0,
                                top: !0
                            }, a.a.createElement(p.k, {
                                accessibilityLabel: i.a._("Clear", "Clear password texfield"),
                                icon: "cancel",
                                onClick: n.clearPassword,
                                size: "sm"
                            }))
                        })), n
                    }
                    var n, r, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && b(e, t)
                    }(t, e), n = t, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.validate(this.props.password, !1)
                        }
                    }, {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function(e) {
                            e.error && !this.props.error && this.setState({
                                error: e.error
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.disabled,
                                n = e.getFocusFieldRef,
                                r = e.handlePasswordReset,
                                o = e.password,
                                c = e.inMwebUnauthSessionPLPBannerExp,
                                u = e.showClearToggle,
                                d = e.showPasswordToggle,
                                m = this.state,
                                f = m.error,
                                g = m.showPassword,
                                h = i.a._("Looks like you're already on Pinterest", "Heading indicating that the user is already registered on Pinterest");
                            return a.a.createElement(p.b, {
                                marginTop: 3
                            }, a.a.createElement(p.b, {
                                marginBottom: 2
                            }, a.a.createElement(l.a, {
                                minHeight: 60
                            }, a.a.createElement(p.i, {
                                size: c ? "xs" : "sm",
                                overflow: "normal"
                            }, h))), a.a.createElement(p.b, {
                                alignItems: "center",
                                display: "flex",
                                marginTop: 2
                            }, a.a.createElement(p.b, {
                                flex: "grow",
                                position: "relative"
                            }, a.a.createElement(p.E, {
                                id: "password",
                                disabled: t,
                                errorMessage: f,
                                onChange: this.onChange,
                                placeholder: i.a._("Enter your password", "Enter password field label"),
                                ref: n,
                                type: g ? "text" : "password",
                                value: o
                            }), d && this.renderPasswordToggle(), u && this.renderClearToggle())), a.a.createElement(p.b, {
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
                            }, i.a._("Forgot your password?", "Link to the password reset page")))))
                        }
                    }]) && g(n.prototype, r), o && g(n, o), t
                }(r.PureComponent),
                _ = n("noU3"),
                v = n("t5Ir"),
                S = n("UjEz"),
                O = n("qjYu"),
                P = n("yeqU"),
                T = n("fs0a"),
                A = n("tCfZ"),
                j = n("RNo4"),
                C = function(e) {
                    var t = e.allowSkip,
                        n = e.handleSkipStep,
                        r = e.inEmailSeparateExp,
                        o = e.location,
                        l = e.nextButtonText,
                        u = e.nextDisabled,
                        m = e.nextPageForLogin,
                        f = e.showBusinessSignup,
                        g = e.showLoginLink,
                        h = e.showTextDivider,
                        b = e.viewParameter,
                        y = Object(j.j)(o.search).next || o.state && o.state.next;
                    return a.a.createElement(p.b, null, a.a.createElement(p.c, {
                        color: "red",
                        disabled: u,
                        onClick: function() {
                            Object(d.g)({
                                element: 96,
                                view_type: 10,
                                view_parameter: b
                            })
                        },
                        text: l || i.a._("Next", "Go to next step account signup"),
                        type: "submit"
                    }), g && a.a.createElement(p.b, null, a.a.createElement(p.b, {
                        marginTop: 2
                    }, r && a.a.createElement(p.b, {
                        margin: 4,
                        display: "flex",
                        justifyContent: "center"
                    }, a.a.createElement(p.C, {
                        bold: !0,
                        size: "xs"
                    }, i.a._("OR", "Separator for email login button and social login button"))), a.a.createElement(T.a, {
                        facebookText: i.a._("Continue with Facebook", "Login page button"),
                        googleText: i.a._("Continue with Google", "Login page button"),
                        inEmailSeparateExp: r,
                        next: y,
                        showTextDivider: h,
                        viewParameter: b
                    })), a.a.createElement(p.b, {
                        justifyContent: "center",
                        direction: "row",
                        display: "flex",
                        marginTop: 5
                    }, a.a.createElement(p.b, {
                        marginEnd: 1
                    }, a.a.createElement(p.C, {
                        inline: !0,
                        smSize: "xs",
                        mdSize: "sm",
                        lgSize: "md"
                    }, i.a._("Already a member?", "Prompt for logging in"))), a.a.createElement(s.a, {
                        inline: !0,
                        to: {
                            pathname: "/login/",
                            state: {
                                next: m
                            }
                        },
                        pressState: "background"
                    }, a.a.createElement(p.C, {
                        bold: !0,
                        smSize: "xs",
                        mdSize: "sm",
                        lgSize: "md"
                    }, i.a._("Log in", "Link for logging up"))))), f && a.a.createElement(P.a, null), t && a.a.createElement(p.b, {
                        "data-test-id": "skip-signup-step-button",
                        marginTop: 4
                    }, a.a.createElement(c.a, {
                        onTouch: n,
                        pressState: "background"
                    }, a.a.createElement(p.C, {
                        size: "sm",
                        align: "center"
                    }, i.a._("Skip this step", "Sign up page flow")))), a.a.createElement(p.b, {
                        marginTop: 4
                    }, a.a.createElement(A.a, null)))
                },
                k = n("k1Bv");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function I(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function L(e) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function R(e, t) {
                return (R = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function N(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var B = function(e) {
                    function t() {
                        var e, n, r, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
                        return r = this, a = (e = L(t)).call.apply(e, [this].concat(s)), n = !a || "object" !== x(a) && "function" != typeof a ? N(r) : a, D(N(N(n)), "state", {
                            ageError: "",
                            nameError: "",
                            showNameInput: !1
                        }), D(N(N(n)), "onAgeBlur", (function(e) {
                            var t = e.value;
                            n.validate(t, n.props.name, !0)
                        })), D(N(N(n)), "onNameBlur", (function(e) {
                            var t = e.value;
                            n.validate(n.props.age, t, !0)
                        })), D(N(N(n)), "onAgeChange", (function(e) {
                            var t = e.value;
                            n.props.handleChangeAge(t).then(n.validate(t, n.props.name, !1))
                        })), D(N(N(n)), "onNameChange", (function(e) {
                            var t = e.value;
                            n.props.handleChangeName(t).then(n.validate(n.props.age, t, !1))
                        })), D(N(N(n)), "toggleNameInput", (function() {
                            n.setState((function(e) {
                                var t = e.nameError,
                                    n = e.showNameInput;
                                return {
                                    showNameInput: "" !== t || !n
                                }
                            })), Object(d.g)({
                                element: 136,
                                view_type: 10,
                                view_parameter: 3223
                            })
                        })), D(N(N(n)), "validate", (function(e, t, r) {
                            var a = Object(m.j)(e, n.props.isMandatoryAge ? [n.numberValidator, n.requiredAgeValidator] : [n.numberValidator]),
                                o = Object(m.j)(t, [n.lengthValidator, n.requiredValidator]);
                            n.setState({
                                ageError: r ? a : "",
                                nameError: r ? o : ""
                            });
                            var i = a === o ? "" : "error";
                            n.props.setValidState(i)
                        })), D(N(N(n)), "lengthValidator", Object(m.f)({
                            max: 30,
                            maxErrorString: i.a._("Hmm, that's a few characters too long. Try a nickname instead?", "Name exceeds 30 character maximum error")
                        })), D(N(N(n)), "numberValidator", Object(m.e)({
                            message: i.a._("Not a number.", "Number field validation error message")
                        })), D(N(N(n)), "requiredAgeValidator", Object(m.h)({
                            message: i.a._("You missed a spot! Let us know how old you are.", "Required age validation error")
                        })), D(N(N(n)), "requiredValidator", Object(m.h)({
                            message: i.a._("Required", "Required field validation error message")
                        })), n
                    }
                    var n, o, s;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && R(e, t)
                    }(t, e), n = t, (o = [{
                        key: "componentDidMount",
                        value: function() {
                            this.validate(this.props.age, this.props.name, !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.age,
                                n = e.disabled,
                                o = e.getFocusFieldRef,
                                s = e.name,
                                c = e.inMwebUnauthSessionPLPBannerExp,
                                u = this.state,
                                d = u.ageError,
                                m = u.nameError,
                                f = u.showNameInput,
                                g = i.a._("How old are you,", "Header prompting user for age on signup, followed by a textfield for user to input name"),
                                h = i.a.interpolateNamedTemplate(i.a._("How old are you, {{ name }}?", "Header prompting user for age on signup, followed by user name"), {
                                    name: s
                                });
                            return a.a.createElement(r.Fragment, null, a.a.createElement(p.b, {
                                display: f ? "block" : "flex",
                                alignItems: "end",
                                marginTop: 3
                            }, a.a.createElement(p.m, {
                                htmlFor: "name"
                            }, a.a.createElement(l.a, {
                                minHeight: 60
                            }, a.a.createElement(p.i, {
                                size: c ? "xs" : "sm"
                            }, f || 0 === s.length ? g : h))), a.a.createElement(p.b, {
                                display: "flex",
                                alignItems: "baseline"
                            }, f && a.a.createElement(p.b, {
                                marginTop: 1,
                                marginBottom: 1
                            }, a.a.createElement(p.E, {
                                id: "name",
                                disabled: n,
                                errorMessage: m,
                                onBlur: this.onNameBlur,
                                onChange: this.onNameChange,
                                placeholder: i.a._("Full name", "Textfield placeholder"),
                                ref: o,
                                type: "text",
                                value: s
                            })), a.a.createElement(p.k, {
                                accessibilityLabel: "editName",
                                bgColor: "transparent",
                                icon: f ? "check" : "edit",
                                onClick: this.toggleNameInput,
                                size: "sm"
                            }))), a.a.createElement(p.b, {
                                paddingY: 1,
                                marginBottom: 4
                            }, a.a.createElement(p.C, {
                                size: "md"
                            }, i.a._("This helps personalize ideas for your home feed", "Subheader on NameAgeStep during signup, explaining why we are asking user's age"))), a.a.createElement(p.b, {
                                marginTop: 2,
                                "data-test-id": "signup-age-field"
                            }, a.a.createElement(p.E, {
                                id: "age",
                                disabled: n,
                                errorMessage: d,
                                onBlur: this.onAgeBlur,
                                onChange: this.onAgeChange,
                                placeholder: i.a._("Age", "Textfield placeholder"),
                                ref: o,
                                type: "number",
                                value: t
                            })))
                        }
                    }]) && I(n.prototype, o), s && I(n, s), t
                }(r.PureComponent),
                F = n("+8U0");

            function U(e) {
                return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function V(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function M(e) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function q(e, t) {
                return (q = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function G(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function W(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var H = function(e) {
                    function t() {
                        var e, n, r, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
                        return r = this, a = (e = M(t)).call.apply(e, [this].concat(s)), n = !a || "object" !== U(a) && "function" != typeof a ? G(r) : a, W(G(G(n)), "state", {
                            error: ""
                        }), W(G(G(n)), "onBlur", (function(e) {
                            var t = e.value;
                            n.validate(t, !0)
                        })), W(G(G(n)), "onChange", (function(e) {
                            var t = e.value;
                            n.props.handleChangeName(t).then(n.validate(t, !1))
                        })), W(G(G(n)), "validate", (function(e, t) {
                            var r = Object(m.j)(e, [n.requiredValidator]);
                            n.setState({
                                error: t ? r : ""
                            }), n.props.setValidState(r)
                        })), W(G(G(n)), "requiredValidator", Object(m.h)({
                            message: i.a._("Required", "Required field validation error message")
                        })), n
                    }
                    var n, r, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && q(e, t)
                    }(t, e), n = t, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.validate(this.props.name, !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isBusiness,
                                n = e.disabled,
                                r = e.getFocusFieldRef,
                                o = e.name,
                                s = this.state.error;
                            return a.a.createElement(p.b, {
                                marginTop: 3
                            }, a.a.createElement(p.m, {
                                htmlFor: "name"
                            }, a.a.createElement(p.i, {
                                size: "xs",
                                overflow: "normal"
                            }, t ? i.a._("What's your business name?", "Sign up page field label") : i.a._("What's your name?", "Sign up page field label"))), a.a.createElement(p.b, {
                                marginTop: 2
                            }, a.a.createElement(p.E, {
                                id: "name",
                                disabled: n,
                                errorMessage: s,
                                onBlur: this.onBlur,
                                onChange: this.onChange,
                                placeholder: t ? i.a._("Business name", "Textfield placeholder") : i.a._("Full name", "Textfield placeholder"),
                                ref: r,
                                type: "text",
                                value: o
                            })))
                        }
                    }]) && V(n.prototype, r), o && V(n, o), t
                }(r.PureComponent),
                z = n("sZql"),
                K = n("Bb4+"),
                Y = n("o+5w"),
                Q = n("pGrQ");

            function Z(e) {
                return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function J(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function X(e) {
                return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function $(e, t) {
                return ($ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ee(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function te(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var ne = function(e) {
                    function t() {
                        var e, n, r, o;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var s = arguments.length, l = new Array(s), f = 0; f < s; f++) l[f] = arguments[f];
                        return r = this, o = (e = X(t)).call.apply(e, [this].concat(l)), n = !o || "object" !== Z(o) && "function" != typeof o ? ee(r) : o, te(ee(ee(n)), "state", {
                            error: "",
                            showPassword: n.props.showPasswordFirst
                        }), te(ee(ee(n)), "onBlur", (function(e) {
                            var t = e.value;
                            n.validate(t, !0)
                        })), te(ee(ee(n)), "onChange", (function(e) {
                            var t = e.value;
                            n.props.handleChangePassword(t).then(n.validate(t, !1))
                        })), te(ee(ee(n)), "validate", (function(e, t) {
                            var r = Object(m.j)(e, [n.passwordValidator, n.asciiValidator]);
                            n.setState({
                                error: t ? r : ""
                            }), n.props.setValidState(r)
                        })), te(ee(ee(n)), "asciiValidator", Object(m.b)({
                            message: i.a._("Oh @*&#! No zany characters allowed.", "Only ASCII characters are allowed for password")
                        })), te(ee(ee(n)), "passwordValidator", Object(Q.a)({
                            blackPassStr: i.a._("Please try using a stronger password", "Blacklisted password validation error"),
                            samePasswordStr: i.a._("Password and username can't match", "Matching password validation error"),
                            shortPassStr: i.a._("Oops! Your password needs 6+ characters.", "Too short password validation error")
                        })), te(ee(ee(n)), "togglePassword", (function(e) {
                            var t = n.state.showPassword;
                            Object(d.d)({
                                event_type: t ? 107 : 106,
                                view_parameter: 3147,
                                view_type: 10,
                                element: 129
                            }), n.setState({
                                showPassword: !t
                            })
                        })), te(ee(ee(n)), "renderPasswordToggle", (function() {
                            var e = n.state.showPassword;
                            return a.a.createElement(p.b, {
                                position: "absolute",
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        top: 10,
                                        right: 12
                                    }
                                }
                            }, a.a.createElement(c.a, {
                                onTouch: n.togglePassword,
                                shape: "circle",
                                inline: !0,
                                pressState: "none"
                            }, e ? a.a.createElement(p.j, {
                                icon: "eye",
                                color: "gray",
                                inline: !0,
                                accessibilityLabel: i.a._("Show password", "Accessibility label for button that toggles showing the password")
                            }) : a.a.createElement(p.j, {
                                dangerouslySetSvgPath: {
                                    __path: u.a
                                },
                                color: "gray",
                                inline: !0,
                                accessibilityLabel: i.a._("Hide password", "Accessibility label for button that toggles hiding the password")
                            })))
                        })), te(ee(ee(n)), "clearPassword", (function() {
                            Object(d.d)({
                                view_parameter: 3207,
                                view_type: 10,
                                element: 73
                            }), n.props.handleChangePassword("").then(n.validate("", !1))
                        })), te(ee(ee(n)), "renderClearToggle", (function() {
                            return a.a.createElement(p.b, {
                                padding: 1,
                                position: "absolute",
                                right: !0,
                                top: !0
                            }, a.a.createElement(p.k, {
                                accessibilityLabel: i.a._("Clear", "Clear password texfield"),
                                icon: "cancel",
                                onClick: n.clearPassword,
                                size: "sm"
                            }))
                        })), n
                    }
                    var n, r, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && $(e, t)
                    }(t, e), n = t, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.validate(this.props.password, !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.disabled,
                                n = e.getFocusFieldRef,
                                r = e.password,
                                o = e.inMwebUnauthSessionPLPBannerExp,
                                s = e.showClearToggle,
                                c = e.showPasswordToggle,
                                u = this.state,
                                d = u.error,
                                m = u.showPassword;
                            return a.a.createElement(p.b, {
                                marginTop: 3
                            }, a.a.createElement(p.m, {
                                htmlFor: "password"
                            }, a.a.createElement(p.b, {
                                marginBottom: o ? 3 : 10
                            }, a.a.createElement(l.a, {
                                minHeight: 60
                            }, a.a.createElement(p.i, {
                                size: o ? "xs" : "sm",
                                overflow: "normal"
                            }, i.a._("Create a password", "Sign up page field label"))))), a.a.createElement(p.b, {
                                marginTop: 2,
                                position: "relative"
                            }, a.a.createElement(p.E, {
                                id: "password",
                                disabled: t,
                                errorMessage: d,
                                placeholder: i.a._("Password with 6 or more characters", "Placeholder text on the password input field on the mobile Password step page"),
                                ref: n,
                                onBlur: this.onBlur,
                                onChange: this.onChange,
                                type: m ? "text" : "password",
                                value: r
                            }), c && this.renderPasswordToggle(), s && this.renderClearToggle()))
                        }
                    }]) && J(n.prototype, r), o && J(n, o), t
                }(r.PureComponent),
                re = n("+zvl"),
                ae = n("eOdZ"),
                oe = n("4Tgq"),
                ie = n("B/oJ"),
                se = n("6adH"),
                le = n("QtD7"),
                ce = n("351Y"),
                ue = n("fArA"),
                de = n("Ep0g"),
                pe = n("/brd"),
                me = n("MFNJ"),
                fe = n("SMdm"),
                ge = n("TXO6"),
                he = n("Q5BC"),
                be = n("VL22"),
                ye = n("ulr2"),
                we = n("5SBu"),
                Ee = n("vKjI"),
                _e = n("PmFr");

            function ve(e) {
                return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Se(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (l) {
                        a = !0, o = l
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        ke(e, t, n[t])
                    }))
                }
                return e
            }

            function Pe(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function Te(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Ae(e) {
                return (Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function je(e, t) {
                return (je = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Ce(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ke(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "SignupSteps", (function() {
                return xe
            })), n.d(t, "DEFAULT_STEPS", (function() {
                return Ie
            }));
            var xe = {
                    EMAIL_STEP: 1,
                    PASSWORD_STEP: 2,
                    NAME_STEP: 3,
                    NAME_AGE_STEP: 4,
                    ALREADY_HAS_PASSWORD_STEP: 5
                },
                Ie = [xe.EMAIL_STEP, xe.PASSWORD_STEP, xe.NAME_AGE_STEP],
                Le = [xe.EMAIL_STEP, xe.PASSWORD_STEP, xe.NAME_STEP],
                Re = new ce.a,
                Ne = function(e) {
                    function t(e) {
                        var n, r, a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), r = this, a = Ae(t).call(this, e), n = !a || "object" !== ve(a) && "function" != typeof a ? Ce(r) : a, ke(Ce(Ce(n)), "getStepFromMatchParams", (function(e) {
                            return parseInt(e.match.params.step, 10) || 0
                        })), ke(Ce(Ce(n)), "setIsExistingUser", (function(e, t) {
                            e ? n.setState({
                                isExistingUser: e,
                                steps: [xe.EMAIL_STEP, xe.ALREADY_HAS_PASSWORD_STEP]
                            }, t) : n.setState({
                                isExistingUser: e,
                                steps: n.props.isBusiness ? Le : Ie
                            }, t)
                        })), ke(Ce(Ce(n)), "setValidState", (function(e) {
                            n.setState({
                                isValid: !e
                            })
                        })), ke(Ce(Ce(n)), "getCurrentActionName", (function() {
                            switch (n.state.stepToRender) {
                                case xe.EMAIL_STEP:
                                    return "email";
                                case xe.PASSWORD_STEP:
                                case xe.ALREADY_HAS_PASSWORD_STEP:
                                    return "password";
                                case xe.NAME_STEP:
                                    return "name";
                                case xe.NAME_AGE_STEP:
                                    return "name_age";
                                default:
                                    return "undefined"
                            }
                        })), ke(Ce(Ce(n)), "getNextButtonText", (function() {
                            var e = n.state,
                                t = e.steps,
                                r = e.stepToRender;
                            return r === xe.ALREADY_HAS_PASSWORD_STEP ? i.a._("Log in", "Button to login for existing user") : t[t.length - 1] === r ? i.a._("Done", "Go to next step account signup") : null
                        })), ke(Ce(Ce(n)), "getViewParameterType", (function(e) {
                            switch (e) {
                                case xe.EMAIL_STEP:
                                    return 3146;
                                case xe.PASSWORD_STEP:
                                    return 3147;
                                case xe.NAME_STEP:
                                    return 3148;
                                case xe.ALREADY_HAS_PASSWORD_STEP:
                                    return 3207;
                                case xe.NAME_AGE_STEP:
                                    return 3223;
                                default:
                                    return
                            }
                        })), ke(Ce(Ce(n)), "navigateToStep", (function(e) {
                            n.setState({
                                stepToRender: n.state.steps[e - 1],
                                canEditCurrentTextField: !0
                            }, (function() {
                                var t = n.state,
                                    r = (t.passwordValidationError, Pe(t, ["passwordValidationError"])),
                                    a = n.props.isBusiness ? "/business/signup/step".concat(e, "/") : "/signup/step".concat(e, "/");
                                n.props.history.push({
                                    pathname: a,
                                    state: Oe({}, n.props.location.state, r)
                                })
                            }))
                        })), ke(Ce(Ce(n)), "nextSignupStep", (function() {
                            var e = n.state,
                                t = e.steps,
                                r = e.stepToRender,
                                a = n.getStepFromMatchParams(n.props);
                            if (r === xe.EMAIL_STEP) return n.props.validateEmailExists(n.state.email).then((function(e) {
                                n.setState({
                                    isLoading: !1
                                }), !0 === e.resource_response.data ? n.setIsExistingUser(!0, (function() {
                                    return n.navigateToStep(a + 1)
                                })) : (n.navigateToStep(a + 1), n.setState({
                                    fullName: n.props.isBusiness ? "" : Object(F.a)(n.state.email)
                                }))
                            })), void n.setState({
                                isLoading: !0
                            });
                            r !== xe.ALREADY_HAS_PASSWORD_STEP ? r === t[t.length - 1] ? n.registerUser() : n.navigateToStep(a + 1) : n.loginUser()
                        })), ke(Ce(Ce(n)), "handleChangeEmail", (function(e) {
                            return new Promise((function(t) {
                                return n.setState({
                                    email: e
                                }, t)
                            }))
                        })), ke(Ce(Ce(n)), "handleChangePassword", (function(e) {
                            return new Promise((function(t) {
                                return n.setState({
                                    password: e
                                }, t)
                            }))
                        })), ke(Ce(Ce(n)), "handleChangeFullName", (function(e) {
                            return new Promise((function(t) {
                                return n.setState({
                                    fullName: e
                                }, t)
                            }))
                        })), ke(Ce(Ce(n)), "handleChangeAge", (function(e) {
                            return new Promise((function(t) {
                                return n.setState({
                                    age: e
                                }, t)
                            }))
                        })), ke(Ce(Ce(n)), "loginUser", (function() {
                            var e = n.props,
                                t = e.history,
                                r = e.isAuthenticated,
                                a = e.isLimitedLoginUser,
                                o = e.location,
                                i = e.login,
                                s = n.state,
                                l = s.email,
                                c = s.password,
                                u = o.state ? o.state.next : "";
                            Object(d.d)({
                                event_type: 7534,
                                view_type: 10,
                                view_parameter: 3203,
                                aux_data: Oe({}, r ? {
                                    login_state: a ? 2 : 1
                                } : {}, {
                                    signup_login_method: 1
                                })
                            }), i({
                                username_or_email: l,
                                password: c
                            }, t, u).then((function() {
                                Object(d.d)({
                                    event_type: 7536,
                                    view_type: 10,
                                    view_parameter: 3203,
                                    aux_data: Oe({}, r ? {
                                        login_state: a ? 2 : 1
                                    } : {}, {
                                        signup_login_method: 1
                                    })
                                })
                            })).catch((function(e) {
                                Object(d.d)({
                                    event_type: 7535,
                                    view_type: 10,
                                    view_parameter: 3203,
                                    aux_data: Oe({}, r ? {
                                        login_state: a ? 2 : 1
                                    } : {}, {
                                        signup_login_method: 1
                                    })
                                }), n.setState({
                                    isLoading: !1,
                                    passwordValidationError: e.message,
                                    canEditCurrentTextField: !0
                                })
                            })), n.setState({
                                isLoading: !0,
                                passwordValidationError: ""
                            })
                        })), ke(Ce(Ce(n)), "registerUser", (function() {
                            var e, t, r, a = n.state,
                                o = a.age,
                                s = a.email,
                                l = a.fullName,
                                c = a.password,
                                u = a.steps,
                                p = n.props,
                                m = p.isAuthenticated,
                                f = p.isLimitedLoginUser,
                                g = p.isBusiness,
                                h = p.register,
                                b = p.showToast,
                                y = p.setNumSignupSteps;
                            if (g) r = l;
                            else {
                                var w = Se(l.trim().split(" "), 2);
                                e = w[0], t = w[1]
                            }
                            Object(d.d)({
                                event_type: 7537,
                                view_type: 10,
                                view_parameter: 3203,
                                aux_data: Oe({}, m ? {
                                    login_state: f ? 2 : 1
                                } : {}, {
                                    signup_login_method: 1
                                })
                            }), y(u.length + 1), h({
                                business_name: r,
                                age: o,
                                email: s,
                                first_name: e,
                                last_name: t,
                                password: c,
                                has_ads_credits: Re.isEligible()
                            }).then((function() {
                                Object(d.d)({
                                    event_type: 7487,
                                    view_type: 10,
                                    view_parameter: 3203,
                                    aux_data: Oe({}, m ? {
                                        login_state: f ? 2 : 1
                                    } : {}, {
                                        signup_login_method: 1
                                    })
                                }), g && (_.a.reportFacebookConversion(v.a.FACEBOOK_ADVERTISER_ID, "CompleteRegistration", {
                                    content_name: "/business/create"
                                }), _.a.reportPinterestConversion("track", "lead", {
                                    lead_type: "Self-serve"
                                }), _.a.reportGoogleConversion(v.a.GOOGLE_ADWORDS_ID, v.a.GOOGLE_ADWORDS_LABEL_BUSINESS_CREATE), _.a.reportLinkedInConversion(v.a.LINKEDIN_PARTNER_ID, v.a.LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT)), n._shouldShowFirstAdUpsellPage() ? n.props.history.push("/business/install_app") : n.props.history.push("/")
                            })).catch((function(e) {
                                n.setState({
                                    isLoading: !1,
                                    canEditCurrentTextField: !0
                                }), e.apiErrorCode === Ee.a ? b({
                                    isError: !0,
                                    text: i.a._("Uh oh... it looks like you’re not old enough just yet.", "Underage error during signup")
                                }) : b({
                                    isError: !0,
                                    text: e.message || i.a._("Oops! Something went wrong… Tap Done to try again.", "Error during signup")
                                }), Object(d.d)({
                                    event_type: 7488,
                                    view_type: 10,
                                    view_parameter: 3203,
                                    aux_data: Oe({}, m ? {
                                        login_state: f ? 2 : 1
                                    } : {}, {
                                        signup_login_method: 1
                                    })
                                })
                            })), n.setState({
                                isLoading: !0
                            })
                        })), ke(Ce(Ce(n)), "handleSkipStep", (function() {
                            Object(oe.a)("mweb.signup.step.".concat(n.getCurrentActionName(), ".skip")), n.nextSignupStep()
                        })), ke(Ce(Ce(n)), "handlePasswordReset", (function() {
                            Object(d.g)({
                                view_type: 10,
                                view_parameter: n.getViewParameterType(n.state.stepToRender),
                                element: 10881
                            });
                            var e = n.props.history,
                                t = n.state.email;
                            ae.a.create("UserResetPasswordResource", {
                                username_or_email: t
                            }).callCreate().then((function(r) {
                                e.replace({
                                    pathname: "/password/reset/sent/",
                                    state: {
                                        destinationEmail: t
                                    }
                                }), n.setState({
                                    isLoading: !1
                                })
                            })), n.setState({
                                isLoading: !0
                            })
                        })), ke(Ce(Ce(n)), "nextSignupStepWithValidation", (function(e) {
                            e && e.preventDefault(), n.setState({
                                canEditCurrentTextField: !1
                            }, (function() {
                                n.validate() ? (Object(oe.a)("mweb.signup.step.".concat(n.getCurrentActionName(), ".completed")), n.nextSignupStep()) : (Object(oe.a)("mweb.signup.step.".concat(n.getCurrentActionName(), ".error")), n.setState({
                                    canEditCurrentTextField: !0
                                }))
                            }))
                        })), ke(Ce(Ce(n)), "trackStepViewed", (function() {
                            Object(oe.a)("mweb.signup.step.".concat(n.getCurrentActionName(), ".viewed"))
                        })), ke(Ce(Ce(n)), "validate", (function() {
                            var e = n.state,
                                t = e.age,
                                r = e.email,
                                a = e.fullName,
                                o = e.password;
                            switch (e.stepToRender) {
                                case xe.EMAIL_STEP:
                                    return !Object(m.j)(r, [n.requiredValidator, n.emailValidator]);
                                case xe.PASSWORD_STEP:
                                    return !Object(m.j)(o, [n.passwordValidator]);
                                case xe.ALREADY_HAS_PASSWORD_STEP:
                                    return !Object(m.j)(o, [n.requiredValidator]);
                                case xe.NAME_STEP:
                                    return !Object(m.j)(a, [n.requiredValidator]);
                                case xe.NAME_AGE_STEP:
                                    return !Object(m.j)(t, [n.numberValidator]) && !Object(m.j)(a, [n.requiredValidator, n.lengthValidator]);
                                default:
                                    return !0
                            }
                        })), ke(Ce(Ce(n)), "emailValidator", Object(m.c)({
                            message: i.a._("Not a valid email.", "Email field validation error message")
                        })), ke(Ce(Ce(n)), "lengthValidator", Object(m.f)({
                            max: 30,
                            maxErrorString: i.a._("Hmm, that's a few characters too long. Try a nickname instead?", "Name exceeds 30 character maximum error")
                        })), ke(Ce(Ce(n)), "numberValidator", Object(m.e)({
                            message: i.a._("Not a number.", "Number field validation error message")
                        })), ke(Ce(Ce(n)), "passwordValidator", Object(Q.a)({
                            blackPassStr: i.a._("Please try using a stronger password", "Blacklisted password validation error"),
                            samePasswordStr: i.a._("Password and username can't match", "Matching password validation error"),
                            shortPassStr: i.a._("Oops! Your password needs 6+ characters.", "Too short password validation error")
                        })), ke(Ce(Ce(n)), "requiredValidator", Object(m.h)({
                            message: i.a._("Required", "Required field validation error message")
                        })), ke(Ce(Ce(n)), "_shouldShowFirstAdUpsellPage", (function() {
                            var e = n.props,
                                t = e.country,
                                r = e.isBusiness,
                                a = e.inBusinessAppUpsellExperiment;
                            if (r) {
                                if (Re.isEligible()) return Re.claim(), !0;
                                if (Object(de.a)(t) && a()) return !0
                            }
                            return !1
                        }));
                        var o = e.isBusiness ? Le : Ie;
                        return n.state = {
                            age: "",
                            email: "",
                            fullName: "",
                            isExistingUser: !1,
                            isLoading: !1,
                            isValid: !1,
                            password: "",
                            showLoginButtons: !1,
                            steps: o,
                            stepToRender: xe.EMAIL_STEP,
                            isSignUpFromLoginError: !1,
                            isFromSignupEmailExistError: !1,
                            canEditCurrentTextField: !0
                        }, n
                    }
                    var n, r, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && je(e, t)
                    }(t, e), n = t, (r = [{
                        key: "UNSAFE_componentWillMount",
                        value: function() {
                            var e = this.props,
                                t = e.isBusiness,
                                n = e.location;
                            n.state && (n.state.isSignUpFromLoginError ? this.setState(Oe({
                                fullName: t ? "" : Object(F.a)(n.state.email),
                                steps: t ? [xe.NAME_STEP] : [xe.NAME_AGE_STEP],
                                stepToRender: t ? xe.NAME_STEP : xe.NAME_AGE_STEP,
                                isSignUpFromLoginError: !1
                            }, n.state)) : n.state.isFromSignupEmailExistError ? this.setState(Oe({
                                email: n.state.email,
                                steps: [xe.ALREADY_HAS_PASSWORD_STEP],
                                stepToRender: xe.ALREADY_HAS_PASSWORD_STEP,
                                isSignUpFromLoginError: !1
                            }, n.state)) : this.setState(Oe({}, n.state)))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.trackStepViewed()
                        }
                    }, {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function(e) {
                            var t = this.getStepFromMatchParams(e);
                            this.state.isExistingUser && e.location !== this.props.location && 2 !== t && this.setIsExistingUser(!1, void 0), this.setState({
                                stepToRender: this.state.steps[t - 1]
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            t.stepToRender !== this.state.stepToRender && this.trackStepViewed()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.isBusiness,
                                r = t.country,
                                o = t.history,
                                i = t.location,
                                s = this.getStepFromMatchParams(this.props);
                            if (isNaN(s) || s < 1 || s > 5) return o.replace("/"), null;
                            var l = this.state,
                                c = l.age,
                                u = l.canEditCurrentTextField,
                                d = l.email,
                                m = l.fullName,
                                f = l.isExistingUser,
                                g = l.isLoading,
                                h = l.isValid,
                                b = l.password,
                                y = l.passwordValidationError,
                                w = l.showLoginButtons,
                                _ = l.steps,
                                v = l.stepToRender,
                                P = _.length,
                                T = _e.a.includes(r),
                                A = Object(be.b)(r),
                                j = pe.b,
                                x = n ? Le.length : P + j,
                                I = (JSON.parse(Object(fe.a)(_e.h)) || [])[0] || {};
                            return a.a.createElement(Y.a, {
                                viewType: n ? 156 : 10,
                                viewParameter: this.getViewParameterType(v)
                            }, a.a.createElement(O.a, {
                                name: "mweb_emailstep_separate_options",
                                isEligible: !n && v === xe.EMAIL_STEP
                            }, (function(t) {
                                var r = t.anyEnabled;
                                return a.a.createElement(O.a, {
                                    name: "mweb_vertical_ori_vs_motion",
                                    activate: !1
                                }, (function(t) {
                                    var o = t.anyEnabled,
                                        l = t.group;
                                    return a.a.createElement(O.a, {
                                        name: "mweb_unauth_session_plp_banner",
                                        isEligible: Boolean(I.image)
                                    }, (function(t) {
                                        var P = t.anyEnabled;
                                        return a.a.createElement(K.b, {
                                            hasFixedHeader: !1,
                                            hasGutter: !P
                                        }, a.a.createElement(z.a, {
                                            animate: "enabled_animate" === l,
                                            currentIndex: s - 1,
                                            numSteps: x,
                                            isVertical: o,
                                            inPLPBannerExpt: P
                                        }, a.a.createElement(p.b, {
                                            "data-test-id": "signup-page-form",
                                            deprecatedMargin: {
                                                left: "auto",
                                                right: "auto"
                                            },
                                            display: "flex",
                                            maxWidth: 400
                                        }, a.a.createElement("form", {
                                            onSubmit: e.nextSignupStepWithValidation
                                        }, P && a.a.createElement(re.a, {
                                            pin: I
                                        }), a.a.createElement(p.b, {
                                            paddingX: P ? 4 : 0
                                        }, v === xe.EMAIL_STEP && a.a.createElement(S.a, {
                                            email: d,
                                            getFocusFieldRef: me.a,
                                            handleChangeEmail: e.handleChangeEmail,
                                            setValidState: e.setValidState,
                                            disabled: !u,
                                            inMwebUnauthSessionPLPBannerExp: P
                                        }), v === xe.PASSWORD_STEP && a.a.createElement(O.a, {
                                            name: "mweb_signup_visibility_clear_password_toggle"
                                        }, (function(t) {
                                            var n = t.group;
                                            return a.a.createElement(ne, {
                                                getFocusFieldRef: me.a,
                                                handleChangePassword: e.handleChangePassword,
                                                password: b,
                                                setValidState: e.setValidState,
                                                disabled: !u,
                                                inMwebUnauthSessionPLPBannerExp: P,
                                                showPasswordToggle: ["enabled_visibility", "enabled_visibility_show", "employees"].includes(n),
                                                showPasswordFirst: ["enabled_visibility_show", "employees"].includes(n),
                                                showClearToggle: "enabled_clear" === n
                                            })
                                        })), v === xe.ALREADY_HAS_PASSWORD_STEP && a.a.createElement(O.a, {
                                            name: "mweb_signup_existing_visibility_clear_password_toggle"
                                        }, (function(t) {
                                            var n = t.group;
                                            return a.a.createElement(E, {
                                                error: y,
                                                getFocusFieldRef: me.a,
                                                handleChangePassword: e.handleChangePassword,
                                                handlePasswordReset: e.handlePasswordReset,
                                                password: b,
                                                setValidState: e.setValidState,
                                                disabled: !u,
                                                inMwebUnauthSessionPLPBannerExp: P,
                                                showPasswordToggle: ["enabled_visibility", "enabled_visibility_show", "employees"].includes(n),
                                                showPasswordFirst: ["enabled_visibility_show", "employees"].includes(n),
                                                showClearToggle: "enabled_clear" === n
                                            })
                                        })), v === xe.NAME_STEP && a.a.createElement(H, {
                                            isBusiness: n,
                                            name: m,
                                            getFocusFieldRef: me.a,
                                            handleChangeName: e.handleChangeFullName,
                                            setValidState: e.setValidState,
                                            disabled: !u
                                        }), v === xe.NAME_AGE_STEP && a.a.createElement(B, {
                                            age: c,
                                            name: m,
                                            getFocusFieldRef: me.a,
                                            handleChangeAge: e.handleChangeAge,
                                            handleChangeName: e.handleChangeFullName,
                                            isMandatoryAge: A || T,
                                            setValidState: e.setValidState,
                                            disabled: !u,
                                            inMwebUnauthSessionPLPBannerExp: P
                                        }), a.a.createElement(p.b, {
                                            marginBottom: r ? 2 : 6
                                        }), a.a.createElement(C, {
                                            allowSkip: !1,
                                            handlePasswordReset: e.handlePasswordReset,
                                            handleSkipStep: e.handleSkipStep,
                                            inEmailSeparateExp: r,
                                            location: i,
                                            nextPageForLogin: i.state ? i.state.next : "",
                                            nextDisabled: !h,
                                            nextButtonText: e.getNextButtonText(),
                                            showBusinessSignup: !n && v === xe.EMAIL_STEP,
                                            showLoginLink: !n && (v === xe.EMAIL_STEP || w),
                                            showTextDivider: w,
                                            viewParameter: e.getViewParameterType(v)
                                        }))))), g && (v !== _[_.length - 1] || f ? a.a.createElement(k.a, null) : a.a.createElement(ie.a, {
                                            platform: "email"
                                        })))
                                    }))
                                }))
                            })))
                        }
                    }]) && Te(n.prototype, r), o && Te(n, o), t
                }(r.PureComponent);
            t.default = Object(ue.compose)(se.b, Object(o.connect)((function(e, t) {
                var n = e.session,
                    r = e.users,
                    a = void 0 === r ? {} : r;
                return {
                    country: n.country,
                    isBusiness: t.location.pathname.startsWith("/business/"),
                    isAuthenticated: n.isAuthenticated,
                    isLimitedLoginUser: Object(ge.b)(a[n.userId])
                }
            }), (function(e) {
                return {
                    login: function(t, n, r) {
                        return e(Object(he.b)(t, n, r))
                    },
                    register: function(t) {
                        return e(Object(Ee.b)(t))
                    },
                    validateEmailExists: function(t) {
                        return e(Object(we.n)(t))
                    },
                    setNumSignupSteps: function(t) {
                        return e(Object(ye.o)(t))
                    },
                    inBusinessAppUpsellExperiment: function() {
                        return ["enabled"].includes(e(Object(le.a)("mweb_smb_growth_nux_first_ad_upsell")))
                    }
                }
            })))(Ne)
        },
        noU3: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var o = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, a;
                return t = e, a = [{
                    key: "reportGoogleConversion",
                    value: function(t, n, r) {
                        void 0 !== window.gtag_report_conversion ? window.gtag_report_conversion(t, n, r) : e.queuedGoogleConversions.push({
                            id: t,
                            label: n,
                            url: r
                        })
                    }
                }, {
                    key: "reportFacebookConversion",
                    value: function(t, n, r) {
                        void 0 !== window.fbq ? r ? window.fbq("track", n, r) : window.fbq("track", n) : e.queuedFacebookConversions.push({
                            id: t,
                            event: n,
                            data: r
                        })
                    }
                }, {
                    key: "reportPinterestConversion",
                    value: function(t, n, r) {
                        void 0 !== window.pintrk ? r ? window.pintrk("track", n, r) : window.pintrk("track", n) : e.queuedPinterestConversions.push({
                            id: t,
                            event: n,
                            data: r
                        })
                    }
                }, {
                    key: "reportTwitterConversion",
                    value: function(t, n) {
                        void 0 !== window.twttr ? n ? window.twttr.conversion.trackPid(t, n) : window.twttr.conversion.trackPid(t) : e.queuedTwitterConversions.push({
                            id: t,
                            data: n
                        })
                    }
                }, {
                    key: "reportTheTradeDeskConversion",
                    value: function(e, t) {
                        var n = document.createElement("img");
                        n.setAttribute("height", "1"), n.setAttribute("width", "1"), n.style.borderStyle = "none", n.style.position = "absolute", n.setAttribute("src", "//insight.adsrvr.org/track/conv/?adv=".concat(e, "&ct=0:").concat(t, "&fmt=3")), document.body.insertBefore(n, document.body.lastChild)
                    }
                }, {
                    key: "reportLinkedInConversion",
                    value: function(e, t) {
                        var n = document.createElement("img");
                        n.setAttribute("width", "1"), n.setAttribute("height", "1"), n.setAttribute("src", "https://dc.ads.linkedin.com/collect/?pid=".concat(e) + "&conversionId=".concat(t, "&fmt=gif")), n.style.display = "none", document.body.insertBefore(n, document.body.lastChild)
                    }
                }, {
                    key: "reportDoubleClickConversion",
                    value: function(e, t, n) {
                        var r = 1e13 * Math.random(),
                            a = document.createElement("iframe");
                        a.setAttribute("width", "1"), a.setAttribute("height", "1"), a.setAttribute("frameborder", "0"), a.setAttribute("src", "https://".concat(e, ".fls.doubleclick.net/activityi;src=").concat(e, ";\n    type=").concat(t, ";cat=").concat(n, ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=").concat(r, "?")), a.style.display = "none", document.body.insertBefore(a, document.body.lastChild)
                    }
                }, {
                    key: "insertGoogleAdWordsTag",
                    value: function(t) {
                        var n = document.createElement("script");
                        n.setAttribute("async", ""), n.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-".concat(t)), n.onload = function() {
                            window.dataLayer = window.dataLayer || [], window.gtag = function(e, t, n) {
                                window.dataLayer.push(arguments)
                            }, window.gtag("js", new Date), window.gtag("config", "AW-" + t), window.gtag_report_conversion = function(e, t, n) {
                                return window.gtag("event", "conversion", {
                                    send_to: "AW-" + e + "/" + t,
                                    event_callback: function() {
                                        void 0 !== n && window.location.assign(n)
                                    }
                                }), !1
                            };
                            for (var n = e.queuedGoogleConversions, r = 0; r < n.length; r += 1) {
                                var a = n[r];
                                a.id === t && e.reportGoogleConversion(a.id, a.label, a.url)
                            }
                        }, document.body.insertBefore(n, document.body.firstChild)
                    }
                }, {
                    key: "insertFacebookPixelTag",
                    value: function(t) {
                        var n, r, a, o, i, s;
                        n = window, r = document, a = "script", n.fbq || (o = n.fbq = function() {
                            o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
                        }, n._fbq || (n._fbq = o), o.push = o, o.loaded = !0, o.version = "2.0", o.queue = [], (i = r.createElement(a)).async = !0, i.src = "//connect.facebook.net/en_US/fbevents.js", (s = r.getElementsByTagName(a)[0]).parentNode.insertBefore(i, s)), window.fbq("init", t), window.fbq("track", "PageView");
                        for (var l = e.queuedFacebookConversions, c = 0; c < l.length; c += 1) {
                            var u = l[c];
                            u.id === t && e.reportFacebookConversion(t, u.event, u.data)
                        }
                    }
                }, {
                    key: "insertTwitterUniversalTag",
                    value: function(e) {
                        var t, n, r, a, o, i;
                        t = window, n = document, r = "script", t.twq || ((a = t.twq = function() {
                            a.exe ? a.exe.apply(a, arguments) : a.queue.push(arguments)
                        }).version = "1.1", a.queue = [], (o = n.createElement(r)).async = !0, o.src = "//static.ads-twitter.com/uwt.js", (i = n.getElementsByTagName(r)[0]).parentNode.insertBefore(o, i)), window.twq("init", e), window.twq("track", "PageView")
                    }
                }, {
                    key: "insertLinkedInInsightTag",
                    value: function(e) {
                        window._linkedin_data_partner_id = e;
                        var t = document.createElement("script");
                        t.setAttribute("src", "//snap.licdn.com/li.lms-analytics/insight.min.js"), document.body.insertBefore(t, document.body.firstChild)
                    }
                }, {
                    key: "insertPinterestTag",
                    value: function(t) {
                        ! function(e) {
                            if (!window.pintrk) {
                                window.pintrk = function() {
                                    window.pintrk.queue.push(Array.prototype.slice.call(arguments))
                                };
                                var t = window.pintrk;
                                t.queue = [], t.version = "3.0";
                                var n = document.createElement("script");
                                n.async = !0, n.src = "https://s.pinimg.com/ct/core.js";
                                var r = document.getElementsByTagName("script")[0];
                                r.parentNode.insertBefore(n, r)
                            }
                        }(), window.pintrk("load", t), window.pintrk("page");
                        for (var n = e.queuedPinterestConversions, r = 0; r < n.length; r += 1) {
                            var a = n[r];
                            a.id === t && e.reportPinterestConversion(t, a.event, a.data)
                        }
                    }
                }], (n = null) && r(t.prototype, n), a && r(t, a), e
            }();
            a(o, "queuedGoogleConversions", []), a(o, "queuedFacebookConversions", []), a(o, "queuedPinterestConversions", []), a(o, "queuedTwitterConversions", []), t.a = o
        },
        sZql: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("PaNI"),
                i = n("n6mq");

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var f = "8px",
                g = "2px",
                h = {
                    backward: 0,
                    forward: "50%",
                    base: 0
                },
                b = {
                    backward: 0,
                    forward: "120px",
                    base: "40px"
                },
                y = function(e) {
                    function t() {
                        var e, n, c, d;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var h = arguments.length, b = new Array(h), y = 0; y < h; y++) b[y] = arguments[y];
                        return c = this, d = (e = u(t)).call.apply(e, [this].concat(b)), n = !d || "object" !== s(d) && "function" != typeof d ? p(c) : d, m(p(p(n)), "state", {
                            isAnimating: n.props.animate || !1,
                            direction: "forward"
                        }), m(p(p(n)), "runTransition", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "forward",
                                t = n.props,
                                r = t.animate,
                                a = t.isVertical;
                            r && a && (n.setState({
                                isAnimating: !0,
                                direction: e
                            }), window.setTimeout((function() {
                                n.setState({
                                    isAnimating: !1,
                                    direction: e
                                })
                            }), 100))
                        })), m(p(p(n)), "renderDots", (function() {
                            var e = n.props,
                                t = e.currentIndex,
                                o = e.numSteps;
                            return o > 1 && a.a.createElement(r.Fragment, null, l(Array(o).keys()).map((function(e) {
                                var n = e <= t ? "red" : "darkWash";
                                return a.a.createElement(i.b, {
                                    key: e,
                                    color: n,
                                    dangerouslySetInlineStyle: {
                                        __style: {
                                            margin: g
                                        }
                                    },
                                    "data-test-id": "nux-toc-dot",
                                    height: f,
                                    shape: "circle",
                                    width: f
                                })
                            })))
                        })), m(p(p(n)), "renderHorizontal", (function() {
                            var e = n.props,
                                t = e.inPLPBannerExpt,
                                r = e.isNux;
                            return a.a.createElement(i.b, {
                                alignItems: "center",
                                "data-test-id": "nux-toc-container",
                                display: "flex",
                                height: 36,
                                marginBottom: t ? 3 : 0
                            }, !r && a.a.createElement(o.a, {
                                icon: "arrow-back"
                            }), a.a.createElement(i.b, {
                                display: "flex",
                                flex: "grow",
                                justifyContent: "center",
                                marginEnd: r ? 0 : 9
                            }, n.renderDots()))
                        })), m(p(p(n)), "renderVertical", (function() {
                            var e = n.props.isNux;
                            return a.a.createElement(i.b, {
                                alignItems: "center",
                                "data-test-id": "nux-toc-container",
                                direction: "column",
                                display: "flex",
                                marginStart: 1
                            }, !e && a.a.createElement(o.a, {
                                icon: "arrow-up"
                            }), a.a.createElement(i.b, {
                                marginTop: e ? 9 : 0,
                                marginBottom: 6,
                                width: 36
                            }), n.renderDots())
                        })), n
                    }
                    var n, y, w;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && d(e, t)
                    }(t, e), n = t, (y = [{
                        key: "componentDidMount",
                        value: function() {
                            this.runTransition()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.currentIndex < this.props.currentIndex ? this.runTransition() : e.currentIndex > this.props.currentIndex && this.runTransition("backward")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.isVertical,
                                r = e.onlyRenderChildren,
                                o = this.state,
                                s = o.isAnimating,
                                l = o.direction,
                                c = n ? b : h,
                                u = n ? "margin-top .1s linear, opacity .1s ease-out" : "margin-left .1s linear, opacity .1s ease-out";
                            return r ? t : a.a.createElement(i.b, {
                                direction: n ? "row" : "column",
                                display: "flex",
                                width: "100%"
                            }, !n && this.renderHorizontal(), a.a.createElement(i.b, {
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        marginTop: s ? c[l] : c.base,
                                        opacity: s ? 0 : 1,
                                        transition: !s && u
                                    }
                                },
                                marginStart: n ? 2 : 0,
                                width: "100%"
                            }, t), n && this.renderVertical())
                        }
                    }]) && c(n.prototype, y), w && c(n, w), t
                }(r.PureComponent);
            t.a = y
        },
        t5Ir: function(e, t, n) {
            "use strict";
            t.a = {
                GOOGLE_ADWORDS_ID: 852082959,
                GOOGLE_ADWORDS_LABEL_PROPEL_QUALIFIED: "Mah3CPrv13YQj4KnlgM",
                GOOGLE_ADWORDS_LABEL_PROPEL_UNQUALIFIED: "_DJfCKzy13YQj4KnlgM",
                GOOGLE_ADWORDS_LABEL_BUSINESS_CREATE: "GGbCCM7p-nYQj4KnlgM",
                GOOGLE_ADWORDS_LABEL_BUSINESS_CONVERT: "SwBsCIz9k3cQj4KnlgM",
                GOOGLE_ADWORDS_LABEL_BUSINESS_ADVERTISER_INTENT: "kDf0COWL4okBEI-Cp5YD",
                DOUBLECLICK_TAG_ID: "8032161",
                DOUBLECLICK_EVENT_ID_PROPEL: "prope001",
                DOUBLECLICK_CATEGORY_ID_PROPEL_QUALIFIED: "pinte0",
                DOUBLECLICK_CATEGORY_ID_PROPEL_UNQUALIFIED: "pinte00",
                TRADEDESK_ADVERTISER_ID: "fc1uc9n",
                TRADEDESK_EVENT_ID_GENERAL_PAGEVIEW: "ogalyt3",
                TRADEDESK_CONVERSION_ID_PROPEL_QUALIFIED: "judrn76",
                TRADEDESK_CONVERSION_ID_PROPEL_UNQUALIFIED: "f0v4s5d",
                FACEBOOK_ADVERTISER_ID: "956400731086791",
                TWITTER_UNIVERSAL_TAG_ID: "nuzh8",
                TWITTER_CONVERSION_ID_PROPEL_QUALIFIED: "ny8zl",
                TWITTER_CONVERSION_ID_PROPEL_UNQUALIFIED: "nya0d",
                LINKEDIN_PARTNER_ID: "44352",
                LINKEDIN_CONVERSION_ID_PROPEL_QUALIFIED: "166217",
                LINKEDIN_CONVERSION_ID_PROPEL_UNQUALIFIED: "171754",
                LINKEDIN_CONVERSION_ID_SUBMISSION_EVENT: "529092",
                PINTEREST_TAG_ID: "2614461171935",
                SMB_PAID_PINTEREST_ID: "2613736141997"
            }
        },
        vH2r: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r),
                o = n("/MKj"),
                i = "gmail.com",
                s = "yahoo.com",
                l = "hotmail.com",
                c = {
                    AR: [i, l, "yahoo.com.ar"],
                    AU: [i, l, "bigpond.com"],
                    BR: [i, l, "yahoo.com.br"],
                    CA: [i, l, s],
                    DE: [i, "web.de", "gmx.de"],
                    ES: [i, l, "hotmail.es"],
                    FR: [i, "hotmail.fr", "orange.fr"],
                    GB: [i, "hotmail.co.uk", "hotmail.com"],
                    IN: [i, s, "rediffmail.com"],
                    IT: [i, "libero.it", "hotmail.it"],
                    JP: [i, "yahoo.co.jp", "ezweb.ne.jp"],
                    MX: [i, l, "outlook.com"],
                    US: [i, l, s],
                    DEFAULT: [i, l, s]
                };
            var u = n("sRIr"),
                d = n("n6mq");

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var y = {
                    border: "1px solid rgb(181, 181, 181)",
                    zIndex: 1
                },
                w = function(e) {
                    function t() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), g(this, h(t).apply(this, arguments))
                    }
                    var n, r, o;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && b(e, t)
                    }(t, e), n = t, (r = [{
                        key: "render",
                        value: function() {
                            var e, t = this,
                                n = this.props,
                                r = n.email,
                                o = n.emailFieldElement,
                                i = n.handleEmailSuggestionClick,
                                s = n.direction,
                                l = (e = this.props.country) && e.toUpperCase() in c ? c[e.toUpperCase()] : c.DEFAULT;
                            "top" === s && l.reverse();
                            var p = window.innerWidth - 32,
                                f = o;
                            f && (p = f.getBoundingClientRect().width);
                            var g = y;
                            if ("top" === s) {
                                var h = f ? f.offsetTop - 105 : 200;
                                g = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        })))), r.forEach((function(t) {
                                            m(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({}, y, {
                                    top: h
                                })
                            }
                            return a.a.createElement(d.b, {
                                color: "white",
                                dangerouslySetInlineStyle: {
                                    __style: g
                                },
                                direction: "column",
                                display: "flex",
                                position: "absolute",
                                top: "top" === s,
                                width: p
                            }, l.map((function(e) {
                                var n = t.props.showUsername ? r.concat(e) : e;
                                return a.a.createElement(d.b, {
                                    key: n
                                }, a.a.createElement("div", {
                                    role: "button",
                                    onMouseDown: function() {
                                        i(r.concat(e))
                                    },
                                    tabIndex: 0
                                }, a.a.createElement(u.a, {
                                    pressState: "background"
                                }, a.a.createElement(d.b, {
                                    paddingX: 3,
                                    paddingY: 2
                                }, a.a.createElement(d.C, null, n)))))
                            })))
                        }
                    }]) && f(n.prototype, r), o && f(n, o), t
                }(r.PureComponent);
            t.a = Object(o.connect)((function(e) {
                return {
                    country: e.session.country
                }
            }), null)(w)
        },
        y6dK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return _
            }));
            var r = n("q1tI"),
                a = n.n(r),
                o = n("i8i4"),
                i = n("/MKj"),
                s = n("vH2r"),
                l = n("af3U"),
                c = n("Lr1Z"),
                u = n("sRIr"),
                d = n("4Tgq"),
                p = n("QtD7"),
                m = n("AGnR"),
                f = n("n6mq");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function w(e) {
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
            var _ = "M11.969 17a4.983 4.983 0 0 1-2.047-.447l6.6-6.6c.281.626.447 1.316.447 2.047a5 5 0\n0 1-5 5m-5-5a5 5 0 0 1 5-5c.748 0 1.45.175 2.087.47l-6.617 6.617A4.944 4.944 0 0 1 6.969\n12m13.104-5.598l2.415-2.415a1.75 1.75 0 1 0-2.475-2.474l-3.014 3.013A12.646 12.646 0 0 0 12 3.5C6.455\n3.5 1.751 7.051 0 12a12.798 12.798 0 0 0 3.927 5.598l-2.414 2.415A1.748 1.748 0 0 0 2.75 23c.448 0 .896-.171\n1.238-.513l3.013-3.013A12.65 12.65 0 0 0 12 20.5c5.545 0 10.249-3.551 12-8.5a12.782 12.782 0 0 0-3.927-5.598\n",
                v = function(e) {
                    function t() {
                        var e, n, i, s;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var c = arguments.length, p = new Array(c), h = 0; h < c; h++) p[h] = arguments[h];
                        return i = this, s = (e = b(t)).call.apply(e, [this].concat(p)), n = !s || "object" !== g(s) && "function" != typeof s ? w(i) : s, E(w(w(n)), "state", {
                            emailFieldElement: null,
                            shouldShowEmailSuggestion: !1,
                            showPassword: !1
                        }), E(w(w(n)), "getEmailFieldElement", (function() {
                            var e = Object(o.findDOMNode)(n.emailTextFieldRef);
                            return e && e instanceof HTMLElement ? e.querySelector("input") : null
                        })), E(w(w(n)), "handleChangeEmail", (function(e) {
                            var t = e.value,
                                r = n.props.handleChangeEmail;
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
                            r && r({
                                value: t
                            })
                        })), E(w(w(n)), "handleEmailSuggestionClick", (function(e) {
                            Object(d.a)("mweb_unauth_email_suggestions.login_page.tap"), n.setState({
                                shouldShowEmailSuggestion: !1
                            }), n.handleChangeEmail({
                                value: e
                            })
                        })), E(w(w(n)), "validateEmailOnBlur", (function() {
                            var e = n.props.validateEmailOnBlur;
                            !n.state.shouldShowEmailSuggestion && e && e()
                        })), E(w(w(n)), "handlePasswordFieldFocus", (function() {
                            n.setState({
                                shouldShowEmailSuggestion: !1
                            })
                        })), E(w(w(n)), "togglePassword", (function(e) {
                            var t = n.state.showPassword;
                            Object(m.d)({
                                event_type: t ? 107 : 106,
                                view_type: 9,
                                element: 129
                            }), n.setState({
                                showPassword: !t
                            })
                        })), E(w(w(n)), "handleSignupClick", (function() {
                            var e = n.props,
                                t = e.activateOriMotionExp,
                                r = e.onSignUpClick;
                            t(), r && r()
                        })), E(w(w(n)), "renderErrorInlineMiddle", (function(e, t, r) {
                            return a.a.createElement(f.b, {
                                marginTop: 1
                            }, a.a.createElement(f.E, {
                                autoComplete: n.state.shouldShowEmailSuggestion ? "off" : "on",
                                id: "email",
                                onChange: e,
                                placeholder: l.a._("Enter email", "prompt for entering password"),
                                ref: function(e) {
                                    n.emailTextFieldRef = e
                                },
                                type: "email",
                                value: n.props.email,
                                onBlur: n.validateEmailOnBlur
                            }), a.a.createElement(f.b, {
                                marginTop: 1,
                                marginBottom: 3,
                                dangerouslySetInlineStyle: {
                                    __style: {
                                        lineHeight: "18px"
                                    }
                                }
                            }, a.a.createElement(f.C, {
                                inline: !0,
                                color: "red",
                                overflow: "normal"
                            }, l.a._("This email address isn't linked to a Pinterest account. ", "error message show when user try to login with a non exist email account")), a.a.createElement(u.a, {
                                onTouch: r,
                                inline: !0,
                                pressState: "background"
                            }, a.a.createElement(f.C, {
                                inline: !0,
                                bold: !0,
                                color: "red",
                                overflow: "normal"
                            }, l.a._("Sign up for one now.", "A text with link that, if user click the text then it will redirect user to sign up flow")))))
                        })), E(w(w(n)), "renderPasswordToggle", (function() {
                            var e = n.state.showPassword;
                            return a.a.createElement(r.Fragment, null, a.a.createElement(f.b, {
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
                            }, e ? a.a.createElement(f.j, {
                                icon: "eye",
                                color: "gray",
                                inline: !0,
                                accessibilityLabel: l.a._("Show password", "Accessibility label for button that toggles showing the password")
                            }) : a.a.createElement(f.j, {
                                dangerouslySetSvgPath: {
                                    __path: _
                                },
                                color: "gray",
                                inline: !0,
                                accessibilityLabel: l.a._("Hide password", "Accessibility label for button that toggles hiding the password")
                            }))))
                        })), n
                    }
                    var n, i, p;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && y(e, t)
                    }(t, e), n = t, (i = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.email,
                                n = e.handleChangePassword,
                                o = e.handlePasswordReset,
                                i = e.hideLoginBtn,
                                u = e.hidePasswordField,
                                d = e.passwordValidationError,
                                p = e.emailValidationError,
                                m = e.validateEmailOnBlur,
                                g = e.validatePasswordOnBlur,
                                h = e.isValid,
                                b = e.onLoginClick,
                                y = e.onSubmit,
                                w = e.password,
                                E = e.shouldShowSignUpButton,
                                _ = e.showEmailAsText,
                                v = this.state,
                                S = v.emailFieldElement,
                                O = v.shouldShowEmailSuggestion,
                                P = v.showPassword;
                            return a.a.createElement(f.b, {
                                marginTop: 3,
                                marginBottom: 3
                            }, a.a.createElement("form", {
                                onSubmit: y,
                                autoCapitalize: "none",
                                autoCorrect: "off"
                            }, _ ? a.a.createElement(f.b, {
                                marginBottom: 5
                            }, a.a.createElement(f.C, {
                                align: "center"
                            }, t)) : a.a.createElement(r.Fragment, null, O ? a.a.createElement(s.a, {
                                direction: "top",
                                email: t,
                                emailFieldElement: S,
                                handleEmailSuggestionClick: this.handleEmailSuggestionClick,
                                showUsername: !0
                            }) : null, a.a.createElement(f.b, {
                                marginTop: 1
                            }, a.a.createElement(f.E, {
                                id: "email",
                                errorMessage: p,
                                onBlur: m,
                                onChange: this.handleChangeEmail,
                                placeholder: l.a._("Email", "Prompt for user to enter in email on the mobile web login page"),
                                type: "email",
                                value: t
                            }))), u ? null : a.a.createElement(f.b, null, a.a.createElement(f.b, {
                                marginTop: 2,
                                position: "relative"
                            }, a.a.createElement(f.E, {
                                autoComplete: "on",
                                id: "password",
                                errorMessage: d,
                                onBlur: g,
                                onChange: n,
                                placeholder: l.a._("Password", "Prompt for user to enter in password on the mobile web login page"),
                                type: P ? "text" : "password",
                                value: w
                            }), this.renderPasswordToggle()), a.a.createElement(f.b, {
                                marginTop: 1
                            }, a.a.createElement(c.a, {
                                to: "/password/reset",
                                pressState: "background",
                                onTouch: o
                            }, a.a.createElement(f.C, {
                                bold: !0,
                                inline: !0,
                                smSize: "xs",
                                mdSize: "xs",
                                lgSize: "xs"
                            }, l.a._("Forgot your password?", "Link to the password reset page"))))), E && a.a.createElement(f.b, {
                                marginTop: 3
                            }, a.a.createElement(f.c, {
                                color: "red",
                                type: "submit",
                                text: l.a._("Sign up with this email", "Label for sign up button"),
                                onClick: this.handleSignupClick
                            })), !i && a.a.createElement(f.b, {
                                marginTop: 3
                            }, a.a.createElement(f.c, {
                                color: "red",
                                type: "submit",
                                text: l.a._("Log in", "Label for log in button"),
                                disabled: !h || E,
                                onClick: b
                            }))))
                        }
                    }]) && h(n.prototype, i), p && h(n, p), t
                }(r.PureComponent);
            t.b = Object(i.connect)(null, (function(e) {
                return {
                    activateOriMotionExp: function() {
                        return e(Object(p.a)("mweb_vertical_ori_vs_motion"))
                    }
                }
            }))(v)
        },
        yeqU: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("af3U"),
                o = n("Lr1Z"),
                i = n("n6mq");
            t.a = function(e) {
                var t = e.marginTop,
                    n = void 0 === t ? 5 : t;
                return r.createElement(i.b, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    marginTop: n
                }, r.createElement(i.b, {
                    display: "flex",
                    marginEnd: 1,
                    justifyContent: "center"
                }, r.createElement(i.C, {
                    align: "center",
                    inline: !0
                }, a.a._("Are you a business?", "Prompt for business signup"))), r.createElement(i.b, {
                    display: "flex",
                    justifyContent: "center"
                }, r.createElement(o.a, {
                    inline: !0,
                    newTab: !0,
                    to: "/business/create",
                    pressState: "background"
                }, r.createElement(i.C, {
                    align: "center",
                    bold: !0
                }, a.a._("Get started here!", "Prompt for signing up")))))
            }
        }
    }
]);
//# sourceMappingURL=pjs-EmailSignupPage-d4f1b291de39d3181c57.js.map