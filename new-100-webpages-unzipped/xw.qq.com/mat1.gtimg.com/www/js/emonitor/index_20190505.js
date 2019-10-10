! function(e, r) {
    "object" == typeof exports && "undefined" != typeof module ? r(exports) : "function" == typeof define && define.amd ? define(["exports"], r) : r(e.emonitor = {})
}(this, function(e) {
    "use strict";
    var r = Object.prototype.toString,
        t = Object.prototype.hasOwnProperty,
        n = function(e) {
            return "[object Array]" === r.call(e)
        },
        o = function(e) {
            return "[object Object]" === r.call(e)
        },
        i = function(e) {
            return "string" == typeof e
        },
        a = function(e) {
            return "function" == typeof e
        },
        s = function(e, r) {
            return t.call(e, r)
        },
        c = function(e) {
            if (!e) return {};
            var r = document.createElement("a");
            return r.href = e, {
                host: r.host,
                path: r.pathname,
                hostname: r.hostname,
                protocol: r.protocol.slice(0, -1)
            }
        },
        d = {
            duration: "delay",
            name: "resurl",
            type: "type"
        },
        u = ["css", "script", "img", "video", "audio"],
        p = ["cdn", "cgi"],
        l = ["s_path", "s_uuid", "s_traceid", "s_guid", "s_appid", "s_vuserid", "hc_pgv_pvid", "s_omgid", "err_desc"],
        m = (function() {
            function e(e) {
                this.value = e
            }

            function r(r) {
                function t(o, i) {
                    try {
                        var a = r[o](i),
                            s = a.value;
                        s instanceof e ? Promise.resolve(s.value).then(function(e) {
                            t("next", e)
                        }, function(e) {
                            t("throw", e)
                        }) : n(a.done ? "return" : "normal", a.value)
                    } catch (e) {
                        n("throw", e)
                    }
                }

                function n(e, r) {
                    switch (e) {
                        case "return":
                            o.resolve({
                                value: r,
                                done: !0
                            });
                            break;
                        case "throw":
                            o.reject(r);
                            break;
                        default:
                            o.resolve({
                                value: r,
                                done: !1
                            })
                    }(o = o.next) ? t(o.key, o.arg): i = null
                }
                var o, i;
                this._invoke = function(e, r) {
                    return new Promise(function(n, a) {
                        var s = {
                            key: e,
                            arg: r,
                            resolve: n,
                            reject: a,
                            next: null
                        };
                        i ? i = i.next = s : (o = i = s, t(e, r))
                    })
                }, "function" != typeof r.return && (this.return = void 0)
            }
            "function" == typeof Symbol && Symbol.asyncIterator && (r.prototype[Symbol.asyncIterator] = function() {
                return this
            }), r.prototype.next = function(e) {
                return this._invoke("next", e)
            }, r.prototype.throw = function(e) {
                return this._invoke("throw", e)
            }, r.prototype.return = function(e) {
                return this._invoke("return", e)
            }
        }(), function(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }),
        f = function() {
            function e(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(r, t, n) {
                return t && e(r.prototype, t), n && e(r, n), r
            }
        }(),
        h = Object.assign || function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            return e
        },
        v = function() {},
        g = function(e) {
            var r = e.name,
                t = e.url,
                n = void 0 === t ? window.location.href : t;
            r = r.replace(/[\[\]]/g, "\\$&");
            var o = new RegExp("[?&]" + r + "(=([^&#]*)|&|#|$)").exec(n);
            return o && o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : ""
        },
        y = function(e) {
            for (var r = encodeURIComponent(e) + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                for (var o = t[n];
                    " " === o.charAt(0);) o = o.substring(1, o.length);
                if (0 === o.indexOf(r)) return decodeURIComponent(o.substring(r.length, o.length))
            }
            return null
        },
        w = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return Math.random() <= e
        },
        _ = function(e, r, t) {
            var n = null;
            return function() {
                for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                var s = this;
                clearTimeout(n), n = setTimeout(function() {
                    e.apply(s, i), "function" == typeof t && t()
                }, r)
            }
        },
        b = function(e) {
            var r = [];
            for (var t in e) r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return r.join("&")
        },
        S = function(e) {
            var r = e.baseUrl,
                t = e.data,
                n = e.method,
                o = void 0 === n ? "GET" : n;
            if ("GET" === o) {
                var i = new Image;
                i.onerror = function() {
                    i = null
                }, i.onload = function() {
                    i = null
                }, i.src = r + "&" + b(t)
            } else if ("POST" === o) try {
                var a = null;
                (a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", r, !0), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.send(b(t))
            } catch (e) {
                console.warn("xmlhttp error", e)
            }
        },
        x = function(e) {
            var r = [];
            return n(e) && e.forEach(function(e) {
                var t = {};
                for (var n in e)
                    if (d[n] && (t[d[n]] = e[n], "resurl" === d[n])) {
                        var o = c(e[n]),
                            i = o.hostname,
                            a = o.path;
                        t.reshost = i, t.respath = a, t.httpcode = 200
                    }
                r.push(t)
            }), r
        },
        E = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = {},
                n = [];
            if (o(r))
                for (var i in r) - 1 !== l.indexOf(String(i)) ? (t[i] = r[i], n.push(i)) : console.warn(i, "could not be modify.");
            return h({}, e, t)
        },
        k = function() {
            var e = "";
            try {
                if (e = window.localStorage.getItem("emonitor.hc_pgv_pvid")) return e;
                var r = (new Date).getTime();
                return e = "ek" + [r, Math.floor(r * Math.random() * Math.random()).toString().slice(-5)].join(""), window.localStorage.setItem("emonitor.hc_pgv_pvid", e), e
            } catch (r) {
                return console.warn("emonitor.hc_pgv_pvid get error", r), e
            }
        },
        T = function(e, r) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                n = void 0;
            return String(r).split(".").forEach(function(r) {
                try {
                    n = void 0 !== n ? n[r] : e[r]
                } catch (e) {
                    n = void 0
                }
            }), void 0 === n ? t : n
        },
        M = function(e) {
            var r = e.data,
                t = void 0 === r ? {} : r,
                a = e.path,
                s = void 0 === a ? "" : a,
                c = void 0;
            if (o(t)) {
                if (i(s)) return T(t, s, "");
                if (n(s)) return s.forEach(function(e) {
                    if ("" !== T(t, e, "")) return c = T(t, e), !1;
                    c = ""
                }), c
            }
            return ""
        },
        O = function(e) {
            var r = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}) || {},
                t = r.code,
                n = r.msg,
                i = {};
            if (o(e)) i = e;
            else try {
                i = JSON.parse(e)
            } catch (e) {
                i = {}
            }
            return {
                bizcode: M({
                    data: i,
                    path: t
                }),
                bizmsg: M({
                    data: i,
                    path: n
                })
            }
        },
        j = function(e) {
            var r = "";
            if (!i(e)) return console.warn("name is not string"), r;
            try {
                return 0 === (r = g({
                    name: e
                })).length && (r = y(e) || ""), r
            } catch (e) {
                return console.error("Automatically get the value of the corresponding name from the url or cookie " + e), r
            }
        },
        C = navigator.userAgent,
        Q = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
                r = "unknown",
                t = "unknown",
                n = "unknown",
                o = "unknown",
                i = "unknown",
                a = e.toLowerCase();
            if (a.indexOf("windows") > -1 ? i = "windows" : a.indexOf("linux") > -1 ? i = "linux" : a.indexOf("mac") > -1 && (i = "mac"), window.opera) o = window.opera.version(), t = window.opera.version(), n = "opera";
            else if (/AppleWebKit\/(\S+)/.test(e))
                if (o = RegExp.$1, n = "webkit", /Chrome\/(\S+)/.test(e)) t = RegExp.$1, r = "chrome";
                else if (/Version\/(\S+)/.test(e)) t = RegExp.$1, r = "safari";
            else {
                var s = parseFloat(o);
                t = s < 100 ? 1 : s < 312 ? 1.2 : s < 412 ? 1.3 : 2, r = "safari"
            } else /KHTML\/(\S+)/.test(e) || /Konqueror\/([^;]+)/.test(e) ? (o = RegExp.$1, t = RegExp.$1, n = "khtml", r = "konq") : /rv:([^\)]+)\) Gecko\/\d{8}/.test(e) ? (o = RegExp.$1, n = "gecko", /Firefox\/(\S+)/.test(e) && (t = RegExp.$1, r = "firefox")) : /MSIE ([^;]+)/.test(e) && (o = RegExp.$1, t = RegExp.$1, n = "ie", r = "ie");
            return {
                machine: "PC",
                name: r,
                version: t,
                engineVer: o,
                engine: n,
                machineSys: i
            }
        },
        L = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
                r = Q(e),
                t = r.machineSys,
                n = {
                    mac: "mac" === t,
                    version: r.engineVer,
                    name: t
                },
                o = {},
                i = {
                    iphone: e.match(/(iphone)\s(os\s)?([\d_]+)/i),
                    ipad: e.match(/(ipad).*\s([\d_]+)/i),
                    ipod: e.match(/(ipod).*\s([\d_]+)/i),
                    android: e.match(/(android)\s([\d\.]+)/i),
                    windows: e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)
                };
            i.ipod && (n.ios = !0, n.ipod = !0, n.version = i.ipod[2].replace(/_/g, "."), n.name = "ipod"), i.ipad && (n.ios = !0, n.ipad = !0, n.version = i.ipad[2].replace(/_/g, "."), n.name = "ipad"), i.iphone && (n.iphone = !0, n.ios = !0, n.version = i.iphone[3].replace(/_/g, "."), n.name = "iphone"), i.android && (n.android = !0, n.version = i.android[2], n.name = "android"), i.windows && (n.windows = !0, n.version = i.windows[2], n.name = "windows");
            var a = {
                IE: e.match(/; msie\b|; trident\b|\bedge\//i),
                WeChat: e.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || e.match(/MicroMessenger\/((\d+)\.(\d+))/),
                MQQClient: !e.match(/QQReader/) && e.match(/QQ\/(\d+\.\d+)/i) || e.match(/V1_AND_SQ_([\d\.]+)/),
                MQQReader: e.match(/QQReader/i),
                QQvideo: !e.match(/TADChid/) && e.match(/QQLiveBrowser\/([\d.]+)/),
                QQHDvideo: e.match(/QQLiveHDBrowser\/([\d.]+)/),
                TBSSDK: e.match(/MQQBrowser\/(\d+\.\d+)/i) && e.match(/MSDK\/(\d+\.\d+)/),
                MQQBrowser: e.match(/MQQBrowser\/(\d+\.\d+)/i),
                UCBrowser: e.match(/ucbrowser\/(\d+\.\d+)/i),
                Qzone: e.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),
                Weibo: e.match(/Weibo/i),
                qqnews: e.match(/qqnews\/(\d+\.\d+\.\d+)/i),
                QQLiveBroadcast: e.match(/QQLiveBroadcast/i),
                kuserAgentibao: e.match(/qnreading\/(\d+\.\d+\.\d+)/i),
                liebao: e.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),
                baiduboxapp: e.match(/baiduboxapp\/(\d+\.\d+\.\d+)/i),
                IEMobile: e.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || e.match(/WPDesktop/),
                douban: e.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),
                MiuiBrowser: e.match(/MiuiBrowser\/(\d+\.\d+)/i),
                BingPreview: e.match(/BingPreview\/(\d+\.)/i),
                TADChid: e.match(/TADChid\/(\d+)/i),
                Chrome: n.ios ? e.match(/CriOS\/(\d+\.\d+)/) : e.match(/Chrome\/(\d+\.\d+)/),
                Safari: e.match(/Safari\/(\d+\.\d+)/),
                sukan: e.match(/synopsis/i)
            };
            if (a.MQQReader) o.MQQReader = !0, o.version = 1, o.name = "MQQReader";
            else if (a.IEMobile) o.IEMobile = !0, o.version = 1, o.name = "IEMobile";
            else
                for (var s in a)
                    if (a[s]) {
                        o[s] = !0, o.version = a[s][1] || 0, o.name = s;
                        break
                    } return {
                browser: o,
                os: n
            }
        },
        R = !1,
        q = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = e.name,
                t = e.type;
            try {
                if (!window.performance && !window.performance.getEntries) return console.warn("prerformance is not supported"), [];
                var n = performance.getEntries(),
                    o = [];
                if (!n && !n.length) return o;
                try {
                    n.forEach(function(e) {
                        var r = {
                            name: e.name,
                            time_redirect: e.redirectEnd - e.redirectStart,
                            time_dns: e.domainLookupEnd - e.domainLookupStart,
                            time_requestTime: e.responseEnd - e.requestStart,
                            time_tcp: e.connectEnd - e.connectStart,
                            type: e.initiatorType,
                            starttime: Math.floor(e.startTime),
                            entryType: e.entryType,
                            duration: Math.floor(e.duration) || 0,
                            decodedBodySize: e.decodedBodySize || 0,
                            nextHopProtocol: e.nextHopProtocol,
                            json_entries: JSON.stringify(e)
                        };
                        o.push(r)
                    })
                } catch (e) {
                    console.error("get resourceTiming err::::", e)
                }
                return r ? o.filter(function(e) {
                    return e.name === r
                })[0] : t ? o.filter(function(e) {
                    return e.type === t
                }) : o
            } catch (e) {
                return console.warn("get performance happen error"), []
            }
        },
        A = {
            SCRIPT: "script",
            LINK: "link",
            IMG: "img",
            AUDIO: "audio",
            VIDEO: "video",
            FETCH: "fetch",
            AJAX: "ajax",
            PROMISE: "promise"
        },
        I = function() {
            var e = (new Date).getTime();
            return window.performance && window.performance.now && (e = window.performance.now()), e
        },
        N = function(e) {
            var r = {
                type: "",
                url: "",
                code: "",
                isErr: !1,
                source: e
            };
            if (!o(e)) return r;
            if (s(e, "err_type")) {
                r.type = e.err_type;
                try {
                    if (e.err_desc) {
                        var t = JSON.parse(e.err_desc);
                        r.url = t.url || t.fileName || e.s_url
                    } else r.url = e.s_url
                } catch (t) {
                    r.url = e.s_url, console.warn(t)
                }
                r.isErr = !0
            } else s(e, "cgiurl") ? (r.type = "cgi", r.url = e.cgiurl, r.code = e.httpcode) : s(e, "resurl") ? (r.type = "cdn", r.url = e.resurl, r.code = e.httpcode) : s(e, "time_domready") ? (r.type = "pagepf", r.url = e.s_url, r.code = 200) : s(e, "json_entries") ? (r.type = "slowlog", r.url = e.s_url, r.code = 200) : s(e, "log") && (r.type = "flowlog", r.url = e.s_url, r.code = 200);
            return r
        },
        U = function() {
            function e(r) {
                var t = r.options,
                    n = void 0 === t ? {} : t,
                    o = r.baseUrl,
                    i = void 0 === o ? "" : o,
                    a = r.sampling,
                    s = void 0 === a ? 1 : a,
                    c = r.delay,
                    d = void 0 === c ? 2e3 : c,
                    u = r.name,
                    p = r.params,
                    l = void 0 === p ? [] : p,
                    f = r.cgi,
                    h = void 0 === f ? {} : f,
                    v = r.ptag,
                    g = r.onBeforeSend,
                    y = r.debug,
                    w = r.logs,
                    _ = void 0 === w ? {} : w;
                m(this, e), this.options = n, this.errorList = [], this.baseUrl = i, this.sampling = s, this.params = l, this.dealy = d, this.name = u, this.cgiOptions = h, this.ptag = v, this.onBeforeSend = g, this.debug = y, this.logs = _
            }
            return f(e, [{
                key: "init",
                value: function() {
                    try {
                        this.proxyAjax(), this.proxyError(), this.proxyConsole(), this.proxyFetch(), this.injectOptions()
                    } catch (e) {
                        this.send({
                            err_msg: "emonitor init happen error",
                            err_stack: "" + e,
                            err_type: "jserror",
                            err_function: "emonitor init func"
                        })
                    }
                }
            }, {
                key: "injectOptions",
                value: function() {
                    var e = this;
                    e.params.forEach(function(r) {
                        e.options[r] = g({
                            name: r
                        })
                    }), "string" == typeof e.options.qq && e.options.qq.length > 0 && (e.options.openid = "")
                }
            }, {
                key: "proxyConsole",
                value: function() {
                    var e = this;
                    if ("undefined" != typeof console && "function" == typeof console.error) {
                        var r = console.error;
                        console.error = function() {
                            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                            r.apply(window.console, n), e.send({
                                err_msg: n.join(","),
                                level: "error",
                                err_type: "console"
                            })
                        }
                    }
                }
            }, {
                key: "log",
                value: function() {
                    var e = this,
                        r = e.logs || {},
                        t = r.baseUrl,
                        n = r.sampling,
                        i = void 0 === n ? 1 : n;
                    if (t) {
                        for (var a = {
                                level: "",
                                log: ""
                            }, s = arguments.length, c = Array(s), d = 0; d < s; d++) c[d] = arguments[d];
                        c.length > 1 ? a = {
                            level: c[0],
                            log: c[1]
                        } : o(c[0]) ? a = c[0] : console.warn("log params is empty"), Math.random() <= i && e.send(h({}, a), !1, t)
                    }
                }
            }, {
                key: "reportCgi",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = this,
                        t = r.cgiOptions || {},
                        n = t.baseUrl,
                        o = t.sampling,
                        i = void 0 === o ? 1 : o;
                    if (n) {
                        var a = e.cgiurl,
                            s = c(a),
                            d = s.host,
                            u = s.path;
                        Math.random() <= i && r.send(h({
                            cgipath: u,
                            cgihost: d,
                            bizcode_server: ""
                        }, e), !1, n)
                    }
                }
            }, {
                key: "proxyAjax",
                value: function() {
                    var e = Object.create(null),
                        r = this,
                        t = (new Date).getTime(),
                        n = null,
                        o = null,
                        i = function(e, i) {
                            o = I();
                            try {
                                var a = {},
                                    s = e && (e.currentTarget || e.target),
                                    c = s.emonitorAjaxURL,
                                    d = s ? {
                                        currentStatus: s.status,
                                        cgiurl: c || s.responseURL
                                    } : {},
                                    u = d.currentStatus,
                                    p = void 0 === u ? "" : u,
                                    l = d.cgiurl,
                                    m = void 0 === l ? "" : l,
                                    f = -1 !== ["", "text"].indexOf(s.responseType) ? s.responseText || null : null;
                                if ("timeout" === String(i)) return a = {
                                    err_msg: "ajax请求错误",
                                    err_stack: "错误码:" + p,
                                    level: "error",
                                    err_type: A.AJAX,
                                    err_code: p,
                                    err_desc: JSON.stringify({
                                        fileName: m,
                                        category: "ajax",
                                        text: "ajax request timeout",
                                        status: p
                                    })
                                }, r.errorList.push(a), r.send(h({}, a)), void(a = {});
                                var v = O(f, r.cgiOptions),
                                    g = v.bizcode,
                                    y = v.bizmsg;
                                try {
                                    r.reportCgi({
                                        cgiurl: m,
                                        delay: Math.round(Math.max(o - t, 0)),
                                        httpcode: p,
                                        bizcode: g,
                                        bizmsg: y,
                                        starttime: n
                                    })
                                } catch (e) {
                                    console.warn(e)
                                }
                                "number" == typeof p && (p < 200 || p >= 300) && (a = {
                                    err_msg: "ajax请求错误",
                                    err_stack: "错误码:" + p,
                                    level: "error",
                                    err_type: A.AJAX,
                                    err_code: p,
                                    err_desc: JSON.stringify({
                                        fileName: m,
                                        category: "ajax",
                                        text: s.statusText,
                                        status: p
                                    })
                                }, r.errorList.push(a), r.send(h({}, a)), a = {})
                            } catch (e) {
                                console.error("Ajax handleEvent " + e)
                            }
                        };
                    e.send = XMLHttpRequest.prototype.send, e.open = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function(r, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        e.open.apply(this, [r, t, n]), this.emonitorAjaxURL = t
                    }, XMLHttpRequest.prototype.send = function(r) {
                        n = (new Date).getTime(), t = I();
                        var o = this.onloadend,
                            a = this.ontimeout;
                        this.onloadend = function(e) {
                            i(e), "function" == typeof o && o.apply(this, arguments)
                        }, this.ontimeout = function(e) {
                            i(e, "timeout"), "function" == typeof a && a.apply(this, arguments)
                        }, e.send.apply(this, [r])
                    }
                }
            }, {
                key: "proxyFetch",
                value: function() {
                    var e = this;
                    if (window.fetch) {
                        var r = window.fetch;
                        window.fetch = function() {
                            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                            var i = (new Date).getTime(),
                                a = I(),
                                s = a;
                            return r.apply(null, n).then(function(r) {
                                var t = r.clone();
                                s = I(), r.ok || "" === r.url || e.send({
                                    err_msg: "fetch not ok",
                                    err_type: A.FETCH,
                                    err_code: r.status,
                                    err_desc: JSON.stringify({
                                        type: "error",
                                        fileName: n[0],
                                        options: n[1],
                                        category: "fetch"
                                    })
                                });
                                var o = "",
                                    c = "";
                                if (r.ok) {
                                    try {
                                        if (-1 !== (r.headers ? r.headers.get("content-type") : "").indexOf("application/json")) {
                                            var d = O(t.json());
                                            o = d.bizcode, c = d.bizmsg
                                        }
                                    } catch (e) {
                                        o = "", c = ""
                                    }
                                    try {
                                        e.reportCgi({
                                            cgiurl: n[0],
                                            delay: Math.round(Math.max(s - a, 0)),
                                            httpcode: r.status,
                                            bizcode: o,
                                            bizmsg: c,
                                            starttime: i
                                        })
                                    } catch (e) {
                                        console.warn(e)
                                    }
                                }
                                return r
                            }).catch(function(r) {
                                e.send({
                                    err_msg: "fetch not ok",
                                    err_stack: "" + r,
                                    err_type: A.FETCH,
                                    err_desc: JSON.stringify({
                                        type: "error",
                                        fileName: n[0],
                                        options: n[1],
                                        category: "fetch"
                                    })
                                })
                            })
                        }
                    }
                }
            }, {
                key: "proxyError",
                value: function() {
                    var e = this,
                        r = arguments,
                        t = this;
                    window.addEventListener("error", function(e) {
                        var r = e.target ? e.target : e.srcElement;
                        if (r !== window && r.nodeName && A[r.nodeName.toUpperCase()]) {
                            var n = {
                                err_msg: r.localName + " is load error",
                                err_stack: "resource is not found",
                                err_type: "" + r.localName,
                                err_desc: JSON.stringify({
                                    tagName: r.localName,
                                    type: e.type,
                                    fileName: r.currentSrc || r.src || r.href,
                                    category: "resource"
                                }),
                                timestamps: (new Date).getTime()
                            };
                            t.errorList.push(n), t.send(h({}, n))
                        }
                    }, !0);
                    var n = window.onerror;
                    window.onerror = function(o, i, a, s, c) {
                        if ("Script error." === o && !i) return !1;
                        var d = {};
                        return setTimeout(function() {
                            var e = s || window.event && window.event.errorCharacter || 0;
                            (d = c && c.stack ? {
                                err_msg: o,
                                err_stack: c.stack,
                                err_type: "jserror"
                            } : {
                                err_msg: o,
                                err_stack: "",
                                err_type: "jserror"
                            }).err_desc = JSON.stringify({
                                url: t.URL,
                                fileName: i,
                                category: "javascript",
                                line: a,
                                col: e
                            }), t.errorList.push(h({}, d)), t.send(h({}, d))
                        }, 0), "function" == typeof n ? n.apply(e, r) : !t.debug
                    }, window.addEventListener("unhandledrejection", function(e) {
                        var r = {
                            err_msg: e.reason,
                            err_type: A.PROMISE,
                            err_desc: JSON.stringify({
                                url: location.href,
                                category: "promise"
                            }),
                            err_stack: "promise is error"
                        };
                        t.errorList.push(r), t.send(r), e.preventDefault()
                    }, !0)
                }
            }, {
                key: "config",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    for (var r in e) - 1 !== ["baseUrl", "params", "options", "sampling", "delay", "name", "cgi"].indexOf(String(r)) && (this[r] = e[r]);
                    return this
                }
            }, {
                key: "send",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = arguments[2],
                        n = this,
                        i = (n.cgiOptions || {}).btrace,
                        s = void 0 !== i && i,
                        d = e.err_type,
                        u = void 0 === d ? "console" : d;
                    if (w(n.sampling)) {
                        var l = "jserror" === u ? 300 : n.delay,
                            m = _(S, l, function() {
                                n.errorList = []
                            }),
                            f = c(location.href),
                            v = f.host,
                            g = f.path,
                            y = f.protocol,
                            b = L(navigator.userAgent),
                            x = b.browser,
                            T = b.os,
                            M = h({}, this.options, e, {
                                timestamps: (new Date).getTime(),
                                _dc: Math.random(),
                                dtime: (new Date).getTime(),
                                hh_ua: navigator.userAgent,
                                hh_uav: x.version,
                                hh_ref: document.referrer,
                                hc_pgv_pvid: k(),
                                s_url: location.href,
                                s_host: v,
                                s_path: g,
                                s_protocol: y,
                                s_browser: x.name,
                                s_os: T.name,
                                s_qq: j("qq"),
                                s_openid: j("openid"),
                                s_app: n.name,
                                s_ptag: n.ptag
                            }),
                            O = n.onBeforeSend;
                        if (a(O)) try {
                            var C = N(M),
                                Q = O(C);
                            if ("boolean" == typeof Q && !Q) return;
                            if (-1 !== p.indexOf(C.type) && "btrace.qq.com" === c(C.url).hostname && !s) return;
                            o(Q) && (M = E(M, Q))
                        } catch (e) {
                            console.warn(e)
                        }
                        m({
                            baseUrl: t || n.baseUrl,
                            data: M,
                            method: r ? "POST" : "GET"
                        })
                    }
                }
            }]), e
        }();
    e.create = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = e.options,
            t = void 0 === r ? {} : r,
            n = e.cgi,
            o = void 0 === n ? {
                sampling: 1,
                baseUrl: ""
            } : n,
            i = e.logs,
            a = void 0 === i ? {
                sampling: 1,
                baseUrl: ""
            } : i,
            s = e.baseUrl,
            c = e.delay,
            d = void 0 === c ? 2e3 : c,
            u = e.sampling,
            p = void 0 === u ? 1 : u,
            l = e.name,
            m = void 0 === l ? "unknown" : l,
            f = e.params,
            h = void 0 === f ? [] : f,
            g = e.ptag,
            y = void 0 === g ? "" : g,
            w = e.debug,
            _ = void 0 !== w && w,
            b = e.onBeforeSend,
            S = new U({
                options: t,
                baseUrl: s,
                params: h,
                delay: d,
                name: m,
                sampling: p,
                cgi: o,
                ptag: y,
                debug: _,
                onBeforeSend: void 0 === b ? v : b,
                logs: a
            });
        return S.init(), S
    }, e.getRcTiming = q, e.getPfTiming = function() {
        try {
            var e = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance;
            if (void 0 === e) return !1;
            var r = e.timing,
                t = {};
            return t.time_response = r.responseStart - r.requestStart, t.time_firstpaint = r.responseEnd - r.responseStart, t.time_domready = r.domContentLoadedEventStart - r.responseEnd, t.time_readyStart = r.fetchStart - r.navigationStart, t.time_redirectTime = r.redirectEnd - r.redirectStart, t.time_appcacheTime = r.domainLookupStart - r.fetchStart, t.time_dns = r.domainLookupEnd - r.domainLookupStart, t.time_tcp = r.connectEnd - r.connectStart, t.time_requestTime = r.responseEnd - r.requestStart, t.time_initDomTreeTime = r.domInteractive - r.responseEnd, t.time_loadEventTime = r.loadEventEnd - r.loadEventStart, t.time6 = r.domLoading - r.fetchStart, t.time_whiteScreen = r.domLoading - r.fetchStart, t.time7 = r.loadEventEnd - r.fetchStart, t.time_firstScreenTime = r.loadEventEnd - r.fetchStart, t.time_parseDomTree = r.domComplete - r.domInteractive, t.time8 = "", t
        } catch (e) {
            return console.warn("err", e), {}
        }
    }, e.getCdnTiming = function() {
        var e = {};
        return u.forEach(function(r) {
            e[r] = x(q({
                type: r
            }))
        }), e
    }, e.getSysInfo = L, e.getUrlParam = g, e.getCookie = y, e.injectVconsole = function() {
        try {
            var e = document.createElement("script"),
                r = function() {
                    R || (R = new window.VConsole)
                };
            e.src = "https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js", e.async = !0, e.charset = "utf-8", e.onload = r, e.onreadystatechange = function() {
                "complete" === this.readyState && r()
            }, document.getElementsByTagName("head")[0].appendChild(e)
        } catch (e) {
            console.error("vConsole script load err")
        }
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
/*  |xGv00|4c57e2b061fa1b99453cd728bd4e4e27 */