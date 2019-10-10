function StrategyInterface() {}

function OoyalaStrategy(player) {
    this.player_ = player, this.ready_ = !1, this.currentAdPosition_ = void 0, this.videoPlayed_ = !1, this.adPlayed_ = !1, this.viewStartTime_ = void 0, this.adStartTime_ = void 0, this.autoplayType_ = void 0, this.initialize_()
}

function AppMeasurement(r) {
    var a = this;
    a.version = "2.8.2";
    var k = window;
    k.s_c_in || (k.s_c_il = [], k.s_c_in = 0), a._il = k.s_c_il, a._in = k.s_c_in, a._il[a._in] = a, k.s_c_in++, a._c = "s_c";
    var p = k.AppMeasurement.Xb;
    p || (p = null);
    var m, s, n = k;
    try {
        for (m = n.parent, s = n.location; m && m.location && s && "" + m.location != "" + s && n.location && "" + m.location != "" + n.location && m.location.host == s.host;) n = m, m = n.parent
    } catch (u) {}
    a.F = function(a) {
        try {} catch (b) {}
    }, a.Oa = function(a) {
        return "" + parseInt(a) == "" + a
    }, a.replace = function(a, b, d) {
        return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d)
    }, a.escape = function(c) {
        var b, d;
        if (!c) return c;
        for (c = encodeURIComponent(c), b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return c
    }, a.unescape = function(c) {
        if (!c) return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
        try {
            return decodeURIComponent(c)
        } catch (b) {}
        return unescape(c)
    }, a.Fb = function() {
        var d, c = k.location.hostname,
            b = a.fpCookieDomainPeriods;
        if (b || (b = a.cookieDomainPeriods), c && !a.Ga && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
            for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
            a.Ga = 0 < d ? c.substring(d) : c
        }
        return a.Ga
    }, a.c_r = a.cookieRead = function(c) {
        c = a.escape(c);
        var b = " " + a.d.cookie,
            d = b.indexOf(" " + c + "="),
            f = 0 > d ? d : b.indexOf(";", d);
        return c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f)), "[[B]]" != c ? c : ""
    }, a.c_w = a.cookieWrite = function(c, b, d) {
        var g, f = a.Fb(),
            e = a.cookieLifetime;
        return b = "" + b, e = e ? ("" + e).toUpperCase() : "", d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1e3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0)))), c && "NONE" != e ? (a.d.cookie = a.escape(c) + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toUTCString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
    }, a.Cb = function() {
        var c = a.Util.getIeVersion();
        "number" == typeof c && 10 > c && (a.unsupportedBrowser = !0, a.rb(a, function() {}))
    }, a.rb = function(a, b) {
        for (var d in a) a.hasOwnProperty(d) && "function" == typeof a[d] && (a[d] = b)
    }, a.L = [], a.ja = function(c, b, d) {
        if (a.Ha) return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0,
            e = (new Date).getTime() + a.maxDelay,
            g = a.d.visibilityState,
            h = ["webkitvisibilitychange", "visibilitychange"];
        if (g || (g = a.d.webkitVisibilityState), g && "prerender" == g) {
            if (!a.ka)
                for (a.ka = 1, d = 0; d < h.length; d++) a.d.addEventListener(h[d], function() {
                    var c = a.d.visibilityState;
                    c || (c = a.d.webkitVisibilityState), "visible" == c && (a.ka = 0, a.delayReady())
                });
            f = 1, e = 0
        } else d || a.p("_d") && (f = 1);
        return f && (a.L.push({
            m: c,
            a: b,
            t: e
        }), a.ka || setTimeout(a.delayReady, a.maxDelay)), f
    }, a.delayReady = function() {
        var d, c = (new Date).getTime(),
            b = 0;
        for (a.p("_d") ? b = 1 : a.za(); 0 < a.L.length;) {
            if (d = a.L.shift(), b && !d.t && d.t > c) {
                a.L.unshift(d), setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                break
            }
            a.Ha = 1, a[d.m].apply(a, d.a), a.Ha = 0
        }
    }, a.setAccount = a.sa = function(c) {
        var b, d;
        if (!a.ja("setAccount", arguments))
            if (a.account = c, a.allAccounts)
                for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
            else a.allAccounts = c.split(",")
    }, a.foreachVar = function(c, b) {
        var d, f, e, g, h = "";
        for (e = f = "", a.lightProfileID ? (d = a.P, (h = a.lightTrackVars) && (h = "," + h + "," + a.oa.join(",") + ",")) : (d = a.g, (a.pe || a.linkType) && (h = a.linkTrackVars, f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (h = a[e].Vb, f = a[e].Ub))), h && (h = "," + h + "," + a.H.join(",") + ","), f && h && (h += ",events,")), b && (b = "," + b + ","), f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!h || 0 <= h.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    }, a.r = function(c, b, d, f, e) {
        var h, l, k, q, g = "",
            m = 0;
        if ("contextData" == c && (c = "c"), b) {
            for (h in b)
                if (!(Object.prototype[h] || e && h.substring(0, e.length) != e) && b[h] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + h + ","))) {
                    if (k = !1, m)
                        for (l = 0; l < m.length; l++) h.substring(0, m[l].length) == m[l] && (k = !0);
                    if (!k && ("" == g && (g += "&" + c + "."), l = b[h], e && (h = h.substring(e.length)), 0 < h.length))
                        if (k = h.indexOf("."), 0 < k) l = h.substring(0, k), k = (e ? e : "") + l + ".", m || (m = []), m.push(k), g += a.r(l, b, d, f, k);
                        else if ("boolean" == typeof l && (l = l ? "true" : "false"), l) {
                        if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (k = h.substring(0, 4), q = h.substring(4), h) {
                            case "transactionID":
                                h = "xact";
                                break;
                            case "channel":
                                h = "ch";
                                break;
                            case "campaign":
                                h = "v0";
                                break;
                            default:
                                a.Oa(q) && ("prop" == k ? h = "c" + q : "eVar" == k ? h = "v" + q : "list" == k ? h = "l" + q : "hier" == k && (h = "h" + q, l = l.substring(0, 255)))
                        }
                        g += "&" + a.escape(h) + "=" + a.escape(l)
                    }
                }
            "" != g && (g += "&." + c)
        }
        return g
    }, a.usePostbacks = 0, a.Ib = function() {
        var b, d, f, e, g, h, l, k, c = "",
            q = "",
            m = "",
            n = e = "";
        if (a.lightProfileID ? (b = a.P, (q = a.lightTrackVars) && (q = "," + q + "," + a.oa.join(",") + ",")) : (b = a.g, (a.pe || a.linkType) && (q = a.linkTrackVars, m = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (q = a[e].Vb, m = a[e].Ub))), q && (q = "," + q + "," + a.H.join(",") + ","), m && (m = "," + m + ",", q && (q += ",events,")), a.events2 && (n += ("" != n ? "," : "") + a.events2)), a.visitor && a.visitor.getCustomerIDs) {
            if (e = p, g = a.visitor.getCustomerIDs())
                for (d in g) Object.prototype[d] || (f = g[d], "object" == typeof f && (e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState)));
            e && (c += a.r("cid", e))
        }
        for (a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.r("d", a.AudienceManagement.getEventCallConfigParams())), d = 0; d < b.length; d++) {
            if (e = b[d], g = a[e], f = e.substring(0, 4), h = e.substring(4), g || ("events" == e && n ? (g = n, n = "") : "marketingCloudOrgID" == e && a.visitor && (g = a.visitor.marketingCloudOrgID)), g && (!q || 0 <= q.indexOf("," + e + ","))) {
                switch (e) {
                    case "customerPerspective":
                        e = "cp";
                        break;
                    case "marketingCloudOrgID":
                        e = "mcorgid";
                        break;
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g", 255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf", a.ssl && a.visitorMigrationServerSecure && (g = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf", !a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e = "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        if (n && (g += ("" != g ? "," : "") + n), m)
                            for (h = g.split(","), g = "", f = 0; f < h.length; f++) l = h[f], k = l.indexOf("="), 0 <= k && (l = l.substring(0, k)), k = l.indexOf(":"), 0 <= k && (l = l.substring(0, k)), 0 <= m.indexOf("," + l + ",") && (g += (g ? "," : "") + h[f]);
                        break;
                    case "events2":
                        g = "";
                        break;
                    case "contextData":
                        c += a.r("c", a[e], q, e), g = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss", a.lightProfileID || (g = "");
                        break;
                    case "lightIncrementBy":
                        e = "mti", a.lightProfileID || (g = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e = "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (c += a.r("mts", a[e], q, e)), g = "";
                        break;
                    default:
                        a.Oa(h) && ("prop" == f ? e = "c" + h : "eVar" == f ? e = "v" + h : "list" == f ? e = "l" + h : "hier" == f && (e = "h" + h, g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.e && (c += a.e)
        }
        return a.na && (c += "&lrt=" + a.na, a.na = null), c
    }, a.D = function(a) {
        var b = a.tagName;
        return "undefined" != "" + a.$b || "undefined" != "" + a.Qb && "HTML" != ("" + a.Qb).toUpperCase() ? "" : (b = b && b.toUpperCase ? b.toUpperCase() : "", "SHAPE" == b && (b = ""), b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A")), b)
    }, a.Ka = function(a) {
        var f, e, g, b = k.location,
            d = a.href ? a.href : "";
        return f = d.indexOf(":"), e = d.indexOf("?"), g = d.indexOf("/"), d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : "", f = b.pathname.lastIndexOf("/"), d = (e ? e + "//" : "") + (a.host ? a.host : b.host ? b.host : "") + ("/" != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d), d
    }, a.M = function(c) {
        var d, f, b = a.D(c),
            e = "",
            g = 0;
        return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : "IMAGE" == b && c.src && (e = c.src) : e = a.Ka(c), e) ? {
            id: e.substring(0, 100),
            type: g
        } : 0
    }, a.Yb = function(c) {
        for (var b = a.D(c), d = a.M(c); c && !d && "BODY" != b;)(c = c.parentElement ? c.parentElement : c.parentNode) && (b = a.D(c), d = a.M(c));
        return d && "BODY" != b || (c = 0), c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0), c
    }, a.Pb = function() {
        var c, b, g, h, d = a.linkObject,
            f = a.linkType,
            e = a.linkURL;
        if (a.pa = 1, d || (a.pa = 0, d = a.clickObject), d) {
            for (c = a.D(d), b = a.M(d); d && !b && "BODY" != c;)(d = d.parentElement ? d.parentElement : d.parentNode) && (c = a.D(d), b = a.M(d));
            if (b && "BODY" != c || (d = 0), d && !a.linkObject) {
                var l = d.onclick ? "" + d.onclick : "";
                (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) && (d = 0)
            }
        } else a.pa = 1;
        if (!e && d && (e = a.Ka(d)), e && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g))), !f && e) {
            var n, m = 0,
                q = 0;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (l = e.toLowerCase(), g = l.indexOf("?"), h = l.indexOf("#"), 0 <= g ? 0 <= h && h < g && (g = h) : g = h, 0 <= g && (l = l.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), h = 0; h < g.length; h++)(n = g[h]) && l.substring(l.length - (n.length + 1)) == "." + n && (f = "d");
            if (a.trackExternalLinks && !f && (l = e.toLowerCase(), a.Na(l) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), m = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                for (h = 0; h < g.length; h++) n = g[h], 0 <= l.indexOf(n) && (q = 1);
                q ? m && (f = "e") : m || (f = "e")
            }
        }
        a.linkObject = d, a.linkURL = e, a.linkType = f, (a.trackClickMap || a.trackInlineStats) && (a.e = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : ""))))
    }, a.Jb = function() {
        var c = a.pa,
            b = a.linkType,
            d = a.linkURL,
            f = a.linkName;
        if (b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1), a.abort && (c = 0), a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
            var h, l, k, b = {},
                d = 0,
                e = a.cookieRead("s_sq"),
                g = e ? e.split("&") : 0,
                e = 0;
            if (g)
                for (h = 0; h < g.length; h++) l = g[h].split("="), f = a.unescape(l[0]).split(","), l = a.unescape(l[1]), b[l] = f;
            f = a.account.split(","), h = {};
            for (k in a.contextData) k && !Object.prototype[k] && "a.activitymap." == k.substring(0, 14) && (h[k] = a.contextData[k], a.contextData[k] = "");
            if (a.e = a.r("c", h) + (a.e ? a.e : ""), c || a.e) {
                c && !a.e && (e = 1);
                for (l in b)
                    if (!Object.prototype[l])
                        for (k = 0; k < f.length; k++)
                            for (e && (g = b[l].join(","), g == a.account && (a.e += ("&" != l.charAt(0) ? "&" : "") + l, b[l] = [], d = 1)), h = 0; h < b[l].length; h++) g = b[l][h], g == f[k] && (e && (a.e += "&u=" + a.escape(g) + ("&" != l.charAt(0) ? "&" : "") + l + "&u=0"), b[l].splice(h, 1), d = 1);
                if (c || (d = 1), d) {
                    e = "", h = 2, !c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e), h = 1);
                    for (l in b) !Object.prototype[l] && 0 < h && 0 < b[l].length && (e += (e ? "&" : "") + a.escape(b[l].join(",")) + "=" + a.escape(l), h--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    }, a.Kb = function() {
        if (!a.Tb) {
            var d, f, c = new Date,
                b = n.location,
                e = f = d = "",
                g = "",
                h = "",
                l = "1.2",
                k = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                m = "",
                p = "";
            if (c.setUTCDate && (l = "1.3", (0).toPrecision && (l = "1.5", c = [], c.forEach))) {
                l = "1.6", f = 0, d = {};
                try {
                    f = new Iterator(d), f.next && (l = "1.7", c.reduce && (l = "1.8", l.trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5")))))
                } catch (r) {}
            }
            d = screen.width + "x" + screen.height, e = navigator.javaEnabled() ? "Y" : "N", f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth, h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"), m = a.b.Zb(b) ? "Y" : "N"
            } catch (s) {}
            try {
                a.b.addBehavior("#default#clientCaps"), p = a.b.connectionType
            } catch (t) {}
            a.resolution = d, a.colorDepth = f, a.javascriptVersion = l, a.javaEnabled = e, a.cookiesEnabled = k, a.browserWidth = g, a.browserHeight = h, a.connectionType = p, a.homepage = m, a.Tb = 1
        }
    }, a.Q = {}, a.loadModule = function(c, b) {
        var d = a.Q[c];
        if (!d) {
            d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](a) : {}, a.Q[c] = a[c] = d, d.kb = function() {
                return d.qb
            }, d.sb = function(b) {
                (d.qb = b) && (a[c + "_onLoad"] = b, a.ja(c + "_onLoad", [a, d], 1) || b(a, d))
            };
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                    get: d.kb,
                    set: d.sb
                }) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        b && (a[c + "_onLoad"] = b, a.ja(c + "_onLoad", [a, d], 1) || b(a, d))
    }, a.p = function(c) {
        var b, d;
        for (b in a.Q)
            if (!Object.prototype[b] && (d = a.Q[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
        return 0
    }, a.Mb = function() {
        var c = Math.floor(1e13 * Math.random()),
            b = a.visitorSampling,
            d = a.visitorSamplingGroup,
            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
            f = a.cookieRead(d);
        if (b) {
            if (b *= 100, f && (f = parseInt(f)), !f) {
                if (!a.cookieWrite(d, c)) return 0;
                f = c
            }
            if (f % 1e4 > b) return 0
        }
        return 1
    }, a.R = function(c, b) {
        var d, f, e, g, h, l;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.Ca : a.g, e = 0; e < f.length; e++)
                if (g = f[e], (h = c[g]) || c["!" + g]) {
                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (l in a[g]) h[l] || (h[l] = a[g][l]);
                    a[g] = h
                }
    }, a.Ya = function(c, b) {
        var d, f, e, g;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.Ca : a.g, e = 0; e < f.length; e++) g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
    }, a.Eb = function(a) {
        var b, d, f, e, g, l, h = 0,
            k = "",
            m = "";
        if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (l = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? h = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (h = ",p,ei,"), h && l)))) {
            if ((a = l.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= h.indexOf("," + e.substring(0, d) + ",") ? k += (k ? "&" : "") + e : m += (m ? "&" : "") + e;
                k && m ? l = k + "&" + m : m = ""
            }
            d = 253 - (l.length - m.length) - b.length, a = b + (0 < d ? g.substring(0, d) : "") + "?" + l
        }
        return a
    }, a.eb = function(c) {
        var b = a.d.visibilityState,
            d = ["webkitvisibilitychange", "visibilitychange"];
        if (b || (b = a.d.webkitVisibilityState), b && "prerender" == b) {
            if (c)
                for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {
                    var b = a.d.visibilityState;
                    b || (b = a.d.webkitVisibilityState), "visible" == b && c()
                });
            return !1
        }
        return !0
    }, a.fa = !1, a.J = !1, a.ub = function() {
        a.J = !0, a.j()
    }, a.da = !1, a.V = !1, a.pb = function(c) {
        a.marketingCloudVisitorID = c, a.V = !0, a.j()
    }, a.ga = !1, a.W = !1, a.vb = function(c) {
        a.visitorOptedOut = c, a.W = !0, a.j()
    }, a.aa = !1, a.S = !1, a.$a = function(c) {
        a.analyticsVisitorID = c, a.S = !0, a.j()
    }, a.ca = !1, a.U = !1, a.bb = function(c) {
        a.audienceManagerLocationHint = c, a.U = !0, a.j()
    }, a.ba = !1, a.T = !1, a.ab = function(c) {
        a.audienceManagerBlob = c, a.T = !0, a.j()
    }, a.cb = function(c) {
        return a.maxDelay || (a.maxDelay = 250), !a.p("_d") || (c && setTimeout(function() {
            c()
        }, a.maxDelay), !1)
    }, a.ea = !1, a.I = !1, a.za = function() {
        a.I = !0, a.j()
    }, a.isReadyToTrack = function() {
        var d, f, e, c = !0,
            b = a.visitor;
        return a.fa || a.J || (a.eb(a.ub) ? a.J = !0 : a.fa = !0), !(a.fa && !a.J) && (b && b.isAllowed() && (a.da || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.da = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.pb]), a.marketingCloudVisitorID && (a.V = !0)), a.ga || a.visitorOptedOut || !b.isOptedOut || (a.ga = !0, a.visitorOptedOut = b.isOptedOut([a, a.vb]), a.visitorOptedOut != p && (a.W = !0)), a.aa || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.aa = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.$a]), a.analyticsVisitorID && (a.S = !0)), a.ca || a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.ca = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.bb]), a.audienceManagerLocationHint && (a.U = !0)), a.ba || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.ba = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.ab]), a.audienceManagerBlob && (a.T = !0)), c = a.da && !a.V && !a.marketingCloudVisitorID, b = a.aa && !a.S && !a.analyticsVisitorID, d = a.ca && !a.U && !a.audienceManagerLocationHint, f = a.ba && !a.T && !a.audienceManagerBlob, e = a.ga && !a.W, c = !(c || b || d || f || e)), a.ea || a.I || (a.cb(a.za) ? a.I = !0 : a.ea = !0), a.ea && !a.I && (c = !1), c)
    }, a.o = p, a.u = 0, a.callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {}, f.zb = c, f.yb = b, f.wb = d, a.o == p && (a.o = []), a.o.push(f), 0 == a.u && (a.u = setInterval(a.j, 100))
    }, a.j = function() {
        var c;
        if (a.isReadyToTrack() && (a.tb(), a.o != p))
            for (; 0 < a.o.length;) c = a.o.shift(), c.yb.apply(c.zb, c.wb)
    }, a.tb = function() {
        a.u && (clearInterval(a.u), a.u = 0)
    }, a.mb = function(c) {
        var b, d, f = p,
            e = p;
        if (!a.isReadyToTrack()) {
            if (b = [], c != p)
                for (d in f = {}, c) f[d] = c[d];
            return e = {}, a.Ya(e, !0), b.push(f), b.push(e), a.callbackWhenReadyToTrack(a, a.track, b), !0
        }
        return !1
    }, a.Gb = function() {
        var f, c = a.cookieRead("s_fid"),
            b = "",
            d = "";
        f = 8;
        var e = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
            c = b + "-" + d
        }
        return a.cookieWrite("s_fid", c, 1) || (c = 0), c
    }, a.t = a.track = function(c, b) {
        var d, f = new Date,
            e = "s" + Math.floor(f.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
            g = f.getYear(),
            g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " + f.getDay() + " " + f.getTimezoneOffset());
        a.visitor && a.visitor.getAuthState && (a.authState = a.visitor.getAuthState()), a.p("_s"), a.mb(c) || (b && a.R(b), c && (d = {}, a.Ya(d, 0), a.R(c)), a.Mb() && !a.visitorOptedOut && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.Gb()), a.Pb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1e3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Za || (f = a.Util.getQueryParam("adobe_mc_ref", null, null, !0), a.referrer = f || void 0 === f ? void 0 === f ? "" : f : n.document.referrer), a.Za = 1, a.referrer = a.Eb(a.referrer), a.p("_g")), a.Jb() && !a.abort && (a.visitor && !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, !a.expectSupplementalData)), a.Kb(), g += a.Ib(), a.ob(e, g), a.p("_t"), a.referrer = ""))), c && a.R(d, 1)), a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0
    }, a.Ba = [], a.registerPreTrackCallback = function(c) {
        for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
        "function" == typeof c ? a.Ba.push([c, b]) : a.debugTracking && a.F("DEBUG: Non function type passed to registerPreTrackCallback")
    }, a.hb = function(c) {
        a.xa(a.Ba, c)
    }, a.Aa = [], a.registerPostTrackCallback = function(c) {
        for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
        "function" == typeof c ? a.Aa.push([c, b]) : a.debugTracking && a.F("DEBUG: Non function type passed to registerPostTrackCallback")
    }, a.gb = function(c) {
        a.xa(a.Aa, c)
    }, a.xa = function(c, b) {
        if ("object" == typeof c)
            for (var d = 0; d < c.length; d++) {
                var f = c[d][0],
                    e = c[d][1];
                if (e.unshift(b), "function" == typeof f) try {
                    f.apply(null, e)
                } catch (g) {
                    a.debugTracking && a.F(g.message)
                }
            }
    }, a.tl = a.trackLink = function(c, b, d, f, e) {
        return a.linkObject = c, a.linkType = b, a.linkName = d, e && (a.l = c, a.A = e), a.track(f)
    }, a.trackLight = function(c, b, d, f) {
        return a.lightProfileID = c, a.lightStoreForSeconds = b, a.lightIncrementBy = d, a.track(f)
    }, a.clearVars = function() {
        var c, b;
        for (c = 0; c < a.g.length; c++) b = a.g[c], ("prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) && (a[b] = void 0)
    }, a.tagContainerMarker = "", a.ob = function(c, b) {
        var d = a.ib() + "/" + c + "?AQB=1&ndh=1&pf=1&" + (a.ya() ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1";
        a.hb(d), a.fb(d), a.X()
    }, a.ib = function() {
        var c = a.jb();
        return "http" + (a.ssl ? "s" : "") + "://" + c + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (a.ya() ? "10" : "1") + "/JS-" + a.version + (a.Sb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "")
    }, a.ya = function() {
        return a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks
    }, a.jb = function() {
        var c = a.dc,
            b = a.trackingServer;
        return b ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure) : (c = c ? ("" + c).toLowerCase() : "d1", "d1" == c ? c = "112" : "d2" == c && (c = "122"), b = a.lb() + "." + c + ".2o7.net"), b
    }, a.lb = function() {
        var c = a.visitorNamespace;
        return c || (c = a.account.split(",")[0], c = c.replace(/[^0-9a-z]/gi, "")), c
    }, a.Xa = /{(%?)(.*?)(%?)}/, a.Wb = RegExp(a.Xa.source, "g"), a.Db = function(c) {
        if ("object" == typeof c.dests)
            for (var b = 0; b < c.dests.length; ++b) {
                var d = c.dests[b];
                if ("string" == typeof d.c && "aa." == d.id.substr(0, 3))
                    for (var f = d.c.match(a.Wb), e = 0; e < f.length; ++e) {
                        var g = f[e],
                            h = g.match(a.Xa),
                            k = "";
                        "%" == h[1] && "timezone_offset" == h[2] ? k = (new Date).getTimezoneOffset() : "%" == h[1] && "timestampz" == h[2] && (k = a.Hb()), d.c = d.c.replace(g, a.escape(k))
                    }
            }
    }, a.Hb = function() {
        var c = new Date,
            b = new Date(6e4 * Math.abs(c.getTimezoneOffset()));
        return a.k(4, c.getFullYear()) + "-" + a.k(2, c.getMonth() + 1) + "-" + a.k(2, c.getDate()) + "T" + a.k(2, c.getHours()) + ":" + a.k(2, c.getMinutes()) + ":" + a.k(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a.k(2, b.getUTCHours()) + ":" + a.k(2, b.getUTCMinutes())
    }, a.k = function(a, b) {
        return (Array(a + 1).join(0) + b).slice(-a)
    }, a.ua = {}, a.doPostbacks = function(c) {
        if ("object" == typeof c)
            if (a.Db(c), "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData) a.AudienceManagement.passData(c);
            else if ("object" == typeof c && "object" == typeof c.dests)
            for (var b = 0; b < c.dests.length; ++b) {
                var d = c.dests[b];
                "object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0, 3) && (a.ua[d.id] = new Image, a.ua[d.id].alt = "", a.ua[d.id].src = d.c)
            }
    }, a.fb = function(c) {
        a.i || a.Lb(), a.i.push(c), a.ma = a.C(), a.Va()
    }, a.Lb = function() {
        a.i = a.Nb(), a.i || (a.i = [])
    }, a.Nb = function() {
        var c, b;
        if (a.ta()) {
            try {
                (b = k.localStorage.getItem(a.qa())) && (c = k.JSON.parse(b))
            } catch (d) {}
            return c
        }
    }, a.ta = function() {
        var c = !0;
        return a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1), c
    }, a.La = function() {
        var c = 0;
        return a.i && (c = a.i.length), a.q && c++, c
    }, a.X = function() {
        if (!a.q || (a.B && a.B.complete && a.B.G && a.B.wa(), !a.q))
            if (a.Ma = p, a.ra) a.ma > a.O && a.Ta(a.i), a.va(500);
            else {
                var c = a.xb();
                0 < c ? a.va(c) : (c = a.Ia()) && (a.q = 1, a.Ob(c), a.Rb(c))
            }
    }, a.va = function(c) {
        a.Ma || (c || (c = 0), a.Ma = setTimeout(a.X, c))
    }, a.xb = function() {
        var c;
        return !a.trackOffline || 0 >= a.offlineThrottleDelay ? 0 : (c = a.C() - a.Ra, a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c)
    }, a.Ia = function() {
        if (0 < a.i.length) return a.i.shift()
    }, a.Ob = function(c) {
        if (a.debugTracking) {
            var b = "AppMeasurement Debug: " + c;
            c = c.split("&");
            var d;
            for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
            a.F(b)
        }
    }, a.nb = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    }, a.Z = !1;
    var t;
    try {
        t = JSON.parse('{"x":"y"}')
    } catch (w) {
        t = null
    }
    t && "y" == t.x ? (a.Z = !0, a.Y = function(a) {
        return JSON.parse(a)
    }) : k.$ && k.$.parseJSON ? (a.Y = function(a) {
        return k.$.parseJSON(a)
    }, a.Z = !0) : a.Y = function() {
        return null
    }, a.Rb = function(c) {
        var b, d, f;
        if (a.nb() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2), b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.Z ? b.Da = !0 : b = 0)), !b && a.Wa && (c = c.substring(0, 2047)), !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 3) : b = 0), b || (b = new Image, b.alt = "", b.abort || "undefined" == typeof k.InstallTrigger || (b.abort = function() {
                b.src = p
            })), b.Sa = Date.now(), b.Fa = function() {
                try {
                    b.G && (clearTimeout(b.G), b.G = 0)
                } catch (a) {}
            }, b.onload = b.wa = function() {
                if (b.Sa && (a.na = Date.now() - b.Sa), a.gb(c), b.Fa(), a.Bb(), a.ha(), a.q = 0, a.X(), b.Da) {
                    b.Da = !1;
                    try {
                        a.doPostbacks(a.Y(b.responseText))
                    } catch (d) {}
                }
            }, b.onabort = b.onerror = b.Ja = function() {
                b.Fa(), (a.trackOffline || a.ra) && a.q && a.i.unshift(a.Ab), a.q = 0, a.ma > a.O && a.Ta(a.i), a.ha(), a.va(500)
            }, b.onreadystatechange = function() {
                4 == b.readyState && (200 == b.status ? b.wa() : b.Ja())
            }, a.Ra = a.C(), 1 == d || 2 == d) {
            var e = c.indexOf("?");
            f = c.substring(0, e), e = c.substring(e + 1), e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), 1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
        } else if (b.src = c, 3 == d) {
            if (a.Pa) try {
                f.removeChild(a.Pa)
            } catch (g) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b), a.Pa = a.B
        }
        b.G = setTimeout(function() {
            b.G && (b.complete ? b.wa() : (a.trackOffline && b.abort && b.abort(), b.Ja()))
        }, 5e3), a.Ab = c, a.B = k["s_i_" + a.replace(a.account, ",", "_")] = b, (a.useForcedLinkTracking && a.K || a.A) && (a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.ia = setTimeout(a.ha, a.forcedLinkTrackingTimeout))
    }, a.Bb = function() {
        if (a.ta() && !(a.Qa > a.O)) try {
            k.localStorage.removeItem(a.qa()), a.Qa = a.C()
        } catch (c) {}
    }, a.Ta = function(c) {
        if (a.ta()) {
            a.Va();
            try {
                k.localStorage.setItem(a.qa(), k.JSON.stringify(c)), a.O = a.C()
            } catch (b) {}
        }
    }, a.Va = function() {
        if (a.trackOffline)
            for ((!a.offlineLimit || 0 >= a.offlineLimit) && (a.offlineLimit = 10); a.i.length > a.offlineLimit;) a.Ia()
    }, a.forceOffline = function() {
        a.ra = !0
    }, a.forceOnline = function() {
        a.ra = !1
    }, a.qa = function() {
        return a.offlineFilename + "-" + a.visitorNamespace + a.account
    }, a.C = function() {
        return (new Date).getTime()
    }, a.Na = function(a) {
        return a = a.toLowerCase(), 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:")
    }, a.setTagContainer = function(c) {
        var b, d, f;
        for (a.Sb = c, b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
                if (a.R(d), d.lmq)
                    for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
                if (d.ml)
                    for (f in d.ml)
                        if (a[f])
                            for (b in c = a[f], f = d.ml[f]) !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
                if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                if (d.tq)
                    for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                d.s = a;
                break
            }
    }, a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(c, b, d, f) {
            var e, g = "";
            return b || (b = a.pageURL ? a.pageURL : k.location), d = d ? d : "&", c && b ? (b = "" + b, e = b.indexOf("?"), 0 > e ? g : (b = d + b.substring(e + 1) + d, f && (0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + "=" + d)) ? void 0 : (e = b.indexOf("#"), 0 <= e && (b = b.substr(0, e) + d), e = b.indexOf(d + c + "="), 0 > e ? g : (b = b.substring(e + d.length + c.length + 1), e = b.indexOf(d), 0 <= e && (b = b.substring(0, e)), 0 < b.length && (g = a.unescape(b)), g)))) : g
        },
        getIeVersion: function() {
            if (document.documentMode) return document.documentMode;
            for (var a = 7; 4 < a; a--) {
                var b = document.createElement("div");
                if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return a
            }
            return null
        }
    }, a.H = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "), a.g = a.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), a.oa = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), a.P = a.oa.slice(0), a.Ca = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
    for (m = 0; 250 >= m; m++) 76 > m && (a.g.push("prop" + m), a.P.push("prop" + m)), a.g.push("eVar" + m), a.P.push("eVar" + m), 6 > m && a.g.push("hier" + m), 4 > m && a.g.push("list" + m);
    m = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" "), a.g = a.g.concat(m), a.H = a.H.concat(m), a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https"), a.charSet = "UTF-8", a.contextData = {}, a.offlineThrottleDelay = 0, a.offlineFilename = "AppMeasurement.offline", a.Ra = 0, a.ma = 0, a.O = 0, a.Qa = 0, a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", a.w = k, a.d = k.document;
    try {
        if (a.Wa = !1, navigator) {
            var v = navigator.userAgent;
            ("Microsoft Internet Explorer" == navigator.appName || 0 <= v.indexOf("MSIE ") || 0 <= v.indexOf("Trident/") && 0 <= v.indexOf("Windows NT 6")) && (a.Wa = !0)
        }
    } catch (x) {}
    a.ha = function() {
        a.ia && (k.clearTimeout(a.ia), a.ia = p), a.l && a.K && a.l.dispatchEvent(a.K), a.A && ("function" == typeof a.A ? a.A() : a.l && a.l.href && (a.d.location = a.l.href)), a.l = a.K = a.A = 0
    }, a.Ua = function() {
        a.b = a.d.body, a.b ? (a.v = function(c) {
            var b, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.Ea) {
                    if (!a.useForcedLinkTracking) return a.b.removeEventListener("click", a.v, !0), void(a.Ea = a.useForcedLinkTracking = 0);
                    a.b.removeEventListener("click", a.v, !1)
                } else a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.N && a.N == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = 0;
                    else {
                        var h = a.N = a.clickObject;
                        if (a.la && (clearTimeout(a.la), a.la = 0), a.la = setTimeout(function() {
                                a.N == h && (a.N = 0)
                            }, 1e4), f = a.La(), a.track(), f < a.La() && a.useForcedLinkTracking && c.target) {
                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
                            if (e && (g = e.href, a.Na(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                try {
                                    b = a.d.createEvent("MouseEvents")
                                } catch (l) {
                                    b = new k.MouseEvent
                                }
                                if (b) {
                                    try {
                                        b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                    } catch (m) {
                                        b = 0
                                    }
                                    b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.l = c.target, a.K = b)
                                }
                            }
                        }
                    }
                } catch (n) {
                    a.clickObject = 0
                }
            }
        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.v) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.Ea = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.v, !0)), a.b.addEventListener("click", a.v, !1))) : setTimeout(a.Ua, 30)
    }, a.Cb(), a.ac || (r ? a.setAccount(r) : a.F("Error, missing Report Suite ID in AppMeasurement initialization"), a.Ua(), a.loadModule("ActivityMap"))
}

function s_gi(r) {
    var a, p, n, s, u, k = window.s_c_il,
        m = r.split(","),
        t = 0;
    if (k)
        for (p = 0; !t && p < k.length;) {
            if (a = k[p], "s_c" == a._c && (a.account || a.oun))
                if (a.account && a.account == r) t = 1;
                else
                    for (n = a.account ? a.account : a.oun,
                        n = a.allAccounts ? a.allAccounts : n.split(","), s = 0; s < m.length; s++)
                        for (u = 0; u < n.length; u++) m[s] == n[u] && (t = 1);
            p++
        }
    return t ? a.setAccount && a.setAccount(r) : a = new AppMeasurement(r), a
}

function s_pgicq() {
    var k, p, n, r = window,
        a = r.s_giq;
    if (a)
        for (k = 0; k < a.length; k++) p = a[k], n = s_gi(p.oun), n.setAccount(p.un), n.setTagContainer(p.tagContainerName);
    r.s_giq = 0
}
StrategyInterface.ContentType = {
        AD: "ad",
        CONTENT: "ct"
    }, StrategyInterface.AdPosition = {
        PREROLL: "a1",
        MIDROLL: "a2",
        POSTROLL: "a3",
        OVERLAY: "a4",
        SPECIAL: "a5"
    }, StrategyInterface.VideoState = {
        UNPLAYED: "s1",
        PLAYED: "s2",
        STOPPED: "s3",
        COMPLETED: "s4"
    }, StrategyInterface.AutoplayType = {
        UNKNOWN: "unkn",
        MANUAL: "man",
        AUTOPLAY: "auto",
        CONTINUOUS: "cont"
    }, StrategyInterface.prototype.isReady = function() {}, StrategyInterface.prototype.getTitle = function() {}, StrategyInterface.prototype.getVideoPath = function() {}, StrategyInterface.prototype.getContentType = function() {}, StrategyInterface.prototype.getAdPosition = function() {}, StrategyInterface.prototype.getTotalDuration = function() {}, StrategyInterface.prototype.getState = function() {}, StrategyInterface.prototype.getCurrentPlayTime = function() {}, StrategyInterface.prototype.getBitrate = function() {}, StrategyInterface.prototype.getThumbnailPath = function() {}, StrategyInterface.prototype.getPlayerType = function() {}, StrategyInterface.prototype.getAutoplayType = function() {}, StrategyInterface.prototype.getViewStartTime = function() {}, StrategyInterface.prototype.getViewPlayTime = function() {}, StrategyInterface.prototype.getViewAdPlayTime = function() {}, StrategyInterface.prototype.getSections = function() {}, StrategyInterface.prototype.getAuthors = function() {}, StrategyInterface.verify = function() {}, OoyalaStrategy.prototype.initialize_ = function() {
        this.viewStartTime_ = this.getTime(), this.subscribeEvents_()
    }, OoyalaStrategy.prototype.subscribeEvents_ = function() {
        var unSubscribes = [];
        espn.video.playerElement ? this.onPlaybackReady_() : unSubscribes.push(jQuery.subscribe("espn.video.ready", this.bind_(this.onPlaybackReady_, this))), unSubscribes.push(jQuery.subscribe("espn.video.ad.start", this.bind_(this.onAdsReady_, this))), unSubscribes.push(jQuery.subscribe("espn.video.play", this.bind_(this.onVideoPlay_, this))), unSubscribes.push(jQuery.subscribe("espn.video.contentStarted", this.bind_(this.onContentStarted_, this))), unSubscribes.push(jQuery.subscribe("espn.video.ad.end", this.bind_(this.onAdsComplete_, this))), unSubscribes.push(jQuery.subscribe("espn.video.ready", this.bind_(this.onMetaDataFetched_, this))), unSubscribes.push(jQuery.subscribe("espn.video.embedCodeChanged", this.bind_(this.onEmbedCodeChanged_, this))), unSubscribes.push(jQuery.subscribe("espn.video.playerjsReady", function() {
            for (var i = 0; i < unSubscribes.length; i++) $.unsubscribe(unSubscribes[i])
        }))
    }, OoyalaStrategy.prototype.bind_ = function(fn, context) {
        return function() {
            return fn.apply(context, arguments)
        }
    }, OoyalaStrategy.prototype.onPlaybackReady_ = function() {
        this.ready_ = !0
    }, OoyalaStrategy.prototype.onAdsReady_ = function() {
        var t = this.player_.getPlayheadTime(),
            d = this.player_.getDuration();
        isNaN(t) && (t = 0), 0 === t ? this.currentAdPosition_ = StrategyInterface.AdPosition.PREROLL : this.areNumbersClose_(t, d) ? this.currentAdPosition_ = StrategyInterface.AdPosition.POSTROLL : this.currentAdPosition_ = StrategyInterface.AdPosition.MIDROLL
    }, OoyalaStrategy.prototype.onVideoPlay_ = function() {
        this.getContentType() === StrategyInterface.ContentType.AD ? (this.adStartTime_ = this.getTime(), this.adPlayed_ = !0) : this.getContentType() === StrategyInterface.ContentType.CONTENT && (this.videoStartTime_ = this.getTime(), this.videoPlayed_ = !0)
    }, OoyalaStrategy.prototype.onContentStarted_ = function(contentId, playType) {
        this.videoPlayed_ = !0, this.autoplayType_ = StrategyInterface.AutoplayType.UNKNOWN, "manual" === playType ? this.autoplayType_ = StrategyInterface.AutoplayType.MANUAL : "autoplay" === playType ? this.autoplayType_ = StrategyInterface.AutoplayType.AUTOPLAY : "continuous" === playType && (this.autoplayType_ = StrategyInterface.AutoplayType.CONTINUOUS)
    }, OoyalaStrategy.prototype.onAdsComplete_ = function() {
        this.currentAdPosition_ = void 0
    }, OoyalaStrategy.prototype.onMetaDataFetched_ = function() {}, OoyalaStrategy.prototype.isReady = function() {
        return espn.video.player.ready && this.getVideoPath()
    }, OoyalaStrategy.prototype.getTitle = function() {
        var item = this.player_.getItem();
        return item ? item.title : ""
    }, OoyalaStrategy.prototype.getVideoPath = function() {
        var item = this.player_.getItem() || {};
        if ("string" == typeof item.externalId) {
            var parts = item.externalId.split(":");
            if (2 == parts.length) return parts[1]
        }
        return item.embedCode || ""
    }, OoyalaStrategy.prototype.getContentType = function() {
        return void 0 === this.currentAdPosition_ ? StrategyInterface.ContentType.CONTENT : StrategyInterface.ContentType.AD
    }, OoyalaStrategy.prototype.getAdPosition = function() {
        return this.currentAdPosition_ ? this.currentAdPosition_ : ""
    }, OoyalaStrategy.prototype.getTotalDuration = function() {
        var d = this.player_.getDuration();
        return d === -1 || isNaN(d) ? -1 : 1e3 * d
    }, OoyalaStrategy.prototype.getState = function() {
        if (!this.videoPlayed_) return StrategyInterface.VideoState.UNPLAYED;
        var state = this.player_.getState();
        if ("paused" === state) return StrategyInterface.VideoState.STOPPED;
        var playTime = this.player_.getPlayheadTime(),
            duration = this.player_.getDuration();
        return this.areNumbersClose_(playTime, duration) ? StrategyInterface.VideoState.COMPLETED : StrategyInterface.VideoState.PLAYED
    }, OoyalaStrategy.prototype.areNumbersClose_ = function(num1, num2) {
        return num1 === num2 || Math.floor(num1) === Math.floor(num2) || Math.ceil(num1) === Math.ceil(num2) || Math.ceil(num1) === Math.floor(num2) || Math.floor(num1) === Math.ceil(num2)
    }, OoyalaStrategy.prototype.timeElapsed_ = function(timestamp) {
        return void 0 === timestamp ? 0 : this.getTime() - timestamp
    }, OoyalaStrategy.prototype.onEmbedCodeChanged_ = function() {
        this.currentAdPosition_ = void 0, this.adStartTime_ = void 0
    }, OoyalaStrategy.prototype.getCurrentPlayTime = function() {
        var pt = this.player_.getPlayheadTime();
        return pt === -1 || isNaN(pt) ? -1 : 1e3 * pt
    }, OoyalaStrategy.prototype.getBitrate = function() {
        return this.player_.getTargetBitrate()
    }, OoyalaStrategy.prototype.getThumbnailPath = function() {
        var item = this.player_.getItem();
        return item ? item.promo : ""
    }, OoyalaStrategy.prototype.getPlayerType = function() {}, OoyalaStrategy.prototype.getAutoplayType = function() {
        return this.autoplayType_
    }, OoyalaStrategy.prototype.getViewStartTime = function() {
        return isNaN(this.viewStartTime_) ? 0 : this.timeElapsed_(this.viewStartTime_)
    }, OoyalaStrategy.prototype.getViewPlayTime = function() {
        return this.videoPlayed_ || this.adPlayed_ ? this.timeElapsed_(this.viewStartTime_) : -1
    }, OoyalaStrategy.prototype.getViewAdPlayTime = function() {
        return this.adPlayed_ && this.adStartTime_ ? this.timeElapsed_(this.adStartTime_) : -1
    }, OoyalaStrategy.prototype.getSections = function() {}, OoyalaStrategy.prototype.getAuthors = function() {}, OoyalaStrategy.prototype.getTime = function() {
        return (new Date).getTime()
    }, OoyalaStrategy.verify = function(player) {
        return player.hasOwnProperty("currentItem") && player.hasOwnProperty("getDuration") && player.hasOwnProperty("getItem") && player.hasOwnProperty("getPlayheadTime") && player.hasOwnProperty("getState") && player.hasOwnProperty("getTargetBitrate")
    }, window._cbv_strategies = window._cbv_strategie || [], window._cbv_strategies.push(OoyalaStrategy), window._cbv_removePlayer = function() {
        void 0 !== window._cbv_player && (window._cbv.push(["removePlayer", window._cbv_player]), window._cbv_player = null)
    }, jQuery.subscribe("espn.video.playerjsReady", function() {
        window._cbv_removePlayer();
        var playerObject = {
            currentItem: function() {
                var playerElement = espn.video.player.playerElement;
                return playerElement && "function" == typeof playerElement.getCurrentItem ? playerElement.getCurrentItem() : null
            },
            getDuration: function() {
                var playerElement = espn.video.player.playerElement;
                return playerElement && "function" == typeof playerElement.getCurrentItem ? playerElement.getCurrentItem().time : null
            },
            getItem: function() {
                var playerElement = espn.video.player.playerElement;
                return playerElement && "function" == typeof playerElement.getCurrentItem ? playerElement.getCurrentItem() : null
            },
            getPlayheadTime: function() {
                var playerElement = espn.video.player.playerElement;
                return playerElement && "function" == typeof playerElement.getPlayheadTime ? playerElement.getPlayheadTime() : null
            },
            getState: function() {
                var playerElement = espn.video.player.playerElement;
                return playerElement && "function" == typeof playerElement.getState ? playerElement.getState() : null
            },
            getTargetBitrate: function() {
                var playerElement = espn.video.player.playerElement;
                return playerElement && "function" == typeof playerElement.getTargetBitrate ? playerElement.getTargetBitrate() : null
            }
        };
        window._cbv_player = playerObject;
        var _cbv = window._cbv || (window._cbv = []);
        _cbv.push(playerObject)
    }), jQuery.subscribe("espn.video.playerRemoved", function() {
        window._cbv_removePlayer()
    }), $(document).on("page.load", function(e, data) {
        window._cbv_removePlayer()
    }),
    function() {
        if (!window.VISION) {
            ! function() {
                "use strict";
                window.VISION = function() {
                    return window.VISION.singleton
                }, window.VISION.queue = [], window.VISION.__appData = {}, window.VISION.__appData.trackTypes = [], window.VISION.__appData.internalFunctions = {}, window.VISION.__appData.configs = {
                    fetchAtConfigCount: 600,
                    collection: !0,
                    compression: "none",
                    flushAtEventCount: 10,
                    flushIntervalInSeconds: 60,
                    mediaLengthShortSec: 90,
                    mediaLengthMediumSec: 3600,
                    mediaHeartbeatShortSec: 5,
                    mediaHeartbeatMediumSec: 10,
                    mediaHeartbeatLongSec: 20,
                    mediaPauseTimeout: 60,
                    mediaAdHeartbeat: 10,
                    mediaAdPauseTimeout: 60
                }, window.VISION.producerData = {}, window.VISION.listeners = [], window.VISION.singleton = {
                    set: function() {
                        var n = arguments;
                        window.VISION.queue.unshift(function() {
                            window.VISION.singleton.set.apply(this, n)
                        })
                    },
                    get: function() {
                        var n = arguments;
                        window.VISION.queue.unshift(function() {
                            window.VISION.singleton.get.apply(this, n)
                        })
                    },
                    track: function(n) {
                        n = n || {}, n.event_timestamp = (new Date).getTime(), window.VISION.queue.unshift(function() {
                            window.VISION.singleton.track(n)
                        })
                    },
                    trackMedia: function(n) {
                        window.VISION.queue.unshift(function() {
                            window.VISION.singleton.trackMedia(n)
                        })
                    }
                }, window.VISION.setConfigs = function(n) {
                    Object.assign(VISION.__appData.configs, n), window.VISION.queue.unshift(function() {
                        VISION.coreLibs.bean.fire(window.VISION, "configLoadedVISION", n)
                    })
                }, window.VISION.setVariableMap = function(n) {
                    window.VISION.__appData.variableMap = n
                }, window.VISION.addToVariableMap = function(n) {
                    window.VISION.queue.push(function() {
                        window.VISION.addToVariableMap(n)
                    })
                }, window.VISION.addListener = function(n, i, e) {
                    window.VISION.queue.push(function() {
                        window.VISION.addListener(n, i, e)
                    })
                }, window.VISION.addListenerOnce = function(n, i) {
                    window.VISION.queue.push(function() {
                        window.VISION.removeListener(n, i)
                    })
                }, window.VISION.removeListener = function(n, i) {
                    window.VISION.queue.push(function() {
                        window.VISION.removeListener(n, i)
                    })
                }, window.VISION.addGuestId = function(n, i, e, o) {
                    window.VISION.queue.push(function() {
                        window.VISION.addGuestId(n, i, e, o)
                    })
                }, window.VISION.removeGuestId = function(n) {
                    window.VISION.queue.push(function() {
                        window.VISION.removeGuestId(n)
                    })
                }, window.VISION.addAffiliate = function(n) {
                    window.VISION.queue.push(function() {
                        window.VISION.addAffiliate(n)
                    })
                }, window.VISION.removeAffiliate = function(n) {
                    window.VISION.queue.push(function() {
                        window.VISION.removeAffiliate(n)
                    })
                }, window.VISION.addSubscriptionId = function(n, i) {
                    window.VISION.queue.push(function() {
                        window.VISION.addSubscriptionId(n, i)
                    })
                }, window.VISION.removeSubscriptionId = function(n) {
                    window.VISION.queue.push(function() {
                        window.VISION.removeSubscriptionId(n)
                    })
                }, window.VISION.addAdvertiserId = function(n) {
                    window.VISION.queue.push(function() {
                        window.VISION.addAdvertiserId(n)
                    })
                }, window.VISION.removeAdvertiserId = function(n) {
                    window.VISION.queue.push(function() {
                        window.VISION.removeAdvertiserId(n)
                    })
                }
            }();
            var requirejs, require, define;
            ! function(global, setTimeout) {
                function commentReplace(e, t) {
                    return t || ""
                }

                function isFunction(e) {
                    return "[object Function]" === ostring.call(e)
                }

                function isArray(e) {
                    return "[object Array]" === ostring.call(e)
                }

                function each(e, t) {
                    if (e) {
                        var n;
                        for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
                    }
                }

                function eachReverse(e, t) {
                    if (e) {
                        var n;
                        for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
                    }
                }

                function hasProp(e, t) {
                    return hasOwn.call(e, t)
                }

                function getOwn(e, t) {
                    return hasProp(e, t) && e[t]
                }

                function eachProp(e, t) {
                    var n;
                    for (n in e)
                        if (hasProp(e, n) && t(e[n], n)) break
                }

                function mixin(e, t, n, r) {
                    return t && eachProp(t, function(t, i) {
                        !n && hasProp(e, i) || (!r || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[i] = t : (e[i] || (e[i] = {}), mixin(e[i], t, n, r)))
                    }), e
                }

                function bind(e, t) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function scripts() {
                    return document.getElementsByTagName("script")
                }

                function defaultOnError(e) {
                    throw e
                }

                function getGlobal(e) {
                    if (!e) return e;
                    var t = global;
                    return each(e.split("."), function(e) {
                        t = t[e]
                    }), t
                }

                function makeError(e, t, n, r) {
                    var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
                    return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
                }

                function newContext(e) {
                    function t(e) {
                        var t, n;
                        for (t = 0; t < e.length; t++)
                            if ("." === (n = e[t])) e.splice(t, 1), t -= 1;
                            else if (".." === n) {
                            if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
                            t > 0 && (e.splice(t - 1, 2), t -= 2)
                        }
                    }

                    function n(e, n, r) {
                        var i, a, o, s, u, c, l, d, p, f, g = n && n.split("/"),
                            m = S.map,
                            v = m && m["*"];
                        if (e && (c = (e = e.split("/")).length - 1, S.nodeIdCompat && jsSuffixRegExp.test(e[c]) && (e[c] = e[c].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)), t(e), e = e.join("/")), r && m && (g || v)) {
                            e: for (o = (a = e.split("/")).length; o > 0; o -= 1) {
                                if (u = a.slice(0, o).join("/"), g)
                                    for (s = g.length; s > 0; s -= 1)
                                        if ((i = getOwn(m, g.slice(0, s).join("/"))) && (i = getOwn(i, u))) {
                                            l = i, d = o;
                                            break e
                                        }!p && v && getOwn(v, u) && (p = getOwn(v, u), f = o)
                            }!l && p && (l = p, d = f),
                            l && (a.splice(0, d, l), e = a.join("/"))
                        }
                        return getOwn(S.pkgs, e) || e
                    }

                    function r(e) {
                        isBrowser && each(scripts(), function(t) {
                            if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === b.contextName) return t.parentNode.removeChild(t), !0
                        })
                    }

                    function i(e) {
                        var t = getOwn(S.paths, e);
                        if (t && isArray(t) && t.length > 1) return t.shift(), b.require.undef(e), b.makeRequire(null, {
                            skipMap: !0
                        })([e]), !0
                    }

                    function a(e) {
                        var t, n = e ? e.indexOf("!") : -1;
                        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                    }

                    function o(e, t, r, i) {
                        var o, s, u, c, l = null,
                            d = t ? t.name : null,
                            p = e,
                            f = !0,
                            g = "";
                        return e || (f = !1, e = "_@r" + (T += 1)), c = a(e), l = c[0], e = c[1], l && (l = n(l, d, i), s = getOwn(N, l)), e && (l ? g = r ? e : s && s.normalize ? s.normalize(e, function(e) {
                            return n(e, d, i)
                        }) : -1 === e.indexOf("!") ? n(e, d, i) : e : (l = (c = a(g = n(e, d, i)))[0], g = c[1], r = !0, o = b.nameToUrl(g))), u = !l || s || r ? "" : "_unnormalized" + (A += 1), {
                            prefix: l,
                            name: g,
                            parentMap: t,
                            unnormalized: !!u,
                            url: o,
                            originalName: p,
                            isDefine: f,
                            id: (l ? l + "!" + g : g) + u
                        }
                    }

                    function s(e) {
                        var t = e.id,
                            n = getOwn(O, t);
                        return n || (n = O[t] = new b.Module(e)), n
                    }

                    function u(e, t, n) {
                        var r = e.id,
                            i = getOwn(O, r);
                        !hasProp(N, r) || i && !i.defineEmitComplete ? (i = s(e)).error && "error" === t ? n(i.error) : i.on(t, n) : "defined" === t && n(N[r])
                    }

                    function c(e, t) {
                        var n = e.requireModules,
                            r = !1;
                        t ? t(e) : (each(n, function(t) {
                            var n = getOwn(O, t);
                            n && (n.error = e, n.events.error && (r = !0, n.emit("error", e)))
                        }), r || req.onError(e))
                    }

                    function l() {
                        globalDefQueue.length && (each(globalDefQueue, function(e) {
                            var t = e[0];
                            "string" == typeof t && (b.defQueueMap[t] = !0), E.push(e)
                        }), globalDefQueue = [])
                    }

                    function d(e) {
                        delete O[e], delete x[e]
                    }

                    function p(e, t, n) {
                        var r = e.map.id;
                        e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, i) {
                            var a = r.id,
                                o = getOwn(O, a);
                            !o || e.depMatched[i] || n[a] || (getOwn(t, a) ? (e.defineDep(i, N[a]), e.check()) : p(o, t, n))
                        }), n[r] = !0)
                    }

                    function f() {
                        var e, t, n = 1e3 * S.waitSeconds,
                            a = n && b.startTime + n < (new Date).getTime(),
                            o = [],
                            s = [],
                            u = !1,
                            l = !0;
                        if (!_) {
                            if (_ = !0, eachProp(x, function(e) {
                                    var n = e.map,
                                        c = n.id;
                                    if (e.enabled && (n.isDefine || s.push(e), !e.error))
                                        if (!e.inited && a) i(c) ? (t = !0, u = !0) : (o.push(c), r(c));
                                        else if (!e.inited && e.fetched && n.isDefine && (u = !0, !n.prefix)) return l = !1
                                }), a && o.length) return e = makeError("timeout", "Load timeout for modules: " + o, null, o), e.contextName = b.contextName, c(e);
                            l && each(s, function(e) {
                                p(e, {}, {})
                            }), a && !t || !u || !isBrowser && !isWebWorker || I || (I = setTimeout(function() {
                                I = 0, f()
                            }, 50)), _ = !1
                        }
                    }

                    function g(e) {
                        hasProp(N, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2])
                    }

                    function m(e, t, n, r) {
                        e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
                    }

                    function v(e) {
                        var t = e.currentTarget || e.srcElement;
                        return m(t, b.onScriptLoad, "load", "onreadystatechange"), m(t, b.onScriptError, "error"), {
                            node: t,
                            id: t && t.getAttribute("data-requiremodule")
                        }
                    }

                    function h() {
                        var e;
                        for (l(); E.length;) {
                            if (null === (e = E.shift())[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                            g(e)
                        }
                        b.defQueueMap = {}
                    }
                    var _, y, b, w, I, S = {
                            waitSeconds: 7,
                            baseUrl: "./",
                            paths: {},
                            bundles: {},
                            pkgs: {},
                            shim: {},
                            config: {}
                        },
                        O = {},
                        x = {},
                        k = {},
                        E = [],
                        N = {},
                        V = {},
                        D = {},
                        T = 1,
                        A = 1;
                    return w = {
                        require: function(e) {
                            return e.require ? e.require : e.require = b.makeRequire(e.map)
                        },
                        exports: function(e) {
                            if (e.usingExports = !0, e.map.isDefine) return e.exports ? N[e.map.id] = e.exports : e.exports = N[e.map.id] = {}
                        },
                        module: function(e) {
                            return e.module ? e.module : e.module = {
                                id: e.map.id,
                                uri: e.map.url,
                                config: function() {
                                    return getOwn(S.config, e.map.id) || {}
                                },
                                exports: e.exports || (e.exports = {})
                            }
                        }
                    }, y = function(e) {
                        this.events = getOwn(k, e.id) || {}, this.map = e, this.shim = getOwn(S.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
                    }, y.prototype = {
                        init: function(e, t, n, r) {
                            r = r || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                                this.emit("error", e)
                            })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
                        },
                        defineDep: function(e, t) {
                            this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
                        },
                        fetch: function() {
                            if (!this.fetched) {
                                this.fetched = !0, b.startTime = (new Date).getTime();
                                var e = this.map;
                                if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                                b.makeRequire(this.map, {
                                    enableBuildCallback: !0
                                })(this.shim.deps || [], bind(this, function() {
                                    return e.prefix ? this.callPlugin() : this.load()
                                }))
                            }
                        },
                        load: function() {
                            var e = this.map.url;
                            V[e] || (V[e] = !0, b.load(this.map.id, e))
                        },
                        check: function() {
                            if (this.enabled && !this.enabling) {
                                var e, t, n = this.map.id,
                                    r = this.depExports,
                                    i = this.exports,
                                    a = this.factory;
                                if (this.inited) {
                                    if (this.error) this.emit("error", this.error);
                                    else if (!this.defining) {
                                        if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                            if (isFunction(a)) {
                                                if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                                    i = b.execCb(n, a, r, i)
                                                } catch (t) {
                                                    e = t
                                                } else i = b.execCb(n, a, r, i);
                                                if (this.map.isDefine && void 0 === i && ((t = this.module) ? i = t.exports : this.usingExports && (i = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
                                            } else i = a;
                                            if (this.exports = i, this.map.isDefine && !this.ignore && (N[n] = i, req.onResourceLoad)) {
                                                var o = [];
                                                each(this.depMaps, function(e) {
                                                    o.push(e.normalizedMap || e)
                                                }), req.onResourceLoad(b, this.map, o)
                                            }
                                            d(n), this.defined = !0
                                        }
                                        this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                                    }
                                } else hasProp(b.defQueueMap, n) || this.fetch()
                            }
                        },
                        callPlugin: function() {
                            var e = this.map,
                                t = e.id,
                                r = o(e.prefix);
                            this.depMaps.push(r), u(r, "defined", bind(this, function(r) {
                                var i, a, l, p = getOwn(D, this.map.id),
                                    f = this.map.name,
                                    g = this.map.parentMap ? this.map.parentMap.name : null,
                                    m = b.makeRequire(e.parentMap, {
                                        enableBuildCallback: !0
                                    });
                                return this.map.unnormalized ? (r.normalize && (f = r.normalize(f, function(e) {
                                    return n(e, g, !0)
                                }) || ""), a = o(e.prefix + "!" + f, this.map.parentMap, !0), u(a, "defined", bind(this, function(e) {
                                    this.map.normalizedMap = a, this.init([], function() {
                                        return e
                                    }, null, {
                                        enabled: !0,
                                        ignore: !0
                                    })
                                })), void((l = getOwn(O, a.id)) && (this.depMaps.push(a), this.events.error && l.on("error", bind(this, function(e) {
                                    this.emit("error", e)
                                })), l.enable()))) : p ? (this.map.url = b.nameToUrl(p), void this.load()) : ((i = bind(this, function(e) {
                                    this.init([], function() {
                                        return e
                                    }, null, {
                                        enabled: !0
                                    })
                                })).error = bind(this, function(e) {
                                    this.inited = !0, this.error = e, e.requireModules = [t], eachProp(O, function(e) {
                                        0 === e.map.id.indexOf(t + "_unnormalized") && d(e.map.id)
                                    }), c(e)
                                }), i.fromText = bind(this, function(n, r) {
                                    var a = e.name,
                                        u = o(a),
                                        l = useInteractive;
                                    r && (n = r), l && (useInteractive = !1), s(u), hasProp(S.config, t) && (S.config[a] = S.config[t]);
                                    try {
                                        req.exec(n)
                                    } catch (e) {
                                        return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [t]))
                                    }
                                    l && (useInteractive = !0), this.depMaps.push(u), b.completeLoad(a), m([a], i)
                                }), void r.load(e.name, m, i, S))
                            })), b.enable(r, this), this.pluginMaps[r.id] = r
                        },
                        enable: function() {
                            x[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                                var n, r, i;
                                if ("string" == typeof e) {
                                    if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, i = getOwn(w, e.id)) return void(this.depExports[t] = i(this));
                                    this.depCount += 1, u(e, "defined", bind(this, function(e) {
                                        this.undefed || (this.defineDep(t, e), this.check())
                                    })), this.errback ? u(e, "error", bind(this, this.errback)) : this.events.error && u(e, "error", bind(this, function(e) {
                                        this.emit("error", e)
                                    }))
                                }
                                n = e.id, r = O[n], hasProp(w, n) || !r || r.enabled || b.enable(e, this)
                            })), eachProp(this.pluginMaps, bind(this, function(e) {
                                var t = getOwn(O, e.id);
                                t && !t.enabled && b.enable(e, this)
                            })), this.enabling = !1, this.check()
                        },
                        on: function(e, t) {
                            var n = this.events[e];
                            n || (n = this.events[e] = []), n.push(t)
                        },
                        emit: function(e, t) {
                            each(this.events[e], function(e) {
                                e(t)
                            }), "error" === e && delete this.events[e]
                        }
                    }, b = {
                        config: S,
                        contextName: e,
                        registry: O,
                        defined: N,
                        urlFetched: V,
                        defQueue: E,
                        defQueueMap: {},
                        Module: y,
                        makeModuleMap: o,
                        nextTick: req.nextTick,
                        onError: c,
                        configure: function(e) {
                            if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"), "string" == typeof e.urlArgs) {
                                var t = e.urlArgs;
                                e.urlArgs = function(e, n) {
                                    return (-1 === n.indexOf("?") ? "?" : "&") + t
                                }
                            }
                            var n = S.shim,
                                r = {
                                    paths: !0,
                                    bundles: !0,
                                    config: !0,
                                    map: !0
                                };
                            eachProp(e, function(e, t) {
                                r[t] ? (S[t] || (S[t] = {}), mixin(S[t], e, !0, !0)) : S[t] = e
                            }), e.bundles && eachProp(e.bundles, function(e, t) {
                                each(e, function(e) {
                                    e !== t && (D[e] = t)
                                })
                            }), e.shim && (eachProp(e.shim, function(e, t) {
                                isArray(e) && (e = {
                                    deps: e
                                }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = b.makeShimExports(e)), n[t] = e
                            }), S.shim = n), e.packages && each(e.packages, function(e) {
                                var t;
                                t = (e = "string" == typeof e ? {
                                    name: e
                                } : e).name, e.location && (S.paths[t] = e.location), S.pkgs[t] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                            }), eachProp(O, function(e, t) {
                                e.inited || e.map.unnormalized || (e.map = o(t, null, !0))
                            }), (e.deps || e.callback) && b.require(e.deps || [], e.callback)
                        },
                        makeShimExports: function(e) {
                            return function() {
                                var t;
                                return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                            }
                        },
                        makeRequire: function(t, i) {
                            function a(n, r, u) {
                                var l, d, p;
                                return i.enableBuildCallback && r && isFunction(r) && (r.__requireJsBuild = !0), "string" == typeof n ? isFunction(r) ? c(makeError("requireargs", "Invalid require call"), u) : t && hasProp(w, n) ? w[n](O[t.id]) : req.get ? req.get(b, n, t, a) : (d = o(n, t, !1, !0), l = d.id, hasProp(N, l) ? N[l] : c(makeError("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (h(), b.nextTick(function() {
                                    h(), (p = s(o(null, t))).skipMap = i.skipMap, p.init(n, r, u, {
                                        enabled: !0
                                    }), f()
                                }), a)
                            }
                            return i = i || {}, mixin(a, {
                                isBrowser: isBrowser,
                                toUrl: function(e) {
                                    var r, i = e.lastIndexOf("."),
                                        a = e.split("/")[0],
                                        o = "." === a || ".." === a;
                                    return -1 !== i && (!o || i > 1) && (r = e.substring(i, e.length), e = e.substring(0, i)), b.nameToUrl(n(e, t && t.id, !0), r, !0)
                                },
                                defined: function(e) {
                                    return hasProp(N, o(e, t, !1, !0).id)
                                },
                                specified: function(e) {
                                    return e = o(e, t, !1, !0).id, hasProp(N, e) || hasProp(O, e)
                                }
                            }), t || (a.undef = function(e) {
                                l();
                                var n = o(e, t, !0),
                                    i = getOwn(O, e);
                                i.undefed = !0, r(e), delete N[e], delete V[n.url], delete k[e], eachReverse(E, function(t, n) {
                                    t[0] === e && E.splice(n, 1)
                                }), delete b.defQueueMap[e], i && (i.events.defined && (k[e] = i.events), d(e))
                            }), a
                        },
                        enable: function(e) {
                            getOwn(O, e.id) && s(e).enable()
                        },
                        completeLoad: function(e) {
                            var t, n, r, a = getOwn(S.shim, e) || {},
                                o = a.exports;
                            for (l(); E.length;) {
                                if (null === (n = E.shift())[0]) {
                                    if (n[0] = e, t) break;
                                    t = !0
                                } else n[0] === e && (t = !0);
                                g(n)
                            }
                            if (b.defQueueMap = {}, r = getOwn(O, e), !t && !hasProp(N, e) && r && !r.inited) {
                                if (!(!S.enforceDefine || o && getGlobal(o))) return i(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [e]));
                                g([e, a.deps || [], a.exportsFn])
                            }
                            f()
                        },
                        nameToUrl: function(e, t, n) {
                            var r, i, a, o, s, u, c, l = getOwn(S.pkgs, e);
                            if (l && (e = l), c = getOwn(D, e)) return b.nameToUrl(c, t, n);
                            if (req.jsExtRegExp.test(e)) s = e + (t || "");
                            else {
                                for (r = S.paths, a = (i = e.split("/")).length; a > 0; a -= 1)
                                    if (o = i.slice(0, a).join("/"), u = getOwn(r, o)) {
                                        isArray(u) && (u = u[0]), i.splice(0, a, u);
                                        break
                                    }
                                s = i.join("/"), s = ("/" === (s += t || (/^data\:|^blob\:|\?/.test(s) || n ? "" : ".js")).charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : S.baseUrl) + s
                            }
                            return S.urlArgs && !/^blob\:/.test(s) ? s + S.urlArgs(e, s) : s
                        },
                        load: function(e, t) {
                            req.load(b, e, t)
                        },
                        execCb: function(e, t, n, r) {
                            return t.apply(r, n)
                        },
                        onScriptLoad: function(e) {
                            if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                                interactiveScript = null;
                                var t = v(e);
                                b.completeLoad(t.id)
                            }
                        },
                        onScriptError: function(e) {
                            var t = v(e);
                            if (!i(t.id)) {
                                var n = [];
                                return eachProp(O, function(e, r) {
                                    0 !== r.indexOf("_@r") && each(e.depMaps, function(e) {
                                        if (e.id === t.id) return n.push(r), !0
                                    })
                                }), c(makeError("scripterror", 'Script error for "' + t.id + (n.length ? '", needed by: ' + n.join(", ") : '"'), e, [t.id]))
                            }
                        }
                    }, b.require = b.makeRequire(), b
                }

                function getInteractiveScript() {
                    return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
                        if ("interactive" === e.readyState) return interactiveScript = e
                    }), interactiveScript)
                }
                var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.5",
                    commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
                    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
                    jsSuffixRegExp = /\.js$/,
                    currDirRegExp = /^\.\//,
                    op = Object.prototype,
                    ostring = op.toString,
                    hasOwn = op.hasOwnProperty,
                    isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
                    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
                    readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
                    defContextName = "_",
                    isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
                    contexts = {},
                    cfg = {},
                    globalDefQueue = [],
                    useInteractive = !1;
                if (void 0 === define) {
                    if (void 0 !== requirejs) {
                        if (isFunction(requirejs)) return;
                        cfg = requirejs, requirejs = void 0
                    }
                    void 0 === require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, r) {
                        var i, a, o = defContextName;
                        return isArray(e) || "string" == typeof e || (a = e, isArray(t) ? (e = t, t = n, n = r) : e = []), a && a.context && (o = a.context), (i = getOwn(contexts, o)) || (i = contexts[o] = req.s.newContext(o)), a && i.configure(a), i.require(e, t, n)
                    }, req.config = function(e) {
                        return req(e)
                    }, req.nextTick = void 0 !== setTimeout ? function(e) {
                        setTimeout(e, 4)
                    } : function(e) {
                        e()
                    }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
                        contexts: contexts,
                        newContext: newContext
                    }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
                        req[e] = function() {
                            var t = contexts[defContextName];
                            return t.require[e].apply(t, arguments)
                        }
                    }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], (baseElement = document.getElementsByTagName("base")[0]) && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
                        var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
                        return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
                    }, req.load = function(e, t, n) {
                        var r, i = e && e.config || {};
                        if (isBrowser) return (r = req.createNode(i, t, n)).setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = n, i.onNodeCreated && i.onNodeCreated(r, i, t, n), currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r;
                        if (isWebWorker) try {
                            setTimeout(function() {}, 0), importScripts(n), e.completeLoad(t)
                        } catch (r) {
                            e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, r, [t]))
                        }
                    }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
                        if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || -1 !== mainScript.indexOf("!") || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
                    }), define = function(e, t, n) {
                        var r, i;
                        "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, n) {
                            t.push(n)
                        }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript()) && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")]), i ? (i.defQueue.push([e, t, n]), i.defQueueMap[e] = !0) : globalDefQueue.push([e, t, n])
                    }, define.amd = {
                        jQuery: !0
                    }, req.exec = function(text) {
                        return eval(text)
                    }, req(cfg)
                }
            }(this, "undefined" == typeof setTimeout ? void 0 : setTimeout), define("requireLib", function() {}),
                function(e, t, n) {
                    "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("bean", n) : t.bean = n()
                }(0, this, function(e, t) {
                    e = e || "bean", t = t || this;
                    var n, r = window,
                        i = t[e],
                        a = /[^\.]*(?=\..*)\.|.*/,
                        o = /\..*/,
                        s = "addEventListener",
                        u = document || {},
                        c = u.documentElement || {},
                        l = c[s],
                        d = l ? s : "attachEvent",
                        p = {},
                        f = Array.prototype.slice,
                        g = function(e, t) {
                            return e.split(t || " ")
                        },
                        m = function(e) {
                            return "string" == typeof e
                        },
                        v = function(e) {
                            return "function" == typeof e
                        },
                        h = function(e, t, n) {
                            for (n = 0; n < t.length; n++) t[n] && (e[t[n]] = 1);
                            return e
                        }({}, g("click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll " + (l ? "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete " : ""))),
                        _ = function() {
                            var e = "compareDocumentPosition" in c ? function(e, t) {
                                    return t.compareDocumentPosition && 16 == (16 & t.compareDocumentPosition(e))
                                } : "contains" in c ? function(e, t) {
                                    return (t = 9 === t.nodeType || t === window ? c : t) !== e && t.contains(e)
                                } : function(e, t) {
                                    for (; e = e.parentNode;)
                                        if (e === t) return 1;
                                    return 0
                                },
                                t = function(t) {
                                    var n = t.relatedTarget;
                                    return n ? n !== this && "xul" !== n.prefix && !/document/.test(this.toString()) && !e(n, this) : null == n
                                };
                            return {
                                mouseenter: {
                                    base: "mouseover",
                                    condition: t
                                },
                                mouseleave: {
                                    base: "mouseout",
                                    condition: t
                                },
                                mousewheel: {
                                    base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"
                                }
                            }
                        }(),
                        y = function() {
                            var e = g("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),
                                t = e.concat(g("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),
                                n = t.concat(g("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),
                                i = e.concat(g("char charCode key keyCode keyIdentifier keyLocation location")),
                                a = e.concat(g("data")),
                                o = e.concat(g("touches targetTouches changedTouches scale rotation")),
                                s = e.concat(g("data origin source")),
                                l = e.concat(g("state")),
                                d = /over|out/,
                                p = [{
                                    reg: /key/i,
                                    fix: function(e, t) {
                                        return t.keyCode = e.keyCode || e.which, i
                                    }
                                }, {
                                    reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                                    fix: function(e, n, r) {
                                        return n.rightClick = 3 === e.which || 2 === e.button, n.pos = {
                                            x: 0,
                                            y: 0
                                        }, e.pageX || e.pageY ? (n.clientX = e.pageX, n.clientY = e.pageY) : (e.clientX || e.clientY) && (n.clientX = e.clientX + u.body.scrollLeft + c.scrollLeft,
                                            n.clientY = e.clientY + u.body.scrollTop + c.scrollTop), d.test(r) && (n.relatedTarget = e.relatedTarget || e[("mouseover" == r ? "from" : "to") + "Element"]), t
                                    }
                                }, {
                                    reg: /mouse.*(wheel|scroll)/i,
                                    fix: function() {
                                        return n
                                    }
                                }, {
                                    reg: /^text/i,
                                    fix: function() {
                                        return a
                                    }
                                }, {
                                    reg: /^touch|^gesture/i,
                                    fix: function() {
                                        return o
                                    }
                                }, {
                                    reg: /^message$/i,
                                    fix: function() {
                                        return s
                                    }
                                }, {
                                    reg: /^popstate$/i,
                                    fix: function() {
                                        return l
                                    }
                                }, {
                                    reg: /.*/,
                                    fix: function() {
                                        return e
                                    }
                                }],
                                f = {},
                                m = function(e, t, n) {
                                    if (arguments.length && (e = e || ((t.ownerDocument || t.document || t).parentWindow || r).event, this.originalEvent = e, this.isNative = n, this.isBean = !0, e)) {
                                        var i, a, o, s, u, c = e.type,
                                            l = e.target || e.srcElement;
                                        if (this.target = l && 3 === l.nodeType ? l.parentNode : l, n) {
                                            if (!(u = f[c]))
                                                for (i = 0, a = p.length; i < a; i++)
                                                    if (p[i].reg.test(c)) {
                                                        f[c] = u = p[i].fix;
                                                        break
                                                    }
                                            for (s = u(e, this, c), i = s.length; i--;) !((o = s[i]) in this) && o in e && (this[o] = e[o])
                                        }
                                    }
                                };
                            return m.prototype.preventDefault = function() {
                                this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue = !1
                            }, m.prototype.stopPropagation = function() {
                                this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble = !0
                            }, m.prototype.stop = function() {
                                this.preventDefault(), this.stopPropagation(), this.stopped = !0
                            }, m.prototype.stopImmediatePropagation = function() {
                                this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function() {
                                    return !0
                                }
                            }, m.prototype.isImmediatePropagationStopped = function() {
                                return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
                            }, m.prototype.clone = function(e) {
                                var t = new m(this, this.element, this.isNative);
                                return t.currentTarget = e, t
                            }, m
                        }(),
                        b = function(e, t) {
                            return l || t || e !== u && e !== r ? e : c
                        },
                        w = function() {
                            var e = function(e, t, n, r) {
                                    var i = function(n, i) {
                                            return t.apply(e, r ? f.call(i, n ? 0 : 1).concat(r) : i)
                                        },
                                        a = function(n, r) {
                                            return t.__beanDel ? t.__beanDel.ft(n.target, e) : r
                                        },
                                        o = n ? function(e) {
                                            var t = a(e, this);
                                            if (n.apply(t, arguments)) return e && (e.currentTarget = t), i(e, arguments)
                                        } : function(e) {
                                            return t.__beanDel && (e = e.clone(a(e))), i(e, arguments)
                                        };
                                    return o.__beanDel = t.__beanDel, o
                                },
                                t = function(t, n, r, i, a, o, s) {
                                    var u, c = _[n];
                                    "unload" == n && (r = k(E, t, n, r, i)), c && (c.condition && (r = e(t, r, c.condition, o)), n = c.base || n), this.isNative = u = h[n] && !!t[d], this.customType = !l && !u && n, this.element = t, this.type = n, this.original = i, this.namespaces = a, this.eventType = l || u ? n : "propertychange", this.target = b(t, u), this[d] = !!this.target[d], this.root = s, this.handler = e(t, r, null, o)
                                };
                            return t.prototype.inNamespaces = function(e) {
                                var t, n, r = 0;
                                if (!e) return !0;
                                if (!this.namespaces) return !1;
                                for (t = e.length; t--;)
                                    for (n = this.namespaces.length; n--;) e[t] == this.namespaces[n] && r++;
                                return e.length === r
                            }, t.prototype.matches = function(e, t, n) {
                                return !(this.element !== e || t && this.original !== t || n && this.handler !== n)
                            }, t
                        }(),
                        I = function() {
                            var e = {},
                                t = function(n, r, i, a, o, s) {
                                    var u = o ? "r" : "$";
                                    if (r && "*" != r) {
                                        var c, l = 0,
                                            d = e[u + r],
                                            p = "*" == n;
                                        if (!d) return;
                                        for (c = d.length; l < c; l++)
                                            if ((p || d[l].matches(n, i, a)) && !s(d[l], d, l, r)) return
                                    } else
                                        for (var f in e) f.charAt(0) == u && t(n, f.substr(1), i, a, o, s)
                                };
                            return {
                                has: function(t, n, r, i) {
                                    var a, o = e[(i ? "r" : "$") + n];
                                    if (o)
                                        for (a = o.length; a--;)
                                            if (!o[a].root && o[a].matches(t, r, null)) return !0;
                                    return !1
                                },
                                get: function(e, n, r, i) {
                                    var a = [];
                                    return t(e, n, r, null, i, function(e) {
                                        return a.push(e)
                                    }), a
                                },
                                put: function(t) {
                                    var n = !t.root && !this.has(t.element, t.type, null, !1),
                                        r = (t.root ? "r" : "$") + t.type;
                                    return (e[r] || (e[r] = [])).push(t), n
                                },
                                del: function(n) {
                                    t(n.element, n.type, null, n.handler, n.root, function(t, n, r) {
                                        return n.splice(r, 1), t.removed = !0, 0 === n.length && delete e[(t.root ? "r" : "$") + t.type], !1
                                    })
                                },
                                entries: function() {
                                    var t, n = [];
                                    for (t in e) "$" == t.charAt(0) && (n = n.concat(e[t]));
                                    return n
                                }
                            }
                        }(),
                        S = function(e) {
                            n = arguments.length ? e : u.querySelectorAll ? function(e, t) {
                                return t.querySelectorAll(e)
                            } : function() {
                                throw new Error("Bean: No selector engine installed")
                            }
                        },
                        O = function(e, t) {
                            if (l || !t || !e || e.propertyName == "_on" + t) {
                                var n = I.get(this, t || e.type, null, !1),
                                    r = n.length,
                                    i = 0;
                                for (e = new y(e, this, (!0)), t && (e.type = t); i < r && !e.isImmediatePropagationStopped(); i++) n[i].removed || n[i].handler.call(this, e)
                            }
                        },
                        x = l ? function(e, t, n) {
                            e[n ? s : "removeEventListener"](t, O, !1)
                        } : function(e, t, n, r) {
                            var i;
                            n ? (I.put(i = new w(e, r || t, function(t) {
                                O.call(e, t, r)
                            }, O, null, null, (!0))), r && null == e["_on" + r] && (e["_on" + r] = 0), i.target.attachEvent("on" + i.eventType, i.handler)) : (i = I.get(e, r || t, O, !0)[0]) && (i.target.detachEvent("on" + i.eventType, i.handler), I.del(i))
                        },
                        k = function(e, t, n, r, i) {
                            return function() {
                                r.apply(this, arguments), e(t, n, i)
                            }
                        },
                        E = function(e, t, n, r) {
                            var i, a, s = t && t.replace(o, ""),
                                u = I.get(e, s, null, !1),
                                c = {};
                            for (i = 0, a = u.length; i < a; i++) n && u[i].original !== n || !u[i].inNamespaces(r) || (I.del(u[i]), !c[u[i].eventType] && u[i][d] && (c[u[i].eventType] = {
                                t: u[i].eventType,
                                c: u[i].type
                            }));
                            for (i in c) I.has(e, c[i].t, null, !1) || x(e, c[i].t, !1, c[i].c)
                        },
                        N = function(e, t) {
                            var r = function(t, r) {
                                    for (var i, a = m(e) ? n(e, r) : e; t && t !== r; t = t.parentNode)
                                        for (i = a.length; i--;)
                                            if (a[i] === t) return t
                                },
                                i = function(e) {
                                    var n = r(e.target, this);
                                    n && t.apply(n, arguments)
                                };
                            return i.__beanDel = {
                                ft: r,
                                selector: e
                            }, i
                        },
                        V = l ? function(e, t, n) {
                            var i = u.createEvent(e ? "HTMLEvents" : "UIEvents");
                            i[e ? "initEvent" : "initUIEvent"](t, !0, !0, r, 1), n.dispatchEvent(i)
                        } : function(e, t, n) {
                            n = b(n, e), e ? n.fireEvent("on" + t, u.createEventObject()) : n["_on" + t]++
                        },
                        D = function(e, t, n) {
                            var r, i, s, u, c = m(t);
                            if (c && t.indexOf(" ") > 0) {
                                for (t = g(t), u = t.length; u--;) D(e, t[u], n);
                                return e
                            }
                            if (i = c && t.replace(o, ""), i && _[i] && (i = _[i].base), !t || c)(s = c && t.replace(a, "")) && (s = g(s, ".")), E(e, i, n, s);
                            else if (v(t)) E(e, null, t);
                            else
                                for (r in t) t.hasOwnProperty(r) && D(e, r, t[r]);
                            return e
                        },
                        T = function(e, t, n, r) {
                            var i, s, u, c, l, m, h;
                            if (void 0 !== n || "object" != typeof t) {
                                for (v(n) ? (l = f.call(arguments, 3), r = i = n) : (i = r, l = f.call(arguments, 4), r = N(n, i)), u = g(t), this === p && (r = k(D, e, t, r, i)), c = u.length; c--;) h = I.put(m = new w(e, u[c].replace(o, ""), r, i, g(u[c].replace(a, ""), "."), l, (!1))), m[d] && h && x(e, m.eventType, !0, m.customType);
                                return e
                            }
                            for (s in t) t.hasOwnProperty(s) && T.call(this, e, s, t[s])
                        },
                        A = function(e, t, n, r) {
                            return T.apply(null, m(n) ? [e, n, t, r].concat(arguments.length > 3 ? f.call(arguments, 5) : []) : f.call(arguments))
                        },
                        q = function() {
                            return T.apply(p, arguments)
                        },
                        j = function(e, t, n) {
                            var r, i, s, u, c, l = g(t);
                            for (r = l.length; r--;)
                                if (t = l[r].replace(o, ""), (u = l[r].replace(a, "")) && (u = g(u, ".")), u || n || !e[d])
                                    for (c = I.get(e, t, null, !1), n = [!1].concat(n), i = 0, s = c.length; i < s; i++) c[i].inNamespaces(u) && c[i].handler.apply(e, n);
                                else V(h[t], t, e);
                            return e
                        },
                        P = function(e, t, n) {
                            for (var r, i, a = I.get(t, n, null, !1), o = a.length, s = 0; s < o; s++) a[s].original && (r = [e, a[s].type], (i = a[s].handler.__beanDel) && r.push(i.selector), r.push(a[s].original), T.apply(null, r));
                            return e
                        },
                        M = {
                            on: T,
                            add: A,
                            one: q,
                            off: D,
                            remove: D,
                            clone: P,
                            fire: j,
                            Event: y,
                            setSelectorEngine: S,
                            noConflict: function() {
                                return t[e] = i, this
                            }
                        };
                    if (r.attachEvent) {
                        var L = function() {
                            var e, t = I.entries();
                            for (e in t) t[e].type && "unload" !== t[e].type && D(t[e].element, t[e].type);
                            r.detachEvent("onunload", L), r.CollectGarbage && r.CollectGarbage()
                        };
                        r.attachEvent("onunload", L)
                    }
                    return S(), M
                }),
                function() {
                    var e = {},
                        t = e._,
                        n = {},
                        r = Array.prototype,
                        i = Object.prototype,
                        a = Function.prototype,
                        o = r.push,
                        s = r.slice,
                        u = r.concat,
                        c = i.toString,
                        l = i.hasOwnProperty,
                        d = r.forEach,
                        p = r.map,
                        f = r.reduce,
                        g = r.reduceRight,
                        m = r.filter,
                        v = r.every,
                        h = r.some,
                        _ = r.indexOf,
                        y = r.lastIndexOf,
                        b = Array.isArray,
                        w = Object.keys,
                        I = a.bind,
                        S = function(e) {
                            return e instanceof S ? e : this instanceof S ? void(this._wrapped = e) : new S(e)
                        };
                    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = S), exports._ = S) : e._ = S, S.VERSION = "1.5.2";
                    var O = S.each = S.forEach = function(e, t, r) {
                        if (null != e)
                            if (d && e.forEach === d) e.forEach(t, r);
                            else if (e.length === +e.length) {
                            for (var i = 0, a = e.length; i < a; i++)
                                if (t.call(r, e[i], i, e) === n) return
                        } else
                            for (var o = S.keys(e), i = 0, a = o.length; i < a; i++)
                                if (t.call(r, e[o[i]], o[i], e) === n) return
                    };
                    S.map = S.collect = function(e, t, n) {
                        var r = [];
                        return null == e ? r : p && e.map === p ? e.map(t, n) : (O(e, function(e, i, a) {
                            r.push(t.call(n, e, i, a))
                        }), r)
                    };
                    var x = "Reduce of empty array with no initial value";
                    S.reduce = S.foldl = S.inject = function(e, t, n, r) {
                        var i = arguments.length > 2;
                        if (null == e && (e = []), f && e.reduce === f) return r && (t = S.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
                        if (O(e, function(e, a, o) {
                                i ? n = t.call(r, n, e, a, o) : (n = e, i = !0)
                            }), !i) throw new TypeError(x);
                        return n
                    }, S.reduceRight = S.foldr = function(e, t, n, r) {
                        var i = arguments.length > 2;
                        if (null == e && (e = []), g && e.reduceRight === g) return r && (t = S.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
                        var a = e.length;
                        if (a !== +a) {
                            var o = S.keys(e);
                            a = o.length
                        }
                        if (O(e, function(s, u, c) {
                                u = o ? o[--a] : --a, i ? n = t.call(r, n, e[u], u, c) : (n = e[u], i = !0)
                            }), !i) throw new TypeError(x);
                        return n
                    }, S.find = S.detect = function(e, t, n) {
                        var r;
                        return k(e, function(e, i, a) {
                            if (t.call(n, e, i, a)) return r = e, !0
                        }), r
                    }, S.filter = S.select = function(e, t, n) {
                        var r = [];
                        return null == e ? r : m && e.filter === m ? e.filter(t, n) : (O(e, function(e, i, a) {
                            t.call(n, e, i, a) && r.push(e)
                        }), r)
                    }, S.reject = function(e, t, n) {
                        return S.filter(e, function(e, r, i) {
                            return !t.call(n, e, r, i)
                        }, n)
                    }, S.every = S.all = function(e, t, r) {
                        t || (t = S.identity);
                        var i = !0;
                        return null == e ? i : v && e.every === v ? e.every(t, r) : (O(e, function(e, a, o) {
                            if (!(i = i && t.call(r, e, a, o))) return n
                        }), !!i)
                    };
                    var k = S.some = S.any = function(e, t, r) {
                        t || (t = S.identity);
                        var i = !1;
                        return null == e ? i : h && e.some === h ? e.some(t, r) : (O(e, function(e, a, o) {
                            if (i || (i = t.call(r, e, a, o))) return n
                        }), !!i)
                    };
                    S.contains = S.include = function(e, t) {
                        return null != e && (_ && e.indexOf === _ ? -1 != e.indexOf(t) : k(e, function(e) {
                            return e === t
                        }))
                    }, S.invoke = function(e, t) {
                        var n = s.call(arguments, 2),
                            r = S.isFunction(t);
                        return S.map(e, function(e) {
                            return (r ? t : e[t]).apply(e, n)
                        })
                    }, S.pluck = function(e, t) {
                        return S.map(e, function(e) {
                            return e[t]
                        })
                    }, S.where = function(e, t, n) {
                        return S.isEmpty(t) ? n ? void 0 : [] : S[n ? "find" : "filter"](e, function(e) {
                            for (var n in t)
                                if (t[n] !== e[n]) return !1;
                            return !0
                        })
                    }, S.findWhere = function(e, t) {
                        return S.where(e, t, !0)
                    }, S.max = function(e, t, n) {
                        if (!t && S.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                        if (!t && S.isEmpty(e)) return -1 / 0;
                        var r = {
                            computed: -1 / 0,
                            value: -1 / 0
                        };
                        return O(e, function(e, i, a) {
                            var o = t ? t.call(n, e, i, a) : e;
                            o > r.computed && (r = {
                                value: e,
                                computed: o
                            })
                        }), r.value
                    }, S.min = function(e, t, n) {
                        if (!t && S.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
                        if (!t && S.isEmpty(e)) return 1 / 0;
                        var r = {
                            computed: 1 / 0,
                            value: 1 / 0
                        };
                        return O(e, function(e, i, a) {
                            var o = t ? t.call(n, e, i, a) : e;
                            o < r.computed && (r = {
                                value: e,
                                computed: o
                            })
                        }), r.value
                    }, S.shuffle = function(e) {
                        var t, n = 0,
                            r = [];
                        return O(e, function(e) {
                            t = S.random(n++), r[n - 1] = r[t], r[t] = e
                        }), r
                    }, S.sample = function(e, t, n) {
                        return arguments.length < 2 || n ? e[S.random(e.length - 1)] : S.shuffle(e).slice(0, Math.max(0, t))
                    };
                    var E = function(e) {
                        return S.isFunction(e) ? e : function(t) {
                            return t[e]
                        }
                    };
                    S.sortBy = function(e, t, n) {
                        var r = E(t);
                        return S.pluck(S.map(e, function(e, t, i) {
                            return {
                                value: e,
                                index: t,
                                criteria: r.call(n, e, t, i)
                            }
                        }).sort(function(e, t) {
                            var n = e.criteria,
                                r = t.criteria;
                            if (n !== r) {
                                if (n > r || void 0 === n) return 1;
                                if (n < r || void 0 === r) return -1
                            }
                            return e.index - t.index
                        }), "value")
                    };
                    var N = function(e) {
                        return function(t, n, r) {
                            var i = {},
                                a = null == n ? S.identity : E(n);
                            return O(t, function(n, o) {
                                var s = a.call(r, n, o, t);
                                e(i, s, n)
                            }), i
                        }
                    };
                    S.groupBy = N(function(e, t, n) {
                        (S.has(e, t) ? e[t] : e[t] = []).push(n)
                    }), S.indexBy = N(function(e, t, n) {
                        e[t] = n
                    }), S.countBy = N(function(e, t) {
                        S.has(e, t) ? e[t]++ : e[t] = 1
                    }), S.sortedIndex = function(e, t, n, r) {
                        n = null == n ? S.identity : E(n);
                        for (var i = n.call(r, t), a = 0, o = e.length; a < o;) {
                            var s = a + o >>> 1;
                            n.call(r, e[s]) < i ? a = s + 1 : o = s
                        }
                        return a
                    }, S.toArray = function(e) {
                        return e ? S.isArray(e) ? s.call(e) : e.length === +e.length ? S.map(e, S.identity) : S.values(e) : []
                    }, S.size = function(e) {
                        return null == e ? 0 : e.length === +e.length ? e.length : S.keys(e).length
                    }, S.first = S.head = S.take = function(e, t, n) {
                        if (null != e) return null == t || n ? e[0] : s.call(e, 0, t)
                    }, S.initial = function(e, t, n) {
                        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
                    }, S.last = function(e, t, n) {
                        if (null != e) return null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
                    }, S.rest = S.tail = S.drop = function(e, t, n) {
                        return s.call(e, null == t || n ? 1 : t)
                    }, S.compact = function(e) {
                        return S.filter(e, S.identity)
                    };
                    var V = function(e, t, n) {
                        return t && S.every(e, S.isArray) ? u.apply(n, e) : (O(e, function(e) {
                            S.isArray(e) || S.isArguments(e) ? t ? o.apply(n, e) : V(e, t, n) : n.push(e)
                        }), n)
                    };
                    S.flatten = function(e, t) {
                        return V(e, t, [])
                    }, S.without = function(e) {
                        return S.difference(e, s.call(arguments, 1))
                    }, S.uniq = S.unique = function(e, t, n, r) {
                        S.isFunction(t) && (r = n, n = t, t = !1);
                        var i = n ? S.map(e, n, r) : e,
                            a = [],
                            o = [];
                        return O(i, function(n, r) {
                            (t ? r && o[o.length - 1] === n : S.contains(o, n)) || (o.push(n), a.push(e[r]))
                        }), a
                    }, S.union = function() {
                        return S.uniq(S.flatten(arguments, !0))
                    }, S.intersection = function(e) {
                        var t = s.call(arguments, 1);
                        return S.filter(S.uniq(e), function(e) {
                            return S.every(t, function(t) {
                                return S.indexOf(t, e) >= 0
                            })
                        })
                    }, S.difference = function(e) {
                        var t = u.apply(r, s.call(arguments, 1));
                        return S.filter(e, function(e) {
                            return !S.contains(t, e)
                        })
                    }, S.zip = function() {
                        for (var e = S.max(S.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; n < e; n++) t[n] = S.pluck(arguments, "" + n);
                        return t
                    }, S.object = function(e, t) {
                        if (null == e) return {};
                        for (var n = {}, r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                        return n
                    }, S.indexOf = function(e, t, n) {
                        if (null == e) return -1;
                        var r = 0,
                            i = e.length;
                        if (n) {
                            if ("number" != typeof n) return r = S.sortedIndex(e, t), e[r] === t ? r : -1;
                            r = n < 0 ? Math.max(0, i + n) : n
                        }
                        if (_ && e.indexOf === _) return e.indexOf(t, n);
                        for (; r < i; r++)
                            if (e[r] === t) return r;
                        return -1
                    }, S.lastIndexOf = function(e, t, n) {
                        if (null == e) return -1;
                        var r = null != n;
                        if (y && e.lastIndexOf === y) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                        for (var i = r ? n : e.length; i--;)
                            if (e[i] === t) return i;
                        return -1
                    }, S.range = function(e, t, n) {
                        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
                        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, a = new Array(r); i < r;) a[i++] = e, e += n;
                        return a
                    };
                    var D = function() {};
                    S.bind = function(e, t) {
                        var n, r;
                        if (I && e.bind === I) return I.apply(e, s.call(arguments, 1));
                        if (!S.isFunction(e)) throw new TypeError;
                        return n = s.call(arguments, 2), r = function() {
                            if (!(this instanceof r)) return e.apply(t, n.concat(s.call(arguments)));
                            D.prototype = e.prototype;
                            var i = new D;
                            D.prototype = null;
                            var a = e.apply(i, n.concat(s.call(arguments)));
                            return Object(a) === a ? a : i
                        }
                    }, S.partial = function(e) {
                        var t = s.call(arguments, 1);
                        return function() {
                            return e.apply(this, t.concat(s.call(arguments)))
                        }
                    }, S.bindAll = function(e) {
                        var t = s.call(arguments, 1);
                        if (0 === t.length) throw new Error("bindAll must be passed function names");
                        return O(t, function(t) {
                            e[t] = S.bind(e[t], e)
                        }), e
                    }, S.memoize = function(e, t) {
                        var n = {};
                        return t || (t = S.identity),
                            function() {
                                var r = t.apply(this, arguments);
                                return S.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                            }
                    }, S.delay = function(e, t) {
                        var n = s.call(arguments, 2);
                        return setTimeout(function() {
                            return e.apply(null, n)
                        }, t)
                    }, S.defer = function(e) {
                        return S.delay.apply(S, [e, 1].concat(s.call(arguments, 1)))
                    }, S.throttle = function(e, t, n) {
                        var r, i, a, o = null,
                            s = 0;
                        n || (n = {});
                        var u = function() {
                            s = !1 === n.leading ? 0 : new Date, o = null, a = e.apply(r, i)
                        };
                        return function() {
                            var c = new Date;
                            s || !1 !== n.leading || (s = c);
                            var l = t - (c - s);
                            return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, s = c, a = e.apply(r, i)) : o || !1 === n.trailing || (o = setTimeout(u, l)), a
                        }
                    }, S.debounce = function(e, t, n) {
                        var r, i, a, o, s;
                        return function() {
                            a = this, i = arguments, o = new Date;
                            var u = function() {
                                    var c = new Date - o;
                                    c < t ? r = setTimeout(u, t - c) : (r = null, n || (s = e.apply(a, i)))
                                },
                                c = n && !r;
                            return r || (r = setTimeout(u, t)), c && (s = e.apply(a, i)), s
                        }
                    }, S.once = function(e) {
                        var t, n = !1;
                        return function() {
                            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
                        }
                    }, S.wrap = function(e, t) {
                        return function() {
                            var n = [e];
                            return o.apply(n, arguments), t.apply(this, n)
                        }
                    }, S.compose = function() {
                        var e = arguments;
                        return function() {
                            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                            return t[0]
                        }
                    }, S.after = function(e, t) {
                        return function() {
                            if (--e < 1) return t.apply(this, arguments)
                        }
                    }, S.keys = w || function(e) {
                        if (e !== Object(e)) throw new TypeError("Invalid object");
                        var t = [];
                        for (var n in e) S.has(e, n) && t.push(n);
                        return t
                    }, S.values = function(e) {
                        for (var t = S.keys(e), n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
                        return r
                    }, S.pairs = function(e) {
                        for (var t = S.keys(e), n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                        return r
                    }, S.invert = function(e) {
                        for (var t = {}, n = S.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                        return t
                    }, S.functions = S.methods = function(e) {
                        var t = [];
                        for (var n in e) S.isFunction(e[n]) && t.push(n);
                        return t.sort()
                    }, S.extend = function(e) {
                        return O(s.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t) e[n] = t[n]
                        }), e
                    }, S.pick = function(e) {
                        var t = {},
                            n = u.apply(r, s.call(arguments, 1));
                        return O(n, function(n) {
                            n in e && (t[n] = e[n])
                        }), t
                    }, S.omit = function(e) {
                        var t = {},
                            n = u.apply(r, s.call(arguments, 1));
                        for (var i in e) S.contains(n, i) || (t[i] = e[i]);
                        return t
                    }, S.defaults = function(e) {
                        return O(s.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t) void 0 === e[n] && (e[n] = t[n])
                        }), e
                    }, S.clone = function(e) {
                        return S.isObject(e) ? S.isArray(e) ? e.slice() : S.extend({}, e) : e
                    }, S.tap = function(e, t) {
                        return t(e), e
                    };
                    var T = function(e, t, n, r) {
                        if (e === t) return 0 !== e || 1 / e == 1 / t;
                        if (null == e || null == t) return e === t;
                        e instanceof S && (e = e._wrapped), t instanceof S && (t = t._wrapped);
                        var i = c.call(e);
                        if (i != c.call(t)) return !1;
                        switch (i) {
                            case "[object String]":
                                return e == String(t);
                            case "[object Number]":
                                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                            case "[object Date]":
                            case "[object Boolean]":
                                return +e == +t;
                            case "[object RegExp]":
                                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                        }
                        if ("object" != typeof e || "object" != typeof t) return !1;
                        for (var a = n.length; a--;)
                            if (n[a] == e) return r[a] == t;
                        var o = e.constructor,
                            s = t.constructor;
                        if (o !== s && !(S.isFunction(o) && o instanceof o && S.isFunction(s) && s instanceof s)) return !1;
                        n.push(e), r.push(t);
                        var u = 0,
                            l = !0;
                        if ("[object Array]" == i) {
                            if (u = e.length, l = u == t.length)
                                for (; u-- && (l = T(e[u], t[u], n, r)););
                        } else {
                            for (var d in e)
                                if (S.has(e, d) && (u++, !(l = S.has(t, d) && T(e[d], t[d], n, r)))) break;
                            if (l) {
                                for (d in t)
                                    if (S.has(t, d) && !u--) break;
                                l = !u
                            }
                        }
                        return n.pop(), r.pop(), l
                    };
                    S.isEqual = function(e, t) {
                        return T(e, t, [], [])
                    }, S.isEmpty = function(e) {
                        if (null == e) return !0;
                        if (S.isArray(e) || S.isString(e)) return 0 === e.length;
                        for (var t in e)
                            if (S.has(e, t)) return !1;
                        return !0
                    }, S.isElement = function(e) {
                        return !(!e || 1 !== e.nodeType)
                    }, S.isArray = b || function(e) {
                        return "[object Array]" == c.call(e)
                    }, S.isObject = function(e) {
                        return e === Object(e)
                    }, O(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
                        S["is" + e] = function(t) {
                            return c.call(t) == "[object " + e + "]"
                        }
                    }), S.isArguments(arguments) || (S.isArguments = function(e) {
                        return !(!e || !S.has(e, "callee"))
                    }), "function" != typeof /./ && (S.isFunction = function(e) {
                        return "function" == typeof e
                    }), S.isFinite = function(e) {
                        return isFinite(e) && !isNaN(parseFloat(e))
                    }, S.isNaN = function(e) {
                        return S.isNumber(e) && e != +e
                    }, S.isBoolean = function(e) {
                        return !0 === e || !1 === e || "[object Boolean]" == c.call(e)
                    }, S.isNull = function(e) {
                        return null === e
                    }, S.isUndefined = function(e) {
                        return void 0 === e
                    }, S.has = function(e, t) {
                        return l.call(e, t)
                    }, S.noConflict = function() {
                        return e._ = t, this
                    }, S.identity = function(e) {
                        return e
                    }, S.times = function(e, t, n) {
                        for (var r = Array(Math.max(0, e)), i = 0; i < e; i++) r[i] = t.call(n, i);
                        return r
                    }, S.random = function(e, t) {
                        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                    };
                    var A = {
                        escape: {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;"
                        }
                    };
                    A.unescape = S.invert(A.escape);
                    var q = {
                        escape: new RegExp("[" + S.keys(A.escape).join("") + "]", "g"),
                        unescape: new RegExp("(" + S.keys(A.unescape).join("|") + ")", "g")
                    };
                    S.each(["escape", "unescape"], function(e) {
                        S[e] = function(t) {
                            return null == t ? "" : ("" + t).replace(q[e], function(t) {
                                return A[e][t]
                            })
                        }
                    }), S.result = function(e, t) {
                        if (null != e) {
                            var n = e[t];
                            return S.isFunction(n) ? n.call(e) : n
                        }
                    }, S.mixin = function(e) {
                        O(S.functions(e), function(t) {
                            var n = S[t] = e[t];
                            S.prototype[t] = function() {
                                var e = [this._wrapped];
                                return o.apply(e, arguments), C.call(this, n.apply(S, e))
                            }
                        })
                    };
                    var j = 0;
                    S.uniqueId = function(e) {
                        var t = ++j + "";
                        return e ? e + t : t
                    }, S.templateSettings = {
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g,
                        escape: /<%-([\s\S]+?)%>/g
                    };
                    var P = /(.)^/,
                        M = {
                            "'": "'",
                            "\\": "\\",
                            "\r": "r",
                            "\n": "n",
                            "\t": "t",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                    S.template = function(e, t, n) {
                        var r;
                        n = S.defaults({}, n, S.templateSettings);
                        var i = new RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"),
                            a = 0,
                            o = "__p+='";
                        e.replace(i, function(t, n, r, i, s) {
                            return o += e.slice(a, s).replace(L, function(e) {
                                return "\\" + M[e]
                            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), a = s + t.length, t
                        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                        try {
                            r = new Function(n.variable || "obj", "_", o)
                        } catch (e) {
                            throw e.source = o, e
                        }
                        if (t) return r(t, S);
                        var s = function(e) {
                            return r.call(this, e, S)
                        };
                        return s.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", s
                    }, S.chain = function(e) {
                        return S(e).chain()
                    };
                    var C = function(e) {
                        return this._chain ? S(e).chain() : e
                    };
                    S.mixin(S), O(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                        var t = r[e];
                        S.prototype[e] = function() {
                            var n = this._wrapped;
                            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], C.call(this, n)
                        }
                    }), O(["concat", "join", "slice"], function(e) {
                        var t = r[e];
                        S.prototype[e] = function() {
                            return C.call(this, t.apply(this._wrapped, arguments))
                        }
                    }), S.extend(S.prototype, {
                        chain: function() {
                            return this._chain = !0, this
                        },
                        value: function() {
                            return this._wrapped
                        }
                    }), "function" == typeof define && define.amd && define("underscore", [], function() {
                        return S
                    })
                }.call(this),
                function(e, t) {
                    "undefined" != typeof module && module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define("script", t) : this.$script = t()
                }(0, function() {
                    function e(e, t) {
                        for (var n = 0, r = e.length; n < r; ++n)
                            if (!t(e[n])) return u;
                        return 1
                    }

                    function t(t, n) {
                        e(t, function(e) {
                            return !n(e)
                        })
                    }

                    function n(a, o, s) {
                        function u(e) {
                            return e.call ? e() : p[e]
                        }

                        function l() {
                            if (!--_) {
                                p[h] = 1, v && v();
                                for (var n in g) e(n.split("|"), u) && !t(g[n], u) && (g[n] = [])
                            }
                        }
                        a = a[c] ? a : [a];
                        var d = o && o.call,
                            v = d ? o : s,
                            h = d ? a.join("") : o,
                            _ = a.length;
                        return setTimeout(function() {
                            t(a, function e(t, n) {
                                return null === t ? l() : (t = n || -1 !== t.indexOf(".js") || /^https?:\/\//.test(t) || !i ? t : i + t + ".js", m[t] ? (h && (f[h] = 1), 2 == m[t] ? l() : setTimeout(function() {
                                    e(t, !0)
                                }, 0)) : (m[t] = 1, h && (f[h] = 1), void r(t, l)))
                            })
                        }, 0), n
                    }

                    function r(e, t) {
                        var n, r = o.createElement("script");
                        r.onload = r.onerror = r[d] = function() {
                            r[l] && !/^c|loade/.test(r[l]) || n || (r.onload = r[d] = null, n = 1, m[e] = 2, t())
                        }, r.async = 1, r.src = a ? e + (-1 === e.indexOf("?") ? "?" : "&") + a : e, s.insertBefore(r, s.lastChild)
                    }
                    var i, a, o = document,
                        s = o.getElementsByTagName("head")[0],
                        u = !1,
                        c = "push",
                        l = "readyState",
                        d = "onreadystatechange",
                        p = {},
                        f = {},
                        g = {},
                        m = {};
                    return n.get = r, n.order = function(e, t, r) {
                        ! function i(a) {
                            a = e.shift(), e.length ? n(a, i) : n(a, t, r)
                        }()
                    }, n.path = function(e) {
                        i = e
                    }, n.urlArgs = function(e) {
                        a = e
                    }, n.ready = function(r, i, a) {
                        r = r[c] ? r : [r];
                        var o = [];
                        return !t(r, function(e) {
                            p[e] || o[c](e)
                        }) && e(r, function(e) {
                            return p[e]
                        }) ? i() : function(e) {
                            g[e] = g[e] || [], g[e][c](i), a && a(o)
                        }(r.join("|")), n
                    }, n.done = function(e) {
                        n([null], e)
                    }, n
                }),
                function(e, t, n) {
                    "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("reqwest", n) : t.reqwest = n()
                }(0, this, function() {
                    function succeed(e) {
                        var t = protocolRe.exec(e.url);
                        return t = t && t[1] || context.location.protocol, httpsRe.test(t) ? twoHundo.test(e.request.status) : !!e.request.response
                    }

                    function handleReadyState(e, t, n) {
                        return function() {
                            return e._aborted ? n(e.request) : e._timedOut ? n(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : n(e.request)))
                        }
                    }

                    function setHeaders(e, t) {
                        var n, r = t.headers || {};
                        r.Accept = r.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
                        var i = "undefined" != typeof FormData && t.data instanceof FormData;
                        t.crossOrigin || r[requestedWith] || (r[requestedWith] = defaultHeaders.requestedWith), r[contentType] || i || (r[contentType] = t.contentType || defaultHeaders.contentType);
                        for (n in r) r.hasOwnProperty(n) && "setRequestHeader" in e && e.setRequestHeader(n, r[n])
                    }

                    function setCredentials(e, t) {
                        void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !!t.withCredentials)
                    }

                    function generalCallback(e) {
                        lastValue = e
                    }

                    function urlappend(e, t) {
                        return e + (/\?/.test(e) ? "&" : "?") + t
                    }

                    function handleJsonp(e, t, n, r) {
                        var i = uniqid++,
                            a = e.jsonpCallback || "callback",
                            o = e.jsonpCallbackName || reqwest.getcallbackPrefix(i),
                            s = new RegExp("((^|\\?|&)" + a + ")=([^&]+)"),
                            u = r.match(s),
                            c = doc.createElement("script"),
                            l = 0,
                            d = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
                        return u ? "?" === u[3] ? r = r.replace(s, "$1=" + o) : o = u[3] : r = urlappend(r, a + "=" + o), context[o] = generalCallback, c.type = "text/javascript", c.src = r, c.async = !0, void 0 === c.onreadystatechange || d || (c.htmlFor = c.id = "_reqwest_" + i), c.onload = c.onreadystatechange = function() {
                            return !(c[readyState] && "complete" !== c[readyState] && "loaded" !== c[readyState] || l) && (c.onload = c.onreadystatechange = null, c.onclick && c.onclick(), t(lastValue), lastValue = void 0, head.removeChild(c), l = 1, void 0)
                        }, head.appendChild(c), {
                            abort: function() {
                                c.onload = c.onreadystatechange = null, n({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(c), l = 1
                            }
                        }
                    }

                    function getRequest(e, t) {
                        var n, r = this.o,
                            i = (r.method || "GET").toUpperCase(),
                            a = "string" == typeof r ? r : r.url,
                            o = !1 !== r.processData && r.data && "string" != typeof r.data ? reqwest.toQueryString(r.data) : r.data || null,
                            s = !1;
                        return "jsonp" != r.type && "GET" != i || !o || (a = urlappend(a, o), o = null), "jsonp" == r.type ? handleJsonp(r, e, t, a) : (n = r.xhr && r.xhr(r) || xhr(r), n.open(i, a, !1 !== r.async), setHeaders(n, r), setCredentials(n, r), context[xDomainRequest] && n instanceof context[xDomainRequest] ? (n.onload = e, n.onerror = t, n.onprogress = function() {}, s = !0) : n.onreadystatechange = handleReadyState(this, e, t), r.before && r.before(n), s ? setTimeout(function() {
                            n.send(o)
                        }, 200) : n.send(o), n)
                    }

                    function Reqwest(e, t) {
                        this.o = e, this.fn = t, init.apply(this, arguments)
                    }

                    function setType(e) {
                        if (null !== e) return e.match("json") ? "json" : e.match("javascript") ? "js" : e.match("text") ? "html" : e.match("xml") ? "xml" : void 0
                    }

                    function init(o, fn) {
                        function complete(e) {
                            for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
                        }

                        function success(resp) {
                            var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                            resp = "jsonp" !== type ? self.request : resp;
                            var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                                r = filteredResponse;
                            try {
                                resp.responseText = r
                            } catch (e) {}
                            if (r) switch (type) {
                                case "json":
                                    try {
                                        resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                                    } catch (e) {
                                        return error(resp, "Could not parse JSON in response", e)
                                    }
                                    break;
                                case "js":
                                    resp = eval(r);
                                    break;
                                case "html":
                                    resp = r;
                                    break;
                                case "xml":
                                    resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                            }
                            for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                            complete(resp)
                        }

                        function timedOut() {
                            self._timedOut = !0, self.request.abort()
                        }

                        function error(e, t, n) {
                            for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = n, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, n);
                            complete(e)
                        }
                        this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
                        var self = this;
                        fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
                            timedOut()
                        }, o.timeout)), o.success && (this._successHandler = function() {
                            o.success.apply(o, arguments)
                        }), o.error && this._errorHandlers.push(function() {
                            o.error.apply(o, arguments)
                        }), o.complete && this._completeHandlers.push(function() {
                            o.complete.apply(o, arguments)
                        }), this.request = getRequest.call(this, success, error)
                    }

                    function reqwest(e, t) {
                        return new Reqwest(e, t)
                    }

                    function normalize(e) {
                        return e ? e.replace(/\r?\n/g, "\r\n") : ""
                    }

                    function serial(e, t) {
                        var n, r, i, a, o = e.name,
                            s = e.tagName.toLowerCase(),
                            u = function(e) {
                                e && !e.disabled && t(o, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
                            };
                        if (!e.disabled && o) switch (s) {
                            case "input":
                                /reset|button|image|file/i.test(e.type) || (n = /checkbox/i.test(e.type), r = /radio/i.test(e.type), i = e.value, (!(n || r) || e.checked) && t(o, normalize(n && "" === i ? "on" : i)));
                                break;
                            case "textarea":
                                t(o, normalize(e.value));
                                break;
                            case "select":
                                if ("select-one" === e.type.toLowerCase()) u(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                                else
                                    for (a = 0; e.length && a < e.length; a++) e.options[a].selected && u(e.options[a])
                        }
                    }

                    function eachFormElement() {
                        var e, t, n = this;
                        for (t = 0; t < arguments.length; t++) e = arguments[t], /input|select|textarea/i.test(e.tagName) && serial(e, n),
                            function(e, t) {
                                var r, i, a;
                                for (r = 0; r < t.length; r++)
                                    for (a = e[byTag](t[r]), i = 0; i < a.length; i++) serial(a[i], n)
                            }(e, ["input", "select", "textarea"])
                    }

                    function serializeQueryString() {
                        return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
                    }

                    function serializeHash() {
                        var e = {};
                        return eachFormElement.apply(function(t, n) {
                            t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(n)) : e[t] = n
                        }, arguments), e
                    }

                    function buildParams(e, t, n, r) {
                        var i, a, o, s = /\[\]$/;
                        if (isArray(t))
                            for (a = 0; t && a < t.length; a++) o = t[a], n || s.test(e) ? r(e, o) : buildParams(e + "[" + ("object" == typeof o ? a : "") + "]", o, n, r);
                        else if (t && "[object Object]" === t.toString())
                            for (i in t) buildParams(e + "[" + i + "]", t[i], n, r);
                        else r(e, t)
                    }
                    var context = this;
                    if ("document" in context) var doc = document,
                        byTag = "getElementsByTagName",
                        head = doc[byTag]("head")[0];
                    else {
                        var XHR2;
                        try {
                            XHR2 = require("xhr2")
                        } catch (e) {
                            throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
                        }
                    }
                    var httpsRe = /^http/,
                        protocolRe = /(^\w+):\/\//,
                        twoHundo = /^(20\d|1223)$/,
                        readyState = "readyState",
                        contentType = "Content-Type",
                        requestedWith = "X-Requested-With",
                        uniqid = 0,
                        callbackPrefix = "reqwest_" + +new Date,
                        lastValue, xmlHttpRequest = "XMLHttpRequest",
                        xDomainRequest = "XDomainRequest",
                        noop = function() {},
                        isArray = "function" == typeof Array.isArray ? Array.isArray : function(e) {
                            return e instanceof Array
                        },
                        defaultHeaders = {
                            contentType: "application/x-www-form-urlencoded",
                            requestedWith: xmlHttpRequest,
                            accept: {
                                "*": "text/javascript, text/html, application/xml, text/xml, */*",
                                xml: "application/xml, text/xml",
                                html: "text/html",
                                text: "text/plain",
                                json: "application/json, text/javascript",
                                js: "application/javascript, text/javascript"
                            }
                        },
                        xhr = function(e) {
                            if (!0 === e.crossOrigin) {
                                var t = context[xmlHttpRequest] ? new XMLHttpRequest : null;
                                if (t && "withCredentials" in t) return t;
                                if (context[xDomainRequest]) {
                                    var n = /^https?/;
                                    if (window.location.href.match(n)[0] !== e.url.match(n)[0]) throw new Error("XDomainRequest: requests must be targeted to the same scheme as the hosting page.");
                                    return new XDomainRequest
                                }
                                throw new Error("Browser does not support cross-origin requests")
                            }
                            return context[xmlHttpRequest] ? new XMLHttpRequest : XHR2 ? new XHR2 : new ActiveXObject("Microsoft.XMLHTTP")
                        },
                        globalSetupOptions = {
                            dataFilter: function(e) {
                                return e
                            }
                        };
                    return Reqwest.prototype = {
                        abort: function() {
                            this._aborted = !0, this.request.abort()
                        },
                        retry: function() {
                            init.call(this, this.o, this.fn)
                        },
                        then: function(e, t) {
                            return e = e || function() {}, t = t || function() {}, this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)), this
                        },
                        always: function(e) {
                            return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e), this
                        },
                        fail: function(e) {
                            return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e), this
                        },
                        "catch": function(e) {
                            return this.fail(e)
                        }
                    }, reqwest.serializeArray = function() {
                        var e = [];
                        return eachFormElement.apply(function(t, n) {
                            e.push({
                                name: t,
                                value: n
                            })
                        }, arguments), e
                    }, reqwest.serialize = function() {
                        if (0 === arguments.length) return "";
                        var e, t, n = Array.prototype.slice.call(arguments, 0);
                        return e = n.pop(), e && e.nodeType && n.push(e) && (e = null), e && (e = e.type), t = "map" == e ? serializeHash : "array" == e ? reqwest.serializeArray : serializeQueryString, t.apply(null, n)
                    }, reqwest.toQueryString = function(e, t) {
                        var n, r, i = t || !1,
                            a = [],
                            o = encodeURIComponent,
                            s = function(e, t) {
                                t = "function" == typeof t ? t() : null == t ? "" : t, a[a.length] = o(e) + "=" + o(t)
                            };
                        if (isArray(e))
                            for (r = 0; e && r < e.length; r++) s(e[r].name, e[r].value);
                        else
                            for (n in e) e.hasOwnProperty(n) && buildParams(n, e[n], i, s);
                        return a.join("&").replace(/%20/g, "+")
                    }, reqwest.getcallbackPrefix = function() {
                        return callbackPrefix
                    }, reqwest.compat = function(e, t) {
                        return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback,
                            e.jsonp && (e.jsonpCallback = e.jsonp)), new Reqwest(e, t)
                    }, reqwest.ajaxSetup = function(e) {
                        e = e || {};
                        for (var t in e) globalSetupOptions[t] = e[t]
                    }, reqwest
                }),
                function e(t, n, r) {
                    function i(o, s) {
                        if (!n[o]) {
                            if (!t[o]) {
                                var u = "function" == typeof require && require;
                                if (!s && u) return u(o, !0);
                                if (a) return a(o, !0);
                                var c = new Error("Cannot find module '" + o + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var l = n[o] = {
                                exports: {}
                            };
                            t[o][0].call(l.exports, function(e) {
                                var n = t[o][1][e];
                                return i(n || e)
                            }, l, l.exports, e, t, n, r)
                        }
                        return n[o].exports
                    }
                    for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
                    return i
                }({
                    1: [function(e, t, n) {
                        var r = window.SnappyJS || {};
                        r.uncompress = e("./index").uncompress, r.compress = e("./index").compress, window.SnappyJS = r
                    }, {
                        "./index": 2
                    }],
                    2: [function(e, t, n) {
                        "use strict";

                        function r() {
                            return "object" == typeof process && "object" == typeof process.versions && void 0 !== process.versions.node
                        }

                        function i(e) {
                            return e instanceof Uint8Array && (!r() || !Buffer.isBuffer(e))
                        }

                        function a(e) {
                            return e instanceof ArrayBuffer
                        }

                        function o(e) {
                            return !!r() && Buffer.isBuffer(e)
                        }

                        function s(e) {
                            if (!i(e) && !a(e) && !o(e)) throw new TypeError(d);
                            var t = !1,
                                n = !1;
                            i(e) ? t = !0 : a(e) && (n = !0, e = new Uint8Array(e));
                            var r = new c(e),
                                s = r.readUncompressedLength();
                            if (-1 === s) throw new Error("Invalid Snappy bitstream");
                            var u, l;
                            if (t) {
                                if (u = new Uint8Array(s), !r.uncompressToBuffer(u)) throw new Error("Invalid Snappy bitstream")
                            } else if (n) {
                                if (u = new ArrayBuffer(s), l = new Uint8Array(u), !r.uncompressToBuffer(l)) throw new Error("Invalid Snappy bitstream")
                            } else if (u = Buffer.alloc(s), !r.uncompressToBuffer(u)) throw new Error("Invalid Snappy bitstream");
                            return u
                        }

                        function u(e) {
                            if (!i(e) && !a(e) && !o(e)) throw new TypeError(d);
                            var t = !1,
                                n = !1;
                            i(e) ? t = !0 : a(e) && (n = !0, e = new Uint8Array(e));
                            var r, s, u, c = new l(e),
                                p = c.maxCompressedLength();
                            return t ? (r = new Uint8Array(p), u = c.compressToBuffer(r)) : n ? (r = new ArrayBuffer(p), s = new Uint8Array(r), u = c.compressToBuffer(s)) : (r = Buffer.alloc(p), u = c.compressToBuffer(r)), r.slice(0, u)
                        }
                        var c = e("./snappy_decompressor").SnappyDecompressor,
                            l = e("./snappy_compressor").SnappyCompressor,
                            d = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
                        n.uncompress = s, n.compress = u
                    }, {
                        "./snappy_compressor": 3,
                        "./snappy_decompressor": 4
                    }],
                    3: [function(e, t, n) {
                        "use strict";

                        function r(e, t) {
                            return 506832829 * e >>> t
                        }

                        function i(e, t) {
                            return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24)
                        }

                        function a(e, t, n) {
                            return e[t] === e[n] && e[t + 1] === e[n + 1] && e[t + 2] === e[n + 2] && e[t + 3] === e[n + 3]
                        }

                        function o(e, t, n, r, i) {
                            var a;
                            for (a = 0; a < i; a++) n[r + a] = e[t + a]
                        }

                        function s(e, t, n, r, i) {
                            return n <= 60 ? (r[i] = n - 1 << 2, i += 1) : n < 256 ? (r[i] = 240, r[i + 1] = n - 1, i += 2) : (r[i] = 244, r[i + 1] = n - 1 & 255, r[i + 2] = n - 1 >>> 8, i += 3), o(e, t, r, i, n), i + n
                        }

                        function u(e, t, n, r) {
                            return r < 12 && n < 2048 ? (e[t] = 1 + (r - 4 << 2) + (n >>> 8 << 5), e[t + 1] = 255 & n, t + 2) : (e[t] = 2 + (r - 1 << 2), e[t + 1] = 255 & n, e[t + 2] = n >>> 8, t + 3)
                        }

                        function c(e, t, n, r) {
                            for (; r >= 68;) t = u(e, t, n, 64), r -= 64;
                            return r > 64 && (t = u(e, t, n, 60), r -= 60), u(e, t, n, r)
                        }

                        function l(e, t, n, o, u) {
                            for (var l = 1; 1 << l <= n && l <= f;) l += 1;
                            l -= 1;
                            var d = 32 - l;
                            void 0 === g[l] && (g[l] = new Uint16Array(1 << l));
                            var p, m = g[l];
                            for (p = 0; p < m.length; p++) m[p] = 0;
                            var v, h, _, y, b, w, I, S, O, x, k, E, N = t + n,
                                V = t,
                                D = t,
                                T = !0;
                            if (n >= 15)
                                for (v = N - 15, t += 1, _ = r(i(e, t), d); T;) {
                                    w = 32, y = t;
                                    do {
                                        if (t = y, h = _, I = w >>> 5, w += 1, y = t + I, t > v) {
                                            T = !1;
                                            break
                                        }
                                        _ = r(i(e, y), d), b = V + m[h], m[h] = t - V
                                    } while (!a(e, t, b));
                                    if (!T) break;
                                    u = s(e, D, t - D, o, u);
                                    do {
                                        for (S = t, O = 4; t + O < N && e[t + O] === e[b + O];) O += 1;
                                        if (t += O, x = S - b, u = c(o, u, x, O), D = t, t >= v) {
                                            T = !1;
                                            break
                                        }
                                        k = r(i(e, t - 1), d), m[k] = t - 1 - V, E = r(i(e, t), d), b = V + m[E], m[E] = t - V
                                    } while (a(e, t, b));
                                    if (!T) break;
                                    t += 1, _ = r(i(e, t), d)
                                }
                            return D < N && (u = s(e, D, N - D, o, u)), u
                        }

                        function d(e, t, n) {
                            do t[n] = 127 & e, e >>>= 7, e > 0 && (t[n] += 128), n += 1; while (e > 0);
                            return n
                        }

                        function p(e) {
                            this.array = e
                        }
                        var f = 14,
                            g = new Array(f + 1);
                        p.prototype.maxCompressedLength = function() {
                            var e = this.array.length;
                            return 32 + e + Math.floor(e / 6)
                        }, p.prototype.compressToBuffer = function(e) {
                            var t, n = this.array,
                                r = n.length,
                                i = 0,
                                a = 0;
                            for (a = d(r, e, a); i < r;) t = Math.min(r - i, 65536), a = l(n, i, t, e, a), i += t;
                            return a
                        }, n.SnappyCompressor = p
                    }, {}],
                    4: [function(e, t, n) {
                        "use strict";

                        function r(e, t, n, r, i) {
                            var a;
                            for (a = 0; a < i; a++) n[r + a] = e[t + a]
                        }

                        function i(e, t, n, r) {
                            var i;
                            for (i = 0; i < r; i++) e[t + i] = e[t - n + i]
                        }

                        function a(e) {
                            this.array = e, this.pos = 0
                        }
                        var o = [0, 255, 65535, 16777215, 4294967295];
                        a.prototype.readUncompressedLength = function() {
                            for (var e, t, n = 0, r = 0; r < 32 && this.pos < this.array.length;) {
                                if (e = this.array[this.pos], this.pos += 1, (t = 127 & e) << r >>> r !== t) return -1;
                                if (n |= t << r, e < 128) return n;
                                r += 7
                            }
                            return -1
                        }, a.prototype.uncompressToBuffer = function(e) {
                            for (var t, n, a, s, u = this.array, c = u.length, l = this.pos, d = 0; l < u.length;)
                                if (t = u[l], l += 1, 0 == (3 & t)) {
                                    if ((n = 1 + (t >>> 2)) > 60) {
                                        if (l + 3 >= c) return !1;
                                        a = n - 60, n = u[l] + (u[l + 1] << 8) + (u[l + 2] << 16) + (u[l + 3] << 24), n = 1 + (n & o[a]), l += a
                                    }
                                    if (l + n > c) return !1;
                                    r(u, l, e, d, n), l += n, d += n
                                } else {
                                    switch (3 & t) {
                                        case 1:
                                            n = 4 + (t >>> 2 & 7), s = u[l] + (t >>> 5 << 8), l += 1;
                                            break;
                                        case 2:
                                            if (l + 1 >= c) return !1;
                                            n = 1 + (t >>> 2), s = u[l] + (u[l + 1] << 8), l += 2;
                                            break;
                                        case 3:
                                            if (l + 3 >= c) return !1;
                                            n = 1 + (t >>> 2), s = u[l] + (u[l + 1] << 8) + (u[l + 2] << 16) + (u[l + 3] << 24), l += 4
                                    }
                                    if (0 === s || s > d) return !1;
                                    i(e, d, s, n), d += n
                                }
                            return !0
                        }, n.SnappyDecompressor = a
                    }, {}]
                }, {}, [1]), define("snappy", function() {}),
                function(e) {
                    if ("object" == typeof exports) module.exports = e();
                    else if ("function" == typeof define && define.amd) define("tld", e);
                    else {
                        var t;
                        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.tldjs = e()
                    }
                }(function() {
                    return function e(t, n, r) {
                        function i(o, s) {
                            if (!n[o]) {
                                if (!t[o]) {
                                    var u = "function" == typeof require && require;
                                    if (!s && u) return u(o, !0);
                                    if (a) return a(o, !0);
                                    throw new Error("Cannot find module '" + o + "'")
                                }
                                var c = n[o] = {
                                    exports: {}
                                };
                                t[o][0].call(c.exports, function(e) {
                                    var n = t[o][1][e];
                                    return i(n || e)
                                }, c, c.exports, e, t, n, r)
                            }
                            return n[o].exports
                        }
                        for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
                        return i
                    }({
                        1: [function(e, t, n) {
                            "use strict";
                            var r = e("./lib/tld.js").init();
                            r.rules = e("./rules.json"), t.exports = r
                        }, {
                            "./lib/tld.js": 3,
                            "./rules.json": 4
                        }],
                        2: [function(e, t, n) {
                            "use strict";

                            function r(e) {
                                e = e || {}, this.exception = e.exception || !1, this.firstLevel = e.firstLevel || "", this.secondLevel = e.secondLevel || null, this.source = e.source || "", this.wildcard = e.wildcard || !1
                            }
                            r.prototype.getNormalXld = function() {
                                return (this.secondLevel ? "." + this.secondLevel : "") + "." + this.firstLevel
                            }, r.prototype.getNormalPattern = function() {
                                return (this.secondLevel ? "\\." + this.secondLevel : "") + "\\." + this.firstLevel
                            }, r.prototype.getWildcardPattern = function() {
                                return "\\.[^\\.]+" + this.getNormalXld().replace(/\./g, "\\.")
                            }, r.prototype.getExceptionPattern = function() {
                                return (this.secondLevel || "") + "\\." + this.firstLevel
                            }, r.prototype.getPattern = function(e, t) {
                                var n = "";
                                return e = void 0 === e ? "(" : e + "", t = void 0 === t ? ")$" : e + "", n = !0 === this.exception ? this.getExceptionPattern() : "[^\\.]+" + (this.wildcard ? this.getWildcardPattern() : this.getNormalPattern()), e + n + t
                            }, t.exports = r
                        }, {}],
                        3: [function(e, t, n) {
                            "use strict";

                            function r() {
                                this.rules = []
                            }

                            function i(e) {
                                return String(e).replace(/(^\s+|\s+$)/g, "")
                            }

                            function a(e, t) {
                                if (void 0 === e || null === e) throw new TypeError;
                                var n = Object(e),
                                    r = n.length >>> 0;
                                if ("function" != typeof t) throw new TypeError;
                                for (var i = arguments.length >= 3 ? arguments[2] : void 0, a = 0; a < r; a++)
                                    if (a in n && t.call(i, n[a], a, n)) return !0;
                                return !1
                            }

                            function o(e, t) {
                                if (void 0 === e || null === e) throw new TypeError;
                                var n = Object(e),
                                    r = n.length >>> 0;
                                if ("function" != typeof t) throw new TypeError;
                                for (var i = new Array(r), a = arguments.length >= 3 ? arguments[2] : void 0, o = 0; o < r; o++) o in n && (i[o] = t.call(a, n[o], o, n));
                                return i
                            }
                            var s = e("./rule.js"),
                                u = /^(https?:\/\/)?(.+@)?(.+?)(:\d{2,5})?(\/.*)?$/;
                            r.init = function() {
                                return new r
                            }, r.getCandidateRule = function(e, t) {
                                var n = {
                                    normal: null,
                                    exception: null
                                };
                                return a(t, function(t) {
                                    var r;
                                    return "." + e === t.getNormalXld() ? (!0 === t.exception && (n.normal = t), !0) : (r = ".+" + t.getNormalPattern() + "$", !!new RegExp(r).test(e) && (n[t.exception ? "exception" : "normal"] = t, !t.exception))
                                }), n.normal && n.exception ? n.exception : n.normal
                            }, r.prototype.getRulesForTld = function(e, t) {
                                var n = !0,
                                    r = this.rules[e];
                                return "[object Array]" === Object.prototype.toString.call(r) ? r : r ? (r = o(r.split("|"), function(t) {
                                    var r = t[0];
                                    return "!" !== r && "*" !== r || (t = t.slice(1)) || (n = !1), new s({
                                        firstLevel: e,
                                        secondLevel: t,
                                        exception: "!" === r,
                                        wildcard: "*" === r
                                    })
                                }), n && r.unshift(new s({
                                    firstLevel: e
                                })), this.rules[e] = r.reverse(), r) : t ? [t] : []
                            }, r.prototype.tldExists = function(e) {
                                var t;
                                return e = r.cleanHostValue(e), !!this.rules[e] || (t = r.extractTldFromHost(e), void 0 !== this.rules[t])
                            }, r.prototype.getDomain = function(e) {
                                var t, n, i, a = null;
                                return !1 === this.isValid(e) ? null : (e = r.cleanHostValue(e), t = r.extractTldFromHost(e), n = this.getRulesForTld(t, new s({
                                    firstLevel: t
                                })), null === (i = r.getCandidateRule(e, n)) ? null : (e.replace(new RegExp(i.getPattern()), function(e, t) {
                                    a = t
                                }), a))
                            }, r.prototype.getSubdomain = function(e) {
                                var t, n, i = null;
                                return e = r.cleanHostValue(e), null === (t = this.getDomain(e)) ? i : (n = "\\.?" + r.escapeRegExp(t) + "$", i = e.replace(new RegExp(n, "i"), ""))
                            }, r.prototype.isValid = function(e) {
                                return !("string" != typeof e || -1 === e.indexOf(".") || "." === e[0])
                            }, r.cleanHostValue = function(e) {
                                return e = i(e).toLowerCase(), u.exec(e)[3] || e || ""
                            }, r.extractTldFromHost = function(e) {
                                return e.split(".").pop()
                            }, r.escapeRegExp = function(e) {
                                return String(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
                            }, t.exports = r
                        }, {
                            "./rule.js": 2
                        }],
                        4: [function(e, t, n) {
                            t.exports = {
                                br: "com",
                                uk: "co",
                                za: "co",
                                com: "appspot"
                            }
                        }, {}]
                    }, {}, [1])(1)
                }),
                function(e, t) {
                    var n = function() {
                            return n.get.apply(n, arguments)
                        },
                        r = n.utils = {
                            isArray: Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            },
                            isPlainObject: function(e) {
                                return !!e && "[object Object]" === Object.prototype.toString.call(e)
                            },
                            toArray: function(e) {
                                return Array.prototype.slice.call(e)
                            },
                            getKeys: Object.keys || function(e) {
                                var t = [],
                                    n = "";
                                for (n in e) e.hasOwnProperty(n) && t.push(n);
                                return t
                            },
                            escape: function(e) {
                                return String(e).replace(/[,;"\\=\s%]/g, function(e) {
                                    return encodeURIComponent(e)
                                })
                            },
                            retrieve: function(e, t) {
                                return null == e ? t : e
                            }
                        };
                    n.defaults = {}, n.expiresMultiplier = 86400, n.safeSet = function(e, t, r) {
                        try {
                            n.set(e, t, r)
                        } catch (e) {}
                    }, n.set = function(t, n, i) {
                        if (r.isPlainObject(t))
                            for (var a in t) t.hasOwnProperty(a) && this.set(a, t[a], n);
                        else {
                            i = r.isPlainObject(i) ? i : {
                                expires: i
                            };
                            var o = void 0 !== i.expires ? i.expires : this.defaults.expires || "",
                                s = typeof o;
                            "string" === s && "" !== o ? o = new Date(o) : "number" === s && (o = new Date(+new Date + 1e3 * this.expiresMultiplier * o)), "" !== o && "toGMTString" in o && (o = ";expires=" + o.toGMTString());
                            var u = i.path || this.defaults.path;
                            u = u ? ";path=" + u : "";
                            var c = i.domain || this.defaults.domain;
                            c = c ? ";domain=" + c : "";
                            var l = i.secure || this.defaults.secure ? ";secure" : "";
                            e.cookie = r.escape(t) + "=" + r.escape(n) + o + u + c + l
                        }
                        return this
                    }, n.remove = function(e) {
                        e = r.isArray(e) ? e : r.toArray(arguments);
                        for (var t = 0, n = e.length; t < n; t++) this.set(e[t], "", -1);
                        return this
                    }, n.empty = function() {
                        return this.remove(r.getKeys(this.all()))
                    }, n.get = function(e, t) {
                        t = t || void 0;
                        var n = this.all();
                        if (r.isArray(e)) {
                            for (var i = {}, a = 0, o = e.length; a < o; a++) {
                                var s = e[a];
                                i[s] = r.retrieve(n[s], t)
                            }
                            return i
                        }
                        return r.retrieve(n[e], t)
                    }, n.all = function() {
                        if ("" === e.cookie) return {};
                        for (var t = e.cookie.split("; "), n = {}, r = 0, i = t.length; r < i; r++) {
                            var a = t[r].split("=");
                            try {
                                n[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                            } catch (e) {
                                VISION.logError("Error decoding cookie element: " + t[r], e.stack)
                            }
                        }
                        return n
                    }, n.enabled = function() {
                        if (navigator.cookieEnabled) return !0;
                        var e = "_" === n.set("_", "_").get("_");
                        return n.remove("_"), e
                    }, "function" == typeof define && define.amd ? define("cookie", [], function() {
                        return n
                    }) : "undefined" != typeof exports ? exports.cookie = n : window.cookie = n
                }(document), define("controller/vendor/akamai", [], function() {
                    function e(e, t, n) {
                        n({
                            event_name: e,
                            media_auto: t.autoplay,
                            media_observed_bitrate: t.playbackRate,
                            media_content_length: t.duration,
                            media_current_position: t.currentTime
                        })
                    }
                    return {
                        prepareObjAkamaiMain: function(t, n) {
                            t.seekingStartTime = 0, t.visionPlayer = {
                                started: !1,
                                initiated: !1
                            }, "playing" === t.playState && (t.visionPlayer.started = !0, t.visionPlayer.initiated = !0, e("media_start", t, n)), t.addEventListener("ads-ad-started", function(t) {
                                e("media_ad_start", t.player, n)
                            }), t.addEventListener("ads-ad-ended", function(t) {
                                e("media_ad_stop", t.player, n)
                            }), t.addEventListener("ads-play", function(t) {
                                e("media_ad_play", t.player, n)
                            }), t.addEventListener("ads-pause", function(t) {
                                e("media_ad_pause", t.player, n)
                            }), t.addEventListener("play", function(r) {
                                t.visionPlayer.initiated || (t.visionPlayer.initiated = !0, e("media_init", r.player, n))
                            }), t.addEventListener("canplay", function(r) {
                                t.visionPlayer.started || (t.visionPlayer.started = !0, e("media_start", r.player, n))
                            }), t.addEventListener("pause", function(t) {
                                e("media_pause", t.player, n)
                            }), t.addEventListener("resume", function(r) {
                                !t.visionPlayer.started && r.player.currentTime > 1 && (t.visionPlayer.started = !0, t.visionPlayer.initiated = !0, e("media_init", r.player, n), e("media_start", r.player, n), e("media_pause", r.player, n)), e("media_play", r.player, n)
                            }), t.addEventListener("ended", function(r) {
                                t.visionPlayer.started = !1, e("media_stop", r.player, n)
                            }), t.addEventListener("seeking", function(r) {
                                t.seekingStartTime = r.player.currentTime, e("media_buffer_start", r.player, n)
                            }), t.addEventListener("seeked", function(r) {
                                "playing" === r.player.playState && (e("media_buffer_end", r.player, n), r.data > t.seekingStartTime ? e("media_forward", r.player, n) : e("media_backward", r.player, n))
                            })
                        }
                    }
                }), define("controller/vendor/brightcove", [], function() {
                    function e(e, t, n) {
                        n({
                            event_name: e,
                            media_auto: t.autoplay(),
                            media_player_type: t.currentType(),
                            media_observed_bitrate: t.playbackRate(),
                            media_content_length: t.duration(),
                            media_current_position: t.currentTime()
                        })
                    }
                    return {
                        prepareToPostBrightCove: function(t, n) {
                            t.visionScrub = {
                                scrubbing: !1,
                                startTime: null,
                                mode: "none"
                            }, t.visionPlayer = {
                                initiated: !1,
                                started: !1,
                                bufferStarted: !1
                            }, t.hasStarted_ && !t.paused() && (t.visionPlayer.started = !0, t.visionPlayer.initiated || (t.visionPlayer.initiated = !0, e("media_init", t, n)), e("media_start", t, n)), t.on("ads-ad-started", function() {
                                t.visionPlayer.initiated || (t.visionPlayer.initiated = !0, e("media_init", t, n)), e("media_ad_start", t, n)
                            }), t.on("ads-ad-ended", function() {
                                e("media_ad_stop", t, n)
                            }), t.on("ads-play", function() {
                                e("media_ad_play", t, n)
                            }), t.on("ads-pause", function() {
                                e("media_ad_pause", t, n)
                            }), t.on("playing", function() {
                                t.visionPlayer.started || (t.visionPlayer.started = !0, t.visionPlayer.initiated = !0, e("media_start", t, n)), t.visionScrub.scrubbing && ("forward" === t.visionScrub.mode && e("media_forward", t, n), "backward" === t.visionScrub.mode && e("media_backward", t, n), t.visionScrub = {
                                    mode: "none",
                                    startTime: null,
                                    scrubbing: !1
                                })
                            }), t.on("play", function() {
                                t.visionPlayer.initiated ? t.visionPlayer.started && !t.visionScrub.scrubbing && e("media_play", t, n) : (t.visionPlayer.initiated = !0, e("media_init", t, n))
                            }), t.on("pause", function() {
                                t.scrubbing() || t.seeking() ? t.visionScrub.scrubbing = !0 : t.duration() - t.currentTime() > 1 && (e("media_pause", t, n), t.visionScrub.scrubbing = !1)
                            }), t.on("ended", function() {
                                e("media_stop", t, n), t.visionPlayer.started = !1, t.visionScrub = {
                                    mode: "mode",
                                    scrubbing: !1,
                                    startTime: null
                                }
                            }), t.on("dispose", function() {
                                t.ads.isAdPlaying() ? e("media_dispose_ad_stop", t, n) : e("media_stop", t, n), t.visionPlayer.started = !1, t.visionScrub = {
                                    mode: "mode",
                                    scrubbing: !1,
                                    startTime: null
                                }
                            }), t.on("seeking", function() {
                                !t.visionPlayer.bufferStarted && t.bufferedPercent() * t.duration() < t.currentTime() && (t.visionPlayer.bufferStarted = !0, e("media_buffer_start", t, n))
                            }), t.on("seeked", function() {
                                t.visionPlayer.bufferStarted && (t.visionPlayer.bufferStarted = !1, e("media_buffer_end", t, n))
                            }), t.on("timeupdate", function() {
                                var e = t.visionScrub.startTime && t.currentTime() - t.visionScrub.startTime || 0;
                                e > .5 ? t.visionScrub.mode = "forward" : e < -.5 && (t.visionScrub.mode = "backward"), t.visionScrub.startTime = t.currentTime()
                            })
                        }
                    }
                }), define("models/API/VISION", ["underscore", "bean", "reqwest", "tld", "cookie", "controller/vendor/akamai", "controller/vendor/brightcove"], function(e, t, n, r, i, a, o, s) {
                    "use strict";

                    function u(e) {
                        for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                            for (var i = n[r];
                                " " == i.charAt(0);) i = i.substring(1, i.length);
                            if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
                        }
                        return null
                    }
                    var c = function e() {
                        return e.singleton
                    };
                    c.debuggingEnabled = !1, void 0 !== window.VISION.__appData.configs.debugMode && 1 == window.VISION.__appData.configs.debugMode && (c.debuggingEnabled = !0), c.debug = function(e) {
                        c.debuggingEnabled && void 0
                    }, c.singleton = window.VISION.singleton, c.mediaInstances = [], c.producerData = window.VISION.producerData, c.listeners = window.VISION.listeners, c.singleton.set = function() {
                        try {
                            if (e.isObject(arguments[0])) {
                                if (void 0 !== arguments[1] && !0 === arguments[1] && void 0 !== c.producerData[arguments[0]]) return;
                                e.extend(c.producerData, arguments[0])
                            } else e.isString(arguments[0]) && (c.producerData[arguments[0]] = arguments[1])
                        } catch (e) {
                            c.logError("Error in setting singleton property", e.stack)
                        }
                    }, c.singleton.get = function(e) {
                        return c.producerData[e]
                    }, c.singleton.track = function(e) {
                        if (window.VISION.__appData.configs.collection) {
                            var n = Array.isArray(e) ? e : [e];
                            if (!window.VISION.hasLoaded) return void window.VISION.queue.push(function() {
                                c.singleton.track(n)
                            });
                            for (var r = [], i = 0; i < n.length; i++) {
                                var a, o = n[i] || {};
                                o.hasOwnProperty("event_timestamp") || (o.event_timestamp = (new Date).getTime()), o.hasOwnProperty("event_name") ? (a = o.event_name.split("_")[0].toLowerCase(), a = a.charAt(0).toUpperCase() + a.slice(1), r.push(a)) : r.push("Custom")
                            }
                            try {
                                for (var i = 0; i < n.length; i++) "Page" === r[i] && (t.fire(window.VISION, "beforeTrack" + r[i], n[i]), t.fire(window.VISION, "trackPageComplete", n[i]));
                                t.fire(window.VISION, "track", n)
                            } catch (e) {
                                c.logError("Error in initial track request", e.stack)
                            }
                        }
                    }, c.singleton.trackMedia = function(e) {
                        if (window.VISION.__appData.configs.collection) {
                            if (!window.VISION.hasLoaded) return void window.VISION.queue.push(function() {
                                c.singleton.trackMedia(e)
                            });
                            var t = !1,
                                n = c.mediaInstances;
                            for (var r in n) n[r].getVideo() === e.name && (t = !0, n[r].changeVideo(e.player.metaData));
                            if (!t) {
                                var i = new l;
                                i.init(e.player, e.name), n.push(i)
                            }
                        }
                    };
                    var l = function() {
                        var e, n, r, i, s, u, l = function() {
                                return (new Date).getTime() + "-" + Math.floor(1e13 * Math.random())
                            },
                            d = function(e, n, r) {
                                var i = m,
                                    a = g;
                                "ad" === n && r ? i = r : r && (a = r);
                                var o = Object.assign(e, {
                                    media_ad_time_spent: i / 1e3,
                                    media_time_spent: a / 1e3,
                                    event_timestamp: (new Date).getTime()
                                });
                                try {
                                    t.fire(window.VISION, "mediaTrack", o)
                                } catch (e) {
                                    c.logError("Error in initial mediaTrack request", e.stack)
                                }
                            },
                            p = null,
                            f = null,
                            g = 0,
                            m = 0,
                            v = function(e) {
                                var t = JSON.parse(e),
                                    n = (new Date).getTime() - parseInt(f, 10) + m;
                                switch (t.media_session_id = s, t.event_name = "media_ad_heartbeat", u.vendor) {
                                    case "akamai":
                                        t.media_content_length = u.duration, t.media_current_position = u.currentTime, d(t, "ad", n);
                                        break;
                                    case "brightcove":
                                        u.player_ && (t.media_content_length = u.duration(), t.media_current_position = u.currentTime(), d(t, "ad", n))
                                }
                            },
                            h = function(e) {
                                var t = JSON.parse(e);
                                t.media_session_id = s, t.event_name = "media_ad_stop", d(t, "ad"), m = 0, f = null
                            },
                            _ = function(e) {
                                var t = JSON.parse(e),
                                    n = (new Date).getTime() - parseInt(p, 10) + g;
                                switch (t.media_session_id = s, t.event_name = "media_heartbeat", u.vendor) {
                                    case "akamai":
                                        t.media_content_length = u.duration, t.media_current_position = u.currentTime, d(t, "video", n);
                                        break;
                                    case "brightcove":
                                        u.player_ && (t.media_content_length = u.duration(), t.media_current_position = u.currentTime(), d(t, "video", n))
                                }
                            },
                            y = function(e) {
                                var t = JSON.parse(e);
                                s = null, t.event_name = "media_stop", d(t), g = 0, p = null
                            },
                            b = function(e) {
                                return e < window.VISION.__appData.configs.mediaLengthShortSec ? window.VISION.__appData.configs.mediaHeartbeatShortSec : e < window.VISION.__appData.configs.mediaLengthMediumSec ? window.VISION.__appData.configs.mediaHeartbeatMediumSec : window.VISION.__appData.configs.mediaHeartbeatLongSec
                            },
                            w = function(t) {
                                var a = window.VISION.__appData.configs.mediaHeartbeatShortSec;
                                switch (t.media_id = u.metaData.media_id, t.media_session_sequence_number = u.metaData.media_session_sequence_number, t.media_name = u.metaData.media_name, t.media_session_id = s, t.event_name) {
                                    case "media_ad_start":
                                        s = s || l(), f = (new Date).getTime(), m = m || 0, t.media_session_id = s, n = setInterval(v.bind(null, JSON.stringify(t)), 1e3 * window.VISION.__appData.configs.mediaAdHeartbeat), p && (g = (new Date).getTime() - parseInt(p) + g, clearInterval(e), p = null), d(t, "ad");
                                        break;
                                    case "media_ad_stop":
                                        if (clearInterval(n), i && clearTimeout(i), null === f) return;
                                        m = (new Date).getTime() - parseInt(f) + m, g > 0 && (p = (new Date).getTime(), a = b(t.media_content_length), e = setInterval(_.bind(null, JSON.stringify(t)), 1e3 * a)), d(t, "ad"), f = null;
                                        break;
                                    case "media_dispose_ad_stop":
                                        if (clearInterval(n), i && clearTimeout(i), e && clearInterval(e), null === f) return;
                                        m = (new Date).getTime() - parseInt(f) + m, t.event_name = "media_ad_stop", d(t, "ad"), m = 0, g = 0, p = null;
                                        break;
                                    case "media_ad_play":
                                        f = (new Date).getTime(), i && clearTimeout(i), n = setInterval(v.bind(null, JSON.stringify(t)), 1e3 * window.VISION.__appData.configs.mediaAdHeartbeat), d(t, "ad");
                                        break;
                                    case "media_ad_pause":
                                        clearInterval(n), m = (new Date).getTime() - parseInt(f) + m, i = setTimeout(h.bind(null, JSON.stringify(t)), 1e3 * window.VISION.__appData.configs.mediaAdPauseTimeout), d(t, "ad");
                                        break;
                                    case "media_init":
                                        s = s || l(), t.media_session_id = s, d(t);
                                        break;
                                    case "media_buffer_start":
                                    case "media_buffer_end":
                                        g = (new Date).getTime() - parseInt(p, 10) + g, p = (new Date).getTime(), d(t, "video");
                                        break;
                                    case "media_start":
                                        s = s || l(), m = m || 0, g = t.media_current_position > 1 ? 1e3 * t.media_current_position : 0, p = (new Date).getTime(), a = b(t.media_content_length), e = setInterval(_.bind(null, JSON.stringify(t)), 1e3 * a), t.media_session_id = s, d(t);
                                        break;
                                    case "media_pause":
                                        g = (new Date).getTime() - parseInt(p) + g, p = (new Date).getTime(), r = setTimeout(y.bind(null, JSON.stringify(t)), 1e3 * window.VISION.__appData.configs.mediaPauseTimeout), clearInterval(e), d(t);
                                        break;
                                    case "media_play":
                                        s = s || l(), p = (new Date).getTime(), a = b(t.media_content_length), e = setInterval(_.bind(null, JSON.stringify(t)), 1e3 * a), r && clearTimeout(r), t.media_session_id = s, d(t);
                                        break;
                                    case "media_stop":
                                        if (clearInterval(e), r && clearTimeout(r), s = null, null === p) return;
                                        g = (new Date).getTime() - parseInt(p) + g, d(t), m = 0, g = 0, p = null;
                                        break;
                                    case "media_forward":
                                    case "media_backward":
                                        g = (new Date).getTime() - parseInt(p, 10) + g, p = (new Date).getTime(), d(t, "video")
                                }
                            };
                        return {
                            init: function(e, t) {
                                if (!u) switch (e.vendor) {
                                    case "akamai":
                                        u = akamai.amp.AMP.create(e.id, e.config), u.vendor = e.vendor, u.metaData = e.metaData, u.name = t, a.prepareObjAkamaiMain(u, w);
                                        break;
                                    case "brightcove":
                                        u = e, u.name = t, o.prepareToPostBrightCove(u, w)
                                }
                            },
                            changeVideo: function(e) {
                                u.metaData = e
                            },
                            getVideo: function() {
                                return u.name
                            }
                        }
                    };
                    return function() {
                            String.prototype.format || (String.prototype.format = function() {
                                var e = arguments;
                                return this.replace(/{(\d+)}/g, function(t, n) {
                                    return void 0 !== e[n] ? e[n] : t
                                })
                            })
                        }(), c.coreLibs = {
                            _: e,
                            bean: t,
                            reqwest: n,
                            tld: r,
                            cookie: i,
                            url: s
                        }, c.queue = [], c.trackPageQueue = [], c.customMediaProps = {}, c.logError = function(e, t) {}, c.setConfigs = function(e) {
                            var t = JSON.parse(u("vision-configuration"));
                            Object.assign(c.__appData.configs, e, t), c.coreLibs.bean.fire(window.VISION, "configLoadedVISION", e)
                        }, c.setVariableMap = function(e) {
                            c.__appData.variableMap = e, c.coreLibs.bean.fire(window.VISION, "variableMapLoadedVISION", e)
                        }, c.addToVariableMap = function(e) {
                            Object.assign(c.__appData.variableMap, e), c.coreLibs.bean.fire(window.VISION, "variableMapLoadedVISION", e)
                        }, c.addListener = function(n, r, i) {
                            i && c.listeners[i] || (c.listeners[i] = !0, e.bind(r, c.singleton), t.on(c, n, r))
                        }, c.addListenerOnce = function(n, r, i) {
                            i && c.listeners[i] || (c.listeners[i] = !0, e.bind(r, c.singleton), t.one(c, n, r))
                        }, c.removeListener = function(e, n) {
                            t.off(c, e, n)
                        }, c.runQueue = function() {
                            for (; c.queue.length;) {
                                var t = c.queue.pop();
                                if (!e.isFunction(t)) return;
                                (t = e.bind(t, c.singleton))()
                            }
                        },
                        function() {
                            c.guestIdArray = null != sessionStorage.getItem("vision-user_guest_id") ? JSON.parse(sessionStorage.getItem("vision-user_guest_id")) : []
                        }(), c.addGuestId = function(e, t, n, r) {
                            try {
                                if (r ? !r instanceof String && (r = r.toString()) : r = "tertiary", "primary" == r.toLowerCase()) c.guestIdArray[0] = {
                                    id: e,
                                    s: t,
                                    l: n
                                };
                                else if ("secondary" == r.toLowerCase()) c.guestIdArray[1] = {
                                    id: e,
                                    s: t,
                                    l: n
                                };
                                else {
                                    var i = c.guestIdArray.some(function(t) {
                                        return t.id === e
                                    });
                                    i || c.guestIdArray.push({
                                        id: e,
                                        s: t,
                                        l: n
                                    })
                                }
                                c.__appData.configs.storageEnabled && sessionStorage.setItem("vision-user_guest_id", JSON.stringify(c.guestIdArray))
                            } catch (i) {
                                c.logError("Error adding guest information: {0}, {1}, {2}, {3} to array".format(e, t, n, r), i.stack)
                            }
                        },
                        function() {
                            c.userAffiliate = null != sessionStorage.getItem("vision-user_affiliate") ? sessionStorage.getItem("vision-user_affiliate") : ""
                        }(), c.addAffiliate = function(e) {
                            c.userAffiliate = e, c.__appData.configs.storageEnabled && sessionStorage.setItem("vision-user_affiliate", c.userAffiliate)
                        },
                        function() {
                            c.subscriptionIdArray = null != sessionStorage.getItem("vision-user_subscription_id") ? JSON.parse(sessionStorage.getItem("vision-user_subscription_id")) : []
                        }(), c.addSubscriptionId = function(e, t) {
                            try {
                                c.subscriptionIdArray.some(function(t) {
                                    return t.id === e
                                }) || c.subscriptionIdArray.push({
                                    id: e,
                                    s: t
                                }), c.__appData.configs.storageEnabled && sessionStorage.setItem("vision-user_subscription_id", JSON.stringify(c.subscriptionIdArray))
                            } catch (n) {
                                c.logError("Error adding subscription information: {0}, {1} to array".format(e, t), n.stack)
                            }
                        },
                        function() {
                            c.deviceAdvertiserId = null != sessionStorage.getItem("vision-device_advertiser_id") ? sessionStorage.getItem("vision-device_advertiser_id") : ""
                        }(), c.addAdvertiserId = function(e) {
                            c.deviceAdvertiserId = e, c.__appData.configs.storageEnabled && sessionStorage.setItem("vision-device_advertiser_id", c.deviceAdvertiserId)
                        }, c.clearStorage = function() {
                            try {
                                if (c.__appData.configs.storageEnabled)
                                    for (var e in c.__appData.variableMap)
                                        if (c.__appData.variableMap.hasOwnProperty(e)) {
                                            var t = c.__appData.variableMap[e];
                                            for (var n in t)
                                                if (t.hasOwnProperty(n)) {
                                                    var r = t[n];
                                                    Array.isArray(r) && r[2] && sessionStorage.removeItem(r[0])
                                                }
                                        }
                            } catch (e) {
                                c.logError("Error in removing VISION values from storage", e.stack)
                            }
                        },
                        function() {
                            c.removeGuestId = function(t) {
                                try {
                                    var n = e(t, c.guestIdArray, 2);
                                    return n && c.__appData.configs.storageEnabled && sessionStorage.setItem("vision-user_guest_id", JSON.stringify(c.guestIdArray)), n
                                } catch (e) {
                                    c.logError("Error in removing guest ID {0} from array".format(t), e.stack)
                                }
                            }
                        }(),
                        function() {
                            c.removeSubscriptionId = function(t) {
                                try {
                                    var n = e(t, c.subscriptionIdArray, 2);
                                    return n && c.__appData.configs.storageEnabled && sessionStorage.setItem("vision-user_subscription_id", JSON.stringify(c.subscriptionIdArray)), n
                                } catch (e) {
                                    c.logError("Error in removing subscription ID {0} from array".format(t), e.stack)
                                }
                            }
                        }(),
                        function() {
                            window.VISION.__appData.internalFunctions.getFromState = function(e) {
                                var t;
                                if (c.__appData.configs.storageEnabled && (t = sessionStorage.getItem("vision-" + e)), !t && c.__appData.configs.cookiesEnabled) {
                                    var n = i.get("visionState");
                                    if (n) try {
                                        var r = JSON.parse(unescape(n));
                                        r[e] && (t = r[e])
                                    } catch (e) {}
                                }
                                return t
                            }, window.VISION.__appData.internalFunctions.saveToState = function(e, t) {
                                if (c.__appData.configs.storageEnabled) sessionStorage.setItem("vision-" + e, Array.isArray(t) ? JSON.stringify(t) : t);
                                else if (c.__appData.configs.cookiesEnabled) {
                                    var n, r = i.get("visionState");
                                    if (r) try {
                                        n = JSON.parse(unescape(r))
                                    } catch (e) {} else n = {};
                                    n[e] = t, i.safeSet("visionState", JSON.stringify(n))
                                }
                            }
                        }(),
                        function() {
                            window.VISION.setVariableMap({
                                global: {
                                    user: {
                                        user_guest_id: ["u1", !0, !0],
                                        user_affiliate: ["u2", !0, !0],
                                        user_subscription_id: ["u99", !0, !0]
                                    },
                                    app: {
                                        app_logging_lib_version: ["a5", !1, !0],
                                        app_region: ["a6", !0, !1],
                                        app_country: ["a7", !0, !1],
                                        app_network: ["a8", !0, !1],
                                        app_zipcode: ["a10", !0, !1]
                                    },
                                    browser: {
                                        browser_height: ["br2", !1, !0],
                                        browser_width: ["br3", !1, !0],
                                        browser_cookies_flag: ["br4", !1, !0],
                                        browser_local_storage_flag: ["br5", !1, !0],
                                        browser_java_flag: ["br6", !1, !0],
                                        browser_javascript_version: ["br7", !1, !0],
                                        browser_plugins: ["br8", !1, !0],
                                        browser_flash_version: ["br9", !1, !0]
                                    },
                                    device: {
                                        device_height: ["d5", !1, !0],
                                        device_width: ["d6", !1, !0],
                                        device_color_depth: ["d7", !1, !0],
                                        device_resolution: ["d8", !1, !0],
                                        device_advertiser_id: ["d13", !1, !0]
                                    },
                                    visitor: {
                                        visitor_anonymous_id: ["v1", !1, !0],
                                        visitor_protected_id: ["v2", !1, !0]
                                    }
                                },
                                event: {
                                    event_properties: {
                                        event_name: "e2",
                                        event_instance_id: ["e3", !1, !0],
                                        event_timestamp: "e6",
                                        event_log_timestamp: ["e7", !1, !0],
                                        event_logging_source: ["e8", !1, !0],
                                        event_test: "e10",
                                        event_error_code: "e11",
                                        event_error_message: "e12",
                                        event_error_stack_trace: "e13"
                                    },
                                    session: {
                                        session_id: ["se1", !1, !0],
                                        session_language_original: ["se8", !1, !0]
                                    },
                                    state: {
                                        state_cmp: ["s1", !0],
                                        state_test: ["s2", !0],
                                        page_location: ["p1", !0, !0],
                                        page_url: ["p2", !0, !0],
                                        page_id: ["p3", !0, !0],
                                        page_id_source: ["p4", !0, !0],
                                        page_instance_id: ["p5", !0, !0],
                                        page_referrer_url: ["p6", !0, !0],
                                        page_type: ["p9", !0, !0],
                                        page_location_previous: ["p1_prev", !1, !0],
                                        game_level: ["ga4", !0, !0]
                                    }
                                }
                            })
                        }(), c
                }), define("controller/events/APIReadyVISION", ["bean", "models/API/VISION", "script", "underscore"], function(e, t, n, r) {
                    var i, a;
                    e.on(window.VISION, "configLoadedVISION", function() {
                        window.VISION.checkIfMainDependenciesLoaded()
                    }), e.on(window.VISION, "variableMapLoadedVISION", function() {
                        window.VISION.checkIfMainDependenciesLoaded()
                    }), e.on(window.VISION, "cookiesReadyVISION", function() {
                        a = !0, window.VISION.checkIfMainDependenciesLoaded()
                    }), e.on(window.VISION, "modulesLoadedVISION", function() {
                        i = !0, window.VISION.checkIfMainDependenciesLoaded()
                    }), window.VISION.checkIfMainDependenciesLoaded = function() {
                        if (!window.VISION.__appData.configs || !window.VISION.__appData.variableMap || !a || !i || window.VISION.hasLoaded) return !1;
                        var e = window.VISION.queue,
                            n = window.VISION.__appData;
                        window.VISION = t, window.VISION.queue = e, window.VISION.__appData = n, window.VISION.hasLoaded = !0, e && window.VISION.runQueue()
                    }
                }), define("controller/events/cookiesReadyVISION", ["bean", "underscore", "cookie", "tld", "controller/events/APIReadyVISION"], function(e, t, n, r) {
                    ! function() {
                        var i = r.getDomain(location.hostname);
                        if (n.get("visionVisitor")) {
                            var a;
                            try {
                                a = JSON.parse(unescape(n.get("visionVisitor")))
                            } catch (e) {
                                a = {}
                            }
                            if (t.isNumber(a.sessionCount)) {
                                a.sessionCount++;
                                var o = new Date((new Date).getTime() + 315569259747);
                                n.set("visionVisitor", JSON.stringify(a), {
                                    expires: o,
                                    path: "/",
                                    domain: i
                                })
                            }
                        }
                        e.fire(window.VISION, "cookiesReadyVISION")
                    }()
                }), define("models/data/utility", ["cookie", "underscore", "models/API/VISION", "tld"], function(e, t, n, r) {
                    return {
                        localSessionQueue: {},
                        localVisitorQueue: {},
                        getLocalValue: function(e, t) {
                            return this.getValueFromLocalCookieQueue(e, t) || this.getValueFromLocalCookie(e, t)
                        },
                        getValueFromLocalCookie: function(t, n) {
                            if (n) {
                                var r, i = e.get("visionLocalVisitor");
                                try {
                                    r = JSON.parse(unescape(i))
                                } catch (e) {
                                    r = {}
                                }
                                return r[t]
                            }
                            if (this.isLocalSessionExpired()) return "";
                            var a, o = e.get("visionLocalSession");
                            try {
                                a = JSON.parse(unescape(o))
                            } catch (e) {
                                a = {}
                            }
                            return a[t]
                        },
                        addKeyValueToLocalCookieQueue: function(e, t, n) {
                            n ? this.localVisitorQueue[e] = t : this.localSessionQueue[e] = t
                        },
                        getValueFromLocalCookieQueue: function(e, t) {
                            return t ? this.localVisitorQueue[e] : this.localSessionQueue[e]
                        },
                        _updateCookieObject: function(e, n) {
                            var r = this._getJSONCookieValue(e);
                            return t.each(n, function(e, t) {
                                r[t] = e
                            }), r
                        },
                        saveCookieQueue: function() {
                            var t = r.getDomain(location.hostname);
                            e.set("visionBrowserSession", (new Date).getTime(), {
                                path: "/",
                                domain: t
                            });
                            var n = 18e5;
                            n = new Date((new Date).getTime() + n);
                            var i = new Date((new Date).getTime() + 33927469800),
                                a = this._updateCookieObject("visionLocalSession", this.localSessionQueue),
                                o = this._updateCookieObject("visionLocalVisitor", this.localVisitorQueue);
                            e.set("visionLocalSession", JSON.stringify(a), {
                                expires: n,
                                path: "/",
                                domain: t
                            }), e.set("visionLocalVisitor", JSON.stringify(o), {
                                expires: i,
                                path: "/",
                                domain: t
                            }), this.localSessionQueue = {}, this.localVisitorQueue = {}
                        },
                        isLocalSessionExpired: function() {
                            var t, n = e.get("visionLocalSession");
                            try {
                                t = JSON.parse(unescape(n))
                            } catch (e) {
                                t = {}
                            }
                            var r = e.get("visionBrowserSession");
                            return !(t.session_id_local && r || (e.remove(["session_id_local"]), 0))
                        },
                        _getJSONCookieValue: function(t) {
                            var n, r = e.get(t);
                            try {
                                n = JSON.parse(r)
                            } catch (e) {}
                            return n || {}
                        }
                    }
                }), define("controller/events/updateCookies", ["models/API/VISION", "models/data/utility"], function(e, t) {
                    e.addListener("trackComplete", function() {
                        t.saveCookieQueue()
                    })
                }), define("models/variable/utility", ["underscore"], function(e) {
                    return {
                        getValue: function(t, n, r) {
                            var i, a = ["activityEvent", "adEvent", "articleEvent", "customEvent", "errorEvent", "funnelEvent", "gameEvent", "linkEvent", "mediaEvent", "pageEvent", "paymentEvent", "performanceEvent", "quizEvent", "registrationEvent", "searchEvent", "slideshowEvent", "socialEvent", "touchEvent"];
                            return e.each(a, function(e) {
                                i || t[e] && (t[e][n] || 0 === t[e][n]) && (i = t[e][n])
                            }), i || 0 === i ? i : void 0 !== r.producerData ? r.producerData[n] : ""
                        }
                    }
                }), define("models/variable/page/page_location", ["models/variable/utility"], function(e) {
                    return {
                        id: "page_location",
                        getParams: function() {
                            return {
                                utility: e
                            }
                        },
                        getValue: function(t, n) {
                            var r = n.__appData.internalFunctions.getFromState(this.id);
                            return e.getValue(t, this.id, n) || r || ""
                        }
                    }
                }), define("models/variable/page/page_location_previous", [], function() {
                    return {
                        id: "page_location_previous",
                        getValue: function(e, t) {
                            return t.__appData.internalFunctions.getFromState(this.id) || "na"
                        }
                    }
                }), define("controller/cookie/prevPageLocation", ["bean", "models/variable/page/page_location", "models/variable/page/page_location_previous", "models/data/utility", "models/API/VISION"], function(e, t, n, r, i) {
                    var a = {
                        updatePreviousPage: function() {
                            i.__appData.internalFunctions.saveToState(n.id, t.getValue({}, i))
                        }
                    };
                    return i.addListener("trackPageComplete", function() {
                        a.updatePreviousPage()
                    }, "prevPageLocationListener"), a
                }), define("models/variable/app/app_logging_lib_version", [], function() {
                    return {
                        id: "app_logging_lib_version",
                        getValue: function() {
                            return "3.7.11"
                        }
                    }
                }), define("models/variable/browser/browser_cookies_flag", ["cookie"], function(e) {
                    var t;
                    return {
                        id: "browser_cookies_flag",
                        getValue: function(n) {
                            return void 0 !== t ? t : (e.set({
                                visionTest: "test"
                            }), "test" === e.get("visionTest") ? (t = !0, e.remove("visionTest")) : t = !1, t)
                        }
                    }
                }), define("models/variable/browser/browser_flash_version", [], function() {
                    return {
                        id: "browser_flash_version",
                        getValue: function(e) {
                            var t = !(-1 == navigator.appVersion.indexOf("MSIE")),
                                n = !(-1 == navigator.appVersion.toLowerCase().indexOf("win")),
                                r = !(-1 == navigator.userAgent.indexOf("Opera")),
                                i = -1;
                            if (null != navigator.plugins && navigator.plugins.length > 0) {
                                if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                                    var a = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
                                        o = navigator.plugins["Shockwave Flash" + a].description,
                                        s = o.split(" "),
                                        u = s[2].split("."),
                                        c = u[0],
                                        l = u[1],
                                        d = s[3];
                                    "" == d && (d = s[4]), "d" == d[0] ? d = d.substring(1) : "r" == d[0] && (d = d.substring(1), d.indexOf("d") > 0 && (d = d.substring(0, d.indexOf("d")))), i = c + "." + l + "." + d
                                }
                            } else -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.6") ? i = 4 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.5") ? i = 3 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv") ? i = 2 : t && n && !r && (i = function() {
                                var e, t;
                                try {
                                    t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t.GetVariable("$version")
                                } catch (e) {}
                                if (!e) try {
                                    t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
                                } catch (e) {}
                                if (!e) try {
                                    t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = t.GetVariable("$version")
                                } catch (e) {}
                                if (!e) try {
                                    t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = "WIN 3,0,18,0"
                                } catch (e) {}
                                if (!e) try {
                                    t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = "WIN 2,0,0,11"
                                } catch (t) {
                                    e = -1
                                }
                                return e
                            }());
                            return "flash_version:" + i
                        }
                    }
                }), define("models/variable/browser/browser_height", [], function() {
                    return {
                        id: "browser_height",
                        getValue: function(e) {
                            return window.innerHeight || document.body.clientHeight
                        }
                    }
                }), define("models/variable/browser/browser_java_flag", [], function() {
                    return {
                        id: "browser_java_flag",
                        getValue: function(e) {
                            return navigator.javaEnabled && navigator.javaEnabled()
                        }
                    }
                }), define("models/variable/browser/browser_javascript_version", [], function() {
                    return {
                        id: "browser_javascript_version",
                        getValue: function(e) {
                            var t = [];
                            return !!Number.prototype.toFixed && t.push("1.5"), !(![].indexOf || ![].forEach) && t.push("1.6"), !! function() {
                                try {
                                    return [1, 3]
                                } catch (e) {
                                    return !1
                                }
                            }() && t.push("1.7"), !!([].reduce && [].reduceRight && JSON) && t.push("1.8"), !!"".trimLeft && t.push("1.8.1"), t[t.length - 1]
                        }
                    }
                }), define("models/variable/browser/browser_local_storage_flag", [], function() {
                    var e;
                    return {
                        id: "browser_local_storage_flag",
                        getValue: function(t) {
                            if (void 0 !== e) return e;
                            try {
                                sessionStorage.setItem("test", "test"), sessionStorage.removeItem("test"), e = !0
                            } catch (t) {
                                e = !1
                            }
                            return e
                        }
                    }
                }), define("models/variable/browser/browser_plugins", ["underscore"], function(e) {
                    return {
                        id: "browser_plugins",
                        getValue: function(t, n) {
                            var r = [];
                            return e.each(navigator.plugins, function(e, t) {
                                r.push(e.name)
                            }), r.join(";")
                        }
                    }
                }), define("models/variable/browser/browser_width", [], function() {
                    return {
                        id: "browser_width",
                        getValue: function(e) {
                            return window.innerWidth || document.body.clientWidth
                        }
                    }
                }), define("models/variable/device/device_advertiser_id", [], function() {
                    return {
                        id: "device_advertiser_id",
                        getValue: function(e, t) {
                            return t.deviceAdvertiserId
                        }
                    }
                }), define("models/variable/device/device_color_depth", [], function() {
                    return {
                        id: "device_color_depth",
                        getValue: function(e) {
                            return screen.colorDepth
                        }
                    }
                }), define("models/variable/device/device_height", [], function() {
                    return {
                        id: "device_height",
                        getValue: function(e) {
                            return screen.height
                        }
                    }
                }), define("models/variable/device/device_resolution", [], function() {
                    return {
                        id: "device_resolution",
                        getValue: function(e) {
                            return screen.width + "x" + screen.height
                        }
                    }
                }), define("models/variable/device/device_width", [], function() {
                    return {
                        id: "device_width",
                        getValue: function(e) {
                            return screen.width
                        }
                    }
                }), define("models/variable/event/event_instance_id", [], function() {
                    return {
                        id: "event_instance_id",
                        getValue: function() {
                            return (new Date).getTime() + "-" + Math.floor(1e13 * Math.random())
                        }
                    }
                }), define("models/variable/event/event_log_timestamp", [], function() {
                    return {
                        id: "event_log_timestamp",
                        getValue: function(e) {
                            return (new Date).getTime()
                        }
                    }
                }), define("models/variable/event/event_logging_source", [], function() {
                    return {
                        id: "event_logging_source",
                        getValue: function(e) {
                            return "web"
                        }
                    }
                }), define("models/variable/dependencies/session_id_local", ["models/data/utility", "models/variable/browser/browser_cookies_flag"], function(e, t) {
                    "use strict";
                    return {
                        id: "session_id_local",
                        getValue: function(n, r) {
                            if ("false" == t.getValue({}, r)) return "no_cookie";
                            var i = e.getLocalValue(this.id);
                            return i || (i = (new Date).getTime() + "-" + Math.floor(1e13 * Math.random()), e.addKeyValueToLocalCookieQueue(this.id, i)), i || ""
                        }
                    }
                }), define("models/variable/session/session_id", ["models/variable/dependencies/session_id_local"], function(e) {
                    "use strict";
                    return {
                        id: "session_id",
                        getValue: function(t, n) {
                            return t = t || {}, [e.getValue(t, n)]
                        }
                    }
                }), define("models/variable/session/session_language_original", [], function() {
                    return {
                        id: "session_language_original",
                        getValue: function(e) {
                            return navigator.language || navigator.browserLanguage
                        }
                    }
                }), define("url", [], function() {
                    function e(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    return function(t, n) {
                        var r = n || window.location.toString();
                        if (!t) return r;
                        t = t.toString(), "//" === r.substring(0, 2) ? r = "http:" + r : 1 === r.split("://").length && (r = "http://" + r), n = r.split("/");
                        var i = {
                                auth: ""
                            },
                            a = n[2].split("@");
                        1 === a.length ? a = a[0].split(":") : (i.auth = a[0], a = a[1].split(":")), i.protocol = n[0], i.hostname = a[0], i.port = a[1] || "80", i.pathname = (n.length > 3 ? "/" : "") + n.slice(3, n.length).join("/").split("?")[0].split("#")[0];
                        var o = i.pathname;
                        "/" === o.charAt(o.length - 1) && (o = o.substring(0, o.length - 1));
                        var s = i.hostname,
                            u = s.split("."),
                            c = o.split("/");
                        if ("hostname" === t) return s;
                        if ("domain" === t) return u.slice(-2).join(".");
                        if ("sub" === t) return u.slice(0, u.length - 2).join(".");
                        if ("port" === t) return i.port || "80";
                        if ("protocol" === t) return i.protocol.split(":")[0];
                        if ("auth" === t) return i.auth;
                        if ("user" === t) return i.auth.split(":")[0];
                        if ("pass" === t) return i.auth.split(":")[1] || "";
                        if ("path" === t) return i.pathname;
                        if ("." === t.charAt(0)) {
                            if (t = t.substring(1), e(t)) return t = parseInt(t, 10), u[t < 0 ? u.length + t : t - 1] || ""
                        } else {
                            if (e(t)) return t = parseInt(t, 10), c[t < 0 ? c.length + t : t] || "";
                            if ("file" === t) return c.slice(-1)[0];
                            if ("filename" === t) return c.slice(-1)[0].split(".")[0];
                            if ("fileext" === t) return c.slice(-1)[0].split(".")[1] || "";
                            if ("?" === t.charAt(0) || "#" === t.charAt(0)) {
                                var l = r,
                                    d = null;
                                if ("?" === t.charAt(0) ? l = (l.split("?")[1] || "").split("#")[0] : "#" === t.charAt(0) && (l = l.split("#")[1] || ""), !t.charAt(1)) return l;
                                t = t.substring(1), l = l.split("&");
                                for (var p = 0, f = l.length; p < f; p++)
                                    if (d = l[p].split("="), d[0] === t) return d[1];
                                return null
                            }
                        }
                        return ""
                    }
                }), define("models/variable/state/cmp", ["url"], function(e) {
                    return {
                        id: "state_cmp",
                        getValue: function(t) {
                            var n = e("?cmp", document.URL.toLowerCase());
                            return n && (n = unescape(n)), n || ""
                        }
                    }
                }), define("models/variable/page/page_instance_id", [], function() {
                    return {
                        id: "page_instance_id",
                        getValue: function(e, t) {
                            return (new t).get(this.id)
                        }
                    }
                }), define("models/variable/page/page_referrer_url", [], function() {
                    return {
                        id: "page_referrer_url",
                        getValue: function(e) {
                            return document.referrer || "na"
                        }
                    }
                }), define("models/variable/user/user_guest_id", ["cookie"], function(e) {
                    return {
                        id: "user_guest_id",
                        getValue: function(e, t) {
                            return t.guestIdArray
                        }
                    }
                }), define("models/variable/user/user_affiliate", [], function() {
                    return {
                        id: "user_affiliate",
                        getValue: function(e, t) {
                            return t.userAffiliate
                        }
                    }
                }), define("models/variable/user/user_subscription_id", ["cookie"], function(e) {
                    return {
                        id: "user_subscription_id",
                        getValue: function(e, t) {
                            return t.subscriptionIdArray
                        }
                    }
                }), define("models/variable/dependencies/visitor_id_local", ["models/data/utility", "models/variable/browser/browser_cookies_flag"], function(e, t) {
                    "use strict";
                    return {
                        id: "visitor_id_local",
                        getValue: function(n, r) {
                            if ("false" == t.getValue({}, r)) return "no_cookie";
                            var i = e.getLocalValue(this.id, !0);
                            return i || (i = (new Date).getTime() + "-" + Math.floor(1e13 * Math.random()), e.addKeyValueToLocalCookieQueue(this.id, i, !0)), i || ""
                        }
                    }
                }), define("models/variable/visitor/visitor_anonymous_id", ["models/variable/dependencies/visitor_id_local"], function(e) {
                    "use strict";
                    return {
                        id: "visitor_anonymous_id",
                        getValue: function(t, n) {
                            t = t || {};
                            var r = [],
                                i = e.getValue(t, n),
                                a = "no_cookie" == i ? "vision-error" : "vision-l";
                            return r.push({
                                id: i,
                                s: a
                            }), r
                        }
                    }
                }), define("models/variable/allVariables", ["models/variable/app/app_logging_lib_version", "models/variable/browser/browser_cookies_flag", "models/variable/browser/browser_flash_version", "models/variable/browser/browser_height", "models/variable/browser/browser_java_flag", "models/variable/browser/browser_javascript_version", "models/variable/browser/browser_local_storage_flag", "models/variable/browser/browser_plugins", "models/variable/browser/browser_width", "models/variable/device/device_advertiser_id", "models/variable/device/device_color_depth", "models/variable/device/device_height", "models/variable/device/device_resolution", "models/variable/device/device_width", "models/variable/event/event_instance_id", "models/variable/event/event_log_timestamp", "models/variable/event/event_logging_source", "models/variable/session/session_id", "models/variable/dependencies/session_id_local", "models/variable/session/session_language_original", "models/variable/state/cmp", "models/variable/page/page_instance_id", "models/variable/page/page_location", "models/variable/page/page_location_previous", "models/variable/page/page_referrer_url", "models/variable/user/user_guest_id", "models/variable/user/user_affiliate", "models/variable/user/user_subscription_id", "models/variable/visitor/visitor_anonymous_id", "models/variable/dependencies/visitor_id_local"], function() {
                    for (var e = {}, t = arguments.length, n = 0; n < t; n++) e[arguments[n].id] = arguments[n];
                    return window.VISION.__appData.variableLogic = e, e
                }), define("controller/vendor/utility", ["underscore", "models/variable/allVariables"], function(e, t) {
                    return {
                        trackOrder: ["trackType", "sessionId", "visitorId", "vendorLst", "error", "swid", "pageViewId", "pageId", "fullPageName", "arPageName", "plgId", "ua", "res", "cod", "eventLst", "categoryCode", "siteCode", "breadcrumbs", "buId", "propertyId", "seriesId", "characterId", "buCode", "propertyCode", "seriesCode", "characterCd", "contentType", "templateType", "ASSETID", "KSESSIONID", "KSESSIONSEQ", "KDPEVNT", "KDPDAT_VALUE", "KDPDAT_PLAYHEAD", "ASSETNAME", "AUTO", "KDPPROTO", "PLAYLISTID", "assetId", "gameSessionId", "gameEvent", "gameEventValue", "appSessionId", "appEvent", "appEventValue", "embFields", "embValues", "assetName", "adPageName", "adSizeList", "internalPromotion", "trackingCode", "url", "urlDomain", "urlFullDomain", "urlFullDomain1", "referrer", "linkName", "linkPosition", "linkUrl", "linkModule", "leadType", "engagementType", "engagementMeta", "loginStatus", "regFlowType", "internalSearchPhrase", "numSearchResults", "searchAutocomplete", "searchRefinement", "searchTypeCode", "prevPageName", "assetTypeCode", "visitorFirstPage", "visitorFirstRefUrl", "visitorFirstUrl", "visitorSesSeq", "sessionFirstPage", "sessionFirstRefUrl", "sessionFirstUrl", "sessionHitSeq"],
                        getVariableValues: function(n, r, i, a, o, s) {
                            r = r || {};
                            var u = [];
                            return e.each(n, function(n, c) {
                                var l;
                                if (t[c]) {
                                    var d = t[c].getValue({
                                        vendor: a,
                                        trackType: i,
                                        videoEvent: r,
                                        gameEvent: r,
                                        linkEvent: r,
                                        eventEvent: r,
                                        appEvent: r,
                                        printEvent: r,
                                        pageEvent: r,
                                        unloadEvent: r
                                    }, s);
                                    t[c].getEventValue && (l = t[c].getEventValue({
                                        vendor: a,
                                        trackType: i,
                                        videoEvent: r,
                                        gameEvent: r,
                                        linkEvent: r,
                                        eventEvent: r,
                                        appEvent: r,
                                        printEvent: r,
                                        pageEvent: r,
                                        unloadEvent: r
                                    }, s)), "" !== d && null != d && void 0 !== d && e.each(n, function(e) {
                                        u.push({
                                            id: c,
                                            mapping: e,
                                            value: d,
                                            eventValue: l
                                        })
                                    })
                                } else "" !== o[c] && null != o[c] && void 0 !== o[c] && e.each(n, function(e) {
                                    u.push({
                                        id: c,
                                        mapping: e,
                                        value: o[c],
                                        eventValue: l
                                    })
                                })
                            }), u
                        },
                        getParams: function(t, n, r, i) {
                            var a = new i;
                            r = r || {};
                            var o, s, u, c;
                            "emea" == a.region ? i.__appData.variableMap[t][n] ? (u = i.__appData.variableMap[t][n].EMEAmappings, o = i.__appData.variableMap[t][n].mappings, s = i.__appData.variableMap[t][n].events, c = i.__appData.variableMap[t][n].EMEAevents) : (o = {}, u = {}, s = {}, c = {}) : i.__appData.variableMap[t][n] ? (o = i.__appData.variableMap[t][n].mappings, s = i.__appData.variableMap[t][n].events) : (o = {}, s = {});
                            var l, d, p = a.getProducerInfo(r);
                            return "emea" == a.region && "omni" == n ? (l = this.getVariableValues(u, r, t, n, p, i), d = this.getVariableValues(c, r, t, n, p, i)) : (l = this.getVariableValues(o, r, t, n, p, i), d = this.getVariableValues(s, r, t, n, p, i)), l = e.uniq(l, !1, function(e, t, n) {
                                return e.mapping
                            }), d = e.uniq(d, !1, function(e, t, n) {
                                return e.mapping
                            }), {
                                mappings: l,
                                eventMapping: d
                            }
                        }
                    }
                }), define("models/data/Config", ["bean", "controller/events/APIReadyVISION"], function(e) {
                    e.fire(window, "configLoadedVISION", {
                        disableAutoLinkTracking: !1,
                        trackedVendors: ["VISION"]
                    })
                }), require.config({
                    paths: {
                        underscore: "vendor/underscore-amd/underscore",
                        requireLib: "vendor/requirejs/require",
                        reqwest: "vendor/reqwest/reqwest",
                        script: "vendor/script/script",
                        cookie: "vendor/cookie/cookie",
                        url: "vendor/url/url",
                        tld: "vendor/tld/tld",
                        bean: "vendor/bean/bean",
                        snappy: "vendor/snappy/snappyjs"
                    }
                }), require(["bean", "underscore", "script", "reqwest", "snappy", "controller/events/APIReadyVISION", "controller/events/cookiesReadyVISION", "controller/events/updateCookies", "controller/cookie/prevPageLocation", "controller/vendor/utility", "models/data/Config"], function(e, t, n, r, i) {
                    t.noConflict(),
                        function() {
                            window.VISION && window.VISION.setVariableMap && window.VISION.setConfigs && window.VISION.addToVariableMap && (window.VISION.addToVariableMap({
                                page: {
                                    page_location: ["p1", !0],
                                    page_url: ["p2", !0],
                                    page_id: ["p3", !0],
                                    page_id_source: ["p4", !0],
                                    page_referrer_url: ["p6", !0],
                                    page_z_axis: "p7",
                                    page_version: "p8",
                                    page_type: "p9",
                                    page_time_spent: "p10",
                                    page_user_mode: "p11",
                                    page_auth_flag: "p12"
                                },
                                link: {
                                    link_module_name: "l1",
                                    link_module_position: "l2",
                                    link_module_type: "l3",
                                    link_name: "l4",
                                    link_position: "l5",
                                    link_type: "l6",
                                    link_destination_location: "l7",
                                    link_destination_url: "l8",
                                    link_element_version: "l9",
                                    link_element_uri: "l10"
                                },
                                media: {
                                    media_id: "m1",
                                    media_id_source: "m2",
                                    media_name: "m3",
                                    media_indicated_bitrate: "m4",
                                    media_observed_bitrate: "m5",
                                    media_content_length: "m6",
                                    media_current_position: "m7",
                                    media_current_chapter: "m8",
                                    media_player_name: "m9",
                                    media_player_type: "m10",
                                    media_player_version: "m11",
                                    media_session_id: "m12",
                                    media_session_sequence_number: "m13",
                                    media_availability: "m14",
                                    media_previous_subtitle_language: "m15",
                                    media_subtitle_language: "m16",
                                    media_previous_audio_language: "m17",
                                    media_audio_language: "m18",
                                    media_auto: "m19",
                                    media_type: "m20",
                                    media_play_type: "m21",
                                    media_current_event_value: "m22",
                                    media_next_event_value: "m23",
                                    media_playlist_id: "m24",
                                    media_playback_mode: "m25",
                                    media_ad_id: "m26",
                                    media_ad_id_source: "m27",
                                    media_time_spent: "m28",
                                    media_ad_time_spent: "m29",
                                    media_live: "m30"
                                },
                                article: {
                                    article_id: "ar1",
                                    article_id_source: "ar2",
                                    article_name: "ar3"
                                },
                                social: {
                                    social_content_id: "so1",
                                    social_content_id_source: "so2",
                                    social_content_name: "so3",
                                    social_content_type: "so4",
                                    social_network: "so5",
                                    social_owner: "so6",
                                    social_target: "so7"
                                },
                                funnel: {
                                    funnel_type: "fn1",
                                    funnel_name: "fn2",
                                    funnel_milestone: "fn3"
                                },
                                search: {
                                    search_module: "sr1",
                                    search_type: "sr2",
                                    search_keyword_executed: "sr3",
                                    search_keyword_typed: "sr4",
                                    search_refinement: "sr5",
                                    search_results_count: "sr6"
                                },
                                pzncon: {
                                    pzncon_event: "pc1",
                                    pzncon_personalized: "pc2",
                                    pzncon_curated: "pc3",
                                    pzncon_reason: "pc4",
                                    pzncon_rule: "pc5",
                                    pzncon_edition: "pc6",
                                    pzncon_slot_position: "pc7",
                                    pzncon_presentation_type: "pc8",
                                    pzncon_content_id: "pc9",
                                    pzncon_content_id_type: "pc10",
                                    pzncon_nav_method: "pc11",
                                    pzncon_clubhouse: "pc12",
                                    pzncon_feed_version: "pc13",
                                    pzncon_content_score: "pc14",
                                    pzncon_entitled: "pc15"
                                },
                                pznfav: {
                                    pznfav_event: "pf1",
                                    pznfav_entity_id: "pf2",
                                    pznfav_entity_type: "pf3"
                                },
                                registration: {
                                    registration_guest_id: "r1",
                                    registration_guest_id_domain: "r2",
                                    registration_flow: "r3",
                                    registration_step: "r4"
                                },
                                payment: {
                                    payment_id: "py1",
                                    payment_category: "py2",
                                    payment_balance: "py3",
                                    payment_type: "py4",
                                    payment_sub_type: "py5",
                                    payment_currency: "py6",
                                    payment_country: "py7",
                                    payment_amount: "py8",
                                    payment_partner: "py9",
                                    payment_item: "py10",
                                    payment_item_count: "py11"
                                },
                                ad: {
                                    ad_id: "ad1",
                                    ad_creative: "ad2",
                                    ad_type: "ad3",
                                    ad_placement: "ad4",
                                    ad_offer: "ad5",
                                    ad_orientation: "ad6",
                                    ad_destination_url: "ad7",
                                    ad_version: "ad8",
                                    ad_parent_type: "ad9",
                                    ad_parent_id: "ad10",
                                    ad_pod_number: "ad11",
                                    ad_pod_size: "ad12"
                                },
                                activity: {
                                    activity_id: "ac1",
                                    activity_id_source: "ac2",
                                    activity_name: "ac3"
                                },
                                quiz: {
                                    quiz_id: "q1",
                                    quiz_id_source: "q2",
                                    quiz_name: "q3",
                                    quiz_question_number: "q4",
                                    quiz_question_selected_answer: "q5",
                                    quiz_result: "q6"
                                },
                                slideshow: {
                                    slideshow_id: "ss1",
                                    slideshow_id_source: "ss2",
                                    slideshow_name: "ss3",
                                    slideshow_slide_name: "ss4",
                                    slideshow_slide_number: "ss5"
                                },
                                game: {
                                    game_id: "ga1",
                                    game_id_source: "ga2",
                                    game_name: "ga3",
                                    game_level: "ga4",
                                    game_tier1: "ga5",
                                    game_tier2: "ga6",
                                    game_tier3: "ga7",
                                    game_tier4: "ga8",
                                    game_tier5: "ga9",
                                    game_tier6: "ga10",
                                    game_session_id: "ga11"
                                },
                                performance: {
                                    performance_metric: "peM1",
                                    performance_value: "peM2"
                                },
                                api: {
                                    api_url: "ap1",
                                    api_method: "ap2",
                                    api_response_time: "ap3"
                                },
                                prompt: {
                                    prompt_view: "pr1",
                                    prompt_input: "pr2"
                                },
                                login: {},
                                system: {}
                            }), window.JSON || document.write('<script src="http://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"></script>'), Object.assign(window.VISION.__appData.configs, {
                                storageEnabled: VISION.__appData.variableLogic.browser_local_storage_flag.getValue(),
                                cookiesEnabled: VISION.__appData.variableLogic.browser_cookies_flag.getValue()
                            }))
                        }(),
                        function() {
                            function n() {
                                var e = localStorage.getItem("vision-config-timestamp");
                                if (e)
                                    if (Date.now() - e >= 6e5) p();
                                    else {
                                        var t = JSON.parse(localStorage.getItem("vision-configuration"));
                                        Object.assign(window.VISION.__appData.configs, t)
                                    }
                                else p();
                                setInterval(p, 1e3 * window.VISION.__appData.configs.fetchAtConfigCount), m = setInterval(f, 1e3 * window.VISION.__appData.configs.flushIntervalInSeconds)
                            }

                            function i(e) {
                                for (var n = [], r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    try {
                                        var a = l();
                                        for (var o in VISION.__appData.variableMap.event) t.extend(a[o], s(VISION.__appData.variableMap.event[o], i));
                                        var u = {};
                                        for (var o in VISION.__appData.variableMap) "global" != o && "event" != o && t.extend(u, s(VISION.__appData.variableMap[o], i));
                                        var c = ["p1", "p2", "p3", "p4", "p5", "p6", "p9", "ga4"];
                                        for (var o in u) c.indexOf(o) > -1 && (a.state[o] = u[o], delete u[o]);
                                        a.event_tracktype_properties = u, Object.keys(i).length > 0 && (a.unmapped = i), n.push(a)
                                    } catch (e) {
                                        VISION.logError("Error caught in building event", e.stack)
                                    }
                                }
                                return n
                            }

                            function a(e) {
                                var n = i(e),
                                    r = c();
                                for (var a in VISION.__appData.variableMap.global) t.extend(r[a], s(VISION.__appData.variableMap.global[a]));
                                r.events = n, g(r, "media")
                            }

                            function o(e) {
                                var t = i(e),
                                    n = JSON.parse(localStorage.getItem("vision-events")) || [],
                                    r = n.concat(t);
                                localStorage.setItem("vision-events", JSON.stringify(r)), r.length >= window.VISION.__appData.configs.flushAtEventCount && f()
                            }

                            function s(e, t) {
                                var n, r, i = {};
                                for (var a in e) try {
                                    n = r = !1;
                                    var o = e[a];
                                    Array.isArray(o) && (n = o[1] || !1, r = o[2] || !1, o = o[0]), u(i, t, o, a, n, r)
                                } catch (e) {
                                    VISION.trackError(e)
                                }
                                return i
                            }

                            function u(e, t, n, r, i, a) {
                                var o;
                                try {
                                    a || (o = "media_time_spent" === r || "media_ad_time_spent" === r || "media_current_position" === r ? t[r] : t[r] || VISION.singleton.get(r), delete t[r]), void 0 !== o && void 0 !== o && "" !== o || (VISION.__appData.variableLogic[r] && VISION.__appData.variableLogic[r].getValue ? o = VISION.__appData.variableLogic[r].getValue(t, VISION) : i && VISION.__appData.internalFunctions.getFromState(r))
                                } catch (e) {
                                    VISION.logError("Error caught in fetching property {0} value".format(r), e.stack)
                                }
                                try {
                                    void 0 !== o && void 0 !== o && "" !== o && (e[n] = o, i && VISION.__appData.internalFunctions.saveToState(r, o))
                                } catch (e) {
                                    VISION.logError("Error caught in retrieving property {0} value".format(r), e.stack)
                                }
                            }

                            function c() {
                                return {
                                    user: {},
                                    app: {
                                        a1: window.VISION.__appData.configs.app_bundle_id,
                                        a2: window.VISION.__appData.configs.app_name,
                                        a3: window.VISION.__appData.configs.app_platform,
                                        a4: window.VISION.__appData.configs.app_version,
                                        a6: window.VISION.__appData.configs.app_region,
                                        a7: window.VISION.__appData.configs.app_country,
                                        a8: window.VISION.__appData.configs.app_network,
                                        a10: window.VISION.__appData.configs.app_zipcode
                                    },
                                    browser: {},
                                    device: {},
                                    visitor: {},
                                    events: []
                                }
                            }

                            function l() {
                                return {
                                    event_properties: {},
                                    session: {},
                                    state: {},
                                    event_tracktype_properties: {}
                                }
                            }

                            function d(e) {
                                for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
                                return t
                            }

                            function p(e) {
                                if (!window.VISION.__appData.configs.url) return void setTimeout(function() {
                                    p()
                                }, 1e4);
                                try {
                                    r({
                                        url: window.VISION.__appData.configs.url + "config/" + window.VISION.__appData.configs.app_name,
                                        withCredentials: !0,
                                        headers: {
                                            Authorization: window.VISION.__appData.configs.auth,
                                            Suite: window.VISION.__appData.configs.app_name
                                        },
                                        method: "get",
                                        contentType: "application/json",
                                        crossOrigin: !0,
                                        success: function(e) {
                                            localStorage.setItem("vision-config-timestamp", Date.now()), localStorage.setItem("vision-configuration", JSON.stringify(e.config)), Object.assign(window.VISION.__appData.configs, e.config), e.config.flushIntervalInSeconds && e.config.flushIntervalInSeconds !== window.VISION.__appData.configs.flushIntervalInSeconds && (clearInterval(m), m = setInterval(f, 1e3 * e.config.flushIntervalInSeconds)), e.config.collection || (clearInterval(m), localStorage.removeItem("vision-events")), VISION.debug(JSON.stringify(e))
                                        },
                                        error: function(t) {
                                            /^(4|5)\d{2}$/gm.test(t.status) && !e && p(!0), VISION.debug(JSON.stringify(t))
                                        }
                                    })
                                } catch (e) {
                                    VISION.logError("Error caught in fetching configuration", e.stack)
                                }
                            }

                            function f() {
                                var e = window.VISION.__appData.configs.flushAtEventCount,
                                    n = JSON.parse(localStorage.getItem("vision-events")) || [];
                                if (n.length > 0) {
                                    var r = c();
                                    for (var i in VISION.__appData.variableMap.global) t.extend(r[i], s(VISION.__appData.variableMap.global[i]));
                                    for (var a = 0; a < n.length; a += e) r.events = n.slice(a, e + a), g(r, "event");
                                    localStorage.removeItem("vision-events")
                                }
                            }

                            function g(t, n, i) {
                                if (window.VISION.__appData.configs.url) {
                                    e.fire(window.VISION, "trackComplete");
                                    var a, o = {
                                        Authorization: window.VISION.__appData.configs.auth,
                                        Suite: window.VISION.__appData.configs.app_name,
                                        "Event-Count": t.events.length
                                    };
                                    "media" === n && (o["Media-Session-Id"] = t.events[0].event_tracktype_properties.m12, o["Event-Type"] = t.events[0].event_properties.e2);
                                    var s = {
                                        url: window.VISION.__appData.configs.url + n,
                                        withCredentials: !0,
                                        method: "post",
                                        contentType: "application/json",
                                        crossOrigin: !0
                                    };
                                    if (window.VISION.__appData.configs.debugMode || "snappy" !== window.VISION.__appData.configs.compression) a = JSON.stringify(t);
                                    else {
                                        var u = d(JSON.stringify(t)),
                                            c = SnappyJS.compress(u);
                                        a = new Blob([c], {
                                            type: "text/plain"
                                        }), o["Content-Encoding"] = "snappy", s.processData = !1
                                    }
                                    s.data = a, s.headers = o;
                                    try {
                                        r(s).fail(function(e) {
                                            /^(4|5)\d{2}$/gm.test(e.status) && !i && g(t, n, !0)
                                        }), VISION.debug(JSON.stringify(t))
                                    } catch (e) {
                                        VISION.logError("Error caught in sending event", e.stack)
                                    }
                                }
                            }
                            var m, v = JSON.parse(localStorage.getItem("vision-configuration"));
                            v && Object.assign(window.VISION.__appData.configs, v), "loading" !== document.readyState ? n() : e.add(document, "DOMContentLoaded", n), window.VISION.addListener("beforeTrackPage", function() {
                                VISION.singleton.set({
                                    page_instance_id: (new Date).getTime() + "-" + Math.floor(1e13 * Math.random())
                                })
                            }, "pageViewId"), window.VISION.addListener("track", function() {
                                try {
                                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    o(t || [])
                                } catch (e) {
                                    VISION.logError("Error in processing event for sending", e.stack)
                                }
                            }, "track/in-house"), window.VISION.addListener("mediaTrack", function() {
                                try {
                                    a([arguments[0]])
                                } catch (e) {
                                    VISION.logError("Error in processing event for sending", e.stack)
                                }
                            }, "mediaTrack/in-house"), window.VISION.addListener("pageUnloadTrack", function() {
                                try {
                                    o([arguments[0]])
                                } catch (e) {
                                    VISION.logError("Error in processing event for sending", e.stack)
                                }
                            }, "pageUnloadTrack/in-house")
                        }(), e.fire(window.VISION, "modulesLoadedVISION")
                }), define("main", function() {})
        }
    }(),
    function($, window, document) {
        function hasOwnProperty(obj, prop) {
            var proto = obj.__proto__ || obj.constructor.prototype;
            return prop in obj && (!(prop in proto) || proto[prop] !== obj[prop])
        }

        function isEmpty(arg) {
            var bool = !0;
            if (arg) {
                var key, isObj = "object" == typeof arg && !(arg instanceof Array);
                if (isObj) {
                    for (key in arg)
                        if (hasOwnProperty(arg, key)) {
                            bool = !1;
                            break
                        }
                } else bool = arg && 0 === arg.length
            }
            return bool
        }
        window.espn = window.espn || {}, Object.prototype.hasOwnProperty && (hasOwnProperty = function(obj, prop) {
            return obj.hasOwnProperty(prop)
        });
        var _omniMap = {
                contentType: "prop4",
                pageName: "pageName",
                pageType: "pageType",
                linkGroup: "linkGroup:prop9:eVar74",
                gameInfo: "prop14:eVar14",
                storyInfo: "prop15:eVar15",
                sportsInfo: "prop32:eVar32",
                assetInfo: "prop3:eVar2",
                abTest: "prop19:eVar24",
                source: "prop13",
                countryRegion: "prop16:eVar12",
                events: "events",
                lang: "prop17:eVar9",
                columnist: "prop23:eVar10",
                sport: "prop25",
                convrSport: "eVar19",
                league: "prop26:eVar21",
                loginStatus: "prop29",
                insiderStatus: "prop11",
                birthAge: "prop21",
                gender: "prop22",
                userKey: "eVar7",
                premium: "prop30",
                state: "state",
                zip: "zip",
                srchKwd: "prop7",
                srchNumResults: "prop8:eVar41",
                srchTerm: "eVar4",
                srchType: "eVar5",
                srchPageNum: "eVar41",
                srchNumDims: "eVar42",
                srchSortKey: "eVar43",
                products: "products",
                purchaseId: "purchaseID",
                transactionId: "transactionID",
                regType: "eVar23",
                personalize: "eVar6",
                campaign: "campaign",
                convoLocal: "prop20",
                convoType: "prop33",
                convoSport: "prop34",
                espn3ContentType: "eVar11",
                espn3Affiliate: "prop42:eVar17",
                espn3AffiliateId: "prop43:eVar32",
                engagementTypeId: "eVar8",
                espnGamecast: "prop44",
                orientation: "prop38",
                userAgent: "prop37:eVar37",
                deviceProp: "eVar28",
                deviceInfo: "eVar38",
                trackType: "exec",
                socialShare: "prop72:eVar72",
                abTestLabel: "eVar73",
                fantasyPersonalize: "eVar70",
                subscription: "eVar68",
                linkName: "linkName",
                navMethod: "eVar44",
                linkType: "linkType",
                convPageName: "eVar13",
                watchespn: "prop45",
                couponCode: "eVar51",
                timeParting: "eVar1",
                appReferral: "eVar52",
                gameState: "eVar69",
                trackingName: "eVar20",
                oneFeedContentTier: "eVar29",
                buyLocation: "eVar103"
            },
            _ignoreMap = "account,site,section,sections,storyName,storyId",
            _qparams = {},
            _appMap = {
                fc: ["wdgwespmafcapps", !1, "ma:espn:espnfc"],
                sc: ["wdgespcom", !0, "ma:espn:scorecenter"],
                cbb: ["wdgwespmabbapps", !1, "ma:espn:bracketbound"],
                cfb: ["wdgwespmacollege", !1, "ma:espn:collegefootball"],
                fba: ["wdgwespmafbaapps", !1, "ma:espn:fantasybasketball"],
                ffl: ["wdgwespmafflapps", !1, "ma:espn:ffl"],
                fhl: ["wdgwespmafhlapps", !1, "ma:espn:fantasyhockey"],
                flb: ["wdgwespmaflbapps", !1, "ma:espn:fantasybaseball"],
                ocho: ["wdgespappdesktop", !1, "espn:ocho"],
                test: ["wdgesptest", !1, "ma:espn:test"],
                scfeedapp: ["wdgwespmascfeed", !1, "ma:espn:scfeed"]
            },
            _nielsenConfig = {
                key: "default",
                "default": {
                    server: "secure-us",
                    cid: "us-903969h"
                },
                "espnau-en": {
                    server: "secure-gl",
                    cid: "au-espn"
                }
            },
            isFromSCApp = function() {
                return "sc" === _qparams.appsrc
            },
            updateMobileRS = function(acct) {
                var agent, a = (acct.split(",")[0].replace(/ /g, ""), _appMap[_qparams.appsrc] || []),
                    id = a[0] || null,
                    isRollup = "undefined" != typeof a[1] && a[1],
                    agentName = a[2] || null,
                    findAgent = function(regexp) {
                        return !!regexp.test(navigator.userAgent)
                    };
                return id && (acct = id, isRollup === !0 && (acct += isFromSCApp() ? ",wdgespge" : ",wdgwespma")), agentName && (findAgent(/iPad/i) ? agent = "ipad" : findAgent(/iP(?:hone|od)/i) ? agent = "iphone" : findAgent(/Android/i) && (agent = "android"), agent && (agent = [agentName, agent].join(":"), isEmpty(window._espntrack) ? window._espntrack = [{
                    prop73: agent
                }, {
                    eVar73: agent
                }] : (window._espntrack.push({
                    prop73: agent
                }), window._espntrack.push({
                    eVar73: agent
                })))), acct
            },
            setReportSuite = function(account) {
                var acct = "wdgespcom",
                    addglobal = "undefined" == typeof addglobalsuite || addglobalsuite,
                    gi = /^wdgesp(star|360europe|360prodigymexico|360terrabrazil|360vtrchile|australia|scrum|classiceurope|scorecenter|brazil|nasn|racinglive|fantasy,wdgespwc2010|footytips)$/,
                    gi2 = /^wdgespint|wdgesp(deportes|soccernet|australia)/,
                    gx = /wdgespge/,
                    g = /wdgesp(deportes|soccernet|india)|^wdgespfantasy,wdgespwc2010,wdgespinternational|^wdgespaustralia,wdgespinternational$/,
                    gmx = /wdgwespma|wdgwespsoccernet|^(wdgesp(test|appdesktop)|wdgwesp(mobileweb|espnw|deportes))$/;
                return checkQaRegExp = /(qa\.|local\.|localhost\.|sb\.|preview\.|dev2\.|useqa=true|enable=qaAPI)/i, locationHref = "undefined" != typeof window.location ? window.location.href : "", s_omni && (void 0 !== window._espntrack && void 0 !== window._espntrack.account ? acct = _espntrack.account : "undefined" != typeof s_account ? acct = s_account : account && account && (acct = account)), acct = acct.replace(/^\s+|\s+$|\s+/, ""), acct.match(/(wdgespge|wdgespinternational)/) || (gi.test(acct) || gi2.test(acct) ? (acct += ",wdgespinternational", gx.test(acct) || addglobal && g.test(acct) && (acct += ",wdgespge")) : addglobal && !gmx.test(acct) && (acct += ",wdgespge")), "undefined" != typeof _qparams.appsrc && (acct = updateMobileRS(acct)), checkQaRegExp.test(locationHref) && (acct = "wdgespncomdev"), acct
            },
            getLinkSettings = function() {
                return {
                    trackDownloadLinks: !0,
                    trackExternalLinks: !1,
                    trackInlineStats: !0,
                    linkLeaveQueryString: !0,
                    linkTrackEvents: "None",
                    exec: 0,
                    linkDownloadFileTypes: "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx",
                    linkInternalFilters: "javascript:,espn.go.com,espn.com,jayski.com,cricinfo.com,scrum.com,nasn.com,espnclassicsport.com,espnshop.com,espn360.com,horseracing.com,expn.go.com,expn.com,espntv.com,myespn.go.com,starwave.com,x.go.com,soccernet.com,soccernet.fr,soccernet.es,soccernet.it,soccernet.de,espndeportes.com,espndeportes.fr,espndeportes.es,espndeportes.it,espndeportes.de,spanishflytv.com,redfishcup.com,espnclassic.com,racing-live.com,quiznosmadfin.com,collegebass.com,espnamerica.com,espnstar.com,espndb.go.com,espn.co.uk,shop.expn.com,grantland.com,espnpub01,espnmast01,vwtsbar02,b.espncdn.com,espncdn.com,a.espncdn.com,fantasybeta.espn.go.com,espn-ffl-2013-stage.sportsr.us,espn-ffl-2013.sportsr.us,espnsync.com,espnfivethirtyeight.wordpress.com,fivethirtyeight.com,projects.fivethirtyeight.com,espn.com.mx,espn.com.ar,espn.com.ve,espn.com.co,espnfc.com,espnfc.us,espnfc.co.uk,espnfc.mx,espnfc.com.ar,espnfc.com.ve,espnfc.com.co,espnfc.com.br,espnfc.com.ng,espnfc.com.sg,espnfc.com.au,espnfc.com.my,espnfc.co.id,secsports.go.com,secsports.com,secsports.com,espn.uol.com.br,espnplayer.com,footytips.com.au,espn.com.au,espnview.com.au,espn.cl,espnfcasia.com,sonyespn.com,espn.in,kwese.espn.com,espn-development.com",
                    linkTrackVars: "prop1,prop2,prop9,prop12,eVar74,eVar100"
                }
            },
            setLinkSettings = function() {
                var obj = getLinkSettings();
                s_omni.trackDownloadLinks = obj.trackDownloadLinks, s_omni.trackExternalLinks = obj.trackExternalLinks, s_omni.trackInlineStats = obj.trackInlineStats, s_omni.linkLeaveQueryString = obj.linkLeaveQueryString, s_omni.linkTrackEvents = obj.linkTrackEvents, s_omni.exec = obj.exec, s_omni.linkDownloadFileTypes = obj.linkDownloadFileTypes, s_omni.linkInternalFilters = obj.linkInternalFilters, s_omni.linkTrackVars = obj.linkTrackVars
            },
            updateLinkSettings = function(props) {
                var allvars, exp, omni = props || {},
                    ltVars = [],
                    vars = [],
                    evts = [],
                    obj = getLinkSettings();
                return isEmpty(props) || "undefined" == typeof JSON || (props.link && delete props.link, exp = new RegExp("(prop\\d+|eVar\\d+|hier\\d+|pageName|channel|server|pageType|products|campaign|events|list\\d+)|(event\\d+)", "g"), allvars = JSON.stringify(props), allvars.replace(exp, function(match, $1, $2) {
                    $1 && obj.linkTrackVars.indexOf($1) === -1 && vars.push($1), $2 && obj.linkTrackVars.indexOf($2) === -1 && evts.push($2)
                })), omni.linkTrackVars || (ltVars.push(obj.linkTrackVars), vars.length > 0 && ltVars.push(vars.join(",")), omni.linkTrackVars = ltVars.join(",")), s_omni.linkTrackVars = omni.linkTrackVars, omni.linkTrackEvents || (evts.length > 0 ? omni.linkTrackEvents = evts.join(",") : omni.linkTrackEvents = obj.linkTrackEvents), s_omni.linkTrackEvents = omni.linkTrackEvents, omni
            },
            setEvents = function(p) {
                if (p) {
                    var s = /(?:anonymous|insider-no):premium-yes/,
                        t = /^(?:story|blog)$/,
                        type = p.contentType,
                        evts = p.events,
                        evt8 = "event8";
                    s.test(p.insiderStatus) && type && t.test(type) && (evts && evts && (evt8 = evts + "," + evt8), p.events = evt8)
                }
                return p
            },
            watchOverrides = function(p) {
                return p && window.e3aff && window.e3aff && window.e3fullString && window.e3fullString && (p.espn3Affiliate = e3fullString, p.espn3AffiliateId = e3aff), p
            },
            updateLinkProps = function(props) {
                var pName, omni = props || {},
                    lkGroup = [],
                    site = omni.prop1 || omni.site;
                return omni.site = site || "espn", omni.prop9 ? lkGroup.push(omni.prop9) : (omni.linkPos && lkGroup.push(omni.linkPos.replace(/ /gi, "+").toLowerCase()), omni.linkId && lkGroup.push(omni.linkId.replace(/ /gi, "+").toLowerCase())), lkGroup = lkGroup.join("+"), omni.linkGroup = lkGroup, omni.linkTrackingArray || (pName = omni.pageName ? omni.pageName.replace(/ /gi, "+").toLowerCase() : "string" === s_omni.pageName ? s_omni.pageName.replace(/ /gi, "+").toLowerCase() : "", omni.linkTrackingArray = [window.location.hostname, lkGroup + "^" + pName, "1"]), omni = updateLinkSettings(updateProps(omni))
            },
            getDefaultProps = function(pObj) {
                var sectLV2, desc, pNameL4, anHier, props = pObj || {},
                    sections = [],
                    storyInfo = "",
                    getP = function(key) {
                        return props[key] || ""
                    },
                    addP = function(val) {
                        sections.push(val)
                    },
                    mergeP = function() {
                        return sections.join(":")
                    },
                    site = getP("site"),
                    section = getP("section"),
                    type = getP("contentType"),
                    id = getP("storyId"),
                    conv1 = getP("timeParting"),
                    pNameL4 = getP("convPageName"),
                    pName = section;
                return getP("sections") && addP(getP("sections")), sectLV2 = mergeP(), props.storyInfo ? storyInfo = props.storyInfo : id && (storyInfo = id, desc = getP("storyName"), desc && (storyInfo = storyInfo + "+" + desc.replace(/ /gi, "+")), addP(storyInfo)), pName = props.pageName ? props.pageName : mergeP(), pNameL4 = pName, anHier = props.hier1 ? props.hier1 : pName, props.channel && (section = props.channel), props.prop1 && (site = props.prop1), props.prop5 && (sectLV2 = props.prop5), props.eVar1 && (conv1 = props.eVar1), props.eVar13 && (pNameL4 = props.eVar13), "" !== storyInfo && (props.storyInfo = storyInfo), "" !== pName && (props.pageName = pName), "" !== section && (props.channel = section), "" !== site && (props.prop1 = site), "" !== type && (props.prop4 = type), "" !== sectLV2 && (props.prop5 = sectLV2), "" !== anHier && (props.hier1 = anHier), "" !== pNameL4 && (props.eVar1 = pNameL4), "" !== conv1 && (props.eVar1 = conv1), props.convPageName = pNameL4, props.server = window.location.host, props
            },
            updateProps = function(props) {
                if (!isEmpty(props)) {
                    var key, map, value, c_omni = {},
                        update = function(key, val) {
                            "DoNotSet" !== val ? (c_omni[key] = val, s_omni[key] = val) : (delete c_omni[key], delete s_omni[key])
                        };
                    for (key in props)
                        if (_ignoreMap.indexOf(key) === -1)
                            if (map = _omniMap[key], value = props[key], map) {
                                var i, obj = map.split(":"),
                                    len = obj.length;
                                if (len > 1)
                                    for (i = 0; i < len; i++) update(obj[i], value);
                                else update(obj[0], value)
                            } else update(key, value);
                    props = c_omni
                }
                return props
            },
            setDisabledCookieFuncs = function() {
                var ctest = "",
                    name = "_omnicwtest";
                s_omni.Util.cookieWrite(name, "works"), ctest = s_omni.Util.cookieRead(name), "works" !== ctest && (s_omni.Util.cookieWrite = function() {
                    return !1
                }, s_omni.Util.cookieRead = function() {
                    return ""
                })
            },
            setPropsViaCookieVals = function() {
                if (document.cookie) {
                    var key = s_omni.Util.cookieRead("oRef"),
                        loc = location.href,
                        exp = /(espndeportes(.go)?.com)|(espn((.cl)|(.com.(mx|ar|ve|co))))/;
                    if (key && (s_omni.referrer = decodeURIComponent(key), s_omni.Util.cookieWrite("oRef", "", new Date(+new Date - 864e5).toUTCString())), exp.test(loc)) {
                        var ckey = s_omni.Util.cookieRead("usercc");
                        ckey && (key = decodeURIComponent(ckey), s_omni.prop16 = key, s_omni.eVar12 = key)
                    }
                }
            },
            setVisitorAppID = function() {
                if (document.cookie) {
                    var key = s_omni.Util.cookieRead("viAppId");
                    key && (s_omni.visitorID = decodeURIComponent(key))
                }
                if (void 0 !== JSON && "function" == typeof JSON.parse) {
                    var rand = _qparams.rand;
                    if ("string" == typeof rand && rand.indexOf("~") !== -1) {
                        var index = rand.indexOf("~"),
                            str = rand.substring(index + 1),
                            obj = JSON.parse(decodeURIComponent(str));
                        if (obj && obj.vid) {
                            var vid = obj.vid,
                                exp = new Date;
                            isFromSCApp() || (s_omni.visitorID = vid), document.cookie && (exp.setTime(exp.getTime() + 864e5), s_omni.Util.cookieWrite("viAppId", vid, exp))
                        }
                        if (obj.ref) {
                            var trueRef = obj.ref,
                                docRef = document.referrer;
                            if (null === docRef || "" === docRef) {
                                var isFound = trueRef.match(/(https?:\/\/)?(t(\.)co(\/)?([^a-z]))/);
                                isFound && (trueRef = "http://twitter.com/"), s_omni.referrer = trueRef
                            }
                        }
                    }
                }
            },
            initPlugins = function() {
                function AppMeasurement_Module_Media(q) {
                    var b = this;
                    b.s = q, q = window, q.s_c_in || (q.s_c_il = [], q.s_c_in = 0), b._il = q.s_c_il, b._in = q.s_c_in, b._il[b._in] = b, q.s_c_in++, b._c = "s_m", b.list = [], b.open = function(d, c, e, k) {
                        var g, f = {},
                            a = new Date,
                            l = "";
                        if (c || (c = -1), d && e) {
                            if (b.list || (b.list = {}), b.list[d] && b.close(d), k && k.id && (l = k.id), l)
                                for (g in b.list) !Object.prototype[g] && b.list[g] && b.list[g].R == l && b.close(b.list[g].name);
                            f.name = d, f.length = c, f.offset = 0, f.e = 0, f.playerName = b.playerName ? b.playerName : e, f.R = l, f.C = 0, f.a = 0, f.timestamp = Math.floor(a.getTime() / 1e3), f.k = 0, f.u = f.timestamp, f.c = -1, f.n = "", f.g = -1, f.D = 0, f.I = {}, f.G = 0, f.m = 0, f.f = "", f.B = 0, f.L = 0, f.A = 0, f.F = 0, f.l = !1, f.v = "", f.J = "", f.K = 0, f.r = !1, f.H = "", f.complete = 0, f.Q = 0, f.p = 0, f.q = 0, b.list[d] = f
                        }
                    }, b.openAd = function(d, c, e, k, f, a, l, g) {
                        var h = {};
                        b.open(d, c, e, g), (h = b.list[d]) && (h.l = !0, h.v = k, h.J = f, h.K = a, h.H = l)
                    }, b.M = function(d) {
                        var c = b.list[d];
                        b.list[d] = 0, c && c.monitor && clearTimeout(c.monitor.interval)
                    }, b.close = function(d) {
                        b.i(d, 0, -1)
                    }, b.play = function(d, c, e, k) {
                        var f = b.i(d, 1, c, e, k);
                        f && !f.monitor && (f.monitor = {}, f.monitor.update = function() {
                            1 == f.k && b.i(f.name, 3, -1), f.monitor.interval = setTimeout(f.monitor.update, 1e3)
                        }, f.monitor.update())
                    }, b.click = function(d, c) {
                        b.i(d, 7, c)
                    }, b.complete = function(d, c) {
                        b.i(d, 5, c)
                    }, b.stop = function(d, c) {
                        b.i(d, 2, c)
                    }, b.track = function(d) {
                        b.i(d, 4, -1)
                    }, b.P = function(d, c) {
                        var l, h, e = "a.media.",
                            k = d.linkTrackVars,
                            f = d.linkTrackEvents,
                            a = "m_i",
                            g = d.contextData;
                        if (c.l && (e += "ad.", c.v && (g["a.media.name"] = c.v, g[e + "pod"] = c.J, g[e + "podPosition"] = c.K), c.G || (g[e + "CPM"] = c.H)), c.r && (g[e + "clicked"] = !0, c.r = !1), g["a.contentType"] = "video" + (c.l ? "Ad" : ""), g["a.media.channel"] = b.channel, g[e + "name"] = c.name, g[e + "playerName"] = c.playerName, 0 < c.length && (g[e + "length"] = c.length), g[e + "timePlayed"] = Math.floor(c.a), 0 < Math.floor(c.a) && (g[e + "timePlayed"] = Math.floor(c.a)), c.G || (g[e + "view"] = !0, a = "m_s", b.Heartbeat && b.Heartbeat.enabled && (a = c.l ? b.__primetime ? "mspa_s" : "msa_s" : b.__primetime ? "msp_s" : "ms_s"), c.G = 1), c.f && (g[e + "segmentNum"] = c.m, g[e + "segment"] = c.f, 0 < c.B && (g[e + "segmentLength"] = c.B), c.A && 0 < c.a && (g[e + "segmentView"] = !0)), !c.Q && c.complete && (g[e + "complete"] = !0, c.S = 1), 0 < c.p && (g[e + "milestone"] = c.p), 0 < c.q && (g[e + "offsetMilestone"] = c.q), k)
                            for (h in g) Object.prototype[h] || (k += ",contextData." + h);
                        l = g["a.contentType"], d.pe = a, d.pev3 = l;
                        var q, s;
                        if (b.contextDataMapping)
                            for (h in d.events2 || (d.events2 = ""), k && (k += ",events"), b.contextDataMapping)
                                if (!Object.prototype[h]) {
                                    if (a = h.length > e.length && h.substring(0, e.length) == e ? h.substring(e.length) : "", l = b.contextDataMapping[h], "string" == typeof l)
                                        for (q = l.split(","), s = 0; s < q.length; s++) l = q[s], "a.contentType" == h ? (k && (k += "," + l), d[l] = g[h]) : "view" == a || "segmentView" == a || "clicked" == a || "complete" == a || "timePlayed" == a || "CPM" == a ? (f && (f += "," + l), "timePlayed" == a || "CPM" == a ? g[h] && (d.events2 += (d.events2 ? "," : "") + l + "=" + g[h]) : g[h] && (d.events2 += (d.events2 ? "," : "") + l)) : "segment" == a && g[h + "Num"] ? (k && (k += "," + l), d[l] = g[h + "Num"] + ":" + g[h]) : (k && (k += "," + l), d[l] = g[h]);
                                    else "milestones" != a && "offsetMilestones" != a || (h = h.substring(0, h.length - 1), g[h] && b.contextDataMapping[h + "s"][g[h]] && (f && (f += "," + b.contextDataMapping[h + "s"][g[h]]), d.events2 += (d.events2 ? "," : "") + b.contextDataMapping[h + "s"][g[h]]));
                                    g[h] && (g[h] = 0), "segment" == a && g[h + "Num"] && (g[h + "Num"] = 0)
                                }
                        d.linkTrackVars = k, d.linkTrackEvents = f
                    }, b.i = function(d, c, e, k, f) {
                        var g, h, p, n, y, a = {},
                            l = (new Date).getTime() / 1e3,
                            q = b.trackVars,
                            s = b.trackEvents,
                            t = b.trackSeconds,
                            u = b.trackMilestones,
                            v = b.trackOffsetMilestones,
                            w = b.segmentByMilestones,
                            x = b.segmentByOffsetMilestones,
                            r = 1,
                            m = {};
                        if (b.channel || (b.channel = b.s.w.location.hostname), (a = d && b.list && b.list[d] ? b.list[d] : 0) && (a.l && (t = b.adTrackSeconds, u = b.adTrackMilestones, v = b.adTrackOffsetMilestones, w = b.adSegmentByMilestones, x = b.adSegmentByOffsetMilestones), 0 > e && (e = 1 == a.k && 0 < a.u ? l - a.u + a.c : a.c), 0 < a.length && (e = e < a.length ? e : a.length), 0 > e && (e = 0), a.offset = e, 0 < a.length && (a.e = a.offset / a.length * 100, a.e = 100 < a.e ? 100 : a.e), 0 > a.c && (a.c = e), y = a.D, m.name = d, m.ad = a.l, m.length = a.length, m.openTime = new Date, m.openTime.setTime(1e3 * a.timestamp), m.offset = a.offset, m.percent = a.e, m.playerName = a.playerName, m.mediaEvent = 0 > a.g ? "OPEN" : 1 == c ? "PLAY" : 2 == c ? "STOP" : 3 == c ? "MONITOR" : 4 == c ? "TRACK" : 5 == c ? "COMPLETE" : 7 == c ? "CLICK" : "CLOSE", 2 < c || c != a.k && (2 != c || 1 == a.k))) {
                            if (f || (k = a.m, f = a.f), c) {
                                if (1 == c && (a.c = e), (3 >= c || 5 <= c) && 0 <= a.g && (r = !1, q = s = "None", a.g != e)) {
                                    if (h = a.g, h > e && (h = a.c, h > e && (h = e)), p = u ? u.split(",") : 0, 0 < a.length && p && e >= h)
                                        for (n = 0; n < p.length; n++)(g = p[n] ? parseFloat("" + p[n]) : 0) && h / a.length * 100 < g && a.e >= g && (r = !0, n = p.length, m.mediaEvent = "MILESTONE", a.p = m.milestone = g);
                                    if ((p = v ? v.split(",") : 0) && e >= h)
                                        for (n = 0; n < p.length; n++)(g = p[n] ? parseFloat("" + p[n]) : 0) && h < g && e >= g && (r = !0, n = p.length, m.mediaEvent = "OFFSET_MILESTONE", a.q = m.offsetMilestone = g)
                                }
                                if (a.L || !f) {
                                    if (w && u && 0 < a.length) {
                                        if (p = u.split(","))
                                            for (p.push("100"), n = h = 0; n < p.length; n++)(g = p[n] ? parseFloat("" + p[n]) : 0) && (a.e < g && (k = n + 1, f = "M:" + h + "-" + g, n = p.length), h = g)
                                    } else if (x && v && (p = v.split(",")))
                                        for (p.push("" + (0 < a.length ? a.length : "E")), n = h = 0; n < p.length; n++)((g = p[n] ? parseFloat("" + p[n]) : 0) || "E" == p[n]) && ((e < g || "E" == p[n]) && (k = n + 1, f = "O:" + h + "-" + g, n = p.length), h = g);
                                    f && (a.L = !0)
                                }(f || a.f) && f != a.f && (a.F = !0, a.f || (a.m = k, a.f = f), 0 <= a.g && (r = !0)), (2 <= c || 100 <= a.e) && a.c < e && (a.C += e - a.c, a.a += e - a.c), (2 >= c || 3 == c && !a.k) && (a.n += (1 == c || 3 == c ? "S" : "E") + Math.floor(e), a.k = 3 == c ? 1 : c), !r && 0 <= a.g && 3 >= c && (t = t ? t : 0) && a.a >= t && (r = !0, m.mediaEvent = "SECONDS"), a.u = l, a.c = e
                            }(!c || 3 >= c && 100 <= a.e) && (2 != a.k && (a.n += "E" + Math.floor(e)), c = 0, q = s = "None", m.mediaEvent = "CLOSE"), 7 == c && (r = m.clicked = a.r = !0), (5 == c || b.completeByCloseOffset && (!c || 100 <= a.e) && 0 < a.length && e >= a.length - b.completeCloseOffsetThreshold) && (r = m.complete = a.complete = !0), l = m.mediaEvent, "MILESTONE" == l ? l += "_" + m.milestone : "OFFSET_MILESTONE" == l && (l += "_" + m.offsetMilestone), a.I[l] ? m.eventFirstTime = !1 : (m.eventFirstTime = !0, a.I[l] = 1), m.event = m.mediaEvent, m.timePlayed = a.C, m.segmentNum = a.m, m.segment = a.f, m.segmentLength = a.B, b.monitor && 4 != c && b.monitor(b.s, m), b.Heartbeat && b.Heartbeat.enabled && 0 <= a.g && (r = !1), 0 == c && b.M(d), r && a.D == y && (d = {
                                contextData: {}
                            }, d.linkTrackVars = q, d.linkTrackEvents = s, d.linkTrackVars || (d.linkTrackVars = ""), d.linkTrackEvents || (d.linkTrackEvents = ""), b.P(d, a), d.linkTrackVars || (d["!linkTrackVars"] = 1), d.linkTrackEvents || (d["!linkTrackEvents"] = 1), b.s.track(d), a.F ? (a.m = k, a.f = f, a.A = !0, a.F = !1) : 0 < a.a && (a.A = !1), a.n = "", a.p = a.q = 0, a.a -= Math.floor(a.a), a.g = e, a.D++)
                        }
                        return a
                    }, b.O = function(d, c, e, k, f) {
                        var a = 0;
                        d && (!b.autoTrackMediaLengthRequired || c && 0 < c) && (b.list && b.list[d] ? a = 1 : 1 != e && 3 != e || (b.open(d, c, "HTML5 Video", f), a = 1), a && b.i(d, e, k, -1, 0))
                    }, b.attach = function(d) {
                        var c, e, k;
                        d && d.tagName && "VIDEO" == d.tagName.toUpperCase() && (b.o || (b.o = function(c, a, d) {
                            var e, h;
                            b.autoTrack && (e = c.currentSrc, (h = c.duration) || (h = -1), 0 > d && (d = c.currentTime), b.O(e, h, a, d, c))
                        }), c = function() {
                            b.o(d, 1, -1)
                        }, e = function() {
                            b.o(d, 1, -1)
                        }, b.j(d, "play", c), b.j(d, "pause", e), b.j(d, "seeking", e), b.j(d, "seeked", c), b.j(d, "ended", function() {
                            b.o(d, 0, -1)
                        }), b.j(d, "timeupdate", c), (k = function() {
                            d.paused || d.ended || d.seeking || b.o(d, 3, -1), setTimeout(k, 1e3)
                        })())
                    }, b.j = function(b, c, e) {
                        b.attachEvent ? b.attachEvent("on" + c, e) : b.addEventListener && b.addEventListener(c, e, !1)
                    }, void 0 == b.completeByCloseOffset && (b.completeByCloseOffset = 1), void 0 == b.completeCloseOffsetThreshold && (b.completeCloseOffsetThreshold = 1), b.Heartbeat = {}, b.N = function() {
                        var d, c;
                        if (b.autoTrack && (d = b.s.d.getElementsByTagName("VIDEO")))
                            for (c = 0; c < d.length; c++) b.attach(d[c])
                    }, b.j(q, "load", b.N)
                }
                s_omni.setLinkId = new Function("p1", "p2", "p3", "qp", "d", "id", "t", "k", "L", "v1", "vd", "h", "var s=this;if(s.c_r(k)=='customlink'){s.c_w(k,'');return''}if(typeof h=='undefined'||h==''||(h[0]==''&&h[1]=='')){var h=s.getLinkId(p1,p2,p3,qp,d,id,L,v1,vd)}var v,kv,wh=s.Va();if(!h[0]){kv=s.c_r(k);s.c_w(k,'');return kv}if(typeof h[0]=='object'){h[0]=h[0]+''}wh=h[0].indexOf(wh)>-1?'0':h[0].indexOf('javascript:')>-1?'0':'1';v=h[1].indexOf('atxt:')>-1?'1':'-1';if(s.linkType||s.linkName){if(typeof s.linkTrackingArray[2]!='undefined'&&s.linkTrackingArray[2]!=''){s.c_w(k,'')}else{s.c_w(k,'customlink')}return h[1]}else if(t=='0'||s.linkType=='d'||s.linkType=='e'){s.c_w(k,'');return h[1]}else if(wh=='1'){s.linkName=h[1];s.linkType='o';return h[1]}else if(t=='1'){if(v>-1){s.c_w(k,h[1]);return''}else{s.linkName=h[1];s.linkType='o';return h[1]}}else if(t=='2'){s.linkName=h[1];s.linkType='o';return h[1]}else{s.c_w(k,h[1]);return''}s.c_w(k,'');return'';"), s_omni.getLinkId = new Function("p1", "p1a", "p2", "qp", "d", "id", "L", "v1", "vd", "var s=this,h,n,r,h1,h1a,h2,h3,a,e,q; if(!s.linkObject&&!s.linkURL){return''} var o=s.linkObject?s.linkObject:s.linkURL; var y=s.A(o); var f=s.J(o); var n=f!=0?f.id:''; var x=f!=0?f.type: 0; if(s.linkObject&&o==s.linkObject){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode; if(!o){return''} y=s.A(o); f=s.J(o); n=f!=0?f.id:''; x=f!=0?f.type:0; } } d=d?d:'|'; id=id?id:':'; if(!o.href){return''} r=o.href; q=r.indexOf('?'); e=!o.name?'':o.name.indexOf('&')!=0?'&'+o.name:o.name; h=q>-1?r.substring(q)+e:e?'?'+e:''; if(s.linkLeaveQueryString==false){r=q>0?r.substring(0,q):r}if(h){h1=p1?s.Util.getQueryParam(p1,h,''):''; h2=p2?s.Util.getQueryParam(p2,h,''):''; h3=qp?s.Util.getQueryParam(qp,h,''):''} if(h3&&s.Util.getQueryParam(p2,h3,'')){h2=p2?s.Util.getQueryParam(p2,h3,''):''} if(!h1&&!h2){var oalt=s.getinnerHTML(o); oalt=oalt?oalt:o.alt?o.alt:''; if(!oalt){return''}else{h=L<1?'atxt'+id:'atxt'+id+oalt } }else{h1a=p1a?s.Util.getQueryParam(p1a,h,''):''; h1=h1+=h1a?id+h1a:''; h=h1+=h2?d+h2:''} h=v1?h+vd+v1:h; a=new Array; a[0]=r?r:''; a[1]=h; return a?a:'';"), s_omni.getinnerHTML = new Function("o", "var ih=''+o.innerHTML,ihl=ih.toLowerCase(),i=ihl.indexOf('<img');if(ih&&i>-1){eval(\"evl=/ srcs*=s*['\\\"]?([^'\\\" ]+)['\\\"]?/i\");evl.exec(ih);if(RegExp.$1) ih=RegExp.$1}return(ih);"), s_omni.apl = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"), s_omni.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), s_omni.getLinkParams = new Function("p", "qp", "m", "q", "ev", "var s=this,a='',t=0,l,ll,l2,r,e,la,ap,ev=ev?';;;'+ev+'=1':'';if(s.d.links){for(i=0;i<s.d.links.length;i++){l=s.d.links[i];r=l.href;e=l.name;e=!e?'':e.indexOf('&')!=0?'&'+e:e;la=r.indexOf('?')>-1?r.substring(r.indexOf('?'))+e:e?'?'+e:'';ll=la.toLowerCase();if(qp&&ll.indexOf(qp.toLowerCase())>0)l2=qp?s.Util.getQueryParam(qp,ll,''):'';else l2='';if(l2&&l2.indexOf(p.toLowerCase())>0){ap=s.Util.getQueryParam(p,l2+'','');if(ap!=''&&ap.indexOf('#')<0){a=s.apl(a,q+ap+ev,',',2);t=t+1}}else if(ll.indexOf(p.toLowerCase())>0){ap=s.Util.getQueryParam(p,la+'','');if(ap!=''&&ap.indexOf('#')<0){a=s.apl(a,q+ap+ev,',',2);t=t+1}}if(t==m)return a}return a}"), s_omni.getDaysSinceLastVisit = new Function("c", "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;"), s_omni.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"), s_omni.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), new AppMeasurement_Module_Media("REMOVE")
            },
            setConfig = function(s_omni) {
                function s_omni_doPlugins(s_omni) {
                    function checkUserClicked(clicked) {
                        var bool = !1;
                        return s_omni.exec > 0 && (clicked ? (espn.track.userClicked = !1, s_omni.abort = !1) : (s_omni.abort = !0, bool = !0)), bool
                    }
                    var oneFeedEventType = getOneFeedEventType();
                    if (s_omni.abort = !1, espn.track.exitLinkTrackDisable) {
                        var disable = !0,
                            h = espn.track.exitLinkHandler || [],
                            url = s_omni.linkURL;
                        if ("string" == typeof url && "" !== url)
                            for (i = 0, len = h.length; i < len; i++) {
                                var regexp = h[i];
                                if (regexp.test(url)) {
                                    disable = checkUserClicked(espn.track.userClicked);
                                    break
                                }
                            } else disable = checkUserClicked(espn.track.userClicked);
                        if (disable) return
                    }
                    if (!isEmpty(window._espntrack)) {
                        var i, len = window._espntrack.length;
                        if (len > 0)
                            for (i = 0; i < len; i++) {
                                updateProps(window._espntrack[i])
                            }
                    }
                    if (s_omni.campaign || (s_omni.Util.getQueryParam("cmp", window.location.href) ? s_omni.campaign = s_omni.Util.getQueryParam("cmp", window.location.href) : s_omni.Util.getQueryParam("fb_ref", window.location.href) ? s_omni.campaign = s_omni.Util.getQueryParam("fb_ref", window.location.href) : s_omni.campaign = s_omni.Util.getQueryParam("ex_cid", window.location.href)), s_omni.campaign && (s_omni.campaign = s_omni.getValOnce(s_omni.campaign, "s_v0", 0), s_omni.campaign && (s_omni.events = s_omni.apl(s_omni.events, "event20", ",", 1))), s_omni.prop1 = s_omni.prop1 ? s_omni.prop1 : s_omni.w.location.hostname ? s_omni.w.location.hostname : "No Hostname", s_omni.prop4 = s_omni.prop4 ? s_omni.prop4 : "NotSet", s_omni.pageName = s_omni.pageName ? s_omni.pageName : s_omni.w.location ? s_omni.w.location : "", "cricinfo" === window.omniSite ? s_omni.prop2 = s_omni.Util.cookieRead("SWID") : s_omni.prop2 = "D=SWID", s_omni.eVar100 = s_omni.Util.cookieRead("UNID") || "", 0 == s_omni.exec) {
                        var disableSite = "undefined" != typeof s_omni.disableSite && s_omni.disableSite;
                        if (!disableSite) {
                            var site = s_omni.prop1,
                                pSite = "";
                            site = site.split(":")[0], pSite = site + ":", s_omni.channel && (s_omni.channel = pSite + s_omni.channel), s_omni.pageName && (s_omni.pageName = pSite + s_omni.pageName), s_omni.prop5 && (s_omni.prop5 = pSite + s_omni.prop5), s_omni.hier1 && (s_omni.hier1 = pSite + s_omni.hier1)
                        }
                        "yes" != anMultiStepConv && !s_omni.eVar11 && s_omni.channel && s_omni.prop4 && (s_omni.eVar11 = s_omni.prop4 + ":" + s_omni.channel)
                    }
                    if ("yes" != anMultiStepConv && (s_omni.eVar13 = s_omni.pageName), s_omni.prop7) {
                        s_omni.prop7 = s_omni.prop7.toLowerCase(), "0" != s_omni.prop8 && "zero" != s_omni.prop8 || (s_omni.prop8 = "null"), "null" == s_omni.prop8 && (s_omni.prop7 = "null:" + s_omni.prop7), "yes" != anMultiStepConv && (s_omni.eVar4 = s_omni.prop7);
                        var t_search = s_omni.getValOnce(s_omni.eVar4, "s_v4", 0);
                        t_search && (s_omni.events = s_omni.apl(s_omni.events, "event2", ",", 1))
                    }
                    s_omni.prop24 = s_omni.getDaysSinceLastVisit("s_c24"), s_omni.prop24 = unescape(s_omni.prop24), s_omni.prop24 = unescape(s_omni.prop24), "Cookies Not Supported" == s_omni.prop24 ? s_omni.prop6 = "Cookies Not Supported" : "First Visit" == s_omni.prop24 ? s_omni.prop6 = "New" : s_omni.prop6 = "Repeat", s_omni.events = s_omni.apl(s_omni.events, "event3", ",", 1), oneFeedEventType && (s_omni.events = s_omni.apl(s_omni.events, oneFeedEventType, ",", 1)), s_omni.eVar18 || (s_omni.eVar18 = s_omni.Util.getQueryParam("w_cid")), s_omni.eVar18 = s_omni.getValOnce(s_omni.eVar18, "s_v18", 0), 0 === s_omni.exec && s_omni.prop9 ? s_omni.linkidT = s_omni.prop9 : s_omni.linkidT = s_omni.setLinkId("lpos", "lid", "addata", "goto", "|", "+", "3", "s_omni_lid", "0", s_omni.pageName, "^", s_omni.linkTrackingArray), s_omni.linkTrackingArray = "", s_omni.linkidS = s_omni.linkidT.indexOf("|"), s_omni.linkidX = s_omni.linkidT.indexOf("^"), s_omni.gpv_pageName = s_omni.getPreviousValue(s_omni.pageName, "s_gpv_pn", ""), s_omni.prop12 = s_omni.linkidX > -1 ? s_omni.linkidT.substring(s_omni.linkidX + 1) : s_omni.gpv_pageName, s_omni.linkidT = s_omni.linkidX > -1 ? s_omni.linkidT.substring(0, s_omni.linkidX) : s_omni.linkidT, s_omni.linkidS > -1 && (s_omni.eVar3 = s_omni.linkidT.substring(s_omni.linkidS + 1)), s_omni.prop9 = s_omni.linkidS < 0 ? s_omni.linkidT : s_omni.linkidS > 0 ? s_omni.linkidT.substring(0, s_omni.linkidS) : s_omni.linkidT.substring(s_omni.linkidS + 1), "cricinfo" === window.omniSite ? s_omni.eVar3 || (s_omni.eVar3 = s_omni.Util.getQueryParam("addata,incid")) : s_omni.eVar3 || (s_omni.eVar3 = s_omni.Util.getQueryParam("addata", window.location.href)), s_omni.eVar3 = s_omni.getValOnce(s_omni.eVar3, "s_v3", 0), s_omni.eVar3 && (s_omni.exec < 1 ? s_omni.products = s_omni.apl(s_omni.products, "ads;" + s_omni.eVar3 + ";;;event7=1", ",", 2) : s_omni.products = "ads;" + s_omni.eVar3 + ";;;event7=1", s_omni.events = s_omni.apl(s_omni.events, "event7", ",", 2), s_omni.linkTrackVars = "prop1,prop2,prop9,prop12,products,eVar3,events", s_omni.linkTrackEvents = "event7"), s_omni.exec < 1 && (s_omni.events.indexOf("scCheckout") > -1 && (s_omni.AdsT = s_omni.getLinkParams("addata", "goto", "8", "ads;", "event38"), s_omni.AdsT && (s_omni.products = s_omni.apl(s_omni.products, s_omni.AdsT, ",", 2), s_omni.events = s_omni.apl(s_omni.events, "event38", ",", 2))), s_omni.exec++)
                }
                if (s_omni.charSet = "ISO-8859-1", s_omni.currencyCode = "USD", s_omni.cookieDomainPeriods = 2, !window.location.hostname.match(/go.com/)) {
                    var domainPeriodCount = location.hostname.split(".").length - 1;
                    domainPeriodCount > 2 && (s_omni.cookieDomainPeriods = 3)
                }
                "undefined" == typeof window.anMultiStepConv && (window.anMultiStepConv = ""), setDisabledCookieFuncs(), setPropsViaCookieVals(), setVisitorAppID(), setLinkSettings(), s_omni.usePlugins = !0, s_omni.doPlugins = s_omni_doPlugins, initPlugins(), s_omni.loadModule("Media"), s_omni.Media.autoTrack = !1, s_omni.Media.trackVars = "events,prop1,prop2,prop3,prop4,prop15,prop17,prop25,prop26,eVar1,eVar2,eVar9,eVar11,eVar16,eVar19,eVar20,eVar21", s_omni.Media.trackEvents = "event1,event4,event9,event11,event39,event40", s_omni.Media.trackWhilePlaying = !0, s_omni.Media.trackUsingContextData = !0, s_omni.Media.contextDataMapping = {
                    "a.media.name": "eVar2,prop3",
                    "a.contentType": "prop4",
                    "a.media.view": "event1",
                    "a.media.complete": "event11",
                    "a.media.milestones": {
                        50: "event9"
                    }
                }, s_omni.Media.trackMilestones = "50", s_omni.Media.monitor = function(s, media) {
                    var m = s.Media;
                    "MILESTONE" === media.event && media.eventFirstTime && 50 === media.milestone && m.track(media.name), "CLOSE" === media.event && m.track(media.name)
                }
            };
        espn.track = espn.track || {}, espn.track.exitLinkTrackDisable = !1, espn.track.userClicked = !1, espn.track.exitLinkHandler = [], espn.track.trackLink = function(props) {
            var obj, linkType, omni = props || {};
            isEmpty(omni) || (obj = omni.link ? omni.link : this, omni = updateLinkProps(omni), linkType = omni.linkType && "exit" === omni.linkType ? "e" : "o", s_omni.tl(obj, linkType, omni.linkName || omni.linkGroup), "undefined" != typeof jQuery && jQuery.publish && "function" == typeof jQuery.publish && jQuery.publish("omni.linkTracked", [s_omni]))
        }, espn.track.trackPage = function(props) {
            function init() {
                enableCom && espn.track.comscore(), enableNielsen && espn.track.nielsen(), enableBluekai && espn.track.bluekai(p), enableCTO && espn.track.visionPageView()
            }
            var s_code, p = props,
                enableCB = "undefined" == typeof p.enableCB || p.enableCB,
                enableCTO = "undefined" == typeof p.enableCTO || p.enableCTO,
                enableCom = "undefined" == typeof p.enableCom || p.enableCom,
                enableNielsen = "undefined" == typeof p.enableNielsen || p.enableNielsen,
                enableBluekai = "undefined" == typeof p.enableBluekai || p.enableBluekai;
            if (enableResearchPixel = "undefined" == typeof p.enableResearchPixel || p.enableResearchPixel, !isEmpty(p))
                if (this.clear(), p.trackType = 0, p.account && (s_omni.account = setReportSuite(p.account)), p = getDefaultProps(p), "watchespn" == p.site && (p = watchOverrides(p)), p = setEvents(p), p = updateProps(p), s_omni.pageURL = window.location.href, s_code = s_omni.t(), "undefined" != typeof jQuery && jQuery.publish && "function" == typeof jQuery.publish && jQuery.publish("omni.pageTracked", [s_omni]), enableCB && espn.track.chartbeat(p.cbSettings), enableResearchPixel && espn.track.researchPixel(p), "complete" === document.readyState) init();
                else {
                    var onloadEvent = window.onload;
                    window.onload = "function" != typeof window.onload ? init : function() {
                        onloadEvent(), init()
                    }
                }
        }, espn.track.getTracklinkImgSrc = function(props) {
            var src = "";
            if (!isEmpty(props)) {
                var omni = updateLinkProps(props),
                    obj = omni.link ? omni.link : this,
                    linkType = omni.linkType && "exit" === omni.linkType ? "e" : "o",
                    protocol = s_omni.ssl ? "https://" : "http://",
                    host = s_omni.trackingServerSecure && s_omni.ssl ? s_omni.trackingServerSecure : s_omni.trackingServer,
                    version = "/" + (s_omni.mobile ? "5." : "") + "1/JS-" + s_omni.version,
                    date = new Date,
                    timestamp = date.getYear();
                s_omni.linkObject = obj, s_omni.linkURL = s_omni.X(obj), s_omni.linkType = linkType, s_omni.linkName = omni.linkName || omni.linkGroup, s_omni.abort = !1;
                try {
                    if (s_omni.Jb()) {
                        s_omni.Kb();
                        var g = s_omni.Ib();
                        timestamp = "t=" + s_omni.escape(date.getDate() + "/" + date.getMonth() + "/" + (timestamp < 1900 ? timestamp + 1900 : timestamp) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.getDay() + " " + date.getTimezoneOffset() + "&"), src = [protocol, host, "/b/ss/", s_omni.account, version, "/s", (new Date).getTime(), "?AQB=1&ndh=1&", timestamp, g, "&AQE=1"].join("")
                    }
                } catch (e) {}
            }
            return src
        }, espn.track.set = function(p, o) {
            p = updateProps(p, o)
        }, espn.track.clear = function() {
            s_omni.clearVars()
        }, espn.track.chartbeat = function(props) {
            window._sf_async_config = window._sf_async_config || {};
            var p = "undefined" != typeof props ? props : {},
                cbPath = p.path,
                asyncPath = "undefined" != typeof window._sf_async_config.path ? window._sf_async_config.path : "",
                hasChanged = !!cbPath && asyncPath !== cbPath,
                cbTitle = window._sf_async_config.title !== p.pagename ? p.pagename : window.document.title;
            try {
                hasChanged && (window._sf_async_config.title = cbTitle, window._sf_async_config.path = cbPath, window._sf_async_config.sections = p.sections || "", window._sf_async_config.authors = p.sections ? p.authors || s_omni.contentType : "", "undefined" != typeof ad_site && (window._sf_async_config.zone = ad_site), pSUPERFLY.virtualPage(cbPath, cbTitle))
            } catch (e) {}
        }, espn.track.initCB = function(props) {
            function loadScripts() {
                window._sf_endpt = (new Date).getTime();
                var cbDomain = "https://static.chartbeat.com/";
                loadPubJS && $.getScriptCache(cbDomain + "js/chartbeat_pub.js"), (loadVidJS || "undefined" != typeof StrategyInterface && espn && espn.video) && $.getScriptCache(cbDomain + "js/chartbeat_video.js"), loadVidJS || loadPubJS || $.getScriptCache(cbDomain + "js/chartbeat.js")
            }
            if (props) {
                var p = props || {},
                    loadPubJS = "undefined" != typeof p.loadPubJS && p.loadPubJS,
                    loadVidJS = "undefined" != typeof p.loadVidJS && p.loadVidJS,
                    useCanonical = "undefined" == typeof p.useCanonical || p.useCanonical,
                    _sf_async_config = window._sf_async_config;
                if (_sf_async_config ? (_sf_async_config.pingServer = "pespn.chartbeat.net", _sf_async_config.useSubDomains = !1) : window._sf_async_config = {
                        uid: 22222,
                        domain: p.domain || "espn.com",
                        pingServer: "pespn.chartbeat.net",
                        useCanonical: useCanonical,
                        useSubDomains: !1,
                        autoDetect: !1
                    }, p.path && (window._sf_async_config.path = p.path), p.sections && (window._sf_async_config.sections = p.sections), p.authors && (window._sf_async_config.authors = p.authors), p.title && (window._sf_async_config.title = p.title), p.playerdomain && (window._sf_async_config.playerdomain = p.playerdomain), "undefined" != typeof ad_site && (window._sf_async_config.zone = ad_site), "undefined" != typeof espn_ui && espn_ui.loadReady) loadScripts();
                else {
                    var onloadEvent = window.onload;
                    window.onload = "function" != typeof window.onload ? loadScripts : function() {
                        onloadEvent(), loadScripts()
                    }
                }
            }
        }, espn.track.comscore = function() {
            if ("undefined" !== jQuery) {
                window._comscore = window._comscore || [];
                var editionKey = window.espn.i18n.editionKey,
                    cookieName = editionKey + "-cookie-consent",
                    cookieConsent = $.cookie(cookieName);
                cookieConsent ? window._comscore.push({
                    c1: "2",
                    c2: "3000005",
                    cs_ucfr: "1"
                }) : window._comscore.push({
                    c1: "2",
                    c2: "3000005"
                }), $.getScriptCache("https://sb.scorecardresearch.com/beacon.js")
            }
        }, espn.track.nielsen = function() {
            if (void 0 != window.NOLCMB) {
                var nielsenConfigs = this.data.nielsen,
                    omniture = this.data.omniture,
                    isAUSite = omniture.site && ("espnau" == omniture.site || "cricinfo" == omniture.site && "australia" == omniture.countryRegion.toLowerCase());
                isAUSite && ("undefined" != typeof nol_t ? 1 == window.recordedNielsen && window.trac.pageEvent(window.location.pathname.replace(/_/g, "-")) : this.initNielsen()), void 0 != window.nSdkInstance && window.nSdkInstance.ggPM("staticend", window.staticmeta);
                var nielsenSiteConfig = void 0 != omniture.site ? $.extend({}, nielsenConfigs.general, nielsenConfigs[omniture.site]) : nielsenConfigs.general,
                    initConfig = {
                        apid: nielsenSiteConfig.apid,
                        sfcode: nielsenSiteConfig.sfcode,
                        apn: nielsenSiteConfig.apn
                    },
                    pageId = void 0 != omniture.storyInfo ? omniture.storyInfo.split("+")[0] : void 0 != omniture.gameInfo ? omniture.gameInfo.split("+")[0] : omniture.contentType;
                window.staticmeta = {
                    type: "static",
                    assetid: omniture.site + "/" + omniture.section + "/" + pageId,
                    section: omniture.section,
                    vc: nielsenSiteConfig.vc,
                    segA: omniture.contentType,
                    segC: pageId
                }, window.nSdkInstance = window.NOLCMB.getInstance(window.staticmeta.assetid), window.nSdkInstance.ggInitialize(initConfig), window.nSdkInstance.ggPM("staticstart", window.staticmeta)
            } else espn.track.initNielsen()
        }, espn.track.initNielsen = function(props) {
            var omniture = this.data.omniture,
                isAUSite = omniture.site && ("espnau" == omniture.site || "cricinfo" == omniture.site && "australia" == omniture.countryRegion.toLowerCase());
            if (isAUSite) {
                var key = props && props.key;
                key && key in _nielsenConfig && (_nielsenConfig.key = key);
                var config = _nielsenConfig[_nielsenConfig.key];
                $.when($.getScript("https://" + config.server + ".imrworldwide.com/v60.js"), $.getScript("https://cdn-gl.imrworldwide.com/novms/js/2/ggcmb510.js"), $.Deferred(function(deferred) {
                    $(deferred.resolve)
                })).done(function() {
                    espn.track.nielsen(), window.trac = nol_t(config), window.trac.record().post(), window.recordedNielsen = !0
                })
            } else $.getScriptCache("//cdn-gl.imrworldwide.com/novms/js/2/ggcmb510.js", function() {
                espn.track.nielsen()
            })
        }, espn.track.bluekai = function(props) {
            var siteId, siteIds = {
                    espn: 24667,
                    espnw: 24767,
                    espnuk: 24765,
                    rugby: 24775,
                    f1: 24757,
                    cricinfo: 24753,
                    espnau: 42938,
                    espndeportes: 24755,
                    espnza: 45599,
                    espnww: 24667,
                    watchespn: 58016,
                    mwatchespn: 58017
                },
                deportesSiteIds = {
                    "espn-es-ar": 42934,
                    "espn-es-ve": 42944,
                    "espn-es-cl": 42932,
                    "espn-es-co": 42940,
                    "espn-es-mx": 42942
                },
                trackData = espn.track.data && espn.track.data.omniture || {},
                isBlueKai = window.location.search.indexOf("bluekai") > -1,
                site = props && props.site ? props.site : window.omniSite ? window.omniSite : "espn";
            if (site && "espnuk" === site && trackData.section && (section = trackData.section, !section || "f1" !== section && "rugby" !== section || (site = section)), siteId = siteIds[site], "watchespn" === site && espn_ui && "mobile" === espn_ui.deviceType && (siteId = siteIds.mwatchespn), "espndeportes" === site && deportesSiteIds[espn.i18n.editionKey] && (siteId = deportesSiteIds[espn.i18n.editionKey]), void 0 !== siteId || isBlueKai === !0) {
                var SWID = espn.core && "undefined" != typeof espn.core.SWID ? espn.core.SWID : "";
                if (24667 === siteId) var UNID = s_omni.Util.cookieRead("UNID") || "";
                window.bk_async = function() {
                    try {
                        "undefined" != typeof s_omni && (bk_addPageCtx("pageName", "undefined" != typeof s_omni.pageName ? s_omni.pageName : ""), bk_addPageCtx("channel", "undefined" != typeof s_omni.channel ? s_omni.channel : ""), bk_addPageCtx("eVar34", "undefined" != typeof s_omni.prop45 ? s_omni.prop45 : ""), bk_addPageCtx("events", "undefined" != typeof s_omni.events ? s_omni.events : ""), bk_addPageCtx("prop1", "undefined" != typeof s_omni.prop1 ? s_omni.prop1 : ""), bk_addPageCtx("swid", SWID), bk_addPageCtx("unid", UNID), bk_addPageCtx("prop4", "undefined" != typeof s_omni.prop4 ? s_omni.prop4 : ""), bk_addPageCtx("prop9", "undefined" != typeof s_omni.prop9 ? s_omni.prop9 : ""), bk_addPageCtx("prop23", "undefined" != typeof s_omni.prop23 ? s_omni.prop23 : ""), bk_addPageCtx("prop25", "undefined" != typeof s_omni.prop25 ? s_omni.prop25 : ""), bk_addPageCtx("prop26", "undefined" != typeof s_omni.prop26 ? s_omni.prop26 : ""), bk_addPageCtx("prop30", "undefined" != typeof s_omni.prop30 ? s_omni.prop30 : ""), bk_addPageCtx("prop32", "undefined" != typeof s_omni.prop32 ? s_omni.prop32 : ""), bk_addPageCtx("prop45", "undefined" != typeof s_omni.prop45 ? s_omni.prop45 : ""))
                    } catch (e) {}
                    window.bk_allow_multiple_calls = !0, window.bk_use_multiple_iframes = !0, window.bk_pixel_url = "https://tags.bluekai.com/", window.bk_pixel_secure = "https://tags.bluekai.com/", window.BKTAG && window.BKTAG.doTag && window.BKTAG.doTag(siteId, 10)
                }, "undefined" == typeof espn.track.bluekaiLoaded ? $.when($.getScript("https://tags.bkrtx.com/js/bk-coretag.js")).done(function() {
                    espn.track.bluekaiLoaded = !0
                }) : window.bk_async()
            }
        }, espn.track.qualtrics = function() {
            if (espn.track.qualtricsLoaded) "undefined" != typeof QSI && (QSI.API.unload(), QSI.API.load().then(QSI.API.run()));
            else {
                var protocol = "https:" === document.location.protocol ? "https://secure" : "http://a";
                $.when($.getScript(protocol + ".espncdn.com/combiner/c?js=analytics/qualtrics.site.intercept.js")).done(function() {
                    "undefined" != typeof QSI && QSI.API.run(), espn.track.qualtricsLoaded = !0
                })
            }
        }, espn.track.researchPixel = function(props) {
            var visitorID = s_omni.visitor.getMarketingCloudVisitorID(),
                site = props && props.site ? props.site : window.omniSite ? window.omniSite : "espn",
                siteIds = {
                    espn: 1,
                    espndeportes: 2
                },
                siteId = siteIds[site];
            siteId && visitorID && $("body").append('<img style="display: none" src="https://c.cintnetworks.com/?a=2761&i=2&e=1&c=' + siteId + "&c0=" + visitorID + '"/>')
        };
        var getOneFeedEventType = function() {
            return clickedLinkTierTypes2Events = {
                    "Tier1 - Transcendent": "event110",
                    "Tier1 - Private Ryan": "event116",
                    "Tier1 - Favorite Scores": "event111",
                    "Tier1 - EditorialFeatured": "event117",
                    "Tier2 - Favorite Team": "event118",
                    "Tier2 - Favorite Sport": "event118",
                    "Tier3 - Editorial": "event119"
                },
                function() {
                    var clickedLinkTierType = espn.track.currentLink && espn.track.currentLink.tierType,
                        personalizedEvent = "",
                        personalizedContentInTier1 = document.querySelector('article[data-tier-type="Tier1 - Private Ryan"]');
                    return personalizedContentInTier1 ? personalizedEvent = "event115" : clickedLinkTierType && (personalizedEvent = clickedLinkTierTypes2Events[clickedLinkTierType]), personalizedEvent
                }
        }();
        ! function() {
            location.search.replace(/([^?=&]+)(=([^&#]*))?/g, function($0, $1, $2, $3) {
                _qparams[$1] = $3
            });
            "undefined" == typeof s_omni && (window.s_account || (window.s_account = espn.track.data.omniture && espn.track.data.omniture.account), window.s_omni = s_gi(window.s_account), s_omni.account = setReportSuite(), s_omni.visitor = Visitor.getInstance("EE0201AC512D2BE80A490D4C@AdobeOrg"), s_omni.visitorNamespace = "espn", s_omni.trackingServer = "w88.espn.com", s_omni.trackingServerSecure = "sw88.espn.com", s_omni.loadtimeout = 3e4, window.location.hostname.match(/\.go\./) && (s_omni.trackingServer = "w88.go.com", s_omni.trackingServerSecure = "sw88.go.com"), s_omni.dc = 112, setConfig(s_omni), "undefined" != typeof jQuery && jQuery.publish && "function" == typeof jQuery.publish && jQuery.publish("omni.loaded", [s_omni]))
        }()
    }(jQuery, window, document), AppMeasurement.getInstance = s_gi, window.s_objectID || (window.s_objectID = 0), s_pgicq(),
    function($) {
        function analytics(data) {
            return data ? void(espn.track.data = data) : espn.track.data
        }

        function isEnabled(flag, fallback, override) {
            return "undefined" != typeof flag ? override || flag : fallback || !1
        }

        function isCricketGamepackage() {
            var isCricketGamepackage = !1;
            return "cricket" === espn.sports.getSport() && "gamepackage" === $("body").attr("data-pagetype") && (isCricketGamepackage = !0), isCricketGamepackage
        }

        function consolidateContentType(type) {
            return "undefined" == typeof type && (type = "index"), type.indexOf("standings:") > -1 ? type = "standings" : type.indexOf("schedule:") > -1 ? type = "schedule" : "index-favorites" === type ? type = "favorites" : "index-news" === type ? type = "news" : "index-now" === type && (type = "now"), type
        }

        function getLIDname(name) {
            var ret = "";
            if ("string" == typeof name && "" !== name) {
                var reformat, lposid = [];
                reformat = name.replace(/&lpos=([^\&]*)(?:&lid=(.*))?/, function(match, $1, $2) {
                    $1 && lposid.push($1), $2 && lposid.push($2)
                }), ret = lposid.join("+")
            }
            return ret
        }

        function updateFeedIndexes(type) {
            var $container = $($(".main-content").hasClass("one-feed") ? "#news-feed" : "#news-feed-content"),
                selector = "mobile" === device ? defaultSel : desktopSel,
                count = 1,
                itemAttr = "data-pos",
                delegate = $container.find(selector).filter("*:not([data-pos])"),
                anData = analytics().omniture || {};
            anData.section || "";
            void 0 !== $container.attr("data-count") && (count = $container.attr("data-count")), delegate.each(function() {
                var $item = $(this),
                    dataPos = "";
                $item.find("a[name], a[data-name]").each(function() {
                    var $link = $(this),
                        name = $(this).attr("name") || "",
                        dataName = $(this).attr("data-name"),
                        dataType = dataName ? "data-name" : "name";
                    if ("minifeed" === type) {
                        var $item = $link.closest("li"),
                            label = "&lpos=story:minifeed:" + count;
                        $item.length > 0 && (label += ":related:" + ($item.index() + 1)), $link.attr(dataType, label)
                    } else name = "data-name" === dataType ? dataName : name, "" !== name && $link.attr(dataType, name.replace(/xx/, count))
                }), dataPos = count++, $item.attr(itemAttr, dataPos).find("article").attr(itemAttr, dataPos)
            }), $container.attr("data-count", count), $(".main-content .col-c .sub-module.editorial").each(function(i, module) {
                $(module).attr("data-pos", i + 1)
            })
        }

        function updateOneFeedIndex(e, type) {
            if (e && e.target) {
                var selector = "mobile" === device ? defaultSel : desktopSel,
                    $item = $(e.target).parents(selector),
                    itemAttr = "data-pos",
                    feedType = type || "feed";
                "onefeed" === type && (selector = "section.feed-card", $item = $(e.target).parents(selector));
                var itemList = $item.parents("#news-feed-content").find(selector).filter("*[class~='news-feed-item']");
                "now" === feedType ? (itemList = $item.parents("#now-feed").find("article").filter("*:not([class*='ad-'])"), itemAttr = "data-index") : "onefeed" === feedType && (itemList = $item.parents("#news-feed-content").find("section.feed-card"));
                var index = itemList.index($item) + 1;
                $item.find("a[name], a[data-name]").each(function() {
                    var $link = $(this),
                        name = $(this).attr("name") || "",
                        dataName = $(this).attr("data-name"),
                        origName = $(this).attr("data-origin-name"),
                        dataType = dataName ? "data-name" : "name";
                    if ("minifeed" === type) {
                        var $item = $link.closest("li"),
                            label = "&lpos=story:minifeed:" + index;
                        $item.length > 0 && (label += ":related:" + ($item.index() + 1)), $link.attr(dataType, label)
                    } else void 0 !== origName ? name = origName : (name = "data-name" === dataType ? dataName : name, $link.attr("data-origin-name", name)), $link.attr(dataType, name.replace(/xx/, index))
                }), $item.attr(itemAttr, index)
            }
        }

        function setLIDCookie(name) {
            if ("string" == typeof name && "" !== name) {
                var lposid = getLIDname(name);
                window.s_omni.Util.cookieWrite("s_omni_lid", lposid)
            }
        }

        function getUserFavsStatus() {
            var favStatus = espn.storage.getItem("_favStatus"),
                fanapiOptions = espn.fanapi.getOptions("index");
            delete fanapiOptions.context, delete fanapiOptions.SWID, favStatus ? espn.track.favStatus = favStatus : espn.core.hasFavorites && espn.fanapi ? $.when(espn.fanapi.getAsP13n(fanapiOptions)).done(function(d) {
                if (d) {
                    var fantasyEntries = d.myFantasy && d.myFantasy.entries || {},
                        allFantasy = fantasyEntries.favorites || [],
                        allFavs = [].concat(d.myPlayers || [], d.mySports || [], d.myTeams || []),
                        prefs = d.mySettings || {},
                        nPrefs = prefs.hasNotificationPreferences ? "true" : "false",
                        hasFavorites = allFavs.length > 0 ? "yes" : "no",
                        playsFantasy = allFantasy.length > 0 || "true" === nPrefs ? "yes" : "no",
                        leagueMgr = d.myFantasy && d.myFantasy.leagueManager ? "yes" : "no",
                        hasNotify = "true" === nPrefs ? "yes" : "no",
                        autostart = prefs.videoAutoStart && "1" === prefs.videoAutoStart ? "yes" : "no";
                    espn.track.favStatus = ["favorites:" + hasFavorites, "fantasy:" + playsFantasy, "league mgr:" + leagueMgr, "alerts:" + hasNotify, "autostart:" + autostart].join("|"), espn.storage.setItem("_favStatus", espn.track.favStatus)
                }
            }) : (espn.track.favStatus = "favorites:no|fantasy:no|league mgr:no|alerts:no|autostart:no", espn.storage.setItem("_favStatus", espn.track.favStatus))
        }

        function getVideoSection($link, customLabel) {
            var i, len, sect, section = null,
                sport = $body.attr("data-sport"),
                sections = [{
                    id: "#news-feed-content:not(.sidebar) .news-feed-story-package",
                    label: "index-news-mem"
                }, {
                    id: "#news-feed-content:not(.sidebar) .video-carousel",
                    label: "index-news-stripe"
                }, {
                    id: "body.clubhouse",
                    label: "clubhouse"
                }, {
                    id: "#news-feed-content:not(.sidebar)",
                    label: "index-news"
                }, {
                    id: "body.gamepackage",
                    label: "gamepackage"
                }, {
                    id: "#now-feed",
                    label: "index-now"
                }, {
                    id: "#main-container .article",
                    label: "story"
                }, {
                    id: "body.scoreboard .main-content .col-c",
                    label: sport + "-scoreboard-now"
                }, {
                    id: "body.scoreboard",
                    label: customLabel
                }, {
                    id: ".main-content .col-c",
                    label: "index-rightrail"
                }, {
                    id: "#news-feed",
                    label: "index-onefeed"
                }];
            for (i = 0, len = sections.length; i < len; i++)
                if (sect = sections[i], $link.closest(sect.id).length > 0) {
                    section = sect.label;
                    break
                }
            return "index-rightrail" === section && sport && (section = section.replace("index", sport)), section
        }

        function trackCTOConsumed($target) {
            if ($target && espn.track.isVisionEnabled()) {
                var isNewsFeed = $target.closest("#news-feed").length > 0,
                    isPofFeed = $target.closest("#personalized-one-feed").length > 0,
                    ctoPofItems = espn.track.ctoPofItems || [];
                if (isNewsFeed || isPofFeed) {
                    var idsArray = [$target.data("id"), $target.closest("article").data("id"), $target.closest("figure").data("id"), $target.closest("div.miniCardCarousel__slide").data("id")],
                        ctoPofItem = _.find(ctoPofItems, function(item) {
                            return _.includes(idsArray, item.id) || _.includes(idsArray, item.nowId)
                        });
                    ctoPofItem && espn.track.visionConsumed(ctoPofItem)
                }
            }
        }

        function trackLinkClicked(e) {
            if (e && e.target) {
                var $link = $(e.target).closest("a"),
                    shouldAjax = window.espn_ui.Helpers.links.shouldAjax($link);
                setCurrentLink($link), trackCTOConsumed($link), 0 == shouldAjax && isCricketGamepackage() && setLIDCookie($link.attr("name")), shouldAjax === !0 && espn.track.currentLink && "sitenav" === espn.track.currentLink.section && setLIDCookie($link.attr("name"))
            }
        }

        function setCurrentLink($link) {
            if ($link && $link.length > 0) {
                var i, len, sport = $body.attr("data-sport"),
                    sections = [{
                        id: "#global-scoreboard",
                        label: "scoreboard"
                    }, {
                        id: "#global-header",
                        label: "sitenav"
                    }, {
                        id: "#favfeed",
                        label: "index-favorites"
                    }, {
                        id: "body.gamepackage",
                        label: "gamepackage"
                    }, {
                        id: "#news-feed-content.sidebar",
                        label: "minifeed"
                    }, {
                        id: "#news-feed-content:not(.sidebar)",
                        label: "index-news"
                    }, {
                        id: "#now-feed",
                        label: "index-now"
                    }, {
                        id: "#sched-container",
                        label: "schedule"
                    }, {
                        id: "body.scoreboard .main-content .col-c",
                        label: sport + "-scoreboard-now"
                    }, {
                        id: "#main-container .main-content .col-c",
                        label: "index-rightrail"
                    }, {
                        id: "#favStrip",
                        label: "favorites-carousel"
                    }, {
                        id: ".contentItem__miniCards",
                        label: "minicard-carousel"
                    }, {
                        id: "#news-feed",
                        label: "index-onefeed"
                    }],
                    section = null;
                for (i = 0, len = sections.length; i < len; i++)
                    if ($link.closest(sections[i].id).length > 0) {
                        section = sections[i].label;
                        break
                    }
                var oneFeedItemTierType = $link.closest("[data-tier-type]").data("tier-type");
                "index-rightrail" === section && sport && (section = section.replace("index", sport));
                var linkShouldAjax = window.espn_ui.Helpers.links.shouldAjax($link),
                    linkInInline = $link.closest(".inline-track").length > 0,
                    linkName = $link.attr("name");
                if ("minicard-carousel" === section) {
                    var pos = "";
                    $link.hasClass("miniCard") && (pos = $link.parents(".editorialCarousel").find(".miniCard").index($link) + 1), linkName && (linkName = linkName.replace(/yy/, pos))
                }
                if (linkInInline && linkShouldAjax) {
                    var linkPositionNumber = $link.closest(".inline-track").find("a").index($link) + 1;
                    linkName = $link.attr("name") ? $link.attr("name") : "&lpos=:inline:" + linkPositionNumber
                }
                espn.track.currentLink = {
                    link: $link,
                    name: linkName,
                    href: $link.attr("href"),
                    tierType: oneFeedItemTierType,
                    section: section
                }
            }
        }

        function trackVideoPlayed(e) {
            var type, isAutoPlay = !e,
                $firstEle = $(".video-play-button:eq(0)"),
                $target = isAutoPlay ? $firstEle : $(e.target),
                $link = isAutoPlay ? $firstEle : $target.closest(".video-play-button"),
                anData = analytics().omniture || {},
                anSect = anData.section || "",
                region = anData.countryRegion || "",
                anSects = anData.sections || "",
                scoreLabel = anSects.replace(/:/, "-") + "-game",
                videoObj = $target.closest("figure"),
                videoData = videoObj.data("video"),
                videoAttr = videoData ? videoData.split(",") : [],
                videoId = videoAttr[3] || "",
                videoContibutingPartner = videoObj.data("contributing-partner") || "",
                section = getVideoSection($link, scoreLabel),
                videoTypeSlug = "video";
            if ("sonyliv" === videoAttr[0] && (videoTypeSlug += "-sony-" + videoId), "livestream" === videoAttr[0] && (videoTypeSlug += "-livestream-" + videoId), section) {
                if ("index-news-stripe" === section) {
                    var videoPos = $link.closest(".slick-slide").length > 0 ? parseInt($link.closest(".slick-slide").attr("data-slick-index")) + 1 : 1;
                    section = "" !== anSect ? section + ":" + anSect + ":" + videoPos : ""
                } else if ("gamepackage" === section) {
                    type = espn.gamepackage ? espn.gamepackage.type : void 0;
                    var leagueMap = {
                            "college-football": "ncf",
                            "mens-college-basketball": "ncb",
                            "womens-college-basketball": "ncw"
                        },
                        thisLeague = leagueMap[espn.gamepackage.league] ? leagueMap[espn.gamepackage.league] : espn.gamepackage.league;
                    if (type) {
                        if (!isAutoPlay) {
                            var vidType, vidPos, isScoringPlay, linkPos = ("soccer" === espn.gamepackage.sport ? espn.gamepackage.sport : thisLeague) + ":game:";
                            if ("game" === type || "match" === type) vidType = $link.closest("article.game-highlights").length > 0 ? "highlights:" : "summary:", vidPos = $link.closest(".slick-slide").length > 0 ? $link.closest(".slick-slide").attr("data-slick-index") : 1, linkPos = linkPos + vidType + espn.gamepackage.status + ":" + videoTypeSlug + ":" + vidPos;
                            else if ("video" === type) vidPos = $link.closest(".highlight").index(), isScoringPlay = $link.closest(".highlight").hasClass("scoring-play") ? "scoring:" : "notscoring:", linkPos = linkPos + "video:" + videoTypeSlug + ":" + isScoringPlay + vidPos;
                            else {
                                if ("preview" !== type && "recap" !== type) return;
                                linkPos = linkPos + type + ":" + videoTypeSlug
                            }
                            linkTrack({
                                link: !0,
                                linkPos: linkPos
                            })
                        }
                        section = thisLeague + "-game-" + type.replace("game", "summary")
                    }
                } else if ("index-news-mem" !== section && "index-news" !== section && "index-onefeed" !== section || isAutoPlay) {
                    if (section.match(/scoreboard-game/) && !isAutoPlay) {
                        var videoTitle = videoObj.find("figcaption p").text() ? videoObj.find("figcaption p").text().replace(/ /g, "+") : "";
                        linkTrack({
                            link: !0,
                            linkPos: section + ":video",
                            assetInfo: videoId + ":" + videoTitle
                        })
                    } else if ($("body").data("pagetype") && "scoreboard" === $("body").data("pagetype") && "index-now" === section) {
                        var sport = $("body").data("sport");
                        section = sport + "-scoreboard-now"
                    } else if (section.match(/-rightrail|-scoreboard-now/)) {
                        var position = $target.closest(".sub-module.editorial[data-pos]").attr("data-pos"),
                            videoSection = "index-rightrail" === section ? section.replace("index", "hp") : section,
                            playType = "video-inline",
                            videoPosition = [videoSection, playType, position].join(":"),
                            videoSocial = [videoSection, playType, videoId].join(":");
                        trackSocialShare({
                            link: !0,
                            linkPos: videoPosition,
                            socialShare: videoSocial
                        })
                    }
                } else {
                    var name, count, tier, $article = $target.parents("article").length > 0 ? $target.parents("article") : $target.closest(".video-standalone"),
                        $ele = $article.find("h1 > a"),
                        live = "",
                        index = "";
                    type = "name", $article.hasClass("news-feed-video-package") ? (type = "data-name", $ele = $article.find("h1")) : $article.hasClass("video-standalone") ? $ele = $article.find("a") : $(".main-content").hasClass("one-feed") && ($ele = $article.find("figure"), $ele.find("figcaption").hasClass("live") && (live = ":live"), count = $article.attr("data-pos")), $article.hasClass("editorialCarousel") && (videoTypeSlug = "", $article = $target.parents("a.miniCard"), $ele = $article.find("figure"), tier = $article.attr("data-tier-type"), index = $article.parents(".editorialCarousel").find(".miniCard").index($article) + 1), name = $ele.attr(type) || "", name = name.replace(/ts\d+|news/, videoTypeSlug).replace(/\&lpos\=|\&lid\=/, "").replace(/xx/, count).replace(/yy/, index), name += live, linkTrack(tier ? {
                        link: !0,
                        linkPos: name,
                        eVar29: tier
                    } : {
                        link: !0,
                        linkPos: name
                    })
                }
                if (0 === section.indexOf("index-news")) {
                    var oneFeedItemTierType = $target.closest("[data-tier-type]").data("tier-type");
                    oneFeedItemTierType && (section += "-" + oneFeedItemTierType.toLowerCase().replace(/ /g, "-"))
                }
                region.indexOf("en-") === -1 && (section = region + "-" + section), videoContibutingPartner && (section = videoContibutingPartner.toLowerCase() + ":" + section), window.omniTrackingName = section
            }
        }

        function trackPageSocial(e) {
            var $target = $(e.target);
            $target.closest("section").hasClass("feed-card") ? updateOneFeedIndex(e, "onefeed") : $target.closest("article").hasClass("news-now") || updateOneFeedIndex(e, "now");
            var $link = $target.closest("a"),
                tool = $target.data("social-tool") || "",
                section = ("" !== $body.attr("data-sport") ? "index" : "hp") + "-now",
                prefix = "twitter" === tool || "retweet" === tool || "reply" === tool ? "twitter" : "share",
                $parent = $link.closest("ul"),
                artId = $parent.data("id"),
                artTitle = $parent.data("name"),
                artType = $parent.data("type"),
                $article = $link.closest("article"),
                lpos = $article.hasClass("lightbox") ? globalPlacement : $article.attr("data-pos") || $article.attr("data-index"),
                shareId = artId || lpos;
            tool = tool.replace(/twitter/, "retweet"), trackSocialShare({
                link: $link[0],
                linkPos: [prefix, tool, section, shareId].join(":"),
                events: "event62",
                socialShare: [prefix, tool, section, shareId].join(":")
            }, artId, artTitle, artType)
        }

        function trackStorySocial(e) {
            var $target = $(e.target),
                $parent = $target.closest("ul.article-social"),
                tool = $target.data("social-tool") || "",
                pos = $target.data("social-type") + "-share",
                artId = $parent.data("id"),
                artTitle = $parent.data("name"),
                artType = $parent.data("type");
            trackSocialShare({
                link: $target[0],
                linkPos: tool.toString(),
                linkId: pos,
                events: "event62",
                socialShare: [tool.toString(), pos].join("+")
            }, artId, artTitle, artType)
        }

        function trackNowCardLinkClicked(e) {
            updateOneFeedIndex(e, "now");
            var type, $linkTarget = $(e.target),
                $article = $linkTarget.closest("article"),
                placement = $article.hasClass("lightbox") ? globalPlacement : $article.attr("data-index") || $article.attr("data-pos"),
                nowId = $article.hasClass("lightbox") ? globalNowId : $article.data("id"),
                href = $linkTarget.attr("href"),
                dataSport = $body.attr("data-sport"),
                section = ("" !== dataSport ? "index" : "hp") + "-now";
            type = href.indexOf("/story/") !== -1 || href.indexOf("/blog/") !== -1 || href.indexOf("/article/") !== -1 || href.indexOf("/recap/") !== -1 ? "story" : href.indexOf("/watchespn") !== -1 ? "watchespn" : "other", linkTrack({
                linkPos: [section, type, placement].join(":"),
                socialShare: [section, type, nowId].join(":")
            })
        }

        function trackSocialShare(props, id, label, type) {
            if (props) {
                if (id && label) {
                    var info = [id, label.toLowerCase().replace(/ /g, "+")].join(":");
                    "video" === type ? props.assetInfo = info : "now-video" === type ? props.assetInfo = "now:" + info : props.storyInfo = "now:" + info
                }
                linkTrack(props)
            }
        }

        function trackScoreButton(e) {
            var $target = $(e.target).closest("a"),
                name = getLIDname($target.attr("name")),
                props = name.split(":");
            if ("highlights" === props[3]) {
                var placement = $target.parent(".scoreboard").find(".cscore").index($target.closest(".cscore")),
                    anProps = {
                        link: $target[0],
                        linkPos: ["scores_drawer", props[3], placement + 1].join(":"),
                        sport: props[1]
                    };
                if (navigator.userAgent.match(/Android/) && window.espn_ui.device.isMobile) {
                    var src = getDefaultSrc(anProps);
                    $.get(src).always(function() {
                        var href = $target.data("popup-href");
                        href && (window.location.href = href)
                    })
                } else {
                    var show = $target.data("show");
                    window.omniTrackingName = ["scores_drawer", show, "score_cell"].join(":"), linkTrack(anProps)
                }
            } else linkTrack({
                link: $target[0],
                linkPos: name
            })
        }

        function trackFavStripEvt(e) {
            var $target = $(e.target.closest("a")),
                name = getLIDname($target.attr("name"));
            linkTrack({
                linkPos: name
            })
        }

        function trackFavsEvt(target, type) {
            var props, linkType, cardType = type || "clicked";
            "follow" != type ? (props = {
                league: target.data("leaguename"),
                sport: target.data("sportabbrev"),
                team: target.data("teamname"),
                teamId: target.data("teamid"),
                events: /added|removed/.test(cardType) ? "event5" : null
            }, linkType = target.data("type")) : (linkType = "follow", cardType = target.followed ? "follow" : "unfollow", cardType = target.rejected ? "rejected" : cardType, props = {
                lpos: target.trackingTag,
                pos: target.pos,
                league: target.leagueName,
                team: target.teamName,
                teamId: target.teamId,
                sport: target.sportAbbrev
            }), /picker/.test(cardType) && (props.personalize = null), trackFavs(props, linkType, cardType)
        }

        function trackFavs(props, ltype, ctype) {
            var linkType = ltype || "added",
                cardType = ctype || "suggested",
                label = "favorites",
                d = ":",
                anData = analytics().omniture || {},
                type = anData.contentType,
                sport = props.sport,
                league = props.league,
                team = props.team,
                teamId = props.teamId,
                p = {
                    link: "true",
                    channel: anData.section,
                    prop5: anData.sections
                };
            "follow" === linkType ? (p.linkPos = props.lpos.replace("&lpos=", ""), p.linkPos = p.linkPos.replace("xx", props.pos), p.linkPos += ":" + cardType, p.sportsInfo = [sport, "teamId=" + teamId + "-" + props.team].join(d), p.personalize = [label, linkType, props.teamId + "-" + props.team].join(d)) : team || "clubhouse" === type ? ("clubhouse" === type ? p.linkPos = [anData.section, "TeamClubhouse:AddFavorite"].join(d) : p.linkPos = [label, cardType, linkType, team].join(d), p.sportsInfo = [label, team].join(d), p.personalize = [label, linkType, team].join(d)) : (p.linkPos = [label, cardType, linkType].join(d), p.personalize = [label, linkType].join(d)), sport && (p.sport = sport, p.convrSport = sport), league && (p.league = league), linkTrack(p)
        }

        function trackFavsManage(target, type, label) {
            var sections = [],
                anData = analytics().omniture || {},
                prefix = "manage:favorites",
                prefix2 = "favorites:manage",
                league = target.data("league"),
                team = target.data("team"),
                linkPos = [prefix],
                p = {
                    events: "event5",
                    loginStatus: espn && espn.memberservices ? espn.memberservices.loginStatus : "",
                    lang: anData.lang || "",
                    pageName: null
                };
            if ("fp:feed" === type ? linkPos = [] : "reorder" === type ? linkPos.push("my") : "hide" === type && "" !== label && linkPos.push("my:fantasy"), linkPos.push(type), "" !== label && linkPos.push(label), (league || team) && (league && sections.push(league), team && (sections.push(team), linkPos.push("team"))), p.linkPos = linkPos.join(":"), sections = sections.join(":"), p.sportsInfo = sections, p.league = league, "nav" === type && label.indexOf("close") !== -1) p.events = null, p.personalize = prefix2 + ":exit";
            else if ("hide" === type) "" === label ? p.personalize = "favorites_hide" : (p.personalize = prefix2 + ":hide", p.insiderStatus = espn.memberservices.insiderStatus);
            else if ("reorder" === type) p.personalize = prefix2 + ":reorder";
            else if ("search" === type) {
                var searchTerm = $(".favoritesMgmt__searchContainer .search-box").val().toLowerCase(),
                    numResults = target.closest("ul>li").length,
                    contentType = "searchresults";
                p.events = "event2,event5", p.section = type, p.contentType = consolidateContentType(contentType), p.regType = espn.memberservices && espn.memberservices.regType || null, p.premium = anData.premium ? "Y" : "N", p.srchTerm = searchTerm, p.srchNumResults = numResults, p.espn3ContentType = [contentType, anData.site, type].join(":"), p.fantasyPersonalize = espn.track.favStatus
            } else p.personalize = "favorites_" + type + ("remove" === type && "" !== label ? "_" + label : "");
            linkTrack(p)
        }

        function trackBloom(e) {
            if (e && e.target) {
                updateOneFeedIndex(e, "now");
                var $link = $(e.target),
                    section = ("" !== $body.attr("data-sport") ? "index" : "hp") + "-now",
                    $article = $link.closest("article").length > 0 ? $link.closest("article") : $link.closest("a[data-behavior='module_bloom']"),
                    placement = $article.data("index") || $article.data("pos"),
                    $parent = $article.find(".now-share ul").length > 0 ? $article.find(".now-share ul") : $article,
                    artId = $parent.data("id"),
                    artTitle = $parent.data("name"),
                    artType = $parent.data("type"),
                    nowId = $article.data("id"),
                    nowType = "video" === artType ? "now-video" : artType,
                    label = "video" === artType ? "video-bloom" : "image-bloom",
                    oneFeedItemTierType = $link.closest("[data-tier-type]").data("tier-type"),
                    $card = $(e.currentTarget),
                    $cardType = $card.attr("data-type");
                if ($body.attr("data-pagetype") && "scoreboard" === $body.attr("data-pagetype") && "miniCard" !== $cardType) section = $body.attr("data-sport") + "-scoreboard-now";
                else if ((null != oneFeedItemTierType || "miniCard" === $cardType) && (section = "fp:feed:" + placement, "Tier1 - Private Ryan Carousel" === oneFeedItemTierType || "miniCard" === $cardType)) {
                    var carouselIndex = $link.closest("[data-index]").data("index");
                    label = "coll:carousel:" + carouselIndex, placement = "video"
                }
                globalPlacement = placement, globalNowId = artId, trackSocialShare({
                    link: $link[0],
                    linkPos: [section, label, placement].join(":"),
                    socialShare: [section, label, nowId].join(":"),
                    eVar29: oneFeedItemTierType
                }, artId, artTitle, nowType)
            }
        }

        function trackExternal($link, callback, type) {
            if ($link) {
                type = type || "";
                var anData = analytics().omniture || {},
                    name = $link.attr("name"),
                    linkPos = getLIDname(name),
                    p = {
                        link: $link[0],
                        linkPos: linkPos,
                        pageName: null
                    };
                "team" === type ? p.prop12 = anData.prop5 || "" : "nav" === type ? (p.events = "event3", p.channel = anData.section || "", p.prop5 = anData.sections || "") : p.linkType = "exit", linkTrack(p)
            }
            "function" == typeof callback && callback.call()
        }

        function stripEPlusLinkName(linkName, type) {
            return ":" === type ? linkName.match(/(\:)(?:.(?!\:))*$/) : "+" === type ? linkName.match(/(\+)(?:.(?!\+))*$/) : void 0
        }

        function trackEPlus(e, callback) {
            var target = e && e.target ? e.target : e;
            if (target) {
                var $link = e.target ? $(target).closest("a") : e,
                    contentId = $link.data("content-id"),
                    linkName = $link.attr("name"),
                    linkPos = linkName && getLIDname(linkName),
                    trackString = ["espnplus"];
                if ($link.closest(".quicklinks__container").length) {
                    var isFooter = $(target).closest("footer").length;
                    isFooter > 0 ? trackString.push("footer") : trackString.push("leftrail"), linkPos = stripEPlusLinkName(linkName, ":")[0], linkPos && (linkPos = linkPos.replace(":", ""))
                } else linkName.indexOf("sitenav") > -1 ? (trackString.push("globalnav"), linkPos = stripEPlusLinkName(linkName, "+")[0], linkPos && (linkPos = linkPos.replace("+", "")), "" === linkPos && (linkPos = "logo")) : linkName.indexOf("watch") > -1 ? (trackString.push("feed"), linkPos = stripEPlusLinkName(linkName, ":")[0], linkPos && (linkPos = linkPos.replace(":", ""))) : linkName.indexOf("rightrail") > -1 && (trackString.push("rightrail"), linkPos = "promo");
                linkPos && trackString.push(linkPos), contentId && trackString.push(contentId), trackString = trackString.join(":").replace("-", ":"), linkTrack({
                    link: $link[0],
                    linkPos: trackString,
                    linkName: trackString,
                    buyLocation: trackString
                }), "function" == typeof callback && callback.call()
            }
        }

        function trackBetting($link, callback) {
            if ($link) {
                var type = "betting",
                    anData = analytics().omniture || {},
                    name = $link.attr("name"),
                    gameId = $link.attr("data-game-id"),
                    gameInfo = $link.attr("data-game-info"),
                    gameInfo = gameInfo && gameInfo.split("_").join(" "),
                    linkPos = getLIDname(name),
                    bettingProvider = _.get(espn, ["i18n", "betting", "provider"]),
                    sport = $link.attr("data-sport") || anData.sport,
                    site = anData.site,
                    league = $link.attr("data-league") || anData.league,
                    pageName = anData.pageName,
                    section = anData.section,
                    referrer = linkPos.substring(8),
                    league = "no+league" === league ? section : league,
                    ref = "hsb" === referrer ? "header scoreboard" : referrer,
                    provider = "Bet 365" === bettingProvider ? "bet365" : bettingProvider,
                    sitePage = [site, pageName].join(":");
                linkTrack({
                    link: $link[0],
                    linkPos: [site, league, sport, type, provider, ref, site, pageName].join(":"),
                    pageName: sitePage,
                    sport: sport,
                    convrSport: sport,
                    league: league,
                    prop5: [site, section].join(":"),
                    prop12: sitePage,
                    gameInfo: [gameId, gameInfo].join("+"),
                    prop2: s_omni.Util.cookieRead("SWID")
                })
            }
            "function" == typeof callback && callback.call()
        }

        function trackSearch(props, callback) {
            if (props) {
                var anData = analytics().omniture || {},
                    p = $.extend({
                        events: "event2",
                        section: anData.section || null,
                        pageName: null,
                        linkPos: [anData.pageName, "search"].join(":"),
                        contentType: anData.contentType || "story",
                        regType: espn.memberservices && espn.memberservices.regType || null,
                        premium: anData.premium ? "Y" : "N",
                        countryRegion: anData.countryRegion
                    }, props);
                p.srchKwd && (p.srchKwd = "man:" + p.srchKwd.replace(/\&amp;/g, "&")), p.srchTerm && (p.srchTerm = "man:" + p.srchTerm.replace(/\&amp;/g, "&"));
                var src = getDefaultSrc(p),
                    triggerCB = function() {
                        "function" == typeof callback && callback.call()
                    };
                $.get(src).done(triggerCB).fail(triggerCB)
            } else "function" == typeof callback && callback.call()
        }

        function trackSubscribe(evt) {
            var anData = analytics().omniture || {};
            "scoreboard" === anData.contentType && linkTrack({
                link: $(evt.target)[0],
                linkPos: [anData.section, "game", "subscribe"].join(":"),
                events: "event94"
            })
        }

        function track(data, init) {
            if (data) {
                var props = data.omniture || {},
                    premium = props.premium ? props.premium : "premium-no",
                    cb = data.chartbeat || {
                        domain: "espn.com",
                        loadPubJS: !1,
                        loadVidJS: !0
                    },
                    clink = espn.track.currentLink,
                    isInit = "undefined" == typeof init,
                    cbURL = cb.path ? espn.URL(cb.path, cb.domain) : null,
                    cbParts = cbURL && cbURL.split(cb.domain) || [],
                    newPath = cbParts.length > 0 ? cbParts[1] : cbParts[0],
                    p = $.extend({
                        exec: 0,
                        cbSettings: {
                            sections: cb.sections,
                            authors: props.contentType || "",
                            site: cb.sections,
                            pagename: cb.title || props.pageName,
                            path: newPath
                        },
                        enableCB: isEnabled(isInit, !0, props.enableCB),
                        enableNielsen: isEnabled(isInit, !0, props.enableNielsen),
                        enableCTO: isEnabled(data.cto, !0),
                        timeParting: "DoNotSet"
                    }, props),
                    callOmni = function() {
                        var ems = espn.memberservices || {},
                            insider = ems.insider ? ems.insider : "insider-no",
                            loginStatus = ems.loginStatus ? ems.loginStatus : "anonymous",
                            year = ems.bYear ? ems.bYear : "unknown",
                            gender = ems.gender ? ems.gender : "unknown",
                            age = ems.bDate ? ems.bDate : "unknown",
                            key = [year, gender, loginStatus, insider, premium].join(":"),
                            regType = ems.regType ? ems.regType : "unknown",
                            device = window.espn_ui.media_query_in_use;
                        p.insiderStatus = insider + ":" + premium, p.birthAge = age, p.gender = gender, p.loginStatus = loginStatus, p.userKey = key, p.regType = regType, p.premium = premium, p.fantasyPersonalize = espn.track.favStatus, p.orientation = orient, p.deviceInfo = orient, p.site && (window.omniSite = p.site), p.pageName && (window.omniPageName = [p.site, p.pageName].join(":")), "frontpage" === p.section && (p.list3 = setList3()), espn.gamepackage && $("#gamepackage-tunein").hasClass("mvpd-eplus espn-plus upsell") && "mobile" !== device && (p.events = "event145");
                        var dtcEntitlements = espn.storage.getItem("dtcEntitlements");
                        dtcEntitlements && (p.list1 = decodeURIComponent(dtcEntitlements)), espn.track.trackPage(p)
                    };
                if (p.account && (window.s_account = p.account), null !== clink) {
                    var isInline, isEditorsPicks, isArticle, clinkName = clink.name;
                    if (clinkName && (isInline = clinkName.indexOf(":inline") > -1, isEditorsPicks = clinkName.indexOf(":editorspicks") > -1, isArticle = "story" === data.omniture.contentType || "blog" === data.omniture.contentType, (!isInline || isInline && isArticle) && (p.linkGroup = getLIDname(clinkName), setLIDCookie(clinkName))), p.linkGroup && isInline && isArticle) {
                        if (!isEditorsPicks) {
                            var linkPositionNumber = p.linkGroup.split(":").pop(),
                                newName = "&lpos=" + data.omniture.league + ":" + data.omniture.contentType + ":inline:" + linkPositionNumber;
                            p.linkGroup = getLIDname(newName), setLIDCookie(newName)
                        }
                        p.navMethod = data.omniture.contentType + ":inline"
                    }
                    clink.tierType ? (p.eVar29 = clink.tierType, p.navMethod = "OneFeed") : clink.section && (p.navMethod = clink.section)
                }
                "undefined" != typeof window.abtestData && window.abtestData.abTestValue && (p.abTestLabel = window.abtestData.abTestValue), callOmni(), 1 == window.isMENACountry ? _em.trackAjaxPageview() : initEffectiveMeasureTag(window.espn.geo), espn.track.currentLink = null
            }
        }

        function linkTrack(props) {
            if (props) {
                espn.track.clear();
                var anData = analytics().omniture || {},
                    p = $.extend({
                        prop1: anData.site || anData.prop1 || "espn",
                        link: "true",
                        pageName: anData.pageName || "",
                        timeParting: "DoNotSet",
                        eVar13: "DoNotSet",
                        orientation: orient,
                        deviceInfo: orient,
                        countryRegion: anData.countryRegion
                    }, props);
                p.srchKwd && (p.srchKwd = "man:" + p.srchKwd), p.srchTerm && (p.srchTerm = "man:" + p.srchTerm), espn.track.userClicked = !0, espn.track.trackLink(p)
            }
        }

        function deferredLinkTracking() {
            var deferredArguments = [],
                originalLinkTracking = espn.track.trackLink;
            espn.track.trackLink = function() {
                deferredArguments.push(arguments)
            };
            var undeferAnalyticsHandle = null,
                undeferAnalyticsTimeout = null,
                undeferAnalytics = function() {
                    null !== undeferAnalyticsHandle && ($.unsubscribe(undeferAnalyticsHandle), undeferAnalyticsHandle = null), null !== undeferAnalyticsTimeout && (clearTimeout(undeferAnalyticsTimeout), undeferAnalyticsTimeout = null), espn.track.trackLink = originalLinkTracking, deferredArguments.forEach(function(deferredArguments) {
                        espn.track.trackLink.apply(window, deferredArguments)
                    }), deferredArguments = []
                };
            undeferAnalyticsHandle = $.subscribe("omni.pageTracked", undeferAnalytics), undeferAnalyticsTimeout = setTimeout(undeferAnalytics, 15e3)
        }

        function getDefaultSrc(props) {
            if (props) {
                espn.track.clear();
                var anData = analytics().omniture || {},
                    p = $.extend({
                        link: "true",
                        prop1: anData.site || anData.prop1 || "espn",
                        pageName: anData.pageName || "",
                        eVar13: "DoNotSet",
                        orientation: orient,
                        deviceInfo: orient,
                        countryRegion: anData.countryRegion
                    }, props);
                return espn.track.getTracklinkImgSrc(p)
            }
        }

        function bindEvents() {
            var delegate;
            $(document).off("click", ".eplus-promo-link", trackEPlus).on("click", ".eplus-promo-link", trackEPlus), $(document).off("click", ".espn-plus-paywall-article", trackEPlus).on("click", ".espn-plus-paywall-article", trackEPlus), $(document).off("click", "a[name]", trackLinkClicked).on("click", "a[name]", trackLinkClicked), $(document).off("click", "#article-feed .inline-track a", trackLinkClicked).on("click", "#article-feed .inline-track a", trackLinkClicked), $("#main-container article.article").length > 0 && (delegate = ".author-meta a", updateFeedIndexes("minifeed"), $(document).off("click", delegate, trackStorySocial).on("click", delegate, trackStorySocial)), delegate = "#scoreboard-page .btn-subscribe", $(document).off("click", delegate, trackSubscribe).on("click", delegate, trackSubscribe), delegate = "#now-feed .now-feed-content .now-content a, .lightbox-container .lightbox.module_bloom.js-bloomed p a", $(document).off("click", delegate, trackNowCardLinkClicked).on("click", delegate, trackNowCardLinkClicked), delegate = "#global-scoreboard .scores-carousel .cscore_button", $(document).off("click", delegate, trackScoreButton).on("click", delegate, trackScoreButton), delegate = "#personalized-one-feed.one-feed-wrapper a", $(document).off("click", delegate, trackLinkClicked).on("click", delegate, trackLinkClicked), updateFeedIndexes()
        }

        function initEvents() {
            function trackMobileEvt(link, lid) {
                $(link).closest("a").attr("name", [prefix, lid].join("+")), linkTrack({
                    link: "true",
                    linkPos: prefix,
                    linkId: lid
                })
            }
            var prefix = "sitenavdefault";
            if ("mobile" === device && window.Modernizr.touch && ($(document).on("click", "#global-nav-mobile-trigger", function() {
                    0 !== $("#global-header").find(".menu-overlay-secondary.active").length && trackMobileEvt(this, "click+nav_drawer");
                }), $("#global-nav-secondary").on("click", "a", function() {
                    if (0 === $(this).parent("li.active").length) {
                        var label = $(this).find(".link-text").text().toLowerCase();
                        trackMobileEvt(this, "click+" + label)
                    }
                }), $(document).on("click", "#global-scoreboard-trigger", function() {
                    var link = $(this).text() || "";
                    if ("close" === link.toLowerCase()) {
                        trackMobileEvt(this, "open+scores");
                        var anData = analytics();
                        anData.omniture = anData.omniture || {}, anData.omniture.contentType = "scoreboard", anData.omniture.pageName = anData.omniture.sections + ":scores", track(anData)
                    }
                })), $(document).on("click", "a.btn-subscribe div", function(e) {
                    var anData = analytics().omniture || {};
                    "scoreboard" === anData.contentType && linkTrack({
                        link: $(e.target)[0],
                        linkPos: [anData.section, "game", "subscribe"].join(":"),
                        events: "event94"
                    })
                }), "desktop" !== device) {
                var event, w = window,
                    orientEvent = "resize",
                    updateOrientation = function() {
                        var width = w.innerWidth || $(w).width(),
                            height = w.innerHeight || $(w).height();
                        orient = width >= height ? "Landscape" : "Portrait"
                    };
                w.addEventListener ? (event = document.createEvent("Event"), event.initEvent(orientEvent, !0, !0), w.addEventListener(orientEvent, updateOrientation, !1), w.dispatchEvent(event)) : w.attachEvent && (event = document.createEventObject(w.event), w.attachEvent("on" + orientEvent, updateOrientation), w.fireEvent(orientEvent, event))
            }
            espn.track.exitLinkHandler[0] = /http(s)?\:\/\/(search.)?espn.go.com|grantland.com|fivethirtyeight.com/i, espn.track.exitLinkHandler[1] = /(facebook.com\/sharer.php)|(twitter.com\/intent\/((re)?tweet|favorite))|(sendtofriend.espn.go.com)|(pinterest.com)|(whatsapp\:\/\/send)/i, bindEvents()
        }

        function initABTest(data) {
            if (data) {
                var abdata = data && data.ABTest || null;
                if (abdata && (abdata.target && abdata.isTargeted && ("function" == typeof window.mboxUpdate ? window.mboxUpdate("ESPN_global") : abdata.tScript && $.getScriptCache(abdata.tScript, function() {
                        $body.prepend('<div id="mboxEle" class="mboxDefault"></div>'), window.mboxDefine("mboxEle", "ESPN_global"), window.mboxUpdate("ESPN_global")
                    })), abdata.optimizely && abdata.isOptimizied)) {
                    var runOpt = function(init) {
                        init && (window.optimizely = window.optimizely || []), "undefined" == typeof window.optimizelyConditionalListener || window.optimizelyConditionalListening || window.optimizelyConditionalListener(), window.optimizely.push({
                            type: "activate"
                        }), $(window).trigger("optimizely-activate")
                    };
                    "undefined" != typeof window.optimizely ? runOpt() : abdata.oScript && $.getScriptCache(abdata.oScript, function() {
                        runOpt(!0)
                    })
                }
            }
        }

        function setList3() {
            var $container = $($(".main-content").hasClass("one-feed") ? "#news-feed" : "#news-feed-content"),
                selector = "mobile" === device ? defaultSel : desktopSel,
                count = 1,
                delegate = $container.find(selector),
                listArray = [],
                anData = analytics().omniture || {},
                section = anData.section || "";
            return delegate.each(function() {
                var $item = $(this);
                if ("frontpage" == section && count <= 10) {
                    var isPersonalized = !1,
                        pos = count < 10 ? "0" + count : count,
                        personalized = $item.attr("data-personalized") || $item.find("article").attr("data-personalized") || $item.attr("data-id") && (0 === $item.attr("data-id").search("scores-collection")).toString(),
                        isPersonalized = "true" === personalized ? "p" : "e",
                        id = $item.attr("data-now-id") ? $item.attr("data-now-id").replace("-collection", "") : "noId";
                    if ("personalizedCarousel" === id) {
                        var slides = $(".miniCardCarousel__slide"),
                            slideCount = 0;
                        slides.each(function() {
                            slideCount < $item.attr("data-length") && (id = $(this).attr("data-now-id") || "noId", listArray.push(id + isPersonalized + pos)), slideCount++
                        })
                    } else listArray.push(id + isPersonalized + pos)
                }
                count++
            }), listArray.join(",")
        }

        function initEffectiveMeasureTag(espnGeo) {
            var countryArray = ["AE", "SA", "KW", "OM", "BH", "JO", "IR", "MA", "DZ", "TN", "SY", "PK", "YE", "QA", "TR", "LB", "IQ", "EG", "LY", "MR", "AF", "PS"];
            window.isMENACountry = !1, "undefined" != typeof espnGeo && espnGeo.getLocation().done(function(loc) {
                var countryCode = loc && loc.country && loc.country.isoCodeAlpha2;
                "string" == typeof countryCode && _.includes(countryArray, countryCode.toUpperCase()) && (window.isMENACountry = !0, function() {
                    var em = document.createElement("script");
                    em.type = "text/javascript", em.async = !0, em.src = "https://me-ssl.effectivemeasure.net/em.js";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(em, s)
                }())
            }).fail(function() {})
        }

        function fireMbox() {
            "undefined" != typeof adobe && "undefined" != typeof adobe.target && "function" == typeof adobe.target.getOffer && adobe.target.getOffer({
                mbox: "ESPN_NT_Global",
                success: function(offers) {
                    adobe.target.applyOffer({
                        mbox: "ESPN_NT_Global",
                        offer: offers
                    })
                },
                error: function(status, error) {
                    console && console.log
                }
            })
        }
        var $body = $("body"),
            device = "desktop",
            orient = "Desktop",
            nowCount = 1,
            feedCount = 1,
            globalPlacement = 1,
            globalNowId = "",
            defaultSel = "> .contentCollection, > div.contentItem,> article.contentItem:not(.is-headline),> section.contentItem:not(.is-headline,.contentItem--hidden),> .one-feed-wrapper > .items > .contentCollection,> .one-feed-wrapper > .items > article.contentItem",
            desktopSel = "> .contentCollection:not(.mobile-tablet-only),> article.contentItem:not(.is-headline,.mobile-headlines,.mobile-tablet-only),> section.contentItem:not(.is-headline,.mobile-headlines,.mobile-tablet-only,.contentItem--hidden),> .one-feed-wrapper > .items > .contentCollection,> .one-feed-wrapper > .items > article.contentItem,article.news-feed-item";
        fireMbox(), deferredLinkTracking(), window.espn = window.espn || {}, espn.memberservices = espn.memberservices || {}, espn.track = espn.track || {}, espn.track.data = espn.track.data || {}, espn.track.currentLink = null, espn.track.favStatus = "favorites:no|fantasy:no|league mgr:no|alerts:no|autostart:no", espn.track.userClicked = !1, espn.track.exitLinkTrackDisable = !0, espn.track.exitLinkHandler = [], espn.track.external = "on", espn.track.init = function(data) {
            if (data) {
                analytics(data);
                var anData = data.omniture || {},
                    site = anData.site || "espn",
                    cb = data.chartbeat || {
                        domain: "espn.com",
                        loadPubJS: !1,
                        loadVidJS: !1
                    },
                    cbURL = cb.path ? espn.URL(cb.path, cb.domain) : null,
                    cbParts = cbURL && cbURL.split(cb.domain) || [],
                    newPath = cbParts.length > 0 ? cbParts[1] : cbParts[0],
                    nb = {
                        key: espn.i18n && espn.i18n.editionKey
                    },
                    init_o = function() {
                        window.initTracking = $.noop, initEvents(), track(data, !0), initABTest(data, !0)
                    };
                anData.account && (window.s_account = anData.account), window.omniSite = site, anData.pageName && (window.omniPageName = [site, anData.pageName].join(":")), device = window.espn_ui.media_query_in_use.replace(/-lg/, ""), data.device && data.device !== device && (device = data.device), isEnabled(anData.enableCB, !0) && (cb.path = newPath, espn.track.initCB(cb)), isEnabled(anData.enableNielsen, !0) && espn.track.initNielsen(nb), isEnabled(anData.enableQualtrics, !1) && espn.track.qualtrics(), isEnabled(data.cto, !0) && (espn.track.initVISION(), espn.track.visionSeen()), getUserFavsStatus(), "" !== espn.memberservices.userData || espn_ui.error ? init_o() : $(document).on("user.parsed", init_o);
                var pagetype = $body.data("pagetype");
                !espn.video.autoplay || "index" !== pagetype && "story" !== pagetype || trackVideoPlayed()
            }
        }, $(document).on("page.load page.track", function(e, data) {
            if (data && data.analytics) {
                var anData = data.analytics;
                analytics(anData), track(anData), initABTest(anData), nowCount = 1, feedCount = 1
            }
        }), $(document).on("page.render", function(e, url, html, data, options) {
            if (data && data.ctoPofItems && "" != data.ctoPofItems) {
                var newCtoItems = data.ctoPofItems;
                newCtoItems && newCtoItems.length > 0 && (espn.track.ctoPofItems = newCtoItems)
            }
            "mobile" !== device && options && options.eventType && "firstLoad" !== options.eventType && "history" !== options.eventType ? data && data.analytics && (analytics(data.analytics), track(data.analytics)) : bindEvents()
        }), $(document).on("mobile.favorites.done", function() {
            $(document).off("click", "#favStrip a", trackFavStripEvt).on("click", "#favStrip a", trackFavStripEvt)
        }), $(document).on("history.change", function(e, state) {
            if (setLIDCookie("&lpos="), "mobile" === device && state && void 0 === state.analytics) {
                var tab = state.tabIndex || 1,
                    label = ["favorites", "news", "now"],
                    anData = analytics();
                anData.omniture = anData.omniture || {}, anData.omniture.contentType = "index-" + label[tab - 1], track(anData)
            }
        }), $(document).on("page.scroll", function(e, data) {
            if (fireMbox(), data && data.analytics) {
                var anData = data.analytics;
                anData.omniture = anData.omniture || {}, anData.omniture.eVar44 = "everscroll", setLIDCookie("&lpos=story:scroll+next_story"), analytics(anData), track(anData)
            }
        }), $(document).on("link.external", function(e, link, callback) {
            var $link = $(link),
                name = $link.attr("name"),
                href = $link.attr("href"),
                anData = espn.track.data.omniture;
            if (espn.track.currentLink || setCurrentLink($link), "undefined" == typeof name && (name = espn.track.currentLink.name), name) {
                var isTeam = !1,
                    className = $link.attr("class"),
                    isNav = $link.closest("#global-nav").length > 0;
                void 0 !== className && (isTeam = className.lastIndexOf("team") > -1), $link.attr("name", name), setLIDCookie(name), /((grantland|fivethirtyeight|theundefeated|xgames|secnetwork|secsports|espnw)(\.espn)?(\.go)?\.com)|(espn(\.go)?.com\/espnw\/)/.test(href) ? ($link[0].href = [href.split("?")[0], "?addata=", anData.site + ":" + anData.sections].join(""), trackExternal($link, callback)) : /^&lpos=betting/.test(name) ? trackBetting($link, callback) : $link.data("eplustrack") ? trackEPlus($link, callback) : isTeam || /news|score|clubhouse|matchup|preview|recap|liveupdate|boxscore|team|tickets|time/.test(name) ? trackExternal($link, callback, "team") : isNav && /sitenav(custom|default)|subnav|grantland|fivethirtyeight|theundefeated/.test(name) ? trackExternal($link, callback, "nav") : trackExternal($link, callback)
            } else "function" == typeof callback && callback.call()
        }), $(document).on("feed.load", function(e, data) {
            if (data) {
                var type = data.type ? data.type : "feed",
                    lposArr = [type],
                    anData = analytics().omniture || {},
                    count = "now" === type ? nowCount++ : feedCount++;
                if ("firstload" === data.trackType) return;
                if (!anData) return window.console.error("analytics not available on feed.load");
                anData.section && lposArr.push(anData.section), "minifeed" !== type && (lposArr.push("load-more-stories-" + Math.round(count)), linkTrack({
                    events: "feed" === type ? "event22" : null,
                    contentType: anData.contentType,
                    linkPos: lposArr.join(":")
                })), updateFeedIndexes(type)
            }
        }), $(document).on("link.favorites", function(e, evt, type, trackData) {
            var target;
            switch (type) {
                case "picker":
                    target = $(evt.target).closest(".fav-carousel");
                    break;
                case "undo":
                    target = $(evt.target).closest(".remove");
                    break;
                case "follow":
                    target = trackData;
                    break;
                default:
                    target = $(evt.target)
            }
            trackFavsEvt(target, type)
        }), $(document).on("manage.favs", function(e, evt, type, label) {
            evt && evt.target && trackFavsManage($(evt.target), type, label)
        }), $(document).on("link.bloom", function(e, evt, skipVideoTrack) {
            evt && ("undefined" != typeof skipVideoTrack && skipVideoTrack !== !1 || trackVideoPlayed(evt), trackBloom(evt))
        }), $(document).on("video.initialized", function(e, evt) {
            evt && (trackCTOConsumed($(evt.target)), trackVideoPlayed(evt))
        }), $(document).on("link.scoreboard link.carousel link.schedules", function(e, evt, type, callback, season, value) {
            var linkPos, linkArray = [],
                props = {},
                link = $(evt.target).closest("a")[0] || !0,
                filter = "day",
                label = "filter",
                linkSeason = season || "",
                linkVal = value || "",
                anData = analytics().omniture || {},
                section = anData.sections || "",
                pl = $(evt.target).closest("article").data("pos"),
                pl2 = $("#schedule-page").data("behavior"),
                page = pl ? "carousel" : pl2 ? "schedule" : "scoreboard",
                isCarousel = "carousel" === page || section.indexOf("game") > -1;
            switch (type) {
                case "prev":
                    filter = isCarousel ? "videostripe:leftarrow" : "previous-week";
                    break;
                case "next":
                    filter = isCarousel ? "videostripe:rightarrow" : "next-week";
                    break;
                default:
                    filter = isCarousel ? "videostripe:play" : type
            }
            if (!("play" === type && section.indexOf("game:game") > 0)) {
                if (section && linkArray.push(section), label && linkArray.push(label), isCarousel) {
                    if (pl && linkArray.push(pl), filter && (linkArray.push(filter), "play" === type)) {
                        var video = $(evt.target).closest("div.item.slick-slide"),
                            videoPos = parseInt(video.data("index")) + 1;
                        linkArray.push(videoPos)
                    }
                } else "schedule" === page ? (linkSeason && linkArray.push(linkSeason), filter && linkArray.push(filter), linkVal && linkArray.push(linkVal)) : filter && linkArray.push(filter);
                if (linkPos = linkArray.join(":"), props.pageName = anData.site + ":" + anData.pageName, props.link = link, props.linkPos = linkPos, setLIDCookie("&lpos=" + linkPos), "function" == typeof callback) {
                    var src = getDefaultSrc(props);
                    $.get(src).always(function() {
                        callback.call()
                    })
                } else linkTrack(props)
            }
        }), $(document).on("tab.track", function(e, evt, type, label) {
            var anData = analytics().omniture || {};
            switch (label && (label = label.replace(/ /g, "+")), "tabs" === type && anData.contentType && (type = anData.contentType), type) {
                case "scoreboard":
                    var p = {
                        linkPos: [anData.sections, label].join(":")
                    };
                    if ("pickcenter" === label) {
                        var insider = espn.memberservices.insider.replace("insider-", "");
                        espn.core.loggedIn && "no" === insider && (p.events = "event8")
                    }
                    linkTrack(p);
                    break;
                case "favorites":
                    $(document).trigger("manage.favs", [e, "nav", label]);
                    break;
                case "clubhouse":
                    var article = $(evt.target).closest("article"),
                        section = $(evt.target).closest("section"),
                        target = section.length > 0 ? section : article,
                        linkPos = [anData.section, "TeamClubhouse"];
                    if (target.length > 0) {
                        var module = target.data("module");
                        void 0 !== module && linkPos.push(module)
                    }
                    linkPos.push(label), linkTrack({
                        linkPos: linkPos.join(":")
                    })
            }
        }), $(document).on("track.search", function(e, evt, type, props, callback) {
            "submit" === type ? trackSearch(props, callback) : "open" === type ? linkTrack(props) : "function" == typeof callback && callback.call()
        }), $(document).on("link.ajax", function() {
            fireMbox()
        }), $(document).on("link.scoreboard link.carousel link.schedules link.ajax", function() {
            window.s_omni && (window.s_omni.referrer = "")
        }), $(document).on("link.slick-arrow", function(e, cardInfo) {
            var p;
            if ("MiniCards" === cardInfo.type) {
                var card = cardInfo.card,
                    pageNum = $(card).attr("data-track-pos"),
                    arrowLink = "fp:feed:" + pageNum + ":coll:carousel:arrow";
                p = {
                    linkPos: arrowLink
                }
            } else {
                var card = cardInfo.card,
                    cardNum = $(card).closest(".favfeed_item").attr("data-track-pos"),
                    arrowDirection = "next" === cardInfo.direction ? "rightarrow" : "leftarrow",
                    arrowLink = "favorites:team:user:score:" + cardNum + ":" + arrowDirection;
                p = {
                    linkPos: arrowLink
                }
            }
            linkTrack(p)
        }), $(document).on("link.insider", function(e, type) {
            var anData = analytics().omniture || {},
                edition = anData.site || anData.prop1 || "espn",
                pageVal = edition + ":memberservices:insideroverlay:" + type,
                p = {
                    pageName: pageVal,
                    section: "insider",
                    contentType: "insider",
                    prop5: edition + ":insider:" + type,
                    linkPos: pageVal
                };
            p.events = "subscribe" === type ? "event94" : "event99", linkTrack(p)
        }), $.subscribe("espn.video.complete", function() {
            var cPartner = $("figure.video.active").data("contributing-partner");
            cPartner && window.omniTrackingName && (cPartner = (cPartner + ":").toLowerCase(), 0 === window.omniTrackingName.indexOf(cPartner) && (window.omniTrackingName = window.omniTrackingName.replace(cPartner, ""), "undefined" != typeof espn_util && espn_util.find(espn, "video.player.playerElement.setModuleParams".split(".")) && espn.video.player.playerElement.setModuleParams({
                "espn-analytics": {
                    trackingName: window.omniTrackingName
                }
            })))
        }), $.subscribe("espn.social-clicks.share", function(evt, type, callback) {
            if (evt) {
                var trackClick = !0;
                evt.target && evt.target.dataset && (trackClick = "true" !== evt.target.dataset.notrack), $("#main-container article.article").length > 0 ? (trackClick && trackStorySocial(evt), updateFeedIndexes("minifeed")) : trackClick && trackPageSocial(evt), "function" == typeof callback && callback.call(this, evt)
            }
        })
    }(jQuery),
    function($, window) {
        function isVisible(obj) {
            var el = $("[data-id='" + obj.id + "']");
            if (el && el.offset && el.offset() && el.offset().top) {
                var elementTop = el.offset().top,
                    elementBottom = elementTop + el.outerHeight();
                return elementBottom > viewportTop && elementTop < viewportBottom
            }
            return !1
        }

        function getVisionItem(pofItem, pzncon_event) {
            var anData = espn.track.data || {},
                navMethod = "OneFeed",
                clubhouse = "",
                edition = "",
                feedVersion = "",
                pzncon_content_id = "",
                pzncon_content_id_type = "now";
            return pofItem.nowId ? pzncon_content_id = pofItem.nowId + "" : pofItem.id && (pzncon_content_id = pofItem.id + ""), pofItem.isPcc && (pzncon_content_id_type = "pcc"), anData.omniture && (clubhouse = "no+league" !== anData.omniture.league ? anData.omniture.league : "", edition = anData.omniture.lang), {
                event_name: "pzncon",
                pzncon_event: pzncon_event,
                pzncon_content_id: pzncon_content_id,
                pzncon_content_id_type: pzncon_content_id_type,
                pzncon_edition: edition,
                pzncon_nav_method: navMethod,
                pzncon_clubhouse: clubhouse,
                pzncon_feed_version: feedVersion,
                pzncon_personalized: pofItem.pzncon_personalized,
                pzncon_curated: pofItem.pzncon_curated,
                pzncon_reason: pofItem.pzncon_reason,
                pzncon_rule: pofItem.pzncon_rule,
                pzncon_slot_position: pofItem.pzncon_slot_position,
                pzncon_presentation_type: pofItem.pzncon_presentation_type,
                pzncon_content_id_type: pzncon_content_id_type
            }
        }

        function initCheckInterval() {
            clearInterval(checkInterval), espn_ui.onefeed === !0 && (checkInterval = setInterval(function() {
                if (visionInitialized) {
                    var count = 0,
                        pofItems = _.get(espn, "track.ctoPofItems", []);
                    for (i = index; i < pofItems.length; i++) {
                        var isVisibleItem, item, pofItem = pofItems[i],
                            nowId = pofItem && pofItem.nowId,
                            id = pofItem && pofItem.id,
                            pzncon_content_id = nowId || id;
                        if ("undefined" == typeof espn.track.seen[pzncon_content_id] && (isVisibleItem = isVisible(pofItem), isVisibleItem && (item = getVisionItem(pofItem, "seen"), pzncon_content_id = item && item.pzncon_content_id, "undefined" == typeof espn.track.seen[pzncon_content_id] && (espn.track.seen[pzncon_content_id] = (new Date).getTime(), debugMode && window.console.log("* vision item", item), vision.track(item))), count += 1), index += 1, count >= max_items) break
                    }
                }
            }, 250), window.addEventListener("load", function(event) {
                function getVideoItem() {
                    var espnVideo = espn && espn.video,
                        espnVideoPlayer = espnVideo && espnVideo.player,
                        videoClip = espnVideoPlayer && espnVideoPlayer.clip;
                    if (espnVideoPlayer) {
                        var media_id, media_name;
                        videoClip && (videoClip.id && (media_id = videoClip.id), videoClip.headline && (media_name = videoClip.headline))
                    }
                    return {
                        media_id: media_id,
                        media_session_sequence_number: videoCount,
                        media_name: media_name
                    }
                }

                function getPlayer() {
                    return videoplayer = null, videoPlayers = window.videojs.getAllPlayers(), videoplayer = videoPlayers && videoPlayers[0], videoplayer
                }

                function trackVision(eventType) {
                    window.videojs && (playerInfo = getPlayer(), playerInfo && (playerInfo.metaData = getVideoItem(), playerInfo.vendor = "brightcove", vision.trackMedia({
                        name: playerInfo.id_,
                        player: playerInfo
                    }), debugMode && window.console.log("* vision item start " + videoCount + " vision media event " + eventType)))
                }
                var subscriptions = [],
                    videoCount = 1;
                subscriptions.push(espn.video.subscribe("espn.video.ad.load", function() {
                    trackVision("ad-load")
                })), subscriptions.push(espn.video.subscribe("espn.video.ready", function() {
                    trackVision("ready")
                })), subscriptions.push(espn.video.subscribe("espn.video.play", function() {
                    trackVision("play")
                }))
            }))
        }
        window.espn = window.espn || {}, espn.track = espn.track || {};
        var checkInterval, _ = window._,
            vision = new VISION,
            visionInitialized = !1,
            SWID = $.cookie("SWID"),
            UNID = $.cookie("UNID"),
            dtcAuth = $.cookie("dtcAuth"),
            debugMode = !1,
            viewportTop = $(window).scrollTop(),
            viewportBottom = viewportTop + $(window).height(),
            max_items = 7,
            index = 0;
        espn.track.initVISION = function() {
            if (espn.track.isVisionEnabled()) {
                var environment = espn && espn.i18n && espn.i18n.environment,
                    appUrl = "https://vision.fn-pz.com/v1/",
                    appAuth = "FD 99A1A348-351E-4A82-A010-712A4936B616:7A3912A1C4AD4611BCE354D569423CDC563EAEDC44FE47AF";
                window.espn.build || "";
                0 === environment.indexOf("qa") ? (appUrl = "https://vision.fn-pzqa.com/v1/", appAuth = "FD CA8E9124-D81B-4A9E-8AA9-CC1D3538820A:CE57E843F99B4663B05FAB87C933A52C5A1A94D051ED4576") : 0 === environment.indexOf("local") && (appUrl = "https://vision.fn-pzdev.com/v1/", appAuth = "FD CA8E9124-D81B-4A9E-8AA9-CC1D3538820A:CE57E843F99B4663B05FAB87C933A52C5A1A94D051ED4576");
                var app_name = (function() {
                    var parsedQuery = $.parseUri && $.parseUri(location.search);
                    return parsedQuery && parsedQuery.queryKey.ctoDebug && JSON.parse(parsedQuery.queryKey.ctoDebug || !0)
                }(), _.get(espn, "track.data.omniture.account"));
                if (debugMode && window.console.log("app_name", app_name), VISION.setConfigs({
                        app_bundle_id: "espn.com",
                        app_name: app_name,
                        app_platform: "web",
                        app_version: "0",
                        url: appUrl,
                        auth: appAuth,
                        debugMode: debugMode
                    }), visionInitialized = !0, debugMode && window.console.log("branch", "SEWEB-8336"), debugMode && window.console.log("vision init", new Date), null != SWID) {
                    var loggedIn = SWID.indexOf("{") >= 0;
                    VISION.addGuestId(SWID, "swid", loggedIn, "primary")
                }
                null != UNID && VISION.addGuestId(UNID, "unid", !1, "secondary"), null != dtcAuth && VISION.addSubscriptionId(SWID, dtcAuth)
            }
        }, espn.track.visionPageView = function() {
            if (visionInitialized) {
                var vision = new VISION,
                    anData = espn.track.data || {},
                    page_url = "";
                anData.omniture && (page_url = anData.omniture.pageURL);
                var visionParams = {
                    event_name: "page_view",
                    page_url: page_url
                };
                vision.track(visionParams)
            }
        }, espn.track.visionConsumed = function(visionPofItem) {
            if (visionPofItem && visionInitialized) {
                var item = getVisionItem(visionPofItem, "consumed");
                vision.track(item), debugMode && window.console.log("##### visionConsumed", item)
            }
        }, espn.track.seen = {}, initCheckInterval(), $(document).on("page.render", function(e) {
            initCheckInterval()
        }), espn.track.visionSeen = function() {
            if (visionInitialized) {
                var $window = $(window);
                index = 0, viewportTop = $window.scrollTop(), viewportBottom = viewportTop + $window.height()
            }
        }, espn.track.isVisionEnabled = function() {
            var visionEnabled = _.get(espn, "track.data.cto");
            return "function" == typeof window.VISION && !!visionEnabled
        }, $(window).on("windowresize.debounce", function() {
            espn.track.visionSeen()
        }), $(window).on("windowscroll.debounce", function() {
            debugMode && window.console.log("scroll stop", new Date), espn.track.visionSeen()
        })
    }(jQuery, window);