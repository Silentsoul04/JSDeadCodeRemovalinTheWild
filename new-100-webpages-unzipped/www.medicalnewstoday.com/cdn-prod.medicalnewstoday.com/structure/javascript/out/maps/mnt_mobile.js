/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = "1.11.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (l.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: k && !k.call("\ufeff\xa0") ? function(a) {
            return null == a ? "" : k.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function(a, b) {
                return a === b && (j = !0), 0
            },
            A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) return d;
                            if (g.id === h) return d.push(g), d
                        } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
                    } else {
                        if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
                    }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)), d
                    } catch (w) {} finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                k()
            })), c.attributes = gb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, z = b ? function(a, b) {
                if (a === b) return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function(a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return db(b, l, null, [a]).length > 0
        }, db.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === m
                },
                focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: lb(function() {
                    return [0]
                }),
                last: lb(function(a, b) {
                    return [b - 1]
                }),
                eq: lb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = jb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = kb(b);

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                    return a === b
                }, i, !0), l = qb(function(a) {
                    return I.call(b, a) > -1
                }, i, !0), m = [function(a, c, d) {
                    return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || .1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            n = 0;
                            while (o = a[n++])
                                if (o(m, g, i)) {
                                    j.push(m);
                                    break
                                }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        n = 0;
                        while (o = b[n++]) o(r, s, g, i);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = E.call(j));
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }
        g = db.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function(a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        B = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = z.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return y.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return E(a, "nextSibling")
        },
        prev: function(a) {
            return E(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g,
        G = {};

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, c) {
                        var d;
                        while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    });

    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
        else {
            z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && z.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    };
    var L = "undefined",
        M;
    for (M in n(l)) break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c = z.getElementsByTagName("body")[0];
            c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
        }),
        function() {
            var a = z.createElement("div");
            if (null == l.deleteExpando) {
                l.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    l.deleteExpando = !1
                }
            }
            a = null
        }(), n.acceptData = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        W = n.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) n.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        X = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = z.createDocumentFragment(),
            b = z.createElement("div"),
            c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                l.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function() {
        var b, c, d = z.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/,
        ab = /^([^.]*)(?:\.(.+)|)$/;

    function bb() {
        return !0
    }

    function cb() {
        return !1
    }

    function db() {
        try {
            return z.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = z.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submitBubbles || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.changeBubbles || (n.event.special.change = {
        setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }
    }), l.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });

    function eb(a) {
        var b = fb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g,
        hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kb = /<([\w:]+)/,
        lb = /<tbody/i,
        mb = /<|&#?\w+;/,
        nb = /<(?:script|style|link)/i,
        ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        tb = eb(z),
        ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
                else Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
                    else if (mb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                while (e--) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                    f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                n.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                    e = 0;
                    while (f = h[e++]) pb.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), n.fn.extend({
        text: function(a) {
            return W(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return W(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                o = k - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }

    function Gb(a) {
        var b = z,
            c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }! function() {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Hb = /^margin/,
        Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : z.documentElement.currentStyle && (Jb = function(a) {
        return a.currentStyle
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Mb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h = z.createElement("div"),
            i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
            reliableHiddenOffsets: function() {
                if (null != c) return c;
                var a, b, d, e = z.createElement("div"),
                    f = z.getElementsByTagName("body")[0];
                if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
            },
            boxSizing: function() {
                return null == d && k(), d
            },
            boxSizingReliable: function() {
                return null == e && k(), e
            },
            pixelPosition: function() {
                return null == f && k(), f
            },
            reliableMarginRight: function() {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) return;
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return g
            }
        });

        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
                zoom: 1
            } : {}, function() {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width), h.removeChild(b), c = h = null)
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Nb = /alpha\([^)]*\)/i,
        Ob = /opacity\s*=\s*([^)]*)/,
        Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"),
        Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ub = ["Webkit", "O", "Moz", "ms"];

    function Vb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ub.length;
        while (e--)
            if (b = Ub[e] + c, b in a) return b;
        return d
    }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Zb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "", i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, Kb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({
        css: function(a, b) {
            return W(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Wb(this, !0)
        },
        hide: function() {
            return Wb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }
    n.Tween = $b, $b.prototype = {
        constructor: $b,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }
    }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
        cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        ec = [jc],
        fc = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = cc.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function gc() {
        return setTimeout(function() {
            _b = void 0
        }), _b = n.now()
    }

    function hc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function lc(a, b, c) {
        var d, e, f = 0,
            g = ec.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: _b || gc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++)
            if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(lc, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? ec.unshift(a) : ec.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = lc(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: hc("show"),
            slideUp: hc("hide"),
            slideToggle: hc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), _b = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ac || (ac = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(ac), ac = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e = z.createElement("div");
            e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
        }();
    var mc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle,
        qc = /^(?:checked|selected)$/i,
        rc = l.getSetAttribute,
        sc = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), oc = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
        }
    }), rc || (nc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, pc.id = pc.name = pc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: nc.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(),
        xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/,
        Cc = /([?&])_=[^&]*/,
        Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fc = /^(?:GET|HEAD)$/,
        Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ic = {},
        Jc = {},
        Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];

    function Mc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nc(a, b, c, d) {
        var e = {},
            f = a === Jc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        },
        ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Rc = /%20/g,
        Sc = /\[\]$/,
        Tc = /\r?\n/g,
        Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Tc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0,
        Yc = {},
        Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Yc) Yc[a](void 0, !0)
    }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function(d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [],
        bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || dd
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return W(this, function(a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var fd = a.jQuery,
        gd = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
    }, typeof b === L && (a.jQuery = a.$ = n), n
});

//2017/05 Ad logic for new article template

