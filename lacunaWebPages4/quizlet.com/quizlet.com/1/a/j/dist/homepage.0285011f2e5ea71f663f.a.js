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
(window.QJP = window.QJP || []).push([
    [58, 86], {
        JwOH: function(e, t, a) {lacuna_lazy_load("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js[87:4209]", functionData => eval(functionData))  }))), i.a.createElement(p.a, {
   lacuna_lazy_load("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js[4243:4826]", functionData => eval(functionData))   }, t
                }(l.PureComplacuna_lazy_load("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js[4860:5639]", functionData => eval(functionData))              Object(n.default)(t, a)
                })
            })
        },
        UkZI: function(e, t, a) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4842, 5639);
            "use strict";
            a.r(t),
                function(e) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4924, 5604);
                    a.d(t, "default", function() {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 4976, 5043);
                        return c
                    });
                    var n = a("q1tI"),
                        s = a.n(n),
                        l = a("0cfB"),
                        i = a("WHvC"),
                        r = a("JwOH");

                    function c(t, a) {___jdce_logger("/a/j/dist/homepage.0285011f2e5ea71f663f.a.js", 5259, 5586);
                        var n = Object(l.hot)(e)(r.a);
                        Object(i.a)(s.a.createElement(n, {
                            defaultSelectedIndex: t.defaultSelectedTestimonialIndex,
                            testimonials: t.testimonials
                        }), a)
                    }
                }.call(this, a("3UD+")(e))
        }
    },
    [
        ["QdAX", 1, 2, 0]
    ]
]);
//# sourceMappingURL=homepage.0285011f2e5ea71f663f.a.js.map