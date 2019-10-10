function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function() {
    "use strict";
    var RFP = window.RFP = window.RFP || {};
    RFP.arguments = function() {
        for (var e = document.getElementsByTagName("script"), t = e[e.length - 1].src, n = t.substring(t.indexOf("?") + 1), o = n.split("&"), i = {}, r = 0; r < o.length; r++) {
            var d = o[r].split("="),
                a = decodeURIComponent(d[0]),
                s = decodeURIComponent(d[1]);
            i[a] = s
        }
        return i
    }();
    var RFP = window.RFP = window.RFP || {};
    RFP.Common = RFP.Common || {}, RFP.Common.Locale = RFP.Common.Locale || {}, RFP.Common.Locale.Config = RFP.Common.Locale.Config || {}, RFP.Common.Config = {
        host: {
            ad: "ad.rfp.fout.jp",
            imp: "imp.rfp.fout.jp",
            click: "click.rfp.fout.jp",
            conv: "conv.rfp.fout.jp",
            assets: "js.rfp.fout.jp"
        },
        protocol: "https:",
        ad_type: {
            infeed: 5
        },
        version: "1.2.6",
        conv: {
            max_request_per_page: 10
        },
        jsonp_timeout_ms: 1e4
    }, RFP.Common.Locale.Config.ir = {
        host: {
            ad: "ad-ir.rfp.fout.jp",
            imp: "imp-ir.rfp.fout.jp",
            click: "click-ir.rfp.fout.jp",
            conv: "conv-ir.rfp.fout.jp",
            assets: "js-ir.rfp.fout.jp"
        }
    };
    var RFP = window.RFP = window.RFP || {};
    RFP.Common = RFP.Common || {},
        function() {
            if (RFP.arguments.country) {
                var e = RFP.arguments.country,
                    t = RFP.Common.Locale.Config[e];
                if (t)
                    for (var n in t) RFP.Common.Config[n] = t[n]
            }
        }();
    var RFP = void 0 === window.RFP ? {} : window.RFP;
    window.RFP = RFP, RFP.Common = void 0 === window.RFP.Common ? {} : window.RFP.Common, RFP.Common.Util = function() {
        var Util = {};
        Util.forEach = function(e, t, n) {
            if (Array.prototype.forEach) return Array.prototype.forEach.call(e, t, n);
            if (void 0 === e) throw new TypeError;
            if ("function" != typeof t) throw new TypeError;
            for (var o = e.length >>> 0, i = 0; i < o; i++) i in e && t.call(n, e[i], i, e)
        }, Util.map = function(e, t, n) {
            if (Array.prototype.map) return Array.prototype.map.call(e, t, n);
            if (void 0 === e) throw new TypeError;
            if ("function" != typeof t) throw new TypeError;
            for (var o = e.length >>> 0, i = [], r = 0; r < o; r++) r in e && (i[r] = t.call(n, e[r], r, e));
            return i
        }, Util.objectSeal = function(e) {
            return Object.seal ? Object.seal(e) : e
        }, Util.jsonParse = function(json_str) {
            return window.JSON ? window.JSON.parse(json_str) : eval("(" + json_str + ")")
        }, Util.waitDomReady = function(e) {
            function t() {
                try {
                    document.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(t, 0)
                }
                e()
            }
            var n = !1;
            if ("complete" === document.readyState || "loaded" === document.readyState) return void e();
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", function() {
                e(), n = !0
            }, !1), window.addEventListener("load", function() {
                n || e()
            }, !1);
            else if (window.attachEvent) window.ActiveXObject && window === window.top ? t() : window.attachEvent("onload", e);
            else {
                var o = window.onload;
                window.onload = function() {
                    "function" == typeof o && o(), e()
                }
            }
        }, Util.extend = function(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }, Util.inherits = function(e, t) {
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.baseConstructor = t
        }, Util.isObject = function(e) {
            var t = _typeof(e);
            return "function" === t || "object" === t && !!e
        }, Util.isFunction = function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }, Util.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, Util.isSmartPhone = function(e) {
            void 0 === e && (e = window.navigator.userAgent);
            var t = e.toLowerCase();
            return -1 !== t.indexOf("iphone") || -1 !== t.indexOf("ipad") || -1 !== t.indexOf("ipod") || -1 !== t.indexOf("android")
        }, Util.throttle = function(e, t) {
            var n = this;
            t = +t || 0;
            var o = Date.now();
            return function() {
                o + t - Date.now() < 0 && (e.apply(n), o = Date.now())
            }
        };
        var handlers = {},
            signals = {};
        Util.on = function(e, t) {
            handlers[e] || (handlers[e] = []), handlers[e].push(t)
        }, Util.one = function(e, t) {
            signals[e] || (signals[e] = []), signals[e].push(t)
        }, Util.emit = function(e, t) {
            if (signals[e])
                for (; signals[e].length;) signals[e].pop()(t);
            if (handlers[e])
                for (var n = handlers[e].length; --n > -1;) handlers[e][n](t)
        }, Util.inView = function(e, t) {
            var n = e.getBoundingClientRect(),
                o = {
                    t: n.bottom,
                    r: window.innerWidth - n.left,
                    b: window.innerHeight - n.top,
                    l: n.right
                },
                i = {
                    x: t * n.width,
                    y: t * n.height
                };
            return o.t > i.y && o.r > i.x && o.b > i.y && o.l > i.x
        };
        var InViewObserver = {
            elements: []
        };
        return InViewObserver.addElement = function(e) {
            InViewObserver.elements.indexOf(e) < 0 && InViewObserver.elements.push(e)
        }, InViewObserver.removeElement = function(e) {
            var t = InViewObserver.elements.indexOf(e);
            t >= 0 && InViewObserver.elements.splice(t, 1)
        }, InViewObserver.observe = function(e, t) {
            e = +e || 0, t = +t || 1;
            var n = [],
                o = function() {
                    InViewObserver.elements.forEach(function(e) {
                        var o = Util.inView(e, t),
                            i = n.indexOf(e),
                            r = i > -1,
                            d = o && !r,
                            a = !o && r;
                        d && (n.push(e), Util.emit("enter", e)), a && (n.splice(i, 1), Util.emit("exit", e))
                    })
                };
            ["scroll", "resize", "load"].forEach(function(t) {
                addEventListener(t, Util.throttle(o, e))
            }), window.MutationObserver && addEventListener("DOMContentLoaded", function() {
                new MutationObserver(Util.throttle(o, e)).observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                })
            })
        }, Util.InViewObserver = InViewObserver, Util
    }();
    var RFP = window.RFP = window.RFP || {};
    RFP.Common = RFP.Common || {}, RFP.Common.NetworkBase = function() {
        var e = {};
        return e.makeCacheBuster = function() {
            return Math.floor(1e13 * Math.random())
        }, e.sendRequest = function(t) {
            var n = e._createRequestInstance();
            n.open("GET", t, !0), n.withCredentials = !0, n.send()
        }, e.sendBeaconRequest = function(e) {
            (new Image).src = e
        }, e.callJsonAPI = function(t, n, o) {
            e._supportXHR2() ? e.sendAjaxRequest(t, n) : e.sendJSONPRequest(t, n, o)
        }, e.sendAjaxRequest = function(t, n) {
            var o = e._createRequestInstance();
            o.onload = function() {
                var e;
                try {
                    e = RFP.Common.Util.jsonParse(o.responseText)
                } catch (e) {
                    return void n(e)
                }
                n(null, e)
            }, o.onerror = function() {
                n(new Error("Network error"))
            }, o.ontimeout = function() {
                n(new Error("Network timeout"))
            }, o.onprogress = function() {}, o.open("GET", t), o.withCredentials = !0, o.send()
        }, e.sendJSONPRequest = function(t, n, o) {
            var i = "rfp-jsonp-" + o;
            if (!document.getElementById(i)) {
                var r, d = e._buildJSONPCallbackName(o),
                    a = t + "&callback=" + encodeURIComponent("RFP." + d),
                    s = e._buildScriptElement(a, i),
                    c = RFP.Common.Config.jsonp_timeout_ms;
                r = setTimeout(function() {
                    RFP[d] = function() {}, n(new Error("Ad request timeout"))
                }, c), RFP[d] = e._buildJSONPCallback(r, s, d, n), e._appendScriptElement(s)
            }
        }, e._supportXHR2 = function() {
            var e = navigator.userAgent.toLowerCase(),
                t = /(msie) ([\w.]+)/.exec(e) || [];
            return !(parseInt(t[2] || 99, 10) <= 7 || !window.XDomainRequest && !window.XMLHttpRequest)
        }, e._createRequestInstance = function() {
            return window.XDomainRequest ? new XDomainRequest : new XMLHttpRequest
        }, e._buildJSONPCallbackName = function(e) {
            return "AdJSONPCallback_" + e
        }, e._buildScriptElement = function(e, t) {
            var n = document.createElement("script");
            return n.src = e, n.id = t, n.type = "text/javascript", n.async = !0, n.charset = "utf-8", n
        }, e._appendScriptElement = function(e) {
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }, e._buildJSONPCallback = function(e, t, n, o) {
            return function(i) {
                return clearTimeout(e), t.parentNode.removeChild(t), delete RFP[n], o(null, i)
            }
        }, e
    }();
    var RFP = window.RFP = window.RFP || {};
    RFP.Common = RFP.Common || {}, RFP.Common.NetworkAd = function() {
        var e = {},
            t = RFP.Common.Util;
        e = t.extend(e, RFP.Common.NetworkBase), e.fetchAds = function(e, n, o, i, r) {
            var d = function(e, d) {
                if (e) return void i(e);
                var a = t.map(d.items, function(e) {
                    return new o(e, n, r)
                });
                i(null, a, d)
            };
            this.callJsonAPI(e, d, n)
        }, e.notifyImp = function(e, t, n) {
            var o = this.buildImpRequestUrl(e, t, n);
            this.sendBeaconRequest(o)
        };
        var n = {};
        return e.callSyncURLs = function(e) {
            if (e.hasOwnProperty("sync_urls") && 0 !== e.sync_urls.length) {
                var t = this;
                RFP.Common.Util.forEach(e.sync_urls, function(e) {
                    n[e] || (t.sendBeaconRequest(e), n[e] = !0)
                })
            }
        }, e.buildAdRequestUrl = function(e) {
            var t = RFP.Common.Config;
            return t.protocol + "//" + t.host.ad + "/ad?" + e.join("&")
        }, e.buildImpRequestUrl = function(e, t, n) {
            var o = RFP.Common.Config,
                i = t.toObject(),
                r = ["adspot_id=" + encodeURIComponent(e), "dat=" + i.dat, "session_id=" + i.session_id, "ad_id=" + i.ad_id, "cachebuster=" + this.makeCacheBuster(), "sdk_version=" + o.version];
            if (RFP.Common.Util.isObject(n) && n.device_id) {
                var d = btoa(unescape(encodeURIComponent(n.device_id)));
                r.push("audience_id=" + encodeURIComponent(d)), r.push("audience_id_type=0")
            }
            return o.protocol + "//" + o.host.imp + "/imp?" + r.join("&")
        }, e.buildClickRequestUrl = function(e, n, o) {
            var i = RFP.Common.Config,
                r = n,
                d = ["adspot_id=" + encodeURIComponent(e), "dat=" + r.dat, "session_id=" + r.session_id, "ad_id=" + r.ad_id, "redirect_url=" + encodeURIComponent(r.redirect_url), "cachebuster=" + this.makeCacheBuster(), "sdk_version=" + i.version];
            if (t.isObject(o) && o.device_id) {
                var a = btoa(unescape(encodeURIComponent(o.device_id)));
                d.push("audience_id=" + encodeURIComponent(a)), d.push("audience_id_type=0")
            }
            return i.protocol + "//" + i.host.click + "/click?" + d.join("&")
        }, e
    }();
    var RFP = window.RFP = window.RFP || {};
    RFP.Common = RFP.Common || {}, RFP.Common.AdInfoModelBase = function() {
        function e(e, t, n) {
            this.base_info = this.store(e, t, n)
        }
        var t = RFP.Common.Util,
            n = ["advertiser_id", "ad_id", "title", "description", "optout_click", "dat", "conv_type", "session_id", "url_scheme", "cta_text"];
        return e.prototype.store = function(e, o, i) {
            var r = {};
            return t.forEach(n, function(t) {
                r[t] = e[t]
            }), r.click_url = RFP.Common.NetworkAd.buildClickRequestUrl(o, e, i), r
        }, e
    }();
    var RFP = void 0 === window.RFP ? {} : window.RFP;
    window.RFP = RFP, RFP.InFeed = void 0 === window.RFP.InFeed ? {} : window.RFP.InFeed, RFP.InFeed.Template = function() {
        function e(e) {
            this.template_str = e, this.tag_open = "{{", this.tag_close = "}}"
        }
        return e.prototype.render = function(e) {
            var t = this.template_str;
            for (var n in e) t = t.replace(new RegExp(this.tag_open + n + this.tag_close, "g"), e[n]);
            return t
        }, e
    }(), RFP.InFeed.Network = function() {
        var e = {},
            t = RFP.Common.Util;
        return e = t.extend(e, RFP.Common.NetworkAd), e.fetchInFeedAds = function(e, t, n, o) {
            var i = this.buildInFeedAdRequestUrl(e, t, o);
            this.fetchAds(i, e, RFP.InFeed.AdInfoModel, n, o)
        }, e.buildInFeedAdRequestUrl = function(e, n, o) {
            var i = RFP.Common.Config,
                r = "";
            try {
                r = window == parent ? parent.document.URL : document.referrer
            } catch (e) {
                r = document.referrer
            }
            var d = ["adspot_id=" + encodeURIComponent(e), "ad_type=" + i.ad_type.infeed, "sequence=" + n, "cachebuster=" + this.makeCacheBuster(), "sdk_version=" + i.version, "media_url=" + encodeURIComponent(r)];
            if (t.isObject(o) && o.device_id) {
                var a = btoa(unescape(encodeURIComponent(o.device_id)));
                d.push("audience_id=" + encodeURIComponent(a)), d.push("audience_id_type=0")
            }
            return this.buildAdRequestUrl(d)
        }, e.notifyTpImp = function(e) {
            var n = e.toObject(),
                o = n.tp_imp_urls;
            if (o && t.isArray(o) && 0 !== o.length) {
                var i = this;
                t.forEach(o, function(e) {
                    i.sendBeaconRequest(e)
                })
            }
        }, e
    }(), RFP.InFeed.AdInfoModel = function() {
        function e(t, n, o) {
            e.baseConstructor.call(this, t, n, o), this.info = this.storeExtended(t)
        }
        var t = ["main_image_url", "displayed_advertiser", "tp_imp_urls", "vast_xml"],
            n = ["title", "description", "click_url", "ad_id", "main_image_url", "displayed_advertiser", "optout_click", "vast_xml", "cta_text"],
            o = RFP.Common.Util;
        return o.inherits(e, RFP.Common.AdInfoModelBase), e.prototype.storeExtended = function(e, n) {
            var i = this.base_info;
            return o.forEach(t, function(t) {
                i[t] = e[t]
            }), i = o.objectSeal(i)
        }, e.prototype.toObject = function() {
            return this.info
        }, e.prototype.toObjectWithPublicParams = function() {
            var e = {},
                t = this;
            return o.forEach(n, function(n) {
                e[n] = t.info[n]
            }), e
        }, e
    }(), RFP.InFeed.PlacementInfoModel = function() {
        function e(e, t) {
            this.info = this.store(e, t)
        }
        var t = ["adspot_id", "template", "title_length", "description_length", "displayed_advertiser_length"],
            n = RFP.Common.Util;
        return e.prototype.store = function(e, o) {
            var i = {};
            return n.forEach(t, function(t) {
                i[t] = e[t]
            }), i.adspot_id = o, i
        }, e.prototype.toObject = function() {
            return this.info
        }, e
    }(), RFP.InFeed.AdView = function() {
        function e(e, n, o) {
            this.template = n, this.el = e, this.options = t.isObject(o) ? o : {}, this.showed = !1
        }
        var t = RFP.Common.Util;
        return e.prototype.show = function(e, n) {
            if (!this.el.parentNode) return void(window.console && "function" == typeof console.info && console.info("The ad place not found. Multiple loading tag may have been placed at same page."));
            t.isFunction(this.options.before_render) && (e = this.options.before_render(e, n));
            var o = t.extend({}, e);
            "string" == typeof o.main_image_url && (o.creative_block_element = '<div class="rfp-creative-block-element"><img src="' + e.main_image_url + '" /></div>');
            var i = this.template.render(o),
                r = this.buildHtmlDomList(i),
                d = this.swapTagToAd(r);
            return this.showed = !0, d
        }, e.prototype.buildHtmlDomList = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.children
        }, e.prototype.swapTagToAd = function(e) {
            var t, n, o = e.length;
            if (this.options.use_wrapper)
                if (o > 1) {
                    var i = document.createElement("div");
                    for (t = 0; t < o; t++) i.appendChild(e[t].cloneNode(!0));
                    n = this.el.parentNode.insertBefore(i, this.el)
                } else n = this.el.parentNode.insertBefore(e[0].cloneNode(!0), this.el);
            else {
                for (t = 0; t < o; t++) this.el.parentNode.insertBefore(e[t].cloneNode(!0), this.el);
                n = this.el.parentNode.children
            }
            return this.el.parentNode.removeChild(this.el), n
        }, e
    }(), RFP.InFeed.PassbackAdView = function() {
        function e(e, t) {
            this.el = e, this.tag = t, this.showed = !1
        }
        return e.prototype.show = function() {
            if (!this.el.parentNode) return void(window.console && "function" == typeof console.info && console.info("The ad place not found. Multiple loading tag may have been placed at same page."));
            var e = this.buildHtmlDomList(this.tag),
                t = this.swapTagToAd(e);
            return this.showed = !0, t
        }, e.prototype.buildHtmlDomList = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.children
        }, e.prototype.swapTagToAd = function(e) {
            var t, n, o, i = e.length,
                r = !1;
            for (t = 0; t < i; t++) {
                var d = e[t];
                if ("script" === d.tagName.toLowerCase()) {
                    r = !0;
                    break
                }
                if (d.getElementsByTagName("script").length > 0) {
                    r = !0;
                    break
                }
            }
            if (r) {
                var a = document.createElement("iframe");
                a.onload = function() {
                    var e = this.contentWindow.document.documentElement.scrollHeight;
                    e > 0 && (this.height = e);
                    var t = this.contentWindow.document.documentElement.scrollWidth;
                    t > 0 && (this.width = t), t > 0 && e > 0 && window.context && window.context.requestResize && window.context.requestResize(t, e)
                }, a.width = "100%", a.frameBorder = "0", a.scrolling = "no", a.marginWidth = 0, a.marginHeight = 0, a.src = "javascript:false", this.el.parentNode.insertBefore(a, this.el);
                var s = "<!DOCTYPE html>";
                for (s += "<html>", s += "<head>", s += '<meta charset="UTF-8" />', s += '<base target="_top" />', s += "</head>", s += "<body>", s += "<script>inDapIF = true;<\/script>", t = 0; t < i; t++) n = e[t], s += n.outerHTML;
                s += "</body>", s += "</html>";
                var c = a.contentWindow.document;
                c.open(), c.write(s), c.close(), o = a
            } else
                for (t = 0; t < i; t++) n = e[t], this.el.parentNode.insertBefore(n.cloneNode(!0), this.el);
            return this.el.parentNode.removeChild(this.el), o
        }, e
    }(), RFP.InFeed.AdController = function() {
        function e(e) {
            if (!e || !e.adspot_id) throw new TypeError("adspot_id is required");
            this.adspot_id = e.adspot_id, this.loaded_ads = [], this.raw_res = null, this.placement_info = {}, this.request_sequence = 0, this.device_id = e.device_id
        }

        function t(e, t) {
            for (var n = 0, o = e.length; n < o; n++)
                if (e[n].toObject().ad_id === t) return e[n]
        }
        var n = RFP.Common.Util;
        return e.prototype.loadAds = function(e) {
            var t = this;
            void 0 === e && (e = function() {});
            var n = this.adspot_id,
                o = this.request_sequence,
                i = {
                    device_id: this.device_id
                };
            RFP.InFeed.Network.fetchInFeedAds(n, o, function(o, i, r) {
                if (o) return void e(o);
                var d = new RFP.InFeed.PlacementInfoModel(r, n);
                t.loaded_ads = t.loaded_ads.concat(i), t.request_sequence++, t.placement_info = d, t.raw_res = r, e(null)
            }, i)
        }, e.prototype.notifyImp = function(e) {
            if (!e || "0" == e || !parseInt(e, 10) && "string" != typeof e) throw new TypeError("ad_id is required");
            var n = t(this.loaded_ads, e);
            if (!n) throw new TypeError("invalid ad id " + e);
            RFP.InFeed.Network.notifyImp(this.adspot_id, n), RFP.InFeed.Network.notifyTpImp(n)
        }, e.prototype.getLoadedAds = function() {
            return n.map(this.loaded_ads, function(e) {
                return e.toObjectWithPublicParams()
            })
        }, e.prototype.getPlacementInfo = function() {
            return n.isFunction(this.placement_info.toObject) ? this.placement_info.toObject() : {}
        }, e.prototype.getRawRes = function() {
            return this.raw_res
        }, e.prototype.showAd = function(e, n) {
            if (e instanceof RFP.InFeed.AdView || "function" == typeof RFP.InFeed.VideoAdView && e instanceof RFP.InFeed.VideoAdView) {
                var o = t(this.loaded_ads, n);
                if (!o) return;
                var i = o.toObjectWithPublicParams(),
                    r = this.getPlacementInfo();
                return e.show(i, r)
            }
            if (e instanceof RFP.InFeed.PassbackAdView) return e.show()
        }, e
    }(), RFP.InFeed.Default = function() {
        function e() {
            if (document.querySelectorAll) return document.querySelectorAll("[data-rfp-adspot-id]");
            for (var e = [], t = document.body.getElementsByTagName("*"), n = t.length, o = 0; o < n; o++) t[o].getAttribute("data-rfp-adspot-id") && e.push(t[o]);
            return e
        }

        function t(e) {
            if (document.querySelectorAll) return document.querySelectorAll("[data-rfp-adspot-id=" + e + "]");
            for (var t = [], n = document.body.getElementsByTagName("*"), o = n.length, i = 0; i < o; i++) {
                (n[i].getAttribute("data-rfp-adspot-id") || "") === e && t.push(n[i])
            }
            return t
        }

        function n(e) {
            var n = t(e);
            m.forEach(n, function(e) {
                e.removeAttribute("data-rfp-adspot-id")
            })
        }

        function o(e, t) {
            var n, o, i, s, l = h[t].rendered_index,
                u = h[t].controller,
                f = u.getLoadedAds(),
                v = f.slice(l);
            if (v.length > 0) {
                var _ = {
                    before_render: p._makeCallbackOfBeforeRender(),
                    adspot_id: t
                };
                p.options.viewable_impression && (_.use_wrapper = !0);
                var R = u.getPlacementInfo().template || c(t);
                if ((p.options.force || {}).template && (R = c(t)), !R) return;
                var F = new RFP.InFeed.Template(R),
                    y = function(e) {
                        p.options.video_auto_play ? e.rfpAdView.player.play() : e.rfpAdView.player.resume()
                    },
                    g = function(e) {
                        e.rfpAdView.player.pause()
                    };
                for (n = 0; n < v.length && n < e.length; n++) {
                    o = v[n].ad_id, i = e[n];
                    var P = a(v[n]);
                    if (w && P) {
                        var b = RFP.Video.VAST.parse(v[n].vast_xml);
                        s = new RFP.InFeed.VideoAdView(i, b, F, _), RFP.InFeed.VideoAdView.loadStyles()
                    } else s = new RFP.InFeed.AdView(i, F, _);
                    var I = u.showAd(s, o);
                    if (w && P) {
                        m.on("enter", y), m.on("exit", g);
                        var C = I.querySelector("video");
                        C.addEventListener("ended", function() {
                            m.InViewObserver.removeElement(C), C.removeEventListener("ended", this)
                        }), C.rfpAdView = s, m.InViewObserver.addElement(C)
                    }
                    s.showed && (d(I), p.options.viewable_impression ? (I.rfpNotifyImpression = function(e) {
                        return function() {
                            u.notifyImp(e)
                        }
                    }(o), m.InViewObserver.addElement(I)) : u.notifyImp(o))
                }
            } else {
                var A = u.getRawRes();
                if (!m.isObject(A)) return void r();
                var E = A.passback_tag;
                if (!E) return void r();
                for (n = 0; n < e.length; n++) {
                    i = e[n], s = new RFP.InFeed.PassbackAdView(i, E);
                    d(u.showAd(s))
                }
            }
            h[t].rendered_index = f.length
        }

        function i() {
            return window.context
        }

        function r() {
            var e = i();
            e && m.isFunction(e.noContentAvailable) && e.noContentAvailable()
        }

        function d(e) {
            var t = {};
            if (e instanceof HTMLElement && e instanceof HTMLIFrameElement == !1) {
                var n = e.getBoundingClientRect();
                n.width > 0 && (t.width = n.width), n.height > 0 && (t.height = n.height)
            }
            var o = i();
            o && m.isFunction(o.renderStart) && o.renderStart(t)
        }

        function a(e) {
            return "string" == typeof e.vast_xml
        }

        function s() {
            m.on("enter", function(e) {
                e.rfpInViewTimerId && (clearTimeout(e.rfpInViewTimerId), delete e.rfpInViewTimerId), e.rfpInViewTimerId = setTimeout(function() {
                    e.rfpNotifyImpression(), delete e.rfpNotifyImpression, delete e.rfpInViewTimerId, m.InViewObserver.removeElement(e)
                }, 1e3)
            }), m.on("exit", function(e) {
                e.rfpInViewTimerId && (clearTimeout(e.rfpInViewTimerId), delete e.rfpInViewTimerId)
            })
        }

        function c(e) {
            var t, n, o = [];
            if (document.querySelectorAll) o = document.querySelectorAll('script[type="text/rfp-infeed-template"]');
            else {
                var i = document.getElementsByTagName("script");
                for (n = i.length, t = 0; t < n; t++) {
                    "text/rfp-infeed-template" === (i[t].getAttribute("type") || "") && o.push(i[t])
                }
            }
            for (n = o.length, t = 0; t < n; t++)
                if (o[t].getAttribute("data-adspot-id") === e) return o[t].innerHTML
        }

        function l(e) {
            var t = h[e].controller,
                n = t.getRawRes();
            n && RFP.InFeed.Network.callSyncURLs(n)
        }

        function u(e, t) {
            return function(i) {
                if (i) return void r();
                o(e, t), n(t), l(t)
            }
        }

        function f() {
            var t, n, o, i = e(),
                r = [],
                d = {};
            for (n = i.length, t = 0; t < n; t++) {
                var a = i[t];
                o = a.getAttribute("data-rfp-adspot-id"), o && (m.isArray(d[o]) || (d[o] = [], r.push(o)), d[o].push(a))
            }
            for (n = r.length, t = 0; t < n; t++) {
                o = r[t];
                var s = d[o];
                h[o] = {}, h[o].rendered_index = 0, h[o].controller = new RFP.InFeed.AdController({
                    adspot_id: o,
                    device_id: p.options.device_id
                }), h[o].controller.loadAds(u(s, o))
            }
        }
        var p = {},
            m = RFP.Common.Util,
            h = {},
            v = (p.options = {
                video_auto_play: !0
            }, !0),
            w = "function" == typeof RFP.InFeed.VideoAdView && "object" === _typeof(RFP.Video);
        return p._makeCallbackOfBeforeRender = function() {
            if (m.isFunction(p.options.before_render)) return p.options.before_render;
            var e = {
                title_len: parseInt(p.options.title_length, 10),
                desc_len: parseInt(p.options.description_length, 10),
                advertiser_len: parseInt(p.options.displayed_advertiser_length, 10),
                force: p.options.force || {}
            };
            return function(t, n) {
                var o = n.title_length || e.title_len,
                    i = n.description_length || e.desc_len,
                    r = n.displayed_advertiser_length || e.advertiser_len;
                return e.force.title_length && e.title_len && (o = e.title_len), e.force.description_length && e.desc_len && (i = e.desc_len), e.force.displayed_advertiser_length && e.advertiser_len && (r = e.advertiser_len), (o || i || r) && (r < 11 && (r = 11), o < t.title.length && (t.title = t.title.substr(0, o - 1) + "\u2026"), i < t.description.length && (t.description = t.description.substr(0, i - 1) + "\u2026"), r < t.displayed_advertiser.length && (t.displayed_advertiser = t.displayed_advertiser.substr(0, r - 1) + "\u2026")), t
            }
        }, p.run = function() {
            m.isObject(arguments[0]) && (p.options = m.extend(p.options, arguments[0])), v && (p.options.viewable_impression && s(), m.InViewObserver.observe(100, .5), v = !1), p.options.immediately ? f() : m.waitDomReady(f)
        }, p.reloadAds = function() {
            var e, n = 0;
            for (e in h)
                if (h.hasOwnProperty(e)) {
                    var o = t(e);
                    if (0 === o.length) return;
                    h[e].controller.loadAds(u(o, e)), n++
                }
            if (0 === n) return void p.run()
        }, p
    }()
}();