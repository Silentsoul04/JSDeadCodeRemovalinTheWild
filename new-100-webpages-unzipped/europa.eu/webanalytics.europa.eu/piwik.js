/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof JSON_PIWIK !== "object" && typeof window.JSON === "object" && window.JSON.stringify && window.JSON.parse) {
    JSON_PIWIK = window.JSON
} else {
    (function() {
        var a = {};
        /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        (function() {
            var c = typeof define === "function" && define.amd;
            var e = {
                "function": true,
                object: true
            };
            var h = e[typeof a] && a && !a.nodeType && a;
            var i = e[typeof window] && window || this,
                b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
            if (b && (b.global === b || b.window === b || b.self === b)) {
                i = b
            }

            function j(ab, V) {
                ab || (ab = i.Object());
                V || (V = i.Object());
                var K = ab.Number || i.Number,
                    R = ab.String || i.String,
                    x = ab.Object || i.Object,
                    S = ab.Date || i.Date,
                    T = ab.SyntaxError || i.SyntaxError,
                    aa = ab.TypeError || i.TypeError,
                    J = ab.Math || i.Math,
                    Y = ab.JSON || i.JSON;
                if (typeof Y == "object" && Y) {
                    V.stringify = Y.stringify;
                    V.parse = Y.parse
                }
                var n = x.prototype,
                    u = n.toString,
                    r, m, L;
                var B = new S(-3509827334573292);
                try {
                    B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() == 10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708
                } catch (v) {}

                function o(ac) {
                    if (o[ac] !== L) {
                        return o[ac]
                    }
                    var ad;
                    if (ac == "bug-string-char-index") {
                        ad = "a" [0] != "a"
                    } else {
                        if (ac == "json") {
                            ad = o("json-stringify") && o("json-parse")
                        } else {
                            var ak, ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if (ac == "json-stringify") {
                                var ai = V.stringify,
                                    aj = typeof ai == "function" && B;
                                if (aj) {
                                    (ak = function() {
                                        return 1
                                    }).toJSON = ak;
                                    try {
                                        aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L && ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) == "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" && ai({
                                            a: [ak, true, false, null, "\x00\b\n\f\r\t"]
                                        }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" && ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"'
                                    } catch (ae) {
                                        aj = false
                                    }
                                }
                                ad = aj
                            }
                            if (ac == "json-parse") {
                                var ag = V.parse;
                                if (typeof ag == "function") {
                                    try {
                                        if (ag("0") === 0 && !ag(false)) {
                                            ak = ag(ah);
                                            var af = ak.a.length == 5 && ak.a[0] === 1;
                                            if (af) {
                                                try {
                                                    af = !ag('"\t"')
                                                } catch (ae) {}
                                                if (af) {
                                                    try {
                                                        af = ag("01") !== 1
                                                    } catch (ae) {}
                                                }
                                                if (af) {
                                                    try {
                                                        af = ag("1.") !== 1
                                                    } catch (ae) {}
                                                }
                                            }
                                        }
                                    } catch (ae) {
                                        af = false
                                    }
                                }
                                ad = af
                            }
                        }
                    }
                    return o[ac] = !!ad
                }
                if (!o("json")) {
                    var U = "[object Function]",
                        Q = "[object Date]",
                        N = "[object Number]",
                        O = "[object String]",
                        E = "[object Array]",
                        A = "[object Boolean]";
                    var F = o("bug-string-char-index");
                    if (!B) {
                        var s = J.floor;
                        var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        var D = function(ac, ad) {
                            return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 + ad) / 100) + s((ac - 1601 + ad) / 400)
                        }
                    }
                    if (!(r = n.hasOwnProperty)) {
                        r = function(ae) {
                            var ac = {},
                                ad;
                            if ((ac.__proto__ = null, ac.__proto__ = {
                                    toString: 1
                                }, ac).toString != u) {
                                r = function(ah) {
                                    var ag = this.__proto__,
                                        af = ah in (this.__proto__ = null, this);
                                    this.__proto__ = ag;
                                    return af
                                }
                            } else {
                                ad = ac.constructor;
                                r = function(ag) {
                                    var af = (this.constructor || ad).prototype;
                                    return ag in this && !(ag in af && this[ag] === af[ag])
                                }
                            }
                            ac = null;
                            return r.call(this, ae)
                        }
                    }
                    m = function(ae, ah) {
                        var af = 0,
                            ac, ad, ag;
                        (ac = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0;
                        ad = new ac();
                        for (ag in ad) {
                            if (r.call(ad, ag)) {
                                af++
                            }
                        }
                        ac = ad = null;
                        if (!af) {
                            ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            m = function(aj, an) {
                                var am = u.call(aj) == U,
                                    al, ak;
                                var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] && aj.hasOwnProperty || r;
                                for (al in aj) {
                                    if (!(am && al == "prototype") && ai.call(aj, al)) {
                                        an(al)
                                    }
                                }
                                for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) {}
                            }
                        } else {
                            if (af == 2) {
                                m = function(aj, am) {
                                    var ai = {},
                                        al = u.call(aj) == U,
                                        ak;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj, ak)) {
                                            am(ak)
                                        }
                                    }
                                }
                            } else {
                                m = function(aj, am) {
                                    var al = u.call(aj) == U,
                                        ak, ai;
                                    for (ak in aj) {
                                        if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) {
                                            am(ak)
                                        }
                                    }
                                    if (ai || r.call(aj, (ak = "constructor"))) {
                                        am(ak)
                                    }
                                }
                            }
                        }
                        return m(ae, ah)
                    };
                    if (!o("json-stringify")) {
                        var q = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        };
                        var I = "000000";
                        var t = function(ac, ad) {
                            return (I + (ad || 0)).slice(-ac)
                        };
                        var z = "\\u00";
                        var C = function(ai) {
                            var ad = '"',
                                ag = 0,
                                ah = ai.length,
                                ac = !F || ah > 10;
                            var af = ac && (F ? ai.split("") : ai);
                            for (; ag < ah; ag++) {
                                var ae = ai.charCodeAt(ag);
                                switch (ae) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        ad += q[ae];
                                        break;
                                    default:
                                        if (ae < 32) {
                                            ad += z + t(2, ae.toString(16));
                                            break
                                        }
                                        ad += ac ? af[ag] : ai.charAt(ag)
                                }
                            }
                            return ad + '"'
                        };
                        var p = function(ai, aA, ag, al, ax, ac, aj) {
                            var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
                            try {
                                at = aA[ai]
                            } catch (am) {}
                            if (typeof at == "object" && at) {
                                ae = u.call(at);
                                if (ae == Q && !r.call(at, "toJSON")) {
                                    if (at > -1 / 0 && at < 1 / 0) {
                                        if (D) {
                                            ay = s(at / 86400000);
                                            for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {}
                                            for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {}
                                            ay = 1 + ay - D(ap, az);
                                            ak = (at % 86400000 + 86400000) % 86400000;
                                            aw = s(ak / 3600000) % 24;
                                            au = s(ak / 60000) % 60;
                                            aq = s(ak / 1000) % 60;
                                            an = ak % 1000
                                        } else {
                                            ap = at.getUTCFullYear();
                                            az = at.getUTCMonth();
                                            ay = at.getUTCDate();
                                            aw = at.getUTCHours();
                                            au = at.getUTCMinutes();
                                            aq = at.getUTCSeconds();
                                            an = at.getUTCMilliseconds()
                                        }
                                        at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) : t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z"
                                    } else {
                                        at = null
                                    }
                                } else {
                                    if (typeof at.toJSON == "function" && ((ae != N && ae != O && ae != E) || r.call(at, "toJSON"))) {
                                        at = at.toJSON(ai)
                                    }
                                }
                            }
                            if (ag) {
                                at = ag.call(aA, ai, at)
                            }
                            if (at === null) {
                                return "null"
                            }
                            ae = u.call(at);
                            if (ae == A) {
                                return "" + at
                            } else {
                                if (ae == N) {
                                    return at > -1 / 0 && at < 1 / 0 ? "" + at : "null"
                                } else {
                                    if (ae == O) {
                                        return C("" + at)
                                    }
                                }
                            }
                            if (typeof at == "object") {
                                for (af = aj.length; af--;) {
                                    if (aj[af] === at) {
                                        throw aa()
                                    }
                                }
                                aj.push(at);
                                ar = [];
                                av = ac;
                                ac += ax;
                                if (ae == E) {
                                    for (ah = 0, af = at.length; ah < af; ah++) {
                                        ad = p(ah, at, ag, al, ax, ac, aj);
                                        ar.push(ad === L ? "null" : ad)
                                    }
                                    ao = ar.length ? (ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : ("[" + ar.join(",") + "]")) : "[]"
                                } else {
                                    m(al || at, function(aC) {
                                        var aB = p(aC, at, ag, al, ax, ac, aj);
                                        if (aB !== L) {
                                            ar.push(C(aC) + ":" + (ax ? " " : "") + aB)
                                        }
                                    });
                                    ao = ar.length ? (ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : ("{" + ar.join(",") + "}")) : "{}"
                                }
                                aj.pop();
                                return ao
                            }
                        };
                        V.stringify = function(ac, ae, af) {
                            var ad, al, aj, ai;
                            if (e[typeof ae] && ae) {
                                if ((ai = u.call(ae)) == U) {
                                    al = ae
                                } else {
                                    if (ai == E) {
                                        aj = {};
                                        for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)) {}
                                    }
                                }
                            }
                            if (af) {
                                if ((ai = u.call(af)) == N) {
                                    if ((af -= af % 1) > 0) {
                                        for (ad = "", af > 10 && (af = 10); ad.length < af; ad += " ") {}
                                    }
                                } else {
                                    if (ai == O) {
                                        ad = af.length <= 10 ? af : af.slice(0, 10)
                                    }
                                }
                            }
                            return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", [])
                        }
                    }
                    if (!o("json-parse")) {
                        var M = R.fromCharCode;
                        var l = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        };
                        var G, X;
                        var H = function() {
                            G = X = null;
                            throw T()
                        };
                        var y = function() {
                            var ah = X,
                                af = ah.length,
                                ag, ae, ac, ai, ad;
                            while (G < af) {
                                ad = ah.charCodeAt(G);
                                switch (ad) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        G++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        ag = F ? ah.charAt(G) : ah[G];
                                        G++;
                                        return ag;
                                    case 34:
                                        for (ag = "@", G++; G < af;) {
                                            ad = ah.charCodeAt(G);
                                            if (ad < 32) {
                                                H()
                                            } else {
                                                if (ad == 92) {
                                                    ad = ah.charCodeAt(++G);
                                                    switch (ad) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            ag += l[ad];
                                                            G++;
                                                            break;
                                                        case 117:
                                                            ae = ++G;
                                                            for (ac = G + 4; G < ac; G++) {
                                                                ad = ah.charCodeAt(G);
                                                                if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 && ad <= 70)) {
                                                                    H()
                                                                }
                                                            }
                                                            ag += M("0x" + ah.slice(ae, G));
                                                            break;
                                                        default:
                                                            H()
                                                    }
                                                } else {
                                                    if (ad == 34) {
                                                        break
                                                    }
                                                    ad = ah.charCodeAt(G);
                                                    ae = G;
                                                    while (ad >= 32 && ad != 92 && ad != 34) {
                                                        ad = ah.charCodeAt(++G)
                                                    }
                                                    ag += ah.slice(ae, G)
                                                }
                                            }
                                        }
                                        if (ah.charCodeAt(G) == 34) {
                                            G++;
                                            return ag
                                        }
                                        H();
                                    default:
                                        ae = G;
                                        if (ad == 45) {
                                            ai = true;
                                            ad = ah.charCodeAt(++G)
                                        }
                                        if (ad >= 48 && ad <= 57) {
                                            if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) {
                                                H()
                                            }
                                            ai = false;
                                            for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) {}
                                            if (ah.charCodeAt(G) == 46) {
                                                ac = ++G;
                                                for (; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            ad = ah.charCodeAt(G);
                                            if (ad == 101 || ad == 69) {
                                                ad = ah.charCodeAt(++G);
                                                if (ad == 43 || ad == 45) {
                                                    G++
                                                }
                                                for (ac = G; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) {}
                                                if (ac == G) {
                                                    H()
                                                }
                                                G = ac
                                            }
                                            return +ah.slice(ae, G)
                                        }
                                        if (ai) {
                                            H()
                                        }
                                        if (ah.slice(G, G + 4) == "true") {
                                            G += 4;
                                            return true
                                        } else {
                                            if (ah.slice(G, G + 5) == "false") {
                                                G += 5;
                                                return false
                                            } else {
                                                if (ah.slice(G, G + 4) == "null") {
                                                    G += 4;
                                                    return null
                                                }
                                            }
                                        }
                                        H()
                                }
                            }
                            return "$"
                        };
                        var W = function(ad) {
                            var ac, ae;
                            if (ad == "$") {
                                H()
                            }
                            if (typeof ad == "string") {
                                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                                    return ad.slice(1)
                                }
                                if (ad == "[") {
                                    ac = [];
                                    for (;; ae || (ae = true)) {
                                        ad = y();
                                        if (ad == "]") {
                                            break
                                        }
                                        if (ae) {
                                            if (ad == ",") {
                                                ad = y();
                                                if (ad == "]") {
                                                    H()
                                                }
                                            } else {
                                                H()
                                            }
                                        }
                                        if (ad == ",") {
                                            H()
                                        }
                                        ac.push(W(ad))
                                    }
                                    return ac
                                } else {
                                    if (ad == "{") {
                                        ac = {};
                                        for (;; ae || (ae = true)) {
                                            ad = y();
                                            if (ad == "}") {
                                                break
                                            }
                                            if (ae) {
                                                if (ad == ",") {
                                                    ad = y();
                                                    if (ad == "}") {
                                                        H()
                                                    }
                                                } else {
                                                    H()
                                                }
                                            }
                                            if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" || y() != ":") {
                                                H()
                                            }
                                            ac[ad.slice(1)] = W(y())
                                        }
                                        return ac
                                    }
                                }
                                H()
                            }
                            return ad
                        };
                        var P = function(ae, ad, af) {
                            var ac = w(ae, ad, af);
                            if (ac === L) {
                                delete ae[ad]
                            } else {
                                ae[ad] = ac
                            }
                        };
                        var w = function(af, ae, ag) {
                            var ad = af[ae],
                                ac;
                            if (typeof ad == "object" && ad) {
                                if (u.call(ad) == E) {
                                    for (ac = ad.length; ac--;) {
                                        P(ad, ac, ag)
                                    }
                                } else {
                                    m(ad, function(ah) {
                                        P(ad, ah, ag)
                                    })
                                }
                            }
                            return ag.call(af, ae, ad)
                        };
                        V.parse = function(ae, af) {
                            var ac, ad;
                            G = 0;
                            X = "" + ae;
                            ac = W(y());
                            if (y() != "$") {
                                H()
                            }
                            G = X = null;
                            return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac
                        }
                    }
                }
                V.runInContext = j;
                return V
            }
            if (h && !c) {
                j(i, h)
            } else {
                var f = i.JSON,
                    k = i.JSON3,
                    d = false;
                var g = j(i, (i.JSON3 = {
                    noConflict: function() {
                        if (!d) {
                            d = true;
                            i.JSON = f;
                            i.JSON3 = k;
                            f = k = null
                        }
                        return g
                    }
                }));
                i.JSON = {
                    parse: g.parse,
                    stringify: g.stringify
                }
            }
            if (c) {
                define(function() {
                    return g
                })
            }
        }).call(this);
        JSON_PIWIK = a
    })()
}
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof window.Piwik !== "object") {
    window.Piwik = (function() {
        var q, b = {},
            w = {},
            E = document,
            h = navigator,
            U = screen,
            R = window,
            i = R.performance || R.mozPerformance || R.msPerformance || R.webkitPerformance,
            s = R.encodeURIComponent,
            Q = R.decodeURIComponent,
            l = unescape,
            G = [],
            C, e, ab = [];

        function o(ai) {
            try {
                return Q(ai)
            } catch (aj) {
                return unescape(ai)
            }
        }

        function H(aj) {
            var ai = typeof aj;
            return ai !== "undefined"
        }

        function y(ai) {
            return typeof ai === "function"
        }

        function T(ai) {
            return typeof ai === "object"
        }

        function v(ai) {
            return typeof ai === "string" || ai instanceof String
        }

        function z(aj) {
            if (!aj) {
                return true
            }
            var ai;
            var ak = true;
            for (ai in aj) {
                if (Object.prototype.hasOwnProperty.call(aj, ai)) {
                    ak = false
                }
            }
            return ak
        }

        function ae(ai) {
            var aj = typeof console;
            if (aj !== "undefined" && console && console.error) {
                console.error(ai)
            }
        }

        function aa() {
            var an, am, ap, aj, ai;
            for (an = 0; an < arguments.length; an += 1) {
                ai = null;
                if (arguments[an] && arguments[an].slice) {
                    ai = arguments[an].slice()
                }
                aj = arguments[an];
                ap = aj.shift();
                var ao, ak;
                var al = v(ap) && ap.indexOf("::") > 0;
                if (al) {
                    ao = ap.split("::");
                    ak = ao[0];
                    ap = ao[1];
                    if ("object" === typeof e[ak] && "function" === typeof e[ak][ap]) {
                        e[ak][ap].apply(e[ak], aj)
                    } else {
                        if (ai) {
                            ab.push(ai)
                        }
                    }
                } else {
                    for (am = 0; am < G.length; am++) {
                        if (v(ap)) {
                            ak = G[am];
                            var aq = ap.indexOf(".") > 0;
                            if (aq) {
                                ao = ap.split(".");
                                if (ak && "object" === typeof ak[ao[0]]) {
                                    ak = ak[ao[0]];
                                    ap = ao[1]
                                } else {
                                    if (ai) {
                                        ab.push(ai);
                                        break
                                    }
                                }
                            }
                            if (ak[ap]) {
                                ak[ap].apply(ak, aj)
                            } else {
                                var ar = "The method '" + ap + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript';
                                ae(ar);
                                if (!aq) {
                                    throw new TypeError(ar)
                                }
                            }
                            if (ap === "addTracker") {
                                break
                            }
                            if (ap === "setTrackerUrl" || ap === "setSiteId") {
                                break
                            }
                        } else {
                            ap.apply(G[am], aj)
                        }
                    }
                }
            }
        }

        function ah(al, ak, aj, ai) {
            if (al.addEventListener) {
                al.addEventListener(ak, aj, ai);
                return true
            }
            if (al.attachEvent) {
                return al.attachEvent("on" + ak, aj)
            }
            al["on" + ak] = aj
        }

        function m(ai) {
            if (E.readyState === "complete") {
                ai()
            } else {
                if (R.addEventListener) {
                    R.addEventListener("load", ai)
                } else {
                    if (R.attachEvent) {
                        R.attachEvent("onload", ai)
                    }
                }
            }
        }

        function p(al) {
            var ai = false;
            if (E.attachEvent) {
                ai = E.readyState === "complete"
            } else {
                ai = E.readyState !== "loading"
            }
            if (ai) {
                al();
                return
            }
            var ak;
            if (E.addEventListener) {
                ah(E, "DOMContentLoaded", function aj() {
                    E.removeEventListener("DOMContentLoaded", aj, false);
                    if (!ai) {
                        ai = true;
                        al()
                    }
                })
            } else {
                if (E.attachEvent) {
                    E.attachEvent("onreadystatechange", function aj() {
                        if (E.readyState === "complete") {
                            E.detachEvent("onreadystatechange", aj);
                            if (!ai) {
                                ai = true;
                                al()
                            }
                        }
                    });
                    if (E.documentElement.doScroll && R === R.top) {
                        (function aj() {
                            if (!ai) {
                                try {
                                    E.documentElement.doScroll("left")
                                } catch (am) {
                                    setTimeout(aj, 0);
                                    return
                                }
                                ai = true;
                                al()
                            }
                        }())
                    }
                }
            }
            ah(R, "load", function() {
                if (!ai) {
                    ai = true;
                    al()
                }
            }, false)
        }

        function X(aj, ao, ap) {
            if (!aj) {
                return ""
            }
            var ai = "",
                al, ak, am, an;
            for (al in b) {
                if (Object.prototype.hasOwnProperty.call(b, al)) {
                    an = b[al] && "function" === typeof b[al][aj];
                    if (an) {
                        ak = b[al][aj];
                        am = ak(ao || {}, ap);
                        if (am) {
                            ai += am
                        }
                    }
                }
            }
            return ai
        }

        function ac() {
            var ai;
            X("unload");
            if (q) {
                do {
                    ai = new Date()
                } while (ai.getTimeAlias() < q)
            }
        }

        function n(ak, aj) {
            var ai = E.createElement("script");
            ai.type = "text/javascript";
            ai.src = ak;
            if (ai.readyState) {
                ai.onreadystatechange = function() {
                    var al = this.readyState;
                    if (al === "loaded" || al === "complete") {
                        ai.onreadystatechange = null;
                        aj()
                    }
                }
            } else {
                ai.onload = aj
            }
            E.getElementsByTagName("head")[0].appendChild(ai)
        }

        function I() {
            var ai = "";
            try {
                ai = R.top.document.referrer
            } catch (ak) {
                if (R.parent) {
                    try {
                        ai = R.parent.document.referrer
                    } catch (aj) {
                        ai = ""
                    }
                }
            }
            if (ai === "") {
                ai = E.referrer
            }
            return ai
        }

        function r(ai) {
            var ak = new RegExp("^([a-z]+):"),
                aj = ak.exec(ai);
            return aj ? aj[1] : null
        }

        function d(ai) {
            var ak = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@?]+@)?([^:/#]+)"),
                aj = ak.exec(ai);
            return aj ? aj[1] : ai
        }

        function ad(aj, ai) {
            aj = String(aj);
            return aj.lastIndexOf(ai, 0) === 0
        }

        function P(aj, ai) {
            aj = String(aj);
            return aj.indexOf(ai, aj.length - ai.length) !== -1
        }

        function x(aj, ai) {
            aj = String(aj);
            return aj.indexOf(ai) !== -1
        }

        function g(aj, ai) {
            aj = String(aj);
            return aj.substr(0, aj.length - ai)
        }

        function D(al, ak, an) {
            al = String(al);
            if (!an) {
                an = ""
            }
            var ai = al.indexOf("#");
            var ao = al.length;
            if (ai === -1) {
                ai = ao
            }
            var am = al.substr(0, ai);
            var aj = al.substr(ai, ao - ai);
            if (am.indexOf("?") === -1) {
                am += "?"
            } else {
                if (!P(am, "?")) {
                    am += "&"
                }
            }
            return am + s(ak) + "=" + s(an) + aj
        }

        function k(aj, ak) {
            aj = String(aj);
            if (aj.indexOf("?" + ak + "=") === -1 && aj.indexOf("&" + ak + "=") === -1) {
                return aj
            }
            var al = aj.indexOf("?");
            if (al === -1) {
                return aj
            }
            var ai = aj.substr(al + 1);
            var ap = aj.substr(0, al);
            if (ai) {
                var aq = "";
                var at = ai.indexOf("#");
                if (at !== -1) {
                    aq = ai.substr(at + 1);
                    ai = ai.substr(0, at)
                }
                var am;
                var ao = ai.split("&");
                var an = ao.length - 1;
                for (an; an >= 0; an--) {
                    am = ao[an].split("=")[0];
                    if (am === ak) {
                        ao.splice(an, 1)
                    }
                }
                var ar = ao.join("&");
                if (ar) {
                    ap = ap + "?" + ar
                }
                if (aq) {
                    ap += "#" + aq
                }
            }
            return ap
        }

        function f(ak, aj) {
            var ai = "[\\?&#]" + aj + "=([^&#]*)";
            var am = new RegExp(ai);
            var al = am.exec(ak);
            return al ? Q(al[1]) : ""
        }

        function a(ai) {
            if (ai && String(ai) === ai) {
                return ai.replace(/^\s+|\s+$/g, "")
            }
            return ai
        }

        function B(ai) {
            return unescape(s(ai))
        }

        function ag(ay) {
            var ak = function(aE, aD) {
                    return (aE << aD) | (aE >>> (32 - aD))
                },
                az = function(aG) {
                    var aE = "",
                        aF, aD;
                    for (aF = 7; aF >= 0; aF--) {
                        aD = (aG >>> (aF * 4)) & 15;
                        aE += aD.toString(16)
                    }
                    return aE
                },
                an, aB, aA, aj = [],
                ar = 1732584193,
                ap = 4023233417,
                ao = 2562383102,
                am = 271733878,
                al = 3285377520,
                ax, aw, av, au, at, aC, ai, aq = [];
            ay = B(ay);
            ai = ay.length;
            for (aB = 0; aB < ai - 3; aB += 4) {
                aA = ay.charCodeAt(aB) << 24 | ay.charCodeAt(aB + 1) << 16 | ay.charCodeAt(aB + 2) << 8 | ay.charCodeAt(aB + 3);
                aq.push(aA)
            }
            switch (ai & 3) {
                case 0:
                    aB = 2147483648;
                    break;
                case 1:
                    aB = ay.charCodeAt(ai - 1) << 24 | 8388608;
                    break;
                case 2:
                    aB = ay.charCodeAt(ai - 2) << 24 | ay.charCodeAt(ai - 1) << 16 | 32768;
                    break;
                case 3:
                    aB = ay.charCodeAt(ai - 3) << 24 | ay.charCodeAt(ai - 2) << 16 | ay.charCodeAt(ai - 1) << 8 | 128;
                    break
            }
            aq.push(aB);
            while ((aq.length & 15) !== 14) {
                aq.push(0)
            }
            aq.push(ai >>> 29);
            aq.push((ai << 3) & 4294967295);
            for (an = 0; an < aq.length; an += 16) {
                for (aB = 0; aB < 16; aB++) {
                    aj[aB] = aq[an + aB]
                }
                for (aB = 16; aB <= 79; aB++) {
                    aj[aB] = ak(aj[aB - 3] ^ aj[aB - 8] ^ aj[aB - 14] ^ aj[aB - 16], 1)
                }
                ax = ar;
                aw = ap;
                av = ao;
                au = am;
                at = al;
                for (aB = 0; aB <= 19; aB++) {
                    aC = (ak(ax, 5) + ((aw & av) | (~aw & au)) + at + aj[aB] + 1518500249) & 4294967295;
                    at = au;
                    au = av;
                    av = ak(aw, 30);
                    aw = ax;
                    ax = aC
                }
                for (aB = 20; aB <= 39; aB++) {
                    aC = (ak(ax, 5) + (aw ^ av ^ au) + at + aj[aB] + 1859775393) & 4294967295;
                    at = au;
                    au = av;
                    av = ak(aw, 30);
                    aw = ax;
                    ax = aC
                }
                for (aB = 40; aB <= 59; aB++) {
                    aC = (ak(ax, 5) + ((aw & av) | (aw & au) | (av & au)) + at + aj[aB] + 2400959708) & 4294967295;
                    at = au;
                    au = av;
                    av = ak(aw, 30);
                    aw = ax;
                    ax = aC
                }
                for (aB = 60; aB <= 79; aB++) {
                    aC = (ak(ax, 5) + (aw ^ av ^ au) + at + aj[aB] + 3395469782) & 4294967295;
                    at = au;
                    au = av;
                    av = ak(aw, 30);
                    aw = ax;
                    ax = aC
                }
                ar = (ar + ax) & 4294967295;
                ap = (ap + aw) & 4294967295;
                ao = (ao + av) & 4294967295;
                am = (am + au) & 4294967295;
                al = (al + at) & 4294967295
            }
            aC = az(ar) + az(ap) + az(ao) + az(am) + az(al);
            return aC.toLowerCase()
        }

        function W(ak, ai, aj) {
            if (!ak) {
                ak = ""
            }
            if (!ai) {
                ai = ""
            }
            if (ak === "translate.googleusercontent.com") {
                if (aj === "") {
                    aj = ai
                }
                ai = f(ai, "u");
                ak = d(ai)
            } else {
                if (ak === "cc.bingj.com" || ak === "webcache.googleusercontent.com" || ak.slice(0, 5) === "74.6.") {
                    ai = E.links[0].href;
                    ak = d(ai)
                }
            }
            return [ak, ai, aj]
        }

        function J(aj) {
            var ai = aj.length;
            if (aj.charAt(--ai) === ".") {
                aj = aj.slice(0, ai)
            }
            if (aj.slice(0, 2) === "*.") {
                aj = aj.slice(1)
            }
            if (aj.indexOf("/") !== -1) {
                aj = aj.substr(0, aj.indexOf("/"))
            }
            return aj
        }

        function af(aj) {
            aj = aj && aj.text ? aj.text : aj;
            if (!v(aj)) {
                var ai = E.getElementsByTagName("title");
                if (ai && H(ai[0])) {
                    aj = ai[0].text
                }
            }
            return aj
        }

        function N(ai) {
            if (!ai) {
                return []
            }
            if (!H(ai.children) && H(ai.childNodes)) {
                return ai.children
            }
            if (H(ai.children)) {
                return ai.children
            }
            return []
        }

        function S(aj, ai) {
            if (!aj || !ai) {
                return false
            }
            if (aj.contains) {
                return aj.contains(ai)
            }
            if (aj === ai) {
                return true
            }
            if (aj.compareDocumentPosition) {
                return !!(aj.compareDocumentPosition(ai) & 16)
            }
            return false
        }

        function K(ak, al) {
            if (ak && ak.indexOf) {
                return ak.indexOf(al)
            }
            if (!H(ak) || ak === null) {
                return -1
            }
            if (!ak.length) {
                return -1
            }
            var ai = ak.length;
            if (ai === 0) {
                return -1
            }
            var aj = 0;
            while (aj < ai) {
                if (ak[aj] === al) {
                    return aj
                }
                aj++
            }
            return -1
        }

        function j(ak) {
            if (!ak) {
                return false
            }

            function ai(am, an) {
                if (R.getComputedStyle) {
                    return E.defaultView.getComputedStyle(am, null)[an]
                }
                if (am.currentStyle) {
                    return am.currentStyle[an]
                }
            }

            function al(am) {
                am = am.parentNode;
                while (am) {
                    if (am === E) {
                        return true
                    }
                    am = am.parentNode
                }
                return false
            }

            function aj(ao, av, am, ar, ap, at, aq) {
                var an = ao.parentNode,
                    au = 1;
                if (!al(ao)) {
                    return false
                }
                if (9 === an.nodeType) {
                    return true
                }
                if ("0" === ai(ao, "opacity") || "none" === ai(ao, "display") || "hidden" === ai(ao, "visibility")) {
                    return false
                }
                if (!H(av) || !H(am) || !H(ar) || !H(ap) || !H(at) || !H(aq)) {
                    av = ao.offsetTop;
                    ap = ao.offsetLeft;
                    ar = av + ao.offsetHeight;
                    am = ap + ao.offsetWidth;
                    at = ao.offsetWidth;
                    aq = ao.offsetHeight
                }
                if (ak === ao && (0 === aq || 0 === at) && "hidden" === ai(ao, "overflow")) {
                    return false
                }
                if (an) {
                    if (("hidden" === ai(an, "overflow") || "scroll" === ai(an, "overflow"))) {
                        if (ap + au > an.offsetWidth + an.scrollLeft || ap + at - au < an.scrollLeft || av + au > an.offsetHeight + an.scrollTop || av + aq - au < an.scrollTop) {
                            return false
                        }
                    }
                    if (ao.offsetParent === an) {
                        ap += an.offsetLeft;
                        av += an.offsetTop
                    }
                    return aj(an, av, am, ar, ap, at, aq)
                }
                return true
            }
            return aj(ak)
        }
        var Z = {
            htmlCollectionToArray: function(ak) {
                var ai = [],
                    aj;
                if (!ak || !ak.length) {
                    return ai
                }
                for (aj = 0; aj < ak.length; aj++) {
                    ai.push(ak[aj])
                }
                return ai
            },
            find: function(ai) {
                if (!document.querySelectorAll || !ai) {
                    return []
                }
                var aj = document.querySelectorAll(ai);
                return this.htmlCollectionToArray(aj)
            },
            findMultiple: function(ak) {
                if (!ak || !ak.length) {
                    return []
                }
                var aj, al;
                var ai = [];
                for (aj = 0; aj < ak.length; aj++) {
                    al = this.find(ak[aj]);
                    ai = ai.concat(al)
                }
                ai = this.makeNodesUnique(ai);
                return ai
            },
            findNodesByTagName: function(aj, ai) {
                if (!aj || !ai || !aj.getElementsByTagName) {
                    return []
                }
                var ak = aj.getElementsByTagName(ai);
                return this.htmlCollectionToArray(ak)
            },
            makeNodesUnique: function(ai) {
                var an = [].concat(ai);
                ai.sort(function(ap, ao) {
                    if (ap === ao) {
                        return 0
                    }
                    var ar = K(an, ap);
                    var aq = K(an, ao);
                    if (ar === aq) {
                        return 0
                    }
                    return ar > aq ? -1 : 1
                });
                if (ai.length <= 1) {
                    return ai
                }
                var aj = 0;
                var al = 0;
                var am = [];
                var ak;
                ak = ai[aj++];
                while (ak) {
                    if (ak === ai[aj]) {
                        al = am.push(aj)
                    }
                    ak = ai[aj++] || null
                }
                while (al--) {
                    ai.splice(am[al], 1)
                }
                return ai
            },
            getAttributeValueFromNode: function(am, ak) {
                if (!this.hasNodeAttribute(am, ak)) {
                    return
                }
                if (am && am.getAttribute) {
                    return am.getAttribute(ak)
                }
                if (!am || !am.attributes) {
                    return
                }
                var al = (typeof am.attributes[ak]);
                if ("undefined" === al) {
                    return
                }
                if (am.attributes[ak].value) {
                    return am.attributes[ak].value
                }
                if (am.attributes[ak].nodeValue) {
                    return am.attributes[ak].nodeValue
                }
                var aj;
                var ai = am.attributes;
                if (!ai) {
                    return
                }
                for (aj = 0; aj < ai.length; aj++) {
                    if (ai[aj].nodeName === ak) {
                        return ai[aj].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(aj, ai) {
                var ak = this.getAttributeValueFromNode(aj, ai);
                return !!ak
            },
            hasNodeAttribute: function(ak, ai) {
                if (ak && ak.hasAttribute) {
                    return ak.hasAttribute(ai)
                }
                if (ak && ak.attributes) {
                    var aj = (typeof ak.attributes[ai]);
                    return "undefined" !== aj
                }
                return false
            },
            hasNodeCssClass: function(ak, ai) {
                if (ak && ai && ak.className) {
                    var aj = typeof ak.className === "string" ? ak.className.split(" ") : [];
                    if (-1 !== K(aj, ai)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(am, ak, ai) {
                if (!ai) {
                    ai = []
                }
                if (!am || !ak) {
                    return ai
                }
                var al = N(am);
                if (!al || !al.length) {
                    return ai
                }
                var aj, an;
                for (aj = 0; aj < al.length; aj++) {
                    an = al[aj];
                    if (this.hasNodeAttribute(an, ak)) {
                        ai.push(an)
                    }
                    ai = this.findNodesHavingAttribute(an, ak, ai)
                }
                return ai
            },
            findFirstNodeHavingAttribute: function(ak, aj) {
                if (!ak || !aj) {
                    return
                }
                if (this.hasNodeAttribute(ak, aj)) {
                    return ak
                }
                var ai = this.findNodesHavingAttribute(ak, aj);
                if (ai && ai.length) {
                    return ai[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(al, ak) {
                if (!al || !ak) {
                    return
                }
                if (this.hasNodeAttributeWithValue(al, ak)) {
                    return al
                }
                var ai = this.findNodesHavingAttribute(al, ak);
                if (!ai || !ai.length) {
                    return
                }
                var aj;
                for (aj = 0; aj < ai.length; aj++) {
                    if (this.getAttributeValueFromNode(ai[aj], ak)) {
                        return ai[aj]
                    }
                }
            },
            findNodesHavingCssClass: function(am, al, ai) {
                if (!ai) {
                    ai = []
                }
                if (!am || !al) {
                    return ai
                }
                if (am.getElementsByClassName) {
                    var an = am.getElementsByClassName(al);
                    return this.htmlCollectionToArray(an)
                }
                var ak = N(am);
                if (!ak || !ak.length) {
                    return []
                }
                var aj, ao;
                for (aj = 0; aj < ak.length; aj++) {
                    ao = ak[aj];
                    if (this.hasNodeCssClass(ao, al)) {
                        ai.push(ao)
                    }
                    ai = this.findNodesHavingCssClass(ao, al, ai)
                }
                return ai
            },
            findFirstNodeHavingClass: function(ak, aj) {
                if (!ak || !aj) {
                    return
                }
                if (this.hasNodeCssClass(ak, aj)) {
                    return ak
                }
                var ai = this.findNodesHavingCssClass(ak, aj);
                if (ai && ai.length) {
                    return ai[0]
                }
            },
            isLinkElement: function(aj) {
                if (!aj) {
                    return false
                }
                var ai = String(aj.nodeName).toLowerCase();
                var al = ["a", "area"];
                var ak = K(al, ai);
                return ak !== -1
            },
            setAnyAttribute: function(aj, ai, ak) {
                if (!aj || !ai) {
                    return
                }
                if (aj.setAttribute) {
                    aj.setAttribute(ai, ak)
                } else {
                    aj[ai] = ak
                }
            }
        };
        var u = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var aj = "." + this.CONTENT_CLASS;
                var ai = "[" + this.CONTENT_ATTR + "]";
                var ak = Z.findMultiple([aj, ai]);
                return ak
            },
            findContentNodesWithinNode: function(al) {
                if (!al) {
                    return []
                }
                var aj = Z.findNodesHavingCssClass(al, this.CONTENT_CLASS);
                var ai = Z.findNodesHavingAttribute(al, this.CONTENT_ATTR);
                if (ai && ai.length) {
                    var ak;
                    for (ak = 0; ak < ai.length; ak++) {
                        aj.push(ai[ak])
                    }
                }
                if (Z.hasNodeAttribute(al, this.CONTENT_ATTR)) {
                    aj.push(al)
                } else {
                    if (Z.hasNodeCssClass(al, this.CONTENT_CLASS)) {
                        aj.push(al)
                    }
                }
                aj = Z.makeNodesUnique(aj);
                return aj
            },
            findParentContentNode: function(aj) {
                if (!aj) {
                    return
                }
                var ak = aj;
                var ai = 0;
                while (ak && ak !== E && ak.parentNode) {
                    if (Z.hasNodeAttribute(ak, this.CONTENT_ATTR)) {
                        return ak
                    }
                    if (Z.hasNodeCssClass(ak, this.CONTENT_CLASS)) {
                        return ak
                    }
                    ak = ak.parentNode;
                    if (ai > 1000) {
                        break
                    }
                    ai++
                }
            },
            findPieceNode: function(aj) {
                var ai;
                ai = Z.findFirstNodeHavingAttribute(aj, this.CONTENT_PIECE_ATTR);
                if (!ai) {
                    ai = Z.findFirstNodeHavingClass(aj, this.CONTENT_PIECE_CLASS)
                }
                if (ai) {
                    return ai
                }
                return aj
            },
            findTargetNodeNoDefault: function(ai) {
                if (!ai) {
                    return
                }
                var aj = Z.findFirstNodeHavingAttributeWithValue(ai, this.CONTENT_TARGET_ATTR);
                if (aj) {
                    return aj
                }
                aj = Z.findFirstNodeHavingAttribute(ai, this.CONTENT_TARGET_ATTR);
                if (aj) {
                    return aj
                }
                aj = Z.findFirstNodeHavingClass(ai, this.CONTENT_TARGET_CLASS);
                if (aj) {
                    return aj
                }
            },
            findTargetNode: function(ai) {
                var aj = this.findTargetNodeNoDefault(ai);
                if (aj) {
                    return aj
                }
                return ai
            },
            findContentName: function(aj) {
                if (!aj) {
                    return
                }
                var am = Z.findFirstNodeHavingAttributeWithValue(aj, this.CONTENT_NAME_ATTR);
                if (am) {
                    return Z.getAttributeValueFromNode(am, this.CONTENT_NAME_ATTR)
                }
                var ai = this.findContentPiece(aj);
                if (ai) {
                    return this.removeDomainIfIsInLink(ai)
                }
                if (Z.hasNodeAttributeWithValue(aj, "title")) {
                    return Z.getAttributeValueFromNode(aj, "title")
                }
                var ak = this.findPieceNode(aj);
                if (Z.hasNodeAttributeWithValue(ak, "title")) {
                    return Z.getAttributeValueFromNode(ak, "title")
                }
                var al = this.findTargetNode(aj);
                if (Z.hasNodeAttributeWithValue(al, "title")) {
                    return Z.getAttributeValueFromNode(al, "title")
                }
            },
            findContentPiece: function(aj) {
                if (!aj) {
                    return
                }
                var al = Z.findFirstNodeHavingAttributeWithValue(aj, this.CONTENT_PIECE_ATTR);
                if (al) {
                    return Z.getAttributeValueFromNode(al, this.CONTENT_PIECE_ATTR)
                }
                var ai = this.findPieceNode(aj);
                var ak = this.findMediaUrlInNode(ai);
                if (ak) {
                    return this.toAbsoluteUrl(ak)
                }
            },
            findContentTarget: function(ak) {
                if (!ak) {
                    return
                }
                var al = this.findTargetNode(ak);
                if (Z.hasNodeAttributeWithValue(al, this.CONTENT_TARGET_ATTR)) {
                    return Z.getAttributeValueFromNode(al, this.CONTENT_TARGET_ATTR)
                }
                var aj;
                if (Z.hasNodeAttributeWithValue(al, "href")) {
                    aj = Z.getAttributeValueFromNode(al, "href");
                    return this.toAbsoluteUrl(aj)
                }
                var ai = this.findPieceNode(ak);
                if (Z.hasNodeAttributeWithValue(ai, "href")) {
                    aj = Z.getAttributeValueFromNode(ai, "href");
                    return this.toAbsoluteUrl(aj)
                }
            },
            isSameDomain: function(ai) {
                if (!ai || !ai.indexOf) {
                    return false
                }
                if (0 === ai.indexOf(this.getLocation().origin)) {
                    return true
                }
                var aj = ai.indexOf(this.getLocation().host);
                if (8 >= aj && 0 <= aj) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(ak) {
                var aj = "^https?://[^/]+";
                var ai = "^.*//[^/]+";
                if (ak && ak.search && -1 !== ak.search(new RegExp(aj)) && this.isSameDomain(ak)) {
                    ak = ak.replace(new RegExp(ai), "");
                    if (!ak) {
                        ak = "/"
                    }
                }
                return ak
            },
            findMediaUrlInNode: function(am) {
                if (!am) {
                    return
                }
                var ak = ["img", "embed", "video", "audio"];
                var ai = am.nodeName.toLowerCase();
                if (-1 !== K(ak, ai) && Z.findFirstNodeHavingAttributeWithValue(am, "src")) {
                    var al = Z.findFirstNodeHavingAttributeWithValue(am, "src");
                    return Z.getAttributeValueFromNode(al, "src")
                }
                if (ai === "object" && Z.hasNodeAttributeWithValue(am, "data")) {
                    return Z.getAttributeValueFromNode(am, "data")
                }
                if (ai === "object") {
                    var an = Z.findNodesByTagName(am, "param");
                    if (an && an.length) {
                        var aj;
                        for (aj = 0; aj < an.length; aj++) {
                            if ("movie" === Z.getAttributeValueFromNode(an[aj], "name") && Z.hasNodeAttributeWithValue(an[aj], "value")) {
                                return Z.getAttributeValueFromNode(an[aj], "value")
                            }
                        }
                    }
                    var ao = Z.findNodesByTagName(am, "embed");
                    if (ao && ao.length) {
                        return this.findMediaUrlInNode(ao[0])
                    }
                }
            },
            trim: function(ai) {
                return a(ai)
            },
            isOrWasNodeInViewport: function(an) {
                if (!an || !an.getBoundingClientRect || an.nodeType !== 1) {
                    return true
                }
                var am = an.getBoundingClientRect();
                var al = E.documentElement || {};
                var ak = am.top < 0;
                if (ak && an.offsetTop) {
                    ak = (an.offsetTop + am.height) > 0
                }
                var aj = al.clientWidth;
                if (R.innerWidth && aj > R.innerWidth) {
                    aj = R.innerWidth
                }
                var ai = al.clientHeight;
                if (R.innerHeight && ai > R.innerHeight) {
                    ai = R.innerHeight
                }
                return ((am.bottom > 0 || ak) && am.right > 0 && am.left < aj && ((am.top < ai) || ak))
            },
            isNodeVisible: function(aj) {
                var ai = j(aj);
                var ak = this.isOrWasNodeInViewport(aj);
                return ai && ak
            },
            buildInteractionRequestParams: function(ai, aj, ak, al) {
                var am = "";
                if (ai) {
                    am += "c_i=" + s(ai)
                }
                if (aj) {
                    if (am) {
                        am += "&"
                    }
                    am += "c_n=" + s(aj)
                }
                if (ak) {
                    if (am) {
                        am += "&"
                    }
                    am += "c_p=" + s(ak)
                }
                if (al) {
                    if (am) {
                        am += "&"
                    }
                    am += "c_t=" + s(al)
                }
                return am
            },
            buildImpressionRequestParams: function(ai, aj, ak) {
                var al = "c_n=" + s(ai) + "&c_p=" + s(aj);
                if (ak) {
                    al += "&c_t=" + s(ak)
                }
                return al
            },
            buildContentBlock: function(ak) {
                if (!ak) {
                    return
                }
                var ai = this.findContentName(ak);
                var aj = this.findContentPiece(ak);
                var al = this.findContentTarget(ak);
                ai = this.trim(ai);
                aj = this.trim(aj);
                al = this.trim(al);
                return {
                    name: ai || "Unknown",
                    piece: aj || "Unknown",
                    target: al || ""
                }
            },
            collectContent: function(al) {
                if (!al || !al.length) {
                    return []
                }
                var ak = [];
                var ai, aj;
                for (ai = 0; ai < al.length; ai++) {
                    aj = this.buildContentBlock(al[ai]);
                    if (H(aj)) {
                        ak.push(aj)
                    }
                }
                return ak
            },
            setLocation: function(ai) {
                this.location = ai
            },
            getLocation: function() {
                var ai = this.location || R.location;
                if (!ai.origin) {
                    ai.origin = ai.protocol + "//" + ai.hostname + (ai.port ? ":" + ai.port : "")
                }
                return ai
            },
            toAbsoluteUrl: function(aj) {
                if ((!aj || String(aj) !== aj) && aj !== "") {
                    return aj
                }
                if ("" === aj) {
                    return this.getLocation().href
                }
                if (aj.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + aj
                }
                if (aj.search(/:\/\//) !== -1) {
                    return aj
                }
                if (0 === aj.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + aj
                }
                if (0 === aj.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + aj
                }
                if (0 === aj.search("^[a-zA-Z]{2,11}:")) {
                    return aj
                }
                if (aj.search(/^\//) !== -1) {
                    return this.getLocation().origin + aj
                }
                var ai = "(.*/)";
                var ak = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ai))[0];
                return ak + aj
            },
            isUrlToCurrentDomain: function(aj) {
                var ak = this.toAbsoluteUrl(aj);
                if (!ak) {
                    return false
                }
                var ai = this.getLocation().origin;
                if (ai === ak) {
                    return true
                }
                if (0 === String(ak).indexOf(ai)) {
                    if (":" === String(ak).substr(ai.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(aj, ai) {
                if (!aj || !ai) {
                    return
                }
                Z.setAnyAttribute(aj, "href", ai)
            },
            shouldIgnoreInteraction: function(ak) {
                var aj = Z.hasNodeAttribute(ak, this.CONTENT_IGNOREINTERACTION_ATTR);
                var ai = Z.hasNodeCssClass(ak, this.CONTENT_IGNOREINTERACTION_CLASS);
                return aj || ai
            }
        };

        function M(aj, am) {
            if (am) {
                return am
            }
            aj = u.toAbsoluteUrl(aj);
            if (x(aj, "?")) {
                var al = aj.indexOf("?");
                aj = aj.slice(0, al)
            }
            if (P(aj, "piwik.php")) {
                aj = g(aj, "piwik.php".length)
            } else {
                if (P(aj, ".php")) {
                    var ai = aj.lastIndexOf("/");
                    var ak = 1;
                    aj = aj.slice(0, ai + ak)
                }
            }
            if (P(aj, "/js/")) {
                aj = g(aj, "js/".length)
            }
            return aj
        }

        function L(ao) {
            var aq = "Piwik_Overlay";
            var aj = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
            var ak = aj.exec(E.referrer);
            if (ak) {
                var am = ak[1];
                if (am !== String(ao)) {
                    return false
                }
                var an = ak[2],
                    ai = ak[3],
                    al = ak[4];
                if (!al) {
                    al = ""
                } else {
                    if (al.indexOf("&segment=") === 0) {
                        al = al.substr("&segment=".length)
                    }
                }
                R.name = aq + "###" + an + "###" + ai + "###" + al
            }
            var ap = R.name.split("###");
            return ap.length === 4 && ap[0] === aq
        }

        function V(aj, ap, al) {
            var ao = R.name.split("###"),
                an = ao[1],
                ai = ao[2],
                am = ao[3],
                ak = M(aj, ap);
            n(ak + "plugins/Overlay/client/client.js?v=1", function() {
                Piwik_Overlay_Client.initialize(ak, al, an, ai, am)
            })
        }

        function t() {
            var ak;
            try {
                ak = R.frameElement
            } catch (aj) {
                return true
            }
            if (H(ak)) {
                return (ak && String(ak.nodeName).toLowerCase() === "iframe") ? true : false
            }
            try {
                return R.self !== R.top
            } catch (ai) {
                return true
            }
        }

        function O(bZ, bU) {
            var bt = this,
                bP = W(E.domain, R.location.href, I()),
                cB = J(bP[0]),
                by = o(bP[1]),
                bb = o(bP[2]),
                cz = false,
                b3 = "GET",
                cO = b3,
                aA = "application/x-www-form-urlencoded; charset=UTF-8",
                ci = aA,
                aw = bZ || "",
                bs = "",
                cF = "",
                bR = bU || "",
                bl = "",
                bz = "",
                aV, a7 = "",
                cL = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                ap = [cB],
                bm = [],
                bw = [],
                aY = [],
                bu = 500,
                cr, aW, bC, bA, ai, cc = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
                br = ["pk_kwd", "piwik_kwd", "utm_term"],
                a8 = "_pk_",
                ao = "pk_vid",
                aQ = 180,
                cD, bd, bD = false,
                a9 = false,
                cx, a3, bi, cs = 33955200000,
                ca = 1800000,
                cK = 15768000000,
                aT = true,
                b8 = 0,
                bB = false,
                aH = false,
                bW, bH = {},
                b7 = {},
                ba = {},
                bg = 200,
                cG = {},
                cM = {},
                bV = [],
                b0 = false,
                cl = false,
                aj = false,
                cN = false,
                cu = false,
                aF = false,
                a2 = t(),
                cE = null,
                bX, aI, bn, bS = ag,
                bc, aC, cd = 0,
                bh = ["id", "ses", "cvar", "ref"];
            try {
                a7 = E.title
            } catch (cj) {
                a7 = ""
            }

            function cR(c2, c0, cZ, c1, cY, cX) {
                if (a9) {
                    return
                }
                var cW;
                if (cZ) {
                    cW = new Date();
                    cW.setTime(cW.getTime() + cZ)
                }
                E.cookie = c2 + "=" + s(c0) + (cZ ? ";expires=" + cW.toGMTString() : "") + ";path=" + (c1 || "/") + (cY ? ";domain=" + cY : "") + (cX ? ";secure" : "")
            }

            function av(cY) {
                if (a9) {
                    return 0
                }
                var cW = new RegExp("(^|;)[ ]*" + cY + "=([^;]*)"),
                    cX = cW.exec(E.cookie);
                return cX ? Q(cX[2]) : 0
            }

            function bN(cW) {
                var cX;
                cW = k(cW, ao);
                if (bA) {
                    cX = new RegExp("#.*");
                    return cW.replace(cX, "")
                }
                return cW
            }

            function bG(cY, cW) {
                var cZ = r(cW),
                    cX;
                if (cZ) {
                    return cW
                }
                if (cW.slice(0, 1) === "/") {
                    return r(cY) + "://" + d(cY) + cW
                }
                cY = bN(cY);
                cX = cY.indexOf("?");
                if (cX >= 0) {
                    cY = cY.slice(0, cX)
                }
                cX = cY.lastIndexOf("/");
                if (cX !== cY.length - 1) {
                    cY = cY.slice(0, cX + 1)
                }
                return cY + cW
            }

            function cq(cY, cW) {
                var cX;
                cY = String(cY).toLowerCase();
                cW = String(cW).toLowerCase();
                if (cY === cW) {
                    return true
                }
                if (cW.slice(0, 1) === ".") {
                    if (cY === cW.slice(1)) {
                        return true
                    }
                    cX = cY.length - cW.length;
                    if ((cX > 0) && (cY.slice(cX) === cW)) {
                        return true
                    }
                }
                return false
            }

            function b6(cW) {
                var cX = document.createElement("a");
                if (cW.indexOf("//") !== 0 && cW.indexOf("http") !== 0) {
                    if (cW.indexOf("*") === 0) {
                        cW = cW.substr(1)
                    }
                    if (cW.indexOf(".") === 0) {
                        cW = cW.substr(1)
                    }
                    cW = "http://" + cW
                }
                cX.href = u.toAbsoluteUrl(cW);
                if (cX.pathname) {
                    return cX.pathname
                }
                return ""
            }

            function aU(cX, cW) {
                if (!ad(cW, "/")) {
                    cW = "/" + cW
                }
                if (!ad(cX, "/")) {
                    cX = "/" + cX
                }
                var cY = (cW === "/" || cW === "/*");
                if (cY) {
                    return true
                }
                if (cX === cW) {
                    return true
                }
                cW = String(cW).toLowerCase();
                cX = String(cX).toLowerCase();
                if (P(cW, "*")) {
                    cW = cW.slice(0, -1);
                    cY = (!cW || cW === "/");
                    if (cY) {
                        return true
                    }
                    if (cX === cW) {
                        return true
                    }
                    return cX.indexOf(cW) === 0
                }
                if (!P(cX, "/")) {
                    cX += "/"
                }
                if (!P(cW, "/")) {
                    cW += "/"
                }
                return cX.indexOf(cW) === 0
            }

            function al(c0, c2) {
                var cX, cW, cY, cZ, c1;
                for (cX = 0; cX < ap.length; cX++) {
                    cZ = J(ap[cX]);
                    c1 = b6(ap[cX]);
                    if (cq(c0, cZ) && aU(c2, c1)) {
                        return true
                    }
                }
                return false
            }

            function aM(cZ) {
                var cX, cW, cY;
                for (cX = 0; cX < ap.length; cX++) {
                    cW = J(ap[cX].toLowerCase());
                    if (cZ === cW) {
                        return true
                    }
                    if (cW.slice(0, 1) === ".") {
                        if (cZ === cW.slice(1)) {
                            return true
                        }
                        cY = cZ.length - cW.length;
                        if ((cY > 0) && (cZ.slice(cY) === cW)) {
                            return true
                        }
                    }
                }
                return false
            }

            function cb(cW, cY) {
                var cX = new Image(1, 1);
                cX.onload = function() {
                    C = 0;
                    if (typeof cY === "function") {
                        cY()
                    }
                };
                cW = cW.replace("send_image=0", "send_image=1");
                cX.src = aw + (aw.indexOf("?") < 0 ? "?" : "&") + cW
            }

            function cJ(cX, c0, cW) {
                if (!H(cW) || null === cW) {
                    cW = true
                }
                try {
                    var cZ = R.XMLHttpRequest ? new R.XMLHttpRequest() : R.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                    cZ.open("POST", aw, true);
                    cZ.onreadystatechange = function() {
                        if (this.readyState === 4 && !(this.status >= 200 && this.status < 300) && cW) {
                            cb(cX, c0)
                        } else {
                            if (this.readyState === 4 && (typeof c0 === "function")) {
                                c0()
                            }
                        }
                    };
                    cZ.setRequestHeader("Content-Type", ci);
                    cZ.send(cX)
                } catch (cY) {
                    if (cW) {
                        cb(cX, c0)
                    }
                }
            }

            function b1(cX) {
                var cW = new Date();
                var cY = cW.getTime() + cX;
                if (!q || cY > q) {
                    q = cY
                }
            }

            function b9(cW) {
                if (bX || !aW) {
                    return
                }
                bX = setTimeout(function cX() {
                    bX = null;
                    if (!a2) {
                        a2 = (!E.hasFocus || E.hasFocus())
                    }
                    if (!a2) {
                        b9(aW);
                        return
                    }
                    if (bC()) {
                        return
                    }
                    var cY = new Date(),
                        cZ = aW - (cY.getTime() - cE);
                    cZ = Math.min(aW, cZ);
                    b9(cZ)
                }, cW || aW)
            }

            function bv() {
                if (!bX) {
                    return
                }
                clearTimeout(bX);
                bX = null
            }

            function a0() {
                a2 = true;
                if (bC()) {
                    return
                }
                b9()
            }

            function aq() {
                bv()
            }

            function cT() {
                if (aF || !aW) {
                    return
                }
                aF = true;
                ah(R, "focus", a0);
                ah(R, "blur", aq);
                b9()
            }

            function cm(c0) {
                var cX = new Date();
                var cW = cX.getTime();
                cE = cW;
                if (cl && cW < cl) {
                    var cY = cl - cW;
                    setTimeout(c0, cY);
                    b1(cY + 50);
                    cl += 50;
                    return
                }
                if (cl === false) {
                    var cZ = 800;
                    cl = cW + cZ
                }
                c0()
            }

            function bq(cX, cW, cY) {
                if (!cx && cX) {
                    cm(function() {
                        if (cO === "POST" || String(cX).length > 2000) {
                            cJ(cX, cY)
                        } else {
                            cb(cX, cY)
                        }
                        b1(cW)
                    })
                }
                if (!aF) {
                    cT()
                } else {
                    b9()
                }
            }

            function b5(cW) {
                if (cx) {
                    return false
                }
                return (cW && cW.length)
            }

            function cS(cY, cW) {
                if (!b5(cY)) {
                    return
                }
                var cX = '{"requests":["?' + cY.join('","?') + '"]}';
                cm(function() {
                    cJ(cX, null, false);
                    b1(cW)
                })
            }

            function aK(cW) {
                return a8 + cW + "." + bR + "." + bc
            }

            function bQ() {
                if (a9) {
                    return "0"
                }
                if (!H(h.cookieEnabled)) {
                    var cW = aK("testcookie");
                    cR(cW, "1");
                    return av(cW) === "1" ? "1" : "0"
                }
                return h.cookieEnabled ? "1" : "0"
            }

            function a6() {
                bc = bS((cD || cB) + (bd || "/")).slice(0, 4)
            }

            function bI() {
                var cX = aK("cvar"),
                    cW = av(cX);
                if (cW.length) {
                    cW = JSON_PIWIK.parse(cW);
                    if (T(cW)) {
                        return cW
                    }
                }
                return {}
            }

            function cn() {
                if (aH === false) {
                    aH = bI()
                }
            }

            function cy() {
                return bS((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(cM) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function ar() {
                return bS((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(cM)).slice(0, 6)
            }

            function a4() {
                return Math.floor((new Date()).getTime() / 1000)
            }

            function aB() {
                var cX = a4();
                var cY = ar();
                var cW = String(cX) + cY;
                return cW
            }

            function cI(cY) {
                cY = String(cY);
                var c1 = ar();
                var cZ = c1.length;
                var c0 = cY.substr(-1 * cZ, cZ);
                var cX = parseInt(cY.substr(0, cY.length - cZ), 10);
                if (cX && c0 && c0 === c1) {
                    var cW = a4();
                    if (aQ <= 0) {
                        return true
                    }
                    if (cW >= cX && cW <= (cX + aQ)) {
                        return true
                    }
                }
                return false
            }

            function cU(cW) {
                if (!cu) {
                    return ""
                }
                var c0 = f(cW, ao);
                if (!c0) {
                    return ""
                }
                c0 = String(c0);
                var cY = new RegExp("^[a-zA-Z0-9]+$");
                if (c0.length === 32 && cY.test(c0)) {
                    var cX = c0.substr(16, 32);
                    if (cI(cX)) {
                        var cZ = c0.substr(0, 16);
                        return cZ
                    }
                }
                return ""
            }

            function cv() {
                if (!bz) {
                    bz = cU(by)
                }
                var cY = new Date(),
                    cW = Math.round(cY.getTime() / 1000),
                    cX = aK("id"),
                    c1 = av(cX),
                    c0, cZ;
                if (c1) {
                    c0 = c1.split(".");
                    c0.unshift("0");
                    if (bz.length) {
                        c0[1] = bz
                    }
                    return c0
                }
                if (bz.length) {
                    cZ = bz
                } else {
                    if ("0" === bQ()) {
                        cZ = ""
                    } else {
                        cZ = cy()
                    }
                }
                c0 = ["1", cZ, cW, 0, cW, "", ""];
                return c0
            }

            function aO() {
                var c3 = cv(),
                    cZ = c3[0],
                    c0 = c3[1],
                    cX = c3[2],
                    cW = c3[3],
                    c1 = c3[4],
                    cY = c3[5];
                if (!H(c3[6])) {
                    c3[6] = ""
                }
                var c2 = c3[6];
                return {
                    newVisitor: cZ,
                    uuid: c0,
                    createTs: cX,
                    visitCount: cW,
                    currentVisitTs: c1,
                    lastVisitTs: cY,
                    lastEcommerceOrderTs: c2
                }
            }

            function az() {
                var cZ = new Date(),
                    cX = cZ.getTime(),
                    c0 = aO().createTs;
                var cW = parseInt(c0, 10);
                var cY = (cW * 1000) + cs - cX;
                return cY
            }

            function aD(cW) {
                if (!bR) {
                    return
                }
                var cY = new Date(),
                    cX = Math.round(cY.getTime() / 1000);
                if (!H(cW)) {
                    cW = aO()
                }
                var cZ = cW.uuid + "." + cW.createTs + "." + cW.visitCount + "." + cX + "." + cW.lastVisitTs + "." + cW.lastEcommerceOrderTs;
                cR(aK("id"), cZ, az(), bd, cD, bD)
            }

            function bx() {
                var cW = av(aK("ref"));
                if (cW.length) {
                    try {
                        cW = JSON_PIWIK.parse(cW);
                        if (T(cW)) {
                            return cW
                        }
                    } catch (cX) {}
                }
                return ["", "", 0, ""]
            }

            function bJ(cY, cX, cW) {
                cR(cY, "", -86400, cX, cW)
            }

            function bj(cX) {
                var cW = "testvalue";
                cR("test", cW, 10000, null, cX);
                if (av("test") === cW) {
                    bJ("test", null, cX);
                    return true
                }
                return false
            }

            function ax() {
                var cX = a9;
                a9 = false;
                var cW, cY;
                for (cW = 0; cW < bh.length; cW++) {
                    cY = aK(bh[cW]);
                    if (0 !== av(cY)) {
                        bJ(cY, bd, cD)
                    }
                }
                a9 = cX
            }

            function bO(cW) {
                bR = cW;
                aD()
            }

            function cV(c0) {
                if (!c0 || !T(c0)) {
                    return
                }
                var cZ = [];
                var cY;
                for (cY in c0) {
                    if (Object.prototype.hasOwnProperty.call(c0, cY)) {
                        cZ.push(cY)
                    }
                }
                var c1 = {};
                cZ.sort();
                var cW = cZ.length;
                var cX;
                for (cX = 0; cX < cW; cX++) {
                    c1[cZ[cX]] = c0[cZ[cX]]
                }
                return c1
            }

            function bY() {
                cR(aK("ses"), "*", ca, bd, cD, bD)
            }

            function a5() {
                var cZ = "";
                var cX = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var cY = cX.length;
                var cW;
                for (cW = 0; cW < 6; cW++) {
                    cZ += cX.charAt(Math.floor(Math.random() * cY))
                }
                return cZ
            }

            function ce(cY, dj, dk, cZ) {
                var di, cX = new Date(),
                    c6 = Math.round(cX.getTime() / 1000),
                    c3, dh, c0 = 1024,
                    dq, c7, df = aH,
                    c1 = aK("ses"),
                    dd = aK("ref"),
                    da = aK("cvar"),
                    db = av(c1),
                    dg = bx(),
                    dm = aV || by,
                    c4, cW;
                if (a9) {
                    ax()
                }
                if (cx) {
                    return ""
                }
                var dc = aO();
                if (!H(cZ)) {
                    cZ = ""
                }
                var c9 = E.characterSet || E.charset;
                if (!c9 || c9.toLowerCase() === "utf-8") {
                    c9 = null
                }
                c4 = dg[0];
                cW = dg[1];
                c3 = dg[2];
                dh = dg[3];
                if (!db) {
                    var dl = ca / 1000;
                    if (!dc.lastVisitTs || (c6 - dc.lastVisitTs) > dl) {
                        dc.visitCount++;
                        dc.lastVisitTs = dc.currentVisitTs
                    }
                    if (!bi || !c4.length) {
                        for (di in cc) {
                            if (Object.prototype.hasOwnProperty.call(cc, di)) {
                                c4 = f(dm, cc[di]);
                                if (c4.length) {
                                    break
                                }
                            }
                        }
                        for (di in br) {
                            if (Object.prototype.hasOwnProperty.call(br, di)) {
                                cW = f(dm, br[di]);
                                if (cW.length) {
                                    break
                                }
                            }
                        }
                    }
                    dq = d(bb);
                    c7 = dh.length ? d(dh) : "";
                    if (dq.length && !aM(dq) && (!bi || !c7.length || aM(c7))) {
                        dh = bb
                    }
                    if (dh.length || c4.length) {
                        c3 = c6;
                        dg = [c4, cW, c3, bN(dh.slice(0, c0))];
                        cR(dd, JSON_PIWIK.stringify(dg), cK, bd, cD, bD)
                    }
                }
                cY += "&idsite=" + bR + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + cX.getHours() + "&m=" + cX.getMinutes() + "&s=" + cX.getSeconds() + "&url=" + s(bN(dm)) + (bb.length ? "&urlref=" + s(bN(bb)) : "") + ((bl && bl.length) ? "&uid=" + s(bl) : "") + "&_id=" + dc.uuid + "&_idts=" + dc.createTs + "&_idvc=" + dc.visitCount + "&_idn=" + dc.newVisitor + (c4.length ? "&_rcn=" + s(c4) : "") + (cW.length ? "&_rck=" + s(cW) : "") + "&_refts=" + c3 + "&_viewts=" + dc.lastVisitTs + (String(dc.lastEcommerceOrderTs).length ? "&_ects=" + dc.lastEcommerceOrderTs : "") + (String(dh).length ? "&_ref=" + s(bN(dh.slice(0, c0))) : "") + (c9 ? "&cs=" + s(c9) : "") + "&send_image=0";
                for (di in cM) {
                    if (Object.prototype.hasOwnProperty.call(cM, di)) {
                        cY += "&" + di + "=" + cM[di]
                    }
                }
                var dp = [];
                if (dj) {
                    for (di in dj) {
                        if (Object.prototype.hasOwnProperty.call(dj, di) && /^dimension\d+$/.test(di)) {
                            var c2 = di.replace("dimension", "");
                            dp.push(parseInt(c2, 10));
                            dp.push(String(c2));
                            cY += "&" + di + "=" + dj[di];
                            delete dj[di]
                        }
                    }
                }
                if (dj && z(dj)) {
                    dj = null
                }
                for (di in ba) {
                    if (Object.prototype.hasOwnProperty.call(ba, di)) {
                        var c8 = (-1 === K(dp, di));
                        if (c8) {
                            cY += "&dimension" + di + "=" + ba[di]
                        }
                    }
                }
                if (dj) {
                    cY += "&data=" + s(JSON_PIWIK.stringify(dj))
                } else {
                    if (ai) {
                        cY += "&data=" + s(JSON_PIWIK.stringify(ai))
                    }
                }

                function c5(dr, ds) {
                    var dt = JSON_PIWIK.stringify(dr);
                    if (dt.length > 2) {
                        return "&" + ds + "=" + s(dt)
                    }
                    return ""
                }
                var dn = cV(bH);
                var de = cV(b7);
                cY += c5(dn, "cvar");
                cY += c5(de, "e_cvar");
                if (aH) {
                    cY += c5(aH, "_cvar");
                    for (di in df) {
                        if (Object.prototype.hasOwnProperty.call(df, di)) {
                            if (aH[di][0] === "" || aH[di][1] === "") {
                                delete aH[di]
                            }
                        }
                    }
                    if (bB) {
                        cR(da, JSON_PIWIK.stringify(aH), ca, bd, cD, bD)
                    }
                }
                if (aT) {
                    if (b8) {
                        cY += "&gt_ms=" + b8
                    } else {
                        if (i && i.timing && i.timing.requestStart && i.timing.responseEnd) {
                            cY += "&gt_ms=" + (i.timing.responseEnd - i.timing.requestStart)
                        }
                    }
                }
                if (aC) {
                    cY += "&pv_id=" + aC
                }
                dc.lastEcommerceOrderTs = H(cZ) && String(cZ).length ? cZ : dc.lastEcommerceOrderTs;
                aD(dc);
                bY();
                cY += X(dk, {
                    tracker: bt,
                    request: cY
                });
                if (cF.length) {
                    cY += "&" + cF
                }
                if (y(bW)) {
                    cY = bW(cY)
                }
                return cY
            }
            bC = function aX() {
                var cW = new Date();
                if (cE + aW <= cW.getTime()) {
                    var cX = ce("ping=1", null, "ping");
                    bq(cX, bu);
                    return true
                }
                return false
            };

            function be(cZ, cY, c4, c0, cW, c7) {
                var c2 = "idgoal=0",
                    c3, cX = new Date(),
                    c5 = [],
                    c6, c1 = String(cZ).length;
                if (c1) {
                    c2 += "&ec_id=" + s(cZ);
                    c3 = Math.round(cX.getTime() / 1000)
                }
                c2 += "&revenue=" + cY;
                if (String(c4).length) {
                    c2 += "&ec_st=" + c4
                }
                if (String(c0).length) {
                    c2 += "&ec_tx=" + c0
                }
                if (String(cW).length) {
                    c2 += "&ec_sh=" + cW
                }
                if (String(c7).length) {
                    c2 += "&ec_dt=" + c7
                }
                if (cG) {
                    for (c6 in cG) {
                        if (Object.prototype.hasOwnProperty.call(cG, c6)) {
                            if (!H(cG[c6][1])) {
                                cG[c6][1] = ""
                            }
                            if (!H(cG[c6][2])) {
                                cG[c6][2] = ""
                            }
                            if (!H(cG[c6][3]) || String(cG[c6][3]).length === 0) {
                                cG[c6][3] = 0
                            }
                            if (!H(cG[c6][4]) || String(cG[c6][4]).length === 0) {
                                cG[c6][4] = 1
                            }
                            c5.push(cG[c6])
                        }
                    }
                    c2 += "&ec_items=" + s(JSON_PIWIK.stringify(c5))
                }
                c2 = ce(c2, ai, "ecommerce", c3);
                bq(c2, bu);
                if (c1) {
                    cG = {}
                }
            }

            function bK(cW, c0, cZ, cY, cX, c1) {
                if (String(cW).length && H(c0)) {
                    be(cW, c0, cZ, cY, cX, c1)
                }
            }

            function bf(cW) {
                if (H(cW)) {
                    be("", cW, "", "", "", "")
                }
            }

            function bL(cX, cZ, cY) {
                aC = a5();
                var cW = ce("action_name=" + s(af(cX || a7)), cZ, "log");
                bq(cW, bu, cY)
            }

            function aR(cY, cX) {
                var cZ, cW = "(^| )(piwik[_-]" + cX;
                if (cY) {
                    for (cZ = 0; cZ < cY.length; cZ++) {
                        cW += "|" + cY[cZ]
                    }
                }
                cW += ")( |$)";
                return new RegExp(cW)
            }

            function aL(cW) {
                return (aw && cW && 0 === String(cW).indexOf(aw))
            }

            function cf(c0, cW, c1, cX) {
                if (aL(cW)) {
                    return 0
                }
                var cZ = aR(bw, "download"),
                    cY = aR(aY, "link"),
                    c2 = new RegExp("\\.(" + cL.join("|") + ")([?&#]|$)", "i");
                if (cY.test(c0)) {
                    return "link"
                }
                if (cX || cZ.test(c0) || c2.test(cW)) {
                    return "download"
                }
                if (c1) {
                    return 0
                }
                return "link"
            }

            function an(cX) {
                var cW;
                cW = cX.parentNode;
                while (cW !== null && H(cW)) {
                    if (Z.isLinkElement(cX)) {
                        break
                    }
                    cX = cW;
                    cW = cX.parentNode
                }
                return cX
            }

            function cQ(c1) {
                c1 = an(c1);
                if (!Z.hasNodeAttribute(c1, "href")) {
                    return
                }
                if (!H(c1.href)) {
                    return
                }
                var c0 = Z.getAttributeValueFromNode(c1, "href");
                if (aL(c0)) {
                    return
                }
                var cX = c1.pathname || b6(c1.href);
                var c2 = c1.hostname || d(c1.href);
                var c3 = c2.toLowerCase();
                var cY = c1.href.replace(c2, c3);
                var cZ = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                if (!cZ.test(cY)) {
                    var cW = cf(c1.className, cY, al(c3, cX), Z.hasNodeAttribute(c1, "download"));
                    if (cW) {
                        return {
                            type: cW,
                            href: cY
                        }
                    }
                }
            }

            function aG(cW, cX, cY, cZ) {
                var c0 = u.buildInteractionRequestParams(cW, cX, cY, cZ);
                if (!c0) {
                    return
                }
                return ce(c0, null, "contentInteraction")
            }

            function ct(cY, cZ, c3, cW, cX) {
                if (!H(cY)) {
                    return
                }
                if (aL(cY)) {
                    return cY
                }
                var c1 = u.toAbsoluteUrl(cY);
                var c0 = "redirecturl=" + s(c1) + "&";
                c0 += aG(cZ, c3, cW, (cX || cY));
                var c2 = "&";
                if (aw.indexOf("?") < 0) {
                    c2 = "?"
                }
                return aw + c2 + c0
            }

            function a1(cW, cX) {
                if (!cW || !cX) {
                    return false
                }
                var cY = u.findTargetNode(cW);
                if (u.shouldIgnoreInteraction(cY)) {
                    return false
                }
                cY = u.findTargetNodeNoDefault(cW);
                if (cY && !S(cY, cX)) {
                    return false
                }
                return true
            }

            function cg(cY, cX, c0) {
                if (!cY) {
                    return
                }
                var cW = u.findParentContentNode(cY);
                if (!cW) {
                    return
                }
                if (!a1(cW, cY)) {
                    return
                }
                var cZ = u.buildContentBlock(cW);
                if (!cZ) {
                    return
                }
                if (!cZ.target && c0) {
                    cZ.target = c0
                }
                return u.buildInteractionRequestParams(cX, cZ.name, cZ.piece, cZ.target)
            }

            function aN(cX) {
                if (!bV || !bV.length) {
                    return false
                }
                var cW, cY;
                for (cW = 0; cW < bV.length; cW++) {
                    cY = bV[cW];
                    if (cY && cY.name === cX.name && cY.piece === cX.piece && cY.target === cX.target) {
                        return true
                    }
                }
                return false
            }

            function bp(cZ) {
                if (!cZ) {
                    return false
                }
                var c2 = u.findTargetNode(cZ);
                if (!c2 || u.shouldIgnoreInteraction(c2)) {
                    return false
                }
                var c3 = cQ(c2);
                if (cN && c3 && c3.type) {
                    return false
                }
                if (Z.isLinkElement(c2) && Z.hasNodeAttributeWithValue(c2, "href")) {
                    var cW = String(Z.getAttributeValueFromNode(c2, "href"));
                    if (0 === cW.indexOf("#")) {
                        return false
                    }
                    if (aL(cW)) {
                        return true
                    }
                    if (!u.isUrlToCurrentDomain(cW)) {
                        return false
                    }
                    var c0 = u.buildContentBlock(cZ);
                    if (!c0) {
                        return
                    }
                    var cY = c0.name;
                    var c4 = c0.piece;
                    var c1 = c0.target;
                    if (!Z.hasNodeAttributeWithValue(c2, u.CONTENT_TARGET_ATTR) || c2.wasContentTargetAttrReplaced) {
                        c2.wasContentTargetAttrReplaced = true;
                        c1 = u.toAbsoluteUrl(cW);
                        Z.setAnyAttribute(c2, u.CONTENT_TARGET_ATTR, c1)
                    }
                    var cX = ct(cW, "click", cY, c4, c1);
                    u.setHrefAttribute(c2, cX);
                    return true
                }
                return false
            }

            function aE(cX) {
                if (!cX || !cX.length) {
                    return
                }
                var cW;
                for (cW = 0; cW < cX.length; cW++) {
                    bp(cX[cW])
                }
            }

            function aP(cW) {
                return function(cX) {
                    if (!cW) {
                        return
                    }
                    var c0 = u.findParentContentNode(cW);
                    var c1;
                    if (cX) {
                        c1 = cX.target || cX.srcElement
                    }
                    if (!c1) {
                        c1 = cW
                    }
                    if (!a1(c0, c1)) {
                        return
                    }
                    b1(bu);
                    if (Z.isLinkElement(cW) && Z.hasNodeAttributeWithValue(cW, "href") && Z.hasNodeAttributeWithValue(cW, u.CONTENT_TARGET_ATTR)) {
                        var cY = Z.getAttributeValueFromNode(cW, "href");
                        if (!aL(cY) && cW.wasContentTargetAttrReplaced) {
                            Z.setAnyAttribute(cW, u.CONTENT_TARGET_ATTR, "")
                        }
                    }
                    var c5 = cQ(cW);
                    if (aj && c5 && c5.type) {
                        return c5.type
                    }
                    if (bp(c0)) {
                        return "href"
                    }
                    var c2 = u.buildContentBlock(c0);
                    if (!c2) {
                        return
                    }
                    var cZ = c2.name;
                    var c6 = c2.piece;
                    var c4 = c2.target;
                    var c3 = aG("click", cZ, c6, c4);
                    bq(c3, bu);
                    return c3
                }
            }

            function bM(cY) {
                if (!cY || !cY.length) {
                    return
                }
                var cW, cX;
                for (cW = 0; cW < cY.length; cW++) {
                    cX = u.findTargetNode(cY[cW]);
                    if (cX && !cX.contentInteractionTrackingSetupDone) {
                        cX.contentInteractionTrackingSetupDone = true;
                        ah(cX, "click", aP(cX))
                    }
                }
            }

            function bk(cY, cZ) {
                if (!cY || !cY.length) {
                    return []
                }
                var cW, cX;
                for (cW = 0; cW < cY.length; cW++) {
                    if (aN(cY[cW])) {
                        cY.splice(cW, 1);
                        cW--
                    } else {
                        bV.push(cY[cW])
                    }
                }
                if (!cY || !cY.length) {
                    return []
                }
                aE(cZ);
                bM(cZ);
                var c0 = [];
                for (cW = 0; cW < cY.length; cW++) {
                    cX = ce(u.buildImpressionRequestParams(cY[cW].name, cY[cW].piece, cY[cW].target), undefined, "contentImpressions");
                    if (cX) {
                        c0.push(cX)
                    }
                }
                return c0
            }

            function ck(cX) {
                var cW = u.collectContent(cX);
                return bk(cW, cX)
            }

            function aZ(cX) {
                if (!cX || !cX.length) {
                    return []
                }
                var cW;
                for (cW = 0; cW < cX.length; cW++) {
                    if (!u.isNodeVisible(cX[cW])) {
                        cX.splice(cW, 1);
                        cW--
                    }
                }
                if (!cX || !cX.length) {
                    return []
                }
                return ck(cX)
            }

            function ay(cY, cW, cX) {
                var cZ = u.buildImpressionRequestParams(cY, cW, cX);
                return ce(cZ, null, "contentImpression")
            }

            function cP(cZ, cX) {
                if (!cZ) {
                    return
                }
                var cW = u.findParentContentNode(cZ);
                var cY = u.buildContentBlock(cW);
                if (!cY) {
                    return
                }
                if (!cX) {
                    cX = "Unknown"
                }
                return aG(cX, cY.name, cY.piece, cY.target)
            }

            function cw(cX, cZ, cW, cY) {
                return "e_c=" + s(cX) + "&e_a=" + s(cZ) + (H(cW) ? "&e_n=" + s(cW) : "") + (H(cY) ? "&e_v=" + s(cY) : "")
            }

            function am(cY, c0, cW, cZ, c2, c1) {
                if (a(String(cY)).length === 0 || a(String(c0)).length === 0) {
                    ae("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces");
                    return false
                }
                var cX = ce(cw(cY, c0, cW, cZ), c2, "event");
                bq(cX, bu, c1)
            }

            function bT(cW, cZ, cX, c0) {
                var cY = ce("search=" + s(cW) + (cZ ? "&search_cat=" + s(cZ) : "") + (H(cX) ? "&search_count=" + cX : ""), c0, "sitesearch");
                bq(cY, bu)
            }

            function cA(cW, cZ, cY) {
                var cX = ce("idgoal=" + cW + (cZ ? "&revenue=" + cZ : ""), cY, "goal");
                bq(cX, bu)
            }

            function cH(cZ, cW, c3, c2, cY) {
                var c1 = cW + "=" + s(bN(cZ));
                var cX = cg(cY, "click", cZ);
                if (cX) {
                    c1 += "&" + cX
                }
                var c0 = ce(c1, c3, "link");
                bq(c0, bu, c2)
            }

            function bF(cX, cW) {
                if (cX !== "") {
                    return cX + cW.charAt(0).toUpperCase() + cW.slice(1)
                }
                return cW
            }

            function b2(c1) {
                var c0, cW, cZ = ["", "webkit", "ms", "moz"],
                    cY;
                if (!a3) {
                    for (cW = 0; cW < cZ.length; cW++) {
                        cY = cZ[cW];
                        if (Object.prototype.hasOwnProperty.call(E, bF(cY, "hidden"))) {
                            if (E[bF(cY, "visibilityState")] === "prerender") {
                                c0 = true
                            }
                            break
                        }
                    }
                }
                if (c0) {
                    ah(E, cY + "visibilitychange", function cX() {
                        E.removeEventListener(cY + "visibilitychange", cX, false);
                        c1()
                    });
                    return
                }
                c1()
            }

            function b4(cW) {
                if (!cW) {
                    return
                }
                if (!Z.hasNodeAttribute(cW, "href")) {
                    return
                }
                var cX = Z.getAttributeValueFromNode(cW, "href");
                if (!cX || aL(cX)) {
                    return
                }
                cX = k(cX, ao);
                if (cX.indexOf("?") > 0) {
                    cX += "&"
                } else {
                    cX += "?"
                }
                var cZ = aO().uuid;
                var cY = aB();
                cX = D(cX, ao, cZ + cY);
                Z.setAnyAttribute(cW, "href", cX)
            }

            function at(cZ) {
                var c0 = Z.getAttributeValueFromNode(cZ, "href");
                if (!c0) {
                    return false
                }
                c0 = String(c0);
                var cX = c0.indexOf("//") === 0 || c0.indexOf("http://") === 0 || c0.indexOf("https://") === 0;
                if (!cX) {
                    return false
                }
                var cW = cZ.pathname || b6(cZ.href);
                var cY = (cZ.hostname || d(cZ.href)).toLowerCase();
                if (al(cY, cW)) {
                    if (!cq(cB, J(cY))) {
                        return true
                    }
                    return false
                }
                return false
            }

            function cp(cW) {
                var cX = cQ(cW);
                if (cX && cX.type) {
                    cX.href = o(cX.href);
                    cH(cX.href, cX.type, undefined, null, cW);
                    return
                }
                if (cu) {
                    cW = an(cW);
                    if (at(cW)) {
                        b4(cW)
                    }
                }
            }

            function ch() {
                return E.all && !E.addEventListener
            }

            function cC(cW) {
                var cY = cW.which;
                var cX = (typeof cW.button);
                if (!cY && cX !== "undefined") {
                    if (ch()) {
                        if (cW.button & 1) {
                            cY = 1
                        } else {
                            if (cW.button & 2) {
                                cY = 3
                            } else {
                                if (cW.button & 4) {
                                    cY = 2
                                }
                            }
                        }
                    } else {
                        if (cW.button === 0 || cW.button === "0") {
                            cY = 1
                        } else {
                            if (cW.button & 1) {
                                cY = 2
                            } else {
                                if (cW.button & 2) {
                                    cY = 3
                                }
                            }
                        }
                    }
                }
                return cY
            }

            function bE(cW) {
                switch (cC(cW)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }

            function aS(cW) {
                return cW.target || cW.srcElement
            }

            function au(cW) {
                return function(cZ) {
                    cZ = cZ || R.event;
                    var cY = bE(cZ);
                    var c0 = aS(cZ);
                    if (cZ.type === "click") {
                        var cX = false;
                        if (cW && cY === "middle") {
                            cX = true
                        }
                        if (c0 && !cX) {
                            cp(c0)
                        }
                    } else {
                        if (cZ.type === "mousedown") {
                            if (cY === "middle" && c0) {
                                aI = cY;
                                bn = c0
                            } else {
                                aI = bn = null
                            }
                        } else {
                            if (cZ.type === "mouseup") {
                                if (cY === aI && c0 === bn) {
                                    cp(c0)
                                }
                                aI = bn = null
                            } else {
                                if (cZ.type === "contextmenu") {
                                    cp(c0)
                                }
                            }
                        }
                    }
                }
            }

            function ak(cY, cX) {
                var cW = typeof cX;
                if (cW === "undefined") {
                    cX = true
                }
                ah(cY, "click", au(cX), false);
                if (cX) {
                    ah(cY, "mouseup", au(cX), false);
                    ah(cY, "mousedown", au(cX), false);
                    ah(cY, "contextmenu", au(cX), false)
                }
            }

            function bo(cY, c0) {
                aj = true;
                var cZ, cX = aR(bm, "ignore"),
                    c1 = E.links,
                    cW = null,
                    c2 = null;
                if (c1) {
                    for (cZ = 0; cZ < c1.length; cZ++) {
                        cW = c1[cZ];
                        if (!cX.test(cW.className)) {
                            c2 = typeof cW.piwikTrackers;
                            if ("undefined" === c2) {
                                cW.piwikTrackers = []
                            }
                            if (-1 === K(cW.piwikTrackers, c0)) {
                                cW.piwikTrackers.push(c0);
                                ak(cW, cY)
                            }
                        }
                    }
                }
            }

            function aJ(cX, c0, c1) {
                if (b0) {
                    return true
                }
                b0 = true;
                var c2 = false;
                var cZ, cY;

                function cW() {
                    c2 = true
                }
                m(function() {
                    function c3(c5) {
                        setTimeout(function() {
                            if (!b0) {
                                return
                            }
                            c2 = false;
                            c1.trackVisibleContentImpressions();
                            c3(c5)
                        }, c5)
                    }

                    function c4(c5) {
                        setTimeout(function() {
                            if (!b0) {
                                return
                            }
                            if (c2) {
                                c2 = false;
                                c1.trackVisibleContentImpressions()
                            }
                            c4(c5)
                        }, c5)
                    }
                    if (cX) {
                        cZ = ["scroll", "resize"];
                        for (cY = 0; cY < cZ.length; cY++) {
                            if (E.addEventListener) {
                                E.addEventListener(cZ[cY], cW)
                            } else {
                                R.attachEvent("on" + cZ[cY], cW)
                            }
                        }
                        c4(100)
                    }
                    if (c0 && c0 > 0) {
                        c0 = parseInt(c0, 10);
                        c3(c0)
                    }
                })
            }

            function co() {
                var cX, cZ, c0 = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    dir: "application/x-director",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                };
                if (!((new RegExp("MSIE")).test(h.userAgent))) {
                    if (h.mimeTypes && h.mimeTypes.length) {
                        for (cX in c0) {
                            if (Object.prototype.hasOwnProperty.call(c0, cX)) {
                                cZ = h.mimeTypes[c0[cX]];
                                cM[cX] = (cZ && cZ.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (typeof navigator.javaEnabled !== "unknown" && H(h.javaEnabled) && h.javaEnabled()) {
                        cM.java = "1"
                    }
                    if (y(R.GearsFactory)) {
                        cM.gears = "1"
                    }
                    cM.cookie = bQ()
                }
                var cY = parseInt(U.width, 10);
                var cW = parseInt(U.height, 10);
                cM.res = parseInt(cY, 10) + "x" + parseInt(cW, 10)
            }
            co();
            a6();
            aD();
            this.getVisitorId = function() {
                return aO().uuid
            };
            this.getVisitorInfo = function() {
                return cv()
            };
            this.getAttributionInfo = function() {
                return bx()
            };
            this.getAttributionCampaignName = function() {
                return bx()[0]
            };
            this.getAttributionCampaignKeyword = function() {
                return bx()[1]
            };
            this.getAttributionReferrerTimestamp = function() {
                return bx()[2]
            };
            this.getAttributionReferrerUrl = function() {
                return bx()[3]
            };
            this.setTrackerUrl = function(cW) {
                aw = cW
            };
            this.getTrackerUrl = function() {
                return aw
            };
            this.getPiwikUrl = function() {
                return M(this.getTrackerUrl(), bs)
            };
            this.addTracker = function(cW, cY) {
                if (!cY) {
                    throw new Error("A siteId must be given to add a new tracker")
                }
                if (!H(cW) || null === cW) {
                    cW = this.getTrackerUrl()
                }
                var cX = new O(cW, cY);
                G.push(cX);
                return cX
            };
            this.getSiteId = function() {
                return bR
            };
            this.setSiteId = function(cW) {
                bO(cW)
            };
            this.setUserId = function(cW) {
                if (!H(cW) || !cW.length) {
                    return
                }
                bl = cW;
                bz = bS(bl).substr(0, 16)
            };
            this.getUserId = function() {
                return bl
            };
            this.setCustomData = function(cW, cX) {
                if (T(cW)) {
                    ai = cW
                } else {
                    if (!ai) {
                        ai = {}
                    }
                    ai[cW] = cX
                }
            };
            this.getCustomData = function() {
                return ai
            };
            this.setCustomRequestProcessing = function(cW) {
                bW = cW
            };
            this.appendToTrackingUrl = function(cW) {
                cF = cW
            };
            this.getRequest = function(cW) {
                return ce(cW)
            };
            this.addPlugin = function(cW, cX) {
                b[cW] = cX
            };
            this.setCustomDimension = function(cW, cX) {
                cW = parseInt(cW, 10);
                if (cW > 0) {
                    if (!H(cX)) {
                        cX = ""
                    }
                    if (!v(cX)) {
                        cX = String(cX)
                    }
                    ba[cW] = cX
                }
            };
            this.getCustomDimension = function(cW) {
                cW = parseInt(cW, 10);
                if (cW > 0 && Object.prototype.hasOwnProperty.call(ba, cW)) {
                    return ba[cW]
                }
            };
            this.deleteCustomDimension = function(cW) {
                cW = parseInt(cW, 10);
                if (cW > 0) {
                    delete ba[cW]
                }
            };
            this.setCustomVariable = function(cX, cW, c0, cY) {
                var cZ;
                if (!H(cY)) {
                    cY = "visit"
                }
                if (!H(cW)) {
                    return
                }
                if (!H(c0)) {
                    c0 = ""
                }
                if (cX > 0) {
                    cW = !v(cW) ? String(cW) : cW;
                    c0 = !v(c0) ? String(c0) : c0;
                    cZ = [cW.slice(0, bg), c0.slice(0, bg)];
                    if (cY === "visit" || cY === 2) {
                        cn();
                        aH[cX] = cZ
                    } else {
                        if (cY === "page" || cY === 3) {
                            bH[cX] = cZ
                        } else {
                            if (cY === "event") {
                                b7[cX] = cZ
                            }
                        }
                    }
                }
            };
            this.getCustomVariable = function(cX, cY) {
                var cW;
                if (!H(cY)) {
                    cY = "visit"
                }
                if (cY === "page" || cY === 3) {
                    cW = bH[cX]
                } else {
                    if (cY === "event") {
                        cW = b7[cX]
                    } else {
                        if (cY === "visit" || cY === 2) {
                            cn();
                            cW = aH[cX]
                        }
                    }
                }
                if (!H(cW) || (cW && cW[0] === "")) {
                    return false
                }
                return cW
            };
            this.deleteCustomVariable = function(cW, cX) {
                if (this.getCustomVariable(cW, cX)) {
                    this.setCustomVariable(cW, "", "", cX)
                }
            };
            this.deleteCustomVariables = function(cW) {
                if (cW === "page" || cW === 3) {
                    bH = {}
                } else {
                    if (cW === "event") {
                        b7 = {}
                    } else {
                        if (cW === "visit" || cW === 2) {
                            aH = {}
                        }
                    }
                }
            };
            this.storeCustomVariablesInCookie = function() {
                bB = true
            };
            this.setLinkTrackingTimer = function(cW) {
                bu = cW
            };
            this.getLinkTrackingTimer = function() {
                return bu
            };
            this.setDownloadExtensions = function(cW) {
                if (v(cW)) {
                    cW = cW.split("|")
                }
                cL = cW
            };
            this.addDownloadExtensions = function(cX) {
                var cW;
                if (v(cX)) {
                    cX = cX.split("|")
                }
                for (cW = 0; cW < cX.length; cW++) {
                    cL.push(cX[cW])
                }
            };
            this.removeDownloadExtensions = function(cY) {
                var cX, cW = [];
                if (v(cY)) {
                    cY = cY.split("|")
                }
                for (cX = 0; cX < cL.length; cX++) {
                    if (K(cY, cL[cX]) === -1) {
                        cW.push(cL[cX])
                    }
                }
                cL = cW
            };
            this.setDomains = function(cW) {
                ap = v(cW) ? [cW] : cW;
                var c0 = false,
                    cY = 0,
                    cX;
                for (cY; cY < ap.length; cY++) {
                    cX = String(ap[cY]);
                    if (cq(cB, J(cX))) {
                        c0 = true;
                        break
                    }
                    var cZ = b6(cX);
                    if (cZ && cZ !== "/" && cZ !== "/*") {
                        c0 = true;
                        break
                    }
                }
                if (!c0) {
                    ap.push(cB)
                }
            };
            this.enableCrossDomainLinking = function() {
                cu = true
            };
            this.disableCrossDomainLinking = function() {
                cu = false
            };
            this.isCrossDomainLinkingEnabled = function() {
                return cu
            };
            this.setCrossDomainLinkingTimeout = function(cW) {
                aQ = cW
            };
            this.setIgnoreClasses = function(cW) {
                bm = v(cW) ? [cW] : cW
            };
            this.setRequestMethod = function(cW) {
                cO = cW || b3
            };
            this.setRequestContentType = function(cW) {
                ci = cW || aA
            };
            this.setReferrerUrl = function(cW) {
                bb = cW
            };
            this.setCustomUrl = function(cW) {
                aV = bG(by, cW)
            };
            this.getCurrentUrl = function() {
                return aV || by
            };
            this.setDocumentTitle = function(cW) {
                a7 = cW
            };
            this.setAPIUrl = function(cW) {
                bs = cW
            };
            this.setDownloadClasses = function(cW) {
                bw = v(cW) ? [cW] : cW
            };
            this.setLinkClasses = function(cW) {
                aY = v(cW) ? [cW] : cW
            };
            this.setCampaignNameKey = function(cW) {
                cc = v(cW) ? [cW] : cW
            };
            this.setCampaignKeywordKey = function(cW) {
                br = v(cW) ? [cW] : cW
            };
            this.discardHashTag = function(cW) {
                bA = cW
            };
            this.setCookieNamePrefix = function(cW) {
                a8 = cW;
                aH = bI()
            };
            this.setCookieDomain = function(cW) {
                var cX = J(cW);
                if (bj(cX)) {
                    cD = cX;
                    a6()
                }
            };
            this.getCookieDomain = function() {
                return cD
            };
            this.hasCookies = function() {
                return "1" === bQ()
            };
            this.setSessionCookie = function(cY, cX, cW) {
                if (!cY) {
                    throw new Error("Missing cookie name")
                }
                if (!H(cW)) {
                    cW = ca
                }
                bh.push(cY);
                cR(aK(cY), cX, cW, bd, cD, bD)
            };
            this.getCookie = function(cX) {
                var cW = av(aK(cX));
                if (cW === 0) {
                    return null
                }
                return cW
            };
            this.setCookiePath = function(cW) {
                bd = cW;
                a6()
            };
            this.getCookiePath = function(cW) {
                return bd
            };
            this.setVisitorCookieTimeout = function(cW) {
                cs = cW * 1000
            };
            this.setSessionCookieTimeout = function(cW) {
                ca = cW * 1000
            };
            this.getSessionCookieTimeout = function() {
                return ca
            };
            this.setReferralCookieTimeout = function(cW) {
                cK = cW * 1000
            };
            this.setConversionAttributionFirstReferrer = function(cW) {
                bi = cW
            };
            this.setSecureCookie = function(cW) {
                bD = cW
            };
            this.disableCookies = function() {
                a9 = true;
                cM.cookie = "0";
                if (bR) {
                    ax()
                }
            };
            this.deleteCookies = function() {
                ax()
            };
            this.setDoNotTrack = function(cX) {
                var cW = h.doNotTrack || h.msDoNotTrack;
                cx = cX && (cW === "yes" || cW === "1");
                if (cx) {
                    this.disableCookies()
                }
            };
            this.addListener = function(cX, cW) {
                ak(cX, cW)
            };
            this.enableLinkTracking = function(cX) {
                cN = true;
                var cW = this;
                b2(function() {
                    p(function() {
                        bo(cX, cW)
                    })
                })
            };
            this.enableJSErrorTracking = function() {
                if (cz) {
                    return
                }
                cz = true;
                var cW = R.onerror;
                R.onerror = function(c1, cZ, cY, c0, cX) {
                    b2(function() {
                        var c2 = "JavaScript Errors";
                        var c3 = cZ + ":" + cY;
                        if (c0) {
                            c3 += ":" + c0
                        }
                        am(c2, c3, c1)
                    });
                    if (cW) {
                        return cW(c1, cZ, cY, c0, cX)
                    }
                    return false
                }
            };
            this.disablePerformanceTracking = function() {
                aT = false
            };
            this.setGenerationTimeMs = function(cW) {
                b8 = parseInt(cW, 10)
            };
            this.enableHeartBeatTimer = function(cW) {
                cW = Math.max(cW, 1);
                aW = (cW || 15) * 1000;
                if (cE !== null) {
                    cT()
                }
            };
            this.disableHeartBeatTimer = function() {
                bv();
                if (aW || aF) {
                    if (R.removeEventListener) {
                        R.removeEventListener("focus", a0, true);
                        R.removeEventListener("blur", aq, true)
                    } else {
                        if (R.detachEvent) {
                            R.detachEvent("onfocus", a0);
                            R.detachEvent("onblur", aq)
                        }
                    }
                }
                aW = null;
                aF = false
            };
            this.killFrame = function() {
                if (R.location !== R.top.location) {
                    R.top.location = R.location
                }
            };
            this.redirectFile = function(cW) {
                if (R.location.protocol === "file:") {
                    R.location = cW
                }
            };
            this.setCountPreRendered = function(cW) {
                a3 = cW
            };
            this.trackGoal = function(cW, cY, cX) {
                b2(function() {
                    cA(cW, cY, cX)
                })
            };
            this.trackLink = function(cX, cW, cZ, cY) {
                b2(function() {
                    cH(cX, cW, cZ, cY)
                })
            };
            this.getNumTrackedPageViews = function() {
                return cd
            };
            this.trackPageView = function(cW, cY, cX) {
                bV = [];
                if (L(bR)) {
                    b2(function() {
                        V(aw, bs, bR)
                    })
                } else {
                    b2(function() {
                        cd++;
                        bL(cW, cY, cX)
                    })
                }
            };
            this.trackAllContentImpressions = function() {
                if (L(bR)) {
                    return
                }
                b2(function() {
                    p(function() {
                        var cW = u.findContentNodes();
                        var cX = ck(cW);
                        cS(cX, bu)
                    })
                })
            };
            this.trackVisibleContentImpressions = function(cW, cX) {
                if (L(bR)) {
                    return
                }
                if (!H(cW)) {
                    cW = true
                }
                if (!H(cX)) {
                    cX = 750
                }
                aJ(cW, cX, this);
                b2(function() {
                    m(function() {
                        var cY = u.findContentNodes();
                        var cZ = aZ(cY);
                        cS(cZ, bu)
                    })
                })
            };
            this.trackContentImpression = function(cY, cW, cX) {
                if (L(bR)) {
                    return
                }
                cY = a(cY);
                cW = a(cW);
                cX = a(cX);
                if (!cY) {
                    return
                }
                cW = cW || "Unknown";
                b2(function() {
                    var cZ = ay(cY, cW, cX);
                    bq(cZ, bu)
                })
            };
            this.trackContentImpressionsWithinNode = function(cW) {
                if (L(bR) || !cW) {
                    return
                }
                b2(function() {
                    if (b0) {
                        m(function() {
                            var cX = u.findContentNodesWithinNode(cW);
                            var cY = aZ(cX);
                            cS(cY, bu)
                        })
                    } else {
                        p(function() {
                            var cX = u.findContentNodesWithinNode(cW);
                            var cY = ck(cX);
                            cS(cY, bu)
                        })
                    }
                })
            };
            this.trackContentInteraction = function(cY, cZ, cW, cX) {
                if (L(bR)) {
                    return
                }
                cY = a(cY);
                cZ = a(cZ);
                cW = a(cW);
                cX = a(cX);
                if (!cY || !cZ) {
                    return
                }
                cW = cW || "Unknown";
                b2(function() {
                    var c0 = aG(cY, cZ, cW, cX);
                    bq(c0, bu)
                })
            };
            this.trackContentInteractionNode = function(cX, cW) {
                if (L(bR) || !cX) {
                    return
                }
                b2(function() {
                    var cY = cP(cX, cW);
                    bq(cY, bu)
                })
            };
            this.logAllContentBlocksOnPage = function() {
                var cY = u.findContentNodes();
                var cW = u.collectContent(cY);
                var cX = typeof console;
                if (cX !== "undefined" && console && console.log) {
                    console.log(cW)
                }
            };
            this.trackEvent = function(cX, cZ, cW, cY, c1, c0) {
                b2(function() {
                    am(cX, cZ, cW, cY, c1, c0)
                })
            };
            this.trackSiteSearch = function(cW, cY, cX, cZ) {
                b2(function() {
                    bT(cW, cY, cX, cZ)
                })
            };
            this.setEcommerceView = function(cZ, cW, cY, cX) {
                if (!H(cY) || !cY.length) {
                    cY = ""
                } else {
                    if (cY instanceof Array) {
                        cY = JSON_PIWIK.stringify(cY)
                    }
                }
                bH[5] = ["_pkc", cY];
                if (H(cX) && String(cX).length) {
                    bH[2] = ["_pkp", cX]
                }
                if ((!H(cZ) || !cZ.length) && (!H(cW) || !cW.length)) {
                    return
                }
                if (H(cZ) && cZ.length) {
                    bH[3] = ["_pks", cZ]
                }
                if (!H(cW) || !cW.length) {
                    cW = ""
                }
                bH[4] = ["_pkn", cW]
            };
            this.addEcommerceItem = function(c0, cW, cY, cX, cZ) {
                if (c0.length) {
                    cG[c0] = [c0, cW, cY, cX, cZ]
                }
            };
            this.trackEcommerceOrder = function(cW, c0, cZ, cY, cX, c1) {
                bK(cW, c0, cZ, cY, cX, c1)
            };
            this.trackEcommerceCartUpdate = function(cW) {
                bf(cW)
            };
            this.trackRequest = function(cX, cZ, cY, cW) {
                b2(function() {
                    var c0 = ce(cX, cZ, cW);
                    bq(c0, bu, cY)
                })
            };
            e.trigger("TrackerSetup", [this])
        }

        function F() {
            return {
                push: aa
            }
        }

        function c(an, am) {
            var ao = {};
            var ak, al;
            for (ak = 0; ak < am.length; ak++) {
                var ai = am[ak];
                ao[ai] = 1;
                for (al = 0; al < an.length; al++) {
                    if (an[al] && an[al][0]) {
                        var aj = an[al][0];
                        if (ai === aj) {
                            aa(an[al]);
                            delete an[al];
                            if (ao[aj] > 1) {
                                ae("The method " + aj + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            ao[aj]++
                        }
                    }
                }
            }
            return an
        }
        var A = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setSiteId", "enableLinkTracking"];

        function Y(ai, ak) {
            var aj = new O(ai, ak);
            G.push(aj);
            _paq = c(_paq, A);
            for (C = 0; C < _paq.length; C++) {
                if (_paq[C]) {
                    aa(_paq[C])
                }
            }
            _paq = new F();
            return aj
        }
        ah(R, "beforeunload", ac, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        e = {
            initialized: false,
            JSON: JSON_PIWIK,
            DOM: {
                addEventListener: function(al, ak, aj, ai) {
                    var am = typeof ai;
                    if (am === "undefined") {
                        ai = false
                    }
                    ah(al, ak, aj, ai)
                },
                onLoad: m,
                onReady: p,
                isNodeVisible: j,
                isOrWasNodeVisible: u.isNodeVisible
            },
            on: function(aj, ai) {
                if (!w[aj]) {
                    w[aj] = []
                }
                w[aj].push(ai)
            },
            off: function(ak, aj) {
                if (!w[ak]) {
                    return
                }
                var ai = 0;
                for (ai; ai < w[ak].length; ai++) {
                    if (w[ak][ai] === aj) {
                        w[ak].splice(ai, 1)
                    }
                }
            },
            trigger: function(ak, al, aj) {
                if (!w[ak]) {
                    return
                }
                var ai = 0;
                for (ai; ai < w[ak].length; ai++) {
                    w[ak][ai].apply(aj || R, al)
                }
            },
            addPlugin: function(ai, aj) {
                b[ai] = aj
            },
            getTracker: function(ai, aj) {
                if (!H(aj)) {
                    aj = this.getAsyncTracker().getSiteId()
                }
                if (!H(ai)) {
                    ai = this.getAsyncTracker().getTrackerUrl()
                }
                return new O(ai, aj)
            },
            getAsyncTrackers: function() {
                return G
            },
            addTracker: function(ai, aj) {
                if (!G.length) {
                    Y(ai, aj)
                } else {
                    G[0].addTracker(ai, aj)
                }
            },
            getAsyncTracker: function(aj, am) {
                var al;
                if (G && G.length && G[0]) {
                    al = G[0]
                } else {
                    return Y(aj, am)
                }
                if (!am && !aj) {
                    return al
                }
                if ((!H(am) || null === am) && al) {
                    am = al.getSiteId()
                }
                if ((!H(aj) || null === aj) && al) {
                    aj = al.getTrackerUrl()
                }
                var ak, ai = 0;
                for (ai; ai < G.length; ai++) {
                    ak = G[ai];
                    if (ak && String(ak.getSiteId()) === String(am) && ak.getTrackerUrl() === aj) {
                        return ak
                    }
                }
            },
            retryMissedPluginCalls: function() {
                var aj = ab;
                ab = [];
                var ai = 0;
                for (ai; ai < aj.length; ai++) {
                    aa(aj[ai])
                }
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return e
            })
        }
        return e
    }());
    /*!!! pluginTrackerHook */
}(function() {
    function b() {
        if ("object" !== typeof _paq) {
            return false
        }
        var c = typeof _paq.length;
        if ("undefined" === c) {
            return false
        }
        return !!_paq.length
    }
    if (window && "object" === typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.piwikPluginAsyncInit.length; a++) {
            if (typeof window.piwikPluginAsyncInit[a] === "function") {
                window.piwikPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit()
    }
    if (!window.Piwik.getAsyncTrackers().length) {
        if (b()) {
            window.Piwik.addTracker()
        } else {
            _paq = {
                push: function(c) {
                    var d = typeof console;
                    if (d !== "undefined" && console && console.error) {
                        console.error("_paq.push() was used but Piwik tracker was not initialized before the piwik.js file was loaded. Make sure to configure the tracker via _paq.push before loading piwik.js. Alternatively, you can create a tracker via Piwik.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c)
                    }
                }
            }
        }
    }
    window.Piwik.trigger("PiwikInitialized", []);
    window.Piwik.initialized = true
}());
(function() {
    var a = (typeof AnalyticsTracker);
    if (a === "undefined") {
        AnalyticsTracker = window.Piwik
    }
}());
if (typeof piwik_log !== "function") {
    piwik_log = function(b, f, d, g) {
        function a(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var c, e = window.Piwik.getTracker(d, f);
        e.setDocumentTitle(b);
        e.setCustomData(g);
        c = a("tracker_pause");
        if (c) {
            e.setLinkTrackingTimer(c)
        }
        c = a("download_extensions");
        if (c) {
            e.setDownloadExtensions(c)
        }
        c = a("hosts_alias");
        if (c) {
            e.setDomains(c)
        }
        c = a("ignore_classes");
        if (c) {
            e.setIgnoreClasses(c)
        }
        e.trackPageView();
        if (a("install_tracker")) {
            piwik_track = function(i, k, j, h) {
                e.setSiteId(k);
                e.setTrackerUrl(j);
                e.trackLink(i, h)
            };
            e.enableLinkTracking()
        }
    };
    /*!! @license-end */
};