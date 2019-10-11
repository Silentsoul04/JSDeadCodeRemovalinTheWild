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

                            var define;
                            var require;
                            var esl;
                            (function(b) {
                                var o = {};
                                var n = -1;
                                var u = 0;
                                var z = 1;
                                var e = 2;
                                var s = 3;
                                var p = 4;
                                var aa = {};

                                function ao(aq, ap) {
                                    if (!j(aq, ap)) {
                                        aa[aq] = Math.max(aa[aq] || 0, ap)
                                    }
                                }
                                var B = {
                                    require: al,
                                    exports: 1,
                                    module: 1
                                };
                                var ah = W();
                                var P;
                                var m = {
                                    baseUrl: "./",
                                    paths: {},
                                    config: {},
                                    map: {},
                                    packages: [],
                                    shim: {},
                                    waitSeconds: 0,
                                    bundles: {},
                                    urlArgs: {}
                                };

                                function al(at, au) {
                                    var aq = [];

                                    function ap(av) {
                                        if (av.indexOf(".") === 0) {
                                            aq.push(av)
                                        }
                                    }
                                    if (typeof at === "string") {
                                        ap(at)
                                    } else {
                                        ac(at, function(av) {
                                            ap(av)
                                        })
                                    }
                                    if (aq.length > 0) {
                                        throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + aq.join(", "))
                                    }
                                    var ar = m.waitSeconds;
                                    if (ar && (at instanceof Array)) {
                                        if (P) {
                                            clearTimeout(P)
                                        }
                                        P = setTimeout(I, ar * 1000)
                                    }
                                    return ah(at, au)
                                }
                                al.version = "2.2.0-beta.5";
                                al.toUrl = ah.toUrl;
                                al.fetch = ah.fetch;
                                al.ModuleState = {
                                    NOT_FOUND: n,
                                    LOADING: u,
                                    PRE_DEFINED: z,
                                    ANALYZED: e,
                                    PREPARED: s,
                                    DEFINED: p
                                };
                                var ak = {};
                                al.listenModuleStateChange = function(au, at, ar) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[3684:4484]", functionData => eval(functionData))};
                                al.unlistenModuleStateChange = function(av, au, at) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[4570:5366]", functionData => eval(functionData))};
                                var aj = [];
                                al.addLoader = function(ap) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[5473:5666]", functionData => eval(functionData))};

                                function I() {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[5714:7796]", functionData => eval(functionData))}
                                var q = [];

                                function Z(ap) {
                                    ac(q, function(aq) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[7946:8161]", functionData => eval(functionData))});
                                    q.length = 0
                                }

                                function F(av, au, ar) {
                                    if (ar == null) {
                                        if (au == null) {
                                            ar = av;
                                            av = null
                                        } else {
                                            ar = au;
                                            au = null;
                                            if (av instanceof Array) {
                                                au = av;
                                                av = null
                                            }
                                        }
                                    }
                                    if (ar == null) {
                                        return
                                    }
                                    var ap = window.opera;
                                    var at;
                                    if (!av && document.attachEvent && (!(ap && ap.toString() === "[object Opera]"))) {
                                        var aq = w();
                                        at = aq && y[aq.getAttribute("data-src")]
                                    }
                                    if (av) {
                                        A(av, au, ar)
                                    } else {
                                        if (at) {
                                            ac(at, function(aw) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[9788:9897]", functionData => eval(functionData))})
                                        } else {
                                            q[0] = {
                                                deps: au,
                                                factory: ar
                                            }
                                        }
                                    }
                                }
                                F.amd = {};

                                function ae() {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[10370:10675]", functionData => eval(functionData))}

                                function A(ar, aq, ap) {
                                    if (!o[ar]) {
                                        o[ar] = {
                                            id: ar,
                                            depsDec: aq,
                                            deps: aq || ["require", "exports", "module"],
                                            factoryDeps: [],
                                            factory: ap,
                                            exports: {},
                                            config: ae,
                                            state: 0,
                                            require: W(ar),
                                            depMs: [],
                                            depMkv: {},
                                            depRs: [],
                                            hang: 0
                                        };
                                        N(ar, z)
                                    }
                                }

                                function K(aw) {
                                    var at = o[aw];
                                    if (!at || j(aw, e)) {
                                        return
                                    }
                                    var av = at.deps;
                                    var ar = at.factory;
                                    var au = 0;
                                    if (typeof ar === "function") {
                                        au = Math.min(ar.length, av.length);
                                        !at.depsDec && ar.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, "").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g, function(ay, ax, az) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[12502:12601]", functionData => eval(functionData))})
                                    }
                                    var aq = [];
                                    var ap = [];
                                    ac(av, function(ay, ax) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[12799:14713]", functionData => eval(functionData))});
                                    N(aw, e);
                                    R(aw);
                                    l(aq);
                                    ap.length && at.require(ap, function() {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[14923:15298]", functionData => eval(functionData))})
                                }

                                function X() {
                                    for (var aq in aa) {
                                        var ap = aa[aq];
                                        if (ap >= s) {
                                            K(aq);
                                            E(aq)
                                        }
                                        if (ap >= p) {
                                            an(aq)
                                        }
                                    }
                                }

                                function E(ar) {
                                    var ap = {};
                                    aq(ar);

                                    function aq(av) {
                                        K(av);
                                        if (!j(av, e)) {
                                            return false
                                        }
                                        if (j(av, s) || ap[av]) {
                                            return true
                                        }
                                        ap[av] = 1;
                                        var at = o[av];
                                        var au = true;
                                        ac(at.depMs, function(aw) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[16708:16819]", functionData => eval(functionData))});
                                        au && ac(at.depRs, function(aw) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[16894:17052]", functionData => eval(functionData))});
                                        if (au) {
                                            N(av, s)
                                        }
                                        ap[av] = 0;
                                        return au
                                    }
                                }

                                function R(at) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[17422:19924]", functionData => eval(functionData))}

                                function j(aq, ap) {
                                    return o[aq] && o[aq].state >= ap
                                }

                                function an(aq) {
                                    var ap = o[aq];
                                    if (ap && ap.invokeFactory) {
                                        ap.invokeFactory()
                                    }
                                }

                                function af(aq, ar) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[20436:20911]", functionData => eval(functionData))}
                                var i = {};
                                i[e] = {
                                    ":hook": "onModuleAnalyzed"
                                };
                                i[p] = {
                                    ":hook": "onModuleDefined"
                                };
                                i[z] = {
                                    ":hook": "onModulePreDefined"
                                };
                                i[s] = {
                                    ":hook": "onModulePrepared"
                                };

                                function t(at, ar, aq) {
                                    if (j(at, ar)) {
                                        aq();
                                        return
                                    }
                                    var ap = i[ar][at];
                                    if (!ap) {
                                        ap = i[ar][at] = []
                                    }
                                    ap.push(aq)
                                }

                                function N(av, au) {
                                    if (j(av, au)) {
                                        return
                                    }
                                    var ar = o[av];
                                    ar.state = au;
                                    ac(i[au][av], function(aw) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[22400:22484]", functionData => eval(functionData))});
                                    i[au][av] = null;
                                    var ap = m[i[au][":hook"]];
                                    if (typeof ap === "function") {
                                        ap(ar.id, ar.deps, ar.factory)
                                    }
                                    var at = ak[av];
                                    var aq = at && at[au];
                                    ac(aq, function(aw) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[22950:23060]", functionData => eval(functionData))})
                                }

                                function C(ap) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[23144:23275]", functionData => eval(functionData))}

                                function c(ap) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[23324:23686]", functionData => eval(functionData))}

                                function l(ar, au, ap) {
                                    var at = 0;
                                    ac(ar, function(ax) {
                                        if (!(B[ax] || j(ax, p))) {
                                            t(ax, p, aq);
                                            var aw;
                                            var av = {
                                                id: ax,
                                                load: function(ay) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[24207:24455]", functionData => eval(functionData))},
                                                getModuleState: c
                                            };
                                            if (!(Q[ax] || o[ax])) {
                                                ac(aj, function(ay) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[24707:24911]", functionData => eval(functionData))});
                                                if (typeof aw === "string") {
                                                    g(ax, aw)
                                                } else {
                                                    if (aw !== false) {
                                                        (ax.indexOf("!") > 0) ? D(ax, ap): g(ax)
                                                    }
                                                }
                                            }
                                        }
                                    });
                                    aq();

                                    function aq() {
                                        if (typeof au === "function" && !at) {
                                            var av = 1;
                                            ac(ar, function(aw) {
                                                if (!B[aw]) {
                                                    return (av = !!j(aw, p))
                                                }
                                            });
                                            if (av) {
                                                at = 1;
                                                au.apply(b, af(ar, B))
                                            }
                                        }
                                    }
                                }
                                var Q = {};
                                var H = {};
                                var y = {};

                                function g(at, ar) {
                                    Q[at] = 1;
                                    var ap = r(at) || at;
                                    ar = ar || L(ap + ".js");
                                    var av = m.shim[at];
                                    if (av instanceof Array) {
                                        m.shim[at] = av = {
                                            deps: av
                                        }
                                    }
                                    var aq = av && (av.deps || []);
                                    if (aq) {
                                        ac(aq, function(aw) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[27226:27442]", functionData => eval(functionData))});
                                        ah(aq, au)
                                    } else {
                                        au()
                                    }

                                    function au() {
                                        if (!y[ar]) {
                                            y[ar] = []
                                        }
                                        y[ar].push(at);
                                        v(ar, at, function() {
                                            if (av) {
                                                var aw;
                                                if (typeof av.init === "function") {
                                                    aw = av.init.apply(b, af(aq, B))
                                                }
                                                if (aw == null && av.exports) {
                                                    aw = b;
                                                    ac(av.exports.split("."), function(ax) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[28508:28700]", functionData => eval(functionData))})
                                                }
                                                F(at, aq, function() {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[28821:28940]", functionData => eval(functionData))})
                                            } else {
                                                Z(y[ar])
                                            }
                                            X()
                                        })
                                    }
                                }

                                function D(ap, at) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[29313:30668]", functionData => eval(functionData))}
                                al.config = function(ar) {
                                    if (ar) {
                                        for (var at in ar) {
                                            var au = ar[at];
                                            var aq = m[at];
                                            if (at.indexOf("on") === 0) {
                                                m[at] = au
                                            } else {
                                                if (at === "urlArgs" && typeof au === "string") {
                                                    m.urlArgs["*"] = au
                                                } else {
                                                    if (aq instanceof Array) {
                                                        aq.push.apply(aq, au)
                                                    } else {
                                                        if (aq != null) {
                                                            if (typeof aq === "object") {
                                                                for (var ap in au) {
                                                                    aq[ap] = au[ap]
                                                                }
                                                            } else {
                                                                m[at] = au
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        ai()
                                    }
                                };
                                ai();
                                var M;
                                var J;
                                var O;
                                var U;
                                var f;
                                var ad;

                                function G(at, ap) {
                                    var aq = [];
                                    for (var ar in at) {
                                        if (at.hasOwnProperty(ar)) {
                                            aq.push({
                                                k: ar,
                                                v: at[ar],
                                                reg: ar === "*" && ap ? /^/ : Y(ar)
                                            })
                                        }
                                    }
                                    aq.sort(k);
                                    return aq
                                }

                                function ai() {
                                    m.baseUrl = m.baseUrl.replace(/\/$/, "") + "/";
                                    M = G(m.paths);
                                    O = G(m.map, 1);
                                    ac(O, function(ax) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[33862:33956]", functionData => eval(functionData))});
                                    var au = O[O.length - 1];
                                    if (au && au.k === "*") {
                                        ac(O, function(ax) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[34142:34364]", functionData => eval(functionData))})
                                    }
                                    var aw = {};
                                    var aq = m.packages.length;
                                    J = [];
                                    while (aq--) {
                                        var ap = m.packages[aq];
                                        var at;
                                        switch (typeof ap) {
                                            case "string":
                                                at = {
                                                    name: ap.split("/")[0],
                                                    location: ap
                                                };
                                                break;
                                            case "object":
                                                at = {
                                                    name: ap.name,
                                                    location: ap.location,
                                                    main: ap.main
                                                };
                                                break
                                        }
                                        if (aw[at.name]) {
                                            continue
                                        }
                                        aw[at.name] = 1;
                                        at.location = at.location || at.name;
                                        at.main = (at.main || "main").replace(/\.js$/i, "");
                                        at.reg = Y(at.name);
                                        J.push(at)
                                    }
                                    J.sort(k);
                                    ad = G(m.urlArgs, 1);
                                    U = {};
                                    f = [];
                                    for (var av in m.bundles) {
                                        ac(m.bundles[av], ar)
                                    }

                                    function ar(ax) {
                                        if (ax instanceof RegExp) {
                                            f.push([ax, av])
                                        } else {
                                            U[am(ax)] = ag(av)
                                        }
                                    }
                                }

                                function r(aq) {
                                    var ap = U[aq];
                                    ap || ac(f, function(ar) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[37078:37334]", functionData => eval(functionData))});
                                    return ap
                                }

                                function ab(aq, ap, ar) {
                                    ac(ap, function(at) {
                                        if (at.reg.test(aq)) {
                                            ar(at.v, at.k, at);
                                            return false
                                        }
                                    })
                                }

                                function L(ap, ax) {
                                    var at = /(\.[a-z0-9]+)$/i;
                                    var ay = /(\?[^#]*)$/;
                                    var au = "";
                                    var ar = ap;
                                    var av = "";
                                    if (ay.test(ap)) {
                                        av = RegExp.$1;
                                        ap = ap.replace(ay, "")
                                    }
                                    if (at.test(ap)) {
                                        au = RegExp.$1;
                                        ar = ap.replace(at, "")
                                    }
                                    if (ax != null) {
                                        ar = ag(ar, ax)
                                    }
                                    var aq = ar;
                                    var aw;
                                    ab(ar, M, function(aA, az) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[38887:39038]", functionData => eval(functionData))});
                                    if (!aw) {
                                        ab(ar, J, function(aB, az, aA) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[39159:39284]", functionData => eval(functionData))})
                                    }
                                    if (!/^([a-z]{2,10}:\/)?\//i.test(aq)) {
                                        aq = m.baseUrl + aq
                                    }
                                    aq += au + av;
                                    ab(ar, ad, function(az) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[39610:39734]", functionData => eval(functionData))});
                                    return aq
                                }

                                function W(aq) {
                                    var at = {};

                                    function ap(av, ax) {
                                        var au = [];
                                        var aw = [];
                                        ac(av, function(aE, aA) {
                                            var aC = V(aE);
                                            var aB = ag(aC.mod, aq);
                                            var aD = aC.res;
                                            var ay = aB;
                                            if (aD) {
                                                var az = aB + "!" + aD;
                                                if (aD.indexOf(".") !== 0 && r(az)) {
                                                    aB = ay = az
                                                } else {
                                                    ay = null
                                                }
                                            }
                                            aw[aA] = ay;
                                            ao(aB, ax);
                                            au.push(aB)
                                        });
                                        return {
                                            mods: au,
                                            ids: aw
                                        }
                                    }

                                    function ar(av, ax) {
                                        if (typeof av === "string") {
                                            if (!at[av]) {
                                                var au = ag(av, aq);
                                                an(au);
                                                if (!j(au, p)) {
                                                    throw new Error('[MODULE_MISS]"' + au + '" is not exists!')
                                                }
                                                at[av] = o[au].exports
                                            }
                                            return at[av]
                                        }
                                        if (av instanceof Array) {
                                            var aw = ap(av, p);
                                            l(aw.mods, function() {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[42288:42864]", functionData => eval(functionData))}, aq);
                                            X()
                                        }
                                    }
                                    ar.toUrl = function(au) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[43059:43161]", functionData => eval(functionData))};
                                    ar.fetch = function(au, ay) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[43227:43957]", functionData => eval(functionData))};
                                    return ar
                                }

                                function ag(av, ap) {
                                    if (!av) {
                                        return ""
                                    }
                                    ap = ap || "";
                                    var at = V(av);
                                    if (!at) {
                                        return av
                                    }
                                    var au = at.res;
                                    var ar = h(at.mod, ap);
                                    ab(ap, O, function(aw) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[44639:44859]", functionData => eval(functionData))});
                                    ar = am(ar);
                                    if (au) {
                                        var aq = j(ar, p) && ah(ar);
                                        au = aq && aq.normalize ? aq.normalize(au, function(aw) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[45122:45227]", functionData => eval(functionData))}) : ag(au, ap);
                                        ar += "!" + au
                                    }
                                    return ar
                                }

                                function am(ap) {
                                    ac(J, function(aq) {
                                        var ar = aq.name;
                                        if (ar === ap) {
                                            ap = ar + "/" + aq.main;
                                            return false
                                        }
                                    });
                                    return ap
                                }

                                function h(av, ar) {
                                    if (av.indexOf(".") !== 0) {
                                        return av
                                    }
                                    var aq = ar.split("/").slice(0, -1).concat(av.split("/"));
                                    var au = [];
                                    for (var at = 0; at < aq.length; at++) {
                                        var ap = aq[at];
                                        switch (ap) {
                                            case ".":
                                                break;
                                            case "..":
                                                if (au.length && au[au.length - 1] !== "..") {
                                                    au.pop()
                                                } else {
                                                    au.push(ap)
                                                }
                                                break;
                                            default:
                                                ap && au.push(ap)
                                        }
                                    }
                                    return au.join("/")
                                }

                                function V(aq) {
                                    var ap = aq.split("!");
                                    if (ap[0]) {
                                        return {
                                            mod: ap[0],
                                            res: ap[1]
                                        }
                                    }
                                }

                                function Y(ap) {
                                    return new RegExp("^" + ap + "(/|$)")
                                }

                                function ac(at, ar) {
                                    if (at instanceof Array) {
                                        for (var aq = 0, ap = at.length; aq < ap; aq++) {
                                            if (ar(at[aq], aq) === false) {
                                                break
                                            }
                                        }
                                    }
                                }

                                function k(aq, ap) {
                                    var at = aq.k || aq.name;
                                    var ar = ap.k || ap.name;
                                    if (ar === "*") {
                                        return -1
                                    }
                                    if (at === "*") {
                                        return 1
                                    }
                                    return ar.length - at.length
                                }
                                var S;
                                var x;

                                function w() {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[49074:49979]", functionData => eval(functionData))}
                                var T = document.getElementsByTagName("head")[0];
                                var d = document.getElementsByTagName("base")[0];
                                if (d) {
                                    T = d.parentNode
                                }

                                function v(av, at, au) {
                                    if (H[av]) {
                                        return
                                    }
                                    H[av] = 1;
                                    var aq = document.createElement("script");
                                    aq.setAttribute("data-src", av);
                                    aq.src = av;
                                    aq.async = true;
                                    if (aq.readyState) {
                                        aq.onreadystatechange = ar
                                    } else {
                                        aq.onload = ar
                                    }
                                    var ap = m.onNodeCreated;
                                    if (typeof ap === "function") {
                                        ap(aq, m, at, av)
                                    }

                                    function ar() {
                                        var aw = aq.readyState;
                                        if (typeof aw === "undefined" || /^(loaded|complete)$/.test(aw)) {
                                            aq.onload = aq.onreadystatechange = null;
                                            aq = null;
                                            au()
                                        }
                                    }
                                    S = aq;
                                    d ? T.insertBefore(aq, d) : T.appendChild(aq);
                                    S = null
                                }
                                if (!define) {
                                    define = F;
                                    if (typeof require !== "function") {
                                        al.config(require);
                                        require = al
                                    }
                                    if (typeof esl !== "function") {
                                        al.config(esl);
                                        esl = al
                                    }
                                    if (typeof requirejs !== "undefined" && typeof requirejs !== "function") {
                                        al.config(requirejs)
                                    }
                                }
                                var a;
                                (function() {
                                    var aq = document.getElementsByTagName("script");
                                    var ap = aq.length;
                                    while (ap--) {
                                        var ar = aq[ap];
                                        if ((a = ar.getAttribute("data-main"))) {
                                            break
                                        }
                                    }
                                })();
                                a && setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[53368:53447]", functionData => eval(functionData))}, 4)
                            })(this);
                            define("css", {
                                load: function(e, c, d) {lacuna_lazy_load("lacuna_cache/exported_ngrshm.js[53590:54211]", functionData => eval(functionData))}
                            });;
                        