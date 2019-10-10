define(["require", "exports", "tslib", "modules/core/browser_detection", "modules/clean/security/util"], function(e, t, r, n, i) {
    "use strict";

    function o() {
        return r.__awaiter(this, void 0, Promise, function() {
            var t, i;
            return r.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return void 0 === window.crypto || void 0 === window.crypto.subtle || n.edge === !0 && !n.edgeChromium() ? [4, new Promise(function(t, r) {
                            e(["modules/clean/security/mscrypto_shim"], t, r)
                        }).then(r.__importStar)] : [2, window.crypto];
                    case 1:
                        if (t = o.sent().msCryptoWrapper, i = t(), void 0 !== i) return [2, i];
                        throw new Error("WebCrypto not supported")
                }
            })
        })
    }

    function s(e, t, n) {
        return r.__awaiter(this, void 0, Promise, function() {
            var s = this;
            return r.__generator(this, function(u) {
                return [2, o().then(function(o) {
                    return r.__awaiter(s, void 0, void 0, function() {
                        var s, u, a, c, p, d, l, y;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return s = o.getRandomValues(new Uint8Array(12)), [4, o.subtle.generateKey({
                                        name: "AES-GCM",
                                        length: 128
                                    }, !0, ["encrypt", "decrypt"])];
                                case 1:
                                    return u = r.sent(), [4, o.subtle.encrypt({
                                        name: "AES-GCM",
                                        iv: s
                                    }, u, t)];
                                case 2:
                                    return a = r.sent(), [4, o.subtle.exportKey("raw", u)];
                                case 3:
                                    return c = r.sent(), [4, o.subtle.importKey("spki", e, {
                                        name: "RSA-OAEP",
                                        hash: "SHA-256"
                                    }, !0, ["encrypt"])];
                                case 4:
                                    return p = r.sent(), [4, o.subtle.encrypt({
                                        name: "RSA-OAEP"
                                    }, p, c)];
                                case 5:
                                    return d = r.sent(), l = new ArrayBuffer(2), y = new DataView(l), y.setInt16(0, n), [2, i.concatenateArrayBuffers(l, d, s, a)]
                            }
                        })
                    })
                })]
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.encryptWithPublicKey = s
});
//# sourceMappingURL=crypto.min.js-vflSMg9pt.map