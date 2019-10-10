define(["require", "exports", "tslib", "react", "external/classnames", "modules/core/i18n", "modules/clean/auth/login/login_error"], function(e, t, o, l, r, a, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), l = o.__importDefault(l), r = o.__importDefault(r), t.GoogleLoginButton = function(e) {
        var t = e.buttonProps || {},
            o = r.default("auth-google", "button-primary", t.className),
            i = t.text || a._("Sign in with Google");
        return l.default.createElement("div", {
            className: "login-form-container__google-div"
        }, l.default.createElement("button", {
            className: o,
            onClick: e.onClick,
            type: "button",
            disabled: e.disabled || t.disabled
        }, l.default.createElement("div", {
            className: "sign-in-text"
        }, i)), e.error && l.default.createElement(n.LoginError, {
            className: "google-login-error",
            message: e.error
        }))
    }
});
//# sourceMappingURL=google_login_button.min.js-vflG4I2lA.map