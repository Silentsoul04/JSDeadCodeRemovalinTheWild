this["@ali/lib-smb/wake"] = function(e) {
    var a = {};

    function t(n) {
        if (a[n]) return a[n].exports;
        var i = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    return t.m = e, t.c = a, t.d = function(e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: n
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, a) {
        if (1 & a && (e = t(e)), 8 & a) return e;
        if (4 & a && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var i in e) t.d(n, i, function(a) {
                return e[a]
            }.bind(null, i));
        return n
    }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(a, "a", a), a
    }, t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, t.p = "", t(t.s = 51)
}([function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.Version = a.params = a.thirdapp = a.aliapp = a.os = a.browser = void 0;
    var n = u(t(10)),
        i = u(t(18)),
        o = u(t(11)),
        r = u(t(7)),
        s = u(t(12)),
        l = u(t(13)),
        p = u(t(6)),
        c = u(t(19));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    a.browser = o.default, a.os = r.default, a.aliapp = n.default, a.quickapp = i.default, a.thirdapp = s.default, a.params = l.default, a.Version = p.default, a.appkey = c.default
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n = o(t(14)),
        i = o(t(9));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    a.appendParams = function(e, a) {
        var t = Object.keys(a).map(function(e) {
            return e + "=" + a[e]
        }).join("&");
        return 0 < e.indexOf("?") ? e + "&" + t : e + "?" + t
    }, a.getCookie = function(e) {
        var a = document.cookie,
            t = e + "=",
            n = a.indexOf(t);
        if (n < 0) return null;
        n += t.length;
        var i = a.indexOf(";", n);
        return i = -1 == i ? a.length : i, a.substring(n, i)
    }, a.dExtend = function() {
        for (var e = {}, a = arguments.length, t = Array(a), i = 0; i < a; i++) t[i] = arguments[i];
        return Array.prototype.forEach.call(t, function(a, t) {
            for (var i in a) void 0 !== a[i] && null !== a[i] && "" !== a[i] || delete a[i];
            e = n.default(e, a)
        }), e
    }, a.copyObject = function() {
        for (var e = {}, a = arguments.length, t = Array(a), n = 0; n < a; n++) t[n] = arguments[n];
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            for (var r in o) e[r] = o[r];
            o && (e.__proto__ = o.__proto__)
        }
        return e
    }, a.getUrlObj = function(e) {
        if (!e) return !1;
        try {
            return new i.default(e)
        } catch (e) {
            return !1
        }
    }, a.isChina = function(e) {
        return !!/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi.exec(e)
    }
}, , , , , function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n = function(e, a, t) {
        return a && i(e.prototype, a), t && i(e, t), e
    };

    function i(e, a) {
        for (var t = 0; t < a.length; t++) {
            var n = a[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var o = (n(r, null, [{
        key: "compare",
        value: function(e, a) {
            e = e.toString().split("."), a = a.toString().split(".");
            for (var t = 0; t < e.length || t < a.length; t++) {
                var n = parseInt(e[t], 10),
                    i = parseInt(a[t], 10);
                if (isNaN(n) && (n = 0), isNaN(i) && (i = 0), n < i) return -1;
                if (i < n) return 1
            }
            return 0
        }
    }]), n(r, [{
        key: "gt",
        value: function(e) {
            return 0 < r.compare(this, e)
        }
    }, {
        key: "gte",
        value: function(e) {
            return 0 <= r.compare(this, e)
        }
    }, {
        key: "lt",
        value: function(e) {
            return r.compare(this, e) < 0
        }
    }, {
        key: "lte",
        value: function(e) {
            return r.compare(this, e) <= 0
        }
    }, {
        key: "eq",
        value: function(e) {
            return 0 === r.compare(this, e)
        }
    }, {
        key: "toString",
        value: function() {
            return this.val.toString()
        }
    }]), r);

    function r(e) {
        ! function(e, a) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }(this), this.val = e ? e.toString() : ""
    }
    a.default = o
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n, i, o, r = (n = t(6)) && n.__esModule ? n : {
            default: n
        },
        s = window.navigator.userAgent;
    if (o = s.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/i)) i = {
        name: "Windows Phone",
        isWindowsPhone: !0,
        version: new r.default(o[1])
    };
    else if (s.match(/Safari/) && (o = s.match(/Android[\s\/]([\d\.]+)/i))) i = {
        version: new r.default(o[1])
    }, s.match(/Mobile\s+Safari/) ? (i.name = "Android", i.isAndroid = !0) : (i.name = "AndroidPad", i.isAndroidPad = !0);
    else if (o = s.match(/(iPhone|iPad|iPod)/i)) {
        var l = o[1];
        i = (o = s.match(/OS ([\d_\.]+) like Mac OS X/i)) ? {
            name: l,
            isIPhone: "iPhone" === l || "iPod" === l,
            isIPad: "iPad" === l,
            isIOS: !0,
            version: new r.default(o[1].split("_").join("."))
        } : {
            name: l
        }
    } else(o = s.match(/Windows\sNT/i)) ? i = {
        name: "Windows NT",
        isPC: !0
    } : (o = s.match(/Intel\sMac\sOS\sX/i)) ? i = {
        name: "Mac OS",
        isPC: !0
    } : (o = s.match(/win7/i)) ? i = {
        name: "Win7",
        isPC: !0
    } : (o = s.match(/libcurl/i)) && (i = {
        name: "command line",
        isPC: !0
    });
    i = i || {
        name: "unknown",
        version: new r.default("0.0.0")
    }, a.default = i
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n, i = t(0),
        o = window.document,
        r = window.navigator.userAgent,
        s = i.os,
        l = i.aliapp,
        p = i.quickapp,
        c = i.browser;

    function u(e, a, t) {
        var i = s.isAndroid && c.isChrome && !c.isWebview,
            l = s.isAndroid && !!r.match(/samsung/i) && s.version.gte("4.3") && s.version.lt("4.5");
        if (s.isAndroid && (i || l || "intent" == a) && (e = "intent:" + e.replace(/^(.*):/, "") + "#Intent;scheme=" + e.match(/^(.*):/)[1] + ";package=" + t.package + ";end"), s.isAndroid && /^intent:/.test(e))
            if ("complete" == document.readyState) m(e);
            else var p = window.setInterval(function() {
                "complete" == document.readyState && (window.clearInterval(p), m(e))
            }, 100);
        else ! function(e) {
            n || ((n = o.createElement("iframe")).id = "callapp_iframe_" + Date.now(), n.frameborder = "0", n.style.cssText = "display:none;border:0;width:0;height:0;", o.body.appendChild(n)), n.src = e
        }(e)
    }

    function m(e, a) {
        !1 === a || !l && !0 !== a ? location.href = e : location.replace(e)
    }
    a.default = function(e, a, t) {
        if (e) {
            var n = s.isIPhone && s.version.gte("9.0"),
                i = s.isIPhone && s.version.gte("9.0") && c.isSafari;
            a = a || "scheme", s.isPC || (i && "scheme" == a ? function(e) {
                var a = document.createElement("a");
                a.setAttribute("href", e), a.style.display = "none", document.body.appendChild(a);
                var t = document.createEvent("HTMLEvents");
                t.initEvent("click", !1, !1), a.dispatchEvent(t)
            }(e) : n && "universalLink" == a ? function(e) {
                location.href = e.replace(/^[a-z0-9]+:/i, "https:")
            }(e) : p ? function(e) {
                window.system && system.postMessage && system.postMessage(JSON.stringify({
                    url: encodeURIComponent(e)
                }))
            }(e) : s.isAndroid && "portListen" == a ? (t.exp = t.exp || {}, function(e, a, t, n, i) {
                var o = !0,
                    r = !1;
                try {
                    ! function i(l) {
                        if (!r && a[l]) {
                            var p = {
                                linkurl: e,
                                appkey: t || "",
                                ua: window.navigator.userAgent,
                                version: "1.0.0"
                            };
                            n.params && (p.params = n.params), n.subParams && (p.subParams = n.subParams), n.point && (p.point = n.point);
                            var c = JSON.stringify({
                                type: "applink",
                                data: p
                            });
                            "WebSocket" in window ? function(e, t) {
                                var n = new WebSocket("ws://localhost:" + a[e] + "/bcport");
                                if (!n || null == n.readyState) return s();
                                n.onopen = function() {
                                    n.send(t)
                                }, n.onmessage = function(e) {
                                    "1" == n.readyState && e.data && "success" == JSON.parse(e.data).code ? o = !(r = !0) : s(), n.close()
                                }, n.onclose = function() {
                                    r ? o = !1 : i(e + 1)
                                }
                            }(l, c) : s()
                        } else s()
                    }(0), window.setTimeout(function() {
                        s()
                    }, 2e3)
                } catch (i) {
                    s()
                }

                function s() {
                    o && (o = !1, i())
                }
            }(t.surl, t.ports, t.appkey, t.exp, function() {
                u(e, a, t)
            })) : u(e, a, t))
        }
    }
}, function(e, a, t) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function(e, a) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, a) {
                var t = [],
                    n = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (t.push(r.value), !a || t.length !== a); n = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !n && s.return && s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return t
            }(e, a);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        o = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : n(e)
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : void 0 === e ? "undefined" : n(e)
        };

    function r(e, a) {
        for (var t = 0; t < a.length; t++) {
            var n = a[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var s = new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i"),
        l = (function(e, a, t) {
            a && r(e.prototype, a), t && r(e, t)
        }(p, [{
            key: "assign",
            value: function(e) {
                var a = (e = e || "").match(s);
                if (!a) throw new Error("Parse Error");
                this.protocol = a[1] || ("object" === ("undefined" == typeof location ? "undefined" : o(location)) ? location.protocol : ""), this.username = a[2] || "", this.password = a[3] || "", this.hostname = a[4], this.port = a[5] || "", this.pathname = a[6] || "/", this.search = a[7] || "", this.hash = a[8] || "", this.origin = this.protocol + "//" + this.host
            }
        }, {
            key: "toString",
            value: function() {
                var e = this.protocol + "//";
                return this.username && (e += this.username, this.password && (e += ":" + this.password), e += "@"), e += this.hostname, this.port && "80" !== this.port && (e += ":" + this.port), this.pathname && (e += this.pathname), this.search && (e += this.search), this.hash && (e += this.hash), e
            }
        }, {
            key: "params",
            get: function() {
                return this._params
            },
            set: function(e) {
                if (e && "object" === (void 0 === e ? "undefined" : o(e)) && !(e instanceof Date) && !(e instanceof RegExp) && !(e instanceof Array) && !(e instanceof String) && !(e instanceof Number) && !(e instanceof Boolean)) {
                    for (var a in this._params) delete this._params[a];
                    for (var a in e) this._params[a] = e[a]
                }
            }
        }, {
            key: "search",
            get: function() {
                var e = [];
                for (var a in this._params)
                    if (void 0 !== this._params[a])
                        if ("" !== this._params[a]) try {
                            e.push(encodeURIComponent(a) + "=" + encodeURIComponent(this._params[a]))
                        } catch (t) {
                            e.push(a + "=" + this._params[a])
                        } else try {
                            e.push(encodeURIComponent(a))
                        } catch (t) {
                            e.push(a)
                        }
                return e.length ? "?" + e.join("&") : ""
            },
            set: function(e) {
                if ("string" == typeof e || e instanceof String) {
                    0 === (e = e.toString()).indexOf("?") && (e = e.substr(1));
                    var a = e.split("&");
                    for (var t in this._params) delete this._params[t];
                    for (var n = 0; n < a.length; n++) {
                        var o = a[n].indexOf("=");
                        if (0 < o) {
                            var r = a[n].slice(0, o),
                                s = (e = a[n].slice(o + 1), i([r, e], 2)),
                                l = s[0],
                                p = s[1];
                            if (void 0 !== p && (p = p.toString()), l) try {
                                this._params[decodeURIComponent(l)] = decodeURIComponent(p)
                            } catch (e) {
                                this._params[l] = p
                            }
                        }
                    }
                }
            }
        }, {
            key: "hash",
            get: function() {
                return this._hash
            },
            set: function(e) {
                ("string" == typeof e || e instanceof String) && ((e = e.toString()) && e.indexOf("#") < 0 && (e = "#" + e), this._hash = e || "")
            }
        }, {
            key: "host",
            get: function() {
                return this.hostname + (this.port ? ":" + this.port : "")
            },
            set: function(e) {
                if ("string" == typeof e || e instanceof String) {
                    var a = (e = e.toString()).match(/([^:\/?#]+)(?:[:]([0-9]+))?/);
                    a && (this.hostname = a[1], this.port = a[2] || "")
                }
            }
        }]), p);

    function p(e) {
        ! function(e, a) {
            if (!(e instanceof p)) throw new TypeError("Cannot call a class as a function")
        }(this), this._params = {}, this._hash = "", e && this.assign(e.toString())
    }
    a.default = l
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n = o(t(6)),
        i = o(t(7));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var r, s, l = window.navigator.userAgent,
        p = !1,
        c = "",
        u = "",
        m = "";
    (s = l.match(/WindVane[\/\s]([\d\.\_]+)/i)) && (r = s[1]), (s = l.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (p = !0, c = s[1], m = s[2], u = 0 < c.indexOf("-PD") ? i.default.isIOS ? "iPad" : i.default.isAndroid ? "AndroidPad" : i.default.name : i.default.name), !c && 0 < l.indexOf("TBIOS") && (c = "TB"), !c && 0 < l.indexOf("AlipayClient") && (c = "AP");
    var d = window._ua_popLayer || "",
        f = !1,
        b = "";
    if (d && (s = d.match(/PopLayer\/([\d\.]+)/i)) && (f = !0, b = s[1]), p) {
        p = {
            windvane: new n.default(r || "0.0.0"),
            appname: c || "unknown",
            version: new n.default(m || "0.0.0"),
            platform: u || i.default.name,
            poplayer: f || !1,
            poplayerVersion: new n.default(b || "0.0.0")
        };
        var h = /MiniProgram/i.test(l);
        "AP" === c && h && (p.isAlipayMiniProgram = !0)
    }
    a.default = p
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n, i, o, r = (n = t(6)) && n.__esModule ? n : {
            default: n
        },
        s = window.navigator.userAgent;
    (o = s.match(/VivoBrowser\/([\d\.]+)/)) ? i = {
        name: "Vivo",
        isVivo: !0,
        version: new r.default(o[1])
    }: (o = s.match(/OppoBrowser\/([\d\.]+)/)) ? i = {
        name: "Oppo",
        isOppo: !0,
        version: new r.default(o[1])
    } : (o = s.match(/MiuiBrowser\/([\d\.]+)/)) ? i = {
        name: "Miui",
        isXiaomi: !0,
        version: new r.default(o[1])
    } : (o = s.match(/HUAWEI[_\s].*\sRelease\/([0-9\.]+)\sBrowser\//)) ? i = {
        name: "Huawei",
        isHuawei: !0,
        version: new r.default(o[1])
    } : (o = s.match(/SamsungBrowser\/([\d\.]+)/)) ? i = {
        name: "Samsung",
        isSamsung: !0,
        version: new r.default(o[1])
    } : (o = s.match(/SAMSUNG.*\sRelease\/([0-9\.]+)\sBrowser\//)) ? i = {
        name: "Samsung",
        isSamsung: !0,
        version: new r.default(o[1])
    } : (o = s.match(/SogouMobileBrowser\/([\d\.]+)/)) ? i = {
        name: "Sogou",
        isSogouMobile: !0,
        version: new r.default(o[1])
    } : (o = s.match(/MxBrowser\/([\d\.]+)/)) ? i = {
        name: "MxBrowser",
        isMxBrowser: !0,
        version: new r.default(o[1])
    } : (o = s.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? i = {
        name: "UC",
        isUC: !0,
        version: new r.default(o[1])
    } : (o = s.match(/MQQBrowser\/([\d\.]+)/)) ? i = {
        name: "QQBrowser",
        isQQ: !0,
        version: new r.default(o[1])
    } : (o = s.match(/baidubrowser\/([\d\.]+)/)) ? i = {
        name: "BaiduBrowser",
        isBaidu: !0,
        version: new r.default(o[1])
    } : (o = s.match(/LieBaoFast\/([\d\.]+)/)) ? i = {
        name: "LieBaoFast",
        isLieBaoFast: !0,
        version: new r.default(o[1])
    } : (o = s.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? i = {
        name: "Firefox",
        isFirefox: !0,
        version: new r.default(o[1])
    } : (o = s.match(/MSIE\s([\d\.]+)/)) || (o = s.match(/IEMobile\/([\d\.]+)/)) ? (i = {
        version: new r.default(o[1])
    }, s.match(/IEMobile/) ? (i.name = "IEMobile", i.isIEMobile = !0) : (i.name = "IE", i.isIE = !0), s.match(/Android|iPhone/) && (i.isIELikeWebkit = !0)) : (o = s.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (i = {
        name: "Chrome",
        isChrome: !0,
        version: new r.default(o[1])
    }, s.match(/Version\/[\d+\.]+\s*Chrome/) && (i.name = "ChromeWebview", i.isWebview = !0)) : (o = s.match(/Mozilla\/5\.0\s.*SAMSUNG.*\sAppleWebKit\/([0-9\.]+)\s.*\sVersion\/([0-9\.]+)\sMobile\sSafari\/([0-9\.]+)/)) ? i = {
        name: "SamsungWebkit",
        isSamsung: !0,
        version: new r.default("0.0.0")
    } : (o = s.match(/Mozilla\/5\.0\s.*Galaxy.*\sAppleWebKit\/([0-9\.]+)\s.*\sVersion\/([0-9\.]+)\sMobile\sSafari\/([0-9\.]+)/)) ? i = {
        name: "SamsungWebkit",
        isSamsung: !0,
        version: new r.default("0.0.0")
    } : (o = s.match(/Mozilla\/5\.0\s.*SM-.*\sAppleWebKit\/([0-9\.]+)\s.*\sVersion\/([0-9\.]+)\sMobile\sSafari\/([0-9\.]+)/)) ? i = {
        name: "SamsungWebkit",
        isSamsung: !0,
        version: new r.default("0.0.0")
    } : (o = s.match(/Mozilla\/([0-9\.]+)\s.*(HUAWEI|Huawei).*\sAppleWebKit\/([0-9\.]+)\s.*\sVersion\/([0-9\.]+)\sMobile\sSafari\/([0-9\.]+)/)) ? i = {
        name: "HuaweiWebkit",
        isHuawei: !0,
        version: new r.default("0.0.0")
    } : (o = s.match(/Mozilla\/([0-9\.]+)\s.*(Coolpad|coolpad).*\sAppleWebKit\/([0-9\.]+)\s.*\sVersion\/([0-9\.]+)\sMobile\sSafari\/([0-9\.]+)/)) ? i = {
        name: "CoolpadWebkit",
        isCoolpad: !0,
        version: new r.default("0.0.0")
    } : s.match(/iPhone|iPad|iPod/) ? s.match(/Safari\/([0-9\.]+$)/) && !s.match(/Chrome/i) && (o = s.match(/Version\/([\d\.]+)/)) ? i = {
        name: "Safari",
        isSafari: !0,
        version: new r.default(o[1])
    } : (o = s.match(/OS ([\d_\.]+) like Mac OS X/)) && (i = {
        name: "iOSWebview",
        isWebview: !0,
        version: new r.default(o[1].replace(/\_/g, "."))
    }) : s.match(/Safari/) && (o = s.match(/Android[\s\/]([\d\.]+)/)) && (i = {
        name: "Android",
        isAndroid: !0,
        version: new r.default(o[1])
    }), i = i || {
        name: "unknown",
        version: new r.default("0.0.0")
    }, a.default = i
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n, i = window.navigator.userAgent;
    n = i.match(/Weibo/i) ? {
        appname: "Weibo",
        isWeibo: !0
    } : i.match(/MicroMessenger/i) ? {
        appname: "Weixin",
        isWeixin: !0
    } : i.match(/baiduboxapp/i) ? {
        appname: "baiduboxapp",
        isBaiduboxapp: !0
    } : i.match(/QQ\/.*_APP/) ? {
        appname: "MobileQQ",
        isMobileQQ: !0
    } : i.match(/qqnews/i) ? {
        appname: "qqnews",
        isMobileQQ: !0
    } : i.match(/NewsArticle/) ? {
        appname: "Toutiao",
        isToutiao: !0
    } : i.match(/NewsApp/) ? {
        appname: "News163",
        isNews163: !0
    } : i.match(/Youku/) ? {
        appname: "Youku",
        isYouku: !0
    } : i.match(/smzdm/) ? {
        appname: "smzdm",
        isSmzdm: !0
    } : i.match(/iqiyi/) ? {
        appname: "iqiyi",
        isIqiyi: !0
    } : i.match(/changba/) ? {
        appname: "changba",
        isChangba: !0
    } : i.match(/com.meitu.myxj/) ? {
        appname: "myxj",
        isMyxj: !0
    } : i.match(/com.meitu.mtxx/) ? {
        appname: "mtxx",
        isMtxx: !0
    } : i.match(/xiachufang/) ? {
        appname: "xiachufang",
        isXiachufang: !0
    } : i.match(/iting/) ? {
        appname: "iting",
        isIting: !0
    } : i.match(/MeetYouClient/) ? {
        appname: "MeetYouClient",
        isMeetYouClient: !0
    } : i.match(/TADChid/) ? {
        appname: "TADChid",
        isTADChid: !0
    } : !!i.match(/Kuaikan/) && {
        appname: "Kuaikan",
        isKuaikan: !0
    }, a.default = n
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n = {},
        i = window.location.search.replace(/^\?/, "");
    if (i)
        for (var o = i.split("&"), r = 0; r < o.length; r++) {
            var s = o[r].indexOf("=");
            if (0 < s) {
                var l = o[r].slice(0, s),
                    p = o[r].slice(s + 1);
                try {
                    n[l] = decodeURIComponent(p)
                } catch (e) {
                    n[l] = p
                }
            }
        }
    a.default = n
}, function(e, a, t) {
    "use strict";
    e.exports = function() {
        for (var e = {}, a = 0; a < arguments.length; a++) {
            var t = arguments[a];
            for (var i in t) n.call(t, i) && (e[i] = t[i])
        }
        return e
    };
    var n = Object.prototype.hasOwnProperty
}, function(e, a, t) {
    "use strict";
    var n = t(1),
        i = r(t(53)),
        o = r(t(54));

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    a.getLoaderProps = function() {
        var e = {},
            a = window["@ali/lib-smartbanner-plus-loader"];
        return a ? (e.bizKey = a.bizKey, e.pageCode = a.pageCode) : (e.bizKey = "taobao", e.pageCode = "smbDefault"), e
    }, a.getSmbBizConfig = function() {
        var e = window.smbBizConfig || {},
            a = (0, n.getCookie)("liuliangbao_track");
        return a && (e.track = a), e
    }, a.activeControl = i.default, a.invokeControl = o.default, a.getSmartbannerUI = function(e, a, t) {
        var n = {
                taobao: "@ali/lib-smb/ui-tbBanner",
                tmall: "@ali/lib-smb/ui-tmBanner"
            },
            i = n[a.linkKey] || n.taobao,
            o = window[i];
        return o ? o(e, a, t) : null
    }, a.getSmarttipUI = function(e, a) {
        var t = {
                taobao: "@ali/lib-smb/ui-tbTip",
                tmall: "@ali/lib-smb/ui-tmTip"
            },
            n = t[a.linkKey] || t.taobao,
            i = window[n];
        return i ? i(e, a) : null
    }, a.getSmartpopUI = function(e, a) {
        var t = {
                taobao: "@ali/lib-smb/ui-tbPop",
                tmall: "@ali/lib-smb/ui-tmPop"
            },
            n = t[a.linkKey] || t.taobao,
            i = window[n];
        return i ? i(e, a) : null
    }, a.getTaopass = function() {
        return window["@ali/lib-smb/taopass"]
    }
}, function(e, a, t) {
    "use strict";
    var n = s(t(17)),
        i = s(t(21)),
        o = s(t(23)),
        r = s(t(25));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function l(e, a) {
        p(a),
            function(e, a) {
                var t = {
                    taobao: {
                        taobao: !0,
                        tbopen: !0
                    },
                    tmall: {
                        tmall: !0,
                        tmallopen: !0
                    },
                    alipay: {
                        alipays: !0
                    }
                };
                t[e] && (t[e][a.scheme] || (a.scheme = {
                    taobao: "tbopen",
                    tmall: "tmall",
                    alipay: "alipays"
                }[e]))
            }(e, a), a.source = "sb";
        var t = "";
        switch (e) {
            case "taobao":
                t = (0, n.default)(a.targetUrl, a);
                break;
            case "tmall":
                a.navType = "applink", t = (0, i.default)(a);
                break;
            case "alipay":
                t = (0, o.default)("https://pages.alicdn.com/wow/alipay/act/zfbxcxredirect", a);
                break;
            case "quickapp":
                (0, r.default)(a)
        }
        return t
    }

    function p(e) {
        Object.keys(e).map(function(a) {
            "point" == a || "params" == a || "subParams" == a ? Object.keys(e[a]).map(function(t) {
                "number" == typeof e[a][t] ? e[a][t] = "" + e[a][t] : "function" == typeof e[a][t] && delete e[a][t]
            }) : "exp" == a && p(e.exp)
        })
    }
    l.generateProtocol = function(e, a) {
        p(a);
        var t = !1;
        switch (e) {
            case "taobao":
                t = n.default.generateProtocol(a.targetUrl, a);
                break;
            case "tmall":
                t = i.default.generateProtocol(a)
        }
        return t
    }, e.exports = l
}, function(e, a, t) {
    "use strict";
    var n = t(0),
        i = s(t(8)),
        o = t(1),
        r = s(t(20));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    p.generateProtocol = r.default;
    var l = "https://b.mashort.cn/ulk/taobao";

    function p(e) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n.aliapp || "TB" != n.aliapp.appname && "TB-PD" != n.aliapp.appname) {
            a.point = a.point || {}, a.point.callType = a.callType;
            var t = (0, r.default)(e, a),
                s = {
                    package: "com.taobao.taobao"
                };
            if (n.aliapp && n.aliapp.isAlipayMiniProgram && window.my && window.my.postMessage) return window.my.postMessage({
                type: "method",
                name: "openTaobao",
                params: {
                    url: "taobao://m.taobao.com/index.htm?visa=" + a.visa,
                    login: !0,
                    h5Url: e
                }
            }), t;
            switch (a.callType) {
                case "universalLink":
                    if (n.os.isIPhone && n.os.version.gte("9.0")) {
                        var p = (0, o.appendParams)(a.universalLink || l, {
                            smburl: encodeURIComponent(t)
                        });
                        a.redirectUrl && (p = (0, o.appendParams)(p, {
                            redirectUrl: encodeURIComponent(a.redirectUrl)
                        })), (0, i.default)(p, "universalLink")
                    } else(0, i.default)(t, "scheme", s);
                    break;
                case "portListen":
                    s.appkey = a.appkey, s.surl = a.surl, s.ports = a.ports, s.exp = a.exp, s.subParams = a.subParams, s.exp && (s.exp.subParams = s.subParams || {}, s.exp.subParams._t = (new Date).getTime().toString()), (0, i.default)(t, "portListen", s);
                    break;
                case "intent":
                    (0, i.default)(t, "intent", s);
                    break;
                case "scheme":
                    (0, i.default)(t, "scheme", s);
                    break;
                default:
                    (0, i.default)(e, "scheme", s)
            }
            return t
        }
    }
    e.exports = p
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var n, i, o = (n = t(6)) && n.__esModule ? n : {
            default: n
        },
        r = window.navigator.userAgent,
        s = "",
        l = "",
        p = "";
    /android/i.test(r) && (p = r.match(/\shap\/([\d\.\_]+)/i)) && (s = p[1]), s && (p = r.match(/AliQuickApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (l = p[1]), i = s ? {
        appname: l || "unknown",
        version: new o.default(s || "0.0.0")
    } : null, a.default = i
}, function(e, a, t) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var i = n(t(7)),
        o = n(t(13)),
        r = n(t(10)),
        s = n(t(11)),
        l = n(t(12)),
        p = window.navigator.userAgent,
        c = "24570194",
        u = {
            TB: m("12278902", "12087020"),
            TM: "12615387",
            AP: "24584481",
            APHK: "24584481",
            LX: "24585261",
            HTAO: "24585262",
            DingTalk: "24584850",
            moon: "24585263",
            ET: "24585830",
            QN: "24584660",
            WX: "24584661",
            FM: "24585831",
            XM: "24584663",
            1688: "23078500",
            cunpartner: "24792089",
            CUNTAO: "24792089",
            yintai: "24738771",
            Qiandun: "23527093",
            PP: "23575130",
            DY: m("23270576", "23270572"),
            AK: m("23211311", "23250145"),
            ALIWORK: m("23329711"),
            AFW: m("23641125"),
            DM: m("23781390", "23782110")
        };

    function m(e, a) {
        var t = "";
        return e && (i.default.isAndroid || i.default.isAndroidPad) ? t = e : a && i.default.isIOS && (t = a), t
    }
    var d = {
            Weibo: "24585260",
            baiduboxapp: "24584848",
            MobileQQ: "24584479",
            qqnews: "24585829",
            Toutiao: "24585264",
            News163: "24584662",
            smzdm: "24649634",
            Youku: "24649636",
            iqiyi: "24649838",
            myxj: "24635652",
            mtxx: "24636237",
            xiachufang: "24637021",
            iting: "24637020",
            MeetYouClient: "24659283",
            TADChid: "24636235",
            Kuaikan: "24669580"
        },
        f = {
            Vivo: "24584846",
            Oppo: "24585050",
            Miui: "24585827",
            Huawei: "24585828",
            Samsung: "24584847",
            Sogou: "24585259",
            UC: "24588013",
            QQBrowser: "24585654",
            BaiduBrowser: "24585655",
            Firefox: "24584484",
            Safari: "24585446",
            iOSWebview: "24585446",
            Chrome: "24585258",
            ChromeWebview: "24585258",
            SamsungWebkit: "24595402",
            HuaweiWebkit: "24594506",
            MxBrowser: "24594139",
            CoolpadWebkit: "24601581"
        };
    if (p.match(/AliBaichuan\([0-9_a-zA-z@\.]+_(\d+)@baichuan/)) {
        var b = p.match(/AliBaichuan\([0-9_a-zA-z@\.]+_(\d+)@baichuan/);
        b && b[1] && (c = b[1])
    } else r.default && r.default.appname && "unknown" !== r.default.appname && u[r.default.appname] ? c = u[r.default.appname] : l.default && l.default.appname && d[l.default.appname] ? c = d[l.default.appname] : s.default && s.default.name && "unknown" !== s.default.name && f[s.default.name] ? c = f[s.default.name] : o.default.appkey && (c = o.default.appkey);
    a.default = c
}, function(e, a, t) {
    "use strict";
    var n = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            return a.default = e, a
        }(t(0)),
        i = t(1),
        o = n.params,
        r = {
            action: "ali.open.nav",
            module: "h5",
            bootImage: 0
        };
    e.exports = function(e, a) {
        a.subParams = a.subParams || {};
        var t = (a.scheme || "tbopen") + "://m.taobao.com/tbopen/index.html",
            s = (0, i.getUrlObj)(t),
            l = (0, i.dExtend)({
                backURL: o.backURL,
                packageName: o.packageName,
                bc_fl_src: o.bc_fl_src,
                visa: o.visa
            }, r, {
                source: a.source || "callTB",
                appkey: a.appkey || n.appkey,
                smbSid: a.smbSid,
                rbbt: a.rbbt
            });
        a.backURL && (l.backURL = a.backURL), a.packageName && (l.packageName = a.packageName), a.bc_fl_src && (l.bc_fl_src = a.bc_fl_src), a.visa && (l.visa = a.visa), a.subParams._t = (new Date).getTime().toString(), l.params = JSON.stringify(a.subParams);
        var p = (0, i.getUrlObj)(e),
            c = function(e) {
                var a = o.ttid,
                    t = o.refid,
                    n = o.ali_trackid,
                    r = o.pid,
                    s = o.actparam,
                    l = o.actname,
                    p = o.ad_id,
                    c = o.source_type,
                    u = o.refpid,
                    m = document.cookie.match(/(?:^|\s)cna=([^;]+)(?:;|$)/),
                    d = {
                        from: "h5"
                    };
                return a && (d.ttid = a), t && (d.refid = t), n && (d.ali_trackid = n), r && (d.pid = r), s && (d.actparam = s), l && (d.actname = l), p && (d.ad_id = p), c && (d.source_type = c), u && (d.refpid = u), m && m[1] && (d.h5_uid = m[1]), e && (d = (0, i.dExtend)(d, e)), d
            }(a.point);
        p.params.point = encodeURIComponent(JSON.stringify(c)), o.e && o.type && (p.params.e = o.e, p.params.type = o.type, o.tkFlag && (p.params.tkFlag = o.tkFlag));
        var u = (0, i.getCookie)("tkmb");
        if ("string" == typeof u && 0 < u.length) {
            var m = {},
                d = u.split("&");
            if (d.length)
                for (var f = 0; f < d.length; f++)
                    if (d[f]) {
                        var b = d[f].split("=");
                        m[b[0]] = b[1]
                    }
            var h = m.e,
                y = m.tkFlag,
                v = m.tk_cps_ut;
            v && (p.params.tk_cps_ut = v), (!p.params.e || "uland.taobao.com" !== location.hostname && "pre.uland.taobao.com" !== location.hostname) && h && (p.params.e = h, p.params.type = 2, y && (p.params.tkFlag = y))
        }
        if ("list.tmall.com" == p.hostname && p.params.q) {
            var g = p._params.q;
            delete p._params.q;
            var w = g.split("+");
            (0, i.isChina)(g) && (g = w.map(function(e) {
                return encodeURIComponent(e)
            }).join("+")), l.h5Url = p.toString(), l.h5Url = (0, i.appendParams)(l.h5Url, {
                q: g
            })
        } else l.h5Url = p.toString();
        return l.wh_weex && delete l.wh_weex, l._wx_tpl && delete l._wx_tpl, s ? (Object.keys(l).map(function(e) {
            s.params[e] = l[e]
        }), s.toString()) : (0, i.appendParams)(t, l)
    }
}, function(e, a, t) {
    "use strict";
    var n = t(0),
        i = s(t(8)),
        o = t(1),
        r = s(t(22));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    p.generateProtocol = r.default;
    var l = "https://mobile.tmall.com/universal";

    function p() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        if ("TM" != n.aliapp.appname) {
            e.params = e.params || {}, e.point = e.point || {}, e.point.callType = e.callType;
            var a = (0, r.default)(e),
                t = {
                    package: "com.tmall.wireles"
                };
            switch (e.callType) {
                case "universalLink":
                    if (n.os.isIPhone && n.os.version.gte("9.0")) {
                        var s = (0, o.appendParams)(e.universalLink || l, {
                            ul_redirect: encodeURIComponent(a)
                        });
                        if (e.downloadUrl) {
                            var p = e.downloadUrl.replace(/downloadSrc=[^&]+/, "src=universallink");
                            p.replace(/dl_redirect=[^&]+/, ""), p = (0, o.appendParams)(p, {
                                dl_redirect: encodeURIComponent(a)
                            }), s = s.replace(/downloadSrc=[^&]+/, ""), s = (0, o.appendParams)(s, {
                                redirect: encodeURIComponent(p)
                            })
                        }(0, i.default)(s, "universalLink")
                    } else(0, i.default)(a, "scheme", t);
                    break;
                case "intent":
                    (0, i.default)(a, "intent", t);
                    break;
                case "scheme":
                    (0, i.default)(a, "scheme", t);
                    break;
                default:
                    (0, i.default)(e.targetUrl, "scheme", t)
            }
            return a
        }
    }
    e.exports = p
}, function(e, a, t) {
    "use strict";
    var n, i = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            return a.default = e, a
        }(t(0)),
        o = ((n = t(9)) && n.__esModule, t(1)),
        r = document,
        s = i.params,
        l = i.os,
        p = i.aliapp,
        c = i.thirdapp,
        u = i.browser,
        m = "tmall",
        d = "page.tm/appLink",
        f = {
            action: "ali.open.nav",
            module: "h5",
            bootImage: 0
        },
        b = "tmall",
        h = "page.tm/itemDetail",
        y = "tmall",
        v = "page.tm/shop",
        g = "tmall",
        w = "page.tm/search",
        k = {
            searchType: "item"
        },
        _ = "tmall",
        T = "page.tm/webview";

    function S(e) {
        var a = e.mmstat || "default",
            t = s.ali_trackid || (r.cookie + "").match(/(?:^|\s)tkmb=([^;]+)(?:;|$)/);
        return (e.utskA || "3") + "." + +new Date + "." + function() {
            var e = "other";
            return p ? e = "TB" == p.appname ? "tb" : "JU" == p.appname ? "ju" : "AP" == p.appname ? "alipay" : "DY" == p.appname ? "tbmovie" : "AK" == p.appname ? "alihealth" : "LX" == p.appname ? "alitrip" : "DingTalk" == p.appname ? "dingding" : "moon" == p.appname ? "alimoon" : "ET" == p.appname ? "etao" : "IS" == p.appname ? "aliis" : "FM" == p.appname ? "alifm" : "HTAO" == p.appname ? "alihtao" : "QN" == p.appname ? "aliqn" : "BC" == p.appname ? "baichuan" : "aliapp" : c ? c.isWeibo ? e = "weibo" : c.isToutiao ? e = "newarticle" : c.isSmzdm ? e = "smzdm" : c.isChangba && (e = "changba") : u && (u.isUC ? e = "uc" : u.isQQ && (e = "qq")), e + (l.isIPhone && l.version.gte("9.0") ? "_iOS9" : "")
        }() + "." + (e.utsk ? e.utsk + "-" : "third-") + a + "-" + (t ? "1" : "0")
    }
    e.exports = function(e) {
        return "applink" === e.navType && e.targetUrl ? function(e, a) {
            a.subParams = a.subParams || {};
            var t = (a.scheme || m) + "://" + d,
                n = (0, o.getUrlObj)(t),
                r = (0, o.dExtend)({
                    backURL: s.backURL,
                    packageName: s.packageName
                }, f, {
                    source: a.source || "callTM",
                    appkey: a.appkey || i.appkey
                });
            a.backURL && (r.backURL = a.backURL), a.packageName && (r.packageName = a.packageName), a.subParams._t = (new Date).getTime().toString(), r.params = JSON.stringify(a.subParams);
            var l = (0, o.getUrlObj)(e),
                p = S((0, o.dExtend)({
                    mmstat: a.navType
                }, a.point));
            r._ns = 1, r.ut_sk = p, s.e && s.type && (l.params.e = s.e, l.params.type = s.type, s.tkFlag && (l.params.tkFlag = s.tkFlag));
            var c = (0, o.getCookie)("tkmb");
            if ("string" == typeof c && 0 < c.length) {
                var u = {},
                    b = c.split("&");
                if (b.length)
                    for (var h = 0; h < b.length; h++)
                        if (b[h]) {
                            var y = b[h].split("=");
                            u[y[0]] = y[1]
                        }
                var v = u.e,
                    g = u.tkFlag,
                    w = u.tk_cps_ut;
                w && (l.params.tk_cps_ut = w), (!l.params.e || "uland.taobao.com" !== location.hostname && "pre.uland.taobao.com" !== location.hostname) && v && (l.params.e = v, l.params.type = 2, g && (l.params.tkFlag = g))
            }
            if ("list.tmall.com" == l.hostname && l.params.q) {
                var k = l._params.q;
                delete l._params.q;
                var _ = k.split("+");
                (0, o.isChina)(k) && (k = _.map(function(e) {
                    return encodeURIComponent(e)
                }).join("+")), r.h5Url = l.toString(), r.h5Url = (0, o.appendParams)(r.h5Url, {
                    q: k
                })
            } else r.h5Url = l.toString();
            r.wh_weex && delete r.wh_weex, r._wx_tpl && delete r._wx_tpl;
            return n ? (Object.keys(r).map(function(e) {
                n.params[e] = r[e]
            }), n.toString()) : (0, o.appendParams)(t, r)
        }(e.targetUrl, e) : function(e) {
            var a = "tmall://tab.switch/home";
            switch (e.params = e.params || {}, e.point = e.point || {}, e.navType) {
                case "home":
                    a = (e.scheme || "tmall") + "://tab.switch/home";
                    break;
                case "detail":
                    a = (e.scheme || b) + "://" + h;
                    break;
                case "shop":
                    a = (e.scheme || y) + "://" + v;
                    break;
                case "list":
                    a = (e.scheme || g) + "://" + w, a = (0, o.appendParams)(a, k);
                    break;
                case "internal":
                    a = e.navPage ? "tmall://page.tm/" + e.navPage : e.targetUrl;
                    break;
                case "link":
                    var t = e.targetUrl;
                    t && -1 < t.indexOf("#") && (t = t.replace(/#(.*?)$/, "")), a = (e.scheme || _) + "://" + T, a = (0, o.appendParams)(a, {
                        url: encodeURIComponent(t)
                    })
            }
            var n = (0, o.getUrlObj)(a),
                l = (0, o.dExtend)(s, e.params, {
                    source: e.source || "callTM",
                    appkey: e.appkey || i.appkey,
                    skipSplash: !0
                }),
                p = r.cookie.match(/(?:^|\s)tkmb=([^;]+)(?:;|$)/);
            if (p) {
                var c = p[1],
                    u = /(?:^|&)e=(.*?)(?:&|$)/.test(c) ? encodeURIComponent(RegExp.$1) : "",
                    m = /(?:^|&)tkFlag=(.*?)(?:&|$)/.test(c) ? encodeURIComponent(RegExp.$1) : "";
                l.e && ("uland.taobao.com" === location.hostname || "pre.uland.taobao.com" === location.hostname) || (l.e = u, l.type = 2, l.tkFlag = m)
            }
            e.track ? l.track = e.track : s && s.agentId && s._bind && s.lpt && s.lsid && s.lpid && (l.agentId = s.agentId, l._bind = s._bind, l.lpt = s.lpt, l.lsid = s.lsid, l.lpid = s.lpid);
            var d = S((0, o.dExtend)({
                mmstat: e.navType
            }, e.point));
            l._ns = 1, l.ut_sk = d;
            var f = void 0;
            return f = n ? (Object.keys(l).map(function(e) {
                n.params[e] = l[e]
            }), "detail" === e.navType ? (n.params.itemId = n.params.itemId || n.params.id, n.params.id && delete n._params.id) : "shop" === e.navType && window.g_config && window.g_config.shopId ? n.params.shopId = n.shopId || window.g_config.shopId : "list" === e.navType && l.q && delete n._params.q, n.toString()) : (0, o.appendParams)(a, l), "list" === e.navType && l.q && (f = (0, o.appendParams)(a, {
                keyword: l.q
            })), f
        }(e)
    }
}, function(e, a, t) {
    "use strict";
    var n = t(0),
        i = r(t(8)),
        o = r(t(24));

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function s(e) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n.aliapp || "AP" != n.aliapp.appname) {
            var t = (0, o.default)(e, a),
                r = {
                    package: "com.eg.android.AlipayGphone"
                };
            switch (a.callType) {
                case "scheme":
                    (0, i.default)(t, "scheme", r);
                    break;
                default:
                    (0, i.default)(e, "scheme", r)
            }
            return t
        }
    }
    s.generateProtocol = o.default, e.exports = s
}, function(e, a, t) {
    "use strict";
    var n = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            return a.default = e, a
        }(t(0)),
        i = t(1),
        o = n.params,
        r = {
            appId: "20000067"
        };
    e.exports = function(e, a) {
        var t = (a.scheme || "alipays") + "://platformapi/startapp",
            n = (0, i.getUrlObj)(t),
            s = (0, i.dExtend)(r),
            l = (0, i.getUrlObj)(e);
        return l && (l.params.source = "sb", a.targetUrl && (l.params.targetUrl = a.targetUrl), a.bc_fl_src && (l.params.bc_fl_src = a.bc_fl_src || o.bc_fl_src), a.visa && (l.params.visa = a.visa || o.visa), a.smbSid && (l.params.smbSid = a.smbSid), a.rbbt && (l.params.rbbt = a.rbbt), a.subParams && a.subParams.fid && (l.params.fid = a.subParams && a.subParams.fid)), s.url = l.toString(), n ? (Object.keys(s).map(function(e) {
            n.params[e] = s[e]
        }), n.toString()) : (0, i.appendParams)(t, s)
    }
}, function(e, a, t) {
    "use strict";
    e.exports = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        if (e.packageName)
            if (window.appRouter) window.appRouter(e.packageName, e.path || "/", e.params || {});
            else {
                var a = document.createElement("script");
                a.src = "//statres.quickapp.cn/quickapp/js/routerinline.min.js", a.onload = function() {
                    window.appRouter(e.packageName, e.path || "/", e.params || {})
                }, document.body.appendChild(a)
            }
    }
}, function(e, a, t) {
    "use strict";
    var n = ((0, t(1).getCookie)("cna") || "") + "_" + (new Date).getTime();
    a.smbSid = n
}, function(e, a, t) {
    "use strict";
    var n = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            return a.default = e, a
        }(t(0)),
        i = (t(1), t(26)),
        o = n.os,
        r = n.appkey,
        s = {},
        l = {
            sb_show: {
                logkey: "tmwap.1.3",
                apuri: "sb_show"
            },
            sb_close: {
                logkey: "tmwap.1.4",
                apuri: "sb_click_close"
            },
            sb_redirect_auto: {
                logkey: "tmallacti.201503.1005.5",
                apuri: "sb_auto_envoke"
            },
            sb_redirect_manual: {
                logkey: "tmwap.1.8",
                apuri: "sb_click"
            },
            sb_go_h5: {
                logkey: "tmwap.1.11",
                apuri: "sb_go_download"
            }
        };
    a.setLog = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "CLK";
        if ("tmall" == e.linkKey) {
            if (l[e.ap_uri]) {
                var t = l[e.ap_uri].logkey;
                e.apuri = l[e.ap_uri].apuri, e.mmstat = e.pageType,
                    function(e) {
                        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            t = {},
                            n = a.apuri;
                        if (e && n) {
                            a.apuri && (t.apuri = a.apuri), s.scene && (t.scene = s.scene), a.mmstat && (t.mmstat = a.mmstat), t.ui = a.uiKey || "", t.r = +new Date, t.smbSid = i.smbSid;
                            var o = [];
                            for (var r in t) o.push(r + "=" + encodeURIComponent(t[r]));
                            (new Image).src = "//wgo.mmstat.com/" + e + "?" + o.join("&") + "&t=" + (new Date).getTime()
                        }
                    }(t, e)
            }
        } else ! function() {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "CLK",
                t = {
                    platform: o.name,
                    smbSid: i.smbSid
                },
                l = e.ap_uri,
                p = e.sceneType,
                c = e.pageType,
                u = e.bizKey,
                m = e.linkKey,
                d = e.source || "sb",
                f = e.wkt,
                b = e.appkey || r,
                h = e.bc_fl_src || n.params.bc_fl_src,
                y = e.visa || n.params.visa,
                v = e.uiKey,
                g = e.cost_t;
            if (l) {
                t.apuri = l, t.source = d, u && (t.bizKey = u), m && (t.linkKey = m), p && (t.sceneType = p), c && (t.page = c), f && (t.wkt = f), h && (t.bc_fl_src = h), y && (t.visa = y), v && (t.uiKey = v), g && (t.cost_t = g), t.rbbt = window.smbBizConfig && window.smbBizConfig.rbbt, t.appkey = b, t.logtype = 2, Object.keys(s).forEach(function(e) {
                    t[e] = t[e] || s[e]
                });
                var w = [];
                for (var k in t) w.push(k + "=" + encodeURIComponent(t[k]));
                window.goldlog && goldlog.record ? window.goldlog.record("/sb.sbp.action", a, w.join("&"), "H1451942832") : function(e) {
                    var a = document.createElement("img");
                    a.style.cssText = "display:none", a.src = e, document.body.appendChild(a)
                }("https://gm.mmstat.com/sb.sbp.action?" + w.join("&") + "&t=" + (new Date).getTime())
            }
        }("/sb.sbp.action", e, a)
    }, a.setBizParams = function(e) {
        Object.keys(e).forEach(function(a) {
            s[a] = e[a]
        })
    }
}, , , , , , , , , , , , , , , , , , , , , , , , function(e, a, t) {
    "use strict";
    t(0);
    var n = p(t(52)),
        i = p(t(55)),
        o = p(t(58)),
        r = t(15),
        s = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            return a.default = e, a
        }(t(27)),
        l = t(26);

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = (0, r.getLoaderProps)(),
        u = s.setLog,
        m = s.setBizParams,
        d = {
            getInstance: i.default,
            getBizText: n.default,
            sbLogic: function(e) {
                var a = (0, r.getSmbBizConfig)(),
                    t = e.appkey || a.appkey || t;
                if (!e || !(0, r.activeControl)().isActive) return null;
                a.track && m && m({
                    scene: "liuliangbao"
                });
                var n = (0, r.invokeControl)(),
                    s = "" + (n.isInvoke || n.isInvokeDay && !b(n.fatigue) ? 1 : 0) + (n.isShow ? 1 : 0) + 0,
                    l = a.content && a.content.contentType || "0",
                    p = a.content && a.content.data && a.content.data.map(function(e) {
                        return e.id
                    }).join("_") || "0";
                if (a.rbbt = "bc." + c.pageCode + "." + parseInt(s, 2) + "." + l + "." + p, u({
                        ap_uri: "sb_init",
                        appkey: t,
                        pageType: e.pageType,
                        sceneType: e.sceneType
                    }, "EXP"), "mainIndex" == e.pageType) {
                    var h = e.href,
                        y = location.search;
                    h && 0 < h.indexOf("?") && (y = h.substr(h.indexOf("?"))), e.href = "//m.taobao.com/index.htm" + y
                } else "mainMyTaobao" == e.pageType ? e.href = "//my.m.taobao.com/myTaobao.htm" : e.href = e.href || window.location.href;
                d.bizText = e;
                var v = {
                    bizKey: c.bizKey,
                    linkKey: e.linkKey || c.bizKey,
                    href: e.href || window.location.href,
                    pageType: e.pageType,
                    sceneType: e.sceneType,
                    appkey: e.appkey,
                    backURL: e.backURL,
                    packageName: e.packageName,
                    callType: e.callType,
                    scheme: e.scheme
                };
                e.ports && (v.ports = e.ports), e.surl && (v.surl = e.surl), e.unlUrl && (v.unlUrl = e.unlUrl), "quickapp" === e.linkKey && (v.path = e.path || "/", v.params = e.params || {});
                var g = (0, i.default)(v);
                return n.isInvoke ? n.showConfirmText && !b(1, "SMB_ALIPAY_CONFIRM") ? (f("SMB_ALIPAY_CONFIRM"), confirm(n.showConfirmText) && g && g.redirect()) : g && g.redirect() : n.isInvokeDay && !b(n.fatigue) && (f("SMB_CLOUD"), n.isInvoke = !0, g && g.redirect()), (0, o.default)(g), g
            },
            render: function(e) {
                if (!e || !(0, r.activeControl)().isActive) return null;
                var a = (0, r.invokeControl)();
                a.isShow ? e.hide = !1 : e.hide = !0, e.bizKey = e.bizKey || c.bizKey;
                var t = (0, i.default)(e);
                return t ? (a.isShow ? (t.isHide = !1, t && t.show()) : (t.isHide = !0, t && t.hide()), t) : void 0
            },
            setLog: u
        };

    function f(e) {
        try {
            var a = window.localStorage;
            a.setItem(e + "_DATE", Date.now());
            var t = a.getItem(e + "_FATIGUE"),
                n = t ? parseInt(t) + 1 : 1;
            a.setItem(e + "_FATIGUE", n)
        } catch (e) {}
    }

    function b(e, a) {
        var t = 1 < arguments.length && void 0 !== a ? a : "SMB_CLOUD",
            n = void 0,
            i = void 0,
            o = void 0,
            r = !1;
        try {
            var s = window.localStorage;
            n = s.getItem(t + "_DATE"), o = s.getItem(t + "_FATIGUE"), n && (n = parseInt(n, 10), (i = new Date).setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0), parseInt(n) > i.getTime() && parseInt(o) >= parseInt(e) && (r = !0))
        } catch (e) {}
        return r
    }
    u({
        ap_uri: "sb_load",
        bizKey: c.bizKey,
        pageCode: c.pageCode,
        smbSid: l.smbSid
    }, "EXP"), e.exports = d
}, function(e, a, t) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = t(0),
        o = t(1),
        r = t(15),
        s = {
            banner: {
                type: "banner",
                href: "",
                downloadUrl: "",
                icon: "",
                text: "",
                title: "",
                subTitle: "",
                bannerPic: ""
            },
            pop: {
                type: "pop",
                href: "",
                downloadUrl: "",
                icon: "",
                text: "",
                title: "",
                subTitle: "",
                popImg: ""
            },
            tip: {
                type: "tip",
                href: "",
                downloadUrl: "",
                icon: "",
                text: ""
            }
        };

    function l(e, a, t) {
        var n = (0, r.getLoaderProps)(),
            o = (0, r.getSmbBizConfig)(),
            l = o.protocolEnum && o.protocolEnum[a.type] || {},
            c = p(),
            u = t.href || o.content && o.content.href || i.os.isIOS && t.iphonehref || t.androidhref || window.location.href;
        if (u && u != location.href) {
            var m = u.split("?"),
                d = m[0],
                f = 1 < m.length ? m[1] : "",
                b = location.search.slice(1),
                h = f && b && f + "&" + b || f || b;
            if (h)
                if (0 < d.indexOf("#")) {
                    var y = d.split("#");
                    u = y[0] + "?" + h + "#" + y[1]
                } else u = d + "?" + h
        }
        var v = {};
        return Object.keys(s[a.type]).forEach(function(e) {
            t[e] && (v[e] = t[e])
        }), v.href = u, v.confHref = u, v.pageType = e, v.sceneType = c, v.type = a.type, v.bizKey = n.bizKey, v.linkKey = l.linkKey || t.linkKey, Object.keys(l).map(function(e) {
            v[e] = v[e] || l[e]
        }), a.styles && (v.styles = a.styles), v
    }

    function p() {
        var e = "default";
        return "1" === (0, o.getCookie)("ntm") && (e = "fresh"), e
    }

    function c(e) {
        return 0 === Object.keys(e).filter(function(a) {
            return "" !== e[a]
        }).length
    }
    e.exports = function(e) {
        var a = (0, r.getLoaderProps)(),
            t = (0, r.getSmbBizConfig)();
        return (e = a.pageCode || e) ? function(e, a) {
            var t = (0, r.getSmbBizConfig)(),
                i = a.theme || [],
                o = p(),
                s = {
                    pageType: e,
                    sceneType: o,
                    theme: {}
                };
            return i.forEach(function(a) {
                if (a.type && a.config && "object" == n(a.config))
                    if (a.config instanceof Array)
                        for (var t = 0, i = a.config.length; t < i; t++) {
                            var r = a.config[t];
                            if (!c(r) && r.type.toLowerCase() === o) {
                                s.theme[a.type] = l(e, a, r);
                                break
                            }
                        } else s.theme[a.type] = l(e, a, a.config)
            }), "mainShop" == e && s.theme.banner && (s.href = s.theme.banner.href), s.linkKey = t.autoLinkKey, s.callType = t.callType, s.scheme = t.scheme, t.path && (s.path = t.path || ""), t.params && (s.params = t.params || {}), t.ports && t.surl && (s.ports = t.ports, s.surl = t.surl), t.unlUrl && (s.unlUrl = t.unlUrl), s
        }(e, t.pageConf || {}) : {
            error: !0
        }
    }
}, function(e, a, t) {
    "use strict";
    e.exports = function() {
        var e = {
            isActive: !0
        };
        return window["@ali/lib-smartbanner-plus-loader"] && window["@ali/lib-smartbanner-plus-loader"].activeControl && (e = window["@ali/lib-smartbanner-plus-loader"].activeControl(e)), e
    }
}, function(e, a, t) {
    "use strict";
    e.exports = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return window["@ali/lib-smartbanner-plus-loader"] && window["@ali/lib-smartbanner-plus-loader"].invokeControl ? window["@ali/lib-smartbanner-plus-loader"].invokeControl(e) : {
            isInvoke: !1,
            isShow: !1,
            isInvokeDay: !0,
            fatigue: 10
        }
    }
}, function(e, a, t) {
    "use strict";
    var n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = (n = t(56)) && n.__esModule ? n : {
            default: n
        },
        r = t(15),
        s = t(1),
        l = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            return a.default = e, a
        }(t(27)).setBizParams;

    function p(e, a, t, n) {
        if (a.href && a.href.replace(/^(http|https):/, "") !== window.location.href.replace(/^(http|https):/, "") && (a.theme[t].href = a.href), a.theme[t].confHref && "mainShop" !== a.pageType && (a.theme[t].href = a.theme[t].confHref, n && (a.href = a.theme[t].href)), !n) {
            var i = {};
            i[t] = a.hide, a.theme[t].hide = !0, e.subSmbInstance[t] = c(a.theme[t]), e.subSmbInstance[t] && (e.subSmbInstance[t].isHide = i[t])
        }
        "mainDetail" == a.pageType && 0 < a.href.indexOf("/awp/core/detail.htm") && (a.theme[t].needTps = !0, a.theme[t].tpsParams = {
            targetUrl: window.location.href,
            title: document.title || ""
        })
    }

    function c(e) {
        var a = (0, r.getSmbBizConfig)();
        a.autoLinkKey === e.linkKey && ["appkey", "backURL", "callType", "scheme", "unlUrl", "ports", "surl"].map(function(t) {
            if (!e[t] && a[t]) {
                if ("callType" === t && "portListen" == a.callType && e.href !== location.href) return;
                e[t] = a[t]
            }
        }), e.navType = (!e.href || e.href == location.href) && {
            mallIndex: "home",
            mallDetail: "detail",
            mallShop: "shop",
            mallSearch: "list"
        }[e.pageType] || "link";
        var t = void 0;
        return "banner" == e.type ? t = a.content && "object" == i(a.content) && 0 < Object.keys(a.content).length && !e.bannerPic ? (l && l({
            contentType: a.content.contentType
        }), (0, r.getSmartbannerUI)(o.default, e, a.content)) : (0, r.getSmartbannerUI)(o.default, e) : "pop" == e.type ? t = (0, r.getSmartpopUI)(o.default, e) : "tip" == e.type ? t = (0, r.getSmarttipUI)(o.default, e) : (t = new o.default(e)).uiKey && t.show(), t
    }
    e.exports = function(e) {
        var a = void 0,
            t = void 0;
        if ("object" === (void 0 === e ? "undefined" : i(e)))
            if (e.theme && 0 < Object.keys(e.theme).length) {
                if (e.theme.banner ? t = "banner" : e.theme.pop ? t = "pop" : e.theme.tip && (t = "tip"), "banner" === t) {
                    var n = {
                        position: "",
                        showCB: "",
                        hideCB: "",
                        hide: ""
                    };
                    Object.keys(e).forEach(function(a) {
                        void 0 !== n[a] && (e.theme[t][a] = e[a])
                    })
                }
                if (p(a, e, t, !0), !(a = c(e.theme[t]))) return;
                1 < Object.keys(e.theme).length && (a.subSmbInstance = a.subSmbInstance || {}, Object.keys(e.theme).forEach(function(n) {
                    t !== n && p(a, e, n)
                })), "banner" === a.type && a.subSmbInstance && a.subSmbInstance.tip && function(e) {
                    var a = document.body.getBoundingClientRect().top;
                    window.addEventListener("touchstart", function(e) {
                        a = document.body.getBoundingClientRect().top
                    }), window.addEventListener("touchend", function(t) {
                        e.calClose() || e.isHide || (Math.abs(a - document.body.getBoundingClientRect().top) > 5 * e.dpr && (a > document.body.getBoundingClientRect().top ? e.hide(function() {
                            e.subSmbInstance.tip && e.subSmbInstance.tip.show()
                        }) : e.show(function() {
                            e.subSmbInstance.tip && e.subSmbInstance.tip.hide()
                        })), a = document.body.getBoundingClientRect().top)
                    })
                }(a)
            } else {
                var o = (0, r.getSmbBizConfig)(),
                    l = o.pageConf && o.pageConf.act || {},
                    u = (0, s.dExtend)(l, e);
                a = c(u)
            }
        return a
    }
}, function(e, a, t) {
    "use strict";

    function n(e, a) {
        for (var t = 0; t < a.length; t++) {
            var n = a[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var i, o = t(0),
        r = t(1),
        s = (i = t(16)) && i.__esModule ? i : {
            default: i
        },
        l = t(15),
        p = t(26),
        c = m(t(27)),
        u = m(t(57));

    function m(e) {
        if (e && e.__esModule) return e;
        var a = {};
        if (null != e)
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
        return a.default = e, a
    }
    var d = u.getDownloadUrl,
        f = u.getUniversalLink,
        b = c.setLog,
        h = 0,
        y = (function(e, a, t) {
            a && n(e.prototype, a), t && n(e, t)
        }(v, [{
            key: "redirect",
            value: function(e, a) {
                var t = 1 < arguments.length && void 0 !== a ? a : {},
                    n = this,
                    i = "sb_redirect_" + (e ? "manual" : "auto"),
                    l = t.linkKey || n.linkKey,
                    c = t.href || n.callAppOpts.targetUrl,
                    u = function(e, a) {
                        var t = (0, r.dExtend)({}, e.callAppOpts, a),
                            n = (0, r.getUrlObj)(t.targetUrl);
                        return n && (n.params.bc_fl_src && (t.bc_fl_src = n.params.bc_fl_src), n.params.visa && (t.visa = n.params.visa)), a.scheme && (t.scheme = a.scheme), t.callType = t.callType || "scheme", o.os.isIOS && "portListen" == t.callType && (t.callType = "scheme"), t.point = t.point || {}, t.point.ap_uri = a.ap_uri, t.point.page = e.pageType, "tmall" == e.linkKey && (t.point.utsk = a.utsk, t.point.mmstat = e.pageType), "portListen" == t.callType && (t.exp = {
                            params: {
                                appkey: t.appkey,
                                backURL: t.backURL,
                                packageName: t.packageName,
                                bc_fl_src: t.bc_fl_src,
                                visa: t.visa
                            },
                            point: t.point
                        }), t
                    }(n, {
                        ap_uri: i,
                        linkKey: l,
                        targetUrl: c,
                        utsk: e ? "click" : "auto"
                    }),
                    m = {
                        ap_uri: i,
                        appkey: u.appkey,
                        pageType: n.pageType,
                        sceneType: n.sceneType,
                        linkKey: l,
                        bizKey: n.bizKey
                    };
                u.bc_fl_src && (m.bc_fl_src = u.bc_fl_src), u.visa && (m.visa = u.visa), t.actId && (m.actId = t.actId), t.not2h5 && (u.not2h5 = !0), t.downloadUrl && (u.downloadUrl = t.downloadUrl), t.redirectUrl && (u.redirectUrl = t.redirectUrl), "tmall" == l && t.navType && (u.navType = t.navType), e || u.callType && "universalLink" != u.callType ? e && o.os.isAndroid && "universalLink" == u.callType ? u.callType = "scheme" : e && o.os.isIOS && "portListen" == u.callType && (u.callType = "scheme") : u.callType = "scheme", m.uiKey = n.uiKey, m.wkt = u.callType, b(m, "CLK"), e && !u.not2h5 ? function(e, a, t, n) {
                    var i = d(a, {
                        downloadUrl: t.downloadUrl || e.options.downloadUrl || "",
                        pageType: e.pageType,
                        sceneType: e.sceneType,
                        smbSid: p.smbSid
                    });
                    "universalLink" === t.callType && o.os.isIPhone && o.os.version.gte("9.0") && (t.redirectUrl = t.redirectUrl || i || "");
                    var l = (0, s.default)(a, t);
                    if ("universalLink" !== t.callType) {
                        var c = t.redirectUrl ? 500 : e.timeout,
                            u = void 0;
                        t.redirectUrl ? u = t.redirectUrl : i && (t.downloadUrl = i, u = n.isDirect2Download ? t.downloadUrl : t.downloadUrl && (0, r.appendParams)(t.downloadUrl, {
                            redirectUrl: encodeURIComponent(l)
                        })), e.options.needTps ? e.showTaopass((0, r.dExtend)({
                            downloadUrl: i
                        }, e.options.tpsParams)) : e.manualRedirectTimer = window.setTimeout(function() {
                            if (u) {
                                var n = {
                                    ap_uri: "sb_go_h5",
                                    appkey: t.appkey,
                                    pageType: e.pageType,
                                    sceneType: e.sceneType,
                                    linkKey: a,
                                    bizKey: e.bizKey,
                                    source: "sb",
                                    uiKey: e.uiKey
                                };
                                b(n, "CLK"), window.setTimeout(function() {
                                    window.location.href = u
                                }, 300)
                            }
                        }, c)
                    }
                }(n, l, u, {
                    isDirect2Download: t.isDirect2Download
                }) : u.not2h5 ? ((0, s.default)(l, u), n.manualRedirectTimer = window.setTimeout(function() {
                    n["callback" + n.manualRedirectTimer](!1), delete n["callback" + n.manualRedirectTimer]
                }, n.timeout), n["callback" + n.manualRedirectTimer] = t.callback || function() {}) : ((0, s.default)(l, u), n.autoRedirectStart = +new Date, n.autoCount = n.autoCount ? n.autoCount + 1 : 1, n.autoRedirectTimer = window.setTimeout(function() {
                    1 === n.autoCount && b({
                        ap_uri: "sb_auto_err",
                        appkey: u.appkey,
                        pageType: n.pageType,
                        sceneType: n.sceneType,
                        linkKey: l,
                        bizKey: n.bizKey
                    }, "CLK")
                }, n.timeout))
            }
        }, {
            key: "show",
            value: function(e) {
                var a = this;
                a.iClose || a.isHide || (a.smartDom && (a.smartDom.style.display = "block"), h || b({
                    ap_uri: "sb_show",
                    appkey: a.callAppOpts.appkey,
                    pageType: a.pageType,
                    sceneType: a.sceneType,
                    linkKey: a.linkKey,
                    bizKey: a.bizKey,
                    uiKey: a.uiKey
                }, "EXP"), h += 1, a.showCount || b({
                    ap_uri: "sb_ui_show",
                    appkey: a.callAppOpts.appkey,
                    pageType: a.pageType,
                    sceneType: a.sceneType,
                    linkKey: a.linkKey,
                    bizKey: a.bizKey,
                    uiKey: a.uiKey
                }, "EXP"), a.showCount = a.showCount + 1, e && e() || a.showCB && a.showCB())
            }
        }, {
            key: "hide",
            value: function(e, a) {
                var t = this;
                "function" == typeof e && (a = e, e = void 0), t.smartDom && (t.smartDom.style.display = "none"), e && b({
                    ap_uri: "sb_close",
                    appkey: t.callAppOpts.appkey,
                    pageType: t.pageType,
                    sceneType: t.sceneType,
                    linkKey: t.linkKey,
                    bizKey: t.bizKey,
                    uiKey: t.uiKey
                }, "CLK"), a && a() || t.hideCB && t.hideCB()
            }
        }, {
            key: "calClose",
            value: function(e) {
                var a = this;
                try {
                    var t = window.localStorage;
                    if (!t) return "pop" == a.type || void 0;
                    var n = "SMB_CLOSE_CONF_" + a.linkKey + "_" + (a.type || "default"),
                        i = t[n] ? JSON.parse(t[n]) : {};
                    if (e) a.iClose = !0, i.closeDate = Date.now(), i.closeCount = i.closeCount ? parseInt(i.closeCount) + 1 : 1;
                    else {
                        var o = i.closeDate;
                        if (o) {
                            o = parseInt(o, 10);
                            var r = Date.now(),
                                s = new Date;
                            s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0), o < s.getTime() ? i.closeCount = 0 : a.limitPeriod && r - o > 6e4 * a.limitPeriod ? i.closeCount = 0 : i.closeCount && i.closeCount >= a.limitCount && (a.iClose = !0)
                        }
                    }
                    t[n] = JSON.stringify(i)
                } catch (e) {}
                return a.iClose
            }
        }, {
            key: "showTaopass",
            value: function(e) {
                var a = this,
                    t = e || {},
                    n = (0, l.getTaopass)(),
                    i = {
                        ap_uri: "sb_taopass_show",
                        appkey: a.callAppOpts.appkey,
                        pageType: a.pageType,
                        sceneType: a.sceneType,
                        linkKey: a.linkKey,
                        bizKey: a.bizKey,
                        uiKey: a.uiKey
                    };
                n && (a.taopassInstance ? (b(i, "EXP"), a.taopassInstance.show()) : a.taopassInstance = new n(t, function() {
                    b(i, "EXP"), a.taopassInstance.show()
                }))
            }
        }]), v);

    function v() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        ! function(e, a) {
            if (!(e instanceof v)) throw new TypeError("Cannot call a class as a function")
        }(this);
        var a = this,
            t = (0, l.getSmbBizConfig)();
        a.smbBizConfig = t, a.uiKey = e.uiKey || a.uiKey, a.showCount = 0, a.limitCount = e.limitCount || ("pop" === a.type ? 1 : 3), a.limitPeriod = e.limitPeriod, a.callAppOpts = {
                source: "sb",
                appkey: e.appkey || t.appkey || o.appkey,
                smbSid: p.smbSid,
                rbbt: t.rbbt,
                params: e.params || {},
                subParams: {}
            }, a.bizKey = e.bizKey, a.pageType = e.pageType, a.sceneType = e.sceneType, a.timeout = e.timeout || 3e3, a.linkKey = e.linkKey || a.bizKey, a.manualRedirectTimer = null,
            function(e, a) {
                var t = (e.options = a).backURL || e.smbBizConfig.backURL || "";
                t && (e.callAppOpts.backURL = t);
                var n = a.packageName || e.smbBizConfig.packageName || "",
                    i = a.path || e.smbBizConfig.path || "";
                n && (e.callAppOpts.packageName = n), i && (e.callAppOpts.path = i), a.callType && (e.callAppOpts.callType = a.callType), a.scheme && (e.callAppOpts.scheme = a.scheme), a.surl && (e.callAppOpts.surl = a.surl), a.ports && (e.callAppOpts.ports = a.ports), e.callAppOpts.universalLink = a.unlUrl || e.smbBizConfig.unlUrl || f(e.pageType), a.navType && (e.callAppOpts.navType = a.navType), a.navPage && (e.callAppOpts.navPage = a.navPage), e.smbBizConfig.track && (e.callAppOpts.track = e.smbBizConfig.track), a.href ? e.callAppOpts.targetUrl = a.href : e.callAppOpts.targetUrl = window.location.href, e.smbBizConfig.fid && (e.callAppOpts.subParams.fid = e.smbBizConfig.fid), e.smbBizConfig.mtopCostTime && (e.callAppOpts.subParams.mtopCostTime = e.smbBizConfig.mtopCostTime), e.uiKey && (e.callAppOpts.subParams.uiKey = e.uiKey)
            }(a, e),
            function(e) {
                window.addEventListener("blur", function() {
                    if (e.manualRedirectTimer) e["callback" + e.manualRedirectTimer] && e["callback" + e.manualRedirectTimer](!0), window.clearTimeout(e.manualRedirectTimer), e.manualRedirectTimer = null;
                    else if (e.autoRedirectStart && !e.autoRedirectEnd) {
                        e.autoRedirectEnd = +new Date;
                        var a = {
                            ap_uri: "sb_auto_suc",
                            appkey: e.callAppOpts.appkey,
                            pageType: e.pageType,
                            sceneType: e.sceneType,
                            linkKey: e.linkKey,
                            bizKey: e.bizKey,
                            cost_t: e.autoRedirectEnd - e.autoRedirectStart
                        };
                        b(a, "CLK")
                    }
                }), document.addEventListener("visibilitychange", function() {
                    if (document.hidden)
                        if (e.manualRedirectTimer) e["callback" + e.manualRedirectTimer] && e["callback" + e.manualRedirectTimer](!0), window.clearTimeout(e.manualRedirectTimer), e.manualRedirectTimer = null;
                        else if (e.autoRedirectStart && !e.autoRedirectEnd) {
                        e.autoRedirectEnd = +new Date;
                        var a = {
                            ap_uri: "sb_auto_suc",
                            appkey: e.callAppOpts.appkey,
                            pageType: e.pageType,
                            sceneType: e.sceneType,
                            linkKey: e.linkKey,
                            bizKey: e.bizKey,
                            cost_t: e.autoRedirectEnd - e.autoRedirectStart
                        };
                        b(a, "CLK")
                    }
                })
            }(a)
    }
    e.exports = y
}, function(e, a, t) {
    "use strict";
    var n = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t]);
            return a.default = e, a
        }(t(0)),
        i = t(1),
        o = n.params,
        r = {
            taobao: "//h5.m.taobao.com/bcec/downloadTaobao.html",
            tmall: "//pages.tmall.com/wow/mit/act/download"
        },
        s = {
            taobao: "https://b.mashort.cn/ulk/taobao",
            tmall: "https://mobile.tmall.com/universal"
        };
    a.getDownloadUrl = function(e, a) {
        var t = a.downloadUrl || r[e] || "",
            n = (0, i.getUrlObj)(t),
            s = "";
        return n && ("taobao" == e && n.path && t.indefOf(r.taobao) ? (n.params.pageType = a.pageType, n.params.sceneType = a.sceneType, n.params.smbSid = a.smbSid, n.params.need_call = !0) : "tmall" == e && (n.params.needCall = n.params.needCall || "0", n.params.src = a.downloadSrc || n.params.src || "wapicon", a.schemeUrl && (n.params.dl_redirect = encodeURIComponent(a.schemeUrl)), o && o.agentId && o._bind && o.lpt && o.lsid && o.lpid && (n.params.agentId = o.agentId, n.params._bind = o._bind, n.params.lpt = o.lpt, n.params.lsid = o.lsid, n.params.lpid = o.lpid)), Object.keys(n._params).map(function(e) {
            n.params[e] = decodeURIComponent(n.params[e])
        }), s = n.toString()), s
    }, a.getUniversalLink = function(e) {
        return s[e] || ""
    }
}, function(e, a, t) {
    "use strict";
    e.exports = function(e) {
        var a = {},
            t = (new Date).getTime(),
            n = document.body.getBoundingClientRect().top;
        window.addEventListener("touchstart", function(e) {
            t = (new Date).getTime(), n = document.body.getBoundingClientRect().top
        }, !0), window.addEventListener("touchend", function(i) {
            var o = (new Date).getTime();
            if (Math.abs(n - document.body.getBoundingClientRect().top) < 10 && o - t < 300) {
                var r = i.target,
                    s = {},
                    l = function e(a) {
                        if (a.parentElement) {
                            var t = a && a.attributes;
                            return t && Array.prototype.some.call(t, function(e) {
                                if ("smbact-id" == e.nodeName && e.value) return !0
                            }) ? t : e(a.parentElement)
                        }
                        return !1
                    }(r);
                l && Array.prototype.map.call(l, function(e) {
                    s[e.nodeName] = e.value
                });
                var p = s["smbact-id"];
                if (p) {
                    var c = s["smbact-linkkey"],
                        u = s["smbact-href"],
                        m = s["smbact-redirect"],
                        d = s["smbact-serial"];
                    if (c) {
                        var f = {
                            actId: p,
                            linkKey: c,
                            href: u
                        };
                        "tmall" == c && (f.navType = "link"), d && ("force" == d ? (i.preventDefault(), i.stopPropagation()) : (a[p] = a[p] || 1, a[p] <= 1 && (i.preventDefault(), i.stopPropagation()), a[p] = a[p] + 1)), d && m ? f.downloadUrl = m : f.not2h5 = !0, e.redirect(!0, f)
                    }
                }
            }
        }, !0)
    }
}]);