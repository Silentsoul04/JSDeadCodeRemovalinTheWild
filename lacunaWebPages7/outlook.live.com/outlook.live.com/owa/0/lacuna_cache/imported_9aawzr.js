! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.vhCheck = t()
}(this, function() {
  "use strict";

  function e() {
    var e = document.createElement("div");
    e.style.cssText = "position: fixed; top: 0; bottom: 0;", document.documentElement.insertBefore(e, document.documentElement.firstChild);
    var t = document.createElement("div");
    t.style.cssText = "position: fixed; top: 0; height: 100vh", document.documentElement.insertBefore(t, document.documentElement.firstChild);
    var n = e.offsetHeight,
      o = t.offsetHeight - n;
    return document.documentElement.removeChild(e), document.documentElement.removeChild(t), o
  }

  function t(e, t) {
    document.documentElement.style.setProperty("--" + e, t + "px")
  }
  return function(n) {
    n = "string" == typeof n ? n : "vh-offset";
    var o = e();
    return !!o && (t(n, o), window.addEventListener("orientationchange", function() {
      var o = e();
      t(n, o)
    }, !1), !0)
  }
});