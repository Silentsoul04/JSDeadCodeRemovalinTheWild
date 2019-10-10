define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/auth/common/inputs/text", "modules/clean/auth/common/types", "modules/clean/react_format"], function(e, t, a, n, i, l, o, m, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = a.__importDefault(n), i = a.__importDefault(i), t.Email2FAForm = function(e) {
        var t = i.default.createElement("button", {
            className: n.default("mc-button mc-button-primary", {
                "inline-submit": e.inlineSubmit,
                "login-button": !e.inlineSubmit
            }),
            type: "submit"
        }, l._("Enter"));
        return i.default.createElement("form", {
            className: "two-factor-form clearfix 2fa-email-form",
            onSubmit: e.onSubmit
        }, i.default.createElement("div", {
            className: "login-info two-factor-uses-email"
        }, u.reactFormat(l._("We sent a code to %(email)s and any devices you’ve linked to this account. Enter the code to continue."), {
            span: i.default.createElement("span", {
                className: "tfa-email"
            }),
            email: e.email
        })), i.default.createElement("div", {
            className: n.default({
                "inline-input-submit-pair": e.inlineSubmit,
                "backup-verification-code-form": e.inlineSubmit
            })
        }, i.default.createElement(o.AuthTextField, {
            className: "login-text-input inline-input",
            disabled: !1,
            error: e.error,
            maestroStyle: e.maestroStyle,
            name: "code",
            onChange: e.onInputChange,
            value: e.value,
            placeholder: l._("6-digit code"),
            type: m.AuthTextInputType.TEXT,
            variant: e.variant,
            autoFocus: !0,
            autoComplete: !1
        }), e.inlineSubmit && t), !e.inlineSubmit && t, i.default.createElement("div", {
            className: "two-factor-need-help"
        }, i.default.createElement("a", {
            href: "#",
            onClick: e.onResendCodeClick,
            className: "resend-two-factor-code two-factor-uses-sms"
        }, l._("Resend code"))))
    }
});
//# sourceMappingURL=email_form.min.js-vfl0OpCIh.map