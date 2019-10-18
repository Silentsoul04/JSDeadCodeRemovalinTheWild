/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};

  function p(a, b) {}
  var q = "3.2.1",
    r = function(a, b) {
      return new r.fn.init(a, b)
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function(a, b) {};
  r.fn = r.prototype = {
    jquery: q,
    constructor: r,
    length: 0,
    toArray: function() {},
    get: function(a) {},
    pushStack: function(a) {
      var b = r.merge(this.constructor(), a);
      return b.prevObject = this, b
    },
    each: function(a) {
      return r.each(this, a)
    },
    map: function(a) {},
    slice: function() {},
    first: function() {},
    last: function() {},
    eq: function(a) {},
    end: function() {},
    push: h,
    sort: c.sort,
    splice: c.splice
  }, r.extend = r.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, r.extend({
    expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {},
    noop: function() {},
    isFunction: function(a) {
      return "function" === r.type(a)
    },
    isWindow: function(a) {
      return null != a && a === a.window
    },
    isNumeric: function(a) {},
    isPlainObject: function(a) {
      var b, c;
      return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
    },
    isEmptyObject: function(a) {},
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
    },
    globalEval: function(a) {},
    camelCase: function(a) {
      return a.replace(t, "ms-").replace(u, v)
    },
    each: function(a, b) {
      var c, d = 0;
      if (w(a)) {
        for (c = a.length; d < c; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function(a) {},
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
    },
    inArray: function(a, b, c) {},
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function(a, b, c) {},
    map: function(a, b, c) {},
    guid: 1,
    proxy: function(a, b) {},
    now: Date.now,
    support: o
  }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
    j["[object " + b + "]"] = b.toLowerCase()
  });

  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
  }
  var x = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function(a, b) {},
      J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
      N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function(a, b, c) {},
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function(a, b) {},
      da = function() {},
      ea = ta(function(a) {}, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
    } catch (fa) {
      G = {
        apply: D.length ? function(a, b) {} : function(a, b) {}
      }
    }

    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a)))
          if (f = l[1]) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
          }
          if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d
          } catch (x) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(P, "$1"), b, d, e)
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ia(a) {
      return a[u] = !0, a
    }

    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ka(a, b) {}

    function la(a, b) {}

    function ma(a) {
      return function(b) {}
    }

    function na(a) {
      return function(b) {}
    }

    function oa(a) {
      return function(b) {}
    }

    function pa(a) {
      return ia(function(b) {})
    }

    function qa(a) {}
    c = ga.support = {}, f = ga.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return !!b && "HTML" !== b.nodeName
    }, m = ga.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ja(function(a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.filter.ID = function(a) {}, d.find.ID = function(a, b) {}) : (d.filter.ID = function(a) {}, d.find.ID = function(a, b) {}), d.find.TAG = c.getElementsByTagName ? function(a, b) {} : function(a, b) {}, d.find.CLASS = c.getElementsByClassName && function(a, b) {}, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ja(function(a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {} : function(a, b) {}, B = b ? function(a, b) {} : function(a, b) {}, n) : n
    }, ga.matches = function(a, b) {}, ga.matchesSelector = function(a, b) {}, ga.contains = function(a, b) {}, ga.attr = function(a, b) {}, ga.escape = function(a) {}, ga.error = function(a) {}, ga.uniqueSort = function(a) {}, e = ga.getText = function(a) {}, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
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
        ATTR: function(a) {},
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
        },
        PSEUDO: function(a) {}
      },
      filter: {
        TAG: function(a) {},
        CLASS: function(a) {},
        ATTR: function(a, b, c) {},
        CHILD: function(a, b, c, d, e) {},
        PSEUDO: function(a, b) {}
      },
      pseudos: {
        not: ia(function(a) {}),
        has: ia(function(a) {}),
        contains: ia(function(a) {}),
        lang: ia(function(a) {}),
        target: function(b) {},
        root: function(a) {},
        focus: function(a) {},
        enabled: oa(!1),
        disabled: oa(!0),
        checked: function(a) {},
        selected: function(a) {},
        empty: function(a) {},
        parent: function(a) {},
        header: function(a) {},
        input: function(a) {},
        button: function(a) {},
        text: function(a) {},
        first: pa(function() {}),
        last: pa(function(a, b) {}),
        eq: pa(function(a, b, c) {}),
        even: pa(function(a, b) {}),
        odd: pa(function(a, b) {}),
        lt: pa(function(a, b, c) {}),
        gt: pa(function(a, b, c) {})
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = ma(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = na(b);

    function ra() {}
    ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
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
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
    };

    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d
    }

    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first ? function(b, c, e) {} : function(b, c, i) {}
    }

    function ua(a) {}

    function va(a, b, c) {}

    function wa(a, b, c, d, e) {}

    function xa(a, b, c, d, e, f) {}

    function ya(a) {}

    function za(a, b) {}
    return h = ga.compile = function(a, b) {}, i = ga.select = function(a, b, c, e) {}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
    }), ja(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ka("type|href|height|width", function(a, b, c) {}), c.attributes && ja(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ka("value", function(a, b, c) {}), ja(function(a) {
      return null == a.getAttribute("disabled")
    }) || ka(J, function(a, b, c) {}), ga
  }(a);
  r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
  var y = function(a, b, c) {},
    z = function(a, b) {},
    A = r.expr.match.needsContext;

  function B(a, b) {}
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;

  function E(a, b, c) {}
  r.filter = function(a, b, c) {}, r.fn.extend({
    find: function(a) {
      var b, c, d = this.length,
        e = this;
      if ("string" != typeof a) return this.pushStack(r(a).filter(function() {}));
      for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
      return d > 1 ? r.uniqueSort(c) : c
    },
    filter: function(a) {},
    not: function(a) {},
    is: function(a) {}
  });
  var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = r.fn.init = function(a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || F, "string" == typeof a) {
        if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
            for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
      }
      return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    };
  H.prototype = r.fn, F = r(d);
  var I = /^(?:parents|prev(?:Until|All))/,
    J = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  r.fn.extend({
    has: function(a) {},
    closest: function(a, b) {},
    index: function(a) {},
    add: function(a, b) {},
    addBack: function(a) {}
  });

  function K(a, b) {}
  r.each({
    parent: function(a) {},
    parents: function(a) {},
    parentsUntil: function(a, b, c) {},
    next: function(a) {},
    prev: function(a) {},
    nextAll: function(a) {},
    prevAll: function(a) {},
    nextUntil: function(a, b, c) {},
    prevUntil: function(a, b, c) {},
    siblings: function(a) {},
    children: function(a) {},
    contents: function(a) {}
  }, function(a, b) {
    r.fn[a] = function(c, d) {}
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function M(a) {
    var b = {};
    return r.each(a.match(L) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  r.Callbacks = function(a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function() {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function() {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            r.each(b, function(b, c) {
              r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function() {},
        has: function(a) {},
        empty: function() {},
        disable: function() {
          return e = g = [], f = c = "", this
        },
        disabled: function() {},
        lock: function() {
          return e = g = [], c || b || (f = c = ""), this
        },
        locked: function() {},
        fireWith: function(a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function() {
          return j.fireWith(this, arguments), this
        },
        fired: function() {}
      };
    return j
  };

  function N(a) {
    return a
  }

  function O(a) {}

  function P(a, b, c, d) {}
  r.extend({
    Deferred: function(b) {
      var c = [
          ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
          ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
        ],
        d = "pending",
        e = {
          state: function() {},
          always: function() {},
          "catch": function(a) {
            return e.then(null, a)
          },
          pipe: function() {},
          then: function(b, d, e) {
            var f = 0;

            function g(b, c, d, e) {
              return function() {
                var h = this,
                  i = arguments,
                  j = function() {
                    var a, j;
                    if (!(b < f)) {
                      if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                      j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                    }
                  },
                  k = e ? j : function() {
                    try {
                      j()
                    } catch (a) {
                      r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
                    }
                  };
                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
              }
            }
            return r.Deferred(function(a) {
              c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
            }).promise()
          },
          promise: function(a) {
            return null != a ? r.extend(a, e) : e
          }
        },
        f = {};
      return r.each(c, function(a, b) {
        var g = b[2],
          h = b[5];
        e[b[1]] = g.add, h && g.add(function() {
          d = h
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {}, f[b[0] + "With"] = g.fireWith
      }), e.promise(f), b && b.call(f, f), f
    },
    when: function(a) {}
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  r.Deferred.exceptionHook = function(b, c) {}, r.readyException = function(b) {};
  var R = r.Deferred();
  r.fn.ready = function(a) {
    return R.then(a)["catch"](function(a) {}), this
  }, r.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
    }
  }), r.ready.then = R.then;

  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S), r.ready()
  }
  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
  var T = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {})), b))
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    U = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

  function V() {
    this.expando = r.expando + V.uid++
  }
  V.uid = 1, V.prototype = {
    cache: function(a) {
      var b = a[this.expando];
      return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b
    },
    set: function(a, b, c) {},
    get: function(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
    },
    access: function(a, b, c) {},
    remove: function(a, b) {},
    hasData: function(a) {}
  };
  var W = new V,
    X = new V,
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;

  function $(a) {}

  function _(a, b, c) {}
  r.extend({
    hasData: function(a) {},
    data: function(a, b, c) {},
    removeData: function(a, b) {},
    _data: function(a, b, c) {},
    _removeData: function(a, b) {}
  }), r.fn.extend({
    data: function(a, b) {},
    removeData: function(a) {}
  }), r.extend({
    queue: function(a, b, c) {},
    dequeue: function(a, b) {},
    _queueHooks: function(a, b) {}
  }), r.fn.extend({
    queue: function(a, b) {},
    dequeue: function(a) {},
    clearQueue: function(a) {},
    promise: function(a, b) {}
  });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function(a, b) {},
    ea = function(a, b, c, d) {};

  function fa(a, b, c, d) {}
  var ga = {};

  function ha(a) {}

  function ia(a, b) {}
  r.fn.extend({
    show: function() {},
    hide: function() {},
    toggle: function(a) {}
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

  function na(a, b) {
    var c;
    return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
  }

  function oa(a, b) {}
  var pa = /<|&#?\w+;/;

  function qa(a, b, c, d, e) {}! function() {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;

  function va() {}

  function wa() {
    return !1
  }

  function xa() {}

  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) ya(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
    else if (!e) return a;
    return 1 === f && (g = e, e = function(a) {}, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
      r.event.add(this, b, e, d, c)
    })
  }
  r.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
      if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(L) || [""], j = b.length;
        while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && r.expr.match.needsContext.test(e),
          namespace: o.join(".")
        }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
      }
    },
    remove: function(a, b, c, d, e) {},
    dispatch: function(a) {
      var b = r.event.fix(a),
        c, d, e, f, g, h, i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g, h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
            f.length && h.push({
              elem: j,
              handlers: f
            })
          } return j = this, i < b.length && h.push({
        elem: j,
        handlers: b.slice(i)
      }), h
    },
    addProp: function(a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b) ? function() {} : function() {},
        set: function(b) {}
      })
    },
    fix: function(a) {
      return a[r.expando] ? a : new r.Event(a)
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
        _default: function(a) {}
      },
      beforeunload: {
        postDispatch: function(a) {}
      }
    }
  }, r.removeEvent = function(a, b, c) {}, r.Event = function(a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
  }, r.Event.prototype = {
    constructor: r.Event,
    isDefaultPrevented: wa,
    isPropagationStopped: wa,
    isImmediatePropagationStopped: wa,
    isSimulated: !1,
    preventDefault: function() {},
    stopPropagation: function() {},
    stopImmediatePropagation: function() {}
  }, r.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function(a) {}
  }, r.event.addProp), r.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    r.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {}
    }
  }), r.fn.extend({
    on: function(a, b, c, d) {
      return ya(this, a, b, c, d)
    },
    one: function(a, b, c, d) {},
    off: function(a, b, c) {}
  });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ea(a, b) {}

  function Fa(a) {}

  function Ga(a) {}

  function Ha(a, b) {}

  function Ia(a, b) {}

  function Ja(a, b, c, d) {}

  function Ka(a, b, c) {}
  r.extend({
    htmlPrefilter: function(a) {
      return a.replace(za, "<$1></$2>")
    },
    clone: function(a, b, c) {},
    cleanData: function(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events)
              for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0
          }
          c[X.expando] && (c[X.expando] = void 0)
        }
    }
  }), r.fn.extend({
    detach: function(a) {},
    remove: function(a) {},
    text: function(a) {},
    append: function() {},
    prepend: function() {},
    before: function() {},
    after: function() {},
    empty: function() {},
    clone: function(a, b) {},
    html: function(a) {
      return T(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);
          try {
            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {}
  }), r.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    r.fn[a] = function(a) {}
  });
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function(b) {
      var c = b.ownerDocument.defaultView;
      return c && c.opener || (c = a), c.getComputedStyle(b)
    };
  ! function() {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
        var b = a.getComputedStyle(i);
        c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
      }
    }
    var c, e, f, g, h = d.createElement("div"),
      i = d.createElement("div");
    i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
      pixelPosition: function() {},
      boxSizingReliable: function() {},
      pixelMarginRight: function() {
        return b(), f
      },
      reliableMarginLeft: function() {}
    }))
  }();

  function Oa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function Pa(a, b) {
    return {
      get: function() {}
    }
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ta = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;

  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--)
      if (a = Ua[c] + b, a in Va) return a
  }

  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b
  }

  function Ya(a, b, c) {}

  function Za(a, b, c, d, e) {}

  function $a(a, b, c) {}
  r.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {}
      }
    },
    cssNumber: {
      animationIterationCount: !0,
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
      "float": "cssFloat"
    },
    style: function(a, b, c, d) {},
    css: function(a, b, c, d) {
      var e, f, g, h = r.camelCase(b),
        i = Ra.test(b);
      return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
    }
  }), r.each(["height", "width"], function(a, b) {
    r.cssHooks[b] = {
      get: function(a, c, d) {},
      set: function(a, c, d) {}
    }
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {}), r.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    r.cssHooks[a + b] = {
      expand: function(c) {}
    }, La.test(a) || (r.cssHooks[a + b].set = Ya)
  }), r.fn.extend({
    css: function(a, b) {
      return T(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
      }, a, b, arguments.length > 1)
    }
  });

  function _a(a, b, c, d, e) {}
  r.Tween = _a, _a.prototype = {
    constructor: _a,
    init: function(a, b, c, d, e, f) {},
    cur: function() {},
    run: function(a) {}
  }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
    _default: {
      get: function(a) {},
      set: function(a) {}
    }
  }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
    set: function(a) {}
  }, r.easing = {
    linear: function(a) {},
    swing: function(a) {},
    _default: "swing"
  }, r.fx = _a.prototype.init, r.fx.step = {};
  var ab, bb, cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;

  function eb() {}

  function fb() {}

  function gb(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function hb(a, b, c) {}

  function ib(a, b, c) {}

  function jb(a, b) {}

  function kb(a, b, c) {}
  r.Animation = r.extend(kb, {
      tweeners: {
        "*": [function(a, b) {}]
      },
      tweener: function(a, b) {},
      prefilters: [ib],
      prefilter: function(a, b) {}
    }), r.speed = function(a, b, c) {}, r.fn.extend({
      fadeTo: function(a, b, c, d) {},
      animate: function(a, b, c, d) {},
      stop: function(a, b, c) {},
      finish: function(a) {}
    }), r.each(["toggle", "show", "hide"], function(a, b) {
      var c = r.fn[b];
      r.fn[b] = function(a, d, e) {}
    }), r.each({
      slideDown: gb("show"),
      slideUp: gb("hide"),
      slideToggle: gb("toggle"),
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
      r.fn[a] = function(a, c, d) {}
    }), r.timers = [], r.fx.tick = function() {}, r.fx.timer = function(a) {}, r.fx.interval = 13, r.fx.start = function() {}, r.fx.stop = function() {}, r.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, r.fn.delay = function(b, c) {},
    function() {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
    }();
  var lb, mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {}
  }), r.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
        null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function(a, b) {}
      }
    },
    removeAttr: function(a, b) {}
  }), lb = {
    set: function(a, b, c) {}
  }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = mb[b] || r.find.attr;
    mb[b] = function(a, b, d) {}
  });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function(a, b) {},
    removeProp: function(a) {}
  }), r.extend({
    prop: function(a, b, c) {},
    propHooks: {
      tabIndex: {
        get: function(a) {}
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), o.optSelected || (r.propHooks.selected = {
    get: function(a) {},
    set: function(a) {}
  }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    r.propFix[this.toLowerCase()] = this
  });

  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ")
  }

  function qb(a) {
    return a.getAttribute && a.getAttribute("class") || ""
  }
  r.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a)) return this.each(function(b) {});
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = pb(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (r.isFunction(a)) return this.each(function(b) {});
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while (c = this[i++])
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = pb(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    toggleClass: function(a, b) {},
    hasClass: function(a) {}
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function(a) {}
  }), r.extend({
    valHooks: {
      option: {
        get: function(a) {}
      },
      select: {
        get: function(a) {},
        set: function(a, b) {}
      }
    }
  }), r.each(["radio", "checkbox"], function() {
    r.valHooks[this] = {
      set: function(a, b) {}
    }, o.checkOn || (r.valHooks[this].get = function(a) {})
  });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function(b, c, e, f) {
      var g, h, i, j, k, m, n, o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
          i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
      }
    },
    simulate: function(a, b, c) {}
  }), r.fn.extend({
    trigger: function(a, b) {
      return this.each(function() {
        r.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {}
  }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
    r.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), r.fn.extend({
    hover: function(a, b) {}
  }), o.focusin = "onfocusin" in a, o.focusin || r.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {};
    r.event.special[b] = {
      setup: function() {},
      teardown: function() {}
    }
  });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function(b) {};
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {}
  r.param = function(a, b) {}, r.fn.extend({
    serialize: function() {},
    serializeArray: function() {}
  });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;

  function Mb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Nb(a, b, c, d) {}

  function Ob(a, b) {
    var c, d, e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a
  }

  function Pb(a, b, c) {}

  function Qb(a, b, c, d) {}
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function(b, c) {},
    getJSON: function(a, b, c) {},
    getScript: function(a, b) {}
  }), r.each(["get", "post"], function(a, b) {
    r[b] = function(a, c, d, e) {}
  }), r._evalUrl = function(a) {}, r.fn.extend({
    wrapAll: function(a) {},
    wrapInner: function(a) {},
    wrap: function(a) {},
    unwrap: function(a) {}
  }), r.expr.pseudos.hidden = function(a) {}, r.expr.pseudos.visible = function(a) {}, r.ajaxSettings.xhr = function() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  };
  var Rb = {
      0: 200,
      1223: 204
    },
    Sb = r.ajaxSettings.xhr();
  o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {}), r.ajaxPrefilter(function(a) {}), r.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(a) {}
    }
  }), r.ajaxPrefilter("script", function(a) {}), r.ajaxTransport("script", function(a) {});
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {}
  }), r.ajaxPrefilter("json jsonp", function(b, c, d) {}), o.createHTMLDocument = function() {
    var a = d.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
  }(), r.parseHTML = function(a, b, c) {}, r.fn.load = function(a, b, c) {}, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    r.fn[b] = function(a) {}
  }), r.expr.pseudos.animated = function(a) {}, r.offset = {
    setOffset: function(a, b, c) {}
  }, r.fn.extend({
    offset: function(a) {},
    position: function() {},
    offsetParent: function() {}
  }), r.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = "pageYOffset" === b;
    r.fn[a] = function(d) {}
  }), r.each(["top", "left"], function(a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {})
  }), r.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    r.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      r.fn[d] = function(e, f) {}
    })
  }), r.fn.extend({
    bind: function(a, b, c) {},
    unbind: function(a, b) {},
    delegate: function(a, b, c, d) {},
    undelegate: function(a, b, c) {}
  }), r.holdReady = function(a) {}, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {});
  var Vb = a.jQuery,
    Wb = a.$;
  return r.noConflict = function(b) {}, b || (a.jQuery = a.$ = r), r
});