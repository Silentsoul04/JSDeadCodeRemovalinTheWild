/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {} : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "2.2.0",
    n = function(a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {};
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {},
    get: function(a) {},
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a) {
      return n.each(this, a)
    },
    map: function(a) {},
    slice: function() {},
    first: function() {},
    last: function() {},
    eq: function(a) {},
    end: function() {},
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {},
    noop: function() {},
    isFunction: function(a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray,
    isWindow: function(a) {
      return null != a && a === a.window
    },
    isNumeric: function(a) {},
    isPlainObject: function(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
    },
    globalEval: function(a) {},
    camelCase: function(a) {},
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b) {
      var c, d = 0;
      if (s(a)) {
        for (c = a.length; c > d; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
    },
    inArray: function(a, b, c) {
      return null == b ? -1 : h.call(b, a, c)
    },
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function(a, b, c) {},
    map: function(a, b, c) {
      var d, e, g = 0,
        h = [];
      if (s(a))
        for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
      else
        for (g in a) e = b(a[g], g, c), null != e && h.push(e);
      return f.apply([], h)
    },
    guid: 1,
    proxy: function(a, b) {},
    now: Date.now,
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
    i["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function(a, b) {},
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
      O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function(a, b, c) {},
      da = function() {};
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (ea) {
      H = {
        apply: E.length ? function(a, b) {} : function(a, b) {}
      }
    }

    function fa(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a)))
          if (f = o[1]) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
            while (h--) r[h] = l + " " + qa(r[h]);
            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d
          } catch (y) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e)
    }

    function ga() {
      var a = [];

      function b(c, e) {}
      return b
    }

    function ha(a) {
      return a[u] = !0, a
    }

    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ja(a, b) {}

    function ka(a, b) {}

    function la(a) {
      return function(b) {}
    }

    function ma(a) {
      return function(b) {}
    }

    function na(a) {
      return ha(function(b) {})
    }

    function oa(a) {}
    c = fa.support = {}, f = fa.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fa.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ia(function(a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function(a, b) {}, d.filter.ID = function(a) {}) : (delete d.find.ID, d.filter.ID = function(a) {}), d.find.TAG = c.getElementsByTagName ? function(a, b) {} : function(a, b) {}, d.find.CLASS = c.getElementsByClassName && function(a, b) {}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ia(function(a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {}, B = b ? function(a, b) {} : function(a, b) {}, n) : n
    }, fa.matches = function(a, b) {}, fa.matchesSelector = function(a, b) {}, fa.contains = function(a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fa.attr = function(a, b) {}, fa.error = function(a) {}, fa.uniqueSort = function(a) {}, e = fa.getText = function(a) {}, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
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
        CHILD: function(a) {},
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
        not: ha(function(a) {}),
        has: ha(function(a) {}),
        contains: ha(function(a) {}),
        lang: ha(function(a) {}),
        target: function(b) {},
        root: function(a) {},
        focus: function(a) {},
        enabled: function(a) {},
        disabled: function(a) {},
        checked: function(a) {},
        selected: function(a) {},
        empty: function(a) {},
        parent: function(a) {},
        header: function(a) {},
        input: function(a) {},
        button: function(a) {},
        text: function(a) {},
        first: na(function() {}),
        last: na(function(a, b) {}),
        eq: na(function(a, b, c) {}),
        even: na(function(a, b) {}),
        odd: na(function(a, b) {}),
        lt: na(function(a, b, c) {}),
        gt: na(function(a, b, c) {})
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = la(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = ma(b);

    function pa() {}
    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {};

    function qa(a) {}

    function ra(a, b, c) {}

    function sa(a) {}

    function ta(a, b, c) {}

    function ua(a, b, c, d, e) {}

    function va(a, b, c, d, e, f) {}

    function wa(a) {}

    function xa(a, b) {}
    return h = fa.compile = function(a, b) {}, i = fa.select = function(a, b, e, f) {}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ia(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ja("type|href|height|width", function(a, b, c) {}), c.attributes && ia(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ja("value", function(a, b, c) {}), ia(function(a) {
      return null == a.getAttribute("disabled")
    }) || ja(K, function(a, b, c) {}), fa
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = function(a, b, c) {},
    v = function(a, b) {},
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {}
  n.filter = function(a, b, c) {}, n.fn.extend({
    find: function(a) {
      var b, c = this.length,
        d = [],
        e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function() {}));
      for (b = 0; c > b; b++) n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    },
    filter: function(a) {},
    not: function(a) {},
    is: function(a) {}
  });
  var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = n.fn.init = function(a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || A, "string" == typeof a) {
        if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.fn.extend({
    has: function(a) {},
    closest: function(a, b) {},
    index: function(a) {},
    add: function(a, b) {},
    addBack: function(a) {}
  });

  function F(a, b) {}
  n.each({
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
    n.fn[a] = function(c, d) {}
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function(a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function() {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function() {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            n.each(b, function(b, c) {
              n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
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
          return e = g = [], c || (f = c = ""), this
        },
        locked: function() {},
        fireWith: function(a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function() {},
        fired: function() {}
      };
    return j
  }, n.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {},
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {},
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
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {}, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {}
  });
  var I;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {},
    ready: function(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
    }
  });

  function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
  }
  n.ready.promise = function(b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
  }, n.ready.promise();
  var K = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) K(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {})), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    L = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

  function M() {
    this.expando = n.expando + M.uid++
  }
  M.uid = 1, M.prototype = {
    register: function(a, b) {},
    cache: function(a) {},
    set: function(a, b, c) {},
    get: function(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
    },
    access: function(a, b, c) {},
    remove: function(a, b) {},
    hasData: function(a) {
      var b = a[this.expando];
      return void 0 !== b && !n.isEmptyObject(b)
    }
  };
  var N = new M,
    O = new M,
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;

  function R(a, b, c) {}
  n.extend({
    hasData: function(a) {},
    data: function(a, b, c) {},
    removeData: function(a, b) {},
    _data: function(a, b, c) {},
    _removeData: function(a, b) {}
  }), n.fn.extend({
    data: function(a, b) {},
    removeData: function(a) {}
  }), n.extend({
    queue: function(a, b, c) {},
    dequeue: function(a, b) {},
    _queueHooks: function(a, b) {}
  }), n.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {})
    },
    dequeue: function(a) {},
    clearQueue: function(a) {},
    promise: function(a, b) {}
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function(a, b) {};

  function W(a, b, c, d) {}
  var X = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    Z = /^$|\/(?:java|ecma)script/i,
    $ = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

  function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
  }

  function aa(a, b) {}
  var ba = /<|&#?\w+;/;

  function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
      if (f = a[o], f || 0 === f)
        if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
        else if (ba.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
      while (k--) g = g.lastChild;
      n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
    } else m.push(b.createTextNode(f));
    l.textContent = "", o = 0;
    while (f = m[o++])
      if (d && n.inArray(f, d) > -1) e && e.push(f);
      else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
      k = 0;
      while (f = g[k++]) Z.test(f.type || "") && c.push(f)
    }
    return l
  }! function() {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var da = /^key/,
    ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    fa = /^([^.]*)(?:\.(.+)|)/;

  function ga() {}

  function ha() {
    return !1
  }

  function ia() {}

  function ja(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) ja(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
    else if (!e) return this;
    return 1 === f && (g = e, e = function(a) {}, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {})
  }
  n.event = {
    global: {},
    add: function(a, b, c, d, e) {},
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
      if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;
        while (j--)
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
            while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
          } else
            for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, "handle events")
      }
    },
    dispatch: function(a) {},
    handlers: function(a, b) {},
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {}
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {}
    },
    fix: function(a) {},
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
  }, n.removeEvent = function(a, b, c) {}, n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: ha,
    isPropagationStopped: ha,
    isImmediatePropagationStopped: ha,
    preventDefault: function() {},
    stopPropagation: function() {},
    stopImmediatePropagation: function() {}
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {}
    }
  }), n.fn.extend({
    on: function(a, b, c, d) {
      return ja(this, a, b, c, d)
    },
    one: function(a, b, c, d) {},
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
        n.event.remove(this, a, c, b)
      })
    }
  });
  var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    la = /<script|<style|<link/i,
    ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
    na = /^true\/(.*)/,
    oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
  }

  function qa(a) {}

  function ra(a) {}

  function sa(a, b) {}

  function ta(a, b) {}

  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e, g, h, i, j, k, m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {});
    if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      if (i)
        for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
    }
    return a
  }

  function va(a, b, c) {}
  n.extend({
    htmlPrefilter: function(a) {
      return a.replace(ka, "<$1></$2>")
    },
    clone: function(a, b, c) {},
    cleanData: function(a) {}
  }), n.fn.extend({
    domManip: ua,
    detach: function(a) {},
    remove: function(a) {},
    text: function(a) {},
    append: function() {
      return ua(this, arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {},
    before: function() {},
    after: function() {},
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      return this
    },
    clone: function(a, b) {},
    html: function(a) {
      return K(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {}
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    n.fn[a] = function(a) {}
  });
  var wa, xa = {
    HTML: "block",
    BODY: "block"
  };

  function ya(a, b) {}

  function za(a) {}
  var Aa = /^margin/,
    Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ca = function(b) {},
    Da = function(a, b, c, d) {},
    Ea = d.documentElement;
  ! function() {
    var b, c, e, f, g = d.createElement("div"),
      h = d.createElement("div");
    if (h.style) {
      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

      function i() {}
      n.extend(l, {
        pixelPosition: function() {},
        boxSizingReliable: function() {},
        pixelMarginRight: function() {},
        reliableMarginLeft: function() {},
        reliableMarginRight: function() {}
      })
    }
  }();

  function Fa(a, b, c) {}

  function Ga(a, b) {
    return {
      get: function() {}
    }
  }
  var Ha = /^(none|table(?!-c[ea]).+)/,
    Ia = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ja = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ka = ["Webkit", "O", "Moz", "ms"],
    La = d.createElement("div").style;

  function Ma(a) {}

  function Na(a, b, c) {}

  function Oa(a, b, c, d, e) {}

  function Pa(b, c, e) {}

  function Qa(a, b) {}
  n.extend({
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
    css: function(a, b, c, d) {}
  }), n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {
      get: function(a, c, d) {},
      set: function(a, c, d) {}
    }
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {}), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {}), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    n.cssHooks[a + b] = {
      expand: function(c) {}
    }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
  }), n.fn.extend({
    css: function(a, b) {},
    show: function() {},
    hide: function() {},
    toggle: function(a) {}
  });

  function Ra(a, b, c, d, e) {}
  n.Tween = Ra, Ra.prototype = {
    constructor: Ra,
    init: function(a, b, c, d, e, f) {},
    cur: function() {},
    run: function(a) {}
  }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
    _default: {
      get: function(a) {},
      set: function(a) {}
    }
  }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
    set: function(a) {}
  }, n.easing = {
    linear: function(a) {},
    swing: function(a) {},
    _default: "swing"
  }, n.fx = Ra.prototype.init, n.fx.step = {};
  var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
    Va = /queueHooks$/;

  function Wa() {}

  function Xa(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function Ya(a, b, c) {}

  function Za(a, b, c) {}

  function $a(a, b) {}

  function _a(a, b, c) {}
  n.Animation = n.extend(_a, {
      tweeners: {
        "*": [function(a, b) {}]
      },
      tweener: function(a, b) {},
      prefilters: [Za],
      prefilter: function(a, b) {}
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {}, d
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {},
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {};
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {},
      finish: function(a) {}
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {}
    }), n.each({
      slideDown: Xa("show"),
      slideUp: Xa("hide"),
      slideToggle: Xa("toggle"),
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
    }), n.timers = [], n.fx.tick = function() {}, n.fx.timer = function(a) {}, n.fx.interval = 13, n.fx.start = function() {}, n.fx.stop = function() {}, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(b, c) {},
    function() {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
    }();
  var ab, bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function(a, b) {},
    removeAttr: function(a) {}
  }), n.extend({
    attr: function(a, b, c) {},
    attrHooks: {
      type: {
        set: function(a, b) {}
      }
    },
    removeAttr: function(a, b) {}
  }), ab = {
    set: function(a, b, c) {}
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = bb[b] || n.find.attr;
    bb[b] = function(a, b, d) {}
  });
  var cb = /^(?:input|select|textarea|button)$/i,
    db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function(a, b) {},
    removeProp: function(a) {}
  }), n.extend({
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
  }), l.optSelected || (n.propHooks.selected = {
    get: function(a) {}
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this
  });
  var eb = /[\t\r\n\f]/g;

  function fb(a) {}
  n.fn.extend({
    addClass: function(a) {},
    removeClass: function(a) {},
    toggleClass: function(a, b) {},
    hasClass: function(a) {}
  });
  var gb = /\r/g;
  n.fn.extend({
    val: function(a) {}
  }), n.extend({
    valHooks: {
      option: {
        get: function(a) {}
      },
      select: {
        get: function(a) {},
        set: function(a, b) {}
      }
    }
  }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {
      set: function(a, b) {}
    }, l.checkOn || (n.valHooks[this].get = function(a) {})
  });
  var hb = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function(b, c, e, f) {
      var g, h, i, j, l, m, o, p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
          i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
        }
        g = 0;
        while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
      }
    },
    simulate: function(a, b, c) {}
  }), n.fn.extend({
    trigger: function(a, b) {},
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function(a, b) {}
  }), l.focusin = "onfocusin" in a, l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {};
    n.event.special[b] = {
      setup: function() {},
      teardown: function() {}
    }
  });
  var ib = a.location,
    jb = n.now(),
    kb = /\?/;
  n.parseJSON = function(a) {
    return JSON.parse(a + "")
  }, n.parseXML = function(b) {};
  var lb = /#.*$/,
    mb = /([?&])_=[^&]*/,
    nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    pb = /^(?:GET|HEAD)$/,
    qb = /^\/\//,
    rb = {},
    sb = {},
    tb = "*/".concat("*"),
    ub = d.createElement("a");
  ub.href = ib.href;

  function vb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function wb(a, b, c, d) {
    var e = {},
      f = a === sb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function xb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a
  }

  function yb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        } if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function zb(a, b, c, d) {
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
          } if (g !== !0)
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
      url: ib.href,
      type: "GET",
      isLocal: ob.test(ib.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": tb,
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
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a)
    },
    ajaxPrefilter: vb(rb),
    ajaxTransport: vb(sb),
    ajax: function(b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
        o = m.context || m,
        p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
        q = n.Deferred(),
        r = n.Callbacks("once memory"),
        s = m.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = {};
                while (b = nb.exec(g)) h[b[1].toLowerCase()] = b[2]
              }
              b = h[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {},
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return v || (a = u[c] = u[c] || a, t[a] = b), this
          },
          overrideMimeType: function(a) {},
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > v)
                for (b in a) s[b] = [s[b], a[b]];
              else x.always(a[x.status]);
            return this
          },
          abort: function(a) {}
        };
      if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");
        try {
          j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host
        } catch (y) {
          m.crossDomain = !0
        }
      }
      if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) return x;
      k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
      w = "abort";
      for (l in {
          success: 1,
          error: 1,
          complete: 1
        }) x[l](m[l]);
      if (e = wb(sb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
        m.async && m.timeout > 0 && (i = a.setTimeout(function() {}, m.timeout));
        try {
          v = 1, e.send(t, z)
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y)
        }
      } else z(-1, "No Transport");

      function z(b, c, d, h) {
        var j, l, t, u, w, y = c;
        2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
      }
      return x
    },
    getJSON: function(a, b, c) {},
    getScript: function(a, b) {}
  }), n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, d, e) {}
  }), n._evalUrl = function(a) {}, n.fn.extend({
    wrapAll: function(a) {},
    wrapInner: function(a) {},
    wrap: function(a) {},
    unwrap: function() {}
  }), n.expr.filters.hidden = function(a) {}, n.expr.filters.visible = function(a) {};
  var Ab = /%20/g,
    Bb = /\[\]$/,
    Cb = /\r?\n/g,
    Db = /^(?:submit|button|image|reset|file)$/i,
    Eb = /^(?:input|select|textarea|keygen)/i;

  function Fb(a, b, c, d) {}
  n.param = function(a, b) {}, n.fn.extend({
    serialize: function() {},
    serializeArray: function() {}
  }), n.ajaxSettings.xhr = function() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  };
  var Gb = {
      0: 200,
      1223: 204
    },
    Hb = n.ajaxSettings.xhr();
  l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function(b) {
    var c, d;
    return l.cors || Hb && !b.crossDomain ? {
      send: function(e, f) {
        var g, h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
          for (g in b.xhrFields) h[g] = b.xhrFields[g];
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
        for (g in e) h.setRequestHeader(g, e[g]);
        c = function(a) {
          return function() {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: h.response
            } : {
              text: h.responseText
            }, h.getAllResponseHeaders()))
          }
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {}, c = c("abort");
        try {
          h.send(b.hasContent && b.data || null)
        } catch (i) {
          if (c) throw i
        }
      },
      abort: function() {}
    } : void 0
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(a) {}
    }
  }), n.ajaxPrefilter("script", function(a) {}), n.ajaxTransport("script", function(a) {});
  var Ib = [],
    Jb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {}
  }), n.ajaxPrefilter("json jsonp", function(b, c, d) {}), l.createHTMLDocument = function() {
    var a = d.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
  }(), n.parseHTML = function(a, b, c) {};
  var Kb = n.fn.load;
  n.fn.load = function(a, b, c) {}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    n.fn[b] = function(a) {}
  }), n.expr.filters.animated = function(a) {};

  function Lb(a) {}
  n.offset = {
    setOffset: function(a, b, c) {}
  }, n.fn.extend({
    offset: function(a) {},
    position: function() {},
    offsetParent: function() {}
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = "pageYOffset" === b;
    n.fn[a] = function(d) {}
  }), n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {})
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
        return K(this, function(b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.extend({
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {},
    delegate: function(a, b, c, d) {},
    undelegate: function(a, b, c) {},
    size: function() {}
  }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {});
  var Mb = a.jQuery,
    Nb = a.$;
  return n.noConflict = function(b) {}, b || (a.jQuery = a.$ = n), n
});