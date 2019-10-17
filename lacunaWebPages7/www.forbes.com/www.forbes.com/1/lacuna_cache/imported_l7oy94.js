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
    } : function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[917:939]", functionData => eval(functionData))};
    return e.d(n, "a", n), n
  }, e.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "", e.oe = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1086:1121]", functionData => eval(functionData))}, e(e.s = 129)
}([function(t, e, n) {
  "use strict";

  function i() {
    var t = ((window.forbes || {})["simple-site"] || {}).tracking;
    return "404" === (t || {}).pageType && (t.fastSu = "https://www.forbes.com" + window.location.pathname), t
  }
  n.d(e, "y", function() {
    return o
  }), n.d(e, "a", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1444:1462]", functionData => eval(functionData))}), n.d(e, "b", function() {
    return a
  }), n.d(e, "c", function() {
    return u
  }), n.d(e, "d", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1576:1594]", functionData => eval(functionData))}), n.d(e, "e", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1620:1638]", functionData => eval(functionData))}), n.d(e, "f", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1664:1682]", functionData => eval(functionData))}), n.d(e, "g", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1708:1726]", functionData => eval(functionData))}), n.d(e, "h", function() {
    return p
  }), n.d(e, "i", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1796:1814]", functionData => eval(functionData))}), n.d(e, "j", function() {
    return g
  }), n.d(e, "m", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1884:1902]", functionData => eval(functionData))}), n.d(e, "n", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[1928:1946]", functionData => eval(functionData))}), n.d(e, "o", function() {
    return b
  }), n.d(e, "q", function() {
    return w
  }), n.d(e, "r", function() {
    return E
  }), n.d(e, "u", function() {
    return S
  }), n.d(e, "s", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[2148:2166]", functionData => eval(functionData))}), n.d(e, "t", function() {
    return P
  }), n.d(e, "v", function() {
    return x
  }), n.d(e, "w", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[2280:2298]", functionData => eval(functionData))}), n.d(e, "x", function() {
    return C
  }), n.d(e, "z", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[2368:2386]", functionData => eval(functionData))}), n.d(e, "A", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[2412:2430]", functionData => eval(functionData))}), n.d(e, "B", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[2456:2474]", functionData => eval(functionData))}), n.d(e, "C", function() {
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
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[4927:5003]", functionData => eval(functionData))}
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

  function i() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[5759:5805]", functionData => eval(functionData))}
  var r = n(245);
  n(91).a.mark("Loaded"), window.fbsads && window.fbsads.apiReady ? i() : document.addEventListener("FbsAdsBootstrapped", i)
}, function(t, e, n) {
  var i = n(45),
    r = Math.min;
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[6033:6087]", functionData => eval(functionData))}
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
    a = function(t, e, n, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[6308:6480]", functionData => eval(functionData))};
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
  e.f = n(24) ? Object.defineProperty : function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[6851:7068]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(34);
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[7135:7164]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  var i = n(13);
  t.exports = function(t, e) {
    return !!t && i(function() {
      e ? t.call(null, function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[7319:7321]", functionData => eval(functionData))}, 1) : t.call(null)
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
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[7604:7628]", functionData => eval(functionData))}
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
  } : function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[8275:8303]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(12),
    r = n(31),
    o = n(27),
    s = n(47)("src"),
    a = Function.toString,
    c = ("" + a).split("toString");
  n(16).inspectSource = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[8495:8521]", functionData => eval(functionData))}, (t.exports = function(t, e, n, a) {
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
        return function(n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[9091:9132]", functionData => eval(functionData))};
      case 2:
        return function(n, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[9178:9222]", functionData => eval(functionData))};
      case 3:
        return function(n, i, r) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[9271:9318]", functionData => eval(functionData))}
    }
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[9347:9389]", functionData => eval(functionData))}
  }
}, function(t, e) {
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[9440:9526]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";

  function i(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[9586:10097]", functionData => eval(functionData))}

  function r(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[10118:10645]", functionData => eval(functionData))}
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
  e.f = n(24) ? u : function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[10986:11121]", functionData => eval(functionData))}
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
    return function(e, a, p) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[11416:11891]", functionData => eval(functionData))}
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
  t.exports = Object.keys || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[12171:12195]", functionData => eval(functionData))}
}, function(t, e) {
  var n = Math.ceil,
    i = Math.floor;
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[12283:12338]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(47)("meta"),
    r = n(9),
    o = n(27),
    s = n(20).f,
    a = 0,
    c = Object.isExtensible || function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[12486:12509]", functionData => eval(functionData))},
    u = !n(13)(function() {
      return c(Object.preventExtensions({}))
    }),
    l = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[12612:12711]", functionData => eval(functionData))},
    f = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[12736:12956]", functionData => eval(functionData))},
    d = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[12981:13108]", functionData => eval(functionData))},
    h = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[13130:13193]", functionData => eval(functionData))},
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
    a = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[13591:13593]", functionData => eval(functionData))},
    c = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[13614:13916]", functionData => eval(functionData))};
  t.exports = Object.create || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[13964:14104]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(37);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[14218:14277]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(45),
    r = Math.max,
    o = Math.min;
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[14383:14439]", functionData => eval(functionData))}
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
  t.exports = Object.getPrototypeOf || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[14860:15027]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  var i = n(78)(!0);
  n(79)(String, "String", function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[15126:15168]", functionData => eval(functionData))}, function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[15181:15377]", functionData => eval(functionData))})
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
    t.editorsPick && (a.ep = t.editorsPick), t.coverStory && (a.coverstory = t.coverStory), t.bertieBadgeSlugs && (a.badges = t.bertieBadgeSlugs), t.negativeSentimentCompanies && (a.ns = t.negativeSentimentCompanies), (t.entitySegments || []).length > 0 && (a.es = t.entitySegments.join(","), a.essrc = t.entitySegments.map(function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[17773:17882]", functionData => eval(functionData))}).join(",")), t.sentimentCompanies && (a.co = t.sentimentCompanies), (a.specialslot || a.swimlane) && (a.channel = "", a.section = "", a.displaychannel = "", a.displaysection = "", a.swimlane && (a.specialslot = "")), t.brandVoice && (a.advoice = t.brandVoice), m = g({}, h.desktopAdConfig, {
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

  function u(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[18505:18741]", functionData => eval(functionData))}
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getSwimlane = i, e.updateAdParams = c, e.applyConfig = u;
  var l = (n(14), n(247)),
    f = n(1),
    d = (n.n(f), n(69)),
    h = n(269),
    p = (n.n(h), n(0)),
    v = n(270),
    g = Object.assign || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[19024:19220]", functionData => eval(functionData))};
  p.o && localStorage.setItem("apstagDebug", "true"), window.fbsads = window.fbsads || new l.a;
  var y = window.fbsads,
    m = void 0,
    b = void 0;
  c(), a(s()), y.bootstrap(s())
}, , , , , function(t, e, n) {
  var i = n(9);
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[19483:19831]", functionData => eval(functionData))}
}, function(t, e) {
  e.f = {}.propertyIsEnumerable
}, function(t, e) {
  e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
  "use strict";
  var i = n(66),
    r = {};
  r[n(11)("toStringTag")] = "z", r + "" != "[object z]" && n(32)(Object.prototype, "toString", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[20115:20158]", functionData => eval(functionData))}, !0)
}, function(t, e, n) {
  var i = n(37),
    r = n(11)("toStringTag"),
    o = "Arguments" == i(function() {
      return arguments
    }()),
    s = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[20328:20388]", functionData => eval(functionData))};
  t.exports = function(t) {
    var e, n, a;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
  }
}, function(t, e, n) {
  "use strict";
  var i = n(66),
    r = RegExp.prototype.exec;
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[20752:21102]", functionData => eval(functionData))}
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
      t.exec = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[21558:21607]", functionData => eval(functionData))};
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
        g = n(s, d, "" [t], function(t, e, n, i, r) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[22318:22552]", functionData => eval(functionData))}),
        y = g[0],
        m = g[1];
      i(String.prototype, t, y), r(RegExp.prototype, d, 2 == e ? function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[22671:22714]", functionData => eval(functionData))} : function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[22729:22769]", functionData => eval(functionData))})
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
  }), n.d(e, "getBvLeftRailHeadlineMobile", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[23035:23053]", functionData => eval(functionData))}), n.d(e, "virtualTrack", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[23090:23108]", functionData => eval(functionData))});
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
    d = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[27040:27070]", functionData => eval(functionData))};
  window.forbes["simple-site"].isPreview || a.track(f(), !0)
}, function(t, e, n) {
  var i = n(9),
    r = n(12).document,
    o = i(r) && i(r.createElement);
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[27258:27302]", functionData => eval(functionData))}
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
  e.f = Object.getOwnPropertyNames || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[28145:28169]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(9),
    r = n(8),
    o = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[28246:28339]", functionData => eval(functionData))};
  t.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[28430:28704]", functionData => eval(functionData))}({}, !1) : void 0),
    check: o
  }
}, function(t, e, n) {
  var i = n(37);
  t.exports = Array.isArray || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[28824:28856]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(45),
    r = n(34);
  t.exports = function(t) {
    return function(e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[28966:29293]", functionData => eval(functionData))}
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
    h = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[29548:29573]", functionData => eval(functionData))};
  t.exports = function(t, e, n, p, v, g, y) {
    c(n, e, p);
    var m, b, w, E = function(t) {
        if (!d && t in x) return x[t];
        switch (t) {
          case "keys":
          case "values":
            return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[29810:29861]", functionData => eval(functionData))}
        }
        return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[29898:29941]", functionData => eval(functionData))}
      },
      S = e + " Iterator",
      _ = "values" == v,
      P = !1,
      x = t.prototype,
      A = x[f] || x["@@iterator"] || v && x[v],
      C = A || E(v),
      O = v ? _ ? E("entries") : C : void 0,
      T = "Array" == e ? x.entries || A : A;
    if (T && (w = l(T.call(new t))) !== Object.prototype && w.next && (u(w, S, !0), i || "function" == typeof w[f] || s(w, f, h)), _ && A && "values" !== A.name && (P = !0, C = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[30387:30424]", functionData => eval(functionData))}), i && !y || !d && !P && x[f] || s(x, f, C), a[e] = C, a[S] = h, v)
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
  t.exports = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[30811:30913]", functionData => eval(functionData))}
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
  t.exports = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[31244:31289]", functionData => eval(functionData))}
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
  (a || c) && (s = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[31645:32017]", functionData => eval(functionData))}), t.exports = s
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
      get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[32779:32808]", functionData => eval(functionData))}
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
  t.exports = function(t, e, n, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[34068:34187]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(33),
    r = n(107),
    o = n(108),
    s = n(8),
    a = n(15),
    c = n(110),
    u = {},
    l = {},
    e = t.exports = function(t, e, n, f, d) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[34373:34859]", functionData => eval(functionData))};
  e.BREAK = u, e.RETURN = l
}, function(t, e, n) {
  var i = n(32);
  t.exports = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[34961:35018]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(9);
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[35087:35197]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return i
  });
  var i = function() {
    function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[35323:35325]", functionData => eval(functionData))}
    return t.mark = function(t) {
      window.performance && performance.mark && performance.mark("FbsAds_" + t.replace(" ", "_"))
    }, t
  }()
}, , , , , function(t, e, n) {
  t.exports = !n(24) && !n(13)(function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[35546:35668]", functionData => eval(functionData))})
}, function(t, e, n) {
  var i = n(20),
    r = n(8),
    o = n(44);
  t.exports = n(24) ? Object.defineProperties : function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[35802:35911]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(27),
    r = n(25),
    o = n(99)(!1),
    s = n(71)("IE_PROTO");
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[36042:36228]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(25),
    r = n(15),
    o = n(50);
  t.exports = function(t) {
    return function(e, n, s) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[36356:36648]", functionData => eval(functionData))}
  }
}, function(t, e) {
  t.exports = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[36705:37152]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  var i = n(48),
    r = n(43),
    o = n(52),
    s = {};
  n(31)(s, n(11)("iterator"), function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[37292:37313]", functionData => eval(functionData))}), t.exports = function(t, e, n) {
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
    a = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[37679:37771]", functionData => eval(functionData))};
  t.exports.f = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[37801:37870]", functionData => eval(functionData))}
}, function(t, e) {
  t.exports = Object.is || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[37933:38004]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(9),
    r = n(37),
    o = n(11)("match");
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[38109:38193]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(8),
    r = n(28),
    o = n(11)("species");
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[38303:38403]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(8);
  t.exports = function(t, e, n, r) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[38478:38626]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(55),
    r = n(11)("iterator"),
    o = Array.prototype;
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[38745:38807]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  var i = n(20),
    r = n(43);
  t.exports = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[38911:38959]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(66),
    r = n(11)("iterator"),
    o = n(55);
  t.exports = n(16).getIteratorMethod = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[39094:39162]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(28),
    r = n(21),
    o = n(49),
    s = n(15);
  t.exports = function(t, e, n, a, c) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[39286:39710]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  var i = n(56),
    r = n(113),
    o = n(55),
    s = n(25);
  t.exports = n(79)(Array, "Array", function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[39864:39914]", functionData => eval(functionData))}, function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[39927:40122]", functionData => eval(functionData))}, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e) {
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[40244:40300]", functionData => eval(functionData))}
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
    m = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[40568:40684]", functionData => eval(functionData))},
    b = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[40706:40734]", functionData => eval(functionData))};
  d && h || (d = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[40765:40946]", functionData => eval(functionData))}, h = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[40964:40985]", functionData => eval(functionData))}, "process" == n(37)(f) ? i = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[41027:41059]", functionData => eval(functionData))} : v && v.now ? i = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[41091:41118]", functionData => eval(functionData))} : p ? (r = new p, o = r.port2, r.port1.onmessage = b, i = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[41297:41333]", functionData => eval(functionData))}, l.addEventListener("message", b, !1)) : i = "onreadystatechange" in u("script") ? function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[41429:41542]", functionData => eval(functionData))} : function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[41557:41592]", functionData => eval(functionData))}), t.exports = {
    set: d,
    clear: h
  }
}, function(t, e, n) {
  "use strict";

  function i(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[41694:41906]", functionData => eval(functionData))}
  var r = n(28);
  t.exports.f = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[41952:41977]", functionData => eval(functionData))}
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
    g = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[42260:42391]", functionData => eval(functionData))};
  t.exports = {
    getConstructor: function(t, e, n, u) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[42450:43598]", functionData => eval(functionData))},
    def: function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[43627:43895]", functionData => eval(functionData))},
    getEntry: g,
    setStrong: function(t, e, n) {
      u(t, e, function(t, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[43978:44044]", functionData => eval(functionData))}, function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[44057:44284]", functionData => eval(functionData))}, n ? "entries" : "values", !n, !0), f(e)
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
      _ = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[44723:45263]", functionData => eval(functionData))};
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
      C || (b = e(function(e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[45718:45829]", functionData => eval(functionData))}), b.prototype = E, E.constructor = b), (A || O) && (_("delete"), _("has"), g && _("get")), (O || x) && _(w), y && E.clear && delete E.clear
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
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[46704:46746]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), t.prototype.init = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[46838:46909]", functionData => eval(functionData))}, t.prototype.fetchBids = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[46947:47188]", functionData => eval(functionData))}, t.prototype.resetAmazonSlots = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[47232:47234]", functionData => eval(functionData))}, t.prototype.initAmazon = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[47273:47564]", functionData => eval(functionData))}, t.prototype.amazonSetup = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[47603:48006]", functionData => eval(functionData))}, t.prototype.setAmazonTargeting = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[48056:48390]", functionData => eval(functionData))}, t.prototype.subscribeToRemoveTargeting = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[48444:48686]", functionData => eval(functionData))}, t
    }()
}, function(t, e, n) {
  "use strict";
  var i = n(249);
  n.d(e, "a", function() {
    return i.a
  }), n.d(e, "b", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[48826:48846]", functionData => eval(functionData))})
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
    function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[50148:50150]", functionData => eval(functionData))}
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
      var e = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[51372:51941]", functionData => eval(functionData))};
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
    s(function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[52367:52369]", functionData => eval(functionData))})
  }), "Reflect", {
    apply: function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[52419:52510]", functionData => eval(functionData))}
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
      function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[52727:52729]", functionData => eval(functionData))}
      return !(l(function() {}, [], t) instanceof t)
    }),
    d = !c(function() {
      l(function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[52834:52836]", functionData => eval(functionData))})
    });
  i(i.S + i.F * (f || d), "Reflect", {
    construct: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[52915:53598]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(28),
    r = n(9),
    o = n(100),
    s = [].slice,
    a = {},
    c = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[53746:53943]", functionData => eval(functionData))};
  t.exports = Function.bind || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[53988:54249]", functionData => eval(functionData))}
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
    defineProperty: function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[54515:54644]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(38).f,
    o = n(8);
  i(i.S, "Reflect", {
    deleteProperty: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[54777:54862]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(8),
    o = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[54957:55059]", functionData => eval(functionData))};
  n(101)(o, "Object", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[55094:55322]", functionData => eval(functionData))}), i(i.S, "Reflect", {
    enumerate: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[55372:55401]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  function i(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[55449:55666]", functionData => eval(functionData))}
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
    getOwnPropertyDescriptor: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[55929:55962]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(53),
    o = n(8);
  i(i.S, "Reflect", {
    getPrototypeOf: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[56090:56118]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(3);
  i(i.S, "Reflect", {
    has: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[56209:56236]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(8),
    o = Object.isExtensible;
  i(i.S, "Reflect", {
    isExtensible: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[56376:56413]", functionData => eval(functionData))}
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
  t.exports = s && s.ownKeys || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[56641:56718]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(3),
    r = n(8),
    o = Object.preventExtensions;
  i(i.S, "Reflect", {
    preventExtensions: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[56863:56969]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  function i(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[57020:57492]", functionData => eval(functionData))}
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
    setPrototypeOf: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[57766:57883]", functionData => eval(functionData))}
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
    }) ? function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[59095:59188]", functionData => eval(functionData))} : T,
    W = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[59214:59283]", functionData => eval(functionData))},
    G = U && "symbol" == typeof I.iterator ? function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[59342:59383]", functionData => eval(functionData))} : function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[59398:59433]", functionData => eval(functionData))},
    $ = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[59461:59718]", functionData => eval(functionData))},
    J = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[59743:59865]", functionData => eval(functionData))},
    K = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[59890:59943]", functionData => eval(functionData))},
    X = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[59965:60134]", functionData => eval(functionData))},
    Y = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[60159:60345]", functionData => eval(functionData))},
    Z = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[60367:60501]", functionData => eval(functionData))},
    Q = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[60523:60679]", functionData => eval(functionData))};
  U || (I = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[60704:61066]", functionData => eval(functionData))}, a(I.prototype, "toString", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[61106:61130]", functionData => eval(functionData))}), x.f = Y, A.f = $, n(75).f = P.f = Z, n(63).f = X, n(64).f = Q, o && !n(51) && a(z, "propertyIsEnumerable", X, !0), p.f = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[61266:61290]", functionData => eval(functionData))}), s(s.G + s.W + s.F * !U, {
    Symbol: I
  });
  for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) h(tt[et++]);
  for (var nt = C(h.store), it = 0; nt.length > it;) v(nt[it++]);
  s(s.S + s.F * !U, "Symbol", {
    for: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[61637:61692]", functionData => eval(functionData))},
    keyFor: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[61718:61840]", functionData => eval(functionData))},
    useSetter: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[61868:61888]", functionData => eval(functionData))},
    useSimple: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[61916:61936]", functionData => eval(functionData))}
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
    stringify: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[62321:62620]", functionData => eval(functionData))}
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
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[63114:63271]", functionData => eval(functionData))}
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
    return function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[63703:63734]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(21),
    r = n(53);
  n(26)("getPrototypeOf", function() {
    return function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[63857:63885]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(21),
    r = n(44);
  n(26)("keys", function() {
    return function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[63998:64026]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  n(26)("getOwnPropertyNames", function() {
    return n(103).f
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("freeze", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[64242:64286]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("seal", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[64408:64452]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(9),
    r = n(46).onFreeze;
  n(26)("preventExtensions", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[64587:64631]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isFrozen", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[64733:64774]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isSealed", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[64876:64917]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(9);
  n(26)("isExtensible", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[65023:65066]", functionData => eval(functionData))}
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
  }) ? function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[65580:65820]", functionData => eval(functionData))} : c
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
    fromCodePoint: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[66453:66748]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(3),
    r = n(25),
    o = n(15);
  i(i.S, "String", {
    raw: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[66865:67050]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(173)("trim", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[67148:67179]", functionData => eval(functionData))}
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
    d = f.trim = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[67626:67732]", functionData => eval(functionData))};
  t.exports = f
}, function(t, e) {
  t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(78)(!1);
  i(i.P, "String", {
    codePointAt: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[67957:67988]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(15),
    o = n(80),
    s = "".endsWith;
  i(i.P + i.F * n(81)("endsWith"), "String", {
    endsWith: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[68173:68440]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(80);
  i(i.P + i.F * n(81)("includes"), "String", {
    includes: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[68589:68692]", functionData => eval(functionData))}
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
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[68879:69097]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(15),
    o = n(80),
    s = "".startsWith;
  i(i.P + i.F * n(81)("startsWith"), "String", {
    startsWith: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[69283:69500]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("anchor", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[69600:69644]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("big", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[69740:69783]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("blink", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[69881:69926]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("bold", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[70023:70064]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fixed", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[70162:70204]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fontcolor", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[70307:70355]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("fontsize", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[70457:70504]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("italics", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[70604:70645]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("link", function(t) {
    return function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[70743:70787]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("small", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[70885:70930]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("strike", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[71029:71075]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("sub", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[71171:71214]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  n(17)("sup", function(t) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[71310:71353]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(8),
    r = n(15),
    o = n(82),
    s = n(67);
  n(68)("match", 1, function(t, e, n, a) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[71500:72093]", functionData => eval(functionData))})
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
  t.exports = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[72328:72509]", functionData => eval(functionData))}
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
    p = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[72782:72831]", functionData => eval(functionData))};
  n(68)("replace", 2, function(t, e, n, v) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[72876:74876]", functionData => eval(functionData))})
}, function(t, e, n) {
  "use strict";
  var i = n(8),
    r = n(104),
    o = n(67);
  n(68)("search", 1, function(t, e, n, s) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[75006:75472]", functionData => eval(functionData))})
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
  n(68)("split", 2, function(t, e, n, l) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[75792:77955]", functionData => eval(functionData))})
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
    from: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[78522:79087]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(109);
  i(i.S + i.F * n(13)(function() {
    function t() {}
    return !(Array.of.call(t) instanceof t)
  }), "Array", {
    of: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[79299:79466]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(25),
    o = [].join;
  i(i.P + i.F * (n(49) != Object || !n(22)(o)), "Array", {
    join: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[79640:79700]", functionData => eval(functionData))}
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
    slice: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[79936:80235]", functionData => eval(functionData))}
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
    sort: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[80522:80597]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(0),
    o = n(22)([].forEach, !0);
  i(i.P + i.F * !o, "Array", {
    forEach: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[80763:80808]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(209);
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[80884:80913]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(9),
    r = n(77),
    o = n(11)("species");
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[81020:81220]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(1);
  i(i.P + i.F * !n(22)([].map, !0), "Array", {
    map: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[81362:81407]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(2);
  i(i.P + i.F * !n(22)([].filter, !0), "Array", {
    filter: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[81560:81605]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(3);
  i(i.P + i.F * !n(22)([].some, !0), "Array", {
    some: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[81754:81799]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(4);
  i(i.P + i.F * !n(22)([].every, !0), "Array", {
    every: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[81950:81995]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(111);
  i(i.P + i.F * !n(22)([].reduce, !0), "Array", {
    reduce: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[82146:82213]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(111);
  i(i.P + i.F * !n(22)([].reduceRight, !0), "Array", {
    reduceRight: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[82374:82441]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(99)(!1),
    o = [].indexOf,
    s = !!o && 1 / [1].indexOf(1, -0) < 0;
  i(i.P + i.F * (s || !n(22)(o)), "Array", {
    indexOf: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[82654:82735]", functionData => eval(functionData))}
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
    lastIndexOf: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[82986:83282]", functionData => eval(functionData))}
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
  t.exports = [].copyWithin || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[83528:83885]", functionData => eval(functionData))}
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
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[84094:84305]", functionData => eval(functionData))}
}, function(t, e, n) {
  "use strict";
  var i = n(3),
    r = n(39)(5),
    o = !0;
  "find" in [] && Array(1).find(function() {
    o = !1
  }), i(i.P + i.F * o, "Array", {
    find: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[84503:84580]", functionData => eval(functionData))}
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
    findIndex: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[84817:84894]", functionData => eval(functionData))}
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
    k = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[85878:85961]", functionData => eval(functionData))},
    L = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[85986:86699]", functionData => eval(functionData))},
    B = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[86721:87157]", functionData => eval(functionData))},
    R = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[87179:87241]", functionData => eval(functionData))},
    M = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[87263:87457]", functionData => eval(functionData))},
    D = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[87479:87608]", functionData => eval(functionData))},
    F = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[87630:88203]", functionData => eval(functionData))};
  I || (C = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[88229:88381]", functionData => eval(functionData))}, i = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[88399:88511]", functionData => eval(functionData))}, i.prototype = n(89)(C.prototype, {
    then: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[88573:88809]", functionData => eval(functionData))},
    catch: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[88834:88875]", functionData => eval(functionData))}
  }), o = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[88897:88995]", functionData => eval(functionData))}, b.f = j = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[89019:89072]", functionData => eval(functionData))}), f(f.G + f.W + f.F * !I, {
    Promise: C
  }), n(52)(C, "Promise"), n(85)("Promise"), s = n(16).Promise, f(f.S + f.F * !I, "Promise", {
    reject: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[89235:89306]", functionData => eval(functionData))}
  }), f(f.S + f.F * (a || !I), "Promise", {
    resolve: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[89376:89429]", functionData => eval(functionData))}
  }), f(f.S + f.F * !(I && n(84)(function(t) {
    C.all(t).catch(T)
  })), "Promise", {
    all: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[89540:90007]", functionData => eval(functionData))},
    race: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[90031:90265]", functionData => eval(functionData))}
  })
}, function(t, e, n) {
  var i = n(12),
    r = n(114).set,
    o = i.MutationObserver || i.WebKitMutationObserver,
    s = i.process,
    a = i.Promise,
    c = "process" == n(37)(s);
  t.exports = function() {
    var t, e, n, u = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[90515:90759]", functionData => eval(functionData))};
    if (c) n = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[90787:90814]", functionData => eval(functionData))};
    else if (!o || i.navigator && i.navigator.standalone)
      if (a && a.resolve) {
        var l = a.resolve(void 0);
        n = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[90960:90991]", functionData => eval(functionData))}
      } else n = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[91020:91050]", functionData => eval(functionData))};
    else {
      var f = !0,
        d = document.createTextNode("");
      new o(u).observe(d, {
        characterData: !0
      }), n = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[91201:91234]", functionData => eval(functionData))}
    }
    return function(i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[91264:91382]", functionData => eval(functionData))}
  }
}, function(t, e) {
  t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[91433:91576]", functionData => eval(functionData))}
}, function(t, e, n) {
  var i = n(12),
    r = i.navigator;
  t.exports = r && r.userAgent || ""
}, function(t, e, n) {
  var i = n(8),
    r = n(9),
    o = n(115);
  t.exports = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[91773:91891]", functionData => eval(functionData))}
}, function(t, e, n) {
  n(65), n(54), n(86), n(232), t.exports = n(16).Map
}, function(t, e, n) {
  "use strict";
  var i = n(116),
    r = n(90);
  t.exports = n(117)("Map", function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[92080:92182]", functionData => eval(functionData))}, {
    get: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[92207:92281]", functionData => eval(functionData))},
    set: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[92307:92369]", functionData => eval(functionData))}
  }, i, !0)
}, function(t, e, n) {
  var i = n(9),
    r = n(76).set;
  t.exports = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[92472:92616]", functionData => eval(functionData))}
}, function(t, e, n) {
  n(65), n(54), n(86), n(235), t.exports = n(16).Set
}, function(t, e, n) {
  "use strict";
  var i = n(116),
    r = n(90);
  t.exports = n(117)("Set", function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[92805:92907]", functionData => eval(functionData))}, {
    add: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[92932:92998]", functionData => eval(functionData))}
  }, i)
}, function(t, e, n) {
  "use strict";
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[93176:93301]", functionData => eval(functionData))};
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
    if (!e() || (e().g = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[94422:94424]", functionData => eval(functionData))}, e().forcePolyfill)) {
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
      }, t.prototype.get = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[95837:95906]", functionData => eval(functionData))}, t.prototype.L = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[95936:96286]", functionData => eval(functionData))}, t.prototype.g = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[96315:96494]", functionData => eval(functionData))}, t.prototype.I = function(t) {
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
      }, t.prototype.u = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[98563:99000]", functionData => eval(functionData))}, t.prototype.H = function(t) {
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
      a.createElementNS = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[101656:101756]", functionData => eval(functionData))};
      var h = Element.prototype.attachShadow;
      h && Object.defineProperty(Element.prototype, "attachShadow", {
        value: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[101901:101962]", functionData => eval(functionData))}
      });
      var p = a.importNode;
      a.importNode = function(t, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[102037:102146]", functionData => eval(functionData))};
      var v = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function(t, e) {
        o(this, t, e, v)
      };
      var g = Element.prototype.removeAttribute;
      Element.prototype.removeAttribute = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[102387:102424]", functionData => eval(functionData))}, Object.defineProperty(window, "customElements", {
        value: new t,
        configurable: !0,
        enumerable: !0
      }), window.CustomElements = {
        takeRecords: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[102615:102653]", functionData => eval(functionData))}
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
          value: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[103949:104008]", functionData => eval(functionData))}
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
          value: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[104901:105211]", functionData => eval(functionData))}
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
      var n = t && t.__esModule ? function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[105862:105896]", functionData => eval(functionData))} : function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[105910:105936]", functionData => eval(functionData))};
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
        instanceof Array && function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[106329:106366]", functionData => eval(functionData))} || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[106385:106460]", functionData => eval(functionData))};
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
          get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[107318:107375]", functionData => eval(functionData))},
          set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[107404:107457]", functionData => eval(functionData))},
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "backgroundImage", {
          get: function() {
            return this.getAttribute("background-image")
          },
          set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[107705:107771]", functionData => eval(functionData))},
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "width", {
          get: function() {
            return parseInt(this.getAttribute("width")) || 960
          },
          set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[108015:108075]", functionData => eval(functionData))},
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(e.prototype, "alt", {
          get: function() {
            return this.getAttribute("alt")
          },
          set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[108298:108351]", functionData => eval(functionData))},
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
          document.addEventListener("scroll", n.i(i.a)(function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[109508:109576]", functionData => eval(functionData))}))
        }, e.prototype.shouldEnhanceImage = function() {
          return !this.enhanced && this.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop <= 2 * window.innerHeight + window.pageYOffset
        }, e.prototype.enhanceImage = function() {
          this.imgTag.src = this.highResSrc, this.imgTag.addEventListener("load", this.imageEnhancedEventListener), this.isGif && this.classList.add("initial-width")
        }, e.prototype.imageEnhanced = function() {
          this.backgroundImage ? this.style.backgroundImage = "url(" + this.highResSrc + ")" : this.imgTag.style.display = "block", this.classList.add("show-img"), this.enhanced = !0, this.imgTag.removeEventListener("load", this.imageEnhancedEventListener)
        }, e.prototype.handleImageError = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[110388:110428]", functionData => eval(functionData))}, e.prototype.init = function() {
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
      function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[111287:111289]", functionData => eval(functionData))}
      return t.httpsUrl = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[111328:111390]", functionData => eval(functionData))}, t.normalizeImageDomain = function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[111429:111576]", functionData => eval(functionData))}, t.adjustExistingThumborUrl = function(t, e) {
        var n = t.match(/[0-9]+x[0-9]+/)[0],
          i = parseInt(n.split("x")[0]) || 0,
          r = parseInt(n.split("x")[1]) || 0;
        return i *= e, r *= e, t.replace(n, i + "x" + r)
      }, t.prependThumbor = function(t, e, n) {
        if (void 0 === t && (t = ""), (t || "").indexOf("thumbor") > -1) return this.adjustExistingThumborUrl(t, n);
        if ((t || "").indexOf("gravatar") > -1) return t;
        var i = this.normalizeImageDomain(t);
        return this.isOnThumborWhitelist(i) ? "https://thumbor.forbes.com/thumbor/" + e * n + "x0/" + encodeURIComponent(i) : i
      }, t.isOnThumborWhitelist = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[112261:112374]", functionData => eval(functionData))}, t.thumborWhitelist = ["specials-images.forbes.com", "specials-images.forbesimg.com", "i.forbesimg.com", "b-i.forbesimg.com", "images.forbes.com", "blogs-images.forbes.com"], t
    }()
  }, function(t, e, n) {
    "use strict";

    function i(t) {
      var e, n, i = this;
      return function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[112674:113047]", functionData => eval(functionData))}
    }
    e.a = i
  }, function(t, e, n) {
    e = t.exports = n(6)(!1), e.push([t.i, "progressive-image {\n  position: relative;\n  display: block; }\n  progressive-image:before {\n    content: '';\n    display: block;\n    padding-bottom: 56.25%; }\n  progressive-image.show-img::before {\n    content: none; }\n  progressive-image.initial-width {\n    display: inline-block; }\n    progressive-image.initial-width img {\n      padding-right: 0.5rem;\n      width: initial; }\n  progressive-image img {\n    display: none;\n    width: 100%; }\n", ""])
  }, function(t, e) {
    function n(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[113645:113972]", functionData => eval(functionData))}

    function i(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[113992:114143]", functionData => eval(functionData))}
    t.exports = function(t) {
      var e = [];
      return e.toString = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[114229:114384]", functionData => eval(functionData))}, e.i = function(t, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[114407:114840]", functionData => eval(functionData))}, e
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

    function s(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[116376:116477]", functionData => eval(functionData))}

    function a(t) {
      var e = document.createElement("style");
      return t.attrs.type = "text/css", u(e, t.attrs), o(t, e), e
    }

    function c(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[116637:116784]", functionData => eval(functionData))}

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
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), i = h.bind(null, n, e), r = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[117323:117384]", functionData => eval(functionData))}) : (n = a(e), i = d.bind(null, n), r = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[117435:117457]", functionData => eval(functionData))});
      return i(t),
        function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[117499:117666]", functionData => eval(functionData))}
    }

    function f(t, e, n, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[117701:117978]", functionData => eval(functionData))}

    function d(t, e) {
      var n = e.css,
        i = e.media;
      if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }

    function h(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[118289:118735]", functionData => eval(functionData))}
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
        function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[119751:120197]", functionData => eval(functionData))}
    };
    var E = function() {
      var t = [];
      return function(e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[120276:120339]", functionData => eval(functionData))}
    }()
  }, function(t, e) {
    t.exports = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[120398:121175]", functionData => eval(functionData))}
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
      instanceof Array && function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[121708:121741]", functionData => eval(functionData))} || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[121760:121831]", functionData => eval(functionData))};
      return function(e, n) {
        function i() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
      }
    }(),
    s = this && this.__awaiter || function(t, e, n, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[122097:122603]", functionData => eval(functionData))},
    a = this && this.__generator || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[122656:124734]", functionData => eval(functionData))},
    c = function(t) {
      function e() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[124777:125195]", functionData => eval(functionData))}
      return o(e, t), Object.defineProperty(e, "observedAttributes", {
        get: function() {
          return ["video-id", "player-id", "autoplay", "report-autoplay", "rendition-selection", "key-value-string", "muted", "ad-unit-path", "ads-disabled"]
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "playing", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[125593:125779]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adPlaying", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[125914:126043]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "duration", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[126177:126291]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "pauseAd", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[126424:126527]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[126554:126648]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "videoId", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[126781:126839]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[126866:126925]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adsDisabled", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[127062:127173]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[127200:127302]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adUnitPath", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[127438:127524]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[127551:127614]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "playerId", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[127748:127807]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[127834:127894]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "autoplay", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[128028:128131]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[128158:128252]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "muted", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[128383:128480]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[128507:128595]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "secretAutoplay", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[128735:128852]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[128879:128987]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "renditionSelection", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[129131:129200]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[129227:129297]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "keyValueString", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[129437:129503]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[129530:129597]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "attrsSnapshot", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[129736:130174]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adPlayer", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[130308:130498]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), e.prototype.attributeChangedCallback = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[130616:130717]", functionData => eval(functionData))}, e.prototype.connectedCallback = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[130762:131924]", functionData => eval(functionData))}, e.prototype.disconnectedCallback = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[131972:132400]", functionData => eval(functionData))}, e.prototype.changeVideo = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[132440:132986]", functionData => eval(functionData))}, e.prototype.mute = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[133018:133114]", functionData => eval(functionData))}, e.prototype.play = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[133146:133246]", functionData => eval(functionData))}, e.prototype.pause = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[133279:133381]", functionData => eval(functionData))}, e.prototype.togglePlay = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[133419:133478]", functionData => eval(functionData))}, e.prototype.requestFullscreen = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[133523:133632]", functionData => eval(functionData))}, e.prototype.attachCustomSocialOptions = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[133685:133834]", functionData => eval(functionData))}, e.prototype.insertCloseButton = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[133879:134208]", functionData => eval(functionData))}, e.prototype.showCloseButton = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[134251:134448]", functionData => eval(functionData))}, e.prototype.hideAdCloseButton = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[134493:135012]", functionData => eval(functionData))}, e.prototype.insertVideoElement = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[135058:135734]", functionData => eval(functionData))}, e.prototype.getAdUnitPath = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[135775:135866]", functionData => eval(functionData))}, e.prototype.attachPlayEventListeners = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[135918:136193]", functionData => eval(functionData))}, e.prototype.attachAdsTiming = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[136236:136705]", functionData => eval(functionData))}, e.prototype.attachPlayEndedEventListener = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[136761:137057]", functionData => eval(functionData))}, e.prototype.attachAdsStartedEventListener = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[137114:137318]", functionData => eval(functionData))}, e.prototype.attachAdsEndedEventListener = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[137373:137548]", functionData => eval(functionData))}, e.prototype.attachPlayEventHandler = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[137598:138407]", functionData => eval(functionData))}, e.prototype.attachPauseEventHandler = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[138458:138772]", functionData => eval(functionData))}, e.prototype.attachAdLoadedHandler = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[138821:138954]", functionData => eval(functionData))}, e.prototype.attachAdsErrorEventHandler = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[139008:139138]", functionData => eval(functionData))}, e.prototype.subscribeForPause = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[139183:139279]", functionData => eval(functionData))}, e.prototype.handleVideoPlaying = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[139326:139419]", functionData => eval(functionData))}, e.prototype.handleWindowBlur = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[139463:139525]", functionData => eval(functionData))}, e.prototype.handleWindowFocus = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[139570:139632]", functionData => eval(functionData))}, e.prototype.handleWindowScroll = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[139678:139991]", functionData => eval(functionData))}, e.prototype.pauseToggleCheck = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[140035:140160]", functionData => eval(functionData))}, e.prototype.removeWindowFocusEvents = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[140211:140361]", functionData => eval(functionData))}, e.prototype.subscribeForHiddenPause = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[140412:140696]", functionData => eval(functionData))}, e.prototype.checkIsVideoInView = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[140742:140850]", functionData => eval(functionData))}, e.prototype.muteAd = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[140884:141086]", functionData => eval(functionData))}, e
    }(HTMLElement)
}, function(t, e, n) {
  "use strict";

  function i(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[141171:141604]", functionData => eval(functionData))}
  e.a = i
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return u
  });
  var i = n(35),
    r = n(244),
    o = this && this.__assign || Object.assign || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[141795:141997]", functionData => eval(functionData))},
    s = this && this.__awaiter || function(t, e, n, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[142054:142560]", functionData => eval(functionData))},
    a = this && this.__generator || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[142613:144691]", functionData => eval(functionData))},
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
      return t.prototype.generateId = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[145312:145375]", functionData => eval(functionData))}, t.prototype.init = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[145408:146306]", functionData => eval(functionData))}, t.prototype.waitforGdpr = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[146345:147026]", functionData => eval(functionData))}, t.prototype.requestMnetBids = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[147069:147440]", functionData => eval(functionData))}, t.prototype.loadMnet = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[147476:147724]", functionData => eval(functionData))}, t.prototype.notifyPlaying = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[147766:147938]", functionData => eval(functionData))}, t.prototype.simpleReachCall = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[147981:148287]", functionData => eval(functionData))}, t.prototype.loadVideojs = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[148327:149002]", functionData => eval(functionData))}, t.prototype.callSimpleReach = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[149049:149502]", functionData => eval(functionData))}, t.prototype.setSimpleReachEvents = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[149551:150262]", functionData => eval(functionData))}, t.prototype.loadScript = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[150301:150522]", functionData => eval(functionData))}, t.prototype.loadStyle = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[150560:150781]", functionData => eval(functionData))}, t.prototype.loadIma3 = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[150817:151270]", functionData => eval(functionData))}, t.prototype.setAdTargeting = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[151313:151914]", functionData => eval(functionData))}, t.prototype.getAdServerUrl = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[151957:153704]", functionData => eval(functionData))}, t.prototype.getPageTargeting = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[153748:154410]", functionData => eval(functionData))}, t.prototype.getVideoAdTargeting = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[154458:155011]", functionData => eval(functionData))}, t.prototype.parseChannelSection = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[155059:155151]", functionData => eval(functionData))}, t.prototype.initPlayer = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[155190:156134]", functionData => eval(functionData))}, t.prototype.getAmazonHeaderBidding = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[156185:156507]", functionData => eval(functionData))}, t.prototype.getMediaInformation = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[156555:156616]", functionData => eval(functionData))}, t.prototype.prepareVideo = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[156657:156957]", functionData => eval(functionData))}, t.prototype.handleVideoJsReady = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[157004:157811]", functionData => eval(functionData))}, t.prototype.processVideoThumbnail = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[157864:158278]", functionData => eval(functionData))}, t.prototype.handleCatalogVideo = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[158328:159045]", functionData => eval(functionData))}, t.prototype.selectRendition = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[159095:159552]", functionData => eval(functionData))}, t.prototype.dispose = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[159588:159693]", functionData => eval(functionData))}, t.prototype.setMediaSessionDetails = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[159744:160096]", functionData => eval(functionData))}, t.prototype.trackPlay = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[160134:160667]", functionData => eval(functionData))}, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[160743:160761]", functionData => eval(functionData))});
  var i = function() {
    function t(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[160805:161046]", functionData => eval(functionData))}
    return t
  }()
}, function(t, e, n) {
  "use strict";
  var i = n(246);
  n.d(e, "a", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[161148:161168]", functionData => eval(functionData))})
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[161234:161252]", functionData => eval(functionData))});
  var i = n(91),
    r = this && this.__extends || function() {
      var t = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[161431:161464]", functionData => eval(functionData))} || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[161483:161554]", functionData => eval(functionData))};
      return function(e, n) {
        function i() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
      }
    }(),
    o = function(t) {
      function e() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[161806:162026]", functionData => eval(functionData))}
      return r(e, t), Object.defineProperty(e, "observedAttributes", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[162122:162203]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "adId", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[162333:162388]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[162415:162471]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "position", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[162605:162663]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[162690:162749]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "customTargeting", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[162890:162956]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[162983:163050]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "progressive", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[163187:163296]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[163323:163423]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "batched", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[163556:163657]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[163684:163776]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "hideEmpty", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[163911:164018]", functionData => eval(functionData))},
        set: function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[164045:164143]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "empty", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[164274:164394]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(e.prototype, "attrsSnapshot", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[164533:164675]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), e.prototype.display = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[164769:164862]", functionData => eval(functionData))}, e.prototype.refresh = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[164897:164951]", functionData => eval(functionData))}, e.prototype.create = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[164985:165092]", functionData => eval(functionData))}, e.prototype.getTargeting = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[165133:165199]", functionData => eval(functionData))}, e.prototype.getSlotTargeting = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[165243:165418]", functionData => eval(functionData))}, e.prototype.handleRender = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[165459:165824]", functionData => eval(functionData))}, e.prototype.listenToRender = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[165866:165952]", functionData => eval(functionData))}, e.prototype.handleViewable = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[165995:166297]", functionData => eval(functionData))}, e.prototype.listenToViewable = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[166341:166431]", functionData => eval(functionData))}, e.prototype.insert = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[166465:166997]", functionData => eval(functionData))}, e.prototype.getDivId = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[167033:167108]", functionData => eval(functionData))}, e.prototype.hideHero = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[167144:167655]", functionData => eval(functionData))}, e.prototype.addAccessibilityAttributes = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[167709:168209]", functionData => eval(functionData))}, e.prototype.destroyAd = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[168246:168580]", functionData => eval(functionData))}, e.prototype.initializeAd = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[168620:168894]", functionData => eval(functionData))}, e.prototype.connectedCallback = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[168939:168976]", functionData => eval(functionData))}, e.prototype.disconnectedCallback = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[169024:169058]", functionData => eval(functionData))}, e
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
  n.d(e, "b", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[169341:169359]", functionData => eval(functionData))}), n.d(e, "a", function() {
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
      return t.prototype.init = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[169708:169750]", functionData => eval(functionData))}, t.prototype.setTargeting = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[169790:169845]", functionData => eval(functionData))}, t.prototype.fetchBids = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[169886:170263]", functionData => eval(functionData))}, t.prototype.stringifyLineItemRanges = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[170315:170438]", functionData => eval(functionData))}, t.prototype.loadCriteo = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[170476:170766]", functionData => eval(functionData))}, t
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
      instanceof Array && function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[171312:171345]", functionData => eval(functionData))} || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[171364:171435]", functionData => eval(functionData))};
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
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[172509:172563]", functionData => eval(functionData))},
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
              r && "preference_manager" === r.source && "submit_preferences" === r.message && setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[173033:173129]", functionData => eval(functionData))})
            } catch (t) {}
          };
          if (!this.metConsentRequirement(t.isEurope)) return void window.addEventListener("message", n);
          this.apiReady = !0, t && (this.medianetService.init(t), t.mobile || this.criteoBiddingService.init());
          var i = t && this.getShoppingInsightsGroup(t.params || {});
          this.amazonBiddingService.init(i), Object(h.a)(), t && this.applyConfig(t), this.loadGoogletag(), this.setup(), o.a.mark("Service Bootstrap")
        }
      }, e.prototype.setup = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[173662:173812]", functionData => eval(functionData))}, e.prototype.applyConfig = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[173852:174599]", functionData => eval(functionData))}, e.prototype.initMediaNetVideoBidding = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[174651:174708]", functionData => eval(functionData))}, e.prototype.fetchMediaNetVideoBids = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[174758:174828]", functionData => eval(functionData))}, e.prototype.fetchAmazonBids = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[174872:174935]", functionData => eval(functionData))}, e.prototype.fetchCriteoBids = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[174982:175048]", functionData => eval(functionData))}, e.prototype.setCriteoTargeting = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[175094:175230]", functionData => eval(functionData))}, e.prototype.enableAds = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[175267:175852]", functionData => eval(functionData))}, e.prototype.createSlot = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[175897:177828]", functionData => eval(functionData))}, e.prototype.checkPerformance = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[177872:178047]", functionData => eval(functionData))}, e.prototype.display = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[178083:178320]", functionData => eval(functionData))}, e.prototype.displayBatch = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[178361:178676]", functionData => eval(functionData))}, e.prototype.refresh = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[178712:178992]", functionData => eval(functionData))}, e.prototype.destroySlots = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[179033:179227]", functionData => eval(functionData))}, e.prototype.resetIncrements = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[179271:179309]", functionData => eval(functionData))}, e.prototype.getPosition = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[179349:179579]", functionData => eval(functionData))}, e.prototype.getSite = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[179614:179668]", functionData => eval(functionData))}, e.prototype.getZone = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[179703:179799]", functionData => eval(functionData))}, e.prototype.isIncremental = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[179841:179897]", functionData => eval(functionData))}, e.prototype.getDivId = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[179937:180105]", functionData => eval(functionData))}, e.prototype.getSlotId = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[180143:180195]", functionData => eval(functionData))}, e.prototype.getSizes = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[180232:180404]", functionData => eval(functionData))}, e.prototype.getMaxWidth = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[180444:180596]", functionData => eval(functionData))}, e.prototype.getMaxHeight = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[180637:180789]", functionData => eval(functionData))}, e.prototype.getMaxSize = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[180828:180896]", functionData => eval(functionData))}, e.prototype.getTargeting = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[180937:181130]", functionData => eval(functionData))}, e.prototype.getPageTargeting = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[181174:181504]", functionData => eval(functionData))}, e.prototype.resetAmazonSlots = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[181548:181610]", functionData => eval(functionData))}, e.prototype.incrementAd = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[181650:181735]", functionData => eval(functionData))}, e.prototype.setEventListeners = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[181780:181844]", functionData => eval(functionData))}, e.prototype.listenToRender = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[181886:182753]", functionData => eval(functionData))}, e.prototype.listenToViewable = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[182797:183117]", functionData => eval(functionData))}, e.prototype.loadGoogletag = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[183158:183247]", functionData => eval(functionData))}, e.prototype.applyTargeting = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[183293:183687]", functionData => eval(functionData))}, e.prototype.getTargetingSource = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[183733:184087]", functionData => eval(functionData))}, e.prototype.getChannelSection = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[184133:184218]", functionData => eval(functionData))}, e.prototype.getShoppingInsightsGroup = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[184271:184544]", functionData => eval(functionData))}, e.prototype.setCustomParams = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[184591:185023]", functionData => eval(functionData))}, e.prototype.setRequestNonPersonalizedAds = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185079:185286]", functionData => eval(functionData))}, e
    }(r.a)
}, function(t, e, n) {
  "use strict";
  var i = function() {
    function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185380:185382]", functionData => eval(functionData))}
    return t.prototype.collapseEmptyDivs = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185437:185460]", functionData => eval(functionData))}, t.prototype.enableAsyncRendering = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185508:185531]", functionData => eval(functionData))}, t.prototype.enableSingleRequest = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185578:185580]", functionData => eval(functionData))}, t.prototype.disableInitialLoad = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185626:185628]", functionData => eval(functionData))}, t.prototype.clearTargeting = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185671:185673]", functionData => eval(functionData))}, t.prototype.refresh = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185712:185714]", functionData => eval(functionData))}, t.prototype.addEventListener = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185762:185764]", functionData => eval(functionData))}, t.prototype.setSafeFrameConfig = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185811:185813]", functionData => eval(functionData))}, t.prototype.setTargeting = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185857:185882]", functionData => eval(functionData))}, t.prototype.getTargeting = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185923:185946]", functionData => eval(functionData))}, t.prototype.getTargetingKeys = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[185990:186013]", functionData => eval(functionData))}, t.prototype.setRequestNonPersonalizedAds = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[186070:186072]", functionData => eval(functionData))}, t
  }();
  ! function() {
    function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[186117:186629]", functionData => eval(functionData))}
    t.prototype.pubads = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[186666:186692]", functionData => eval(functionData))}, t.prototype.enableServices = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[186734:186736]", functionData => eval(functionData))}, t.prototype.disableInitialLoad = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[186782:186784]", functionData => eval(functionData))}, t.prototype.defineSlot = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[186829:186862]", functionData => eval(functionData))}, t.prototype.display = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[186898:186900]", functionData => eval(functionData))}, t.prototype.destroySlots = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[186941:186964]", functionData => eval(functionData))}
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
    return t.prototype.push = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[187208:187270]", functionData => eval(functionData))}, t.prototype.pushFirst = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[187308:187373]", functionData => eval(functionData))}, t.prototype.flush = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[187406:187490]", functionData => eval(functionData))}, t.prototype.enable = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[187524:187569]", functionData => eval(functionData))}, t.prototype.disable = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[187604:187635]", functionData => eval(functionData))}, t
  }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return o
  });
  var i = n(35),
    r = this && this.__assign || Object.assign || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[187809:188011]", functionData => eval(functionData))},
    o = function() {
      function t() {
        this.advBidxc = {
          setTargetingForAdUnitsGPTAsync: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[188134:188136]", functionData => eval(functionData))},
          next: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[188165:188167]", functionData => eval(functionData))}
        }, this.channel = "", this.section = ""
      }
      return Object.defineProperty(t.prototype, "isLoaded", {
        get: function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[188310:188361]", functionData => eval(functionData))},
        enumerable: !0,
        configurable: !0
      }), t.prototype.init = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[188453:188765]", functionData => eval(functionData))}, t.prototype.applyConfig = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[188805:189093]", functionData => eval(functionData))}, t.prototype.prefetchBids = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[189133:189188]", functionData => eval(functionData))}, t.prototype.loadMedianet = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[189229:189735]", functionData => eval(functionData))}, t.prototype.setChannelSection = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[189781:190174]", functionData => eval(functionData))}, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {
    return s
  });
  var i = n(35),
    r = this && this.__awaiter || function(t, e, n, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[190343:190849]", functionData => eval(functionData))},
    o = this && this.__generator || function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[190902:192980]", functionData => eval(functionData))},
    s = function() {
      function t() {}
      return t.prototype.init = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[193068:193668]", functionData => eval(functionData))}, t.prototype.fetchMediaNetBids = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[193713:194372]", functionData => eval(functionData))}, t
    }()
}, function(t, e, n) {
  "use strict";
  n.d(e, "a", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[194448:194466]", functionData => eval(functionData))});
  var i = function() {
    function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[194509:194511]", functionData => eval(functionData))}
    return t.getDomain = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[194549:194623]", functionData => eval(functionData))}, t
  }()
}, function(t, e, n) {
  "use strict";

  function i() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[194688:194765]", functionData => eval(functionData))}

  function r(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[194783:194957]", functionData => eval(functionData))}
  e.a = i, e.b = r;
  var o = n(35)
}, function(t, e, n) {
  "use strict";
  n(259)
}, function(t, e, n) {
  "use strict";
  ! function() {
    function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[195115:195147]", functionData => eval(functionData))}
    t.prototype.setTargetingForAdUnitsGPTAsync = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[195208:195210]", functionData => eval(functionData))}, t.prototype.next = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[195242:195244]", functionData => eval(functionData))}
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
    function t() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[195560:195562]", functionData => eval(functionData))}
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
    a = this && this.__assign || Object.assign || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[195782:195984]", functionData => eval(functionData))},
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
              o && "preference_manager" === o.source && "submit_preferences" === o.message && setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[196731:196826]", functionData => eval(functionData))})
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
      }, t.prototype.getPreviousUrl = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[198055:198160]", functionData => eval(functionData))}, t.prototype.getGAPreviousUrl = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[198204:198274]", functionData => eval(functionData))}, t.prototype.updatePreviousUrl = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[198319:198943]", functionData => eval(functionData))}, t
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
      }, t.prototype.remove = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[199485:199541]", functionData => eval(functionData))}, t.prototype.getOptions = function(t) {
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
      c.noConflict = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[199939:199985]", functionData => eval(functionData))}
    }
  }(function() {
    function t() {
      for (var t = 0, e = {}; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) e[i] = n[i]
      }
      return e
    }

    function e(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[200202:200272]", functionData => eval(functionData))}

    function n(i) {
      function r() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[200313:200315]", functionData => eval(functionData))}

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
      }, r.getJSON = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[201921:201954]", functionData => eval(functionData))}, r.remove = function(e, n) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[201982:202049]", functionData => eval(functionData))}, r.defaults = {}, r.withConverter = n, r
    }
    return n(function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[202121:202123]", functionData => eval(functionData))})
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
      return t.convertData = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[202514:202834]", functionData => eval(functionData))}, t.prototype.track = function(e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[202868:202965]", functionData => eval(functionData))}, t.prototype.setEnvironment = function(t) {
        this.containerId = r[t]
      }, t.prototype.init = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[203081:203548]", functionData => eval(functionData))}, t.prototype.dataLayerPush = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[203590:203630]", functionData => eval(functionData))}, t
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
    return t.prototype.getParentHash = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[203846:203938]", functionData => eval(functionData))}, t.prototype.getChildHash = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[203978:204018]", functionData => eval(functionData))}, t.prototype.getHash = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[204053:204083]", functionData => eval(functionData))}, t.prototype.setHash = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[204118:204308]", functionData => eval(functionData))}, t.prototype.harvestSharingHashTree = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[204359:204936]", functionData => eval(functionData))}, t.prototype.hash31 = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[204971:205093]", functionData => eval(functionData))}, t.prototype.pad = function(t, e, n, i) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[205134:205217]", functionData => eval(functionData))}, t
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

  function r() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[211697:211857]", functionData => eval(functionData))}

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

  function i(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[213022:213079]", functionData => eval(functionData))}

  function r(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[213097:213278]", functionData => eval(functionData))}

  function o(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[213296:213355]", functionData => eval(functionData))}

  function s(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[213373:213620]", functionData => eval(functionData))}

  function a(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[213638:213930]", functionData => eval(functionData))}

  function c(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[213948:214047]", functionData => eval(functionData))}

  function u(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[214065:214228]", functionData => eval(functionData))}

  function l(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[214246:214332]", functionData => eval(functionData))}

  function f(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[214350:214429]", functionData => eval(functionData))}

  function d(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[214447:214595]", functionData => eval(functionData))}

  function h(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[214613:214742]", functionData => eval(functionData))}

  function p() {
    return this.bodyUsed = !1, this._initBody = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[214821:215810]", functionData => eval(functionData))}, E.blob && (this.blob = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[215846:216201]", functionData => eval(functionData))}, this.arrayBuffer = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[216233:216349]", functionData => eval(functionData))}), this.text = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[216375:216695]", functionData => eval(functionData))}, E.formData && (this.formData = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[216739:216779]", functionData => eval(functionData))}), this.json = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[216805:216854]", functionData => eval(functionData))}, this
  }

  function v(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[216882:216953]", functionData => eval(functionData))}

  function g(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[216974:217812]", functionData => eval(functionData))}

  function y(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[217830:218132]", functionData => eval(functionData))}

  function m(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[218150:218403]", functionData => eval(functionData))}

  function b(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[218424:218708]", functionData => eval(functionData))}

  function w(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[218729:220073]", functionData => eval(functionData))}
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Headers = a, e.Request = g, e.Response = b, n.d(e, "DOMException", function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[220217:220235]", functionData => eval(functionData))}), e.fetch = w;
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
    _ = ArrayBuffer.isView || function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[220894:220969]", functionData => eval(functionData))};
  a.prototype.append = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221009:221102]", functionData => eval(functionData))}, a.prototype.delete = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221137:221168]", functionData => eval(functionData))}, a.prototype.get = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221200:221259]", functionData => eval(functionData))}, a.prototype.has = function(t) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221291:221337]", functionData => eval(functionData))}, a.prototype.set = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221372:221403]", functionData => eval(functionData))}, a.prototype.forEach = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221442:221537]", functionData => eval(functionData))}, a.prototype.keys = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221569:221660]", functionData => eval(functionData))}, a.prototype.values = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221694:221782]", functionData => eval(functionData))}, a.prototype.entries = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[221817:221913]", functionData => eval(functionData))}, E.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
  var P = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  g.prototype.clone = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[222079:222143]", functionData => eval(functionData))}, p.call(g.prototype), p.call(b.prototype), b.prototype.clone = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[222218:222383]", functionData => eval(functionData))}, b.error = function() {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[222406:222514]", functionData => eval(functionData))};
  var x = [301, 302, 303, 307, 308];
  b.redirect = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[222583:222756]", functionData => eval(functionData))};
  var A = self.DOMException;
  try {
    new A
  } catch (t) {
    A = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_l7oy94.js[222844:222941]", functionData => eval(functionData))}, A.prototype = Object.create(Error.prototype), A.prototype.constructor = A
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