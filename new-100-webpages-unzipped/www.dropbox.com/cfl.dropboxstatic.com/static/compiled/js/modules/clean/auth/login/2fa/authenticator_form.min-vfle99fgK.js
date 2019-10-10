define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/auth/common/inputs/text", "modules/clean/auth/common/types", "modules/clean/auth/common/utils", "modules/clean/auth/login/2fa/trust_checkbox"], function(e, t, a, n, o, i, l, r, u, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = a.__importDefault(n), o = a.__importDefault(o), t.Authenticator2FAForm = function(e) {
        var t = o.default.createElement("button", {
            className: n.default("mc-button mc-button-primary", {
                "inline-submit": e.inlineSubmit,
                "login-button": !e.inlineSubmit
            }),
            type: "submit"
        }, i._("Enter"));
        return o.default.createElement("form", {
            className: "two-factor-form clearfix 2fa-phone-form",
            onSubmit: e.onSubmit
        }, o.default.createElement("div", {
            className: "login-info two-factor-uses-authenticator"
        }, i._("Enter the code generated by your authenticator app.")), o.default.createElement("div", {
            className: n.default({
                "inline-input-submit-pair": e.inlineSubmit,
                "backup-verification-code-form": e.inlineSubmit
            })
        }, o.default.createElement(l.AuthTextField, {
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
        }), e.inlineSubmit && t), !e.hideTrustCheckbox && o.default.createElement(c.TwoFactorTrustCheckbox, {
            checked: e.trusted,
            maestroStyle: e.maestroStyle,
            onChange: e.onInputChange,
            tooltipPosition: e.trustTooltipPosition,
            variant: e.variant
        }), !e.inlineSubmit && t, !e.hideHelp && o.default.createElement("div", {
            className: "two-factor-need-help"
        }, o.default.createElement("a", {
            href: u.twoFactorRecoveryUrl(e.rememberMe, e.continuationUrl),
            className: "twofactor_recovery_url"
        }, i._("Having trouble getting a code?"))))
    }
});
//# sourceMappingURL=authenticator_form.min.js-vflq7IzP-.map