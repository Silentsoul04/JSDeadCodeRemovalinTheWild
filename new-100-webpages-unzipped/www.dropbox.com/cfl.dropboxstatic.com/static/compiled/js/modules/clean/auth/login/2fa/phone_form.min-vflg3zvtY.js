define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/auth/common/inputs/text", "modules/clean/auth/common/types", "modules/clean/auth/common/utils", "modules/clean/auth/login/2fa/trust_checkbox", "modules/clean/react_format"], function(e, t, a, o, n, i, l, r, s, u, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = a.__importDefault(o), n = a.__importDefault(n), t.Phone2FAForm = function(e) {
        var t = n.default.createElement("button", {
            className: o.default("mc-button mc-button-primary", {
                "inline-submit": e.inlineSubmit,
                "login-button": !e.inlineSubmit
            }),
            type: "submit"
        }, i._("Enter"));
        return n.default.createElement("form", {
            className: "two-factor-form clearfix 2fa-phone-form",
            onSubmit: e.onSubmit
        }, n.default.createElement("div", {
            className: "login-info two-factor-uses-sms"
        }, c.reactFormat(i._("We sent a code to your phone number ending in <span>%(last_two_digits)s</span>."), {
            span: n.default.createElement("span", {
                className: "last-two-digits"
            }),
            last_two_digits: e.lastTwoDigits
        })), n.default.createElement("div", {
            className: o.default({
                "inline-input-submit-pair": e.inlineSubmit,
                "backup-verification-code-form": e.inlineSubmit
            })
        }, n.default.createElement(l.AuthTextField, {
            className: "login-text-input inline-input",
            disabled: !1,
            error: e.error,
            maestroStyle: e.maestroStyle,
            name: "code",
            onChange: e.onInputChange,
            value: e.value,
            placeholder: i._("6-digit code"),
            type: r.AuthTextInputType.TEXT,
            variant: e.variant,
            autoFocus: !0,
            autoComplete: !1
        }), e.inlineSubmit && t), !e.hideTrustCheckbox && n.default.createElement(u.TwoFactorTrustCheckbox, {
            checked: e.trusted,
            maestroStyle: e.maestroStyle,
            onChange: e.onInputChange,
            tooltipPosition: e.trustTooltipPosition,
            variant: e.variant
        }), !e.inlineSubmit && t, !e.hideHelp && n.default.createElement("div", {
            className: "two-factor-need-help"
        }, n.default.createElement("a", {
            href: "#",
            onClick: e.onResendCodeClick,
            className: "resend-two-factor-code two-factor-uses-sms"
        }, i._("Resend code")), n.default.createElement("a", {
            href: s.twoFactorRecoveryUrl(e.rememberMe, e.continuationUrl),
            className: "twofactor_recovery_url"
        }, i._("Having trouble getting a code?"))))
    }
});
//# sourceMappingURL=phone_form.min.js-vflSQBTtH.map