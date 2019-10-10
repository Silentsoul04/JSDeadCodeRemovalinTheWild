
        window.jstag = function() {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 24, 1459);
            function t(t) {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 49, 190);
                return function() {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 88, 176);
                    return t.apply(this, arguments), this
                }
            }

            function n() {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 204, 413);
                var n = ["ready"].concat(c.call(arguments));
                return t(function() {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 305, 398);
                    n.push(c.call(arguments)), this._q.push(n)
                })
            }
            var i = {
                    _q: [],
                    _c: {},
                    ts: (new Date).getTime(),
                    ver: "2.0.0"
                },
                c = Array.prototype.slice;
            return i.init = function(t) {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 661, 760);
                return i._c = t, t.synchronous || i.loadtagmgr(t), this
            }, i.loadtagmgr = function(t) {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 777, 1085);
                var n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, n.src = t.url + "/api/tag/" + t.cid + "/lio.js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(n, i)
            }, i.ready = n(), i.send = n("send"), i.mock = n("mock"), i.identify = n("identify"), i.pageView = n("pageView"), i.bind = t(function(t) {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 1209, 1289);
                i._q.push([t, c.call(arguments, 1)])
            }), i.block = t(function() {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 1304, 1366);
                i._c.blockload = !0
            }), i.unblock = t(function() {___jdce_logger("lacuna_cache/exported_8gqwfc.js", 1383, 1445);
                i._c.blockload = !1
            }), i
        }(), window.jstag.init({
            cid: "107d418c4b7bb3debf57a3af0ce16190",
            url: "//c.lytics.io",
            min: true,
            loadid: false
        });
    