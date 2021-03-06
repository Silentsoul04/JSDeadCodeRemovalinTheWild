/*jshint smarttabs:true, curly:true, forin:true*/
"undefined" != typeof YAHOO && YAHOO || (YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, YAHOO.i13n.EventTypes = function() {
    function e(e, t, n) {
        this.yqlid = e, this.eventName = t, this.spaceidPrefix = n
    }
    var t = "richview",
        n = "contentmodification";
    e.prototype = {
        getYQLID: function() {
            return this.yqlid
        },
        getEventName: function() {
            return this.eventName
        }
    };
    var i = {
        pageview: new e("pv", "pageview", ""),
        simple: new e("lv", "event", "P"),
        linkview: new e("lv", "linkview", "P"),
        richview: new e(t, t, "R"),
        contentmodification: new e(t, n, "R"),
        dwell: new e("lv", "dwell", "D")
    };
    return {
        getEventByName: function(e) {
            return i[e]
        }
    }
}(), YAHOO.i13n.Rapid = function(e) {
    function t() {}

    function n(e) {
        this.map = {}, this.count = 0, e && this.absorb(e)
    }

    function r() {
        this.map = {}, this.count = 0
    }

    function o(e, t) {
        if (!e) return null;
        null === t && (t = !1);
        var n = new r,
            i = G.getAttribute(e, G.data_action_outcome);
        i && n.set("outcm", i);
        var o = G.getAttribute(e, "data-ylk");
        if (null === o || 0 === o.length) return n;
        for (var a = o.split(G.ylk_pair_delim), l = 0, c = a.length; c > l; l++) {
            var s = a[l].split(G.ylk_kv_delim);
            if (2 === s.length) {
                var u = s[0],
                    d = s[1];
                null !== u && "" !== u && null !== d && (d.length > G.MAX_VALUE_LENGTH && (d = d.substring(0, G.MAX_VALUE_LENGTH)), u.length <= 8 && d.length <= G.MAX_VALUE_LENGTH && ("_p" !== u || t) && n.set(u, d))
            }
        }
        return n
    }

    function a(e, t, n) {
        return t > e ? t : e > n ? n : e
    }

    function l(t, n) {
        q.set("A_sid", YAHOO.i13n.A_SID || G.rand()), q.set("_w", G.rmProto(n).substring(0, G.MAX_VALUE_LENGTH)), t ? q.absorb(t) : e.keys && q.absorb(e.keys)
    }

    function c(e) {
        var t = YAHOO.i13n,
            n = YAHOO.i13n.TEST_ID || e.test_id,
            i = e.location || document.location.href;
        l(e.keys, i), n && (n = G.norm("" + n));
        var r = 300,
            o = 700,
            c = 1e4,
            u = e.override || {},
            d = {
                override: u,
                version: "3.30.2",
                rapidjp_version: "1.0.2",
                keys: q,
                referrer: e.referrer,
                getReferrer: function() {
                    return G.norm(G.clref("undefined" != typeof this.referrer ? this.referrer : document.referrer))
                },
                spaceid: G.norm(u.spaceid || YAHOO.i13n.SPACEID || e.spaceid),
                yrid: G.norm(e.yrid || ""),
                oo: e.oo ? "1" : "0",
                nol: e.nol ? "1" : "0",
                yql_enabled: e.yql_enabled !== !1,
                ywa: t.ywa ? s(e.ywa, t.ywa) : e.ywa,
                ywa_dpid: null,
                ywa_cf_override: t.YWA_CF_MAP || {},
                ywa_action_map: t.YWA_ACTION_MAP || {},
                ywa_outcome_map: t.YWA_OUTCOME_MAP || {},
                fing: 1 == e.use_fing,
                USE_RAPID: e.use_rapid !== !1,
                linktrack_attribut: e.lt_attr || "text",
                tracked_mods: e.tracked_mods || [],
                tracked_mods_viewability: e.tracked_mods_viewability || [],
                viewability: e.viewability || !1,
                viewability_time: e.viewability_time || 300,
                viewability_px: e.viewability_px || 50,
                lt_attr: e.lt_attr || "text",
                client_only: e.client_only,
                text_link_len: e.text_link_len || -1,
                test_id: n,
                yql_host: e.yql_host || "logql.yahoo.co.jp",
                yql_path: e.yql_path || "/v1/public/yql",
                click_timeout: e.click_timeout || c,
                compr_timeout: e.compr_timeout || o,
                compr_on: e.compr_on !== !1,
                compr_type: e.compr_type || "deflate",
                webworker_file: YAHOO.i13n.WEBWORKER_FILE || e.webworker_file || "rapidworker-1.2.js",
                nofollow_classname: e.nofollow_class || "rapidnofollow",
                no_click_listen: e.rapid_noclick_resp || "rapid-noclick-resp",
                nonanchor_track_class: e.nonanchor_track_class || "rapid-nonanchor-lt",
                anc_pos_attr: "data-rapid_p",
                anc_v9y_attr: "data-v9y",
                deb: e.debug === !0,
                ldbg: e.ldbg > 0 ? !0 : i.indexOf("yhldebug=1") > 0,
                addmod_timeout: e.addmodules_timeout || 300,
                ult_token_capture: "boolean" == typeof e.ult_token_capture ? e.ult_token_capture : !1,
                track_type: e.track_type || "data-tracktype",
                dwell_on: e.dwell_on === !0,
                async_all_clicks: e.async_all_clicks === !0,
                click_postmsg: e.click_postmsg || {},
                apv: e.apv !== !1,
                apv_time: e.apv_time || 500,
                apv_px: e.apv_px || 500,
                apv_always_send: e.apv_always_send === !0,
                ex: e.ex === !0,
                persist_asid: e.persist_asid === !0,
                track_right_click: e.track_right_click === !0,
                gen_bcookie: e.gen_bcookie === !0,
                skip_attr: e.skip_attr || "data-rapid-skip",
                parse_dom: e.parse_dom === !0,
                pageview_on_init: e.pageview_on_init !== !1,
                perf_navigationtime: e.perf_navigationtime || 0,
                perf_commontime: e.perf_commontime || null,
                perf_usertime: e.perf_usertime || null,
                perf_resourcetime: e.perf_resourcetime || 0,
                sample: e.sample || {},
                loc: i,
                init_callback: e.init_callback,
                use_http: e.use_http > 0 ? !0 : i.indexOf("yhlhttp=1") > 0,
                fpc: e.fpc === !0
            };
        d.ywa_action_map[YAHOO.i13n.EventTypes.getEventByName("richview").getEventName()] = 100, !d.ywa || d.ywa.project_id && 0 != d.ywa.project_id && G.isNumeric(d.ywa.project_id) || (p("Invalid YWA project id: null or not numeric."), d.ywa = null);
        var m = 1 * d.compr_timeout;
        return G.isNum(m) ? d.compr_timeout = a(m, r, o) : d.compr_timeout = o, d.ldbg && d.click_timeout != c && f("Click timeout set to " + d.click_timeout + "ms (default 10000ms)"), e.apv_callback && "function" == typeof e.apv_callback ? d.apv_callback = e.apv_callback : d.apv_callback = null, d
    }

    function s(e, t) {
        var n = {};
        if (e && G.isObj(e))
            for (var i in e) G.hasOwn(e, i) && (n[i] = e[i]);
        if (t && G.isObj(t))
            for (var i in t) G.hasOwn(t, i) && (n[i] = t[i]);
        return n
    }

    function u() {
        q.set("A_sid", G.rand())
    }

    function d() {
        return "Rapid-" + K.version + "(" + (new Date).getTime() + "):"
    }

    function f(e) {
        console.warn("RAPID WARNING: " + e)
    }

    function p(e) {
        console.error("RAPID ERROR: " + e)
    }

    function m(e) {
        K.ldbg && console.log(d() + e)
    }

    function v() {
        var e = document.cookie;
        if (this.cookieMap = {}, /[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(e))
            for (var t = e.split(/;\s/g), n = null, i = null, r = null, o = 0, a = t.length; a > o; o++) {
                if (r = t[o].match(/([^=]+)=/i), r instanceof Array) try {
                    n = G.dec(r[1]), i = G.dec(t[o].substring(r[1].length + 1))
                } catch (l) {
                    p(l)
                } else n = G.dec(t[o]), i = n;
                ("B" === n || "BX" === n || "TT" === n || K && K.ywa && n === "fpc" + K.ywa.project_id || "fpc" === n || "ywandp" === n || 0 === n.indexOf("ywadp") || "D" === n || "_ga" === n || "yx" === n || "rx" === n) && (this.cookieMap[n] = i)
            }
    }

    function h() {
        if (K.ult_token_capture && YAHOO.i13n.__handled_ult_tokens__ !== !0) {
            YAHOO.i13n.__handled_ult_tokens__ = !0;
            var e = K.loc;
            if (e.match(/;_yl[a-z]{1}=/)) K.ldbg && m("Found ULT Token on URL."), J.sendGeoT(e);
            else {
                var t = new v,
                    n = t.getCookieByName("D");
                n && (G.clearCookie("D", "/", ".yahoo.co.jp"), J.sendGeoT(n))
            }
        }
    }

    function _() {
        return Math.floor((new Date).valueOf() / 1e3)
    }

    function g(e, t, n) {
        var i = new Date,
            r = "";
        i.setTime(i.getTime() + 1e3 * n), r = "; expires=" + i.toGMTString();
        var o = e + "=" + t + r + "; path=/";
        document.cookie = o
    }

    function y() {
        return "" + Math.floor(4294967295 * Math.random())
    }

    function w(e) {
        var t, n = [];
        for (t in e) e[t] && n.push(t + ":" + e[t]);
        return encodeURIComponent(n.join(";"))
    }

    function b(e, t) {
        e = e || "";
        var n = decodeURIComponent(e).split(";"),
            r = {};
        for (i = 0, excl = n.length; i < excl; i++) {
            var o = n[i].split(":");
            r[o[0]] = o[1]
        }
        return t ? r[t] : r
    }

    function k() {
        function e(e) {
            var t = "cf";
            return t += 10 > e && "0" !== ("" + e).charAt(0) ? "0" + e : e
        }

        function t() {
            "undefined" != typeof window.ITTs && G.isArr(window.ITTs) && 0 !== window.ITTs.length || (window.ITTs = [{}]), window.ITTs[0].setFPCookies || (window.ITTs[0].setFPCookies = function() {
                var e = "fpc",
                    t = new v,
                    n = b(t.getCookieByName(e));
                n[K.ywa.project_id] = window.ITTs[0].FPCV, g(e, w(n), 31536e3);
                var i = t.getCookieByName(e + K.ywa.project_id);
                i && G.clearCookie(e + K.ywa.project_id)
            })
        }

        function i(e, t) {
            K.ldbg && m(e);
            var n = new Image,
                i = null;
            n.onload = n.onabort = n.onerror = function() {
                t && "function" == typeof t && (clearTimeout(i), t.call(null))
            }, n.src = e, t && "function" == typeof t && (i = setTimeout(function() {
                t.call(null)
            }, K.click_timeout)), setTimeout(function() {
                n = null
            }, 1e7)
        }

        function r(e, t) {
            for (var n in e)
                if (G.hasOwn(e, n)) {
                    var i = K.ywa_cf_override[n];
                    i && (t[i] = e[n])
                }
        }

        function o(n, i, o, a, l, c, s) {
            function u(e, t) {
                var n = t ? "%3B" : ";";
                return e + (o ? n + e : "")
            }
            var d = new v,
                f = d.getYWAFPC();
            d.getYWADPID(), a = a || {}, "c" !== n && t();
            var m = [G.curProto(), K.ywa.host || "logql.yahoo.co.jp", "/fpc.pl?"],
                h = K.ywa.project_id,
                g = K.ywa.document_group,
                y = {};
            K.test_id && (y[14] = K.test_id);
            var w = {};
            G.aug(w, O().getAll()), G.aug(w, c);
            var b = ["_cb=" + G.rand(), ".ys=" + K.spaceid, "a=" + h, "b=" + G.enc(K.ywa.document_name || document.title), "d=" + G.enc(new Date), "f=" + G.enc(K.loc), "j=" + G.sr("x"), "k=" + G.cold(), "t=" + _(), "l=true"];
            if (G.hasOwn(w, "A_apv") && b.push("apv=" + G.enc(w.A_apv)), s)
                for (var k in s) G.hasOwn(s, k) && b.push(k + "=" + G.enc(s[k]));
            if (g && "" !== g && b.push("c=" + G.enc(g)), K.ywa_dpid && b.push("dpid=" + K.ywa_dpid), "c" === n) {
                a.x = 12;
                var A = "12";
                o && (A = G.enc(A + ";" + o)), b.splice(0, 0, "x=" + A)
            } else "e" === n && b.push("x=" + i + (o ? ";" + o : ""));
            f && b.push("fpc=" + G.enc(f));
            var E = K.ywa.member_id;
            E && b.push("m=" + E), "" !== K.getReferrer() && b.push("e=" + G.enc(K.getReferrer())), r(w, y), "e" === n && l && r(l, y);
            var T = K.ywa.cf;
            G.aug(y, T, function(e) {
                return !G.isResCF(e)
            });
            for (var C in y) G.hasOwn(y, C) && b.push(e(C) + "=" + u(G.enc(y[C]), 1));
            if (("e" === n || "c" === n) && b.push("ca=1"), "p" !== n && b.push("resp=img"), "c" === n)
                for (var S in a)
                    if (G.hasOwn(a, S) && "x" !== S) {
                        var L = a[S];
                        L && L.length > G.MAX_VALUE_LENGTH && (L = L.substring(0, G.MAX_VALUE_LENGTH));
                        try {
                            L = G.enc(u(L)), L = L.replace(/'/g, "%27")
                        } catch (x) {
                            p(x)
                        }
                        b.push(e(S) + "=" + L)
                    }
            return m.join("") + b.join("&")
        }

        function a() {
            return "rapid_if_" + G.rand()
        }

        function l(e) {
            var t = "display:none;";
            !G.isIE || 6 !== G.ieV && 7 !== G.ieV && 8 !== G.ieV ? G.sa(e, "style", t) : e.style.setAttribute("cssText", t, 0)
        }

        function c(e) {
            var t = null;
            if (G.isIE && G.ieV <= 8) {
                var n = "";
                G.isSecure() && 6 == G.ieV && (n = 'src="https://logql.yahoo.co.jp/b.html"'), t = document.createElement("<iframe " + n + ' name="' + e + '"></iframe>')
            } else t = document.createElement("iframe");
            return t.name = e, t
        }

        function s() {
            setTimeout(function() {
                var e = c("");
                G.addEvent(e, "load", function() {
                    G.rmBodyEl(e)
                }), G.appBodyEl(e)
            }, 1)
        }

        function u(e, t) {
            var n = null,
                i = a(),
                r = a(),
                o = "application/x-www-form-urlencoded;charset=UTF-8",
                n = c(i),
                u = null,
                f = null,
                p = null,
                v = "load",
                h = function() {
                    var e = "";
                    K.ldbg && (!G.isIE || G.ieV >= 10) && (u = n.contentDocument || n.contentWindow.document, e = u.body.innerHTML), G.rmEvent(n, v, h), setTimeout(function() {
                        G.rmBodyEl(n)
                    }, 0), K.ldbg && m("iframe resp: " + e), G.isIE && G.ieV <= 7 && s()
                };
            l(n), G.appBodyEl(n), u = n.contentDocument || n.contentWindow.document, u.open(), u.close(), f = u.createElement("form"), l(f), f.id = r, f.method = "POST", f.action = d(t), f.target = i, G.isIE && G.ieV <= 7 ? f.setAttribute("enctype", o) : (f.setAttribute("enctype", o), f.setAttribute("encoding", o)), p = u.createElement("input"), p.name = "q", p.value = e, G.isIE && G.ieV >= 10 && (p.type = "submit"), f.appendChild(p), u.body.appendChild(f), u.charset = "UTF-8", G.addEvent(n, v, h), f.submit()
        }

        function d(e) {
            var t = K.deb,
                n = G.rand(),
                i = [G.getProto(), K.yql_host, K.yql_path, "?yhlVer=2&yhlClient=rapid&yhlS=", K.spaceid, t === !0 ? "&yhlEnv=staging" : "", t === !0 || K.ldbg ? "&debug=true&diagnostics=true" : "", G.isIE && G.ieV ? "&yhlUA=ie" + G.ieV : "", G.isIE && 8 == G.ieV ? "&format=json" : "", "&yhlCT=2", "&yhlBTMS=", (new Date).valueOf(), "&yhlClientVer=", K.version, "&yhlRnd=", n, "&yhlCompressed=", e || 0, K.gen_bcookie ? "&yhlBcookie=1" : ""].join("");
            return K.ldbg && m(i), i
        }

        function h(e, t) {
            var n = G.getXHR(),
                i = d(t);
            n.open("POST", i, !0), n.withCredentials = !0, n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), K.ldbg && (n.onreadystatechange = function() {
                4 === n.readyState && m(n.status + ":xhr response: " + n.responseText)
            }), n.send(e)
        }

        function y(e, t) {
            var n = document.createElement("script");
            n.src = d(t).replace(/&yhlCT=2/, "") + "&" + e + "&callback=void", n.type = "text/javascript", document.body.appendChild(n), document.body.removeChild(n)
        }

        function k(e, t, n) {
            var i = {};
            return G.isObj(e) ? (G.aug(i, e, n), i) : i
        }

        function A(e, t, n) {
            n = n || {};
            var i = {
                m: G.norm(e.moduleName),
                l: []
            };
            e.moduleYLK && (i.ylk = e.moduleYLK.getAll());
            for (var r = i.ylk && i.ylk.sec ? i.ylk.sec : "", o = e.links, o = e.links, a = function(e, n) {
                    var o = "_p" === e;
                    return t && o ? !0 : "sec" == e && n != i.m && n != r ? !0 : "sec" !== e && !o
                }, l = 0, c = o.length; c > l; l++) o[l] && (!K.viewability || o[l].viewable ? i.l.push(k(o[l].data, t, a)) : K.ldbg && m("Skipping not viewable link: " + o[l].data.slk));
            return i
        }

        function E(e, t, n) {
            var i = [],
                r = null;
            for (var o in e)
                if (G.hasOwn(e, o) && (r = e[o])) {
                    var a = A(r, t, n);
                    a.l.length > 0 ? i.push(a) : K.ldbg && m('Not capturing 0 links mod: "' + r.moduleName + '"')
                }
            return i
        }

        function T(e, t) {
            return e ? "pv" : t && t.event ? t.event.type.getYQLID() : "lv"
        }

        function C(e, t, n, i, r) {
            return [{
                t: T(t, r),
                s: K.spaceid,
                pp: O(t, i).getAll(),
                _ts: _(),
                lv: E(e, n, r)
            }]
        }

        function O(e, t) {
            var i = n.makeFromPP(K.keys);
            return i.absorb(t), e && i.set("A_", 1), i
        }

        function S(e, t, n) {
            var i = "select * from x where a = '" + e + "'";
            return (t ? "q=" : "") + (n ? G.enc(i) : i)
        }

        function L(e) {
            var t = {
                bp: Y(),
                r: e.call(0),
                yrid: K.yrid,
                optout: K.oo,
                nol: K.nol
            };
            return G.toJSON(t)
        }

        function x(e, t, n) {
            var i = {};
            n.event && G.aug(i, n.event.data), n.pp && G.aug(i, n.pp);
            var r = L(function() {
                return C([e], t, !0, i, n)
            });
            N(r, t)
        }

        function M(e, t, n, i) {
            var r = L(function() {
                return C(e, t, !0, n, i)
            });
            N(r, i)
        }

        function P(e) {
            return e.identifier
        }

        function N(e, t) {
            function n(e, n) {
                0 === n && (e = e.replace(/'/g, "\\'")), r && m("body: " + e), G.hasCORS() ? (o = S(e, !0, !0), t = t ? t : {}, t.use_jsonp !== !0 ? h(o, n) : y(o, n)) : (o = S(e, 0, 0), u(o, n))
            }

            function i() {
                c || (c = !0, n(e, 0), r && m("sent in failSend"))
            }
            var r = K.ldbg,
                o = "",
                a = z[K.compr_type];
            if (K.compr_on && G.hasWorkers() && a > 1 && e.length > 2048) {
                r && m("Looking for worker:" + K.webworker_file + ", compr timeout:" + K.compr_timeout);
                try {
                    var l = new Worker(K.webworker_file),
                        c = !1,
                        s = null,
                        d = 0;
                    l.onerror = function(e) {
                        clearTimeout(s), i(), f(e.message), l.terminate()
                    }, l.onmessage = function(t) {
                        clearTimeout(s);
                        var o = G.tms();
                        ("Decompress fail" === t.data || "Compress fail" === t.data || 0 == t.data.indexOf("error:")) && (r && m(t.data), i()), c || (c = !0, n(t.data, a)), r && m("Ratio (" + t.data.length + "/" + e.length + "): " + (100 * t.data.length / e.length).toFixed(2) + "% -> C_T: " + (o - d) + " ms (" + o + "-" + d + ")"), l.terminate()
                    }, r && m("posting to worker: " + e), d = G.tms(), l.postMessage({
                        type: a,
                        json: e
                    }), s = setTimeout(function() {
                        i(), l.terminate()
                    }, K.compr_timeout)
                } catch (p) {
                    r && m("compression worker exception " + p), n(e, 0)
                }
            } else n(e, 0)
        }

        function D(e, t, n) {
            return G.getProto() + j + "/" + e + ["?s=" + (n ? n : K.spaceid), "t=" + G.rand() + "," + Math.random(), "_I=" + K.yrid, "_AO=" + K.oo, "_NOL=" + K.nol, "_R=" + G.enc(K.getReferrer()), ("c" === e ? "_K=" : "_P=") + I(t)].join("&")
        }

        function I(e) {
            var t = new n(Y(!1));
            return t.absorb(K.keys.getAll()), t.set("_ts", _()), e && (e instanceof n ? t.absorb(e.getAll()) : p("Internal error in buildGeoPP: not PP type")), K.version + "%05" + t.ser()
        }

        function V(e) {
            var t = [D("c") + "&_C=" + G.ser(e.data)];
            return t.join("&")
        }

        function R(e, t) {
            var n = e[t];
            return n && G.isNum(n) && n >= 0 ? n : null
        }

        function H(e) {
            var t = G.getAttribute(e, G.DATA_ACTION),
                n = G.getAttribute(e, G.data_action_outcome);
            return null !== t ? R(K.ywa_action_map, t) : null !== n ? R(K.ywa_outcome_map, n) : null
        }
        var j = YAHOO.i13n.beacon_server || "logql.yahoo.co.jp",
            Y = function(e) {
                var t = {
                        _pl: 1,
                        A_v: K.version,
                        A_jpv: K.rapidjp_version
                    },
                    n = K.getReferrer();
                n && e !== !1 && (t._R = n.substring(0, G.MAX_VALUE_LENGTH)), K.test_id && (t.test = K.test_id), K.ex && (t._ex = 1), t._bt || (t._bt = "rapid");
                var i = window.location.protocol || "";
                return i = i.replace(/:$/, ""), t.A_pr = i, t.A_tzoff = (new Date).getTimezoneOffset(), t.A_tzoff = t.A_tzoff ? -1 * t.A_tzoff / 60 : 0, K.ywa && K.ywa.project_id && (t._ywa = K.ywa.project_id), t
            },
            U = function() {
                var e = null,
                    t = [],
                    n = 0,
                    i = K.addmod_timeout;
                return function(r, o, a, l) {
                    clearTimeout(e);
                    var c = +new Date - n;
                    if (t = G.uniqConcat(t, r, P), c > i) n = +new Date, M(t, o, a, l), t = [];
                    else {
                        var s = i - c;
                        e = setTimeout(function() {
                            K.ldbg && m("queueing send in addMods"), M(t, o, a, l), t = []
                        }, s)
                    }
                }
            }();
        return {
            sendGeoT: function(e) {
                var t = [G.curProto(), j, "/t?", e].join("");
                i(t)
            },
            sendGeoPV: function() {
                i(D("b"))
            },
            sendRapidNoDelay: function(e, t, r, o, a) {
                if (!K.yql_enabled || a) {
                    var l = null;
                    r && (l = new n(r)), i(D(t ? "b" : "p", l))
                } else M(e, t, r, o)
            },
            sendRapid: function(e, t, n, i) {
                U(e, t, n, i)
            },
            sendRefreshedContent: x,
            sendYWAEvent: function(e, t) {
                var n = null,
                    r = null,
                    a = e.name;
                K.ywa_action_map && a && (n = R(K.ywa_action_map, a)), null !== n && (K.ywa_outcome_map && e.outcome && (r = R(K.ywa_outcome_map, e.outcome)), i(o("e", n, r, null, e.data), t))
            },
            sendULTEvent: function(e, t) {
                var r = {};
                e && e.data && (r = e.data);
                var o = D("p", new n(r), t || 0);
                e.type && (o += "&_V=" + e.type.spaceidPrefix), i(o)
            },
            sendEvents: function(e, t) {
                K.USE_RAPID && this.sendULTEvent(e), K.ywa && this.sendYWAEvent(e, t)
            },
            sendClick: function(e, t) {
                var n = null,
                    a = "",
                    l = "",
                    c = null,
                    s = !1,
                    u = null;
                if (K.USE_RAPID && (a = V(e)), K.ywa) {
                    var d = e.data,
                        f = e.targetElement,
                        p = {
                            18: d.sec,
                            19: d.slk,
                            20: d._p
                        };
                    "A_cl" in d && (p[130] = d.A_cl), "A_lv" in d && (p[131] = d.A_lv), c = f ? H(f) : R(K.ywa_outcome_map, e.outcome), K.ywa_cf_override && r(d, p), l = o("c", 0, c, p)
                }
                if (K.async_all_clicks || !e.synch) return a && i(a, t), void(l && (a ? i(l) : i(l, t)));
                if (G.prevDef(e.event), n = function() {
                        if (!s) {
                            if (s = !0, t) return void t.call();
                            var n = e.targetElement.href;
                            if (K.click_postmsg.origin) {
                                var i = K.click_postmsg.window || top,
                                    r = K.click_postmsg.payload || {};
                                r.href = n, i.postMessage(G.toJSON(r), K.click_postmsg.origin)
                            } else if (G.isIE && G.ieV >= 11 || G.isEdge) "complete" !== document.readyState && history.pushState("", document.title), e.hasTargetTop ? top.document.location = n : document.location = n;
                            else {
                                var o = document.createElement("a");
                                if (o.href = e.targetElement.href, o.style.display = "none", e.targetElement.target && (o.target = e.targetElement.target), G.appBodyEl(o), o.dispatchEvent) {
                                    var a = document.createEvent("MouseEvents");
                                    a.initEvent("click", !0, !1), o.dispatchEvent(a)
                                } else o.click()
                            }
                        }
                    }, K.USE_RAPID)
                    if (K.ywa) {
                        var m = new Image,
                            v = new Image,
                            h = 0;
                        m.onload = m.onerror = m.onabort = v.onload = v.onerror = v.onabort = function() {
                            2 === ++h && (clearTimeout(u), n())
                        }, m.src = a, v.src = l, u = setTimeout(n, K.click_timeout), setTimeout(function() {
                            m = null, v = null
                        }, 1e7)
                    } else i(a, n);
                else K.ywa && i(l, n)
            },
            sendYWAPV: function(e) {
                function t() {
                    i[0].removeChild(a)
                }
                var n = o("p", 0, 0, 0, 0, e),
                    i = document.getElementsByTagName("head"),
                    r = "true";
                if (0 !== i.length) {
                    var a = G.make("script", {
                        defer: r,
                        async: r,
                        type: "text/javascript",
                        src: n
                    });
                    G.isIE ? a.onreadystatechange = function() {
                        var e = this.readyState;
                        ("loaded" === e || "complete" === e) && (a.onload = a.onreadystatechange = null, t())
                    } : G.isWebkit ? a.addEventListener("load", t) : a.onload = t, i[0].appendChild(a)
                }
            },
            sendInternalSearch: function(e, t) {
                e = e || "", G.isNum(t) || (t = 0);
                var n = {
                        isk: e,
                        isr: t
                    },
                    r = o("e", "INTERNAL_SEARCH", null, null, null, null, n);
                i(r)
            },
            sendYWAECommerce: function(e, t) {
                var n = {},
                    r = {
                        PRODUCT_VIEW: 1,
                        ADD_TO_CART: 1,
                        CANCELLED_SALE: 1,
                        PENDING_SALE: 1,
                        SALE: 1
                    },
                    a = {
                        amount: "xa",
                        orderId: "oc",
                        tax: "xt",
                        shipping: "xs",
                        discount: "xd",
                        sku: "p",
                        units: "q",
                        amounts: "r"
                    };
                if (!(e in r)) return void p("invalid YWA ecommerce action: " + e);
                for (var l in t)
                    if (G.hasOwn(t, l) && l in a) {
                        var c = a[l];
                        n[c] = t[l]
                    }
                "SALE" === e && (e = 1);
                var s = o("e", e, null, null, null, null, n);
                i(s)
            }
        }
    }

    function A(e, t, n, i, r, a, l, c) {
        var s = "",
            u = null,
            d = l ? G.isAboveFoldArea(i, c) : !0,
            f = {
                viewable: d,
                data: {
                    sec: t,
                    _p: n
                }
            };
        return l && G.aug(f.data, {
            A_lv: 1
        }), a ? (f.data.slk = r || "section", u = o(i)) : (i.setAttribute(K.anc_pos_attr, n), l && i.setAttribute(K.anc_v9y_attr, d ? "1" : "0"), s = G.getLT(i, e), s && "" !== s ? u = o(i) : s = "_ELINK_", s = "_", f.data.slk = r ? r : s), null !== u && G.aug(f.data, u.getAll()), f
    }

    function E() {
        var e = {};
        return {
            addModule: function(t, n) {
                e[G.norm(t)] = n
            },
            addModules: function(e, t) {
                var n = G.isArr(e),
                    i = t ? G.getScrollbarWidthHeight() : {},
                    r = [];
                n || G.isStr(e) && (e = new Array(e), n = !0);
                for (var o in e)
                    if (G.hasOwn(e, o)) {
                        var a = n ? e[o] : o,
                            l = G.trim(e[o]);
                        if (this.exists(a)) p('addModules() called with prev processed id:"' + a + '"');
                        else {
                            var c = D(l, a, t, i);
                            c && (this.addModule(a, c), r.push(c))
                        }
                    }
                return r
            },
            getModules: function() {
                return e
            },
            getModulesWithViewability: function() {
                var t = {};
                for (var n in e) {
                    var i = e[n];
                    i.useViewability && (t[n] = i)
                }
                return t
            },
            reevaluateModuleViewability: function() {
                var e = this.getModulesWithViewability(),
                    t = G.getScrollbarWidthHeight();
                for (var n in e) {
                    var i = e[n];
                    i.reevaluateViewableLinks(t)
                }
            },
            refreshModule: function(t, n, i, r) {
                var o = e[G.norm(t)];
                o ? o.refreshModule(t, n, i, r) : p("refreshModule called on unknown section: " + o)
            },
            removeModule: function(t) {
                var n = e[G.norm(t)];
                n && (n.removeHandlers(), delete e[t])
            },
            destroy: function() {
                for (var t in e) G.hasOwn(e, t) && this.removeModule(t);
                e = {}
            },
            exists: function(t) {
                return e[G.norm(t)]
            }
        }
    }

    function T(e, t) {
        return G.hasClass(e, "rapid_track_href") ? "href" : G.hasClass(e, "rapid_track_text") ? "text" : G.hasClass(e, "rapid_track_title") ? "title" : G.hasClass(e, "rapid_track_id") ? "id" : t
    }

    function C(e) {
        return "input" === e.nodeName.toLowerCase() && "submit" === G.getAttribute(e, "type")
    }

    function O(e, t) {
        var n = x(e, t);
        ee = n, n && (Z && Z.set_state("stop"), J.sendClick(n))
    }

    function S(e, t, n) {
        var i = G.getAttribute,
            r = t.target ? t.target.toLowerCase() : "_self";
        return "_self" !== r && "_top" !== r && "_parent" !== r && window.name !== r || 2 === e.which || 4 === e.button || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey || "on" === i(t, "data-nofollow") || i(t, "href") && "javascript:" === i(t, "href").substr(0, 11).toLowerCase() || G.hasClass(t, K.nofollow_classname) || G.hasClass(n, K.nofollow_classname)
    }

    function L(e, t, n, i) {
        n = n || {};
        var r = null;
        return e ? (r = YAHOO.i13n.EventTypes.getEventByName(e), n._E = r.getEventName(), t = n._E) : n._E = t || "_", i && (n.outcm = i), {
            type: r,
            name: t,
            data: n,
            outcome: i
        }
    }

    function x(e, t) {
        e = e || event;
        for (var n = G.getTarget(e), i = "button", r = "input", a = "", l = !1, c = null; n && (a = n.nodeName.toLowerCase()) && "a" !== a && a !== i && !C(n) && !G.hasClass(n, K.nonanchor_track_class);) n = n.parentNode;
        if (!n || G.hasClass(n, K.no_click_listen)) return 0;
        if (G.hasClass(n, K.nonanchor_track_class)) {
            c = {
                pos: 0,
                sec: t.moduleName,
                slk: "_"
            };
            var s = o(n, 1);
            s && G.aug(c, s.getAll())
        } else {
            var u = G.getAttribute(n, K.anc_pos_attr);
            if (c = t.getLinkAtPos(u), !c) return 0;
            c = c.data, a === r || a === i || S(e, n, t.moduleElement) || (l = !0)
        }
        if (!c.tar) {
            var d = G.getAttribute(n, "href");
            d && (c.tar = G.extDomain(d)), d && c.tar || (c.tar = G.extDomain(K.loc))
        }
        c.tar_uri || (n.pathname ? c.tar_uri = n.pathname.substring(0, G.MAX_VALUE_LENGTH) : c.tar_uri = "");
        var f = t.moduleYLK;
        if (f) {
            var p = f.getAll();
            G.aug(c, p, function(e) {
                return !(e in c)
            })
        }
        return c.A_xy = G.xy(e), c.A_sr = G.sr(), "contextmenu" == e.type && (c.A_cl = 3, l = !1), {
            data: c,
            event: e,
            moduleElement: t.moduleElement,
            targetElement: n,
            synch: l,
            hasTargetTop: n && n.target && "_top" === n.target.toLowerCase()
        }
    }

    function M(e, t, n, i, r) {
        var o = {};
        return G.aug(o, i), o.sec = e, o.slk = t, o._p = n, {
            data: o,
            outcome: r,
            event: null,
            moduleElement: null,
            targetElement: null,
            synch: !1,
            hasTargetTop: !1
        }
    }

    function P(e, t, n) {
        t || (t = document);
        for (var i = e.split(","), r = [], o = 0, a = i.length; a > o; o++)
            for (var l = t.getElementsByTagName(i[o]), c = 0, s = l.length; s > c; c++) {
                var u = l[c];
                (!n || n.call(0, u)) && r.push(u)
            }
        var d = r[0];
        return d ? (d.sourceIndex ? r.sort(function(e, t) {
            return e.sourceIndex - t.sourceIndex
        }) : d.compareDocumentPosition && r.sort(function(e, t) {
            return 3 - (6 & e.compareDocumentPosition(t))
        }), r) : []
    }

    function N(e, t, n, i) {
        t || (t = document);
        var r = e.split(",");
        n = n || [];
        var o = t.childNodes;
        if ("true" !== G.getAttribute(t, K.skip_attr))
            for (var a = 0, l = o.length; l > a; a++) {
                var c = o[a];
                G.isTagOfInterest(c, r) && (!i || i.call(0, c)) && n.push(c), "true" !== G.getAttribute(c, K.skip_attr) ? N(e, c, n, i) : "true" === G.getAttribute(c, K.skip_attr) && n.push(c)
            }
        var s = n[0];
        return s ? (s.sourceIndex ? n.sort(function(e, t) {
            return e.sourceIndex - t.sourceIndex
        }) : s.compareDocumentPosition && n.sort(function(e, t) {
            return 3 - (6 & e.compareDocumentPosition(t))
        }), n) : []
    }

    function D(e, t, n, i) {
        function r(t, r) {
            var a = [];
            r = r || 1;
            for (var l = 0, s = t.length; s > l; l++)
                if ("div" === t[l].tagName.toLowerCase()) {
                    var f = t[l],
                        p = o(f),
                        m = A(v, u.map.sec || e, 1, f, p.map.slk || u.map.slk, !0, n, i);
                    d[0] = m, a.push(m)
                } else {
                    var h = t[l],
                        m = A(v, u.map.sec || e, r, h, u.map.slk, 0, n, i);
                    d[r - 1] = m, a.push(m), r++
                }
            if ("true" === G.getAttribute(c, K.skip_attr)) {
                var m = A(v, u.map.sec || e, 1, f, u.map.slk, !0, n, i);
                d[0] = m, a.push(m)
            }
            return a
        }

        function a(t) {
            for (var n = [], r = 0, o = t.length; o > r; r++) {
                var a = t[r],
                    l = G.getAttribute(a, K.anc_pos_attr),
                    c = A(v, u.map.sec || e, l, a, u.map.slk, 0, !0, i);
                n.push(c)
            }
            return n
        }

        function l(e) {
            return !G.getAttribute(e, K.anc_pos_attr)
        }
        var c = document.getElementById(t),
            s = "a,button,input";
        if (!c) return f("Specified module not in DOM: " + t), null;
        var u = o(c),
            d = [],
            p = K.parse_dom ? N(s, c) : P(s, c),
            v = T(c, K.lt_attr),
            h = p.length,
            _ = G.getAttribute(c, K.track_type);
        r(p);
        var g = {
                useViewability: n,
                moduleYLK: u,
                links: d,
                moduleName: e,
                trackType: _,
                moduleElement: c,
                refreshModule: function(e, t, i, o) {
                    o.isRefreshed = !0;
                    var a = K.parse_dom ? N(s, G.$(e), null, l) : P(s, G.$(e), l);
                    if (t === !0 || a.length > 0) {
                        var c = r(a, h + 1);
                        h += a.length;
                        var u = a.length;
                        if (n) {
                            u = 0;
                            for (var d = 0, f = c.length; f > d; d++) c[d].viewable && u++
                        }
                        if ((t === !0 || u > 0) && (K.USE_RAPID || o.event)) {
                            var p = {};
                            G.aug(p, this), i ? p.links = c : p.links = [], (t === !0 || i) && J.sendRefreshedContent(p, t, o)
                        }
                    } else G.ldbg && m("refreshModule(" + e + ") - no new links.");
                    t === !0 && (K.ywa && J.sendYWAPV(o.pp), K.apv && $ && $.reInit())
                },
                reevaluateViewableLinks: function(t) {
                    var n = d.length,
                        i = P("a", this.moduleElement, function(n) {
                            return function(i) {
                                if (!G.getAttribute(i, K.anc_pos_attr)) {
                                    n++, i.setAttribute(K.anc_pos_attr, n);
                                    var r = A(v, u.map.sec || e, n, i, u.map.slk, 0, !1, t);
                                    d[n - 1] = r
                                }
                                var o = G.getAttribute(i, K.anc_v9y_attr);
                                return "1" !== o && G.isAboveFoldArea(i, t) ? (i.setAttribute(K.anc_v9y_attr, "1"), !0) : !1
                            }
                        }(n));
                    if (0 !== i.length && K.USE_RAPID) {
                        var r = a(i, t),
                            o = {};
                        G.aug(o, this), o.links = r, J.sendRefreshedContent(o, !1, {})
                    }
                },
                removeHandlers: function() {
                    G.rmEvent(c, "click", y), K.track_right_click && G.rmEvent(c, "contextmenu", y)
                },
                getLinkAtPos: function(e) {
                    return e > d.length ? null : d[e - 1]
                },
                identifier: t
            },
            y = function(e) {
                O(e, g)
            };
        return G.addEvent(c, "click", y), K.track_right_click && G.addEvent(c, "contextmenu", y), g
    }

    function I(e, t, i) {
        if (K.ldbg && m("beaconPageview called, pp=" + G.fData(e)), t && !K.persist_asid && u(), (K.USE_RAPID || K.apv_always_send && G.hasOwn(e, "A_apv")) && J.sendRapidNoDelay([], !0, e, null, i), K.ywa) {
            var r = n.makeFromPP(K.keys);
            r.absorb(e), J.sendYWAPV(r.getAll())
        }
        K.apv && null != $ && $.reInit()
    }

    function V(e, t, n, i) {
        K.ldbg && m('beaconEvent: event="' + e + '" data=' + G.fData(t) + " outcome=" + n);
        var r = L(0, e, t, n);
        J.sendEvents(r, i)
    }

    function R() {
        var e = null,
            t = (new Date).getTime(),
            n = t,
            i = G.getScrollY(),
            r = G.getScrollX(),
            o = -1,
            a = -1,
            l = !1,
            c = function() {
                var e = G.getScrollY(),
                    t = G.getScrollX(),
                    c = -1 === o ? e - i : e - o,
                    s = -1 === a ? t - r : t - a;
                (Math.abs(c) > K.viewability_px || Math.abs(s) > K.viewability_px || l) && (F.reevaluateModuleViewability(), o = e, a = t, n = (new Date).getTime(), l = !1)
            },
            s = function() {
                null != e && clearTimeout(e);
                var o = (new Date).getTime();
                o - t < K.viewability_time && (i = G.getScrollY(), r = G.getScrollX(), n = o), e = setTimeout(function() {
                    c()
                }, K.viewability_time)
            };
        F.refreshViewability = function() {
            l = !0, s()
        }, G.addEvent(window, "scroll", s), this.reInit = function() {
            i = G.getScrollY(), r = G.getScrollX(), o = -1, a = -1, t = n = (new Date).getTime()
        }, this.destroy = function() {
            G.rmEvent(window, "scroll", s)
        }
    }

    function H() {
        var e = null,
            t = lastApvTime = (new Date).getTime(),
            n = G.getScrollY(),
            i = -1,
            r = function() {
                var e = G.getScrollY(),
                    t = -1 === i ? e - n : e - i,
                    r = t > 0 ? 0 : 1;
                if (Math.abs(t) > K.apv_px) {
                    var o = {
                        A_apv: 1,
                        A_apx: e,
                        A_asd: r
                    };
                    I(o, !1, !0), i = e, lastApvTime = (new Date).getTime(), K.apv_callback && K.apv_callback.call(this, {
                        pixel_pos: e,
                        scroll_dir: r
                    })
                }
            },
            o = function() {
                null != e && clearTimeout(e);
                var i = (new Date).getTime();
                i - t < K.apv_time && (n = G.getScrollY(), lastApvTime = i), e = setTimeout(function() {
                    r()
                }, K.apv_time)
            };
        G.addEvent(window, "scroll", o), this.reInit = function() {
            n = G.getScrollY(), i = -1, t = lastApvTime = (new Date).getTime()
        }, this.destroy = function() {
            G.rmEvent(window, "scroll", o)
        }
    }

    function j() {
        var e, t, n = {
                focus: {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "window.focus"
                },
                pageshow: {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "window.pageshow"
                },
                "visibilitychange-visible": {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "document.visibilitychange"
                },
                blur: {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "window.blur"
                },
                pagehide: {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "window.pagehide"
                },
                "visibilitychange-hidden": {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "document.visibilitychange"
                },
                beforeunload: {
                    state: "stop",
                    etrg: "close",
                    etag: "dwell,stop",
                    jse: "window.beforeunload"
                }
            },
            i = "start";
        "undefined" != typeof document.hidden ? (e = "hidden", t = "visibilitychange") : "undefined" != typeof document.mozHidden ? (e = "mozHidden", t = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange");
        var r = function(r) {
            var o = "",
                a = r.type;
            if (r.type == t && (a = document[e] ? "visibilitychange-hidden" : "visibilitychange-visible"), G.hasOwn(n, a) && (o = n[a].state), 0 != o.length) {
                if (i == o) return void(K.ldbg && console.log("dwell: -- state already " + i + " (event=" + a + ")"));
                i = o;
                var l = n[a];
                K.ldbg && console.log("dwell: change state to " + i + " (event=" + a + ")");
                var c = {
                    etrg: l.etrg,
                    outcm: "window",
                    usergenf: 1,
                    etag: l.etag,
                    A_jse: l.jse
                };
                V("dwell", c, "")
            }
        };
        for (var o in n) n.hasOwnProperty(o) && G.addEvent(window, o, r);
        G.addEvent(window, t, r), this.set_state = function(e) {
            i = e
        }, this.destroy = function() {
            for (var e in n) n.hasOwnProperty(e) && G.rmEvent(window, e, r);
            G.rmEvent(window, t, r)
        }
    }

    function Y(e) {
        var t = 10;
        if (window.performance && window.performance.timing) {
            var n = e ? e.perf_navigationtime || 0 : K.perf_navigationtime || 0,
                i = e ? e.perf_resourcetime || 0 : K.perf_resourcetime || 0,
                r = e ? e.perf_commontime || null : K.perf_commontime || null,
                o = e ? e.perf_usertime || null : K.perf_usertime || null;
            if (!(1 > n && 1 > i) || r || o) {
                var a = G.hasOwn(K.sample, "perf_navigationtime") ? K.sample.perf_navigationtime : 100,
                    l = G.hasOwn(K.sample, "perf_resourcetime") ? K.sample.perf_resourcetime : 100,
                    c = G.samplingSuccess(a),
                    s = G.samplingSuccess(l);
                if (c || s) {
                    if (0 === window.performance.timing.loadEventStart) {
                        if (re += t, re > 200) return;
                        return void setTimeout(function() {
                            Y(e)
                        }, t)
                    }
                    var u = U(n, i, r, o, c, s),
                        d = L(0, "pageperf", u, "");
                    J.sendEvents(d)
                }
            }
        }
    }

    function U(e, t, n, i, r, o) {
        var a = {},
            l = window.performance.timing;
        if (r && e > 0 && (W(l.responseStart, l.connectEnd, a, "A_pfb"), W(l.responseEnd, l.responseStart, a, "A_pbp"), W(l.responseEnd, l.requestStart, a, "A_psr"), W(l.loadEventStart, l.navigationStart, a, "A_pol"), W(l.domInteractive, l.navigationStart, a, "A_pdi")), r && e > 1 && (W(l.redirectEnd, l.redirectStart, a, "A_prd"), W(l.domainLookupEnd, l.domainLookupStart, a, "A_pdl"), W(l.connectEnd, l.secureConnectionStart, a, "A_psh"), W(l.connectEnd, l.connectStart, a, "A_psc"), W(l.loadEventStart, l.responseEnd, a, "A_pfe")), o && t > 0 && "undefined" != typeof window.performance.getEntries) {
            var c = [],
                s = window.performance.getEntries();
            s.sort(function(e, t) {
                return e.duration > t.duration ? -1 : e.duration < t.duration ? 1 : 0
            });
            for (var u = s.slice(0, 10), d = u.length, f = 0; d > f; f++) {
                var p = {},
                    m = u[f].name.replace(/\?.+$/, "");
                m = m.replace(/^.+\//, ""), p.name = m, p.dur = Math.floor(u[f].duration), p.st = Math.floor(u[f].startTime), c.push(p)
            }
            a.A_res = G.sfy(c)
        }
        if (n && (G.hasOwn(n, "initialPageLoad") && (a.A_cmi = G.sfy(n.initialPageLoad)), G.hasOwn(n, "afterPageLoad") && (a.A_cma = G.sfy(n.afterPageLoad))), i)
            for (var v = ["utm"], f = 0; f < v.length; f++) G.hasOwn(i, v[f]) && (a.A_utm = G.sfy(i[v[f]]));
        return a.etrg = "backgroundPost", a.outcm = "performance", a.usergenf = 0, a.etag = "performance", a
    }

    function W(e, t, n, i) {
        if (e && t) {
            var r = e - t;
            n[i] = r
        }
    }

    function X() {
        h(), K.ldbg && m("tracked_mods: " + G.fData(K.tracked_mods));
        var e = F.addModules(K.tracked_mods, !1),
            t = F.addModules(K.tracked_mods_viewability, K.viewability);
        K.USE_RAPID && K.pageview_on_init && J.sendRapidNoDelay(e.concat(t), 1 == K.client_only), K.ywa && K.pageview_on_init && J.sendYWAPV(), G.executeOnLoad(function() {
            Q = new R, K.apv && ($ = new H), K.dwell_on && (Z = new j), Y()
        }), "function" == typeof K.init_callback && (K.ldbg && m("init: callback called"), K.init_callback.call())
    }

    function B(e) {
        var t = navigator.userAgent,
            n = Object.prototype,
            i = t.match(/MSIE\s[^;]*/) || t.match(/Trident\/[^;]*/) ? 1 : 0,
            r = t.indexOf(" Edge/") > -1,
            o = /KHTML/.test(t) ? 1 : 0,
            a = null !== t.match(/(iPhone|iPad|iPod)/gi),
            l = (t.indexOf("Android") > -1, a && null !== t.match(/AppleWebKit/)),
            c = null !== t.match(/AppleWebKit/) && null === t.match(/Chrome/),
            s = new RegExp(/\ufeff|\uffef|[\u0000-\u001f]|[\ue000-\uf8ff]/g),
            u = new RegExp(/[\u007f-\u00a0]|\s{2,}/g),
            d = "http://",
            m = "https://",
            h = "class",
            _ = " ",
            g = -1,
            y = 300,
            w = new Array("A_res", "A_cmi", "A_cma", "A_utm"),
            b = -1,
            k = "https:" === window.location.protocol;
        return i && (document.documentMode ? b = document.documentMode : (b = 5, document.compatMode && "CSS1Compat" == document.compatMode && (b = 7))), {
            $: function(e) {
                return document.getElementById(e)
            },
            ca: "%01",
            cb: "%02",
            cc: "%03",
            cd: "%04",
            ce: "%05",
            cf: "%06",
            cg: "%07",
            ch: "%08",
            ylk_kv_delim: e.ylk_kv_delim || ":",
            ylk_pair_delim: e.ylk_pair_delim || ";",
            DATA_ACTION: "data-action",
            data_action_outcome: "data-action-outcome",
            isIE: i,
            isEdge: r,
            isIOSSafari: l,
            isSafari: c,
            isWebkit: o,
            ieV: b,
            MAX_VALUE_LENGTH: e.max_value_length || y,
            value_len_whitelist: w,
            hasOwn: function(e, t) {
                return n.hasOwnProperty.call(e, t)
            },
            enc: encodeURIComponent,
            dec: decodeURIComponent,
            curProto: function() {
                return k ? m : d
            },
            getProto: function() {
                return K.use_http ? d : m
            },
            isSecure: function() {
                return k
            },
            isScrollHorizontalVisible: function() {
                return document.documentElement.scrollWidth > document.documentElement.clientWidth
            },
            isScrollVerticalVisible: function() {
                return document.documentElement.scrollHeight > document.documentElement.clientHeight
            },
            getCompStyle: function(e, t) {
                return void 0 !== window.getComputedStyle ? window.getComputedStyle(e, t) : (this.el = e, this.getPropertyValue = function(t) {
                    var n = /(\-([a-z]){1})/g;
                    return "float" == t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
                        return arguments[2].toUpperCase()
                    })), e.currentStyle[t] ? e.currentStyle[t] : 0
                }, this)
            },
            getBorder: function(e, t) {
                if (!e || !t) return 0;
                var n = parseInt(this.getCompStyle(e, null).getPropertyValue(t), 10);
                return isNaN(n) && (n = 0), n
            },
            getElementHeight: function(e) {
                if (!e) return 0;
                var t = e.offsetHeight || 0;
                return t ? t - this.getBorder(e, "border-top-width") - this.getBorder(e, "border-bottom-width") : 0
            },
            getElementWidth: function(e) {
                if (!e) return 0;
                var t = e.offsetWidth || 0;
                return t ? t - this.getBorder(e, "border-left-width") - this.getBorder(e, "border-right-width") : 0
            },
            getPositionTop: function(e) {
                for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
                return t
            },
            getScrollbarWidthHeight: function() {
                var e = this.make("div");
                e.style.overflow = "scroll", e.style.visibility = "hidden", e.style.position = "absolute", e.style.width = "100px", e.style.height = "100px", document.body.appendChild(e);
                var t = {
                    width: e.offsetWidth - e.clientWidth,
                    height: e.offsetHeight - e.clientHeight
                };
                return this.rmBodyEl(e), t
            },
            isAboveFold: function(e) {
                if (i && 7 >= b) return !0;
                var t = G.getCompStyle(e);
                if ("hidden" == t.visibility || "none" == t.display) return !1;
                var n = e.getBoundingClientRect(),
                    r = this.getElementHeight(e),
                    o = .5 * r;
                if (n.top + o < 0) return !1;
                var a = window.innerHeight || document.documentElement.clientHeight;
                if (this.isScrollHorizontalVisible()) {
                    var l = this.getScrollbarWidthHeight();
                    a -= l.height
                }
                return n.bottom - o <= a ? !0 : void 0
            },
            isAboveFoldArea: function(e, t) {
                if (i && 7 >= b) return !0;
                var n = G.getCompStyle(e);
                if ("hidden" === n.getPropertyValue("visibility") || "none" === n.getPropertyValue("display")) return !1;
                var r, o, a = e.getBoundingClientRect(),
                    l = window.innerHeight || document.documentElement.clientHeight,
                    c = window.innerWidth || document.documentElement.clientWidth;
                if ("undefined" == typeof a.height || "undefined" == typeof a.width ? (r = Math.abs(a.bottom - a.top), o = Math.abs(a.right - a.left)) : (r = a.height, o = a.width), this.isScrollHorizontalVisible() && (l -= t.height), this.isScrollVerticalVisible() && (c -= t.width), a.right <= 0 || a.bottom <= 0 || a.left >= c || a.top >= l) return !1;
                var s = {};
                return s.top = a.top < 0 ? 0 : a.top, s.left = a.left < 0 ? 0 : a.left, s.bottom = a.bottom > l ? l : a.bottom, s.right = a.right > c ? c : a.right, s.width = s.right - s.left, s.height = s.bottom - s.top, o * r / 2 <= s.width * s.height ? !0 : !1
            },
            strip: function(e) {
                for (var t = {
                        "/": "P",
                        ";": "1",
                        "?": "P",
                        "&": "1",
                        "#": "P"
                    }, n = {
                        url: e,
                        clean: "",
                        cookie: "",
                        keys: []
                    }, i = 0; - 1 !== e.indexOf("_yl", i);) {
                    var r = e.indexOf("_yl", i);
                    if (r > i && (n.clean += e.slice(i, r - 1)), i = r + 3, t[e.charAt(r - 1)] && "=" === e.charAt(r + 4)) {
                        n.ult = 1;
                        var o = "_yl" + e.charAt(r + 3),
                            a = "";
                        for (r += 5; r < e.length && !t[e.charAt(r)]; r++) a += e.charAt(r);
                        n.keys.push(o), n[o] = a, "_ylv" !== o && (n.cookie += "&" + o + "=" + a), t[e.charAt(r)] && "P" === t[e.charAt(r)] && (n.clean += e.charAt(r)), i = r + 1
                    } else n.clean += e.slice(r - 1, i)
                }
                return n.ult && (n.cookie = n.cookie.substr(1), n.clean += e.substr(i), "0" === n._ylv), n
            },
            prevDef: function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            appBodyEl: function(e) {
                document.body.appendChild(e)
            },
            rmBodyEl: function(e) {
                document.body.removeChild(e)
            },
            sa: function(e, t, n) {
                e.setAttribute(t, n)
            },
            getScrollY: function() {
                var e = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                return e
            },
            getScrollX: function() {
                var e = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
                return e
            },
            make: function(e, t) {
                var n = document.createElement(e);
                if (t && this.isObj(t))
                    for (var i in t) this.sa(n, i, t[i]);
                return n
            },
            getXHR: function() {
                function e() {
                    for (var e = !1, n = t.length, i = 0; n > i; i++) {
                        try {
                            e = t[i]()
                        } catch (r) {
                            continue
                        }
                        break
                    }
                    return e
                }
                var t = [function() {
                    return new XMLHttpRequest
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }];
                return e()
            },
            hasLS: function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (e) {
                    return !1
                }
            },
            hasCORS: function() {
                return i && 10 > b ? !1 : "withCredentials" in new XMLHttpRequest ? !0 : "undefined" != typeof XDomainRequest ? !0 : !1
            },
            hasWorkers: function() {
                return !!window.Worker
            },
            clearCookie: function(e, t, n) {
                t = t ? t : "/", n = n ? n : "", document.cookie = e + "= ; path=" + t + "; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=" + n + ";"
            },
            uniqConcat: function(e, t, n) {
                function i(e) {
                    for (var t = 0, i = e.length; i > t; t++) {
                        var a = e[t];
                        if (a) {
                            var l = n(a);
                            o[l] || (o[l] = 1, r.push(a))
                        }
                    }
                }
                var r = [],
                    o = {};
                return i(e), i(t), r
            },
            trim: function(e) {
                return e ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
            },
            extDomain: function(e) {
                var t = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                return t && t[1]
            },
            getAttribute: function(e, t) {
                var n = "";
                return document.documentElement.hasAttribute || t !== h || (t = "className"), e && e.getAttribute && (n = e.getAttribute(t, 2)), n
            },
            isDate: function(e) {
                return "[object Date]" === n.toString.call(e)
            },
            isArr: function(e) {
                return "[object Array]" === n.toString.apply(e)
            },
            isStr: function(e) {
                return "string" == typeof e
            },
            isNum: function(e) {
                return "number" == typeof e && isFinite(e)
            },
            isNumeric: function(e) {
                return e - 0 == e && (e + "").replace(/^\s+|\s+$/g, "").length > 0
            },
            isObj: function(e) {
                return e && "object" == typeof e
            },
            rTN: function(e) {
                try {
                    if (e && 3 === e.nodeType) return e.parentNode
                } catch (t) {
                    p(t)
                }
                return e
            },
            getTarget: function(e) {
                var t = e.target || e.srcElement;
                return this.rTN(t)
            },
            addEvent: function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            rmEvent: function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            },
            aug: function(e, t, n) {
                if (t)
                    for (var i in t)
                        if (this.hasOwn(t, i)) {
                            if (n && !n.call(null, i, t[i])) continue;
                            e[i] = t[i]
                        }
            },
            rmProto: function(e) {
                return e ? e.substr(0, 7) === d ? e.substr(7, e.length) : e.substr(0, 8) === m ? e.substr(8, e.length) : e : ""
            },
            norm: function(e) {
                return null === e ? "" : (e = "" + e, this.trim(e.replace(u, " ").replace(s, "")))
            },
            _hasClass: function(e, t) {
                var n, i = !1;
                return e && t && (n = this.getAttribute(e, h) || "", i = t.exec ? t.test(n) : t && (_ + n + _).indexOf(_ + t + _) > -1), i
            },
            hasClass: function(e, t) {
                if (this.isArr(t)) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (this._hasClass(e, t[n])) return !0;
                    return !1
                }
                return this.isStr(t) ? this._hasClass(e, t) : !1
            },
            quote: function(e) {
                var t = /["\\\x00-\x1f\x7f-\x9f]/g,
                    n = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    i = '"',
                    r = '"';
                if (e.match(t)) {
                    var o = e.replace(t, function(e) {
                        var t = n[e];
                        return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (e % 16).toString(16))
                    });
                    return i + o + i
                }
                return r + e + r
            },
            /* @license
                           Copyright 2013 jQuery Foundation and other contributors

                           Permission is hereby granted, free of charge, to any person obtaining a copy
                           of this software and associated documentation files (the "Software"), to deal
                           in the Software without restriction, including without limitation the rights
                           to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                           copies of the Software, and to permit persons to whom the Software is
                           furnished to do so, subject to the following conditions:

                           The above copyright notice and this permission notice shall be included in
                           all copies or substantial portions of the Software.

                           THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                           IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                           FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                           AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                           LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                           OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                           THE SOFTWARE.
                        */
            sfy: function(e) {
                if (!e && "" !== e) return {};
                var t, n = typeof e;
                if ("undefined" === n) return "undefined";
                if ("number" === n || "boolean" === n) return "" + e;
                if ("string" === n) return this.quote(e);
                if ("function" == typeof e.toJSON) return this.sfy(e.toJSON());
                if (this.isDate(e)) {
                    var i = e.getUTCMonth() + 1,
                        r = e.getUTCDate(),
                        o = e.getUTCFullYear(),
                        a = e.getUTCHours(),
                        l = e.getUTCMinutes(),
                        c = e.getUTCSeconds(),
                        s = e.getUTCMilliseconds();
                    return 10 > i && (i = "0" + i), 10 > r && (r = "0" + r), 10 > a && (a = "0" + a), 10 > l && (l = "0" + l), 10 > c && (c = "0" + c), 100 > s && (s = "0" + s), 10 > s && (s = "0" + s), '"' + o + "-" + i + "-" + r + "T" + a + ":" + l + ":" + c + "." + s + 'Z"'
                }
                if (t = [], this.isArr(e)) {
                    for (var u = 0, d = e.length; d > u; u++) t.push(this.sfy(e[u]));
                    return "[" + t.join(",") + "]"
                }
                if ("object" === n) {
                    for (var f in e)
                        if (this.hasOwn(e, f)) {
                            var p = typeof f,
                                m = null;
                            if ("string" === p) m = this.quote(f);
                            else {
                                if ("number" !== p) continue;
                                m = '"' + f + '"'
                            }
                            if (p = typeof e[f], "function" !== p && "undefined" !== p) {
                                var v = "";
                                v = null === e[f] ? '""' : 0 === e[f] ? 0 : this.sfy(e[f]), t.push(m + ":" + v)
                            }
                        }
                    return "{" + t.join(",") + "}"
                }
            },
            toJSON: function() {
                var e = null,
                    t = function() {
                        var e = decodeURIComponent("%E3%81%82");
                        return JSON.stringify(e) === '"' + e + '"'
                    };
                return function(n) {
                    return e || (e = "object" == typeof JSON && JSON.stringify && 6 !== b && 7 !== b && 8 !== b && t() ? JSON.stringify : this.sfy), e.call(this, n)
                }
            }(),
            executeOnLoad: function(e) {
                var t = !1,
                    n = function(n) {
                        (document.addEventListener || n && "load" === n.type || "complete" === document.readyState) && (t = !0, i(), e.call(this))
                    },
                    i = function() {
                        document.addEventListener ? (document.removeEventListener("DOMContentLoaded", n, !1), window.removeEventListener("load", n, !1)) : (document.detachEvent("onreadystatechange", n), window.detachEvent("onload", n))
                    };
                if ("complete" === document.readyState) setTimeout(n);
                else if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
                else {
                    document.attachEvent("onreadystatechange", n), window.attachEvent("onload", n);
                    var r = !1;
                    try {
                        r = null == window.frameElement && document.documentElement
                    } catch (o) {}
                    r && r.doScroll && ! function a() {
                        if (!t) {
                            try {
                                r.doScroll("left")
                            } catch (n) {
                                return setTimeout(a, 50)
                            }
                            i(), e.call(this)
                        }
                    }()
                }
            },
            getLinkContent: function(e) {
                for (var t, n = 0, i = "";
                    (t = e.childNodes[n]) && t; n++) 1 === t.nodeType && ("img" === t.nodeName.toLowerCase() && (i += (this.getAttribute(t, "alt") || "") + " "), i += this.getLinkContent(t));
                return i
            },
            fData: function(e) {
                return this.isStr(e) ? e : this.toJSON(e)
            },
            getLT: function(e, t) {
                if (!e) return "_";
                var n = "";
                return t = t.toLowerCase(), n = "input" === e.nodeName.toLowerCase() ? this.getAttribute(e, "value") : "text" === t ? o ? e.textContent : e.innerText ? e.innerText : e.textContent : "href" === t ? this.rmProto(this.getAttribute(e, "href")) : this.getAttribute(e, t) || "", n = this.norm(n), "" === n && (n = this.norm(this.getLinkContent(e))), n && n.length > G.MAX_VALUE_LENGTH && (n = n.substring(0, G.MAX_VALUE_LENGTH)), "" === n ? "_" : n
            },
            clref: function(e) {
                if (0 !== e.indexOf(d) && 0 !== e.indexOf(m)) return "";
                var t = this.strip(e);
                return t.clean || t.url
            },
            cold: function() {
                return screen ? screen.colorDepth || screen.pixelDepth : "unknown"
            },
            sr: function(e) {
                return screen ? screen.width + (e ? e : ",") + screen.height : ""
            },
            xy: function(e) {
                function t() {
                    var e = document.documentElement,
                        t = document.body;
                    return e && (e.scrollTop || e.scrollLeft) ? [e.scrollTop, e.scrollLeft] : t ? [t.scrollTop, t.scrollLeft] : [0, 0]
                }
                var n = null,
                    r = e.pageX,
                    o = e.pageY;
                return i && (n = t()), r || 0 === r || (r = e.clientX || 0, i && (r += n[1])), o || 0 === o || (o = e.clientY || 0, i && (o += n[0])), r + "," + o
            },
            hasCC: function(e) {
                for (var t = 0, n = e.length; n > t; t++) {
                    var i = e.charCodeAt(t);
                    if (32 > i || "=" === i) return !0
                }
                return !1
            },
            isValidPair: function(e, t) {
                return G.in_value_whitelist(e) ? !0 : e.length > 8 || t.length > G.MAX_VALUE_LENGTH ? (f("Invalid key/value pair (" + e + "=" + t + ") Size must be < 8/300 respectively."), !1) : !0
            },
            ser: function(e, t) {
                if (!e) return "";
                void 0 === typeof t && (t = !0);
                var n = [],
                    i = "";
                for (var r in e)
                    if (this.hasOwn(e, r)) {
                        var o = r,
                            a = e[r];
                        if (null === o || null === a) continue;
                        if (o += "", a += "", a && !G.in_value_whitelist(o) && a.length > G.MAX_VALUE_LENGTH && (a = a.substring(0, G.MAX_VALUE_LENGTH)), !this.isValidPair(o, a)) continue;
                        if (!this.hasCC(o) && !this.hasCC(a)) {
                            i = "", a = this.trim(a), "" !== a && " " !== a || !t || (a = "_");
                            try {
                                i = this.enc(o + "" + a), i = i.replace(/'/g, "%27")
                            } catch (l) {
                                i = "_ERR_ENCODE_", p(l)
                            }
                            n.push(i)
                        }
                    }
                return n.join(this.cd)
            },
            rand: function() {
                for (var e = 0, t = "", n = ""; e++ < 16;) {
                    var i = Math.floor(62 * Math.random());
                    n = 10 > i ? i : String.fromCharCode(36 > i ? i + 55 : i + 61), t += n
                }
                var r = G.tms();
                return t + r.toString(36)
            },
            tms: function() {
                return +new Date
            },
            cookEn: function() {
                var e = navigator.cookieEnabled ? 1 : 0,
                    t = "rapidtc";
                return "undefined" != typeof navigator.cookieEnabled || e || (document.cookie = t + "=1", e = -1 != document.cookie.indexOf("testcookie") ? !0 : !1, document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"), e
            },
            isResCF: function(e) {
                var t = {
                    14: 1,
                    15: 1,
                    18: 1,
                    19: 1,
                    20: 1
                };
                return t[e]
            },
            isTagOfInterest: function(e, t) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (e.tagName && e.tagName.toLowerCase() == t[n].toLowerCase()) return !0;
                return !1
            },
            samplingSuccess: function(e) {
                var t = function(e) {
                        for (var t = 33554467, n = t, i = 0, r = e.length; r > i; i++) n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24), n ^= e.charCodeAt(i);
                        return 0 > n && (n &= 2147483647, n += 2147483648), n
                    },
                    n = function(e) {
                        var n = 1e3;
                        e *= 10;
                        var i = new v,
                            r = "" + i.getCookieByName("B");
                        return r ? (0 > g && (g = t(r) % n), e > g) : !1
                    };
                return n(e)
            },
            in_value_whitelist: function(e) {
                return i && 8 >= b ? !1 : -1 !== G.value_len_whitelist.indexOf(e)
            }
        }
    }("undefined" == typeof console || "undefined" == typeof console.log) && (console = {
        log: function() {}
    }), "undefined" == typeof console.error && (console.error = console.log), "undefined" == typeof console.warn && (console.warn = console.log), t.prototype = {
        ser: function() {
            return G.ser(this.map)
        },
        set: function(e, t) {
            var n = t ? G.norm(t) : t;
            (void 0 === n || null === n) && (n = ""), null !== n && G.isStr(n) && (n = n.replace(/\\/g, "\\\\")), !G.in_value_whitelist(e) && n.length > G.MAX_VALUE_LENGTH && (n = n.substring(0, G.MAX_VALUE_LENGTH)), G.isValidPair(e, n) && (this.map[G.norm(e)] = n, this.count++)
        },
        get: function(e) {
            return this.map[e]
        },
        getAll: function() {
            return this.map
        },
        absorb: function(e) {
            if (e && G.isObj(e))
                for (var t in e) G.hasOwn(e, t) && this.set(t, e[t])
        },
        absorb_filter: function(e, t) {
            if (e && G.isObj(e))
                for (var n in e)(!t || t.call(null, n)) && G.hasOwn(e, n) && this.set(n, e[n])
        },
        getSize: function() {
            return this.count
        }
    }, n.prototype = new t, n.prototype.constructor = t, r.prototype = new t, r.prototype.constructor = t, n.makeFromPP = function(e) {
        var t = new n;
        return e && t.absorb(e.getAll()), t
    };
    var q = new n,
        G = B(e),
        F = new E,
        z = {
            none: 0,
            gzip: 1,
            lzw: 2,
            deflate: 3
        };
    v.prototype = {
        getYWAFPC: function() {
            if (!K.ywa) return null;
            var e = this.cookieMap["fpc" + K.ywa.project_id],
                t = this.cookieMap.fpc,
                n = b(t),
                i = null;
            if (t && (i = n[K.ywa.project_id]), e && (G.clearCookie("fpc" + K.ywa.project_id), !i)) {
                n[K.ywa.project_id] = e;
                var r = w(n);
                g("fpc", r, 31536e4), i = e
            }
            return i ? i : null
        },
        getCookieByName: function(e) {
            return this.cookieMap[e]
        },
        getYWADPID: function() {
            if (K.ywa) {
                var e, t = "ywandp",
                    n = "ywadp" + K.ywa.project_id,
                    i = b(this.cookieMap[t]),
                    r = i[K.ywa.project_id];
                if (void 0 === r || null === r || "" === r) {
                    e = this.cookieMap[n], e ? i[K.ywa.project_id] = e : i[K.ywa.project_id] = y(), r = i[K.ywa.project_id];
                    var o = w(i);
                    g(t, o, 31536e4), this.cookieMap[t] = o
                }
                K.ywa_dpid = r
            }
        },
        getRx: function() {
            if (K.fpc) {
                var e = "rx",
                    t = this.cookieMap[e];
                if (void 0 === t || null === t || "" === t) {
                    var n = new Date;
                    t = Math.random().toString().substring(2) + "." + n.getTime(), g(e, t, 63072e3)
                }
                return t
            }
            return null
        }
    };
    var K = c(e),
        J = k(),
        $ = null,
        Q = null,
        Z = null,
        ee = null,
        te = new v;
    K.fpc && q.set("_rx", te.getRx());
    var ne = te.getCookieByName("_ga");
    null != ne && q.set("_ga", ne);
    var ie = te.getCookieByName("yx");
    null != ie && q.set("_yx", ie);
    var re = (function() {
        var e = {};
        return {
            subscribe: function(t, n) {
                var i = e[t];
                i || (i = [], e[t] = i), i.push(n)
            },
            unsubscribe: function(t, n) {
                var i = e[t];
                if (i)
                    for (var r = 0; r < i.length; r++)
                        if (i[r] === n) return void i.splice(r, 1)
            },
            fire: function(t) {
                var n = e[t];
                if (n)
                    for (var i = 0, r = n.length; r > i; i++) n[i].call(null)
            }
        }
    }(), 0);
    K.viewability ? setTimeout(function() {
        X()
    }, 0) : X();
    var oe = {
        utils: G
    };
    return {
        init: function() {},
        beaconEvent: function(e, t, n, i) {
            V(e, t, n, i)
        },
        beaconClick: function(e, t, n, i, r, o) {
            K.ldbg && m("beaconClick: sec=" + e + " slk=" + t + " callback=" + o), !i && r && (i = {}), r && (i.outcm = r), J.sendClick(M(e, t, n, i, r), o)
        },
        addModules: function(e, t, n) {
            K.ldbg && m("addModules() called: mods=" + G.fData(e) + " isPage: " + t), n = n || {};
            var i = {
                A_am: 1
            };
            n.pp && G.aug(i, n.pp), n.useViewability = n.useViewability || !1, n.clickonly = n.clickonly || !1;
            var r = !1;
            switch (t || (t = !1), t) {
                case 1:
                case "1":
                case !0:
                    t = !0;
                    break;
                case 2:
                case "2":
                    r = !0, t = !1, n.event = L("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    t = !1
            }
            if (!K.yql_enabled) return void(t ? I(i, !1) : n.event && this.beaconRichView(i, n.event.outcome));
            n && n.event && t && (p("Cannot track event type and pageview at same time."), n.event = null);
            var o = F.addModules(e, n.useViewability);
            (0 !== o.length || n.event) && (n.clickonly && (o = []), (K.USE_RAPID || n.event) && (t || n.event || n.pp ? (n.event && n.event.data && G.aug(i, n.event.data), J.sendRapidNoDelay(o, t, i, n)) : o.length > 0 && J.sendRapid(o, t, i, n)), t === !0 && (K.ywa && J.sendYWAPV(i), K.apv && $ && $.reInit()))
        },
        addModulesWithViewability: function(e, t, n) {
            n = n || {}, n.useViewability = K.viewability, this.addModules(e, t, n)
        },
        refreshModule: function(e, t, n, i) {
            K.ldbg && m("refreshModule called: mod=" + e + " isPV: " + t + " sendLinks: " + n + " options: " + G.fData(i));
            var r = !1;
            switch (i = i || {}, t || (t = !1), t) {
                case 1:
                case "1":
                case !0:
                    t = !0;
                    break;
                case 2:
                case "2":
                    r = !0, t = !1, i.event = L("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    t = !1
            }
            if (!K.yql_enabled) {
                var o = i.pp || {};
                return void(t ? I(o, !1) : i.event && this.beaconRichView(o, i.event.outcome))
            }
            var a = n === !1 ? !1 : !0;
            t && i && i.event && (i.event = null), F.refreshModule(e, t, a, i)
        },
        refreshViewability: function() {
            F.refreshViewability()
        },
        removeModule: function(e) {
            F.removeModule(e)
        },
        isModuleTracked: function(e) {
            return K.ldbg && m("isTracked called: " + e), F && void 0 !== F.exists(e)
        },
        getModulesInfo: function() {
            return F.getModules()
        },
        destroy: function() {
            m("destroy called"), F.destroy(), $ && ($.destroy(), $ = null), Q && (Q.destroy(), Q = null), Z && (Z.destroy(), Z = null)
        },
        reInit: function(e) {
            if (K.ldbg && m("reInit called with: " + G.fData(e)), e = e || {}, !e.spaceid) return void p("Invalid spid in reInit config: " + G.fData(e));
            q = new n, K = c(e), G = B(e);
            var t = new v;
            K.fpc && q.set("_rx", t.getRx());
            var i = t.getCookieByName("_ga");
            null != i && q.set("_ga", i);
            var r = t.getCookieByName("yx");
            null != r && q.set("_yx", r)
        },
        setRapidAttribute: function(e) {
            if (e.keys && K.keys.absorb(e.keys), e.ywa && G.isObj(e.ywa))
                for (var t in e.ywa) G.hasOwn(e.ywa, t) && (K.ywa[t] = e.ywa[t]);
            e.spaceid && (K.spaceid = e.spaceid), e.referrer && (K.referrer = e.referrer.substring(0, G.MAX_VALUE_LENGTH)), e.A_sid && (K.keys.set("A_sid", e.A_sid), K.persist_asid = !0), e.location && (K.loc = e.location, K.keys.set("_w", G.rmProto(e.location).substring(0, G.MAX_VALUE_LENGTH))), G.hasOwn(e, "apv") && (e.apv ? $ ? $.reInit() : $ = new H : $ && ($.destroy(), $ = null))
        },
        clearRapidAttribute: function(e) {
            for (var t in e)
                if ("keys" === e[t]) {
                    var i = K.keys.get("_w"),
                        r = K.keys.get("A_sid");
                    K.keys = new n, K.keys.set("_w", i), K.keys.set("A_sid", r)
                } else "referrer" === e[t] ? K.referrer = "" : "A_sid" === e[t] ? (K.keys.set("A_sid", ""), K.persist_asid = !0) : "location" === e[t] && (K.loc = "", K.keys.set("_w", ""))
        },
        beaconPageview: function(e) {
            I(e, !0)
        },
        beaconECommerce: function(e, t) {
            K.ywa && J.sendYWAECommerce(e, t)
        },
        beaconInternalSearch: function(e, t) {
            K.ywa && J.sendInternalSearch(e, t)
        },
        getCurrentSID: function() {
            return q.get("A_sid")
        },
        notifyHistoryPushStateCalled: function() {},
        beaconLinkViews: function(e, t, n, i) {
            K.ldbg && m("beaconLinkViews() called"), n = n || {};
            var o = {};
            n.pp && G.aug(o, n.pp);
            var a = !1,
                l = !1;
            switch (t) {
                case 1:
                case "1":
                case !0:
                    l = !0;
                    break;
                case 2:
                case "2":
                    a = !0, l = !1, n.event = L("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    l = !1
            }
            if (!K.yql_enabled) return void(l ? I(o, !1) : n.event && this.beaconRichView(o, n.event.outcome));
            if (n && n.event && l && (p("Cannot track event type and pageview at same time."), n.event = null), 0 !== e.length || n.event) {
                for (var c = [], s = 0; s < e.length; s++) {
                    var u = e[s],
                        d = new r;
                    d.absorb_filter(u, function(e) {
                        return "sec" != e && "_links" != e
                    });
                    for (var f = [], v = 1, h = 0; h < u._links.length; h++) {
                        var _ = u._links[h],
                            g = {
                                viewable: !0,
                                data: {
                                    sec: u.sec,
                                    _p: v++,
                                    A_lv: 2
                                }
                            };
                        G.aug(g.data, _), f.push(g)
                    }
                    var y = {
                        moduleName: u.sec,
                        moduleYLK: d,
                        links: f,
                        identifier: u.sec
                    };
                    c.push(y)
                }(K.USE_RAPID || n.event) && ((l || n.event || n.pp) && n.event && n.event.data && G.aug(o, n.event.data), J.sendRapidNoDelay(c, l, o, n)), i && i.call()
            }
        },
        beaconPerformanceData: function(e) {
            Y(e)
        },
        __test_only__: function() {
            return oe
        }
    }
};
/*jslint devel: false, nomen: true, plusplus: true, forin:true, sloppy: true, sub: true */
/*global YAHOO,document,window,navigator,console */
"undefined" != typeof YAHOO && YAHOO || (YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, YAHOO.i13n.JP = YAHOO.i13n.JP || {}, YAHOO.i13n.JP.reSession = function() {
    YAHOO.i13n.A_SID = function() {
        for (var e, t = 0, i = "", n = "", o = +new Date; t++ < 16;) e = Math.floor(62 * Math.random()), n = 10 > e ? e : String.fromCharCode(36 > e ? e + 55 : e + 61), i += n;
        return i + o.toString(36)
    }.apply()
}, "undefined" != typeof YAHOO.i13n.A_SID && YAHOO.i13n.A_SID || YAHOO.i13n.JP.reSession(), YAHOO.i13n.JP.simpleRapid = function(e) {
    function t(e) {
        return "string" == typeof e ? e.replace(/\^/g, "") : e
    }

    function n() {
        var e, t = navigator.userAgent;
        return e = t.match(/windows\sphone/i) ? "windowsphone" : t.match(/windows/i) ? "windows" : t.match(/iphone|ipad/i) ? "ios" : t.match(/mac|ppc/i) ? "mac" : t.match(/android/i) ? "android" : "other"
    }

    function o() {
        for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++)
            if ("keywords" === e[t].getAttribute("name") && "string" == typeof e[t].getAttribute("content")) return e[t].getAttribute("content");
        return ""
    }

    function r(e, i) {
        e = t(e), i = t(i), "" !== e && "" !== i && (g[e] = i)
    }

    function s(e) {
        e = t(e), "" !== e && delete g[e]
    }

    function a(e, i) {
        var n, o;
        e = t(e);
        for (o in i) n = t(i[o]), o = t(o), "" !== o && "" !== n && (g[e][o] = n)
    }

    function c(e, i) {
        e = t(e), i = t(i), "" !== e && "" !== i && delete g[e][i]
    }

    function u() {
        return d("Object", w) && "function" == typeof w.init
    }

    function d(e, t) {
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return "undefined" != typeof t && null !== t && i === e
    }

    function f(e) {
        var t, i, n = [];
        if (document.getElementsByClassName) n = document.getElementsByClassName(e);
        else if (d("String", e)) {
            t = document.getElementsByTagName("*");
            for (var o = 0; o < t.length; o++) i = t[o].className || t[o].getAttribute("class"), d("String", i) && -1 !== (" " + i + " ").indexOf(" " + e + " ") && n.push(t[o])
        }
        return n
    }

    function l(e, t) {
        var i;
        for (i in e)
            if (e[i] === t) return i;
        return -1
    }

    function p(e, t) {
        var i, n, o = {};
        if (d("Object", t)) o = t;
        else if (d("Array", t))
            for (n in t) o[t[n]] = t[n];
        else o[t] = t;
        for (i in o) g[e][i] = o[i]
    }

    function y(e, i) {
        e = t(e), i = t(i), "" !== e && "" !== i && -1 !== l(g[e], i) && g[e].splice(l(g[e], i), 1)
    }

    function h() {
        return {
            tracked_mods: {},
            keys: {
                cl: v.screen.colorDepth,
                dspsize: v.screen.width + "x" + v.screen.height,
                enc: (b.characterSet || b.charset).toLowerCase(),
                os: n(),
                _sr: (v.innerWidth || b.documentElement.clientWidth) + "x" + (v.innerHeight || b.documentElement.clientHeight),
                _libn: "simplerapid",
                _libv: "1.1.0"
            },
            viewability: !1,
            viewability_time: 1e3,
            tracked_mods_viewability: {},
            apv: !1,
            click_timeout: 1e4,
            compr_on: d("String", YAHOO.i13n.WEBWORKER_FILE) || d("String", e.webworker_file)
        }
    }
    e = e || {};
    var k, m, g, w, v = window,
        b = document,
        O = b.location.toString().indexOf("yhldebug=1") > 0;
    ("undefined" == typeof console || "undefined" == typeof console.log) && (console = {
        log: function() {}
    }), "undefined" == typeof console.error && (console.error = console.log), "undefined" == typeof console.warn && (console.warn = console.log), g = h(), "undefined" != typeof g.keys._do || isNaN(v.orientation) || (g.keys._do = Math.abs(v.orientation) / 90 % 2), "undefined" != typeof g.keys.dpr || isNaN(v.devicePixelRatio) || (g.keys.dpr = v.devicePixelRatio), a("keys", {
        metakwd: o()
    });
    for (k in e)
        if ("keys" === k)
            for (m in e.keys) g.keys[m] = e.keys[m];
        else g[k] = e[k];
    return {
        setClickTimeout: function(e) {
            return r("click_timeout", e), this
        },
        setModule: function(e) {
            return p("tracked_mods", e), this
        },
        setSpaceid: function(e) {
            return r("spaceid", e), this
        },
        startViewable: function() {
            return r("viewability", !0), this
        },
        stopViewable: function() {
            return r("viewability", !1), this
        },
        setViewableModule: function(e) {
            return p("tracked_mods_viewability", e), this
        },
        setViewableTime: function(e) {
            return r("viewability_time", e), this
        },
        setWebWorkerFilePath: function(e) {
            return r("webworker_file", e), r("compr_on", !0), this
        },
        setRapidConf: function(e) {
            var t;
            for (t in e) r(t, e[t]);
            return this
        },
        setActtype: function(e) {
            return a("keys", {
                acttype: e
            }), this
        },
        setApptype: function(e) {
            return a("keys", {
                apptype: e
            }), this
        },
        setAuthid: function(e) {
            return a("keys", {
                auth_out: e
            }), this
        },
        setCategorypath: function(e) {
            return a("keys", {
                cat_path: e
            }), this
        },
        setContentsid: function(e) {
            return a("keys", {
                ctsid: e
            }), this
        },
        setConttype: function(e) {
            return a("keys", {
                conttype: e
            }), this
        },
        setDevice: function(e) {
            return a("keys", {
                device: e
            }), this
        },
        setMetakeyword: function(e) {
            return a("keys", {
                metakwd: e
            }), this
        },
        setNonepv: function(e) {
            return a("keys", {
                nonepv: e
            }), this
        },
        setOpttype: function(e) {
            return a("keys", {
                opttype: e
            }), this
        },
        setPartner: function(e) {
            return a("keys", {
                prtnr: e
            }), this
        },
        setPagetype: function(e) {
            return a("keys", {
                pagetype: e
            }), this
        },
        setQuery: function(e) {
            return a("keys", {
                query: e
            }), this
        },
        setService: function(e) {
            return a("keys", {
                service: e
            }), this
        },
        setServiceid: function(e) {
            return a("keys", {
                srvid: e
            }), this
        },
        setStatus: function(e) {
            return a("keys", {
                status: e
            }), this
        },
        setPg: function(e) {
            return a("keys", {
                pg: e
            }), this
        },
        setIns: function(e) {
            return a("keys", {
                ins: e
            }), this
        },
        setUiid: function(e) {
            return a("keys", {
                uiid: e
            }), this
        },
        setVtestid: function(e) {
            return a("keys", {
                vtestid: e
            }), this
        },
        setVtgrpid: function(e) {
            return a("keys", {
                vtgrpid: e
            }), this
        },
        setVpkjp: function(e) {
            return a("keys", {
                v_pkjp: e
            }), this
        },
        trackedClass: function(e) {
            var t, i = [];
            e = e ? e : "tracked_mods", t = f(e);
            for (var n = 0; n < t.length; n++) t[n].getAttribute("id") ? i.push(t[n].getAttribute("id")) : console.warn("simplerapid: Not found id to the specified element");
            return p("tracked_mods", i), this
        },
        trackedViewableClass: function(e) {
            var t, i = [];
            e = e ? e : "tracked_mods_viewability", t = f(e);
            for (var n = 0; n < t.length; n++) t[n].getAttribute("id") ? i.push(t[n].getAttribute("id")) : console.warn("simplerapid: Not found id to the specified element");
            return p("tracked_mods_viewability", i), this
        },
        startGeolocation: function(e) {
            return navigator.geolocation && (e || (e = {
                enableHighAccuracy: !0,
                timeout: 1e4,
                maximumAge: 0
            }), navigator.geolocation.getCurrentPosition(function(e) {
                if (u()) {
                    var t = {
                        pp: {
                            lat: e.coords.latitude,
                            "long": e.coords.longitude,
                            accuracy: e.coords.accuracy
                        },
                        event: {
                            type: YAHOO.i13n.EventTypes.getEventByName("linkview")
                        }
                    };
                    w.beaconLinkViews([], !1, t), O && console.log("simplerapid: send geolocation")
                } else console.warn("simplerapid: rapid instance not found")
            }, function(e) {
                if (O) switch (e.code) {
                    case 1:
                        console.warn("simplerapid: startGeolocation is permission denied");
                        break;
                    case 2:
                        console.warn("simplerapid: startGeolocation is position unavailable");
                        break;
                    case 3:
                        console.warn("simplerapid: startGeolocation is timeout")
                }
            }, e)), this
        },
        setPageParam: function(e) {
            return a("keys", e), this
        },
        addPageParam: function(e, t) {
            var i = {};
            return d("String", e) && d("String", t) && (i[e] = t, a("keys", i)), this
        },
        addRapidConf: function(e, t) {
            return r(e, t), this
        },
        deleteRapidConf: function(e) {
            return s(e), this
        },
        deleteModule: function(e) {
            return y("tracked_mods", e), this
        },
        deleteViewableModule: function(e) {
            return y("tracked_mods_viewability", e), this
        },
        deletePageParam: function(e) {
            return c("keys", e), this
        },
        setRapidinstance: function(e) {
            return d("Object", e) && "function" == typeof e.init && (w = e), this
        },
        setCallback: function(e) {
            return "function" == typeof e && r("init_callback", e), this
        },
        simpleBeaconClick: function(e, t, n) {
            var o, r, s, a, c, f, l = [];
            if (u())
                if (d("Object", e) && d("String", e.sec)) {
                    o = w.getModulesInfo();
                    for (s in o)
                        for (a in o[s].links) o[s].links[a].data.sec === e.sec && l.push(o[s].links[a].data);
                    if (0 === l.length) f = !1;
                    else
                        for (i = 0; i < l.length; i++) {
                            f = !0;
                            for (c in e) {
                                if ("undefined" == typeof l[i][c]) {
                                    f = !1;
                                    break
                                }
                                if (String(l[i][c]) !== String(e[c])) {
                                    f = !1;
                                    break
                                }
                            }
                            if (f) {
                                r = {};
                                for (c in l[i]) "slk" !== c && "_p" !== c && (r[c] = l[i][c]);
                                w.beaconClick(e.sec, l[i].slk, l[i]._p, r, t, n);
                                break
                            }
                        }
                    f === !1 && console.warn("simplerapid: undefined link param in link view")
                } else console.warn("simplerapid: the simpleBeaconClick must specify the sec");
            else console.warn("simplerapid: undefined rapid instance")
        },
        refreshViewability: function() {
            u() && "function" == typeof w.refreshViewability && w.refreshViewability()
        },
        destroy: function() {
            YAHOO.i13n.JP.reSession(), g = h(), u() && "function" == typeof w.destroy && w.destroy()
        },
        initRapid: function() {
            return O && console.log(g), "undefined" != typeof YAHOO.i13n.Rapid && YAHOO.i13n.Rapid ? (YAHOO.i13n.JP.rapid_conf = g, w = new YAHOO.i13n.Rapid(g)) : void 0
        }
    }
};