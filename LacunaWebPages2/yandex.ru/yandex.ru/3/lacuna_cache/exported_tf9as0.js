
        window.home = window.home || {}, home.loadManager = function() {
            var n = {},
                o = {};
            return {
                subscribe: function(t, e) {
                    var i = 0,
                        r = function() {
                            ++i === t.length && setTimeout(function() {
                                e()
                            }, 0)
                        };
                    "object" != typeof t && (t = [t]), t.forEach(function(t) {
                        o[t] ? r() : (n[t] || (n[t] = []), n[t].push(r))
                    })
                },
                trigger: function(t) {
                    if (!o[t] && (o[t] = !0, n[t])) {
                        for (var e = 0, i = n[t].length; e < i; e++) n[t][e]();
                        n[t] = []
                    }
                }
            }
        }();
    