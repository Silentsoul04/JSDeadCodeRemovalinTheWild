
        ! function(a) {
            var e = "https://s.go-mpulse.net/boomerang/",
                t = "addEventListener";
            if ("True" == "True") a.BOOMR_config = a.BOOMR_config || {}, a.BOOMR_config.PageParams = a.BOOMR_config.PageParams || {}, a.BOOMR_config.PageParams.pci = !0, e = "https://s2.go-mpulse.net/boomerang/";
            if (function() {
                    function n(e) {
                        a.BOOMR_onload = e && e.timeStamp || (new Date).getTime()
                    }
                    if (!a.BOOMR || !a.BOOMR.version && !a.BOOMR.snippetExecuted) {
                        a.BOOMR = a.BOOMR || {}, a.BOOMR.snippetExecuted = !0;
                        var i, o, r, O = document.createElement("iframe");
                        if (a[t]) a[t]("load", n, !1);
                        else if (a.attachEvent) a.attachEvent("onload", n);
                        O.src = "javascript:void(0)", O.title = "", O.role = "presentation", (O.frameElement || O).style.cssText = "width:0;height:0;border:0;display:none;", r = document.getElementsByTagName("script")[0], r.parentNode.insertBefore(O, r);
                        try {
                            o = O.contentWindow.document
                        } catch (_) {
                            i = document.domain, O.src = "javascript:var d=document.open();d.domain='" + i + "';void(0);", o = O.contentWindow.document
                        }
                        o.open()._l = function() {
                            var a = this.createElement("script");
                            if (i) this.domain = i;
                            a.id = "boomr-if-as", a.src = e + "24NSQ-SHRHJ-V3DG9-37GJB-R5GAF", BOOMR_lstart = (new Date).getTime(), this.body.appendChild(a)
                        }, o.write("<bo" + 'dy onload="document._l();">'), o.close()
                    }
                }(), "".length > 0)
                if (a && "performance" in a && a.performance && "function" == typeof a.performance.setResourceTimingBufferSize) a.performance.setResourceTimingBufferSize();
            ! function() {
                if (BOOMR = a.BOOMR || {}, BOOMR.plugins = BOOMR.plugins || {}, !BOOMR.plugins.AK) {
                    var e = "true" == "true" ? 1 : 0,
                        t = "cookiepresent",
                        n = "kwje4yqxek47qxm5bima-f-f399249de-clientnsv4-s.akamaihd.net",
                        i = {
                            "ak.v": 23,
                            "ak.cp": "734566",
                            "ak.ai": parseInt("476638", 10),
                            "ak.ol": "0",
                            "ak.cr": 4,
                            "ak.ipv": 4,
                            "ak.proto": "h2",
                            "ak.rid": "d5d8f6a",
                            "ak.r": 19250,
                            "ak.a2": e,
                            "ak.m": "dsca",
                            "ak.n": "essl",
                            "ak.bpcip": "85.146.78.0",
                            "ak.cport": 56564,
                            "ak.gh": "2.21.243.193",
                            "ak.quicv": "",
                            "ak.tlsv": "tls1.2",
                            "ak.0rtt": "",
                            "ak.csrc": "-",
                            "ak.acc": "",
                            "ak.t": "1570572824"
                        };
                    if ("" !== t) i["ak.ruds"] = t;
                    var o = {
                        i: !1,
                        av: function(e) {
                            var t = "http.initiator";
                            if (e && (!e[t] || "spa_hard" === e[t])) i["ak.feo"] = void 0 !== a.aFeoApplied ? 1 : 0, BOOMR.addVar(i)
                        },
                        rv: function() {
                            var a = ["ak.bpcip", "ak.cport", "ak.cr", "ak.csrc", "ak.gh", "ak.ipv", "ak.m", "ak.n", "ak.ol", "ak.proto", "ak.quicv", "ak.tlsv", "ak.0rtt", "ak.r", "ak.acc", "ak.t"];
                            BOOMR.removeVar(a)
                        }
                    };
                    BOOMR.plugins.AK = {
                        akVars: i,
                        akDNSPreFetchDomain: n,
                        init: function() {
                            if (!o.i) {
                                var a = BOOMR.subscribe;
                                a("before_beacon", o.av, null, null), a("onbeacon", o.rv, null, null), o.i = !0
                            }
                            return this
                        },
                        is_complete: function() {
                            return !0
                        }
                    }
                }
            }()
        }(window);
    