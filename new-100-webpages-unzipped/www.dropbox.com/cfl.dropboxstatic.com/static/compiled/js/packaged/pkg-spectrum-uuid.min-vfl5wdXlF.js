define("spectrum/util/uuid_generator", ["require", "exports"], function(e, r) {
    "use strict";

    function t(e) {
        var r = function() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        };
        return e + "-" + (r() + r() + r() + r())
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.generateUUID = t
});
//# sourceMappingURL=pkg-spectrum-uuid.min.js-vflIVptHA.map