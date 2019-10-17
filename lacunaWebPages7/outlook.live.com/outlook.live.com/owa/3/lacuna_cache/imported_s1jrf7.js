function _extends() {
  return (_extends = Object.assign || null).apply(this, arguments)
}

! function(t, e) {
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
    c = null,
    l = null,
    u = null;
  var d = function(t, e) {
      t && t(e)
    },
    f = null,
    _ = null,
    v = null,
    b = null,
    g = {
      IMG: null,
      IFRAME: null,
      VIDEO: null
    },
    m = function(t, e) {
      var n, o, r = e._settings,
        s = t.tagName,
        i = g[s];
      if (i) return i(t, r), f(e, 1), void(e._elements = (n = e._elements, o = t, n.filter(null)));
      ! function(t, e) {
        var n = a(t, e.data_src),
          o = a(t, e.data_bg);
        n && (t.style.backgroundImage = 'url("'.concat(n, '")')), o && (t.style.backgroundImage = o)
      }(t, r)
    },
    h = null,
    p = null,
    y = null,
    E = null,
    w = null,
    k = null,
    I = ["IMG", "IFRAME", "VIDEO"],
    L = function(t, e) {
      var n = e._observer;
      z(t, e), n && e._settings.auto_unobserve && n.unobserve(t)
    },
    x = null,
    A = null,
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
    destroy: null,
    load: null,
    loadAll: null
  }, t && function(t, e) {
    if (e)
      if (e.length)
        for (var n, o = 0; n = e[o]; o += 1) u(t, n);
      else u(t, e)
  }(N, window.lazyLoadOptions), N
});
//# sourceMappingURL=lazyload.min.js.map