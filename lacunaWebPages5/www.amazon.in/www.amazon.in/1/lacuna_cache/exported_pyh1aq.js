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

        window.ue_ihe = (window.ue_ihe || 0) + 1;
        if (window.ue_ihe === 1) {
            (function(s, l) {
                function m(b, e, c) {
                    c = c || new Date(+new Date + t);
                    c = "expires=" + c.toUTCString();
                    n.cookie = b + "=" + e + ";" + c + ";path=/"
                }

                function p(b) {
                    b += "=";
                    for (var e = n.cookie.split(";"), c = 0; c < e.length; c++) {
                        for (var a = e[c];
                            " " == a.charAt(0);) a = a.substring(1);
                        if (0 === a.indexOf(b)) return decodeURIComponent(a.substring(b.length, a.length))
                    }
                    return ""
                }

                function q(b, e, c) {
                    if (!e) return b; - 1 < b.indexOf("{") && (b = "");
                    for (var a = b.split("&"), f, d = !1, h = !1, g = 0; g < a.length; g++) f = a[g].split(":"), f[0] == e ? (!c || d ? a.splice(g, 1) : (f[1] = c, a[g] =
                        f.join(":")), h = d = !0) : 2 > f.length && (a.splice(g, 1), h = !0);
                    h && (b = a.join("&"));
                    !d && c && (0 < b.length && (b += "&"), b += e + ":" + c);
                    return b
                }
                var k = s.ue || {},
                    t = 6048E7,
                    n = ue_csm.document || l.document,
                    r = null,
                    d;
                a: {
                    try {
                        d = l.localStorage;
                        break a
                    } catch (u) {}
                    d = void 0
                }
                k.count && k.count("csm.cookieSize", document.cookie.length);
                k.cookie = {
                    get: p,
                    set: m,
                    updateCsmHit: function(b, e, c) {
                        try {
                            var a;
                            if (!(a = r)) {
                                var f;
                                a: {
                                    try {
                                        if (d && d.getItem) {
                                            f = d.getItem("csm-hit");
                                            break a
                                        }
                                    } catch (k) {}
                                    f = void 0
                                }
                                a = f || p("csm-hit") || "{}"
                            }
                            a = q(a, b, e);
                            r = a = q(a, "t", +new Date);
                            try {
                                d && d.setItem && d.setItem("csm-hit", a)
                            } catch (h) {}
                            m("csm-hit", a, c)
                        } catch (g) {
                            "function" == typeof l.ueLogError && ueLogError(Error("Cookie manager: " + g.message), {
                                logLevel: "WARN"
                            })
                        }
                    }
                }
            })(ue_csm, window);

            (function(l, d) {
                function c(b) {
                    b = "";
                    var c = a.isBFT ? "b" : "s",
                        d = "" + a.oid,
                        f = "" + a.lid,
                        g = d;
                    d != f && 20 == f.length && (c += "a", g += "-" + f);
                    a.tabid && (b = a.tabid + "+");
                    b += c + "-" + g;
                    b != e && 100 > b.length && (e = b, a.cookie ? a.cookie.updateCsmHit(m, b + ("|" + +new Date)) : document.cookie = "csm-hit=" + b + ("|" + +new Date) + n + "; path=/")
                }

                function p() {lacuna_lazy_load("lacuna_cache/exported_pyh1aq.js[3886:3931]", functionData => eval(functionData))}

                function h(b) {
                    !0 === d[a.pageViz.propHid] ? e = 0 : !1 === d[a.pageViz.propHid] && c({
                        type: "visible"
                    })
                }
                var n = "; expires=" + (new Date(+new Date + 6048E5)).toGMTString(),
                    m = "tb",
                    e, a = l.ue || {},
                    k = a.pageViz && a.pageViz.event &&
                    a.pageViz.propHid;
                a.attach && (a.attach("click", c), a.attach("keyup", c), k || (a.attach("focus", c), a.attach("blur", p)), k && (a.attach(a.pageViz.event, h, d), h({})));
                a.aftb = 1
            })(ue_csm, document);

            (function(a) {
                var b = a.alert;
                window.alert = function() {lacuna_lazy_load("lacuna_cache/exported_pyh1aq.js[4723:5033]", functionData => eval(functionData))}
            })(window);

            (function(k, l, g) {
                function m(a) {lacuna_lazy_load("lacuna_cache/exported_pyh1aq.js[5122:5448]", functionData => eval(functionData))}

                function r() {lacuna_lazy_load("lacuna_cache/exported_pyh1aq.js[5479:5586]", functionData => eval(functionData))}

                function s() {
                    for (var a in b) b.hasOwnProperty(a) && d.attach(a, m, b[a].parent)
                }

                function t() {
                    var a = "";
                    !q && c && (q = 1, a += "&ui=" + c);
                    return a
                }
                var d = k.ue,
                    p = k.uex,
                    q = 0,
                    c = 0,
                    h, n, e, f, b = {
                        click: {
                            id: 1,
                            parent: g
                        },
                        mousemove: {
                            id: 2,
                            parent: g
                        },
                        scroll: {
                            id: 3,
                            parent: l
                        },
                        keydown: {
                            id: 4,
                            parent: g
                        }
                    };
                d && p && (s(), d._ui = t)
            })(ue_csm, window, document);

            ue_csm.ue.stub(ue, "impression");

            ue.stub(ue, "trigger");

        };
        window.ueinit = window.ue_ihb;
    