
        ! function(c, f) {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 11, 1557);
            var t, o, i, e = [],
                r = {
                    passive: !0,
                    capture: !0
                },
                n = new Date,
                a = "pointerup",
                u = "pointercancel";

            function p(n, e) {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 280, 373);
                t || (t = e, o = n, i = new Date, w(f), s())
            }

            function s() {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 387, 535);
                0 <= o && o < i - n && (e.forEach(function(n) {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 452, 511);
                    n(o, t)
                }), e = [])
            }

            function l(n) {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 549, 1196);
                if (n.cancelable) {
                    var e = (1e12 < n.timeStamp ? new Date : performance.now()) - n.timeStamp;
                    "pointerdown" == n.type ? function(n, e) {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 742, 1148);
                        function t() {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 783, 864);
                            p(n, e), i()
                        }

                        function o() {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 890, 962);
                            i()
                        }

                        function i() {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 988, 1079);
                            f(a, t, r), f(u, o, r)
                        }
                        c(a, t, r), c(u, o, r)
                    }(e, n) : p(e, n)
                }
            }

            function w(e) {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 1210, 1390);
                ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n) {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 1313, 1375);
                    e(n, l, r)
                })
            }
            w(c), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(n) {___jdce_logger("lacuna_cache/exported_z1rrm9.js", 1489, 1547);
                e.push(n), s()
            }
        }(addEventListener, removeEventListener)
    