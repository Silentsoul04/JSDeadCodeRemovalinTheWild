// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

        (function() {lacuna_lazy_load("lacuna_cache/exported_eotpos.js[21:435]", functionData => eval(functionData))le.kHL = 'nl';
            lacuna_lazy_load("lacuna_cache/exported_eotpos.js[460:2499]", functionData => eval(functionData)) e || -1 != b.search("&ei=") || (d =lacuna_lazy_load("lacuna_cache/exported_eotpos.js[2533:3234]", functionData => eval(functionData));
            google.x = function(a, b) {___jdce_logger("lalacuna_lazy_load("lacuna_cache/exported_eotpos.js[3291:3395]", functionData => eval(functionData)) {
                    do clacuna_lazy_load("lacuna_cache/exported_eotpos.js[3420:6620]", functionData => eval(functionData))   google.rll = function(a,lacuna_lazy_load("lacuna_cache/exported_eotpos.js[6645:7142]", functionData => eval(functionData))&& a.detachEvent("onerror", d)
     lacuna_lazy_load("lacuna_cache/exported_eotpos.js[7176:7497]", functionData => eval(functionData))oogle.startTick("load");
           lacuna_lazy_load("lacuna_cache/exported_eotpos.js[7531:19924]", functionData => eval(functionData))            b.a = c;
                    b.g = a
                },
                R = function(b, d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 16777, 16985);
                    var a = d.a;
                    G && (a.style.cursor = "pointer");
                    for (a = 0; a < b.o.length; ++a) d.g.push(b.o[a].call(null, d.a))
                },
                W = function(b, d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 17007, 17160);
                    b.h = d;
                    b.j &&
                        (0 < b.j.length && d(b.j), b.j = null)
                },
                P = function(b) {___jdce_logger("lacuna_cache/exported_eotpos.js", 17182, 17277);
                    this.a = b;
                    this.g = []
                },
                Q = function(b, d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 17299, 17455);
                    for (var a = b.a, c = d; a != c && c.parentNode;) c = c.parentNode;
                    return a == c
                },
                U = function(b, d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 17477, 17666);
                    for (var a = 0; a < d.length; ++a)
                        if (d[a].a != b.a && Q(d[a], b.a)) return !0;
                    return !1
                },
                V = function(b) {___jdce_logger("lacuna_cache/exported_eotpos.js", 17688, 18047);
                    for (var d = 0; d < b.g.length; ++d) {
                        var a = b.a,
                            c = b.g[d];
                        a.removeEventListener ? a.removeEventListener(c.l, c.i, c.capture) : a.detachEvent && a.detachEvent("on" + c.l, c.i)
                    }
                    b.g = []
                };
            var X = new E;
            T(X, window.document.documentElement);
            D(X, "click");
            D(X, "focus");
            D(X, "blur");
            D(X, "touchstart");
            D(X, "touchend");
            D(X, "mousedown");
            D(X, "touchmove");
            D(X, "change");
            D(X, "contextmenu");
            D(X, "input");
            D(X, "keydown");
            D(X, "keypress");
            D(X, "keyup");
            D(X, "load");
            D(X, "paste");
            (function(b) {___jdce_logger("lacuna_cache/exported_eotpos.js", 18571, 19404);
                google.jsad = function(d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 18615, 18674);
                    W(b, d)
                };
                google.jsaac = function(d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 18707, 18773);
                    return T(b, d)
                };
                google.jsarc = function(d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 18806, 19390);
                    V(d);
                    for (var a = !1, c = 0; c < b.a.length; ++c)
                        if (b.a[c] === d) {
                            b.a.splice(c, 1);
                            a = !0;
                            break
                        }
                    if (!a)
                        for (a = 0; a < b.g.length; ++a)
                            if (b.g[a] === d) {
                                b.g.splice(a, 1);
                                break
                            }
                    S(b)
                }
            })(X);
            window.gws_wizbind = function(b) {___jdce_logger("lacuna_cache/exported_eotpos.js", 19443, 19910);
                return {
                    trigger: function(d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 19511, 19783);
                        var a = b.i(d.type);
                        a || (D(b, d.type), a = b.i(d.type));
                        var c = d.target || d.srcElement;
                        a && a.call(c.ownerDocument.documentElement, d)
                    },
                    bind: function(d) {___jdce_logger("lacuna_cache/exported_eotpos.js", 19811, 19878);
                        W(b, d)
                    }
                }
            }(X);
        }).call(this);
    