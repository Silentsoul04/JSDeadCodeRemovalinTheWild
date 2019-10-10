
                            (function() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 30, 13943);
                                function a(d, e) {___jdce_logger("lacuna_cache/exported_s15j1g.js", 75, 540);
                                    if (window.addEventListener) {
                                        window.addEventListener(d, e, false);
                                    } else {
                                        if (window.attachEvent) {
                                            window.attachEvent("on" + d, e);
                                        }
                                    }
                                }

                                function c(d, e) {___jdce_logger("lacuna_cache/exported_s15j1g.js", 574, 1045);
                                    if (window.removeEventListener) {
                                        window.removeEventListener(d, e, false);
                                    } else {
                                        if (window.detachEvent) {
                                            window.detachEvent("on" + d, e);
                                        }
                                    }
                                }
                                var b = function() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 1086, 13875);
                                    (function() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 1136, 13837);
                                        (function(j, n) {___jdce_logger("lacuna_cache/exported_s15j1g.js", 1190, 13779);
                                            j.sfLogErrors = j.sfLogErrors || false;
                                            var p = p || function(t, s) {___jdce_logger("lacuna_cache/exported_s15j1g.js", 1348, 2673);
                                                s = s || new Error(t);
                                                if (j.ue && typeof ue.count == "function") {
                                                    ue.count("adplacements:safeFrameError", 1);
                                                }
                                                if (!j.sfLogErrors) {
                                                    return;
                                                }
                                                if (j.ueLogError) {
                                                    j.ueLogError(s, {
                                                        logLevel: "ERROR",
                                                        attribution: "APE-safeframe",
                                                        message: t + " "
                                                    });
                                                } else {
                                                    if (typeof console !== "undefined" && console.error) {
                                                        console.error(t, s);
                                                    }
                                                }
                                            };

                                            function d() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 2720, 2884);
                                                return j.innerHeight || n.documentElement.clientHeight;
                                            }

                                            function g() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 2930, 3092);
                                                return j.innerWidth || n.documentElement.clientWidth;
                                            }

                                            function e(u, s, t) {___jdce_logger("lacuna_cache/exported_s15j1g.js", 3138, 3509);
                                                if (u > 0) {
                                                    return (t > u);
                                                } else {
                                                    return (s > 0);
                                                }
                                            }
                                            var f = function() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 3562, 3723);
                                                return (Date.now ? Date.now() : new Date().getTime());
                                            };
                                            throttle = function(t, v, z) {___jdce_logger("lacuna_cache/exported_s15j1g.js", 3780, 6397);
                                                var s, x, A;
                                                var y = null;
                                                var w = 0;
                                                if (!z) {
                                                    z = {};
                                                }
                                                var u = function() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 4206, 4674);
                                                    w = z.leading === false ? 0 : f();
                                                    y = null;
                                                    A = t.apply(s, x);
                                                    if (!y) {
                                                        s = x = null;
                                                    }
                                                };
                                                return function() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 4731, 6350);
                                                    var C = f();
                                                    if (!w && z.leading === false) {
                                                        w = C;
                                                    }
                                                    var B = v - (C - w);
                                                    s = this;
                                                    x = arguments;
                                                    if (B <= 0 || B > v) {
                                                        if (y) {
                                                            clearTimeout(y);
                                                            y = null;
                                                        }
                                                        w = C;
                                                        A = t.apply(s, x);
                                                        if (!y) {
                                                            s = x = null;
                                                        }
                                                    } else {
                                                        if (!y && z.trailing !== false) {
                                                            y = setTimeout(u, B);
                                                        }
                                                    }
                                                    return A;
                                                };
                                            };

                                            function l(v, x, w, s) {___jdce_logger("lacuna_cache/exported_s15j1g.js", 6444, 10051);
                                                try {
                                                    var u = n.getElementById(v).getBoundingClientRect();
                                                    if (e(u.top, u.bottom, d()) && e(u.left, u.right, g())) {
                                                        if (typeof uet == "function") {
                                                            uet("bb", "adplacements:viewablelatency:" + x, {
                                                                wb: 1
                                                            });
                                                            if (w) {
                                                                uet("bb", "adplacements:viewablelatency:" + w, {
                                                                    wb: 1
                                                                });
                                                            }
                                                        }
                                                        if (typeof uex == "function" && j.ue && typeof ue.count == "function") {
                                                            if (j.apeViewableLatencyTrackers[s].loaded) {
                                                                uex("ld", "adplacements:viewablelatency:" + x, {
                                                                    wb: 1
                                                                });
                                                                if (w) {
                                                                    uex("ld", "adplacements:viewablelatency:" + w, {
                                                                        wb: 1
                                                                    });
                                                                }
                                                                ue.count("adplacements:htmlviewed:loaded:" + x, 1);
                                                                if (w) {
                                                                    ue.count("adplacements:htmlviewed:loaded:" + w, 1);
                                                                }
                                                            }
                                                            ue.count("adplacements:htmlviewed:" + x, 1);
                                                            if (w) {
                                                                ue.count("adplacements:htmlviewed:" + w, 1);
                                                            }
                                                        }
                                                        j.apeViewableLatencyTrackers[s].viewed = true;
                                                        if (j.apeViewableLatencyTrackers[s].tracker) {
                                                            c("scroll", j.apeViewableLatencyTrackers[s].tracker);
                                                            c("resize", j.apeViewableLatencyTrackers[s].tracker);
                                                        }
                                                    }
                                                } catch (t) {
                                                    j.apeViewableLatencyTrackers[s].valid = false;
                                                }
                                            }
                                            try {
                                                j.apeViewableLatencyTrackers = j.apeViewableLatencyTrackers || {};
                                                var r = "ape_gateway_atf_gateway-mWeb_placement";
                                                var q = "gateway_atf_gateway-mWeb".replace(/\_/g, ":");
                                                var h = "3ea9aa20-24ec-4c61-b311-cb4c2443419f";
                                                var i = "d445f56331ce44daa55129ddfe5beedf";
                                                j.apeViewableLatencyTrackers[i] = j.apeViewableLatencyTrackers[i] || {};
                                                j.apeViewableLatencyTrackers[i].valid = true;
                                                l(r, q, h, i);
                                                if (j.apeViewableLatencyTrackers[i].valid && !j.apeViewableLatencyTrackers[i].viewed) {
                                                    j.apeViewableLatencyTrackers[i].tracker = throttle(function() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 11124, 11261);
                                                        l(r, q, h, i);
                                                    }, 20);
                                                    a("scroll", j.apeViewableLatencyTrackers[i].tracker);
                                                    a("resize", j.apeViewableLatencyTrackers[i].tracker);
                                                }
                                            } catch (k) {
                                                if (j.apeViewableLatencyTrackers && j.apeViewableLatencyTrackers.d445f56331ce44daa55129ddfe5beedf) {
                                                    j.apeViewableLatencyTrackers.d445f56331ce44daa55129ddfe5beedf.valid = false;
                                                }
                                                p("Error initializing viewable latency instrumentation", k);
                                            }
                                            try {
                                                j.atf = {};
                                                j.atf.adStartTime = (new Date()).getTime();
                                                var m = j.DAsf || j.MAsf || null;
                                                if (m) {
                                                    m.loadAds();
                                                } else {
                                                    var o = n.createElement("script");
                                                    o.type = "text/javascript";
                                                    o.async = true;
                                                    o.charset = "utf-8";
                                                    o.src = "https://images-fe.ssl-images-amazon.com/images/G/09/ape/sf/mobile/MAsf-1.50.a6f2e15._V451370920_.js?csm_attribution=APE-SafeFrame";
                                                    o.onerror = function() {___jdce_logger("lacuna_cache/exported_s15j1g.js", 13099, 13259);
                                                        p("Error loading SafeFrame library");
                                                    };
                                                    o.setAttribute("crossorigin", "anonymous");
                                                    (n.getElementsByTagName("head")[0] || n.getElementsByTagName("body")[0]).appendChild(o);
                                                }
                                            } catch (k) {
                                                p("Error appending MAsf library", k);
                                            }
                                        }(window, document));
                                    })();
                                };
                                b();
                            })();
                        