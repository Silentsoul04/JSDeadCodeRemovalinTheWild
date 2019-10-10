define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/auth/common/inputs/checkbox", "modules/clean/auth/common/inputs/text", "modules/clean/auth/common/recaptcha", "modules/clean/auth/common/types", "modules/clean/auth/register/google_register_button", "modules/clean/auth/register/name_fields", "modules/clean/react_format"], function(e, t, a, r, s, o, n, l, i, p, m, u, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = a.__importDefault(r), s = a.__importDefault(s);
    var d = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.setCaptchaComponent = function(e) {
                t.captchaComponent = e
            }, t
        }
        return a.__extends(t, e), t.prototype.handleRecaptchaErrors = function(e) {
            return i.handle_recaptcha_errors(this.captchaComponent, e)
        }, t.prototype.getRecaptchaComponent = function() {
            return this.captchaComponent
        }, t.prototype.getRecaptchaResponses = function() {
            return i.get_recaptcha_responses(this.captchaComponent)
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                a = e.variant,
                d = e.thirdPartyInitiatedSignup,
                h = e.tosCheckboxProps,
                f = e.onGoogleRegisterClick,
                g = e.disabled,
                b = e.isSubmitting,
                _ = e.maestroStyle,
                v = e.onInputChange,
                y = e.showMarketingOptIn,
                E = e.marketingOptInChecked,
                C = r.default("form_shown", "login-form-container", "register", t, a, {
                    third_party_auth: d
                }),
                S = h || {},
                P = void 0;
            S.unsafeLabelHTML || (P = c.reactFormat(o._("I agree to the <a>Dropbox Terms</a>"), {
                a: s.default.createElement("a", {
                    href: "/terms",
                    target: "_blank",
                    rel: "noreferrer noopener"
                })
            }));
            var k = this.props.submitButtonProps || {},
                x = r.default("login-button", "button-primary", k.className, {
                    "button-small": k.variant === p.AuthButtonVariant.SMALL,
                    "button-big": k.variant === p.AuthButtonVariant.BIG
                }),
                N = !!this.props.googleRegisterProps,
                R = this.props.googleRegisterProps || {},
                T = s.default.createElement(m.GoogleRegisterButton, {
                    onClick: f,
                    disabled: g || b,
                    variant: R.variant,
                    buttonProps: R.buttonProps
                }),
                I = s.default.createElement("div", {
                    className: "hr-label"
                }, s.default.createElement("span", {
                    className: "hr-label__text"
                }, o._("or"))),
                w = this.props.emailProps || {},
                A = r.default("input-email", "text-input__margin-right", w.className),
                M = this.props.passwordProps || {},
                V = r.default("input-password", M.className),
                L = this.props.maestroStyle;
            "TOP" === R.position ? L = !0 : "BOTTOM" === R.position && (L = !1);
            var O = S.variant || a,
                B = void 0 === S.inline || S.inline;
            return s.default.createElement("div", {
                className: C
            }, s.default.createElement("form", {
                className: "clearfix credentials-form register-form",
                onSubmit: this.props.onClickSignUp,
                method: "post"
            }, L && N && T, L && N && I, s.default.createElement("div", {
                className: "credentials-form__fields"
            }, s.default.createElement(u.RegisterFormNameFields, {
                maestroStyle: _,
                onInputChange: v,
                combinedName: this.props.combinedName,
                fnameError: this.props.fnameError,
                fnameProps: this.props.fnameProps,
                lnameProps: this.props.lnameProps,
                fnameValue: this.props.fnameValue,
                lnameValue: this.props.lnameValue,
                disabled: g,
                variant: a
            }), s.default.createElement("div", {
                className: "register-form__credential-fields"
            }, s.default.createElement(l.AuthTextField, {
                value: this.props.emailValue,
                className: A,
                onChange: v,
                disabled: g || w.readonly || !1,
                label: w.label || (_ ? o._("Email") : void 0),
                placeholder: w.placeholder || (this.props.maestroStyle ? o._("you@mail.com") : o._("Email")),
                error: this.props.emailError,
                maestroStyle: _,
                name: "email",
                type: p.AuthTextInputType.EMAIL,
                variant: a
            }), !this.props.thirdPartyInitiatedSignup && s.default.createElement(l.AuthTextField, {
                value: this.props.passwordValue,
                placeholder: M.placeholder || (this.props.maestroStyle ? o._("Minimum 6 characters") : o._("Password")),
                name: "password",
                className: V,
                inputClassName: "password-input",
                onChange: v,
                measureStrength: M.measureStrength,
                label: M.label || (_ ? o._("Password") : void 0),
                error: this.props.passwordError,
                maestroStyle: _,
                disabled: g,
                variant: a,
                passwordStrengthProps: M.strengthMeterProps,
                type: p.AuthTextInputType.PASSWORD
            }))), s.default.createElement(i.Recaptcha, {
                ref: this.setCaptchaComponent,
                email: this.props.emailValue,
                onSubmit: this.props.onSubmit,
                source: "REGISTER"
            }), s.default.createElement(n.AuthCheckbox, {
                variant: O,
                className: "agree",
                disabled: S.disabled || g,
                maestroStyle: _,
                error: this.props.tosError,
                inline: B,
                onChange: v,
                name: "tos_agree",
                checked: this.props.tosChecked,
                label: S.label || P,
                unsafeLabelHTML: S.unsafeLabelHTML
            }), y && s.default.createElement(n.AuthCheckbox, {
                variant: O,
                className: "agree marketing-opt-in-checkbox",
                disabled: g,
                maestroStyle: _,
                inline: B,
                onChange: v,
                checked: E,
                name: "marketing_opt_in",
                label: o._("I’d like to receive direct marketing email updates from Dropbox")
            }), s.default.createElement("button", {
                className: x,
                type: "submit",
                disabled: this.props.disabled || k.disabled || this.props.isSubmitting
            }, s.default.createElement("span", null, k.text || o._("Create an account"))), !L && N && I, !L && N && T))
        }, t
    })(s.default.Component);
    t.RegisterFormView = d
});
//# sourceMappingURL=view.min.js-vflkkSEal.map