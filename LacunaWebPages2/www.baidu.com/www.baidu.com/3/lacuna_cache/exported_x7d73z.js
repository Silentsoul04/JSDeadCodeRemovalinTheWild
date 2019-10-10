
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
            w.fire = null
        }(window);;
    