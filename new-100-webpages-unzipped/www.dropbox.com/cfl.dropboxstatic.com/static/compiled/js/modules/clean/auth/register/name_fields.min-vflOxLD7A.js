define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/auth/common/inputs/text", "modules/clean/auth/common/types", "modules/clean/auth/common/utils"], function(e, a, t, l, n, r, m, s, o) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), l = t.__importDefault(l), n = t.__importDefault(n), a.RegisterFormNameFields = function(e) {
        var a = e.fnameProps || {};
        if (e.combinedName) {
            var t = l.default("exp-input-combined-name", "clearfix", a.className);
            return n.default.createElement("div", {
                className: "register-form__name-fields"
            }, n.default.createElement(m.AuthTextField, {
                placeholder: a.placeholder || (e.maestroStyle ? r._("Jane Doe") : r._("Full name")),
                name: "fname",
                value: e.fnameValue,
                onChange: e.onInputChange,
                disabled: e.disabled || a.readonly || !1,
                label: a.label || (e.maestroStyle ? r._("Full name") : void 0),
                error: e.fnameError,
                maestroStyle: e.maestroStyle,
                className: t,
                variant: e.variant,
                type: s.AuthTextInputType.TEXT
            }))
        }
        var i = e.lnameProps || {},
            d = ["first", "text-input__margin-right"],
            u = ["second"],
            c = ["input-fname", a.className],
            f = ["input-lname", i.className];
        o.lastNameGoesFirst() ? (f = f.concat(d), c = c.concat(u)) : (c = c.concat(d), f = f.concat(u));
        var p = n.default.createElement(m.AuthTextField, {
                className: l.default(c),
                name: "fname",
                value: e.fnameValue,
                onChange: e.onInputChange,
                error: e.fnameError,
                maestroStyle: e.maestroStyle,
                disabled: e.disabled || a.readonly || !1,
                label: a.label || (e.maestroStyle ? r._("First name") : void 0),
                placeholder: a.placeholder || (e.maestroStyle ? r._("Jane") : r._("First name")),
                variant: e.variant,
                type: s.AuthTextInputType.TEXT
            }),
            y = n.default.createElement(m.AuthTextField, {
                className: l.default(f),
                name: "lname",
                value: e.lnameValue,
                onChange: e.onInputChange,
                error: e.lnameError,
                disabled: e.disabled || i.readonly || !1,
                label: i.label || (e.maestroStyle ? r._("Last name") : void 0),
                placeholder: i.placeholder || (e.maestroStyle ? r._("Doe") : r._("Last name")),
                maestroStyle: e.maestroStyle,
                variant: e.variant,
                type: s.AuthTextInputType.TEXT
            });
        return o.lastNameGoesFirst() ? n.default.createElement("div", {
            className: "register-form__name-fields"
        }, y, p) : n.default.createElement("div", {
            className: "register-form__name-fields"
        }, p, y)
    }
});
//# sourceMappingURL=name_fields.min.js-vflCQqVIf.map