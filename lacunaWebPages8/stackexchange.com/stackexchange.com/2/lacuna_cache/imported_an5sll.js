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
    return function() {}
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
      return t = "string" == typeof t ? function() {}() : t, s(this, t, r), this
    }, a
  }
  t = t || this;
  var a = t.klass,
    r = "function",
    l = /.*/,
    u = "prototype";
  return e.noConflict = function() {}, e
}), StackExchange.topbar = function() {
  function t(t) {}

  function e(t) {}

  function i() {}

  function n(e) {}

  function s() {}

  function o() {}

  function a() {}
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
      "isLoading": function() {},
      "isLoaded": function() {},
      "isVisible": function() {},
      "toggle": function(t, e) {},
      "showOrHide": function(t) {},
      "loadChildContent": function() {},
      "loadDialog": function() {},
      "afterLoad": function() {},
      "getLoadingPlaceholder": function() {},
      "positionDialogUnderButton": function() {},
      "fetchUrl": function() {},
      "markAsRead": function() {},
      "handleRealtimeMessage": function() {},
      "clearLoadedDialog": function() {}
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
      "initialize": function() {},
      "toggle": function(t, e) {},
      "showOnMouseOver": function() {},
      "isOn": function() {},
      "markAsRead": function() {},
      "dequeuePendingUnreadCount": function() {},
      "setUnreadCount": function(t) {},
      "addUnreadClass": function() {},
      "handleRealtimeMessage": function() {}
    }),
    u = r.extend({
      "url": "/topbar/site-switcher",
      "cssClass": "siteSwitcher-dialog",
      "$searchItems": null
    }).methods({
      "afterLoad": function() {},
      "doSearch": function(t, e) {},
      "filterSites": function(t) {}
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
      "handleRealtimeMessage": function(t) {}
    }),
    g = r.extend({
      "url": "/topbar/achievements",
      "cssClass": "achievements-dialog"
    }).methods({
      "afterLoad": function() {},
      "alignRep": function() {},
      "bindDateGroupToggles": function() {},
      "displayUtcTime": function() {}
    }),
    f = l.extend({
      "name": "Achievements",
      "selector": ".js-achievements-button",
      "dialog": new g,
      "unreadCountPrefix": "+",
      "showsOnMouseOver": !0
    }).methods({
      "handleRealtimeMessage": function(t) {}
    }),
    p = [],
    m = [];
  return {
    "init": function() {},
    "hideAll": i,
    "handleRealtimeMessage": n
  }
}();