$(document).ready(function() {
    var css_c4zijCheckAdvanced = 500;
    var css_hs211CheckAdvanced = 500;
    var adDistance = 550;
    var adStickyBuffer = 250;
    var hasFetchSidebarAds = false;
    var pageTimer = {};
    var refreshMobileStickyAdCount = 0;
    var stickyAdCloseFlag = false;
    var isGetMrecAdsAjaxAlreadyTrigger = false;

    var glob_mr_ecClassName = "css_hs211";
    var glob_leader_boardClassName = "css_c4zij";
    var glob_headerBarClassName = "css_h1ksn";

    //Run the timers up to make sure googletag api works
    var livepreview = window.location.href.indexOf("/livepreview/") > -1 ? true : false;

    var isAboutPage = window.location.href.indexOf("/about") > -1 ? true : false;

    var isProductPage = window.location.href.indexOf("/product-selection-process") > -1 ? true : false;

    var isProcessPage = window.location.href.indexOf("/process") > -1 ? true : false;

    if (glob_siteRevision < 7721 || glob_pageType == "account" || glob_pageType == "opinions" || isAboutPage || isProductPage || isProcessPage) {
        return false;
    }

    //Start to check 

    var $popularTabsContainer = $(".popular_tabs_container");
    var $suggestReadingContainer = $("#suggest_reading_outer_container");
    var $suggestReadingInnerContainer = $(".suggested_reading_inner");

    if (typeof googleDegfaultAdVars !== "undefined") {
        if (googleDegfaultAdVars.k1) {
            var k1path = googleDegfaultAdVars.k1;
        } else {
            var k1path = "none";
        }

        k1path = k1path.replace(new RegExp("'", 'g'), "");


        var adPagePath = '/4788/mnt/' + k1path + "/";
    } else {
        //default value
        var adPagePath = '/4788/';
    }

    if (document.getElementsByClassName(glob_mr_ecClassName).length == 0) {
        glob_mr_ecClassName = "css_hs211";
    }

    if (document.getElementsByClassName(glob_leader_boardClassName).length == 0) {
        glob_leader_boardClassName = "css_c4zij";

    }

    if (document.getElementsByClassName(glob_headerBarClassName).length == 0) {
        glob_headerBarClassName = "css_h1ksn";
    }


    fireOrSaveGoogleAdFunctions(function() {

        AdBridg.cmd.push(function() {
            if (window.AdBridg || livepreview || isAdblockOn()) {

                if (typeof showAdsOnArticle !== "undefined" && showAdsOnArticle) {

                    checkAdsRequirement();
                } else {
                    //if it's normal pages, we init the ad directly
                    initAdLoads();
                }
                //If it's mobile, we detect scroll depth events
                if (is_userMobile && !glob_responsiveOverride) {
                    initMobileStickyCloseFunction();
                    initScrollDepthDetection();
                }
            }
        });

    });




    function checkAdsRequirement() {
        var articleSidebarEndPoint = 0;

        //If it's desktop, we load the ads in after window loads
        if (!is_userMobile || (is_userMobile && glob_responsiveOverride)) {

            if (glob_pageType !== "sponsored") {
                //Check first insert offset

                if ($popularTabsContainer.length > 0) {
                    var articleSidebarStartPoint = $popularTabsContainer.offset().top + $popularTabsContainer.outerHeight();
                } else {
                    //if there's no popular tabs output, the start point will be last ad + 250px
                    var articleSidebarStartPoint = $("#dmr2_container").offset().top + $("#dmr2_container").outerHeight() + 250;
                }
                if ($suggestReadingContainer.length > 0) {
                    articleSidebarEndPoint = $suggestReadingContainer.offset().top;
                } else {
                    if ($("#slidebox_trigger").length > 0) {
                        articleSidebarEndPoint = $("#slidebox_trigger").offset().top;
                    } else {
                        //Info section
                        if ($("#social_bottom").length > 0) {
                            articleSidebarEndPoint = $("#social_bottom").offset().top;
                        }
                    }
                }
                //Check how many ads we need to request on sidebar (Not include suggest reading)
                var requestSidebarAds = Math.floor((articleSidebarEndPoint - articleSidebarStartPoint) / (adDistance + adStickyBuffer));
            } else {
                //We also need to wrap a holder div for dlb ads
                var $dlb2Container = $("#dlb2_container");

                $dlb2Container.wrap("<div class='css_c4zij_holder'></div>");
                $dlb2Container.addClass("css_c4zij-semi-sticky");

                //If it's sponsored content, we need to wrap sticky container to DMR
                var $dmr1Container = $("#dmr1_container");
                $dmr1Container.wrap("<div class='sticky_container'></div>").parent().css({
                    "height": $(".infobox_large").offset().top - $dmr1Container.parent().offset().top - adStickyBuffer,
                    "margin-bottom": adStickyBuffer
                });

                $dmr1Container.addClass("required_sticky");
            }


            if (requestSidebarAds > 0) {

                //Check how many ads we need to put on sidebar
                //
                if ($suggestReadingInnerContainer.length > 0) {
                    var requestSuggestReadingAds = Math.round($suggestReadingInnerContainer.length / 2);
                } else {
                    var requestSuggestReadingAds = 0;
                }

                //Find current latest css_hs211 ads on the page
                var currentMrecCounts = $("." + glob_mr_ecClassName).length || 0;

                var totalMrecNeeded = requestSidebarAds + requestSuggestReadingAds;

                if (!isGetMrecAdsAjaxAlreadyTrigger) {
                    getMrecAdsAjax(currentMrecCounts, totalMrecNeeded, requestSidebarAds);
                }

            } else {
                //if requestSidebar ads < 0 means the layout has been changed, we init the ads in the queue
                if ((typeof showAdsOnArticle !== "undefined" && showAdsOnArticle)) {
                    initAdLoads();
                }
            }

        } else {
            if ((typeof showAdsOnArticle !== "undefined" && showAdsOnArticle)) {
                initAdLoads();
            }
        }

    }


    function getMrecAdsAjax(currentMrecCounts, totalMrecNeeded, requestSidebarAds) {

        $.ajax({
            url: '/structure/javascript/ajax/ad-actions.php',
            type: 'POST',
            dataType: "json",
            data: {
                "action": "getcss_hs211ads",
                "currentMrecCounts": currentMrecCounts,
                "totalMrecNeeded": totalMrecNeeded,
                "livepreview": livepreview
            },
            beforeSend: function(result) {
                isGetMrecAdsAjaxAlreadyTrigger = true;
            },
            success: function(result) {
                if (result.status && result["adCollect"]) {


                    result["adCollect"].forEach(function(singleAds) {
                        if (singleAds["adhtml"] !== false) {


                            var outputHtml = $.parseHTML(singleAds["adhtml"]);

                            $(".sidebar").append($(outputHtml));


                            //if the ad is for article sidebar, we need to add extra condtion for 550px between ads and 250 buffer
                            if (singleAds["adNum"] <= (currentMrecCounts + requestSidebarAds)) {


                                if ($(".required_sticky").length == 0) {
                                    if ($popularTabsContainer.length > 0) {
                                        $("#" + singleAds["adContainer"]).wrap("<div class='sticky_container'></div>").parent().css({
                                            "height": adDistance,
                                            "margin-bottom": adStickyBuffer,
                                            "margin-top": "58px"
                                        });
                                    } else {
                                        $("#" + singleAds["adContainer"]).wrap("<div class='sticky_container'></div>").parent().css({
                                            "height": adDistance,
                                            "margin-bottom": adStickyBuffer,
                                            "margin-top": "308px"
                                        });
                                    }

                                } else {
                                    $("#" + singleAds["adContainer"]).wrap("<div class='sticky_container'></div>").parent().css({
                                        "height": adDistance,
                                        "margin-bottom": adStickyBuffer
                                    });
                                }



                                $("#" + singleAds["adContainer"]).addClass("required_sticky");

                            } else {
                                //Suggest reading ad placement needs to wait unit page fully loaded
                                $("#" + singleAds["adContainer"]).addClass("suggest_reading_sidebar");
                            }


                            //Init sticky code
                            if (typeof googleAdSlotInfo !== "undefined") {
                                googleAdSlotInfo.push({
                                    "slotName": singleAds["adUnit"],
                                    "slotContainer": singleAds["adContainer"]
                                });
                            }
                        }
                    });

                    //Check here
                    if ((typeof showAdsOnArticle !== "undefined" && showAdsOnArticle)) {
                        hasFetchSidebarAds = true;
                        initAdLoads();
                    }

                }
            }
        });
    }

    function initAdLoads() {


        //Start to check for lazy loading
        //Desktop only
        //2018/08 if user is from Tablet, we don't do any lazy loading as well
        if (!is_userMobile || (is_userMobile && glob_responsiveOverride)) {
            var body = document.body,
                html = document.documentElement;
            var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

            if (height) {
                var $window = $(window);
                //We calculate 40% of the page
                var lazyLoadCheckPoint = height * 0.4;
                if (typeof googleAdSlotInfo !== "undefined" && googleAdSlotInfo.length > 0) {

                    var displayAdsOnload = [];
                    var adsOnHold = [];

                    //AdBridg.cmd.push(function () {
                    googleAdSlotInfo.forEach(function(singleAd, index, object) {

                        //If it's been remove from the page, we remove it from the array as well
                        if ($("#" + singleAd.slotContainer).length == 0) {
                            googleAdSlotInfo.splice(index, 1);

                            return;
                        }


                        if ($("#" + singleAd.slotContainer).hasClass(glob_mr_ecClassName)) {
                            var adType = "css_hs211";
                        } else if ($("#" + singleAd.slotContainer).hasClass(glob_leader_boardClassName)) {
                            var adType = "css_c4zij";
                        } else if (singleAd.slotContainer == "div-gpt-ad-out-of-page") {
                            var adType = "out-of-page";
                        }


                        if (glob_pageType == "sponsored" && is_userTablet) {
                            //if it's tablet, we don't lazyload
                            var adbehavior = "under30";
                        } else {
                            if ($("#" + singleAd.slotContainer).offset().top <= lazyLoadCheckPoint) {
                                //upper 40% in the page
                                var adbehavior = "under30";
                            } else {
                                //plain ads without specific KV pair
                                var adbehavior = "upper30";
                            }
                        }

                        var alreadyOutput = true;
                        if (typeof window[singleAd.slotName] == "undefined") {
                            alreadyOutput = false;
                        }

                        var targetedElement = document.getElementById(singleAd.slotContainer);

                        //We only define the slots that's showing on the page
                        var hasDisplayNone = (targetedElement.offsetHeight === 0 && targetedElement.offsetWidth === 0);

                        if (adbehavior == "under30" && !hasDisplayNone) {
                            if (!alreadyOutput) {
                                defineAdSlot(singleAd.slotName, adType, adbehavior);
                                displayAdsOnload.push(window[singleAd.slotName]);
                            }
                        } else {

                            //if current window offset is larger than the ad, we need to show it
                            if ($window.scrollTop() >= $("#" + singleAd.slotContainer).offset().top && !hasDisplayNone) {
                                if (!alreadyOutput) {
                                    defineAdSlot(singleAd.slotName, adType, adbehavior);
                                    displayAdsOnload.push(window[singleAd.slotName]);
                                }

                            } else {
                                //If window offset is lower than the ad, we need to check the condition
                                if (adType == "css_c4zij" && ($("#" + singleAd.slotContainer).offset().top - $window.scrollTop()) <= css_c4zijCheckAdvanced && !hasDisplayNone) {
                                    if (!alreadyOutput) {
                                        defineAdSlot(singleAd.slotName, adType, adbehavior);
                                        displayAdsOnload.push(window[singleAd.slotName]);
                                    }
                                } else if (adType == "css_hs211" && ($("#" + singleAd.slotContainer).offset().top - $window.scrollTop()) <= css_hs211CheckAdvanced && !hasDisplayNone) {
                                    if (!alreadyOutput) {
                                        displayAdsOnload.push(window[singleAd.slotName]);
                                    }
                                } else {
                                    //For those not loaded at first place, we put it in a array to check on scroll
                                    adsOnHold.push(singleAd);
                                }
                            }

                        }

                    });


                    //});

                    AdBridg.cmd.push(function() {
                        AdBridg.serve();
                    });
                }
            }

            //Add ads listener in the page on scroll
            // Refresh the ad slot when it is about to come into view.
            if ($suggestReadingContainer.length > 0) {
                var suggestReadingAlignPoint = $suggestReadingContainer.offset().top;
            } else {
                var suggestReadingAlignPoint = 0;
            }

            $(window).scroll(function() {
                //Only do the check after 40% of the page
                if (typeof adsOnHold !== "undefined" && adsOnHold.length > 0) {
                    // console.log("adOnHold",adsOnHold);
                    var pageTop = $window.scrollTop();
                    var pageBottom = pageTop + $window.height();
                    var refreshAdsArray = [];
                    var targetHeaderBiddingAds = [];
                    adsOnHold.forEach(function(item, index, object) {

                        if (item["slotName"].indexOf("DLB") >= 0) {
                            //If it's css_c4zij we check before
                            var checkDistance = css_c4zijCheckAdvanced;
                        } else {
                            //Mrec check
                            var checkDistance = css_hs211CheckAdvanced;
                        }

                        var targetedElement = document.getElementById(item.slotContainer);
                        //We only define the slots that's showing on the page
                        var hasDisplayNone = (targetedElement.offsetHeight === 0 && targetedElement.offsetWidth === 0);

                        if ($("#" + item.slotContainer).offset().top - pageBottom <= checkDistance && !hasDisplayNone) {
                            //if it meet the distance,we remove it
                            object.splice(index, 1);
                            if (typeof window[item.slotName] == "undefined") {

                                if ($("#" + item.slotContainer).hasClass(glob_mr_ecClassName)) {
                                    var adType = "css_hs211";
                                } else if ($("#" + item.slotContainer).hasClass(glob_leader_boardClassName)) {
                                    var adType = "css_c4zij";
                                } else if (item.slotContainer == "div-gpt-ad-out-of-page") {
                                    var adType = "out-of-page";
                                }

                                if (glob_pageType == "sponsored" && is_userTablet) {
                                    //if it's tablet, we don't lazyload
                                    var adbehavior = "under30";
                                } else {
                                    if ($("#" + item.slotContainer).offset().top <= lazyLoadCheckPoint) {
                                        //upper 40% in the page
                                        var adbehavior = "under30";
                                    } else {
                                        //plain ads without specific KV pair
                                        var adbehavior = "upper30";
                                    }
                                }

                                defineAdSlot(item.slotName, adType, adbehavior);


                            }

                        }
                    });

                }

                if (suggestReadingAlignPoint > 0) {
                    if (suggestReadingAlignPoint !== $suggestReadingContainer.offset().top) {
                        alignSuggestReadingAds();
                        suggestReadingAlignPoint = $suggestReadingContainer.offset().top;
                    }
                }


                checkStickyRightRail();

                if (glob_pageType == "article" || glob_pageType == "info" || glob_pageType == "sponsored") {
                    checkLeaderBoardSticky();

                    if (glob_pageType == "sponsored") {
                        //if it's sponsored content, we check inline css_c4zij
                        checkInlineStickyLeaderBoard();
                    }
                }

            });
            alignSuggestReadingAds();
        } else {
            //If it mobile
            var body = document.body,
                html = document.documentElement;
            var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            if (height) {
                var $window = $(window);
                //We calculate 40% of the page
                var adKeyCheckPoint = height * 0.4;
                //console.log("Ads to define",googleAdSlotInfo);
                if (typeof googleAdSlotInfo !== "undefined" && googleAdSlotInfo.length > 0) {
                    var displayAdsOnload = [];
                    var targetHeaderBiddingAds = [];

                    googleAdSlotInfo.forEach(function(singleAd, index) {
                        // console.log(singleAd);

                        //If it's been remove from the page, we remove it from the array as well
                        if ($("#" + singleAd.slotContainer).length == 0) {
                            googleAdSlotInfo.splice(index, 1);
                            return;
                        }

                        if ($("#" + singleAd.slotContainer).hasClass(glob_mr_ecClassName)) {
                            var adType = "css_hs211";
                        } else if ($("#" + singleAd.slotContainer).hasClass(glob_leader_boardClassName)) {
                            var adType = "css_c4zij";
                        } else if (singleAd.slotContainer == "div-gpt-ad-out-of-page") {
                            var adType = "out-of-page";
                        }

                        //if it's mobile, all the ad unit under30 is set to true
                        if (glob_pageType == "sponsored") {
                            var adbehavior = "under30";
                        } else {
                            if (($("#" + singleAd.slotContainer).offset().top <= adKeyCheckPoint) || singleAd.slotName == "MLB1") {
                                //upper 40% in the page
                                var adbehavior = "under30";
                            } else {
                                //rest of the 60%
                                var adbehavior = "upper30";
                            }
                        }


                        var alreadyOutput = true;
                        if (typeof window[singleAd.slotName] == "undefined") {
                            defineAdSlot(singleAd.slotName, adType, adbehavior);
                            alreadyOutput = false;
                            // console.log("output ads-->", singleAd.slotName);
                        }


                        //No lazy load on mobile, so we put all the ads in
                        if (typeof window[singleAd.slotName] !== "undefined" && !alreadyOutput) {
                            displayAdsOnload.push(window[singleAd.slotName]);
                            targetHeaderBiddingAds.push(singleAd);
                        }

                    });

                }
            }
        }

    }

    var pageStartWidth = window.innerWidth;
    var dlbRefreshStartPoint = 989;
    var dlbRefreshEndPoint = 1148;
    var dmrRefreshPoint = 989;
    var dmrDoRefresh = false;
    var dlbDoRefresh = false;
    var storepreviousWidth = window.innerWidth;

    //Only add events on desktop/tablet
    if (!is_userMobile || (is_userMobile && glob_responsiveOverride)) {
        $(window).resize(function() {

            fireOrSaveGoogleAdFunctions(function() {


                var windowWidth = window.innerWidth;
                if ((((windowWidth >= dmrRefreshPoint) && (pageStartWidth < dmrRefreshPoint)) || ((windowWidth <= dmrRefreshPoint) && (pageStartWidth > dmrRefreshPoint))) && !dlbDoRefresh) {
                    //when resize, we remove all the sticky status
                    $(".required_sticky").removeClass("sticky_scroll sticky_bottom");
                    //MREC
                    // console.log("Trigger Refresh");
                    if (!hasFetchSidebarAds && glob_pageType !== "sponsored") {
                        if ($popularTabsContainer.length > 0) {
                            var articleSidebarStartPoint = $popularTabsContainer.offset().top + $popularTabsContainer.outerHeight();
                        } else if ($("#dmr2_container").length > 0) {
                            //if there's no popular tabs output, the start point will be last ad + 250px
                            var articleSidebarStartPoint = $("#dmr2_container").offset().top + $("#dmr2_container").outerHeight() + 250;
                        }
                        if ($suggestReadingContainer.length > 0) {
                            var articleSidebarEndPoint = $suggestReadingContainer.offset().top;
                        } else if ($("#slidebox_trigger").length > 0) {
                            var articleSidebarEndPoint = $("#slidebox_trigger").offset().top;
                        }

                        //Check how many ads we need to request on sidebar (Not include suggest reading)
                        var requestSidebarAds = Math.floor((articleSidebarEndPoint - articleSidebarStartPoint) / (adDistance + adStickyBuffer));

                        if (requestSidebarAds > 0) {
                            //Check how many ads we need to put on sidebar
                            if ($suggestReadingInnerContainer.length > 0) {
                                var requestSuggestReadingAds = Math.round($suggestReadingInnerContainer.length / 2);
                            } else {
                                var requestSuggestReadingAds = 0;
                            }

                            //Find current latest css_hs211 ads on the page
                            var currentMrecCounts = $("." + glob_mr_ecClassName).length || 0;

                            var totalMrecNeeded = requestSidebarAds + requestSuggestReadingAds;


                            if (!isGetMrecAdsAjaxAlreadyTrigger) {
                                getMrecAdsAjax(currentMrecCounts, totalMrecNeeded, requestSidebarAds);
                            }
                            $(window).scroll();
                            alignSuggestReadingAds();
                        }

                    } else {


                        if (glob_pageType == "sponsored") {
                            //if it's sponsored there might be MMR in the article as well
                            var allMRECAds = $("." + glob_mr_ecClassName);
                            var refreshSideBarArray = [];
                            allMRECAds.each(function() {
                                var refreshSlotName = $(this).attr("id").replace("_container", "").toUpperCase();

                                if (typeof window[refreshSlotName] !== "undefined") {
                                    refreshSideBarArray.push(window[refreshSlotName]);
                                }
                            });
                        } else {
                            var refreshSideBarAdsNumber = $("." + glob_mr_ecClassName).length;
                            var refreshSideBarArray = [];
                            for (var i = 1; i <= refreshSideBarAdsNumber; i++) {
                                var refreshSlotName = "DMR" + i;

                                if (typeof window[refreshSlotName] !== "undefined") {
                                    refreshSideBarArray.push(window[refreshSlotName]);
                                }

                            }
                        }
                        handleAdsBulkRefresh(refreshSideBarArray);


                    }
                    //If do refresh, we need to reset pageStartWidth
                    pageStartWidth = windowWidth;
                }


                //Leaderboard
                if ((storepreviousWidth < dlbRefreshStartPoint && windowWidth >= dlbRefreshStartPoint) || (storepreviousWidth > dlbRefreshEndPoint && windowWidth <= dlbRefreshEndPoint) || ((storepreviousWidth > dlbRefreshStartPoint && windowWidth <= dlbRefreshStartPoint) && (storepreviousWidth < dlbRefreshEndPoint && windowWidth < dlbRefreshEndPoint)) || (storepreviousWidth < dlbRefreshEndPoint && windowWidth >= dlbRefreshEndPoint)) {

                    var refreshLeaderBoardAdsNumber = $(".article_body ." + glob_leader_boardClassName).length || $(".css_c4zij_holder ." + glob_leader_boardClassName).length;

                    var refreshLeaderBoardAdsArray = [];

                    //console.log("refreshLeaderBoard Number",refreshLeaderBoardAdsNumber);
                    //Leaderboard starts from DLB2 now
                    for (var i = 2; i <= refreshLeaderBoardAdsNumber + 1; i++) {
                        var refreshSlotName = "DLB" + i;
                        if (typeof window[refreshSlotName] !== "undefined") {
                            refreshLeaderBoardAdsArray.push(window[refreshSlotName]);
                        }

                    }
                    handleAdsBulkRefresh(refreshLeaderBoardAdsArray);


                }

                storepreviousWidth = windowWidth;
            });

        });
    }




    $(window).load(function() {

        //Set position when it loads

        // if(is_userMobile&&!glob_responsiveOverride){
        // 	if(showAdsOnArticle){
        // 		//initAdLoads();
        // 	}
        // }

        fireOrSaveGoogleAdFunctions(function() {

            if (isAdblockOn()) {
                //If user turn on the adblock, we put the page fair in
                var pageFairArray = [];
                AdBridg.cmd.push(function() {

                    googleAdSlotInfo.forEach(function(singleAdSlot) {
                        if (typeof window[singleAdSlot.slotName] !== "undefined") {
                            pageFairArray.push(window[singleAdSlot.slotName]);
                        }
                    });
                    AdBridg.refresh(pageFairArray);
                });
            }

            alignSuggestReadingAds();
        });

    });


    function checkStickyRightRail() {

        var pageTop = $(window).scrollTop() + $("#navigation_scroll").outerHeight();
        $(".required_sticky").each(function() {

            var stickyBottomEndPoint = $(this).parent().offset().top + $(this).parent().outerHeight() - 20;

            if (pageTop >= ($(this).parent().offset().top - 20) && pageTop <= stickyBottomEndPoint) {
                // console.log("RUN INSIDE");
                if (pageTop >= ($(this).parent().offset().top - 20) && pageTop < (stickyBottomEndPoint - $(this).outerHeight())) {
                    $(this).removeClass("sticky_bottom").addClass("sticky_scroll");
                } else if (pageTop >= (stickyBottomEndPoint - $(this).outerHeight()) && pageTop <= stickyBottomEndPoint) {
                    //if the ad hits the bottom
                    $(this).removeClass("sticky_scroll").addClass("sticky_bottom");
                } else {
                    $(this).removeClass("sticky_scroll sticky_bottom");
                }
            } else {
                if (pageTop < $(this).parent().offset().top) {
                    $(this).removeClass("sticky_scroll sticky_bottom");
                } else if (pageTop > stickyBottomEndPoint && !$(this).hasClass("sticky_bottom")) {
                    $(this).removeClass("sticky_scroll").addClass("sticky_bottom");
                }
            }

        });


    }


    function checkInlineStickyLeaderBoard() {
        var stickyInlineLeaderBoards = $(".css_c4zij-semi-sticky");
        var pageTop = $(window).scrollTop() + $("#navigation_scroll").outerHeight();
        stickyInlineLeaderBoards.each(function() {
            var that = $(this);
            if (pageTop < that.parent().offset().top) {
                if (that.hasClass("sticky_scroll")) {
                    that.removeClass("sticky_scroll");
                }
                that.attr("hasBeenTriggered", "false");
            } else if (pageTop >= Math.floor(that.parent().offset().top)) {

                if (!that.hasClass("sticky_scroll") && that.attr("hasBeenTriggered") === "false") {
                    //Only stick it when there's no other ads sticking
                    if ($(".css_c4zij-semi-sticky.sticky_scroll").length == 0) {
                        that.addClass("sticky_scroll");
                        that.width(that.parent().width());
                        //Start the timer for 2 seconds
                        setTimeout(function() {
                            that.addClass("sticky_easing");
                            setTimeout(function() {
                                that.removeClass("sticky_easing sticky_scroll");
                            }, 600);
                            that.attr("hasBeenTriggered", "true");
                        }, 2000);
                    } else {
                        //Mark as hasBeenTriggered
                        that.attr("hasBeenTriggered", "true");
                    }
                }
            }

        });
    }


    function alignSuggestReadingAds() {
        if ($suggestReadingContainer.hasClass("place")) {
            //Only aligned suggest reading container when it's at normal position
            var articlemetaTopHeight = $(".article_meta:first").outerHeight() || 0;
            $(".suggest_reading_sidebar").each(function(index) {
                //Need to add the distance from the top
                var targetSuggestReadingOffset = $suggestReadingInnerContainer.eq(index * 2).offset().top - $(".article_body").offset().top + articlemetaTopHeight;
                // console.log("targetOffset:"+targetSuggestReadingOffset);
                if (targetSuggestReadingOffset > 0) {
                    $(this).css({
                        "position": "absolute",
                        "top": targetSuggestReadingOffset
                    });
                }

            });
        }
    }

    var originalHeaderHrCheckPoint = $("." + glob_headerBarClassName).offset().top;

    // 2018/01 overwrite for ad-unblocker
    if ((is_userMobile && !glob_responsiveOverride) || isAboutPage || isProductPage) {
        //Do nothing
    } else {
        if (!$("." + glob_headerBarClassName).is(":visible") && glob_pageType !== "account" && glob_pageType !== "category" && glob_pageType !== "search") {
            $("." + glob_headerBarClassName).attr('style', 'display: block !important');
            originalHeaderHrCheckPoint = $("." + glob_headerBarClassName).offset().top;
        }
    }



    var stickyLeaderBoardStatus = false;
    var triggerStickyTimer = false;
    var hasBeenRemovedByTimer = false;
    var triggerStickyTimerOffset = 150;

    function checkLeaderBoardSticky() {
        //if offset is between css_h1ksn and dmr1, we stick the ads
        var pageTop = $(window).scrollTop();
        var tabletV3ConditionCheck = $("body").hasClass("v3") && is_userTablet && ($(window).width() < $(window).height()) && (pageTop >= originalHeaderHrCheckPoint && (pageTop + $("." + glob_headerBarClassName).height()) <= $(".photobox_header").offset().top);

        var tabletV2ConditionCheck = false;

        try {
            tabletV2ConditionCheck = $("body").hasClass("v2") && is_userTablet && ($(window).width() < $(window).height()) && (pageTop >= originalHeaderHrCheckPoint && (pageTop + $("." + glob_headerBarClassName).height()) <= $(".article_meta").offset().top);

        } catch (e) {

        }

        var tabletSponsoredConditionCheck = false;
        if (glob_pageType == "sponsored") {
            tabletSponsoredConditionCheck = is_userTablet && (pageTop >= originalHeaderHrCheckPoint) && !$("#dmr1_container").is(":visible");;
        }

        //if it's sponsored content and removed from before but the offset is back to 150px, we reset the trigger
        if (glob_pageType == "sponsored" && hasBeenRemovedByTimer && pageTop < triggerStickyTimerOffset) {
            hasBeenRemovedByTimer = false;
        }

        if (pageTop >= triggerStickyTimerOffset && !triggerStickyTimer && glob_pageType == "sponsored" && stickyLeaderBoardStatus) {
            triggerStickyTimer = true;

            setTimeout(function() {
                //Wait for 2 sec
                if (stickyLeaderBoardStatus) {
                    //Reset staus
                    if (is_userTablet && $(window).width() < $(window).height() && pageTop <= originalHeaderHrCheckPoint) {
                        //if it's tablet landscape, we remove it immediately
                    } else {
                        $("." + glob_headerBarClassName).css({
                            "top": "-300px"
                        });

                        $("#dlb1_container").css({
                            "top": "-300px"
                        });
                    }

                    setTimeout(function() {
                        //Delay for 0.6s

                        removeStickyLeaderBoard();
                        hasBeenRemovedByTimer = true;

                    }, 600);
                }

            }, 3000);

        }


        //Check above 10px
        // console.log("pageTop",pageTop);
        // console.log("originalHeaderHrCheckPoint",originalHeaderHrCheckPoint);
        if ((pageTop >= originalHeaderHrCheckPoint && (pageTop + $("." + glob_headerBarClassName).height()) <= $("#dmr1_container").offset().top - 10) || tabletV3ConditionCheck || tabletV2ConditionCheck || tabletSponsoredConditionCheck) {

            if (glob_pageType !== "sponsored" || (glob_pageType == "sponsored" && !hasBeenRemovedByTimer)) {
                stickyLeaderBoardStatus = true;
                if (!$("." + glob_headerBarClassName).hasClass("sticky_scroll")) {
                    $("." + glob_headerBarClassName).addClass("sticky_scroll");
                    $("#dlb1_container").addClass("sticky_scroll");
                    $("." + glob_headerBarClassName).next().css({
                        "margin-top": $("." + glob_headerBarClassName).outerHeight()
                    });
                }
            }

            //console.log("RUN Sticky");
        } else {
            //console.log("RUN REMOVE");
            if ((pageTop + $("." + glob_headerBarClassName).height()) >= ($("#dmr1_container").offset().top - 10) && $("." + glob_headerBarClassName).hasClass("sticky_scroll")) {

                if (is_userTablet && $(window).width() < $(window).height() && pageTop <= originalHeaderHrCheckPoint) {
                    //if it's tablet landscape, we remove it immediately
                } else {
                    $("." + glob_headerBarClassName).css({
                        "top": "-300px"
                    });

                    $("#dlb1_container").css({
                        "top": "-300px"
                    });
                }

                setTimeout(function() {
                    //Delay for 0.6s
                    removeStickyLeaderBoard();
                    //console.log("RUN REMOVE TIMEOUT");

                }, 600);

            } else {
                //Remove it immediately
                removeStickyLeaderBoard();

                //console.log("RUN REMOVE NOW");
            }

        }
    }


    function removeStickyLeaderBoard() {
        stickyLeaderBoardStatus = false;
        triggerStickyTimer = false;

        $("." + glob_headerBarClassName).removeClass("sticky_scroll");
        $("#dlb1_container").removeClass("sticky_scroll");
        $("." + glob_headerBarClassName).next().css({
            "margin-top": ""
        });

        $("." + glob_headerBarClassName).css({
            "top": ""
        });

        $("#dlb1_container").css({
            "top": ""
        });
    }

    function defineAdSlot(adSlotName, adtype, adbehavior) {
        if (adSlotName) {

            if (adSlotName == "MLB1") {
                var adSize = [320, 50];
            } else if (adtype == "css_c4zij") {
                var adSize = [728, 90];
            } else if (adtype == "out-of-page") {
                //Do nothing
            } else {
                var adSize = [300, 250];
            }
            AdBridg.cmd.push(function() {


                // console.log("DEFINED SIZE:"+adSize);
                if (adtype == "out-of-page") {
                    var targetadDiv = "div-gpt-ad-out-of-page";
                } else {
                    var targetadDiv = adSlotName.toLowerCase() + "_unit";
                }


                //console.log("TARGET DIV"+targetadDiv);

                //console.log("googletag.defineSlot(/4788/"+adSlotName+",["+adSize+"],"+targetadDiv+").defineSizeMapping([SIZE BELOW]).addService(googletag.pubads())");

                //new path 

                // ADBRIDG MIGRATION: hold onto the size_mapping_object so that we can tell AdBridg about
                // the association as well.
                if (adtype == "out-of-page") {

                    //window[adSlotName] = AdBridg.defineSlot(adPagePath + adSlotName, targetadDiv);
                    window[adSlotName] = AdBridg.defineOutOfPageSlot(adPagePath + adSlotName, targetadDiv);
                } else {

                    var size_mapping_object = getSizeMapping(adSlotName);
                    window[adSlotName] = AdBridg.defineSlot(adPagePath + adSlotName, adSize, targetadDiv).defineSizeMapping(size_mapping_object);
                    // ADBRIDG MIGRATION: AdBridg needs to receive the size mapping too, because the command above
                    // will only link things together for the googletag library.
                    AdBridg.useSizeMapping(window[adSlotName], size_mapping_object);
                }



                if (adbehavior == "under30") {

                    window[adSlotName].setTargeting('under30', 'true');
                } else if (adbehavior == "upper30") {

                    window[adSlotName].setTargeting('under30', 'false');
                }

                AdBridg.serve();
                //We need to add a new key for 'pos'
                window[adSlotName].setTargeting('pos', adSlotName);

                if (adtype == "out-of-page") {
                    AdBridg.display(targetadDiv);
                } else {
                    AdBridg.display(adSlotName.toLowerCase() + "_unit");
                }

                if (adtype !== "out-of-page") {
                    setTimeout(function() {
                        try {
                            BT.clearThrough();
                        } catch (e) {
                            console.log(e);

                        }

                    }, 100);
                }


            });
        }
    }


    function getSizeMapping(adSlotName) {
        //console.log("Start Mapping");
        if (adSlotName == "DLB1") {
            var mapping = AdBridg.sizeMapping().
            addSize([1000, 10], [
                [728, 90],
                [970, 90]
            ]). // 1000+, show mixed ads
            addSize([0, 0], [728, 90]). // up to 1000, show one ad type
            build();
            //console.log("[SIZE MAPPING] googletag.sizeMapping().addSize([1000, 10], [[728, 90], [970, 90]]).addSize([0, 0], [728, 90]).build()");
        } else if (adSlotName == "DLB2" || adSlotName == "DLB3" || adSlotName == "DLB4" || adSlotName == "MNT_DLB_Foot") {
            // var mapping = googletag.sizeMapping().
            // 		addSize([1000, 10], [728, 90]). // 1000+, show mixed ads
            // 		addSize([0, 0], [728, 90]). // up to 1000, show one ad type
            // 		build();

            if (adSlotName == "DLB2" && glob_pageType == "sponsored") {
                var mapping = AdBridg.sizeMapping().
                addSize([1148, 10], [728, 90]). // 1148+, show mixed ads
                addSize([0, 0], []). // up to 989, show one ad type
                build();
            } else {
                var mapping = AdBridg.sizeMapping().
                addSize([1148, 10], [728, 90]). // 1148+, show mixed ads
                addSize([989, 0], []). // between 989 and 1148, don't show any ads
                addSize([0, 0], [728, 90]). // up to 989, show one ad type
                build();
            }


        } else if (adSlotName == "DMR1") {
            var mapping = AdBridg.sizeMapping().
            addSize([989, 10], [
                [300, 250],
                [300, 600]
            ]). // 1000+ show one ad type
            addSize([0, 0], []). // up to 989, don't show ads
            build();
            //console.log("[SIZE MAPPING] AdBridg.sizeMapping().addSize([1000, 10], [[300, 250],[300, 600]]).addSize([0, 0], [300, 250]).build()");
        } else if (adSlotName == "MLB1") {
            var mapping = AdBridg.sizeMapping().
            addSize([360, 100], [320, 50]). // 1000+, show mixed ads
            addSize([0, 0], [320, 50]). // up to 1000, show one ad type
            build();
            //console.log("[SIZE MAPPING] AdBridg.sizeMapping().addSize([360, 100], [320, 50]).addSize([0, 0], [320, 50]).build()");
        } else if (is_userMobile && !glob_responsiveOverride && adSlotName !== "MLB1" || (glob_pageType == "sponsored" && (adSlotName == "MMR1" || adSlotName == "MMR2" || adSlotName == "MMR3"))) {
            var mapping = AdBridg.sizeMapping().
            addSize([989, 10], []). // 1000+, show mixed ads
            addSize([360, 100], [
                [320, 250],
                [300, 250]
            ]). // 1000+, show mixed ads
            addSize([0, 0], [300, 250]). // up to 1000, show one ad type
            build();
            //console.log("[SIZE MAPPING] googletag.sizeMapping().addSize([360, 100], [[320,250], [300,250]]).addSize([0, 0], [300, 250]).build()");
        } else {
            //Desktop ads MREC ads
            //

            // var mapping = googletag.sizeMapping().
            // 	addSize([1000, 10], [300, 250]). // 1000+ show one ad type
            // 	addSize([0, 0], [300, 250]). // up to 1000, show one ad type
            // 	build();
            // console.log("[SIZE MAPPING] googletag.sizeMapping().addSize([1000, 10], [300, 250]).addSize([0, 0], [300, 250]).build()");

            //we need to kill the ads below 988
            var mapping = AdBridg.sizeMapping().
            addSize([989, 10], [300, 250]). // 989+ show one ad type
            addSize([0, 0], []). // up to 989, don't show ads
            build();
            //console.log("[SIZE MAPPING] googletag.sizeMapping().addSize([1000, 10], [300, 250]).addSize([0, 0], [300, 250]).build()");
        }
        return mapping;
    }



    var stickyMobileAdPageTimer;
    var checkByScroll = false;
    var refreshStartPoint = $(window).scrollTop();

    function initScrollDepthDetection() {
        //First, we trigger a 40 second timer
        mobileStickyAdTimerCheck();

        $(window).scroll(function() {
            if (checkByScroll && viewportOrientation == "portrait" && (($(window).scrollTop() - refreshStartPoint) > (viewportHeight - $("#mlb1_container").height()) || (refreshStartPoint - $(window).scrollTop()) > (viewportHeight - $("#mlb1_container").height()))) {
                checkByScroll = false;
                if (refreshMobileStickyAdCount < 4 && !stickyAdCloseFlag) {

                    refreshMobileStickyAd();
                    //Trigger a new timer
                    mobileStickyAdTimerCheck();
                } else {
                    clearMobileStickyAdTimer();
                }

            }
        });

    }

    function mobileStickyAdTimerCheck() {
        stickyMobileAdPageTimer = setInterval(function() {

            //if user scrolls over viewport height, we trigger the refresh
            if (viewportOrientation == "portrait" && (($(window).scrollTop() - refreshStartPoint) > (viewportHeight - $("#mlb1_container").height()) || (refreshStartPoint - $(window).scrollTop()) > (viewportHeight - $("#mlb1_container").height()))) {
                refreshMobileStickyAd();
                //save the last one
                checkByScroll = false;
            } else {

                //if the user didn't scroll after 40 seconds, we trigger the ads by scroll immediately
                checkByScroll = true;
                clearMobileStickyAdTimer();
            }
            //If it's after 90 seconds, we clear the function
            if (refreshMobileStickyAdCount >= 4) {
                clearMobileStickyAdTimer();
            }

        }, 30000);
    }

    function clearMobileStickyAdTimer() {
        clearInterval(stickyMobileAdPageTimer);
    }


    function refreshMobileStickyAd() {
        if (typeof window.MLB1 !== "undefined") {
            refreshMobileStickyAdCount++;

            handleAdsBulkRefresh([window.MLB1]);

            refreshStartPoint = $(window).scrollTop();
        }
    }



    function handleAdsBulkRefresh(refreshAdsArray) {

        var tempRefreshAdsArray = [];
        //We need to check the ads again and only refresh it if it's disply on the page
        refreshAdsArray.forEach(function(singleAd) {

            var targetedElement = document.getElementById(singleAd.getSlotElementId());
            var hasDisplayNone = (targetedElement.offsetHeight === 0 && targetedElement.offsetWidth === 0);

            if (!hasDisplayNone) {
                //console.log("trigger refresh",singleAd.getSlotElementId());
                tempRefreshAdsArray.push(singleAd);
            }

        });
        if (tempRefreshAdsArray.length > 0) {
            AdBridg.cmd.push(function() {
                AdBridg.refresh(tempRefreshAdsArray);
            });
        }
    }

    function initMobileStickyCloseFunction() {
        $(".sticky_ad_container_close").click(function(event) {
            event.preventDefault();
            //Kill the sticky ad
            if (typeof window.MLB1 !== "undefined") {
                AdBridg.destroySlots([window.MLB1]);
            }
            //remove the container
            $(".sticky_ad_container").remove();
            stickyAdCloseFlag = true;
        });
    }

});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/customize/?id=d77cd09a1aceba0fe25f3a4cc1a882aa)
 * Config saved to config.json and https://gist.github.com/d77cd09a1aceba0fe25f3a4cc1a882aa
 */
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
} +
function($) {
    'use strict';
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
    }
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // ALERT CLASS DEFINITION
    // ======================

    var dismiss = '[data-dismiss="alert"]'
    var Alert = function(el) {
        $(el).on('click', dismiss, this.close)
    }

    Alert.VERSION = '3.3.7'

    Alert.TRANSITION_DURATION = 150

    Alert.prototype.close = function(e) {
        var $this = $(this)
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = $(selector === '#' ? [] : selector)

        if (e) e.preventDefault()

        if (!$parent.length) {
            $parent = $this.closest('.alert')
        }

        $parent.trigger(e = $.Event('close.bs.alert'))

        if (e.isDefaultPrevented()) return

        $parent.removeClass('in')

        function removeElement() {
            // detach from parent, fire event then clean up data
            $parent.detach().trigger('closed.bs.alert').remove()
        }

        $.support.transition && $parent.hasClass('fade') ?
            $parent
            .one('bsTransitionEnd', removeElement)
            .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
            removeElement()
    }


    // ALERT PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.alert')

            if (!data) $this.data('bs.alert', (data = new Alert(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.alert

    $.fn.alert = Plugin
    $.fn.alert.Constructor = Alert


    // ALERT NO CONFLICT
    // =================

    $.fn.alert.noConflict = function() {
        $.fn.alert = old
        return this
    }


    // ALERT DATA-API
    // ==============

    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================

    var Button = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Button.DEFAULTS, options)
        this.isLoading = false
    }

    Button.VERSION = '3.3.7'

    Button.DEFAULTS = {
        loadingText: 'loading...'
    }

    Button.prototype.setState = function(state) {
        var d = 'disabled'
        var $el = this.$element
        var val = $el.is('input') ? 'val' : 'html'
        var data = $el.data()

        state += 'Text'

        if (data.resetText == null) $el.data('resetText', $el[val]())

        // push to event loop to allow forms to submit
        setTimeout($.proxy(function() {
            $el[val](data[state] == null ? this.options[state] : data[state])

            if (state == 'loadingText') {
                this.isLoading = true
                $el.addClass(d).attr(d, d).prop(d, true)
            } else if (this.isLoading) {
                this.isLoading = false
                $el.removeClass(d).removeAttr(d).prop(d, false)
            }
        }, this), 0)
    }

    Button.prototype.toggle = function() {
        var changed = true
        var $parent = this.$element.closest('[data-toggle="buttons"]')

        if ($parent.length) {
            var $input = this.$element.find('input')
            if ($input.prop('type') == 'radio') {
                if ($input.prop('checked')) changed = false
                $parent.find('.active').removeClass('active')
                this.$element.addClass('active')
            } else if ($input.prop('type') == 'checkbox') {
                if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
                this.$element.toggleClass('active')
            }
            $input.prop('checked', this.$element.hasClass('active'))
            if (changed) $input.trigger('change')
        } else {
            this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
            this.$element.toggleClass('active')
        }
    }


    // BUTTON PLUGIN DEFINITION
    // ========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.button')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.button', (data = new Button(this, options)))

            if (option == 'toggle') data.toggle()
            else if (option) data.setState(option)
        })
    }

    var old = $.fn.button

    $.fn.button = Plugin
    $.fn.button.Constructor = Button


    // BUTTON NO CONFLICT
    // ==================

    $.fn.button.noConflict = function() {
        $.fn.button = old
        return this
    }


    // BUTTON DATA-API
    // ===============

    $(document)
        .on('click.bs.button.data-api', '[data-toggle^="button"]', function(e) {
            var $btn = $(e.target).closest('.btn')
            Plugin.call($btn, 'toggle')
            if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
                // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
                e.preventDefault()
                // The target component still receive the focus
                if ($btn.is('input,button')) $btn.trigger('focus')
                else $btn.find('input:visible,button:visible').first().trigger('focus')
            }
        })
        .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function(e) {
            $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
        })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function(element, options) {
        this.$element = $(element)
        this.$indicators = this.$element.find('.carousel-indicators')
        this.options = options
        this.paused = null
        this.sliding = null
        this.interval = null
        this.$active = null
        this.$items = null

        this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

        this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
            .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
            .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
    }

    Carousel.VERSION = '3.3.7'

    Carousel.TRANSITION_DURATION = 600

    Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true,
        keyboard: true
    }

    Carousel.prototype.keydown = function(e) {
        if (/input|textarea/i.test(e.target.tagName)) return
        switch (e.which) {
            case 37:
                this.prev();
                break
            case 39:
                this.next();
                break
            default:
                return
        }

        e.preventDefault()
    }

    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false)

        this.interval && clearInterval(this.interval)

        this.options.interval &&
            !this.paused &&
            (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

        return this
    }

    Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children('.item')
        return this.$items.index(item || this.$active)
    }

    Carousel.prototype.getItemForDirection = function(direction, active) {
        var activeIndex = this.getItemIndex(active)
        var willWrap = (direction == 'prev' && activeIndex === 0) ||
            (direction == 'next' && activeIndex == (this.$items.length - 1))
        if (willWrap && !this.options.wrap) return active
        var delta = direction == 'prev' ? -1 : 1
        var itemIndex = (activeIndex + delta) % this.$items.length
        return this.$items.eq(itemIndex)
    }

    Carousel.prototype.to = function(pos) {
        var that = this
        var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

        if (pos > (this.$items.length - 1) || pos < 0) return

        if (this.sliding) return this.$element.one('slid.bs.carousel', function() {
            that.to(pos)
        }) // yes, "slid"
        if (activeIndex == pos) return this.pause().cycle()

        return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
    }

    Carousel.prototype.pause = function(e) {
        e || (this.paused = true)

        if (this.$element.find('.next, .prev').length && $.support.transition) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)

        return this
    }

    Carousel.prototype.next = function() {
        if (this.sliding) return
        return this.slide('next')
    }

    Carousel.prototype.prev = function() {
        if (this.sliding) return
        return this.slide('prev')
    }

    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find('.item.active')
        var $next = next || this.getItemForDirection(type, $active)
        var isCycling = this.interval
        var direction = type == 'next' ? 'left' : 'right'
        var that = this

        if ($next.hasClass('active')) return (this.sliding = false)

        var relatedTarget = $next[0]
        var slideEvent = $.Event('slide.bs.carousel', {
            relatedTarget: relatedTarget,
            direction: direction
        })
        this.$element.trigger(slideEvent)
        if (slideEvent.isDefaultPrevented()) return

        this.sliding = true

        isCycling && this.pause()

        if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active')
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
            $nextIndicator && $nextIndicator.addClass('active')
        }

        var slidEvent = $.Event('slid.bs.carousel', {
            relatedTarget: relatedTarget,
            direction: direction
        }) // yes, "slid"
        if ($.support.transition && this.$element.hasClass('slide')) {
            $next.addClass(type)
            $next[0].offsetWidth // force reflow
            $active.addClass(direction)
            $next.addClass(direction)
            $active
                .one('bsTransitionEnd', function() {
                    $next.removeClass([type, direction].join(' ')).addClass('active')
                    $active.removeClass(['active', direction].join(' '))
                    that.sliding = false
                    setTimeout(function() {
                        that.$element.trigger(slidEvent)
                    }, 0)
                })
                .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
        } else {
            $active.removeClass('active')
            $next.addClass('active')
            this.sliding = false
            this.$element.trigger(slidEvent)
        }

        isCycling && this.cycle()

        return this
    }


    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide

            if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
            if (typeof option == 'number') data.to(option)
            else if (action) data[action]()
            else if (options.interval) data.pause().cycle()
        })
    }

    var old = $.fn.carousel

    $.fn.carousel = Plugin
    $.fn.carousel.Constructor = Carousel


    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old
        return this
    }


    // CAROUSEL DATA-API
    // =================

    var clickHandler = function(e) {
        var href
        var $this = $(this)
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
        if (!$target.hasClass('carousel')) return
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex) options.interval = false

        Plugin.call($target, options)

        if (slideIndex) {
            $target.data('bs.carousel').to(slideIndex)
        }

        e.preventDefault()
    }

    $(document)
        .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
        .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

    $(window).on('load', function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this)
            Plugin.call($carousel, $carousel.data())
        })
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // DROPDOWN CLASS DEFINITION
    // =========================

    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function(element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }

    Dropdown.VERSION = '3.3.7'

    function getParent($this) {
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = selector && $(selector)

        return $parent && $parent.length ? $parent : $this.parent()
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function() {
            var $this = $(this)
            var $parent = getParent($this)
            var relatedTarget = {
                relatedTarget: this
            }

            if (!$parent.hasClass('open')) return

            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this.attr('aria-expanded', 'false')
            $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
        })
    }

    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        clearMenus()

        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we use a backdrop because click events don't delegate
                $(document.createElement('div'))
                    .addClass('dropdown-backdrop')
                    .insertAfter($(this))
                    .on('click', clearMenus)
            }

            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this
                .trigger('focus')
                .attr('aria-expanded', 'true')

            $parent
                .toggleClass('open')
                .trigger($.Event('shown.bs.dropdown', relatedTarget))
        }

        return false
    }

    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

        var $this = $(this)

        e.preventDefault()
        e.stopPropagation()

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }

        var desc = ' li:not(.disabled):visible a'
        var $items = $parent.find('.dropdown-menu' + desc)

        if (!$items.length) return

        var index = $items.index(e.target)

        if (e.which == 38 && index > 0) index-- // up
            if (e.which == 40 && index < $items.length - 1) index++ // down
                if (!~index) index = 0

        $items.eq(index).trigger('focus')
    }


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.dropdown')

            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.dropdown

    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
            e.stopPropagation()
        })
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var Modal = function(element, options) {
        this.options = options
        this.$body = $(document.body)
        this.$element = $(element)
        this.$dialog = this.$element.find('.modal-dialog')
        this.$backdrop = null
        this.isShown = null
        this.originalBodyPad = null
        this.scrollbarWidth = 0
        this.ignoreBackdropClick = false

        if (this.options.remote) {
            this.$element
                .find('.modal-content')
                .load(this.options.remote, $.proxy(function() {
                    this.$element.trigger('loaded.bs.modal')
                }, this))
        }
    }

    Modal.VERSION = '3.3.7'

    Modal.TRANSITION_DURATION = 300
    Modal.BACKDROP_TRANSITION_DURATION = 150

    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }

    Modal.prototype.show = function(_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {
            relatedTarget: _relatedTarget
        })

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.checkScrollbar()
        this.setScrollbar()
        this.$body.addClass('modal-open')

        this.escape()
        this.resize()

        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

        this.$dialog.on('mousedown.dismiss.bs.modal', function() {
            that.$element.one('mouseup.dismiss.bs.modal', function(e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
            })
        })

        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass('fade')

            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body) // don't move modals dom position
            }

            that.$element
                .show()
                .scrollTop(0)

            that.adjustDialog()

            if (transition) {
                that.$element[0].offsetWidth // force reflow
            }

            that.$element.addClass('in')

            that.enforceFocus()

            var e = $.Event('shown.bs.modal', {
                relatedTarget: _relatedTarget
            })

            transition ?
                that.$dialog // wait for modal to slide in
                .one('bsTransitionEnd', function() {
                    that.$element.trigger('focus').trigger(e)
                })
                .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                that.$element.trigger('focus').trigger(e)
        })
    }

    Modal.prototype.hide = function(e) {
        if (e) e.preventDefault()

        e = $.Event('hide.bs.modal')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()
        this.resize()

        $(document).off('focusin.bs.modal')

        this.$element
            .removeClass('in')
            .off('click.dismiss.bs.modal')
            .off('mouseup.dismiss.bs.modal')

        this.$dialog.off('mousedown.dismiss.bs.modal')

        $.support.transition && this.$element.hasClass('fade') ?
            this.$element
            .one('bsTransitionEnd', $.proxy(this.hideModal, this))
            .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
            this.hideModal()
    }

    Modal.prototype.enforceFocus = function() {
        $(document)
            .off('focusin.bs.modal') // guard against infinite focus loop
            .on('focusin.bs.modal', $.proxy(function(e) {
                if (document !== e.target &&
                    this.$element[0] !== e.target &&
                    !this.$element.has(e.target).length) {
                    this.$element.trigger('focus')
                }
            }, this))
    }

    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.modal', $.proxy(function(e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.modal')
        }
    }

    Modal.prototype.resize = function() {
        if (this.isShown) {
            $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
        } else {
            $(window).off('resize.bs.modal')
        }
    }

    Modal.prototype.hideModal = function() {
        var that = this
        this.$element.hide()
        this.backdrop(function() {
            that.$body.removeClass('modal-open')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.modal')
        })
    }

    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    Modal.prototype.backdrop = function(callback) {
        var that = this
        var animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $(document.createElement('div'))
                .addClass('modal-backdrop ' + animate)
                .appendTo(this.$body)

            this.$element.on('click.dismiss.bs.modal', $.proxy(function(e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false
                    return
                }
                if (e.target !== e.currentTarget) return
                this.options.backdrop == 'static' ?
                    this.$element[0].focus() :
                    this.hide()
            }, this))

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            if (!callback) return

            doAnimate ?
                this.$backdrop
                .one('bsTransitionEnd', callback)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callback()

        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            var callbackRemove = function() {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('fade') ?
                this.$backdrop
                .one('bsTransitionEnd', callbackRemove)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callbackRemove()

        } else if (callback) {
            callback()
        }
    }

    // these following methods are used to handle overflowing modals

    Modal.prototype.handleUpdate = function() {
        this.adjustDialog()
    }

    Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
        })
    }

    Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: '',
            paddingRight: ''
        })
    }

    Modal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect()
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
        this.scrollbarWidth = this.measureScrollbar()
    }

    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        this.originalBodyPad = document.body.style.paddingRight || ''
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }

    Modal.prototype.resetScrollbar = function() {
        this.$body.css('padding-right', this.originalBodyPad)
    }

    Modal.prototype.measureScrollbar = function() { // thx walsh
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'modal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }


    // MODAL PLUGIN DEFINITION
    // =======================

    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    var old = $.fn.modal

    $.fn.modal = Plugin
    $.fn.modal.Constructor = Modal


    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function() {
        $.fn.modal = old
        return this
    }


    // MODAL DATA-API
    // ==============

    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data())

        if ($this.is('a')) e.preventDefault()

        $target.one('show.bs.modal', function(showEvent) {
            if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
            $target.one('hidden.bs.modal', function() {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this)
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================

    var Tooltip = function(element, options) {
        this.type = null
        this.options = null
        this.enabled = null
        this.timeout = null
        this.hoverState = null
        this.$element = null
        this.inState = null

        this.init('tooltip', element, options)
    }

    Tooltip.VERSION = '3.3.7'

    Tooltip.TRANSITION_DURATION = 150

    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: 'body',
            padding: 0
        }
    }

    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
        this.inState = {
            click: false,
            hover: false,
            focus: false
        }

        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
        }

        var triggers = this.options.trigger.split(' ')

        for (var i = triggers.length; i--;) {
            var trigger = triggers[i]

            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }

        this.options.selector ?
            (this._options = $.extend({}, this.options, {
                trigger: 'manual',
                selector: ''
            })) :
            this.fixTitle()
    }

    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    }

    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)

        if (options.delay && typeof options.delay == 'number') {
            options.delay = {
                show: options.delay,
                hide: options.delay
            }
        }

        return options
    }

    Tooltip.prototype.getDelegateOptions = function() {
        var options = {}
        var defaults = this.getDefaults()

        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value) options[key] = value
        })

        return options
    }

    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget).data('bs.' + this.type)

        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }

        if (obj instanceof $.Event) {
            self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
        }

        if (self.tip().hasClass('in') || self.hoverState == 'in') {
            self.hoverState = 'in'
            return
        }

        clearTimeout(self.timeout)

        self.hoverState = 'in'

        if (!self.options.delay || !self.options.delay.show) return self.show()

        self.timeout = setTimeout(function() {
            if (self.hoverState == 'in') self.show()
        }, self.options.delay.show)
    }

    Tooltip.prototype.isInStateTrue = function() {
        for (var key in this.inState) {
            if (this.inState[key]) return true
        }

        return false
    }

    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget).data('bs.' + this.type)

        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }

        if (obj instanceof $.Event) {
            self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
        }

        if (self.isInStateTrue()) return

        clearTimeout(self.timeout)

        self.hoverState = 'out'

        if (!self.options.delay || !self.options.delay.hide) return self.hide()

        self.timeout = setTimeout(function() {
            if (self.hoverState == 'out') self.hide()
        }, self.options.delay.hide)
    }

    Tooltip.prototype.show = function() {
        var e = $.Event('show.bs.' + this.type)

        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e)

            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
            if (e.isDefaultPrevented() || !inDom) return
            var that = this

            var $tip = this.tip()

            var tipId = this.getUID(this.type)

            this.setContent()
            $tip.attr('id', tipId)
            this.$element.attr('aria-describedby', tipId)

            if (this.options.animation) $tip.addClass('fade')

            var placement = typeof this.options.placement == 'function' ?
                this.options.placement.call(this, $tip[0], this.$element[0]) :
                this.options.placement

            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test(placement)
            if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

            $tip
                .detach()
                .css({
                    top: 0,
                    left: 0,
                    display: 'block'
                })
                .addClass(placement)
                .data('bs.' + this.type, this)

            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
            this.$element.trigger('inserted.bs.' + this.type)

            var pos = this.getPosition()
            var actualWidth = $tip[0].offsetWidth
            var actualHeight = $tip[0].offsetHeight

            if (autoPlace) {
                var orgPlacement = placement
                var viewportDim = this.getPosition(this.$viewport)

                placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' :
                    placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' :
                    placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' :
                    placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' :
                    placement

                $tip
                    .removeClass(orgPlacement)
                    .addClass(placement)
            }

            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

            this.applyPlacement(calculatedOffset, placement)

            var complete = function() {
                var prevHoverState = that.hoverState
                that.$element.trigger('shown.bs.' + that.type)
                that.hoverState = null

                if (prevHoverState == 'out') that.leave(that)
            }

            $.support.transition && this.$tip.hasClass('fade') ?
                $tip
                .one('bsTransitionEnd', complete)
                .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
                complete()
        }
    }

    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip()
        var width = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight

        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)

        // we must check for NaN for ie 8/9
        if (isNaN(marginTop)) marginTop = 0
        if (isNaN(marginLeft)) marginLeft = 0

        offset.top += marginTop
        offset.left += marginLeft

        // $.fn.offset doesn't round pixel values
        // so we use setOffset directly with our own function B-0
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                })
            }
        }, offset), 0)

        $tip.addClass('in')

        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight

        if (placement == 'top' && actualHeight != height) {
            offset.top = offset.top + height - actualHeight
        }

        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

        if (delta.left) offset.left += delta.left
        else offset.top += delta.top

        var isVertical = /top|bottom/.test(placement)
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

        $tip.offset(offset)
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
    }

    Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
        this.arrow()
            .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
            .css(isVertical ? 'top' : 'left', '')
    }

    Tooltip.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()

        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
    }

    Tooltip.prototype.hide = function(callback) {
        var that = this
        var $tip = $(this.$tip)
        var e = $.Event('hide.bs.' + this.type)

        function complete() {
            if (that.hoverState != 'in') $tip.detach()
            if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
                that.$element
                    .removeAttr('aria-describedby')
                    .trigger('hidden.bs.' + that.type)
            }
            callback && callback()
        }

        this.$element.trigger(e)

        if (e.isDefaultPrevented()) return

        $tip.removeClass('in')

        $.support.transition && $tip.hasClass('fade') ?
            $tip
            .one('bsTransitionEnd', complete)
            .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
            complete()

        this.hoverState = null

        return this
    }

    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element
        if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
    }

    Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    }

    Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element

        var el = $element[0]
        var isBody = el.tagName == 'BODY'

        var elRect = el.getBoundingClientRect()
        if (elRect.width == null) {
            // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
            elRect = $.extend({}, elRect, {
                width: elRect.right - elRect.left,
                height: elRect.bottom - elRect.top
            })
        }
        var isSvg = window.SVGElement && el instanceof window.SVGElement
        // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
        // See https://github.com/twbs/bootstrap/issues/20280
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : (isSvg ? null : $element.offset())
        var scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        }
        var outerDims = isBody ? {
            width: $(window).width(),
            height: $(window).height()
        } : null

        return $.extend({}, elRect, scroll, outerDims, elOffset)
    }

    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {
                top: pos.top + pos.height,
                left: pos.left + pos.width / 2 - actualWidth / 2
            } :
            placement == 'top' ? {
                top: pos.top - actualHeight,
                left: pos.left + pos.width / 2 - actualWidth / 2
            } :
            placement == 'left' ? {
                top: pos.top + pos.height / 2 - actualHeight / 2,
                left: pos.left - actualWidth
            } :
            /* placement == 'right' */
            {
                top: pos.top + pos.height / 2 - actualHeight / 2,
                left: pos.left + pos.width
            }

    }

    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        }
        if (!this.$viewport) return delta

        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
        var viewportDimensions = this.getPosition(this.$viewport)

        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
            if (topEdgeOffset < viewportDimensions.top) { // top overflow
                delta.top = viewportDimensions.top - topEdgeOffset
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth
            if (leftEdgeOffset < viewportDimensions.left) { // left overflow
                delta.left = viewportDimensions.left - leftEdgeOffset
            } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
            }
        }

        return delta
    }

    Tooltip.prototype.getTitle = function() {
        var title
        var $e = this.$element
        var o = this.options

        title = $e.attr('data-original-title') ||
            (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)

        return title
    }

    Tooltip.prototype.getUID = function(prefix) {
        do prefix += ~~(Math.random() * 1000000)
        while (document.getElementById(prefix))
        return prefix
    }

    Tooltip.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = $(this.options.template)
            if (this.$tip.length != 1) {
                throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
            }
        }
        return this.$tip
    }

    Tooltip.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
    }

    Tooltip.prototype.enable = function() {
        this.enabled = true
    }

    Tooltip.prototype.disable = function() {
        this.enabled = false
    }

    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }

    Tooltip.prototype.toggle = function(e) {
        var self = this
        if (e) {
            self = $(e.currentTarget).data('bs.' + this.type)
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions())
                $(e.currentTarget).data('bs.' + this.type, self)
            }
        }

        if (e) {
            self.inState.click = !self.inState.click
            if (self.isInStateTrue()) self.enter(self)
            else self.leave(self)
        } else {
            self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
        }
    }

    Tooltip.prototype.destroy = function() {
        var that = this
        clearTimeout(this.timeout)
        this.hide(function() {
            that.$element.off('.' + that.type).removeData('bs.' + that.type)
            if (that.$tip) {
                that.$tip.detach()
            }
            that.$tip = null
            that.$arrow = null
            that.$viewport = null
            that.$element = null
        })
    }


    // TOOLTIP PLUGIN DEFINITION
    // =========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tooltip')
            var options = typeof option == 'object' && option

            if (!data && /destroy|hide/.test(option)) return
            if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tooltip

    $.fn.tooltip = Plugin
    $.fn.tooltip.Constructor = Tooltip


    // TOOLTIP NO CONFLICT
    // ===================

    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old
        return this
    }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // POPOVER PUBLIC CLASS DEFINITION
    // ===============================

    var Popover = function(element, options) {
        this.init('popover', element, options)
    }

    if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

    Popover.VERSION = '3.3.7'

    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })


    // NOTE: POPOVER EXTENDS tooltip.js
    // ================================

    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

    Popover.prototype.constructor = Popover

    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS
    }

    Popover.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()
        var content = this.getContent()

        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
            this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
        ](content)

        $tip.removeClass('fade top bottom left right in')

        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
    }

    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }

    Popover.prototype.getContent = function() {
        var $e = this.$element
        var o = this.options

        return $e.attr('data-content') ||
            (typeof o.content == 'function' ?
                o.content.call($e[0]) :
                o.content)
    }

    Popover.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
    }


    // POPOVER PLUGIN DEFINITION
    // =========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.popover')
            var options = typeof option == 'object' && option

            if (!data && /destroy|hide/.test(option)) return
            if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.popover

    $.fn.popover = Plugin
    $.fn.popover.Constructor = Popover


    // POPOVER NO CONFLICT
    // ===================

    $.fn.popover.noConflict = function() {
        $.fn.popover = old
        return this
    }

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // TAB CLASS DEFINITION
    // ====================

    var Tab = function(element) {
        // jscs:disable requireDollarBeforejQueryAssignment
        this.element = $(element)
        // jscs:enable requireDollarBeforejQueryAssignment
    }

    Tab.VERSION = '3.3.7'

    Tab.TRANSITION_DURATION = 150

    Tab.prototype.show = function() {
        var $this = this.element
        var $ul = $this.closest('ul:not(.dropdown-menu)')
        var selector = $this.data('target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        if ($this.parent('li').hasClass('active')) return

        var $previous = $ul.find('.active:last a')
        var hideEvent = $.Event('hide.bs.tab', {
            relatedTarget: $this[0]
        })
        var showEvent = $.Event('show.bs.tab', {
            relatedTarget: $previous[0]
        })

        $previous.trigger(hideEvent)
        $this.trigger(showEvent)

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

        var $target = $(selector)

        this.activate($this.closest('li'), $ul)
        this.activate($target, $target.parent(), function() {
            $previous.trigger({
                type: 'hidden.bs.tab',
                relatedTarget: $this[0]
            })
            $this.trigger({
                type: 'shown.bs.tab',
                relatedTarget: $previous[0]
            })
        })
    }

    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find('> .active')
        var transition = callback &&
            $.support.transition &&
            ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

        function next() {
            $active
                .removeClass('active')
                .find('> .dropdown-menu > .active')
                .removeClass('active')
                .end()
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', false)

            element
                .addClass('active')
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', true)

            if (transition) {
                element[0].offsetWidth // reflow for transition
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }

            if (element.parent('.dropdown-menu').length) {
                element
                    .closest('li.dropdown')
                    .addClass('active')
                    .end()
                    .find('[data-toggle="tab"]')
                    .attr('aria-expanded', true)
            }

            callback && callback()
        }

        $active.length && transition ?
            $active
            .one('bsTransitionEnd', next)
            .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
            next()

        $active.removeClass('in')
    }


    // TAB PLUGIN DEFINITION
    // =====================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tab')

            if (!data) $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tab

    $.fn.tab = Plugin
    $.fn.tab.Constructor = Tab


    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function() {
        $.fn.tab = old
        return this
    }


    // TAB DATA-API
    // ============

    var clickHandler = function(e) {
        e.preventDefault()
        Plugin.call($(this), 'show')
    }

    $(document)
        .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
        .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)

        this.$target = $(this.options.target)
            .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
            .on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))

        this.$element = $(element)
        this.affixed = null
        this.unpin = null
        this.pinnedOffset = null

        this.checkPosition()
    }

    Affix.VERSION = '3.3.7'

    Affix.RESET = 'affix affix-top affix-bottom'

    Affix.DEFAULTS = {
        offset: 0,
        target: window
    }

    Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        var targetHeight = this.$target.height()

        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

        if (this.affixed == 'bottom') {
            if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
            return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
        }

        var initializing = this.affixed == null
        var colliderTop = initializing ? scrollTop : position.top
        var colliderHeight = initializing ? targetHeight : height

        if (offsetTop != null && scrollTop <= offsetTop) return 'top'
        if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

        return false
    }

    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        return (this.pinnedOffset = position.top - scrollTop)
    }

    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }

    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(':visible')) return

        var height = this.$element.height()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        var scrollHeight = Math.max($(document).height(), $(document.body).height())

        if (typeof offset != 'object') offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css('top', '')

            var affixType = 'affix' + (affix ? '-' + affix : '')
            var e = $.Event(affixType + '.bs.affix')

            this.$element.trigger(e)

            if (e.isDefaultPrevented()) return

            this.affixed = affix
            this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

            this.$element
                .removeClass(Affix.RESET)
                .addClass(affixType)
                .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
        }

        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            })
        }
    }


    // AFFIX PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.affix

    $.fn.affix = Plugin
    $.fn.affix.Constructor = Affix


    // AFFIX NO CONFLICT
    // =================

    $.fn.affix.noConflict = function() {
        $.fn.affix = old
        return this
    }


    // AFFIX DATA-API
    // ==============

    $(window).on('load', function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this)
            var data = $spy.data()

            data.offset = data.offset || {}

            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
            if (data.offsetTop != null) data.offset.top = data.offsetTop

            Plugin.call($spy, data)
        })
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+
function($) {
    'use strict';

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
            '[data-toggle="collapse"][data-target="#' + element.id + '"]')
        this.transitioning = null

        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }

        if (this.options.toggle) this.toggle()
    }

    Collapse.VERSION = '3.3.7'

    Collapse.TRANSITION_DURATION = 350

    Collapse.DEFAULTS = {
        toggle: true
    }

    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }

    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass('in')) return

        var activesData
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

        if (actives && actives.length) {
            activesData = actives.data('bs.collapse')
            if (activesData && activesData.transitioning) return
        }

        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        if (actives && actives.length) {
            Plugin.call(actives, 'hide')
            activesData || actives.data('bs.collapse', null)
        }

        var dimension = this.dimension()

        this.$element
            .removeClass('collapse')
            .addClass('collapsing')[dimension](0)
            .attr('aria-expanded', true)

        this.$trigger
            .removeClass('collapsed')
            .attr('aria-expanded', true)

        this.transitioning = 1

        var complete = function() {
            this.$element
                .removeClass('collapsing')
                .addClass('collapse in')[dimension]('')
            this.transitioning = 0
            this.$element
                .trigger('shown.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        var scrollSize = $.camelCase(['scroll', dimension].join('-'))

        this.$element
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
    }

    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass('in')) return

        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        var dimension = this.dimension()

        this.$element[dimension](this.$element[dimension]())[0].offsetHeight

        this.$element
            .addClass('collapsing')
            .removeClass('collapse in')
            .attr('aria-expanded', false)

        this.$trigger
            .addClass('collapsed')
            .attr('aria-expanded', false)

        this.transitioning = 1

        var complete = function() {
            this.transitioning = 0
            this.$element
                .removeClass('collapsing')
                .addClass('collapse')
                .trigger('hidden.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        this.$element[dimension](0)
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
    }

    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

    Collapse.prototype.getParent = function() {
        return $(this.options.parent)
            .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each($.proxy(function(i, element) {
                var $element = $(element)
                this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
            }, this))
            .end()
    }

    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass('in')

        $element.attr('aria-expanded', isOpen)
        $trigger
            .toggleClass('collapsed', !isOpen)
            .attr('aria-expanded', isOpen)
    }

    function getTargetFromTrigger($trigger) {
        var href
        var target = $trigger.attr('data-target') ||
            (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

        return $(target)
    }


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.collapse

    $.fn.collapse = Plugin
    $.fn.collapse.Constructor = Collapse


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old
        return this
    }


    // COLLAPSE DATA-API
    // =================

    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(e) {
        var $this = $(this)

        if (!$this.attr('data-target')) e.preventDefault()

        var $target = getTargetFromTrigger($this)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()

        Plugin.call($target, option)
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // SCROLLSPY CLASS DEFINITION
    // ==========================

    function ScrollSpy(element, options) {
        this.$body = $(document.body)
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector = (this.options.target || '') + ' .nav li > a'
        this.offsets = []
        this.targets = []
        this.activeTarget = null
        this.scrollHeight = 0

        this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
        this.refresh()
        this.process()
    }

    ScrollSpy.VERSION = '3.3.7'

    ScrollSpy.DEFAULTS = {
        offset: 10
    }

    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }

    ScrollSpy.prototype.refresh = function() {
        var that = this
        var offsetMethod = 'offset'
        var offsetBase = 0

        this.offsets = []
        this.targets = []
        this.scrollHeight = this.getScrollHeight()

        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = 'position'
            offsetBase = this.$scrollElement.scrollTop()
        }

        this.$body
            .find(this.selector)
            .map(function() {
                var $el = $(this)
                var href = $el.data('target') || $el.attr('href')
                var $href = /^#./.test(href) && $(href)

                return ($href &&
                    $href.length &&
                    $href.is(':visible') &&
                    [
                        [$href[offsetMethod]().top + offsetBase, href]
                    ]) || null
            })
            .sort(function(a, b) {
                return a[0] - b[0]
            })
            .each(function() {
                that.offsets.push(this[0])
                that.targets.push(this[1])
            })
    }

    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.getScrollHeight()
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i

        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }

        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }

        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null
            return this.clear()
        }

        for (i = offsets.length; i--;) {
            activeTarget != targets[i] &&
                scrollTop >= offsets[i] &&
                (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) &&
                this.activate(targets[i])
        }
    }

    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target

        this.clear()

        var selector = this.selector +
            '[data-target="' + target + '"],' +
            this.selector + '[href="' + target + '"]'

        var active = $(selector)
            .parents('li')
            .addClass('active')

        if (active.parent('.dropdown-menu').length) {
            active = active
                .closest('li.dropdown')
                .addClass('active')
        }

        active.trigger('activate.bs.scrollspy')
    }

    ScrollSpy.prototype.clear = function() {
        $(this.selector)
            .parentsUntil(this.options.target, '.active')
            .removeClass('active')
    }


    // SCROLLSPY PLUGIN DEFINITION
    // ===========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.scrollspy')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.scrollspy

    $.fn.scrollspy = Plugin
    $.fn.scrollspy.Constructor = ScrollSpy


    // SCROLLSPY NO CONFLICT
    // =====================

    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old
        return this
    }


    // SCROLLSPY DATA-API
    // ==================

    $(window).on('load.bs.scrollspy.data-api', function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this)
            Plugin.call($spy, $spy.data())
        })
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false
        var $el = this
        $(this).one('bsTransitionEnd', function() {
            called = true
        })
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }

    $(function() {
        $.support.transition = transitionEnd()

        if (!$.support.transition) return

        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }
    })

}(jQuery);

