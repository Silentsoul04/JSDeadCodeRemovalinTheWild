jQuery.cookie = function(e, t, n) {
    if ("undefined" == typeof t) {
      var i = null;
      if (document.cookie && "" != document.cookie)
        for (var o = document.cookie.split(";"), r = 0; r < o.length; r++) {
          var s = jQuery.trim(o[r]);
          if (s.substring(0, e.length + 1) == e + "=") {
            i = decodeURIComponent(s.substring(e.length + 1));
            break
          }
        }
      return i
    }
    n = n || {}, null === t && (t = "", n.expires = -1);
    var a = "";
    if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
      var c;
      "number" == typeof n.expires ? (c = new Date, c.setTime(c.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : c = n.expires, a = "; expires=" + c.toUTCString()
    }
    var u = n.path ? "; path=" + n.path : "",
      l = n.domain ? "; domain=" + n.domain : "",
      f = n.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), a, u, l, f].join("")
  },
  function(e) {
    e.fn.typeWatch = null
  }(jQuery), window.StackExchange = {}, StackExchange.init = function() {
    var e = null;
    return null
  }(), StackExchange.init.createJqueryExtensions = null, StackExchange.helpers = function() {
    var e, t, n, i = null,
      o = function() {
        function e() {
          if (!window.localStorage) return !1;
          try {
            if (window.localStorage["gps-probe"] = "1", "1" != window.localStorage["gps-probe"]) return !1;
            window.localStorage.removeItem("gps-probe")
          } catch (e) {
            return !1
          }
          return !0
        }

        

        

        function i() {
          StackExchange._gps_track && ($.each(StackExchange._gps_track, null), delete StackExchange._gps_track)
        }

        function o() {
          var e = localStorage[c];
          return e ? JSON.parse(e) : []
        }

        

        

        function a() {
          var e = o();
          if (e.length > 0) {
            for (var t = (new Date).getTime(), n = [], i = 0; i < e.length && n.length < 20; i++) {
              var a = e[i],
                c = t - a.now;
              0 > c || c > 36e5 ? r(a) : n.push(a)
            }
            n.length > 0 && s(n)
          }
        }
        var c = "gps-pending",
          u = {};
        if (!e()) return null;
        i(), a(), $(function() {
          $("a.tour-link").click(null), $(".featured-site a").click(null)
        });
        var l = null;
        return l
      }(),
      r = {
        "bindMovablePopups": i,
        "addSpinner": null,
        "getSpinnerImg": null,
        "removeSpinner": null,
        "showErrorPopup": null,
        "removeErrorPopup": null,
        "getHashParams": null,
        "DelayedReaction": null,
        "gps": o
      };
    return r
  }(),
  function(e) {
    

    function n() {
      this._events = {}, this._maxListeners = 10
    }
    t.prototype.fire = null, n.prototype.eachListener = null, n.prototype.addListener = null, n.prototype.on = n.prototype.addListener, n.prototype.once = null, n.prototype.removeListener = null, n.prototype.off = n.prototype.removeListener, n.prototype.removeAllListeners = null, n.prototype.listeners = null, n.prototype.emit = null, n.prototype.setMaxListeners = null, "function" == typeof define && define.amd ? define(null) : e.EventEmitter = n
  }(this), StackExchange.realtime = function() {
    

    

    

    

    

    

    

    

    

    

    
    var f, h, p = 0,
      g = [],
      d = new EventEmitter,
      v = !1;
    return {
      "init": e,
      "subscribeForStatus": u,
      "getRelativeTime": l,
      "subscribeToRealtimeQuestions": a,
      "subscribeToTopBarNotifications": c
    }
  }();