(window.QJP = window.QJP || []).push([
    [97], {
        "570s": function(e, n) {
            ! function(e) {
                "use strict";
                e.console || (e.console = {});
                for (var n, t, r = e.console, i = function() {}, a = ["memory"], o = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); n = a.pop();) r[n] || (r[n] = {});
                for (; t = o.pop();) r[t] || (r[t] = i)
            }("undefined" == typeof window ? this : window)
        },
        AEtc: function(e, n, t) {
            "use strict";
            var r = t("QR21"),
                i = t("3XR0"),
                a = t("zK28");
            window.perfMetrics.onFirstInputDelay(function(e, n) {
                if (window.performance && a.a.isPageloadDataCollectionEnabled) {
                    var t = {
                        agent: window.navigator.userAgent,
                        url: window.location.href,
                        app_session_id: Object(i.b)(),
                        transaction_name: a.a.actionString,
                        country_code: a.a.countryCode,
                        event_type: n.type,
                        first_input_delay_ms: e
                    };
                    Object(r.a)("first_input_delay_events", t, {
                        includeUserDetails: !0
                    })
                }
            })
        },
        BNVi: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return d
            }), t.d(n, "b", function() {
                return l
            }), t.d(n, "c", function() {
                return f
            });
            var r = t("og3H"),
                i = t("zK28"),
                a = t("3XR0"),
                o = t("QR21"),
                u = t("qsN4"),
                c = t("sLV1"),
                s = t("lGCb"),
                d = "inbound",
                l = "outbound";

            function f(e, n) {
                var t = Object(s.a)(e).search,
                    d = (new u.a).parseUriValues(t);
                if (void 0 !== d.userId && d.userId >= 0 || Object.keys(d.params).length >= 1) {
                    var l = {
                        action: n,
                        sharer_user_id: d.userId || null,
                        utm_medium: d.params.medium || null,
                        utm_campaign: d.params.campaign || null,
                        utm_source: d.params.source || null,
                        normalized_source: d.params.source || null,
                        share_url: e,
                        user_id: i.a.user ? i.a.user.id : null,
                        app_session_id: Object(a.b)(),
                        uid: i.a.uid,
                        client_timestamp: Object(c.d)(),
                        agent: window.navigator.userAgent,
                        platform: r.D.WEB
                    };
                    Object(o.a)("share_events", l)
                }
            }
        },
        "Rk/v": function(e, n, t) {
            "use strict";
            QWait("Quizlet.Common.i18n", function() {
                t.r(n);
                var e;
                t("TQpA"), t("AEtc"), t("ZQoE");
                e = function() {
                    QLoad("dom")
                }, "interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
            })
        },
        TQpA: function(e, n, t) {
            "use strict";
            var r = t("3XR0"),
                i = t("xNal"),
                a = t("T3U7"),
                o = t("siyy"),
                u = t("og3H"),
                c = t("zK28");
            var s = t("xvNY");
            var d = t("BNVi");

            function l() {
                window.document.addEventListener("click", function() {
                    c.a.userInteracted = !0
                }, {
                    capture: !0,
                    once: !0
                }), window.document.addEventListener("click", function(e) {
                    Object(r.a)(),
                        function(e) {
                            var n = e.target.attributes && e.target.attributes["data-sourcename"];
                            if (n) {
                                var t = void 0 === c.a.actionString ? "(undefined)" : c.a.actionString;
                                i.c.write(u.m.TRACKING__CLICK_SOURCE, t + ":" + n.value)
                            }
                        }(e)
                })
            }
            window.Cookie = i.c, window.logPageAction = a.a, window.obfuscate = o.a, QWait("dom", function() {
                var e;
                l(), window.document.addEventListener("keydown", function() {
                    c.a.userInteracted = !0
                }, {
                    capture: !0,
                    once: !0
                }), window.document.addEventListener("keyup", r.a), (e = i.c.read(u.m.TRACKING__SERVER_TO_CLIENT_EVENTS)) && (i.c.dispose(u.m.TRACKING__SERVER_TO_CLIENT_EVENTS), e.split(";").forEach(function(e) {
                    var n = JSON.parse(atob(e));
                    n && "signup" === n.event && Object(s.m)(n), n && "transaction" === n.event && Object(s.b)(n)
                })), Object(d.c)(window.location.href, d.a)
            })
        },
        ZQoE: function(e, n, t) {
            "use strict";
            t.r(n);
            t("TQpA"), t("570s");
            var r = t("Y2nb");
            window.Visitor = r.a
        },
        qsN4: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return c
            });
            var r = t("og3H"),
                i = function(e, n) {
                    var t = new Map;
                    return Object.keys(e).forEach(function(r) {
                        t.set(e[r], "0qjKtxWUYS1AlN6Ibrmf7HsF3o2kOzLeEhC5aDQZRd9MPwyGTBngipv4cVJu8X-._~!" [n[r]])
                    }), t
                },
                a = i(r.wb, r.vb),
                o = i(r.yb, r.xb),
                u = i(r.Ab, r.zb),
                c = function() {
                    function e() {}
                    var n = e.prototype;
                    return n._getEncodedChar = function(e, n) {
                        return n && e.get(n) || "0"
                    }, n._getDecodedValue = function(e, n) {
                        var t = e.entries(),
                            r = Array.isArray(t),
                            i = 0;
                        for (t = r ? t : t[Symbol.iterator]();;) {
                            var a;
                            if (r) {
                                if (i >= t.length) break;
                                a = t[i++]
                            } else {
                                if ((i = t.next()).done) break;
                                a = i.value
                            }
                            var o = a,
                                u = o[0];
                            if (n === o[1]) return u
                        }
                        return null
                    }, n.decodeUTM = function(e) {
                        if (e && 4 !== e.length || e && 1 !== parseInt(e[0], 10)) return {};
                        var n = e ? e.split("") : ["0", "0", "0", "0"],
                            t = {},
                            r = this._getDecodedValue(a, n[1]);
                        r && (t.campaign = r);
                        var i = this._getDecodedValue(o, n[2]);
                        i && (t.medium = i);
                        var c = this._getDecodedValue(u, n[3]);
                        return c && (t.source = c), t
                    }, n.encodeUTMParams = function(e, n, t) {
                        return [1, this._getEncodedChar(a, e), this._getEncodedChar(o, n), this._getEncodedChar(u, t)].join("")
                    }, n.encodeUserId = function(e) {
                        return Number(parseInt(e, 10)).toString(36)
                    }, n.decodeUserId = function(e) {
                        return e ? parseInt(e, 36) : null
                    }, n.generateUriValues = function(e, n, t, r) {
                        var i = "x=" + this.encodeUTMParams(e, n, t);
                        return r && (i = "i=" + this.encodeUserId(r) + "&" + i), i
                    }, n.parseUriValues = function(e) {
                        for (var n = e.replace(/^\?/, "").split("&"), t = {}, r = 0; r < n.length; r++) {
                            var i = n[r].split("=");
                            if (i.length > 1) {
                                var a = i.shift();
                                if ("x" !== a && "i" !== a) continue;
                                var o = i.length > 1 ? i.join("=") : i[0];
                                t[a] = o
                            }
                        }
                        var u = {
                                params: this.decodeUTM(t.x)
                            },
                            c = this.decodeUserId(t.i);
                        return c && (u.userId = c), u
                    }, e
                }()
        },
        siyy: function(e, n, t) {
            "use strict";

            function r(e, n) {
                for (var t = "", r = 0, i = e.length; r < i; r++) t += "-" + (e.charCodeAt(r) + n % (r + 1));
                return t.substr(1)
            }
            t.d(n, "a", function() {
                return r
            })
        }
    },
    [
        ["Rk/v", 1, 0]
    ]
]);
//# sourceMappingURL=quizlet_minimal_init.dccfb5e68fdc3530f0b6.a.js.map