if (typeof glob_mntcookie === 'undefined') {
    //only used while deploy
    glob_mntcookie = 1;
    glob_TrueOnGDPR = false;
    glob_JS = (typeof glob_JS === 'undefined') ? {
        'GAInit': [],
        'GA': [],
        "ExternalJS": [],
        "AD": []
    } : glob_JS;

    if (typeof fireOrSaveGoogleAdFunctions === 'undefined') {

        function fireOrSaveGoogleAdFunctions(adFunction) {
            adFunction();
        }

        function fireOrSaveJsFunctions(jsType, jsFunction) {
            jsFunction();
        }


        function loadScript(url, parameters, callback) {

            var script = document.createElement("script");
            script.type = "text/javascript";


            //add custom attribute
            for (var key in parameters) {
                if (parameters.hasOwnProperty(key)) {
                    script.setAttribute(key, parameters[key]);
                }
            }


            if (script.readyState) { //IE
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" ||
                        script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else { //Others
                script.onload = function() {

                    if (typeof callback === 'function') {
                        callback();
                    }

                };
            }

            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }

    }

}

$(document).ready(function() {



    if (glob_mntcookie == 1 || !glob_TrueOnGDPR) {

        fireJS("ExternalJS");
        fireJS("GA");
        fireOrSaveGoogleADs(null, true);

    } else {

        if (window.location.pathname !== "/privacy-policy" &&
            window.location.pathname !== "/advertising") {

            //EU client first enter, show modal
            $('#gdprModal').modal("show");

            //count show modal
            $.ajax({
                type: "GET",
                url: "/account/GDPRModalCounter.php",
                data: {
                    type: "show",
                    deviceInfo: glob_deviceInfo,
                    currentPath: window.location.pathname
                },
                cache: false,
                done: function(result) {
                    console.log("add show counter success!");
                },
                fail: function(result) {
                    console.log("add show counter failed!");
                }
            });

        }



    }


});


function GDPRAccept() {

    var header_message = "1";
    var dataString = 'mntcookies=' + header_message;



    $.ajax({
        type: "POST",
        url: "/account/message-session-setter.php",
        data: dataString,
        cache: false,
        success: function(result) {

            glob_mntcookie = 1;

            $('#gdprModal').modal("hide");
            //Close the header message
            $(".header_message.cookies_eu").slideUp();
            $("#mnt_header_ad").removeClass("header_msg");


            fireJS("ExternalJS");
            fireJS("GA");
            fireOrSaveGoogleADs(null, true);



            var checkGDPRTimer = setInterval(function() {

                if (
                    glob_JS.GAInit.length == 0 &&
                    glob_JS.GA.length == 0 &&
                    glob_JS.ExternalJS.length == 0 &&
                    glob_JS.AD.length == 0
                ) {
                    //if no queue need to be execute first, set GDPR off.
                    glob_TrueOnGDPR = false;



                    clearInterval(checkGDPRTimer);
                }

            }, 100);


        }
    });



}




$('#gdprModal').on('shown.bs.modal', function() {

    $(this).find(".modal-content").removeAttr("style");
    /*
        $(this).removeStyle("height");
        $(this).removeStyle("min-height");
        $(this).removeStyle("border-radius");
    */

    var modalBody = document.querySelectorAll("#gdprModal .modal-body");
    var modalFooter = document.querySelectorAll("#gdprModal .modal-footer");
    var modalContent = document.querySelector("#gdprModal .modal-content");

    var contentHeight = modalBody[0].offsetHeight + modalFooter[0].offsetHeight;
    // var contentHeight = modalContent.offsetHeight;

    // var windowHeight = window.innerHeight;
    var windowHeight = modalContent.offsetHeight;

    // console.log('windowHeight:'+windowHeight);

    // the scroll more btn block
    var scrollBtn = document.querySelectorAll("#gdprModal .scroll_more");

    if (contentHeight <= windowHeight) {
        // content smaller than the window height, scrollbtn-block display d-none
        scrollBtn[0].classList.add("hidden");
        // console.log('equal the window height! no scroll btn');
    }



});

function modalScroll() {
    // define variables

    var element = document.querySelectorAll("#gdprModal .modal-body");

    // scrollTop
    var scrollHeight = element[0].scrollTop;
    // console.log('scrollHeight:'+scrollHeight);

    var modalBody = document.querySelectorAll("#gdprModal .modal-body");
    var modalFooter = document.querySelectorAll("#gdprModal .modal-footer");
    var modalContent = document.querySelectorAll("#gdprModal .modal-content");

    // console.log('modalBody:'+modalBody[0].scrollHeight);
    // console.log('modalFooter:'+modalFooter[0].scrollHeight);
    // console.log('modalContent:'+modalContent[0].offsetHeight);

    var objectHeight = modalBody[0].scrollHeight - modalContent[0].offsetHeight;
    console.log('objectHeight:' + objectHeight);

    // the scroll more btn block
    var scrollBtn = document.querySelectorAll("#gdprModal .scroll_more");

    // statement if scrollTop >= objectHeight
    if (scrollHeight >= objectHeight) {
        // console.log('scrollHeight:'+scrollHeight);
        // console.log('objectHeight:'+objectHeight);
        // console.log('equal!');
        // scrollBtn[0].classList.add("hidden");
        modalFooter[0].classList.remove("gradient");
    } else {
        // console.log('fail!');
        // scrollBtn[0].classList.remove("hidden");
        modalFooter[0].classList.add("gradient");
    }
}

function scrollAccept() {
    // console.log('scrollAccept');
    var $element = $("#gdprModal .modal-content");
    // element[0].scrollTop = element[0].scrollHeight;
    // console.log('element.scrollHeight:'+element.scrollHeight);
    // console.log('element.scrollTop:'+element[0].scrollTop);

    //element[0].scrollTo(element[0], element[0].scrollHeight, 1250);

    $element.animate({
        scrollTop: $element.height()
    }, 1250);
}



function GDPRReject() {

    if (glob_mntcookie != 1) {

        //count show modal
        $.ajax({
            type: "GET",
            url: "/account/GDPRModalCounter.php",
            data: {
                type: "cancel",
                deviceInfo: glob_deviceInfo,
                currentPath: window.location.pathname
            },
            cache: false
        }).always(function(result) {

            window.location.href = "http://healthline-anon.flywheelsites.com/";

        }).done(function(result) {

            console.log("add cancel counter success!");


        }).fail(function(result) {

            console.log("add cancel counter failed!");

        })





    }

}




function fireOrSaveGoogleADs(AdFunction, firstRound) {


    if (typeof isAdblockOn !== 'undefined') {

        if (isAdblockOn()) {
            //adblocker is on, clear queue and ignore ad command
            glob_JS.AD = [];
            return;

        }

    }


    if (glob_mntcookie == 1) {

        if (glob_JS.AD.length > 0) {
            //if there is a queue need run, finish it first
            for (var i = 0; i < glob_JS.AD.length; i++) {

                var tempGoogleAds = glob_JS.AD[i];

                //console.log(tempGoogleAds);
                tempGoogleAds();

            }



            try {
                //show ADs
                AdBridg.refresh();
            } catch (e) {
                console.log("ad will not be loaded, because googletag pubads not exist");
            }


            //clear
            glob_JS.AD = [];


        }


        if (typeof AdFunction === 'function') {
            //directly run ad function while Adfunction got send
            AdFunction();
        }

    } else {
        //do get permission of run ad, save it
        glob_JS.AD.push(AdFunction);

    }


}


function RunFunctionArrayWithDelay(functions, queueName, delegate, delay) {
    var i = 0;

    var callCount = 0;

    //var start = new Date().getTime();

    function loop() {

        //if(queueName=='GA'){
        //    console.log(functions[i]);
        //    console.log("GA:"+queueName+",i:"+i);
        //
        //}


        // each loop, call passed in function
        delegate(functions[i]);

        // increment, and if we're still here, call again
        if (i < functions.length - 1) {

            if (queueName === 'GA') {
                if (i === 0) {
                    //index 0 in GA queue is GA create function, we need wait GA already be created and we continue execute remain GA functions


                    var waitGATimer = setInterval(function() {
                        //check every 50ms to make sure GA had been loaded
                        if (typeof window.ga.getAll === "function") {
                            i++;
                            setTimeout(loop, delay); //recursive
                            clearInterval(waitGATimer);
                        }


                    }, 50);


                } else if (i === 1) {
                    //index 1 in GA queue is GA create function, we need wait GA already be created and we continue execute remain GA functions
                    ga(function(tracker) {
                        glob_isGaReady = true;
                        //alert("GA clientId:");
                        i++;
                        setTimeout(loop, delay); //recursive


                    });


                } else {
                    //others, just go
                    i++;
                    setTimeout(loop, delay); //recursive

                }


            } else {
                i++;
                //not ga function, just go
                setTimeout(loop, delay); //recursive
            }


        }



        //var end = new Date().getTime();
        //var time = end - start;

        //console.log(queueName+", i:"+i);

    }

    // seed first call
    setTimeout(loop, delay);
}


function fireJS(targetQueueKeyName, jsFunction) {

    if (glob_mntcookie == 1 || glob_TrueOnGDPR == false) {

        if (targetQueueKeyName === 'GA' && glob_JS['GAInit'].length > 0) {

            //if we are going to run GA func, push GAInit function to the GA function queue, to make sure GA is init properly
            for (var i = glob_JS['GAInit'].length - 1; i >= 0; i--) {
                glob_JS[targetQueueKeyName].unshift(glob_JS['GAInit'][i]);
            }

            glob_JS['GAInit'] = [];


        }

        var runCmdQueueTimer = setInterval(function() {

            var needWaitFlag = false;

            if (targetQueueKeyName == "AD") {
                //ad need wait gpt.js loaded, so we set a needWaitFlag

                if (!window.AdBridg || !window.googletag || !googletag.apiReady) {
                    needWaitFlag = true;
                }

            }


            if (!needWaitFlag) {
                //if we don't need wait, just run the command

                if (glob_JS[targetQueueKeyName].length > 0) {
                    //if there is a queue need run, finish it first
                    RunFunctionArrayWithDelay(glob_JS[targetQueueKeyName], targetQueueKeyName, function(func) {
                        func();
                    }, 10);
                    glob_JS[targetQueueKeyName] = [];
                }


                if (typeof jsFunction === 'function') {
                    //console.log(jsFunction);
                    //directly run ad function while jsFunction got send
                    jsFunction();

                }

                //clear the wait timer
                clearInterval(runCmdQueueTimer);

            }



        }, 50);



    } else {

        //do get permission of run js, save it
        glob_JS[targetQueueKeyName].push(jsFunction);

    }


}

function confirmDeny() {
    // console.log('confirmDeny');

    var footer = document.querySelector("#gdprModal .modal-footer");

    var content = document.querySelector("#gdprModal .fullscreen_inner");
    var contentA = '<h5>Please accept our privacy terms</h5><p>We use cookies and similar technologies to improve your browsing experience, personalize content and offers, show targeted ads, analyze traffic, and better understand you. We may share your information with third-party partners for marketing purposes. To learn more and make choices about data use, visit our <a href="https://www.medicalnewstoday.com/advertising" target="_blank">Advertising Policy</a> and <a href="https://www.medicalnewstoday.com/privacy-policy" target="_blank">Privacy Policy</a>. By clicking “Accept and Continue” below, (1) you consent to these activities unless and until you withdraw your consent using our rights request form, and (2) you consent to allow your data to be transferred, processed, and stored in the United States.</p>';
    var contentB = '<h5>Are you sure?</h5><p>This article may only be avaliable if you accept our data privacy terms. Go back and accept our terms to get full access Healthline’s 200,200+ medically reviewed health, nutrition, and wellness articles.</p>';

    var primaryBtn = document.querySelector("#gdprModal .modal-footer button.primary");

    var secondBtn = document.querySelector("#gdprModal .modal-footer button:last-of-type");

    if (content.classList.contains("confirm") == false) {
        footer.classList.remove("gradient");

        content.innerHTML = contentB;
        content.classList.add("confirm");

        primaryBtn.setAttribute("onclick", "confirmDeny();");
        primaryBtn.innerHTML = "Go Back";

        secondBtn.classList.remove("secondary");
        secondBtn.classList.add("secondary-border", "confirm");
        secondBtn.innerHTML = "I'm sure, Deny permission";
    } else {
        footer.classList.add("gradient");

        content.innerHTML = contentA;
        content.classList.remove("confirm");

        primaryBtn.innerHTML = "Accept and Continue to Site";
        primaryBtn.setAttribute("onclick", "GDPRAccept();");

        secondBtn.classList.remove("secondary-border");
        secondBtn.classList.add("secondary");
        secondBtn.classList.remove("confirm");
        secondBtn.setAttribute("onclick", "confirmDeny();");
        secondBtn.innerHTML = "Deny permission";
    }
    if (secondBtn.classList.contains("confirm") == true) {
        secondBtn.setAttribute("onclick", "GDPRReject();");
    }
}
(function($) {

    $.organicTabs = function(el, options) {

        var base = this;
        base.$el = $(el);
        base.$nav = base.$el.find(".nav");

        base.init = function() {

            base.options = $.extend({}, $.organicTabs.defaultOptions, options);

            // Accessible hiding fix
            $(".hide").css({
                "position": "relative",
                "top": 0,
                "left": 0,
                "display": "none"
            });

            base.$nav.delegate("li > a", "click", function() {

                // Figure out current list via CSS class
                var curList = base.$el.find("a.current").attr("href").substring(1),

                    // List moving to
                    $newList = $(this),

                    // Figure out ID of new list
                    listID = $newList.attr("href").substring(1),

                    // Set outer wrapper height to (static) height of current inner list
                    $allListWrap = base.$el.find(".list-wrap"),
                    curListHeight = $allListWrap.height();

                $allListWrap.height(curListHeight);

                if ((listID != curList) && (base.$el.find(":animated").length == 0)) {

                    // Fade out current list
                    base.$el.find("#" + curList).fadeOut(base.options.speed, function() {

                        base.$el.find("#" + curList).addClass("hide");
                        // Fade in new list on callback
                        base.$el.find("#" + listID).fadeIn(base.options.speed);
                        base.$el.find("#" + listID).removeClass("hide");

                        // Adjust outer wrapper to fit new list snuggly
                        var newHeight = base.$el.find("#" + listID).height();

                        $allListWrap.animate({
                            height: newHeight + 22
                        });

                        // Remove highlighting - Add to just-clicked tab
                        base.$el.find(".nav li a").removeClass("current");
                        $newList.addClass("current");


                        //Hack for citations
                        if ($newList.text().toLowerCase() === "citations") {
                            $("#article_tabs .list-wrap, #info_tabs .list-wrap").css({
                                "max-height": newHeight + 22
                            });
                        } else {
                            $("#article_tabs .list-wrap, #info_tabs .list-wrap").css({
                                "max-height": "300px"
                            });
                        }

                    });

                }

                // Don't behave like a regular link
                // Stop propegation and bubbling
                return false;
            });

        };
        base.init();
    };

    $.organicTabs.defaultOptions = {
        "speed": 300
    };

    $.fn.organicTabs = function(options) {
        return this.each(function() {
            (new $.organicTabs(this, options));
        });
    };

})(jQuery);
// Popular Tabs

$(function() {
    $("#popular_tabs").organicTabs({
        "speed": 100
    });
});

$(document).ready(function() {

    $("#navigation #search_toggle").click(function(event) {

        event.stopPropagation();

        $(this).toggleClass("active");

        var navigation = "";


        if ($(this).closest('#navigation').length) {

            navigation = $("#navigation");

        } else {

            navigation = $("#navigation_scroll");
        }

        // if it has show we hide
        if (navigation.find("#search_area").hasClass("show")) {

            navigation.find("#searchwrapper").addClass("hidden");

        }

        if (is_userTablet) {
            navigation.find("#search_area").css({
                'transition': 'initial'
            });
            navigation.find("#searchwrapper").css({
                'transition': 'initial'
            });
        }


        //IF the user is from mobile
        if (is_userMobile) {

            if (navigation.find("#search_area").hasClass("show")) {

                navigation.find("#search_area").css({
                    'visibility': 'hidden'
                });

            } else {

                navigation.find("#search_area").css({
                    'visibility': 'visible'
                });
            }


        }

        navigation.find("#search_area").toggleClass("show");


        reset_search_toggle(navigation);


        //New skin only, make search wrapper full screen
        if (is_userMobile && !glob_responsiveOverride) {
            if (navigation.find("#search_area").hasClass("show")) {
                //if we show menu, we need to make it full height (MAIN navigation only)
                // var windowHeight = document.documentElement.clientHeight;
                if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
                    var windowHeight = screen.height;
                } else {
                    var windowHeight = document.documentElement.clientHeight;
                }

                var navigationHeight = $("#navigation").outerHeight();

                //Init
                navigation.find("#search_area").css({
                    'max-height': windowHeight - navigationHeight,
                    'height': "100%",
                    "overflow-y": "scroll"
                });

                //Add noscroll 
                if (!$("html").hasClass("noscroll")) {
                    $("html").addClass('noscroll');
                }

                //close other active panel 
                //
                //MAIN MENU
                if ($("#navigation .menu_topics").hasClass("active")) {
                    $(".menu_topics").removeClass("active");
                }

                if ($("#navigation .menu_login").hasClass("active")) {
                    $(".menu_login").removeClass("active");
                }


                fireOrSaveJsFunctions(0, function() {
                    ga('send', 'event', {
                        eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Search',
                        eventAction: 'Search click - Main nav',
                        eventLabel: 'Search open - Main nav'
                    });
                });

            } else {
                navigation.find("#search_area").css({
                    'height': ""
                });
                if ($("html").hasClass("noscroll")) {
                    $("html").removeClass('noscroll');
                }
            }
        }


    });



    $(document).click(function() {

        if ($("#navigation #search_area").hasClass("show")) {
            $("#navigation #search_area").removeClass("show");
            $("#navigation #searchwrapper").addClass("hidden");
            $("#navigation #search_area").css({
                "visibility": "hidden",
                "height": ""
            });
            $("#navigation #search_toggle").css({
                'background-position': '0 -550px'
            });
            $("#navigation #search_toggle").removeClass("active");

        }

        if ($("#navigation_scroll #search_area").hasClass("show")) {

            $("#navigation_scroll #search_area").removeClass("show");
            $("#navigation_scroll #search_area").css({
                "visibility": "hidden",
                "height": ""
            });

            $("#navigation_scroll #searchwrapper").addClass("hidden");
            $("#navigation_scroll #search_toggle").css({
                'background-position': '0 -550px'
            });
            $("#navigation_scroll #search_toggle").removeClass("active");
        }


    });




    $("#navigation #search_area").click(function(event) {

        event.stopPropagation();
    });




    function reset_search_toggle(navigation) {

        //if open
        if (navigation.find("#search_area").hasClass("show")) {

            navigation.find("#searchwrapper").removeClass("hidden");

            if (!is_userTablet) { //only focus on desktop and mobile

                setTimeout(function() {

                    navigation.find(".show #header_search").focus();

                }, 100);
            }
        }

    }


});
// Smoothscroll (to anchor)
$(document).ready(function() {
    //Only affects in article body
    $('.article_body a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //tabbed article ga events 
    $('.article_toc a[href*="#"]:not([href="#"])').click(function(event) {
        var index = $('.article_toc a[href*="#"]:not([href="#"])').index(this) + 1;
        if (index > 0) {
            fireOrSaveJsFunctions(0, function() {
                ga('send', 'event', {
                    eventCategory: 'tabs - ' + glob_pageType,
                    eventAction: 'TAB - ' + index,
                    eventLabel: articleID
                });
            });
        }

    });

});



// Back to top

$(function() {

    /* set variables locally for increased performance */
    var scroll_timer;
    var displayed = false;
    var $message = $('#message a');
    var $window = $(window);
    //var top = $(document.body).children(0).position().top;
    //Only show back to top arrow when user scrolls over 60% of the page .
    var top = $("body").height() * 0.6;


    /* react to scroll event on window */
    $window.scroll(function() {
        //console.log("This is top "+top+ $window.scrollTop());
        window.clearTimeout(scroll_timer);
        scroll_timer = window.setTimeout(function() {
            if ($window.scrollTop() <= top) {
                displayed = false;
                $message.fadeOut(500);
            } else if (displayed == false) {
                displayed = true;
                $message.show();
                $message.fadeIn();
                $message.stop(true, true).show().click(function() {
                    $message.fadeOut(500);
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
            }
        }, 500);
    });


    //SCROLL TO TOP FOR ARTICLE

    $('.top_button').click(function(event) {

        $("html, body").animate({
            scrollTop: 0
        }, 600);
        if ($("#navigation_social").length > 0 && $("#navigation_social").hasClass("visible")) {
            $("#navigation_social").removeClass("visible");
        }
        return false;

    });

});

//Fix iframe cache problem
/*$("iframe").each(function(){
	$(this).attr('src', $(this).attr('src'));
});*/
var gaSkinLabel = "";
if (typeof glob_newSkin !== "undefined") {
    if (glob_newSkin == "1") {
        gaSkinLabel = "New";
    } else {
        gaSkinLabel = "Old";
    }
}



$(document).ready(function() {


    //check header message 

    var headerMessageExist = $(".cookies_eu").length > 0 || $(".header_message").length > 0 || $(".header_error").length > 0 || $(".header_message_IE6").length > 0;


    //If EU cookie exists
    if (headerMessageExist && $("#mnt_header_ad").length > 0) {
        ///ONLY IF EU DIV EXIST AND AD EXISTS , WE ADD THE CLASS 
        $(".cookies_eu,.header_message,.header_error,.header_message_IE6").show();
        $("#mnt_header_ad").addClass("header_msg");

        if (is_userMobile) {
            $("." + glob_headerBarClassName).hide();
        }

    }


    // When clicking on the button close or the mask layer the popup closed

    var htmlclass = $('html').attr('class');


    $('body').on('click', '#mask', function(event) {
        if ($(".article_print").length > 0) {

            if (htmlclass.indexOf("ie") > 0) {
                ie_version = htmlclass.substring(htmlclass.lastIndexOf("ie"), htmlclass.lastIndexOf("ie") + 3);

                if (!ie_version == "") {
                    $('html').addClass(ie_version);
                }
            }

            $(".article_print").remove();
            $("#print-pre").remove();
            $(".article").find("*").removeClass("non_print");

        }

        if (!is_userMobile && !is_userTablet) {
            $(".login-popup").fadeOut(300);
            $('.article_print').fadeOut(300);
            // $('#mask').fadeOut(300);
        }


        if ($(".smcx-widget").length > 0) {
            //Close survey monkey if it's showing on the page
            $(".smcx-modal-close").click();
        }
    });


    //Only include this if it's new skin

    $("#navigation,#navigation_scroll").bind("click", function(event) {
        //if it's click on menu_topics or login, we do nothing
        if ($(event.target).hasClass("menu_topics") || $(event.target).parents(".menu_topics").length > 0 || $(event.target).hasClass("menu_mask")) {

        } else {
            //if menu is open, close it
            if ($("#navigation .menu_topics").hasClass("active")) {
                $("#navigation .menu_topics > a").click();
            }

            if ($("#navigation_scroll .menu_topics").hasClass("active")) {
                $("#navigation_scroll .menu_topics > a").click();
            }
        }

    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27 && $(".menu_topics").hasClass("active")) { // escape key maps to keycode `27`
            //if menu is open, close it
            if ($("#navigation .menu_topics").hasClass("active")) {
                $("#navigation .menu_topics > a").click();
            } else if ($("#navigation_scroll .menu_topics").hasClass("active")) {
                $("#navigation_scroll .menu_topics > a").click();
            }
        }
    });







    $(".show_all_categories").click(function(event) {
        event.preventDefault();
        $(this).hide();
        //cat_normal
        $(this).next().slideDown();

    });



});


// Header message - EU cookie
$(".cookies_eu #header_close_button").click(function(event) {

    GDPRAccept();
});


$(".topic_popular_list li > a").click(function() {
    // Top categories item click (New)
    var categorySelected = $(this).text();

    if (categorySelected) {
        if ($(this).parents("#navigation").length > 0) {
            var targetMenu = "Main menu";
        } else {
            var targetMenu = "Sticky menu";
        }

        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + targetMenu + ' - Topics',
                eventAction: 'Menu click - Single topic',
                eventLabel: 'Menu click - ' + categorySelected
            });
        });
    }
});

