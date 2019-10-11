
                        "use strict";
                        ! function() {___jdce_logger("lacuna_cache/exported_jsyddf.js", 65, 3217);
                            var e = 1,
                                t = document.querySelector(".js-PremiumFirst"),
                                n = "",
                                o = document.querySelector(".js-PremiumFirst__body"),
                                r = function() {___jdce_logger("lacuna_cache/exported_jsyddf.js", 359, 854);
                                    var e = document.documentElement.clientWidth,
                                        o = document.documentElement.clientHeight,
                                        r = Math.min(e, o),
                                        a = o > e ? "port" : "land",
                                        i = "0.5625" * r + "px";
                                    n !== a && "0px" !== i && (n = a, t.style.height = i)
                                };
                            t && (r(), window.addEventListener("resize", r)), window.YAHOO = window.YAHOO || {}, YAHOO.JP = YAHOO.JP || {}, YAHOO.JP.rma = YAHOO.JP.rma || {}, YAHOO.JP.rma.smp = YAHOO.JP.rma.smp || {}, YAHOO.JP.rma.smp.addAdEventListener && (YAHOO.JP.rma.smp.addAdEventListener("load", function(e) {___jdce_logger("lacuna_cache/exported_jsyddf.js", 1158, 1315);
                                o && ("noad" === e && (t.style.display = "none"), YAHOO.JP.rma.smp.insert("STW"))
                            }, "STW"), YAHOO.JP.rma.smp.addAdEventListener("append", function() {___jdce_logger("lacuna_cache/exported_jsyddf.js", 1371, 1510);
                                t.style.height = "auto", window.removeEventListener("resize", r)
                            }, "STW")), YAHOO.JP.mtop = YAHOO.JP.mtop || {}, YAHOO.JP.mtop.isAutoplay = function() {___jdce_logger("lacuna_cache/exported_jsyddf.js", 1585, 2160);
                                try {
                                    var t = JSON.parse(window.localStorage.getItem("mtop.v2")),
                                        n = t && t.Video && "autoPlay" in t.Video ? t.Video.autoPlay : e,
                                        o = "",
                                        r = parseInt("1");
                                    return "1" === o ? r : n
                                } catch (a) {
                                    return 1
                                }
                            }, YAHOO.JP.mtop.isCovered = function() {___jdce_logger("lacuna_cache/exported_jsyddf.js", 2188, 3191);
                                var e = "0";
                                if ("0" === e) return !1;
                                try {
                                    var t = "mtop.w2apmt.valid",
                                        n = window.localStorage;
                                    n.removeItem(t, 1), window.openDatabase(null, null, null, null);
                                    var o = n.getItem("mtop.v2") || "{}",
                                        r = JSON.parse(o).WebToAppPermission || {},
                                        a = r.openTime || r.lastTime || 0,
                                        i = r.closeTime || 0,
                                        m = Date.now();
                                    return !(m - a < parseInt("345600000")) && !(m - i < parseInt("604800000"))
                                } catch (d) {
                                    return !1
                                }
                            }
                        }();
                    