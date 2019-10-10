define(["require", "exports", "tslib", "external/purify", "react"], function(e, r, t, a, s) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), a = t.__importStar(a), s = t.__importDefault(s), r.AuthError = function(e) {
        return e.error && e.error.message_html ? s.default.createElement("div", {
            className: "text-input-error-wrapper",
            dangerouslySetInnerHTML: {
                __html: a.sanitize(e.error.message_html)
            }
        }) : e.error && e.error.message_text ? s.default.createElement("div", {
            className: "text-input-error-wrapper"
        }, s.default.createElement("span", {
            className: "error-message"
        }, e.error.message_text)) : s.default.createElement("div", {
            className: "text-input-error-wrapper"
        })
    }
});
//# sourceMappingURL=error.min.js-vflVTGy2A.map