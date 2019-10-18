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
function _extends() {
  return (_extends = Object.assign || function(t) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[72:256]", functionData => eval(functionData))}).apply(this, arguments)
}

function _typeof(t) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[304:577]", functionData => eval(functionData))}! function(t, e) {
  "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e()
}(this, function() {
  "use strict";
  var t = "undefined" != typeof window,
    e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
    n = t && "IntersectionObserver" in window,
    o = t && "classList" in document.createElement("p"),
    r = {
      elements_selector: "img",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_reveal: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null
    },
    a = function(t, e) {
      return t.getAttribute("data-" + e)
    },
    s = function(t, e, n) {
      var o = "data-" + e;
      null !== n ? t.setAttribute(o, n) : t.removeAttribute(o)
    },
    i = function(t) {
      return "true" === a(t, "was-processed")
    },
    c = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[1961:2003]", functionData => eval(functionData))},
    l = function(t) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[2025:2064]", functionData => eval(functionData))},
    u = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[2089:2449]", functionData => eval(functionData))};
  var d = function(t, e) {
      t && t(e)
    },
    f = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[2524:2643]", functionData => eval(functionData))},
    _ = function(t) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[2665:2784]", functionData => eval(functionData))},
    v = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[2812:2851]", functionData => eval(functionData))},
    b = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[2876:2991]", functionData => eval(functionData))},
    g = {
      IMG: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[3029:3181]", functionData => eval(functionData))},
      IFRAME: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[3212:3259]", functionData => eval(functionData))},
      VIDEO: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[3289:3425]", functionData => eval(functionData))}
    },
    m = function(t, e) {
      var n, o, r = e._settings,
        s = t.tagName,
        i = g[s];
      if (i) return i(t, r), f(e, 1), void(e._elements = (n = e._elements, o = t, n.filter(function(t) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[3635:3667]", functionData => eval(functionData))})));
      ! function(t, e) {
        var n = a(t, e.data_src),
          o = a(t, e.data_bg);
        n && (t.style.backgroundImage = 'url("'.concat(n, '")')), o && (t.style.backgroundImage = o)
      }(t, r)
    },
    h = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[3907:3989]", functionData => eval(functionData))},
    p = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[4017:4055]", functionData => eval(functionData))},
    y = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[4083:4124]", functionData => eval(functionData))},
    E = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[4152:4222]", functionData => eval(functionData))},
    w = function(t, e, n) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[4250:4645]", functionData => eval(functionData))},
    k = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[4670:4935]", functionData => eval(functionData))},
    I = ["IMG", "IFRAME", "VIDEO"],
    L = function(t, e) {
      var n = e._observer;
      z(t, e), n && e._settings.auto_unobserve && n.unobserve(t)
    },
    x = function(t) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[5117:5185]", functionData => eval(functionData))},
    A = function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[5210:5357]", functionData => eval(functionData))},
    z = function(t, e, n) {
      var o = e._settings;
      !n && i(t) || (I.indexOf(t.tagName) > -1 && (k(t, e), h(t, o.class_loading)), m(t, e), function(t) {
        s(t, "was-processed", "true")
      }(t), d(o.callback_reveal, t), d(o.callback_set, t))
    },
    O = function(t) {
      return !!n && (t._observer = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
          return function(t) {
            return t.isIntersecting || t.intersectionRatio > 0
          }(e) ? function(t, e) {
            var n = e._settings;
            d(n.callback_enter, t), n.load_delay ? A(t, e) : L(t, e)
          }(e.target, t) : function(t, e) {
            var n = e._settings;
            d(n.callback_exit, t), n.load_delay && x(t)
          }(e.target, t)
        })
      }, {
        root: (e = t._settings).container === document ? null : e.container,
        rootMargin: e.thresholds || e.threshold + "px"
      }), !0);
      var e
    },
    N = function(t, e) {
      this._settings = function(t) {
        return _extends({}, r, t)
      }(t), this._loadingCount = 0, O(this), this.update(e)
    };
  return N.prototype = {
    update: function(t) {
      var n = this,
        o = this._settings,
        r = t || o.container.querySelectorAll(o.elements_selector);
      this._elements = function(t) {
        return t.filter(function(t) {
          return !i(t)
        })
      }(Array.prototype.slice.call(r)), !e && this._observer ? this._elements.forEach(function(t) {
        n._observer.observe(t)
      }) : this.loadAll()
    },
    destroy: function() {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[6956:7157]", functionData => eval(functionData))},
    load: function(t, e) {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[7184:7211]", functionData => eval(functionData))},
    loadAll: function() {lacuna_lazy_load("lacuna_cache/imported_qz0t17.js[7237:7332]", functionData => eval(functionData))}
  }, t && function(t, e) {
    if (e)
      if (e.length)
        for (var n, o = 0; n = e[o]; o += 1) u(t, n);
      else u(t, e)
  }(N, window.lazyLoadOptions), N
});
//# sourceMappingURL=lazyload.min.js.map