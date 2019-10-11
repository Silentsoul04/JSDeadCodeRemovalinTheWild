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

        ! function(n, e) {lacuna_lazy_load("lacuna_cache/exported_inkexg.js[26:1557]", functionData => eval(functionData))                  e(a, i, f), e(u, c, f)
                        }
                        n(a, i, f), n(u, c, f)
                    }(o, t) : p(o, t)
                }
            }

            function w(n) {___jdce_logger("lacuna_cache/exported_inkexg.js", 1210, 1390);
                ['click', 'mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function(e) {___jdce_logger("lacuna_cache/exported_inkexg.js", 1313, 1375);
                    n(e, l, f)
                })
            }
            w(n), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(n) {___jdce_logger("lacuna_cache/exported_inkexg.js", 1489, 1547);
                c.push(n), s()
            }
        }(addEventListener, removeEventListener);
    