
        ! function(a) {
            a.B.fire = function(mod, a, w) {
                mod = mod || "global", c[mod] = c[mod] || {}, c[mod][a] = c[mod][a] || [], c[mod][a].push(w)
            };
            var c = a.B.fire.firePool = {}
        }(window);
    