/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscolumns-cssfilters-cssgradients-csstransforms-flexbox-flexboxlegacy-flexwrap-fontface-generatedcontent-inlinesvg-svg-addtest-fnbind-setclasses-shiv-testprop !*/
! function(e, t, n) {
  function r(e, t) {
    return typeof e === t
  }

  function o() {
    var e, t, n, o, i, s, a;
    for (var l in b)
      if (b.hasOwnProperty(l)) {
        if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"))
      }
  }

  function i(e) {
    var t = E.className,
      n = Modernizr._config.classPrefix || "";
    if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2")
    }
    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? E.className.baseVal = t : E.className = t)
  }

  function s(e, t) {
    if ("object" == typeof e)
      for (var n in e) x(e, n) && s(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        o = Modernizr[r[0]];
      if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
      t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
    }
    return Modernizr
  }

  function a(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function l() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }

  function f() {
    var e = t.body;
    return e || (e = l(_ ? "svg" : "body"), e.fake = !0), e
  }

  function u(e, n, r, o) {
    var i, s, a, u, c = "modernizr",
      d = l("div"),
      p = f();
    if (parseInt(r, 10))
      for (; r--;) a = l("div"), a.id = o ? o[r] : c + (r + 1), d.appendChild(a);
    return i = l("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = u, E.offsetHeight) : d.parentNode.removeChild(d), !!s
  }

  function c(e) {
    return e.replace(/([A-Z])/g, function(e, t) {
      return "-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function d(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var s = i.error ? "error" : "log";
        i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o
  }

  function p(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;)
        if (e.CSS.supports(c(t[o]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) i.push("(" + c(t[o]) + ":" + r + ")");
      return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
        return "absolute" == d(e, null, "position")
      })
    }
    return n
  }

  function m(e) {
    return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, "")
  }

  function h(e, t, o, i) {
    function s() {
      u && (delete k.style, delete k.modElem)
    }
    if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var f = p(e, o);
      if (!r(f, "undefined")) return f
    }
    for (var u, c, d, h, g, v = ["modernizr", "tspan", "samp"]; !k.style && v.length;) u = !0, k.modElem = l(v.shift()), k.style = k.modElem.style;
    for (d = e.length, c = 0; d > c; c++)
      if (h = e[c], g = k.style[h], a(h, "-") && (h = m(h)), k.style[h] !== n) {
        if (i || r(o, "undefined")) return s(), "pfx" == t ? h : !0;
        try {
          k.style[h] = o
        } catch (y) {}
        if (k.style[h] != g) return s(), "pfx" == t ? h : !0
      } return s(), !1
  }

  function g(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  }

  function v(e, t, n) {
    var o;
    for (var i in e)
      if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? g(o, n || t) : o);
    return !1
  }

  function y(e, t, n, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + z.join(s + " ") + s).split(" ");
    return r(t, "string") || r(t, "undefined") ? h(a, t, o, i) : (a = (e + " " + P.join(s + " ") + s).split(" "), v(a, t, n))
  }

  function w(e, t, r) {
    return y(e, n, n, t, r)
  }
  var b = [],
    S = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e])
        }, 0)
      },
      addTest: function(e, t, n) {
        b.push({
          name: e,
          fn: t,
          options: n
        })
      },
      addAsyncTest: function(e) {
        b.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function() {};
  Modernizr.prototype = S, Modernizr = new Modernizr;
  var x, C = [],
    E = t.documentElement,
    _ = "svg" === E.nodeName.toLowerCase();
  ! function() {
    var e = {}.hasOwnProperty;
    x = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined")
    } : function(t, n) {
      return e.call(t, n)
    }
  }(), S._l = {}, S.on = function(e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
      Modernizr._trigger(e, Modernizr[e])
    }, 0)
  }, S._trigger = function(e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function() {
        var e, r;
        for (e = 0; e < n.length; e++)(r = n[e])(t)
      }, 0), delete this._l[e]
    }
  }, Modernizr._q.push(function() {
    S.addTest = s
  });
  _ || ! function(e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
        r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
    }

    function r() {
      var e = w.elements;
      return "string" == typeof e ? e.split(" ") : e
    }

    function o(e, t) {
      var n = w.elements;
      "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), w.elements = n + " " + e, f(t)
    }

    function i(e) {
      var t = y[e[g]];
      return t || (t = {}, v++, e[g] = v, y[v] = t), t
    }

    function s(e, n, r) {
      if (n || (n = t), c) return n.createElement(e);
      r || (r = i(n));
      var o;
      return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
    }

    function a(e, n) {
      if (e || (e = t), c) return e.createDocumentFragment();
      n = n || i(e);
      for (var o = n.frag.cloneNode(), s = 0, a = r(), l = a.length; l > s; s++) o.createElement(a[s]);
      return o
    }

    function l(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
        return w.shivMethods ? s(n, e, t) : t.createElem(n)
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ");return n}")(w, t.frag)
    }

    function f(e) {
      e || (e = t);
      var r = i(e);
      return !w.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || l(e, r), e
    }
    var u, c, d = "3.7.3",
      p = e.html5 || {},
      m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      g = "_html5shiv",
      v = 0,
      y = {};
    ! function() {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, c = 1 == e.childNodes.length || function() {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
        }()
      } catch (n) {
        u = !0, c = !0
      }
    }();
    var w = {
      elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: d,
      shivCSS: p.shivCSS !== !1,
      supportsUnknownElements: c,
      shivMethods: p.shivMethods !== !1,
      type: "default",
      shivDocument: f,
      createElement: s,
      createDocumentFragment: a,
      addElements: o
    };
    e.html5 = w, f(t), "object" == typeof module && module.exports && (module.exports = w)
  }("undefined" != typeof e ? e : this, t);
  var T = {
    elem: l("modernizr")
  };
  Modernizr._q.push(function() {
    delete T.elem
  });
  var k = {
    style: T.elem.style
  };
  Modernizr._q.unshift(function() {
    delete k.style
  });
  var N = (S.testProp = function(e, t, r) {
      return h([e], n, t, r)
    }, "Moz O ms Webkit"),
    z = S._config.usePrefixes ? N.split(" ") : [];
  S._cssomPrefixes = z;
  var P = S._config.usePrefixes ? N.toLowerCase().split(" ") : [];
  S._domPrefixes = P, S.testAllProps = y, S.testAllProps = w, Modernizr.addTest("flexbox", w("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", w("boxDirection", "reverse", !0)), Modernizr.addTest("flexwrap", w("flexWrap", "wrap", !0)), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("inlinesvg", function() {
    var e = l("div");
    return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
  });
  var j = S.testStyles = u,
    R = function() {
      var e = navigator.userAgent,
        t = e.match(/w(eb)?osbrowser/gi),
        n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
      return t || n
    }();
  R ? Modernizr.addTest("fontface", !1) : j('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
      var r = t.getElementById("smodernizr"),
        o = r.sheet || r.styleSheet,
        i = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "",
        s = /src/i.test(i) && 0 === i.indexOf(n.split(" ")[0]);
      Modernizr.addTest("fontface", s)
    }),
    function() {
      Modernizr.addTest("csscolumns", function() {
        var e = !1,
          t = w("columnCount");
        try {
          e = !!t, e && (e = new Boolean(e))
        } catch (n) {}
        return e
      });
      for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = w("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || w(n[r])), Modernizr.addTest("csscolumns." + e, t)
    }();
  var B = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  S._prefixes = B, Modernizr.addTest("cssgradients", function() {
    for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", o = 0, i = B.length - 1; i > o; o++) e = 0 === o ? "to " : "", r += t + B[o] + "linear-gradient(" + e + "left top, #9f9, white);";
    Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
    var s = l("a"),
      a = s.style;
    return a.cssText = r, ("" + a.backgroundImage).indexOf("gradient") > -1
  });
  var F = "CSS" in e && "supports" in e.CSS,
    M = "supportsCSS" in e;
  Modernizr.addTest("supports", F || M), Modernizr.addTest("cssfilters", function() {
    if (Modernizr.supports) return w("filter", "blur(2px)");
    var e = l("a");
    return e.style.cssText = B.join("filter:blur(2px); "), !!e.style.length && (t.documentMode === n || t.documentMode > 9)
  }), Modernizr.addTest("csstransforms", function() {
    return -1 === navigator.userAgent.indexOf("Android 2.") && w("transform", "scale(1)", !0)
  }), j('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
    Modernizr.addTest("generatedcontent", e.offsetHeight >= 6)
  }), o(), i(C), delete S.addTest, delete S.addAsyncTest;
  for (var A = 0; A < Modernizr._q.length; A++) Modernizr._q[A]();
  e.Modernizr = Modernizr
}(window, document);