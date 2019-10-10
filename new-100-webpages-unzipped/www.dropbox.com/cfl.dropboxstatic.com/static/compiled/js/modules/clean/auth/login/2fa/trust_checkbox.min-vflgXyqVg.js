define(["require", "exports", "tslib", "react", "modules/core/browser_detection", "modules/core/i18n", "modules/clean/auth/common/inputs/checkbox", "modules/clean/react/sprite_div", "modules/clean/react/tooltip"], function(e, t, o, r, i, n, a, s, l) {
    "use strict";

    function u() {
        return i.is_mobile_or_tablet() ? n._("Trust this device") : n._("Trust this computer")
    }

    function c() {
        return i.is_mobile_or_tablet() ? n._("Trusted devices will never ask you for a security code again. You should only trust this device if you trust everyone who uses it.") : n._("Trusted computers will never ask you for a security code again. You should only trust this computer if you trust everyone who uses it.")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = o.__importDefault(r), i = o.__importStar(i), s = o.__importDefault(s), l = o.__importStar(l);
    var d = function() {
        return r.default.createElement("div", {
            className: "two-factor-trusted-info"
        }, c())
    };
    t.TestOnlyTrustTooltipContent = d;
    var m = function(e) {
        return r.default.createElement("div", {
            className: "tooltip-wrapper info-icon"
        }, r.default.createElement(l.Tooltip, {
            position: l.TooltipPosition[e.position || "TOP"],
            tooltip_classname: "twofactor-trust-tooltip",
            tooltip_contents: r.default.createElement(d, null)
        }, r.default.createElement(s.default, {
            group: "web",
            name: "info",
            alt: n._("More information"),
            text: u(),
            spritePosition: "right"
        })))
    };
    t.TwoFactorTrustCheckbox = function(e) {
        return r.default.createElement(a.AuthCheckbox, {
            className: "remember-me",
            name: "trusted",
            checked: e.checked,
            inline: !0,
            disabled: !1,
            maestroStyle: e.maestroStyle,
            onChange: e.onChange,
            variant: e.variant,
            label: r.default.createElement(m, {
                position: e.tooltipPosition
            })
        })
    }
});
//# sourceMappingURL=trust_checkbox.min.js-vflV1nQdB.map