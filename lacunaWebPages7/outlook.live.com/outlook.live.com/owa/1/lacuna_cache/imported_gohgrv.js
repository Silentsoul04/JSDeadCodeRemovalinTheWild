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
var mscc;
! function(e) {
  function t(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    x[e] && x[e].forEach(function(e) {
      e.apply(null, t)
    })
  }

  function n(e, t) {
    x[e] ? x[e].push(t) : x[e] = [t]
  }

  function o(e) {
    if (e)
      for (var t = 0, n = document.cookie.split("; "); t < n.length; t++) {
        var o = n[t],
          a = o.indexOf("="),
          i = o.substring(0, a);
        if (i === e) return o.substring(i.length + 1)
      }
    return null
  }

  function a(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[556:1009]", functionData => eval(functionData))}

  function i(e, t) {
    return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
  }

  function c(e, t) {
    e.classList ? e.classList.add(t) : e.className += " " + t
  }

  function s(e, t) {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[1253:1405]", functionData => eval(functionData))}

  function r(e, t) {
    e.hasAttribute(t) && e.removeAttribute(t)
  }

  function u(e) {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[1495:1546]", functionData => eval(functionData))}

  function m() {
    return void 0 != A && i(A, _)
  }

  function d(e, t, n) {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[1626:1790]", functionData => eval(functionData))}

  function l(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function() {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[1903:1926]", functionData => eval(functionData))})
  }

  function f(e) {
    if (T && !O) {
      var t = new Image,
        n = A.getAttribute("data-site-name"),
        o = A.getAttribute("data-nver"),
        a = A.getAttribute("data-sver"),
        i = n ? "&s=" + n : "",
        c = o ? "&nv=" + o : "",
        s = a ? "&sv=" + a : "",
        r = e ? "&m=" + e : "";
      t.src = D + "?o=mscc" + i + r + c + s, O = !0
    }
  }

  function v() {
    r(A, M), c(A, _), t("show"), f("show")
  }

  function g() {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[2396:2424]", functionData => eval(functionData))}

  function h(e) {
    return Math.floor(e / 1e3)
  }

  function p(n) {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[2496:2643]", functionData => eval(functionData))}

  function b() {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[2660:2828]", functionData => eval(functionData))}

  function k() {
    return !!o(e.cookieName)
  }

  function C(e) {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[2897:3054]", functionData => eval(functionData))}

  function E(t) {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[3072:3234]", functionData => eval(functionData))}

  function N() {
    A = document.getElementById("msccBanner"), S = document.getElementById("msccLearnMore");
    var t = k();
    !A || t || m() || v(), A && t && m() && g(), t || (l(document.body, "mouseup", E), l(document.body, "keyup", E), l(document.body, "submit", p));
    var n = o(e.cookieName);
    n && parseInt(n) < L && l(window, "beforeunload", function() {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[3606:3644]", functionData => eval(functionData))})
  }

  function w() {
    var t = o(e.cookieName);
    t && parseInt(t) < 0 && (document.cookie = e.cookieName + "=0;expires=" + new Date(0).toUTCString() + ";path=/;", a(e.cookieName, "0", -1))
  }

  function y() {
    o(e.cookieName);
    w(), null != document.getElementById("msccBanner") || "complete" === document.readyState ? N() : document.addEventListener ? document.addEventListener("DOMContentLoaded", N) : document.attachEvent("onreadystatechange", function() {lacuna_lazy_load("lacuna_cache/imported_gohgrv.js[4118:4237]", functionData => eval(functionData))})
  }
  e.cookieName = "MSCC", e.version = "0.4.1";
  var D = "https://uhf.microsoft.com/_log",
    L = h(new Date("Sun, 01 Jan 2016 08:00:00 GMT").getTime());
  e.interactiveConsentEnabled = !0;
  var A, S, x = {},
    I = window.location.hostname,
    _ = "active",
    B = "data-mscc-ic",
    M = "style",
    T = !0,
    O = !1;
  e._emit = t, e.on = n, e._getCookie = o, e._setCookieOnRootDomain = a, e.isVisible = m, e.setConsent = p, e.getConsentData = b, e.hasConsent = k, e._clearNegativeCookie = w, e._init = y, y()
}(mscc || (mscc = {}));