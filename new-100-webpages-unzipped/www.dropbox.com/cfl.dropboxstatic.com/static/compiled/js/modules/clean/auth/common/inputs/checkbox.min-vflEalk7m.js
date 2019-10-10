define(["require", "exports", "tslib", "external/purify", "react", "external/classnames", "modules/clean/auth/common/error", "modules/clean/auth/common/utils"], function(e, t, a, l, r, n, c, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), l = a.__importStar(l), r = a.__importDefault(r), n = a.__importDefault(n);
    var u = function(e) {
            var t = e.label,
                a = e.htmlFor,
                n = e.unsafeLabelHTML;
            return t ? r.default.createElement("label", {
                htmlFor: a,
                className: "checkbox_label"
            }, r.default.createElement("span", null, t)) : n ? r.default.createElement("label", {
                htmlFor: a,
                className: "checkbox_label"
            }, r.default.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: l.sanitize(n)
                }
            })) : null
        },
        s = (function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.id = o.generateId(t.name), a
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.checked,
                    a = e.className,
                    l = e.disabled,
                    o = e.error,
                    s = e.inline,
                    i = e.label,
                    m = e.maestroStyle,
                    d = e.name,
                    h = e.onChange,
                    f = e.unsafeLabelHTML,
                    b = e.variant,
                    p = n.default("checkbox", b, a, {
                        "checkbox-inline": s
                    }),
                    _ = r.default.createElement("input", {
                        type: "checkbox",
                        id: this.id,
                        name: d,
                        checked: t,
                        onChange: h,
                        disabled: l,
                        "aria-checked": t
                    });
                m && (_ = r.default.createElement("label", {
                    className: "maestro_checkbox",
                    htmlFor: this.id
                }, _, r.default.createElement("span", null)));
                var x = r.default.createElement(c.AuthError, {
                    error: o
                });
                return r.default.createElement("div", {
                    className: p
                }, !m && x, _, r.default.createElement(u, {
                    htmlFor: this.id,
                    label: i,
                    unsafeLabelHTML: f
                }), m && x)
            }, t
        })(r.default.Component);
    t.AuthCheckbox = s
});
//# sourceMappingURL=checkbox.min.js-vflqSoyiy.map