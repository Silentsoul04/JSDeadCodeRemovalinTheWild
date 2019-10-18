if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {} : t(e)
  }("undefined" != typeof window ? window : this, function(e, t) {
    var i = [],
      n = i.slice,
      s = i.concat,
      o = i.push,
      a = i.indexOf,
      r = {},
      l = r.toString,
      d = r.hasOwnProperty,
      c = {},
      u = "1.11.3",
      p = function(e, t) {
        return new p.fn.init(e, t)
      },
      h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      f = /^-ms-/,
      v = /-([\da-z])/gi,
      m = function(e, t) {
        return t.toUpperCase()
      };

    function g(e) {
      var t = "length" in e && e.length,
        i = p.type(e);
      return "function" !== i && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    p.fn = p.prototype = {
      jquery: u,
      constructor: p,
      selector: "",
      length: 0,
      toArray: function() {},
      get: function(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : n.call(this)
      },
      pushStack: function(e) {
        var t = p.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e, t) {
        return p.each(this, e, t)
      },
      map: function(e) {
        return this.pushStack(p.map(this, function(t, i) {
          return e.call(t, i, t)
        }))
      },
      slice: function() {},
      first: function() {
        return this.eq(0)
      },
      last: function() {},
      eq: function(e) {
        var t = this.length,
          i = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= i && i < t ? [this[i]] : [])
      },
      end: function() {},
      push: o,
      sort: i.sort,
      splice: i.splice
    }, p.extend = p.fn.extend = function() {
      var e, t, i, n, s, o, a = arguments[0] || {},
        r = 1,
        l = arguments.length,
        d = !1;
      for ("boolean" == typeof a && (d = a, a = arguments[r] || {}, r++), "object" == typeof a || p.isFunction(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
        if (null != (s = arguments[r]))
          for (n in s) e = a[n], a !== (i = s[n]) && (d && i && (p.isPlainObject(i) || (t = p.isArray(i))) ? (t ? (t = !1, o = e && p.isArray(e) ? e : []) : o = e && p.isPlainObject(e) ? e : {}, a[n] = p.extend(d, o, i)) : void 0 !== i && (a[n] = i));
      return a
    }, p.extend({
      expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {},
      noop: function() {},
      isFunction: function(e) {
        return "function" === p.type(e)
      },
      isArray: Array.isArray || function(e) {},
      isWindow: function(e) {
        return null != e && e == e.window
      },
      isNumeric: function(e) {},
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      isPlainObject: function(e) {
        var t;
        if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
        try {
          if (e.constructor && !d.call(e, "constructor") && !d.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (e) {
          return !1
        }
        if (c.ownLast)
          for (t in e) return d.call(e, t);
        for (t in e);
        return void 0 === t || d.call(e, t)
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[l.call(e)] || "object" : typeof e
      },
      globalEval: function(t) {},
      camelCase: function(e) {
        return e.replace(f, "ms-").replace(v, m)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, i) {
        var n = 0,
          s = e.length,
          o = g(e);
        if (i) {
          if (o)
            for (; n < s && !1 !== t.apply(e[n], i); n++);
          else
            for (n in e)
              if (!1 === t.apply(e[n], i)) break
        } else if (o)
          for (; n < s && !1 !== t.call(e[n], n, e[n]); n++);
        else
          for (n in e)
            if (!1 === t.call(e[n], n, e[n])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(h, "")
      },
      makeArray: function(e, t) {
        var i = t || [];
        return null != e && (g(Object(e)) ? p.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)), i
      },
      inArray: function(e, t, i) {
        var n;
        if (t) {
          if (a) return a.call(t, e, i);
          for (n = t.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
            if (i in t && t[i] === e) return i
        }
        return -1
      },
      merge: function(e, t) {
        for (var i = +t.length, n = 0, s = e.length; n < i;) e[s++] = t[n++];
        if (i != i)
          for (; void 0 !== t[n];) e[s++] = t[n++];
        return e.length = s, e
      },
      grep: function(e, t, i) {},
      map: function(e, t, i) {
        var n, o = 0,
          a = e.length,
          r = [];
        if (g(e))
          for (; o < a; o++) null != (n = t(e[o], o, i)) && r.push(n);
        else
          for (o in e) null != (n = t(e[o], o, i)) && r.push(n);
        return s.apply([], r)
      },
      guid: 1,
      proxy: function(e, t) {},
      now: function() {
        return +new Date
      },
      support: c
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      r["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
      var t, i, n, s, o, a, r, l, d, c, u, p, h, f, v, m, g, y, b, w = "sizzle" + 1 * new Date,
        T = e.document,
        x = 0,
        S = 0,
        C = oe(),
        k = oe(),
        E = oe(),
        $ = function(e, t) {
          return e === t && (u = !0), 0
        },
        _ = {}.hasOwnProperty,
        M = [],
        N = M.pop,
        A = M.push,
        L = M.push,
        D = M.slice,
        z = function(e, t) {},
        I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        j = O.replace("w", "w#"),
        H = "\\[" + P + "*(" + O + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + P + "*\\]",
        B = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
        R = new RegExp(P + "+", "g"),
        F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        W = new RegExp("^" + P + "*," + P + "*"),
        q = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
        G = new RegExp(B),
        Y = new RegExp("^" + j + "$"),
        U = {
          ID: new RegExp("^#(" + O + ")"),
          CLASS: new RegExp("^\\.(" + O + ")"),
          TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + H),
          PSEUDO: new RegExp("^" + B),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + I + ")$", "i"),
          needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        },
        V = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        ee = /'|\\/g,
        te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        ie = function(e, t, i) {},
        ne = function() {};
      try {
        L.apply(M = D.call(T.childNodes), T.childNodes), M[T.childNodes.length].nodeType
      } catch (t) {
        L = {
          apply: M.length ? function(e, t) {} : function(e, t) {}
        }
      }

      function se(e, t, n, s) {
        var o, r, d, c, u, f, g, y, x, S;
        if ((t ? t.ownerDocument || t : T) !== h && p(t), n = n || [], c = (t = t || h).nodeType, "string" != typeof e || !e || 1 !== c && 9 !== c && 11 !== c) return n;
        if (!s && v) {
          if (11 !== c && (o = Z.exec(e)))
            if (d = o[1]) {
              if (9 === c) {
                if (!(r = t.getElementById(d)) || !r.parentNode) return n;
                if (r.id === d) return n.push(r), n
              } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(d)) && b(t, r) && r.id === d) return n.push(r), n
            } else {
              if (o[2]) return L.apply(n, t.getElementsByTagName(e)), n;
              if ((d = o[3]) && i.getElementsByClassName) return L.apply(n, t.getElementsByClassName(d)), n
            } if (i.qsa && (!m || !m.test(e))) {
            if (y = g = w, x = t, S = 1 !== c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
              for (f = a(e), (g = t.getAttribute("id")) ? y = g.replace(ee, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", u = f.length; u--;) f[u] = y + ve(f[u]);
              x = K.test(e) && he(t.parentNode) || t, S = f.join(",")
            }
            if (S) try {
              return L.apply(n, x.querySelectorAll(S)), n
            } catch (e) {} finally {
              g || t.removeAttribute("id")
            }
          }
        }
        return l(e.replace(F, "$1"), t, n, s)
      }

      function oe() {
        var e = [];
        return function t(i, s) {
          return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = s
        }
      }

      function ae(e) {
        return e[w] = !0, e
      }

      function re(e) {
        var t = h.createElement("div");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function le(e, t) {}

      function de(e, t) {}

      function ce(e) {
        return function(t) {}
      }

      function ue(e) {
        return function(t) {}
      }

      function pe(e) {
        return ae(function(t) {
          return t = +t, ae(function(i, n) {
            for (var s, o = e([], i.length, t), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
          })
        })
      }

      function he(e) {}
      for (t in i = se.support = {}, o = se.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, p = se.setDocument = function(e) {
          var t, s, a = e ? e.ownerDocument || e : T;
          return a !== h && 9 === a.nodeType && a.documentElement ? (f = (h = a).documentElement, (s = a.defaultView) && s !== s.top && (s.addEventListener ? s.addEventListener("unload", ne, !1) : s.attachEvent && s.attachEvent("onunload", ne)), v = !o(a), i.attributes = re(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), i.getElementsByTagName = re(function(e) {
            return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length
          }), i.getElementsByClassName = J.test(a.getElementsByClassName), i.getById = re(function(e) {
            return f.appendChild(e).id = w, !a.getElementsByName || !a.getElementsByName(w).length
          }), i.getById ? (n.find.ID = function(e, t) {}, n.filter.ID = function(e) {}) : (delete n.find.ID, n.filter.ID = function(e) {}), n.find.TAG = i.getElementsByTagName ? function(e, t) {} : function(e, t) {}, n.find.CLASS = i.getElementsByClassName && function(e, t) {}, g = [], m = [], (i.qsa = J.test(a.querySelectorAll)) && (re(function(e) {
            f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
          }), re(function(e) {
            var t = a.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
          })), (i.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && re(function(e) {
            i.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", B)
          }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(f.compareDocumentPosition), b = t || J.test(f.contains) ? function(e, t) {
            var i = 9 === e.nodeType ? e.documentElement : e,
              n = t && t.parentNode;
            return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
          } : function(e, t) {}, $ = t ? function(e, t) {} : function(e, t) {}, a) : h
        }, se.matches = function(e, t) {}, se.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== h && p(e), t = t.replace(X, "='$1']"), !(!i.matchesSelector || !v || g && g.test(t) || m && m.test(t))) try {
            var n = y.call(e, t);
            if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
          } catch (e) {}
          return 0 < se(t, h, null, [e]).length
        }, se.contains = function(e, t) {
          return (e.ownerDocument || e) !== h && p(e), b(e, t)
        }, se.attr = function(e, t) {
          (e.ownerDocument || e) !== h && p(e);
          var s = n.attrHandle[t.toLowerCase()],
            o = s && _.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !v) : void 0;
          return void 0 !== o ? o : i.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, se.error = function(e) {}, se.uniqueSort = function(e) {}, s = se.getText = function(e) {}, (n = se.selectors = {
          cacheLength: 50,
          createPseudo: ae,
          match: U,
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
            ATTR: function(e) {},
            CHILD: function(e) {},
            PSEUDO: function(e) {
              var t, i = !e[6] && e[2];
              return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && G.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(te, ie).toLowerCase();
              return "*" === e ? function() {} : function(e) {}
            },
            CLASS: function(e) {
              var t = C[e + " "];
              return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && C(e, function(e) {})
            },
            ATTR: function(e, t, i) {},
            CHILD: function(e, t, i, n, s) {},
            PSEUDO: function(e, t) {
              var i, s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
              return s[w] ? s(t) : 1 < s.length ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, i) {}) : function(e) {}) : s
            }
          },
          pseudos: {
            not: ae(function(e) {}),
            has: ae(function(e) {}),
            contains: ae(function(e) {}),
            lang: ae(function(e) {}),
            target: function(t) {},
            root: function(e) {},
            focus: function(e) {},
            enabled: function(e) {},
            disabled: function(e) {},
            checked: function(e) {},
            selected: function(e) {},
            empty: function(e) {},
            parent: function(e) {},
            header: function(e) {},
            input: function(e) {},
            button: function(e) {},
            text: function(e) {},
            first: pe(function() {}),
            last: pe(function(e, t) {
              return [t - 1]
            }),
            eq: pe(function(e, t, i) {}),
            even: pe(function(e, t) {}),
            odd: pe(function(e, t) {}),
            lt: pe(function(e, t, i) {}),
            gt: pe(function(e, t, i) {})
          }
        }).pseudos.nth = n.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) n.pseudos[t] = ce(t);
      for (t in {
          submit: !0,
          reset: !0
        }) n.pseudos[t] = ue(t);

      function fe() {}

      function ve(e) {
        for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
        return n
      }

      function me(e, t, i) {
        var n = t.dir,
          s = i && "parentNode" === n,
          o = S++;
        return t.first ? function(t, i, o) {} : function(t, i, a) {}
      }

      function ge(e) {
        return 1 < e.length ? function(t, i, n) {} : e[0]
      }

      function ye(e, t, i, n, s) {
        for (var o, a = [], r = 0, l = e.length, d = null != t; r < l; r++)(o = e[r]) && (!i || i(o, n, s)) && (a.push(o), d && t.push(r));
        return a
      }

      function be(e, t, i, n, s, o) {
        return n && !n[w] && (n = be(n)), s && !s[w] && (s = be(s, o)), ae(function(o, a, r, l) {
          var d, c, u, p = [],
            h = [],
            f = a.length,
            v = o || function(e, t, i) {
              for (var n = 0, s = t.length; n < s; n++) se(e, t[n], i);
              return i
            }(t || "*", r.nodeType ? [r] : r, []),
            m = !e || !o && t ? v : ye(v, p, e, r, l),
            g = i ? s || (o ? e : f || n) ? [] : a : m;
          if (i && i(m, g, r, l), n)
            for (d = ye(g, h), n(d, [], r, l), c = d.length; c--;)(u = d[c]) && (g[h[c]] = !(m[h[c]] = u));
          if (o) {
            if (s || e) {
              if (s) {
                for (d = [], c = g.length; c--;)(u = g[c]) && d.push(m[c] = u);
                s(null, g = [], d, l)
              }
              for (c = g.length; c--;)(u = g[c]) && -1 < (d = s ? z(o, u) : p[c]) && (o[d] = !(a[d] = u))
            }
          } else g = ye(g === a ? g.splice(f, g.length) : g), s ? s(null, a, g, l) : L.apply(a, g)
        })
      }

      function we(e) {
        for (var t, i, s, o = e.length, a = n.relative[e[0].type], r = a || n.relative[" "], l = a ? 1 : 0, c = me(function(e) {}, r, !0), u = me(function(e) {}, r, !0), p = [function(e, i, n) {}]; l < o; l++)
          if (i = n.relative[e[l].type]) p = [me(ge(p), i)];
          else {
            if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (s = ++l; s < o && !n.relative[e[s].type]; s++);
              return be(1 < l && ge(p), 1 < l && ve(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(F, "$1"), i, l < s && we(e.slice(l, s)), s < o && we(e = e.slice(s)), s < o && ve(e))
            }
            p.push(i)
          } return ge(p)
      }
      return fe.prototype = n.filters = n.pseudos, n.setFilters = new fe, a = se.tokenize = function(e, t) {
        var i, s, o, a, r, l, d, c = k[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (r = e, l = [], d = n.preFilter; r;) {
          for (a in (!i || (s = W.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), i = !1, (s = q.exec(r)) && (i = s.shift(), o.push({
              value: i,
              type: s[0].replace(F, " ")
            }), r = r.slice(i.length)), n.filter) !(s = U[a].exec(r)) || d[a] && !(s = d[a](s)) || (i = s.shift(), o.push({
            value: i,
            type: a,
            matches: s
          }), r = r.slice(i.length));
          if (!i) break
        }
        return t ? r.length : r ? se.error(e) : k(e, l).slice(0)
      }, r = se.compile = function(e, t) {
        var i, s, o, r, l, c, u = [],
          p = [],
          f = E[e + " "];
        if (!f) {
          for (t || (t = a(e)), i = t.length; i--;)(f = we(t[i]))[w] ? u.push(f) : p.push(f);
          (f = E(e, (s = p, r = 0 < (o = u).length, l = 0 < s.length, c = function(e, t, i, a, c) {
            var u, p, f, v = 0,
              m = "0",
              g = e && [],
              y = [],
              b = d,
              w = e || l && n.find.TAG("*", c),
              T = x += null == b ? 1 : Math.random() || .1,
              S = w.length;
            for (c && (d = t !== h && t); m !== S && null != (u = w[m]); m++) {
              if (l && u) {
                for (p = 0; f = s[p++];)
                  if (f(u, t, i)) {
                    a.push(u);
                    break
                  } c && (x = T)
              }
              r && ((u = !f && u) && v--, e && g.push(u))
            }
            if (v += m, r && m !== v) {
              for (p = 0; f = o[p++];) f(g, y, t, i);
              if (e) {
                if (0 < v)
                  for (; m--;) g[m] || y[m] || (y[m] = N.call(a));
                y = ye(y)
              }
              L.apply(a, y), c && !e && 0 < y.length && 1 < v + o.length && se.uniqueSort(a)
            }
            return c && (x = T, d = b), g
          }, r ? ae(c) : c))).selector = e
        }
        return f
      }, l = se.select = function(e, t, s, o) {
        var l, d, c, u, p, h = "function" == typeof e && e,
          f = !o && a(e = h.selector || e);
        if (s = s || [], 1 === f.length) {
          if (2 < (d = f[0] = f[0].slice(0)).length && "ID" === (c = d[0]).type && i.getById && 9 === t.nodeType && v && n.relative[d[1].type]) {
            if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return s;
            h && (t = t.parentNode), e = e.slice(d.shift().value.length)
          }
          for (l = U.needsContext.test(e) ? 0 : d.length; l-- && (c = d[l], !n.relative[u = c.type]);)
            if ((p = n.find[u]) && (o = p(c.matches[0].replace(te, ie), K.test(d[0].type) && he(t.parentNode) || t))) {
              if (d.splice(l, 1), !(e = o.length && ve(d))) return L.apply(s, o), s;
              break
            }
        }
        return (h || r(e, f))(o, t, !v, s, K.test(e) && he(t.parentNode) || t), s
      }, i.sortStable = w.split("").sort($).join("") === w, i.detectDuplicates = !!u, p(), i.sortDetached = re(function(e) {
        return 1 & e.compareDocumentPosition(h.createElement("div"))
      }), re(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || le("type|href|height|width", function(e, t, i) {}), i.attributes && re(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || le("value", function(e, t, i) {}), re(function(e) {
        return null == e.getAttribute("disabled")
      }) || le(I, function(e, t, i) {}), se
    }(e);
    p.find = y, p.expr = y.selectors, p.expr[":"] = p.expr.pseudos, p.unique = y.uniqueSort, p.text = y.getText, p.isXMLDoc = y.isXML, p.contains = y.contains;
    var b = p.expr.match.needsContext,
      w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      T = /^.[^:#\[\.,]*$/;

    function x(e, t, i) {
      if (p.isFunction(t)) return p.grep(e, function(e, n) {});
      if (t.nodeType) return p.grep(e, function(e) {});
      if ("string" == typeof t) {
        if (T.test(t)) return p.filter(t, e, i);
        t = p.filter(t, e)
      }
      return p.grep(e, function(e) {})
    }
    p.filter = function(e, t, i) {
      var n = t[0];
      return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? p.find.matchesSelector(n, e) ? [n] : [] : p.find.matches(e, p.grep(t, function(e) {}))
    }, p.fn.extend({
      find: function(e) {
        var t, i = [],
          n = this,
          s = n.length;
        if ("string" != typeof e) return this.pushStack(p(e).filter(function() {}));
        for (t = 0; t < s; t++) p.find(e, n[t], i);
        return (i = this.pushStack(1 < s ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
      },
      filter: function(e) {
        return this.pushStack(x(this, e || [], !1))
      },
      not: function(e) {},
      is: function(e) {}
    });
    var S, C = e.document,
      k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(e, t) {
      var i, n;
      if (!e) return this;
      if ("string" == typeof e) {
        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : k.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || S).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(i[1]) && p.isPlainObject(t))
            for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        if ((n = C.getElementById(i[2])) && n.parentNode) {
          if (n.id !== i[2]) return S.find(e);
          this.length = 1, this[0] = n
        }
        return this.context = C, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== S.ready ? S.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    }).prototype = p.fn, S = p(C);
    var E = /^(?:parents|prev(?:Until|All))/,
      $ = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function _(e, t) {}
    p.extend({
      dir: function(e, t, i) {},
      sibling: function(e, t) {}
    }), p.fn.extend({
      has: function(e) {},
      closest: function(e, t) {},
      index: function(e) {},
      add: function(e, t) {},
      addBack: function(e) {}
    }), p.each({
      parent: function(e) {},
      parents: function(e) {},
      parentsUntil: function(e, t, i) {},
      next: function(e) {},
      prev: function(e) {},
      nextAll: function(e) {},
      prevAll: function(e) {},
      nextUntil: function(e, t, i) {},
      prevUntil: function(e, t, i) {},
      siblings: function(e) {},
      children: function(e) {},
      contents: function(e) {
        return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
      }
    }, function(e, t) {
      p.fn[e] = function(i, n) {
        var s = p.map(this, t, i);
        return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = p.filter(n, s)), 1 < this.length && ($[e] || (s = p.unique(s)), E.test(e) && (s = s.reverse())), this.pushStack(s)
      }
    });
    var M, N = /\S+/g,
      A = {};

    function L() {
      C.addEventListener ? (C.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (C.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
    }

    function D() {
      (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (L(), p.ready())
    }
    p.Callbacks = function(e) {
      var t, i;
      e = "string" == typeof e ? A[e] || (i = A[t = e] = {}, p.each(t.match(N) || [], function(e, t) {
        i[t] = !0
      }), i) : p.extend({}, e);
      var n, s, o, a, r, l, d = [],
        c = !e.once && [],
        u = function(t) {
          for (s = e.memory && t, o = !0, r = l || 0, l = 0, a = d.length, n = !0; d && r < a; r++)
            if (!1 === d[r].apply(t[0], t[1]) && e.stopOnFalse) {
              s = !1;
              break
            } n = !1, d && (c ? c.length && u(c.shift()) : s ? d = [] : h.disable())
        },
        h = {
          add: function() {
            if (d) {
              var t = d.length;
              ! function t(i) {
                p.each(i, function(i, n) {
                  var s = p.type(n);
                  "function" === s ? e.unique && h.has(n) || d.push(n) : n && n.length && "string" !== s && t(n)
                })
              }(arguments), n ? a = d.length : s && (l = t, u(s))
            }
            return this
          },
          remove: function() {},
          has: function(e) {},
          empty: function() {},
          disable: function() {
            return d = c = s = void 0, this
          },
          disabled: function() {},
          lock: function() {
            return c = void 0, s || h.disable(), this
          },
          locked: function() {},
          fireWith: function(e, t) {
            return !d || o && !c || (t = [e, (t = t || []).slice ? t.slice() : t], n ? c.push(t) : u(t)), this
          },
          fire: function() {},
          fired: function() {}
        };
      return h
    }, p.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")]
          ],
          i = "pending",
          n = {
            state: function() {},
            always: function() {
              return s.done(arguments).fail(arguments), this
            },
            then: function() {},
            promise: function(e) {
              return null != e ? p.extend(e, n) : n
            }
          },
          s = {};
        return n.pipe = n.then, p.each(t, function(e, o) {
          var a = o[2],
            r = o[3];
          n[o[1]] = a.add, r && a.add(function() {
            i = r
          }, t[1 ^ e][2].disable, t[2][2].lock), s[o[0]] = function() {}, s[o[0] + "With"] = a.fireWith
        }), n.promise(s), e && e.call(s, s), s
      },
      when: function(e) {}
    }), p.fn.ready = function(e) {
      return p.ready.promise().done(e), this
    }, p.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {},
      ready: function(e) {
        if (!0 === e ? !--p.readyWait : !p.isReady) {
          if (!C.body) return setTimeout(p.ready);
          (p.isReady = !0) !== e && 0 < --p.readyWait || (M.resolveWith(C, [p]), p.fn.triggerHandler && (p(C).triggerHandler("ready"), p(C).off("ready")))
        }
      }
    }), p.ready.promise = function(t) {
      if (!M)
        if (M = p.Deferred(), "complete" === C.readyState) setTimeout(p.ready);
        else if (C.addEventListener) C.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
      else {
        C.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
        var i = !1;
        try {
          i = null == e.frameElement && C.documentElement
        } catch (t) {}
        i && i.doScroll && function e() {}()
      }
      return M.promise(t)
    };
    var z, I = "undefined";
    for (z in p(c)) break;
    c.ownLast = "0" !== z, c.inlineBlockNeedsLayout = !1, p(function() {
        var e, t, i, n;
        (i = C.getElementsByTagName("body")[0]) && i.style && (t = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== I && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
      }),
      function() {
        var e = C.createElement("div");
        if (null == c.deleteExpando) {
          c.deleteExpando = !0;
          try {
            delete e.test
          } catch (e) {
            c.deleteExpando = !1
          }
        }
        e = null
      }(), p.acceptData = function(e) {
        var t = p.noData[(e.nodeName + " ").toLowerCase()],
          i = +e.nodeType || 1;
        return (1 === i || 9 === i) && (!t || !0 !== t && e.getAttribute("classid") === t)
      };
    var P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

    function j(e, t, i) {
      if (void 0 === i && 1 === e.nodeType) {
        var n = "data-" + t.replace(O, "-$1").toLowerCase();
        if ("string" == typeof(i = e.getAttribute(n))) {
          try {
            i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : P.test(i) ? p.parseJSON(i) : i)
          } catch (e) {}
          p.data(e, t, i)
        } else i = void 0
      }
      return i
    }

    function H(e) {
      var t;
      for (t in e)
        if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
      return !0
    }

    function B(e, t, n, s) {
      if (p.acceptData(e)) {
        var o, a, r = p.expando,
          l = e.nodeType,
          d = l ? p.cache : e,
          c = l ? e[r] : e[r] && r;
        if (c && d[c] && (s || d[c].data) || void 0 !== n || "string" != typeof t) return c || (c = l ? e[r] = i.pop() || p.guid++ : r), d[c] || (d[c] = l ? {} : {
          toJSON: p.noop
        }), ("object" == typeof t || "function" == typeof t) && (s ? d[c] = p.extend(d[c], t) : d[c].data = p.extend(d[c].data, t)), a = d[c], s || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[p.camelCase(t)] = n), "string" == typeof t ? null == (o = a[t]) && (o = a[p.camelCase(t)]) : o = a, o
      }
    }

    function R(e, t, i) {}
    p.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(e) {
        return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !H(e)
      },
      data: function(e, t, i) {
        return B(e, t, i)
      },
      removeData: function(e, t) {},
      _data: function(e, t, i) {
        return B(e, t, i, !0)
      },
      _removeData: function(e, t) {}
    }), p.fn.extend({
      data: function(e, t) {
        var i, n, s, o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (this.length && (s = p.data(o), 1 === o.nodeType && !p._data(o, "parsedAttrs"))) {
            for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && j(o, n = p.camelCase(n.slice(5)), s[n]);
            p._data(o, "parsedAttrs", !0)
          }
          return s
        }
        return "object" == typeof e ? this.each(function() {}) : 1 < arguments.length ? this.each(function() {
          p.data(this, e, t)
        }) : o ? j(o, e, p.data(o, e)) : void 0
      },
      removeData: function(e) {}
    }), p.extend({
      queue: function(e, t, i) {},
      dequeue: function(e, t) {},
      _queueHooks: function(e, t) {}
    }), p.fn.extend({
      queue: function(e, t) {},
      dequeue: function(e) {},
      clearQueue: function(e) {},
      promise: function(e, t) {}
    });
    var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      W = ["Top", "Right", "Bottom", "Left"],
      q = function(e, t) {},
      X = p.access = function(e, t, i, n, s, o, a) {
        var r = 0,
          l = e.length,
          d = null == i;
        if ("object" === p.type(i))
          for (r in s = !0, i) p.access(e, t, r, i[r], !0, o, a);
        else if (void 0 !== n && (s = !0, p.isFunction(n) || (a = !0), d && (a ? (t.call(e, n), t = null) : (d = t, t = function(e, t, i) {})), t))
          for (; r < l; r++) t(e[r], i, a ? n : n.call(e[r], r, t(e[r], i)));
        return s ? e : d ? t.call(e) : l ? t(e[0], i) : o
      },
      G = /^(?:checkbox|radio)$/i;
    ! function() {
      var e = C.createElement("input"),
        t = C.createElement("div"),
        i = C.createDocumentFragment();
      if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), c.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {}), t.cloneNode(!0).click()), null == c.deleteExpando) {
        c.deleteExpando = !0;
        try {
          delete t.test
        } catch (e) {
          c.deleteExpando = !1
        }
      }
    }(),
    function() {
      var t, i, n = C.createElement("div");
      for (t in {
          submit: !0,
          change: !0,
          focusin: !0
        }) i = "on" + t, (c[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), c[t + "Bubbles"] = !1 === n.attributes[i].expando);
      n = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
      U = /^key/,
      V = /^(?:mouse|pointer|contextmenu)|click/,
      Q = /^(?:focusinfocus|focusoutblur)$/,
      J = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {}

    function K() {
      return !1
    }

    function ee() {}

    function te(e) {
      var t = ie.split("|"),
        i = e.createDocumentFragment();
      if (i.createElement)
        for (; t.length;) i.createElement(t.pop());
      return i
    }
    p.event = {
      global: {},
      add: function(e, t, i, n, s) {
        var o, a, r, l, d, c, u, h, f, v, m, g = p._data(e);
        if (g) {
          for (i.handler && (i = (l = i).handler, s = l.selector), i.guid || (i.guid = p.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
              return typeof p === I || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(c.elem, arguments)
            }).elem = e), r = (t = (t || "").match(N) || [""]).length; r--;) f = m = (o = J.exec(t[r]) || [])[1], v = (o[2] || "").split(".").sort(), f && (d = p.event.special[f] || {}, f = (s ? d.delegateType : d.bindType) || f, d = p.event.special[f] || {}, u = p.extend({
            type: f,
            origType: m,
            data: n,
            handler: i,
            guid: i.guid,
            selector: s,
            needsContext: s && p.expr.match.needsContext.test(s),
            namespace: v.join(".")
          }, l), (h = a[f]) || ((h = a[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, v, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), p.event.global[f] = !0);
          e = null
        }
      },
      remove: function(e, t, i, n, s) {
        var o, a, r, l, d, c, u, h, f, v, m, g = p.hasData(e) && p._data(e);
        if (g && (c = g.events)) {
          for (d = (t = (t || "").match(N) || [""]).length; d--;)
            if (f = m = (r = J.exec(t[d]) || [])[1], v = (r[2] || "").split(".").sort(), f) {
              for (u = p.event.special[f] || {}, h = c[f = (n ? u.delegateType : u.bindType) || f] || [], r = r[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !s && m !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, u.remove && u.remove.call(e, a));
              l && !h.length && (u.teardown && !1 !== u.teardown.call(e, v, g.handle) || p.removeEvent(e, f, g.handle), delete c[f])
            } else
              for (f in c) p.event.remove(e, f + t[d], i, n, !0);
          p.isEmptyObject(c) && (delete g.handle, p._removeData(e, "events"))
        }
      },
      trigger: function(t, i, n, s) {
        var o, a, r, l, c, u, h, f = [n || C],
          v = d.call(t, "type") ? t.type : t,
          m = d.call(t, "namespace") ? t.namespace.split(".") : [];
        if (r = u = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Q.test(v + p.event.triggered) && (0 <= v.indexOf(".") && (v = (m = v.split(".")).shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, (t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : p.makeArray(i, [t]), c = p.event.special[v] || {}, s || !c.trigger || !1 !== c.trigger.apply(n, i))) {
          if (!s && !c.noBubble && !p.isWindow(n)) {
            for (l = c.delegateType || v, Q.test(l + v) || (r = r.parentNode); r; r = r.parentNode) f.push(r), u = r;
            u === (n.ownerDocument || C) && f.push(u.defaultView || u.parentWindow || e)
          }
          for (h = 0;
            (r = f[h++]) && !t.isPropagationStopped();) t.type = 1 < h ? l : c.bindType || v, (o = (p._data(r, "events") || {})[t.type] && p._data(r, "handle")) && o.apply(r, i), (o = a && r[a]) && o.apply && p.acceptData(r) && (t.result = o.apply(r, i), !1 === t.result && t.preventDefault());
          if (t.type = v, !s && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(f.pop(), i)) && p.acceptData(n) && a && n[v] && !p.isWindow(n)) {
            (u = n[a]) && (n[a] = null), p.event.triggered = v;
            try {
              n[v]()
            } catch (t) {}
            p.event.triggered = void 0, u && (n[a] = u)
          }
          return t.result
        }
      },
      dispatch: function(e) {
        e = p.event.fix(e);
        var t, i, s, o, a, r = [],
          l = n.call(arguments),
          d = (p._data(this, "events") || {})[e.type] || [],
          c = p.event.special[e.type] || {};
        if ((l[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
          for (r = p.event.handlers.call(this, e, d), t = 0;
            (o = r[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = o.elem, a = 0;
              (s = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, void 0 !== (i = ((p.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var i, n, s, o, a = [],
          r = t.delegateCount,
          l = e.target;
        if (r && l.nodeType && (!e.button || "click" !== e.type))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (s = [], o = 0; o < r; o++) void 0 === s[i = (n = t[o]).selector + " "] && (s[i] = n.needsContext ? 0 <= p(i, this).index(l) : p.find(i, this, null, [l]).length), s[i] && s.push(n);
              s.length && a.push({
                elem: l,
                handlers: s
              })
            } return r < t.length && a.push({
          elem: this,
          handlers: t.slice(r)
        }), a
      },
      fix: function(e) {
        if (e[p.expando]) return e;
        var t, i, n, s = e.type,
          o = e,
          a = this.fixHooks[s];
        for (a || (this.fixHooks[s] = a = V.test(s) ? this.mouseHooks : U.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(o), t = n.length; t--;) e[i = n[t]] = o[i];
        return e.target || (e.target = o.srcElement || C), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {}
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {}
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {},
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {},
          delegateType: "focusout"
        },
        click: {
          trigger: function() {},
          _default: function(e) {}
        },
        beforeunload: {
          postDispatch: function(e) {}
        }
      },
      simulate: function(e, t, i, n) {}
    }, p.removeEvent = C.removeEventListener ? function(e, t, i) {} : function(e, t, i) {}, p.Event = function(e, t) {
      return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Z : K) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
      isDefaultPrevented: K,
      isPropagationStopped: K,
      isImmediatePropagationStopped: K,
      preventDefault: function() {},
      stopPropagation: function() {},
      stopImmediatePropagation: function() {}
    }, p.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      p.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {}
      }
    }), c.submitBubbles || (p.event.special.submit = {
      setup: function() {},
      postDispatch: function(e) {},
      teardown: function() {}
    }), c.changeBubbles || (p.event.special.change = {
      setup: function() {},
      handle: function(e) {},
      teardown: function() {}
    }), c.focusinBubbles || p.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var i = function(e) {};
      p.event.special[t] = {
        setup: function() {
          var n = this.ownerDocument || this,
            s = p._data(n, t);
          s || n.addEventListener(e, i, !0), p._data(n, t, (s || 0) + 1)
        },
        teardown: function() {}
      }
    }), p.fn.extend({
      on: function(e, t, i, n, s) {
        var o, a;
        if ("object" == typeof e) {
          for (o in "string" != typeof t && (i = i || t, t = void 0), e) this.on(o, t, i, e[o], s);
          return this
        }
        if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), !1 === n) n = K;
        else if (!n) return this;
        return 1 === s && (a = n, (n = function(e) {}).guid = a.guid || (a.guid = p.guid++)), this.each(function() {
          p.event.add(this, e, n, i, t)
        })
      },
      one: function(e, t, i, n) {},
      off: function(e, t, i) {
        var n, s;
        if (e && e.preventDefault && e.handleObj) return n = e.handleObj, p(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof e) {
          for (s in e) this.off(s, t, e[s]);
          return this
        }
        return (!1 === t || "function" == typeof t) && (i = t, t = void 0), !1 === i && (i = K), this.each(function() {
          p.event.remove(this, e, i, t)
        })
      },
      trigger: function(e, t) {},
      triggerHandler: function(e, t) {
        var i = this[0];
        return i ? p.event.trigger(e, t, i, !0) : void 0
      }
    });
    var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      ne = / jQuery\d+="(?:null|\d+)"/g,
      se = new RegExp("<(?:" + ie + ")[\\s/>]", "i"),
      oe = /^\s+/,
      ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      re = /<([\w:]+)/,
      le = /<tbody/i,
      de = /<|&#?\w+;/,
      ce = /<(?:script|style|link)/i,
      ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
      pe = /^$|\/(?:java|ecma)script/i,
      he = /^true\/(.*)/,
      fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      me = te(C).appendChild(C.createElement("div"));

    function ge(e, t) {
      var i, n, s = 0,
        o = typeof e.getElementsByTagName !== I ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== I ? e.querySelectorAll(t || "*") : void 0;
      if (!o)
        for (o = [], i = e.childNodes || e; null != (n = i[s]); s++) !t || p.nodeName(n, t) ? o.push(n) : p.merge(o, ge(n, t));
      return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], o) : o
    }

    function ye(e) {}

    function be(e, t) {
      return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function we(e) {
      return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }

    function Te(e) {
      var t = he.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function xe(e, t) {
      for (var i, n = 0; null != (i = e[n]); n++) p._data(i, "globalEval", !t || p._data(t[n], "globalEval"))
    }

    function Se(e, t) {
      if (1 === t.nodeType && p.hasData(e)) {
        var i, n, s, o = p._data(e),
          a = p._data(t, o),
          r = o.events;
        if (r)
          for (i in delete a.handle, a.events = {}, r)
            for (n = 0, s = r[i].length; n < s; n++) p.event.add(t, i, r[i][n]);
        a.data && (a.data = p.extend({}, a.data))
      }
    }

    function Ce(e, t) {}
    ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, p.extend({
      clone: function(e, t, i) {
        var n, s, o, a, r, l = p.contains(e.ownerDocument, e);
        if (c.html5Clone || p.isXMLDoc(e) || !se.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (me.innerHTML = e.outerHTML, me.removeChild(o = me.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
          for (n = ge(o), r = ge(e), a = 0; null != (s = r[a]); ++a) n[a] && Ce(s, n[a]);
        if (t)
          if (i)
            for (r = r || ge(e), n = n || ge(o), a = 0; null != (s = r[a]); a++) Se(s, n[a]);
          else Se(e, o);
        return 0 < (n = ge(o, "script")).length && xe(n, !l && ge(e, "script")), n = r = s = null, o
      },
      buildFragment: function(e, t, i, n) {
        for (var s, o, a, r, l, d, u, h = e.length, f = te(t), v = [], m = 0; m < h; m++)
          if ((o = e[m]) || 0 === o)
            if ("object" === p.type(o)) p.merge(v, o.nodeType ? [o] : o);
            else if (de.test(o)) {
          for (r = r || f.appendChild(t.createElement("div")), l = (re.exec(o) || ["", ""])[1].toLowerCase(), u = ve[l] || ve._default, r.innerHTML = u[1] + o.replace(ae, "<$1></$2>") + u[2], s = u[0]; s--;) r = r.lastChild;
          if (!c.leadingWhitespace && oe.test(o) && v.push(t.createTextNode(oe.exec(o)[0])), !c.tbody)
            for (s = (o = "table" !== l || le.test(o) ? "<table>" !== u[1] || le.test(o) ? 0 : r : r.firstChild) && o.childNodes.length; s--;) p.nodeName(d = o.childNodes[s], "tbody") && !d.childNodes.length && o.removeChild(d);
          for (p.merge(v, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
          r = f.lastChild
        } else v.push(t.createTextNode(o));
        for (r && f.removeChild(r), c.appendChecked || p.grep(ge(v, "input"), ye), m = 0; o = v[m++];)
          if ((!n || -1 === p.inArray(o, n)) && (a = p.contains(o.ownerDocument, o), r = ge(f.appendChild(o), "script"), a && xe(r), i))
            for (s = 0; o = r[s++];) pe.test(o.type || "") && i.push(o);
        return r = null, f
      },
      cleanData: function(e, t) {}
    }), p.fn.extend({
      text: function(e) {},
      append: function() {
        return this.domManip(arguments, function(e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || be(this, e).appendChild(e)
        })
      },
      prepend: function() {},
      before: function() {
        return this.domManip(arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {},
      remove: function(e, t) {},
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && p.cleanData(ge(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
          e.options && p.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return p.clone(this, e, t)
        })
      },
      html: function(e) {
        return X(this, function(e) {
          var t = this[0] || {},
            i = 0,
            n = this.length;
          if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ne, "") : void 0;
          if (!("string" != typeof e || ce.test(e) || !c.htmlSerialize && se.test(e) || !c.leadingWhitespace && oe.test(e) || ve[(re.exec(e) || ["", ""])[1].toLowerCase()])) {
            e = e.replace(ae, "<$1></$2>");
            try {
              for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (p.cleanData(ge(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {},
      detach: function(e) {},
      domManip: function(e, t) {
        e = s.apply([], e);
        var i, n, o, a, r, l, d = 0,
          u = this.length,
          h = this,
          f = u - 1,
          v = e[0],
          m = p.isFunction(v);
        if (m || 1 < u && "string" == typeof v && !c.checkClone && ue.test(v)) return this.each(function(i) {});
        if (u && (i = (l = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = i), i)) {
          for (o = (a = p.map(ge(l, "script"), we)).length; d < u; d++) n = l, d !== f && (n = p.clone(n, !0, !0), o && p.merge(a, ge(n, "script"))), t.call(this[d], n, d);
          if (o)
            for (r = a[a.length - 1].ownerDocument, p.map(a, Te), d = 0; d < o; d++) n = a[d], pe.test(n.type || "") && !p._data(n, "globalEval") && p.contains(r, n) && (n.src ? p._evalUrl && p._evalUrl(n.src) : p.globalEval((n.text || n.textContent || n.innerHTML || "").replace(fe, "")));
          l = i = null
        }
        return this
      }
    }), p.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      p.fn[e] = function(e) {
        for (var i, n = 0, s = [], a = p(e), r = a.length - 1; n <= r; n++) i = n === r ? this : this.clone(!0), p(a[n])[t](i), o.apply(s, i.get());
        return this.pushStack(s)
      }
    });
    var ke, Ee, $e = {};

    function _e(t, i) {}

    function Me(e) {}
    c.shrinkWrapBlocks = function() {};
    var Ne, Ae, Le = /^margin/,
      De = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
      ze = /^(top|right|bottom|left)$/;

    function Ie(e, t) {
      return {
        get: function() {}
      }
    }
    e.getComputedStyle ? (Ne = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
      }, Ae = function(e, t, i) {
        var n, s, o, a, r = e.style;
        return a = (i = i || Ne(e)) ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)), De.test(a) && Le.test(t) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + ""
      }) : C.documentElement.currentStyle && (Ne = function(e) {}, Ae = function(e, t, i) {}),
      function() {
        var t, i, n, s, o, a, r;
        if ((t = C.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = (n = t.getElementsByTagName("a")[0]) && n.style) {
          function l() {}
          i.cssText = "float:left;opacity:.5", c.opacity = "0.5" === i.opacity, c.cssFloat = !!i.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === t.style.backgroundClip, c.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, p.extend(c, {
            reliableHiddenOffsets: function() {},
            boxSizingReliable: function() {},
            pixelPosition: function() {},
            reliableMarginRight: function() {}
          })
        }
      }(), p.swap = function(e, t, i, n) {};
    var Pe = /alpha\([^)]*\)/i,
      Oe = /opacity\s*=\s*([^)]*)/,
      je = /^(none|table(?!-c[ea]).+)/,
      He = new RegExp("^(" + F + ")(.*)$", "i"),
      Be = new RegExp("^([+-])=(" + F + ")", "i"),
      Re = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Fe = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      We = ["Webkit", "O", "Moz", "ms"];

    function qe(e, t) {
      if (t in e) return t;
      for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = We.length; s--;)
        if ((t = We[s] + i) in e) return t;
      return n
    }

    function Xe(e, t) {
      for (var i, n, s, o = [], a = 0, r = e.length; a < r; a++)(n = e[a]).style && (o[a] = p._data(n, "olddisplay"), i = n.style.display, t ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && q(n) && (o[a] = p._data(n, "olddisplay", Me(n.nodeName)))) : (s = q(n), (i && "none" !== i || !s) && p._data(n, "olddisplay", s ? i : p.css(n, "display"))));
      for (a = 0; a < r; a++)(n = e[a]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[a] || "" : "none"));
      return e
    }

    function Ge(e, t, i) {}

    function Ye(e, t, i, n, s) {}

    function Ue(e, t, i) {}

    function Ve(e, t, i, n, s) {}
    p.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {}
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
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
        float: c.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(e, t, i, n) {},
      css: function(e, t, i, n) {
        var s, o, a, r = p.camelCase(t);
        return t = p.cssProps[r] || (p.cssProps[r] = qe(e.style, r)), (a = p.cssHooks[t] || p.cssHooks[r]) && "get" in a && (o = a.get(e, !0, i)), void 0 === o && (o = Ae(e, t, n)), "normal" === o && t in Fe && (o = Fe[t]), "" === i || i ? (s = parseFloat(o), !0 === i || p.isNumeric(s) ? s || 0 : o) : o
      }
    }), p.each(["height", "width"], function(e, t) {
      p.cssHooks[t] = {
        get: function(e, i, n) {},
        set: function(e, i, n) {}
      }
    }), c.opacity || (p.cssHooks.opacity = {
      get: function(e, t) {},
      set: function(e, t) {}
    }), p.cssHooks.marginRight = Ie(c.reliableMarginRight, function(e, t) {}), p.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      p.cssHooks[e + t] = {
        expand: function(i) {}
      }, Le.test(e) || (p.cssHooks[e + t].set = Ge)
    }), p.fn.extend({
      css: function(e, t) {
        return X(this, function(e, t, i) {
          var n, s, o = {},
            a = 0;
          if (p.isArray(t)) {
            for (n = Ne(e), s = t.length; a < s; a++) o[t[a]] = p.css(e, t[a], !1, n);
            return o
          }
          return void 0 !== i ? p.style(e, t, i) : p.css(e, t)
        }, e, t, 1 < arguments.length)
      },
      show: function() {},
      hide: function() {
        return Xe(this)
      },
      toggle: function(e) {}
    }), ((p.Tween = Ve).prototype = {
      constructor: Ve,
      init: function(e, t, i, n, s, o) {},
      cur: function() {},
      run: function(e) {}
    }).init.prototype = Ve.prototype, (Ve.propHooks = {
      _default: {
        get: function(e) {},
        set: function(e) {}
      }
    }).scrollTop = Ve.propHooks.scrollLeft = {
      set: function(e) {}
    }, p.easing = {
      linear: function(e) {},
      swing: function(e) {}
    }, p.fx = Ve.prototype.init, p.fx.step = {};
    var Qe, Je, Ze, Ke, et, tt, it, nt = /^(?:toggle|show|hide)$/,
      st = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
      ot = /queueHooks$/,
      at = [function(e, t, i) {}],
      rt = {
        "*": [function(e, t) {}]
      };

    function lt() {}

    function dt(e, t) {
      var i, n = {
          height: e
        },
        s = 0;
      for (t = t ? 1 : 0; s < 4; s += 2 - t) n["margin" + (i = W[s])] = n["padding" + i] = e;
      return t && (n.opacity = n.width = e), n
    }

    function ct(e, t, i) {}

    function ut(e, t, i) {}
    p.Animation = p.extend(ut, {
      tweener: function(e, t) {},
      prefilter: function(e, t) {}
    }), p.speed = function(e, t, i) {}, p.fn.extend({
      fadeTo: function(e, t, i, n) {},
      animate: function(e, t, i, n) {},
      stop: function(e, t, i) {},
      finish: function(e) {}
    }), p.each(["toggle", "show", "hide"], function(e, t) {
      var i = p.fn[t];
      p.fn[t] = function(e, n, s) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(dt(t, !0), e, n, s)
      }
    }), p.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      p.fn[e] = function(e, i, n) {}
    }), p.timers = [], p.fx.tick = function() {}, p.fx.timer = function(e) {}, p.fx.interval = 13, p.fx.start = function() {}, p.fx.stop = function() {}, p.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, p.fn.delay = function(e, t) {}, (Ke = C.createElement("div")).setAttribute("className", "t"), Ke.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", tt = Ke.getElementsByTagName("a")[0], it = (et = C.createElement("select")).appendChild(C.createElement("option")), Ze = Ke.getElementsByTagName("input")[0], tt.style.cssText = "top:1px", c.getSetAttribute = "t" !== Ke.className, c.style = /top/.test(tt.getAttribute("style")), c.hrefNormalized = "/a" === tt.getAttribute("href"), c.checkOn = !!Ze.value, c.optSelected = it.selected, c.enctype = !!C.createElement("form").enctype, et.disabled = !0, c.optDisabled = !it.disabled, (Ze = C.createElement("input")).setAttribute("value", ""), c.input = "" === Ze.getAttribute("value"), Ze.value = "t", Ze.setAttribute("type", "radio"), c.radioValue = "t" === Ze.value;
    var pt = /\r/g;
    p.fn.extend({
      val: function(e) {}
    }), p.extend({
      valHooks: {
        option: {
          get: function(e) {}
        },
        select: {
          get: function(e) {},
          set: function(e, t) {}
        }
      }
    }), p.each(["radio", "checkbox"], function() {
      p.valHooks[this] = {
        set: function(e, t) {}
      }, c.checkOn || (p.valHooks[this].get = function(e) {})
    });
    var ht, ft, vt = p.expr.attrHandle,
      mt = /^(?:checked|selected)$/i,
      gt = c.getSetAttribute,
      yt = c.input;
    p.fn.extend({
      attr: function(e, t) {
        return X(this, p.attr, e, t, 1 < arguments.length)
      },
      removeAttr: function(e) {}
    }), p.extend({
      attr: function(e, t, i) {
        var n, s, o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === I ? p.prop(e, t, i) : (1 === o && p.isXMLDoc(e) || (t = t.toLowerCase(), n = p.attrHooks[t] || (p.expr.match.bool.test(t) ? ft : ht)), void 0 === i ? n && "get" in n && null !== (s = n.get(e, t)) ? s : null == (s = p.find.attr(e, t)) ? void 0 : s : null !== i ? n && "set" in n && void 0 !== (s = n.set(e, i, t)) ? s : (e.setAttribute(t, i + ""), i) : void p.removeAttr(e, t))
      },
      removeAttr: function(e, t) {},
      attrHooks: {
        type: {
          set: function(e, t) {}
        }
      }
    }), ft = {
      set: function(e, t, i) {}
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var i = vt[t] || p.find.attr;
      vt[t] = yt && gt || !mt.test(t) ? function(e, t, n) {} : function(e, t, i) {}
    }), yt && gt || (p.attrHooks.value = {
      set: function(e, t, i) {}
    }), gt || (ht = {
      set: function(e, t, i) {}
    }, vt.id = vt.name = vt.coords = function(e, t, i) {}, p.valHooks.button = {
      get: function(e, t) {},
      set: ht.set
    }, p.attrHooks.contenteditable = {
      set: function(e, t, i) {}
    }, p.each(["width", "height"], function(e, t) {})), c.style || (p.attrHooks.style = {
      get: function(e) {},
      set: function(e, t) {}
    });
    var bt = /^(?:input|select|textarea|button|object)$/i,
      wt = /^(?:a|area)$/i;
    p.fn.extend({
      prop: function(e, t) {},
      removeProp: function(e) {}
    }), p.extend({
      propFix: {
        for: "htmlFor",
        class: "className"
      },
      prop: function(e, t, i) {},
      propHooks: {
        tabIndex: {
          get: function(e) {}
        }
      }
    }), c.hrefNormalized || p.each(["href", "src"], function(e, t) {}), c.optSelected || (p.propHooks.selected = {
      get: function(e) {}
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      p.propFix[this.toLowerCase()] = this
    }), c.enctype || (p.propFix.enctype = "encoding");
    var Tt = /[\t\r\n\f]/g;
    p.fn.extend({
      addClass: function(e) {},
      removeClass: function(e) {},
      toggleClass: function(e, t) {},
      hasClass: function(e) {}
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      p.fn[t] = function(e, i) {
        return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t)
      }
    }), p.fn.extend({
      hover: function(e, t) {},
      bind: function(e, t, i) {
        return this.on(e, null, t, i)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, i, n) {},
      undelegate: function(e, t, i) {}
    });
    var xt = p.now(),
      St = /\?/,
      Ct = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
      if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
      var i, n = null,
        s = p.trim(t + "");
      return s && !p.trim(s.replace(Ct, function(e, t, s, o) {})) ? Function("return " + s)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {};
    var kt, Et, $t = /#.*$/,
      _t = /([?&])_=[^&]*/,
      Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Nt = /^(?:GET|HEAD)$/,
      At = /^\/\//,
      Lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Dt = {},
      zt = {},
      It = "*/".concat("*");
    try {
      Et = location.href
    } catch (t) {
      (Et = C.createElement("a")).href = "", Et = Et.href
    }

    function Pt(e) {
      return function(t, i) {
        "string" != typeof t && (i = t, t = "*");
        var n, s = 0,
          o = t.toLowerCase().match(N) || [];
        if (p.isFunction(i))
          for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
      }
    }

    function Ot(e, t, i, n) {
      var s = {},
        o = e === zt;

      function a(r) {
        var l;
        return s[r] = !0, p.each(e[r] || [], function(e, r) {
          var d = r(t, i, n);
          return "string" != typeof d || o || s[d] ? o ? !(l = d) : void 0 : (t.dataTypes.unshift(d), a(d), !1)
        }), l
      }
      return a(t.dataTypes[0]) || !s["*"] && a("*")
    }

    function jt(e, t) {
      var i, n, s = p.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
      return i && p.extend(!0, e, i), e
    }
    kt = Lt.exec(Et.toLowerCase()) || [], p.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
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
          "text json": p.parseJSON,
          "text xml": p.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? jt(jt(e, p.ajaxSettings), t) : jt(p.ajaxSettings, e)
      },
      ajaxPrefilter: Pt(Dt),
      ajaxTransport: Pt(zt),
      ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var i, n, s, o, a, r, l, d, c = p.ajaxSetup({}, t),
          u = c.context || c,
          h = c.context && (u.nodeType || u.jquery) ? p(u) : p.event,
          f = p.Deferred(),
          v = p.Callbacks("once memory"),
          m = c.statusCode || {},
          g = {},
          y = {},
          b = 0,
          w = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {},
            getAllResponseHeaders: function() {},
            setRequestHeader: function(e, t) {
              var i = e.toLowerCase();
              return b || (e = y[i] = y[i] || e, g[e] = t), this
            },
            overrideMimeType: function(e) {},
            statusCode: function(e) {
              var t;
              if (e)
                if (b < 2)
                  for (t in e) m[t] = [m[t], e[t]];
                else T.always(e[T.status]);
              return this
            },
            abort: function(e) {}
          };
        if (f.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Et) + "").replace($t, "").replace(At, kt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = p.trim(c.dataType || "*").toLowerCase().match(N) || [""], null == c.crossDomain && (i = Lt.exec(c.url.toLowerCase()), c.crossDomain = !(!i || i[1] === kt[1] && i[2] === kt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (kt[3] || ("http:" === kt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = p.param(c.data, c.traditional)), Ot(Dt, c, t, T), 2 === b) return T;
        for (n in (r = p.event && c.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Nt.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (St.test(s) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = _t.test(s) ? s.replace(_t, "$1_=" + xt++) : s + (St.test(s) ? "&" : "?") + "_=" + xt++)), c.ifModified && (p.lastModified[s] && T.setRequestHeader("If-Modified-Since", p.lastModified[s]), p.etag[s] && T.setRequestHeader("If-None-Match", p.etag[s])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + It + "; q=0.01" : "") : c.accepts["*"]), c.headers) T.setRequestHeader(n, c.headers[n]);
        if (c.beforeSend && (!1 === c.beforeSend.call(u, T, c) || 2 === b)) return T.abort();
        for (n in w = "abort", {
            success: 1,
            error: 1,
            complete: 1
          }) T[n](c[n]);
        if (l = Ot(zt, c, t, T)) {
          T.readyState = 1, r && h.trigger("ajaxSend", [T, c]), c.async && 0 < c.timeout && (a = setTimeout(function() {}, c.timeout));
          try {
            b = 1, l.send(g, x)
          } catch (e) {
            if (!(b < 2)) throw e;
            x(-1, e)
          }
        } else x(-1, "No Transport");

        function x(e, t, i, n) {
          var d, g, y, w, x, S = t;
          2 !== b && (b = 2, a && clearTimeout(a), l = void 0, o = n || "", T.readyState = 0 < e ? 4 : 0, d = 200 <= e && e < 300 || 304 === e, i && (w = function(e, t, i) {
            for (var n, s, o, a, r = e.contents, l = e.dataTypes;
              "*" === l[0];) l.shift(), void 0 === s && (s = e.mimeType || t.getResponseHeader("Content-Type"));
            if (s)
              for (a in r)
                if (r[a] && r[a].test(s)) {
                  l.unshift(a);
                  break
                } if (l[0] in i) o = l[0];
            else {
              for (a in i) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                  o = a;
                  break
                }
                n || (n = a)
              }
              o = o || n
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
          }(c, T, i)), w = function(e, t, i, n) {
            var s, o, a, r, l, d = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
              if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
              if (!(a = d[l + " " + o] || d["* " + o]))
                for (s in d)
                  if ((r = s.split(" "))[1] === o && (a = d[l + " " + r[0]] || d["* " + r[0]])) {
                    !0 === a ? a = d[s] : !0 !== d[s] && (o = r[0], c.unshift(r[1]));
                    break
                  } if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                  t = a(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + l + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(c, w, T, d), d ? (c.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (p.lastModified[s] = x), (x = T.getResponseHeader("etag")) && (p.etag[s] = x)), 204 === e || "HEAD" === c.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = w.state, g = w.data, d = !(y = w.error))) : (y = S, (e || !S) && (S = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || S) + "", d ? f.resolveWith(u, [g, S, T]) : f.rejectWith(u, [T, S, y]), T.statusCode(m), m = void 0, r && h.trigger(d ? "ajaxSuccess" : "ajaxError", [T, c, d ? g : y]), v.fireWith(u, [T, S]), r && (h.trigger("ajaxComplete", [T, c]), --p.active || p.event.trigger("ajaxStop")))
        }
        return T
      },
      getJSON: function(e, t, i) {},
      getScript: function(e, t) {}
    }), p.each(["get", "post"], function(e, t) {
      p[t] = function(e, i, n, s) {}
    }), p._evalUrl = function(e) {}, p.fn.extend({
      wrapAll: function(e) {
        if (p.isFunction(e)) return this.each(function(t) {});
        if (this[0]) {
          var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
            return e
          }).append(this)
        }
        return this
      },
      wrapInner: function(e) {},
      wrap: function(e) {},
      unwrap: function() {}
    }), p.expr.filters.hidden = function(e) {}, p.expr.filters.visible = function(e) {};
    var Ht = /%20/g,
      Bt = /\[\]$/,
      Rt = /\r?\n/g,
      Ft = /^(?:submit|button|image|reset|file)$/i,
      Wt = /^(?:input|select|textarea|keygen)/i;

    function qt(e, t, i, n) {}
    p.param = function(e, t) {}, p.fn.extend({
      serialize: function() {},
      serializeArray: function() {}
    }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {} : Ut;
    var Xt = 0,
      Gt = {},
      Yt = p.ajaxSettings.xhr();

    function Ut() {
      try {
        return new e.XMLHttpRequest
      } catch (e) {}
    }
    e.attachEvent && e.attachEvent("onunload", function() {}), c.cors = !!Yt && "withCredentials" in Yt, (Yt = c.ajax = !!Yt) && p.ajaxTransport(function(e) {
      var t;
      if (!e.crossDomain || c.cors) return {
        send: function(i, n) {
          var s, o = e.xhr(),
            a = ++Xt;
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) o[s] = e.xhrFields[s];
          for (s in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
          o.send(e.hasContent && e.data || null), t = function(i, s) {
            var r, l, d;
            if (t && (s || 4 === o.readyState))
              if (delete Gt[a], t = void 0, o.onreadystatechange = p.noop, s) 4 !== o.readyState && o.abort();
              else {
                d = {}, r = o.status, "string" == typeof o.responseText && (d.text = o.responseText);
                try {
                  l = o.statusText
                } catch (i) {
                  l = ""
                }
                r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = d.text ? 200 : 404
              } d && n(r, l, d, o.getAllResponseHeaders())
          }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Gt[a] = t : t()
        },
        abort: function() {}
      }
    }), p.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(e) {}
      }
    }), p.ajaxPrefilter("script", function(e) {}), p.ajaxTransport("script", function(e) {});
    var Vt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {}
    }), p.ajaxPrefilter("json jsonp", function(t, i, n) {
      var s, o, a, r = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
      return r || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Qt, "$1" + s) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {}, t.dataTypes[0] = "json", o = e[s], e[s] = function() {}, n.always(function() {}), "script") : void 0
    }), p.parseHTML = function(e, t, i) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (i = t, t = !1), t = t || C;
      var n = w.exec(e),
        s = !i && [];
      return n ? [t.createElement(n[1])] : (n = p.buildFragment([e], t, s), s && s.length && p(s).remove(), p.merge([], n.childNodes))
    };
    var Jt = p.fn.load;
    p.fn.load = function(e, t, i) {}, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      p.fn[t] = function(e) {}
    }), p.expr.filters.animated = function(e) {};
    var Zt = e.document.documentElement;

    function Kt(e) {
      return p.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    p.offset = {
      setOffset: function(e, t, i) {}
    }, p.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {});
        var t, i, n = {
            top: 0,
            left: 0
          },
          s = this[0],
          o = s && s.ownerDocument;
        return o ? (t = o.documentElement, p.contains(t, s) ? (typeof s.getBoundingClientRect !== I && (n = s.getBoundingClientRect()), i = Kt(o), {
          top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
          left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
        }) : n) : void 0
      },
      position: function() {},
      offsetParent: function() {}
    }), p.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var i = /Y/.test(t);
      p.fn[e] = function(n) {}
    }), p.each(["top", "left"], function(e, t) {
      p.cssHooks[t] = Ie(c.pixelPosition, function(e, i) {})
    }), p.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      p.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(i, n) {
        p.fn[n] = function(n, s) {
          var o = arguments.length && (i || "boolean" != typeof n),
            a = i || (!0 === n || !0 === s ? "margin" : "border");
          return X(this, function(t, i, n) {
            var s;
            return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === n ? p.css(t, i, a) : p.style(t, i, n, a)
          }, t, o ? n : void 0, o, null)
        }
      })
    }), p.fn.size = function() {}, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {});
    var ei = e.jQuery,
      ti = e.$;
    return p.noConflict = function(t) {}, typeof t === I && (e.jQuery = e.$ = p), p
  }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(e) {
  "use strict";
  var t = jQuery.fn.jquery.split(" ")[0].split(".");
  if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 3 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(e) {
  "use strict";
  e.fn.emulateTransitionEnd = function(t) {}, e(function() {
    e.support.transition = function() {
      var e = document.createElement("bootstrap"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        };
      for (var i in t)
        if (void 0 !== e.style[i]) return {
          end: t[i]
        };
      return !1
    }(), e.support.transition && (e.event.special.bsTransitionEnd = {
      bindType: e.support.transition.end,
      delegateType: e.support.transition.end,
      handle: function(t) {}
    })
  })
}(jQuery),
function(e) {
  "use strict";
  var t = '[data-dismiss="alert"]',
    i = function(i) {};
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {};
  var n = e.fn.alert;
  e.fn.alert = function(t) {}, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {}, e(document).on("click.bs.alert.data-api", t, i.prototype.close)
}(jQuery),
function(e) {
  "use strict";

  function t(t) {}
  var i = function(t, n) {};
  i.VERSION = "3.3.7", i.DEFAULTS = {
    loadingText: "loading..."
  }, i.prototype.setState = function(t) {}, i.prototype.toggle = function() {};
  var n = e.fn.button;
  e.fn.button = t, e.fn.button.Constructor = i, e.fn.button.noConflict = function() {}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {})
}(jQuery),
function(e) {
  "use strict";

  function t(t) {}
  var i = function(t, i) {};
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function(e) {}, i.prototype.cycle = function(t) {}, i.prototype.getItemIndex = function(e) {}, i.prototype.getItemForDirection = function(e, t) {}, i.prototype.to = function(e) {}, i.prototype.pause = function(t) {}, i.prototype.next = function() {}, i.prototype.prev = function() {}, i.prototype.slide = function(t, n) {};
  var n = e.fn.carousel;
  e.fn.carousel = t, e.fn.carousel.Constructor = i, e.fn.carousel.noConflict = function() {};
  var s = function(i) {};
  e(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), e(window).on("load", function() {
    e('[data-ride="carousel"]').each(function() {})
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {}

  function i(t) {}
  var n = function(t, i) {};
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
    toggle: !0
  }, n.prototype.dimension = function() {}, n.prototype.show = function() {}, n.prototype.hide = function() {}, n.prototype.toggle = function() {}, n.prototype.getParent = function() {}, n.prototype.addAriaAndCollapsedClass = function(e, t) {};
  var s = e.fn.collapse;
  e.fn.collapse = i, e.fn.collapse.Constructor = n, e.fn.collapse.noConflict = function() {}, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {})
}(jQuery),
function(e) {
  "use strict";

  function t(t) {}

  function i(i) {}
  var n = '[data-toggle="dropdown"]',
    s = function(t) {};
  s.VERSION = "3.3.7", s.prototype.toggle = function(n) {}, s.prototype.keydown = function(i) {};
  var o = e.fn.dropdown;
  e.fn.dropdown = function(t) {}, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {}, e(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {}).on("click.bs.dropdown.data-api", n, s.prototype.toggle).on("keydown.bs.dropdown.data-api", n, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(e) {
  "use strict";

  function t(t, n) {}
  var i = function(t, i) {};
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function(e) {}, i.prototype.show = function(t) {}, i.prototype.hide = function(t) {}, i.prototype.enforceFocus = function() {}, i.prototype.escape = function() {}, i.prototype.resize = function() {}, i.prototype.hideModal = function() {}, i.prototype.removeBackdrop = function() {}, i.prototype.backdrop = function(t) {}, i.prototype.handleUpdate = function() {}, i.prototype.adjustDialog = function() {}, i.prototype.resetAdjustments = function() {}, i.prototype.checkScrollbar = function() {}, i.prototype.setScrollbar = function() {}, i.prototype.resetScrollbar = function() {}, i.prototype.measureScrollbar = function() {};
  var n = e.fn.modal;
  e.fn.modal = t, e.fn.modal.Constructor = i, e.fn.modal.noConflict = function() {}, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {})
}(jQuery),
function(e) {
  "use strict";
  var t = function(e, t) {};
  t.VERSION = "3.3.7", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, t.prototype.init = function(t, i, n) {}, t.prototype.getDefaults = function() {}, t.prototype.getOptions = function(t) {}, t.prototype.getDelegateOptions = function() {}, t.prototype.enter = function(t) {}, t.prototype.isInStateTrue = function() {}, t.prototype.leave = function(t) {}, t.prototype.show = function() {}, t.prototype.applyPlacement = function(t, i) {}, t.prototype.replaceArrow = function(e, t, i) {}, t.prototype.setContent = function() {}, t.prototype.hide = function(i) {}, t.prototype.fixTitle = function() {}, t.prototype.hasContent = function() {}, t.prototype.getPosition = function(t) {}, t.prototype.getCalculatedOffset = function(e, t, i, n) {}, t.prototype.getViewportAdjustedDelta = function(e, t, i, n) {}, t.prototype.getTitle = function() {}, t.prototype.getUID = function(e) {}, t.prototype.tip = function() {}, t.prototype.arrow = function() {}, t.prototype.enable = function() {}, t.prototype.disable = function() {}, t.prototype.toggleEnabled = function() {}, t.prototype.toggle = function(t) {}, t.prototype.destroy = function() {};
  var i = e.fn.tooltip;
  e.fn.tooltip = function(i) {}, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {}
}(jQuery),
function(e) {
  "use strict";
  var t = function(e, t) {};
  if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
  t.VERSION = "3.3.7", t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), ((t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)).constructor = t).prototype.getDefaults = function() {}, t.prototype.setContent = function() {}, t.prototype.hasContent = function() {}, t.prototype.getContent = function() {}, t.prototype.arrow = function() {};
  var i = e.fn.popover;
  e.fn.popover = function(i) {}, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {}
}(jQuery),
function(e) {
  "use strict";

  function t(i, n) {}

  function i(i) {}
  t.VERSION = "3.3.7", t.DEFAULTS = {
    offset: 10
  }, t.prototype.getScrollHeight = function() {}, t.prototype.refresh = function() {}, t.prototype.process = function() {}, t.prototype.activate = function(t) {}, t.prototype.clear = function() {};
  var n = e.fn.scrollspy;
  e.fn.scrollspy = i, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {}, e(window).on("load.bs.scrollspy.data-api", function() {
    e('[data-spy="scroll"]').each(function() {})
  })
}(jQuery),
function(e) {
  "use strict";

  function t(t) {}
  var i = function(t) {};
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {}, i.prototype.activate = function(t, n, s) {};
  var n = e.fn.tab;
  e.fn.tab = t, e.fn.tab.Constructor = i, e.fn.tab.noConflict = function() {};
  var s = function(i) {};
  e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery),