$(".topic_all_list li > a").click(function() {
    // Top categories item click (New)
    var categorySelected = $(this).text();

    if (categorySelected) {
        if ($(this).parents("#navigation").length > 0) {
            var targetMenu = "Main menu";
        } else {
            var targetMenu = "Sticky menu";
        }

        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + targetMenu + ' - Topics',
                eventAction: 'Menu click - ' + categorySelected,
                eventLabel: 'Menu click - ' + categorySelected
            });
        });
    }
});



//Bootstrap modal show/hide actions
//
var scrollPos = 0;

//Backdrop z-index fix
$(document).on('show.bs.modal', '.modal', function(e) {
    var zIndex = 1040 + (10 * $('.modal:visible').length);
    $(this).css('z-index', zIndex);
    setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);

    if (is_userMobile && !glob_responsiveOverride) {
        $(".modal-dialog").css({
            "width": "100%",
            "height": "100%",
            "margin": "0",
            "padding": "0"
        });

        $(".modal-content").css({
            "height": "auto",
            "min-height": "100%",
            "border-radius": "0"

        });



        //86 is modal header height
        $(".iframe_scroll_container").css({
            "-webkit-overflow-scrolling": "touch",
            "overflow-y": "auto",
            "max-height": screen.height - 86
        });



    }


});



