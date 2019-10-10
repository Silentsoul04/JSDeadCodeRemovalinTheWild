! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/webpack/", n(n.s = 750)
}({
    750: function(e, t, n) {
        e.exports = n(751)
    },
    751: function(e, t) {
        ! function(e, t) {
            var n = "spAnalytics",
                r = function(e) {
                    console.log(n + " " + e)
                },
                i = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                o = function(e) {
                    var t = [];
                    for (var n in e) {
                        var r = e[n];
                        if (i(r))
                            for (var o = 0; o < r.length; o++) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r[o]));
                        else t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r))
                    }
                    return t.join("&")
                },
                a = function(e) {
                    e = e.replace(/\r\n/g, "\n");
                    for (var t = "", n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                    }
                    return t
                },
                s = function(e) {
                    for (var t = "", n = 0, r = 0, i = 0, o = 0; n < e.length;)(r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (i = e.charCodeAt(n + 1), t += String.fromCharCode((31 & r) << 6 | 63 & i), n += 2) : (i = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), t += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & o), n += 3);
                    return t
                },
                c = {
                    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode: function(t) {
                        try {
                            if (e.btoa && e.atob) return e.btoa(unescape(encodeURIComponent(t)))
                        } catch (e) {}
                        return c._encode(t)
                    },
                    _encode: function(e) {
                        var t, n, r, i, o, s, d, u = "",
                            l = 0;
                        for (e = a(e); l < e.length;) i = (t = e.charCodeAt(l++)) >> 2, o = (3 & t) << 4 | (n = e.charCodeAt(l++)) >> 4, s = (15 & n) << 2 | (r = e.charCodeAt(l++)) >> 6, d = 63 & r, isNaN(n) ? s = d = 64 : isNaN(r) && (d = 64), u = u + c._keyStr.charAt(i) + c._keyStr.charAt(o) + c._keyStr.charAt(s) + c._keyStr.charAt(d);
                        return u
                    },
                    decode: function(t) {
                        try {
                            if (e.btoa && e.atob) return decodeURIComponent(escape(e.atob(t)))
                        } catch (e) {}
                        return c._decode(t)
                    },
                    _decode: function(e) {
                        var t, n, r, i, o, a, d = "",
                            u = 0;
                        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) t = c._keyStr.indexOf(e.charAt(u++)) << 2 | (i = c._keyStr.indexOf(e.charAt(u++))) >> 4, n = (15 & i) << 4 | (o = c._keyStr.indexOf(e.charAt(u++))) >> 2, r = (3 & o) << 6 | (a = c._keyStr.indexOf(e.charAt(u++))), d += String.fromCharCode(t), 64 != o && (d += String.fromCharCode(n)), 64 != a && (d += String.fromCharCode(r));
                        return d = s(d)
                    }
                },
                d = e.navigator.userAgent,
                u = e.navigator.vendor,
                l = e.navigator.platform,
                p = {
                    init: function() {
                        this.browser = this.searchString(this.dataBrowser) || null, this.version = this.searchVersion(e.navigator.userAgent) || this.searchVersion(e.navigator.appVersion) || null, this.OS = this.searchString(this.dataOS) || null
                    },
                    searchString: function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t].string,
                                r = e[t].prop;
                            if (this.versionSearchString = e[t].versionSearch || e[t].identity, n) {
                                if (-1 != n.indexOf(e[t].subString)) return e[t].identity
                            } else if (r) return e[t].identity
                        }
                    },
                    searchVersion: function(e) {
                        var t = e.indexOf(this.versionSearchString);
                        if (-1 != t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
                    },
                    dataBrowser: [{
                        string: d,
                        subString: "Chrome",
                        identity: "Chrome"
                    }, {
                        string: d,
                        subString: "OmniWeb",
                        versionSearch: "OmniWeb/",
                        identity: "OmniWeb"
                    }, {
                        string: u,
                        subString: "Apple",
                        identity: "Safari",
                        versionSearch: "Version"
                    }, {
                        prop: e.opera,
                        identity: "Opera",
                        versionSearch: "Version"
                    }, {
                        string: u,
                        subString: "iCab",
                        identity: "iCab"
                    }, {
                        string: u,
                        subString: "KDE",
                        identity: "Konqueror"
                    }, {
                        string: d,
                        subString: "Firefox",
                        identity: "Firefox"
                    }, {
                        string: u,
                        subString: "Camino",
                        identity: "Camino"
                    }, {
                        string: d,
                        subString: "Netscape",
                        identity: "Netscape"
                    }, {
                        string: d,
                        subString: "MSIE",
                        identity: "Explorer",
                        versionSearch: "MSIE"
                    }, {
                        string: d,
                        subString: "Gecko",
                        identity: "Mozilla",
                        versionSearch: "rv"
                    }, {
                        string: d,
                        subString: "Mozilla",
                        identity: "Netscape",
                        versionSearch: "Mozilla"
                    }],
                    dataOS: [{
                        string: l,
                        subString: "Win",
                        identity: "Windows"
                    }, {
                        string: l,
                        subString: "Mac",
                        identity: "Mac"
                    }, {
                        string: d,
                        subString: "iPhone",
                        identity: "iPhone/iPod"
                    }, {
                        string: d,
                        subString: "Android",
                        identity: "Android"
                    }, {
                        string: l,
                        subString: "Linux",
                        identity: "Linux"
                    }]
                };
            p.init();
            var g = function(e, t) {
                this.url = e, this.data = t || {}
            };
            g.prototype.send = function(t, n) {
                if (!!e.XDomainRequest) {
                    var r = new e.XDomainRequest;
                    r.open("POST", this.url, !0), r.onload = function() {
                        t(r.responseText)
                    }, r.onerror = function() {
                        n(r)
                    }, r.send(o(this.data))
                } else {
                    var i = new XMLHttpRequest;
                    i.open("POST", this.url, !0), i.onreadystatechange = function() {
                        4 == i.readyState && (200 == i.status ? t(i.responseText) : n(i, i.status))
                    }, i.onerror = function() {
                        n(i, i.status)
                    }, i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), i.send(o(this.data))
                }
            };
            var v = {
                    get: function(e) {
                        for (var n = e + "=", r = t.cookie.split(";"), i = 0; i < r.length; i++) {
                            for (var o = r[i];
                                " " == o.charAt(0);) o = o.substring(1, o.length);
                            if (0 == o.indexOf(n)) return o.substring(n.length, o.length)
                        }
                        return null
                    },
                    set: function(e, n, r, i) {
                        if (r) {
                            var o = new Date;
                            o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3);
                            var a = "; expires=" + o.toGMTString()
                        } else a = "";
                        var s = e + "=" + n + a + "; path=/" + (i ? ";domain=" + i : "");
                        t.cookie = s
                    },
                    remove: function(e, t) {
                        v.set(e, "", -1, t)
                    }
                },
                f = function() {},
                h = {
                    apiEndpoint: "",
                    cookieName: n + "_id",
                    cookieExpiration: 3650,
                    unsentKey: n + "_unsent",
                    saveEvents: !0,
                    domain: "",
                    sessionTimeout: 18e5
                },
                S = 0,
                y = [],
                m = !1,
                _ = null,
                b = null,
                I = {
                    LAST_EVENT_TIME: n + "_lastEventTime",
                    SESSION_ID: n + "_sessionId"
                },
                C = function() {
                    return ++S
                };
            f.prototype.init = function(e, t) {
                try {
                    if (this.options = h, t && void 0 !== t.saveEvents && (h.saveEvents = !!t.saveEvents), E(), h.deviceId = t && void 0 !== t.deviceId && null !== t.deviceId && t.deviceId || h.deviceId || function() {
                            for (var e = [], t = 0; t < 32; t++) e[t] = Math.floor(16 * Math.random()).toString(16);
                            return e.join("")
                        }(), h.userId = null != e && e || h.userId || null, h.apiEndpoint = t && void 0 !== t.apiEndpoint && null !== t.apiEndpoint && t.apiEndpoint || h.apiEndpoint, O(), S = 0, h.saveEvents) {
                        var n = localStorage.getItem(h.unsentKey);
                        if (n) try {
                            y = JSON.parse(n)
                        } catch (e) {}
                    }
                    y.length > 0 && this.sendEvents(), _ = parseInt(localStorage.getItem(I.LAST_EVENT_TIME)) || null, b = parseInt(localStorage.getItem(I.SESSION_ID)) || null;
                    var i = (new Date).getTime();
                    (!b || !_ || i - _ > h.sessionTimeout) && (b = i, localStorage.setItem(I.SESSION_ID, b)), _ = i, localStorage.setItem(I.LAST_EVENT_TIME, _)
                } catch (e) {
                    r(e)
                }
            };
            var E = function() {
                    var e = v.get(h.cookieName),
                        t = null;
                    if (e) try {
                        (t = JSON.parse(c.decode(e))) && (t.deviceId && (h.deviceId = t.deviceId), t.userId && (h.userId = t.userId), t.globalUserProperties && (h.globalUserProperties = t.globalUserProperties))
                    } catch (e) {}
                },
                O = function() {
                    v.set(h.cookieName, c.encode(JSON.stringify({
                        deviceId: h.deviceId,
                        userId: h.userId,
                        globalUserProperties: h.globalUserProperties
                    })), h.cookieExpiration, h.domain)
                },
                N = function() {
                    try {
                        localStorage.setItem(h.unsentKey, JSON.stringify(y))
                    } catch (e) {}
                };
            f.prototype.setDomain = function(e) {
                try {
                    h.domain = null != e && "" + e || null, h.cookieName = n + "_id" + (h.domain || ""), E(), O()
                } catch (e) {
                    r(e)
                }
            }, f.prototype.setUserId = function(e) {
                try {
                    h.userId = null != e && "" + e || null, O()
                } catch (e) {
                    r(e)
                }
            }, f.prototype.setUserProperties = function(e) {
                try {
                    h.globalUserProperties = e, O()
                } catch (e) {
                    r(e)
                }
            }, f.prototype.setVersionName = function(e) {
                try {
                    h.versionName = e
                } catch (e) {
                    r(e)
                }
            }, f.prototype.logEvent = function(e, t, n, i) {
                try {
                    var o = (new Date).getTime();
                    (!b || !_ || o - _ > h.sessionTimeout) && (b = o, localStorage.setItem(I.SESSION_ID, b)), _ = o, localStorage.setItem(I.LAST_EVENT_TIME, _), i = i && "string" != typeof i ? JSON.stringify(i) : i || "";
                    var a = {
                        device_id: h.deviceId,
                        user_id: h.userId || h.deviceId,
                        timestamp: o,
                        event_id: C(),
                        session_id: b || -1,
                        event_category: e,
                        event_action: t,
                        event_label: n,
                        event_context: i,
                        client: p.browser,
                        version_code: 0,
                        version_name: h.versionName || null,
                        build_version_sdk: 0,
                        build_version_release: p.version,
                        phone_model: p.OS,
                        global_properties: h.globalUserProperties || {}
                    };
                    y.push(a), h.saveEvents && N(), this.sendEvents()
                } catch (e) {
                    r(e)
                }
            }, f.prototype.sendBeacon = function(t, n, i, o) {
                if (e.navigator.sendBeacon) try {
                    var a = (new Date).getTime(),
                        s = {
                            device_id: h.deviceId,
                            user_id: h.userId || h.deviceId,
                            timestamp: a,
                            event_id: C(),
                            session_id: b || -1,
                            event_category: t,
                            event_action: n,
                            event_label: i,
                            event_context: o,
                            client: p.browser,
                            version_code: 0,
                            version_name: h.versionName || null,
                            build_version_sdk: 0,
                            build_version_release: p.version,
                            phone_model: p.OS,
                            global_properties: h.globalUserProperties || {}
                        },
                        c = new FormData;
                    return c.append("e", JSON.stringify([s])), c.append("upload_time", a), e.navigator.sendBeacon(h.apiEndpoint, c)
                } catch (e) {
                    r(e)
                }
            }, f.prototype.sendEvents = function() {
                if (!m) {
                    m = !0;
                    var e = h.apiEndpoint,
                        t = {
                            e: JSON.stringify(y),
                            upload_time: (new Date).getTime()
                        },
                        n = y.length,
                        r = this;
                    new g(e, t).send(function(e) {
                        m = !1;
                        try {
                            var t = JSON.parse(e);
                            t && 1 == t.success && y.length > 0 && r.sendEvents()
                        } catch (e) {}
                    }, function() {
                        m = !1
                    }), y.splice(0, n), h.saveEvents && N()
                }
            }, f.prototype.runQueuedFunctions = function() {
                for (var e = 0; e < this._q.length; e++) {
                    var t = this[this._q[e][0]];
                    t && "function" == typeof t && t.apply(this, this._q[e].slice(1))
                }
                this._q = []
            }, f.prototype.__VERSION__ = "1.3";
            var A = e[n] || {},
                T = new f;
            T._q = A._q || [], e[n] = T
        }(window, document)
    }
});
//# sourceMappingURL=sp-analytics.81dfd15d66d0f2903d74.js.map