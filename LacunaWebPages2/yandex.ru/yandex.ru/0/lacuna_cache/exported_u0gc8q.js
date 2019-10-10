
        ! function(i) {
            window.home = window.home || {}, home.reportOnVisible = function(e) {
                function n() {
                    navigator.sendBeacon && navigator.sendBeacon(e, " ") || ((new Image).src = e)
                }
                var t = i.visibilityState;
                t && "visible" !== t ? i.addEventListener("visibilitychange", function o() {
                    "visible" === i.visibilityState && (i.removeEventListener("visibilitychange", o, !1), n())
                }, !1) : n()
            }
        }(document);
    