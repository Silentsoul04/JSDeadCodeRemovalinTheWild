! function(t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var r = i[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function(i, o, s) {
    for (var a, c, u, l = 0, f = []; l < i.length; l++) c = i[l], r[c] && f.push(r[c][0]), r[c] = 0;
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    for (n && n(i, o, s); f.length;) f.shift()();
    if (s)
      for (l = 0; l < s.length; l++) u = e(e.s = s[l]);
    return u
  };
  var i = {},
    r = {
      16: 0
    };
  e.m = t, e.c = i, e.d = function(t, n, i) {
    e.o(t, n) || Object.defineProperty(t, n, {
      configurable: !1,
      enumerable: !0,
      get: i
    })
  }, e.n = function(t) {
    var n = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "", e.oe = function(t) {
    throw console.error(t), t
  }, e(e.s = 129)
}([function(t, e, n) {
  "use strict";

  function i() {
    var t = ((window.forbes || {})["simple-site"] || {}).tracking;
    return "404" === (t || {}).pageType && (t.fastSu = "https://www.forbes.com" + window.location.pathname), t
  }
  n.d(e, "y", function() {
    return o
  }), n.d(e, "a", function() {
    return s
  }), n.d(e, "b", function() {
    return a
  }), n.d(e, "c", function() {
    return u
  }), n.d(e, "d", function() {
    return l
  }), n.d(e, "e", function() {
    return f
  }), n.d(e, "f", function() {
    return d
  }), n.d(e, "g", function() {
    return h
  }), n.d(e, "h", function() {
    return p
  }), n.d(e, "i", function() {
    return v
  }), n.d(e, "j", function() {
    return g
  }), n.d(e, "m", function() {
    return y
  }), n.d(e, "n", function() {
    return m
  }), n.d(e, "o", function() {
    return b
  }), n.d(e, "q", function() {
    return w
  }), n.d(e, "r", function() {
    return E
  }), n.d(e, "u", function() {
    return S
  }), n.d(e, "s", function() {
    return _
  }), n.d(e, "t", function() {
    return P
  }), n.d(e, "v", function() {
    return x
  }), n.d(e, "w", function() {
    return A
  }), n.d(e, "x", function() {
    return C
  }), n.d(e, "z", function() {
    return O
  }), n.d(e, "A", function() {
    return T
  }), n.d(e, "B", function() {
    return j
  }), n.d(e, "C", function() {
    return I
  }), n.d(e, "p", function() {
    return L
  }), e.l = i, n.d(e, "k", function() {
    return R
  });
  var r = n(1),
    o = (n.n(r), (window.forbes || {})["simple-site"] || {}),
    s = o.adBlockClasses,
    a = o.adId,
    c = o.adZone,
    u = o.advoiceBrand,
    l = (o.authorSlug, o.barChartYears),
    f = (o.blogSlug, o.bucket),
    d = o.categoryCookieName,
    h = o.channelColor,
    p = (o.channelId, o.channelName),
    v = o.cookieName,
    g = o.currentTabName,
    y = (o.division, o.hasWriters),
    m = (o.is404, o.isBlog),
    b = o.isE2E,
    w = o.isLocal,
    E = o.isPreview,
    S = (o.lazyLoadData, o.name, o.naturalId, o.pageLocation, o.premiumProfile),
    _ = o.playerId,
    P = o.premiumPage,
    x = o.region,
    A = o.relativeVideo,
    C = o.retracted,
    O = (o.sectionId, o.specialSlot),
    T = o.streamSourceType,
    j = o.streamSourceValue,
    I = (o.subBlog, o.swimLane),
    k = window.forbes || {},
    L = k.isEurope,
    B = r.isMobile ? "fdcmobile" : "fdc.forbes",
    R = "/7175/" + B + "/" + c
}, function(t, e) {
  var n = function() {
      var t = navigator,
        e = t.userAgent;
      return !!(e.match(/iP(hone|od)/i) || e.match(/iPod/i) || e.match(/BlackBerry/i) || e.match(/Android/i) && e.match(/Mobile/i) || e.match(/Nokia|NOKIA/i) && e.match(/Symbian|Windows Phone/i))
    }(),
    i = function() {
      return !!navigator.userAgent.match(/Tablet|iPad/i)
    }(),
    r = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  t.exports = {
    isMobile: n,
    isTablet: i,
    isIOS: r
  }
}, , function(t, e, n) {
  var i = n(12),
    r = n(16),
    o = n(31),
    s = n(32),
    a = n(33),
    c = function(t, e, n) {
      var u, l, f, d, h = t & c.F,
        p = t & c.G,
        v = t & c.S,
        g = t & c.P,
        y = t & c.B,
        m = p ? i : v ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
        b = p ? r : r[e] || (r[e] = {}),
        w = b.prototype || (b.prototype = {});
      p && (n = e);
      for (u in n) l = !h && m && void 0 !== m[u], f = (l ? m : n)[u], d = y && l ? a(f, i) : g && "function" == typeof f ? a(Function.call, f) : f, m && s(m, u, f, t & c.U), b[u] != f && o(b, u, d), g && w[u] != f && (w[u] = f)
    };
  i.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, , , , , function(t, e, n) {
  var i = n(9);
  t.exports = function(t) {
    if (!i(t)) throw TypeError(t + " is not an object!");
    return t
  }
}, function(t, e) {
  t.exports = function(t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  }
}, , function(t, e, n) {
  var i = n(72)("wks"),
    r = n(47),
    o = n(12).Symbol,
    s = "function" == typeof o;
  (t.exports = function(t) {
    return i[t] || (i[t] = s && o[t] || (s ? o : r)("Symbol." + t))
  }).store = i
}, function(t, e) {
  var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(t, e) {
  t.exports = function(t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }
}, function(t, e, n) {
  "use strict";

  function i() {
    customElements.define("fbs-ad", r.a)
  }
  var r = n(245);
  n(91).a.mark("Loaded"), window.fbsads && window.fbsads.apiReady ? i() : document.addEventListener("FbsAdsBootstrapped", i)
}, function(t, e, n) {
  var i = n(45),
    r = Math.min;
  t.exports = function(t) {
    return t > 0 ? r(i(t), 9007199254740991) : 0
  }
}, function(t, e) {
  var n = t.exports = {
    version: "2.6.3"
  };
  "number" == typeof __e && (__e = n)
}, function(t, e, n) {
  var i = n(3),
    r = n(13),
    o = n(34),
    s = /"/g,
    a = function(t, e, n, i) {
      var r = String(o(t)),
        a = "<" + e;
      return "" !== n && (a += " " + n + '="' + String(i).replace(s, "&quot;") + '"'), a + ">" + r + "</" + e + ">"
    };
  t.exports = function(t, e) {
    var n = {};
    n[t] = e(a), i(i.P + i.F * r(function() {
      var e = "" [t]('"');
      return e !== e.toLowerCase() || e.split('"').length > 3
    }), "String", n)
  }
}, , , function(t, e, n) {
  var i = n(8),
    r = n(96),
    o = n(62),
    s = Object.defineProperty;
  e.f = n(24) ? Object.defineProperty : function(t, e, n) {
    if (i(t), e = o(e, !0), i(n), r) try {
      return s(t, e, n)
    } catch (t) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (t[e] = n.value), t
  }
}, function(t, e, n) {
  var i = n(34);
  t.exports = function(t) {
    return Object(i(t))
  }
}, function(t, e, n) {
  "use strict";
  var i = n(13);
  t.exports = function(t, e) {
    return !!t && i(function() {
      e ? t.call(null, function() {}, 1) : t.call(null)
    })
  }
}, , function(t, e, n) {
  t.exports = !n(13)(function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(t, e, n) {
  var i = n(49),
    r = n(34);
  t.exports = function(t) {
    return i(r(t))
  }
}, function(t, e, n) {
  var i = n(3),
    r = n(16),
    o = n(13);
  t.exports = function(t, e) {
    var n = (r.Object || {})[t] || Object[t],
      s = {};
    s[t] = e(n), i(i.S + i.F * o(function() {
      n(1)
    }), "Object", s)
  }
}, function(t, e) {
  var n = {}.hasOwnProperty;
  t.exports = function(t, e) {
    return n.call(t, e)
  }
}, function(t, e) {
  t.exports = function(t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t
  }
}, , , function(t, e, n) {
  var i = n(20),
    r = n(43);
  t.exports = n(24) ? function(t, e, n) {
    return i.f(t, e, r(1, n))
  } : function(t, e, n) {
    return t[e] = n, t
  }
}, function(t, e, n) {
  var i = n(12),
    r = n(31),
    o = n(27),
    s = n(47)("src"),
    a = Function.toString,
    c = ("" + a).split("toString");
  n(16).inspectSource = function(t) {
    return a.call(t)
  }, (t.exports = function(t, e, n, a) {
    var u = "function" == typeof n;
    u && (o(n, "name") || r(n, "name", e)), t[e] !== n && (u && (o(n, s) || r(n, s, t[e] ? "" + t[e] : c.join(String(e)))), t === i ? t[e] = n : a ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
  })(Function.prototype, "toString", function() {
    return "function" == typeof this && this[s] || a.call(this)
  })
}, function(t, e, n) {
  var i = n(28);
  t.exports = function(t, e, n) {
    if (i(t), void 0 === e) return t;
    switch (n) {
      case 1:
        return function(n) {
          return t.call(e, n)
        };
      case 2:
        return function(n, i) {
          return t.call(e, n, i)
        };
      case 3:
        return function(n, i, r) {
          return t.call(e, n, i, r)
        }
    }
    return function() {
      return t.apply(e, arguments)
    }
  }
}, function(t, e) {
  t.exports = function(t) {
    if (void 0 == t) throw TypeError("Can't call method on  " + t);
    return t
  }
}, function(t, e, n) {
  "use strict";

  function i(t, e) {
    if (!t.includes(".js")) throw new Error("You can only load JS files with this function.");
    var n = o.get(t);
    return n ? "false" !== n.dataset.loaded ? e() : n.addEventListener("load", e) : (n = document.createElement("script"), o.set(t, n), n.dataset.loaded = "false", Object.assign(n, {
      async: !0,
      defer: !0,
      src: t
    }), n.addEventListener("load", function() {
      return n.dataset.loaded = "true"
    }), n.addEventListener("load", e), document.head.appendChild(n)), n
  }

  function r(t, e) {
    if (!t.includes(".css")) throw new Error("You can only load CSS files with this function.");
    var n = o.get(t);
    return n ? "false" !== n.dataset.loaded ? e() : n.addEventListener("load", e) : (n = document.createElement("link"), o.set(t, n), n.dataset.loaded = "false", Object.assign(n, {
      href: t,
      rel: "stylesheet",
      type: "text/css"
    }), n.addEventListener("load", function() {
      return n.dataset.loaded = "true"
    }), n.addEventListener("load", e), document.head.appendChild(n)), n
  }
  e.a = i, e.b = r;
  var o = new Map
}, , function(t, e) {
  var n = {}.toString;
  t.exports = function(t) {
    return n.call(t).slice(8, -1)
  }
}, function(t, e, n) {
  var i = n(63),
    r = n(43),
    o = n(25),
    s = n(62),
    a = n(27),
    c = n(96),
    u = Object.getOwnPropertyDescriptor;
  e.f = n(24) ? u : function(t, e) {
    if (t = o(t), e = s(e, !0), c) try {
      return u(t, e)
    } catch (t) {}
    if (a(t, e)) return r(!i.f.call(t, e), t[e])
  }
}, function(t, e, n) {
  var i = n(33),
    r = n(49),
    o = n(21),
    s = n(15),
    a = n(208);
  t.exports = function(t, e) {
    var n = 1 == t,
      c = 2 == t,
      u = 3 == t,
      l = 4 == t,
      f = 6 == t,
      d = 5 == t || f,
      h = e || a;
    return function(e, a, p) {
      for (var v, g, y = o(e), m = r(y), b = i(a, p, 3), w = s(m.length), E = 0, S = n ? h(e, w) : c ? h(e, 0) : void 0; w > E; E++)
        if ((d || E in m) && (v = m[E], g = b(v, E, y), t))
          if (n) S[E] = g;
          else if (g) switch (t) {
        case 3:
          return !0;
        case 5:
          return v;
        case 6:
          return E;
        case 2:
          S.push(v)
      } else if (l) return !1;
      return f ? -1 : u || l ? l : S
    }
  }
}, , , , function(t, e) {
  t.exports = function(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
}, function(t, e, n) {
  var i = n(98),
    r = n(73);
  t.exports = Object.keys || function(t) {
    return i(t, r)
  }
}, function(t, e) {
  var n = Math.ceil,
    i = Math.floor;
  t.exports = function(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
  }
}, function(t, e, n) {
  var i = n(47)("meta"),
    r = n(9),
    o = n(27),
    s = n(20).f,
    a = 0,
    c = Object.isExtensible || function() {
      return !0
    },
    u = !n(13)(function() {
      return c(Object.preventExtensions({}))
    }),
    l = function(t) {
      s(t, i, {
        value: {
          i: "O" + ++a,
          w: {}
        }
      })
    },
    f = function(t, e) {
      if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
      if (!o(t, i)) {
        if (!c(t)) return "F";
        if (!e) return "E";
        l(t)
      }
      return t[i].i
    },
    d = function(t, e) {
      if (!o(t, i)) {
        if (!c(t)) return !0;
        if (!e) return !1;
        l(t)
      }
      return t[i].w
    },
    h = function(t) {
      return u && p.NEED && c(t) && !o(t, i) && l(t), t
    },
    p = t.exports = {
      KEY: i,
      NEED: !1,
      fastKey: f,
      getWeak: d,
      onFreeze: h
    }
}, function(t, e) {
  var n = 0,
    i = Math.random();
  t.exports = function(t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
  }
}, function(t, e, n) {
  var i = n(8),
    r = n(97),
    o = n(73),
    s = n(71)("IE_PROTO"),
    a = function() {},
    c = function() {
      var t, e = n(70)("iframe"),
        i = o.length;
      for (e.style.display = "none", n(74).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; i--;) delete c.prototype[o[i]];
      return c()
    };
  t.exports = Object.create || function(t, e) {
    var n;
    return null !== t ? (a.prototype = i(t), n = new a, a.prototype = null, n[s] = t) : n = c(), void 0 === e ? n : r(n, e)
  }
}, function(t, e, n) {
  var i = n(37);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
    return "String" == i(t) ? t.split("") : Object(t)
  }
}, function(t, e, n) {
  var i = n(45),
    r = Math.max,
    o = Math.min;
  t.exports = function(t, e) {
    return t = i(t), t < 0 ? r(t + e, 0) : o(t, e)
  }
}, function(t, e) {
  t.exports = !1
}, function(t, e, n) {
  var i = n(20).f,
    r = n(27),
    o = n(11)("toStringTag");
  t.exports = function(t, e, n) {
    t && !r(t = n ? t : t.prototype, o) && i(t, o, {
      configurable: !0,
      value: e
    })
  }
}, function(t, e, n) {
  var i = n(27),
    r = n(21),
    o = n(71)("IE_PROTO"),
    s = Object.prototype;
  t.exports = Object.getPrototypeOf || function(t) {
    return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
  }
}, function(t, e, n) {
  "use strict";
  var i = n(78)(!0);
  n(79)(String, "String", function(t) {
    this._t = String(t), this._i = 0
  }, function() {
    var t, e = this._t,
      n = this._i;
    return n >= e.length ? {
      value: void 0,
      done: !0
    } : (t = i(e, n), this._i += t.length, {
      value: t,
      done: !1
    })
  })
}, function(t, e) {
  t.exports = {}
}, function(t, e, n) {
  var i = n(11)("unscopables"),
    r = Array.prototype;
  void 0 == r[i] && n(31)(r, i, {}), t.exports = function(t) {
    r[i][t] = !0
  }
}, function(t, e, n) {
  "use strict";

  function i() {
    var t = window.location.search.replace("?", "").split("&"),
      e = t.map(function(t) {
        return t.split("=")
      }).find(function(t) {
        return "ss" === t[0] && t[1]
      });
    return e && e[1]
  }

  function r(t) {
    return "none" === t ? [] : t
  }

  function o(t) {
    return "string" == typeof t ? (t || "").replace(/\s*/gi, "").toLowerCase() : t
  }

  function s() {
    var t = p.r && window.location.pathname.includes("/preview/mobile");
    return f.isMobile || t ? b : m
  }

  function a(t) {
    t.params = t.params || {};
    var e = (t.ad_unit_path || "").split("/") || [];
    window.external_services = g(window.external_services || {}, {
      site: e[2],
      zone: (e.slice(3) || []).join("/"),
      author: t.additionalMoatParams.author || "",
      brandvoice: "ad" === t.params.type,
      channel: t.params.channel,
      editorialSlot: t.params.editSlot,
      hashtags: t.params.ht,
      section: t.params.section,
      specialSlot: t.params.specialslot
    })
  }

  function c() {
    var t = Object(p.l)(),
      e = p.c ? "" : i(),
      n = p.C || e,
      s = p.j || "",
      a = {
        ab: Object(v.a)(),
        author: o(r(t.author)),
        bbgterm: Object(d.getBbgTerm)(),
        channel: [o(r(t.channelNames || t.channel)) || ""],
        editSlot: t.edit || "",
        fvid: Object(d.getFvid)(),
        ht: r(t.hashtags),
        id: p.b || t.naturalID || "",
        login: !1,
        section: [o(r(t.sectionNames || t.section)) || ""],
        specialslot: n ? "" : t.slot || "",
        swimlane: n,
        tab: s,
        templatetype: t.templateType,
        type: o(r(t.contribType || t.type)),
        badges: t.badges
      };
    p.u && (a.premiumProfile = p.u);
    var c = {
      author: r(t.author)
    };
    t.editorsPick && (a.ep = t.editorsPick), t.coverStory && (a.coverstory = t.coverStory), t.bertieBadgeSlugs && (a.badges = t.bertieBadgeSlugs), t.negativeSentimentCompanies && (a.ns = t.negativeSentimentCompanies), (t.entitySegments || []).length > 0 && (a.es = t.entitySegments.join(","), a.essrc = t.entitySegments.map(function(t) {
      return (window.fbsads.getTargetingSource() ? window.fbsads.getTargetingSource() + "_" : "") + t
    }).join(",")), t.sentimentCompanies && (a.co = t.sentimentCompanies), (a.specialslot || a.swimlane) && (a.channel = "", a.section = "", a.displaychannel = "", a.displaysection = "", a.swimlane && (a.specialslot = "")), t.brandVoice && (a.advoice = t.brandVoice), m = g({}, h.desktopAdConfig, {
      bypass_validate_moat_yield: p.o,
      params: a,
      additionalMoatParams: c,
      ad_unit_path: p.k,
      isEurope: p.p
    }), b = g({}, h.mobileAdConfig, {
      bypass_validate_moat_yield: p.o,
      params: a,
      additionalMoatParams: c,
      ad_unit_path: p.k,
      isEurope: p.p
    })
  }

  function u(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = s();
    !1 !== t && (n.params.specialslot = t), e && n.positions.mobile.sizes && n.positions.mobile.sizes.splice(2, 1), a(n), y.applyConfig(n)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getSwimlane = i, e.updateAdParams = c, e.applyConfig = u;
  var l = (n(14), n(247)),
    f = n(1),
    d = (n.n(f), n(69)),
    h = n(269),
    p = (n.n(h), n(0)),
    v = n(270),
    g = Object.assign || function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
    };
  p.o && localStorage.setItem("apstagDebug", "true"), window.fbsads = window.fbsads || new l.a;
  var y = window.fbsads,
    m = void 0,
    b = void 0;
  c(), a(s()), y.bootstrap(s())
}, , , , , function(t, e, n) {
  var i = n(9);
  t.exports = function(t, e) {
    if (!i(t)) return t;
    var n, r;
    if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
    if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
    if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
    throw TypeError("Can't convert object to primitive value")
  }
}, function(t, e) {
  e.f = {}.propertyIsEnumerable
}, function(t, e) {
  e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
  "use strict";
  var i = n(66),
    r = {};
  r[n(11)("toStringTag")] = "z", r + "" != "[object z]" && n(32)(Object.prototype, "toString", function() {
    return "[object " + i(this) + "]"
  }, !0)
}, function(t, e, n) {
  var i = n(37),
    r = n(11)("toStringTag"),
    o = "Arguments" == i(function() {
      return arguments
    }()),
    s = function(t, e) {
      try {
        return t[e]
      } catch (t) {}
    };
  t.exports = function(t) {
    var e, n, a;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
  }
}, function(t, e, n) {
  "use strict";
  var i = n(66),
    r = RegExp.prototype.exec;
  t.exports = function(t, e) {
    var n = t.exec;
    if ("function" == typeof n) {
      var o = n.call(t, e);
      if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
      return o
    }
    if ("RegExp" !== i(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
    return r.call(t, e)
  }
}, function(t, e, n) {
  "use strict";
  n(195);
  var i = n(32),
    r = n(31),
    o = n(13),
    s = n(34),
    a = n(11),
    c = n(83),
    u = a("species"),
    l = !o(function() {
      var t = /./;
      return t.exec = function() {
        var t = [];
        return t.groups = {
          a: "7"
        }, t
      }, "7" !== "".replace(t, "$<a>")
    }),
    f = function() {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function() {
        return e.apply(this, arguments)
      };
      var n = "ab".split(t);
      return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
  t.exports = function(t, e, n) {
    var d = a(t),
      h = !o(function() {
        var e = {};
        return e[d] = function() {
          return 7
        }, 7 != "" [t](e)
      }),
      p = h ? !o(function() {
        var e = !1,
          n = /a/;
        return n.exec = function() {
          return e = !0, null
        }, "split" === t && (n.constructor = {}, n.constructor[u] = function() {
          return n
        }), n[d](""), !e
      }) : void 0;
    if (!h || !p || "replace" === t && !l || "split" === t && !f) {
      var v = /./ [d],
        g = n(s, d, "" [t], function(t, e, n, i, r) {
          return e.exec === c ? h && !r ? {
            done: !0,
            value: v.call(e, n, i)
          } : {
            done: !0,
            value: t.call(n, e, i)
          } : {
            done: !1
          }
        }),
        y = g[0],
        m = g[1];
      i(String.prototype, t, y), r(RegExp.prototype, d, 2 == e ? function(t, e) {
        return m.call(t, this, e)
      } : function(t) {
        return m.call(t, this)
      })
    }
  }
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n.d(e, "getFvid", function() {
    return c
  }), n.d(e, "getBbgTerm", function() {
    return u
  }), n.d(e, "getBvLeftRailHeadlineMobile", function() {
    return l
  }), n.d(e, "virtualTrack", function() {
    return d
  });
  var i = n(260),
    r = n(1),
    o = (n.n(r), n(0));
  window.trackingService = window.trackingService || new i.a;
  var s = window,
    a = s.trackingService;
  a.setEnvironment(o.q ? "staging" : "prod"), a.isEurope = o.p;
  var c = function() {
      return a.getOrCreateClientId()
    },
    u = function() {
      return window.location.search.substr(1).split("&").find(function(t) {
        return t.match(/(^|&)source=bloomberg($|&)/)
      }) ? "true" : "false"
    },
    l = function(t) {
      return t.index ? t.startFromBrandvoice || 1 !== t.index ? t.startFromBrandvoice && t.index < 4 ? "mobilerecommend" : "mobileother" : t.fromNtvAd ? "mobilead" : "mobile scheduler" : "none"
    },
    f = function(t) {
      var e = Object(o.l)(),
        n = {
          author: e.author || "none",
          site: e.siteSlug || "none",
          contribType: e.contribType || "none",
          blogType: e.blogType || "none",
          brandVoice: e.brandVoice || "none",
          channel: e.channel || "none",
          slot: e.slot || "none",
          bertie: e.bertie || "false",
          pageType: e.pageType || "none",
          DFPSite: r.isMobile ? "fdcmobile" : "fdc.forbes",
          DFPZone: e.dfpZone || "none",
          published: e.publishDate || "none",
          paragraphs: "" + (e.paragraphs || "none"),
          categories: e.categories || "none",
          edit: e.edit || "none",
          hashtags: e.hashtags || "none",
          naturalID: e.naturalID || "none",
          wordCount: e.wordCount || "none",
          pageNumber: "" + (e.pageNumber || "none"),
          pageTotal: "" + (e.pageTotal || "none"),
          publishHour: e.publishHour || "none",
          updateDate: e.updateDate || "none",
          updateHour: e.updateHour || "none",
          section: e.section || "none",
          videoPlacement: e.videoLocation || "none",
          login: "false",
          trendingHashtags: e.hashtagsTrending || "none",
          heroImage: e.heroImage || "none",
          imageCount: "number" == typeof e.imageCount ? e.imageCount.toString() : "none",
          customPage: e.customPage || "none",
          weekdayPublish: e.weekdayPublish || "none",
          contribActive: e.contribActive || "none",
          primaryChannel: e.primaryChannel || "none",
          primarySection: e.primarySection || "none",
          bvContentSource: e.brandVoice && e.bvContentSource || "none",
          bvLeftRailHeadline: l(e),
          streamPosition: "number" == typeof e.streamPosition ? e.streamPosition : "none",
          DFPLineItemID: e.ntvContentmLineItemId || "none",
          bvProgramType: e.bvProgramType || "none",
          coreBrands: e.coreBrands || "none",
          contribDivision: e.contribDivision || "none",
          insights: e.insights || "none",
          coAuthorControl: e.coAuthorControl,
          newsKeywords: e.newsKeywords || "none",
          coAuthor: e.coAuthor || "none",
          channelNames: e.channelNames || "none",
          sectionNames: e.sectionNames || "none",
          cbSections: e.sections || "",
          cbPath: document.location.pathname,
          fastCh: e.fastCh || "",
          fastSe: e.fastSe || "",
          fastSu: e.fastSu || "",
          fastPt: e.fastPt || "",
          fastI: e.naturalID || "",
          fastAu: e.fastAu || "",
          fastAt: e.fastAt || "",
          fastN: "",
          version: e.version || "",
          description: e.description || "",
          seniorContributor: e.seniorContributor || "none",
          paidContentType: e.paidContentType || "none",
          paidContentBrand: e.paidContentBrand || "none",
          premiumProfiles: e.premiumProfiles || "none",
          templateType: e.templateType || "none"
        };
      return t && (n.event = "analyticsVPV", n.path = window.location.pathname, n.virtualPage = "true", n.cbTitle = e.title || ""), n
    },
    d = function(t) {
      a.track(f(t), t)
    };
  window.forbes["simple-site"].isPreview || a.track(f(), !0)
}, function(t, e, n) {
  var i = n(9),
    r = n(12).document,
    o = i(r) && i(r.createElement);
  t.exports = function(t) {
    return o ? r.createElement(t) : {}
  }
}, function(t, e, n) {
  var i = n(72)("keys"),
    r = n(47);
  t.exports = function(t) {
    return i[t] || (i[t] = r(t))
  }
}, function(t, e, n) {
  var i = n(16),
    r = n(12),
    o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
  (t.exports = function(t, e) {
    return o[t] || (o[t] = void 0 !== e ? e : {})
  })("versions", []).push({
    version: i.version,
    mode: n(51) ? "pure" : "global",
    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function(t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
  var i = n(12).document;
  t.exports = i && i.documentElement
}, function(t, e, n) {
  var i = n(98),
    r = n(73).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function(t) {
    return i(t, r)
  }
}, function(t, e, n) {
  var i = n(9),
    r = n(8),
    o = function(t, e) {
      if (r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
  t.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
      try {
        i = n(33)(Function.call, n(38).f(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array)
      } catch (t) {
        e = !0
      }
      return function(t, n) {
        return o(t, n), e ? t.__proto__ = n : i(t, n), t
      }
    }({}, !1) : void 0),
    check: o
  }
}, function(t, e, n) {
  var i = n(37);
  t.exports = Array.isArray || function(t) {
    return "Array" == i(t)
  }
}, function(t, e, n) {
  var i = n(45),
    r = n(34);
  t.exports = function(t) {
    return function(e, n) {
      var o, s, a = String(r(e)),
        c = i(n),
        u = a.length;
      return c < 0 || c >= u ? t ? "" : void 0 : (o = a.charCodeAt(c), o < 55296 || o > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : o : t ? a.slice(c, c + 2) : s - 56320 + (o - 55296 << 10) + 65536)
    }
  }
}, function(t, e, n) {
  "use strict";
  var i = n(51),
    r = n(3),
    o = n(32),
    s = n(31),
    a = n(55),
    c = n(101),
    u = n(52),
    l = n(53),
    f = n(11)("iterator"),
    d = !([].keys && "next" in [].keys()),
    h = function() {
      return this
    };
  t.exports = function(t, e, n, p, v, g, y) {
    c(n, e, p);
    var m, b, w, E = function(t) {
        if (!d && t in x) return x[t];
        switch (t) {
          case "keys":
          case "values":
            return function() {
              return new n(this, t)
            }
        }
        return function() {
          return new n(this, t)
        }
      },
      S = e + " Iterator",
      _ = "values" == v,
      P = !1,
      x = t.prototype,
      A = x[f] || x["@@iterator"] || v && x[v],
      C = A || E(v),
      O = v ? _ ? E("entries") : C : void 0,
      T = "Array" == e ? x.entries || A : A;
    if (T && (w = l(T.call(new t))) !== Object.prototype && w.next && (u(w, S, !0), i || "function" == typeof w[f] || s(w, f, h)), _ && A && "values" !== A.name && (P = !0, C = function() {
        return A.call(this)
      }), i && !y || !d && !P && x[f] || s(x, f, C), a[e] = C, a[S] = h, v)
      if (m = {
          values: _ ? C : E("values"),
          keys: g ? C : E("keys"),
          entries: O
        }, y)
        for (b in m) b in x || o(x, b, m[b]);
      else r(r.P + r.F * (d || P), e, m);
    return m
  }
}, function(t, e, n) {
  var i = n(105),
    r = n(34);
  t.exports = function(t, e, n) {
    if (i(e)) throw TypeError("String#" + n + " doesn't accept regex!");
    return String(r(t))
  }
}, function(t, e, n) {
  var i = n(11)("match");
  t.exports = function(t) {
    var e = /./;
    try {
      "/./" [t](e)
    } catch (n) {
      try {
        return e[i] = !1, !"/./" [t](e)
      } catch (t) {}
    }
    return !0
  }
}, function(t, e, n) {
  "use strict";
  var i = n(78)(!0);
  t.exports = function(t, e, n) {
    return e + (n ? i(t, e).length : 1)
  }
}, function(t, e, n) {
  "use strict";
  var i = n(196),
    r = RegExp.prototype.exec,
    o = String.prototype.replace,
    s = r,
    a = function() {
      var t = /a/,
        e = /b*/g;
      return r.call(t, "a"), r.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
    }(),
    c = void 0 !== /()??/.exec("")[1];
  (a || c) && (s = function(t) {
    var e, n, s, u, l = this;
    return c && (n = new RegExp("^" + l.source + "$(?!\\s)", i.call(l))), a && (e = l.lastIndex), s = r.call(l, t), a && s && (l.lastIndex = l.global ? s.index + s[0].length : e), c && s && s.length > 1 && o.call(s[0], n, function() {
      for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (s[u] = void 0)
    }), s
  }), t.exports = s
}, function(t, e, n) {
  var i = n(11)("iterator"),
    r = !1;
  try {
    var o = [7][i]();
    o.return = function() {
      r = !0
    }, Array.from(o, function() {
      throw 2
    })
  } catch (t) {}
  t.exports = function(t, e) {
    if (!e && !r) return !1;
    var n = !1;
    try {
      var o = [7],
        s = o[i]();
      s.next = function() {
        return {
          done: n = !0
        }
      }, o[i] = function() {
        return s
      }, t(o)
    } catch (t) {}
    return n
  }
}, function(t, e, n) {
  "use strict";
  var i = n(12),
    r = n(20),
    o = n(24),
    s = n(11)("species");
  t.exports = function(t) {
    var e = i[t];
    o && e && !e[s] && r.f(e, s, {
      configurable: !0,
      get: function() {
        return this
      }
    })
  }
}, function(t, e, n) {
  for (var i = n(112), r = n(44), o = n(32), s = n(12), a = n(31), c = n(55), u = n(11), l = u("iterator"), f = u("toStringTag"), d = c.Array, h = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, p = r(h), v = 0; v < p.length; v++) {
    var g, y = p[v],
      m = h[y],
      b = s[y],
      w = b && b.prototype;
    if (w && (w[l] || a(w, l, d), w[f] || a(w, f, y), c[y] = d, m))
      for (g in i) w[g] || o(w, g, i[g], !0)
  }
}, function(t, e) {
  t.exports = function(t, e, n, i) {
    if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
    return t
  }
}, function(t, e, n) {
  var i = n(33),
    r = n(107),
    o = n(108),
    s = n(8),
    a = n(15),
    c = n(110),
    u = {},
    l = {},
    e = t.exports = function(t, e, n, f, d) {
      var h, p, v, g, y = d ? function() {
          return t
        } : c(t),
        m = i(n, f, e ? 2 : 1),
        b = 0;
      if ("function" != typeof y) throw TypeError(t + " is not iterable!");
      if (o(y)) {
        for (h = a(t.length); h > b; b++)
          if ((g = e ? m(s(p = t[b])[0], p[1]) : m(t[b])) === u || g === l) return g
      } else
        for (v = y.call(t); !(p = v.next()).done;)
          if ((g = r(v, m, p.value, e)) === u || g === l) return g
    };
  e.BREAK = u, e.RETURN = l
}, function(t, e, n) {
  var i = n(32);
  t.exports = function(t, e, n) {
    for (var r in e) i(t, r, e[r], n);
    return t
  }
}, function(t, e, n) {
  var i = n(9);
  t.exports = function(t, e) {
    if (!i(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
    return t
  }
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {}
    return t.mark = function(t) {
      window.performance && performance.mark && performance.mark("FbsAds_" + t.replace(" ", "_"))
    }, t
  }()
}, , , , , function(t, e, n) {
  t.exports = !n(24) && !n(13)(function() {
    return 7 != Object.defineProperty(n(70)("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(t, e, n) {
  var i = n(20),
    r = n(8),
    o = n(44);
  t.exports = n(24) ? Object.defineProperties : function(t, e) {
    r(t);
    for (var n, s = o(e), a = s.length, c = 0; a > c;) i.f(t, n = s[c++], e[n]);
    return t
  }
}, function(t, e, n) {
  var i = n(27),
    r = n(25),
    o = n(99)(!1),
    s = n(71)("IE_PROTO");
  t.exports = function(t, e) {
    var n, a = r(t),
      c = 0,
      u = [];
    for (n in a) n != s && i(a, n) && u.push(n);
    for (; e.length > c;) i(a, n = e[c++]) && (~o(u, n) || u.push(n));
    return u
  }
}, function(t, e, n) {
  var i = n(25),
    r = n(15),
    o = n(50);
  t.exports = function(t) {
    return function(e, n, s) {
      var a, c = i(e),
        u = r(c.length),
        l = o(s, u);
      if (t && n != n) {
        for (; u > l;)
          if ((a = c[l++]) != a) return !0
      } else
        for (; u > l; l++)
          if ((t || l in c) && c[l] === n) return t || l || 0;
      return !t && -1
    }
  }
}, function(t, e) {
  t.exports = function(t, e, n) {
    var i = void 0 === n;
    switch (e.length) {
      case 0:
        return i ? t() : t.call(n);
      case 1:
        return i ? t(e[0]) : t.call(n, e[0]);
      case 2:
        return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
      case 3:
        return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
      case 4:
        return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
    }
    return t.apply(n, e)
  }
}, function(t, e, n) {
  "use strict";
  var i = n(48),
    r = n(43),
    o = n(52),
    s = {};
  n(31)(s, n(11)("iterator"), function() {
    return this
  }), t.exports = function(t, e, n) {
    t.prototype = i(s, {
      next: r(1, n)
    }), o(t, e + " Iterator")
  }
}, function(t, e, n) {
  e.f = n(11)
}, function(t, e, n) {
  var i = n(25),
    r = n(75).f,
    o = {}.toString,
    s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    a = function(t) {
      try {
        return r(t)
      } catch (t) {
        return s.slice()
      }
    };
  t.exports.f = function(t) {
    return s && "[object Window]" == o.call(t) ? a(t) : r(i(t))
  }
}, function(t, e) {
  t.exports = Object.is || function(t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
  }
}, function(t, e, n) {
  var i = n(9),
    r = n(37),
    o = n(11)("match");
  t.exports = function(t) {
    var e;
    return i(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == r(t))
  }
}, function(t, e, n) {
  var i = n(8),
    r = n(28),
    o = n(11)("species");
  t.exports = function(t, e) {
    var n, s = i(t).constructor;
    return void 0 === s || void 0 == (n = i(s)[o]) ? e : r(n)
  }
}, function(t, e, n) {
  var i = n(8);
  t.exports = function(t, e, n, r) {
    try {
      return r ? e(i(n)[0], n[1]) : e(n)
    } catch (e) {
      var o = t.return;
      throw void 0 !== o && i(o.call(t)), e
    }
  }
}, function(t, e, n) {
  var i = n(55),
    r = n(11)("iterator"),
    o = Array.prototype;
  t.exports = function(t) {
    return void 0 !== t && (i.Array === t || o[r] === t)
  }
}, function(t, e, n) {
  "use strict";
  var i = n(20),
    r = n(43);
  t.exports = function(t, e, n) {
    e in t ? i.f(t, e, r(0, n)) : t[e] = n
  }
}, function(t, e, n) {
  var i = n(66),
    r = n(11)("iterator"),
    o = n(55);
  t.exports = n(16).getIteratorMethod = function(t) {
    if (void 0 != t) return t[r] || t["@@iterator"] || o[i(t)]
  }
}, function(t, e, n) {
  var i = n(28),
    r = n(21),
    o = n(49),
    s = n(15);
  t.exports = function(t, e, n, a, c) {
    i(e);
    var u = r(t),
      l = o(u),
      f = s(u.length),
      d = c ? f - 1 : 0,
      h = c ? -1 : 1;
    if (n < 2)
      for (;;) {
        if (d in l) {
          a = l[d], d += h;
          break
        }
        if (d += h, c ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value")
      }
    for (; c ? d >= 0 : f > d; d += h) d in l && (a = e(a, l[d], d, u));
    return a
  }
}, function(t, e, n) {
  "use strict";
  var i = n(56),
    r = n(113),
    o = n(55),
    s = n(25);
  t.exports = n(79)(Array, "Array", function(t, e) {
    this._t = s(t), this._i = 0, this._k = e
  }, function() {
    var t = this._t,
      e = this._k,
      n = this._i++;
    return !t || n >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]])
  }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e) {
  t.exports = function(t, e) {
    return {
      value: e,
      done: !!t
    }
  }
}, function(t, e, n) {
  var i, r, o, s = n(33),
    a = n(100),
    c = n(74),
    u = n(70),
    l = n(12),
    f = l.process,
    d = l.setImmediate,
    h = l.clearImmediate,
    p = l.MessageChannel,
    v = l.Dispatch,
    g = 0,
    y = {},
    m = function() {
      var t = +this;
      if (y.hasOwnProperty(t)) {
        var e = y[t];
        delete y[t], e()
      }
    },
    b = function(t) {
      m.call(t.data)
    };
  d && h || (d = function(t) {
    for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
    return y[++g] = function() {
      a("function" == typeof t ? t : Function(t), e)
    }, i(g), g
  }, h = function(t) {
    delete y[t]
  }, "process" == n(37)(f) ? i = function(t) {
    f.nextTick(s(m, t, 1))
  } : v && v.now ? i = function(t) {
    v.now(s(m, t, 1))
  } : p ? (r = new p, o = r.port2, r.port1.onmessage = b, i = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function(t) {
    l.postMessage(t + "", "*")
  }, l.addEventListener("message", b, !1)) : i = "onreadystatechange" in u("script") ? function(t) {
    c.appendChild(u("script")).onreadystatechange = function() {
      c.removeChild(this), m.call(t)
    }
  } : function(t) {
    setTimeout(s(m, t, 1), 0)
  }), t.exports = {
    set: d,
    clear: h
  }
}, function(t, e, n) {
  "use strict";

  function i(t) {
    var e, n;
    this.promise = new t(function(t, i) {
      if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
      e = t, n = i
    }), this.resolve = r(e), this.reject = r(n)
  }
  var r = n(28);
  t.exports.f = function(t) {
    return new i(t)
  }
}, function(t, e, n) {
  "use strict";
  var i = n(20).f,
    r = n(48),
    o = n(89),
    s = n(33),
    a = n(87),
    c = n(88),
    u = n(79),
    l = n(113),
    f = n(85),
    d = n(24),
    h = n(46).fastKey,
    p = n(90),
    v = d ? "_s" : "size",
    g = function(t, e) {
      var n, i = h(e);
      if ("F" !== i) return t._i[i];
      for (n = t._f; n; n = n.n)
        if (n.k == e) return n
    };
  t.exports = {
    getConstructor: function(t, e, n, u) {
      var l = t(function(t, i) {
        a(t, l, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, void 0 != i && c(i, n, t[u], t)
      });
      return o(l.prototype, {
        clear: function() {
          for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
          t._f = t._l = void 0, t[v] = 0
        },
        delete: function(t) {
          var n = p(this, e),
            i = g(n, t);
          if (i) {
            var r = i.n,
              o = i.p;
            delete n._i[i.i], i.r = !0, o && (o.n = r), r && (r.p = o), n._f == i && (n._f = r), n._l == i && (n._l = o), n[v]--
          }
          return !!i
        },
        forEach: function(t) {
          p(this, e);
          for (var n, i = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
            for (i(n.v, n.k, this); n && n.r;) n = n.p
        },
        has: function(t) {
          return !!g(p(this, e), t)
        }
      }), d && i(l.prototype, "size", {
        get: function() {
          return p(this, e)[v]
        }
      }), l
    },
    def: function(t, e, n) {
      var i, r, o = g(t, e);
      return o ? o.v = n : (t._l = o = {
        i: r = h(e, !0),
        k: e,
        v: n,
        p: i = t._l,
        n: void 0,
        r: !1
      }, t._f || (t._f = o), i && (i.n = o), t[v]++, "F" !== r && (t._i[r] = o)), t
    },
    getEntry: g,
    setStrong: function(t, e, n) {
      u(t, e, function(t, n) {
        this._t = p(t, e), this._k = n, this._l = void 0
      }, function() {
        for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
        return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? l(0, n.k) : "values" == e ? l(0, n.v) : l(0, [n.k, n.v]) : (t._t = void 0, l(1))
      }, n ? "entries" : "values", !n, !0), f(e)
    }
  }
}, function(t, e, n) {
  "use strict";
  var i = n(12),
    r = n(3),
    o = n(32),
    s = n(89),
    a = n(46),
    c = n(88),
    u = n(87),
    l = n(9),
    f = n(13),
    d = n(84),
    h = n(52),
    p = n(233);
  t.exports = function(t, e, n, v, g, y) {
    var m = i[t],
      b = m,
      w = g ? "set" : "add",
      E = b && b.prototype,
      S = {},
      _ = function(t) {
        var e = E[t];
        o(E, t, "delete" == t ? function(t) {
          return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t)
        } : "has" == t ? function(t) {
          return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t)
        } : "get" == t ? function(t) {
          return y && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
        } : "add" == t ? function(t) {
          return e.call(this, 0 === t ? 0 : t), this
        } : function(t, n) {
          return e.call(this, 0 === t ? 0 : t, n), this
        })
      };
    if ("function" == typeof b && (y || E.forEach && !f(function() {
        (new b).entries().next()
      }))) {
      var P = new b,
        x = P[w](y ? {} : -0, 1) != P,
        A = f(function() {
          P.has(1)
        }),
        C = d(function(t) {
          new b(t)
        }),
        O = !y && f(function() {
          for (var t = new b, e = 5; e--;) t[w](e, e);
          return !t.has(-0)
        });
      C || (b = e(function(e, n) {
        u(e, b, t);
        var i = p(new m, e, b);
        return void 0 != n && c(n, g, i[w], i), i
      }), b.prototype = E, E.constructor = b), (A || O) && (_("delete"), _("has"), g && _("get")), (O || x) && _(w), y && E.clear && delete E.clear
    } else b = v.getConstructor(e, t, g, w), s(b.prototype, n), a.NEED = !0;
    return h(b, t), S[t] = b, r(r.G + r.W + r.F * (b != m), S), y || v.setStrong(b, t, g), b
  }
}, function(t, e, n) {
  "use strict";

  function i(t) {
    window.performance && performance.mark && performance.mark("Fbs Video: " + t)
  }
  e.a = i
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {
      this.apiReady = !1
    }
    return t
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return r
  });
  var i = n(35),
    r = function() {
      function t() {}
      return Object.defineProperty(t.prototype, "apstag", {
        get: function() {
          return window.apstag
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.init = function(t) {
        this.initAmazon(t), this.subscribeToRemoveTargeting()
      }, t.prototype.fetchBids = function(t) {
        var e = this;
        return new Promise(function(n, i) {
          (t || []).length && e.apstag.fetchBids({
            slots: t,
            timeout: 2e3
          }, function(t) {
            n(t)
          })
        })
      }, t.prototype.resetAmazonSlots = function() {}, t.prototype.initAmazon = function(t) {
        window.apstagDEBUG = {
          testBidTimeout: 90
        }, this.amazonSetup();
        var e = {
          pubID: "3038",
          adServer: "googletag",
          deals: !0
        };
        t && (e.params = {
          si_pageview: t
        }), this.apstag.init(e)
      }, t.prototype.amazonSetup = function() {
        function t(t, e) {
          window.apstag._Q.push([t, e])
        }
        window.apstag || (window.apstag = {
          init: function() {
            t("i", arguments)
          },
          fetchBids: function() {
            t("f", arguments)
          },
          setDisplayBids: function() {},
          _Q: []
        }, Object(i.a)("//c.amazon-adsystem.com/aax2/apstag.js"))
      }, t.prototype.setAmazonTargeting = function(t, e) {
        var n = (t.getTargeting("pos") || [])[0];
        e && e.filter(function(t) {
          return t && t.slotID === n
        }).forEach(function(n) {
          ((n.helpers || {}).targetingKeys || []).forEach(function(e) {
            t.setTargeting(e, n.targeting[e])
          }), e.splice(e.indexOf(n), 1)
        })
      }, t.prototype.subscribeToRemoveTargeting = function() {
        var t = this;
        document.addEventListener("fbs-ad-render", function(e) {
          var n = e.detail;
          t.apstag.targetingKeys().forEach(function(t) {
            n.slot.clearTargeting(t)
          })
        })
      }, t
    }()
}, function(t, e, n) {
  "use strict";
  var i = n(249);
  n.d(e, "a", function() {
    return i.a
  }), n.d(e, "b", function() {
    return i.b
  })
}, function(t, e, n) {
  "use strict";
  var i = (n(252), n(253));
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = {
    mobile: !1,
    ad_unit_path: "7175/fdc.forbes/article-d",
    positions: {
      top: {
        slot_id: "top",
        sizes: [
          [728, 90],
          [970, 250],
          [970, 90],
          [970, 66],
          [1, 1], "fluid"
        ],
        criteoZoneId: 1168047
      },
      rec: {
        slot_id: "rec",
        sizes: [
          [300, 250],
          [336, 280],
          [300, 600],
          [1, 1], "fluid"
        ],
        criteoZoneId: 1168043
      },
      mobile: {
        slot_id: "mobile",
        sizes: [
          [300, 50],
          [320, 50],
          [1, 1]
        ]
      },
      mobilerec: {
        slot_id: "mobilerec",
        sizes: [
          [300, 250],
          [300, 50],
          [320, 180],
          [320, 50],
          [1, 1]
        ]
      }
    },
    params: {},
    isEurope: !1
  }
}, function(t, e, n) {
  "use strict";
  var i = n(267);
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {}
    return t.generateClientId = function() {
      for (var t = this, e = this.hash31(window.location.pathname + window.location.hash), n = 2147483647 & (new Date).getTime(), i = [], r = "", o = 0; o < 5; o++) i[o] = 268435456 * Math.random() & 2147483647;
      return i[0] = i[0] ^ 268435455 & e, i[1] = i[1] ^ 268435455 & n, i[2] = i[2] ^ (n >> 28 << 3 | e >> 28), i.forEach(function(e) {
        r += t.pad(e.toString(16), 7, "0", !1)
      }), r
    }, t.hash31 = function(t) {
      for (var e = 2147483647, n = t.length; n--;) e = (e << 5) - e + t.charCodeAt(n) & 2147483647;
      return e
    }, t.pad = function(t, e, n, i) {
      for (t = "" + t; t.length < e;) t = i ? t + n : n + t;
      return t
    }, t
  }()
}, , , , function(t, e, n) {
  n(130), n(131), n(148), n(169), n(200), n(225), n(231), n(234), n(236), n(237), n(238), n(239), n(240), n(57), n(69), n(271), n(272), t.exports = n(273)
}, function(t, e) {
  ! function() {
    if ("undefined" != typeof window) try {
      var t = new window.CustomEvent("test", {
        cancelable: !0
      });
      if (t.preventDefault(), !0 !== t.defaultPrevented) throw new Error("Could not prevent default")
    } catch (t) {
      var e = function(t, e) {
        var n, i;
        return e = e || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        }, n = document.createEvent("CustomEvent"), n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i = n.preventDefault, n.preventDefault = function() {
          i.call(this);
          try {
            Object.defineProperty(this, "defaultPrevented", {
              get: function() {
                return !0
              }
            })
          } catch (t) {
            this.defaultPrevented = !0
          }
        }, n
      };
      e.prototype = window.Event.prototype, window.CustomEvent = e
    }
  }()
}, function(t, e, n) {
  n(132), n(133), n(135), n(136), n(137), n(138), n(139), n(140), n(141), n(142), n(143), n(145), n(146), n(147), t.exports = n(16).Reflect
}, function(t, e, n) {
  var i = n(3),
    r = n(28),
    o = n(8),
    s = (n(12).Reflect || {}).apply,
    a = Function.apply;
  i(i.S + i.F * !n(13)(function() {
    s(function() {})
  }), "Reflect", {
    apply: function(t, e, n) {
      var i = r(t),
        c = o(n);
      return s ? s(i, e, c) : a.call(i, e, c)
    }
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(48),
    o = n(28),
    s = n(8),
    a = n(9),
    c = n(13),
    u = n(134),
    l = (n(12).Reflect || {}).construct,
    f = c(function() {
      function t() {}
      return !(l(function() {}, [], t) instanceof t)
    }),
    d = !c(function() {
      l(function() {})
    });
  i(i.S + i.F * (f || d), "Reflect", {
    construct: function(t, e) {
      o(t), s(e);
      var n = arguments.length < 3 ? t : o(arguments[2]);
      if (d && !f) return l(t, e, n);
      if (t == n) {
        switch (e.length) {
          case 0:
            return new t;
          case 1:
            return new t(e[0]);
          case 2:
            return new t(e[0], e[1]);
          case 3:
            return new t(e[0], e[1], e[2]);
          case 4:
            return new t(e[0], e[1], e[2], e[3])
        }
        var i = [null];
        return i.push.apply(i, e), new(u.apply(t, i))
      }
      var c = n.prototype,
        h = r(a(c) ? c : Object.prototype),
        p = Function.apply.call(t, h, e);
      return a(p) ? p : h
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(28),
    r = n(9),
    o = n(100),
    s = [].slice,
    a = {},
    c = function(t, e, n) {
      if (!(e in a)) {
        for (var i = [], r = 0; r < e; r++) i[r] = "a[" + r + "]";
        a[e] = Function("F,a", "return new F(" + i.join(",") + ")")
      }
      return a[e](t, n)
    };
  t.exports = Function.bind || function(t) {
    var e = i(this),
      n = s.call(arguments, 1),
      a = function() {
        var i = n.concat(s.call(arguments));
        return this instanceof a ? c(e, i.length, i) : o(e, i, t)
      };
    return r(e.prototype) && (a.prototype = e.prototype), a
  }
}, function(t, e, n) {
  var i = n(20),
    r = n(3),
    o = n(8),
    s = n(62);
  r(r.S + r.F * n(13)(function() {
    Reflect.defineProperty(i.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    })
  }), "Reflect", {
    defineProperty: function(t, e, n) {
      o(t), e = s(e, !0), o(n);
      try {
        return i.f(t, e, n), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(38).f,
    o = n(8);
  i(i.S, "Reflect", {
    deleteProperty: function(t, e) {
      var n = r(o(t), e);
      return !(n && !n.configurable) && delete t[e]
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(8),
    o = function(t) {
      this._t = r(t), this._i = 0;
      var e, n = this._k = [];
      for (e in t) n.push(e)
    };
  n(101)(o, "Object", function() {
    var t, e = this,
      n = e._k;
    do {
      if (e._i >= n.length) return {
        value: void 0,
        done: !0
      }
    } while (!((t = n[e._i++]) in e._t));
    return {
      value: t,
      done: !1
    }
  }), i(i.S, "Reflect", {
    enumerate: function(t) {
      return new o(t)
    }
  })
}, function(t, e, n) {
  function i(t, e) {
    var n, a, l = arguments.length < 3 ? t : arguments[2];
    return u(t) === l ? t[e] : (n = r.f(t, e)) ? s(n, "value") ? n.value : void 0 !== n.get ? n.get.call(l) : void 0 : c(a = o(t)) ? i(a, e, l) : void 0
  }
  var r = n(38),
    o = n(53),
    s = n(27),
    a = n(3),
    c = n(9),
    u = n(8);
  a(a.S, "Reflect", {
    get: i
  })
}, function(t, e, n) {
  var i = n(38),
    r = n(3),
    o = n(8);
  r(r.S, "Reflect", {
    getOwnPropertyDescriptor: function(t, e) {
      return i.f(o(t), e)
    }
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(53),
    o = n(8);
  i(i.S, "Reflect", {
    getPrototypeOf: function(t) {
      return r(o(t))
    }
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Reflect", {
    has: function(t, e) {
      return e in t
    }
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(8),
    o = Object.isExtensible;
  i(i.S, "Reflect", {
    isExtensible: function(t) {
      return r(t), !o || o(t)
    }
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Reflect", {
    ownKeys: n(144)
  })
}, function(t, e, n) {
  var i = n(75),
    r = n(64),
    o = n(8),
    s = n(12).Reflect;
  t.exports = s && s.ownKeys || function(t) {
    var e = i.f(o(t)),
      n = r.f;
    return n ? e.concat(n(t)) : e
  }
}, function(t, e, n) {
  var i = n(3),
    r = n(8),
    o = Object.preventExtensions;
  i(i.S, "Reflect", {
    preventExtensions: function(t) {
      r(t);
      try {
        return o && o(t), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function(t, e, n) {
  function i(t, e, n) {
    var c, d, h = arguments.length < 4 ? t : arguments[3],
      p = o.f(l(t), e);
    if (!p) {
      if (f(d = s(t))) return i(d, e, n, h);
      p = u(0)
    }
    if (a(p, "value")) {
      if (!1 === p.writable || !f(h)) return !1;
      if (c = o.f(h, e)) {
        if (c.get || c.set || !1 === c.writable) return !1;
        c.value = n, r.f(h, e, c)
      } else r.f(h, e, u(0, n));
      return !0
    }
    return void 0 !== p.set && (p.set.call(h, n), !0)
  }
  var r = n(20),
    o = n(38),
    s = n(53),
    a = n(27),
    c = n(3),
    u = n(43),
    l = n(8),
    f = n(9);
  c(c.S, "Reflect", {
    set: i
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(76);
  r && i(i.S, "Reflect", {
    setPrototypeOf: function(t, e) {
      r.check(t, e);
      try {
        return r.set(t, e), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function(t, e, n) {
  n(149), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(167), n(168), n(65), t.exports = n(16).Object
}, function(t, e, n) {
  "use strict";
  var i = n(12),
    r = n(27),
    o = n(24),
    s = n(3),
    a = n(32),
    c = n(46).KEY,
    u = n(13),
    l = n(72),
    f = n(52),
    d = n(47),
    h = n(11),
    p = n(102),
    v = n(150),
    g = n(151),
    y = n(77),
    m = n(8),
    b = n(9),
    w = n(25),
    E = n(62),
    S = n(43),
    _ = n(48),
    P = n(103),
    x = n(38),
    A = n(20),
    C = n(44),
    O = x.f,
    T = A.f,
    j = P.f,
    I = i.Symbol,
    k = i.JSON,
    L = k && k.stringify,
    B = h("_hidden"),
    R = h("toPrimitive"),
    M = {}.propertyIsEnumerable,
    D = l("symbol-registry"),
    F = l("symbols"),
    N = l("op-symbols"),
    z = Object.prototype,
    U = "function" == typeof I,
    V = i.QObject,
    H = !V || !V.prototype || !V.prototype.findChild,
    q = o && u(function() {
      return 7 != _(T({}, "a", {
        get: function() {
          return T(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function(t, e, n) {
      var i = O(z, e);
      i && delete z[e], T(t, e, n), i && t !== z && T(z, e, i)
    } : T,
    W = function(t) {
      var e = F[t] = _(I.prototype);
      return e._k = t, e
    },
    G = U && "symbol" == typeof I.iterator ? function(t) {
      return "symbol" == typeof t
    } : function(t) {
      return t instanceof I
    },
    $ = function(t, e, n) {
      return t === z && $(N, e, n), m(t), e = E(e, !0), m(n), r(F, e) ? (n.enumerable ? (r(t, B) && t[B][e] && (t[B][e] = !1), n = _(n, {
        enumerable: S(0, !1)
      })) : (r(t, B) || T(t, B, S(1, {})), t[B][e] = !0), q(t, e, n)) : T(t, e, n)
    },
    J = function(t, e) {
      m(t);
      for (var n, i = g(e = w(e)), r = 0, o = i.length; o > r;) $(t, n = i[r++], e[n]);
      return t
    },
    K = function(t, e) {
      return void 0 === e ? _(t) : J(_(t), e)
    },
    X = function(t) {
      var e = M.call(this, t = E(t, !0));
      return !(this === z && r(F, t) && !r(N, t)) && (!(e || !r(this, t) || !r(F, t) || r(this, B) && this[B][t]) || e)
    },
    Y = function(t, e) {
      if (t = w(t), e = E(e, !0), t !== z || !r(F, e) || r(N, e)) {
        var n = O(t, e);
        return !n || !r(F, e) || r(t, B) && t[B][e] || (n.enumerable = !0), n
      }
    },
    Z = function(t) {
      for (var e, n = j(w(t)), i = [], o = 0; n.length > o;) r(F, e = n[o++]) || e == B || e == c || i.push(e);
      return i
    },
    Q = function(t) {
      for (var e, n = t === z, i = j(n ? N : w(t)), o = [], s = 0; i.length > s;) !r(F, e = i[s++]) || n && !r(z, e) || o.push(F[e]);
      return o
    };
  U || (I = function() {
    if (this instanceof I) throw TypeError("Symbol is not a constructor!");
    var t = d(arguments.length > 0 ? arguments[0] : void 0),
      e = function(n) {
        this === z && e.call(N, n), r(this, B) && r(this[B], t) && (this[B][t] = !1), q(this, t, S(1, n))
      };
    return o && H && q(z, t, {
      configurable: !0,
      set: e
    }), W(t)
  }, a(I.prototype, "toString", function() {
    return this._k
  }), x.f = Y, A.f = $, n(75).f = P.f = Z, n(63).f = X, n(64).f = Q, o && !n(51) && a(z, "propertyIsEnumerable", X, !0), p.f = function(t) {
    return W(h(t))
  }), s(s.G + s.W + s.F * !U, {
    Symbol: I
  });
  for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) h(tt[et++]);
  for (var nt = C(h.store), it = 0; nt.length > it;) v(nt[it++]);
  s(s.S + s.F * !U, "Symbol", {
    for: function(t) {
      return r(D, t += "") ? D[t] : D[t] = I(t)
    },
    keyFor: function(t) {
      if (!G(t)) throw TypeError(t + " is not a symbol!");
      for (var e in D)
        if (D[e] === t) return e
    },
    useSetter: function() {
      H = !0
    },
    useSimple: function() {
      H = !1
    }
  }), s(s.S + s.F * !U, "Object", {
    create: K,
    defineProperty: $,
    defineProperties: J,
    getOwnPropertyDescriptor: Y,
    getOwnPropertyNames: Z,
    getOwnPropertySymbols: Q
  }), k && s(s.S + s.F * (!U || u(function() {
    var t = I();
    return "[null]" != L([t]) || "{}" != L({
      a: t
    }) || "{}" != L(Object(t))
  })), "JSON", {
    stringify: function(t) {
      for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
      if (n = e = i[1], (b(e) || void 0 !== t) && !G(t)) return y(e) || (e = function(t, e) {
        if ("function" == typeof n && (e = n.call(this, t, e)), !G(e)) return e
      }), i[1] = e, L.apply(k, i)
    }
  }), I.prototype[R] || n(31)(I.prototype, R, I.prototype.valueOf), f(I, "Symbol"), f(Math, "Math", !0), f(i.JSON, "JSON", !0)
}, function(t, e, n) {
  var i = n(12),
    r = n(16),
    o = n(51),
    s = n(102),
    a = n(20).f;
  t.exports = function(t) {
    var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
    "_" == t.charAt(0) || t in e || a(e, t, {
      value: s.f(t)
    })
  }
}, function(t, e, n) {
  var i = n(44),
    r = n(64),
    o = n(63);
  t.exports = function(t) {
    var e = i(t),
      n = r.f;
    if (n)
      for (var s, a = n(t), c = o.f, u = 0; a.length > u;) c.call(t, s = a[u++]) && e.push(s);
    return e
  }
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Object", {
    create: n(48)
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S + i.F * !n(24), "Object", {
    defineProperty: n(20).f
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S + i.F * !n(24), "Object", {
    defineProperties: n(97)
  })
}, function(t, e, n) {
  var i = n(25),
    r = n(38).f;
  n(26)("getOwnPropertyDescriptor", function() {
    return function(t, e) {
      return r(i(t), e)
    }
  })
}, function(t, e, n) {
  var i = n(21),
    r = n(53);
  n(26)("getPrototypeOf", function() {
    return function(t) {
      return r(i(t))
    }
  })
}, function(t, e, n) {
  var i = n(21),
    r = n(44);
  n(26)("keys", function() {
    return function(t) {
      return r(i(t))
    }
  })
}, function(t, e, n) {
  n(26)("getOwnPropertyNames", function() {
    return n(103).f
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("freeze", function(t) {
    return function(e) {
      return t && i(e) ? t(r(e)) : e
    }
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("seal", function(t) {
    return function(e) {
      return t && i(e) ? t(r(e)) : e
    }
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("preventExtensions", function(t) {
    return function(e) {
      return t && i(e) ? t(r(e)) : e
    }
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isFrozen", function(t) {
    return function(e) {
      return !i(e) || !!t && t(e)
    }
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isSealed", function(t) {
    return function(e) {
      return !i(e) || !!t && t(e)
    }
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isExtensible", function(t) {
    return function(e) {
      return !!i(e) && (!t || t(e))
    }
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S + i.F, "Object", {
    assign: n(166)
  })
}, function(t, e, n) {
  "use strict";
  var i = n(44),
    r = n(64),
    o = n(63),
    s = n(21),
    a = n(49),
    c = Object.assign;
  t.exports = !c || n(13)(function() {
    var t = {},
      e = {},
      n = Symbol(),
      i = "abcdefghijklmnopqrst";
    return t[n] = 7, i.split("").forEach(function(t) {
      e[t] = t
    }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
  }) ? function(t, e) {
    for (var n = s(t), c = arguments.length, u = 1, l = r.f, f = o.f; c > u;)
      for (var d, h = a(arguments[u++]), p = l ? i(h).concat(l(h)) : i(h), v = p.length, g = 0; v > g;) f.call(h, d = p[g++]) && (n[d] = h[d]);
    return n
  } : c
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Object", {
    is: n(104)
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Object", {
    setPrototypeOf: n(76).set
  })
}, function(t, e, n) {
  n(170), n(171), n(172), n(54), n(175), n(176), n(177), n(178), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(197), n(198), n(199), t.exports = n(16).String
}, function(t, e, n) {
  var i = n(3),
    r = n(50),
    o = String.fromCharCode,
    s = String.fromCodePoint;
  i(i.S + i.F * (!!s && 1 != s.length), "String", {
    fromCodePoint: function(t) {
      for (var e, n = [], i = arguments.length, s = 0; i > s;) {
        if (e = +arguments[s++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
        n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
      }
      return n.join("")
    }
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(25),
    o = n(15);
  i(i.S, "String", {
    raw: function(t) {
      for (var e = r(t.raw), n = o(e.length), i = arguments.length, s = [], a = 0; n > a;) s.push(String(e[a++])), a < i && s.push(String(arguments[a]));
      return s.join("")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(173)("trim", function(t) {
    return function() {
      return t(this, 3)
    }
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(34),
    o = n(13),
    s = n(174),
    a = "[" + s + "]",
    c = "​",
    u = RegExp("^" + a + a + "*"),
    l = RegExp(a + a + "*$"),
    f = function(t, e, n) {
      var r = {},
        a = o(function() {
          return !!s[t]() || c[t]() != c
        }),
        u = r[t] = a ? e(d) : s[t];
      n && (r[n] = u), i(i.P + i.F * a, "String", r)
    },
    d = f.trim = function(t, e) {
      return t = String(r(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(l, "")), t
    };
  t.exports = f
}, function(t, e) {
  t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(78)(!1);
  i(i.P, "String", {
    codePointAt: function(t) {
      return r(this, t)
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(15),
    o = n(80),
    s = "".endsWith;
  i(i.P + i.F * n(81)("endsWith"), "String", {
    endsWith: function(t) {
      var e = o(this, t, "endsWith"),
        n = arguments.length > 1 ? arguments[1] : void 0,
        i = r(e.length),
        a = void 0 === n ? i : Math.min(r(n), i),
        c = String(t);
      return s ? s.call(e, c, a) : e.slice(a - c.length, a) === c
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(80);
  i(i.P + i.F * n(81)("includes"), "String", {
    includes: function(t) {
      return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.P, "String", {
    repeat: n(179)
  })
}, function(t, e, n) {
  "use strict";
  var i = n(45),
    r = n(34);
  t.exports = function(t) {
    var e = String(r(this)),
      n = "",
      o = i(t);
    if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
    for (; o > 0;
      (o >>>= 1) && (e += e)) 1 & o && (n += e);
    return n
  }
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(15),
    o = n(80),
    s = "".startsWith;
  i(i.P + i.F * n(81)("startsWith"), "String", {
    startsWith: function(t) {
      var e = o(this, t, "startsWith"),
        n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        i = String(t);
      return s ? s.call(e, i, n) : e.slice(n, n + i.length) === i
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("anchor", function(t) {
    return function(e) {
      return t(this, "a", "name", e)
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("big", function(t) {
    return function() {
      return t(this, "big", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("blink", function(t) {
    return function() {
      return t(this, "blink", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("bold", function(t) {
    return function() {
      return t(this, "b", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fixed", function(t) {
    return function() {
      return t(this, "tt", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fontcolor", function(t) {
    return function(e) {
      return t(this, "font", "color", e)
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fontsize", function(t) {
    return function(e) {
      return t(this, "font", "size", e)
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("italics", function(t) {
    return function() {
      return t(this, "i", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("link", function(t) {
    return function(e) {
      return t(this, "a", "href", e)
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("small", function(t) {
    return function() {
      return t(this, "small", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("strike", function(t) {
    return function() {
      return t(this, "strike", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("sub", function(t) {
    return function() {
      return t(this, "sub", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(17)("sup", function(t) {
    return function() {
      return t(this, "sup", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(8),
    r = n(15),
    o = n(82),
    s = n(67);
  n(68)("match", 1, function(t, e, n, a) {
    return [function(n) {
      var i = t(this),
        r = void 0 == n ? void 0 : n[e];
      return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
    }, function(t) {
      var e = a(n, t, this);
      if (e.done) return e.value;
      var c = i(t),
        u = String(this);
      if (!c.global) return s(c, u);
      var l = c.unicode;
      c.lastIndex = 0;
      for (var f, d = [], h = 0; null !== (f = s(c, u));) {
        var p = String(f[0]);
        d[h] = p, "" === p && (c.lastIndex = o(u, r(c.lastIndex), l)), h++
      }
      return 0 === h ? null : d
    }]
  })
}, function(t, e, n) {
  "use strict";
  var i = n(83);
  n(3)({
    target: "RegExp",
    proto: !0,
    forced: i !== /./.exec
  }, {
    exec: i
  })
}, function(t, e, n) {
  "use strict";
  var i = n(8);
  t.exports = function() {
    var t = i(this),
      e = "";
    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
  }
}, function(t, e, n) {
  "use strict";
  var i = n(8),
    r = n(21),
    o = n(15),
    s = n(45),
    a = n(82),
    c = n(67),
    u = Math.max,
    l = Math.min,
    f = Math.floor,
    d = /\$([$&`']|\d\d?|<[^>]*>)/g,
    h = /\$([$&`']|\d\d?)/g,
    p = function(t) {
      return void 0 === t ? t : String(t)
    };
  n(68)("replace", 2, function(t, e, n, v) {
    function g(t, e, i, o, s, a) {
      var c = i + t.length,
        u = o.length,
        l = h;
      return void 0 !== s && (s = r(s), l = d), n.call(a, l, function(n, r) {
        var a;
        switch (r.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return e.slice(0, i);
          case "'":
            return e.slice(c);
          case "<":
            a = s[r.slice(1, -1)];
            break;
          default:
            var l = +r;
            if (0 === l) return n;
            if (l > u) {
              var d = f(l / 10);
              return 0 === d ? n : d <= u ? void 0 === o[d - 1] ? r.charAt(1) : o[d - 1] + r.charAt(1) : n
            }
            a = o[l - 1]
        }
        return void 0 === a ? "" : a
      })
    }
    return [function(i, r) {
      var o = t(this),
        s = void 0 == i ? void 0 : i[e];
      return void 0 !== s ? s.call(i, o, r) : n.call(String(o), i, r)
    }, function(t, e) {
      var r = v(n, t, this, e);
      if (r.done) return r.value;
      var f = i(t),
        d = String(this),
        h = "function" == typeof e;
      h || (e = String(e));
      var y = f.global;
      if (y) {
        var m = f.unicode;
        f.lastIndex = 0
      }
      for (var b = [];;) {
        var w = c(f, d);
        if (null === w) break;
        if (b.push(w), !y) break;
        "" === String(w[0]) && (f.lastIndex = a(d, o(f.lastIndex), m))
      }
      for (var E = "", S = 0, _ = 0; _ < b.length; _++) {
        w = b[_];
        for (var P = String(w[0]), x = u(l(s(w.index), d.length), 0), A = [], C = 1; C < w.length; C++) A.push(p(w[C]));
        var O = w.groups;
        if (h) {
          var T = [P].concat(A, x, d);
          void 0 !== O && T.push(O);
          var j = String(e.apply(void 0, T))
        } else j = g(P, d, x, A, O, e);
        x >= S && (E += d.slice(S, x) + j, S = x + P.length)
      }
      return E + d.slice(S)
    }]
  })
}, function(t, e, n) {
  "use strict";
  var i = n(8),
    r = n(104),
    o = n(67);
  n(68)("search", 1, function(t, e, n, s) {
    return [function(n) {
      var i = t(this),
        r = void 0 == n ? void 0 : n[e];
      return void 0 !== r ? r.call(n, i) : new RegExp(n)[e](String(i))
    }, function(t) {
      var e = s(n, t, this);
      if (e.done) return e.value;
      var a = i(t),
        c = String(this),
        u = a.lastIndex;
      r(u, 0) || (a.lastIndex = 0);
      var l = o(a, c);
      return r(a.lastIndex, u) || (a.lastIndex = u), null === l ? -1 : l.index
    }]
  })
}, function(t, e, n) {
  "use strict";
  var i = n(105),
    r = n(8),
    o = n(106),
    s = n(82),
    a = n(15),
    c = n(67),
    u = n(83),
    l = n(13),
    f = Math.min,
    d = [].push,
    h = "length",
    p = !l(function() {
      RegExp(4294967295, "y")
    });
  n(68)("split", 2, function(t, e, n, l) {
    var v;
    return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[h] || 2 != "ab".split(/(?:ab)*/)[h] || 4 != ".".split(/(.?)(.?)/)[h] || ".".split(/()()/)[h] > 1 || "".split(/.?/)[h] ? function(t, e) {
      var r = String(this);
      if (void 0 === t && 0 === e) return [];
      if (!i(t)) return n.call(r, t, e);
      for (var o, s, a, c = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, l + "g");
        (o = u.call(v, r)) && !((s = v.lastIndex) > f && (c.push(r.slice(f, o.index)), o[h] > 1 && o.index < r[h] && d.apply(c, o.slice(1)), a = o[0][h], f = s, c[h] >= p));) v.lastIndex === o.index && v.lastIndex++;
      return f === r[h] ? !a && v.test("") || c.push("") : c.push(r.slice(f)), c[h] > p ? c.slice(0, p) : c
    } : "0".split(void 0, 0)[h] ? function(t, e) {
      return void 0 === t && 0 === e ? [] : n.call(this, t, e)
    } : n, [function(n, i) {
      var r = t(this),
        o = void 0 == n ? void 0 : n[e];
      return void 0 !== o ? o.call(n, r, i) : v.call(String(r), n, i)
    }, function(t, e) {
      var i = l(v, t, this, e, v !== n);
      if (i.done) return i.value;
      var u = r(t),
        d = String(this),
        h = o(u, RegExp),
        g = u.unicode,
        y = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "y" : "g"),
        m = new h(p ? u : "^(?:" + u.source + ")", y),
        b = void 0 === e ? 4294967295 : e >>> 0;
      if (0 === b) return [];
      if (0 === d.length) return null === c(m, d) ? [d] : [];
      for (var w = 0, E = 0, S = []; E < d.length;) {
        m.lastIndex = p ? E : 0;
        var _, P = c(m, p ? d : d.slice(E));
        if (null === P || (_ = f(a(m.lastIndex + (p ? 0 : E)), d.length)) === w) E = s(d, E, g);
        else {
          if (S.push(d.slice(w, E)), S.length === b) return S;
          for (var x = 1; x <= P.length - 1; x++)
            if (S.push(P[x]), S.length === b) return S;
          E = w = _
        }
      }
      return S.push(d.slice(w)), S
    }]
  })
}, function(t, e, n) {
  n(54), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(220), n(222), n(223), n(224), n(112), t.exports = n(16).Array
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Array", {
    isArray: n(77)
  })
}, function(t, e, n) {
  "use strict";
  var i = n(33),
    r = n(3),
    o = n(21),
    s = n(107),
    a = n(108),
    c = n(15),
    u = n(109),
    l = n(110);
  r(r.S + r.F * !n(84)(function(t) {
    Array.from(t)
  }), "Array", {
    from: function(t) {
      var e, n, r, f, d = o(t),
        h = "function" == typeof this ? this : Array,
        p = arguments.length,
        v = p > 1 ? arguments[1] : void 0,
        g = void 0 !== v,
        y = 0,
        m = l(d);
      if (g && (v = i(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || h == Array && a(m))
        for (e = c(d.length), n = new h(e); e > y; y++) u(n, y, g ? v(d[y], y) : d[y]);
      else
        for (f = m.call(d), n = new h; !(r = f.next()).done; y++) u(n, y, g ? s(f, v, [r.value, y], !0) : r.value);
      return n.length = y, n
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(109);
  i(i.S + i.F * n(13)(function() {
    function t() {}
    return !(Array.of.call(t) instanceof t)
  }), "Array", {
    of: function() {
      for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) r(n, t, arguments[t++]);
      return n.length = e, n
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(25),
    o = [].join;
  i(i.P + i.F * (n(49) != Object || !n(22)(o)), "Array", {
    join: function(t) {
      return o.call(r(this), void 0 === t ? "," : t)
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(74),
    o = n(37),
    s = n(50),
    a = n(15),
    c = [].slice;
  i(i.P + i.F * n(13)(function() {
    r && c.call(r)
  }), "Array", {
    slice: function(t, e) {
      var n = a(this.length),
        i = o(this);
      if (e = void 0 === e ? n : e, "Array" == i) return c.call(this, t, e);
      for (var r = s(t, n), u = s(e, n), l = a(u - r), f = new Array(l), d = 0; d < l; d++) f[d] = "String" == i ? this.charAt(r + d) : this[r + d];
      return f
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(28),
    o = n(21),
    s = n(13),
    a = [].sort,
    c = [1, 2, 3];
  i(i.P + i.F * (s(function() {
    c.sort(void 0)
  }) || !s(function() {
    c.sort(null)
  }) || !n(22)(a)), "Array", {
    sort: function(t) {
      return void 0 === t ? a.call(o(this)) : a.call(o(this), r(t))
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(0),
    o = n(22)([].forEach, !0);
  i(i.P + i.F * !o, "Array", {
    forEach: function(t) {
      return r(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  var i = n(209);
  t.exports = function(t, e) {
    return new(i(t))(e)
  }
}, function(t, e, n) {
  var i = n(9),
    r = n(77),
    o = n(11)("species");
  t.exports = function(t) {
    var e;
    return r(t) && (e = t.constructor, "function" != typeof e || e !== Array && !r(e.prototype) || (e = void 0), i(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
  }
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(1);
  i(i.P + i.F * !n(22)([].map, !0), "Array", {
    map: function(t) {
      return r(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(2);
  i(i.P + i.F * !n(22)([].filter, !0), "Array", {
    filter: function(t) {
      return r(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(3);
  i(i.P + i.F * !n(22)([].some, !0), "Array", {
    some: function(t) {
      return r(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(4);
  i(i.P + i.F * !n(22)([].every, !0), "Array", {
    every: function(t) {
      return r(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(111);
  i(i.P + i.F * !n(22)([].reduce, !0), "Array", {
    reduce: function(t) {
      return r(this, t, arguments.length, arguments[1], !1)
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(111);
  i(i.P + i.F * !n(22)([].reduceRight, !0), "Array", {
    reduceRight: function(t) {
      return r(this, t, arguments.length, arguments[1], !0)
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(99)(!1),
    o = [].indexOf,
    s = !!o && 1 / [1].indexOf(1, -0) < 0;
  i(i.P + i.F * (s || !n(22)(o)), "Array", {
    indexOf: function(t) {
      return s ? o.apply(this, arguments) || 0 : r(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(25),
    o = n(45),
    s = n(15),
    a = [].lastIndexOf,
    c = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
  i(i.P + i.F * (c || !n(22)(a)), "Array", {
    lastIndexOf: function(t) {
      if (c) return a.apply(this, arguments) || 0;
      var e = r(this),
        n = s(e.length),
        i = n - 1;
      for (arguments.length > 1 && (i = Math.min(i, o(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
        if (i in e && e[i] === t) return i || 0;
      return -1
    }
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.P, "Array", {
    copyWithin: n(219)
  }), n(56)("copyWithin")
}, function(t, e, n) {
  "use strict";
  var i = n(21),
    r = n(50),
    o = n(15);
  t.exports = [].copyWithin || function(t, e) {
    var n = i(this),
      s = o(n.length),
      a = r(t, s),
      c = r(e, s),
      u = arguments.length > 2 ? arguments[2] : void 0,
      l = Math.min((void 0 === u ? s : r(u, s)) - c, s - a),
      f = 1;
    for (c < a && a < c + l && (f = -1, c += l - 1, a += l - 1); l-- > 0;) c in n ? n[a] = n[c] : delete n[a], a += f, c += f;
    return n
  }
}, function(t, e, n) {
  var i = n(3);
  i(i.P, "Array", {
    fill: n(221)
  }), n(56)("fill")
}, function(t, e, n) {
  "use strict";
  var i = n(21),
    r = n(50),
    o = n(15);
  t.exports = function(t) {
    for (var e = i(this), n = o(e.length), s = arguments.length, a = r(s > 1 ? arguments[1] : void 0, n), c = s > 2 ? arguments[2] : void 0, u = void 0 === c ? n : r(c, n); u > a;) e[a++] = t;
    return e
  }
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(5),
    o = !0;
  "find" in [] && Array(1).find(function() {
    o = !1
  }), i(i.P + i.F * o, "Array", {
    find: function(t) {
      return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), n(56)("find")
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(6),
    o = "findIndex",
    s = !0;
  o in [] && Array(1)[o](function() {
    s = !1
  }), i(i.P + i.F * s, "Array", {
    findIndex: function(t) {
      return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), n(56)(o)
}, function(t, e, n) {
  n(85)("Array")
}, function(t, e, n) {
  n(65), n(54), n(86), n(226), t.exports = n(16).Promise
}, function(t, e, n) {
  "use strict";
  var i, r, o, s, a = n(51),
    c = n(12),
    u = n(33),
    l = n(66),
    f = n(3),
    d = n(9),
    h = n(28),
    p = n(87),
    v = n(88),
    g = n(106),
    y = n(114).set,
    m = n(227)(),
    b = n(115),
    w = n(228),
    E = n(229),
    S = n(230),
    _ = c.TypeError,
    P = c.process,
    x = P && P.versions,
    A = x && x.v8 || "",
    C = c.Promise,
    O = "process" == l(P),
    T = function() {},
    j = r = b.f,
    I = !! function() {
      try {
        var t = C.resolve(1),
          e = (t.constructor = {})[n(11)("species")] = function(t) {
            t(T, T)
          };
        return (O || "function" == typeof PromiseRejectionEvent) && t.then(T) instanceof e && 0 !== A.indexOf("6.6") && -1 === E.indexOf("Chrome/66")
      } catch (t) {}
    }(),
    k = function(t) {
      var e;
      return !(!d(t) || "function" != typeof(e = t.then)) && e
    },
    L = function(t, e) {
      if (!t._n) {
        t._n = !0;
        var n = t._c;
        m(function() {
          for (var i = t._v, r = 1 == t._s, o = 0; n.length > o;) ! function(e) {
            var n, o, s, a = r ? e.ok : e.fail,
              c = e.resolve,
              u = e.reject,
              l = e.domain;
            try {
              a ? (r || (2 == t._h && M(t), t._h = 1), !0 === a ? n = i : (l && l.enter(), n = a(i), l && (l.exit(), s = !0)), n === e.promise ? u(_("Promise-chain cycle")) : (o = k(n)) ? o.call(n, c, u) : c(n)) : u(i)
            } catch (t) {
              l && !s && l.exit(), u(t)
            }
          }(n[o++]);
          t._c = [], t._n = !1, e && !t._h && B(t)
        })
      }
    },
    B = function(t) {
      y.call(c, function() {
        var e, n, i, r = t._v,
          o = R(t);
        if (o && (e = w(function() {
            O ? P.emit("unhandledRejection", r, t) : (n = c.onunhandledrejection) ? n({
              promise: t,
              reason: r
            }) : (i = c.console) && i.error && i.error("Unhandled promise rejection", r)
          }), t._h = O || R(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
      })
    },
    R = function(t) {
      return 1 !== t._h && 0 === (t._a || t._c).length
    },
    M = function(t) {
      y.call(c, function() {
        var e;
        O ? P.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
          promise: t,
          reason: t._v
        })
      })
    },
    D = function(t) {
      var e = this;
      e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), L(e, !0))
    },
    F = function(t) {
      var e, n = this;
      if (!n._d) {
        n._d = !0, n = n._w || n;
        try {
          if (n === t) throw _("Promise can't be resolved itself");
          (e = k(t)) ? m(function() {
            var i = {
              _w: n,
              _d: !1
            };
            try {
              e.call(t, u(F, i, 1), u(D, i, 1))
            } catch (t) {
              D.call(i, t)
            }
          }): (n._v = t, n._s = 1, L(n, !1))
        } catch (t) {
          D.call({
            _w: n,
            _d: !1
          }, t)
        }
      }
    };
  I || (C = function(t) {
    p(this, C, "Promise", "_h"), h(t), i.call(this);
    try {
      t(u(F, this, 1), u(D, this, 1))
    } catch (t) {
      D.call(this, t)
    }
  }, i = function(t) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
  }, i.prototype = n(89)(C.prototype, {
    then: function(t, e) {
      var n = j(g(this, C));
      return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = O ? P.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise
    },
    catch: function(t) {
      return this.then(void 0, t)
    }
  }), o = function() {
    var t = new i;
    this.promise = t, this.resolve = u(F, t, 1), this.reject = u(D, t, 1)
  }, b.f = j = function(t) {
    return t === C || t === s ? new o(t) : r(t)
  }), f(f.G + f.W + f.F * !I, {
    Promise: C
  }), n(52)(C, "Promise"), n(85)("Promise"), s = n(16).Promise, f(f.S + f.F * !I, "Promise", {
    reject: function(t) {
      var e = j(this);
      return (0, e.reject)(t), e.promise
    }
  }), f(f.S + f.F * (a || !I), "Promise", {
    resolve: function(t) {
      return S(a && this === s ? C : this, t)
    }
  }), f(f.S + f.F * !(I && n(84)(function(t) {
    C.all(t).catch(T)
  })), "Promise", {
    all: function(t) {
      var e = this,
        n = j(e),
        i = n.resolve,
        r = n.reject,
        o = w(function() {
          var n = [],
            o = 0,
            s = 1;
          v(t, !1, function(t) {
            var a = o++,
              c = !1;
            n.push(void 0), s++, e.resolve(t).then(function(t) {
              c || (c = !0, n[a] = t, --s || i(n))
            }, r)
          }), --s || i(n)
        });
      return o.e && r(o.v), n.promise
    },
    race: function(t) {
      var e = this,
        n = j(e),
        i = n.reject,
        r = w(function() {
          v(t, !1, function(t) {
            e.resolve(t).then(n.resolve, i)
          })
        });
      return r.e && i(r.v), n.promise
    }
  })
}, function(t, e, n) {
  var i = n(12),
    r = n(114).set,
    o = i.MutationObserver || i.WebKitMutationObserver,
    s = i.process,
    a = i.Promise,
    c = "process" == n(37)(s);
  t.exports = function() {
    var t, e, n, u = function() {
      var i, r;
      for (c && (i = s.domain) && i.exit(); t;) {
        r = t.fn, t = t.next;
        try {
          r()
        } catch (i) {
          throw t ? n() : e = void 0, i
        }
      }
      e = void 0, i && i.enter()
    };
    if (c) n = function() {
      s.nextTick(u)
    };
    else if (!o || i.navigator && i.navigator.standalone)
      if (a && a.resolve) {
        var l = a.resolve(void 0);
        n = function() {
          l.then(u)
        }
      } else n = function() {
        r.call(i, u)
      };
    else {
      var f = !0,
        d = document.createTextNode("");
      new o(u).observe(d, {
        characterData: !0
      }), n = function() {
        d.data = f = !f
      }
    }
    return function(i) {
      var r = {
        fn: i,
        next: void 0
      };
      e && (e.next = r), t || (t = r, n()), e = r
    }
  }
}, function(t, e) {
  t.exports = function(t) {
    try {
      return {
        e: !1,
        v: t()
      }
    } catch (t) {
      return {
        e: !0,
        v: t
      }
    }
  }
}, function(t, e, n) {
  var i = n(12),
    r = i.navigator;
  t.exports = r && r.userAgent || ""
}, function(t, e, n) {
  var i = n(8),
    r = n(9),
    o = n(115);
  t.exports = function(t, e) {
    if (i(t), r(e) && e.constructor === t) return e;
    var n = o.f(t);
    return (0, n.resolve)(e), n.promise
  }
}, function(t, e, n) {
  n(65), n(54), n(86), n(232), t.exports = n(16).Map
}, function(t, e, n) {
  "use strict";
  var i = n(116),
    r = n(90);
  t.exports = n(117)("Map", function(t) {
    return function() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    get: function(t) {
      var e = i.getEntry(r(this, "Map"), t);
      return e && e.v
    },
    set: function(t, e) {
      return i.def(r(this, "Map"), 0 === t ? 0 : t, e)
    }
  }, i, !0)
}, function(t, e, n) {
  var i = n(9),
    r = n(76).set;
  t.exports = function(t, e, n) {
    var o, s = e.constructor;
    return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && i(o) && r && r(t, o), t
  }
}, function(t, e, n) {
  n(65), n(54), n(86), n(235), t.exports = n(16).Set
}, function(t, e, n) {
  "use strict";
  var i = n(116),
    r = n(90);
  t.exports = n(117)("Set", function(t) {
    return function() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function(t) {
      return i.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
    }
  }, i)
}, function(t, e, n) {
  "use strict";
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  ! function() {
    function t() {
      function t() {
        e.C = !0, e.b(a.childNodes)
      }
      var e = this;
      this.a = new Map, this.j = new Map, this.h = new Map, this.m = new Set, this.v = new MutationObserver(this.A.bind(this)), this.f = null, this.B = new Set, this.enableFlush = !0, this.C = !1, this.G = this.c(a), window.HTMLImports ? window.HTMLImports.whenReady(t) : t(), s = this
    }

    function e() {
      return s
    }

    function n(t) {
      if (!/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t) || -1 !== u.indexOf(t)) return Error("The element name '" + t + "' is not valid.")
    }

    function r(t, n, i, r) {
      var o = e();
      return t = f.call(t, n, i), (n = o.a.get(n.toLowerCase())) && o.D(t, n, r), o.c(t), t
    }

    function o(t, n, i, r) {
      n = n.toLowerCase();
      var o = t.getAttribute(n);
      r.call(t, n, i), 1 == t.__$CE_upgraded && (r = e().a.get(t.localName), i = r.w, (r = r.i) && 0 <= i.indexOf(n) && (i = t.getAttribute(n)) !== o && r.call(t, n, o, i, null))
    }
    var s, a = document,
      c = window;
    if (!e() || (e().g = function() {}, e().forcePolyfill)) {
      var u = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ");
      t.prototype.K = function(t, e) {
        function r(t) {
          var e = c[t];
          if (void 0 !== e && "function" != typeof e) throw Error(s + " '" + t + "' is not a Function");
          return e
        }
        if ("function" != typeof e) throw new TypeError("constructor must be a Constructor");
        var o = n(t);
        if (o) throw o;
        if (this.a.has(t)) throw Error("An element with name '" + t + "' is already defined");
        if (this.j.has(e)) throw Error("Definition failed for '" + t + "': The constructor is already used.");
        var s = t,
          c = e.prototype;
        if ("object" !== (void 0 === c ? "undefined" : i(c))) throw new TypeError("Definition failed for '" + t + "': constructor.prototype must be an object");
        var o = r("connectedCallback"),
          u = r("disconnectedCallback"),
          l = r("attributeChangedCallback");
        this.a.set(s, {
          name: t,
          localName: s,
          constructor: e,
          o: o,
          s: u,
          i: l,
          w: l && e.observedAttributes || []
        }), this.j.set(e, s), this.C && this.b(a.childNodes), (t = this.h.get(s)) && (t.resolve(void 0), this.h.delete(s))
      }, t.prototype.get = function(t) {
        return (t = this.a.get(t)) ? t.constructor : void 0
      }, t.prototype.L = function(t) {
        var e = n(t);
        if (e) return Promise.reject(e);
        if (this.a.has(t)) return Promise.resolve();
        if (e = this.h.get(t)) return e.M;
        var i, r = new Promise(function(t) {
            i = t
          }),
          e = {
            M: r,
            resolve: i
          };
        return this.h.set(t, e), r
      }, t.prototype.g = function() {
        this.enableFlush && (this.l(this.G.takeRecords()), this.A(this.v.takeRecords()), this.m.forEach(function(t) {
          this.l(t.takeRecords())
        }, this))
      }, t.prototype.I = function(t) {
        this.f = t
      }, t.prototype.c = function(t) {
        return null != t.__$CE_observer ? t.__$CE_observer : (t.__$CE_observer = new MutationObserver(this.l.bind(this)), t.__$CE_observer.observe(t, {
          childList: !0,
          subtree: !0
        }), this.enableFlush && this.m.add(t.__$CE_observer), t.__$CE_observer)
      }, t.prototype.J = function(t) {
        null != t.__$CE_observer && (t.__$CE_observer.disconnect(), this.enableFlush && this.m.delete(t.__$CE_observer), t.__$CE_observer = null)
      }, t.prototype.l = function(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if ("childList" === n.type) {
            var i = n.removedNodes;
            this.b(n.addedNodes), this.H(i)
          }
        }
      }, t.prototype.b = function(t, e) {
        e = e || new Set;
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          if (i.nodeType === Node.ELEMENT_NODE) {
            this.J(i), i = a.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, null, !1);
            do {
              this.F(i.currentNode, e)
            } while (i.nextNode())
          }
        }
      }, t.prototype.F = function(t, e) {
        if (!e.has(t)) {
          e.add(t);
          var n = this.a.get(t.localName);
          if (n) {
            t.__$CE_upgraded || this.D(t, n, !0);
            var i;
            if (i = t.__$CE_upgraded && !t.__$CE_attached) t: {
              i = t;do {
                if (i.__$CE_attached || i.nodeType === Node.DOCUMENT_NODE) {
                  i = !0;
                  break t
                }
                i = i.parentNode || i.nodeType === Node.DOCUMENT_FRAGMENT_NODE && i.host
              } while (i);i = !1
            }
            i && (t.__$CE_attached = !0, n.o && n.o.call(t))
          }
          t.shadowRoot && this.b(t.shadowRoot.childNodes, e), "LINK" === t.tagName && t.rel && -1 !== t.rel.toLowerCase().split(" ").indexOf("import") && this.u(t, e)
        }
      }, t.prototype.u = function(t, e) {
        var n = t.import;
        if (n) e.has(n) || (e.add(n), n.__$CE_observer || this.c(n), this.b(n.childNodes, e));
        else if (e = t.href, !this.B.has(e)) {
          this.B.add(e);
          var i = this,
            r = function e() {
              t.removeEventListener("load", e), t.import.__$CE_observer || i.c(t.import), i.b(t.import.childNodes)
            };
          t.addEventListener("load", r)
        }
      }, t.prototype.H = function(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if (n.nodeType === Node.ELEMENT_NODE) {
            this.c(n), n = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, null, !1);
            do {
              var i = n.currentNode;
              if (i.__$CE_upgraded && i.__$CE_attached) {
                i.__$CE_attached = !1;
                var r = this.a.get(i.localName);
                r && r.s && r.s.call(i)
              }
            } while (n.nextNode())
          }
        }
      }, t.prototype.D = function(t, e, n) {
        if (t.__proto__ = e.constructor.prototype, n && (this.I(t), new e.constructor, t.__$CE_upgraded = !0, console.assert(!this.f)), n = e.w, (e = e.i) && 0 < n.length) {
          this.v.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            attributeFilter: n
          });
          for (var i = 0; i < n.length; i++) {
            var r = n[i];
            if (t.hasAttribute(r)) {
              var o = t.getAttribute(r);
              e.call(t, r, null, o, null)
            }
          }
        }
      }, t.prototype.A = function(t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if ("attributes" === n.type) {
            var i = n.target,
              r = this.a.get(i.localName),
              o = n.attributeName,
              s = n.oldValue,
              a = i.getAttribute(o);
            a !== s && r.i.call(i, o, s, a, n.attributeNamespace)
          }
        }
      }, !1 !== (Object.getOwnPropertyDescriptor(window, "CustomElementRegistry") || {}).writable && (window.CustomElementRegistry = t), t.prototype.define = t.prototype.K, t.prototype.get = t.prototype.get, t.prototype.whenDefined = t.prototype.L, t.prototype.flush = t.prototype.g, t.prototype.polyfilled = !0, t.prototype._observeRoot = t.prototype.c, t.prototype._addImport = t.prototype.u;
      var l = c.HTMLElement;
      c.HTMLElement = function() {
        var t = e();
        if (t.f) {
          var n = t.f;
          return t.f = null, n
        }
        if (this.constructor) return t = t.j.get(this.constructor), r(a, t, void 0, !1);
        throw Error("Unknown constructor. Did you call customElements.define()?")
      }, c.HTMLElement.prototype = Object.create(l.prototype, {
        constructor: {
          value: c.HTMLElement,
          configurable: !0,
          writable: !0
        }
      });
      var f = a.createElement;
      a.createElement = function(t, e) {
        return r(a, t, e, !0)
      };
      var d = a.createElementNS;
      a.createElementNS = function(t, e) {
        return "http://www.w3.org/1999/xhtml" === t ? a.createElement(e) : d.call(a, t, e)
      };
      var h = Element.prototype.attachShadow;
      h && Object.defineProperty(Element.prototype, "attachShadow", {
        value: function(t) {
          return t = h.call(this, t), e().c(t), t
        }
      });
      var p = a.importNode;
      a.importNode = function(t, n) {
        return t = p.call(a, t, n), e().b(t.nodeType === Node.ELEMENT_NODE ? [t] : t.childNodes), t
      };
      var v = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function(t, e) {
        o(this, t, e, v)
      };
      var g = Element.prototype.removeAttribute;
      Element.prototype.removeAttribute = function(t) {
        o(this, t, null, g)
      }, Object.defineProperty(window, "customElements", {
        value: new t,
        configurable: !0,
        enumerable: !0
      }), window.CustomElements = {
        takeRecords: function() {
          e().g && e().g()
        }
      }
    }
  }()
}, function(t, e) {
  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  ! function() {
    var t = HTMLElement;
    window.HTMLElement = function e() {
      var n = (this instanceof e ? this.constructor : void 0) || this.constructor;
      return Reflect.construct(t, [], n)
    }, HTMLElement.prototype = Object.create(t.prototype, {
      constructor: {
        value: HTMLElement,
        configurable: !0,
        writable: !0
      }
    })
  }()
}, function(t, e) {
  window.performance = window.performance || !1,
    function(t) {
      t.forEach(function(t) {
        Object.prototype.hasOwnProperty.call(t, "remove") || Object.defineProperty(t, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function() {
            this.parentNode.removeChild(this)
          }
        })
      })
    }([Element.prototype, CharacterData.prototype, DocumentType.prototype]),
    function(t) {
      t.forEach(function(t) {
        if (!Object.prototype.hasOwnProperty.call(t, "addEventListener")) {
          var e = t.addEventListener;
          Object.defineProperty(t, "addEventListener", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
              e.apply(this, n)
            }
          })
        }
      })
    }([HTMLElement.prototype]),
    function(t) {
      t.forEach(function(t) {
        Object.prototype.hasOwnProperty.call(t, "append") || Object.defineProperty(t, "append", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function() {
            var t = Array.prototype.slice.call(arguments),
              e = document.createDocumentFragment();
            t.forEach(function(t) {
              var n = t instanceof Node;
              e.appendChild(n ? t : document.createTextNode(String(t)))
            }), this.appendChild(e)
          }
        })
      })
    }([Element.prototype, Document.prototype, DocumentFragment.prototype])
}, function(t, e) {
  ! function(t) {
    function e(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) {
      return t
    }, e.d = function(t, n, i) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, e.n = function(t) {
      var n = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 2)
  }([function(t, e, n) {
    "use strict";
    var i = n(4),
      r = n(3),
      o = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {
          t.__proto__ = e
        } || function(t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        };
        return function(e, n) {
          function i() {
            this.constructor = e
          }
          t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
        }
      }(),
      s = function(t) {
        function e() {
          var e = t.call(this) || this;
          return e.imageEnhancedEventListener = e.imageEnhanced.bind(e), e.handleImageErrorEventListener = e.handleImageError.bind(e), e.imgTag = document.createElement("img"), e.imgTag.style.display = "none", e
        }
        return o(e, t), Object.defineProperty(e, "observedAttributes", {
          get: function() {
            return ["src", "background-image", "width", "enhanced", "alt"]
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "src", {
          get: function() {
            return this.getAttribute("src")
          },
          set: function(t) {
            this.setAttribute("src", t)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "backgroundImage", {
          get: function() {
            return this.getAttribute("background-image")
          },
          set: function(t) {
            this.setAttribute("background-image", t)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "width", {
          get: function() {
            return parseInt(this.getAttribute("width")) || 960
          },
          set: function(t) {
            this.setAttribute("width", "" + t)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "alt", {
          get: function() {
            return this.getAttribute("alt")
          },
          set: function(t) {
            this.setAttribute("alt", t)
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "enhanced", {
          get: function() {
            return this.hasAttribute("enhanced") && "false" !== this.getAttribute("enhanced")
          },
          set: function(t) {
            t ? this.setAttribute("enhanced", "") : this.removeAttribute("enhanced")
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.connectedCallback = function() {
          this.init()
        }, e.prototype.attributeChangedCallback = function(t, e, n) {
          if (n !== e) switch (t) {
            case "src":
            case "background-image":
              if (n.indexOf(".gif") > -1) return this.isGif = !0, this.highResSrc = n, void this.enhanceImage();
              this.highResSrc = r.a.prependThumbor(n, this.width, 1), this.shouldEnhanceImage() && this.enhanceImage();
              break;
            case "alt":
              this.imgTag.alt = n || ""
          }
        }, e.prototype.registerScrollHandler = function() {
          var t = this;
          document.addEventListener("scroll", n.i(i.a)(function() {
            t.shouldEnhanceImage() && t.enhanceImage()
          }))
        }, e.prototype.shouldEnhanceImage = function() {
          return !this.enhanced && this.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop <= 2 * window.innerHeight + window.pageYOffset
        }, e.prototype.enhanceImage = function() {
          this.imgTag.src = this.highResSrc, this.imgTag.addEventListener("load", this.imageEnhancedEventListener), this.isGif && this.classList.add("initial-width")
        }, e.prototype.imageEnhanced = function() {
          this.backgroundImage ? this.style.backgroundImage = "url(" + this.highResSrc + ")" : this.imgTag.style.display = "block", this.classList.add("show-img"), this.enhanced = !0, this.imgTag.removeEventListener("load", this.imageEnhancedEventListener)
        }, e.prototype.handleImageError = function() {
          this.enhanced = !0
        }, e.prototype.init = function() {
          this.imgTag.alt = this.alt || "", this.imgTag.addEventListener("load", this.imageEnhancedEventListener), this.imgTag.addEventListener("error", this.handleImageErrorEventListener), this.backgroundImage || this.appendChild(this.imgTag), this.enhanced || this.registerScrollHandler()
        }, e
      }(HTMLElement);
    customElements.define("progressive-image", s)
  }, function(t, e, n) {
    var i = n(5);
    "string" == typeof i && (i = [
      [t.i, i, ""]
    ]);
    n(7)(i, {});
    i.locals && (t.exports = i.locals)
  }, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = (n(0), n(1));
    n.n(i)
  }, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return i
    });
    var i = function() {
      function t() {}
      return t.httpsUrl = function(t) {
        return (t || "").replace(/^http:/, "https:")
      }, t.normalizeImageDomain = function(e) {
        return e = e || "", e.startsWith("//") ? "https:" + e : e.startsWith("/") ? "https://blogs-images.forbes.com" + e : t.httpsUrl(e)
      }, t.adjustExistingThumborUrl = function(t, e) {
        var n = t.match(/[0-9]+x[0-9]+/)[0],
          i = parseInt(n.split("x")[0]) || 0,
          r = parseInt(n.split("x")[1]) || 0;
        return i *= e, r *= e, t.replace(n, i + "x" + r)
      }, t.prependThumbor = function(t, e, n) {
        if (void 0 === t && (t = ""), (t || "").indexOf("thumbor") > -1) return this.adjustExistingThumborUrl(t, n);
        if ((t || "").indexOf("gravatar") > -1) return t;
        var i = this.normalizeImageDomain(t);
        return this.isOnThumborWhitelist(i) ? "https://thumbor.forbes.com/thumbor/" + e * n + "x0/" + encodeURIComponent(i) : i
      }, t.isOnThumborWhitelist = function(t) {
        return !!this.thumborWhitelist.find(function(e) {
          return t.indexOf(e) > -1
        })
      }, t.thumborWhitelist = ["specials-images.forbes.com", "specials-images.forbesimg.com", "i.forbesimg.com", "b-i.forbesimg.com", "images.forbes.com", "blogs-images.forbes.com"], t
    }()
  }, function(t, e, n) {
    "use strict";

    function i(t) {
      var e, n, i = this;
      return function() {
        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
        var s = i || {},
          a = +new Date;
        if (e && a < e + 100) {
          clearTimeout(n);
          var c = 100 + a + 1;
          n = setTimeout(function() {
            e = a, s.deferred = !0, t.apply(s, r)
          }, c - e)
        } else e = a, t.apply(s, r)
      }
    }
    e.a = i
  }, function(t, e, n) {
    e = t.exports = n(6)(!1), e.push([t.i, "progressive-image {\n  position: relative;\n  display: block; }\n  progressive-image:before {\n    content: '';\n    display: block;\n    padding-bottom: 56.25%; }\n  progressive-image.show-img::before {\n    content: none; }\n  progressive-image.initial-width {\n    display: inline-block; }\n    progressive-image.initial-width img {\n      padding-right: 0.5rem;\n      width: initial; }\n  progressive-image img {\n    display: none;\n    width: 100%; }\n", ""])
  }, function(t, e) {
    function n(t, e) {
      var n = t[1] || "",
        r = t[3];
      if (!r) return n;
      if (e && "function" == typeof btoa) {
        var o = i(r);
        return [n].concat(r.sources.map(function(t) {
          return "/*# sourceURL=" + r.sourceRoot + t + " */"
        })).concat([o]).join("\n")
      }
      return [n].join("\n")
    }

    function i(t) {
      return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
    }
    t.exports = function(t) {
      var e = [];
      return e.toString = function() {
        return this.map(function(e) {
          var i = n(e, t);
          return e[2] ? "@media " + e[2] + "{" + i + "}" : i
        }).join("")
      }, e.i = function(t, n) {
        "string" == typeof t && (t = [
          [null, t, ""]
        ]);
        for (var i = {}, r = 0; r < this.length; r++) {
          var o = this[r][0];
          "number" == typeof o && (i[o] = !0)
        }
        for (r = 0; r < t.length; r++) {
          var s = t[r];
          "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
        }
      }, e
    }
  }, function(t, e, n) {
    function i(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = p[i.id];
        if (r) {
          r.refs++;
          for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
          for (; o < i.parts.length; o++) r.parts.push(l(i.parts[o], e))
        } else {
          for (var s = [], o = 0; o < i.parts.length; o++) s.push(l(i.parts[o], e));
          p[i.id] = {
            id: i.id,
            refs: 1,
            parts: s
          }
        }
      }
    }

    function r(t) {
      for (var e = [], n = {}, i = 0; i < t.length; i++) {
        var r = t[i],
          o = r[0],
          s = r[1],
          a = r[2],
          c = r[3],
          u = {
            css: s,
            media: a,
            sourceMap: c
          };
        n[o] ? n[o].parts.push(u) : e.push(n[o] = {
          id: o,
          parts: [u]
        })
      }
      return e
    }

    function o(t, e) {
      var n = g(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var i = b[b.length - 1];
      if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), b.push(e);
      else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(e)
      }
    }

    function s(t) {
      t.parentNode.removeChild(t);
      var e = b.indexOf(t);
      e >= 0 && b.splice(e, 1)
    }

    function a(t) {
      var e = document.createElement("style");
      return t.attrs.type = "text/css", u(e, t.attrs), o(t, e), e
    }

    function c(t) {
      var e = document.createElement("link");
      return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", u(e, t.attrs), o(t, e), e
    }

    function u(t, e) {
      Object.keys(e).forEach(function(n) {
        t.setAttribute(n, e[n])
      })
    }

    function l(t, e) {
      var n, i, r;
      if (e.singleton) {
        var o = m++;
        n = y || (y = a(e)), i = f.bind(null, n, o, !1), r = f.bind(null, n, o, !0)
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), i = h.bind(null, n, e), r = function() {
        s(n), n.href && URL.revokeObjectURL(n.href)
      }) : (n = a(e), i = d.bind(null, n), r = function() {
        s(n)
      });
      return i(t),
        function(e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            i(t = e)
          } else r()
        }
    }

    function f(t, e, n, i) {
      var r = n ? "" : i.css;
      if (t.styleSheet) t.styleSheet.cssText = E(e, r);
      else {
        var o = document.createTextNode(r),
          s = t.childNodes;
        s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
      }
    }

    function d(t, e) {
      var n = e.css,
        i = e.media;
      if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }

    function h(t, e, n) {
      var i = n.css,
        r = n.sourceMap,
        o = void 0 === e.convertToAbsoluteUrls && r;
      (e.convertToAbsoluteUrls || o) && (i = w(i)), r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
      var s = new Blob([i], {
          type: "text/css"
        }),
        a = t.href;
      t.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
    }
    var p = {},
      v = function(t) {
        var e;
        return function() {
          return void 0 === e && (e = t.apply(this, arguments)), e
        }
      }(function() {
        return window && document && document.all && !window.atob
      }),
      g = function(t) {
        var e = {};
        return function(n) {
          return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
        }
      }(function(t) {
        return document.querySelector(t)
      }),
      y = null,
      m = 0,
      b = [],
      w = n(8);
    t.exports = function(t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, void 0 === e.singleton && (e.singleton = v()), void 0 === e.insertInto && (e.insertInto = "head"), void 0 === e.insertAt && (e.insertAt = "bottom");
      var n = r(t);
      return i(n, e),
        function(t) {
          for (var o = [], s = 0; s < n.length; s++) {
            var a = n[s],
              c = p[a.id];
            c.refs--, o.push(c)
          }
          if (t) {
            i(r(t), e)
          }
          for (var s = 0; s < o.length; s++) {
            var c = o[s];
            if (0 === c.refs) {
              for (var u = 0; u < c.parts.length; u++) c.parts[u]();
              delete p[c.id]
            }
          }
        }
    };
    var E = function() {
      var t = [];
      return function(e, n) {
        return t[e] = n, t.filter(Boolean).join("\n")
      }
    }()
  }, function(t, e) {
    t.exports = function(t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
        i = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
        var r = e.trim().replace(/^"(.*)"$/, function(t, e) {
          return e
        }).replace(/^'(.*)'$/, function(t, e) {
          return e
        });
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
        var o;
        return o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")"
      })
    }
  }])
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(241),
    r = n(243),
    o = n(118);
  Object(o.a)("Loaded"), window["fbs-video"] = new r.a, customElements.define("fbs-video", i.a)
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return c
  });
  var i = n(118),
    r = n(242),
    o = this && this.__extends || function() {
      var t = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {
        t.__proto__ = e
      } || function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      };
      return function(e, n) {
        function i() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
      }
    }(),
    s = this && this.__awaiter || function(t, e, n, i) {
      return new(n || (n = Promise))(function(r, o) {
        function s(t) {
          try {
            c(i.next(t))
          } catch (t) {
            o(t)
          }
        }

        function a(t) {
          try {
            c(i.throw(t))
          } catch (t) {
            o(t)
          }
        }

        function c(t) {
          t.done ? r(t.value) : new n(function(e) {
            e(t.value)
          }).then(s, a)
        }
        c((i = i.apply(t, e || [])).next())
      })
    },
    a = this && this.__generator || function(t, e) {
      function n(t) {
        return function(e) {
          return i([t, e])
        }
      }

      function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; c;) try {
          if (r = 1, o && (s = o[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(o, n[1])).done) return s;
          switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
              s = n;
              break;
            case 4:
              return c.label++, {
                value: n[1],
                done: !1
              };
            case 5:
              c.label++, o = n[1], n = [0];
              continue;
            case 7:
              n = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                c = 0;
                continue
              }
              if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                c.label = n[1];
                break
              }
              if (6 === n[0] && c.label < s[1]) {
                c.label = s[1], s = n;
                break
              }
              if (s && c.label < s[2]) {
                c.label = s[2], c.ops.push(n);
                break
              }
              s[2] && c.ops.pop(), c.trys.pop();
              continue
          }
          n = e.call(t, c)
        } catch (t) {
          n = [6, t], o = 0
        } finally {
          r = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
          value: n[0] ? n[1] : void 0,
          done: !0
        }
      }
      var r, o, s, a, c = {
        label: 0,
        sent: function() {
          if (1 & s[0]) throw s[1];
          return s[1]
        },
        trys: [],
        ops: []
      };
      return a = {
        next: n(0),
        throw: n(1),
        return: n(2)
      }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
      }), a
    },
    c = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.init = !1, e.attributeHasChanged = !1, e.videoService = window["fbs-video"], e.windowBlurEventListener = e.handleWindowBlur.bind(e), e.windowFocusEventListener = e.handleWindowFocus.bind(e), e.windowScrollEventListener = Object(r.a)(e.handleWindowScroll, 50, e), e.videoPlayingEventListener = e.handleVideoPlaying.bind(e), e.closeButtonTriggered = !1, e
      }
      return o(e, t), Object.defineProperty(e, "observedAttributes", {
        get: function() {
          return ["video-id", "player-id", "autoplay", "report-autoplay", "rendition-selection", "key-value-string", "muted", "ad-unit-path", "ads-disabled"]
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "playing", {
        get: function() {
          var t = this.videoPlayer && !this.videoPlayer.paused() && this.videoPlayer.currentTime() !== this.videoPlayer.duration();
          return this.adPlaying || t || !1
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adPlaying", {
        get: function() {
          return this.adPlayer && !this.adPlayer.paused() && this.adPlayer.currentTime() !== this.adPlayer.duration()
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "duration", {
        get: function() {
          return this.videoPlayer && this.videoPlayer.mediainfo && this.videoPlayer.mediainfo.duration
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "pauseAd", {
        get: function() {
          return this.hasAttribute("pause-ad") && "false" !== this.getAttribute("pause-ad")
        },
        set: function(t) {
          t ? this.setAttribute("pause-ad", "") : this.removeAttribute("pause-ad")
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "videoId", {
        get: function() {
          return this.getAttribute("video-id")
        },
        set: function(t) {
          t && this.setAttribute("video-id", t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adsDisabled", {
        get: function() {
          return this.hasAttribute("ads-disabled") && "false" !== this.getAttribute("ads-disabled")
        },
        set: function(t) {
          t ? this.setAttribute("ads-disabled", "") : this.removeAttribute("ads-disabled")
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adUnitPath", {
        get: function() {
          return this.getAttribute("ad-unit-path") || this.getAdUnitPath()
        },
        set: function(t) {
          t && this.setAttribute("ad-unit-path", t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "playerId", {
        get: function() {
          return this.getAttribute("player-id")
        },
        set: function(t) {
          t && this.setAttribute("player-id", t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "autoplay", {
        get: function() {
          return this.hasAttribute("autoplay") && "false" !== this.getAttribute("autoplay")
        },
        set: function(t) {
          t ? this.setAttribute("autoplay", "") : this.removeAttribute("autoplay")
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "muted", {
        get: function() {
          return this.hasAttribute("muted") && "false" !== this.getAttribute("muted")
        },
        set: function(t) {
          t ? this.setAttribute("muted", "") : this.removeAttribute("muted")
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "secretAutoplay", {
        get: function() {
          return this.hasAttribute("secret-autoplay") && "false" !== this.getAttribute("secret-autoplay")
        },
        set: function(t) {
          t ? this.setAttribute("secret-autoplay", "") : this.removeAttribute("secret-autoplay")
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "renditionSelection", {
        get: function() {
          return this.getAttribute("rendition-selection")
        },
        set: function(t) {
          t && this.setAttribute("rendition-selection", t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "keyValueString", {
        get: function() {
          return this.getAttribute("key-value-string")
        },
        set: function(t) {
          t && this.setAttribute("key-value-string", t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "attrsSnapshot", {
        get: function() {
          return {
            videoId: this.videoId,
            playerId: this.playerId,
            autoplay: this.autoplay,
            secretAutoplay: this.secretAutoplay,
            renditionSelection: this.renditionSelection,
            keyValueString: this.keyValueString,
            videoElementId: this.videoElementId,
            adUnitPath: this.adUnitPath,
            adsDisabled: this.adsDisabled
          }
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adPlayer", {
        get: function() {
          if (this.videoPlayer && this.videoPlayer.ima3 && !(this.videoPlayer.ima3 instanceof Function) && this.videoPlayer.ima3.adsManager) return this.videoPlayer.ima3.adPlayer
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.attributeChangedCallback = function(t, e, n) {
        this.attributeHasChanged = !0, this.init && "video-id" === t && this.changeVideo(n)
      }, e.prototype.connectedCallback = function() {
        var t = this;
        this.isFocused = document.hasFocus(), this.isVideoInView = this.checkIsVideoInView();
        var e = setInterval(function() {
          return s(t, void 0, void 0, function() {
            var t;
            return a(this, function(n) {
              switch (n.label) {
                case 0:
                  return this.attributeHasChanged ? [3, 2] : (clearInterval(e), this.videoElementId = this.attrsSnapshot.videoElementId = this.videoService.generateId(), this.insertVideoElement(), this.insertCloseButton(), [4, this.videoService.init(this.attrsSnapshot)]);
                case 1:
                  return t = n.sent(), this.init = !0, this.playerData = t, this.videoPlayer = t.player, this.videoElement.title = this.videoPlayer.mediainfo.name, this.attachPlayEventListeners(), this.attachCustomSocialOptions(), this.dispatchEvent(new CustomEvent("init")), this.autoplay && this.subscribeForHiddenPause(), [3, 3];
                case 2:
                  this.attributeHasChanged = !1, n.label = 3;
                case 3:
                  return [2]
              }
            })
          })
        }, 10)
      }, e.prototype.disconnectedCallback = function() {
        this.removeWindowFocusEvents(), document.removeEventListener("fbs-video-playing", this.videoPlayingEventListener), window.removeEventListener("scroll", this.windowScrollEventListener), this.videoPlayer && (this.videoPlayer.off("play"), this.videoPlayer.off("pause"), this.videoPlayer.off("ads-play"), this.videoPlayer.off("ads-pause"), this.videoPlayer.off("ended")), this.videoService.dispose(this.playerData)
      }, e.prototype.changeVideo = function(t) {
        return s(this, void 0, void 0, function() {
          return a(this, function(e) {
            switch (e.label) {
              case 0:
                return this.playerData.videoId = t, [4, this.videoService.handleVideoJsReady(this.playerData)];
              case 1:
                return e.sent(), this.videoElement.title = this.videoPlayer.mediainfo.name, this.attachCustomSocialOptions(), this.autoplay && (this.muted && (this.mute(), this.attachAdLoadedHandler()), this.play()), [2]
            }
          })
        })
      }, e.prototype.mute = function() {
        this.videoPlayer && this.videoPlayer.muted(!0), this.adPlayer && this.muteAd()
      }, e.prototype.play = function() {
        this.videoPlayer && this.videoPlayer.play(), this.adPlayer && this.adPlayer.play()
      }, e.prototype.pause = function() {
        this.videoPlayer && this.videoPlayer.pause(), this.adPlayer && this.adPlayer.pause()
      }, e.prototype.togglePlay = function() {
        this.playing ? this.pause() : this.play()
      }, e.prototype.requestFullscreen = function() {
        return this.videoPlayer && this.videoPlayer.requestFullscreen(), new Promise(function() {})
      }, e.prototype.attachCustomSocialOptions = function() {
        this.videoPlayer.social && this.videoPlayer.social({
          url: "https://www.forbes.com/video/" + this.videoId + "/"
        })
      }, e.prototype.insertCloseButton = function() {
        this.closeButton = document.createElement("div"), this.closeButton.innerHTML = '<i class="icon icon-close fs-text-s"></i>', this.closeButton.classList.add("video-close"), this.closeButton.classList.add("hidden"), this.closeButton.setAttribute("data-ga-track", "sticky close"), this.appendChild(this.closeButton)
      }, e.prototype.showCloseButton = function() {
        this.useCloseButton && !this.closeButtonTriggered && (this.closeButton.classList.contains("hidden") && this.closeButton.classList.remove("hidden"), this.closeButtonTriggered = !0)
      }, e.prototype.hideAdCloseButton = function() {
        if (!(this.videoPlayer && this.videoPlayer.ima3 && this.videoPlayer.ima3.adsManager && this.videoPlayer.ima3.adsManager.getCurrentAd)) return !1;
        var t = this.videoPlayer.ima3.adsManager.getCurrentAd(),
          e = ["126949942", "126954142", "939010822", "1286113822", "1286115742", "4430278527", "4430286386", "1362247942"],
          n = t && t.getAdSystem().toLowerCase() || "";
        return t && (-1 === n.indexOf("adsense") || -1 === n.indexOf("adx") || -1 === e.indexOf(t.getAdId()))
      }, e.prototype.insertVideoElement = function() {
        this.videoElement = document.createElement("video"), Object.assign(this.videoElement.dataset, {
          account: "2097119709001",
          embed: "default",
          player: this.playerId
        }), this.videoElement.className = "video-js brightcove_perform playable-rectangle", this.videoElement.setAttribute("controls", ""), this.videoElement.setAttribute("crossorigin", ""), this.videoElement.setAttribute("playsinline", ""), this.autoplay && this.videoElement.setAttribute("autoplay", ""), this.muted && this.videoElement.setAttribute("muted", ""), this.videoElement.id = this.videoElementId, this.innerHTML = "", this.appendChild(this.videoElement)
      }, e.prototype.getAdUnitPath = function() {
        var t = window.fbsads;
        return t ? t.adUnitPath : "/7175/fdcvideo"
      }, e.prototype.attachPlayEventListeners = function() {
        this.attachPlayEventHandler(), this.attachAdsTiming(), this.attachPlayEndedEventListener(), this.attachAdsStartedEventListener(), this.attachAdsErrorEventHandler(), this.attachAdsEndedEventListener(), this.attachPauseEventHandler(), this.subscribeForPause()
      }, e.prototype.attachAdsTiming = function() {
        var t = this;
        this.videoPlayer.on("ads-request", function() {
          Object(i.a)("Ad Requested " + t.videoElementId), t.videoPlayer.off("ads-request")
        }), this.videoPlayer.on("adscanceled", function() {
          t.showCloseButton(), t.videoPlayer.off("adscanceled")
        }), this.videoPlayer.on("ads-load", function() {
          Object(i.a)("Ad Loaded " + t.videoElementId), t.videoPlayer.off("ads-load"), t.muteAd()
        })
      }, e.prototype.attachPlayEndedEventListener = function() {
        var t = this;
        this.videoPlayer.on("ended", function() {
          t.videoComplete || t.playing || (t.videoComplete = !0, t.removeWindowFocusEvents(), window.removeEventListener("scroll", t.windowScrollEventListener), t.dispatchEvent(new CustomEvent("ended")))
        })
      }, e.prototype.attachAdsStartedEventListener = function() {
        var t = this;
        this.videoPlayer.on("ads-ad-started", function() {
          t.hideAdCloseButton() || t.showCloseButton(), t.dispatchEvent(new CustomEvent("ad-started"))
        })
      }, e.prototype.attachAdsEndedEventListener = function() {
        var t = this;
        this.videoPlayer.on("ads-ad-ended", function() {
          t.showCloseButton(), t.dispatchEvent(new CustomEvent("ad-ended"))
        })
      }, e.prototype.attachPlayEventHandler = function() {
        var t = this;
        this.videoPlayer.on("play", function() {
          t.setAttribute("playing", ""), t.autoplay && !t.secretAutoplay || (t.videoService.hiddenPauseEnabled = !1), t.adsDisabled && t.useCloseButton && t.showCloseButton(), t.videoComplete = !1, t.videoService.setMediaSessionDetails(t.playerData), t.videoService.trackPlay(t.playerData), t.videoService.notifyPlaying(t.videoElementId), t.closeButtonTriggered && t.closeButtonTimeout || (t.closeButtonTimeout = setTimeout(function() {
            t.showCloseButton()
          }, 37e3)), t.dispatchEvent(new CustomEvent("play"))
        }), this.videoPlayer.on("ads-play", function() {
          t.setAttribute("playing", ""), t.videoService.notifyPlaying(t.videoElementId), t.dispatchEvent(new CustomEvent("play"))
        })
      }, e.prototype.attachPauseEventHandler = function() {
        var t = this;
        this.videoPlayer.on("pause", function() {
          t.removeAttribute("playing"), t.dispatchEvent(new CustomEvent("pause"))
        }), this.videoPlayer.on("ads-pause", function() {
          t.removeAttribute("playing"), t.dispatchEvent(new CustomEvent("pause"))
        })
      }, e.prototype.attachAdLoadedHandler = function() {
        var t = this;
        this.videoPlayer.on("ima3-loaded", function() {
          t.adPlayer && t.muteAd()
        })
      }, e.prototype.attachAdsErrorEventHandler = function() {
        var t = this;
        this.videoPlayer.on("ima3-ad-error", function() {
          t.showCloseButton()
        })
      }, e.prototype.subscribeForPause = function() {
        document.addEventListener("fbs-video-playing", this.videoPlayingEventListener)
      }, e.prototype.handleVideoPlaying = function(t) {
        t.detail && t.detail.videoElementId !== this.videoElementId && this.pause()
      }, e.prototype.handleWindowBlur = function() {
        this.isFocused = !1, this.pauseToggleCheck()
      }, e.prototype.handleWindowFocus = function() {
        this.isFocused = !0, this.pauseToggleCheck()
      }, e.prototype.handleWindowScroll = function() {
        (!this.videoElement || !this.videoElement.paused || this.pauseAd && this.adPlaying) && (this.isVideoInView && !this.checkIsVideoInView() ? (this.isVideoInView = !1, this.pauseToggleCheck()) : !this.isVideoInView && this.checkIsVideoInView() && (this.isVideoInView = !0, this.pauseToggleCheck()))
      }, e.prototype.pauseToggleCheck = function() {
        this.videoService.hiddenPauseEnabled && (this.isFocused && this.isVideoInView ? this.play() : this.pause())
      }, e.prototype.removeWindowFocusEvents = function() {
        window.removeEventListener("blur", this.windowBlurEventListener), window.removeEventListener("focus", this.windowFocusEventListener)
      }, e.prototype.subscribeForHiddenPause = function() {
        window.addEventListener("blur", this.windowBlurEventListener), window.addEventListener("focus", this.windowFocusEventListener), window.addEventListener("scroll", this.windowScrollEventListener), this.addEventListener("click", this.removeWindowFocusEvents.bind(this))
      }, e.prototype.checkIsVideoInView = function() {
        var t = this.getBoundingClientRect();
        return (this.playing ? t.bottom : t.top) > 0
      }, e.prototype.muteAd = function() {
        var t = this;
        if (this.adPlayer) var e = 0,
          n = setInterval(function() {
            e++ < 30 && t.adPlayer ? t.adPlayer.muted(!0) : clearInterval(n)
          }, 20)
      }, e
    }(HTMLElement)
}, function(t, e, n) {
  "use strict";

  function i(t, e, n) {
    var i, r;
    return e || (e = 100),
      function() {
        for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
        var a = n || {},
          c = +new Date;
        if (i && c < i + e) {
          clearTimeout(r);
          var u = e + c + 1;
          r = setTimeout(function() {
            i = c, a.deferred = !0, t.apply(a, o)
          }, u - i)
        } else i = c, t.apply(a, o)
      }
  }
  e.a = i
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return u
  });
  var i = n(35),
    r = n(244),
    o = this && this.__assign || Object.assign || function(t) {
      for (var e, n = 1, i = arguments.length; n < i; n++) {
        e = arguments[n];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
      }
      return t
    },
    s = this && this.__awaiter || function(t, e, n, i) {
      return new(n || (n = Promise))(function(r, o) {
        function s(t) {
          try {
            c(i.next(t))
          } catch (t) {
            o(t)
          }
        }

        function a(t) {
          try {
            c(i.throw(t))
          } catch (t) {
            o(t)
          }
        }

        function c(t) {
          t.done ? r(t.value) : new n(function(e) {
            e(t.value)
          }).then(s, a)
        }
        c((i = i.apply(t, e || [])).next())
      })
    },
    a = this && this.__generator || function(t, e) {
      function n(t) {
        return function(e) {
          return i([t, e])
        }
      }

      function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; c;) try {
          if (r = 1, o && (s = o[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(o, n[1])).done) return s;
          switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
              s = n;
              break;
            case 4:
              return c.label++, {
                value: n[1],
                done: !1
              };
            case 5:
              c.label++, o = n[1], n = [0];
              continue;
            case 7:
              n = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                c = 0;
                continue
              }
              if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                c.label = n[1];
                break
              }
              if (6 === n[0] && c.label < s[1]) {
                c.label = s[1], s = n;
                break
              }
              if (s && c.label < s[2]) {
                c.label = s[2], c.ops.push(n);
                break
              }
              s[2] && c.ops.pop(), c.trys.pop();
              continue
          }
          n = e.call(t, c)
        } catch (t) {
          n = [6, t], o = 0
        } finally {
          r = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
          value: n[0] ? n[1] : void 0,
          done: !0
        }
      }
      var r, o, s, a, c = {
        label: 0,
        sent: function() {
          if (1 & s[0]) throw s[1];
          return s[1]
        },
        trys: [],
        ops: []
      };
      return a = {
        next: n(0),
        throw: n(1),
        return: n(2)
      }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
      }), a
    },
    c = [384, 768, 1024, 1280, 1600, 1920],
    u = function() {
      function t() {
        this.ima3Config = {
          serverUrl: "",
          requestMode: "onplay",
          adTechOrder: ["html5", "flash"],
          vpaidMode: "ENABLED",
          timeout: 8e3,
          showVpaidControls: !0
        }, this.bc = window.bc, this.videojs = window.videojs, this.srVideoInit = window.srVideoInit, this.playerData = new Map, this.idCount = 0, this.playerCount = 0, this.PID = "50e4a8434240cf5c4b000009", this.amazonBids = {}, this.hiddenPauseEnabled = !0
      }
      return t.prototype.generateId = function() {
        return "brightcove_perform_" + this.idCount++
      }, t.prototype.init = function(t) {
        return s(this, void 0, void 0, function() {
          var e;
          return a(this, function(n) {
            switch (n.label) {
              case 0:
                return this.fbsAdsService = window.fbsads, e = this.playerData.get(t.videoElementId), e = e ? Object.assign(e, t) : new r.a(t), this.playerData.set(t.videoElementId, e), e.amazonId = "videoSlot" + ++this.playerCount, [4, this.waitforGdpr()];
              case 1:
                return n.sent(), [4, this.loadMnet()];
              case 2:
                return n.sent(), [4, this.loadVideojs(e)];
              case 3:
                return n.sent(), [4, this.loadIma3()];
              case 4:
                return n.sent(), [4, this.initPlayer(e)];
              case 5:
                return n.sent(), this.callSimpleReach(e), this.setSimpleReachEvents(e), [2, e]
            }
          })
        })
      }, t.prototype.waitforGdpr = function() {
        return s(this, void 0, void 0, function() {
          var t, e;
          return a(this, function(n) {
            return t = window.trackingService || {}, e = new Promise(function(e) {
              var n = function(t) {
                try {
                  var i = JSON.parse(t.data);
                  i && "preference_manager" === i.source && "submit_preferences" === i.message && (e(), t.currentTarget.removeEventListener(t.type, n))
                } catch (t) {}
              };
              t.isEurope && -1 === document.cookie.indexOf("notice_gdpr_prefs=") ? window.addEventListener("message", n) : e()
            }), [2, e]
          })
        })
      }, t.prototype.requestMnetBids = function() {
        return s(this, void 0, void 0, function() {
          return a(this, function(t) {
            return this.fbsAdsService ? [2, Promise.race([this.fbsAdsService.fetchMediaNetVideoBids(), new Promise(function(t) {
              setTimeout(t, 2e3)
            }).then(function() {
              return ""
            })])] : [2, ""]
          })
        })
      }, t.prototype.loadMnet = function() {
        return s(this, void 0, void 0, function() {
          return a(this, function(t) {
            return this.fbsAdsService.initMediaNetVideoBidding() ? [2, this.fbsAdsService.initMediaNetVideoBidding()] : [2]
          })
        })
      }, t.prototype.notifyPlaying = function(t) {
        var e = new CustomEvent("fbs-video-playing", {
          detail: {
            videoElementId: t
          }
        });
        document.dispatchEvent(e)
      }, t.prototype.simpleReachCall = function() {
        return s(this, void 0, void 0, function() {
          return a(this, function(t) {
            return window.srVideoInit = function(t, e) {
              return window.SimplereachVideo && (window[t] = window.SimplereachVideo.video(e)), window[t]
            }, [2]
          })
        })
      }, t.prototype.loadVideojs = function(t) {
        return s(this, void 0, void 0, function() {
          return a(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, this.loadScript("//players.brightcove.net/2097119709001/" + t.playerId + "_default/index.min.js")];
              case 1:
                return e.sent(), [4, this.loadScript("//d8rk54i4mohrb.cloudfront.net/js/video.js")];
              case 2:
                return e.sent(), [4, this.simpleReachCall()];
              case 3:
                return e.sent(), this.videojs = window.videojs, this.srVideoInit = window.srVideoInit, this.bc = window.bc, [2]
            }
          })
        })
      }, t.prototype.callSimpleReach = function(t, e) {
        void 0 === e && (e = "init");
        var n = t.player.mediainfo;
        this.srVideoInit(t.id, {
          pid: this.PID,
          video_id: n.id,
          title: n.name,
          description: n.description,
          article_id: "",
          length: Math.trunc(n.duration),
          thumbnail_url: n.thumbnail,
          tags: n.tags,
          date: n.createdAt,
          ignore_errors: !1,
          event_name: e
        })
      }, t.prototype.setSimpleReachEvents = function(t) {
        var e, n = this.videojs.getPlayer(t.id),
          i = [3, 15, 30, 45],
          r = 0,
          o = 0;
        n.on("timeupdate", function(s) {
          if (parseInt(e) !== Math.floor(n.currentTime())) {
            void 0 === e && window[t.id].start(t.autoplay ? "auto" : "click"), e = Math.floor(n.currentTime());
            var a = Math.floor(n.currentTime() / n.duration() * 100);
            a >= r + 25 && a < 100 && (r += 25, window[t.id].quartile(r)), e >= o + 15 && (o += 15, window[t.id].elapsed(15)), e >= i[0] && window[t.id].elapsedThreshold(i.shift())
          }
        }), n.on("ended", function(e) {
          window[t.id].quartile(r), window[t.id].complete()
        })
      }, t.prototype.loadScript = function(t) {
        return s(this, void 0, void 0, function() {
          return a(this, function(e) {
            return [2, new Promise(function(e) {
              Object(i.a)(t, e)
            })]
          })
        })
      }, t.prototype.loadStyle = function(t) {
        return s(this, void 0, void 0, function() {
          return a(this, function(e) {
            return [2, new Promise(function(e) {
              Object(i.b)(t, e)
            })]
          })
        })
      }, t.prototype.loadIma3 = function() {
        return s(this, void 0, void 0, function() {
          return a(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all([this.loadStyle("//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.css"), this.loadScript("//players.brightcove.net/videojs-ima3/2/videojs.ima3.min.js")])];
              case 1:
                return t.sent(), [2]
            }
          })
        })
      }, t.prototype.setAdTargeting = function(t) {
        return s(this, void 0, void 0, function() {
          var e, n;
          return a(this, function(i) {
            switch (i.label) {
              case 0:
                return t.player.ima3 ? [4, this.getAdServerUrl(t)] : [2];
              case 1:
                return e = i.sent(), n = t.autoplay ? "onload" : "onplay", t.player.ima3 instanceof Function ? (this.ima3Config.serverUrl = e, this.ima3Config.requestMode = n, t.player.ima3(this.ima3Config)) : (t.player.ima3.settings.requestMode = n, t.player.ima3.settings.serverUrl = e), [2]
            }
          })
        })
      }, t.prototype.getAdServerUrl = function(t) {
        return s(this, void 0, void 0, function() {
          var e, n, i, r, s, c, u, l, f, d, h;
          return a(this, function(a) {
            switch (a.label) {
              case 0:
                return [4, this.getPageTargeting()];
              case 1:
                e = a.sent(), n = this.getVideoAdTargeting(t), i = (t.keyValueString || "").split("&"), r = (i || []).reduce(function(t, e) {
                  var n = e.split("="),
                    i = n[0],
                    r = n[1];
                  try {
                    t[i] = decodeURIComponent(r || "")
                  } catch (e) {
                    console.error(e), t[i] = ""
                  }
                  return t
                }, {}), s = t.player.el_.getBoundingClientRect(), 300 === s.height && s.width / s.height >= 1.33 && (r.vh = "300plus"), c = o({}, e, n, r), u = ((this.amazonBids[t.amazonId] || {}).helpers || {}).qsParams || "", "function" == typeof u && (u = u()), l = "", u.length > 1 && (l += l ? u : u.substring(1), delete this.amazonBids[t.amazonId]);
                for (f in c) c.hasOwnProperty(f) && (l += (l ? "&" : "") + f + "=" + c[f]);
                return this.mnetBids && (l += (l ? "&" : "") + this.mnetBids, this.mnetBids = ""), l = encodeURIComponent(l), d = encodeURIComponent("https://www.forbes.com/video/" + t.videoId + "/"), document.cookie.match(/notice_gdpr_prefs=0(?:,1)?:/) && (h = "&npa=1"), [2, "https://pubads.g.doubleclick.net/gampad/ads?sz=620x350|480x320&ciu_sz=s&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1" + h + "&iu=" + t.adUnitPath + "&cust_params=" + l + "&url=[referrer_url]&correlator=[timestamp]&description_url=" + d]
            }
          })
        })
      }, t.prototype.getPageTargeting = function() {
        return s(this, void 0, void 0, function() {
          var t, e;
          return a(this, function(n) {
            switch (n.label) {
              case 0:
                return t = {}, this.fbsAdsService ? [4, this.fbsAdsService.getPageTargeting()] : [3, 2];
              case 1:
                return e = n.sent(), Object.keys(e).filter(function(t) {
                  return !(t.startsWith("mnet") || t.startsWith("fb_") || t.startsWith("amzn"))
                }).forEach(function(n) {
                  t[n] = e[n].join()
                }), [2, t];
              case 2:
                return [2]
            }
          })
        })
      }, t.prototype.getVideoAdTargeting = function(t) {
        var e = this.getMediaInformation(t),
          n = e.duration,
          i = e.customFields,
          r = void 0 === i ? {} : i,
          o = t.videoId,
          s = t.secretAutoplay,
          a = t.autoplay;
        return {
          vid: o,
          vl: n ? n <= 60 ? "1min" : "not1min" : "unknown",
          vss: r.videospecialslot || "",
          autoplay: !s && a ? "yes" : "no",
          vchan: this.parseChannelSection(r.channelsection) || "",
          vsec: this.parseChannelSection(r.channelsection2) || ""
        }
      }, t.prototype.parseChannelSection = function(t) {
        return void 0 === t && (t = ""), t.split(":")[0].trim().replace(/\s/g, "")
      }, t.prototype.initPlayer = function(t) {
        return s(this, void 0, void 0, function() {
          var e, n, i;
          return a(this, function(r) {
            switch (r.label) {
              case 0:
                if (!this.bc) return [2, t];
                t.adsDisabled || this.getAmazonHeaderBidding(t);
                try {
                  e = this.bc(t.id), t.adsDisabled || "function" != typeof e.ima3 || e.ima3(this.ima3Config)
                } catch (t) {
                  console.error(t)
                }
                return n = t, [4, this.prepareVideo(t.id)];
              case 1:
                return n.player = r.sent(), t.adsDisabled ? [3, 3] : (i = this, [4, this.requestMnetBids()]);
              case 2:
                i.mnetBids = r.sent(), r.label = 3;
              case 3:
                return [4, this.handleVideoJsReady(t)];
              case 4:
                return r.sent(), [2, t]
            }
          })
        })
      }, t.prototype.getAmazonHeaderBidding = function(t) {
        var e = this;
        this.fbsAdsService && this.fbsAdsService.fetchAmazonBids([{
          slotID: t.amazonId,
          mediaType: "video"
        }]).then(function(n) {
          e.amazonBids[t.amazonId] = (n || []).find(function(e) {
            return e.slotID === t.amazonId
          })
        })
      }, t.prototype.getMediaInformation = function(t) {
        return t.player ? t.player.mediainfo : null
      }, t.prototype.prepareVideo = function(t) {
        return s(this, void 0, void 0, function() {
          var e = this;
          return a(this, function(n) {
            return [2, new Promise(function(n) {
              e.videojs(t).ready(function() {
                n(this)
              })
            })]
          })
        })
      }, t.prototype.handleVideoJsReady = function(t) {
        return s(this, void 0, void 0, function() {
          var e, n;
          return a(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, new Promise(function(e, n) {
                  t.player.catalog.getVideo(t.videoId, function(t, i) {
                    t || "string" == typeof i ? n(t) : e(i)
                  })
                })];
              case 1:
                return e = i.sent(), n = document.getElementById(t.videoElementId).getBoundingClientRect(), e = this.processVideoThumbnail(e, n), this.handleCatalogVideo(t, e), t.adsDisabled ? [3, 3] : [4, this.setAdTargeting(t)];
              case 2:
                i.sent(), i.label = 3;
              case 3:
                return [2, e]
            }
          })
        })
      }, t.prototype.processVideoThumbnail = function(t, e) {
        var n = e.width > e.height,
          i = n ? e.width : e.height,
          r = c.find(function(t) {
            return t >= i
          }) || c[c.length - 1],
          s = n ? r + "x0" : "0x" + r;
        return o({}, t, {
          poster: "https://thumbor.forbes.com/thumbor/" + s + "/" + t.poster,
          thumbnail: "https://thumbor.forbes.com/thumbor/" + s + "/" + t.thumbnail
        })
      }, t.prototype.handleCatalogVideo = function(t, e) {
        if (t.player.catalog.load(e), t.renditionSelection) switch (t.mediainfo = null, t.renditionSelection) {
          case "closest":
            var n = document.getElementById(t.id);
            t.mediainfo = this.selectRendition(t, n.offsetWidth, n.offsetHeight);
            break;
          case "max":
            t.mediainfo = this.selectRendition(t, screen.width, screen.height);
            break;
          default:
            var i = t.renditionSelection.match(/(\d+)x(\d+)/i);
            i && (t.mediainfo = this.selectRendition(t, Number(i[1]), Number(i[2])))
        }
        return t.mediainfo && t.player.src({
          type: "video/mp4",
          src: t.mediainfo.src
        }), t
      }, t.prototype.selectRendition = function(t, e, n) {
        var i, r = Math.pow(e, 2) + Math.pow(n, 2),
          o = Number.MAX_VALUE;
        return this.playerData.get(t.id).player.mediainfo.sources.forEach(function(t) {
          if ("MP4" === t.container && t.width && t.height && t.src) {
            var e = t.width * t.width + t.height * t.height - r;
            (!i || o < 0 && e >= 0 || (o < 0 || o >= 0 && e >= 0) && Math.abs(e) < Math.abs(o)) && (i = t, o = e)
          }
        }), i
      }, t.prototype.dispose = function(t) {
        t && (this.playerData.delete(t.id), t.player && t.player.dispose && t.player.dispose())
      }, t.prototype.setMediaSessionDetails = function(t) {
        if ("mediaSession" in navigator) {
          var e = this.getMediaInformation(t);
          navigator.mediaSession.metadata = new MediaMetadata({
            title: e.name,
            artist: "Forbes Media",
            album: "Forbes.com",
            artwork: [{
              src: e.thumbnail
            }]
          })
        }
      }, t.prototype.trackPlay = function(t) {
        if (!t.playTracked) {
          t.playTracked = !0;
          var e = window.trackingService;
          if (!e || !e.track) return void console.warn("No trackingService provided for video");
          e.track({
            event: "fastVideo",
            fastN: "video",
            fastSu: document.location.protocol + "//www.forbes.com/video/" + t.videoId + "/",
            fastPt: "video",
            fastI: "video/brightcove/" + t.videoId,
            fastRe: document.location.host
          }, !1)
        }
      }, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t(t) {
      this.playerId = "default", this.videoEnabled = !1, this.autoplay = !1, this.secretAutoplay = !1, this.sz = "620x350", this.adUnitPath = "/7175/fdcvideo", this.playTracked = !1, Object.assign(this, t), this.id = t.videoElementId
    }
    return t
  }()
}, function(t, e, n) {
  "use strict";
  var i = n(246);
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return o
  });
  var i = n(91),
    r = this && this.__extends || function() {
      var t = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {
        t.__proto__ = e
      } || function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      };
      return function(e, n) {
        function i() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
      }
    }(),
    o = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.adsService = window.fbsads, e.renderEventListener = e.handleRender.bind(e), e.viewableEventListener = e.handleViewable.bind(e), e
      }
      return r(e, t), Object.defineProperty(e, "observedAttributes", {
        get: function() {
          return ["batched", "position", "ad-id", "custom-targeting"]
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adId", {
        get: function() {
          return this.getAttribute("ad-id")
        },
        set: function(t) {
          t && this.setAttribute("ad-id", t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "position", {
        get: function() {
          return this.getAttribute("position")
        },
        set: function(t) {
          t && this.setAttribute("position", t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "customTargeting", {
        get: function() {
          return this.getAttribute("custom-targeting")
        },
        set: function(t) {
          t && this.setAttribute("custom-targeting", t)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "progressive", {
        get: function() {
          return this.hasAttribute("progressive") && "false" !== this.getAttribute("progressive")
        },
        set: function(t) {
          t ? this.setAttribute("progressive", "") : this.removeAttribute("progressive")
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "batched", {
        get: function() {
          return this.hasAttribute("batched") && "false" !== this.getAttribute("batched")
        },
        set: function(t) {
          t ? this.setAttribute("batched", "") : this.removeAttribute("batched")
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "hideEmpty", {
        get: function() {
          return this.hasAttribute("hide-empty") && "false" !== this.getAttribute("hide-empty")
        },
        set: function(t) {
          t ? this.setAttribute("hide-empty", "") : this.removeAttribute("hide-empty")
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "empty", {
        get: function() {
          return this.currentSlotInfo && (this.currentSlotInfo.isEmpty || this.currentSlotInfo.size[0] < 10)
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "attrsSnapshot", {
        get: function() {
          return {
            batched: this.batched,
            position: this.position,
            adId: this.adId
          }
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.display = function() {
        this.div && (this.adsService.display(this.div.id), this.displayCalled = !0)
      }, e.prototype.refresh = function() {
        this.adsService.refresh(this.div.id)
      }, e.prototype.create = function() {
        this.adsService.createSlot(this.position, this.adId, this.customTargeting), this.insert()
      }, e.prototype.getTargeting = function(t) {
        return this.currentSlotInfo.slot.getTargeting(t)
      }, e.prototype.getSlotTargeting = function() {
        var t = this;
        return this.currentSlotInfo.slot.getTargetingKeys().reduce(function(e, n) {
          return e[n] = t.getTargeting(n), e
        }, {})
      }, e.prototype.handleRender = function(t) {
        var e = t.detail;
        if (this.div && this.div.id === e.slot.getSlotElementId()) {
          var n = new CustomEvent("render", {
            detail: e
          });
          this.currentSlotInfo = e, i.a.mark("Rendered " + e.slot.getSlotElementId()), this.hideEmpty && !this.empty && (this.style.display = ""), this.dispatchEvent(n)
        }
      }, e.prototype.listenToRender = function() {
        document.addEventListener("fbs-ad-render", this.renderEventListener)
      }, e.prototype.handleViewable = function(t) {
        var e = t.detail;
        if (this.div && (this.div.id || this.getDivId()) === e.slot.getSlotElementId()) {
          var n = new CustomEvent("viewable", {
            detail: e
          });
          i.a.mark("Viewable " + e.slot.getSlotElementId()), this.dispatchEvent(n)
        }
      }, e.prototype.listenToViewable = function() {
        document.addEventListener("fbs-ad-viewable", this.viewableEventListener)
      }, e.prototype.insert = function() {
        if (this.position) {
          var t = this.getDivId(),
            e = document.getElementById(t);
          if (e) return void console.warn(this, "was removed because an element", e, "with the id " + t + " already exists");
          if (this.div) return void(this.div.id = t);
          this.div = document.createElement("div"), this.div.id = t, this.hideEmpty && (this.style.display = "none"), this.appendChild(this.div), this.addAccessibilityAttributes(), "hero" === this.position && this.hideHero()
        }
      }, e.prototype.getDivId = function() {
        return this.adsService.getDivId(this.position, this.adId)
      }, e.prototype.hideHero = function() {
        var t = this.parentNode;
        new MutationObserver(function(e) {
          e.forEach(function(e) {
            var n = t.querySelector(".fto");
            if (n) {
              Array.from(n.querySelectorAll("button ,a")).forEach(function(t) {
                t.setAttribute("tabindex", "-1"), t.setAttribute("aria-hidden", "true")
              })
            }
          })
        }).observe(t, {
          attributes: !1,
          childList: !0,
          characterData: !1
        })
      }, e.prototype.addAccessibilityAttributes = function() {
        var t = this;
        new MutationObserver(function(e) {
          e.forEach(function(e) {
            if (t.div) {
              var n = t.div.querySelector("iframe");
              n && !n.hasAttribute("aria-hidden") && (n.setAttribute("tabindex", "-1"), n.setAttribute("aria-hidden", "true"), n.setAttribute("title", "Ad content"))
            }
          })
        }).observe(this.div, {
          attributes: !0,
          childList: !0,
          characterData: !1
        })
      }, e.prototype.destroyAd = function() {
        document.removeEventListener("fbs-ad-render", this.renderEventListener), document.removeEventListener("fbs-ad-viewable", this.viewableEventListener), this.dispatchEvent(new CustomEvent("destroyed")), this.div && (this.adsService.destroySlots(this.div.id), this.div.remove(), delete this.div), this.displayCalled = !1
      }, e.prototype.initializeAd = function() {
        var t = this;
        this.listenToRender(), this.listenToViewable();
        var e = setInterval(function() {
          t.attrsSnapshot.position && (t.create(), t.batched || t.progressive || t.displayCalled || t.display(), clearInterval(e))
        }, 10)
      }, e.prototype.connectedCallback = function() {
        this.initializeAd()
      }, e.prototype.disconnectedCallback = function() {
        this.destroyAd()
      }, e
    }(HTMLElement)
}, function(t, e, n) {
  "use strict";
  var i = (n(119), n(248), n(121), n(250));
  n.d(e, "a", function() {
    return i.a
  });
  n(122), n(258)
}, function(t, e, n) {
  "use strict";
  n(120)
}, function(t, e, n) {
  "use strict";
  n.d(e, "b", function() {
    return r
  }), n.d(e, "a", function() {
    return o
  });
  var i = n(35),
    r = [{
      min: 0,
      max: 15,
      increment: "0.04"
    }, {
      min: 15,
      max: 40,
      increment: "0.20"
    }, {
      min: 40,
      max: 100,
      increment: "1.00"
    }],
    o = function() {
      function t() {}
      return t.prototype.init = function() {
        return this.loadCriteo()
      }, t.prototype.setTargeting = function() {
        this.criteo.SetDFPKeyValueTargeting()
      }, t.prototype.fetchBids = function(t, e) {
        var n = this;
        return new Promise(function(i, r) {
          n.criteo.events.push(function() {
            try {
              n.criteo.SetLineItemRanges(n.stringifyLineItemRanges(e)), n.criteo.RequestBids(t, i)
            } catch (t) {
              r(t)
            }
          })
        }).catch(function(t) {
          console.error(t)
        })
      }, t.prototype.stringifyLineItemRanges = function(t) {
        return t.map(function(t) {
          return t.min + ".." + t.max + ":" + t.increment
        }).join(";")
      }, t.prototype.loadCriteo = function() {
        var t = this;
        return new Promise(function(e, n) {
          Object(i.a)("https://static.criteo.net/js/ld/publishertag.js", function() {
            t.criteo = window.Criteo = window.Criteo || {}, t.criteo.events = t.criteo.events || [], e()
          })
        })
      }, t
    }()
}, function(t, e, n) {
  "use strict";
  var i = n(251);
  n.d(e, "a", function() {
    return i.a
  });
  n(123)
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return g
  });
  var i = n(35),
    r = n(119),
    o = n(91),
    s = n(122),
    a = n(120),
    c = n(123),
    u = n(254),
    l = n(255),
    f = n(256),
    d = n(121),
    h = n(257),
    p = this && this.__extends || function() {
      var t = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {
        t.__proto__ = e
      } || function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      };
      return function(e, n) {
        function i() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
      }
    }(),
    v = {
      google: "goog-o",
      "news.google": "goog-news",
      "news.url.google": "goog-news",
      bing: "bing-o",
      "search.yahoo": "yaho-o",
      yahoo: "yaho-ref",
      facebook: "fb",
      "m.facebook": "fb",
      linkedin: "li",
      twitter: "twtr",
      "mobile.twitter": "twtr"
    },
    g = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.googletag = window.googletag = window.googletag || {
          cmd: []
        }, e.googleTagProxy = new s.a(e.googletag), e._config = c.a, e.initialized = !1, e.adSlots = new Map, e.adCounts = {}, e.bids = [], e.medianetService = new u.a, e.medianetVideoService = new l.a, e.amazonBiddingService = new a.a, e.criteoBiddingService = new d.a, e
      }
      return p(e, t), Object.defineProperty(e.prototype, "adUnitPath", {
        get: function() {
          return this._config.ad_unit_path
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.metConsentRequirement = function(t) {
        return !t || document.cookie.match(/notice_gdpr_prefs=/)
      }, e.prototype.bootstrap = function(t) {
        var e = this;
        if (t) {
          var n = function(i) {
            try {
              var r = JSON.parse(i.data);
              r && "preference_manager" === r.source && "submit_preferences" === r.message && setTimeout(function() {
                e.bootstrap(t), i.currentTarget.removeEventListener(i.type, n)
              })
            } catch (t) {}
          };
          if (!this.metConsentRequirement(t.isEurope)) return void window.addEventListener("message", n);
          this.apiReady = !0, t && (this.medianetService.init(t), t.mobile || this.criteoBiddingService.init());
          var i = t && this.getShoppingInsightsGroup(t.params || {});
          this.amazonBiddingService.init(i), Object(h.a)(), t && this.applyConfig(t), this.loadGoogletag(), this.setup(), o.a.mark("Service Bootstrap")
        }
      }, e.prototype.setup = function() {
        this.setEventListeners();
        var t = new CustomEvent("FbsAdsBootstrapped");
        document.dispatchEvent(t), this.enableAds()
      }, e.prototype.applyConfig = function(t) {
        var e = this,
          n = Object.assign({}, t),
          i = Object.assign({}, this._config);
        i.positions = Object.assign({}, i.positions, n.positions), i.ad_unit_path = n.ad_unit_path || this.adUnitPath, i.mobile = n.mobile || i.mobile, n.params = n.params || {}, n.params.src = this.getTargetingSource(), this._config = Object.assign({}, n, i), this.applyTargeting(n.params);
        var r = n.params,
          o = r.channel,
          s = void 0 === o ? [] : o,
          a = r.section,
          c = void 0 === a ? [] : a;
        this.medianetService.setChannelSection({
          channel: s,
          section: c
        }), this.fetchAmazonBids(t.amazonSlots).then(function(t) {
          e.bids = t
        })
      }, e.prototype.initMediaNetVideoBidding = function() {
        return this.medianetVideoService.init()
      }, e.prototype.fetchMediaNetVideoBids = function() {
        return this.medianetVideoService.fetchMediaNetBids()
      }, e.prototype.fetchAmazonBids = function(t) {
        return this.amazonBiddingService.fetchBids(t)
      }, e.prototype.fetchCriteoBids = function(t, e) {
        return this.criteoBiddingService.fetchBids(t, e)
      }, e.prototype.setCriteoTargeting = function() {
        var t = this;
        this.googleTagProxy.push(function() {
          t.criteoBiddingService.setTargeting()
        })
      }, e.prototype.enableAds = function() {
        var t = this;
        setTimeout(function() {
          t.googleTagProxy.pushFirst(function() {
            t._config.single_request && (t.googletag.pubads().enableSingleRequest(), t.googletag.pubads().disableInitialLoad()), t._config.safe_frame && t.googletag.pubads().setSafeFrameConfig({
              sandbox: !0
            }), t.googletag.pubads().enableAsyncRendering(), t.googletag.pubads().collapseEmptyDivs(), t.setRequestNonPersonalizedAds(), o.a.mark("Enable Services"), t.googletag.enableServices()
          }), t.googleTagProxy.enable()
        }, 100)
      }, e.prototype.createSlot = function(t, e, n) {
        var i = this,
          r = this.getPosition(t),
          s = (e || r.slot_id || "").replace(/-\d+$/, "");
        r.incremental && this.incrementAd(s);
        var a = this.adCounts[s];
        if (e = this.getDivId(r.slot_id, e), !this.adSlots.get(e)) {
          if (r.criteoZoneId) {
            var c = {
              placements: [{
                slotid: e,
                zoneid: r.criteoZoneId
              }]
            };
            this.fetchCriteoBids(c, d.b).then(function() {
              return i.setCriteoTargeting()
            })
          }
          this.googleTagProxy.push(function() {
            o.a.mark("Created " + e);
            var t;
            try {
              t = i.googletag.defineSlot(r.ad_unit_path || i.adUnitPath, r.sizes, e)
            } catch (t) {
              return
            }
            if (t) {
              i.adSlots.set(e, t.setTargeting("pos", r.slot_id).setTargeting("slotId", e).addService(i.googletag.pubads()));
              var s = Array.from(i.adSlots.keys()),
                c = new CustomEvent("fbs-ad-slots", {
                  detail: s
                });
              if (document.dispatchEvent(c), i.amazonBiddingService.setAmazonTargeting(t, i.bids), Object(h.b)(t), i.applyTargeting(r.params, i.adSlots.get(e)), r.incremental && i.adSlots.get(e).setTargeting(r.slot_id, a.toString()), "rec" === r.slot_id ? i.adSlots.get(e).setTargeting("recx", "0") : "mobilerec" === r.slot_id && i.adSlots.get(e).setTargeting("mobilex", "0"), n) {
                n.split(",").forEach(function(t) {
                  var n = t.split(":");
                  i.adSlots.get(e).setTargeting(n[0] || "", n[1] || "")
                })
              }
              i._config.single_request && (i.googletag.pubads().enableSingleRequest(), i.googletag.pubads().disableInitialLoad()), i.googletag.enableServices()
            }
          })
        }
      }, e.prototype.checkPerformance = function() {
        var t = [];
        return performance.getEntriesByType("mark").forEach(function(e) {
          t.push([e.name, e.startTime])
        }), console.table(t), t
      }, e.prototype.display = function(t) {
        var e = this;
        this.googleTagProxy.push(function() {
          setTimeout(function() {
            o.a.mark("Called " + t), e.googletag.display(t), e._config.single_request && e.refresh(t)
          })
        })
      }, e.prototype.displayBatch = function(t) {
        var e = this,
          n = t.map(function(t) {
            return e.adSlots.get(t)
          });
        this.googleTagProxy.push(function() {
          setTimeout(function() {
            e.googletag.pubads().refresh(n, {
              changeCorrelator: !1
            })
          })
        })
      }, e.prototype.refresh = function(t) {
        var e = this;
        return new Promise(function(n) {
          e.googleTagProxy.push(function() {
            var i = e.adSlots.get(t);
            n(e.googletag.pubads().refresh([i], {
              changeCorrelator: !1
            }))
          })
        })
      }, e.prototype.destroySlots = function(t) {
        var e = this,
          n = this.adSlots.get(t);
        this.adSlots.delete(t), this.googleTagProxy.push(function() {
          return e.googletag.destroySlots([n])
        })
      }, e.prototype.resetIncrements = function(t) {
        this.adCounts[t] = 0
      }, e.prototype.getPosition = function(t) {
        if (!this._config.positions[t]) {
          throw new Error("The position " + t + " was not defined in the config.\r\nPlease use another position or define it.")
        }
        return this._config.positions[t]
      }, e.prototype.getSite = function() {
        return this.adUnitPath.split("/")[2]
      }, e.prototype.getZone = function() {
        var t = this.adUnitPath.split("/");
        return t.splice(0, 3), t.join("/")
      }, e.prototype.isIncremental = function(t) {
        return this.getPosition(t).incremental
      }, e.prototype.getDivId = function(t, e) {
        var n = this.getPosition(t);
        return e = e || n.ad_id || n.slot_id, !this.isIncremental(t) || e.match(/-\d+$/) ? e : e + "-" + this.adCounts[e]
      }, e.prototype.getSlotId = function(t) {
        return this.getPosition(t).slot_id
      }, e.prototype.getSizes = function(t) {
        try {
          return this.getPosition(t).sizes
        } catch (t) {
          return console.error(t.stack), [
            [0, 0]
          ]
        }
      }, e.prototype.getMaxWidth = function(t) {
        var e = 0;
        return this.getSizes(t).forEach(function(t) {
          Array.isArray(t) && (e = t[0] > e ? t[0] : e)
        }), e
      }, e.prototype.getMaxHeight = function(t) {
        var e = 0;
        return this.getSizes(t).forEach(function(t) {
          Array.isArray(t) && (e = t[1] > e ? t[1] : e)
        }), e
      }, e.prototype.getMaxSize = function(t) {
        return [this.getMaxWidth(t), this.getMaxHeight(t)]
      }, e.prototype.getTargeting = function(t) {
        var e = this;
        return new Promise(function(n) {
          e.googleTagProxy.push(function() {
            n(e.googletag.pubads().getTargeting(t))
          })
        })
      }, e.prototype.getPageTargeting = function() {
        var t = this;
        return new Promise(function(e) {
          t.googleTagProxy.push(function() {
            var n = t.googletag.pubads().getTargetingKeys().reduce(function(e, n) {
              return e[n] = t.googletag.pubads().getTargeting(n), e
            }, {});
            e(n)
          })
        })
      }, e.prototype.resetAmazonSlots = function() {
        this.amazonBiddingService.resetAmazonSlots()
      }, e.prototype.incrementAd = function(t) {
        t && (this.adCounts[t] = this.adCounts[t] || 0, this.adCounts[t]++)
      }, e.prototype.setEventListeners = function() {
        this.listenToRender(), this.listenToViewable()
      }, e.prototype.listenToRender = function() {
        var t = this;
        this.googleTagProxy.push(function() {
          t.googletag.pubads().addEventListener("slotRenderEnded", function(t) {
            var e = new CustomEvent("fbs-ad-render", {
              detail: t
            });
            document.dispatchEvent(e)
          })
        }), window.aax = window.aax || {}, window.aax.cmd = window.aax.cmd || [], window.aax.cmd.push(function() {
          window.aax.addEventListener("slotRenderEnded", function(t) {
            t.dfpDetails.aax = !0;
            var e = t.dfpDetails.size;
            if (!Array.isArray(e)) {
              var n = e.split("x").map(Number);
              t.dfpDetails.size = n
            }
            var i = new CustomEvent("fbs-ad-render", {
              detail: t.dfpDetails
            });
            document.dispatchEvent(i)
          })
        })
      }, e.prototype.listenToViewable = function() {
        var t = this;
        this.googleTagProxy.push(function() {
          t.googletag.pubads().addEventListener("impressionViewable", function(t) {
            var e = new CustomEvent("fbs-ad-viewable", {
              detail: t
            });
            document.dispatchEvent(e)
          })
        })
      }, e.prototype.loadGoogletag = function() {
        Object(i.a)("//www.googletagservices.com/tag/js/gpt.js", function() {})
      }, e.prototype.applyTargeting = function(t, e) {
        var n = this;
        t && (t = this.setCustomParams(window, t), this.googleTagProxy.push(function() {
          e = e || n.googletag.pubads(), Object.keys(t).forEach(function(n) {
            var i = t[n];
            i = !Array.isArray(i) && null !== i && void 0 !== i && i.toString ? i.toString() : i, i ? e.setTargeting(n, i) : e.clearTargeting(n)
          })
        }))
      }, e.prototype.getTargetingSource = function() {
        if (this.originalSource) return this.originalSource;
        var t = window.trackingService,
          e = t ? t.getPreviousUrl() : document.referrer;
        if (!e) return "";
        var n = f.a.getDomain(e).replace("www.", "");
        return n = n.slice(0, n.lastIndexOf(".")), this.originalSource = v[n] || "", this.originalSource
      }, e.prototype.getChannelSection = function(t) {
        return Array.isArray(t) ? t[0] : (t || "").toString().split(",")[0]
      }, e.prototype.getShoppingInsightsGroup = function(t) {
        var e = t.specialslot,
          n = t.section,
          i = t.channel,
          r = t.displaychannel,
          o = t.displaysection,
          s = this.getChannelSection(n) || o,
          a = this.getChannelSection(i) || r;
        return e || s || a
      }, e.prototype.setCustomParams = function(t, e) {
        for (var n, i = t.location.search.substring(1).split("&"), r = 0; r < i.length; r++) {
          var o = decodeURIComponent(i[r] || "").split("=");
          o[0].indexOf("ad_target_override") > -1 && (n = (o[1] || "").split(","))
        }
        if (!n) return e;
        for (var r = 0; r < n.length; r++) {
          var s = n[r].split(":");
          s[0] && (e[s[0]] = s[1] || "")
        }
        return e
      }, e.prototype.setRequestNonPersonalizedAds = function() {
        var t = this;
        document.cookie.match(/notice_gdpr_prefs=0(?:,1)?:/) && this.googleTagProxy.push(function() {
          t.googletag.pubads().setRequestNonPersonalizedAds(1)
        })
      }, e
    }(r.a)
}, function(t, e, n) {
  "use strict";
  var i = function() {
    function t() {}
    return t.prototype.collapseEmptyDivs = function() {
      return !1
    }, t.prototype.enableAsyncRendering = function() {
      return !1
    }, t.prototype.enableSingleRequest = function() {}, t.prototype.disableInitialLoad = function() {}, t.prototype.clearTargeting = function(t) {}, t.prototype.refresh = function(t, e) {}, t.prototype.addEventListener = function(t, e) {}, t.prototype.setSafeFrameConfig = function(t) {}, t.prototype.setTargeting = function(t, e) {
      return this
    }, t.prototype.getTargeting = function(t) {
      return []
    }, t.prototype.getTargetingKeys = function() {
      return []
    }, t.prototype.setRequestNonPersonalizedAds = function(t) {}, t
  }();
  ! function() {
    function t() {
      this.apiReady = !1, this.pubadsReady = !1, this.cmd = [], this.dummyAd = {
        setTargeting: function(t, e) {
          return this
        },
        getTargeting: function(t) {
          return []
        },
        getTargetingKeys: function() {
          return []
        },
        clearTargeting: function(t) {
          return this
        },
        addService: function(t) {
          return this
        },
        getSlotElementId: function() {
          return ""
        }
      }
    }
    t.prototype.pubads = function() {
      return new i
    }, t.prototype.enableServices = function() {}, t.prototype.disableInitialLoad = function() {}, t.prototype.defineSlot = function(t, e, n) {
      return this.dummyAd
    }, t.prototype.display = function(t) {}, t.prototype.destroySlots = function(t) {
      return !1
    }
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t(t) {
      this.enabled = !1, this.queue = [], this.googletag = t
    }
    return t.prototype.push = function(t) {
      this.queue.push(t), this.enabled && this.flush()
    }, t.prototype.pushFirst = function(t) {
      this.queue.unshift(t), this.enabled && this.flush()
    }, t.prototype.flush = function() {
      for (; this.queue.length;) this.googletag.cmd.push(this.queue.shift())
    }, t.prototype.enable = function() {
      this.enabled = !0, this.flush()
    }, t.prototype.disable = function() {
      this.enabled = !1
    }, t
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return o
  });
  var i = n(35),
    r = this && this.__assign || Object.assign || function(t) {
      for (var e, n = 1, i = arguments.length; n < i; n++) {
        e = arguments[n];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
      }
      return t
    },
    o = function() {
      function t() {
        this.advBidxc = {
          setTargetingForAdUnitsGPTAsync: function() {},
          next: function() {}
        }, this.channel = "", this.section = ""
      }
      return Object.defineProperty(t.prototype, "isLoaded", {
        get: function() {
          return this.advBidxc.isLoaded
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.init = function(t) {
        var e = t.params,
          n = void 0 === e ? {} : e,
          i = n.channel,
          r = void 0 === i ? [] : i,
          o = n.section,
          s = void 0 === o ? [] : o;
        this.setChannelSection({
          channel: r,
          section: s
        }), this.loadMedianet(t.mobile)
      }, t.prototype.applyConfig = function(t) {
        t && (this.data = t || this.data, this.advBidxc.channel = t.channel || this.channel, this.advBidxc.section = t.section || this.section, this.advBidxc.version = 4.1, this.advBidxc.domain = window.location.hostname, window.advBidxc = r({}, window.advBidxc, this.advBidxc))
      }, t.prototype.prefetchBids = function() {
        this.advBidxc && this.advBidxc.next()
      }, t.prototype.loadMedianet = function(t) {
        var e = this;
        if ((window.forbes || {}).fastFetchMedianet) window.forbes.fastFetchMedianetCb(function() {
          e.advBidxc = r({}, window.advBidxc, e.advBidxc), e.applyConfig(e.advBidxc)
        });
        else {
          var n = t ? "8CUQ517Y2" : "8CUX956JU";
          Object(i.a)("https://contextual.media.net/bidexchange.js?cid=" + n + "&https=1", function() {
            e.advBidxc = r({}, window.advBidxc, e.advBidxc), e.applyConfig(e.advBidxc)
          })
        }
      }, t.prototype.setChannelSection = function(t) {
        var e = t.channel,
          n = t.section;
        this.channel = (e || []).join(","), this.section = (n || []).map(function(t) {
          return t.split(":")[1]
        }).join(","), this.advBidxc && (this.advBidxc.channel = this.channel, this.advBidxc.section = this.section), this.applyConfig({
          channel: this.channel,
          section: this.section
        })
      }, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return s
  });
  var i = n(35),
    r = this && this.__awaiter || function(t, e, n, i) {
      return new(n || (n = Promise))(function(r, o) {
        function s(t) {
          try {
            c(i.next(t))
          } catch (t) {
            o(t)
          }
        }

        function a(t) {
          try {
            c(i.throw(t))
          } catch (t) {
            o(t)
          }
        }

        function c(t) {
          t.done ? r(t.value) : new n(function(e) {
            e(t.value)
          }).then(s, a)
        }
        c((i = i.apply(t, e || [])).next())
      })
    },
    o = this && this.__generator || function(t, e) {
      function n(t) {
        return function(e) {
          return i([t, e])
        }
      }

      function i(n) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; c;) try {
          if (r = 1, o && (s = o[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(o, n[1])).done) return s;
          switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
              s = n;
              break;
            case 4:
              return c.label++, {
                value: n[1],
                done: !1
              };
            case 5:
              c.label++, o = n[1], n = [0];
              continue;
            case 7:
              n = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                c = 0;
                continue
              }
              if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                c.label = n[1];
                break
              }
              if (6 === n[0] && c.label < s[1]) {
                c.label = s[1], s = n;
                break
              }
              if (s && c.label < s[2]) {
                c.label = s[2], c.ops.push(n);
                break
              }
              s[2] && c.ops.pop(), c.trys.pop();
              continue
          }
          n = e.call(t, c)
        } catch (t) {
          n = [6, t], o = 0
        } finally {
          r = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
          value: n[0] ? n[1] : void 0,
          done: !0
        }
      }
      var r, o, s, a, c = {
        label: 0,
        sent: function() {
          if (1 & s[0]) throw s[1];
          return s[1]
        },
        trys: [],
        ops: []
      };
      return a = {
        next: n(0),
        throw: n(1),
        return: n(2)
      }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
      }), a
    },
    s = function() {
      function t() {}
      return t.prototype.init = function() {
        return r(this, void 0, void 0, function() {
          return o(this, function(t) {
            return this.mnHandleX = window._mNHandleX = window._mNHandleX || {}, this.mnHandleX.queue = this.mnHandleX.queue || [], this.mnX = window._mNX = window._mNX || {}, this.mnX.videoAdvBidxc = this.mnX.videoAdvBidxc || {}, this.mnX.crid = "545004763", window.medianetX_requrl = "https://forbes.com", [2, new Promise(function(t) {
              Object(i.a)("https://adservex.media.net/videoAds.js?cid=8CU2Y65FS&crid=545004763&https=1&dn=forbes.com", t)
            })]
          })
        })
      }, t.prototype.fetchMediaNetBids = function() {
        return r(this, void 0, void 0, function() {
          var t = this;
          return o(this, function(e) {
            return [2, new Promise(function(e, n) {
              t.mnHandleX.queue.push(function() {
                try {
                  t.mnX.videoAdvBidxc.setImaCallback(e)
                } catch (t) {
                  n(t)
                }
              })
            }).then(function() {
              return t.mnX.videoAdvBidxc.mnetDfpCallParamsConsumed = !0, t.mnX.videoAdvBidxc.mnetDfpCallParams || ""
            }).catch(function(t) {
              return console.error(t), ""
            })]
          })
        })
      }, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {}
    return t.getDomain = function(t) {
      return t ? t.replace(/http(s)?:\/\//, "").split("/")[0] : ""
    }, t
  }()
}, function(t, e, n) {
  "use strict";

  function i() {
    Object(o.a)("//z.moatads.com/forbesprebidheader122641196143/yi.js")
  }

  function r(t) {
    try {
      window.moatPrebidApi.setMoatTargetingForSlot(t)
    } catch (e) {
      console.error("Error targeting MOAT yield for slot", t.getSlotElementId())
    }
  }
  e.a = i, e.b = r;
  var o = n(35)
}, function(t, e, n) {
  "use strict";
  n(259)
}, function(t, e, n) {
  "use strict";
  ! function() {
    function t() {
      this.isLoaded = !1
    }
    t.prototype.setTargetingForAdUnitsGPTAsync = function() {}, t.prototype.next = function() {}
  }()
}, function(t, e, n) {
  "use strict";
  var i = n(261);
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  var i = (n(262), n(263));
  n.d(e, "a", function() {
    return i.a
  });
  n(125), n(124)
}, function(t, e, n) {
  "use strict";
  ! function() {
    function t() {}
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return c
  });
  var i = n(264),
    r = n(124),
    o = n(125),
    s = n(268),
    a = this && this.__assign || Object.assign || function(t) {
      for (var e, n = 1, i = arguments.length; n < i; n++) {
        e = arguments[n];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
      }
      return t
    },
    c = function() {
      function t() {
        this.gaPreviousUrl = null, this.previousUrl = null, this.previousPath = null, this.cookiesService = new i.a, this.googleAnalyticsService = new r.a, this.sharingHashService = new s.a, this.trackingCalls = [], this.isEurope = !1
      }
      return t.prototype.metConsentRequirement = function() {
        return !this.isEurope || document.cookie.match(/notice_gdpr_prefs=/)
      }, t.prototype.track = function(t, e) {
        var n = this;
        if (!this.metConsentRequirement()) {
          var i = function(r) {
            try {
              var o = JSON.parse(r.data);
              o && "preference_manager" === o.source && "submit_preferences" === o.message && setTimeout(function() {
                n.track(t, e), r.currentTarget.removeEventListener(r.type, i)
              })
            } catch (t) {}
          };
          return void window.addEventListener("message", i)
        }
        if (t) {
          e && (this.updatePreviousUrl(), this.sharingHashService.setHash());
          var r = this.sharingHashService.getParentHash() || "none",
            o = this.sharingHashService.getChildHash() || "none";
          t = a({}, t, {
            shareParent: r,
            shareChild: o,
            referrer: this.gaPreviousUrl,
            fastSu: t.fastSu ? t.fastSu + "#" + this.sharingHashService.getHash() : "",
            fastCi: this.getOrCreateClientId(),
            fastRe: t.fastRe || this.previousUrl,
            isEurope: this.isEurope.toString()
          }), this.googleAnalyticsService.track(t), this.trackingCalls.push(t)
        }
      }, t.prototype.getOrCreateClientId = function() {
        var t = this.cookiesService.get("client_id") || o.a.generateClientId(),
          e = new Date;
        return e.setFullYear(e.getFullYear() + 2), this.cookiesService.set("client_id", t, {
          expires: e
        }), t
      }, t.prototype.setEnvironment = function(t) {
        this.googleAnalyticsService.setEnvironment(t)
      }, t.prototype.getPreviousUrl = function() {
        return this.previousUrl || this.cookiesService.get("refURL") || document.referrer || ""
      }, t.prototype.getGAPreviousUrl = function() {
        return this.gaPreviousUrl || document.referrer || ""
      }, t.prototype.updatePreviousUrl = function() {
        this.previousPath && this.previousPath !== window.location.pathname ? (this.previousUrl = window.location.protocol + "//" + window.location.host + this.previousPath, this.gaPreviousUrl = window.location.protocol + "//" + window.location.host + this.previousPath) : (this.gaPreviousUrl = this.getGAPreviousUrl(), this.previousUrl = this.getPreviousUrl(), this.cookiesService.remove("refURL", {
          path: "/",
          domain: ".forbes.com"
        }), this.cookiesService.remove("toURL", {
          path: "/",
          domain: ".forbes.com"
        })), this.previousPath = window.location.pathname
      }, t
    }()
}, function(t, e, n) {
  "use strict";
  var i = n(265);
  n.d(e, "a", function() {
    return i.a
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return o
  });
  var i = n(266),
    r = (n.n(i), {
      path: "/",
      domain: ".forbes.com"
    }),
    o = function() {
      function t() {}
      return t.prototype.get = function(t) {
        return i.get(t)
      }, t.prototype.set = function(t, e, n) {
        n = this.getOptions(n), i.set(t, e, n)
      }, t.prototype.remove = function(t, e) {
        e = this.getOptions(e), i.remove(t, e)
      }, t.prototype.getOptions = function(t) {
        return Object.assign({}, r, t)
      }, t
    }()
}, function(t, e, n) {
  var i, r;
  ! function(o) {
    var s;
    if (i = o, void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = r), s = !0, t.exports = o(), s = !0, !s) {
      var a = window.Cookies,
        c = window.Cookies = o();
      c.noConflict = function() {
        return window.Cookies = a, c
      }
    }
  }(function() {
    function t() {
      for (var t = 0, e = {}; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) e[i] = n[i]
      }
      return e
    }

    function e(t) {
      return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }

    function n(i) {
      function r() {}

      function o(e, n, o) {
        if ("undefined" != typeof document) {
          o = t({
            path: "/"
          }, r.defaults, o), "number" == typeof o.expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
          try {
            var s = JSON.stringify(n);
            /^[\{\[]/.test(s) && (n = s)
          } catch (t) {}
          n = i.write ? i.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var a = "";
          for (var c in o) o[c] && (a += "; " + c, !0 !== o[c] && (a += "=" + o[c].split(";")[0]));
          return document.cookie = e + "=" + n + a
        }
      }

      function s(t, n) {
        if ("undefined" != typeof document) {
          for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
            var a = o[s].split("="),
              c = a.slice(1).join("=");
            n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
            try {
              var u = e(a[0]);
              if (c = (i.read || i)(c, u) || e(c), n) try {
                c = JSON.parse(c)
              } catch (t) {}
              if (r[u] = c, t === u) break
            } catch (t) {}
          }
          return t ? r[t] : r
        }
      }
      return r.set = o, r.get = function(t) {
        return s(t, !1)
      }, r.getJSON = function(t) {
        return s(t, !0)
      }, r.remove = function(e, n) {
        o(e, "", t(n, {
          expires: -1
        }))
      }, r.defaults = {}, r.withConverter = n, r
    }
    return n(function() {})
  })
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return o
  });
  var i = n(35),
    r = {
      prod: "GTM-NMQJM4",
      staging: "GTM-KRRS9R"
    },
    o = function() {
      function t() {
        this.initialized = !1, this.dataLayer = window.dataLayer = window.dataLayer || [], this.containerId = r.staging
      }
      return t.convertData = function(t) {
        t.eventLabel && (t["event label"] = t.eventLabel), t.eventCategory && (t["event category"] = t.eventCategory), t.eventAction && (t["event action"] = t.eventAction), t.eventValue && (t["event value"] = t.eventValue), delete t.eventLabel, delete t.eventCategory, delete t.eventAction, delete t.eventValue
      }, t.prototype.track = function(e) {
        e && (t.convertData(e), this.dataLayerPush(e), this.initialized || this.init())
      }, t.prototype.setEnvironment = function(t) {
        this.containerId = r[t]
      }, t.prototype.init = function() {
        this.initialized = !0, this.dataLayerPush({
          "gtm.start": (new Date).getTime(),
          event: "gtm.js"
        }), window.analyticsEvent = window.analyticsSocial = window.analyticsVPV = window.analyticsClearVPV = window.analyticsForm = function() {}, Object(i.a)("https://www.googletagmanager.com/gtm.js?id=" + this.containerId, function() {
          var t = new CustomEvent("fbs-gtm-init");
          window.dispatchEvent(t)
        })
      }, t.prototype.dataLayerPush = function(t) {
        this.dataLayer.push(t)
      }, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {
      this.hash = ""
    }
    return t.prototype.getParentHash = function() {
      return "2715e4857a0b" !== this.hash.slice(0, 12) ? this.hash.slice(0, 12) : ""
    }, t.prototype.getChildHash = function() {
      return this.hash.slice(12)
    }, t.prototype.getHash = function() {
      return this.hash
    }, t.prototype.setHash = function() {
      var t = this.harvestSharingHashTree(location.hash.slice(1));
      history.replaceState(history.state || null, "", "" + location.pathname + location.search + "#" + t.slice(12))
    }, t.prototype.harvestSharingHashTree = function(t) {
      var e;
      if (!t || 12 !== t.length && 24 !== t.length) {
        t = ("" + this.hash31("WhereDidYouComeFromWhereDidYouGo").toString(16) + this.hash31("SomethingSomethingCottonEyedJoe").toString(16)).slice(0, 12)
      } else t = t.slice(t.length - 12);
      return e = (2147483647 & (Math.floor(4096 * Math.random()) << 20 | 1048575 & +new Date)).toString(16), e += this.pad(this.hash31(location.protocol + "//" + location.host + location.pathname).toString(16), 4, "0"), e += this.pad(e, 4, "0"), e = this.pad(e, 12, "0").slice(0, 12), this.hash = t += e, t
    }, t.prototype.hash31 = function(t) {
      for (var e = 2147483647, n = t.length; n--;) e = (e << 5) - e + t.charCodeAt(n) & 2147483647;
      return e
    }, t.prototype.pad = function(t, e, n, i) {
      for (t = "" + t; t.length < e;) t = i ? t + n : n + t;
      return t
    }, t
  }()
}, function(t, e) {
  var n = {
      single_request: !0,
      positions: {
        top: {
          slot_id: "top",
          sizes: [
            [728, 90],
            [970, 66],
            [970, 250],
            [970, 90],
            [7, 1],
            [1, 1], "fluid"
          ],
          params: {
            hero: "true"
          }
        },
        topx: {
          slot_id: "topx",
          sizes: [
            [728, 90],
            [970, 66],
            [970, 250],
            [970, 90],
            [1, 1], "fluid"
          ],
          incremental: !0
        },
        rec: {
          slot_id: "rec",
          sizes: [
            [300, 250],
            [300, 600],
            [1, 1], "fluid"
          ]
        },
        recx: {
          slot_id: "recx",
          sizes: [
            [300, 250],
            [300, 600],
            [1, 1], "fluid"
          ],
          incremental: !0
        },
        moreon: {
          slot_id: "moreon",
          sizes: [
            [820, 236],
            [620, 529],
            [300, 250],
            [620, 236], "fluid"
          ],
          incremental: !0
        },
        "spon-logo": {
          slot_id: "spon-logo",
          sizes: [
            [120, 40],
            [300, 170],
            [300, 100],
            [1, 1]
          ]
        },
        bottom: {
          slot_id: "bottom",
          sizes: [
            [728, 90],
            [970, 250],
            [1, 1], "fluid"
          ]
        },
        "ntv-home": {
          slot_id: "ntv-home",
          sizes: [
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "QLWstPVbbpcwuyqK5ijhxZvL"
          }
        },
        "ntv-deskchannel": {
          slot_id: "ntv-deskchannel",
          sizes: [
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "e5tSBXbDmvyVwXbVB7dymzCc"
          },
          incremental: !0
        }
      },
      amazonSlots: [{
        slotID: "rec",
        sizes: [
          [300, 250]
        ]
      }, {
        slotID: "recx",
        sizes: [
          [300, 250]
        ]
      }, {
        slotID: "top",
        sizes: [
          [728, 90],
          [970, 250]
        ]
      }, {
        slotID: "topx",
        sizes: [
          [728, 90],
          [970, 250]
        ]
      }, {
        slotID: "bottom",
        sizes: [
          [728, 90],
          [970, 250]
        ]
      }]
    },
    i = {
      mobile: !0,
      safe_frame: !0,
      single_request: !0,
      positions: {
        artbottom: {
          slot_id: "artbottom",
          sizes: [
            [1, 1], "fluid"
          ]
        },
        inread: {
          slot_id: "inread",
          sizes: [
            [600, 575],
            [1, 1], "fluid"
          ]
        },
        "mob-logo": {
          slot_id: "mob-logo",
          sizes: [
            [300, 50],
            [300, 75],
            [1, 1], "fluid"
          ]
        },
        mobile: {
          slot_id: "mobile",
          sizes: [
            [300, 50],
            [320, 50],
            [7, 1],
            [1, 1], "fluid"
          ],
          params: {
            hero: "true"
          }
        },
        mobilerec: {
          slot_id: "mobilerec",
          sizes: [
            [300, 250],
            [300, 251],
            [300, 50],
            [320, 50],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "13b84c32"
          }
        },
        mobileint: {
          slot_id: "mobileint",
          sizes: [
            [320, 480],
            [300, 600],
            [300, 250],
            [300, 50],
            [320, 50],
            [1, 1], "fluid"
          ],
          incremental: !0
        },
        mobilex: {
          slot_id: "mobilex",
          sizes: [
            [300, 250],
            [300, 50],
            [320, 50],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "13b84c32"
          },
          incremental: !0
        },
        "ntv-article": {
          slot_id: "ntv-article",
          sizes: [
            [300, 250],
            [300, 50],
            [320, 50],
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "twzGG8q5aVPXGmiCccciYeT7"
          }
        },
        "ntv-contentm": {
          slot_id: "ntv-contentm",
          sizes: [
            [1, 1]
          ],
          params: {
            strnativekey: "6kez5JUH4RdqUg4xdkwSNADy"
          }
        },
        "ntv-mobhome": {
          slot_id: "ntv-mobhome",
          sizes: [
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "QLWstPVbbpcwuyqK5ijhxZvL"
          }
        },
        "ntv-mobchannel": {
          slot_id: "ntv-mobchannel",
          sizes: [
            [2, 3],
            [1, 1], "fluid"
          ],
          params: {
            strnativekey: "e5tSBXbDmvyVwXbVB7dymzCc"
          },
          incremental: !0
        },
        rec: {
          slot_id: "rec",
          sizes: [
            [300, 250],
            [300, 600],
            [1, 1], "fluid"
          ]
        },
        recx: {
          slot_id: "recx",
          sizes: [
            [300, 250],
            [300, 600],
            [1, 1], "fluid"
          ]
        },
        "spon-logo": {
          slot_id: "spon-logo",
          sizes: [
            [120, 40],
            [300, 170],
            [300, 100],
            [1, 1]
          ]
        },
        mobsearch: {
          slot_id: "mobsearch",
          sizes: [
            [300, 250],
            [1, 1], "fluid"
          ],
          incremental: !0
        }
      },
      amazonSlots: [{
        slotID: "mobileint",
        sizes: [
          [320, 50],
          [300, 50]
        ]
      }, {
        slotID: "mobile",
        sizes: [
          [320, 50]
        ]
      }, {
        slotID: "mobilerec",
        sizes: [
          [300, 250],
          [320, 50]
        ]
      }, {
        slotID: "mobilex",
        sizes: [
          [300, 250],
          [320, 50]
        ]
      }]
    };
  t.exports = {
    desktopAdConfig: n,
    mobileAdConfig: i
  }
}, function(t, e, n) {
  "use strict";

  function i() {
    return -1 !== document.cookie.indexOf("forbes_ab")
  }

  function r() {
    var t = document.createElement("div");
    return t.setAttribute("class", s.a), document.body.append(t), "none" === window.getComputedStyle(t).display
  }

  function o() {
    var t = void 0;
    return i() && (t = r() ? "on" : "off"), t
  }
  n.d(e, "a", function() {
    return o
  });
  var s = n(0)
}, function(t, e, n) {
  "use strict";

  function i() {
    var t = document.createElement("a");
    t.id = "borderTab";
    var e = document.createElement("div");
    e.id = "teconsent";
    var n = document.createElement("script");
    n.src = "//consent.truste.com/notice?domain=forbes.com&c=teconsent&behavior=expressed", e.appendChild(n), t.appendChild(e), document.body.appendChild(t)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(0);
  document.addEventListener("DOMContentLoaded", function() {
    if (r.p && -1 === document.cookie.indexOf("notice_gdpr_prefs=")) {
      i();
      var t = (window.forbes["simple-site"].tracking || {}).fastSu || "",
        e = document.createElement("img");
      e.width = 1, e.height = 1, e.alt = "", e.src = "https://www.google-analytics.com/collect?v=1&tid=UA-5883199-3&cid=0&t=event&ec=gdpr&ea=consent&aip=&dl=" + encodeURIComponent(t), document.body.appendChild(e)
    }
  })
}, function(t, e, n) {
  "use strict";

  function i(t) {
    return t && DataView.prototype.isPrototypeOf(t)
  }

  function r(t) {
    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
    return t.toLowerCase()
  }

  function o(t) {
    return "string" != typeof t && (t = String(t)), t
  }

  function s(t) {
    var e = {
      next: function() {
        var e = t.shift();
        return {
          done: void 0 === e,
          value: e
        }
      }
    };
    return E.iterable && (e[Symbol.iterator] = function() {
      return e
    }), e
  }

  function a(t) {
    this.map = {}, t instanceof a ? t.forEach(function(t, e) {
      this.append(e, t)
    }, this) : Array.isArray(t) ? t.forEach(function(t) {
      this.append(t[0], t[1])
    }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
      this.append(e, t[e])
    }, this)
  }

  function c(t) {
    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
    t.bodyUsed = !0
  }

  function u(t) {
    return new Promise(function(e, n) {
      t.onload = function() {
        e(t.result)
      }, t.onerror = function() {
        n(t.error)
      }
    })
  }

  function l(t) {
    var e = new FileReader,
      n = u(e);
    return e.readAsArrayBuffer(t), n
  }

  function f(t) {
    var e = new FileReader,
      n = u(e);
    return e.readAsText(t), n
  }

  function d(t) {
    for (var e = new Uint8Array(t), n = new Array(e.length), i = 0; i < e.length; i++) n[i] = String.fromCharCode(e[i]);
    return n.join("")
  }

  function h(t) {
    if (t.slice) return t.slice(0);
    var e = new Uint8Array(t.byteLength);
    return e.set(new Uint8Array(t)), e.buffer
  }

  function p() {
    return this.bodyUsed = !1, this._initBody = function(t) {
      this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : E.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : E.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : E.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : E.arrayBuffer && E.blob && i(t) ? (this._bodyArrayBuffer = h(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : E.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || _(t)) ? this._bodyArrayBuffer = h(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : E.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
    }, E.blob && (this.blob = function() {
      var t = c(this);
      if (t) return t;
      if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      if (this._bodyFormData) throw new Error("could not read FormData body as blob");
      return Promise.resolve(new Blob([this._bodyText]))
    }, this.arrayBuffer = function() {
      return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l)
    }), this.text = function() {
      var t = c(this);
      if (t) return t;
      if (this._bodyBlob) return f(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(d(this._bodyArrayBuffer));
      if (this._bodyFormData) throw new Error("could not read FormData body as text");
      return Promise.resolve(this._bodyText)
    }, E.formData && (this.formData = function() {
      return this.text().then(y)
    }), this.json = function() {
      return this.text().then(JSON.parse)
    }, this
  }

  function v(t) {
    var e = t.toUpperCase();
    return P.indexOf(e) > -1 ? e : t
  }

  function g(t, e) {
    e = e || {};
    var n = e.body;
    if (t instanceof g) {
      if (t.bodyUsed) throw new TypeError("Already read");
      this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new a(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
    } else this.url = String(t);
    if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new a(e.headers)), this.method = v(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(n)
  }

  function y(t) {
    var e = new FormData;
    return t.trim().split("&").forEach(function(t) {
      if (t) {
        var n = t.split("="),
          i = n.shift().replace(/\+/g, " "),
          r = n.join("=").replace(/\+/g, " ");
        e.append(decodeURIComponent(i), decodeURIComponent(r))
      }
    }), e
  }

  function m(t) {
    var e = new a;
    return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
      var n = t.split(":"),
        i = n.shift().trim();
      if (i) {
        var r = n.join(":").trim();
        e.append(i, r)
      }
    }), e
  }

  function b(t, e) {
    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new a(e.headers), this.url = e.url || "", this._initBody(t)
  }

  function w(t, e) {
    return new Promise(function(n, i) {
      function r() {
        s.abort()
      }
      var o = new g(t, e);
      if (o.signal && o.signal.aborted) return i(new A("Aborted", "AbortError"));
      var s = new XMLHttpRequest;
      s.onload = function() {
        var t = {
          status: s.status,
          statusText: s.statusText,
          headers: m(s.getAllResponseHeaders() || "")
        };
        t.url = "responseURL" in s ? s.responseURL : t.headers.get("X-Request-URL");
        var e = "response" in s ? s.response : s.responseText;
        n(new b(e, t))
      }, s.onerror = function() {
        i(new TypeError("Network request failed"))
      }, s.ontimeout = function() {
        i(new TypeError("Network request failed"))
      }, s.onabort = function() {
        i(new A("Aborted", "AbortError"))
      }, s.open(o.method, o.url, !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && E.blob && (s.responseType = "blob"), o.headers.forEach(function(t, e) {
        s.setRequestHeader(e, t)
      }), o.signal && (o.signal.addEventListener("abort", r), s.onreadystatechange = function() {
        4 === s.readyState && o.signal.removeEventListener("abort", r)
      }), s.send(void 0 === o._bodyInit ? null : o._bodyInit)
    })
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Headers = a, e.Request = g, e.Response = b, n.d(e, "DOMException", function() {
    return A
  }), e.fetch = w;
  var E = {
    searchParams: "URLSearchParams" in self,
    iterable: "Symbol" in self && "iterator" in Symbol,
    blob: "FileReader" in self && "Blob" in self && function() {
      try {
        return new Blob, !0
      } catch (t) {
        return !1
      }
    }(),
    formData: "FormData" in self,
    arrayBuffer: "ArrayBuffer" in self
  };
  if (E.arrayBuffer) var S = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
    _ = ArrayBuffer.isView || function(t) {
      return t && S.indexOf(Object.prototype.toString.call(t)) > -1
    };
  a.prototype.append = function(t, e) {
    t = r(t), e = o(e);
    var n = this.map[t];
    this.map[t] = n ? n + ", " + e : e
  }, a.prototype.delete = function(t) {
    delete this.map[r(t)]
  }, a.prototype.get = function(t) {
    return t = r(t), this.has(t) ? this.map[t] : null
  }, a.prototype.has = function(t) {
    return this.map.hasOwnProperty(r(t))
  }, a.prototype.set = function(t, e) {
    this.map[r(t)] = o(e)
  }, a.prototype.forEach = function(t, e) {
    for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
  }, a.prototype.keys = function() {
    var t = [];
    return this.forEach(function(e, n) {
      t.push(n)
    }), s(t)
  }, a.prototype.values = function() {
    var t = [];
    return this.forEach(function(e) {
      t.push(e)
    }), s(t)
  }, a.prototype.entries = function() {
    var t = [];
    return this.forEach(function(e, n) {
      t.push([n, e])
    }), s(t)
  }, E.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
  var P = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  g.prototype.clone = function() {
    return new g(this, {
      body: this._bodyInit
    })
  }, p.call(g.prototype), p.call(b.prototype), b.prototype.clone = function() {
    return new b(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new a(this.headers),
      url: this.url
    })
  }, b.error = function() {
    var t = new b(null, {
      status: 0,
      statusText: ""
    });
    return t.type = "error", t
  };
  var x = [301, 302, 303, 307, 308];
  b.redirect = function(t, e) {
    if (-1 === x.indexOf(e)) throw new RangeError("Invalid status code");
    return new b(null, {
      status: e,
      headers: {
        location: t
      }
    })
  };
  var A = self.DOMException;
  try {
    new A
  } catch (t) {
    A = function(t, e) {
      this.message = t, this.name = e;
      var n = Error(t);
      this.stack = n.stack
    }, A.prototype = Object.create(Error.prototype), A.prototype.constructor = A
  }
  w.polyfill = !0, self.fetch || (self.fetch = w, self.Headers = a, self.Request = g, self.Response = b)
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(0);
  document.addEventListener("DOMContentLoaded", function() {
    i.y.isE2E && (window.isE2EBootstrapped = !0)
  })
}]);
//# sourceMappingURL=common-6168c99b3728dab8d339.js.map