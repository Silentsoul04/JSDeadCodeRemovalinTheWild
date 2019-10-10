define(["require", "exports", "tslib", "external/classnames", "react", "modules/core/i18n", "modules/clean/auth/common/error", "modules/clean/auth/common/types", "modules/clean/auth/common/utils", "modules/clean/components/password_strength_meter"], function(e, t, s, r, a, o, l, p, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = s.__importDefault(r), a = s.__importDefault(a);
    var u = function(e) {
            var t = e.error && (e.error.message_html || e.error.message_text),
                s = r.default("text-input-input", e.className, {
                    "input-error": !!t
                }),
                l = e.passwordStrengthProps || {},
                n = o._("Good passwords are hard to guess. Use uncommon words or inside jokes,           non-standard uPPercasing, creative spelllling, and non-obvious numbers and symbols");
            return a.default.createElement("div", {
                className: "text-input-wrapper"
            }, e.type === p.AuthTextInputType.PASSWORD && e.measureStrength && a.default.createElement(i.PasswordStrengthMeter, {
                password: e.value || "",
                zxcvbnPostTti: !0,
                className: e.variant,
                bubblePosition: l.position,
                bubbleDescription: l.description || n,
                bubbleClassName: l.className
            }), a.default.createElement("input", {
                id: e.id,
                type: e.type,
                className: s,
                name: e.name,
                value: e.value,
                onChange: e.onChange,
                disabled: e.disabled,
                autoFocus: e.autoFocus,
                autoComplete: e.autoComplete ? "on" : "off"
            }), !e.value && a.default.createElement("label", {
                htmlFor: e.id
            }, e.placeholder))
        },
        m = (function(e) {
            function t(t) {
                var s = e.call(this, t) || this;
                return s.id = n.generateId(t.name), s
            }
            return s.__extends(t, e), t.prototype.render = function() {
                var e = this.props.maestroStyle ? null : this.props.className,
                    t = r.default("text-input", this.props.variant, e),
                    s = a.default.createElement(l.AuthError, {
                        error: this.props.error
                    }),
                    o = a.default.createElement("div", {
                        className: t
                    }, !this.props.maestroStyle && s, a.default.createElement(u, {
                        id: this.id,
                        name: this.props.name,
                        onChange: this.props.onChange,
                        value: this.props.value,
                        disabled: this.props.disabled,
                        className: this.props.inputClassName,
                        error: this.props.error,
                        variant: this.props.variant,
                        type: this.props.type,
                        placeholder: this.props.placeholder,
                        measureStrength: this.props.measureStrength,
                        passwordStrengthProps: this.props.passwordStrengthProps,
                        autoComplete: this.props.autoComplete || !1,
                        autoFocus: this.props.autoFocus || !1
                    }), this.props.maestroStyle && s);
                if (!this.props.maestroStyle) return o;
                var p = r.default(this.props.className, {
                    "register-form__name-field": "email" !== this.props.type && "password" !== this.props.type,
                    "register-form__field": "email" === this.props.type || "password" === this.props.type
                });
                return a.default.createElement("div", {
                    className: p
                }, this.props.label && a.default.createElement("label", {
                    className: "register-form__field-label",
                    htmlFor: this.id
                }, this.props.label), o)
            }, t
        })(a.default.Component);
    t.AuthTextField = m
});
//# sourceMappingURL=text.min.js-vflYS2_1A.map