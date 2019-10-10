if (self.CavalryLogger) {
    CavalryLogger.start_js(["hcWQ1"]);
}

__d("UniversalMicroSiteTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("universal_micro_logger:UniversalMicroSiteLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("universal_micro_logger:UniversalMicroSiteLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("universal_micro_logger:UniversalMicroSiteLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setClickCreativePath = function(a) {
            this.$1.click_creative_path = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        };
        c.setClickFromContextMenu = function(a) {
            this.$1.click_from_context_menu = a;
            return this
        };
        c.setCmsidPath = function(a) {
            this.$1.cmsid_path = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        };
        c.setComponentData = function(a) {
            this.$1.component_data = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setComponentSource = function(a) {
            this.$1.component_source = a;
            return this
        };
        c.setCountry = function(a) {
            this.$1.country = a;
            return this
        };
        c.setDestination = function(a) {
            this.$1.destination = a;
            return this
        };
        c.setDestinationCmsid = function(a) {
            this.$1.destination_cmsid = a;
            return this
        };
        c.setDropdownDuration = function(a) {
            this.$1.dropdown_duration = a;
            return this
        };
        c.setEventType = function(a) {
            this.$1.event_type = a;
            return this
        };
        c.setFile = function(a) {
            this.$1.file = a;
            return this
        };
        c.setIDSync = function(a) {
            this.$1.id_sync = a;
            return this
        };
        c.setIsError = function(a) {
            this.$1.is_error = a;
            return this
        };
        c.setLastNavImpressionID = function(a) {
            this.$1.last_nav_impression_id = a;
            return this
        };
        c.setLineNumber = function(a) {
            this.$1.line_number = a;
            return this
        };
        c.setMaxPercentPageViewed = function(a) {
            this.$1.max_percent_page_viewed = a;
            return this
        };
        c.setMaxViewportHeightPx = function(a) {
            this.$1.max_viewport_height_px = a;
            return this
        };
        c.setMaxViewportWidthPx = function(a) {
            this.$1.max_viewport_width_px = a;
            return this
        };
        c.setMessage = function(a) {
            this.$1.message = a;
            return this
        };
        c.setOrigHTTPReferrer = function(a) {
            this.$1.orig_http_referrer = a;
            return this
        };
        c.setOrigRequestURI = function(a) {
            this.$1.orig_request_uri = a;
            return this
        };
        c.setPathComponents = function(a) {
            this.$1.path_components = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        };
        c.setPrimaryCmsid = function(a) {
            this.$1.primary_cmsid = a;
            return this
        };
        c.setPrimaryContentLocale = function(a) {
            this.$1.primary_content_locale = a;
            return this
        };
        c.setQuery = function(a) {
            this.$1.query = a;
            return this
        };
        c.setRankedSearchResults = function(a) {
            this.$1.ranked_search_results = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setRegion = function(a) {
            this.$1.region = a;
            return this
        };
        c.setScrolled = function(a) {
            this.$1.scrolled = a;
            return this
        };
        c.setSearchFilters = function(a) {
            this.$1.search_filters = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        };
        c.setSearchSessionID = function(a) {
            this.$1.search_session_id = a;
            return this
        };
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        };
        c.setSite = function(a) {
            this.$1.site = a;
            return this
        };
        c.setStackTrace = function(a) {
            this.$1.stack_trace = a;
            return this
        };
        c.setStatusCode = function(a) {
            this.$1.status_code = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setVC = function(a) {
            this.$1.vc = a;
            return this
        };
        c.setVideoDuration = function(a) {
            this.$1.video_duration = a;
            return this
        };
        c.setVideoID = function(a) {
            this.$1.video_id = a;
            return this
        };
        c.setVideoTimePosition = function(a) {
            this.$1.video_time_position = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        click_creative_path: !0,
        click_from_context_menu: !0,
        cmsid_path: !0,
        component_data: !0,
        component_source: !0,
        country: !0,
        destination: !0,
        destination_cmsid: !0,
        dropdown_duration: !0,
        event_type: !0,
        file: !0,
        id_sync: !0,
        is_error: !0,
        last_nav_impression_id: !0,
        line_number: !0,
        max_percent_page_viewed: !0,
        max_viewport_height_px: !0,
        max_viewport_width_px: !0,
        message: !0,
        orig_http_referrer: !0,
        orig_request_uri: !0,
        path_components: !0,
        primary_cmsid: !0,
        primary_content_locale: !0,
        query: !0,
        ranked_search_results: !0,
        region: !0,
        scrolled: !0,
        search_filters: !0,
        search_session_id: !0,
        session_id: !0,
        site: !0,
        stack_trace: !0,
        status_code: !0,
        time: !0,
        vc: !0,
        video_duration: !0,
        video_id: !0,
        video_time_position: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("WhatsAppUniversalMicroSiteTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:WhatsAppUniversalMicroSiteLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:WhatsAppUniversalMicroSiteLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:WhatsAppUniversalMicroSiteLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setCountry = function(a) {
            this.$1.country = a;
            return this
        };
        c.setDeviceType = function(a) {
            this.$1.device_type = a;
            return this
        };
        c.setEventType = function(a) {
            this.$1.event_type = a;
            return this
        };
        c.setFasteditContentType = function(a) {
            this.$1.fastedit_content_type = a;
            return this
        };
        c.setFasteditID = function(a) {
            this.$1.fastedit_id = a;
            return this
        };
        c.setFasteditLang = function(a) {
            this.$1.fastedit_lang = a;
            return this
        };
        c.setFasteditLastPushed = function(a) {
            this.$1.fastedit_last_pushed = a;
            return this
        };
        c.setFasteditPlatform = function(a) {
            this.$1.fastedit_platform = a;
            return this
        };
        c.setFasteditTitle = function(a) {
            this.$1.fastedit_title = a;
            return this
        };
        c.setFasteditVisibility = function(a) {
            this.$1.fastedit_visibility = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        };
        c.setFile = function(a) {
            this.$1.file = a;
            return this
        };
        c.setIsError = function(a) {
            this.$1.is_error = a;
            return this
        };
        c.setLineNumber = function(a) {
            this.$1.line_number = a;
            return this
        };
        c.setMessage = function(a) {
            this.$1.message = a;
            return this
        };
        c.setOrigHTTPReferrer = function(a) {
            this.$1.orig_http_referrer = a;
            return this
        };
        c.setOrigRequestURI = function(a) {
            this.$1.orig_request_uri = a;
            return this
        };
        c.setPrimaryCmsid = function(a) {
            this.$1.primary_cmsid = a;
            return this
        };
        c.setPrimaryContentLocale = function(a) {
            this.$1.primary_content_locale = a;
            return this
        };
        c.setRegion = function(a) {
            this.$1.region = a;
            return this
        };
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        };
        c.setSite = function(a) {
            this.$1.site = a;
            return this
        };
        c.setStackTrace = function(a) {
            this.$1.stack_trace = a;
            return this
        };
        c.setStatusCode = function(a) {
            this.$1.status_code = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        c.setWhatsappUniqueID = function(a) {
            this.$1.whatsapp_unique_id = a;
            return this
        };
        return a
    }();
    c = {
        country: !0,
        device_type: !0,
        event_type: !0,
        fastedit_content_type: !0,
        fastedit_id: !0,
        fastedit_lang: !0,
        fastedit_last_pushed: !0,
        fastedit_platform: !0,
        fastedit_title: !0,
        fastedit_visibility: !0,
        file: !0,
        is_error: !0,
        line_number: !0,
        message: !0,
        orig_http_referrer: !0,
        orig_request_uri: !0,
        primary_cmsid: !0,
        primary_content_locale: !0,
        region: !0,
        session_id: !0,
        site: !0,
        stack_trace: !0,
        status_code: !0,
        time: !0,
        weight: !0,
        whatsapp_unique_id: !0
    };
    e.exports = a
}), null);
__d("UniversalMicroSiteAttributeCollector", ["immutable", "getContextualParent"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "data-ms";
    a = {
        MS_ATTRIBUTE_NAME: g,
        collectClickDataAttributes: function(a) {
            __p && __p();
            var c = [],
                d = [],
                e = {};
            a = a;
            var f = null;
            while (a) {
                if (a instanceof Element) {
                    var h = a.getAttribute(g);
                    if (h) {
                        h = JSON.parse(h);
                        var i = h.creative,
                            j = h.cmsid,
                            k = h.destinationcmsid;
                        h = babelHelpers.objectWithoutPropertiesLoose(h, ["creative", "cmsid", "destinationcmsid"]);
                        i && c.push(i);
                        j && d.push(j);
                        k != null && (f = k);
                        Object.entries(h).forEach(function(a) {
                            var b = a[0];
                            a = a[1];
                            return e[b] = a !== null && a !== void 0 && typeof a === "string" ? a : JSON.stringify(a)
                        })
                    }
                }
                a = b("getContextualParent")(a)
            }
            return {
                creativePath: c,
                cmsidPath: d,
                destinationCmsid: f,
                extraData: b("immutable").Map(e)
            }
        }
    };
    e.exports = a
}), null);
__d("UniversalMicroSiteTrackingUtils", ["DOM", "Parent", "URI", "isLinkshimURI"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h = "LinkshimAsyncLink.swap(";
    a = {
        isLinkShimmed: function(a) {
            var c = new(g || (g = b("URI")))(a.getAttribute("href"));
            c = b("isLinkshimURI")(c);
            a = a.getAttribute("onmouseover");
            a = a && a.startsWith(h);
            return c || a
        },
        getDestinationFromElement: function(a) {
            if (a instanceof HTMLAnchorElement && a.href) return a.href;
            a = b("Parent").byTag(a, "form");
            return a instanceof HTMLFormElement ? b("DOM").scry(a, "input").reduce(function(a, b) {
                return a.getQueryData()[b.name] ? a : a.addQueryData(b.name, b.value)
            }, new(g || (g = b("URI")))(a.getAttribute("ajaxify") || a.action)).toString() : null
        }
    };
    e.exports = a
}), null);
__d("isInstagramURI", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : a.isSecure() && a.isSubdomainOfDomain("instagram.com")
    }
    e.exports = a
}), null);
__d("UniversalMicroSiteClickTracker", ["invariant", "Event", "EventListener", "Keys", "Parent", "SubscriptionsHandler", "UniversalMicroSiteTrackingUtils", "URI", "isFacebookURI", "isInstagramURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h, i = 801,
        j = /async(?:-post)?|dialog(?:-post)?|theater|toggle/,
        k = !1;
    a = function() {
        __p && __p();

        function a(a, c) {
            this.$2 = new(b("SubscriptionsHandler"))(), !k || !c || g(0, 3518), this.$1 = a, c && !this.$4() ? (this.$3 = c, this.$5(), this.$6(), k = !0) : this.$7()
        }
        var c = a.prototype;
        c.destroy = function() {
            this.$2.release()
        };
        c.$7 = function() {
            var a = this;
            this.$2.addSubscriptions(b("EventListener").capture(document.body, "click", function(b) {
                b = a.$8(b) || a.$9(b) || a.$10(b);
                b && a.$1(b)
            }))
        };
        c.$5 = function() {
            __p && __p();
            var a = this,
                c;
            this.$2.addSubscriptions((c = b("Event")).listen(document, "mousedown", function(c) {
                __p && __p();
                var d = a.$8(c);
                if (d)
                    if (a.$11(d) && (c.isRightClick() || c.ctrlKey)) {
                        var e = d.href;
                        d.href = a.$3(d).toString();
                        var f = b("Event").listen(d, "mouseout", function(a) {
                            f && f.remove(), f = null, d.href = e
                        }, b("Event").Priority.URGENT)
                    } else {
                        var g = b("Event").listen(d, "click", function(b) {
                            g && g.remove(), g = null, a.$1(d)
                        }, b("Event").Priority.URGENT);
                        setTimeout(function() {
                            g && g.remove(), g = null
                        }, 500)
                    }
            }, c.Priority.URGENT), c.listen(document, "keydown", function(c) {
                var d = a.$8(c);
                if (d && b("Event").getKeyCode(c) === b("Keys").RETURN) {
                    var e = b("Event").listen(d, "click", function(b) {
                        e && e.remove(), e = null, a.$1(d)
                    }, b("Event").Priority.URGENT);
                    setTimeout(function() {
                        e && e.remove(), e = null
                    }, 500)
                }
            }, c.Priority.URGENT))
        };
        c.$6 = function() {
            var a = this;
            this.$2.addSubscriptions(b("Event").listen(document, "click", function(b) {
                b = a.$9(b) || a.$10(b);
                b && a.$1(b)
            }, b("Event").Priority.URGENT))
        };
        c.$10 = function(a) {
            a = b("Parent").byAttribute(a.getTarget(), "data-ms-clickable");
            return a instanceof HTMLElement ? a : null
        };
        c.$9 = function(a) {
            a = b("Parent").byTag(a.getTarget(), "Button");
            return a instanceof HTMLButtonElement ? a : null
        };
        c.$8 = function(a) {
            a = b("Parent").byTag(a.getTarget(), "A");
            return a instanceof HTMLAnchorElement ? a : null
        };
        c.$11 = function(a) {
            __p && __p();
            if (a.getAttribute("ajaxify")) return !1;
            if (a.rel && a.rel.match(j)) return !1;
            var c = a.getAttribute("href");
            if (!c || c.charAt(0) === "#") return !1;
            c = new(h || (h = b("URI")))(c);
            if (!b("isFacebookURI")(c) && !b("isInstagramURI")(c)) return !1;
            return b("UniversalMicroSiteTrackingUtils").isLinkShimmed(a) ? !1 : !0
        };
        c.$4 = function() {
            return window.innerWidth < i
        };
        return a
    }();
    e.exports = a
}), null);
__d("UniversalMicroSiteVideoTracking", ["SubscriptionList", "VideoPlayerRegistry"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new(b("SubscriptionList"))();

    function h(a) {
        b("VideoPlayerRegistry").getList().forEach(function(b) {
            if (b.isState("playing")) {
                b = k(b, "video_play");
                a(b)
            }
        })
    }

    function i() {
        b("VideoPlayerRegistry").getList().forEach(j), b("VideoPlayerRegistry").addListener(b("VideoPlayerRegistry").ADDED, j)
    }

    function j(a) {
        a.isState("playing") && l(a, "video_play"), a.addListener("beginPlayback", function() {
            return l(a, "video_play")
        }), a.addListener("pausePlayback", function() {
            return l(a, "video_pause")
        }), a.addListener("finishPlayback", function() {
            return l(a, "video_finish")
        }), a.addListener("stateChange", function() {
            a.isState("destroyed") && a.getOriginalPlayReason() && l(a, "video_unload")
        })
    }

    function k(a, b) {
        return {
            event: b,
            currentTime: parseFloat(a.getCurrentTimePosition().toFixed(2)),
            duration: parseFloat(a.getPlaybackDuration().toFixed(2)),
            videoID: a.getVideoID()
        }
    }

    function l(a, b) {
        g.fireCallbacks(k(a, b))
    }
    var m = !1;
    a = {
        init: function(a) {
            !m ? (i(), m = !0) : h(a);
            return g.add(a)
        }
    };
    e.exports = a
}), null);
__d("UniversalMicroSiteViewportTracking", ["invariant", "Event", "SubscriptionList", "Vector", "throttle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h, i, j = new(b("SubscriptionList"))(),
        k = 0,
        l = 0,
        m = 0,
        n = !1;

    function o() {
        var a = b("Vector").getScrollPosition().y,
            c = b("Vector").getViewportDimensions().y,
            d = b("Vector").getDocumentDimensions().y;
        a = Math.floor((a + c) / d * 100);
        k = Math.max(a, k);
        k >= 100 && (h = null)
    }

    function p() {
        var a = b("Vector").getViewportDimensions();
        m = Math.max(a.x, m);
        l = Math.max(a.y, l)
    }

    function q() {
        k = 0, l = 0, m = 0, n = !1, o(), p(), h || (h = b("Event").listen(window, "scroll", r(function() {
            o(), n = !0
        }, 100))), i || (i = b("Event").listen(window, "resize", r(function() {
            o(), p()
        }, 100)))
    }

    function r(a) {
        return b("throttle")(function() {
            a(), j.fireCallbacks({
                hasScrolled: n,
                maxPercentVerticalViewportShown: k,
                maxViewportWidthPx: m,
                maxViewportHeightPX: l
            })
        }, 100)
    }
    var s = !1;

    function t() {
        s || g(0, 4196)
    }
    a = {
        init: function(a) {
            q();
            s = !0;
            return a && j.add(a)
        },
        getHasScrolled: function() {
            t();
            return n
        },
        getMaxPercentVerticalViewportShown: function() {
            t();
            return k
        },
        getMaxViewportWidthPx: function() {
            t();
            return m
        },
        getMaxViewportHeightPx: function() {
            t();
            return l
        }
    };
    e.exports = a
}), null);
__d("XGBMDestinationCmsidAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/business/async/destinationcmsid/", {})
}), null);
__d("XUniversalMicroLoggerShimController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/micro_site/url/", {
        destination: {
            type: "String",
            required: !0
        },
        site: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        event_type: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        click_from_context_menu: {
            type: "Bool",
            defaultValue: !1
        },
        max_viewport_height_px: {
            type: "Int"
        },
        max_viewport_width_px: {
            type: "Int"
        },
        primary_cmsid: {
            type: "Int"
        },
        cmsid_path: {
            type: "IntVector"
        },
        country: {
            type: "String"
        },
        region: {
            type: "Enum",
            enumType: 1
        },
        primary_content_locale: {
            type: "String"
        },
        last_nav_impression_id: {
            type: "String"
        },
        session_id: {
            type: "String"
        },
        search_session_id: {
            type: "String"
        },
        click_creative_path: {
            type: "StringVector"
        },
        orig_http_referrer: {
            type: "String"
        },
        orig_request_uri: {
            type: "String"
        },
        scrolled: {
            type: "Bool",
            defaultValue: !1
        },
        max_percent_page_viewed: {
            type: "Int"
        },
        extra_data: {
            type: "StringToNullableStringMap",
            defaultValue: {}
        },
        destination_cmsid: {
            type: "String"
        }
    })
}), null);
__d("UniversalMicroSiteTrackingController", ["invariant", "AsyncRequest", "Banzai", "ErrorUtils", "SubscriptionList", "UniversalMicroSiteAttributeCollector", "UniversalMicroSiteClickTracker", "UniversalMicroSiteTrackingUtils", "UniversalMicroSiteTypedLogger", "UniversalMicroSiteVideoTracking", "UniversalMicroSiteViewportTracking", "URI", "WhatsAppUniversalMicroSiteTypedLogger", "XGBMDestinationCmsidAsyncController", "XUniversalMicroLoggerShimController", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = !1,
        w = new(b("SubscriptionList"))();

    function x() {
        __p && __p();
        if (t === "whatsapp_faq" || t === "whatsapp_www") {
            var a = new(b("WhatsAppUniversalMicroSiteTypedLogger"))().setCountry(j).setOrigHTTPReferrer(m).setOrigRequestURI(n).setPrimaryCmsid(o).setPrimaryContentLocale(p).setSessionID(s).setSite(t);
            q && a.setRegion(q);
            if (u) {
                a.setFasteditID(u.get("id")).setFasteditLang(u.get("lang")).setFasteditTitle(u.get("title")).setFasteditContentType(u.get("content_type")).setFasteditPlatform(u.get("platform"));
                var c = u.get("last_pushed"),
                    d = u.get("visibility");
                c && a.setFasteditLastPushed(c);
                d && a.setFasteditVisibility(d.split(","));
                c = u.get("whatsapp_unique_id");
                c && a.setWhatsappUniqueID(c);
                d = u.get("device_type");
                d && a.setDeviceType(d)
            }
            return a
        }
        return y()
    }

    function y() {
        var a;
        a = new(b("UniversalMicroSiteTypedLogger"))().setCountry(j).setLastNavImpressionID(l).setMaxPercentPageViewed((a = b("UniversalMicroSiteViewportTracking")).getMaxPercentVerticalViewportShown()).setMaxViewportHeightPx(a.getMaxViewportHeightPx()).setMaxViewportWidthPx(a.getMaxViewportWidthPx()).setOrigHTTPReferrer(m).setOrigRequestURI(n).setPrimaryCmsid(o).setPrimaryContentLocale(p).setScrolled(a.getHasScrolled()).setSearchSessionID(r).setSessionID(s).setSite(t);
        q && a.setRegion(q);
        return a
    }

    function z(a) {
        return w.add(a)
    }

    function A(a, b) {
        return w.getCallbacks().reduce(function(b, c) {
            return c({
                data: b,
                element: a
            })
        }, b)
    }

    function B(a) {
        var c = b("UniversalMicroSiteAttributeCollector").collectClickDataAttributes(a),
            d = b("immutable").Map(babelHelpers["extends"]({}, k.toJS(), c.extraData.toJS()));
        a = A(a, d);
        return babelHelpers["extends"]({}, a.toJS(), {
            cmsidPath: c.cmsidPath,
            clickCreativePath: c.creativePath,
            destinationCmsid: c.destinationCmsid
        })
    }

    function C(a) {
        __p && __p();
        var c = B(a),
            d = c.cmsidPath,
            e = c.clickCreativePath,
            f = c.destinationCmsid;
        c = babelHelpers.objectWithoutPropertiesLoose(c, ["cmsidPath", "clickCreativePath", "destinationCmsid"]);
        var g = x();
        if (g instanceof b("WhatsAppUniversalMicroSiteTypedLogger")) g.setEventType("click").logImmediately();
        else {
            a = b("UniversalMicroSiteTrackingUtils").getDestinationFromElement(a);
            g.setClickCreativePath(e).setClickFromContextMenu(!1).setCmsidPath(d).setDestination(a).setEventType("click").updateExtraData(c);
            f == null && a != null ? new(b("AsyncRequest"))().setURI(b("XGBMDestinationCmsidAsyncController").getURIBuilder().getURI()).setData({
                destination: a
            }).setHandler(function(a) {
                a = a.getPayload();
                a.destinationcmsid != null && g.setDestinationCmsid(a.destinationcmsid);
                g.logImmediately()
            }).send() : g.setDestinationCmsid(f).logImmediately()
        }
    }

    function D(a) {
        var c = B(a),
            d = c.cmsidPath,
            e = c.clickCreativePath,
            f = c.destinationCmsid;
        c = babelHelpers.objectWithoutPropertiesLoose(c, ["cmsidPath", "clickCreativePath", "destinationCmsid"]);
        y().setClickCreativePath(e).setClickFromContextMenu(!1).setDestinationCmsid(f).setCmsidPath(d).setDestination(b("UniversalMicroSiteTrackingUtils").getDestinationFromElement(a)).setEventType("search").updateExtraData(c).logImmediately()
    }

    function E(a, c) {
        var d = B(a),
            e = d.cmsidPath,
            f = d.clickCreativePath,
            g = d.destinationCmsid;
        d = babelHelpers.objectWithoutPropertiesLoose(d, ["cmsidPath", "clickCreativePath", "destinationCmsid"]);
        y().setClickCreativePath(f).setCmsidPath(e).setDestinationCmsid(g).setDestination(b("UniversalMicroSiteTrackingUtils").getDestinationFromElement(a)).setDropdownDuration(c).setEventType("dropdown_close").updateExtraData(d).logVital()
    }

    function F(a) {
        var c = B(a),
            d = c.cmsidPath,
            e = c.clickCreativePath,
            f = c.destinationCmsid;
        c = babelHelpers.objectWithoutPropertiesLoose(c, ["cmsidPath", "clickCreativePath", "destinationCmsid"]);
        y().setClickCreativePath(e).setCmsidPath(d).setDestinationCmsid(f).setDestination(b("UniversalMicroSiteTrackingUtils").getDestinationFromElement(a)).setEventType("dropdown_open").updateExtraData(c).logVital()
    }

    function G(a, b) {
        y().setEventType("client_component_loaded").setComponentSource(a).setComponentData(b).logVital()
    }

    function H(a) {
        var c = B(a),
            d = c.cmsidPath,
            e = c.clickCreativePath,
            f = c.destinationCmsid;
        c = babelHelpers.objectWithoutPropertiesLoose(c, ["cmsidPath", "clickCreativePath", "destinationCmsid"]);
        return b("XUniversalMicroLoggerShimController").getURIBuilder().setStringVector("click_creative_path", e).setBool("click_from_context_menu", !0).setIntVector("cmsid_path", d).setString("country", j).setString("destination", a.href).setEnum("event_type", "click").setString("last_nav_impression_id", l).setInt("max_percent_page_viewed", (e = b("UniversalMicroSiteViewportTracking")).getMaxPercentVerticalViewportShown()).setInt("max_viewport_height_px", e.getMaxViewportHeightPx()).setInt("max_viewport_width_px", e.getMaxViewportWidthPx()).setString("orig_http_referrer", m).setString("orig_request_uri", n).setInt("primary_cmsid", o).setString("primary_content_locale", p).setEnum("region", q).setBool("scrolled", e.getHasScrolled()).setString("search_session_id", r).setString("session_id", s).setEnum("site", t).setStringToNullableStringMap("extra_data", c).setString("destination_cmsid", f).getURI()
    }

    function I(a) {
        y().setEventType(a.event).setVideoDuration(a.duration).setVideoID(a.videoID).setVideoTimePosition(a.currentTime).logVital()
    }

    function J() {
        x().setEventType("client_loaded").logVital()
    }

    function K() {
        b("Banzai").subscribe(b("Banzai").SHUTDOWN, function() {
            x().setEventType("unload").logVital()
        })
    }

    function L() {
        (h || (h = b("ErrorUtils"))).addListener(function(a) {
            var c = (h || (h = b("ErrorUtils"))).normalizeError(a);
            x().setEventType("client_error").setIsError(!0).setFile(c.script).setLineNumber(c.line).setMessage(a.message).setStackTrace(c.stack).logVital()
        })
    }
    a = {
        init: function(a, c, d, e, f, g, h, w, x, y, z, A, B) {
            t = A, o = h, j = c, q = x, p = w, l = e, s = z, r = y, m = f ? new(i || (i = b("URI")))(f).getQualifiedURI().toString() : null, n = g, k = b("immutable").Map(d), u = B, b("UniversalMicroSiteViewportTracking").init(), J(), v || (v = !0, new(b("UniversalMicroSiteClickTracker"))(C, a ? H : null), b("UniversalMicroSiteVideoTracking").init(I), L(), K())
        },
        performAsyncClickLog: function(a) {
            v || g(0, 3658), C(a)
        },
        performAsyncSearchLog: function(a) {
            v || g(0, 3658), D(a)
        },
        performDropdownCloseLog: function(a, b) {
            v && E(a, b)
        },
        performDropdownOpenLog: function(a) {
            v && F(a)
        },
        performComponentLoadedLog: function(a, b) {
            v && G(a, b)
        },
        subscribeDataManipulator: function(a) {
            return z(a)
        }
    };
    e.exports = a
}), null);
__d("WhatsAppWebPage", ["cx", "CSS"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = {
        toggleLanguagePicker: function() {
            var a = document.getElementById("lang-picker"),
                b = document.getElementById("lang-picker_bg");
            a !== null && b !== null && (a.style.display = a.style.display === "none" ? "block" : "none", b.style.display = a.style.display)
        },
        initLanguagePicker: function() {
            var a = document.getElementById("lang"),
                b = document.getElementById("lang-picker_bg");
            a !== null && b !== null && (a.onclick = this.toggleLanguagePicker, b.onclick = this.toggleLanguagePicker)
        },
        initSearchToggle: function() {
            var a = document.getElementById("icon-search");
            a !== null && (a.onclick = function() {
                var a = document.getElementById("subheader");
                if (a) {
                    var c = b("CSS").matchesSelector(a, "_2ziw");
                    window.scrollY > 5 ? (window.scrollTo(0, 0), c || b("CSS").addClass(a, "_2ziw")) : b("CSS").toggleClass(a, "_2ziw")
                }
            })
        },
        initMobileMenu: function() {
            var a = document.getElementById("icon-drawer-open"),
                c = document.getElementById("icon-drawer-close"),
                d = "_2ziw";
            a !== null && c !== null && (a.onclick = function() {
                var a = document.getElementById("menu-drawer");
                a !== null && b("CSS").addClass(a, d)
            }, c.onclick = function() {
                var a = document.getElementById("menu-drawer");
                a !== null && b("CSS").removeClass(a, d)
            })
        },
        makeFixedHeaderTransluscent: function(a, c, d) {
            d === void 0 && (d = !1), d && (window.onscroll = function() {
                var d = document.getElementsByClassName(a);
                if (d.length > 0) {
                    d = d[0];
                    var e = Math.max(window.pageYOffset, document.documentElement ? document.documentElement.scrollTop : 0, document.body ? document.body.scrollTop : 0);
                    e ? b("CSS").addClass(d, c) : b("CSS").removeClass(d, c)
                }
            })
        }
    };
    e.exports = a
}), null);
__d("ImmutableServerCallableWrapper", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("immutable")
}), null);