function(e) {
  "use strict";

  function t(t) {}
  var i = function(t, n) {};
  i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function(e, t, i, n) {}, i.prototype.getPinnedOffset = function() {}, i.prototype.checkPositionWithEventLoop = function() {}, i.prototype.checkPosition = function() {};
  var n = e.fn.affix;
  e.fn.affix = t, e.fn.affix.Constructor = i, e.fn.affix.noConflict = function() {}, e(window).on("load", function() {
    e('[data-spy="affix"]').each(function() {})
  })
}(jQuery),
function() {
  var e, t;
  e = this.jQuery || window.jQuery, t = e(window), e.fn.stick_in_parent = function(i) {}
}.call(this),
  function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
  }(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
          blur: function() {},
          nodeName: ""
        },
        querySelector: function() {},
        querySelectorAll: function() {},
        getElementById: function() {},
        createEvent: function() {},
        createElement: function() {},
        location: {
          hash: ""
        }
      } : document,
      t = "undefined" == typeof window ? {
        document: e,
        navigator: {
          userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {},
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {},
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
      } : window,
      i = function(e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
      };

    function n(n, s) {
      var o = [],
        a = 0;
      if (n && !s && n instanceof i) return n;
      if (n)
        if ("string" == typeof n) {
          var r, l, d = n.trim();
          if (0 <= d.indexOf("<") && 0 <= d.indexOf(">")) {
            var c = "div";
            for (0 === d.indexOf("<li") && (c = "ul"), 0 === d.indexOf("<tr") && (c = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (c = "tr"), 0 === d.indexOf("<tbody") && (c = "table"), 0 === d.indexOf("<option") && (c = "select"), (l = e.createElement(c)).innerHTML = d, a = 0; a < l.childNodes.length; a += 1) o.push(l.childNodes[a])
          } else
            for (r = s || "#" !== n[0] || n.match(/[ .<>:~]/) ? (s || e).querySelectorAll(n.trim()) : [e.getElementById(n.trim().split("#")[1])], a = 0; a < r.length; a += 1) r[a] && o.push(r[a])
        } else if (n.nodeType || n === t || n === e) o.push(n);
      else if (0 < n.length && n[0].nodeType)
        for (a = 0; a < n.length; a += 1) o.push(n[a]);
      return new i(o)
    }

    function s(e) {
      for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
      return t
    }
    n.fn = i.prototype, n.Class = i, n.Dom7 = i;
    var o = {
      addClass: function(e) {
        if (void 0 === e) return this;
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.add(t[i]);
        return this
      },
      removeClass: function(e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
          for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.remove(t[i]);
        return this
      },
      hasClass: function(e) {},
      toggleClass: function(e) {},
      attr: function(e, t) {
        var i = arguments;
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var n = 0; n < this.length; n += 1)
          if (2 === i.length) this[n].setAttribute(e, t);
          else
            for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
        return this
      },
      removeAttr: function(e) {},
      data: function(e, t) {
        var i;
        if (void 0 !== t) {
          for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
          return this
        }
        if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
      },
      transform: function(e) {
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          i.webkitTransform = e, i.transform = e
        }
        return this
      },
      transition: function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t += 1) {
          var i = this[t].style;
          i.webkitTransitionDuration = e, i.transitionDuration = e
        }
        return this
      },
      on: function() {
        for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
        var s = t[0],
          o = t[1],
          a = t[2],
          r = t[3];

        function l(e) {}

        function d(e) {}
        "function" == typeof t[1] && (s = (e = t)[0], a = e[1], r = e[2], o = void 0), r || (r = !1);
        for (var c, u = s.split(" "), p = 0; p < this.length; p += 1) {
          var h = this[p];
          if (o)
            for (c = 0; c < u.length; c += 1) {
              var f = u[c];
              h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
                listener: a,
                proxyListener: l
              }), h.addEventListener(f, l, r)
            } else
              for (c = 0; c < u.length; c += 1) {
                var v = u[c];
                h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[v] || (h.dom7Listeners[v] = []), h.dom7Listeners[v].push({
                  listener: a,
                  proxyListener: d
                }), h.addEventListener(v, d, r)
              }
        }
        return this
      },
      off: function() {},
      trigger: function() {},
      transitionEnd: function(e) {},
      outerWidth: function(e) {},
      outerHeight: function(e) {},
      offset: function() {},
      css: function(e, i) {
        var n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (var s in e) this[n].style[s] = e[s];
            return this
          }
          if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = i;
          return this
        }
        return this
      },
      each: function(e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t])) return this;
        return this
      },
      html: function(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this
      },
      text: function(e) {},
      is: function(s) {
        var o, a, r = this[0];
        if (!r || void 0 === s) return !1;
        if ("string" == typeof s) {
          if (r.matches) return r.matches(s);
          if (r.webkitMatchesSelector) return r.webkitMatchesSelector(s);
          if (r.msMatchesSelector) return r.msMatchesSelector(s);
          for (o = n(s), a = 0; a < o.length; a += 1)
            if (o[a] === r) return !0;
          return !1
        }
        if (s === e) return r === e;
        if (s === t) return r === t;
        if (s.nodeType || s instanceof i) {
          for (o = s.nodeType ? [s] : s, a = 0; a < o.length; a += 1)
            if (o[a] === r) return !0;
          return !1
        }
        return !1
      },
      index: function() {
        var e, t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
          return e
        }
      },
      eq: function(e) {
        if (void 0 === e) return this;
        var t, n = this.length;
        return new i(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
      },
      append: function() {
        for (var t, n = [], s = arguments.length; s--;) n[s] = arguments[s];
        for (var o = 0; o < n.length; o += 1) {
          t = n[o];
          for (var a = 0; a < this.length; a += 1)
            if ("string" == typeof t) {
              var r = e.createElement("div");
              for (r.innerHTML = t; r.firstChild;) this[a].appendChild(r.firstChild)
            } else if (t instanceof i)
            for (var l = 0; l < t.length; l += 1) this[a].appendChild(t[l]);
          else this[a].appendChild(t)
        }
        return this
      },
      prepend: function(t) {},
      next: function(e) {},
      nextAll: function(e) {
        var t = [],
          s = this[0];
        if (!s) return new i([]);
        for (; s.nextElementSibling;) {
          var o = s.nextElementSibling;
          e ? n(o).is(e) && t.push(o) : t.push(o), s = o
        }
        return new i(t)
      },
      prev: function(e) {},
      prevAll: function(e) {
        var t = [],
          s = this[0];
        if (!s) return new i([]);
        for (; s.previousElementSibling;) {
          var o = s.previousElementSibling;
          e ? n(o).is(e) && t.push(o) : t.push(o), s = o
        }
        return new i(t)
      },
      parent: function(e) {},
      parents: function(e) {},
      closest: function(e) {},
      find: function(e) {
        for (var t = [], n = 0; n < this.length; n += 1)
          for (var s = this[n].querySelectorAll(e), o = 0; o < s.length; o += 1) t.push(s[o]);
        return new i(t)
      },
      children: function(e) {
        for (var t = [], o = 0; o < this.length; o += 1)
          for (var a = this[o].childNodes, r = 0; r < a.length; r += 1) e ? 1 === a[r].nodeType && n(a[r]).is(e) && t.push(a[r]) : 1 === a[r].nodeType && t.push(a[r]);
        return new i(s(t))
      },
      remove: function() {},
      add: function() {},
      styles: function() {}
    };
    Object.keys(o).forEach(function(e) {
      n.fn[e] = o[e]
    });
    var a, r, l, d = {
        deleteProps: function(e) {},
        nextTick: function(e, t) {},
        now: function() {
          return Date.now()
        },
        getTranslate: function(e, i) {},
        parseUrlQuery: function(e) {},
        isObject: function(e) {
          return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
          for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
          for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
            var s = e[n];
            if (null != s)
              for (var o = Object.keys(Object(s)), a = 0, r = o.length; a < r; a += 1) {
                var l = o[a],
                  c = Object.getOwnPropertyDescriptor(s, l);
                void 0 !== c && c.enumerable && (d.isObject(i[l]) && d.isObject(s[l]) ? d.extend(i[l], s[l]) : !d.isObject(i[l]) && d.isObject(s[l]) ? (i[l] = {}, d.extend(i[l], s[l])) : i[l] = s[l])
              }
          }
          return i
        }
      },
      c = (l = e.createElement("div"), {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
        transition: (r = l.style, "transition" in r || "webkitTransition" in r || "MozTransition" in r),
        transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (a = l.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
        flexbox: function() {
          for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
            if (t[i] in e) return !0;
          return !1
        }(),
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: function() {
          var e = !1;
          try {
            var i = Object.defineProperty({}, "passive", {
              get: function() {
                e = !0
              }
            });
            t.addEventListener("testPassiveListener", null, i)
          } catch (e) {}
          return e
        }(),
        gestures: "ongesturestart" in t
      }),
      u = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {})
      },
      p = {
        components: {
          configurable: !0
        }
      };
    u.prototype.on = function(e, t, i) {
      var n = this;
      if ("function" != typeof t) return n;
      var s = i ? "unshift" : "push";
      return e.split(" ").forEach(function(e) {
        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
      }), n
    }, u.prototype.once = function(e, t, i) {}, u.prototype.off = function(e, t) {}, u.prototype.emit = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var i, n, s, o = this;
      return o.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), s = o) : (i = e[0].events, n = e[0].data, s = e[0].context || o), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
        if (o.eventsListeners && o.eventsListeners[e]) {
          var t = [];
          o.eventsListeners[e].forEach(function(e) {
            t.push(e)
          }), t.forEach(function(e) {
            e.apply(s, n)
          })
        }
      })), o
    }, u.prototype.useModulesParams = function(e) {
      var t = this;
      t.modules && Object.keys(t.modules).forEach(function(i) {
        var n = t.modules[i];
        n.params && d.extend(e, n.params)
      })
    }, u.prototype.useModules = function(e) {
      void 0 === e && (e = {});
      var t = this;
      t.modules && Object.keys(t.modules).forEach(function(i) {
        var n = t.modules[i],
          s = e[i] || {};
        n.instance && Object.keys(n.instance).forEach(function(e) {}), n.on && t.on && Object.keys(n.on).forEach(function(e) {
          t.on(e, n.on[e])
        }), n.create && n.create.bind(t)(s)
      })
    }, p.components.set = function(e) {}, u.installModule = function(e) {
      for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
      var n = this;
      n.prototype.modules || (n.prototype.modules = {});
      var s = e.name || Object.keys(n.prototype.modules).length + "_" + d.now();
      return (n.prototype.modules[s] = e).proto && Object.keys(e.proto).forEach(function(t) {
        n.prototype[t] = e.proto[t]
      }), e.static && Object.keys(e.static).forEach(function(t) {
        n[t] = e.static[t]
      }), e.install && e.install.apply(n, t), n
    }, u.use = function(e) {
      for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
      var n = this;
      return Array.isArray(e) ? (e.forEach(function(e) {
        return n.installModule(e)
      }), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(u, p);
    var h = {
        updateSize: function() {
          var e, t, i = this.$el;
          e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
            width: e,
            height: t,
            size: this.isHorizontal() ? e : t
          }))
        },
        updateSlides: function() {
          var e = this.params,
            i = this.$wrapperEl,
            n = this.size,
            s = this.rtlTranslate,
            o = this.wrongRTL,
            a = this.virtual && e.virtual.enabled,
            r = a ? this.virtual.slides.length : this.slides.length,
            l = i.children("." + this.params.slideClass),
            u = a ? this.virtual.slides.length : l.length,
            p = [],
            h = [],
            f = [],
            v = e.slidesOffsetBefore;
          "function" == typeof v && (v = e.slidesOffsetBefore.call(this));
          var m = e.slidesOffsetAfter;
          "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
          var g = this.snapGrid.length,
            y = this.snapGrid.length,
            b = e.spaceBetween,
            w = -v,
            T = 0,
            x = 0;
          if (void 0 !== n) {
            var S, C;
            "string" == typeof b && 0 <= b.indexOf("%") && (b = parseFloat(b.replace("%", "")) / 100 * n), this.virtualSize = -b, s ? l.css({
              marginLeft: "",
              marginTop: ""
            }) : l.css({
              marginRight: "",
              marginBottom: ""
            }), 1 < e.slidesPerColumn && (S = Math.floor(u / e.slidesPerColumn) === u / this.params.slidesPerColumn ? u : Math.ceil(u / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (S = Math.max(S, e.slidesPerView * e.slidesPerColumn)));
            for (var k, E = e.slidesPerColumn, $ = S / E, _ = $ - (e.slidesPerColumn * $ - u), M = 0; M < u; M += 1) {
              C = 0;
              var N = l.eq(M);
              if (1 < e.slidesPerColumn) {
                var A = void 0,
                  L = void 0,
                  D = void 0;
                "column" === e.slidesPerColumnFill ? (D = M - (L = Math.floor(M / E)) * E, (_ < L || L === _ && D === E - 1) && (D += 1) >= E && (D = 0, L += 1), A = L + D * S / E, N.css({
                  "-webkit-box-ordinal-group": A,
                  "-moz-box-ordinal-group": A,
                  "-ms-flex-order": A,
                  "-webkit-order": A,
                  order: A
                })) : L = M - (D = Math.floor(M / $)) * $, N.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", D)
              }
              if ("none" !== N.css("display")) {
                if ("auto" === e.slidesPerView) {
                  var z = t.getComputedStyle(N[0], null),
                    I = N[0].style.transform,
                    P = N[0].style.webkitTransform;
                  I && (N[0].style.transform = "none"), P && (N[0].style.webkitTransform = "none"), C = this.isHorizontal() ? N[0].getBoundingClientRect().width + parseFloat(z.getPropertyValue("margin-left")) + parseFloat(z.getPropertyValue("margin-right")) : N[0].getBoundingClientRect().height + parseFloat(z.getPropertyValue("margin-top")) + parseFloat(z.getPropertyValue("margin-bottom")), I && (N[0].style.transform = I), P && (N[0].style.webkitTransform = P), e.roundLengths && (C = Math.floor(C))
                } else C = (n - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (C = Math.floor(C)), l[M] && (this.isHorizontal() ? l[M].style.width = C + "px" : l[M].style.height = C + "px");
                l[M] && (l[M].swiperSlideSize = C), f.push(C), e.centeredSlides ? (w = w + C / 2 + T / 2 + b, 0 === T && 0 !== M && (w = w - n / 2 - b), 0 === M && (w = w - n / 2 - b), Math.abs(w) < .001 && (w = 0), e.roundLengths && (w = Math.floor(w)), x % e.slidesPerGroup == 0 && p.push(w), h.push(w)) : (e.roundLengths && (w = Math.floor(w)), x % e.slidesPerGroup == 0 && p.push(w), h.push(w), w = w + C + b), this.virtualSize += C + b, T = C, x += 1
              }
            }
            if (this.virtualSize = Math.max(this.virtualSize, n) + m, s && o && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }), c.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }) : i.css({
                height: this.virtualSize + e.spaceBetween + "px"
              })), 1 < e.slidesPerColumn && (this.virtualSize = (C + e.spaceBetween) * S, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                width: this.virtualSize + e.spaceBetween + "px"
              }) : i.css({
                height: this.virtualSize + e.spaceBetween + "px"
              }), e.centeredSlides)) {
              k = [];
              for (var O = 0; O < p.length; O += 1) {
                var j = p[O];
                e.roundLengths && (j = Math.floor(j)), p[O] < this.virtualSize + p[0] && k.push(j)
              }
              p = k
            }
            if (!e.centeredSlides) {
              k = [];
              for (var H = 0; H < p.length; H += 1) {
                var B = p[H];
                e.roundLengths && (B = Math.floor(B)), p[H] <= this.virtualSize - n && k.push(B)
              }
              p = k, 1 < Math.floor(this.virtualSize - n) - Math.floor(p[p.length - 1]) && p.push(this.virtualSize - n)
            }
            0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? l.css({
              marginLeft: b + "px"
            }) : l.css({
              marginRight: b + "px"
            }) : l.css({
              marginBottom: b + "px"
            })), d.extend(this, {
              slides: l,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f
            }), u !== r && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), h.length !== y && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
          }
        },
        updateAutoHeight: function(e) {},
        updateSlidesOffset: function() {},
        updateSlidesProgress: function(e) {},
        updateProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this.params,
            i = this.maxTranslate() - this.minTranslate(),
            n = this.progress,
            s = this.isBeginning,
            o = this.isEnd,
            a = s,
            r = o;
          0 === i ? o = s = !(n = 0) : (s = (n = (e - this.minTranslate()) / i) <= 0, o = 1 <= n), d.extend(this, {
            progress: n,
            isBeginning: s,
            isEnd: o
          }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), s && !a && this.emit("reachBeginning toEdge"), o && !r && this.emit("reachEnd toEdge"), (a && !s || r && !o) && this.emit("fromEdge"), this.emit("progress", n)
        },
        updateSlidesClasses: function() {
          var e, t = this.slides,
            i = this.params,
            n = this.$wrapperEl,
            s = this.activeIndex,
            o = this.realIndex,
            a = this.virtual && i.virtual.enabled;
          t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = a ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o + '"]').addClass(i.slideDuplicateActiveClass));
          var r = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
          i.loop && 0 === r.length && (r = t.eq(0)).addClass(i.slideNextClass);
          var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
          i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (r.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
          var t, i = this.rtlTranslate ? this.translate : -this.translate,
            n = this.slidesGrid,
            s = this.snapGrid,
            o = this.params,
            a = this.activeIndex,
            r = this.realIndex,
            l = this.snapIndex,
            c = e;
          if (void 0 === c) {
            for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? c = u : i >= n[u] && i < n[u + 1] && (c = u + 1) : i >= n[u] && (c = u);
            o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
          }
          if ((t = 0 <= s.indexOf(i) ? s.indexOf(i) : Math.floor(c / o.slidesPerGroup)) >= s.length && (t = s.length - 1), c !== a) {
            var p = parseInt(this.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            d.extend(this, {
              snapIndex: t,
              realIndex: p,
              previousIndex: a,
              activeIndex: c
            }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), r !== p && this.emit("realIndexChange"), this.emit("slideChange")
          } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {}
      },
      f = {
        getTranslate: function(e) {},
        setTranslate: function(e, t) {
          var i = this.rtlTranslate,
            n = this.params,
            s = this.$wrapperEl,
            o = this.progress,
            a = 0,
            r = 0;
          this.isHorizontal() ? a = i ? -e : e : r = e, n.roundLengths && (a = Math.floor(a), r = Math.floor(r)), n.virtualTranslate || (c.transforms3d ? s.transform("translate3d(" + a + "px, " + r + "px, 0px)") : s.transform("translate(" + a + "px, " + r + "px)")), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : r;
          var l = this.maxTranslate() - this.minTranslate();
          (0 === l ? 0 : (e - this.minTranslate()) / l) !== o && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
          return -this.snapGrid[0]
        },
        maxTranslate: function() {
          return -this.snapGrid[this.snapGrid.length - 1]
        }
      },
      v = {
        slideTo: function(e, t, i, n) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var s = this,
            o = e;
          o < 0 && (o = 0);
          var a = s.params,
            r = s.snapGrid,
            l = s.slidesGrid,
            d = s.previousIndex,
            u = s.activeIndex,
            p = s.rtlTranslate;
          if (s.animating && a.preventIntercationOnTransition) return !1;
          var h = Math.floor(o / a.slidesPerGroup);
          h >= r.length && (h = r.length - 1), (u || a.initialSlide || 0) === (d || 0) && i && s.emit("beforeSlideChangeStart");
          var f, v = -r[h];
          if (s.updateProgress(v), a.normalizeSlideIndex)
            for (var m = 0; m < l.length; m += 1) - Math.floor(100 * v) >= Math.floor(100 * l[m]) && (o = m);
          if (s.initialized && o !== u) {
            if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
            if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (u || 0) !== o) return !1
          }
          return f = u < o ? "next" : o < u ? "prev" : "reset", p && -v === s.translate || !p && v === s.translate ? (s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(v), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== t && c.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {}), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0)
        },
        slideToLoop: function(e, t, i, n) {},
        slideNext: function(e, t, i) {},
        slidePrev: function(e, t, i) {},
        slideReset: function(e, t, i) {},
        slideToClosest: function(e, t, i) {},
        slideToClickedSlide: function() {}
      },
      m = {
        loopCreate: function() {},
        loopFix: function() {},
        loopDestroy: function() {}
      },
      g = {
        setGrabCursor: function(e) {
          if (!(c.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
            var t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
          }
        },
        unsetGrabCursor: function() {}
      },
      y = {
        appendSlide: function(e) {},
        prependSlide: function(e) {},
        addSlide: function(e, t) {},
        removeSlide: function(e) {},
        removeAllSlides: function() {}
      },
      b = function() {
        var i = t.navigator.userAgent,
          n = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: t.cordova || t.phonegap,
            phonegap: t.cordova || t.phonegap
          },
          s = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          o = i.match(/(Android);?[\s\/]+([\d.]+)?/),
          a = i.match(/(iPad).*OS\s([\d_]+)/),
          r = i.match(/(iPod)(.*OS\s([\d_]+))?/),
          l = !a && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (s && (n.os = "windows", n.osVersion = s[2], n.windows = !0), o && !s && (n.os = "android", n.osVersion = o[2], n.android = !0, n.androidChrome = 0 <= i.toLowerCase().indexOf("chrome")), (a || l || r) && (n.os = "ios", n.ios = !0), l && !r && (n.osVersion = l[2].replace(/_/g, "."), n.iphone = !0), a && (n.osVersion = a[2].replace(/_/g, "."), n.ipad = !0), r && (n.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && 0 <= i.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (l || a || r) && i.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) {
          var d = n.osVersion.split("."),
            c = e.querySelector('meta[name="viewport"]');
          n.minimalUi = !n.webView && (r || l) && (1 * d[0] == 7 ? 1 <= 1 * d[1] : 7 < 1 * d[0]) && c && 0 <= c.getAttribute("content").indexOf("minimal-ui")
        }
        return n.pixelRatio = t.devicePixelRatio || 1, n
      }();

    function w() {}
    var T, x = {
        attachEvents: function() {
          var i = this.params,
            s = this.touchEvents,
            o = this.el,
            a = this.wrapperEl;
          this.onTouchStart = function(i) {}.bind(this), this.onTouchMove = function(t) {}.bind(this), this.onTouchEnd = function(e) {}.bind(this), this.onClick = function(e) {}.bind(this);
          var r = "container" === i.touchEventsTarget ? o : a,
            l = !!i.nested;
          if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
            if (c.touch) {
              var u = !("touchstart" !== s.start || !c.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.addEventListener(s.start, this.onTouchStart, u), r.addEventListener(s.move, this.onTouchMove, c.passiveListener ? {
                passive: !1,
                capture: l
              } : l), r.addEventListener(s.end, this.onTouchEnd, u)
            }(i.simulateTouch && !b.ios && !b.android || i.simulateTouch && !c.touch && b.ios) && (r.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1))
          } else r.addEventListener(s.start, this.onTouchStart, !1), e.addEventListener(s.move, this.onTouchMove, l), e.addEventListener(s.end, this.onTouchEnd, !1);
          (i.preventClicks || i.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0), this.on(b.ios || b.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", w, !0)
        },
        detachEvents: function() {}
      },
      S = {
        setBreakpoint: function() {},
        getBreakpoint: function(e) {}
      },
      C = {
        isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
        isSafari: (T = t.navigator.userAgent.toLowerCase(), 0 <= T.indexOf("safari") && T.indexOf("chrome") < 0 && T.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      },
      k = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventIntercationOnTransition: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
      },
      E = {
        update: h,
        translate: f,
        transition: {
          setTransition: function(e, t) {},
          transitionStart: function(e, t) {},
          transitionEnd: function(e, t) {}
        },
        slide: v,
        loop: m,
        grabCursor: g,
        manipulation: y,
        events: x,
        breakpoints: S,
        checkOverflow: {
          checkOverflow: function() {}
        },
        classes: {
          addClasses: function() {
            var e = this.classNames,
              t = this.params,
              i = this.rtl,
              n = this.$el,
              s = [];
            s.push(t.direction), t.freeMode && s.push("free-mode"), c.flexbox || s.push("no-flexbox"), t.autoHeight && s.push("autoheight"), i && s.push("rtl"), 1 < t.slidesPerColumn && s.push("multirow"), b.android && s.push("android"), b.ios && s.push("ios"), C.isIE && (c.pointerEvents || c.prefixedPointerEvents) && s.push("wp8-" + t.direction), s.forEach(function(i) {
              e.push(t.containerModifierClass + i)
            }), n.addClass(e.join(" "))
          },
          removeClasses: function() {}
        },
        images: {
          loadImage: function(e, i, n, s, o, a) {
            var r;

            function l() {
              a && a()
            }
            e.complete && o ? l() : i ? ((r = new t.Image).onload = l, r.onerror = l, s && (r.sizes = s), n && (r.srcset = n), i && (r.src = i)) : l()
          },
          preloadImages: function() {
            var e = this;

            function t() {
              null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
            }
            e.imagesToLoad = e.$el.find("img");
            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
              var n = e.imagesToLoad[i];
              e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
            }
          }
        }
      },
      $ = {},
      _ = function(e) {
        function t() {
          for (var i, s, o, a = [], r = arguments.length; r--;) a[r] = arguments[r];
          1 === a.length && a[0].constructor && a[0].constructor === Object ? o = a[0] : (s = (i = a)[0], o = i[1]), o || (o = {}), o = d.extend({}, o), s && !o.el && (o.el = s), e.call(this, o), Object.keys(E).forEach(function(e) {
            Object.keys(E[e]).forEach(function(i) {
              t.prototype[i] || (t.prototype[i] = E[e][i])
            })
          });
          var l = this;
          void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
            var t = l.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                n = t.params[i];
              if ("object" != typeof n) return;
              if (!(i in o && "enabled" in n)) return;
              !0 === o[i] && (o[i] = {
                enabled: !0
              }), "object" != typeof o[i] || "enabled" in o[i] || (o[i].enabled = !0), o[i] || (o[i] = {
                enabled: !1
              })
            }
          });
          var u = d.extend({}, k);
          l.useModulesParams(u), l.params = d.extend({}, u, $, o), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, o);
          var p = (l.$ = n)(l.params.el);
          if (s = p[0]) {
            if (1 < p.length) {
              var h = [];
              return p.each(function(e, i) {}), h
            }
            s.swiper = l, p.data("swiper", l);
            var f, v, m = p.children("." + l.params.wrapperClass);
            return d.extend(l, {
              $el: p,
              el: s,
              $wrapperEl: m,
              wrapperEl: m[0],
              classNames: [],
              slides: n(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function() {
                return "horizontal" === l.params.direction
              },
              isVertical: function() {},
              rtl: "rtl" === s.dir.toLowerCase() || "rtl" === p.css("direction"),
              rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === p.css("direction")),
              wrongRTL: "-webkit-box" === m.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents: (f = ["touchstart", "touchmove", "touchend"], v = ["mousedown", "mousemove", "mouseup"], c.pointerEvents ? v = ["pointerdown", "pointermove", "pointerup"] : c.prefixedPointerEvents && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                start: f[0],
                move: f[1],
                end: f[2]
              }, l.touchEventsDesktop = {
                start: v[0],
                move: v[1],
                end: v[2]
              }, c.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: d.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0
            }), l.useModules(), l.params.init && l.init(), l
          }
        }
        e && (t.__proto__ = e);
        var i = {
          extendedDefaults: {
            configurable: !0
          },
          defaults: {
            configurable: !0
          },
          Class: {
            configurable: !0
          },
          $: {
            configurable: !0
          }
        };
        return ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.slidesPerViewDynamic = function() {}, t.prototype.update = function() {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || 1 < e.params.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
          }

          function n() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
          }
        }, t.prototype.init = function() {
          this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
        }, t.prototype.destroy = function(e, t) {}, t.extendDefaults = function(e) {}, i.extendedDefaults.get = function() {}, i.defaults.get = function() {}, i.Class.get = function() {}, i.$.get = function() {}, Object.defineProperties(t, i), t
      }(u),
      M = {
        name: "device",
        proto: {
          device: b
        },
        static: {
          device: b
        }
      },
      N = {
        name: "support",
        proto: {
          support: c
        },
        static: {
          support: c
        }
      },
      A = {
        name: "browser",
        proto: {
          browser: C
        },
        static: {
          browser: C
        }
      },
      L = {
        name: "resize",
        create: function() {
          var e = this;
          d.extend(e, {
            resize: {
              resizeHandler: function() {},
              orientationChangeHandler: function() {}
            }
          })
        },
        on: {
          init: function() {
            t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
          },
          destroy: function() {}
        }
      },
      D = {
        func: t.MutationObserver || t.WebkitMutationObserver,
        attach: function(e, t) {},
        init: function() {
          if (c.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
            this.observer.attach(this.$el[0], {
              childList: !1
            }), this.observer.attach(this.$wrapperEl[0], {
              attributes: !1
            })
          }
        },
        destroy: function() {}
      },
      z = {
        name: "observer",
        params: {
          observer: !1,
          observeParents: !1
        },
        create: function() {
          d.extend(this, {
            observer: {
              init: D.init.bind(this),
              attach: D.attach.bind(this),
              destroy: D.destroy.bind(this),
              observers: []
            }
          })
        },
        on: {
          init: function() {
            this.observer.init()
          },
          destroy: function() {}
        }
      },
      I = {
        update: function(e) {},
        renderSlide: function(e, t) {},
        appendSlide: function(e) {},
        prependSlide: function(e) {}
      },
      P = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null
          }
        },
        create: function() {
          d.extend(this, {
            virtual: {
              update: I.update.bind(this),
              appendSlide: I.appendSlide.bind(this),
              prependSlide: I.prependSlide.bind(this),
              renderSlide: I.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {}
            }
          })
        },
        on: {
          beforeInit: function() {
            if (this.params.virtual.enabled) {
              this.classNames.push(this.params.containerModifierClass + "virtual");
              var e = {
                watchSlidesProgress: !0
              };
              d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update()
            }
          },
          setTranslate: function() {
            this.params.virtual.enabled && this.virtual.update()
          }
        }
      },
      O = {
        handle: function(i) {},
        enable: function() {},
        disable: function() {}
      },
      j = {
        name: "keyboard",
        params: {
          keyboard: {
            enabled: !1,
            onlyInViewport: !0
          }
        },
        create: function() {
          d.extend(this, {
            keyboard: {
              enabled: !1,
              enable: O.enable.bind(this),
              disable: O.disable.bind(this),
              handle: O.handle.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.keyboard.enabled && this.keyboard.enable()
          },
          destroy: function() {}
        }
      },
      H = {
        lastScrollTime: d.now(),
        event: -1 < t.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
          var t = "onwheel" in e;
          if (!t) {
            var i = e.createElement("div");
            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
          }
          return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {},
        handleMouseEnter: function() {},
        handleMouseLeave: function() {},
        handle: function(e) {},
        enable: function() {},
        disable: function() {}
      },
      B = {
        update: function() {
          var e = this.params.navigation;
          if (!this.params.loop) {
            var t = this.navigation,
              i = t.$nextEl,
              n = t.$prevEl;
            n && 0 < n.length && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && 0 < i.length && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
          }
        },
        init: function() {
          var e, t, i = this,
            s = i.params.navigation;
          (s.nextEl || s.prevEl) && (s.nextEl && (e = n(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl && 1 < e.length && 1 === i.$el.find(s.nextEl).length && (e = i.$el.find(s.nextEl))), s.prevEl && (t = n(s.prevEl), i.params.uniqueNavElements && "string" == typeof s.prevEl && 1 < t.length && 1 === i.$el.find(s.prevEl).length && (t = i.$el.find(s.prevEl))), e && 0 < e.length && e.on("click", function(e) {}), t && 0 < t.length && t.on("click", function(e) {}), d.extend(i.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0]
          }))
        },
        destroy: function() {}
      },
      R = {
        update: function() {
          var e = this.rtl,
            t = this.params.pagination;
          if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              o = this.pagination.$el,
              a = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
            if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), a - 1 < i && (i -= a), i < 0 && "bullets" !== this.params.paginationType && (i = a + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && 0 < this.pagination.bullets.length) {
              var r, l, d, c = this.pagination.bullets;
              if (t.dynamicBullets && (this.pagination.bulletSize = c.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), 1 < t.dynamicMainBullets && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), r = i - this.pagination.dynamicBulletIndex, d = ((l = r + (Math.min(c.length, t.dynamicMainBullets) - 1)) + r) / 2), c.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), 1 < o.length) c.each(function(e, s) {});
              else if (c.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var u = c.eq(r), p = c.eq(l), h = r; h <= l; h += 1) c.eq(h).addClass(t.bulletActiveClass + "-main");
                u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), p.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
              }
              if (t.dynamicBullets) {
                var f = Math.min(c.length, t.dynamicMainBullets + 4),
                  v = (this.pagination.bulletSize * f - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                  m = e ? "right" : "left";
                c.css(this.isHorizontal() ? m : "top", v + "px")
              }
            }
            if ("fraction" === t.type && (o.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), o.find("." + t.totalClass).text(t.formatFractionTotal(a))), "progressbar" === t.type) {
              var g;
              g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
              var y = (i + 1) / a,
                b = 1,
                w = 1;
              "horizontal" === g ? b = y : w = y, o.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(this.params.speed)
            }
            "custom" === t.type && t.renderCustom ? (o.html(t.renderCustom(this, i + 1, a)), this.emit("paginationRender", this, o[0])) : this.emit("paginationUpdate", this, o[0]), o[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
          }
        },
        render: function() {
          var e = this.params.pagination;
          if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
            var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
              i = this.pagination.$el,
              n = "";
            if ("bullets" === e.type) {
              for (var s = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, o = 0; o < s; o += 1) e.renderBullet ? n += e.renderBullet.call(this, o, e.bulletClass) : n += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
              i.html(n), this.pagination.bullets = i.find("." + e.bulletClass)
            }
            "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(n)), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(n)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
          }
        },
        init: function() {
          var e = this,
            t = e.params.pagination;
          if (t.el) {
            var i = n(t.el);
            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {}), d.extend(e.pagination, {
              $el: i,
              el: i[0]
            }))
          }
        },
        destroy: function() {}
      },
      F = {
        setTranslate: function() {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = this.rtlTranslate,
              i = this.progress,
              n = e.dragSize,
              s = e.trackSize,
              o = e.$dragEl,
              a = e.$el,
              r = this.params.scrollbar,
              l = n,
              d = (s - n) * i;
            t ? 0 < (d = -d) ? (l = n - d, d = 0) : s < -d + n && (l = s + d) : d < 0 ? (l = n + d, d = 0) : s < d + n && (l = s - d), this.isHorizontal() ? (c.transforms3d ? o.transform("translate3d(" + d + "px, 0, 0)") : o.transform("translateX(" + d + "px)"), o[0].style.width = l + "px") : (c.transforms3d ? o.transform("translate3d(0px, " + d + "px, 0)") : o.transform("translateY(" + d + "px)"), o[0].style.height = l + "px"), r.hide && (clearTimeout(this.scrollbar.timeout), a[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
              a[0].style.opacity = 0, a.transition(400)
            }, 1e3))
          }
        },
        setTransition: function(e) {},
        updateSize: function() {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              t = e.$dragEl,
              i = e.$el;
            t[0].style.width = "", t[0].style.height = "";
            var n, s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              o = this.size / this.virtualSize,
              a = o * (s / this.size);
            n = "auto" === this.params.scrollbar.dragSize ? s * o : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = n + "px" : t[0].style.height = n + "px", i[0].style.display = 1 <= o ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
              trackSize: s,
              divider: o,
              moveDivider: a,
              dragSize: n
            }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
          }
        },
        setDragPosition: function(e) {},
        onDragStart: function(e) {},
        onDragMove: function(e) {},
        onDragEnd: function(e) {},
        enableDraggable: function() {},
        disableDraggable: function() {},
        init: function() {
          if (this.params.scrollbar.el) {
            var e = this.scrollbar,
              t = this.$el,
              i = this.params.scrollbar,
              s = n(i.el);
            this.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === t.find(i.el).length && (s = t.find(i.el));
            var o = s.find("." + this.params.scrollbar.dragClass);
            0 === o.length && (o = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(o)), d.extend(e, {
              $el: s,
              el: s[0],
              $dragEl: o,
              dragEl: o[0]
            }), i.draggable && e.enableDraggable()
          }
        },
        destroy: function() {}
      },
      W = {
        setTransform: function(e, t) {},
        setTranslate: function() {
          var e = this,
            t = e.$el,
            i = e.slides,
            s = e.progress,
            o = e.snapGrid;
          t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {}), i.each(function(t, i) {
            var a = i.progress;
            1 < e.params.slidesPerGroup && "auto" !== e.params.slidesPerView && (a += Math.ceil(t / 2) - s * (o.length - 1)), a = Math.min(Math.max(a, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {})
          })
        },
        setTransition: function(e) {}
      },
      q = {
        getDistanceBetweenTouches: function(e) {},
        onGestureStart: function(e) {},
        onGestureChange: function(e) {},
        onGestureEnd: function(e) {},
        onTouchStart: function(e) {},
        onTouchMove: function(e) {},
        onTouchEnd: function() {},
        onTransitionEnd: function() {},
        toggle: function(e) {},
        in: function(e) {},
        out: function() {},
        enable: function() {},
        disable: function() {}
      },
      X = {
        loadInSlide: function(e, t) {},
        load: function() {}
      },
      G = {
        LinearSpline: function(e, t) {},
        getInterpolateFunction: function(e) {},
        setTranslate: function(e, t) {},
        setTransition: function(e, t) {}
      },
      Y = {
        makeElFocusable: function(e) {
          return e.attr("tabIndex", "0"), e
        },
        addElRole: function(e, t) {
          return e.attr("role", t), e
        },
        addElLabel: function(e, t) {
          return e.attr("aria-label", t), e
        },
        disableEl: function(e) {},
        enableEl: function(e) {},
        onEnterKey: function(e) {},
        notify: function(e) {},
        updateNavigation: function() {
          if (!this.params.loop) {
            var e = this.navigation,
              t = e.$nextEl,
              i = e.$prevEl;
            i && 0 < i.length && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && 0 < t.length && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
          }
        },
        updatePagination: function() {
          var e = this,
            t = e.params.a11y;
          e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, s) {
            var o = n(s);
            e.a11y.makeElFocusable(o), e.a11y.addElRole(o, "button"), e.a11y.addElLabel(o, t.paginationBulletMessage.replace(/{{index}}/, o.index() + 1))
          })
        },
        init: function() {
          this.$el.append(this.a11y.liveRegion);
          var e, t, i = this.params.a11y;
          this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function() {}
      },
      U = {
        init: function() {},
        destroy: function() {},
        setHistoryPopState: function() {},
        getPathValues: function() {},
        setHistory: function(e, i) {},
        slugify: function(e) {},
        scrollToSlide: function(e, t, i) {}
      },
      V = {
        onHashCange: function() {},
        setHash: function() {},
        init: function() {},
        destroy: function() {}
      },
      Q = {
        run: function() {},
        start: function() {},
        stop: function() {},
        pause: function(e) {}
      },
      J = {
        setTranslate: function() {},
        setTransition: function(e) {}
      },
      Z = {
        setTranslate: function() {},
        setTransition: function(e) {}
      },
      K = {
        setTranslate: function() {},
        setTransition: function(e) {}
      },
      ee = {
        setTranslate: function() {},
        setTransition: function(e) {}
      },
      te = [M, N, A, L, z, P, j, {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
          }
        },
        create: function() {
          d.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: H.enable.bind(this),
              disable: H.disable.bind(this),
              handle: H.handle.bind(this),
              handleMouseEnter: H.handleMouseEnter.bind(this),
              handleMouseLeave: H.handleMouseLeave.bind(this),
              lastScrollTime: d.now()
            }
          })
        },
        on: {
          init: function() {
            this.params.mousewheel.enabled && this.mousewheel.enable()
          },
          destroy: function() {}
        }
      }, {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function() {
          d.extend(this, {
            navigation: {
              init: B.init.bind(this),
              update: B.update.bind(this),
              destroy: B.destroy.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.navigation.init(), this.navigation.update()
          },
          toEdge: function() {},
          fromEdge: function() {},
          destroy: function() {},
          click: function(e) {}
        }
      }, {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function(e) {},
            formatFractionTotal: function(e) {},
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function() {
          d.extend(this, {
            pagination: {
              init: R.init.bind(this),
              render: R.render.bind(this),
              update: R.update.bind(this),
              destroy: R.destroy.bind(this),
              dynamicBulletIndex: 0
            }
          })
        },
        on: {
          init: function() {
            this.pagination.init(), this.pagination.render(), this.pagination.update()
          },
          activeIndexChange: function() {},
          snapIndexChange: function() {
            this.params.loop || this.pagination.update()
          },
          slidesLengthChange: function() {
            this.params.loop && (this.pagination.render(), this.pagination.update())
          },
          snapGridLengthChange: function() {
            this.params.loop || (this.pagination.render(), this.pagination.update())
          },
          destroy: function() {},
          click: function(e) {}
        }
      }, {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function() {
          d.extend(this, {
            scrollbar: {
              init: F.init.bind(this),
              destroy: F.destroy.bind(this),
              updateSize: F.updateSize.bind(this),
              setTranslate: F.setTranslate.bind(this),
              setTransition: F.setTransition.bind(this),
              enableDraggable: F.enableDraggable.bind(this),
              disableDraggable: F.disableDraggable.bind(this),
              setDragPosition: F.setDragPosition.bind(this),
              onDragStart: F.onDragStart.bind(this),
              onDragMove: F.onDragMove.bind(this),
              onDragEnd: F.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }
          })
        },
        on: {
          init: function() {
            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
          },
          update: function() {
            this.scrollbar.updateSize()
          },
          resize: function() {},
          observerUpdate: function() {},
          setTranslate: function() {
            this.scrollbar.setTranslate()
          },
          setTransition: function(e) {},
          destroy: function() {}
        }
      }, {
        name: "parallax",
        params: {
          parallax: {
            enabled: !1
          }
        },
        create: function() {
          d.extend(this, {
            parallax: {
              setTransform: W.setTransform.bind(this),
              setTranslate: W.setTranslate.bind(this),
              setTransition: W.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
          },
          init: function() {
            this.params.parallax && this.parallax.setTranslate()
          },
          setTranslate: function() {
            this.params.parallax && this.parallax.setTranslate()
          },
          setTransition: function(e) {}
        }
      }, {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function() {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
            t[i] = q[i].bind(e)
          }), d.extend(e, {
            zoom: t
          })
        },
        on: {
          init: function() {
            this.params.zoom.enabled && this.zoom.enable()
          },
          destroy: function() {},
          touchStart: function(e) {},
          touchEnd: function(e) {},
          doubleTap: function(e) {},
          transitionEnd: function() {}
        }
      }, {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function() {
          d.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: X.load.bind(this),
              loadInSlide: X.loadInSlide.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
          },
          init: function() {
            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
          },
          scroll: function() {},
          resize: function() {},
          scrollbarDragMove: function() {},
          transitionStart: function() {},
          transitionEnd: function() {}
        }
      }, {
        name: "controller",
        params: {
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        },
        create: function() {
          d.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: G.getInterpolateFunction.bind(this),
              setTranslate: G.setTranslate.bind(this),
              setTransition: G.setTransition.bind(this)
            }
          })
        },
        on: {
          update: function() {
            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
          },
          resize: function() {},
          observerUpdate: function() {},
          setTranslate: function(e, t) {
            this.controller.control && this.controller.setTranslate(e, t)
          },
          setTransition: function(e, t) {}
        }
      }, {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
          }
        },
        create: function() {
          var e = this;
          d.extend(e, {
            a11y: {
              liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
            }
          }), Object.keys(Y).forEach(function(t) {
            e.a11y[t] = Y[t].bind(e)
          })
        },
        on: {
          init: function() {
            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
          },
          toEdge: function() {},
          fromEdge: function() {},
          paginationUpdate: function() {
            this.params.a11y.enabled && this.a11y.updatePagination()
          },
          destroy: function() {}
        }
      }, {
        name: "history",
        params: {
          history: {
            enabled: !1,
            replaceState: !1,
            key: "slides"
          }
        },
        create: function() {
          d.extend(this, {
            history: {
              init: U.init.bind(this),
              setHistory: U.setHistory.bind(this),
              setHistoryPopState: U.setHistoryPopState.bind(this),
              scrollToSlide: U.scrollToSlide.bind(this),
              destroy: U.destroy.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.history.enabled && this.history.init()
          },
          destroy: function() {},
          transitionEnd: function() {}
        }
      }, {
        name: "hash-navigation",
        params: {
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1
          }
        },
        create: function() {
          d.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: V.init.bind(this),
              destroy: V.destroy.bind(this),
              setHash: V.setHash.bind(this),
              onHashCange: V.onHashCange.bind(this)
            }
          })
        },
        on: {
          init: function() {
            this.params.hashNavigation.enabled && this.hashNavigation.init()
          },
          destroy: function() {},
          transitionEnd: function() {}
        }
      }, {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
          }
        },
        create: function() {
          var e = this;
          d.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: Q.run.bind(e),
              start: Q.start.bind(e),
              stop: Q.stop.bind(e),
              pause: Q.pause.bind(e),
              onTransitionEnd: function(t) {}
            }
          })
        },
        on: {
          init: function() {
            this.params.autoplay.enabled && this.autoplay.start()
          },
          beforeTransitionStart: function(e, t) {},
          sliderFirstMove: function() {},
          destroy: function() {}
        }
      }, {
        name: "effect-fade",
        params: {
          fadeEffect: {
            crossFade: !1
          }
        },
        create: function() {
          d.extend(this, {
            fadeEffect: {
              setTranslate: J.setTranslate.bind(this),
              setTransition: J.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              d.extend(this.params, e), d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "fade" === this.params.effect && this.fadeEffect.setTranslate()
          },
          setTransition: function(e) {}
        }
      }, {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
          }
        },
        create: function() {
          d.extend(this, {
            cubeEffect: {
              setTranslate: Z.setTranslate.bind(this),
              setTransition: Z.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("cube" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              d.extend(this.params, e), d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "cube" === this.params.effect && this.cubeEffect.setTranslate()
          },
          setTransition: function(e) {}
        }
      }, {
        name: "effect-flip",
        params: {
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0
          }
        },
        create: function() {
          d.extend(this, {
            flipEffect: {
              setTranslate: K.setTranslate.bind(this),
              setTransition: K.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            if ("flip" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              d.extend(this.params, e), d.extend(this.originalParams, e)
            }
          },
          setTranslate: function() {
            "flip" === this.params.effect && this.flipEffect.setTranslate()
          },
          setTransition: function(e) {}
        }
      }, {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        },
        create: function() {
          d.extend(this, {
            coverflowEffect: {
              setTranslate: ee.setTranslate.bind(this),
              setTransition: ee.setTransition.bind(this)
            }
          })
        },
        on: {
          beforeInit: function() {
            "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
          },
          setTranslate: function() {
            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
          },
          setTransition: function(e) {}
        }
      }];
    return void 0 === _.use && (_.use = _.Class.use, _.installModule = _.Class.installModule), _.use(te), _
  }),
  function(e) {
    "use strict";
    e.jscroll = {
      defaults: {
        debug: !1,
        autoTrigger: !0,
        autoTriggerUntil: !1,
        loadingHtml: "<small>Loading...</small>",
        padding: 0,
        nextSelector: "a:last",
        contentSelector: "",
        pagingSelector: "",
        callback: !1
      }
    };
    var t = function(t, i) {
      var n, s = t.data("jscroll"),
        o = "function" == typeof i ? {
          callback: i
        } : i,
        a = e.extend({}, e.jscroll.defaults, o, s || {}),
        r = "visible" === t.css("overflow-y"),
        l = t.find(a.nextSelector).first(),
        d = e(window),
        c = e("body"),
        u = r ? d : t,
        p = e.trim(l.attr("href") + " " + a.contentSelector),
        h = function() {
          t.find(".jscroll-inner").length || t.contents().wrapAll('<div class="jscroll-inner" />')
        },
        f = function(e) {},
        v = function() {},
        m = function() {},
        g = function() {
          var e = t.find(a.nextSelector).first();
          a.autoTrigger && (!1 === a.autoTriggerUntil || 0 < a.autoTriggerUntil) ? (f(e), c.height() <= d.height() && m(), u.unbind(".jscroll").bind("scroll.jscroll", function() {}), 0 < a.autoTriggerUntil && a.autoTriggerUntil--) : (u.unbind(".jscroll"), e.bind("click.jscroll", function() {}))
        },
        y = function() {},
        b = function(e) {};
      return t.data("jscroll", e.extend({}, s, {
        initialized: !0,
        waiting: !1,
        nextHref: p
      })), h(), (n = e(a.loadingHtml).filter("img").attr("src")) && ((new Image).src = n), g(), e.extend(t.jscroll, {
        destroy: v
      }), t
    };
    e.fn.jscroll = function(i) {
      return this.each(function() {
        var n = e(this),
          s = n.data("jscroll");
        s && s.initialized || new t(n, i)
      })
    }
  }(jQuery),
  function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
  }(function(e) {
    e.timeago = function(t) {};
    var t = e.timeago;
    e.extend(e.timeago, {
      settings: {
        refreshMillis: 6e4,
        allowPast: !0,
        allowFuture: !1,
        localeTitle: !1,
        cutoff: 0,
        strings: {
          prefixAgo: null,
          prefixFromNow: null,
          suffixAgo: "ago",
          suffixFromNow: "from now",
          inPast: "any moment now",
          seconds: "less than a minute",
          minute: "about a minute",
          minutes: "%d minutes",
          hour: "about an hour",
          hours: "about %d hours",
          day: "a day",
          days: "%d days",
          month: "about a month",
          months: "%d months",
          year: "about a year",
          years: "%d years",
          wordSeparator: " ",
          numbers: []
        }
      },
      inWords: function(t) {},
      parse: function(t) {},
      datetime: function(i) {},
      isTime: function(t) {}
    });
    var i = {
      init: function() {},
      update: function(i) {},
      updateFromDOM: function() {},
      dispose: function() {}
    };

    function n() {}

    function s(e) {}

    function o(e) {}
    e.fn.timeago = function(e, t) {}, document.createElement("abbr"), document.createElement("time")
  }), jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "",
    suffixFromNow: "dari sekarang",
    seconds: "baru saja",
    minute: "satu menit lalu",
    minutes: "%d menit",
    hour: "1 jam lalu",
    hours: "%d jam lalu",
    day: "kemarin",
    days: "%d hari lalu",
    month: "sebulan lalu",
    months: "%d bulan lalu",
    year: "setahun lalu",
    years: "%d tahun lalu"
  },
  function(e) {
    e.fn.ratingWidget = function(t) {}
  }(jQuery),
  function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
  }(function(e) {
    var t = /\+/g;

    function i(e) {}

    function n(i, n) {}
    var s = e.cookie = function(t, o, a) {};
    s.defaults = {}, e.removeCookie = function(t, i) {}
  }), waShBtn = function() {
    !0 === this.isIos && this.cntLdd(window, this.crBtn)
  }, waShBtn.prototype.isIos = !(!navigator.userAgent.match(/Android|iPhone/i) || navigator.userAgent.match(/iPod|iPad/i)), waShBtn.prototype.cntLdd = function(e, t) {}, waShBtn.prototype.addStyling = function() {}, waShBtn.prototype.crBtn = function() {};