$(document).on('hidden.bs.modal', '.modal', function() {
    $('.modal:visible').length && $(document.body).addClass('modal-open');
    if ($("html").hasClass("noscroll") && !$('.modal:visible').length && !$("#mask").is(":visible") && !$(".menu_topics").hasClass("active")) {
        $("html").removeClass("noscroll");
    }


    if (is_userMobile && !glob_responsiveOverride) {
        $("html").css({
            "position": ""
        });
    }
});


function isUserIE() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    //IF it's IE
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        return true;
    } else {
        return false;
    }

}

//  ----------------------------------------------------------------------------
//
//  bootstrap-typeahead.js  
//
//  Twitter Bootstrap Typeahead Plugin
//  v1.2.2
//  https://github.com/tcrosen/twitter-bootstrap-typeahead
//
//
//  Author
//  ----------
//  Terry Rosen
//  tcrosen@gmail.com | @rerrify | github.com/tcrosen/
//
//
//  Description
//  ----------
//  Custom implementation of Twitter's Bootstrap Typeahead Plugin
//  http://twitter.github.com/bootstrap/javascript.html#typeahead
//
//
//  Requirements
//  ----------
//  jQuery 1.7+
//  Twitter Bootstrap 2.0+
//
//  ----------------------------------------------------------------------------

!
function($) {

    "use strict";

    //------------------------------------------------------------------
    //
    //  Constructor
    //
    var Typeahead = function(element, options) {
        this.$element = $(element);
        this.options = $.extend(true, {}, $.fn.typeahead.defaults, options);
        //this.$menu = $(this.options.menu).appendTo('#category_search');
        //this.$menu = $(this.options.menu).appendTo('#searchFormHeader');
        this.$menu = $(this.options.menu).appendTo(this.$element.parent());

        this.shown = false;

        // Method overrides    
        this.eventSupported = this.options.eventSupported || this.eventSupported;
        this.grepper = this.options.grepper || this.grepper;
        this.highlighter = this.options.highlighter || this.highlighter;
        this.lookup = this.options.lookup || this.lookup;
        this.matcher = this.options.matcher || this.matcher;
        this.render = this.options.render || this.render;
        this.select = this.options.select || this.select;
        this.sorter = this.options.sorter || this.sorter;
        this.source = this.options.source || this.source;

        if (!this.source.length) {
            var ajax = this.options.ajax;

            if (typeof ajax === 'string') {
                this.ajax = $.extend({}, $.fn.typeahead.defaults.ajax, {
                    url: ajax
                });
            } else {
                this.ajax = $.extend({}, $.fn.typeahead.defaults.ajax, ajax);
            }

            if (!this.ajax.url) {
                this.ajax = null;
            }
        }

        this.listen();
    }

    Typeahead.prototype = {

        constructor: Typeahead,

        //=============================================================================================================
        //
        //  Utils
        //
        //=============================================================================================================

        //------------------------------------------------------------------
        //
        //  Check if an event is supported by the browser eg. 'keypress'
        //  * This was included to handle the "exhaustive deprecation" of jQuery.browser in jQuery 1.8
        //
        eventSupported: function(eventName) {
            var isSupported = (eventName in this.$element);

            if (!isSupported) {
                this.$element.setAttribute(eventName, 'return;');
                isSupported = typeof this.$element[eventName] === 'function';
            }

            return isSupported;
        },

        //=============================================================================================================
        //
        //  AJAX
        //
        //=============================================================================================================

        //------------------------------------------------------------------
        //
        //  Handle AJAX source 
        //
        ajaxer: function() {
            var that = this,
                query = that.$element.val();

            if (query === that.query) {
                return that;
            }

            // Query changed
            that.query = query;

            // Cancel last timer if set
            if (that.ajax.timerId) {
                clearTimeout(that.ajax.timerId);
                that.ajax.timerId = null;
            }

            if (!query || query.length < that.ajax.triggerLength) {
                // Cancel the ajax callback if in progress
                if (that.ajax.xhr) {
                    that.ajax.xhr.abort();
                    that.ajax.xhr = null;
                    that.ajaxToggleLoadClass(false);
                }

                return that.shown ? that.hide() : that;
            }

            // Query is good to send, set a timer
            that.ajax.timerId = setTimeout(function() {
                $.proxy(that.ajaxExecute(query), that)
            }, that.ajax.timeout);

            return that;
        },

        //------------------------------------------------------------------
        //
        //  Execute an AJAX request
        //
        ajaxExecute: function(query) {
            this.ajaxToggleLoadClass(true);

            // Cancel last call if already in progress
            if (this.ajax.xhr) this.ajax.xhr.abort();

            var params = this.ajax.preDispatch ? this.ajax.preDispatch(query) : {
                query: query
            };
            var jAjax = (this.ajax.method === "post") ? $.post : $.get;
            this.ajax.xhr = jAjax(this.ajax.url, params, $.proxy(this.ajaxLookup, this));
            this.ajax.timerId = null;
        },

        //------------------------------------------------------------------
        //
        //  Perform a lookup in the AJAX results
        //
        ajaxLookup: function(data) {
            var items;

            this.ajaxToggleLoadClass(false);

            if (!this.ajax.xhr) return;

            if (this.ajax.preProcess) {
                data = this.ajax.preProcess(data);
            }

            // Save for selection retreival
            this.ajax.data = data;

            items = this.grepper(this.ajax.data);

            if (!items || !items.length) {
                return this.shown ? this.hide() : this;
            }

            this.ajax.xhr = null;

            return this.render(items.slice(0, this.options.items)).show();
        },

        //------------------------------------------------------------------
        //
        //  Toggle the loading class
        //
        ajaxToggleLoadClass: function(enable) {
            if (!this.ajax.loadingClass) return;
            this.$element.toggleClass(this.ajax.loadingClass, enable);
        },

        //=============================================================================================================
        //
        //  Data manipulation
        //
        //=============================================================================================================

        //------------------------------------------------------------------
        //
        //  Search source
        //
        lookup: function(event) {
            var that = this,
                items;

            if (that.ajax) {
                that.ajaxer();
            } else {
                that.query = that.$element.val();

                if (!that.query) {
                    return that.shown ? that.hide() : that;
                }

                items = that.grepper(that.source);

                if (!items || !items.length) {
                    return that.shown ? that.hide() : that;
                }

                return that.render(items.slice(0, that.options.items)).show();
            }
        },

        //------------------------------------------------------------------
        //
        //  Filters relevent results 
        //
        grepper: function(data) {
            var that = this,
                items;

            if (data && data.length && !data[0].hasOwnProperty(that.options.display)) {
                return null;
            }

            items = $.grep(data, function(item) {
                return that.matcher(item[that.options.display], item);
            });

            return this.sorter(items);
        },

        //------------------------------------------------------------------
        //
        //  Looks for a match in the source
        //
        matcher: function(item) {
            return ~item.toLowerCase().indexOf(this.query.toLowerCase());
        },

        //------------------------------------------------------------------
        //
        //  Sorts the results
        //
        sorter: function(items) {
            var that = this,
                beginswith = [],
                caseSensitive = [],
                caseInsensitive = [],
                item;

            while (item = items.shift()) {
                if (!item[that.options.display].toLowerCase().indexOf(this.query.toLowerCase())) {
                    beginswith.push(item);
                } else if (~item[that.options.display].indexOf(this.query)) {
                    caseSensitive.push(item);
                } else {
                    caseInsensitive.push(item);
                }
            }

            return beginswith.concat(caseSensitive, caseInsensitive);
        },

        //=============================================================================================================
        //
        //  DOM manipulation
        //
        //=============================================================================================================

        //------------------------------------------------------------------
        //
        //  Shows the results list
        //
        show: function() {
            var pos = $.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });

            this.$menu.css({
                /*top: pos.top + pos.height,*/
                //top:$("#category_search_input").position()+$("#category_search_input").height(),
                top: $(".header_search").position() + $(".header_search").height(),
                position: "absolute"
                /*left: pos.left*/

            });
            if ($(".nav_new").length > 0) {
                this.$menu.prepend("<li></li>")
            } else {
                this.$menu.prepend("<li class='message'><a><strong>Matching categories:</strong></a></li>");
            }

            this.$menu.show();
            this.shown = true;
            return this;
        },

        //------------------------------------------------------------------
        //
        //  Hides the results list
        //
        hide: function() {
            this.$menu.hide();
            this.shown = false;
            return this;
        },

        //------------------------------------------------------------------
        //
        //  Highlights the match(es) within the results
        //
        highlighter: function(item) {
            var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');

            /*if (typeof item == 'undefined') {
                //return "No category available.<br />Try our <a href='/search' class='category_no_result'>main site search</a>.";
                return "No matching category was found.<br />Please try our <a href='/search' class='category_no_result'>main search</a>.";
            
            }else{*/

            return item.replace(new RegExp('(' + query + ')', 'ig'), function($1, match) {
                return '<strong>' + match + '</strong>';
            });
            //}

        },

        //------------------------------------------------------------------
        //
        //  Renders the results list
        //
        render: function(items) {
            var that = this;

            items = $(items).map(function(i, item) {
                i = $(that.options.item).attr('data-value', item[that.options.val]);
                i.find('a').html(that.highlighter(item[that.options.display], item));
                return i[0];
            });


            var firstcontent = items.first().html();

            if (firstcontent.indexOf("category_no_result") >= 0) {

                items.first().addClass('active message');

            } else {

                items.first().addClass('active');

            }


            this.$menu.html(items);

            return this;
        },

        //------------------------------------------------------------------
        //
        //  Item is selected
        //
        select: function() {
            var $selectedItem = this.$menu.find('.active');
            if ($selectedItem.text().indexOf("categories") >= 0) {

            } else {

                this.$element.val($selectedItem.text()).change();
            }
            this.options.itemSelected($selectedItem, $selectedItem.attr('data-value'), $selectedItem.text());
            return this.hide();
        },

        //------------------------------------------------------------------
        //
        //  Selects the next result
        //
        next: function(event) {
            var active = this.$menu.find('.active').removeClass('active');
            var next = active.next();

            if (!next.length) {
                next = $(this.$menu.find('li')[0]);
            }

            next.addClass('active');
        },

        //------------------------------------------------------------------
        //
        //  Selects the previous result
        //
        prev: function(event) {
            var active = this.$menu.find('.active').removeClass('active');
            var prev = active.prev();

            if (!prev.length) {
                prev = this.$menu.find('li').last();
            }

            prev.addClass('active');
        },

        //=============================================================================================================
        //
        //  Events
        //
        //=============================================================================================================

        //------------------------------------------------------------------
        //
        //  Listens for user events
        //
        listen: function() {
            this.$element.on('blur', $.proxy(this.blur, this))
                .on('keyup', $.proxy(this.keyup, this));

            if (this.eventSupported('keydown')) {
                this.$element.on('keydown', $.proxy(this.keypress, this));
            } else {
                this.$element.on('keypress', $.proxy(this.keypress, this));
            }

            this.$menu.on('click', $.proxy(this.click, this))
                .on('mouseenter', 'li', $.proxy(this.mouseenter, this));
        },

        //------------------------------------------------------------------
        //
        //  Handles a key being raised up
        //
        keyup: function(e) {
            e.stopPropagation();
            e.preventDefault();

            switch (e.keyCode) {
                case 40:
                    // down arrow
                case 38:
                    // up arrow
                    break;
                case 9:
                    // tab
                case 13:
                    // enter
                    /*if (!this.shown) {
                        return;
                    }
                    this.select();*/
                    //Trigger search submit button
                    if ($(this.$menu).parents("#navigation").length > 0) {
                        $("#navigation #header_search_button").click();
                    }

                    if ($(this.$menu).parents("#navigation_scroll").length > 0) {
                        $("#navigation_scroll #header_search_button").click();
                    }
                    break;
                case 27:
                    // escape
                    this.hide();
                    break;
                default:
                    this.lookup();
            }
        },

        //------------------------------------------------------------------
        //
        //  Handles a key being pressed
        //
        keypress: function(e) {
            e.stopPropagation();
            if (!this.shown) {
                return;
            }

            switch (e.keyCode) {
                case 9:
                    // tab
                case 13:
                    // enter
                case 27:
                    // escape
                    e.preventDefault();
                    break;
                case 38:
                    // up arrow
                    e.preventDefault();
                    this.prev();
                    break;
                case 40:
                    // down arrow
                    e.preventDefault();
                    this.next();
                    break;
            }
        },

        //------------------------------------------------------------------
        //
        //  Handles cursor exiting the textbox
        //  Don't hide when it's blur
        blur: function(e) {
            if (!$(".nav_new").length > 0) {
                var that = this;
                e.stopPropagation();
                e.preventDefault();
                setTimeout(function() {
                    if (!that.$menu.is(':focus')) {
                        that.hide();
                    }
                }, 150)
            }
        },

        //------------------------------------------------------------------
        //
        //  Handles clicking on the results list
        //
        click: function(e) {
            e.stopPropagation();
            e.preventDefault();
            this.select();
        },

        //------------------------------------------------------------------
        //
        //  Handles the mouse entering the results list
        //
        mouseenter: function(e) {
            this.$menu.find('.active').removeClass('active');
            $(e.currentTarget).addClass('active');
        }
    }

    //------------------------------------------------------------------
    //
    //  Plugin definition
    //
    $.fn.typeahead = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typeahead'),
                options = typeof option === 'object' && option;

            if (!data) {
                $this.data('typeahead', (data = new Typeahead(this, options)));
            }

            if (typeof option === 'string') {
                data[option]();
            }
        });
    }

    //------------------------------------------------------------------
    //
    //  Defaults
    //
    $.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        display: 'name',
        val: 'id',
        itemSelected: function() {},
        ajax: {
            url: null,
            timeout: 300,
            method: 'post',
            triggerLength: 3,
            loadingClass: null,
            displayField: null,
            preDispatch: null,
            preProcess: null
        }
    }

    $.fn.typeahead.Constructor = Typeahead;

    //------------------------------------------------------------------
    //
    //  DOM-ready call for the Data API (no-JS implementation)
    //    
    //  Note: As of Bootstrap v2.0 this feature may be disabled using $('body').off('.data-api')    
    //  More info here: https://github.com/twitter/bootstrap/tree/master/js
    //
    $(function() {
        $('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function(e) {
            var $this = $(this);

            if ($this.data('typeahead')) {
                return;
            }

            e.preventDefault();
            $this.typeahead($this.data());
        })
    });

}(window.jQuery);

$(document).ready(function() {

    var searchCompleted = false;

    //GET DATA FOR AUTOCOMPLETE, display nav-name now 

    if (typeof category === 'undefined') {
        category = catrgory;
    }


    //When user leaves the page, we check to see if they activated search  but not finish it 
    $(window).unload(function() {
        //New menu

        if (($("#navigation #search").hasClass("active") || $(".navigation_scroll_search #search").hasClass("active") || $("#search_toggle").hasClass("active")) && !searchCompleted) {
            if ($("#navigation #search").hasClass("active")) {
                fireOrSaveJsFunctions(0, function() {
                    ga('send', 'event', {
                        eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Search',
                        eventAction: 'Search - Interrupted',
                        eventLabel: 'Search - Interrupted'
                    });
                });
            } else {
                fireOrSaveJsFunctions(0, function() {
                    ga('send', 'event', {
                        eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Sticky menu - Search',
                        eventAction: 'Search - Interrupted',
                        eventLabel: 'Search - Interrupted'
                    });
                });
            }

        }

    });

    $('#navigation #header_search,#navigation_scroll #header_search,#header_search').typeahead({
        source: category,
        display: "displayNavName",
        itemSelected: displayResult,
        val: "url"
    });



    $(".default_menu .menu_search,.navigation_scroll_search").click(function(event) {
        event.preventDefault();
        event.stopPropagation();

        //If it's trigger by main nav, we hide the logo and change the background of the menu

        if ($(this).parent().hasClass("main_nav")) {
            //Check to see if other tabs are active        

            if ($(".nav_new .menu_topics").hasClass("active")) {
                $(".nav_new .menu_topics").removeClass("active");
            }


            if ($(".js-show-notifications").hasClass("active")) {
                $(".js-show-notifications").removeClass("active");
                $(".notification_container").removeClass("active");
            }

            $("#navigation #search").removeClass("inactive").addClass("active");
            $("#navigation #header_search").focus();

            //Send ga event 
            fireOrSaveJsFunctions(0, function() {
                ga('send', 'event', {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Search',
                    eventAction: 'Search click - Main nav',
                    eventLabel: 'Search open - Main nav'
                });
            });
        } else {
            //Click in navigation scroll
            if ($(this).hasClass("navigation_scroll_search")) {
                $(".scroll_menu_left").hide();

                if (typeof articleID !== 'undefined' && articleID) {
                    //Click in article pages 
                    fireOrSaveJsFunctions(0, function() {
                        ga('send', 'event', {
                            eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Search',
                            eventAction: 'Search click - Article sticky nav',
                            eventLabel: 'Search open - Article sticky nav'
                        });
                    });
                } else {
                    //Click in general pages 
                    fireOrSaveJsFunctions(0, function() {
                        ga('send', 'event', {
                            eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Search',
                            eventAction: 'Search click - Non-article sticky nav',
                            eventLabel: 'Search open - Non-article sticky nav'
                        });
                    });
                }




                if ($(window).innerWidth() > $(window).innerHeight()) {
                    $("body.site_mobile #navigation_scroll div#search form ul.typeahead").css({
                        "height": "220px",
                        "overflow": "scroll"
                    });
                } else {
                    $("body.site_mobile #navigation_scroll div#search form ul.typeahead").css({
                        "height": "auto",
                        "overflow": ""
                    });
                }


            }
            //if it's new menu, we expend the height to full screen
            $(this).find("#search").removeClass("inactive").addClass("active");
            $(this).find("#header_search").focus();
        }


    });


    //Mobile main nav search
    $(".mobile_menu .menu_search").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (glob_newSkin && is_userMobile && !glob_responsiveOverride) {
            $("#navigation.mobile_menu nav div#search").height($(window).innerHeight());
            $("html,body").addClass("noscroll");
            $("html,body").css({
                "height": "100%"
            });
            //if it's landscape, we need to make the menu scroll 
            if ($(window).innerWidth() > $(window).innerHeight()) {
                $("#navigation.mobile_menu nav div#search form ul.typeahead").css({
                    "height": "220px",
                    "overflow": "scroll"
                });
            } else {
                $("#navigation.mobile_menu nav div#search form ul.typeahead").css({
                    "height": "auto",
                    "overflow": ""
                });
            }
        }
        $(this).next().removeClass("inactive").addClass("active");
        // $("#search").show();
        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Search',
                eventAction: 'Search click - Main nav',
                eventLabel: 'Search open - Main nav'
            });
        });
    });




    $("#navigation #header_search_button,#navigation_scroll #header_search_button").click(function(event) {
        event.preventDefault();
        // if($("#header_search").val()!==""){
        //     $("#searchFormHeader").submit();    
        // }
        //#header_search
        if ($(this).prev("input").val() !== "") {
            //#searchFormHeader
            if ($(this).parents("#navigation").length > 0) {
                var eventCategory = "Main menu - Search";
            } else {
                var eventCategory = "Sticky menu - Search";
            }
            fireOrSaveJsFunctions(0, function() {
                ga('send', 'event', {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + eventCategory,
                    eventAction: 'Search - Completed via button',
                    eventLabel: 'Search - Completed via button'
                });
            });
            searchCompleted = true;
            $(this).parent().submit();
        }
    });



    function displayResult(item, val, text) {


        if (item.hasClass("message")) {
            //Do nothing if there's a message class

        } else {

            if (item.parents("#navigation").length > 0) {
                var eventCategory = "Main menu - Search";
            } else {
                var eventCategory = "Sticky menu - Search";
            }

            fireOrSaveJsFunctions(0, function() {
                ga('send', 'event', {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + eventCategory,
                    eventAction: 'Search - Completed via typeahead',
                    eventLabel: 'Search - Completed via typeahead'
                });
            });
            searchCompleted = true;
            location.href = '/categories/' + val;
        }

    }

    //prevent search toggle clicking
    $("#search_toggle a").click(function(event) {
        event.preventDefault();

    });


});
$(document).ready(function() {
    var showSurvey = false;
    //Newsletter page email validate check 
    $(".tour-btn").click(function(event) {
        event.preventDefault();
        window.location.href = $(this).parent().attr("href");
    });

    //Show newsletter modal window after page load ,delay 45 secs 
    var alreadyShown = false;

    if (showNewsletterPopup) {

        setTimeout(function() {

            showInitMobileNewsletterModalWindowTrigger();

        }, 45000); //Timer 45 secs	

    }


    var showInitMobileNewsletterModalWindowTrigger = function() {
        if ($(".modal_window.active_open").length > 0 || ($(".article_print").is(":visible")) || $(".article_email").is(":visible") || $(".newsletter_success_message.active").length > 0 || (typeof interstitialTrigger !== 'undefined') || $('.modal').hasClass('in') || $("#mask").is(":visible") || showSurvey || $(".menu_topics.active").length > 0) {
            //if survey monkey shows up, we do nothing as well

        } else {
            //first, we make the modal window html structure
            if (!alreadyShown) {
                initMobileNewsletterModalWindow();
            }
        }

    };


    function initMobileNewsletterModalWindow() {
        //FOR MOBILE
        alreadyShown = true;

        if ($(".mobile_newsletter_container").length > 0) {
            showMobileNewsletterWindow();
        } else {
            //Load the modal 
            $.get("/structure/framework/main/article/mobile_newsletter_modal.php", function(data) {
                $("body").append(data);
                showMobileNewsletterWindow();

                $(".mobile_newsletter_container_outer").on('hidden.bs.modal', function() {
                    //If cookie is not set ,we set the cookie
                    if (showNewsletterPopup) {
                        setNewsletterPopupCookie();
                    }
                });
            });
        }
    }


    function setNewsletterPopupCookie() {
        var dataString = 'mobile_newsletter=1';
        $.ajax({
            type: "POST",
            url: "/account/message-session-setter.php",
            data: dataString,
            cache: false,
            success: function(result) {}
        });
    }


    function showMobileNewsletterWindow() {

        //check every 500ms
        var newsModalTid = setInterval(function() {

            if (glob_mntcookie == 1) {

                if ($(".mobile_newsletter_container_outer").length > 0) {
                    $(".mobile_newsletter_container_outer").modal("show");
                }

                //Add GA events in to detect article modal trigger
                fireOrSaveJsFunctions(0, function() {
                    ga('send', 'event', {
                        eventCategory: "UI Elements",
                        eventAction: "Article Modal - " + glob_deviceInfo,
                        eventLabel: "Visible"
                    });
                });

                clearInterval(newsModalTid);
            }

        }, 2000);

    }

});
$(document).ready(function() {

    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page == "help") {
        dynamicFaq();

        var hashpath = window.location.hash;
        var pathtrigger = 'a[href="' + hashpath + '"]';
        if (hashpath !== "") {
            var element_top = $(pathtrigger).closest("dt").position().top;

            $('html, body').animate({
                scrollTop: $(window).scrollTop() + element_top
            });
            $(pathtrigger).closest("dt").click();
        }

    }

});

