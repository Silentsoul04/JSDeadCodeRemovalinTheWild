(function() {
    'Copyright © 2013-2019 Confiant Inc. All rights reserved.';
    'v3.201910081641';

    function confiantWrap(d, c, t, s, o, p, u) {
        var e = c.bidder,
            w = null,
            n = c.size,
            f = d.parentWindow || d.defaultView,
            l = f.JSON,
            v = f.btoa,
            h = f.encodeURIComponent;
        if (!l || !v) return !1;
        var b = "script",
            m = "src",
            r = "replace",
            g = "error",
            y = "stringify",
            _ = "wr" + "i" + "t" + "e";
        t.indexOf("http") < 0 && (t = "https://" + t);
        var E = t + "/?wrapper=" + h(s) + "&tpid=",
            F = {
                k: {
                    hb_bidder: [e],
                    hb_size: [n]
                }
            },
            x = !1;

        function O(t) {
            return t = function(t) {
                if ("string" != typeof t) return t;
                var e = t.match(/[^\u0000-\u024F\u1E00-\u1EFF\u2C60-\u2C7F\uA720-\uA7FF]/g);
                if (!e) return t;
                for (var n = 0; n < e.length; n++) t = t.replace(e[n], encodeURIComponent(e[n]));
                return t
            }(t), (v(t) || "")[r]("/", "_")[r]("+", "-")
        }
        return window._clrm || window.confiant || function() {
                function e(t) {
                    var e = "cb";
                    if ("string" == typeof t.data && -1 < t.data.indexOf(e)) {
                        var n = t.data.substr(e.length + s.length),
                            r = atob(n),
                            a = window.JSON.parse(r);
                        o.apply(this, a)
                    }
                }
                if (window.addEventListener) try {
                    window.top.addEventListener("message", e, !1)
                } catch (t) {
                    window.addEventListener("message", e, !1)
                } else window.top.attachEvent("onmessage", e)
            }(),
            function() {
                try {
                    var e = {
                        wh: w = O(s + "/" + F.k.hb_bidder[0] + ":" + F.k.hb_size[0]),
                        wd: l.parse(l[y](F)),
                        wr: 0
                    };
                    2 === u && (e.cb = 1e3 * Math.random());
                    var t = {
                            prebid: {
                                adId: c.adId,
                                cpm: c.cpm
                            }
                        },
                        n = !1;
                    try {
                        n = !!f.frameElement.getAttribute("data-forced-sandbox")
                    } catch (t) {}
                    var r = {
                        d: e,
                        t: escape(c.ad),
                        isE: !0,
                        cb: o,
                        id: t,
                        isFSb: n,
                        devMode: u
                    };
                    ! function(t, e, n) {
                        var r = E + h(t) + "&d=" + e,
                            a = "err__" + 1 * new Date;
                        f[a] = function() {
                            d[_](c.ad)
                        };
                        var i = "<" + b + ' type="text/java' + b + '">window["' + s + '"]={};' + 'window["' + s + '"]["tpid"]="' + t + '";' + 'window["' + s + '"]["' + t + '"]=' + l.stringify(n) + ";" + "</" + b + ">",
                            o = "<" + b + " on" + g + '="void(' + a + '())" ' + m + '="' + r + '" type="text/java' + b + '" ></' + b + ">";
                        p && (o = "<" + b + " on" + g + '="void(' + a + '())" ' + '" type="text/java' + b + '" >' + unescape(p) + "</" + b + ">"), d[_](i + o)
                    }(w, O(l[y](e)), r)
                } catch (t) {
                    x = !0;
                    var a = "https://protected-by.clarium.io/werror",
                        i = (e = {
                            property_id: s,
                            uh: w || "wt_not_established",
                            url: window.location.href || window.top.location.href || document.url || "url not found",
                            label: "confiantWrap_initialize",
                            msg: t.message
                        }, new XMLHttpRequest);
                    i.open("POST", a, !0), i.send(v(l.stringify(e)))
                }
            }(), d.close(), !x
    }
    var Caspr = function(u, e, l, f, t) {
        this.CONSTANTS = {
            MATCHING_STYLE_1: 1,
            MATCHING_STYLE_2: 2,
            MATCHING_STYLE_3: 3,
            MATCHING_STYLE_4: 4
        }, this.log_sample = void 0 === u.ls || u.ls, this.rules = ("string" == typeof u && (u = JSON.parse(atob(u))), u && u.m ? u.m : []), this.masterReset = !0, "rs" in u && (this.masterReset = u.rs), this.frames = [], this.cajsPresent = !1, this.tagSource = e || "", this.trackers = ["iframe", "object", "a"], this.hasBeenUndone = !1, this.adserverDomain = "/* @echo DOMAIN */", this.submitEndpoint = "/log", this.targetId = null, this.prefixedTpid = l && "" !== l ? l : null, this.submitted = !1, this.doneWithSandbox = !1, this.version = u.v ? u.v : 0, this.window = window, this.replaceWithHTML = null, this.isDfpOnPageIntegration = !1, this.isForcedSandboxing = !1, this.inAppSuccessCallback = null, this.devMode = 0, this.supportLandingPageBlocking = !1, this.isAst = !1, this.isIEorEdgeorFF = window.navigator.userAgent.match(/(Trident\/7.0)|(edge|Firefox)/i), this.isLoadEventFired = !1;
        var T = this.shouldMonitorAllNestedFrames = !1,
            n = .0025,
            s = .05,
            c = !0;
        t && (this.adserverDomain = t), this.wrapper = f, this.errors = [], this.blockingData = null, this.do_undo = void 0 === u.du || !!u.du, this.replace = void 0 !== u.re ? unescape(u.re) : "", this.backupFunctions = {}, this.targetId = f && f.uniqueHash && 0 < f.uniqueHash.length ? f.uniqueHash : l, this.dom = {
            findings: [],
            parentHTML: "",
            getRootElement: function(e) {
                return c ? document.body : document.getElementById(e.targetId)
            },
            walkTheDOM: function(e, t) {
                for (t(e), e = e.firstChild; e;) this.walkTheDOM(e, t), e = e.nextSibling;
                return this.parentHTML
            },
            traverseAd: function(e) {
                if (e) {
                    var i = this;
                    return this.parentHTML = e.outerHTML, this.walkTheDOM(e, function(e) {
                        if (1 == e.nodeType) {
                            if (e.contentWindow) try {
                                var t = e.contentWindow.document.getElementsByTagName("html")[0].innerHTML;
                                i.parentHTML = i.parentHTML.replace(e.outerHTML, "<head></head><body></body>" == t ? e.outerHTML : e.outerHTML.replace("</iframe>", t + "</iframe>"))
                            } catch (e) {
                                _(e, {
                                    label: "traverseAd"
                                })
                            }
                        } else if (3 === e.nodeType) e.data.trim();
                        else try {
                            e.outerHTML && -1 < e.outerHTML.indexOf("Caspr") && (this.parentHTML = this.parentHTML.replace(e.outerHTML, ""))
                        } catch (e) {
                            _(e, {
                                label: "traverseAd_2"
                            })
                        }
                    })
                }
            }
        }, this.getTopFrameParent = function() {
            var s = function(e, t) {
                try {
                    for (var i = e.contentWindow.document.getElementsByTagName("iframe"), r = 0; r < i.length; r++) {
                        var n = i[r];
                        if (n == t) return !0;
                        if (s(n, t)) return !0
                    }
                    return !1
                } catch (e) {
                    return _(e, {
                        label: "getIframes"
                    }), !1
                }
            };
            try {
                if (frameElement) {
                    for (var e = window.top.document.getElementsByTagName("iframe"), t = 0; t < e.length; t++) {
                        if (e[t] == frameElement) return e[t];
                        if (s(e[t], frameElement)) return e[t]
                    }
                    return !1
                }
                return !1
            } catch (e) {
                return _(e, {
                    label: "getTopFrameParent"
                }), !1
            }
        }, this.findContextForTpid = function(i, e) {
            var t, r = function() {
                var e = 0 < Object.keys(window[i]).length ? Object.keys(window[i]) : null;
                if (!e) return null;
                for (var t = 0; t < e.length; t++)
                    if ("tpid" != e[t]) return e[t];
                return null
            }(window);
            if (!r) throw Error("Unable to find confiant context object. Please contact support@confiant.com.");
            return t = window[i][r], window[i][e] = t
        }, this.wrapper = {
            PAYLOAD_KEY: "d",
            TAG_KEY: "t",
            _data: {},
            augmentRequest: function(e) {
                return (e = e || {}).wr = this._data.wr, e.wh = this._data.wh, e.wd = this._data.wd, e
            },
            init: function(e) {
                var t = e.findContextForTpid(l, "%%TP_IDENTIFIER%%");
                t.u = 1 * new Date, this._data = t[this.PAYLOAD_KEY], e.tagSource = t[this.TAG_KEY], t.isE && (e.tagSource = unescape(e.tagSource), e.isDfpOnPageIntegration = !0), this._tag = e.tagSource, e.isSafeFrame = t.isSfrm, e.isSandboxedSafeframe = t.isSfrm && t.isSb, e.isForcedSandboxing = t.isFSb, e.inAppSuccessCallback = t.successCallback, e.devMode = t.devMode || 0
            }
        }, this.creativeWrapper = {
            init: function(e) {
                var t = e.findContextForTpid(f.uniqueHash, f.tpIdentifier);
                t.u = 1 * new Date, e.tagSource = t.t, t.isE && (e.tagSource = unescape(e.tagSource), e.isDfpOnPageIntegration = !0);
                var i = f.uniqueHash;
                "function" != typeof t.cb && (t.cb = null), e.cb = t.cb ? t.cb : function() {
                    try {
                        window.top.postMessage("cb" + i + btoa(JSON.stringify(Array.prototype.slice.call(arguments))), "*")
                    } catch (e) {
                        window.parent.postMessage("cb" + i + btoa(JSON.stringify(Array.prototype.slice.call(arguments))), "*")
                    }
                }, e.id = t.id ? t.id : null, e.isSafeFrame = t.isSfrm, e.isSandboxedSafeframe = t.isSfrm && t.isSb, e.isForcedSandboxing = t.isFSb, e.inAppSuccessCallback = t.successCallback, e.devMode = t.devMode || 0, e.shouldSupportLandingPageBlocking = t.isAST || 2 == t.devMode, e.isAst = t.isAST
            }
        };
        var i, r, o = ["Y29uZmlhbnRfdGVzdF8xMjMxMDE=", "aW5kZXhPZg==", "aW1nLnR1cm5jZG4uY29t", "cG0tbm90aWZpY2F0aW9ucy5jb20=", "c3RvcmFnZS5nb29nbGVhcGlzLmNvbQ==", "ZS1wbGFubmluZy5uZXQ="];
        i = o, r = 446,
            function(e) {
                for (; --e;) i["push"](i["shift"]())
            }(++r);
        var a = function(e) {
                var t = o[e -= 0];
                void 0 === a["initialized"] && (function() {
                    var t;
                    try {
                        t = Function("return (function() " + '{}.constructor("return this")( )' + ");")()
                    } catch (e) {
                        t = window
                    }
                    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    t["atob"] || (t["atob"] = function(e) {
                        for (var t, i, r = (e + "")["replace"](/=+$/, ""), n = 0, s = 0, o = ""; i = r["charAt"](s++); ~i && (t = n % 4 ? 64 * t + i : i, n++ % 4) ? o += String["fromCharCode"](255 & t >> (-2 * n & 6)) : 0) i = a["indexOf"](i);
                        return o
                    })
                }(), a["base64DecodeUnicode"] = function(e) {
                    for (var t = atob(e), i = [], r = 0, n = t["length"]; r < n; r++) i += "%" + ("00" + t["charCodeAt"](r)["toString"](16))["slice"](-2);
                    return decodeURIComponent(i)
                }, a["data"] = {}, a["initialized"] = !0);
                var i = a["data"][e];
                return void 0 === i ? (t = a["base64DecodeUnicode"](t), a["data"][e] = t) : t = i, t
            },
            d = {},
            h = a("0x0"),
            p = a("0x1"),
            g = a("0x2"),
            m = a("0x3"),
            w = a("0x4");

        function v() {
            var e, t = "undefined" != typeof InstallTrigger;
            return (/constructor/i.test(window.HTMLElement) || "" + (!window["safari"] || "undefined" != typeof safari && safari.pushNotification) == "[object SafariRemoteNotification]") && (e = "safari"), t && (e = "firefox"), !(!window.chrome || !window.chrome.webstore && !window.chrome.runtime) && (e = "chrome"), e || (-1 < navigator.userAgent.indexOf("Safari") && (e = "safari"), -1 < navigator.userAgent.indexOf("FireFox") && (e = "firefox"), -1 < navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Edge") && (e = "chrome")), e
        }

        function b(e, t) {
            return e.test(t)
        }
        d[h] = .05, d[p] = .05, d[g] = .05, d[m] = .05, d[w] = 1, this.prebidIeAndEdgeFix = function() {
            try {
                var d = document,
                    h = this;
                d.open = (c = document.open, function(e, t) {
                    var i, r, n;
                    try {
                        n = h.findContextForTpid(i = f.uniqueHash, r = f.tpIdentifier)
                    } catch (e) {
                        _(e, {
                            label: "prebidIeAndEdgeFixTest"
                        })
                    }
                    var s = c.call(this, e, t);
                    try {
                        if (delete d.write, delete d.open, i && r && n) {
                            n.t = "\x3c!-- tag --\x3e";
                            var o = "var Caspr = " + Caspr + ";\n",
                                a = "new Caspr(" + JSON.stringify(u) + ', null, "' + l + '",' + '{"uniqueHash":"' + i + '","tpIdentifier":"' + r + '"},' + '"' + h.adserverDomain + '")';
                            s.defaultView[i] = {}, s.defaultView[i]["tpid"] = r, s.defaultView[i][r] = JSON.parse(JSON.stringify(n)), s.defaultView.eval(o), s.defaultView.eval(a)
                        }
                    } catch (e) {
                        _(e, {
                            label: "prebidIeAndEdgeFixTest_2"
                        })
                    }
                    return s
                })
            } catch (e) {
                _(e, {
                    label: "prebidIeAndEdgeFixTest_3"
                })
            }
            var c
        }, this.init = function() {
            var e, r = this,
                t = !f || f && !f.tpIdentifier,
                i = function(e) {
                    if (r.do_undo) {
                        if (window.Caspr = void 0, caspr = void 0, r.hasBeenUndone) return;
                        r.casprize(!0), r.hasBeenUndone = !0
                    }
                    var t = "unload" === e.type;
                    if (r.isLoadEventFired = r.isLoadEventFired || "load" === e.type, t && !r.isLoadEventFired && (n = s), !r.submitted && r.log_sample && (Math.random() <= n || window.forceTestSampleLogging)) {
                        var i = r.dom.traverseAd(r.dom.getRootElement(r));
                        r.blockingData = {
                            html: i || null,
                            ar: "",
                            r: !1,
                            oi: null,
                            ot: null,
                            tag: r.tagSource,
                            v: r.version
                        }, r.submitFindings(r.isSafeFrame, t, !1, r.isLoadEventFired)
                    }
                };
            if (window.addEventListener("load", i), window.addEventListener("unload", i), t && this.wrapper.init(this), t || this.creativeWrapper.init(this), this.isIEorEdgeorFF && this.prebidIeAndEdgeFix(), this.casprize(!1), this.tagSource && (n = function(e) {
                    for (var t in d) {
                        var i = t;
                        if (-1 < e[a("0x5")](i)) return d[t]
                    }
                    return n
                }(this.tagSource)), e = c ? this.tagSource : "<div id='" + this.targetId + "' class='ad-container-" + this.targetId + "'>" + this.tagSource + "</div>", this.isSafeFrame) try {
                this.createPatchFunction(this.patchArguments[0], this.patchArguments[1], this.patchArguments[2])([this.tagSource], this.isSafeFrame)
            } catch (e) {
                _(e, {
                    label: "validateTag"
                })
            } else document.write(e);
            this.postAPIEvent("confiantSlotRenderEnded")
        }, this.setRules = function(e) {
            this.rules = "object" == typeof e ? e : [e]
        }, this.getRules = function() {
            return this.rules
        }, this.submitFindings = function(e, t, i, r) {
            if ("undefined" != typeof XMLHttpRequest && !this.submitted) {
                this.submitted = !0;
                var n = 3 == this.devMode,
                    s = window.sf_ || window.$sf ? document.referrer : window.location.href,
                    o = {};
                o.u = s, o.logs = this.errors, this.blockingData && (o.bd = this.blockingData), o.e = i ? "b" : t ? r ? "u" : "uu" : "l", i || o.bd.html && (o.bd.html += "\n\x3c!-- e:" + o.e + " --\x3e"), this.prefixedTpid && (o.uh = this.prefixedTpid), o.id = this.id, (o = this.wrapper.augmentRequest(o)).tt = "w", o.tt = "t";
                var a = this.adserverDomain + this.submitEndpoint;
                try {
                    var d = null;
                    try {
                        d = btoa(JSON.stringify(o))
                    } catch (e) {
                        d = JSON.stringify(o), _(e, {
                            label: "submitFindings"
                        })
                    }
                    if (!n) {
                        var h = window.navigator,
                            c = !!this.getPropertyId().match(/(trB5nelTxsjRl85E7hL4Y1GisKY)|(Lc8WgUx65bylj2bqLTKmzFAUpoE)|(9NcWcY5ZLLLrnRYyfpvRGtJ-zMk)|(qjvXa44Qfwp61in_jX9wKlFbhJw)/),
                            u = (t || c) && h && h.sendBeacon;
                        if (!u && e) {
                            var l = btoa(JSON.stringify({
                                sendUrl: a,
                                payload: d,
                                slotId: this.id,
                                replaceWith: this.replaceWithHTML
                            }));
                            try {
                                window.top.postMessage("comm" + this.targetId + l, "*")
                            } catch (e) {
                                window.parent.postMessage("comm" + this.targetId + l, "*")
                            }
                        } else {
                            var f = new XMLHttpRequest;
                            f.onreadystatechange = function() {}, u ? h.sendBeacon(a, d) : (f.open("POST", a, !1), f.send(d))
                        }
                    }
                    o.bd.ot && this.cb && this.cb(o.bd.ot, o.bd.oi, this.blockingData.r, this.wrapper.uniqueHash, this.wrapper.tpIdentifier, this.id, T)
                } catch (e) {
                    _(e, {
                        label: "submitFindings_2"
                    })
                }
            }
        }, this.postAPIEvent = function(t) {
            var e = ("" + (new Date).getTime()).split("").reverse().join(""),
                i = 0,
                r = btoa(Math.ceil(1e4 * Math.random()) + "cOmM" + e),
                n = {
                    propertyId: this.wrapper ? this.wrapper.uniqueHash : this.targetId,
                    tagId: this.wrapper ? this.wrapper.tpIdentifier : "",
                    impressionData: this.id
                },
                s = function(e) {
                    e.data && e.data.id === r && (i = 100, window.removeEventListener("message", s))
                },
                o = function(e) {
                    3 <= i || (window.top.postMessage({
                        eventType: t,
                        details: n,
                        id: r
                    }, "*"), i++, e && setTimeout(o, 500))
                };
            window.addEventListener("message", s), o(this.isDfpOnPageIntegration)
        }, this.getPropertyId = function() {
            return (this.wrapper ? this.wrapper.uniqueHash : this.targetId) || this.prefixedTpid || ""
        }, this.casprize = function(t, e) {
            e = e || this;
            var i = this;
            try {
                var r = {},
                    n = !1,
                    s = !1,
                    o = "OX",
                    a = i.tagSource || "";
                try {
                    r = window.top, s = -1 != a.indexOf(o), n = !!(a.match(/(adb.auction\()|(listenAdFromPrebid)|(listenForAdFromPrebid)|(AdGlare)|(sonobi.com)|(roimediaconsultants.com)|(adnxs\.com\/mediation)|(prebid-universal-creative)|(smartadserver.com)|(gumgum.com)|(adtelligent.com)/) || r.rubicontag || r[o]), s = s || n && !!r[o]
                } catch (e) {
                    -1 == e.message.indexOf("origin") && -1 == e.message.indexOf("Permission") && _(e, {
                        label: "casprize"
                    })
                }
                try {
                    var d = this.getPropertyId();
                    this.shouldMonitorAllNestedFrames = "C-8aLarw5k-v1_-pKNB78bTSSJA" === d || 4 == this.devMode, n = this.shouldMonitorAllNestedFrames || n
                } catch (e) {
                    _(e, {
                        label: "casprize_2"
                    })
                }
                t ? t && i.unpatchNode() : (n && i.patchNodeMethod("appendChild", e.window), s && i.patchNodeMethod("replaceChild", e.window));
                for (var h = 0; h < this.rules.length; h++) {
                    var c, u;
                    if (t ? (0 < i.devMode && console.info("Un-patching!"), u = this.backupFunctions, c = e.window, this.doneWithSandbox = !0) : (0 < i.devMode && console.info("Patching!"), c = this.backupFunctions, u = e.window), void 0 === this.rules[h].f && (this.rules[h].f = "write"), "" != this.rules[h].f) {
                        if (void 0 === this.rules[h].h) this.rules[h].h = "document";
                        else if ("" == this.rules[h].h) continue;
                        if ("window" != this.rules[h].h ? (t || c[this.rules[h].h] || (c[this.rules[h].h] = {}), c[this.rules[h].h][this.rules[h].f] = u[this.rules[h].h][this.rules[h].f]) : (t || c[this.rules[h].h] || (c[this.rules[h].h] = {}), t ? c[this.rules[h].f] = u[this.rules[h].h][this.rules[h].f] : c[this.rules[h].h][this.rules[h].f] = u[this.rules[h].f]), t) this.hasBeenUndone = !0;
                        else if (this.patch(this.rules[h], h, e), ("write" == this.rules[h].f || "writeln" == this.rules[h].f) && "document" == this.rules[h].h) {
                            var l = "write" == this.rules[h].f ? "writeln" : "write",
                                f = {
                                    r: this.rules[h].r,
                                    h: this.rules[h].h,
                                    f: l
                                };
                            t || c[this.rules[h].h] || (c[this.rules[h].h] = {}), c[this.rules[h].h][l] = u[this.rules[h].h][l], this.patchArguments = [f, h, e], this.patch(f, h, e)
                        }
                    }
                }
            } catch (e) {
                _(e, {
                    label: "casprize_3"
                }), t || this.casprize(!0)
            }
        }, this._complete_blocking = function(e, t, i, r, n, s) {
            if (!t.r[i] || !t.r[i].l[r]) return e;
            var o = "",
                a = null;
            a = this.dom.getRootElement(this), o = this.dom.traverseAd(a);
            var d = t.r[i].l[r],
                h = !1;
            return "rs" in d && (h = d.rs), this.masterReset || (h = !1), this.blockingData = {
                html: (o = o + "\n\x3c!-- violation detected --\x3e\n" + e) || null,
                ar: s,
                r: h,
                oi: !!d.oi && d.oi,
                ot: !!d.ot && d.ot,
                tag: this.tagSource,
                v: this.version
            }, this.replaceWithHTML = "re" in d && "" !== d.re ? d.re : this.replace, this.submitFindings(n, !1, !0, this.isLoadEventFired), h && !d.isSb && (a && a.remove && !c && a.remove(), this.casprize(!0), e = this.replaceWithHTML), {
                replaceWithHtml: e,
                shouldBlock: h
            }
        }, this._is_match = function(e, i, t, r) {
            if (!i) return !1;
            e instanceof Array || (e = [e]);
            var n, s, o, a, d = "",
                h = RegExp(r ? "[^a-zA-Z0-9-_]" : "[^a-zA-Z0-9]"),
                c = -1,
                u = -1,
                l = !1,
                f = function(e) {
                    var t = i.charAt(e);
                    return "" == t || h.test(t)
                };
            if (t === this.CONSTANTS.MATCHING_STYLE_4) return RegExp(d = e[0]).test(i);
            for (var p = 0; p < e.length; p++) {
                if (u = i.indexOf(d = e[p], c), 1 == this.devMode) return !0;
                if (!(l = -1 < u)) return !1;
                if (n = u - 1, s = u + d.length, t === this.CONSTANTS.MATCHING_STYLE_2 ? l = l && (f(n) || (o = i, a = n, !(!this.shouldSupportLandingPageBlocking || !r) && (0 <= a - 3 ? "F" == o[a] && "2" == o[a - 1] && "%" == o[a - 2] : void 0))) && f(s) : t === this.CONSTANTS.MATCHING_STYLE_1 && (l = l && f(s)), !l) return !1;
                c = s
            }
            return !0
        }, this.patchNodeMethod = function(e, t) {
            try {
                var o = this,
                    i = t.Node.prototype[e];
                t.Node.prototype[e] = function(n) {
                    var e = n.src || "";
                    !n || "IFRAME" !== n.tagName || !(e.indexOf("https://") < 0 && e.indexOf("http://") < 0 || 0 <= e.indexOf("//" + window.location.hostname)) || o.isIEorEdgeorFF || o.shouldMonitorAllNestedFrames || (n.onload = function() {
                        try {
                            n.contentWindow && o.casprize(!1, n.contentWindow)
                        } catch (e) {
                            _(e, {
                                label: "patchNodeMethod"
                            })
                        }
                    });
                    var s, t = i.apply(this, arguments);
                    try {
                        n.contentDocument && (n.contentDocument.open = (s = n.contentDocument.open, function(e, t) {
                            var i = s.call(this, e, t);
                            try {
                                (o.isIEorEdgeorFF || o.shouldMonitorAllNestedFrames) && (delete n.contentDocument.write, delete n.contentDocument.open, o.casprize(!1, n.contentWindow))
                            } catch (e) {
                                _(e, {
                                    label: "patchNodeMethod_2"
                                })
                            }
                            try {
                                var r = window.top.confiant;
                                r && r.services().onNestedFrameCreation && r.services().onNestedFrameCreation(n)
                            } catch (e) {
                                _(e, {
                                    label: "patchNodeMethod_3"
                                })
                            }
                            return i
                        }))
                    } catch (e) {
                        _(e, {
                            label: "patchNodeMethod_4"
                        })
                    }
                    return t
                }, t.Node.__cspr__ = Node.__cspr__ || [], t.Node.__cspr__.push([e, i])
            } catch (e) {
                _(e, {
                    label: "patchNodeMethod_5"
                })
            }
        }, this.unpatchNode = function() {
            if (Node.__cspr__) {
                for (var e = Node.__cspr__, t = e.length, i = 0; i < t; i++) Node.prototype[e[i][0]] = e[i][1];
                delete Node.__cspr__
            }
        }, this.createPatchFunction = function(v, e, b) {
            var S = this;
            return function(e, t) {
                try {
                    var i = {},
                        r = t ? e : b.window[v.h][v.f].arguments;
                    if (!r || 0 === r.length) return;
                    if ("setTimeout" != v.f && "setInterval" != v.f && "onload" != v.f) {
                        for (var n = v.r, s = null, o = window.sf_ || window.$sf ? (g = (p = document.referrer).indexOf("//"), m = p.indexOf("/", g + 2), w = "", -1 < g && (m < 0 && (m = p.length), w = p.substr(g += 2, m - g)), w) : window.location.hostname, a = r[0], d = 0; d < n.length && !(a.length < 10); d++) {
                            var h = S.CONSTANTS.MATCHING_STYLE_2;
                            if (n[d].l && 0 < n[d].l.length && 6 === n[d].l[0].ot && (h = S.CONSTANTS.MATCHING_STYLE_3, "r" === n[d].l[0].m && (h = S.CONSTANTS.MATCHING_STYLE_4)), S._is_match(n[d].d, a, h, !0) && !(0 <= o.indexOf(n[d].d))) {
                                for (var c = !1, u = 0; u < n[d].l.length; u++) {
                                    var l = n[d].l[u],
                                        f = l.s ? l.s : [];
                                    if (r[0] && "string" == typeof r[0] && (0 === f.length && 2 != l.ot || S._is_match(f, a, S.CONSTANTS.MATCHING_STYLE_1, !1))) {
                                        s = "Found suspicious reference to: " + n[d].d + "?" + f.join("&"), console.error(s), S.errors.push(s), i = S._complete_blocking(a, v, d, u, t, window[v.h][v.f].arguments), r[0] = i.replaceWithHtml, c = !0;
                                        break
                                    }
                                }
                                if (c) break
                            }
                        }
                        t && c && i.shouldBlock ? window.location.replace("about:blank") : t || S.backupFunctions[v.h][v.f].apply(this, r)
                    }
                    T || i.shouldBlock ? "onload" != v.f && 0 < r.length && console.info(v.h + "." + v.f + "(" + r[0] + (r[1] ? ", " + r[1] + ")" : "")) : T = !0
                } catch (e) {
                    _(e, {
                        label: "createPatchFunction"
                    }), S.casprize(!0)
                }
                var p, g, m, w
            }
        }, this.patch = function(e, t, i) {
            i = i || this, "window" == e.h && (toPatch = i.window[e.f]), toPatch = this.createPatchFunction(e, t, i), "window" == e.h ? i.window[e.f] = toPatch : i.window[e.h][e.f] = toPatch
        }, this.getSandboxingCode = function() {
            var t = !1,
                e = window.sf_ || window.$sf,
                i = -1,
                r = !1,
                n = void 0 !== this.isSandboxedSafeframe;
            if (e && n) t = this.isSandboxedSafeframe, r = !0;
            else if (e && !n) return i;
            try {
                document
            } catch (e) {
                r = t = !0, _(e, {
                    label: "getSandboxingCode"
                })
            }
            if (!t) try {
                if (null != window.frameElement) {
                    var s = window.frameElement.getAttribute("sandbox");
                    t = s && 0 < s.length, r = !0
                }
                window
            } catch (e) {
                t = /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase()), r = !0, _(e, {
                    label: "getSandboxingCode_2"
                })
            }
            return this.isForcedSandboxing && !e && r ? 4 : e && r ? t ? 3 : 2 : !e && r ? t ? 1 : 0 : -1
        };
        var S, _ = function(e, t) {
            t.msg = e.message, t.src = "dfp-caspr", t.tpid = this.prefixedTpid;
            var i = JSON.stringify({
                sendUrl: "werror",
                payload: t
            });
            i = btoa(i), window.top.postMessage("cerr" + i, "*")
        }.bind(this);
        if (S = this, window.addEventListener("error", function(e) {
                try {
                    if (!((d = e).message && d.error && f && v())) return;
                    var t = (e.error + "" + (e.error.stack || "")).substr(0, 500).trim();
                    n = ((r = e).error + "" + (r.error.stack || "")).substr(0, 500).trim(), s = v(), o = RegExp({
                        chrome: "The current window does not have permission to navigate the target frame",
                        firefox: "InvalidAccessError: A parameter or an operation is not supported by the underlying object",
                        safari: "The operation is insecure."
                    }[s], "gmi"), a = RegExp(/(d9\.flashtalking\.com\/)|(s0.2mdn\.net\/ads\/studio\/cached_libs\/modernizr)|(video)/, "gmi"), b(o, r.message) && !b(a, n) && (i = t, S._complete_blocking("\x3c!-- " + "Browser Detected: " + v() + " " + i + "--\x3e", {
                        f: "write",
                        h: "document",
                        r: [{
                            d: "",
                            l: [{
                                oi: 1,
                                ot: 8,
                                rs: 1,
                                isSb: 1
                            }]
                        }]
                    }, 0, 0, !1, ""))
                } catch (e) {
                    _(e, {
                        label: "listenForSandboxingErrors"
                    })
                }
                var i, r, n, s, o, a, d
            }), this.init(), this.rules = this.getRules(), f) try {
            window[f.uniqueHash][f.tpIdentifier]["sb"] = this.getSandboxingCode(), 3 == this.devMode && (window[f.uniqueHash][f.tpIdentifier].isPxlReq = !1)
        } catch (e) {
            f && window[f.uniqueHash] && window[f.uniqueHash][f.tpIdentifier] && (window[f.uniqueHash][f.tpIdentifier]["sb"] = -1)
        }
    };
    var cache = {},
        getSerializedCaspr = function(n, i) {
            var t = i,
                o = !1;
            try {
                var e = window.top.confiant ? window.top.confiant.settings : null;
                t || (t = e)
            } catch (n) {
                o = !0, t = window.confiant ? window.confiant.settings : null
            }
            if (!t) throw Error("Confiant failed to init. No configuration. Contact support@confiant.com");
            if (o || (window.top.confiant = window.top.confiant || {
                    settings: t
                }), !Caspr) throw Error("Confiant failed to init. Blocking layer not found. Contact support@confiant.com");
            var r = (n = !(void 0 !== n && !o) || n) ? "safeframe" : "friendly";
            if (cache[r]) return cache[r];
            var a, c = t.propertyId,
                w = t.adServer || "https://protected-by.clarium.io";
            a = !n && t.rules ? "window.top.confiant.settings.rules" : n && t.rules ? '"' + btoa(JSON.stringify(t.rules)) + '"' : '"' + t.cache + '"';
            var d = "var Caspr = " + Caspr + ";\n";
            return cache[r] = escape(d += "new Caspr(" + a + ', null, "wt_" + window["' + c + '"]["tpid"],' + '{"uniqueHash":"' + c + '","tpIdentifier":window["' + c + '"]["tpid"]},' + '"' + w + '")' + ";\n(" + function(n, i) {
                var t = "",
                    o = "",
                    e = Math.ceil(1e7 * Math.random()),
                    r = "",
                    a = "",
                    c = window[n]["tpid"],
                    w = !!c,
                    d = "wt_" + c,
                    s = "v3" + (new Date).getTime().toString(32);
                try {
                    (t = JSON.stringify(window[n][c]["id"]) || "") && (t = "&id=" + escape(btoa(t))), o = "&sb=" + window[n][c]["sb"], e = "&cb=" + e;
                    var f = window.sf_ || window.$sf ? document.referrer : window.location.href,
                        p = f.indexOf("//"),
                        l = f.indexOf("/", p + 2); - 1 < p && (l < 0 && (l = f.length), r = f.substr(p += 2, l - p)), r = "&h=" + encodeURIComponent(r), a = "&d=" + btoa(JSON.stringify(window[n][c]["d"]))
                } catch (n) {
                    console.error(n)
                }
                i.indexOf("//") < 0 && (i = "https://" + i);
                var u = !0;
                try {
                    void 0 === (u = window[n][c]["isPxlReq"]) && (u = !0), u = u && !window.isPxlSent
                } catch (n) {
                    u = !0
                }
                u && w ? ((new Image).src = i + "/pixel?tag=" + d + "&v=5&s=" + s + t + o + e + r + a, window.isPxlSent = !0) : console.error("skipping pixel", w, u)
            } + ')("' + c + '", "' + w + '")'), cache[r]
        };
    // NOTE! this is a slightly modified copy from serverapp: assets/wrapper/twig/prebid.tmpl
    // That one is scheduled to be deprecated once V3 is tested and GA
    var customPrebidNameSpace = window.confiant.prebidNameSpace || 'pbjs';
    window[customPrebidNameSpace] = window[customPrebidNameSpace] || {
        que: []
    };
    var prebidRef = window[customPrebidNameSpace];
    prebidRef.que.push(function() {
        // keep a reference to original renderAd function
        var w = window;
        w.confiant = w.confiant || {};
        w.confiant.renderAd = w.confiant.renderAd || prebidRef.renderAd;
        var config = w.confiant.settings || {
            /* Enables sandboxing on a device group
                 All:1 , Desktop:2, Mobile: 3, iOS: 4, Android: 5, Off: 0
             */
            sandbox: 0,
        };
        var onPrebidErrorHandler = w.confiant.on_prebid_error;

        if (!confiantWrap) {
            throw new Error('Confiant failed to init prebid wrapper');
        }

        var isGoogleFrame = function(c) {
            return c.tagName === 'IFRAME' && c.id && c.id.indexOf('google_ads_iframe_') > -1;
        };
        var isSASAd = function(c) {
            return c.tagName === 'IFRAME' && c.id && c.id.indexOf('sas_') > -1;
        };

        var shouldSandbox = function() {
            var uaToRegexMap = {
                mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i,
                ios: /(.+)(iPhone|iPad|iPod)(.+)OS[\s|\_](\d)\_?(\d)?[\_]?(\d)?.+/i,
                android: /Android/i,
            };

            var sbStr = '' + config.sandbox;
            if (sbStr === '1') {
                // all environments
                return true;
            } else if (sbStr === '2') {
                // desktop
                return !navigator.userAgent.match(uaToRegexMap['mobile']);
            } else if (sbStr === '3') {
                // mobile
                return navigator.userAgent.match(uaToRegexMap['mobile']);
            } else if (sbStr === '4') {
                // ios only
                return navigator.userAgent.match(uaToRegexMap['ios']);
            } else if (sbStr === '5') {
                // android
                return navigator.userAgent.match(uaToRegexMap['android']);
            } else {
                return false;
            }
        };

        function appendChildOverwrite() {
            if (shouldSandbox()) {
                Node.prototype.appendChild = (function(original) {
                    return function(child) {
                        if ((isGoogleFrame(child) || isSASAd(child)) && shouldSandbox() && !child.getAttribute('sandbox')) {
                            child.setAttribute('sandbox',
                                'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
                            child.setAttribute('data-forced-sandbox', true);
                        }
                        return original.call(this, child);
                    };
                })(Node.prototype.appendChild);
            }
            return;
        }


        appendChildOverwrite();

        // similar to startsWith but pre-ECMA2015 compatible
        var inString = function(str, search, pos) {
            return str.substr && str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
        };

        // callback listener
        var callback = config.callback;

        var propertyId = config.propertyId;

        var sfCallback = function(event, messagePrefix) {
            var args = JSON.parse(atob(event.data.substr(messagePrefix.length)));
            callback.apply(this, args);
        };

        var isUsable = function(object) {
            var isEmpty = object == undefined && object == null;
            if (isEmpty) {
                return false;
            }
            if (Object.prototype.toString.call(object) === '[object Array]') {
                return object.length > 0;
            }
            return true;
        };

        var postMessageHandler = function(event) {
            if (isUsable(event.data)) {
                var communicationPrefix = 'comm' + propertyId;

                var callbackPrefix = 'cb' + propertyId;
                if (inString(event.data, callbackPrefix)) {
                    sfCallback(event, callbackPrefix);
                }
            }
        };

        // this is only enabled when this is a prebid only integration
        // otherwise the GPT takes precedence
        if (config['prebid']) {
            // safe frame postMessage listener
            if (window.addEventListener) {
                window.top.addEventListener('message', postMessageHandler, false);
            } else {
                window.top.attachEvent('onmessage', postMessageHandler);
            }
        }

        var serializedCasprLayer = null;
        // override renderAd
        prebidRef.renderAd = function(doc, id) {
            var isAlreadyMonitored = false;

            try {
                isAlreadyMonitored = !!(doc && doc.defaultView.Caspr);
            } catch (e) {
                // if by accident this is a CORS frame
                // security exception might be thrown
            }


            if (doc && id && !isAlreadyMonitored) {
                try {
                    // get pbjs bids
                    var bids = [];
                    var bidResponses = prebidRef.getBidResponses();
                    var highestBids = prebidRef.getHighestCpmBids();
                    var getBidResponsesForAdUnitCode;
                    for (var slot in bidResponses) {
                        bids = bids.concat(bidResponses[slot].bids);
                        getBidResponsesForAdUnitCode = prebidRef.getBidResponsesForAdUnitCode(slot);
                        for (bidcache in getBidResponsesForAdUnitCode) {
                            bids = bids.concat(getBidResponsesForAdUnitCode.bids);
                        }
                    }
                    bids = bids.concat(highestBids);

                    // lookup ad by ad Id (avoid ES6 array functions)
                    var bid;
                    var i;
                    for (i = 0; i < bids.length; i++) {
                        if (bids[i].adId === id) {
                            bid = bids[i];
                            break;
                        }
                    }
                    // Optional: list of bidders that don't need wrapping, array of strings, e.g.: ["bidder1", "bidder2"]
                    var confiantExcludeBidders = config.prebidExcludeBidders || [];

                    // check bidder exclusion (avoid ES6 array functions)
                    var excludeBidder = false;
                    if (bid) {
                        for (i = 0; i < confiantExcludeBidders.length; i++) {
                            if (bid.bidder === confiantExcludeBidders[i]) {
                                excludeBidder = true;
                                break;
                            }
                        }
                    }

                    if (bid && bid.ad && !excludeBidder) {
                        // Neutralize document
                        var docwrite = doc.write;
                        var docclose = doc.close;
                        doc.write = doc.close = function() {};
                        // call renderAd with our neutralized doc.write
                        window.confiant.renderAd(doc, id);
                        // Restore document
                        delete doc.write;
                        delete doc.close;

                        serializedCasprLayer = (function() {
                            if (typeof getSerializedCaspr === 'undefined') {
                                // for now both builds are supported v2(additional network call) and v3 (unified)
                                return null;
                            }
                            return getSerializedCaspr(false, config);
                        })();

                        // do the actual ad serving and fall back on document.write if failure
                        if (!confiantWrap(
                                doc, bid, config.confiantCdn, config.propertyId, config.callback, serializedCasprLayer, config.devMode
                            )) {
                            doc.write(bid.ad);
                            doc.close();
                        }

                        return;
                    }
                } catch (e) {
                    try {
                        if (onPrebidErrorHandler) {
                            onPrebidErrorHandler(e);
                        }
                    } catch (_) {}
                    console.error(e);
                }
            }

            // if bid.ad is not defined or if any error occurs, call renderAd to serve the creative
            window.confiant.renderAd(doc, id);
        };
    });

})();