var theWaShBtn = new waShBtn;
! function(e) {
  var t = {
    height: 500,
    width: 500,
    toolbar: !1,
    scrollbars: !1,
    status: !1,
    resizable: !1,
    left: 0,
    top: 0,
    center: !0,
    createNew: !0,
    name: null,
    location: !1,
    menubar: !1,
    onUnload: null
  };
  e.popupWindow = function(i, n) {}
}(jQuery),
function(e) {
  e.fn.JPathner = function(t) {}
}(jQuery);
var adzan_schedule = [],
  pop_duration = 900,
  sound_duration = 300;
adzan_schedule[0] = [], adzan_schedule[1] = ["2017-06-01T04:36+07:00", "2017-06-01T11:54+07:00", "2017-06-01T15:14+07:00", "2017-06-01T17:46+07:00", "2017-06-01T19:00+07:00"], adzan_schedule[2] = ["2017-06-02T04:36+07:00", "2017-06-02T11:54+07:00", "2017-06-02T15:14+07:00", "2017-06-02T17:46+07:00", "2017-06-02T19:00+07:00"], adzan_schedule[3] = ["2017-06-03T04:36+07:00", "2017-06-03T11:54+07:00", "2017-06-03T15:14+07:00", "2017-06-03T17:46+07:00", "2017-06-03T19:00+07:00"], adzan_schedule[4] = ["2017-06-04T04:36+07:00", "2017-06-04T11:54+07:00", "2017-06-04T15:15+07:00", "2017-06-04T17:46+07:00", "2017-06-04T19:00+07:00"], adzan_schedule[5] = ["2017-06-05T04:36+07:00", "2017-06-05T11:55+07:00", "2017-06-05T15:15+07:00", "2017-06-05T17:46+07:00", "2017-06-05T19:00+07:00"], adzan_schedule[6] = ["2017-06-06T04:36+07:00", "2017-06-06T11:55+07:00", "2017-06-06T15:15+07:00", "2017-06-06T17:46+07:00", "2017-06-06T19:01+07:00"], adzan_schedule[7] = ["2017-06-07T04:36+07:00", "2017-06-07T11:55+07:00", "2017-06-07T15:15+07:00", "2017-06-07T17:46+07:00", "2017-06-07T19:01+07:00"], adzan_schedule[8] = ["2017-06-08T04:37+07:00", "2017-06-08T11:55+07:00", "2017-06-08T15:15+07:00", "2017-06-08T17:47+07:00", "2017-06-08T19:01+07:00"], adzan_schedule[9] = ["2017-06-09T04:37+07:00", "2017-06-09T11:55+07:00", "2017-06-09T15:15+07:00", "2017-06-09T17:47+07:00", "2017-06-09T19:01+07:00"], adzan_schedule[10] = ["2017-06-10T04:37+07:00", "2017-06-10T11:56+07:00", "2017-06-10T15:16+07:00", "2017-06-10T17:47+07:00", "2017-06-10T19:01+07:00"], adzan_schedule[11] = ["2017-06-11T04:37+07:00", "2017-06-11T11:56+07:00", "2017-06-11T15:16+07:00", "2017-06-11T17:47+07:00", "2017-06-11T19:02+07:00"], adzan_schedule[12] = ["2017-06-12T04:37+07:00", "2017-06-12T11:56+07:00", "2017-06-12T15:16+07:00", "2017-06-12T17:47+07:00", "2017-06-12T19:02+07:00"], adzan_schedule[13] = ["2017-06-13T04:38+07:00", "2017-06-13T11:56+07:00", "2017-06-13T15:16+07:00", "2017-06-13T17:47+07:00", "2017-06-13T19:02+07:00"], adzan_schedule[14] = ["2017-06-14T04:38+07:00", "2017-06-14T11:56+07:00", "2017-06-14T15:16+07:00", "2017-06-14T17:48+07:00", "2017-06-14T19:02+07:00"], adzan_schedule[15] = ["2017-06-15T04:38+07:00", "2017-06-15T11:57+07:00", "2017-06-15T15:17+07:00", "2017-06-15T17:48+07:00", "2017-06-15T19:02+07:00"], adzan_schedule[16] = ["2017-06-16T04:38+07:00", "2017-06-16T11:57+07:00", "2017-06-16T15:17+07:00", "2017-06-16T17:48+07:00", "2017-06-16T19:03+07:00"], adzan_schedule[17] = ["2017-06-17T04:38+07:00", "2017-06-17T11:57+07:00", "2017-06-17T15:17+07:00", "2017-06-17T17:48+07:00", "2017-06-17T19:03+07:00"], adzan_schedule[18] = ["2017-06-18T04:39+07:00", "2017-06-18T11:57+07:00", "2017-06-18T15:17+07:00", "2017-06-18T17:48+07:00", "2017-06-18T19:03+07:00"], adzan_schedule[19] = ["2017-06-19T04:39+07:00", "2017-06-19T11:57+07:00", "2017-06-19T15:17+07:00", "2017-06-19T17:49+07:00", "2017-06-19T19:03+07:00"], adzan_schedule[20] = ["2017-06-20T04:39+07:00", "2017-06-20T11:58+07:00", "2017-06-20T15:18+07:00", "2017-06-20T17:49+07:00", "2017-06-20T19:04+07:00"], adzan_schedule[21] = ["2017-06-21T04:39+07:00", "2017-06-21T11:58+07:00", "2017-06-21T15:18+07:00", "2017-06-21T17:49+07:00", "2017-06-21T19:04+07:00"], adzan_schedule[22] = ["2017-06-22T04:40+07:00", "2017-06-22T11:58+07:00", "2017-06-22T15:18+07:00", "2017-06-22T17:49+07:00", "2017-06-22T19:04+07:00"], adzan_schedule[23] = ["2017-06-23T04:40+07:00", "2017-06-23T11:58+07:00", "2017-06-23T15:18+07:00", "2017-06-23T17:49+07:00", "2017-06-23T19:04+07:00"], adzan_schedule[24] = ["2017-06-24T04:40+07:00", "2017-06-24T11:59+07:00", "2017-06-24T15:19+07:00", "2017-06-24T17:50+07:00", "2017-06-24T19:04+07:00"], adzan_schedule[25] = [], adzan_schedule[26] = [], adzan_schedule[27] = ["2017-05-27T04:35+07:00", "2017-05-27T11:53+07:00", "2017-05-27T15:13+07:00", "2017-05-27T17:45+07:00", "2017-05-27T18:59+07:00"], adzan_schedule[28] = ["2017-05-28T04:35+07:00", "2017-05-28T11:53+07:00", "2017-05-28T15:14+07:00", "2017-05-28T17:45+07:00", "2017-05-28T18:59+07:00"], adzan_schedule[29] = ["2017-05-29T04:35+07:00", "2017-05-29T11:54+07:00", "2017-05-29T15:14+07:00", "2017-05-29T17:46+07:00", "2017-05-29T18:59+07:00"], adzan_schedule[30] = ["2017-05-30T04:35+07:00", "2017-05-30T11:54+07:00", "2017-05-30T15:14+07:00", "2017-05-30T17:46+07:00", "2017-05-30T18:59+07:00"], adzan_schedule[31] = ["2017-05-31T04:35+07:00", "2017-05-31T11:54+07:00", "2017-05-31T15:14+07:00", "2017-05-31T17:46+07:00", "2017-05-31T19:00+07:00"];
var adzan_image = [];
adzan_image[0] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/subuh.png", adzan_image[1] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/dzuhur.png", adzan_image[2] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/ashar.png", adzan_image[3] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/maghrib.png", adzan_image[4] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/isya.png";
var adzan_mobile_image = [];

