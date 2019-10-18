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
! function(t, e, i) {
  "function" == typeof define ? define(i) : "undefined" != typeof module ? module.exports = i() : e[t] = i(e)
}("klass", this, function(t) {
  function e(t) {
    return o.call(i(t) ? t : function() {}, t, 1)
  }

  function i(t) {
    return typeof t === r
  }

  function n(t, e, i) {
    return function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[331:555]", functionData => eval(functionData))}
  }

  function s(t, e, s) {
    for (var o in e) e.hasOwnProperty(o) && (t[o] = i(e[o]) && i(s[u][o]) && l.test(e[o]) ? n(o, e[o], s) : e[o])
  }

  function o(t, e) {
    function n() {}

    function a() {
      this.initialize ? this.initialize.apply(this, arguments) : (e || h && r.apply(this, arguments), d.apply(this, arguments))
    }
    n[u] = this[u];
    var r = this,
      l = new n,
      h = i(t),
      d = h ? t : this,
      c = h ? {} : t;
    return a.methods = function(t) {
      return s(l, t, r), a[u] = l, this
    }, a.methods.call(a, c).prototype.constructor = a, a.extend = o, a[u].implement = a.statics = function(t, e) {
      return t = "string" == typeof t ? function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[1259:1315]", functionData => eval(functionData))}() : t, s(this, t, r), this
    }, a
  }
  t = t || this;
  var a = t.klass,
    r = "function",
    l = /.*/,
    u = "prototype";
  return e.noConflict = function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[1482:1516]", functionData => eval(functionData))}, e
}), StackExchange.topbar = function() {
  function t(t) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[1576:1652]", functionData => eval(functionData))}

  function e(t) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[1670:1800]", functionData => eval(functionData))}

  function i() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[1817:1877]", functionData => eval(functionData))}

  function n(e) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[1895:2163]", functionData => eval(functionData))}

  function s() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[2180:2527]", functionData => eval(functionData))}

  function o() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[2544:3104]", functionData => eval(functionData))}

  function a() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[3121:3602]", functionData => eval(functionData))}
  var r = klass({
      "name": "",
      "url": "",
      "cssClass": "",
      "button": null,
      "$dialog": null,
      "$loadingPlaceholder": null,
      "$preloadedDialog": null,
      "hasRead": !1
    }).statics({
      "$corral": $(".js-topbar-dialog-corral")
    }).methods({
      "isLoading": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[3921:3978]", functionData => eval(functionData))},
      "isLoaded": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[4009:4054]", functionData => eval(functionData))},
      "isVisible": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[4086:4198]", functionData => eval(functionData))},
      "toggle": function(t, e) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[4231:4743]", functionData => eval(functionData))},
      "showOrHide": function(t) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[4777:4911]", functionData => eval(functionData))},
      "loadChildContent": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[4950:5405]", functionData => eval(functionData))},
      "loadDialog": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[5438:6312]", functionData => eval(functionData))},
      "afterLoad": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[6344:6346]", functionData => eval(functionData))},
      "getLoadingPlaceholder": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[6390:6660]", functionData => eval(functionData))},
      "positionDialogUnderButton": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[6708:7210]", functionData => eval(functionData))},
      "fetchUrl": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[7241:7420]", functionData => eval(functionData))},
      "markAsRead": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[7453:7576]", functionData => eval(functionData))},
      "handleRealtimeMessage": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[7620:7662]", functionData => eval(functionData))},
      "clearLoadedDialog": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[7702:7802]", functionData => eval(functionData))}
    }),
    l = klass({
      "name": "",
      "selector": "",
      "dialog": null,
      "$button": null,
      "onClass": "",
      "unreadCountPrefix": "",
      "queuedUnreadCount": 0,
      "showsOnMouseOver": !1
    }).methods({
      "initialize": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[8071:8478]", functionData => eval(functionData))},
      "toggle": function(t, e) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[8511:8666]", functionData => eval(functionData))},
      "showOnMouseOver": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[8704:8944]", functionData => eval(functionData))},
      "isOn": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[8971:9031]", functionData => eval(functionData))},
      "markAsRead": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[9064:9253]", functionData => eval(functionData))},
      "dequeuePendingUnreadCount": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[9301:9451]", functionData => eval(functionData))},
      "setUnreadCount": function(t) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[9489:9888]", functionData => eval(functionData))},
      "addUnreadClass": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[9925:10023]", functionData => eval(functionData))},
      "handleRealtimeMessage": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[10067:10069]", functionData => eval(functionData))}
    }),
    u = r.extend({
      "url": "/topbar/site-switcher",
      "cssClass": "siteSwitcher-dialog",
      "$searchItems": null
    }).methods({
      "afterLoad": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[10250:11186]", functionData => eval(functionData))},
      "doSearch": function(t, e) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[11221:11811]", functionData => eval(functionData))},
      "filterSites": function(t) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[11846:12069]", functionData => eval(functionData))}
    }),
    h = l.extend({
      "name": "SiteSwitcher",
      "selector": ".js-site-switcher-button",
      "dialog": new u,
      "showsOnMouseOver": !1,
      "onClass": "icon-site-switcher-on"
    }),
    d = r.extend({
      "url": "/topbar/inbox",
      "cssClass": "inbox-dialog"
    }),
    c = l.extend({
      "name": "Inbox",
      "selector": ".js-inbox-button",
      "dialog": new d,
      "showsOnMouseOver": !1
    }).methods({
      "handleRealtimeMessage": function(t) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[12557:12614]", functionData => eval(functionData))}
    }),
    g = r.extend({
      "url": "/topbar/achievements",
      "cssClass": "achievements-dialog"
    }).methods({
      "afterLoad": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[12766:12864]", functionData => eval(functionData))},
      "alignRep": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[12895:13150]", functionData => eval(functionData))},
      "bindDateGroupToggles": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[13193:13654]", functionData => eval(functionData))},
      "displayUtcTime": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[13691:14096]", functionData => eval(functionData))}
    }),
    f = l.extend({
      "name": "Achievements",
      "selector": ".js-achievements-button",
      "dialog": new g,
      "unreadCountPrefix": "+",
      "showsOnMouseOver": !0
    }).methods({
      "handleRealtimeMessage": function(t) {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[14343:14500]", functionData => eval(functionData))}
    }),
    p = [],
    m = [];
  return {
    "init": function() {lacuna_lazy_load("lacuna_cache/imported_pb7sqf.js[14567:15370]", functionData => eval(functionData))},
    "hideAll": i,
    "handleRealtimeMessage": n
  }
}();