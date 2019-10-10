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

        ! function(e) {
            function r(r) {
                for (var n, i, a = r[0], f = r[1], l = r[2], p = 0, s = []; p < a.length; p++) i = a[p], o[i] && s.push(o[i][0]), o[i] = 0;
                for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]);
                for (c && c(r); s.length;) s.shift()();
                return u.push.apply(u, l || []), t()
            }

            function t() {
                for (var e, r = 0; r < u.length; r++) {
                    for (var t = u[r], n = !0, a = 1; a < t.length; a++) {
                        var f = t[a];
                        0 !== o[f] && (n = !1)
                    }
                    n && (u.splice(r--, 1), e = i(i.s = t[0]))
                }
                return e
            }
            var n = {},
                o = {
                    42: 0
                },
                u = [];

            function i(r) {
                if (n[r]) return n[r].exports;
                var t = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(t.exports, t, t.exports, i), t.l = !0, t.exports
            }
            i.m = e, i.c = n, i.d = function(e, r, t) {lacuna_lazy_load("lacuna_cache/exported_cwu8zy.js[1270:1426]", functionData => eval(functionData))}, i.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, i.t = function(e, r) {lacuna_lazy_load("lacuna_cache/exported_cwu8zy.js[1747:2301]", functionData => eval(functionData))}, i.n = function(e) {lacuna_lazy_load("lacuna_cache/exported_cwu8zy.js[2321:2552]", functionData => eval(functionData))}, i.o = function(e, r) {lacuna_lazy_load("lacuna_cache/exported_cwu8zy.js[2575:2656]", functionData => eval(functionData))}, i.p = "/vi-assets/static-assets/";
            var a = window.webpackJsonp = window.webpackJsonp || [],
                f = a.push.bind(a);
            a.push = r, a = a.slice();
            for (var l = 0; l < a.length; l++) r(a[l]);
            var c = f;
            t()
        }([]);
        //# sourceMappingURL=runtime~adslot-22486f39710543ea12db.js.map
    