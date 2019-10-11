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

        window.jstag = function() {lacuna_lazy_load("lacuna_cache/exported_pshedh.js[35:1459]", functionData => eval(functionData)) i.parentNode.insertBefore(n, i)
            }, i.ready = n(), i.send = n("send"), i.mock = n("mock"), i.identify = n("identify"), i.pageView = n("pageView"), i.bind = t(function(t) {___jdce_logger("lacuna_cache/exported_pshedh.js", 1209, 1289);
                i._q.push([t, c.call(arguments, 1)])
            }), i.block = t(function() {___jdce_logger("lacuna_cache/exported_pshedh.js", 1304, 1366);
                i._c.blockload = !0
            }), i.unblock = t(function() {___jdce_logger("lacuna_cache/exported_pshedh.js", 1383, 1445);
                i._c.blockload = !1
            }), i
        }(), window.jstag.init({
            cid: "107d418c4b7bb3debf57a3af0ce16190",
            url: "//c.lytics.io",
            min: true,
            loadid: false
        });
    