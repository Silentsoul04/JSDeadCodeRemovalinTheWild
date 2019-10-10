
        (function(l) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 10, 317);
            var m = window.AmazonUIPageJS || window.P,
                p = m._namespace || m.attributeErrors,
                c = p ? p("GWMMetricsJS", "") : m;
            c.guardFatal ? c.guardFatal(l)(c, window) : c.execute(function() {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 251, 306);
                l(c, window)
            })
        })(function(l, m, p) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 319, 7182);
            (function(c) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 352, 3729);
                function k(a) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 382, 596);
                    if (a && !e[a] && (e[a] = !0, d[a])) {
                        a = d[a];
                        for (var b = 0; b < a.length; ++b) a[b]()
                    }
                }

                function f(a, b) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 614, 968);
                    if (a) {
                        var c = new Image;
                        c.onload = function() {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 740, 815);
                            b && b()
                        };
                        c.src = a;
                        g.push(c);
                        return c.complete
                    }
                }
                var d = {},
                    e = {},
                    h = {},
                    g = [];
                c.gm = {
                    s: function(a, b) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 1129, 1200);
                        h[a] = b
                    },
                    r: function(a) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 1225, 1296);
                        return h[a]
                    },
                    mpe: function(a,
                        b) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 1323, 1594);
                        c.uet && c.uet(a);
                        k(a);
                        b = b || {};
                        b.ld && c.uex && c.uex("ld");
                        c.P && l.register(a)
                    },
                    mse: function(a, b, d) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 1621, 2147);
                        if (b) {
                            var e = a + ":" + b;
                            c.uet && c.uet(a, b, {
                                wb: 1
                            });
                            k(e);
                            d = d || {};
                            d.ld && c.uex && c.uex("ld", b, {
                                wb: 1
                            });
                            c.P && l.register(e)
                        }
                    },
                    w: function(a, b) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 2172, 2290);
                        b && (e[a] ? b() : (d[a] || (d[a] = []), d[a].push(b)))
                    },
                    wil: function(a, b) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 2317, 2961);
                        if (b)
                            if (a && 0 !== a.length)
                                for (var c = 0, d = [], e = function(e) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 2478, 2755);
                                        return function() {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 2539, 2717);
                                            c += 1;
                                            c === a.length && b && b(d)
                                        }
                                    }, n = 0; n < a.length; ++n) {
                                    var q = a[n];
                                    f(q, e(q)) && d.push(q)
                                } else b([])
                    },
                    ail: function(a, b) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 2988, 3547);
                        var c, d, e, n;
                        if (b)
                            if (a && 0 != a.length)
                                for (c =
                                    function(c) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 3205, 3415);
                                        return function() {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 3266, 3377);
                                            b && b(c, a)
                                        }
                                    }, d = 0; d < a.length; ++d) e = a[d], (n = f(e, c(e))) && b && b(e, a);
                            else b("")
                    },
                    o: function(a, b) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 3572, 3697);
                        a && b && (a = "gm.o:" + a, c.gm.r(a) || (c.gm.s(a, !0), b()))
                    }
                }
            })(m);
            "use strict";
            (function(c) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 3774, 7168);
                c.gwmAf = {
                    init: function() {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 3842, 5070);
                        var k = document.getElementsByTagName("img"),
                            f = [];
                        try {
                            for (var d = document.getElementById("gwm-Deck"), e = null === d ? [] : d.getElementsByTagName("*"), d = 0; d < e.length; d++) {
                                var h = c.getComputedStyle(e[d]).backgroundImage;
                                if (h && h.match(/^url\(/g)) {
                                    var g = h.slice(4, -1).replace(/['"]/g, ""); -
                                    1 === f.indexOf(g) && f.push(g)
                                }
                            }
                        } catch (a) {
                            c.ueLogError && c.ueLogError(a, {
                                logLevel: "WARN",
                                attribution: "GWM:Metrics:true-af",
                                message: "UnsupportedJSError"
                            })
                        }
                        for (d = 0; d < k.length; d++) - 1 === k[d].className.indexOf("aok-hidden") && -1 === f.indexOf(k[d].src) && f.push(k[d].src);
                        gm.ail(f, gwmAf.onImageLoad)
                    },
                    onImageLoad: function(k, f) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 5105, 7136);
                        var d = document.querySelectorAll("#gwm-CardLoadingIndicator"),
                            e, h = 1,
                            g, a, b;
                        if (!gm.r("hfa")) {
                            e = document.getElementsByTagName("img");
                            for (b = 0; b < e.length; b++) - 1 !== f.indexOf(e[b].src) && (g = e[b].naturalHeight,
                                g = e[b].complete && "undefined" !== typeof g && 0 !== g && f.indexOf(k), (a = e[b].getBoundingClientRect().top + c.pageYOffset < c.innerHeight && "none" !== e[b].style.display) && !g && (h = 0));
                            if (d.length && -1 == d[0].className.indexOf("hidden") && d[0].getBoundingClientRect().top + c.pageYOffset < c.innerHeight) {
                                h = 0;
                                if (gm.r("taw")) return;
                                gm.s("taw", 1);
                                l.when("A").execute(function(a) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 6093, 6915);
                                    var b = a.once(function() {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 6158, 6684);
                                        var a = [],
                                            b, c;
                                        gm.s("taw", 0);
                                        b = document.getElementsByTagName("img");
                                        for (c = 0; c < b.length; c++) - 1 === f.indexOf(b[c].src) && a.push(b[c].src);
                                        f = a;
                                        gm.ail(f, gwmAf.onImageLoad)
                                    });
                                    a.state.bind("gwm-card-loader", function(a, c) {___jdce_logger("lacuna_cache/exported_g2xl0a.js", 6755, 6880);
                                        c.request && !a.request && b()
                                    })
                                })
                            }
                            h && (gm.s("hfa", 1), gm.mse("af", "gwm", {
                                ld: 1
                            }))
                        }
                    }
                }
            })(m)
        });
    