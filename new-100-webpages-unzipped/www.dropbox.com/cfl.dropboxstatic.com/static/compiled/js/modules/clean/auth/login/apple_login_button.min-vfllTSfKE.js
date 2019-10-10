define(["require", "exports", "tslib", "react", "external/classnames", "modules/core/i18n", "modules/clean/auth/login/login_error"], function(e, t, a, l, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), l = a.__importDefault(l), r = a.__importDefault(r), t.AppleLoginButton = function(e) {
        var t = e.buttonProps || {},
            a = r.default("auth-apple", "button-primary", t.className),
            o = t.text || n._("Sign in with Apple");
        return l.default.createElement("div", {
            className: "login-form-container__apple-div"
        }, l.default.createElement("button", {
            className: a,
            onClick: e.onClick,
            type: "button",
            disabled: e.disabled || t.disabled
        }, l.default.createElement("div", {
            className: "sign-in-text"
        }, o)), e.error && l.default.createElement(i.LoginError, {
            className: "apple-login-error",
            message: e.error
        }))
    }
});
//# sourceMappingURL=apple_login_button.min.js-vflgldE-L.map