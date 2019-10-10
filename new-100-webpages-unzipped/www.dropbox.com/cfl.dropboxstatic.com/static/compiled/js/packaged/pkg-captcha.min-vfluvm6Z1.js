define("modules/clean/abuse/recaptcha_helper", ["require", "exports", "tslib", "modules/constants/login_and_register", "modules/constants/page_load", "modules/clean/global_constants", "modules/clean/web_timing_logger", "modules/core/exception", "modules/core/uri"], function(e, t, a, r, c, n, o, s, i) {
    "use strict";

    function p() {
        return null != t.captchaPromise
    }

    function l() {
        t.captchaPromise = null
    }

    function _(e, a) {
        return void 0 !== a && (d = a), t.captchaPromise || (t.captchaPromise = e ? new Promise(function(e, t) {
            o.waitForTTI().then(e), setTimeout(e, 2500)
        }).then(h) : h()), t.captchaPromise
    }

    function u() {
        var e = c.USER_LOCALE.replace("_", "-"),
            t = {
                onload: "recaptchaOnloadCallback",
                render: "explicit",
                hl: e
            };
        return new i.URI({
            scheme: "https",
            authority: "www.google.com",
            path: "/recaptcha/api.js",
            query: t
        }).toString()
    }

    function h() {
        return new Promise(function(c, o) {
            if (window.recaptchaOnloadCallback = function() {
                    c(window.grecaptcha)
                }, r.SHOULD_LOAD_FUNCAPTCHA && d && new Promise(function(t, a) {
                    e(["modules/clean/abuse/funcaptcha_modal"], t, a)
                }).then(a.__importStar).then(function(e) {
                    (0, e.loadFuncaptchaModal)()
                }), t.isTest()) c(b);
            else {
                var i = document.createElement("script"),
                    p = u();
                if (i.setAttribute("src", p), !n.GlobalConstants.CSP_SCRIPT_NONCE) return s.reportException({
                    err: new Error("CSP nonce not set"),
                    severity: s.SEVERITY.CRITICAL,
                    tags: ["product-safety-infra", "recaptcha"]
                }), void o();
                i.setAttribute("nonce", n.GlobalConstants.CSP_SCRIPT_NONCE), document.body.appendChild(i)
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = a.__importStar(r), s = a.__importStar(s);
    var d = !1;
    t.HasCaptchaLoaded = p, t.ClearCaptchaPromise = l, t.LoadRecaptcha = _, t.isTest = function() {
        return r.IS_SELENIUM_TEST
    }, t.BuildRecaptchaURI = u;
    var m = {},
        v = {},
        f = 0;
    t.DUMMY_RESPONSE = "DUMMY-RESPONSE";
    var g = function(e) {
            e.setAttribute("class", "g-recaptcha-response"), e.setAttribute("name", "g-recaptcha-response"), e.value = ""
        },
        b = {
            reset: function(e) {
                return g(v[e].querySelector(".g-recaptcha-response")), !0
            },
            render: function(e, a, r) {
                var c = f;
                f += 1, s.assert(null == e.querySelector(".g-recaptcha-response"), "can't render multiple recaptcha elements in same div");
                var n = document.createElement("textarea");
                return n.id = "g-recaptcha-response-" + c, g(n), e.appendChild(n), v[c] = e, m[c] = function() {
                    var e = t.DUMMY_RESPONSE;
                    return n.value = e, a.callback && a.callback(e), e
                }, c
            },
            execute: function(e) {
                return Promise.resolve(m[e]())
            }
        }
}), define("modules/clean/auth/common/recaptcha", ["require", "exports", "tslib", "modules/clean/ajax", "external/classnames", "react", "modules/clean/auth_event_logger", "modules/clean/react/css", "modules/core/i18n", "modules/clean/abuse/recaptcha_helper", "modules/clean/react_format", "modules/constants/login_and_register"], function(e, t, a, r, c, n, o, s, i, p, l, _) {
    "use strict";

    function u(e) {
        var t = e.getWrappedComponent();
        return {
            "g-recaptcha-response": t.recaptcha_response,
            "g-recaptcha-response-v3": t.recaptcha_response_v3,
            "funcaptcha-response": t.funcaptcha_response
        }
    }

    function h(e, t) {
        return e.getWrappedComponent().handle_recaptcha_errors(t)
    }

    function d(e) {
        return e.getWrappedComponent().clear_recaptcha_response()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = a.__importStar(r), c = a.__importDefault(c), n = a.__importDefault(n), _ = a.__importStar(_), t.get_recaptcha_responses = u, t.handle_recaptcha_errors = h, t.clear_recaptcha_response = d;
    var m = (function(t) {
        function s(e) {
            return t.call(this, e) || this
        }
        return a.__extends(s, t), s.prototype.render_recaptcha = function(e, t) {
            var a = this;
            void 0 !== this.refs.container_div && (this.refs.container_div.style.display = "block", void 0 !== this.recaptcha_id ? (e.reset(this.recaptcha_id), void 0 !== this.invisible_recaptcha_id && e.reset(this.invisible_recaptcha_id)) : (this.invisible_recaptcha_id = e.render(this.refs.captcha_div, {
                size: "invisible",
                sitekey: _.INVISIBLE_RECAPTCHA_SITE_KEY,
                callback: function(t) {
                    r.BackgroundRequest({
                        url: "/log_invisible_recaptcha_event",
                        data: {
                            email: a.props.email,
                            event: "INVISIBLE_RECAPTCHA_PASSED_" + a.props.source
                        }
                    }), a.recaptcha_response_v3 = void 0, a.recaptcha_response = t, e.reset(a.invisible_recaptcha_id), a.props.onSubmit()
                }
            }), this.recaptcha_id = e.render(this.refs.captcha_div_2, {
                size: "invisible",
                sitekey: _.RECAPTCHA_V3_SITE_KEY,
                callback: function(t) {
                    a.recaptcha_response_v3 = t, e.reset(a.recaptcha_id), a.props.onSubmit()
                }
            })))
        }, s.prototype.handle_recaptcha_errors = function(t) {
            var r = this;
            return t && t.recaptcha_response_v3 ? (this.log_recaptcha_start_event(this.props.source), p.LoadRecaptcha(void 0, !0).then(function(e) {
                e.execute(r.invisible_recaptcha_id)
            }), !0) : !(!t || !t.funcaptcha_response) && (new Promise(function(t, a) {
                e(["modules/clean/abuse/funcaptcha_modal"], t, a)
            }).then(a.__importStar).then(function(e) {
                (0, e.openFuncaptchaModal)(r.props.email || "", r.props.source, function(e) {
                    r.funcaptcha_response = e, r.props.onSubmit()
                })
            }), !0)
        }, s.prototype.clear_recaptcha_response = function() {
            this.recaptcha_response = void 0, this.recaptcha_response_v3 = void 0, this.funcaptcha_response = void 0
        }, s.prototype.log_recaptcha_start_event = function(e) {
            r.BackgroundRequest({
                url: "/log_invisible_recaptcha_event",
                data: {
                    email: this.props.email,
                    event: "INVISIBLE_RECAPTCHA_START_" + e
                }
            }), "LOGIN" === e ? o.AuthEventLogger.log_web_login_captcha() : o.AuthEventLogger.log_web_signup_captcha()
        }, s.prototype.componentDidMount = function() {
            var e = this;
            p.LoadRecaptcha(void 0, !0).then(function(t) {
                e.render_recaptcha(t, _.INVISIBLE_RECAPTCHA_SITE_KEY)
            })
        }, s.prototype.render = function() {
            var e = n.default.createElement("div", {
                className: "recaptcha-terms-text"
            }, l.reactFormat(i._("This page is protected by reCAPTCHA, and subject to the Google <a_p>Privacy Policy</a_p> and <a_t>Terms of service</a_t>."), {
                a_p: n.default.createElement("a", {
                    href: "https://www.google.com/policies/privacy/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }),
                a_t: n.default.createElement("a", {
                    href: "https://www.google.com/policies/terms/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                })
            }));
            return n.default.createElement("div", {
                ref: "container_div",
                className: c.default({
                    "recaptcha-v2-challenge-container": !0,
                    "recaptcha-v2-challenge-container--invisible": !0
                })
            }, e, n.default.createElement("div", {
                ref: "captcha_div",
                className: "recaptcha_v2_challenge"
            }), n.default.createElement("div", {
                ref: "captcha_div_2",
                className: "recaptcha_v2_challenge"
            }))
        }, s.prototype.submit = function() {
            var e = this;
            p.LoadRecaptcha(void 0, !0).then(function(t) {
                return t.execute(e.recaptcha_id)
            })
        }, s
    })(n.default.Component);
    t.RecaptchaComponent = m, t.Recaptcha = s.requireCssWithComponent(m, ["/static/css/recaptcha-vflIN6j39.css"])
});
//# sourceMappingURL=pkg-captcha.min.js-vflAdRqld.map