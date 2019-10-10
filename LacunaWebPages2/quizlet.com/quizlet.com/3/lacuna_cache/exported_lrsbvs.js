
        ! function(n, e) {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 11, 1557);
            var t, o, i, c = [],
                f = {
                    passive: !0,
                    capture: !0
                },
                r = new Date,
                a = 'pointerup',
                u = 'pointercancel';

            function p(n, c) {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 280, 373);
                t || (t = c, o = n, i = new Date, w(e), s())
            }

            function s() {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 387, 535);
                o >= 0 && o < i - r && (c.forEach(function(n) {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 452, 511);
                    n(o, t)
                }), c = [])
            }

            function l(t) {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 549, 1196);
                if (t.cancelable) {
                    var o = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                    'pointerdown' == t.type ? function(t, o) {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 742, 1148);
                        function i() {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 783, 864);
                            p(t, o), r()
                        }

                        function c() {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 890, 962);
                            r()
                        }

                        function r() {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 988, 1079);
                            e(a, i, f), e(u, c, f)
                        }
                        n(a, i, f), n(u, c, f)
                    }(o, t) : p(o, t)
                }
            }

            function w(n) {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 1210, 1390);
                ['click', 'mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function(e) {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 1313, 1375);
                    n(e, l, f)
                })
            }
            w(n), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(n) {___jdce_logger("lacuna_cache/exported_lrsbvs.js", 1489, 1547);
                c.push(n), s()
            }
        }(addEventListener, removeEventListener);
    