! function(e) {
    var o = {};

    function n(t) {
        if (o[t]) return o[t].exports;
        var i = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = o, n.d = function(e, o, t) {
        n.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, o) {
        if (1 & o && (e = n(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (n.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var i in e) n.d(t, i, function(o) {
                return e[o]
            }.bind(null, i));
        return t
    }, n.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(o, "a", o), o
    }, n.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, n.p = "", n(n.s = 0)
}([function(e, o, n) {
    e.exports = n(1)
}, function(e, o, n) {
    "use strict";
    var t, i, r, c;
    t = function() {
        var e = 1,
            o = {
                inject: function(e) {
                    var o;
                    return (o = document.createElement("script")).src = e, document.getElementsByTagName("head")[0].appendChild(o), o
                },
                jsonp: function(n, t, i) {
                    var r, c, a, s = !1;
                    r = (i = i || {}).callbackName ? i.callbackName : "jsonpcb" + e++, i.timeout && (a = setTimeout(function() {
                        s = !0, i.error && i.error()
                    }, i.timeout));
                    for (var u = r.split("."), l = u[u.length - 1], d = window, m = 0, f = u.length; m < f - 1; m++) d = d[u[m]];
                    d[l] = function(e) {
                        clearTimeout(a), s || t(e), c && c.parentNode && c.parentNode.removeChild(c), d[l] = void 0
                    }, c = o.inject(n + (-1 === n.indexOf("?") ? "?" : "&") + "callback=" + r)
                }
            };
        return o
    }.call((i = {
        id: "orb/lib/_script",
        exports: {},
        loaded: !1
    }).exports, n, i.exports, i), i.loaded = !0, void 0 !== t || (t = i.exports), r = [n(2)], c = function(e) {
        function o(o) {
            return e._setPolicy("ads", o), e._setPolicy("personalisation", o), e._setPolicy("performance", o), e._setPolicy("necessary", o)
        }
        return {
            isOrbitEnvironment: function() {
                return "object" == typeof bbccookies && "function" != typeof bbccookies._getCookieName
            },
            set: function(o, n) {
                var t = new Date;
                if (t.setYear(t.getFullYear() + 1), this.isOrbitEnvironment()) return e.set(o, n, {
                    domain: e._getCurrentDomain(),
                    path: "/",
                    expires: t
                });
                var i = window.location.host.match(/(.bbc(?:\.co\.uk))(:\d+)?(\/.*)?$/i),
                    r = o + "=" + n + ";domain=" + (i && ".bbc.co.uk" === i[1] ? ".bbc.co.uk" : ".bbc.com") + ";path=/;expires=" + t.toUTCString() + ";";
                return e.set(r)
            },
            get: function(o) {
                return this.isOrbitEnvironment() ? e.get(o) : e.getCrumb(o)
            },
            copyPolicyCookiesCrossDomain: function(o) {
                if (this.isOrbitEnvironment()) return e.copyPolicyCookiesCrossDomain(o);
                o()
            },
            setDefaultCookiesSingleDomain: function() {
                return this.isOrbitEnvironment() ? e.setDefaultCookiesSingleDomain() : o(!1)
            },
            setDefaultCookiesCrossDomain: function() {
                return this.isOrbitEnvironment() ? e.setDefaultCookiesCrossDomain() : o(!1)
            },
            optInToAllCookiesCrossDomain: function() {
                if (this.isOrbitEnvironment()) {
                    return e.setCookiePolicyCrossDomain({
                        ads: !0,
                        personalisation: !0,
                        performance: !0,
                        necessary: !0
                    })
                }
                return o(!0)
            },
            isCookiePolicySet: function() {
                return this.isOrbitEnvironment() ? e.isCookiePolicySet() : null !== this.get("ckns_policy")
            }
        }
    }.apply(o, r), Promise.resolve().then(function() {
        (function(e, o) {
            var n = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GB", "GR", "HU", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
                t = "ckns_privacy",
                i = "ckns_explicit",
                r = "1",
                c = "july2019";

            function a() {
                var e = o.get(i);
                return null !== e && e === r
            }

            function s(e, o) {
                e.style.display = "none", o.style.display = "none"
            }

            function u(e, o) {
                a() || (e.style.display = "none", o.style.display = "block", window.bbcpage.trackRegion(o, {
                    linkLocation: "nav-banner-cookies"
                }), window.bbcuser.logEvent("view", "nav-banner-cookies"))
            }

            function l() {
                var e = document.getElementById("bbcprivacy"),
                    n = document.getElementById("bbccookies");
                document.getElementById("bbcprivacy-continue-button").addEventListener("click", function() {
                    s(e, n), u(e, n), window.bbcuser.logEvent("click-cta", "nav-banner-privacy")
                }), document.getElementById("bbccookies-continue-button").addEventListener("click", function() {
                    s(e, n), window.bbcuser.logEvent("click-continue", "nav-banner-cookies"), o.optInToAllCookiesCrossDomain(), o.set(i, r)
                });
                var a, l = document.getElementById("bbccookies-settings").getElementsByTagName("a")[0];
                l.addEventListener("click", (a = !1, function(e) {
                    a || (o.copyPolicyCookiesCrossDomain(function() {
                        a = !0, l.click()
                    }), o.set(i, r), e.preventDefault())
                }));
                var d, m, f = o.get(t) === c;
                u(e, n), f ? u(e, n) : (m = n, (d = e).style.display = "block", m.style.display = "none", window.bbcpage.trackRegion(d, {
                    linkLocation: "nav-banner-privacy"
                }), window.bbcuser.logEvent("view", "nav-banner-privacy"), o.set(t, c))
            }

            function d(o, n, t) {
                var i = function(e) {
                        var o = "en";
                        return "string" == typeof e && e.length >= 2 && (o = e.trim().substring(0, 2).toLowerCase()), -1 !== ["en", "cy", "gd", "ga"].indexOf(o) ? o : "en"
                    }(o),
                    r = window.COOKIES_STATIC_HOST + "bbccookies.min.css",
                    c = window.COOKIES_STATIC_HOST + i + ".min.js";
                window.bbcpage.loadCSS(r).then(function() {
                    e.jsonp(c, function(e) {
                        var o = e.replace(/<<bbcUrlPrefix>>/g, function() {
                            if (window.orb.bbcUrlPrefix) {
                                var e = window.orb.bbcUrlPrefix + "bbc.com",
                                    o = window.location.host.match(/(bbc(?:\.co\.uk))(:\d+)?(\/.*)?$/i);
                                return o && "bbc.co.uk" === o[1] && (e = e.replace("bbc.com", "bbc.co.uk")), e
                            }
                            return ""
                        }());
                        document.getElementById("cookiePrompt").innerHTML = o;
                        for (var i = document.querySelectorAll("[data-region-filter]"), r = 0; r < i.length; r++) {
                            var c = i[r];
                            c.getAttribute("data-region-filter") !== t && (c.style.display = "none")
                        }
                        n()
                    }, {
                        callbackName: "cookiePrompt"
                    })
                })
            }
            Promise.all([window.bbcuser.isUKCombined(), window.bbcuser.getCountry(), window.bbcpage.getLanguage()]).then(function(e) {
                var r = e[0],
                    s = e[1];
                if (!!s && -1 !== n.indexOf(s.toUpperCase()) || r) {
                    var u = o.get(t) === c;
                    if (!(o.isCookiePolicySet() && a() && u)) {
                        a() || o.set(i, "0"), o.isCookiePolicySet() || o.setDefaultCookiesSingleDomain();
                        var m = r ? "gb" : "eu";
                        d(e[2], l, m)
                    }
                }
            }).catch(function() {
                d("en", l, "gb")
            })
        }).apply(null, [t, c])
    }).catch(n.oe)
}, function(e, o, n) {
    var t;
    ! function() {
        var i = {};
        i.POLICY_REFRESH_DATE_MILLIS = new Date(2015, 4, 21, 0, 0, 0, 0).getTime();
        var r, c = "ckns_policy_exp",
            a = "ckns_policy",
            s = {
                ads: !1,
                personalisation: !1,
                performance: !1,
                necessary: !0
            },
            u = {},
            l = {
                personalisation: "ckps_.+|X-AB-iplayer-.+|ACTVTYMKR|BBC_EXAMPLE_COOKIE|BBCIplayer|BBCiPlayerM|BBCIplayerSession|BBCMediaselector|BBCPostcoder|bbctravel|CGISESSID|ed|food-view|forceDesktop|h4|IMRID|locserv|MyLang|myloc|NTABS|ttduserPrefs|V5|WEATHER|BBCScienceDiscoveryPlaylist_.+|bitratePref|correctAnswerCount|genreCookie|highestQuestionScore|incorrectAnswerCount|longestStreak|MSCSProfile|programmes-oap-expanded|quickestAnswer|score|servicePanel|slowestAnswer|totalTimeForAllFormatted|v|BBCwords|score|correctAnswerCount|highestQuestionScore|hploc|BGUID|BBCWEACITY|mstouch|myway|BBCNewsCustomisation|cbbc_anim|cbeebies_snd|bbcsr_usersx|cbeebies_rd|BBC-Latest_Blogs|zh-enc|pref_loc|m|bbcEmp.+|recs-.+|_lvd2|_lvs2|tick|_fcap_CAM1|_rcc2",
                performance: "ckpf_.+|optimizely.*|BBCLiveStatsClick|id|_em_.+|cookies_enabled|mbox|mbox-admin|mc_.+|omniture_unique|s_.+|sc_.+|adpolicyAdDisplayFrequency|ns_session|ns_cookietest|ns_ux|NO-SA|tr_pr1|gvsurvey|bbcsurvey|si_v|obuid|mm_.+|mmid|mmcore.+|mmpa.+|dtCookie|dtPC|rxVisitor|rxvt|dtSa|dtLatC|RT",
                ads: "ckad_.+|rsi_segs|c",
                necessary: "optimizelyEndUserId|ckns_.+|blq\\.dPref|idrxvr|s1|atidvisitor|atuserid|sa_labels|_cb_ls|_cb_svref|_chartbeat2|_chartbeat5|_chartbeat4|_cb|_cb_cp|SSO2-UID|BBC-H2-User|rmRpDetectReal|bbcComSurvey|IDENTITY_ENV|IDENTITY|IDENTITY-HTTPS|IDENTITY_SESSION|BBCCOMMENTSMODULESESSID|bbcBump.+|IVOTE_VOTE_HISTORY|pulse|BBCPG|BBCPGstat|ecos\\.dt|_sm_au_[c|d]|AMAuthCookie|AM_REDIRECT_BACK_SERVER_URL|AWSELB|(devN|uatN|n)ightfall(Session|Refresh)Token|amlbcookie"
            };

        function d(e, o) {
            o && o(new Error(e))
        }

        function m(e, o) {
            if (void 0 === e) return null;
            var n = {};
            n.expires = new Date(0), o && (n.domain = o.domain, n.path = o.path), document.cookie = k(e, "removed", n)
        }

        function f(e) {
            var o = window.location.hostname.split(".");
            o.length;
            for (m(e), p(e); o.length && -1 === "|co.uk|com|".indexOf("|" + o.join(".") + "|");) {
                if (o.length) {
                    var n = o.join(".");
                    m(e, {
                        domain: n
                    }), p(e, n)
                }
                o.shift()
            }
        }

        function p(e, o) {
            var n = window.location.pathname.split("/");
            for (m(e, o); n.length;) {
                var t = n.join("/");
                "" === t && (t = "/"), m(e, {
                    domain: o,
                    path: t
                }), m(e, {
                    domain: "." + o,
                    path: t
                }), n.pop()
            }
        }

        function b() {
            var e = new RegExp("(?:^|; ?)" + a + "=(\\d)(\\d)(\\d)($|;)"),
                o = document.cookie.match(e);
            return o ? {
                ads: !!+o[1],
                personalisation: !!+o[2],
                performance: !!+o[3],
                necessary: !0
            } : s
        }

        function v(e, o, n) {
            var t = function() {
                    var e = new Date;
                    return e.setYear(e.getFullYear() + 1), e
                }(),
                r = "" + (e.ads ? 1 : 0) + (e.personalisation ? 1 : 0) + (e.performance ? 1 : 0),
                s = i._getCurrentDomain();
            i.set(a, r, {
                domain: s,
                path: "/",
                expires: t,
                crossDomainEnabled: o
            }, n);
            var u = new Date(t.getTime());
            return u.setMonth(u.getMonth() + 1), i.set(c, t.getTime(), {
                domain: s,
                path: "/",
                expires: u
            }), e
        }

        function y(e) {
            return e = (e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")
        }

        function k(e, o, n) {
            n && n.domain && n.domain;
            var t = e + "=" + (o = (o + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
            return t += (n = n || {}).path ? ";path=" + n.path : "", t += n.domain ? ";domain=" + n.domain : "", t += n.expires ? ";expires=" + n.expires.toUTCString() : "", t += n.secure ? ";secure" : ""
        }
        /*!
         * contentloaded.js
         *
         * Author: Diego Perini (diego.perini at gmail.com)
         * Summary: cross-browser wrapper for DOMContentLoaded
         * Updated: 20101020
         * License: MIT
         * Version: 1.2
         *
         * URL:
         * http://javascript.nwbox.com/ContentLoaded/
         * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
         *
         */
        i.cookieOvenRequest = function(e, o, n) {
                try {
                    e.open("GET", o, !0), e.send()
                } catch (e) {
                    n && n(e)
                }
            }, i.cookieOvenClient = function(e, o, n, t) {
                if ("withCredentials" in new XMLHttpRequest) {
                    var r = [a];
                    try {
                        if (!n) throw new Error("Cannot make request to cross domain cookie service when domain is not set.");
                        if (r.indexOf(e) <= -1) throw new Error("Cookie name is not in the whitelist accepted by the cross domain cookie service.");
                        var c = {
                                com: "co.uk",
                                "co.uk": "com"
                            }[n.match(/(co.uk|com)/)[0]],
                            s = function(e) {
                                var o = new XMLHttpRequest;
                                return o.withCredentials = !0, o.onload = function() {
                                    e && e(null, o.status)
                                }, o.onerror = function(n) {
                                    d("Request to cross domain cookie service encountered an error with code" + o.status + ". " + n, e)
                                }, o.onabort = function() {
                                    d("Request to cross domain cookie service was aborted.", e)
                                }, o.ontimeout = function() {
                                    d("Request to cross domain cookie service timed out.", e)
                                }, o
                            }(t),
                            u = function(e, o, n) {
                                return window.orb.partialCookieOvenUrl + "." + e + "/" + o + "/" + n
                            }(c, e, o);
                        i.cookieOvenRequest(s, u, t)
                    } catch (e) {
                        t && t(e)
                    }
                } else t(new Error("Cannot make request to cross domain cookie service as this browser does not support XmlHttpRequest with credentials."))
            }, i.set = function(e, o, n, t) {
                var r, c;
                if (void 0 !== o) {
                    c = k(r = y(e), o, n);
                    var a = n && n.crossDomainEnabled;
                    i.isAllowed(r) && a && i.cookieOvenClient(e, o, n.domain, t)
                } else r = function(e) {
                    var o = ("" + e).match(/^([^=]+)(?==)/);
                    return o && o.length ? o[0] : ""
                }(e), c = e;
                i.isAllowed(r) && (document.cookie = c)
            }, i.isAllowed = function(e) {
                return function(e) {
                    var o = JSON.stringify(e);
                    if (void 0 !== u[o]) return u[o];
                    var n = "";
                    for (var t in e) e.hasOwnProperty(t) && l[t] && !0 === e[t] && (n += (n ? "|" : "") + l[t]);
                    return u[o] = new RegExp("^(" + (n || ".*") + ")$", "i"), u[o]
                }(i.readPolicy()).test(e)
            }, i.readPolicy = function(e) {
                var o = b();
                return e ? o[e] : o
            }, i.analyticsPolicyString = function() {
                var e = b();
                return "ad" + +e.ads + "ps" + +e.personalisation + "pf" + +e.performance
            }, i.get = function(e) {
                return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : document.cookie
            }, i.isCookiePolicySet = function() {
                return null !== i.get(a)
            }, i.setDefaultCookiesSingleDomain = function() {
                v(s, !1)
            }, i.setDefaultCookiesCrossDomain = function() {
                v(s, !0)
            }, i.copyPolicyCookiesCrossDomain = function(e) {
                v(i.readPolicy(), !0, e)
            }, i.setCookiePolicyCrossDomain = function(e) {
                v(e, !0)
            }, i._setPolicy = function(e, o, n, t) {
                var r = i.readPolicy();
                r[e] = !!o, v(r, !n, t)
            }, i.cookiesEnabled = function() {
                var e = "ckns_cookietest" + Math.floor(1e5 * Math.random());
                return this.set(e, "1"), !!this.get(e) && (this.delete(e), !0)
            }, i.delete = function(e, o) {
                m(e = y(e), o)
            }, i.del = i.delete, i._crunch = function() {
                f("");
                for (var e = document.cookie.split(";"), o = 0; o < e.length; o++) {
                    var n = e[o].split("=")[0].trim();
                    this.isAllowed(n) || f(n)
                }
            }, i._getCurrentDomain = function() {
                try {
                    return window.location.hostname.toLowerCase().match(/.*(bbc\.co\.uk|bbc\.com)\/*/)[1]
                } catch (e) {
                    return
                }
            }, i._getPolicy = i.readPolicy, String.prototype.trim || (r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, String.prototype.trim = function() {
                return this.replace(r, "")
            }),
            function(e, o) {
                var n = !1,
                    t = !0,
                    i = e.document,
                    r = i.documentElement,
                    c = i.addEventListener,
                    a = c ? "addEventListener" : "attachEvent",
                    s = c ? "removeEventListener" : "detachEvent",
                    u = c ? "" : "on",
                    l = function(t) {
                        "readystatechange" === t.type && "complete" != i.readyState || (("load" === t.type ? e : i)[s](u + t.type, l, !1), !n && (n = !0) && o.call(e, t.type || t))
                    },
                    d = function() {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return void setTimeout(d, 50)
                        }
                        l("poll")
                    };
                if ("complete" === i.readyState) o.call(e, "lazy");
                else {
                    if (!c && r.doScroll) {
                        try {
                            t = !e.frameElement
                        } catch (e) {}
                        t && d()
                    }
                    i[a](u + "DOMContentLoaded", l, !1), i[a](u + "readystatechange", l, !1), e[a](u + "load", l, !1)
                }
            }(window, function() {
                i._crunch()
            }), window.addEventListener ? window.addEventListener("beforeunload", function() {
                i._crunch()
            }, !1) : window.attachEvent ? window.attachEvent("onbeforeunload", function() {
                i._crunch()
            }) : window.onbeforeunload = function() {
                i._crunch()
            }, "object" == typeof window.bbccookies && "function" == typeof window.bbccookies._getCookieName || (window.bbccookies = i, void 0 === (t = function() {
                return i
            }.call(o, n, o, e)) || (e.exports = t))
    }()
}]);