
        // First Input Delay tracking. High priority loading to not miss event
        // https://github.com/GoogleChromeLabs/first-input-delay/blob/master/dist/first-input-delay.min.js
        ! function(n, e) {___jdce_logger("lacuna_cache/exported_05q5d6.js", 197, 1743);
            var t, o, i, c = [],
                f = {
                    passive: !0,
                    capture: !0
                },
                r = new Date,
                a = "pointerup",
                u = "pointercancel";

            function p(n, c) {___jdce_logger("lacuna_cache/exported_05q5d6.js", 466, 559);
                t || (t = c, o = n, i = new Date, w(e), s())
            }

            function s() {___jdce_logger("lacuna_cache/exported_05q5d6.js", 573, 721);
                o >= 0 && o < i - r && (c.forEach(function(n) {___jdce_logger("lacuna_cache/exported_05q5d6.js", 638, 697);
                    n(o, t)
                }), c = [])
            }

            function l(t) {___jdce_logger("lacuna_cache/exported_05q5d6.js", 735, 1382);
                if (t.cancelable) {
                    var o = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                    "pointerdown" == t.type ? function(t, o) {___jdce_logger("lacuna_cache/exported_05q5d6.js", 928, 1334);
                        function i() {___jdce_logger("lacuna_cache/exported_05q5d6.js", 969, 1050);
                            p(t, o), r()
                        }

                        function c() {___jdce_logger("lacuna_cache/exported_05q5d6.js", 1076, 1148);
                            r()
                        }

                        function r() {___jdce_logger("lacuna_cache/exported_05q5d6.js", 1174, 1265);
                            e(a, i, f), e(u, c, f)
                        }
                        n(a, i, f), n(u, c, f)
                    }(o, t) : p(o, t)
                }
            }

            function w(n) {___jdce_logger("lacuna_cache/exported_05q5d6.js", 1396, 1576);
                ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {___jdce_logger("lacuna_cache/exported_05q5d6.js", 1499, 1561);
                    n(e, l, f)
                })
            }
            w(n), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(n) {___jdce_logger("lacuna_cache/exported_05q5d6.js", 1675, 1733);
                c.push(n), s()
            }
        }(addEventListener, removeEventListener);
    