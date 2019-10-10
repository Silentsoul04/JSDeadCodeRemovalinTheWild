(function() {
    "use strict";

    function t(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }(function(e, r, a) {
        var i = {
            IN_PREPARATION: 0,
            REQUESTING: 1,
            RECEIVED: 2,
            TIMEOUT: 3
        };
        var n = function t(e, r) {
            return function() {
                e.apply(r, arguments)
            }
        };
        var s = function t(e) {
            var r = "http://s.yimg.jp",
                a = "https://s.yimg.jp",
                i = /yahoo\.co\.jp(:[0-9]+)?$/;
            return e === r || e === a || i.test(e)
        };
        var o = function() {
            function e() {
                t(this, e);
                this.requestStatus = i.IN_PREPARATION;
                this.apiWrapperFrame = null;
                this.apiWrapperFrameUrl = location.protocol + "//s.yimg.jp/images/listing/tool/yads/criteo_api.html";
                this.CALBeaconUrl = location.protocol + "//b94.yahoo.co.jp/gb.gif";
                this.returnAdCallback = null;
                this.returnOptionParams = {};
                this.zoneid = "";
                this.apiLatency = 0;
                this.apiResponseStatus = 0
            }
            e.prototype.callAds = function t(e, r, a, s) {
                if (this.requestStatus !== i.IN_PREPARATION) {
                    return
                }
                if (typeof window.JSON === "undefined" || !window.postMessage) {
                    return
                }
                var o = e || {},
                    p = r || null,
                    d = a || 0,
                    u = s || {};
                this.zoneid = o.zoneid || "";
                if (!this.zoneid) {
                    return
                }
                if (!p || typeof p !== "function") {
                    return
                }
                var c = window.JSON.stringify({
                    command: "callAds",
                    params: o
                });
                var l = this.zoneid + "-" + Math.floor(Math.random() * 9999999999).toString();
                this.apiWrapperFrame = document.createElement("IFRAME");
                this.apiWrapperFrame.src = this.apiWrapperFrameUrl + "#" + window.encodeURIComponent(c);
                this.apiWrapperFrame.width = 0;
                this.apiWrapperFrame.height = 0;
                this.apiWrapperFrame.style.display = "none";
                this.apiWrapperFrame.name = l;
                this.apiWrapperFrame.id = l;
                this.returnAdCallback = p;
                this.returnOptionParams = u;
                var f = n(this.receiveMessage, this);
                if (window.addEventListener) {
                    window.addEventListener("message", f, false)
                } else if (window.attachEvent) {
                    window.attachEvent("onmessage", f)
                }

                function m(t) {
                    if (d > 0) {
                        var e = n(t.cancelCallAd, t);
                        window.setTimeout(e, d)
                    }
                }
                var h = this;
                if (window.ActiveXObject) {
                    this.apiWrapperFrame.onreadystatechange = function() {
                        if (h.apiWrapperFrame.readyState === "complete" || h.apiWrapperFrame.readyState === "loaded") {
                            m(h)
                        }
                    }
                } else {
                    this.apiWrapperFrame.onload = function() {
                        m(h)
                    }
                }
                document.body.appendChild(this.apiWrapperFrame);
                this.requestStatus = i.REQUESTING
            };
            e.prototype.throwImpsBeacon = function t() {
                if (this.requestStatus !== i.RECEIVED) {
                    return
                }
                var e = window.JSON.stringify({
                    command: "throwImpsBeacon",
                    params: {}
                });
                this.apiWrapperFrame.contentWindow.postMessage(e, "*")
            };
            e.prototype.throwCALBeacon = function t(e) {
                if (this.requestStatus < i.RECEIVED) {
                    return
                }
                var r = {
                    rs: "CAL",
                    zoneid: this.zoneid,
                    latency: this.apiLatency,
                    status: this.apiResponseStatus
                };
                var a = e || {};
                var n, s = [];
                for (n in r) {
                    s.push(n + "=" + window.encodeURIComponent(r[n]))
                }
                for (n in a) {
                    s.push(n + "=" + window.encodeURIComponent(a[n]))
                }
                var o = this.CALBeaconUrl + "?" + s.join("&");
                var p = document.createElement("IMG");
                p.src = o;
                p.width = 0;
                p.height = 0;
                p.style.display = "none";
                document.body.appendChild(p)
            };
            e.prototype.receiveMessage = function t(e) {
                if (!s(e.origin)) {
                    return
                }
                if (e.source !== this.apiWrapperFrame.contentWindow) {
                    return
                }
                var r;
                try {
                    r = window.JSON.parse(e.data)
                } catch (t) {
                    return
                }
                if (r.command !== "callAds") {
                    return
                }
                this.requestStatus = i.RECEIVED;
                this.apiLatency = r.data.latency;
                this.apiResponseStatus = r.data.api_response.response_status;
                var a = {
                    products: r.data.api_response.products,
                    advertiser: r.data.api_response.advertiser,
                    privacy: r.data.api_response.privacy
                };
                var n = {
                    response_status: this.apiResponseStatus,
                    is_timeout: false
                };
                this.returnAdCallback(a, n, this.returnOptionParams)
            };
            e.prototype.cancelCallAd = function t() {
                if (this.requestStatus !== i.REQUESTING) {
                    return
                }
                this.apiWrapperFrame.parentNode.removeChild(this.apiWrapperFrame);
                this.requestStatus = i.TIMEOUT;
                var e = {
                    response_status: null,
                    is_timeout: true
                };
                this.returnAdCallback(null, e, this.returnOptionParams)
            };
            return e
        }();
        a.CriteoApiWrapper = o
    })(window, document, function() {
        var t = void 0;

        function e(r) {
            if (typeof this[r] === "undefined") {
                this[r] = {}
            }
            t = this[r];
            if (arguments.length > 1) {
                e.apply(this[r], Array.prototype.slice.apply(arguments, [1]))
            }
        }
        e.apply(window, "YAHOO.JP.anemos.yads".split("."));
        return t
    }())
})();