function togglelog() {}
adzan_mobile_image[0] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-subuh.png", adzan_mobile_image[1] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-dzuhur.png", adzan_mobile_image[2] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-ashar.png", adzan_mobile_image[3] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-maghrib.png", adzan_mobile_image[4] = "https://cdn.okezone.com/underwood/ads/timesignal-adzan/mobile/m-isya.png",
  function() {
    "use strict";
    var e = function() {
      this.init()
    };
    e.prototype = {
      init: function() {
        var e = this || t;
        return e._counter = 0, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e
      },
      volume: function(e) {},
      mute: function(e) {},
      unload: function() {},
      codecs: function(e) {},
      _setup: function() {
        var e = this || t;
        if (e.state = e.ctx && e.ctx.state || "running", e._autoSuspend(), !e.usingWebAudio)
          if ("undefined" != typeof Audio) try {
            void 0 === (i = new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
          } catch (i) {
            e.noAudio = !0
          } else e.noAudio = !0;
        try {
          var i = new Audio;
          i.muted && (e.noAudio = !0)
        } catch (e) {}
        return e.noAudio || e._setupCodecs(), e
      },
      _setupCodecs: function() {
        var e = this || t,
          i = null;
        try {
          i = "undefined" != typeof Audio ? new Audio : null
        } catch (i) {
          return e
        }
        if (!i || "function" != typeof i.canPlayType) return e;
        var n = i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          s = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
          o = s && parseInt(s[0].split("/")[1], 10) < 33;
        return e._codecs = {
          mp3: !(o || !n && !i.canPlayType("audio/mp3;").replace(/^no$/, "")),
          mpeg: !!n,
          opus: !!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          oga: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          wav: !!i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
          aac: !!i.canPlayType("audio/aac;").replace(/^no$/, ""),
          caf: !!i.canPlayType("audio/x-caf;").replace(/^no$/, ""),
          m4a: !!(i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
          mp4: !!(i.canPlayType("audio/x-mp4;") || i.canPlayType("audio/mp4;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
          weba: !!i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
          webm: !!i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
          dolby: !!i.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
          flac: !!(i.canPlayType("audio/x-flac;") || i.canPlayType("audio/flac;")).replace(/^no$/, "")
        }, e
      },
      _enableMobileAudio: function() {},
      _autoSuspend: function() {
        var e = this;
        if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && t.usingWebAudio) {
          for (var i = 0; i < e._howls.length; i++)
            if (e._howls[i]._webAudio)
              for (var n = 0; n < e._howls[i]._sounds.length; n++)
                if (!e._howls[i]._sounds[n]._paused) return e;
          return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {}, 3e4), e
        }
      },
      _autoResume: function() {}
    };
    var t = new e,
      i = function(e) {};
    i.prototype = {
      init: function(e) {},
      load: function() {},
      play: function(e, i) {},
      pause: function(e) {},
      stop: function(e, t) {},
      mute: function(e, i) {},
      volume: function() {},
      fade: function(e, i, n, s) {},
      _stopFade: function(e) {},
      loop: function() {},
      rate: function() {},
      seek: function() {},
      playing: function(e) {},
      duration: function(e) {},
      state: function() {},
      unload: function() {},
      on: function(e, t, i, n) {},
      off: function(e, t, i) {},
      once: function(e, t, i) {},
      _emit: function(e, t, i) {},
      _loadQueue: function() {},
      _ended: function(e) {},
      _clearTimer: function(e) {},
      _soundById: function(e) {},
      _inactiveSound: function() {},
      _drain: function() {},
      _getSoundIds: function(e) {},
      _refreshBuffer: function(e) {},
      _cleanBuffer: function(e) {}
    };
    var n = function(e) {};
    n.prototype = {
      init: function() {},
      create: function() {},
      reset: function() {},
      _errorListener: function() {},
      _loadListener: function() {}
    };
    var s = {},
      o = function(e) {},
      a = function(e) {},
      r = function(e, i) {},
      l = function(e, t) {},
      d = function() {};
    "function" == typeof define && define.amd && define([], function() {}), "undefined" != typeof exports && (exports.Howler = t, exports.Howl = i), "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = t, window.Howl = i, window.Sound = n) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = t, global.Howl = i, global.Sound = n)
  }(), $(".opennavbarbtn").click(function(e) {}), $(".searchbtn").click(function(e) {}), $(".hopopmenu, .navbarmenu__close").click(function() {}), $(".adsheader .close").click(function() {}), $(".adsheader2 .close").click(function() {}), $(".adssearch .close").click(function() {}), $(".notif .close").click(function() {});
var allPanels = $("#menu ul li ul").hide(),
  wh = $(window).outerHeight() - 89,
  h = $("#head").outerHeight(),
  s = $(".search").outerHeight();
if ($(".heddermenu").data("size", "big"), $("a.kerat").click(function(e) {}), $(".exp-ads").click(function() {}), $("span.caption").click(function() {}), $(".listto").jscroll({
    autoTrigger: !1,
    loadingHtml: '<div class="loader" style="text-align: center;"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>'
  }), $(".morecomment").jscroll({
    autoTrigger: !1,
    loadingHtml: '<div class="loader" style="text-align: center;"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>'
  }), $("#area").jscroll({
    autoTrigger: !1,
    loadingHtml: '<div class="loader"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>',
    nextSelector: "a.btn-lmorex:last"
  }), $(document).on("click", ".minus", function() {}), $(document).on("click", ".normal", function() {}), $(document).on("click", ".plusx", function() {}), $(".he .min").click(function() {}), $(".he .plus").click(function() {}), $(".fo .min").click(function() {}), $(".fo .plus").click(function() {}), $(".top").length) {
  var offsetTop = 300;

  function scroll_top() {}

  function scrollClass(e, t, i) {}
  $(window).on("scroll", scroll_top), $(".top").on("click", function(e) {})
}
$(".sisa").html(250), $(".isikomen").keyup(function() {}), $(".more").each(function() {
  var e = $(this).html();
  if (72 < e.length) {
    var t = e.substr(0, 72) + '<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>' + e.substr(72, e.length - 72) + '</span>&nbsp;&nbsp;<a href="" class="morelink">More</a></span>';
    $(this).html(t)
  }
}), $(".morelink").click(function() {}), $(".btntuliskomentar").click(function() {}), $("a.linkname").click(function() {}), $("#submitt").click(function() {}), $(".closepop").click(function() {}), $(".bgpop.muncul").click(function() {});
var e = 15;
if (s = setInterval(function() {
    if (--e <= 0) return clearInterval(s), $(".bgpop").removeClass("muncul"), void $(".popup").removeClass("muncul");
    $(".timer").html(e)
  }, 1e3), $(".btn-cls").click(function(e) {}), $(".ads-bottom-fixed2 .btn-cls").click(function(e) {}), $(".popupfullscreen .close").click(function(e) {}), $(".klakson").on("click", ".plus", function(e) {}), $(window).scroll(function(e) {}), $(".opennavbarbtn-sticky").click(function(e) {}), $(".overlaysticky").click(function(e) {}), $(".wraptops-menu").length) {
  var navTop = $(".cnt-menu").offset().top + 40;

  function scroll_header() {}

  function scrollClass(e, t, i) {}
  $(window).on("scroll", scroll_header)
}
$(".btn-cls").click(function() {}), $(".searchbtn").click(function() {});
var swiper = new Swiper(".swiper-container--page", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination",
      clickable: !0
    }
  }),
  swiperNo = new Swiper(".swiper-container--nopage", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination2",
      clickable: !0
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: !0
    }
  }),
  swiperTrending = new Swiper(".swiper-container--trending", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination3",
      clickable: !0
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: !0
    }
  }),
  swiperEditor = new Swiper(".swiper-container--editor", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination4",
      clickable: !0
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: !0
    }
  });