function dynamicFaq() {
    $('dd').hide();
    $('dt').bind('click', function() {
        $(this).toggleClass('open').next().slideToggle();
    });

}



///MNT history target ga code

// check for ad load
var googleadsLoaded = false;
//create a iframe. Append the iframe to the body. And then after pageLoaded check if their offsetHeight, display or visibility is set such a way that user cannot see them.
//In the URL use the words specific to advertising so that Adblock can do string matching.
var iframe = document.createElement("iframe");
iframe.height = "1px";
iframe.width = "1px";
iframe.id = "ads-text-iframe";
iframe.src = "/ads.html";
document.body.appendChild(iframe);


if (typeof AdBridg !== "undefined") {
    fireOrSaveGoogleAdFunctions(function() {
        // ADBRIDG MIGRATION: Use AdBridg proxy events instead of googletag events
        AdBridg.cmd.push({
            "events": {
                "gpt.render_raw": function() {
                    // console.log('ADBRIDG MIGRATION: set googleadsLoaded=true')
                    googleadsLoaded = true;
                }
            }
        });
    });
}



var adsBlockOn = 0;
var adBlockValue = "";

function sendMNThistoryGa(e) {
    //Detect adblock by iframe first
    if (isAdblockOn() || adsBlockOn) {
        // ADB enabled
        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: 'Ad Block',
                eventAction: 'Ad Block Enabled',
                eventLabel: 'Enabled',
                nonInteraction: true
            });
        });
        adBlockValue = "Enabled";
        //ga('set', 'dimension15', "adb-on");
    } else {
        // ADB disabled
        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: 'Ad Block',
                eventAction: 'Ad Block Disabled',
                eventLabel: 'Disabled',
                nonInteraction: true
            });
        });
        adBlockValue = "Disabled";
        //ga('set', 'dimension15', "adb-off");      
    }

    //We should put the call inside this function , otherwise ga will be sent first

    // ga('send', 'pageview');
}


function isAdblockOn() {


    var iframe = document.getElementById("ads-text-iframe");
    if (iframe.style.display == "none" || iframe.style.display == "hidden" || iframe.style.visibility == "hidden" || iframe.offsetHeight == 0) {
        //Adblock is blocking ads on this page
        googleadsLoaded = false;
        // 2018/01 Because of implementing ad-unblocker, we need this to be true when ad blocker is on
        if (is_userMobile && !glob_responsiveOverride) {
            showAdsOnArticle = false;
        } else {
            //Add new classes
            $("body").addClass("adblock_on");
        }

        // iframe.remove();
        return true;
    } else {
        //Adblock is not detecting ads on this page
        googleadsLoaded = true;
        // iframe.remove();

        return false;
    }

}


if (window.addEventListener) {

    window.addEventListener("load", pageFullyLoaded, false);

} else if (window.attachEvent) {

    window.attachEvent('onload', pageFullyLoaded);

}


function pageFullyLoaded(e) {
    //Detect adblock by iframe first

    // if(isAdblockOn()){
    if (isAdblockOn()) {
        //If ad block is on , we show all mnt_history image
        //
        //2018/01 test for ads 
        //
        //
        if (is_userMobile && !glob_responsiveOverride) {
            $(".mnt_history").css({
                'display': 'block'
            });
        }

        //for making BT header block appear in right position if Ad Blocker is enable
        $("#dlb1_unit").css({
            'display': 'none'
        });

        mobileAdBlockCall();
        adsBlockOn = 1;
        //$('head').append("<style>#dlb1_container:before, #dlb2_container:before, #dlb3_container:before, #dlb4_container:before, #mnt_dlb_foot_container:before, #dmr1_container:before, #dmr2_container:before, #dmr3_container:before, #dmr4_container:before, #dmr5_container:before, #dmr6_container:before, #dmr7_container:before, #dmr8_container:before, #dmr9_container:before, #dmr10_container:before, #dmr11_container:before, #dmr12_container:before, #dmr13_container:before, #dmr14_container:before, #dmr15_container:before, #mnt_mlb_head_container:before, #mmr1_container:before, #mmr2_container:before, #mmr3_container:before, #mmr4_container:before, #mmr5_container:before,#mnt_header_ad:before, #mnt_article_ad_1:after, #mnt_article_ad_2:before, #mnt_article_ad_3:before, #mnt_sidebar_ad_1:before, #mnt_sidebar_ad_2:before, #sidebar_ad_adam:before {content: '' !important;}</style>");

        if (is_userMobile && !glob_responsiveOverride) {
            $('head').append("<style>#dlb1_container:before, #dlb2_container:before, #dlb3_container:before, #dlb4_container:before, #mnt_dlb_foot_container:before, #dmr1_container:before, #dmr2_container:before, #dmr3_container:before, #dmr4_container:before, #dmr5_container:before, #dmr6_container:before, #dmr7_container:before, #dmr8_container:before, #dmr9_container:before, #dmr10_container:before, #dmr11_container:before, #dmr12_container:before, #dmr13_container:before, #dmr14_container:before, #dmr15_container:before, #mnt_mlb_head_container:before, #mmr1_container:before, #mmr2_container:before, #mmr3_container:before, #mmr4_container:before, #mmr5_container:before,#mnt_header_ad:before, #mnt_article_ad_1:after, #mnt_article_ad_2:before, #mnt_article_ad_3:before, #mnt_sidebar_ad_1:before, #mnt_sidebar_ad_2:before, #sidebar_ad_adam:before {content: '' !important;}</style>");
        } else {
            $('head').append("<style> #mnt_dlb_foot_container:before {content: '' !important;}</style>");
        }
    } else {


        //For those who didn't hide iframe , we need to check by counting the ads and mnt_history to see if it matches

        var mntAdsCount = 0;
        var mntAdsBlockTriggerCount = 0;

        $(".mnt_history").each(function(index) {

            mntAdsCount++;
            googleadsLoaded = false;

            // if($(this).next().children("div").length>0&&$(this).next().children("div").is(":visible")){
            if ($(this).next().children("div").length > 0) {
                //check last time 
                googleadsLoaded = true;
            }

            //check ads load and load message if not
            if (!googleadsLoaded) {

                mntAdsBlockTriggerCount++;
                //2017/04 Only show mnt_history on isAdblockOn(), cause some ads loads really slow

                //$(this).css({ 'display':'block' });

            } else {
                //alert("Ads loaded");

            }
        });

        if ($(".adsbygoogle").length > 0 || $("#mobile_unit_docked").length > 0) {
            if (is_userMobile && !glob_responsiveOverride && $(".adsbygoogle").children().length < 1 && $("#mobile_unit_docked").children("iframe").length < 1) {
                mobileAdBlockCall();
                adsBlockOn = 1;
            }
        }

        //if it's desktop , we check to see if the adblock and ads count matches
        if (!is_userMobile && !glob_responsiveOverride && mntAdsCount == mntAdsBlockTriggerCount) {
            adsBlockOn = 1;
        }
    }
    //Function sets in scripts_default_bottom.php
    sendMNThistoryGa();
    if (typeof articleID !== "undefined") {
        //if it's an article page, we set MNT Data layer
        setMNTDataLayer();
    }
}



function mobileAdBlockCall() {
    if (is_userMobile && !glob_responsiveOverride) {

        if ($("#mobile_unit_docked").length > 0) {
            var targetItem = $("#mobile_unit_docked");
            mobileAppendBlockImage(targetItem);
        } else {
            $(".adsbygoogle").after("<div id=\"mnt_history_mobile_sticky\"></div>");
            var targetItem = $("#mnt_history_mobile_sticky");
            mobileAppendBlockImage(targetItem);
        }
    }
}


function mobileAppendBlockImage(targetItem) {
    targetItem.append("<a href='/whitelist-mnt'><img class=\"mnt_history_mobile_sticky\" src=\"https://cdn1.medicalnewstoday.com/structure/images/mnt_ads/mnt_history_article_mobile_sticky.png\" alt=\"Thank you for supporting Medical News Today\"></a>");

    //Backup solution
    setTimeout(function() {
        //set background image as a backup solution
        targetItem.css({
            "background-image": 'url(https://cdn1.medicalnewstoday.com/structure/images/mnt_ads/mnt_history_article_mobile_sticky.png)',
            "background-size": "320px 50px"
        });

    }, 30000); //Timer 30 secs
}


/*Sponser page popup handle */

var isUserIphone = function() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    return /(iphone|ipod).*/.test(deviceAgent);
}

$(document).ready(function($) {

    //Resize modal window
    $(window).resize(function() {

        var modal_popup = ".modal_window.active_open";

        //Set the center alignment padding + border see css style
        var popMargTop = ($(modal_popup).outerHeight()) / 2;
        var popMargLeft = ($(modal_popup).outerWidth()) / 2;

        $(modal_popup).css({
            'margin-top': -popMargTop,
            'margin-left': -popMargLeft
        });

    });

    $(document).on('click', '#header_close_button,#mask', function(event) {

        var modal_popup = ".modal_window.active_open";
        $(modal_popup).fadeOut(300);
        $('#mask').fadeOut(300);
        $('#mask').css({
            "opacity": "0"
        });
        // $("#header_close_button").fadeOut(300);
        $("html").removeClass('noscroll');


        setTimeout(function() {
            $(modal_popup).removeClass("active_open");
        }, 400);

        if (isUserIphone && glob_responsiveOverride) {
            var $objHead = $('head');
            $objHead.find('meta[name=viewport]').remove();
            $objHead.prepend('<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.1, maximum-scale=2.0, user-scalable=1" />');
        }
    });

    //Sidebar sponsored message 
    $(".sidebar_sponsor_modal_trigger").click(function(event) {
        event.preventDefault();
        $(".sidebar_sponsored_modal").modal("show");
    });

});

(function($) {

    // Defining modal popup plugin

    $.fn.modal_popup = function(prop) {

        // Default parameters
        var options = $.extend({
            "width": "90%",
            "max-width": "600px",
            "height": "",
            "targetElement": "",
            "content": "",
            "targetWidth": true,
            "targetHeight": true
        }, prop);

        return this.click(function(e) {
            e.preventDefault();
            var targetElement = options["targetElement"];

            if (options["content"] !== "" && !$(targetElement).length > 0) {
                add_block_page(targetElement);
                add_popup_box();
            }

            // add_styles(targetElement);
            if ($("#mask").length == 0) {
                var outputHtmlString = "<div id=\"mask\"></div>";
                $("body").append(outputHtmlString);
            }


            $(targetElement).fadeIn(300).addClass("active_open");
            add_styles(targetElement);
            $(targetElement).children("#header_close_button").show();
            $('#mask').css({
                "opacity": "0.7"
            });
            $('#mask').fadeIn(300);

            if (!glob_responsiveOverride) {
                $("html").addClass('noscroll');
            } else {
                //If it's iphone ,we change the viewport
                if (isUserIphone && glob_responsiveOverride) {
                    var $objHead = $('head');
                    // define a function to disable zooming
                    $objHead.find('meta[name=viewport]').remove();
                    $objHead.prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />');
                }

                $("#mask").bind('touchmove', function(event) {
                    event.preventDefault();
                }, false);
            }

        });

        function add_styles(targetElement) {
            //Set the center alignment padding + border see css style

            if (options["targetWidth"]) {
                $(targetElement).css({
                    'width': options["width"],
                    'max-width': options["max-width"]
                });
            }
            if (options["targetHeight"]) {
                $(targetElement).css({
                    'height': options["height"]
                });
            }

            $(targetElement).css({
                'z-index': '100000000',
                "box-sizing": "border-box"
            });


            var popMargTop = ($(targetElement).outerHeight()) / 2;
            var popMargLeft = ($(targetElement).outerWidth()) / 2;

            $(targetElement).css({
                'margin-left': -popMargLeft,
                'margin-top': -popMargTop
            });

        }

        function add_block_page(targetElement) {
            if (targetElement.indexOf("#") > -1) {
                targetElement = targetElement.slice(1);
                var block_page = $('<div class="modal_window" id=\"' + targetElement + '\"></div>');
            } else {
                targetElement = targetElement.slice(1);
                var block_page = $('<div class="modal_window ' + targetElement + '"></div>');
            }

            $(block_page).appendTo('body');
        }

        function add_popup_box() {
            var pop_up = $('<div id="header_close_button"></div>' + options["content"] + '<div></div>');
            $(pop_up).appendTo(options["targetElement"]);
        }

        return this;
    };

})(jQuery);
var getNewsletterData = false;
var completeFollowModal = false;
var followClickByButton = true;

$(document).ready(function() {

    var signupClickFromDropDown = false;
    //When user leave the page, we check to see if they got search active but not finish it 
    $(window).unload(function() {
        if ($(".newsletter_selection_container_outer").hasClass("active_open")) {
            fireOrSaveJsFunctions(0, function() {
                ga('send', 'event', {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Modal - Follow',
                    eventAction: 'Modal - Follow incomplete',
                    eventLabel: 'Modal - Follow incomplete'
                });
            });
        }
    });

    //Ga events for main menu 

    $(".menu_forums > a").click(function(event) {
        //Menu item - forums
        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Forums',
                eventAction: 'Menu click - Forums',
                eventLabel: 'Menu click - Forums'
            });
        });
    });
    //Switch menu topic to using click , only on desktop
    // if(!is_userMobile||glob_responsiveOverride){
    $(".menu_topics > a,.menu_login > a").click(function(event) {
        event.preventDefault();
        if (!$(this).hasClass("new_account_dashboard_trigger")) {
            //Only trigger dropdown when it's not logged in
            if ($("#mask").length == 0) {
                $("#navigation").before("<div id='mask' style='display:none;'></div>");
            }
            //2017/07 Move to trigger a modal
            if ($(this).parent().hasClass("menu_login")) {

            } else if ($(this).parent().hasClass("menu_topics")) {
                $(this).parent().toggleClass("active");
            }

            //If the button has active class, we need to remove another one
            if ($(this).parent().hasClass("menu_login")) {
                $(".menu_topics").removeClass("active");
            } else if ($(this).parent().hasClass("menu_topics") && $(this).parent().hasClass("active")) {
                $(".menu_login").removeClass("active");
            }
            setMenuFullScreenHeight($(this));
            //Add no scroll
            if ($(this).parent().hasClass("active")) {
                if (is_userTablet && $(this).parents("#navigation_scroll").length > 0) {
                    //Don't add noscroll if user clicks on sticky menu
                } else {
                    $("html").addClass("noscroll");
                }

            } else {
                $("html").removeClass("noscroll");
            }

        }

    });
    //}



    $(".navigation_scroll_share > a").click(function(event) {
        event.preventDefault();
        $(".navigation_scroll_share").toggleClass("active");
    });


    $(".topic_bar li ul li > a").click(function(event) {
        //Menu item - topics

        //Send ga event 
        var targetElement = $.trim($(this).text());
        var targetField = $.trim($(this).parents("ul:first").closest("li").children("a").text()).capitalizeFirstLetter();
        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Topics',
                eventAction: 'Menu click - ' + targetField,
                eventLabel: 'Menu click - ' + targetElement
            });
        });
    });


    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    //Sub menu modal window 
    if ($(".newsletter_selection_container_outer").hasClass("signup_form")) {
        var modalWidth = "560px";
        var modalHeight = "230px";
    } else {
        var modalWidth = "300px";
        var modalHeight = "600px";
    }
    $(".newsletter_category_follow .modal-popup").modal_popup({
        "width": modalWidth,
        "max-width": modalWidth,
        "height": modalHeight,
        "targetElement": ".newsletter_selection_container_outer",
        "targetWidth": false,
        "targetHeight": false
    });


    //If the user wants to sign up in a popup form,we load in a signup iframe 
    $(".menu_login .sign_up a").click(function(event) {
        event.preventDefault();
        //Register - General sticky nav non-login msg
        //Send ga event 
        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Create account',
                eventAction: 'Register - Main nav',
                eventLabel: 'Register - Main nav'
            });
        });
    });


    $(".nav_scroll_create_account").click(function(event) {
        event.preventDefault();

        if (!signupClickFromDropDown) {
            fireOrSaveJsFunctions(0, function() {
                ga('send', 'event', {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Main menu - Create account',
                    eventAction: 'Register - Sticky nav',
                    eventLabel: 'Register - Sticky nav'
                });
            });
        }

        signupClickFromDropDown = false;

    });



    $(document).on('click', '.newsletter_selection_container_outer #header_close_button,#mask', function(event) {
        event.preventDefault();
        $(".newsletter_category_follow .follow_btn").removeClass("active");
        if ($(".newsletter_selection_container_outer").hasClass("active_open") && !completeFollowModal) {
            fireOrSaveJsFunctions(0, function() {
                ga('send', 'event', {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Modal - Follow',
                    eventAction: 'Modal - Follow incomplete',
                    eventLabel: 'Modal - Follow incomplete'
                });
            });
        }
        //Set completeFollowModal back to default
        completeFollowModal = false;
    });


    //Footer social button ga event
    $("#footer_social .fa-facebook,#footer_social .fa-linkedin,#footer_social .fa-google-plus,#footer_social .fa-pinterest,#footer_social .fa-twitter").click(function(event) {

        switch (true) {
            case $(this).hasClass("fa-facebook"):
                var footerSocialLabel = "Footer - Facebook";
                break;
            case $(this).hasClass("fa-linkedin"):
                var footerSocialLabel = "Footer - LinkedIn";
                break;
            case $(this).hasClass("fa-google-plus"):
                var footerSocialLabel = "Footer - Google+";
                break;
            case $(this).hasClass("fa-pinterest"):
                var footerSocialLabel = "Footer - Pinterest";
                break;
            case $(this).hasClass("fa-twitter"):
                var footerSocialLabel = "Footer - Twitter";
                break;
        }

        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Footer',
                eventAction: footerSocialLabel,
                eventLabel: footerSocialLabel
            });
        });
    });




    function setMenuFullScreenHeight(element) {
        //set menu full screen height
        if (element.parents("#navigation").length || element.parents("#navigation_scroll").length) {
            // var windowHeight = window.innerHeight;
            var windowHeight = screen.height;
            if (element.parents("#navigation").length > 0) {
                var navigationHeight = $("#navigation").outerHeight();
                var myFontsHeader = $("#mfPreviewBar").outerHeight();
                navigationHeight = navigationHeight + myFontsHeader;
            } else {
                var navigationHeight = $("#navigation_scroll").outerHeight();
            }

            //Set menu height full screen
            if (element.parent().hasClass("active")) {

                element.next(".topics").css({
                    "height": "100%"
                });

                //if it's mobile we'll need to make the width 100% as well
                if (is_userMobile && !glob_responsiveOverride) {


                    var meunMaxHeight = windowHeight - navigationHeight;


                    element.next(".topics").css({
                        "width": "100%",
                        "max-height": meunMaxHeight
                    });

                    element.next(".topics").css({
                        "overflow-y": "scroll"
                    });
                }

            } else {
                element.next(".topics").css({
                    "height": "",
                    "width": ""
                });
            }
        }
    }






});



