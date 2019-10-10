define(["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/auth/login/2fa/trust_checkbox", "modules/clean/auth/login/types", "modules/clean/react/image", "modules/clean/react/sprite", "modules/clean/static_urls"], function(e, t, a, r, s, c, l, n, i, o) {
    "use strict";

    function u(e) {
        return e === l.TwoFactorType.SMS ? s._("Send SMS instead") : s._("Use mobile authenticator instead")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = a.__importDefault(r);
    var m = function() {
            return r.default.createElement(n.Image, {
                src: o.static_url("/static/images/security_keys/insert-vflkCfC4_.png"),
                srcHiRes: o.static_url("/static/images/security_keys/insert@2x-vflTxG2RJ.png"),
                className: "seckey-insert"
            })
        },
        d = function() {
            return r.default.createElement(n.Image, {
                src: o.static_url("/static/images/icons/ajax-loading-small-vfl3Wt7C_.gif"),
                srcHiRes: o.static_url("/static/images/icons/ajax-loading-small@2x-vflAxdZTP.gif"),
                className: "seckey-loading-status"
            })
        },
        f = function(e) {
            return r.default.createElement("div", {
                className: "two-factor-seckey-instructions"
            }, r.default.createElement("p", null, r.default.createElement("span", {
                style: {
                    fontWeight: "bold"
                }
            }, s._("Insert your security key to use it")), " ", e.securityKeyState === l.SecurityKeyState.LOADING && r.default.createElement(d, null), e.securityKeyState === l.SecurityKeyState.FOUND && r.default.createElement(y, null)), s._("After inserting, tap your key if it has a button or gold disk."))
        },
        y = function() {
            return r.default.createElement(i.Sprite, {
                group: "web",
                name: "bulletpoint-check",
                alt: "",
                className: "seckey-loading-status"
            })
        };
    t.SecKey2FAForm = function(e) {
        return r.default.createElement("form", {
            className: "two-factor-form clearfix 2fa-seckey-form"
        }, r.default.createElement("div", {
            className: "login-info two-factor-uses-u2f"
        }, r.default.createElement(m, null), e.securityKeyState !== l.SecurityKeyState.NOT_FOUND && r.default.createElement(f, {
            securityKeyState: e.securityKeyState
        }), r.default.createElement("div", {
            className: "text-input"
        }, r.default.createElement("div", {
            className: "text-input-error-wrapper"
        })), e.securityKeyState === l.SecurityKeyState.NOT_FOUND && r.default.createElement("div", {
            className: "two-factor-seckey-instructions"
        }, r.default.createElement("div", {
            style: {
                color: "red"
            }
        }, r.default.createElement("span", {
            className: "error-msg"
        }, e.error || s._("Key not found."))), r.default.createElement("button", {
            className: "button-tertiary two-factor-seckey-retry",
            onClick: e.onRetry
        }, s._("Retry"))), !e.hideTrustCheckbox && r.default.createElement(c.TwoFactorTrustCheckbox, {
            checked: e.trusted,
            maestroStyle: e.maestroStyle,
            onChange: e.onInputChange,
            tooltipPosition: e.trustTooltipPosition,
            variant: e.variant
        }), r.default.createElement("div", {
            className: "two-factor-use-phone-instead"
        }, r.default.createElement("a", {
            href: "#",
            onClick: e.onChange2FA
        }, u(e.secondaryTwoFactorType)))))
    }
});
//# sourceMappingURL=seckey_form.min.js-vflSupVo0.map