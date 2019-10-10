define(["require", "exports", "tslib", "modules/clean/auth/login/api", "modules/clean/auth/login/types"], function(t, e, s, o, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), o = s.__importStar(o);
    var i = (function() {
        function t() {
            var t = this;
            this.shouldCheckSsoState = function(t) {
                return t.match(/^[^@\s]+@[^@\s]+\.[A-Za-z]{2,}$/)
            }, this.checkSsoState = function(e, s) {
                return t.shouldCheckSsoState(e) ? t.CACHE[e] ? void s(e, t.CACHE[e]) : void(t.INFLIGHT[e] || (t.INFLIGHT[e] = !0, o.checkSsoState(e).then(function(o) {
                    switch (o.user_sso_state) {
                        case "optional":
                            t.CACHE[e] = a.SsoState.OPTIONAL;
                            break;
                        case "required":
                            t.CACHE[e] = a.SsoState.REQUIRED;
                            break;
                        default:
                            t.CACHE[e] = a.SsoState.OFF
                    }
                    s(e, t.CACHE[e])
                }).finally(function() {
                    delete t.INFLIGHT[e]
                }))) : void s(e, a.SsoState.OFF)
            }, this.CACHE = {}, this.INFLIGHT = {}
        }
        return t
    })();
    e.SsoStateChecker = i
});
//# sourceMappingURL=sso_utils.min.js-vfliNk25p.map