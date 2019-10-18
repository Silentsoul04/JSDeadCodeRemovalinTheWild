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
    dealExtra: function(e) {
      var t = "mtr-",
        r = {};
      for (var n in e)
        if (e.hasOwnProperty(n)) {
          var a = 0 === n.indexOf(t) ? n : t + n;
          r[a] = e[n]
        } return r
    },
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
    m = function(e) {
      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    },
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
          expoType: function(e) {
            var t = !1,
              n = function a() {
                t || (t = !0, p.removeEventListener("scroll", a), setTimeout(function() {
                  t = !1, p.addEventListener("scroll", a)
                }, r.expotTimeout), e())
              };
            p.addEventListener("scroll", n)
          },
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
        value: function(e) {
          u["default"].extend(this, e)
        }
      }, {
        key: "start",
        value: function() {
          var e = this;
          e.url = e.url.split(/\?|#|;jsessionid=/)[0], e._ready ? (e._beforeApiReady(), e._apiDeclare(), e._afterApiReady()) : (e._apiPreDeclare(), e._trackerReady(function() {
            e._beforeApiReady(), e._apiDeclare(), e._apiReady(), e._afterApiReady()
          })), e.autoError && e._startAutoError(), e.autoClick && e._startAutoClick(), e.autoExpo && e._startAutoExpo()
        }
      }, {
        key: "_initListener",
        value: function() {
          var e = this;
          e.st = v(), p.addEventListener("DOMContentLoaded", function() {
            e.dr = v()
          }), f.addEventListener("load", function() {
            e.ol = v()
          })
        }
      }, {
        key: "_initBridgeReady",
        value: function() {}
      }, {
        key: "_startAutoExpo",
        value: function() {
          var e = this,
            t = e.expoSection[0],
            r = e.expoSection[1],
            n = e.expoObj,
            a = function() {
              for (var a = p.querySelectorAll("[data-expo]"), o = 0; o < a.length; o++) {
                var i = a[o],
                  u = i.getAttribute("data-expo");
                void 0 === n[u] && (n[u] = -1);
                var c = (0, s["default"])(i);
                if (c >= t && c <= r) {
                  for (var l = {}, d = 0; d < i.attributes.length; d++) {
                    var f = i.attributes[d];
                    /^data-mtr-/.test(f.name) && (l[f.name.replace("data-", "")] = m(f.value))
                  }
                  n[u] < t ? e.expo(u, "up", l) : n[u] > r && e.expo(u, "down", l)
                }
                n[u] = c
              }
            };
          a(), e.expoType(a)
        }
      }, {
        key: "_startAutoClick",
        value: function() {
          var e = this;
          p.addEventListener(e.eventType, function(t) {
            for (var r = t.target; r && "BODY" !== r.tagName;) {
              for (var n = void 0, a = {}, o = 0; o < r.attributes.length; o++) {
                var i = r.attributes[o];
                /^(data-)?seed$/.test(i.name) ? n = m(i.value) : /^(data-)?ucid$/.test(i.name) ? a.ucid = m(i.value) : /^data-mtr-/.test(i.name) && (a[i.name.replace("data-", "")] = m(i.value))
              }
              if (n) {
                e.click(n, a);
                break
              }
              r = r.parentElement
            }
          })
        }
      }, {
        key: "_startAutoError",
        value: function() {
          var e = this;
          f.addEventListener("error", function(t) {
            e.err("jsErr", {
              filename: t.filename,
              message: t.message,
              lineno: t.lineno,
              colno: t.colno
            })
          })
        }
      }, {
        key: "_trackerReady",
        value: function(e) {
          u["default"].onload(e)
        }
      }, {
        key: "_formatRemoteParam",
        value: function(e) {
          var t = this,
            r = {
              version: t.version,
              mBizScenario: t.bizScenario,
              mPageState: t.mPageState,
              mPlatformType: t.platformType,
              role_id: t.roleId || t.role_id,
              fullURL: t.fullURL
            };
          return t.bizType && (e.bizType = t.bizType), e.param4 ? u["default"].extend(e.param4, r) : e.param4 = r, e
        }
      }, {
        key: "_apiCache",
        value: function(e) {
          var t = this;
          t._ready ? e() : t._fnCacheList.push(e)
        }
      }, {
        key: "_apiPreDeclare",
        value: function() {
          for (var e = this, t = ["click", "calc", "log", "logPv", "err", "pushWindow", "expo", "step"], r = function(r) {
              var n = t[r];
              e[n] = function() {
                for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                e._apiCache(function() {
                  e[n].apply(e, r)
                })
              }
            }, n = 0; n < t.length; n++) r(n)
        }
      }, {
        key: "_mergeSeedId",
        value: function() {}
      }, {
        key: "_apiDeclare",
        value: function() {
          var e = this,
            t = f.encodeURIComponent;
          void 0 !== e.isMtracker && e._mergeSeedId(), u["default"].extend(e, {
            click: function(r, n) {
              var a = void 0,
                o = void 0;
              if (void 0 === e.isMtracker) {
                o = r.split(":"), a = {
                  seedId: e.cfg.clkSeedId,
                  param1: e.url,
                  param2: o[0]
                }, o[1] ? a.param4 = {
                  seedDesc: t(o[1])
                } : a.param4 = {};
                var i = u["default"].dealExtra(n);
                u["default"].extend(a.param4, i)
              } else a = {
                seedId: e.cfg.clkSeedId,
                param1: e.url,
                param2: r
              };
              e._remoteLog(a)
            },
            calc: function(r, n) {
              var a = void 0,
                o = void 0;
              void 0 === e.isMtracker ? (o = r.split(":"), a = {
                seedId: e.cfg.calcSeedId,
                param1: e.url,
                param2: o[0],
                param3: n
              }, o[1] && (a.param4 = {
                seedDesc: t(o[1])
              })) : a = {
                seedId: e.cfg.clkSeedId,
                param1: e.url,
                param2: r,
                param3: n
              }, e._remoteLog(a)
            },
            logPv: function(t, r) {
              var n = t;
              n || (n = {
                domReady: 0,
                onload: 0,
                bridgeReady: 0
              }), r && (n.isResume = 1), e._remoteLog({
                seedId: e.cfg.pageSeedId,
                param1: e.url,
                param2: "",
                param3: "",
                param4: n
              })
            },
            log: function(r) {
              e._remoteLog({
                seedId: e.cfg.syslogSeedId,
                param1: e.url,
                param2: t(JSON.stringify(r))
              })
            },
            err: function(r, n) {
              e._remoteLog({
                seedId: "MTRERR_" + e.appId + "_" + r,
                type: "error",
                param1: e.url,
                param2: t(JSON.stringify(n))
              })
            },
            expo: function(t, r, n) {
              var a = u["default"].dealExtra(n);
              e._remoteLog({
                seedId: e.cfg.expoSeedId,
                param1: e.url,
                param2: t,
                param3: r,
                param4: a || {}
              })
            },
            isExpo: function(t) {
              var r = e.expoObj,
                n = e.expoSection[0],
                a = e.expoSection[1],
                o = r[t];
              return o >= n && o <= a
            },
            pushWindow: function(t, r, n) {
              t.url = e.initURL(t.url, r, n), e._pushWindow(t)
            },
            step: function(t, r) {
              var n = {
                  aot: t
                },
                a = r || {};
              u["default"].extend(n, a), e._remoteLog({
                seedId: e.cfg.syslogSeedId,
                param1: e.url,
                param2: e.cfg.syslogSeedId,
                param4: n
              })
            }
          })
        }
      }, {
        key: "_afterApiReady",
        value: function() {
          var e = this,
            t = {
              domReady: e.dr - e.st,
              onload: e.ol - e.st
            };
          e.br && (t.bridgeReady = e.br - e.st);
          var r = f._to;
          void 0 !== r && void 0 !== r.fr && (t.firstRender = r.fr - e.st), e.logPv(t), e._resume(function() {
            e.logPv(null, !0)
          }), p.addEventListener("back", function() {
            e.click("back")
          }), p.addEventListener("optionMenu", function() {
            e.click("optionMenu")
          }), p.addEventListener("titleClick", function() {
            e.click("titleClick")
          })
        }
      }, {
        key: "_resume",
        value: function(e) {
          p.addEventListener("WV.Event.APP.Active", function(t) {
            "webview" === t.param.from && e()
          }), p.addEventListener("resume", e)
        }
      }, {
        key: "_pushWindow",
        value: function(e) {
          location.href = e.url
        }
      }, {
        key: "_beforeApiReady",
        value: function() {
          var e = this,
            t = f.AlipayJSBridge;
          void 0 === e.bizScenario && t && t.startupParams && t.startupParams.bizScenario && (e.bizScenario = t.startupParams.bizScenario), e.version || (f.cfg && f.cfg.version ? e.version = f.cfg.version : t && t.startupParams && t.startupParams.version && (e.version = t.startupParams.version)), !e.appId && t && t.startupParams && t.startupParams.appId && (e.appId = t.startupParams.appId)
        }
      }, {
        key: "_apiReady",
        value: function() {
          var e = this;
          e._ready = !0;
          for (var t = 0; t < e._fnCacheList.length; t++) e._fnCacheList[t]();
          e._fnCacheList = []
        }
      }, {
        key: "setPageState",
        value: function(e, t) {
          this.mPageState = e, t && l["default"].setHash({
            mPageState: e
          }), this.logPv()
        }
      }, {
        key: "initURL",
        value: function(e, t, r) {
          var n = e,
            a = t;
          if (void 0 === l["default"].query.bizScenario || /bizScenario=/.test(n) || (a = t || {}, a.bizScenario = a.bizScenario || l["default"].query.bizScenario), a) {
            var o = /\?/.test(n) ? "&" : "?",
              i = o + l["default"].stringify(a);
            /\#/.test(n) ? n = n.replace(/(.*)?\#(.*)?/, "$1" + i + "#$2") : n += i
          }
          return r && (n += "#" + l["default"].stringify(r)), n
        }
      }]), e
    }();
  t["default"] = _, e.exports = t["default"]
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function(e, t, r) {
    var n = void 0;
    return e < -t ? n = -1 : e < 0 ? n = e / t : e + t < r ? n = 0 : e < r ? n = (e + t - r) / t : e >= r && (n = 1), n
  }, e.exports = t["default"]
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
  t["default"] = function(e) {
    var t = e.getBoundingClientRect();
    return (0, o["default"])(t.top, t.height, c.clientHeight)
  }, e.exports = t["default"]
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
      refresh: function(e) {
        e = e || "refreshKey";
        var t = {};
        t[e] = Math.random(), console.log(t), u.setSearch(t)
      },
      reload: function() {
        a.reload()
      },
      query: {},
      setSearch: function(e) {
        a.search = o.stringify(i(u.search, e))
      },
      setHash: function(e) {
        u.hash = i(u.hash, e), i(u.query, e), a.hash = o.stringify(u.hash)
      },
      init: function() {
        return u.search = o.parse(a.search), u.hash = o.parse(a.hash), i(u.query, u.search), i(u.query, u.hash), u.query
      }
    };
  u.init(), e.exports = u
}, function(e, t) {
  "use strict";
  e.exports = function(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
      return "%" + e.charCodeAt(0).toString(16).toUpperCase()
    })
  }
}, function(e, t, r) {
  "use strict";
  var n = r(6);
  t.extract = function(e) {
    return e.split("?")[1] || ""
  }, t.parse = function(e) {
    return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function(e, t) {
      var r = t.replace(/\+/g, " ").split("="),
        n = r.shift(),
        a = r.length > 0 ? r.join("=") : void 0;
      return n = decodeURIComponent(n), a = void 0 === a ? null : decodeURIComponent(a), e.hasOwnProperty(n) ? Array.isArray(e[n]) ? e[n].push(a) : e[n] = [e[n], a] : e[n] = a, e
    }, {}) : {})
  }, t.stringify = function(e) {
    return e ? Object.keys(e).sort().map(function(t) {
      var r = e[t];
      return void 0 === r ? "" : null === r ? t : Array.isArray(r) ? r.slice().sort().map(function(e) {
        return n(t) + "=" + n(e)
      }).join("&") : n(t) + "=" + n(r)
    }).filter(function(e) {
      return e.length > 0
    }).join("&") : ""
  }
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
        return n.onload = function() {
          return c._sendAll()
        }, /\bcna=/.test(p.cookie) || (c._ing = !0, n.src = c.cnaServer), u
      }
      return i(t, e), u(t, [{
        key: "_sendAll",
        value: function() {
          var e = this,
            t = e._list,
            r = t.length;
          r > 0 ? e._send(t.splice(0, r), !0) : e._ing = !1
        }
      }, {
        key: "_send",
        value: function(e, t) {
          var r = this,
            n = f.encodeURIComponent;
          if (t || !r._ing) {
            r._ing = !0;
            var a = e.length ? e : [e];
            r.image.src = r.server + "?BIProfile=merge&d=" + n(JSON.stringify(a))
          } else r._list.push(e)
        }
      }, {
        key: "_remoteLog",
        value: function(e) {
          var t = this;
          t._formatRemoteParam(e);
          var r = void 0;
          r = e.param3 ? t.url + "?value=" + e.param3 + "&seed=" + e.param2 : t.url + "?seed=" + e.param2;
          var n = {
            page_type: e.seedId,
            ref: t.ref,
            seed: e.param2,
            value: e.param3,
            pg: r,
            r: Date.now()
          };
          s["default"].extend(n, e.param4), this._send(n)
        }
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
  var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
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
      function t(e) {
        a(this, t);
        var r = {
          eventType: "click"
        };
        return f["default"].extend(r, e), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r))
      }
      return i(t, e), c(t, [{
        key: "_initBridgeReady",
        value: function() {
          var e = this;
          e.doc.addEventListener("AlipayJSBridgeReady", function() {
            e.br = Date.now()
          })
        }
      }, {
        key: "_remoteLog",
        value: function(e) {
          p.AlipayJSBridge.call("remoteLog", this._formatRemoteParam(e))
        }
      }, {
        key: "_trackerReady",
        value: function(e) {
          f["default"].onload(function() {
            p.AlipayJSBridge ? e() : v.addEventListener("AlipayJSBridgeReady", e)
          })
        }
      }, {
        key: "_mergeSeedId",
        value: function() {
          var e = this,
            t = e.seedId,
            r = "",
            n = {
              pageSeedId: r,
              clkSeedId: r,
              expoSeedId: r,
              syslogSeedId: r
            },
            a = "undefined" == typeof t ? "undefined" : u(t);
          if ("String" === a) {
            if (t)
              for (var o in n) n.hasOwnProperty(o) && (n[o] = t)
          } else if ("Object" === a && t.clkSeedId)
            for (var i in n) n.hasOwnProperty(i) && (n[i] = t[i] || t.clkSeedId || r);
          e.cfg = n
        }
      }, {
        key: "_pushWindow",
        value: function(e) {
          p.AlipayJSBridge.call("pushWindow", e)
        }
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
    d = window,
    s = function(e) {
      function t() {
        return a(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return i(t, e), u(t, [{
        key: "_remoteLog",
        value: function(e) {
          this._formatRemoteParam(e), e.param3 && (e.param4 = e.param4 || {}, e.param4.param3 = e.param3);
          var t = {
            eventId: 64403,
            arg1: e.seedId,
            arg2: e.param1,
            arg3: e.param2,
            args: e.param4
          };
          return d.WindVane ? void d.WindVane.call("Base", "commitUTEvent", t) : void console.warn("\u672a\u68c0\u6d4b\u5230\u624b\u6dd8\u73af\u5883")
        }
      }, {
        key: "_pushWindow",
        value: function(e) {
          return d.WindVane ? void d.WindVane.call("Base", "openWindow", {
            url: e.url
          }) : void console.warn("\u672a\u68c0\u6d4b\u5230\u624b\u6dd8\u73af\u5883")
        }
      }]), t
    }(l["default"]);
  t["default"] = s, e.exports = t["default"]
}]);