$("body").on("click", ".menu_login a", function(event) {
    event.preventDefault();
    if (!glob_customUserID && glob_pageType !== "account") {
        $('.modal_login_panel').modal('show');
    }
});
$(document).ready(function() {


    $('.weekly').change(function() {
        var $check = $(this);
        var category = $('#weekly_cat');

        var $weekly_choose = $('.weekly_choose');


        if ($weekly_choose.attr("type") == "hidden") {
            //for new newsletter sign up page
            if ($check.prop('checked')) {
                category.show();
            } else {
                category.hide();
            }

        } else {

            if ($check.prop('checked')) {
                if ($weekly_choose.length > 0) {

                    $weekly_choose.attr("disabled", false);
                    if ($("#last_weekly_cats").length > 0 && $("#last_weekly_cats").val()) {
                        $('.weekly_choose option[value=select]').prop('selected', 'selected');
                    } else {
                        $('.weekly_choose option[value=full]').prop('selected', 'selected');
                    }

                    $weekly_choose.change();
                } else {
                    category.show();
                }

            } else {

                if ($weekly_choose.length > 0) {
                    $weekly_choose.attr("disabled", true);
                    $('.weekly_choose option[value="full"]').prop('selected', 'selected');
                    $weekly_choose.change();
                } else {
                    category.hide();
                }

            }

        }


    });



    $('.weekly_choose').change(function() {
        var select_value = $('.weekly_choose').val();
        var category = $('#weekly_cat');

        if (select_value == 'select') {
            //if they had last order from previously , we put it in

            if ($("#last_weekly_cats").length > 0 && $("#last_weekly_cats").val()) {
                //Split values into array and loop through the value
                $.each($("#last_weekly_cats").val().split(","), function(index, value) {
                    $('#weekly_cat input[type=checkbox][value=' + value + ']').prop('checked', true);
                });

            }

            category.show();
            if ($("#weekly_cat .cat_normal :checked").length > 0) {
                $("#weekly_cat .show_all_categories").click();
            }
        } else {

            //Save last order from category box 
            var val = [];
            $('#weekly_cat :checkbox:checked').each(function(i) {
                val[i] = $(this).val();
            });

            if ($("#last_weekly_cats").length > 0 && val.length > 0) {
                $("#last_weekly_cats").val(val.join());
            }


            category.hide();
            $("#weekly_cat").find($(":checkbox")).each(function() {
                $(this).prop('checked', false);
            });
        }
    });


    if (($(".weekly_choose").length > 0 && $(".weekly_choose").val() == "select") || ($("#from_follower").length > 0 && $(".weekly").is(':checked'))) {
        $("#weekly_cat .show_all_categories").click();
    }

    $(".show_all_categories").click(function(event) {
        event.preventDefault();
        $(this).hide();
        //cat_normal
        $(this).next().slideDown();

    });

    $("#btn_tickall_daily").click(function() {
        var checked_status = this.checked;
        $("#daily_cat").find($(":checkbox")).each(function() {

            if ($(this).closest(".cat_normal").length > 0) {
                if ($(this).closest(".cat_normal").is(":visible")) {
                    $(this).prop('checked', true);
                }

            } else {
                $(this).prop('checked', true);
            }

        });
    });



    $('#btn_untick_daily').click(function() {
        $("#daily_cat").find($(":checkbox")).each(function() {
            $(this).prop('checked', false);
        });
    });


    $("#btn_tickall_weekly").click(function() {
        var checked_status = this.checked;
        $("#weekly_cat").find($(":checkbox")).each(function() {
            if ($(this).closest(".cat_normal").length > 0) {
                if ($(this).closest(".cat_normal").is(":visible")) {
                    $(this).prop('checked', true);
                }

            } else {
                $(this).prop('checked', true);
            }
        });
    });


    $("#btn_tickall_popular").click(function() {
        $("#cat_popular").find($(":checkbox")).each(function() {
            $(this).prop('checked', true);
        });
    });



    $('#btn_untick_weekly').click(function() {
        $("#weekly_cat").find($(":checkbox")).each(function() {
            $(this).prop('checked', false);
        });
    });


});
/*!
 * @preserve
 * jquery.scrolldepth.js | v1.0
 * Copyright (c) 2016 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var n, t, r, o, i = {
            minHeight: 0,
            elements: [],
            percentage: !0,
            userTiming: !0,
            pixelDepth: !0,
            nonInteraction: !0,
            gaGlobal: !1,
            gtmOverride: !1,
            trackerName: !1,
            dataLayer: "dataLayer"
        },
        a = e(window),
        l = [],
        c = !1,
        u = 0;
    return e.scrollDepth = function(p) {
        function s(e, i, a, l) {
            var c = p.trackerName ? p.trackerName + ".send" : "send";
            o ? (o({
                event: "ScrollDistance",
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: i,
                eventValue: 1,
                eventNonInteraction: p.nonInteraction
            }), p.pixelDepth && arguments.length > 2 && a > u && (u = a, o({
                event: "ScrollDistance",
                eventCategory: "Scroll Depth",
                eventAction: "Pixel Depth",
                eventLabel: d(a),
                eventValue: 1,
                eventNonInteraction: p.nonInteraction
            })), p.userTiming && arguments.length > 3 && o({
                event: "ScrollTiming",
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: i,
                eventTiming: l
            })) : (n && (window[r](c, "event", "Scroll Depth", e, i, 1, {
                nonInteraction: p.nonInteraction
            }), p.pixelDepth && arguments.length > 2 && a > u && (u = a, window[r](c, "event", "Scroll Depth", "Pixel Depth", d(a), 1, {
                nonInteraction: p.nonInteraction
            })), p.userTiming && arguments.length > 3 && window[r](c, "timing", "Scroll Depth", e, l, i)), t && (_gaq.push(["_trackEvent", "Scroll Depth", e, i, 1, p.nonInteraction]), p.pixelDepth && arguments.length > 2 && a > u && (u = a, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", d(a), 1, p.nonInteraction])), p.userTiming && arguments.length > 3 && _gaq.push(["_trackTiming", "Scroll Depth", e, l, i, 100])))
        }

        function h(e) {
            return {
                "25%": parseInt(.25 * e, 10),
                "50%": parseInt(.5 * e, 10),
                "75%": parseInt(.75 * e, 10),
                "100%": e - 5
            }
        }

        function g(n, t, r) {
            e.each(n, function(n, o) {
                -1 === e.inArray(n, l) && t >= o && (s("Percentage", n, t, r), l.push(n))
            })
        }

        function f(n, t, r) {
            e.each(n, function(n, o) {
                -1 === e.inArray(o, l) && e(o).length && t >= e(o).offset().top && (s("Elements", o, t, r), l.push(o))
            })
        }

        function d(e) {
            return (250 * Math.floor(e / 250)).toString()
        }

        function m() {
            y()
        }

        function v(e, n) {
            var t, r, o, i = null,
                a = 0,
                l = function() {
                    a = new Date, i = null, o = e.apply(t, r)
                };
            return function() {
                var c = new Date;
                a || (a = c);
                var u = n - (c - a);
                return t = this, r = arguments, 0 >= u ? (clearTimeout(i), i = null, a = c, o = e.apply(t, r)) : i || (i = setTimeout(l, u)), o
            }
        }

        function y() {
            c = !0, a.on("scroll.scrollDepth", v(function() {
                var n = e(document).height(),
                    t = window.innerHeight ? window.innerHeight : a.height(),
                    r = a.scrollTop() + t,
                    o = h(n),
                    i = +new Date - D;
                return l.length >= p.elements.length + (p.percentage ? 4 : 0) ? (a.off("scroll.scrollDepth"), void(c = !1)) : (p.elements && f(p.elements, r, i), void(p.percentage && g(o, r, i)))
            }, 500))
        }
        var D = +new Date;
        p = e.extend({}, i, p), e(document).height() < p.minHeight || (p.gaGlobal ? (n = !0, r = p.gaGlobal) : "function" == typeof ga ? (n = !0, r = "ga") : "function" == typeof __gaTracker && (n = !0, r = "__gaTracker"), "undefined" != typeof _gaq && "function" == typeof _gaq.push && (t = !0), "function" == typeof p.eventHandler ? o = p.eventHandler : "undefined" == typeof window[p.dataLayer] || "function" != typeof window[p.dataLayer].push || p.gtmOverride || (o = function(e) {
            window[p.dataLayer].push(e)
        }), e.scrollDepth.reset = function() {
            l = [], u = 0, a.off("scroll.scrollDepth"), y()
        }, e.scrollDepth.addElements = function(n) {
            "undefined" != typeof n && e.isArray(n) && (e.merge(p.elements, n), c || y())
        }, e.scrollDepth.removeElements = function(n) {
            "undefined" != typeof n && e.isArray(n) && e.each(n, function(n, t) {
                var r = e.inArray(t, p.elements),
                    o = e.inArray(t, l); - 1 != r && p.elements.splice(r, 1), -1 != o && l.splice(o, 1)
            })
        }, m())
    }, e.scrollDepth
});
var passInitCheck = false;
var passedDepth = 0;
jQuery.scrollDepth({
    userTiming: false,
    pixelDepth: false,
    nonInteraction: false,
    eventHandler: function(data) {
        if (data) {
            switch (data["eventLabel"]) {
                case "25%":
                    //Reach 25%, we fires 25-50%
                    fireOrSaveJsFunctions(0, function() {
                        ga('send', 'event', {
                            eventCategory: "Scroll events",
                            eventAction: "26-50%",
                            eventLabel: window.location.href
                        });
                    });
                    passInitCheck = true;
                    passedDepth = "26-50";
                    break;
                case "50%":
                    //Reach 50%, we fires 50-75%
                    fireOrSaveJsFunctions(0, function() {
                        ga('send', 'event', {
                            eventCategory: "Scroll events",
                            eventAction: "51-75%",
                            eventLabel: window.location.href
                        });
                    });
                    passInitCheck = true;

                    passedDepth = "51-75";
                    break;
                case "75%":
                    //Reach 75%, we fires 75-100%
                    fireOrSaveJsFunctions(0, function() {
                        ga('send', 'event', {
                            eventCategory: "Scroll events",
                            eventAction: "76-99%",
                            eventLabel: window.location.href
                        });
                    });
                    passInitCheck = true;
                    passedDepth = "76-99";
                    break;
                case "100%":
                    //Reach 100%
                    passInitCheck = true;
                    fireOrSaveJsFunctions(0, function() {
                        ga('send', 'event', {
                            eventCategory: "Scroll events",
                            eventAction: "100%",
                            eventLabel: window.location.href
                        });
                    });
                    passedDepth = "100";
                    break;
            }
        }
    }
});


if (!passInitCheck) {
    //If it hasn't passed initCheck that means it's on page load
    fireOrSaveJsFunctions(0, function() {
        ga('send', 'event', {
            eventCategory: "Scroll events",
            eventAction: "0",
            eventLabel: window.location.href,
            nonInteraction: true
        });
    });
}
firstCheckSent = false;
$(window).scroll(function() {
    if (!passInitCheck && !firstCheckSent) {
        fireOrSaveJsFunctions(0, function() {
            ga('send', 'event', {
                eventCategory: "Scroll events",
                eventAction: "1-25%",
                eventLabel: window.location.href
            });
        });
        firstCheckSent = true;
        passedDepth = "1-25";
    }
});

var newsletter_currentRequest = false;

$(document).on("ready", function(event) {

    bindNewsletterEvents();

});


function bindNewsletterEvents() {

    $(document).on("keypress", ".newsletterFormEmail", function(event) {
        //ignore enter key
        if (event.keyCode == 13) {
            return false;
        }

    });


    $(document).on("click keypress", ".new_reg_signup", function(event) {

        event.preventDefault();

        //show newsletter register modal
        var registrationEntryPoint = ($(this).data("signup-source")) ? $(this).data("signup-source") : "";

        var $newsLetterRegisterObj = getNewsLetterRegisterObj(registrationEntryPoint);

        $newsLetterRegisterObj = setNewsletterCategories($newsLetterRegisterObj);


        if (registrationEntryPoint == "legacy_newsletter_page" || registrationEntryPoint == "footer_newsletter_link" || registrationEntryPoint == "article_modal_newsletter_btn") {
            //if the sign up button was trigger from footer, we do email check first


            checkEmailExistAndSetErrorMessageForInlineForm($newsLetterRegisterObj, function(isValidEmail, ajaxResultObj) {

                if (isValidEmail) {
                    //email is valid

                    if (ajaxResultObj.isSubscribe == "0") {

                        submitNewsletterRegisterForm($newsLetterRegisterObj, ajaxResultObj);

                        return true;

                    } else if (ajaxResultObj.isSubscribe == "1") {

                        if (registrationEntryPoint == "footer_newsletter_link" || registrationEntryPoint == "article_modal_newsletter_btn") {

                            controlUIStatus($newsLetterRegisterObj, 'finishRegisterProcess');
                            handleFinishUIStatus($newsLetterRegisterObj, 'duplicateSubscribed');


                        } else {
                            //already subscribe, only show the result on error holder
                            controlUIStatus($newsLetterRegisterObj, 'emailValidFailedWithJs', '<label class="formError">' + ajaxResultObj.message + '</label>');

                        }

                        return false;

                    }


                }

            });

        } else {
            //bind click event for the modal submit button, then show the modal

            controlUIStatus($newsLetterRegisterObj, 'enableAllUI');

            $newsLetterRegisterObj.errorHolder.html("");

            $(document).off("click", "#email-start-signup-btn");
            $(document).on("click", "#email-start-signup-btn", function(event) {
                //finish sign up button
                event.preventDefault();

                //disabled have value, means it can't be use now.
                if (typeof $(this).attr("disabled") !== "undefined") {
                    return false;
                }

                $newsLetterRegisterObj.errorHolder.html("");


                checkEmailExistAndSetErrorMessageForInlineForm($newsLetterRegisterObj, function(isValidEmail, ajaxResultObj) {


                    if (isValidEmail) {
                        //email is valid

                        submitNewsletterRegisterForm($newsLetterRegisterObj, ajaxResultObj);

                        return true;

                    }


                });

            });

            $newsLetterRegisterObj.registration_modal_form.modal('show');

        }

    });



}



function setNewsletterCategories($newsLetterRegisterObj) {

    var newsletterCategories = "";

    var selectedCategoryText = "";

    if ((typeof glob_categoryName !== 'undefined') && (typeof glob_categoryID !== 'undefined')) {
        //in article or category page, will help user to select relative category
        //in category page

        newsletterCategories = glob_categoryID;

        selectedCategoryText = " the latest " + glob_categoryName + " news.";


        selectedCategoryText = selectedCategoryText.replace(" category", "");

    } else {

        //if got null category, set popular as default value
        newsletterCategories = (newsletterCategories) ? newsletterCategories : 'popular';

        selectedCategoryText = 'our most popular news categories.';
    }


    $newsLetterRegisterObj.newsletterCategories.val(newsletterCategories);

    //selectedCategoryText
    $newsLetterRegisterObj.selectedCategoryText.html(selectedCategoryText);

    return $newsLetterRegisterObj;

}


function getNewsLetterRegisterObj(registrationEntryPoint) {

    //default object set as modal
    var newsLetterRegisterObj = {

        "registration_modal_form": $('#registrationModal'),
        "emailField": $("#inputEmail"),

        "newsletterDefaultMessage": $("#newsletterTypeMessage"),
        "newsletterRegisterInfo": $("#newsletterRegisterInfo"),

        "newsletterCategories": $("#newsletterCategories"),
        "selectedCategoryText": $("#selectedCategoryText"),

        "submitEmailButton": $("#email-start-signup-btn"),

        "modalFooter": $('#registrationModal .modal-footer'),
        "email": "",
        "errorHolder": $("#signFinishErrorHolder"),
        "registrationEntryPoint": registrationEntryPoint,
        "gaLabel": "",

        "registerTips": false

    };



    switch (registrationEntryPoint) {

        case 'menu_newsletter_link':

            newsLetterRegisterObj.gaLabel = "Menu Item Panel";

            break;

        case 'article_modal_newsletter_btn':

            newsLetterRegisterObj.gaLabel = "Article Modal";

            newsLetterRegisterObj.submitEmailButton = $("#mobile_newsletter_container .article_modal_newsletter_btn");


            if ($("#articleModalNewsletterErrorHolder").length > 0) {

                //new article modal DOM exist
                newsLetterRegisterObj.errorHolder = $("#articleModalNewsletterErrorHolder");

                newsLetterRegisterObj.newsletterRegisterInfo = $("#article_newsletter_info");

                newsLetterRegisterObj.emailField = $("#mobile_newsletter_container #formEmail");

                newsLetterRegisterObj.registerTips = $("#articleModalLearnMore");

            }




            break;

        case 'menu_item_link':

            newsLetterRegisterObj.gaLabel = "Menu CTA";

            break;

        case 'footer_newsletter_link':

            newsLetterRegisterObj.gaLabel = "Footer newsletter";
            newsLetterRegisterObj.submitEmailButton = $(".footer_newsletter_link.email-signup-btn");

            newsLetterRegisterObj.errorHolder = $("#footerNewsletterErrorHolder");


            newsLetterRegisterObj.newsletterRegisterInfo = $("#footer_newsletter_span");


            newsLetterRegisterObj.emailField = $("#footerNewsletterSignup #EmailAddress");


            break;

        case 'legacy_newsletter_page':

            newsLetterRegisterObj.gaLabel = "Newsletter Page";
            newsLetterRegisterObj.submitEmailButton = $("#btnNewsletterFormEmail");

            newsLetterRegisterObj.errorHolder = $("#legacy_newsletter_page");

            if (!newsLetterRegisterObj.errorHolder.data("origin-class")) {
                //backup origin
                newsLetterRegisterObj.errorHolder.data("origin-class", newsLetterRegisterObj.errorHolder.attr("class"));

            } else {

                //reset class
                newsLetterRegisterObj.errorHolder.attr("class", newsLetterRegisterObj.errorHolder.data("origin-class"));

            }

            newsLetterRegisterObj.emailField = $("#formEmail");


            break;

    }

    if (newsLetterRegisterObj.gaLabel) {
        ga('send', 'event', {
            eventCategory: "New HCP - Ingress",
            eventAction: "Ingress - " + newsLetterRegisterObj.gaLabel + " - " + glob_deviceInfo + " - " + gaSkinLabel,
            eventLabel: "Ingress - " + newsLetterRegisterObj.gaLabel + " - " + glob_deviceInfo + " - " + gaSkinLabel + " - " + document.location.pathname
        });
    }

    return newsLetterRegisterObj;

}



function checkEmailExistAndSetErrorMessageForInlineForm($newsLetterRegisterObj, callback) {

    var email = $newsLetterRegisterObj.emailField.val();

    if (!email) {

        controlUIStatus($newsLetterRegisterObj, 'emailValidFailedWithJs', '<label class="formError">Please enter your email address</label>');

        callback(false, false);

    } else if (!isValidEmail(email)) {

        controlUIStatus($newsLetterRegisterObj, 'emailValidFailedWithJs', '<label class="formError">This is not a valid email address.</label>');

        callback(false, false);

    } else {

        controlUIStatus($newsLetterRegisterObj, 'emailValidSuccessWithJs');


        var formData = "";

        formData += "action=checkEmailAlreadySubscribedTheCategory";

        formData += "&formEmail=" + email;

        formData += "&newsletterCategories=" + $newsLetterRegisterObj.newsletterCategories.val();

        var tempId = Date.now();

        newsletter_currentRequest = $.ajax({
            url: "/account/newsletter-profile-ajax.php?v=" + tempId,
            type: 'GET',
            data: formData,
            dataType: "json",
            error: function(request, error) {
                alert("There's something wrong ,please try it later.");
                callback(false);
            },
            beforeSend: function() {
                //show progress

                //avoid save btn be click again while saving
                controlUIStatus($newsLetterRegisterObj, 'startAjax', "Checking");

            }

        }).done(function(result) {

            controlUIStatus($newsLetterRegisterObj, 'finishAjax');

            if (result.isSubscribe == "0" || result.isSubscribe == "1") {
                //success

                callback(true, result);

            } else {
                //other error, show error to place holder

                controlUIStatus($newsLetterRegisterObj, 'emailValidFailedWithJs', '<label class="formError">' + result.message + '</label>');

                callback(false, result);
            }

        }).fail(function(result) {

            controlUIStatus($newsLetterRegisterObj, 'finishAjax');

            controlUIStatus($newsLetterRegisterObj, 'emailValidFailedWithJs', '<label class="formError">We just encounter a network error, please try again</label>');

            callback(false, false);


        });

    }

}

function submitNewsletterRegisterForm($newsLetterRegisterObj, validResultObj) {


    if (validResultObj.isSubscribe == "1") {
        //already register current category
        //only modal will reach here


        controlUIStatus($newsLetterRegisterObj, 'finishRegisterProcess');

        handleFinishUIStatus($newsLetterRegisterObj, 'duplicateSubscribed');


    } else {
        //new user for the category, register it.

        var email = $newsLetterRegisterObj.emailField.val();

        var formData = "entrypoint=" + $newsLetterRegisterObj.registrationEntryPoint;

        formData += "&newsletterCategories=" + $newsLetterRegisterObj.newsletterCategories.val();

        formData += "&formEmail=" + encodeURIComponent(email);


        formData += getApApiParams();

        var tempId = Date.now();

        newsletter_currentRequest = $.ajax({
            url: "/account/newsletter-profile-ajax.php?v=" + tempId,
            method: "POST",
            data: formData,
            beforeSend: function() {
                //show progress

                //avoid save btn be click again while saving
                controlUIStatus($newsLetterRegisterObj, 'startAjax', "Saving")


            },
            dataType: "json"

        }).done(function(results) {

            if (results.success && results.userId) {


                controlUIStatus($newsLetterRegisterObj, 'finishRegisterProcess');
                handleFinishUIStatus($newsLetterRegisterObj, 'finishSubscribed');

                if (typeof setUserId === "function" && results.userId !== "-9999") {

                    setUserId(results.userId);

                }


            } else {
                //just show message

                var resultText = results.resultMsg;

                if (typeof resultText !== 'undefined') {

                    resultText = resultText.replace("<li>", "<label class=\"formError\">");
                    resultText = resultText.replace("</li>", "</label>");

                } else {

                    resultText = "<label class=\"formError\">Registration failed, please check the email address you entered and try again.</label>";
                }


                $newsLetterRegisterObj.errorHolder.html(resultText);
                $newsLetterRegisterObj.errorHolder.show();

                controlUIStatus($newsLetterRegisterObj, 'enableAllUI');

                $('body').animate({
                    scrollTop: $newsLetterRegisterObj.errorHolder.offset().top
                }, 1000);

            }


        }).fail(function(results) {

            $newsLetterRegisterObj.errorHolder.html("<label class=\"formError\">Registration failed, please check the email address you entered and try again.</label>");
            $newsLetterRegisterObj.errorHolder.show();

            //only register failed can make the email textbox be available.
            controlUIStatus($newsLetterRegisterObj, 'failedRegisterAjax');


        });
        //hide the default message, just show the info one
        $newsLetterRegisterObj.newsletterDefaultMessage.hide();

    }


}


function controlUIStatus($newsLetterRegisterObj, status, customText) {

    if (status == 'startAjax') {


        $newsLetterRegisterObj.submitEmailButton.html(customText);
        $newsLetterRegisterObj.submitEmailButton.attr("disabled", "disabled");
        $newsLetterRegisterObj.emailField.attr("disabled", "disabled");


    } else if (status == 'finishAjax') {

        $newsLetterRegisterObj.submitEmailButton.html("Subscribe");
        $newsLetterRegisterObj.submitEmailButton.attr("disabled", false);
        $newsLetterRegisterObj.emailField.attr("disabled", false);


    } else if (status == 'finishRegisterAjax') {



    } else if (status == 'emailValidFailedWithJs') {


        $newsLetterRegisterObj.errorHolder.html(customText);
        $newsLetterRegisterObj.errorHolder.show();

    } else if (status == 'emailValidSuccessWithJs') {

        $newsLetterRegisterObj.errorHolder.hide();

    } else if (status == 'failedRegisterAjax') {


        $newsLetterRegisterObj.submitEmailButton.html("CONTINUE");
        $newsLetterRegisterObj.emailField.removeAttr("disabled");
        $newsLetterRegisterObj.submitEmailButton.removeAttr("disabled");


    } else if (status == 'finishRegisterProcess') {

        $newsLetterRegisterObj.emailField.attr("disabled", "disabled");
        $newsLetterRegisterObj.submitEmailButton.attr("disabled", "disabled");
        $newsLetterRegisterObj.emailField.hide();
        $newsLetterRegisterObj.modalFooter.hide();


        if ($newsLetterRegisterObj.errorHolder.attr("id") === 'legacy_newsletter_page') {

            $newsLetterRegisterObj.errorHolder.removeClass("error");

            $newsLetterRegisterObj.errorHolder.addClass("success");

        }



    } else if (status == 'enableAllUI') {

        $newsLetterRegisterObj.submitEmailButton.html("CONTINUE");

        $newsLetterRegisterObj.emailField.removeAttr("disabled");
        $newsLetterRegisterObj.emailField.show();
        $newsLetterRegisterObj.emailField.val("");
        $newsLetterRegisterObj.submitEmailButton.removeAttr("disabled");

        $newsLetterRegisterObj.modalFooter.show();



        //reset text for modal
        $newsLetterRegisterObj.newsletterDefaultMessage.show();
        $newsLetterRegisterObj.newsletterRegisterInfo.hide();


    }

}


function handleFinishUIStatus($newsLetterRegisterObj, status) {


    var finishedSubscribedCategoryName = (typeof glob_categoryName !== 'undefined') ? glob_categoryName : "our top news categories";

    if (typeof glob_categoryName !== 'undefined') {

        finishedSubscribedCategoryName = finishedSubscribedCategoryName.replace(" category", "") + " news";

    }

    var existMsg = false;

    if (status == 'finishSubscribed') {

        if ($newsLetterRegisterObj.registrationEntryPoint == "footer_newsletter_link" ||
            $newsLetterRegisterObj.registrationEntryPoint == "legacy_newsletter_page" ||
            $newsLetterRegisterObj.registrationEntryPoint == "article_modal_newsletter_btn") {


            $newsLetterRegisterObj.emailField.hide();
            $newsLetterRegisterObj.submitEmailButton.hide();

            $newsLetterRegisterObj.newsletterRegisterInfo.hide();


            if ($newsLetterRegisterObj.registerTips) {
                $newsLetterRegisterObj.registerTips.hide();
            }



            $newsLetterRegisterObj.errorHolder.html("<p>Thank you, we have added " + finishedSubscribedCategoryName + " to your newsletter subscription.<br><br>Please check your email for a message from us. To edit your preferences, please follow the link provided in the email.</p>");
            $newsLetterRegisterObj.errorHolder.show();

            return false;

        } else {
            //success register
            existMsg = "<p>Thank you, we have added " + finishedSubscribedCategoryName + " to your newsletter subscription.<br><br>Please check your email for a message from us. To edit your preferences, please follow the link provided in the email.</a></p>";


        }

    } else if (status == 'duplicateSubscribed') {

        if ($newsLetterRegisterObj.registrationEntryPoint == "footer_newsletter_link" ||
            $newsLetterRegisterObj.registrationEntryPoint == "article_modal_newsletter_btn") {

            $newsLetterRegisterObj.emailField.hide();
            $newsLetterRegisterObj.submitEmailButton.hide();
            $newsLetterRegisterObj.errorHolder.hide();

            //replace the origin tip text
            $newsLetterRegisterObj.newsletterRegisterInfo.html("<p>Thank you, you are already subscribed to receive news for " + finishedSubscribedCategoryName + ".<br><br>To edit your preferences, please follow the link provided in your next newsletter.</p>");


            return false;

        } else {
            existMsg = "<p>Thank you, you are already subscribed to receive news for " + finishedSubscribedCategoryName + ".<br><br>To edit your preferences, please follow the link provided in your next newsletter.</p>";

        }



    } else {

        return false;

    }


    if (existMsg) {

        //existMsg+="<p>Please check your email for a message from us. To edit your preferences, please follow the link provided in the email.</a></p>";

        //hide the default message, just show the info one
        $newsLetterRegisterObj.newsletterDefaultMessage.hide();

        $newsLetterRegisterObj.newsletterRegisterInfo.html(existMsg);
        $newsLetterRegisterObj.newsletterRegisterInfo.show();

    }

    return false;


}

function getApApiParams() {

    var formData = "";
    var ga_client_id = "";

    ga(function(tracker) {
        ga_client_id = tracker.get('clientId')
    });


    if (typeof ga_client_id !== "undefined" && ga_client_id) {
        formData += "&gaid=" + ga_client_id;
    }


    if (typeof ly_cid !== "undefined" && ly_cid) {
        formData += "&lytics_id=" + ly_cid;
    }


    if (typeof glob_bindingK1 !== "undefined" && glob_bindingK1) {
        formData += "&k1=" + glob_bindingK1;
    }

    formData += "&pagePath=" + window.location.pathname;

    if (typeof window.location.search !== "undefined" && typeof window.location.search.includes !== "undefined" && window.location.search.includes("apFailedTest")) {
        formData += "&apFailedTest=1";
    }

    return formData;

}

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}



window.addEventListener('load', function() {

    var el = document.querySelectorAll(G_imageSharingRelativeDOMClassName);

    for (var i = 0; i < el.length; i++) {

        var tempEL = el[i];

        //remove redundancy clickable DOM
        tempEL.parentNode.removeChild(tempEL);


    }





    //move the trigger code to image_effect_global_func
    //initImageSharingEffect(false);

});




var initImageSharingEffect = function(onlySlider) {

    var prefixClass = "";


    //only resize for slider image
    if (onlySlider) {

        prefixClass = ".owl-carousel ";

    }

    //$.each($(prefixClass+"img"+G_imageSharingMainDOMClassName),function(index,dom){


    var selectedDoms = document.querySelectorAll(".article_body " + prefixClass + "img,#factoids img");

    for (var i = 0; i < selectedDoms.length; i++) {

        var selectedDom = selectedDoms[i];

        if (selectedDom.id != "suggest_reading_outer_container") {

            loadImageSharingImageByIndex(i, prefixClass, selectedDom);

        }

    }


    //console.log("load finish");

};





var loadImageSharingImageByIndex = function(index, prefixClass, OverLayDom) {


    if (OverLayDom == null) {
        //for lazy loader use.

        var selectedDoms = document.querySelectorAll(".article_body " + prefixClass + "img,#factoids img");

        OverLayDom = selectedDoms[index];

    }


    if (OverLayDom.classList.contains('clickable') ||
        OverLayDom.classList.contains('galleryOverlayImage') ||
        !OverLayDom.parents(G_imageWidgetWrapperSelector).length
    ) {
        //do not add sharing image while clickable class is exist on the image
        //if img do not have img wrapper, it means the img is not valid for add widget, skip it.
        return;
    }



    if (OverLayDom.getAttribute("data-article-id") && glob_deviceInfo != "Desktop") {
        //if current image is factoid image, but it is not in desktop mode, ignore it

        return;
    }




    if (
        (OverLayDom.classList.contains('lazy') || OverLayDom.classList.contains('owl-lazy'))

        &&
        OverLayDom.getAttribute("data-src") != null) {
        //if the image is lazy, add a mark let lazy loader add the plugin while the image is not lazy.
        OverLayDom.setAttribute('data-sharing-image-index', index);

        console.log("skip sharing:" + index);

        return;

    }


    var tempDom = document.createElement('div');
    tempDom.innerHTML = G_imageSharing_html_str;
    var imageSharingDom = tempDom.firstChild;
    OverLayDom.parentNode.insertBefore(imageSharingDom, OverLayDom.nextSibling);


    var parentDivDom = getClosestParentBySelector(OverLayDom, G_imageWidgetWrapperSelector);


    var hoverTextDom = parentDivDom.querySelector(".imageSharing_hover_text");

    //because button is not only one in these widget, so assign the variance by finding child of text div
    var hoverBtns = hoverTextDom.querySelectorAll(".imageSharing_button");




    //add these css for infobox ul li
    OverLayDom.style.display = 'block';
    OverLayDom.style.float = 'none';


    var setCSSForSmallImage = function() {


        //if image width <= 250, need add small image class
        if (parseInt(getComputedStyle(OverLayDom).width) <= 250) {


            if (!parentDivDom.parents(".read-more-fulltext").length && !parentDivDom.parents(".owl-carousel").length) {

                //the picture is not in the read more section
                //neither in carousel section

                var tempEl = parentDivDom.querySelector(G_imageSharingRelativeDOMClassName);

                if (tempEl) {
                    tempEl.classList.add("smallImage");
                }


                try {
                    //clear the third one, if exist
                    //only do this in pinterest button exist
                    if (!IsPinterestPluginExist()) {
                        hoverBtns[2].outerHTML = "";
                    }

                } catch (e) {

                }

            }


        }


    };



    if (is_userMobile) {


        parentDivDom.setAttribute("data-sharing-is-enable", "no");

        parentDivDom.addEventListener("click", function(event) {
            //if the widget is in content blocks, disable the click event which is open link
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            setTimeout(function() {
                parentDivDom.setAttribute("data-sharing-is-enable", "");
            }, 50);

        });

        parentDivDom.addEventListener("mouseover", function(event) {
            //if the widget is in content blocks, disable the click event which is open link
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            setTimeout(function() {
                parentDivDom.setAttribute("data-sharing-is-enable", "");
            }, 50);

        });


        parentDivDom.addEventListener("mouseleave", function(event) {
            //if the widget is in content blocks, disable the click event which is open link
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            parentDivDom.setAttribute("data-sharing-is-enable", "no");

        });


    }


    setCSSForSmallImage();

    if (OverLayDom.getAttribute("data-article-id")) {
        //article id already set in image

        //only set for desktop
        setClickEffect(hoverBtns, shortUrlToFullUrl(OverLayDom.src), parentDivDom, OverLayDom.getAttribute("data-article-id"), OverLayDom.alt, index);

    } else {
        setClickEffect(hoverBtns, shortUrlToFullUrl(OverLayDom.src), parentDivDom, "", "", index);
    }



    //set css default
    //$hoverDiv.hide();

};



var newURL = window.location.protocol + "//www.medicalnewstoday.com" + window.location.pathname;
var twitterShareText = $(document).find("title").text();
twitterShareText = twitterShareText.replace("- Medical News Today", "") + " " + newURL + " via @mnt";

function setClickEffect(hoverBtnDoms, imageUrl, parentDivDom, targetArticleID, targetArticleText, currentPictureIndex) {


    //console.log($hoverBtn);
    var buttonTargetArticleID = 0;

    if (targetArticleID) {
        //for factoids image

        buttonTargetArticleID = targetArticleID;

        newURL += "articles/" + buttonTargetArticleID + ".php";
        twitterShareText = targetArticleText + " " + newURL + " via @mnt";

    } else {

        buttonTargetArticleID = articleID;

    }



    for (var i = 0; i < hoverBtnDoms.length; i++) {

        var hoverBtnDom = hoverBtnDoms[i];

        var tempId = 'shareButton' + currentPictureIndex + i;

        if (typeof hoverBtnDom.id === 'undefined' || hoverBtnDom.id == "") {

            hoverBtnDom.id = tempId;
        }

        var targetwebsite = hoverBtnDom.getAttribute("data-targetwebsite");


        var $targetBtn = $("#" + tempId);

        var tempATag;

        if (targetwebsite === 'facebook') {
            //facebook


            hoverBtnDom.addEventListener("click", function(event) {

                event.preventDefault();

                if (parentDivDom.getAttribute("data-sharing-is-enable") != "no") {

                    fireOrSaveJsFunctions(0, function() {
                        ga('send', 'event', {
                            eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Article image hover - share',
                            eventAction: 'Article share - Facebook',
                            eventLabel: 'Article share - Facebook[' + buttonTargetArticleID + "]"
                        });
                    });

                    if (!is_userMobile) {
                        // api.simulateClick();
                        window.open('https://www.facebook.com/sharer.php?u=' + newURL + '&t=' + encodeURI(document.title), 'sharer', 'toolbar=0, status=0, width=900, height=500');
                    } else {
                        initMobileSocialPlugins("facebook");
                    }
                }


            });

            //create facebook share icon
            tempATag = document.createElement("a");
            tempATag.href = "#";
            tempATag.className = "facebook";


            hoverBtnDom.appendChild(tempATag);


        } else if (targetwebsite === 'twitter') {
            //twitter


            hoverBtnDom.addEventListener("click", function(event) {

                event.preventDefault();

                if (parentDivDom.getAttribute("data-sharing-is-enable") != "no") {

                    fireOrSaveJsFunctions(0, function() {
                        ga('send', 'event', {
                            eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Article image hover - share',
                            eventAction: 'Article share - Twitter',
                            eventLabel: 'Article share - Twitter[' + buttonTargetArticleID + "]"
                        });
                    });

                    if (!is_userMobile) {
                        // api.simulateClick();
                        window.open('https://twitter.com/intent/tweet?text=' + document.title + " " + newURL + "&via=mnt", 'sharer', 'toolbar=0, status=0, width=650, height=360');
                    } else {
                        initMobileSocialPlugins("twitter");
                    }


                }

            });

            //create facebook share icon
            tempATag = document.createElement("a");
            tempATag.href = "#";
            tempATag.className = "twitter";


            hoverBtnDom.appendChild(tempATag);


        } else if (targetwebsite === 'pinterest') {


            if (IsPinterestPluginExist()) {
                //do not show pinterest share if pinterest browser extension exist
                $targetBtn.remove();

            } else {

                hoverBtnDom.addEventListener("click", function(event) {

                    event.preventDefault();

                    if (parentDivDom.getAttribute("data-sharing-is-enable") != "no") {

                        fireOrSaveJsFunctions(0, function() {
                            ga('send', 'event', {
                                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + 'Article image hover - share',
                                eventAction: 'Article share - Pinterest',
                                eventLabel: 'Article share - Pinterest[' + buttonTargetArticleID + "]"
                            });
                        });

                        if (!is_userMobile) {
                            // api.simulateClick();

                            if (typeof articleType != "undefined" && articleType == 'drugs') {
                                imageUrl = window.location.origin + "https://cdn1.medicalnewstoday.com/structure/images/social/mnt_sharing.png";
                            }
                            window.open('https://www.pinterest.com/pin/create/link/?url=' + newURL + '&media=' + imageUrl + '&description=' + document.title, 'sharer', 'toolbar=no,width=700,height=300');
                        } else {
                            initMobileSocialPlugins("pinterest");
                        }

                    }

                });

                //create facebook share icon
                tempATag = document.createElement("a");
                tempATag.href = "#";
                tempATag.className = "twitter";


                hoverBtnDom.appendChild(tempATag);



            }


        }


    }

}



function customSetSmallImageFunc(targetDivDom) {

    //if the imageWidgetWrapper is in read more block, check is it the small size picture, if it is ,remove the third button and give it small class

    if (typeof targetDivDom == 'object') {
        targetDivDom = targetDivDom[0];

    }

    if (typeof targetDivDom == 'undefined') {
        return false;

    }

    var selectedDoms = targetDivDom.querySelectorAll(".imageWidgetWrapper");

    for (var i = 0; i < selectedDoms.length; i++) {

        var selectedDom = selectedDoms[i];

        var OverLayImgDom = selectedDom.querySelector("img");

        var hoverBtnDoms = selectedDom.querySelectorAll(".imageSharing_button");

        //if image width <= 250, need add small image class

        var tempEl = selectedDom.querySelector(G_imageSharingRelativeDOMClassName);


        if (parseInt(getComputedStyle(OverLayImgDom).width) <= 250) {

            //the picture is not in the read more section

            if (tempEl) {
                tempEl.classList.add("smallImage");
            }

            try {
                //clear the third one, if exist
                //only do this in pinterest button exist
                if (!IsPinterestPluginExist()) {
                    hoverBtnDoms[2].outerHTML = "";
                }

            } catch (e) {

            }
        } else {

            if (tempEl) {
                tempEl.classList.add("inReadmoreDivImage");
            }

        }

    }


}
/**
 * Created by ian on 26/07/2017.
 * global image function for controller other image effect
 */


