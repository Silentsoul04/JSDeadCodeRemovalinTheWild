define(["require", "exports", "tslib", "modules/clean/security/util", "modules/clean/security/crypto", "modules/core/exception"], function(e, r, t, n, o, s) {
    "use strict";

    function i(e, r) {
        return t.__awaiter(this, void 0, Promise, function() {
            var i, a, c, p, u, d, l;
            return t.__generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        if ("" === e) return [2, ""];
                        i = encodeURIComponent(e), t.label = 1;
                    case 1:
                        return t.trys.push([1, 5, , 6]), a = "wrapped_password_" + r.type + "_", "RSA-OAEP" !== r.type ? [3, 3] : (c = void 0 !== window.performance ? window.performance.now() / 1e3 : 0, p = r.timestamp + c, u = n.b64urldecode(r.key), [4, o.encryptWithPublicKey(u, n.stringToBytes(JSON.stringify({
                            timestamp: p,
                            password: i
                        })), r.version)]);
                    case 2:
                        return d = t.sent(), [2, a + n.b64urlencode(d)];
                    case 3:
                        throw new Error("Unsupported algorithm");
                    case 4:
                        return [3, 6];
                    case 5:
                        if (l = t.sent(), r.plaintextFallback === !0) return s.reportException({
                            err: l,
                            severity: "non-critical"
                        }), [2, "wrapped_password_PLAINTEXT_" + i];
                        throw l;
                    case 6:
                        return [2]
                }
            })
        })
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), n = t.__importStar(n), r.wrapPassword = i
});
//# sourceMappingURL=passwords.min.js-vfld50Gci.map