function swiperRecommendation() {
  new Swiper(".swiper-container--rekomendasi", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: !0,
    pagination: {
      el: ".swiper-pagination__counter",
      type: "fraction"
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: !0
    }
  })
}
swiperRecommendation(),
  function(e, t) {
    "function" == typeof define && define.amd ? define(["exports"], t) : "undefined" != typeof exports ? t(exports) : t(e.dragscroll = {})
  }(this, function(e) {
    var t, i, n = window,
      s = document,
      o = "EventListener",
      a = "add" + o,
      r = "remove" + o,
      l = [],
      d = function(e, o) {
        for (e = 0; e < l.length;)(o = (o = l[e++]).container || o)[r]("mousedown", o.md, 0), n[r]("mouseup", o.mu, 0), n[r]("mousemove", o.mm, 0);
        for (l = [].slice.call(s.getElementsByClassName("dragscroll")), e = 0; e < l.length;) ! function(e, o, r, l, d, c) {
          (c = e.container || e)[a]("mousedown", c.md = function(t) {}, 0), n[a]("mouseup", c.mu = function() {}, 0), n[a]("mousemove", c.mm = function(n) {}, 0)
        }(l[e++])
      };
    "complete" == s.readyState ? d() : n[a]("load", d, 0), e.reset = d
  });
