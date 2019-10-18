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
! function(e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var a = r[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
  }
  var r = {};
  return t.m = e, t.c = r, t.p = "", t(0)
}([function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = r(9),
    o = n(a),
    i = r(10),
    u = n(i),
    c = r(8),
    l = n(c),
    d = r(11),
    s = n(d),
    f = window,
    p = (0, o["default"])(f.navigator.userAgent),
    v = void 0;
  f.Tracker || (v = /(AP|AF|BK)/.test(p.name) ? new u["default"] : /(TB|TM|JU)/.test(p.name) ? new s["default"] : new l["default"], f.Tracker = v), t["default"] = v, e.exports = t["default"]
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = window,
    n = r.document;
  t["default"] = {
    dealExtra: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[1040:1234]", functionData => eval(functionData))},
    extend: function(e, t) {
      for (var r in t) void 0 !== t[r] && (e[r] = t[r])
    },
    onload: function(e) {
      "complete" === n.readyState ? e() : r.addEventListener("load", e)
    }
  }, e.exports = t["default"]
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var o = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(),
    i = r(1),
    u = n(i),
    c = r(5),
    l = n(c),
    d = r(4),
    s = n(d),
    f = window,
    p = f.document,
    v = function() {
      return Date.now()
    },
    y = l["default"].query,
    m = function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[2378:2450]", functionData => eval(functionData))},
    _ = function() {
      function e(t) {
        a(this, e);
        var r = this;
        r._initListener(), u["default"].extend(r, {
          win: f,
          doc: p,
          Router: l["default"],
          expoObj: {},
          cfg: {
            pageSeedId: "H5_MTRACKER_AP_PAGE",
            clkSeedId: "H5_MTRACKER_AP_CLK",
            calcSeedId: "H5_MTRACKER_AP_CALC",
            expoSeedId: "H5_MTRACKER_AP_EXPO",
            syslogSeedId: "H5_MTRACKER_AP_SYSLOG"
          },
          mPageState: y.mPageState,
          platformType: "",
          bizScenario: y.bizScenario,
          autoStart: !0,
          autoError: !0,
          autoClick: !0,
          eventType: "touchstart",
          autoExpo: !1,
          bizType: "H5behavior",
          expotTimeout: 300,
          expoType: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[3276:3596]", functionData => eval(functionData))},
          expoSection: [-.3, .3],
          appId: "",
          url: p.URL,
          fullURL: p.URL,
          _ready: !1,
          _fnCacheList: []
        }), r._initBridgeReady(), u["default"].extend(r, t), f._to && u["default"].extend(r, f._to), r.autoStart && r.start()
      }
      return o(e, [{
        key: "config",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[3955:4005]", functionData => eval(functionData))}
      }, {
        key: "start",
        value: function() {
          var e = this;
          e.url = e.url.split(/\?|#|;jsessionid=/)[0], e._ready ? (e._beforeApiReady(), e._apiDeclare(), e._afterApiReady()) : (e._apiPreDeclare(), e._trackerReady(function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[4266:4363]", functionData => eval(functionData))})), e.autoError && e._startAutoError(), e.autoClick && e._startAutoClick(), e.autoExpo && e._startAutoExpo()
        }
      }, {
        key: "_initListener",
        value: function() {
          var e = this;
          e.st = v(), p.addEventListener("DOMContentLoaded", function() {
            e.dr = v()
          }), f.addEventListener("load", function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[4724:4760]", functionData => eval(functionData))})
        }
      }, {
        key: "_initBridgeReady",
        value: function() {}
      }, {
        key: "_startAutoExpo",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[4913:5797]", functionData => eval(functionData))}
      }, {
        key: "_startAutoClick",
        value: function() {
          var e = this;
          p.addEventListener(e.eventType, function(t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[5947:6498]", functionData => eval(functionData))})
        }
      }, {
        key: "_startAutoError",
        value: function() {
          var e = this;
          f.addEventListener("error", function(t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[6655:6843]", functionData => eval(functionData))})
        }
      }, {
        key: "_trackerReady",
        value: function(e) {
          u["default"].onload(e)
        }
      }, {
        key: "_formatRemoteParam",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[7041:7467]", functionData => eval(functionData))}
      }, {
        key: "_apiCache",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[7532:7617]", functionData => eval(functionData))}
      }, {
        key: "_apiPreDeclare",
        value: function() {
          for (var e = this, t = ["click", "calc", "log", "logPv", "err", "pushWindow", "expo", "step"], r = function(r) {
              var n = t[r];
              e[n] = function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[7871:8084]", functionData => eval(functionData))}
            }, n = 0; n < t.length; n++) r(n)
        }
      }, {
        key: "_mergeSeedId",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[8207:8209]", functionData => eval(functionData))}
      }, {
        key: "_apiDeclare",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[8275:11584]", functionData => eval(functionData))}
      }, {
        key: "_afterApiReady",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[11653:12290]", functionData => eval(functionData))}
      }, {
        key: "_resume",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[12353:12522]", functionData => eval(functionData))}
      }, {
        key: "_pushWindow",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[12589:12632]", functionData => eval(functionData))}
      }, {
        key: "_beforeApiReady",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[12702:13164]", functionData => eval(functionData))}
      }, {
        key: "_apiReady",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[13228:13397]", functionData => eval(functionData))}
      }, {
        key: "setPageState",
        value: function(e, t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[13468:13591]", functionData => eval(functionData))}
      }, {
        key: "initURL",
        value: function(e, t, r) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[13660:14136]", functionData => eval(functionData))}
      }]), e
    }();
  t["default"] = _, e.exports = t["default"]
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function(e, t, r) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[14336:14481]", functionData => eval(functionData))}, e.exports = t["default"]
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var a = r(3),
    o = n(a),
    i = window,
    u = i.document,
    c = u.documentElement;
  t["default"] = function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[14817:14923]", functionData => eval(functionData))}, e.exports = t["default"]
}, function(e, t, r) {
  var n = window,
    a = n.location,
    o = (n.encodeURIComponent, n.decodeURIComponent, r(7)),
    i = function(e, t) {
      for (var r in t) e[r] = t[r];
      return e
    },
    u = {
      parse: o.parse,
      stringify: o.stringify,
      refresh: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[15243:15364]", functionData => eval(functionData))},
      reload: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[15391:15419]", functionData => eval(functionData))},
      query: {},
      setSearch: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[15467:15523]", functionData => eval(functionData))},
      setHash: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[15552:15636]", functionData => eval(functionData))},
      init: function() {
        return u.search = o.parse(a.search), u.hash = o.parse(a.hash), i(u.query, u.search), i(u.query, u.hash), u.query
      }
    };
  u.init(), e.exports = u
}, function(e, t) {
  "use strict";
  e.exports = function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[15887:16028]", functionData => eval(functionData))}
}, function(e, t, r) {
  "use strict";
  var n = r(6);
  t.extract = function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[16110:16148]", functionData => eval(functionData))}, t.parse = function(e) {
    return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function(e, t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[16292:16598]", functionData => eval(functionData))}, {}) : {})
  }, t.stringify = function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[16641:16973]", functionData => eval(functionData))}
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var u = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(),
    c = r(2),
    l = n(c),
    d = r(1),
    s = n(d),
    f = window,
    p = f.document,
    v = function(e) {
      function t(e) {
        a(this, t);
        var r = e || {},
          n = new Image,
          i = {
            server: "https://kcart.alipay.com/web/bi.do",
            cnaServer: "https://log.mmstat.com/5.gif?url=https://kcart.alipay.com/web/1.do?",
            image: n,
            _ing: !1,
            _list: [],
            cfg: {
              pageSeedId: "page",
              clkSeedId: "clk",
              calcSeedId: "calc",
              expoSeedId: "expo",
              syslogSeedId: "syslog"
            },
            ref: p.referrer || "-"
          };
        s["default"].extend(i, r);
        var u = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i)),
          c = u;
        return n.onload = function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[19151:19192]", functionData => eval(functionData))}, /\bcna=/.test(p.cookie) || (c._ing = !0, n.src = c.cnaServer), u
      }
      return i(t, e), u(t, [{
        key: "_sendAll",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[19348:19494]", functionData => eval(functionData))}
      }, {
        key: "_send",
        value: function(e, t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[19558:19841]", functionData => eval(functionData))}
      }, {
        key: "_remoteLog",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[19907:20360]", functionData => eval(functionData))}
      }]), t
    }(l["default"]);
  t["default"] = v, e.exports = t["default"]
}, function(e, t) {
  var r = function(e) {
    var t = {},
      r = e.match(/AliApp\S+\b\)/gi);
    return t.is = !!/(T-UA)|(TBIOS)|(WindVane)|(AliApp)/i.test(e), t.name = r ? r[0].match(/\(\w+\-*\w*/)[0].split("(")[1] : "", t.version = r ? r[0].match(/(\d+\.*)+/gi)[0] : "", t
  };
  e.exports = r
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function a(e, t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[20885:20974]", functionData => eval(functionData))}

  function o(e, t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[20995:21171]", functionData => eval(functionData))}

  function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[21767:21796]", functionData => eval(functionData))} : function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[21811:21940]", functionData => eval(functionData))},
    c = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(),
    l = r(2),
    d = n(l),
    s = r(1),
    f = n(s),
    p = window,
    v = p.document,
    y = function(e) {
      function t(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[22450:22644]", functionData => eval(functionData))}
      return i(t, e), c(t, [{
        key: "_initBridgeReady",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[22734:22881]", functionData => eval(functionData))}
      }, {
        key: "_remoteLog",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[22947:23031]", functionData => eval(functionData))}
      }, {
        key: "_trackerReady",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[23100:23249]", functionData => eval(functionData))}
      }, {
        key: "_mergeSeedId",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[23316:23883]", functionData => eval(functionData))}
      }, {
        key: "_pushWindow",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[23950:24010]", functionData => eval(functionData))}
      }]), t
    }(d["default"]);
  t["default"] = y, e.exports = t["default"]
}, function(e, t, r) {
  "use strict";

  function n(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function a(e, t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[24234:24323]", functionData => eval(functionData))}

  function o(e, t) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[24344:24520]", functionData => eval(functionData))}

  function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = void 0;
  var u = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }(),
    c = r(2),
    l = n(c),
    d = window,
    s = function(e) {
      function t() {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[25487:25597]", functionData => eval(functionData))}
      return i(t, e), u(t, [{
        key: "_remoteLog",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[25682:26123]", functionData => eval(functionData))}
      }, {
        key: "_pushWindow",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_j7yhjr.js[26190:26384]", functionData => eval(functionData))}
      }]), t
    }(l["default"]);
  t["default"] = s, e.exports = t["default"]
}]);