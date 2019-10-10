define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/browser_detection", "modules/core/i18n", "modules/clean/auth/common/inputs/checkbox", "modules/clean/auth/common/inputs/text", "modules/clean/auth/common/types", "modules/clean/auth/common/recaptcha", "modules/clean/auth/login/login_error", "modules/clean/auth/login/google_login_button", "modules/clean/auth/login/apple_login_button", "modules/clean/auth/login/types", "modules/clean/react/image", "modules/clean/react_format", "modules/clean/react/sprite_div", "modules/clean/static_urls"], function(e, t, a, o, s, r, l, i, n, p, m, u, d, c, h, g, f, b, E) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = a.__importDefault(o), s = a.__importDefault(s), b = a.__importDefault(b);
    var _ = function(e) {
            var t = "/forgot",
                a = e.target;
            return e.appendEmail && (t = "/forgot?email_from_login=" + e.email, a = void 0), s.default.createElement("a", {
                className: "forgot-password-link",
                href: t,
                target: a
            }, e.text || l._("Forgot your password?"))
        },
        S = function(e) {
            return s.default.createElement("div", {
                id: "navisite"
            }, s.default.createElement("br", null), s.default.createElement("a", {
                href: "/navi_redirect/login",
                target: e.openLinkInNewTab ? "_blank" : void 0
            }, l._("Dropbox NAVI")))
        },
        v = function(e) {
            return s.default.createElement("div", {
                className: "sso-optout"
            }, l._("or"), " ", s.default.createElement("a", {
                href: "#",
                onClick: e.onClick
            }, l._("Log in with Dropbox credentials")))
        },
        C = function() {
            return s.default.createElement("span", {
                className: "login-loading-indicator ajax-loading"
            }, s.default.createElement(g.Image, {
                src: E.static_url("/static/images/icons/ajax-loading-small-vfl3Wt7C_.gif"),
                srcHiRes: E.static_url("/static/images/icons/ajax-loading-small@2x-vflAxdZTP.gif")
            }))
        },
        P = function() {
            return s.default.createElement("div", {
                className: "sso-description"
            }, s.default.createElement(b.default, {
                group: "web",
                name: "lock",
                text: l._("Single sign-on enabled")
            }))
        },
        w = function(e) {
            return s.default.createElement("div", {
                className: "credentials-form__fields"
            }, s.default.createElement(n.AuthTextField, {
                value: e.emailValue,
                className: o.default("login-text-input", "login-email", e.emailProps.className),
                onChange: e.onInputChange,
                disabled: e.disabled || e.emailProps.readonly || !1,
                label: e.emailProps.label || (e.maestroStyle ? l._("Email") : void 0),
                placeholder: e.emailProps.placeholder || (e.maestroStyle ? l._("you@mail.com") : l._("Email")),
                error: e.emailError,
                maestroStyle: e.maestroStyle,
                name: "login_email",
                type: p.AuthTextInputType.EMAIL,
                variant: e.variant
            }), e.ssoState === h.SsoState.OFF && s.default.createElement(n.AuthTextField, {
                value: e.passwordValue,
                placeholder: e.passwordProps.placeholder || (e.maestroStyle ? l._("Minimum 6 characters") : l._("Password")),
                name: "login_password",
                className: o.default("login-text-input", "login-password", e.passwordProps.className),
                error: e.passwordError,
                inputClassName: "password-input",
                onChange: e.onInputChange,
                measureStrength: !1,
                label: e.passwordProps.label || (e.maestroStyle ? l._("Password") : void 0),
                maestroStyle: e.maestroStyle,
                disabled: e.disabled,
                variant: e.variant,
                type: p.AuthTextInputType.PASSWORD
            }))
        },
        N = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.setCaptchaComponent = function(e) {
                    t.captchaComponent = e
                }, t.getRecaptchaResponses = function() {
                    return t.props.supportsCaptcha ? m.get_recaptcha_responses(t.captchaComponent) : {}
                }, t.handleRecaptchaErrors = function(e) {
                    return !!t.props.supportsCaptcha && m.handle_recaptcha_errors(t.captchaComponent, e)
                }, t.submitRecaptcha = function() {
                    t.props.supportsCaptcha ? t.captchaComponent.getWrappedComponent().submit() : t.props.onSubmit()
                }, t
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = this.props.rememberMeProps || {},
                    t = this.props.googleLoginProps,
                    a = this.props.appleLoginProps,
                    n = this.props.showAppleLogin,
                    g = o.default({
                        clearfix: !this.props.hideRememberMe || !this.props.hideHelp && r.is_supported_mobile_browser()
                    }),
                    b = this.props.openLinksInNewTab ? "_blank" : void 0,
                    E = o.default("clearfix", "credentials-form", "login-form", {
                        "sso-required": this.props.ssoState !== h.SsoState.OFF,
                        "sso-optional": this.props.ssoState === h.SsoState.OPTIONAL
                    }),
                    N = t && t.positionBelow,
                    x = t && !t.positionBelow,
                    y = n && a && a.positionBelow,
                    L = n && a && !a.positionBelow,
                    k = N || y,
                    I = x || L,
                    A = t ? s.default.createElement(d.GoogleLoginButton, {
                        buttonProps: t.buttonProps,
                        disabled: this.props.isSubmitting,
                        error: this.props.googleLoginError,
                        onClick: this.props.onGoogleLoginClick
                    }) : null,
                    F = n && a ? s.default.createElement(c.AppleLoginButton, {
                        buttonProps: a.buttonProps,
                        disabled: this.props.isSubmitting,
                        error: this.props.appleLoginError,
                        onClick: this.props.onAppleLoginClick
                    }) : null,
                    O = this.props.hideHelp || this.props.ssoState === h.SsoState.REQUIRED,
                    T = O ? null : s.default.createElement(_, {
                        email: this.props.emailValue,
                        target: b,
                        appendEmail: void 0 === this.props.forgotPasswordProps.appendEmail || this.props.forgotPasswordProps.appendEmail,
                        text: this.props.forgotPasswordProps.text
                    }),
                    R = s.default.createElement("button", {
                        className: o.default("login-button", "signin-button", "button-primary", this.props.loginButtonProps.className),
                        type: "submit",
                        disabled: this.props.disabled || this.props.isSubmitting || this.props.loginButtonProps.disabled
                    }, this.props.ssoState === h.SsoState.OFF && s.default.createElement("div", {
                        className: "signin-text"
                    }, this.props.loginButtonProps.text || l._("Sign in")), this.props.ssoState !== h.SsoState.OFF && s.default.createElement("div", {
                        className: "sso-text"
                    }, l._("Continue"))),
                    V = s.default.createElement("div", {
                        className: "hr-label"
                    }, s.default.createElement("span", {
                        className: "hr-label__text"
                    }, l._("or"))),
                    B = this.props.variant === p.AuthFormVariant.PAPER_COMPACT;
                return s.default.createElement("div", {
                    className: "login-form-container--subcontainer"
                }, x && A, L && F, I && V, s.default.createElement("form", {
                    className: E,
                    onSubmit: this.props.onLoginClick,
                    method: "POST"
                }, s.default.createElement(w, {
                    disabled: this.props.disabled,
                    emailError: this.props.emailError,
                    emailProps: this.props.emailProps,
                    emailValue: this.props.emailValue,
                    maestroStyle: this.props.maestroStyle,
                    onInputChange: this.props.onInputChange,
                    passwordError: this.props.passwordError,
                    passwordProps: this.props.passwordProps,
                    passwordValue: this.props.passwordValue,
                    ssoState: this.props.ssoState,
                    variant: this.props.variant
                }), this.props.loginError && s.default.createElement(u.LoginError, {
                    message: this.props.loginError
                }), this.props.supportsCaptcha && s.default.createElement(m.Recaptcha, {
                    ref: this.setCaptchaComponent,
                    email: this.props.emailValue,
                    onSubmit: this.props.onSubmit,
                    source: "LOGIN"
                }), s.default.createElement("div", {
                    className: g
                }, this.props.ssoState !== h.SsoState.OFF && s.default.createElement(P, null), !this.props.hideRememberMe && s.default.createElement(i.AuthCheckbox, {
                    checked: this.props.rememberMeValue,
                    className: "remember-me",
                    disabled: e.disabled || this.props.disabled,
                    inline: void 0 === e.inline || e.inline,
                    label: f.reactFormat(l._("Remember me")),
                    maestroStyle: this.props.maestroStyle,
                    name: "remember_me",
                    onChange: this.props.onInputChange,
                    variant: this.props.variant
                }), B && T, !B && R, this.props.isSubmitting && s.default.createElement(C, null), this.props.ssoState === h.SsoState.OPTIONAL && s.default.createElement(v, {
                    onClick: this.props.onSsoChangeClick
                }), !k && !B && s.default.createElement("div", {
                    className: "login-need-help"
                }, T), this.props.showNaviSiteLogin && s.default.createElement(S, {
                    openLinkInNewTab: this.props.openLinksInNewTab
                }), B && R)), k && V, N && A, y && F, k && !B && s.default.createElement("div", {
                    className: "login-need-help"
                }, T))
            }, t
        })(s.default.Component);
    t.LoginCredentialsForm = N
});
//# sourceMappingURL=credentials_form.min.js-vflVSb_Wz.map