var G_imageWidgetWrapperSelector = "span.imageWidgetWrapper";


var G_galleryOverlay_html_str = "<div class=\"galleryOverlay_hover image-galleryOverlay\" >\r\n  \r\n  <div class=\"galleryOverlay_hover_text image-galleryOverlay\">\r\n      <h2 class=\"galleryOverlay_title image-galleryOverlay\">\r\n      WARNING\r\n      </h2>\r\n\r\n      <span class=\"galleryOverlay_subtitle image-galleryOverlay\">\r\n\r\n    Graphic Imagery\r\n\r\n    </span>\r\n\r\n      <span class=\"galleryOverlay_button image-galleryOverlay\">\r\n\r\n      SHOW IMAGE\r\n        \r\n\r\n      </span>\r\n\r\n  </div>\r\n\r\n</div>";
var G_galleryOverlayMainClassName = ".image-galleryOverlay";
var G_galleryOverlayInitFinishClass = "image-galleryOverlay-initialized";


var G_imageSharing_html_str = "<div class=\"imageSharing_hover image-imageSharing\" >\r\n  \r\n  <div class=\"imageSharing_hover_text image-imageSharing\">\r\n\r\n      <div class=\"imageSharing_button pinterest image-imageSharing sharrre\" data-targetwebsite=\"pinterest\"> </div>\r\n\r\n <div class=\"imageSharing_button facebook image-imageSharing\" data-targetwebsite=\"facebook\"></div>\r\n\r\n <div class=\"imageSharing_button twitter image-imageSharing sharrre\" data-targetwebsite=\"twitter\"> </div>\r\n\r\n </div>\r\n\r\n</div>\r\n";

//sharing image default set in every img, so the Class name set as empty
var G_imageSharingMainDOMClassName = "";
var G_imageSharingRelativeDOMClassName = ".image-imageSharing";


var G_settimtoutID;


var G_imageWidgetClassList = ["clickable", "galleryOverlayImage"];

window.addEventListener('load', function() {


    addImageWidgetWrapper();


});

function modifyImageWidgetWrapper() {

    var selectedDoms = document.querySelectorAll(".imageWidgetWrapper");

    for (var i = 0; i < selectedDoms.length; i++) {

        var selectedDom = selectedDoms[i];


        if (is_userMobile && selectedDom.parents(".photobox_right").length > 0 && selectedDom.parents(".slideshow").length == 0) {
            //for handle the right/left margin in mobile version of image widget

            var OverLayImg = selectedDom.querySelector("img");


            //only image widget class need modify
            if (OverLayImg && containsAny(OverLayImg.className, G_imageWidgetClassList)) {

                selectedDom.style.width = parseInt(getComputedStyle(OverLayImg).width);

                selectedDom.style.marginTop = "0";
                selectedDom.style.marginRight = "auto";
                selectedDom.style.marginBottom = "0";
                selectedDom.style.marginLeft = "auto";


            }

        }



        //for galleryOverlayImage
        if (parseInt(getComputedStyle(selectedDom).width) <= 250) {

            var tempEl = selectedDom.querySelector(G_galleryOverlayMainClassName);
            if (tempEl) {
                tempEl.classList.add("smallImage");
            }

        }

        if (parseInt(getComputedStyle(selectedDom).width) < 150) {
            //decrease the button size while wrapper is less than 150

            var tempEl = selectedDom.querySelector(".galleryOverlay_button.smallImage");
            if (tempEl) {
                tempEl.style.width = "120px";
            }


        }


    }



}


function isValidImageTypeForAddWidget(dom) {

    if (dom.parents('.mnt_history').length) {
        //if img is adblock notice image , disable it
        return false;
    }

    if (dom.classList.contains("original")) {
        //if img is small preview image for related article or something, disable it.
        return false;
    }

    if (dom.parents('.author_signature').length) {
        //ignore author signature
        return false;
    }

    if (dom.parents('.mplace_wrapper').length) {
        //ignore author signature
        return false;
    }

    return true;

}

function addImageWidgetWrapper() {

    var selectedDoms = document.querySelectorAll(".article_body img, #factoids img");

    if (selectedDoms.length > 0) {

        for (var i = 0; i < selectedDoms.length; i++) {

            var selectedDom = selectedDoms[i];

            if (!isValidImageTypeForAddWidget(selectedDom)) {
                continue;
            }


            //add wrapper for every img for now, because each img will get default sharing widget for now
            if (!selectedDom.parentElement.matches(G_imageWidgetWrapperSelector)) {

                var originNext = selectedDom.nextElementSibling;

                if (originNext && originNext.tagName == 'BR') {

                    try {

                        originNext.classList.add('content_image');

                    } catch (e) {

                        console.log("no br in the photobox");
                    }


                }


                //wrap with new span if the  parent element not exist

                var wrapper = document.createElement('span');
                wrapper.className = "imageWidgetWrapper";

                if (selectedDom.classList.contains('galleryOverlayImage')) {
                    wrapper.style.overflow = "hidden";
                }


                selectedDom.parentNode.insertBefore(wrapper, selectedDom);
                wrapper.appendChild(selectedDom);

            }


        }

        //after last target dom be updated
        //load sharing image
        initImageSharingEffect(false);


    }

    if (document.querySelectorAll("img.clickable").length) {

        loadScript("/structure/javascript/image_clickable_effect.js", {}, function() {

            //remove redundancy clickable DOM
            var article_body = document.querySelectorAll(".article_body");

            if (article_body.length > 0) {

                var tempEL;
                var el = document.querySelectorAll(".clickable_icon");

                for (var i = 0; i < el.length; i++) {

                    tempEL = el[i];

                    //remove redundancy clickable DOM
                    tempEL.parentNode.removeChild(tempEL);


                }


                el = document.querySelectorAll(".clickable_hover");

                for (i = 0; i < el.length; i++) {

                    tempEL = el[i];

                    //remove redundancy clickable DOM
                    tempEL.parentNode.removeChild(tempEL);


                }


                el = document.querySelectorAll(".hover_text");

                for (i = 0; i < el.length; i++) {

                    tempEL = el[i];

                    //remove redundancy clickable DOM
                    tempEL.parentNode.removeChild(tempEL);

                }


                //console.log('window load start to init clickable');

                initClickableEffect(false);

            }

        })

    }

}

function containsAny(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
        var substring = substrings[i];
        if (str.indexOf(substring) != -1) {
            return substring;
        }
    }
    return null;
}




function shortUrlToFullUrl(Url) {


    var prefixHttp = 'http://';
    var prefixHttps = 'https://';


    try {

        if (Url.includes(prefixHttp) == false && Url.includes(prefixHttps) == false) {

            //remove redundancy "content" in factoids image url path
            Url = Url.replace("/content", "");

            Url = prefixHttps + window.location.hostname + "/content" + Url;
        }

    } catch (e) {

        console.log(e);
    }

    return Url;

}



function getClosestParentBySelector(elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
}


function IsPinterestPluginExist() {

    var pin = document.querySelector('body > span[style*="8675309"][style*="rgb(189, 8, 28)"]');


    return !(pin === null);

}


Element.prototype.parents = function(selector) {
    var elements = [];
    var elem = this;
    var ishaveselector = selector !== undefined;

    while ((elem = elem.parentElement) !== null) {
        if (elem.nodeType !== Node.ELEMENT_NODE) {
            continue;
        }

        if (!ishaveselector || elem.matches(selector)) {
            elements.push(elem);
        }
    }

    return elements;
};


// Sticky Menu

var initial = 1;
var scrollUpPosition = 0;

$(function() {
    // get initial top offset of navigation
    var floating_navigation_offset_top = 530;
    var scrollup_trigger = 400;

    // define the floating navigation function
    var floating_navigation = function() {

        // current vertical position from the top
        var scroll_top = $(window).scrollTop();

        //if the user scrolls too fast
        if (lastScrollTop - scroll_top > 1000 && scroll_top == "0") {

            hideNotifyBox();
            $("#navigation_scroll").removeClass("show_scroll_nav");
            $(".about_nav_scroll").removeClass("show_scroll_nav");
        }

        // if scrolled more than the navigation:
        var htmlclass = $('html').attr('class');
        //if (scroll_top > floating_navigation_offset_top&&(lastScrollTop<scroll_top)) {
        if (scroll_top > floating_navigation_offset_top && ((lastScrollTop < scroll_top) || initial)) {

            if (initial) {
                initial = 0;
            }
            // Scroll down, show mini-menu


            $("#navigation_scroll").show().addClass("show_scroll_nav");
            $(".about_nav_scroll").show().addClass("show_scroll_nav");


            scrollUpPosition = 0;


        } else {

            //Only trigger when its scroll up and less than trigger waypoint            
            if (lastScrollTop > scroll_top && (scroll_top < scrollup_trigger) && lastScrollTop > 0) {
                //Hide the navigation
                $("#navigation_scroll").removeClass("show_scroll_nav");
                $(".about_nav_scroll").removeClass("show_scroll_nav");
                hideNotifyBox();

            }

        }
        //Save last scroll
        lastScrollTop = $(window).scrollTop();
    };


    //if($(window).width()>490&&!navigator.userAgent.match(/MSIE\s(?!9.0)/)){
    if (!is_userMobile && !navigator.userAgent.match(/MSIE\s(?!9.0)/)) {
        // run function on load
        floating_navigation();
    }

    // run function every time you scroll
    //Save the last scroll top 
    var lastScrollTop = 0;

    $(window).scroll(function() {
        floating_navigation();
    });
});


$(window).resize(function() {
    var waypointMinus = 79; //for 1 line
    //Check to see the scroll menu position

    if ($(window).width() >= 490 && !navigator.userAgent.match(/MSIE\s(?!9.0)/)) {

        if ($(window).scrollTop() < 330 && $('#navigation_scroll').length > 0) {

            if ($('#navigation_scroll').offset().top == "0") {
                $("#navigation_scroll").removeClass("show_scroll_nav");
                hideNotifyBox();
            }
        }
    }

}).resize();

function hideNotifyBox() {

    if ($("#navigation_scroll .js-show-notifications").hasClass("active")) {

        $("#navigation_scroll .js-show-notifications").removeClass("active");
    }


    if ($(".personalise").hasClass("hover")) {

        $(".personalise").removeClass("hover");
    }
}


$(document).ready(function() {
    //Only check on new menu
    if (glob_newSkin && is_userMobile && !glob_responsiveOverride) {

        //When menu click, we need to expand the menu 
        var topHeadingBlock = $(".topic_headings");
        $(".topic_headings >li > span").click(function(event) {
            event.preventDefault();

            // if it already has active class, that means we only need to close it up
            if ($(this).parent().hasClass("active")) {
                topHeadingBlock.children("li.active").children("ul").hide();
                $(this).parent().removeClass("active");

                $(this).find("i").removeClass("fa-chevron-up");
                $(this).find("i").addClass("fa-chevron-down");

            } else {
                //Slide up previous tab
                topHeadingBlock.children("li.active").children("ul").hide();
                //Remove previous tab active 
                topHeadingBlock.children("li.active").children("span").find("i").removeClass("fa-chevron-up");
                topHeadingBlock.children("li.active").children("span").find("i").addClass("fa-chevron-down");
                topHeadingBlock.children("li.active").removeClass("active");



                $(this).parent().addClass("active").children("ul").css({
                    "display": "block"
                });
                $(this).find("i").removeClass("fa-chevron-down");
                $(this).find("i").addClass("fa-chevron-up");

            }

            //Calculate current height
            var menuContainerHeight = $(".topic_headings").height() + $(".menu_cta_container").height();

            var windowHeight = screen.height;
            var navigationHeight = $("#navigation").outerHeight();

            minMenuHeight = windowHeight - navigationHeight;


            $("#navigation .topics").css({
                "max-height": minMenuHeight
            });

            $("#navigation .menu_cta_container").css({
                "top": $("#navigation .topic_headings").height() + 38
            });



        });

    }


});

/*
	AUTHOR: Osvaldas Valutis, www.osvaldas.info
*/



;
(function(e, t, n, r) {
    e.fn.doubleTapToGo = function(r) {
        if (!("ontouchstart" in t) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;
        this.each(function() {
            var t = false;
            e(this).on("click", function(n) {
                var r = e(this);
                if (r[0] != t[0]) {
                    n.preventDefault();
                    t = r
                }
            });
            e(n).on("click touchstart MSPointerDown", function(n) {
                var r = true,
                    i = e(n.target).parents();
                for (var s = 0; s < i.length; s++)
                    if (i[s] == t[0]) r = false;
                if (r) t = false
            })
        });
        return this
    }
})(jQuery, window, document);
$(function() { /*User Mobile hover effect in full site.*/ /*$(".personalise").doubleTapToGo();*/
    $(".doubletap_actions").doubleTapToGo(); /*$(".menu_right").find("li .drop").each(function(i) {$(this).doubleTapToGo();});*/
});