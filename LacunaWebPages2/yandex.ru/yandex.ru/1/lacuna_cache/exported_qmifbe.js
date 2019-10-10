
                    ! function(e) {
                        "use strict";
                        var t = document.createElement("script"),
                            n = {
                                "src": "https://mc.yandex.ru/metrika/watch.js"
                            };
                        for (var a in t.onload = function() {
                                try {
                                    var t = [{
                                        "id": 23474449,
                                        "trackLinks": true,
                                        "experiments": "-0uDvJQ1IvNW6K1tzrvkHl442XwfMMgDauqB_OVnojNE0Zs-FsbjoQ"
                                    }];
                                    e.metrikaCounterInstances = {};
                                    for (var n = 0; n < t.length; n++) {
                                        var a = t[n],
                                            o = e["yaCounter" + a.id] = new Ya.Metrika(a);
                                        n || (e.defaultMetrikaCounter = o), e.metrikaCounterInstances[a.id] = o
                                    }
                                } catch (d) {}
                            }, n) n.hasOwnProperty(a) && t.setAttribute(a, n[a]);
                        var o = !1,
                            d = function() {
                                o || (o = !0, document.getElementsByTagName("head")[0].appendChild(t))
                            };
                        "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? setTimeout(d, 0) : "addEventListener" in document ? (document.addEventListener("DOMContentLoaded", d, !1), document.addEventListener("load", d, !1)) : (window.attachEvent("onload", d), window.attachEvent("onreadystatechange", d))
                    }(window);
                