define(["require", "exports"], function(e, s) {
    "use strict";

    function f(e) {
        (self._DBX_UXA_bufferedClosures = self._DBX_UXA_bufferedClosures || []).push(e), i()
    }

    function _() {
        self._DBX_UXA_isUxaListening = !0, i()
    }

    function i() {
        if (self._DBX_UXA_isUxaListening) {
            var e = self._DBX_UXA_bufferedClosures = self._DBX_UXA_bufferedClosures || [],
                s = e.slice();
            e.length = 0;
            for (var f = 0, _ = s; f < _.length; f++) {
                (0, _[f])()
            }
        }
    }

    function n() {
        self._DBX_UXA_isUxaListening = void 0, self._DBX_UXA_bufferedClosures = void 0;
        try {
            delete self._DBX_UXA_isUxaListening, delete self._DBX_UXA_bufferedClosures
        } catch (e) {}
    }
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), s.runAfterUxaListening = f, s.uxaIsListening = _, s.resetForTesting = n
});
//# sourceMappingURL=lazy_ux_analytics.min.js-vflKhaRsI.map