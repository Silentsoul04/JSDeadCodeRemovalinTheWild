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

        // First Input Delay tracking. High priority loading to not miss event
        // https://github.com/GoogleChromeLabs/first-input-delay/blob/master/dist/first-input-delay.min.js
        ! function(n, e) {lacuna_lazy_load("lacuna_cache/exported_4ylrlz.js[212:1743]", functionData => eval(functionData))                       e(a, i, f), e(u, c, f)
                        }
                        n(a, i, f), n(u, c, f)
                    }(o, t) : p(o, t)
                }
            }

            function w(n) {___jdce_logger("lacuna_cache/exported_4ylrlz.js", 1396, 1576);
                ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {___jdce_logger("lacuna_cache/exported_4ylrlz.js", 1499, 1561);
                    n(e, l, f)
                })
            }
            w(n), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(n) {___jdce_logger("lacuna_cache/exported_4ylrlz.js", 1675, 1733);
                c.push(n), s()
            }
        }(addEventListener, removeEventListener);
    