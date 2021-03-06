twttr = window.twttr || {}, twttr.conversion = function() {
    function e(e, t) {
        var n = !1,
            i = !0,
            r = e.document,
            o = r.documentElement,
            a = r.addEventListener,
            s = a ? "addEventListener" : "attachEvent",
            u = a ? "removeEventListener" : "detachEvent",
            d = a ? "" : "on",
            c = function(i) {
                ("readystatechange" !== i.type || "complete" === r.readyState) && (("load" === i.type ? e : r)[u](d + i.type, c, !1), !n && (n = !0) && t.call(e, i.type || i))
            },
            f = function() {
                try {
                    o.doScroll("left")
                } catch (e) {
                    return void setTimeout(f, 50)
                }
                c("poll")
            };
        if ("complete" === r.readyState) t.call(e, "lazy");
        else {
            if (!a && o.doScroll) {
                try {
                    i = !e.frameElement
                } catch (l) {}
                i && f()
            }
            r[s](d + "DOMContentLoaded", c, !1), e[s](d + "load", c, !1)
        }
    }

    function t() {
        this.pixelId = "", this.eventQueue = [
            []
        ]
    }
    var n = "&tpx_cb=twttr.conversion.loadPixels",
        i = "//t.co/i/adsct?p_id=Twitter&p_user_id=0",
        r = "https://analytics.twitter.com/i/adsct?p_id=Twitter&p_user_id=0",
        o = function(e, t) {
            var n = t.toLowerCase();
            for (var i in e)
                if (i.toLowerCase() === n && e.hasOwnProperty(i)) return !0;
            return !1
        },
        a = function(e, t) {
            var n = t.toLowerCase();
            for (var i in e)
                if (i.toLowerCase() === n && e.hasOwnProperty(i)) return e[i]
        };
    return t.prototype = {
            setPixelId: function(e) {
                this.pixelId = e
            },
            queueEvent: function(e, t) {
                var n = this;
                e = "function" != typeof String.prototype.trim ? e.toLowerCase().replace(/^\s+|\s+$/g, "") : e.toLowerCase().trim(), n.eventQueue[n.eventQueue.length - 1].push({
                    event: [e, t],
                    pixelId: n.pixelId
                }), setTimeout(function() {
                    n.sendEvents()
                }, 0)
            },
            addFlushPoint: function() {
                var e = this;
                0 !== e.eventQueue[e.eventQueue.length - 1].length && e.eventQueue.push([])
            },
            separateEventsByUniquePixelIds: function(e) {
                separatedEvents = {};
                for (var t = 0; t < e.length; t++) separatedEvents.hasOwnProperty(e[t].pixelId) ? separatedEvents[e[t].pixelId].push(e[t].event) : separatedEvents[e[t].pixelId] = [e[t].event];
                return separatedEvents
            },
            sendEventsWithParams: function(e, t) {
                var n = this.getLegacyParams(e);
                n.events = this.stringifyObject(e);
                var o = !0;
                twttr.conversion.trackPidBase(r, t, n, o), twttr.conversion.trackPidBase(i, t, n)
            },
            sendEvents: function() {
                var e = this;
                if (0 !== e.eventQueue[0].length) {
                    var t = e.eventQueue.shift();
                    0 === e.eventQueue.length && e.eventQueue.push([]);
                    var n = e.separateEventsByUniquePixelIds(t);
                    for (var i in n) n.hasOwnProperty(i) && e.sendEventsWithParams(n[i], i)
                }
            },
            getLegacyParams: function(e) {
                var t = {},
                    n = this.isObject(e[0]) ? e[0] : {},
                    i = this.isObject(n[1]) ? n[1] : {};
                return o(i, "value") && (t.tw_sale_amount = a(i, "value")), o(i, "num_items") && (t.tw_order_quantity = a(i, "num_items")), this.isObject(a(i, "content_ids")) && (t.tw_product_id = a(i, "content_ids")[0]), o(i, "partner_id") && (t.oct_p_id = a(i, "partner_id")), t
            },
            stringifyObject: function(e) {
                return "undefined" != typeof JSON && "function" == typeof JSON.stringify ? JSON.stringify(e) : ""
            },
            isObject: function(e) {
                return Object(e) === e
            }
        },
        function() {
            if (window.twq) {
                var e = new t;
                twq.exe = function() {
                    var t, n = Array.prototype.slice.call(arguments),
                        i = n[0],
                        r = n.slice(1);
                    switch (i) {
                        case "init":
                            t = e.setPixelId;
                            break;
                        case "track":
                            t = e.queueEvent;
                            break;
                        case "new_event":
                            t = e.addFlushPoint
                    }
                    "function" == typeof t && t.apply(e, r)
                };
                for (var n = 0; n < twq.queue.length; n++) twq.exe.apply(null, twq.queue[n])
            }
        }(), {
            trackBase: function(e, t, n, i) {
                if ("string" == typeof t && "string" == typeof n) {
                    var r = e + "&merch_id=" + encodeURIComponent(t);
                    r += "&event=" + encodeURIComponent(n), "undefined" != typeof i && (r += "&value=" + encodeURIComponent(i)), this.buildPixel(r)
                }
            },
            trackPidBase: function(e, t, i, r) {
                if (t) {
                    var o = "";
                    if ("object" == typeof i) {
                        "tw_sale_amount" in i || (i.tw_sale_amount = 0), "tw_order_quantity" in i || (i.tw_order_quantity = 0);
                        for (var a in i) i.hasOwnProperty(a) && (o += "&" + (encodeURIComponent(a) + "=" + encodeURIComponent(i[a])))
                    } else o = "&tw_sale_amount=0&tw_order_quantity=0";
                    var s = e + "&txn_id=" + encodeURIComponent(t) + o,
                        u = this.getIframeStatus();
                    if (s += "&tw_iframe_status=" + encodeURIComponent(u.value), u === this.IframeStatusCodes.IN_IFRAME && "" != document.referrer) {
                        var d = encodeURIComponent(document.referrer);
                        s += "&tw_document_referrer=" + d
                    }
                    var c = this.buildPixel;
                    r && (s += n, c = this.buildScript);
                    var f = this.getHiddenProp();
                    this.isDocumentHidden() ? this.buildPixelWhenVizChange(s, f, c) : c(s)
                }
            },
            track: function(e, t, n) {
                this.trackBase(r, e, t, n), this.trackBase(i, e, t, n)
            },
            trackPid: function(e, t) {
                var n = !0;
                this.trackPidBase(r, e, t, n), this.trackPidBase(i, e, t)
            },
            buildScript: function(t) {
                var n = document.createElement("script");
                n.src = t, n.setAttribute("type", "text/javascript"), e(window, function() {
                    document.body.appendChild(n)
                })
            },
            cs: !0,
            buildIframe: function(t) {
                if (twttr.conversion.cs) {
                    twttr.conversion.cs = !1;
                    var n = document.createElement("iframe");
                    n.src = t, n.hidden = !0, e(window, function() {
                        document.body.appendChild(n)
                    })
                }
            },
            buildPixel: function(e) {
                var t = new Image;
                t.src = e
            },
            isDocumentHidden: function() {
                var e = this.getHiddenProp();
                return e && document[e]
            },
            getHiddenProp: function() {
                var e = ["webkit", "moz", "ms", "o"];
                if ("hidden" in document) return "hidden";
                for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                return null
            },
            buildPixelWhenVizChange: function(e, t, n) {
                var i = t.replace(/[H|h]idden/, "") + "visibilitychange",
                    r = function() {
                        n(e), document.removeEventListener(i, r, !1)
                    }.bind(this);
                document.addEventListener(i, r, !1)
            },
            getIframeStatus: function() {
                try {
                    return this.isIframed() ? this.IframeStatusCodes.NOT_IN_IFRAME : this.IframeStatusCodes.IN_IFRAME
                } catch (e) {
                    return this.IframeStatusCodes.ERROR
                }
            },
            isIframed: function() {
                return window.self === window.top
            },
            IframeStatusCodes: {
                NOT_IN_IFRAME: {
                    value: 0
                },
                IN_IFRAME: {
                    value: 1
                },
                ERROR: {
                    value: 2
                }
            },
            loadPixels: function(e) {
                var t, n;
                "hif" in e && (t = e.hif, t.forEach(twttr.conversion.buildIframe)), "tags" in e && (n = e.tags, n.forEach(twttr.conversion.buildPixel))
            }
        }
}();