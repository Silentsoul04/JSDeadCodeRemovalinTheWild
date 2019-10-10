define(["require", "exports", "tslib", "modules/clean/ajax_as_promised", "modules/clean/auth/login/types"], function(e, r, n, t, a) {
    "use strict";

    function i(e) {
        return new Promise(function(r) {
            return t.WebRequest({
                url: "/sso_state",
                data: {
                    email: e
                },
                success: function(e) {
                    return r(JSON.parse(e))
                }
            })
        })
    }

    function o(e, r) {
        var n;
        switch (e) {
            case "multi":
                n = "/ajax_multi_login";
                break;
            case "pairing":
                n = "/team/join/new_pair_login_ajax";
                break;
            case "cli_link":
                n = "/cli_link";
                break;
            case "cli_link_nonce":
                n = "/cli_link_nonce";
                break;
            default:
                n = "/ajax_login"
        }
        return new Promise(function(e, i) {
            return t.WebRequest({
                url: n,
                type: "POST",
                data: r,
                success: function(r) {
                    e(JSON.parse(r))
                },
                error: function(r, n, t) {
                    "{" !== t[0] && t.indexOf(":") === -1 ? e({
                        status: a.LoginResponseStatus.ERROR,
                        html_response: !1,
                        message: t
                    }) : i(JSON.parse(t))
                }
            })
        })
    }

    function s(e, r) {
        return new Promise(function(n, a) {
            return t.WebRequest({
                url: "/twofactor_resend",
                data: {
                    backup: e,
                    mobile_push: r
                },
                success: n,
                error: a
            })
        })
    }

    function c() {
        return new Promise(function(e, r) {
            return t.WebRequest({
                url: "/account/twofactor/u2f_start_authentication",
                success: e,
                error: r
            })
        })
    }

    function u(e, r) {
        var n;
        switch (e) {
            case "multi":
                n = "/ajax_multi_verify_code";
                break;
            case "pairing":
                n = "/team/join/new_pair_login_ajax";
                break;
            case "cli_link":
            case "cli_link_nonce":
                n = "/cli_link_twofactor";
                break;
            case "admin":
                n = "/admin/login/twofactor";
                break;
            default:
                n = "/ajax_verify_code"
        }
        return new Promise(function(e, a) {
            return t.WebRequest({
                url: n,
                type: "POST",
                data: r,
                success: function(r) {
                    return e(JSON.parse(r))
                },
                error: function(e, r, n) {
                    return a(JSON.parse(n))
                }
            })
        })
    }

    function l() {
        return t.SilentBackgroundRequest({
            url: "/profile_services/log",
            data: {
                event_name: "login_callback_success"
            }
        })
    }

    function _() {
        return t.SilentBackgroundRequest({
            url: "/profile_services/log",
            data: {
                event_name: "login_callback_error"
            }
        })
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), t = n.__importStar(t), r.checkSsoState = i, r.submitCredentialsForm = o, r.resendTwoFactorCode = s, r.retryU2fAuthentication = c, r.submitTwoFactorForm = u, r.logProfileServicesSuccess = l, r.logProfileServicesFailure = _
});
//# sourceMappingURL=api.min.js-vfl-EBUEc.map