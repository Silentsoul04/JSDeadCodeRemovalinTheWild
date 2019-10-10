(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        "4aTO": function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o("q1tI"),
                a = o.n(n),
                i = o("/MKj"),
                r = o("gxu6"),
                c = o("U8ey"),
                l = o("6CnP"),
                u = o("af3U"),
                s = o("hN4P"),
                g = o("mp1x"),
                m = o("4Tgq"),
                p = o("6adH"),
                d = o("QtD7"),
                f = o("bKKl"),
                b = o("4NbJ"),
                _ = o("T7J+"),
                h = o("AGnR"),
                y = o("ulr2"),
                v = o("2hay"),
                w = o("A+Hl"),
                k = o("n6mq"),
                j = o("fArA"),
                A = o("Q5BC");

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function x(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function F(e) {
                return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            o.d(t, "track", (function() {
                return N
            }));
            var N = function(e, t, o, n) {
                    Object(m.a)("".concat(n ? "".concat(n, ".") : "", "mweb_autologin.").concat(t, "_").concat(e, ".").concat(o))
                },
                P = function(e) {
                    function t() {
                        var e, o, n, a, i, r, c;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var l = arguments.length, u = new Array(l), s = 0; s < l; s++) u[s] = arguments[s];
                        return n = this, o = !(a = (e = F(t)).call.apply(e, [this].concat(u))) || "object" !== O(a) && "function" != typeof a ? S(n) : a, i = S(S(o)), c = {
                            fbEmail: null,
                            fbName: null,
                            showFbAutoLoginModal: !1,
                            facebookAutologinFailed: !1,
                            googleAutologinFailed: !1,
                            smartlockAutologinFailed: !1
                        }, (r = "state") in i ? Object.defineProperty(i, r, {
                            value: c,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : i[r] = c, o
                    }
                    var o, n, i;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && E(e, t)
                    }(t, e), o = t, (n = [{
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            var o = this.props.trackAutologinFailure,
                                n = this.state,
                                a = n.facebookAutologinFailed,
                                i = n.googleAutologinFailed,
                                r = n.smartlockAutologinFailed;
                            a && i && r && o()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.isAuthenticated,
                                o = e.crossDomain,
                                n = e.fb,
                                a = e.google,
                                i = e.smartlock,
                                c = e.getGplusMWebMigrationExpGroup;
                            t || (r.get("fba") ? Object(m.a)("mweb_previously_logged_out.true") : Object(m.a)("mweb_previously_logged_out.false"), o && this.attemptCrossDomainAutologin(), i && this.attemptSmartlockAutologin(), n && this.attemptFBAutologin(), a && (c().startsWith("enabled") ? this.attemptGoogleAutologinV2() : this.attemptGoogleAutologin()))
                        }
                    }, {
                        key: "attemptCrossDomainAutologin",
                        value: function() {
                            var e = this.props,
                                t = e.logPrefix,
                                o = e.pageName;
                            (function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return !Object(w.c)(window.location.origin) || Object(f.f)() ? Promise.reject({
                                    status: "autologin_disabled"
                                }) : (e && e.onAttempt && e.onAttempt(), Object(w.d)())
                            })({
                                onAttempt: function() {
                                    return N("attempt", "cctld", o, t)
                                }
                            }).then(A.a).then((function() {
                                return N("success", "cctld", o, t)
                            })).catch((function(e) {
                                e && N("fail", "cctld", o, t)
                            }))
                        }
                    }, {
                        key: "attemptSmartlockAutologin",
                        value: function() {
                            var e, t = this,
                                o = this.props,
                                n = o.history,
                                a = o.location,
                                i = o.login,
                                r = o.logPrefix,
                                c = o.pageName,
                                l = o.getSmartLockAutoLoginExperimentGroup;
                            l().startsWith("enabled_mediation_required") ? e = "required" : l().startsWith("enabled_mediation_optional") ? e = "optional" : l().startsWith("enabled_mediation_silent") && (e = "silent"),
                                function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = arguments.length > 1 ? arguments[1] : void 0,
                                        o = window.navigator.credentials,
                                        n = {
                                            password: !0
                                        };
                                    return t && (n.mediation = t), Object(f.f)() ? Promise.reject({
                                        status: "autologin_disabled"
                                    }) : new Promise((function(t) {
                                        o ? (e && e.onAttempt && e.onAttempt(), o.get(n).then(t)) : e && e.onNoBrowserCredentials && e.onNoBrowserCredentials()
                                    }))
                                }({
                                    onAttempt: function() {
                                        return N("attempt", "smartlock", c, r)
                                    },
                                    onNoBrowserCredentials: function() {
                                        return N("error_no_api", "smartlock", c, r)
                                    }
                                }, e).then((function(e) {
                                    e ? (Object(h.d)({
                                        event_type: 7534,
                                        view_type: 10,
                                        view_parameter: 3204,
                                        aux_data: {
                                            signup_login_method: 5
                                        }
                                    }), i({
                                        username_or_email: e.id,
                                        password: e.password
                                    }, n, a.pathname, {
                                        isAutologin: !0
                                    }).then((function() {
                                        N("success", "smartlock", c, r), Object(h.d)({
                                            event_type: 7536,
                                            view_type: 10,
                                            view_parameter: 3204,
                                            aux_data: {
                                                signup_login_method: 5
                                            }
                                        })
                                    })).catch((function() {
                                        N("fail", "smartlock", c, r), Object(h.d)({
                                            event_type: 7535,
                                            view_type: 10,
                                            view_parameter: 3204,
                                            aux_data: {
                                                signup_login_method: 5
                                            }
                                        }), t.setState({
                                            smartlockAutologinFailed: !0
                                        })
                                    }))) : (t.setState({
                                        smartlockAutologinFailed: !0
                                    }), N("error_no_creds", "smartlock", c, r))
                                })).catch((function(e) {
                                    t.setState({
                                        smartlockAutologinFailed: !0
                                    }), N(e ? e.status : "error_other", "smartlock", c, r)
                                }))
                        }
                    }, {
                        key: "handleFBAutologinResponse",
                        value: function(e) {
                            var t = this.props,
                                o = t.logPrefix,
                                n = t.pageName,
                                a = t.onFBAutoLoginFailure;
                            N(e, "facebook", n, o), "success" !== e && a && a({
                                status: e
                            })
                        }
                    }, {
                        key: "handleFBAutologinError",
                        value: function(e) {
                            var t;
                            e ? e.status ? t = e.status : e instanceof Error ? (t = "error_no_status", Object(_.a)({
                                message: e.message || e.description,
                                lineNumber: e.lineno || e.lineNumber || e.line,
                                columnNumber: e.colno || e.columnNumber || e.column,
                                stack: e.stack || e.stacktrace || e.error && (e.error.stack || e.error.stacktrace),
                                fileName: e.fileName || e.sourceUrl,
                                name: "unexpected mweb facebook autologin response error"
                            })) : "string" == typeof e ? (t = "error_string", Object(_.a)({
                                message: e,
                                name: "unexpected mweb facebook autologin response string"
                            })) : t = "error_other" : t = "error_empty", this.handleFBAutologinResponse(t)
                        }
                    }, {
                        key: "attemptFBAutologin",
                        value: function() {
                            var e = this,
                                t = this.props,
                                o = t.history,
                                n = t.locale,
                                a = t.location,
                                i = t.login,
                                r = t.logPrefix,
                                c = t.pageName,
                                l = t.showToast;
                            N("attempt", "facebook", c, r), Object(s.a)({
                                    name: "UnauthFacebookAutologinInitEvent"
                                }),
                                function(e) {
                                    return Object(f.f)() ? Promise.reject({
                                        status: "autologin_disabled"
                                    }) : Object(v.f)(e).then(v.d).then((function(e) {
                                        return Object(v.e)(e, {
                                            autologin: !0
                                        })
                                    }))
                                }(n).then((function(t) {
                                    Object(s.a)({
                                        name: "UnauthFacebookAutologinSuccessEvent"
                                    }), e.setState({
                                        showFbAutoLoginModal: !0,
                                        fbEmail: t.data && t.data.email,
                                        fbName: t.data && t.data.first_name
                                    }), Object(h.d)({
                                        event_type: 7534,
                                        view_type: 10,
                                        view_parameter: 3205,
                                        aux_data: {
                                            signup_login_method: 2
                                        }
                                    }), i(t.creds, o, a.pathname, {
                                        isAutologin: !0
                                    }).then((function() {
                                        e.setState({
                                            showFbAutoLoginModal: !1
                                        }), Object(h.d)({
                                            event_type: 7536,
                                            view_type: 10,
                                            view_parameter: 3205,
                                            aux_data: {
                                                signup_login_method: 2
                                            }
                                        }), l({
                                            text: t.data && t.data.first_name ? u.a.interpolateNamedTemplate(u.a._("Welcome back to Pinterest, {{ name }}!", "welcoming user back to pinterest when autologin with first name"), {
                                                name: t.data.first_name
                                            }).join("") : u.a._("Welcome back to Pinterest!", "welcoming user back to pinterest when autologin"),
                                            duration: 4e3
                                        }), e.handleFBAutologinResponse("success")
                                    })).catch((function(t) {
                                        e.setState({
                                            showFbAutoLoginModal: !1,
                                            facebookAutologinFailed: !0
                                        }), Object(h.d)({
                                            event_type: 7535,
                                            view_type: 10,
                                            view_parameter: 3205,
                                            aux_data: {
                                                signup_login_method: 2
                                            }
                                        });
                                        var o = "fail";
                                        t && t.apiErrorCode === f.a && (o = "incomplete_signup"), e.handleFBAutologinResponse(o)
                                    }))
                                })).catch((function(t) {
                                    e.handleFBAutologinError(t), e.setState({
                                        facebookAutologinFailed: !0
                                    })
                                }))
                        }
                    }, {
                        key: "attemptGoogleAutologinV2",
                        value: function() {
                            var e = this,
                                t = this.props,
                                o = t.history,
                                n = t.location,
                                a = t.login,
                                i = t.logPrefix,
                                r = t.pageName,
                                c = t.showToast;
                            N("attempt", "google", r, i), Object(s.a)({
                                name: "UnauthGoogleAutologinInitEvent"
                            }), Object(b.a)().then((function() {
                                N("sdk_init_success", "google", r, i), Object(s.a)({
                                        name: "UnauthGoogleAutologinScriptLoadedEvent"
                                    }),
                                    function(e, t) {
                                        if (Object(f.f)()) return Promise.reject({
                                            status: "autologin_disabled"
                                        });
                                        t("create_google_autologin_button.number_6");
                                        var o = document.createElement("div");
                                        return o.style.left = "-99999px", o.style.opacity = "0", o.style.position = "fixed", o.style.top = "-999999px", o.id = "google-autologin-button", document.getElementsByTagName("body")[0].appendChild(o), Object(b.c)(o.id, e, t, !0)
                                    }(window.gapi, (function(e) {
                                        return Object(m.a)("autologin.mweb.".concat(e))
                                    })).then((function(t) {
                                        var l = t.data;
                                        Object(h.d)({
                                            event_type: 7534,
                                            view_type: 10,
                                            view_parameter: 3204,
                                            aux_data: {
                                                signup_login_method: 3
                                            }
                                        }), Object(s.a)({
                                            name: "UnauthGoogleAutologinSuccessEvent"
                                        }), a(l, o, n.pathname, {
                                            isAutologin: !0
                                        }).then((function() {
                                            c({
                                                text: u.a._("Welcome back to Pinterest!", "welcoming user back to pinterest when autologin"),
                                                duration: 4e3
                                            }), N("success", "google", r, i), Object(h.d)({
                                                event_type: 7536,
                                                view_type: 10,
                                                view_parameter: 3204,
                                                aux_data: {
                                                    signup_login_method: 3
                                                }
                                            })
                                        })).catch((function() {
                                            e.setState({
                                                googleAutologinFailed: !0
                                            }), N("fail", "google", r, i), Object(h.d)({
                                                event_type: 7535,
                                                view_type: 10,
                                                view_parameter: 3204,
                                                aux_data: {
                                                    signup_login_method: 3
                                                }
                                            })
                                        }))
                                    })).catch((function(t) {
                                        e.setState({
                                            googleAutologinFailed: !0
                                        }), N(t ? t.status : "error_other", "google", r, i)
                                    }))
                            })).catch((function(e) {
                                Object(m.a)("mweb_autologin.google_sdk_".concat(e || "error_sdk_init"))
                            }))
                        }
                    }, {
                        key: "attemptGoogleAutologin",
                        value: function() {
                            var e = this,
                                t = this.props,
                                o = t.history,
                                n = t.location,
                                a = t.login,
                                i = t.logPrefix,
                                r = t.pageName,
                                c = t.showToast;
                            N("attempt", "google", r, i), Object(s.a)({
                                    name: "UnauthGoogleAutologinInitEvent"
                                }),
                                function(e) {
                                    if (Object(f.f)()) return Promise.reject({
                                        status: "autologin_disabled"
                                    });
                                    e && e("autologin.create_google_autologin_button.number_5");
                                    var t = document.createElement("div");
                                    return t.style.left = "-99999px", t.style.opacity = "0", t.style.position = "fixed", t.style.top = "-999999px", document.getElementsByTagName("body")[0].appendChild(t), Object(b.b)(t, !0)
                                }((function(e) {
                                    return Object(m.a)("autologin.mweb.".concat(e))
                                })).then((function(t) {
                                    var l = t.data;
                                    l ? (Object(h.d)({
                                        event_type: 7534,
                                        view_type: 10,
                                        view_parameter: 3204,
                                        aux_data: {
                                            signup_login_method: 3
                                        }
                                    }), Object(s.a)({
                                        name: "UnauthGoogleAutologinSuccessEvent"
                                    }), a(l, o, n.pathname, {
                                        isAutologin: !0
                                    }).then((function() {
                                        c({
                                            text: u.a._("Welcome back to Pinterest!", "welcoming user back to pinterest when autologin"),
                                            duration: 4e3
                                        }), N("success", "google", r, i), Object(h.d)({
                                            event_type: 7536,
                                            view_type: 10,
                                            view_parameter: 3204,
                                            aux_data: {
                                                signup_login_method: 3
                                            }
                                        })
                                    })).catch((function() {
                                        e.setState({
                                            googleAutologinFailed: !0
                                        }), N("fail", "google", r, i), Object(h.d)({
                                            event_type: 7535,
                                            view_type: 10,
                                            view_parameter: 3204,
                                            aux_data: {
                                                signup_login_method: 3
                                            }
                                        })
                                    }))) : e.setState({
                                        googleAutologinFailed: !0
                                    })
                                })).catch((function(t) {
                                    e.setState({
                                        googleAutologinFailed: !0
                                    }), N(t ? t.status : "error_other", "google", r, i)
                                }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.fbEmail,
                                o = e.fbName,
                                n = e.showFbAutoLoginModal;
                            return a.a.createElement(g.a, {
                                isOpen: n,
                                type: "autologin"
                            }, a.a.createElement(k.b, {
                                margin: -3
                            }, a.a.createElement(c.a, {
                                duration: 1500,
                                finalProgress: 95
                            }), a.a.createElement(k.b, {
                                alignItems: "center",
                                direction: "column",
                                display: "flex",
                                paddingX: t ? 10 : 12,
                                paddingY: 6
                            }, a.a.createElement(k.j, {
                                icon: "pinterest",
                                color: "red",
                                accessibilityLabel: u.a._("Pinterest logo"),
                                size: 24
                            }), a.a.createElement(k.b, {
                                marginTop: 1,
                                paddingY: 1
                            }, a.a.createElement(k.C, {
                                align: "center"
                            }, a.a.createElement(k.i, {
                                size: "xs"
                            }, o ? u.a.interpolateNamedTemplate(u.a._("Welcome back, {{ name }}!", "welcome back with first name"), {
                                name: o
                            }).join("") : u.a._("Welcome back!", "Welcome back!")))), a.a.createElement(k.C, {
                                align: "center"
                            }, t ? u.a.interpolateNamedTemplate(u.a._("We're logging you in with your Facebook account, {{ email }}", "logging in user with facebook account and email associated"), {
                                email: a.a.createElement(k.C, {
                                    bold: !0,
                                    inline: !0,
                                    key: "fbEmail"
                                }, t)
                            }) : u.a._("We're logging you in with your Facebook account...", "logging in user with Facebook account")))))
                        }
                    }]) && x(o.prototype, n), i && x(o, i), t
                }(n.Component);
            t.default = Object(j.compose)(p.b, Object(i.connect)((function(e, t) {
                return {
                    isAuthenticated: e.session.isAuthenticated,
                    locale: e.session.locale,
                    pageName: Object(l.a)(t.location.pathname, e)
                }
            }), (function(e) {
                return {
                    login: function(t, o, n, a) {
                        return e(Object(A.b)(t, o, n, a))
                    },
                    crossDomainAutoLogin: function() {
                        return e(Object(A.a)())
                    },
                    getSmartLockAutoLoginExperimentGroup: function() {
                        return e(Object(d.a)("mweb_smartlock_auto_login")) || ""
                    },
                    getGplusMWebMigrationExpGroup: function() {
                        return e(Object(d.a)("mweb_unauth_gplus_autologin_migration")) || ""
                    },
                    trackAutologinFailure: function() {
                        return e(Object(y.G)())
                    }
                }
            })))(P)
        },
        "T7J+": function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return i
            })), o.d(t, "b", (function() {
                return r
            }));
            var n = o("gxu6");

            function a(e) {
                var t = new XMLHttpRequest,
                    o = n.get("csrftoken");
                t.open("post", "/_/_/report/error/", !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.setRequestHeader("X-CSRFToken", o || ""), t.send(function(e) {
                    return Object.keys(e).map((function(t) {
                        return t + "=" + encodeURIComponent(e[t])
                    })).join("&")
                }(e))
            }

            function i(e) {
                var t, o = {
                    current_url: window.location.href
                };
                try {
                    t = JSON.stringify({
                        errorObj: e
                    })
                } catch (i) {
                    var n = {
                        message: e.message,
                        name: "window.onerror stringify exception"
                    };
                    t = JSON.stringify({
                        errorObj: n
                    })
                }
                a({
                    report_context: JSON.stringify(o),
                    report_data: t
                })
            }

            function r(e) {
                if (404 === e.http_status || 500 === e.http_status) return !1;
                var t = e.stack || e.stack_trace;
                return (!t || -1 === t.indexOf("global code")) && (!e.message || "Connectivity error or cancelled by navigation" !== e.message && !e.message.includes("count mfss fcw") && !e.message.includes("evaluating 'elem.classList'"))
            }
        }
    }
]);
//# sourceMappingURL=pjs-15-0455e0607f1f92fe97bd.js.map