
                ! function(a) {
                    a.B.imgLoadPool = {};
                    var g = function(mod, g) {
                        mod = mod || "index-card", a.B.imgLoadPool[g] = a.B.imgLoadPool[g] || {}, a.B.imgLoadPool[g].data = a.B.imgLoadPool[g].data || [], a.B.imgLoadPool[g].handler = function(e) {
                            if ("img" === e.target.tagName.toLowerCase()) {
                                var L = {
                                    logExtra: JSON.stringify({
                                        rta: "wise",
                                        imgSrc: e.target.src
                                    })
                                };
                                a.B.imgLoadPool[g].data.push(L)
                            }
                        }, document.getElementById(mod).addEventListener(g, a.B.imgLoadPool[g].handler, !0)
                    };
                    g("index-card", "error")
                }(window);;
            