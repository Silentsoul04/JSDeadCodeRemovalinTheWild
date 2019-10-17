
                ! function(a) {
                    a.B.imgLoadPool = {};
                    var g = function(mod, g) {
                        mod = mod || "index-card", a.B.imgLoadPool[g] = a.B.imgLoadPool[g] || {}, a.B.imgLoadPool[g].data = a.B.imgLoadPool[g].data || [], a.B.imgLoadPool[g].handler = null, document.getElementById(mod).addEventListener(g, a.B.imgLoadPool[g].handler, !0)
                    };
                    g("index-card", "error")
                }(window);;
            