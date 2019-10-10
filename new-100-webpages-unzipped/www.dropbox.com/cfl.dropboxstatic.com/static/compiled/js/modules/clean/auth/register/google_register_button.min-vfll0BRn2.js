define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/auth/common/utils"], function(e, t, o, a, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = o.__importDefault(a), r = o.__importDefault(r);
    var l = function(e) {
        return e ? n._("Sign up free with Google") : n._("Sign up with Google")
    };
    t.GoogleRegisterButton = function(e) {
        var t, o = e.buttonProps || {},
            n = i.isGoogleGrowthExperimentOn(e.variant || ""),
            s = a.default("auth-google", "button-primary", o.className, (t = {
                "exp-growth_web_google_register": n
            }, t["button-" + o.variant] = "standard" !== o.variant, t["exp-growth_web_google_register__" + e.variant] = n, t)),
            u = o.text || l(n);
        return r.default.createElement("button", {
            className: s,
            type: "button",
            onClick: e.onClick,
            disabled: e.disabled || o.disabled
        }, r.default.createElement("span", {
            className: "sign-up-text"
        }, u))
    }
});
//# sourceMappingURL=google_register_button.min.js-vflFSSwZU.map