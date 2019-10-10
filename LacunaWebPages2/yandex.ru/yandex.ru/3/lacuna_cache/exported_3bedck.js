
        ! function(e) {
            if (!window.Ya || !Ya.Rum) throw new Error("Rum: interface is not defined");
            var r = Ya.Rum;
            r.getSetting = function(e) {
                var n = r._settings[e];
                return null === n ? null : n || ""
            }
        }(),
        function(e) {
            var r = {
                    client: ["690.2354", -1, 100, 0],
                    uncaught: ["690.2361", 100, 10, 0],
                    external: ["690.2854", 100, 10, 0],
                    script: ["690.2609", 100, 10, 0]
                },
                n = {};
            e.ERROR_LEVEL = {
                INFO: "info",
                DEBUG: "debug",
                WARN: "warn",
                ERROR: "error",
                FATAL: "fatal"
            }, e._errorSettings = {
                clck: "https://yandex.ru/clck/click",
                beacon: !0,
                project: "unknown",
                page: "",
                env: "",
                experiments: [],
                additional: {},
                platform: "",
                region: "",
                level: "",
                version: "",
                yandexuid: "",
                preventError: !1,
                unhandledRejection: !1,
                debug: !1,
                limits: {},
                silent: {},
                filters: {}
            };
            var t = !1;

            function o(e, r) {
                for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n]);
                return e
            }

            function i(e) {
                return "boolean" == typeof e && (e = +e), "number" == typeof e ? e + "" : null
            }
            e.initErrors = function(r) {
                o(e._errorSettings, r), t || (window.addEventListener ? (window.addEventListener("error", a), "Promise" in window && e._errorSettings.unhandledRejection && window.addEventListener("unhandledrejection", function(e) {
                    var r, n, t = e.reason;
                    t && (t.stack && t.message ? r = t.message : "[object Event]" === (r = String(t)) ? r = "event.type: " + t.type : "[object Object]" === r && (n = {
                        unhandledObject: t
                    }), a({
                        message: "Unhandled rejection: " + r,
                        stack: t.stack,
                        additional: n
                    }))
                })) : window.onerror = function(e, r, n, t, o) {
                    a({
                        error: o || new Error(e || "Empty error"),
                        message: e,
                        lineno: n,
                        colno: t,
                        filename: r
                    })
                }, t = !0)
            }, e.updateErrors = function(r) {
                o(e._errorSettings, r)
            }, e._handleError = function(t, i) {
                var a, s, l = e._errorSettings;
                if (l.preventError && t.preventDefault && t.preventDefault(), i) a = t, s = "client";
                else {
                    a = e._normalizeError(t), s = a.type;
                    var c = l.onError;
                    "function" == typeof c && c(a);
                    var u = l.transform;
                    "function" == typeof u && (a = u(a))
                }
                var d = r[s][1];
                "number" == typeof l.limits[s] && (d = l.limits[s]);
                var m = r[s][2];
                "number" == typeof l.silent[s] && (m = l.silent[s]);
                var f = r[s][3];
                if (f < d || -1 === d) {
                    a.path = r[s][0];
                    var g = "";
                    try {
                        var p = o({}, l.additional);
                        g = JSON.stringify(o(p, a.additional))
                    } catch (e) {
                        l.debug && window.console && console.error("[error-counter] json.stringify:", e)
                    }
                    var v = function() {
                        n[a.message] = !1, e._sendError(a, {
                            additional: g,
                            silent: f < m || -1 === m ? "no" : "yes",
                            isCustom: Boolean(i)
                        }), r[s][3]++
                    }.bind(this);
                    if (void 0 === l.throttleSend) v();
                    else {
                        if (n[a.message]) return;
                        n[a.message] = !0, setTimeout(v, l.throttleSend)
                    }
                }
            }, e._baseNormalizeError = function(e) {
                var r = (e = e || {}).filename || e.fileName || "",
                    n = e.error && e.error.stack || e.stack || "",
                    t = e.message || "";
                return {
                    file: r,
                    line: e.lineno || e.lineNumber,
                    col: e.colno || e.colNumber,
                    stack: n,
                    message: t,
                    additional: e.additional
                }
            }, e._normalizeError = function(r) {
                var n = e._baseNormalizeError(r),
                    t = "uncaught",
                    o = e._isExternalError(n.file, n.message, n.stack),
                    i = "",
                    a = "";
                return o.hasExternal ? (t = "external", i = o.common, a = o.custom) : /^Script error\.?$/.test(n.message) && (t = "script"), n.external = i, n.externalCustom = a, n.type = t, n
            }, e._sendError = function(r, n) {
                n = n || {};
                var t = e._errorSettings,
                    o = t.experiments.length ? t.experiments.join(";") : "",
                    a = {
                        "-url": r.file,
                        "-line": r.line,
                        "-col": r.col,
                        "-stack": r.stack,
                        "-env": t.env,
                        "-msg": r.message,
                        "-external": r.external,
                        "-externalCustom": r.externalCustom,
                        "-project": t.project,
                        "-service": r.service,
                        "-page": r.page || t.page,
                        "-platform": t.platform,
                        "-level": r.level,
                        "-experiments": o,
                        "-version": t.version,
                        "-region": t.region,
                        "-yandexuid": t.yandexuid,
                        "-source": r.source,
                        "-sourceMethod": r.sourceMethod,
                        "-type": n.isCustom ? r.type : "",
                        "-block": r.block,
                        "-method": r.method,
                        "-additional": n.additional,
                        "-adb": i(Ya.blocker) || i(t.blocker),
                        "-ua": navigator.userAgent,
                        "-silent": n.silent,
                        "-ts": +new Date
                    };
                t.debug && window.console && console.error("[error-counter]", a), e.send(null, r.path, function(e) {
                    var r = [];
                    for (var n in e) e.hasOwnProperty(n) && (e[n] || 0 === e[n]) && r.push(n + "=" + encodeURIComponent(e[n]).replace(/\*/g, "%2A"));
                    return r.join(",")
                }(a), null, null, null, null)
            };
            var a = function(e) {
                Ya.Rum._handleError(e, !1)
            }
        }(Ya.Rum),
        function(e) {
            var r = {
                url: {
                    0: /(miscellaneous|extension)_bindings/,
                    1: /^chrome:/,
                    2: /kaspersky-labs\.com\//,
                    3: /^(?:moz|chrome)-extension:\/\//,
                    4: /^file:/,
                    5: /^resource:\/\//,
                    6: /webnetc\.top/,
                    7: /local\.adguard\.com/
                },
                message: {
                    0: /__adgRemoveDirect/,
                    1: /Content Security Policy/,
                    2: /vid_mate_check/,
                    3: /ucapi/,
                    4: /Access is denied/i,
                    5: /^Uncaught SecurityError/i,
                    6: /__ybro/,
                    7: /__show__deepen/,
                    8: /ntp is not defined/,
                    9: /Cannot set property 'install' of undefined/,
                    10: /NS_ERROR/,
                    11: /Error loading script/,
                    12: /^TypeError: undefined is not a function$/,
                    13: /__firefox__\.(?:favicons|metadata|reader|searchQueryForField|searchLoginField)/
                },
                stack: {
                    0: /(?:moz|chrome)-extension:\/\//,
                    1: /adguard.*\.user\.js/i
                }
            };

            function n(e, r) {
                if (e && r) {
                    var n = [];
                    for (var t in r)
                        if (r.hasOwnProperty(t)) {
                            var o = r[t];
                            "string" == typeof o && (o = new RegExp(o)), o instanceof RegExp && o.test(e) && n.push(t)
                        }
                    return n.join("_")
                }
            }

            function t(e, t) {
                var o, i = [];
                for (var a in r) r.hasOwnProperty(a) && (o = n(e[a], t[a])) && i.push(a + "~" + o);
                return i.join(";")
            }
            e._isExternalError = function(n, o, i) {
                var a = e._errorSettings.filters || {},
                    s = {
                        url: (n || "") + "",
                        message: (o || "") + "",
                        stack: (i || "") + ""
                    },
                    l = t(s, r),
                    c = t(s, a);
                return {
                    common: l,
                    custom: c,
                    hasExternal: !(!l && !c)
                }
            }
        }(Ya.Rum),
        function() {
            "use strict";
            var e;
            (e = Ya.Rum).logError = function(r, n) {
                r = r || {}, "string" != typeof n && void 0 !== n || ((n = new Error(n)).justCreated = !0);
                var t = r.message || "",
                    o = e._baseNormalizeError(n);
                o.message && (t && (t += "; "), t += o.message), o.message = t || "Empty error";
                for (var i = ["service", "source", "type", "block", "additional", "level", "page", "method", "sourceMethod"], a = 0; a < i.length; a++) {
                    var s = i[a];
                    r[s] ? o[s] = r[s] : n && n[s] && (o[s] = n[s])
                }
                e._handleError(o, !0)
            }
        }(),
        function() {
            "use strict";
            var e;
            (e = Ya.Rum).logAjaxError = function(r, n, t, o) {
                r.type = "network", r.additional = r.additional || {}, "timeout" === t ? r.additional.timeout = 1 : n.status && (r.additional.status = n.status), e.logError(r, o)
            }
        }();
        Ya.Rum.initErrors({
            "project": "morda",
            "page": "geotouch",
            "platform": "touch",
            "region": "10466",
            "env": "production",
            "version": "2.2270",
            "preventError": false,
            "unhandledRejection": true,
            "throttleSend": 0,
            "debug": 0,
            "limits": {
                "client": 1000
            },
            "silent": {
                "external": 3
            },
            "filters": {
                "url": {
                    "0": "suggest-ya.cgi"
                }
            },
            "blocker": ""
        });
    