var SETTINGS = {
  navBarTravelling: !1,
  navBarTravelDirection: "",
  navBarTravelDistance: 150
};
document.documentElement.classList.remove("no-js"), document.documentElement.classList.add("js");
var pnAdvancerLeft = document.getElementById("arr-left"),
  pnAdvancerRight = document.getElementById("arr-right"),
  pnIndicator = document.getElementById("OkzIndicator"),
  pnProductNav = document.getElementById("OkzNav"),
  pnProductNavContents = document.getElementById("OkzNavContents");
pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
var last_known_scroll_position = 0,
  ticking = !1;

function doSomething(e) {}

function moveIndicator(e, t) {}

function determineOverflow(e, t) {
  var i = t.getBoundingClientRect(),
    n = Math.floor(i.right),
    s = Math.floor(i.left),
    o = e.getBoundingClientRect(),
    a = Math.floor(o.right),
    r = Math.floor(o.left);
  return r < s && n < a ? "both" : r < s ? "left" : n < a ? "right" : "none"
}
if (pnProductNav.addEventListener("scroll", function() {}), pnAdvancerLeft && pnAdvancerLeft.addEventListener("click", function() {}), pnAdvancerRight && pnAdvancerRight.addEventListener("click", function() {}), pnProductNavContents.addEventListener("transitionend", function() {}, !1), $(".mheadlinemore").on("click", function() {}), $(".btn--hide").on("click", function() {}), $(".title-onstick").length && $(".title-onstick").stick_in_parent({
    parent: "[data-sticky_parent]",
    offset_top: 50,
    recalc_every: 10,
    inner_scrolling: !1
  }), $(document).click(function() {}), $(document).on("click", ".prayer-link", function(e) {}), $(".prayer-head__slider").length) var swiperPrayer = new Swiper(".prayer-head__slider", {
  autoplay: {
    delay: 3e3
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".prayer-head__next"
  }
});
if ($(".swiper-pilkada").length) var pilkadaSwiper = new Swiper(".swiper-pilkada", {
  slidesPerView: "auto",
  autoHeight: !0,
  autoplay: {
    delay: 5e3,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: !0
  }
});
$(document).ready(function() {
  $(".newfloating").fadeIn(), $(".popup iframe").fadeIn(), $(".bgpopup").fadeIn(), $(".closepop").fadeIn(), $(".closepop").bind("click", function() {}), $(".bgpopup.kelos").bind("click", function() {});
  var e = 20,
    t = setInterval(function() {
      if (--e <= 0) return clearInterval(t), void $(parent.document).find(".floating-popup").remove()
    }, 1e3)
}), "undefined" != typeof utm_pushtrack ? null !== utm_pushtrack && $.ajax({
  url: "https://webpush.okezone.com/administrator/auth_push/auth_utm",
  type: "POST",
  data: {
    tracking: utm_pushtrack
  },
  success: function(e) {}
}) : console.log("No UTM");
var TabBlock = {
  s: {
    animLen: 200
  },
  initY: function() {
    TabBlock.bindUIActions(), TabBlock.hideInactive()
  },
  bindUIActions: function() {
    $(".tabBlock-tabs").on("click", ".tabBlock-tab", function() {})
  },
  hideInactive: function() {
    var e = $(".tabBlock");
    e.each(function(t) {})
  },
  switchTab: function(e) {},
  showPane: function(e, t) {}
};
$(function() {
    TabBlock.initY()
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
  }(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
      var t = 0;
      return function(i, n) {}
    }()).prototype.activateADA = function() {}, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {}, t.prototype.animateHeight = function() {}, t.prototype.animateSlide = function(t, i) {}, t.prototype.getNavTarget = function() {}, t.prototype.asNavFor = function(t) {}, t.prototype.applyTransition = function(e) {}, t.prototype.autoPlay = function() {}, t.prototype.autoPlayClear = function() {}, t.prototype.autoPlayIterator = function() {}, t.prototype.buildArrows = function() {}, t.prototype.buildDots = function() {}, t.prototype.buildOut = function() {}, t.prototype.buildRows = function() {}, t.prototype.checkResponsive = function(t, i) {}, t.prototype.changeSlide = function(t, i) {}, t.prototype.checkNavigable = function(e) {}, t.prototype.cleanUpEvents = function() {}, t.prototype.cleanUpSlideEvents = function() {}, t.prototype.cleanUpRows = function() {}, t.prototype.clickHandler = function(e) {}, t.prototype.destroy = function(t) {}, t.prototype.disableTransition = function(e) {}, t.prototype.fadeSlide = function(e, t) {}, t.prototype.fadeSlideOut = function(e) {}, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {}, t.prototype.focusHandler = function() {}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {}, t.prototype.getDotCount = function() {}, t.prototype.getLeft = function(e) {}, t.prototype.getOption = t.prototype.slickGetOption = function(e) {}, t.prototype.getNavigableIndexes = function() {}, t.prototype.getSlick = function() {}, t.prototype.getSlideCount = function() {}, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {}, t.prototype.init = function(t) {}, t.prototype.initADA = function() {}, t.prototype.initArrowEvents = function() {}, t.prototype.initDotEvents = function() {}, t.prototype.initSlideEvents = function() {}, t.prototype.initializeEvents = function() {}, t.prototype.initUI = function() {}, t.prototype.keyHandler = function(e) {}, t.prototype.lazyLoad = function() {}, t.prototype.loadSlider = function() {}, t.prototype.next = t.prototype.slickNext = function() {}, t.prototype.orientationChange = function() {}, t.prototype.pause = t.prototype.slickPause = function() {}, t.prototype.play = t.prototype.slickPlay = function() {}, t.prototype.postSlide = function(t) {}, t.prototype.prev = t.prototype.slickPrev = function() {}, t.prototype.preventDefault = function(e) {}, t.prototype.progressiveLazyLoad = function(t) {}, t.prototype.refresh = function(t) {}, t.prototype.registerBreakpoints = function() {}, t.prototype.reinit = function() {}, t.prototype.resize = function() {}, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {}, t.prototype.setCSS = function(e) {}, t.prototype.setDimensions = function() {}, t.prototype.setFade = function() {}, t.prototype.setHeight = function() {}, t.prototype.setOption = t.prototype.slickSetOption = function() {}, t.prototype.setPosition = function() {}, t.prototype.setProps = function() {}, t.prototype.setSlideClasses = function(e) {}, t.prototype.setupInfinite = function() {}, t.prototype.interrupt = function(e) {}, t.prototype.selectHandler = function(t) {}, t.prototype.slideHandler = function(e, t, i) {}, t.prototype.startLoad = function() {}, t.prototype.swipeDirection = function() {}, t.prototype.swipeEnd = function(e) {}, t.prototype.swipeHandler = function(e) {}, t.prototype.swipeMove = function(e) {}, t.prototype.swipeStart = function(e) {}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {}, t.prototype.unload = function() {}, t.prototype.unslick = function(e) {}, t.prototype.updateArrows = function() {}, t.prototype.updateDots = function() {}, t.prototype.visibility = function() {}, e.fn.slick = function() {}
  });
var swiperPilpres = new Swiper(".swiper-container--pilpres", {
  slidesPerView: "auto",
  spaceBetween: 10,
  grabCursor: !0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination-pilpres",
    clickable: !0
  }
});