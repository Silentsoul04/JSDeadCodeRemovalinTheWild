
        window.rain = {
            stack: [],
            loadModule: function(moduleName) {
                window.rain.stack.push(moduleName);
            },
            event: {}
        };
        ! function(v) {
            var w = v.rain.event,
                h = w.firePool = {};
            w.fire = function(mod, v, w) {
                h[mod] = h[mod] || {}, h[mod][v] = h[mod][v] || [], h[mod][v].push(w)
            }
        }(window);;
    