
        (function() {
                                    c = null;
                                    break a
                                }
                            c = e
                        }
                        d = c;
                        c = new T(d, this);
                        e = !0;
                        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                            a: {
                                var f = !1;
                                if (0 == d.keyCode) try {
                                    d.keyCode = -1;
                                    break a
                                } catch (N) {
                                    f = !0
                                }
                                if (f || void 0 == d.returnValue) d.returnValue = !0
                            }
                            d = [];
                            for (f = c.a; f; f = f.parentNode) d.push(f);f = a.type;
                            for (var g = d.length - 1; 0 <= g; g--) {
                                c.a = d[g];
                                var h = ya(d[g], f, !0, c);
                                e = e && h
                            }
                            for (g = 0; g < d.length; g++) c.a = d[g],
                            h = ya(d[g], f, !1, c),
                            e = e && h
                        }
                        return e
                    }
                    return xa(a, new T(b, this))
                },
                Y = function(a) {___jdce_logger("lacuna_cache/exported_81nlgo.js", 16563, 16677);
                    a = a[W];
                    return a instanceof V ? a : null
                },
                Z = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
                sa = function(a) {___jdce_logger("lacuna_cache/exported_81nlgo.js", 16774, 17013);
                    if ("function" == m(a)) return a;
                    a[Z] || (a[Z] = function(b) {___jdce_logger("lacuna_cache/exported_81nlgo.js", 16878, 16961);
                        return a.handleEvent(b)
                    });
                    return a[Z]
                };
            ra(document, "DOMContentLoaded", function() {___jdce_logger("lacuna_cache/exported_81nlgo.js", 17060, 17143);
                document.images && ((new Image).src = s)
            });
        })();
    