function insertScriptTag(t, e) {
    if (!t) {
        return
    }
    if (e) {
        var r = document.createElement("script");
        r.type = "text/javascript";
        r.src = t;
        e.appendChild(r)
    } else {
        document.write('<script type="text/javascript" src="' + t + '"></scr' + "ipt>")
    }
}(function(t, e, r) {
    var a = "yads-async-target-";
    var i = function(t, e, r, a, i) {
        var n = s(i),
            o = 0,
            p;
        var d = 0;
        for (var u = 0, c = t.length; u < c; u++) {
            o = parseInt(e) - 1 + parseInt(r) * u;
            p = a[o];
            if (!p) {
                continue
            }
            if (p.firstElementChild) {
                continue
            }
            if (!t[u]) {
                continue
            }
            var l = t[u];
            p.innerHTML = l.htmls;
            for (var f = 0; f < l.callbacks.length; f++) {
                l.callbacks[f]()
            }
            if (n.ads[u] && n.ads[u].ad_main_type === "criteo") {
                n.criteo.apiWrapper.throwImpsBeacon()
            } else {
                insertScriptTag(n.scriptUrls[d], p);
                d++
            }
        }
    };
    var n = function(t) {
        for (var e = 0, a = r.conf.length; e < a; e++) {
            if (r.conf[e].params && r.conf[e].params.yads_ad_ds === t) {
                return r.conf[e]
            }
        }
        return null
    };
    var s = function(t) {
        for (var e = 0, a = r.conf.length; e < a; e++) {
            var i = r.conf[e];
            if (!i.group) {
                continue
            }
            for (var n = 0, s = i.group.length; n < s; n++) {
                if (i.group[n].name === t) {
                    return i
                }
            }
        }
        return r.conf[0]
    };
    var o = function(t) {
        var e = s(t);
        return e.requested === true
    };
    var p = function(t) {
        var e = s(t);
        if (!e.group || !e.group.length) {
            return null
        }
        for (var r = 0, a = e.group.length; r < a; r++) {
            if (e.group[r].name === t) {
                return e.group[r]
            }
        }
        return null
    };
    var d = function(t, e, r) {
        var a = s(t);
        if (!a.group) {
            a.group = []
        }
        a.group.push({
            name: t,
            startPosition: e,
            interval: r,
            inserted: true
        })
    };
    var u = function(t, e, r) {
        var a = e ? 1 : 0,
            i = r || 0,
            n = parseInt(Math.random() * 100);
        if (i === 0 || n > i) {
            return
        }
        t.throwCALBeacon({
            intime: a
        })
    };
    var c = function(t, e) {
        var r = [],
            a = parseInt(e[0].insert_criteo_rank),
            i = a - 1;
        var n = {};
        l(e[0], n);
        n.ad_extension = {};
        n.ad_main_type = "criteo";
        n.ad_sub_type = "small";
        n.title = t.products[0].title;
        n.description = t.products[0].description;
        n.siteHost = t.advertiser.description;
        n.image_url = t.products[0].image.url;
        n.ClickUrl = t.products[0].click_url;
        n.InquiryUrl = t.privacy.optout_click_url;
        n.optout_image_url = t.privacy.optout_image_url;
        var s = false;
        for (var o = 0, p = e.length; o < p; o++) {
            if (o === i) {
                r.push(n);
                s = true
            }
            r.push(e[o])
        }
        if (!s) {
            r.push(n)
        }
        return r
    };
    var l = function(t, e) {
        if (typeof JSON === "undefined") {
            return
        }
        e = JSON.parse(JSON.stringify(t))
    };
    r.getAdsData = function(t, e, i, n, u) {
        if (!r.conf) {
            return
        }
        var c = p(t);
        if (c === null) {
            d(t, e, i)
        } else {
            c.startPosition = e;
            c.interval = i
        }
        if (o(t)) {
            r.attachAds(t, e, i);
            return
        }
        var l = s(t);
        if (u === "ios" || u === "android") {
            var f = r.dsMap[u][t];
            l.params.yads_ad_ds = f
        }
        l.requested = true;
        if (!l.params.yads_ad_ds) {
            return
        }
        if (l.criteo) {
            var m = new YAHOO.JP.anemos.yads.CriteoApiWrapper;
            m.callAds(l.criteo.params, YAHOO.JP.anemos.yads.stream.poolCriteoAds, 0, {
                yads_ad_ds: l.params.yads_ad_ds
            });
            l.criteo.apiWrapper = m
        }
        var h = document.createElement("ins"),
            y = a + l.params.yads_ad_ds,
            v = document.getElementsByTagName("script")[0];
        l.params.yads_parent_element = y;
        l.params.yads_bucket_id = window.miffy_yads_bucket_id || "";
        l.params.yads_type_tag = window.miffy_yads_type_tag || "";
        if (n === 0 || n === 1) {
            l.params.yads_video_autoplay_set = String(n)
        }
        h.id = y;
        h.className = "yads-async-target";
        v.parentNode.appendChild(h);
        if (window.yadsRequestAsync) {
            window.yadsRequestAsync(l.params)
        }
    };
    r.poolAds = function(t, e, i, s, o, p) {
        if (!t[0]) {
            return
        } else {
            t[0].yadsAdRequestId = o
        }
        var d = s.replace(a, "");
        if (!d) {
            return
        }
        var l = n(d);
        if (!l) {
            return
        }
        var f = false;
        if (l.criteo && l.criteo.ads) {
            if (t[0].insert_criteo_rank && parseInt(t[0].insert_criteo_rank) > 0) {
                f = true
            }
        }
        if (f) {
            l.ads = c(l.criteo.ads, t);
            u(l.criteo.apiWrapper, true, l.criteo.rateCALBeacon)
        } else {
            l.ads = t
        }
        l.defaultStartIndex = t[0].start_position;
        l.defaultInterval = t[0].interval;
        l.scriptUrls = p || [];
        for (var m = 0, h = l.group.length; m < h; m++) {
            if (l.group[m].inserted === true) {
                r.attachAds(l.group[m].name)
            }
        }
    };
    r.poolCriteoAds = function(t, e, r) {
        var a = r.yads_ad_ds,
            i = n(a);
        if (!i) {
            return
        }
        if (i.ads && i.ads.length > 0) {
            u(i.criteo.apiWrapper, false, i.criteo.rateCALBeacon);
            return
        }
        if (!t) {
            return
        }
        if (!e || e.response_status !== 0) {
            return
        }
        i.criteo.ads = t
    };
    r.attachAds = function(t, e, a) {
        var n = "yads_stream",
            o = s(t),
            d = p(t);
        if (!d || !o.ads) {
            return
        }
        if (!r.makeAdHtml) {
            return
        }
        r.makeAdHtml(o.ads, t, function(r) {
            var s = e || d.startPosition || o.defaultStartIndex,
                p = a || d.interval || o.defaultInterval;
            if (r.length === 0 || !s || !p || !document.getElementById(t)) {
                return
            }
            var u = document.getElementById(t).getElementsByClassName(n);
            i(r, s, p, u, t);
            var c = null;
            try {
                var l = window.top.YJ_UADF;
                if (!l || !l.YADSViewable) {
                    return
                }
                c = window.top.YJ_UADF.YADSViewable
            } catch (t) {
                return
            }
            if (c.notifyStreamAttached) {
                c.notifyStreamAttached(o.params.yads_ad_ds, t)
            }
        })
    }
})(window, document, function() {
    var t;
    (function(e) {
        if (typeof this[e] === "undefined") {
            this[e] = {}
        }
        t = this[e];
        if (arguments.length > 1) {
            arguments.callee.apply(this[e], Array.prototype.slice.apply(arguments, [1]))
        }
    }).apply(window, "YAHOO.JP.anemos.yads.stream".split("."));
    return t
}());