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

  function a(e, t, n) {
    var a = new Date;
    a.setDate(a.getDate() + n);
    var i = I.split("."),
      c = i.pop();
    if ("localhost" == c) document.cookie = 0 === n ? e + "=" + t + ";path=/" : e + "=" + t + ";expires=" + a.toUTCString() + ";path=/";
    else
      for (; o(e) !== t && 0 !== i.length;) c = i.pop() + "." + c, document.cookie = 0 === n ? e + "=" + t + ";path=/;domain=." + c : e + "=" + t + ";expires=" + a.toUTCString() + ";path=/;domain=." + c
  }

  function i(e, t) {
    return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
  }

  function c(e, t) {
    e.classList ? e.classList.add(t) : e.className += " " + t
  }

  function s(e, t) {
    e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
  }

  function r(e, t) {
    e.hasAttribute(t) && e.removeAttribute(t)
  }

  function u(e) {
    return 13 === e.which || 13 === e.keyCode
  }

  function m() {
    return void 0 != A && i(A, _)
  }

  function d(e, t, n) {
    if (!e && !t) return !1;
    var o = e && e.target || t;
    return (!o || 0 !== C(o)) && (o && "A" === o.tagName ? o !== S : d(null, o.parentElement, n))
  }

  function l(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function() {
      n.call(e)
    })
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

  function g() {
    s(A, _), t("hide")
  }

  function h(e) {
    return Math.floor(e / 1e3)
  }

  function p(n) {
    void 0 === n && (n = !1);
    var o = e.hasConsent();
    A && g(), o || (a(e.cookieName, "" + h(Date.now()), n ? 0 : 390), t("consent"))
  }

  function b() {
    var t = {
      hasConsent: e.hasConsent(),
      consentDate: null
    };
    return t.hasConsent ? (t.consentDate = new Date(1e3 * +o(e.cookieName)), t) : t
  }

  function k() {
    return !!o(e.cookieName)
  }

  function C(e) {
    if (e && e.getAttribute) {
      var t = e.getAttribute(B);
      if ("false" === t) return 0;
      if ("true" === t) return 1
    }
    return -1
  }

  function E(t) {
    var n = C(t.target),
      o = t.button;
    e.interactiveConsentEnabled && 0 !== n && (u(t) || 0 === o || 1 === o) && (1 === n || d(t, null, I)) && p()
  }

  function N() {
    A = document.getElementById("msccBanner"), S = document.getElementById("msccLearnMore");
    var t = k();
    !A || t || m() || v(), A && t && m() && g(), t || (l(document.body, "mouseup", E), l(document.body, "keyup", E), l(document.body, "submit", p));
    var n = o(e.cookieName);
    n && parseInt(n) < L && l(window, "beforeunload", function() {
      a(e.cookieName, "0", -1)
    })
  }

  function w() {
    var t = o(e.cookieName);
    t && parseInt(t) < 0 && (document.cookie = e.cookieName + "=0;expires=" + new Date(0).toUTCString() + ";path=/;", a(e.cookieName, "0", -1))
  }

  function y() {
    o(e.cookieName);
    w(), null != document.getElementById("msccBanner") || "complete" === document.readyState ? N() : document.addEventListener ? document.addEventListener("DOMContentLoaded", N) : document.attachEvent("onreadystatechange", function() {
      "complete" === document.readyState && (N(), document.detachEvent("onreadystatechange", arguments.callee))
    })
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