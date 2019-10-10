
        (function() {
            var f = window.performance || {};
            var g = window._wml = window._wml || {};
            var h = [],
                i, j;
            if (f.now) {
                g.hasPerfNow = function() {
                    return true
                };
                i = f.now();
                j = f.now.bind(f)
            } else {
                g.hasPerfNow = function() {
                    return false
                };
                i = new Date().getTime();
                j = function now() {
                    return new Date().getTime() - i
                }
            }

            function a(a, b, c, d) {
                return {
                    duration: a,
                    entryType: b,
                    name: c,
                    startTime: d
                }
            }

            function b(a, b, c) {
                var d = [];
                var e = 0;
                c = isNaN(c) ? h.length : c;
                for (var f = 0; f < h.length && e < c; f++) {
                    if (h[f][a] === b) {
                        d.push(h[f]);
                        e++
                    }
                }
                return d
            }

            function c(a, c) {
                return b("name", a, c)
            }

            function d(a, c) {
                return b("entryType", a, c)
            }

            function e(a) {
                return a.mark && a.measure && a.getEntries && a.getEntriesByType && a.getEntriesByName && a
            }
            g.perf = e(f) || {
                entries: h,
                start: i,
                now: j,
                mark: function mark(b) {
                    h.push(a(0, "mark", b, j()))
                },
                measure: function measure(b, d, e) {
                    if (!b || !d || !e) return;
                    var f = c(d, 1)[0],
                        g = c(e, 1)[0];
                    if (f && g) {
                        h.push(a(g.startTime - f.startTime, "measure", b, f.startTime))
                    }
                },
                getEntries: function getEntries() {
                    return h
                },
                getEntriesByType: function getEntriesByType(a) {
                    return d(a)
                },
                getEntriesByName: function getEntriesByName(a) {
                    return c(a)
                },
                _feN: c,
                _feT: d
            };
            g.perf.mark("index-start")
        })();
    