
        ! function(c, f) {
            var t, o, i, e = [],
                r = {
                    passive: !0,
                    capture: !0
                },
                n = new Date,
                a = "pointerup",
                u = "pointercancel";

            function p(n, e) {
                t || (t = e, o = n, i = new Date, w(f), s())
            }

            function s() {
                0 <= o && o < i - n && (e.forEach(function(n) {
                    n(o, t)
                }), e = [])
            }

            function l(n) {
                if (n.cancelable) {
                    var e = (1e12 < n.timeStamp ? new Date : performance.now()) - n.timeStamp;
                    "pointerdown" == n.type ? function(n, e) {
                        function t() {
                            p(n, e), i()
                        }

                        function o() {
                            i()
                        }

                        function i() {
                            f(a, t, r), f(u, o, r)
                        }
                        c(a, t, r), c(u, o, r)
                    }(e, n) : p(e, n)
                }
            }

            function w(e) {
                ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n) {
                    e(n, l, r)
                })
            }
            w(c), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(n) {
                e.push(n), s()
            }
        }(addEventListener, removeEventListener)
    